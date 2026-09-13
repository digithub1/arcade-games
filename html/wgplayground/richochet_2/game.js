(function(){
'use strict';

/* =========================================================
   YES! GAMES SDK
   ========================================================= */
const YesSDK = {
  ready:false,
  player:null,
  init(){
    try{
      if(typeof yes === 'undefined') return;
      const finish = ()=>{
        this.ready = true;
        try{ this.player = (typeof yes.getPlayer === 'function') ? yes.getPlayer() : null; }catch(e){ this.player = null; }
      };
      if(typeof yes.onReady === 'function') yes.onReady(finish);
      else finish();
    }catch(e){}
  },
  available(){ return typeof yes !== 'undefined'; },
  submitScore(score){
    if(!this.available()) return;
    const n = Math.floor(Number(score));
    if(!Number.isFinite(n) || n <= 0) return;
    try{ yes.submitScore(n); }catch(e){}
  },
  haptic(style){
    if(!this.available() || typeof yes.haptic !== 'function') return;
    try{ yes.haptic(style || 'medium'); }catch(e){}
  },
  async showRewardedAd(){
    if(!this.available() || typeof yes.showRewardedAd !== 'function') return { rewarded:false, errorCode:'sdk_unavailable' };
    try{ return await yes.showRewardedAd(); }catch(e){ return { rewarded:false, errorCode:'sdk_error' }; }
  },
  async showInterstitialAd(){
    if(!this.available() || typeof yes.showInterstitialAd !== 'function') return { shown:false, errorCode:'sdk_unavailable' };
    try{ return await yes.showInterstitialAd(); }catch(e){ return { shown:false, errorCode:'sdk_error' }; }
  },
  getLanguage(){
    if(!this.available() || typeof yes.getLanguage !== 'function') return 'en';
    try{ return yes.getLanguage() || 'en'; }catch(e){ return 'en'; }
  }
};

// Small global adapters used by the WG Playground bridge.
window.audio = {
  mute:function(){ try{ Sound.mute(); }catch(e){} },
  unmute:function(){ try{ Sound.unmute(); }catch(e){} }
};
window.game = {
  pause:function(){ Game.wgAdPaused = true; },
  resume:function(){ Game.wgAdPaused = false; }
};

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
  grid:'rgba(238,255,63,0.04)',
  wall:'rgba(238,255,63,0.32)',
  player:'#eeff3f',
  playerGlow:'rgba(238,255,63,0.55)',
  enemy:'#ff2d6a',
  enemyGlow:'rgba(255,45,106,0.6)',
  bullet:'#fff6b0',
  bulletGlow:'rgba(255,246,176,0.9)',
  normal:'#3a4a3a',
  normalLine:'#7a8a5c',
  steel:'#8b988a',
  steelLine:'#d9e2d4',
  glass:'rgba(230,255,150,0.12)',
  glassLine:'rgba(230,255,180,0.6)',
  bounceBlk:'#ffb020',
  explosive:'#ff3b3b',
  portal:'#b46bff'
};

/* =========================================================
   BULLET DEFINITIONS
   ========================================================= */
const BULLETS = {
  standard:{ id:'standard', name:'STANDARD', desc:'Balanced classic ricochet projectile.', speedMul:1, core:'#ffe14d', glow:'rgba(255,225,77,0.9)', unlockLevel:1 },
  flash:   { id:'flash',    name:'FLASH',    desc:'10\u00d7 speed with a bright corona streak.', speedMul:10, core:'#ffffff', glow:'rgba(255,255,255,0.95)', unlockLevel:1 },
  split:   { id:'split',    name:'SPLIT',    desc:'Splits into two projectiles after its first ricochet.', speedMul:1, core:'#fff85e', glow:'rgba(255,248,94,0.95)', unlockLevel:6 },
  drill:   { id:'drill',    name:'DRILL',    desc:'Penetrates one obstacle, then flies normally.', speedMul:1.05, core:'#e9e9e9', glow:'rgba(233,233,233,0.9)', unlockLevel:12 },
  freeze:  { id:'freeze',   name:'FREEZE',   desc:'Freezes moving obstacles briefly on impact.', speedMul:0.95, core:'#c9f7ff', glow:'rgba(180,240,255,0.9)', unlockLevel:20 },
  burn:    { id:'burn',     name:'BURN',     desc:'Leaves a short burning trail; fiery impact.', speedMul:1, core:'#ff9a1a', glow:'rgba(255,130,20,0.9)', unlockLevel:30 }
};
const BULLET_ORDER = ['standard','flash','split','drill','freeze','burn'];

/* =========================================================
   UTILITIES
   ========================================================= */
function clamp(v,a,b){ return v<a?a:(v>b?b:v); }
function lerp(a,b,t){ return a+(b-a)*t; }
function dist(x1,y1,x2,y2){ return Math.hypot(x2-x1,y2-y1); }
function rand(a,b){ return a+Math.random()*(b-a); }
function choice(arr){ return arr[Math.floor(Math.random()*arr.length)]; }

function safeGet(key, fallback){
  try{ const v = localStorage.getItem(key); if(v===null) return fallback; return JSON.parse(v); }catch(e){ return fallback; }
}
function safeSet(key, val){ try{ localStorage.setItem(key, JSON.stringify(val)); }catch(e){} }

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
  for(let i=0;i<str.length;i++){ h = Math.imul(h ^ str.charCodeAt(i), 3432918353); h = (h << 13) | (h >>> 19); }
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
  mute(){ this._wgMuted = true; if(this.master) this.master.gain.value = 0; },
  unmute(){ this._wgMuted = false; if(this.master) this.master.gain.value = Settings.sound ? 1 : 0; },
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
  levelStart(){ this.tone(500,0.08,'sine',0.15,760); },
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
  pause(){ this.tone(380,0.08,'sine',0.15,240); },
  resumeSnd(){ this.tone(300,0.08,'sine',0.15,460); },
  nextLevel(){ this.tone(500,0.1,'triangle',0.16,780); },
  // bullet-specific SFX
  shootStandard(){ this.tone(210,0.13,'sawtooth',0.22,80); },
  shootSplit(){ this.tone(240,0.11,'sawtooth',0.22,130); this.tone(360,0.08,'square',0.12,500); },
  splitActivate(){ this.tone(700,0.08,'square',0.2,1400); this.tone(500,0.08,'square',0.16,1000); },
  shootDrill(){ this.tone(140,0.16,'sawtooth',0.24,60); this.noise(0.08,0.1); },
  drillPenetrate(){ this.tone(1200,0.05,'square',0.2,300); this.noise(0.06,0.15); },
  shootFreeze(){ this.tone(1400,0.14,'sine',0.16,2200); },
  freezeImpact(){ this.tone(1800,0.12,'sine',0.18,900); this.noise(0.04,0.06); },
  shootBurn(){ this.tone(180,0.15,'sawtooth',0.22,50); this.noise(0.06,0.08); },
  burnImpact(){ this.noise(0.14,0.2); this.tone(220,0.16,'sawtooth',0.18,60); },
  shootFlash(){ this.tone(2000,0.09,'square',0.22,4000); },
  flashImpact(){ this.noise(0.1,0.22); this.tone(2600,0.08,'square',0.2,600); },
  miss(near){ this.tone(near?260:200,0.14,'sine',0.14,near?150:110); },
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
  YesSDK.haptic('light');
}

/* =========================================================
   SETTINGS / STORAGE
   ========================================================= */
const Settings = Object.assign({ sound:true, music:false, vibration:true, shake:true }, safeGet('ric2_settings', {}));
function saveSettings(){ safeSet('ric2_settings', Settings); Sound.enabled = Settings.sound; }
Sound.enabled = Settings.sound;

const Progress = {
  unlocked: clamp(safeGet('ric2_unlocked', 1), 1, 100000), // highest level number the player may play
  stars: safeGet('ric2_stars', {}),
  best: safeGet('ric2_best', 0),
  challengeCount: safeGet('ric2_challenge_count', 0)
};
function saveProgress(){
  safeSet('ric2_unlocked', Progress.unlocked);
  safeSet('ric2_stars', Progress.stars);
  safeSet('ric2_best', Progress.best);
  safeSet('ric2_challenge_count', Progress.challengeCount);
}
function isLevelUnlocked(num){ return num <= Progress.unlocked; }
function isBulletUnlocked(id){
  const def = BULLETS[id];
  return !!def && Progress.unlocked >= def.unlockLevel;
}

/* =========================================================
   LEVEL DATA
   ========================================================= */
function P(x,y){ return {x,y}; }
function rectObs(x,y,w,h,type){ return {type:type||'normal', x,y,w,h,angle:0}; }
function steelObs(x,y,w,h){ return rectObs(x,y,w,h,'steel'); }
function bounceObs(x,y,w,h){ return rectObs(x,y,w,h,'bounceblk'); }
function glassObs(x,y,w,h){ return {type:'glass', x,y,w,h,angle:0, hp:2}; }
function explosiveObs(x,y,w,h){ return {type:'explosive', x,y,w,h,angle:0, exploded:false, timer:0}; }
function hbarObs(x,y,w,h,range,speed){ return {type:'hbar', baseX:x, x, y, w, h, range, speed, angle:0, frozenTimer:0}; }
function vbarObs(x,y,w,h,range,speed){ return {type:'vbar', x, baseY:y, y, w, h, range, speed, angle:0, frozenTimer:0}; }
function rotbarObs(x,y,len,thick,speed){ return {type:'rotbar', x, y, w:len, h:thick, speed, angle:0, frozenTimer:0}; }
let _portalSeq = 0;
function portalPair(x1,y1,x2,y2){
  const id = _portalSeq++;
  return [ {type:'portalA', x:x1, y:y1, r:18, pairId:id}, {type:'portalB', x:x2, y:y2, r:18, pairId:id} ];
}
function Lvl(player, enemy, obstacles, shots, par, targetMotion){
  return { player, enemy, obstacles: obstacles.flat(), shots, par, targetMotion: targetMotion||null };
}

// Levels 1-30: hand-designed foundation (static targets, escalating obstacle vocabulary)
const BASE_LEVELS = [
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

// Levels 31-100: generated in escalating tiers of 10, structured (not random clutter)
function genLevel(n){
  const rng = mulberry32(1000+n*97);
  const j = (n-31)%10; // 0..9 within tier
  const tier = Math.floor((n-31)/10); // 0..6
  const jitter = (base,amt)=> base + (rng()*2-1)*amt;

  // alternate layout archetype: 0 horizontal, 1 diagonal-down, 2 diagonal-up, 3 vertical-ish
  const archetype = j % 4;
  let player, target;
  if(archetype===0){ player=P(90,250); target=P(710,250); }
  else if(archetype===1){ player=P(90,jitter(120,20)); target=P(710,jitter(400,20)); }
  else if(archetype===2){ player=P(90,jitter(400,20)); target=P(710,jitter(120,20)); }
  else { player=P(jitter(250,40),90); target=P(jitter(550,40),410); }

  const obstacles = [];
  const cols = [230,320,410,500,590];
  function pickY(){ return jitter(250,150); }

  function addObstacle(kind, cx, cy){
    if(kind==='normal') obstacles.push(rectObs(cx,cy,20,rand(160,300)));
    else if(kind==='steel') obstacles.push(steelObs(cx,cy,20,rand(160,300)));
    else if(kind==='bounce') obstacles.push(bounceObs(cx,cy,20,rand(90,150)));
    else if(kind==='glass') obstacles.push(glassObs(cx,cy,20,rand(140,240)));
    else if(kind==='explosive') obstacles.push(explosiveObs(cx,cy,55,55));
    else if(kind==='hbar') obstacles.push(hbarObs(cx,cy,rand(80,120),18,rand(70,120),0.9+rng()*0.8));
    else if(kind==='vbar') obstacles.push(vbarObs(cx,cy,18,rand(80,120),rand(70,120),0.9+rng()*0.8));
    else if(kind==='rotbar') obstacles.push(rotbarObs(cx,cy,rand(120,190),14,(rng()<0.5?-1:1)*(0.9+rng()*0.7)));
  }

  let targetMotion = null;
  let shots, par;

  if(tier===0){ // 31-40: moving target, horizontal, light static obstacles
    const count = 1 + Math.floor(j/4);
    const palette = ['normal','steel','bounce'];
    for(let i=0;i<count;i++) addObstacle(choice2(rng,palette), cols[1+i], pickY());
    targetMotion = { type:'h', range: 60+j*4, speed: 0.7+rng()*0.4 };
    shots = 4; par = 2;
  } else if(tier===1){ // 41-50: moving target vertical/oscillating + glass/explosive
    const count = 2 + Math.floor(j/5);
    const palette = ['normal','glass','explosive','steel'];
    for(let i=0;i<count;i++) addObstacle(choice2(rng,palette), cols[i%cols.length], pickY());
    targetMotion = { type: (j%2===0?'v':'osc'), range: 50+j*5, speed: 0.8+rng()*0.5 };
    shots = 3; par = 2;
  } else if(tier===2){ // 51-60: dense static mazes, static target
    const count = 3 + Math.floor(j/3);
    const palette = ['normal','steel','glass','bounce'];
    for(let i=0;i<count;i++) addObstacle(choice2(rng,palette), cols[i%cols.length], pickY());
    shots = Math.max(2, 3-Math.floor(j/5)); par = 2 + Math.floor(j/6);
  } else if(tier===3){ // 61-70: moving obstacles + static target
    const count = 2 + Math.floor(j/4);
    const palette = ['hbar','vbar','rotbar','steel'];
    for(let i=0;i<count;i++) addObstacle(choice2(rng,palette), cols[i%cols.length], pickY());
    shots = 3; par = 2;
  } else if(tier===4){ // 71-80: moving obstacles + moving target
    const count = 2 + Math.floor(j/5);
    const palette = ['hbar','vbar','rotbar'];
    for(let i=0;i<count;i++) addObstacle(choice2(rng,palette), cols[i%cols.length], pickY());
    targetMotion = { type: (j%3===0?'h':(j%3===1?'v':'osc')), range: 55+j*4, speed: 0.9+rng()*0.5 };
    shots = 3; par = 2;
  } else if(tier===5){ // 81-90: portals + moving elements, dense
    const count = 2 + Math.floor(j/4);
    const palette = ['steel','rotbar','hbar','glass','explosive'];
    obstacles.push(rectObs(400,250,20,rand(280,420)));
    obstacles.push(...portalPair(400, jitter(90,20), 400, jitter(410,20)));
    for(let i=0;i<count;i++) addObstacle(choice2(rng,palette), cols[i%cols.length], pickY());
    if(j%2===0) targetMotion = { type:'h', range: 50+j*3, speed: 0.8+rng()*0.4 };
    shots = Math.max(2, 3-Math.floor(j/6)); par = 2;
  } else { // 91-100: hardest combos
    const count = 4 + Math.floor(j/3);
    const palette = ['steel','rotbar','hbar','vbar','glass','explosive','bounce'];
    for(let i=0;i<count;i++) addObstacle(choice2(rng,palette), cols[i%cols.length], pickY());
    targetMotion = { type: (j%3===0?'osc':(j%3===1?'h':'v')), range: 60+j*4, speed: 1.1+rng()*0.6 };
    shots = j<6 ? 2 : 1; par = 2;
  }

  return Lvl(player, target, obstacles, shots, par, targetMotion);
}
function choice2(rng, arr){ return arr[Math.floor(rng()*arr.length)]; }

const LEVELS = BASE_LEVELS.slice();
for(let n=31;n<=100;n++) LEVELS.push(genLevel(n));

/* =========================================================
   GEOMETRY / PHYSICS HELPERS
   ========================================================= */
function reflect(vx,vy,nx,ny){
  const d = vx*nx + vy*ny;
  return { x: vx - 2*d*nx, y: vy - 2*d*ny };
}

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
    const p = {
      x, y,
      vx: Math.cos(ang)*spd, vy: Math.sin(ang)*spd,
      life: rand(opts.minLife||0.25, opts.maxLife||0.6),
      maxLife: 1,
      color: opts.color || COLORS.bullet,
      size: rand(opts.minSize||1.5, opts.maxSize||3.5),
      friction: opts.friction!=null ? opts.friction : 3,
      shrink: opts.shrink!==false
    };
    p.maxLife = p.life;
    particles.push(p);
  }
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
  floatingTexts.push({x,y,text,color:color||'#fff',size:size||14,life:0.9,maxLife:0.9,vy:-30});
}
function updateFloatingTexts(dt){
  for(let i=floatingTexts.length-1;i>=0;i--){
    const t = floatingTexts[i];
    t.life -= dt;
    if(t.life<=0){ floatingTexts.splice(i,1); continue; }
    t.y += t.vy*dt; t.vy *= 0.96;
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

let screenFlash = 0;
function triggerScreenFlash(amt){ screenFlash = Math.max(screenFlash, amt); }

/* =========================================================
   GAME STATE
   ========================================================= */
const Game = {
  state:'MENU',
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
  aimDir:{x:1,y:0},
  aimPointer:{x:0,y:0},
  timeScale:1,
  slowMoTimer:0,
  slowMoUsedThisShot:false,
  streak:0,
  t:0,
  awaitingResult:false,
  currentBullet:'standard',
  bulletMenuOpen:false,
  wgAdPaused:false
};

function loadLevelObjects(levelData){
  Game.player = { x:levelData.player.x, y:levelData.player.y, recoil:0, aimAngle:0 };
  Game.enemy = {
    x:levelData.enemy.x, y:levelData.enemy.y,
    baseX:levelData.enemy.x, baseY:levelData.enemy.y,
    flash:0, scale:1, pulse:0, destroyed:false,
    motion: levelData.targetMotion || null, frozenTimer:0, phase: rand(0,6.28),
    mockTimer:0, mockDur:0.35, mockNear:false
  };
  Game.obstacles = levelData.obstacles.map(o=>Object.assign({}, o));
  Game.bullets = [];
  Game.shotsLeft = levelData.shots;
  Game.shotsUsed = 0;
  Game.timeScale = 1;
  Game.slowMoTimer = 0;
  Game.slowMoUsedThisShot = false;
  Game.awaitingResult = false;
  Game.isAiming = false;
  particles.length = 0;
  floatingTexts.length = 0;
  screenFlash = 0;
}

function startLevel(index){
  if(index<0 || index>=LEVELS.length) return;
  if(!isLevelUnlocked(index+1)) return; // guard against locked levels
  Game.isChallenge = false;
  Game.levelIndex = index;
  Game.currentLevel = LEVELS[index];
  loadLevelObjects(Game.currentLevel);
  Game.score = 0;
  if(!isBulletUnlocked(Game.currentBullet)) Game.currentBullet = 'standard';
  setState('PLAYING');
  Sound.levelStart();
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
  if(!isBulletUnlocked(Game.currentBullet)) Game.currentBullet = 'standard';
  Progress.challengeCount++;
  saveProgress();
  document.getElementById('challengeSub').textContent = label;
  setState('PLAYING');
  Sound.levelStart();
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
  return { x: (clientX-rect.left)/rect.width*WORLD_W, y: (clientY-rect.top)/rect.height*WORLD_H };
}

function updateAim(clientX, clientY){
  const w = toWorld(clientX, clientY);
  Game.aimPointer = w;
  let dx = w.x - Game.player.x, dy = w.y - Game.player.y;
  const len = Math.hypot(dx,dy);
  if(len > 8){ Game.aimDir = { x: dx/len, y: dy/len }; Game.player.aimAngle = Math.atan2(dy,dx); }
}

function bulletInFlight(){ return Game.bullets.length > 0; }

canvas.addEventListener('pointerdown', (e)=>{
  Sound.init(); Sound.resume();
  if(Game.state !== 'PLAYING' || Game.bulletMenuOpen || Game.awaitingResult || Game.wgAdPaused) return;
  if(bulletInFlight() || Game.shotsLeft<=0 || Game.enemy.destroyed) return;
  Game.isAiming = true;
  updateAim(e.clientX, e.clientY);
  e.preventDefault();
});
window.addEventListener('pointermove', (e)=>{
  if(Game.isAiming && !Game.awaitingResult && !Game.wgAdPaused) updateAim(e.clientX, e.clientY);
});
window.addEventListener('pointerup', (e)=>{
  if(Game.isAiming){
    Game.isAiming = false;
    if(!Game.awaitingResult) fireBullet();
  }
});
canvas.addEventListener('contextmenu', e=>e.preventDefault());

function fireBullet(){
  if(Game.shotsLeft<=0 || bulletInFlight() || Game.state!=='PLAYING' || Game.awaitingResult || Game.enemy.destroyed) return;
  const dir = Game.aimDir;
  const def = BULLETS[Game.currentBullet];
  const startX = Game.player.x + dir.x*(PLAYER_R+BULLET_R+2);
  const startY = Game.player.y + dir.y*(PLAYER_R+BULLET_R+2);
  const speed = BULLET_SPEED*def.speedMul;
  Game.bullets.push({
    x:startX, y:startY, vx:dir.x*speed, vy:dir.y*speed,
    bounces:0, life:BULLET_LIFE, trail:[], dead:false, portalCooldown:0,
    type:Game.currentBullet, splitDone:false, drillUsed:false, drillPassedObstacle:null, spin:0,
    minDistToEnemy:Infinity
  });
  Game.shotsLeft--; Game.shotsUsed++;
  Game.player.recoil = 1;
  switch(Game.currentBullet){
    case 'split': Sound.shootSplit(); break;
    case 'drill': Sound.shootDrill(); break;
    case 'freeze': Sound.shootFreeze(); break;
    case 'burn': Sound.shootBurn(); break;
    case 'flash': Sound.shootFlash(); break;
    default: Sound.shootStandard();
  }
  spawnParticles(startX,startY,10,{angle:Math.atan2(dir.y,dir.x)+Math.PI, color:def.core, minSpd:60,maxSpd:180,minLife:0.15,maxLife:0.3});
  vibrate(10);
  updateHUD();
}

/* =========================================================
   OBSTACLE / TARGET MOTION
   ========================================================= */
function updateObstacles(dt){
  Game.t += dt;
  for(const o of Game.obstacles){
    if(o.frozenTimer && o.frozenTimer>0){ o.frozenTimer -= dt; continue; }
    if(o.type==='hbar'){ o.x = o.baseX + Math.sin(Game.t*o.speed)*o.range; }
    else if(o.type==='vbar'){ o.y = o.baseY + Math.sin(Game.t*o.speed)*o.range; }
    else if(o.type==='rotbar'){ o.angle += o.speed*dt; }
    else if(o.type==='explosive' && o.exploded){
      o.timer -= dt;
      if(o.timer<=0){ o.remove = true; triggerExplosion(o); }
    }
  }
  if(Game.obstacles.some(o=>o.remove)) Game.obstacles = Game.obstacles.filter(o=>!o.remove);
}

function updateEnemyMock(dt){
  const e = Game.enemy;
  if(e.mockTimer>0){ e.mockTimer -= dt; if(e.mockTimer<0) e.mockTimer=0; }
}

function updateTarget(dt){
  const e = Game.enemy;
  if(!e.motion || e.destroyed) return;
  if(e.frozenTimer>0){ e.frozenTimer -= dt; return; }
  const m = e.motion;
  if(m.type==='h') e.x = e.baseX + Math.sin(Game.t*m.speed)*m.range;
  else if(m.type==='v') e.y = e.baseY + Math.sin(Game.t*m.speed)*m.range;
  else if(m.type==='osc'){
    e.x = e.baseX + Math.sin(Game.t*m.speed)*m.range;
    e.y = e.baseY + Math.cos(Game.t*m.speed*0.7)*m.range*0.55;
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
    triggerEnemyMock(b.minDistToEnemy);
    if(!bulletInFlight() && Game.shotsLeft<=0 && Game.state==='PLAYING'){
      setTimeout(()=>{ if(Game.state==='PLAYING') triggerGameOver(); }, 260);
    }
  }
}

/* Target "mocking" reaction when a shot misses */
const MOCK_TEXTS_NEAR = ['SO CLOSE!','WHIFF!','ALMOST!','NICE TRY!'];
const MOCK_TEXTS_FAR = ['MISS!','TOO SLOW','NOPE','MISSED'];
function triggerEnemyMock(minDist){
  const e = Game.enemy;
  if(e.destroyed) return;
  const near = Number.isFinite(minDist) && minDist < 55;
  e.mockDur = near ? 0.5 : 0.32;
  e.mockTimer = e.mockDur;
  e.mockNear = near;
  const text = near ? choice(MOCK_TEXTS_NEAR) : choice(MOCK_TEXTS_FAR);
  spawnFloatingText(e.x, e.y-32, text, near?COLORS.amber:'#b9b9a2', near?15:12);
  if(near){ screenShake(4,0.12); vibrate([8,8]); }
  Sound.miss(near);
}

function trySplit(b){
  if(b.type!=='split' || b.splitDone) return;
  b.splitDone = true;
  const speed = Math.hypot(b.vx,b.vy);
  const baseAng = Math.atan2(b.vy,b.vx);
  const spread = 0.34;
  const a1 = baseAng - spread, a2 = baseAng + spread;
  b.vx = Math.cos(a1)*speed; b.vy = Math.sin(a1)*speed;
  const clone = {
    x:b.x, y:b.y, vx:Math.cos(a2)*speed, vy:Math.sin(a2)*speed,
    bounces:b.bounces, life:b.life, trail:[], dead:false, portalCooldown:0,
    type:'split', splitDone:true, drillUsed:true, drillPassedObstacle:null, spin:0,
    minDistToEnemy:b.minDistToEnemy
  };
  Game.bullets.push(clone);
  spawnParticles(b.x,b.y,14,{color:BULLETS.split.core, minSpd:80,maxSpd:240,minLife:0.2,maxLife:0.4});
  screenShake(6,0.15);
  Sound.splitActivate();
  vibrate([10,10,10]);
}

function updateBullets(dt){
  for(let bi=Game.bullets.length-1; bi>=0; bi--){
    const b = Game.bullets[bi];
    if(b.dead) continue;
    const sub = b.type==='flash' ? 24 : 4;
    const sdt = dt/sub;
    for(let s=0; s<sub; s++){
      b.x += b.vx*sdt; b.y += b.vy*sdt;
      b.trail.push({x:b.x,y:b.y});
      const trailMax = b.type==='flash' ? TRAIL_MAX+14 : TRAIL_MAX;
      if(b.trail.length>trailMax) b.trail.shift();
      if(b.portalCooldown>0) b.portalCooldown -= sdt;
      if(b.type==='burn' && Math.random()<0.5){
        spawnParticles(b.x,b.y,1,{color:choice(['#ff9a1a','#ffb020','#ff5a1a']),minSpd:5,maxSpd:30,minLife:0.15,maxLife:0.3,minSize:1.5,maxSize:3,friction:6});
      }

      // arena walls
      let bounced = false;
      if(b.x - BULLET_R < 0){ b.x = BULLET_R; b.vx = Math.abs(b.vx); bounced=true; }
      else if(b.x + BULLET_R > WORLD_W){ b.x = WORLD_W-BULLET_R; b.vx = -Math.abs(b.vx); bounced=true; }
      if(b.y - BULLET_R < 0){ b.y = BULLET_R; b.vy = Math.abs(b.vy); bounced=true; }
      else if(b.y + BULLET_R > WORLD_H){ b.y = WORLD_H-BULLET_R; b.vy = -Math.abs(b.vy); bounced=true; }
      if(bounced){ onBounce(b, b.x, b.y, null); trySplit(b); }
      if(b.dead) break;

      // obstacles
      for(const o of Game.obstacles){
        if(o.type==='portalA' || o.type==='portalB') continue;
        if(b.type==='drill' && b.drillPassedObstacle===o) continue;
        const col = circleObbCollision(b.x,b.y,BULLET_R,o);
        if(col){
          const isDrillPen = (b.type==='drill' && !b.drillUsed && o.type!=='glass');
          if(isDrillPen){
            b.drillUsed = true;
            b.drillPassedObstacle = o;
            const spd = Math.hypot(b.vx,b.vy)||1;
            b.x += (b.vx/spd) * (col.penetration + BULLET_R + 3);
            b.y += (b.vy/spd) * (col.penetration + BULLET_R + 3);
            spawnParticles(b.x,b.y,10,{color:BULLETS.drill.core,minSpd:60,maxSpd:200,minLife:0.15,maxLife:0.3});
            Sound.drillPenetrate();
            screenShake(5,0.1);
            vibrate(8);
          } else {
            b.x += col.nx*col.penetration;
            b.y += col.ny*col.penetration;
            handleObstacleHit(b, o, col);
            if(!b.dead){
              trySplit(b);
              if(b.type==='freeze' && (o.type==='hbar'||o.type==='vbar'||o.type==='rotbar')){
                o.frozenTimer = 1.8;
                spawnParticles(o.x,o.y,14,{color:BULLETS.freeze.core,minSpd:40,maxSpd:140,minLife:0.25,maxLife:0.5});
                Sound.freezeImpact();
              }
              if(b.type==='burn'){
                spawnParticles(b.x,b.y,7,{color:BULLETS.burn.core,minSpd:60,maxSpd:180,minLife:0.15,maxLife:0.3});
              }
            }
            if(b.dead) break;
          }
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
              const spd = Math.hypot(b.vx,b.vy)||1;
              b.x = pair.x + (b.vx/spd)*(pair.r+6);
              b.y = pair.y + (b.vy/spd)*(pair.r+6);
              b.portalCooldown = 0.15;
              Sound.portal();
            }
            break;
          }
        }
      }

      // target
      if(!Game.enemy.destroyed){
        const dE = dist(b.x,b.y,Game.enemy.x,Game.enemy.y);
        if(dE < b.minDistToEnemy) b.minDistToEnemy = dE;
        if(dE < BULLET_R+ENEMY_R){
          onEnemyHit(b);
          break;
        }
        // slow-mo trigger near target
        if(!Game.slowMoUsedThisShot && dE < 70){
          Game.timeScale = 0.28; Game.slowMoTimer = 0.22; Game.slowMoUsedThisShot = true;
        }
      }
      if(b.dead) break;
    }
    if(!b.dead){
      b.spin += dt*22;
      b.life -= dt;
      if(b.life<=0 || b.bounces>MAX_BOUNCES){
        spawnParticles(b.x,b.y,6,{color:BULLETS[b.type].core,minSpd:20,maxSpd:60,minLife:0.2,maxLife:0.35});
        killBullet(b,false);
      }
    }
  }
}

function onBounce(b, x, y, obstacleType){
  b.bounces++;
  const def = BULLETS[b.type];
  spawnParticles(x,y,9,{color: obstacleType==='steel'?COLORS.steel: (obstacleType==='bounceblk'?COLORS.bounceBlk:def.core), minSpd:60,maxSpd:220,minLife:0.15,maxLife:0.35});
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
      spawnParticles(b.x,b.y,16,{color:'#e0ffb0',minSpd:70,maxSpd:260,minLife:0.2,maxLife:0.45,minSize:1,maxSize:2.5});
      Sound.glassBreak();
      screenShake(6,0.15);
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
  const maxSpd = BULLET_SPEED*Math.max(1.6, BULLETS[b.type].speedMul*1.6);
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
  const btype = b.type;
  killBullet(b, true);
  Game.bullets.length = 0; // clear any surviving split sibling

  let gained = scoreForBounces(bounces);
  const perfect = Game.shotsUsed===1;
  if(perfect) gained += 1000;
  Game.score += gained;

  const burstColor = btype==='freeze' ? BULLETS.freeze.core : (btype==='burn' ? BULLETS.burn.core : COLORS.enemy);
  spawnParticles(Game.enemy.x,Game.enemy.y,40,{color:burstColor,minSpd:80,maxSpd:340,minLife:0.35,maxLife:0.75,minSize:2,maxSize:5});
  screenShake(14,0.4);
  if(btype==='flash'){ Sound.flashImpact(); triggerScreenFlash(0.38); }
  else if(btype==='burn'){ Sound.burnImpact(); }
  else if(btype==='freeze'){ Sound.freezeImpact(); }
  else Sound.enemyHit();
  vibrate([20,30,50]);
  YesSDK.haptic('success');

  spawnFloatingText(Game.enemy.x, Game.enemy.y-30, '+'+gained, '#ffe14d', 18);
  const combo = comboMessage(bounces);
  if(combo) spawnFloatingText(Game.enemy.x, Game.enemy.y-52, combo, COLORS.enemy, 13);
  if(perfect) spawnFloatingText(Game.enemy.x, Game.enemy.y-72, 'PERFECT SHOT!', COLORS.amber, 13);

  Game.timeScale = 0.15; Game.slowMoTimer = 0.35;

  Progress.best += gained;
  saveProgress();

  Game.awaitingResult = true;
  setTimeout(()=>{ Game.timeScale = 1; finishLevel(bounces); }, 950);
}

function triggerGameOver(){
  Sound.gameOver();
  Game.streak = 0;
  document.getElementById('loseScore').textContent = Game.score;
  YesSDK.submitScore(Game.score);
  YesSDK.haptic('error');
  setState('GAME_OVER');
}

function finishLevel(bounces){
  const lvl = Game.currentLevel;
  let stars = 1;
  if(Game.shotsUsed <= lvl.par) stars = 3;
  else if(Game.shotsUsed <= lvl.par+1) stars = 2;

  let newlyUnlockedBullet = null;
  if(!Game.isChallenge){
    const num = Game.levelIndex+1;
    const prevStars = Progress.stars[num] || 0;
    Progress.stars[num] = Math.max(prevStars, stars);
    Game.streak++;
    if(Progress.unlocked < num+1){
      Progress.unlocked = num+1;
      // did this unlock a new bullet?
      for(const id of BULLET_ORDER){
        if(BULLETS[id].unlockLevel === Progress.unlocked){ newlyUnlockedBullet = BULLETS[id]; break; }
      }
    }
    saveProgress();
  }

  document.getElementById('winStars').textContent = '★'.repeat(stars) + '☆'.repeat(3-stars);
  document.getElementById('winScore').textContent = Game.score;
  document.getElementById('winBounces').textContent = bounces;
  document.getElementById('winShots').textContent = Game.shotsUsed;
  const unlockRow = document.getElementById('winUnlockRow');
  if(newlyUnlockedBullet){
    unlockRow.style.display = 'flex';
    unlockRow.innerHTML = `<span class="swatch" style="background:${newlyUnlockedBullet.core};box-shadow:0 0 8px ${newlyUnlockedBullet.core};"></span><span>NEW BULLET: ${newlyUnlockedBullet.name}</span>`;
  } else {
    unlockRow.style.display = 'none';
    unlockRow.innerHTML = '';
  }
  YesSDK.submitScore(Game.score);
  YesSDK.haptic('success');

  // WG Playground: pause at the natural level-complete point, mute audio,
  // show the platform midroll, then resume into the win screen when it closes.
  function resumeGame(){
    try { window.game.resume(); } catch(e) { Game.wgAdPaused = false; }
    try { window.audio.unmute(); } catch(e) {}
    try { Sound.resume(); } catch(e) {}
    try { Sound.levelComplete(); } catch(e) {}
    setState('WIN');
  }
  if(window.WGPlayground && window.WGPlayground.showMidroll){
    try { window.game.pause(); } catch(e) { Game.wgAdPaused = true; }
    try { Sound.pause(); } catch(e) {}
    try { window.audio.mute(); } catch(e) {}
    var shown = window.WGPlayground.showMidroll(resumeGame);
    if(!shown) resumeGame();
  } else {
    resumeGame();
  }
}

/* =========================================================
   RENDER
   ========================================================= */
function drawGrid(){
  ctx.fillStyle = '#07070a';
  ctx.fillRect(0,0,WORLD_W,WORLD_H);
  ctx.strokeStyle = COLORS.grid;
  ctx.lineWidth = 1;
  const step = 40;
  for(let x=0;x<=WORLD_W;x+=step){ ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,WORLD_H); ctx.stroke(); }
  for(let y=0;y<=WORLD_H;y+=step){ ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(WORLD_W,y); ctx.stroke(); }
  const g = ctx.createRadialGradient(WORLD_W/2,WORLD_H/2,WORLD_H*0.25,WORLD_W/2,WORLD_H/2,WORLD_H*0.9);
  g.addColorStop(0,'rgba(0,0,0,0)');
  g.addColorStop(1,'rgba(0,0,0,0.55)');
  ctx.fillStyle = g;
  ctx.fillRect(0,0,WORLD_W,WORLD_H);
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
    const frozen = o.frozenTimer && o.frozenTimer>0;
    if(o.type==='normal' || o.type==='hbar' || o.type==='vbar'){
      drawObb(o, frozen?'rgba(180,240,255,0.35)':'rgba(58,74,58,0.55)', frozen?'#c9f7ff':COLORS.normalLine, frozen?'rgba(180,240,255,0.6)':'rgba(122,138,92,0.4)');
    } else if(o.type==='steel'){
      drawObb(o, 'rgba(139,152,138,0.5)', COLORS.steelLine, 'rgba(217,234,212,0.35)');
    } else if(o.type==='bounceblk'){
      drawObb(o, 'rgba(255,176,32,0.28)', COLORS.bounceBlk, 'rgba(255,176,32,0.6)');
    } else if(o.type==='rotbar'){
      drawObb(o, frozen?'rgba(180,240,255,0.4)':'rgba(139,152,138,0.55)', frozen?'#e5fbff':'#e8f4e8', frozen?'rgba(180,240,255,0.6)':'rgba(210,240,210,0.55)');
    } else if(o.type==='glass'){
      ctx.save();
      ctx.translate(o.x,o.y); ctx.rotate(o.angle||0);
      ctx.fillStyle = COLORS.glass;
      ctx.strokeStyle = COLORS.glassLine;
      ctx.lineWidth = 1.5;
      ctx.shadowColor = 'rgba(220,255,180,0.5)'; ctx.shadowBlur = 10;
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
  ctx.beginPath(); ctx.ellipse(0,PLAYER_R+4,PLAYER_R*0.8,4,0,0,Math.PI*2);
  ctx.fillStyle='rgba(0,0,0,0.4)'; ctx.fill();
  ctx.shadowColor = COLORS.playerGlow; ctx.shadowBlur = 18;
  ctx.fillStyle = COLORS.player;
  ctx.beginPath(); ctx.arc(0,0,PLAYER_R - p.recoil*2,0,Math.PI*2); ctx.fill();
  ctx.shadowBlur=0;
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
  const scale = e.destroyed ? 1 + (1-e.flash)*1.35 : 1 + Math.sin(e.pulse)*0.06;
  const alpha = e.destroyed ? e.flash : 1;

  // mocking wiggle when a shot misses
  let mockOX = 0, mockRot = 0, mockScaleX = 1;
  if(!e.destroyed && e.mockTimer>0){
    const p = e.mockTimer/e.mockDur; // 1 -> 0
    const amp = e.mockNear ? 8 : 3.5;
    const freq = e.mockNear ? 46 : 30;
    mockOX = Math.sin(Game.t*freq)*amp*p;
    mockRot = Math.sin(Game.t*freq*1.4)*(e.mockNear?0.45:0.18)*p;
    mockScaleX = 1 + Math.sin(Game.t*freq*2)*0.08*p;
  }

  ctx.save();
  ctx.translate(e.x+mockOX,e.y);
  ctx.rotate(e.pulse*0.3 + mockRot);
  ctx.scale(mockScaleX,1);
  ctx.globalAlpha = alpha;
  ctx.shadowColor = e.flash>0.5 ? '#fff' : (e.mockTimer>0 && e.mockNear ? COLORS.amber : COLORS.enemyGlow);
  ctx.shadowBlur = 20;
  ctx.fillStyle = e.flash>0.5 ? '#fff' : COLORS.enemy;
  const r = ENEMY_R*scale;
  ctx.beginPath();
  ctx.moveTo(0,-r); ctx.lineTo(r*0.72,0); ctx.lineTo(0,r); ctx.lineTo(-r*0.72,0); ctx.closePath();
  ctx.fill();
  ctx.restore();
  ctx.globalAlpha = 1; ctx.shadowBlur = 0;
  if(e.motion && !e.destroyed){
    ctx.save();
    ctx.globalAlpha = 0.35;
    ctx.strokeStyle = COLORS.enemy;
    ctx.lineWidth = 1;
    ctx.setLineDash([3,4]);
    ctx.beginPath();
    if(e.motion.type==='h') ctx.moveTo(e.baseX-e.motion.range, e.baseY), ctx.lineTo(e.baseX+e.motion.range, e.baseY);
    else if(e.motion.type==='v') ctx.moveTo(e.baseX, e.baseY-e.motion.range), ctx.lineTo(e.baseX, e.baseY+e.motion.range);
    else ctx.ellipse(e.baseX, e.baseY, e.motion.range, e.motion.range*0.55, 0, 0, Math.PI*2);
    ctx.stroke();
    ctx.restore();
  }
}

function drawBulletShape(b){
  const def = BULLETS[b.type];
  ctx.save();
  if(b.type==='standard'){
    ctx.shadowColor = def.glow; ctx.shadowBlur = 14;
    ctx.fillStyle = def.core;
    ctx.beginPath(); ctx.arc(b.x,b.y,BULLET_R,0,Math.PI*2); ctx.fill();
  } else if(b.type==='split'){
    ctx.shadowColor = def.glow; ctx.shadowBlur = 16;
    ctx.fillStyle = def.core;
    ctx.beginPath(); ctx.arc(b.x,b.y,BULLET_R,0,Math.PI*2); ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,0.6)'; ctx.lineWidth=1.2;
    ctx.beginPath(); ctx.arc(b.x,b.y,BULLET_R+3,0,Math.PI*2); ctx.stroke();
  } else if(b.type==='drill'){
    ctx.translate(b.x,b.y); ctx.rotate(b.spin||0);
    ctx.shadowColor = def.glow; ctx.shadowBlur = 12;
    ctx.fillStyle = def.core;
    ctx.beginPath();
    ctx.moveTo(BULLET_R+3,0); ctx.lineTo(-BULLET_R,BULLET_R*0.8); ctx.lineTo(-BULLET_R*0.4,0); ctx.lineTo(-BULLET_R,-BULLET_R*0.8); ctx.closePath();
    ctx.fill();
  } else if(b.type==='freeze'){
    ctx.shadowColor = def.glow; ctx.shadowBlur = 14;
    ctx.fillStyle = def.core;
    ctx.beginPath(); ctx.arc(b.x,b.y,BULLET_R,0,Math.PI*2); ctx.fill();
    ctx.strokeStyle = '#ffffff'; ctx.lineWidth = 1;
    for(let a=0;a<3;a++){
      const ang = a*Math.PI/3 + (b.spin||0)*0.3;
      ctx.beginPath();
      ctx.moveTo(b.x-Math.cos(ang)*(BULLET_R+4), b.y-Math.sin(ang)*(BULLET_R+4));
      ctx.lineTo(b.x+Math.cos(ang)*(BULLET_R+4), b.y+Math.sin(ang)*(BULLET_R+4));
      ctx.stroke();
    }
  } else if(b.type==='burn'){
    const flick = 0.8+Math.sin((b.spin||0)*4)*0.2;
    ctx.shadowColor = def.glow; ctx.shadowBlur = 16*flick;
    ctx.fillStyle = def.core;
    ctx.beginPath(); ctx.arc(b.x,b.y,BULLET_R*flick,0,Math.PI*2); ctx.fill();
  } else if(b.type==='flash'){
    const spd = Math.hypot(b.vx,b.vy)||1;
    const ux = b.vx/spd, uy = b.vy/spd;
    const len = 26;
    ctx.shadowColor = def.glow; ctx.shadowBlur = 22;
    const grad = ctx.createLinearGradient(b.x-ux*len,b.y-uy*len,b.x,b.y);
    grad.addColorStop(0,'rgba(255,255,255,0)');
    grad.addColorStop(1,'rgba(255,255,255,0.95)');
    ctx.strokeStyle = grad;
    ctx.lineWidth = BULLET_R*1.6;
    ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(b.x-ux*len,b.y-uy*len); ctx.lineTo(b.x,b.y); ctx.stroke();
    ctx.fillStyle = '#ffffff';
    ctx.beginPath(); ctx.arc(b.x,b.y,BULLET_R*1.1,0,Math.PI*2); ctx.fill();
  }
  ctx.restore();
}

function drawBullets(){
  for(const b of Game.bullets){
    const def = BULLETS[b.type];
    for(let i=0;i<b.trail.length;i++){
      const t = b.trail[i];
      const a = (i/b.trail.length);
      ctx.globalAlpha = a*0.55;
      ctx.fillStyle = def.core;
      ctx.beginPath(); ctx.arc(t.x,t.y, BULLET_R*a*0.85,0,Math.PI*2); ctx.fill();
    }
    ctx.globalAlpha = 1;
    drawBulletShape(b);
    ctx.shadowBlur = 0;
  }
}

function simulateTrajectoryPreview(){
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
        break;
      }
    }
    if(hitObstacle) break;
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
    ctx.strokeStyle = `rgba(238,255,63,${a})`;
    ctx.shadowColor = 'rgba(238,255,63,0.6)'; ctx.shadowBlur = 6;
    ctx.beginPath();
    ctx.moveTo(pts[i-1].x,pts[i-1].y);
    ctx.lineTo(pts[i].x,pts[i].y);
    ctx.stroke();
  }
  ctx.restore();
  ctx.shadowBlur = 0;
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
  if(screenFlash>0){
    ctx.save();
    ctx.globalAlpha = clamp(screenFlash,0,1);
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0,0,WORLD_W,WORLD_H);
    ctx.restore();
    screenFlash -= 0.05;
  }
}

/* =========================================================
   MAIN LOOP
   ========================================================= */
let lastT = performance.now();
function loop(now){
  let dt = (now-lastT)/1000;
  lastT = now;
  dt = Math.min(dt, 0.05);

  if(Game.state==='PLAYING' && !Game.bulletMenuOpen && !Game.wgAdPaused){
    const scaledDt = dt*Game.timeScale;
    updateObstacles(scaledDt);
    updateTarget(scaledDt);
    updateEnemyMock(dt);
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
    Sound.nextLevel();
    YesSDK.haptic('success');

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
  const def = BULLETS[Game.currentBullet];
  document.getElementById('bulletBtnLabel').textContent = def.name;
  const sw = document.getElementById('bulletSwatch');
  sw.style.background = def.core; sw.style.color = def.core;
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
  const sub = document.getElementById('levelSelectSub');
  if(sub) sub.textContent = `${LEVELS.length} LEVELS · ${Math.min(Progress.unlocked,LEVELS.length)} UNLOCKED`;
  for(let i=0;i<LEVELS.length;i++){
    const num = i+1;
    const unlocked = isLevelUnlocked(num);
    const tile = document.createElement('div');
    tile.className = 'level-tile' + (unlocked ? '' : ' locked');
    if(unlocked){
      const stars = Progress.stars[num] || 0;
      tile.innerHTML = `<div>${String(num).padStart(2,'0')}</div><div class="stars">${'&#9733;'.repeat(stars)}${'&#9734;'.repeat(3-stars)}</div>`;
      tile.addEventListener('click', ()=>{ Sound.click(); startLevel(i); });
    } else {
      tile.innerHTML = `<div>${String(num).padStart(2,'0')}</div><div class="lock-icon">&#128274;</div>`;
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
  if(Game.state==='PLAYING'){ Sound.pause(); setState('PAUSED'); }
});

/* Bullet select popup */
function buildBulletList(){
  const list = document.getElementById('bulletList');
  list.innerHTML = '';
  BULLET_ORDER.forEach(id=>{
    const def = BULLETS[id];
    const unlocked = isBulletUnlocked(id);
    const row = document.createElement('div');
    row.className = 'bullet-item' + (id===Game.currentBullet ? ' active' : '') + (unlocked ? '' : ' locked');
    if(unlocked){
      row.innerHTML = `<div class="bullet-icon" style="background:${def.core}; color:${def.core};"></div>
        <div class="bullet-info"><b>${def.name}</b><span>${def.desc}</span></div>`;
      row.addEventListener('click', ()=>{
        Game.currentBullet = id;
        Sound.click();
        updateHUD();
        closeBulletPopup();
      });
    } else {
      row.innerHTML = `<div class="bullet-icon" style="background:#333; color:#333;"></div>
        <div class="bullet-info"><b>${def.name}</b><span class="lock-note">&#128274; UNLOCKS AT LEVEL ${def.unlockLevel}</span></div>`;
    }
    list.appendChild(row);
  });
}
function openBulletPopup(){
  buildBulletList();
  Game.bulletMenuOpen = true;
  document.getElementById('bulletPopup').classList.add('active');
}
function closeBulletPopup(){
  Game.bulletMenuOpen = false;
  document.getElementById('bulletPopup').classList.remove('active');
}
document.getElementById('bulletBtn').addEventListener('click', ()=>{
  if(Game.state!=='PLAYING') return;
  Sound.click();
  openBulletPopup();
});
document.getElementById('bulletPopupClose').addEventListener('click', ()=>{ Sound.click(); closeBulletPopup(); });

document.getElementById('watchAdBtn').addEventListener('click', async ()=>{
  if(Game.state!=='GAME_OVER') return;
  const btn = document.getElementById('watchAdBtn');
  const originalText = btn.textContent;
  btn.disabled = true;
  btn.textContent = 'LOADING AD...';
  const result = await YesSDK.showRewardedAd();
  if(result && result.rewarded){
    Game.shotsLeft = 2;
    Game.awaitingResult = false;
    Game.bullets = [];
    Game.timeScale = 1;
    Game.slowMoTimer = 0;
    Game.slowMoUsedThisShot = false;
    YesSDK.haptic('success');
    setState('PLAYING');
    updateHUD();
    showHintToast('SECOND CHANCE · +2 SHOTS');
  }else{
    btn.disabled = false;
    btn.textContent = originalText;
    if(result && result.errorCode === 'sdk_unavailable') showHintToast('YES SDK NOT AVAILABLE');
    else showHintToast('AD NOT AVAILABLE');
  }
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
    case 'playGame': {
      const continueIndex = clamp(Progress.unlocked-1, 0, LEVELS.length-1);
      startLevel(continueIndex);
      break;
    }
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
      Sound.resumeSnd();
      setState('PLAYING');
      break;
    case 'restartLevel':
      if(Game.isChallenge){ loadLevelObjects(Game.currentLevel); Game.score=0; }
      else { loadLevelObjects(LEVELS[Game.levelIndex]); Game.score=0; }
      setState('PLAYING');
      updateHUD();
      break;
    case 'nextLevel':
      if(Game.isChallenge){ setState('MENU'); break; }
      if(Game.levelIndex+1 < LEVELS.length){
        await YesSDK.showInterstitialAd();
        await showLevelTransition(Game.levelIndex + 2, Progress.stars[Game.levelIndex+1] || 1);
        startLevel(Game.levelIndex+1);
      }else{
        await YesSDK.showInterstitialAd();
        setState('MENU');
      }
      break;
  }
}

/* =========================================================
   INTRO
   ========================================================= */
function spawnIntroParticles(){
  const wrap = document.getElementById('introParticles');
  wrap.innerHTML = '';
  for(let i=0;i<18;i++){
    const dot = document.createElement('div');
    dot.className = 'ip';
    dot.style.left = rand(5,95)+'%';
    dot.style.top = rand(20,90)+'%';
    dot.style.animationDelay = rand(0,2.4)+'s';
    dot.style.animationDuration = rand(2.4,3.8)+'s';
    wrap.appendChild(dot);
  }
}

function runIntro(){
  const intro = document.getElementById('intro');
  const title = document.getElementById('introTitle');
  const two = document.getElementById('introTwo');
  const tagline = document.getElementById('introTagline');
  let done = false;
  spawnIntroParticles();

  function finish(){
    if(done) return;
    done = true;
    intro.style.transition = 'opacity .3s ease';
    intro.style.opacity = '0';
    setTimeout(()=>{
      intro.style.display = 'none';
      document.getElementById('bestScore').textContent = String(Progress.best);
      setState('MENU');
    }, 300);
  }

  requestAnimationFrame(()=>{
    title.style.transition = 'opacity .35s ease, transform .35s ease';
    title.style.opacity = '1';
  });
  setTimeout(()=>{
    two.style.transition = 'opacity .3s ease, transform .3s cubic-bezier(.34,1.56,.64,1)';
    two.style.opacity = '1';
    two.style.transform = 'scale(1)';
  }, 420);
  setTimeout(()=>{
    tagline.style.transition = 'opacity .4s ease';
    tagline.style.opacity = '1';
  }, 1000);

  intro.addEventListener('click', finish);
  intro.addEventListener('touchstart', finish, {passive:true});
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
    hctx.fillStyle = '#0a0a08'; hctx.fillRect(0,0,hc.width,hc.height);
    hctx.strokeStyle = 'rgba(238,255,63,0.3)'; hctx.strokeRect(2,2,hc.width-4,hc.height-4);
    hctx.shadowColor = '#eeff3f'; hctx.shadowBlur = 10;
    hctx.fillStyle = '#eeff3f';
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
  YesSDK.init();
  resize();
  refreshToggles();
  requestAnimationFrame(loop);
  runIntro();
}
window.addEventListener('load', init);

})();
