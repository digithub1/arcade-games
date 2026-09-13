/**
 * File-based audio — ONLY assets/sounds/*.mp3.
 *
 * Music  → HTML <audio> loop (large file; streaming is fine).
 * SFX    → Web Audio buffers (one-shot, no seek glitches).
 *
 * Crash is pre-trimmed to the middle 60% when decoded, so play never seeks.
 *
 * This module exports `Audio` — never use `new Audio()` here; use makeClip().
 */

const ASSET = {
  music: 'assets/sounds/loop.mp3?v=20260727g',
  crash: 'assets/sounds/crash.mp3?v=20260727g',
  click: 'assets/sounds/ui-click.mp3?v=20260727g',
  whoosh: 'assets/sounds/gaps-woosh.mp3?v=20260727g',
};

const MUSIC_VOLUME = 0.225;
const CRASH_START = 0.2;
const CRASH_END = 0.8;

function makeClip(url, loop) {
  const el = document.createElement('audio');
  el.src = url;
  el.preload = 'auto';
  el.loop = !!loop;
  el.playsInline = true;
  return el;
}

function safePlay(el) {
  if (!el) return;
  try {
    const p = el.play();
    if (p && typeof p.catch === 'function') p.catch(() => {});
  } catch (_) { /* ignore */ }
}

/**
 * Slice an AudioBuffer to [startFrac, endFrac) of its duration.
 * Used once for crash so runtime play is a clean BufferSource with no seek.
 */
function sliceBuffer(ctx, buffer, startFrac, endFrac) {
  const n = buffer.length;
  const a = Math.max(0, Math.min(n, Math.floor(n * startFrac)));
  const b = Math.max(a + 1, Math.min(n, Math.floor(n * endFrac)));
  const len = b - a;
  const out = ctx.createBuffer(buffer.numberOfChannels, len, buffer.sampleRate);
  for (let c = 0; c < buffer.numberOfChannels; c++) {
    out.getChannelData(c).set(buffer.getChannelData(c).subarray(a, b));
  }
  return out;
}

function makeManager() {
  let music = null;
  let musicMuted = false;
  let sfxMuted = false;
  let platformMuted = false;
  let adMuted = false;
  let musicWanted = false;
  let unlocked = false;
  let lastWhooshAt = 0;

  // Web Audio graph for SFX only.
  let ctx = null;
  let sfxGain = null;
  /** @type {Record<string, AudioBuffer | null>} */
  const buffers = Object.create(null); // key → buffer (null = failed)
  let loadPromise = null;

  // HTML fallback bases if Web Audio is unavailable.
  const htmlSfx = Object.create(null);

  const api = {};

  function effMusicMuted() { return musicMuted || platformMuted || adMuted; }
  function effSfxMuted() { return sfxMuted || platformMuted || adMuted; }

  function ensureMusic() {
    if (typeof document === 'undefined') return null;
    if (!music) {
      music = makeClip(ASSET.music, true);
      music.volume = MUSIC_VOLUME;
    }
    return music;
  }

  function ensureCtx() {
    if (ctx || typeof window === 'undefined') return ctx;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    try {
      ctx = new AC();
      sfxGain = ctx.createGain();
      sfxGain.gain.value = effSfxMuted() ? 0 : 1;
      sfxGain.connect(ctx.destination);
    } catch (_) {
      ctx = null;
      sfxGain = null;
    }
    return ctx;
  }

  async function decodeOne(key, url, trim) {
    if (!ctx) return;
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(String(res.status));
      const raw = await res.arrayBuffer();
      const full = await new Promise((resolve, reject) => {
        const ret = ctx.decodeAudioData(raw.slice(0), resolve, reject);
        if (ret && typeof ret.then === 'function') ret.then(resolve, reject);
      });
      buffers[key] = trim
        ? sliceBuffer(ctx, full, trim.start, trim.end)
        : full;
    } catch (_) {
      buffers[key] = null;
    }
  }

  function loadSfxBuffers() {
    if (loadPromise) return loadPromise;
    if (!ensureCtx()) {
      loadPromise = Promise.resolve();
      return loadPromise;
    }
    loadPromise = Promise.all([
      decodeOne('click', ASSET.click, null),
      decodeOne('whoosh', ASSET.whoosh, null),
      decodeOne('crash', ASSET.crash, { start: CRASH_START, end: CRASH_END }),
    ]).then(() => {});
    return loadPromise;
  }

  function applySfxGain() {
    if (!sfxGain || !ctx) return;
    try {
      sfxGain.gain.setValueAtTime(effSfxMuted() ? 0 : 1, ctx.currentTime);
    } catch (_) {
      sfxGain.gain.value = effSfxMuted() ? 0 : 1;
    }
  }

  /** One-shot SFX via Web Audio (preferred). */
  function playBuffer(key, volume) {
    if (effSfxMuted()) return false;
    if (!ctx || !sfxGain) return false;
    const buf = buffers[key];
    if (!buf) return false;
    try {
      if (ctx.state === 'suspended') ctx.resume().catch(() => {});
      const src = ctx.createBufferSource();
      src.buffer = buf;
      const g = ctx.createGain();
      g.gain.value = volume;
      src.connect(g);
      g.connect(sfxGain);
      src.start(0);
      return true;
    } catch (_) {
      return false;
    }
  }

  /** HTML fallback if Web Audio buffers are not ready / unavailable. */
  function playHtmlSfx(key, volume) {
    if (effSfxMuted() || typeof document === 'undefined') return;
    try {
      if (!htmlSfx[key]) htmlSfx[key] = makeClip(ASSET[key], false);
      const base = htmlSfx[key];
      // Always clone for crash-free overlapping; simple reset for idle click.
      if (key !== 'crash' && (base.paused || base.ended)) {
        base.volume = volume;
        base.muted = false;
        try { base.currentTime = 0; } catch (_) { /* ignore */ }
        safePlay(base);
        return;
      }
      const el = /** @type {HTMLAudioElement} */ (base.cloneNode(true));
      el.volume = volume;
      el.muted = false;
      el.loop = false;
      // Full file only — no mid-clip seek (seek was the glitch).
      try { el.currentTime = 0; } catch (_) { /* ignore */ }
      safePlay(el);
    } catch (_) { /* ignore */ }
  }

  function playSfx(key, volume) {
    if (effSfxMuted()) return;
    // Prefer decoded buffer (crash is already trimmed in-buffer — no seek).
    if (playBuffer(key, volume)) return;
    // Decode failed permanently → HTML full file once.
    if (buffers[key] === null) {
      playHtmlSfx(key, volume);
      return;
    }
    // Still loading: play HTML once now, warm buffers for the *next* hit.
    // Do not also fire the buffer when load finishes — that was a double-hit risk.
    playHtmlSfx(key, volume);
    loadSfxBuffers();
  }

  function applyMusicState() {
    const m = music;
    if (!m) return;
    if (!musicWanted || effMusicMuted()) {
      try { m.pause(); } catch (_) { /* ignore */ }
      return;
    }
    try {
      m.muted = false;
      m.volume = MUSIC_VOLUME;
    } catch (_) { /* ignore */ }
    safePlay(m);
  }

  api.init = function () {
    try {
      ensureMusic();
      ensureCtx();
      loadSfxBuffers();
    } catch (_) { /* ignore */ }
    return Promise.resolve();
  };

  api.unlock = function () {
    if (unlocked) return Promise.resolve();
    unlocked = true;
    try {
      ensureMusic();
      ensureCtx();
      const tasks = [];
      if (ctx && ctx.state === 'suspended') {
        tasks.push(ctx.resume().catch(() => {}));
      }
      tasks.push(loadSfxBuffers());
      const m = music;
      if (m) {
        m.muted = true;
        tasks.push(
          m.play()
            .then(() => {
              try {
                m.pause();
                m.currentTime = 0;
                m.muted = false;
              } catch (_) { /* ignore */ }
            })
            .catch(() => {
              try { m.muted = false; } catch (_) { /* ignore */ }
            }),
        );
      }
      return Promise.all(tasks).then(() => {});
    } catch (_) {
      return Promise.resolve();
    }
  };

  api.playMusic = function () {
    musicWanted = true;
    try {
      ensureMusic();
      applyMusicState();
    } catch (_) { /* ignore */ }
  };

  api.pauseMusic = function () {
    try { if (music) music.pause(); } catch (_) { /* ignore */ }
  };

  api.resumeMusic = function () {
    if (musicWanted) applyMusicState();
  };

  api.stopMusic = function () {
    musicWanted = false;
    try {
      if (music) {
        music.pause();
        music.currentTime = 0;
      }
    } catch (_) { /* ignore */ }
  };

  api.playClick = function () { playSfx('click', 0.85); };
  api.playWhoosh = function () {
    try {
      const now = performance.now();
      if (now - lastWhooshAt < 160) return;
      lastWhooshAt = now;
    } catch (_) { /* ignore */ }
    playSfx('whoosh', 0.15);
  };

  // Crash: Web Audio one-shot of the pre-trimmed middle 60%. No seek, no timer, no clone race.
  api.playCrash = function () { playSfx('crash', 0.95); };

  api.playWin = function () {};

  api.setMusicMuted = function (m) {
    musicMuted = !!m;
    applyMusicState();
    try { api.onMusicMuteChange?.(effMusicMuted()); } catch (_) { /* ignore */ }
  };
  api.toggleMusicMuted = function () {
    musicMuted = !musicMuted;
    applyMusicState();
    try { api.onMusicMuteChange?.(effMusicMuted()); } catch (_) { /* ignore */ }
    return effMusicMuted();
  };
  api.isMusicMuted = function () { return effMusicMuted(); };
  api.onMusicMuteChange = null;

  api.setSfxMuted = function (m) {
    sfxMuted = !!m;
    applySfxGain();
    try { api.onSfxMuteChange?.(effSfxMuted()); } catch (_) { /* ignore */ }
  };
  api.toggleSfxMuted = function () {
    sfxMuted = !sfxMuted;
    applySfxGain();
    try { api.onSfxMuteChange?.(effSfxMuted()); } catch (_) { /* ignore */ }
    return effSfxMuted();
  };
  api.isSfxMuted = function () { return effSfxMuted(); };
  api.onSfxMuteChange = null;

  api.setPlatformMuted = function (m) {
    platformMuted = !!m;
    applyMusicState();
    applySfxGain();
    try {
      api.onMusicMuteChange?.(effMusicMuted());
      api.onSfxMuteChange?.(effSfxMuted());
    } catch (_) { /* ignore */ }
  };

  // Muted for the duration of a platform ad break (adStarted..adFinished/adError),
  // independent of the SDK's own mute setting and the in-game toggle so ending
  // the ad restores whatever those were already set to.
  api.setAdMuted = function (m) {
    adMuted = !!m;
    applyMusicState();
    applySfxGain();
    try {
      api.onMusicMuteChange?.(effMusicMuted());
      api.onSfxMuteChange?.(effSfxMuted());
    } catch (_) { /* ignore */ }
  };

  return api;
}

export const Audio = makeManager();
