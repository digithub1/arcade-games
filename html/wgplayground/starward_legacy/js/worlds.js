/* ============================================================
 * worlds.js — campaign sectors, organised into 3 CHAPTERS.
 *   Chapter I  — Outer Rim   (8 sectors)
 *   Chapter II — Deep Space  (8 sectors, tougher pools/bosses)
 *   Chapter III— The Core    (8 sectors, hardest)
 * Between chapters an ULTRA-BOSS sector appears (waves:0 → straight to
 * a huge multi-phase boss). Final sector = the last ultra-boss.
 * Total: 24 sector fights + 3 ultra-bosses = 27 nodes.
 *
 * Each world: { key, name, chapter, ultra?, waves, palette…, pool,
 *               boss (archetype key in Enemies.BOSSES), bgDebris? }.
 * `boss` is decoupled from `key` so an archetype can recur across
 * chapters (scaled by wave) while every sector keeps a unique key.
 * ========================================================== */
const Worlds = (() => {
  // ---- reusable visual palettes ----
  const PAL = {
    nebula:   { star: '#ffd6e6', bgTop: '#1a0512', bgBot: '#05020a', neb: ['rgba(255,60,120,0.12)', 'rgba(150,40,210,0.09)'] },
    asteroid: { star: '#dfe8ff', bgTop: '#0b0e1a', bgBot: '#04050a', neb: ['rgba(120,150,200,0.10)', 'rgba(70,90,140,0.07)'] },
    hive:     { star: '#d8ffe0', bgTop: '#06180c', bgBot: '#02080a', neb: ['rgba(60,255,150,0.10)', 'rgba(170,255,60,0.07)'] },
    void:     { star: '#e0dcff', bgTop: '#0b0620', bgBot: '#020208', neb: ['rgba(130,70,255,0.13)', 'rgba(40,90,255,0.09)'] },
    ember:    { star: '#ffd9b0', bgTop: '#2a0e06', bgBot: '#0a0402', neb: ['rgba(255,120,40,0.12)', 'rgba(255,60,20,0.09)'] },
    frost:    { star: '#cfeeff', bgTop: '#08182a', bgBot: '#02060c', neb: ['rgba(90,180,255,0.11)', 'rgba(140,220,255,0.08)'] },
    nexus:    { star: '#b0ffd0', bgTop: '#06180f', bgBot: '#02080a', neb: ['rgba(60,255,170,0.10)', 'rgba(120,255,120,0.07)'] },
    core:     { star: '#fff0c0', bgTop: '#201a06', bgBot: '#060402', neb: ['rgba(255,220,120,0.12)', 'rgba(255,140,60,0.10)'] },
    // ultra-boss arenas
    rift:     { star: '#ffb0f0', bgTop: '#170428', bgBot: '#050110', neb: ['rgba(200,60,255,0.16)', 'rgba(120,40,255,0.12)'] },
    abyss:    { star: '#a0f0ff', bgTop: '#02141c', bgBot: '#01060a', neb: ['rgba(40,200,255,0.15)', 'rgba(60,120,255,0.10)'] },
    singular: { star: '#ffe0a0', bgTop: '#241202', bgBot: '#0a0400', neb: ['rgba(255,190,60,0.16)', 'rgba(255,90,40,0.13)'] },
  };

  // ---- enemy pools by escalation tier ----
  const POOL = {
    // chapter I — introductory
    c1: [
      ['kamikaze', 'kamikaze', 'shooter'],
      ['kamikaze', 'asteroid', 'cruiser', 'strafer', 'tank'],
      ['weaver', 'weaver', 'kamikaze', 'shooter'],
      ['shooter', 'weaver', 'tank', 'cruiser'],
      ['cruiser', 'kamikaze', 'strafer', 'shooter'],
      ['destroyer', 'weaver', 'cruiser', 'asteroid'],
      ['carrier', 'interceptor', 'strafer', 'shooter'],
      ['destroyer', 'carrier', 'cruiser', 'asteroid', 'strafer'],
    ],
    // chapter II — heavier mixes, more horizontal hazards
    c2: [
      ['shooter', 'strafer', 'cruiser', 'weaver'],
      ['asteroid', 'strafer', 'cruiser', 'tank', 'kamikaze'],
      ['weaver', 'shooter', 'strafer', 'carrier'],
      ['tank', 'cruiser', 'destroyer', 'weaver'],
      ['cruiser', 'strafer', 'asteroid', 'destroyer', 'shooter'],
      ['destroyer', 'carrier', 'weaver', 'strafer'],
      ['carrier', 'interceptor', 'destroyer', 'strafer', 'shooter'],
      ['destroyer', 'carrier', 'cruiser', 'asteroid', 'strafer', 'weaver'],
    ],
    // chapter III — relentless
    c3: [
      ['cruiser', 'strafer', 'destroyer', 'weaver', 'shooter'],
      ['asteroid', 'destroyer', 'strafer', 'cruiser', 'tank'],
      ['carrier', 'interceptor', 'strafer', 'weaver', 'destroyer'],
      ['destroyer', 'cruiser', 'carrier', 'strafer', 'shooter'],
      ['destroyer', 'carrier', 'asteroid', 'strafer', 'weaver'],
      ['carrier', 'destroyer', 'interceptor', 'cruiser', 'strafer'],
      ['destroyer', 'carrier', 'strafer', 'weaver', 'asteroid', 'shooter'],
      ['destroyer', 'carrier', 'cruiser', 'interceptor', 'strafer', 'asteroid'],
    ],
  };

  // ---- chapter definitions: [displayName, paletteKey, bossKey, bgDebris] ----
  // 8 sectors each; bosses mix returning + new archetypes for variety.
  const CH1 = [
    ['CRIMSON NEBULA', 'nebula', 'nebula', false],
    ['ASTEROID BELT', 'asteroid', 'asteroid', true],
    ['ALIEN HIVE', 'hive', 'hive', false],
    ['THE VOID GATE', 'void', 'void', false],
    ['EMBER EXPANSE', 'ember', 'ember', true],
    ['FROSTBITE RIM', 'frost', 'frost', true],
    ['MACHINE NEXUS', 'nexus', 'nexus', false],
    ['SENTINEL LINE', 'void', 'warden', false],
  ];
  const CH2 = [
    ['SHATTERED REACH', 'asteroid', 'leviathan', true],
    ['DERELICT DRIFT', 'frost', 'reaper', true],
    ['SPORE NURSERY', 'hive', 'hive', false],
    ['EVENT HORIZON', 'void', 'void', false],
    ['MOLTEN THRONE', 'ember', 'dreadnought', true],
    ['GLACIER MAW', 'frost', 'frost', true],
    ['IRON FOUNDRY', 'nexus', 'nexus', false],
    ['BROKEN ARMADA', 'asteroid', 'reaper', true],
  ];
  const CH3 = [
    ['CRIMSON GRAVE', 'nebula', 'nebula', false],
    ['TITAN GRAVEYARD', 'asteroid', 'leviathan', true],
    ['HOLLOW CATHEDRAL', 'void', 'warden', false],
    ['INFERNO GATE', 'ember', 'dreadnought', true],
    ['ABSOLUTE ZERO', 'frost', 'reaper', true],
    ['OMEGA NEXUS', 'nexus', 'nexus', false],
    ['THE LAST BASTION', 'core', 'core', false],
    ['CORE THRESHOLD', 'core', 'core', true],
  ];

  // ---- ultra-boss interludes (waves:0 → straight to a huge boss) ----
  const ULTRA = {
    a: ['THE RIFT WARLORD', 'rift', 'titan'],       // after Chapter I
    b: ['THE OVERMIND', 'abyss', 'overmind'],        // after Chapter II
    c: ['THE SINGULARITY', 'singular', 'singularity'],// after Chapter III (final)
  };

  function sector(defn, chapter) {
    const [name, palKey, boss, bgDebris] = defn;
    const p = PAL[palKey];
    return { name, chapter, waves: 4 + chapter, boss, bgDebris: !!bgDebris,
      star: p.star, bgTop: p.bgTop, bgBot: p.bgBot, neb: p.neb };
  }
  function ultraSector(defn, chapter) {
    const [name, palKey, boss] = defn;
    const p = PAL[palKey];
    return { name, chapter, ultra: true, waves: 0, boss, bgDebris: false,
      star: p.star, bgTop: p.bgTop, bgBot: p.bgBot, neb: p.neb };
  }

  // assemble: CH1 → ULTRA a → CH2 → ULTRA b → CH3 → ULTRA c
  const WORLDS = [];
  CH1.forEach((d, i) => WORLDS.push(Object.assign(sector(d, 1), { pool: POOL.c1[i] })));
  WORLDS.push(ultraSector(ULTRA.a, 1));
  CH2.forEach((d, i) => WORLDS.push(Object.assign(sector(d, 2), { pool: POOL.c2[i] })));
  WORLDS.push(ultraSector(ULTRA.b, 2));
  CH3.forEach((d, i) => WORLDS.push(Object.assign(sector(d, 3), { pool: POOL.c3[i] })));
  WORLDS.push(ultraSector(ULTRA.c, 3));

  // assign stable unique keys (used by save/i18n/map)
  WORLDS.forEach((w, i) => { w.key = w.ultra ? 'ultra' + w.chapter : 'sec' + (i + 1); w.index = i; });

  // Precompute soft nebula blobs + drifting debris per world (static decor).
  for (const w of WORLDS) {
    w._blobs = [];
    for (let i = 0; i < 3; i++) {
      w._blobs.push({
        x: Engine.rand(40, Engine.W - 40),
        y: Engine.rand(40, Engine.H - 120),
        r: Engine.rand(140, 260),
        color: w.neb[i % w.neb.length],
      });
    }
    if (w.bgDebris) {
      w._debris = Array.from({ length: 6 }, () => ({
        x: Engine.rand(0, Engine.W), y: Engine.rand(0, Engine.H),
        r: Engine.rand(9, 26), vx: Engine.rand(-14, 14), vy: Engine.rand(8, 26),
        spin: Engine.rand(-0.5, 0.5),
        verts: Array.from({ length: 8 }, () => 0.7 + Math.random() * 0.4),
      }));
    }
  }

  // Chapter metadata (for the star map + announcements).
  // Display names: i18n chapter.N (bible stage titles). Fallbacks here for non-i18n paths.
  const CHAPTERS = [
    { n: 1, name: 'OUTER RIM' },
    { n: 2, name: 'DEEP SPACE' },
    { n: 3, name: 'MACHINE NEXUS' },
    { n: 4, name: 'SOLAR FLARE' },
    { n: 5, name: 'APPROACH TO THE ABYSS' },
  ];

  return { WORLDS, CHAPTERS, PAL };
})();
