(function(){
"use strict";

/* ============================= AUDIO ENGINE ============================= */
class AudioEngine{
  constructor(){
    this.ctx = null;
    this.master = null;
    this.heartbeatTimer = null;
    this.tickTimer = null;
    this.droneNodes = null;
    this.unlocked = false;
  }
  ensure(){
    if(this.ctx) return;
    this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    this.master = this.ctx.createGain();
    this.master.gain.value = 0.85;
    this.master.connect(this.ctx.destination);
  }
  unlock(){
    this.ensure();
    if(this.ctx.state === "suspended"){ this.ctx.resume(); }
    this.unlocked = true;
  }
  now(){ return this.ctx.currentTime; }

  // simple oscillator blip
  blip(freq, dur, type, gainVal, when, glideTo){
    this.ensure();
    const t = when!==undefined ? when : this.now();
    const o = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    o.type = type || "sine";
    o.frequency.setValueAtTime(freq, t);
    if(glideTo) o.frequency.exponentialRampToValueAtTime(Math.max(glideTo,1), t+dur);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(gainVal, t+0.008);
    g.gain.exponentialRampToValueAtTime(0.0001, t+dur);
    o.connect(g); g.connect(this.master);
    o.start(t); o.stop(t+dur+0.02);
  }

  click(){ this.blip(920, 0.05, "square", 0.12); }
  hover(){ this.blip(600, 0.03, "sine", 0.05); }
  menuTransition(){ this.blip(300, 0.25, "sine", 0.1, undefined, 900); }
  mechConfirm(){
    this.ensure(); const t=this.now();
    this.blip(200,0.09,"square",0.14,t);
    this.blip(140,0.12,"square",0.1,t+0.06);
  }

  playHigher(){
    this.ensure(); const t=this.now();
    for(let i=0;i<5;i++){ this.blip(260+i*70, 0.18, "sawtooth", 0.09, t+i*0.045, 260+i*70+260); }
  }
  playLower(){
    this.ensure(); const t=this.now();
    for(let i=0;i<5;i++){ this.blip(900-i*90, 0.18, "sawtooth", 0.09, t+i*0.045, 900-i*90-260); }
  }
  playCorrect(){
    this.ensure(); const t=this.now();
    const notes=[523.25,659.25,783.99,1046.5,1318.5];
    notes.forEach((f,i)=> this.blip(f, 0.5, "triangle", 0.16, t+i*0.09));
    // sub boom
    this.blip(80,0.6,"sine",0.3,t);
  }
  playWrong(){
    this.ensure(); const t=this.now();
    this.blip(90,0.5,"sawtooth",0.28,t, 40);
    this.blip(60,0.7,"sine",0.35,t+0.05);
  }
  silenceHit(){
    // sudden bass hit then abrupt silence handled by caller stopping other sounds
    this.ensure();
    this.blip(55,0.4,"sine",0.4);
  }

  tick(loud){
    this.blip(2400, 0.02, "square", loud?0.06:0.03);
  }

  startHeartbeat(bpm, intensity){
    this.stopHeartbeat();
    this.ensure();
    const interval = 60000/bpm;
    const beat = ()=>{
      const t = this.now();
      this.blip(70,0.11,"sine",0.16*intensity,t);
      this.blip(55,0.16,"sine",0.11*intensity,t+0.14);
    };
    beat();
    this.heartbeatTimer = setInterval(beat, interval);
  }
  stopHeartbeat(){
    if(this.heartbeatTimer){ clearInterval(this.heartbeatTimer); this.heartbeatTimer=null; }
  }
  startTicking(interval){
    this.stopTicking();
    this.tickTimer = setInterval(()=>this.tick(true), interval);
  }
  stopTicking(){
    if(this.tickTimer){ clearInterval(this.tickTimer); this.tickTimer=null; }
  }
  startDrone(level){
    this.stopDrone();
    this.ensure();
    const o1 = this.ctx.createOscillator();
    const o2 = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    o1.type="sawtooth"; o2.type="sine";
    const base = 48 + level*3;
    o1.frequency.value = base;
    o2.frequency.value = base*1.5;
    g.gain.value = 0.0001;
    g.gain.exponentialRampToValueAtTime(0.02+level*0.012, this.now()+0.6);
    o1.connect(g); o2.connect(g); g.connect(this.master);
    o1.start(); o2.start();
    this.droneNodes = {o1,o2,g};
  }
  riseDronePitch(){
    if(!this.droneNodes) return;
    const t=this.now();
    this.droneNodes.o1.frequency.exponentialRampToValueAtTime(140, t+2.2);
    this.droneNodes.o2.frequency.exponentialRampToValueAtTime(220, t+2.2);
  }
  stopDrone(){
    if(this.droneNodes){
      const {o1,o2,g} = this.droneNodes;
      const t=this.now();
      g.gain.exponentialRampToValueAtTime(0.0001, t+0.4);
      o1.stop(t+0.45); o2.stop(t+0.45);
      this.droneNodes = null;
    }
  }
  cutToSilence(){
    this.stopHeartbeat(); this.stopTicking(); this.stopDrone();
  }
  playVictoryFanfare(){
    this.ensure(); const t=this.now();
    const notes=[523.25,659.25,783.99,1046.5,1318.5,1568];
    notes.forEach((f,i)=> this.blip(f,0.6,"triangle",0.14,t+i*0.11));
    this.blip(65,1.0,"sine",0.3,t);
  }
  playDefeatTone(){
    this.ensure(); const t=this.now();
    this.blip(220,0.4,"sawtooth",0.2,t,110);
    this.blip(110,0.6,"sine",0.25,t+0.15,55);
  }
}
const audio = new AudioEngine();

/* ============================= FX PARTICLES ============================= */
const fxCanvas = document.getElementById('fxCanvas');
const fxCtx = fxCanvas.getContext('2d');
let particles = [];
function resizeCanvas(){
  fxCanvas.width = window.innerWidth * devicePixelRatio;
  fxCanvas.height = window.innerHeight * devicePixelRatio;
  fxCanvas.style.width = window.innerWidth+"px";
  fxCanvas.style.height = window.innerHeight+"px";
  fxCtx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0);
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function spawnBurst(x,y,count,colors,speedMax,life){
  for(let i=0;i<count;i++){
    const ang = Math.random()*Math.PI*2;
    const spd = 1+Math.random()*speedMax;
    particles.push({
      x,y, vx: Math.cos(ang)*spd, vy: Math.sin(ang)*spd,
      life: life||60, maxLife: life||60,
      color: colors[Math.floor(Math.random()*colors.length)],
      size: 2+Math.random()*3
    });
  }
  if(particles.length>400) particles.splice(0, particles.length-400);
}
function animateFx(){
  fxCtx.clearRect(0,0,fxCanvas.width,fxCanvas.height);
  particles.forEach(p=>{
    p.x+=p.vx; p.y+=p.vy; p.vy+=0.02; p.life--;
    const alpha = Math.max(0,p.life/p.maxLife);
    fxCtx.globalAlpha = alpha;
    fxCtx.fillStyle = p.color;
    fxCtx.beginPath();
    fxCtx.arc(p.x,p.y,p.size,0,Math.PI*2);
    fxCtx.fill();
  });
  fxCtx.globalAlpha = 1;
  particles = particles.filter(p=>p.life>0);
  requestAnimationFrame(animateFx);
}
animateFx();

/* ============================= STATE ============================= */
const els = {
  titleScreen: document.getElementById('titleScreen'),
  thinkScreen: document.getElementById('thinkScreen'),
  gameScreen: document.getElementById('gameScreen'),
  endScreen: document.getElementById('endScreen'),
  playBtn: document.getElementById('playBtn'),
  thinkNumber: document.getElementById('thinkNumber'),
  lockedLabel: document.getElementById('lockedLabel'),
  dots: document.getElementById('dots'),
  tensionLabel: document.getElementById('tensionLabel'),
  gameAI: document.getElementById('gameAI'),
  gameSpeech: document.getElementById('gameSpeech'),
  rangeLowLabel: document.getElementById('rangeLowLabel'),
  rangeHighLabel: document.getElementById('rangeHighLabel'),
  rangeFill: document.getElementById('rangeFill'),
  rangeParticles: document.getElementById('rangeParticles'),
  history: document.getElementById('history'),
  guessInput: document.getElementById('guessInput'),
  guessBtn: document.getElementById('guessBtn'),
  finalTag: document.getElementById('finalTag'),
  endEmoji: document.getElementById('endEmoji'),
  endTitle: document.getElementById('endTitle'),
  endRank: document.getElementById('endRank'),
  endSecret: document.getElementById('endSecret'),
  endStats: document.getElementById('endStats'),
  againBtn: document.getElementById('againBtn'),
  titleAI: document.getElementById('titleAI'),
  titleSpeech: document.getElementById('titleSpeech'),
};

const MAX_GUESSES = 5;
let state = null;

function newGame(){
  state = {
    secret: 1 + Math.floor(Math.random()*100),
    low: 1, high: 100,
    guessesUsed: 0,
    history: [],
    active: false,
    locked: false
  };
}

function showScreen(name){
  [els.titleScreen, els.thinkScreen, els.gameScreen, els.endScreen].forEach(s=>s.classList.remove('active'));
  ({title:els.titleScreen, think:els.thinkScreen, game:els.gameScreen, end:els.endScreen})[name].classList.add('active');
}

function setBodyTension(level){
  document.body.className = document.body.className.replace(/tension-\d/g,'').trim();
  document.body.classList.add('tension-'+level);
  if(level>=3) document.body.classList.add('pulse'); else document.body.classList.remove('pulse');
}

function setFace(el, expr){
  el.className = el.className.replace(/confident|nervous|panic|shocked|smug|celebrate/g,'').trim();
  el.classList.add(expr);
}

function showSpeech(el, text, warn){
  el.classList.remove('show');
  void el.offsetWidth;
  el.textContent = text;
  el.classList.toggle('warn', !!warn);
  el.classList.add('show');
}

/* ============================= DOTS ============================= */
function renderDots(){
  els.dots.innerHTML = '';
  for(let i=0;i<MAX_GUESSES;i++){
    const d = document.createElement('div');
    d.className = 'dot';
    const guessIndex = i; // 0-based
    const remaining = MAX_GUESSES - state.guessesUsed;
    if(i < state.guessesUsed) d.classList.add('used');
    else if(remaining===1 && i===state.guessesUsed) d.classList.add('final');
    els.dots.appendChild(d);
  }
}

/* ============================= RANGE ============================= */
function renderRange(animate){
  els.rangeLowLabel.textContent = state.low;
  els.rangeHighLabel.textContent = state.high;
  const left = ((state.low-1)/99)*100;
  const width = ((state.high-state.low)/99)*100;
  els.rangeFill.style.left = left+'%';
  els.rangeFill.style.width = Math.max(width,1)+'%';
  if(animate){
    const rect = els.rangeFill.getBoundingClientRect();
    for(let i=0;i<10;i++){
      const p = document.createElement('div');
      p.className='rp';
      p.style.left = (Math.random()*rect.width)+'px';
      els.rangeParticles.appendChild(p);
      requestAnimationFrame(()=>{
        p.style.transition='all 0.6s ease';
        p.style.opacity='1';
        setTimeout(()=>{ p.style.opacity='0'; },350);
      });
      setTimeout(()=>p.remove(),700);
    }
  }
}

function renderHistory(){
  els.history.innerHTML = '';
  state.history.forEach(h=>{
    const chip = document.createElement('div');
    chip.className='chip';
    const icon = h.result==='higher'?'⬆️':h.result==='lower'?'⬇️':'🎯';
    chip.innerHTML = `<span>${h.guess}</span><span>${icon}</span>`;
    els.history.appendChild(chip);
  });
}

/* ============================= TENSION LEVELS ============================= */
// level derived from guessesUsed (0..4 means about to make guess #1..5)
function tensionLevelForGuessNumber(n){ // n = 1..5 (which guess about to be made)
  return n; // 1..5
}
const tensionLabels = ['','CALM','ELEVATED','RISING','HIGH','CRITICAL'];

function applyTensionForUpcomingGuess(){
  const guessNum = state.guessesUsed + 1;
  const level = tensionLevelForGuessNumber(guessNum);
  setBodyTension(level);
  els.tensionLabel.textContent = 'TENSION: ' + tensionLabels[level];

  audio.stopHeartbeat(); audio.stopTicking();
  if(level===1){
    // calm - no heartbeat yet
  } else if(level===2){
    audio.startHeartbeat(58, 0.5);
  } else if(level===3){
    audio.startHeartbeat(72, 0.7);
    audio.startDrone(3);
  } else if(level===4){
    audio.startHeartbeat(92, 0.9);
    audio.startDrone(4);
    audio.startTicking(900);
  } else if(level===5){
    audio.startHeartbeat(116, 1.0);
    audio.startDrone(5);
    audio.startTicking(500);
    audio.riseDronePitch();
  }

  els.finalTag.classList.toggle('show', level===5);
  if(level===5){
    showSpeech(els.gameSpeech, '"This is it."', true);
    setFace(els.gameAI, 'panic');
  }
  return level;
}

/* ============================= LINES ============================= */
const LINES = {
  confident: ["You really think that's it?","Easy.","Not even close.","Try again.","You're nowhere close."],
  interested: ["Hm. Getting warmer.","Okay, noted.","Interesting guess.","Keep going."],
  nervous: ["Uh…","Wait…","That's… concerning.","How did you get there?","You're getting close."],
  highNervous: ["STOP.","Don't do that.","You can't possibly know it.","This isn't possible."],
  panic: ["ONE AWAY?!","DON'T GUESS AGAIN.","You're too close.","WAIT."],
  correct: ["NO WAY.","You actually got it?!","NO!"],
  smugWin: ["I knew you'd miss.","Too easy.","Better luck next time."]
};
function randomLine(arr){ return arr[Math.floor(Math.random()*arr.length)]; }

/* distance -> expression + line */
function reactToDistance(dist){
  if(dist>=30){ setFace(els.gameAI,'confident'); showSpeech(els.gameSpeech, '"'+randomLine(LINES.confident)+'"'); }
  else if(dist>=15){ setFace(els.gameAI,'confident'); showSpeech(els.gameSpeech, '"'+randomLine(LINES.interested)+'"'); }
  else if(dist>=6){ setFace(els.gameAI,'nervous'); showSpeech(els.gameSpeech, '"'+randomLine(LINES.nervous)+'"', true); }
  else if(dist>=2){ setFace(els.gameAI,'nervous'); showSpeech(els.gameSpeech, '"'+randomLine(LINES.highNervous)+'"', true); }
  else { setFace(els.gameAI,'panic'); showSpeech(els.gameSpeech, '"'+randomLine(LINES.panic)+'"', true);
    document.body.classList.add('shake'); setTimeout(()=>document.body.classList.remove('shake'),350);
  }
}

/* ============================= GAME FLOW ============================= */
function sleep(ms){ return new Promise(r=>setTimeout(r,ms)); }

function startTitleAIIdle(){
  const lines = ["Bet you can't find my number.","I'm thinking of something between 1 and 100.","You have five guesses. Good luck."];
  let i=0;
  showSpeech(els.titleSpeech, '"'+lines[0]+'"');
  setInterval(()=>{
    i=(i+1)%lines.length;
    showSpeech(els.titleSpeech, '"'+lines[i]+'"');
  }, 4200);
}
startTitleAIIdle();

els.playBtn.addEventListener('click', async ()=>{
  audio.unlock();
  audio.click();
  newGame();
  showScreen('think');
  await runThinkingSequence();
  showScreen('game');
  beginRound();
});

async function runThinkingSequence(){
  els.lockedLabel.style.opacity = '0';
  const cycle = [17,82,43,91,26,74,58,63,39,88];
  let idx=0;
  const iv = setInterval(()=>{
    els.thinkNumber.textContent = cycle[idx % cycle.length];
    idx++;
    audio.tick(false);
  }, 90);
  await sleep(1300);
  clearInterval(iv);
  els.thinkNumber.textContent = '???';
  await sleep(300);
  els.lockedLabel.style.opacity = '1';
  audio.menuTransition();
  await sleep(700);
}

function beginRound(){
  state.active = true;
  state.locked = false;
  renderDots();
  renderRange(false);
  renderHistory();
  els.guessInput.value = '';
  els.guessInput.disabled = false;
  els.guessInput.classList.remove('glow','locked');
  els.guessBtn.disabled = false;
  els.guessBtn.classList.remove('pulse-btn');
  els.finalTag.classList.remove('show');
  setFace(els.gameAI, 'confident');
  showSpeech(els.gameSpeech, '"Go ahead. Make your first guess."');
  setBodyTension(1);
  els.tensionLabel.textContent = 'TENSION: CALM';
  setTimeout(()=>applyTensionForUpcomingGuess(), 400);
}

els.guessInput.addEventListener('focus', ()=>{ audio.unlock(); });
els.guessInput.addEventListener('input', ()=>{
  const level = tensionLevelForGuessNumber(state.guessesUsed+1);
  if(level>=4) audio.tick(false);
});
els.guessInput.addEventListener('keydown', (e)=>{
  if(e.key==='Enter'){ e.preventDefault(); attemptGuess(); }
});
els.guessBtn.addEventListener('click', ()=>{ audio.unlock(); attemptGuess(); });

function validGuess(val){
  if(val==='' || val===null) return null;
  if(!/^-?\d+$/.test(val)) return null;
  const n = parseInt(val,10);
  if(!Number.isInteger(n)) return null;
  if(n<state.low || n>state.high) return null;
  if(state.history.some(h=>h.guess===n)) return null;
  return n;
}

async function attemptGuess(){
  if(!state.active || state.locked) return;
  const raw = els.guessInput.value;
  const n = validGuess(raw);
  if(n===null){
    els.guessInput.style.borderColor = 'var(--red)';
    setTimeout(()=>{ els.guessInput.style.borderColor=''; },400);
    return;
  }
  state.locked = true;
  els.guessBtn.disabled = true;
  audio.click();
  await runGuessSequence(n);
  state.locked = false;
}

async function runGuessSequence(n){
  // Phase 1: Lock
  els.guessInput.classList.add('locked');
  els.guessInput.disabled = true;
  audio.mechConfirm();
  await sleep(280);

  // Phase 2: AI reaction
  const dist = Math.abs(n - state.secret);
  reactToDistance(dist);
  await sleep(420 + Math.random()*260);

  // Phase 3: suspense
  const level = tensionLevelForGuessNumber(state.guessesUsed+1);
  if(level>=2) audio.tick(true);
  await sleep(350);

  // determine result
  let result;
  if(n === state.secret) result = 'correct';
  else if(n < state.secret) result = 'higher';
  else result = 'lower';

  // update range/history/guess count BEFORE reveal visuals for range animation sync
  state.guessesUsed++;
  state.history.push({guess:n, result});
  if(result==='higher') state.low = Math.max(state.low, n+1);
  if(result==='lower') state.high = Math.min(state.high, n-1);

  const isFinalGuess = state.guessesUsed === MAX_GUESSES;
  const isLastChanceNext = (MAX_GUESSES - state.guessesUsed) === 1;

  if(state.guessesUsed === MAX_GUESSES - 1 && result!=='correct'){
    // about to enter final guess: cinematic below happens after reveal
  }

  // Phase 4: cut to silence briefly on high tension, then reveal
  if(level>=3){
    audio.cutToSilence();
    await sleep(level>=5 ? 800 : 400);
  }

  await revealResult(result, n);

  // post-reveal updates
  renderDots();
  renderRange(true);
  renderHistory();

  if(result==='correct'){
    await sleep(600);
    await handleWin();
    return;
  }
  if(state.guessesUsed >= MAX_GUESSES){
    await sleep(500);
    await handleLoss();
    return;
  }

  // continue to next guess
  els.guessInput.disabled = false;
  els.guessInput.classList.remove('locked');
  els.guessInput.value = '';
  els.guessBtn.disabled = false;
  els.guessInput.focus();

  const nextLevel = applyTensionForUpcomingGuess();
  if(nextLevel===5){
    els.guessInput.classList.add('glow');
    els.guessBtn.classList.add('pulse-btn');
  } else {
    els.guessInput.classList.remove('glow');
    els.guessBtn.classList.remove('pulse-btn');
  }
}

async function revealResult(result, n){
  const flash = document.createElement('div');
  flash.className = 'reveal-flash ' + result;
  document.getElementById('app').appendChild(flash);

  const text = document.createElement('div');
  text.className = 'reveal-text ' + result + ' pop';
  text.textContent = result==='higher' ? '⬆️ HIGHER' : result==='lower' ? '⬇️ LOWER' : '🎯 CORRECT';
  document.getElementById('app').appendChild(text);

  if(result==='higher') audio.playHigher();
  else if(result==='lower') audio.playLower();
  else audio.playCorrect();

  if(result==='correct'){
    setFace(els.gameAI, 'shocked');
    showSpeech(els.gameSpeech, '"NO WAY."', true);
    const rect = els.gameAI.getBoundingClientRect();
    spawnBurst(rect.left+rect.width/2, rect.top+rect.height/2, 60, ['#4dfaff','#b06bff','#ffffff'], 6, 90);
  } else {
    document.body.classList.add('shake');
    setTimeout(()=>document.body.classList.remove('shake'), 300);
  }

  await sleep(1000);
  flash.remove();
  setTimeout(()=>text.remove(), 300);
}

async function handleWin(){
  audio.cutToSilence();
  await sleep(300);
  audio.playVictoryFanfare();
  setFace(els.gameAI, 'celebrate');
  const rect = els.gameAI.getBoundingClientRect();
  spawnBurst(rect.left+rect.width/2, rect.top+rect.height/2, 120, ['#4dfaff','#b06bff','#ffffff','#ffd24d'], 8, 110);

  const ranks = {1:'🐐 LEGEND',2:'🔥 GENIUS',3:'🧠 MASTER',4:'😎 CLUTCH',5:'😮\u200d💨 SURVIVOR'};
  els.endEmoji.textContent = '🐐';
  els.endTitle.textContent = 'YOU ARE THE GOAT';
  els.endTitle.className = 'end-title win';
  els.endRank.textContent = ranks[state.guessesUsed] || '';
  els.endSecret.textContent = state.secret;
  els.endStats.textContent = 'GUESSES USED: ' + state.guessesUsed;

  await sleep(900);
  showScreen('end');
}

async function handleLoss(){
  audio.cutToSilence();
  setFace(els.gameAI, 'smug');
  showSpeech(els.gameSpeech, '"'+randomLine(LINES.smugWin)+'"');
  await sleep(1100);
  audio.playDefeatTone();

  els.endEmoji.textContent = '💀';
  els.endTitle.textContent = 'AI COOKED YOU';
  els.endTitle.className = 'end-title lose';
  els.endRank.textContent = '';
  els.endSecret.textContent = state.secret;
  els.endStats.textContent = 'GUESSES USED: ' + state.guessesUsed;

  await sleep(700);
  showScreen('end');
}

els.againBtn.addEventListener('click', async ()=>{
  audio.click();
  audio.cutToSilence();
  setBodyTension(0);
  document.body.className='';
  showScreen('think');
  newGame();
  await runThinkingSequence();
  showScreen('game');
  beginRound();
});

// prevent accidental page zoom / scroll on mobile
document.addEventListener('touchmove', function(e){ e.preventDefault(); }, {passive:false});
document.addEventListener('gesturestart', function(e){ e.preventDefault(); });

})();
