/* ============================================================
 * meta.js — permanent upgrades + ships (roguelite meta layer).
 * Defines what credits buy and how a profile maps onto a run.
 * ========================================================== */
const Meta = (() => {

  // ---- permanent upgrades ----
  // cost(level) = round(base * growth^level). effect() describes the next level.
  const UPGRADES = [
    {
      key: 'hull', name: 'HULL PLATING', icon: Icons.svg('shield', 16),
      desc: 'Adds shield capacity.', max: 5, base: 120, growth: 1.7,
      effect: lv => Tf('up.hull.eff', lv),
    },
    {
      key: 'weapons', name: 'WEAPON CORE', icon: '⚡',
      desc: 'Boosts all weapon damage.', max: 6, base: 100, growth: 1.6,
      effect: lv => Tf('up.weapons.eff', lv * 10),
    },
    {
      key: 'ordnance', name: 'TARGETING', icon: '🎯',
      desc: 'Higher starting weapon level.', max: 3, base: 200, growth: 2.0,
      effect: lv => Tf('up.ordnance.eff', 1 + lv),
    },
    {
      key: 'munitions', name: 'MUNITIONS', icon: Icons.svg('bomb', 16),
      desc: 'More bombs at launch.', max: 3, base: 150, growth: 1.8,
      effect: lv => Tf('up.munitions.eff', lv),
    },
    {
      key: 'magnet', name: 'TRACTOR BEAM', icon: '🧲',
      desc: 'Wider pickup magnet.', max: 4, base: 90, growth: 1.6,
      effect: lv => Tf('up.magnet.eff', lv * 25),
    },
    {
      key: 'salvage', name: 'SALVAGE RIG', icon: '💰',
      desc: 'Earn more credits per run.', max: 5, base: 110, growth: 1.7,
      effect: lv => Tf('up.salvage.eff', lv * 15),
    },
    {
      key: 'firerate', name: 'OVERCLOCK', icon: '🔥',
      desc: 'Faster auto-fire.', max: 5, base: 140, growth: 1.7,
      effect: lv => Tf('up.firerate.eff', lv * 7),
    },
    {
      key: 'regen', name: 'NANOBOTS', icon: '🧬',
      desc: 'Slowly regenerate shield.', max: 4, base: 220, growth: 1.9,
      effect: lv => Tf('up.regen.eff', (12 - lv * 1.6).toFixed(1)),
    },
    {
      key: 'luck', name: 'FORTUNE', icon: '🍀',
      desc: 'More power-up drops.', max: 5, base: 130, growth: 1.7,
      effect: lv => Tf('up.luck.eff', lv * 10),
    },
    {
      key: 'revive', name: 'REVIVE CORE', icon: '💖',
      desc: 'Start each run with auto-revives.', max: 2, base: 400, growth: 2.4,
      effect: lv => Tf('up.revive.eff', lv),
    },
    // ---- ship-specific branches ----
    {
      key: 'pierce', name: 'PIERCER', icon: '🗡',
      desc: 'Shots pass through enemies.', max: 4, base: 180, growth: 1.9,
      effect: lv => Tf('up.pierce.eff', lv),
    },
    {
      key: 'crit', name: 'CRIT MATRIX', icon: '💥',
      desc: 'Chance for double damage.', max: 5, base: 200, growth: 1.9,
      effect: lv => Tf('up.crit.eff', lv * 10),
    },
    {
      key: 'guard', name: 'BULWARK', icon: '🪖',
      desc: 'Chance a hit costs no shield.', max: 5, base: 220, growth: 2.0,
      effect: lv => Tf('up.guard.eff', lv * 10),
    },
    {
      key: 'modules', name: 'MODULE BAY', icon: Icons.svg('module', 16),
      desc: 'Ship module hardpoints (1–3).', max: 3, base: 160, growth: 1.85,
      effect: lv => Tf('up.modules.eff', lv),
    },
  ];

  const upgradeByKey = Object.fromEntries(UPGRADES.map(u => [u.key, u]));

  // Economy tuning (#9): pricier base + steeper per-level growth so maxing is a
  // long-term goal, not a 15-minute sprint. Early levels stay affordable.
  const ECON_BASE = 1.4;    // base cost multiplier
  const ECON_STEEP = 1.12;  // extra growth applied per level
  const CREDIT_PRICE_MULT = 2.6; // hangar credit steps; raised so late credits keep meaning
  function costRaw(key, level) {
    const u = upgradeByKey[key];
    return Math.round(u.base * ECON_BASE * Math.pow(u.growth * ECON_STEEP, level));
  }
  /** Credit prices are rounded to 10 — CREDIT_PRICE_MULT is fractional now and
   *  an unrounded price shows up in the hangar as "436.8". */
  const creditPrice = raw => Math.round(raw * CREDIT_PRICE_MULT / 10) * 10;
  function cost(key, level) {
    return creditPrice(costRaw(key, level));
  }
  function isMax(key, level) { return level >= upgradeByKey[key].max; }

  // ---- ships / pilots ----
  // Each ship has its OWN upgrade tree (subset of the catalog + per-key max),
  // its own silhouette (shape) and colors, and a starting loadout (apply).
  const SHIPS = [
    {
      key: 'vanguard', name: 'VANGUARD', cost: 0, shape: 'arrow',
      blurb: 'Balanced all-rounder. Reliable cannon, solid shield.',
      hull: '#cfeaff', accent: '#4ad6ff',
      tree: { hull: 5, weapons: 5, munitions: 3, firerate: 5, regen: 4, luck: 4, magnet: 4, salvage: 4, revive: 2, modules: 3 },
      apply(p) { p.weapon = 'cannon'; },
    },
    {
      key: 'phantom', name: 'PHANTOM', cost: 11000, gemCost: 900, shape: 'dart',
      blurb: 'Glass cannon. Piercing LASER, sky-high damage, fragile.',
      hull: '#ffc6ef', accent: '#ff5bd0',
      tree: { weapons: 8, firerate: 6, pierce: 4, crit: 5, luck: 3, salvage: 4, revive: 1, modules: 2 },
      apply(p) { p.weapon = 'laser'; p.maxShield = Math.max(1, p.maxShield - 1); p.shield = p.maxShield; p.dmgMult *= 1.22; },
    },
    {
      key: 'goliath', name: 'GOLIATH', cost: 21000, gemCost: 1750, shape: 'wide',
      blurb: 'Heavy bruiser. Big shield, extra bomb, shrugs off hits.',
      hull: '#d8e0a8', accent: '#a8ff6e',
      // firerate capped below the strikers: a paid tank must not sit UNDER the free
      // starter on damage (it was 1.40 vs Vanguard's 2.31 with no OVERCLOCK branch).
      tree: { hull: 8, regen: 6, munitions: 4, guard: 5, weapons: 4, firerate: 4, magnet: 5, salvage: 4, revive: 2, modules: 4 },
      apply(p) { p.weapon = 'spread'; p.maxShield += 2; p.shield = p.maxShield; p.bombs += 1; },
    },
    {
      key: 'hornet', name: 'HORNET', cost: 18000, gemCost: 1500, shape: 'twin',
      blurb: 'Swarm skirmisher. Fast spread, magnet & luck specialist.',
      hull: '#ffe08a', accent: '#ffb01f',
      tree: { weapons: 6, firerate: 6, luck: 6, magnet: 6, crit: 4, hull: 3, munitions: 3, salvage: 6, modules: 3 },
      apply(p) { p.weapon = 'spread'; p.fireRateMult *= 0.88; p.magnetMult *= 1.35; },
    },
    {
      key: 'comet', name: 'COMET', cost: 30000, gemCost: 2500, shape: 'spike',
      blurb: 'Homing striker. Missiles, piercing and rapid fire — glassier hull, higher DPS.',
      hull: '#a8f0ff', accent: '#2ad0ff',
      tree: { hull: 4, weapons: 7, firerate: 6, pierce: 5, crit: 5, munitions: 2, magnet: 4, luck: 3, salvage: 4, revive: 1, modules: 2 },
      apply(p) { p.weapon = 'missile'; p.dmgMult *= 1.12; p.fireRateMult *= 0.92; },
    },
    {
      // STORY ship — not for sale. Assembled from 5 parts, one per campaign
      // chapter (found on far dead-end nodes). The strongest all-round hull.
      key: 'aegis', name: 'AEGIS', cost: null, story: true, shape: 'spike',
      blurb: 'Lost prototype rebuilt from 5 relics. Master of every system.',
      hull: '#fff0c0', accent: '#ffd63a',
      tree: { hull: 6, weapons: 7, firerate: 6, munitions: 3, magnet: 4, salvage: 5, regen: 5, luck: 4, pierce: 4, crit: 5, guard: 4, revive: 2, modules: 4 },
      apply(p) { p.weapon = 'pulse'; p.maxShield += 1; p.shield = p.maxShield; p.dmgMult *= 1.1; },
    },
  ];
  const STORY_SHIP = 'aegis', SHIP_PARTS = 5;

  const shipByKey = Object.fromEntries(SHIPS.map(s => [s.key, s]));
  const SHIP_DEFAULT_WEAPON = { vanguard: 'cannon', phantom: 'laser', goliath: 'spread', hornet: 'spread', comet: 'missile', aegis: 'pulse' };

  // ---- weapons: progressive unlock + Armory mastery (#4) ----
  // sector = campaign sectors that must be cleared to unlock; gem = early-unlock price.
  const WEAPON_ROSTER = [
    { key: 'cannon',  sector: 0, gem: 0 },
    { key: 'spread',  sector: 0, gem: 0 },
    { key: 'laser',   sector: 1, gem: 60 },
    { key: 'missile', sector: 2, gem: 100 },
    { key: 'railgun', sector: 4, gem: 200 },
    { key: 'pulse',   sector: 6, gem: 320 },
  ];
  const weaponByKey = Object.fromEntries(WEAPON_ROSTER.map(w => [w.key, w]));

  function weaponUnlocked(key, profile) {
    const w = weaponByKey[key]; if (!w) return false;
    if (w.sector === 0) return true;
    if (SHIP_DEFAULT_WEAPON[profile.ship] === key) return true;   // a ship's own weapon is always usable
    if (profile.weaponUnlocks && profile.weaponUnlocks[key]) return true;
    // gated on TOTAL campaign stages cleared (global, permanent) — so unfamiliar
    // weapons never drop before you've earned them, and unlocks survive a wipe.
    return (profile.stagesCleared || 0) >= w.sector;
  }
  function unlockedWeapons(profile) { return WEAPON_ROSTER.filter(w => weaponUnlocked(w.key, profile)).map(w => w.key); }
  function weaponUnlockedAtSector(n) { const w = WEAPON_ROSTER.find(w => w.sector === n); return w ? w.key : null; }

  // ---- PER-WEAPON upgrades (#4): every weapon trains independently ----
  //   aim  (Targeting) → the weapon STARTS a run at level 1+aim
  //   dmg  (Damage)    → +8% damage per level for that weapon's bullets
  //   rate (Rapid)     → −6% cooldown per level for that weapon
  const WEAPON_UPGRADES = {
    aim:  { key: 'aim',  name: 'TARGETING', icon: '🎯', max: 3, base: 130, growth: 2.0, per: 1,    unit: 'lvl' },
    dmg:  { key: 'dmg',  name: 'DAMAGE',    icon: '⚡', max: 5, base: 100, growth: 1.7, per: 8,    unit: '%'  },
    rate: { key: 'rate', name: 'RAPID',     icon: '🔥', max: 4, base: 120, growth: 1.7, per: 6,    unit: '%'  },
  };
  const WEAPON_UPG_ORDER = ['aim', 'dmg', 'rate'];

  // per-weapon levels: profile.weaponUpg[weaponKey] = { aim, dmg, rate }
  function weaponUpg(profile, key) {
    if (!profile.weaponUpg) profile.weaponUpg = {};
    if (!profile.weaponUpg[key]) {
      // one-time migration: old flat weaponMastery → the new Damage track
      const oldM = (profile.weaponMastery && profile.weaponMastery[key]) || 0;
      profile.weaponUpg[key] = { aim: 0, dmg: oldM, rate: 0 };
    }
    return profile.weaponUpg[key];
  }
  function weaponUpgLv(profile, key, stat) { return weaponUpg(profile, key)[stat] || 0; }
  function weaponUpgCostRaw(stat, level) {
    const d = WEAPON_UPGRADES[stat];
    return Math.round(d.base * ECON_BASE * Math.pow(d.growth * ECON_STEEP, level));
  }
  function weaponUpgCost(stat, level) {
    return creditPrice(weaponUpgCostRaw(stat, level));
  }
  function weaponAim(profile, key) { return weaponUpgLv(profile, key, 'aim'); }
  function weaponDmgMult(profile, key) { return 1 + weaponUpgLv(profile, key, 'dmg') * 0.08; }
  function weaponRateMult(profile, key) { return 1 - weaponUpgLv(profile, key, 'rate') * 0.06; }

  // ---- top-level = PREMIUM (#4): the FINAL level of any upgrade costs gems ----
  // Final tier of any track is the premium step. The old curve clamped almost
  // everything to the 8-10 gem floor, so 'premium' cost nothing.
  const topGems = credits => Math.round(Math.min(160, Math.max(18, credits / 110)));
  function shipBuyInfo(key, level) {
    const raw = costRaw(key, level), max = upgradeByKey[key].max;
    return level >= max - 1
      ? { currency: 'gems', amount: topGems(raw) }
      : { currency: 'credits', amount: creditPrice(raw) };
  }
  function weaponBuyInfo(stat, level) {
    const raw = weaponUpgCostRaw(stat, level), max = WEAPON_UPGRADES[stat].max;
    return level >= max - 1
      ? { currency: 'gems', amount: topGems(raw) }
      : { currency: 'credits', amount: creditPrice(raw) };
  }
  // Spend the right currency; returns true on success.
  function spendFor(info) {
    const p = Profile.get();
    if (info.currency === 'gems') { if ((p.gems || 0) < info.amount) return false; p.gems -= info.amount; Profile.save(); return true; }
    return Profile.spend(info.amount);
  }

  // The weapon a run STARTS with (player's pick, else the ship default).
  function startWeapon(profile) {
    const sw = profile.startWeapon;
    return (sw && weaponUnlocked(sw, profile)) ? sw : SHIP_DEFAULT_WEAPON[profile.ship] || 'cannon';
  }

  // ---- Battle loadout (max slots shown in HUD) ----
  const LOADOUT_MAX = 4;
  function normalizeLoadout(profile) {
    const unlocked = unlockedWeapons(profile);
    let list = Array.isArray(profile.battleLoadout) ? profile.battleLoadout.slice() : [];
    list = list.filter(k => unlocked.includes(k));
    // Seed empty loadout with start weapon + earliest unlocks
    if (!list.length) {
      const sw = startWeapon(profile);
      list = [sw];
      unlocked.forEach(k => { if (!list.includes(k) && list.length < LOADOUT_MAX) list.push(k); });
    }
    // Ensure start weapon is always in the loadout if unlocked
    const sw = startWeapon(profile);
    if (unlocked.includes(sw) && !list.includes(sw)) {
      if (list.length < LOADOUT_MAX) list.unshift(sw);
      else list[0] = sw;
    }
    // Cap
    if (list.length > LOADOUT_MAX) list = list.slice(0, LOADOUT_MAX);
    profile.battleLoadout = list;
    return list;
  }
  function battleLoadout(profile) { return normalizeLoadout(profile); }
  function isInLoadout(profile, key) { return battleLoadout(profile).includes(key); }
  /**
   * Toggle weapon in battle loadout.
   * Returns: true | false | 'full' (already at LOADOUT_MAX) | 'last' (can't remove last)
   */
  function toggleLoadout(profile, key) {
    if (!weaponUnlocked(key, profile)) return false;
    const list = normalizeLoadout(profile);
    const i = list.indexOf(key);
    if (i >= 0) {
      if (list.length <= 1) return 'last';
      list.splice(i, 1);
      if (profile.startWeapon === key) profile.startWeapon = list[0];
    } else {
      if (list.length >= LOADOUT_MAX) return 'full';
      list.push(key);
    }
    profile.battleLoadout = list;
    Profile.save();
    return true;
  }

  // ---- Weapon mastery XP gates hangar training tiers ----
  // Cumulative XP required to unlock the N-th total training purchase (sum of aim+dmg+rate).
  // XP needed to unlock the N-th training purchase (sum of aim+dmg+rate).
  // Index 0–1 free so new pilots can always buy the first level.
  const WEAPON_XP_TIERS = [0, 0, 160, 400, 760, 1200, 1800, 2600, 3600, 4800, 6200, 8000];
  function weaponXp(profile, key) {
    if (!profile.weaponXp) profile.weaponXp = {};
    return profile.weaponXp[key] || 0;
  }
  function addWeaponXp(profile, key, amount) {
    if (!key || !amount) return 0;
    if (!profile.weaponXp) profile.weaponXp = {};
    profile.weaponXp[key] = (profile.weaponXp[key] || 0) + Math.max(0, Math.round(amount));
    return profile.weaponXp[key];
  }
  function maxWeaponTrainLevels(profile, key) {
    const xp = weaponXp(profile, key);
    let n = 1; // always at least one training purchase available
    for (let i = 0; i < WEAPON_XP_TIERS.length; i++) {
      if (xp >= WEAPON_XP_TIERS[i]) n = Math.max(n, i + 1);
      else break;
    }
    return Math.min(n, WEAPON_XP_TIERS.length);
  }
  function weaponTrainUsed(profile, key) {
    const u = weaponUpg(profile, key);
    return (u.aim || 0) + (u.dmg || 0) + (u.rate || 0);
  }
  function canTrainWeaponStat(profile, key, stat) {
    if (!weaponUnlocked(key, profile)) return false;
    const d = WEAPON_UPGRADES[stat];
    if (!d) return false;
    const lv = weaponUpgLv(profile, key, stat);
    if (lv >= d.max) return false;
    return weaponTrainUsed(profile, key) < maxWeaponTrainLevels(profile, key);
  }
  /**
   * Rich XP track for hangar UI.
   *   used      — purchases already spent
   *   unlocked  — purchases XP currently allows (cap)
   *   available — unlocked − used (ready to buy, highlight)
   *   max       — hard max train slots
   *   tiers     — XP thresholds per unlock index
   *   markers   — { xp, pct } for each threshold on the full bar
   *   overallPct — fill of full mastery bar (0–100)
   *   nextNeed / pct — progress toward next unlock beyond `unlocked`
   */
  function buildXpTrack(xp, used, tiers, maxBuys) {
    const max = Math.max(1, maxBuys | 0);
    const t = tiers || [0];
    let unlocked = 0;
    for (let i = 0; i < max; i++) {
      const need = t[Math.min(i, t.length - 1)] || 0;
      if (xp >= need) unlocked = i + 1;
      else break;
    }
    unlocked = Math.min(max, Math.max(unlocked, 0));
    used = Math.min(max, Math.max(0, used | 0));
    const available = Math.max(0, unlocked - used);
    const maxXp = t[Math.min(max, t.length) - 1] || t[t.length - 1] || 1;
    const overallPct = Math.max(0, Math.min(100, (xp / Math.max(1, maxXp)) * 100));
    const markers = [];
    for (let i = 0; i < max; i++) {
      const tx = t[Math.min(i, t.length - 1)] || 0;
      markers.push({
        i,
        xp: tx,
        pct: Math.max(0, Math.min(100, (tx / Math.max(1, maxXp)) * 100)),
        unlocked: i < unlocked,
        spent: i < used,
        open: i >= used && i < unlocked,
      });
    }
    // Segment toward next unlock past current unlocked count
    let nextNeed = maxXp;
    let prevNeed = 0;
    let pct = 100;
    if (unlocked < max) {
      nextNeed = t[Math.min(unlocked, t.length - 1)] || maxXp;
      prevNeed = unlocked > 0 ? (t[Math.min(unlocked - 1, t.length - 1)] || 0) : 0;
      const span = Math.max(1, nextNeed - prevNeed);
      pct = Math.max(0, Math.min(100, ((xp - prevNeed) / span) * 100));
    } else if (used < max) {
      // All unlocks earned but not all spent — bar full toward next (none)
      nextNeed = xp;
      pct = 100;
    }
    return {
      xp, used, unlocked, available, max, cap: unlocked,
      nextNeed, prevNeed, pct, overallPct, markers, tiers: t.slice(),
      maxXp,
    };
  }

  function weaponXpProgress(profile, key) {
    const xp = weaponXp(profile, key);
    const used = weaponTrainUsed(profile, key);
    // Hard max = sum of per-stat caps (aim+dmg+rate) and XP tier table length
    const statMax = WEAPON_UPG_ORDER.reduce((a, s) => a + (WEAPON_UPGRADES[s].max || 0), 0);
    const max = Math.min(statMax, WEAPON_XP_TIERS.length);
    return buildXpTrack(xp, used, WEAPON_XP_TIERS, max);
  }

  // ---- difficulty presets ----
  // enemyHp/bulletSpeed scale the challenge; startShield + autoBomb are the
  // "always give a path to safety" levers from the GDD; credits is the payout mult.
  const DIFFICULTIES = {
    // bossHp is independent of enemyHp so a 2× mob buff does not also 2× bosses.
    // Easy (casual) mobs stay at launch values; first warlord exception is in spawnBoss.
    casual: { key: 'casual', label: 'CASUAL', enemyHp: 0.8,  bossHp: 0.8,   bulletSpeed: 0.8, startShield: 2, autoBomb: true,  credits: 0.8,  density: 1 },
    normal: { key: 'normal', label: 'NORMAL', enemyHp: 2.0,  bossHp: 3.5,   bulletSpeed: 1.0, startShield: 0, autoBomb: false, credits: 1.0,  density: 1 },
    hard:   { key: 'hard',   label: 'HARD',   enemyHp: 2.90, bossHp: 5.075, bulletSpeed: 1.2, startShield: 0, autoBomb: false, credits: 1.45, density: 1.1 },
    // ULTRA — densest waves, no safety net. Mob HP was 19.35 (a straight ×3 over
    // the old value); playtest said that overshot, so it is cut by 1.5 to 12.9.
    // Everything else stands: bossHp is separate so this does not touch bosses,
    // and bullet speed is deliberately NOT raised — at 1.5 it is already at the
    // edge of readable, and faster bullets punish reaction time, not planning.
    brutal: { key: 'brutal', label: 'ULTRA',  enemyHp: 12.9, bossHp: 7.525, bulletSpeed: 1.5, startShield: -1, autoBomb: false, credits: 3.2, density: 1.6 },
  };
  const DIFF_ORDER = ['casual', 'normal', 'hard', 'brutal'];

  // ---- run modes ----
  const MODES = {
    campaign: { key: 'campaign', label: 'CAMPAIGN', desc: 'Themed sectors, each ending in a boss.' },
    endless:  { key: 'endless',  label: 'ENDLESS',  desc: 'Survive escalating procedural waves.' },
  };

  // ---- per-ship upgrade levels ----
  // Each ship keeps its own levels under profile.shipUpgrades[shipKey].
  function shipUpgrades(profile, shipKey) {
    shipKey = shipKey || profile.ship;
    if (!profile.shipUpgrades) profile.shipUpgrades = {};
    if (!profile.shipUpgrades[shipKey]) {
      // one-time migration: seed the vanguard from the old global upgrades
      profile.shipUpgrades[shipKey] = (shipKey === 'vanguard' && profile.upgrades)
        ? Object.assign({}, profile.upgrades) : {};
    }
    return profile.shipUpgrades[shipKey];
  }
  // The upgrade catalog rows available to a ship, with its per-key max.
  function shipTree(shipKey) {
    const ship = shipByKey[shipKey] || SHIPS[0];
    return UPGRADES.filter(u => ship.tree[u.key] != null).map(u => ({ def: u, max: ship.tree[u.key] }));
  }
  function upgMax(shipKey, key) {
    const ship = shipByKey[shipKey] || SHIPS[0];
    return ship.tree[key] != null ? ship.tree[key] : 0;
  }

  // Apply the profile (current ship's upgrades + ship loadout) onto a reset player.
  function applyToPlayer(p, profile) {
    const u = shipUpgrades(profile);
    p.dmgMult = 1 + (u.weapons || 0) * 0.10;
    p.magnetMult = 1 + (u.magnet || 0) * 0.25;
    p.maxShield = 3 + (u.hull || 0);
    p.shield = p.maxShield;
    p.bombs = 2 + (u.munitions || 0);       // temp — reassigned to equipped super below
    p.fireRateMult = 1 - (u.firerate || 0) * 0.07;
    p.regenInterval = (u.regen || 0) > 0 ? 12 - (u.regen) * 1.6 : 0;
    p.regenT = p.regenInterval;
    p.luckMult = 1 + (u.luck || 0) * 0.10;
    p.revives = (u.revive || 0);
    // ship-specific branches
    p.pierceBonus = (u.pierce || 0);
    p.critChance = (u.crit || 0) * 0.10;
    p.guardChance = (u.guard || 0) * 0.10;
    // ship loadout + look
    const ship = shipByKey[profile.ship] || SHIPS[0];
    ship.apply(p);                                  // sets the ship's default weapon (+ goliath bomb bonus)
    // Battle loadout: only selected weapons start available (HUD cap 5).
    // Start weapon is guaranteed; others from loadout begin at 1 + aim.
    p.weapon = startWeapon(profile);
    const loadout = battleLoadout(profile);
    p.weaponLevels = { cannon: 0, spread: 0, laser: 0, missile: 0, railgun: 0, pulse: 0 };
    const amp = hasModuleEquipped(profile, 'gunAmp') ? moduleCombatStats(profile, 'gunAmp') : null;
    const startBonus = amp ? (amp.bonusLv || 0) : 0;
    const startLv = k => Math.min(8, 1 + weaponAim(profile, k) + startBonus);  // 8 = combat cap
    loadout.forEach(k => { p.weaponLevels[k] = startLv(k); });
    if (!p.weaponLevels[p.weapon]) p.weaponLevels[p.weapon] = startLv(p.weapon);
    p.level = p.weaponLevels[p.weapon];
    if (amp && amp.dmgMul > 1) p.dmgMult *= amp.dmgMul;
    // Global hangar preference: begin the stage already weapon-locked.
    if (profile.startWeaponLocked) p.weaponLocked = true;
    // Cosmetics are visual only — they ride on the colour fields, never on stats.
    p.shipColors = { hull: ship.hull, accent: trailHex(profile) || ship.accent };
    p.hullPaint = paintHex(profile);
    p.hullGlow = glowHex(profile);
    p.hullFx = fxEquipped(profile);
    p.shipShape = ship.shape || 'arrow';
    p.sprite = 'ship_' + ship.key;

    // One equipped super weapon carries all munitions / ship bomb bonuses.
    // Unequipped hangar slot → combat default bomb (player still has a super).
    const sk = startSuper(profile) || 'bomb';
    p.superWeapon = sk;
    const mun = u.munitions || 0;
    const goliath = ship.key === 'goliath' ? 1 : 0;
    const bombBase = 2 + mun + goliath;
    const otherBase = 1 + mun + goliath;
    p.bombs = 0; p.nukes = 0; p.barriers = 0; p.barrierT = 0;
    p.spheres = 0; p.sphereT = 0; p.sphereR = 0;
    if (sk === 'bomb') p.bombs = bombBase;
    else if (sk === 'nuke') p.nukes = otherBase;
    else if (sk === 'sphere') p.spheres = otherBase;
    else p.barriers = otherBase;
    // Equipped modules — used for ship silhouette décor in combat
    p.moduleKeys = equippedModuleKeys(profile);
  }

  // ---- Super weapons (bomb / nuke / active barrier) ----
  // One equipped at a time (hangar). Levels 1–4: purchase tiers 0–3 (last = gems).
  const SUPER_ROSTER = [
    { key: 'bomb',    icon: Icons.svg('bomb', 16), color: '#ff4adf' },
    { key: 'nuke',    icon: '☢',  color: '#ffe24a' },
    { key: 'barrier', icon: '⬡',  color: '#6effc0' },
    { key: 'sphere',  icon: '◉',  color: '#c86cff' },
  ];
  const superByKey = Object.fromEntries(SUPER_ROSTER.map(s => [s.key, s]));
  const SUPER_MAX_BUY = 3; // purchases → display level 1..4
  // XP gates (index = current purchase count). Several× steeper than launch curve
  // so supers stay rare upgrades, not free after a few uses.
  // Was [0, 40, 120, 280] — players hit max in ~1–2 sessions.
  const SUPER_XP_TIERS = [0, 220, 700, 1800];
  // Expensive: early credits, final gems (also raised)
  function superBuyInfo(level, key) {
    // level = current purchases (0..2). Sphere is 3× the top super price.
    const gemAmt = 70 + level * 26;
    const credits = creditPrice(Math.round(620 * Math.pow(2.25, level)));
    const premium = key === 'sphere' ? 3 : 1;
    if (level >= SUPER_MAX_BUY - 1) return { currency: 'gems', amount: gemAmt * premium };
    return { currency: 'credits', amount: credits * premium };
  }
  function superUpgMap(profile) {
    if (!profile.superUpg || typeof profile.superUpg !== 'object') profile.superUpg = {};
    return profile.superUpg;
  }
  function superBuyLv(profile, key) { return Math.min(SUPER_MAX_BUY, superUpgMap(profile)[key] || 0); }
  /** Effective combat level 1..4 */
  function superLevel(profile, key) { return 1 + superBuyLv(profile, key); }
  function startSuper(profile) {
    const k = profile.startSuper;
    // null / '' = unequipped (combat falls back to bomb only if nothing set)
    if (k === null || k === '') return null;
    return (k && superByKey[k]) ? k : 'bomb';
  }
  /**
   * Equip ship super, or unequip when key is null / already equipped (toggle).
   * Combat: Game uses startSuper || 'bomb' so empty loadout still has a default.
   */
  function setStartSuper(profile, key) {
    if (key == null || key === '') {
      profile.startSuper = null;
      Profile.save();
      return true;
    }
    if (!superByKey[key]) return false;
    // Click equipped → unequip so another can be set cleanly
    if (profile.startSuper === key) {
      profile.startSuper = null;
      Profile.save();
      return 'off';
    }
    profile.startSuper = key;
    Profile.save();
    return true;
  }
  function superXp(profile, key) {
    if (!profile.superXp) profile.superXp = {};
    return profile.superXp[key] || 0;
  }
  function addSuperXp(profile, key, amount) {
    if (!key || !amount) return 0;
    if (!profile.superXp) profile.superXp = {};
    profile.superXp[key] = (profile.superXp[key] || 0) + Math.max(0, Math.round(amount));
    return profile.superXp[key];
  }
  function canBuySuper(profile, key) {
    const lv = superBuyLv(profile, key);
    if (lv >= SUPER_MAX_BUY) return false;
    const need = SUPER_XP_TIERS[lv] || 0;
    return superXp(profile, key) >= need;
  }
  function superXpProgress(profile, key) {
    const xp = superXp(profile, key);
    const used = superBuyLv(profile, key);
    return buildXpTrack(xp, used, SUPER_XP_TIERS, SUPER_MAX_BUY);
  }
  /** Combat stats for a super at the player's trained level. */
  function superStats(profile, key) {
    const lv = superLevel(profile, key);
    if (key === 'bomb') {
      // L1 bullets only; L2+ enemy kill radius grows
      const enemyR = lv <= 1 ? 0 : 70 + (lv - 2) * 42; // L2=70, L3=112, L4=154
      return { level: lv, enemyR, bulletClear: true, dmg: 140 + lv * 30 };
    }
    if (key === 'nuke') {
      // A nuke is a scarce consumable, so it is allowed to hit hard. The flat
      // number alone stopped meaning anything once late-game hulls ran to tens
      // of thousands of HP (1560 into a 27k mob), so it also takes a share of
      // the target's max health — see detonateNuke for how the two combine.
      return {
        level: lv,
        r: 118 + lv * 16,
        dmg: (340 + lv * 110) * 3.2,
        hpShare: 0.16 + lv * 0.045,      // L1 20% … L4 34% of a mob's max HP
        bossShare: 0.012 + lv * 0.004,   // L1 1.6% … L4 2.8% of a boss's max HP
        pierceArmor: true,
      };
    }
    if (key === 'sphere') {
      // Duration 2.6→5.75s: the shell is a damage field you position, not a long
      // invulnerability window. Radius ~2 hulls at live ship scale.
      // Levelling now also scales the BURN — it only grew in size and seconds
      // before, so an upgraded sphere killed no faster than a fresh one and the
      // upgrade felt like nothing. Rates are shares of the target's max HP.
      const duration = 2.6 + (lv - 1) * 1.05;
      const r = 56 + (lv - 1) * 14;
      return {
        level: lv, duration, r,
        burn0: 0.30 + (lv - 1) * 0.13,   // L1 30%/s … L4 69%/s at contact
        burnRamp: 0.26 + (lv - 1) * 0.11, // and it ramps harder the longer you hold
        flat: 22 + (lv - 1) * 16,
      };
    }
    // barrier: invuln seconds
    return { level: lv, duration: 2.2 + (lv - 1) * 1.15 }; // 2.2 / 3.35 / 4.5 / 5.65
  }

  // Credits awarded for a run, including the current ship's salvage bonus.
  function creditsForRun(score, profile) {
    const base = Math.floor(score / 45);       // slightly richer combat pay (was /60)
    const bonus = 1 + (shipUpgrades(profile).salvage || 0) * 0.15;
    return Math.round(base * bonus);
  }

  // ---- Base-defense turrets (orbit defense only; hangar "Defense" bay) ----
  // Separate from ship armory weapons. Buy / equip one; per-gun upgrade tree.
  const GUN_UPGRADES = {
    power:  { key: 'power',  name: 'POWER',  max: 5, base: 110, growth: 1.65, per: 12, unit: '%' },
    cycle:  { key: 'cycle',  name: 'CYCLE',  max: 4, base: 130, growth: 1.7,  per: 7,  unit: '%' },
    optics: { key: 'optics', name: 'OPTICS', max: 3, base: 150, growth: 1.85, per: 1,  unit: '' },
    // Defense super hardpoints: Lv0 → 1 slot, Lv1 → 2 slots (max)
    bays:   { key: 'bays',   name: 'DUAL BAY', max: 1, base: 520, growth: 1, per: 1, unit: '' },
  };
  const GUN_UPG_ORDER = ['power', 'cycle', 'optics', 'bays'];

  const BASE_GUNS = [
    {
      key: 'sentinel', name: 'SENTINEL', cost: 0, model: 'turret',
      blurb: 'Balanced rail. Default base defense.',
      // combat base (orbit defense fire pattern)
      fireRate: 0.09, dmgMain: 12, dmgSide: 7, bulletSpd: 580,
      pattern: 'triple', // center + ±side
      tree: { power: 5, cycle: 4, optics: 3, bays: 1 },
    },
    {
      key: 'flak', name: 'FLAK', cost: 900, model: 'turretFlak',
      blurb: 'Wide scatter. Clears swarms, lower per-hit.',
      fireRate: 0.105, dmgMain: 7, dmgSide: 5, bulletSpd: 520,
      pattern: 'spread', // 5 pellets
      tree: { power: 5, cycle: 5, optics: 3, bays: 1 },
    },
    {
      key: 'lance', name: 'LANCE', cost: 2400, model: 'turretLance',
      blurb: 'Heavy single beam. Slow, high punch.',
      fireRate: 0.175, dmgMain: 30, dmgSide: 0, bulletSpd: 720,
      pattern: 'single',
      tree: { power: 6, cycle: 3, optics: 3, bays: 1 },
    },
    {
      key: 'pulse', name: 'PULSE', cost: 5200, model: 'turretPulse',
      blurb: 'Twin energy bolts. Mid rate, solid damage.',
      fireRate: 0.12, dmgMain: 15, dmgSide: 13, bulletSpd: 600,
      pattern: 'dual',
      tree: { power: 5, cycle: 4, optics: 3, bays: 1 },
    },
  ];
  const gunByKey = Object.fromEntries(BASE_GUNS.map(g => [g.key, g]));

  function ownedGuns(profile) {
    if (!Array.isArray(profile.ownedGuns) || !profile.ownedGuns.length) {
      profile.ownedGuns = ['sentinel'];
    }
    return profile.ownedGuns;
  }
  function equipGun(profile, key) {
    if (!gunByKey[key]) return false;
    if (!ownedGuns(profile).includes(key)) return false;
    profile.baseGun = key;
    Profile.save();
    return true;
  }
  function equippedGun(profile) {
    const k = profile.baseGun;
    if (k && gunByKey[k] && ownedGuns(profile).includes(k)) return k;
    return 'sentinel';
  }
  function gunUpgrades(profile, gunKey) {
    gunKey = gunKey || equippedGun(profile);
    if (!profile.gunUpgrades) profile.gunUpgrades = {};
    if (!profile.gunUpgrades[gunKey]) profile.gunUpgrades[gunKey] = {};
    return profile.gunUpgrades[gunKey];
  }
  function gunTree(gunKey) {
    const g = gunByKey[gunKey] || BASE_GUNS[0];
    return GUN_UPG_ORDER
      .filter(k => g.tree[k] != null)
      .map(k => ({ def: GUN_UPGRADES[k], max: g.tree[k] }));
  }
  function gunUpgMax(gunKey, stat) {
    const g = gunByKey[gunKey] || BASE_GUNS[0];
    return g.tree[stat] != null ? g.tree[stat] : 0;
  }
  function gunUpgLv(profile, gunKey, stat) {
    return gunUpgrades(profile, gunKey)[stat] || 0;
  }
  function gunUpgCostRaw(stat, level) {
    const d = GUN_UPGRADES[stat];
    return Math.round(d.base * ECON_BASE * Math.pow(d.growth * ECON_STEEP, level));
  }
  function gunUpgCost(stat, level) {
    return creditPrice(gunUpgCostRaw(stat, level));
  }
  function gunBuyInfo(stat, level) {
    const raw = gunUpgCostRaw(stat, level);
    const max = GUN_UPGRADES[stat].max;
    // Single-tier stats (bays): always credits — only purchase is also the "last" tier
    if (max <= 1) return { currency: 'credits', amount: creditPrice(Math.max(raw, 1100)) };
    return level >= max - 1
      ? { currency: 'gems', amount: topGems(raw) }
      : { currency: 'credits', amount: creditPrice(raw) };
  }
  function gunEffectText(stat, lv) {
    const d = GUN_UPGRADES[stat];
    if (!d || lv <= 0) return '';
    if (stat === 'power') return Tf('gun.up.power.eff', lv * d.per);
    if (stat === 'cycle') return Tf('gun.up.cycle.eff', lv * d.per);
    if (stat === 'optics') return Tf('gun.up.optics.eff', lv);
    if (stat === 'bays') return T('gun.up.bays.eff');
    return '';
  }
  /**
   * Runtime combat stats for the equipped base gun (orbit defense).
   * Safe defaults if Meta is mid-load / missing profile fields.
   */
  function baseGunStats(profile) {
    profile = profile || (typeof Profile !== 'undefined' ? Profile.get() : null) || {};
    const key = equippedGun(profile);
    const g = gunByKey[key] || BASE_GUNS[0];
    const u = gunUpgrades(profile, key);
    const power = u.power || 0;
    const cycle = u.cycle || 0;
    const optics = u.optics || 0;
    const dmgMul = 1 + power * 0.12;
    const rateMul = 1 - cycle * 0.07;
    const spdMul = 1 + optics * 0.05;
    // optics also tightens / widens side offsets slightly via spreadScale
    return {
      key: g.key,
      model: g.model || 'turret',
      pattern: g.pattern || 'triple',
      fireRate: Math.max(0.05, g.fireRate * rateMul),
      dmgMain: Math.round(g.dmgMain * dmgMul),
      dmgSide: Math.round((g.dmgSide || 0) * dmgMul),
      bulletSpd: Math.round(g.bulletSpd * spdMul),
      optics,
      power,
      cycle,
    };
  }

  // ---- Base-defense supers (orbit defense ONLY; hangar Defense bay) ----
  // Infinite uses with cooldown. Loadout slots: 1 base, 2 after gun upgrade "bays".
  const DEF_SUPER_ROSTER = [
    { key: 'emp',      icon: '⚡', color: '#4ad6ff' },
    { key: 'salvo',    icon: '✴', color: '#ffb01f' },
    { key: 'fortress', icon: '🛡', color: '#7dffa0' },
    { key: 'turret',   icon: Icons.svg('target', 16), color: '#c8e8ff' },
    { key: 'repair',   icon: '✚', color: '#9dffb0' },
    { key: 'overdrive',icon: '🔥', color: '#ff9060' },
  ];
  const defSuperByKey = Object.fromEntries(DEF_SUPER_ROSTER.map(s => [s.key, s]));
  // Reuse ship super economy: 3 purchases → display Lv 1–4, last = gems, XP gates.
  const DEF_SUPER_MAX_BUY = SUPER_MAX_BUY;
  const DEF_SUPER_XP_TIERS = SUPER_XP_TIERS;
  const DEF_SUPER_LOADOUT_MAX = 2; // absolute hard cap (requires turret bays upg)
  function defSuperBuyInfo(level) { return superBuyInfo(level); }
  function defSuperUpgMap(profile) {
    if (!profile.defSuperUpg || typeof profile.defSuperUpg !== 'object') profile.defSuperUpg = {};
    return profile.defSuperUpg;
  }
  function defSuperBuyLv(profile, key) {
    return Math.min(DEF_SUPER_MAX_BUY, defSuperUpgMap(profile)[key] || 0);
  }
  function defSuperLevel(profile, key) { return 1 + defSuperBuyLv(profile, key); }
  /**
   * How many defense supers can be equipped.
   * Driven by equipped turret upgrade `bays` (0 → 1 slot, 1 → 2 slots).
   */
  function defSuperCapacity(profile) {
    profile = profile || {};
    const gun = equippedGun(profile);
    const bayLv = gunUpgLv(profile, gun, 'bays');
    return bayLv >= 1 ? DEF_SUPER_LOADOUT_MAX : 1;
  }
  /** Normalize loadout to capacity (1 or 2). Empty allowed (unequip all). */
  function defSuperLoadout(profile) {
    const cap = defSuperCapacity(profile);
    let arr = Array.isArray(profile.defSuperLoadout)
      ? profile.defSuperLoadout.filter(k => defSuperByKey[k])
      : [];
    // Legacy single field only if loadout never written
    if (!arr.length && profile.startDefSuper && profile.defSuperLoadout == null) {
      const legacy = profile.startDefSuper;
      if (legacy && defSuperByKey[legacy]) arr = [legacy];
    }
    // Dedupe preserve order
    const seen = new Set();
    arr = arr.filter(k => { if (seen.has(k)) return false; seen.add(k); return true; });
    arr = arr.slice(0, cap);
    profile.defSuperLoadout = arr;
    profile.startDefSuper = arr[0] || null;
    return arr;
  }
  function startDefSuper(profile) {
    // Combat fallback emp if nothing equipped
    return defSuperLoadout(profile)[0] || 'emp';
  }
  /**
   * Equip/unequip defense supers.
   * - Click equipped → remove (even last slot — empty loadout OK).
   * - Click new when full → replace oldest slot (swap), never soft-lock.
   * @returns true | false | 'off' (unequipped)
   */
  function toggleDefSuperLoadout(profile, key) {
    if (!defSuperByKey[key]) return false;
    const cap = defSuperCapacity(profile);
    let arr = defSuperLoadout(profile).slice();
    const i = arr.indexOf(key);
    if (i >= 0) {
      arr.splice(i, 1);
      profile.defSuperLoadout = arr;
      profile.startDefSuper = arr[0] || null;
      Profile.save();
      return 'off';
    }
    if (arr.length >= cap) {
      // Swap: drop oldest, equip new (lets you change special with 1 slot)
      arr.shift();
      arr.push(key);
    } else {
      arr.push(key);
    }
    profile.defSuperLoadout = arr.slice(0, cap);
    profile.startDefSuper = profile.defSuperLoadout[0] || null;
    Profile.save();
    return true;
  }
  /** @deprecated prefer toggleDefSuperLoadout — kept for old call sites */
  function setStartDefSuper(profile, key) {
    if (!defSuperByKey[key]) return false;
    const res = toggleDefSuperLoadout(profile, key);
    if (res === true) return true;
    // If already equipped, leave as-is (true for legacy callers)
    if (defSuperLoadout(profile).includes(key)) return true;
    return false;
  }
  function defSuperXp(profile, key) {
    if (!profile.defSuperXp) profile.defSuperXp = {};
    return profile.defSuperXp[key] || 0;
  }
  function addDefSuperXp(profile, key, amount) {
    if (!key || !amount) return 0;
    if (!profile.defSuperXp) profile.defSuperXp = {};
    profile.defSuperXp[key] = (profile.defSuperXp[key] || 0) + Math.max(0, Math.round(amount));
    return profile.defSuperXp[key];
  }
  function canBuyDefSuper(profile, key) {
    const lv = defSuperBuyLv(profile, key);
    if (lv >= DEF_SUPER_MAX_BUY) return false;
    const need = DEF_SUPER_XP_TIERS[lv] || 0;
    return defSuperXp(profile, key) >= need;
  }
  function defSuperXpProgress(profile, key) {
    const xp = defSuperXp(profile, key);
    const used = defSuperBuyLv(profile, key);
    return buildXpTrack(xp, used, DEF_SUPER_XP_TIERS, DEF_SUPER_MAX_BUY);
  }
  /** @deprecated charges → cooldown system; kept for HUD migration fallbacks. */
  function defSuperCharges(profile, key) {
    return 1; // always "ready" count for old UI paths
  }
  /** Cooldown seconds between uses (infinite ammo). Lower at higher train level. */
  function defSuperCooldown(profile, key) {
    const lv = defSuperLevel(profile, key);
    // Slightly snappier base CDs so supers feel usable mid-hold
    const base = {
      emp: 9, salvo: 7.5, fortress: 12, turret: 9, repair: 13, overdrive: 15,
    }[key] || 10;
    return Math.max(5, base - (lv - 1) * 1.15);
  }
  /** Combat stats for defense supers at the player's trained level. */
  function defSuperStats(profile, key) {
    const lv = defSuperLevel(profile, key);
    if (key === 'emp') {
      // L1 still clears bullets + small blast; higher = wider kill zone
      const enemyR = 70 + (lv - 1) * 38;
      return { level: lv, enemyR, bulletClear: true, dmg: 110 + lv * 42 };
    }
    if (key === 'salvo') {
      const count = 9 + lv * 2;
      return { level: lv, count, dmg: 24 + lv * 8, spd: 560 + lv * 35, life: 1.7 };
    }
    if (key === 'fortress') {
      return { level: lv, duration: 3.8 + (lv - 1) * 1.25 };
    }
    if (key === 'turret') {
      // Concurrent auto-turrets on the rail
      return { level: lv, maxTurrets: Math.min(3, lv), dmg: 9 + lv * 3, fireRate: 0.18 - lv * 0.018, life: 22 + lv * 5 };
    }
    if (key === 'repair') {
      return { level: lv, heal: 40 + lv * 18, revive: lv >= 3 };
    }
    // overdrive — fire-rate + damage boost for the crown gun
    return { level: lv, duration: 5.2 + lv * 0.9, rateMul: 0.48 - lv * 0.035, dmgMul: 1.4 + lv * 0.12 };
  }

  // ── Ship modules (hangar bay → combat companions / passives) ──
  // Fusion module intentionally omitted — live fusion already comes from loadout pickups.
  // Guard drone removed (overlap with point defense); legacy saves auto-unequip via moduleSlots.
  /**
   * `cat` groups the catalogue in the hangar:
   *   combat   — things that shoot or block for you
   *   support  — passive buffs to the ship itself
   *   salvage  — logistics: fuel and what the wreckage drops
   */
  const MODULE_ROSTER = [
    { key: 'droneAtk', icon: Icons.svg('swords', 16), iconKey: 'statGun', unlock: 550, max: 4, color: '#ff9a4a', cat: 'combat' },
    { key: 'pointDef', icon: '✦', iconKey: 'upGuard', unlock: 680, max: 4, color: '#7de0ff', cat: 'combat' },
    { key: 'fuelTank', icon: '⛽', iconKey: 'fuel', unlock: 420, max: 3, color: '#ffe24a', cat: 'salvage' },
    // Passive combat modules — hangar only, never drawn on the HUD rail.
    { key: 'priority', icon: '★', iconKey: 'statUpg', unlock: 720, max: 3, color: '#ffd24a', passive: true, cat: 'support' },
    { key: 'chrono',   icon: '⏩', iconKey: 'warp',    unlock: 640, max: 4, color: '#7de0ff', passive: true, cat: 'support' },
    { key: 'gunAmp',   icon: '⇧', iconKey: 'statGun', unlock: 800, max: 4, color: '#ff8adf', passive: true, cat: 'support' },
    // Drop-shaping modules. Expensive on purpose: they never add loot, they only
    // decide WHICH loot you get, which is the strongest thing a build can ask for
    // late on. Configured on their own card (see moduleChoice).
    { key: 'superDrop', icon: Icons.svg('target', 16), iconKey: 'upAim', unlock: 1900, max: 4, color: '#c86cff', passive: true, cat: 'salvage', choice: 'super' },
    { key: 'lootBias',  icon: '⚖', iconKey: 'upMagnet', unlock: 2100, max: 4, color: '#8dff4a', passive: true, cat: 'salvage', choice: 'loot' },
  ];
  const MODULE_CATS = ['all', 'combat', 'support', 'salvage'];
  const PASSIVE_MODULES = new Set(MODULE_ROSTER.filter(m => m.passive).map(m => m.key));
  function moduleIsPassive(key) { return PASSIVE_MODULES.has(key); }
  const moduleByKey = Object.fromEntries(MODULE_ROSTER.map(m => [m.key, m]));
  /** Icons.svg / Icons.draw key for a module (hangar + combat HUD must match). */
  function moduleIconKey(key) {
    const def = moduleByKey[key];
    return (def && def.iconKey) || 'statUpg';
  }

  function ownedModules(profile) {
    if (!profile.ownedModules || typeof profile.ownedModules !== 'object') profile.ownedModules = {};
    return profile.ownedModules;
  }
  function moduleOwned(profile, key) { return !!ownedModules(profile)[key]; }
  function moduleUpgMap(profile) {
    if (!profile.moduleUpg || typeof profile.moduleUpg !== 'object') profile.moduleUpg = {};
    return profile.moduleUpg;
  }
  /** Bought tiers 0..max-1 → display level 1..max */
  function moduleBuyLv(profile, key) {
    const def = moduleByKey[key];
    if (!def) return 0;
    return Math.min(def.max - 1, Math.max(0, moduleUpgMap(profile)[key] || 0));
  }
  function moduleLevel(profile, key) {
    if (!moduleOwned(profile, key)) return 0;
    return 1 + moduleBuyLv(profile, key);
  }
  function moduleUnlockCost(key) {
    const def = moduleByKey[key];
    return def ? creditPrice(def.unlock) : 99999;
  }
  function moduleBuyInfo(key, boughtLv) {
    const def = moduleByKey[key];
    if (!def) return { currency: 'credits', amount: 99999 };
    const base = def.unlock * 0.55;
    // Upgrade steps ×2 on top of hangar credit mult; unlock price is unchanged.
    const amount = creditPrice(Math.round(base * Math.pow(1.65, boughtLv)) * 2);
    return { currency: 'credits', amount };
  }
  function unlockModule(profile, key) {
    const def = moduleByKey[key];
    if (!def || moduleOwned(profile, key)) return false;
    if (!spendFor({ currency: 'credits', amount: moduleUnlockCost(key) })) return false;
    ownedModules(profile)[key] = true;
    Profile.save();
    return true;
  }
  function buyModuleUpg(profile, key) {
    const def = moduleByKey[key];
    if (!def || !moduleOwned(profile, key)) return false;
    const bought = moduleBuyLv(profile, key);
    if (bought >= def.max - 1) return false;
    if (!canBuyModule(profile, key)) return false;
    const info = moduleBuyInfo(key, bought);
    if (!spendFor(info)) return false;
    moduleUpgMap(profile)[key] = bought + 1;
    Profile.save();
    return true;
  }

  // Mastery XP gates hangar module training (same idea as weapons).
  // Index = current purchase count. First upgrade after unlock is XP-free.
  const MODULE_XP_TIERS = [0, 90, 260, 560];
  function moduleXp(profile, key) {
    if (!profile.moduleXp) profile.moduleXp = {};
    return profile.moduleXp[key] || 0;
  }
  function addModuleXp(profile, key, amount) {
    if (!key || !amount) return 0;
    if (!moduleByKey[key]) return 0;
    if (!profile.moduleXp) profile.moduleXp = {};
    profile.moduleXp[key] = (profile.moduleXp[key] || 0) + Math.max(0, Math.round(amount));
    return profile.moduleXp[key];
  }
  /**
   * Module XP from a drop goes to EACH equipped module in full — it used to be
   * split across the bay, which meant a four-hardpoint Goliath levelled every
   * module ~2.7x slower than a two-hardpoint Phantom. Now that hardpoints are a
   * ship stat, splitting would punish exactly the hull the slots are meant to
   * reward. Module XP is per-module progress, not a shared pot.
   */
  function addModuleXpToLoadout(profile, amount) {
    const keys = equippedModuleKeys(profile);
    const list = keys.length ? keys : Object.keys(ownedModules(profile)).filter(k => moduleByKey[k]);
    if (!list.length) return 0;
    const each = Math.max(8, Math.round(amount));
    list.forEach(k => addModuleXp(profile, k, each));
    return each * list.length;
  }
  function canBuyModule(profile, key) {
    const def = moduleByKey[key];
    if (!def || !moduleOwned(profile, key)) return false;
    const bought = moduleBuyLv(profile, key);
    if (bought >= def.max - 1) return false;
    const need = MODULE_XP_TIERS[Math.min(bought, MODULE_XP_TIERS.length - 1)] || 0;
    return moduleXp(profile, key) >= need;
  }
  function moduleXpProgress(profile, key) {
    const def = moduleByKey[key];
    const maxBuys = def ? Math.max(1, def.max - 1) : 3;
    return buildXpTrack(moduleXp(profile, key), moduleBuyLv(profile, key), MODULE_XP_TIERS, maxBuys);
  }

  /**
   * Priority only means something for a gun that is actually in the loadout —
   * the Fusion module pulls the partner FROM the loadout, so marking a benched
   * weapon set a preference the run could never honour.
   */
  function setPriorityWeapon(profile, key) {
    if (key && !weaponByKey[key]) return false;
    if (key && !isInLoadout(profile, key)) return false;
    if (profile.priorityWeapon === key) profile.priorityWeapon = '';
    else profile.priorityWeapon = key || '';
    Profile.save();
    return true;
  }
  /** Reads '' once the marked weapon leaves the loadout, so it self-heals. */
  function priorityWeapon(profile) {
    const k = profile.priorityWeapon;
    if (!k || !weaponByKey[k]) return '';
    if (!isInLoadout(profile, k)) {
      profile.priorityWeapon = '';
      Profile.save();
      return '';
    }
    return k;
  }
  /** Hardpoint count = MODULE BAY ship system level (0–3). */
  /**
   * Hardpoints are now a SHIP stat, not a flat 3 for everyone: the tree's own
   * `modules` cap is the ceiling. Glass cannons carry two, heavies four — it is
   * the cheapest way to make the roster feel tactically different without
   * touching anyone's damage numbers.
   * Shrinking a ship's cap is safe: moduleSlots() slices to capacity, so a
   * module parked in a slot that no longer exists is simply unequipped.
   */
  function moduleCapacity(profile) {
    const u = shipUpgrades(profile, profile.ship);
    const ship = shipByKey[profile.ship] || SHIPS[0];
    const cap = (ship.tree && ship.tree.modules) || 3;
    return Math.min(cap, Math.max(0, u.modules || 0));
  }
  /** Ceiling for the active ship (UI draws this many slot buttons). */
  function moduleCapacityMax(profile) {
    const ship = shipByKey[(profile || Profile.get()).ship] || SHIPS[0];
    return (ship.tree && ship.tree.modules) || 3;
  }
  function moduleLoadout(profile) {
    return moduleSlots(profile).filter(Boolean);
  }
  function equipModule(profile, key, slotIndex) {
    if (!moduleOwned(profile, key) || !moduleByKey[key]) return false;
    const cap = moduleCapacity(profile);
    if (cap <= 0) return false;
    const slots = moduleSlots(profile).slice();
    // Clear existing placement of this key
    for (let i = 0; i < slots.length; i++) if (slots[i] === key) slots[i] = null;
    let idx = slotIndex;
    if (idx == null || idx < 0 || idx >= cap) {
      idx = slots.findIndex(s => !s);
      if (idx < 0) idx = cap - 1; // replace last
    }
    slots[idx] = key;
    profile.moduleSlots = slots;
    profile.moduleLoadout = slots.filter(Boolean);
    Profile.save();
    return true;
  }
  function unequipModule(profile, keyOrSlot) {
    const cap = moduleCapacity(profile);
    const slots = moduleSlots(profile).slice();
    if (typeof keyOrSlot === 'number') {
      if (keyOrSlot < 0 || keyOrSlot >= cap) return false;
      slots[keyOrSlot] = null;
    } else {
      for (let i = 0; i < slots.length; i++) if (slots[i] === keyOrSlot) slots[i] = null;
    }
    profile.moduleSlots = slots;
    profile.moduleLoadout = slots.filter(Boolean);
    Profile.save();
    return true;
  }
  function moduleSlots(profile) {
    const cap = moduleCapacity(profile);
    let slots = Array.isArray(profile.moduleSlots) ? profile.moduleSlots.slice(0, cap) : [];
    while (slots.length < cap) slots.push(null);
    // Validate
    const seen = new Set();
    for (let i = 0; i < slots.length; i++) {
      const k = slots[i];
      if (!k || !moduleByKey[k] || !moduleOwned(profile, k) || seen.has(k)) slots[i] = null;
      else seen.add(k);
    }
    profile.moduleSlots = slots;
    profile.moduleLoadout = slots.filter(Boolean);
    return slots;
  }
  function equippedModuleKeys(profile) {
    return moduleSlots(profile).filter(Boolean);
  }
  function hasModuleEquipped(profile, key) {
    return equippedModuleKeys(profile).includes(key);
  }
  /** Map fuel discount from fuelTank module (always ≥0, edge cost floor 1). */
  function fuelDiscount(profile) {
    if (!hasModuleEquipped(profile, 'fuelTank')) return 0;
    const lv = moduleLevel(profile, 'fuelTank');
    // Lv1–2: −1, Lv3: −2
    return lv >= 3 ? 2 : 1;
  }
  /** Runtime combat stats for an equipped module at its level. */
  function moduleCombatStats(profile, key) {
    const lv = moduleLevel(profile, key);
    if (!lv) return null;
    if (key === 'droneAtk') {
      return {
        key, lv, kind: 'droneAtk',
        charges: 16 + lv * 4, // ~20 at lv1
        reload: 10,
        dmg: lv >= 4 ? 20 : 6 + lv * 3,          // 9 / 12 / 15 / 20
        fireCd: lv >= 4 ? 0.24 : Math.max(0.28, 0.42 - lv * 0.03),
        range: lv >= 4 ? 340 : 220 + lv * 20,    // 240 / 260 / 280 / 340
        pellets: lv >= 4 ? 3 : lv >= 3 ? 2 : 1,
        spread: 0.10,
        orbitR: 28,
      };
    }
    if (key === 'pointDef') {
      // Slightly stronger sole CIWS after guard-drone retirement
      return {
        key, lv, kind: 'pointDef',
        charges: 20 + lv * 5,
        reload: 8.5,
        range: 58 + lv * 12,
        fireCd: Math.max(0.11, 0.18 - lv * 0.015),
      };
    }
    if (key === 'fuelTank') {
      return { key, lv, kind: 'fuelTank', discount: lv >= 3 ? 2 : 1 };
    }
    if (key === 'priority') {
      return { key, lv, kind: 'priority', dmgMul: 1.10, passive: true };
    }
    if (key === 'chrono') {
      // L1 cap 10s, each further level +5s. Regen 1s / 2 real seconds while idle.
      return { key, lv, kind: 'chrono', cap: 10 + (lv - 1) * 5, regenPerSec: 0.5, passive: true };
    }
    if (key === 'gunAmp') {
      const bonusLv = Math.min(2, lv);
      const extra = Math.max(0, lv - 2);
      return { key, lv, kind: 'gunAmp', bonusLv, dmgMul: 1 + extra * 0.05, passive: true };
    }
    return { key, lv, kind: key };
  }
  /* ── Drop-shaping modules ──────────────────────────────────────────────────
   * Neither of these changes HOW OFTEN loot falls — only what it turns out to
   * be. That distinction is the whole design: drop rate is tuned against the
   * economy, so a module that inflated it would quietly break credit pacing.
   */
  /** Which super the Arsenal Beacon is tuned to. */
  const SUPER_CHOICES = ['bomb', 'nuke', 'barrier', 'sphere'];
  /** Which loot family the Salvage Sorter favours. */
  const LOOT_CHOICES = ['weapons', 'money', 'support'];
  const LOOT_KINDS = {
    money: ['score', 'scrap', 'gem'],
    support: ['shield', 'overdrive', 'modxp', 'fuel'],
    // 'weapons' is resolved at roll time from the player's own loadout.
  };

  function moduleCfg(profile) {
    if (!profile.moduleCfg || typeof profile.moduleCfg !== 'object') profile.moduleCfg = {};
    return profile.moduleCfg;
  }
  /** Current setting of a configurable module, defaulted sensibly. */
  function moduleChoice(profile, key) {
    const cfg = moduleCfg(profile);
    if (key === 'superDrop') {
      const v = cfg.superDrop;
      return SUPER_CHOICES.includes(v) ? v : 'nuke';
    }
    if (key === 'lootBias') {
      const v = cfg.lootBias;
      return LOOT_CHOICES.includes(v) ? v : 'money';
    }
    return null;
  }
  function setModuleChoice(profile, key, value) {
    const list = key === 'superDrop' ? SUPER_CHOICES : key === 'lootBias' ? LOOT_CHOICES : null;
    if (!list || !list.includes(value)) return false;
    moduleCfg(profile)[key] = value;
    Profile.save();
    return true;
  }

  /**
   * Arsenal Beacon split. Applied ONLY when the roll already produced a super,
   * so the super drop rate itself is untouched — this just re-picks which one.
   * `rnd` is the slice that stays a fair roll across all supers, so even a maxed
   * beacon never fully locks you out of the other three.
   */
  const BEACON_SPLIT = [
    { prio: 0.44, act: 0.34, rnd: 0.22 },   // Lv1
    { prio: 0.54, act: 0.30, rnd: 0.16 },   // Lv2
    { prio: 0.62, act: 0.26, rnd: 0.12 },   // Lv3
    { prio: 0.70, act: 0.22, rnd: 0.08 },   // Lv4
  ];
  function beaconSplit(profile) {
    const lv = moduleLevel(profile, 'superDrop');
    if (!lv || !hasModuleEquipped(profile, 'superDrop')) return null;
    const s = BEACON_SPLIT[Math.min(BEACON_SPLIT.length - 1, lv - 1)];
    return {
      lv,
      priority: moduleChoice(profile, 'superDrop'),
      active: startSuper(profile) || 'bomb',
      split: s,
      pool: SUPER_CHOICES.slice(),
    };
  }
  /** Weight multiplier the Salvage Sorter applies to its chosen family. */
  const SORTER_MULT = [1.6, 2.1, 2.7, 3.4];
  function sorterBias(profile) {
    const lv = moduleLevel(profile, 'lootBias');
    if (!lv || !hasModuleEquipped(profile, 'lootBias')) return null;
    const pick = moduleChoice(profile, 'lootBias');
    const kinds = pick === 'weapons' ? battleLoadout(profile).slice() : (LOOT_KINDS[pick] || []).slice();
    return { lv, pick, kinds, mult: SORTER_MULT[Math.min(SORTER_MULT.length - 1, lv - 1)] };
  }

  function combatModuleSnapshot(profile) {
    return equippedModuleKeys(profile).map(k => moduleCombatStats(profile, k)).filter(Boolean);
  }

  /* ── Cosmetics (Observation Deck) ──────────────────────────────────────────
   * PURELY VISUAL, and that is a hard rule: this is the credit sink for a maxed
   * pilot, so anything with a stat would be pay-to-win by the back door.
   * Deliberately NOT offered: tracer colour. Bullet colour is how a player reads
   * which gun is firing — that is gameplay information, not decoration.
   */
  const COSMETICS = {
    paint: [
      { key: '', cost: 0, hex: '' },                       // stock hull
      { key: 'ember', cost: 9000, hex: '#e8834a' },
      { key: 'void', cost: 12000, hex: '#7a5ad8' },
      { key: 'jade', cost: 12000, hex: '#4ad89a' },
      { key: 'ash', cost: 16000, hex: '#8a94a8' },
      { key: 'crimson', cost: 22000, hex: '#d8465a' },
      { key: 'gold', cost: 34000, hex: '#e0b83a' },
      { key: 'ghost', cost: 48000, hex: '#f0f6ff' },
    ],
    // Running lights: canopy glass, wingtip strips, thruster mouths. Vox.retint
    // leaves emissive voxels alone, so this is a genuinely separate surface from
    // paint — a gold hull with ice-blue lights is a different ship than a gold
    // hull with gold lights, and both are one click apart.
    glow: [
      { key: '', cost: 0, hex: '' },                       // ship's own lights
      { key: 'ice', cost: 8000, hex: '#8fe8ff' },
      { key: 'rose', cost: 11000, hex: '#ff7ac0' },
      { key: 'toxic', cost: 13000, hex: '#a8ff40' },
      { key: 'solar', cost: 18000, hex: '#ffc23a' },
      { key: 'plasma', cost: 26000, hex: '#b06cff' },
      { key: 'blood', cost: 30000, hex: '#ff4a4a' },
      { key: 'nova', cost: 44000, hex: '#ffffff' },
    ],
    trail: [
      { key: '', cost: 0, hex: '' },                       // ship's own accent
      { key: 'cyan', cost: 7000, hex: '#4ad6ff' },
      { key: 'magenta', cost: 10000, hex: '#ff5bd0' },
      { key: 'lime', cost: 10000, hex: '#8dff4a' },
      { key: 'amber', cost: 15000, hex: '#ffb03a' },
      { key: 'violet', cost: 21000, hex: '#a06cff' },
      { key: 'white', cost: 30000, hex: '#eaf6ff' },
    ],
  };
  /**
   * Hull FX — animated overlays, not a colour. Priced in gems AND credits so
   * they sit above the paint tier as the last thing a maxed pilot buys, and
   * TWO can run at once: the combinations are the point, a single effect is
   * just another skin.
   */
  const FX_MAX = 2;
  const FX_LIST = [
    { key: 'shine',     gems: 60,  cost: 14000, hex: '#ffffff' },
    { key: 'afterburn', gems: 70,  cost: 16000, hex: '#ff9a3d' },
    { key: 'halo',      gems: 85,  cost: 19000, hex: '#8ad2ff' },
    { key: 'sparks',    gems: 95,  cost: 21000, hex: '#ffd24a' },
    { key: 'pulse',     gems: 110, cost: 24000, hex: '#4ad6ff' },
    { key: 'echo',      gems: 130, cost: 28000, hex: '#c86cff' },
    { key: 'aurora',    gems: 160, cost: 34000, hex: '#7dffa0' },
  ];
  const COSMETIC_SLOTS = ['paint', 'glow', 'trail'];

  function cosmeticList(slot) { return COSMETICS[slot] || []; }
  function cosmeticDef(slot, key) { return (COSMETICS[slot] || []).find(c => c.key === key) || null; }
  function cosmeticId(slot, key) { return slot + ':' + key; }
  function cosmeticOwned(profile, slot, key) {
    if (!key) return true;                                  // stock is always owned
    const o = profile.ownedCosmetics || {};
    return !!o[cosmeticId(slot, key)];
  }
  function cosmeticEquipped(profile, slot) {
    const c = profile.cosmetics || {};
    const key = c[slot] || '';
    return cosmeticDef(slot, key) ? key : '';
  }
  function buyCosmetic(profile, slot, key) {
    const def = cosmeticDef(slot, key);
    if (!def || !key || cosmeticOwned(profile, slot, key)) return false;
    if (!Profile.spend(def.cost)) return false;
    if (!profile.ownedCosmetics) profile.ownedCosmetics = {};
    profile.ownedCosmetics[cosmeticId(slot, key)] = true;
    Profile.save();
    return true;
  }
  function equipCosmetic(profile, slot, key) {
    if (!cosmeticOwned(profile, slot, key)) return false;
    if (!profile.cosmetics) profile.cosmetics = { paint: '', glow: '', trail: '' };
    profile.cosmetics[slot] = key || '';
    Profile.save();
    return true;
  }
  /** Hex the ship should be repainted with, '' = keep the model's own colours. */
  function paintHex(profile) {
    const d = cosmeticDef('paint', cosmeticEquipped(profile, 'paint'));
    return (d && d.hex) || '';
  }
  /* ---- Hull FX: multi-equip (up to FX_MAX), dual-currency ---- */
  const fxDef = key => FX_LIST.find(f => f.key === key) || null;
  function fxOwned(profile, key) {
    return !!(profile.ownedCosmetics || {})['fx:' + key];
  }
  /** Equipped FX keys, validated and capped. */
  function fxEquipped(profile) {
    const raw = (profile.cosmetics && profile.cosmetics.fx) || [];
    const list = Array.isArray(raw) ? raw : [raw];
    return list.filter(k => k && fxDef(k) && fxOwned(profile, k)).slice(0, FX_MAX);
  }
  function fxIsOn(profile, key) { return fxEquipped(profile).includes(key); }
  function buyFx(profile, key) {
    const d = fxDef(key);
    if (!d || fxOwned(profile, key)) return false;
    if ((profile.gems || 0) < d.gems) return false;
    if (profile.credits < d.cost) return false;
    profile.gems -= d.gems;
    if (!Profile.spend(d.cost)) { profile.gems += d.gems; return false; }
    if (!profile.ownedCosmetics) profile.ownedCosmetics = {};
    profile.ownedCosmetics['fx:' + key] = true;
    Profile.save();
    return true;
  }
  /** Toggle an FX on/off; turning a third one on drops the oldest. */
  function toggleFx(profile, key) {
    if (!fxOwned(profile, key)) return false;
    if (!profile.cosmetics) profile.cosmetics = { paint: '', glow: '', trail: '' };
    const cur = fxEquipped(profile);
    const i = cur.indexOf(key);
    if (i >= 0) cur.splice(i, 1);
    else { cur.push(key); while (cur.length > FX_MAX) cur.shift(); }
    profile.cosmetics.fx = cur;
    Profile.save();
    return true;
  }

  /** Running-lights colour, '' = the model's own emissive voxels. */
  function glowHex(profile) {
    const d = cosmeticDef('glow', cosmeticEquipped(profile, 'glow'));
    return (d && d.hex) || '';
  }
  /** Engine/trail colour override, '' = the ship's own accent. */
  function trailHex(profile) {
    const d = cosmeticDef('trail', cosmeticEquipped(profile, 'trail'));
    return (d && d.hex) || '';
  }
  /**
   * One object describing how the player's ship should LOOK anywhere it is drawn
   * — combat, hangar cards, deck turntable, transitions. Single source of truth
   * so a menu can never drift from what flies.
   */
  function shipSkin(profile) {
    const p = profile || Profile.get();
    return { ship: p.ship || 'vanguard', paint: paintHex(p), glow: glowHex(p), trail: trailHex(p), fx: fxEquipped(p) };
  }

  /**
   * 0..1 hangar power for daily starting difficulty.
   * Counts ships, upgrades, weapons, supers, modules — not Defense (hidden) or IAP.
   */
  function hangarPower01(profile) {
    const p = profile || Profile.get();
    let pts = 0;
    (p.ownedShips || []).forEach(k => { if (k && k !== 'vanguard') pts += 8; });
    const su = p.shipUpgrades || {};
    Object.keys(su).forEach(sk => {
      const row = su[sk] || {};
      Object.keys(row).forEach(k => { pts += row[k] | 0; });
    });
    const unlocked = unlockedWeapons(p);
    unlocked.forEach(k => {
      const def = weaponByKey[k];
      if (def && def.sector > 0) pts += 3;
    });
    const wu = p.weaponUpg || {};
    Object.keys(wu).forEach(wk => {
      const row = wu[wk] || {};
      Object.keys(row).forEach(s => { pts += row[s] | 0; });
    });
    SUPER_ROSTER.forEach(s => { pts += (superBuyLv(p, s.key) | 0) * 4; });
    MODULE_ROSTER.forEach(m => {
      if (moduleOwned(p, m.key)) {
        pts += 5;
        pts += (moduleBuyLv(p, m.key) | 0) * 3;
      }
    });
    return Engine.clamp(pts / 120, 0, 1);
  }

  return { UPGRADES, upgradeByKey, cost, isMax, SHIPS, shipByKey, applyToPlayer, creditsForRun, STORY_SHIP, SHIP_PARTS,
           shipUpgrades, shipTree, upgMax, DIFFICULTIES, DIFF_ORDER, MODES,
           WEAPON_ROSTER, weaponByKey, weaponUnlocked, unlockedWeapons, weaponUnlockedAtSector,
           WEAPON_UPGRADES, WEAPON_UPG_ORDER, weaponUpg, weaponUpgLv, weaponUpgCost,
           weaponAim, weaponDmgMult, weaponRateMult,
           shipBuyInfo, weaponBuyInfo, spendFor, startWeapon,
           LOADOUT_MAX, battleLoadout, normalizeLoadout, isInLoadout, toggleLoadout,
           WEAPON_XP_TIERS, weaponXp, addWeaponXp, maxWeaponTrainLevels, weaponTrainUsed,
           canTrainWeaponStat, weaponXpProgress,
           SUPER_ROSTER, superByKey, SUPER_MAX_BUY, SUPER_XP_TIERS,
           startSuper, setStartSuper, superBuyLv, superLevel, superBuyInfo,
           superXp, addSuperXp, canBuySuper, superXpProgress, superStats, superUpgMap,
           BASE_GUNS, gunByKey, GUN_UPGRADES, GUN_UPG_ORDER,
           ownedGuns, equipGun, equippedGun, gunUpgrades, gunTree, gunUpgMax, gunUpgLv,
           gunUpgCost, gunBuyInfo, gunEffectText, baseGunStats,
           DEF_SUPER_ROSTER, defSuperByKey, DEF_SUPER_MAX_BUY, DEF_SUPER_XP_TIERS, DEF_SUPER_LOADOUT_MAX,
           startDefSuper, setStartDefSuper, toggleDefSuperLoadout, defSuperCapacity, defSuperLoadout,
           defSuperBuyLv, defSuperLevel, defSuperBuyInfo,
           defSuperXp, addDefSuperXp, canBuyDefSuper, defSuperXpProgress, defSuperStats,
           defSuperCharges, defSuperCooldown, defSuperUpgMap,
           MODULE_ROSTER, moduleByKey, moduleIconKey, ownedModules, moduleOwned, moduleUpgMap, moduleBuyLv, moduleLevel,
           moduleBuyInfo, moduleUnlockCost, unlockModule, buyModuleUpg, moduleCapacity, moduleLoadout, moduleSlots,
           equipModule, unequipModule, equippedModuleKeys, hasModuleEquipped, fuelDiscount,
           moduleCombatStats, combatModuleSnapshot, hangarPower01, moduleCapacityMax,
           MODULE_CATS, SUPER_CHOICES, LOOT_CHOICES, LOOT_KINDS,
           moduleChoice, setModuleChoice, beaconSplit, sorterBias,
           COSMETICS, COSMETIC_SLOTS, cosmeticList, cosmeticDef, cosmeticOwned, cosmeticEquipped,
           buyCosmetic, equipCosmetic, paintHex, glowHex, trailHex, shipSkin,
           FX_LIST, FX_MAX, fxDef, fxOwned, fxEquipped, fxIsOn, buyFx, toggleFx,
           moduleIsPassive, MODULE_XP_TIERS, moduleXp, addModuleXp, addModuleXpToLoadout,
           canBuyModule, moduleXpProgress, setPriorityWeapon, priorityWeapon };
})();
