/* ============================================================
 * storycine.js — skippable cinematic beats (live canvas + voxels).
 * Styles: gate | aegis | finale | warlord | vex.
 * Always skippable. Can chain Story.play after the beat.
 * ============================================================ */
const StoryCine = (() => {
  let layer = null, timer = null, onDone = null, busy = false;
  let raf = 0, t0 = 0, stars = [], debris = [], sparks = [];
  let cineOpts = null, shake = 0;
  let cineDone = false, storyDone = true, storyTimer = null;

  const BOSS_MODEL = {
    nebula: 'bossWarden', hive: 'bossHive', privateer: 'bossSail',
    heliot: 'bossHeliot', silo: 'bossSilo', asteroid: 'bossRock',
    ember: 'bossRock', void: 'bossStar', warden: 'bossOrb',
    leviathan: 'bossRock', reaper: 'boss', dreadnought: 'bossCross',
    nexus: 'bossCross', core: 'bossOrb', singularity: 'bossStar',
    relayCore: 'relay', frost: 'bossOrb',
  };

  function easeOut(t) { t = clamp01(t); return 1 - Math.pow(1 - t, 3); }
  function easeIn(t) { t = clamp01(t); return t * t * t; }
  function clamp01(t) { return t < 0 ? 0 : t > 1 ? 1 : t; }
  function lerp(a, b, t) { return a + (b - a) * t; }

  function ensure() {
    if (layer) return layer;
    layer = document.createElement('div');
    layer.id = 'story-cine';
    layer.className = 'story-cine hidden';
    layer.setAttribute('aria-hidden', 'true');
    const host = document.getElementById('game-frame') || document.body;
    host.appendChild(layer);
    return layer;
  }

  function stopLoop() {
    if (raf) { cancelAnimationFrame(raf); raf = 0; }
  }

  function cleanup() {
    stopLoop();
    if (timer) { clearTimeout(timer); timer = null; }
    if (storyTimer) { clearTimeout(storyTimer); storyTimer = null; }
    if (layer) {
      layer.classList.add('hidden');
      layer.onclick = null;
      layer.innerHTML = '';
      layer.style.removeProperty('--wl-accent');
    }
    busy = false;
    cineOpts = null;
    cineDone = false;
    storyDone = true;
    stars = []; debris = []; sparks = [];
    shake = 0;
  }

  function seedField() {
    stars = [];
    for (let i = 0; i < 140; i++) {
      stars.push({
        x: Math.random(), y: Math.random(),
        z: 0.15 + Math.random() * 0.85,
        s: 0.4 + Math.random() * 1.8,
      });
    }
    debris = [];
    for (let i = 0; i < 28; i++) {
      debris.push({
        x: Math.random(), y: Math.random(),
        vx: (Math.random() - 0.5) * 0.1,
        vy: 0.03 + Math.random() * 0.14,
        r: 1 + Math.random() * 3.2,
        a: Math.random() * Math.PI * 2,
        spin: (Math.random() - 0.5) * 4,
      });
    }
    sparks = [];
    for (let i = 0; i < 36; i++) {
      sparks.push({
        a: Math.random() * Math.PI * 2,
        r: 20 + Math.random() * 180,
        s: 0.6 + Math.random() * 1.8,
        spin: 0.4 + Math.random() * 1.6,
      });
    }
  }

  function hexToRgb(hex) {
    const s = String(hex || '#ff6a4a').replace('#', '');
    const n = parseInt(s.length === 3 ? s.split('').map(c => c + c).join('') : s.slice(0, 6), 16);
    return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
  }

  function shipKey() {
    try {
      const k = (typeof Profile !== 'undefined' && Profile.get().ship) || 'vanguard';
      return (typeof Vox !== 'undefined' && Vox.MODELS && Vox.MODELS[k]) ? k : 'vanguard';
    } catch (e) { return 'vanguard'; }
  }

  function voxDraw(ctx, key, x, y, o) {
    if (typeof Vox === 'undefined' || !Vox.draw || !Vox.MODELS) return false;
    const m = Vox.MODELS[key] || Vox.MODELS.boss;
    if (!m) return false;
    try {
      Vox.draw(ctx, m, x, y, Object.assign({ ignoreCam: true }, o));
      return true;
    } catch (e) { return false; }
  }

  function drawStars(ctx, W, H, t, rush) {
    ctx.fillStyle = '#02040c';
    ctx.fillRect(0, 0, W, H);
    const cx = W * 0.5, cy = H * 0.4;
    for (const st of stars) {
      let y = (st.y + t * 0.055 * rush * st.z) % 1;
      if (y < 0) y += 1;
      const x = (st.x + Math.sin(t * 0.12 + st.z * 4) * 0.008) % 1;
      const px = x * W, py = y * H;
      const streak = rush * st.z * (styleRush() > 1.6 ? 10 : 3.5);
      ctx.fillStyle = `rgba(210,230,255,${0.18 + st.z * 0.7})`;
      ctx.fillRect(px, py, st.s, st.s + streak);
    }
    // Depth fog
    const g = ctx.createRadialGradient(cx, cy, 8, cx, cy, Math.max(W, H) * 0.72);
    g.addColorStop(0, 'rgba(0,0,0,0)');
    g.addColorStop(1, 'rgba(0,0,0,0.52)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);
  }

  function styleRush() {
    const s = cineOpts && cineOpts.style;
    return s === 'finale' ? 2.6 : s === 'warlord' ? 1.55 : s === 'gate' ? 1.15 : 1;
  }

  function drawLetterbox(ctx, W, H) {
    const h = Math.max(28, H * 0.1);
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, W, h);
    ctx.fillRect(0, H - h, W, h);
    ctx.fillStyle = 'rgba(255,255,255,0.06)';
    ctx.fillRect(0, h - 1, W, 1);
    ctx.fillRect(0, H - h, W, 1);
  }

  function drawVignette(ctx, W, H, a) {
    const g = ctx.createRadialGradient(W * 0.5, H * 0.42, H * 0.12, W * 0.5, H * 0.42, Math.max(W, H) * 0.72);
    g.addColorStop(0, 'rgba(0,0,0,0)');
    g.addColorStop(1, `rgba(0,0,0,${a})`);
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);
  }

  function drawRing(ctx, x, y, r, col, w, a) {
    if (r < 1 || a <= 0) return;
    ctx.save();
    ctx.globalAlpha = a;
    ctx.strokeStyle = col;
    ctx.lineWidth = w;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  function drawLockBrackets(ctx, x, y, size, a, col) {
    if (a <= 0) return;
    const s = size;
    ctx.save();
    ctx.globalAlpha = a;
    ctx.strokeStyle = col;
    ctx.lineWidth = 2;
    const arm = s * 0.28;
    const corners = [[-1, -1], [1, -1], [1, 1], [-1, 1]];
    for (const [sx, sy] of corners) {
      const px = x + sx * s, py = y + sy * s * 0.72;
      ctx.beginPath();
      ctx.moveTo(px, py + sy * arm);
      ctx.lineTo(px, py);
      ctx.lineTo(px - sx * arm, py);
      ctx.stroke();
    }
    ctx.restore();
  }

  function flash(ctx, W, H, a, rgb) {
    if (a <= 0) return;
    ctx.fillStyle = `rgba(${rgb.r},${rgb.g},${rgb.b},${a})`;
    ctx.fillRect(0, 0, W, H);
  }

  /* ---------- WARLORD: ship approach + boss loom + lock-on ---------- */
  function drawWarlord(ctx, W, H, t, dur, opts) {
    const u = clamp01(t / dur);
    const accent = opts.accent || '#ff6a4a';
    const rgb = hexToRgb(accent);
    const cx = W * 0.5 + Math.sin(t * 37) * shake;
    const cy = H * 0.36 + Math.cos(t * 31) * shake * 0.6;
    const arrive = easeOut(u / 0.55);
    const hold = clamp01((u - 0.5) / 0.35);

    // Distant heat bloom that grows with the hull
    const bloom = 70 + arrive * 130;
    const pulse = 0.38 + 0.28 * Math.sin(t * 5.5);
    const ag = ctx.createRadialGradient(cx, cy, 6, cx, cy, bloom);
    ag.addColorStop(0, `rgba(${rgb.r},${rgb.g},${rgb.b},${0.42 * pulse})`);
    ag.addColorStop(0.45, `rgba(${rgb.r},${rgb.g},${rgb.b},${0.12 * pulse})`);
    ag.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = ag;
    ctx.beginPath(); ctx.arc(cx, cy, bloom, 0, Math.PI * 2); ctx.fill();

    const key = BOSS_MODEL[opts.bossKey] || 'boss';
    const scale = lerp(0.18, 1.05, arrive) + Math.sin(t * 1.4) * 0.02;
    const yOff = lerp(-H * 0.22, 0, arrive);
    if (typeof Vox !== 'undefined' && Vox.groundShadow) {
      Vox.groundShadow(ctx, cx, cy + yOff + 34, 42 * scale, { a: 0.5 * arrive });
    }
    voxDraw(ctx, key, cx, cy + yOff, {
      s: 7.2 * scale,
      yaw: Math.PI + t * 0.38,
      roll: Math.sin(t * 0.9) * 0.1,
      pitch: 0.95 + arrive * 0.12,
      t,
      thrust: 0.85,
      flameColor: accent,
    });

    // Player ship rising into frame (tiny, facing the threat). It stops just
    // above the weapon dock (which starts around 0.92H) rather than in the
    // middle third, where it crowded the dialogue on a phone.
    const shipY = lerp(H * 0.96, H * 0.80, easeOut(u / 0.4));
    voxDraw(ctx, shipKey(), W * 0.5 + Math.sin(t * 2.1) * 6, shipY, {
      s: 2.6,
      yaw: 0,
      roll: Math.sin(t * 2.4) * 0.12,
      pitch: 1.08,
      t,
      thrust: 1.1,
      flameColor: '#4ad6ff',
    });

    // Scan rings after the hull is readable
    if (u > 0.28) {
      for (let i = 0; i < 4; i++) {
        const rr = 24 + ((t * 110 + i * 46) % 170);
        drawRing(ctx, cx, cy + yOff, rr, `rgba(${rgb.r},${rgb.g},${rgb.b},${0.42 - rr / 480})`, 2, arrive);
      }
    }

    // HUD lock-on slam
    const lock = easeOut(clamp01((u - 0.48) / 0.18));
    drawLockBrackets(ctx, cx, cy + yOff, lerp(90, 52, lock), lock, `rgba(255,230,210,${0.55 + hold * 0.4})`);

    // Sweep beam
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    ctx.strokeStyle = `rgba(255,255,255,${0.08 + 0.1 * Math.sin(t * 7)})`;
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(0, cy + Math.sin(t * 2.4) * 50);
    ctx.lineTo(W, cy + Math.sin(t * 2.4) * 50 + 18);
    ctx.stroke();
    ctx.restore();

    if (u > 0.52 && u < 0.68) {
      flash(ctx, W, H, (1 - Math.abs(u - 0.6) / 0.08) * 0.18, rgb);
      shake = 2.4;
    } else {
      shake *= 0.86;
    }
  }

  /* ---------- GATE: iris slams shut around a live station voxel ---------- */
  function drawGate(ctx, W, H, t, dur) {
    const u = clamp01(t / dur);
    const cx = W * 0.5 + Math.sin(t * 40) * shake;
    const cy = H * 0.4;
    const rgb = hexToRgb('#ff5bd0');
    const close = easeIn(clamp01(u / 0.62));

    // Gate well
    const well = ctx.createRadialGradient(cx, cy, 10, cx, cy, 160);
    well.addColorStop(0, `rgba(${rgb.r},${rgb.g},${rgb.b},${0.22 + 0.12 * Math.sin(t * 6)})`);
    well.addColorStop(0.55, 'rgba(40,0,50,0.25)');
    well.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = well;
    ctx.beginPath(); ctx.arc(cx, cy, 160, 0, Math.PI * 2); ctx.fill();

    // Live architecture sitting in the well
    const gateScale = lerp(0.55, 0.95, easeOut(u / 0.35));
    if (typeof Vox !== 'undefined' && Vox.groundShadow) {
      Vox.groundShadow(ctx, cx, cy + 26, 38 * gateScale, { a: 0.4 });
    }
    voxDraw(ctx, 'station', cx, cy + 4, {
      s: 5.4 * gateScale,
      yaw: t * 0.22,
      roll: Math.sin(t * 0.8) * 0.04,
      pitch: 1.02,
      t,
    });

    // Concentric energy rings collapsing
    for (let i = 0; i < 5; i++) {
      const base = 118 - i * 16;
      const r = lerp(base + 40, base * 0.55, close);
      drawRing(ctx, cx, cy, r, `rgba(${rgb.r},${rgb.g},${rgb.b},${0.55 - i * 0.08})`, i === 0 ? 5 : 2, 0.85);
    }

    // Two iris leaves
    const open = lerp(1.15, 0.02, close);
    ctx.save();
    ctx.translate(cx, cy);
    ctx.strokeStyle = `rgba(${rgb.r},${rgb.g},${rgb.b},0.85)`;
    ctx.lineWidth = 10;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.arc(0, 0, 92, Math.PI * 0.12 + open, Math.PI * 0.88 - open);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, 92, Math.PI * 1.12 + open, Math.PI * 1.88 - open);
    ctx.stroke();

    // Spinning hex lock
    ctx.rotate(t * 0.55 * (1 - close * 0.7));
    ctx.strokeStyle = 'rgba(255,190,230,0.55)';
    ctx.lineWidth = 2.2;
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const a = i / 6 * Math.PI * 2;
      const r = 36 + Math.sin(t * 7) * 3;
      const x = Math.cos(a) * r, y = Math.sin(a) * r;
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.closePath(); ctx.stroke();
    ctx.restore();

    // Energy spokes
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    ctx.translate(cx, cy);
    ctx.rotate(t * 0.3);
    ctx.strokeStyle = `rgba(255,160,220,${0.18 + close * 0.25})`;
    ctx.lineWidth = 1;
    for (let i = 0; i < 8; i++) {
      const a = i / 8 * Math.PI * 2;
      ctx.beginPath();
      ctx.moveTo(Math.cos(a) * 18, Math.sin(a) * 18);
      ctx.lineTo(Math.cos(a) * lerp(150, 70, close), Math.sin(a) * lerp(150, 70, close));
      ctx.stroke();
    }
    ctx.restore();

    // Slam
    if (u > 0.58 && u < 0.78) {
      const slam = 1 - Math.abs(u - 0.66) / 0.1;
      flash(ctx, W, H, slam * 0.28, { r: 255, g: 140, b: 210 });
      drawRing(ctx, cx, cy, 20 + (u - 0.58) * 280, 'rgba(255,210,240,0.75)', 4, slam);
      shake = 3.2 * slam;
    } else {
      shake *= 0.84;
    }

    // Seal bar
    const bar = easeOut(clamp01((u - 0.62) / 0.22));
    ctx.fillStyle = `rgba(255,90,180,${0.35 + bar * 0.4})`;
    ctx.fillRect(cx - 80, cy - 3, 160 * bar, 6);
    if (bar > 0.95) {
      ctx.fillStyle = 'rgba(255,220,240,0.85)';
      ctx.fillRect(cx - 80, cy - 1, 160, 2);
    }
  }

  /* ---------- VEX: glitch entity, not a pink plate ---------- */
  function drawVex(ctx, W, H, t) {
    const cx = W * 0.5, cy = H * 0.4;
    const tear = Math.sin(t * 26) > 0.62 ? (Math.random() * 10 - 5) : 0;

    // Scanline field
    for (let i = 0; i < 52; i++) {
      const y = (Math.random() * H) | 0;
      ctx.fillStyle = `rgba(255,70,170,${0.03 + Math.random() * 0.07})`;
      ctx.fillRect(0, y, W, 1 + (Math.random() * 3) | 0);
    }

    // Split-core entity (live orb if we have it, plus RGB offset)
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    voxDraw(ctx, 'bossOrb', cx + tear, cy, {
      s: 6.2,
      yaw: t * 1.8,
      roll: tear * 0.04,
      pitch: 1.05,
      t,
    });
    ctx.restore();

    // Chromatic ghosts
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    ctx.globalAlpha = 0.28;
    ctx.fillStyle = 'rgba(255,40,160,0.5)';
    ctx.beginPath(); ctx.ellipse(cx + tear * 2.2, cy, 42, 56, 0, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = 'rgba(40,220,255,0.35)';
    ctx.beginPath(); ctx.ellipse(cx - tear * 2.4, cy + 3, 34, 48, 0, 0, Math.PI * 2); ctx.fill();
    ctx.restore();

    // Eye slits
    const blink = 0.5 + 0.5 * Math.sin(t * 13);
    ctx.fillStyle = `rgba(255,90,200,${0.45 + blink * 0.5})`;
    ctx.fillRect(cx - 18 + tear, cy - 12, 12, 3);
    ctx.fillRect(cx + 8 + tear, cy - 12, 12, 3);

    // Corrupted HUD scraps
    if (Math.random() < 0.35) {
      ctx.fillStyle = 'rgba(0,255,255,0.1)';
      ctx.fillRect(tear * 3, Math.random() * H, W, 6 + Math.random() * 10);
    }
    ctx.save();
    ctx.globalAlpha = 0.35 + 0.25 * Math.sin(t * 9);
    ctx.fillStyle = '#ff5bd0';
    ctx.font = '11px monospace';
    ctx.fillText('// VEX.INTRUSION 0x' + ((t * 999) | 0).toString(16).toUpperCase(), 18 + tear, H * 0.18);
    ctx.fillText('AUTH=DENIED   CH=UNREG', 18 - tear, H * 0.18 + 16);
    ctx.restore();
  }

  /* ---------- AEGIS: five locks dock onto the player's ship ---------- */
  function drawAegis(ctx, W, H, t, dur) {
    const u = clamp01(t / dur);
    const cx = W * 0.5, cy = H * 0.42;
    const n = 5;
    const docked = [];

    for (let i = 0; i < n; i++) {
      const ang = -Math.PI / 2 + i / n * Math.PI * 2;
      const arrive = easeOut(clamp01((u - i * 0.07) / 0.32));
      const dist = (1 - arrive) * 120;
      const x = cx + Math.cos(ang) * dist;
      const y = cy + Math.sin(ang) * dist * 0.72;
      docked.push(arrive);
      if (typeof Vox !== 'undefined' && Vox.MODELS && Vox.MODELS.crystal) {
        voxDraw(ctx, 'crystal', x, y, {
          s: 2.1 + arrive * 0.4,
          yaw: t * 1.6 + i,
          pitch: 1.05,
          t,
        });
      } else {
        ctx.fillStyle = `rgba(180,255,210,${0.35 + arrive * 0.55})`;
        ctx.beginPath();
        ctx.moveTo(x, y - 10); ctx.lineTo(x + 8, y); ctx.lineTo(x, y + 10); ctx.lineTo(x - 8, y);
        ctx.closePath(); ctx.fill();
      }
      if (arrive > 0.15) {
        ctx.strokeStyle = `rgba(160,255,210,${0.15 * arrive})`;
        ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(cx, cy); ctx.stroke();
      }
    }

    // Parked just above the weapon dock (~0.92H). The dialogue is anchored to
    // the TOP of the frame, so anything near the middle crowds it on a phone;
    // the rest of the composition keeps its own centre.
    voxDraw(ctx, shipKey(), cx, H * 0.80, {
      s: 4.2 + easeOut(u) * 0.6,
      yaw: Math.sin(t * 0.7) * 0.15,
      roll: Math.sin(t * 1.1) * 0.08,
      pitch: 1.05,
      t,
      thrust: 0.4 + u * 0.8,
      flameColor: '#7dffa0',
    });

    const core = 0.25 + 0.75 * Math.min(1, u / 0.7);
    const g = ctx.createRadialGradient(cx, cy, 2, cx, cy, 70);
    g.addColorStop(0, `rgba(255,255,220,${core * 0.85})`);
    g.addColorStop(0.4, `rgba(160,255,200,${0.4 * core})`);
    g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.arc(cx, cy, 70, 0, Math.PI * 2); ctx.fill();

    if (u > 0.62) {
      const wave = (u - 0.62) / 0.38;
      drawRing(ctx, cx, cy, 24 + wave * 140, 'rgba(180,255,210,0.65)', 3, 1 - wave);
    }
  }

  /* ---------- FINALE: ship pulled into a collapsing threshold ---------- */
  function drawFinale(ctx, W, H, t, dur) {
    const u = clamp01(t / dur);
    const cx = W * 0.5, cy = H * 0.4;
    const pull = 0.5 + u * 2.2;

    for (let i = 0; i < debris.length; i++) {
      const d = debris[i];
      const dx = d.x - 0.5, dy = d.y - 0.42;
      d.x += -dx * 0.016 * pull;
      d.y += -dy * 0.016 * pull;
      d.a += d.spin * 0.02;
      ctx.save();
      ctx.translate(d.x * W, d.y * H);
      ctx.rotate(d.a);
      ctx.fillStyle = 'rgba(255,210,120,0.6)';
      ctx.fillRect(-d.r, -d.r * 0.4, d.r * 2, d.r * 0.8);
      ctx.restore();
    }

    for (const sp of sparks) {
      const ang = sp.a + t * sp.spin;
      const rr = lerp(sp.r + 80, 8, easeIn(u));
      const x = cx + Math.cos(ang) * rr;
      const y = cy + Math.sin(ang) * rr * 0.72;
      ctx.fillStyle = `rgba(255,230,160,${0.35 + u * 0.4})`;
      ctx.fillRect(x, y, sp.s, sp.s);
    }

    const hole = 14 + u * 86;
    const g = ctx.createRadialGradient(cx, cy, 2, cx, cy, hole * 1.7);
    g.addColorStop(0, 'rgba(255,240,180,0.95)');
    g.addColorStop(0.22, 'rgba(180,80,255,0.5)');
    g.addColorStop(0.65, 'rgba(20,0,40,0.85)');
    g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.arc(cx, cy, hole * 1.7, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#02040c';
    ctx.beginPath(); ctx.arc(cx, cy, hole * 0.32, 0, Math.PI * 2); ctx.fill();

    const shipScale = lerp(3.4, 1.1, easeIn(u));
    // Starts low, by the dock, and flies up into the gate — the departure is
    // the point of this shot, so only the starting height moves.
    const shipY = lerp(H * 0.80, cy + 8, easeIn(u));
    voxDraw(ctx, shipKey(), cx, shipY, {
      s: shipScale,
      yaw: t * 0.8,
      roll: Math.sin(t * 3) * 0.2 * u,
      pitch: 1.05 + u * 0.2,
      t,
      thrust: 1.2,
      flameColor: '#ffe24a',
    });
  }

  function loop() {
    if (!busy || !layer) return;
    const cv = layer.querySelector('.cine-canvas');
    if (!cv) return;
    const host = layer.getBoundingClientRect();
    const W = Math.max(1, host.width | 0);
    const H = Math.max(1, host.height | 0);
    if (cv.width !== W) cv.width = W;
    if (cv.height !== H) cv.height = H;
    const ctx = cv.getContext('2d');
    const t = (performance.now() - t0) / 1000;
    const rawDur = (cineOpts.ms || 2800) / 1000;
    const style = cineOpts.style || 'gate';
    // The comm window plays INSIDE the beat — while it is still open, stretch the
    // scene clock so progress never reaches the fade-out. Motion keeps running
    // (t is untouched), it just eases into slow-motion instead of cutting to a
    // black plate behind the dialogue.
    const dur = storyDone ? rawDur : Math.max(rawDur, t / 0.86);
    const u = clamp01(t / dur);

    drawStars(ctx, W, H, t, styleRush());
    if (style === 'warlord') drawWarlord(ctx, W, H, t, dur, cineOpts);
    else if (style === 'gate') drawGate(ctx, W, H, t, dur);
    else if (style === 'vex') drawVex(ctx, W, H, t);
    else if (style === 'aegis') drawAegis(ctx, W, H, t, dur);
    else if (style === 'finale') drawFinale(ctx, W, H, t, dur);

    drawVignette(ctx, W, H, 0.55);
    drawLetterbox(ctx, W, H);

    // Fade in / out so the beat never pops as a flat plate
    if (u < 0.08) {
      ctx.fillStyle = `rgba(2,4,12,${1 - u / 0.08})`;
      ctx.fillRect(0, 0, W, H);
    } else if (u > 0.88) {
      ctx.fillStyle = `rgba(2,4,12,${(u - 0.88) / 0.12})`;
      ctx.fillRect(0, 0, W, H);
    }

    raf = requestAnimationFrame(loop);
  }

  function play(opts) {
    opts = Object.assign({ style: 'gate', ms: 3200, skippable: true }, opts || {});
    cleanup();
    busy = true;
    onDone = opts.onDone || null;
    cineOpts = opts;
    const L = ensure();
    const title = opts.title != null ? opts.title : (opts.titleKey ? T(opts.titleKey) : '');
    const sub = opts.sub != null ? opts.sub : (opts.subKey ? T(opts.subKey) : '');
    const partCls = opts.part ? ' part-' + opts.part : '';
    L.className = `story-cine on style-${opts.style}${partCls}`;
    if (opts.accent) L.style.setProperty('--wl-accent', opts.accent);
    L.innerHTML = `
      <canvas class="cine-canvas" aria-hidden="true"></canvas>
      <div class="cine-copy">
        ${title ? `<div class="cine-title">${title}</div>` : ''}
        ${sub ? `<div class="cine-sub">${sub}</div>` : ''}
        ${opts.skippable ? `<div class="cine-skip">${T('tut.skip')}</div>` : ''}
      </div>`;
    seedField();
    t0 = performance.now();
    cineDone = false;
    storyDone = !opts.storyId;
    loop();
    L.onclick = () => {
      if (!opts.skippable) return;
      tryEnd(true);
    };
    timer = setTimeout(() => { cineDone = true; tryEnd(false); }, opts.ms);
    if (opts.storyId) {
      const at = opts.storyAt != null ? opts.storyAt : 0.38;
      storyTimer = setTimeout(() => startOverlayStory(opts), Math.max(280, opts.ms * at));
    }
    try {
      if (opts.style === 'vex') Engine.audio.blip(180, 0.14, 'sawtooth', 0.08);
      else if (opts.style === 'warlord') Engine.audio.blip(80, 0.22, 'square', 0.09);
      else if (opts.style === 'gate') Engine.audio.sweep(160, 780, 0.55, 'sine', 0.09);
      else if (opts.style === 'finale') Engine.audio.sweep(70, 480, 0.7, 'sawtooth', 0.08);
      else Engine.audio.blip(320, 0.1, 'sine', 0.06);
    } catch (e) {}
  }

  function startOverlayStory(opts) {
    if (!busy || !opts.storyId) { storyDone = true; return; }
    if (typeof Story === 'undefined') { storyDone = true; tryEnd(false); return; }
    // Already seen → don't hold the cine.
    if (opts.storyOnce !== false && Story.hasSeen && Story.hasSeen(opts.storyId) && !opts.storyForce) {
      storyDone = true;
      tryEnd(false);
      return;
    }
    storyDone = false;
    Story.playOnce(opts.storyId, Object.assign({
      pauseGame: false,
      overlayCine: true,
      onDone: () => { storyDone = true; tryEnd(false); },
    }, opts.storyOpts || {}));
  }

  function tryEnd(force) {
    if (!busy) return;
    if (force) {
      cineDone = true;
      storyDone = true;
      try {
        if (typeof Story !== 'undefined' && Story.isOpen && Story.isOpen() && Story.finish) Story.finish();
      } catch (e) {}
    }
    if (cineDone && storyDone) end();
  }

  function end() {
    if (!busy) return;
    const cb = onDone;
    cleanup();
    if (cb) cb();
  }

  function hide() { if (busy) tryEnd(true); else cleanup(); }

  function storyMuted() {
    return typeof Story !== 'undefined' && Story.campaignStoryMuted && Story.campaignStoryMuted();
  }

  function gateSeal(partN, then) {
    if (storyMuted()) { if (then) then(); return; }
    play({
      style: 'gate',
      ms: 3800,
      titleKey: 'cine.gate.title',
      subKey: 'cine.gate.sub',
      part: partN,
      storyId: 'part' + partN + '.afterGate',
      storyOnce: true,
      storyOpts: { pauseGame: false },
      onDone: then,
    });
  }

  function aegisSync(then) {
    if (typeof Story !== 'undefined' && Story.aegisAssembled && Story.aegisAssembled()) {
      if (then) then();
      return;
    }
    play({
      style: 'aegis',
      ms: 3800,
      titleKey: 'cine.aegis.title',
      subKey: 'cine.aegis.sub',
      storyId: 'aegis.complete',
      storyOnce: true,
      storyOpts: { pauseGame: false },
      onDone: then,
    });
  }

  function finale(then) {
    if (storyMuted()) { if (then) then(); return; }
    play({
      style: 'finale',
      ms: 4200,
      titleKey: 'cine.finale.title',
      subKey: 'cine.finale.sub',
      storyId: 'part5.finale',
      storyOnce: true,
      storyOpts: { pauseGame: true },
      onDone: then,
    });
  }

  const WL_ACCENT = {
    1: '#ff4a4a',
    2: '#4aa85e',
    3: '#c8a878',
    4: '#ff6a20',
    5: '#c04050',
  };

  function warlordIntro(partN, bossKey, then) {
    if (storyMuted()) { if (then) then(); return; }
    const name = bossKey
      ? T('boss.' + bossKey + '.name', bossKey)
      : T('char.warlord');
    play({
      style: 'warlord',
      ms: 4000,
      title: name,
      subKey: 'cine.warlord.sub',
      part: partN,
      accent: WL_ACCENT[partN] || '#ff6a4a',
      bossKey,
      storyId: 'part' + partN + '.warlord',
      storyOnce: true,
      storyOpts: { pauseGame: false, warlordKey: bossKey },
      onDone: then,
    });
  }

  function vexPulse(scriptId, then) {
    if (storyMuted()) { if (then) then(); return; }
    play({
      style: 'vex',
      ms: 2600,
      titleKey: 'cine.vex.title',
      subKey: 'cine.vex.sub',
      storyId: scriptId || null,
      storyOnce: true,
      storyOpts: { pauseGame: false },
      onDone: then,
    });
  }

  // Dev preview: index.html?cine=warlord|gate|vex|aegis|finale
  try {
    const q = new URLSearchParams(location.search);
    const preview = q.get('cine');
    if (preview) {
      window.addEventListener('load', () => setTimeout(() => {
        const map = {
          warlord: () => play({ style: 'warlord', ms: 4000, title: 'WARLORD', subKey: 'cine.warlord.sub', accent: '#ff4a4a', bossKey: 'nebula' }),
          gate: () => play({ style: 'gate', ms: 3800, titleKey: 'cine.gate.title', subKey: 'cine.gate.sub' }),
          vex: () => play({ style: 'vex', ms: 2600, titleKey: 'cine.vex.title', subKey: 'cine.vex.sub' }),
          aegis: () => play({ style: 'aegis', ms: 3800, titleKey: 'cine.aegis.title', subKey: 'cine.aegis.sub' }),
          finale: () => play({ style: 'finale', ms: 4200, titleKey: 'cine.finale.title', subKey: 'cine.finale.sub' }),
        };
        if (map[preview]) map[preview]();
      }, 500));
    }
  } catch (e) {}

  return {
    play, gateSeal, aegisSync, finale, warlordIntro, vexPulse, hide,
    get busy() { return busy; },
  };
})();
