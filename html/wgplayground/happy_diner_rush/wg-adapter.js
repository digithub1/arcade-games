(() => {
  'use strict';

  const cfg = window.HDR_PORTAL_CONFIG || {};
  const cooldownMs = Number(cfg.interstitialCooldownMs || 120000);

  let sdkReady = false;
  let loader = null;
  let interBusy = false;
  let lastInterstitialAt = -Infinity;
  let pendingInterstitial = null;
  let postLoadRequested = false;

  let rewardReady = false;
  let rewardBusy = false;
  let pendingReward = null;

  function now() {
    return performance.now();
  }

  function getLoader() {
    try {
      if (!window.preroll || !window.preroll.config || !window.preroll.config.loaderObjectName) return null;
      return window[window.preroll.config.loaderObjectName] || null;
    } catch (e) {
      return null;
    }
  }

  function canShowInterstitial() {
    return !!loader && !interBusy && (now() - lastInterstitialAt >= cooldownMs);
  }

  function showInterstitial(type = 'next', name = 'game-break') {
    // WGPlayground build intentionally does NOT pause or mute the game before ads.
    // The callback is only used to mark the ad request complete.
    if (!cfg.adsEnabled) return Promise.resolve(false);

    if (!sdkReady || !loader) {
      // Keep only the latest not-yet-ready placement. Post-load gets priority once requested.
      if (!pendingInterstitial || name === 'post-loading') pendingInterstitial = { type, name };
      return Promise.resolve(false);
    }

    if (!canShowInterstitial()) return Promise.resolve(false);

    interBusy = true;
    lastInterstitialAt = now();

    return new Promise((resolve) => {
      let done = false;
      const finish = (shown) => {
        if (done) return;
        done = true;
        interBusy = false;
        resolve(!!shown);
      };

      try {
        loader.refetchAd(() => finish(true));
      } catch (e) {
        console.error('WGPlayground interstitial error:', e);
        finish(false);
      }
    });
  }

  function finishPendingReward(success) {
    const p = pendingReward;
    pendingReward = null;
    rewardBusy = false;
    if (!p) return;
    if (success) {
      try { p.onReward(); } catch (e) { console.error('WGPlayground reward grant error:', e); }
    }
    p.resolve(!!success);
  }

  function tryShowPendingReward() {
    if (!pendingReward || rewardBusy || !rewardReady || !loader) return;
    rewardBusy = true;
    rewardReady = false;
    try {
      // No pause or mute is applied here by design.
      loader.showRewardAd();
    } catch (e) {
      console.error('WGPlayground rewarded show error:', e);
      finishPendingReward(false);
    }
  }

  function registerRewarded() {
    if (!loader || typeof loader.registerRewardCallbacks !== 'function') return;
    try {
      loader.registerRewardCallbacks({
        onReady: () => {
          rewardReady = true;
          tryShowPendingReward();
        },
        onSuccess: () => {
          rewardReady = false;
          finishPendingReward(true);
        },
        onFail: () => {
          rewardReady = false;
          finishPendingReward(false);
        }
      });
    } catch (e) {
      console.error('WGPlayground reward callback registration error:', e);
    }
  }

  function showRewarded(name = 'bonus', onReward = () => {}) {
    if (!cfg.adsEnabled || !sdkReady || !loader || rewardBusy || pendingReward) {
      return Promise.resolve(false);
    }

    return new Promise((resolve) => {
      pendingReward = { name, onReward, resolve };
      tryShowPendingReward();
    });
  }

  function onSdkReady() {
    if (sdkReady) return;
    loader = getLoader();
    if (!loader) return;
    sdkReady = true;
    registerRewarded();

    // If the page already completed loading, the first ad belongs immediately after loading.
    if (cfg.postLoadInterstitial && document.readyState === 'complete' && !postLoadRequested) {
      postLoadRequested = true;
      pendingInterstitial = { type: 'browse', name: 'post-loading' };
    }

    if (pendingInterstitial) {
      const p = pendingInterstitial;
      pendingInterstitial = null;
      queueMicrotask(() => showInterstitial(p.type, p.name));
    }
  }

  document.addEventListener('wgSdkReady', onSdkReady, { once: true });

  // In case the tag completed before this adapter executed.
  queueMicrotask(onSdkReady);

  window.addEventListener('load', () => {
    if (!cfg.postLoadInterstitial || postLoadRequested) return;
    postLoadRequested = true;
    if (sdkReady && loader) {
      showInterstitial('browse', 'post-loading');
    } else {
      pendingInterstitial = { type: 'browse', name: 'post-loading' };
    }
  }, { once: true });

  window.HDRPortal = {
    isReady: () => sdkReady && !!loader,
    cooldownRemainingMs: () => Math.max(0, cooldownMs - (now() - lastInterstitialAt)),
    showInterstitial,
    showRewarded
  };
})();
