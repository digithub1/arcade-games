/* ============================================================
 * orbitmodes.js — production orbit combat for campaign nodes.
 *   defense  → supply base hold 360° (timer, mixed raiders)
 *   assault  → relay / research destroy 360° (clear sockets)
 * Uses Engine canvas/input + OrbitCore helpers. No OrbitBoot.
 * ============================================================ */
const OrbitModes = (() => {
  const C = () => OrbitCore;
  const W = () => Engine.W;
  const H = () => Engine.H;
  const keys = () => (Engine.input && Engine.input.keys) || {};

  let kind = null;       // 'defense' | 'assault'
  let mode = 'idle';     // idle | play | win | lose
  let t = 0, fireT = 0, shake = 0, spawnT = 0, wave = 1;
  let view = 0, cartX = 0, angVel = 0;
  let holdSec = 55, need = 8;
  let assaultHoldSec = 60; // timed assault (relay / research)
  let assaultGrade = 2;    // 0..3 set on win (0 = last stage only, no free upg)
  let lastAssaultStage = 1;
  let lastDefenseWave = 1;
  let bullets, eBullets, nodes, raiders, sockets, guns, hangar, ship;
  let defTurrets = [];   // deployed auto-guns (super: turret)
  let spawnSocketT = 0, spawnGunT = 0, hangarT = 0, cleared = 0;
  let stars = [];
  let result = null;
  let banner = '', bannerCol = '#ffe24a';
  let bannerT = 0; // auto-fade like combat wave toasts (never permanent block)
  let diffScale = 1, partN = 1;
  let assaultWinKey = 'orbit.assault.win';
  /** Vox model key for assault target (relay or lab). */
  let assaultModel = 'relay';
  /** Assault base active shield — blocks socket damage while up. */
  let baseShieldOn = false;
  let baseShieldT = 0;
  /** Boss orbit-arc shield state for drawForceShield (spinning sector). */
  let baseShield = null;
  /** Smoothed station yaw (avoids snap when view jumps). */
  let stationYaw = 0;
  /** Local power-up drops in assault (orbit owns the canvas). */
  let assaultDrops = [];
  /** Cached hangar base-gun stats for defense runs (set in start). */
  let defGun = null;
  /** Dual defense super loadout + active index + per-key cooldowns. */
  let defLoadout = ['emp', 'salvo'];
  let defSuperIdx = 0;
  let defSuperKey = 'emp';
  let defCooldowns = {}; // key → remaining sec
  let defCooldownMax = {}; // key → last full CD (for HUD progress bar)
  let fortressT = 0;
  let overdriveT = 0;
  let superFlashT = 0;
  let superFlashKind = '';
  let nodesLost = 0;
  let cycleQueued = 0; // -1 / +1 from swipe or keys

  // Defense layout: station bottom — gun rides the crown rail
  const DEF = { CX: 0.5, CY: 0, RX: 215, RY: 145, FACE: -Math.PI / 2, RIM: 1, OUTER: 2.95, OMEGA: 2.05 };
  // Assault layout: larger hostile base near top (room for sockets + shield bubble)
  const ATK = { CX: 0.5, CY: 188, RX: 228, RY: 138, FACE: Math.PI / 2, RIM: 1, OUTER: 1.95, OMEGA: 1.22 };

  // Hostile rim guns (assault) — voxel models + fire patterns
  const GUN_TYPES = {
    light: {
      model: 'enemyTurret', hp: 55, r: 16, fireCd: 1.05,
      pattern: 'triple', bulletSpd: 195, bulletR: 4.2, dmg: 1,
    },
    heavy: {
      model: 'enemyTurretHeavy', hp: 85, r: 18, fireCd: 1.45,
      pattern: 'fan', bulletSpd: 170, bulletR: 5, dmg: 1,
    },
    pulse: {
      model: 'enemyTurretPulse', hp: 70, r: 17, fireCd: 1.25,
      pattern: 'pulse', bulletSpd: 210, bulletR: 4.5, dmg: 1,
    },
  };

  // Hangar sorties launched from assault base
  const HANGAR_TYPES = {
    scout: {
      model: 'interceptor', hp: 12, r: 11, speed: 0.78, shoot: false, chase: 0.55,
    },
    gunboat: {
      model: 'shooter', hp: 22, r: 13, speed: 0.48, shoot: true, fireCd: 1.05, chase: 0.35,
    },
    diver: {
      model: 'kamikaze', hp: 16, r: 12, speed: 0.9, shoot: false, chase: 0.7, kamikaze: true,
    },
    armor: {
      model: 'tank', hp: 40, r: 15, speed: 0.32, shoot: true, fireCd: 1.6, chase: 0.25,
    },
    weaver: {
      model: 'weaver', hp: 14, r: 11, speed: 0.62, shoot: false, chase: 0.5, weave: true,
    },
  };

  // Raider archetypes for defense (models from Vox.MODELS)
  const RAID_TYPES = {
    dive: {
      model: 'kamikaze', role: 'dive', hp: 14, r: 11, speed: 0.55,
      w: 1.1, shoot: false,
    },
    swarm: {
      model: 'interceptor', role: 'dive', hp: 10, r: 10, speed: 0.72,
      w: 0.9, shoot: false,
    },
    gunner: {
      model: 'shooter', role: 'orbit', hp: 22, r: 12, speed: 0.38,
      w: 1.0, shoot: true, holdRad: 1.55, fireCd: 1.55, missileHp: 1,
    },
    heavy: {
      model: 'tank', role: 'orbit', hp: 48, r: 15, speed: 0.28,
      w: 0.7, shoot: true, holdRad: 1.75, fireCd: 2.1, missileHp: 2, missileDmg: 16,
    },
    shield: {
      model: 'cruiser', role: 'orbit', hp: 34, r: 13, speed: 0.32,
      w: 0.75, shoot: true, holdRad: 1.65, fireCd: 1.8, missileHp: 1,
      shieldCycle: true, shieldOn: 2.4, shieldOff: 3.2,
    },
    weaver: {
      model: 'weaver', role: 'dive', hp: 16, r: 11, speed: 0.48,
      w: 0.85, shoot: false, weave: true,
    },
  };

  function layout() {
    if (kind === 'defense') {
      return {
        CX: W() * DEF.CX, CY: H() - 170, RX: DEF.RX, RY: DEF.RY,
        FACE: DEF.FACE, RIM: DEF.RIM, OUTER: DEF.OUTER, OMEGA: DEF.OMEGA,
      };
    }
    return {
      CX: W() * ATK.CX, CY: ATK.CY, RX: ATK.RX, RY: ATK.RY,
      FACE: ATK.FACE, RIM: ATK.RIM, OUTER: ATK.OUTER, OMEGA: ATK.OMEGA,
    };
  }

  function at(ang, rad) {
    const L = layout();
    return C().polarXY(ang, rad, view, L.CX, L.CY, L.RX, L.RY, L.FACE);
  }

  function beep(f, d, type, v) {
    try { Engine.audio.blip(f, d, type || 'square', v || 0.06); } catch (e) {}
  }

  /**
   * Center toast — brief, like vertical-combat wave announce.
   * dur: seconds (default ~1.5). Win/lose can pass a longer dur.
   * Pass empty msg to clear immediately.
   */
  function setBanner(msg, col, dur) {
    banner = msg || '';
    bannerCol = col || '#ffe24a';
    if (!msg) { bannerT = 0; return; }
    bannerT = dur != null ? dur : 1.55;
  }

  function countNodesLost() {
    return nodes ? nodes.filter(n => n.dead).length : 0;
  }

  /**
   * opts: { diff, part, holdSec, need }
   */
  function start(k, opts) {
    opts = opts || {};
    kind = k === 'assault' ? 'assault' : 'defense';
    mode = 'play';
    result = null;
    t = 0; fireT = 0; shake = 0; spawnT = 0.4; wave = 1; view = 0; cleared = 0;
    angVel = 0; nodesLost = 0; cycleQueued = 0;
    partN = opts.part || 1;
    diffScale = 1 + Math.max(0, (opts.diff || 1) - 1) * 0.12 + Math.max(0, partN - 1) * 0.08;
    // Deeper campaign parts: longer holds + denser later waves
    holdSec = opts.holdSec || Math.max(42, 52 + partN * 4 + Math.max(0, (opts.diff || 1) - 1) * 3);
    // Assault: longer timer + higher clear quota (no more instant wins)
    assaultHoldSec = opts.assaultHoldSec
      || Math.max(58, 62 + partN * 6 + Math.max(0, (opts.diff || 1) - 1) * 5);
    need = opts.need || Math.min(14, 9 + partN + Math.max(0, (opts.diff || 1) - 1));
    assaultGrade = 2;
    lastAssaultStage = 1;
    lastDefenseWave = 1;
    assaultWinKey = opts.assaultWinKey || 'orbit.assault.win';
    assaultModel = opts.assaultModel || 'relay';
    bullets = []; eBullets = []; raiders = []; sockets = []; guns = []; hangar = []; nodes = [];
    defTurrets = [];
    stars = C().makeStars(W(), H(), 100);
    C().fx.length = 0; C().floats.length = 0;
    cartX = W() * 0.5;
    setBanner('');

    defGun = null;
    defLoadout = ['emp', 'salvo'];
    defSuperIdx = 0;
    defSuperKey = 'emp';
    defCooldowns = {};
    defCooldownMax = {};
    fortressT = 0;
    overdriveT = 0;
    superFlashT = 0;
    superFlashKind = '';
    baseShieldOn = false;
    baseShieldT = 0;
    baseShield = null;
    assaultDrops = [];
    if (kind === 'defense') {
      for (let i = 0; i < 4; i++) {
        nodes.push({
          ang: (i / 4) * C().TAU,
          hp: Math.round(130 * diffScale), maxHp: Math.round(130 * diffScale),
          r: 22, dead: false,
        });
      }
      defGun = (typeof Meta !== 'undefined' && Meta.baseGunStats)
        ? Meta.baseGunStats(typeof Profile !== 'undefined' ? Profile.get() : {})
        : { fireRate: 0.09, dmgMain: 12, dmgSide: 7, bulletSpd: 580, pattern: 'triple', optics: 0, model: 'turret' };
      const prof = (typeof Profile !== 'undefined') ? Profile.get() : {};
      if (typeof Meta !== 'undefined' && Meta.defSuperLoadout) {
        const cap = Meta.defSuperCapacity ? Meta.defSuperCapacity(prof) : 1;
        defLoadout = Meta.defSuperLoadout(prof).slice(0, cap);
      } else if (typeof Meta !== 'undefined' && Meta.startDefSuper) {
        defLoadout = [Meta.startDefSuper(prof)];
      }
      if (!defLoadout.length) defLoadout = ['emp'];
      defSuperIdx = 0;
      defSuperKey = defLoadout[0] || 'emp';
      defLoadout.forEach(k => { defCooldowns[k] = 0; defCooldownMax[k] = 1; });
    } else {
      // Prefer live Game.player (weapons / shield / modules); keep ship mirror for legacy fields
      const pl = (typeof Game !== 'undefined' && Game.player) ? Game.player : null;
      const sx = W() * 0.5, sy = H() - 95;
      if (pl) {
        pl.x = sx; pl.y = sy; pl.bank = 0; pl.alive = true;
        pl.invuln = Math.max(pl.invuln || 0, 0.8);
        if (pl.shield <= 0) pl.shield = Math.max(1, pl.maxShield | 0);
      }
      ship = { x: sx, y: sy, hp: pl ? pl.shield : 6, inv: 0, bank: 0 };
      for (let i = 0; i < 4; i++) spawnSocket((i / 4) * C().TAU);
      spawnGun(0.4, 'light');
      spawnGun(Math.PI + 0.4, partN >= 2 ? 'heavy' : 'light');
      spawnSocketT = 1.2; spawnGunT = 2.2; hangarT = 2.8;
      lastAssaultStage = 1;
      // Shield starts up briefly so player can't snipe sockets in the first second
      baseShieldOn = true;
      baseShieldT = 3.2 + partN * 0.25;
      // Boss "orbit" arc — rotating sector (prettiest shell art)
      baseShield = {
        mode: 'orbit',
        active: true,
        flash: 0,
        t: 0,
        angle: Math.PI / 2, // start facing player approach
        arc: 1.05,         // ~120° half-width
        period: 5.2,
        activeDur: 2.1,
      };
      stationYaw = 0;
      // Brief stage toast only (HUD already shows S1/4 · progress · timer)
      setBanner(Tf('orbit.assault.stage', 1), '#ffb0b8', 1.4);
    }
    updateHud();
  }

  /** Continue assault after rewarded revive — keep progress, restore ship. */
  function reviveAssault() {
    if (kind !== 'assault') return false;
    mode = 'play';
    result = null;
    const pl = (typeof Game !== 'undefined' && Game.player) ? Game.player : null;
    if (pl) {
      pl.alive = true;
      pl.shield = Math.max(1, Math.ceil((pl.maxShield || 3) / 2));
      pl.invuln = 2.6;
      pl.x = ship ? ship.x : W() * 0.5;
      pl.y = ship ? ship.y : H() - 95;
    }
    if (ship) {
      ship.hp = pl ? pl.shield : 6;
      ship.inv = 2.6;
    }
    eBullets = [];
    shake = 10;
    setBanner(T('ann.revive'), '#ff6ad0', 1.4);
    updateHud();
    return true;
  }

  /**
   * Socket HP by story part, node difficulty (diffScale), and live assault stage.
   * Tuned so high-mastery loadouts still need several volleys / shield windows.
   * Not a flat global buff — late parts & late stages harden more.
   */
  function socketHpBase() {
    const stg = assaultStageNow();
    // part1/S1 ≈ 200 · scale; part5/S4 ≈ 200+300+165 = 665 · scale
    const core = 200 + partN * 60 + (stg - 1) * 55;
    return Math.round(core * diffScale);
  }

  function spawnSocket(ang) {
    if (sockets.filter(s => !s.dead).length >= 6) return;
    const hp = socketHpBase();
    sockets.push({
      ang: ang != null ? ang : Math.random() * C().TAU,
      hp, maxHp: hp,
      r: 18, dead: false, pulse: Math.random() * 5,
    });
  }

  function pickGunType() {
    const stg = assaultStageNow();
    const bag = ['light', 'light'];
    if (stg >= 2 || partN >= 2) bag.push('heavy');
    if (stg >= 3 || partN >= 3) bag.push('pulse', 'heavy');
    if (stg >= 4 || partN >= 4) bag.push('pulse', 'heavy', 'pulse');
    return bag[(Math.random() * bag.length) | 0];
  }

  function spawnGun(ang, typeKey) {
    if (guns.filter(g => !g.dead).length >= 5) return;
    const key = typeKey || pickGunType();
    const def = GUN_TYPES[key] || GUN_TYPES.light;
    const stg = assaultStageNow();
    // Guns also scale with part/stage so rim DPS keeps up with socket bulk
    const hp = Math.round(def.hp * diffScale * (1 + (stg - 1) * 0.18 + partN * 0.08));
    guns.push({
      type: key,
      model: def.model,
      pattern: def.pattern,
      ang: ang != null ? ang : Math.random() * C().TAU,
      hp, maxHp: hp,
      r: def.r,
      fireCd: def.fireCd,
      bulletSpd: def.bulletSpd,
      bulletR: def.bulletR,
      dead: false,
      shootT: 0.8 + Math.random() * 0.9,
      pulse: Math.random() * 4,
    });
  }

  function pickHangarType() {
    const stg = assaultStageNow();
    const bag = ['scout', 'scout', 'diver'];
    if (stg >= 2 || partN >= 2) bag.push('gunboat', 'weaver');
    if (stg >= 3 || partN >= 2) bag.push('gunboat', 'armor');
    if (stg >= 4 || partN >= 3) bag.push('armor', 'diver', 'gunboat');
    return bag[(Math.random() * bag.length) | 0];
  }

  function spawnHangarCraft() {
    if (hangar.length >= 8) return;
    const L = layout();
    const key = pickHangarType();
    const def = HANGAR_TYPES[key] || HANGAR_TYPES.scout;
    const stg = assaultStageNow();
    const launchAng = (L.FACE - view) + (Math.random() - 0.5) * 2.4;
    // Spawn near core in screen space, then pursue player with smooth steering
    const p = at(launchAng, 0.14);
    const spd = (95 + def.speed * 110) * (0.95 + Math.random() * 0.1) * (1 + (stg - 1) * 0.04);
    hangar.push({
      type: key,
      model: def.model,
      x: p.x, y: p.y,
      vx: 0, vy: 0,
      spd,
      turn: 1.6 + (def.chase || 0.4) * 1.4, // higher = snappier chase
      hp: Math.round((def.hp + partN * 2) * (1 + (stg - 1) * 0.08) * Math.min(1.35, diffScale)),
      r: def.r,
      shoot: !!def.shoot,
      shootT: 0.7 + Math.random() * 0.6,
      fireCd: def.fireCd || 1.2,
      phase: Math.random() * C().TAU,
      kamikaze: !!def.kamikaze,
      weave: !!def.weave,
      life: 14,
    });
  }

  /** Cycle active base shield — longer uptime in later stages / parts. */
  function tickBaseShield(dt) {
    if (baseShield) {
      baseShield.t = (baseShield.t || 0) + dt;
      if (baseShield.flash > 0) baseShield.flash = Math.max(0, baseShield.flash - dt);
      // Orbit arc always spins while the defensive phase is up
      if (baseShieldOn && baseShield.mode === 'orbit') {
        baseShield.angle = (baseShield.angle + dt * 1.15) % C().TAU;
        baseShield.active = true;
      } else {
        baseShield.active = false;
      }
    }
    baseShieldT -= dt;
    if (baseShieldT > 0) return;
    const stg = assaultStageNow();
    if (baseShieldOn) {
      // Drop shield — windows get shorter later (more pressure)
      baseShieldOn = false;
      baseShieldT = Math.max(3.2, 5.4 - stg * 0.35 - partN * 0.12);
      if (baseShield) baseShield.active = false;
    } else {
      baseShieldOn = true;
      // Shield up duration grows with stage (harder to clear sockets)
      baseShieldT = 2.6 + stg * 0.55 + partN * 0.15;
      if (baseShield) { baseShield.active = true; baseShield.flash = 0.12; }
      try { Engine.audio.blip(280, 0.08, 'sine', 0.05); } catch (e) {}
    }
  }

  /** Smooth station yaw toward target (shortest angle path). */
  function tickStationYaw(dt, target) {
    const d = C().angDiff(target, stationYaw);
    const rate = Math.min(1, 3.2 * dt);
    stationYaw = C().wrap(stationYaw + d * rate);
  }

  /**
   * Core hull disc — bullets that reach the center die here so they cannot
   * tunnel through and delete sockets on the far side of the base.
   */
  function hitAssaultHull(b, L) {
    const rx = L.RX * 0.46;
    const ry = L.RY * 0.46;
    const nx = (b.x - L.CX) / rx;
    const ny = (b.y - L.CY) / ry;
    return (nx * nx + ny * ny) < 1;
  }

  function dropAssaultLoot(x, y, chance) {
    const pl = (typeof Game !== 'undefined' && Game.player) ? Game.player : null;
    const luck = pl && pl.luckMult ? pl.luckMult : 1;
    if (Math.random() > (chance || 0.28) * luck) return;
    let kind = 'score';
    if (typeof PowerUps !== 'undefined' && PowerUps.rollKind) {
      try { kind = PowerUps.rollKind(); } catch (e) { kind = 'score'; }
    }
    assaultDrops.push({
      x, y, kind, r: 12, t: 0, bob: 0, life: 12,
    });
  }

  /** Strike drone hit scan — damage nearest assault threat in range. */
  function droneStrike(x, y, dmg, range) {
    if (kind !== 'assault' || mode !== 'play') return false;
    const r2 = (range || 200) ** 2;
    let best = null, bd = r2, kindHit = null;
    const L = layout();
    for (const d of hangar) {
      const dd = (d.x - x) ** 2 + (d.y - y) ** 2;
      if (dd < bd) { bd = dd; best = d; kindHit = 'hangar'; }
    }
    for (const g of guns) {
      if (g.dead) continue;
      const p = at(g.ang, L.RIM);
      const dd = (p.x - x) ** 2 + (p.y - y) ** 2;
      if (dd < bd) { bd = dd; best = g; kindHit = 'gun'; best._px = p.x; best._py = p.y; }
    }
    if (!baseShieldOn) {
      for (const s of sockets) {
        if (s.dead) continue;
        const p = at(s.ang, L.RIM);
        const dd = (p.x - x) ** 2 + (p.y - y) ** 2;
        if (dd < bd) { bd = dd; best = s; kindHit = 'sock'; best._px = p.x; best._py = p.y; }
      }
    }
    if (!best) return false;
    if (kindHit === 'hangar') {
      best.hp -= dmg;
      C().burst(best.x, best.y, '#ff9a4a', 6, 50, 0.2);
      if (best.hp <= 0) {
        dropAssaultLoot(best.x, best.y, 0.3);
        hangar.splice(hangar.indexOf(best), 1);
      }
    } else if (kindHit === 'gun') {
      best.hp -= dmg;
      C().burst(best._px, best._py, '#ff9a4a', 6, 50, 0.2);
      if (best.hp <= 0) {
        best.dead = true;
        dropAssaultLoot(best._px, best._py, 0.4);
      }
    } else {
      best.hp -= dmg;
      C().burst(best._px, best._py, '#ff9a4a', 6, 50, 0.2);
      if (best.hp <= 0) {
        best.dead = true; cleared++;
        dropAssaultLoot(best._px, best._py, 0.45);
        updateHud();
        if (cleared >= need) finalizeAssaultWin();
      }
    }
    return true;
  }

  /**
   * Bomb / nuke radius damage from vertical supers (called by Game).
   * Clears local enemy fire + damages sockets/guns/hangar in radius.
   */
  function playerBlast(opts) {
    if (kind !== 'assault' || mode !== 'play') return false;
    opts = opts || {};
    const pl = (typeof Game !== 'undefined' && Game.player) ? Game.player : null;
    const cx = (pl && pl.x) || (ship && ship.x) || W() * 0.5;
    const cy = (pl && pl.y) || (ship && ship.y) || H() - 95;
    const r = opts.r || 110;
    const dmg = opts.dmg || 40;
    const r2 = r * r;
    eBullets = [];
    const L = layout();
    for (const s of sockets) {
      if (s.dead) continue;
      const p = at(s.ang, L.RIM);
      if ((p.x - cx) ** 2 + (p.y - cy) ** 2 < r2) {
        if (baseShieldOn) {
          if (baseShield) baseShield.flash = 0.16;
        } else {
          s.hp -= dmg;
          if (s.hp <= 0) {
            s.dead = true; cleared++;
            C().burst(p.x, p.y, '#ff4a6a', 28, 180, 0.6);
            dropAssaultLoot(p.x, p.y, 0.55);
            if (cleared >= need) finalizeAssaultWin();
          }
        }
      }
    }
    for (const g of guns) {
      if (g.dead) continue;
      const p = at(g.ang, L.RIM);
      if ((p.x - cx) ** 2 + (p.y - cy) ** 2 < r2) {
        g.hp -= dmg * 0.85;
        if (g.hp <= 0) {
          g.dead = true;
          C().burst(p.x, p.y, '#ff8040', 22, 150, 0.55);
          dropAssaultLoot(p.x, p.y, 0.45);
        }
      }
    }
    for (let i = hangar.length - 1; i >= 0; i--) {
      const d = hangar[i];
      const px = d.x != null ? d.x : at(d.ang, d.rad).x;
      const py = d.y != null ? d.y : at(d.ang, d.rad).y;
      if ((px - cx) ** 2 + (py - cy) ** 2 < r2) {
        C().burst(px, py, '#ff6a40', 14, 110, 0.4);
        dropAssaultLoot(px, py, 0.35);
        hangar.splice(i, 1);
      }
    }
    shake = Math.max(shake, 16);
    updateHud();
    return true;
  }

  function stop() {
    mode = 'idle'; kind = null; result = null; banner = ''; bannerT = 0;
    defGun = null;
    defLoadout = ['emp', 'salvo'];
    defSuperIdx = 0;
    defSuperKey = 'emp';
    defCooldowns = {};
    defCooldownMax = {};
    fortressT = 0;
    overdriveT = 0;
    superFlashT = 0;
    superFlashKind = '';
    defTurrets = [];
    nodesLost = 0;
    angVel = 0;
    baseShieldOn = false;
    baseShieldT = 0;
    baseShield = null;
    stationYaw = 0;
    assaultDrops = [];
    assaultModel = 'relay';
  }

  function getResult() { return result; }
  function isActive() { return mode === 'play' || mode === 'win' || mode === 'lose'; }
  function getKind() { return kind; }
  function getNodesLost() { return nodesLost || countNodesLost(); }
  /** 0..3 assault performance (0 = scraped last stage → no free upgrade). */
  function getAssaultGrade() { return assaultGrade; }

  function assaultStageNow() {
    const hs = Math.max(1, assaultHoldSec || 60);
    return Math.min(4, 1 + Math.floor((t / hs) * 4));
  }
  function finalizeAssaultWin() {
    const stg = assaultStageNow();
    // stage 1 → grade 3 (best) … stage 4 → grade 0 (no free upg)
    assaultGrade = Math.max(0, 4 - stg);
    mode = 'win'; result = 'win';
    setBanner(T(assaultWinKey), '#ffe24a', 2.4);
    beep(520, 0.28, 'sine', 0.1);
    updateHud();
  }

  /** HUD payload for Game.updateHud — only meaningful during defense. */
  function getDefSuperHud() {
    if (kind !== 'defense') return null;
    const def = (typeof Meta !== 'undefined' && Meta.defSuperByKey)
      ? Meta.defSuperByKey[defSuperKey] : null;
    const cd = defCooldowns[defSuperKey] || 0;
    // Per-slot cooldowns so both icons can show independent CD overlays
    const cds = {};
    const cdMaxes = {};
    (defLoadout || []).forEach(k => {
      cds[k] = defCooldowns[k] || 0;
      cdMaxes[k] = defCooldownMax[k] || cds[k] || 1;
    });
    return {
      key: defSuperKey,
      loadout: defLoadout.slice(),
      idx: defSuperIdx,
      charges: cd <= 0 ? 1 : 0,
      cooldown: cd,
      cooldowns: cds,
      cooldownMaxes: cdMaxes,
      ready: cd <= 0,
      icon: (def && def.icon) || '⚡',
      color: (def && def.color) || '#4ad6ff',
      fortressT,
      overdriveT,
    };
  }

  function grantDefSuperXp(key, amount) {
    try {
      if (typeof Meta !== 'undefined' && Meta.addDefSuperXp && typeof Profile !== 'undefined') {
        Meta.addDefSuperXp(Profile.get(), key, amount);
        Profile.save();
      }
    } catch (e) {}
  }

  function notifyHud() {
    try {
      if (typeof Game !== 'undefined' && Game.updateHud) Game.updateHud();
    } catch (e) {}
  }

  function cycleSuper(dir) {
    if (kind !== 'defense' || !defLoadout.length) return;
    const n = defLoadout.length;
    defSuperIdx = (defSuperIdx + (dir < 0 ? -1 : 1) + n * 8) % n;
    defSuperKey = defLoadout[defSuperIdx];
    beep(dir < 0 ? 520 : 440, 0.05, 'sine', 0.05);
    notifyHud();
  }

  function consumeCycleInput() {
    const inp = Engine.input;
    if (!inp) return;
    if (inp.swipeUp) { inp.swipeUp = false; cycleSuper(-1); }
    if (inp.swipeDown) { inp.swipeDown = false; cycleSuper(1); }
    // Keyboard: R / F or PageUp / PageDown
    const k = keys();
    if (k['KeyR'] || k['PageUp'] || k['BracketLeft']) {
      if (!consumeCycleInput._r) { cycleSuper(-1); consumeCycleInput._r = true; }
    } else consumeCycleInput._r = false;
    if (k['KeyF'] || k['PageDown'] || k['BracketRight']) {
      if (!consumeCycleInput._f) { cycleSuper(1); consumeCycleInput._f = true; }
    } else consumeCycleInput._f = false;
  }

  /**
   * Fire equipped defense super (Space / ordnance button).
   * Infinite uses with per-key cooldown. Returns true if fired.
   */
  function useSuper() {
    if (kind !== 'defense' || mode !== 'play') return false;
    const key = defSuperKey || defLoadout[0] || 'emp';
    if ((defCooldowns[key] || 0) > 0) {
      beep(180, 0.06, 'square', 0.06);
      return false;
    }
    const prof = (typeof Profile !== 'undefined') ? Profile.get() : {};
    const st = (typeof Meta !== 'undefined' && Meta.defSuperStats)
      ? Meta.defSuperStats(prof, key)
      : { enemyR: 0, dmg: 100, count: 8, spd: 520, life: 1.5, duration: 3 };
    const cd = (typeof Meta !== 'undefined' && Meta.defSuperCooldown)
      ? Meta.defSuperCooldown(prof, key)
      : 12;
    defCooldowns[key] = cd;
    defCooldownMax[key] = cd;
    superFlashT = 0.85;
    superFlashKind = key;
    notifyHud();
    // Steeper mastery curve — XP per use cut ~3× (tiers also raised in Meta)
    grantDefSuperXp(key, key === 'salvo' ? 7 : key === 'fortress' ? 5 : key === 'turret' ? 5 : 6);

    const L = layout();
    const Oc = C();
    const bank = Oc.clamp((cartX - W() * 0.5) / (W() * 0.45), -1, 1);
    const slide = bank * 0.18;
    const seatScr = Oc.polarXY(L.FACE + slide - view, L.RIM, view, L.CX, L.CY, L.RX, L.RY, L.FACE);
    const defMeta = (typeof Meta !== 'undefined' && Meta.defSuperByKey) ? Meta.defSuperByKey[key] : null;
    const nm = (typeof T === 'function' && key) ? T('defsuper.' + key + '.name') : key;
    // Clear feedback: name + cooldown so the dual-super system is readable
    Oc.floatTxt(seatScr.x, seatScr.y - 28, `${defMeta ? defMeta.icon + ' ' : ''}${nm}`, (defMeta && defMeta.color) || '#ffe24a');
    Oc.floatTxt(seatScr.x, seatScr.y - 10, `CD ${Math.ceil(cd)}s`, '#c8e0ff');
    try {
      if (typeof Engine !== 'undefined' && Engine.audio) {
        if (Engine.audio.bomb && (key === 'emp' || key === 'salvo')) Engine.audio.bomb();
        else if (Engine.audio.power) Engine.audio.power();
      }
    } catch (e) {}

    if (key === 'emp') {
      eBullets.length = 0;
      shake = Math.max(shake, 18);
      beep(420, 0.22, 'sawtooth', 0.12);
      Oc.burst(L.CX, L.CY, '#4ad6ff', 55, 200, 0.85);
      Oc.burst(seatScr.x, seatScr.y, '#a0f0ff', 30, 130, 0.55);
      // Always damage nearby raiders (L1 small, higher = big)
      const r = st.enemyR || 70;
      const r2 = r * r;
      for (let i = raiders.length - 1; i >= 0; i--) {
        const e = raiders[i];
        const p = at(e.ang, e.rad);
        if ((p.x - L.CX) ** 2 + (p.y - L.CY) ** 2 < r2) {
          e.hp -= st.dmg || 110;
          e.shielded = false;
          Oc.burst(p.x, p.y, '#4ad6ff', 14, 110, 0.4);
          if (e.hp <= 0) {
            Oc.burst(p.x, p.y, '#7dffa0', 22, 150, 0.55);
            raiders.splice(i, 1);
          }
        }
      }
    } else if (key === 'salvo') {
      const n = st.count || 10;
      const base = L.FACE + bank * 0.12;
      const span = 0.72 + (st.level || 1) * 0.06;
      const spd = st.spd || 580;
      shake = Math.max(shake, 14);
      beep(280, 0.14, 'square', 0.11);
      for (let i = 0; i < n; i++) {
        const u = n === 1 ? 0.5 : i / (n - 1);
        const a = base - span / 2 + span * u;
        bullets.push({
          x: seatScr.x + Math.cos(a) * 18,
          y: seatScr.y + Math.sin(a) * 18,
          vx: Math.cos(a) * spd,
          vy: Math.sin(a) * spd,
          life: st.life || 1.7,
          r: 6.5,
          dmg: st.dmg || 28,
          super: true,
        });
      }
      Oc.burst(seatScr.x, seatScr.y, '#ffb01f', 28, 110, 0.5);
    } else if (key === 'fortress') {
      fortressT = Math.max(fortressT, st.duration || 4);
      shake = Math.max(shake, 10);
      beep(520, 0.2, 'sine', 0.12);
      for (const n of nodes) {
        if (n.dead) continue;
        const p = at(n.ang, L.RIM);
        Oc.burst(p.x, p.y, '#7dffa0', 18, 95, 0.55);
      }
      Oc.burst(L.CX, L.CY, '#7dffa0', 24, 120, 0.4);
    } else if (key === 'turret') {
      const maxT = st.maxTurrets || 1;
      while (defTurrets.length >= maxT) defTurrets.shift();
      defTurrets.push({
        ang: Oc.wrap(L.FACE - view + bank * 0.35),
        life: st.life || 24,
        fireT: 0.1,
        dmg: st.dmg || 12,
        fireRate: Math.max(0.08, st.fireRate || 0.16),
        r: 12,
      });
      shake = Math.max(shake, 8);
      beep(360, 0.14, 'square', 0.1);
      Oc.burst(seatScr.x, seatScr.y, '#c8e8ff', 20, 90, 0.45);
    } else if (key === 'repair') {
      const heal = st.heal || 50;
      beep(600, 0.16, 'sine', 0.11);
      for (const n of nodes) {
        const p = at(n.ang, L.RIM);
        if (n.dead && st.revive) {
          n.dead = false;
          n.hp = Math.round(n.maxHp * 0.45);
          Oc.burst(p.x, p.y, '#9dffb0', 24, 110, 0.55);
        } else if (!n.dead) {
          n.hp = Math.min(n.maxHp, n.hp + heal);
          Oc.burst(p.x, p.y, '#9dffb0', 14, 70, 0.4);
        }
      }
      updateHud();
    } else if (key === 'overdrive') {
      overdriveT = Math.max(overdriveT, st.duration || 6);
      shake = Math.max(shake, 10);
      beep(480, 0.18, 'sawtooth', 0.11);
      Oc.burst(seatScr.x, seatScr.y, '#ff9060', 32, 130, 0.55);
    }

    notifyHud();
    return true;
  }

  function nodesShielded() { return fortressT > 0; }

  function updateHud() {
    const hudWave = document.getElementById('hud-wave');
    const hudBoss = document.getElementById('hud-boss');
    if (kind === 'defense') {
      const alive = nodes.filter(n => !n.dead).length;
      const left = Math.max(0, holdSec - t);
      // Wave from time (same formula as stepDefense) — keep HUD in sync with banners
      const w = Math.max(1, wave | 0);
      if (hudWave) hudWave.textContent = `W${w} · ${alive}/4 · ${left.toFixed(0)}s`;
      if (hudBoss) hudBoss.textContent = T('orbit.defense.hud');
    } else {
      const left = Math.max(0, (assaultHoldSec || 60) - t);
      const stg = assaultStageNow();
      const sh = baseShieldOn ? ' 🛡' : '';
      if (hudWave) hudWave.textContent = `S${stg}/4 · ${cleared}/${need} · ${left.toFixed(0)}s${sh}`;
      if (hudBoss) hudBoss.textContent = T('orbit.assault.hud');
    }
  }

  function pointerX() {
    const inp = Engine.input;
    if (inp && inp.px != null) return inp.px;
    return cartX;
  }
  function pointerY() {
    const inp = Engine.input;
    if (inp && inp.py != null) return inp.py;
    return H() - 100;
  }

  function hurtShip(n) {
    if (!ship || mode !== 'play') return;
    const pl = (typeof Game !== 'undefined' && Game.player) ? Game.player : null;
    if (pl) {
      // Keep player at ship seat for takeHit FX / barrier / invuln
      pl.x = ship.x; pl.y = ship.y;
      if (pl.invuln > 0 || (pl.barrierT && pl.barrierT > 0)) return;
      // Casual auto-super / revive core — reuse vertical rules via damagePlayer
      if (typeof Game !== 'undefined' && Game.damagePlayer) {
        // damagePlayer only applies 1 hit; loop for n
        for (let i = 0; i < n; i++) {
          if (mode !== 'play') break;
          // Manual path: damagePlayer calls endGame on death which is wrong for orbit
          // → takeHit only, then set lose ourselves
          if (pl.invuln > 0 || pl.barrierT > 0) break;
          if (pl.shield <= 0 && pl.revives > 0) {
            pl.revives--;
            pl.shield = Math.max(1, Math.ceil(pl.maxShield / 2));
            pl.invuln = 1.6;
            eBullets = [];
            C().burst(pl.x, pl.y, '#ff6ad0', 28, 150, 0.5);
            setBanner(T('ann.revive'), '#ff6ad0', 1.2);
            if (typeof Game.updateHud === 'function') Game.updateHud();
            break;
          }
          if (pl.takeHit(1)) {
            mode = 'lose'; result = 'lose';
            setBanner(T('orbit.assault.lose'), '#ff6a90', 2.4);
            beep(90, 0.35, 'sawtooth', 0.12);
            ship.hp = 0;
            break;
          }
          ship.hp = pl.shield;
          if (typeof Game.updateHud === 'function') Game.updateHud();
        }
        shake = 12;
        return;
      }
    }
    if (ship.inv > 0) return;
    ship.hp -= n; ship.inv = 1.05; shake = 12;
    C().burst(ship.x, ship.y, '#4ad6ff', 18, 130, 0.45);
    beep(170, 0.1, 'sawtooth', 0.08);
    if (ship.hp <= 0) {
      mode = 'lose'; result = 'lose';
      setBanner(T('orbit.assault.lose'), '#ff6a90', 2.4);
      beep(90, 0.35, 'sawtooth', 0.12);
    }
  }

  /** Fire hangar weapons / player weapons using Weapons.defs (same as vertical). */
  function fireAssaultPlayer(dt) {
    const pl = (typeof Game !== 'undefined' && Game.player) ? Game.player : null;
    if (!pl || !pl.alive) {
      // Fallback triple if no player
      fireT -= dt;
      if (fireT <= 0) {
        fireT = 0.1;
        const lean = ship.bank * 0.12;
        const base = -Math.PI / 2 + lean;
        const spd = 540;
        for (const off of [0, 0.1, -0.1]) {
          const a = base + off;
          bullets.push({
            x: ship.x + Math.cos(a) * 14, y: ship.y + Math.sin(a) * 14,
            vx: Math.cos(a) * spd, vy: Math.sin(a) * spd,
            life: 1.45, r: off ? 2.8 : 4, dmg: off ? 4 : 8, color: '#9fe9ff',
          });
        }
      }
      return;
    }
    // Timers that vertical player.update would handle (no free movement here)
    if (pl.invuln > 0) pl.invuln -= dt;
    if (pl.barrierT > 0) {
      pl.barrierT -= dt;
      if (pl.barrierT < 0) pl.barrierT = 0;
      if (pl.barrierT > 0) pl.invuln = Math.max(pl.invuln, pl.barrierT);
    }
    if (pl.overdriveT > 0) pl.overdriveT -= dt;
    if (pl.fuseT > 0) {
      pl.fuseT -= dt;
      if (pl.fuseT <= 0) { pl.fuseT = 0; pl.fusePartner = null; }
    }
    if (pl.regenInterval > 0 && pl.shield < pl.maxShield) {
      pl.regenT = (pl.regenT || 0) - dt;
      if (pl.regenT <= 0) {
        pl.regenT = pl.regenInterval;
        pl.shield++;
        C().burst(pl.x, pl.y, '#6effc0', 8, 60, 0.25);
        if (typeof Game.updateHud === 'function') Game.updateHud();
      }
    }
    pl.x = ship.x; pl.y = ship.y; pl.bank = ship.bank;
    pl.fireT = (pl.fireT || 0) - dt;
    const w = (typeof Weapons !== 'undefined' && Weapons.defs) ? Weapons.defs[pl.weapon] : null;
    if (!w) return;
    if (pl.fireT > 0) return;
    const wRate = (typeof Meta !== 'undefined' && Meta.weaponRateMult)
      ? Meta.weaponRateMult(Profile.get(), pl.weapon) : 1;
    let cdMul = 1;
    if (pl.fusePartner && pl.fuseT > 0 && Weapons.fusionCdMul) {
      cdMul = Weapons.fusionCdMul(pl.weapon, pl.fusePartner) || 1;
    }
    pl.fireT = w.cooldown * (pl.fireRateMult || 1) * wRate * cdMul * (pl.overdriveT > 0 ? 0.65 : 1);
    let specs;
    if (pl.fusePartner && pl.fuseT > 0 && Weapons.fuseFire) {
      const pLv = pl.weaponLevels[pl.fusePartner] || 1;
      specs = Weapons.fuseFire(pl.weapon, pl.fusePartner, pl, pl.level, pLv);
    } else {
      specs = w.fire(pl, pl.level);
    }
    const mastery = (typeof Meta !== 'undefined' && Meta.weaponDmgMult)
      ? Meta.weaponDmgMult(Profile.get(), pl.weapon) : 1;
    for (const s of specs) {
      // Frame velocities (SPEED~9) → per-second for orbit integration
      let dmg = s.dmg * (pl.dmgMult || 1) * mastery * (1 + (pl.overcharge || 0) * 0.08);
      if (pl.critChance && Math.random() < pl.critChance) dmg *= 2;
      bullets.push({
        x: s.x, y: s.y,
        vx: s.vx * 60, vy: s.vy * 60,
        dmg, r: s.r || 3, color: s.color || '#9fe9ff',
        life: 1.55, pierce: (s.pierce || 0) + (pl.pierceBonus || 0), hits: 0,
        long: !!s.long, homing: !!s.homing, homeId: s.homeId, homeIsBoss: !!s.homeIsBoss,
        nuke: !!s.nuke, nukeR: s.nukeR,
      });
    }
    try { Engine.audio.shoot(); } catch (e) {}
  }

  /* ── Defense: pick raider type by wave / part ── */
  function pickRaidType(waveN) {
    const p = partN;
    const bag = [];
    // Early: mostly divers; later: mixed gunners + shield
    bag.push('dive', 'dive', 'swarm');
    if (waveN >= 2 || p >= 2) bag.push('gunner', 'gunner', 'weaver');
    if (waveN >= 3 || p >= 2) bag.push('gunner', 'shield');
    if (waveN >= 4 || p >= 3) bag.push('heavy', 'shield', 'gunner');
    if (waveN >= 5 || p >= 4) bag.push('heavy', 'heavy', 'shield');
    return bag[(Math.random() * bag.length) | 0];
  }

  function spawnRaider(typeKey) {
    const def = RAID_TYPES[typeKey] || RAID_TYPES.dive;
    const L = layout();
    const Oc = C();
    // Sticky node pick — spread raiders across live hardpoints (not all pile on one)
    const live = nodes.filter(n => !n.dead);
    let targetNode = null;
    if (live.length) {
      // Prefer least-targeted living node
      const load = live.map(n => ({
        n,
        c: raiders.filter(r => r.targetNode === n).length + Math.random() * 0.4,
      }));
      load.sort((a, b) => a.c - b.c);
      targetNode = load[0].n;
    }
    // Spawn offset from target lane — approach from outside, not random full-circle thrash
    let spawnAng = Math.random() * Oc.TAU;
    const approachSide = Math.random() < 0.5 ? 1 : -1;
    if (targetNode) {
      // Moderate side entry so they curve in once, then commit
      const offset = 0.45 + Math.random() * 0.7;
      spawnAng = Oc.wrap(targetNode.ang + approachSide * offset);
    }
    const e = {
      type: typeKey,
      model: def.model,
      role: def.role,
      ang: spawnAng,
      rad: L.OUTER + 0.55 + Math.random() * 0.45,
      hp: Math.round(def.hp * (1 + (wave - 1) * 0.12) * diffScale),
      maxHp: 0,
      r: def.r,
      speed: def.speed * (0.95 + Math.random() * 0.1) * (1 + (wave - 1) * 0.03),
      shootT: 0.9 + Math.random() * 1.0,
      fireCd: def.fireCd || 1.6,
      holdRad: (def.holdRad || 1.55) + (Math.random() - 0.5) * 0.1,
      shoot: !!def.shoot,
      missileHp: def.missileHp || 1,
      missileDmg: def.missileDmg || 11,
      shieldCycle: !!def.shieldCycle,
      shieldOn: def.shieldOn || 2.2,
      shieldOff: def.shieldOff || 3.0,
      shieldT: def.shieldCycle ? 0.5 + Math.random() * 1.5 : 0,
      shielded: false,
      angVel: 0,
      targetNode,
      targetAng: targetNode ? targetNode.ang : Math.random() * Oc.TAU,
      // Fixed lane bias for this raider's life
      spiralLead: approachSide * (0.22 + Math.random() * 0.28),
      phase: Math.random() * Oc.TAU,
      // Only weaver archetype weaves; divers fly straight-ish
      weave: !!def.weave,
    };
    e.maxHp = e.hp;
    raiders.push(e);
  }

  /**
   * Smooth 360° turn: accel / friction / dual-rate zones.
   * Center = fine aim (slow), edge = cruise, far edge = boost.
   * Q/E always available. Shift = precision (lower max).
   */
  function updateDefenseSpin(dt, L, Oc) {
    const ww = W();
    let px = pointerX();
    const precision = !!(keys()['ShiftLeft'] || keys()['ShiftRight'] || (Engine.input && Engine.input.focus));
    // Horizontal rail seat follow (aim assist band)
    const moveSp = precision ? 160 : 420;
    if (keys()['ArrowLeft'] || keys()['KeyA']) px -= moveSp * dt;
    if (keys()['ArrowRight'] || keys()['KeyD']) px += moveSp * dt;
    px = Oc.clamp(px, 18, ww - 18);
    if (Engine.input) Engine.input.px = px;
    cartX = Oc.lerp(cartX, px, Math.min(1, 22 * dt));

    // Stick −1..1 with deadzone + cubic ease (geometry-wars style response)
    const raw = Oc.clamp((cartX / ww - 0.5) * 2, -1, 1);
    const dead = 0.10;
    let stick = 0;
    if (Math.abs(raw) > dead) {
      const u = (Math.abs(raw) - dead) / (1 - dead);
      // Dual curve: soft start, then boost past 0.55
      const soft = u * u;
      const boost = u > 0.55 ? ((u - 0.55) / 0.45) ** 1.6 * 0.85 : 0;
      stick = Math.sign(raw) * Math.min(1, soft * 0.72 + boost);
    }

    const maxW = precision ? L.OMEGA * 0.42 : L.OMEGA;
    const targetVel = stick * maxW;
    // Acceleration toward target (snappy), stronger brake when reversing
    const accel = precision ? 5.5 : 9.5;
    const brake = precision ? 8 : 14;
    const sameDir = Math.sign(angVel) === Math.sign(targetVel) || Math.abs(targetVel) < 0.02;
    const rate = sameDir ? accel : brake;
    if (Math.abs(targetVel) < 0.02) {
      // Friction coast-stop
      angVel *= Math.exp(-10 * dt);
      if (Math.abs(angVel) < 0.02) angVel = 0;
    } else {
      angVel += (targetVel - angVel) * Math.min(1, rate * dt);
    }

    // Q/E direct nudge (always reliable)
    if (keys()['KeyQ']) angVel -= maxW * 1.8 * dt;
    if (keys()['KeyE']) angVel += maxW * 1.8 * dt;
    angVel = Oc.clamp(angVel, -maxW * 1.15, maxW * 1.15);

    view = Oc.wrap(view - angVel * dt);
  }

  function firePlayerShot(seatScr, L, bank) {
    const gs = defGun || { fireRate: 0.09, dmgMain: 12, dmgSide: 7, bulletSpd: 580, pattern: 'triple', optics: 0 };
    const od = overdriveT > 0;
    const prof = (typeof Profile !== 'undefined') ? Profile.get() : {};
    const odSt = od && typeof Meta !== 'undefined' && Meta.defSuperStats
      ? Meta.defSuperStats(prof, 'overdrive') : null;
    const dmgMul = od && odSt ? (odSt.dmgMul || 1.3) : 1;
    const lean = bank * 0.14;
    const base = L.FACE + lean;
    const spd = (gs.bulletSpd || 580) * (od ? 1.08 : 1);
    const opt = (gs.optics || 0) * 0.012;
    const push = (off, dmg, r, life) => {
      const a = base + off;
      bullets.push({
        x: seatScr.x + Math.cos(a) * 18, y: seatScr.y + Math.sin(a) * 18,
        vx: Math.cos(a) * spd, vy: Math.sin(a) * spd,
        life: life || 1.35, r: r, dmg: Math.round(dmg * dmgMul),
      });
    };
    const pat = gs.pattern || 'triple';
    if (pat === 'single') {
      push(0, gs.dmgMain, 5.2, 1.55);
    } else if (pat === 'dual') {
      push(0.055, gs.dmgMain, 4.0, 1.4);
      push(-0.055, gs.dmgSide || gs.dmgMain, 4.0, 1.4);
    } else if (pat === 'spread') {
      const s = 0.11 + opt;
      for (const off of [0, s, -s, s * 2, -s * 2]) {
        const side = !!off;
        push(off, side ? gs.dmgSide : gs.dmgMain, side ? 2.4 : 3.4, 1.15);
      }
    } else {
      const s = 0.08 + opt * 0.5;
      push(0, gs.dmgMain, 4.2, 1.35);
      push(s, gs.dmgSide, 2.8, 1.25);
      push(-s, gs.dmgSide, 2.8, 1.25);
    }
  }

  /* ───────────── DEFENSE ───────────── */
  function stepDefense(dt) {
    const L = layout();
    const Oc = C();
    const prevW = wave;
    wave = 1 + Math.floor(t / Math.max(11, 16 - partN));
    // Keep center banner and HUD wave label in lockstep
    if (wave !== prevW && mode === 'play' && wave > lastDefenseWave) {
      lastDefenseWave = wave;
      setBanner(Tf('ann.wave', wave), '#7dffa0', 1.45);
    }
    if (fortressT > 0) fortressT = Math.max(0, fortressT - dt);
    if (overdriveT > 0) overdriveT = Math.max(0, overdriveT - dt);
    if (superFlashT > 0) superFlashT = Math.max(0, superFlashT - dt);
    for (const k of Object.keys(defCooldowns)) {
      if (defCooldowns[k] > 0) defCooldowns[k] = Math.max(0, defCooldowns[k] - dt);
    }
    consumeCycleInput();
    updateDefenseSpin(dt, L, Oc);

    // Gun stays near the crown (FACE); small bank lean only — turning is world view, not rail skate
    const bank = Oc.clamp((cartX - W() * 0.5) / (W() * 0.45), -1, 1);
    const slide = bank * 0.18;
    const seatScr = Oc.polarXY(L.FACE + slide - view, L.RIM, view, L.CX, L.CY, L.RX, L.RY, L.FACE);

    const gs = defGun || { fireRate: 0.09 };
    const od = overdriveT > 0;
    const prof = (typeof Profile !== 'undefined') ? Profile.get() : {};
    const odSt = od && typeof Meta !== 'undefined' && Meta.defSuperStats
      ? Meta.defSuperStats(prof, 'overdrive') : null;
    const rateMul = od && odSt ? (odSt.rateMul || 0.5) : 1;

    fireT -= dt;
    if (fireT <= 0) {
      firePlayerShot(seatScr, L, bank);
      fireT = Math.max(0.05, ((gs.fireRate || 0.09) - wave * 0.004) * rateMul);
    }

    // Deployed auto-turrets
    for (let i = defTurrets.length - 1; i >= 0; i--) {
      const tr = defTurrets[i];
      tr.life -= dt;
      if (tr.life <= 0) { defTurrets.splice(i, 1); continue; }
      tr.fireT -= dt;
      if (tr.fireT > 0) continue;
      tr.fireT = tr.fireRate;
      // Aim nearest raider in forward hemisphere
      let best = null, bestD = 1e9;
      const tp = at(tr.ang, L.RIM);
      for (const e of raiders) {
        const p = at(e.ang, e.rad);
        const d = (p.x - tp.x) ** 2 + (p.y - tp.y) ** 2;
        if (d < bestD) { bestD = d; best = p; }
      }
      if (!best) {
        const a = L.FACE;
        bullets.push({
          x: tp.x + Math.cos(a) * 12, y: tp.y + Math.sin(a) * 12,
          vx: Math.cos(a) * 480, vy: Math.sin(a) * 480,
          life: 1.1, r: 3.2, dmg: tr.dmg, super: true,
        });
      } else {
        const a = Math.atan2(best.y - tp.y, best.x - tp.x);
        bullets.push({
          x: tp.x + Math.cos(a) * 12, y: tp.y + Math.sin(a) * 12,
          vx: Math.cos(a) * 500, vy: Math.sin(a) * 500,
          life: 1.15, r: 3.2, dmg: tr.dmg, super: true,
        });
      }
    }

    // Player bullets vs raiders + shootable missiles
    for (let i = bullets.length - 1; i >= 0; i--) {
      const b = bullets[i];
      b.x += b.vx * dt; b.y += b.vy * dt; b.life -= dt;
      if (b.life <= 0 || b.y < -50 || b.x < -50 || b.x > W() + 50) { bullets.splice(i, 1); continue; }

      // Shootable hostile ordnance first
      let hitMis = false;
      for (let j = eBullets.length - 1; j >= 0; j--) {
        const m = eBullets[j];
        if (!m.shootable) continue;
        if ((b.x - m.x) ** 2 + (b.y - m.y) ** 2 < (b.r + m.r + 4) ** 2) {
          m.hp = (m.hp || 1) - 1;
          Oc.burst(m.x, m.y, '#ffd24a', 4, 50, 0.2);
          bullets.splice(i, 1); hitMis = true;
          if (m.hp <= 0) {
            Oc.burst(m.x, m.y, '#ff8040', 10, 80, 0.35);
            eBullets.splice(j, 1);
            beep(720, 0.04, 'square', 0.04);
          }
          break;
        }
      }
      if (hitMis) continue;

      for (let j = raiders.length - 1; j >= 0; j--) {
        const e = raiders[j];
        if (e.shielded) continue; // shield blocks damage
        const p = at(e.ang, e.rad);
        if ((b.x - p.x) ** 2 + (b.y - p.y) ** 2 < (e.r + b.r) ** 2) {
          e.hp -= b.dmg;
          Oc.burst(p.x, p.y, '#ffd24a', 5, 70, 0.22);
          bullets.splice(i, 1);
          if (e.hp <= 0) {
            Oc.burst(p.x, p.y, '#ff8a40', 18, 130, 0.5);
            raiders.splice(j, 1);
            beep(650, 0.05, 'square', 0.05);
          }
          break;
        }
      }
    }

    // Wave spawns — denser deeper in campaign (soft cap keeps lanes readable)
    spawnT -= dt;
    const raidCap = 10 + Math.min(6, wave) + partN;
    if (spawnT <= 0) {
      const baseCd = Math.max(0.42, 1.35 - wave * 0.05 - partN * 0.035);
      spawnT = baseCd / diffScale;
      if (raiders.length < raidCap) {
        const nSpawn = 1
          + (wave > 3 && raiders.length < raidCap - 2 ? 1 : 0)
          + (wave > 5 && Math.random() < 0.22 ? 1 : 0);
        for (let k = 0; k < nSpawn && raiders.length < raidCap; k++) {
          spawnRaider(pickRaidType(wave));
        }
      }
    }

    // Raider AI — readable approach lanes (not fly-swarm).
    // Sticky targets, modest curve, then commit; no per-frame sin thrash.
    for (let i = raiders.length - 1; i >= 0; i--) {
      const e = raiders[i];

      // Shield cycle (gunners with shieldCycle only)
      if (e.shieldCycle) {
        e.shieldT -= dt;
        if (e.shieldT <= 0) {
          e.shielded = !e.shielded;
          e.shieldT = e.shielded ? e.shieldOn : e.shieldOff;
        }
      }

      // Retarget only if node died — keep lane stable (no constant re-pick)
      let best = e.targetNode && !e.targetNode.dead ? e.targetNode : null;
      if (!best) {
        const liveN = nodes.filter(n => !n.dead);
        if (!liveN.length) { raiders.splice(i, 1); continue; }
        // Nearest living node by angle (stable formation)
        let pick = liveN[0], bestD = 1e9;
        for (const n of liveN) {
          const d = Math.abs(Oc.angDiff(n.ang, e.ang));
          const load = raiders.filter(r => r !== e && r.targetNode === n).length;
          const sc = d + load * 0.35;
          if (sc < bestD) { bestD = sc; pick = n; }
        }
        best = pick;
        e.targetNode = best;
        e.targetAng = best.ang;
        // Fixed approach side for this life — no flip mid-flight
        if (e.spiralLead == null || e.spiralLead === 0) {
          e.spiralLead = (Math.random() < 0.5 ? 1 : -1) * (0.25 + Math.random() * 0.35);
        }
      }

      // Approach: small angular lead while far, lock onto node when close
      const close = e.role === 'dive'
        ? (e.rad < L.RIM + 0.65)
        : (e.rad < (e.holdRad || 1.55) + 0.28);
      const leadFade = Oc.clamp((e.rad - L.RIM) / 1.8, 0, 1);
      const lead = close ? 0 : (e.spiralLead || 0) * leadFade * 0.85;
      const wantAng = Oc.wrap(best.ang + lead);

      // Gentle steering — bank from real turn rate only (no added sine weave)
      const err = Oc.angDiff(wantAng, e.ang);
      const maxTurn = e.role === 'orbit' ? 0.7 : 1.05;
      const desired = Oc.clamp(err * 1.35, -maxTurn, maxTurn);
      e.angVel = Oc.lerp(e.angVel || 0, desired, Math.min(1, 2.4 * dt));
      // Weavers only: soft lateral sway (others fly clean)
      if (e.weave) {
        e.angVel += Math.sin(t * 1.6 + e.phase) * 0.18;
      }
      e.ang = Oc.wrap(e.ang + e.angVel * dt);

      if (e.role === 'orbit') {
        const hold = e.holdRad;
        if (e.rad > hold + 0.05) {
          // Radial approach + mild spiral (readable curve, not orbit thrash)
          e.rad -= e.speed * 0.55 * dt;
        } else {
          // Hold band: slow cruise along the ring in one direction
          e.rad = Oc.lerp(e.rad, hold, Math.min(1, 2.2 * dt));
          const cruise = 0.18 + e.speed * 0.12;
          e.ang = Oc.wrap(e.ang + cruise * Math.sign(e.spiralLead || 1) * dt);
          e.angVel = cruise * Math.sign(e.spiralLead || 1) * 0.5;
        }
        if (e.shoot && e.rad < L.OUTER - 0.15) {
          e.shootT -= dt;
          if (e.shootT <= 0 && !e.shielded) {
            e.shootT = e.fireCd * (0.9 + Math.random() * 0.2);
            const p = at(e.ang, e.rad);
            const aimTo = Math.random() < 0.4 ? seatScr : at(best.ang, L.RIM);
            const aim = Math.atan2(aimTo.y - p.y, aimTo.x - p.x);
            const spd = 135 + Math.random() * 30;
            eBullets.push({
              x: p.x, y: p.y,
              vx: Math.cos(aim) * spd, vy: Math.sin(aim) * spd,
              life: 3.4, r: 6.5,
              shootable: true, hp: e.missileHp, dmg: e.missileDmg,
              kind: 'missile',
            });
          }
        }
      } else {
        // Dive: radial commit, steering already aims at node
        e.rad -= e.speed * (close ? 1.05 : 0.68) * dt;
        if (e.rad <= L.RIM + 0.04) {
          const tp = at(best.ang, L.RIM);
          raiders.splice(i, 1);
          if (nodesShielded()) {
            Oc.burst(tp.x, tp.y, '#7dffa0', 14, 90, 0.4);
            beep(700, 0.05, 'sine', 0.05);
          } else {
            best.hp -= 26;
            Oc.burst(tp.x, tp.y, '#ff6a7a', 18, 110, 0.45);
            shake = 10;
            if (best.hp <= 0) {
              best.dead = true; best.hp = 0;
              nodesLost = countNodesLost();
              Oc.burst(tp.x, tp.y, '#ff2030', 32, 170, 0.75);
              beep(100, 0.22, 'sawtooth', 0.1);
            }
            updateHud();
          }
          continue;
        }
      }
    }

    // Hostile bullets / missiles
    for (let i = eBullets.length - 1; i >= 0; i--) {
      const b = eBullets[i];
      // Mild homing for missiles
      if (b.shootable && b.kind === 'missile') {
        let aimN = null, bestD = 1e9;
        for (const n of nodes) {
          if (n.dead) continue;
          const p = at(n.ang, L.RIM);
          const d = (p.x - b.x) ** 2 + (p.y - b.y) ** 2;
          if (d < bestD) { bestD = d; aimN = p; }
        }
        if (aimN) {
          const want = Math.atan2(aimN.y - b.y, aimN.x - b.x);
          const cur = Math.atan2(b.vy, b.vx);
          const diff = Oc.angDiff(want, cur);
          const na = cur + Oc.clamp(diff, -1.8 * dt, 1.8 * dt);
          const sp = Math.hypot(b.vx, b.vy) || 150;
          b.vx = Math.cos(na) * sp;
          b.vy = Math.sin(na) * sp;
        }
      }
      b.x += b.vx * dt; b.y += b.vy * dt; b.life -= dt;
      if (b.life <= 0) { eBullets.splice(i, 1); continue; }
      let hit = false;
      for (const n of nodes) {
        if (n.dead) continue;
        const p = at(n.ang, L.RIM);
        if ((b.x - p.x) ** 2 + (b.y - p.y) ** 2 < (n.r + b.r) ** 2) {
          eBullets.splice(i, 1); hit = true;
          if (nodesShielded()) {
            Oc.burst(p.x, p.y, '#7dffa0', 6, 45, 0.25);
          } else {
            n.hp -= b.dmg || 11;
            Oc.burst(p.x, p.y, '#ffaa70', 7, 55, 0.28);
            if (n.hp <= 0) {
              n.dead = true; n.hp = 0;
              nodesLost = countNodesLost();
              Oc.burst(p.x, p.y, '#ff2030', 26, 150, 0.65);
            }
            updateHud();
          }
          break;
        }
      }
      if (hit) continue;
      if ((b.x - seatScr.x) ** 2 + (b.y - seatScr.y) ** 2 < 22 * 22) {
        eBullets.splice(i, 1); shake = 6;
        Oc.burst(seatScr.x, seatScr.y, '#7dffa0', 8, 50, 0.25);
      }
    }

    nodesLost = countNodesLost();
    if (nodes.every(n => n.dead)) {
      mode = 'lose'; result = 'lose';
      nodesLost = 4;
      setBanner(T('orbit.defense.lose'), '#ff6a90', 2.4);
      beep(80, 0.4, 'sawtooth', 0.12);
    }
    if (t >= holdSec && mode === 'play') {
      mode = 'win'; result = 'win';
      nodesLost = countNodesLost();
      setBanner(T('orbit.defense.win'), '#7dffa0', 2.4);
      beep(600, 0.3, 'sine', 0.1);
      updateHud();
    }
  }

  /* ───────────── ASSAULT ───────────── */
  function fireAssaultGun(g, p, Oc) {
    const aim = Math.atan2(ship.y - p.y, ship.x - p.x);
    const stg = assaultStageNow();
    const spd = (g.bulletSpd || 190) + Math.random() * 28 + partN * 5 + stg * 4;
    const r = g.bulletR || 4.5;
    const pat = g.pattern || 'triple';
    const push = (a, life, br) => {
      eBullets.push({
        x: p.x, y: p.y,
        vx: Math.cos(a) * spd, vy: Math.sin(a) * spd,
        life: life || 3.0, r: br || r,
      });
    };
    if (pat === 'fan') {
      const n = p.face > 0.7 ? 6 : 5;
      const spread = 0.15 + stg * 0.01;
      for (let k = 0; k < n; k++) push(aim + (k - (n - 1) / 2) * spread, 3.1);
    } else if (pat === 'pulse') {
      // Twin energy bolts + delayed mid
      push(aim - 0.08, 2.8, r * 0.9);
      push(aim + 0.08, 2.8, r * 0.9);
      push(aim, 3.2, r * 1.15);
      if (stg >= 3) {
        push(aim - 0.18, 2.4, r * 0.75);
        push(aim + 0.18, 2.4, r * 0.75);
      }
    } else {
      // triple / light default
      const n = p.face > 0.75 ? 3 : 2;
      const spread = 0.09;
      for (let k = 0; k < n; k++) push(aim + (k - (n - 1) / 2) * spread, 3.0);
    }
  }

  function stepAssault(dt) {
    const L = layout();
    const Oc = C();
    const PLAY = { x0: 22, x1: W() - 22, y0: L.CY + L.RY + 40, y1: H() - 42 };

    tickBaseShield(dt);
    // Smooth hull yaw (view can jump when stick snaps — don't hard-lock model)
    tickStationYaw(dt, view * 0.32);

    const sp = (keys()['ShiftLeft'] || keys()['ShiftRight'] || (Engine.input && Engine.input.focus)) ? 170 : 340;
    let px = pointerX(), py = pointerY();
    if (keys()['ArrowLeft'] || keys()['KeyA']) px -= sp * dt;
    if (keys()['ArrowRight'] || keys()['KeyD']) px += sp * dt;
    if (keys()['ArrowUp'] || keys()['KeyW']) py -= sp * dt;
    if (keys()['ArrowDown'] || keys()['KeyS']) py += sp * dt;
    px = Oc.clamp(px, PLAY.x0, PLAY.x1);
    py = Oc.clamp(py, PLAY.y0, PLAY.y1);
    if (Engine.input) { Engine.input.px = px; Engine.input.py = py; }

    const ox = ship.x;
    ship.x = Oc.lerp(ship.x, px, Math.min(1, 16 * dt));
    ship.y = Oc.lerp(ship.y, py, Math.min(1, 16 * dt));
    ship.bank = Oc.lerp(ship.bank, Oc.clamp((ship.x - ox) / 7, -1, 1), 0.28);
    if (ship.inv > 0) ship.inv -= dt;

    const bias = Oc.edgeAxis(ship.x, W(), 0.18);
    let spin = Oc.spinInput(bias, null, L.OMEGA);
    const stick = Oc.clamp((ship.x / W() - 0.5) * 2, -1, 1);
    if (Math.abs(stick) > 0.16) {
      const u = (Math.abs(stick) - 0.16) / 0.84;
      spin += Math.sign(stick) * u * u * L.OMEGA * 0.28;
    }
    if (keys()['KeyQ']) spin -= L.OMEGA * 0.8;
    if (keys()['KeyE']) spin += L.OMEGA * 0.8;
    view = Oc.wrap(view + spin * dt);

    // Sync ship seat + fire hangar weapons / player arsenal
    {
      const pl = (typeof Game !== 'undefined' && Game.player) ? Game.player : null;
      if (pl) { pl.x = ship.x; pl.y = ship.y; pl.bank = ship.bank; }
    }
    fireAssaultPlayer(dt);
    // Modules (drones / point-def) — reuse vertical combat companions
    if (typeof Game !== 'undefined' && Game.orbitModulesTick) Game.orbitModulesTick(dt);

    for (let i = bullets.length - 1; i >= 0; i--) {
      const b = bullets[i];
      // Homing (missiles) — soft chase ship-local targets (hangar craft)
      if (b.homing && hangar.length) {
        let best = null, bd = 1e12;
        for (const d of hangar) {
          const dx = d.x - b.x, dy = d.y - b.y, dd = dx * dx + dy * dy;
          if (dd < bd) { bd = dd; best = d; }
        }
        if (best) {
          const a = Math.atan2(best.y - b.y, best.x - b.x);
          const spd = Math.hypot(b.vx, b.vy) || 420;
          b.vx = Oc.lerp(b.vx, Math.cos(a) * spd, 0.08);
          b.vy = Oc.lerp(b.vy, Math.sin(a) * spd, 0.08);
        }
      }
      b.x += b.vx * dt; b.y += b.vy * dt; b.life -= dt;
      if (b.life <= 0 || b.y < -40 || b.x < -40 || b.x > W() + 40) { bullets.splice(i, 1); continue; }
      let hit = false;
      // Rim sockets — only front-ish face (backside can't be sniped through hull)
      for (const s of sockets) {
        if (s.dead) continue;
        const p = at(s.ang, L.RIM);
        if (p.face < 0.18) continue; // far side / occluded by hull
        if ((b.x - p.x) ** 2 + (b.y - p.y) ** 2 < (s.r + b.r) ** 2) {
          hit = true;
          if (baseShieldOn) {
            if (baseShield) baseShield.flash = 0.16;
            Oc.burst(p.x, p.y, '#7de0ff', 4, 50, 0.2);
            beep(420, 0.03, 'sine', 0.035);
            if (!b.pierce || (b.hits = (b.hits || 0) + 1) > b.pierce) bullets.splice(i, 1);
          } else {
            s.hp -= b.dmg;
            Oc.burst(p.x, p.y, '#ffd24a', 5, 70, 0.25);
            if (!b.pierce || (b.hits = (b.hits || 0) + 1) > b.pierce) bullets.splice(i, 1);
            if (s.hp <= 0) {
              s.dead = true; cleared++; shake = 14;
              Oc.burst(p.x, p.y, '#ff4a6a', 30, 190, 0.65);
              beep(240, 0.14, 'square', 0.09);
              dropAssaultLoot(p.x, p.y, 0.5);
              updateHud();
              if (cleared >= need) finalizeAssaultWin();
            }
          }
          break;
        }
      }
      if (hit) continue;
      for (const g of guns) {
        if (g.dead) continue;
        const p = at(g.ang, L.RIM);
        if (p.face < 0.12) continue;
        if ((b.x - p.x) ** 2 + (b.y - p.y) ** 2 < (g.r + b.r) ** 2) {
          g.hp -= b.dmg;
          Oc.burst(p.x, p.y, '#ffaa60', 5, 60, 0.22);
          hit = true;
          if (!b.pierce || (b.hits = (b.hits || 0) + 1) > b.pierce) bullets.splice(i, 1);
          if (g.hp <= 0) {
            g.dead = true; shake = 8;
            Oc.burst(p.x, p.y, '#ff8040', 22, 150, 0.55);
            beep(320, 0.1, 'square', 0.08);
            dropAssaultLoot(p.x, p.y, 0.42);
          }
          break;
        }
      }
      if (hit) continue;
      // Core hull blocks tunneling — must orbit to clear far sockets
      if (hitAssaultHull(b, L)) {
        Oc.burst(b.x, b.y, '#ff8090', 5, 55, 0.22);
        if (baseShieldOn && baseShield) baseShield.flash = 0.1;
        bullets.splice(i, 1);
        continue;
      }
      for (let j = hangar.length - 1; j >= 0; j--) {
        const d = hangar[j];
        const hx = d.x, hy = d.y;
        if ((b.x - hx) ** 2 + (b.y - hy) ** 2 < (d.r + b.r) ** 2) {
          d.hp -= b.dmg;
          Oc.burst(hx, hy, '#ffaa60', 4, 50, 0.2);
          if (!b.pierce || (b.hits = (b.hits || 0) + 1) > b.pierce) bullets.splice(i, 1);
          if (d.hp <= 0) {
            Oc.burst(hx, hy, '#ff6a40', 16, 120, 0.45);
            dropAssaultLoot(hx, hy, 0.32);
            hangar.splice(j, 1);
          }
          break;
        }
      }
    }

    for (const g of guns) {
      if (g.dead) continue;
      // Slow orbit drift so guns aren't static turrets
      g.ang = Oc.wrap(g.ang + Math.sin(t * 0.55 + (g.pulse || 0)) * 0.12 * dt);
      const p = at(g.ang, L.RIM);
      g.shootT -= dt;
      if (g.shootT > 0) continue;
      if (p.face < 0.4) { g.shootT = 0.28; continue; }
      const stg = assaultStageNow();
      const baseCd = g.fireCd || 1.0;
      g.shootT = Math.max(0.45, baseCd - partN * 0.04 - stg * 0.05 + Math.random() * 0.28);
      fireAssaultGun(g, p, Oc);
    }

    hangarT -= dt;
    if (hangarT <= 0) {
      const stg = assaultStageNow();
      hangarT = Math.max(0.75, 2.35 - t * 0.035 - partN * 0.06 - stg * 0.08);
      spawnHangarCraft();
      // Later stages: chance of double launch
      if (stg >= 3 && Math.random() < 0.35) spawnHangarCraft();
    }
    // Hangar sorties: smooth screen-space pursuit toward the player (not radial fly-off)
    for (let i = hangar.length - 1; i >= 0; i--) {
      const d = hangar[i];
      d.life = (d.life || 12) - dt;
      if (d.life <= 0 || d.x < -60 || d.x > W() + 60 || d.y < -60 || d.y > H() + 60) {
        hangar.splice(i, 1); continue;
      }
      const dx = ship.x - d.x, dy = ship.y - d.y;
      const dist = Math.hypot(dx, dy) || 1;
      let tSpd = d.spd || 140;
      if (d.kamikaze) tSpd *= 1.15;
      // Desired velocity toward player + optional weave
      let tvx = (dx / dist) * tSpd;
      let tvy = (dy / dist) * tSpd;
      if (d.weave) {
        const side = Math.sin(t * 3.2 + d.phase) * 55;
        // perpendicular to pursuit
        tvx += (-dy / dist) * side;
        tvy += (dx / dist) * side;
      }
      const turn = (d.turn || 2.0) * dt;
      d.vx = Oc.lerp(d.vx || 0, tvx, Math.min(1, turn));
      d.vy = Oc.lerp(d.vy || 0, tvy, Math.min(1, turn));
      d.x += d.vx * dt;
      d.y += d.vy * dt;
      const hitR = d.kamikaze ? 28 : 24;
      if ((d.x - ship.x) ** 2 + (d.y - ship.y) ** 2 < hitR * hitR) {
        hurtShip(1);
        Oc.burst(d.x, d.y, '#ff5040', 16, 110, 0.4);
        hangar.splice(i, 1);
        continue;
      }
      if (!d.shoot) continue;
      d.shootT -= dt;
      if (d.shootT <= 0 && dist < 320) {
        d.shootT = (d.fireCd || 1.15) + Math.random() * 0.4;
        const a = Math.atan2(ship.y - d.y, ship.x - d.x);
        const spd = 195 + Math.random() * 35 + partN * 4;
        eBullets.push({
          x: d.x, y: d.y, vx: Math.cos(a) * spd, vy: Math.sin(a) * spd,
          life: 2.6, r: d.type === 'armor' ? 4.2 : 3.5,
        });
        if ((partN >= 2 || assaultStageNow() >= 3) && Math.random() < 0.5) {
          const a2 = a + (Math.random() - 0.5) * 0.22;
          eBullets.push({
            x: d.x, y: d.y, vx: Math.cos(a2) * (spd * 0.9), vy: Math.sin(a2) * (spd * 0.9),
            life: 2.2, r: 3,
          });
        }
      }
    }

    // Local drops — magnet toward player, collect into Game power-up effects
    for (let i = assaultDrops.length - 1; i >= 0; i--) {
      const p = assaultDrops[i];
      p.t += dt; p.life -= dt;
      p.bob = Math.sin(p.t * 4) * 3;
      const pl = (typeof Game !== 'undefined' && Game.player) ? Game.player : ship;
      if (pl) {
        const range = 130 * (pl.magnetMult || 1);
        const d2 = (p.x - pl.x) ** 2 + (p.y - pl.y) ** 2;
        if (d2 < range * range) {
          const a = Math.atan2(pl.y - p.y, pl.x - p.x);
          const pull = Oc.clamp(220 - Math.sqrt(d2), 0, 200);
          p.x += Math.cos(a) * pull * dt;
          p.y += Math.sin(a) * pull * dt;
        } else {
          p.y += 40 * dt;
        }
        if (d2 < 22 * 22) {
          // Apply pickup via Game when available
          if (typeof Game !== 'undefined' && Game.orbitCollectDrop) {
            Game.orbitCollectDrop(p);
          } else if (typeof Game !== 'undefined' && Game.dropPowerUp) {
            // fallback: spawn into vertical pool (won't draw mid-orbit) — just score
            try { Game.floatText(p.x, p.y, '+', '#ffe24a'); } catch (e) {}
          }
          assaultDrops.splice(i, 1);
          continue;
        }
      }
      if (p.life <= 0 || p.y > H() + 30) assaultDrops.splice(i, 1);
    }

    for (let i = eBullets.length - 1; i >= 0; i--) {
      const b = eBullets[i];
      b.x += b.vx * dt; b.y += b.vy * dt; b.life -= dt;
      if (b.life <= 0) { eBullets.splice(i, 1); continue; }
      // Point-def modules intercept nearby bullets
      if (typeof Game !== 'undefined' && Game.orbitPointDefTry && Game.orbitPointDefTry(b.x, b.y)) {
        eBullets.splice(i, 1);
        Oc.burst(b.x, b.y, '#7de0ff', 5, 40, 0.2);
        continue;
      }
      const pl = (typeof Game !== 'undefined' && Game.player) ? Game.player : null;
      const inv = pl ? (pl.invuln > 0 || (pl.barrierT && pl.barrierT > 0)) : (ship.inv > 0);
      if (!inv && (b.x - ship.x) ** 2 + (b.y - ship.y) ** 2 < (13 + b.r) ** 2) {
        eBullets.splice(i, 1); hurtShip(1);
      }
    }

    spawnSocketT -= dt;
    if (spawnSocketT <= 0 && cleared < need) {
      const stg = assaultStageNow();
      spawnSocketT = Math.max(2.4, 3.8 - partN * 0.12 - stg * 0.12 - t * 0.008);
      // Spawn sockets on varied arcs (not always same back hemisphere)
      const base = (L.FACE - view) + Math.PI;
      spawnSocket(base + (Math.random() - 0.5) * 1.6);
      if ((partN >= 3 || stg >= 3) && Math.random() < 0.4) {
        spawnSocket(base + (Math.random() < 0.5 ? 1.1 : -1.1));
      }
      updateHud();
    }
    spawnGunT -= dt;
    if (spawnGunT <= 0) {
      const stg = assaultStageNow();
      spawnGunT = Math.max(3.2, 5.6 - partN * 0.22 - stg * 0.25);
      spawnGun(Math.random() * Oc.TAU);
    }

    // 4 timed stages + fail if clock runs out before sockets cleared
    const stg = assaultStageNow();
    if (stg !== lastAssaultStage && mode === 'play') {
      lastAssaultStage = stg;
      setBanner(Tf('orbit.assault.stage', stg), stg >= 4 ? '#ff9a3d' : '#ffb0b8', 1.5);
      // Stage bump: brief shield pulse so pressure ramps cleanly
      if (!baseShieldOn) {
        baseShieldOn = true;
        baseShieldT = Math.max(baseShieldT, 2.0 + stg * 0.3);
      }
      // Harden living sockets toward new stage budget (keep relative damage)
      const newMax = socketHpBase();
      for (const s of sockets) {
        if (s.dead) continue;
        const u = s.maxHp > 0 ? s.hp / s.maxHp : 1;
        s.maxHp = Math.max(s.maxHp, newMax);
        s.hp = Math.min(s.maxHp, Math.max(s.hp, Math.round(s.maxHp * u)));
      }
    }
    if (t >= assaultHoldSec && mode === 'play') {
      if (cleared >= need) finalizeAssaultWin();
      else {
        mode = 'lose'; result = 'lose';
        setBanner(T('orbit.assault.lose'), '#ff6a90', 2.4);
        beep(90, 0.35, 'sawtooth', 0.12);
        updateHud();
      }
    }
  }

  function step(dt) {
    if (mode === 'idle') return null;
    t += dt;
    if (shake > 0) shake = Math.max(0, shake - 45 * dt);
    // Fade stage/wave toasts (same spirit as Game.announce)
    if (bannerT > 0) {
      bannerT -= dt;
      if (bannerT <= 0) { bannerT = 0; banner = ''; }
    }
    if (mode !== 'play') {
      C().updateFx(dt);
      return result;
    }
    if (kind === 'defense') stepDefense(dt);
    else stepAssault(dt);
    C().updateFx(dt);
    // Wave/timer labels (local) + Game HUD (ord CD overlays).
    // Bugfix: needHud used to call only local updateHud — CD text never ticked live.
    let needCdHud = false;
    if (kind === 'defense') {
      for (const k of Object.keys(defCooldowns)) {
        if (defCooldowns[k] > 0) { needCdHud = true; break; }
      }
      if (fortressT > 0 || overdriveT > 0) needCdHud = true;
    }
    const tick4 = (t * 4 | 0) !== ((t - dt) * 4 | 0);
    if (needCdHud || tick4) updateHud();       // wave · nodes · timer
    if (needCdHud || tick4) notifyHud();       // Game.updateHud → ord CD seconds
    return result;
  }

  function draw(ctx) {
    if (mode === 'idle' || !kind) return;
    const L = layout();
    const Oc = C();
    const ww = W(), hh = H();

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ww, hh);

    const bg = ctx.createLinearGradient(0, 0, 0, hh);
    if (kind === 'defense') {
      bg.addColorStop(0, '#050814'); bg.addColorStop(0.55, '#0a1420'); bg.addColorStop(1, '#061412');
    } else {
      bg.addColorStop(0, '#1a0810'); bg.addColorStop(0.5, '#120818'); bg.addColorStop(1, '#080610');
    }
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, ww, hh);

    // Stars track view almost 1:1 so space (not only bots) rotates when you turn
    Oc.drawStars(ctx, stars, ww, hh, L.CX, kind === 'defense' ? hh * 0.25 : L.CY,
      view * (kind === 'defense' ? 0.92 : 0.35), 1 / 60);

    ctx.save();
    ctx.translate((Math.random() - 0.5) * shake, (Math.random() - 0.5) * shake);

    const atkYaw = kind === 'assault' ? stationYaw : view;
    Oc.drawBigStation(ctx, L.CX, L.CY, L.RX, L.RY,
      kind === 'defense' ? -view : atkYaw, t, kind === 'defense' ? 'defense' : 'assault');

    // Station fills most of the rail disk so the turret reads as riding the hull.
    // Defense: yaw fully locked to -view so the hull spins with the world, not only raiders.
    // Assault: slightly smaller + smoothed yaw (no snap/jitter).
    const voxKey = kind === 'defense' ? 'station' : (assaultModel || 'relay');
    const stationR = kind === 'defense'
      ? Math.min(L.RX, L.RY) * 0.92
      : Math.min(L.RX, L.RY) * 0.70;
    Oc.drawVox(ctx, voxKey, L.CX, L.CY + (kind === 'defense' ? 6 : 0), {
      r: stationR,
      yaw: kind === 'defense' ? -view : stationYaw,
      t,
    });

    // Assault active shield — boss orbit arc (spinning sector), not full bubble
    if (kind === 'assault' && baseShield && baseShieldOn) {
      const shR = Math.min(L.RX, L.RY) * 0.88;
      if (typeof Enemies !== 'undefined' && Enemies.drawForceShield) {
        Enemies.drawForceShield(ctx, L.CX, L.CY, shR, baseShield, t);
      } else {
        ctx.save();
        ctx.strokeStyle = '#7de0ff';
        ctx.lineWidth = 6;
        ctx.globalAlpha = 0.55;
        ctx.beginPath();
        ctx.arc(L.CX, L.CY, shR, baseShield.angle - baseShield.arc, baseShield.angle + baseShield.arc);
        ctx.stroke();
        ctx.restore();
      }
    }

    if (kind === 'defense') {
      // Rail on the outer hull edge
      ctx.strokeStyle = 'rgba(255,210,74,0.62)';
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.ellipse(L.CX, L.CY, L.RX + 4, L.RY + 4, 0, 0, Oc.TAU);
      ctx.stroke();
      ctx.strokeStyle = 'rgba(120,200,180,0.28)';
      ctx.lineWidth = 2;
      ctx.setLineDash([10, 14]);
      ctx.beginPath();
      ctx.ellipse(L.CX, L.CY, L.RX - 8, L.RY - 6, 0, 0, Oc.TAU);
      ctx.stroke();
      ctx.setLineDash([]);

      const bank = Oc.clamp((cartX - ww * 0.5) / (ww * 0.45), -1, 1);
      const slide = bank * 0.18;
      const seatScr = Oc.polarXY(L.FACE + slide - view, L.RIM, view, L.CX, L.CY, L.RX, L.RY, L.FACE);

      // Supply nodes (hardpoints on the ring)
      const nd = nodes.map(n => ({ n, p: at(n.ang, L.RIM) })).sort((a, b) => a.p.y - b.p.y);
      for (const { n, p } of nd) {
        if (n.dead) {
          ctx.globalAlpha = 0.28;
          ctx.strokeStyle = '#456';
          ctx.beginPath(); ctx.arc(p.x, p.y, n.r, 0, Oc.TAU); ctx.stroke();
          ctx.globalAlpha = 1;
        } else {
          ctx.globalAlpha = 0.45 + 0.55 * p.face;
          if (!Oc.drawVox(ctx, 'relaySocket', p.x, p.y, { r: n.r * 0.85, yaw: p.a, t })) {
            Oc.drawWeakPoint(ctx, p.x, p.y, n.r, n.hp, n.maxHp, t, false);
          } else {
            const u = Math.max(0, n.hp / n.maxHp);
            ctx.strokeStyle = '#9fffc0';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.arc(p.x, p.y, n.r + 6, -Math.PI / 2, -Math.PI / 2 + Oc.TAU * u);
            ctx.stroke();
          }
          if (fortressT > 0) {
            const pulse = 0.55 + 0.45 * Math.sin(t * 10);
            ctx.globalAlpha = 0.35 + 0.35 * pulse;
            ctx.strokeStyle = '#7dffa0';
            ctx.lineWidth = 2.5;
            ctx.beginPath();
            ctx.arc(p.x, p.y, n.r + 11 + pulse * 2, 0, Oc.TAU);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
          ctx.globalAlpha = 1;
        }
      }

      if (superFlashT > 0) {
        const u = superFlashT / 0.85;
        const kindCol = (typeof Meta !== 'undefined' && Meta.defSuperByKey && Meta.defSuperByKey[superFlashKind]
          && Meta.defSuperByKey[superFlashKind].color) || '#4ad6ff';
        ctx.globalAlpha = u * 0.65;
        ctx.strokeStyle = kindCol;
        ctx.lineWidth = 4 + (1 - u) * 12;
        ctx.beginPath();
        ctx.ellipse(L.CX, L.CY, (L.RX + 28) * (1.15 - u * 0.2), (L.RY + 28) * (1.15 - u * 0.2), 0, 0, Oc.TAU);
        ctx.stroke();
        // Second ring for punch
        ctx.globalAlpha = u * 0.35;
        ctx.lineWidth = 2 + (1 - u) * 6;
        ctx.beginPath();
        ctx.ellipse(L.CX, L.CY, (L.RX + 48) * (1.2 - u * 0.25), (L.RY + 48) * (1.2 - u * 0.25), 0, 0, Oc.TAU);
        ctx.stroke();
        ctx.globalAlpha = 1;
      }

      // Deployed turrets on rail
      for (const tr of defTurrets) {
        const p = at(tr.ang, L.RIM);
        Oc.drawVox(ctx, 'turret', p.x, p.y, { r: 11, yaw: p.a + Math.PI / 2, t, thrust: 0.2 });
      }

      // Raiders with bank from angular velocity
      for (const e of raiders) {
        const p = at(e.ang, e.rad);
        const roll = Oc.clamp((e.angVel || 0) * 0.35, -0.55, 0.55);
        const yaw = p.a + Math.PI / 2 + (e.role === 'orbit' ? 0 : roll * 0.3);
        ctx.globalAlpha = 0.35 + 0.65 * Math.max(0.2, p.face);
        if (!Oc.drawVox(ctx, e.model || 'kamikaze', p.x, p.y, {
          r: e.r * 0.95, yaw, roll, t, thrust: e.role === 'dive' ? 0.7 : 0.25,
        })) {
          ctx.fillStyle = '#ff8040';
          ctx.beginPath(); ctx.arc(p.x, p.y, e.r, 0, Oc.TAU); ctx.fill();
        }
        if (e.shielded) {
          ctx.globalAlpha = 0.4 + 0.25 * Math.sin(t * 12);
          ctx.strokeStyle = '#60d0ff';
          ctx.lineWidth = 2;
          ctx.beginPath(); ctx.arc(p.x, p.y, e.r + 8, 0, Oc.TAU); ctx.stroke();
        }
        ctx.globalAlpha = 1;
      }

      // Crown rail gun — larger, rides the station rim
      const gunModel = (defGun && defGun.model) || 'turret';
      if (!Oc.drawVox(ctx, gunModel, seatScr.x, seatScr.y, {
        r: 20, yaw: L.FACE + Math.PI / 2 + bank * 0.2, roll: bank * 0.25, t,
        thrust: overdriveT > 0 ? 0.9 : 0.4,
      })) {
        ctx.save();
        ctx.translate(seatScr.x, seatScr.y);
        ctx.fillStyle = '#7dffa0';
        ctx.strokeStyle = '#b8ffe0';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, -16); ctx.lineTo(12, 10); ctx.lineTo(0, 4); ctx.lineTo(-12, 10);
        ctx.closePath(); ctx.fill(); ctx.stroke();
        ctx.restore();
      }
      if (overdriveT > 0) {
        ctx.globalAlpha = 0.35 + 0.25 * Math.sin(t * 14);
        ctx.strokeStyle = '#ff9060';
        ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(seatScr.x, seatScr.y, 26, 0, Oc.TAU); ctx.stroke();
        ctx.globalAlpha = 1;
      }

      const bias = Oc.edgeAxis(cartX, ww, 0.06);
      Oc.drawEdgeBands(ctx, ww, hh, bias);
    } else {
      for (const s of sockets) {
        if (s.dead) continue;
        const p = at(s.ang, L.RIM);
        ctx.globalAlpha = 0.4 + 0.6 * p.face;
        if (!Oc.drawVox(ctx, 'relaySocket', p.x, p.y, { r: s.r * 0.9, yaw: p.a + t * 0.8, t })) {
          Oc.drawWeakPoint(ctx, p.x, p.y, s.r, s.hp, s.maxHp, t, true);
        } else {
          const u = Math.max(0, s.hp / s.maxHp);
          ctx.strokeStyle = '#ffd24a';
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.arc(p.x, p.y, s.r + 6, -Math.PI / 2, -Math.PI / 2 + Oc.TAU * u);
          ctx.stroke();
        }
        ctx.globalAlpha = 1;
      }
      for (const g of guns) {
        if (g.dead) continue;
        const p = at(g.ang, L.RIM);
        const aim = p.front && ship
          ? Math.atan2(ship.y - p.y, ship.x - p.x)
          : p.a;
        const yaw = aim + Math.PI / 2;
        ctx.globalAlpha = 0.4 + 0.6 * p.face;
        const gModel = g.model || 'enemyTurret';
        if (!Oc.drawVox(ctx, gModel, p.x, p.y, {
          r: g.r * 0.95, yaw, t, thrust: p.front ? 0.35 : 0.1,
        })) {
          // Fallback 2D silhouette if voxel missing
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(aim);
          ctx.fillStyle = '#3a1820';
          ctx.strokeStyle = p.front ? '#ff8060' : '#664040';
          ctx.lineWidth = 2;
          ctx.fillRect(-11, -9, 22, 18);
          ctx.strokeRect(-11, -9, 22, 18);
          ctx.fillStyle = '#ffaa70';
          ctx.fillRect(8, -3.5, 18, 7);
          ctx.restore();
        } else {
          // Compact HP arc
          const u = Math.max(0, g.hp / g.maxHp);
          ctx.strokeStyle = '#ffaa70';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(p.x, p.y, g.r + 5, -Math.PI / 2, -Math.PI / 2 + Oc.TAU * u);
          ctx.stroke();
        }
        ctx.globalAlpha = 1;
      }
      for (const d of hangar) {
        const dModel = d.model || 'interceptor';
        const yaw = Math.atan2(d.vy || 0, d.vx || 1) + Math.PI / 2;
        const roll = d.weave ? Math.sin(t * 4 + (d.phase || 0)) * 0.25 : Oc.clamp((d.vx || 0) * 0.002, -0.35, 0.35);
        if (!Oc.drawVox(ctx, dModel, d.x, d.y, {
          r: d.r * 0.9, yaw, roll, t,
          thrust: d.kamikaze ? 0.85 : 0.45,
        })) {
          ctx.fillStyle = '#ff6a50';
          ctx.beginPath(); ctx.arc(d.x, d.y, d.r, 0, Oc.TAU); ctx.fill();
        }
      }
      // Player ship — live voxel from hangar loadout
      const pl = (typeof Game !== 'undefined' && Game.player) ? Game.player : null;
      const shipKey = (pl && (Profile.get().ship)) || (Profile.get().ship) || 'vanguard';
      const blink = pl
        ? (pl.invuln > 0 && ((t * 20) | 0) % 2 === 0)
        : (ship.inv > 0 && ((t * 20) | 0) % 2 === 0);
      if (!blink) {
        if (pl && pl.draw) {
          // Use vertical ship draw for modules décor + correct palette
          try { pl.draw(ctx); } catch (e) {
            Oc.drawVox(ctx, shipKey, ship.x, ship.y, { r: 16, yaw: 0, roll: ship.bank * 0.45, t, thrust: 0.8 });
          }
        } else if (!Oc.drawVox(ctx, shipKey, ship.x, ship.y, {
          r: 16, yaw: 0, roll: ship.bank * 0.45, t, thrust: 0.8,
        })) {
          Oc.drawShipFallback(ctx, ship.x, ship.y, '#4ad6ff', 0);
        }
      }
      // Modules (drone / PD ring) over the seat
      if (typeof Game !== 'undefined' && Game.orbitModulesDraw) Game.orbitModulesDraw(ctx);
      // Barrier shell
      if (pl && pl.barrierT > 0) {
        ctx.save();
        ctx.globalAlpha = 0.35 + 0.2 * Math.sin(t * 10);
        ctx.strokeStyle = '#6effc0';
        ctx.lineWidth = 2.5;
        ctx.beginPath(); ctx.arc(ship.x, ship.y, 22, 0, Oc.TAU); ctx.stroke();
        ctx.restore();
      }
      const bias = Oc.edgeAxis(ship.x, ww, 0.08);
      Oc.drawEdgeBands(ctx, ww, hh, bias);
    }

    // Player bullets (colored by weapon)
    for (const b of bullets) {
      const col = b.color || (b.super ? '#ffe8a0' : '#ffe24a');
      if (b.long) {
        ctx.fillStyle = col;
        ctx.fillRect(b.x - b.r, b.y - 9, b.r * 2, 14);
        ctx.fillStyle = 'rgba(255,255,255,0.85)';
        ctx.fillRect(b.x - b.r * 0.4, b.y - 7, b.r * 0.8, 10);
      } else {
        Oc.drawBullet(ctx, b, col, col);
      }
    }
    for (const b of eBullets) {
      if (b.shootable) {
        if (!Oc.drawVox(ctx, 'missile', b.x, b.y, {
          r: 8, yaw: Math.atan2(b.vy, b.vx) + Math.PI / 2, t, thrust: 0.6,
        })) {
          Oc.drawBullet(ctx, b, '#ffaa60', '#ff6030');
        }
      } else {
        Oc.drawBullet(ctx, b, '#ff6a7a', '#ff4060');
      }
    }
    // Assault loot
    if (kind === 'assault' && assaultDrops.length) {
      for (const p of assaultDrops) {
        if (typeof PowerUps !== 'undefined' && PowerUps.draw) {
          PowerUps.draw(p, ctx);
        } else {
          ctx.fillStyle = '#ffe24a';
          ctx.beginPath(); ctx.arc(p.x, p.y + (p.bob || 0), 6, 0, Oc.TAU); ctx.fill();
        }
      }
    }

    Oc.drawFx(ctx);
    ctx.restore();

    if (kind === 'defense' && raiders && raiders.length) {
      const Lr = layout();
      const threatScr = raiders.map(e => {
        const p = at(e.ang, e.rad);
        const bearing = Oc.angDiff(p.a != null ? p.a : e.ang, Lr.FACE);
        const dist = Oc.clamp((e.rad - Lr.RIM) / (Lr.OUTER - Lr.RIM + 0.5), 0, 1);
        return {
          x: p.x, y: p.y,
          bearing,
          dist,
          hot: e.rad < Lr.RIM + 0.45 || dist < 0.25,
        };
      });
      Oc.drawOffscreenMarkers(ctx, ww, hh, threatScr);
      Oc.drawThreatRadar(ctx, ww, threatScr, t);
    } else if (kind === 'assault') {
      const Lr = layout();
      const FACE = Lr.FACE;
      const hangarAng = (d) => Math.atan2(d.y - Lr.CY, d.x - Lr.CX);
      const pts = [
        ...sockets.map(s => ({ ang: (s.ang + view) - FACE, dead: s.dead })),
        ...guns.map(g => ({ ang: (g.ang + view) - FACE, dead: g.dead })),
        ...hangar.map(d => ({ ang: hangarAng(d) - FACE, dead: false })),
      ];
      if (pts.length) Oc.drawRadar(ctx, ww, pts, 'assault');
      const droneScr = hangar.map(d => ({
        x: d.x, y: d.y,
        hot: Math.hypot(d.x - ship.x, d.y - ship.y) < 160,
      }));
      if (droneScr.length) Oc.drawOffscreenMarkers(ctx, ww, hh, droneScr);
    }

    // Compact top toast (not a permanent mid-screen plate) — fades with bannerT
    if (banner && bannerT > 0) {
      const a = Math.min(1, bannerT * 1.4, bannerT > 0.35 ? 1 : bannerT / 0.35);
      const by = 52;
      ctx.save();
      ctx.globalAlpha = a * 0.92;
      ctx.fillStyle = 'rgba(4,8,16,0.55)';
      const tw = Math.min(ww * 0.72, 280);
      ctx.fillRect(ww * 0.5 - tw / 2, by, tw, 28);
      ctx.strokeStyle = bannerCol;
      ctx.lineWidth = 1.5;
      ctx.strokeRect(ww * 0.5 - tw / 2, by, tw, 28);
      ctx.fillStyle = bannerCol;
      ctx.font = 'bold 13px Trebuchet MS, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(banner, ww * 0.5, by + 14);
      ctx.restore();
    }

    ctx.save();
    ctx.fillStyle = 'rgba(180,200,230,0.45)';
    ctx.font = '11px Trebuchet MS, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(kind === 'defense' ? T('orbit.defense.tip') : T('orbit.assault.tip'), ww * 0.5, hh - 14);
    ctx.restore();
  }

  return {
    start, stop, step, draw, getResult, isActive, getKind, updateHud,
    useSuper, getDefSuperHud, getNodesLost, getAssaultGrade, cycleSuper,
    reviveAssault, playerBlast, droneStrike,
  };
})();
