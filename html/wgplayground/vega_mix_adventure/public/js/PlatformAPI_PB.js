var CallbackDataStorage = {
  callbacks: {},

  set: function (key, uid, callbackMethodName) {
    this.callbacks[key] = {uid, callbackMethodName};
  },

  get: function (key) {
    const data = this.callbacks[key];
    delete this.callbacks[key];
    return data;
  },

  getWithoutDeleting: function (key) {
    return this.callbacks[key];
  },

  clear: function (key) {
    delete this.callbacks[key];
  }
};

window.onGPInit = async (gp) => {
  // Wait while the player syncs with the server
  await gp.player.ready;

  // error in Gamepix - player is not ready
  if (gp.platform.type !== 'GAMEPIX')
  {
    await gp.ads.showPreloader();
  }

  NetworkPlatformApi.gpInstance = gp;
  NetworkPlatformApi.isGpReady = true;
  //gp.gameStart();
};

var NetworkPlatformApi = {
  BANNER_HIDE_CD: "BANNER_HIDE_CD",
  BANNER_SHOW_CD: "BANNER_SHOW_CD",
  BANNER_CLOSED_BY_USER_CD: "BANNER_CLOSED_BY_USER_CD",
  INTERSTITIAL_SHOW_CD: "INTERSTITIAL_SHOW_CD",
  INTERSTITIAL_OPEN_CD: "INTERSTITIAL_OPEN_CD",

  // states
  windowFocused: false,
  gameplayStarted: false,
  isGameReady: false,
  isInterstitialProcessing: false,
  clientGameplayPlaying: false,
  isGpReady: false,
  gpInstance: null,
  isPlayerReceived: false,

  getSdk: function () {
    return this.gpInstance;
  },

  getPlatformSettings: async function () {
    while (!NetworkPlatformApi.isGpReady) await new Promise(r => setTimeout(r, 50));

    var settings = {
      Platform        : 'PB',
      HasSocial       : false, // временно отключен (не настроен API)
      HasAds          : true,
      HasPreroll      : false, // вызывается из window.onGPInit
      HasAppRating    : true,
      Language        : this.gpInstance.language,
      DefaultLanguage : 'en',
      FeaturesConfigs : {
        "options_popup": {
          "no_help_btn": true,
        }
      },

      PlatformKey : this.gpInstance.platform.type === 'PARTNER' ? this.gpInstance.platform.tag : 'PB'
    };

    return settings;
  },

  init: function () {
    const waitForReady = setInterval(() => {
      if (NetworkPlatformApi.isGpReady) {
        clearInterval(waitForReady);

        // Fullscreen opened
        this.gpInstance.ads.on('fullscreen:start', () => NetworkPlatformApi.interstitial_open());
        // Fullscreen closed
        this.gpInstance.ads.on('fullscreen:close', (success) => NetworkPlatformApi.interstitial_close(success));

        // Banner opened
        this.gpInstance.ads.on('sticky:start', () => NetworkPlatformApi.banner_start());
        // Banner closed
        this.gpInstance.ads.on('sticky:close', () => NetworkPlatformApi.banner_close());

        // Выключили звук
        this.gpInstance.sounds.on('mute', () => {
          // Необходимо выключить все звуки в игре
          NetworkPlatformApi.sendAudioSettings("sound", false);
        });
        // Выключили звуковые эффекты
        this.gpInstance.sounds.on('mute:sfx', () => {
          // Необходимо выключить звуковые эффекты (нажатия кнопок, шум стрельбы, звуки хотьбы, прыжков и прочего)
          NetworkPlatformApi.sendAudioSettings("sfx", false);
        });
        // Выключили музыку
        this.gpInstance.sounds.on('mute:music', () => {
          // Необходимо выключить музыку в игре
          NetworkPlatformApi.sendAudioSettings("music", false);
        });

        // Включили звук
        this.gpInstance.sounds.on('unmute', () => {
          NetworkPlatformApi.sendAudioSettings("sound", true);
          // Необходимо включить все звуки в игре
        });
        // Включили звуковые эффекты
        this.gpInstance.sounds.on('unmute:sfx', () => {
          // Необходимо включить звуковые эффекты в игре
          NetworkPlatformApi.sendAudioSettings("sfx", true);
        });
        // Включили музыку звуковые эффекты
        this.gpInstance.sounds.on('unmute:music', () => {
          // Необходимо включить музыку в игре
          NetworkPlatformApi.sendAudioSettings("music", true);
        });

        NetworkPlatformApi.initSuccessCallback();
        NetworkPlatformApi.initPageVisibilityStateListener();
      }
    }, 100);

    //NetworkPlatformApi.initErrorCallback();
  },

  initSuccessCallback: function () {
    var response = {'response': 'success'};
    NetworkPlatformApi.sendMessage('OnInitComplete', JSON.stringify(response));
  },

  initErrorCallback: function (error) {
    var response = {'error': error};
    NetworkPlatformApi.sendMessage('OnInitComplete', JSON.stringify(response));
  },

  printLog: function (...args) {
    console.log("[Pikabu_API]:", ...args);
  },

  sendMessage: function (method, param) {
    AppPage.unityInstance.SendMessage("SocialNetworkJsBridge", method, param);
  },

  // [Interstitial Ads]
  showInterstitialAd: function (openUid, closeUid, errorUid, onOpenMethodName, onCloseMethodName, onErrorMethodName) {
    if (this.isInterstitialProcessing) {
      NetworkPlatformApi.uiCallback.call(null, errorUid, onErrorMethodName, {
        "state": "error", "error": "interstitial is progress", "data": "VIDEO_ERROR"
      });
      return;
    }

    const ads = this.getSdk().ads;
    const isAvailable = ads.isFullscreenAvailable && !ads.isFullscreenPlaying;

    if (!isAvailable) {
      NetworkPlatformApi.uiCallback.call(null, errorUid, onErrorMethodName, {
        "state": "error", "error": "interstitial is not available", "data": "VIDEO_ERROR"
      });
      return;
    }

    this.isInterstitialProcessing = true;
    CallbackDataStorage.set(this.INTERSTITIAL_OPEN_CD, openUid, onOpenMethodName);
    CallbackDataStorage.set(this.INTERSTITIAL_SHOW_CD, closeUid, onCloseMethodName);

    ads.showFullscreen()
        .catch((err) => {
          console.error("Реклама не показана:", err);

          CallbackDataStorage.clear(this.INTERSTITIAL_SHOW_CD);
          CallbackDataStorage.clear(this.INTERSTITIAL_OPEN_CD);

          NetworkPlatformApi.isInterstitialProcessing = false;
          NetworkPlatformApi.uiCallback.call(null, errorUid, onErrorMethodName, {
            "state": "error", "error": err, "data": "VIDEO_ERROR"
          });
        });
  },

  interstitial_open: function () {
    if (!NetworkPlatformApi.isInterstitialProcessing) return;

    const cd = CallbackDataStorage.get(NetworkPlatformApi.INTERSTITIAL_OPEN_CD)
    if (cd) {
      NetworkPlatformApi.uiCallback.call(null, cd.uid, cd.callbackMethodName, {"state": "open"});
    }
  },

  interstitial_close: function (success) {
    if (!NetworkPlatformApi.isInterstitialProcessing) return;

    console.log("Реклама успешно показана");
    NetworkPlatformApi.isInterstitialProcessing = false;

    const cd = CallbackDataStorage.get(NetworkPlatformApi.INTERSTITIAL_SHOW_CD);
    if (cd) {
      NetworkPlatformApi.uiCallback.call(null, cd.uid, cd.callbackMethodName, {
        "state": "close", "wasShown": success, "data": "complete"
      });
    }
  },

  // [Rewarded Ads]
  loadRewardedAd: function (uid, callbackMethodName) {
    const ads = this.getSdk().ads;
    const isAvailable = ads.isRewardedAvailable && !ads.isRewardedPlaying;

    if (isAvailable) {
      NetworkPlatformApi.uiCallback.call(null, uid, callbackMethodName, {
        "method": "loadAd",
        "result": "ok",
        "data": "ready"
      });
    } else {
      NetworkPlatformApi.uiCallback.call(null, uid, callbackMethodName, {
        "method": "loadAd",
        "result": "error",
        "data": "error"
      });
    }
  },

  showRewardedAd: async function (uid, callbackMethodName) {
    const ads = this.getSdk().ads;
    const isAvailable = ads.isRewardedAvailable && !ads.isRewardedPlaying;

    if (!isAvailable) {
      NetworkPlatformApi.uiCallback.call(null, uid, callbackMethodName, {
        "error": "error", "method": "showLoadedAd", "result": "error", "data": "not_prepared"
      });
      return;
    }

    try {
      const success = await ads.showRewardedVideo();
      if (success) {
        console.log("Реклама показана, награда выдана");
        NetworkPlatformApi.uiCallback.call(null, uid, callbackMethodName, {
          "rewarded": true, "method": "showLoadedAd", "result": "ok", "data": "complete"
        });
      } else {
        NetworkPlatformApi.uiCallback.call(null, uid, callbackMethodName, {
          "rewarded": false, "method": "showLoadedAd", "result": "ok", "data": "complete"
        });
      }
    } catch (err) {
      console.error("Ошибка показа рекламы:", err);
      NetworkPlatformApi.uiCallback.call(null, uid, callbackMethodName, {
        "rewarded": false, "method": "showLoadedAd", "result": "error", "data": "skip"
      });
    }
  },

  requestBannerAds: function (callback_id, callbackMethodName) {
    const ads = this.getSdk().ads;
    const isAvailable = ads.isStickyAvailable && !ads.isStickyPlaying;

    var statusCode = isAvailable ? "ok" : "error";

    var result = {
      method: "requestBannerAds", result: statusCode, data: "ad_loaded"
    };
    this.uiCallback(callback_id, callbackMethodName, result);
  },

  showBannerAds: function (callback_id, callbackMethodName, position, layoutType, canClose) {
    CallbackDataStorage.set(this.BANNER_SHOW_CD, callback_id, callbackMethodName);
    this.gpInstance.ads.showSticky();
  },

  hideBannerAds: function (callback_id, callbackMethodName) {
    CallbackDataStorage.set(this.BANNER_HIDE_CD, callback_id, callbackMethodName);

    this.gpInstance.ads.closeSticky();
  },

  isBannerAdsVisible: function (callback_id, callbackMethodName) {
    var response = {
      detail: {
        data: {
          "result": NetworkPlatformApi.getSdk().ads.isStickyPlaying,
        }
      }
    }

    this.uiCallback(callback_id, callbackMethodName, response);
  },

  appBannerAdClosedByUser: function (callback_id, callbackMethodName) {
    let stickyPlaying = this.gpInstance.ads.isStickyPlaying;

    if (stickyPlaying)
    {
      CallbackDataStorage.set(this.BANNER_CLOSED_BY_USER_CD, callback_id, callbackMethodName);
      this.banner_close();
    }
    else
    {
      let result = {
        result: true
      }
      this.uiCallback(callback_id, callbackMethodName, result);
    }
  },

  appBannerAdUpdated: function (callback_id, callbackMethodName) {
    // not used
  },

  banner_start: function () {
    let cd = CallbackDataStorage.get(NetworkPlatformApi.BANNER_SHOW_CD);
    if (cd) {
      const response = {
        result: true
      }
      NetworkPlatformApi.uiCallback.call(null, cd.uid, cd.callbackMethodName, response);
    }
  },

  banner_close: function () {
    let cd = CallbackDataStorage.get(NetworkPlatformApi.BANNER_SHOW_CD);
    if (cd) {
      const response = { result: false }
      NetworkPlatformApi.uiCallback.call(null, cd.uid, cd.callbackMethodName, response);
    }

    cd = CallbackDataStorage.get(NetworkPlatformApi.BANNER_HIDE_CD);
    if (cd) {
      const response = { result: true }
      NetworkPlatformApi.uiCallback.call(null, cd.uid, cd.callbackMethodName, response);
    }

    cd = CallbackDataStorage.get(NetworkPlatformApi.BANNER_CLOSED_BY_USER_CD);
    if (cd) {
      const result = { result: true }
      NetworkPlatformApi.uiCallback.call(null, cd.uid, cd.callbackMethodName, result);
    }
  },

  consumePurchase: async function (uid, callbackMethodName, purchaseToken) {
    try{
      const result = await NetworkPlatformApi.gpInstance.payments.consume({tag: purchaseToken});
      NetworkPlatformApi.uiCallback.call(null, uid, callbackMethodName, { "data": result });
    }
    catch (error) {
      NetworkPlatformApi.uiCallback.call(null, uid, callbackMethodName, { "data": false });
    }
  },

  showPayment: async function (productName, productDescription, productCode, productPrice, paymentAttr, uid, callbackMethodName) {
    try {
      const payResult = await NetworkPlatformApi.gpInstance.payments.purchase({tag: productName});
      await NetworkPlatformApi.gpInstance.player.sync();

      const purchase = payResult.purchase;

      var result = {
        'success': true,
        'order_id': purchase.order_id,
      }

      NetworkPlatformApi.uiCallback.call(null, uid, callbackMethodName, result);
    }
    catch (error) {
      NetworkPlatformApi.uiCallback.call(null, uid, callbackMethodName, { "error": "", success: false });
    }
  },

  getCurrencyCode: function(uid, callbackMethodName) {
    var response = {
      result : 'rub'
    };

    this.uiCallback(uid, callbackMethodName, response);
  },

  getPurchasedItems: function(uid, callbackMethodName)  {
    const purchases = NetworkPlatformApi.gpInstance.payments.purchases;

    const purchasesResult = purchases.map(p => (
    {
      product_id      : p.productId,
      order_id        : p.payload.order_id,
    }));

    const response = {
      success : true,
      data    : purchasesResult
    };

    this.uiCallback(uid, callbackMethodName, response);
  },

  getProducts: function(uid, callbackMethodName) {
    const products = NetworkPlatformApi.gpInstance.payments.products;

    const productsResult = products.map(p => (
    {
      id      : p.tag,
      price   : p.price,
      currency: p.currencySymbol,
    }));

    const response = {
      success : true,
      data    : productsResult
    };

    this.uiCallback(uid, callbackMethodName, response);
  },

  updateState: function () {
    var isGameplayStarted = NetworkPlatformApi.windowFocused && !NetworkPlatformApi.isAdsShowing() && NetworkPlatformApi.isGameReady && NetworkPlatformApi.clientGameplayPlaying;

    if (NetworkPlatformApi.gameplayStarted === isGameplayStarted) {
      return;
    }

    NetworkPlatformApi.gameplayStarted = isGameplayStarted;
  },

  getPlayer: function (callback_id) {
    const player = this.gpInstance.player;

    const isLoggedIn = player.isLoggedIn;
    const authSupported = this.gpInstance.platform.hasIntegratedAuth;
    NetworkPlatformApi.printLog(`is authorizationSupported: ${authSupported}`);

    if (isLoggedIn || player.id) {
      sendPlayerData(player);
      return;
    }

    if (authSupported) {
      player.on("login", (success) => {
        if (player.id){
          sendPlayerData(player);
        }
        else{
          this.apiCallback(callback_id, { 'error': 'authorize is not success' });
          NetworkPlatformApi.printLog(`authorization error: ${error}`);
        }
      });
    }
    else{
      if (player.id){
        sendPlayerData(player);
      }
      else{
        this.apiCallback(callback_id, { 'error': 'authorize is not supported.' });
      }
    }

    function sendPlayerData(player) {
      const photo = player.avatar || "";

      var data = {
        "id": player.id,
        "first_name": player.name,
        "last_name": "",
        "gender": "",
        "mode": "",
        "pic50x50": photo,
        "pic128x128": photo,
        "avatarUrlLarge": photo
      };

      NetworkPlatformApi.apiCallback(callback_id, data);
    }
  },

  getPageHidden: function () {
    var tag = window.HiddenTag;
    if (!tag) {
      if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support
        tag = "hidden";
      } else if (typeof document.msHidden !== "undefined") {
        tag = "msHidden";
      } else if (typeof document.webkitHidden !== "undefined") {
        tag = "webkitHidden";
      }
    }

    var result = tag ? (document[tag] ? 1 : 0) : -1

    // временно для рекламы
    if (NetworkPlatformApi.adsShowing) {
      result = 1;
    }

    //return tag ? (document[tag] ? 1 : 0) : -1;
    return result;
  },

  api: function (methodName, params, callback_id)
  {
    if (methodName === "users.get" && !this.isPlayerReceived)
    {
      this.getPlayer(callback_id);
      NetworkPlatformApi.isPlayerReceived = true;
      return;
    }

    this.apiCallback(callback_id, { 'error': 'friends not using.' });
    console.log(`[Pikabu_API] api: methodName=${methodName}, params=${params}, callbackId=${callback_id}`);
  },

  apiCallback: function(callback_id, res) {
    var response = {
      'callback_id': callback_id,
      'response': {
        'data' : res
      }
    };

    if (res && typeof res === 'object' && res.hasOwnProperty('error')) {
      var err = res.error;

      if (typeof err === 'string') {
        err = { message: err };
      }
      else if (err == null) {
        err = { message: 'Unknown error' };
      }

      response.response.error = err;
    }

    const json = JSON.stringify(response);

    NetworkPlatformApi.sendMessage('OnSocialApiComplete', json);
  },

  isAdBlockEnabled: function (uid, callbackMethodName) {
    const isEnabled = this.getSdk().ads.isAdblockEnabled;

    var result = {
      "data": isEnabled
    };
    NetworkPlatformApi.uiCallback.call(null, uid, callbackMethodName, result);
  },

  showAppRating: async function (uid, callbackMethodName) {
    const app = NetworkPlatformApi.getSdk().app;
    const canReview = app.canRequestReview;

    if (!canReview) {
      NetworkPlatformApi.uiCallback.call(null, uid, callbackMethodName, {"error": "not_available"});
    }

    const result = await app.requestReview();
    const {success, rating, error} = result;

    if (success) {
      NetworkPlatformApi.uiCallback.call(null, uid, callbackMethodName, {"data": rating.toString()});
    } else if (error) {
      NetworkPlatformApi.uiCallback.call(null, uid, callbackMethodName, {"error": error});
    }
  },

  requestFullscreen: function () {
    // not used
  },

  requestScrollToFrame: function () {
    // not used
  },

  copyToClipboard: function (text) {
    navigator.clipboard.writeText(text)
        .then(() => {
          NetworkPlatformApi.sendLog('Copied to clipboard');
        })
        .catch(err => {
          NetworkPlatformApi.sendLog('Clipboard copy failed: ' + err);
        });
  },

  uiCallback: function (uid, callbackMethodName, response) {
    response = {'callback_id': uid, 'response': response};
    NetworkPlatformApi.sendMessage(callbackMethodName, JSON.stringify(response));
  },

  initPageVisibilityStateListener: function () {
    // Set the name of the hidden property and the change event for visibility
    let hidden;
    let visibilityChange;
    if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support
      hidden = "hidden";
      visibilityChange = "visibilitychange";
    } else if (typeof document.msHidden !== "undefined") {
      hidden = "msHidden";
      visibilityChange = "msvisibilitychange";
    } else if (typeof document.webkitHidden !== "undefined") {
      hidden = "webkitHidden";
      visibilityChange = "webkitvisibilitychange";
    }

    // If the page is hidden, pause the video;
    // if the page is shown, play the video
    function handleVisibilityChange() {
      if (document[hidden]) {
        NetworkPlatformApi.windowFocused = false;
        NetworkPlatformApi.updateState();

        NetworkPlatformApi.printLog("pause");
        NetworkPlatformApi.sendMessage("OnPageFocus", "hide");
      } else {
        NetworkPlatformApi.windowFocused = true;
        NetworkPlatformApi.updateState();

        NetworkPlatformApi.printLog("play");
        NetworkPlatformApi.sendMessage("OnPageFocus", "show");
      }
    }

    // Warn if the browser doesn't support addEventListener or the Page Visibility API
    if (typeof document.addEventListener === "undefined" || hidden === undefined) {
      NetworkPlatformApi.printLog("This demo requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.");
    } else {
      NetworkPlatformApi.windowFocused = !(document[hidden]);
      NetworkPlatformApi.updateState();

      // Handle page visibility change
      document.addEventListener(visibilityChange, handleVisibilityChange, false);
    }
  },

  setLBscore: async function (leaderboardNameString, scoreValue, extraCommentString) {
    await NetworkPlatformApi.getSdk().leaderboard.publishRecord({
      id: leaderboardNameString, record: {
        score: scoreValue,
      },
    });
  },

  getLBscore: async function (uid, callbackMethodName, leaderboardNameString) {
    const result = await NetworkPlatformApi.getSdk().leaderboard.fetchPlayerRatingScoped({
      id: leaderboardNameString, // ID таблицы
      includeFields: ['rank'], // Включить список полей игрока
    });

    const {player, fields, abovePlayers, belowPlayers} = result;

    var response = {
      "player_uniqueID": player.id,
      "player_publicName": player.name,
      "rank": player.position,
      "score": player.score,
      "extraData": "",
      "player_lang": "",
      "formattedScore": ""
    };

    NetworkPlatformApi.uiCallback.call(null, uid, callbackMethodName, {"result": response});
  },

  addLBscore: async function (leaderboardNameString, scoreValue, extraCommentString) {
    const result = await NetworkPlatformApi.getSdk().leaderboard.fetchPlayerRatingScoped({
      id: leaderboardNameString, // ID таблицы
    });

    const {player, fields, abovePlayers, belowPlayers} = result;
    const newScore = player.score + scoreValue;

    NetworkPlatformApi.setLBscore(leaderboardNameString, newScore, extraCommentString);
  },

  achieveGetList: function (uid, callbackMethodName) {
    const list = NetworkPlatformApi.getSdk().achievements.playerAchievementsList;

    if (list) {
      NetworkPlatformApi.uiCallback.call(null, uid, callbackMethodName, {"result": list});
    } else {
      NetworkPlatformApi.uiCallback.call(null, uid, callbackMethodName, {"error": error});
    }
  },

  achieveGetProgress: function (uid, callbackMethodName, achieveIdString) {
    const sdk = NetworkPlatformApi.getSdk();
    const hasAchivement = sdk.achievements.has(achieveIdString);

    if (hasAchivement) {
      const progress = sdk.achievements.getProgress(achieveIdString);
      NetworkPlatformApi.uiCallback.call(null, uid, callbackMethodName, {"result": [progress]});
    } else {
      NetworkPlatformApi.uiCallback.call(null, uid, callbackMethodName, {"error": ""});
    }
  },

  achieveSetProgress: async function (uid, callbackMethodName, achieveIdString, progress) {
    const result = await NetworkPlatformApi.getSdk().achievements.setProgress({
      id: achieveIdString, progress: progress
    });

    if (result.success) {
      NetworkPlatformApi.uiCallback.call(null, uid, callbackMethodName, {"result": "OK"});
    } else {
      NetworkPlatformApi.uiCallback.call(null, uid, callbackMethodName, {"error": ""});
    }
  },

  achieveUnlock: async function (uid, callbackMethodName, achieveIdString) {
    const result = await NetworkPlatformApi.getSdk().achievements.unlock({id: achieveIdString});

    if (result.success) {
      NetworkPlatformApi.uiCallback.call(null, uid, callbackMethodName, {"result": result});
    } else {
      NetworkPlatformApi.uiCallback.call(null, uid, callbackMethodName, {"error": error});
    }
  },

  sendGameReady: function () {
    NetworkPlatformApi.isGameReady = true;
    this.gpInstance.gameStart();
  },

  sendGameplayState: function (state) {
    state = state.toLowerCase();
    NetworkPlatformApi.clientGameplayPlaying = state === 'start' || state === 'resume';
    NetworkPlatformApi.updateState();

    switch (state) {
      case 'start':
        this.gpInstance.gameplayStart(); break;
        case 'stop':
          this.gpInstance.gameplayStop(); break;
    }
  },

  isAdsShowing: function () {
    const gp = NetworkPlatformApi.getSdk();

    const isFullscreenPlaying = gp.ads.isFullscreenPlaying;
    const isRewardedPlaying = gp.ads.isRewardedPlaying;
    const isPreloaderPlaying = gp.ads.isPreloaderPlaying;

    return isFullscreenPlaying || isRewardedPlaying || isPreloaderPlaying;
  },

  addToFavorites: function(uid, callbackMethodName){
    const response = {
      result: false
    }
    this.uiCallback(uid, callbackMethodName, response)
  },

  sendAudioSettings: function (type, enabled){
    const response = {
      type   : type,
      enabled: enabled
    }
    NetworkPlatformApi.sendMessage("OnAudioSettingChanged", JSON.stringify(response));
  },
}
