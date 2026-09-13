/* ============================================================
 * spawner.js — wave/spawn manager. Two modes:
 *   campaign — fixed themed worlds, each ending in a boss, then the
 *              next world; finishing the last world = victory.
 *   endless  — procedurally escalating waves, boss every 5, theme cycles.
 * Enemy types are biased per world via world.pool.
 * ========================================================== */
const Spawner = (() => {
  const BOSS_EVERY = 5;
  const WAVE_MAX_WAIT = 5.5;  // force the next wave after this long even if enemies remain (#2)
  const WAVE_GAP = 1.0;       // short pause between normal waves
  const STAGE_PAUSE = 3.0;    // safety pause between stages / after a boss (ad-insert window, #3)
  const { W, clamp } = Engine;

  const state = {
    mode: 'campaign',
    wave: 0,          // global wave counter (drives boss scaling)
    worldIndex: 0,
    worldWave: 0,     // waves cleared within the current world
    spawnQueue: [],
    timer: 0,
    waveT: 0,         // time since the current wave finished spawning (hidden wave timer)
    inBoss: false,
    betweenT: 1.0,    // >0 = no-spawn pause (inter-wave / stage safety window)
    rng: Math.random, // swapped for a seeded stream in daily mode
  };

  function reset(mode, seed, startWorld) {
    state.mode = mode || 'campaign';
    state.spawnQueue.length = 0; state.timer = 0; state.waveT = 0; state.inBoss = false; state.betweenT = 1.2;
    state.introWaveDone = false;
    state.introWaiting = false;
    state.introFinished = false;

    // First-flight intro: hold spawns until Tutorial says combat is ready.
    if (mode === 'intro') {
      state.worldIndex = 0; state.worldWave = 0; state.wave = 1;
      state.rng = Math.random;
      state.introWaiting = true;
      state.betweenT = 0;
      Game.setTheme(Worlds.WORLDS[0]);
      return;
    }

    // FTL-map stage: a short, self-contained match driven by the chosen node.
    if (mode === 'stage') {
      const s = Game.currentStage();
      state.worldIndex = 0; state.worldWave = 0;
      state.stageWaves = s.waves || 0;
      state.stageBoss = s.dock ? null : (s.boss || null);   // every non-base stage ends in a boss
      state.bossSpawned = false;
      state.stageMid = s.dock ? null : (s.midBoss || null); // optional mid-stage boss (long stages)
      state.midSpawned = false; state.midActive = false;
      state.wave = s.startWave || 1;          // node tier drives HP/bullet scaling
      state.rng = Math.random;
      Game.setTheme(s._theme);
      return;
    }

    const sw = (mode === 'campaign' && startWorld) ? Math.min(startWorld, Worlds.WORLDS.length - 1) : 0;
    state.worldIndex = sw; state.worldWave = 0;
    state.wave = sw * 5;                    // approximate progress → HP/boss scaling matches the sector
    // Daily uses a date-seeded PRNG so wave layouts match for everyone.
    state.rng = (mode === 'daily') ? Engine.makeRng(seed >>> 0) : Math.random;
    Game.setTheme(Worlds.WORLDS[sw]);
  }

  /** One short, soft wave for the intro practice fight. */
  function buildIntroWave() {
    const q = [];
    const { W, clamp } = Engine;
    const xs = [0.2, 0.35, 0.5, 0.65, 0.8].map(f => clamp(W * f, 40, W - 40));
    let t = 0.15;
    xs.forEach((x, i) => {
      q.push({ type: i % 2 === 0 ? 'kamikaze' : 'shooter', x, delay: t });
      t += 0.45;
    });
    // two late stragglers
    q.push({ type: 'kamikaze', x: clamp(W * 0.3, 40, W - 40), delay: t + 0.5 });
    q.push({ type: 'kamikaze', x: clamp(W * 0.7, 40, W - 40), delay: t + 0.85 });
    return q;
  }

  // Build a wave's spawn list. Enemy mix + density come from the active run
  // mods (world pool by default; daily mutators can override). Positions use
  // state.rng so daily runs are reproducible.
  const HEAVY = { cruiser: 1, carrier: 1, destroyer: 1, tank: 1 };
  const lightOf = pool => pool.find(t => !HEAVY[t]) || 'kamikaze';

  // Endless/daily: fold progressively tougher + horizontal enemies into the pool
  // as the wave count climbs, so late runs get genuinely harder, not just tankier.
  function escalatePool(base, n) {
    const pool = base.slice();
    if (n >= 4) pool.push('strafer');
    if (n >= 8) pool.push('asteroid', 'cruiser');
    if (n >= 12) pool.push('destroyer', 'strafer');
    if (n >= 16) pool.push('carrier', 'destroyer');
    if (n >= 22) pool.push('destroyer', 'weaver', 'carrier');
    if (n >= 30) pool.push('carrier', 'strafer', 'destroyer');
    if (n >= 42) pool.push('destroyer', 'carrier');   // heavy-dominant late game
    return pool;
  }

  function buildWave(n, world) {
    const mods = Game.runMods();
    // Belt and braces: a world with no pool must never be able to throw here and
    // take the whole run down (see the ULTRA skip in bossDefeated).
    let pool = mods.poolOverride || world.pool || Worlds.WORLDS[0].pool;
    // Endless/daily escalate the pool; campaign & FTL stages use their curated pool.
    const hard = (state.mode === 'endless' || state.mode === 'daily');
    if (hard) { if (!mods.poolOverride) pool = escalatePool(pool, n); }
    // Daily/endless density creeps up with the wave so late runs get genuinely denser.
    const dens = (mods.enemyDensity || 1) * (hard ? 1 + Math.min(n, 60) * 0.01 : 1);
    const rowCap = hard ? 14 : 11, midCap = hard ? 22 : 16;
    const R = state.rng;
    const rrand = (a, b) => a + R() * (b - a);
    const rint = (a, b) => Math.floor(rrand(a, b + 1));

    const q = [];
    const push = (type, x, delay) => q.push({ type, x: clamp(x, 30, W - 30), delay });
    let t = 0;

    // opening formation: a swarm row of LIGHT fodder (never a wall of tanks)
    const light = lightOf(pool);
    const rc = Math.min(Math.round((3 + Math.floor(n * 0.7)) * dens), rowCap);
    for (let i = 0; i < rc; i++) { push(light, 60 + i * (W - 120) / Math.max(1, rc - 1), t); t += 0.22; }
    t += 0.9;

    // mixed mid-section from the pool, with a per-wave cap on heavy enemies so
    // a wave can't become an unfair wall of tanks (extras become light fodder).
    let heavies = 0;
    const heavyCap = 2 + Math.floor(n / (hard ? 2.4 : 3));
    const mid = Math.min(Math.round((3 + Math.floor(n * 0.9)) * dens), midCap);
    for (let i = 0; i < mid; i++) {
      let type = pool[rint(0, pool.length - 1)];
      if (HEAVY[type]) { if (heavies >= heavyCap) type = light; else heavies++; }
      push(type, rrand(40, W - 40), t); t += rrand(0.3, 0.6);
    }
    t += 0.6;

    return q;
  }

  // Localized world name.
  function wname(world) { return T('world.' + world.key + '.name', world.name); }

  function startNextWave() {
    if (state.mode === 'intro') {
      if (state.introFinished) return;
      if (state.introWaveDone) {
        state.introFinished = true;
        if (typeof Tutorial !== 'undefined' && Tutorial.onIntroWaveClear) Tutorial.onIntroWaveClear();
        else if (typeof Game !== 'undefined' && Game.completeIntro) Game.completeIntro(true);
        return;
      }
      state.introWaveDone = true;
      state.worldWave = 1;
      state.spawnQueue = buildIntroWave();
      state.timer = 0;
      Game.announce(T('tut.intro.combat'), '#4ad6ff');
      return;
    }
    if (state.mode === 'stage') {
      const s = Game.currentStage();
      if (state.worldWave >= state.stageWaves) {
        if (s.dock) { Game.stageDock(); return; }         // base run → docking cinematic
        if (state.stageBoss && !state.bossSpawned) {
          state.inBoss = true; state.bossSpawned = true;
          Game.spawnBoss(state.wave + 4, state.stageBoss);
          const nm = T('boss.' + state.stageBoss + '.name', state.stageBoss);
          Game.announce(s.warlord ? Tf('ann.ultraBoss', nm) : Tf('ann.miniBoss', nm), s.warlord ? '#ff4a4a' : '#ff5bd0');
          Engine.audio.boss();
        } else { Game.stageWon(); }
      } else if (state.stageMid && !state.midSpawned && state.worldWave >= Math.ceil(state.stageWaves / 2)) {
        // MID-BOSS at the halfway point: half-strength interlude, then the
        // remaining waves and the real stage boss.
        state.midSpawned = true; state.midActive = true; state.inBoss = true;
        Game.spawnBoss(state.wave, state.stageMid, 0.5);
        Game.announce(Tf('ann.miniBoss', T('boss.' + state.stageMid + '.name', state.stageMid)), '#ff9a3d');
        Engine.audio.boss();
      } else {
        state.worldWave++; state.wave++;
        state.spawnQueue = buildWave(state.wave, s._theme); state.timer = 0;
        Game.announce(Tf('ann.wave', state.worldWave) + ' / ' + state.stageWaves, '#4ad6ff');
        // Opening waves of the player's very first node get one guaranteed
        // weapon drop. Game.firstFightBoon owns every condition — this call
        // site only says WHEN a stage wave begins, not WHO deserves help.
        if (Game.firstFightBoon) Game.firstFightBoon(state.worldWave);
      }
      return;
    }
    if (state.mode === 'campaign') {
      const world = Worlds.WORLDS[state.worldIndex];
      if (state.worldWave >= world.waves) {
        state.inBoss = true;
        Game.spawnBoss(state.wave + 2, world.boss);
        if (world.ultra) Game.announce(Tf('ann.ultraBoss', wname(world)), '#ff4a4a');
        else Game.announce(Tf('ann.bossSector', wname(world)), '#ff5bd0');
        Engine.audio.boss();
      } else {
        state.worldWave++; state.wave++;
        state.spawnQueue = buildWave(state.wave, world); state.timer = 0;
        Game.announce(wname(world) + '   ' + state.worldWave + ' / ' + world.waves, '#4ad6ff');
      }
    } else { // endless / daily
      state.wave++;
      const world = Worlds.WORLDS[state.worldIndex];
      if (state.wave % BOSS_EVERY === 0) {
        state.inBoss = true;
        Game.spawnBoss(state.wave, world.boss);
        Game.announce(T('ann.bossIncoming'), '#ff5bd0');
        Engine.audio.boss();
      } else {
        state.spawnQueue = buildWave(state.wave, world); state.timer = 0;
        Game.announce(Tf('ann.wave', state.wave), '#4ad6ff');
      }
    }
  }

  // Called by Game when the current boss is destroyed.
  function bossDefeated() {
    if (state.mode === 'stage') {
      if (state.midActive) {                       // mid-boss down → resume the waves
        state.midActive = false; state.inBoss = false;
        state.betweenT = WAVE_GAP * 2; state.waveT = 0;
        Music.play('game');
        return;
      }
      Game.stageWon(); return;                     // final stage boss → outro → map
    }
    if (state.mode === 'campaign') {
      const prevChapter = Worlds.WORLDS[state.worldIndex].chapter;
      Game.onWorldCleared(state.worldIndex);
      state.worldIndex++; state.worldWave = 0;
      if (state.worldIndex >= Worlds.WORLDS.length) { Game.victory(); return; }
      const next = Worlds.WORLDS[state.worldIndex];
      Game.setTheme(next);
      // Crossing into a new chapter → chapter banner; otherwise the sector name.
      if (next.chapter !== prevChapter) {
        const ch = Worlds.CHAPTERS[next.chapter - 1];
        Game.announce(Tf('ann.chapter', ch ? ch.n : next.chapter, ch ? T('chapter.' + ch.n, ch.name) : ''), '#ffe24a');
      } else {
        Game.announce(Tf('ann.entering', wname(next)), '#7dffa0');
      }
      state.inBoss = false; state.betweenT = STAGE_PAUSE; state.waveT = 0;
      Music.play('game');
      Game.stageInterstitial();                  // optional ad in the safety window (#3)
      Game.playStory(state.worldIndex);          // dialogue before the new sector
    } else {
      // ULTRA interludes are boss-only campaign set-pieces (waves: 0) and carry
      // no enemy pool — endless/daily must rotate through SECTORS only. Walking
      // onto one made buildWave read `pool` off a world that has none, which
      // threw and killed the run around wave 40 (8 boss kills in).
      let guard = 0;
      do {
        state.worldIndex = (state.worldIndex + 1) % Worlds.WORLDS.length;
      } while (Worlds.WORLDS[state.worldIndex].ultra && ++guard < Worlds.WORLDS.length);
      Game.setTheme(Worlds.WORLDS[state.worldIndex]);
      state.inBoss = false; state.betweenT = STAGE_PAUSE; state.waveT = 0;
      Music.play('game');
      Game.stageInterstitial();
    }
  }

  function update(dt) {
    if (state.inBoss) return;                       // wait for boss death

    // Intro holds until spotlight steps finish (combatReady).
    if (state.mode === 'intro') {
      if (state.introFinished) return;
      if (state.introWaiting) {
        const ready = !(typeof Tutorial !== 'undefined') || Tutorial.isCombatReady();
        if (!ready) return;
        state.introWaiting = false;
        state.betweenT = 0.6;
      }
    }

    // no-spawn safety pause (inter-wave / after a stage) — ad-insert window (#3)
    if (state.betweenT > 0) { state.betweenT -= dt; return; }

    if (state.spawnQueue.length) {                  // release queued spawns of this wave
      state.timer += dt;
      while (state.spawnQueue.length && state.spawnQueue[0].delay <= state.timer) {
        const s = state.spawnQueue.shift();
        Game.spawnEnemy(s.type, s.x, -20);
      }
      return;
    }

    // this wave is fully spawned — advance when cleared OR after a hidden timer, so
    // waves keep flowing even if a few stragglers remain (#2). Not for boss/stage.
    // Intro: wait for a full clear (no force-timer) so the player finishes the lesson.
    state.waveT += dt;
    const force = state.mode === 'intro' ? false : state.waveT >= WAVE_MAX_WAIT;
    if (Game.enemyCount() === 0 || force) {
      state.waveT = 0; state.betweenT = WAVE_GAP; startNextWave();
    }
  }

  // Short HUD label for the current progress.
  function label() {
    if (state.mode === 'intro') {
      // Localised: a bare 'INTRO' put an English word in the Russian HUD,
      // which is exactly what moderation rejects in either direction.
      return state.introWaiting ? T('hud.intro') : (T('hud.wave') + ' 1');
    }
    if (state.mode === 'stage') {
      const s = Game.currentStage();
      if (state.inBoss || (s && s.type === 'boss')) return T('hud.boss') + ' · ' + (s ? T('node.' + s.type) : '');
      // worldWave is the CURRENT wave after start (1-based); do not +1 (that desynced HUD vs center banner)
      const cur = Math.max(1, Math.min(state.worldWave || 1, state.stageWaves || 1));
      const total = Math.max(1, state.stageWaves || 1);
      return T('node.' + (s ? s.type : 'combat')) + ' · ' + cur + '/' + total;
    }
    if (state.mode === 'campaign') {
      // clamp: worldIndex briefly exceeds the last world after the final boss
      // (campaign victory) — without this, label() throws every frame and freezes.
      const w = Worlds.WORLDS[Math.min(state.worldIndex, Worlds.WORLDS.length - 1)];
      return (state.inBoss ? T('hud.boss') + ' · ' : '') + wname(w);
    }
    const prefix = state.mode === 'daily' ? T('hud.daily') + ' · ' : '';
    return prefix + (state.inBoss ? T('hud.boss') : T('hud.wave')) + ' ' + state.wave;
  }

  return { state, reset, update, bossDefeated, label, BOSS_EVERY };
})();
