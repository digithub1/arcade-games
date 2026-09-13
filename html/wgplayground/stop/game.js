/* =========================================================================
   STOP — game.js
   A minimalist circular timing/reflex arcade game.
   Structure: Storage -> Audio -> Level generation -> State -> Render -> Input
   ========================================================================= */

(() => {
  'use strict';

  /* ----------------------------------------------------------------------
     0. SMALL UTILITIES
  ---------------------------------------------------------------------- */
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const lerp = (a, b, t) => a + (b - a) * t;

  function mulberry32(seed) {
    let a = seed >>> 0;
    return function () {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  // shortest angular distance between two (unbounded) degree values, result in [0,180]
  function angDiff(a, b) {
    let d = Math.abs(a - b) % 360;
    return d > 180 ? 360 - d : d;
  }

  function polar(cx, cy, radius, deg) {
    const rad = (deg - 90) * Math.PI / 180;
    return { x: cx + radius * Math.cos(rad), y: cy + radius * Math.sin(rad) };
  }
  function degToRad(deg) { return (deg - 90) * Math.PI / 180; }

  /* ----------------------------------------------------------------------
     1. STORAGE
  ---------------------------------------------------------------------- */
  const STORAGE_KEY = 'stop_game_save_v1';

  function defaultSave() {
    return {
      unlockedLevel: 1,
      levelResults: {},        // levelNum -> 0/1/2 (miss/close/perfect best)
      bestScore: 0,
      totalPerfects: 0,
      bestStreak: 0,
      endlessUnlocked: false,
      endlessBest: { level: 0, score: 0, streak: 0, perfects: 0 },
      settings: { sound: true, music: true, vibration: true, reducedMotion: false },
      seenTutorial: false
    };
  }

  function loadSave() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaultSave();
      const parsed = JSON.parse(raw);
      return Object.assign(defaultSave(), parsed, {
        settings: Object.assign(defaultSave().settings, parsed.settings || {}),
        endlessBest: Object.assign(defaultSave().endlessBest, parsed.endlessBest || {})
      });
    } catch (e) {
      return defaultSave();
    }
  }

  function persist() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(save)); } catch (e) { /* storage unavailable */ }
  }

  let save = loadSave();

  function vibrate(pattern) {
    if (save.settings.vibration && navigator.vibrate) {
      try { navigator.vibrate(pattern); } catch (e) {}
    }
  }

  /* ----------------------------------------------------------------------
     2. AUDIO — synthesized with WebAudio, no external files
  ---------------------------------------------------------------------- */
  const Audio_ = (() => {
    let ctx = null;
    let musicNodes = null;
    let musicOn = false;

    function ensureCtx() {
      if (ctx) {
        try {
          if (ctx.state === 'suspended') {
            const p = ctx.resume();
            if (p && typeof p.catch === 'function') p.catch(() => {});
          }
        } catch (e) {}
        return ctx;
      }

      try {
        const AC = window.AudioContext || window.webkitAudioContext;
        if (!AC) return null;
        ctx = new AC();
        if (ctx.state === 'suspended') {
          const p = ctx.resume();
          if (p && typeof p.catch === 'function') p.catch(() => {});
        }
        return ctx;
      } catch (e) {
        ctx = null;
        return null;
      }
    }

    function tone({ freq = 440, dur = 0.15, type = 'sine', gain = 0.18, delay = 0, glideTo = null, endGain = 0.0001 }) {
      if (!save.settings.sound) return;
      const c = ensureCtx();
      if (!c) return;
      const t0 = c.currentTime + delay;
      const osc = c.createOscillator();
      const g = c.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, t0);
      if (glideTo) osc.frequency.exponentialRampToValueAtTime(glideTo, t0 + dur);
      g.gain.setValueAtTime(0.0001, t0);
      g.gain.exponentialRampToValueAtTime(gain, t0 + 0.012);
      g.gain.exponentialRampToValueAtTime(endGain, t0 + dur);
      osc.connect(g).connect(c.destination);
      osc.start(t0);
      osc.stop(t0 + dur + 0.02);
    }

    return {
      unlock() {
        try { ensureCtx(); } catch (e) {}
      },
      button() { tone({ freq: 720, dur: 0.06, type: 'square', gain: 0.10 }); },
      move() { /* intentionally silent tick reserved for future use */ },
      perfect() {
        tone({ freq: 660, dur: 0.14, type: 'triangle', gain: 0.22 });
        tone({ freq: 880, dur: 0.18, type: 'triangle', gain: 0.20, delay: 0.05 });
        tone({ freq: 1320, dur: 0.28, type: 'triangle', gain: 0.18, delay: 0.10 });
      },
      close() {
        tone({ freq: 520, dur: 0.16, type: 'sine', gain: 0.18 });
      },
      miss() {
        tone({ freq: 180, dur: 0.30, type: 'sawtooth', gain: 0.16, glideTo: 90 });
      },
      levelComplete() {
        tone({ freq: 523, dur: 0.10, gain: 0.18 });
        tone({ freq: 659, dur: 0.10, gain: 0.18, delay: 0.09 });
        tone({ freq: 784, dur: 0.22, gain: 0.18, delay: 0.18 });
      },
      newLevel() {
        tone({ freq: 300, dur: 0.09, type: 'triangle', gain: 0.12 });
      },
      streak() {
        tone({ freq: 990, dur: 0.09, type: 'square', gain: 0.10 });
      },
      victory() {
        [523, 659, 784, 1046, 1318].forEach((f, i) =>
          tone({ freq: f, dur: 0.35, type: 'triangle', gain: 0.2, delay: i * 0.11 })
        );
      },
      setMusic(on) {
        musicOn = on && save.settings.music;
        if (musicOn) startMusic(); else stopMusic();
      },
      refreshMusic() {
        try {
          if (save.settings.music && ctx) startMusic();
          else if (!save.settings.music) stopMusic();
        } catch (e) {}
      }
    };

    function startMusic() {
      if (musicNodes) return;
      const c = ensureCtx();
      const master = c.createGain();
      master.gain.value = 0.035;
      master.connect(c.destination);

      const osc = c.createOscillator();
      osc.type = 'sine';
      osc.frequency.value = 110;
      const lfo = c.createOscillator();
      lfo.type = 'sine';
      lfo.frequency.value = 0.12;
      const lfoGain = c.createGain();
      lfoGain.gain.value = 18;
      lfo.connect(lfoGain).connect(osc.frequency);

      osc.connect(master);
      osc.start(); lfo.start();
      musicNodes = { osc, lfo, master };
    }
    function stopMusic() {
      if (!musicNodes) return;
      try { musicNodes.osc.stop(); musicNodes.lfo.stop(); } catch (e) {}
      musicNodes = null;
    }
  })();

  /* ----------------------------------------------------------------------
     3. LEVEL GENERATION (deterministic per level, seeded)
  ---------------------------------------------------------------------- */
  function generateLevelConfig(L) {
    const rnd = mulberry32(L * 7919 + 13);

    let speed = clamp(55 + (L - 1) * 2.15, 55, 300);
    let width = clamp(68 - (L - 1) * 0.62, 9, 68);
    let perfectFrac = clamp(0.55 - L * 0.0035, 0.16, 0.55);
    let perfectWidth = Math.max(width * perfectFrac, 3.2);

    const cfg = {
      level: L,
      speed, width, perfectWidth,
      direction: rnd() < 0.5 ? 1 : -1,
      targetCenter: rnd() * 360,
      events: [],
      moving: null,
      shrinking: null,
      fake: null
    };

    if (L >= 11) {
      const chance = L < 21 ? 0.35 : L < 41 ? 0.55 : 0.7;
      if (rnd() < chance) cfg.events.push({ time: 1.2 + rnd() * 2.2, type: 'reverse', done: false });
    }
    if (L >= 21) {
      const chance = L < 31 ? 0.45 : 0.75;
      if (rnd() < chance) cfg.moving = { speedDegSec: (8 + rnd() * 22) * (rnd() < 0.5 ? 1 : -1) };
    }
    if (L >= 26) {
      const chance = L < 31 ? 0.3 : L < 61 ? 0.5 : 0.7;
      if (rnd() < chance) cfg.shrinking = { rate: 1.2 + rnd() * 3.2 + (L > 60 ? 2 : 0), minWidth: Math.max(6, width * 0.35) };
    }
    if (L >= 31) {
      const chance = L < 41 ? 0.5 : L < 61 ? 0.4 : 0.6;
      if (rnd() < chance) {
        const off = 95 + rnd() * 90;
        cfg.fake = { offset: rnd() < 0.5 ? off : -off };
      }
    }
    if (L >= 31) {
      const r = rnd();
      if (r < 0.35) cfg.events.push({ time: 1.5 + rnd() * 2.5, type: 'burst', multiplier: 1.8 + rnd() * 0.9, duration: 0.8 + rnd() * 0.6, done: false });
      else if (r < 0.6) cfg.events.push({ time: 1.5 + rnd() * 2.5, type: 'slow', multiplier: 0.45 + rnd() * 0.2, duration: 0.8 + rnd() * 0.6, done: false });
    }
    if (L >= 51) {
      const activeCount = [cfg.moving, cfg.shrinking, cfg.fake, cfg.events.length > 0].filter(Boolean).length;
      if (activeCount < 2) {
        cfg.moving = cfg.moving || { speedDegSec: (10 + rnd() * 20) * (rnd() < 0.5 ? 1 : -1) };
        if (!cfg.shrinking && rnd() < 0.6) cfg.shrinking = { rate: 2 + rnd() * 3, minWidth: Math.max(6, width * 0.4) };
      }
    }
    if (L >= 61) {
      cfg.perfectWidth = Math.max(cfg.perfectWidth * 0.8, 2.6);
      if (cfg.events.length === 0 && rnd() < 0.5) {
        cfg.events.push({ time: 1 + rnd() * 1.5, type: rnd() < 0.5 ? 'burst' : 'slow', multiplier: rnd() < 0.5 ? 2.0 : 0.4, duration: 0.6 + rnd() * 0.5, done: false });
      }
    }
    if (L >= 76) {
      if (!cfg.fake && rnd() < 0.6) cfg.fake = { offset: (rnd() < 0.5 ? 1 : -1) * (100 + rnd() * 80) };
      if (!cfg.moving) cfg.moving = { speedDegSec: (12 + rnd() * 22) * (rnd() < 0.5 ? 1 : -1) };
      if (!cfg.shrinking && rnd() < 0.5) cfg.shrinking = { rate: 2.5 + rnd() * 3, minWidth: Math.max(6, width * 0.4) };
    }
    if (L >= 91) {
      cfg.width = Math.max(cfg.width * 0.92, 9);
      cfg.speed = clamp(cfg.speed * 1.08, 55, 320);
    }
    if (L === 100) {
      cfg.speed = 340;
      cfg.width = 10;
      cfg.perfectWidth = 3;
      cfg.moving = { speedDegSec: 26 * (rnd() < 0.5 ? 1 : -1) };
      cfg.shrinking = { rate: 3.5, minWidth: 7 };
      cfg.fake = { offset: (rnd() < 0.5 ? 1 : -1) * 140 };
      cfg.events = [
        { time: 1.0, type: 'reverse', done: false },
        { time: 2.2, type: 'burst', multiplier: 1.6, duration: 0.7, done: false }
      ];
      cfg.special = 'stopgod';
    }
    return cfg;
  }

  function generateEndlessConfig(round) {
    const rnd = Math.random;
    let speed = clamp(140 + round * 7, 140, 520);
    let width = clamp(34 - round * 0.85, 6.5, 34);
    let perfectWidth = Math.max(width * clamp(0.32 - round * 0.004, 0.14, 0.32), 2.2);

    const cfg = {
      level: 100 + round,
      speed, width, perfectWidth,
      direction: rnd() < 0.5 ? 1 : -1,
      targetCenter: rnd() * 360,
      events: [],
      moving: null, shrinking: null, fake: null
    };

    if (rnd() < 0.7) cfg.events.push({ time: 0.8 + rnd() * 2, type: 'reverse', done: false });
    if (rnd() < 0.75) cfg.moving = { speedDegSec: (14 + rnd() * 26) * (rnd() < 0.5 ? 1 : -1) };
    if (rnd() < 0.6) cfg.shrinking = { rate: 2.5 + rnd() * 4, minWidth: Math.max(5, width * 0.4) };
    if (rnd() < 0.55) cfg.fake = { offset: (rnd() < 0.5 ? 1 : -1) * (90 + rnd() * 100) };
    if (rnd() < 0.6) {
      const isBurst = rnd() < 0.5;
      cfg.events.push({
        time: 0.6 + rnd() * 1.6,
        type: isBurst ? 'burst' : 'slow',
        multiplier: isBurst ? 1.7 + rnd() * 1.0 : 0.4 + rnd() * 0.2,
        duration: 0.6 + rnd() * 0.6,
        done: false
      });
    }
    return cfg;
  }

  /* ----------------------------------------------------------------------
     4. DOM REFERENCES
  ---------------------------------------------------------------------- */
  const screens = {};
  document.querySelectorAll('.screen').forEach(el => { screens[el.id] = el; });
  const overlays = {};
  document.querySelectorAll('.overlay').forEach(el => { overlays[el.id] = el; });

  const canvas = document.getElementById('arena');
  const ctx2d = canvas && canvas.getContext('2d');
  if (!canvas || !ctx2d) {
    throw new Error('STOP: Canvas 2D is not available in this browser.');
  }
  const stopBtn = document.getElementById('stop-btn');
  const resultFlash = document.getElementById('result-flash');
  const resultText = document.getElementById('result-text');
  const streakBadge = document.getElementById('streak-badge');
  const levelResultOverlay = document.getElementById('overlay-level-result');
  const resultLevelNumber = document.getElementById('result-level-number');
  const levelResultTitle = document.getElementById('level-result-title');
  const resultStars = document.getElementById('result-stars');
  const levelResultDetail = document.getElementById('level-result-detail');
  const nextLevelCountdown = document.getElementById('next-level-countdown');
  const btnNextLevel = document.getElementById('btn-next-level');
  const btnRetryLevel = document.getElementById('btn-retry-level');
  const arenaWrap = document.querySelector('.arena-wrap');
  const hudScore = document.getElementById('hud-score');
  const hudLevel = document.getElementById('hud-level');
  const hudModeLabel = document.getElementById('hud-mode-label');
  const levelGrid = document.getElementById('level-grid');

  /* ----------------------------------------------------------------------
     WGPLAYGROUND SDK BRIDGE
     Official WGPlayground JavaScript/HTML5 integration uses the universal
     monetization tag. No WGPlayer embed/player/widget is included here.
  ---------------------------------------------------------------------- */
  function showWgPlaygroundAd(resumeGame) {
    let resumed = false;
    const resumeOnce = () => {
      if (resumed) return;
      resumed = true;
      G.paused = false;
      try { Audio_.refreshMusic(); } catch (e) {}
      resumeGame();
    };

    try {
      const loaderName = window.preroll && window.preroll.config &&
        window.preroll.config.loaderObjectName;
      const loader = loaderName && window[loaderName];

      if (loader && typeof loader.refetchAd === 'function') {
        G.paused = true;
        try { Audio_.setMusic(false); } catch (e) {}
        // Some hosts/ad blockers expose refetchAd() but never invoke its
        // callback. Keep the game recoverable instead of leaving it frozen.
        const fallback = setTimeout(resumeOnce, 2500);
        const guardedResume = () => { clearTimeout(fallback); resumeOnce(); };
        try {
          loader.refetchAd(guardedResume);
          return true;
        } catch (e) {
          clearTimeout(fallback);
        }
      }
    } catch (e) {
      // SDK unavailable or blocked: never prevent gameplay from continuing.
    }

    resumeOnce();
    return false;
  }

  function continueAfterAd(nextRound) {
    showWgPlaygroundAd(() => {
      nextRound();
    });
  }

  function showScreen(name) {
    Object.values(screens).forEach(s => s.classList.remove('active'));
    screens[name].classList.add('active');
  }
  function showOverlay(name) {
    const overlay = overlays[name];
    if (!overlay) return;
    overlay.classList.add('active');
    // Force result/menu overlays above the game on desktop and mobile.
    overlay.style.display = 'flex';
    overlay.style.zIndex = '9999';
  }
  function hideOverlay(name) {
    const overlay = overlays[name];
    if (!overlay) return;
    overlay.classList.remove('active');
    overlay.style.display = '';
  }
  function hideAllOverlays() { Object.values(overlays).forEach(o => o.classList.remove('active')); }

  function showLevelResult(result, levelNum) {
    const stars = result === 'perfect' ? 3 : result === 'close' ? 2 : 0;
    resultLevelNumber.textContent = String(levelNum);
    levelResultTitle.textContent = result === 'perfect' ? 'PERFECT!' : result === 'close' ? 'NICE!' : 'MISS';
    levelResultDetail.textContent = result === 'perfect' ? 'Perfect timing — 3 stars' :
      result === 'close' ? 'Close timing — 2 stars' : 'You missed the zone — try again';
    [...resultStars.children].forEach((star, i) => {
      star.classList.toggle('earned', i < stars);
    });
    // Keep the result menu open until the player explicitly chooses an action.
    // This prevents progression from ever being blocked by an ad/SDK callback or timer.
    nextLevelCountdown.textContent = result === 'miss' ? 'TRY AGAIN WHEN READY' : 'CHOOSE YOUR NEXT MOVE';
    btnNextLevel.style.display = result === 'miss' ? 'none' : '';
    btnRetryLevel.style.display = '';
    showOverlay('overlay-level-result');
  }

  /* ----------------------------------------------------------------------
     5. GAME STATE
  ---------------------------------------------------------------------- */
  const G = {
    mode: 'level',        // 'level' | 'endless'
    currentLevel: 1,
    endlessRound: 0,
    cfg: null,
    angle: 0,
    direction: 1,
    elapsed: 0,
    roundActive: false,
    paused: false,
    score: 0,
    streak: 0,
    lastTime: 0,
    particles: [],
    shakeUntil: 0,
    cx: 0, cy: 0, radius: 0
  };

  function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    // Some desktop hosts report a zero-sized canvas for one layout frame.
    // Fall back to the arena's client box and then to a safe square.
    const width = Math.max(1, Math.round(rect.width || arenaWrap.clientWidth || 600));
    const height = Math.max(1, Math.round(rect.height || arenaWrap.clientHeight || 600));
    const dpr = Math.min(window.devicePixelRatio || 1, 2.5);
    canvas.width = Math.max(1, Math.round(width * dpr));
    canvas.height = Math.max(1, Math.round(height * dpr));
    ctx2d.setTransform(dpr, 0, 0, dpr, 0, 0);
    G.cx = width / 2;
    G.cy = height / 2;
    G.radius = Math.max(1, Math.min(width, height) / 2 - 26);
  }
  let resizeRaf = 0;
  function scheduleResize() {
    cancelAnimationFrame(resizeRaf);
    resizeRaf = requestAnimationFrame(() => { resizeRaf = 0; resizeCanvas(); });
  }
  window.addEventListener('resize', scheduleResize, { passive: true });
  window.addEventListener('orientationchange', () => setTimeout(scheduleResize, 200), { passive: true });
  if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', scheduleResize, { passive: true });
  }

  // Hosting-safe lifecycle: pause gameplay when the browser/host hides the page.
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && G.roundActive) {
      G.paused = true;
    } else if (!document.hidden && G.roundActive) {
      G.paused = false;
      G.lastTime = performance.now();
      resizeCanvas();
    }
  });

  /* ----------------------------------------------------------------------
     6. ROUND LIFECYCLE
  ---------------------------------------------------------------------- */
  function currentTargetState(cfg, t) {
    let center = cfg.targetCenter;
    if (cfg.moving) center += cfg.moving.speedDegSec * t;
    let width = cfg.width;
    if (cfg.shrinking) width = Math.max(cfg.shrinking.minWidth, cfg.width - cfg.shrinking.rate * t);
    const perfectWidth = Math.max(2, Math.min(cfg.perfectWidth, width * 0.9));
    let decoyCenter = null;
    if (cfg.fake) decoyCenter = center + cfg.fake.offset;
    return { center, width, perfectWidth, decoyCenter };
  }

  function beginRound(cfg, newLevelSound) {
    G.cfg = cfg;
    G.angle = Math.random() * 360;
    G.direction = cfg.direction;
    G.elapsed = 0;
    G.roundActive = true;
    G.activeMultiplier = 1;
    G.activeMultiplierUntil = 0;
    cfg.events.forEach(e => e.done = false);
    stopBtn.disabled = false;
    resultText.className = 'result-text';
    resultFlash.className = 'result-flash';
    streakBadge.classList.remove('show');
    if (newLevelSound) Audio_.newLevel();
  }

  function startLevelRound(levelNum, newLevelSound) {
    G.mode = 'level';
    G.currentLevel = levelNum;
    hudModeLabel.textContent = 'LEVEL';
    hudLevel.textContent = String(levelNum);
    beginRound(generateLevelConfig(levelNum), newLevelSound);
  }

  function startEndlessRound() {
    G.mode = 'endless';
    hudModeLabel.textContent = 'ROUND';
    hudLevel.textContent = String(G.endlessRound + 1);
    beginRound(generateEndlessConfig(G.endlessRound), false);
  }

  function resetScoreForNewSession() {
    G.score = 0;
    G.streak = 0;
    hudScore.textContent = '0';
  }

  function updateHud() {
    hudScore.textContent = String(G.score);
  }

  /* ----------------------------------------------------------------------
     7. PHYSICS / UPDATE
  ---------------------------------------------------------------------- */
  function updateRound(dt) {
    const cfg = G.cfg;
    G.elapsed += dt;

    // multiplier window expiry
    if (G.activeMultiplier !== 1 && G.elapsed > G.activeMultiplierUntil) {
      G.activeMultiplier = 1;
    }
    // process scheduled events
    cfg.events.forEach(e => {
      if (e.done || G.elapsed < e.time) return;
      e.done = true;
      if (e.type === 'reverse') {
        G.direction *= -1;
      } else if (e.type === 'burst' || e.type === 'slow') {
        G.activeMultiplier = e.multiplier;
        G.activeMultiplierUntil = G.elapsed + e.duration;
      }
    });

    const effSpeed = cfg.speed * G.activeMultiplier;
    G.angle += G.direction * effSpeed * dt;
  }

  function updateParticles(dt) {
    G.particles = G.particles.filter(p => p.life > 0);
    G.particles.forEach(p => {
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.vy += 220 * dt * 0.15;
      p.life -= dt;
    });
  }

  function spawnParticles(x, y, color, count) {
    for (let i = 0; i < count; i++) {
      const a = Math.random() * Math.PI * 2;
      const speed = 60 + Math.random() * 160;
      G.particles.push({
        x, y,
        vx: Math.cos(a) * speed,
        vy: Math.sin(a) * speed,
        life: 0.5 + Math.random() * 0.4,
        maxLife: 0.5 + Math.random() * 0.4,
        color,
        size: 2 + Math.random() * 3
      });
    }
  }

  /* ----------------------------------------------------------------------
     8. RENDER
  ---------------------------------------------------------------------- */
  function draw() {
    const { cx, cy, radius } = G;
    if (!(radius > 0) || !Number.isFinite(radius)) return;
    ctx2d.clearRect(0, 0, canvas.width, canvas.height);

    // watermark identity
    ctx2d.save();
    ctx2d.globalAlpha = 0.045;
    ctx2d.fillStyle = '#ffffff';
    ctx2d.font = `900 ${radius * 0.62}px -apple-system, Arial, sans-serif`;
    ctx2d.textAlign = 'center';
    ctx2d.textBaseline = 'middle';
    ctx2d.fillText('STOP', cx, cy);
    ctx2d.restore();

    // track
    ctx2d.beginPath();
    ctx2d.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx2d.strokeStyle = 'rgba(255,255,255,0.08)';
    ctx2d.lineWidth = 10;
    ctx2d.stroke();

    if (G.cfg) {
      const t = G.roundActive ? G.elapsed : G.stoppedAt;
      const ts = currentTargetState(G.cfg, t);

      // decoy target (fake)
      if (ts.decoyCenter !== null) {
        drawArc(cx, cy, radius, ts.decoyCenter, ts.width, 'rgba(255,179,0,0.28)', 10);
      }

      // real target zone
      drawArc(cx, cy, radius, ts.center, ts.width, 'rgba(255,179,0,0.9)', 10);
      // perfect zone
      drawArc(cx, cy, radius, ts.center, ts.perfectWidth, '#FFE9A8', 10, true);
      // subtle tick at the real target's center (learnable cue vs decoy)
      const tickP1 = polar(cx, cy, radius - 8, ts.center);
      const tickP2 = polar(cx, cy, radius + 8, ts.center);
      ctx2d.beginPath();
      ctx2d.moveTo(tickP1.x, tickP1.y);
      ctx2d.lineTo(tickP2.x, tickP2.y);
      ctx2d.strokeStyle = 'rgba(255,255,255,0.65)';
      ctx2d.lineWidth = 2;
      ctx2d.stroke();

      // indicator trail
      const trailSteps = 8;
      for (let i = trailSteps; i >= 1; i--) {
        const trailAngle = G.angle - (G.roundActive ? G.direction : 0) * i * 2.2;
        const p = polar(cx, cy, radius, trailAngle);
        ctx2d.beginPath();
        ctx2d.arc(p.x, p.y, Math.max(1, 7 - i * 0.6), 0, Math.PI * 2);
        ctx2d.fillStyle = `rgba(255,46,99,${0.05 * (trailSteps - i)})`;
        ctx2d.fill();
      }

      // indicator
      const ip = polar(cx, cy, radius, G.angle);
      const grad = ctx2d.createRadialGradient(ip.x, ip.y, 0, ip.x, ip.y, 22);
      grad.addColorStop(0, 'rgba(255,46,99,0.55)');
      grad.addColorStop(1, 'rgba(255,46,99,0)');
      ctx2d.beginPath();
      ctx2d.arc(ip.x, ip.y, 22, 0, Math.PI * 2);
      ctx2d.fillStyle = grad;
      ctx2d.fill();

      ctx2d.beginPath();
      ctx2d.arc(ip.x, ip.y, 9, 0, Math.PI * 2);
      ctx2d.fillStyle = '#FF2E63';
      ctx2d.fill();
      ctx2d.beginPath();
      ctx2d.arc(ip.x, ip.y, 9, 0, Math.PI * 2);
      ctx2d.strokeStyle = '#fff';
      ctx2d.lineWidth = 2;
      ctx2d.stroke();
    }

    // particles
    G.particles.forEach(p => {
      const alpha = clamp(p.life / p.maxLife, 0, 1);
      ctx2d.beginPath();
      ctx2d.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx2d.fillStyle = p.color.replace('ALPHA', alpha.toFixed(3));
      ctx2d.fill();
    });
  }

  function drawArc(cx, cy, radius, centerDeg, widthDeg, color, lineWidth, glow) {
    const start = degToRad(centerDeg - widthDeg / 2);
    const end = degToRad(centerDeg + widthDeg / 2);
    ctx2d.beginPath();
    ctx2d.arc(cx, cy, radius, start, end, false);
    ctx2d.strokeStyle = color;
    ctx2d.lineWidth = lineWidth;
    ctx2d.lineCap = 'butt';
    if (glow) {
      ctx2d.shadowColor = color;
      ctx2d.shadowBlur = 14;
    } else {
      ctx2d.shadowBlur = 0;
    }
    ctx2d.stroke();
    ctx2d.shadowBlur = 0;
  }

  /* ----------------------------------------------------------------------
     9. MAIN LOOP
  ---------------------------------------------------------------------- */
  function loop(ts) {
    requestAnimationFrame(loop);
    if (!G.lastTime) G.lastTime = ts;
    let dt = (ts - G.lastTime) / 1000;
    G.lastTime = ts;
    dt = Math.min(dt, 0.05);

    const onGameScreen = screens['screen-game'].classList.contains('active');
    if (onGameScreen && !G.paused) {
      if (G.roundActive) updateRound(dt);
      updateParticles(dt);
      draw();
    }
  }
  requestAnimationFrame(loop);

  /* ----------------------------------------------------------------------
     10. RESULT HANDLING
  ---------------------------------------------------------------------- */
  function handleStopPress() {
    if (!G.roundActive || G.paused) return;
    if (!screens['screen-game'].classList.contains('active')) return;

    G.roundActive = false;
    G.stoppedAt = G.elapsed;
    stopBtn.disabled = true;

    const ts = currentTargetState(G.cfg, G.stoppedAt);
    const diff = angDiff(G.angle, ts.center);
    let result;
    if (diff <= ts.perfectWidth / 2) result = 'perfect';
    else if (diff <= ts.width / 2) result = 'close';
    else result = 'miss';

    resolveResult(result);
  }

  function advanceFromResult() {
    const level = Number(G.currentLevel) || 1;
    const passed = (save.levelResults[level] || 0) > 0;
    if (!passed) return;

    hideOverlay('overlay-level-result');

    if (level >= 100) {
      save.endlessUnlocked = true;
      persist();
      showOverlay('overlay-victory');
      return;
    }

    if (level === 50) {
      showOverlay('overlay-milestone');
      return;
    }

    // Natural pause point between levels: WGPlayground midroll.
    continueAfterAd(() => startLevelRound(level + 1, true));
  }

  function retryCurrentLevel() {
    const level = Number(G.currentLevel) || 1;
    hideOverlay('overlay-level-result');
    startLevelRound(level, false);
  }

  function resolveResult(result) {
    const { cx, cy, radius } = G;
    const ip = polar(cx, cy, radius, G.angle);

    if (result === 'perfect') {
      Audio_.perfect();
      vibrate(30);
      spawnParticles(ip.x, ip.y, 'rgba(255,233,168,ALPHA)', 22);
      resultText.textContent = 'PERFECT!';
      resultText.classList.add('show-perfect');
      resultFlash.classList.add('flash-perfect');
      G.streak += 1;
      G.score += Math.round(3 * (1 + G.cfg.level * 0.01));
      save.totalPerfects += 1;
    } else if (result === 'close') {
      Audio_.close();
      vibrate(15);
      spawnParticles(ip.x, ip.y, 'rgba(255,179,0,ALPHA)', 10);
      resultText.textContent = 'CLOSE!';
      resultText.classList.add('show-close');
      resultFlash.classList.add('flash-close');
      G.score += Math.round(1 * (1 + G.cfg.level * 0.01));
      // streak preserved on close
    } else {
      Audio_.miss();
      vibrate([20, 30, 20]);
      resultText.textContent = 'MISS';
      resultText.classList.add('show-miss');
      resultFlash.classList.add('flash-miss');
      arenaWrap.classList.add('shake');
      setTimeout(() => arenaWrap.classList.remove('shake'), 340);
      G.streak = 0;
    }

    if (G.streak > 0 && (result === 'perfect')) {
      streakBadge.textContent = `PERFECT ×${G.streak}`;
      streakBadge.classList.add('show');
      if (G.streak > 1) Audio_.streak();
    }

    save.bestStreak = Math.max(save.bestStreak, G.streak);
    save.bestScore = Math.max(save.bestScore, G.score);
    updateHud();

    if (G.mode === 'level') {
      const passed = result !== 'miss';
      const resultValue = result === 'perfect' ? 2 : result === 'close' ? 1 : 0;
      const prevBest = save.levelResults[G.currentLevel] || 0;
      save.levelResults[G.currentLevel] = Math.max(prevBest, resultValue);
      if (passed && G.currentLevel === save.unlockedLevel && save.unlockedLevel < 100) {
        save.unlockedLevel += 1;
      }
      persist();

      // Always stop on a clear, interactive result menu. The player explicitly
      // chooses NEXT LEVEL or RETRY; no timer or SDK callback can freeze or
      // hijack progression.
      showLevelResult(result, G.currentLevel);
      btnNextLevel.textContent = 'NEXT LEVEL';
      btnNextLevel.style.display = passed ? '' : 'none';
      btnRetryLevel.style.display = '';
    } else {
      // endless
      if (result !== 'miss') {
        persist();
        setTimeout(() => {
          G.endlessRound += 1;
          continueAfterAd(() => startEndlessRound());
        }, 900);
      } else {
        save.endlessBest.level = Math.max(save.endlessBest.level, G.endlessRound + 1);
        save.endlessBest.score = Math.max(save.endlessBest.score, G.score);
        save.endlessBest.streak = Math.max(save.endlessBest.streak, save.bestStreak);
        persist();
        setTimeout(() => {
          document.getElementById('gameover-summary').textContent =
            `Reached round ${G.endlessRound + 1} · Score ${G.score}`;
          showOverlay('overlay-gameover');
        }, 900);
      }
    }
  }

  /* ----------------------------------------------------------------------
     11. LEVEL SELECT / MENU RENDERING
  ---------------------------------------------------------------------- */
  function refreshMenuStats() {
    document.getElementById('stat-best-level').textContent = String(save.unlockedLevel);
    document.getElementById('stat-best-score').textContent = String(save.bestScore);
    document.getElementById('stat-total-perfects').textContent = String(save.totalPerfects);
    document.getElementById('stat-streak').textContent = String(save.bestStreak);
    document.getElementById('btn-endless').disabled = !save.endlessUnlocked;
  }

  function buildLevelGrid() {
    levelGrid.innerHTML = '';
    for (let i = 1; i <= 100; i++) {
      const cell = document.createElement('div');
      cell.className = 'level-cell';
      const locked = i > save.unlockedLevel;
      const resultValue = save.levelResults[i] || 0;
      if (locked) cell.classList.add('locked');
      if (resultValue >= 1) cell.classList.add('complete');
      if (resultValue === 2) cell.classList.add('perfect-clear');
      if (i % 10 === 0) cell.classList.add('milestone');
      cell.textContent = locked ? '🔒' : String(i);
      if (resultValue >= 1) {
        const mark = document.createElement('span');
        mark.className = 'mark';
        mark.textContent = resultValue === 2 ? '★' : '✓';
        cell.appendChild(mark);
      }
      if (!locked) {
        cell.addEventListener('click', () => {
          Audio_.button();
          showScreen('screen-game');
          resetScoreForNewSession();
          startLevelRound(i, true);
        });
      }
      levelGrid.appendChild(cell);
    }
  }

  /* ----------------------------------------------------------------------
     12. TUTORIAL
  ---------------------------------------------------------------------- */
  const tutSteps = [
    { word: 'WATCH', copy: 'The indicator travels around the ring.' },
    { word: 'AIM', copy: 'Wait for it to reach the target zone.' },
    { word: 'STOP', copy: 'Tap STOP at exactly the right moment.' }
  ];
  let tutIndex = 0;
  function renderTutStep() {
    const s = tutSteps[tutIndex];
    document.querySelector('.tut-index').textContent = `${tutIndex + 1} / ${tutSteps.length}`;
    document.querySelector('.tut-word').textContent = s.word;
    document.querySelector('.tut-copy').textContent = s.copy;
    document.getElementById('tut-next').textContent = tutIndex === tutSteps.length - 1 ? 'PLAY' : 'NEXT';
  }
  document.getElementById('tut-next').addEventListener('click', () => {
    Audio_.button();
    if (tutIndex < tutSteps.length - 1) {
      tutIndex += 1;
      renderTutStep();
    } else {
      save.seenTutorial = true;
      persist();
      showScreen('screen-game');
      resetScoreForNewSession();
      startLevelRound(1, true);
    }
  });

  /* ----------------------------------------------------------------------
     13. SETTINGS BINDING
  ---------------------------------------------------------------------- */
  function bindSettings() {
    const soundEl = document.getElementById('setting-sound');
    const musicEl = document.getElementById('setting-music');
    const vibEl = document.getElementById('setting-vibration');
    const motionEl = document.getElementById('setting-reduced-motion');

    soundEl.checked = save.settings.sound;
    musicEl.checked = save.settings.music;
    vibEl.checked = save.settings.vibration;
    motionEl.checked = save.settings.reducedMotion;
    document.body.classList.toggle('reduced-motion', save.settings.reducedMotion);

    soundEl.addEventListener('change', () => { save.settings.sound = soundEl.checked; persist(); });
    musicEl.addEventListener('change', () => {
      save.settings.music = musicEl.checked; persist(); Audio_.refreshMusic();
    });
    vibEl.addEventListener('change', () => { save.settings.vibration = vibEl.checked; persist(); });
    motionEl.addEventListener('change', () => {
      save.settings.reducedMotion = motionEl.checked;
      document.body.classList.toggle('reduced-motion', motionEl.checked);
      persist();
    });
  }

  /* ----------------------------------------------------------------------
     14. GLOBAL INPUT / NAVIGATION
  ---------------------------------------------------------------------- */
  document.addEventListener('click', (e) => {
    const el = e.target.closest('[data-action]');
    if (!el) return;
    const action = el.dataset.action;
    try { Audio_.unlock(); } catch (e) {}

    switch (action) {
      case 'play': {
        Audio_.button();
        resetScoreForNewSession();
        if (!save.seenTutorial) {
          tutIndex = 0;
          renderTutStep();
          showScreen('screen-tutorial');
        } else {
          const lvl = clamp(save.unlockedLevel, 1, 100);
          showScreen('screen-game');
          startLevelRound(lvl, true);
        }
        break;
      }
      case 'levels':
        Audio_.button();
        buildLevelGrid();
        showScreen('screen-levels');
        break;
      case 'endless':
        if (!save.endlessUnlocked) return;
        Audio_.button();
        resetScoreForNewSession();
        G.endlessRound = 0;
        showScreen('screen-game');
        startEndlessRound();
        break;
      case 'settings':
        Audio_.button();
        showScreen('screen-settings');
        break;
      case 'back-to-menu':
        Audio_.button();
        refreshMenuStats();
        showScreen('screen-menu');
        break;
      case 'reset-progress':
        Audio_.button();
        if (confirm('Reset all progress? This cannot be undone.')) {
          save = defaultSave();
          persist();
          refreshMenuStats();
          bindSettings();
        }
        break;
      case 'pause':
        if (!screens['screen-game'].classList.contains('active')) return;
        Audio_.button();
        G.paused = true;
        showOverlay('overlay-pause');
        break;
      case 'resume':
        Audio_.button();
        G.paused = false;
        hideOverlay('overlay-pause');
        break;
      case 'next-level':
        Audio_.button();
        if (G.mode === 'level' && (save.levelResults[G.currentLevel] || 0) > 0) {
          advanceFromResult();
        }
        break;
      case 'retry-level':
        Audio_.button();
        if (G.mode === 'level') retryCurrentLevel();
        break;
      case 'result-level-select':
        Audio_.button();
        hideOverlay('overlay-level-result');
        buildLevelGrid();
        showScreen('screen-levels');
        break;
      case 'restart-level':
        Audio_.button();
        hideOverlay('overlay-pause');
        G.paused = false;
        if (G.mode === 'level') startLevelRound(G.currentLevel, false);
        else { G.endlessRound = 0; startEndlessRound(); }
        break;
      case 'to-level-select':
        Audio_.button();
        hideOverlay('overlay-pause');
        G.paused = false;
        G.roundActive = false;
        buildLevelGrid();
        showScreen('screen-levels');
        break;
      case 'to-main-menu':
        Audio_.button();
        hideAllOverlays();
        G.paused = false;
        G.roundActive = false;
        refreshMenuStats();
        showScreen('screen-menu');
        break;
      case 'milestone-continue':
        Audio_.button();
        hideOverlay('overlay-milestone');
        startLevelRound(51, true);
        break;
      case 'victory-continue':
        Audio_.button();
        hideOverlay('overlay-victory');
        refreshMenuStats();
        showScreen('screen-menu');
        break;
      case 'endless-retry':
        Audio_.button();
        hideOverlay('overlay-gameover');
        resetScoreForNewSession();
        G.endlessRound = 0;
        showScreen('screen-game');
        startEndlessRound();
        break;
      default: break;
    }
  });

  // STOP button — works with mouse, touch, pen and keyboard.
  // pointerdown gives low-latency input; click is a compatibility fallback.
  let stopPointerHandledAt = 0;

  stopBtn.addEventListener('pointerdown', (e) => {
    e.preventDefault();
    try { Audio_.unlock(); } catch (e) {}
    stopBtn.classList.add('pressed');
    stopPointerHandledAt = performance.now();
    try { handleStopPress(); } catch (e) { console.error('STOP input error', e); }
  });

  stopBtn.addEventListener('click', (e) => {
    // Browsers normally emit click after pointerdown. Avoid firing twice.
    if (performance.now() - stopPointerHandledAt < 450) return;
    try { Audio_.unlock(); } catch (e) {}
    try { handleStopPress(); } catch (e) { console.error('STOP input error', e); }
  });

  stopBtn.addEventListener('pointerup', () => stopBtn.classList.remove('pressed'));
  stopBtn.addEventListener('pointercancel', () => stopBtn.classList.remove('pressed'));
  stopBtn.addEventListener('mouseleave', () => stopBtn.classList.remove('pressed'));
  stopBtn.addEventListener('contextmenu', (e) => e.preventDefault());

  // Keyboard: space / enter
  window.addEventListener('keydown', (e) => {
    if (e.code === 'Space' || e.code === 'Enter') {
      e.preventDefault();
      try { Audio_.unlock(); } catch (e) {}
      try { handleStopPress(); } catch (e) { console.error('STOP input error', e); }
    }
  });

  // Prevent rubber-band scroll / pinch on mobile
  document.addEventListener('touchmove', (e) => {
    if (screens['screen-game'].classList.contains('active')) e.preventDefault();
  }, { passive: false });

  // Last-resort runtime guard. Non-fatal browser/host API failures are
  // logged instead of replacing the game page with an error state.
  window.addEventListener('error', (event) => {
    console.warn('STOP non-fatal runtime error:', event.error || event.message);
  });
  window.addEventListener('unhandledrejection', (event) => {
    console.warn('STOP non-fatal promise rejection:', event.reason);
    event.preventDefault();
  });

  /* ----------------------------------------------------------------------
     15. BOOT
  ---------------------------------------------------------------------- */
  function boot() {
    resizeCanvas();
    bindSettings();
    refreshMenuStats();
    showScreen('screen-menu');
    // Do not create AudioContext during boot: desktop browsers/iframes may
    // reject autoplay. Audio starts only after the first user interaction.
    try { Audio_.refreshMusic(); } catch (e) {}

    if (window.ResizeObserver) {
      const ro = new ResizeObserver(scheduleResize);
      ro.observe(arenaWrap);
    }

    // Ensure valid dimensions after the browser finishes desktop layout.
    scheduleResize();
    setTimeout(scheduleResize, 100);
    setTimeout(scheduleResize, 500);
  }

  boot();
})();
