/* ============================================================
 * voxui.js — voxel/pixel dressing for the DOM menus:
 *   • animShip(canvas)   — LIVE rotating 3D voxel ship
 *   • scene(...)         — deep space (stars + smooth volume planet)
 *   • scene fx           — shooting stars (same language as campaign map)
 *   • decorate(root)     — planet art on hub cards
 * ========================================================== */
const VoxUI = (() => {
  const TAU = Math.PI * 2;
  const hex2rgb = h => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
  const srng = seed => { let s = (seed * 16807 + 7) % 2147483647; return () => ((s = s * 16807 % 2147483647) / 2147483647); };

  /* ---------- live ship spins ---------- */
  const anims = new Map();   // canvas → {ctx, key, s, speed, ph}
  // Stable phase per ship key so hub re-render (diff switch) doesn't jerk/restart spin.
  const shipPhase = new Map();
  let shipTimer = null;
  // When true, timers skip clear/draw so FXTrans can snapshot stable canvas pixels.
  let captureFrozen = false;
  /**
   * The player's OWN ship wears its cosmetics everywhere it is drawn in the
   * menus — hangar cards, module bay, hub, transitions — not just in combat.
   * A paint you cannot see until you launch is a paint nobody buys.
   * Other ships in the roster stay stock: those cards are a catalogue.
   * Meta/Player load after this file, hence the guards.
   */
  function skinnedModel(key) {
    const stock = Vox.MODELS[key] || Vox.MODELS.vanguard;
    try {
      const p = Profile.get();
      if (!p || p.ship !== key) return { m: stock, flame: null };
      return {
        m: Player.paintedModel(key, Meta.paintHex(p), Meta.glowHex(p)) || stock,
        flame: Meta.trailHex(p) || null,
      };
    } catch (e) { return { m: stock, flame: null }; }
  }

  function paintShipNow(cnv, a, t) {
    if (!cnv || !a) return;
    const skin = skinnedModel(a.key);
    const x = a.ctx, m = skin.m;
    x.clearRect(0, 0, cnv.width, cnv.height);
    // faceMode: fixed yaw/roll toward flight heading (map flyer); else idle spin
    const yaw = a.faceMode && a.yaw != null ? a.yaw : (t * a.speed + a.ph);
    const roll = a.faceMode
      ? (a.roll != null ? a.roll : 0)
      : Math.sin(t * 0.9 + a.ph) * 0.1;
    let thrust = a.thrust != null ? a.thrust : 1;
    if (a.faceMode && a.thrustPulse) {
      thrust = 0.75 + 0.45 * (0.5 + 0.5 * Math.sin(t * 22 + a.ph));
    }
    Vox.draw(x, m, cnv.width / 2, cnv.height / 2 + cnv.height * 0.04, {
      s: a.s, yaw, roll, t, thrust, ignoreCam: true,
      flameColor: skin.flame || undefined });
  }
  /**
   * Is this canvas invisible right now?
   *
   * A live ship is a full voxel render 30 times a second, and two of them run
   * where nobody can see them: the hub keeps spinning its ship underneath the
   * campaign map, and the map's own flyer sits far outside the viewport
   * whenever the camera is looking elsewhere. Together they were the whole
   * remaining cost of the map screen.
   *
   * Skipping them must never change a single pixel the player sees, so the test
   * refuses to guess. Off-viewport is unconditionally safe. An overlay only
   * counts when it is FULLY opaque and covers the canvas COMPLETELY — a scrim,
   * a faded layer or a partial panel keeps the ship animating. Re-checked three
   * times a second, so the layout flush it costs stays in the noise.
   */
  // Re-check a skipped canvas sooner than a painted one: the cost of being
  // wrong is asymmetric. Believing a visible ship is hidden freezes it on
  // screen, so that verdict expires in 100ms (three ticks, 4 degrees of spin —
  // and the pose comes from absolute time, so it snaps to where it should be
  // rather than rewinding). Believing a hidden ship is visible merely wastes a
  // few frames, so it can ride for longer.
  const OCC_TTL = 100, VIS_TTL = 300;
  function offViewport(r) {
    return r.width < 1 || r.height < 1 ||
           r.bottom <= 0 || r.right <= 0 || r.top >= innerHeight || r.left >= innerWidth;
  }
  function alphaOf(css) {
    const m = /^rgba?\(([^)]+)\)/.exec(css || '');
    if (!m) return 0;
    const parts = m[1].split(',');
    return parts.length > 3 ? parseFloat(parts[3]) : 1;
  }
  function coveredByOpaque(cnv, r) {
    const cx = Math.min(innerWidth - 1, Math.max(0, r.left + r.width / 2));
    const cy = Math.min(innerHeight - 1, Math.max(0, r.top + r.height / 2));
    const hit = document.elementFromPoint(cx, cy);
    if (!hit || hit === cnv || cnv.contains(hit)) return false;
    // Walk up from whatever is on top. Transparent layers (a canvas has no
    // background colour of its own) hand the question to their parent; the
    // first solid ancestor decides.
    for (let p = hit, n = 0; p && p !== document.body && n < 10; p = p.parentElement, n++) {
      if (p.contains(cnv)) return false;            // our own screen, not an overlay
      const cs = getComputedStyle(p);
      if (cs.opacity !== '1' || cs.visibility === 'hidden') return false;
      if (alphaOf(cs.backgroundColor) < 1) continue;
      const pr = p.getBoundingClientRect();
      return pr.left <= r.left && pr.top <= r.top && pr.right >= r.right && pr.bottom >= r.bottom;
    }
    return false;
  }
  function computeInvisible(cnv) {
    const r = cnv.getBoundingClientRect();
    return offViewport(r) || coveredByOpaque(cnv, r);
  }
  function invisibleNow(cnv, a, now) {
    if (a._occT && now - a._occT < (a._occ ? OCC_TTL : VIS_TTL)) return a._occ;
    a._occT = now;
    a._occ = computeInvisible(cnv);
    return a._occ;
  }

  // Reusable scratch so the per-tick visible set never allocates.
  const visible = [];
  function ensureShipTimer() {
    if (shipTimer) return;
    let last = performance.now();
    // 30 per second on every quality tier. This used to be a tier knob; it made
    // the lower tiers visibly stutter, which is the opposite of what they are
    // for. Cheaper frames, never fewer.
    const period = 33;
    shipTimer = setInterval(() => {
      if (captureFrozen) return;
      const now = performance.now(), dt = Math.min(0.1, (now - last) / 1000); last = now;
      const t = now / 1000;
      visible.length = 0;
      for (const [cnv, a] of anims) {
        if (!cnv.isConnected) { anims.delete(cnv); continue; }
        // offsetParent null on display:none — still draw if connected & not .hidden ancestor
        if (cnv.offsetParent === null) {
          let hid = false, p = cnv;
          while (p) { if (p.classList && p.classList.contains('hidden')) { hid = true; break; } p = p.parentElement; }
          if (hid) continue;
        }
        if (invisibleNow(cnv, a, now)) continue;
        visible.push(cnv);
      }
      // A hangar can have eight hulls turning at once. Below the top tier only
      // the biggest few keep moving — the hero preview the player is actually
      // looking at — and the catalogue thumbnails hold their last frame. They
      // were already painted once, so they show a ship, not an empty box.
      const cap = (typeof Quality !== 'undefined' && Quality.v('shipLive')) || 99;
      if (visible.length > cap) {
        visible.sort((a, b) => (b.width * b.height) - (a.width * a.height));
        visible.length = cap;
      }
      for (let i = 0; i < visible.length; i++) paintShipNow(visible[i], anims.get(visible[i]), t);
      if (!anims.size) { clearInterval(shipTimer); shipTimer = null; }
    }, period);
  }
  /**
   * Quality tier changed. The tick rate no longer depends on the tier, but the
   * cap on simultaneously spinning hulls does, so a fresh tick applies it.
   */
  function retimeShips() {
    if (!shipTimer) return;
    clearInterval(shipTimer); shipTimer = null;
    if (anims.size) ensureShipTimer();
  }
  /**
   * Freeze UI canvas anims and paint a stable final frame for transitions.
   * Returns unfreeze(). Call AFTER the transition curtain covers the screen.
   */
  function freezeForCapture() {
    captureFrozen = true;
    const t = performance.now() / 1000;
    for (const [cnv, a] of anims) {
      if (!cnv.isConnected) continue;
      try { paintShipNow(cnv, a, t); } catch (e) {}
    }
    // Leave scene-fx as last painted frame (don't clear during freeze)
    return function unfreeze() { captureFrozen = false; };
  }
  function animShip(cnv, key, o = {}) {
    if (!cnv) return;
    const k = key || 'vanguard';
    // Keep phase continuous across DOM rebuilds; allow explicit override via o.ph.
    let ph = o.ph;
    if (ph == null) {
      if (!shipPhase.has(k)) shipPhase.set(k, Math.random() * 6.3);
      ph = shipPhase.get(k);
    } else {
      shipPhase.set(k, ph);
    }
    anims.set(cnv, {
      ctx: cnv.getContext('2d'), key: k,
      s: o.s || Math.min(cnv.width, cnv.height) / 16,
      speed: o.speed != null ? o.speed : 0.7,
      ph,
      faceMode: !!o.faceMode,
      yaw: o.yaw != null ? o.yaw : 0,
      roll: o.roll != null ? o.roll : 0,
      thrust: o.thrust != null ? o.thrust : 1,
      thrustPulse: !!o.thrustPulse,
    });
    ensureShipTimer();
  }

  /** Live-update facing / thrust for a map flyer (or any animShip canvas). */
  function setShipPose(cnv, pose) {
    const a = anims.get(cnv);
    if (!a || !pose) return;
    if (pose.yaw != null) a.yaw = pose.yaw;
    if (pose.roll != null) a.roll = pose.roll;
    if (pose.thrust != null) a.thrust = pose.thrust;
    if (pose.faceMode != null) a.faceMode = !!pose.faceMode;
    if (pose.thrustPulse != null) a.thrustPulse = !!pose.thrustPulse;
    if (pose.speed != null) a.speed = pose.speed;
  }

  /* ---------- polished UI planet ----------
   * Supersampled sphere + directional lighting + atmospheric limb.
   * Cinematic mode: stronger volume, softer outer glow, crisp terminator.
   */
  const planetBake = new Map();
  function planet(ctx, cx, cy, r, o = {}) {
    if (r < 2) return;
    const rs = Math.max(2, Math.round(r));
    const key = [
      rs, o.base || '', o.kind || '', o.seed || 0, o.ring ? 1 : 0,
      o.ringColor || '', o.glow || '', o.craters === false ? 0 : 1,
      o.cinematic ? 1 : 0,
    ].join('|');
    let bmp = planetBake.get(key);
    if (!bmp) {
      // Higher AA for large / cinematic bodies
      const S = (o.cinematic || rs >= 90) ? 3 : 2;
      const padFrac = o.ring ? 0.72 : (o.cinematic ? 0.42 : 0.22);
      const pad = Math.ceil(rs * padFrac * S);
      const R = rs * S;
      const size = R * 2 + pad * 2;
      const c = document.createElement('canvas');
      c.width = c.height = size;
      paintPlanetCore(c.getContext('2d'), size * 0.5, size * 0.5, R, o);
      const out = document.createElement('canvas');
      out.width = out.height = Math.ceil(size / S);
      const ox = out.getContext('2d');
      ox.imageSmoothingEnabled = true;
      ox.imageSmoothingQuality = 'high';
      ox.drawImage(c, 0, 0, out.width, out.height);
      bmp = out;
      if (planetBake.size > 64) planetBake.clear();
      planetBake.set(key, bmp);
    }
    const half = (bmp.width * 0.5) * (r / rs);
    ctx.drawImage(bmp, cx - half, cy - half, half * 2, half * 2);
  }

  function paintPlanetCore(ctx, cx, cy, r, o) {
    const [br0, bg0, bb0] = hex2rgb(o.base || '#3a6ad0');
    const Rng = srng(o.seed || 3);
    const kind = o.kind || 'rocky';
    const cin = !!o.cinematic;
    let br = br0, bg = bg0, bb = bb0;
    if (kind === 'ice') { br = Math.min(255, br0 + 18); bg = Math.min(255, bg0 + 24); bb = Math.min(255, bb0 + 32); }
    if (kind === 'gas') { br = Math.min(255, br0 + 10); bg = Math.min(255, bg0 + 5); }
    const doCraters = o.craters !== false && kind !== 'gas' && r > 28;
    // Key light upper-left (classic planet portrait)
    const lx = -0.58, ly = -0.72;

    // Soft atmospheric halo outside the disc (low alpha, hue-matched — no white blobs)
    {
      const ar = r * (cin ? 1.20 : 1.13);
      const g = ctx.createRadialGradient(cx, cy, r * 0.96, cx, cy, ar);
      const glow = o.glow || `rgba(${Math.min(255, br + 20)},${Math.min(255, bg + 40)},${Math.min(255, bb + 70)},${cin ? 0.14 : 0.12})`;
      g.addColorStop(0, 'rgba(0,0,0,0)');
      g.addColorStop(0.45, 'rgba(0,0,0,0)');
      g.addColorStop(0.78, glow);
      g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(cx, cy, ar, 0, TAU); ctx.fill();
    }

    if (o.ring) paintRing(ctx, cx, cy, r, o, 'back');

    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, TAU);
    ctx.closePath();
    ctx.clip();

    // Base sphere: deep night floor so the disc never reads flat mid-gray
    {
      ctx.fillStyle = `rgb(${(br * 0.08) | 0},${(bg * 0.08) | 0},${(bb * 0.12) | 0})`;
      ctx.fillRect(cx - r - 1, cy - r - 1, r * 2 + 2, r * 2 + 2);
    }

    // Day hemisphere (tighter falloff = more volume)
    {
      const gx = cx + lx * r * 0.42, gy = cy + ly * r * 0.42;
      const lit = ctx.createRadialGradient(gx, gy, r * 0.02, gx, gy, r * (cin ? 1.35 : 1.5));
      lit.addColorStop(0.00, `rgb(${Math.min(255, br + 48) | 0},${Math.min(255, bg + 40) | 0},${Math.min(255, bb + 34) | 0})`);
      lit.addColorStop(0.18, `rgb(${Math.min(255, br + 12) | 0},${Math.min(255, bg + 10) | 0},${Math.min(255, bb + 10) | 0})`);
      lit.addColorStop(0.40, `rgb(${br | 0},${bg | 0},${bb | 0})`);
      lit.addColorStop(0.62, `rgb(${(br * 0.48) | 0},${(bg * 0.46) | 0},${(bb * 0.52) | 0})`);
      lit.addColorStop(0.80, `rgb(${(br * 0.20) | 0},${(bg * 0.20) | 0},${(bb * 0.26) | 0})`);
      lit.addColorStop(1.00, `rgb(${(br * 0.06) | 0},${(bg * 0.06) | 0},${(bb * 0.10) | 0})`);
      ctx.fillStyle = lit;
      ctx.fillRect(cx - r - 1, cy - r - 1, r * 2 + 2, r * 2 + 2);
    }

    // Cool fill from night side (thin — keeps silhouette alive without flattening)
    {
      const fx = cx - lx * r * 0.55, fy = cy - ly * r * 0.55;
      const fill = ctx.createRadialGradient(fx, fy, 0, fx, fy, r * 0.9);
      fill.addColorStop(0, `rgba(${Math.min(255, bb + 40)},${Math.min(255, bg + 18)},${Math.min(255, br + 55)},${cin ? 0.10 : 0.06})`);
      fill.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = fill;
      ctx.beginPath(); ctx.arc(cx, cy, r, 0, TAU); ctx.fill();
    }

    // Surface albedo by kind
    if (kind === 'gas') {
      for (let i = 0; i < 7; i++) {
        const yy = cy - r * 0.82 + ((i + 0.5) / 7) * r * 1.64;
        const lift = (i % 2 === 0) ? 1.10 : 0.88;
        ctx.globalAlpha = cin ? 0.12 : 0.09;
        ctx.fillStyle = `rgb(${Math.min(255, br * lift) | 0},${Math.min(255, bg * lift) | 0},${Math.min(255, bb * lift) | 0})`;
        ctx.beginPath();
        ctx.ellipse(cx, yy, r * 0.96, r * 0.065, 0, 0, TAU);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    } else if (kind === 'terra') {
      for (let i = 0; i < (cin ? 7 : 5); i++) {
        const ang = Rng() * TAU, d = Math.sqrt(Rng()) * r * 0.42;
        const px = cx + Math.cos(ang) * d, py = cy + Math.sin(ang) * d;
        const rr = r * (0.11 + Rng() * 0.17);
        const land = ctx.createRadialGradient(px, py, 0, px, py, rr);
        land.addColorStop(0, `rgba(${(br * 0.5 + 18) | 0},${(bg * 0.72 + 12) | 0},${(bb * 0.32) | 0},${cin ? 0.28 : 0.22})`);
        land.addColorStop(0.7, `rgba(${(br * 0.48) | 0},${(bg * 0.58) | 0},${(bb * 0.32) | 0},0.10)`);
        land.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = land;
        ctx.beginPath();
        ctx.ellipse(px, py, rr * (1.15 + Rng() * 0.3), rr * (0.7 + Rng() * 0.28), Rng() * TAU, 0, TAU);
        ctx.fill();
      }
    } else if (kind === 'rocky') {
      for (let i = 0; i < (cin ? 6 : 4); i++) {
        const ang = Rng() * TAU, d = Math.sqrt(Rng()) * r * 0.42;
        const px = cx + Math.cos(ang) * d, py = cy + Math.sin(ang) * d;
        const rr = r * (0.10 + Rng() * 0.15);
        const blot = ctx.createRadialGradient(px, py, 0, px, py, rr);
        const k = 0.72 + Rng() * 0.16;
        blot.addColorStop(0, `rgba(${(br * k) | 0},${(bg * k) | 0},${(bb * k) | 0},${cin ? 0.22 : 0.16})`);
        blot.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = blot;
        ctx.beginPath(); ctx.arc(px, py, rr, 0, TAU); ctx.fill();
      }
    } else if (kind === 'ice') {
      const cap = (sy, a) => {
        const g = ctx.createRadialGradient(cx, sy, 0, cx, sy, r * 0.42);
        g.addColorStop(0, `rgba(${Math.min(255, br + 40)},${Math.min(255, bg + 45)},${Math.min(255, bb + 50)},${a})`);
        g.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.ellipse(cx, sy, r * 0.55, r * 0.2, 0, 0, TAU); ctx.fill();
      };
      cap(cy - r * 0.58, cin ? 0.28 : 0.2);
      cap(cy + r * 0.58, cin ? 0.18 : 0.14);
    }

    // Craters on lit face
    if (doCraters) {
      const n = kind === 'rocky' ? (cin ? 10 : 7) : (kind === 'terra' ? (cin ? 6 : 4) : 3);
      for (let i = 0; i < n; i++) {
        const ang = Rng() * TAU;
        const d = Math.sqrt(Rng()) * r * 0.5;
        const px = cx + Math.cos(ang) * d;
        const py = cy + Math.sin(ang) * d;
        const dx = (px - cx) / r, dy = (py - cy) / r;
        if (dx * lx + dy * ly < 0.08) continue;
        if (dx * dx + dy * dy > 0.62) continue;
        paintCrater(ctx, px, py, r * (0.022 + Rng() * 0.05), lx, ly, br, bg, bb);
      }
    }

    // Terminator band (sharp-ish day/night edge = sphere read)
    {
      const term = ctx.createLinearGradient(
        cx + lx * r * 0.55, cy + ly * r * 0.55,
        cx - lx * r * 0.85, cy - ly * r * 0.85
      );
      term.addColorStop(0, 'rgba(0,0,0,0)');
      term.addColorStop(0.42, 'rgba(0,0,0,0)');
      term.addColorStop(0.62, `rgba(0,2,12,${cin ? 0.10 : 0.06})`);
      term.addColorStop(0.82, `rgba(0,2,14,${cin ? 0.28 : 0.18})`);
      term.addColorStop(1, `rgba(0,0,10,${cin ? 0.48 : 0.36})`);
      ctx.fillStyle = term;
      ctx.fillRect(cx - r - 1, cy - r - 1, r * 2 + 2, r * 2 + 2);
    }

    // Limb darken (roundness)
    {
      const limb = ctx.createRadialGradient(cx, cy, r * 0.70, cx, cy, r);
      limb.addColorStop(0, 'rgba(0,0,0,0)');
      limb.addColorStop(0.78, 'rgba(0,0,0,0)');
      limb.addColorStop(1, `rgba(0,4,14,${cin ? 0.38 : 0.28})`);
      ctx.fillStyle = limb;
      ctx.fillRect(cx - r - 1, cy - r - 1, r * 2 + 2, r * 2 + 2);
    }

    // Thin cool limb rim (tint of base hue — never white ovals)
    {
      const rim = ctx.createRadialGradient(cx, cy, r * 0.86, cx, cy, r);
      rim.addColorStop(0, 'rgba(0,0,0,0)');
      rim.addColorStop(0.85, 'rgba(0,0,0,0)');
      rim.addColorStop(1, `rgba(${Math.min(255, br + 20)},${Math.min(255, bg + 30)},${Math.min(255, bb + 50)},${cin ? 0.12 : 0.10})`);
      ctx.fillStyle = rim;
      ctx.fillRect(cx - r - 1, cy - r - 1, r * 2 + 2, r * 2 + 2);
    }

    ctx.restore();
    if (o.ring) paintRing(ctx, cx, cy, r, o, 'front');
  }

  function paintCrater(ctx, px, py, cr, lx, ly, br, bg, bb) {
    const bowl = ctx.createRadialGradient(px, py, cr * 0.12, px, py, cr);
    bowl.addColorStop(0, 'rgba(0,0,0,0.26)');
    bowl.addColorStop(0.55, 'rgba(0,0,0,0.11)');
    bowl.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = bowl;
    ctx.beginPath(); ctx.arc(px, py, cr, 0, TAU); ctx.fill();
    {
      const ox = px - lx * cr * 0.3, oy = py - ly * cr * 0.3;
      const sh = ctx.createRadialGradient(ox, oy, 0, ox, oy, cr * 0.62);
      sh.addColorStop(0, 'rgba(0,0,0,0.22)');
      sh.addColorStop(0.7, 'rgba(0,0,0,0.05)');
      sh.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = sh;
      ctx.beginPath(); ctx.arc(ox, oy, cr * 0.62, 0, TAU); ctx.fill();
    }
    {
      const hx = px + lx * cr * 0.28, hy = py + ly * cr * 0.28;
      const hr = Math.min(255, br + 28), hg = Math.min(255, bg + 28), hb = Math.min(255, bb + 32);
      const hi = ctx.createRadialGradient(hx, hy, 0, hx, hy, cr * 0.55);
      hi.addColorStop(0, `rgba(${hr},${hg},${hb},0.14)`);
      hi.addColorStop(0.7, `rgba(${hr},${hg},${hb},0.03)`);
      hi.addColorStop(1, `rgba(${hr},${hg},${hb},0)`);
      ctx.fillStyle = hi;
      ctx.beginPath(); ctx.arc(hx, hy, cr * 0.55, 0, TAU); ctx.fill();
    }
  }

  function paintRing(ctx, cx, cy, r, o, which) {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(o.ringRot != null ? o.ringRot : -0.48);
    ctx.scale(1, 0.30);
    ctx.beginPath();
    if (which === 'back') ctx.rect(-r * 2.5, -r * 2.5, r * 5, r * 2.5);
    else ctx.rect(-r * 2.5, 0, r * 5, r * 2.5);
    ctx.clip();
    ctx.strokeStyle = o.ringColor || 'rgba(195,180,145,0.38)';
    ctx.lineWidth = Math.max(1.2, r * 0.04);
    ctx.beginPath(); ctx.arc(0, 0, r * 1.45, 0, TAU); ctx.stroke();
    ctx.strokeStyle = o.ringColor || 'rgba(215,200,165,0.14)';
    ctx.lineWidth = Math.max(0.8, r * 0.02);
    ctx.beginPath(); ctx.arc(0, 0, r * 1.58, 0, TAU); ctx.stroke();
    ctx.restore();
  }

  /* ---------- deep space backdrop ---------- */
  // o: {seed, bg0,bg1,bg2, planet, px,py,pr, pbase,pglow,ring, asteroids, nebula}
  function scene(ctx, w, h, o = {}) {
    const R = srng(o.seed || 7);
    // Deep void — almost pure black space
    const g = ctx.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, o.bg0 || '#070b18');
    g.addColorStop(0.55, o.bg1 || '#04060f');
    g.addColorStop(1, o.bg2 || '#02030a');
    ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);

    // Optional very soft nebula (off for menu/hub by default)
    if (o.nebula) {
      const hues = o.nebulaHues || ['60,120,200', '100,70,180'];
      for (let i = 0; i < hues.length; i++) {
        const bx = R() * w, by = R() * h, br = h * (0.45 + R() * 0.5);
        const gg = ctx.createRadialGradient(bx, by, 0, bx, by, br);
        gg.addColorStop(0, `rgba(${hues[i]},${0.05 + R() * 0.04})`);
        gg.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = gg;
        ctx.fillRect(bx - br, by - br, br * 2, br * 2);
      }
    }

    // Starfield — dense, multi-size, a few brighter
    const nStars = Math.round(w * h / (o.starDensity || 1600));
    for (let i = 0; i < nStars; i++) {
      const x = R() * w, y = R() * h;
      const bright = R();
      const s = bright > 0.97 ? 2.2 : bright > 0.85 ? 1.4 : 1;
      ctx.globalAlpha = 0.25 + bright * 0.7;
      ctx.fillStyle = bright > 0.92 ? '#e8f4ff' : '#cfe0f8';
      ctx.fillRect(x | 0, y | 0, s, s);
      if (bright > 0.985) {
        // tiny cross glint
        ctx.globalAlpha = 0.35;
        ctx.fillRect((x - 2) | 0, y | 0, 5, 1);
        ctx.fillRect(x | 0, (y - 2) | 0, 1, 5);
      }
    }
    ctx.globalAlpha = 1;

    if (o.planet !== false) {
      planet(ctx,
        o.px == null ? w * 0.78 : o.px,
        o.py == null ? h * 0.72 : o.py,
        o.pr == null ? h * 0.38 : o.pr,
        {
          base: o.pbase || '#2f5fc0', seed: (o.seed || 7) + 3, glow: o.pglow,
          ring: o.ring, ringColor: o.ringColor, kind: o.pkind,
          fog: o.pfog != null ? o.pfog : true,
          cinematic: !!o.cinematic,
          craters: o.craters,
        });
    }

    const na = o.asteroids == null ? 0 : o.asteroids;
    for (let i = 0; i < na; i++) {
      try {
        Vox.draw(ctx, Vox.MODELS.asteroid, R() * w * 0.9 + w * 0.05, R() * h,
          { s: 0.45 + R() * 0.65, yaw: R() * TAU, roll: R() * TAU, t: 0, ignoreCam: true });
      } catch (e) {}
    }
  }

  /* ---------- shooting-star FX layer (menu / hub / panels) ---------- */
  const fxMap = new Map(); // host element → state
  let fxTimer = null;
  function ensureFxTimer() {
    if (fxTimer) return;
    let last = performance.now();
    fxTimer = setInterval(() => {
      if (captureFrozen) return; // keep last frame for FXTrans snapshot
      const now = performance.now(), dt = Math.min(0.1, (now - last) / 1000); last = now;
      for (const [host, st] of fxMap) {
        if (!host.isConnected || !st.cnv.isConnected) { fxMap.delete(host); continue; }
        // skip fully hidden overlays
        if (host.classList && host.classList.contains('hidden')) continue;
        if (host.offsetParent === null && host !== document.body) continue;
        const { ctx, w, h, shooters, drifts } = st;
        ctx.clearRect(0, 0, w, h);

        // slow falling star dust
        for (const d of drifts) {
          d.y += d.vy * dt; d.x += d.vx * dt;
          if (d.y > h + 4) { d.y = -4; d.x = Math.random() * w; }
          if (d.x < -4) d.x = w + 4; else if (d.x > w + 4) d.x = -4;
          ctx.globalAlpha = d.a;
          ctx.fillStyle = '#dcecff';
          ctx.fillRect(d.x | 0, d.y | 0, d.s, d.s);
        }
        ctx.globalAlpha = 1;

        // meteors (campaign-map style)
        if (Math.random() < 0.035 && shooters.length < 3) {
          const ang = Math.PI * 0.18 + Math.random() * 0.55;
          const sp = 700 + Math.random() * 500;
          shooters.push({
            x: Math.random() * w * 0.9, y: Math.random() * h * 0.45,
            vx: Math.cos(ang) * sp, vy: Math.sin(ang) * sp,
            life: 0, max: 0.45 + Math.random() * 0.55,
          });
        }
        for (let i = shooters.length - 1; i >= 0; i--) {
          const s = shooters[i];
          s.life += dt;
          const inv = Math.max(0, 1 - s.life / s.max);
          const px = s.x, py = s.y;
          s.x += s.vx * dt; s.y += s.vy * dt;
          ctx.save();
          ctx.globalCompositeOperation = 'lighter';
          ctx.globalAlpha = inv;
          ctx.strokeStyle = '#cfe4ff';
          ctx.lineWidth = 2;
          ctx.lineCap = 'round';
          ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(s.x, s.y); ctx.stroke();
          ctx.strokeStyle = 'rgba(180,220,255,0.45)';
          ctx.lineWidth = 4;
          ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(s.x, s.y); ctx.stroke();
          ctx.fillStyle = '#fff';
          ctx.beginPath(); ctx.arc(s.x, s.y, 2.2, 0, TAU); ctx.fill();
          ctx.restore();
          if (s.life >= s.max || s.x > w + 40 || s.y > h + 40) shooters.splice(i, 1);
        }
      }
      if (!fxMap.size) { clearInterval(fxTimer); fxTimer = null; }
    }, 50);
  }
  function attachFx(host, w, h) {
    if (!host) return;
    let cnv = host.querySelector(':scope > canvas.scene-fx');
    if (!cnv) {
      cnv = document.createElement('canvas');
      cnv.className = 'scene-fx';
      const bg = host.querySelector(':scope > canvas.scene-bg');
      if (bg && bg.nextSibling) host.insertBefore(cnv, bg.nextSibling);
      else host.insertBefore(cnv, host.firstChild);
    }
    cnv.width = w; cnv.height = h;
    const nDrift = Math.round(w * h / 9000);
    const drifts = Array.from({ length: nDrift }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 6, vy: 12 + Math.random() * 28,
      s: Math.random() < 0.15 ? 2 : 1,
      a: 0.25 + Math.random() * 0.55,
    }));
    fxMap.set(host, { cnv, ctx: cnv.getContext('2d'), w, h, shooters: [], drifts });
    ensureFxTimer();
  }
  function stopFx(host) {
    if (host) {
      const st = fxMap.get(host);
      if (st) { try { st.ctx.clearRect(0, 0, st.w, st.h); } catch (e) {} fxMap.delete(host); }
    } else {
      fxMap.clear();
    }
  }

  /* ---------- baked voxel thumbnail ---------- */
  const thumbCache = new Map();
  function voxThumb(key, size = 34, o = {}) {
    const id = key + ':' + size + ':' + (o.tint || '') + ':' + (o.k || '');
    if (thumbCache.has(id)) return thumbCache.get(id);
    const c = document.createElement('canvas'); c.width = c.height = size;
    const x = c.getContext('2d');
    let m = Vox.MODELS[key] || Vox.MODELS.kamikaze;
    if (o.tint) { try { m = Vox.tintModel(m, o.tint, o.tint); } catch (e) {} }
    const span = Math.max(m.w || 12, m.l || 12, m.h || 12);
    const s = (size / span) * (o.k || 0.62);
    try {
      Vox.draw(x, m, size / 2, size / 2, {
        s, yaw: o.yaw != null ? o.yaw : 0.5, pitch: o.pitch != null ? o.pitch : 1.0,
        roll: o.roll || 0, t: 0, ignoreCam: true,
      });
    } catch (e) {}
    const url = c.toDataURL(); thumbCache.set(id, url); return url;
  }

  /* ---------- campaign map static backdrop ---------- */
  function mapScene(ctx, w, h, seed = 71) {
    scene(ctx, w, h, {
      seed, planet: false, asteroids: 0, nebula: true,
      bg0: '#0a1330', bg1: '#060a1c', bg2: '#0b0822',
      nebulaHues: ['74,140,220', '120,80,200', '60,100,180'],
    });
    planet(ctx, w * 0.16, h * 0.10, Math.min(w, h) * 0.055, { base: '#3a6ad0', seed: seed + 2, kind: 'ice', poles: true });
    planet(ctx, w * 0.86, h * 0.82, Math.min(w, h) * 0.075, { base: '#c8863a', seed: seed + 9, ring: true, kind: 'gas', fog: true, poles: false });
    planet(ctx, w * 0.7, h * 0.3, Math.min(w, h) * 0.04, { base: '#a04ac0', seed: seed + 15, kind: 'rocky' });
  }

  // Full-screen static scene for menu / hub.
  function paintSceneCanvas(cnv) {
    const host = cnv.parentElement;
    const w = cnv.width = (host && host.clientWidth) || 480;
    const h = cnv.height = (host && host.clientHeight) || 800;
    const ctx = cnv.getContext('2d');
    const kind = cnv.dataset.scene;

    if (kind === 'hub') {
      // Hub: pure deep space + stars only — no planet (UI cards carry the art).
      scene(ctx, w, h, {
        seed: 31, planet: false, nebula: false, asteroids: 0,
        bg0: '#060a16', bg1: '#04060f', bg2: '#02030a',
        starDensity: 1400,
      });
    } else {
      // Splash: cinematic world — partial disc lower-right (not a huge flat balloon).
      // Size ~1/3 of frame; center sits near the corner so limb + atmosphere frame the UI.
      const R = Math.min(w, h) * 0.34;
      scene(ctx, w, h, {
        seed: 47, nebula: true, asteroids: 0,
        bg0: '#070b1a', bg1: '#040610', bg2: '#02030a',
        starDensity: 1450,
        nebulaHues: ['50,90,170', '90,60,160'],
        px: w * 0.78,
        py: h * 0.92,
        pr: R,
        pbase: '#3a6eb8',
        pglow: 'rgba(110,170,255,0.22)',
        pkind: 'terra',
        pfog: true,
        ring: false,
        craters: true,
        cinematic: true,
      });
    }
    // Soft top vignette for title readability
    const v = ctx.createLinearGradient(0, 0, 0, h * 0.28);
    v.addColorStop(0, 'rgba(2,4,12,0.45)'); v.addColorStop(1, 'rgba(2,4,12,0)');
    ctx.fillStyle = v; ctx.fillRect(0, 0, w, h * 0.28);

    if (host) attachFx(host, w, h);
  }

  /* ---------- card banner art ---------- */
  function setCardScene(el, o) {
    if (!el) return;
    const c = document.createElement('canvas'); c.width = 480; c.height = 130;
    scene(c.getContext('2d'), 480, 130, {
      seed: o.seed, nebula: true, asteroids: o.asteroids == null ? 0 : o.asteroids,
      bg0: '#0a1230', bg1: '#060a18', bg2: '#08061a',
      pbase: o.pbase, pglow: o.pglow, ring: o.ring, ringColor: o.ringColor,
      pkind: o.pkind, pfog: o.pfog, craters: o.craters,
      px: 480 * (o.px || 0.82), py: 130 * (o.py || 0.35), pr: 130 * (o.pr || 0.55),
      nebulaHues: o.nebulaHues,
    });
    el.style.setProperty('background', `url(${c.toDataURL('image/jpeg', 0.88)}) center/cover`, 'important');
    el.classList.add('has-scene');
  }
  function decorate(root) {
    if (!root) return;
    // Whole campaign card (banner + career foot) shares one scenic bg
    setCardScene(root.querySelector('.campaign-block'), {
      seed: 12, pbase: '#3a6ad0', pglow: 'rgba(100,160,255,0.28)',
      px: 0.88, py: 0.72, pr: 1.05, ring: true, asteroids: 0,
      pkind: 'gas', pfog: true, craters: false,
      nebulaHues: ['70,140,220', '90,80,200'],
    });
    setCardScene(root.querySelector('.pass-card'), {
      seed: 21, pbase: '#b07030', pglow: 'rgba(255,180,90,0.28)',
      px: 0.92, py: 0.55, pr: 0.85, asteroids: 0,
      pkind: 'rocky', pfog: true, craters: true,
      nebulaHues: ['180,120,40', '120,70,40'],
    });
    setCardScene(root.querySelector('.hangar-btn'), {
      seed: 5, pbase: '#4a3ab0', pglow: 'rgba(140,100,255,0.26)',
      px: 0.78, py: 0.55, pr: 0.95, asteroids: 0,
      pkind: 'terra', pfog: true, craters: true,
      nebulaHues: ['90,70,180', '50,100,200'],
    });
  }

  // Panel backdrops (settings / shop / pass / rewards / gameover) — one planet.
  const bgOpts = {
    season:  { seed: 24, pbase: '#c8863a', pglow: 'rgba(255,180,90,0.28)', px: 0.92, pr: 0.26, ring: true, pkind: 'gas', pfog: true },
    shop:    { seed: 33, pbase: '#3a9c78', px: 0.92, pr: 0.24, pkind: 'terra', pfog: true },
    settings:{ seed: 41, pbase: '#5a6ad0', px: 0.92, pr: 0.23, pkind: 'ice', ppoles: true },
    rewards: { seed: 52, pbase: '#c84a8a', px: 0.92, pr: 0.24, pkind: 'rocky' },
    gameover:{ seed: 66, pbase: '#c0503a', pglow: 'rgba(255,120,90,0.30)', px: 0.86, pr: 0.32, pkind: 'rocky', pfog: true },
    panel:   { seed: 9,  pbase: '#3a5fc0', px: 0.92, pr: 0.24, pkind: 'rocky' },
  };
  function bg(el, kind) {
    if (!el) return;
    let c = el.querySelector(':scope > canvas.scene-bg');
    if (!c) { c = document.createElement('canvas'); c.className = 'scene-bg'; el.insertBefore(c, el.firstChild); }
    const o = bgOpts[kind] || bgOpts.panel;
    const host = (el.clientWidth ? el : el.parentElement) || el;
    const w = c.width = host.clientWidth || 480, h = c.height = host.clientHeight || 853;
    const ctx = c.getContext('2d');
    const pr = Math.min(w, h) * o.pr;
    scene(ctx, w, h, {
      seed: o.seed, nebula: false, asteroids: 0,
      bg0: '#060a16', bg1: '#04060f', bg2: '#02030a',
      pbase: o.pbase, pglow: o.pglow, ring: o.ring,
      pkind: o.pkind, pfog: o.pfog != null ? o.pfog : true,
      craters: true,
      px: w * o.px, py: pr + h * 0.06, pr,
    });
    const v = ctx.createLinearGradient(0, 0, 0, h);
    v.addColorStop(0, 'rgba(4,6,16,0.32)'); v.addColorStop(1, 'rgba(4,6,16,0.55)');
    ctx.fillStyle = v; ctx.fillRect(0, 0, w, h);
    attachFx(el, w, h);
  }

  function scan(root) {
    if (!root) return;
    root.querySelectorAll('canvas[data-scene]').forEach(paintSceneCanvas);
    root.querySelectorAll('canvas[data-voxship]').forEach(c => {
      const o = {};
      if (c.dataset.thrust != null && c.dataset.thrust !== '') {
        const th = parseFloat(c.dataset.thrust);
        if (!isNaN(th)) o.thrust = th;
      }
      if (c.dataset.speed != null && c.dataset.speed !== '') {
        const sp = parseFloat(c.dataset.speed);
        if (!isNaN(sp)) o.speed = sp;
      }
      animShip(c, c.dataset.voxship, o);
    });
  }
  function detach(cnv) { anims.delete(cnv); }
  // Legacy names used by Hub.close — stop FX on hub host
  function startRain() {}
  function stopRain() {
    const hub = document.getElementById('hub');
    const menu = document.getElementById('menu');
    if (hub) stopFx(hub);
    if (menu) stopFx(menu);
  }

  return { animShip, setShipPose, scene, planet, voxThumb, mapScene, scan, decorate, bg, detach, startRain, stopRain, stopFx, freezeForCapture, retimeShips,
    // for promo/_occl_check.py — proves the skip never freezes a visible ship
    _anims: anims,
    _invisible: computeInvisible };
})();
