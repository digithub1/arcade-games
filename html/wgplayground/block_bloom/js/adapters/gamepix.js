// GamePix adapter. Official GamePix Game SDK v3 (script tag in index.html:
// https://integration.gamepix.com/sdk/v3/gamepix.sdk.js).
//
// Per GamePix docs, GamePix.loaded() must run before ANY other GamePix.*
// call (rewardAd, interstitialAd, lang, localStorage, ...) or the SDK logs
// GAMEPIX_LOADED_NOT_CALLED. Game code (Store, I18N) reads GamePix.lang()/
// localStorage synchronously during boot, before this adapter's async init()
// would ever run — so loaded() fires here, synchronously, at script-load
// time (this file loads after config.js sets window.BB_PLATFORM and before
// game.js runs), ahead of everything else that touches GamePix.
(function () {
  'use strict';
  // Bounds GamePix.rewardAd()/interstitialAd() so a network stall or a
  // Promise that never settles can never freeze the bonus buttons — same
  // "never let a hung SDK call block the game" pattern as BB_loadScript's
  // timeout and Platform.init()'s Promise.race in platform.js.
  const AD_TIMEOUT_MS = 20000;
  let ready = false;
  let interstitialInFlight = false;
  let rewardInFlight = false;
  const sdk = () => window.GamePix || null;
  const pause = () => { try { window.BB_PLATFORM_API.pauseHooks.onPause(); } catch (_) {} };
  const resume = () => { try { window.BB_PLATFORM_API.pauseHooks.onResume(); } catch (_) {} };

  if (window.BB_PLATFORM === 'gamepix') {
    const gp = sdk();
    if (gp) {
      try {
        if (typeof gp.loading === 'function') gp.loading(100);
        if (typeof gp.loaded === 'function') gp.loaded();
        ready = true;
      } catch (_) { ready = false; }
    }
  }

  (window.BB_ADAPTERS || (window.BB_ADAPTERS = {})).gamepix = {
    name: 'gamepix',

    // GamePix.loaded() already fired above (must only be called once).
    async init() {},

    getLanguage() { try { return ready && sdk() && typeof sdk().lang === 'function' ? sdk().lang() : null; } catch (_) { return null; } },
    getFallbackLang() { return 'en'; },
    gameplayStart() {},
    gameplayStop() {},

    updateScore(value) { try { const gp = sdk(); if (ready && gp && typeof gp.updateScore === 'function') gp.updateScore(value); } catch (_) {} },
    updateLevel(value) { try { const gp = sdk(); if (ready && gp && typeof gp.updateLevel === 'function') gp.updateLevel(value); } catch (_) {} },
    happyMoment() { try { const gp = sdk(); if (ready && gp && typeof gp.happyMoment === 'function') gp.happyMoment(); } catch (_) {} },

    isAdAvailable(type) {
      const gp = sdk();
      if (!ready || !gp) return false;
      if (type === 'interstitial') return typeof gp.interstitialAd === 'function' && !interstitialInFlight;
      if (type === 'rewarded') return typeof gp.rewardAd === 'function' && !rewardInFlight;
      return false;
    },

    showInterstitial() {
      const gp = sdk();
      if (!ready || !gp || typeof gp.interstitialAd !== 'function' || interstitialInFlight) return;
      interstitialInFlight = true;
      pause();
      let settled = false;
      const finish = function () {
        if (settled) return;
        settled = true;
        interstitialInFlight = false;
        resume();
      };
      gp.interstitialAd().then(finish).catch(finish);
      setTimeout(finish, AD_TIMEOUT_MS);
    },

    // Reports the SDK's actual result back to the game, which grants the
    // reward (see game.js `_requestRewarded`). Never grants anything itself.
    showRewarded(onSuccess, onUnavailable) {
      const gp = sdk();
      if (!ready || !gp || typeof gp.rewardAd !== 'function' || rewardInFlight) { onUnavailable(); return; }
      rewardInFlight = true;
      pause();
      let settled = false;
      const finish = function (granted) {
        if (settled) return;
        settled = true;
        rewardInFlight = false;
        if (granted) { onSuccess(); } else { onUnavailable(); }
        resume();
      };
      gp.rewardAd().then(function (res) { finish(!!(res && res.success)); }).catch(function () { finish(false); });
      setTimeout(function () { finish(false); }, AD_TIMEOUT_MS);
    },
  };
})();
