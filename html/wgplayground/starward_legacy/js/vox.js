/* ============================================================
 * vox.js — software 3D VOXEL renderer + model library (prototype B).
 *
 * True 3D: models are voxel grids, rotated (yaw/roll + camera pitch),
 * orthographically projected, depth-sorted and drawn as shaded cube
 * faces (top/side lighting, per-voxel tone noise, emissive voxels with
 * glow). No WebGL, no libs — plain Canvas 2D, CSP-safe everywhere.
 *
 * Models are authored as TOP-DOWN ASCII maps; each char is a column
 * spec {z0,h,top,side,emisTop} → chunky-but-detailed silhouettes.
 * ========================================================== */
const Vox = (() => {
  const TAU = Math.PI * 2;

  /* ---------- colors ---------- */
  const hex2rgb = h => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
  // Tiny per-voxel variation (too much = muddy plastic noise).
  const NOISE = [0.94, 1.0, 1.06];
  const openFaces = m => (m & 1) + ((m >> 1) & 1) + ((m >> 2) & 1) + ((m >> 3) & 1) + ((m >> 4) & 1) + ((m >> 5) & 1);
  // Darken a hex for automatic side plates when only top is authored.
  function darkenHex(h, k = 0.55) {
    const [r, g, b] = hex2rgb(h);
    return [Math.max(0, r * k) | 0, Math.max(0, g * k) | 0, Math.max(0, b * k) | 0];
  }

  /* ---------- model builder (top-down extrusion) ---------- */
  // rows: array of strings; spec: char → {z0,h,top,side,emisTop,engine}
  // Same (ix,iy) may get multiple overlapping columns if built via fromLayers —
  // later cells on the same voxel overwrite color (topmost author wins).
  /** Center-pad ASCII row so models stay bilaterally centered (padEnd alone shifts left). */
  function padRow(s, w) {
    const t = String(s || '');
    if (t.length >= w) return t.slice(0, w);
    const pad = w - t.length;
    const L = (pad / 2) | 0;
    return '.'.repeat(L) + t + '.'.repeat(pad - L);
  }

  function stampLayer(grid, cells, engines, rows, spec, ox = 0, oy = 0) {
    rows.forEach((row, iy) => {
      for (let ix = 0; ix < row.length; ix++) {
        const ch = row[ix]; if (ch === '.' || ch === ' ') continue;
        const sp = spec[ch]; if (!sp) continue;
        const z0 = sp.z0 || 0, h = sp.h || 1;
        const X = ix + ox, Y = iy + oy;
        for (let iz = z0; iz < z0 + h; iz++) {
          const key = X + ',' + Y + ',' + iz;
          grid.add(key);
          cells.push({ ix: X, iy: Y, iz, sp, top: iz === z0 + h - 1, key });
        }
        if (sp.engine) engines.push({ ix: X, iy: Y, iz: z0 + Math.floor(h / 2) });
      }
    });
  }
  function finalizeModel(grid, cells, engines) {
    // Keep the topmost authoring stamp per voxel key (later layers win color).
    const best = new Map();
    for (const c of cells) {
      const prev = best.get(c.key);
      if (!prev || c.iz > prev.iz || (c.iz === prev.iz && c.top)) best.set(c.key, c);
    }
    let maxZ = 0, minX = 1e9, maxX = -1e9, minY = 1e9, maxY = -1e9;
    for (const c of best.values()) {
      maxZ = Math.max(maxZ, c.iz + 1);
      minX = Math.min(minX, c.ix); maxX = Math.max(maxX, c.ix);
      minY = Math.min(minY, c.iy); maxY = Math.max(maxY, c.iy);
    }
    const Wd = maxX - minX + 1, L = maxY - minY + 1, cz = maxZ / 2;
    const cx0 = minX + Wd / 2, cy0 = minY + L / 2;
    const vox = [];
    for (const c of best.values()) {
      // ALWAYS store both top + side colors. Sides used to inherit the bright top
      // hex → every face same tone → zero volume. Side faces now stay darker.
      const topC = c.sp.top;
      const sideC = c.sp.side || null;
      const [r, g, b] = hex2rgb(topC);
      const [rs, gs, bs] = sideC ? hex2rgb(sideC) : darkenHex(topC, 0.52);
      let mask = 0;
      if (!grid.has((c.ix + 1) + ',' + c.iy + ',' + c.iz)) mask |= 1;
      if (!grid.has((c.ix - 1) + ',' + c.iy + ',' + c.iz)) mask |= 2;
      if (!grid.has(c.ix + ',' + (c.iy + 1) + ',' + c.iz)) mask |= 4;
      if (!grid.has(c.ix + ',' + (c.iy - 1) + ',' + c.iz)) mask |= 8;
      if (!grid.has(c.ix + ',' + c.iy + ',' + (c.iz + 1))) mask |= 16;
      if (!grid.has(c.ix + ',' + c.iy + ',' + (c.iz - 1))) mask |= 32;
      if (mask === 0) continue;
      // Cavity AO: fewer open faces + buried under a neighbor above → darker.
      const open = openFaces(mask);
      const buried = grid.has(c.ix + ',' + c.iy + ',' + (c.iz + 1)) ? 0.12 : 0;
      const ao = Math.max(0.55, Math.min(1, 0.62 + 0.38 * (open / 6) - buried));
      vox.push({
        x: c.ix - cx0 + 0.5, y: c.iy - cy0 + 0.5, z: c.iz - cz + 0.5,
        r, g, b, rs, gs, bs,
        nl: ((c.ix * 7 + c.iy * 13 + c.iz * 5) % 3 + 3) % 3,
        emis: c.top ? !!c.sp.emisTop : !!c.sp.emisSide, mask, ao,
      });
    }
    return {
      vox, w: Wd, l: L, h: maxZ,
      engines: engines.map(e => ({ x: e.ix - cx0 + 0.5, y: e.iy - cy0 + 0.5, z: e.iz - cz + 0.5 })),
    };
  }
  function fromTopDown(rows, spec) {
    const grid = new Set(), cells = [], engines = [];
    stampLayer(grid, cells, engines, rows, spec);
    return finalizeModel(grid, cells, engines);
  }
  // Multi-layer authoring: each layer is {rows, spec}. Higher layers stamp later
  // so armor plates / glass / towers sit on the hull and create real relief for lighting.
  function fromLayers(layers) {
    const grid = new Set(), cells = [], engines = [];
    for (const layer of layers) stampLayer(grid, cells, engines, layer.rows, layer.spec, layer.ox || 0, layer.oy || 0);
    return finalizeModel(grid, cells, engines);
  }

  /* ---------- procedural asteroid (blob union + craters, clear rock palette) ---------- */
  function genAsteroid(rad = 5, seed = 1) {
    let s = seed * 16807 % 2147483647; const R = () => ((s = s * 16807 % 2147483647) / 2147483647);
    const blobs = Array.from({ length: 5 }, () => ({
      x: (R() - 0.5) * rad * 0.95, y: (R() - 0.5) * rad * 0.95, z: (R() - 0.5) * rad * 0.7,
      r: rad * (0.48 + R() * 0.48) }));
    const craters = Array.from({ length: 3 }, () => ({
      x: (R() - 0.5) * rad * 0.8, y: (R() - 0.5) * rad * 0.8, z: (R() - 0.5) * rad * 0.5,
      r: rad * (0.2 + R() * 0.22) }));
    const grid = new Set(); const list = [];
    const N = Math.ceil(rad * 1.85);
    for (let x = -N; x <= N; x++) for (let y = -N; y <= N; y++) for (let z = -N; z <= N; z++) {
      let dMin = 1e9;
      for (const b of blobs) {
        const dx = x - b.x, dy = y - b.y, dz = z - b.z;
        dMin = Math.min(dMin, Math.sqrt(dx * dx + dy * dy + dz * dz) - b.r);
      }
      const n = (Math.sin(x * 1.4 + y) + Math.cos(y * 1.1 + z * 0.9)) * 0.16;
      let inside = dMin + n < 0;
      if (inside) {
        for (const c of craters) {
          const dx = x - c.x, dy = y - c.y, dz = z - c.z;
          if (dx * dx + dy * dy + dz * dz < c.r * c.r && z > c.z) { inside = false; break; }
        }
      }
      if (inside) { grid.add(x + ',' + y + ',' + z); list.push({ x, y, z }); }
    }
    // Warm stone palette — top lighter, sides charcoal (volume reads on rock).
    const tops = ['#9a9088', '#8a8278', '#7a7268', '#6e665c', '#8a7a68'];
    const sides = ['#4a4540', '#3e3a36', '#35312e', '#2e2a28', '#42382e'];
    const vox = list.map(c => {
      let mask = 0;
      if (!grid.has((c.x + 1) + ',' + c.y + ',' + c.z)) mask |= 1;
      if (!grid.has((c.x - 1) + ',' + c.y + ',' + c.z)) mask |= 2;
      if (!grid.has(c.x + ',' + (c.y + 1) + ',' + c.z)) mask |= 4;
      if (!grid.has(c.x + ',' + (c.y - 1) + ',' + c.z)) mask |= 8;
      if (!grid.has(c.x + ',' + c.y + ',' + (c.z + 1))) mask |= 16;
      if (!grid.has(c.x + ',' + c.y + ',' + (c.z - 1))) mask |= 32;
      if (mask === 0) return null;
      const t = ((c.x * 7 + c.y * 13 + c.z * 5) % 5 + 5) % 5;
      const lift = 1 + Math.max(-0.08, Math.min(0.14, c.z / (rad * 2)));
      const [rr, gg, bb] = hex2rgb(tops[t]);
      const [sr, sg, sb] = hex2rgb(sides[t]);
      const open = openFaces(mask);
      return {
        x: c.x, y: c.y, z: c.z,
        r: Math.min(255, rr * lift) | 0, g: Math.min(255, gg * lift) | 0, b: Math.min(255, bb * lift) | 0,
        rs: sr, gs: sg, bs: sb,
        nl: t % 3, emis: false, mask,
        ao: Math.max(0.55, 0.62 + 0.38 * (open / 6)),
      };
    }).filter(Boolean);
    return { vox, w: N * 2, l: N * 2, h: N * 2, engines: [] };
  }

  /**
   * Procedural VOXEL ORB — the jammer bubbles.
   *
   * They were painted with smooth canvas gradients, which put the one hazard the
   * player stares at hardest completely outside the game's voxel language. These
   * are real voxel grids drawn through Vox.draw, so they light, rotate and read
   * like everything else on screen.
   *
   * `style` picks the topology, and the topology IS the grade's identity:
   *   solid  — dense core, heavy and slow
   *   shell  — hollow husk (surface voxels only), reads as barely-there
   *   shard  — shell blown apart into floating plates
   *   spiked — shell with spines pushed out along the axes
   *   imploded — shell collapsing inward, voxels pulled toward the centre
   *
   * Cached: each orb is a few thousand voxels, far too heavy to rebuild per frame.
   */
  /* ---------- orientation / projection ---------- */
  // MagicaVoxel-style face tiers + key/fill. Top faces stay clearly brightest;
  // left/right sides diverge so cubes never read as flat diamonds.
  // Specular (Blinn) glints ride normals → bank/yaw makes highlights crawl.
  const KEY  = (() => { const l = [-0.62, -0.38, 0.68]; const m = Math.hypot(...l); return l.map(v => v / m); })();
  const FILL = (() => { const l = [ 0.48,  0.22, 0.42]; const m = Math.hypot(...l); return l.map(v => v / m); })();
  // Half-vector KEY↔camera (view ≈ +Z after orient). Pre-normalized.
  const HALF = (() => {
    const h = [KEY[0], KEY[1], KEY[2] + 1];
    const m = Math.hypot(...h); return h.map(v => v / m);
  })();
  const LIGHT = KEY;
  // Fixed material face weights (axis before rotation) — classic voxel look.
  const FACE_TIER = { 1: 0.78, 2: 0.58, 4: 0.70, 8: 0.64, 16: 1.0, 32: 0.42 };
  // Inclination bias from playfield cam (Engine → setViewCam). Pitch + roll only —
  // never yaw (that looked like ships turning to face the player).
  let viewCam = { dPitch: 0, dRoll: 0 };
  function setViewCam(dPitch, dRoll) {
    viewCam.dPitch = dPitch || 0;
    viewCam.dRoll = dRoll || 0;
  }
  function rot(v, cy, sy, cr, sr, cp, sp2) {
    let x = v[0] * cy - v[1] * sy, y = v[0] * sy + v[1] * cy, z = v[2];
    let x2 = x * cr + z * sr, z2 = -x * sr + z * cr;
    return [x2, y * cp - z2 * sp2, y * sp2 + z2 * cp];
  }
  function orient(yaw = 0, roll = 0, pitch = 1.05) {
    const cy = Math.cos(yaw), sy = Math.sin(yaw), cr = Math.cos(roll), sr = Math.sin(roll), cp = Math.cos(pitch), sp2 = Math.sin(pitch);
    const E = [rot([1, 0, 0], cy, sy, cr, sr, cp, sp2), rot([0, 1, 0], cy, sy, cr, sr, cp, sp2), rot([0, 0, 1], cy, sy, cr, sr, cp, sp2)];
    // Light micro-bias with viewCam: slides KEY/HALF across the hull as it banks
    // so side faces read more 3D without any heading (yaw) change.
    let k0 = KEY[0], k1 = KEY[1], k2 = KEY[2];
    let f0 = FILL[0], f1 = FILL[1], f2 = FILL[2];
    let h0 = HALF[0], h1 = HALF[1], h2 = HALF[2];
    if (viewCam.dRoll || viewCam.dPitch) {
      // Light drift with bank — mild volume cue (between flat and spinny).
      const bx = viewCam.dRoll * 0.42, by = -viewCam.dPitch * 0.32;
      k0 += bx; k1 += by;
      f0 -= bx * 0.6; f1 -= by * 0.5;
      h0 += bx * 0.7; h1 += by * 0.5;
      const kn = Math.hypot(k0, k1, k2) || 1, fn = Math.hypot(f0, f1, f2) || 1, hn = Math.hypot(h0, h1, h2) || 1;
      k0 /= kn; k1 /= kn; k2 /= kn;
      f0 /= fn; f1 /= fn; f2 /= fn;
      h0 /= hn; h1 /= hn; h2 /= hn;
    }
    const faces = [];
    for (let a = 0; a < 3; a++) for (const sgn of [1, -1]) {
      const n = E[a].map(v => v * sgn);
      if (n[2] <= 0.02) continue;
      const b = (a + 1) % 3, c = (a + 2) % 3;
      const cx = n[0] * 0.5, cxy = n[1] * 0.5;
      const quad = [
        [cx + (E[b][0] + E[c][0]) * 0.5, cxy + (E[b][1] + E[c][1]) * 0.5],
        [cx + (E[b][0] - E[c][0]) * 0.5, cxy + (E[b][1] - E[c][1]) * 0.5],
        [cx + (-E[b][0] - E[c][0]) * 0.5, cxy + (-E[b][1] - E[c][1]) * 0.5],
        [cx + (-E[b][0] + E[c][0]) * 0.5, cxy + (-E[b][1] + E[c][1]) * 0.5],
      ];
      const bit = a === 0 ? (sgn > 0 ? 1 : 2) : a === 1 ? (sgn > 0 ? 4 : 8) : (sgn > 0 ? 16 : 32);
      const tier = FACE_TIER[bit];
      const key  = Math.max(0, n[0] * k0 + n[1] * k1 + n[2] * k2);
      const fill = Math.max(0, n[0] * f0 + n[1] * f1 + n[2] * f2);
      // Soft rim on silhouettes (cool edge light).
      const rim = Math.pow(1 - Math.min(1, n[2]), 2) * 0.18;
      // tier is the big volume cue; key/fill add directionality without flattening tiers.
      let br = tier * (0.55 + 0.55 * key + 0.22 * fill) + rim;
      br = Math.min(1.35, Math.max(0.18, br));
      // Specular: soft sheen + sharp glint. Tracks light bias + roll.
      const ndH = Math.max(0, n[0] * h0 + n[1] * h1 + n[2] * h2);
      const topBoost = bit === 16 ? 1.15 : bit === 32 ? 0.35 : 1.0;
      const spec = (Math.pow(ndH, 8) * 0.22 + Math.pow(ndH, 36) * 0.72) * topBoost;
      faces.push({ bit, quad, br, spec, isTop: bit === 16, isBot: bit === 32 });
    }
    return { E, faces };
  }

  /* ---------- draw a model ---------- */
  // o: {s(voxel px), yaw, roll, pitch, t, thrust, flameColor}

  /* ---------- renderer scratch (perf only — output is unchanged) ----------
   * Reused projection buffers and a persistent material memo. Both exist purely
   * to stop Vox.draw allocating on every call; see the comments at their use
   * sites for why each one mattered. */
  /* Work counters. Wall-clock timing on a dev box swings 2x between identical
     runs, which is enough to make a change look like a win when it did nothing.
     Counting the actual work — draw calls, voxels projected, faces filled — is
     deterministic, so a reduction is a reduction on any machine.
     Off by default; promo/_work.py turns it on. */
  const STATS = { on: false, calls: 0, voxels: 0, faces: 0, cacheHit: 0, cacheMiss: 0 };

  const SCRATCH = [null, null, null];
  function scratch(slot, n) {
    let a = SCRATCH[slot];
    if (!a || a.length < n) a = SCRATCH[slot] = new Float32Array(Math.max(n, 256));
    return a;
  }

  /* ---------- body raster cache ----------
   * The body pass is a pure function of (model, yaw, roll, pitch, scale): no
   * time, no position. Rasterise it once, blit it afterwards. The key uses the
   * exact numbers, so a hit is the SAME image, not a lookalike — a rotating hull
   * simply never hits and falls back to drawing, costing nothing extra.
   *
   * Bounded and LRU-ish: a handful of hull/orientation/scale combinations are
   * live at a time, and an unbounded cache of canvases is a memory leak on a
   * phone. Entries are keyed by insertion order in a Map, so the oldest goes
   * first when the budget is hit. */
  const BODY_MAX = 40;
  const bodyCache = new Map();
  let bodyId = 0;
  const modelKey = m => (m._vid || (m._vid = ++bodyId));

  function bodyCacheGet(key) {
    const hit = bodyCache.get(key);
    if (hit) {                       // refresh recency
      bodyCache.delete(key);
      bodyCache.set(key, hit);
    }
    return hit;
  }
  function bodyCachePut(key, entry) {
    if (bodyCache.size >= BODY_MAX) {
      const oldest = bodyCache.keys().next().value;
      bodyCache.delete(oldest);
    }
    bodyCache.set(key, entry);
  }
  /** Drop rasters for a model whose voxels changed (retint / paint / reglow). */
  function bodyCacheDrop(model) {
    if (!model || !model._vid) return;
    const pre = model._vid + '|';
    for (const k of [...bodyCache.keys()]) if (k.startsWith(pre)) bodyCache.delete(k);
  }
  /* Material memo, scoped to ONE orientation.
   *
   * The face table (f.br, f.spec) is a function of the orientation, and the
   * packed key below does NOT contain it — it never had to, because the cache
   * used to be rebuilt per call. Making it survive across calls without scoping
   * it silently reused a face's brightness from a different angle: verified with
   * promo/_pixel_diff.py, which caught it as changed pixels on the boss hulls.
   *
   * Scoped this way it is still a real win: every model in a wave shares one
   * orientation, and a hull that has not rotated since last frame keeps its
   * whole palette. */
  let MAT = new Map();
  let matKey = ' ';
  function matCache(orientKey) {
    if (matKey !== orientKey) { matKey = orientKey; MAT = new Map(); }
    return MAT;
  }

  function draw(ctx, model, cx, cy, o = {}) {
    if (!ctx || !model || !model.vox) return;
    ctx.save();
    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = 1;
    ctx.shadowBlur = 0;
    ctx.shadowColor = 'rgba(0,0,0,0)';
    try { drawInner(ctx, model, cx, cy, o); }
    finally { ctx.shadowBlur = 0; ctx.restore(); }
  }
  /* ---------- coarser hulls for slower devices ----------
   * Merge the voxel grid n x n x n and rebuild the face masks. The result is
   * the SAME object, lit the same way, with the same silhouette and the same
   * palette — just built from bigger blocks. It is not a low-poly stand-in and
   * it never degenerates into a flat card: a merged hull still has a lit top,
   * darker sides, cavity shading and its engines.
   *
   * Only the lower tiers ask for this, and only where a voxel is already small
   * on screen, so the blocks stay close to the size they replace. `ultra` and
   * `high` never call it — those tiers render the original grid.
   */
  function buildLod(model, n) {
    const V = model.vox, cells = new Map();
    for (let i = 0; i < V.length; i++) {
      const v = V[i];
      const ix = Math.floor(v.x / n), iy = Math.floor(v.y / n), iz = Math.floor(v.z / n);
      const key = ix + ',' + iy + ',' + iz;
      let c = cells.get(key);
      if (!c) {
        c = { ix, iy, iz, n: 0, r: 0, g: 0, b: 0, rs: 0, gs: 0, bs: 0, ao: 0, emis: 0 };
        cells.set(key, c);
      }
      c.n++;
      c.r += v.r; c.g += v.g; c.b += v.b;
      c.rs += v.rs != null ? v.rs : v.r;
      c.gs += v.gs != null ? v.gs : v.g;
      c.bs += v.bs != null ? v.bs : v.b;
      c.ao += v.ao != null ? v.ao : 0.85;
      if (v.emis) c.emis++;
    }
    const vox = [];
    for (const c of cells.values()) {
      let mask = 0;
      if (!cells.has((c.ix + 1) + ',' + c.iy + ',' + c.iz)) mask |= 1;
      if (!cells.has((c.ix - 1) + ',' + c.iy + ',' + c.iz)) mask |= 2;
      if (!cells.has(c.ix + ',' + (c.iy + 1) + ',' + c.iz)) mask |= 4;
      if (!cells.has(c.ix + ',' + (c.iy - 1) + ',' + c.iz)) mask |= 8;
      if (!cells.has(c.ix + ',' + c.iy + ',' + (c.iz + 1))) mask |= 16;
      if (!cells.has(c.ix + ',' + c.iy + ',' + (c.iz - 1))) mask |= 32;
      if (mask === 0) continue;                      // interior block, never seen
      const k = c.n;
      vox.push({
        x: c.ix + 0.5, y: c.iy + 0.5, z: c.iz + 0.5,
        r: (c.r / k) | 0, g: (c.g / k) | 0, b: (c.b / k) | 0,
        rs: (c.rs / k) | 0, gs: (c.gs / k) | 0, bs: (c.bs / k) | 0,
        nl: ((c.ix * 7 + c.iy * 13 + c.iz * 5) % 3 + 3) % 3,
        // A block glows only if most of what went into it glowed, so a single
        // cockpit voxel cannot light up a whole chunk of hull.
        emis: c.emis * 2 > k,
        ao: c.ao / k, mask,
      });
    }
    return {
      vox,
      w: Math.max(1, (model.w || 4) / n),
      l: Math.max(1, (model.l || 4) / n),
      h: Math.max(1, (model.h || 4) / n),
      engines: (model.engines || []).map(e => ({ x: e.x / n, y: e.y / n, z: e.z / n })),
    };
  }
  /** Coarser variant for this draw, or null to render the model as authored. */
  function pickLod(model, s, o) {
    // `noLod` is for hulls that are always the centre of attention. The player's
    // ship is on screen every frame of every fight and is the one model a player
    // looks AT rather than past, so merging it is the most visible saving in the
    // game and one of the smallest: it is a single hull against a screenful of
    // enemies. Everything else on a lower tier still merges.
    if (o && o.noLod) return null;
    if (typeof Quality === 'undefined' || !model || !model.vox) return null;
    const maxN = Quality.v('voxelMerge') | 0;
    if (maxN < 2) return null;
    // s IS the voxel edge in pixels. Merge only while the block that replaces
    // it stays modest on screen; a hull filling half the screen is never
    // rebuilt, whatever the tier.
    const px = Quality.v('voxelMergePx') || 0;
    if (!(s < px)) return null;
    const n = s * 3 < px ? maxN : 2;
    const key = '_lod' + n;
    let m = model[key];
    if (!m) {
      try { m = buildLod(model, n); } catch (e) { m = null; }
      // Cache the failure too — a model that cannot be merged must not be
      // retried on every frame.
      Object.defineProperty(model, key, { value: m, enumerable: false, writable: true, configurable: true });
    }
    return m ? { m, n } : null;
  }

  function drawInner(ctx, model, cx, cy, o = {}) {
    let s = o.s || 4;
    const t = o.t || 0;
    const L = pickLod(model, s, o);
    if (L) { model = L.m; s *= L.n; }
    // Tip hulls (pitch/roll). Heading (yaw) stays owned by AI / bank anim.
    // o.ignoreCam: bake/cube caches stay neutral.
    const yaw   = o.yaw || 0;
    const roll  = (o.roll || 0) + (o.ignoreCam ? 0 : viewCam.dRoll);
    const pitch = (o.pitch == null ? 1.05 : o.pitch) + (o.ignoreCam ? 0 : viewCam.dPitch);
    const or = orient(yaw, roll, pitch);
    const [E1, E2, E3] = or.E;
    const V = model.vox, n = V.length;
    const halfH = Math.max(1, (model.h || 4) * 0.5);
    const px = scratch(0, n), py = scratch(1, n), pd = scratch(2, n);
    for (let i = 0; i < n; i++) {
      const v = V[i];
      px[i] = cx + s * (v.x * E1[0] + v.y * E2[0] + v.z * E3[0]);
      py[i] = cy + s * (v.x * E1[1] + v.y * E2[1] + v.z * E3[1]);
      pd[i] = v.x * E1[2] + v.y * E2[2] + v.z * E3[2];
    }
    const idx = model._idx && model._idx.length === n ? model._idx : (model._idx = Array.from({ length: n }, (_, i) => i));
    // Painter order depends only on the model and the orientation — never on
    // position, scale or time. Identical enemies in a wave face the same way, and
    // a hull whose rotation has not moved since last frame is the common case, so
    // both skip the sort outright. Same order, just not recomputed.
    const sortKey = yaw + ':' + roll + ':' + pitch;
    if (model._sortKey !== sortKey) {
      idx.sort((a, b) => pd[a] - pd[b]);
      model._sortKey = sortKey;
    }
    const mat = matCache(sortKey);
    if (STATS.on) { STATS.calls++; STATS.voxels += n; }
    const emitters = [];
    // Faces are filled only. Each one used to be filled AND stroked with a
    // slightly darker bevel — a second rasterisation of every face of every
    // voxel of every hull, every frame. Dropping it measured +40% voxel
    // throughput on identical hardware (best-of-bursts 844 -> 1182 faces/ms).
    // Hulls read a touch smoother and sit about half a pixel narrower; the
    // facets still separate, because top faces and side faces carry different
    // colours. Restore with `tools/snapshot.py restore before-noedge`.
    for (let k = 0; k < n; k++) {
      const i = idx[k], v = V[i];
      if (v.emis) { emitters.push(i); continue; }
      const ao = v.ao != null ? v.ao : 0.85;
      // Gentle height falloff (lower decks sit in shade).
      const zGrad = 0.88 + 0.22 * ((v.z / halfH) * 0.5 + 0.5);
      const aoBand = (ao * 16 | 0), zgBand = (zGrad * 16 | 0);
      for (const f of or.faces) {
        if (!(v.mask & f.bit)) continue;
        // TOP faces use bright top RGB; SIDE/BOTTOM use darker side RGB → real volume.
        const useTop = f.isTop;
        const cr = useTop ? v.r : (v.rs != null ? v.rs : v.r);
        const cg = useTop ? v.g : (v.gs != null ? v.gs : v.g);
        const cb = useTop ? v.b : (v.bs != null ? v.bs : v.b);
        // Spec band in cache key so glints don't share mats with non-glinting faces.
        const spBand = (f.spec * 24) | 0;
        // Packed integer key, not a string: this line ran per face per voxel per
        // frame, and string building here was the single biggest source of
        // garbage in the renderer. Every component is a small integer and the
        // product stays well inside exact-integer range.
        const ckey = ((((((cr * 256 + cg) * 256 + cb) * 64 + f.bit) * 3 + v.nl) * 17 + aoBand) * 17 + zgBand) * 25 + spBand;
        let st = mat.get(ckey);
        if (!st) {
          const m = f.br * NOISE[v.nl] * ao * zGrad;
          // Cool-white specular add (sci-fi hull sheen); keeps chroma on base paint.
          const sp = f.spec || 0;
          const r = Math.min(255, cr * m + sp * 235) | 0;
          const g = Math.min(255, cg * m + sp * 248) | 0;
          const b = Math.min(255, cb * m + sp * 255) | 0;
          st = { f: `rgb(${r},${g},${b})` };
          // Bounded: a palette swap (retint / paint) can seed new entries, and an
          // unbounded memo would grow for the life of the session.
          mat.set(ckey, st);
        }
        if (STATS.on) STATS.faces++;
        ctx.fillStyle = st.f;
        const q = f.quad, X = px[i], Y = py[i];
        ctx.beginPath();
        ctx.moveTo(X + q[0][0] * s, Y + q[0][1] * s);
        ctx.lineTo(X + q[1][0] * s, Y + q[1][1] * s);
        ctx.lineTo(X + q[2][0] * s, Y + q[2][1] * s);
        ctx.lineTo(X + q[3][0] * s, Y + q[3][1] * s);
        ctx.closePath(); ctx.fill();
      }
    }
    if (o.thrust > 0.02 && model.engines && model.engines.length) {
      const fc = o.flameColor || '#7ff0ff';
      // Each layer is a blurred sprite; shadowBlur is a real per-sprite blur
      // pass and the most expensive pixel in the renderer on mobile GPUs.
      const layers = (typeof Quality !== 'undefined' && Quality.v('flameLayers')) || 3;
      const glow = typeof Quality === 'undefined' || Quality.on('flameGlow');
      for (const e of model.engines) {
        for (let k = 1; k <= layers; k++) {
          const flick = 0.75 + 0.25 * Math.sin(t * 30 + k * 2 + e.x * 5);
          const yy = e.y + k * 0.95;
          const X = cx + s * (e.x * E1[0] + yy * E2[0] + e.z * E3[0]);
          const Y = cy + s * (e.x * E1[1] + yy * E2[1] + e.z * E3[1]);
          const sz = s * (1 - k * 0.24) * flick * (o.thrust || 1);
          ctx.save(); ctx.globalAlpha = (1 - k * 0.26) * flick;
          if (glow) { ctx.shadowColor = fc; ctx.shadowBlur = s * 1.5; }
          ctx.fillStyle = k === 1 ? '#ffffff' : fc;
          ctx.fillRect(X - sz / 2, Y - sz / 2, sz, sz);
          ctx.restore();
        }
      }
    }
    for (const i of emitters) {
      const v = V[i];
      const pul = 0.86 + 0.14 * Math.sin(t * 5 + v.x * 2 + v.y);
      ctx.save();
      ctx.shadowColor = `rgb(${v.r},${v.g},${v.b})`; ctx.shadowBlur = s * 2.0;
      for (const f of or.faces) {
        if (!(v.mask & f.bit)) continue;
        if (STATS.on) STATS.faces++;
        const m = (0.78 + 0.42 * f.br) * pul;
        ctx.fillStyle = `rgb(${Math.min(255, v.r * m) | 0},${Math.min(255, v.g * m) | 0},${Math.min(255, v.b * m) | 0})`;
        const q = f.quad, X = px[i], Y = py[i];
        ctx.beginPath();
        ctx.moveTo(X + q[0][0] * s, Y + q[0][1] * s);
        ctx.lineTo(X + q[1][0] * s, Y + q[1][1] * s);
        ctx.lineTo(X + q[2][0] * s, Y + q[2][1] * s);
        ctx.lineTo(X + q[3][0] * s, Y + q[3][1] * s);
        ctx.closePath(); ctx.fill();
      }
      ctx.restore();
    }
  }


  /* ---------- contact/drop shadow ---------- */
  function groundShadow(ctx, x, y, r, o = {}) {
    // Two radial gradients and two arcs per hull per frame. The bottom tier
    // drops the contact shadow entirely: hulls sit slightly flatter against the
    // backdrop, but nothing about their own shading changes.
    if (typeof Quality !== 'undefined' && !Quality.on('groundShadow')) return;
    // Nudge shadow with inclination so contact stays under the tipped hull.
    const ox = o.ox == null ? r * 0.18 + viewCam.dRoll * r * 1.4 : o.ox;
    const oy = o.oy == null ? r * 0.38 + viewCam.dPitch * r * 0.7 : o.oy;
    const a  = o.a  == null ? 0.52 : o.a;
    ctx.save();
    ctx.translate(x + ox, y + oy);
    ctx.scale(1.08, 0.38);
    const g = ctx.createRadialGradient(0, 0, 0, 0, 0, r * 1.35);
    g.addColorStop(0,    `rgba(0,0,0,${a})`);
    g.addColorStop(0.35, `rgba(0,0,0,${a * 0.55})`);
    g.addColorStop(0.7,  `rgba(0,0,0,${a * 0.18})`);
    g.addColorStop(1,    'rgba(0,0,0,0)');
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.arc(0, 0, r * 1.35, 0, TAU); ctx.fill();
    // hard contact under the hull
    const c = ctx.createRadialGradient(0, 0, 0, 0, 0, r * 0.48);
    c.addColorStop(0, `rgba(0,0,0,${Math.min(0.78, a * 1.25)})`);
    c.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = c;
    ctx.beginPath(); ctx.arc(0, 0, r * 0.48, 0, TAU); ctx.fill();
    ctx.restore();
  }

  /* ---------- tiny cube sprite frames (debris / bullets / rain) ---------- */
  const cubeCache = {};
  function cubeFrames(colorHex, size = 6, nFrames = 12, emis = false) {
    const key = colorHex + '|' + size + '|' + nFrames + '|' + emis;
    if (cubeCache[key]) return cubeCache[key];
    const [r, g, b] = hex2rgb(colorHex);
    const model = { vox: [{ x: 0, y: 0, z: 0, r, g, b, nl: 1, emis, mask: 63 }], engines: [] };
    const pad = size * 2.2;
    const frames = Array.from({ length: nFrames }, (_, i) => {
      const c = document.createElement('canvas'); c.width = c.height = Math.ceil(pad * 2);
      const x = c.getContext('2d');
      draw(x, model, pad, pad, { s: size, yaw: i / nFrames * TAU, roll: 0.5 + i * 0.35, pitch: 0.9, t: i, ignoreCam: true });
      return c;
    });
    return (cubeCache[key] = frames);
  }

  /* ---------- voxel debris explosions ---------- */
  function boom(list, x, y, o = {}) {
    const size = o.size || 1, colors = o.colors || ['#ff9a3d', '#ffd24a', '#8d95a8'];
    list.push({ kind: 'flash', x, y, t: 0, life: 0.14, size });
    list.push({ kind: 'ring', x, y, t: 0, life: 0.4, size });
    // Never below a handful: an explosion that does not throw debris reads as a
    // bug, not as a setting.
    const dens = (typeof Quality !== 'undefined' && Quality.v('particles')) || 1;
    const n = Math.max(4, Math.round(9 * size * dens));
    for (let i = 0; i < n; i++) {
      const a = Math.random() * TAU, sp = (55 + Math.random() * 170) * size;
      list.push({ kind: 'cube', x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp,
        t: 0, life: 0.5 + Math.random() * 0.5, col: colors[i % colors.length],
        fr: Math.floor(Math.random() * 12), fs: 6 + Math.random() * 10,
        sz: (2.6 + Math.random() * 2.6) * Math.sqrt(size) });
    }
  }
  function boomUpdate(list, dt) {
    for (let i = list.length - 1; i >= 0; i--) {
      const f = list[i]; f.t += dt;
      if (f.kind === 'cube') { f.x += f.vx * dt; f.y += f.vy * dt; f.vx *= 0.95; f.vy = f.vy * 0.95 + 30 * dt; }
      if (f.t >= f.life) list.splice(i, 1);
    }
  }
  function boomDraw(ctx, list, t) {
    for (const f of list) {
      const k = f.t / f.life, inv = 1 - k;
      if (f.kind === 'flash') {
        ctx.save(); ctx.globalCompositeOperation = 'lighter';
        const g = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, 32 * f.size);
        g.addColorStop(0, `rgba(255,255,235,${0.85 * inv})`); g.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = g; ctx.fillRect(f.x - 36 * f.size, f.y - 36 * f.size, 72 * f.size, 72 * f.size);
        ctx.restore();
      } else if (f.kind === 'ring') {
        ctx.strokeStyle = `rgba(255,205,150,${0.7 * inv})`; ctx.lineWidth = 2.4 * inv + 0.4;
        ctx.beginPath(); ctx.arc(f.x, f.y, 6 + k * 40 * f.size, 0, TAU); ctx.stroke();
      } else {
        const frames = cubeFrames(f.col, 3.2, 12, false);
        const fi = (f.fr + Math.floor(f.t * f.fs)) % 12;
        const img = frames[fi], sc = (f.sz / 3.2) * (1 - k * 0.55) / 2.2;
        ctx.save(); ctx.globalAlpha = Math.min(1, inv * 1.6);
        ctx.drawImage(img, f.x - img.width * sc / 2, f.y - img.height * sc / 2, img.width * sc, img.height * sc);
        ctx.restore();
      }
    }
  }

  /* ============================================================
   * MODEL LIBRARY — clean silhouettes, clear materials, readable 3D.
   * Design rules: one strong shape, 1–2 height tiers, intentional accents.
   * Every material has distinct top (bright) + side (dark) for volume.
   * ========================================================== */

  /* ── Player hull forms ─────────────────────────────────────────────────────
   * Every ship used to be ONE mesh with a different palette, so at a glance the
   * fleet was six colours of the same fighter. Each hull now has its own
   * top-down footprint and its own engine count, matching what the ship does in
   * the hangar (Meta.SHIPS[].shape): you should be able to name the ship from
   * the silhouette alone, with the palette only confirming it.
   *
   * Constraints that keep this safe to change:
   *   • The hitbox is a fixed r=5 circle in player.js — geometry is cosmetic.
   *   • Grids stay ≤13 wide / ≤14 long so the drawn footprint stays comparable
   *     at the shared draw scale; a hull twice the size would read as a cheat.
   *   • Letters are shared across all forms, so one spec table serves them all.
   */
  const SHIP_FORMS = {
    // VANGUARD — the reference arrow: swept delta, twin thrusters. Balanced.
    vanguard: {
      hull: [
        '......A......',
        '.....AAA.....',
        '....AAAAA....',
        '....ASSSA....',
        '...AASSSAA...',
        '...AACCCAA...',
        '..AAACCCAAA..',
        '..AAASSSAAA..',
        '.WAAASSSAAAW.',
        'WW.AASSSAA.WW',
        'W..AASSSAA..W',
        'L...AAAAA...L',
        '.....AAA.....',
        '....DEDED....',
      ],
      crest: [
        '.............',
        '......S......',
        '.....SSS.....',
        '.....SSS.....',
        '.....S.S.....',
        '.....S.S.....',
        '.....SSS.....',
        '......S......',
      ],
    },
    // PHANTOM — needle dart: one-cell nose, hard-raked delta, a single engine.
    // Reads as "nothing but blade", which is exactly its glass-cannon role.
    phantom: {
      hull: [
        '......A......',
        '......A......',
        '.....ASA.....',
        '.....ASA.....',
        '.....ACA.....',
        '.....ACA.....',
        '.....ASA.....',
        '....WASAW....',
        '...WWASAWW...',
        '..WWWASAWWW..',
        'LWWWAASAAWWWL',
        '....AAAAA....',
        '.....AAA.....',
        '.....DED.....',
      ],
      crest: [
        '.............',
        '......S......',
        '......S......',
        '......S......',
        '......S......',
        '......S......',
        '......S......',
        '......S......',
      ],
    },
    // GOLIATH — slab: blunt nose, full-width shoulders, FOUR thrusters. The only
    // hull with no taper, so it looks like it cannot be knocked off course.
    goliath: {
      hull: [
        '....AAAAA....',
        '...AAAAAAA...',
        '..AAASSSAAA..',
        '..AASCCCSAA..',
        '.WAASCCCSAAW.',
        'WWAAASSSAAAWW',
        'WWAAAAAAAAAWW',
        'WWAAAAAAAAAWW',
        'WWAAAAAAAAAWW',
        'W.AAAAAAAAA.W',
        'L.AAAAAAAAA.L',
        '..AAAAAAAAA..',
        '..AAAAAAAAA..',
        '..DEDEDEDED..',
      ],
      crest: [
        '.............',
        '.............',
        '.....SSS.....',
        '....SSSSS....',
        '....S...S....',
        '....S...S....',
        '....SSSSS....',
        '.....SSS.....',
      ],
    },
    // HORNET — twin boom: two outboard nacelles either side of a thin pod, with
    // the engines out on the booms. Three noses, widest gap in the fleet.
    hornet: {
      hull: [
        '..A.......A..',
        '..A...A...A..',
        '..A..ASA..A..',
        '..AA.ASA.AA..',
        '..AA.ACA.AA..',
        '.WAA.ACA.AAW.',
        '.WAAAASAAAAW.',
        '.WAAAASAAAAW.',
        '.WAA.ASA.AAW.',
        '.WAA.AAA.AAW.',
        '.LAA.....AAL.',
        '..AA.....AA..',
        '..AA.....AA..',
        '.DED.....DED.',
      ],
      crest: [
        '.............',
        '.............',
        '.............',
        '.....SSS.....',
        '.....S.S.....',
        '.....SSS.....',
        '.............',
        '.............',
      ],
    },
    // COMET — forward-swept: wingtips sit AHEAD of the engines, long spike nose,
    // three thrusters in a row. The only hull that leans into the screen.
    comet: {
      hull: [
        '......A......',
        '......A......',
        '......A......',
        '.....ASA.....',
        'LWWWWASAWWWWL',
        '.WWWWACAWWWW.',
        '..WWWACAWWW..',
        '...WWASAWW...',
        '....AASAA....',
        '....AAAAA....',
        '....AAAAA....',
        '....AAAAA....',
        '.....AAA.....',
        '...DEDEDED...',
      ],
      crest: [
        '.............',
        '.............',
        '......S......',
        '.....SSS.....',
        '.....SSS.....',
        '.....SSS.....',
        '......S......',
        '......S......',
      ],
    },
    // AEGIS — the story hull. The first pass was a monotone lump: almost every
    // cell was hull tone, so there was no wing/fuselage contrast to read and no
    // negative space to give it a shape. This one is built out of the two things
    // that make the other hulls legible — a strong W wing band against the A
    // fuselage, and a hole in the silhouette: forward-swept canards, a full-span
    // delta, and a notched twin-boom tail with four thrusters.
    aegis: {
      hull: [
        '......A......',
        '.....ASA.....',
        '...WWASAWW...',
        '.....ASA.....',
        '....LACAL....',
        '....LACAL....',
        '....AASAA....',
        '...WAASAAW...',
        '..WWAASAAWW..',
        '.WWWAASAAWWW.',
        'LWWWAASAAWWWL',
        '...AAASAAA...',
        '..AAAA.AAAA..',
        '..DEDE.EDED..',
      ],
      crest: [
        '.............',
        '.....SSS.....',
        '.....SSS.....',
        '.....S.S.....',
        '.....S.S.....',
        '.....SSS.....',
        '.....SSS.....',
        '......S......',
      ],
    },
  };

  // Player fighter: hull form from SHIP_FORMS, raised spine, glass canopy, accent
  // wingtip lights, thrusters. Palette and geometry are picked independently.
  function buildShip(p, form) {
    const f = SHIP_FORMS[form] || SHIP_FORMS.vanguard;
    return fromLayers([
      // Main hull + wings (tier 1)
      { rows: f.hull, spec: {
        A: { h: 3, top: p.hull, side: p.side },
        S: { h: 4, top: p.spine, side: p.side },
        C: { h: 4, top: p.glass, side: p.side, emisTop: true },
        W: { h: 2, top: p.wing, side: p.wingSide },
        L: { h: 2, top: p.accent, side: p.accentDark || p.side, emisTop: true },
        D: { h: 2, top: p.dark, side: p.dark },
        E: { h: 2, top: p.dark, side: p.dark, engine: true },
      }},
      // Spine crest only (tier 2) — clean ridge, not a second whole ship
      { rows: f.crest, spec: {
        S: { z0: 4, h: 1, top: p.spine, side: p.side },
      }},
    ]);
  }

  // Cohesive ship palettes: cool metal tops, deep side hulls, hot accent lights.
  const SHIP_PALS = {
    vanguard: {
      hull: '#d8e4f4', side: '#5a6a86', spine: '#eef4fc', wing: '#8ea0bc', wingSide: '#3a4660',
      glass: '#6ef0ff', accent: '#3ec8ff', accentDark: '#1a6a90', dark: '#2a3248',
    },
    phantom: {
      hull: '#d4c8f0', side: '#5a4a88', spine: '#ebe2ff', wing: '#9a88c8', wingSide: '#3a2e60',
      glass: '#ff7ae8', accent: '#e84ad8', accentDark: '#7a2070', dark: '#2a2040',
    },
    goliath: {
      hull: '#e8d8b8', side: '#6a5a3e', spine: '#f4e8cc', wing: '#b8a078', wingSide: '#4a3e28',
      glass: '#ffd86a', accent: '#f0b030', accentDark: '#7a5810', dark: '#3a3220',
    },
    hornet: {
      hull: '#f0e0b0', side: '#7a6030', spine: '#fff0c8', wing: '#c8a050', wingSide: '#5a4420',
      glass: '#ffc84a', accent: '#ff8a2a', accentDark: '#8a4010', dark: '#3a2c14',
    },
    comet: {
      hull: '#c8e8f4', side: '#3e6480', spine: '#e0f4fc', wing: '#7ab0c8', wingSide: '#2a4a60',
      glass: '#9ae8ff', accent: '#5ac8f0', accentDark: '#1a6088', dark: '#1e3444',
    },
    // Aegis runs a tighter hull/wing range than the others on purpose: it has the
    // most panels of the six, and the wide contrast the rest use broke it into
    // dark blobs instead of one craft.
    aegis: {
      hull: '#dcf2d0', side: '#526e46', spine: '#f0fae6', wing: '#aad494', wingSide: '#42603a',
      glass: '#7affc0', accent: '#3ce08a', accentDark: '#1a7048', dark: '#2a4026',
    },
  };

  const MODELS = {};
  for (const k in SHIP_PALS) MODELS[k] = buildShip(SHIP_PALS[k], k);

  // Kamikaze — sharp wedge drone, warhead tip, twin fins, rear thrusters.
  MODELS.kamikaze = fromLayers([
    { rows: [
      '....A....',
      '...AAA...',
      '...AHA...',
      '..AAAAA..',
      '.WAAAAAW.',
      '.AAAAAAA.',
      '..AAAAA..',
      '..DEDED..',
    ], spec: {
      A: { h: 3, top: '#e89850', side: '#6a3818' },
      H: { h: 4, top: '#ffe08a', side: '#8a4a18', emisTop: true },
      W: { h: 2, top: '#f0b060', side: '#5a3010', emisTop: true },
      D: { h: 2, top: '#4a2810', side: '#2a1808' },
      E: { h: 2, top: '#ffb060', side: '#3a2010', emisTop: true, engine: true },
    }},
  ]);

  // Shooter — armored saucer, glowing iris, side gun pods.
  MODELS.shooter = fromLayers([
    { rows: [
      '..KKKKK..',
      '.KPPPPPK.',
      'KPPPMPPPK',
      'KPPMOMPPK',
      'KPPPMPPPK',
      '.KPPPPPK.',
      'B.EE.EE.B',
    ], spec: {
      P: { h: 3, top: '#b090e0', side: '#4a3080' },
      K: { h: 2, top: '#7a60b0', side: '#3a2460' },
      M: { h: 4, top: '#f060e8', side: '#6a2880', emisTop: true },
      O: { h: 4, top: '#1a0828', side: '#4a2080' },
      B: { h: 2, top: '#c05090', side: '#5a2048' },
      E: { h: 2, top: '#d080ff', side: '#3a2058', emisTop: true, engine: true },
    }},
  ]);

  // Weaver — slim diamond interceptor, spine glow, wing lights.
  MODELS.weaver = fromLayers([
    { rows: [
      '....T....',
      '...TTT...',
      '...TCT...',
      '..TTTTT..',
      'LTTTGTTTL',
      '.TTTGTTT.',
      '..TTGTT..',
      '...TET...',
      '....E....',
    ], spec: {
      T: { h: 3, top: '#50d8b0', side: '#106050' },
      C: { h: 4, top: '#c8fff0', side: '#148060', emisTop: true },
      G: { h: 4, top: '#28a080', side: '#0c5040' },
      L: { h: 2, top: '#80ffe0', side: '#147058', emisTop: true },
      E: { h: 2, top: '#70f0d0', side: '#0a4030', emisTop: true, engine: true },
    }},
  ]);

  // Cruiser — long gunship, bridge block, sensor, flank guns.
  MODELS.cruiser = fromLayers([
    { rows: [
      '....KKKKK....',
      '...KWWWWWK...',
      '..KWWVVVWWK..',
      '.RKWWWWWWRK.',
      '.RKWWCCCWWKR.',
      '.KWWWWWWWWK.',
      '..KEWWWWWEK..',
      '...E.....E...',
    ], spec: {
      W: { h: 3, top: '#a0aab8', side: '#3e4858' },
      K: { h: 2, top: '#687080', side: '#2a323e' },
      V: { h: 4, top: '#141820', side: '#2a323e' },
      C: { h: 4, top: '#70e8f8', side: '#2a5060', emisTop: true },
      R: { h: 3, top: '#e84850', side: '#6a1820', emisTop: true },
      E: { h: 2, top: '#90d8f0', side: '#243040', emisTop: true, engine: true },
    }},
  ]);

  // Destroyer — angular crimson hull, weapon decks, dark bridge.
  MODELS.destroyer = fromLayers([
    { rows: [
      '.....D.....',
      '....DDD....',
      '...DDVDD...',
      '..DDRRRDD..',
      'KDDDDDDDDDK',
      'KDDDRRRDDDK',
      '.KEDDDDEK.',
      '..E.....E..',
    ], spec: {
      D: { h: 3, top: '#c85860', side: '#5a2028' },
      V: { h: 4, top: '#180c10', side: '#4a1820' },
      R: { h: 4, top: '#f05058', side: '#701820', emisTop: true },
      K: { h: 2, top: '#5a3038', side: '#301018' },
      E: { h: 2, top: '#f08860', side: '#401818', emisTop: true, engine: true },
    }},
  ]);

  MODELS.asteroid = genAsteroid(4.8, 7);
  MODELS.asteroidBig = genAsteroid(6.2, 13);
  MODELS.debris = genAsteroid(2.8, 21);

  // Boss warship — clear silhouette: armored body, core, wing guns, thrusters.
  MODELS.boss = fromLayers([
    { rows: [
      '.....KKKKKKKKK.....',
      '...KKPPPPPPPPPKK...',
      '..KPPPPPVVVPPPPPK..',
      'MKPPPPPPPPPPPPPPKM',
      'MKPPPWWPYYYWWPPPKM',
      'KKPPPPPYYYYYPPPPKK',
      '.KPPPPPPYYYPPPPPK.',
      '..KPPPPPPPPPPPPK..',
      '...RKPPPPPPPKR...',
      '....RKK.E.KKR....',
    ], spec: {
      P: { h: 3, top: '#b088c0', side: '#4a3058' },
      K: { h: 2, top: '#6a5080', side: '#302038' },
      V: { h: 4, top: '#140c18', side: '#3a2848' },
      W: { h: 4, top: '#9070a8', side: '#4a3058' },
      Y: { h: 4, top: '#ffd050', side: '#7a5010', emisTop: true },
      M: { h: 3, top: '#e848d0', side: '#6a2060', emisTop: true },
      R: { h: 3, top: '#e84858', side: '#681820', emisTop: true },
      E: { h: 2, top: '#2a1830', side: '#180c20', engine: true },
    }},
  ]);

  // Crimson Warden (gate 1) — blade wings + central eye, not a generic warship.
  MODELS.bossWarden = fromLayers([
    { rows: [
      '.......YYY.......',
      '....RRKYYYKRR....',
      '...RKKPPYPPKKR...',
      '..RKPPPVVVPPPKR..',
      '.RKPPPWWWWWPPPRK.',
      'RRKPPPWWWWWPPPKRR',
      '.RKPPPPVCVPPPPKR.',
      '..RKPPP...PPPKR..',
      '...RKE.....EKR...',
    ].map(r => padRow(r, 17)), spec: {
      P: { h: 3, top: '#c05870', side: '#4a1828' },
      K: { h: 2, top: '#7a3048', side: '#301018' },
      R: { h: 2, top: '#e84860', side: '#681020', emisTop: true },
      W: { h: 4, top: '#d87890', side: '#5a2030' },
      V: { h: 2, top: '#180810', side: '#200810' },
      Y: { h: 4, top: '#ffe0a0', side: '#8a5018', emisTop: true },
      C: { h: 5, top: '#fff0d0', side: '#a04030', emisTop: true },
      E: { h: 2, top: '#ff80a0', side: '#401018', emisTop: true, engine: true },
    }},
  ]);

  // Power-up crystal — simple diamond gem (tintable). Fallback + gem drop.
  MODELS.crystal = fromLayers([
    { rows: [
      '.a.',
      'aba',
      '.a.',
    ], spec: {
      a: { z0: 1, h: 2, top: '#80c8f0', side: '#286080' },
      b: { h: 4, top: '#e8f8ff', side: '#4890c0', emisTop: true },
    }},
  ]);

  // ── Distinctive power-up silhouettes (live spin; retint per kind color) ──
  // Cannon: stub barrel + breech
  MODELS.puCannon = fromLayers([
    { rows: ['.K.', 'BBB', 'BEB', '.B.'], spec: {
      K: { h: 2, top: '#cfeaff', side: '#386080' },
      B: { h: 2, top: '#9fe9ff', side: '#286080' },
      E: { h: 3, top: '#ffffff', side: '#4890c0', emisTop: true },
    }},
  ]);
  // Spread: fan muzzle
  MODELS.puSpread = fromLayers([
    { rows: ['Y.Y', '.Y.', 'YYY', '.K.'], spec: {
      Y: { h: 2, top: '#ffe080', side: '#906018' },
      K: { h: 2, top: '#ffd24a', side: '#805010' },
    }},
  ]);
  // Laser: tall thin core
  MODELS.puLaser = fromLayers([
    { rows: ['.M.', '.M.', 'MMM', '.K.'], spec: {
      M: { h: 3, top: '#ff9adf', side: '#801848', emisTop: true },
      K: { h: 2, top: '#ff5bd0', side: '#601038' },
    }},
  ]);
  // Rail slug
  MODELS.puRail = fromLayers([
    { rows: ['.C.', 'CCC', 'CKC', '.C.'], spec: {
      C: { h: 2, top: '#a8f0ff', side: '#286888' },
      K: { h: 4, top: '#ffffff', side: '#48b0d0', emisTop: true },
    }},
  ]);
  // Pulse pods
  MODELS.puPulse = fromLayers([
    { rows: ['P.P', '.K.', 'P.P'], spec: {
      P: { h: 3, top: '#ffb0ef', side: '#802060', emisTop: true },
      K: { h: 2, top: '#ff8adf', side: '#601848' },
    }},
  ]);
  // Shield plate
  MODELS.puShield = fromLayers([
    { rows: ['.G.', 'GGG', 'GKG', '.G.'], spec: {
      G: { h: 2, top: '#9fffd8', side: '#186848' },
      K: { h: 3, top: '#e8fff6', side: '#28a070', emisTop: true },
    }},
  ]);
  // Bomb sphere
  MODELS.puBomb = fromLayers([
    { rows: ['.F.', 'MMM', 'MKM', '.M.'], spec: {
      F: { h: 2, top: '#ffe080', side: '#c04010', emisTop: true },
      M: { h: 3, top: '#d0a0ff', side: '#482068' },
      K: { h: 3, top: '#ff4adf', side: '#681848', emisTop: true },
    }},
  ]);
  // Barrier hex core
  MODELS.puBarrier = fromLayers([
    { rows: ['.G.', 'GKG', '.G.'], spec: {
      G: { h: 2, top: '#9fffd0', side: '#186848' },
      K: { h: 4, top: '#e8fff8', side: '#28c080', emisTop: true },
    }},
  ]);
  // Credit coin (scrap / score)
  MODELS.puCoin = fromLayers([
    { rows: ['.Y.', 'YKY', '.Y.'], spec: {
      Y: { h: 2, top: '#ffe080', side: '#906018' },
      K: { h: 3, top: '#fff2b0', side: '#c08020', emisTop: true },
    }},
  ]);
  // Fuel canister
  MODELS.puFuel = fromLayers([
    { rows: ['.N.', 'OOO', 'OFO', 'OOO', '.O.'], spec: {
      N: { h: 2, top: '#c0c8d0', side: '#404850' },
      O: { h: 2, top: '#ffb040', side: '#904010' },
      F: { h: 3, top: '#fff0b0', side: '#c06018', emisTop: true },
    }},
  ]);
  // Overdrive bolt crystal
  MODELS.puBolt = fromLayers([
    { rows: ['.Y.', 'YKY', '.Y.', 'Y.Y'], spec: {
      Y: { h: 2, top: '#ffe080', side: '#c06010' },
      K: { h: 4, top: '#ffffff', side: '#ff9020', emisTop: true },
    }},
  ]);

  // Combat drones (orbit companions)
  MODELS.droneAtk = fromLayers([
    { rows: [
      '.N.',
      'WRW',
      'RER',
      '.K.',
    ], spec: {
      N: { h: 2, top: '#ffe0a0', side: '#804018', emisTop: true },
      W: { h: 2, top: '#ffc080', side: '#803018' },
      R: { h: 2, top: '#ff9a4a', side: '#702010' },
      E: { h: 3, top: '#ffffff', side: '#ff6020', emisTop: true },
      K: { h: 2, top: '#ff6020', side: '#501008', engine: true },
    }},
  ]);
  MODELS.droneDef = fromLayers([
    { rows: [
      '.G.',
      'GSG',
      'SGS',
      '.E.',
    ], spec: {
      G: { h: 2, top: '#9fffd0', side: '#186848' },
      S: { h: 3, top: '#6effc0', side: '#147050', emisTop: true },
      E: { h: 2, top: '#40e0a0', side: '#105838', engine: true },
    }},
  ]);

  function tintModel(model, hexTop, hexSide) {
    const [tr, tg, tb] = hex2rgb(hexTop);
    const [sr2, sg2, sb2] = hex2rgb(hexSide || hexTop);
    return {
      ...model, _idx: null,
      vox: model.vox.map(v => ({
        ...v, r: tr, g: tg, b: tb, rs: sr2, gs: sg2, bs: sb2,
      })),
    };
  }

  // Boss color variants: keep luminance + darker sides; emissive cores stay hot.
  function retint(model, hex) {
    const [tr, tg, tb] = hex2rgb(hex);
    return {
      ...model, _idx: null,
      vox: model.vox.map(v => {
        if (v.emis) return { ...v };
        const lTop = 0.38 + 0.9 * ((v.r + v.g + v.b) / 765);
        const baseSide = (v.rs != null) ? (v.rs + v.gs + v.bs) / 765 : (v.r + v.g + v.b) / 765 * 0.55;
        const lSide = 0.32 + 0.75 * baseSide;
        return {
          ...v,
          r: Math.min(255, tr * lTop) | 0, g: Math.min(255, tg * lTop) | 0, b: Math.min(255, tb * lTop) | 0,
          rs: Math.min(255, tr * lSide) | 0, gs: Math.min(255, tg * lSide) | 0, bs: Math.min(255, tb * lSide) | 0,
        };
      }),
    };
  }

  /**
   * The exact complement of retint(): recolours ONLY the emissive voxels — the
   * canopy glass, the wingtip lights, the thruster mouths. retint() skips those
   * on purpose (a boss variant must keep its hot core readable), which leaves
   * them free for a cosmetic slot that never touches hull paint.
   * Keeps each light's own brightness so a dim strip stays dim.
   */
  function reglow(model, hex) {
    const [tr, tg, tb] = hex2rgb(hex);
    return {
      ...model, _idx: null,
      vox: model.vox.map(v => {
        if (!v.emis) return { ...v };
        const lTop = 0.55 + 0.75 * ((v.r + v.g + v.b) / 765);
        const lSide = 0.30 + 0.70 * ((v.rs + v.gs + v.bs) / 765);
        return {
          ...v,
          r: Math.min(255, tr * lTop) | 0, g: Math.min(255, tg * lTop) | 0, b: Math.min(255, tb * lTop) | 0,
          rs: Math.min(255, tr * lSide) | 0, gs: Math.min(255, tg * lSide) | 0, bs: Math.min(255, tb * lSide) | 0,
        };
      }),
    };
  }

  function bake(model, o = {}) {
    const s = o.s || 4, pad = o.pad == null ? 10 : o.pad;
    const or = orient(o.yaw || 0, o.roll || 0, o.pitch == null ? 1.05 : o.pitch);
    const [E1, E2, E3] = or.E;
    const hw = model.w / 2 + 0.5, hl = model.l / 2 + 0.5, hh = model.h / 2 + 0.5;
    const bx = s * (hw * Math.abs(E1[0]) + hl * Math.abs(E2[0]) + hh * Math.abs(E3[0])) + pad;
    const by = s * (hw * Math.abs(E1[1]) + hl * Math.abs(E2[1]) + hh * Math.abs(E3[1])) + pad;
    const m = Math.max(bx, by);
    const c = document.createElement('canvas');
    c.width = c.height = Math.ceil(m * 2);
    draw(c.getContext('2d'), model, m, m, {
      s, yaw: o.yaw || 0, roll: o.roll || 0, pitch: o.pitch == null ? 1.05 : o.pitch,
      t: o.t || 1.7, thrust: o.thrust || 0, flameColor: o.flameColor, ignoreCam: true,
    });
    return c;
  }

  // Tank — heavy disc with raised cannon core.
  MODELS.tank = fromLayers([
    { rows: [
      '...KKKKK...',
      '..KBBBBBK..',
      '.KBWWWWWBK.',
      'KBWWWCWWWBK',
      'KBWWCCCWWBK',
      'KBWWWCWWWBK',
      '.KBWWWWWBK.',
      '..KBBBBBK..',
      '...KEKEK...',
    ], spec: {
      B: { h: 2, top: '#6090d0', side: '#243c68' },
      W: { h: 3, top: '#80b0e8', side: '#2a4880' },
      C: { h: 5, top: '#d0f0ff', side: '#2a5088', emisTop: true },
      K: { h: 2, top: '#3a506e', side: '#1a2838' },
      E: { h: 2, top: '#90c8f0', side: '#1e3048', emisTop: true, engine: true },
    }},
  ]);

  // Interceptor — red dart, canopy, wing lights.
  MODELS.interceptor = fromLayers([
    { rows: [
      '...R...',
      '..RRR..',
      '..RVR..',
      '.RRRRR.',
      'KR.R.RK',
      '..DED..',
      '...E...',
    ], spec: {
      R: { h: 3, top: '#e86868', side: '#701818' },
      V: { h: 4, top: '#280808', side: '#601010' },
      K: { h: 2, top: '#f05050', side: '#601818', emisTop: true },
      D: { h: 2, top: '#401010', side: '#200808' },
      E: { h: 2, top: '#f08050', side: '#301008', emisTop: true, engine: true },
    }},
  ]);

  // Strafer — gold right-facing arrow fighter.
  MODELS.strafer = fromLayers([
    { rows: [
      '..KK.....',
      '.TGGKK...',
      '.KGGGGKK.',
      'TGGVGGGGC',
      '.KGGGGKK.',
      '.TGGKK...',
      '..KK.....',
    ], spec: {
      G: { h: 3, top: '#e8c060', side: '#6a4810' },
      V: { h: 4, top: '#201808', side: '#5a4010' },
      C: { h: 4, top: '#fff0a0', side: '#7a5810', emisTop: true },
      T: { h: 2, top: '#f0c060', side: '#5a4010', emisTop: true, engine: true },
      K: { h: 2, top: '#a88838', side: '#4a3810' },
    }},
  ]);

  // Carrier — wide hive hull, hangar mouth, running lights.
  MODELS.carrier = fromLayers([
    { rows: [
      '...KKKKKKK...',
      '..KPPPPPPPK..',
      '.KPYPPPPPYPK.',
      'KPPPVVVVVPPPK',
      'KPPVVMMMVVPPK',
      'KPPPVVVVVPPPK',
      '.KPYPPPPPYPK.',
      '..KPPPPPPPK..',
      '...KEKEKEK...',
    ], spec: {
      P: { h: 3, top: '#8898d0', side: '#304070' },
      K: { h: 2, top: '#5868a0', side: '#243050' },
      V: { h: 3, top: '#121830', side: '#243050' },
      M: { h: 4, top: '#e858d8', side: '#502060', emisTop: true },
      Y: { h: 4, top: '#90b0ff', side: '#304878', emisTop: true },
      E: { h: 2, top: '#90b0ff', side: '#243050', emisTop: true, engine: true },
    }},
  ]);

  // Missile — slim rocket.
  MODELS.missile = fromLayers([
    { rows: [
      '.N.',
      'RRR',
      'RRR',
      'KEK',
      '.E.',
    ], spec: {
      N: { h: 3, top: '#ffe080', side: '#802018', emisTop: true },
      R: { h: 2, top: '#e86858', side: '#701818' },
      K: { h: 2, top: '#401010', side: '#200808' },
      E: { h: 2, top: '#ffd040', side: '#805010', emisTop: true, engine: true },
    }},
  ]);

  // ── Orbit modes (campaign base defense / relay assault) ──
  // Supply station — wide disc hull so the rail gun reads as riding the base.
  MODELS.station = fromLayers([
    { rows: [
      '.......KKKKKKK.......',
      '.....KKPPPPPPPKK.....',
      '....KPPPPPPPPPPPK....',
      '...KPPPVVVVVVVPPPK...',
      '..KPPPVVYYYYYVVPPPK..',
      '.KPPPVYYYYYYYYYVPPPK.',
      'KPPPVYYYELEYYYYVPPPK',
      'KPPPVYYYYYYYYYYVPPPK',
      '.KPPPVVYYYYYVVPPPK..',
      '..KPPPVVVVVVVPPPK...',
      '...KPPPPPPPPPPPK....',
      '....KKPPPPPPPKK.....',
      '......KKEKEKK.......',
    ], spec: {
      P: { h: 3, top: '#a8e8c8', side: '#2a5848' },
      K: { h: 2, top: '#70b898', side: '#1a3830' },
      V: { h: 3, top: '#183028', side: '#1a3830' },
      Y: { h: 4, top: '#7dffa0', side: '#206048', emisTop: true },
      E: { h: 2, top: '#90ffe0', side: '#1a3830', emisTop: true, engine: true },
      L: { h: 5, top: '#e0fff0', side: '#308060', emisTop: true },
    }},
    { rows: [
      '.....................',
      '.....................',
      '........TTTT.........',
      '.......T....T........',
      '.......T....T........',
      '........TTTT.........',
    ], spec: {
      T: { z0: 4, h: 2, top: '#c8ffe0', side: '#306050', emisTop: true },
    }},
    // Outer ring plates (rail seating)
    { rows: [
      'RR.................RR',
      'R...................R',
      '.....................',
      '.....................',
      '.....................',
      '.....................',
      '.....................',
      'R...................R',
      'RR.................RR',
    ], spec: {
      R: { z0: 1, h: 2, top: '#90d0b0', side: '#204838' },
    }},
  ]);

  // Research lab — larger cool blue/white science platform (assault + map thumb).
  MODELS.lab = fromLayers([
    { rows: [
      '.......KKKKKKK.......',
      '.....KKCCCCCCCKK.....',
      '....KCCVVVVVVVCCK....',
      '...KCCVYYYYYYYVCCK...',
      '..KCCVYYYYYYYYYVCCK..',
      '.KCCVYYYYYYYYYYYVCCK.',
      'KCCVYYYYEWEYYYYYVCCK',
      'KCCVYYYYYYYYYYYYVCCK',
      '.KCCVVYYYYYYYVVCCK..',
      '..KCCVVVVVVVVCCK....',
      '...KKCCCCCCCCKK.....',
      '......KKEKEKK.......',
    ].map(r => padRow(r, 21)), spec: {
      K: { h: 2, top: '#88b0d0', side: '#203848' },
      C: { h: 3, top: '#c0e0f8', side: '#305868' },
      V: { h: 3, top: '#102838', side: '#183040' },
      Y: { h: 4, top: '#80e8ff', side: '#206878', emisTop: true },
      W: { h: 5, top: '#f0fcff', side: '#40a0c0', emisTop: true },
      E: { h: 2, top: '#a0f0ff', side: '#184858', emisTop: true, engine: true },
    }},
    { rows: [
      '.....................',
      '.....................',
      '........AAAA.........',
      '.......A....A........',
      '.......A....A........',
      '........AAAA.........',
      '.....................',
      '.....................',
      '.....................',
      '.....................',
      '.....................',
      '.....................',
    ].map(r => padRow(r, 21)), spec: {
      A: { z0: 5, h: 3, top: '#e0f8ff', side: '#3080a0', emisTop: true },
    }},
  ]);

  // Jamming relay — large hostile disc + antenna spine (assault target).
  // Rows center-padded to 21 so hull is bilaterally even under pitch.
  MODELS.relay = fromLayers([
    { rows: [
      '.......KKKKKKK.......',
      '.....KKRRRRRRRKK.....',
      '....KRPPPPPPPPPRK....',
      '...KRPPPVVVVVPPPRK...',
      '..KRPPPVYYYYYVPPPRK..',
      '.KRPPPVYYYYYYYYVPPRK.',
      'KRPPPVYYYELEYYYYVPPRK',
      'KRPPPVYYYYYYYYYVPPPRK',
      '.KRPPPVVYYYYYVVPPPRK.',
      '..KRPPPVVVVVVPPPRK...',
      '...KRPPPPPPPPPPRK....',
      '....KKRRRRRRRKK......',
      '......KKEKEKK.......',
    ].map(r => padRow(r, 21)), spec: {
      R: { h: 2, top: '#ff8090', side: '#601828' },
      P: { h: 3, top: '#d06070', side: '#401018' },
      K: { h: 2, top: '#803040', side: '#300810' },
      V: { h: 3, top: '#200810', side: '#300810' },
      Y: { h: 4, top: '#ffd24a', side: '#804018', emisTop: true },
      E: { h: 2, top: '#ff6080', side: '#401018', emisTop: true, engine: true },
      L: { h: 5, top: '#ffe8a0', side: '#a03040', emisTop: true },
    }},
    // Antenna / jammer mast (centered ring)
    { rows: [
      '.....................',
      '.....................',
      '........AAAA.........',
      '.......A....A........',
      '.......A....A........',
      '........AAAA.........',
      '.....................',
      '.....................',
      '.....................',
      '.....................',
      '.....................',
      '.....................',
      '.....................',
    ].map(r => padRow(r, 21)), spec: {
      A: { z0: 4, h: 3, top: '#ffb0c0', side: '#701828', emisTop: true },
    }},
    // Outer armor plates — symmetric corners
    { rows: [
      'RR.................RR',
      'R...................R',
      '.....................',
      '.....................',
      '.....................',
      '.....................',
      '.....................',
      '.....................',
      '.....................',
      '.....................',
      '.....................',
      'R...................R',
      'RR.................RR',
    ].map(r => padRow(r, 21)), spec: {
      R: { z0: 1, h: 2, top: '#e07080', side: '#401018' },
    }},
  ]);

  // Hostile rim turrets (assault) — red palette, distinct from player defense guns.
  MODELS.enemyTurret = fromLayers([
    { rows: [
      '..N..',
      '.NNN.',
      'WWWWW',
      'WPPPW',
      '.KEK.',
    ], spec: {
      N: { h: 3, top: '#ffc070', side: '#803018', emisTop: true },
      W: { h: 2, top: '#a06060', side: '#401820' },
      P: { h: 3, top: '#d07070', side: '#502020' },
      K: { h: 2, top: '#603030', side: '#201010' },
      E: { h: 2, top: '#ff8060', side: '#602018', emisTop: true, engine: true },
    }},
  ]);
  MODELS.enemyTurretHeavy = fromLayers([
    { rows: [
      'N...N',
      'NN.NN',
      'WWWWW',
      'WPPPW',
      'KKEKK',
    ], spec: {
      N: { h: 3, top: '#ffb060', side: '#803020', emisTop: true },
      W: { h: 2, top: '#a07050', side: '#402018' },
      P: { h: 3, top: '#c08060', side: '#503020' },
      K: { h: 2, top: '#604030', side: '#281810' },
      E: { h: 2, top: '#ff9040', side: '#603018', emisTop: true, engine: true },
    }},
  ]);
  MODELS.enemyTurretPulse = fromLayers([
    { rows: [
      '.N.N.',
      'NYYYN',
      'WMPMW',
      'WPPPW',
      '.KEK.',
    ], spec: {
      N: { h: 3, top: '#ffa0c0', side: '#602038', emisTop: true },
      Y: { h: 2, top: '#ff80b0', side: '#501828', emisTop: true },
      M: { h: 4, top: '#ffe8a0', side: '#806020', emisTop: true },
      W: { h: 2, top: '#a06078', side: '#381828' },
      P: { h: 3, top: '#c07088', side: '#402028' },
      K: { h: 2, top: '#503040', side: '#201018' },
      E: { h: 2, top: '#ff70a0', side: '#502028', emisTop: true, engine: true },
    }},
  ]);

  // Relay socket / weak point — small glowing node on the rim.
  MODELS.relaySocket = fromLayers([
    { rows: [
      '.KKK.',
      'KYYYK',
      'KYMYK',
      'KYYYK',
      '.KKK.',
    ], spec: {
      K: { h: 2, top: '#ff7088', side: '#501018' },
      Y: { h: 3, top: '#ffd24a', side: '#804020', emisTop: true },
      M: { h: 4, top: '#fff0c0', side: '#a04030', emisTop: true },
    }},
  ]);

  // Rail turret — SENTINEL default (base defense crown seat).
  MODELS.turret = fromLayers([
    { rows: [
      '..N..',
      '.NNN.',
      'WWWWW',
      'WPPPW',
      '.KEK.',
    ], spec: {
      N: { h: 3, top: '#ffe080', side: '#806020', emisTop: true },
      W: { h: 2, top: '#90b0a0', side: '#304840' },
      P: { h: 3, top: '#b8e8d0', side: '#2a5848' },
      K: { h: 2, top: '#506860', side: '#1a3028' },
      E: { h: 2, top: '#7dffa0', side: '#206048', emisTop: true, engine: true },
    }},
  ]);

  // FLAK — wide dual barrels, bulkier base (scatter pattern).
  MODELS.turretFlak = fromLayers([
    { rows: [
      'N...N',
      'NN.NN',
      'WWWWW',
      'WPPPW',
      'KKEKK',
    ], spec: {
      N: { h: 3, top: '#ffb070', side: '#804028', emisTop: true },
      W: { h: 2, top: '#a89870', side: '#403828' },
      P: { h: 3, top: '#d0c090', side: '#504830' },
      K: { h: 2, top: '#605840', side: '#282418' },
      E: { h: 2, top: '#ff9040', side: '#603018', emisTop: true, engine: true },
    }},
  ]);

  // LANCE — long single rail, heavy rear mass.
  MODELS.turretLance = fromLayers([
    { rows: [
      '..N..',
      '..N..',
      '..N..',
      '.WWW.',
      'WPPPW',
      'KKEKK',
    ], spec: {
      N: { h: 2, top: '#a8e8ff', side: '#285868', emisTop: true },
      W: { h: 3, top: '#7088a0', side: '#283848' },
      P: { h: 4, top: '#90a8c0', side: '#304858' },
      K: { h: 2, top: '#485868', side: '#182028' },
      E: { h: 2, top: '#60d0ff', side: '#184868', emisTop: true, engine: true },
    }},
  ]);

  // PULSE — twin energy pods + crystal core.
  MODELS.turretPulse = fromLayers([
    { rows: [
      '.N.N.',
      'NYYYN',
      'WMPMW',
      'WPPPW',
      '.KEK.',
    ], spec: {
      N: { h: 3, top: '#e0a0ff', side: '#502868', emisTop: true },
      Y: { h: 2, top: '#c080ff', side: '#402058', emisTop: true },
      M: { h: 4, top: '#fff0c0', side: '#806020', emisTop: true },
      W: { h: 2, top: '#8870a8', side: '#382848' },
      P: { h: 3, top: '#a090c0', side: '#403058' },
      K: { h: 2, top: '#504060', side: '#201828' },
      E: { h: 2, top: '#d080ff', side: '#402060', emisTop: true, engine: true },
    }},
  ]);

  // Hive Voice (gate 2) — organic maw + sac mounts, not a green ball.
  MODELS.bossHive = fromLayers([
    { rows: [
      '.....MMMMM.....',
      '...KKPPPPPKK...',
      '..KPPGPPPGGPK..',
      '.KPPPPVVVPPPPK.',
      'KPPPPVYYYVPPPPK',
      '.KPPPPVVVPPPPK.',
      '..KPPGPPPGGPK..',
      '...KKPPPPPKK...',
      '.....KEKEK.....',
    ].map(r => padRow(r, 17)), spec: {
      P: { h: 3, top: '#4cb868', side: '#1e4a28' },
      K: { h: 2, top: '#2e7040', side: '#14301c' },
      V: { h: 3, top: '#0c180e', side: '#142818' },
      Y: { h: 5, top: '#d8ff70', side: '#4a6810', emisTop: true },
      G: { h: 4, top: '#1a3018', side: '#0c180e' },
      M: { h: 2, top: '#6ae878', side: '#245828', emisTop: true },
      E: { h: 2, top: '#9bff7d', side: '#1a3820', emisTop: true, engine: true },
    }},
  ]);

  // Round hive boss.
  MODELS.bossRound = fromLayers([
    { rows: [
      '.....KKKKKKK.....',
      '...KKPPPPPPPKK...',
      '..KPPPMPPPMPPPK..',
      'KPPPPPVVVVVPPPPK',
      'KPPPPVYYYYYVPPPK',
      'KPPPPPVVVVVPPPPK',
      '..KPPPMPPPMPPPK..',
      '...KKPPPPPPPKK...',
      '.....KKKKKKK.....',
    ], spec: {
      P: { h: 3, top: '#90d080', side: '#2e5830' },
      K: { h: 2, top: '#588050', side: '#1e3820' },
      V: { h: 3, top: '#1a2818', side: '#2a4028' },
      Y: { h: 4, top: '#ffe050', side: '#6a5010', emisTop: true },
      M: { h: 4, top: '#e850c8', side: '#502050', emisTop: true },
    }},
  ]);

  // Orb station boss.
  MODELS.bossOrb = fromLayers([
    { rows: [
      '......KKK......',
      '....KKPPPKK....',
      '...KPPPPPPPK...',
      '..KPPPVVVPPPK..',
      '.KPPPVYYYVPPK.',
      'KKPPPVYYYYVPPKK',
      '.KPPPVYYYVPPK.',
      '..KPPPVVVPPPK..',
      '...KPPPPPPPK...',
      '....KKPPPKK....',
      '......KKK......',
    ], spec: {
      P: { h: 3, top: '#88a0c8', side: '#304060' },
      K: { h: 2, top: '#587098', side: '#243048' },
      V: { h: 4, top: '#1a2438', side: '#283850' },
      Y: { h: 4, top: '#ffd050', side: '#6a5010', emisTop: true },
    }},
  ]);

  MODELS.bossRock = genAsteroid(7.4, 31);
  (() => {
    const m = MODELS.bossRock;
    let top = -99; for (const v of m.vox) top = Math.max(top, v.z);
    for (const v of m.vox) {
      if (v.z >= top - 1.2 && v.x * v.x + v.y * v.y < 7) {
        v.emis = true; v.r = 255; v.g = 200; v.b = 70;
        v.rs = 180; v.gs = 100; v.bs = 20;
      }
    }
  })();

  // Star fortress.
  MODELS.bossStar = fromLayers([
    { rows: [
      '.......Y.......',
      '......KPK......',
      '.....KPPPK.....',
      '..Y..KPPPK..Y..',
      '.KPK.KPPPK.KPK.',
      '...KPPPYPPPK...',
      'YKPPPPYCYPPPPKY',
      '...KPPPYPPPK...',
      '.KPK.KPPPK.KPK.',
      '..Y..KPPPK..Y..',
      '.....KPPPK.....',
      '......KPK......',
      '.......Y.......',
    ], spec: {
      P: { h: 3, top: '#a090d0', side: '#403068' },
      K: { h: 2, top: '#7060a0', side: '#302850' },
      Y: { h: 4, top: '#ffd050', side: '#6a5010', emisTop: true },
      C: { h: 5, top: '#fff0b0', side: '#8a6010', emisTop: true },
    }},
  ]);

  // Cross battleship.
  MODELS.bossCross = fromLayers([
    { rows: [
      '......KKK......',
      '.....KPPPK.....',
      '.....PPVPP.....',
      '..KKKPPPPPKKK..',
      '.KPPPPPPPPPPPK.',
      'KRPPPPCCCPPPPRK',
      'KRPPPCCCCCPPPRK',
      'KRPPPPCCCPPPPRK',
      '.KPPPPPPPPPPPK.',
      '..KKKPPPPPKKK..',
      '.....PPVPP.....',
      '.....KPPPK.....',
      '......KEK......',
      '.......E.......',
    ], spec: {
      P: { h: 3, top: '#9098b0', side: '#383e50' },
      K: { h: 2, top: '#606878', side: '#282c38' },
      V: { h: 4, top: '#12161e', side: '#282c38' },
      C: { h: 4, top: '#ffd050', side: '#6a5010', emisTop: true },
      R: { h: 3, top: '#e84850', side: '#681820', emisTop: true },
      E: { h: 2, top: '#80d0f0', side: '#283848', emisTop: true, engine: true },
    }},
  ]);

  // Privateer — galleon hull (gate 3). Bow (row 0) faces the player after yaw π.
  // Dark wood + gold prow, bronze casemates, raised sail so batteries read as mounts.
  MODELS.bossSail = fromLayers([
    { rows: [
      '.............F.............',
      '..........KKPPPKK..........',
      '........KKPPPPPPPKK........',
      '....WWKPPG.PPPPP.GPPKWW....',
      '..WWKPG.............GPKWW..',
      '...WKPPPPPVYYYYYVPPPPPKW...',
      '...WKPPPPPPYYYYYYPPPPPKW...',
      '...WKPPPPPVYYYYYVPPPPPKW...',
      '....WWKPPPPPVVVPPPPPKWW....',
      '......WWEEKPPPPPKEEWW......',
      '.........EE.....EE.........',
    ].map(r => padRow(r, 27)), spec: {
      P: { h: 3, top: '#b89068', side: '#4a3220' },
      K: { h: 2, top: '#7a5a38', side: '#2e1e12' },
      V: { h: 2, top: '#1c1410', side: '#100c08' },
      Y: { h: 3, top: '#6a5030', side: '#3a2818' },
      G: { h: 2, top: '#1a1008', side: '#100804' },
      W: { h: 2, top: '#c8a060', side: '#5a4020' },
      F: { h: 4, top: '#ffe080', side: '#8a5810', emisTop: true },
      E: { h: 2, top: '#80d0f0', side: '#283848', emisTop: true, engine: true },
    }},
    { oy: 4, rows: [
      '...........YYYYY...........',
      '..........YYYYYYY..........',
      '.........Y.YYYYY.Y.........',
      '..........YYYYYYY..........',
      '...........YYYYY...........',
      '............MMM............',
    ].map(r => padRow(r, 27)), spec: {
      Y: { z0: 4, h: 5, top: '#fff2c4', side: '#8a6830', emisTop: true },
      M: { z0: 3, h: 6, top: '#6a4e2c', side: '#3a2814' },
    }},
    { rows: [
      '............LLL............',
      '...........L...L...........',
    ].map(r => padRow(r, 27)), spec: {
      L: { z0: 5, h: 2, top: '#ffe8a0', side: '#8a5010', emisTop: true },
    }},
    { rows: [
      '...........................',
      '...........................',
      '...........................',
      '..........B.....B..........',
      '......B.............B......',
    ].map(r => padRow(r, 27)), spec: {
      B: { z0: 2, h: 3, top: '#e8b858', side: '#6a4010', emisTop: true },
    }},
  ]);

  // Casemate cannon for the privateer — bronze muzzle along −y (toward player after aim yaw).
  MODELS.sailCannon = fromLayers([
    { rows: [
      '.NNN.',
      'NBBBN',
      'NBOBN',
      '.KKK.',
      '.KKK.',
    ], spec: {
      N: { h: 3, top: '#ffe08a', side: '#7a5018', emisTop: true },
      B: { h: 3, top: '#c89040', side: '#5a3410' },
      O: { h: 2, top: '#1a1008', side: '#100804' },
      K: { h: 2, top: '#5a4030', side: '#2a1810' },
    }},
  ]);

  // Silo drop-bomb — fat warhead, dark band, fuse tip (gate 5).
  MODELS.siloBomb = fromLayers([
    { rows: [
      '.N.',
      'RRR',
      'RBR',
      'RRR',
      'KKK',
      '.F.',
    ], spec: {
      N: { h: 3, top: '#ffe8a0', side: '#8a5010', emisTop: true },
      R: { h: 4, top: '#d04048', side: '#581018' },
      B: { h: 3, top: '#1a1010', side: '#100808' },
      K: { h: 2, top: '#687078', side: '#282c30' },
      F: { h: 2, top: '#ff9040', side: '#602010', emisTop: true, engine: true },
    }},
  ]);

  // Heliot (gate 4) — cracked obsidian sun, magma core, corona spikes.
  MODELS.bossHeliot = fromLayers([
    { rows: [
      '..S.....S.....S..',
      '......KKKKK......',
      '....KKPPPPPKK....',
      '.S.KPP.....PPK.S.',
      '..KPP.......PPK..',
      '.KPP.........PPK.',
      'SPP...........PPS',
      '.KPP.........PPK.',
      '..KPP.......PPK..',
      '.S.KPP.....PPK.S.',
      '....KKPPPPPKK....',
      '......KKEKK......',
      '..S...........S..',
    ].map(r => padRow(r, 19)), spec: {
      P: { h: 3, top: '#7a3a22', side: '#2e140c' },
      K: { h: 2, top: '#4a2214', side: '#1a0c08' },
      S: { h: 4, top: '#ffb040', side: '#8a2808', emisTop: true },
      E: { h: 2, top: '#ff6020', side: '#501008', emisTop: true, engine: true },
    }},
    { oy: 3, rows: [
      '.......YYYYY.......',
      '......YYYYYYY......',
      '.....YYYCCCYYY.....',
      '....YYYCCHCCYYY....',
      '.....YYYCCCYYY.....',
      '......YYYYYYY......',
      '.......YYYYY.......',
    ].map(r => padRow(r, 19)), spec: {
      Y: { z0: 2, h: 4, top: '#ff7a28', side: '#801808', emisTop: true },
      C: { z0: 3, h: 5, top: '#ffe060', side: '#a83808', emisTop: true },
      H: { z0: 4, h: 5, top: '#fff4c0', side: '#c05010', emisTop: true },
    }},
  ]);
  MODELS.bossLava = MODELS.bossHeliot;

  // Silo (gate 5) — crypt launcher: hull, side tubes, ventral bomb bay.
  MODELS.bossSilo = fromLayers([
    { rows: [
      '........KKKKK........',
      '......KKPPPPPKK......',
      '....KKPPTVVVTPPKK....',
      '...KPPTTVVVVVTTPPK...',
      '..KPPTVVYYYYYVVTTPK..',
      '.KPTVVYYYYYYYYYVVTPK.',
      'KPPTVYYYCBLBCYYYYTPPK',
      '.KPTVVYYYYYYYYYVVTPK.',
      '..KPPTVVYYYYYVVTTPK..',
      '...KPPTTVVVVVTTPPK...',
      '....KKPPTVVVTPPKK....',
      '......KKPPPPPKK......',
      '........KKEKK........',
    ].map(r => padRow(r, 21)), spec: {
      P: { h: 3, top: '#6a2030', side: '#280810' },
      K: { h: 2, top: '#401018', side: '#180408' },
      T: { h: 4, top: '#c07040', side: '#502010', emisTop: true },
      V: { h: 3, top: '#180408', side: '#200408' },
      Y: { h: 4, top: '#ff5030', side: '#601010', emisTop: true },
      C: { z0: 2, h: 5, top: '#ffc070', side: '#801820', emisTop: true },
      B: { z0: 1, h: 3, top: '#1a0808', side: '#100404' },
      L: { z0: 3, h: 5, top: '#ffe0a0', side: '#a02818', emisTop: true },
      E: { h: 2, top: '#ff3040', side: '#400810', emisTop: true, engine: true },
    }},
    { rows: [
      'T...................T',
      'TT.................TT',
      '......................',
      '......................',
      '......................',
      '......................',
      '......................',
      '......................',
      '......................',
      '......................',
      '......................',
      'TT.................TT',
      'T...................T',
    ].map(r => padRow(r, 21)), spec: {
      T: { z0: 2, h: 4, top: '#e08040', side: '#602010', emisTop: true },
    }},
  ]);

  /* ============================================================
   * VOXEL TEXT — rasterize lines, extrude each pixel to a RANDOM height
   * (YouTube-voxel look): a relief of cubes at varying depths. lines =
   * [{text, color}]. Returns a Vox model (front plane faces the camera).
   * ========================================================== */
  function textModel(lines, o = {}) {
    const fpx = o.fontPx || 10, maxH = o.maxH || 5, minH = o.minH || 1;
    const cvs = document.createElement('canvas'); let x = cvs.getContext('2d');
    x.font = `bold ${fpx}px "Trebuchet MS",sans-serif`;
    const widths = lines.map(l => Math.ceil(x.measureText(l.text).width));
    const pw = Math.max(1, ...widths) + 2, ph = fpx + 3, H = ph * lines.length;
    cvs.width = pw; cvs.height = H; x = cvs.getContext('2d');
    x.font = `bold ${fpx}px "Trebuchet MS",sans-serif`; x.textBaseline = 'top'; x.fillStyle = '#fff';
    lines.forEach((l, i) => x.fillText(l.text, Math.floor((pw - widths[i]) / 2), i * ph + 1));
    const data = x.getImageData(0, 0, pw, H).data;
    const grid = new Set(), cells = [];
    const hAt = (px, py) => minH + (((px * 73856093) ^ (py * 19349663)) >>> 0) % (maxH - minH + 1);
    for (let py = 0; py < H; py++) for (let px = 0; px < pw; px++) {
      if (data[(py * pw + px) * 4 + 3] < 120) continue;
      const line = Math.min(lines.length - 1, Math.floor(py / ph));
      const h = hAt(px, py);
      cells.push({ px, py, h, col: lines[line].color });
      for (let z = 0; z < h; z++) grid.add(px + ',' + py + ',' + z);
    }
    const cz = maxH / 2;
    const vox = [];
    for (const c of cells) {
      const [r, g, b] = hex2rgb(c.col);
      for (let z = 0; z < c.h; z++) {
        let mask = 0;
        if (!grid.has((c.px + 1) + ',' + c.py + ',' + z)) mask |= 1;
        if (!grid.has((c.px - 1) + ',' + c.py + ',' + z)) mask |= 2;
        if (!grid.has(c.px + ',' + (c.py + 1) + ',' + z)) mask |= 4;
        if (!grid.has(c.px + ',' + (c.py - 1) + ',' + z)) mask |= 8;
        if (!grid.has(c.px + ',' + c.py + ',' + (z + 1))) mask |= 16;
        if (!grid.has(c.px + ',' + c.py + ',' + (z - 1))) mask |= 32;
        if (mask === 0) continue;
        vox.push({ x: c.px - pw / 2 + 0.5, y: c.py - H / 2 + 0.5, z: z - cz + 0.5,
          r, g, b, nl: (c.px + c.py + z) % 3, emis: false, mask });
      }
    }
    return { vox, w: pw, l: H, h: maxH, engines: [] };
  }

  // Render voxel HEADING as a near-head-on mosaic of cubes that POP toward the
  // camera at varying depths (YouTube-voxel look): readable letters made of
  // beveled cubes, each offset up-left + shadowed by its depth. Cached raster.
  const textCache = {};
  function textPixels(lines, fpx) {
    const c = document.createElement('canvas'); let x = c.getContext('2d');
    x.font = `bold ${fpx}px "Trebuchet MS",sans-serif`;
    const widths = lines.map(l => Math.ceil(x.measureText(l.text).width));
    const pw = Math.max(1, ...widths) + 2, ph = fpx + 3, H = ph * lines.length;
    c.width = pw; c.height = H; x = c.getContext('2d');
    x.font = `bold ${fpx}px "Trebuchet MS",sans-serif`; x.textBaseline = 'top'; x.fillStyle = '#fff';
    lines.forEach((l, i) => x.fillText(l.text, Math.floor((pw - widths[i]) / 2), i * ph + 1));
    return { data: x.getImageData(0, 0, pw, H).data, pw, ph, H };
  }
  function drawText(cnv, lines, o = {}) {
    if (!cnv) return;
    const ctx = cnv.getContext('2d');
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    const fpx = o.fontPx || 12, maxH = o.maxH || 4, minH = o.minH || 1, pad = o.pad || 8;
    const { data, pw, ph, H } = textPixels(lines, fpx);
    const span = Math.max(1, maxH - minH);
    const dep = (px, py) => (((px * 73856093) ^ (py * 19349663)) >>> 0) % (span + 1) / span;   // 0..1
    // RIGID grid (letters stay crisp); depth shown by brightness + a top cap.
    const cap = 0.42;                                          // max top-cap height as fraction of cell
    const cell = Math.max(3, Math.min((cnv.width - pad * 2) / pw, (cnv.height - pad * 2) / (H + cap)));
    const gx = (cnv.width - pw * cell) / 2, gy = (cnv.height - (H + cap) * cell) / 2 + cap * cell;
    const cols = lines.map(l => hex2rgb(l.color));
    for (let py = 0; py < H; py++) for (let px = 0; px < pw; px++) {
      if (data[(py * pw + px) * 4 + 3] < 120) continue;
      const d = dep(px, py), line = Math.min(lines.length - 1, Math.floor(py / ph));
      const [r, g, b] = cols[line];
      const dx = gx + px * cell, dy = gy + py * cell, ch = d * cap * cell;
      const face = t => `rgb(${Math.min(255, r * t) | 0},${Math.min(255, g * t) | 0},${Math.min(255, b * t) | 0})`;
      const e = Math.max(1.5, cell * 0.2);
      // top cap (raised roof of the cube: taller = more relief), drawn above the face
      if (ch > 0.5) { ctx.fillStyle = face(1.55); ctx.fillRect(dx, dy - ch, cell, ch + 1); }
      // front face with bevel
      const k = 0.8 + d * 0.35;
      ctx.fillStyle = face(k); ctx.fillRect(dx, dy, cell, cell);
      ctx.fillStyle = face(k * 1.42); ctx.fillRect(dx, dy, cell, e);           // top light
      ctx.fillStyle = face(k * 1.2); ctx.fillRect(dx, dy, e, cell);            // left light
      ctx.fillStyle = face(k * 0.5); ctx.fillRect(dx, dy + cell - e, cell, e); // bottom dark
      ctx.fillStyle = face(k * 0.66); ctx.fillRect(dx + cell - e, dy, e, cell); // right dark
      ctx.strokeStyle = 'rgba(4,8,22,0.5)'; ctx.lineWidth = 1;
      ctx.strokeRect(dx + 0.5, dy - (ch > 0.5 ? ch : 0) + 0.5, cell - 1, cell - 1 + (ch > 0.5 ? ch : 0));
    }
  }

  return { fromTopDown, fromLayers, genAsteroid, draw, orient, groundShadow, cubeFrames, boom, boomUpdate, boomDraw,
    setViewCam, MODELS, SHIP_PALS, SHIP_FORMS, buildShip, tintModel, retint, reglow, bake, textModel, drawText,
    _stats: {
      start() { STATS.on = true; this.reset(); },
      stop() { STATS.on = false; },
      reset() { STATS.calls = STATS.voxels = STATS.faces = STATS.cacheHit = STATS.cacheMiss = 0; },
      read() { return { calls: STATS.calls, voxels: STATS.voxels, faces: STATS.faces }; },
    } };
})();
