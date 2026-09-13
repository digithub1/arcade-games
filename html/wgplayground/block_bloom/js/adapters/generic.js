// ═════════════════════════════════════════════════════════════════════════
// Generic adapter — no SDK. For itch.io, self-hosting, or plain file:// play.
// Language comes from navigator; there are no ads, EXCEPT that rewarded calls
// resolve instantly so reward-gated features (booster recharge, continue) keep
// working without any ad network.
// ═════════════════════════════════════════════════════════════════════════
(function () {
  'use strict';
  (window.BB_ADAPTERS || (window.BB_ADAPTERS = {})).generic = {
    name: 'generic',

    async init() { /* nothing to load */ },

    getLanguage() {
      return (navigator.languages && navigator.languages[0]) || navigator.language || null;
    },
    getFallbackLang() { return 'en'; },

    gameplayStart() {},
    gameplayStop() {},

    // No real ads. Rewarded is "available" because we always grant the reward
    // (so boosters/continue work); interstitial has nothing to show.
    isAdAvailable(type) { return type === 'rewarded'; },

    showInterstitial() { /* no-op */ },
    showRewarded(onSuccess, _onUnavailable) { onSuccess(); }, // grant immediately
  };
})();
