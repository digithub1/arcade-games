(function(){
  const canvas = document.getElementById('game');
  const ctx = canvas.getContext('2d');
  const DPR = Math.min(window.devicePixelRatio || 1, 2.5);

  // ---------- audio ----------
  let actx = null;
  function audio(){ if(!actx){ try{ actx = new (window.AudioContext||window.webkitAudioContext)(); }catch(e){} } return actx; }
  function tone(freq, dur, type, gainVal, delay){
    const ac = audio(); if (!ac) return;
    delay = delay||0;
    const t0 = ac.currentTime + delay;
    const osc = ac.createOscillator();
    const g = ac.createGain();
    osc.type = type||'sine';
    osc.frequency.setValueAtTime(freq, t0);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(gainVal||0.18, t0+0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, t0+dur);
    osc.connect(g); g.connect(ac.destination);
    osc.start(t0); osc.stop(t0+dur+0.02);
  }
  function sfxBump(strength){ tone(160+Math.min(strength,1)*260, 0.09, 'square', 0.10+Math.min(strength,1)*0.08); }
  function sfxKnockout(){ tone(520,0.16,'sawtooth',0.14); tone(260,0.28,'sawtooth',0.12,0.05); }
  function sfxLose(){ tone(200,0.18,'sawtooth',0.16); tone(140,0.32,'sawtooth',0.16,0.12); }
  function sfxWin(){ tone(523,0.12,'square',0.14); tone(659,0.12,'square',0.14,0.1); tone(784,0.22,'square',0.16,0.2); }
  function sfxBonus(){ tone(880,0.1,'square',0.15); tone(1180,0.16,'square',0.15,0.08); }
  function sfxCharge(){ tone(340,0.14,'triangle',0.08); }
  function sfxLaunch(power){ tone(300+power*260, 0.08, 'triangle', 0.1+power*0.08); }
  function sfxPortal(){ tone(700,0.1,'sine',0.14); tone(340,0.1,'sine',0.14,0.06); tone(180,0.22,'sine',0.14,0.12); }

  let W, H;
  function resize(){
    W = window.innerWidth; H = window.innerHeight;
    canvas.width = Math.floor(W*DPR); canvas.height = Math.floor(H*DPR);
    canvas.style.width = W+'px'; canvas.style.height = H+'px';
    ctx.setTransform(DPR,0,0,DPR,0,0);
    computeArena();
    applyLevelScale(typeof level==='number'?level:1);
  }

  // ---------- arena (base geometry + per-level shrink for difficulty) ----------
  let arena = {};
  function computeArena(){
    const padX = Math.max(18, W*0.065);
    const padTop = 108;
    const padBottom = 34;
    const aw = W - padX*2;
    const ah = H - padTop - padBottom;
    arena.cx = padX + aw/2;
    arena.cy = padTop + ah/2;
    arena.baseHw = aw/2;
    arena.baseHh = ah/2;
    arena.rimThickness = Math.max(15, Math.min(W,H)*0.026);
  }
  function applyLevelScale(lv){
    const scale = Math.max(0.72, 1 - (lv-1)*0.032);
    arena.hw = arena.baseHw*scale;
    arena.hh = arena.baseHh*scale;
    arena.r = Math.min(arena.hw, arena.hh);
  }

  function trackSDF(px, py){
    const dx = px-arena.cx, dy = py-arena.cy;
    const sx = dx<0?-1:1, sy = dy<0?-1:1;
    const ax = Math.abs(dx), ay = Math.abs(dy);
    const r = arena.r;
    const qx = ax-(arena.hw-r), qy = ay-(arena.hh-r);
    let dist, nx, ny;
    if (qx>0 && qy>0){
      const len = Math.hypot(qx,qy)||1e-6;
      dist = len-r; nx=(qx/len)*sx; ny=(qy/len)*sy;
    } else if (qx>qy){ dist=qx-r; nx=sx; ny=0; }
    else { dist=qy-r; nx=0; ny=sy; }
    return {dist,nx,ny};
  }
  function clampInside(x,y,r){
    const {dist,nx,ny} = trackSDF(x,y);
    const edge = dist + r;
    if (edge > 0){ x -= nx*edge; y -= ny*edge; }
    return {x,y};
  }

  // the pink corner chunks are knockout portals — touch one and you're gone, no speed required
  function getPortals(){
    return [
      {x:arena.cx-arena.hw, y:arena.cy-arena.hh},
      {x:arena.cx+arena.hw, y:arena.cy-arena.hh},
      {x:arena.cx-arena.hw, y:arena.cy+arena.hh},
      {x:arena.cx+arena.hw, y:arena.cy+arena.hh},
    ];
  }
  function getPortalRadius(){ return arena.r*0.58; }

  // ---------- input: ONE-SHOT SWIPE / FLICK ----------
  // Swipe anywhere, in any direction. The car launches in exactly that direction —
  // no holding, no following the finger, no re-swiping needed. One swipe = one launch.
  let drag = null; // {sx,sy (start), x,y (current), id}
  function pointerPos(e){ const rect=canvas.getBoundingClientRect(); return {x:e.clientX-rect.left, y:e.clientY-rect.top}; }

  canvas.addEventListener('pointerdown', (e)=>{
    audio();
    if (state !== 'playing' || !player || !player.alive) return;
    const p = pointerPos(e);
    drag = { id:e.pointerId, sx:p.x, sy:p.y, x:p.x, y:p.y };
    canvas.setPointerCapture(e.pointerId);
  });
  canvas.addEventListener('pointermove', (e)=>{
    if (!drag || e.pointerId!==drag.id) return;
    const p = pointerPos(e);
    drag.x = p.x; drag.y = p.y;
  });
  const SWIPE_MIN_DIST = 14;   // px — shorter than this is ignored (avoid accidental taps)
  const SWIPE_MAX_DIST = 210;  // px — swipe distance for max power
  const MIN_LAUNCH = 4.5;
  const MAX_LAUNCH = 15;
  const MAX_SPEED_CAP = 16.5;
  function endDrag(e){
    if (!drag || (e && e.pointerId!==drag.id)) return;
    const dx = drag.x - drag.sx, dy = drag.y - drag.sy;
    const dist = Math.hypot(dx,dy);
    if (player && player.alive && dist >= SWIPE_MIN_DIST){
      const ux = dx/dist, uy = dy/dist;
      const t = Math.min(Math.max((dist-SWIPE_MIN_DIST)/(SWIPE_MAX_DIST-SWIPE_MIN_DIST),0),1);
      const speedBoost = player.speedStat ? (0.72 + player.speedStat/14*0.42) : 1;
      const power = (MIN_LAUNCH + (MAX_LAUNCH-MIN_LAUNCH)*t) * speedBoost;
      let nvx = player.vx + ux*power;
      let nvy = player.vy + uy*power;
      const ns = Math.hypot(nvx,nvy);
      if (ns > MAX_SPEED_CAP){ nvx = nvx/ns*MAX_SPEED_CAP; nvy = nvy/ns*MAX_SPEED_CAP; }
      player.vx = nvx; player.vy = nvy;
      player.angle = Math.atan2(uy,ux) + Math.PI/2;
      sfxLaunch(t);
    }
    drag = null;
  }
  canvas.addEventListener('pointerup', endDrag);
  canvas.addEventListener('pointercancel', endDrag);

  // ---------- cars ----------
  const AI_PALETTES = [
    {top:'#c8ff7a', bot:'#4fb82a', dark:'#2c7a13'},
    {top:'#a8ff8f', bot:'#39c46b', dark:'#1f7d43'},
    {top:'#d6ff6f', bot:'#79c22a', dark:'#4a7d14'}
  ];
  const PLAYER_PALETTE = {top:'#ff9bb8', bot:'#e23a68', dark:'#9c1d40'};
  const GOLD_PALETTE = {top:'#fff3c0', bot:'#ffb92e', dark:'#b3760a'};

  const VEHICLES=[{id:'scout',name:'SCOUT',icon:'◈',speed:10,hit:6,mass:.86,c1:'#7dff57',c2:'#219c43'},{id:'blitz',name:'BLITZ',icon:'⚡',speed:13,hit:7,mass:.72,c1:'#62e7ff',c2:'#2471ff'},{id:'muscle',name:'MUSCLE',icon:'◆',speed:8,hit:11,mass:1.18,c1:'#ffcf58',c2:'#ff6b22'},{id:'titan',name:'TITAN',icon:'⬢',speed:6,hit:15,mass:1.48,c1:'#d5d9e5',c2:'#6d7488'},{id:'phantom',name:'PHANTOM',icon:'✦',speed:11,hit:9,mass:.9,c1:'#d99cff',c2:'#6e2cff'},{id:'crusher',name:'CRUSHER',icon:'✹',speed:7,hit:17,mass:1.62,c1:'#ff6b88',c2:'#b11245'},{id:'viper',name:'VIPER',icon:'➤',speed:14,hit:8,mass:.68,c1:'#8affdc',c2:'#00a887'},{id:'inferno',name:'INFERNO',icon:'🔥',speed:10,hit:13,mass:1.05,c1:'#fff16b',c2:'#ef3b16'},{id:'warden',name:'WARDEN',icon:'⬟',speed:8,hit:14,mass:1.35,c1:'#9eaaff',c2:'#3845b8'},{id:'apex',name:'APEX',icon:'★',speed:12,hit:16,mass:1.12,c1:'#fff',c2:'#00d9ff'}];
  const BOSSES=[{name:'IRON LORD',vehicle:'titan',hp:1,speed:7,hit:20,mass:2,c1:'#ff4d6d',c2:'#6e1025'},{name:'VOID KING',vehicle:'phantom',hp:5,speed:10,hit:23,mass:1.6,c1:'#d46bff',c2:'#240052'},{name:'WARBRINGER',vehicle:'crusher',hp:6,speed:8,hit:26,mass:2.2,c1:'#ff9d3d',c2:'#7a1700'},{name:'UBEEZY PRIME',vehicle:'apex',hp:8,speed:12,hit:30,mass:2,c1:'#f5ff8a',c2:'#36d6ff'}];
  let selectedVehicleId=localStorage.getItem('ubeezySelectedVehicle')||'scout',unlockedVehicles=[]; try{unlockedVehicles=JSON.parse(localStorage.getItem('ubeezyGarage')||'[]')}catch(e){} if(!unlockedVehicles.includes('scout'))unlockedVehicles.unshift('scout');
  function makeCar(x,y,r,isPlayer,gold,vehicleId,bossData){const base=VEHICLES.find(v=>v.id===vehicleId)||VEHICLES[0],v=bossData||base;return{x,y,vx:0,vy:0,r,isPlayer,gold:!!gold,boss:!!bossData,vehicleId:base.id,bossData:bossData||null,pal:isPlayer?PLAYER_PALETTE:(bossData?{top:v.c1,bot:v.c2,dark:'#13070c'}:{top:base.c1,bot:base.c2,dark:'#17251b'}),alive:true,dead:false,angle:-Math.PI/2,mass:isPlayer?base.mass:v.mass,speedStat:v.speed,hitPower:v.hit,hp:1,maxHp:1,wanderT:Math.random()*1000,trail:[],bob:Math.random()*Math.PI*2,squash:0,dashCooldown:700+Math.random()*900,charging:false,chargeTimer:0,chargeDirX:0,chargeDirY:0};}

  let player, cars, particles, ambient, state, level, score, lives, shake;
  let portalPulse = 0;

  const LEVEL_STORIES = [
    "The arena powers up for the first bout.",
    "A crack splits the table. Something pulls from below.",
    "The void grows hungry. Rivals get bolder.",
    "Gravity itself turns against you.",
    "The rift widens. No one is safe near the center.",
    "Old champions return, faster and meaner.",
    "The table groans under the strain of the void.",
    "Only the fearless survive this close to the hole.",
    "The arena flickers — reality is thinning.",
    "Final bout: the void demands everything."
  ];
  function showStory(lv){
    const line = LEVEL_STORIES[(lv-1) % LEVEL_STORIES.length];
    const el = document.getElementById('storyToast');
    document.getElementById('storyLevel').textContent = 'Level ' + lv;
    document.getElementById('storyLine').textContent = line;
    el.style.display = 'flex';
    el.style.opacity = '1';
    clearTimeout(showStory._t);
    showStory._t = setTimeout(()=>{ el.style.opacity='0'; setTimeout(()=>{ el.style.display='none'; }, 350); }, 2200);
  }

  let blackHole = null;
  function spawnBlackHole(lv, usedSpots){
    const holeR = Math.max(12, Math.min(arena.hw, arena.hh) * 0.055);
    const stripLen = Math.max(90, Math.min(arena.hw, arena.hh) * 0.62);
    // candidate spots sit exactly on the rim (top cap, bottom cap, left side, right side)
    const candidates = [
      {x:arena.cx, y:arena.cy-arena.hh, nx:0, ny:-1},
      {x:arena.cx, y:arena.cy+arena.hh, nx:0, ny:1},
      {x:arena.cx-arena.hw, y:arena.cy, nx:-1, ny:0},
      {x:arena.cx+arena.hw, y:arena.cy, nx:1, ny:0}
    ];
    // shuffle
    for (let i=candidates.length-1;i>0;i--){
      const j = Math.floor(Math.random()*(i+1));
      [candidates[i],candidates[j]] = [candidates[j],candidates[i]];
    }
    let pick = candidates.find(p => !usedSpots.some(s=>Math.hypot(p.x-s.x,p.y-s.y) < holeR*2.6));
    if (!pick) pick = candidates[0];
    blackHole = { x:pick.x, y:pick.y, nx:pick.nx, ny:pick.ny, r: holeR, pullR: holeR*2.2, length: stripLen, horizontal: pick.ny !== 0, spin: 0 };
    usedSpots.push({x:pick.x, y:pick.y});
  }

  function spawnLevel(lv){
    applyLevelScale(lv); cars=[]; particles=[];
    const carR=Math.max(14,Math.min(W,H)*.03);
    const playerStart={x:arena.cx,y:arena.cy+arena.hh*.6};
    const used=[playerStart];
    spawnBlackHole(lv,used);

    const pv=VEHICLES.find(v=>v.id===selectedVehicleId)||VEHICLES[0];
    player=makeCar(playerStart.x,playerStart.y,carR*1.1,true,false,pv.id);
    player.strikePower = player.hitPower * 1.5;
    cars.push(player);

    // Every level is a boss battle. Bosses scale continuously across all 100 levels,
    // while the four signature bosses rotate as visual identities through the campaign.
    const tier=Math.min(3,Math.floor((lv-1)/25));
    const baseBoss=BOSSES[tier];
    const bossScale=1 + (lv-1)*0.0045;
    const boss={
      name: lv===100 ? 'UBEEZY PRIME // FINAL' : baseBoss.name+' // '+String(lv).padStart(2,'0'),
      vehicle:baseBoss.vehicle,
      hp:1,
      speed:Math.min(15,baseBoss.speed*(1+(lv-1)*0.0025)),
      hit:baseBoss.hit*(1+(lv-1)*0.004),
      mass:baseBoss.mass*(1+(lv-1)*0.002),
      c1:baseBoss.c1,c2:baseBoss.c2
    };

    let attempts=0;
    const count=Math.min(8,2+Math.floor((lv-1)/14));
    const add=(x,y,id,g,b)=>{
      const c=makeCar(x,y,carR*(b?1.55:0.82),false,g,id,b);
      c.dashCooldown=Math.max(330,1450-lv*8)+Math.random()*650;
      if(!b){
        c.mass*=1+Math.min(lv,100)*.004;
        c.speedStat*=1+Math.min(lv,100)*.002;
        c.hitPower*=1+Math.min(lv,100)*.0015;
        c.soldier=true;
      }
      cars.push(c);
      return c;
    };

    // Boss sits behind a ring of smaller soldier cars. Soldiers are intentionally
    // weaker than the player's strike, but their numbers and coordinated charges grow.
    add(arena.cx,arena.cy-arena.hh*.48,boss.vehicle,false,boss);
    for(let i=0;i<count;i++){
      let x=0,y=0,ok=false;
      while(!ok && attempts++<900){
        const a=(Math.PI*2*i/count)+(Math.random()-.5)*.32;
        const rr=.27+Math.random()*.18;
        x=arena.cx+Math.cos(a)*arena.hw*rr;
        y=arena.cy+Math.sin(a)*arena.hh*rr;
        ok=used.every(pt=>Math.hypot(x-pt.x,y-pt.y)>carR*2.9);
      }
      used.push({x,y});
      const idx=(lv+i+tier*2)%VEHICLES.length;
      add(x,y,VEHICLES[idx].id,i%4===0,null);
    }

    document.getElementById('remain').textContent=cars.filter(c=>!c.isPlayer).length;
    showStory(lv);
  }
  function spawnAmbient(){
    ambient = [];
    for (let i=0;i<18;i++){
      ambient.push({
        x: arena.cx + (Math.random()*2-1)*arena.hw*0.9,
        y: arena.cy + (Math.random()*2-1)*arena.hh*0.9,
        r: 1+Math.random()*1.8, a: 0.04+Math.random()*0.08,
        vx:(Math.random()*2-1)*0.06, vy:(Math.random()*2-1)*0.06
      });
    }
  }

  function resetGame(){
    level=1; score=0; lives=3; shake=0;
    updateHud();
    spawnLevel(level);
    spawnAmbient();
    state='playing';
  }
  function updateHud(){
    document.getElementById('score').textContent = score;
    document.getElementById('level').textContent = Math.min(level,100)+' / 100';
    document.getElementById('lives').textContent = lives;
  }

  function burst(x,y,pal,n){
    n = n||16;
    for (let i=0;i<n;i++){
      const a = Math.random()*Math.PI*2;
      const sp = 2.2 + Math.random()*4.6;
      particles.push({
        x,y, vx:Math.cos(a)*sp, vy:Math.sin(a)*sp, life:1,
        color: Math.random()<0.5?pal.top:pal.bot, size: 2.5+Math.random()*3, rot: Math.random()*Math.PI*2, vr:(Math.random()*2-1)*0.3
      });
    }
  }
  function burstPortal(x,y,pal){
    // spiraling inward-then-gone effect, magenta-tinted to sell the portal
    for (let i=0;i<22;i++){
      const a = Math.random()*Math.PI*2;
      const sp = 1.5 + Math.random()*3.2;
      const useMagenta = Math.random()<0.5;
      particles.push({
        x: x+Math.cos(a)*6, y: y+Math.sin(a)*6,
        vx:Math.cos(a)*sp*0.4, vy:Math.sin(a)*sp*0.4, life:1,
        color: useMagenta ? (Math.random()<0.5?'#ff9be0':'#c22a86') : (Math.random()<0.5?pal.top:pal.bot),
        size: 2+Math.random()*3, rot: a, vr: 0.4
      });
    }
  }
  function burstHole(x,y,pal){
    // dark violet implosion — particles get pulled in and vanish
    for (let i=0;i<26;i++){
      const a = Math.random()*Math.PI*2;
      const dist0 = 14 + Math.random()*20;
      const useDark = Math.random()<0.6;
      particles.push({
        x: x+Math.cos(a)*dist0, y: y+Math.sin(a)*dist0,
        vx:-Math.cos(a)*1.6, vy:-Math.sin(a)*1.6, life:1,
        color: useDark ? (Math.random()<0.5?'#5a2a8f':'#1a0b2e') : (Math.random()<0.5?pal.top:pal.bot),
        size: 2+Math.random()*3.4, rot: a, vr: 0.5
      });
    }
  }

  // ---------- physics ----------
  const FRICTION_PER_FRAME = 0.965;
  const MAX_SPEED = 16;

  function ejectSpeedForLevel(){ return Math.max(3.9, 5.4 - (level-1)*0.14); }

  function resolveCarCollision(a,b){
    const dx=b.x-a.x, dy=b.y-a.y;
    let dist=Math.hypot(dx,dy);
    const minDist=a.r+b.r;
    if (dist===0) dist=0.01;
    if (dist<minDist){
      const nx=dx/dist, ny=dy/dist;
      const overlap=(minDist-dist)/2;
      a.x-=nx*overlap; a.y-=ny*overlap;
      b.x+=nx*overlap; b.y+=ny*overlap;
      const rvx=b.vx-a.vx, rvy=b.vy-a.vy;
      const vAlong=rvx*nx+rvy*ny;
      if (vAlong<0){
        const rest=0.82;
        const invA=1/a.mass, invB=1/b.mass;
        // Player cars get a deliberate 1.5x strike advantage because they are outnumbered.
        const aStrike = a.hitPower * (a.isPlayer ? 1.5 : 1);
        const bStrike = b.hitPower * (b.isPlayer ? 1.5 : 1);
        const factor=Math.max(.7,Math.min(2.55,(aStrike+bStrike)/18)); const j=-(1+rest)*vAlong*factor/(invA+invB);
        const ix=j*nx, iy=j*ny;
        a.vx-=ix*invA; a.vy-=iy*invA;
        b.vx+=ix*invB; b.vy+=iy*invB;
        const impact = Math.min(Math.abs(vAlong)/10, 1);
        if (impact > 0.08){ sfxBump(impact); a.squash=impact; b.squash=impact; }
        if (impact > 0.35) shake = Math.min(shake + impact*4, 10);
      }
    }
  }

  function clampSpeed(c){
    const s = Math.hypot(c.vx,c.vy);
    if (s>MAX_SPEED){ c.vx=c.vx/s*MAX_SPEED; c.vy=c.vy/s*MAX_SPEED; }
  }

  function handleBoundary(c){
    const {dist,nx,ny} = trackSDF(c.x,c.y);
    const edge = dist + c.r;
    if (edge<=0) return;
    const speed = Math.hypot(c.vx,c.vy);
    const eject = ejectSpeedForLevel();

    // The green/pink rim is a solid boundary. It never eliminates a car.
    if (speed >= eject){
      c.vx *= 0.965; c.vy *= 0.965;
      return;
    }
    const pushBack = dist + c.r;
    c.x -= nx*pushBack; c.y -= ny*pushBack;
    const vn = c.vx*nx + c.vy*ny;
    if (vn>0){ c.vx -= (1+0.62)*vn*nx; c.vy -= (1+0.62)*vn*ny; if (vn>1.2) sfxBump(Math.min(vn/8,1)); }
    c.vx*=0.94; c.vy*=0.94;
  }

  function eliminate(c, viaPortal, viaHole){
    if (c.dead) return;
    c.dead = true; c.alive = false;
    if (viaHole){ burstHole(c.x,c.y,c.pal); }
    else if (viaPortal){ burstPortal(c.x,c.y,c.pal); }
    else { burst(c.x,c.y,c.pal, c.gold?26:16); }
    shake = Math.min(shake + (c.isPlayer?7:4), 10);
    if (c.isPlayer){
      (viaPortal||viaHole) ? sfxPortal() : sfxLose();
      lives--; updateHud();
      if (lives<=0){ endGame(false); }
      else {
        setTimeout(()=>{
          if (state!=='playing') return;
          player.x=arena.cx; player.y=arena.cy+arena.hh*0.6;
          player.vx=0; player.vy=0; player.alive=true; player.dead=false; player.trail=[];
        }, 600);
      }
    } else {
      (viaPortal||viaHole) ? sfxPortal() : sfxKnockout();
      if(c.vehicleId&&!unlockedVehicles.includes(c.vehicleId)){unlockedVehicles.push(c.vehicleId);localStorage.setItem('ubeezyGarage',JSON.stringify(unlockedVehicles));}
      if (c.gold){ score += 30; sfxBonus(); } else { score += (viaHole?20:(viaPortal?15:10)); }
      updateHud();
      const remaining = cars.filter(x=>!x.dead && !x.isPlayer);
      document.getElementById('remain').textContent = remaining.length;
      if (remaining.length===0){ setTimeout(()=>endGame(true), 380); }
    }
  }

  const warnPill = document.getElementById('warnPill');
  let warnTimer = 0;

  function aiThink(c, frameScale, msPerFrame){
    if (c.dead) return;
    if (c.charging){
      c.chargeTimer -= msPerFrame;
      c.vx *= Math.pow(0.8, frameScale); c.vy *= Math.pow(0.8, frameScale); // anticipation: slow down
      if (c.chargeTimer <= 0){
        c.charging = false;
        const power = Math.min((3.8 + level*0.055) * (c.speedStat/10), 12.5);
        c.vx += c.chargeDirX*power;
        c.vy += c.chargeDirY*power;
        clampSpeed(c);
        const minInterval = Math.max(500, 1500-level*90);
        const maxInterval = Math.max(900, 2400-level*130);
        c.dashCooldown = minInterval + Math.random()*(maxInterval-minInterval);
      }
      return;
    }
    c.dashCooldown -= msPerFrame;
    if (c.dashCooldown <= 0){
      if (player && player.alive){
        const dx = player.x-c.x, dy = player.y-c.y;
        const d = Math.hypot(dx,dy)||1;
        const spread = Math.max(0.32 - level*0.02, 0.06);
        const baseAng = Math.atan2(dy,dx) + (Math.random()*2-1)*spread;
        c.chargeDirX = Math.cos(baseAng); c.chargeDirY = Math.sin(baseAng);
        c.charging = true;
        c.chargeTimer = Math.max(260 - level*8, 130);
        warnTimer = 700; sfxCharge();
      } else {
        c.dashCooldown = 800;
      }
      return;
    }
    // gentle idle drift when not charging/cooling down
    if (Math.hypot(c.vx,c.vy) < 0.25){
      c.wanderT += frameScale;
      const a = Math.sin(c.wanderT*0.018 + c.x*0.01)*Math.PI;
      c.vx += Math.cos(a)*0.01*frameScale;
      c.vy += Math.sin(a)*0.01*frameScale;
    }
  }

  function update(frameScale, msPerFrame){
    if (state!=='playing') return;
    warnTimer -= msPerFrame;
    warnPill.style.opacity = warnTimer>0 ? '1' : '0';

    for (const c of cars){
      if (c.dead) continue;
      if (!c.isPlayer) aiThink(c, frameScale, msPerFrame);
      c.x += c.vx*frameScale;
      c.y += c.vy*frameScale;
      const decay = Math.pow(FRICTION_PER_FRAME, frameScale);
      c.vx *= decay; c.vy *= decay;
      clampSpeed(c);
      const spd = Math.hypot(c.vx,c.vy);
      if (spd>0.05) c.angle = Math.atan2(c.vy,c.vx)+Math.PI/2;
      c.squash *= Math.pow(0.9, frameScale);
      c.bob += 0.05*frameScale;
      if (spd>2.2){
        c.trail.push({x:c.x,y:c.y});
        if (c.trail.length>10) c.trail.shift();
      } else if (c.trail.length){
        c.trail.shift();
      }
    }
    const alive = cars.filter(c=>!c.dead);
    for (let i=0;i<alive.length;i++)
      for (let j=i+1;j<alive.length;j++)
        resolveCarCollision(alive[i],alive[j]);
    for (const c of alive) handleBoundary(c);

    for (let i=particles.length-1;i>=0;i--){
      const p=particles[i];
      p.x+=p.vx*frameScale; p.y+=p.vy*frameScale;
      p.vx*=Math.pow(0.92,frameScale); p.vy*=Math.pow(0.92,frameScale);
      p.rot += p.vr*frameScale;
      p.life -= 0.022*frameScale;
      if (p.life<=0) particles.splice(i,1);
    }
    for (const a of ambient){
      a.x += a.vx*frameScale; a.y += a.vy*frameScale;
      const {dist} = trackSDF(a.x,a.y);
      if (dist>0){ a.x=arena.cx+(Math.random()*2-1)*arena.hw*0.6; a.y=arena.cy+(Math.random()*2-1)*arena.hh*0.6; }
    }
    shake *= Math.pow(0.85, frameScale);
    portalPulse += 0.045*frameScale;

    const alive2 = cars.filter(c=>!c.dead);

    // Pink corner strips/areas are visual solid boundaries, not elimination zones.
    // The knockout portal eliminates every car that enters it. No enemy or boss has special protection.

    if (blackHole){
      blackHole.spin += 0.03*frameScale;
      for (const c of alive2){
        if (c.dead) continue;
        const dx = blackHole.x-c.x, dy = blackHole.y-c.y;
        // Pull toward the black strip, but eliminate only when the car overlaps
        // the rectangular strip itself.
        const along = blackHole.horizontal ? Math.abs(c.x-blackHole.x) : Math.abs(c.y-blackHole.y);
        const across = blackHole.horizontal ? Math.abs(c.y-blackHole.y) : Math.abs(c.x-blackHole.x);
        if (across < blackHole.pullR && along < blackHole.length*0.62){
          const d = Math.hypot(dx,dy) || 0.001;
          const pull = (1 - Math.min(across/blackHole.pullR,1)) * 0.38;
          c.vx += (dx/d)*pull*frameScale;
          c.vy += (dy/d)*pull*frameScale;
        }
        if (across < blackHole.r + c.r*0.35 && along < blackHole.length*0.5 + c.r){
          eliminate(c, false, true);
        }
      }
    }
  }

  // ---------- render ----------
  function roundRectPath(cx,cy,hw,hh,r){
    ctx.beginPath();
    ctx.moveTo(cx-hw+r, cy-hh);
    ctx.lineTo(cx+hw-r, cy-hh);
    ctx.arcTo(cx+hw, cy-hh, cx+hw, cy-hh+r, r);
    ctx.lineTo(cx+hw, cy+hh-r);
    ctx.arcTo(cx+hw, cy+hh, cx+hw-r, cy+hh, r);
    ctx.lineTo(cx-hw+r, cy+hh);
    ctx.arcTo(cx-hw, cy+hh, cx-hw, cy+hh-r, r);
    ctx.lineTo(cx-hw, cy-hh+r);
    ctx.arcTo(cx-hw, cy-hh, cx-hw+r, cy-hh, r);
    ctx.closePath();
  }

  function drawArena(){
    const bgGrad = ctx.createRadialGradient(W/2,H*0.35,10,W/2,H*0.35,Math.max(W,H)*0.9);
    bgGrad.addColorStop(0,'#0d1128'); bgGrad.addColorStop(1,'#04050a');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0,0,W,H);

    const rim = arena.rimThickness;

    ctx.save();
    roundRectPath(arena.cx, arena.cy+7, arena.hw+rim, arena.hh+rim, arena.r+rim);
    ctx.fillStyle = 'rgba(0,0,0,0.35)';
    ctx.filter = 'blur(6px)';
    ctx.fill();
    ctx.filter = 'none';
    ctx.restore();

    roundRectPath(arena.cx, arena.cy, arena.hw+rim+3, arena.hh+rim+3, arena.r+rim+3);
    ctx.fillStyle = '#0a0d1c';
    ctx.fill();

    roundRectPath(arena.cx, arena.cy, arena.hw+rim, arena.hh+rim, arena.r+rim);
    const rimGrad = ctx.createLinearGradient(0, arena.cy-arena.hh-rim, 0, arena.cy+arena.hh+rim);
    rimGrad.addColorStop(0,'#e3ff9c');
    rimGrad.addColorStop(0.12,'#b6ff4d');
    rimGrad.addColorStop(0.55,'#8fe62a');
    rimGrad.addColorStop(1,'#6bbf17');
    ctx.fillStyle = rimGrad;
    ctx.fill();

    ctx.save();
    roundRectPath(arena.cx, arena.cy, arena.hw+rim, arena.hh+rim, arena.r+rim);
    ctx.clip();
    roundRectPath(arena.cx, arena.cy, arena.hw+rim*0.35, arena.hh+rim*0.35, arena.r+rim*0.35);
    ctx.strokeStyle = 'rgba(30,70,10,0.45)';
    ctx.lineWidth = rim*0.5;
    ctx.stroke();
    // top-edge highlight for glossiness
    roundRectPath(arena.cx, arena.cy, arena.hw+rim*0.94, arena.hh+rim*0.94, arena.r+rim*0.94);
    ctx.strokeStyle = 'rgba(255,255,255,0.35)';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.restore();

    ctx.save();
    roundRectPath(arena.cx, arena.cy, arena.hw+rim*0.62, arena.hh+rim*0.62, arena.r+rim*0.62);
    ctx.clip();
    const portalR = getPortalRadius();
    const pulse = 1 + Math.sin(portalPulse)*0.05;
    for (const {x,y} of getPortals()){
      const g = ctx.createRadialGradient(x,y,2,x,y,portalR*pulse);
      g.addColorStop(0,'#ffb3e6'); g.addColorStop(0.55,'#ff6fc0'); g.addColorStop(1,'#c22a86');
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(x,y,portalR*pulse,0,Math.PI*2); ctx.fill();
      // swirl rings for a "portal" feel
      ctx.save();
      ctx.translate(x,y);
      ctx.rotate(portalPulse*1.4);
      ctx.strokeStyle = 'rgba(255,255,255,0.35)';
      ctx.lineWidth = 2;
      ctx.setLineDash([portalR*0.35, portalR*0.5]);
      ctx.beginPath(); ctx.arc(0,0,portalR*0.62*pulse,0,Math.PI*2); ctx.stroke();
      ctx.restore();
    }
    ctx.restore();

    roundRectPath(arena.cx, arena.cy, arena.hw, arena.hh, arena.r);
    const tgrad = ctx.createRadialGradient(arena.cx, arena.cy-arena.hh*0.2, 10, arena.cx, arena.cy, Math.max(arena.hw,arena.hh)*1.15);
    tgrad.addColorStop(0,'#333d78'); tgrad.addColorStop(0.6,'#232a56'); tgrad.addColorStop(1,'#171b3c');
    ctx.fillStyle = tgrad;
    ctx.fill();

    ctx.save();
    roundRectPath(arena.cx, arena.cy, arena.hw, arena.hh, arena.r);
    ctx.clip();

    const vgrad = ctx.createRadialGradient(arena.cx,arena.cy,Math.min(arena.hw,arena.hh)*0.55, arena.cx,arena.cy,Math.max(arena.hw,arena.hh)*1.05);
    vgrad.addColorStop(0,'rgba(0,0,0,0)'); vgrad.addColorStop(1,'rgba(0,0,0,0.45)');
    ctx.fillStyle = vgrad;
    ctx.fillRect(arena.cx-arena.hw-4, arena.cy-arena.hh-4, arena.hw*2+8, arena.hh*2+8);

    // soft top-light sheen for glossy floor look
    const sheen = ctx.createLinearGradient(0, arena.cy-arena.hh, 0, arena.cy+arena.hh*0.3);
    sheen.addColorStop(0,'rgba(255,255,255,0.07)');
    sheen.addColorStop(1,'rgba(255,255,255,0)');
    ctx.fillStyle = sheen;
    ctx.fillRect(arena.cx-arena.hw-4, arena.cy-arena.hh-4, arena.hw*2+8, arena.hh*1.3);

    ctx.fillStyle = 'rgba(255,255,255,0.035)';
    const step = 26;
    for (let yy=arena.cy-arena.hh; yy<arena.cy+arena.hh; yy+=step){
      for (let xx=arena.cx-arena.hw; xx<arena.cx+arena.hw; xx+=step){
        ctx.beginPath(); ctx.arc(xx,yy,1.3,0,Math.PI*2); ctx.fill();
      }
    }

    ctx.fillStyle = 'rgba(255,255,255,0.05)';
    ctx.font = `800 ${Math.min(arena.hw,arena.hh)*1.0}px sans-serif`;
    ctx.textAlign='center'; ctx.textBaseline='middle';
    ctx.fillText(String(level), arena.cx, arena.cy);
    ctx.restore();

    for (const a of ambient){
      ctx.beginPath();
      ctx.fillStyle = `rgba(255,255,255,${a.a})`;
      ctx.arc(a.x,a.y,a.r,0,Math.PI*2);
      ctx.fill();
    }
  }

  function roundRectLocal(x,y,w,h,r){
    ctx.beginPath();
    ctx.moveTo(x+r,y);
    ctx.arcTo(x+w,y,x+w,y+h,r);
    ctx.arcTo(x+w,y+h,x,y+h,r);
    ctx.arcTo(x,y+h,x,y,r);
    ctx.arcTo(x,y,x+w,y,r);
    ctx.closePath();
  }

  function drawTrail(c){
    for (let i=0;i<c.trail.length;i++){
      const t = c.trail[i];
      const k = i/c.trail.length;
      ctx.beginPath();
      ctx.fillStyle = c.isPlayer ? `rgba(255,120,160,${0.14*k})` : `rgba(150,255,110,${0.14*k})`;
      ctx.arc(t.x,t.y, c.r*0.55*k, 0, Math.PI*2);
      ctx.fill();
    }
  }

  function drawCar(c){
    if (c.dead) return;
    const bob = c.isPlayer && drag ? 0 : Math.sin(c.bob)*1.1;

    ctx.save();
    ctx.translate(c.x, c.y + c.r*0.55 + bob*0.3);
    ctx.scale(1,0.42);
    ctx.beginPath();
    ctx.fillStyle = 'rgba(0,0,0,0.38)';
    ctx.arc(0,0,c.r*1.05,0,Math.PI*2);
    ctx.fill();
    ctx.restore();

    ctx.save();
    ctx.translate(c.x, c.y + bob);
    ctx.rotate(c.angle);
    const chargeGlow = c.charging ? (1 - Math.max(c.chargeTimer,0)/300) : 0;
    const squash = 1 + c.squash*0.18 + chargeGlow*0.08;
    ctx.scale(1/Math.sqrt(squash), Math.sqrt(squash));
    const r = c.r;

    // wheel hints peeking from under the body
    ctx.fillStyle = 'rgba(15,15,20,0.9)';
    const wOffX = r*0.62, wOffY = r*0.68;
    ctx.beginPath(); ctx.ellipse(-wOffX,-wOffY,r*0.2,r*0.13,0,0,Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(wOffX,-wOffY,r*0.2,r*0.13,0,0,Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(-wOffX,wOffY,r*0.2,r*0.13,0,0,Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(wOffX,wOffY,r*0.2,r*0.13,0,0,Math.PI*2); ctx.fill();

    if (c.isPlayer || c.gold){
      ctx.beginPath();
      ctx.arc(0,0, r*1.6, 0, Math.PI*2);
      ctx.strokeStyle = c.isPlayer ? 'rgba(255,120,170,0.95)' : 'rgba(255,210,90,0.95)';
      ctx.lineWidth = 2.6;
      ctx.shadowColor = c.isPlayer ? 'rgba(255,93,162,0.85)' : 'rgba(255,190,60,0.85)';
      ctx.shadowBlur = 12;
      ctx.stroke();
      ctx.shadowBlur = 0;
    }
    if (chargeGlow > 0){
      ctx.beginPath();
      ctx.arc(0,0, r*(1.3+chargeGlow*0.5), 0, Math.PI*2);
      ctx.strokeStyle = `rgba(255,80,80,${0.25+chargeGlow*0.5})`;
      ctx.lineWidth = 2.4;
      ctx.stroke();
    }

    roundRectLocal(-r*0.75, -r*1.02, r*1.5, r*2.04, r*0.52);
    ctx.fillStyle = '#141018';
    ctx.fill();

    const bodyGrad = ctx.createLinearGradient(0,-r,0,r);
    bodyGrad.addColorStop(0, c.pal.top);
    bodyGrad.addColorStop(1, c.pal.bot);
    roundRectLocal(-r*0.68, -r*0.95, r*1.36, r*1.9, r*0.48);
    ctx.fillStyle = bodyGrad;
    ctx.fill();

    ctx.save();
    roundRectLocal(-r*0.68, -r*0.95, r*1.36, r*1.9, r*0.48);
    ctx.clip();
    ctx.fillStyle = c.pal.dark;
    ctx.globalAlpha = 0.35;
    ctx.beginPath();
    ctx.ellipse(0, r*0.75, r*0.85, r*0.5, 0, 0, Math.PI*2);
    ctx.fill();
    ctx.globalAlpha = 1;
    ctx.restore();

    const wsGrad = ctx.createLinearGradient(0,-r*0.55,0,-r*0.02);
    wsGrad.addColorStop(0,'rgba(255,255,255,0.95)');
    wsGrad.addColorStop(1,'rgba(200,225,255,0.75)');
    ctx.fillStyle = wsGrad;
    roundRectLocal(-r*0.42, -r*0.55, r*0.84, r*0.5, r*0.2);
    ctx.fill();

    ctx.fillStyle = 'rgba(255,255,255,0.65)';
    ctx.beginPath(); ctx.arc(-r*0.42,-r*0.78,r*0.13,0,Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.arc(r*0.42,-r*0.78,r*0.13,0,Math.PI*2); ctx.fill();

    ctx.save();
    roundRectLocal(-r*0.68, -r*0.95, r*1.36, r*1.9, r*0.48);
    ctx.clip();
    ctx.fillStyle = 'rgba(255,255,255,0.28)';
    ctx.beginPath();
    ctx.ellipse(-r*0.32, -r*0.1, r*0.22, r*0.65, -0.35, 0, Math.PI*2);
    ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,0.12)';
    ctx.beginPath();
    ctx.ellipse(r*0.28, r*0.35, r*0.14, r*0.4, -0.35, 0, Math.PI*2);
    ctx.fill();
    ctx.restore();

    ctx.restore(); 
  }

  function drawParticles(){
    for (const p of particles){
      ctx.save();
      ctx.globalAlpha = Math.max(p.life,0);
      ctx.translate(p.x,p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size/2,-p.size/2,p.size,p.size);
      ctx.restore();
    }
    ctx.globalAlpha = 1;
  }

  function drawDragGlow(){
    if (!drag || !player || !player.alive) return;
    const dx = drag.x-drag.sx, dy = drag.y-drag.sy;
    const dist = Math.hypot(dx,dy);
    if (dist < 6) return;
    const ux = dx/dist, uy = dy/dist;
    const t = Math.min(Math.max((dist-SWIPE_MIN_DIST)/(SWIPE_MAX_DIST-SWIPE_MIN_DIST),0),1);
    const len = 34 + t*80;
    const ex = player.x + ux*len, ey = player.y + uy*len;
    ctx.save();
    ctx.strokeStyle = `rgba(255,255,255,${0.45+t*0.4})`;
    ctx.lineWidth = 3 + t*2;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(player.x, player.y);
    ctx.lineTo(ex, ey);
    ctx.stroke();
    // arrowhead
    const ang = Math.atan2(uy,ux);
    ctx.translate(ex,ey);
    ctx.rotate(ang);
    ctx.fillStyle = `rgba(255,255,255,${0.6+t*0.35})`;
    ctx.beginPath();
    ctx.moveTo(9+t*4,0); ctx.lineTo(-5,-6-t*3); ctx.lineTo(-5,6+t*3); ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  function drawBlackHole(){
    if (!blackHole) return;
    const {x,y,r,pullR,length,horizontal,spin} = blackHole;
    const w = horizontal ? length : r*2;
    const h = horizontal ? r*2 : length;

    // Subtle danger glow around the knockout strip.
    ctx.save();
    ctx.shadowColor = 'rgba(160,80,255,0.55)';
    ctx.shadowBlur = 14;
    ctx.fillStyle = '#050307';
    roundRectLocal(x-w*0.5, y-h*0.5, w, h, r);
    ctx.fill();
    ctx.shadowBlur = 0;

    // Black strip itself: integrated into the table edge, not a circular hole.
    const g = horizontal
      ? ctx.createLinearGradient(0,y-r,0,y+r)
      : ctx.createLinearGradient(x-r,0,x+r,0);
    g.addColorStop(0,'#21112d');
    g.addColorStop(0.35,'#050308');
    g.addColorStop(0.7,'#000000');
    g.addColorStop(1,'#2a123b');
    ctx.fillStyle = g;
    roundRectLocal(x-w*0.5, y-h*0.5, w, h, r);
    ctx.fill();

    // Moving violet accents make the strip readable as the knockout zone.
    ctx.strokeStyle = 'rgba(190,140,255,0.7)';
    ctx.lineWidth = 2;
    ctx.setLineDash([Math.max(10,r*0.9), Math.max(8,r*0.7)]);
    ctx.lineDashOffset = -spin*20;
    roundRectLocal(x-w*0.5+2, y-h*0.5+2, w-4, h-4, Math.max(3,r-2));
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.restore();
  }

  function render(){
    ctx.save();
    if (shake > 0.05){
      const sx = (Math.random()*2-1)*shake;
      const sy = (Math.random()*2-1)*shake;
      ctx.translate(sx,sy);
    }
    drawArena();
    drawBlackHole();
    const order = cars.slice().sort((a,b)=> (a.y - b.y));
    for (const c of order) drawTrail(c);
    for (const c of order) drawCar(c);
    drawParticles();
    drawDragGlow();
    ctx.restore();
  }

  // ---------- loop ----------
  let lastT = performance.now();
  function loop(t){
    let dt = t - lastT; lastT = t;
    if (dt > 48) dt = 48;
    const frameScale = dt / 16.6667;
    update(frameScale, dt);
    render();
    requestAnimationFrame(loop);
  }

  // ---------- overlay ----------
  const overlay = document.getElementById('overlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlaySub = document.getElementById('overlaySub');
  const overlayScore = document.getElementById('overlayScore');
  const overlayBtn = document.getElementById('overlayBtn');

  function endGame(won){
    state = won ? 'won' : 'lost';
    overlay.style.display = 'flex';
    overlayScore.textContent = 'Score: ' + score;
    if (won){
      overlayTitle.textContent = 'Level Complete!'; overlayTitle.className='win';
      overlaySub.textContent = 'Every car is off the table.';
      overlayBtn.textContent = level>=100 ? 'CAMPAIGN COMPLETE' : 'Next Level';
      sfxWin();
    } else {
      overlayTitle.textContent = 'Knocked Out'; overlayTitle.className='lose';
      overlaySub.textContent = 'Better luck next run.';
      overlayBtn.textContent = 'Try Again';
    }
  }

  document.getElementById('garageBtn').addEventListener('click',()=>{overlay.style.display='none';renderGarage();garage.style.display='flex';});

  overlayBtn.addEventListener('click', ()=>{
    overlay.style.display='none';
    if (state==='won'){ if(level<100){level++;spawnLevel(level);updateHud();} else {overlay.style.display='none';document.getElementById('start').style.display='flex';state='menu';} }
    else { resetGame(); }
    state='playing';
  });

  document.getElementById('startBtn').addEventListener('click', ()=>{
    audio();
    document.getElementById('start').style.display='none';
    resetGame();
  });

  window.addEventListener('resize', resize);
  level = 1;
  resize();
  state='menu'; cars=[]; particles=[]; ambient=[]; shake=0;
  requestAnimationFrame(loop);
})();
