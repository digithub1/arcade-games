(function () {
  'use strict';

  var loader = null;
  var sdkReady = false;
  var rewardReady = false;
  var rewardWaiting = [];
  var rewardResolver = null;
  var rewardTimeout = null;

  function emit(name) {
    try {
      if (typeof window.__lastStandGdEvent === 'function') {
        window.__lastStandGdEvent(name);
      }
    } catch (error) {
      console.warn('[WGPlayer Adapter] Event error:', error);
    }
  }

  function getLoader() {
    try {
      if (window.preroll && window.preroll.config && window.preroll.config.loaderObjectName) {
        return window[window.preroll.config.loaderObjectName] || null;
      }
    } catch (error) {}
    return null;
  }

  function waitForLoader(timeout) {
    timeout = timeout || 12000;
    return new Promise(function (resolve) {
      var started = Date.now();
      function check() {
        loader = getLoader();
        if (loader) {
          sdkReady = true;
          resolve(loader);
          return;
        }
        if (Date.now() - started >= timeout) {
          resolve(null);
          return;
        }
        setTimeout(check, 100);
      }
      check();
    });
  }

  function settleRewardWaiters(ok) {
    var list = rewardWaiting.slice();
    rewardWaiting.length = 0;
    list.forEach(function (entry) {
      clearTimeout(entry.timer);
      ok ? entry.resolve(true) : entry.reject(new Error('Reward ad unavailable'));
    });
  }

  function registerRewardCallbacks(activeLoader) {
    if (!activeLoader || typeof activeLoader.registerRewardCallbacks !== 'function') return;
    try {
      activeLoader.registerRewardCallbacks({
        onReady: function () {
          rewardReady = true;
          settleRewardWaiters(true);
        },
        onSuccess: function () {
          rewardReady = false;
          emit('SDK_REWARDED_WATCH_COMPLETE');
          if (rewardResolver) {
            rewardResolver(true);
            rewardResolver = null;
          }
          clearTimeout(rewardTimeout);
          emit('SDK_GAME_START');
        },
        onFail: function () {
          rewardReady = false;
          if (rewardResolver) {
            rewardResolver(false);
            rewardResolver = null;
          }
          clearTimeout(rewardTimeout);
          emit('SDK_GAME_START');
        }
      });
    } catch (error) {
      console.warn('[WGPlayer Adapter] Reward callback registration failed:', error);
    }
  }

  function preloadReward() {
    if (rewardReady) return Promise.resolve(true);
    return waitForLoader().then(function (activeLoader) {
      if (!activeLoader) throw new Error('WGPlayer loader unavailable');
      registerRewardCallbacks(activeLoader);
      return new Promise(function (resolve, reject) {
        var entry = {
          resolve: resolve,
          reject: reject,
          timer: setTimeout(function () {
            var index = rewardWaiting.indexOf(entry);
            if (index >= 0) rewardWaiting.splice(index, 1);
            reject(new Error('Reward ad not ready'));
          }, 15000)
        };
        rewardWaiting.push(entry);
      });
    });
  }

  function showMidroll() {
    return waitForLoader().then(function (activeLoader) {
      return new Promise(function (resolve) {
        emit('SDK_GAME_PAUSE');
        var finished = false;
        function done() {
          if (finished) return;
          finished = true;
          emit('SDK_GAME_START');
          resolve(true);
        }
        try {
          if (activeLoader && typeof activeLoader.refetchAd === 'function') {
            activeLoader.refetchAd(done);
            setTimeout(done, 30000);
          } else if (activeLoader && typeof activeLoader.fetchAd === 'function') {
            activeLoader.fetchAd(done);
            setTimeout(done, 30000);
          } else {
            done();
          }
        } catch (error) {
          console.warn('[WGPlayer Adapter] Midroll failed:', error);
          done();
        }
      });
    });
  }

  function showReward() {
    var readyPromise = rewardReady ? Promise.resolve(true) : preloadReward();
    return readyPromise.then(function () {
      return waitForLoader();
    }).then(function (activeLoader) {
      return new Promise(function (resolve) {
        emit('SDK_GAME_PAUSE');
        rewardResolver = resolve;
        rewardTimeout = setTimeout(function () {
          if (rewardResolver) {
            rewardResolver(false);
            rewardResolver = null;
          }
          emit('SDK_GAME_START');
        }, 45000);
        try {
          if (activeLoader && typeof activeLoader.showRewardAd === 'function') {
            activeLoader.showRewardAd();
          } else {
            clearTimeout(rewardTimeout);
            rewardResolver = null;
            emit('SDK_GAME_START');
            resolve(false);
          }
        } catch (error) {
          console.warn('[WGPlayer Adapter] Reward ad failed:', error);
          clearTimeout(rewardTimeout);
          rewardResolver = null;
          emit('SDK_GAME_START');
          resolve(false);
        }
      });
    });
  }

  window.gdsdk = {
    preloadAd: function (type) {
      return type === 'rewarded' ? preloadReward() : waitForLoader();
    },
    showAd: function (type) {
      return type === 'rewarded' ? showReward() : showMidroll();
    }
  };

  document.addEventListener('wgSdkReady', function () {
    loader = getLoader();
    sdkReady = Boolean(loader);
    if (loader) registerRewardCallbacks(loader);
    emit('SDK_READY');
  });

  waitForLoader().then(function (activeLoader) {
    if (activeLoader) {
      registerRewardCallbacks(activeLoader);
      emit('SDK_READY');
    }
  });
}());
