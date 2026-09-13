
(function(){
"use strict";

const $=id=>document.getElementById(id);
const screens=["title","howto-screen","ready","play-screen","result","final","leaderboard"];
function show(id){screens.forEach(x=>$(x).classList.remove("active"));$(id).classList.add("active");}

let audioCtx=null,soundOn=true;
function ac(){if(!audioCtx)audioCtx=new(window.AudioContext||window.webkitAudioContext)();return audioCtx}
function tone(f,d,t="sine",v=.16,delay=0){if(!soundOn)return;try{let c=ac(),o=c.createOscillator(),g=c.createGain(),n=c.currentTime+delay;o.type=t;o.frequency.setValueAtTime(f,n);g.gain.setValueAtTime(.0001,n);g.gain.exponentialRampToValueAtTime(v,n+.01);g.gain.exponentialRampToValueAtTime(.0001,n+d);o.connect(g);g.connect(c.destination);o.start(n);o.stop(n+d+.02)}catch(e){}}
function countdownSfx(){tone(660,.1,"square",.12)}
function goSfx(){tone(880,.08,"square",.18);tone(1320,.14,"square",.14,.08)}
function buzzSfx(){tone(180,.08,"sawtooth",.28);tone(90,.15,"square",.2,.02)}
function finalAlertSfx(){
  // High-priority emergency-style warning: three escalating alerts followed by a deep buzzer.
  if(!soundOn)return;
  try{ac().resume()}catch(e){}
  tone(520,.12,"square",.22,0);
  tone(520,.12,"square",.22,.22);
  tone(760,.16,"square",.25,.44);
  tone(980,.20,"sawtooth",.22,.68);
  tone(120,.42,"sawtooth",.28,.94);
  tone(70,.32,"square",.22,1.10);
  vibrate([90,70,90,70,140]);
}
function finalStartSfx(){
  // Short final-buzzer sting immediately before the last round begins.
  tone(150,.10,"sawtooth",.28,0);
  tone(85,.20,"square",.25,.08);
  tone(740,.10,"square",.22,.30);
  tone(1100,.18,"square",.18,.40);
  vibrate([80,60,140]);
}
function resultSfx(){tone(520,.08);tone(780,.13,"sine",.13,.08)}
function winSfx(){[523,659,784,1046].forEach((f,i)=>tone(f,.2,"triangle",.18,i*.1))}
function vibrate(ms){try{navigator.vibrate&&navigator.vibrate(ms)}catch(e){}}

/* WGPlayground ad bridge: never blocks gameplay if the WGPlayer tag is unavailable. */
function wgMidroll(resume){
  let done=false;
  const continueGame=()=>{if(done)return;done=true;try{resume()}catch(e){}};
  try{
    const p=window.preroll;
    const name=p&&p.config&&p.config.loaderObjectName;
    const loader=name&&window[name];
    if(loader&&typeof loader.refetchAd==='function'){
      loader.refetchAd(continueGame);
      setTimeout(continueGame,8000);
      return;
    }
  }catch(e){}
  continueGame();
}

/* Background */
const bg=$("bg"),bc=bg.getContext("2d");let parts=[];
function resize(){bg.width=innerWidth*devicePixelRatio;bg.height=innerHeight*devicePixelRatio}
function initParts(){parts=[];for(let i=0;i<Math.min(80,Math.floor(innerWidth*innerHeight/18000));i++)parts.push({x:Math.random()*innerWidth,y:Math.random()*innerHeight,r:.4+Math.random()*1.4,vx:(Math.random()-.5)*.12,vy:(Math.random()-.5)*.12})}
function bgLoop(){bc.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0);bc.clearRect(0,0,innerWidth,innerHeight);
bc.strokeStyle="rgba(123,131,168,.045)";for(let x=0;x<innerWidth;x+=46){bc.beginPath();bc.moveTo(x,0);bc.lineTo(x,innerHeight);bc.stroke()}for(let y=0;y<innerHeight;y+=46){bc.beginPath();bc.moveTo(0,y);bc.lineTo(innerWidth,y);bc.stroke()}
parts.forEach(p=>{p.x+=p.vx;p.y+=p.vy;if(p.x<0)p.x=innerWidth;if(p.x>innerWidth)p.x=0;if(p.y<0)p.y=innerHeight;if(p.y>innerHeight)p.y=0;bc.beginPath();bc.fillStyle="rgba(34,211,238,.35)";bc.arc(p.x,p.y,p.r,0,Math.PI*2);bc.fill()});requestAnimationFrame(bgLoop)}
addEventListener("resize",()=>{resize();initParts()});resize();initParts();bgLoop();

/* Score Attack state */
const G={
  round:1,total:5,target:4,goAt:0,buzzed:false,raf:0,
  score:0,streak:0,roundScore:0,aiTime:0,aiRoundScore:0,aiScore:0,
  difficulty:"moderate",playerName:"YOU"
};

/* Targets are always under 10 seconds. Decimal-heavy targets make later rounds feel less predictable. */
function targetForRound(r){
  const min=1.85, max=8.75;
  let t=min + Math.random()*(max-min);
  if(r>=2) t += (Math.random()<.55 ? Math.random()*.9 : 0);
  return Math.max(1.25, Math.min(9.20, Number(t.toFixed(Math.random()<.62?2:1))));
}
function aiErrorRange(){
  return {easy:.38, moderate:.15, hard:.045}[G.difficulty];
}
function aiReactionPenalty(){
  return {easy:.18, moderate:.08, hard:.025}[G.difficulty];
}
function calculateAITime(){
  const spread=aiErrorRange();
  const signed=(Math.random()*2-1)*spread;
  const penalty=aiReactionPenalty();
  return Math.max(.45, G.target + signed + penalty);
}
function difficultyLabel(){
  return G.difficulty.charAt(0).toUpperCase()+G.difficulty.slice(1);
}

function rating(diff){
  const d=Math.abs(diff);
  if(d<=.02)return["PERFECT!","#ffd166"];
  if(d<=.05)return["AMAZING!","#3ee6a8"];
  if(d<=.10)return["GREAT!","#22d3ee"];
  if(d<=.20)return["CLOSE!","#a855f7"];
  return[diff<0?"EARLY":"LATE","#ff3b30"];
}
function scoreFor(diff){
  const d=Math.abs(diff);
  let base=Math.max(50,Math.round(1000/(1+d*16)));
  if(d<=.02)base+=500;
  const mult=1+Math.min(G.streak,8)*.25;
  return Math.round(base*mult);
}

function startRun(){
  G.round=1;G.score=0;G.streak=0;G.aiScore=0;G.aiRoundScore=0;
  startRound();
}
function startRound(){
  G.target=targetForRound(G.round); G.aiTime=calculateAITime();
  $("ready-round").textContent=`ROUND ${G.round} / ${G.total}`;
  $("ready-target").textContent=G.target.toFixed(2)+"s"; $("ready-ai").textContent="AI READY";
  $("count").textContent="3";
  show("ready");
  let i=3;
  const timer=setInterval(()=>{
    i--;
    if(i>0){$("count").textContent=i;$("count").classList.remove("pop");void $("count").offsetWidth;$("count").classList.add("pop");countdownSfx()}
    else{clearInterval(timer);$("count").textContent="";$("go").classList.remove("show");void $("go").offsetWidth;$("go").classList.add("show");goSfx();setTimeout(beginPlay,260)}
  },650);
}
function beginPlay(){
  G.buzzed=false;G.goAt=performance.now();
  $("hud-round").textContent=`${G.round}/${G.total}`;
  $("hud-score").textContent=G.score;
  $("hud-streak").textContent="×"+G.streak; $("you-live").textContent=G.score.toLocaleString(); $("ai-live").textContent=G.aiScore.toLocaleString();
  $("play-target").textContent=G.target.toFixed(2)+"s";
  $("timer").innerHTML=`0.00<span class="unit">s</span>`;
  $("buzz").classList.remove("pressed");$("buzz").classList.add("idle");
  show("play-screen");tick();
}
function tick(){
  if(G.buzzed)return;
  const elapsed=(performance.now()-G.goAt)/1000;
  $("timer").innerHTML=elapsed.toFixed(2)+'<span class="unit">s</span>'; $("you-live").textContent=G.score.toLocaleString(); $("ai-live").textContent=G.aiScore.toLocaleString();
  G.raf=requestAnimationFrame(tick);
}
function pressBuzz(e){
  if(e)e.preventDefault();
  if(G.buzzed||!$("play-screen").classList.contains("active"))return;
  G.buzzed=true;cancelAnimationFrame(G.raf);
  const elapsed=(performance.now()-G.goAt)/1000,diff=elapsed-G.target;
  const pts=scoreFor(diff);G.roundScore=pts;G.score+=pts;
  const aiDiff=G.aiTime-G.target; const aiPts=scoreFor(aiDiff);
  G.aiRoundScore=aiPts; G.aiScore+=aiPts;
  if(Math.abs(diff)<=.20)G.streak++;else G.streak=0;
  $("buzz").classList.remove("idle");$("buzz").classList.add("pressed");
  $("burst").classList.remove("go");void $("burst").offsetWidth;$("burst").classList.add("go");
  $("play-stage").classList.remove("shake");void $("play-stage").offsetWidth;$("play-stage").classList.add("shake");
  $("timer").innerHTML=elapsed.toFixed(2)+'<span class="unit">s</span>';
  buzzSfx();vibrate(35);
  setTimeout(()=>showResult(elapsed,diff,pts),430);
}
$("buzz-hit").addEventListener("pointerdown",pressBuzz);
addEventListener("keydown",e=>{if((e.code==="Space"||e.code==="Enter")&&$("play-screen").classList.contains("active"))pressBuzz(e)});

function showResult(elapsed,diff,pts){
  const aiDiff=G.aiTime-G.target;
  $("result-round").textContent=`ROUND ${G.round} RESULT`;
  $("result-target").textContent=G.target.toFixed(2)+"s";
  $("result-time").innerHTML=elapsed.toFixed(2)+'<span class="unit">s</span>';
  $("result-diff").textContent=Math.abs(diff).toFixed(2)+"s "+(diff<0?"EARLY":"LATE");
  $("result-diff").style.color=diff<0?"#22d3ee":"#ff3b30";
  $("ai-score-number").innerHTML=G.aiTime.toFixed(2)+'<span class="unit">s</span>';
  $("ai-diff").textContent=Math.abs(aiDiff).toFixed(2)+"s "+(aiDiff<0?"EARLY":"LATE");
  $("round-score-you").textContent=pts.toLocaleString();
  $("round-score-ai").textContent=G.aiRoundScore.toLocaleString();
  ["result-time","result-diff","ai-score-number","ai-diff","simple-score"].forEach(id=>{
    const el=$(id);el.classList.remove("reveal-show");el.classList.add("reveal-hidden");
  });
  show("result");
  resultSfx();
  const reveal=(id,delay)=>setTimeout(()=>{const el=$(id);el.classList.remove("reveal-hidden");el.classList.add("reveal-show")},delay);
  reveal("result-time",180);
  reveal("result-diff",500);
  reveal("ai-score-number",820);
  reveal("ai-diff",1080);
  reveal("simple-score",1300);
  setTimeout(()=>{
    const nextBtn=$("next-round-btn");
    nextBtn.textContent=G.round<G.total?"NEXT ROUND":"SEE FINAL RESULT";
    nextBtn.style.display="block";
    nextBtn.disabled=false;
  },1550);
}
/* Local leaderboard */
function getScores(){try{return JSON.parse(localStorage.getItem("buzztime_high_scores")||"[]")}catch(e){return[]}}
function saveScore(score){
  const scores=getScores();scores.push({score:Math.floor(score),date:new Date().toLocaleDateString()});
  scores.sort((a,b)=>b.score-a.score);const top=scores.slice(0,10);
  try{localStorage.setItem("buzztime_high_scores",JSON.stringify(top))}catch(e){}
  return top;
}
function renderBoard(){
  const scores=getScores();const wrap=$("board");wrap.innerHTML="";
  if(!scores.length){wrap.innerHTML='<div class="small-note" style="text-align:center">NO SCORES YET — SET THE FIRST RECORD.</div>';return}
  scores.forEach((s,i)=>{
    const row=document.createElement("div");row.className="row"+(i===0?" best":"");
    row.innerHTML=`<div class="place">${["🥇","🥈","🥉"][i]||i+1}</div><div class="rname">RUN ${i+1}</div><div class="rscore">${s.score.toLocaleString()}</div>`;
    wrap.appendChild(row);
  });
}

const comebackLines = [
  "ONE ROUND CAN CHANGE EVERYTHING.",
  "NEVER COUNT YOURSELF OUT.",
  "FALL BEHIND. FINISH AHEAD.",
  "THE SCORE ISN'T OVER UNTIL IT'S OVER.",
  "LOSE THE ROUND. WIN THE SHOWDOWN.",
  "A COMEBACK ONLY NEEDS ONE PERFECT MOMENT."
];
function setComebackLine(){
  const el=$("comeback-line");
  if(!el) return;
  if(G.score < G.aiScore){
    el.textContent="YOU'RE LOSING RIGHT NOW — BUT YOU CAN STILL WIN.";
  }else if(G.score > G.aiScore){
    el.textContent="YOU'RE WINNING RIGHT NOW — BUT YOU CAN STILL LOSE.";
  }else{
    el.textContent="IT'S TIED — ONE PERFECT BUZZ CAN CHANGE EVERYTHING.";
  }
}

function finishRun(){
  const top=saveScore(G.score);
  $("final-score").textContent=G.score.toLocaleString();
  $("final-ai-score").textContent=G.aiScore.toLocaleString();
  $("final-best-note").textContent=top[0]&&top[0].score===G.score?"NEW HIGH SCORE!":"BEST "+top[0].score.toLocaleString();
  const result=G.score>G.aiScore?"YOU FINISH AHEAD":G.score<G.aiScore?"AI FINISHES AHEAD":"TOTALS TIED";
  $("final-vs").textContent=`YOU ${G.score.toLocaleString()} · AI ${G.aiScore.toLocaleString()} · ${result}`;
  $("final-vs").className="final-vs "+(G.score>G.aiScore?"you-win":G.score<G.aiScore?"ai-win":"draw");
  $("final-tagline").textContent=result==="YOU FINISH AHEAD"?"PRECISION PAID OFF.":result==="AI FINISHES AHEAD"?"THE AI OUTSCORED YOU — RUN IT BACK.":"FIVE ROUNDS. ONE FINAL TOTAL.";
  $("final-round-score").textContent="CUMULATIVE SCORE · 5 ROUNDS";
  winSfx();launchConfetti();show("final");
}
function launchConfetti(){
  const c=$("confetti"),ctx=c.getContext("2d");c.width=innerWidth*devicePixelRatio;c.height=innerHeight*devicePixelRatio;
  const arr=Array.from({length:110},()=>({x:Math.random()*innerWidth,y:-20-Math.random()*innerHeight*.4,vx:(Math.random()-.5)*2,vy:2+Math.random()*3,s:4+Math.random()*6,r:Math.random()*6}));
  let start=performance.now();
  function f(now){ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0);ctx.clearRect(0,0,innerWidth,innerHeight);arr.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.r+=.08;ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.r);ctx.fillStyle=["#ffd166","#22d3ee","#a855f7","#f472b6","#3ee6a8"][Math.floor(Math.random()*5)];ctx.fillRect(-p.s/2,-2,p.s,4);ctx.restore()});if(now-start<3800)requestAnimationFrame(f);else ctx.clearRect(0,0,innerWidth,innerHeight)}requestAnimationFrame(f)
}

/* Navigation */
$("next-round-btn").onclick=()=>{
  const btn=$("next-round-btn");
  if(btn.disabled)return;
  btn.disabled=true;
  btn.style.display="none";
  if(G.round<G.total){
    G.round++;
    const begin=()=>{
      if(G.round===G.total){finalStartSfx();setTimeout(startRound,260);}
      else startRound();
    };
    wgMidroll(begin);
  }else{
    finishRun();
  }
};
function userStart(e){
  if(e){e.preventDefault();e.stopPropagation();}
  try{ac().resume()}catch(e){}
  if(!$("title").classList.contains("active"))return;
  startRun();
}
$("tap-start").addEventListener("pointerdown",userStart);
$("tap-start").addEventListener("keydown",e=>{if(e.code==="Space"||e.code==="Enter")userStart(e)});
$("howto-back").onclick=()=>show("title");
$("again").onclick=()=>startRun();
$("leaderboard-btn").onclick=()=>{renderBoard();show("leaderboard")};
$("board-back").onclick=()=>show("final");
$("main-menu").onclick=()=>show("title");


})();
