/* ============================================================
 * save.js — persistent player profile (localStorage JSON).
 * Survives reloads. Tolerant of missing/old fields via merge.
 * ========================================================== */
const Profile = (() => {
  const KEY = 'starward_legacy_save_v1';

  const DEFAULT = {
    credits: 0,
    highScore: 0,
    bestWave: 0,
    totalRuns: 0,
    ship: 'vanguard',
    ownedShips: ['vanguard'],
    upgrades: { hull: 0, weapons: 0, munitions: 0, ordnance: 0, magnet: 0, salvage: 0,
                firerate: 0, regen: 0, luck: 0, revive: 0 },   // legacy global (migrated to vanguard)
    shipUpgrades: {},          // per-ship upgrade levels: { shipKey: { upgradeKey: level } }
    baseGun: 'sentinel',       // equipped base-defense turret (orbit defense only)
    ownedGuns: ['sentinel'],   // purchased base-defense turrets
    gunUpgrades: {},           // per-gun upgrade levels: { gunKey: { power, cycle, optics } }
    weaponUnlocks: {},         // weapons unlocked early (with gems) beyond campaign gates
    weaponMastery: {},         // legacy per-weapon mastery (migrated → weaponUpg.dmg)
    weaponUpg: {},             // per-weapon training: { weaponKey: { aim, dmg, rate } }
    startWeapon: '',           // chosen loadout weapon (empty = the ship's default)
    battleLoadout: [],         // weapons available in combat (max 5); empty = auto from unlocks
    weaponXp: {},              // per-weapon mastery XP { cannon: 120, … }
    startSuper: 'bomb',        // equipped super weapon: bomb | nuke | barrier
    superUpg: {},              // permanent super tiers { bomb:0..3, nuke, barrier }
    superXp: {},               // mastery XP from using / pickup-firing supers
    startDefSuper: 'emp',      // base-defense super only (orbit defense): emp | salvo | fortress
    defSuperUpg: {},           // permanent defense super tiers { emp:0..3, … }
    defSuperXp: {},            // mastery XP from firing defense supers
    mode: 'campaign',          // campaign | endless
    difficulty: 'casual',      // first launch: EASY / ЛЁГКО (casual | normal | hard | brutal)
    campaignBest: 0,           // furthest world index cleared
    daily: { date: '', best: 0, attempts: 0, streak: 0, lastPlayed: '' },
    lang: 'ru',                // ru | en (host locale until the player picks one)
    langChosen: false,         // true once the player manually picks a language (stops host-locale override)
    tutorialDone: false,       // onboarding coach shown once; gates tutorial_complete
    introDone: false,          // first-flight intro mission completed (or skipped/exited)
    introGrantDone: false,     // starter credits after first intro granted once
    startWeaponLocked: false,  // hangar: start every run with weapon lock ON
    settings: { sfx: 0.8, music: 0.5, muted: false, highContrast: false, onboarding: 'full', replayStory: false },
    shopAds: { hour: '', n: 0 },           // shop rewarded-video hourly cap
    campaignEverCleared: false,            // any difficulty finished once → skip story unless replayStory
    gems: 0,                   // premium currency (bought / earned via rewarded video)
    noAds: false,              // Remove Ads purchased
    login: { last: '', streak: 0 },        // daily login ladder
    missions: { date: '', list: [] },      // daily missions (reset by calendar day)
    weekly: { week: '', list: [] },        // weekly missions (reset Monday weekKey)
    campaigns: {},                         // FTL node-map progress, SEPARATE per difficulty: { normal:{part,maps,fuel}, hard:{…} }
    stagesCleared: 0,                      // global + permanent → gates weapon drops (survives a campaign wipe)
    satellites: 1,                         // 🛰 recon satellites (scout a node's connections); buy more for gems
    warp: 10,                              // ⏩ time-warp seconds (×1.5 the whole battle); buy more for gems
    shipParts: [],                         // story-ship parts collected (chapter numbers 1-5); all 5 → unlocks the ship
    disks: {},                             // story log disks '01'..'10' → true when found (hangar archive)
    storySeen: {},                         // fallback seen flags if campaign state unavailable
    pass: { season: 0, xp: 0, premium: false, claimed: [], claimedP: [], xpDay: '', xpToday: 0 },  // battle pass
    firstBuyDone: false,                   // first-purchase ×2 gems bonus (monetization)
    seenTips: {},                          // one-time onboarding coach-marks shown
    deliveredTokens: [],                   // purchase tokens already delivered (idempotent restore → no double-grant)
    ownedModules: {},                      // unlocked ship modules { droneAtk: true, … }
    moduleUpg: {},                         // module training tiers { droneAtk: 0..max-1 }
    moduleXp: {},                          // per-module mastery XP { droneAtk: 80, … }
    moduleLoadout: [],                     // equipped module keys (dense)
    moduleSlots: [],                       // sparse hardpoint map for hangar UI
    priorityWeapon: '',                    // fusion-priority weapon (Priority module)
    firstBossKey: '',                      // first boss fight id — that one keeps launch HP
    cosmetics: { paint: '', trail: '' },   // equipped deck cosmetics (purely visual)
    ownedCosmetics: {},                    // bought cosmetic keys { paint_ember: true, … }
    contract: null,                        // daily contract state (see contracts.js)
  };

  let data = load();

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return structuredClone(DEFAULT);
      const parsed = JSON.parse(raw);
      // shallow + nested merge so new fields appear for old saves
      const merged = Object.assign(structuredClone(DEFAULT), parsed);
      merged.upgrades = Object.assign(structuredClone(DEFAULT.upgrades), parsed.upgrades || {});
      merged.settings = Object.assign(structuredClone(DEFAULT.settings), parsed.settings || {});
      if (!Array.isArray(merged.ownedShips) || !merged.ownedShips.length) merged.ownedShips = ['vanguard'];
      if (!Array.isArray(merged.ownedGuns) || !merged.ownedGuns.length) merged.ownedGuns = ['sentinel'];
      if (!merged.baseGun) merged.baseGun = 'sentinel';
      if (!merged.gunUpgrades || typeof merged.gunUpgrades !== 'object') merged.gunUpgrades = {};
      // Veterans who already finished the old coach skip the new intro flight.
      if (merged.tutorialDone && parsed.introDone == null) merged.introDone = true;
      if (merged.introDone && parsed.introGrantDone == null) merged.introGrantDone = true;
      return merged;
    } catch (e) {
      return structuredClone(DEFAULT);
    }
  }

  let syncer = null;   // optional cloud syncer (set by Cloud when GamePush is ready)
  let cloudOnly = false;   // true on hosts where the account owns the save

  function save() {
    // On a cloud host the account is the only place a save may live; writing a
    // copy here is what let one player's progress reach another's account.
    if (!cloudOnly) {
      try { localStorage.setItem(KEY, JSON.stringify(data)); } catch (e) { /* private mode: ignore */ }
    }
    if (syncer) { try { syncer(data); } catch (e) { /* never let sync break save */ } }
  }

  /**
   * Cloud-only mode: this device keeps NO save of its own.
   *
   * GamePush moderation asked for exactly this — "лучше отказаться от локальных
   * сохранений и использовать только сохранения в игрока GamePush" — and the
   * reason is the failure they reproduced: sign out, reload, and the game hands
   * the previous player's progress to a brand-new account.
   *
   * An earlier attempt kept localStorage and stamped it with the account id,
   * wiping it when the id changed. That fixed the cases it could see and left
   * two it could not:
   *   - a save written by a BUILD BEFORE the stamp has no id, so "has the
   *     account changed?" cannot be answered and the old data is kept — the
   *     reported bug, still live for everyone upgrading;
   *   - it depends on the SDK reporting a different id for a signed-out player,
   *     which was never verified against a real account, only against a stub in
   *     a test.
   * Removing the local save removes the question. Nothing can leak between
   * accounts if nothing is stored outside the account.
   *
   * Called by Cloud.init before the pull, on hosts with cloud saves only. Plain
   * web builds keep localStorage — there is no account there to leak between.
   */
  function useCloudOnly() {
    if (cloudOnly) return;
    cloudOnly = true;
    try { localStorage.removeItem(KEY); } catch (e) {}
    data = structuredClone(DEFAULT);
  }

  // Adopt a profile object (e.g. from cloud), merged onto defaults like load().
  function replace(obj) {
    if (!obj || typeof obj !== 'object') return;
    const merged = Object.assign(structuredClone(DEFAULT), obj);
    merged.upgrades = Object.assign(structuredClone(DEFAULT.upgrades), obj.upgrades || {});
    merged.settings = Object.assign(structuredClone(DEFAULT.settings), obj.settings || {});
    if (!Array.isArray(merged.ownedShips) || !merged.ownedShips.length) merged.ownedShips = ['vanguard'];
    if (!Array.isArray(merged.ownedGuns) || !merged.ownedGuns.length) merged.ownedGuns = ['sentinel'];
    if (!merged.baseGun) merged.baseGun = 'sentinel';
    if (!merged.gunUpgrades || typeof merged.gunUpgrades !== 'object') merged.gunUpgrades = {};
    data = merged;
    save();
  }

  return {
    get: () => data,
    save, replace, useCloudOnly,
    isCloudOnly: () => cloudOnly,
    setSyncer(fn) { syncer = fn; },
    reset() { data = structuredClone(DEFAULT); save(); },
    addCredits(n) { data.credits += n; save(); },
    spend(n) { if (data.credits < n) return false; data.credits -= n; save(); return true; },
  };
})();
