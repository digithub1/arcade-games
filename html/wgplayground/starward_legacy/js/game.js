/* ============================================================
 * game.js — ties it all together: state machine, pools, collisions,
 * HUD, bombs, announcements. Entry point.
 * ========================================================== */
const Game = (() => {
  const { W, H, ctx } = Engine;

  // ---- pools ----
  const pBullets = new Engine.Pool(() => ({}));   // player bullets
  const eBullets = new Engine.Pool(() => ({}));   // enemy bullets
  const enemies  = new Engine.Pool(() => ({}));   // non-boss enemies
  const powerups = new Engine.Pool(() => ({}));
  const floats   = new Engine.Pool(() => ({}));   // floating score/labels

  let player = new Player();
  let boss = null;
  let mode = 'menu';            // menu | playing | gameover | story | paused
  let scrollBoost = 1;          // starfield speed multiplier
  // Intro / cinematic star rush (hyperspace feel). Lerps toward flightBoostTarget.
  let flightBoost = 1, flightBoostTarget = 1;
  let announceText = '', announceColor = '#fff', announceT = 0;
  /** Expanding ring FX for bomb blasts (and similar). */
  const blastRings = [];
  let difficulty = Meta.DIFFICULTIES.normal;   // active run difficulty preset
  let theme = Worlds.WORLDS[0];                // active world theme
  let runType = 'campaign';                    // campaign | endless | daily | stage | contract
  let contractDiff = null;                     // difficulty chosen on the contract launch card
  let contractSlot = 0;                        // which of the day's two contracts is being flown
  let contractFailReason = null;               // why a contract run ended short
  let contractFailT = 0;                       // beat to read the failure before the sheet
  let dailyToday = null;                       // active daily challenge info
  let stage = null;                            // active FTL-map node (stage runs)
  let afterRun = null;                         // where "home" returns to after a run
  let docking = false, dockT = 0;              // base-node docking cinematic
  let finishing = false, finishT = 0, finishKind = null;   // stage-end outro (collect drops)
  let storyResumeMode = null;                  // mode to restore after Story.freeze
  let orbitActive = false;                     // orbit defense/assault replaces normal combat
  let orbitEndT = 0;                           // brief pause after win/lose before map
  let pendingDockDisk = null;                  // log disk to prompt after base docking
  let warpSecs = 0, warpActive = false;        // ⏩ inventory seconds (×1.5)
  let warpModSecs = 0, warpModCap = 0;         // Chrono module pool (spent first, then inventory)
  const WARP_MULT = 1.5;
  function warpTotal() { return (warpSecs || 0) + (warpModSecs || 0); }
  let revivedThisRun = false, lastEarned = 0, lastXp = 0;   // game-over rewarded revive bookkeeping
  let doubledThisRun = false;                              // ×2 credits: once per combat session
  let resultsContinue = null;                              // post-run Continue → map / next
  let bpScoreMark = 0;                         // score watermark for campaign stage BP XP (delta-only)
  const voxFx = [];                            // voxel debris explosions (Vox.boom)
  /** Active ship modules for this run (drones / point-def). Built at beginRun. */
  let combatMods = [];
  function isCampaignStage() { return runType === 'stage'; }
  /** Wipe last combat frame so menu/map never flash the previous battle. */
  function clearBattleFrame() {
    try {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.fillStyle = '#04030e';
      ctx.fillRect(0, 0, W, H);
    } catch (e) {}
  }

  /**
   * Clear ephemeral combat objects (bullets, enemies, pickups, FX).
   * Used when freezing for story/outro or leaving a fight so nothing
   * "hangs frozen" on the last frame.
   * opts.keepPlayer — leave player entity (intro ship during dialogue)
   */
  function clearCombatEphemera(opts) {
    opts = opts || {};
    try {
      pBullets.clear();
      eBullets.clear();
      enemies.clear();
      powerups.clear();
      floats.clear();
      boss = null;
      voxFx.length = 0;
      blastRings.length = 0;
      if (typeof Hazards !== 'undefined' && Hazards.stop) Hazards.stop();
      clearAnnounce();
      endWarp(false);
      if (!opts.keepPlayer) {
        // nothing — player rebuilt in beginRun
      }
      // Input not stuck dragging from previous UI
      if (Engine.input) {
        Engine.input.dragging = false;
        Engine.input.bombQueued = false;
        Engine.input.nukeQueued = false;
      }
    } catch (e) {}
  }

  /**
   * Full handoff cleanup before any major screen (combat, hub, map).
   * Prevents overlays / tips / freeze state leaking into the next view.
   */
  function prepareScreenHandoff(next) {
    // Story must not stay open over combat/hub
    try {
      if (typeof Story !== 'undefined' && Story.isOpen && Story.isOpen() && Story.finish) {
        // finish is private — hide overlay
      }
      const storyEl = document.getElementById('story');
      if (storyEl && !storyEl.classList.contains('hidden')) {
        storyEl.classList.add('hidden');
        storyEl.innerHTML = '';
        storyEl.onclick = null;
        if (mode === 'story') {
          mode = storyResumeMode || 'menu';
          storyResumeMode = null;
        }
      }
    } catch (e) {}
    try {
      if (typeof StoryCine !== 'undefined' && StoryCine.hide) StoryCine.hide();
      else {
        document.querySelectorAll('.story-cine').forEach(n => n.classList.add('hidden'));
      }
    } catch (e) {}
    try {
      document.getElementById('camp-replay-modal')?.remove();
    } catch (e) {}
    try {
      if (typeof Onboarding !== 'undefined') {
        if (Onboarding.clearAll) Onboarding.clearAll();
        else if (Onboarding.hide) Onboarding.hide({ drain: false });
      }
    } catch (e) {}
    try {
      if (typeof Tutorial !== 'undefined' && Tutorial.silence && next !== 'intro') {
        // don't silence mid-intro start
        if (runType !== 'intro' || next === 'hub' || next === 'menu') Tutorial.silence();
      }
    } catch (e) {}
    $('pause') && $('pause').classList.add('hidden');
    if (typeof Engine.resetCam === 'function') Engine.resetCam();
    clearCombatEphemera({ keepPlayer: next === 'story' || next === 'intro' });
    clearBattleFrame();
  }
  // Toggle ⏩ time-warp: needs banked seconds; re-tap turns it off. Speeds the
  // whole battle up so you can blow past wave intros / trivial stages.
  function toggleWarp() {
    if (mode !== 'playing' || docking || finishing) return;
    if (warpActive) { warpActive = false; Engine.setTimeScale(1); }
    else if (warpTotal() > 0.1) { warpActive = true; Engine.setTimeScale(WARP_MULT); }
    updateHud();
  }
  function endWarp(save) {                       // stop + optionally persist remaining seconds
    warpActive = false; Engine.setTimeScale(1);
    if (save) { Profile.get().warp = Math.max(0, Math.round(warpSecs * 10) / 10); Profile.save(); }
  }
  // Effective run modifiers (difficulty × daily mutators). Read by spawner.
  let mods = { enemyHp: 1, bulletSpeed: 1, enemyDensity: 1, poolOverride: null, scoreMult: 1, credits: 1 };

  // Daily challenge escalates the ENVIRONMENT with the wave count: the new
  // chapter-4/5 mechanics fold in one by one, then radiation cranks up — so a
  // maxed loadout can't AFK the late waves anymore.
  const DAILY_HAZARDS = [
    { wave: 6,  key: 'radiation', fn: () => Hazards.enable('radiation') },
    // Jammer bubbles are guaranteed in the daily — it is a long escalating run,
    // and by wave 9 a maxed loadout needs something that isn't more HP.
    { wave: 9,  key: 'bubbles',   fn: () => Hazards.enable('bubbles') },
    { wave: 12, key: 'rocks',     fn: () => Hazards.enable('rocks') },
    { wave: 20, key: 'wind',      fn: () => Hazards.enable('wind') },
    { wave: 30, key: 'homing',    fn: () => Hazards.enable('homing') },
    { wave: 42, key: 'magma',     fn: () => Hazards.enable('magma') },
    { wave: 60, key: 'radiation', fn: () => Hazards.intensify() },
    { wave: 85, key: 'radiation', fn: () => Hazards.intensify() },
  ];
  let dailyHazMark = 0;
  function escalateDailyHazards() {
    const w = Spawner.state.wave;
    while (dailyHazMark < DAILY_HAZARDS.length && w >= DAILY_HAZARDS[dailyHazMark].wave) {
      const h = DAILY_HAZARDS[dailyHazMark++];
      h.fn();
      announce(Tf('ann.hazard', T('haz.' + h.key)), '#ff9a3d');
      hazardTip(h.key);
      Engine.audio.boss && Engine.audio.boss();
    }
  }

  /**
   * Teach a hazard the FIRST time the player meets it, wherever that is.
   *
   * These used to fire only for `type === 'stage'`, so a hazard introduced by a
   * contract or the daily arrived with no explanation at all — and then the
   * campaign "introduced" it later, after the player had already learned it the
   * hard way. Onboarding.seen() already de-dupes, so routing every source
   * through one call means first-encounter wins and it never repeats.
   */
  const HAZ_TIP = {
    magma:     { icon: '\ud83c\udf0b', ms: 5200 },
    radiation: { icon: '\u2622',        ms: 5200 },
    rocks:     { icon: '\ud83e\udea8', ms: 5000 },
    homing:    { icon: '\ud83d\ude80', ms: 5000 },
    wind:      { icon: '\ud83c\udf2a',  ms: 5000 },
    bubbles:   { icon: '\u25cd',        ms: 6000 },
  };
  function hazardTip(key) {
    const d = HAZ_TIP[key];
    if (!d || typeof Onboarding === 'undefined' || !Onboarding.tip) return;
    try {
      // 'side', not 'center': a combat tip must stay out of the lane the player
      // flies in. See .coach-toast.pos-side.
      Onboarding.tip(key, 'tip.' + key, { icon: d.icon, pos: 'side', ms: d.ms, scope: 'combat' });
    } catch (e) {}
  }

  // Contracts bring their own environment: a per-day subset of the late-chapter
  // mechanics, folded in one at a time (never all at once) as the run goes on.
  let contractHazMark = 0;
  let contractHazPlan = null;
  function escalateContractHazards() {
    if (!contractHazPlan) return;
    const w = Contracts.wavesDone();
    while (contractHazMark < contractHazPlan.length && w >= contractHazPlan[contractHazMark].atWave) {
      const h = contractHazPlan[contractHazMark++];
      Hazards.enable(h.key);
      for (let i = 0; i < (h.boost || 0); i++) Hazards.intensify();
      announce(Tf('ann.hazard', T('haz.' + h.key)), '#ff9a3d');
      hazardTip(h.key);
      Engine.audio.boss && Engine.audio.boss();
    }
  }

  // ---- DOM ----
  const $ = id => document.getElementById(id);
  const dom = {
    hud: $('hud'), menu: $('menu'), gameover: $('gameover'),
    score: $('hud-score'), wave: $('hud-wave'), shield: $('hud-shield'),
    weapons: $('hud-weapons'), bombs: $('hud-bombs'), goStats: $('go-stats'),
    nuke: $('hud-nuke'), barrier: $('hud-barrier'), sphere: $('hud-sphere'), warp: $('hud-warp'),
  };

  /* =================== spawning API =================== */
  function spawnPlayerBullets(specs) {
    try { Contracts.weaponFired(player.weapon); } catch (e) {}
    const mastery = Meta.weaponDmgMult(Profile.get(), player.weapon);   // per-weapon Damage training
    for (const s of specs) {
      const b = pBullets.spawn();
      Object.assign(b, s);
      // meta/ship/mastery scaling × Overcharge (maxed-weapon pickups, +8%/stack)
      b.dmg = s.dmg * player.dmgMult * mastery * (1 + (player.overcharge || 0) * 0.08);
      if (player.fusePartner && player.fuseT > 0) {
        try {
          const prof = Profile.get();
          if (Meta.hasModuleEquipped && Meta.hasModuleEquipped(prof, 'priority')) {
            const pk = Meta.priorityWeapon ? Meta.priorityWeapon(prof) : '';
            if (pk && (player.weapon === pk || player.fusePartner === pk)) b.dmg *= 1.10;
          }
        } catch (e) {}
      }
      if (player.critChance && Math.random() < player.critChance) b.dmg *= 2;   // Crit Matrix
      b.pierce = (s.pierce || 0) + player.pierceBonus;      // Piercer (extra pass-through)
      b.hits = 0;
      // Reset pooled special-flags so a recycled nuke/missile bullet never leaks
      // its behaviour into an ordinary shot (Object.assign only copies keys in s).
      b.nuke = false;
      b.homing = !!s.homing;
      b.long = !!s.long;
      b.kind = s.kind || 'shot';
      b.spawnT = s.homing ? 0 : undefined;
      b.homeId = s.homeId != null ? s.homeId : null;
      b.homeIsBoss = !!s.homeIsBoss;
    }
  }
  // Whether a weapon may drop / be equipped this run (progressive campaign unlock).
  function isWeaponUnlocked(key) { return Meta.weaponUnlocked(key, Profile.get()); }
  function spawnEnemyBullet(x, y, vx, vy, r = 5) {
    const b = eBullets.spawn();
    let s = mods.bulletSpeed;                    // difficulty × daily scales fire speed
    // endless/daily: bullets speed up with the wave (later waves fire noticeably faster)
    if (Spawner.state.mode !== 'campaign') s *= 1 + Math.min(Spawner.state.wave, 90) * 0.006;
    b.x = x; b.y = y; b.vx = vx * s; b.vy = vy * s; b.r = r;
  }
  /** Predicted voxel load if we add `extra` rock-weight. Used to snap asteroid LOD at spawn. */
  function predictVoxLoad(extra) {
    let load = extra || 0;
    enemies.each(en => {
      if (!en.alive) return;
      load += 1;
      if (en.type === 'asteroid') load += 1;
      if (en.type === 'debris') load += 0.5;
    });
    if (boss && boss.alive) load += 3;
    if (combatMods) combatMods.forEach(m => { if (m.kind === 'droneAtk') load += 1; });
    const frameMs = Game._lastFrameMs || 16;
    return load >= 10 || frameMs > 22;
  }
  function spawnEnemy(type, x, y) {
    const def = Enemies.types[type];
    // Boss keys in a wave pool used to throw here and freeze the whole stage.
    if (!def) { try { console.warn('[spawnEnemy] unknown type:', type); } catch (e) {} return; }
    const e = enemies.spawn();
    e.type = type; e.def = def;
    e.x = x; e.y = y;
    // Pool reuse: wipe intro-only flags so they never leak into normal combat.
    e._introRock = false;
    e.onDeathExtra = null;
    // HP scales with difficulty × daily × progression so enemies keep pace with the
    // player's growing DPS (later waves stay a threat instead of dying at the top).
    const w = Spawner.state.wave;
    const endless = Spawner.state.mode !== 'campaign';
    // Daily/endless ramp is steeper and uncapped so late waves stay a real threat
    // (a maxed loadout shouldn't AFK wave 100). Campaign keeps the gentler curve.
    let waveScale = 1 + Math.min(w - 1, 40) * (endless ? 0.06 : 0.045);   // ×3.4 by wave 40 (daily)
    if (endless && w > 40) waveScale += (w - 40) * 0.035;                 // then keeps climbing
    e.hp = def.hp * mods.enemyHp * waveScale;
    // endless/daily "fatten" past mid-game: bigger body + extra HP so high waves
    // feel heavier. Campaign difficulty comes from chapters/bosses, not an HP slog.
    const fat = (endless && w > 20) ? Math.min(0.55, (w - 20) * 0.016) : 0;
    e.r = def.r * (1 + fat);
    if (fat) e.hp *= 1 + fat;
    // Every enemy carries its own max — percentage-of-health effects (Sphere,
    // nuke) need a denominator, and archetypes that read e.hp/e.maxHp used to
    // rely on def.init happening to set it. Set before init so init can override.
    e.maxHp = e.hp;
    // Sphere dwell time is per-enemy and MUST NOT survive pool recycling: a
    // reused slot would inherit the previous occupant's ramp and start taking
    // fully-ramped damage on frame one.
    e._sphereT = 0; e._sphereFxT = 0;
    e.color = def.color; e.score = def.score; e.flash = 0; e.isBoss = false;
    e.simpleRock = false;
    if (def.init) def.init(e);
    // Asteroid LOD: snap at spawn from predicted load. Intro rocks stay full voxel.
    if ((type === 'asteroid' || type === 'debris') && !e._introRock) {
      const extra = type === 'asteroid' ? 2 : 1;
      e.simpleRock = predictVoxLoad(extra);
    }
    return e;
  }
  /** Stable id of this boss fight — first-ever encounter keeps launch HP. */
  function firstBossGateKey(hpScale) {
    const kind = (hpScale && hpScale < 1) ? 'mid' : 'main';
    if (stage && stage.id != null) {
      const part = (typeof Campaign !== 'undefined' && Campaign.part) ? Campaign.part() : 0;
      return 'n' + part + ':' + stage.id + ':' + kind;
    }
    const w = (typeof Spawner !== 'undefined' && Spawner.state) ? (Spawner.state.wave | 0) : 0;
    return (runType || 'run') + ':' + w + ':' + kind;
  }
  // Breakable ("knock it down") boss shell. Enemies authors it as 22% of the RAW
  // hull, but every difficulty/chapter multiplier lands on the hull only — so the
  // same shell was ~46% of the HP bar on Casual and ~5% on Ultra. Re-anchor it to
  // a flat share of the FINAL hull: one gate, identical on every difficulty and
  // in every chapter. 0.11 ≈ ×5 the launch share (Normal keeps its current feel).
  // 0.26: a trained gun was popping the 0.11 shell almost on contact, so the
  // "knock the shield down" beat never happened. ×2.4 makes it a real gate.
  const SHELL_SHARE = 0.26;
  const SHELL_SHARE_FIRST = 0.045;   // a new pilot's first boss keeps a soft shell
  /** Re-anchor the regen shell once all hull multipliers are in. */
  function fitBossShell(share) {
    if (!boss || !boss.shield || boss.shield.mode !== 'regen') return;
    boss.shield.maxHp = boss.maxHp * share;
    boss.shield.hp = boss.shield.maxHp;   // regen shells enter the fight raised
  }
  function spawnBoss(wave, worldKey, hpScale) {
    boss = Enemies.makeBoss(worldKey, wave);
    // Boss HP uses mods.bossHp (not enemyHp) so mob 2× does not also 2× bosses.
    let bh = (mods.bossHp != null ? mods.bossHp : mods.enemyHp);
    // Sole difficulty exception: first warlord on Easy keeps launch HP.
    if (difficulty && difficulty.key === 'casual' && stage && stage.warlord && typeof Campaign !== 'undefined'
      && Campaign.part && Campaign.part() === 1) {
      bh = 0.8;
    }
    const s = bh * (hpScale || 1);                 // hpScale<1 → mid-stage interlude boss
    boss.hp *= s;
    boss.maxHp *= s;
    // ×3 HP on every boss except the first one a new player actually fights.
    // Same node/kind stays exempt on retry; any later fight is tripled.
    let tripled = true;
    try {
      const p = Profile.get();
      const key = firstBossGateKey(hpScale);
      if (!p.firstBossKey) {
        // Existing saves that already cleared a stage: no first-boss exemption.
        const progressed = (p.stagesCleared | 0) > 0;
        p.firstBossKey = progressed ? '__seen__' : key;
        Profile.save();
      }
      tripled = p.firstBossKey !== key;
    } catch (e) { tripled = true; }
    if (tripled) {
      boss.hp *= 3;
      boss.maxHp *= 3;
    }
    // Final warlord (Silo): ×3 on top of existing scaling, any difficulty.
    if (worldKey === 'silo') {
      boss.hp *= 3;
      boss.maxHp *= 3;
    }
    // Heliot was overtuned on Normal+. Mild cut; Casual keeps launch feel.
    if (worldKey === 'heliot' && difficulty && difficulty.key !== 'casual') {
      boss.hp *= 0.82;
      boss.maxHp *= 0.82;
    }
    // Shell last — it is a share of the FINAL hull, so every multiplier above
    // (difficulty, first-boss gate, silo, heliot) is already folded in.
    fitBossShell(tripled ? SHELL_SHARE : SHELL_SHARE_FIRST);
    Music.play('boss');
  }
  function runMods() { return mods; }
  function setTheme(world) {
    theme = world;
    Engine.setStarColor(world.star);
  }
  /** Intro lesson only: soft asteroid that scatters mixed pickups on death. */
  function spawnIntroAsteroid() {
    if (runType !== 'intro') return; // hard gate — never arm multi-drop outside intro
    const e = spawnEnemy('asteroid', Engine.W * 0.5, 90);
    if (!e) return;
    // asteroid.init() parks it off-screen — pin it for the lesson
    e.x = Engine.W * 0.5; e.y = 110;
    e.simpleRock = false; // intro lesson always shows the live voxel rock
    e.vx = 0; e.vy = 48; e.freeX = true;
    e.hp = 14; e.maxHp = 14;
    e._introRock = true;
    // Intro-only multi-drop (skip asteroid debris onDeath via killEnemy branch)
    e.onDeathExtra = () => {
      if (runType !== 'intro') return;
      const kinds = ['shield', 'score', 'spread', 'bomb'];
      kinds.forEach((k, i) => {
        const a = (i / kinds.length) * Math.PI * 2;
        dropPowerUp(e.x + Math.cos(a) * 28, e.y + Math.sin(a) * 16, k);
      });
    };
  }

  /**
   * A guaranteed weapon drop in the opening waves of the player's VERY FIRST
   * real fight — and nowhere else.
   *
   * The first campaign node is where casual players are lost: the run starts on
   * a stock gun, and if the random drops happen to hand out weapons the player
   * is not flying, the fight is a grind with nothing to show for it. Everything
   * after the first upgrade is fine, so the fix is narrow on purpose.
   *
   * It drops the weapon the player is ACTUALLY using, so the pickup levels up
   * the gun in their hands instead of unlocking a fourth one they will not
   * switch to.
   *
   * Scoped exactly like the first-boss exemption above, and for the same
   * reason: keyed to the node, so retrying that node keeps the help, while any
   * later fight — including a replay of the campaign after a wipe — gets none.
   * `stagesCleared` is global and permanent, so a returning player never sees it.
   */
  const FIRST_FIGHT_WAVES = 2;      // opening two waves, then the game is the game
  function firstFightBoon(waveNo) {
    if (waveNo > FIRST_FIGHT_WAVES) return;
    if (runType !== 'stage' || !stage || stage.id == null) return;
    try {
      const p = Profile.get();
      if ((p.stagesCleared | 0) > 0) return;          // not their first fight
      const part = (typeof Campaign !== 'undefined' && Campaign.part) ? Campaign.part() : 0;
      const key = 'n' + part + ':' + stage.id;
      if (!p.firstFightKey) { p.firstFightKey = key; Profile.save(); }
      if (p.firstFightKey !== key) return;            // a different node — no help
      const kind = (player && player.weapon) || 'cannon';
      // Top-centre and drifting down, exactly like a normal drop: it should read
      // as good luck, not as a gift box handed over by the game.
      dropPowerUp(Engine.W * 0.5, -20, kind);
    } catch (e) {}
  }

  function powerupCount() {
    let n = 0;
    powerups.each(() => { n++; });
    return n;
  }

  function dropPowerUp(x, y, kind) {
    const p = powerups.spawn();
    p.kind = kind || PowerUps.rollKind();
    p.x = x; p.y = y; p.r = 12; p.t = 0; p.bob = 0;
  }
  function floatText(x, y, text, color) {
    const f = floats.spawn();
    f.x = x; f.y = y; f.text = text; f.color = color || '#fff'; f.life = 0.9;
  }
  function announce(text, color) { announceText = text; announceColor = color || '#fff'; announceT = 1.8; }
  /** Drop any leftover banner from the previous fight before a new run paints. */
  function clearAnnounce() { announceText = ''; announceT = 0; }

  /** Word-wrap a string for canvas fillText (centered multi-line banners). */
  function wrapAnnounceLines(ctx, text, maxW) {
    const raw = String(text || '').replace(/\s+/g, ' ').trim();
    if (!raw) return [];
    const words = raw.split(' ');
    const lines = [];
    let line = '';
    for (let i = 0; i < words.length; i++) {
      const w = words[i];
      const test = line ? line + ' ' + w : w;
      if (ctx.measureText(test).width > maxW && line) {
        lines.push(line);
        line = w;
      } else {
        line = test;
      }
    }
    if (line) lines.push(line);
    // Hard-break any leftover overlong token
    const out = [];
    for (const ln of lines) {
      if (ctx.measureText(ln).width <= maxW) { out.push(ln); continue; }
      let chunk = '';
      for (const ch of ln) {
        const t2 = chunk + ch;
        if (ctx.measureText(t2).width > maxW && chunk) { out.push(chunk); chunk = ch; }
        else chunk = t2;
      }
      if (chunk) out.push(chunk);
    }
    return out;
  }
  function drawAnnounceBanner(ctx, yCenter, opts) {
    if (announceT <= 0 || !announceText) return;
    opts = opts || {};
    let fontSize = opts.fontSize || 28;
    const maxW = opts.maxW != null ? opts.maxW : W - 36;
    ctx.save();
    ctx.globalAlpha = Engine.clamp(announceT, 0, 1);
    ctx.fillStyle = announceColor;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = announceColor;
    ctx.shadowBlur = opts.shadow != null ? opts.shadow : 18;
    // Fit long banners: wrap, then shrink font if too many lines
    let lines, lineH;
    for (let attempt = 0; attempt < 4; attempt++) {
      ctx.font = `bold ${fontSize}px Trebuchet MS, sans-serif`;
      lineH = opts.lineH ? Math.round(opts.lineH * (fontSize / (opts.fontSize || 28))) : Math.round(fontSize * 1.22);
      lines = wrapAnnounceLines(ctx, announceText, maxW);
      if (lines.length <= 3 || fontSize <= 16) break;
      fontSize = Math.max(16, fontSize - 4);
    }
    if (lines.length > 4) lines = lines.slice(0, 4);
    const totalH = (lines.length - 1) * lineH;
    const y0 = yCenter - totalH * 0.5;
    for (let i = 0; i < lines.length; i++) {
      ctx.fillText(lines[i], W * 0.5, y0 + i * lineH);
    }
    ctx.shadowBlur = 0;
    ctx.restore();
  }

  function spawnBlastRing(x, y, maxR, color, life) {
    blastRings.push({
      x, y, r: 8, maxR: maxR || 100, color: color || '#ff4adf',
      life: life || 0.42, t: 0,
    });
  }
  function updateBlastRings(dt) {
    for (let i = blastRings.length - 1; i >= 0; i--) {
      const b = blastRings[i];
      b.t += dt;
      const u = Engine.clamp(b.t / b.life, 0, 1);
      // ease-out expand
      b.r = b.maxR * (1 - (1 - u) * (1 - u));
      if (u >= 1) blastRings.splice(i, 1);
    }
  }
  function drawBlastRings(ctx) {
    if (!blastRings.length) return;
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    for (const b of blastRings) {
      const u = Engine.clamp(b.t / b.life, 0, 1);
      const a = (1 - u) * 0.85;
      ctx.strokeStyle = b.color;
      ctx.globalAlpha = a;
      ctx.lineWidth = 3.5 * (1 - u * 0.5);
      ctx.beginPath(); ctx.arc(b.x, b.y, b.r, 0, Engine.TAU); ctx.stroke();
      ctx.globalAlpha = a * 0.45;
      ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.arc(b.x, b.y, b.r * 0.72, 0, Engine.TAU); ctx.stroke();
    }
    ctx.restore();
  }

  /**
   * Cinematic star rush (intro dialogue hyperspace, etc.).
   * target: mult of normal scroll; instant=true snaps without ease.
   */
  function setFlightBoost(target, instant) {
    flightBoostTarget = Math.max(0.2, target == null ? 1 : target);
    if (instant) flightBoost = flightBoostTarget;
  }
  function updateFlightBoost(dt) {
    const k = Math.min(1, dt * 2.4);
    flightBoost += (flightBoostTarget - flightBoost) * k;
    if (Math.abs(flightBoost - flightBoostTarget) < 0.03) flightBoost = flightBoostTarget;
  }
  function scrollStars(dt, mult) {
    Engine.updateStars(dt, mult);
  }
  /**
   * Extra "meteor rain" streaks — never on intro (reads as messy rain on top of
   * the real starfield hyperspace scroll). Normal runs keep them for boost FX.
   */
  function drawFlightStreaks() {
    if (runType === 'intro') return; // only kill diagonal streak layer on intro
    if (flightBoost < 2.2) return;
    const n = Math.min(28, Math.floor((flightBoost - 2) * 10));
    const a = Engine.clamp((flightBoost - 2) / 5, 0, 0.55);
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    ctx.strokeStyle = `rgba(180, 220, 255, ${a})`;
    ctx.lineWidth = 1.4;
    for (let i = 0; i < n; i++) {
      const x = ((i * 97 + (performance.now() * 0.08 * flightBoost)) % (W + 40)) - 20;
      const len = 18 + (i % 5) * 14 + flightBoost * 6;
      const y0 = (i * 53 + performance.now() * 0.35 * flightBoost) % (H + len) - len;
      ctx.beginPath();
      ctx.moveTo(x, y0);
      ctx.lineTo(x, y0 + len);
      ctx.stroke();
    }
    ctx.restore();
  }

  /**
   * Research lab terminal — warehouse sibling, not a loot dump.
   * Salvage is already in cargo. Real control: pick one protocol gift + read archive.
   */
  function showResearchResults(rw, opts) {
    opts = opts || {};
    const onDone = opts.onDone || openCampaignMap;
    try {
      document.getElementById('gameover')?.classList.add('hidden');
      document.getElementById('hangar')?.classList.add('hidden');
      document.getElementById('rewards')?.classList.add('hidden');
    } catch (e) {}

    const frame = document.getElementById('game-frame') || document.body;
    const prev = frame.querySelector('#research-found-modal');
    if (prev) prev.remove();

    const role = rw.role || (rw.log ? 'universe' : 'pilot');
    const hasLog = role === 'universe' && rw.log;
    const logId = rw.log || '01';
    const logTitle = hasLog ? T('rlog.' + logId + '.title') : '';
    const logBody = hasLog ? T('rlog.' + logId + '.body') : '';
    const logPrev = hasLog ? logBody.split('\n')[0] : '';
    const diskId = rw.disk || null;
    const code = (typeof Campaign !== 'undefined' && Campaign.labCode)
      ? Campaign.labCode(rw.nodeId != null ? rw.nodeId : (stage && stage.id))
      : '20-100';
    const gifts = Array.isArray(rw.gifts) ? rw.gifts.slice() : (rw.freeUpg ? [rw.freeUpg] : []);
    const satN = typeof rw.sat === 'number' ? rw.sat : (rw.sat ? 1 : 0);

    const cargo = [];
    if (satN > 0) cargo.push({ ico: '🛰', label: satN > 1 ? Tf('orbit.research.satN', satN) : T('orbit.research.sat') });
    if (rw.warp) cargo.push({ ico: '⏩', label: Tf('orbit.research.warp', rw.warp) });
    if (rw.credits) cargo.push({ ico: Icons.svg('credit', 16), label: '+' + rw.credits.toLocaleString() });
    if (rw.gems) cargo.push({ ico: Icons.svg('gem', 16), label: '+' + rw.gems });
    if (opts.runCredits) cargo.push({ ico: '★', label: '+' + opts.runCredits.toLocaleString() + ' ' + T('go.credits', 'cr'), muted: true });

    const greetPool = [T('rsch.say.greet0'), Tf('rsch.say.greet1', code), T('rsch.say.greet2')];
    const greet = greetPool[Math.floor(Math.random() * greetPool.length)];

    const modal = document.createElement('div');
    modal.id = 'research-found-modal';
    modal.className = 'ftl-modal ftl-modal-anim research-found-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');

    let settled = false;
    let giftPicked = false;
    let pickedGiftIdx = -1;
    let appliedGift = null;
    let typeTimer = null;
    let labAnim = null;

    const applyGift = (up, idx, replace) => {
      if (!up) return;
      if (giftPicked && !replace) return;
      if (replace && appliedGift && Campaign.revertAssaultFreeUpgrade) {
        Campaign.revertAssaultFreeUpgrade(appliedGift);
      }
      giftPicked = true;
      if (idx != null) pickedGiftIdx = idx;
      appliedGift = up;
      if (typeof Campaign !== 'undefined' && Campaign.applyAssaultFreeUpgrade) {
        Campaign.applyAssaultFreeUpgrade(up);
      }
    };
    const settle = () => {
      if (settled) return;
      settled = true;
      if (!giftPicked && gifts.length) {
        applyGift(gifts.find(g => g.kind === 'gold') || gifts[0]);
      }
      if (typeTimer) { clearInterval(typeTimer); typeTimer = null; }
      if (labAnim) { clearInterval(labAnim); labAnim = null; }
      modal.remove();
      if (onDone) onDone();
    };

    const typeSpeech = (el, text) => {
      if (typeTimer) clearInterval(typeTimer);
      if (!el) return;
      el.textContent = '';
      el.classList.add('typing');
      let i = 0;
      typeTimer = setInterval(() => {
        i++;
        el.textContent = text.slice(0, i);
        if (i >= text.length) {
          clearInterval(typeTimer); typeTimer = null;
          el.classList.remove('typing');
        }
      }, 18);
    };

    const paintLabCore = (cv) => {
      if (!cv) return;
      const w = cv.width, h = cv.height, x = cv.getContext('2d');
      const t = performance.now() / 1000;
      x.clearRect(0, 0, w, h);
      const bg = x.createLinearGradient(0, 0, 0, h);
      bg.addColorStop(0, '#06141c'); bg.addColorStop(1, '#02080e');
      x.fillStyle = bg; x.fillRect(0, 0, w, h);
      const cx = w * 0.5, cy = h * 0.52;
      x.save();
      x.translate(cx, cy);
      x.strokeStyle = `rgba(80,220,210,${0.35 + 0.2 * Math.sin(t * 2)})`;
      x.lineWidth = 2;
      x.beginPath(); x.arc(0, 0, 28, 0, Math.PI * 2); x.stroke();
      x.rotate(t * 0.7);
      x.beginPath(); x.arc(0, 0, 22, 0.2, 2.2); x.stroke();
      x.rotate(-t * 1.4);
      x.strokeStyle = 'rgba(140,255,220,0.45)';
      x.beginPath(); x.arc(0, 0, 16, -1, 1.4); x.stroke();
      x.setTransform(1, 0, 0, 1, 0, 0);
      const pulse = 0.45 + 0.4 * Math.sin(t * 3.2);
      x.shadowColor = 'rgba(80,255,220,0.7)'; x.shadowBlur = 14;
      x.fillStyle = `rgba(90,255,220,${pulse})`;
      x.beginPath(); x.arc(cx, cy, 7, 0, Math.PI * 2); x.fill();
      x.shadowBlur = 0;
      x.restore();
      x.fillStyle = 'rgba(0,0,0,0.2)';
      for (let y = 0; y < h; y += 3) x.fillRect(0, y, w, 1);
      if (Math.random() < 0.28) {
        const gy = (Math.random() * h) | 0;
        x.drawImage(cv, 0, gy, w, 3, (Math.random() * 6 - 3) | 0, gy, w, 3);
      }
    };

    const cargoHtml = cargo.map(c =>
      `<div class="lab-row ${c.muted ? 'muted' : ''}">
        <span class="lab-row-ico">${c.ico}</span>
        <span class="lab-row-label">${c.label}</span>
        <span class="lab-row-tag">${T('rsch.inHold')}</span>
      </div>`).join('');

    const giftHtml = gifts.length ? `
      <div class="lab-sec-label">${T('rsch.giftTitle')}</div>
      <div class="lab-gift-hint">${T('rsch.giftHint')}</div>
      ${gifts.map((g, i) => {
        const lbl = g.scrap || g.kind === 'gold'
          ? `${Icons.svg('credit', 14)} ${T('rsch.giftScrap')} · ${(g.gold || 1500).toLocaleString()}`
          : (formatAssaultFreeUpg(g) || T('rsch.giftTitle'));
        return `<button type="button" class="lab-gift-btn${i === 0 ? ' picked' : ''}" data-gift="${i}">${lbl}</button>`;
      }).join('')}` : '';

    const archiveHtml = hasLog ? `
      <div class="lab-sec-label">${T('rsch.logLabel')}</div>
      <div class="rsch-log-card">
        <div class="rsch-log-title">${logTitle}</div>
        <div class="rsch-log-prev">${logPrev}</div>
        <button type="button" class="btn btn-ghost rsch-log-read" id="rsch-read">${T('rsch.read')}</button>
      </div>` : (diskId ? `
      <div class="lab-sec-label">${T('rsch.pilotLabel')}</div>
      <div class="rsch-log-card">
        <div class="rsch-log-title">${T('disk.' + diskId + '.title')}</div>
        <div class="rsch-log-prev">${T('disk.' + diskId + '.body').split('\n')[0]}</div>
        <div class="hg-hint" style="margin:6px 0 0">${T('rsch.pilotHint')}</div>
      </div>` : '');

    const showMain = () => {
      modal.innerHTML = `
        <div class="ftl-modal-card ftl-card-anim trader-card lab-card">
          <div class="trader-head">
            <div class="trader-bot-wrap lab-core-wrap">
              <canvas class="trader-bot" id="lab-core" width="120" height="120" aria-hidden="true"></canvas>
              <div class="trader-bot-frame"></div>
            </div>
            <div class="trader-id">
              <div class="trader-name">${Tf('rsch.unit', code)}</div>
              <div class="trader-sub">${T('rsch.tagline')}</div>
            </div>
            <button type="button" class="hub-icon-btn trader-x" id="rsch-x" aria-label="${T('btn.back')}">✕</button>
          </div>
          <div class="trader-speech">
            <div class="trader-speech-label">${T('rsch.says')}</div>
            <div class="trader-speech-text" id="lab-speech"></div>
          </div>
          <div class="trader-body lab-body">
            <div class="lab-sec-label">${T('rsch.cargo')}</div>
            ${cargoHtml || `<div class="lab-row muted"><span class="lab-row-label">${T('rsch.cargoEmpty')}</span></div>`}
            ${giftHtml}
            ${archiveHtml}
          </div>
          <button type="button" class="btn btn-cta set-wide" id="rsch-done">${T('rsch.leave')}</button>
        </div>`;

      const cv = modal.querySelector('#lab-core');
      paintLabCore(cv);
      if (labAnim) clearInterval(labAnim);
      labAnim = setInterval(() => {
        if (!cv || !cv.isConnected) { clearInterval(labAnim); labAnim = null; return; }
        paintLabCore(cv);
      }, 90);
      typeSpeech(modal.querySelector('#lab-speech'), greet);

      modal.querySelector('#rsch-done').onclick = settle;
      modal.querySelector('#rsch-x').onclick = settle;
      modal.querySelectorAll('[data-gift]').forEach(b => {
        const i = +b.dataset.gift;
        b.disabled = false;
        b.classList.toggle('picked', giftPicked && i === pickedGiftIdx);
        b.onclick = () => {
          if (giftPicked && i === pickedGiftIdx) return;
          const up = gifts[i];
          applyGift(up, i, giftPicked);
          modal.querySelectorAll('[data-gift]').forEach(x => {
            x.classList.toggle('picked', +x.dataset.gift === pickedGiftIdx);
          });
          typeSpeech(modal.querySelector('#lab-speech'), T('rsch.say.gift'));
          try { Engine.audio.power(); } catch (e) {}
        };
      });
      // Always pre-select protocol 1 so leaving without a click still grants it.
      if (!giftPicked && gifts.length) applyGift(gifts[0], 0);
      // Paint the live pick AFTER the pre-select (the loop above ran before it).
      modal.querySelectorAll('[data-gift]').forEach(x => {
        x.classList.toggle('picked', giftPicked && +x.dataset.gift === pickedGiftIdx);
      });
      const rb = modal.querySelector('#rsch-read');
      if (rb) rb.onclick = showLogReader;
    };

    const showLogReader = () => {
      if (!hasLog) return;
      if (labAnim) { clearInterval(labAnim); labAnim = null; }
      modal.innerHTML = `
        <div class="disk-found-reader ftl-card-anim" role="document">
          <div class="disk-tablet rsch-tablet">
            <div class="disk-tablet-bezel">
              <div class="disk-tablet-cam" aria-hidden="true"></div>
              <div class="disk-tablet-screen">
                <div class="disk-read-head">
                  <span class="disk-read-id">🔬 ${logId}</span>
                  <button type="button" class="disk-read-x" id="rsch-log-x" aria-label="${T('disk.close')}">✕</button>
                </div>
                <div class="disk-read-title">${logTitle}</div>
                <div class="disk-read-body">${logBody}</div>
              </div>
            </div>
            <button type="button" class="btn btn-cta set-wide" id="rsch-log-back">${T('rsch.backToLoot')}</button>
          </div>
        </div>`;
      modal.querySelector('#rsch-log-x').onclick = showMain;
      modal.querySelector('#rsch-log-back').onclick = showMain;
    };

    showMain();
    frame.appendChild(modal);
    modal.addEventListener('click', e => { if (e.target === modal) settle(); });
  }

  /**
   * After a disk drop: single-layer prompt (never stacked on gameover).
   * Read expands inline to the tablet body — no hangar detour, then onDone → map.
   */
  function promptDiskFound(diskId, onDone) {
    if (!diskId) { if (onDone) onDone(); return; }
    // One modal only: hide results sheet first so we never stack overlays
    try {
      const go = document.getElementById('gameover');
      if (go) go.classList.add('hidden');
      document.getElementById('hangar')?.classList.add('hidden');
    } catch (e) {}

    const frame = document.getElementById('game-frame') || document.body;
    const prev = frame.querySelector('#disk-found-modal');
    if (prev) prev.remove();

    const title = T('disk.' + diskId + '.title');
    const body = T('disk.' + diskId + '.body');
    const preview = body.split('\n')[0];

    const modal = document.createElement('div');
    modal.id = 'disk-found-modal';
    modal.className = 'ftl-modal ftl-modal-anim disk-found-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');

    const showPrompt = () => {
      modal.innerHTML = `
        <div class="ftl-modal-card ftl-card-anim disk-found-card">
          <div class="disk-found-ico" aria-hidden="true">📀</div>
          <div class="disk-found-title">${T('disk.promptTitle')}</div>
          <div class="disk-found-name">${title}</div>
          <div class="disk-found-prev">${preview}</div>
          <div class="btn-col disk-found-actions">
            <button type="button" class="btn btn-cta" id="disk-found-read">${T('disk.read')}</button>
            <button type="button" class="btn btn-ghost" id="disk-found-later">${T('disk.later')}</button>
          </div>
        </div>`;
      modal.querySelector('#disk-found-later').onclick = settle;
      modal.querySelector('#disk-found-read').onclick = showReader;
    };

    const showReader = () => {
      modal.innerHTML = `
        <div class="disk-found-reader ftl-card-anim" role="document">
          <div class="disk-tablet">
            <div class="disk-tablet-bezel">
              <div class="disk-tablet-cam" aria-hidden="true"></div>
              <div class="disk-tablet-screen">
                <div class="disk-read-head">
                  <span class="disk-read-id">📀 ${diskId}</span>
                  <button type="button" class="disk-read-x" id="disk-found-x" aria-label="${T('disk.close')}">✕</button>
                </div>
                <div class="disk-read-title">${title}</div>
                <div class="disk-read-body">${body}</div>
              </div>
            </div>
            <button type="button" class="btn btn-cta set-wide" id="disk-found-done">${T('disk.close')}</button>
          </div>
        </div>`;
      modal.querySelector('#disk-found-x').onclick = settle;
      modal.querySelector('#disk-found-done').onclick = settle;
    };

    let settled = false;
    const settle = () => {
      if (settled) return;
      settled = true;
      modal.remove();
      if (onDone) onDone();
    };

    showPrompt();
    frame.appendChild(modal);
    modal.addEventListener('click', e => { if (e.target === modal) settle(); });
  }
  function enemyCount() { return enemies.active.length; }

  /* =================== scoring =================== */
  function addScore(n) {
    player.score += n;
    const val = dom.score.querySelector('.hud-score-val');
    if (val) val.textContent = player.score.toLocaleString();
    else dom.score.textContent = player.score.toLocaleString();
  }

  /* =================== pause =================== */
  function togglePause() {
    if (mode === 'playing') {
      mode = 'paused';
      if (warpActive) Engine.setTimeScale(1);    // don't over-accumulate while paused
      const mapBtn = document.getElementById('pause-map');
      // Campaign vertical stages + orbit modes can return to the FTL map
      const canMap = runType === 'stage' || runType === 'orbit_defense' || runType === 'orbit_assault';
      if (mapBtn) mapBtn.classList.toggle('hidden', !canMap);
      document.getElementById('pause').classList.remove('hidden');
      Engine.input.dragging = false;             // drop any held drag
      if (Platform.sdk && Platform.sdk.gameplayStop) Platform.sdk.gameplayStop();
    } else if (mode === 'paused') {
      resumeGame();
    }
  }
  function resumeGame() {
    if (mode !== 'paused') return;
    mode = 'playing';
    if (warpActive) Engine.setTimeScale(WARP_MULT);
    document.getElementById('pause').classList.add('hidden');
    if (Platform.sdk && Platform.sdk.gameplayStart) Platform.sdk.gameplayStart();
  }

  // Optional interstitial ad shown in the between-stage safety window (every 2nd stage).
  let stageAdCount = 0;
  function stageInterstitial() {
    if (++stageAdCount % 2 !== 0) return;
    if (!Store.adsEnabled() || !Platform.caps.interstitial) return;
    // Freeze + mute while the fullscreen ad is up, resume when it closes. Shown
    // only in the between-stage safety window, never during active gameplay.
    onAdOpen();
    try { Promise.resolve(Platform.sdk.showInterstitial()).catch(() => {}).then(onAdClose); }
    catch (e) { onAdClose(); }
  }

  // Sticky bottom banner: shown on menu/home/game-over screens, hidden the
  // instant a battle starts so it never covers the play area (opt-out via noAds).
  function updateSticky() {
    try { (mode !== 'playing' && mode !== 'paused' && Store.adsEnabled()) ? Platform.showSticky() : Platform.hideSticky(); }
    catch (e) {}
  }

  // Re-render whichever dynamic overlay is open (used when the language flips
  // right after the platform SDK reports the real host locale).
  function refreshOpenScreen() {
    const vis = id => { const e = document.getElementById(id); return e && !e.classList.contains('hidden'); };
    try {
      if (vis('hub')) Hub.render();
      if (vis('hangar')) Hangar.render();
      if (vis('shop')) Shop.render();
      if (vis('season')) BattlePass.render();
      if (vis('campaignMap')) CampaignMap.render();
      if (vis('rewards')) Missions.render && Missions.render();
    } catch (e) {}
  }

  // ---- Ad lifecycle: an ad taking over the screen MUST freeze the battle and
  // mute audio so the player is never hit while watching (platform rule + UX).
  // Routed through Store so every platform/placement is covered uniformly.
  let adActive = false;
  /**
   * `isAd` false = the host merely took the screen (tab hidden, payment sheet).
   * Freeze and mute exactly the same, but say nothing: GamePush fires `pause`
   * on every minimise, and announcing an ad break there meant "📺 Реклама…"
   * flashed every single time the player came back, with no ad behind it.
   */
  function onAdOpen(isAd) {
    if (adActive) return;
    adActive = true;
    if (isAd !== false && mode === 'playing') { announce(T('ad.break'), '#ffe24a'); }
    try { Engine.audio.setMuted(true); Music.setMuted(true); const c = Engine.audio.ctx; if (c && c.state === 'running') c.suspend(); } catch (e) {}
  }
  function onAdClose() {
    if (!adActive) return;
    adActive = false;
    const m = Profile.get().settings.muted;                          // restore the player's own mute pref
    try { Engine.audio.setMuted(m); Music.setMuted(m); const c = Engine.audio.ctx; if (c && c.state === 'suspended' && !document.hidden) c.resume(); } catch (e) {}
  }
  function isAdActive() { return adActive; }

  /* =================== super weapons (one equipped per run) =================== */
  function superChargeCount(kind) {
    if (!player) return 0;
    if (kind === 'bomb') return player.bombs | 0;
    if (kind === 'nuke') return player.nukes | 0;
    if (kind === 'barrier') return player.barriers | 0;
    if (kind === 'sphere') return player.spheres | 0;
    return 0;
  }
  function hasSuperCharge() {
    return superChargeCount(player.superWeapon || 'bomb') > 0;
  }
  function grantSuperXp(kind, amount) {
    try {
      if (typeof Meta !== 'undefined' && Meta.addSuperXp) {
        Meta.addSuperXp(Profile.get(), kind, amount);
        Profile.save();
      }
    } catch (e) {}
  }

  /** Min gap between super uses in vertical combat (anti-spam). Defense has its own CDs. */
  const SUPER_MIN_CD = 1.5;
  let superCdT = 0;
  /** Max CD for progress bar (set when a super fires). */
  let superCdMax = SUPER_MIN_CD;

  /** Ensure ordnance button has icon / CD / stock / progress structure. */
  function ensureOrdShell(el) {
    if (!el) return null;
    let ic = el.querySelector('.hud-ord-ic');
    let cdEl = el.querySelector('.hud-ord-cd');
    let n = el.querySelector('.hud-ord-n');
    let bar = el.querySelector('.hud-ord-pbar');
    if (!ic || !n || !cdEl || !bar) {
      el.innerHTML =
        '<span class="hud-ord-ic"></span>' +
        '<span class="hud-ord-cd" hidden></span>' +
        '<span class="hud-ord-n"></span>' +
        '<span class="hud-ord-pbar" aria-hidden="true"><i></i></span>';
      ic = el.querySelector('.hud-ord-ic');
      cdEl = el.querySelector('.hud-ord-cd');
      n = el.querySelector('.hud-ord-n');
      bar = el.querySelector('.hud-ord-pbar');
    }
    return { ic, cdEl, n, bar, fill: bar && bar.querySelector('i') };
  }

  /** Paint CD overlay: live seconds with "s" + progress bar remaining→ready. */
  function paintOrdCd(shell, onCd, cdLeft, cdMax) {
    if (!shell) return;
    const { cdEl, fill } = shell;
    if (onCd && cdLeft > 0) {
      cdEl.hidden = false;
      // Always one decimal so the number visibly ticks every ~0.1s (not only whole seconds)
      const shown = Math.max(0.1, Math.ceil(cdLeft * 10) / 10);
      cdEl.textContent = shown.toFixed(1) + 's';
      if (fill) {
        const max = Math.max(0.001, cdMax || cdLeft);
        fill.style.width = (Math.max(0, Math.min(1, 1 - cdLeft / max)) * 100) + '%';
      }
    } else {
      cdEl.hidden = true;
      cdEl.textContent = '';
      if (fill) fill.style.width = '100%';
    }
  }

  function clearSuperQueues() {
    Engine.input.bombQueued = false;
    Engine.input.nukeQueued = false;
  }

  /**
   * Manual fire: only the hangar-equipped super.
   * Optimistic CD lock before effect so multi-click / dual-queue cannot double-fire.
   */
  function useSuper() {
    if (mode !== 'playing' || !player) return false;
    const sk = player.superWeapon || 'bomb';
    // Jammed by a bubble: no super launches at all. Deliberately checked before
    // the cooldown arms, so being jammed never eats a charge or a cooldown.
    if (player && player.jamT > 0) {
      clearSuperQueues();
      announce(T('ann.jammed'), player.jamColor || '#ff4a6a');
      try { Engine.audio.deny ? Engine.audio.deny() : Engine.audio.blip(150, 0.06, 'square', 0.07); } catch (e) {}
      return false;
    }
    // Barrier / Sphere: cannot recast while the shell is up (CD starts when it expires).
    if ((sk === 'barrier' && player.barrierT > 0) || (sk === 'sphere' && player.sphereT > 0)) {
      clearSuperQueues();
      try { Engine.audio.deny ? Engine.audio.deny() : Engine.audio.blip(180, 0.05, 'square', 0.06); } catch (e) {}
      return false;
    }
    if (superCdT > 0) {
      clearSuperQueues();
      try { Engine.audio.deny ? Engine.audio.deny() : Engine.audio.blip(180, 0.05, 'square', 0.06); } catch (e) {}
      return false;
    }
    // Bomb/nuke lock immediately. Barrier/sphere CD is armed when the shell ends.
    if (sk !== 'barrier' && sk !== 'sphere') {
      superCdT = SUPER_MIN_CD;
      superCdMax = SUPER_MIN_CD;
    }
    clearSuperQueues();
    let ok = false;
    if (sk === 'bomb') ok = useBomb();
    else if (sk === 'nuke') ok = useNuke();
    else if (sk === 'sphere') ok = useSphere();
    else ok = useBarrier();
    if (!ok) {
      // No stock / failed — refund CD so empty spam doesn't soft-lock for 1.5s.
      superCdT = 0;
      try { Engine.audio.deny ? Engine.audio.deny() : Engine.audio.blip(180, 0.05, 'square', 0.06); } catch (e) {}
    } else if (typeof updateHud === 'function') {
      try { Contracts.superUsed(); } catch (e) {}
      updateHud();
    }
    return ok;
  }

  /**
   * Fire a super effect without consuming that type's stock (pickup of unequipped).
   * Still grants XP and respects trained level.
   */
  function fireSuperInstant(kind) {
    if (!player || mode !== 'playing') return;
    // Count toward missions (use, not stock) even without consuming hangar charges
    if (kind === 'bomb') { Missions.track('bombs', 1); detonateBomb(false); }
    else if (kind === 'nuke') { Missions.track('nukes', 1); launchNuke(false); }
    else if (kind === 'barrier') { Missions.track('barriers', 1); activateBarrier(false); }
    else if (kind === 'sphere') { Missions.track('barriers', 1); activateSphere(false); }
  }

  function detonateBomb(consume) {
    if (consume) {
      if (player.bombs <= 0) return false;
      player.bombs--;
      Missions.track('bombs', 1);
      grantSuperXp('bomb', 6);
    }
    const st = Meta.superStats(Profile.get(), 'bomb');
    Engine.audio.bomb();
    Engine.shake(18);
    player.invuln = Math.max(player.invuln, 1.0);
    // Always clear bullets
    eBullets.clear();
    const fxR = Math.max(90, st.enemyR || 90);
    spawnBlastRing(player.x, player.y, fxR, '#ff4adf', 0.4);
    if (st.enemyR > 0) spawnBlastRing(player.x, player.y, st.enemyR * 0.55, '#ff9adf', 0.28);
    Engine.burst(player.x, player.y, '#ff4adf', 50, 8, 5);
    // Orbit assault: damage sockets / guns / hangar via OrbitModes
    if (orbitActive && typeof OrbitModes !== 'undefined' && OrbitModes.getKind
      && OrbitModes.getKind() === 'assault' && OrbitModes.playerBlast) {
      OrbitModes.playerBlast({
        r: Math.max(fxR, st.enemyR || 110),
        dmg: (st.dmg || 40) * (player.dmgMult || 1),
      });
    } else if (st.enemyR > 0) {
      // L1: bullets only. L2+: damage enemies (and boss) inside radius.
      const r2 = st.enemyR * st.enemyR;
      const dmg = st.dmg * (player.dmgMult || 1);
      enemies.each(e => {
        if (!e.alive) return;
        if (Engine.dist2(player.x, player.y, e.x, e.y) < r2) {
          e.hp -= dmg; e.flash = 0.1;
          if (e.hp <= 0) killEnemy(e);
        }
      });
      if (boss && boss.alive && boss.entered && Engine.dist2(player.x, player.y, boss.x, boss.y) < r2) {
        hitBoss(dmg * 1.4, boss.x, boss.y);
      }
      if (boss && boss.alive && boss.def && boss.def.splashExtras) {
        boss.def.splashExtras(boss, player.x, player.y, st.enemyR, dmg);
      }
    }
    floatText(player.x, player.y - 30, T('ann.bomb'), '#ff4adf');
    updateHud();
    return true;
  }
  function useBomb() {
    if (mode !== 'playing') return false;
    return !!detonateBomb(true);
  }

  function launchNuke(consume) {
    if (consume) {
      if (player.nukes <= 0) return false;
      player.nukes--;
      Missions.track('nukes', 1);
      grantSuperXp('nuke', 7);
    }
    const st = Meta.superStats(Profile.get(), 'nuke');
    Engine.audio.sweep(300, 900, 0.25, 'sawtooth', 0.16);
    // Assault owns its bullet list — detonate as a wide blast near the base
    if (orbitActive && typeof OrbitModes !== 'undefined' && OrbitModes.getKind
      && OrbitModes.getKind() === 'assault' && OrbitModes.playerBlast) {
      OrbitModes.playerBlast({
        r: Math.max(st.r || 140, 140),
        dmg: (st.dmg || 80) * (player.dmgMult || 1),
      });
      Engine.burst(player.x, player.y - 80, '#ffe24a', 40, 8, 5);
      floatText(player.x, player.y - 30, T('ann.nuke'), '#ffe24a');
      updateHud();
      return true;
    }
    const b = pBullets.spawn();
    Object.assign(b, {
      x: player.x, y: player.y - 22, vx: 0, vy: -16,
      dmg: st.dmg * (player.dmgMult || 1), color: '#ffe24a', r: 8,
      kind: 'nuke', nuke: true, nukeR: st.r,
      nukeHpShare: st.hpShare || 0, nukeBossShare: st.bossShare || 0,
      pierce: 0, hits: 0, long: false, homing: false,
    });
    floatText(player.x, player.y - 30, T('ann.nuke'), '#ffe24a');
    updateHud();
    return true;
  }
  function useNuke() {
    if (mode !== 'playing') return false;
    return !!launchNuke(true);
  }

  function activateBarrier(consume) {
    if (consume) {
      if (player.barriers <= 0) return false;
      player.barriers--;
      Missions.track('barriers', 1);
      grantSuperXp('barrier', 5);
    }
    const st = Meta.superStats(Profile.get(), 'barrier');
    const dur = st.duration;
    player.barrierT = Math.max(player.barrierT || 0, dur);
    player.invuln = Math.max(player.invuln, dur);
    Engine.audio.power();
    Engine.burst(player.x, player.y, '#6effc0', 28, 4, 3);
    spawnBlastRing(player.x, player.y, 40, '#6effc0', 0.3);
    floatText(player.x, player.y - 30, T('ann.barrier'), '#6effc0');
    updateHud();
    return true;
  }
  function useBarrier() {
    if (mode !== 'playing') return false;
    return !!activateBarrier(true);
  }

  function activateSphere(consume) {
    if (consume) {
      if ((player.spheres || 0) <= 0) return false;
      player.spheres--;
      Missions.track('barriers', 1);
      grantSuperXp('sphere', 6);
    }
    const st = Meta.superStats(Profile.get(), 'sphere');
    const dur = st.duration;
    player.sphereT = Math.max(player.sphereT || 0, dur);
    player.sphereR = st.r || 56;
    player.invuln = Math.max(player.invuln, dur);
    Engine.audio.power();
    Engine.burst(player.x, player.y, '#c86cff', 32, 5, 3);
    Engine.burst(player.x, player.y, '#6effa0', 18, 4, 3);
    spawnBlastRing(player.x, player.y, player.sphereR, '#c86cff', 0.32);
    floatText(player.x, player.y - 30, T('ann.sphere'), '#c86cff');
    updateHud();
    return true;
  }
  function useSphere() {
    if (mode !== 'playing') return false;
    return !!activateSphere(true);
  }

  /**
   * A jammer bubble caught the ship: guns, passive systems and supers go dark
   * for `sec`. Movement is untouched on purpose — the answer to a bubble is to
   * fly, not to out-trade it. Called from hazards.js on contact.
   */
  function jamPlayer(sec, color, kind, takeHelm) {
    if (!player || mode !== 'playing') return;
    const dur = Math.max(0.5, sec || 2);
    // Catching a second bubble while still jammed ADDS half the new lockout on
    // top of what is left, instead of just taking the longer of the two — being
    // sloppy twice has to cost more than being sloppy once. Half, not full, so a
    // bad patch of sky can never chain into a permanent lockout.
    const already = player.jamT || 0;
    player.jamT = already > 0 ? already + dur * 0.5 : dur;
    player.jamColor = color || '#ff4a6a';
    // Any active weapon/super state is a "system", so the jam kills it: the
    // Sphere shell surviving a jam let the player ignore the whole mechanic.
    player.sphereT = 0; player.sphereR = 0; player.sphereBurn = 0;
    player.barrierT = 0;
    player.overdriveT = 0;
    player.fuseT = 0; player.fusePartner = null;
    superCdT = 0; superCdMax = 0;
    if (takeHelm) {
      // Helm loss is strictly SHORTER than the systems lockout: being unable to
      // shoot is survivable, being unable to steer is not, so it always ends
      // first and hands the ship back while the jam is still running.
      player.helmT = Math.max(player.helmT || 0, dur * 0.55);
      player.helmDrift = Engine.rand(-1, 1);
    }
    announce(T(takeHelm ? 'ann.helmLost' : 'ann.jammed'), player.jamColor);
    // Explain the mechanic the first time one actually grabs you — a tip fired
    // when the hazard merely exists on the map teaches nothing.
    hazardTip('bubbles');
    if (takeHelm && typeof Onboarding !== 'undefined' && Onboarding.tip) {
      try {
        Onboarding.tip('helm', 'tip.helm', { icon: '\u2716', pos: 'side', ms: 5200, scope: 'combat' });
      } catch (e) {}
    }
    // No float here: the attached bubble carries its own countdown right above
    // the hull, and a second label landed straight on top of it.
    Engine.shake(takeHelm ? 16 : 10);
    Engine.burst(player.x, player.y, player.jamColor, 22, 4, 3);
    try { takeHelm ? Engine.audio.helmLost() : Engine.audio.jam(); } catch (e) {}
    try { Analytics.hazardHit && Analytics.hazardHit({ hazard: 'bubble', kind, mode: runType }); } catch (e) {}
  }

  /** A jammer bubble draining the hull — one shield per tick, routed through the
   *  normal damage path so Casual auto-bomb and revive still behave. */
  function jamDrain(color) {
    if (!player || mode !== 'playing' || !player.alive) return;
    const inv = player.invuln;
    player.invuln = 0;                    // the drain is not dodgeable by i-frames
    damagePlayer();
    if (player.alive) player.invuln = Math.max(inv, 0.35);
    Engine.burst(player.x, player.y, color || '#ff4a6a', 14, 3.4, 2.6);
    Engine.shake(7);
  }

  function detonateNuke(x, y, dmg, r, shares) {
    const R = r || 130;
    // Flat damage plus a share of the target's own max health, so one nuke stays
    // a real dent whether the hull is 300 or 30 000. Bosses take a much smaller
    // share on purpose — a nuke should hurt a warlord, not delete a phase.
    const hpShare = (shares && shares.hp) || 0;
    const bossShare = (shares && shares.boss) || 0;
    Engine.audio.explode(); Engine.audio.bomb(); Engine.shake(26);
    Engine.burst(x, y, '#ffe24a', 55, 9, 7); Engine.burst(x, y, '#ff8a3d', 45, 7, 6);
    spawnBlastRing(x, y, R, '#ffe24a', 0.45);
    spawnBlastRing(x, y, R * 0.55, '#ff8a3d', 0.32);
    const r2 = R * R;
    enemies.each(e => {
      if (!e.alive || Engine.dist2(x, y, e.x, e.y) >= r2) return;
      hitEnemy(e, dmg + (e.maxHp || e.hp || 0) * hpShare, e.x, e.y);
    });
    if (boss && boss.alive && boss.entered && Engine.dist2(x, y, boss.x, boss.y) < r2) {
      hitBoss(dmg + (boss.maxHp || 0) * bossShare, boss.x, boss.y, { pierceArmor: true });
    }
    if (boss && boss.alive && boss.def && boss.def.splashExtras) {
      boss.def.splashExtras(boss, x, y, R, dmg);
    }
    eBullets.each(b => { if (b.alive && Engine.dist2(x, y, b.x, b.y) < r2) b.alive = false; });
  }
  // detonate any live nuke that reaches an enemy / boss / the top of the screen
  function updateNukes() {
    pBullets.each(b => {
      if (!b.alive || !b.nuke) return;
      // Detonate before pool retirement (movement kills at y < -20)
      let hit = b.y < 52;
      if (!hit) enemies.each(e => {
        if (e.alive && Engine.dist2(b.x, b.y, e.x, e.y) < (e.r + b.r + 6) * (e.r + b.r + 6)) hit = true;
      });
      if (!hit && boss && boss.alive && boss.entered) {
        const br = boss.r + b.r + 10;
        if (Engine.dist2(b.x, b.y, boss.x, boss.y + 8) < br * br) hit = true;
      }
      if (hit) {
        detonateNuke(b.x, b.y, b.dmg, b.nukeR, { hp: b.nukeHpShare, boss: b.nukeBossShare });
        b.alive = false;
      }
    });
  }

  /* =================== collisions =================== */
  function hitEnemy(e, dmg, hx, hy) {
    e.hp -= dmg; e.flash = 0.06;
    Engine.burst(hx, hy, e.color, 3, 2, 2);
    Engine.burst(hx, hy, '#ffffff', 2, 3, 1.6);          // armor sparks — hits feel crunchy
    if (e.hp <= 0) killEnemy(e);
  }
  function killEnemy(e) {
    Engine.audio.explode();
    Engine.burst(e.x, e.y, e.color, 16, 5, 4);
    Engine.burst(e.x, e.y, '#fff', 8, 6, 3);
    Vox.boom(voxFx, e.x, e.y, { size: Engine.clamp(e.r / 15, 0.6, 2), colors: [e.color, '#ffd24a', '#8d95a8'] });
    Engine.shake(4);
    const pts = Math.round(e.score * mods.scoreMult);
    addScore(pts);
    floatText(e.x, e.y, '+' + pts, '#fff');
    // Multi-drop (4 pickups) ONLY for the intro lesson asteroid — never normal combat.
    // (Pool reuse used to leave onDeathExtra/_introRock on recycled enemies.)
    const introLesson = runType === 'intro' && e._introRock;
    if (introLesson) {
      if (typeof e.onDeathExtra === 'function') {
        try { e.onDeathExtra(); } catch (err) {}
      }
    } else {
      if (e.def && e.def.onDeath) e.def.onDeath(e);
      // Single random drop as before (no multi-drop hooks outside intro)
      if (Math.random() < 0.28 * player.luckMult) dropPowerUp(e.x, e.y);
    }
    Missions.track('kills', 1);
    if (typeof Meta !== 'undefined' && Meta.addWeaponXp && player && player.weapon) {
      Meta.addWeaponXp(Profile.get(), player.weapon, Math.max(4, Math.round((e.score || 20) * 0.12)));
    }
    // Clear flags before pool free so the next occupant starts clean
    e._introRock = false;
    e.onDeathExtra = null;
    e.alive = false;
  }

  // Single entry point for the player getting hit. In Casual, an incoming
  // killing blow auto-triggers a bomb instead of ending the run (GDD: always
  // give a path to safety).
  function damagePlayer() {
    // Stage outro / dock / victory beat — never a cheap post-kill death
    if (finishing || docking) return;
    if (player.invuln > 0 || (player.barrierT && player.barrierT > 0) || (player.sphereT && player.sphereT > 0)) return;
    // Casual safety net: auto-fire equipped super instead of dying.
    if (player.shield <= 0 && difficulty.autoBomb && hasSuperCharge()) {
      const sk = player.superWeapon || 'bomb';
      useSuper();
      player.shield = 1; player.invuln = Math.max(player.invuln, 1.2);
      const autoLbl = sk === 'barrier' ? T('ann.autoBarrier')
        : sk === 'sphere' ? T('ann.autoSphere')
        : sk === 'nuke' ? T('ann.autoNuke') : T('ann.autoBomb');
      floatText(player.x, player.y - 30, autoLbl, '#ffe24a');
      return;
    }
    // Revive Core charge (meta upgrade): consume to survive a killing blow.
    if (player.shield <= 0 && player.revives > 0) {
      player.revives--;
      player.shield = Math.max(1, Math.ceil(player.maxShield / 2));
      player.invuln = 1.6;
      eBullets.clear();
      Engine.audio.revive();
      Engine.shake(16);
      Engine.burst(player.x, player.y, '#ff6ad0', 30, 5, 4);
      floatText(player.x, player.y - 30, T('ann.revive'), '#ff6ad0');
      return;
    }
    try { Contracts.hit(); } catch (e) {}
    if (player.takeHit(1)) endGame();
  }

  function nearestEnemy(x, y) {
    let best = null, bd = Infinity;
    enemies.each(e => { const d = Engine.dist2(x, y, e.x, e.y); if (d < bd) { bd = d; best = e; } });
    // Only target the boss once it has ENTERED — otherwise homing shots lock onto
    // its off-screen spawn point and pile up, then all strike the instant it arrives.
    if (boss && boss.alive && boss.entered) { const d = Engine.dist2(x, y, boss.x, boss.y); if (d < bd) best = boss; }
    return best;
  }

  /**
   * Missile lock: target must sit in a vertical corridor (halfW) ahead of the ship.
   * Returns { id, isBoss } or null — used once at fire time (sticky).
   */
  let _missileIdSeq = 1;
  function lockMissileTarget(sx, sy, halfW) {
    halfW = halfW || 42;
    let best = null, bd = Infinity;
    enemies.each(e => {
      if (!e.alive || e.y >= sy - 8) return;
      if (Math.abs(e.x - sx) > halfW) return;
      const d = Engine.dist2(sx, sy, e.x, e.y);
      if (d < bd) { bd = d; best = e; }
    });
    if (boss && boss.alive && boss.entered && boss.y < sy - 8 && Math.abs(boss.x - sx) <= halfW + boss.r * 0.35) {
      const d = Engine.dist2(sx, sy, boss.x, boss.y);
      if (d < bd) return { id: 'boss', isBoss: true };
    }
    if (!best) return null;
    if (best._mid == null) best._mid = _missileIdSeq++;
    return { id: best._mid, isBoss: false };
  }
  function resolveMissileHome(b) {
    if (!b.homing) return null;
    if (b.homeIsBoss) {
      return (boss && boss.alive && boss.entered) ? boss : null;
    }
    if (b.homeId == null) return null;
    let found = null;
    enemies.each(e => { if (e.alive && e._mid === b.homeId) found = e; });
    return found;
  }

  /** Apply damage to boss, respecting temporary shield variants. Returns true if kill. */
  function hitBoss(dmg, hx, hy, opts) {
    if (!boss || !boss.alive || !boss.entered) return false;
    opts = opts || {};
    const bdef = boss.def;
    boss._lastHurt = 0;
    if (!opts.pierceArmor && bdef && bdef.hitRedirect) {
      const r = bdef.hitRedirect(boss, dmg, hx, hy);
      if (r === true) {
        // Redirect may spend hull HP itself (privateer batteries). Don't leave a 0-HP immortal.
        if (boss.hp <= 0) { killBoss(); return true; }
        return false;
      }
      if (typeof r === 'number') dmg = r;
    }
    if (!opts.pierceShield && typeof Enemies !== 'undefined' && Enemies.absorbBossHit && Enemies.absorbBossHit(boss, dmg, hx, hy)) {
      return false; // breakable / orbit / pulse shield ate the hit
    }
    boss.hp -= dmg;
    if (!opts.silent) {
      boss.flash = 0.05;
      Engine.burst(hx, hy, '#ff5bd0', 3, 2, 2);
    }
    if (boss.hp <= 0) { killBoss(); return true; }
    return false;
  }

  function collisions(dt) {
    // player bullets → enemies / boss
    // Nukes are exclusive to updateNukes() — if collisions eat them first, the
    // detonation FX/AoE never runs (especially noticeable on bosses).
    pBullets.each(b => {
      if (!b.alive || b.nuke) return;
      enemies.each(e => {
        if (!b.alive || !e.alive) return;
        if (Engine.dist2(b.x, b.y, e.x, e.y) < (e.r + b.r) * (e.r + b.r)) {
          hitEnemy(e, b.dmg, b.x, b.y);
          if (b.pierce && b.hits < b.pierce) { b.hits++; } else { b.alive = false; }
        }
      });
      if (b.alive && boss && boss.alive && boss.entered && boss.def && boss.def.strikeExtras) {
        if (boss.def.strikeExtras(boss, b)) {
          if (b.pierce && b.hits < b.pierce) b.hits++; else b.alive = false;
        }
      }
      if (b.alive && boss && boss.alive && boss.entered) {
        if (Engine.dist2(b.x, b.y, boss.x, boss.y + 8) < (boss.r + b.r) * (boss.r + b.r)) {
          hitBoss(b.dmg, b.x, b.y);
          if (b.pierce && b.hits < b.pierce) b.hits++; else b.alive = false;
        }
      }
    });

    // enemy bullets → player (Sphere shell eats them first)
    eBullets.each(b => {
      if (!b.alive) return;
      if (player.sphereT > 0 && player.sphereR > 0
        && Engine.dist2(b.x, b.y, player.x, player.y) < (player.sphereR + b.r) * (player.sphereR + b.r)) {
        b.alive = false;
        Engine.burst(b.x, b.y, '#c86cff', 2, 1.4, 1.4);
        return;
      }
      if (Engine.dist2(b.x, b.y, player.x, player.y) < (player.r + b.r) * (player.r + b.r)) {
        b.alive = false;
        damagePlayer();
      }
    });

    // enemy bodies → player
    enemies.each(e => {
      if (!e.alive) return;
      if (player.sphereT > 0 && player.sphereR > 0
        && Engine.dist2(e.x, e.y, player.x, player.y) < (e.r + player.sphereR) * (e.r + player.sphereR)) {
        // Inside the shell the enemy is held off the hull and ground down by
        // tickSphere. It is NOT deleted on contact: that was a 9999 nuke that
        // erased anything at any HP, which is what made the Sphere read as an
        // instant-clear button rather than a damage field.
        return;
      }
      if (Engine.dist2(e.x, e.y, player.x, player.y) < (e.r + player.r) * (e.r + player.r)) {
        hitEnemy(e, 9999, e.x, e.y); // ram destroys most enemies
        damagePlayer();
      }
    });
    if (boss && boss.alive && boss.entered && Engine.dist2(boss.x, boss.y, player.x, player.y) < (boss.r + player.r) * (boss.r + player.r)) {
      if (!(player.sphereT > 0)) damagePlayer();
    }

    // powerups → player (generous pickup radius)
    powerups.each(p => {
      if (!p.alive) return;
      if (Engine.dist2(p.x, p.y, player.x, player.y) < (p.r + player.r + 14) * (p.r + player.r + 14)) {
        addScore(PowerUps.collect(p));
        Missions.track('powerups', 1); try { Contracts.pickup(); } catch (e) {}
        Engine.burst(p.x, p.y, PowerUps.kinds[p.kind].color, 10, 3, 3);
        Vox.boom(voxFx, p.x, p.y, { size: 0.35, colors: [PowerUps.kinds[p.kind].color, '#ffffff'] });
        p.alive = false;
      }
    });
  }

  function killBoss() {
    try { Contracts.bossKilled(); } catch (e) {}
    const bx = boss.x, by = boss.y;          // capture before nulling (setTimeouts fire later)
    Engine.audio.explode(); Engine.audio.bomb();
    Engine.shake(26);
    Vox.boom(voxFx, bx, by, { size: 2.8, colors: ['#a878b8', '#ffd24a', '#ff4adf'] });
    for (let i = 0; i < 6; i++) setTimeout(() => {
      Engine.burst(bx + Engine.rand(-50, 50), by + Engine.rand(-40, 40), '#fff', 18, 6, 5);
      Vox.boom(voxFx, bx + Engine.rand(-60, 60), by + Engine.rand(-40, 40), { size: 1.1, colors: ['#9aa5bd', '#ffd24a'] });
    }, i * 90);
    addScore(Math.round(boss.score * mods.scoreMult));
    Missions.track('boss', 1);
    Analytics.bossDefeated({ boss: boss.sprite || 'boss', wave: Spawner.state.wave, mode: runType });
    announce(T('ann.bossDown'), '#7dffa0');
    // Guaranteed boss drops (2) — multi-drop showers reserved for intro asteroid only
    for (let i = 0; i < 2; i++) dropPowerUp(bx + Engine.rand(-50, 50), by + Engine.rand(-16, 28));
    boss.alive = false;
    boss = null;
    // Kill-frame safety: leftover volleys used to kill during the 700ms death beat
    // (before stageWon → beginFinish). Fizzle bullets + short invuln cushion.
    eBullets.each(b => { if (b.alive) Engine.burst(b.x, b.y, '#ff8a8a', 2, 1.5, 2); });
    eBullets.clear();
    if (player) player.invuln = Math.max(player.invuln || 0, 3.5);
    // Short cinematic hold so the kill reads before waves/spawner advance
    setTimeout(() => { Spawner.bossDefeated(); }, 700);
  }

  // Freeze/unfreeze combat while Comm Window is open (Story.play pauseGame).
  function freezeForStory(on) {
    if (on) {
      // Always enter story freeze when asked — intro briefing can race menu/playing.
      if (mode !== 'story') {
        storyResumeMode = (mode === 'playing' || mode === 'paused') ? mode : 'playing';
        mode = 'story';
      }
      // Kill frozen bullets/enemies so only the ship + stars animate behind plates.
      clearCombatEphemera({ keepPlayer: true });
      if (player) {
        player.fireT = 999; // no auto-fire while frozen
        // Cinematic safe: invuln ≥ 3 never blinks; _cineSafe is belt-and-suspenders
        // (story step skips player.update so invuln would otherwise freeze mid-blink).
        player.invuln = 999;
        player._cineSafe = true;
        player.alive = true;
        // Park ship in the clear window under dialogue cards so the briefing
        // sells "you're flying" (intro hyperspace + campaign pre-fight).
        if (runType === 'intro' || runType === 'stage') {
          player.x = W * 0.5;
          player.y = H * 0.58;
          if (Engine.input) {
            Engine.input.px = player.x;
            Engine.input.py = player.y;
          }
        }
      }
    } else if (mode === 'story') {
      mode = storyResumeMode || 'playing';
      storyResumeMode = null;
      if (player) {
        player._cineSafe = false;
        // Auto-fire was parked at 999 on freeze. EVERY run type has to get it
        // back — restoring it for 'intro' only left the ship silent for the
        // whole of every campaign stage (999s until the first shot).
        player.fireT = runType === 'intro' ? 0.2 : 0.12;
        // Drop cinematic invuln back to a short cushion
        if (player.invuln >= 10) player.invuln = 0.4;
      }
      // Re-arm the environment. The freeze wipes combat ephemera, and that path
      // calls Hazards.stop() — correct when leaving combat, silently fatal here:
      // a node's radiation / rocks / magma / wind / bubbles were configured in
      // beginRun and then killed by the pre-fight dialogue, so any stage with a
      // briefing spent the whole fight with NO hazards at all.
      try {
        if (runType === 'stage' && stage) Hazards.start(stage.hazards || {});
        else if (runType === 'contract') {
          Hazards.start({ bubbleTier: contractDiff === 'brutal' ? 4 : contractDiff === 'casual' ? 2 : 3 });
          contractHazMark = 0;
        }
      } catch (e) {}
    }
  }

  // Show a pre-sector story dialogue (legacy linear campaign path).
  function playStory(worldIndex) {
    if (runType !== 'campaign' || mode !== 'playing') return;
    Story.show(worldIndex, null);
  }

  /** Queue story scripts then invoke cb. Each item: { id, opts } or function(next). */
  function runStoryChain(steps, cb) {
    const q = (steps || []).slice();
    const next = () => {
      if (!q.length) { if (cb) cb(); return; }
      const step = q.shift();
      if (typeof step === 'function') { step(next); return; }
      if (!step || !step.id) { next(); return; }
      // Story.play always invokes onDone (including once-already-seen / empty).
      Story.play(step.id, Object.assign({ once: true, pauseGame: false }, step.opts || {}, { onDone: next }));
    };
    next();
  }

  // Persist furthest campaign world cleared (world index is 0-based).
  function onWorldCleared(idx) {
    const prof = Profile.get();
    if (idx + 1 > prof.campaignBest) {
      prof.campaignBest = idx + 1; Profile.save();
      // a new weapon may unlock at this milestone
      const wk = Meta.weaponUnlockedAtSector(prof.campaignBest);
      if (wk) { announce(Tf('ann.newWeapon', T('weapon.' + wk)), '#7de0ff'); Engine.audio.power(); }
    }
  }

  // Campaign finished — celebrate, store the record, then drop back to the hub.
  function victory() {
    if (mode !== 'playing' && mode !== 'gameover') return;
    if (player) {
      player.invuln = 999;
      addScore(25000);
    }
    eBullets.each(b => { if (b.alive) Engine.burst(b.x, b.y, '#ff8a8a', 2, 1.5, 2); });
    eBullets.clear();
    const prof = Profile.get();
    if (player && player.score > (prof.highScore || 0)) prof.highScore = player.score;
    if (typeof Campaign !== 'undefined' && Campaign.setBestScore && player) {
      Campaign.setBestScore(player.score);
    }
    if (!prof.campaignEverCleared) prof.campaignEverCleared = true;
    Profile.save();
    Engine.audio.victory();
    Music.play('menu');
    announce(T('ann.campaignCleared'), '#ffe24a');
    setTimeout(() => {
      prepareScreenHandoff('hub');
      mode = 'menu';
      orbitActive = false;
      if (typeof OrbitModes !== 'undefined') OrbitModes.stop();
      endWarp(true);
      Hazards.stop();
      if (dom.hud) dom.hud.classList.add('hidden');
      if (dom.gameover) dom.gameover.classList.add('hidden');
      const pauseEl = document.getElementById('pause');
      if (pauseEl) pauseEl.classList.add('hidden');
      Hub.open({ trans: 'cube' });
    }, 1400);
  }

  /* =================== update =================== */
  function step(dt) {
    if (adActive) return;                                // ad on screen → freeze the whole battle
    // Story freeze: combat AI paused; starfield still rushes (intro hyperspace).
    // Keep thruster animation alive so the ship reads as "flying".
    if (mode === 'story') {
      updateFlightBoost(dt);
      if (player) {
        player.thrust = 0.85 + 0.15 * Math.sin(performance.now() / 90);
        // Mild bank sway so the hull reads as flying (intro + pre-fight briefing)
        player.bank = Math.sin(performance.now() / 900) * 0.12;
      }
      if (flightBoost > 1.05) {
        scrollStars(dt, flightBoost);
        Engine.updateParticles(dt);
      } else {
        Engine.updateParticles(dt);
      }
      return;
    }
    if (mode === 'paused') return;

    // Orbit modes (base defense / relay assault)
    if (orbitActive && typeof OrbitModes !== 'undefined') {
      if (announceT > 0) announceT -= dt;
      const oKind = OrbitModes.getKind && OrbitModes.getKind();
      // Defense: base supers. Assault: same ship supers as vertical combat.
      if (mode === 'playing' && oKind === 'defense') {
        if (Engine.input.swipeUp) {
          Engine.input.swipeUp = false;
          if (OrbitModes.cycleSuper) OrbitModes.cycleSuper(-1);
        }
        if (Engine.input.swipeDown) {
          Engine.input.swipeDown = false;
          if (OrbitModes.cycleSuper) OrbitModes.cycleSuper(1);
        }
        if (Engine.input.bombQueued) {
          Engine.input.bombQueued = false;
          if (OrbitModes.useSuper) OrbitModes.useSuper();
        }
        if (Engine.input.nukeQueued) {
          Engine.input.nukeQueued = false;
          if (OrbitModes.useSuper) OrbitModes.useSuper();
        }
      } else if (mode === 'playing' && oKind === 'assault') {
        Engine.input.swipeUp = false;
        Engine.input.swipeDown = false;
        if (superCdT > 0) {
          superCdT = Math.max(0, superCdT - dt);
          clearSuperQueues();
        } else if (Engine.input.bombQueued || Engine.input.nukeQueued) {
          clearSuperQueues();
          useSuper();
        }
      } else {
        Engine.input.bombQueued = false;
        Engine.input.nukeQueued = false;
        Engine.input.swipeUp = false;
        Engine.input.swipeDown = false;
      }
      if (mode === 'playing') {
        const r = OrbitModes.step(dt);
        if (r === 'win') {
          orbitEndT = 0.85;
          mode = 'gameover';
        } else if (r === 'lose') {
          orbitEndT = 1.0;
          mode = 'gameover';
        }
      } else if (orbitEndT > 0) {
        orbitEndT -= dt;
        OrbitModes.step(dt); // keep FX
        if (orbitEndT <= 0) {
          const r = OrbitModes.getResult();
          if (r === 'win') endOrbitWin();
          else endOrbitLose();
        }
      }
      return;
    }

    if (mode !== 'playing') {
      updateFlightBoost(dt);
      scrollStars(dt, 0.4 * flightBoost);
      Engine.updateParticles(dt);
      return;
    }
    if (finishing) {
      updateFinish(dt);
      updateFlightBoost(dt);
      scrollStars(dt, 1.15 * flightBoost);
      Engine.updateParticles(dt);
      if (announceT > 0) announceT -= dt;
      return;
    }
    if (docking) { updateDocking(dt); scrollStars(dt, 1.4); Engine.updateParticles(dt); if (announceT > 0) announceT -= dt; return; }

    if (warpActive) {                            // spend module seconds first, then inventory
      let spend = dt / WARP_MULT;
      if (warpModSecs > 0) {
        const take = Math.min(warpModSecs, spend);
        warpModSecs -= take;
        spend -= take;
      }
      if (spend > 0) warpSecs -= spend;
      if (warpTotal() <= 0) {
        warpSecs = 0; warpModSecs = 0;
        warpActive = false; Engine.setTimeScale(1); updateHud();
      }
    }
    // Chrono recharge: 1s of module warp per 2 REAL seconds, only while the warp
    // is off (idle). Recharging mid-warp would fight the spend loop and make the
    // HUD counter stutter.
    if (!warpActive && warpModCap > 0 && warpModSecs < warpModCap) {
      warpModSecs = Math.min(warpModCap, warpModSecs + dt * 0.5);
    }
    if (Tutorial.active) Tutorial.update(dt);
    updateFlightBoost(dt);
    // Space / double-tap / KeyN / ordnance buttons → equipped super only
    const shellHeld = !!(player && (
      (player.superWeapon === 'barrier' && player.barrierT > 0)
      || (player.superWeapon === 'sphere' && player.sphereT > 0)
    ));
    if (superCdT > 0 || shellHeld) {
      superCdT = Math.max(0, superCdT - dt);
      // Swallow spam while cooling / shell is up — never queue a free recast.
      clearSuperQueues();
    } else {
      if (Engine.input.bombQueued || Engine.input.nukeQueued) {
        clearSuperQueues();
        useSuper();
      }
    }

    scrollBoost = boss ? 0.3 : (Engine.input.focus ? 0.7 : 1);
    // flightBoost multiplies during intro / cinematics (1 = normal)
    scrollStars(dt, scrollBoost * flightBoost);

    const barrierWasOn = !!(player && player.barrierT > 0);
    const sphereWasOn = !!(player && player.sphereT > 0);
    player.update(dt);
    // Barrier / Sphere: start the 1.5s reuse lock after the shell expires.
    if ((barrierWasOn && player && player.barrierT <= 0)
      || (sphereWasOn && player && player.sphereT <= 0)) {
      superCdT = SUPER_MIN_CD;
      superCdMax = SUPER_MIN_CD;
    }
    updateCombatModules(dt);
    // Keep fusion timer / fuse-end clear on the weapon bar
    if (player.fuseT > 0 || document.querySelector('#hud-fuse:not(.hidden)')) {
      renderWeaponBar();
    }

    // player bullets
    pBullets.update(b => {
      if (b.homing) {
        b.spawnT = (b.spawnT || 0) + dt;
        // Sticky lock only — no free retarget (missile balance)
        const tgt = resolveMissileHome(b);
        if (tgt) {
          const a = Math.atan2(tgt.y - b.y, tgt.x - b.x);
          b.vx = Engine.lerp(b.vx, Math.cos(a) * 7.5, 0.09);
          b.vy = Engine.lerp(b.vy, Math.sin(a) * 7.5, 0.09);
          if (Math.random() < 0.45) Engine.burst(b.x, b.y, '#7dffa0', 1, 1, 2);
        } else {
          // Lost lock → coast straight
          b.homing = false;
        }
      }
      if (b.nuke) Engine.burst(b.x, b.y + 6, '#ff8a3d', 2, 1.5, 3);   // rocket trail
      b.x += b.vx; b.y += b.vy;
      if (b.y < -20 || b.y > H + 20 || b.x < -20 || b.x > W + 20) return false;
    });
    updateNukes();     // detonate nukes on contact / at the top
    updateBlastRings(dt);

    // enemy bullets
    eBullets.update(b => {
      b.x += b.vx * dt; b.y += b.vy * dt;
      if (b.y < -30 || b.y > H + 30 || b.x < -30 || b.x > W + 30) return false;
    });

    // enemies — stay in a hittable band (hard clamp, NO velocity bounce).
    // Reflect+cushion used to make ships ping-pong and jerk at the edges;
    // spawners/weaver paths already keep motion on-screen.
    enemies.update(e => {
      if (e.flash > 0) e.flash -= dt;
      e.def.update(e, dt);
      if (e.def.freeX) {                                   // horizontal hazards: exit any side
        if (e.x < -90 || e.x > W + 90 || e.y > H + 50 || e.y < -100) return false;
      } else {
        const m = e.r + 4;
        if (e.x < m) { e.x = m; if ((e.vx || 0) < 0) e.vx = 0; }
        else if (e.x > W - m) { e.x = W - m; if ((e.vx || 0) > 0) e.vx = 0; }
        if (e.y > H + 40) return false;
      }
    });

    // boss
    if (boss) { if (boss.flash > 0) boss.flash -= dt; boss.update(boss, dt); }

    // powerups
    powerups.update(p => { PowerUps.update(p, dt); if (p.y > H + 30) return false; });

    // floats
    floats.update(f => { f.y -= 30 * dt; f.life -= dt; if (f.life <= 0) return false; });

    Engine.updateParticles(dt);
    Vox.boomUpdate(voxFx, dt);
    collisions(dt);
    tickSphere(dt);
    Spawner.update(dt);
    // Contract goals are checked here rather than inside the spawner: the goal is
    // a rule laid OVER a normal endless run, so the spawner stays unaware of it.
    if (runType === 'contract') {
      if (contractFailT > 0) {
        contractFailT -= dt;
        if (contractFailT <= 0) { contractFailT = 0; endGame(false); return; }
      } else {
        try { Contracts.tick(Spawner.state.wave, dt); } catch (e) {}
        escalateContractHazards();
      }
    }
    if (runType === 'daily') escalateDailyHazards();   // fold in mechanics as waves climb
    Hazards.update(dt);          // radiation waves (stage hazard) — contact → damagePlayer

    if (announceT > 0) announceT -= dt;
    updateHud();
  }

  /* =================== draw =================== */
  function drawBackground() {
    // AI background sprite if present, else procedural gradient + nebula
    if (Assets.drawBackground(ctx, 'bg_' + theme.key, W, H)) return;
    const g = ctx.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, theme.bgTop); g.addColorStop(1, theme.bgBot);
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
    // soft nebula blobs for world identity
    for (const bl of theme._blobs) {
      const rg = ctx.createRadialGradient(bl.x, bl.y, 0, bl.x, bl.y, bl.r);
      rg.addColorStop(0, bl.color); rg.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = rg;
      ctx.fillRect(bl.x - bl.r, bl.y - bl.r, bl.r * 2, bl.r * 2);
    }
    // drifting background asteroids (decor) on rocky/hazard sectors
    if (theme._debris) {
      const t = performance.now() / 1000;
      const wrap = (v, min, max) => { const s = max - min; let r = (v - min) % s; if (r < 0) r += s; return min + r; };
      ctx.fillStyle = 'rgba(90,84,74,0.28)';
      for (const d of theme._debris) {
        const x = wrap(d.x + t * d.vx, -40, W + 40), y = wrap(d.y + t * d.vy, -40, H + 40);
        ctx.save(); ctx.translate(x, y); ctx.rotate(t * d.spin);
        ctx.beginPath();
        for (let i = 0; i < d.verts.length; i++) { const a = i / d.verts.length * Engine.TAU, rr = d.r * d.verts[i]; ctx.lineTo(Math.cos(a) * rr, Math.sin(a) * rr); }
        ctx.closePath(); ctx.fill(); ctx.restore();
      }
    }
  }

  let _drawLast = 0;
  function draw() {
    // Frame pacing sample for LOD (bullet/asteroid simplify under load)
    const now = performance.now();
    if (_drawLast) Game._lastFrameMs = Math.min(50, now - _drawLast);
    _drawLast = now;

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = 1;
    ctx.shadowBlur = 0;
    ctx.shadowColor = 'rgba(0,0,0,0)';
    ctx.setLineDash([]);
    ctx.clearRect(0, 0, W, H);

    // Orbit modes own the full canvas (no depth cam / shmup layers)
    if (orbitActive && typeof OrbitModes !== 'undefined') {
      OrbitModes.draw(ctx);
      drawAnnounceBanner(ctx, 48, { fontSize: 15, maxW: W - 28, lineH: 18, shadow: 10 });
      return;
    }

    // Depth cam: 2D world tilt (space feel) + voxel pitch/roll (volume, no yaw).
    // Keep live while paused/story so freeze doesn't ease the lean back to center
    // (intro hyperspace still shows a volumetric ship behind dialogue).
    const camLive = (mode === 'playing' || mode === 'paused' || mode === 'gameover' || mode === 'story') && player;
    if (camLive) {
      Engine.updateCam(player.x, player.y, true);
    } else if (typeof Engine.resetCam === 'function') {
      Engine.resetCam();
    } else {
      Engine.updateCam(W * 0.5, H * 0.75, false);
    }
    if (typeof Vox !== 'undefined' && Vox.setViewCam) {
      const c = Engine.getCam();
      Vox.setViewCam(camLive ? c.dPitch : 0, camLive ? c.dRoll : 0);
    }

    // Nebula lags a bit (parallax under the tilted field).
    {
      const c = Engine.getCam();
      ctx.save();
      if (Math.abs(c.panX) > 0.05 || Math.abs(c.panY) > 0.05) {
        ctx.translate(c.panX * 0.35, c.panY * 0.35);
      }
      drawBackground();
      ctx.restore();
    }

    ctx.save();
    Engine.applyShake();
    Engine.applyCam();
    Engine.drawStars();
    drawFlightStreaks();

    // powerups (under everything else)
    powerups.each(p => PowerUps.draw(p, ctx));

    // enemy bullets — simplify when scene is heavy (many voxel models), not raw bullet count.
    // Live voxel entities dominate FPS; cap visual budget accordingly.
    const hc = Settings.highContrast();
    let modelLoad = 0;
    enemies.each(e => {
      if (!e.alive) return;
      modelLoad++;
      // Asteroids/debris are expensive tumble voxels — count heavier
      if (e.type === 'asteroid') modelLoad += 1;
      if (e.type === 'debris') modelLoad += 0.5;
    });
    if (boss && boss.alive) modelLoad += 3;
    combatMods.forEach(m => { if (m.kind === 'droneAtk') modelLoad += 1; });
    // Soft FPS proxy: if last frame stretched, treat as overloaded
    const frameMs = (typeof performance !== 'undefined' && Game._lastFrameMs) ? Game._lastFrameMs : 16;
    const overloaded = modelLoad >= 14 || frameMs > 22;
    const richBullets = !overloaded && (eBullets.active ? eBullets.active.length : 0) < 80;
    // Flag for enemy draw path (asteroid simple silhouettes)
    Game._voxBudgetTight = overloaded || modelLoad >= 10;
    const rim = hc ? '#6a3200' : '#4a1200';
    const body = hc ? '#ffcf30' : '#ff7e2a';
    if (richBullets) {
      ctx.save(); ctx.globalCompositeOperation = 'lighter';
      ctx.fillStyle = hc ? 'rgba(255,214,60,0.16)' : 'rgba(255,120,50,0.14)';
      eBullets.each(b => {
        const r = b.r * 1.75;
        ctx.beginPath(); ctx.arc(b.x, b.y, r, 0, Engine.TAU); ctx.fill();
      });
      ctx.restore();
    }
    eBullets.each(b => {
      const r = b.r;
      ctx.fillStyle = rim;
      ctx.beginPath(); ctx.arc(b.x, b.y, r + 1.3, 0, Engine.TAU); ctx.fill();
      ctx.fillStyle = body;
      ctx.beginPath(); ctx.arc(b.x, b.y, r, 0, Engine.TAU); ctx.fill();
      if (richBullets) {
        ctx.fillStyle = 'rgba(255,255,255,0.92)';
        ctx.beginPath(); ctx.arc(b.x - r * 0.24, b.y - r * 0.24, r * 0.42, 0, Engine.TAU); ctx.fill();
      }
    });

    // enemies + boss (baked voxel sprites; additive re-draw = hit flash)
    enemies.each(e => {
      e.def.draw(e, ctx);
      if (e.flash > 0 && !Game._voxBudgetTight) {
        ctx.save(); ctx.globalCompositeOperation = 'lighter';
        ctx.globalAlpha = Engine.clamp(e.flash / 0.1, 0, 1) * 0.6;
        e.def.draw(e, ctx);
        ctx.restore(); ctx.globalAlpha = 1;
      }
    });
    if (boss) drawBoss();

    // player bullets — neon dashes (no shadowBlur: expensive with 100+ shots)
    pBullets.each(b => {
      const col = b.color || '#4ad6ff';
      if (b.long) {
        ctx.fillStyle = col; ctx.fillRect(b.x - b.r, b.y - 9, b.r * 2, 14);
        ctx.fillStyle = 'rgba(255,255,255,0.9)'; ctx.fillRect(b.x - b.r * 0.4, b.y - 7, b.r * 0.8, 10);
      } else {
        ctx.fillStyle = '#fff'; ctx.fillRect(b.x - b.r * 0.55, b.y - b.r - 3, b.r * 1.1, b.r + 2);
        ctx.fillStyle = col; ctx.fillRect(b.x - b.r * 0.8, b.y - 2, b.r * 1.6, b.r + 2);
      }
    });

    // Ship modules (drones / PD lasers) under the hull
    drawCombatModules(ctx);

    // radiation hazard beams (under the player so the ship stays readable)
    Hazards.draw(ctx);
    if (docking) drawStation(ctx);              // base docking cinematic

    // player — also during story (intro hyperspace / outro) so the ship sells the scene
    if (mode === 'playing' || mode === 'gameover' || mode === 'story' || mode === 'paused') {
      if (player && player.alive !== false) {
        // Story must never hide the hull (blink / invuln stuck mid-skip).
        if (mode === 'story') { player._cineSafe = true; player.alive = true; }
        player.draw(ctx);
      }
    }

    drawSphereFx(ctx, Math.min(0.05, (Game._lastFrameMs || 16) / 1000));
    Engine.drawParticles();
    drawBlastRings(ctx);
    Vox.boomDraw(ctx, voxFx, performance.now() / 1000);

    // floats (15px: readable after the canvas downscale on phones)
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.font = 'bold 15px Trebuchet MS';
    floats.each(f => { ctx.globalAlpha = Engine.clamp(f.life * 1.4, 0, 1); ctx.fillStyle = f.color; ctx.fillText(f.text, f.x, f.y); });
    ctx.globalAlpha = 1;

    ctx.restore();

    drawJamStatic(ctx);   // screen-space: the jam is happening to the DISPLAY

    // announcement banner (screen-space, no shake) — wrapped + centered
    drawAnnounceBanner(ctx, H * 0.32, { fontSize: 26, maxW: W - 40, lineH: 30, shadow: 18 });

    updateHudDuck();
  }

  /* ---------------- HUD duck: a hole in the chrome around the ship ----------
   * Moderation: "корабль не видно, невозможно контролировать его внизу экрана".
   * The HUD lives at the bottom, which is also where a shmup is flown, so at the
   * bottom of the screen the ship disappears behind its own interface.
   *
   * While the player is STEERING, a circle roughly two and a half hulls across is
   * erased out of the HUD around the ship — a CSS radial-gradient mask on #hud, so
   * it costs one masked composite and no extra canvas work. Let go and the chrome
   * comes straight back.
   *
   * Two things this is deliberately NOT:
   *   • not tied to a plain tap. A tap is how you fire a bomb or hit a super; only
   *     a real steering gesture (finger actually moved, or held past a beat) ducks
   *     the HUD, so tapping a button never makes the UI flinch.
   *   • not a hit-test change. Masking is visual only, so a second finger can still
   *     work the supers while the first one flies — which is a real play pattern
   *     and would break if the whole HUD went pointer-events:none while dragging.
   */
  const DUCK_HULLS = 2.5;              // radius in ship hulls, per the design ask
  // The DRAWN hull, not the hitbox: Vox.draw uses s:3.5 on a ~13-voxel model,
  // so the ship reads about 44 logical px wide. Sizing off the 5px hitbox (or a
  // guessed 30) makes the hole too small to uncover anything.
  const DUCK_HULL_PX = 44;
  let duckOn = false, duckSig = '';
  function updateHudDuck() {
    const hud = dom.hud || document.getElementById('hud');
    if (!hud) return;
    const inp = Engine.input;
    // "Steering", not "touching": movement is the honest signal, with a short
    // hold as the fallback for a finger that presses and eases off slowly.
    const moved = Math.abs(inp._gestDX || 0) + Math.abs(inp._gestDY || 0) > 6;
    const steering = !!inp.dragging && moved && mode === 'playing' && player && player.alive;

    if (!steering) {
      if (duckOn) {
        duckOn = false; duckSig = '';
        hud.classList.remove('hud-duck');
      }
      return;
    }

    const frame = document.getElementById('game-frame');
    const fr = frame ? frame.getBoundingClientRect() : null;
    if (!fr || !fr.width) return;
    const kx = fr.width / W, ky = fr.height / H;
    const r = DUCK_HULL_PX * DUCK_HULLS * kx;
    const x = player.x * kx, y = player.y * ky;

    // Skip the work unless the circle can actually touch chrome. The HUD is the
    // bottom band plus the two rails; the top plates are the only other target.
    const nearBottom = y + r > fr.height * 0.78;
    const nearTop = y - r < fr.height * 0.12;
    if (!nearBottom && !nearTop) {
      if (duckOn) { duckOn = false; duckSig = ''; hud.classList.remove('hud-duck'); }
      return;
    }

    // Whole pixels: the mask is a style recalc, and sub-pixel churn would run one
    // every frame for a hole nobody can see move that finely.
    const sig = Math.round(x) + ',' + Math.round(y) + ',' + Math.round(r);
    if (sig === duckSig) return;
    duckSig = sig;
    hud.style.setProperty('--duck-x', Math.round(x) + 'px');
    hud.style.setProperty('--duck-y', Math.round(y) + 'px');
    hud.style.setProperty('--duck-r', Math.round(r) + 'px');
    if (!duckOn) { duckOn = true; hud.classList.add('hud-duck'); }
  }

  /**
   * Signal interference while a jammer bubble has the ship: chunky voxel-sized
   * blocks, torn scan bands and a colour-split edge, all in the bubble's hue.
   * Deliberately drawn in screen space and OUTSIDE the shake transform — the
   * fiction is that the DISPLAY is being jammed, not the world.
   *
   * Kept cheap and legible: block size is quantised so it reads as the game's
   * voxel language rather than film grain, and coverage stays low enough that
   * the player can still see what is shooting at them. Being jammed is meant to
   * be frightening, not blinding.
   */
  function drawJamStatic(ctx) {
    if (!player || !(player.jamT > 0)) return;
    const col = player.jamColor || '#ff4a6a';
    const t = performance.now() / 1000;
    // Rise on entry, fall on exit, so it never pops in or out.
    const fade = Engine.clamp(Math.min(player.jamT, 0.35) / 0.35, 0, 1);
    const CELL = 8;                                   // one "voxel" of static
    const cols = Math.ceil(W / CELL);
    ctx.save();

    // torn horizontal bands — the classic broken-signal read
    ctx.globalCompositeOperation = 'lighter';
    for (let i = 0; i < 7; i++) {
      const seed = Math.sin(t * (7 + i * 3) + i * 21) * 0.5 + 0.5;
      const by = ((seed * H * 1.4) - H * 0.2) | 0;
      const bh = 3 + ((seed * 26) | 0);
      ctx.globalAlpha = 0.11 * fade;
      ctx.fillStyle = col;
      ctx.fillRect(0, by, W, bh);
    }

    // voxel blocks, densest along the bands
    const blocks = (74 * fade) | 0;
    for (let i = 0; i < blocks; i++) {
      const n = Math.sin(t * 33 + i * 12.9898) * 43758.5453;
      const rx = ((n - Math.floor(n)) * cols | 0) * CELL;
      const m = Math.sin(t * 19 + i * 78.233) * 43758.5453;
      const ry = ((m - Math.floor(m)) * (H / CELL) | 0) * CELL;
      const w = CELL * (1 + (i % 3));
      ctx.globalAlpha = (0.10 + (i % 4) * 0.06) * fade;
      ctx.fillStyle = i % 5 === 0 ? '#ffffff' : col;
      ctx.fillRect(rx, ry, w, CELL);
    }

    // colour-split fringe at the screen edges
    ctx.globalAlpha = 0.18 * fade;
    ctx.fillStyle = col;
    const sway = Math.sin(t * 11) * 3;
    ctx.fillRect(0, 0, 3 + sway, H);
    ctx.fillRect(W - 3 + sway, 0, 3, H);

    // vignette pulse so the edges close in slightly
    ctx.globalCompositeOperation = 'source-over';
    const g = ctx.createRadialGradient(W / 2, H / 2, H * 0.28, W / 2, H / 2, H * 0.72);
    g.addColorStop(0, 'rgba(0,0,0,0)');
    g.addColorStop(1, col + Math.round(38 * fade).toString(16).padStart(2, '0'));
    ctx.globalAlpha = 1;
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);
    ctx.restore();
  }

  function drawBoss() {
    boss.draw(boss, ctx);
    if (boss.flash > 0) {           // hit flash over the baked voxel sprite
      ctx.save(); ctx.globalCompositeOperation = 'lighter';
      ctx.globalAlpha = Engine.clamp(boss.flash / 0.1, 0, 1) * 0.55;
      boss.draw(boss, ctx);
      ctx.restore();
    }
    // boss name + HP bar — below HUD plates + camera notch (safe-area)
    if (boss.entered) {
      const top = bossHudTopY();
      const bw = W - 60, ratio = Engine.clamp(boss.hp / boss.maxHp, 0, 1);
      ctx.fillStyle = ratio < 0.33 ? '#ff6a6a' : '#ff9ec2';
      ctx.font = 'bold 12px Trebuchet MS'; ctx.textAlign = 'center';
      ctx.fillText(T(boss.nameKey, 'BOSS'), W / 2, top);
      ctx.fillStyle = 'rgba(0,0,0,0.5)'; ctx.fillRect(30, top + 6, bw, 8);
      ctx.fillStyle = ratio < 0.33 ? '#ff4a4a' : '#ff5bd0';
      ctx.fillRect(30, top + 6, bw * ratio, 8);
      ctx.strokeStyle = '#fff'; ctx.globalAlpha = 0.4; ctx.strokeRect(30, top + 6, bw, 8); ctx.globalAlpha = 1;
      if (boss.statusKey) {
        ctx.fillStyle = boss.statusColor || 'rgba(255,226,160,0.92)';
        ctx.font = 'bold 10px Trebuchet MS';
        const clock = (boss.statusTimer > 0) ? ('  ' + Math.ceil(boss.statusTimer) + 's') : '';
        ctx.fillText(T(boss.statusKey) + clock, W / 2, top + 22);
      }
    }
  }

  /** Canvas Y for the boss name — under score/wave plates + mobile notch. */
  function bossHudTopY() {
    const frame = document.getElementById('game-frame');
    const cssH = frame ? frame.getBoundingClientRect().height : H;
    const scale = cssH > 0 ? H / cssH : 1;
    const plate = document.querySelector('.hud-score-plate');
    if (frame && plate) {
      const fr = frame.getBoundingClientRect();
      const pr = plate.getBoundingClientRect();
      return Math.round((pr.bottom - fr.top + 16) * scale);
    }
    let sat = 0;
    try {
      const raw = getComputedStyle(document.documentElement).getPropertyValue('--sat');
      sat = parseFloat(raw) || 0;
    } catch (e) {}
    let k = 1;
    try {
      if (frame) k = parseFloat(getComputedStyle(frame).getPropertyValue('--hud-k')) || 1;
    } catch (e) {}
    // .hud-top: 10px + safe-area, scaled plate, then a gap so the bar never kisses HUD
    const hudCss = Math.max(10, 8 + sat) + 52 * k + 16;
    return Math.round(hudCss * scale);
  }

  /* =================== HUD =================== */
  // Weapon slot bar: loadout weapons only (cap 4), 🔒 pins active gun.
  // Overdrive / overcharge paint on the active slot (no loose buff chips).
  const WEAPON_HUD_MAX = 4;
  let wbarSig = '';
  function renderWeaponBar() {
    if (!dom.weapons) return;
    const owned = player.ownedWeapons().slice(0, WEAPON_HUD_MAX);
    const od = player.overdriveT > 0 ? Math.ceil(player.overdriveT) : 0;
    const och = player.overcharge || 0;
    const fuseOn = !!(player.fusePartner && player.fuseT > 0);
    const fuseT = fuseOn ? player.fuseT : 0;
    const fuseP = fuseOn ? player.fusePartner : '';
    // Include fuse timer tenths so the bar/link refreshes while fused
    const fuseTick = fuseOn ? Math.ceil(fuseT * 5) : 0;
    const sig = owned.map(w => w + player.weaponLevels[w]).join() +
      '|' + player.weapon + '|' + player.weaponLocked + '|' + och + '|' + od +
      '|' + fuseP + '|' + fuseTick;
    if (sig === wbarSig) {
      // Lightweight timer text update without full rebuild
      const tEl = document.querySelector('#hud-fuse .hud-fuse-t');
      if (tEl && fuseOn) tEl.textContent = fuseT.toFixed(1) + 's';
      return;
    }
    wbarSig = sig;

    const slots = owned.map(w => {
      const d = Weapons.defs[w];
      const active = w === player.weapon;
      const better = !active && player.weaponLevels[w] > player.weaponLevels[player.weapon];
      const boosted = active && od > 0;
      const fuseA = fuseOn && active;
      const fuseB = fuseOn && w === fuseP;
      const ochBadge = active && och > 0 ? `<span class="wslot-ochg">🔥${och}</span>` : '';
      const odBadge = boosted ? `<span class="wslot-boost">⚡${od}</span>` : '';
      return `<button class="wslot ${active ? 'active' : ''} ${better ? 'better' : ''} ${boosted ? 'boosted' : ''} ${fuseA ? 'fuse-a' : ''} ${fuseB ? 'fuse-b' : ''}" data-w="${w}"
        style="--wc:${d.color}" aria-label="${T('weapon.' + w)}">
        ${odBadge}${ochBadge}
        <span class="wslot-k">${PowerUps.kinds[w].label}</span><span class="wslot-lv">${player.weaponLevels[w]}</span>
      </button>`;
    }).join('');
    dom.weapons.innerHTML =
      `<button class="wslot wlock ${player.weaponLocked ? 'on' : ''}" id="hud-wlock" aria-label="Lock">${Icons.svg(player.weaponLocked ? 'lock' : 'unlock', 17)}</button>${slots}`;

    // Fusion link strip above the bar
    const fuseEl = document.getElementById('hud-fuse');
    if (fuseEl) {
      if (fuseOn) {
        const aCol = (Weapons.defs[player.weapon] && Weapons.defs[player.weapon].color) || '#4ad6ff';
        const bCol = (Weapons.defs[fuseP] && Weapons.defs[fuseP].color) || '#ffe24a';
        const aLab = PowerUps.kinds[player.weapon] ? PowerUps.kinds[player.weapon].label : '?';
        const bLab = PowerUps.kinds[fuseP] ? PowerUps.kinds[fuseP].label : '?';
        const pct = Math.max(0, Math.min(100, (fuseT / (Weapons.FUSE_DUR || 8)) * 100));
        fuseEl.classList.remove('hidden');
        fuseEl.innerHTML = `
          <div class="hud-fuse-card" style="--fa:${aCol};--fb:${bCol}">
            <span class="hud-fuse-w" style="color:var(--fa)">${aLab}</span>
            <div class="hud-fuse-bridge">
              <div class="hud-fuse-line"></div>
              <div class="hud-fuse-core">
                <span class="hud-fuse-ico">⛓</span>
                <span class="hud-fuse-t">${fuseT.toFixed(1)}s</span>
              </div>
              <div class="hud-fuse-bar"><i style="width:${pct}%"></i></div>
            </div>
            <span class="hud-fuse-w" style="color:var(--fb)">${bLab}</span>
          </div>`;
      } else {
        fuseEl.classList.add('hidden');
        fuseEl.innerHTML = '';
      }
    }

    dom.weapons.querySelectorAll('[data-w]').forEach(b => b.onclick = ev => {
      ev.stopPropagation();
      if (mode === 'playing') { player.equip(b.dataset.w); updateHud(); }
    });
    const lk = dom.weapons.querySelector('#hud-wlock');
    if (lk) lk.onclick = ev => {
      ev.stopPropagation();
      if (mode === 'playing') { player.toggleLock(); updateHud(); }
    };
    if (owned.length >= 2 && !Tutorial.active && typeof Onboarding !== 'undefined')
      Onboarding.tip('wlock', 'tip.wlock', {
        icon: Icons.svg('unlock', 18), ms: 6500, anchor: '#hud-wlock', place: 'above', scope: 'combat',
      });
  }

  function paintShieldBar() {
    if (!dom.shield) return;
    const track = document.getElementById('hud-shield-track');
    const nEl = document.getElementById('hud-shield-n');
    const max = Math.max(1, player.maxShield | 0);
    const cur = Engine.clamp(player.shield | 0, 0, max);
    if (nEl) nEl.textContent = String(cur);
    if (!track) return;
    // Vertical pips (bottom = full). Rebuild only when capacity changes.
    if (track.childElementCount !== max) {
      track.innerHTML = Array.from({ length: max }, (_, i) =>
        `<span class="hud-pip" data-i="${i}"></span>`).join('');
    }
    const pips = track.children;
    for (let i = 0; i < pips.length; i++) {
      // index 0 is bottom visually via flex-col reverse
      pips[i].classList.toggle('on', i < cur);
    }
  }

  function updateHud() {
    paintShieldBar();
    // Base defense: show defense super on ordnance buttons, hide ship weapon bar
    const defHud = (orbitActive && typeof OrbitModes !== 'undefined' && OrbitModes.getKind
      && OrbitModes.getKind() === 'defense' && OrbitModes.getDefSuperHud)
      ? OrbitModes.getDefSuperHud() : null;

    if (defHud) {
      if (dom.weapons) {
        dom.weapons.innerHTML = '';
        wbarSig = '';
      }
      const fuseEl = document.getElementById('hud-fuse');
      if (fuseEl) { fuseEl.classList.add('hidden'); fuseEl.innerHTML = ''; }
      // Dual defense supers: icon + READY/★ stock line; CD = "Ns" over icon + bar.
      const loadout = defHud.loadout || [defHud.key || 'emp'];
      const cds = defHud.cooldowns || {};
      const cdMaxes = defHud.cooldownMaxes || {};
      const setDefSlot = (el, key, isActive) => {
        if (!el) return;
        if (!key) {
          el.classList.add('hidden');
          el.classList.remove('def-super', 'def-super-on', 'def-super-cd', 'super-cd', 'empty');
          return;
        }
        el.classList.remove('hidden', 'empty', 'super-cd');
        el.classList.add('def-super');
        el.classList.toggle('def-super-on', !!isActive);
        const def = Meta.defSuperByKey && Meta.defSuperByKey[key];
        const icon = (def && def.icon) || '⚡';
        const cd = cds[key] || 0;
        const onCd = cd > 0;
        el.classList.toggle('def-super-cd', onCd);
        const shell = ensureOrdShell(el);
        if (shell.ic) shell.ic.innerHTML = icon;
        // Bottom line: role, never the countdown (countdown is over icon only)
        if (shell.n) {
          shell.n.textContent = onCd
            ? (isActive ? '★' : '·')
            : (isActive ? '★ READY' : 'READY');
        }
        paintOrdCd(shell, onCd, cd, cdMaxes[key] || cd);
        el.setAttribute('aria-label', (def && T('defsuper.' + key + '.name')) || key);
        el.dataset.defsuper = key;
      };
      const k0 = loadout[0] || defHud.key || 'emp';
      const k1 = loadout[1] || null;
      const activeKey = loadout[defHud.idx || 0] || defHud.key || k0;
      setDefSlot(dom.bombs, k0, activeKey === k0);
      setDefSlot(dom.nuke, k1, k1 && activeKey === k1);
      if (dom.barrier) {
        dom.barrier.classList.add('hidden');
        dom.barrier.classList.remove('def-super', 'def-super-on', 'def-super-cd', 'super-cd');
      }
      if (dom.sphere) {
        dom.sphere.classList.add('hidden');
        dom.sphere.classList.remove('def-super', 'def-super-on', 'def-super-cd', 'super-cd');
      }
    } else {
      // Vertical: stock = ×N always; CD = "1.5s" over icon + progress bar
      renderWeaponBar();
      const sk = (player && player.superWeapon) || 'bomb';
      const barrierOn = !!(sk === 'barrier' && player && player.barrierT > 0);
      const sphereOn = !!(sk === 'sphere' && player && player.sphereT > 0);
      const onCd = superCdT > 0 || barrierOn || sphereOn;
      const paintVert = (el, key, icon, count) => {
        if (!el) return;
        const show = sk === key;
        el.classList.toggle('hidden', !show);
        el.classList.remove('def-super', 'def-super-on', 'def-super-cd');
        el.classList.toggle('super-cd', show && onCd);
        el.classList.toggle('empty', show && !onCd && count <= 0);
        const shell = ensureOrdShell(el);
        // innerHTML, not textContent: `icon` is an <svg> string. Setting it as
        // TEXT printed the markup into the button, which then stretched to
        // fill most of the screen.
        if (shell.ic) shell.ic.innerHTML = icon;
        if (shell.n) shell.n.textContent = '×' + count;
        if (show && key === 'barrier' && barrierOn) {
          paintOrdCd(shell, true, player.barrierT, Meta.superStats(Profile.get(), 'barrier').duration);
        } else if (show && key === 'sphere' && sphereOn) {
          paintOrdCd(shell, true, player.sphereT, Meta.superStats(Profile.get(), 'sphere').duration);
        } else {
          paintOrdCd(shell, show && superCdT > 0, superCdT, superCdMax);
        }
      };
      paintVert(dom.bombs, 'bomb', Icons.svg('bomb', 18), player ? player.bombs : 0);
      paintVert(dom.nuke, 'nuke', Icons.svg('radiation', 18), player ? player.nukes : 0);
      paintVert(dom.barrier, 'barrier', Icons.svg('barrier', 18), player ? (player.barriers || 0) : 0);
      paintVert(dom.sphere, 'sphere', Icons.svg('sphere', 18), player ? (player.spheres || 0) : 0);
    }
    renderModuleHud();
    const scoreLbl = dom.score && dom.score.querySelector('.hud-score-lbl');
    if (scoreLbl) scoreLbl.textContent = T('hud.score');
    if (dom.warp) {
      const wt = warpTotal();
      dom.warp.innerHTML = Icons.svg('warp') + ' ' + Math.ceil(wt);
      dom.warp.classList.toggle('on', warpActive);
      dom.warp.classList.toggle('empty', wt <= 0.1);
    }
    if (dom.wave) {
      // OrbitModes.updateHud already writes wave/boss labels during orbit;
      // don't overwrite with Spawner on vertical-only paths when orbit is active.
      // On a contract the wave number is not the point — the objective is.
      if (orbitActive) { /* orbit owns the chip */ }
      else if (runType === 'contract') {
        let lbl = null;
        try { lbl = Contracts.hudLabel(); } catch (e) {}
        dom.wave.textContent = lbl || Spawner.label();
      } else dom.wave.textContent = Spawner.label();
    }
  }

  /* =================== state machine =================== */
  function startGame() { beginRun('endless'); }        // legacy alias
  function startEndless() { beginRun('endless'); }      // Hub's separate ENDLESS button
  function startDaily() { beginRun('daily'); }
  /** Daily contract as its own mission; difficulty is picked on the launch card. */
  function startContract(diffKey, slot) {
    contractDiff = Meta.DIFFICULTIES[diffKey] ? diffKey : 'normal';
    contractSlot = slot === 1 ? 1 : 0;
    beginRun('contract');
  }
  /** The contract's goal is met — same theatrical outro as a cleared node. */
  function contractWon() {
    if (mode !== 'playing' || finishing || docking) return;
    beginFinish('contract');
  }
  /**
   * The contract's rule was broken (a hit on a no-hit job, a second gun, …).
   * End the run instead of letting the player fly on for a prize they can no
   * longer win — but give them a beat to read WHY, or it reads as a crash.
   */
  function contractFailed(reasonKey) {
    if (mode !== 'playing' || finishing || docking || contractFailT > 0) return;
    contractFailReason = reasonKey || 'ctr.failGeneric';
    contractFailT = 1.3;
    announce(T('ctr.failed'), '#ff5a4a');
    Engine.audio.gameover();
    if (player) player.invuln = 999;      // don't let a stray bullet steal the message
  }
  function startCampaign(sector) { beginRun('campaign', sector || 0); }   // legacy

  // FTL map: begin the stage for a chosen node (combat / elite / boss / base / relay).
  // Prefaces with part-enter / gate / warlord / supply / relay intro dialogues.
  function engageStage(node) {
    // Drop map/hub coach tips and strip any leftover combat debris before pre-fight story
    try {
      if (typeof Onboarding !== 'undefined') {
        if (Onboarding.clearAll) Onboarding.clearAll();
        else if (Onboarding.enter) Onboarding.enter('combat');
      }
    } catch (e) {}
    try {
      document.getElementById('hub')?.classList.add('hidden');
      document.getElementById('campaignMap')?.classList.add('hidden');
      document.getElementById('hangar')?.classList.add('hidden');
      document.getElementById('menu')?.classList.add('hidden');
      document.getElementById('pause')?.classList.add('hidden');
    } catch (e) {}
    clearCombatEphemera({ keepPlayer: false });
    clearBattleFrame();

    stage = node;
    stage._theme = Campaign.themeFor(node);
    // 360° orbit is post-release DLC — every node type is vertical combat.
    // Spawn the ship first so pre-fight dialogue has a hull in frame.
    beginRun('stage');
    if (typeof Story === 'undefined') return;

    const partN = Campaign.part();
    const steps = [];
    steps.push({ id: 'part' + partN + '.enter', opts: { once: true, pauseGame: false } });
    if (node.type === 'base') {
      steps.push({
        id: 'base.first',
        opts: { once: true, pauseGame: false, unitCode: Campaign.traderCode(node.id) },
      });
      steps.push({ id: 'base.hold', opts: { once: true, pauseGame: false } });
    }
    if (node.type === 'relay') {
      steps.push({ id: 'relay.first', opts: { once: true, pauseGame: false } });
    }
    if (node.type === 'research') {
      steps.push({ id: 'research.first', opts: { once: true, pauseGame: false } });
    }
    if (node.warlord || node.type === 'boss') {
      steps.push({ id: 'part' + partN + '.preGate', opts: { once: true, pauseGame: false } });
      steps.push((next) => {
        if (typeof StoryCine !== 'undefined' && StoryCine.warlordIntro) {
          StoryCine.warlordIntro(partN, node.boss, next);
        } else {
          Story.playOnce('part' + partN + '.warlord', {
            onDone: next, pauseGame: false, warlordKey: node.boss,
          });
        }
      });
    }
    freezeForStory(true);
    if (dom.hud) dom.hud.classList.add('hidden');
    runStoryChain(steps, () => {
      freezeForStory(false);
      if (dom.hud) dom.hud.classList.remove('hidden');
      if (player && Engine.input) {
        Engine.input.px = player.x;
        Engine.input.py = player.y;
      }
    });
  }
  function currentStage() { return stage; }

  /** 360° orbit stage (base defense / relay assault). */
  function beginOrbitRun(node) {
    prepareScreenHandoff('combat');
    const prof = Profile.get();
    runType = node.type === 'base' ? 'orbit_defense' : 'orbit_assault';
    stage = node;
    orbitActive = true;
    orbitEndT = 0;
    mode = 'playing';
    docking = false; finishing = false;
    afterRun = openCampaignMap;
    revivedThisRun = false;
    doubledThisRun = false;
    bpScoreMark = 0;
    clearAnnounce();

    difficulty = Meta.DIFFICULTIES[prof.difficulty] || Meta.DIFFICULTIES.normal;
    player = new Player();
    Meta.applyToPlayer(player, prof);
    player.x = Engine.W * 0.5;
    player.y = runType === 'orbit_assault' ? Engine.H - 95 : Engine.H * 0.72;
    player.maxShield += difficulty.startShield || 0;
    player.shield = player.maxShield;
    // Defense: player is spectator on the rail gun — keep invuln. Assault: full combat loadout.
    if (runType === 'orbit_defense') {
      player.invuln = 999;
      combatMods = [];
    } else {
      player.invuln = 0.6;
      initCombatModules(prof);
    }
    // Reset pointer target so rail/ship don't inherit last combat position
    if (Engine.input) {
      Engine.input.px = player.x;
      Engine.input.py = player.y;
      Engine.input.dragging = false;
    }
    boss = null;
    modHudSig = '';
    enemies.clear(); pBullets.clear(); eBullets.clear(); powerups.clear(); floats.clear();
    voxFx.length = 0;
    Hazards.stop();
    endWarp(true);
    superCdT = 0;

    document.getElementById('menu').classList.add('hidden');
    document.getElementById('hub').classList.add('hidden');
    document.getElementById('hangar').classList.add('hidden');
    document.getElementById('pause').classList.add('hidden');
    document.getElementById('settings').classList.add('hidden');
    document.getElementById('shop').classList.add('hidden');
    document.getElementById('campaignMap').classList.add('hidden');
    document.getElementById('rewards').classList.add('hidden');
    document.getElementById('gameover').classList.add('hidden');
    document.getElementById('season') && document.getElementById('season').classList.add('hidden');
    clearBattleFrame();
    dom.hud.classList.remove('hidden');
    updateHud();
    Engine.audio.resume();
    // Distinct beds: hold vs assault (not the same vertical combat track)
    const kind = node.type === 'base' ? 'defense' : 'assault';
    Music.play(kind === 'defense' ? 'orbit' : 'assault');
    if (Platform.sdk && Platform.sdk.gameplayStart) Platform.sdk.gameplayStart();
    OrbitModes.start(kind, {
      diff: node.diff || 1,
      part: Campaign.part(),
      assaultWinKey: node.type === 'research' ? 'orbit.research.cleared' : 'orbit.assault.win',
      assaultModel: node.type === 'research' ? 'lab' : 'relay',
    });
    updateHud(); // refresh ordnance icons for defense super vs ship super
    const startMsg = kind === 'defense' ? T('orbit.defense.start')
      : node.type === 'research' ? T('orbit.research.start')
      : T('orbit.assault.start');
    announce(startMsg, kind === 'defense' ? '#7dffa0' : '#ffb0b8');
    try { Engine.audio.blip(kind === 'defense' ? 520 : 380, 0.1, 'sine', 0.1); } catch (e) {}
    Analytics.levelStart({
      mode: runType, difficulty: prof.difficulty, ship: prof.ship,
      node: node.type, part: Campaign.part(),
    });
  }

  function endOrbitWin() {
    if (!orbitActive) return;
    const nodesLost = (typeof OrbitModes !== 'undefined' && OrbitModes.getNodesLost)
      ? OrbitModes.getNodesLost() : 0;
    // Capture before stop() so grade/timers stay readable
    const grade = (typeof OrbitModes !== 'undefined' && OrbitModes.getAssaultGrade)
      ? OrbitModes.getAssaultGrade() : 2;
    orbitActive = false;
    OrbitModes.stop();
    mode = 'gameover';
    if (Platform.sdk && Platform.sdk.gameplayStop) Platform.sdk.gameplayStop();
    const node = stage;
    Engine.audio.victory();
    Music.play('menu');

    if (node.type === 'base') {
      // Record partial damage for warehouse locks, then dock
      if (Campaign.onBaseHeld) Campaign.onBaseHeld(node.id, nodesLost);
      else Campaign.onCleared(node.id);
      const disks = Campaign.tryGrantDiskForStage(node, Campaign.part()) || [];
      mode = 'playing';
      player.x = Engine.W / 2; player.y = Engine.H * 0.55;
      pendingDockDisk = disks.length ? disks[0] : null;
      if (pendingDockDisk) announce(Tf('disk.found', pendingDockDisk), '#7dffa0');
      startDocking();
      return;
    }

    // Research station: dedicated recovery UI (sat/warp + log or pilot disk + scrap)
    if (node.type === 'research') {
      Campaign.onCleared(node.id);
      const prof = Profile.get();
      const runCredits = Math.round(Meta.creditsForRun(Math.max(350, player.score || 350), prof) * difficulty.credits * 0.4);
      Profile.addCredits(runCredits);
      const rw = Campaign.grantResearchRewards
        ? Campaign.grantResearchRewards(node, Campaign.part(), grade)
        : { sat: 1, warp: 10, disk: null, log: '01', credits: 500, gems: 1, grade };
      lastEarned = runCredits + (rw.credits || 0);
      lastXp = BattlePass.addStageXp(Math.max(70, player.score || 70), false);
      announce(T('orbit.research.cleared'), '#a0e8ff');
      try {
        if (dom.hud) dom.hud.classList.add('hidden');
        document.getElementById('gameover')?.classList.add('hidden');
      } catch (e) {}
      setTimeout(() => {
        showResearchResults(rw, {
          runCredits,
          onDone: () => {
            if (rw.disk) promptDiskFound(rw.disk, openCampaignMap);
            else openCampaignMap();
          },
        });
      }, 450);
      return;
    }

    // Relay cleared → performance-scaled sat/warp + free train + results
    Campaign.onCleared(node.id);
    const prof = Profile.get();
    const earned = Math.round(Meta.creditsForRun(Math.max(400, player.score || 400), prof) * difficulty.credits * 0.45);
    Profile.addCredits(earned);
    const ar = Campaign.grantAssaultRewards
      ? Campaign.grantAssaultRewards(node, Campaign.part(), grade)
      : { sat: 1, warp: 10, freeUpg: null, disk: null, credits: 0, grade };
    lastXp = BattlePass.addStageXp(Math.max(80, player.score || 80), false);
    lastEarned = earned + (ar.credits || 0);
    announce(T('orbit.assault.cleared'), '#7dffa0');

    const freeLbl = formatAssaultFreeUpg(ar.freeUpg);
    const lootBits = [];
    if (ar.sat) lootBits.push(`🛰×${ar.sat}`);
    if (ar.warp) lootBits.push(`⏩${ar.warp}s`);
    if (freeLbl) lootBits.push(freeLbl);
    else if (grade < 1) lootBits.push(T('orbit.assault.noGift'));

    const after = () => {
      if (ar.disk) promptDiskFound(ar.disk, openCampaignMap);
      else openCampaignMap();
    };
    setTimeout(() => {
      showRunResults({
        won: true,
        earned: lastEarned,
        xp: lastXp,
        title: T('go.victory'),
        line2Html: `${T('orbit.assault.cleared')}<br>${T('go.reached')} <b>${T('node.relay.name')}</b>`
          + (lootBits.length ? `<br><span class="go-loot">${lootBits.join(' · ')}</span>` : ''),
        canMap: false,
        canRetry: false,
        canContinue: true,
        onContinue: after,
        delay: 0,
      });
    }, 500);
  }

  function formatAssaultFreeUpg(up) {
    if (!up) return '';
    if (up.kind === 'gold' || up.maxed) return `${Icons.svg('credit', 14)} ${up.gold || Campaign.BASE_GOLD_REWARD}`;
    if (up.kind === 'ship') return `${Icons.svg('statUpg', 14)} ${T('up.' + up.key + '.name')} → ${T('map.lv')}${up.level}`;
    if (up.kind === 'weapon') {
      return `${T('weapon.' + up.wkey)} · ${T('wup.' + up.stat + '.name')} → ${T('map.lv')}${up.level}`;
    }
    return '';
  }

  function endOrbitLose() {
    if (!orbitActive) return;
    const nodesLost = (typeof OrbitModes !== 'undefined' && OrbitModes.getNodesLost)
      ? OrbitModes.getNodesLost() : 4;
    // Keep orbitActive + OrbitModes state alive so rewarded REVIVE can resume 360.
    // Full stop happens on map/retry/continue (leaveRun / openCampaignMap / engageStage).
    mode = 'gameover';
    if (Platform.sdk && Platform.sdk.gameplayStop) Platform.sdk.gameplayStop();
    const node = stage;
    Engine.audio.explode();
    Music.play('menu');

    const prof = Profile.get();
    const earned = Math.round(Meta.creditsForRun(Math.max(120, player.score || 120), prof) * difficulty.credits * 0.25);
    Profile.addCredits(earned);
    lastXp = BattlePass.addStageXp(Math.max(25, (player.score || 0) * 0.3), false);
    lastEarned = earned;

    if (node.type === 'base') {
      // Soft-fail bookkeeping only once; revive is for assault ship death mainly
      const state = Campaign.onBaseFailed(node.id, nodesLost);
      const msg = state === 'destroyed' ? T('orbit.defense.destroyed') : T('orbit.defense.failed');
      announce(msg, '#ff6a7a');
      setTimeout(() => {
        showRunResults({
          won: false,
          earned,
          xp: lastXp,
          title: T('go.destroyed'),
          line2Html: `${msg}`,
          canMap: false,
          canRetry: true,
          canContinue: true,
          onContinue: () => {
            orbitActive = false;
            if (typeof OrbitModes !== 'undefined') OrbitModes.stop();
            openCampaignMap(state === 'destroyed' ? null : node.id);
          },
          delay: 0,
        });
      }, 600);
      return;
    }
    // Relay / research fail: leave uncleared (unless revive resumes)
    const failMsg = node.type === 'research' ? T('orbit.research.failed') : T('orbit.assault.failed');
    announce(failMsg, '#ff6a7a');
    setTimeout(() => {
      showRunResults({
        won: false,
        earned,
        xp: lastXp,
        title: T('go.destroyed'),
        line2Html: failMsg,
        canMap: false,
        canRetry: true,
        canContinue: true,
        onContinue: () => {
          orbitActive = false;
          if (typeof OrbitModes !== 'undefined') OrbitModes.stop();
          openCampaignMap();
        },
        delay: 0,
      });
    }, 600);
  }

  /**
   * Leave combat / pause → FTL map.
   * opts.instant — already inside an FXTrans.run (don't nest another cube).
   * Cube itself uses plate-mode when source is the game canvas (no overlay).
   */
  function openCampaignMap(baseId, opts) {
    const go = () => {
      mode = 'menu';
      if (typeof Engine.resetCam === 'function') Engine.resetCam();
      if (Platform.sdk && Platform.sdk.gameplayStop) Platform.sdk.gameplayStop();
      orbitActive = false;
      if (typeof OrbitModes !== 'undefined') OrbitModes.stop();
      endWarp(true);
      if (typeof Tutorial !== 'undefined' && Tutorial.cancel) Tutorial.cancel();
      const pauseEl = document.getElementById('pause');
      if (pauseEl) pauseEl.classList.add('hidden');
      dom.gameover.classList.add('hidden');
      dom.hud.classList.add('hidden');
      Music.play('menu');
      CampaignMap.open(() => Hub.open());
      // First base: tip on node, then warehouse (never tip stacked on trader modal)
      if (baseId != null) {
        if (CampaignMap.arriveAtBase) CampaignMap.arriveAtBase(baseId);
        else if (CampaignMap.openBase) CampaignMap.openBase(baseId);
      }
    };
    if (opts && opts.instant) { go(); return; }
    // Return from combat → cube (entry into combat stays warp)
    if (typeof FXTrans !== 'undefined') FXTrans.go({ style: 'cube', run: go });
    else go();
  }

  /** Contracts are launched from their own panel, so a contract run returns there. */
  function openContracts() {
    const go = () => {
      mode = 'menu';
      if (typeof Engine.resetCam === 'function') Engine.resetCam();
      if (Platform.sdk && Platform.sdk.gameplayStop) Platform.sdk.gameplayStop();
      endWarp(true);
      if (typeof Tutorial !== 'undefined' && Tutorial.cancel) Tutorial.cancel();
      const pauseEl = document.getElementById('pause');
      if (pauseEl) pauseEl.classList.add('hidden');
      dom.gameover.classList.add('hidden');
      dom.hud.classList.add('hidden');
      Music.play('menu');
      Contracts.open(() => Hub.open());
    };
    if (typeof FXTrans !== 'undefined') FXTrans.go({ style: 'cube', run: go });
    else go();
  }

  // A stage's objective is complete → award, mark the node cleared, return to map.
  // Stage objective met → OUTRO first: enemy fire fizzles out, leftover drops
  // magnet into the ship (trails + per-pickup pop), a short breath, THEN finish
  // (map for combat, dock cinematic for bases).
  let finishEmptyT = 0, finishChime = 0;
  function beginFinish(kind) {
    if (finishing || docking || mode !== 'playing') return;
    finishing = true; finishT = 0; finishEmptyT = 0; finishChime = 0; finishKind = kind;
    endWarp(true);                                  // stop + bank ⏩ seconds at stage end
    // remaining enemies pop, all bullets fizzle — no abrupt vanishing / no leftovers
    enemies.each(e => { if (e.alive) Engine.burst(e.x, e.y, e.color || '#ff7a4a', 12, 4, 3); });
    eBullets.each(b => { if (b.alive) Engine.burst(b.x, b.y, '#ff8a8a', 2, 1.5, 2); });
    boss = null; enemies.clear(); eBullets.clear(); pBullets.clear(); Hazards.stop();
    player.invuln = 999;
    Engine.audio.sweep(220, 720, 0.45, 'sine', 0.09);        // magnet-up whoosh
  }
  function updateFinish(dt) {
    finishT += dt;
    let remaining = 0;
    // use update() so a collected drop is RETIRED from the pool (each() would leave
    // it drawing forever). return false = collected/retired, true = keep pulling.
    powerups.update(p => {
      const a = Math.atan2(player.y - p.y, player.x - p.x);
      const sp = 300 + finishT * 260;                          // accelerate the pull
      p.x += Math.cos(a) * sp * dt; p.y += Math.sin(a) * sp * dt;
      if (Math.random() < 0.5) Engine.burst(p.x, p.y, PowerUps.kinds[p.kind].color, 1, 1.2, 2);  // trail
      if (Engine.dist2(p.x, p.y, player.x, player.y) < (p.r + player.r + 12) * (p.r + player.r + 12)) {
        addScore(PowerUps.collect(p)); Missions.track('powerups', 1); try { Contracts.pickup(); } catch (e) {}
        Engine.audio.magnet(finishChime++);                             // rising chime as they stream in
        Engine.burst(p.x, p.y, PowerUps.kinds[p.kind].color, 12, 4, 3); // pickup pop
        return false;                                                   // retire → stops drawing
      }
      remaining++;
      return true;
    });
    // floats must keep animating during the outro (frozen texts read as a hang)
    floats.update(f => { f.y -= 30 * dt; f.life -= dt; if (f.life <= 0) return false; });
    // Theatrical breath after the last pickup, then transition
    if (remaining === 0) finishEmptyT += dt; else finishEmptyT = 0;
    if (finishEmptyT > 1.15 || finishT > 4.0) {
      finishing = false;
      if (finishKind === 'dock') startDocking();
      else if (finishKind === 'contract') doContractWin();
      else doStageWin();
    }
  }

  function stageWon() { beginFinish('win'); }        // spawner calls this on boss/wave completion

  /**
   * Contract cleared. Deliberately NOT doStageWin(): that one is welded to a
   * campaign node (`stage.type`, `Campaign.onCleared`, disks, ship parts, map).
   * A contract owns none of that — it pays its own bounty and returns to the hub.
   */
  function doContractWin() {
    if (mode !== 'playing') return;
    mode = 'gameover';
    if (Platform.sdk && Platform.sdk.gameplayStop) Platform.sdk.gameplayStop();
    Hazards.stop();
    const prof = Profile.get();
    prof.totalRuns++;
    if (player.score > prof.highScore) prof.highScore = player.score;
    const earned = Math.round(Meta.creditsForRun(player.score, prof) * difficulty.credits);
    Profile.addCredits(earned);
    lastEarned = earned;
    lastXp = BattlePass.addRunXp(player.score, { wave: Spawner.state.wave, won: true, bossKills: 1 });
    Missions.trackBest('score', player.score);
    Missions.trackBest('wave', Spawner.state.wave);
    Missions.trackBest('credits', earned);

    let bounty = null;
    try { bounty = Contracts.completeRun(contractDiff, contractSlot); } catch (e) {}
    Analytics.levelFinish({ result: 'contract_win', mode: 'contract', difficulty: contractDiff,
      score: player.score, wave: Spawner.state.wave, credits: earned });

    player.invuln = 999;
    try { Engine.audio.bounty(); } catch (e) { Engine.audio.victory(); }
    Music.play('menu');
    announce(T('ctr.done'), '#ffd24a');

    const line2 = `${T('go.score')} <b>${player.score.toLocaleString()}</b><br>`
      + `${T('ctr.' + (bounty ? bounty.id : '') + '.name')} · ${T('diff.' + contractDiff)}<br>`
      + (bounty
        ? `<span class="earned">${Icons.svg('gem', 14)} ${bounty.reward.gems} · ${Icons.svg('credit', 14)} ${bounty.reward.credits.toLocaleString()}</span>`
        : '');
    setTimeout(() => {
      showRunResults({
        won: true,
        earned,
        xp: lastXp,
        title: T('ctr.winTitle'),
        line2Html: line2,
        canMap: false,
        canRetry: false,
        canContinue: true,
        onContinue: () => openContracts(),
        delay: 0,
      });
    }, 500);
  }

  function doStageWin() {
    if (mode !== 'playing') return;
    mode = 'gameover';
    if (Platform.sdk && Platform.sdk.gameplayStop) Platform.sdk.gameplayStop();
    Hazards.stop();
    const prof = Profile.get();
    prof.totalRuns++;
    if (player.score > prof.highScore) prof.highScore = player.score;
    const earned = Math.round(Meta.creditsForRun(player.score, prof) * difficulty.credits * 0.7);
    Profile.addCredits(earned);
    lastEarned = earned;
    // Battle Pass: award XP on score DELTA since last mark (not cumulative score).
    {
      const delta = Math.max(0, player.score - bpScoreMark);
      bpScoreMark = player.score;
      lastXp = BattlePass.addStageXp(delta, stage && stage.type === 'boss');
    }
    Missions.track('boss', stage.type === 'boss' ? 1 : 0);
    Missions.trackBest('score', player.score);
    Missions.trackBest('wave', Spawner.state.wave);
    Missions.trackBest('credits', earned);
    Analytics.levelFinish({ result: 'stage_win', mode: 'campaign', difficulty: prof.difficulty,
      score: player.score, wave: Spawner.state.wave, credits: earned });

    const node = stage;
    const partBefore = Campaign.part();
    const visitedBefore = (Campaign.st().visited || []).length;
    const visitedAfter = Campaign.isVisited(node.id) ? visitedBefore : visitedBefore + 1;
    let fin = null;
    try { Contracts.stageWon(node); } catch (e) {}
    if (node.type === 'boss') {
      fin = Campaign.onBossCleared(node.id);
      // Chapter milestone XP. Clearing a warlord is the biggest thing a player
      // does in a session and used to pay the same as any other stage, which is
      // why a full campaign clear stalled the pass around tier 10.
      try { if (BattlePass.addChapterXp) lastXp = (lastXp || 0) + BattlePass.addChapterXp(); } catch (e) {}
    } else Campaign.onCleared(node.id);

    // story-ship part reward (far dead-end node carries this chapter's part)
    let partMsg = null;
    let partResult = null;
    if (node.part) {
      partResult = Campaign.awardShipPart(node.part);
      partMsg = partResult.assembled ? T('ship.aegis.assembled')
        : partResult.dup ? Tf('ship.part.dup', partResult.credits, partResult.gems)
        : Tf('ship.part.found', partResult.count, Meta.SHIP_PARTS);
      Engine.audio.power();
    }

    // Log disks — use partBefore (after warlord, Campaign.part() is already next)
    const newDisks = (node.type === 'relay') ? [] : (Campaign.tryGrantDiskForStage(node, partBefore) || []);
    let diskMsg = newDisks.length ? Tf('disk.found', newDisks[0]) : null;
    let diskIdFound = newDisks.length ? newDisks[0] : null;
    let relayLoot = '';
    if (node.type === 'relay' && Campaign.grantAssaultRewards) {
      const ar = Campaign.grantAssaultRewards(node, partBefore, 2);
      lastEarned = earned + (ar.credits || 0);
      const bits = [];
      if (ar.sat) bits.push(`🛰×${ar.sat}`);
      if (ar.warp) bits.push(`⏩${ar.warp}s`);
      if (ar.freeUpg && formatAssaultFreeUpg) bits.push(formatAssaultFreeUpg(ar.freeUpg));
      if (bits.length) relayLoot = bits.join(' · ');
      if (ar.disk && !diskIdFound) { diskIdFound = ar.disk; diskMsg = Tf('disk.found', ar.disk); }
    }

    player.invuln = 999;
    Engine.audio.victory();
    Music.play('menu');

    // Post-win story chain → results sheet → disk? → map
    const finishToMap = () => {
      const msg = partMsg
        || diskMsg
        || (node.type === 'boss' ? T('ann.chapterCleared') : T('ann.sectorCleared'));
      const col = partMsg ? '#ffd63a' : diskMsg ? '#7dffa0' : '#ffe24a';
      announce(msg, col);

      const afterSheet = () => {
        if (diskIdFound) promptDiskFound(diskIdFound, openCampaignMap);
        else openCampaignMap();
      };

      const line2 = `${T('go.score')} <b>${player.score.toLocaleString()}</b><br>`
        + `${T('go.reached')} <b>${Spawner.label()}</b>`
        + (partMsg ? `<br><span class="earned">${partMsg}</span>` : '')
        + (relayLoot ? `<br><span class="go-loot">${relayLoot}</span>` : '');

      setTimeout(() => {
        showRunResults({
          won: true,
          earned,
          xp: lastXp,
          title: T('go.victory'),
          line2Html: line2,
          canMap: false,
          canRetry: false,
          canContinue: true,
          onContinue: afterSheet,
          delay: 0,
        });
      }, partMsg || diskMsg ? 900 : 500);
    };

    const afterRewards = (cb) => {
      const steps = [];
      // Vex contacts: short static pulse → dialogue (once each)
      const visited = visitedAfter;
      const vex = (id) => {
        steps.push((next) => {
          if (typeof Story !== 'undefined' && Story.hasSeen(id)) { next(); return; }
          if (typeof StoryCine !== 'undefined' && StoryCine.vexPulse) {
            StoryCine.vexPulse(id, next);
          } else {
            Story.playOnce(id, { onDone: next, pauseGame: false });
          }
        });
      };
      if (partBefore === 2 && visited >= 3) vex('part2.vex');
      if (partBefore === 2 && visited >= 6) vex('part2.vex2');
      if (partBefore === 3 && visited >= 3) vex('part3.vex');
      if (partBefore === 3 && visited >= 6) vex('part3.vex2');
      if (partBefore === 4 && visited >= 3) vex('part4.vex');
      if (partBefore === 4 && visited >= 6) vex('part4.vex2');
      if (partBefore === 5 && visited >= 3) vex('part5.vex');
      if (partBefore === 5 && visited >= 6) vex('part5.vex2');

      if (partResult && !partResult.dup) {
        if (partResult.assembled) {
          steps.push((next) => {
            if (typeof StoryCine !== 'undefined') StoryCine.aegisSync(next);
            else Story.playOnce('aegis.complete', { onDone: next, pauseGame: false });
          });
        } else {
          // Story follows hangar collection count, not the chapter the part was found on.
          const n = Math.max(1, Math.min(4, partResult.count | 0));
          steps.push({ id: 'part' + n + '.aegis', opts: { once: true, pauseGame: false } });
        }
      }
      runStoryChain(steps, cb);
    };

    if (fin && fin.finished) {
      // Final warlord of part 5 → threshold cine + Vex epilogue + hub
      afterRewards(() => {
        const goWin = () => { mode = 'playing'; victory(); };
        if (typeof StoryCine !== 'undefined' && StoryCine.finale) {
          StoryCine.finale(() => {
            if (StoryCine.vexPulse) StoryCine.vexPulse('part5.epilogue', goWin);
            else Story.playOnce('part5.epilogue', { onDone: goWin, pauseGame: true });
          });
        } else {
          Story.playOnce('part5.epilogue', { onDone: goWin, pauseGame: true });
        }
      });
      return;
    }

    if (node.type === 'boss') {
      afterRewards(() => {
        if (typeof StoryCine !== 'undefined') StoryCine.gateSeal(partBefore, finishToMap);
        else Story.playOnce('part' + partBefore + '.afterGate', { once: true, onDone: finishToMap, pauseGame: false });
      });
      return;
    }

    afterRewards(finishToMap);
  }

  // Base node: after the outro, a cinematic docking at the station, then back to
  // the map where the base modal (free bonus + fuel shop) opens automatically.
  // Station uses the same live Vox.MODELS.station as orbit defense (no 2D placeholder).
  const DOCK = { x: 0, y: 0, stationY: 0, clampY: 0, fromX: 0, fromY: 0, ang0: 0, orbitR: 80 };
  const DOCK_DUR = 4.4;
  function stageDock() { beginFinish('dock'); }      // spawner calls this when base waves are done
  function startDocking() {
    docking = true; dockT = 0;
    DOCK.x = Engine.W / 2;
    DOCK.stationY = Engine.H * 0.30;
    DOCK.clampY = DOCK.stationY + Math.min(Engine.H * 0.14, 118);
    // Keep the combat-stop pose — orbit from here, do not teleport to spawn.
    DOCK.fromX = player ? player.x : Engine.W / 2;
    DOCK.fromY = player ? player.y : Engine.H * 0.68;
    DOCK.ang0 = Math.atan2(DOCK.fromY - DOCK.stationY, DOCK.fromX - DOCK.x);
    const dist = Math.hypot(DOCK.fromX - DOCK.x, DOCK.fromY - DOCK.stationY);
    DOCK.orbitR = Engine.clamp(dist * 0.62, 70, Math.min(Engine.W, Engine.H) * 0.38);
    announce(T('ann.docking'), '#7dffa0');
    Engine.audio.blip(520, 0.2, 'sine', 0.12);
  }
  function updateDocking(dt) {
    dockT += dt;
    player.invuln = 999;
    const u = Math.min(1, dockT / DOCK_DUR);
    const orbitEnd = 0.62;
    if (u < orbitEnd) {
      const t = u / orbitEnd;
      const ease = t * t * (3 - 2 * t);
      const startR = Math.hypot(DOCK.fromX - DOCK.x, DOCK.fromY - DOCK.stationY);
      const ang = DOCK.ang0 + ease * Math.PI * 1.2;
      const r = Engine.lerp(startR, DOCK.orbitR, ease);
      player.x = Engine.clamp(DOCK.x + Math.cos(ang) * r, 18, Engine.W - 18);
      player.y = Engine.clamp(DOCK.stationY + Math.sin(ang) * r * 0.78, 36, Engine.H - 24);
      player.bank = Math.cos(ang + Math.PI / 2) * 0.38;
    } else {
      const t = (u - orbitEnd) / (1 - orbitEnd);
      const ease = t * t * (3 - 2 * t);
      const ang = DOCK.ang0 + Math.PI * 1.2;
      const ox = DOCK.x + Math.cos(ang) * DOCK.orbitR * (1 - ease);
      const oy = DOCK.stationY + Math.sin(ang) * DOCK.orbitR * 0.78 * (1 - ease);
      player.x = Engine.lerp(ox, DOCK.x, ease);
      player.y = Engine.lerp(oy, DOCK.clampY, ease);
      if (player.bank != null) player.bank = Engine.lerp(player.bank, 0, 0.12);
    }
    if (Math.random() < 0.55) Engine.burst(player.x, player.y + 12, '#7dffa0', 1, 1.2, 2.5);
    if (dockT > DOCK_DUR * 0.55 && Math.random() < 0.35) {
      Engine.burst(DOCK.x + (Math.random() - 0.5) * 30, DOCK.clampY - 8, '#ffe24a', 1, 0.9, 2);
    }
    floats.update(f => { f.y -= 30 * dt; f.life -= dt; if (f.life <= 0) return false; });
    if (dockT > DOCK_DUR) { docking = false; completeDock(); }
  }
  function completeDock() {
    mode = 'gameover';
    // Safe re-clear (idempotent): vertical base / research stages need this
    if (stage) Campaign.onCleared(stage.id);
    Engine.audio.power(); Engine.shake(6);
    const parkId = stage && stage.id;
    const diskId = pendingDockDisk;
    pendingDockDisk = null;

    // Research: same docking cine, then the lab recovery window (not the warehouse).
    if (stage && stage.type === 'research' && Campaign.grantResearchRewards) {
      const prof = Profile.get();
      const runCredits = Math.round(Meta.creditsForRun(Math.max(350, player.score || 350), prof) * difficulty.credits * 0.4);
      Profile.addCredits(runCredits);
      const rw = Campaign.grantResearchRewards(stage, Campaign.part(), 2);
      lastEarned = runCredits + (rw.credits || 0);
      lastXp = BattlePass.addStageXp(Math.max(70, player.score || 70), false);
      setTimeout(() => {
        showResearchResults(rw, {
          runCredits,
          onDone: () => {
            if (rw.disk) promptDiskFound(rw.disk, () => openCampaignMap());
            else openCampaignMap();
          },
        });
      }, 450);
      return;
    }

    // Sequential: disk read (if any) → map + base warehouse — never stack modals
    setTimeout(() => {
      const goMap = () => openCampaignMap(parkId);
      if (diskId) promptDiskFound(diskId, goMap);
      else goMap();
    }, 700);
  }
  /* ── Ship modules (combat companions) ── */
  function initCombatModules(prof) {
    combatMods = [];
    if (typeof Meta === 'undefined' || !Meta.combatModuleSnapshot) return;
    const snap = Meta.combatModuleSnapshot(prof) || [];
    let droneI = 0;
    snap.forEach(st => {
      if (!st || st.kind === 'fuelTank' || st.passive || (Meta.moduleIsPassive && Meta.moduleIsPassive(st.kind))) return;
      if (st.kind === 'droneAtk') {
        combatMods.push({
          kind: st.kind, lv: st.lv, st,
          x: player.x, y: player.y,
          ang: droneI * 2.1,
          charge: st.charges, maxCharge: st.charges,
          reloadT: 0, fireT: 0.2 + droneI * 0.15,
          orbitR: st.orbitR || 30,
        });
        droneI++;
      } else if (st.kind === 'pointDef') {
        combatMods.push({
          kind: 'pointDef', lv: st.lv, st,
          charge: st.charges, maxCharge: st.charges,
          reloadT: 0, fireT: 0,
        });
      }
    });
  }

  /**
   * Live tether arcs from the shell to whatever it is currently burning.
   * Screen-space list rebuilt every tick and drawn in drawSphereFx — it is pure
   * feedback, so it never touches simulation state.
   */
  const sphereArcs = [];
  function drawSphereFx(ctx, dt) {
    if (!player) { sphereArcs.length = 0; return; }
    for (let i = sphereArcs.length - 1; i >= 0; i--) {
      const a = sphereArcs[i];
      a.t += dt;
      if (a.t >= a.life) { sphereArcs.splice(i, 1); continue; }
      const k = 1 - a.t / a.life;
      const heat = a.heat || 0;
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      // Jagged lightning from the hull to the victim; hotter = whiter and thicker
      ctx.strokeStyle = heat > 0.6 ? `rgba(255,235,255,${0.75 * k})` : `rgba(200,108,255,${0.7 * k})`;
      ctx.lineWidth = 1.2 + heat * 2.2;
      ctx.beginPath();
      const segs = 4;
      ctx.moveTo(player.x, player.y);
      for (let s = 1; s <= segs; s++) {
        const f = s / segs;
        const jitter = (1 - f) * (10 + heat * 12);
        ctx.lineTo(
          player.x + (a.x - player.x) * f + Engine.rand(-jitter, jitter),
          player.y + (a.y - player.y) * f + Engine.rand(-jitter, jitter));
      }
      ctx.stroke();
      // burn halo on the target itself
      const g = ctx.createRadialGradient(a.x, a.y, 0, a.x, a.y, 16 + heat * 20);
      g.addColorStop(0, `rgba(255,255,255,${0.35 * k * (0.4 + heat)})`);
      g.addColorStop(0.5, `rgba(200,108,255,${0.28 * k})`);
      g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(a.x, a.y, 16 + heat * 20, 0, Engine.TAU); ctx.fill();
      ctx.restore();
    }
  }

  function tickSphere(dt) {
    if (!player || player.sphereT <= 0 || player.sphereR <= 0) { sphereArcs.length = 0; return; }
    const R = player.sphereR;
    const r2 = R * R;
    const dmgMul = player.dmgMult || 1;
    // Burn rates come from the trained level, so upgrading the Sphere actually
    // makes it kill faster instead of only wider and longer.
    let sst = null;
    try { sst = Meta.superStats(Profile.get(), 'sphere'); } catch (e) {}
    const burn0 = (sst && sst.burn0) || 0.40;
    const burnRamp = (sst && sst.burnRamp) || 0.35;
    const burnFlat = (sst && sst.flat) || 30;
    let burning = 0;
    enemies.each(e => {
      if (!e.alive) return;
      if (Engine.dist2(e.x, e.y, player.x, player.y) < (e.r + R) * (e.r + R)) {
        e._sphereT = (e._sphereT || 0) + dt;
        const tIn = e._sphereT;
        // Damage scales with the TARGET's own health, ramping the longer it is
        // held. A flat DPS was either an instant delete on weak mobs or a
        // rounding error against ULTRA hulls; a share of max HP gives the same
        // ~1.5s time-to-kill at every difficulty — lethal, never instant.
        const share = (burn0 + burnRamp * tIn) * dt;
        const dps = (burnFlat + burnFlat * 0.73 * tIn) * dmgMul;
        const dealt = dps * dt + (e.maxHp || e.hp) * share;
        e.hp -= dealt;
        // Feedback scales with how long the target has been held, so the ramp is
        // something you SEE. Without this the sphere silently melted things and
        // read as if it were doing nothing at all.
        e.flash = 0.09;
        burning++;
        e._sphereHeat = Math.min(1, (e._sphereHeat || 0) + dt * 1.6);
        sphereArcs.push({ x: e.x, y: e.y, t: 0, life: 0.16, heat: e._sphereHeat });
        if ((e._sphereFxT || 0) <= 0) {
          const n = 2 + Math.round(tIn * 2);
          Engine.burst(e.x, e.y, tIn > 0.9 ? '#ffffff' : '#c86cff', n, 2.2 + tIn, 1.8);
          e._sphereFxT = 0.09;
          e._sphereTick = (e._sphereTick || 0) + 1;
          // A damage number every few ticks — enough to read the rate, not spam.
          if (e._sphereTick % 5 === 0) {
            floatText(e.x + Engine.rand(-8, 8), e.y - 10,
              '-' + Math.round(dealt * 5), tIn > 0.9 ? '#ffe6ff' : '#c86cff');
          }
        } else e._sphereFxT -= dt;
        if (e.hp <= 0) {
          Engine.burst(e.x, e.y, '#ffffff', 14, 4.5, 3);
          spawnBlastRing(e.x, e.y, e.r + 16, '#c86cff', 0.26);
          killEnemy(e);
        }
      } else { e._sphereT = 0; e._sphereHeat = Math.max(0, (e._sphereHeat || 0) - dt * 2); }
    });
    if (boss && boss.alive && boss.entered && Engine.dist2(boss.x, boss.y, player.x, player.y) < r2) {
      boss._sphereT = (boss._sphereT || 0) + dt;
      const tIn = boss._sphereT;
      // Bosses take a much smaller share, but it still scales with the level.
      const bs = 0.006 + (sst ? (sst.level - 1) * 0.0022 : 0);
      const dps = (burnFlat * 0.9 + burnFlat * 0.6 * tIn) * dmgMul
        + boss.maxHp * (bs + bs * 0.75 * tIn);
      const silent = (boss._sphereFxT || 0) > 0;
      if (silent) boss._sphereFxT -= dt;
      else boss._sphereFxT = 0.12;
      hitBoss(dps * dt, boss.x, boss.y, { pierceArmor: true, silent });
      burning++;
      boss._sphereHeat = Math.min(1, (boss._sphereHeat || 0) + dt * 1.6);
      sphereArcs.push({ x: boss.x, y: boss.y, t: 0, life: 0.16, heat: boss._sphereHeat });
    } else if (boss) { boss._sphereT = 0; boss._sphereHeat = 0; }
    // Shell intensity follows how much it is actually chewing on.
    const want = burning ? Math.min(1, 0.45 + burning * 0.2) : 0;
    player.sphereBurn = Engine.lerp(player.sphereBurn || 0, want, Math.min(1, dt * 9));
  }

  function updateCombatModules(dt) {
    if (!combatMods.length || !player || !player.alive) return;
    // Jammed: every module is dead too — drones stop shooting, point-defence
    // stops eating bullets, the lot. "Systems jammed" has to mean ALL systems,
    // or the one thing still firing quietly undoes the whole mechanic.
    // Charge/reload timers are frozen as well, so a jam is never free uptime.
    if (player.jamT > 0) return;
    combatMods.forEach(m => {
      // Shared charge/reload
      if (m.reloadT > 0) {
        m.reloadT -= dt;
        if (m.reloadT <= 0) {
          m.reloadT = 0;
          m.charge = m.maxCharge;
        }
      }
      m.fireT = Math.max(0, (m.fireT || 0) - dt);

      if (m.kind === 'droneAtk') {
        // Orbit player
        m.ang = (m.ang || 0) + dt * 2.4;
        const r = m.orbitR || 30;
        const tx = player.x + Math.cos(m.ang) * r;
        const ty = player.y + Math.sin(m.ang) * r * 0.55;
        m.x = Engine.lerp(m.x, tx, Math.min(1, 10 * dt));
        m.y = Engine.lerp(m.y, ty, Math.min(1, 10 * dt));

        if (m.charge <= 0 || m.fireT > 0) return;

        // Orbit assault: hit-scan (no vertical pBullet pool)
        if (orbitActive && typeof OrbitModes !== 'undefined' && OrbitModes.getKind
          && OrbitModes.getKind() === 'assault' && OrbitModes.droneStrike) {
          const dmg = (m.st.dmg || 6) * (player.dmgMult || 1) * Math.max(1, m.st.pellets || 1);
          if (OrbitModes.droneStrike(m.x, m.y, dmg, m.st.range || 200)) {
            m.fireT = m.st.fireCd || 0.4;
            m.charge--;
            if (m.charge <= 0) m.reloadT = m.st.reload || 10;
            Engine.audio.blip(920, 0.03, 'square', 0.04);
          }
          return;
        }

        // Nearest enemy / boss
        let best = null, bd = (m.st.range || 200) ** 2;
        enemies.each(e => {
          if (!e.alive) return;
          const d = Engine.dist2(m.x, m.y, e.x, e.y);
          if (d < bd) { bd = d; best = e; }
        });
        if (boss && boss.alive && boss.entered) {
          const d = Engine.dist2(m.x, m.y, boss.x, boss.y);
          if (d < bd) { bd = d; best = boss; }
        }
        if (!best) return;
        const a = Math.atan2(best.y - m.y, best.x - m.x);
        const spd = 8.5;
        const nShot = Math.max(1, m.st.pellets || 1);
        const spr = m.st.spread || 0.10;
        for (let i = 0; i < nShot; i++) {
          const off = nShot === 1 ? 0 : (i - (nShot - 1) / 2) * spr;
          const b = pBullets.spawn();
          Object.assign(b, {
            x: m.x, y: m.y, vx: Math.cos(a + off) * spd, vy: Math.sin(a + off) * spd,
            dmg: (m.st.dmg || 6) * (player.dmgMult || 1), color: '#ff9a4a', r: 2.5,
            kind: 'player', pierce: 0, hits: 0, long: false, homing: false,
          });
        }
        m.fireT = m.st.fireCd || 0.4;
        m.charge--;
        if (m.charge <= 0) m.reloadT = m.st.reload || 10;
        Engine.audio.blip(920, 0.03, 'square', 0.04);
      } else if (m.kind === 'pointDef') {
        if (m.charge <= 0 || m.fireT > 0) return;
        const range = m.st.range || 60;
        const r2 = range * range;
        let hit = null;
        eBullets.each(b => {
          if (hit) return;
          if (Engine.dist2(player.x, player.y, b.x, b.y) < r2) hit = b;
        });
        if (!hit) return;
        const hx = hit.x, hy = hit.y;
        hit.x = -999; hit.y = -999;
        Engine.burst(hx, hy, '#7de0ff', 5, 2, 2);
        m.fireT = m.st.fireCd || 0.15;
        m.charge--;
        if (m.charge <= 0) m.reloadT = m.st.reload || 9;
        Engine.audio.blip(1400, 0.02, 'square', 0.035);
        m._flash = { x: hx, y: hy, life: 0.1 };
      }
    });
  }

  function drawCombatModules(ctx) {
    if (!combatMods.length) return;
    combatMods.forEach(m => {
      if (m.kind === 'droneAtk') {
        const reloading = m.reloadT > 0;
        const model = (Vox.MODELS && Vox.MODELS.droneAtk) || Vox.MODELS.crystal;
        const yaw = m.ang || 0;
        ctx.save();
        ctx.globalAlpha = reloading ? 0.4 : 1;
        Vox.groundShadow(ctx, m.x, m.y, 8, { a: reloading ? 0.18 : 0.32 });
        Vox.draw(ctx, model, m.x, m.y, {
          s: 1.65,
          yaw,
          roll: Math.sin((m.ang || 0) * 2) * 0.12,
          pitch: 0.95,
          t: performance.now() / 1000,
          thrust: reloading ? 0.15 : 0.55,
          flameColor: '#ff9a4a',
        });
        // Compact charge under drone (HUD has full status)
        if (!reloading && m.maxCharge > 0) {
          const u = m.charge / m.maxCharge;
          ctx.fillStyle = 'rgba(0,0,0,0.5)';
          ctx.fillRect(m.x - 7, m.y + 8, 14, 2.5);
          ctx.fillStyle = '#ff9a4a';
          ctx.fillRect(m.x - 7, m.y + 8, 14 * u, 2.5);
        }
        ctx.restore();
      } else if (m.kind === 'pointDef') {
        // Passive CIWS ring around ship when charged
        if (m.reloadT <= 0 && player) {
          const pulse = 0.25 + 0.15 * Math.sin(performance.now() / 180);
          ctx.save();
          ctx.globalAlpha = pulse;
          ctx.strokeStyle = '#7de0ff';
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.arc(player.x, player.y, (m.st && m.st.range) || 55, 0, Engine.TAU);
          ctx.stroke();
          ctx.restore();
        }
        if (m._flash && m._flash.life > 0) {
          m._flash.life -= 0.016;
          ctx.save();
          ctx.globalAlpha = Math.max(0, m._flash.life * 8);
          ctx.strokeStyle = '#7de0ff';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(player.x, player.y - 8);
          ctx.lineTo(m._flash.x, m._flash.y);
          ctx.stroke();
          ctx.restore();
        }
      }
    });
  }

  /** Module charge/reload chips — right rail; icons = Meta.moduleIconKey (hangar match). */
  let modHudSig = '';
  function moduleHudIcon(kind) {
    const ik = (typeof Meta !== 'undefined' && Meta.moduleIconKey)
      ? Meta.moduleIconKey(kind)
      : null;
    if (ik && typeof Icons !== 'undefined' && Icons.svg) return Icons.svg(ik, 14);
    const def = Meta.moduleByKey && Meta.moduleByKey[kind];
    return (def && def.icon) || '✦';
  }
  function renderModuleHud() {
    const el = document.getElementById('hud-modules');
    if (!el) return;
    // Vertical combat + orbit assault (same modules). Defense uses base supers HUD.
    const assaultOk = orbitActive && typeof OrbitModes !== 'undefined' && OrbitModes.getKind
      && OrbitModes.getKind() === 'assault';
    if (!combatMods.length || !player || mode !== 'playing' || (orbitActive && !assaultOk)) {
      if (modHudSig !== 'off') {
        el.classList.add('hidden');
        el.innerHTML = '';
        modHudSig = 'off';
      }
      return;
    }
    const rows = combatMods.map(m => {
      const def = Meta.moduleByKey && Meta.moduleByKey[m.kind];
      const col = (def && def.color) || '#7de0ff';
      const reloading = m.reloadT > 0;
      const chargePct = m.maxCharge > 0 ? Math.max(0, Math.min(1, m.charge / m.maxCharge)) : 0;
      const reloadPct = reloading && m.st && m.st.reload
        ? Math.max(0, Math.min(1, 1 - m.reloadT / m.st.reload)) : 0;
      const status = reloading
        ? Math.ceil(m.reloadT) + 's'
        : (m.charge + '/' + m.maxCharge);
      return {
        icon: moduleHudIcon(m.kind), col, reloading, chargePct, reloadPct, status, kind: m.kind,
      };
    });
    const sig = rows.map(r => r.kind + r.status + (r.reloading ? 'R' : 'C')).join('|');
    if (sig === modHudSig) {
      rows.forEach((r, i) => {
        const chip = el.children[i];
        if (!chip) return;
        const st = chip.querySelector('.hud-mod-st');
        if (st) st.textContent = r.status;
        const fill = chip.querySelector('.hud-mod-fill');
        if (fill) {
          fill.style.width = ((r.reloading ? r.reloadPct : r.chargePct) * 100) + '%';
          fill.classList.toggle('reload', r.reloading);
        }
        chip.classList.toggle('reloading', r.reloading);
      });
      return;
    }
    modHudSig = sig;
    el.classList.remove('hidden');
    el.innerHTML = rows.map(r => `
      <div class="hud-mod-chip ${r.reloading ? 'reloading' : ''}" style="--mc:${r.col}" title="${r.kind}">
        <span class="hud-mod-ic">${r.icon}</span>
        <div class="hud-mod-meta">
          <span class="hud-mod-st">${r.status}</span>
          <div class="hud-mod-bar"><i class="hud-mod-fill ${r.reloading ? 'reload' : ''}" style="width:${(r.reloading ? r.reloadPct : r.chargePct) * 100}%"></i></div>
        </div>
      </div>`).join('');
  }

  /**
   * Docking cinematic: same station voxel as orbit defense + tractor beam + clamp.
   * Ship (player.draw) approaches from below; no old 2D rect station.
   */
  function drawStation(ctx) {
    const t = dockT;
    const x = DOCK.x;
    const sy = DOCK.stationY || Engine.H * 0.30;
    const clampY = DOCK.clampY || sy + 110;
    const u = Math.min(1, t / DOCK_DUR);
    const W = Engine.W, H = Engine.H;

    // Soft vignette so the bay reads as a scene
    const vig = ctx.createRadialGradient(x, sy, 20, x, sy, Math.max(W, H) * 0.55);
    vig.addColorStop(0, 'rgba(20, 50, 40, 0.12)');
    vig.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = vig;
    ctx.fillRect(0, 0, W, H);

    // Tractor / docking beam from bay to ship approach corridor
    const beamA = 0.12 + 0.18 * Math.min(1, u * 1.4);
    const beam = ctx.createLinearGradient(x, sy + 20, x, clampY + 40);
    beam.addColorStop(0, `rgba(125,255,160,${beamA})`);
    beam.addColorStop(0.55, `rgba(125,255,160,${beamA * 0.45})`);
    beam.addColorStop(1, 'rgba(125,255,160,0)');
    ctx.fillStyle = beam;
    ctx.beginPath();
    const halfTop = 22 + u * 6;
    const halfBot = 48 - u * 10;
    ctx.moveTo(x - halfTop, sy + 18);
    ctx.lineTo(x + halfTop, sy + 18);
    ctx.lineTo(x + halfBot, clampY + 36);
    ctx.lineTo(x - halfBot, clampY + 36);
    ctx.closePath();
    ctx.fill();

    // Live voxel station — same model key as OrbitModes defense
    const yaw = Math.sin(t * 0.55) * 0.08;
    const pitch = 0.95;
    let drew = false;
    if (typeof OrbitCore !== 'undefined' && OrbitCore.drawVox) {
      drew = OrbitCore.drawVox(ctx, 'station', x, sy, {
        r: Math.min(W, H) * 0.13,
        yaw,
        t,
        pitch,
        thrust: 0,
      });
    }
    if (!drew && typeof Vox !== 'undefined' && Vox.MODELS && Vox.MODELS.station) {
      try {
        const m = Vox.MODELS.station;
        const s = (Math.min(W, H) * 0.28) / Math.max(8, m.w || 12);
        if (Vox.groundShadow) Vox.groundShadow(ctx, x, sy + 10, s * (m.w || 8) * 0.38, { a: 0.42 });
        Vox.draw(ctx, m, x, sy, { s, yaw, pitch, t, thrust: 0 });
        drew = true;
      } catch (e) {}
    }
    // Minimal fallback if Vox unavailable (should not happen in prod)
    if (!drew) {
      ctx.save();
      ctx.translate(x, sy);
      ctx.fillStyle = '#1a3040';
      ctx.beginPath(); ctx.ellipse(0, 0, 70, 36, 0, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = 'rgba(100,220,160,0.7)'; ctx.lineWidth = 3;
      ctx.stroke();
      ctx.restore();
    }

    // Dock clamp ring (closing) under the hull bay
    const pulse = 0.45 + 0.35 * Math.sin(t * 5);
    ctx.save();
    ctx.strokeStyle = `rgba(255, 226, 74, ${0.35 + pulse * 0.45})`;
    ctx.lineWidth = 2;
    ctx.setLineDash([6, 5]);
    const clampR = 28 - u * 8;
    ctx.beginPath();
    ctx.ellipse(x, clampY, clampR, clampR * 0.45, 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);
    // Latch bars
    ctx.fillStyle = `rgba(255, 226, 74, ${0.5 + u * 0.4})`;
    ctx.fillRect(x - 14, clampY - 3, 28, 5);
    ctx.restore();
  }

  function beginRun(type, startWorld) {
    startWorld = (type === 'campaign' && startWorld) ? startWorld : 0;
    // Full handoff: no map tips, story plates, pause, or leftover bullets on canvas
    prepareScreenHandoff(type === 'intro' ? 'intro' : 'combat');
    const prof = Profile.get();
    runType = type;
    orbitActive = false;
    if (typeof OrbitModes !== 'undefined') OrbitModes.stop();
    bpScoreMark = 0;                           // battle-pass stage delta watermark
    lastXp = 0;
    superCdT = 0;
    modHudSig = '';
    clearAnnounce();                           // no ghost text from previous fight
    pendingDockDisk = null;
    setFlightBoost(1, true);                   // reset cinematic star rush
    if (typeof Onboarding !== 'undefined' && Onboarding.enter) Onboarding.enter('combat');

    // Difficulty: daily starts at Normal then scales with hangar power; otherwise the chosen preset.
    let dm = null;
    if (type === 'daily') {
      difficulty = Object.assign({}, Meta.DIFFICULTIES.normal);
      dailyToday = Daily.getToday();
      dm = dailyToday.mods;
      if (typeof Meta.hangarPower01 === 'function') {
        const pwr = Meta.hangarPower01(prof);
        difficulty.enemyHp = 1 + pwr * 0.9;
        difficulty.bossHp = 1 + pwr * 0.9;
        difficulty.density = 1 + pwr * 0.25;
      }
    } else if (type === 'contract') {
      // Difficulty is chosen at LAUNCH, per contract, and deliberately does NOT
      // touch prof.difficulty — campaign progress is kept per difficulty, so a
      // contract run must not silently move the player's campaign to ULTRA.
      difficulty = Meta.DIFFICULTIES[contractDiff] || Meta.DIFFICULTIES.normal;
      dailyToday = null;
    } else {
      difficulty = Meta.DIFFICULTIES[prof.difficulty] || Meta.DIFFICULTIES.normal;
      dailyToday = null;
    }

    // Effective run modifiers (difficulty × daily mutators).
    mods = {
      enemyHp: difficulty.enemyHp * (dm ? dm.enemyHp : 1),
      bossHp: (difficulty.bossHp != null ? difficulty.bossHp : difficulty.enemyHp) * (dm ? dm.enemyHp : 1),
      bulletSpeed: difficulty.bulletSpeed * (dm ? dm.bulletSpeed : 1),
      enemyDensity: (dm ? dm.enemyDensity : 1) * (difficulty.density || 1),
      poolOverride: dm ? dm.poolOverride : null,
      scoreMult: dm ? dm.scoreMult : 1,
      credits: difficulty.credits,
    };
    // FTL stage: node tier (depth × part) layers extra scaling on top of the
    // chosen difficulty — parts must FEEL different, not just look different.
    // Boss tier is softer so part-5 ultras do not explode on top of the 3.5× buff.
    if (type === 'stage' && stage) {
      const tf = stage.tier || 0;
      mods.enemyHp *= 1 + tf * 0.08;         // part 3 deep nodes ≈ ×1.8
      mods.bossHp *= 1 + tf * 0.04;
      mods.bulletSpeed *= 1 + tf * 0.03;     // ≈ ×1.3
      mods.enemyDensity *= 1 + tf * 0.06;    // ≈ ×1.6
    }
    // Contract: endgame content at ANY difficulty. Same tier multipliers a
    // part-5 campaign node gets, on top of the difficulty the player picked on
    // the launch card — so ULTRA is a part-5 ULTRA node, and Casual is a part-5
    // Casual node, rather than sector 1 wearing a difficulty label.
    if (type === 'contract') {
      try {
        const tm = Contracts.TIER_MODS;
        mods.enemyHp *= tm.enemyHp;
        mods.bossHp *= tm.bossHp;
        mods.bulletSpeed *= tm.bulletSpeed;
        mods.enemyDensity *= tm.enemyDensity;
      } catch (e) {}
    }
    // First-flight intro: soft enemies so the lesson stays readable.
    if (type === 'intro') {
      mods.enemyHp *= 0.55;
      mods.bossHp *= 0.55;
      mods.bulletSpeed *= 0.75;
      mods.enemyDensity = 0.6;
    }

    player = new Player();
    Meta.applyToPlayer(player, prof);            // permanent upgrades + ship
    player.maxShield += difficulty.startShield;  // Casual gets extra shield
    initCombatModules(prof);
    if (type === 'intro') {
      player.maxShield = Math.max(player.maxShield, 4);
      const sk0 = player.superWeapon || 'bomb';
      if (sk0 === 'bomb') player.bombs = Math.max(player.bombs, 2);
      else if (sk0 === 'nuke') player.nukes = Math.max(player.nukes, 2);
      else if (sk0 === 'sphere') player.spheres = Math.max(player.spheres || 0, 2);
      else player.barriers = Math.max(player.barriers || 0, 2);
    }
    // Daily mutator overrides to the ship loadout.
    if (dm) {
      if (dm.forceWeapon) {
        player.weaponLevels[dm.forceWeapon] = player.level;   // carry the start level
        player.weapon = dm.forceWeapon;
      }
      if (dm.maxShield != null) player.maxShield = dm.maxShield;
      if (dm.startBombs != null) {
        // Legacy mutator name: apply charges to the equipped super
        const sk1 = player.superWeapon || 'bomb';
        player.bombs = 0; player.nukes = 0; player.barriers = 0; player.spheres = 0;
        if (sk1 === 'bomb') player.bombs = dm.startBombs;
        else if (sk1 === 'nuke') player.nukes = dm.startBombs;
        else if (sk1 === 'sphere') player.spheres = dm.startBombs;
        else player.barriers = dm.startBombs;
      }
      if (dm.dmgMult) player.dmgMult *= dm.dmgMult;
    }
    player.shield = player.maxShield;

    boss = null; voxFx.length = 0; blastRings.length = 0;
    pBullets.clear(); eBullets.clear(); enemies.clear(); powerups.clear(); floats.clear();
    // A contract is its own mission, but it is fought on endless waves — there is
    // no bespoke level here, only a goal laid over the standard escalation.
    Spawner.reset(type === 'contract' ? 'endless' : type,
      type === 'daily' ? dailyToday.seed : 0, startWorld);   // sets initial theme too
    if (type === 'daily' && typeof Meta.hangarPower01 === 'function') {
      const off = Math.round(Meta.hangarPower01(prof) * 6);
      if (off > 0 && Spawner.state) Spawner.state.wave = Math.max(Spawner.state.wave | 0, off);
    }
    // Contract: drop the run into the LAST sector at a part-5 wave count, so the
    // enemy mix, density and wave HP curve are all endgame from the first wave.
    // Spawner.reset() has already run, which is why this pokes state directly —
    // same pattern the daily power offset above uses.
    if (type === 'contract' && Spawner.state) {
      try {
        let last = 0;
        Worlds.WORLDS.forEach((w, i) => { if (!w.ultra) last = i; });
        Spawner.state.worldIndex = last;
        Spawner.state.wave = Contracts.START_WAVE;
        setTheme(Worlds.WORLDS[last]);
      } catch (e) {}
    }
    Engine.input.px = player.x; Engine.input.py = player.y;
    mode = 'playing';
    docking = false; finishing = false; revivedThisRun = false; doubledThisRun = false;
    contractFailT = 0; contractFailReason = null;
    contractHazMark = 0;
    contractHazPlan = null;
    try { Contracts.runStart(type, contractDiff, contractSlot); } catch (e) {}   // daily contract
    if (type === 'contract') { try { contractHazPlan = Contracts.hazardPlan(contractDiff, contractSlot); } catch (e) {} }
    warpSecs = Profile.get().warp || 0;
    warpModSecs = 0; warpModCap = 0;
    try {
      if (Meta.hasModuleEquipped && Meta.hasModuleEquipped(prof, 'chrono')) {
        const ch = Meta.moduleCombatStats(prof, 'chrono');
        if (ch && ch.cap) { warpModCap = ch.cap; warpModSecs = ch.cap; }
      }
    } catch (e) {}
    endWarp(false);   // load banked ⏩ seconds (inventory); module pool stays full
    Platform.hideSticky();                      // clear the banner before the battle covers the screen
    dom.menu.classList.add('hidden');
    dom.gameover.classList.add('hidden');
    document.getElementById('hub').classList.add('hidden');
    document.getElementById('hangar').classList.add('hidden');
    document.getElementById('pause').classList.add('hidden');
    document.getElementById('settings').classList.add('hidden');
    document.getElementById('shop').classList.add('hidden');
    document.getElementById('campaignMap').classList.add('hidden');
    document.getElementById('rewards').classList.add('hidden');
    // Menu sheets that mount straight onto #game-frame have no .hidden toggle —
    // drop them or they float over the battle.
    ['camp-replay-modal', 'research-found-modal', 'disk-found-modal'].forEach(mid => {
      const m = document.getElementById(mid);
      if (m && m.parentNode) m.parentNode.removeChild(m);
    });
    clearBattleFrame();                         // no leftover frame from previous fight
    dom.hud.classList.remove('hidden');
    addScore(0);
    updateHud();
    Engine.audio.resume();

    Analytics.levelStart({ mode: type, difficulty: prof.difficulty, ship: prof.ship, world: theme.key });
    if (Platform.sdk && Platform.sdk.gameplayStart) Platform.sdk.gameplayStart();
    Music.play('game');
    if (type === 'intro') {
      if (Tutorial.startIntro) Tutorial.startIntro();
    } else if (Tutorial.shouldRun()) {
      Tutorial.start();    // tips-mode light coach
    }
    if (type === 'campaign') playStory(startWorld); // sector dialogue

    // FTL stage: start environmental hazards; "home" returns to the map.
    if (type === 'stage') { Hazards.start(stage.hazards || {}); afterRun = openCampaignMap; }
    else if (type === 'daily') {
      // Grade climbs with the difficulty the daily settled on, so late waves get
      // the nastier bubbles rather than an endless stream of the mild one.
      const dm = Meta.DIFFICULTIES[prof.difficulty] ? prof.difficulty : 'normal';
      Hazards.start({ bubbleTier: dm === 'brutal' ? 4 : dm === 'hard' ? 3 : 2 });
      dailyHazMark = 0; afterRun = null;                                  // escalate with waves
    }
    else if (type === 'contract') {
      // A contract is a part-5 sortie, so its bubbles run at the deep-campaign
      // grade; the plan decides whether they show up at all.
      Hazards.start({ bubbleTier: contractDiff === 'brutal' ? 4 : contractDiff === 'casual' ? 2 : 3 });
      contractHazMark = 0; afterRun = null;
    }
    else if (type === 'intro') { Hazards.stop(); afterRun = () => completeIntro(false); }
    else { Hazards.stop(); afterRun = null; }

    // contextual coach-marks for run-time systems (once each) — skip during intro
    if (type !== 'intro' && typeof Onboarding !== 'undefined') {
      if (warpTotal() > 0) {
        setTimeout(() => Onboarding.tip('warp', 'tip.warp', {
          // 'above', not 'left': the warp button is bottom-right, so a card
          // placed to its left lands squarely on the ship. Above keeps it
          // pointing at the same button while staying out of the ship's row.
          icon: Icons.svg('warp', 18), ms: 6000, anchor: '#hud-warp', place: 'above', scope: 'combat',
        }), 400);
      }
      if (type === 'stage' && stage && stage.hazards) {
        const hz = stage.hazards;
        // Bubbles are taught on first contact instead (jamPlayer) — the tip only
        // makes sense once one is actually stuck to the hull.
        ['magma', 'radiation', 'rocks', 'homing', 'wind'].forEach(k => { if (hz[k]) hazardTip(k); });
      }
    }
  }

  const INTRO_GRANT = 1200;
  let introCompleting = false;

  /** First-flight mission from the title screen (settings onboarding = full). */
  function startIntro() {
    introCompleting = false;
    beginRun('intro');
    // Hyperspace star scroll under briefing (no diagonal meteor streaks — see drawFlightStreaks)
    setFlightBoost(6.5, true);
  }

  /**
   * Finish intro: mark done, grant starter credits once, open hub + hangar tip.
   * Exit mid-run also counts as complete (user request).
   */
  function completeIntro(/*won*/) {
    if (introCompleting) return;
    introCompleting = true;

    if (typeof Tutorial !== 'undefined' && Tutorial.markIntroDone) Tutorial.markIntroDone();
    else {
      const p0 = Profile.get();
      p0.introDone = true;
      p0.tutorialDone = true;
      Profile.save();
    }

    const p = Profile.get();
    if (!p.introGrantDone) {
      p.credits = (p.credits || 0) + INTRO_GRANT;
      p.introGrantDone = true;
      Profile.save();
    }

    prepareScreenHandoff('hub');
    mode = 'menu';
    if (Platform.sdk && Platform.sdk.gameplayStop) Platform.sdk.gameplayStop();
    orbitActive = false;
    endWarp(true);
    setFlightBoost(1, true);

    // Hide coach UI (Tutorial.finishIntro would re-enter completeIntro — avoid that)
    if (typeof Tutorial !== 'undefined' && Tutorial.silence) Tutorial.silence();
    else {
      const tutEl = document.getElementById('tutorial');
      if (tutEl) tutEl.classList.add('hidden');
      document.querySelectorAll('.tut-pulse').forEach(n => n.classList.remove('tut-pulse'));
      const sp = document.getElementById('tut-spotlight');
      if (sp) { sp.classList.add('hidden'); sp.classList.remove('show'); }
    }

    $('pause').classList.add('hidden');
    dom.hud.classList.add('hidden');
    dom.gameover.classList.add('hidden');
    clearBattleFrame();

    // Hub.open shows hubFirst once (introGrantDone) — no second force tip here.
    Hub.open({ trans: 'cube' });
  }

  /**
   * Unified post-run sheet: stats · BP teaser · ×2 ad · mini hangar · actions.
   * opts: { won, earned, xp, title, line2Html, canMap, canRetry, canContinue, onContinue, delay }
   */
  function showRunResults(opts) {
    opts = opts || {};
    const won = !!opts.won;
    const earned = opts.earned || 0;
    const xp = opts.xp != null ? opts.xp : lastXp;
    lastEarned = earned;
    lastXp = xp;
    resultsContinue = opts.onContinue || null;

    // Already watched ×2 this session → apply it to this (final) payout too.
    if (doubledThisRun && earned > 0) {
      Profile.addCredits(earned);
      lastEarned = earned * 2;
    }
    const shownEarned = (doubledThisRun && earned > 0) ? earned * 2 : earned;

    const goEl = document.getElementById('gameover');
    if (opts.title) goEl.querySelector('h2').textContent = opts.title;

    const prof = Profile.get();
    const bal = `${T('go.balance')}: ${Icons.svg('credit')} <b>${prof.credits.toLocaleString()}</b>`
      + ((prof.gems || 0) > 0 ? ` · ${Icons.svg('gem')} <b>${prof.gems}</b>` : '');

    dom.goStats.innerHTML =
      (opts.line2Html || '') +
      `<br><span class="earned">${Icons.svg('credit')} +${shownEarned.toLocaleString()} ${T('go.credits')}`
      + (xp > 0 ? ` · ⭐ +${xp} XP` : '') + `</span>`
      + `<div class="go-bal">${bal}</div>`;

    // Battle Pass teaser
    const bpEl = document.getElementById('go-bp');
    if (bpEl) {
      bpEl.innerHTML = (typeof BattlePass !== 'undefined' && BattlePass.teaserHtml)
        ? BattlePass.teaserHtml(xp) : '';
    }

    renderReward(earned, won);
    renderSocial(player ? player.score : 0);

    // Mini hangar upgrades
    const mini = document.getElementById('go-mini');
    if (mini && typeof Hangar !== 'undefined' && Hangar.mountMiniUpgrades) {
      Hangar.mountMiniUpgrades(mini, () => {
        // Refresh balance line after a buy
        const p2 = Profile.get();
        const balEl = dom.goStats.querySelector('.go-bal');
        if (balEl) {
          balEl.innerHTML = `${T('go.balance')}: ${Icons.svg('credit')} <b>${p2.credits.toLocaleString()}</b>`
            + ((p2.gems || 0) > 0 ? ` · ${Icons.svg('gem')} <b>${p2.gems}</b>` : '');
        }
      });
    } else if (mini) mini.innerHTML = '';

    // Buttons
    const canMap = !!opts.canMap;
    const canRetry = opts.canRetry !== false;
    const canContinue = !!opts.canContinue;
    const contBtn = document.getElementById('btn-continue');
    const mapBtn = document.getElementById('btn-map');
    const retryBtn = document.getElementById('btn-retry');
    if (contBtn) contBtn.classList.toggle('hidden', !canContinue);
    if (mapBtn) mapBtn.classList.toggle('hidden', !canMap || canContinue); // Continue replaces Map when both
    if (retryBtn) {
      retryBtn.classList.toggle('hidden', !canRetry);
      // On pure stage-win sheet, Continue is primary CTA
      retryBtn.classList.toggle('btn-cta', canRetry && !canContinue);
      retryBtn.classList.toggle('btn-ghost', canContinue && canRetry);
    }
    if (contBtn && canContinue) {
      contBtn.classList.add('btn-cta');
      contBtn.classList.remove('btn-ghost');
    }

    const delay = opts.delay != null ? opts.delay : (won ? 300 : 900);
    setTimeout(() => {
      dom.hud.classList.add('hidden');
      clearBattleFrame();
      dom.gameover.classList.remove('hidden');
      VoxUI.bg(dom.gameover, won ? 'season' : 'gameover');
      updateSticky();
    }, delay);
  }

  function endGame(won = false) {
    if (mode !== 'playing') return;
    // Persist weapon XP earned mid-run (kills batch)
    try { Profile.save(); } catch (e) {}
    // Intro mission: never show the full GO sheet — go to hub with grant.
    if (runType === 'intro') {
      mode = 'gameover';
      if (Platform.sdk && Platform.sdk.gameplayStop) Platform.sdk.gameplayStop();
      endWarp(true);
      Hazards.stop();
      setTimeout(() => completeIntro(!!won), won ? 400 : 600);
      return;
    }
    mode = 'gameover';
    if (Platform.sdk && Platform.sdk.gameplayStop) Platform.sdk.gameplayStop();
    endWarp(true);                              // bank the remaining ⏩ seconds
    Hazards.stop();

    const prof = Profile.get();
    prof.totalRuns++;
    const isBest = player.score > prof.highScore;
    if (isBest) prof.highScore = player.score;
    if (Spawner.state.wave > prof.bestWave) prof.bestWave = Spawner.state.wave;

    // Award credits (scaled by difficulty) & persist records.
    const earned = Math.round(Meta.creditsForRun(player.score, prof) * difficulty.credits);
    Profile.addCredits(earned);                 // also saves
    lastEarned = earned;
    // Battle Pass XP:
    //  • stage (campaign node death / leftover progress) → delta from watermark
    //  • endless / daily / full campaign → full run formula (wave + score curve)
    if (runType === 'stage') {
      const delta = Math.max(0, player.score - bpScoreMark);
      bpScoreMark = player.score;
      lastXp = BattlePass.addStageXp(delta, !!won);
    } else {
      lastXp = BattlePass.addRunXp(player.score, {
        wave: Spawner.state.wave,
        won: !!won,
        bossKills: won ? 1 : 0,
      });
    }

    let line2;
    let title;
    if (runType === 'daily') {
      const prevBest = Daily.bestToday();
      Daily.record(player.score);
      const dailyBest = player.score > prevBest;
      title = T('go.dailyComplete');
      line2 = `${T('go.score')} <b>${player.score.toLocaleString()}</b>${isBest ? ` <span class="best">${T('go.newBest')}</span>` : ''}<br>`
        + `${T('go.reached')} <b>${Spawner.label()}</b><br>`
        + `${T('go.dailyBest')} <b>${Daily.bestToday().toLocaleString()}</b>${dailyBest ? ` <span class="best">${T('go.new')}</span>` : ''} · ${T('go.streak')} ${Daily.state().streak}`;
    } else if (runType === 'contract') {
      // A failed contract must say WHICH rule broke, or the player learns nothing
      // and retries the same way.
      let ctrName = '';
      try { ctrName = T('ctr.' + Contracts.state(contractSlot).id + '.name'); } catch (e) {}
      title = T('ctr.failed');
      line2 = `${T('go.score')} <b>${player.score.toLocaleString()}</b>${isBest ? ` <span class="best">${T('go.newBest')}</span>` : ''}<br>`
        + `${ctrName} · ${T('diff.' + (contractDiff || prof.difficulty))}<br>`
        + `<span class="go-loot">${T(contractFailReason || 'ctr.failGeneric')}</span>`;
      contractFailReason = null;
    } else {
      title = won ? T('go.victory') : T('go.destroyed');
      line2 = `${T('go.score')} <b>${player.score.toLocaleString()}</b>${isBest ? ` <span class="best">${T('go.newBest')}</span>` : ''}<br>`
        + `${T('go.reached')} <b>${Spawner.label()}</b><br>`
        + `${T('diff.' + prof.difficulty)} · ${T('mode.' + prof.mode)}`;
    }

    // daily missions: best-in-run trackers
    Missions.trackBest('score', player.score);
    Missions.trackBest('wave', Spawner.state.wave);
    Missions.trackBest('credits', earned);
    if (runType === 'campaign') Missions.trackBest('sectors', Spawner.state.worldIndex + 1);

    Analytics.levelFinish({
      result: runType === 'daily' ? 'daily_end' : (won ? 'win' : 'death'),
      mode: runType, difficulty: prof.difficulty,
      score: player.score, wave: Spawner.state.wave, is_best: isBest, credits: earned,
    });

    if (!won && runType !== 'daily') Engine.audio.gameover();
    Music.play('menu');

    const canMap = runType === 'stage' || runType === 'orbit_defense' || runType === 'orbit_assault';
    showRunResults({
      won,
      earned,
      xp: lastXp,
      title,
      line2Html: line2,
      canMap,
      canRetry: true,
      canContinue: false,
      delay: won ? 300 : 900,
    });
  }

  // Continue the SAME run after death by watching a rewarded ad — undoes the
  // premature end-of-run payout so it can't be farmed, then restores the ship.
  function reviveRun() {
    revivedThisRun = true;
    // On a contract the revive must also undo the RULE break, or the player pays
    // an ad to re-enter a run that is already lost.
    if (runType === 'contract') {
      contractFailT = 0;
      contractFailReason = null;
      try { Contracts.reviveClear(); } catch (e) {}
    }
    const prof = Profile.get();
    prof.credits = Math.max(0, prof.credits - lastEarned);   // roll back the early payout
    prof.totalRuns = Math.max(0, prof.totalRuns - 1);
    if (lastXp) BattlePass.addXp(-lastXp);
    Profile.save();
    player.alive = true;
    player.shield = Math.max(1, Math.ceil(player.maxShield / 2));
    player.invuln = 2.6;
    eBullets.clear();
    Engine.audio.revive(); Engine.shake(16);
    Engine.burst(player.x, player.y, '#ff6ad0', 34, 5, 4);
    mode = 'playing';
    orbitEndT = 0;
    dom.gameover.classList.add('hidden');
    dom.hud.classList.remove('hidden');
    Platform.hideSticky();
    announce(T('ann.revive'), '#ff6ad0');

    // Orbit assault/defense: resume 360 combat — do NOT fall into empty vertical mode
    if (runType === 'orbit_assault' || runType === 'orbit_defense') {
      orbitActive = true;
      if (runType === 'orbit_assault' && typeof OrbitModes !== 'undefined' && OrbitModes.reviveAssault) {
        OrbitModes.reviveAssault();
      } else if (runType === 'orbit_defense' && typeof OrbitModes !== 'undefined') {
        // Defense rarely kills the pilot; if we get here, restart the hold
        if (stage) {
          OrbitModes.start('defense', {
            diff: stage.diff || 1,
            part: Campaign.part(),
          });
        }
      }
      Music.play(runType === 'orbit_defense' ? 'orbit' : 'assault');
      updateHud();
      return;
    }

    player.x = Engine.W / 2; player.y = Engine.H - 140;
    Engine.input.px = player.x; Engine.input.py = player.y;
    Music.play('game');
  }

  function paintGoBalance() {
    const balEl = dom.goStats && dom.goStats.querySelector('.go-bal');
    if (!balEl) return;
    const p2 = Profile.get();
    balEl.innerHTML = `${T('go.balance')}: ${Icons.svg('credit')} <b>${p2.credits.toLocaleString()}</b>`
      + ((p2.gems || 0) > 0 ? ` · ${Icons.svg('gem')} <b>${p2.gems}</b>` : '');
  }
  function paintGoEarned(amount, xp) {
    const el = dom.goStats && dom.goStats.querySelector('.earned');
    if (!el) return;
    el.innerHTML = `${Icons.svg('credit')} +${amount.toLocaleString()} ${T('go.credits')}`
      + (xp > 0 ? ` · ⭐ +${xp} XP` : '');
  }

  // Game-over rewarded row: REVIVE (continue) + ×2 credits — both opt-in ads.
  function renderReward(earned, won) {
    const row = document.getElementById('go-reward');
    if (!row) return;
    row.innerHTML = '';
    if (!Store.rewardedAvailable()) return;
    // Revive: only after a DEATH, once per run, not in the fair daily challenge.
    if (!won && !revivedThisRun && runType !== 'daily') {
      const rv = document.createElement('button');
      rv.className = 'reward-btn revive';
      rv.textContent = '▶ ' + T('go.revive');
      rv.onclick = () => {
        rv.disabled = true;
        Store.showRewarded('revive', () => reviveRun()).then(ok => { if (!ok) rv.disabled = false; });
      };
      row.appendChild(rv);
    }
    if (earned > 0) {
      const b = document.createElement('button');
      b.className = 'reward-btn';
      if (doubledThisRun) {
        b.disabled = true;
        b.textContent = '✓ ' + T('go.doubled');
      } else {
        b.textContent = '▶ ' + T('go.double');
        b.onclick = () => {
          b.disabled = true;
          Store.showRewarded('double_credits', () => {
            doubledThisRun = true;
            Profile.addCredits(earned);
            lastEarned = earned * 2;
            b.textContent = '✓ ' + T('go.doubled');
            paintGoEarned(earned * 2, lastXp);
            paintGoBalance();
          }).then(ok => { if (!ok) b.disabled = false; });
        };
      }
      row.appendChild(b);
    }
  }

  // Build the social button row in the game-over screen, gated by platform.
  function renderSocial(score) {
    const row = document.getElementById('go-social');
    if (!row) return;
    row.innerHTML = '';
    if (Platform.caps.share) {
      const b = document.createElement('button');
      b.className = 'social-btn social-' + Platform.id;
      b.textContent = '↗ ' + T('social.repost');
      b.onclick = () => Social.repost(score);
      row.appendChild(b);
    }
  }

  /**
   * Graphics tier on the title screen.
   *
   * The same four options as Settings, offered before the player has any reason
   * to go looking for Settings — a phone that stutters should be fixable on the
   * first screen. The measured tier is badged as recommended and stays badged
   * even after the player picks something else, so there is always a way back
   * to "what this device was told to run".
   */
  function renderMenuQuality() {
    const host = document.getElementById('menu-qual');
    if (!host || typeof Quality === 'undefined') return;
    const cur = Quality.tier();
    const rec = Quality.recommended();
    host.innerHTML = `
      <div class="menu-qual-label">${T('set.quality')}</div>
      <div class="menu-qual-row">
        ${Quality.TIERS.map(q => `
          <button type="button" class="seg mq-seg ${q === cur ? 'on' : ''}" data-mqual="${q}">
            <span class="mq-name">${T('q.' + q)}</span>
            ${q === rec ? `<span class="mq-rec">${T('q.recommended')}</span>` : ''}
          </button>`).join('')}
      </div>`;
    host.querySelectorAll('[data-mqual]').forEach(b => b.onclick = () => {
      Quality.set(b.dataset.mqual, true);
      try { Engine.audio.blip(640, 0.05, 'sine', 0.1); } catch (e) {}
      renderMenuQuality();
    });
  }

  // Menu feature strip — pixel icons + localized labels (game hooks, not store tags).
  function renderMenuFeats() {
    const el = document.getElementById('menu-feats'); if (!el) return;
    el.innerHTML = [
      [Icons.svg('ship', 16), T('feat.vox', '3D Voxel')],
      [Icons.svg('statGun', 16), T('feat.arsenal', 'Arsenal')],
      [Icons.svg('campaign', 16), T('feat.orbit', 'Star map')],
      [Icons.svg('boss', 16), T('feat.bosses', 'Bosses')],
    ].map(([i, t]) => `<span class="feat">${i}<span class="feat-txt">${t}</span></span>`).join('');
  }

  /* =================== boot =================== */
  function init() {
    // Static HUD markup declares icons as data-ico; fill them before the
    // first paint so no glyph is ever visible.
    try { Icons.hydrate(document); } catch (e) {}
    try { I18N.veilShip(); } catch (e) {}   // ship inside the loading ring
    // Pick the render budget before anything draws. First launch measures the
    // device (inside the curtain, ~90ms worst case); every launch after reads
    // the stored answer, so the game never looks different from one session to
    // the next on its own.
    try { Quality.init(); } catch (e) {}
    Assets.preload();                            // start loading AI sprites (fallback if absent)
    renderMenuFeats();
    renderMenuQuality();
    // Settings offers the same four options, and the safety net can move the
    // tier on its own — keep the title row honest whoever changed it.
    if (typeof Quality !== 'undefined' && Quality.onChange) Quality.onChange(renderMenuQuality);
    VoxUI.scan(document.getElementById('menu'));  // title screen: nebula + live rotating voxel ship
    // Language must appear INSTANTLY. Use the best synchronous guess now (host
    // query params / browser locale), then correct it the moment the SDK is ready
    // (Yandex only knows the real UI language after YaGames.init resolves).
    I18N.onChange(() => { refreshOpenScreen(); renderMenuFeats(); renderMenuQuality(); });  // re-render on a language flip
    I18N.setLang(Profile.get().langChosen ? Profile.get().lang : Platform.getLanguage());
    // Safety net: if the SDK never resolves we must not sit behind the curtain
    // forever. Whatever language we guessed becomes the final one.
    const veilFailsafe = setTimeout(() => I18N.veilDown(), 4000);
    Platform.init().then(() => {
      // GamePush/Yandex: platform language at every launch, even if the player
      // once picked RU/EN in the hub (manual switch still works this session).
      I18N.setLang(Platform.getLanguage());
      Settings.apply();                          // volumes after SDK language
      if (Profile.get().settings.muted) Settings.syncSdkMute(true);
      Platform.gameReady();                      // right after preloader — "GameStart on time"
      updateSticky();
      return Promise.race([
        Cloud.init(),
        new Promise(res => setTimeout(res, 3500)),
      ]);
    }).then(() => {
      // Curtain drops only once the ACCOUNT's save has arrived. On a cloud host
      // the device keeps no save of its own, so until the pull resolves the
      // profile is empty — dropping the curtain earlier would show a brand-new
      // hub for a second and then swap the real one in underneath the player.
      // Capped at 3.5s by the race above, inside the 4s failsafe.
      clearTimeout(veilFailsafe);
      I18N.veilDown();
      Store.restore();                           // unconsumed IAP on top of the adopted save
    }).catch(() => {
      try { clearTimeout(veilFailsafe); I18N.veilDown(); } catch (e) {}
      try { Platform.gameReady(); } catch (e) {}
      try { Store.restore(); } catch (e) {}
    });
    Analytics.init();                            // session + app_open
    Settings.apply();                            // push saved audio settings into engine

    $('btn-start').addEventListener('click', () => {
      // First launch in "full" onboarding → intro flight instead of hub.
      if (typeof Tutorial !== 'undefined' && Tutorial.shouldStartIntro && Tutorial.shouldStartIntro()) {
        startIntro();
        return;
      }
      if (runType === 'stage' && afterRun) afterRun();
      else if (typeof FXTrans !== 'undefined') Hub.open({ trans: 'cube' });
      else Hub.open();
    });
    $('btn-retry').addEventListener('click', () => {
      const relaunch = () => {
        dom.gameover.classList.add('hidden');
        if (stage && (runType === 'stage' || runType === 'orbit_defense' || runType === 'orbit_assault')) engageStage(stage);
        else if (runType === 'daily') startDaily();
        else if (runType === 'contract') startContract(contractDiff, contractSlot);
        else startEndless();
      };
      // Entering combat always warps (same language as the map launch pad).
      if (typeof FXTrans !== 'undefined') FXTrans.go({ style: 'warp', run: relaunch });
      else relaunch();
    });
    const btnMap = $('btn-map');
    if (btnMap) btnMap.addEventListener('click', () => openCampaignMap());
    const btnCont = $('btn-continue');
    if (btnCont) btnCont.addEventListener('click', () => {
      const fn = resultsContinue;
      resultsContinue = null;
      dom.gameover.classList.add('hidden');
      if (fn) fn();
      else openCampaignMap();
    });
    $('btn-hangar').addEventListener('click', () => {
      resultsContinue = null;
      dom.gameover.classList.add('hidden');
      clearBattleFrame();
      // GO "Hangar" → Hangar, not Hub
      const openHg = () => {
        if (typeof Hangar !== 'undefined' && Hangar.open) {
          Hangar.open(() => Hub.open(), { tab: 'systems' });
        } else Hub.open();
      };
      if (typeof FXTrans !== 'undefined') FXTrans.go({ style: 'cube', run: openHg });
      else openHg();
    });

    // Platform rule (Yandex/VK/CrazyGames …): tab hidden / window minimised →
    // game pauses and ALL audio is silenced; audio returns on focus, the game
    // stays paused until the player resumes.
    document.addEventListener('visibilitychange', () => {
      try {
        if (adActive) return; // rewarded/interstitial owns mute + freeze
        const c = Engine.audio.ctx;
        if (document.hidden) {
          if (mode === 'playing') togglePause();
          if (c && c.state === 'running') c.suspend();
        } else if (c && c.state === 'suspended') { c.resume(); }
      } catch (e) {}
    });

    // GamePush gp.sounds mute/unmute — audio only (ads, pause, platform mute button).
    window.addEventListener('gp:audiomute', e => {
      const want = !!(e && e.detail && e.detail.muted);
      if (want) {
        try { Engine.audio.setMuted(true); Music.setMuted(true); const c = Engine.audio.ctx; if (c && c.state === 'running') c.suspend(); } catch (err) {}
        return;
      }
      if (adActive) return;
      const m = Profile.get().settings.muted;
      try { Engine.audio.setMuted(m); Music.setMuted(m); const c = Engine.audio.ctx; if (c && c.state === 'suspended' && !document.hidden) c.resume(); } catch (err) {}
    });
    // Ads / payment overlay / SDK pause — freeze combat so the player isn't hit.
    window.addEventListener('gp:adfreeze', e => {
      const d = (e && e.detail) || {};
      if (d.on) onAdOpen(!!d.ad); else onAdClose();
    });

    // pause: HUD button + keyboard (Esc / P)
    $('btn-pause').addEventListener('click', togglePause);
    window.addEventListener('keydown', e => {
      if (e.code !== 'Escape' && e.code !== 'KeyP') return;
      if (!$('settings').classList.contains('hidden')) { Settings.close(); return; } // close settings first
      if (mode === 'playing' || mode === 'paused') togglePause();
    });
    // capture helper: F9 downloads the current canvas frame as PNG (store assets)
    window.addEventListener('keydown', e => {
      if (e.code !== 'F9') return;
      const a = document.createElement('a');
      a.download = 'starward_' + Date.now() + '.png';
      a.href = Engine.canvas.toDataURL('image/png');
      a.click();
    });

    // manual weapon switch + lock + nuke: keyboard; the tap UI is the slot bar
    const WK = { Digit1: 'cannon', Digit2: 'spread', Digit3: 'laser', Digit4: 'missile', Digit5: 'railgun', Digit6: 'pulse' };
    window.addEventListener('keydown', e => {
      if (mode !== 'playing') return;
      if (WK[e.code]) { player.equip(WK[e.code]); updateHud(); e.preventDefault(); }
      else if (e.code === 'Tab' || e.code === 'KeyQ') { player.cycleWeapon(); updateHud(); e.preventDefault(); }
      else if (e.code === 'KeyX') { player.equip(player.strongestWeapon()); updateHud(); }
      else if (e.code === 'KeyL') { player.toggleLock(); updateHud(); }
      else if (e.code === 'KeyN') { Engine.input.nukeQueued = true; } // fire equipped super
    });
    const queueSuperClick = (ev) => {
      if (mode !== 'playing') return;
      // Defense: tap inactive slot → switch; tap active → fire
      if (orbitActive && typeof OrbitModes !== 'undefined' && OrbitModes.getKind
        && OrbitModes.getKind() === 'defense' && OrbitModes.getDefSuperHud) {
        const hud = OrbitModes.getDefSuperHud();
        const key = ev && ev.currentTarget && ev.currentTarget.dataset
          ? ev.currentTarget.dataset.defsuper : null;
        if (key && hud && hud.loadout && hud.loadout.length > 1) {
          const want = hud.loadout.indexOf(key);
          if (want >= 0 && want !== (hud.idx || 0) && OrbitModes.cycleSuper) {
            // Shortest direction on a 2-slot loadout
            const dir = want > (hud.idx || 0) ? 1 : -1;
            OrbitModes.cycleSuper(dir);
            // If still not there (shouldn't happen for 2), cycle once more
            const h2 = OrbitModes.getDefSuperHud();
            if (h2 && h2.loadout[h2.idx || 0] !== key) OrbitModes.cycleSuper(dir);
            return;
          }
        }
      }
      Engine.input.bombQueued = true;
      Engine.input.superSource = 'ui';
      Engine.input.superSeq++;
    };
    if (dom.bombs) dom.bombs.addEventListener('click', queueSuperClick);
    if (dom.nuke) dom.nuke.addEventListener('click', queueSuperClick);
    if (dom.barrier) dom.barrier.addEventListener('click', queueSuperClick);
    if (dom.sphere) dom.sphere.addEventListener('click', queueSuperClick);
    dom.warp.addEventListener('click', () => toggleWarp());

    function leaveRun(to, opts) {
      // Leaving the intro flight still completes onboarding.
      if (runType === 'intro') {
        completeIntro(false);
        return;
      }
      // Daily: quitting still records today's best so the hub card stays honest.
      if (runType === 'daily' && player && typeof Daily !== 'undefined' && Daily.record) {
        Daily.record(player.score || 0);
      }
      prepareScreenHandoff(to === 'map' ? 'map' : 'hub');
      mode = 'menu';
      if (typeof Engine.resetCam === 'function') Engine.resetCam();
      if (Platform.sdk && Platform.sdk.gameplayStop) Platform.sdk.gameplayStop();
      orbitActive = false;
      if (typeof OrbitModes !== 'undefined') OrbitModes.stop();
      endWarp(true);
      Tutorial.cancel();
      $('pause').classList.add('hidden');
      dom.hud.classList.add('hidden');
      clearBattleFrame();
      if (to === 'map') openCampaignMap(null, opts);
      else if (opts && opts.instant) Hub.open();
      else Hub.open({ trans: 'cube' });
    }

    $('pause-resume').addEventListener('click', resumeGame);
    $('pause-settings').addEventListener('click', () => {
      const pauseEl = $('pause');
      const openSet = () => {
        if (pauseEl) pauseEl.classList.add('hidden');
        Settings.open(() => {
          if (pauseEl) pauseEl.classList.remove('hidden');
          // Back to the battle scope, or settings tips keep floating over the HUD.
          try {
            if (typeof Onboarding !== 'undefined' && Onboarding.enter) Onboarding.enter('combat');
          } catch (e) {}
        });
      };
      if (typeof FXTrans !== 'undefined') FXTrans.go({ style: 'cube', run: openSet });
      else openSet();
    });
    // Campaign stage → return to map (keeps campaign progress / launch pad).
    // One cube: capture pause+combat, then mount map (instant open inside run).
    $('pause-map').addEventListener('click', () => {
      if (typeof FXTrans !== 'undefined') {
        FXTrans.go({ style: 'cube', run: () => leaveRun('map', { instant: true }) });
      } else leaveRun('map', { instant: true });
    });
    // Always available: back to main hub menu
    $('pause-quit').addEventListener('click', () => {
      if (typeof FXTrans !== 'undefined') {
        FXTrans.go({ style: 'cube', run: () => leaveRun('hub', { instant: true }) });
      } else leaveRun('hub', { instant: true });
    });

    Engine.start(step, draw);
  }

  return {
    init, startGame, startEndless, startDaily, startCampaign, startIntro, completeIntro,
    startContract, contractWon, contractFailed, openContracts,
    setFlightBoost, clearCombatEphemera, prepareScreenHandoff, runMods,
    engageStage, currentStage, stageWon, stageDock, damagePlayer, isCampaignStage,   // FTL map stages + hazards
    /** Promo rig only: start a vertical stage without story/cine. */
    _promoStartStage(node) {
      stage = node;
      if (typeof Campaign !== 'undefined' && Campaign.themeFor) {
        stage._theme = Campaign.themeFor(node);
      }
      beginRun('stage');
    },
    spawnPlayerBullets, spawnEnemyBullet, spawnEnemy, spawnBoss, spawnIntroAsteroid, firstFightBoon,
    lockMissileTarget,
    dropPowerUp, floatText, announce, jamPlayer, jamDrain, enemyCount, powerupCount, useBomb, useSuper,
    fireSuperInstant, updateHud,
    setTheme, onWorldCleared, victory, playStory, freezeForStory, stageInterstitial, isWeaponUnlocked,
    onAdOpen, onAdClose, isAdActive,
    // Orbit assault bridges (modules / drops / CIWS)
    orbitModulesTick(dt) { if (orbitActive) updateCombatModules(dt); },
    orbitModulesDraw(ctx) { if (orbitActive) drawCombatModules(ctx); },
    orbitPointDefTry(x, y) {
      if (!combatMods.length || !player) return false;
      for (const m of combatMods) {
        if (m.kind !== 'pointDef' || m.charge <= 0 || m.reloadT > 0 || m.fireT > 0) continue;
        const range = (m.st && m.st.range) || 60;
        if (Engine.dist2(player.x, player.y, x, y) < range * range) {
          m.fireT = m.st.fireCd || 0.15;
          m.charge--;
          if (m.charge <= 0) m.reloadT = m.st.reload || 9;
          m._flash = { x, y, life: 0.1 };
          return true;
        }
      }
      return false;
    },
    orbitCollectDrop(p) {
      if (!p || !player) return 0;
      try {
        if (typeof PowerUps !== 'undefined' && PowerUps.collect) {
          const sc = PowerUps.collect(p) || 0;
          if (sc) player.score = (player.score || 0) + sc;
          updateHud();
          return sc;
        }
      } catch (e) {}
      return 0;
    },
    // Headless capture rig — manual step/draw + live pool access. Used ONLY by
    // the promo-recording tooling (autopilot gameplay capture); no game code calls it.
    _capture: { step: dt => step(dt), draw: () => draw(),
      pools: () => ({ pBullets, eBullets, enemies, powerups, boss, player, mode }),
      // Banner text is canvas-drawn, so a test cannot read it off the DOM.
      banner: () => ({ text: announceText, t: announceT }) },
    get player() { return player; }, get boss() { return boss; }, get theme() { return theme; },
  };
})();

Game.init();
