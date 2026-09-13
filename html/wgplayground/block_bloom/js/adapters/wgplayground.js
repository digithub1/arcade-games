// WG Playground / WGPlayer adapter for vanilla HTML5 games.
(function () {
  'use strict';

  let ready = false;
  let rewardReady = false;
  let pendingReward = null;

  const platform = () => window.BB_PLATFORM_API;
  const pause = () => { try { platform().pauseHooks.onPause(); } catch (_) {} };
  const resume = () => { try { platform().pauseHooks.onResume(); } catch (_) {} };

  function loader() {
    try {
      const name = window.preroll && window.preroll.config && window.preroll.config.loaderObjectName;
      return name && window[name] ? window[name] : null;
    } catch (_) { return null; }
  }

  function waitForLoader(timeoutMs) {
    return new Promise(resolve => {
      const started = Date.now();
      const poll = () => {
        const sdk = loader();
        if (sdk) { resolve(sdk); return; }
        if (Date.now() - started >= timeoutMs) { resolve(null); return; }
        setTimeout(poll, 100);
      };
      poll();
    });
  }

  function settleReward(granted) {
    const request = pendingReward;
    pendingReward = null;
    rewardReady = false;
    resume();
    if (!request) return;
    try { granted ? request.success() : request.unavailable(); } catch (_) {}
  }

  (window.BB_ADAPTERS || (window.BB_ADAPTERS = {})).wgplayground = {
    name: 'wgplayground',

    async init() {
      const sdk = await waitForLoader(7000);
      if (!sdk) return;
      ready = true;
      try {
        sdk.registerRewardCallbacks({
          onReady: function () { rewardReady = true; },
          onSuccess: function () { settleReward(true); },
          onFail: function () { settleReward(false); },
        });
      } catch (_) {
        rewardReady = false;
      }
    },

    getLanguage() {
      try { return navigator.language || navigator.userLanguage || null; }
      catch (_) { return null; }
    },
    getFallbackLang() { return 'en'; },
    gameplayStart() {},
    gameplayStop() {},

    isAdAvailable(type) {
      if (!ready || !loader()) return false;
      return type === 'rewarded' ? rewardReady : type === 'interstitial';
    },

    showInterstitial() {
      const sdk = loader();
      if (!ready || !sdk || typeof sdk.refetchAd !== 'function') return;
      pause();
      let resumed = false;
      const done = () => {
        if (resumed) return;
        resumed = true;
        resume();
      };
      try { sdk.refetchAd(done); }
      catch (_) { done(); }
    },

    showRewarded(onSuccess, onUnavailable) {
      const sdk = loader();
      if (!ready || !rewardReady || !sdk || typeof sdk.showRewardAd !== 'function') {
        onUnavailable();
        return;
      }
      pendingReward = { success: onSuccess, unavailable: onUnavailable };
      pause();
      try { sdk.showRewardAd(); }
      catch (_) { settleReward(false); }
    },
  };
})();
