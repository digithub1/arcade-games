const runtimeData = (function () {

    return {

        // Basic information.
        companyName: "MV Games Team",
        productName: "MineTap",
        productVersion: "2.5.3",
        sdkVersion: "3.17.13",
        productDescription: "",

        // File references.
        buildURL: "bin",
        loaderURL: "bin/geeky-minetap_Web_Poki.loader.js",
        dataURL: "bin/geeky-minetap_Web_Poki.data.unityweb",
        frameworkURL: "bin/geeky-minetap_Web_Poki.framework.js.unityweb",
        workerURL: "",
        codeURL: "bin/geeky-minetap_Web_Poki.wasm.unityweb",
        symbolsURL: "",
        streamingURL: "streaming",

        // Visual information.
        logoType: "ThreeJs",
        iconTextureName: "icon-workspace-pig.png",
        backgroundTextureName: "download.png",

        // Aspect ratio.
        desktopAspectRatio: 0.5625,
        mobileAspectRatio: -1,

        // Debug mode.
        debugMode: false,

        // Prefs.
        prefsContainerTags: [ "json-data" ],

        // Platform specific scripts.
        wrapperScript: "pokiWrapper.js",

        // YandexGames.
        yandexGamesSDK: "/sdk.js",

        // Yandex Ads Network.
        yandexGameId: "",
        yandexBannerId: "",
        yandexInterstitialDesktopId: "",
        yandexInterstitialMobileId: "",
        yandexRewardedDesktopId: "",
        yandexRewardedMobileId: "",

        // GameDistribution.
        gameDistributionId: "f354649c6f184048b2dc4c059e83f57b",
        gameDistributionPrefix: "mirragames_",

    }

})();