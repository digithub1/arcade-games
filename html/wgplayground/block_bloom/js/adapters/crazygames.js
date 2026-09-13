// ═════════════════════════════════════════════════════════════════════════
// CrazyGames adapter — wraps the CrazyGames HTML5 SDK v3. Every call guards on
// the SDK being present so it is safe even if the script is blocked/offline.
// ═════════════════════════════════════════════════════════════════════════
(function () {
  'use strict';
  let ready = false;
  const sdk = () => (window.CrazyGames && window.CrazyGames.SDK) || null;
  const guard = (fn) => { const s = sdk(); if (ready && s) { try { fn(s); } catch (e) {} } };

  (window.BB_ADAPTERS || (window.BB_ADAPTERS = {})).crazygames = {
    name: 'crazygames',

    async init() {
      try {
        await window.BB_loadScript('https://sdk.crazygames.com/crazygames-sdk-v3.js');
        const s = sdk();
        if (s) {
          try { s.game.sdkGameLoadingStart && s.game.sdkGameLoadingStart(); } catch (e) {}
          await s.init();
          ready = true;
          try { s.game.sdkGameLoadingStop && s.game.sdkGameLoadingStop(); } catch (e) {}
        }
      } catch (e) { /* SDK blocked/offline — stays a no-op */ }
    },

    // CrazyGames doesn't expose a reliable UI language; use the browser's.
    getLanguage() {
      return (navigator.languages && navigator.languages[0]) || navigator.language || null;
    },
    getFallbackLang() { return 'en'; },

    gameplayStart() { guard(s => s.game.gameplayStart()); },
    gameplayStop() { guard(s => s.game.gameplayStop()); },

    // CrazyGames decides fill at show time; report available whenever ready.
    isAdAvailable(_type) { return ready; },

    showInterstitial() { guard(s => s.ad.requestAd('midgame')); },

    showRewarded(onSuccess, onUnavailable) {
      if (!ready || !sdk()) { onUnavailable(); return; }
      let granted = false;
      const pause = () => { try { window.BB_PLATFORM_API.pauseHooks.onPause(); } catch (e) {} };
      const resume = () => { try { window.BB_PLATFORM_API.pauseHooks.onResume(); } catch (e) {} };
      const grant = () => { resume(); if (!granted) { granted = true; onSuccess(); } };
      try {
        sdk().ad.requestAd('rewarded', {
          adStarted: pause,
          adFinished: grant,   // reward on successful completion
          adError: () => { resume(); if (!granted) onUnavailable(); },
        });
      } catch (e) { resume(); onUnavailable(); }
    },
  };
})();
