/* ============================================================
 * weapons.js — modular weapon definitions.
 * A weapon is a fire(state, level) function returning an array of
 * bullet specs {x,y,vx,vy,dmg,color,r,kind}. Game spawns them.
 * ========================================================== */
const Weapons = (() => {
  const SPEED = 9; // base bullet speed (upward = negative vy)

  // Helper: build a bullet spec relative to the ship nose.
  const b = (x, y, vx, vy, dmg, color, r = 3, kind = 'player') => ({ x, y, vx, vy, dmg, color, r, kind });

  const defs = {
    /* Forward cannon — scales from single to dense stream. */
    cannon: {
      name: 'CANNON',
      cooldown: 0.12,
      color: '#9fe9ff',
      fire(s, lv) {
        const out = [];
        const dmg = 6 + lv * 1.25;
        // From L6 the slugs punch through one body. Without it the whole volley
        // stopped on the front enemy, which is why the starter fell off a cliff
        // in the dense late waves it is otherwise statted for.
        const pierce = lv >= 6 ? 1 : 0;
        const put = (x, y, vx, vy, r) => {
          const bl = b(x, y, vx, vy, dmg, r === 4 ? '#ffffff' : '#9fe9ff', r || 3);
          if (pierce) bl.pierce = pierce;
          out.push(bl);
        };
        if (lv <= 1) {
          put(s.x, s.y - 18, 0, -SPEED);
        } else if (lv <= 3) {
          put(s.x - 7, s.y - 14, 0, -SPEED);
          put(s.x + 7, s.y - 14, 0, -SPEED);
        } else {
          put(s.x, s.y - 20, 0, -SPEED - 1, 4);
          put(s.x - 9, s.y - 12, -0.6, -SPEED);
          put(s.x + 9, s.y - 12, 0.6, -SPEED);
          if (lv >= 6) {
            put(s.x - 14, s.y - 8, -1.4, -SPEED + 1);
            put(s.x + 14, s.y - 8, 1.4, -SPEED + 1);
          }
        }
        return out;
      },
    },

    /* Spread — wide fan, great for clearing waves. */
    spread: {
      name: 'SPREAD',
      cooldown: 0.16,
      color: '#ffd24a',
      fire(s, lv) {
        const out = [];
        const n = 3 + Math.min(lv, 5);          // 4..8 pellets
        const spread = 0.16 + lv * 0.02;
        const dmg = 5 + Math.ceil(lv * 0.95);
        // L7+: pellets carry through one body, so a maxed fan sweeps a rank
        // instead of stalling on whoever is nearest. Coverage is this gun's
        // whole identity — it needed the damage to matter, not more width.
        const pierce = lv >= 7 ? 1 : 0;
        for (let i = 0; i < n; i++) {
          const a = -Math.PI / 2 + (i - (n - 1) / 2) * spread;
          const bl = b(s.x, s.y - 14, Math.cos(a) * SPEED, Math.sin(a) * SPEED, dmg, '#ffd24a');
          if (pierce) bl.pierce = pierce;
          out.push(bl);
        }
        return out;
      },
    },

    /* Laser — fast piercing shots (heavy single-target). */
    laser: {
      name: 'LASER',
      cooldown: 0.09,
      color: '#ff5bd0',
      fire(s, lv) {
        const out = [];
        const dmg = 7 + lv * 1.5;
        const cols = lv >= 4 ? [-10, 0, 10] : lv >= 2 ? [-8, 8] : [0];
        for (const dx of cols) {
          const bl = b(s.x + dx, s.y - 22, 0, -(SPEED + 5), dmg, '#ff5bd0', 2.5, 'player');
          bl.pierce = 1 + Math.floor(lv / 3);   // passes through N enemies
          bl.long = true;
          out.push(bl);
        }
        return out;
      },
    },

    /* Missiles — home only if a target is in a narrow vertical lock cone at fire.
       Otherwise they fly straight (no free aim-assist). */
    missile: {
      name: 'MISSILE',
      cooldown: 0.36,
      color: '#7dffa0',
      fire(s, lv) {
        const out = [];
        // Missiles measured DEAD last by a wide margin (0.56x laser on a single
        // target, 0.14x across a wave) while also being the only gun with a
        // firing condition — the lock cone. More warheads and a steeper damage
        // curve, so the tracking is a bonus on a real gun rather than the only
        // reason to bring it.
        const pairs = 1 + Math.floor(lv / 1.6);  // 1..6
        const dmg = 12 + lv * 3;
        // Vertical lock cone: modest base width, scales gently with combat lv + hangar Targeting
        let aim = 0;
        try {
          if (typeof Meta !== 'undefined' && Meta.weaponAim && typeof Profile !== 'undefined') {
            aim = Meta.weaponAim(Profile.get(), 'missile') || 0;
          }
        } catch (e) {}
        // lv1≈48 … lv8≈62 + aim0..3 → +0..10.5  (cap ~72 — still a corridor, not freelock)
        const LOCK_HALF = Math.min(72, 46 + Math.min(lv, 8) * 2 + aim * 3.5);
        let lock = null;
        if (typeof Game !== 'undefined' && Game.lockMissileTarget) {
          lock = Game.lockMissileTarget(s.x, s.y, LOCK_HALF);
        }
        for (let i = 0; i < pairs; i++) {
          const side = i % 2 === 0 ? -1 : 1;
          const m = b(s.x + side * (10 + i * 3), s.y - 6, side * 1.2, -4.2, dmg, '#7dffa0', 3.5);
          if (lock) {
            m.homing = true;
            m.spawnT = 0;
            m.homeId = lock.id;           // sticky target; no mid-flight retarget
            m.homeIsBoss = !!lock.isBoss;
          } else {
            m.homing = false;
            m.homeId = null;
            m.homeIsBoss = false;
          }
          out.push(m);
        }
        return out;
      },
    },

    /* Railgun — slow, huge piercing slugs (unlocks late; heavy single-target). */
    railgun: {
      name: 'RAILGUN',
      cooldown: 0.5,
      color: '#7de0ff',
      fire(s, lv) {
        const out = [];
        const dmg = 34 + lv * 8;
        const cols = lv >= 5 ? [-9, 0, 9] : lv >= 3 ? [-6, 6] : [0];
        for (const dx of cols) {
          const bl = b(s.x + dx, s.y - 24, 0, -(SPEED + 8), dmg, '#7de0ff', 4, 'player');
          bl.pierce = 2 + Math.floor(lv / 2);
          bl.long = true;
          out.push(bl);
        }
        return out;
      },
    },

    /* Pulse — very fast, tight forward burst (unlocks last; shreds up close). */
    pulse: {
      name: 'PULSE',
      cooldown: 0.08,
      color: '#ff8adf',
      fire(s, lv) {
        const out = [];
        const n = 3 + Math.min(lv, 6);            // 4..9 pellets
        const spread = 0.06;
        const dmg = 5 + Math.ceil(lv * 0.7);
        for (let i = 0; i < n; i++) {
          const a = -Math.PI / 2 + (i - (n - 1) / 2) * spread;
          out.push(b(s.x, s.y - 14, Math.cos(a) * (SPEED + 3), Math.sin(a) * (SPEED + 3), dmg, '#ff8adf', 2.5));
        }
        return out;
      },
    },
  };

  const order = ['cannon', 'spread', 'laser', 'missile', 'railgun', 'pulse'];

  /* ── Weapon fusion (active + loadout partner pickup) ──
   * Rule: always fire the full active pattern first, then add a unique partner
   * layer. Damage per active bullet never decreases; extras only add pressure.
   * Partner level trains on pickup in parallel (see Powerups.collect).
   */
  const FUSE_DUR = 8; // seconds

  function blendHex(a, b) {
    // crude mid-mix for visual identity of fused shots
    const parse = (h) => {
      const s = (h || '#ffffff').replace('#', '');
      const n = s.length === 3
        ? s.split('').map(c => c + c).join('')
        : s.slice(0, 6);
      return [parseInt(n.slice(0, 2), 16), parseInt(n.slice(2, 4), 16), parseInt(n.slice(4, 6), 16)];
    };
    try {
      const A = parse(a), B = parse(b);
      const m = A.map((v, i) => Math.round(v * 0.55 + B[i] * 0.45));
      return '#' + m.map(x => x.toString(16).padStart(2, '0')).join('');
    } catch (e) { return a || b || '#fff'; }
  }

  function cloneSpec(spec, mut) {
    const o = Object.assign({}, spec);
    if (mut) Object.assign(o, mut);
    return o;
  }

  /**
   * Pair-specific extra shots / mutations on top of a full active volley.
   * `out` is the active fire result (already cloned-safe to mutate lightly).
   */
  function pairExtras(active, partner, s, aLv, pLv, out) {
    const pCol = (defs[partner] && defs[partner].color) || '#fff';
    const aCol = (defs[active] && defs[active].color) || '#fff';
    const mix = blendHex(aCol, pCol);
    const pl = Math.max(1, pLv | 0);
    const al = Math.max(1, aLv | 0);
    const extras = [];

    // Shared: tint active volley slightly toward partner (visual only)
    for (let i = 0; i < out.length; i++) {
      if (out[i].color) out[i].color = blendHex(out[i].color, pCol);
    }

    // Partner layer — unique per partner archetype, scaled by partner level
    if (partner === 'spread') {
      // Wide side fans (area)
      const n = 2 + Math.min(3, Math.floor(pl / 2));
      const spr = 0.22 + pl * 0.015;
      const dmg = Math.max(4, 4 + Math.ceil(pl * 0.5));
      for (let i = 0; i < n; i++) {
        const a = -Math.PI / 2 + (i - (n - 1) / 2) * spr;
        extras.push(b(s.x, s.y - 12, Math.cos(a) * SPEED, Math.sin(a) * SPEED, dmg, mix, 2.8));
      }
    } else if (partner === 'laser') {
      // Pierce buff on active + twin beams
      for (let i = 0; i < out.length; i++) {
        out[i].pierce = Math.max(out[i].pierce || 0, 1 + Math.floor(pl / 3));
        out[i].long = true;
      }
      const dmg = 6 + pl * 1.2;
      for (const dx of pl >= 4 ? [-11, 11] : [0]) {
        const bl = b(s.x + dx, s.y - 22, 0, -(SPEED + 5), dmg, mix, 2.4);
        bl.pierce = 1 + Math.floor(pl / 3);
        bl.long = true;
        extras.push(bl);
      }
    } else if (partner === 'missile') {
      // Side micro-homers
      const pairs = 1 + Math.floor(pl / 3);
      const dmg = 9 + pl * 1.4;
      let lock = null;
      if (typeof Game !== 'undefined' && Game.lockMissileTarget) {
        lock = Game.lockMissileTarget(s.x, s.y, 48);
      }
      for (let i = 0; i < pairs; i++) {
        const side = i % 2 === 0 ? -1 : 1;
        const m = b(s.x + side * (12 + i * 2), s.y - 4, side * 1.1, -4, dmg, mix, 3.2);
        if (lock) {
          m.homing = true; m.spawnT = 0; m.homeId = lock.id; m.homeIsBoss = !!lock.isBoss;
        }
        extras.push(m);
      }
    } else if (partner === 'railgun') {
      // One heavy slug (never replaces active — pure add)
      const dmg = 22 + pl * 6 + Math.floor(al * 0.5);
      const bl = b(s.x, s.y - 24, 0, -(SPEED + 7), dmg, mix, 4.2);
      bl.pierce = 2 + Math.floor(pl / 2);
      bl.long = true;
      extras.push(bl);
      // Slight dmg bump on active (never down)
      for (let i = 0; i < out.length; i++) {
        out[i].dmg = (out[i].dmg || 0) * 1.08;
      }
    } else if (partner === 'pulse') {
      // Tight shredder burst + tiny rate feel via extra pellets
      const n = 3 + Math.min(4, Math.floor(pl / 2));
      const dmg = 4 + Math.ceil(pl * 0.65);
      for (let i = 0; i < n; i++) {
        const a = -Math.PI / 2 + (i - (n - 1) / 2) * 0.05;
        extras.push(b(s.x, s.y - 14, Math.cos(a) * (SPEED + 3), Math.sin(a) * (SPEED + 3), dmg, mix, 2.2));
      }
    } else if (partner === 'cannon') {
      // Dense center stream
      const dmg = 5 + pl;
      extras.push(b(s.x, s.y - 20, 0, -SPEED - 1, dmg, mix, 3.5));
      if (pl >= 3) {
        extras.push(b(s.x - 6, s.y - 14, 0, -SPEED, dmg, mix, 2.8));
        extras.push(b(s.x + 6, s.y - 14, 0, -SPEED, dmg, mix, 2.8));
      }
    }

    // Active-specific spice when partner is not the sole flavor
    if (active === 'spread' && partner === 'laser') {
      for (let i = 0; i < out.length; i++) {
        out[i].pierce = Math.max(out[i].pierce || 0, 1);
      }
    }
    if (active === 'missile' && partner === 'laser') {
      for (let i = 0; i < out.length; i++) {
        out[i].dmg = (out[i].dmg || 0) * 1.1;
      }
    }
    if (active === 'railgun' && partner === 'pulse') {
      // Rail still fires; pulse shreds around it
      for (let i = 0; i < out.length; i++) {
        out[i].dmg = (out[i].dmg || 0) * 1.05;
      }
    }
    if (active === 'laser' && partner === 'railgun') {
      for (let i = 0; i < out.length; i++) {
        out[i].pierce = Math.max(out[i].pierce || 0, 2 + Math.floor(pl / 3));
        out[i].dmg = (out[i].dmg || 0) * 1.12;
      }
    }
    if (active === 'cannon' && partner === 'missile') {
      // keep cannon dmg; extras already add missiles
    }
    if (active === 'pulse' && partner === 'spread') {
      for (let i = 0; i < out.length; i++) {
        // slightly wider pulse without losing pellets
        out[i].vx = (out[i].vx || 0) * 1.15;
      }
    }

    return extras;
  }

  /**
   * Full fusion volley: active fire (unreduced) + unique partner extras.
   */
  function fuseFire(active, partner, s, aLv, pLv) {
    const def = defs[active];
    if (!def) return [];
    const base = def.fire(s, aLv) || [];
    // Deep-ish clone so pairExtras can tint without touching cached specs
    const out = base.map(spec => cloneSpec(spec));
    // Floor: ensure no bullet dmg below original
    const floors = base.map(spec => spec.dmg || 0);
    const extras = pairExtras(active, partner, s, aLv, pLv, out);
    for (let i = 0; i < out.length; i++) {
      if ((out[i].dmg || 0) < floors[i]) out[i].dmg = floors[i];
    }
    return out.concat(extras);
  }

  /** Cooldown multiplier while fused — never slower than base active (≤ 1). */
  function fusionCdMul(active, partner) {
    if (partner === 'pulse') return 0.88;
    if (partner === 'laser' && active === 'railgun') return 0.95;
    if (partner === 'cannon') return 0.96;
    return 1;
  }

  function fusionLabel(active, partner) {
    const A = (defs[active] && defs[active].name) || active;
    const B = (defs[partner] && defs[partner].name) || partner;
    return A + '+' + B;
  }

  return {
    defs, order, SPEED,
    FUSE_DUR, fuseFire, fusionCdMul, fusionLabel, blendHex,
  };
})();
