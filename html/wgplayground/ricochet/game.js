(function(){
'use strict';

/* =========================================================
   WGPLAYER ADS
   Universal WGPlayer tag is loaded in <head>.
   Midrolls are shown at natural level-complete pause points.
   ========================================================= */
const game = {
  pause(){
    Game.timeScale = 0;
  },
  resume(){
    Game.timeScale = 1;
  }
};

const audio = {
  mute(){
    if(Sound.master) Sound.master.gain.value = 0;
    Sound.enabled = false;
  },
  unmute(){
    Sound.enabled = Settings.sound;
    if(Sound.master) Sound.master.gain.value = Settings.sound ? 0.55 : 0;
  }
};

function resumeGame(){
  game.resume();
  audio.unmute();
}

function onLevelComplete(){
  // IMPORTANT: never pause the game behind the completion UI.
  // Some desktop/WebView ad loaders can suspend their callback indefinitely.
  // The old implementation waited for refetchAd(resumeGame), which could
  // leave the game frozen after a successful level.
  Game.timeScale = 1;
  Game.awaitingResult = false;
  audio.unmute();
  setState('WIN');

  // Ads are strictly non-blocking. They may refresh in the background, but
  // level progression must never depend on the ad callback.
  const loaderName = window.preroll && window.preroll.config && window.preroll.config.loaderObjectName;
  const loader = loaderName ? window[loaderName] : null;
  if(loader && typeof loader.refetchAd === 'function') {
    try {
      setTimeout(() => {
        try { loader.refetchAd(() => {}); } catch(e) {}
      }, 0);
    } catch(e) {}
  }
}

/* =========================================================
   CONSTANTS
   ========================================================= */
const WORLD_W = 800, WORLD_H = 500;
const PLAYER_R = 13, ENEMY_R = 17, BULLET_R = 5;
const BULLET_SPEED = 560;
const MAX_BOUNCES = 8;
const BULLET_LIFE = 6.5;
const TRAIL_MAX = 22;

const COLORS = {
  grid:'rgba(77,243,255,0.045)',
  wall:'rgba(77,243,255,0.35)',
  player:'#4df3ff',
  playerGlow:'rgba(77,243,255,0.55)',
  enemy:'#ff2d6a',
  enemyGlow:'rgba(255,45,106,0.6)',
  bullet:'#fff6b0',
  bulletGlow:'rgba(255,246,176,0.9)',
  normal:'#3a4a6b',
  normalLine:'#5c7aa8',
  steel:'#8b98a8',
  steelLine:'#d9e2ea',
  glass:'rgba(120,220,255,0.14)',
  glassLine:'rgba(180,235,255,0.65)',
  bounceBlk:'#ffb020',
  explosive:'#ff3b3b',
  portal:'#b46bff'
};

/* =========================================================
   UTILITIES
   ========================================================= */
function clamp(v,a,b){ return v<a?a:(v>b?b:v); }
function lerp(a,b,t){ return a+(b-a)*t; }
function dist(x1,y1,x2,y2){ return Math.hypot(x2-x1,y2-y1); }
function rand(a,b){ return a+Math.random()*(b-a); }
function choice(arr){ return arr[Math.floor(Math.random()*arr.length)]; }

function safeGet(key, fallback){
  try{
    const v = localStorage.getItem(key);
    if(v===null) return fallback;
    return JSON.parse(v);
  }catch(e){ return fallback; }
}
function safeSet(key, val){
  try{ localStorage.setItem(key, JSON.stringify(val)); }catch(e){ /* ignore */ }
}

// Mulberry32 seeded PRNG for deterministic challenge generation
function mulberry32(seed){
  let a = seed >>> 0;
  return function(){
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function seedFromString(str){
  let h = 1779033703 ^ str.length;
  for(let i=0;i<str.length;i++){
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return (h ^ (h >>> 16)) >>> 0;
}

/* =========================================================
   AUDIO
   ========================================================= */
const Sound = {
  ctx:null, master:null, enabled:true, musicEnabled:false, musicNodes:null,
  init(){
    if(this.ctx) return;
    try{
      const AC = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AC();
      this.master = this.ctx.createGain();
      this.master.gain.value = 0.55;
      this.master.connect(this.ctx.destination);
    }catch(e){ this.ctx = null; }
  },
  resume(){ if(this.ctx && this.ctx.state==='suspended'){ this.ctx.resume().catch(()=>{}); } },
  tone(freq,dur,type,vol,freqEnd){
    if(!this.enabled || !this.ctx) return;
    try{
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type || 'sine';
      osc.frequency.setValueAtTime(freq, t);
      if(freqEnd) osc.frequency.exponentialRampToValueAtTime(Math.max(1,freqEnd), t+dur);
      gain.gain.setValueAtTime(Math.max(vol||0.25,0.0001), t);
      gain.gain.exponentialRampToValueAtTime(0.0001, t+dur);
      osc.connect(gain); gain.connect(this.master);
      osc.start(t); osc.stop(t+dur+0.03);
    }catch(e){}
  },
  noise(dur,vol){
    if(!this.enabled || !this.ctx) return;
    try{
      const n = Math.max(1, Math.floor(this.ctx.sampleRate*dur));
      const buffer = this.ctx.createBuffer(1, n, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for(let i=0;i<n;i++) data[i] = (Math.random()*2-1) * (1 - i/n);
      const src = this.ctx.createBufferSource();
      src.buffer = buffer;
      const gain = this.ctx.createGain();
      gain.gain.value = vol||0.2;
      src.connect(gain); gain.connect(this.master);
      src.start();
    }catch(e){}
  },
  click(){ this.tone(640,0.05,'square',0.12); },
  shoot(){ this.tone(210,0.13,'sawtooth',0.22,80); },
  ricochet(){ this.tone(920,0.09,'triangle',0.22,1500); this.noise(0.03,0.05); },
  steelBounce(){ this.tone(160,0.13,'square',0.2,90); this.noise(0.05,0.08); },
  bounceBlock(){ this.tone(700,0.1,'sine',0.25,1700); },
  glassCrack(){ this.tone(1700,0.06,'triangle',0.18,2300); },
  glassBreak(){ this.noise(0.16,0.22); this.tone(1300,0.1,'sine',0.15,300); },
  portal(){ this.tone(420,0.22,'sine',0.18,950); },
  explosion(){ this.noise(0.38,0.32); this.tone(85,0.32,'sawtooth',0.24,40); },
  enemyHit(){ this.tone(300,0.25,'sawtooth',0.28,700); setTimeout(()=>this.tone(520,0.2,'square',0.18,1050),45); },
  levelComplete(){ [0,1,2].forEach((i)=>setTimeout(()=>this.tone(440+i*220,0.16,'sine',0.2),i*95)); },
  gameOver(){ this.tone(280,0.4,'sawtooth',0.2,70); },
  startMusic(){
    if(!this.ctx || this.musicNodes) return;
    try{
      const g = this.ctx.createGain(); g.gain.value = 0.05; g.connect(this.master);
      const o1 = this.ctx.createOscillator(); o1.type='sine'; o1.frequency.value=110;
      const o2 = this.ctx.createOscillator(); o2.type='sine'; o2.frequency.value=164.8;
      const lfo = this.ctx.createOscillator(); lfo.type='sine'; lfo.frequency.value=0.07;
      const lfoGain = this.ctx.createGain(); lfoGain.gain.value=0.03;
      lfo.connect(lfoGain); lfoGain.connect(g.gain);
      o1.connect(g); o2.connect(g);
      o1.start(); o2.start(); lfo.start();
      this.musicNodes = {g,o1,o2,lfo};
    }catch(e){}
  },
  stopMusic(){
    if(!this.musicNodes) return;
    try{
      const {g,o1,o2,lfo} = this.musicNodes;
      const t=this.ctx.currentTime;
      g.gain.exponentialRampToValueAtTime(0.0001,t+0.4);
      setTimeout(()=>{ try{o1.stop();o2.stop();lfo.stop();}catch(e){} },450);
    }catch(e){}
    this.musicNodes = null;
  }
};

function vibrate(pattern){
  if(!Settings.vibration) return;
  try{ if(navigator.vibrate) navigator.vibrate(pattern); }catch(e){}
}

/* =========================================================
   SETTINGS / STORAGE
   ========================================================= */
const Settings = Object.assign({ sound:true, music:false, vibration:true, shake:true }, safeGet('ric_settings', {}));
function saveSettings(){ safeSet('ric_settings', Settings); Sound.enabled = Settings.sound; }
Sound.enabled = Settings.sound;

const Progress = {
  unlocked: safeGet('ric_unlocked', 1),
  stars: safeGet('ric_stars', {}),
  best: safeGet('ric_best', 0),
  challengeCount: safeGet('ric_challenge_count', 0)
};
function saveProgress(){
  safeSet('ric_unlocked', Progress.unlocked);
  safeSet('ric_stars', Progress.stars);
  safeSet('ric_best', Progress.best);
  safeSet('ric_challenge_count', Progress.challengeCount);
}

/* =========================================================
   LEVEL DATA (hand designed, 30 levels)
   ========================================================= */
function P(x,y){ return {x,y}; }
function rectObs(x,y,w,h,type){ return {type:type||'normal', x,y,w,h,angle:0}; }
function steelObs(x,y,w,h){ return rectObs(x,y,w,h,'steel'); }
function bounceObs(x,y,w,h){ return rectObs(x,y,w,h,'bounceblk'); }
function glassObs(x,y,w,h){ return {type:'glass', x,y,w,h,angle:0, hp:2}; }
function explosiveObs(x,y,w,h){ return {type:'explosive', x,y,w,h,angle:0, exploded:false, timer:0}; }
function hbarObs(x,y,w,h,range,speed){ return {type:'hbar', baseX:x, x, y, w, h, range, speed, angle:0}; }
function vbarObs(x,y,w,h,range,speed){ return {type:'vbar', x, baseY:y, y, w, h, range, speed, angle:0}; }
function rotbarObs(x,y,len,thick,speed){ return {type:'rotbar', x, y, w:len, h:thick, speed, angle:0}; }
function sineObs(x,y,w,h,amp,speed){ return {type:'sine', baseX:x, x, y, w, h, amp, speed, phase:rand(0,6.28), angle:0}; }
let _portalSeq = 0;
function portalPair(x1,y1,x2,y2){
  const id = _portalSeq++;
  return [
    {type:'portalA', x:x1, y:y1, r:18, pairId:id},
    {type:'portalB', x:x2, y:y2, r:18, pairId:id}
  ];
}
function Lvl(player, enemy, obstacles, shots, par){
  return { player, enemy, obstacles: obstacles.flat(), shots, par };
}

const LEVELS = [
/*1*/  Lvl(P(100,250), P(700,250), [], 5, 1),
/*2*/  Lvl(P(100,400), P(700,400), [rectObs(400,350,20,300)], 4, 1),
/*3*/  Lvl(P(90,250), P(710,250), [rectObs(300,350,20,300), rectObs(500,150,20,300)], 5, 2),
/*4*/  Lvl(P(80,250), P(730,250), [rectObs(260,150,20,300), rectObs(430,350,20,300), rectObs(600,150,20,260)], 4, 3),
/*5*/  Lvl(P(100,150), P(700,410), [rectObs(400,410,150,20)], 1, 1),

/*6*/  Lvl(P(100,250), P(700,250), [steelObs(400,150,20,270)], 4, 1),
/*7*/  Lvl(P(90,250), P(710,250), [steelObs(300,150,20,270), steelObs(520,350,20,270)], 4, 2),
/*8*/  Lvl(P(90,400), P(710,120), [steelObs(400,250,20,340), bounceObs(400,60,140,18)], 4, 2),
/*9*/  Lvl(P(80,250), P(730,250), [steelObs(260,350,20,300), rectObs(430,150,20,300), bounceObs(600,250,18,140)], 3, 2),
/*10*/ Lvl(P(90,90), P(710,410), [steelObs(300,250,300,20), bounceObs(600,150,20,140), rectObs(150,350,20,220)], 3, 2),

/*11*/ Lvl(P(100,250), P(700,250), [hbarObs(400,250,110,20,150,1.2)], 4, 1),
/*12*/ Lvl(P(120,90), P(680,410), [vbarObs(400,250,20,110,150,1.1)], 4, 2),
/*13*/ Lvl(P(100,250), P(700,250), [glassObs(400,140,20,220), glassObs(400,400,20,180)], 4, 2),
/*14*/ Lvl(P(90,400), P(710,90), [steelObs(300,250,20,300), glassObs(520,150,20,240), hbarObs(400,420,90,18,80,1.4)], 3, 2),
/*15*/ Lvl(P(90,250), P(710,250), [vbarObs(280,250,20,150,120,1.3), glassObs(500,250,20,300)], 3, 2),

/*16*/ Lvl(P(120,250), P(680,250), [rotbarObs(400,250,180,16,1.4)], 4, 1),
/*17*/ Lvl(P(90,120), P(710,410), [rotbarObs(400,250,200,16,-1.1), steelObs(250,400,150,20)], 4, 2),
/*18*/ Lvl(P(100,250), P(700,250), [glassObs(300,250,20,220), explosiveObs(520,250,60,60)], 4, 2),
/*19*/ Lvl(P(90,410), P(710,90), [explosiveObs(400,250,60,60), rotbarObs(230,150,150,14,1.6), steelObs(560,350,20,220)], 3, 2),
/*20*/ Lvl(P(90,250), P(710,250), [rotbarObs(280,250,170,16,1.3), glassObs(470,150,20,180), explosiveObs(560,380,55,55)], 3, 3),

/*21*/ Lvl(P(100,250), P(700,250), [rectObs(400,250,20,500), ...portalPair(400,90,400,410)], 4, 1),
/*22*/ Lvl(P(90,120), P(710,410), [steelObs(400,250,20,500), ...portalPair(400,150,400,350)], 4, 2),
/*23*/ Lvl(P(90,250), P(710,250), [rectObs(400,250,20,500), hbarObs(200,120,90,18,80,1.3), ...portalPair(400,80,400,420)], 3, 2),
/*24*/ Lvl(P(100,400), P(700,100), [rectObs(400,250,20,500), rotbarObs(200,250,140,14,1.2), ...portalPair(400,60,400,440)], 3, 2),
/*25*/ Lvl(P(90,250), P(710,250), [rectObs(400,250,20,340), glassObs(600,150,20,180), ...portalPair(400,60,400,90)], 3, 3),

/*26*/ Lvl(P(90,90), P(710,410), [steelObs(300,250,20,340), rotbarObs(500,250,160,14,1.5), bounceObs(650,120,90,18)], 3, 2),
/*27*/ Lvl(P(100,250), P(700,250), [glassObs(280,250,20,260), explosiveObs(430,150,55,55), vbarObs(560,300,20,140,110,1.2)], 2, 2),
/*28*/ Lvl(P(90,410), P(710,90), [rectObs(400,250,20,500), ...portalPair(400,100,400,400), rotbarObs(200,150,120,14,-1.4)], 2, 2),
/*29*/ Lvl(P(90,250), P(710,250), [steelObs(260,150,20,260), glassObs(420,350,20,220), explosiveObs(560,180,55,55), hbarObs(340,420,80,16,70,1.5)], 2, 3),
/*30*/ Lvl(P(100,90), P(700,410), [rectObs(400,250,20,320), ...portalPair(400,70,400,430), rotbarObs(230,400,140,14,1.6), explosiveObs(560,150,55,55), bounceObs(620,320,18,100)], 2, 3)
];

/* =========================================================
   GEOMETRY / PHYSICS HELPERS
   ========================================================= */
function reflect(vx,vy,nx,ny){
  const d = vx*nx + vy*ny;
  return { x: vx - 2*d*nx, y: vy - 2*d*ny };
}

// Circle vs oriented rectangle (obb). obb has center x,y, w,h, angle.
function circleObbCollision(cx,cy,cr, obb){
  const dx = cx - obb.x, dy = cy - obb.y;
  const cos = Math.cos(-obb.angle), sin = Math.sin(-obb.angle);
  const lx = dx*cos - dy*sin;
  const ly = dx*sin + dy*cos;
  const hw = obb.w/2, hh = obb.h/2;
  const clx = clamp(lx,-hw,hw), cly = clamp(ly,-hh,hh);
  const ddx = lx-clx, ddy = ly-cly;
  const distSq = ddx*ddx+ddy*ddy;
  if(distSq > cr*cr) return null;
  const d = Math.sqrt(distSq);
  let nlx, nly;
  if(d > 0.0001){ nlx = ddx/d; nly = ddy/d; }
  else{
    const px = hw - Math.abs(lx), py = hh - Math.abs(ly);
    if(px < py){ nlx = lx<0?-1:1; nly = 0; } else { nlx = 0; nly = ly<0?-1:1; }
  }
  const cos2 = Math.cos(obb.angle), sin2 = Math.sin(obb.angle);
  const nx = nlx*cos2 - nly*sin2;
  const ny = nlx*sin2 + nly*cos2;
  const penetration = cr - d;
  return { nx, ny, penetration };
}

/* =========================================================
   PARTICLES / FX
   ========================================================= */
const particles = [];
function spawnParticles(x,y,count,opts){
  opts = opts || {};
  for(let i=0;i<count;i++){
    const ang = opts.angle!=null ? opts.angle + rand(-0.9,0.9) : rand(0,Math.PI*2);
    const spd = rand(opts.minSpd||40, opts.maxSpd||220);
    particles.push({
      x, y,
      vx: Math.cos(ang)*spd, vy: Math.sin(ang)*spd,
      life: rand(opts.minLife||0.25, opts.maxLife||0.6),
      maxLife: 1,
      color: opts.color || COLORS.bullet,
      size: rand(opts.minSize||1.5, opts.maxSize||3.5),
      friction: opts.friction!=null ? opts.friction : 3,
      shrink: opts.shrink!==false
    });
  }
  particles.forEach(p=>{ if(p.maxLife===1) p.maxLife=p.life; });
}
function updateParticles(dt){
  for(let i=particles.length-1;i>=0;i--){
    const p = particles[i];
    p.life -= dt;
    if(p.life<=0){ particles.splice(i,1); continue; }
    p.vx *= (1 - Math.min(1,p.friction*dt));
    p.vy *= (1 - Math.min(1,p.friction*dt));
    p.x += p.vx*dt; p.y += p.vy*dt;
  }
}
function renderParticles(ctx){
  for(const p of particles){
    const a = clamp(p.life/p.maxLife,0,1);
    const size = p.shrink ? p.size*a : p.size;
    ctx.globalAlpha = a;
    ctx.fillStyle = p.color;
    ctx.shadowColor = p.color; ctx.shadowBlur = 8;
    ctx.beginPath(); ctx.arc(p.x,p.y,Math.max(0.4,size),0,Math.PI*2); ctx.fill();
  }
  ctx.globalAlpha = 1; ctx.shadowBlur = 0;
}

const floatingTexts = [];
function spawnFloatingText(x,y,text,color,size){
  floatingTexts.push({x,y,text,color:color||'#fff',size:size||14,life:1.1,maxLife:1.1,vy:-38});
}
function updateFloatingTexts(dt){
  for(let i=floatingTexts.length-1;i>=0;i--){
    const t = floatingTexts[i];
    t.life -= dt; t.y += t.vy*dt; t.vy *= 0.96;
    if(t.life<=0) floatingTexts.splice(i,1);
  }
}
function renderFloatingTexts(ctx){
  ctx.textAlign='center';
  for(const t of floatingTexts){
    const a = clamp(t.life/t.maxLife,0,1);
    ctx.globalAlpha = a;
    ctx.fillStyle = t.color;
    ctx.font = `800 ${t.size}px 'Segoe UI',sans-serif`;
    ctx.shadowColor = t.color; ctx.shadowBlur = 10;
    ctx.fillText(t.text, t.x, t.y);
  }
  ctx.globalAlpha = 1; ctx.shadowBlur = 0; ctx.textAlign='left';
}

const shake = { t:0, dur:0, amt:0, x:0, y:0 };
function screenShake(amt, dur){
  if(!Settings.shake) return;
  shake.amt = Math.max(shake.amt, amt); shake.dur = dur; shake.t = dur;
}
function updateShake(dt){
  if(shake.t>0){
    shake.t -= dt;
    const p = clamp(shake.t/shake.dur,0,1);
    shake.x = rand(-1,1)*shake.amt*p;
    shake.y = rand(-1,1)*shake.amt*p;
    if(shake.t<=0){ shake.x=0; shake.y=0; shake.amt=0; }
  }
}

/* =========================================================
   GAME STATE
   ========================================================= */
const Game = {
  state:'MENU', // MENU, HOWTO, LEVEL_SELECT, PLAYING, PAUSED, WIN, GAME_OVER, SETTINGS, CHALLENGE_MENU
  levelIndex:0,
  currentLevel:null,
  isChallenge:false,
  score:0,
  shotsLeft:0,
  shotsUsed:0,
  bullets:[],
  obstacles:[],
  player:{x:0,y:0},
  enemy:{x:0,y:0, flash:0, scale:1, destroyed:false},
  isAiming:false,
  aimMoved:false,
  aimDir:{x:1,y:0},
  aimPointer:{x:0,y:0},
  timeScale:1,
  slowMoTimer:0,
  slowMoUsedThisShot:false,
  streak:0,
  t:0,
  awaitingResult:false
};

function loadLevelObjects(levelData){
  Game.player = { x:levelData.player.x, y:levelData.player.y, recoil:0, aimAngle:0 };
  Game.enemy = { x:levelData.enemy.x, y:levelData.enemy.y, flash:0, scale:1, pulse:0, destroyed:false };
  Game.obstacles = levelData.obstacles.map(o=>Object.assign({}, o));
  Game.bullets = [];
  Game.shotsLeft = levelData.shots;
  Game.shotsUsed = 0;
  Game.timeScale = 1;
  Game.slowMoTimer = 0;
  Game.awaitingResult = false;
  Game.isAiming = false;
  Game.aimMoved = false;
  particles.length = 0;
  floatingTexts.length = 0;
}

function startLevel(index){
  Game.isChallenge = false;
  Game.levelIndex = index;
  Game.currentLevel = LEVELS[index];
  loadLevelObjects(Game.currentLevel);
  Game.score = 0;
  setState('PLAYING');
  showHintToast('HIT THE TARGET');
  updateHUD();
}

function startChallenge(seedStr, label){
  Game.isChallenge = true;
  const rng = mulberry32(seedFromString(seedStr));
  const obstacles = [];
  const count = 2 + Math.floor(rng()*4);
  for(let i=0;i<count;i++){
    const type = choice(['normal','normal','steel','glass','bounceblk','hbar','vbar','rotbar']);
    const x = rand(200,600), y = rand(100,400);
    if(type==='hbar') obstacles.push(hbarObs(x,y,90+rng()*40,18,60+rng()*60,0.8+rng()*0.8));
    else if(type==='vbar') obstacles.push(vbarObs(x,y,18,90+rng()*40,60+rng()*60,0.8+rng()*0.8));
    else if(type==='rotbar') obstacles.push(rotbarObs(x,y,120+rng()*60,14,(rng()<0.5?-1:1)*(0.8+rng()*0.8)));
    else if(type==='glass') obstacles.push(glassObs(x,y,20,140+rng()*100));
    else if(type==='bounceblk') obstacles.push(bounceObs(x,y,20,90+rng()*50));
    else if(type==='steel') obstacles.push(steelObs(x,y,20,140+rng()*100));
    else obstacles.push(rectObs(x,y,20,120+rng()*120));
  }
  const level = Lvl(P(90,90+rng()*320), P(680+rng()*30,90+rng()*320), obstacles, 3, 2);
  Game.currentLevel = level;
  loadLevelObjects(level);
  Game.score = 0;
  Progress.challengeCount++;
  saveProgress();
  document.getElementById('challengeSub').textContent = label;
  setState('PLAYING');
  showHintToast('HIT THE TARGET');
  updateHUD();
}

/* =========================================================
   INPUT
   ========================================================= */
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

function resize(){
  const stage = document.getElementById('stage');
  const maxW = Math.max(1, stage.clientWidth - 4), maxH = Math.max(1, stage.clientHeight - 4);
  const scale = Math.min(maxW/WORLD_W, maxH/WORLD_H);
  const cssW = WORLD_W*scale, cssH = WORLD_H*scale;
  canvas.style.width = cssW+'px';
  canvas.style.height = cssH+'px';
  const dpr = window.devicePixelRatio || 1;
  canvas.width = Math.max(1,Math.round(cssW*dpr));
  canvas.height = Math.max(1,Math.round(cssH*dpr));
  ctx.setTransform(dpr*scale,0,0,dpr*scale,0,0);
}
window.addEventListener('resize', resize);

function toWorld(clientX, clientY){
  const rect = canvas.getBoundingClientRect();
  return {
    x: (clientX-rect.left)/rect.width*WORLD_W,
    y: (clientY-rect.top)/rect.height*WORLD_H
  };
}

function updateAim(clientX, clientY){
  const w = toWorld(clientX, clientY);
  Game.aimPointer = w;
  let dx = w.x - Game.player.x, dy = w.y - Game.player.y;
  const len = Math.hypot(dx,dy);
  if(len > 8){
    Game.aimDir = { x: dx/len, y: dy/len };
    Game.player.aimAngle = Math.atan2(dy,dx);
  }
}

function bulletInFlight(){ return Game.bullets.length > 0; }

canvas.addEventListener('pointerdown', (e)=>{
  Sound.init(); Sound.resume();
  if(Game.state !== 'PLAYING') return;
  if(bulletInFlight() || Game.shotsLeft<=0) return;

  const w = toWorld(e.clientX, e.clientY);
  const dx = w.x - Game.player.x, dy = w.y - Game.player.y;
  const nearPlayer = Math.hypot(dx,dy) <= 72;
  if(!nearPlayer) return; // Clicking elsewhere must never fire a shot.

  Game.isAiming = true;
  Game.aimMoved = false;
  updateAim(e.clientX, e.clientY);
  if(canvas.setPointerCapture) { try { canvas.setPointerCapture(e.pointerId); } catch(_){} }
  e.preventDefault();
});
window.addEventListener('pointermove', (e)=>{
  if(Game.isAiming){
    const before = Game.aimPointer;
    updateAim(e.clientX, e.clientY);
    const moved = Math.hypot(Game.aimPointer.x-before.x, Game.aimPointer.y-before.y);
    if(moved >= 10) Game.aimMoved = true;
  }
});
window.addEventListener('pointerup', (e)=>{
  if(Game.isAiming){
    Game.isAiming = false;
    if(canvas.releasePointerCapture) { try { canvas.releasePointerCapture(e.pointerId); } catch(_){} }
    if(Game.aimMoved) fireBullet();
    Game.aimMoved = false;
  }
});
window.addEventListener('pointercancel', ()=>{
  Game.isAiming = false;
  Game.aimMoved = false;
});
canvas.addEventListener('contextmenu', e=>e.preventDefault());

function fireBullet(){
  if(Game.shotsLeft<=0 || bulletInFlight() || Game.state!=='PLAYING') return;
  const dir = Game.aimDir;
  const startX = Game.player.x + dir.x*(PLAYER_R+BULLET_R+2);
  const startY = Game.player.y + dir.y*(PLAYER_R+BULLET_R+2);
  Game.bullets.push({
    x:startX, y:startY, vx:dir.x*BULLET_SPEED, vy:dir.y*BULLET_SPEED,
    bounces:0, life:BULLET_LIFE, trail:[], dead:false, portalCooldown:0
  });
  Game.shotsLeft--; Game.shotsUsed++;
  Game.player.recoil = 1;
  Sound.shoot();
  spawnParticles(startX,startY,10,{angle:Math.atan2(dir.y,dir.x)+Math.PI, color:COLORS.bullet, minSpd:60,maxSpd:180,minLife:0.15,maxLife:0.3});
  vibrate(10);
  updateHUD();
}

/* =========================================================
   OBSTACLE MOTION
   ========================================================= */
function updateObstacles(dt){
  Game.t += dt;
  for(const o of Game.obstacles){
    if(o.type==='hbar'){ o.x = o.baseX + Math.sin(Game.t*o.speed)*o.range; }
    else if(o.type==='vbar'){ o.y = o.baseY + Math.sin(Game.t*o.speed)*o.range; }
    else if(o.type==='rotbar'){ o.angle += o.speed*dt; }
    else if(o.type==='sine'){ o.x = o.baseX + Math.sin(Game.t*o.speed + o.phase)*o.amp; }
    else if(o.type==='explosive' && o.exploded){
      o.timer -= dt;
      if(o.timer<=0){ o.remove = true; triggerExplosion(o); }
    }
  }
  if(Game.obstacles.some(o=>o.remove)){
    Game.obstacles = Game.obstacles.filter(o=>!o.remove);
  }
}

function triggerExplosion(o){
  spawnParticles(o.x,o.y,26,{color:COLORS.explosive, minSpd:80,maxSpd:320,minLife:0.3,maxLife:0.6,minSize:2,maxSize:4.5});
  screenShake(14,0.35);
  Sound.explosion();
  vibrate([20,30,40]);
}

/* =========================================================
   BULLET PHYSICS
   ========================================================= */
function killBullet(b, hit){
  b.dead = true;
  const idx = Game.bullets.indexOf(b);
  if(idx>=0) Game.bullets.splice(idx,1);
  if(!hit && !Game.enemy.destroyed){
    if(!bulletInFlight() && Game.shotsLeft<=0 && Game.state==='PLAYING'){
      setTimeout(()=>{ if(Game.state==='PLAYING') triggerGameOver(); }, 260);
    }
  }
}

function updateBullets(dt){
  const SUB = 4;
  const sdt = dt/SUB;
  for(let bi=Game.bullets.length-1; bi>=0; bi--){
    const b = Game.bullets[bi];
    if(b.dead) continue;
    for(let s=0; s<SUB; s++){
      b.x += b.vx*sdt; b.y += b.vy*sdt;
      b.trail.push({x:b.x,y:b.y});
      if(b.trail.length>TRAIL_MAX) b.trail.shift();
      if(b.portalCooldown>0) b.portalCooldown -= sdt;

      // arena walls
      let bounced = false;
      if(b.x - BULLET_R < 0){ b.x = BULLET_R; b.vx = Math.abs(b.vx); bounced=true; }
      else if(b.x + BULLET_R > WORLD_W){ b.x = WORLD_W-BULLET_R; b.vx = -Math.abs(b.vx); bounced=true; }
      if(b.y - BULLET_R < 0){ b.y = BULLET_R; b.vy = Math.abs(b.vy); bounced=true; }
      else if(b.y + BULLET_R > WORLD_H){ b.y = WORLD_H-BULLET_R; b.vy = -Math.abs(b.vy); bounced=true; }
      if(bounced){ onBounce(b, b.x, b.y, null); }
      if(b.dead) break;

      // obstacles
      for(const o of Game.obstacles){
        if(o.type==='portalA' || o.type==='portalB') continue;
        const col = circleObbCollision(b.x,b.y,BULLET_R,o);
        if(col){
          b.x += col.nx*col.penetration;
          b.y += col.ny*col.penetration;
          handleObstacleHit(b, o, col);
          if(b.dead) break;
        }
      }
      if(b.dead) break;

      // portals
      if(b.portalCooldown<=0){
        for(const o of Game.obstacles){
          if(o.type!=='portalA' && o.type!=='portalB') continue;
          if(dist(b.x,b.y,o.x,o.y) < o.r){
            const pair = Game.obstacles.find(p=> p!==o && p.pairId===o.pairId);
            if(pair){
              spawnParticles(o.x,o.y,14,{color:COLORS.portal,minSpd:40,maxSpd:140,minLife:0.25,maxLife:0.45});
              spawnParticles(pair.x,pair.y,14,{color:COLORS.portal,minSpd:40,maxSpd:140,minLife:0.25,maxLife:0.45});
              b.x = pair.x + (b.vx/Math.hypot(b.vx,b.vy))*(pair.r+6);
              b.y = pair.y + (b.vy/Math.hypot(b.vx,b.vy))*(pair.r+6);
              b.portalCooldown = 0.15;
              Sound.portal();
            }
            break;
          }
        }
      }

      // enemy
      if(!Game.enemy.destroyed && dist(b.x,b.y,Game.enemy.x,Game.enemy.y) < BULLET_R+ENEMY_R){
        onEnemyHit(b);
        break;
      }
      if(b.dead) break;

      // slow-mo trigger near enemy
      if(!Game.enemy.destroyed && !Game.slowMoUsedThisShot){
        const dE = dist(b.x,b.y,Game.enemy.x,Game.enemy.y);
        if(dE < 70){
          Game.timeScale = 0.28; Game.slowMoTimer = 0.22; Game.slowMoUsedThisShot = true;
        }
      }
    }
    if(!b.dead){
      b.life -= dt;
      if(b.life<=0 || b.bounces>MAX_BOUNCES){
        spawnParticles(b.x,b.y,6,{color:COLORS.bullet,minSpd:20,maxSpd:60,minLife:0.2,maxLife:0.35});
        killBullet(b,false);
      }
    }
  }
}

function onBounce(b, x, y, obstacleType){
  b.bounces++;
  spawnParticles(x,y,9,{color: obstacleType==='steel'?COLORS.steel: (obstacleType==='bounceblk'?COLORS.bounceBlk:COLORS.cyan)||'#bff', minSpd:60,maxSpd:220,minLife:0.15,maxLife:0.35});
  screenShake(obstacleType?4:3, 0.12);
  if(obstacleType==='steel') Sound.steelBounce();
  else if(obstacleType==='bounceblk') Sound.bounceBlock();
  else Sound.ricochet();
  vibrate(8);
}

function handleObstacleHit(b, o, col){
  if(o.type==='glass'){
    o.hp--;
    if(o.hp<=0){
      o.remove = true;
      spawnParticles(b.x,b.y,16,{color:'#bdf3ff',minSpd:70,maxSpd:260,minLife:0.2,maxLife:0.45,minSize:1,maxSize:2.5});
      Sound.glassBreak();
      screenShake(6,0.15);
      // bullet passes through, no reflection
      return;
    } else {
      Sound.glassCrack();
      const rf = reflect(b.vx,b.vy,col.nx,col.ny);
      b.vx = rf.x; b.vy = rf.y;
      onBounce(b,b.x,b.y,'glass');
      return;
    }
  }
  if(o.type==='explosive'){
    if(!o.exploded){ o.exploded = true; o.timer = 0.18; spawnParticles(b.x,b.y,10,{color:COLORS.explosive,minSpd:60,maxSpd:200,minLife:0.15,maxLife:0.3}); }
    const rf = reflect(b.vx,b.vy,col.nx,col.ny);
    b.vx = rf.x; b.vy = rf.y;
    onBounce(b,b.x,b.y,'explosive');
    return;
  }
  let restitution = 1;
  if(o.type==='bounceblk') restitution = 1.28;
  const rf = reflect(b.vx,b.vy,col.nx,col.ny);
  b.vx = rf.x*restitution; b.vy = rf.y*restitution;
  const spd = Math.hypot(b.vx,b.vy);
  const maxSpd = BULLET_SPEED*1.6;
  if(spd > maxSpd){ b.vx = b.vx/spd*maxSpd; b.vy = b.vy/spd*maxSpd; }
  onBounce(b,b.x,b.y,o.type);
}

/* =========================================================
   SCORING
   ========================================================= */
function scoreForBounces(n){
  const table = {0:100,1:200,2:350,3:600,4:900,5:1300};
  if(table[n]!=null) return table[n];
  return 1300 + (n-5)*500;
}
function comboMessage(n){
  if(n<=0) return null;
  if(n===1) return 'NICE BANK!';
  if(n===2) return 'PERFECT BANK!';
  if(n===3) return '3X RICOCHET!';
  return 'ANGLE MASTER!';
}

function onEnemyHit(b){
  Game.enemy.destroyed = true;
  Game.enemy.flash = 1;
  const bounces = b.bounces;
  killBullet(b, true);

  let gained = scoreForBounces(bounces);
  const perfect = Game.shotsUsed===1;
  if(perfect) gained += 1000;
  Game.score += gained;

  spawnParticles(Game.enemy.x,Game.enemy.y,40,{color:COLORS.enemy,minSpd:80,maxSpd:340,minLife:0.35,maxLife:0.75,minSize:2,maxSize:5});
  screenShake(14,0.4);
  Sound.enemyHit();
  vibrate([20,30,50]);

  spawnFloatingText(Game.enemy.x, Game.enemy.y-30, '+'+gained, '#fff6b0', 18);
  const combo = comboMessage(bounces);
  if(combo) spawnFloatingText(Game.enemy.x, Game.enemy.y-52, combo, COLORS.enemy, 13);
  if(perfect) spawnFloatingText(Game.enemy.x, Game.enemy.y-72, 'PERFECT SHOT!', COLORS.amber||'#ffb020', 13);

  Game.timeScale = 0.15; Game.slowMoTimer = 0.35;

  if(!Game.isChallenge){
    Progress.best = Math.max(Progress.best, Progress.best + gained);
  }
  Progress.best += gained;
  saveProgress();

  Game.awaitingResult = true;
  setTimeout(()=>{
    Game.timeScale = 1;
    finishLevel(bounces);
  }, 950);
}

function triggerGameOver(){
  Sound.gameOver();
  Game.streak = 0;
  document.getElementById('loseScore').textContent = Game.score;
  setState('GAME_OVER');
}

function finishLevel(bounces){
  const lvl = Game.currentLevel;
  let stars = 1;
  if(Game.shotsUsed <= lvl.par) stars = 3;
  else if(Game.shotsUsed <= lvl.par+1) stars = 2;

  if(!Game.isChallenge){
    const num = Game.levelIndex+1;
    const prevStars = Progress.stars[num] || 0;
    Progress.stars[num] = Math.max(prevStars, stars);
    if(Progress.unlocked < num+1 && num < LEVELS.length) Progress.unlocked = num+1;
    Game.streak++;
    saveProgress();
  }

  document.getElementById('winStars').textContent = '★★★'.slice(0,0) + '★'.repeat(stars) + '☆'.repeat(3-stars);
  document.getElementById('winScore').textContent = Game.score;
  document.getElementById('winBounces').textContent = bounces;
  document.getElementById('winShots').textContent = Game.shotsUsed;
  Sound.levelComplete();
  onLevelComplete();
}

/* =========================================================
   RENDER
   ========================================================= */
function drawGrid(){
  ctx.fillStyle = '#05060a';
  ctx.fillRect(0,0,WORLD_W,WORLD_H);
  ctx.strokeStyle = COLORS.grid;
  ctx.lineWidth = 1;
  const step = 40;
  for(let x=0;x<=WORLD_W;x+=step){ ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,WORLD_H); ctx.stroke(); }
  for(let y=0;y<=WORLD_H;y+=step){ ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(WORLD_W,y); ctx.stroke(); }
  // vignette
  const g = ctx.createRadialGradient(WORLD_W/2,WORLD_H/2,WORLD_H*0.25,WORLD_W/2,WORLD_H/2,WORLD_H*0.9);
  g.addColorStop(0,'rgba(0,0,0,0)');
  g.addColorStop(1,'rgba(0,0,0,0.55)');
  ctx.fillStyle = g;
  ctx.fillRect(0,0,WORLD_W,WORLD_H);
  // walls
  ctx.strokeStyle = COLORS.wall;
  ctx.lineWidth = 3;
  ctx.shadowColor = COLORS.wall; ctx.shadowBlur = 12;
  ctx.strokeRect(2,2,WORLD_W-4,WORLD_H-4);
  ctx.shadowBlur = 0;
}

function drawObb(o, fill, line, glow){
  ctx.save();
  ctx.translate(o.x,o.y);
  ctx.rotate(o.angle||0);
  ctx.fillStyle = fill;
  ctx.strokeStyle = line;
  ctx.lineWidth = 2;
  if(glow){ ctx.shadowColor = glow; ctx.shadowBlur = 14; }
  ctx.fillRect(-o.w/2,-o.h/2,o.w,o.h);
  ctx.strokeRect(-o.w/2,-o.h/2,o.w,o.h);
  ctx.restore();
  ctx.shadowBlur = 0;
}

function drawObstacles(){
  for(const o of Game.obstacles){
    if(o.type==='normal' || o.type==='hbar' || o.type==='vbar' || o.type==='sine'){
      drawObb(o, 'rgba(58,74,107,0.55)', COLORS.normalLine, 'rgba(92,122,168,0.4)');
    } else if(o.type==='steel'){
      drawObb(o, 'rgba(139,152,168,0.5)', COLORS.steelLine, 'rgba(217,226,234,0.35)');
    } else if(o.type==='bounceblk'){
      drawObb(o, 'rgba(255,176,32,0.28)', COLORS.bounceBlk, 'rgba(255,176,32,0.6)');
    } else if(o.type==='rotbar'){
      drawObb(o, 'rgba(139,152,168,0.55)', '#e8eef4', 'rgba(200,220,255,0.55)');
    } else if(o.type==='glass'){
      ctx.save();
      ctx.translate(o.x,o.y); ctx.rotate(o.angle||0);
      ctx.fillStyle = COLORS.glass;
      ctx.strokeStyle = COLORS.glassLine;
      ctx.lineWidth = 1.5;
      ctx.shadowColor = 'rgba(150,230,255,0.5)'; ctx.shadowBlur = 10;
      ctx.fillRect(-o.w/2,-o.h/2,o.w,o.h);
      ctx.strokeRect(-o.w/2,-o.h/2,o.w,o.h);
      if(o.hp===1){
        ctx.beginPath();
        ctx.moveTo(-o.w/2,-o.h/2); ctx.lineTo(o.w/2*0.3,o.h/2*0.2);
        ctx.moveTo(o.w/2,-o.h/2*0.4); ctx.lineTo(-o.w/2*0.2,o.h/2*0.6);
        ctx.strokeStyle='rgba(255,255,255,0.55)'; ctx.lineWidth=1;
        ctx.stroke();
      }
      ctx.restore(); ctx.shadowBlur=0;
    } else if(o.type==='explosive'){
      const pulse = 0.5+0.5*Math.sin(Game.t*8);
      drawObb(o, `rgba(255,59,59,${0.35+pulse*0.2})`, COLORS.explosive, 'rgba(255,80,80,0.7)');
    } else if(o.type==='portalA' || o.type==='portalB'){
      ctx.save();
      ctx.translate(o.x,o.y);
      const spin = Game.t*(o.type==='portalA'?2:-2);
      ctx.rotate(spin);
      ctx.strokeStyle = COLORS.portal;
      ctx.lineWidth = 3;
      ctx.shadowColor = COLORS.portal; ctx.shadowBlur = 16;
      ctx.beginPath(); ctx.arc(0,0,o.r,0,Math.PI*1.5); ctx.stroke();
      ctx.beginPath(); ctx.arc(0,0,o.r*0.6,0,Math.PI*2); ctx.strokeStyle='rgba(180,107,255,0.5)'; ctx.stroke();
      ctx.restore(); ctx.shadowBlur=0;
    }
  }
}

function drawPlayer(){
  const p = Game.player;
  p.recoil = Math.max(0, p.recoil - 0.06);
  ctx.save();
  ctx.translate(p.x,p.y);
  // shadow
  ctx.beginPath(); ctx.ellipse(0,PLAYER_R+4,PLAYER_R*0.8,4,0,0,Math.PI*2);
  ctx.fillStyle='rgba(0,0,0,0.4)'; ctx.fill();
  // glow body
  ctx.shadowColor = COLORS.playerGlow; ctx.shadowBlur = 18;
  ctx.fillStyle = COLORS.player;
  ctx.beginPath(); ctx.arc(0,0,PLAYER_R - p.recoil*2,0,Math.PI*2); ctx.fill();
  ctx.shadowBlur=0;
  // directional indicator
  const ang = p.aimAngle || 0;
  ctx.strokeStyle = '#fff';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(Math.cos(ang)*(PLAYER_R-4), Math.sin(ang)*(PLAYER_R-4));
  ctx.lineTo(Math.cos(ang)*(PLAYER_R+10), Math.sin(ang)*(PLAYER_R+10));
  ctx.stroke();
  ctx.restore();
}

function drawEnemy(){
  const e = Game.enemy;
  if(e.destroyed && e.flash<=0) return;
  e.pulse = (e.pulse||0) + 0.05;
  e.flash = Math.max(0, e.flash - 0.04);
  const scale = e.destroyed ? 1 + (1-e.flash)*1.6 : 1 + Math.sin(e.pulse)*0.06;
  const alpha = e.destroyed ? e.flash : 1;
  ctx.save();
  ctx.translate(e.x,e.y);
  ctx.rotate(e.pulse*0.3);
  ctx.globalAlpha = alpha;
  ctx.shadowColor = e.flash>0.5 ? '#fff' : COLORS.enemyGlow;
  ctx.shadowBlur = 20;
  ctx.fillStyle = e.flash>0.5 ? '#fff' : COLORS.enemy;
  const r = ENEMY_R*scale;
  ctx.beginPath();
  ctx.moveTo(0,-r); ctx.lineTo(r*0.72,0); ctx.lineTo(0,r); ctx.lineTo(-r*0.72,0); ctx.closePath();
  ctx.fill();
  ctx.restore();
  ctx.globalAlpha = 1; ctx.shadowBlur = 0;
}

function drawBullets(){
  for(const b of Game.bullets){
    for(let i=0;i<b.trail.length;i++){
      const t = b.trail[i];
      const a = (i/b.trail.length);
      ctx.globalAlpha = a*0.6;
      ctx.fillStyle = COLORS.bullet;
      ctx.beginPath(); ctx.arc(t.x,t.y, BULLET_R*a*0.9,0,Math.PI*2); ctx.fill();
    }
    ctx.globalAlpha = 1;
    ctx.shadowColor = COLORS.bulletGlow; ctx.shadowBlur = 14;
    ctx.fillStyle = COLORS.bullet;
    ctx.beginPath(); ctx.arc(b.x,b.y,BULLET_R,0,Math.PI*2); ctx.fill();
    ctx.shadowBlur = 0;
  }
}

function simulateTrajectoryPreview(){
  // simulate up to first collision, then a short segment past the first bounce
  const p = Game.player;
  const dir = Game.aimDir;
  let x = p.x + dir.x*(PLAYER_R+6), y = p.y + dir.y*(PLAYER_R+6);
  let vx = dir.x, vy = dir.y;
  const pts = [{x,y}];
  const step = 4;
  let bounced = false;
  let travel = 0;
  const maxTravel = 900;
  while(travel < maxTravel){
    x += vx*step; y += vy*step; travel += step;
    pts.push({x,y});
    if(x<BULLET_R || x>WORLD_W-BULLET_R || y<BULLET_R || y>WORLD_H-BULLET_R){
      if(bounced) break;
      if(x<BULLET_R){ x=BULLET_R; vx=Math.abs(vx);} else if(x>WORLD_W-BULLET_R){ x=WORLD_W-BULLET_R; vx=-Math.abs(vx); }
      if(y<BULLET_R){ y=BULLET_R; vy=Math.abs(vy);} else if(y>WORLD_H-BULLET_R){ y=WORLD_H-BULLET_R; vy=-Math.abs(vy); }
      bounced = true;
      continue;
    }
    let hitObstacle = false;
    for(const o of Game.obstacles){
      if(o.type==='portalA'||o.type==='portalB') continue;
      const col = circleObbCollision(x,y,BULLET_R,o);
      if(col){
        if(bounced){ hitObstacle = true; break; }
        const rf = reflect(vx,vy,col.nx,col.ny);
        vx = rf.x; vy = rf.y;
        bounced = true;
        hitObstacle = 'continue';
        break;
      }
    }
    if(hitObstacle===true) break;
    if(bounced && travel > (pts.length<3?0:0)){
      // allow a short continuation after first bounce then stop
    }
    if(bounced && travel > step*2 && pts.length > 4 && bounced){
      // limit extra length after bounce
    }
  }
  return pts;
}

function drawAimLine(){
  if(!Game.isAiming) return;
  const pts = simulateTrajectoryPreview();
  ctx.save();
  ctx.setLineDash([6,7]);
  ctx.lineWidth = 2;
  for(let i=1;i<pts.length;i++){
    const a = clamp(1 - i/pts.length, 0.15, 0.9);
    ctx.strokeStyle = `rgba(77,243,255,${a})`;
    ctx.beginPath();
    ctx.moveTo(pts[i-1].x,pts[i-1].y);
    ctx.lineTo(pts[i].x,pts[i].y);
    ctx.stroke();
  }
  ctx.restore();
}

function render(){
  ctx.save();
  ctx.translate(shake.x, shake.y);
  drawGrid();
  drawObstacles();
  drawAimLine();
  drawBullets();
  drawPlayer();
  drawEnemy();
  renderParticles(ctx);
  renderFloatingTexts(ctx);
  ctx.restore();
}

/* =========================================================
   MAIN LOOP
   ========================================================= */
let lastT = performance.now();
function loop(now){
  let dt = (now-lastT)/1000;
  lastT = now;
  dt = Math.min(dt, 0.05);

  if(Game.state==='PLAYING' && !Game.awaitingResultPause){
    const scaledDt = dt*Game.timeScale;
    updateObstacles(scaledDt);
    updateBullets(scaledDt);
    if(Game.slowMoTimer>0){
      Game.slowMoTimer -= dt;
      if(Game.slowMoTimer<=0){ Game.timeScale=1; Game.slowMoUsedThisShot=false; }
    }
  }
  updateParticles(dt);
  updateFloatingTexts(dt);
  updateShake(dt);
  render();
  requestAnimationFrame(loop);
}

/* =========================================================
   UI / STATE MACHINE
   ========================================================= */
const overlays = {
  MENU: 'menuScreen', HOWTO:'howtoScreen', LEVEL_SELECT:'levelSelectScreen',
  SETTINGS:'settingsScreen', PAUSED:'pauseScreen', WIN:'winScreen', GAME_OVER:'gameOverScreen',
  CHALLENGE_MENU:'challengeMenuScreen', LEVEL_TRANSITION:'levelTransitionScreen'
};

function setState(state){
  Game.state = state;
  Object.values(overlays).forEach(id=>document.getElementById(id).classList.remove('active'));
  const hud = document.getElementById('hud');
  if(state==='PLAYING'){
    hud.classList.add('active');
  } else {
    hud.classList.remove('active');
    if(overlays[state]) document.getElementById(overlays[state]).classList.add('active');
  }
}

function showLevelTransition(nextLevelNumber, stars){
  return new Promise(resolve=>{
    const screen = document.getElementById('levelTransitionScreen');
    const title = document.getElementById('transitionTitle');
    const starsEl = document.getElementById('transitionStars');
    const sub = document.getElementById('transitionSub');

    title.textContent = 'LEVEL ' + String(nextLevelNumber).padStart(2,'0');
    const s = Math.max(1, Math.min(3, stars || 1));
    starsEl.textContent = '★'.repeat(s) + '☆'.repeat(3-s);
    sub.textContent = 'NEXT SHOT LOADING';

    setState('LEVEL_TRANSITION');
  
    setTimeout(()=>{
      sub.textContent = 'FIRE';
      setTimeout(resolve, 280);
    }, 520);
  });
}

function updateHUD(){
  document.getElementById('hudLevel').textContent = Game.isChallenge ? '--' : String(Game.levelIndex+1).padStart(2,'0');
  document.getElementById('hudScore').textContent = Game.score;
  const shotsDiv = document.getElementById('hudShots');
  shotsDiv.innerHTML = '';
  const total = Game.currentLevel ? Game.currentLevel.shots : 0;
  for(let i=0;i<total;i++){
    const dot = document.createElement('div');
    dot.className = 'shot-dot' + (i < Game.shotsLeft ? '' : ' used');
    shotsDiv.appendChild(dot);
  }
  document.getElementById('hudBounces').textContent = Game.bullets.length ? Game.bullets[0].bounces : 0;
}
setInterval(()=>{ if(Game.state==='PLAYING') updateHUD(); }, 120);

function showHintToast(text){
  const el = document.getElementById('hintToast');
  el.textContent = text;
  el.style.transition = 'none';
  el.style.opacity = '0';
  requestAnimationFrame(()=>{
    el.style.transition = 'opacity .4s ease';
    el.style.opacity = '1';
    setTimeout(()=>{ el.style.opacity = '0'; }, 1300);
  });
}

function buildLevelGrid(){
  const grid = document.getElementById('levelGrid');
  grid.innerHTML = '';
  for(let i=0;i<LEVELS.length;i++){
    const num = i+1;
    const locked = num > Progress.unlocked;
    const tile = document.createElement('div');
    tile.className = 'level-tile' + (locked ? ' locked' : '');
    if(locked){
      tile.innerHTML = `<div class="lock">&#128274;</div>`;
    } else {
      const stars = Progress.stars[num] || 0;
      tile.innerHTML = `<div>${String(num).padStart(2,'0')}</div><div class="stars">${'&#9733;'.repeat(stars)}${'&#9734;'.repeat(3-stars)}</div>`;
      tile.addEventListener('click', ()=>{ Sound.click(); startLevel(i); });
    }
    grid.appendChild(tile);
  }
}

function refreshToggles(){
  document.getElementById('toggleSound').classList.toggle('on', Settings.sound);
  document.getElementById('toggleMusic').classList.toggle('on', Settings.music);
  document.getElementById('toggleVibration').classList.toggle('on', Settings.vibration);
  document.getElementById('toggleShake').classList.toggle('on', Settings.shake);
}

document.getElementById('toggleSound').addEventListener('click', ()=>{
  Settings.sound = !Settings.sound; saveSettings(); refreshToggles(); Sound.click();
});
document.getElementById('toggleMusic').addEventListener('click', ()=>{
  Settings.music = !Settings.music; saveSettings(); refreshToggles();
  Sound.init(); Sound.resume();
  if(Settings.music) Sound.startMusic(); else Sound.stopMusic();
  Sound.click();
});
document.getElementById('toggleVibration').addEventListener('click', ()=>{
  Settings.vibration = !Settings.vibration; saveSettings(); refreshToggles(); Sound.click();
});
document.getElementById('toggleShake').addEventListener('click', ()=>{
  Settings.shake = !Settings.shake; saveSettings(); refreshToggles(); Sound.click();
});

document.getElementById('pauseBtn').addEventListener('click', ()=>{
  if(Game.state==='PLAYING'){ Sound.click(); setState('PAUSED'); }
});

document.body.addEventListener('click', (e)=>{
  const btn = e.target.closest('[data-go]');
  if(!btn) return;
  const go = btn.getAttribute('data-go');
  Sound.init(); Sound.resume();
  Sound.click();
  handleNav(go);
});

async function handleNav(go){
  switch(go){
    case 'menu':
      document.getElementById('bestScore').textContent = String(Progress.best);
      setState('MENU');
      break;
    case 'playGame':
      startLevel(clamp(Progress.unlocked-1, 0, LEVELS.length-1) === undefined ? 0 : Math.min(Progress.unlocked-1, LEVELS.length-1));
      break;
    case 'howto':
      setState('HOWTO');
      break;
    case 'levelSelect':
      buildLevelGrid();
      setState('LEVEL_SELECT');
      break;
    case 'settings':
      refreshToggles();
      setState('SETTINGS');
      break;
    case 'challengeMenu':
      setState('CHALLENGE_MENU');
      break;
    case 'newChallenge':
      startChallenge('challenge-'+Date.now()+'-'+Progress.challengeCount, 'CHALLENGE #'+String(Progress.challengeCount+1).padStart(5,'0'));
      break;
    case 'dailyChallenge': {
      const d = new Date();
      const key = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
      startChallenge('daily-'+key, 'DAILY · '+key);
      break;
    }
    case 'resume':
      setState('PLAYING');
      break;
    case 'restartLevel':
      if(Game.isChallenge){ loadLevelObjects(Game.currentLevel); Game.score=0; }
      else { loadLevelObjects(LEVELS[Game.levelIndex]); Game.score=0; }
      setState('PLAYING');
      updateHUD();
      break;
    case 'nextLevel': {
      // HARD GUARANTEE: NEXT LEVEL never depends on an ad, animation,
      // promise, timer, or completion callback.
      if(Game.isChallenge){
        Game.timeScale = 1;
        Game.awaitingResult = false;
        setState('MENU');
        break;
      }

      const nextIndex = Game.levelIndex + 1;
      if(nextIndex < LEVELS.length){
        Game.timeScale = 1;
        Game.awaitingResult = false;
        startLevel(nextIndex);
        setState('PLAYING');
        updateHUD();
      }else{
        Game.timeScale = 1;
        Game.awaitingResult = false;
        setState('MENU');
      }
      break;
    }
  }
}

/* =========================================================
   INTRO
   ========================================================= */
function runIntro(){
  const intro = document.getElementById('intro');
  const textEl = document.getElementById('introText');
  const words = ['CALCULATE','THE ANGLE','RICOCHET'];
  let i = 0;
  let done = false;
  function finish(){
    if(done) return;
    done = true;
    intro.style.transition = 'opacity .3s ease';
    intro.style.opacity = '0';
    setTimeout(()=>{
      intro.style.display = 'none';
      // No start menu: go straight into the player's current level.
      const firstLevel = Math.min(Math.max(Progress.unlocked - 1, 0), LEVELS.length - 1);
      startLevel(firstLevel);
    }, 300);
  }
  function showWord(){
    if(done) return;
    if(i >= words.length){ finish(); return; }
    textEl.textContent = words[i];
    textEl.style.transition = 'none';
    textEl.style.opacity = '0';
    textEl.style.transform = 'scale(0.85)';
    requestAnimationFrame(()=>{
      textEl.style.transition = 'opacity .25s ease, transform .25s ease';
      textEl.style.opacity = '1';
      textEl.style.transform = 'scale(1)';
    });
    i++;
    setTimeout(showWord, 650);
  }
  intro.addEventListener('click', finish);
  intro.addEventListener('touchstart', finish, {passive:true});
  showWord();
  setTimeout(finish, 2600);
}

/* =========================================================
   HOW-TO MINI DEMO CANVAS
   ========================================================= */
(function(){
  const hc = document.getElementById('howtoCanvas');
  const hctx = hc.getContext('2d');
  let ball = { x:40, y:60, vx:140, vy:95 };
  let running = false;
  function step(){
    if(!running) return;
    ball.x += ball.vx*0.016; ball.y += ball.vy*0.016;
    if(ball.x<10||ball.x>hc.width-10) ball.vx*=-1;
    if(ball.y<10||ball.y>hc.height-10) ball.vy*=-1;
    hctx.fillStyle = '#080a10'; hctx.fillRect(0,0,hc.width,hc.height);
    hctx.strokeStyle = 'rgba(77,243,255,0.3)'; hctx.strokeRect(2,2,hc.width-4,hc.height-4);
    hctx.shadowColor = '#4df3ff'; hctx.shadowBlur = 10;
    hctx.fillStyle = '#4df3ff';
    hctx.beginPath(); hctx.arc(ball.x,ball.y,6,0,Math.PI*2); hctx.fill();
    hctx.shadowBlur = 0;
    requestAnimationFrame(step);
  }
  const obs = new MutationObserver(()=>{
    const active = document.getElementById('howtoScreen').classList.contains('active');
    if(active && !running){ running = true; step(); }
    else if(!active){ running = false; }
  });
  obs.observe(document.getElementById('howtoScreen'), {attributes:true, attributeFilter:['class']});
})();

/* =========================================================
   INIT
   ========================================================= */
function init(){
  resize();
  refreshToggles();
  requestAnimationFrame(loop);
  runIntro();
}
window.addEventListener('load', init);

})();
