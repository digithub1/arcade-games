/* ============================================================
 * engine.js — canvas, loop, input, audio, pooling, particles, stars
 * Shared via the global `Engine` object. No external assets.
 * ========================================================== */
const Engine = (() => {
  // Logical resolution (game is rendered at this size, then scaled to fit).
  // On phones the logical HEIGHT adapts once at boot to the real screen aspect
  // (up to 1040) so the game fills the display edge-to-edge with NO deformation
  // and NO letterboxing. Desktop keeps the classic 480×800 portrait box.
  const W = 480;
  const H = (() => {
    const vw = window.innerWidth || 0, vh = window.innerHeight || 0;
    if (vw > 0 && vh > 0 && vw <= 820 && vh > vw) {
      return Math.max(800, Math.min(1040, Math.round(480 * vh / vw)));
    }
    return 800;
  })();

  const canvas = document.getElementById('game');
  const ctx = canvas.getContext('2d');

  /* ---------- responsive scaling (keep 480x800 aspect) ---------- */
  /**
   * @param forcedVh height to fit into, when the caller knows better than
   *   `innerHeight` does. Only the drift guard passes it: on a phone
   *   `innerHeight` normally IS the visible height, but while the address bar
   *   animates it can disagree, and sizing the frame to the stale number is
   *   what leaves it hanging outside the screen.
   */
  function resize(forcedVh) {
    const vw = window.innerWidth || document.documentElement.clientWidth || W;
    const vh = forcedVh || window.innerHeight || document.documentElement.clientHeight || H;
    // On phones the game should fill the screen edge-to-edge (no boxed "window"):
    // drop the padding + frame chrome and let it take the full width.
    const mobile = vw <= 820;
    const pad = mobile ? 0 : 20;
    const aw = Math.max(W * 0.5, vw - pad), ah = Math.max(H * 0.5, vh - pad);
    const scale = Math.min(aw / W, ah / H);
    canvas.width = W;                       // logical resolution stays 480×800
    canvas.height = H;
    // Size the frame (canvas + all overlays fill it at 100%).
    const frame = document.getElementById('game-frame');
    if (frame) {
      const cssW = Math.round(W * scale);
      const cssH = Math.round(H * scale);
      frame.style.width = cssW + 'px';
      frame.style.height = cssH + 'px';
      frame.classList.toggle('fill', mobile);   // CSS strips border/shadow/radius
      // Combat HUD is authored for the 480-wide plate. On narrow phone
      // frames shrink chrome so slots / score / supers keep air between them.
      const hudK = (mobile && cssW < 480) ? Math.max(0.68, cssW / 480) : 1;
      frame.style.setProperty('--hud-k', hudK.toFixed(3));
    }
  }

  /* ---------- drift guard ----------
   *
   * Reported on a phone: after map -> hangar -> map the whole UI rides up by
   * about a tenth of the screen, the header controls go off the top, and a
   * black band appears along the bottom.
   *
   * Cause: the two viewports disagree while the browser's address bar slides.
   * The LAYOUT viewport — what `100%` and `position:absolute; inset:0` resolve
   * against — keeps the taller "bar hidden" size, while the VISUAL viewport is
   * what you can actually see. The shell then spans more than the screen and
   * the frame is centred in a box taller than the display. That route is the
   * giveaway: the hangar is the screen you scroll, scrolling retracts the bar,
   * and the map is where you notice the header is gone.
   *
   * This checks rather than converts. An earlier attempt pinned the shell to
   * the visual height ALWAYS, which quietly changed the normal layout and left
   * a permanent gap at the top of the screen — a different bug traded for the
   * first one. Nothing here touches the layout unless a drift is measured:
   * the frame's own rectangle is compared against the visible height, and only
   * when it genuinely hangs outside is the shell clamped. The moment the
   * numbers agree again, the clamp is removed and the layout goes back to CSS.
   */
  function visibleBox() {
    const vv = window.visualViewport;
    return {
      // Where the visible area STARTS inside the layout viewport. On Chrome for
      // Android this is not always zero: while the address bar animates, and
      // after any pinch, the visual viewport sits offset inside the layout one.
      top: Math.round((vv && vv.offsetTop) || 0),
      h: Math.round((vv && vv.height) || window.innerHeight
                    || document.documentElement.clientHeight || H),
    };
  }

  function fitCheck() {
    const shell = document.getElementById('game-shell');
    const frame = document.getElementById('game-frame');
    if (!shell || !frame) return false;
    // Nothing here is meant to scroll the document (html/body are
    // overflow:hidden), so any document scroll is stray and gets undone. All
    // three are reset: on iOS WebKit `window.scrollY` can read 0 while the
    // scroll actually sits on the documentElement or the body.
    if (window.scrollY || window.scrollX) window.scrollTo(0, 0);
    const de = document.documentElement, bd = document.body;
    if (de && de.scrollTop) de.scrollTop = 0;
    if (bd && bd.scrollTop) bd.scrollTop = 0;

    const vis = visibleBox();
    const want = vis.top + ':' + vis.h;
    // Already corrected for exactly this state: re-measuring would mean
    // clearing and reapplying the correction on every frame of the bar's
    // animation, which is where these events come from.
    if (shell.dataset.fit === want) return true;

    // Measure the untouched layout — a stale correction would hide the truth.
    if (shell.dataset.fit) {
      shell.style.height = '';
      shell.style.top = '';
      delete shell.dataset.fit;
      resize();
    }

    // getBoundingClientRect is in LAYOUT coordinates, so the frame has to be
    // compared against the visible WINDOW inside them — not against zero.
    // Assuming the visible area starts at y=0 was the blind spot in the first
    // version of this guard: when the bar retracts, the window slides DOWN
    // inside the layout viewport, the frame stays pinned at layout top, and the
    // result on screen is the whole UI riding up with black along the bottom —
    // with `frame.top` still reading a perfectly innocent 0.
    const r = frame.getBoundingClientRect();
    if (r.top < vis.top - 1 || r.bottom > vis.top + vis.h + 1) {
      shell.style.height = vis.h + 'px';
      // `top`, not `transform`: a transformed ancestor becomes the containing
      // block for position:fixed descendants, and the archive reader is one.
      shell.style.top = vis.top ? vis.top + 'px' : '';
      shell.dataset.fit = want;
      resize(vis.h);            // fit the frame to the box we just corrected
      return true;
    }
    return false;
  }

  // resize() is called with no argument on purpose: the guard decides whether
  // innerHeight was wrong, and it can only tell by measuring the honest layout.
  const onViewportChange = () => { resize(); fitCheck(); };
  window.addEventListener('resize', onViewportChange);
  window.addEventListener('orientationchange', onViewportChange);
  // The address bar sliding in or out fires visualViewport events and NOT a
  // window resize, so without these the drift is never noticed. Coalesced
  // through rAF: they fire on every frame of the bar's animation.
  if (window.visualViewport) {
    let pending = false;
    const onVV = () => {
      if (pending) return;
      pending = true;
      requestAnimationFrame(() => { pending = false; fitCheck(); });
    };
    window.visualViewport.addEventListener('resize', onVV);
    window.visualViewport.addEventListener('scroll', onVV);
  }
  // Coming back from the background is a classic moment for the bar state to
  // have changed without an event we were listening for.
  document.addEventListener('visibilitychange', () => { if (!document.hidden) fitCheck(); });
  // Backstop: a slow poll so the game recovers on its own within half a second
  // no matter WHAT put it into a bad state. This bug was reported twice, and
  // each report turned out to be a different mechanism — the first a stale
  // frame height, the second a visible window offset inside the layout
  // viewport. Rather than keep guessing at the next one, the check simply runs.
  // In the settled state it costs one rectangle read; while a correction is
  // applied it costs a string compare and returns.
  setInterval(fitCheck, 500);

  /* ---------- math / random helpers ---------- */
  const rand = (a, b) => a + Math.random() * (b - a);
  const randInt = (a, b) => Math.floor(rand(a, b + 1));

  // Seedable PRNG (mulberry32) — for reproducible daily-challenge layouts.
  // Returns a function producing floats in [0,1). Same seed → same sequence.
  function makeRng(seed) {
    let a = seed >>> 0;
    return function () {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  const clamp = (v, a, b) => v < a ? a : v > b ? b : v;
  const dist2 = (ax, ay, bx, by) => { const dx = ax - bx, dy = ay - by; return dx * dx + dy * dy; };
  const lerp = (a, b, t) => a + (b - a) * t;
  const TAU = Math.PI * 2;

  /* ---------- input: pointer (drag) + keyboard ---------- */
  const input = {
    px: W / 2, py: H - 140,   // pointer target position (where ship eases toward)
    dragging: false,
    focus: false,             // precision/slow mode
    keys: {},
    bombQueued: false,
    // Which gesture asked for the super, and a counter that ticks on every
    // request. The tutorial teaches a specific gesture (double tap on touch,
    // Space on a keyboard) and has to know whether the player performed THAT
    // or simply pressed the on-screen button.
    superSource: null,
    superSeq: 0,
    swipeUp: false,           // one-shot vertical gesture (orbit defense super cycle)
    swipeDown: false,
    _lastTap: 0,
    _gestDX: 0,
    _gestDY: 0,
  };

  function pointerPos(e) {
    const r = canvas.getBoundingClientRect();
    const t = e.touches ? e.touches[0] : e;
    return {
      x: clamp((t.clientX - r.left) / r.width * W, 0, W),
      y: clamp((t.clientY - r.top) / r.height * H, 0, H),
    };
  }
  function onDown(e) {
    e.preventDefault();
    input.dragging = true;
    input.focus = (e.button === 2) || (e.touches && e.touches.length > 1);
    // RELATIVE (delta) control — touch-shmup best practice: the ship follows
    // finger MOVEMENT, it never teleports to the tap point. The press only
    // anchors the gesture; px/py (the ship target) stays where the ship is.
    const p = pointerPos(e);
    input._lastX = p.x; input._lastY = p.y;
    input._gestDX = 0; input._gestDY = 0;
    // double-tap → bomb (touch)
    const now = performance.now();
    if (e.touches && now - input._lastTap < 280) {
      input.bombQueued = true;
      input.superSource = 'tap';
      input.superSeq++;
    }
    input._lastTap = now;
    Engine.audio.resume();
  }
  function onMove(e) {
    if (!input.dragging) return;
    e.preventDefault();
    const p = pointerPos(e);
    const dx = p.x - input._lastX, dy = p.y - input._lastY;
    input._gestDX += dx; input._gestDY += dy;
    const sens = 1.15;   // slight boost so crossing the field doesn't need a re-grip
    input.px = clamp(input.px + dx * sens, 0, W);
    input.py = clamp(input.py + dy * sens, 0, H);
    input._lastX = p.x; input._lastY = p.y;
  }
  function onUp() {
    // Vertical-dominant flick → super cycle (orbit defense). Threshold in canvas units.
    const ax = Math.abs(input._gestDX || 0), ay = Math.abs(input._gestDY || 0);
    if (ay > 48 && ay > ax * 1.35) {
      if (input._gestDY < 0) input.swipeUp = true;
      else input.swipeDown = true;
    }
    input.dragging = false; input.focus = false;
    input._gestDX = 0; input._gestDY = 0;
  }

  canvas.addEventListener('mousedown', onDown);
  canvas.addEventListener('mousemove', onMove);
  window.addEventListener('mouseup', onUp);
  canvas.addEventListener('contextmenu', e => e.preventDefault());
  canvas.addEventListener('touchstart', onDown, { passive: false });
  canvas.addEventListener('touchmove', onMove, { passive: false });
  canvas.addEventListener('touchend', onUp);

  window.addEventListener('keydown', e => {
    input.keys[e.code] = true;
    if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') input.focus = true;
    if (e.code === 'Space') {
      input.bombQueued = true;
      input.superSource = 'key';
      input.superSeq++;
      e.preventDefault();
    }
    if (['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Space'].includes(e.code)) e.preventDefault();
    Engine.audio.resume();
  });
  window.addEventListener('keyup', e => {
    input.keys[e.code] = false;
    if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') input.focus = false;
  });

  /* ---------- tiny WebAudio synth (procedural SFX, no files) ---------- */
  const audio = {
    ctx: null,
    enabled: true,
    master: 0.8,            // 0..1 SFX volume (from settings)
    muted: false,
    setVolume(v) { this.master = clamp(v, 0, 1); },
    setMuted(b) { this.muted = !!b; },
    gain(v) { return this.muted ? 0.00001 : v * this.master; },  // apply master/mute
    resume() {
      if (!this.ctx) { try { this.ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { this.enabled = false; } }
      if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume();
    },
    blip(freq = 440, dur = 0.08, type = 'square', vol = 0.12) {
      if (!this.enabled || !this.ctx) return;
      const t = this.ctx.currentTime;
      const o = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      o.type = type; o.frequency.setValueAtTime(freq, t);
      g.gain.setValueAtTime(this.gain(vol), t);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      o.connect(g).connect(this.ctx.destination);
      o.start(t); o.stop(t + dur);
    },
    sweep(f0, f1, dur = 0.18, type = 'sawtooth', vol = 0.12) {
      if (!this.enabled || !this.ctx) return;
      const t = this.ctx.currentTime;
      const o = this.ctx.createOscillator(), g = this.ctx.createGain();
      o.type = type;
      o.frequency.setValueAtTime(f0, t);
      o.frequency.exponentialRampToValueAtTime(f1, t + dur);
      g.gain.setValueAtTime(this.gain(vol), t);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      o.connect(g).connect(this.ctx.destination);
      o.start(t); o.stop(t + dur);
    },
    noise(dur = 0.25, vol = 0.18) {
      if (!this.enabled || !this.ctx) return;
      const t = this.ctx.currentTime;
      const buf = this.ctx.createBuffer(1, this.ctx.sampleRate * dur, this.ctx.sampleRate);
      const d = buf.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / d.length);
      const src = this.ctx.createBufferSource(); src.buffer = buf;
      const g = this.ctx.createGain(); g.gain.value = this.gain(vol);
      const f = this.ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 1200;
      src.connect(f).connect(g).connect(this.ctx.destination);
      src.start(t);
    },
    shoot()   { this.blip(880, 0.05, 'square', 0.05); },
    hit()     { this.blip(220, 0.04, 'square', 0.06); },
    explode() { this.noise(0.3, 0.2); this.sweep(180, 40, 0.3, 'sawtooth', 0.12); },
    power()   { this.blip(660, 0.08, 'sine', 0.14); setTimeout(() => this.blip(990, 0.1, 'sine', 0.14), 70); },
    bomb()    { this.sweep(800, 60, 0.6, 'sawtooth', 0.2); this.noise(0.6, 0.25); },
    boss()    { this.sweep(60, 240, 0.8, 'sawtooth', 0.2); },
    coin()    { this.blip(1320, 0.05, 'square', 0.1); setTimeout(() => this.blip(1760, 0.07, 'square', 0.1), 55); },
    // 💎 gem shard — a proper sparkling fanfare (C6-E6-G6-C7-E7 arpeggio + shimmer)
    gem()     { [1047, 1319, 1568, 2093, 2637].forEach((f, i) => setTimeout(() => this.blip(f, 0.16, 'triangle', 0.16), i * 65));
                this.sweep(500, 2600, 0.4, 'sine', 0.07); },
    revive()  { this.sweep(220, 880, 0.4, 'sine', 0.16); setTimeout(() => this.blip(1320, 0.18, 'sine', 0.14), 220); },
    magnet(i = 0) { this.blip(700 + i * 90, 0.05, 'sine', 0.09); },   // rising per-pickup chime (outro)
    gameover(){ this.sweep(440, 70, 0.7, 'sawtooth', 0.18); },
    victory() { [523, 659, 784, 1047].forEach((f, i) => setTimeout(() => this.blip(f, 0.18, 'square', 0.13), i * 130)); },
    /** Weapon fusion pickup */
    fusion() {
      this.blip(740, 0.06, 'sine', 0.12);
      setTimeout(() => this.blip(980, 0.08, 'triangle', 0.12), 50);
      setTimeout(() => this.blip(1240, 0.1, 'sine', 0.1), 110);
    },
    /** Map intel / scout reveal */
    intel() {
      this.sweep(520, 1100, 0.22, 'sine', 0.11);
      setTimeout(() => this.blip(1320, 0.07, 'triangle', 0.09), 180);
    },
    /** Soft UI deny / path closed / super CD */
    deny() { this.blip(160, 0.06, 'square', 0.07); },

    /** Systems going down (jammer bubble): power-loss dive + a burst of static. */
    jam() {
      this.sweep(720, 90, 0.42, 'sawtooth', 0.12);
      this.noise(0.35, 0.10);
      setTimeout(() => this.blip(120, 0.12, 'square', 0.09), 90);
      setTimeout(() => this.blip(96, 0.16, 'square', 0.07), 210);
    },
    /** Helm gone — a sick warble under the jam so the worse grade sounds worse. */
    helmLost() {
      this.sweep(300, 140, 0.55, 'triangle', 0.11);
      setTimeout(() => this.sweep(180, 260, 0.4, 'triangle', 0.09), 160);
      this.noise(0.5, 0.08);
    },
    /** Systems restored — the mirror of jam(), so relief is audible. */
    unjam() {
      this.sweep(140, 820, 0.3, 'sine', 0.10);
      setTimeout(() => this.blip(1180, 0.07, 'triangle', 0.09), 130);
    },
    /** Contract closed — short bounty fanfare, distinct from a stage victory. */
    bounty() {
      this.blip(660, 0.09, 'triangle', 0.13);
      setTimeout(() => this.blip(880, 0.09, 'triangle', 0.13), 90);
      setTimeout(() => this.blip(1320, 0.16, 'sine', 0.14), 190);
      setTimeout(() => this.blip(1760, 0.2, 'sine', 0.10), 300);
    },
    /** Zoom / light UI tick */
    tick() { this.blip(640, 0.035, 'sine', 0.06); },

    /**
     * Dialogue "voice" — procedural chirps per character (no samples).
     * unit10 intentionally silent (product bots stay mute).
     */
    voiceOpen(charId) {
      if (!this.enabled || !this.ctx || charId === 'unit10') return;
      const p = this._voiceProfile(charId);
      this.blip(p.base * 1.15, 0.07, p.type, p.vol * 1.1);
      setTimeout(() => this.blip(p.base * 0.92, 0.05, p.type, p.vol * 0.7), 40);
    },
    voiceTick(charId, n) {
      if (!this.enabled || !this.ctx || charId === 'unit10') return;
      const p = this._voiceProfile(charId);
      // Slight pseudo-random walk so speech isn't a flat metronome
      const wobble = 1 + Math.sin(n * 1.7) * 0.06 + Math.sin(n * 0.37) * 0.04;
      const f = p.base * wobble * (0.94 + (n % 5) * 0.02);
      this.blip(f, p.tickDur, p.type, p.vol);
      // Soft formant-ish second partial for richness (not for warlord growl)
      if (p.partial) this.blip(f * p.partial, p.tickDur * 0.7, 'sine', p.vol * 0.35);
    },
    _voiceProfile(charId) {
      switch (charId) {
        case 'nova':   return { base: 280, type: 'triangle', vol: 0.055, tickDur: 0.028, partial: 1.5 };
        case 'aria':   return { base: 520, type: 'sine',     vol: 0.045, tickDur: 0.022, partial: 2.0 };
        case 'vex':    return { base: 190, type: 'sawtooth', vol: 0.04,  tickDur: 0.032, partial: 1.25 };
        case 'warlord':return { base: 110, type: 'square',   vol: 0.05,  tickDur: 0.036, partial: 0 };
        case 'pilot':  return { base: 340, type: 'triangle', vol: 0.048, tickDur: 0.026, partial: 1.6 };
        default:       return { base: 360, type: 'sine',     vol: 0.045, tickDur: 0.025, partial: 1.5 };
      }
    },
  };

  /* ---------- object pool ---------- */
  class Pool {
    constructor(factory) { this.factory = factory; this.active = []; this.free = []; }
    spawn() {
      const o = this.free.pop() || this.factory();
      o.alive = true;
      this.active.push(o);
      return o;
    }
    // call each frame; predicate returns false to retire an object
    update(fn) {
      for (let i = this.active.length - 1; i >= 0; i--) {
        const o = this.active[i];
        if (!o.alive || fn(o) === false) {
          o.alive = false;
          this.active.splice(i, 1);
          this.free.push(o);
        }
      }
    }
    each(fn) { for (const o of this.active) fn(o); }
    clear() { while (this.active.length) this.free.push(this.active.pop()); }
  }

  /* ---------- particle system (explosions, sparks, trails) ---------- */
  const particles = new Pool(() => ({ x:0,y:0,vx:0,vy:0,life:0,max:0,r:0,color:'#fff' }));
  function burst(x, y, color, count = 14, speed = 3, size = 3) {
    for (let i = 0; i < count; i++) {
      const a = Math.random() * TAU, s = rand(0.3, 1) * speed;
      const p = particles.spawn();
      p.x = x; p.y = y; p.vx = Math.cos(a) * s; p.vy = Math.sin(a) * s;
      p.life = p.max = rand(0.3, 0.7); p.r = rand(1, size); p.color = color;
    }
  }
  function updateParticles(dt) {
    particles.update(p => {
      p.life -= dt;
      if (p.life <= 0) return false;
      p.x += p.vx; p.y += p.vy; p.vx *= 0.94; p.vy *= 0.94;
    });
  }
  function drawParticles() {
    for (const p of particles.active) {
      ctx.globalAlpha = Math.max(0, p.life / p.max);
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x - p.r, p.y - p.r, p.r * 2, p.r * 2);
    }
    ctx.globalAlpha = 1;
  }

  /* ---------- parallax starfield ---------- */
  const starLayers = [
    { stars: [], speed: 30,  size: 1, alpha: 0.4 },
    { stars: [], speed: 70,  size: 1.6, alpha: 0.7 },
    { stars: [], speed: 130, size: 2.4, alpha: 1.0 },
  ];
  for (const L of starLayers)
    for (let i = 0; i < 40; i++) L.stars.push({ x: rand(0, W), y: rand(0, H) });

  function updateStars(dt, boost = 1) {
    for (const L of starLayers)
      for (const s of L.stars) {
        s.y += L.speed * boost * dt;
        if (s.y > H) { s.y -= H; s.x = rand(0, W); }
      }
  }
  let starColor = '#cfe8ff';
  function setStarColor(c) { starColor = c || '#cfe8ff'; }
  function drawStars() {
    for (const L of starLayers) {
      ctx.globalAlpha = L.alpha;
      ctx.fillStyle = starColor;
      for (const s of L.stars) ctx.fillRect(s.x, s.y, L.size, L.size);
    }
    ctx.globalAlpha = 1;
  }

  /* ---------- screen shake ---------- */
  let shakeAmt = 0;
  // Comfort setting, cached rather than read from the profile: shake() is
  // called from every explosion, hit and boss stomp.
  let shakeOn = true;
  function setShake(on) { shakeOn = on !== false; if (!shakeOn) shakeAmt = 0; }
  function shake(a) { if (shakeOn) shakeAmt = Math.max(shakeAmt, a); }
  function applyShake() {
    if (shakeAmt <= 0.1) { shakeAmt = 0; return; }
    ctx.translate(rand(-shakeAmt, shakeAmt), rand(-shakeAmt, shakeAmt));
    shakeAmt *= 0.86;
  }

  /* ---------- playfield depth cam (2D tilt + model inclination) ----------
   * Subtle space feel + hull volume. Tuned soft: fast left/right strafe
   * must NOT whip the horizon (motion sickness). Lower amplitudes, wider
   * deadzone, slow ease, and per-frame slew caps on horizontal axes.
   */
  const cam = {
    roll: 0, panX: 0, panY: 0,
    dPitch: 0, dRoll: 0,
  };
  // Peak at full edge — soft enough not to spin, not flat.
  // Sweet spot between "dizzy" (0.04/0.14) and "too flat" (0.018/0.07).
  const CAM_SCR_ROLL = 0.024;     // ~1.4° world dutch
  const CAM_PAN_X = 8, CAM_PAN_Y = 8;
  const CAM_PITCH = 0.085;
  const CAM_MROLL = 0.09;
  const CAM_DEAD = 0.15;
  // Slow follow — lag kills "headspin" when mashing L/R.
  const CAM_SMOOTH_SCR = 0.065;
  const CAM_SMOOTH_MDL = 0.048;
  // Max change per frame (at ~60fps draw) — hard anti-whip.
  const CAM_SLEW_ROLL = 0.0020;
  const CAM_SLEW_PAN  = 0.70;
  const CAM_SLEW_MDL  = 0.0015;
  function camAxis(v) {
    // deadzone → remap → quintic ease (stays soft longer near centre)
    const a = Math.abs(v);
    if (a <= CAM_DEAD) return 0;
    const t = clamp((a - CAM_DEAD) / (1 - CAM_DEAD), 0, 1);
    const s = t * t * t * (t * (t * 6 - 15) + 10); // smootherstep
    return Math.sign(v) * s;
  }
  function slew(cur, target, maxStep) {
    const d = target - cur;
    if (d >  maxStep) return cur + maxStep;
    if (d < -maxStep) return cur - maxStep;
    return cur + d;
  }
  function updateCam(px, py, active) {
    let tScr = 0, tPanX = 0, tPanY = 0, tPitch = 0, tMRoll = 0;
    if (active) {
      const nx = camAxis(clamp((px / W - 0.5) * 2, -1, 1));
      const ny = camAxis(clamp((py / H - 0.5) * 2, -1, 1));
      tScr   = nx * CAM_SCR_ROLL;
      tPanX  = -nx * CAM_PAN_X;
      tPanY  = -ny * CAM_PAN_Y;
      tPitch =  ny * CAM_PITCH;
      tMRoll =  nx * CAM_MROLL;
    }
    const ks = CAM_SMOOTH_SCR, km = CAM_SMOOTH_MDL;
    // Ease toward target, then clamp horizontal slew (dizzy axis).
    const wantRoll = cam.roll + (tScr - cam.roll) * ks;
    const wantPanX = cam.panX + (tPanX - cam.panX) * ks;
    const wantPanY = cam.panY + (tPanY - cam.panY) * ks;
    const wantPitch = cam.dPitch + (tPitch - cam.dPitch) * km;
    const wantMRoll = cam.dRoll + (tMRoll - cam.dRoll) * km;
    cam.roll   = slew(cam.roll,   wantRoll,  CAM_SLEW_ROLL);
    cam.panX   = slew(cam.panX,   wantPanX,  CAM_SLEW_PAN);
    cam.panY   = wantPanY; // vertical pan is milder / less nauseating
    cam.dPitch = wantPitch;
    cam.dRoll  = slew(cam.dRoll,  wantMRoll, CAM_SLEW_MDL);
    if (!active && Math.abs(cam.roll) < 1e-4 && Math.abs(cam.dPitch) < 1e-4) {
      cam.roll = cam.panX = cam.panY = cam.dPitch = cam.dRoll = 0;
    }
  }
  function resetCam() {
    cam.roll = cam.panX = cam.panY = cam.dPitch = cam.dRoll = 0;
    if (typeof Vox !== 'undefined' && Vox.setViewCam) Vox.setViewCam(0, 0);
  }
  function applyCam() {
    if (Math.abs(cam.roll) < 1e-5 && Math.abs(cam.panX) < 0.02 && Math.abs(cam.panY) < 0.02
        && Math.abs(cam.dPitch) < 1e-4) return;
    ctx.translate(W * 0.5 + cam.panX, H * 0.5 + cam.panY);
    ctx.rotate(cam.roll);
    // Mild perspective — readable depth without a "funhouse" warp.
    const sy = 1 - Math.abs(cam.dPitch) * 0.075;
    const sx = 1 + Math.abs(cam.dRoll) * 0.028;
    if (sy < 0.996 || sx > 1.001) ctx.scale(sx, sy);
    ctx.translate(-W * 0.5, -H * 0.5);
  }
  function getCam() { return cam; }

  /* ---------- main loop (fixed-ish timestep) ---------- */
  let last = 0, accum = 0, running = false, stepFn = null, drawFn = null;
  let timeScale = 1;                   // ⏩ time-warp item speeds the whole sim up
  const STEP = 1 / 60;
  function frame(now) {
    if (!running) return;
    requestAnimationFrame(frame);
    let dt = (now - last) / 1000; last = now;
    // Combat is the honest test of a device: the quality probe runs on an idle
    // machine and can be optimistic. Feeding real frame times back lets the
    // tier step down once if play turns out to be a slideshow.
    if (typeof Quality !== 'undefined' && Quality.sample) Quality.sample(dt * 1000);
    if (dt > 0.1) dt = 0.1;            // avoid spiral after tab switch
    accum += dt * timeScale;           // >1 → more fixed steps per real second
    let guard = 0;
    while (accum >= STEP && guard++ < 8) { stepFn(STEP); accum -= STEP; }
    if (accum > STEP) accum = 0;       // never spiral under heavy warp
    drawFn();
  }
  function start(step, draw) {
    stepFn = step; drawFn = draw; running = true; last = performance.now();
    requestAnimationFrame(frame);
  }

  resize();

  return {
    W, H, canvas, ctx, input, audio, Pool,
    rand, randInt, makeRng, clamp, dist2, lerp, TAU, STEP,
    burst, updateParticles, drawParticles,
    updateStars, drawStars, setStarColor, shake, applyShake, setShake,
    // Safety net for screen changes: check the frame still sits inside the
    // visible viewport and correct it only if it does not. Costs one rectangle
    // read when everything is already right.
    refit: fitCheck,
    updateCam, applyCam, getCam, resetCam,
    start,
    setTimeScale(s) { timeScale = s; }, get timeScale() { return timeScale; },
  };
})();
