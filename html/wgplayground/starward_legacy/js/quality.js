/* ============================================================
 * quality.js — one render budget for the whole game.
 *
 * Phones that run this game range from a flagship to a four-year-old budget
 * Android, and the gap between them is far wider than any single setting can
 * bridge. So the device is measured ONCE, on first boot, and the answer is
 * remembered: every later launch just reads the profile.
 *
 * The measurement is the game's own work, not a synthetic score — it draws
 * real voxel hulls off-screen and counts how many faces the device fills per
 * millisecond. Marketing numbers (cores, RAM) only break ties.
 *
 * Four tiers. `ultra` is exactly what the game looked like before this file
 * existed — no tier may change it. The lower tiers give up effects, never
 * substance: fewer particles, fewer flip tiles, slower idle spins. None of
 * them turns a ship into a flat box.
 *
 * Everything else in the codebase asks a question rather than checking a tier:
 *   Quality.v('shipFps')     → number
 *   Quality.on('groundShadow') → boolean
 * Adding a knob here is cheap; scattering `if (tier === 'low')` is not.
 * ========================================================== */
const Quality = (() => {
  const TIERS = ['ultra', 'high', 'medium', 'low'];

  /**
   * Every knob, per tier. Read left to right: `ultra` is the shipped look, and
   * each column to the right gives up a little more. A knob that is identical
   * in all four columns does not belong here.
   *
   * THE RULE, learned the hard way: a lower tier makes each frame CHEAPER, it
   * never makes frames FEWER. There used to be a `shipFps` knob that ticked the
   * menu hulls at 22 and 16 per second instead of 30, and it did exactly what
   * it said — the lower tiers visibly stuttered while the higher ones ran
   * smoothly. Smoothness is the thing these tiers exist to protect; trading it
   * away to save work defeats the entire point. Anything that throttles a frame
   * rate, an animation rate or a tick rate does not belong in this table.
   */
  const KNOBS = {
    // ---- window-to-window transition (js/fxtrans.js) ----
    // Multiplier on the flip tile edge (base 22-24px). Cost is quadratic: the
    // base grid is 900 cubes a frame on a 540x960 screen, x2.7 is 124. Bigger
    // tiles read as a coarser mosaic, which is a look, not a defect.
    transTileScale: { ultra: 1, high: 1.35, medium: 1.85, low: 2.7 },
    // Seconds. The cascade is most of it; a shorter one is snappier, not worse.
    transTime:      { ultra: 1.25, high: 1.15, medium: 0.95, low: 0.75 },
    // Keep the outgoing screen live (ships still spinning) behind the flip.
    // Costs a full second of voxel rendering ON TOP of the flip itself.
    transLiveSrc:   { ultra: true, high: false, medium: false, low: false },
    // Hairline between cube faces — one extra stroke per face per frame.
    transEdge:      { ultra: true, high: true, medium: true, low: false },
    // Cube flip at all. `low` crossfades instead: clean, quiet, cheap — and a
    // crossfade is a real transition, not a downgrade artefact.
    transCube:      { ultra: true, high: true, medium: true, low: false },

    // ---- live voxel ships in menus (js/voxui.js) ----
    // Cap on how many hulls spin at once; the rest hold their last frame. A
    // still ship is not a stuttering ship — this drops whole animations rather
    // than slowing them down, which is the distinction that matters. The hero
    // preview is always among the ones that keep moving.
    shipLive:       { ultra: 99, high: 99, medium: 6, low: 3 },

    // ---- voxel renderer (js/vox.js) ----
    // Merge the voxel grid NxNxN below `voxelMergePx` pixels per voxel. 0 = the
    // hull is rendered exactly as authored, which is what `ultra` and `high`
    // both do — those two tiers are pixel-identical in every scene and differ
    // only in what the transition costs.
    voxelMerge:     { ultra: 0, high: 0, medium: 2, low: 3 },
    // 3.8 is deliberate: combat hulls draw at 3.5px per voxel, so `medium` picks
    // them up and `high` does not. Below it, only small enemies and asteroids
    // would ever merge and the tier would buy nothing in the scene that matters.
    voxelMergePx:   { ultra: 0, high: 0, medium: 3.8, low: 5 },
    // Soft drop shadow under hulls.
    groundShadow:   { ultra: true, high: true, medium: true, low: false },
    // Engine flame layers per emitter (3 = stacked glow, 1 = single spark).
    flameLayers:    { ultra: 3, high: 3, medium: 2, low: 1 },
    // shadowBlur on flames — a real blur pass per sprite, expensive on mobile.
    flameGlow:      { ultra: true, high: true, medium: false, low: false },

    // ---- combat (js/game.js, js/hazards.js) ----
    // Multiplier on debris/spark counts. Never zero: explosions must stay loud.
    particles:      { ultra: 1, high: 1, medium: 0.7, low: 0.45 },

    // ---- campaign map (js/map.js) ----
    mapShooters:    { ultra: 3, high: 3, medium: 2, low: 1 },
  };

  let tier = null;          // resolved tier name
  let manual = false;       // did the player pick it by hand?
  let score = null;         // faces/ms from the probe (null until measured)
  // What the probe said this device should run. Kept apart from `tier`, which
  // the player may have overridden: the title screen marks one option as
  // recommended, and that badge has to keep pointing at the measurement even
  // while a different tier is selected.
  let auto = null;

  function clampTier(t) { return TIERS.indexOf(t) >= 0 ? t : 'high'; }

  /** Numeric / string knob. */
  function v(name) {
    const k = KNOBS[name];
    if (!k) { console.warn('Quality: unknown knob', name); return null; }
    return k[tier || 'high'];
  }
  /** Boolean knob, spelled so call sites read like English. */
  function on(name) { return !!v(name); }

  /* ---------- the probe ----------
   * Draw real hulls off-screen and count faces per millisecond. Vox already
   * counts its own work exactly, so this is a true "how fast is THIS device at
   * the thing we actually do" number rather than a guess from a spec sheet.
   *
   * Deliberately small: it runs inside the loading curtain and must not become
   * the reason boot feels slow.
   */
  function probe() {
    if (typeof Vox === 'undefined' || !Vox.MODELS || !Vox._stats) return null;
    let c;
    try {
      c = document.createElement('canvas');
      c.width = 256; c.height = 256;
      const x = c.getContext('2d');
      if (!x) return null;
      const keys = ['vanguard', 'cruiser', 'boss'].filter(k => Vox.MODELS[k]);
      if (!keys.length) return null;

      // One warm-up round so JIT + first-paint costs land outside the timing.
      for (const k of keys) Vox.draw(x, Vox.MODELS[k], 128, 128, { s: 3, yaw: 0.3, t: 0, ignoreCam: true });

      // Best of several short bursts, not one long run. Whatever else the phone
      // is doing — the store SDK waking up, a GC, another tab — can only make a
      // burst look SLOWER than the device is, never faster, so the fastest
      // burst is the honest estimate. A single timed run gave 417, 273 and 102
      // on the same machine minutes apart, which would have thrown a player
      // between three different tiers for no reason.
      let best = 0;
      const deadline = performance.now() + 120;
      for (let burst = 0; burst < 4 && performance.now() < deadline; burst++) {
        Vox._stats.reset();
        Vox._stats.start();
        const t0 = performance.now();
        for (let i = 0; i < 6; i++) {
          const k = keys[i % keys.length];
          Vox.draw(x, Vox.MODELS[k], 128, 128, { s: 3, yaw: i * 0.7 + burst, roll: i * 0.3, t: i, ignoreCam: true });
        }
        const ms = performance.now() - t0;
        const faces = Vox._stats.read().faces;
        Vox._stats.stop();
        if (faces && ms > 0) best = Math.max(best, faces / ms);
      }
      return best || null;
    } catch (e) {
      return null;
    } finally {
      if (c) { c.width = 0; c.height = 0; }
    }
  }

  /**
   * Thresholds come from measuring the same scene on real hardware; they are
   * faces filled per millisecond. A desktop browser clears 2000+, a current
   * phone lands in the hundreds, an old budget Android in the low tens.
   */
  function tierFromScore(sc, hints) {
    // Rescaled x1.4 when the per-face outline was dropped: the renderer got
    // that much faster, so the same phone now scores higher and would have
    // drifted up a tier for no change in what it can actually do.
    let t;
    if (sc >= 1260) t = 'ultra';
    else if (sc >= 530) t = 'high';
    else if (sc >= 210) t = 'medium';
    else t = 'low';
    // Spec-sheet signals only ever pull DOWN, and only by one step. A device
    // that benchmarked well but has two cores will stutter the moment audio,
    // GC and the SDK's own work land on top of the render loop.
    const weak = (hints.cores && hints.cores <= 4) || (hints.mem && hints.mem <= 2);
    if (weak && t !== 'low') t = TIERS[TIERS.indexOf(t) + 1];
    return t;
  }

  function hints() {
    const n = typeof navigator !== 'undefined' ? navigator : {};
    return {
      cores: n.hardwareConcurrency || 0,
      mem: n.deviceMemory || 0,
      dpr: (typeof window !== 'undefined' && window.devicePixelRatio) || 1,
    };
  }

  /**
   * Which machine this verdict belongs to.
   *
   * A saved tier must not follow the player onto different hardware — a cloud
   * save carries the profile, so a phone's "light" settings would land on a
   * desktop browser and look needlessly poor (and the reverse is worse: a
   * desktop's "ultra" on a budget phone). Re-measuring on EVERY boot would
   * spend ~120ms of the loading curtain proving something that almost never
   * changes, so instead we remember what the device looked like and re-measure
   * only when it stops matching.
   *
   * Screen dimensions are sorted, not taken as width/height: some mobile
   * browsers swap them on rotation, and a player turning the phone sideways is
   * not a new device.
   */
  function fingerprint() {
    try {
      const n = navigator, sc = window.screen || {};
      const a = Math.max(sc.width || 0, sc.height || 0);
      const b = Math.min(sc.width || 0, sc.height || 0);
      const mobile = /Mobi|Android|iPhone|iPad|iPod/i.test(n.userAgent || '') ? 'm' : 'd';
      return [mobile, a, b, Math.round((window.devicePixelRatio || 1) * 10),
              n.hardwareConcurrency || 0, n.deviceMemory || 0].join('/');
    } catch (e) {
      return '?';
    }
  }

  /* ---------- persistence ---------- */
  function store() {
    try {
      const s = Profile.get().settings;
      s.quality = tier;
      s.qualityManual = manual;
      s.qualityDevice = fingerprint();
      if (auto) s.qualityAuto = auto;
      if (score != null) s.qualityScore = Math.round(score);
      Profile.save();
    } catch (e) {}
  }

  /**
   * Resolve the tier for this session. Measures only the first time; every
   * later launch reads the stored answer, so boot never pays for the probe
   * twice and the game cannot change its look between sessions on its own.
   */
  function init() {
    let s = null;
    try { s = Profile.get().settings; } catch (e) {}
    // A stored tier — measured or hand-picked — belongs to the machine it was
    // set on. Different hardware, and it is thrown away: a forced "Ultra" from
    // a desktop is exactly as wrong on a budget phone as a phone's "Light" is
    // on a desktop, and a cloud save carries both.
    const known = s && s.quality && TIERS.indexOf(s.quality) >= 0;
    if (known && s.qualityDevice === fingerprint()) {
      tier = s.quality;
      manual = !!s.qualityManual;
      score = s.qualityScore != null ? s.qualityScore : null;
      auto = TIERS.indexOf(s.qualityAuto) >= 0 ? s.qualityAuto
        // Saves written before the recommendation was stored separately: the
        // score is enough to re-derive it, and an unmeasured save gets no badge
        // rather than a guessed one.
        : (score != null ? tierFromScore(score, hints()) : null);
      return tier;
    }
    const h = hints();
    score = probe();
    auto = score == null ? null : tierFromScore(score, h);
    // Everyone STARTS on `high`, whatever the probe said.
    //
    // Measured across real devices, `high` holds a steady frame rate almost
    // everywhere, and it is pixel-identical to `ultra` in every scene — it only
    // spends less on the window transition. Opening on the measured tier meant
    // some phones began on `medium` or `low` and saw a coarser game than they
    // could actually run, while flagships paid for a transition nobody asked
    // for. The measurement is not thrown away: it still shows up as the
    // "recommended" badge, and the runtime safety net still steps down within a
    // few seconds if `high` really is too much for this device.
    tier = 'high';
    manual = false;
    store();
    return tier;
  }

  // The tier is offered in two places — the title screen and Settings — plus it
  // can move on its own via the runtime safety net. Listeners keep whichever UI
  // is mounted from showing a stale selection.
  const listeners = [];
  function onChange(fn) { if (typeof fn === 'function') listeners.push(fn); }
  function notify() {
    for (const fn of listeners) { try { fn(tier); } catch (e) {} }
  }

  /** Player picked a tier by hand, or the safety net stepped it down. */
  function set(t, byHand) {
    tier = clampTier(t);
    if (byHand) manual = true;
    store();
    try { if (typeof VoxUI !== 'undefined' && VoxUI.retimeShips) VoxUI.retimeShips(); } catch (e) {}
    notify();
    return tier;
  }

  /* ---------- runtime safety net ----------
   * The probe runs on an idle device with nothing else on screen, so it can be
   * optimistic. If real play turns out to be a slideshow we step down once and
   * remember it. Only ever downwards, only once per session, and never against
   * a tier the player chose by hand: silently overruling someone's setting is
   * worse than a few dropped frames.
   */
  let dropped = false, badFrames = 0, goodFrames = 0;
  function sample(dtMs) {
    if (dropped || manual || tier === 'low') return;
    if (dtMs > 40) { badFrames++; goodFrames = 0; }
    else if (++goodFrames > 90) { badFrames = 0; goodFrames = 0; }
    // ~2.5s of sustained sub-25fps before acting, so one hitch never demotes.
    if (badFrames >= 150) {
      dropped = true;
      set(TIERS[TIERS.indexOf(tier) + 1], false);
    }
  }

  /** Forget the stored verdict and measure this device again. */
  function remeasure() {
    // Re-measuring updates the recommendation and returns the player to the
    // same starting point a first launch would give them.
    manual = false;
    score = probe();
    auto = score == null ? null : tierFromScore(score, hints());
    tier = 'high';
    dropped = false; badFrames = 0; goodFrames = 0;
    store();
    try { if (typeof VoxUI !== 'undefined' && VoxUI.retimeShips) VoxUI.retimeShips(); } catch (e) {}
    notify();
    return tier;
  }

  return {
    init, set, v, on, sample, remeasure, onChange,
    tier: () => tier || 'high',
    /** What the device measured as — may differ from the tier in use. */
    recommended: () => auto,
    isManual: () => manual,
    score: () => score,
    TIERS,
    // for promo/_quality_probe.py
    _knobs: KNOBS,
    _tierFromScore: tierFromScore,
  };
})();
