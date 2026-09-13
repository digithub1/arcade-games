(function(){
"use strict";

/* ============ SETUP ============ */
const stage = document.getElementById('stage');
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

let DPR = Math.min(window.devicePixelRatio || 1, 2.5);
let W = 0, H = 0; // logical (CSS) size
const PORTRAIT_RATIO = 9/16;
const LANDSCAPE_RATIO = 16/9;
const isTouchDevice = ('ontouchstart' in window) || navigator.maxTouchPoints > 0;
const rotateOverlay = document.getElementById('rotateOverlay');

function layoutStage(){
  // Phones use a portrait 9:16 playfield. Laptops/desktops use
  // a landscape 16:9 playfield. The stage always fits the viewport
  // while preserving its selected aspect ratio.
  const vw = window.innerWidth, vh = window.innerHeight;
  const phonePortrait = isTouchDevice && vh >= vw;
  const ratio = phonePortrait ? PORTRAIT_RATIO : LANDSCAPE_RATIO;
  let w, h;
  if(vw / vh > ratio){
    h = vh; w = h * ratio;
  } else {
    w = vw; h = w / ratio;
  }
  stage.style.width = Math.round(w) + 'px';
  stage.style.height = Math.round(h) + 'px';
  stage.dataset.orientation = phonePortrait ? 'portrait' : 'landscape';
}

function checkOrientation(){
  // Only hard-block with a rotate prompt on actual touch/mobile devices —
  // desktop just gets a letterboxed portrait window since it can't rotate.
  const isLandscape = window.innerWidth > window.innerHeight;
  const block = isTouchDevice && isLandscape;
  rotateOverlay.classList.toggle('active', block);
  // Gameplay itself is paused/resumed from inside the main loop (see loop()),
  // which runs after the game state variables below have been initialized.
}

function resize(){
  layoutStage();
  checkOrientation();
  const r = stage.getBoundingClientRect();
  W = r.width; H = r.height;
  canvas.width = Math.round(W * DPR);
  canvas.height = Math.round(H * DPR);
  canvas.style.width = W + 'px';
  canvas.style.height = H + 'px';
  ctx.setTransform(DPR,0,0,DPR,0,0);
}
window.addEventListener('resize', resize);
window.addEventListener('orientationchange', resize);
resize();

function tryLockPortrait(){
  // Phones may stay portrait for the intended touch experience.
  // Never force portrait on laptops/desktops.
  if(!isTouchDevice) return;
  try{
    if(screen.orientation && screen.orientation.lock){
      screen.orientation.lock('portrait').catch(()=>{});
    }
  }catch(e){}
}

/* ============ UTIL ============ */
function rand(a,b){ return a + Math.random()*(b-a); }
function randi(a,b){ return Math.floor(rand(a,b+1)); }
function clamp(v,a,b){ return Math.max(a,Math.min(b,v)); }
function lerp(a,b,t){ return a+(b-a)*t; }
function dist(x1,y1,x2,y2){ return Math.hypot(x2-x1,y2-y1); }

/*
  COORDINATE SYSTEM
  ------------------
  Every gameplay object (player, anchors, obstacles) stores its position
  in WORLD coordinates. World Y decreases as the player climbs higher
  (same orientation as screen Y — down is positive).

  camY = the world-Y value that currently sits at the top of the screen.
  To convert a world position to a screen position: screenY = worldY - camY.

  The camera only ever moves UP (camY decreases) as the player climbs;
  it never scrolls back down, so falling below the visible screen is
  what triggers death — matching a standard vertical climber.
*/
function worldToScreenY(y){ return y - camY; }

/* ============ AUDIO (lightweight synthesized) ============ */
let audioCtx = null;
let soundOn = true;
function ensureAudio(){
  if(!audioCtx){
    try{ audioCtx = new (window.AudioContext||window.webkitAudioContext)(); }catch(e){}
  }
}
function beep(freq, dur, type, vol, glideTo){
  if(!soundOn || !audioCtx) return;
  const t0 = audioCtx.currentTime;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = type || 'sine';
  osc.frequency.setValueAtTime(freq, t0);
  if(glideTo) osc.frequency.exponentialRampToValueAtTime(glideTo, t0+dur);
  gain.gain.setValueAtTime(0.0001, t0);
  gain.gain.exponentialRampToValueAtTime(vol||0.2, t0+0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, t0+dur);
  osc.connect(gain); gain.connect(audioCtx.destination);
  osc.start(t0); osc.stop(t0+dur+0.02);
}
const SFX = {
  hookLaunch: ()=>beep(520,0.09,'square',0.12,760),
  hookImpact: ()=>beep(220,0.08,'triangle',0.18),
  release:    ()=>beep(340,0.1,'sawtooth',0.12,180),
  perfect:    ()=>{beep(660,0.12,'square',0.15,980); setTimeout(()=>beep(880,0.12,'square',0.12),60);},
  combo:      ()=>beep(500+Math.random()*200,0.06,'square',0.08),
  warn:       ()=>beep(160,0.1,'sawtooth',0.1),
  crash:      ()=>beep(90,0.3,'sawtooth',0.22,40),
  click:      ()=>beep(440,0.05,'square',0.08),
  best:       ()=>{[660,880,1100].forEach((f,i)=>setTimeout(()=>beep(f,0.15,'square',0.14),i*90));}
};

/* ============ PERSISTENT BEST ============ */
let best = 0;
try{ best = parseInt(localStorage.getItem('hookshot_best')||'0',10) || 0; }catch(e){}
function saveBest(v){
  best = v;
  try{ localStorage.setItem('hookshot_best', String(Math.floor(best))); }catch(e){}
}

/* ============ GAME CONSTANTS ============ */
const GRAV = 1500;             // px/s^2 (world space)
const ANCHOR_TAP_RADIUS = 70;  // forgiving tap radius (logical px, extra to visual)
const ROPE_MIN = 90, ROPE_MAX = 340;

/* ============ STATE ============ */
let state = 'start'; // start, playing, paused, gameover
let particles = [];
let anchors = [];
let obstacles = [];
let camY = 0;           // world-Y at top of screen
let bgLayers = [];
let player, hook;
let distance = 0;
let combo = 0, comboTimer = 0;
let score = 0;
let shakeMag = 0;
let timeLast = 0;
let spawnCursorY = 0;   // world y above which anchors have been generated
let difficultyDist = 0;

/* ============ PLAYER ============ */
function newPlayer(){
  return {
    x: W*0.5, y: H*0.72,   // WORLD coords; camY starts at 0 so this equals screen too
    sy: H*0.72,             // cached screen-Y, recomputed every frame
    vx:0, vy:0,
    r: 16,
    mode:'idle', // idle (standing on start platform), falling, swinging, launching
    rotation:0,
    anchor:null,
    angle:0, angVel:0, ropeLen:180,
    animT:0,
  };
}

let platform = null;
function makePlatform(){
  return {
    x: player.x, y: player.y + player.r + 2,   // WORLD coords, top surface
    w: 150,
  };
}

function newHook(){
  return { active:false, x:0,y:0, tx:0,ty:0, t:0, target:null };
}

/* ============ ANCHOR / OBSTACLE FACTORIES ============ */
let anchorId = 0;
function makeAnchor(x, y, type){
  anchorId++;
  return {
    id:anchorId, x, y, type: type||'normal',   // x,y in WORLD coords
    r: 26, pulse: Math.random()*Math.PI*2,
    used:false, broken:false, breakT:0,
    moveRangeX: rand(60,140),
    baseX:x, baseY:y, moveT: Math.random()*10,
    glow:0,
  };
}
function makeObstacle(x,y,type){
  return {
    x,y,type: type||'spike',                    // x,y in WORLD coords
    w: type==='laser'?6:34, h: type==='laser'?200:22,
    baseX:x, range: rand(80,160), t: Math.random()*10,
    angle:0, active:true,
  };
}

/* ============ PROCEDURAL GENERATION ============ */
function resetLevel(){
  anchors = []; obstacles = [];
  platform = makePlatform();
  difficultyDist = 0;
  // First anchor: comfortably within reach of the starting platform,
  // offset to a side so the very first swing feels natural rather than
  // a straight vertical yank.
  const firstX = clamp(player.x + (Math.random()<0.5?-1:1)*100, 90, W-90);
  spawnCursorY = player.y - 230;
  anchors.push(makeAnchor(firstX, spawnCursorY, 'normal'));
  for(let i=0;i<10;i++) generateNextChunk();
}

function generateNextChunk(){
  const diff = clamp(difficultyDist/1800, 0, 1); // 0 -> easy, 1 -> hard
  const gapMin = lerp(120,190,diff);
  const gapMax = lerp(190,260,diff);
  const gap = rand(gapMin, gapMax);
  spawnCursorY -= gap;
  difficultyDist += gap;

  const marginX = 70;
  const x = rand(marginX, W-marginX);

  let type = 'normal';
  const r = Math.random();
  if(diff > 0.15 && r < 0.16) type='moving';
  else if(diff > 0.3 && r < 0.24) type='fragile';
  else if(r < 0.30) type='golden';
  else if(diff > 0.2 && r < 0.36) type='boost';

  anchors.push(makeAnchor(x, spawnCursorY, type));

  if(difficultyDist > 260){
    const obChance = lerp(0.08,0.42,diff);
    if(Math.random() < obChance){
      const oy = spawnCursorY + rand(gap*0.3, gap*0.7);
      let ox = rand(marginX, W-marginX);
      if(Math.abs(ox-x) < 60) ox = clamp(ox + (ox<W/2?90:-90), marginX, W-marginX);
      const ot = Math.random();
      let otype = 'spike';
      if(diff>0.25 && ot<0.35) otype='drone';
      else if(diff>0.45 && ot<0.15) otype='laser';
      obstacles.push(makeObstacle(ox, oy, otype));
    }
  }
}

/* ============ INPUT ============ */
let pointerActive = false;
let releaseOnPointerUp = false;

function pointerDown(px,py){
  ensureAudio();
  if(state!=='playing') return;
  if(rotateOverlay.classList.contains('active')) return;

  // Desktop/WebView safety: if a hook is already attached, a new click
  // immediately detaches it. This guarantees the player can never remain
  // permanently stuck if a browser/iframe loses a mouseup event.
  if(player.mode==='swinging'){
    releaseOnPointerUp = false;
    releaseSwing();
    return;
  }

  let bestA=null, bestD=Infinity;
  for(const a of anchors){
    if(a.broken) continue;
    const sy = worldToScreenY(a.y);
    if(sy < -80 || sy > H+80) continue;
    const d = dist(px, py, a.x, sy);
    const reach = a.r + ANCHOR_TAP_RADIUS;
    if(d < reach && d < bestD){
      const pd = dist(player.x, player.sy, a.x, sy);
      if(pd < ROPE_MAX+40){ bestA=a; bestD=d; }
    }
  }
  if(bestA){
    fireHook(bestA);
    // Once the hook reaches the anchor, the same held input releases it.
    // If mouseup is lost, the next click still releases via pointerDown().
    releaseOnPointerUp = true;
  }
}
function pointerUp(){
  if(player && player.mode==='swinging' && releaseOnPointerUp){
    releaseOnPointerUp = false;
    releaseSwing();
  }
}

// Unified pointer input. Pointer capture makes mouse release reliable even
// when the cursor leaves the canvas/iframe for a moment. This fixes the
// desktop failure mode where the player could remain permanently attached.
function eventPoint(e){
  const rect = canvas.getBoundingClientRect();
  return { x:e.clientX-rect.left, y:e.clientY-rect.top };
}

canvas.addEventListener('pointerdown', e=>{
  if(e.pointerType==='mouse' && e.button!==0) return;
  e.preventDefault();
  try{ canvas.setPointerCapture(e.pointerId); }catch(_){}
  const p = eventPoint(e);
  pointerActive = true;
  pointerDown(p.x,p.y);
},{passive:false});

canvas.addEventListener('pointerup', e=>{
  if(e.pointerType==='mouse' && e.button!==0) return;
  e.preventDefault();
  pointerActive = false;
  pointerUp();
  try{ canvas.releasePointerCapture(e.pointerId); }catch(_){}
},{passive:false});

canvas.addEventListener('pointercancel', e=>{
  pointerActive = false;
  pointerUp();
},{passive:false});

// Keep touch-specific fallback for older WebViews.
canvas.addEventListener('touchstart', e=>{
  e.preventDefault();
  const t = e.changedTouches[0];
  const rect = canvas.getBoundingClientRect();
  pointerActive = true;
  pointerDown(t.clientX-rect.left, t.clientY-rect.top);
},{passive:false});
canvas.addEventListener('touchend', e=>{
  e.preventDefault();
  pointerActive = false;
  pointerUp();
},{passive:false});

// Extra document-level release safety for WG Playground/iframe focus changes.
window.addEventListener('mouseup', ()=>{
  if(pointerActive){ pointerActive=false; pointerUp(); }
});
document.addEventListener('pointerup', ()=>{
  if(pointerActive){ pointerActive=false; pointerUp(); }
});
window.addEventListener('blur', ()=>{
  if(pointerActive){ pointerActive=false; pointerUp(); }
});
window.addEventListener('keydown', e=>{
  if(e.code==='Space'){ e.preventDefault(); pointerUp(); }
  if(e.key==='r' || e.key==='R'){ if(state==='playing'||state==='gameover') startGame(); }
});

/* ============ HOOK / SWING LOGIC ============ */
function fireHook(anchor){
  hook.active = true;
  hook.x = player.x; hook.y = player.sy;
  hook.tx = anchor.x; hook.ty = worldToScreenY(anchor.y);
  hook.t = 0;
  hook.target = anchor;
  SFX.hookLaunch();
}

function connectSwing(anchor){
  player.anchor = anchor;
  // all physics from here on is done in WORLD coordinates
  const dx = player.x - anchor.x, dy = player.y - anchor.y;
  player.ropeLen = clamp(Math.hypot(dx,dy), ROPE_MIN, ROPE_MAX);
  player.angle = Math.atan2(dy,dx);
  const tangX = -Math.sin(player.angle), tangY = Math.cos(player.angle);
  const speedAlong = player.vx*tangX + player.vy*tangY;
  player.angVel = speedAlong / player.ropeLen;
  player.mode = 'swinging';
  anchor.glow = 1;
  anchor.used = true;

  if(anchor.type==='fragile'){ anchor.breakT = 0.55; }

  const asy = worldToScreenY(anchor.y);
  spawnBurst(anchor.x, asy, '#8fe9ff', 10);
  spawnBurst(player.x, player.sy, '#ffffff', 6);
  shakeMag = Math.max(shakeMag, 3);
  SFX.hookImpact();

  bumpCombo();
}

function releaseSwing(){
  if(player.mode!=='swinging' || !player.anchor) return;
  const a = player.anchor;
  const tangX = -Math.sin(player.angle), tangY = Math.cos(player.angle);
  let speed = player.angVel * player.ropeLen;
  let vx = tangX*speed, vy = tangY*speed;

  const perfectRelease = vy < -160 && Math.abs(speed) > 220;

  if(a.type==='boost'){
    vx *= 1.55; vy *= 1.55;
    spawnBurst(player.x, player.sy, '#ffb347', 16);
  }
  if(a.type==='golden'){
    score += 150;
    showFloat(player.x, player.sy-20, '+150', '#ffd166', 16);
  }

  player.vx = vx; player.vy = vy;
  player.mode = 'launching';
  player.anchor = null;
  a.glow = 0.6;

  if(perfectRelease){
    player.vx *= 1.25; player.vy *= 1.25;
    showFloat(player.x, player.sy-30, 'PERFECT RELEASE', '#5be9ff', 15, true);
    spawnBurst(player.x, player.sy, '#5be9ff', 22);
    shakeMag = Math.max(shakeMag, 5);
    score += 80;
    SFX.perfect();
  } else {
    SFX.release();
  }
}

/* ============ COMBO ============ */
function bumpCombo(){
  combo++;
  comboTimer = 3.2;
  score += 20 + combo*4;
  const el = document.getElementById('comboBlock');
  el.classList.remove('pop'); void el.offsetWidth; el.classList.add('pop');
  if(combo>1) SFX.combo();
}
function resetCombo(){
  combo = 0;
  comboTimer = 0;
}

/* ============ FLOATING TEXT ============ */
function showFloat(x,y,text,color,size,big){
  const layer = document.getElementById('floatLayer');
  const d = document.createElement('div');
  d.className = 'floatText';
  d.style.left = x+'px';
  d.style.top = y+'px';
  d.style.color = color;
  d.style.fontSize = (size||14)+'px';
  if(big) d.style.letterSpacing = '1px';
  d.textContent = text;
  layer.appendChild(d);
  setTimeout(()=>d.remove(), 950);
}

let hintShown = {tap:false, release:false};

/* ============ PARTICLES (screen-space, short-lived) ============ */
function spawnBurst(x,y,color,n){
  for(let i=0;i<n;i++){
    const a = Math.random()*Math.PI*2;
    const sp = rand(40,240);
    particles.push({
      x,y, vx:Math.cos(a)*sp, vy:Math.sin(a)*sp,
      life: rand(0.3,0.7), t:0, color, size: rand(2,4.5)
    });
  }
}
function spawnStreak(x,y,vx,vy,color){
  particles.push({x,y,vx:-vx*0.15+rand(-20,20), vy:-vy*0.15+rand(-20,20), life:rand(0.25,0.45), t:0, color, size:rand(2,4)});
}

function updateParticles(dt){
  for(let i=particles.length-1;i>=0;i--){
    const p = particles[i];
    p.t += dt;
    if(p.t>p.life){ particles.splice(i,1); continue; }
    p.x += p.vx*dt; p.y += p.vy*dt;
    p.vx *= (1-2.2*dt); p.vy = p.vy*(1-1.2*dt) + 300*dt*0.15;
  }
}
function drawParticles(){
  for(const p of particles){
    const k = 1-(p.t/p.life);
    ctx.globalAlpha = clamp(k,0,1);
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.size*k,0,Math.PI*2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
}

/* ============ BACKGROUND ============ */
function initBg(){
  bgLayers = [];
  const far = { speed:0.15, buildings:[] };
  let x=-40;
  while(x < W+80){
    const w = rand(50,100), h = rand(120,320);
    far.buildings.push({x,w,h, hue: rand(240,270)});
    x += w + rand(6,18);
  }
  bgLayers.push(far);
  const mid = { speed:0.35, buildings:[] };
  x=-40;
  while(x < W+80){
    const w = rand(40,80), h = rand(160,420);
    mid.buildings.push({x,w,h, hue: rand(255,285), windows: randi(3,8)});
    x += w + rand(4,14);
  }
  bgLayers.push(mid);
}

function drawBackground(){
  const grad = ctx.createLinearGradient(0,0,0,H);
  grad.addColorStop(0,'#241146');
  grad.addColorStop(0.45,'#4a1f63');
  grad.addColorStop(0.72,'#b34d6b');
  grad.addColorStop(1,'#ffb27a');
  ctx.fillStyle = grad;
  ctx.fillRect(0,0,W,H);

  const sy = H*0.78 - camY*0.05;
  ctx.save();
  const sunGrad = ctx.createRadialGradient(W*0.5,sy,10,W*0.5,sy,180);
  sunGrad.addColorStop(0,'rgba(255,230,180,0.9)');
  sunGrad.addColorStop(1,'rgba(255,230,180,0)');
  ctx.fillStyle = sunGrad;
  ctx.beginPath(); ctx.arc(W*0.5, sy, 180,0,Math.PI*2); ctx.fill();
  ctx.fillStyle = '#ffe9c2';
  ctx.beginPath(); ctx.arc(W*0.5, sy, 60,0,Math.PI*2); ctx.fill();
  ctx.restore();

  for(const layer of bgLayers){
    const off = (-camY*layer.speed) % (W+140);
    for(const b of layer.buildings){
      const bx = ((b.x - off) % (W+140) + (W+140)) % (W+140) - 70;
      const by = H - b.h*0.9;
      ctx.fillStyle = `hsla(${b.hue},45%,${layer.speed>0.3?18:12}%,0.9)`;
      ctx.fillRect(bx,by,b.w,b.h);
      if(b.windows){
        ctx.fillStyle = 'rgba(255,214,140,0.55)';
        for(let i=0;i<b.windows;i++){
          const wx = bx + 6 + (i%3)*((b.w-12)/3);
          const wy = by + 10 + Math.floor(i/3)*18;
          if(wy < H) ctx.fillRect(wx,wy,4,7);
        }
      }
    }
  }

  ctx.fillStyle = 'rgba(20,10,40,0.18)';
  ctx.fillRect(0,H*0.55,W,H*0.45);
}

/* ============ ANCHOR / OBSTACLE RENDER + UPDATE ============ */
function updateAnchors(dt){
  for(const a of anchors){
    a.pulse += dt*2;
    a.glow = Math.max(0, a.glow - dt*1.4);
    if(a.type==='moving'){
      a.moveT += dt;
      a.x = a.baseX + Math.sin(a.moveT*0.9)*a.moveRangeX;
    }
    if(a.type==='fragile' && a.breakT>0){
      a.breakT -= dt;
      if(a.breakT<=0 && !a.broken){
        a.broken = true;
        if(player.anchor===a){
          spawnBurst(player.x, player.sy, '#ff6b6b', 14);
          player.mode='falling';
          player.anchor=null;
          shakeMag = Math.max(shakeMag,4);
        }
      }
    }
  }
  anchors = anchors.filter(a => worldToScreenY(a.y) < H+400);
  while(spawnCursorY > camY - H*2.2){
    generateNextChunk();
  }
}

function drawAnchors(){
  for(const a of anchors){
    if(a.broken) continue;
    const sy = worldToScreenY(a.y);
    if(sy < -60 || sy > H+60) continue;
    const pulse = 0.5+0.5*Math.sin(a.pulse);
    let col = '#5be9ff';
    if(a.type==='golden') col = '#ffd166';
    if(a.type==='boost') col = '#ff9f45';
    if(a.type==='fragile') col = '#ff6b6b';
    if(a.type==='moving') col = '#c77dff';

    ctx.save();
    ctx.translate(a.x, sy);
    const glowR = a.r + 8 + pulse*4 + a.glow*14;
    const rg = ctx.createRadialGradient(0,0,4,0,0,glowR);
    rg.addColorStop(0, col+'aa');
    rg.addColorStop(1, col+'00');
    ctx.fillStyle = rg;
    ctx.beginPath(); ctx.arc(0,0,glowR,0,Math.PI*2); ctx.fill();

    ctx.strokeStyle = col;
    ctx.lineWidth = 3;
    ctx.beginPath(); ctx.arc(0,0,a.r,0,Math.PI*2); ctx.stroke();

    ctx.fillStyle = '#0f0a20';
    ctx.beginPath(); ctx.arc(0,0,a.r-6,0,Math.PI*2); ctx.fill();

    ctx.fillStyle = col;
    ctx.beginPath(); ctx.arc(0,0,5+pulse*2,0,Math.PI*2); ctx.fill();

    ctx.strokeStyle = col+'88';
    ctx.lineWidth=2;
    for(let i=0;i<3;i++){
      const ang = a.pulse*0.6 + i*(Math.PI*2/3);
      ctx.beginPath();
      ctx.moveTo(Math.cos(ang)*(a.r-10), Math.sin(ang)*(a.r-10));
      ctx.lineTo(Math.cos(ang)*(a.r-3), Math.sin(ang)*(a.r-3));
      ctx.stroke();
    }

    if(a.type==='fragile' && a.breakT>0 && a.breakT<0.55){
      ctx.strokeStyle = 'rgba(255,255,255,0.8)';
      ctx.lineWidth=1.5;
      ctx.beginPath();
      ctx.moveTo(-a.r*0.5,-a.r*0.3); ctx.lineTo(a.r*0.3,a.r*0.5);
      ctx.stroke();
    }

    ctx.restore();
  }
}

function updateObstacles(dt){
  for(const o of obstacles){
    o.t += dt;
    if(o.type==='drone'){
      o.x = o.baseX + Math.sin(o.t*1.1)*o.range;
      o.angle = Math.sin(o.t*4)*0.1;
    }
    if(o.type==='laser'){
      o.active = Math.sin(o.t*1.4) > -0.2;
    }
  }
  obstacles = obstacles.filter(o => worldToScreenY(o.y) < H+400);
}

function drawPlatform(){
  if(!platform) return;
  const sy = worldToScreenY(platform.y);
  if(sy < -120 || sy > H+120) return;
  const x = platform.x, w = platform.w;

  ctx.save();
  // support struts
  ctx.strokeStyle = 'rgba(20,12,40,0.9)';
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(x-w/2+12, sy+8); ctx.lineTo(x-w/2+12, sy+46);
  ctx.moveTo(x+w/2-12, sy+8); ctx.lineTo(x+w/2-12, sy+46);
  ctx.stroke();

  // slab
  const grad = ctx.createLinearGradient(0,sy-10,0,sy+16);
  grad.addColorStop(0,'#3a2b5c');
  grad.addColorStop(1,'#241a3a');
  ctx.fillStyle = grad;
  ctx.fillRect(x-w/2, sy, w, 16);
  ctx.strokeStyle = 'rgba(255,255,255,0.08)';
  ctx.lineWidth=1;
  ctx.strokeRect(x-w/2, sy, w, 16);

  // hazard stripe along the edge
  ctx.fillStyle = '#ffd166';
  ctx.fillRect(x-w/2, sy-4, w, 4);
  ctx.save();
  ctx.beginPath(); ctx.rect(x-w/2, sy-4, w, 4); ctx.clip();
  ctx.fillStyle = '#1a1230';
  for(let i=-w/2; i<w/2; i+=14){
    ctx.beginPath();
    ctx.moveTo(x+i, sy-4); ctx.lineTo(x+i+7, sy-4); ctx.lineTo(x+i+3, sy); ctx.lineTo(x+i-4,sy);
    ctx.closePath(); ctx.fill();
  }
  ctx.restore();

  // small vent details
  ctx.fillStyle = 'rgba(0,0,0,0.35)';
  ctx.fillRect(x-w/2+18, sy+4, 20, 6);
  ctx.fillRect(x+w/2-38, sy+4, 20, 6);

  ctx.restore();
}

function drawObstacles(){
  for(const o of obstacles){
    const sy = worldToScreenY(o.y);
    if(sy < -80 || sy > H+80) continue;
    ctx.save();
    ctx.translate(o.x, sy);
    if(o.type==='spike'){
      ctx.fillStyle = '#ff5a5a';
      ctx.strokeStyle = '#2a0808';
      ctx.lineWidth=2;
      const n=4, sw=o.w/n;
      for(let i=0;i<n;i++){
        ctx.beginPath();
        ctx.moveTo(-o.w/2+i*sw, o.h/2);
        ctx.lineTo(-o.w/2+i*sw+sw/2, -o.h/2);
        ctx.lineTo(-o.w/2+i*sw+sw, o.h/2);
        ctx.closePath();
        ctx.fill(); ctx.stroke();
      }
    } else if(o.type==='drone'){
      ctx.rotate(o.angle);
      ctx.fillStyle='#241a3a';
      ctx.fillRect(-16,-6,32,12);
      ctx.strokeStyle='#c77dff'; ctx.lineWidth=2;
      ctx.beginPath(); ctx.moveTo(-22,-8); ctx.lineTo(-10,-8); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(22,-8); ctx.lineTo(10,-8); ctx.stroke();
      const blink = 0.5+0.5*Math.sin(o.t*8);
      ctx.fillStyle = `rgba(255,80,80,${0.5+blink*0.5})`;
      ctx.beginPath(); ctx.arc(0,2,4,0,Math.PI*2); ctx.fill();
    } else if(o.type==='laser'){
      if(o.active){
        ctx.fillStyle='rgba(255,90,90,0.85)';
        ctx.shadowColor='#ff5a5a'; ctx.shadowBlur=14;
        ctx.fillRect(-o.w/2,-o.h/2,o.w,o.h);
        ctx.shadowBlur=0;
      } else {
        ctx.strokeStyle='rgba(255,140,140,0.35)';
        ctx.setLineDash([4,4]);
        ctx.beginPath(); ctx.moveTo(0,-o.h/2); ctx.lineTo(0,o.h/2); ctx.stroke();
        ctx.setLineDash([]);
      }
    }
    ctx.restore();
  }
}

/* ============ COLLISION (all in screen space, using cached player.sy) ============ */
function checkObstacleCollisions(){
  for(const o of obstacles){
    const sy = worldToScreenY(o.y);
    if(o.type==='spike'){
      if(Math.abs(player.x-o.x) < o.w/2+player.r*0.6 && Math.abs(player.sy-sy) < o.h/2+player.r*0.6){
        return true;
      }
    } else if(o.type==='drone'){
      if(dist(player.x,player.sy,o.x,sy) < player.r+16) return true;
    } else if(o.type==='laser'){
      if(o.active && Math.abs(player.x-o.x) < o.w/2+player.r*0.7 && Math.abs(player.sy-sy) < o.h/2) return true;
    }
  }
  return false;
}

/* ============ PLAYER UPDATE (WORLD coords) ============ */
function updatePlayer(dt){
  player.animT += dt;

  if(player.mode==='idle'){
    // Standing on the start platform — no gravity, no fail state, until
    // the player fires their first hook.
    player.sy = worldToScreenY(player.y);
    return false;
  }

  if(player.mode==='swinging' && player.anchor){
    const a = player.anchor;
    const g = GRAV*0.55;
    const angAccel = -(g/player.ropeLen)*Math.cos(player.angle);
    player.angVel += angAccel*dt;
    player.angVel *= (1-0.2*dt);
    player.angle += player.angVel*dt;
    player.x = a.x + Math.cos(player.angle)*player.ropeLen;
    player.y = a.y + Math.sin(player.angle)*player.ropeLen;
    player.vx = -Math.sin(player.angle)*player.angVel*player.ropeLen;
    player.vy = Math.cos(player.angle)*player.angVel*player.ropeLen;
    player.rotation = Math.sin(player.angle)*0.3;
  } else {
    player.vy += GRAV*dt*(player.mode==='launching'?0.85:1.0);
    player.x += player.vx*dt;
    player.y += player.vy*dt;
    player.rotation = clamp(player.vy*0.0009 + player.vx*0.0006, -0.9, 0.9);
    if(player.vy > 60 && player.mode!=='falling') player.mode='falling';
  }

  if(player.x < player.r){ player.x=player.r; player.vx = Math.abs(player.vx)*0.4; }
  if(player.x > W-player.r){ player.x=W-player.r; player.vx = -Math.abs(player.vx)*0.4; }

  // camera only ever climbs (camY decreases) — never scrolls back down
  const desiredScreenY = H*0.42;
  const desiredCam = player.y - desiredScreenY;
  if(desiredCam < camY){
    camY += (desiredCam - camY) * clamp(dt*4.5,0,1);
  }

  player.sy = worldToScreenY(player.y);

  distance = Math.max(distance, Math.floor(-camY/12));

  const speed = Math.hypot(player.vx,player.vy);
  if(speed>260 && Math.random()<0.6) spawnStreak(player.x,player.sy,player.vx,player.vy, speed>500?'#ffffff':'#5be9ff');

  if(comboTimer>0){
    comboTimer -= dt;
    if(comboTimer<=0) resetCombo();
  }

  // death: fell far enough below the visible screen while not attached
  if(player.mode!=='swinging' && player.sy > H + 220) return true;
  if(checkObstacleCollisions()) return true;

  return false;
}

/* ============ HOOK PROJECTILE UPDATE ============ */
function updateHook(dt){
  if(!hook.active) return;
  hook.t += dt*4.4;
  if(hook.t>=1){
    hook.active = false;
    if(hook.target && !hook.target.broken){
      connectSwing(hook.target);
    }
    return;
  }
  hook.x = lerp(player.x, hook.tx, hook.t);
  hook.y = lerp(player.sy, hook.ty, hook.t);
}

/* ============ DRAW PLAYER (screen space) ============ */
function drawPlayer(){
  ctx.save();
  ctx.translate(player.x, player.sy);
  ctx.rotate(player.rotation);

  const speed = Math.hypot(player.vx,player.vy);
  if(speed>200){
    ctx.save();
    ctx.rotate(-player.rotation);
    const ang = Math.atan2(player.vy,player.vx);
    ctx.rotate(ang - Math.PI);
    ctx.globalAlpha = clamp(speed/900,0,0.5);
    const grad = ctx.createLinearGradient(0,0,60,0);
    grad.addColorStop(0,'rgba(255,255,255,0.6)');
    grad.addColorStop(1,'rgba(255,255,255,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0,-4,60,8);
    ctx.restore();
    ctx.globalAlpha=1;
  }

  const idle = player.mode==='idle';
  const bob = idle ? Math.sin(player.animT*2.4)*1.5 : 0;
  ctx.translate(0, bob);

  const t = player.animT*10;
  ctx.strokeStyle='#1a1a2e'; ctx.lineWidth=5; ctx.lineCap='round';
  ctx.beginPath();
  if(idle){
    ctx.moveTo(-3,4); ctx.lineTo(-3,16);
    ctx.moveTo(3,4); ctx.lineTo(3,16);
  } else {
    ctx.moveTo(-3,4); ctx.lineTo(-3+Math.sin(t)*6, 16);
    ctx.moveTo(3,4); ctx.lineTo(3-Math.sin(t)*6, 16);
  }
  ctx.stroke();

  ctx.fillStyle = '#241a3a';
  ctx.beginPath();
  ctx.ellipse(0,-2,10,13,0,0,Math.PI*2);
  ctx.fill();

  ctx.fillStyle = '#e0304f';
  ctx.beginPath();
  ctx.ellipse(-6,-6,5,8,0.4,0,Math.PI*2);
  ctx.fill();

  ctx.fillStyle = '#f2c9a0';
  ctx.beginPath(); ctx.arc(0,-16,7,0,Math.PI*2); ctx.fill();
  ctx.fillStyle = '#1a1a2e';
  ctx.beginPath(); ctx.arc(0,-19,7,Math.PI,0); ctx.fill();

  if(player.mode==='swinging' && player.anchor){
    const a = player.anchor;
    const asy = worldToScreenY(a.y);
    const ax = a.x-player.x, ay = asy-player.sy;
    const ang = Math.atan2(ay,ax) - player.rotation;
    ctx.strokeStyle='#241a3a'; ctx.lineWidth=5; ctx.lineCap='round';
    ctx.beginPath();
    ctx.moveTo(0,-8);
    ctx.lineTo(Math.cos(ang)*18, -8+Math.sin(ang)*18);
    ctx.stroke();
  }

  ctx.restore();
}

/* ============ DRAW ROPE / HOOK (screen space) ============ */
function drawRope(){
  if(!player || !hook) return;
  if(player.mode==='swinging' && player.anchor){
    const a = player.anchor;
    const asy = worldToScreenY(a.y);
    ctx.strokeStyle = 'rgba(180,230,255,0.85)';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(a.x, asy);
    const midx = (a.x+player.x)/2, midy=(asy+player.sy)/2;
    const wob = Math.sin(player.animT*14)*2;
    ctx.quadraticCurveTo(midx+wob, midy, player.x, player.sy);
    ctx.stroke();
    ctx.strokeStyle='rgba(255,255,255,0.5)';
    ctx.lineWidth=1;
    ctx.stroke();
  }
  if(hook.active){
    ctx.strokeStyle = 'rgba(180,230,255,0.7)';
    ctx.lineWidth=2.5;
    ctx.beginPath();
    ctx.moveTo(player.x, player.sy);
    ctx.lineTo(hook.x, hook.y);
    ctx.stroke();
    ctx.fillStyle='#cdeeff';
    ctx.beginPath(); ctx.arc(hook.x,hook.y,5,0,Math.PI*2); ctx.fill();
  }
}

/* ============ MAIN LOOP ============ */
function loop(ts){
  requestAnimationFrame(loop);
  if(!timeLast) timeLast = ts;
  let dt = (ts-timeLast)/1000;
  timeLast = ts;
  dt = Math.min(dt, 1/30);

  if(state!=='playing' || rotateOverlay.classList.contains('active')){
    if(state==='start') updateMenuPreview(dt);
    render(dt);
    return;
  }

  try{
    updateHook(dt);
    const died = updatePlayer(dt);
    updateAnchors(dt);
    updateObstacles(dt);
    updateParticles(dt);
    shakeMag = Math.max(0, shakeMag - dt*10);

    updateHUD();

    if(died){
      onDeath();
    }
  } catch(err){
    console.error('update error:', err);
  }

  render(dt);
}

function setupMenuPreview(){
  // Build a live gameplay tableau behind the menu.
  camY = 0;
  player = newPlayer();
  hook = newHook();
  pointerActive = false;
  releaseOnPointerUp = false;
  particles = [];
  distance = 0;
  combo = 0;
  comboTimer = 0;
  score = 0;
  resetLevel();

  // Extra upper anchor creates the recognizable hookshot composition.
  const menuA = makeAnchor(clamp(player.x-105, 75, W-75), player.y-H*0.42, 'normal');
  anchors.push(menuA);
  player.menuAnchor = menuA;
  player.menuT = 0;
}

function updateMenuPreview(dt){
  if(state !== 'start' || !player) return;
  player.animT += dt;
  player.menuT = (player.menuT || 0) + dt;
  const a = player.menuAnchor || anchors[0];
  if(a){
    a.pulse += dt*1.5;
    a.glow = 0.45 + Math.sin(player.menuT*2)*0.12;
  }
}

function drawMenuPreview(){
  if(state !== 'start' || !player) return;
  const a = player.menuAnchor || anchors[0];
  if(!a) return;
  const asy = worldToScreenY(a.y);
  ctx.save();
  ctx.strokeStyle = 'rgba(180,230,255,0.82)';
  ctx.lineWidth = 3;
  ctx.shadowColor = '#5be9ff';
  ctx.shadowBlur = 8;
  ctx.beginPath();
  ctx.moveTo(a.x, asy);
  const midx = (a.x+player.x)/2;
  const midy = (asy+player.sy)/2;
  const wob = Math.sin(player.menuT*2.2)*3;
  ctx.quadraticCurveTo(midx+wob, midy, player.x, player.sy);
  ctx.stroke();
  ctx.shadowBlur = 0;
  ctx.restore();
}

function render(dt){
  ctx.save();
  try{
    if(shakeMag>0.1){
      ctx.translate(rand(-shakeMag,shakeMag), rand(-shakeMag,shakeMag));
    }
    drawBackground();
    drawPlatform();
    drawObstacles();
    drawAnchors();
    drawMenuPreview();
    drawRope();
    if(player) drawPlayer();
    drawParticles();
  } catch(err){
    console.error('render error:', err);
  } finally {
    ctx.restore();
  }
}

/* ============ HUD ============ */
function updateHUD(){
  document.getElementById('distVal').textContent = distance;
  document.getElementById('comboVal').textContent = combo;
  document.getElementById('bestVal').textContent = Math.max(best,distance);

  const hp = document.getElementById('hintPanel');
  if(state==='playing' && !hintShown.release){
    hp.classList.add('show');
  } else {
    hp.classList.remove('show');
  }
}

/* ============ DEATH / GAME OVER ============ */
function onDeath(){
  if(state!=='playing') return;
  state = 'gameover';
  spawnBurst(player.x, player.sy, '#ff6b6b', 26);
  shakeMag = 10;
  SFX.crash();
  flashScreen();

  const finalDist = distance;
  const isBest = finalDist > best;
  if(isBest){ saveBest(finalDist); }

  setTimeout(()=>{
    document.getElementById('goDist').textContent = finalDist+'m';
    document.getElementById('goBest').textContent = Math.max(best,finalDist)+'m';
    document.getElementById('goCombo').textContent = '×'+combo;
    document.getElementById('newBestBadge').style.display = isBest ? 'block':'none';
    if(isBest) SFX.best();
    document.getElementById('gameOverScreen').classList.add('active');
  }, 420);
}

function flashScreen(){
  const f = document.getElementById('flash');
  f.style.transition='none';
  f.style.opacity='0.7';
  requestAnimationFrame(()=>{
    f.style.transition='opacity .35s ease';
    f.style.opacity='0';
  });
}

/* ============ GAME LIFECYCLE ============ */
function startGame(){
  stage.classList.remove('menu-mode');
  document.getElementById('startScreen').classList.remove('active');
  document.getElementById('gameOverScreen').classList.remove('active');
  document.getElementById('pauseMenu').classList.remove('active');
  ensureAudio();

  camY = 0;
  player = newPlayer();
  hook = newHook();
  particles = [];
  distance = 0; combo=0; comboTimer=0; score=0;
  hintShown = {tap:false, release:false};
  document.getElementById('hintPanel').classList.add('show');

  resetLevel();
  state = 'playing';
  updateHUD();
}

function goHome(){
  state='start';
  stage.classList.add('menu-mode');
  stage.classList.add('menu-mode');
  setupMenuPreview();
  document.getElementById('gameOverScreen').classList.remove('active');
  document.getElementById('startScreen').classList.add('active');
  document.getElementById('startBest').textContent = best;
}

/* ============ UI BINDINGS ============ */
document.getElementById('playBtn').addEventListener('click', ()=>{ SFX.click(); tryLockPortrait(); startGame(); });
document.getElementById('howtoBtn').addEventListener('click', ()=>{
  SFX.click();
  const box = document.getElementById('howtoBox');
  box.style.display = box.style.display==='none' ? 'block':'none';
});
document.getElementById('againBtn').addEventListener('click', ()=>{ SFX.click(); startGame(); });
document.getElementById('homeBtn').addEventListener('click', ()=>{ SFX.click(); goHome(); });

document.getElementById('pauseBtn').addEventListener('click', ()=>{
  if(state==='playing'){
    state='paused';
    document.getElementById('pauseMenu').classList.add('active');
    SFX.click();
  }
});
document.getElementById('resumeBtn').addEventListener('click', ()=>{
  state='playing';
  document.getElementById('pauseMenu').classList.remove('active');
  SFX.click();
});
document.getElementById('restartBtn').addEventListener('click', ()=>{
  document.getElementById('pauseMenu').classList.remove('active');
  SFX.click();
  startGame();
});
document.getElementById('quitBtn').addEventListener('click', ()=>{
  document.getElementById('pauseMenu').classList.remove('active');
  SFX.click();
  goHome();
});
document.getElementById('soundBtn').addEventListener('click', ()=>{
  soundOn = !soundOn;
  document.getElementById('soundState').textContent = soundOn ? 'ON':'OFF';
  if(soundOn) SFX.click();
});

/* prevent page scroll/zoom gestures */
document.addEventListener('touchmove', e=>{ e.preventDefault(); }, {passive:false});
document.addEventListener('gesturestart', e=>{ e.preventDefault(); });

/* ============ INIT ============ */
stage.classList.add('menu-mode');
initBg();
stage.classList.add('menu-mode');
setupMenuPreview();
document.getElementById('startBest').textContent = best;
document.getElementById('bestVal').textContent = best;
requestAnimationFrame(loop);

})();
