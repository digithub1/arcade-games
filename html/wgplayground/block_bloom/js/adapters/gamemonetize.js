// GameMonetize HTML5 SDK adapter.
// Set window.BB_GAMEMONETIZE_GAME_ID before this file loads (normally in
// js/config.js). The SDK exposes one full-screen ad method, showBanner(), so
// both interstitial and rewarded requests use it. A reward is granted only
// after the SDK reports that an ad paused the game and subsequently finished.
(function () {
  'use strict';

  var ready = false;
  var adPaused = false;
  var pendingReward = null;

  function hooks() {
    return (window.BB_PLATFORM_API && window.BB_PLATFORM_API.pauseHooks) || {};
  }
  function fireHook(name) {
    var fn = hooks()[name];
    if (fn) { try { fn(); } catch (e) {} }
  }
  function handleEvent(event) {
    switch (event && event.name) {
      case 'SDK_READY': ready = true; break;
      case 'SDK_GAME_PAUSE':
        adPaused = true;
        fireHook('onPause');
        break;
      case 'SDK_GAME_START':
        fireHook('onResume');
        if (adPaused && pendingReward) {
          var grant = pendingReward;
          pendingReward = null;
          try { grant(); } catch (e) {}
        }
        adPaused = false;
        break;
      default: break;
    }
  }

  // The official bootstrap in index.html can emit SDK_READY before this
  // adapter loads, so bridge and drain any queued events immediately.
  window.BB_onGameMonetizeEvent = handleEvent;
  var queuedEvents = window.BB_GM_EVENT_QUEUE || [];
  while (queuedEvents.length) handleEvent(queuedEvents.shift());

  function showAd() {
    if (!ready || !window.sdk || typeof window.sdk.showBanner !== 'function') return false;
    try { window.sdk.showBanner(); return true; } catch (e) { return false; }
  }

  (window.BB_ADAPTERS || (window.BB_ADAPTERS = {})).gamemonetize = {
    name: 'gamemonetize',
    async init() {
      var gameId = window.BB_GAMEMONETIZE_GAME_ID || '';
      if (!gameId || gameId === 'YOUR_GAME_ID_HERE') return;
      window.SDK_OPTIONS = window.SDK_OPTIONS || { gameId: gameId, onEvent: handleEvent };
      try {
        if (!document.getElementById('gamemonetize-sdk')) {
          await window.BB_loadScript('https://api.gamemonetize.com/sdk.js');
        }
        ready = ready || !!(window.sdk && typeof window.sdk.showBanner === 'function');
      } catch (e) { /* blocked/offline: ads remain unavailable */ }
    },
    getLanguage() {
      return (navigator.languages && navigator.languages[0]) || navigator.language || null;
    },
    getFallbackLang() { return 'en'; },
    gameplayStart() {},
    gameplayStop() {},
    isAdAvailable(_type) { return ready && !!window.sdk; },
    showInterstitial() {
      pendingReward = null;
      adPaused = false;
      showAd();
    },
    showRewarded(onSuccess) {
      pendingReward = typeof onSuccess === 'function' ? onSuccess : null;
      adPaused = false;
      if (!showAd()) pendingReward = null;
    },
  };
})();
