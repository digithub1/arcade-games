/* ============================================================
 * fxtrans.js — cinematic screen transitions (no deps).
 *
 * Styles:
 *   cube  — 3D voxel cubes rotate in random order (old face → new face)
 *   warp  — player ship hyperjump into combat
 *   fade  — soft crossfade (light panels)
 *
 * API:
 *   FXTrans.go({ style, run })  — capture → animate → run() mid-way → finish
 *   FXTrans.busy                — true while playing
 * ========================================================== */
const FXTrans = (() => {
  let busy = false;
  let layer = null;
  let canvas = null;
  let ctx = null;

  const easeOutCubic = t => 1 - Math.pow(1 - t, 3);
  const easeInCubic = t => t * t * t;
  const easeInOutCubic = t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  const wait = ms => new Promise(r => setTimeout(r, ms));
  const frame = () => new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
  const lerp = (a, b, t) => a + (b - a) * t;
  const clamp01 = t => t < 0 ? 0 : t > 1 ? 1 : t;
  const clamp = (v, a, b) => v < a ? a : v > b ? b : v;

  function frameEl() {
    return document.getElementById('game-frame') || document.body;
  }

  function ensureLayer() {
    const host = frameEl();
    if (!layer) {
      layer = document.createElement('div');
      layer.id = 'fx-trans-layer';
      layer.setAttribute('aria-hidden', 'true');
      canvas = document.createElement('canvas');
      layer.appendChild(canvas);
      // alpha:true → finished flip tiles punch holes to LIVE DOM underneath
      ctx = canvas.getContext('2d', { alpha: true });
    }
    if (layer.parentElement !== host) host.appendChild(layer);
    return layer;
  }

  /** Fully idle curtain — out of the render tree so it cannot restyle live UI. */
  function hideLayer() {
    if (!layer) return;
    layer.classList.remove('on');
    layer.style.background = '';
    if (ctx && canvas) {
      // Reset buffer so a stale frame never flashes on next show
      try { ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.clearRect(0, 0, canvas.width, canvas.height); } catch (e) {}
    }
  }

  function sizeCanvas() {
    const host = frameEl();
    const w = Math.max(1, host.clientWidth | 0);
    const h = Math.max(1, host.clientHeight | 0);
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    // Only resize when needed — resetting width/height clears the bitmap
    const tw = Math.round(w * dpr), th = Math.round(h * dpr);
    if (canvas.width !== tw || canvas.height !== th) {
      canvas.width = tw;
      canvas.height = th;
    }
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.imageSmoothingEnabled = false;
    return { w, h, dpr };
  }

  function visibleOverlays() {
    const host = frameEl();
    const list = [];
    host.querySelectorAll('.overlay, #hud').forEach(el => {
      if (el.id === 'fx-trans-layer') return;
      if (el.classList.contains('hidden')) return;
      const st = getComputedStyle(el);
      if (st.display === 'none' || st.visibility === 'hidden' || st.opacity === '0') return;
      list.push(el);
    });
    return list;
  }

  /** Wait until the browser has painted (and fonts are ready). */
  async function settlePaint(extraMs) {
    try { if (document.fonts && document.fonts.ready) await document.fonts.ready; } catch (e) {}
    await frame();
    await frame();
    if (extraMs) await wait(extraMs);
    await frame();
  }

  /** One display refresh (single rAF) — lighter than double-rAF `frame()`. */
  const nextPaint = () => new Promise(r => requestAnimationFrame(r));

  /**
   * LIVE snapshot — composites REAL canvas pixels + computed CSS from the live DOM.
   * Sync (no foreignObject). FO was dropping glass/filters and looked like a "dead shell".
   * Call VoxUI.freezeForCapture() first so ship/fx canvases aren't mid-clearRect.
   */
  function captureFrame(w, h) {
    const host = frameEl();
    w = w || Math.max(1, host.clientWidth | 0);
    h = h || Math.max(1, host.clientHeight | 0);
    const out = document.createElement('canvas');
    out.width = w;
    out.height = h;
    const x = out.getContext('2d');
    const hr = host.getBoundingClientRect();

    // Deep void base (matches game chrome)
    const g = x.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, '#070b18');
    g.addColorStop(0.55, '#04060f');
    g.addColorStop(1, '#02030a');
    x.fillStyle = g;
    x.fillRect(0, 0, w, h);

    // In-run game buffer — draw whenever combat pixels should be the source
    // (HUD up = mid-run; no overlay screens = combat/gameover canvas still showing)
    const game = document.getElementById('game');
    const hud = document.getElementById('hud');
    const overlays = visibleOverlays();
    const overlayScreens = overlays.filter(el => el.id !== 'hud');
    const gameLive = game && game.width && (
      (hud && !hud.classList.contains('hidden')) || overlayScreens.length === 0
    );
    if (gameLive) {
      try { x.drawImage(game, 0, 0, w, h); } catch (e) {}
    }

    // 1) Full-frame scene backgrounds + FX (live pixels)
    for (const el of overlays) {
      el.querySelectorAll('canvas.scene-bg').forEach(c => {
        if (!c.width || !c.height) return;
        try { x.drawImage(c, 0, 0, w, h); } catch (e) {}
      });
      el.querySelectorAll('canvas.scene-fx').forEach(c => {
        if (!c.width || !c.height) return;
        try { x.drawImage(c, 0, 0, w, h); } catch (e) {}
      });
    }

    // 2) CSS chrome from live computed styles (real colors — not a fake template)
    for (const el of overlays) {
      // Broad pass: anything with a painted box
      el.querySelectorAll(
        'h1, h2, h3, p, button, .btn, .btn-cta, .btn-cta-sm, .btn-ghost, .sub, ' +
        '.glass-card, .hangar-btn, .pass-card, .daily-card, .mode-banner, .campaign-block, ' +
        '.set-panel, .glass-panel, .ship-card, .seg, .hub-icon-btn, .curr-row, .home-title, ' +
        '.scr-head, .scr-title, .scr-back, .scr-body, .scr-foot, .set-block, .shop-item, ' +
        '.bp-summary, .bp-tier, .bp-cell, .bp-track, .bp-head, ' +
        '.hg-chrome, .hg-active, .hg-context, .hg-ctx-card, .hg-tabs, .hg-tab, .hg-scope, ' +
        '.hub-section-label, .map-node, .map-panel, .detail-panel, .chip, .badge, .stat-pill, ' +
        '.up-card, .wpn-row, .map-detail, .menu-inner, .menu-feats, .feat, .go-panel, ' +
        '.reward-btn, .social-btn, .ftl-bar, .ftl-dock, .hub-wrap'
      ).forEach(node => drawLiveBox(x, node, hr, w, h));
    }

    // 3) Live voxel / UI canvases (ships, thumbs) at real on-screen rects
    for (const el of overlays) {
      el.querySelectorAll('canvas').forEach(c => {
        if (!c.width || !c.height) return;
        if (c.classList.contains('scene-bg') || c.classList.contains('scene-fx')) return;
        if (c.parentElement && c.parentElement.id === 'fx-trans-layer') return;
        const r = c.getBoundingClientRect();
        const px = r.left - hr.left;
        const py = r.top - hr.top;
        if (r.width < 2 || r.height < 2) return;
        try { x.drawImage(c, px, py, r.width, r.height); } catch (e) {}
      });
    }

    // 4) Images / SVG icons
    for (const el of overlays) {
      el.querySelectorAll('img, svg').forEach(node => {
        const r = node.getBoundingClientRect();
        const px = r.left - hr.left;
        const py = r.top - hr.top;
        if (r.width < 2 || r.height < 2) return;
        try {
          if (node.tagName === 'IMG' && node.naturalWidth) x.drawImage(node, px, py, r.width, r.height);
          else if (node.tagName === 'SVG') {
            // rasterize small icons via temporary image if needed — draw as foreign? skip heavy
            // Most icons are inline SVG paths; paintLiveText won't get them — use drawImage via blob is async.
            // Approximate with nothing if too hard; Icons often inject as img or inline already painted in parent.
          }
        } catch (e) {}
      });
    }

    // 5) Live text (actual strings + computed font/color)
    for (const el of overlays) paintLiveText(x, el, hr, w, h);

    return out;
  }

  /** Async wrapper kept for warp/fade call sites — freeze canvases around snapshot. */
  async function captureFrameAsync() {
    let unfreeze = null;
    if (typeof VoxUI !== 'undefined' && VoxUI.freezeForCapture) {
      try { unfreeze = VoxUI.freezeForCapture(); } catch (e) {}
    }
    try {
      return captureFrame();
    } finally {
      if (typeof unfreeze === 'function') unfreeze();
    }
  }

  function drawLiveBox(x, node, hr, w, h) {
    const r = node.getBoundingClientRect();
    const px = r.left - hr.left;
    const py = r.top - hr.top;
    if (r.width < 3 || r.height < 3) return;
    if (px + r.width < 0 || py + r.height < 0 || px > w || py > h) return;
    const st = getComputedStyle(node);
    const bg = st.backgroundColor;
    const br = parseFloat(st.borderTopLeftRadius) || parseFloat(st.borderRadius) || 0;
    const rad = Math.min(br, r.width / 2, r.height / 2);
    const hasBg = bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent';
    const hasImg = st.backgroundImage && st.backgroundImage !== 'none';
    const bw = parseFloat(st.borderTopWidth) || 0;
    if (!hasBg && !hasImg && bw <= 0) return;

    x.save();
    // Soft outer glow (approximates filter:drop-shadow / box-shadow)
    const shadow = st.boxShadow;
    if (shadow && shadow !== 'none') {
      x.shadowColor = 'rgba(74,214,255,0.25)';
      x.shadowBlur = 12;
      x.shadowOffsetY = 2;
    }
    roundRect(x, px, py, r.width, r.height, rad);
    if (hasBg) {
      x.fillStyle = bg;
      x.fill();
    }
    x.shadowColor = 'transparent';
    x.shadowBlur = 0;
    // Gradient / layered bg sheen (btn-cta, glass)
    if (hasImg || (hasBg && (node.classList.contains('btn-cta') || node.classList.contains('glass-card')
        || node.classList.contains('btn')))) {
      const lg = x.createLinearGradient(px, py, px, py + r.height);
      lg.addColorStop(0, 'rgba(200,230,255,0.12)');
      lg.addColorStop(0.45, 'rgba(200,230,255,0.02)');
      lg.addColorStop(1, 'rgba(0,0,0,0.14)');
      x.fillStyle = lg;
      x.fill();
    }
    if (bw > 0 && st.borderTopColor && st.borderTopColor !== 'rgba(0, 0, 0, 0)') {
      x.strokeStyle = st.borderTopColor;
      x.lineWidth = Math.min(2, Math.max(1, bw));
      x.stroke();
    }
    x.restore();
  }

  function resolveTextFill(x, st, px, py, ww, hh) {
    // Gradient titles use color:transparent + background-clip:text — recover a solid/gradient fill
    const clip = (st.webkitBackgroundClip || st.backgroundClip || '').toLowerCase();
    const col = st.color || '';
    const transparent = !col || col === 'transparent' || col === 'rgba(0, 0, 0, 0)';
    if (clip.includes('text') || transparent) {
      const img = st.backgroundImage || '';
      // Parse simple linear-gradient(... #hex ..., #hex ...)
      const hexes = img.match(/#[0-9a-fA-F]{3,8}|rgba?\([^)]+\)/g);
      if (hexes && hexes.length >= 2) {
        const lg = x.createLinearGradient(px, py, px, py + hh);
        lg.addColorStop(0, hexes[0]);
        lg.addColorStop(1, hexes[hexes.length - 1]);
        return lg;
      }
      if (hexes && hexes.length === 1) return hexes[0];
      // Fallback neon so titles never vanish in the freeze
      return '#9ad8ff';
    }
    return col || '#cfeaff';
  }

  function paintLiveText(x, root, hr, w, h) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    let node;
    while ((node = walker.nextNode())) {
      const text = (node.nodeValue || '').replace(/\s+/g, ' ').trim();
      if (!text || text.length > 80) continue;
      const parent = node.parentElement;
      if (!parent) continue;
      const tag = parent.tagName;
      if (tag === 'SCRIPT' || tag === 'STYLE') continue;
      const st = getComputedStyle(parent);
      if (st.display === 'none' || st.visibility === 'hidden' || parseFloat(st.opacity) === 0) continue;
      if (parseFloat(st.fontSize) < 8) continue;
      const r = parent.getBoundingClientRect();
      const px = r.left - hr.left;
      const py = r.top - hr.top;
      if (r.width < 4 || r.height < 4) continue;
      if (px > w || py > h || px + r.width < 0 || py + r.height < 0) continue;

      x.save();
      x.font = st.font || '14px system-ui,sans-serif';
      x.fillStyle = resolveTextFill(x, st, px, py, r.width, r.height);
      x.textBaseline = 'middle';
      x.globalAlpha = Math.min(1, parseFloat(st.opacity) || 1);
      // Title glow
      if ((st.webkitBackgroundClip || st.backgroundClip || '').toLowerCase().includes('text')
          || parent.tagName === 'H1' || parent.classList.contains('home-title')) {
        x.shadowColor = 'rgba(90,180,255,0.45)';
        x.shadowBlur = 14;
      }
      const align = st.textAlign;
      // menu-inner is centered flex — text-align may be start but visual is center
      const centered = align === 'center' || parent.closest('.menu-inner, .hub-head, .set-panel, .scr-title');
      if (centered || align === 'center') {
        x.textAlign = 'center';
        x.fillText(text, px + r.width * 0.5, py + r.height * 0.5, r.width - 4);
      } else if (align === 'right' || align === 'end') {
        x.textAlign = 'right';
        x.fillText(text, px + r.width - 4, py + r.height * 0.5, r.width - 4);
      } else {
        x.textAlign = 'left';
        x.fillText(text, px + 4, py + r.height * 0.5, r.width - 8);
      }
      x.restore();
    }
  }

  function roundRect(x, px, py, ww, hh, r) {
    const rr = Math.min(r, ww / 2, hh / 2);
    x.beginPath();
    x.moveTo(px + rr, py);
    x.arcTo(px + ww, py, px + ww, py + hh, rr);
    x.arcTo(px + ww, py + hh, px, py + hh, rr);
    x.arcTo(px, py + hh, px, py, rr);
    x.arcTo(px, py, px + ww, py, rr);
    x.closePath();
  }

  function animate(duration, step) {
    return new Promise(resolve => {
      const t0 = performance.now();
      function tick(now) {
        const t = Math.min(1, (now - t0) / duration);
        step(t);
        if (t < 1) requestAnimationFrame(tick);
        else resolve();
      }
      requestAnimationFrame(tick);
    });
  }

  /* ============================================================
   * CUBE — true 3D voxel cubes (perspective rotate Y/X)
   *
   * Everything is LIVE data — never a blank/template shell:
   *   1) wait for CURRENT UI to paint fully (still on screen)
   *   2) capture LIVE old pixels (real DOM + canvases)
   *   3) only THEN raise curtain with that capture
   *   4) run() mounts REAL destination under curtain (full data)
   *   5) wait for destination paint → capture LIVE new pixels
   *   6) cubes flip; finished tiles punch holes → live new DOM shows through
   *   7) drop curtain — destination already mounted (no second load)
   * ========================================================== */

  function sampleCubePalette(snapA, snapB, tiles) {
    let dataA = null, dataB = null;
    const wA = snapA.width, hA = snapA.height;
    const wB = snapB.width, hB = snapB.height;
    try { dataA = snapA.getContext('2d').getImageData(0, 0, wA, hA).data; } catch (e) {}
    try { dataB = snapB.getContext('2d').getImageData(0, 0, wB, hB).data; } catch (e) {}

    const avg = (data, w, h, t) => {
      if (!data) return { r: 40, g: 55, b: 90 };
      let r = 0, g = 0, b = 0, n = 0;
      const stepX = Math.max(1, (t.tw / 4) | 0);
      const stepY = Math.max(1, (t.th / 4) | 0);
      for (let y = t.sy; y < t.sy + t.th; y += stepY) {
        for (let x = t.sx; x < t.sx + t.tw; x += stepX) {
          if (x >= w || y >= h) continue;
          const p = (y * w + x) * 4;
          r += data[p]; g += data[p + 1]; b += data[p + 2];
          n++;
        }
      }
      if (!n) return { r: 40, g: 55, b: 90 };
      return { r: (r / n) | 0, g: (g / n) | 0, b: (b / n) | 0 };
    };

    for (let i = 0; i < tiles.length; i++) {
      const t = tiles[i];
      const a = avg(dataA, wA, hA, t);
      const b = avg(dataB, wB, hB, t);
      const r = (a.r * 0.55 + b.r * 0.45) | 0;
      const g = (a.g * 0.55 + b.g * 0.45) | 0;
      const bl = (a.b * 0.55 + b.b * 0.45) | 0;
      // Sample tile → solid edge color (used only for thin extrusion sides)
      t.colSide = `rgb(${(r * 0.42) | 0},${(g * 0.42) | 0},${(bl * 0.48) | 0})`;
      t.colSideLit = `rgb(${(r * 0.58) | 0},${(g * 0.58) | 0},${(bl * 0.64) | 0})`;
      t.colTop = `rgb(${clamp((r * 0.75) | 0, 0, 255)},${clamp((g * 0.78) | 0, 0, 255)},${clamp((bl * 0.85) | 0, 0, 255)})`;
      t.colBot = `rgb(${(r * 0.22) | 0},${(g * 0.22) | 0},${(bl * 0.28) | 0})`;
    }
  }

  function buildFlipTiles(w, h, tile) {
    const tiles = [];
    const cols = Math.ceil(w / tile);
    const rows = Math.ceil(h / tile);
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const sx = col * tile;
        const sy = row * tile;
        const tw = Math.min(tile, w - sx);
        const th = Math.min(tile, h - sy);
        if (tw < 1 || th < 1) continue;
        tiles.push({
          sx, sy, tw, th,
          // Slim “screen tile” thickness — classic premium flip, not a brick
          hd: Math.max(3.5, Math.min(tw, th) * 0.28),
          // Slightly faster than 1.4s, still smooth
          delay: Math.random() * 0.82,
          dur: 0.32 + Math.random() * 0.08,
          // Yaw only → clean, readable rotation (random pitch looked messy)
          axis: 'y',
          dir: Math.random() < 0.5 ? 1 : -1,
          colSide: '#2a3a55',
          colSideLit: '#3d5478',
          colTop: '#5a7aa0',
          colBot: '#121a28',
        });
      }
    }
    return tiles;
  }

  /** Project model point after axis rotation. Camera looks +Z→origin from −Z. */
  function projectCubePt(x, y, z, ang, axis, fl) {
    let rx = x, ry = y, rz = z;
    const c = Math.cos(ang), s = Math.sin(ang);
    if (axis === 'y') {
      rx = x * c + z * s;
      rz = -x * s + z * c;
    } else {
      ry = y * c - z * s;
      rz = y * s + z * c;
    }
    const k = fl / (fl + rz);
    return { x: rx * k, y: ry * k, z: rz, k };
  }

  function drawTexFace(img, sx, sy, sw, sh, p0, p1, p3) {
    const a = (p1.x - p0.x) / sw;
    const b = (p3.x - p0.x) / sh;
    const c = (p1.y - p0.y) / sw;
    const d = (p3.y - p0.y) / sh;
    if (Math.abs(a * d - b * c) < 1e-6) return;

    ctx.save();
    ctx.imageSmoothingEnabled = true;
    ctx.transform(a, c, b, d, p0.x, p0.y);
    ctx.drawImage(img, sx, sy, sw, sh, 0, 0, sw, sh);
    ctx.restore();
  }

  /**
   * Proven “premium tile-cube” flip (Keynote / iOS-style):
   * thin extrusion, 6 clean faces, side brightness follows yaw, no fat edges.
   * Front/back carry the real screen; sides are quiet solid volume.
   */
  let EDGE = true;   // per-transition copy of the hairline knob
  function drawCube3D(snapOut, snapIn, t, ang) {
    const hw = t.tw * 0.5;
    const hh = t.th * 0.5;
    const hd = t.hd;
    // Mild perspective — volume without fisheye
    const fl = Math.max(t.tw, t.th) * 3.1;
    const axis = t.axis || 'y';
    const s = Math.sin(ang);
    const c = Math.cos(ang);

    const P = (x, y, z) => projectCubePt(x, y, z, ang, axis, fl);

    const front = [P(-hw, -hh, hd), P(hw, -hh, hd), P(hw, hh, hd), P(-hw, hh, hd)];
    const back = [P(hw, -hh, -hd), P(-hw, -hh, -hd), P(-hw, hh, -hd), P(hw, hh, -hd)];
    const right = [P(hw, -hh, hd), P(hw, -hh, -hd), P(hw, hh, -hd), P(hw, hh, hd)];
    const left = [P(-hw, -hh, -hd), P(-hw, -hh, hd), P(-hw, hh, hd), P(-hw, hh, -hd)];
    const top = [P(-hw, -hh, -hd), P(hw, -hh, -hd), P(hw, -hh, hd), P(-hw, -hh, hd)];
    const bot = [P(-hw, hh, hd), P(hw, hh, hd), P(hw, hh, -hd), P(-hw, hh, -hd)];

    // Side that turns toward the key light (top-left) gets a touch brighter
    const litR = s > 0 ? t.colSideLit : t.colSide;
    const litL = s < 0 ? t.colSideLit : t.colSide;

    const faces = [
      { kind: 'tex', snap: snapOut, v: front },
      { kind: 'tex', snap: snapIn, v: back },
      { kind: 'solid', col: litR, v: right },
      { kind: 'solid', col: litL, v: left },
      { kind: 'solid', col: t.colTop, v: top },
      { kind: 'solid', col: t.colBot, v: bot },
    ];

    for (let i = 0; i < 6; i++) {
      const v = faces[i].v;
      faces[i].z = (v[0].z + v[1].z + v[2].z + v[3].z) * 0.25;
    }
    faces.sort((A, B) => B.z - A.z);

    ctx.save();
    ctx.translate(t.sx + hw, t.sy + hh);
    ctx.lineJoin = 'round';

    for (let i = 0; i < 6; i++) {
      const f = faces[i];
      const v = f.v;
      const area = (v[1].x - v[0].x) * (v[2].y - v[0].y) - (v[2].x - v[0].x) * (v[1].y - v[0].y);
      if (area <= 0.6) continue;

      ctx.beginPath();
      ctx.moveTo(v[0].x, v[0].y);
      ctx.lineTo(v[1].x, v[1].y);
      ctx.lineTo(v[2].x, v[2].y);
      ctx.lineTo(v[3].x, v[3].y);
      ctx.closePath();

      if (f.kind === 'solid') {
        ctx.fillStyle = f.col;
        ctx.fill();
      } else {
        drawTexFace(f.snap, t.sx, t.sy, t.tw, t.th, v[0], v[1], v[3]);
        // Hairline only — keeps faces from bleeding, not a thick frame. It is a
        // second rasterisation of every textured face, so the bottom tier drops
        // it; big tiles bleed far less anyway.
        if (EDGE) {
          ctx.strokeStyle = 'rgba(0,0,0,0.22)';
          ctx.lineWidth = 0.75;
          ctx.stroke();
        }
      }
    }

    ctx.restore();
  }

  /**
   * CUBE — dual LIVE layers when source is an overlay (hub/menu/pause…):
   *   Unflipped tiles  → real source DOM (mask white)
   *   Flipping tiles   → 3D cubes (textures only for mid-flip)
   *   Finished tiles   → real destination DOM (mask holes)
   *
   * Combat / canvas-only sources have NO overlay to keep live — then we use
   * plate mode: snapOut is painted as a full-screen bitmap source, holes
   * punch through to the already-mounted destination. Without this, combat→map
   * flashed the map instantly and cubes only decorated empty air.
   */
  async function playCube(run) {
    ensureLayer();
    hideLayer();

    const host = frameEl();
    const { w, h, dpr } = sizeCanvas();
    ctx.imageSmoothingEnabled = true;
    layer.style.background = 'transparent';

    // ── 1) Remember LIVE source overlays (menu/hub/…) before run() hides them ──
    //    Exclude #hud — it's chrome over the game canvas, not a screen.
    const sources = visibleOverlays().filter(el => el.id !== 'hud');
    // Plate mode when leaving combat (or any state with no overlay screen).
    //
    // Below the top tier we choose it deliberately: keeping the outgoing screen
    // LIVE means its voxel ships keep rendering for the whole second the flip
    // runs, on top of the flip's own cost, and it needs a fresh clip path every
    // frame. The plate is a still frame of the same pixels — the only thing
    // lost is that idle spins hold still while the screen breaks apart.
    const plateMode = sources.length === 0 || !Quality.on('transLiveSrc');
    await nextPaint();

    // Textures for mid-flip (and full source plate when plateMode)
    let unfreeze = null;
    if (typeof VoxUI !== 'undefined' && VoxUI.freezeForCapture) {
      try { unfreeze = VoxUI.freezeForCapture(); } catch (e) {}
    }
    let snapOut;
    try { snapOut = captureFrame(w, h); }
    finally { if (typeof unfreeze === 'function') unfreeze(); }

    // Snapshot style bags BEFORE run (run will hide sources)
    const srcRestore = sources.map(el => ({
      el,
      z: el.style.zIndex,
      pe: el.style.pointerEvents,
      mask: el.style.maskImage,
      wmask: el.style.webkitMaskImage,
      msize: el.style.maskSize,
      wmsize: el.style.webkitMaskSize,
      mpos: el.style.maskPosition,
      wmpos: el.style.webkitMaskPosition,
      mrep: el.style.maskRepeat,
      wmrep: el.style.webkitMaskRepeat,
    }));

    // ── 2) Mount destination, then IMMEDIATELY put sources back on top ──
    //    Same synchronous turn → user never sees a naked destination flash.
    //    Plate mode: raise opaque curtain from snapOut first so dest mounts hidden.
    if (plateMode) {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.globalAlpha = 1;
      ctx.fillStyle = '#02030a';
      ctx.fillRect(0, 0, w, h);
      if (snapOut) ctx.drawImage(snapOut, 0, 0, w, h);
      layer.classList.add('on');
    }

    try { run(); } catch (e) { console.error(e); }

    if (!plateMode) {
      sources.forEach(el => {
        el.classList.remove('hidden');
        el.style.setProperty('z-index', '9985', 'important');
        el.style.pointerEvents = 'none';
      });
      if (typeof VoxUI !== 'undefined' && VoxUI.scan) {
        sources.forEach(el => { try { VoxUI.scan(el); } catch (e) {} });
      }
    }

    // Let destination paint under the live source / plate
    await nextPaint();
    await wait(36);
    await nextPaint();

    // ── 3) Snap destination for cube BACK faces ──
    if (!plateMode) {
      sources.forEach(el => { el.classList.add('hidden'); });
    }
    let unfreezeIn = null;
    if (typeof VoxUI !== 'undefined' && VoxUI.freezeForCapture) {
      try { unfreezeIn = VoxUI.freezeForCapture(); } catch (e) {}
    }
    let snapIn;
    try { snapIn = captureFrame(w, h); }
    finally { if (typeof unfreezeIn === 'function') unfreezeIn(); }
    if (!plateMode) {
      sources.forEach(el => {
        el.classList.remove('hidden');
        el.style.setProperty('z-index', '9985', 'important');
        el.style.pointerEvents = 'none';
      });
    }
    await nextPaint();

    // ── Holes in the live source ──────────────────────────────────────────
    // The source overlay must show through only where no cube has started yet.
    //
    // This used to be a full-screen canvas re-encoded with toDataURL() and
    // handed to mask-image — a PNG encode plus a decode, EVERY frame the tile
    // set changed, which is every frame of the cascade. Measured at ~2.7ms a
    // call on a desktop; on a phone it is the single most expensive thing in
    // the transition.
    //
    // clip-path draws the same binary shape from a path string: no image
    // codec, no decode, and the holes are integer-aligned rectangles so the
    // result is the same hard edge. Rows are merged into runs first — a row of
    // eight adjacent holes is one rectangle, not eight — which typically
    // halves the path. The old mask stays as a fallback for engines without
    // path() support.
    const CLIP_OK = (() => {
      try { return CSS.supports('clip-path', 'path(evenodd, "M0 0 H1 V1 H0 Z")'); } catch (e) { return false; }
    })();
    let maskC = null, mctx = null;
    if (!CLIP_OK) {
      maskC = document.createElement('canvas');
      maskC.width = w;
      maskC.height = h;
      mctx = maskC.getContext('2d');
    }
    let lastMaskKey = '';

    /** Rectangles of the source that are gone, merged along each row. */
    function holeRuns(elapsed, tiles) {
      const runs = [];
      let run = null;
      for (let i = 0; i < tiles.length; i++) {
        const t = tiles[i];
        const open = (elapsed - t.delay) / t.dur > 0;
        // tiles are built row-major, so a run breaks at a row boundary too
        const joins = run && open && run.sy === t.sy && Math.abs(run.x2 - t.sx) < 0.5 && run.th === t.th;
        if (joins) { run.x2 = t.sx + t.tw; continue; }
        if (run) { runs.push(run); run = null; }
        if (open) run = { sx: t.sx, sy: t.sy, x2: t.sx + t.tw, th: t.th };
      }
      if (run) runs.push(run);
      return runs;
    }

    function applySourceMask(elapsed, tiles) {
      if (plateMode) return; // plate painted on canvas, not CSS-masked DOM
      // Rebuild only when the tile phase set changes (cheap string key)
      let key = '';
      for (let i = 0; i < tiles.length; i++) {
        const t = tiles[i];
        const local = (elapsed - t.delay) / t.dur;
        key += local <= 0 ? '0' : (local >= 1 ? '2' : '1');
      }
      if (key === lastMaskKey) return;
      lastMaskKey = key;

      if (CLIP_OK) {
        // Outer rect + one rect per hole run, even-odd → the runs punch through.
        let d = 'M0 0H' + w + 'V' + h + 'H0Z';
        const runs = holeRuns(elapsed, tiles);
        for (let i = 0; i < runs.length; i++) {
          const r = runs[i];
          d += 'M' + r.sx + ' ' + r.sy + 'H' + r.x2 + 'V' + (r.sy + r.th) + 'H' + r.sx + 'Z';
        }
        const cp = 'path(evenodd, "' + d + '")';
        sources.forEach(el => { el.style.clipPath = cp; el.style.webkitClipPath = cp; });
        return;
      }

      mctx.clearRect(0, 0, w, h);
      // Full white = fully opaque mask → source fully visible
      mctx.fillStyle = '#ffffff';
      mctx.fillRect(0, 0, w, h);
      // Punch holes (alpha 0) where cubes flip or finished
      const runs = holeRuns(elapsed, tiles);
      for (let i = 0; i < runs.length; i++) {
        const r = runs[i];
        mctx.clearRect(r.sx, r.sy, r.x2 - r.sx, r.th);
      }
      const url = 'url(' + maskC.toDataURL('image/png') + ')';
      sources.forEach(el => {
        el.style.maskImage = url;
        el.style.webkitMaskImage = url;
        el.style.maskSize = w + 'px ' + h + 'px';
        el.style.webkitMaskSize = w + 'px ' + h + 'px';
        el.style.maskPosition = '0 0';
        el.style.webkitMaskPosition = '0 0';
        el.style.maskRepeat = 'no-repeat';
        el.style.webkitMaskRepeat = 'no-repeat';
      });
    }

    // Narrow phones always used a slightly finer grid; the quality tier scales
    // that base rather than replacing it, so `ultra` keeps the exact grid the
    // game shipped with on every screen width.
    EDGE = Quality.on('transEdge');
    const tile = Math.round((w < 380 ? 22 : 24) * (Quality.v('transTileScale') || 1));
    const tiles = buildFlipTiles(w, h, tile);
    sampleCubePalette(snapOut, snapIn, tiles);

    // Below the top tier the flip runs over a still plate, so every live voxel
    // ship on the screen underneath is rendering into pixels nobody can see.
    // Measured at ~30k face fills a second, concurrent with the flip itself —
    // the flip was never competing with itself, it was competing with the hub.
    let unfreezeAnim = null;
    if (!Quality.on('transLiveSrc') && typeof VoxUI !== 'undefined' && VoxUI.freezeForCapture) {
      try { unfreezeAnim = VoxUI.freezeForCapture(); } catch (e) {}
    }

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (plateMode) {
      // Full combat (or canvas) frame stays until tiles flip away
      ctx.fillStyle = '#02030a';
      ctx.fillRect(0, 0, w, h);
      if (snapOut) ctx.drawImage(snapOut, 0, 0, w, h);
    } else {
      ctx.clearRect(0, 0, w, h);
    }
    layer.classList.add('on');
    applySourceMask(0, tiles);

    if (typeof Engine !== 'undefined' && Engine.audio) {
      try { Engine.audio.blip(260, 0.08, 'square', 0.05); } catch (e) {}
    }

    // Cascade ~0.82s + flip ~0.4s → ~1.25s
    const TOTAL = Quality.v('transTime') || 1.25;
    try {
      await animate(TOTAL * 1000, u => {
        const elapsed = u * TOTAL;
        applySourceMask(elapsed, tiles);

        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.clearRect(0, 0, w, h);

        if (plateMode) {
          // Base = source bitmap; punch finished tiles; mid-flip draws cubes
          if (snapOut) ctx.drawImage(snapOut, 0, 0, w, h);
          for (let i = 0; i < tiles.length; i++) {
            const t = tiles[i];
            const local = (elapsed - t.delay) / t.dur;
            if (local <= 0) continue;
            if (local >= 1) {
              ctx.clearRect(t.sx, t.sy, t.tw, t.th);
              continue;
            }
            // Clear tile then draw rotating cube (front=out, back=in)
            ctx.clearRect(t.sx, t.sy, t.tw, t.th);
            const e = easeInOutCubic(clamp01(local));
            drawCube3D(snapOut, snapIn, t, e * Math.PI * t.dir);
          }
        } else {
          for (let i = 0; i < tiles.length; i++) {
            const t = tiles[i];
            const local = (elapsed - t.delay) / t.dur;
            // Not started: leave clear → LIVE source shows (mask white)
            if (local <= 0) continue;
            // Done: leave clear → LIVE dest through mask hole
            if (local >= 1) continue;
            const e = easeInOutCubic(clamp01(local));
            drawCube3D(snapOut, snapIn, t, e * Math.PI * t.dir);
          }
        }
      });
    } finally {
      if (typeof unfreezeAnim === 'function') { try { unfreezeAnim(); } catch (e) {} }
      // Sources leave; destination already live underneath
      sources.forEach(el => {
        el.classList.add('hidden');
        el.style.removeProperty('z-index');
        el.style.pointerEvents = '';
        el.style.clipPath = '';
        el.style.webkitClipPath = '';
        el.style.maskImage = '';
        el.style.webkitMaskImage = '';
        el.style.maskSize = '';
        el.style.webkitMaskSize = '';
        el.style.maskPosition = '';
        el.style.webkitMaskPosition = '';
        el.style.maskRepeat = '';
        el.style.webkitMaskRepeat = '';
      });
      srcRestore.forEach(s => {
        if (s.z) s.el.style.zIndex = s.z;
        if (s.pe) s.el.style.pointerEvents = s.pe;
      });
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      hideLayer();
    }
  }

  /* ============================================================
   * WARP — hyperjump (readable, cinematic space, moderate pace)
   * ========================================================== */
  function resolveShip() {
    let key = 'vanguard';
    let accent = '#4ad6ff';
    let hull = '#cfeaff';
    try {
      if (typeof Profile !== 'undefined' && Profile.get) {
        const p = Profile.get();
        if (p && p.ship) key = p.ship;
        if (p && p.shipColors) {
          if (p.shipColors.accent) accent = p.shipColors.accent;
          if (p.shipColors.hull) hull = p.shipColors.hull;
        }
      }
      if (typeof Meta !== 'undefined' && Meta.shipByKey) {
        const s = Meta.shipByKey[key];
        if (s) {
          if (s.accent) accent = s.accent;
          if (s.hull) hull = s.hull;
        }
      }
    } catch (e) {}
    const model = (typeof Vox !== 'undefined' && Vox.MODELS && (Vox.MODELS[key] || Vox.MODELS.vanguard)) || null;
    return { key, accent, hull, model };
  }

  function drawShipFallback(x, y, s, accent, hull, stretchY) {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(1, stretchY || 1);
    ctx.fillStyle = hull;
    ctx.beginPath();
    ctx.moveTo(0, -14 * s);
    ctx.lineTo(10 * s, 10 * s);
    ctx.lineTo(0, 5 * s);
    ctx.lineTo(-10 * s, 10 * s);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = accent;
    ctx.beginPath();
    ctx.moveTo(0, -6 * s);
    ctx.lineTo(4 * s, 4 * s);
    ctx.lineTo(-4 * s, 4 * s);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  function drawPlayerShip(ship, x, y, opts) {
    const s = opts.s != null ? opts.s : 3.2;
    const stretchY = opts.stretchY || 1;
    const thrust = opts.thrust != null ? opts.thrust : 1;
    const t = opts.t || 0;
    const alpha = opts.a != null ? opts.a : 1;
    const roll = opts.roll || 0;
    ctx.save();
    ctx.globalAlpha = alpha;
    if (thrust > 0.05) {
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      const fl = 0.55 + 0.45 * Math.sin(t * 28);
      const ex = y + 16 * stretchY;
      for (const gx of [x - 5, x + 5, x]) {
        const r = (gx === x ? 14 : 9) * (0.7 + thrust) * (0.8 + fl * 0.3);
        const g = ctx.createRadialGradient(gx, ex, 0, gx, ex + 10 * thrust * stretchY, r);
        g.addColorStop(0, 'rgba(255,255,255,0.85)');
        g.addColorStop(0.35, ship.accent);
        g.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(gx, ex + 8 * thrust * stretchY, r, 0, Math.PI * 2);
        ctx.fill();
      }
      if (stretchY > 1.2) {
        const trail = ctx.createLinearGradient(x, y, x, y + 100 * stretchY);
        trail.addColorStop(0, `rgba(200,240,255,${0.55 * thrust})`);
        trail.addColorStop(0.25, ship.accent);
        trail.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = trail;
        ctx.fillRect(x - 3, y + 6, 6, 90 * stretchY);
      }
      ctx.restore();
    }
    if (ship.model && typeof Vox !== 'undefined' && Vox.draw) {
      ctx.save();
      if (stretchY !== 1) {
        ctx.translate(x, y);
        ctx.scale(1, stretchY);
        ctx.translate(-x, -y);
      }
      try {
        Vox.draw(ctx, ship.model, x, y, {
          s, roll, pitch: 1.05, t,
          thrust: 0.9 + thrust * 0.6,
          flameColor: ship.accent,
          ignoreCam: true,
        });
      } catch (e) {
        drawShipFallback(x, y, s * 0.55, ship.accent, ship.hull, 1);
      }
      ctx.restore();
    } else {
      drawShipFallback(x, y, s * 0.55, ship.accent, ship.hull, stretchY);
    }
    ctx.restore();
  }

  function hash01(i, salt) {
    const x = Math.sin(i * 12.9898 + (salt || 0) * 78.233) * 43758.5453;
    return x - Math.floor(x);
  }

  /** Build a reusable star field for warp (once per transition). */
  function makeWarpField(w, h, count) {
    const stars = [];
    for (let i = 0; i < count; i++) {
      const a = hash01(i, 1) * Math.PI * 2;
      const r = hash01(i, 2); // 0..1 depth seed
      stars.push({
        a,
        // depth 0 = near, 1 = far
        z: 0.05 + r * 0.95,
        // angular jitter for non-perfect radial
        wob: (hash01(i, 3) - 0.5) * 0.15,
        bright: 0.35 + hash01(i, 4) * 0.65,
        hue: hash01(i, 5), // 0 cool white … 1 cyan/blue
      });
    }
    return stars;
  }

  /**
   * Cinematic hyperspace: perspective star streaks + soft nebula + core glow.
   * speed 0..2, intensity 0..1
   */
  function drawHyperspace(w, h, cx, cy, stars, speed, intensity, time) {
    // Deep space base with subtle nebula
    const bg = ctx.createRadialGradient(cx, cy, 10, cx, cy, Math.max(w, h) * 0.75);
    bg.addColorStop(0, `rgb(${8 + intensity * 18 | 0},${14 + intensity * 28 | 0},${32 + intensity * 40 | 0})`);
    bg.addColorStop(0.45, '#050814');
    bg.addColorStop(1, '#010208');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, w, h);

    // Soft nebula lobes (few, large — cinematic, not noisy)
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    const nebA = 0.04 + intensity * 0.08;
    for (let i = 0; i < 3; i++) {
      const ang = time * 0.08 + i * 2.1;
      const nx = cx + Math.cos(ang) * w * 0.18;
      const ny = cy + Math.sin(ang * 0.7) * h * 0.12;
      const nr = (0.35 + i * 0.12) * Math.max(w, h);
      const ng = ctx.createRadialGradient(nx, ny, 0, nx, ny, nr);
      if (i === 0) {
        ng.addColorStop(0, `rgba(40,100,200,${nebA})`);
        ng.addColorStop(1, 'rgba(0,0,0,0)');
      } else if (i === 1) {
        ng.addColorStop(0, `rgba(80,40,160,${nebA * 0.7})`);
        ng.addColorStop(1, 'rgba(0,0,0,0)');
      } else {
        ng.addColorStop(0, `rgba(20,160,200,${nebA * 0.5})`);
        ng.addColorStop(1, 'rgba(0,0,0,0)');
      }
      ctx.fillStyle = ng;
      ctx.beginPath();
      ctx.arc(nx, ny, nr, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();

    // Perspective streaks: each star has depth z, rushes toward camera
    const maxR = Math.hypot(w, h) * 0.55;
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    ctx.lineCap = 'round';

    for (let i = 0; i < stars.length; i++) {
      const s = stars[i];
      // Advance depth with speed
      let z = s.z - speed * 0.015;
      // wrap through tunnel
      const wraps = time * (0.35 + speed * 0.9) * (0.4 + s.bright * 0.6) + s.z * 10;
      z = 1 - ((wraps % 1 + 1) % 1) * 0.98;
      z = clamp(z, 0.02, 1);

      const ang = s.a + s.wob * Math.sin(time + i);
      // depth 0 = near camera (edge), 1 = far (center)
      const depth = z;
      const r = 6 + (1 - depth) * maxR;
      const rTail = 6 + (1 - clamp(depth + 0.05 + speed * 0.07, 0.02, 1)) * maxR;

      const near = 1 - depth;
      const a = (0.07 + near * 0.8) * intensity * s.bright;
      if (a < 0.02) continue;

      const lenBoost = 1 + speed * 2.0 * near;
      const r0 = Math.max(3, rTail - (r - rTail) * (lenBoost - 1));
      const x0 = cx + Math.cos(ang) * r0;
      const y0 = cy + Math.sin(ang) * r0 * 0.9;
      const x2 = cx + Math.cos(ang) * r;
      const y2 = cy + Math.sin(ang) * r * 0.9;

      let col;
      if (s.hue < 0.55) col = `rgba(210,235,255,${a})`;
      else if (s.hue < 0.85) col = `rgba(120,200,255,${a})`;
      else col = `rgba(160,140,255,${a * 0.85})`;

      ctx.strokeStyle = col;
      ctx.lineWidth = (0.6 + near * 2.2) * (0.7 + speed * 0.35);
      ctx.beginPath();
      ctx.moveTo(x0, y0);
      ctx.lineTo(x2, y2);
      ctx.stroke();

      // Hot tip near camera
      if (near > 0.55 && speed > 0.3) {
        ctx.fillStyle = `rgba(255,255,255,${a * 0.5})`;
        ctx.fillRect(x2 - 0.5, y2 - 0.5, 1.2, 1.2);
      }
    }
    ctx.restore();

    // Core vanishing glow
    const core = ctx.createRadialGradient(cx, cy, 2, cx, cy, 50 + speed * 90 + intensity * 40);
    core.addColorStop(0, `rgba(230,250,255,${0.1 + intensity * 0.35 + speed * 0.15})`);
    core.addColorStop(0.25, `rgba(100,190,255,${0.08 + intensity * 0.15})`);
    core.addColorStop(0.6, `rgba(40,80,160,${0.04 * intensity})`);
    core.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = core;
    ctx.beginPath();
    ctx.arc(cx, cy, 120 + speed * 100, 0, Math.PI * 2);
    ctx.fill();

    // Subtle vignette
    const vig = ctx.createRadialGradient(cx, cy, Math.min(w, h) * 0.2, cx, cy, Math.max(w, h) * 0.7);
    vig.addColorStop(0, 'rgba(0,0,0,0)');
    vig.addColorStop(1, `rgba(0,0,0,${0.35 + intensity * 0.25})`);
    ctx.fillStyle = vig;
    ctx.fillRect(0, 0, w, h);
  }

  async function playWarp(run) {
    ensureLayer();
    hideLayer();
    const { w, h, dpr } = sizeCanvas();
    ctx.imageSmoothingEnabled = true;
    layer.style.background = '#02030a';

    // Capture source WHILE still fully live (curtain display:none)
    await nextPaint();
    const snap = await captureFrameAsync();

    // Raise curtain with a solid plate FIRST so no live UI can peek through
    // (map popovers, dock, bars) — then draw the capture on top.
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.globalAlpha = 1;
    ctx.fillStyle = '#02030a';
    ctx.fillRect(0, 0, w, h);
    ctx.drawImage(snap, 0, 0, w, h);
    layer.classList.add('on');

    // Hide every live overlay under the curtain so nothing "ghosts" during warp
    const covered = visibleOverlays();
    covered.forEach(el => {
      el.dataset.fxWarpHid = '1';
      el.classList.add('hidden');
    });

    const ship = resolveShip();
    const cx = w * 0.5;
    const startY = h * 0.7;
    const holdY = h * 0.58;
    const vanishY = h * 0.4;
    const stars = makeWarpField(w, h, 90);

    const st = {
      shipY: startY,
      shipS: 3.6,
      stretch: 1,
      thrust: 0.35,
      shipA: 1,
      roll: 0,
      speed: 0,
      intensity: 0.3,
      bgA: 1,
      bgScale: 1,
      flash: 0,
      shake: 0,
    };

    const t0 = performance.now();
    const nowSec = () => (performance.now() - t0) / 1000;

    function paint(bgSnap) {
      // Opaque plate every frame — no live DOM can peek through alpha gaps
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = '#02030a';
      ctx.fillRect(0, 0, w, h);

      drawHyperspace(w, h, cx, vanishY, stars, st.speed, st.intensity, nowSec());

      // Previous scene sucked into the vanishing point
      if (bgSnap && st.bgA > 0.02) {
        ctx.save();
        ctx.translate(cx, vanishY);
        ctx.scale(st.bgScale, st.bgScale * (1 + (st.bgScale - 1) * 0.35));
        ctx.globalAlpha = st.bgA * 0.9;
        ctx.drawImage(bgSnap, -w * 0.5, -vanishY, w, h);
        ctx.globalAlpha = st.bgA * 0.35;
        ctx.fillStyle = '#02030a';
        ctx.fillRect(-w * 0.5, -vanishY, w, h);
        ctx.restore();
      }

      const ox = (Math.random() - 0.5) * st.shake;
      const oy = (Math.random() - 0.5) * st.shake * 0.4;
      if (st.shipA > 0.02) {
        drawPlayerShip(ship, cx + ox, st.shipY + oy, {
          s: st.shipS,
          stretchY: st.stretch,
          thrust: st.thrust,
          t: nowSec(),
          a: st.shipA,
          roll: st.roll,
        });
      }

      if (st.flash > 0.01) {
        ctx.save();
        ctx.globalCompositeOperation = 'lighter';
        const blast = ctx.createRadialGradient(cx, vanishY, 2, cx, vanishY, 30 + st.flash * Math.max(w, h));
        blast.addColorStop(0, `rgba(255,255,255,${st.flash * 0.9})`);
        blast.addColorStop(0.2, `rgba(180,230,255,${st.flash * 0.55})`);
        blast.addColorStop(0.55, `rgba(80,160,255,${st.flash * 0.2})`);
        blast.addColorStop(1, 'rgba(0,20,40,0)');
        ctx.fillStyle = blast;
        ctx.fillRect(0, 0, w, h);
        ctx.globalCompositeOperation = 'source-over';
        ctx.fillStyle = `rgba(200,235,255,${st.flash * 0.35})`;
        ctx.fillRect(0, 0, w, h);
        ctx.restore();
      }
    }

    if (typeof Engine !== 'undefined' && Engine.audio) {
      try { Engine.audio.blip(150, 0.14, 'sawtooth', 0.08); } catch (e) {}
    }

    // PHASE 1 — reveal ship (~320ms)
    await animate(320, t => {
      const e = easeOutCubic(t);
      st.shipY = lerp(startY + 30, holdY, e);
      st.shipS = lerp(2.6, 3.7, e);
      st.shipA = clamp01(e * 1.35);
      st.thrust = 0.35 + e * 0.25;
      st.speed = 0.15 + e * 0.2;
      st.intensity = 0.35 + e * 0.2;
      st.bgA = 1 - e * 0.3;
      st.bgScale = 1 + e * 0.08;
      st.shake = 0;
      st.flash = 0;
      st.stretch = 1;
      st.roll = Math.sin(t * 5) * 0.04;
      paint(snap);
    });

    // PHASE 2 — charge (~500ms)
    if (typeof Engine !== 'undefined' && Engine.audio) {
      try { Engine.audio.blip(240, 0.16, 'sawtooth', 0.07); } catch (e) {}
    }
    await animate(500, t => {
      const e = easeInOutCubic(t);
      st.shipY = holdY + Math.sin(t * Math.PI * 2.5) * 2.5;
      st.shipS = 3.7;
      st.shipA = 1;
      st.thrust = 0.6 + e * 1.0;
      st.speed = 0.35 + e * 0.55;
      st.intensity = 0.55 + e * 0.3;
      st.bgA = 0.7 - e * 0.4;
      st.bgScale = 1.08 + e * 0.25;
      st.shake = e * 3.5;
      st.stretch = 1 + e * 0.2;
      st.roll = Math.sin(t * 16) * 0.1 * (1 - e * 0.25);
      st.flash = e > 0.88 ? (e - 0.88) / 0.12 * 0.18 : 0;
      paint(snap);
    });

    // PHASE 3 — launch (~650ms)
    if (typeof Engine !== 'undefined' && Engine.audio) {
      try { Engine.audio.blip(100, 0.16, 'sawtooth', 0.11); } catch (e) {}
    }
    await animate(650, t => {
      const e = easeInCubic(t);
      st.shipY = lerp(holdY, vanishY - 24, e);
      st.shipS = lerp(3.7, 1.15, e);
      st.stretch = 1 + e * 3.0;
      st.thrust = 1.5 + e * 1.4;
      st.speed = 0.9 + e * 1.3;
      st.intensity = 0.85 + e * 0.15;
      st.bgA = Math.max(0, 0.3 - e * 0.35);
      st.bgScale = 1.3 + e * 2.0;
      st.shake = (1 - e) * 1.5;
      st.roll = Math.sin(t * 9) * 0.05 * (1 - e);
      st.shipA = t < 0.9 ? 1 : 1 - (t - 0.9) / 0.1;
      st.flash = t > 0.5 ? easeOutCubic((t - 0.5) / 0.5) * 0.9 : 0;
      paint(snap);
    });

    // Brief flash hold (~120ms)
    await animate(120, t => {
      st.flash = 0.95 - t * 0.25;
      st.shipA = 0;
      st.speed = 2.0;
      st.intensity = 1;
      st.bgA = 0;
      paint(null);
    });

    try { run(); } catch (e) { console.error(e); }
    // run() mounts the destination; never re-show warp-hidden sources (map etc.)
    await frame();
    await frame();
    const snapIn = await captureFrameAsync();

    if (typeof Engine !== 'undefined' && Engine.audio) {
      try { Engine.audio.blip(560, 0.07, 'sine', 0.06); } catch (e) {}
    }

    // PHASE 4 — exit (~520ms)
    await animate(520, t => {
      const e = easeOutCubic(t);
      st.speed = 1.8 * (1 - e);
      st.intensity = 1 - e * 0.55;
      st.flash = (1 - e) * 0.2;
      st.shipA = 0;
      st.bgA = 0;
      paint(null);

      // Destination rushes in
      const s = lerp(2.3, 1, e);
      ctx.save();
      ctx.translate(cx, h * 0.5);
      ctx.scale(s, s * lerp(1.4, 1, e));
      ctx.globalAlpha = clamp01(e * 1.25);
      ctx.drawImage(snapIn, -w * 0.5, -h * 0.5, w, h);
      ctx.restore();

      if (t < 0.78) {
        const arrive = easeOutCubic(t / 0.78);
        drawPlayerShip(ship, cx, lerp(h * 0.3, h * 0.74, arrive), {
          s: lerp(1.5, 3.3, arrive),
          stretchY: lerp(2.2, 1, arrive),
          thrust: 1.3 * (1 - arrive * 0.5),
          t: nowSec(),
          a: (1 - arrive) * 0.85 + 0.1 * (1 - t),
          roll: Math.sin(t * 7) * 0.07 * (1 - arrive),
        });
      }
    });

    // Clear warp-hide markers; leave sources that run() hid still hidden
    covered.forEach(el => {
      delete el.dataset.fxWarpHid;
    });
    hideLayer();
    ctx.imageSmoothingEnabled = false;
  }

  async function playFade(run) {
    ensureLayer();
    hideLayer();
    const { w, h } = sizeCanvas();
    layer.style.background = '#02030a';

    // Capture live source BEFORE covering
    await nextPaint();
    const snap = await captureFrameAsync();
    ctx.drawImage(snap, 0, 0, w, h);
    layer.classList.add('on');
    await nextPaint();

    await animate(200, t => {
      ctx.clearRect(0, 0, w, h);
      ctx.globalAlpha = 1 - t;
      ctx.drawImage(snap, 0, 0, w, h);
      ctx.globalAlpha = 1;
      ctx.fillStyle = `rgba(2,4,12,${t * 0.85})`;
      ctx.fillRect(0, 0, w, h);
    });
    try { run(); } catch (e) { console.error(e); }
    await settlePaint(32);
    const snapIn = await captureFrameAsync();
    await animate(240, t => {
      ctx.clearRect(0, 0, w, h);
      ctx.globalAlpha = t;
      ctx.drawImage(snapIn, 0, 0, w, h);
      ctx.globalAlpha = 1;
    });
    hideLayer();
  }

  async function go(opts) {
    const run = opts && opts.run;
    if (typeof run !== 'function') return;
    if (busy) { try { run(); } catch (e) {} return; }
    busy = true;
    ensureLayer();
    hideLayer(); // idle display:none — never leave a ghost overlay killing glass styles
    const style = (opts && opts.style) || 'cube';
    try {
      if (style === 'warp') await playWarp(run);
      else if (style === 'fade' || !Quality.on('transCube')) await playFade(run);
      else await playCube(run);
    } catch (e) {
      console.error('FXTrans', e);
      try { run(); } catch (e2) {}
      hideLayer();
    }
    // Every screen change funnels through here, which makes it the one place
    // worth re-measuring the viewport from. On a phone the address bar may have
    // slid in or out during the transition, and a stale frame size shows up as
    // the whole UI riding up with a black band at the bottom.
    try { if (typeof Engine !== 'undefined' && Engine.refit) Engine.refit(); } catch (e) {}
    busy = false;
  }

  return {
    go,
    get busy() { return busy; },
  };
})();
