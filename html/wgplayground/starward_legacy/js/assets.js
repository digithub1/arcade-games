/* ============================================================
 * assets.js — sprite pipeline. Preloads a manifest of PNGs; every
 * draw site asks Assets.drawCentered(...) first and falls back to
 * procedural vector art when the sprite is missing. This lets
 * AI-generated art be dropped into /assets with zero code changes.
 *
 * Filenames are documented in assets/README.md. Missing files are
 * handled silently (no broken-image errors) — the game stays playable.
 * ========================================================== */
const Assets = (() => {
  const BASE = 'assets/';

  // key → relative path. Drop a matching PNG to replace the vector art.
  const MANIFEST = {
    // player ships (one per ship/skin)
    ship_vanguard: 'sprites/ship_vanguard.png',
    ship_phantom:  'sprites/ship_phantom.png',
    ship_goliath:  'sprites/ship_goliath.png',
    ship_hornet:   'sprites/ship_hornet.png',
    ship_comet:    'sprites/ship_comet.png',
    ship_aegis:    'sprites/ship_aegis.png',
    // enemies
    enemy_kamikaze: 'sprites/enemy_kamikaze.png',
    enemy_shooter:  'sprites/enemy_shooter.png',
    enemy_tank:     'sprites/enemy_tank.png',
    enemy_weaver:   'sprites/enemy_weaver.png',
    enemy_cruiser:     'sprites/enemy_cruiser.png',
    enemy_carrier:     'sprites/enemy_carrier.png',
    enemy_destroyer:   'sprites/enemy_destroyer.png',
    enemy_interceptor: 'sprites/enemy_interceptor.png',
    enemy_asteroid:    'sprites/enemy_asteroid.png',
    enemy_debris:      'sprites/enemy_debris.png',
    enemy_strafer:     'sprites/enemy_strafer.png',
    // bosses (one per world)
    boss_nebula:   'sprites/boss_nebula.png',
    boss_asteroid: 'sprites/boss_asteroid.png',
    boss_hive:     'sprites/boss_hive.png',
    boss_void:     'sprites/boss_void.png',
    boss_ember:    'sprites/boss_ember.png',
    boss_frost:    'sprites/boss_frost.png',
    boss_nexus:    'sprites/boss_nexus.png',
    boss_core:     'sprites/boss_core.png',
    // new archetypes + ultra-bosses (Chapters I–III)
    boss_warden:      'sprites/boss_warden.png',
    boss_leviathan:   'sprites/boss_leviathan.png',
    boss_reaper:      'sprites/boss_reaper.png',
    boss_dreadnought: 'sprites/boss_dreadnought.png',
    boss_titan:       'sprites/boss_titan.png',
    boss_overmind:    'sprites/boss_overmind.png',
    boss_singularity: 'sprites/boss_singularity.png',
    // power-ups (optional; letter-glyphs used if absent)
    pu_cannon: 'sprites/pu_cannon.png', pu_spread: 'sprites/pu_spread.png',
    pu_laser: 'sprites/pu_laser.png', pu_missile: 'sprites/pu_missile.png',
    pu_railgun: 'sprites/pu_railgun.png', pu_pulse: 'sprites/pu_pulse.png',
    pu_shield: 'sprites/pu_shield.png', pu_bomb: 'sprites/pu_bomb.png', pu_score: 'sprites/pu_score.png',
    pu_nuke: 'sprites/pu_nuke.png', pu_fuel: 'sprites/pu_fuel.png',
    pu_scrap: 'sprites/pu_scrap.png', pu_gem: 'sprites/pu_gem.png', pu_overdrive: 'sprites/pu_overdrive.png',
    // world backgrounds (optional; procedural nebula used if absent)
    bg_nebula:   'bg/nebula.png',
    bg_asteroid: 'bg/asteroid.png',
    bg_hive:     'bg/hive.png',
    bg_void:     'bg/void.png',
  };

  const imgs = {};
  let total = 0, loaded = 0;

  // No PNG sprites ship yet — the game renders procedural vector art (see
  // player.js / enemies.js). Preloading the manifest against a host with no
  // /assets files just spams 404s (ugly on Yandex/VK/GamePush). Flip this to
  // true once real sprites are dropped into /assets, and they'll load in.
  const USE_SPRITES = false;

  function preload() {
    if (!USE_SPRITES) return;              // procedural art only → skip network + 404s
    for (const key in MANIFEST) {
      total++;
      const img = new Image();
      img._ready = false;
      img.onload = () => { img._ready = true; loaded++; };
      img.onerror = () => { img._ready = false; };   // silent: fall back to vectors
      img.src = BASE + MANIFEST[key];
      imgs[key] = img;
    }
  }

  function has(key) { const i = imgs[key]; return !!(i && i._ready); }

  // Register a pre-rendered source (canvas or image) under a manifest key.
  // Used by VoxPack to feed baked voxel sprites into every draw site.
  function register(key, source) { source._ready = true; imgs[key] = source; }

  // Draw sprite `key` centered at (cx,cy) sized w×h, optional rotation.
  // Returns true if it drew a sprite, false if none is available.
  function drawCentered(ctx, key, cx, cy, w, h, rot) {
    const img = imgs[key];
    if (!img || !img._ready) return false;
    ctx.save();
    ctx.translate(cx, cy);
    if (rot) ctx.rotate(rot);
    ctx.drawImage(img, -w / 2, -h / 2, w, h);
    ctx.restore();
    return true;
  }

  // Draw a full-canvas background sprite (cover). Returns true if drawn.
  function drawBackground(ctx, key, W, H) {
    const img = imgs[key];
    if (!img || !img._ready) return false;
    ctx.drawImage(img, 0, 0, W, H);
    return true;
  }

  function status() { return { total, loaded }; }

  return { preload, has, register, drawCentered, drawBackground, status, MANIFEST };
})();
