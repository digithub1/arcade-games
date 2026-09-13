/* ============================================================
 * daily.js — date-seeded challenge run. Everyone gets the same
 * seed + mutators on a given calendar day, so scores are comparable.
 * Persists today's best, attempt count, and a play streak.
 * ========================================================== */
const Daily = (() => {
  // Each mutator tweaks the run. Numeric fields multiply; the rest override.
  const MUTATORS = [
    { key: 'onslaught',  name: 'ONSLAUGHT',   desc: 'Enemy numbers swell.',        enemyDensity: 1.6 },
    { key: 'glass',      name: 'GLASS CANNON', desc: '+60% damage, 1 shield max.',  dmgMult: 1.6, maxShield: 1 },
    { key: 'bombardier', name: 'BOMBARDIER',  desc: 'Launch with 6 bombs.',         startBombs: 6 },
    { key: 'laserlord',  name: 'LASER LORD',  desc: 'Locked to piercing laser.',    forceWeapon: 'laser' },
    { key: 'swarm',      name: 'THE SWARM',   desc: 'Only fast, small foes.',       poolOverride: ['kamikaze', 'weaver', 'kamikaze'], bulletSpeed: 1.1 },
    { key: 'fortress',   name: 'FORTRESS',    desc: 'Tanky foes, double score.',    enemyHp: 1.5, scoreMult: 2 },
    { key: 'storm',      name: 'BULLET STORM', desc: 'Enemy fire flies faster.',    bulletSpeed: 1.4 },
    { key: 'scattergun', name: 'SCATTERGUN',  desc: 'Locked to spread, +2 bombs.',  forceWeapon: 'spread', startBombs: 4 },
  ];

  const pad = n => (n < 10 ? '0' + n : '' + n);

  function todayInfo() {
    const d = new Date();
    const dateStr = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
    const seed = d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
    return { dateStr, seed };
  }

  // Deterministically pick 2 distinct mutators from the day's seed.
  function pickMutators(seed) {
    const rng = Engine.makeRng(seed ^ 0x9e3779b9);
    const idx = [];
    while (idx.length < 2) {
      const i = Math.floor(rng() * MUTATORS.length);
      if (!idx.includes(i)) idx.push(i);
    }
    return idx.map(i => MUTATORS[i]);
  }

  // Fold mutators into one effective config (run mods + player overrides).
  function combine(muts) {
    const c = {
      enemyHp: 1, bulletSpeed: 1, enemyDensity: 1, scoreMult: 1, dmgMult: 1,
      poolOverride: null, maxShield: null, startBombs: null, forceWeapon: null,
    };
    for (const m of muts) {
      if (m.enemyHp) c.enemyHp *= m.enemyHp;
      if (m.bulletSpeed) c.bulletSpeed *= m.bulletSpeed;
      if (m.enemyDensity) c.enemyDensity *= m.enemyDensity;
      if (m.scoreMult) c.scoreMult *= m.scoreMult;
      if (m.dmgMult) c.dmgMult *= m.dmgMult;
      if (m.poolOverride) c.poolOverride = m.poolOverride;
      if (m.maxShield != null) c.maxShield = c.maxShield == null ? m.maxShield : Math.min(c.maxShield, m.maxShield);
      if (m.startBombs != null) c.startBombs = Math.max(c.startBombs || 0, m.startBombs);
      if (m.forceWeapon) c.forceWeapon = m.forceWeapon;
    }
    return c;
  }

  // Full description of today's challenge.
  function getToday() {
    const { dateStr, seed } = todayInfo();
    const mutators = pickMutators(seed);
    return { dateStr, seed, mutators, mods: combine(mutators) };
  }

  // Ensure profile.daily exists and is rolled over to today.
  function state() {
    const p = Profile.get();
    if (!p.daily) p.daily = { date: '', best: 0, attempts: 0, streak: 0, lastPlayed: '' };
    return p.daily;
  }

  function yesterdayStr() {
    const d = new Date(); d.setDate(d.getDate() - 1);
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  }

  // Record a finished daily run's score; updates best, attempts, streak.
  function record(score) {
    const { dateStr } = todayInfo();
    const s = state();
    if (s.date !== dateStr) { s.date = dateStr; s.best = 0; s.attempts = 0; }
    s.attempts++;
    if (score > s.best) s.best = score;
    if (s.lastPlayed !== dateStr) {
      s.streak = (s.lastPlayed === yesterdayStr()) ? (s.streak || 0) + 1 : 1;
      s.lastPlayed = dateStr;
    }
    Profile.save();
  }

  // Today's best (0 if not played yet today).
  function bestToday() {
    const { dateStr } = todayInfo();
    const s = state();
    return s.date === dateStr ? s.best : 0;
  }
  function attemptsToday() {
    const { dateStr } = todayInfo();
    const s = state();
    return s.date === dateStr ? s.attempts : 0;
  }

  return { MUTATORS, getToday, record, bestToday, attemptsToday, state };
})();
