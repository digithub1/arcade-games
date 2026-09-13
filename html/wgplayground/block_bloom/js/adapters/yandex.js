// ═════════════════════════════════════════════════════════════════════════
// Yandex Games adapter — wraps the Yandex Games SDK v2 (YaGames).
//   • init loads the SDK and signals LoadingAPI.ready()
//   • language from ysdk.environment.i18n.lang
//   • gameplay lifecycle via GameplayAPI.start()/stop()
//   • interstitial  -> adv.showFullscreenAdv
//   • rewarded      -> adv.showRewardedVideo (reward on onRewarded)
//   • NO sticky banners — showBannerAdv is deliberately never called.
// Every call guards on the SDK being present.
// ═════════════════════════════════════════════════════════════════════════
(function () {
  'use strict';
  let ysdk = null;

  (window.BB_ADAPTERS || (window.BB_ADAPTERS = {})).yandex = {
    name: 'yandex',

    async init() {
      try {
        await window.BB_loadScript('https://yandex.ru/games/sdk/v2');
        ysdk = await window.YaGames.init();
        try { ysdk.features.LoadingAPI && ysdk.features.LoadingAPI.ready(); } catch (e) {}
      } catch (e) { ysdk = null; /* SDK unavailable — stays a no-op */ }
    },

    getLanguage() {
      try { return ysdk.environment.i18n.lang; } catch (e) { return null; }
    },
    getFallbackLang() { return 'ru'; }, // Yandex Games is a Russian-first portal

    gameplayStart() { try { ysdk.features.GameplayAPI.start(); } catch (e) {} },
    gameplayStop() { try { ysdk.features.GameplayAPI.stop(); } catch (e) {} },

    // Yandex decides fill at show time; report available whenever the SDK is up.
    isAdAvailable(_type) { return !!ysdk; },

    showInterstitial() {
      if (!ysdk) return;
      try { ysdk.adv.showFullscreenAdv({ callbacks: { onClose: function () {}, onError: function () {} } }); }
      catch (e) {}
    },

    showRewarded(onSuccess, onUnavailable) {
      if (!ysdk) { onUnavailable(); return; }
      let granted = false;
      const pause = () => { try { window.BB_PLATFORM_API.pauseHooks.onPause(); } catch (e) {} };
      const resume = () => { try { window.BB_PLATFORM_API.pauseHooks.onResume(); } catch (e) {} };
      try {
        ysdk.adv.showRewardedVideo({
          callbacks: {
            onOpen: pause,
            onRewarded: function () { if (!granted) { granted = true; onSuccess(); } },
            onClose: function () { resume(); if (!granted) onUnavailable(); },
            onError: function () { resume(); if (!granted) onUnavailable(); },
          },
        });
      } catch (e) { resume(); onUnavailable(); }
    },
  };
})();
