(function(){
"use strict";

/* ================= AUDIO ENGINE (Web Audio API, no external files) ================= */
const GameAudio = (function(){
  let ctx = null, masterGain=null, musicGain=null, sfxGain=null;
  let musicTimer=null, musicStep=0;
  let enabled = true;

  function ensureCtx(){
    if(ctx) return;
    try{
      ctx = new (window.AudioContext || window.webkitAudioContext)();
      masterGain = ctx.createGain(); masterGain.gain.value = enabled?1:0; masterGain.connect(ctx.destination);
      musicGain = ctx.createGain(); musicGain.gain.value = 0.16; musicGain.connect(masterGain);
      sfxGain = ctx.createGain(); sfxGain.gain.value = 0.85; sfxGain.connect(masterGain);
    }catch(e){ ctx=null; }
  }
  function resume(){
    ensureCtx();
    if(ctx && ctx.state==='suspended') ctx.resume().catch(()=>{});
  }

  function playTone(freq, dur, opts){
    if(!enabled) return;
    ensureCtx(); if(!ctx) return;
    opts = opts||{};
    const t0 = ctx.currentTime;
    const osc = ctx.createOscillator();
    osc.type = opts.type || 'sine';
    osc.frequency.setValueAtTime(freq, t0);
    if(opts.slideTo) osc.frequency.exponentialRampToValueAtTime(Math.max(opts.slideTo,1), t0+dur);
    const g = ctx.createGain();
    const vol = opts.volume!==undefined?opts.volume:0.28;
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(vol, t0+(opts.attack||0.012));
    g.gain.exponentialRampToValueAtTime(0.0001, t0+dur);
    osc.connect(g); g.connect(opts.bus || sfxGain);
    osc.start(t0); osc.stop(t0+dur+0.03);
  }

  function playNoise(dur, opts){
    if(!enabled) return;
    ensureCtx(); if(!ctx) return;
    opts = opts||{};
    const t0 = ctx.currentTime;
    const size = Math.max(1, Math.floor(ctx.sampleRate*dur));
    const buffer = ctx.createBuffer(1, size, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for(let i=0;i<size;i++) data[i] = (Math.random()*2-1) * (1-i/size);
    const src = ctx.createBufferSource(); src.buffer = buffer;
    const filter = ctx.createBiquadFilter();
    filter.type = opts.filterType || 'bandpass';
    filter.frequency.setValueAtTime(opts.freq||1200, t0);
    if(opts.freqTo) filter.frequency.exponentialRampToValueAtTime(Math.max(opts.freqTo,20), t0+dur);
    filter.Q.value = opts.q!==undefined?opts.q:1;
    const g = ctx.createGain();
    g.gain.setValueAtTime(opts.volume||0.35, t0);
    g.gain.exponentialRampToValueAtTime(0.0001, t0+dur);
    src.connect(filter); filter.connect(g); g.connect(sfxGain);
    src.start(t0);
  }

  const sfx = {
    throwKnife(){ playNoise(0.16, {freq:3400, freqTo:900, filterType:'highpass', volume:0.22}); },
    perfect(){
      playTone(880,0.12,{type:'triangle',volume:0.32});
      setTimeout(()=>playTone(1320,0.18,{type:'triangle',volume:0.3}),55);
      setTimeout(()=>playTone(1760,0.14,{type:'sine',volume:0.2}),110);
    },
    great(){ playTone(700,0.14,{type:'triangle',volume:0.28}); setTimeout(()=>playTone(980,0.12,{type:'triangle',volume:0.22}),50); },
    good(){ playTone(520,0.12,{type:'sine',volume:0.24}); },
    bad(){ playTone(240,0.18,{type:'sawtooth',volume:0.2,slideTo:130}); },
    miss(){ playTone(320,0.26,{type:'sawtooth',volume:0.2,slideTo:110}); },
    bomb(){
      playNoise(0.5,{freq:900,freqTo:60,filterType:'lowpass',volume:0.5,q:0.7});
      playTone(110,0.4,{type:'sine',volume:0.32,slideTo:35});
    },
    comboMilestone(){ [660,880,1100].forEach((f,i)=> setTimeout(()=>playTone(f,0.13,{type:'square',volume:0.2}), i*70)); },
    legendary(){ [440,660,880,1320,1760].forEach((f,i)=> setTimeout(()=>playTone(f,0.28,{type:'triangle',volume:0.28}), i*85)); },
    comboBreak(){ playTone(260,0.22,{type:'square',volume:0.18,slideTo:120}); },
    gameOver(){ [440,392,349,262].forEach((f,i)=> setTimeout(()=>playTone(f,0.4,{type:'triangle',volume:0.24}), i*190)); },
    uiClick(){ playTone(720,0.05,{type:'square',volume:0.14}); },
    pause(){ playTone(500,0.08,{type:'sine',volume:0.16}); },
  };

  // Simple looping arcade bassline + accent for background music.
  const bassPattern = [110, 110, 146.83, 110, 130.81, 130.81, 164.81, 123.47];
  function musicStepFn(){
    if(!enabled || !ctx) return;
    const t0 = ctx.currentTime;
    const freq = bassPattern[musicStep % bassPattern.length];
    const osc = ctx.createOscillator(); osc.type='sine';
    osc.frequency.setValueAtTime(freq, t0);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(0.22, t0+0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t0+0.26);
    osc.connect(g); g.connect(musicGain);
    osc.start(t0); osc.stop(t0+0.3);

    if(musicStep % 2 === 0){
      const osc2 = ctx.createOscillator(); osc2.type='triangle';
      osc2.frequency.setValueAtTime(freq*2, t0);
      const g2 = ctx.createGain();
      g2.gain.setValueAtTime(0.0001, t0);
      g2.gain.exponentialRampToValueAtTime(0.1, t0+0.015);
      g2.gain.exponentialRampToValueAtTime(0.0001, t0+0.18);
      osc2.connect(g2); g2.connect(musicGain);
      osc2.start(t0); osc2.stop(t0+0.2);
    }
    musicStep++;
  }
  function startMusic(){
    resume();
    if(musicTimer || !enabled) return;
    musicStep = 0;
    musicStepFn();
    musicTimer = setInterval(musicStepFn, 300);
  }
  function stopMusic(){
    if(musicTimer){ clearInterval(musicTimer); musicTimer=null; }
  }
  function setEnabled(v){
    enabled = v;
    if(masterGain) masterGain.gain.value = v?1:0;
    if(!v) stopMusic();
  }
  function isEnabled(){ return enabled; }

  return { resume, sfx, startMusic, stopMusic, setEnabled, isEnabled };
})();


/* ================= SETUP ================= */
const stage = document.getElementById('stage');
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
let DPR = Math.min(window.devicePixelRatio||1, 2.5);
let W=0,H=0;

function resize(){
  const rect = stage.getBoundingClientRect();
  W = rect.width; H = rect.height;
  canvas.width = W*DPR; canvas.height = H*DPR;
  canvas.style.width = W+'px'; canvas.style.height = H+'px';
  ctx.setTransform(DPR,0,0,DPR,0,0);
}
window.addEventListener('resize', resize);
resize();

/* ================= STORAGE ================= */
const STORE_KEY = 'knifetalk_save_v1';
let save = { best:0 };
try{
  const raw = localStorage.getItem(STORE_KEY);
  if(raw) save = Object.assign(save, JSON.parse(raw));
}catch(e){ /* ignore corrupted storage */ }
function persist(){
  try{ localStorage.setItem(STORE_KEY, JSON.stringify(save)); }catch(e){}
}
document.getElementById('start-best').textContent = save.best;

/* ================= UTIL ================= */
function rand(a,b){ return a + Math.random()*(b-a); }
function pick(arr){ return arr[Math.floor(Math.random()*arr.length)]; }
function pickNotSame(arr, last){
  if(arr.length<=1) return arr[0];
  let choice;
  do{ choice = pick(arr); }while(choice===last);
  return choice;
}
function clamp(v,a,b){ return Math.max(a,Math.min(b,v)); }
function dist(x1,y1,x2,y2){ return Math.hypot(x1-x2, y1-y2); }

/* ================= FRUIT DEFS ================= */
const FRUITS = [
  { key:'apple', glyph:'🍎', color:'#ff5a5f', r:26 },
  { key:'banana', glyph:'🍌', color:'#ffd84a', r:26 },
  { key:'orange', glyph:'🍊', color:'#ff9a3d', r:26 },
  { key:'watermelon', glyph:'🍉', color:'#57e28c', r:30 },
  { key:'pineapple', glyph:'🍍', color:'#f4c430', r:28 },
  { key:'strawberry', glyph:'🍓', color:'#ff3d6b', r:22 },
  { key:'peach', glyph:'🍑', color:'#ffab91', r:24 },
  { key:'lemon', glyph:'🍋', color:'#f7e35f', r:22 },
  { key:'coconut', glyph:'🥥', color:'#c9a679', r:26 },
  { key:'kiwi', glyph:'🥝', color:'#8bc34a', r:22 },
  { key:'grapes', glyph:'🍇', color:'#9b59b6', r:24 },
];
const GOLDEN = { key:'golden', glyph:'✨🍎', color:'#ffce4a', r:28, golden:true };
const BOMB = { key:'bomb', glyph:'💣', color:'#333', r:26, bomb:true };

/* ================= MEME POOLS ================= */
const MEMES = {
  perfect: [ ['😎','SHEEEESH'], ['🤯','TOO CLEAN'], ['🔥','BRO IS LOCKED IN'], ['😤','WHAT A THROW'], ['🏆','W'], ['💯','PERFECT'] ],
  good:    [ ['🙂','NICE'], ['👍','CLEAN'], ['😌','GOOD ONE'], ['🙌','SOLID'] ],
  bad:     [ ['😬','BRO...'], ['😕','WHAT WAS THAT?'], ['🤨','YOU GOOD?'], ['😐','ALMOST'] ],
  miss:    [ ['💀','NAHHH'], ['😭','BRO MISSED'], ['😱','AINT NO WAY'], ['🫠','TRY AGAIN'], ['🙄','MY GUY...'] ],
  bomb:    [ ['😭','WHY WOULD YOU DO THAT'], ['💥','BOOM. BRO.'], ['🤦','READ THE ROOM'] ],
  comboBreak: [ ['😭','ALL THAT FOR NOTHING'], ['💔','COMBO BROKEN'], ['😩','SO CLOSE'] ]
};
let lastMeme = {perfect:null,good:null,bad:null,miss:null,bomb:null,comboBreak:null};

function showMeme(category, opts){
  opts = opts || {};
  const pool = MEMES[category];
  const choice = pickNotSame(pool, lastMeme[category]);
  lastMeme[category] = choice;
  const el = document.createElement('div');
  el.className = 'meme-pop';
  el.innerHTML = `<span class="face">${choice[0]}</span><span class="txt">${opts.text || choice[1]}</span>`;
  el.style.color = opts.color || 'var(--text)';
  const anim = opts.anim || 'memeGood';
  el.style.animation = `${anim} ${opts.duration||900}ms cubic-bezier(.2,1,.3,1) forwards`;
  document.getElementById('meme-layer').appendChild(el);
  setTimeout(()=> el.remove(), (opts.duration||900)+80);
}

function flashScreen(strength){
  const f = document.getElementById('flash');
  f.style.transition = 'none';
  f.style.opacity = strength;
  requestAnimationFrame(()=>{
    f.style.transition = 'opacity 260ms ease';
    f.style.opacity = 0;
  });
}

function showComboBreak(){
  const el = document.getElementById('combo-broken');
  const line = pickNotSame(MEMES.comboBreak, lastMeme.comboBreak);
  lastMeme.comboBreak = line;
  el.innerHTML = `COMBO BROKEN<br><span style="font-size:14px; -webkit-text-stroke:0;">${line[0]} ${line[1]}</span>`;
  el.style.animation = 'none';
  void el.offsetWidth;
  el.style.animation = 'comboBreakAnim 900ms ease forwards';
}

function showLegendary(){
  const el = document.getElementById('legendary-banner');
  el.style.animation = 'none';
  void el.offsetWidth;
  el.style.animation = 'legendaryAnim 1400ms ease forwards';
}

/* ================= CAMERA SHAKE ================= */
let shake = {t:0, mag:0};
function addShake(mag, dur){ shake.mag = Math.max(shake.mag, mag); shake.t = Math.max(shake.t, dur); }

/* ================= WG PLAYGROUND AD BRIDGE ================= */
let wgAdInProgress = false;
window.__wgAdInProgress = false;
let wgAdWasSoundOn = true;

function resumeGame(){
  wgAdInProgress = false;
  window.__wgAdInProgress = false;
  if(state === 'adpaused'){
    state = 'playing';
    lastTime = performance.now();
    if(wgAdWasSoundOn) GameAudio.setEnabled(true);
    GameAudio.resume();
    GameAudio.startMusic();
  }
}

function pauseForWGAd(){
  if(wgAdInProgress || state !== 'playing') return;

  // WGPlayer expects a function reference as the callback.
  if(!window.preroll || !window.preroll.config || !window.preroll.config.loaderObjectName){
    return;
  }

  const loader = window[window.preroll.config.loaderObjectName];
  if(!loader || typeof loader.refetchAd !== 'function') return;

  wgAdInProgress = true;
  window.__wgAdInProgress = true;
  state = 'adpaused';
  GameAudio.stopMusic();
  wgAdWasSoundOn = GameAudio.isEnabled();
  GameAudio.setEnabled(false);

  try{
    loader.refetchAd(resumeGame);
  }catch(e){
    resumeGame();
  }
}

window.resumeGame = resumeGame;
window.pauseForWGAd = pauseForWGAd;

/* ================= GAME STATE ================= */
let state = 'start'; // start, playing, paused, over
let score=0, combo=0, maxCombo=0, perfectCount=0, lives=3;
let sliceCount = 0;
let difficultyLevel = 0;

let fruits = [];
let knives = [];
let particles = [];
let floatTexts = [];

let spawnTimer = 0;
let lastTime = 0;

const PERFECT_ZONE = { yMinFrac:0.62, yMaxFrac:0.74 }; // fraction of H

function baseDifficulty(){
  return {
    spawnInterval: Math.max(0.55, 1.5 - difficultyLevel*0.09),
    fallSpeed: 90 + difficultyLevel*10,
    fallSpeedVar: 25,
    driftChance: clamp(0.15 + difficultyLevel*0.05, 0.15, 0.6),
    perfectWindow: Math.max(16, 30 - difficultyLevel*1.2), // px half-height around zone center
    bombChance: clamp(0.06 + difficultyLevel*0.01, 0.06, 0.22),
    goldenChance: 0.035,
  };
}

/* ================= KNIFE (idle) ================= */
let idlePhase = 0;

/* ================= FRUIT SPAWN ================= */
function spawnFruit(){
  const diff = baseDifficulty();
  let def;
  const roll = Math.random();
  if(roll < diff.bombChance) def = BOMB;
  else if(roll < diff.bombChance + diff.goldenChance) def = GOLDEN;
  else def = pick(FRUITS);

  const r = def.r;
  const x = rand(r+20, W-r-20);

  // Vary the fall pattern so fruit rarely drops in a plain straight line.
  const motionRoll = Math.random();
  let motionType;
  if(motionRoll < 0.22) motionType = 'straight';
  else if(motionRoll < 0.60) motionType = 'sway';
  else if(motionRoll < 0.85) motionType = 'diagonal';
  else motionType = 'zigzag';

  const f = {
    def, x, y: -r-10, r,
    vy: diff.fallSpeed + rand(-diff.fallSpeedVar, diff.fallSpeedVar),
    motionType,
    vx: motionType==='diagonal' ? pick([-1,1])*rand(35,75) : 0,
    sway: motionType==='sway' ? rand(1.0,2.2) : 0,
    swayAmp: rand(26,46),
    swayPhase: rand(0, Math.PI*2),
    zigDir: pick([-1,1]),
    zigTimer: rand(0.35,0.7),
    baseX: x,
    rot: rand(0,Math.PI*2),
    rotSpeed: rand(-1.2,1.2),
    alive:true,
    scale:1,
  };
  fruits.push(f);
}

/* ================= THROW ================= */
const KNIFE_LAUNCH_X = ()=>W/2;
const KNIFE_LAUNCH_Y = ()=>H-46;

function pathLength(points){
  let len=0;
  for(let i=1;i<points.length;i++) len += dist(points[i-1].x,points[i-1].y,points[i].x,points[i].y);
  return len;
}

function exitDirectionFromPath(points){
  // use the last few points to find the direction the swipe was heading
  const n = points.length;
  const tail = points.slice(Math.max(0,n-4));
  const p1 = tail[0], p2 = tail[tail.length-1];
  let dx = p2.x-p1.x, dy = p2.y-p1.y;
  let len = Math.hypot(dx,dy) || 1;
  let dirX = dx/len, dirY = dy/len;
  if(dirY > -0.1){
    // keep it from exiting downward off the bottom of the screen
    const horiz = clamp(dirX,-1,1);
    dirX = horiz*0.8; dirY = -0.6;
    const n2 = Math.hypot(dirX,dirY);
    dirX/=n2; dirY/=n2;
  }
  return {dirX,dirY};
}

// A simple straight throw (used as a tap fallback when there's no real swipe).
function throwKnife(vx, vy, start){
  start = start || { x:KNIFE_LAUNCH_X(), y:KNIFE_LAUNCH_Y() };
  const knife = {
    mode:'linear',
    x: start.x, y: start.y,
    vx, vy,
    rot: 0,
    alive:true,
  };
  knives.push(knife);
  GameAudio.sfx.throwKnife();
}

// The knife is drawn along the exact curve the player swiped, then continues
// straight onward in the swipe's exit direction once the drawn path runs out.
function throwAlongPath(points){
  const len = pathLength(points);
  const speed = 1500; // px/sec traveled along the drawn curve
  const duration = clamp(len/speed, 0.12, 0.55);
  const { dirX, dirY } = exitDirectionFromPath(points);
  const exitSpeed = clamp(len/duration, 700, 1600);
  const knife = {
    mode:'path',
    path: points,
    duration, elapsed:0,
    x: points[0].x, y: points[0].y,
    exitVx: dirX*exitSpeed, exitVy: dirY*exitSpeed,
    rot: 0,
    alive:true,
  };
  knives.push(knife);
  GameAudio.sfx.throwKnife();
}

function pointOnPath(path, frac){
  const pos = clamp(frac,0,1) * (path.length-1);
  const i0 = Math.floor(pos);
  const i1 = Math.min(path.length-1, i0+1);
  const t = pos-i0;
  const a = path[i0], b = path[i1];
  return { x: a.x+(b.x-a.x)*t, y: a.y+(b.y-a.y)*t };
}


function zoneCenterY(){ return H*(PERFECT_ZONE.yMinFrac+PERFECT_ZONE.yMaxFrac)/2; }
function zoneTopY(){ return H*PERFECT_ZONE.yMinFrac; }
function zoneBotY(){ return H*PERFECT_ZONE.yMaxFrac; }

function gradeForY(y, diff){
  const center = zoneCenterY();
  const d = Math.abs(y-center);
  const pw = diff.perfectWindow;
  if(d <= pw) return 'perfect';
  if(d <= pw*2.2) return 'great';
  if(d <= pw*4) return 'good';
  return 'bad';
}

function spawnParticles(x,y,color,count,speedMul){
  for(let i=0;i<count;i++){
    const ang = rand(0,Math.PI*2);
    const spd = rand(60,220)*speedMul;
    particles.push({
      x,y, vx:Math.cos(ang)*spd, vy:Math.sin(ang)*spd - 60,
      life: rand(0.35,0.8), t:0, color, size: rand(2,5)
    });
  }
}

function floatScore(x,y,text,color){
  floatTexts.push({x,y,text,color,t:0,life:0.9});
}

function updateHUD(){
  document.getElementById('score-val').textContent = Math.floor(score).toLocaleString();
  const heartFull='❤️', heartEmpty='🖤';
  let hearts='';
  for(let i=0;i<3;i++) hearts += i<lives? heartFull:heartEmpty;
  document.getElementById('lives-val').textContent = hearts;
  const comboEl = document.getElementById('combo-val');
  if(combo>=2){
    comboEl.style.opacity=1;
    comboEl.textContent = 'COMBO x'+combo;
    const scale = 1 + Math.min(combo,20)*0.02;
    comboEl.style.transform = `scale(${scale})`;
  } else {
    comboEl.style.opacity=0;
  }
}

function comboMultiplierBonus(){
  if(combo>=20) return 500;
  if(combo>=10) return 200;
  if(combo>=5) return 100;
  return 0;
}

function registerHit(fruit, grade){
  sliceCount++;
  if(sliceCount % 10 === 0) difficultyLevel++;
  // Natural pause: show a WG Playground midroll every 10 successful slices.
  if(sliceCount > 0 && sliceCount % 10 === 0){
    setTimeout(pauseForWGAd, 80);
  }

  let base = { perfect:150, great:100, good:75, bad:50 }[grade] || 50;
  combo++;
  maxCombo = Math.max(maxCombo, combo);
  const bonus = comboMultiplierBonus();
  const total = base + bonus;
  score += total;

  floatScore(fruit.x, fruit.y, '+'+total, grade==='perfect'?'#ffce4a':'#4be3ff');
  spawnParticles(fruit.x, fruit.y, fruit.def.color, grade==='perfect'?26:14, grade==='perfect'?1.3:1);

  if(combo===5 || combo===10 || combo===20) GameAudio.sfx.comboMilestone();

  if(grade==='perfect'){
    perfectCount++;
    addShake(6,180);
    flashScreen(0.25);
    GameAudio.sfx.perfect();
    // rare legendary
    if(Math.random() < 0.01){
      score += 500;
      showLegendary();
      addShake(10,260);
      GameAudio.sfx.legendary();
    } else if(Math.random() < 0.04){
      score += 500;
      showMeme('perfect', {text:'GOLDEN MEME +500', color:'#ffce4a'});
    } else {
      showMeme('perfect', {anim:'memePerfect', duration:1000});
    }
  } else if(grade==='great'){
    addShake(3,120);
    GameAudio.sfx.great();
    showMeme('good', {text: pick(['GREAT!','SHEESH','NICE TIMING'])});
  } else if(grade==='good'){
    GameAudio.sfx.good();
    showMeme('good');
  } else {
    GameAudio.sfx.bad();
    showMeme('bad');
  }
  updateHUD();
}

function registerMiss(){
  if(combo>=3){ showComboBreak(); GameAudio.sfx.comboBreak(); }
  combo=0;
  updateHUD();
  GameAudio.sfx.miss();
  showMeme('miss', {anim:'memeMiss'});
  addShake(2,100);
}

function registerBombHit(fruit){
  lives--;
  combo=0;
  spawnParticles(fruit.x, fruit.y, '#ff4d4d', 30, 1.6);
  addShake(9,220);
  flashScreen(0.35);
  GameAudio.sfx.bomb();
  showMeme('bomb', {anim:'memeMiss', color:'#ff4d5e'});
  updateHUD();
  if(lives<=0) triggerGameOver();
}

function registerFruitEscaped(fruit){
  if(fruit.def.bomb) return; // bombs escaping is fine/good
  lives--;
  combo=0;
  updateHUD();
  if(lives<=0){ triggerGameOver(); }
  else { registerMiss(); }
}

/* ================= GAME OVER / RESET ================= */
function triggerGameOver(){
  window.WGGameSDK?.gameplayStop?.();
  window.WGGameSDK?.saveScore?.(score);
  state='over';
  GameAudio.stopMusic();
  GameAudio.sfx.gameOver();
  if(score>save.best){ save.best = Math.floor(score); persist(); }
  document.getElementById('over-score').textContent = Math.floor(score).toLocaleString();
  document.getElementById('over-best').textContent = save.best.toLocaleString();
  document.getElementById('over-combo').textContent = 'x'+maxCombo;
  document.getElementById('over-perfect').textContent = perfectCount;
  const overLines = ["\"WE DON'T TALK ABOUT THAT.\"", "\"IT IS WHAT IT IS.\"", "\"RUN IT BACK.\"", "\"THAT'S CRAZY.\""];
  document.getElementById('over-meme').textContent = pick(overLines);
  show('screen-over');
}

function resetGame(){
  score=0; combo=0; maxCombo=0; perfectCount=0; lives=3; sliceCount=0; difficultyLevel=0;
  fruits=[]; knives=[]; particles=[]; floatTexts=[];
  spawnTimer=0;
  updateHUD();
}

/* ================= SCREENS ================= */
function show(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}
function hideAllScreens(){
  document.querySelectorAll('.screen').forEach(s=>s.classList.add('hidden'));
}

document.getElementById('btn-play').addEventListener('click', ()=>{
  GameAudio.resume(); GameAudio.sfx.uiClick();
  resetGame();
  hideAllScreens();
  state='playing';
  lastTime = performance.now();
  GameAudio.startMusic();
  window.WGGameSDK?.gameplayStart?.();
});
document.getElementById('btn-howto').addEventListener('click', ()=>{ GameAudio.resume(); GameAudio.sfx.uiClick(); show('screen-howto'); });
document.getElementById('btn-howto-back').addEventListener('click', ()=>{ GameAudio.sfx.uiClick(); show('screen-start'); });
document.getElementById('btn-again').addEventListener('click', ()=>{
  GameAudio.resume(); GameAudio.sfx.uiClick();
  resetGame();
  hideAllScreens();
  state='playing';
  lastTime = performance.now();
  GameAudio.startMusic();
  window.WGGameSDK?.gameplayStart?.();
});
document.getElementById('btn-home').addEventListener('click', ()=>{
  GameAudio.sfx.uiClick();
  GameAudio.stopMusic();
  document.getElementById('start-best').textContent = save.best;
  show('screen-start');
  state='start';
});
document.getElementById('pause-btn').addEventListener('click', ()=>{
  if(state==='playing'){
    GameAudio.sfx.pause();
    GameAudio.stopMusic();
    state='paused'; show('screen-pause');
  }
});
document.getElementById('btn-resume').addEventListener('click', ()=>{
  if(state==='paused'){
    GameAudio.resume();
    GameAudio.sfx.uiClick();
    state='playing';
    lastTime=performance.now();
    hideAllScreens();
    GameAudio.startMusic();
  }
});
document.getElementById('btn-restart').addEventListener('click', ()=>{
  GameAudio.resume();
  GameAudio.sfx.uiClick();
  resetGame();
  hideAllScreens();
  state='playing';
  lastTime=performance.now();
  GameAudio.startMusic();
});
document.getElementById('btn-quit').addEventListener('click', ()=>{
  GameAudio.sfx.uiClick();
  GameAudio.stopMusic();
  state='start';
  document.getElementById('start-best').textContent=save.best;
  show('screen-start');
});
document.getElementById('mute-btn').addEventListener('click', ()=>{
  GameAudio.resume();
  const next = !GameAudio.isEnabled();
  GameAudio.setEnabled(next);
  document.getElementById('mute-btn').textContent = next ? '🔊' : '🔇';
  save.soundOn = next;
  persist();
  if(next && state==='playing') GameAudio.startMusic();
});
if(save.soundOn === false){
  GameAudio.setEnabled(false);
  document.getElementById('mute-btn').textContent = '🔇';
}
document.getElementById('btn-resume').addEventListener('click', ()=>{
  GameAudio.resume(); GameAudio.sfx.uiClick();
  hideAllScreens();
  state='playing';
  lastTime = performance.now();
  GameAudio.startMusic();
});
document.getElementById('btn-restart').addEventListener('click', ()=>{
  GameAudio.resume(); GameAudio.sfx.uiClick();
  resetGame();
  hideAllScreens();
  state='playing';
  lastTime = performance.now();
  GameAudio.startMusic();
});
document.getElementById('btn-quit').addEventListener('click', ()=>{
  GameAudio.sfx.uiClick();
  GameAudio.stopMusic();
  document.getElementById('start-best').textContent = save.best;
  show('screen-start');
  state='start';
});

/* ================= INPUT ================= */
let isDragging = false;
let dragPoints = [];
const MAX_DRAG_POINTS = 40;

function getLocalXY(e){
  const rect = canvas.getBoundingClientRect();
  const t = (e.touches && e.touches[0]) ? e.touches[0] : e;
  return { x: t.clientX - rect.left, y: t.clientY - rect.top };
}
canvas.addEventListener('pointerdown', (e)=>{
  if(state!=='playing') return;
  e.preventDefault();
  GameAudio.resume();
  isDragging = true;
  dragPoints = [getLocalXY(e)];
});
canvas.addEventListener('pointermove', (e)=>{
  if(!isDragging) return;
  e.preventDefault();
  const pos = getLocalXY(e);
  const last = dragPoints[dragPoints.length-1];
  if(!last || dist(last.x,last.y,pos.x,pos.y) > 3){
    dragPoints.push(pos);
    if(dragPoints.length > MAX_DRAG_POINTS) dragPoints.shift();
  }
});
function endDrag(e){
  if(!isDragging) return;
  isDragging = false;
  if(e){
    const pos = getLocalXY(e);
    const last = dragPoints[dragPoints.length-1];
    if(!last || dist(last.x,last.y,pos.x,pos.y) > 1) dragPoints.push(pos);
  }
  const points = dragPoints;
  dragPoints = [];
  if(points.length < 3 || pathLength(points) < 18){
    // treat as a simple tap: default straight throw from the knife dock
    throwKnife(0, -1000);
  } else {
    throwAlongPath(points);
  }
}
canvas.addEventListener('pointerup', (e)=>{ endDrag(e); });
canvas.addEventListener('pointercancel', ()=>{ isDragging=false; dragPoints=[]; });
canvas.addEventListener('pointerleave', (e)=>{ endDrag(e); });

window.addEventListener('keydown', (e)=>{
  if(e.code==='Space' && state==='playing'){
    e.preventDefault();
    throwKnife(0,-1000);
  }
  if(e.code==='Escape'){
    if(state==='playing'){ GameAudio.stopMusic(); state='paused'; show('screen-pause'); }
    else if(state==='paused'){ hideAllScreens(); state='playing'; lastTime=performance.now(); GameAudio.startMusic(); }
  }
});

/* ================= BACKGROUND DECOR ================= */
let bgParticles = [];
for(let i=0;i<28;i++){
  bgParticles.push({ x:Math.random(), y:Math.random(), s:rand(0.6,2.2), spd:rand(4,14), drift:rand(-4,4) });
}

function drawBackground(dt){
  ctx.clearRect(0,0,W,H);
  const g = ctx.createLinearGradient(0,0,0,H);
  g.addColorStop(0,'#141a38');
  g.addColorStop(0.55,'#0b0e1e');
  g.addColorStop(1,'#05060c');
  ctx.fillStyle = g;
  ctx.fillRect(0,0,W,H);

  // faint grid
  ctx.strokeStyle = 'rgba(75,227,255,0.05)';
  ctx.lineWidth=1;
  const gridSize=40;
  for(let x=0;x<W;x+=gridSize){
    ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,H); ctx.stroke();
  }
  for(let y=0;y<H;y+=gridSize){
    ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(W,y); ctx.stroke();
  }

  // floating particles
  ctx.fillStyle='rgba(255,255,255,0.5)';
  for(const p of bgParticles){
    p.y -= (p.spd*dt)/H;
    p.x += (p.drift*dt)/W;
    if(p.y< -0.02) p.y = 1.02;
    if(p.x<-0.02) p.x=1.02; if(p.x>1.02) p.x=-0.02;
    ctx.globalAlpha = 0.25+0.2*Math.sin(p.y*10);
    ctx.beginPath();
    ctx.arc(p.x*W, p.y*H, p.s, 0, Math.PI*2);
    ctx.fill();
  }
  ctx.globalAlpha=1;

  // perfect zone band
  const yTop = zoneTopY(), yBot = zoneBotY();
  const bandGrad = ctx.createLinearGradient(0,yTop,0,yBot);
  bandGrad.addColorStop(0,'rgba(75,227,255,0.02)');
  bandGrad.addColorStop(0.5,'rgba(75,227,255,0.10)');
  bandGrad.addColorStop(1,'rgba(75,227,255,0.02)');
  ctx.fillStyle = bandGrad;
  ctx.fillRect(0,yTop,W,yBot-yTop);

  ctx.setLineDash([8,6]);
  ctx.strokeStyle='rgba(75,227,255,0.35)';
  ctx.lineWidth=1.5;
  ctx.beginPath(); ctx.moveTo(0,zoneCenterY()); ctx.lineTo(W,zoneCenterY()); ctx.stroke();
  ctx.setLineDash([]);
}

/* ================= DRAW FRUIT ================= */
function drawFruit(f){
  ctx.save();
  ctx.translate(f.x, f.y);
  ctx.rotate(f.rot);
  ctx.scale(f.scale, f.scale);
  if(f.def.bomb){
    ctx.shadowColor='rgba(255,50,50,0.6)';
    ctx.shadowBlur=14;
  } else if(f.def.golden){
    ctx.shadowColor='rgba(255,206,74,0.9)';
    ctx.shadowBlur=22;
  } else {
    ctx.shadowColor=f.def.color;
    ctx.shadowBlur=10;
  }
  ctx.font = (f.r*1.7)+'px serif';
  ctx.textAlign='center';
  ctx.textBaseline='middle';
  ctx.fillText(f.def.glyph, 0, 2);
  ctx.restore();
}

function drawFruitHalf(p){
  ctx.save();
  ctx.globalAlpha = clamp(1 - p.t/p.life, 0, 1);
  ctx.translate(p.x,p.y);
  ctx.rotate(p.rot);
  ctx.scale(p.dir* (p.scale||1), p.scale||1);
  ctx.beginPath();
  ctx.rect(p.dir<0? -60:0, -60, 60, 120);
  ctx.clip();
  ctx.font = (p.r*1.7)+'px serif';
  ctx.textAlign='center';
  ctx.textBaseline='middle';
  ctx.fillText(p.glyph, 0,2);
  ctx.restore();
}

/* ================= DRAW KNIFE ================= */
function drawIdleKnife(){
  const bob = Math.sin(idlePhase)*4;
  const tilt = Math.sin(idlePhase*0.6)*0.08;
  ctx.save();
  ctx.translate(W/2, H-40+bob);
  ctx.rotate(tilt - Math.PI/2);
  ctx.shadowColor='rgba(75,227,255,0.6)';
  ctx.shadowBlur=16;
  ctx.font='34px serif';
  ctx.textAlign='center';
  ctx.textBaseline='middle';
  ctx.fillText('🔪',0,0);
  ctx.restore();
}

function drawStraightTrajectory(x0, y0, vx, vy, opts){
  opts = opts || {};
  const steps = opts.steps || 16;
  const stepTime = opts.stepTime || 0.032;
  const color = opts.color || '#4be3ff';
  const baseAlpha = opts.alpha !== undefined ? opts.alpha : 0.5;
  ctx.save();
  for(let i=1;i<=steps;i++){
    const t = i*stepTime;
    const px = x0 + vx*t;
    const py = y0 + vy*t;
    if(px < -10 || px > W+10 || py < -50 || py > H+50) break;
    const fade = 1 - (i/steps)*0.6;
    ctx.globalAlpha = baseAlpha*fade;
    ctx.fillStyle = color;
    ctx.shadowColor = color;
    ctx.shadowBlur = 6;
    ctx.beginPath();
    ctx.arc(px, py, opts.dotSize || 2.6, 0, Math.PI*2);
    ctx.fill();
  }
  ctx.restore();
}

function drawKnifeTrajectory(k){
  if(k.mode==='path'){
    ctx.save();
    const scaled = clamp(k.elapsed/k.duration,0,1) * (k.path.length-1);
    const idx = Math.floor(scaled);
    for(let i=idx+1;i<k.path.length;i++){
      const p = k.path[i];
      const fade = 1 - ((i-idx)/(k.path.length-idx))*0.5;
      ctx.globalAlpha = 0.55*fade;
      ctx.fillStyle = '#4be3ff';
      ctx.shadowColor = 'rgba(75,227,255,0.8)';
      ctx.shadowBlur = 6;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 2.6, 0, Math.PI*2);
      ctx.fill();
    }
    ctx.restore();
    const endPt = k.path[k.path.length-1];
    drawStraightTrajectory(endPt.x, endPt.y, k.exitVx, k.exitVy, { color:'#4be3ff', alpha:0.32, steps:10 });
  } else {
    drawStraightTrajectory(k.x, k.y, k.vx, k.vy, { color:'#4be3ff', alpha:0.55 });
  }
}

function drawAimPreview(){
  if(!(isDragging && dragPoints.length>0)) return;
  // the glowing curve the finger has actually drawn -- this IS the knife's future path
  ctx.save();
  ctx.lineCap='round'; ctx.lineJoin='round';
  for(let i=1;i<dragPoints.length;i++){
    const a = dragPoints[i-1], b = dragPoints[i];
    const fade = i/dragPoints.length;
    ctx.globalAlpha = 0.3 + fade*0.6;
    ctx.strokeStyle = '#ffce4a';
    ctx.shadowColor = 'rgba(255,206,74,0.9)';
    ctx.shadowBlur = 12;
    ctx.lineWidth = 2.5 + fade*3.5;
    ctx.beginPath();
    ctx.moveTo(a.x,a.y);
    ctx.lineTo(b.x,b.y);
    ctx.stroke();
  }
  ctx.restore();

  // knife rides the fingertip while you draw the curve
  const last = dragPoints[dragPoints.length-1];
  let angle = -Math.PI/2;
  if(dragPoints.length>=2){
    const prev = dragPoints[dragPoints.length-2];
    angle = Math.atan2(last.y-prev.y, last.x-prev.x);
  }
  ctx.save();
  ctx.translate(last.x, last.y);
  ctx.rotate(angle);
  ctx.shadowColor='rgba(255,255,255,0.85)';
  ctx.shadowBlur=14;
  ctx.font='32px serif';
  ctx.textAlign='center';
  ctx.textBaseline='middle';
  ctx.fillText('🔪',0,0);
  ctx.restore();
}

function drawFlyingKnife(k){
  ctx.save();
  ctx.translate(k.x,k.y);
  ctx.rotate(k.rot);
  ctx.shadowColor='rgba(255,255,255,0.7)';
  ctx.shadowBlur=12;
  ctx.font='32px serif';
  ctx.textAlign='center';
  ctx.textBaseline='middle';
  ctx.fillText('🔪',0,0);
  ctx.restore();
}


/* ================= MAIN LOOP ================= */
function update(dt){
  idlePhase += dt*2.4;
  const diff = baseDifficulty();

  // shake decay
  if(shake.t>0){ shake.t -= dt*1000; if(shake.t<0) shake.t=0; }

  // spawn
  spawnTimer -= dt;
  if(spawnTimer<=0){
    spawnFruit();
    spawnTimer = diff.spawnInterval * rand(0.85,1.15);
  }

  // fruits
  for(const f of fruits){
    if(!f.alive) continue;
    f.y += f.vy*dt;
    f.rot += f.rotSpeed*dt;
    if(f.motionType==='sway'){
      f.swayPhase += dt*f.sway;
      f.x = f.baseX + Math.sin(f.swayPhase)*f.swayAmp;
    } else if(f.motionType==='diagonal'){
      f.x += f.vx*dt;
      if(f.x < f.r+10){ f.x = f.r+10; f.vx = Math.abs(f.vx); }
      if(f.x > W-f.r-10){ f.x = W-f.r-10; f.vx = -Math.abs(f.vx); }
    } else if(f.motionType==='zigzag'){
      f.zigTimer -= dt;
      if(f.zigTimer<=0){ f.zigDir *= -1; f.zigTimer = rand(0.35,0.7); }
      f.x = clamp(f.x + f.zigDir*80*dt, f.r+10, W-f.r-10);
    }
    if(f.y - f.r > H+20 && f.alive){
      f.alive=false;
      registerFruitEscaped(f);
    }
  }
  fruits = fruits.filter(f=>f.alive && f.y-f.r < H+40);

  // knives
  for(const k of knives){
    if(!k.alive) continue;
    if(k.mode==='path'){
      k.elapsed += dt;
      if(k.elapsed >= k.duration){
        const endPt = k.path[k.path.length-1];
        k.x = endPt.x; k.y = endPt.y;
        k.mode = 'linear';
        k.vx = k.exitVx; k.vy = k.exitVy;
      } else {
        const pos = pointOnPath(k.path, k.elapsed/k.duration);
        k.x = pos.x; k.y = pos.y;
      }
    } else {
      k.x += k.vx*dt;
      k.y += k.vy*dt;
    }
    k.rot += dt*18;
    // collision check
    for(const f of fruits){
      if(!f.alive) continue;
      if(dist(k.x,k.y,f.x,f.y) < f.r+14){
        k.alive=false;
        f.alive=false;
        if(f.def.bomb){
          registerBombHit(f);
        } else {
          const grade = gradeForY(f.y, diff);
          registerHit(f, grade);
          if(f.def.golden){ score+=300; floatScore(f.x,f.y-24,'+300 GOLD','#ffce4a'); }
        }
        spawnSliceHalves(f);
        break;
      }
    }
    if(k.y < -40 || k.x < -40 || k.x > W+40) k.alive=false;
  }
  knives = knives.filter(k=>k.alive);

  // particles
  for(const p of particles){
    p.t += dt;
    p.x += p.vx*dt;
    p.y += p.vy*dt;
    p.vy += 420*dt;
  }
  particles = particles.filter(p=>p.t<p.life);

  // slice halves
  for(const p of sliceHalves){
    p.t += dt;
    p.x += p.vx*dt;
    p.y += p.vy*dt;
    p.vy += 500*dt;
    p.rot += p.rotSpeed*dt;
  }
  sliceHalves = sliceHalves.filter(p=>p.t<p.life);

  // float texts
  for(const t of floatTexts){
    t.t += dt;
    t.y -= dt*40;
  }
  floatTexts = floatTexts.filter(t=>t.t<t.life);
}

let sliceHalves = [];
function spawnSliceHalves(f){
  for(const dir of [-1,1]){
    sliceHalves.push({
      glyph:f.def.glyph, r:f.r, x:f.x, y:f.y,
      vx: dir*rand(60,140), vy: rand(-160,-60),
      rot: f.rot, rotSpeed: dir*rand(2,5),
      dir, t:0, life:0.6, scale:1
    });
  }
}

function render(){
  ctx.save();
  let ox=0, oy=0;
  if(shake.t>0){
    const s = shake.mag * (shake.t/220);
    ox = rand(-s,s); oy = rand(-s,s);
    ctx.translate(ox,oy);
  }
  drawBackground(16);

  for(const f of fruits) drawFruit(f);
  for(const p of sliceHalves) drawFruitHalf(p);

  for(const p of particles){
    ctx.globalAlpha = clamp(1-p.t/p.life,0,1);
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
    ctx.fill();
  }
  ctx.globalAlpha=1;

  if(knives.length===0) drawIdleKnife();
  drawAimPreview();
  for(const k of knives) drawKnifeTrajectory(k);
  for(const k of knives) drawFlyingKnife(k);

  for(const t of floatTexts){
    ctx.globalAlpha = clamp(1-t.t/t.life,0,1);
    ctx.font='bold 20px "Space Grotesk", sans-serif';
    ctx.textAlign='center';
    ctx.fillStyle = t.color;
    ctx.fillText(t.text, t.x, t.y);
  }
  ctx.globalAlpha=1;

  ctx.restore();
}

function loop(now){
  requestAnimationFrame(loop);
  const dt = Math.min(0.033, (now-lastTime)/1000 || 0);
  lastTime = now;
  if(state==='playing'){
    update(dt);
  }
  if(state==='playing' || state==='paused' || state==='adpaused'){
    render();
  } else if(state==='start' || state==='over'){
    // gentle idle animation behind menus
    drawBackground(16);
    drawIdleKnife();
  }
}
requestAnimationFrame(loop);
updateHUD();

})();