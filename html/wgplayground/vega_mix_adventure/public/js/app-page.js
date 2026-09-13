var HideableElMixin = {
  isHidden : function() {
    return this.el.classList.contains("hidden");
  },

  show : function() {
    this.el.classList.remove("hidden");
  },

  hide : function() {
    this.el.classList.add("hidden");
  }
};

var BlackScreen = function(el){
  this.el = el;
};

// copy the methods
Object.assign(BlackScreen.prototype, HideableElMixin);

var Popup = function(el){
  this.el = el;
};

// copy the methods
Object.assign(Popup.prototype, HideableElMixin);

var AnotherDevicePopup = function(el){
  Popup.call(this, el);

  this.closeBtn = el.querySelector('.close-btn-cross');
  this.reloadGameBtn = el.querySelector('.reload-game-btn');
};

AnotherDevicePopup.prototype = new Popup();
AnotherDevicePopup.prototype.constructor = AnotherDevicePopup;

AnotherDevicePopup.prototype.setOnCloseClick = function(action){
  this.closeBtn.addEventListener("click", function(e){
    action.call(this);
  });
};

AnotherDevicePopup.prototype.setOnReloadClick = function(action){
  this.reloadGameBtn.addEventListener("click", function(e){
    action.call(this);
  });
};

var LoadScreen = function(el){
  this.el = el;
};

// copy the methods
Object.assign(LoadScreen.prototype, HideableElMixin);

var ProgressBar = function(el, fullWidth){
  this.el = el;
  this.fullWidth = fullWidth;
};

ProgressBar.prototype.setProgress = function(percent){
  this.el.style.width = Math.round(this.fullWidth * percent) + "px";
};

var AppPage = {
  blackScreen: null,
  anotherDevicePopup: null,
  unityLoaded: false,
  unityInstance: false,
  aspectRatio: 1.777,
  canvas: null,
  isFullScreen: false,

  init: function () {
    this.blackScreen = new BlackScreen(document.getElementById("blackscreen"));
    this.anotherDevicePopup = new AnotherDevicePopup(document.getElementById("another-device-popup"));
    this.loadScreen = new LoadScreen(document.getElementById("loading-screen"));
    this.progressBar = new ProgressBar(document.querySelector("#loading-screen .progressbar .fill"), 420);
  },

  createUnityCanvas: function () {
    if (this.canvas) {
      return;
    }

    var canvas = document.createElement('canvas');
    this.canvas = canvas;

    canvas.id = "unity-canvas";

    // устанавливаем из кода, ok не цепляет из css
    Object.assign(canvas.style, {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: '1'
    });

    this.resize_callback();

    window.addEventListener('resize', () => AppPage.resize_callback());
    window.addEventListener('fullscreenchange', () => AppPage.fullscreenChanged_callback());

    return canvas;
  },

  resize_callback: function () {
    if (AppPage.isFullScreen) {
      return;
    }

    let width = window.innerWidth;
    let height = window.innerHeight;

    if (width / height > 16 / 9) {
      // экран "шире", чем 16:9 → подгоняем по высоте
      width = Math.floor(height * 16 / 9);
    } else {
      // экран "уже", чем 16:9 → подгоняем по ширине
      height = Math.floor(width * 9 / 16);
    }

    AppPage.resizeUnityCanvas(AppPage.canvas, width, height);
  },

  fullscreenChanged_callback: function () {
    this.isFullScreen = document.fullscreenElement === AppPage.canvas;

    if (!this.isFullScreen) {
      this.resize_callback();
    }
  },

  resizeUnityCanvas: function (canvas, width, height) {
    canvas.width = width * window.devicePixelRatio;
    canvas.height = height * window.devicePixelRatio;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
  },

  anotherDeviceException: function () {
    this.anotherDevicePopup.setOnCloseClick(this.reloadPage);
    this.anotherDevicePopup.setOnReloadClick(this.reloadPage);

    this.blackScreen.show();
    this.anotherDevicePopup.show();
  },

  showUnityBanner: function (msg, type) {
    ipix('event', 'unity-banner-show', {
      message: msg,
      type: type
    });

    console.log("Unity report " + type + ": " + msg);
  },

  showLoadScreen: function () {
    this.loadScreen.show();
  },

  hideLoadScreen: function () {
    this.loadScreen.hide();
  },

  reloadPage: function () {
    if (typeof location == "undefined") {
      return;
    }

    try {
      location.reload(true);
    } catch (err) {
    }
  },

  isIOS: function (){
    // Tracking iOS device
    const ua = navigator.userAgent || navigator.vendor || window.opera;
    // iOS (iPhone/iPad/iPod + iPadOS13+)
    const iOSClassic = /iPad|iPhone|iPod/.test(ua) && !window.MSStream;
    const iPadOS13Plus = navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
    // macOS desktop
    const isMacDesktop = /Macintosh|Mac OS X/.test(ua);
    // any apple device
    const isApple = iOSClassic || iPadOS13Plus || isMacDesktop;
    return isApple;
  },

  showAppleBlocker: function () {
    const overlay = document.createElement("div");
    Object.assign(overlay.style, {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0,0,0,0.85)",
      color: "#fff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Arial, sans-serif",
      fontSize: "20px",
      zIndex: "99999",
      textAlign: "center",
      padding: "20px",
      boxSizing: "border-box"
    });

    overlay.innerHTML = `
    <div>
      <h2 style="margin-bottom: 15px;">🚧 Извините!</h2>
      <p>Версия для iOS и macOS находится в разработке.<br/>
      Пожалуйста, попробуйте открыть игру на другом устройстве.</p>
    </div>
  `;

    document.body.appendChild(overlay);

    // стоп дальнейших скриптов
    throw new Error("Прерывание загрузки скрипта на Apple-устройстве.");
  },

  loadConfigAsync: async function (path) {
    try {
      const resp = await fetch(path, { cache: 'no-store' });
      if (resp.ok) {
        return await resp.json();
      }
    } catch (e) {
      console.error("Ошибка загрузки конфига:", e);
    }
    return {}; // чтобы всегда вернулся объект
  },

  getUrlParams: function() {
    let str = window.location.search;

    if (!str)
      return {};

    var result = Object.fromEntries(
      str
        .substring(1)
        .split("&")
        .filter(Boolean)
        .map(x => x.split("="))
    );

    try {
      if (result && result["custom_args"]){
        var customArgs = Object.fromEntries(
          decodeURIComponent(result["custom_args"])
            .split('&')
            .map(x => x.split('='))
        );
        for (var customArgName in customArgs) {
          if (!result[customArgName]) {
            result[customArgName] = customArgs[customArgName];
          }
        }
      }
    } catch(e) {
      console.log(e);
    }

    return result;
  }
};

var DevToDevPostbacks = {
  apiKeyName: 'apikey',
  apiKey: null,
  url: 'https://api.devtodev.com/track/install/v1/custom/',

  init: function (apiKey) {
    this.apiKey = apiKey;
  },

  trackCustom: function (eventName, params) {
    if (this.apiKey == null) {
      return;
    }

    var eventParams = Object.assign({}, params, {'event_name': 'install'});

    var request = this.createRequest(eventParams);
    request.send(null);
  },

  createRequest: function (params) {
    var url = this.createUrl(params);

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, true); // false for synchronous request

    return xmlHttp;
  },

  createUrl: function (params) {
    if (!(this.apiKeyName in params)) {
      params[this.apiKeyName] = this.apiKey;
    }

    var queryString = Object.keys(params).map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
    }).join('&');

    var url = this.url + "?" + queryString;

    return url;
  }
};