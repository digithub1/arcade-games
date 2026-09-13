(() => {
'use strict';
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const W = 1280, H = 720;
const TAU = Math.PI*2;
let renderDpr=1;
function syncBackingStore(){
  renderDpr=Math.max(1,Math.min(2,window.devicePixelRatio||1));
  const rw=Math.round(W*renderDpr), rh=Math.round(H*renderDpr);
  if(canvas.width!==rw||canvas.height!==rh){canvas.width=rw;canvas.height=rh;}
  ctx.setTransform(renderDpr,0,0,renderDpr,0,0);
  ctx.imageSmoothingEnabled=true;
  ctx.imageSmoothingQuality='high';
}
syncBackingStore();
window.addEventListener('resize',syncBackingStore,{passive:true});

// Branded front-cover artwork. Gameplay still has a vector fallback if it has not loaded yet.
const coverArt = new Image();
let coverArtReady = false;
coverArt.onload = () => { coverArtReady = true; };
coverArt.src = 'artwork/cover-1280x720.webp';
const brandArt = new Image();
let brandArtReady = false;
brandArt.onload = () => { brandArtReady = true; };
brandArt.src = 'artwork/breymantech-logo.webp';
const logoArt = new Image();
let logoArtReady = false;
logoArt.onload = () => { logoArtReady = true; };
logoArt.src = 'artwork/logo-transparent.webp';

const dinerRoomArt = new Image();
let dinerRoomReady = false;
dinerRoomArt.onload = () => { dinerRoomReady = true; };
dinerRoomArt.src = 'assets/diner_room.webp';

const ART = {};
function loadArt(name, src){
  const im = new Image();
  im.src = src;
  ART[name] = im;
  return im;
}
[
  ['waitress_idle','assets/waitress_anim/idle_0.webp'],
  ['customer_business','assets/customers/business.webp'],['customer_red','assets/customers/red.webp'],
  ['customer_blonde','assets/customers/blonde.webp'],['customer_grandma','assets/customers/grandma.webp'],
  ['customer_tourist','assets/customers/tourist.webp'],['customer_hoodie','assets/customers/hoodie.webp'],
  ['pause_icon','assets/pause_icon.webp'],['coin_icon','assets/coin_icon.webp'],
  ['food_burger','assets/food_burger.webp'],['food_fries','assets/food_fries.webp'],['food_hotdog','assets/food_hotdog.webp'],
  ['food_salad','assets/food_salad.webp'],['food_pasta','assets/food_pasta.webp'],['food_cake','assets/food_cake.webp'],['food_coffee','assets/food_coffee.webp'],['food_sandwich','assets/food_sandwich.webp'],
  ['heart','assets/heart.webp'],['coin','assets/coin.webp'],['alert','assets/alert.webp'],
  ['table_0','assets/table_0.webp'],['table_1','assets/table_1.webp'],['table_2','assets/table_2.webp'],['table_3','assets/table_3.webp'],['table_4','assets/table_4.webp'],['table_5','assets/table_5.webp']

].forEach(([n,src])=>loadArt(n,src));

const WAIT_FRAMES={idle:[ART.waitress_idle],right:[],left:[],up:[],down:[]};
for(const dir of ['right','left','up','down']){
  for(let i=0;i<4;i++) WAIT_FRAMES[dir].push(loadArt(`waitress_${dir}_${i}`,`assets/waitress_anim/${dir}_${i}.webp`));
}
const CUSTOMER_KEYS=['customer_business','customer_red','customer_blonde','customer_grandma','customer_tourist','customer_hoodie'];

const bgmMenu = new Audio('audio/menu-bgm.mp3');
const bgmPlay = new Audio('audio/gameplay-bgm.mp3');
for(const a of [bgmMenu,bgmPlay]){a.loop=true;a.preload='auto';a.volume=.34;}
let bgmUnlocked=false, activeBgm=null;
function desiredBgm(){ return screen==='playing' ? bgmPlay : bgmMenu; }
function syncBgm(){
  if(!bgmUnlocked) return;
  const wanted=desiredBgm();
  if(activeBgm!==wanted){
    if(activeBgm){ try{activeBgm.pause();}catch{} }
    activeBgm=wanted;
  }
  for(const a of [bgmMenu,bgmPlay]) a.volume = muted ? 0 : .34;
  if(!muted && activeBgm && activeBgm.paused){ activeBgm.play().catch(()=>{}); }
}
function unlockBgm(){ bgmUnlocked=true; syncBgm(); }
function setMuted(v){ muted=!!v; syncBgm(); }

const C = {
  navy:'#18324b', navy2:'#10273b', ink:'#172033', cream:'#fff6e7', floor:'#f6d9aa', floor2:'#efc996',
  red:'#ef4f48', red2:'#c93b3b', coral:'#ff735f', yellow:'#ffbf3f', gold:'#ffcf49', green:'#39b86d', mint:'#74d9a2',
  blue:'#47a7e8', purple:'#8b6ad9', pink:'#ed76a8', white:'#fff', gray:'#7d8793', dark:'#282f3a', brown:'#7b4a2f',
  booth:'#e94b4b', counter:'#f7efe3', black:'#0e1520'
};

let sfxCtx = null, muted = false;
function beep(freq=440, dur=.08, type='sine', vol=.035){
  if(muted) return;
  try{
    sfxCtx ||= new (window.AudioContext||window.webkitAudioContext)();
    const o=sfxCtx.createOscillator(), g=sfxCtx.createGain();
    o.type=type;o.frequency.value=freq;g.gain.value=vol;o.connect(g);g.connect(sfxCtx.destination);
    o.start();g.gain.exponentialRampToValueAtTime(.0001,sfxCtx.currentTime+dur);o.stop(sfxCtx.currentTime+dur);
  }catch{}
}
function chime(){ beep(660,.06,'triangle',.04); setTimeout(()=>beep(880,.09,'triangle',.035),60); }
function failSfx(){ beep(170,.14,'sawtooth',.028); }

const SAVE_KEY='happy_diner_rush_save_v2';
const DEFAULT_SAVE={
  coins:300,stars:0,unlocked:1,bestScores:{},secretDone:{},
  upgrades:{speed:0,patience:0,tips:0},lastBonusDate:'',streak:0,
  daily:null,tutorialSeen:false
};
function freshDefault(){ return JSON.parse(JSON.stringify(DEFAULT_SAVE)); }
function loadSave(){
  try{
    const raw=JSON.parse(localStorage.getItem(SAVE_KEY)||'{}');
    const out=Object.assign(freshDefault(),raw);
    out.upgrades=Object.assign({},DEFAULT_SAVE.upgrades,raw.upgrades||{});
    return out;
  } catch{ return freshDefault(); }
}
let save=loadSave();
function persist(){ try{ localStorage.setItem(SAVE_KEY,JSON.stringify(save)); }catch{} }
function dateKey(){ const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`; }
function hashString(s){ let h=2166136261; for(const ch of s){h^=ch.charCodeAt(0);h=Math.imul(h,16777619);} return h>>>0; }
function seeded(seed){ let x=seed>>>0; return ()=>{x=(x+0x6D2B79F5)|0;let t=Math.imul(x^x>>>15,1|x);t=t+Math.imul(t^t>>>7,61|t)^t;return ((t^t>>>14)>>>0)/4294967296;}; }
function ensureDaily(){
  const d=dateKey();
  if(!save.daily||save.daily.date!==d){
    const r=seeded(hashString(d));
    const pool=[
      ()=>({type:'served',goal:12+Math.floor(r()*9),label:'Serve guests'}),
      ()=>({type:'perfect',goal:4+Math.floor(r()*4),label:'Perfect service'}),
      ()=>({type:'tips',goal:800+Math.floor(r()*7)*100,label:'Earn tips'}),
      ()=>({type:'matches',goal:3+Math.floor(r()*3),label:'Favorite-seat matches'}),
      ()=>({type:'levels',goal:2+Math.floor(r()*2),label:'Clear shifts'}),
      ()=>({type:'secrets',goal:1+Math.floor(r()*2),label:'Complete secret missions'})
    ];
    for(let i=pool.length-1;i>0;i--){const j=Math.floor(r()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]];}
    save.daily={
      date:d,claimed:false,adBonusClaimed:false,
      metrics:{served:0,perfect:0,tips:0,matches:0,levels:0,secrets:0},
      missions:pool.slice(0,3).map(fn=>fn())
    };
    persist();
  } else {
    save.daily.metrics=Object.assign({served:0,perfect:0,tips:0,matches:0,levels:0,secrets:0},save.daily.metrics||{});
    if(typeof save.daily.adBonusClaimed!=='boolean') save.daily.adBonusClaimed=false;
  }
}
ensureDaily();

const LEVELS = Array.from({length:20},(_,i)=>{
  const n=i+1;
  const district=n<=5?'Sunny Side':n<=10?'Neon Avenue':n<=15?'Garden Terrace':'Skyline Bistro';
  return {n,district,target:850+(n-1)*250,duration:78+Math.min(n*2,24),guests:8+n*2,spawn:4.8-Math.min(n*.09,1.8),tables:Math.min(4+Math.floor((n-1)/4),6)};
});
const SECRET_BUILDERS=[
  lv=>({id:'perfect',text:`Serve ${Math.min(3+Math.floor(lv/5),6)} PERFECT orders`,check:m=>m.perfect>=Math.min(3+Math.floor(lv/5),6)}),
  lv=>({id:'combo',text:`Reach a x${Math.min(4+Math.floor(lv/6),6)} combo`,check:m=>m.maxCombo>=Math.min(4+Math.floor(lv/6),6)}),
  lv=>({id:'noWalk',text:'Finish with no walk-outs',check:m=>m.lost===0 && m.served>=Math.min(6,m.cfg.guests)}),
  lv=>({id:'tips',text:`Earn ${500+lv*70}+ tips`,check:m=>m.tips>=500+lv*70}),
  lv=>({id:'matches',text:`Make ${Math.min(2+Math.floor(lv/6),4)} favorite-seat matches`,check:m=>m.matches>=Math.min(2+Math.floor(lv/6),4)}),
  lv=>({id:'fastClean',text:`Quick-clean ${Math.min(2+Math.floor(lv/7),4)} tables`,check:m=>m.fastClean>=Math.min(2+Math.floor(lv/7),4)}),
  lv=>({id:'scoreRush',text:'Reach 120% of the shift goal',check:m=>m.score>=m.cfg.target*1.2}),
  lv=>({id:'service',text:`Serve ${Math.min(7+Math.floor(lv/3),14)} guests`,check:m=>m.served>=Math.min(7+Math.floor(lv/3),14)}),
  lv=>({id:'cleanCombo',text:'Get x3 combo and 2 quick-cleans',check:m=>m.maxCombo>=3&&m.fastClean>=2}),
  lv=>({id:'precision',text:'3 perfect orders with zero walk-outs',check:m=>m.perfect>=3&&m.lost===0}),
  lv=>({id:'favorites',text:'2 favorite seats and x3 combo',check:m=>m.matches>=2&&m.maxCombo>=3}),
  lv=>({id:'elite',text:'Beat goal with 4 perfect orders',check:m=>m.score>=m.cfg.target&&m.perfect>=4})
];
function secretFor(level){ return SECRET_BUILDERS[(level*5+7)%SECRET_BUILDERS.length](level); }

let screen='front', hover=null, pointer={x:0,y:0,down:false}, buttons=[];
let toast=null, toastT=0;
let game=null;
let modal=null;

function showInterstitial(type,name){
  window.HDRPortal?.showInterstitial?.(type,name);
}
function showRewarded(name,onReward){
  return window.HDRPortal?.showRewarded?.(name,onReward) || Promise.resolve(false);
}
function enterMainMenu(){
  screen='menu';
  modal=null;
  chime();
  showInterstitial('browse','enter-menu');
}

function rr(x,y,w,h,r=14){
  const q=Math.min(r,w/2,h/2); ctx.beginPath();ctx.moveTo(x+q,y);ctx.arcTo(x+w,y,x+w,y+h,q);ctx.arcTo(x+w,y+h,x,y+h,q);ctx.arcTo(x,y+h,x,y,q);ctx.arcTo(x,y,x+w,y,q);ctx.closePath();
}
function fillRR(x,y,w,h,r,color,stroke=null,lw=2){rr(x,y,w,h,r);ctx.fillStyle=color;ctx.fill();if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=lw;ctx.stroke();}}
function txt(t,x,y,size=24,color=C.ink,align='left',weight='700'){ctx.fillStyle=color;ctx.textAlign=align;ctx.textBaseline='middle';ctx.font=`${weight} ${size}px Arial`;ctx.fillText(t,x,y);}
function small(t,x,y,size=16,color=C.ink,align='left'){txt(t,x,y,size,color,align,'600');}
function shadow(alpha=.18,blur=10,oy=5){ctx.shadowColor=`rgba(0,0,0,${alpha})`;ctx.shadowBlur=blur;ctx.shadowOffsetY=oy;}
function noShadow(){ctx.shadowColor='transparent';ctx.shadowBlur=0;ctx.shadowOffsetY=0;}
function addBtn(id,x,y,w,h,label,action,opt={}){
  const inside=pointer.x>=x&&pointer.x<=x+w&&pointer.y>=y&&pointer.y<=y+h;
  buttons.push({id,x,y,w,h,action});
  const color=opt.color||C.red, disabled=opt.disabled;
  shadow(inside&&!disabled?.24:.14,inside?14:8,4);
  fillRR(x,y,w,h,opt.r||16,disabled?'#8e98a4':inside?lighten(color,12):color,opt.stroke||'rgba(255,255,255,.45)',2);
  noShadow(); txt(label,x+w/2,y+h/2+(opt.dy||0),opt.size||24,disabled?'#dce1e6':opt.text||C.white,'center','900');
  return inside;
}
function lighten(hex, amt){
  const n=parseInt(hex.slice(1),16);let r=(n>>16)+amt,g=((n>>8)&255)+amt,b=(n&255)+amt;return '#'+[r,g,b].map(v=>Math.max(0,Math.min(255,v)).toString(16).padStart(2,'0')).join('');
}
function pill(x,y,w,h,label,color=C.navy){fillRR(x,y,w,h,h/2,color);txt(label,x+w/2,y+h/2,15,C.white,'center','800');}

function drawDinerBackdrop(){
  if(dinerRoomReady){
    ctx.drawImage(dinerRoomArt,0,0,W,H);
    return;
  }
  ctx.fillStyle='#f9e8d2';ctx.fillRect(0,0,W,360);
  ctx.fillStyle='#f6d9aa';ctx.fillRect(0,360,W,H-360);
}
function drawPlant(x,y,s=1){ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.fillStyle='#8a5b3e';ctx.fillRect(-18,18,36,38);ctx.fillStyle='#42a960';for(let a=-1.1;a<=1.1;a+=.36){ctx.beginPath();ctx.ellipse(Math.sin(a)*26,-4+Math.cos(a)*10,10,34,a,0,TAU);ctx.fill();}ctx.restore();}

function drawLogo(x,y,scale=1){
  if(logoArtReady){
    const w=560*scale,h=w*(logoArt.naturalHeight/logoArt.naturalWidth);
    shadow(.20,10,4);ctx.drawImage(logoArt,x-w/2,y-h/2,w,h);noShadow();return;
  }
  fillRR(x-260*scale,y-62*scale,520*scale,124*scale,28*scale,C.navy,'#fff0d0',6*scale);
  txt('HAPPY DINER',x,y-13*scale,44*scale,C.gold,'center','1000');
}
function drawBreymantech(x,y,scale=1){
  if(brandArtReady){
    const w=900*scale,h=160*scale;
    shadow(.25,12,5);ctx.drawImage(brandArt,x-w/2,y-h/2,w,h);noShadow();
    return;
  }
  ctx.save();ctx.translate(x,y);ctx.scale(scale,scale);shadow(.25,12,5);
  fillRR(-255,-34,510,68,18,'rgba(16,39,59,.96)',C.gold,4);noShadow();
  txt('BREYMANTECH',0,-5,31,C.white,'center','1000');
  small('2026 • ORIGINAL HTML5 GAMES',0,20,12,C.gold,'center');
  ctx.restore();
}
function drawWaitress(x,y,s=1,dir=1,carry=false){
  let im=ART.waitress_idle;
  if(game && screen==='playing'){
    const w=game.waitress;
    const direction=w.dir||'down';
    const frames=WAIT_FRAMES[direction]||WAIT_FRAMES.down;
    if(w.moving && frames.length){
      const idx=Math.floor((w.animT||0)*9)%frames.length;
      im=frames[idx]||ART.waitress_idle;
    }
  }
  if(im && im.complete && im.naturalWidth){
    const h=126*s, w=h*(im.naturalWidth/im.naturalHeight);
    ctx.save();ctx.translate(x,y);
    shadow(.18,7,4);ctx.drawImage(im,-w/2,-h*.91,w,h);noShadow();ctx.restore();return;
  }
  ctx.fillStyle='#2f8dd0';ctx.beginPath();ctx.arc(x,y-28,24,0,TAU);ctx.fill();
}
function drawCustomer(c,x,y,s=1){
  const idx=(c.appearance ?? c.id ?? c.color ?? 0)%CUSTOMER_KEYS.length;
  let key=CUSTOMER_KEYS[idx];
  if(c.type==='vip') key='customer_blonde';
  if(c.type==='critic') key=(idx%2)?'customer_business':'customer_grandma';
  const im=ART[key];
  if(im && im.complete && im.naturalWidth){
    const h=98*s, w=h*(im.naturalWidth/im.naturalHeight);
    shadow(.14,5,3);ctx.drawImage(im,x-w/2,y-h*.86,w,h);noShadow();
    if(c.type==='vip') txt('★',x+27*s,y-h*.76,15,C.gold,'center','900');
    if(c.type==='critic') txt('!',x+27*s,y-h*.76,15,C.red,'center','900');
    return;
  }
  ctx.fillStyle=C.red;ctx.beginPath();ctx.arc(x,y-18,20*s,0,TAU);ctx.fill();
}
function drawCoinIcon(x,y,size=28){
  const im=ART.coin_icon||ART.coin;
  if(im && im.complete && im.naturalWidth){
    ctx.drawImage(im,x-size/2,y-size/2,size,size);
  }else{
    ctx.fillStyle=C.gold;ctx.beginPath();ctx.arc(x,y,size*.42,0,TAU);ctx.fill();
  }
}
function addImageBtn(id,x,y,w,h,image,action,opt={}){
  const inside=pointer.x>=x&&pointer.x<=x+w&&pointer.y>=y&&pointer.y<=y+h;
  buttons.push({id,x,y,w,h,action});
  shadow(inside?.28:.16,inside?14:7,4);
  fillRR(x,y,w,h,opt.r||15,inside?'#ff6e58':'#e9443d','rgba(255,255,255,.55)',2);
  noShadow();
  if(image&&image.complete&&image.naturalWidth){
    const pad=opt.pad||6;ctx.drawImage(image,x+pad,y+pad,w-pad*2,h-pad*2);
  }
  return inside;
}
function drawFood(x,y,type='burger',s=1){
  const map={burger:'food_burger',fries:'food_fries',drink:'food_coffee',salad:'food_salad',cake:'food_cake',hotdog:'food_hotdog',pasta:'food_pasta',sandwich:'food_sandwich'};
  const im=ART[map[type]||'food_burger'];
  if(im && im.complete && im.naturalWidth){
    const h=58*s,w=h*(im.naturalWidth/im.naturalHeight);
    ctx.drawImage(im,x-w/2,y-h/2,w,h);return;
  }
  ctx.fillStyle=C.gold;ctx.beginPath();ctx.arc(x,y,14*s,0,TAU);ctx.fill();
}
function drawHeart(x,y,filled=true,s=1){
  const im=ART.heart;
  if(filled && im && im.complete && im.naturalWidth){const h=31*s,w=h*(im.naturalWidth/im.naturalHeight);ctx.drawImage(im,x-w/2,y-h/2,w,h);return;}
  ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.fillStyle=filled?C.red:'#c8cbd0';ctx.beginPath();ctx.moveTo(0,11);ctx.bezierCurveTo(-19,-2,-16,-18,-6,-18);ctx.bezierCurveTo(0,-18,3,-12,3,-8);ctx.bezierCurveTo(5,-14,9,-18,15,-18);ctx.bezierCurveTo(26,-18,29,-2,0,11);ctx.fill();ctx.restore();
}

function frontCover(){
  // The whole branded splash is clickable; this intentionally comes before the
  // visible button so the button remains the top-most hit target.
  buttons.push({id:'front-anywhere',x:0,y:0,w:W,h:H,action:enterMainMenu});

  if(coverArtReady){
    // The artwork already contains a large BREYMANTECH 2026 logo and a Play Now
    // cue. Do not cover it with extra UI; the whole splash is clickable.
    ctx.drawImage(coverArt,0,0,W,H);
    return;
  }

  // Fallback while the WEBP cover is loading.
  drawDinerBackdrop();
  ctx.fillStyle='rgba(10,25,40,.34)';ctx.fillRect(0,0,W,H);
  drawWaitress(920,430,2.15,1,true);
  drawCustomer({color:2,type:'vip',skin:'#f0b68b',hair:'#463027'},1080,445,1.65);
  drawCustomer({color:4,type:'critic',skin:'#d79a74',hair:'#2c2622'},770,452,1.45);
  drawLogo(420,168,1.06);
  fillRR(110,300,555,116,24,'rgba(255,246,231,.96)',C.white,3);
  txt('SERVE FAST. THINK FASTER.',388,333,27,C.navy,'center','900');
  small('20 shifts • secret missions • daily challenges • upgrades',388,374,17,C.ink,'center');
  small('Original restaurant time-management game',388,399,15,C.red2,'center');
  drawBreymantech(640,515,1.08);
  addBtn('enter',435,585,410,72,'ENTER THE DINER',enterMainMenu,{color:C.green,size:27});
  small('Y8 EDITION',640,680,17,C.white,'center');
}

function menu(){
  drawDinerBackdrop();
  ctx.fillStyle='rgba(16,39,59,.08)';ctx.fillRect(0,0,W,H);
  drawLogo(W/2,132,.76);
  drawBreymantech(995,214,.54);
  drawWaitress(830,315,1.55,1,true);
  const fake={color:2,type:'vip',skin:'#f0b68b',hair:'#4b2d21'};
  drawCustomer(fake,960,320,1.38);
  drawCustomer({color:4,type:'normal',skin:'#d79a74',hair:'#6b3d27'},1095,320,1.30);

  fillRR(92,280,500,138,24,'rgba(255,246,231,.96)',C.white,2);
  txt('Seat • Serve • Smile • Combo!',342,316,29,C.navy,'center','900');
  small('Every shift has a hidden objective.',342,354,18,C.ink,'center');
  small('Daily missions reset each day for bonus coins.',342,383,16,C.red2,'center');

  addBtn('play',130,465,300,74,'PLAY SHIFTS',()=>{screen='levels';chime();},{color:C.green,size:28});
  addBtn('daily',458,465,250,74,'DAILY',()=>{modal='daily';chime();},{color:C.blue,size:27});
  addBtn('shop',736,465,250,74,'UPGRADES',()=>{modal='shop';chime();},{color:C.purple,size:24});
  addBtn('gift',1014,465,92,74,'GIFT',claimDailyBonus,{color:C.gold,text:C.navy,size:18,disabled:save.lastBonusDate===dateKey()});
  addBtn('mute',1130,465,86,74,muted?'MUTED':'SOUND',()=>{setMuted(!muted);beep(500);},{color:C.navy,size:15});

  fillRR(130,565,1086,72,18,'rgba(24,50,75,.94)');
  txt(`STARS ${save.stars}     COINS ${save.coins}     UNLOCKED ${save.unlocked}/20`,673,591,23,C.white,'center','800');
  small(save.lastBonusDate===dateKey()?`Daily gift claimed • streak ${save.streak}`:'Daily gift ready now!',673,620,16,save.lastBonusDate===dateKey()?C.mint:C.gold,'center');
  small('BREYMANTECH 2026',W-28,H-18,16,'rgba(24,50,75,.82)','right');
}
function claimDailyBonus(){
  if(save.lastBonusDate===dateKey()) return;
  const yesterday=new Date();yesterday.setDate(yesterday.getDate()-1);const yd=`${yesterday.getFullYear()}-${String(yesterday.getMonth()+1).padStart(2,'0')}-${String(yesterday.getDate()).padStart(2,'0')}`;
  save.streak=save.lastBonusDate===yd?save.streak+1:1;
  const amt=180+Math.min(save.streak,7)*30;save.coins+=amt;save.lastBonusDate=dateKey();persist();
  showToast(`DAILY GIFT +${amt} COINS`,2.8);chime();
}

function levelSelect(){
  drawDinerBackdrop();ctx.fillStyle='rgba(16,39,59,.78)';ctx.fillRect(0,0,W,H);
  drawLogo(205,86,.48);txt('CHOOSE YOUR SHIFT',660,80,36,C.white,'center','900');
  const cols=5, startX=130,startY=150,bw=190,bh=92,gx=24,gy=22;
  for(let i=0;i<20;i++){
    const lv=LEVELS[i], row=Math.floor(i/cols), col=i%cols, x=startX+col*(bw+gx),y=startY+row*(bh+gy), unlocked=lv.n<=save.unlocked;
    shadow(.18,8,3);fillRR(x,y,bw,bh,18,unlocked?(i%2?C.cream:'#fffaf1'):'#5b6470',unlocked?C.white:'#74808c',2);noShadow();
    txt(`${lv.n}`,x+32,y+30,30,unlocked?C.navy:'#aeb6be','center','900');
    small(lv.district,x+62,y+23,14,unlocked?C.red2:'#aeb6be');
    small(`Goal ${lv.target}`,x+62,y+48,14,unlocked?C.ink:'#aeb6be');
    const best=save.bestScores[lv.n]||0;small(best?`Best ${best}`:'New shift',x+62,y+70,13,unlocked?C.green:'#9ea6ae');
    if(unlocked)buttons.push({id:'lv'+lv.n,x,y,w:bw,h:bh,action:()=>startLevel(lv.n)});else txt('🔒',x+bw-28,y+27,22,'#d3d8dc','center');
  }
  addBtn('back',38,630,150,56,'BACK',()=>screen='menu',{color:C.navy,size:20});
  addBtn('daily2',1005,630,110,56,'DAILY',()=>modal='daily',{color:C.blue,size:18});
  addBtn('shop2',1128,630,110,56,'SHOP',()=>modal='shop',{color:C.purple,size:18});
}

function startLevel(n){
  const cfg=LEVELS[n-1], patienceBonus=1+save.upgrades.patience*.08;
  game={
    cfg,time:cfg.duration,score:0,tips:0,spawnT:1.2,spawned:0,served:0,lost:0,perfect:0,matches:0,fastClean:0,
    combo:0,maxCombo:0,lastServe:-99,secret:secretFor(n),secretDone:false,secretAnnounced:false,
    selectedCustomer:null,queue:[],tables:[],tickets:[],particles:[],paused:false,adPaused:false,ended:false,
    rewardedClaimed:false,rewardRevived:false,baseCoinReward:0,secretRewardGranted:false,
    waitress:{x:640,y:610,tx:640,ty:610,speed:260*(1+save.upgrades.speed*.09),queue:[],carrying:false,dir:'down',moving:false,animT:0},
    patienceBonus
  };
  const positions=[{x:280,y:450,c:0},{x:485,y:455,c:1},{x:690,y:455,c:2},{x:900,y:455,c:3},{x:385,y:585,c:4},{x:800,y:585,c:5}];
  for(let i=0;i<cfg.tables;i++){game.tables.push({id:i,...positions[i],state:'empty',customer:null,dirtySince:0});}
  screen='playing';modal=null;beep(520,.08,'triangle');
  if(!save.tutorialSeen&&n===1) modal='tutorial';

  // "Enter game" and every new level use the start ad type.
  // The adapter applies the global 120-second interstitial cooldown.
  showInterstitial('start',`level-${n}-start`);
}
function spawnCustomer(){
  if(!game||game.spawned>=game.cfg.guests||game.queue.length>=5)return;
  const id=game.spawned++; const special=id>1&&Math.random()<.18?(Math.random()<.45?'critic':'vip'):'normal';
  const skins=['#f0b68b','#d79a74','#b97755','#f6c7a1'];
  game.queue.push({id,state:'waiting',patience:100*game.patienceBonus,appearance:id%CUSTOMER_KEYS.length,color:Math.floor(Math.random()*6),fav:Math.floor(Math.random()*game.cfg.tables),type:special,skin:skins[id%skins.length],hair:['#4b2d21','#6b3d27','#2e2522','#9d5c2e'][id%4],order:['burger','fries','drink','salad','cake'][Math.floor(Math.random()*5)]});
}
function queueAction(kind,target,data){
  if(game.waitress.queue.length>=4){showToast('Action queue full!',1.2);return;}
  game.waitress.queue.push({kind,target,data,started:false});beep(420,.035,'square',.018);
}
function seatSelected(table){
  const c=game.selectedCustomer;if(!c||table.state!=='empty')return;
  const qi=game.queue.indexOf(c);if(qi<0)return;
  queueAction('seat',{x:table.x,y:table.y+12},{c,table});game.selectedCustomer=null;
}
function performAction(a){
  const t=a.data?.table,c=a.data?.c;
  if(a.kind==='seat'){
    if(t.state!=='empty'||!game.queue.includes(c))return;
    game.queue.splice(game.queue.indexOf(c),1);t.customer=c;t.state='thinking';c.state='thinking';c.think=1.2+Math.random()*1.2;c.patience=Math.min(c.patience,100*game.patienceBonus);
    if(c.fav===t.id){
      game.score+=80;game.matches++;save.daily.metrics.matches++;persist();
      particleText(t.x,t.y-55,'FAVORITE SEAT +80',C.green);chime();
    }
  } else if(a.kind==='order'){
    if(t.state!=='wantsOrder')return;t.state='waitingFood';c.state='waitingFood';
    const prep=(c.type==='critic'?3.3:2.5)+Math.random()*1.7;game.tickets.push({table:t,c,time:prep,ready:false});particleText(t.x,t.y-55,'ORDER IN!',C.blue);beep(560,.06,'triangle');
  } else if(a.kind==='serve'){
    if(t.state!=='ready')return;
    const ticket=game.tickets.find(q=>q.table===t);if(!ticket||!ticket.ready)return;
    game.tickets.splice(game.tickets.indexOf(ticket),1);t.state='eating';c.state='eating';c.eat=3.6+Math.random()*2.2;
    const now=performance.now()/1000; game.combo=(now-game.lastServe<7)?game.combo+1:1; game.lastServe=now;game.maxCombo=Math.max(game.maxCombo,game.combo);
    const perfect=c.patience>75*game.patienceBonus; if(perfect)game.perfect++;
    const base=(c.type==='vip'?170:c.type==='critic'?145:110); const tipMul=1+save.upgrades.tips*.1; const gain=Math.round((base+(perfect?70:0)+game.combo*14)*tipMul);
    game.score+=gain;game.tips+=gain;game.served++;
    save.daily.metrics.served++;save.daily.metrics.tips+=gain;if(perfect)save.daily.metrics.perfect++;persist();
    particleText(t.x,t.y-62,`${perfect?'PERFECT! ':''}+${gain}`,perfect?C.gold:C.green);if(game.combo>=2)particleText(t.x,t.y-86,`COMBO x${game.combo}`,C.red);chime();
  } else if(a.kind==='clean'){
    if(t.state!=='dirty')return;
    const age=(performance.now()/1000)-t.dirtySince;if(age<2.5)game.fastClean++;
    t.state='empty';t.customer=null;game.score+=35;particleText(t.x,t.y-54,'CLEAN +35',C.blue);beep(720,.05,'triangle');
  }
}
function particleText(x,y,text,color){game.particles.push({x,y,text,color,t:1.25});}
function grantSecretRewardIfNeeded(){
  if(!game || !game.secretDone || game.secretRewardGranted) return;
  game.secretRewardGranted=true;
  if(!save.secretDone[game.cfg.n]){
    save.secretDone[game.cfg.n]=true;
    save.coins+=120;
    save.daily.metrics.secrets++;
    persist();
  }
}
function endLevel(){
  if(!game||game.ended)return;
  game.ended=true;
  const success=game.score>=game.cfg.target;
  const star1=success,star2=game.score>=game.cfg.target*1.25,star3=game.score>=game.cfg.target*1.55;
  const earned=[star1,star2,star3].filter(Boolean).length;
  const prev=save.bestScores[game.cfg.n]||0;
  save.bestScores[game.cfg.n]=Math.max(prev,Math.round(game.score));

  game.baseCoinReward=success ? Math.round(game.tips*.22)+earned*45 : 0;
  if(success){
    save.unlocked=Math.min(20,Math.max(save.unlocked,game.cfg.n+1));
    save.coins+=game.baseCoinReward;
    save.daily.metrics.levels++;
    save.stars=Math.max(save.stars,Object.entries(save.bestScores).reduce((acc,[n,score])=>acc+starCount(+n,score),0));
  }

  game.secretDone=game.secret.check(game);
  grantSecretRewardIfNeeded();

  persist();
  screen='result';
  modal=null;
  success?chime():failSfx();

  // Result interstitial: win or lose. Cooldown is global in wg-adapter.js.
  showInterstitial('next',success?`level-${game.cfg.n}-win`:`level-${game.cfg.n}-lose`);
}
function starCount(n,score){const l=LEVELS[n-1];if(!l)return 0;return score>=l.target*1.55?3:score>=l.target*1.25?2:score>=l.target?1:0;}

function update(dt){
  if(toastT>0)toastT-=dt;
  if(screen!=='playing'||!game||game.paused||game.adPaused||modal)return;
  game.time-=dt;
  if(game.time<=0){game.time=0;endLevel();return;}
  if(game.spawned<game.cfg.guests){game.spawnT-=dt;if(game.spawnT<=0){spawnCustomer();game.spawnT=game.cfg.spawn*(.75+Math.random()*.5);}}
  // wait queue
  for(const c of [...game.queue]){
    c.patience-=dt*(c.type==='critic'?5.0:3.6);
    if(c.patience<=0){game.queue.splice(game.queue.indexOf(c),1);game.lost++;game.combo=0;particleText(135,610,'WALK-OUT!',C.red);failSfx();}
  }
  // tables
  for(const t of game.tables){const c=t.customer;if(!c)continue;
    if(t.state==='thinking'){c.think-=dt;if(c.think<=0)t.state='wantsOrder';}
    else if(t.state==='wantsOrder'||t.state==='waitingFood'||t.state==='ready'){
      c.patience-=dt*(c.type==='critic'?4.5:2.8);
      if(c.patience<=0){t.customer=null;t.state='dirty';t.dirtySince=performance.now()/1000;game.lost++;game.combo=0;failSfx();}
    } else if(t.state==='eating'){c.eat-=dt;if(c.eat<=0){t.state='dirty';t.dirtySince=performance.now()/1000;t.customer=null;}}
  }
  // tickets
  for(const q of game.tickets){if(!q.ready){q.time-=dt;if(q.time<=0){q.ready=true;if(q.table.state==='waitingFood')q.table.state='ready';beep(780,.06,'triangle');}}}
  // waitress action queue
  const w=game.waitress;
  w.moving=false;
  if(w.queue.length){
    const a=w.queue[0];
    if(!a.started){a.started=true;w.tx=a.target.x;w.ty=a.target.y;}
    const dx=w.tx-w.x,dy=w.ty-w.y,d=Math.hypot(dx,dy);
    if(d<6){
      w.x=w.tx;w.y=w.ty;w.moving=false;performAction(a);w.queue.shift();
    }else{
      w.moving=true;w.animT+=dt;
      if(Math.abs(dx)>Math.abs(dy)) w.dir=dx<0?'left':'right';
      else w.dir=dy<0?'up':'down';
      const step=Math.min(d,w.speed*dt);w.x+=dx/d*step;w.y+=dy/d*step;
    }
  }else{
    w.animT=0;
  }
  if(game.secret.check(game)&&!game.secretAnnounced){
    game.secretAnnounced=true;game.secretDone=true;grantSecretRewardIfNeeded();
    particleText(640,190,'SECRET MISSION COMPLETE! +120',C.gold);
    showToast('SECRET MISSION REVEALED!',2.5);chime();
  }
  for(const p of game.particles)p.t-=dt;game.particles=game.particles.filter(p=>p.t>0);
}

function gameplay(){
  drawDinerBackdrop();
  // queue zone
  fillRR(24,345,175,330,18,'rgba(24,50,75,.88)',C.white,2);txt('WAITING',112,371,18,C.white,'center','900');
  for(let i=0;i<5;i++){ctx.strokeStyle='rgba(255,255,255,.2)';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(45,420+i*52);ctx.lineTo(178,420+i*52);ctx.stroke();}
  game.queue.forEach((c,i)=>{const y=420+i*54;drawCustomer(c,82,y,0.58);drawPatience(c,128,y-12,55);if(game.selectedCustomer===c){ctx.strokeStyle=C.gold;ctx.lineWidth=4;ctx.beginPath();ctx.arc(82,y-8,31,0,TAU);ctx.stroke();}buttons.push({id:'q'+c.id,x:45,y:y-40,w:130,h:50,action:()=>{game.selectedCustomer=c;beep(500,.04,'square');}});});
  // tables
  for(const t of game.tables)drawTable(t);
  // waitress
  const w=game.waitress;drawWaitress(w.x,w.y,.86,1,false);
  // kitchen ticket strip
  fillRR(328,303,630,46,12,'rgba(24,50,75,.92)');small('CHEF QUEUE',350,326,14,C.white);
  game.tickets.slice(0,5).forEach((q,i)=>{const x=465+i*92;fillRR(x,310,78,31,10,q.ready?C.green:C.red);drawFood(x+18,327,q.c.order,.35);small(q.ready?'READY':Math.max(0,q.time).toFixed(1),x+48,326,12,C.white,'center');});
  // HUD top
  fillRR(18,16,1244,70,18,'rgba(16,39,59,.96)',C.white,2);
  txt(`LEVEL ${game.cfg.n}`,45,51,24,C.white); small(game.cfg.district,155,51,15,C.mint);
  txt(`${Math.round(game.score)}`,405,51,26,C.gold,'center');small(`/ ${game.cfg.target}`,472,52,16,C.white);
  const progress=Math.min(1,game.score/game.cfg.target);fillRR(535,35,260,30,15,'#293b4d');fillRR(540,40,250*progress,20,10,progress>=1?C.green:C.gold);
  small('TIME',826,38,11,C.mint,'center');txt(`${Math.ceil(game.time)}`,870,54,25,C.white,'center');
  drawCoinIcon(976,51,30);txt(`${Math.round(game.tips)}`,1020,52,22,C.gold,'left','900');
  addImageBtn('pause',1162,24,64,54,ART.pause_icon,()=>{
    modal='pause';
    showInterstitial('pause',`level-${game.cfg.n}-pause`);
  },{pad:5});
  // info left bottom
  fillRR(22,653,175,48,14,'rgba(16,39,59,.94)');small(`Served ${game.served}/${game.cfg.guests}`,36,670,14,C.white);small(`Lost ${game.lost}   Combo x${game.combo}`,36,691,13,game.lost?C.red:C.mint);
  // action queue
  fillRR(1000,642,240,59,14,'rgba(16,39,59,.92)');small('ACTION QUEUE',1020,659,12,C.mint);small(game.waitress.queue.length?game.waitress.queue.map(a=>a.kind.toUpperCase()).join(' → '):'Ready',1020,684,13,C.white);
  // secret hidden
  fillRR(220,653,340,48,14,'rgba(16,39,59,.92)');small(game.secretDone?'★ SECRET: COMPLETE':'★ SECRET: ???',240,677,15,game.secretDone?C.gold:'#c9ced4');
  // instruction
  fillRR(585,653,385,48,14,'rgba(16,39,59,.90)');small(game.selectedCustomer?'Choose an EMPTY table':'Tap guest or table to queue actions',778,677,14,C.white,'center');
  // particles
  for(const p of game.particles){ctx.globalAlpha=Math.max(0,p.t/1.25);txt(p.text,p.x,p.y-(1.25-p.t)*28,16,p.color,'center','900');ctx.globalAlpha=1;}
}
function drawPatience(c,x,y,w){const ratio=Math.max(0,Math.min(1,c.patience/(100*game.patienceBonus)));fillRR(x,y,w,8,4,'#293847');fillRR(x,y,w*ratio,8,4,ratio>.55?C.green:ratio>.25?C.gold:C.red);}
function drawTable(t){
  const x=t.x,y=t.y;
  const im=ART['table_'+(t.c%6)];
  if(im && im.complete && im.naturalWidth){
    const w=126,h=121;
    shadow(.15,6,3);ctx.drawImage(im,x-w/2,y-h*.58,w,h);noShadow();
  }else{
    fillRR(x-50,y-35,100,55,12,C.counter,'#745445',4);
  }
  if(t.customer){drawCustomer(t.customer,x,y-9,.72);drawPatience(t.customer,x-32,y-78,64);}
  if(t.state==='wantsOrder'){speech(x+45,y-72,t.customer.order,'!');}
  if(t.state==='waitingFood'){speech(x+45,y-72,t.customer.order,'…');}
  if(t.state==='ready'){speech(x+45,y-72,t.customer.order,'✓');}
  if(t.state==='eating'){drawFood(x+2,y-29,t.customer?.order||'burger',.56);}
  if(t.state==='dirty'){
    drawFood(x-15,y-31,'cake',.36);drawFood(x+17,y-28,'salad',.32);
    txt('CLEAN',x,y-70,13,C.red,'center','900');
  }
  if(t.state==='empty'&&game.selectedCustomer){ctx.strokeStyle=C.gold;ctx.lineWidth=4;ctx.setLineDash([8,6]);rr(x-57,y-62,114,100,14);ctx.stroke();ctx.setLineDash([]);}
  buttons.push({id:'t'+t.id,x:x-65,y:y-90,w:130,h:132,action:()=>handleTableTap(t)});
}
function speech(x,y,food,status){shadow(.15,6,2);fillRR(x-31,y-24,62,47,18,C.white,C.navy,2);noShadow();drawFood(x-10,y,food,.35);txt(status,x+17,y,18,status==='!'?C.red:C.green,'center','900');}
function handleTableTap(t){
  if(game.selectedCustomer&&t.state==='empty'){seatSelected(t);return;}
  if(t.state==='wantsOrder')queueAction('order',{x:t.x,y:t.y+30},{table:t,c:t.customer});
  else if(t.state==='ready')queueAction('serve',{x:t.x,y:t.y+30},{table:t,c:t.customer});
  else if(t.state==='dirty')queueAction('clean',{x:t.x,y:t.y+30},{table:t});
  else if(t.state==='empty')showToast('Select a waiting guest first',1.3);
  else showToast(t.state==='thinking'?'Guest is choosing…':t.state==='waitingFood'?'Chef is cooking…':'Guest is enjoying the meal',1.15);
}

function result(){
  drawDinerBackdrop();ctx.fillStyle='rgba(16,39,59,.84)';ctx.fillRect(0,0,W,H);
  const success=game.score>=game.cfg.target, stars=starCount(game.cfg.n,game.score);
  fillRR(265,60,750,600,28,'rgba(255,250,241,.98)',C.white,3);
  txt(success?'SHIFT COMPLETE!':'SHIFT CLOSED',640,112,39,success?C.green:C.red,'center','900');
  small(`Level ${game.cfg.n} • ${game.cfg.district}`,640,151,18,C.ink,'center');

  for(let i=0;i<3;i++)txt(i<stars?'★':'☆',555+i*86,207,62,i<stars?C.gold:'#c9ced4','center','900');
  txt(`${Math.round(game.score)}`,640,270,43,C.navy,'center','900');
  small(`Goal ${game.cfg.target}`,640,305,17,C.gray,'center');

  fillRR(365,330,550,82,18,'#eef5f7');
  small(`Guests served: ${game.served}`,395,352,16,C.ink);small(`Perfect: ${game.perfect}`,395,387,16,C.ink);
  small(`Tips: ${Math.round(game.tips)}`,660,352,16,C.ink);small(`Best combo: x${game.maxCombo}`,660,387,16,C.ink);

  fillRR(365,432,550,68,18,game.secretDone?'#fff1b9':'#eceff2');
  txt(game.secretDone?'★ SECRET COMPLETE':'SECRET MISSION',640,451,17,game.secretDone?C.red2:C.gray,'center','900');
  small(game.secret.text,640,478,15,game.secretDone?C.ink:C.gray,'center');

  if(success){
    const label=game.rewardedClaimed?'AD BONUS CLAIMED':`2X COINS +${game.baseCoinReward} (AD)`;
    addBtn('rewardResult',435,516,410,48,label,()=>{
      if(game.rewardedClaimed)return;
      showRewarded(`level-${game.cfg.n}-double-coins`,()=>{
        if(game.rewardedClaimed)return;
        game.rewardedClaimed=true;
        save.coins+=game.baseCoinReward;
        persist();showToast(`REWARDED +${game.baseCoinReward} COINS`,2.5);chime();
      });
    },{color:game.rewardedClaimed?C.gray:C.gold,text:game.rewardedClaimed?C.white:C.navy,disabled:game.rewardedClaimed,size:17});
  }else{
    addBtn('rewardRevive',435,516,410,48,game.rewardRevived?'REVIVE USED':'REVIVE +30 SEC (AD)',()=>{
      if(game.rewardRevived)return;
      showRewarded(`level-${game.cfg.n}-revive`,()=>{
        if(game.rewardRevived)return;
        game.rewardRevived=true;game.ended=false;game.time=30;game.adPaused=false;screen='playing';modal=null;
        showToast('REVIVED: +30 SECONDS',2.3);chime();
      });
    },{color:game.rewardRevived?C.gray:C.blue,disabled:game.rewardRevived,size:17});
  }

  addBtn('retry',325,585,180,52,'RETRY',()=>startLevel(game.cfg.n),{color:C.red,size:19});
  addBtn('levels',550,585,180,52,'LEVELS',()=>{screen='levels';modal=null;},{color:C.navy,size:19});
  addBtn('next',775,585,180,52,success&&game.cfg.n<20?'NEXT':'MENU',()=>{
    if(success&&game.cfg.n<20)startLevel(game.cfg.n+1);
    else {screen='menu';modal=null;}
  },{color:success?C.green:C.blue,size:19});
}
function drawModal(){
  if(!modal)return;
  ctx.fillStyle='rgba(5,14,24,.68)';ctx.fillRect(0,0,W,H);
  if(modal==='pause'){
    fillRR(420,190,440,330,26,C.cream,C.white,3);txt('PAUSED',640,245,38,C.navy,'center','900');small('Your shift is waiting.',640,287,18,C.gray,'center');
    addBtn('resume',505,335,270,58,'RESUME',()=>{modal=null;},{color:C.green,size:22});
    addBtn('restart',505,407,128,52,'RESTART',()=>startLevel(game.cfg.n),{color:C.red,size:17});
    addBtn('quit',647,407,128,52,'QUIT',()=>{screen='levels';modal=null;},{color:C.navy,size:17});
  } else if(modal==='tutorial'){
    fillRR(250,120,780,485,26,C.cream,C.white,3);txt('FIRST SHIFT TRAINING',640,170,34,C.navy,'center','900');
    const steps=[['1','Tap a guest in the WAITING line.'],['2','Tap an empty table to seat them. Favorite table = bonus!'],['3','When ! appears, tap the table to take the order.'],['4','Chef cooks automatically. When ✓ appears, tap to serve.'],['5','After they leave, tap the dirty table to clean it.']];
    steps.forEach((s,i)=>{pill(305,225+i*60,42,42,s[0],i%2?C.blue:C.red);small(s[1],370,246+i*60,18,C.ink);});
    addBtn('gotit',495,540,290,48,'START SERVING',()=>{modal=null;save.tutorialSeen=true;persist();},{color:C.green,size:19});
  } else if(modal==='daily') drawDailyModal();
  else if(modal==='shop') drawShopModal();
}
function drawDailyModal(){
  ensureDaily();const d=save.daily;
  fillRR(235,70,810,590,28,C.cream,C.white,3);
  txt('DAILY MISSIONS',640,118,36,C.navy,'center','900');
  small(`${d.date} • New set every day`,640,154,16,C.gray,'center');

  let all=true;
  d.missions.forEach((m,i)=>{
    const v=d.metrics[m.type]||0, done=v>=m.goal;all&&=done;
    const y=195+i*88;
    fillRR(290,y,700,68,18,done?'#dff5e7':'#edf2f5');
    pill(312,y+13,42,42,done?'✓':String(i+1),done?C.green:C.blue);
    txt(m.label,378,y+23,18,C.navy);
    small(`${Math.min(v,m.goal)} / ${m.goal}`,378,y+49,14,C.gray);
    fillRR(700,y+23,245,17,8,'#c8d2db');
    fillRR(700,y+23,245*Math.min(1,v/m.goal),17,8,done?C.green:C.gold);
  });

  const claimable=all&&!d.claimed;
  addBtn('dailyclaim',315,485,305,54,d.claimed?'CHEST CLAIMED':all?'CLAIM +500 COINS':'COMPLETE ALL 3',()=>{
    if(claimable){
      d.claimed=true;save.coins+=500;persist();
      showToast('DAILY CHEST +500 COINS',2.4);chime();
    }
  },{color:claimable?C.gold:C.gray,text:claimable?C.navy:C.white,disabled:!claimable,size:17});

  addBtn('dailyAdBonus',660,485,305,54,d.adBonusClaimed?'AD BONUS CLAIMED':'DAILY +200 (AD)',()=>{
    if(d.adBonusClaimed)return;
    showRewarded('daily-coin-bonus',()=>{
      if(d.adBonusClaimed)return;
      d.adBonusClaimed=true;save.coins+=200;persist();
      showToast('DAILY AD BONUS +200',2.4);chime();
    });
  },{color:d.adBonusClaimed?C.gray:C.blue,disabled:d.adBonusClaimed,size:17});

  fillRR(315,560,650,54,16,'rgba(24,50,75,.95)');
  small(`Streak: ${save.streak} day${save.streak===1?'':'s'} • Coins: ${save.coins}`,640,587,16,C.white,'center');
  addBtn('closeDaily',895,88,110,44,'CLOSE',()=>modal=null,{color:C.red,size:15});
}
function drawShopModal(){
  fillRR(235,90,810,550,28,C.cream,C.white,3);txt('DINER UPGRADES',640,140,36,C.navy,'center','900');drawCoinIcon(600,180,28);txt(`${save.coins}`,622,180,20,C.gold,'left','900');
  const items=[
    {k:'speed',name:'Swift Shoes',desc:'Waitress moves 9% faster per level',icon:'⚡',base:250,color:C.blue},
    {k:'patience',name:'Cozy Ambience',desc:'Guests start with 8% more patience',icon:'♥',base:300,color:C.green},
    {k:'tips',name:'Golden Service',desc:'Earn 10% more tips per level',icon:'★',base:350,color:C.gold}
  ];
  items.forEach((it,i)=>{const y=225+i*112,lvl=save.upgrades[it.k],max=lvl>=5,cost=it.base*(lvl+1);fillRR(290,y,700,90,18,'#edf2f5');pill(315,y+19,50,50,it.icon,it.color);txt(it.name,390,y+26,20,C.navy);small(it.desc,390,y+52,14,C.gray);small(`Lv ${lvl}/5`,390,y+73,13,C.red2);addBtn('buy'+it.k,790,y+20,165,50,max?'MAX':`BUY ${cost}`,()=>{if(max)return;if(save.coins>=cost){save.coins-=cost;save.upgrades[it.k]++;persist();chime();}else{showToast('Not enough coins',1.5);failSfx();}},{color:max?C.gray:C.purple,disabled:max,size:16});});
  addBtn('closeShop',895,110,110,44,'CLOSE',()=>modal=null,{color:C.red,size:15});
}
function showToast(text,t=2){toast={text};toastT=t;}
function drawToast(){if(toastT<=0||!toast)return;const a=Math.min(1,toastT*2);ctx.globalAlpha=a;fillRR(430,102,420,48,20,'rgba(16,39,59,.94)');txt(toast.text,640,126,17,C.white,'center','900');ctx.globalAlpha=1;}

function render(){
  syncBgm();
  ctx.setTransform(renderDpr,0,0,renderDpr,0,0);
  buttons=[];ctx.clearRect(0,0,W,H);
  if(screen==='front')frontCover();
  else if(screen==='menu')menu();
  else if(screen==='levels')levelSelect();
  else if(screen==='playing')gameplay();
  else if(screen==='result')result();
  drawModal();drawToast();
}
let last=performance.now();
function loop(now){const dt=Math.min(.033,(now-last)/1000);last=now;update(dt);render();requestAnimationFrame(loop);}requestAnimationFrame(loop);

function pointerFromEvent(e){const r=canvas.getBoundingClientRect();const p=e.touches?e.touches[0]:e;pointer.x=(p.clientX-r.left)*(W/r.width);pointer.y=(p.clientY-r.top)*(H/r.height);}
canvas.addEventListener('pointermove',pointerFromEvent);
canvas.addEventListener('pointerdown',e=>{pointerFromEvent(e);pointer.down=true;try{sfxCtx?.resume();}catch{};unlockBgm();for(let i=buttons.length-1;i>=0;i--){const b=buttons[i];if(pointer.x>=b.x&&pointer.x<=b.x+b.w&&pointer.y>=b.y&&pointer.y<=b.y+b.h){b.action();break;}}});
canvas.addEventListener('pointerup',()=>pointer.down=false);
window.addEventListener('keydown',e=>{
  if(e.key==='Escape'){
    if(screen==='playing'&&game&&!modal){
      modal='pause';
      showInterstitial('pause',`level-${game.cfg.n}-pause-key`);
    }else if(modal==='pause'){
      modal=null;
    }
  }
});

// Legacy ad-pause hook retained for compatibility; WGPlayground adapter does not call it.
window.HDRGame={
  setAdPaused(value){
    if(game) game.adPaused=!!value;
  }
};
})();
