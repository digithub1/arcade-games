/* ============================================================
 * orbitcore.js — shared helpers for orbit combat prototypes.
 * ========================================================== */
const OrbitCore = (() => {
  const TAU = Math.PI * 2;
  const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
  const lerp = (a, b, t) => a + (b - a) * t;
  const wrap = a => { a %= TAU; if (a < 0) a += TAU; return a; };
  const angDiff = (a, b) => {
    let d = (a - b) % TAU;
    if (d > Math.PI) d -= TAU;
    if (d < -Math.PI) d += TAU;
    return d;
  };

  /** Edge bias −1..1 (same deadzone + smootherstep as combat cam). */
  function edgeAxis(px, W, dead = 0.12) {
    const v = clamp((px / W - 0.5) * 2, -1, 1);
    const a = Math.abs(v);
    if (a <= dead) return 0;
    const t = clamp((a - dead) / (1 - dead), 0, 1);
    const s = t * t * t * (t * (t * 6 - 15) + 10);
    return Math.sign(v) * s;
  }

  /**
   * 360° orbit space (shared by assault + defense)
   * ─────────────────────────────────────────────
   * Object FIXED on screen. Player L/R changes `view` (facing).
   * Entities live in WORLD polar (ang, rad). Projection:
   *   screenAngle = worldAng + view
   * Pull RIGHT → view↑ → point that was on the RIGHT moves toward
   * the weapon-facing side (you “turn right” around the object).
   *
   * Canvas y-down: 0=right, π/2=down, π=left, −π/2=up.
   */
  function spinInput(bias, keys, omega) {
    let s = (bias || 0) * omega;
    if (keys) {
      if (keys['KeyQ'] || keys['ArrowLeft'] || keys['KeyA']) s -= omega * 0.75;
      if (keys['KeyE'] || keys['ArrowRight'] || keys['KeyD']) s += omega * 0.75;
    }
    return s;
  }

  /**
   * World polar → screen. rad=1 on rim ellipse (rx,ry).
   * faceRef = screen angle of the weapon:
   *   assault (ship below boss) → +π/2 (down / boss front)
   *   defense (turret on crown) → −π/2 (up / into space)
   */
  function polarXY(worldAng, rad, view, cx, cy, rx, ry, faceRef) {
    const a = worldAng + view;
    const r = rad == null ? 1 : rad;
    const sn = Math.sin(a);
    const cs = Math.cos(a);
    let face = 1;
    if (faceRef != null) {
      const d = Math.abs(angDiff(a, faceRef));
      face = clamp(1 - d / Math.PI, 0, 1);
    } else {
      face = sn;
    }
    return {
      x: cx + cs * rx * r,
      y: cy + sn * ry * r,
      a,
      face,
      front: face > 0.55,
    };
  }

  /** Rim point (rad=1) — convenience. */
  function rimOf(baseAng, view, cx, cy, rx, ry, faceRef) {
    return polarXY(baseAng, 1, view, cx, cy, rx, ry, faceRef);
  }

  /** Draw large station hull (ellipse ring). style: 'assault' | 'defense' */
  function drawBigStation(ctx, cx, cy, rx, ry, yaw, t, style) {
    const atk = style === 'assault';
    const colA = atk ? '255,70,100' : '60,220,160';
    const colB = atk ? '255,150,80' : '100,200,255';
    ctx.save();
    ctx.translate(cx, cy);

    // outer glow
    const g0 = ctx.createRadialGradient(0, 0, ry * 0.3, 0, 0, rx + 50);
    g0.addColorStop(0, `rgba(${colA},0.32)`);
    g0.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g0;
    ctx.beginPath();
    ctx.ellipse(0, 0, rx + 48, ry + 48, 0, 0, TAU);
    ctx.fill();

    // solid hull body (slightly smaller than rim)
    ctx.beginPath();
    ctx.ellipse(0, 0, rx * 0.92, ry * 0.92, 0, 0, TAU);
    ctx.fillStyle = atk ? 'rgba(22,8,14,0.96)' : 'rgba(8,20,18,0.96)';
    ctx.fill();

    // outer rim stroke (fixed in screen — rotation shown via plates/sockets)
    ctx.beginPath();
    ctx.ellipse(0, 0, rx, ry, 0, 0, TAU);
    ctx.strokeStyle = `rgba(${colA},0.85)`;
    ctx.lineWidth = 10;
    ctx.stroke();
    ctx.beginPath();
    ctx.ellipse(0, 0, rx - 16, ry - 10, 0, 0, TAU);
    ctx.strokeStyle = `rgba(${colB},0.4)`;
    ctx.lineWidth = 3;
    ctx.setLineDash([14, 12]);
    ctx.stroke();
    ctx.setLineDash([]);

    // rotating armor plates + spokes (true spin cue)
    ctx.rotate(yaw);
    for (let i = 0; i < 10; i++) {
      const a = (i / 10) * TAU;
      ctx.beginPath();
      ctx.moveTo(Math.cos(a) * (rx * 0.22), Math.sin(a) * (ry * 0.22));
      ctx.lineTo(Math.cos(a) * (rx * 0.88), Math.sin(a) * (ry * 0.88));
      ctx.strokeStyle = `rgba(${colA},0.28)`;
      ctx.lineWidth = 3;
      ctx.stroke();
    }
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * TAU + t * 0.05;
      const px = Math.cos(a) * rx * 0.62;
      const py = Math.sin(a) * ry * 0.62;
      ctx.save();
      ctx.translate(px, py);
      ctx.rotate(a);
      ctx.fillStyle = atk ? 'rgba(50,14,24,0.95)' : 'rgba(12,36,32,0.95)';
      ctx.strokeStyle = `rgba(${colB},0.75)`;
      ctx.lineWidth = 2;
      ctx.fillRect(-16, -11, 32, 22);
      ctx.strokeRect(-16, -11, 32, 22);
      ctx.restore();
    }
    ctx.restore();

    // core / hangar (screen-fixed, slight spin)
    const coreR = Math.min(rx, ry) * 0.38;
    const g = ctx.createRadialGradient(cx, cy, 4, cx, cy, coreR + 20);
    if (atk) {
      g.addColorStop(0, 'rgba(255,230,140,1)');
      g.addColorStop(0.45, 'rgba(255,50,80,0.55)');
      g.addColorStop(1, 'rgba(255,40,60,0)');
    } else {
      g.addColorStop(0, 'rgba(200,255,230,1)');
      g.addColorStop(0.45, 'rgba(50,200,150,0.5)');
      g.addColorStop(1, 'rgba(40,180,140,0)');
    }
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(cx, cy, coreR + 16, 0, TAU);
    ctx.fill();

    // hangar mouth — bottom of core (launches toward player)
    ctx.fillStyle = atk ? 'rgba(255,200,80,0.4)' : 'rgba(120,255,200,0.35)';
    ctx.beginPath();
    ctx.ellipse(cx, cy + coreR * 0.55, coreR * 0.55, coreR * 0.22, 0, 0, TAU);
    ctx.fill();
    ctx.strokeStyle = atk ? 'rgba(255,220,120,0.8)' : 'rgba(160,255,220,0.75)';
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  function drawEdgeBands(ctx, W, H, bias) {
    const w = 56;
    if (bias < -0.01) {
      const a = Math.min(0.45, -bias * 0.55);
      const g = ctx.createLinearGradient(0, 0, w, 0);
      g.addColorStop(0, `rgba(74,214,255,${a})`);
      g.addColorStop(1, 'rgba(74,214,255,0)');
      ctx.fillStyle = g; ctx.fillRect(0, 0, w, H);
    }
    if (bias > 0.01) {
      const a = Math.min(0.45, bias * 0.55);
      const g = ctx.createLinearGradient(W, 0, W - w, 0);
      g.addColorStop(0, `rgba(255,74,223,${a})`);
      g.addColorStop(1, 'rgba(255,74,223,0)');
      ctx.fillStyle = g; ctx.fillRect(W - w, 0, w, H);
    }
  }

  function makeStars(W, H, n = 110) {
    return Array.from({ length: n }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      z: 0.3 + Math.random() * 1.4,
      s: 0.7 + Math.random() * 1.8,
    }));
  }

  function drawStars(ctx, stars, W, H, cx, cy, theta, dt) {
    ctx.save();
    for (const st of stars) {
      st.y += 14 * st.z * dt;
      if (st.y > H + 4) { st.y = -4; st.x = Math.random() * W; }
      const dx = st.x - cx, dy = st.y - cy;
      const c = Math.cos(theta * 0.12 * st.z), s = Math.sin(theta * 0.12 * st.z);
      const x = cx + dx * c - dy * s;
      const y = cy + dx * s + dy * c;
      ctx.globalAlpha = 0.28 + st.z * 0.4;
      ctx.fillStyle = '#d0e8ff';
      ctx.fillRect(x, y, st.s, st.s);
    }
    ctx.restore();
    ctx.globalAlpha = 1;
  }

  const fx = [];
  const floats = [];

  function burst(x, y, col, n = 12, sp = 100, life = 0.5) {
    for (let i = 0; i < n; i++) {
      const a = Math.random() * TAU, v = sp * (0.35 + Math.random());
      fx.push({
        x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v,
        life: life * (0.45 + Math.random() * 0.7), max: life,
        col, r: 1.8 + Math.random() * 3.2,
      });
    }
  }

  function floatTxt(x, y, text, col = '#ffe24a') {
    floats.push({ x, y, text, col, life: 0.7, max: 0.7 });
  }

  function updateFx(dt) {
    for (let i = fx.length - 1; i >= 0; i--) {
      const p = fx[i];
      p.life -= dt;
      if (p.life <= 0) { fx.splice(i, 1); continue; }
      p.x += p.vx * dt; p.y += p.vy * dt;
      p.vx *= 0.95; p.vy *= 0.95 + 20 * dt;
    }
    for (let i = floats.length - 1; i >= 0; i--) {
      const f = floats[i];
      f.life -= dt; f.y -= 40 * dt;
      if (f.life <= 0) floats.splice(i, 1);
    }
  }

  function drawFx(ctx) {
    for (const p of fx) {
      const a = clamp(p.life / p.max, 0, 1);
      ctx.globalAlpha = a;
      ctx.fillStyle = p.col;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * (0.6 + 0.4 * a), 0, TAU);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    ctx.font = 'bold 13px Trebuchet MS, sans-serif';
    ctx.textAlign = 'center';
    for (const f of floats) {
      ctx.globalAlpha = clamp(f.life / f.max, 0, 1);
      ctx.fillStyle = f.col;
      ctx.fillText(f.text, f.x, f.y);
    }
    ctx.globalAlpha = 1;
  }

  function applyPlayCam(px, py, active) {
    if (typeof Engine === 'undefined' || !Engine.updateCam) return;
    Engine.updateCam(px, py, active);
    if (typeof Vox !== 'undefined' && Vox.setViewCam) {
      const c = Engine.getCam();
      Vox.setViewCam(c.dPitch, c.dRoll);
    }
    if (Engine.applyCam) Engine.applyCam();
  }

  /** Voxel scale like main game (~3–4+ for ships). */
  function shipScale(key, wantR) {
    if (typeof Vox === 'undefined' || !Vox.MODELS) return 3.5;
    const m = Vox.MODELS[key] || Vox.MODELS.vanguard;
    if (!m || !m.w) return 3.5;
    return (wantR * 2.7 / m.w) * 1.35;
  }

  function drawVox(ctx, key, x, y, opts = {}) {
    if (typeof Vox === 'undefined' || !Vox.MODELS) return false;
    const m = Vox.MODELS[key] || Vox.MODELS.vanguard;
    if (!m || !m.vox || !m.vox.length) return false;
    try {
      const s = opts.s != null ? opts.s : shipScale(key, opts.r || 14);
      if (Vox.groundShadow) Vox.groundShadow(ctx, x, y + 4, s * (m.w || 8) * 0.35, { a: 0.4 });
      Vox.draw(ctx, m, x, y, {
        s,
        yaw: opts.yaw || 0,
        roll: opts.roll || 0,
        pitch: opts.pitch,
        t: opts.t || 0,
        thrust: opts.thrust != null ? opts.thrust : 0,
        flameColor: opts.flameColor,
      });
      return true;
    } catch (e) {
      console.warn('Vox.draw', key, e);
      return false;
    }
  }

  function drawShipFallback(ctx, x, y, col, ang) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(ang);
    ctx.fillStyle = col;
    ctx.beginPath();
    ctx.moveTo(0, -14);
    ctx.lineTo(11, 12);
    ctx.lineTo(0, 7);
    ctx.lineTo(-11, 12);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = '#fff8';
    ctx.fillRect(-2, -4, 4, 8);
    ctx.restore();
  }

  function drawStationHull(ctx, cx, cy, R, spin, t, style) {
    const atk = style === 'assault';
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(spin);

    // glow disc
    const g0 = ctx.createRadialGradient(0, 0, R * 0.2, 0, 0, R + 30);
    g0.addColorStop(0, atk ? 'rgba(255,40,70,0.22)' : 'rgba(40,200,140,0.18)');
    g0.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g0;
    ctx.beginPath(); ctx.arc(0, 0, R + 30, 0, TAU); ctx.fill();

    // outer rim
    ctx.beginPath(); ctx.arc(0, 0, R, 0, TAU);
    ctx.strokeStyle = atk ? 'rgba(255,90,120,0.75)' : 'rgba(80,230,170,0.7)';
    ctx.lineWidth = 14;
    ctx.stroke();
    ctx.beginPath(); ctx.arc(0, 0, R - 22, 0, TAU);
    ctx.strokeStyle = atk ? 'rgba(255,160,90,0.35)' : 'rgba(120,210,255,0.3)';
    ctx.lineWidth = 4;
    ctx.setLineDash([14, 12]);
    ctx.stroke();
    ctx.setLineDash([]);

    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * TAU + t * 0.05;
      ctx.beginPath();
      ctx.moveTo(Math.cos(a) * 40, Math.sin(a) * 40);
      ctx.lineTo(Math.cos(a) * (R - 10), Math.sin(a) * (R - 10));
      ctx.strokeStyle = atk ? 'rgba(255,100,100,0.28)' : 'rgba(120,200,255,0.25)';
      ctx.lineWidth = 3;
      ctx.stroke();
    }

    const core = ctx.createRadialGradient(0, 0, 2, 0, 0, 50);
    if (atk) {
      core.addColorStop(0, 'rgba(255,230,140,1)');
      core.addColorStop(0.45, 'rgba(255,50,80,0.55)');
      core.addColorStop(1, 'rgba(255,40,60,0)');
    } else {
      core.addColorStop(0, 'rgba(200,255,240,1)');
      core.addColorStop(0.45, 'rgba(50,200,150,0.5)');
      core.addColorStop(1, 'rgba(40,180,140,0)');
    }
    ctx.fillStyle = core;
    ctx.beginPath(); ctx.arc(0, 0, 52, 0, TAU); ctx.fill();

    // armor plates
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * TAU + t * 0.25;
      const px = Math.cos(a) * (R * 0.58);
      const py = Math.sin(a) * (R * 0.58);
      ctx.save();
      ctx.translate(px, py);
      ctx.rotate(a);
      ctx.fillStyle = atk ? 'rgba(50,16,28,0.95)' : 'rgba(12,28,36,0.95)';
      ctx.strokeStyle = atk ? '#ff7860' : '#60e8c0';
      ctx.lineWidth = 2;
      ctx.fillRect(-14, -9, 28, 18);
      ctx.strokeRect(-14, -9, 28, 18);
      ctx.restore();
    }
    ctx.restore();
  }

  function drawWeakPoint(ctx, x, y, r, hp, maxHp, t, hostile) {
    const u = clamp(hp / maxHp, 0, 1);
    const pulse = 1 + Math.sin(t * 8) * 0.12;
    ctx.save();
    // outer threat ring
    ctx.beginPath();
    ctx.arc(x, y, r * 1.7 * pulse, 0, TAU);
    ctx.strokeStyle = hostile
      ? `rgba(255,60,90,${0.45 + (1 - u) * 0.4})`
      : `rgba(80,255,180,${0.4 + u * 0.4})`;
    ctx.lineWidth = 3;
    ctx.stroke();

    const g = ctx.createRadialGradient(x - r * 0.2, y - r * 0.2, 1, x, y, r);
    if (hostile) {
      g.addColorStop(0, '#fff6c8');
      g.addColorStop(0.35, '#ff4060');
      g.addColorStop(1, '#601018');
    } else {
      g.addColorStop(0, '#f0fff8');
      g.addColorStop(0.35, '#40ffb0');
      g.addColorStop(1, '#104030');
    }
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,0.7)';
    ctx.lineWidth = 2;
    ctx.stroke();

    // HP arc
    ctx.beginPath();
    ctx.arc(x, y, r + 8, -Math.PI / 2, -Math.PI / 2 + TAU * u);
    ctx.strokeStyle = hostile ? '#ffd24a' : '#9fffc0';
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';
    ctx.stroke();
    ctx.restore();
  }

  function drawRail(ctx, cx, cy, R) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, R, 0, TAU);
    ctx.strokeStyle = 'rgba(255,210,74,0.45)';
    ctx.lineWidth = 4;
    ctx.setLineDash([8, 10]);
    ctx.stroke();
    ctx.setLineDash([]);
    for (let i = 0; i < 32; i++) {
      const a = (i / 32) * TAU;
      ctx.beginPath();
      ctx.moveTo(cx + Math.cos(a) * (R - 6), cy + Math.sin(a) * (R - 6));
      ctx.lineTo(cx + Math.cos(a) * (R + 6), cy + Math.sin(a) * (R + 6));
      ctx.strokeStyle = 'rgba(255,210,74,0.3)';
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }
    ctx.restore();
  }

  function drawRadar(ctx, W, points, mode) {
    const rx = W - 54, ry = 62, rr = 30;
    ctx.save();
    ctx.beginPath();
    ctx.arc(rx, ry, rr + 5, 0, TAU);
    ctx.fillStyle = 'rgba(4,8,18,0.8)';
    ctx.fill();
    ctx.strokeStyle = 'rgba(120,170,255,0.45)';
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(rx, ry - rr); ctx.lineTo(rx, ry - rr + 6);
    ctx.strokeStyle = '#ffe24a'; ctx.stroke();
    for (const p of points) {
      if (p.dead) continue;
      const a = p.ang;
      const x = rx + Math.cos(a - Math.PI / 2) * (rr * 0.78);
      const y = ry + Math.sin(a - Math.PI / 2) * (rr * 0.78);
      ctx.fillStyle = mode === 'assault' ? '#ff6a7a' : '#6effc0';
      ctx.beginPath(); ctx.arc(x, y, 3.5, 0, TAU); ctx.fill();
    }
    ctx.fillStyle = '#4ad6ff';
    ctx.beginPath(); ctx.arc(rx, ry + rr * 0.55, 4, 0, TAU); ctx.fill();
    ctx.restore();
  }

  /**
   * Defense threat radar — enemies only.
   * threats: [{ bearing, dist, hot }]
   *   bearing 0 = ahead (weapon), + = right, − = left
   *   dist 0..1 (0 close / on rim, 1 far)
   */
  function drawThreatRadar(ctx, W, threats, t) {
    const rx = W - 58, ry = 72, rr = 36;
    ctx.save();
    ctx.beginPath();
    ctx.arc(rx, ry, rr + 6, 0, TAU);
    ctx.fillStyle = 'rgba(2,10,8,0.88)';
    ctx.fill();
    ctx.strokeStyle = 'rgba(80,220,160,0.55)';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    for (const k of [0.35, 0.65, 1]) {
      ctx.beginPath();
      ctx.arc(rx, ry, rr * k, 0, TAU);
      ctx.strokeStyle = 'rgba(80,220,160,0.18)';
      ctx.lineWidth = 1;
      ctx.stroke();
    }
    ctx.strokeStyle = 'rgba(80,220,160,0.2)';
    ctx.beginPath();
    ctx.moveTo(rx - rr, ry); ctx.lineTo(rx + rr, ry);
    ctx.moveTo(rx, ry - rr); ctx.lineTo(rx, ry + rr);
    ctx.stroke();

    // forward fire wedge
    ctx.fillStyle = 'rgba(125,255,160,0.12)';
    ctx.beginPath();
    ctx.moveTo(rx, ry);
    ctx.arc(rx, ry, rr, -Math.PI / 2 - 0.45, -Math.PI / 2 + 0.45);
    ctx.closePath();
    ctx.fill();

    ctx.strokeStyle = '#ffe24a';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(rx, ry - rr - 1);
    ctx.lineTo(rx, ry - rr + 8);
    ctx.stroke();
    ctx.fillStyle = '#ffe24a';
    ctx.font = 'bold 9px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('▲', rx, ry - rr - 5);

    ctx.fillStyle = '#7dffa0';
    ctx.beginPath();
    ctx.arc(rx, ry, 3.5, 0, TAU);
    ctx.fill();

    let nearest = null, nearestD = 1e9;
    for (const th of threats) {
      if (!th) continue;
      const d = clamp(th.dist, 0, 1);
      const a = th.bearing - Math.PI / 2;
      const pr = rr * (0.18 + d * 0.78);
      const x = rx + Math.cos(a) * pr;
      const y = ry + Math.sin(a) * pr;
      const hot = th.hot || d < 0.28;
      const pulse = hot ? 1 + Math.sin((t || 0) * 10) * 0.25 : 1;
      ctx.fillStyle = hot ? '#ff4060' : (d < 0.55 ? '#ffaa40' : '#ff8060');
      ctx.beginPath();
      ctx.arc(x, y, (hot ? 4.2 : 3.2) * pulse, 0, TAU);
      ctx.fill();
      if (hot) {
        ctx.strokeStyle = 'rgba(255,80,100,0.7)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(x, y, 7 * pulse, 0, TAU);
        ctx.stroke();
      }
      if (d < nearestD) { nearestD = d; nearest = th; }
    }

    ctx.fillStyle = 'rgba(180,255,220,0.8)';
    ctx.font = 'bold 9px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(String(threats.length), rx, ry + rr + 12);
    if (nearest && Math.abs(nearest.bearing) > 0.35) {
      ctx.fillStyle = nearest.hot ? '#ff6a7a' : '#ffd24a';
      ctx.font = 'bold 14px sans-serif';
      ctx.fillText(nearest.bearing > 0 ? '▶' : '◀',
        rx + (nearest.bearing > 0 ? rr + 12 : -rr - 12), ry + 4);
    }
    ctx.restore();
  }

  /** Edge chevrons for off-screen foes. items: [{x,y,hot}] */
  function drawOffscreenMarkers(ctx, W, H, items) {
    const pad = 18;
    const cx = W * 0.5, cy = H * 0.4;
    for (const it of items) {
      if (!it) continue;
      if (it.x >= pad && it.x <= W - pad && it.y >= pad && it.y <= H - pad) continue;
      let dx = it.x - cx, dy = it.y - cy;
      if (Math.abs(dx) < 1e-3 && Math.abs(dy) < 1e-3) { dx = 0; dy = -1; }
      const sx = dx >= 0 ? (W - pad - cx) / Math.max(dx, 1e-6) : (pad - cx) / Math.min(dx, -1e-6);
      const sy = dy >= 0 ? (H - pad - cy) / Math.max(dy, 1e-6) : (pad - cy) / Math.min(dy, -1e-6);
      const s = Math.min(Math.abs(sx), Math.abs(sy));
      const mx = cx + dx * s;
      const my = cy + dy * s;
      const ang = Math.atan2(dy, dx);
      ctx.save();
      ctx.translate(mx, my);
      ctx.rotate(ang);
      ctx.fillStyle = it.hot ? 'rgba(255,60,90,0.95)' : 'rgba(255,170,70,0.9)';
      ctx.strokeStyle = 'rgba(0,0,0,0.5)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(11, 0);
      ctx.lineTo(-8, 8);
      ctx.lineTo(-4, 0);
      ctx.lineTo(-8, -8);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.restore();
    }
  }

  function drawBullet(ctx, b, col, glow) {
    ctx.save();
    ctx.fillStyle = col;
    ctx.shadowColor = glow || col;
    ctx.shadowBlur = 10;
    ctx.beginPath();
    ctx.arc(b.x, b.y, b.r, 0, TAU);
    ctx.fill();
    // trail
    ctx.globalAlpha = 0.4;
    ctx.beginPath();
    ctx.arc(b.x - b.vx * 0.018, b.y - b.vy * 0.018, b.r * 0.7, 0, TAU);
    ctx.fill();
    ctx.restore();
  }

  return {
    TAU, clamp, lerp, wrap, angDiff, edgeAxis, spinInput, polarXY, rimOf, drawBigStation,
    drawEdgeBands, makeStars, drawStars,
    burst, floatTxt, updateFx, drawFx, fx, floats,
    applyPlayCam, shipScale, drawVox, drawShipFallback,
    drawStationHull, drawWeakPoint, drawRail, drawRadar, drawThreatRadar, drawOffscreenMarkers, drawBullet,
  };
})();
