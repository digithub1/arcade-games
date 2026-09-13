!function(e,t){a=e.createElement("script"),m=e.getElementsByTagName("script")[0],a.async=1,a.src=t,m.parentNode.insertBefore(a,m)}(document,"https://universal.wgplayer.com/tag/?lh="+window.location.hostname+"&wp="+window.location.pathname+"&ws="+window.location.search);

// WGPlayground / WGPlayer HTML5 SDK integration.
// WGPlayground's official JavaScript guide uses the WGPlayer Universal Tag.
function wgPlaygroundMidroll(done){
  try{
    var loader = window.preroll && window.preroll.config && window.preroll.config.loaderObjectName;
    var api = loader && window[loader];
    if(api && typeof api.refetchAd === 'function'){
      api.refetchAd(function(){ if(typeof done === 'function') done(); });
      return true;
    }
  }catch(e){}
  if(typeof done === 'function') done();
  return false;
}

(function(){
"use strict";

/* ============================= SETUP ============================= */
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const W = 450, H = 750; // internal resolution
canvas.width = W; canvas.height = H;

const introScreen = document.getElementById('introScreen');
const startScreen = document.getElementById('startScreen');
const gameOverScreen = document.getElementById('gameOverScreen');
const pauseScreen = document.getElementById('pauseScreen');
const scoreVal = document.getElementById('scoreVal');
const bestVal = document.getElementById('bestVal');
const heartsEl = document.getElementById('hearts');
const chargeLabel = document.getElementById('chargeLabel');
const formBadge = document.getElementById('formBadge');
const comboMsg = document.getElementById('comboMsg');
const pauseBtn = document.getElementById('pauseBtn');

let BEST = 0;
try {
  const saved = localStorage.getItem('suck-my-bloodihh-best');
  if (saved !== null) {
    BEST = parseInt(saved, 10) || 0;
    bestVal.textContent = pad(BEST);
  }
} catch (e) {}

function saveBest(v) {
  try { localStorage.setItem('suck-my-bloodihh-best', String(v)); } catch (e) {}
}

function pad(n){ return String(Math.max(0,Math.floor(n))).padStart(3,'0'); }

/* ============================= AUDIO ============================= */
let audioCtx = null, muted = false;
function ac(){
  if(!audioCtx){ try{ audioCtx = new (window.AudioContext||window.webkitAudioContext)(); }catch(e){} }
  return audioCtx;
}
function tone(freq, dur, type, vol, slideTo){
  if(muted) return;
  const a = ac(); if(!a) return;
  const t0 = a.currentTime;
  const osc = a.createOscillator();
  const gain = a.createGain();
  osc.type = type||'square';
  osc.frequency.setValueAtTime(freq, t0);
  if(slideTo) osc.frequency.exponentialRampToValueAtTime(Math.max(20,slideTo), t0+dur);
  gain.gain.setValueAtTime((vol!==undefined?vol:0.15), t0);
  gain.gain.exponentialRampToValueAtTime(0.001, t0+dur);
  osc.connect(gain); gain.connect(a.destination);
  osc.start(t0); osc.stop(t0+dur);
}
function noiseBurst(dur, vol){
  if(muted) return;
  const a = ac(); if(!a) return;
  const bufferSize = a.sampleRate * dur;
  const buffer = a.createBuffer(1, bufferSize, a.sampleRate);
  const data = buffer.getChannelData(0);
  for(let i=0;i<bufferSize;i++) data[i] = (Math.random()*2-1) * (1 - i/bufferSize);
  const src = a.createBufferSource();
  src.buffer = buffer;
  const gain = a.createGain();
  gain.gain.setValueAtTime(vol!==undefined?vol:0.2, a.currentTime);
  src.connect(gain); gain.connect(a.destination);
  src.start();
}
const SFX = {
  boost: ()=>tone(520,0.09,'square',0.09,760),
  blood: ()=>tone(880,0.08,'sine',0.14,1200),
  heart: ()=>{tone(660,0.08,'sine',0.16,880); setTimeout(()=>tone(990,0.1,'sine',0.16),70);},
  hit: ()=>{ noiseBurst(0.15,0.22); tone(140,0.2,'sawtooth',0.15,60); },
  shield: ()=>tone(1200,0.15,'sine',0.15,1800),
  death: ()=>{ tone(300,0.35,'sawtooth',0.18,60); },
  levelup: ()=>{ tone(523,0.1,'square',0.15,0); setTimeout(()=>tone(659,0.1,'square',0.15),90); setTimeout(()=>tone(784,0.18,'square',0.15),180); },
  combo: ()=>{ tone(700,0.07,'square',0.12,0); setTimeout(()=>tone(1000,0.09,'square',0.13),60); },
  warn: ()=>tone(220,0.12,'square',0.12,180),
  zap: ()=>{ noiseBurst(0.1,0.15); tone(1600,0.08,'square',0.12,300); },
  power: ()=>{ tone(740,0.08,'sine',0.13,1100); setTimeout(()=>tone(1100,0.12,'sine',0.13,1480),70); },
  magnet: ()=>{ tone(420,0.08,'triangle',0.12,780); setTimeout(()=>tone(780,0.12,'triangle',0.12,520),70); },
  /* Distinct pickup stingers so every powerup has an audible identity. */
  powerup: (type)=>{
    if(type==='shield'){
      tone(520,0.08,'sine',0.12,900);
      setTimeout(()=>tone(900,0.10,'sine',0.12,1500),65);
      setTimeout(()=>tone(1500,0.14,'sine',0.10,1900),140);
    } else if(type==='magnet'){
      tone(280,0.08,'triangle',0.12,620);
      setTimeout(()=>tone(620,0.10,'triangle',0.12,980),65);
      setTimeout(()=>tone(980,0.12,'triangle',0.10,520),135);
    } else if(type==='ghost'){
      tone(330,0.14,'sine',0.10,660);
      setTimeout(()=>tone(660,0.18,'sine',0.09,990),90);
    } else if(type==='freeze'){
      tone(1200,0.08,'sine',0.10,1800);
      setTimeout(()=>tone(1800,0.18,'sine',0.09,2400),70);
    } else if(type==='frenzy'){
      tone(180,0.07,'sawtooth',0.09,420);
      setTimeout(()=>tone(420,0.07,'sawtooth',0.09,760),55);
      setTimeout(()=>tone(760,0.12,'square',0.10,1200),110);
    } else {
      SFX.power();
    }
  },
};

/* ============================= WORLD CONSTANTS ============================= */
const GRAVITY = 1500;
const BOOST_V = -430;
const MAX_FALL = 620;
const GROUND_Y = H - 40;
const CEIL_Y = 30;
const MOSQ_X = 120;

/* ============================= STATE ============================= */
let state = 'start'; // start | playing | paused | dead
let t = 0, lastTime = 0;
let score = 0, bloodCount = 0, comboStreak = 0, multiplier = 1;
let hearts = 3;
let obstacles = [];
let pickups = [];
let particles = [];
let powerBursts = []; // animated rings/glints when a powerup is collected
let floaters = []; // floating text like "+1"
let spawnTimer = 0;
let bgOffset = 0;
let shakeT = 0, shakeMag = 0;
let flashT = 0, flashColor = '255,255,255';
let form = 0; // 0 normal, 1 blood, 2 electric
let shieldCharges = 0;
let bloodSinceCharge = 0;
let comboMsgT = 0;
let difficultyT = 0;
let activePower = null;
let powerT = 0;
let powerMaxT = 0;
let powerUsed = 0;

const mosq = {
  x: MOSQ_X, y: H/2, vy: 0, rot: 0,
  invuln: 0, hitStagger: 0, wingPhase: 0,
  dead: false, deathType: null, deathVX: 0, deathVY: 0, deathRot: 0,
};

function resetGame(){
  state='playing'; t=0; score=0; bloodCount=0; comboStreak=0; multiplier=1;
  hearts=3; obstacles=[]; pickups=[]; particles=[]; powerBursts=[]; floaters=[];
  spawnTimer=0.4; bgOffset=0; shakeT=0; flashT=0; form=0; shieldCharges=0; bloodSinceCharge=0;
  difficultyT=0; activePower=null; powerT=0; powerMaxT=0; powerUsed=0;
  mosq.x=MOSQ_X; mosq.y=H/2; mosq.vy=0; mosq.rot=0; mosq.invuln=1.0; mosq.hitStagger=0;
  mosq.dead=false; mosq.deathType=null;
  updateHeartsUI(); updateScoreUI(); formBadge.style.display='none'; updatePowerUI();
  gameOverScreen.classList.add('hidden');
  pauseScreen.classList.add('hidden');
  startScreen.classList.add('hidden');
}

/* ============================= INPUT ============================= */
function flap(){
  if(state==='start'){ resetGame(); flap(); return; }
  if(state==='dead') return;
  if(state==='paused') return;
  if(mosq.dead) return;
  mosq.vy = BOOST_V;
  mosq.hitStagger = 0;
  SFX.boost();
  for(let i=0;i<4;i++){
    particles.push({x:mosq.x-14,y:mosq.y+8,vx:-120-Math.random()*60,vy:(Math.random()-0.5)*60,life:0.35,maxLife:0.35,size:3+Math.random()*2,color:'255,255,255',type:'puff'});
  }
}
window.addEventListener('keydown', (e)=>{
  if(e.code==='Space'){ e.preventDefault(); if(!introScreen.classList.contains('hidden')){ introScreen.classList.add('hidden'); startScreen.classList.remove('hidden'); } else { flap(); } }
  if(e.code==='KeyP'){ togglePause(); }
});
canvas.addEventListener('pointerdown', (e)=>{ e.preventDefault(); flap(); }, {passive:false});
canvas.addEventListener('contextmenu', (e)=>e.preventDefault());
document.getElementById('introBtn').addEventListener('click', ()=>{
  introScreen.classList.add('hidden');
  startScreen.classList.remove('hidden');
});
document.getElementById('startBtn').addEventListener('click', ()=>{ resetGame(); });
document.getElementById('retryBtn').addEventListener('click', ()=>{ resetGame(); });
pauseBtn.addEventListener('click', togglePause);
document.getElementById('resumeBtn').addEventListener('click', togglePause);

function togglePause(){
  if(state==='playing'){ state='paused'; pauseScreen.classList.remove('hidden'); }
  else if(state==='paused'){ state='playing'; pauseScreen.classList.add('hidden'); lastTime=performance.now(); }
}

/* ============================= UI HELPERS ============================= */
function updateScoreUI(){
  scoreVal.textContent = pad(score);
  bestVal.textContent = pad(Math.max(BEST,score));
}
function updateHeartsUI(){
  let html='';
  for(let i=0;i<3;i++) html += i<hearts ? '<span class="heart">❤️</span>' : '<span class="heart" style="opacity:.25;">🖤</span>';
  heartsEl.innerHTML = html;
  if(form===2){
    chargeLabel.textContent = shieldCharges>0 ? '⚡ CHARGED' : '⚡ recharging…';
  } else {
    chargeLabel.textContent = '';
  }
}
function showCombo(text){
  comboMsg.textContent = text;
  comboMsg.style.opacity = 1;
  comboMsgT = 1.0;
}
function screenShake(mag, dur){ shakeMag = mag; shakeT = dur; }
function flashScreen(color, dur){ flashColor = color; flashT = dur; }

/* ============================= OBSTACLES ============================= */
// generic obstacle: {type, x, width, gapY, gapH, speed, ...}
function currentSpeed(){
  return 200 + Math.min(160, difficultyT*6); // px/s, scales with time survived
}
function currentGapH(){
  return Math.max(150, 230 - difficultyT*3.2);
}
function spawnInterval(){
  return Math.max(1.15, 2.05 - difficultyT*0.02);
}

function spawnObstacle(){
  const roll = Math.random();
  const gapH = currentGapH();
  const gapY = CEIL_Y + 40 + Math.random()*(GROUND_Y-CEIL_Y-80-gapH);
  const speed = currentSpeed();

  if(roll < 0.45){
    obstacles.push({ type:'fan', x:W+40, width:56, gapY, gapH, speed, bladeAngle:Math.random()*Math.PI, passed:false });
  } else if(roll < 0.70){
    const fromTop = Math.random()<0.5;
    obstacles.push({ type:'hand', x:W+40, width:70, fromTop, reach: fromTop? gapY : GROUND_Y-gapY-gapH, gapY, gapH, speed, timer:0, passed:false });
  } else if(roll < 0.90){
    obstacles.push({ type:'spray', x:W+40, width:64, gapY, gapH, speed, cloudPhase:Math.random()*10, passed:false });
  } else {
    // lamp: small standalone hazard, not a full gap-blocker
    const y = CEIL_Y+60+Math.random()*(GROUND_Y-CEIL_Y-120);
    obstacles.push({ type:'lamp', x:W+40, width:34, y, speed, flashT:Math.random()*2, on:true, passed:true /* doesn't score */ });
  }
}

function updatePowerUI(){
  const el = document.getElementById('powerBadge');
  if(!el) return;
  if(activePower && powerT>0){
    const names={shield:'🛡 SHIELD',magnet:'🧲 BLOOD MAGNET',ghost:'👻 GHOST MODE',freeze:'❄ FREEZE',frenzy:'🔥 BLOOD FRENZY'};
    el.textContent = names[activePower] + '  ' + Math.max(0,powerT).toFixed(1)+'s';
    el.classList.add('active');
  } else { el.classList.remove('active'); }
}
function activatePower(type){
  const powerColors={
    shield:'126,247,255', magnet:'255,93,122', ghost:'201,156,255',
    freeze:'157,231,255', frenzy:'255,107,53', heart:'255,107,129'
  };
  const c=powerColors[type]||'255,255,255';

  // Big collection feedback: expanding ring + sparks + quick camera punch.
  powerBursts.push({x:mosq.x,y:mosq.y,life:0.48,maxLife:0.48,r:8,color:c,rot:0});
  for(let i=0;i<22;i++){
    const a=(Math.PI*2*i/22)+Math.random()*0.22;
    const sp=90+Math.random()*260;
    particles.push({
      x:mosq.x,y:mosq.y,vx:Math.cos(a)*sp,vy:Math.sin(a)*sp,
      life:0.48+Math.random()*0.22,maxLife:0.7,
      size:2+Math.random()*3,color:c,type:'spark'
    });
  }
  screenShake(3.5,0.10);
  flashScreen(c,0.10);

  if(type==='heart'){
    if(hearts<3){hearts++; updateHeartsUI();}
    SFX.heart();
    showCombo('+1 HEART');
    updatePowerUI();
    return;
  }

  const durations={shield:8,magnet:7,ghost:4,freeze:4,frenzy:6};
  activePower=type; powerT=durations[type]; powerMaxT=powerT; powerUsed=0;
  if(type==='shield'){ shieldCharges=Math.max(1,shieldCharges+1); updateHeartsUI(); }
  SFX.powerup(type);
  showCombo((({shield:'SHIELD!',magnet:'BLOOD MAGNET!',ghost:'GHOST MODE!',freeze:'FREEZE!',frenzy:'BLOOD FRENZY!'})[type]||'POWERUP!'));
  updatePowerUI();
}
function spawnPowerup(){
  const y=CEIL_Y+70+Math.random()*(GROUND_Y-CEIL_Y-140);
  const roll=Math.random();
  let type = roll<0.18?'shield':roll<0.36?'magnet':roll<0.52?'ghost':roll<0.68?'freeze':roll<0.86?'frenzy':'heart';
  pickups.push({
    type:'powerup', power:type, x:W+35, y, baseY:y,
    speed:currentSpeed()*0.92, bob:Math.random()*10, r:13,
    phase:Math.random()*Math.PI*2, spin:(Math.random()<0.5?-1:1)*(0.9+Math.random()*0.8)
  });
}
function spawnPickup(){
  if(Math.random()<0.10){ spawnPowerup(); return; }
  const rare = Math.random()<0.14;
  const heartDrop = !rare && Math.random()<0.06;
  const y = CEIL_Y+60+Math.random()*(GROUND_Y-CEIL_Y-120);
  pickups.push({
    type: heartDrop?'heartdrop':(rare?'rareblood':'blood'),
    x:W+30, y, baseY:y, speed:currentSpeed()*0.98, bob:Math.random()*10, r: heartDrop?11:(rare?9:7),
  });
}

/* ============================= COLLISION ============================= */
function circleRectHit(cx,cy,cr, rx,ry,rw,rh){
  const nx = Math.max(rx, Math.min(cx, rx+rw));
  const ny = Math.max(ry, Math.min(cy, ry+rh));
  const dx = cx-nx, dy = cy-ny;
  return (dx*dx+dy*dy) < cr*cr;
}

function takeHit(source){
  if(mosq.invuln>0) return;
  if(shieldCharges>0){
    shieldCharges--; updateHeartsUI();
    SFX.shield(); flashScreen('130,220,255',0.15);
    mosq.invuln = 0.6;
    for(let i=0;i<14;i++){
      particles.push({x:mosq.x,y:mosq.y,vx:(Math.random()-0.5)*260,vy:(Math.random()-0.5)*260,life:0.4,maxLife:0.4,size:3,color:'126,247,255',type:'spark'});
    }
    return;
  }
  hearts--;
  comboStreak = 0; multiplier = 1;
  mosq.invuln = 1.3;
  mosq.hitStagger = 0.35;
  mosq.vy = -180;
  SFX.hit(); screenShake(10,0.25); flashScreen('255,70,70',0.18);
  updateHeartsUI();
  for(let i=0;i<10;i++){
    particles.push({x:mosq.x,y:mosq.y,vx:(Math.random()-0.5)*220,vy:(Math.random()-0.5)*220-60,life:0.5,maxLife:0.5,size:3+Math.random()*2,color:'255,80,90',type:'spark'});
  }
  if(hearts<=0){ killMosquito(source); }
}

function killMosquito(source){
  mosq.dead = true; mosq.deathType = source||'fan';
  mosq.deathVX = -40; mosq.deathVY = -120; mosq.deathRot = (Math.random()<0.5?1:-1)*10;
  SFX.death();
  state='dead';
  setTimeout(showGameOver, 900);
}

function showGameOver(){
  const titles = {
    fan:'CHOPPED!', hand:'SMACKED!', spray:'GASSED!', lamp:'ZAPPED!', default:'SPLAT!'
  };
  const emojis = { fan:'🌀', hand:'✋', spray:'🧴', lamp:'💡', default:'💀' };
  document.getElementById('gameOverTitle').textContent = titles[mosq.deathType]||titles.default;
  document.getElementById('deathEmoji').textContent = emojis[mosq.deathType]||emojis.default;
  document.getElementById('finalScore').textContent = pad(score);
  document.getElementById('finalBlood').textContent = pad(bloodCount);
  if(score>BEST){ BEST=score; saveBest(BEST); }
  document.getElementById('finalBest').textContent = pad(BEST);
  // Game-over is a natural pause point: show a WGPlayground midroll, then reveal the result screen.
  wgPlaygroundMidroll(function(){ gameOverScreen.classList.remove('hidden'); });
}

/* ============================= TRANSFORMATIONS ============================= */
function checkTransform(){
  if(form===0 && bloodCount>=12){
    form=1; SFX.levelup(); formBadge.textContent='🩸 BLOOD MOSQUITO'; formBadge.style.display='block';
    showCombo('BLOOD MOSQUITO!');
  } else if(form===1 && bloodCount>=30){
    form=2; shieldCharges=1; bloodSinceCharge=0; SFX.levelup(); formBadge.textContent='⚡ ELECTRIC MOSQUITO';
    showCombo('ELECTRIC MOSQUITO!'); updateHeartsUI();
  }
  if(form===2){
    if(shieldCharges<1 && bloodSinceCharge>=18){ shieldCharges=1; bloodSinceCharge=0; SFX.shield(); updateHeartsUI(); }
  }
}

/* ============================= UPDATE ============================= */
function update(dt){
  t += dt; difficultyT += dt;
  bgOffset -= currentSpeed()*0.35*dt;

  if(shakeT>0) shakeT -= dt;
  if(flashT>0) flashT -= dt;
  if(comboMsgT>0){ comboMsgT -= dt; if(comboMsgT<=0) comboMsg.style.opacity=0; }
  if(activePower){ powerT -= dt; if(powerT<=0){ activePower=null; powerT=0; updatePowerUI(); } else updatePowerUI(); }

  mosq.wingPhase += dt*(mosq.dead?4:28);

  if(mosq.dead){
    mosq.deathVY += GRAVITY*0.6*dt;
    mosq.y += mosq.deathVY*dt; mosq.x += mosq.deathVX*dt;
    mosq.rot += mosq.deathRot*dt;
    return;
  }

  if(mosq.invuln>0) mosq.invuln -= dt;
  if(mosq.hitStagger>0) mosq.hitStagger -= dt;

  // physics
  mosq.vy += GRAVITY*dt;
  if(mosq.vy>MAX_FALL) mosq.vy=MAX_FALL;
  mosq.y += mosq.vy*dt;
  mosq.rot = Math.max(-0.5, Math.min(1.1, mosq.vy/500));

  if(mosq.y < CEIL_Y+14){ mosq.y=CEIL_Y+14; mosq.vy=0; }
  if(mosq.y > GROUND_Y-14){ mosq.y=GROUND_Y-14; takeHit('ground'); mosq.vy=-200; }

  // spawn
  spawnTimer -= dt;
  if(spawnTimer<=0){ spawnObstacle(); spawnTimer = spawnInterval(); }

  if(Math.random() < dt*0.55) spawnPickup();

  // obstacles
  for(let i=obstacles.length-1;i>=0;i--){
    const o = obstacles[i];
    o.x -= o.speed*(activePower==='freeze'?0.16:1)*dt;
    if(o.type==='fan') o.bladeAngle += dt*14;
    if(o.type==='hand'){ o.timer += dt; }
    if(o.type==='lamp'){ o.flashT += dt; o.on = Math.sin(o.flashT*6)>-0.3; }

    // scoring: obstacle center passes mosquito x
    if(!o.passed && o.x+o.width < mosq.x){
      o.passed = true;
      if(o.type!=='lamp'){
        score += 1;
        updateScoreUI();
        for(let p=0;p<6;p++) particles.push({x:mosq.x,y:mosq.y,vx:(Math.random()-0.5)*80,vy:-40-Math.random()*60,life:0.4,maxLife:0.4,size:2,color:'255,207,77',type:'spark'});
      }
    }

    // collision
    if(!mosq.dead && mosq.invuln<=0 && activePower!=='ghost'){
      if(o.type==='fan' || o.type==='spray'){
        const topRect = {x:o.x,y:CEIL_Y,w:o.width,h:o.gapY-CEIL_Y};
        const botRect = {x:o.x,y:o.gapY+o.gapH,w:o.width,h:GROUND_Y-(o.gapY+o.gapH)};
        if(circleRectHit(mosq.x,mosq.y,13, topRect.x,topRect.y,topRect.w,topRect.h) ||
           circleRectHit(mosq.x,mosq.y,13, botRect.x,botRect.y,botRect.w,botRect.h)){
          takeHit(o.type);
        }
      } else if(o.type==='hand'){
        const rect = o.fromTop ? {x:o.x,y:CEIL_Y,w:o.width,h:o.reach} : {x:o.x,y:GROUND_Y-o.reach,w:o.width,h:o.reach};
        if(circleRectHit(mosq.x,mosq.y,13, rect.x,rect.y,rect.w,rect.h)) takeHit('hand');
      } else if(o.type==='lamp'){
        if(o.on){
          const dx=mosq.x-o.x, dy=mosq.y-o.y;
          if(dx*dx+dy*dy < (13+15)*(13+15)) takeHit('lamp');
        }
      }
    }

    if(o.x < -100) obstacles.splice(i,1);
  }

  // pickups
  for(let i=pickups.length-1;i>=0;i--){
    const p = pickups[i];
    p.x -= p.speed*dt;
    p.y = p.baseY + Math.sin((t+p.bob)*3)*8;
    if(activePower==='magnet' && (p.type==='blood' || p.type==='rareblood' || p.type==='heartdrop')){
      const mdx=mosq.x-p.x, mdy=mosq.y-p.y, dist=Math.hypot(mdx,mdy);
      if(dist<190){ p.x += mdx*dt*3.8; p.y += mdy*dt*3.8; }
    }
    const dx=mosq.x-p.x, dy=mosq.y-p.y;
    if(!mosq.dead && dx*dx+dy*dy < (13+p.r)*(13+p.r)){
      if(p.type==='powerup'){
        activatePower(p.power);
      } else if(p.type==='blood'){
        bloodCount++; comboStreak++; score += multiplier*(activePower==='frenzy'?3:1); SFX.blood();
        floaters.push({x:p.x,y:p.y,text:'+'+(multiplier*(activePower==='frenzy'?3:1)),life:0.6,vy:-40,color:'255,120,130'});
        if(form===2) bloodSinceCharge++;
      } else if(p.type==='rareblood'){
        bloodCount+=5; comboStreak++; score += 5*multiplier*(activePower==='frenzy'?3:1); SFX.blood();
        floaters.push({x:p.x,y:p.y,text:'+'+(5*multiplier*(activePower==='frenzy'?3:1)),life:0.6,vy:-40,color:'255,80,100'});
        if(form===2) bloodSinceCharge+=5;
      } else if(p.type==='heartdrop'){
        if(hearts<3){ hearts++; updateHeartsUI(); }
        SFX.heart();
        floaters.push({x:p.x,y:p.y,text:'+1 HEART',life:0.7,vy:-40,color:'255,150,170'});
      }
      updateScoreUI();
      checkCombo();
      checkTransform();
      pickups.splice(i,1);
      continue;
    }
    if(p.x < -60) pickups.splice(i,1);
  }

  // particles
  for(let i=particles.length-1;i>=0;i--){
    const pt = particles[i];
    pt.life -= dt;
    pt.x += pt.vx*dt; pt.y += pt.vy*dt;
    pt.vy += 200*dt;
    if(pt.life<=0) particles.splice(i,1);
  }
  for(let i=powerBursts.length-1;i>=0;i--){
    const b=powerBursts[i];
    b.life-=dt; b.r += 190*dt; b.rot += dt*7;
    if(b.life<=0) powerBursts.splice(i,1);
  }
  for(let i=floaters.length-1;i>=0;i--){
    const f = floaters[i];
    f.life -= dt; f.y += f.vy*dt; f.vy *= 0.94;
    if(f.life<=0) floaters.splice(i,1);
  }
}

function checkCombo(){
  if(comboStreak===5){ multiplier=2; showCombo('NICE!'); SFX.combo(); }
  else if(comboStreak===10){ multiplier=3; showCombo('BLOOD RUSH!'); SFX.combo(); }
  else if(comboStreak===20){ multiplier=5; showCombo('MOSQUITO GOD!'); SFX.combo(); }
}

/* ============================= DRAW ============================= */
function drawBackground(){
  const g = ctx.createLinearGradient(0,0,0,H);
  g.addColorStop(0,'#141634'); g.addColorStop(1,'#2a2f66');
  ctx.fillStyle = g; ctx.fillRect(0,0,W,H);

  // moon
  ctx.save();
  ctx.globalAlpha=0.9;
  ctx.fillStyle='#f4e9d8';
  ctx.beginPath(); ctx.arc(W-70,90,42,0,Math.PI*2); ctx.fill();
  ctx.fillStyle='rgba(20,22,52,0.5)';
  ctx.beginPath(); ctx.arc(W-58,78,42,0,Math.PI*2); ctx.fill();
  ctx.restore();

  // stars
  ctx.fillStyle='rgba(255,255,255,0.5)';
  for(let i=0;i<26;i++){
    const sx = ((i*97 + bgOffset*0.2) % (W+40)) - 20;
    const sy = (i*53)%(H*0.55)+10;
    ctx.fillRect(((sx%W)+W)%W, sy, 2, 2);
  }

  // Removed decorative window frame/curtains per polish feedback.

  // distant furniture silhouettes (parallax)
  ctx.fillStyle='#20244a';
  const bedX = (((bgOffset*0.6)%(W+300))+W+300)%(W+300)-300;
  ctx.fillRect(bedX, GROUND_Y-90, 220, 90);
  ctx.fillRect(bedX-10, GROUND_Y-120, 30, 40);
  ctx.fillStyle='#2b3060';
  ctx.fillRect(bedX+10, GROUND_Y-70, 200, 20);

  // floor
  ctx.fillStyle='#171a3a';
  ctx.fillRect(0,GROUND_Y,W,H-GROUND_Y);
  ctx.strokeStyle='#0f1130'; ctx.lineWidth=2;
  ctx.beginPath(); ctx.moveTo(0,GROUND_Y); ctx.lineTo(W,GROUND_Y); ctx.stroke();

  // ceiling
  ctx.fillStyle='#0f1130';
  ctx.fillRect(0,0,W,CEIL_Y);
}

function drawFan(o){
  ctx.save();
  // top pipe
  ctx.fillStyle='#3d4270';
  ctx.fillRect(o.x,CEIL_Y,o.width,o.gapY-CEIL_Y-14);
  ctx.fillStyle='#4d5490';
  ctx.fillRect(o.x-4,o.gapY-18,o.width+8,18);
  // bottom pipe
  ctx.fillStyle='#3d4270';
  ctx.fillRect(o.x,o.gapY+o.gapH+14,o.width,GROUND_Y-(o.gapY+o.gapH+14));
  ctx.fillStyle='#4d5490';
  ctx.fillRect(o.x-4,o.gapY+o.gapH,o.width+8,18);

  // fan blades at gap edges
  drawBlade(o.x+o.width/2, o.gapY-9, o.bladeAngle);
  drawBlade(o.x+o.width/2, o.gapY+o.gapH+9, -o.bladeAngle);
  ctx.restore();
}
function drawBlade(cx,cy,angle){
  ctx.save();
  ctx.translate(cx,cy); ctx.rotate(angle);
  ctx.strokeStyle='#dfe3ff'; ctx.lineWidth=4; ctx.lineCap='round';
  for(let i=0;i<3;i++){
    ctx.save(); ctx.rotate(i*Math.PI*2/3);
    ctx.beginPath(); ctx.moveTo(0,0); ctx.lineTo(0,-16); ctx.stroke();
    ctx.restore();
  }
  ctx.fillStyle='#22254a';
  ctx.beginPath(); ctx.arc(0,0,4,0,Math.PI*2); ctx.fill();
  ctx.restore();
}

function drawHand(o){
  ctx.save();
  const skin='#e8b48c', skinDark='#c78f66';
  if(o.fromTop){
    ctx.fillStyle=skin;
    ctx.fillRect(o.x, CEIL_Y, o.width, o.reach-26);
    ctx.fillStyle=skinDark;
    // fingers
    for(let i=0;i<4;i++) ctx.fillRect(o.x+6+i*15, o.reach-26+CEIL_Y, 10, 30);
    ctx.fillStyle=skin;
    ctx.fillRect(o.x-6, o.reach-2+CEIL_Y, o.width+12, 14);
  } else {
    ctx.fillStyle=skin;
    ctx.fillRect(o.x, GROUND_Y-o.reach+26, o.width, o.reach-26);
    ctx.fillStyle=skinDark;
    for(let i=0;i<4;i++) ctx.fillRect(o.x+6+i*15, GROUND_Y-o.reach, 10, 30);
    ctx.fillStyle=skin;
    ctx.fillRect(o.x-6, GROUND_Y-o.reach-12, o.width+12, 14);
  }
  ctx.restore();
}

function drawSpray(o){
  ctx.save();
  ctx.globalAlpha=0.85;
  ctx.fillStyle='#8fd68f';
  drawCloudRect(o.x,CEIL_Y,o.width,o.gapY-CEIL_Y, o.cloudPhase);
  drawCloudRect(o.x,o.gapY+o.gapH,o.width,GROUND_Y-(o.gapY+o.gapH), o.cloudPhase+3);
  ctx.restore();
}
function drawCloudRect(x,y,w,h,phase){
  const bumps=6;
  for(let i=0;i<bumps;i++){
    const cy = y + (h/bumps)*i + (h/bumps)/2;
    const r = 16 + Math.sin(phase+i)*4;
    ctx.beginPath(); ctx.arc(x+w/2, cy, r, 0, Math.PI*2); ctx.fill();
  }
}

function drawLamp(o){
  ctx.save();
  ctx.translate(o.x,o.y);
  ctx.fillStyle = o.on? '#fff2a8' : '#665c33';
  if(o.on){
    ctx.globalAlpha=0.35;
    ctx.beginPath(); ctx.arc(0,0,26,0,Math.PI*2); ctx.fill();
    ctx.globalAlpha=1;
  }
  ctx.beginPath(); ctx.arc(0,0,13,0,Math.PI*2); ctx.fill();
  ctx.strokeStyle='#3a3f7a'; ctx.lineWidth=3;
  ctx.beginPath(); ctx.moveTo(0,-13); ctx.lineTo(0,-30); ctx.stroke();
  ctx.restore();
}

function drawPickup(p){
  ctx.save();
  ctx.translate(p.x,p.y);
  if(p.type==='powerup'){
    const icons={shield:'🛡️',magnet:'🧲',ghost:'👻',freeze:'❄️',frenzy:'🔥',heart:'❤️'};
    const glows={shield:'#7ef7ff',magnet:'#ff5d7a',ghost:'#c99cff',freeze:'#9de7ff',frenzy:'#ff6b35',heart:'#ff6b81'};
    const glow=glows[p.power]||'#fff';
    const phase=p.phase||0;
    const pulse=1+Math.sin(t*9+phase)*0.13;
    const spin=(t*(p.spin||1))*0.9+phase;

    // Three animated aura rings make the pickup visibly "alive".
    ctx.save();
    ctx.rotate(spin);
    for(let ring=0;ring<3;ring++){
      const rr=20+ring*7+Math.sin(t*7+phase+ring)*3;
      ctx.globalAlpha=(0.22-ring*0.05)*(0.7+0.3*Math.sin(t*8+ring));
      ctx.strokeStyle=glow; ctx.lineWidth=1.5;
      ctx.beginPath(); ctx.arc(0,0,rr,ring*0.8,ring*0.8+Math.PI*1.35); ctx.stroke();
    }
    ctx.restore();

    ctx.globalAlpha=.16+Math.sin(t*10+phase)*.05;
    ctx.fillStyle=glow; ctx.beginPath(); ctx.arc(0,0,24+pulse*4,0,Math.PI*2); ctx.fill();
    ctx.globalAlpha=1;

    ctx.save();
    ctx.scale(pulse,pulse);
    ctx.rotate(Math.sin(t*4+phase)*0.10);
    ctx.fillStyle=glow;
    ctx.shadowColor=glow; ctx.shadowBlur=12;
    ctx.beginPath(); ctx.arc(0,0,15,0,Math.PI*2); ctx.fill();
    ctx.shadowBlur=0;
    ctx.globalAlpha=.9;
    ctx.font='21px sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle';
    ctx.fillText(icons[p.power]||'⚡',0,1);
    ctx.globalAlpha=1;
    ctx.strokeStyle='#fff'; ctx.lineWidth=1.5;
    ctx.beginPath(); ctx.arc(0,0,15,0,Math.PI*2); ctx.stroke();
    ctx.restore();

    // Tiny orbiting sparks.
    for(let k=0;k<3;k++){
      const a=t*(1.7+k*.45)+phase+k*2.1;
      const rr=24+Math.sin(t*5+k)*2;
      ctx.globalAlpha=.8;
      ctx.fillStyle=glow;
      ctx.beginPath(); ctx.arc(Math.cos(a)*rr,Math.sin(a)*rr,1.5,0,Math.PI*2); ctx.fill();
    }
    ctx.globalAlpha=1;
  } else if(p.type==='heartdrop'){
    ctx.fillStyle='#ff6b81';
    ctx.font='20px sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle';
    ctx.fillText('❤️', 0, 1);
  } else {
    ctx.fillStyle = p.type==='rareblood' ? '#ff2d3f' : '#e63946';
    ctx.beginPath();
    ctx.moveTo(0,-p.r);
    ctx.bezierCurveTo(p.r,-p.r*0.2, p.r*0.9,p.r, 0,p.r);
    ctx.bezierCurveTo(-p.r*0.9,p.r, -p.r,-p.r*0.2, 0,-p.r);
    ctx.fill();
    ctx.fillStyle='rgba(255,255,255,0.5)';
    ctx.beginPath(); ctx.arc(-p.r*0.25,-p.r*0.1,p.r*0.25,0,Math.PI*2); ctx.fill();
    if(p.type==='rareblood'){
      ctx.strokeStyle='#ffd166'; ctx.lineWidth=2;
      ctx.beginPath(); ctx.arc(0,0,p.r+4,0,Math.PI*2); ctx.stroke();
    }
  }
  ctx.restore();
}

function drawMosquito(){
  ctx.save();
  ctx.translate(mosq.x, mosq.y);
  ctx.rotate(mosq.dead ? mosq.rot : mosq.rot*0.6);

  const flicker = mosq.invuln>0 && Math.floor(t*20)%2===0;
  if(flicker) ctx.globalAlpha=0.4;

  // trail by form
  if(form===1){
    ctx.save(); ctx.globalAlpha=0.35;
    ctx.fillStyle='#ff3b4e';
    ctx.beginPath(); ctx.ellipse(-20,2,14,6,0,0,Math.PI*2); ctx.fill();
    ctx.restore();
  } else if(form===2){
    ctx.save(); ctx.globalAlpha=0.5;
    ctx.strokeStyle='#7ef7ff'; ctx.lineWidth=2;
    for(let i=0;i<3;i++){
      ctx.beginPath();
      ctx.moveTo(-16-i*6, -6+Math.sin(t*10+i)*4);
      ctx.lineTo(-24-i*6, 6+Math.cos(t*10+i)*4);
      ctx.stroke();
    }
    ctx.restore();
  }

  const wingFlap = Math.sin(mosq.wingPhase)*0.5+0.5;

  // wings (behind body)
  ctx.save();
  ctx.fillStyle = 'rgba(200,220,255,0.55)';
  ctx.strokeStyle='rgba(150,170,220,0.7)'; ctx.lineWidth=1;
  ctx.save(); ctx.rotate(-0.5-wingFlap*0.5);
  ctx.beginPath(); ctx.ellipse(-2,-8,13,6,0,0,Math.PI*2); ctx.fill(); ctx.stroke();
  ctx.restore();
  ctx.save(); ctx.rotate(0.5+wingFlap*0.5);
  ctx.beginPath(); ctx.ellipse(-2,8,13,6,0,0,Math.PI*2); ctx.fill(); ctx.stroke();
  ctx.restore();
  ctx.restore();

  // legs
  ctx.strokeStyle = form===1?'#8a1420':'#161020'; ctx.lineWidth=2;
  for(let i=0;i<3;i++){
    ctx.beginPath(); ctx.moveTo(-2+i*4,6); ctx.lineTo(-6+i*6,16+i*2); ctx.stroke();
  }

  // body
  const bodyColor = form===1 ? '#5c1018' : form===2 ? '#182848' : '#2b2b2f';
  ctx.fillStyle = bodyColor;
  ctx.beginPath();
  ctx.ellipse(0,0,17,9,0,0,Math.PI*2);
  ctx.fill();
  ctx.strokeStyle='#000'; ctx.lineWidth=1.5; ctx.stroke();

  // abdomen stripes
  ctx.strokeStyle='rgba(0,0,0,0.35)'; ctx.lineWidth=1.5;
  for(let i=0;i<3;i++){ ctx.beginPath(); ctx.moveTo(2+i*4,-7); ctx.lineTo(2+i*4,7); ctx.stroke(); }

  // proboscis
  ctx.strokeStyle=bodyColor; ctx.lineWidth=3; ctx.lineCap='round';
  ctx.beginPath(); ctx.moveTo(15,1); ctx.lineTo(27,3); ctx.stroke();

  // eye
  ctx.fillStyle = form===1 ? '#ff2d3f' : form===2 ? '#7ef7ff' : '#e63946';
  ctx.beginPath(); ctx.arc(9,-2,4.5,0,Math.PI*2); ctx.fill();
  ctx.fillStyle='rgba(255,255,255,0.8)';
  ctx.beginPath(); ctx.arc(10,-3.5,1.4,0,Math.PI*2); ctx.fill();

  ctx.restore();
}

function drawPowerBursts(){
  powerBursts.forEach(b=>{
    const a=Math.max(0,b.life/b.maxLife);
    ctx.save();
    ctx.globalAlpha=a*0.85;
    ctx.strokeStyle=`rgb(${b.color})`;
    ctx.lineWidth=2.5;
    ctx.beginPath(); ctx.arc(b.x,b.y,b.r,b.rot,b.rot+Math.PI*1.7); ctx.stroke();
    ctx.globalAlpha=a*0.28;
    ctx.lineWidth=8;
    ctx.beginPath(); ctx.arc(b.x,b.y,b.r*0.72,0,Math.PI*2); ctx.stroke();
    ctx.restore();
  });
}
function drawParticles(){
  particles.forEach(p=>{
    ctx.save();
    ctx.globalAlpha = Math.max(0,p.life/p.maxLife);
    ctx.fillStyle = `rgb(${p.color})`;
    ctx.beginPath(); ctx.arc(p.x,p.y,p.size,0,Math.PI*2); ctx.fill();
    ctx.restore();
  });
}
function drawFloaters(){
  floaters.forEach(f=>{
    ctx.save();
    ctx.globalAlpha = Math.max(0,f.life/0.6);
    ctx.fillStyle = `rgb(${f.color})`;
    ctx.font='bold 14px sans-serif'; ctx.textAlign='center';
    ctx.strokeStyle='rgba(0,0,0,0.6)'; ctx.lineWidth=3;
    ctx.strokeText(f.text, f.x, f.y);
    ctx.fillText(f.text, f.x, f.y);
    ctx.restore();
  });
}

function drawWarnings(){
  obstacles.forEach(o=>{
    if(o.type==='spray' && o.x>W-40 && o.x<W+20){
      drawWarnBanner('SPRAY!','#8fd68f');
    }
    if(o.type==='hand' && o.x>W-40 && o.x<W+20){
      drawWarnBanner('WHOOSH!','#e8b48c');
    }
  });
}
let warnCache = {};
function drawWarnBanner(text,color){
  ctx.save();
  ctx.globalAlpha=0.85;
  ctx.fillStyle=color;
  ctx.font='bold 16px sans-serif'; ctx.textAlign='center';
  ctx.fillStyle='#000'; ctx.globalAlpha=0.4;
  ctx.fillRect(W/2-60,H*0.18-14,120,26);
  ctx.globalAlpha=1; ctx.fillStyle=color;
  ctx.fillText(text, W/2, H*0.18+4);
  ctx.restore();
}

function render(){
  ctx.save();
  if(shakeT>0){
    ctx.translate((Math.random()-0.5)*shakeMag, (Math.random()-0.5)*shakeMag);
  }
  drawBackground();
  obstacles.forEach(o=>{
    if(o.type==='fan') drawFan(o);
    else if(o.type==='hand') drawHand(o);
    else if(o.type==='spray') drawSpray(o);
    else if(o.type==='lamp') drawLamp(o);
  });
  pickups.forEach(drawPickup);
  drawPowerBursts();
  drawParticles();
  if(!mosq.dead || state==='dead') drawMosquito();
  drawFloaters();
  if(state==='playing') drawWarnings();
  ctx.restore();

  if(flashT>0){
    ctx.save();
    ctx.globalAlpha = Math.max(0,flashT)*0.5;
    ctx.fillStyle=`rgb(${flashColor})`;
    ctx.fillRect(0,0,W,H);
    ctx.restore();
  }
}

/* ============================= LOOP ============================= */
function loop(now){
  requestAnimationFrame(loop);
  if(!lastTime) lastTime = now;
  let dt = (now-lastTime)/1000;
  lastTime = now;
  if(dt>0.05) dt=0.05;

  if(state==='playing' || state==='dead'){
    update(dt);
  }
  render();
}
requestAnimationFrame(loop);

/* init idle background animation on start screen */
(function fitFrame(){
  // ensure crisp scaling
  const frame = document.getElementById('frame');
})();

})();
