// ═════════════════════════════════════════════════════════════════════════
// Platform facade — the ONLY thing the game talks to for anything platform /
// SDK related. The game code must NEVER touch a portal SDK directly; it calls
// these methods and this facade delegates to the adapter chosen by the build
// flag (window.BB_PLATFORM, see js/config.js).
//
// Interface every adapter (js/adapters/*.js) implements:
//   init() -> Promise<void>          load + initialize the SDK (never throws)
//   getLanguage() -> string|null     raw UI language; game normalizes it
//   getFallbackLang() -> string      language to use if none detected
//   gameplayStart() / gameplayStop() round lifecycle signals
//   isAdAvailable(type) -> bool      type: 'interstitial' | 'rewarded'
//   showInterstitial()               full-screen ad (fire and forget)
//   showRewarded(onSuccess, onUnavailable) report reward or no-fill/error
//
// IMPORTANT: ad *policy* (how often, when, once-per-game, etc.) lives in the
// game, NOT here. Adapters only show an ad when asked and report availability.
//
// ── TO ADD A PLATFORM: drop js/adapters/<name>.js that registers
//    window.BB_ADAPTERS['<name>'] = { ...interface... }, add its <script> tag
//    to index.html, and set window.BB_PLATFORM = '<name>' in js/config.js. ──
// ═════════════════════════════════════════════════════════════════════════
(function () {
  'use strict';

  // Shared helper: load an external SDK <script> with a timeout so a hung or
  // blocked SDK host can never stall the game start. Adapters use this.
  window.BB_loadScript = function (src, timeoutMs) {
    return new Promise((resolve, reject) => {
      const s = document.createElement('script');
      let done = false;
      const finish = (ok) => {
        if (done) return; done = true;
        ok ? resolve() : reject(new Error('script load failed: ' + src));
      };
      s.src = src;
      s.async = true;
      s.onload = () => finish(true);
      s.onerror = () => finish(false);
      document.head.appendChild(s);
      setTimeout(() => finish(false), timeoutMs || 6000);
    });
  };

  const registry = window.BB_ADAPTERS || (window.BB_ADAPTERS = {});

  const Platform = {
    name: 'generic',
    adapter: null,
    initialized: false,
    gameplayActive: false,

    // Lifecycle hooks the game registers so an adapter can pause/resume the
    // game around a full-screen ad (mute audio, ignore input). Adapters that
    // don't need it simply never call them.
    pauseHooks: { onPause: null, onResume: null },
    setPauseHooks(onPause, onResume) { this.pauseHooks = { onPause: onPause, onResume: onResume }; },

    // Synchronous: pick the adapter from the build flag. Safe to call before
    // init() so gameplayStart()/getFallbackLang() work while the SDK loads.
    select() {
      const key = window.BB_PLATFORM || 'generic';
      this.adapter = registry[key] || registry.generic;
      this.name = this.adapter ? this.adapter.name : 'generic';
      return this;
    },

    // Async: load + initialize the SDK. Never throws; time-bounded so a hung
    // SDK host can't stall anything that awaits it.
    async init() {
      if (!this.adapter) this.select();
      try {
        await Promise.race([
          this.adapter.init(),
          new Promise((resolve) => setTimeout(resolve, 8000)),
        ]);
      } catch (e) { /* never fatal */ }
      this.initialized = true;
      try {
        if (this.gameplayActive) this.adapter.gameplayStart();
        else this.adapter.gameplayStop();
      } catch (e) {}
    },

    getLanguage() { try { return this.adapter.getLanguage(); } catch (e) { return null; } },
    getFallbackLang() { try { return this.adapter.getFallbackLang(); } catch (e) { return 'en'; } },
    gameplayStart() {
      if (this.gameplayActive) return;
      this.gameplayActive = true;
      if (this.initialized) { try { this.adapter.gameplayStart(); } catch (e) {} }
    },
    gameplayStop() {
      if (!this.gameplayActive) return;
      this.gameplayActive = false;
      if (this.initialized) { try { this.adapter.gameplayStop(); } catch (e) {} }
    },
    isAdAvailable(type) { try { return !!this.adapter.isAdAvailable(type); } catch (e) { return false; } },
    showInterstitial() { try { this.adapter.showInterstitial(); } catch (e) {} },
    showRewarded(onSuccess, onUnavailable) {
      const reward = typeof onSuccess === 'function' ? onSuccess : function () {};
      const unavailable = typeof onUnavailable === 'function' ? onUnavailable : function () {};
      if (!this.initialized || !this.isAdAvailable('rewarded')) { unavailable(); return; }
      let settled = false;
      const finish = (granted) => {
        if (settled) return;
        settled = true;
        granted ? reward() : unavailable();
      };
      try { this.adapter.showRewarded(() => finish(true), () => finish(false)); }
      catch (e) { finish(false); }
    },
  };

  window.BB_PLATFORM_API = Platform;
})();
