// ═════════════════════════════════════════════════════════════════════════
// GameDistribution adapter — wraps the GameDistribution HTML5 SDK
// (window.gdsdk, configured via window.GD_OPTIONS + main.min.js).
//   • init sets GD_OPTIONS with the game id and loads the SDK
//   • interstitial -> gdsdk.showAd(Interstitial)
//   • rewarded     -> gdsdk.showAd(Rewarded); reward granted on the
//                     SDK_REWARDED_WATCH_COMPLETE event
//   • SDK_GAME_PAUSE / SDK_GAME_START drive the game's pause hooks so audio
//     mutes and input is ignored while an ad is on screen
// Every call guards on the SDK being present.
//
// The game id is baked in below (override with window.BB_GD_GAME_ID if needed).
// ═════════════════════════════════════════════════════════════════════════
(function () {
  'use strict';
  var GAME_ID = window.BB_GD_GAME_ID || '97275cca423f4ece8c75453a8ed6e92d';
  var ready = false;
  var rewardCb = null;     // pending rewarded callback
  var rewardGranted = false;

  function hooks() { return (window.BB_PLATFORM_API && window.BB_PLATFORM_API.pauseHooks) || {}; }
  function fire(fn) { var h = hooks()[fn]; if (h) { try { h(); } catch (e) {} } }

  (window.BB_ADAPTERS || (window.BB_ADAPTERS = {})).gamedistribution = {
    name: 'gamedistribution',

    async init() {
      window.GD_OPTIONS = {
        gameId: GAME_ID,
        onEvent: function (event) {
          switch (event && event.name) {
            case 'SDK_READY': ready = true; break;
            case 'SDK_GAME_PAUSE': fire('onPause'); break;   // ad opened
            case 'SDK_GAME_START': fire('onResume'); break;  // ad closed / resume
            case 'SDK_REWARDED_WATCH_COMPLETE':
              if (rewardCb && !rewardGranted) { rewardGranted = true; try { rewardCb(); } catch (e) {} }
              break;
            default: break;
          }
        },
      };
      try {
        await window.BB_loadScript('https://html5.api.gamedistribution.com/main.min.js');
        ready = ready || !!window.gdsdk; // SDK_READY may also flip this via onEvent
      } catch (e) { /* blocked/offline — stays a no-op */ }
    },

    // GameDistribution doesn't expose a UI language; use the browser's.
    getLanguage() {
      return (navigator.languages && navigator.languages[0]) || navigator.language || null;
    },
    getFallbackLang() { return 'en'; },

    gameplayStart() {}, // GD manages this via SDK_GAME_PAUSE/START around ads
    gameplayStop() {},

    isAdAvailable(_type) { return ready || !!window.gdsdk; },

    showInterstitial() {
      var sdk = window.gdsdk;
      if (!sdk) return;
      try {
        var at = sdk.AdType ? sdk.AdType.Interstitial : 'interstitial';
        Promise.resolve(sdk.showAd(at)).catch(function () {});
      } catch (e) { try { sdk.showAd(); } catch (_) {} }
    },

    showRewarded(onSuccess) {
      var sdk = window.gdsdk;
      if (!sdk) return; // real ad platform: no SDK → no reward
      rewardCb = onSuccess;
      rewardGranted = false; // reward is granted in onEvent on WATCH_COMPLETE
      try {
        var at = sdk.AdType ? sdk.AdType.Rewarded : 'rewarded';
        Promise.resolve(sdk.showAd(at)).catch(function () {});
      } catch (e) {}
    },
  };
})();
