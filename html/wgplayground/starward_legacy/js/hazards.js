/* ============================================================
 * hazards.js — environmental STAGE hazards (FTL map stages).
 *
 * Radiation waves (all chapters) + late-chapter mechanics (parts 4-5):
 *   • MAGMA      — a star-flare surge floods the bottom ~1/4 of the screen
 *                  in molten rock; periodic GEYSERS erupt upward from it.
 *   • ROCKS      — indestructible asteroids plunge top→bottom at speed
 *                  (can't be shot; just dodge).
 *   • HOMING     — enemy seeker missiles fly at the player; they steer
 *                  briefly then commit, so a dodge makes them fly past.
 *   • WIND       — a solar wind drags the ship sideways (fight the drift).
 *
 * Contact routes through Game.damagePlayer() so casual auto-bomb / revive
 * still apply. Game.step ticks this only while a stage is being played.
 * ========================================================== */
const Hazards = (() => {
  let active = false;
  // radiation
  let beams = [], intensity = 0, spawnT = 0;
  const WARN = 0.95, GROW = 0.45, FADE = 0.5;
  // late-chapter mechanics
  let magma = false, magmaLevel = 0, magmaCycle = 0, magmaDmgT = 0, geysers = [];
  let rocks = false, rockT = 0, rockList = [];
  let homing = false, missileT = 0, missiles = [];
  let bubbles = false, bubbleT = 0, bubbleList = [], bubbleTier = 1;
  let wind = false, windForce = 0, windTarget = 0, windT = 0;
  let windStage = false;   // map/daily hazard — keep after a boss gale
  let windForced = false;  // boss-driven lock (privateer sail gale)

  function start(cfg) {
    cfg = cfg || {};
    beams.length = 0; geysers.length = 0; rockList.length = 0; missiles.length = 0;
    bubbleList.length = 0;
    intensity = cfg.radiation ? (cfg.radiation === true ? 1 : cfg.radiation) : 0;
    spawnT = 1.4;
    magma = !!cfg.magma; magmaLevel = 6; magmaCycle = 0; magmaDmgT = 0;
    rocks = !!cfg.rocks; rockT = 2.2;
    homing = !!cfg.homing; missileT = 2.8;
    bubbles = !!cfg.bubbles;
    bubbleTier = Math.max(1, Math.min(4, cfg.bubbleTier || 1));
    bubbleT = bubbles ? Engine.rand(4, 7) : 0;      // never one in your face at wave 1
    wind = !!cfg.wind; windForce = 0; windTarget = 0; windT = 0;
    windStage = !!cfg.wind; windForced = false;
    active = intensity > 0 || magma || rocks || homing || wind || bubbles;
  }
  function stop() {
    active = false;
    beams.length = 0; geysers.length = 0; rockList.length = 0; missiles.length = 0;
    bubbleList.length = 0;
  }
  function reset() { stop(); }

  // Turn ONE hazard on mid-run without disturbing the others (daily escalation).
  function enable(key) {
    switch (key) {
      case 'radiation': if (intensity < 1) { intensity = 1; spawnT = 1.0; } break;
      case 'magma':  if (!magma)  { magma = true; magmaLevel = 6; magmaCycle = 0; magmaDmgT = 0; } break;
      case 'rocks':  if (!rocks)  { rocks = true; rockT = 1.6; } break;
      case 'homing': if (!homing) { homing = true; missileT = 2.2; } break;
      case 'bubbles': if (!bubbles) { bubbles = true; bubbleT = Engine.rand(3, 6); } break;
      case 'wind':   if (!wind)   { wind = true; windForce = 0; windTarget = 0; windT = 0; } windStage = true; break;
    }
    active = true;
  }
  // Crank radiation up a notch (more/wider/faster beams) — late daily waves.
  function intensify() { intensity = Math.min(4, intensity + 1); active = true; }

  /* ---------- radiation (existing) ---------- */
  function spawnBeam() {
    const vertical = Math.random() < 0.62;
    const b = { vertical, t: 0, dmgT: 0, hold: 0.7 + Math.random() * (0.5 + intensity * 0.25) };
    if (vertical) { b.pos = Engine.rand(46, Engine.W - 46); b.max = 34 + Engine.rand(0, 24) + intensity * 4; b.hue = '90,255,150'; }
    else { b.pos = Engine.rand(90, Engine.H * 0.72); b.max = 30 + Engine.rand(0, 18) + intensity * 4; b.phase = Engine.rand(0, Engine.TAU); b.hue = '120,220,255'; }
    beams.push(b);
  }
  function beamState(b) {
    const t = b.t, hold = b.hold;
    if (t < WARN) return { w: 0.05, lethal: false, phase: 'warn' };
    if (t < WARN + GROW) return { w: 0.12 + (t - WARN) / GROW * 0.88, lethal: (t - WARN) / GROW > 0.5, phase: 'grow' };
    if (t < WARN + GROW + hold) return { w: 1, lethal: true, phase: 'hold' };
    const f = 1 - (t - WARN - GROW - hold) / FADE;
    return { w: Math.max(0, f), lethal: f > 0.35, phase: 'fade' };
  }
  const beamTotal = b => WARN + GROW + b.hold + FADE;

  function updateRadiation(dt, p) {
    if (beams.length < 2 + intensity) { spawnT -= dt; if (spawnT <= 0) { spawnBeam(); spawnT = Math.max(1.1, 3.0 - intensity * 0.45) + Math.random() * 1.1; } }
    for (let i = beams.length - 1; i >= 0; i--) {
      const b = beams[i]; b.t += dt; b.dmgT -= dt;
      if (b.t >= beamTotal(b)) { beams.splice(i, 1); continue; }
      const s = beamState(b); if (!s.lethal || !p) continue;
      const half = b.max * s.w * 0.5;
      const hit = b.vertical ? Math.abs(p.x - b.pos) < half + p.r * 0.5 : Math.abs(p.y - b.pos) < half + p.r * 0.5;
      if (hit && b.dmgT <= 0) { b.dmgT = 0.45; Game.damagePlayer(); }
    }
  }

  /* ---------- magma surge + geysers ---------- */
  const MAGMA_MAX = () => Engine.H * 0.26;     // full surge covers the bottom ~1/4
  function magmaTargetLevel() {
    const t = magmaCycle % 8, mx = MAGMA_MAX();
    if (t < 4.4) return 6;                       // calm: only a glowing rim
    if (t < 5.3) return 6 + (t - 4.4) / 0.9 * (mx - 6);  // rise
    if (t < 7.2) return mx;                       // full lethal surge
    return Math.max(6, mx * (1 - (t - 7.2) / 0.8));      // recede
  }
  function updateMagma(dt, p) {
    magmaCycle += dt; magmaDmgT -= dt;
    magmaLevel = Engine.lerp(magmaLevel, magmaTargetLevel(), 0.16);
    const top = Engine.H - magmaLevel, lethal = magmaLevel > MAGMA_MAX() * 0.45;
    if (lethal && p && p.y > top && magmaDmgT <= 0) { magmaDmgT = 0.45; Game.damagePlayer(); }
    // geysers erupt from the surface during the surge
    if (lethal && Math.random() < dt * 0.9 && geysers.length < 3) {
      geysers.push({ x: Engine.rand(30, Engine.W - 30), t: 0, warn: 0.55, life: 1.5, w: 26 + Engine.rand(0, 16), dmgT: 0 });
    }
    for (let i = geysers.length - 1; i >= 0; i--) {
      const g = geysers[i]; g.t += dt; g.dmgT -= dt;
      if (g.t >= g.warn + g.life) { geysers.splice(i, 1); continue; }
      if (g.t >= g.warn && p) {                   // active column (from surface up)
        const half = g.w * 0.5;
        if (Math.abs(p.x - g.x) < half + p.r * 0.5 && p.y > 40 && g.dmgT <= 0) { g.dmgT = 0.4; Game.damagePlayer(); }
      }
    }
  }

  /* ---------- indestructible falling rocks ---------- */
  function updateRocks(dt, p) {
    rockT -= dt;
    if (rockT <= 0) {
      rockT = Engine.rand(0.9, 1.8);
      rockList.push({ x: Engine.rand(24, Engine.W - 24), y: -30, r: 16 + Engine.rand(0, 14), vy: Engine.rand(360, 520), vx: Engine.rand(-30, 30), rot: 0, spin: Engine.rand(-3, 3), verts: Array.from({ length: 8 }, () => 0.72 + Math.random() * 0.4), hit: false });
    }
    for (let i = rockList.length - 1; i >= 0; i--) {
      const r = rockList[i]; r.y += r.vy * dt; r.x += r.vx * dt; r.rot += r.spin * dt;
      if (r.y > Engine.H + 40) { rockList.splice(i, 1); continue; }
      if (!r.hit && p && Engine.dist2(r.x, r.y, p.x, p.y) < (r.r + p.r) * (r.r + p.r)) { r.hit = true; Game.damagePlayer(); }
    }
  }

  /* ---------- JAMMER BUBBLES (indestructible, disable the ship) ----------
   * A drifting field roughly 2–3 hulls across that cannot be shot down. Touch it
   * and the ship is JAMMED: auto-fire, passive systems (shield regen, Bulwark)
   * and super weapons all go dark for a few seconds. You keep full movement —
   * that is the whole point, it turns a firefight into a dodging problem instead
   * of just chipping health.
   *
   * Three grades, longer lockout the deeper the colour. Which grades can appear,
   * and how often, is driven by `bubbleTier` (campaign progress × difficulty) —
   * see campaign.js genMap and Contracts.hazardPlan.
   */
  /**
   * Five grades, each with its OWN silhouette, motion and drain — they used to
   * share one renderer and read as recolours of the same ball.
   *
   *   look   — which body renderer draws it (see drawBubbleBody)
   *   burn   — shields drained across the FULL lockout, spread evenly. A normal
   *            grade costs 2 shields, the heavy one 4. Never more: a bubble that
   *            can eat a full bar turns a mistake into a run-ender.
   */
  const BUBBLE_KINDS = [
    // DRIFTER - dense voxel core. Heavy, slow, honest.
    { key: 'amber', color: '#ffb03a', dur: 2.0, r: 42, move: 'drift', look: 'solid', burn: 1 },
    // PHASE - hollow husk. Looks half-there even before it blinks out.
    { key: 'violet', color: '#a06cff', dur: 3.2, r: 50, move: 'phase', look: 'lattice', burn: 2 },
    // ERRATIC - shell blown into floating plates; visibly unstable.
    { key: 'teal', color: '#38e0d0', dur: 2.8, r: 46, move: 'erratic', look: 'shard', burn: 2, pulse: true },
    // STALKER - spined predator. Small, dense, unmistakable.
    { key: 'crimson', color: '#ff4a6a', dur: 4.5, r: 36, move: 'stalk', look: 'spiked', burn: 4, pulse: true },
    // NULL - collapsing lattice. Takes the helm as well as the systems.
    { key: 'void', color: '#c86cff', dur: 3.0, r: 54, move: 'phase', look: 'imploded', helm: true, burn: 2, pulse: true },
  ];
  /** Spawn gap by tier — commoner than before, still never a screenful. */
  const BUBBLE_GAP = [[8, 12], [6.5, 10], [5, 8], [4, 6.5]];

  function bubbleGap() {
    const g = BUBBLE_GAP[Math.min(BUBBLE_GAP.length - 1, Math.max(0, bubbleTier - 1))];
    return Engine.rand(g[0], g[1]);
  }
  /**
   * Which grades a tier can roll. Deliberately unlocked in order of how much
   * they ask of the player: read-and-avoid → remember → react → outmanoeuvre →
   * survive without a helm. The helm-stealer is gated to the deepest tier and
   * still weighted down, because losing control is the one effect that can feel
   * unfair if it shows up often.
   */
  function pickBubbleKind() {
    // The helm-stealer opens at tier 3, not 4: gated to 4 it only ever
    // appeared on ULTRA or on warlord nodes, so a full campaign on Casual
    // could finish without the player meeting it once. Its weight stays low.
    const unlocked = bubbleTier >= 3 ? 5 : bubbleTier >= 2 ? 3 : 2;
    const pool = BUBBLE_KINDS.slice(0, unlocked);
    const weights = pool.map(k => (k.helm ? 0.45 : k.move === 'drift' ? (bubbleTier >= 3 ? 0.8 : 1.4) : 1));
    let total = 0; for (const w of weights) total += w;
    let r = Math.random() * total;
    for (let i = 0; i < pool.length; i++) { if ((r -= weights[i]) <= 0) return pool[i]; }
    return pool[0];
  }

  function spawnBubble() {
    const k = pickBubbleKind();
    const b = {
      kind: k, x: Engine.rand(k.r + 12, Engine.W - k.r - 12), y: -k.r - 10,
      vy: Engine.rand(46, 78), vx: Engine.rand(-24, 24),
      t: 0, attached: false, total: 0, left: 0,
      // arrival flourish: swells in from nothing instead of popping on screen
      born: 0,
      // per-behaviour state
      phase: 1, phaseT: Engine.rand(1.6, 2.8),
      pulseT: Engine.rand(0.6, 1.8), swell: 0,
      turnT: Engine.rand(1.2, 2.2),
      spin: Engine.rand(-0.8, 0.8),
      seed: Math.random() * 100,
    };
    if (k.move === 'stalk') { b.vy = Engine.rand(36, 52); }
    bubbleList.push(b);
  }

  /**
   * A single bubble, placed on purpose — the tutorial needs one to fly into.
   *
   * Turns the bubble system on but parks its recurring spawner far in the
   * future, so exactly one arrives and no second one wanders in behind it. The
   * gentlest grade by default: two seconds of lockout and one shield, which is
   * enough to feel and not enough to punish someone still learning to steer.
   */
  let demoPrev = null;
  function demoBubble(o) {
    o = o || {};
    const k = BUBBLE_KINDS.find(b => b.key === o.kind) || BUBBLE_KINDS[0];
    // Remember what the hazard system was doing. Turning `bubbles` on and
    // walking away leaves the whole run armed: the next Hazards.start() picks a
    // spawn gap and real bubbles start arriving in a scene that never asked for
    // them. Whatever we switch on here, endDemoBubble switches back.
    if (!demoPrev) demoPrev = { active, bubbles, bubbleT };
    active = true;
    bubbles = true;
    bubbleT = 1e9;
    const b = {
      kind: k,
      x: o.x != null ? o.x : Engine.W * 0.5,
      y: o.y != null ? o.y : -k.r - 10,
      vy: o.vy != null ? o.vy : 40,
      vx: 0,
      t: 0, attached: false, total: 0, left: 0, born: 0,
      phase: 1, phaseT: 2.4, pulseT: 1.2, swell: 0,
      turnT: 1.8, spin: 0.2, seed: Math.random() * 100,
    };
    bubbleList.push(b);
    return b;
  }
  /** Undo demoBubble: clear the demo and hand the hazard system back as found. */
  function endDemoBubble() {
    bubbleList.length = 0;
    if (demoPrev) {
      active = demoPrev.active;
      bubbles = demoPrev.bubbles;
      bubbleT = demoPrev.bubbleT;
      demoPrev = null;
    }
  }

  function updateBubbles(dt, p) {
    bubbleT -= dt;
    if (bubbleT <= 0) { bubbleT = bubbleGap(); spawnBubble(); }
    for (let i = bubbleList.length - 1; i >= 0; i--) {
      const b = bubbleList[i];
      b.t += dt;
      // Caught one: it stops being a floating obstacle and becomes a shell the
      // ship wears. Riding along is what sells "I am stuck in this" — a bubble
      // that drifted off while you were still jammed read as unrelated.
      if (b.attached) {
        if (p) { b.x = p.x; b.y = p.y; }
        b.left = p ? (p.jamT || 0) : 0;
        if (!p || b.left <= 0) { bubbleList.splice(i, 1); continue; }
        // Drain: `burn` shields spread across the lockout at fractions
        // (i+1)/(burn+1) of the duration. Dividing by `burn` instead put the
        // LAST tick exactly on the expiry frame, where the bubble is already
        // gone — a 1-shield grade then drained nothing at all.
        const done = b.burnt || 0;
        if (done < b.kind.burn) {
          const elapsed = b.total - b.left;
          const due = b.total * (done + 1) / (b.kind.burn + 1);
          if (elapsed >= due) {
            b.burnt = done + 1;
            try { Game.jamDrain(b.kind.color); } catch (e) {}
          }
        }
        continue;                                   // no drift, no wall bounce
      }
      b.born = Math.min(1, b.born + dt * 1.7);        // swell-in on arrival

      // Sharp breathing on the grades that have it — a hard swell and snap back,
      // not a gentle sine, so it reads as something alive rather than decorative.
      if (b.kind.pulse) {
        b.pulseT -= dt;
        if (b.pulseT <= 0) { b.pulseT = Engine.rand(1.1, 2.0); b.swell = 1; }
        b.swell = Math.max(0, b.swell - dt * 2.6);
      }

      switch (b.kind.move) {
        case 'phase':
          // Blinks out COMPLETELY (not a faint shimmer) and stays gone longer —
          // a half-visible ghost was neither honest nor threatening. Still solid
          // while hidden: you have to remember where it went.
          b.phaseT -= dt;
          if (b.phaseT <= 0) {
            b.phase = b.phase > 0.5 ? 0 : 1;
            // seen ~2.2-3.4s, gone ~1.5-2.4s: long enough to lose track of it
            b.phaseT = b.phase ? Engine.rand(2.2, 3.4) : Engine.rand(1.5, 2.4);
          }
          break;
        case 'erratic':
          // Hold a heading, then snap to a new one and RUN — the old dash was a
          // twitch you barely registered. Now it commits to the new vector for a
          // real distance at speed.
          b.turnT -= dt;
          if (b.turnT <= 0) {
            b.turnT = Engine.rand(1.6, 2.6);            // longer committed run
            const a = Engine.rand(-1.25, 1.25);
            const sp = Engine.rand(230, 340);           // was 120-210
            b.vx = Math.sin(a) * sp;
            b.vy = Math.max(34, Math.cos(a) * sp * 0.7);
            b.dash = 0.55;                              // longer trail flare
          }
          if (b.dash > 0) b.dash -= dt;
          break;
        case 'stalk':
          // Lean toward the ship, never lock on: the steering is slow enough
          // that a committed sideways run always beats it.
          if (p) {
            const ax = (p.x - b.x), ay = (p.y - b.y);
            const d = Math.max(1, Math.hypot(ax, ay));
            b.vx = Engine.lerp(b.vx, (ax / d) * 74, Math.min(1, dt * 0.85));
            b.vy = Engine.lerp(b.vy, (ay / d) * 74, Math.min(1, dt * 0.55));
          }
          break;
        default:
          break;                                        // 'drift' — plain descent
      }

      b.y += b.vy * dt;
      b.x += b.vx * dt;
      if (b.x < b.kind.r || b.x > Engine.W - b.kind.r) {
        b.x = Engine.clamp(b.x, b.kind.r, Engine.W - b.kind.r);
        b.vx *= -1;                                     // bounce off the walls
      }
      // Stalkers may climb; everything is retired once it is well past the bottom.
      if (b.y > Engine.H + b.kind.r + 40 || b.y < -b.kind.r - 220) { bubbleList.splice(i, 1); continue; }
      if (p && Engine.dist2(b.x, b.y, p.x, p.y) < (b.kind.r + p.r) * (b.kind.r + p.r)) {
        b.attached = true;
        b.total = b.kind.dur;
        b.left = b.kind.dur;
        b.burnT = 0; b.burnt = 0;
        // A second bubble while still jammed REPLACES the shell: its visuals and
        // its effect take over, and its time is added at 50% rather than simply
        // taking the longer of the two.
        for (let j = bubbleList.length - 1; j >= 0; j--) {
          if (j !== i && bubbleList[j].attached) bubbleList.splice(j, 1);
        }
        try { Game.jamPlayer(b.kind.dur, b.kind.color, b.kind.key, !!b.kind.helm); } catch (e) {}
      }
    }
  }

  /* -- Bubble rendering: BAKED 2D SPRITES ------------------------------------
   * These are 2D, and they must stay 2D. A previous pass built them as real
   * voxel grids drawn through Vox.draw, which looked right and destroyed the
   * frame rate: the glitch pass alone repeats the body up to nine times per
   * bubble (trail + two ghosts + body + three torn slices), and each of those
   * was a full sort-and-fill over ~1500 voxel faces. With three bubbles on
   * screen that is five figures of fills per frame.
   *
   * What the game actually wants is the SPIRIT of voxel, not voxels: flat
   * stepped shading instead of smooth gradients, a chunky texel grid, hard
   * edges. So each grade is baked ONCE into an offscreen sprite out of plain
   * fillRect cells, and every frame is nothing but drawImage. Blits are scaled
   * with smoothing off, which keeps the pixel edges hard when the orb swells.
   *
   * Per frame, per bubble: one additive halo + one body + at most two ghosts
   * and three clipped slice re-blits. All drawn, never simulated - the hitbox
   * stays a clean circle.
   */
  const bubbleArt = new Map();          // kind.key -> { body, glow, R, pad }
  const hexToRgb = h => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];

  /** Deterministic 0..1 hash for a texel, so a baked grade always looks the same. */
  function cellHash(gx, gy, salt) {
    const s = Math.sin(gx * 127.1 + gy * 311.7 + salt * 74.7) * 43758.5453;
    return s - Math.floor(s);
  }

  /**
   * Does this texel survive, given the grade? The shapes have to differ in
   * SILHOUETTE - a hollow ball and a solid one are identical from outside, so
   * "hollow" has to mean visible holes, not an empty interior.
   */
  function orbCell(look, d, ang, gx, gy) {
    switch (look) {
      case 'lattice':                    // perforated husk: big punched ports
        if (d > 0.97) return false;
        return cellHash(gx, gy, 3) > 0.34 && !(((gx % 3) + 3) % 3 === 1 && ((gy % 3) + 3) % 3 === 1);
      case 'shard':                      // blown into separated plates
        if (d > 0.97 || d < 0.34) return false;
        return Math.abs(Math.sin(ang * 2.5)) > 0.42;
      case 'imploded':                   // tight core + a detached debris cloud
        if (d <= 0.46) return true;
        return d > 0.72 && d < 0.99 && cellHash(gx, gy, 9) > 0.55;
      case 'spiked':                     // dense body; spines are added after
      case 'solid':
      default:
        return d <= 0.97;
    }
  }

  /**
   * Bake one grade, in layers. Building the whole body out of squares was the
   * first attempt and it read as a muddy mosaic blob: flat mid-tone everywhere,
   * no depth, and the colour washed out because every texel was tone-shifted
   * off the source hex. What works is an energy shell with voxel texels ON it:
   *
   *   1. shell   — a soft field, brightest just inside the rim (the classic
   *                bubble read, and what makes it feel like contained energy)
   *   2. texels  — sparse chunky cells, additive, denser toward the rim; this
   *                is the "voxel spirit" without paying for actual voxels
   *   3. rim     — a broken ring of blocky segments rather than a smooth stroke
   *   4. spines  — only on the stalker, so its silhouette is unmistakable
   *
   * Everything additive uses the source hex at full strength: on a dark space
   * background that keeps each grade's colour identity, which tone-shifting
   * destroyed.
   */
  function bakeBubbleArt(kind) {
    const R = kind.r;
    const pad = Math.ceil(R * 1.5);                  // room for spines + rim
    const size = pad * 2;
    const cell = Math.max(3, Math.round(R / 8));     // ~16 texels across
    const [cr, cg, cb] = hexToRgb(kind.color);
    const rgba = (a, lift) => 'rgba('
      + Math.min(255, cr * (lift || 1) | 0) + ','
      + Math.min(255, cg * (lift || 1) | 0) + ','
      + Math.min(255, cb * (lift || 1) | 0) + ',' + a.toFixed(3) + ')';

    const body = document.createElement('canvas');
    body.width = body.height = size;
    const bx = body.getContext('2d');

    // --- 1. shell ---------------------------------------------------------
    const shell = bx.createRadialGradient(pad, pad, R * 0.1, pad, pad, R);
    shell.addColorStop(0, rgba(kind.look === 'imploded' ? 0.34 : 0.07));
    shell.addColorStop(0.5, rgba(kind.look === 'imploded' ? 0.08 : 0.13));
    shell.addColorStop(0.88, rgba(0.40));
    shell.addColorStop(1, rgba(0));
    bx.fillStyle = shell;
    bx.fillRect(0, 0, size, size);

    // --- 2. texels --------------------------------------------------------
    bx.globalCompositeOperation = 'lighter';
    for (let py = 0; py < size; py += cell) {
      for (let px = 0; px < size; px += cell) {
        const cx = px + cell / 2 - pad, cy = py + cell / 2 - pad;
        const d = Math.hypot(cx, cy) / R;
        if (d > 1.0) continue;
        const gx = Math.round(cx / cell), gy = Math.round(cy / cell);
        if (!orbCell(kind.look, d, Math.atan2(cy, cx), gx, gy)) continue;
        // Sparse on purpose: a full grid is a mosaic, scattered cells read as
        // energy caught in a lattice.
        const h = cellHash(gx, gy, 1);
        if (h < 0.42) continue;
        // lit from the upper left, quantised to four flat steps
        const lam = (-cx * 0.55 - cy * 0.72) / R;
        const step = Math.round(Engine.clamp(0.5 + lam * 0.7, 0, 1) * 3) / 3;
        const dense = 0.22 + d * d * 0.5;            // rim carries the detail
        bx.fillStyle = rgba(dense * (0.45 + step * 0.55) * (0.7 + h * 0.5), 1);
        bx.fillRect(px, py, cell, cell);
      }
    }

    // --- 3. rim: a broken ring of blocky segments -------------------------
    const seg = Math.max(18, Math.round(R * 0.7));
    for (let i = 0; i < seg; i++) {
      const a = (i / seg) * Math.PI * 2;
      if (cellHash(i, 0, 6) < 0.28) continue;        // gaps keep it from reading as a stroke
      const d = R * 0.97;
      const w = cell * (cellHash(i, 1, 6) > 0.7 ? 1.4 : 1);
      bx.fillStyle = rgba(0.55 + cellHash(i, 2, 6) * 0.4, 1.2);
      bx.fillRect(pad + Math.cos(a) * d - w / 2, pad + Math.sin(a) * d - w / 2, w, w);
    }

    // --- 4. spines (stalker only) -----------------------------------------
    if (kind.look === 'spiked') {
      for (let i = 0; i < 8; i++) {
        const a = (i / 8) * Math.PI * 2 + 0.2;
        for (let t = 0; t < 6; t++) {
          const d = R * (0.95 + t * 0.075);
          const w = cell * (t < 2 ? 1.6 : t < 4 ? 1.15 : 0.8);
          bx.fillStyle = rgba(0.95 - t * 0.13, 1.25);
          bx.fillRect(pad + Math.cos(a) * d - w / 2, pad + Math.sin(a) * d - w / 2, w, w);
        }
      }
    }

    // A handful of white-hot texels: the "live signal" specks that make it feel
    // powered rather than painted.
    for (let i = 0; i < 12; i++) {
      const a = cellHash(i, 5, 2) * Math.PI * 2;
      const d = R * (0.25 + cellHash(i, 7, 4) * 0.68);
      bx.fillStyle = 'rgba(255,255,255,0.34)';
      bx.fillRect(pad + Math.cos(a) * d, pad + Math.sin(a) * d, cell, cell);
    }
    bx.globalCompositeOperation = 'source-over';

    // Halo, baked into the SAME sprite rather than a second canvas. Keeping it
    // separate cost one extra full-size blit per bubble per frame for nothing:
    // every pass that draws the body wants the halo with it anyway, and the
    // ghosts glowing along with the body is exactly the look we want.
    const halo = bx.createRadialGradient(pad, pad, R * 0.35, pad, pad, pad);
    halo.addColorStop(0, rgba(0.30));
    halo.addColorStop(0.5, rgba(0.13));
    halo.addColorStop(1, rgba(0));
    bx.globalCompositeOperation = 'destination-over';
    bx.fillStyle = halo;
    bx.fillRect(0, 0, size, size);
    bx.globalCompositeOperation = 'source-over';

    const art = { body, R, pad, size };
    bubbleArt.set(kind.key, art);
    return art;
  }

  function bubbleArtFor(kind) {
    return bubbleArt.get(kind.key) || bakeBubbleArt(kind);
  }

  /** One blit of the baked body — the unit the glitch pass repeats. */
  function drawOrbPass(ctx, art, px, py, rr, alpha, spin) {
    if (alpha <= 0.004) return;
    const s = rr / art.R;
    ctx.globalAlpha = alpha;
    ctx.translate(px, py);
    ctx.rotate(spin);
    ctx.drawImage(art.body, -art.pad * s, -art.pad * s, art.size * s, art.size * s);
    ctx.rotate(-spin);
    ctx.translate(-px, -py);
    ctx.globalAlpha = 1;
  }

  function drawBubbles(ctx) {
    for (const b of bubbleList) {
      const R = b.kind.r;
      const born = b.attached ? 1 : (b.born < 1 ? b.born * b.born * (3 - 2 * b.born) : 1);
      // Sharp swell on the pulsing grades: a hard jump out and a quick settle.
      const swell = b.kind.pulse ? 1 + (b.swell || 0) * 0.30 : 1 + Math.sin(b.t * 3.2) * 0.035;
      const rr = R * swell * (0.25 + 0.75 * born);
      // Phasing grades go COMPLETELY invisible. They stay solid while hidden -
      // that is the dare - and the long "seen" window is what keeps it fair.
      const vis = b.attached ? 1 : (b.kind.move === 'phase' ? (b.phase ? 1 : 0) : 1);
      let A = born * vis;
      if (A <= 0.001) continue;

      const t = b.t;
      const col = b.kind.color;
      const art = bubbleArtFor(b.kind);
      const spin = t * 0.35 + b.seed;            // slow tumble, cheap: it is a rotate

      // Dropout: whole-frame flickers, so it reads as a failing transmission
      // rather than a smoothly animated ball.
      const drop = Math.sin(t * 37 + b.seed * 5) > 0.93 ? 0.45 : 1;
      A *= drop;

      ctx.save();
      // Hard edges when the sprite is scaled by the swell — smoothing back on
      // would blur the texels into exactly the airbrushed ball we are avoiding.
      const smooth = ctx.imageSmoothingEnabled;
      ctx.imageSmoothingEnabled = false;

      ctx.globalCompositeOperation = 'lighter';

      // --- dart trail: discrete ghosts, not a smear ---
      if (b.dash > 0 && !b.attached) {
        const k = b.dash / 0.55;
        const sp = Math.hypot(b.vx, b.vy) || 1;
        for (let i = 1; i <= 3; i++) {
          const back = i * 15 * k;
          drawOrbPass(ctx, art,
            b.x - b.vx / sp * back, b.y - b.vy / sp * back,
            rr * (1 - i * 0.13), 0.18 * k * A / i, spin - i * 0.05);
        }
      }

      // --- glitch: split ghosts either side of the true position ---
      // Fired in bursts, not every frame. Drawing them constantly cost two extra
      // full blits per bubble forever AND read as a soft blur; intermittent, with
      // a wider throw, actually reads as a signal breaking up.
      const tear = Math.sin(t * 11 + b.seed * 3) + Math.sin(t * 29 + b.seed);
      if (tear > 0.9) {
        const shake = 3 + tear * 3 * (1 + (b.swell || 0));
        drawOrbPass(ctx, art, b.x - shake, b.y, rr, 0.34 * A, spin + 0.05);
        drawOrbPass(ctx, art, b.x + shake, b.y, rr, 0.34 * A, spin - 0.05);
      }

      // --- the orb itself ---
      // Once it has latched onto the hull the body thins out: the player still
      // has to fly through the lockout, and a fully opaque orb would hide the
      // ship they are dodging with. Ring and countdown stay at full strength.
      // Additive: this is contained energy, not a painted ball. It also means
      // the field never fully occludes what is behind it, which matters most
      // when it has latched onto the ship the player is dodging with.
      const bodyA = b.attached ? A * 0.72 : A;
      drawOrbPass(ctx, art, b.x, b.y, rr, bodyA, spin);

      // --- torn slices: re-blit horizontal bands shoved sideways ---
      // Cut with a SOURCE rect, not ctx.clip(). A clip is a path rasterised and
      // pushed onto the state stack every time, and at three slices per bubble
      // per frame it cost more than the blits it was guarding.
      const ss = rr / art.R;
      const topY = b.y - art.pad * ss;
      for (let i = 0; i < 3; i++) {
        const seed = Math.sin(t * (9 + i * 5) + i * 31 + b.seed) * 0.5 + 0.5;
        if (seed < 0.62) continue;                 // most frames stay clean
        const h = rr * (0.16 + seed * 0.2);
        const sy = b.y - rr + seed * rr * 2;
        const off = (seed - 0.5) * rr * 0.75;
        const s0 = Engine.clamp((sy - topY) / ss, 0, art.size);
        const s1 = Engine.clamp((sy + h - topY) / ss, 0, art.size);
        if (s1 - s0 < 0.5) continue;
        ctx.globalAlpha = 0.7 * bodyA;
        ctx.drawImage(art.body, 0, s0, art.size, s1 - s0,
          b.x - art.pad * ss + off, topY + s0 * ss, art.size * ss, (s1 - s0) * ss);
        ctx.globalAlpha = 1;
      }
      ctx.imageSmoothingEnabled = smooth;

      // --- containment ring: keeps every grade in one family and marks the
      //     hitbox, which the ragged voxel silhouette alone would not. ---
      ctx.globalCompositeOperation = 'lighter';
      ctx.globalAlpha = 0.75 * A;
      ctx.strokeStyle = col;
      ctx.lineWidth = 1.6 + (b.swell || 0) * 2;
      ctx.setLineDash([7, 5]);
      ctx.lineDashOffset = -t * 22;
      ctx.beginPath(); ctx.arc(b.x, b.y, rr * 1.06, 0, Math.PI * 2); ctx.stroke();
      ctx.setLineDash([]);
      // flash ring on the swell so the pulse punches
      if ((b.swell || 0) > 0.05) {
        ctx.globalAlpha = (b.swell || 0) * 0.7 * A;
        ctx.lineWidth = 3;
        ctx.beginPath(); ctx.arc(b.x, b.y, rr * (1.1 + (1 - b.swell) * 0.5), 0, Math.PI * 2); ctx.stroke();
      }
      // helm-stealer wears a warning cross
      if (b.kind.helm) {
        ctx.globalAlpha = 0.6 * A * (0.6 + 0.4 * Math.abs(Math.sin(t * 8)));
        ctx.lineWidth = 2;
        const d = rr * 0.34;
        ctx.beginPath();
        ctx.moveTo(b.x - d, b.y - d); ctx.lineTo(b.x + d, b.y + d);
        ctx.moveTo(b.x + d, b.y - d); ctx.lineTo(b.x - d, b.y + d);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
      ctx.restore();

      // Attached: a countdown so the lockout has a visible end, not a vague wait.
      if (b.attached && b.total > 0) {
        const frac = Engine.clamp(b.left / b.total, 0, 1);
        ctx.save();
        ctx.lineCap = 'round';
        ctx.strokeStyle = 'rgba(0,0,0,0.45)';
        ctx.lineWidth = 5;
        ctx.beginPath(); ctx.arc(b.x, b.y, rr + 7, 0, Math.PI * 2); ctx.stroke();
        ctx.strokeStyle = col;
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.arc(b.x, b.y, rr + 7, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * frac);
        ctx.stroke();
        ctx.restore();

        ctx.save();
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = 'bold 17px system-ui, sans-serif';
        ctx.lineWidth = 3;
        ctx.strokeStyle = 'rgba(0,0,0,0.75)';
        ctx.fillStyle = col;
        const lbl = b.left.toFixed(1);
        ctx.strokeText(lbl, b.x, b.y - rr - 20);
        ctx.fillText(lbl, b.x, b.y - rr - 20);
        ctx.restore();
      }
    }
  }

  /* ---------- enemy homing missiles (steer then commit) ---------- */
  function updateHoming(dt, p) {
    missileT -= dt;
    if (missileT <= 0 && p) {
      missileT = Engine.rand(1.4, 2.6);
      const sx = Engine.rand(40, Engine.W - 40), sy = -20;
      const a = Math.atan2(p.y - sy, p.x - sx);
      missiles.push({ x: sx, y: sy, vx: Math.cos(a) * 300, vy: Math.sin(a) * 300, steer: 0.7, dmgT: 0 });
    }
    for (let i = missiles.length - 1; i >= 0; i--) {
      const m = missiles[i]; m.steer -= dt;
      if (m.steer > 0 && p) {                     // brief homing window, then commit straight
        const a = Math.atan2(p.y - m.y, p.x - m.x), sp = Math.hypot(m.vx, m.vy);
        m.vx = Engine.lerp(m.vx, Math.cos(a) * sp, 0.05); m.vy = Engine.lerp(m.vy, Math.sin(a) * sp, 0.05);
      }
      m.x += m.vx * dt; m.y += m.vy * dt;
      if (Math.random() < 0.6) Engine.burst(m.x, m.y, '#ff9a4a', 1, 1.4, 2);
      if (m.x < -30 || m.x > Engine.W + 30 || m.y < -40 || m.y > Engine.H + 30) { missiles.splice(i, 1); continue; }
      if (p && Engine.dist2(m.x, m.y, p.x, p.y) < (5 + p.r) * (5 + p.r)) { missiles.splice(i, 1); Game.damagePlayer(); }
    }
  }

  /* ---------- solar wind (lateral push) ---------- */
  function updateWind(dt) {
    if (windForced) {
      windT -= dt;
      const hold = windT > 0 ? (windTarget || Math.sign(windForce) || 1) : 0;
      windForce = Engine.lerp(windForce, hold, 0.12);
      Engine.input.px = Engine.clamp(Engine.input.px + windForce * 155 * dt, 0, Engine.W);
      return;
    }
    windT -= dt;
    if (windT <= 0) { windTarget = Engine.rand(-1, 1); windT = Engine.rand(2.5, 4.5); }
    windForce = Engine.lerp(windForce, windTarget, 0.02);
    Engine.input.px = Engine.clamp(Engine.input.px + windForce * 130 * dt, 0, Engine.W);
  }
  /** Boss-driven solar wind: lock direction for `sec` seconds. */
  function forceWind(dir, sec) {
    wind = true; active = true; windForced = true;
    windTarget = dir < 0 ? -1 : 1;
    windForce = windTarget * 0.5;
    windT = Math.max(0.8, sec || 5);
  }
  /** End a boss gale without killing a stage-native wind hazard. */
  function releaseWind() {
    if (!windForced) return;
    windForced = false;
    windForce = 0;
    windTarget = 0;
    windT = 0;
    if (!windStage) {
      wind = false;
      active = intensity > 0 || magma || rocks || homing || wind;
    }
  }

  function update(dt) {
    if (!active) return;
    const p = Game.player;
    if (intensity > 0) updateRadiation(dt, p);
    if (magma) updateMagma(dt, p);
    if (rocks) updateRocks(dt, p);
    if (homing) updateHoming(dt, p);
    if (bubbles) updateBubbles(dt, p);
    if (wind) updateWind(dt);
  }

  /* ---------- draw — cinematic radiation curtains ---------- */
  function drawBeams(ctx, W, H) {
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    for (const b of beams) {
      const s = beamState(b);
      const lethal = s.lethal;
      const aCore = lethal ? 0.82 : 0.38;
      const aGlow = lethal ? 0.38 : 0.16;
      const pulse = 0.85 + 0.15 * Math.sin(b.t * 14);
      if (b.vertical) {
        const half = Math.max(2, b.max * s.w * 0.5);
        // Warning phase: sweeping chevrons + edge pulse (never reuse on fade)
        if (s.phase === 'warn') {
          const flash = 0.35 + 0.45 * Math.abs(Math.sin(b.t * 9));
          ctx.strokeStyle = `rgba(${b.hue},${flash})`;
          ctx.lineWidth = 2;
          ctx.setLineDash([6, 10]);
          ctx.beginPath(); ctx.moveTo(b.pos, 0); ctx.lineTo(b.pos, H); ctx.stroke();
          ctx.setLineDash([]);
          for (let y = ((b.t * 90) % 28); y < H; y += 28) {
            ctx.fillStyle = `rgba(${b.hue},${0.4 + flash * 0.4})`;
            ctx.beginPath();
            ctx.moveTo(b.pos, y);
            ctx.lineTo(b.pos - 10, y + 8);
            ctx.lineTo(b.pos + 10, y + 8);
            ctx.closePath(); ctx.fill();
          }
          // top/bottom "breach" marks
          ctx.fillStyle = `rgba(255,255,200,${flash * 0.7})`;
          ctx.fillRect(b.pos - 16, 4, 32, 3);
          ctx.fillRect(b.pos - 16, H - 7, 32, 3);
          continue;
        }
        // Outer bloom
        const g = ctx.createLinearGradient(b.pos - half * 1.8, 0, b.pos + half * 1.8, 0);
        g.addColorStop(0, `rgba(${b.hue},0)`);
        g.addColorStop(0.5, `rgba(${b.hue},${aGlow * pulse})`);
        g.addColorStop(1, `rgba(${b.hue},0)`);
        ctx.fillStyle = g;
        ctx.fillRect(b.pos - half * 1.8, 0, half * 3.6, H);
        // Voxel chain core
        const cell = 7;
        for (let y = 0; y < H; y += cell) {
          const wob = Math.sin(y * 0.05 + b.t * 7) * 2.2;
          const hw = half * (0.5 + 0.5 * (0.5 + 0.5 * Math.sin(y * 0.1 + b.t * 5)));
          ctx.fillStyle = `rgba(${b.hue},${aCore * 0.5 * pulse})`;
          ctx.fillRect(b.pos - hw + wob, y + 1, hw * 2, cell - 2);
          if (lethal) {
            ctx.fillStyle = `rgba(255,255,240,${0.4 + 0.3 * Math.sin(y * 0.14 + b.t * 12)})`;
            ctx.fillRect(b.pos - 2.5 + wob * 0.35, y + 1, 5, cell - 2);
          }
        }
        // Edge sparks
        if (lethal && Math.random() < 0.18) {
          Engine.burst(b.pos + (Math.random() - 0.5) * half * 1.2, Math.random() * H, '#d0ffe8', 2, 1.6, 2.4);
        }
      } else {
        const half = Math.max(2, b.max * s.w * 0.5);
        const ph = (b.phase || 0) + b.t * 3.4;
        if (s.phase === 'warn') {
          const flash = 0.35 + 0.45 * Math.abs(Math.sin(b.t * 9));
          ctx.strokeStyle = `rgba(${b.hue},${flash})`;
          ctx.lineWidth = 2;
          ctx.setLineDash([8, 12]);
          ctx.beginPath(); ctx.moveTo(0, b.pos); ctx.lineTo(W, b.pos); ctx.stroke();
          ctx.setLineDash([]);
          for (let x = ((b.t * 80) % 32); x < W; x += 32) {
            ctx.fillStyle = `rgba(${b.hue},${0.45 + flash * 0.35})`;
            ctx.beginPath();
            ctx.moveTo(x, b.pos);
            ctx.lineTo(x + 8, b.pos - 9);
            ctx.lineTo(x + 8, b.pos + 9);
            ctx.closePath(); ctx.fill();
          }
          continue;
        }
        const cell = 9;
        for (let x = 0; x < W; x += cell) {
          const wave = Math.sin(x * 0.055 + ph) * (7 + half * 0.14);
          const hh = half * (0.55 + 0.45 * (0.5 + 0.5 * Math.sin(x * 0.09 + b.t * 5)));
          ctx.fillStyle = `rgba(${b.hue},${aCore * 0.48 * pulse})`;
          ctx.fillRect(x + 1, b.pos - hh + wave, cell - 2, hh * 2);
          if (lethal) {
            ctx.fillStyle = `rgba(255,255,240,${0.32 + 0.28 * Math.sin(x * 0.12 + b.t * 10)})`;
            ctx.fillRect(x + 2, b.pos - 2.5 + wave * 0.4, cell - 4, 5);
          }
        }
        if (lethal && Math.random() < 0.14) {
          Engine.burst(Math.random() * W, b.pos + (Math.random() - 0.5) * half, '#b8ffe0', 2, 1.5, 2.2);
        }
      }
    }
    ctx.restore();
  }
  function drawMagma(ctx, W, H) {
    const top = H - magmaLevel;
    const g = ctx.createLinearGradient(0, top, 0, H);
    g.addColorStop(0, 'rgba(255,140,30,0.0)'); g.addColorStop(0.25, 'rgba(255,90,20,0.55)');
    g.addColorStop(1, 'rgba(255,40,10,0.92)');
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.moveTo(0, top + Math.sin(magmaCycle * 3) * 3);
    for (let x = 0; x <= W; x += 16) ctx.lineTo(x, top + Math.sin(x * 0.04 + magmaCycle * 4) * 6);
    ctx.lineTo(W, H); ctx.lineTo(0, H); ctx.closePath(); ctx.fill();
    // glowing BLOCKY crest (voxel style) + rising ember cubes
    for (let x = 0; x <= W; x += 16) {
      const yy = top + Math.sin(x * 0.04 + magmaCycle * 4) * 6;
      ctx.fillStyle = 'rgba(255,220,120,0.9)'; ctx.fillRect(x, yy - 4, 8, 8);
      ctx.fillStyle = 'rgba(255,140,40,0.7)'; ctx.fillRect(x + 8, yy + 1, 8, 6);
    }
    if (Math.random() < 0.35) Engine.burst(Engine.rand(10, W - 10), top + 4, '#ffb35c', 1, 1.2, 2.4);
    // geysers
    for (const gy of geysers) {
      const half = gy.w * 0.5;
      if (gy.t < gy.warn) { ctx.fillStyle = 'rgba(255,200,90,0.8)'; ctx.fillRect(gy.x - 2, top - 30, 4, 30); }
      else { const a = 1 - (gy.t - gy.warn) / gy.life;
        const gg = ctx.createLinearGradient(0, 40, 0, top);
        gg.addColorStop(0, `rgba(255,120,20,0)`); gg.addColorStop(1, `rgba(255,200,90,${0.7 * a + 0.2})`);
        ctx.fillStyle = gg; ctx.fillRect(gy.x - half, 40, gy.w, top - 40);
        ctx.fillStyle = `rgba(255,255,200,${0.5 * a})`; ctx.fillRect(gy.x - 2, 40, 4, top - 40); }
    }
  }
  function drawRocks(ctx) {
    // LIVE 3D tumbling voxel rocks (indestructible hazard)
    const m = Vox.MODELS.asteroid;
    for (const r of rockList) {
      Vox.groundShadow(ctx, r.x, r.y, r.r, { a: 0.4 });
      Vox.draw(ctx, m, r.x, r.y, { s: (r.r * 2.3 / m.w) * 1.2, yaw: r.rot, roll: r.rot * 0.6, t: r.rot });
    }
  }
  function drawMissiles(ctx) {
    const m = Vox.MODELS.missile;
    for (const mi of missiles) {
      const a = Math.atan2(mi.vy, mi.vx);
      Vox.groundShadow(ctx, mi.x, mi.y, 10, { a: 0.35 });
      Vox.draw(ctx, m, mi.x, mi.y, { s: 4.6, yaw: a + Math.PI / 2, t: performance.now() / 1000, thrust: 1, flameColor: '#ffd24a' });
    }
  }
  function drawWind(ctx, W, H) {
    if (Math.abs(windForce) < 0.05) return;
    ctx.strokeStyle = `rgba(160,200,255,${0.05 + Math.abs(windForce) * 0.12})`; ctx.lineWidth = 1;
    const dir = Math.sign(windForce), t = (performance.now() / 1000);
    for (let i = 0; i < 10; i++) {
      const y = (i * 83 + (t * 120 * dir) % 90 + H) % H;
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y + dir * 18); ctx.stroke();
    }
  }

  function draw(ctx) {
    if (!active) return;
    const W = Engine.W, H = Engine.H;
    ctx.save();
    if (wind) drawWind(ctx, W, H);
    if (beams.length) drawBeams(ctx, W, H);
    if (rocks) drawRocks(ctx);
    if (homing) drawMissiles(ctx);
    if (bubbleList.length) drawBubbles(ctx);
    if (magma) drawMagma(ctx, W, H);            // magma on top (foreground danger)
    ctx.restore();
  }

  /** Boss-driven magma: `on` starts a surge; `off` dumps the pool without touching other hazards. */
  function setMagma(on, surge) {
    if (on) {
      magma = true; active = true;
      if (surge || magmaCycle < 4) magmaCycle = 4.35;
    } else {
      magma = false;
      geysers.length = 0;
      magmaLevel = Math.min(magmaLevel, 8);
      active = intensity > 0 || magma || rocks || homing || wind;
    }
  }

  return { start, stop, reset, enable, intensify, forceWind, releaseWind, setMagma, update, draw, get active() { return active; },
    BUBBLE_KINDS, demoBubble, endDemoBubble,
    _beams: () => beams, _rocks: () => rockList, _missiles: () => missiles, _geysers: () => geysers,
    _bubbles: () => bubbleList, _pickKind: pickBubbleKind };
})();
