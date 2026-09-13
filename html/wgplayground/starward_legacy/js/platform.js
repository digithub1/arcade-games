/* ============================================================
 * platform.js — host detection + native SDK abstraction.
 *
 * GamePush-hosted builds (s3.eponesh / gamepush.com / official embed)
 * ALWAYS use the GamePush adapter — GP wraps Yandex/VK/Poki internally.
 * Native standalone uploads (direct Yandex/VK/OK/RuStore) still use
 * that host's own SDK when we are NOT on GamePush hosting.
 *
 * Every adapter implements one interface, so the game (Store / Cloud /
 * Social) never touches a platform SDK directly:
 *   caps {rewarded,interstitial,iap,cloud,leaderboard,share,invite}
 *   packs {tag: 'localized price'}        (real-money price per product)
 *   currency 'label'                       (₽ / голоса / ОК / Stars …)
 *   init()                      -> Promise (loads SDK, resolves when ready)
 *   gameReady()                 -> void    (tell host "loaded & interactive")
 *   getLanguage()               -> 'ru'|'en'
 *   showRewarded(placement)     -> Promise<bool rewarded>
 *   showInterstitial()          -> Promise
 *   showSticky() / hideSticky() -> void    (bottom banner, menus only)
 *   purchase(tag)               -> Promise<bool paid>
 *   getUnconsumed()             -> Promise<[tag]>   (paid-but-undelivered)
 *   consumePurchase(tag)        -> Promise          (mark delivered)
 *   cloudGet()                  -> Promise<object|null>   (the save blob)
 *   cloudSet(obj)               -> Promise
 *   submitScore(board, value)   -> Promise
 *   share(text, url) / invite(text)
 *   adsEnabled()                -> bool
 *   rewardedAvailable()         -> bool
 *   setSoundMuted(muted)        -> void    (GamePush: gp.sounds.mute/unmute)
 *
 * Native SDK calls follow each platform's docs; verify on-device.
 * Force a platform locally with ?platform=yandex|vk|ok|telegram|rustore|gamepush|web
 * ========================================================== */
const Platform = (() => {
  const q = new URLSearchParams(location.search);
  const hash = location.hash || '';
  const ref = document.referrer || '';
  const host = location.hostname || '';

  /* ── Product catalog (must match each platform's developer console) ──
     Consumables grant currency; NONCONSUMABLE.noads is bought once and
     restored (never consumed). Prices below are DISPLAY FALLBACKS —
     Yandex/GamePush overwrite them from the real localized catalog. */
  const NONCONSUMABLE = { noads: true };
  // season_pass is consumable (re-buyable each new season). Every tag here must
  // exist in EACH platform's product catalog (Yandex/VK/OK/RuStore/GamePush).
  const PRODUCT_TAGS = [
    'gems_small', 'gems_medium', 'gems_large',
    'credits_small', 'credits_medium', 'credits_large',
    'starter', 'noads', 'season_pass',
  ];

  // GamePush project credentials (public — safe in client). Used only when the
  // active platform is `gamepush` (web portals we don't ship a native build for).
  const GP_PROJECT = 28706;
  const GP_TOKEN = 'KzL4W4tVF3yJkQAAksQvCBJwK6Sj392F';

  function isGamePushHost() {
    if (window.gp || window.GamePush) return true;
    const blob = (host + ' ' + ref).toLowerCase();
    if (/gamepush\.com|eponesh\.com/.test(blob)) return true;
    try {
      const ao = window.location.ancestorOrigins;
      if (ao) for (let i = 0; i < ao.length; i++) if (/gamepush\.com|eponesh\.com/i.test(ao[i])) return true;
    } catch (e) {}
    // GamePush preview / platform wrapper query flags
    if (q.has('_platform') || q.has('gp_platform') || q.get('projectId') === String(GP_PROJECT)) return true;
    return false;
  }

  function detect() {
    const forced = q.get('platform');
    if (forced) return forced;

    // GamePush hosting / official embed wins over YaGames/VK injected by GP's wrapper.
    // Otherwise the dashboard test reports "SDK not connected".
    if (isGamePushHost()) return 'gamepush';

    // Telegram Mini App — launch params arrive in the URL (hash/query)
    if (hash.includes('tgWebApp') || q.has('tgWebAppData') ||
        (window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.initData)) return 'telegram';

    // VK — signed launch params (vk_app_id…) or VK Bridge present
    if (window.vkBridge || q.has('vk_app_id') || q.has('vk_user_id') || q.has('vk_platform')) return 'vk';

    // Odnoklassniki — OK iframe launch params / referrer
    if (window.FAPI || q.has('api_server') || (q.has('application_key') && q.has('session_key')) ||
        /(^|\.)ok\.ru|odnoklassniki/.test(ref)) return 'ok';

    // RuStore — provided by the native wrapper (JS bridge / UA token)
    if (window.RuStore || window.RuStoreBilling || window.__RUSTORE__ || window.__RUSTORE_BRIDGE__ ||
        /RuStore/i.test(navigator.userAgent)) return 'rustore';

    // Yandex Games — host / referrer / ancestor origin (or YaGames injected)
    if (window.YaGames || /yandex/.test(ref) || /games\.s3\.yandex|games\.yandex|yandex\.net|app-[0-9a-f]+/.test(host)) return 'yandex';
    try { const ao = window.location.ancestorOrigins; if (ao) for (let i = 0; i < ao.length; i++) if (/yandex/i.test(ao[i])) return 'yandex'; } catch (e) {}

    // local / standalone dev → no-op web adapter
    if (location.protocol === 'file:' || host === 'localhost' || host === '127.0.0.1' || host === '') return 'web';

    // everything else in production → GamePush
    return 'gamepush';
  }

  function loadScript(src, attrs) {
    return new Promise((res, rej) => {
      const s = document.createElement('script');
      s.src = src; s.async = true;
      if (attrs) for (const k in attrs) s.setAttribute(k, attrs[k]);
      s.onload = () => res();
      s.onerror = () => rej(new Error('load failed: ' + src));
      document.head.appendChild(s);
    });
  }

  // CIS locale → Russian UI, everything else → English.
  function localeLang() {
    const nav = (navigator.languages && navigator.languages[0]) || navigator.language || 'en';
    const lang = nav.split('-')[0].toLowerCase();
    const cis = ['ru', 'uk', 'be', 'kk', 'hy', 'ka', 'uz', 'az', 'tg', 'ky', 'mn', 'tk'];
    return cis.includes(lang) ? 'ru' : 'en';
  }

  // Fill an adapter with safe no-op defaults; each overrides what it supports.
  function adapter(o) {
    return Object.assign({
      caps: { rewarded: false, interstitial: false, iap: false, cloud: false, leaderboard: false, share: false, invite: false },
      packs: {},                                    // tag -> localized price string
      currency: '',
      init: () => Promise.resolve(),
      gameReady: () => {},
      getLanguage: () => localeLang(),
      showRewarded: () => Promise.resolve(false),
      showInterstitial: () => Promise.resolve(),
      showSticky: () => {},
      hideSticky: () => {},
      purchase: () => Promise.resolve(false),
      getUnconsumed: () => Promise.resolve([]),
      consumePurchase: () => Promise.resolve(),
      /**
       * Resolve with the account's save, or null when the account genuinely has
       * none. REJECT when the save could not be READ (SDK missing, network
       * gone). Cloud.pull treats those two very differently: an empty account
       * starts a new game, an unreadable one plays without saving. Collapsing
       * them into null is how a working save gets overwritten by an empty one.
       */
      cloudGet: () => Promise.resolve(null),
      cloudSet: () => Promise.resolve(),
      submitScore: () => Promise.resolve(),
      share: () => {},
      invite: () => {},
      gameplayStart: () => {},
      gameplayStop: () => {},
      adsEnabled: () => !Profile.get().noAds,
      rewardedAvailable: () => false,
      setSoundMuted: () => {},
    }, o);
  }

  /* ---------------- WEB / standalone (dev) ----------------
     The simulated store is OPT-IN (`?sim=1`), and that matters twice over.
     Moderation requires unavailable purchases to be hidden, and this adapter
     does not merely fail to sell — its purchase() RESOLVES SUCCESSFULLY, so a
     live "buy" button here hands out gems for nothing. detect() only picks this
     adapter for file:// / localhost / an empty host, but an index.html opened
     straight off disk is exactly the build a moderator (or a player) can end up
     poking, and it must not show a working shop.

     With the flag off the shop simply has no purchase section and no ad rows —
     the same thing a real host without payments shows. `?sim=1` restores the
     whole flow for local testing. */
  const SIM = q.get('sim') === '1' || q.get('sim') === 'store';
  const web = adapter({
    caps: { rewarded: SIM, interstitial: false, iap: SIM, cloud: false, leaderboard: false, share: !!navigator.share, invite: false },
    packs: {
      gems_small: '$0.99', gems_medium: '$4.99', gems_large: '$19.99',
      credits_small: '$0.99', credits_medium: '$4.99', credits_large: '$19.99',
      starter: '$3.99', noads: '$2.99', season_pass: '$4.99',
    },
    currency: '$',
    showRewarded: () => new Promise(r => setTimeout(() => r(SIM), 250)),
    rewardedAvailable: () => SIM,
    // Standalone/local build: simulate a real store, including a unique purchase
    // id per buy. A bare `true` here made local testing exercise a path no real
    // store uses, which is how the "second pack grants nothing" bug hid.
    purchase: tag => (SIM ? Promise.resolve({
      purchase: { id: 'web-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 8), productId: tag },
    }) : Promise.resolve(false)),
    share: (text, url) => { if (navigator.share) navigator.share({ title: 'Starward Legacy', text, url }).catch(() => {}); },
  });

  /* ---------------- Yandex Games ----------------
     Compliance essentials (Yandex moderation):
       • LoadingAPI.ready() MUST be called once the game is interactive
         → exposed as gameReady(); index/game.js calls it after init.
       • language MUST come from ysdk.environment.i18n.lang.
       • consumable purchases MUST be consumePurchase()'d after delivery,
         or they get stuck in getPurchases() and can't be re-bought.
       • rewarded uses adv.showRewardedVideo; fullscreen uses
         adv.showFullscreenAdv (NOT showInterstitial).
       • setData is rate-limited (100 req / 5 min) → Cloud debounces 3 s. */
  const yandex = (() => {
    let y = null, player = null, payments = null;
    const tokens = {};                              // tag -> purchaseToken (for consume)
    const FALLBACK = {
      gems_small: '39 ₽', gems_medium: '199 ₽', gems_large: '749 ₽',
      credits_small: '39 ₽', credits_medium: '199 ₽', credits_large: '749 ₽',
      starter: '149 ₽', noads: '129 ₽', season_pass: '199 ₽',
    };
    const self = adapter({
      caps: { rewarded: true, interstitial: true, iap: true, cloud: true, leaderboard: true, share: false, invite: false },
      packs: Object.assign({}, FALLBACK),
      currency: '₽',
      init: () => loadScript('https://yandex.ru/games/sdk/v2?v=2').then(() => YaGames.init()).then(async sdk => {
        y = sdk;
        // Player (auth) — isAuthorized() is the correct check; continue as guest if declined
        try {
          player = await sdk.getPlayer({ scopes: false });
          if (player && !player.isAuthorized()) {
            try { await sdk.auth.openAuthDialog(); player = await sdk.getPlayer({ scopes: false }); } catch (e) {}
          }
        } catch (e) { player = null; }
        // Payments — init + consume any purchase interrupted by a crash / network loss
        try {
          payments = await sdk.getPayments({ signed: false });
          const pending = await payments.getPurchases().catch(() => []);
          (pending.purchases || pending || []).forEach(p => { if (p && p.productID) tokens[p.productID] = p.purchaseToken; });
        } catch (e) { payments = null; }
        // Real localized prices from the catalog
        try {
          const catalog = await (payments ? payments.getCatalog() : Promise.resolve([]));
          (catalog || []).forEach(it => { if (self.packs[it.id] != null) self.packs[it.id] = it.price; });
        } catch (e) {}
      }),
      gameReady: () => { try { y && y.features && y.features.LoadingAPI && y.features.LoadingAPI.ready(); } catch (e) {} },
      gameplayStart: () => { try { y && y.features && y.features.GameplayAPI && y.features.GameplayAPI.start(); } catch (e) {} },
      gameplayStop: () => { try { y && y.features && y.features.GameplayAPI && y.features.GameplayAPI.stop(); } catch (e) {} },
      rewardedAvailable: () => true,
      getLanguage: () => {
        // SDK value when ready; else the ?lang= that Yandex injects into the iframe
        // URL (available synchronously at boot → correct language on the FIRST frame,
        // not the browser locale). Falls back to browser locale only if both absent.
        const l = (y && y.environment && y.environment.i18n && y.environment.i18n.lang) || q.get('lang') || q.get('_lang') || '';
        if (!l) return localeLang();
        return ['ru', 'uk', 'be', 'kk', 'hy', 'uz', 'az', 'tg', 'ky'].includes(l) ? 'ru' : 'en';
      },
      showRewarded: () => new Promise(res => {
        if (!y) return res(false);
        let ok = false;
        y.adv.showRewardedVideo({ callbacks: {
          onRewarded: () => { ok = true; },
          onClose: (shown) => res(ok || shown === true),
          onError: () => res(false) } });
      }),
      showInterstitial: () => new Promise(res => {
        if (!y) return res();
        y.adv.showFullscreenAdv({ callbacks: { onClose: () => res(), onError: () => res(), onOffline: () => res() } });
      }),
      // Return the purchaseToken as a purchase identity, not a bare `true`:
      // Store.deliver dedupes on it, and without one a second buy of the same
      // consumable looks exactly like the first one arriving twice.
      purchase: tag => !payments ? Promise.resolve(false) :
        payments.purchase({ id: tag }).then(pr => {
          const tk = pr && pr.purchaseToken;
          tokens[tag] = tk;
          return tk ? { purchase: { id: tk, productId: tag } } : true;
        }).catch(() => false),
      // Unconsumed = purchases still in the Yandex account (consumables + owned noads).
      // Return the purchaseToken so Store.restore can be idempotent (no double-grant).
      getUnconsumed: () => !payments ? Promise.resolve([]) :
        payments.getPurchases().then(r => (r.purchases || r || [])
          .map(p => { if (p && p.purchaseToken) tokens[p.productID] = p.purchaseToken; return { tag: p.productID, token: p.purchaseToken }; })
          .filter(x => x.tag)).catch(() => []),
      consumePurchase: tag => {
        if (!payments || NONCONSUMABLE[tag]) return Promise.resolve();   // noads is non-consumable → keep it
        const tk = tokens[tag]; if (!tk) return Promise.resolve();
        return payments.consumePurchase(tk).then(() => { delete tokens[tag]; }).catch(() => {});
      },
      cloudGet: () => (player
        ? player.getData().then(d => (d && Object.keys(d).length ? d : null))
        : Promise.reject(new Error('no player'))),
      cloudSet: o => player ? player.setData(o, true).catch(() => {}) : Promise.resolve(),
      submitScore: (board, val) => { try { return y.leaderboards.setScore(board, val).catch(() => {}); } catch (e) { return Promise.resolve(); } },
    });
    return self;
  })();

  /* ---------------- VK (VK Bridge) ----------------
     Payments = Votes (голоса), validated server-side by vk-payment.php.
     Item codes (coins_* here) must match the VK app item catalog AND the
     $ITEMS map in vk-payment.php. */
  const vk = (() => {
    const send = (m, p) => (window.vkBridge ? vkBridge.send(m, p || {}) : Promise.reject());
    // VK item name registered in the app catalog (kept separate from our tag)
    const ITEM = {
      gems_small: 'gems_small', gems_medium: 'gems_medium', gems_large: 'gems_large',
      credits_small: 'credits_small', credits_medium: 'credits_medium', credits_large: 'credits_large',
      starter: 'starter', noads: 'noads', season_pass: 'season_pass',
    };
    return adapter({
      caps: { rewarded: true, interstitial: true, iap: true, cloud: true, leaderboard: true, share: true, invite: true },
      packs: {
        gems_small: '2 голоса', gems_medium: '10 голосов', gems_large: '40 голосов',
        credits_small: '2 голоса', credits_medium: '10 голосов', credits_large: '40 голосов',
        starter: '5 голосов', noads: '4 голоса', season_pass: '10 голосов',
      },
      currency: 'голоса',
      init: () => loadScript('https://unpkg.com/@vkontakte/vk-bridge/dist/browser.min.js')
        .then(() => send('VKWebAppInit')).catch(() => {}),
      getLanguage: () => {
        const l = q.get('vk_language') || '';
        return ['ru', 'uk', 'be', 'kk', 'az', 'hy', 'uz', 'tg', 'ky'].includes(l) ? 'ru' : localeLang();
      },
      showRewarded: () => send('VKWebAppShowNativeAds', { ad_format: 'reward' }).then(r => !!(r && r.result)).catch(() => false),
      rewardedAvailable: () => true,
      showInterstitial: () => send('VKWebAppShowNativeAds', { ad_format: 'interstitial' }).catch(() => {}),
      purchase: tag => send('VKWebAppShowOrderBox', { type: 'item', item: ITEM[tag] || tag })
        .then(r => !!(r && r.success)).catch(e => { if (e && e.error_data && e.error_data.error_code === 10) return false; return false; }),
      // VK key-value storage (note: ~4KB per key — keep the blob lean)
      cloudGet: () => send('VKWebAppStorageGet', { keys: ['save'] }).then(r => {
        const kv = r && r.keys && r.keys[0]; return kv && kv.value ? JSON.parse(kv.value) : null;
      }).catch(() => null),
      cloudSet: o => send('VKWebAppStorageSet', { key: 'save', value: JSON.stringify(o) }).catch(() => {}),
      submitScore: (board, val) => board === 'score' ? send('VKWebAppSetScore', { score: val }).catch(() => {}) : Promise.resolve(),
      share: (text, url) => send('VKWebAppShowWallPostBox', { message: text + ' ' + url }).catch(() => {}),
      invite: () => send('VKWebAppShowInviteBox').catch(() => {}),
    });
  })();

  /* ---------------- Odnoklassniki (FAPI) ----------------
     Payments = ОКи (≈1₽). Product codes must match OK dev console. */
  const ok = (() => {
    const ui = () => (window.FAPI && FAPI.UI ? FAPI.UI : null);
    const pending = {};
    const initCb = () => { window.API_callback = (method, result, data) => { const r = pending[method]; if (r) { delete pending[method]; r({ result, data }); } }; };
    const call = (method, ...args) => new Promise(res => {
      pending[method] = res;
      setTimeout(() => { if (pending[method]) { delete pending[method]; res({ result: 'error', data: 'timeout' }); } }, 15000);
      try { FAPI.UI[method](...args); } catch (e) { res({ result: 'error', data: e.message }); }
    });
    return adapter({
      caps: { rewarded: true, interstitial: true, iap: true, cloud: true, leaderboard: false, share: true, invite: true },
      packs: {
        gems_small: '3 ОК', gems_medium: '15 ОК', gems_large: '55 ОК',
        credits_small: '3 ОК', credits_medium: '15 ОК', credits_large: '55 ОК',
        starter: '8 ОК', noads: '6 ОК', season_pass: '15 ОК',
      },
      currency: 'ОК',
      init: () => loadScript('https://api.ok.ru/js/fapi5.js').then(() => {
        try {
          initCb();
          const p = FAPI.Util.getRequestParameters();
          FAPI.init(p.api_server, p.apiconnection, p.session_key, p.session_secret_key, p.application_key, p.web_server || '');
        } catch (e) {}
      }).catch(() => {}),
      getLanguage: () => 'ru',
      showRewarded: () => call('showAd', 'reward').then(r => r.result === 'ok'),
      rewardedAvailable: () => true,
      showInterstitial: () => call('showAd', 'interstitial').then(() => {}),
      purchase: tag => call('showPayment', tag, tag, tag, '1', 'ok', 'true').then(r => r.result === 'ok'),
      cloudGet: () => call('loadStorage').then(r => { try { return r.result === 'ok' && r.data ? JSON.parse(r.data) : null; } catch (e) { return null; } }),
      cloudSet: o => call('saveStorage', JSON.stringify(o)).then(() => {}),
      share: (text, url) => { const u = ui(); if (u && u.postMediatopic) u.postMediatopic(JSON.stringify({ media: [{ type: 'text', text }, { type: 'link', url }] }), true); },
      invite: text => { const u = ui(); if (u && u.showInvite) u.showInvite(text); },
    });
  })();

  /* ---------------- Telegram Mini Apps ----------------
     IAP via Telegram Stars needs a bot server that returns an invoice
     link for openInvoice(); until that server exists this is a guarded
     stub (payments show as unavailable rather than fake-succeeding). */
  const telegram = (() => {
    const wa = () => (window.Telegram && window.Telegram.WebApp ? window.Telegram.WebApp : null);
    return adapter({
      caps: { rewarded: false, interstitial: false, iap: false, cloud: true, leaderboard: false, share: true, invite: true },
      packs: {
        gems_small: '50 ⭐', gems_medium: '250 ⭐', gems_large: '1000 ⭐',
        credits_small: '50 ⭐', credits_medium: '250 ⭐', credits_large: '1000 ⭐',
        starter: '200 ⭐', noads: '150 ⭐', season_pass: '250 ⭐',
      },
      currency: '⭐',
      init: () => loadScript('https://telegram.org/js/telegram-web-app.js').then(() => { const w = wa(); if (w) { w.ready(); w.expand(); } }).catch(() => {}),
      getLanguage: () => { const l = (wa() && wa().initDataUnsafe && wa().initDataUnsafe.user && wa().initDataUnsafe.user.language_code) || ''; return ['ru', 'uk', 'be', 'kk', 'hy', 'uz', 'az', 'tg', 'ky'].includes(l) ? 'ru' : localeLang(); },
      // Needs a bot server: POST the product tag, get back an invoice link, then openInvoice.
      purchase: tag => new Promise(res => {
        const w = wa(); if (!w || !w.openInvoice) return res(false);
        fetch('/api/tg-invoice', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ tag }) })
          .then(r => r.json()).then(d => { if (!d || !d.url) return res(false); w.openInvoice(d.url, s => res(s === 'paid')); })
          .catch(() => res(false));
      }),
      cloudGet: () => new Promise(res => {
        const w = wa(); if (!w || !w.CloudStorage) return res(null);
        w.CloudStorage.getItem('save', (err, val) => { try { res(!err && val ? JSON.parse(val) : null); } catch (e) { res(null); } });
      }),
      cloudSet: o => new Promise(res => { const w = wa(); if (!w || !w.CloudStorage) return res(); w.CloudStorage.setItem('save', JSON.stringify(o), () => res()); }),
      share: (text, url) => { const w = wa(); const link = 'https://t.me/share/url?url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(text); if (w && w.openTelegramLink) w.openTelegramLink(link); else window.open(link); },
      invite: text => { const w = wa(); const link = 'https://t.me/share/url?url=' + encodeURIComponent(Platform.shareUrl()) + '&text=' + encodeURIComponent(text); if (w && w.openTelegramLink) w.openTelegramLink(link); },
    });
  })();

  /* ---------------- RuStore (native wrapper) ----------------
     The HTML5 game is wrapped in a native Android app that injects a JS
     bridge (window.__RUSTORE_BRIDGE__). Billing/ads come from the wrapper;
     product IDs must match the RuStore console. */
  const rustore = (() => {
    const b = () => window.__RUSTORE_BRIDGE__ || window.RuStoreBilling || null;
    const bridgeCall = (method, cbName) => new Promise(res => {
      const br = b(); if (!br || typeof br[method] !== 'function') return res(false);
      window[cbName] = r => { delete window[cbName]; res(r); };
      try { br[method](); } catch (e) { res(false); }
    });
    return adapter({
      caps: {
        rewarded: !!(b() && b().showRewardedAd), interstitial: !!(b() && b().showInterstitial),
        iap: !!(b() && b().purchase), cloud: false, leaderboard: false, share: false, invite: false,
      },
      packs: {
        gems_small: '99 ₽', gems_medium: '499 ₽', gems_large: '1990 ₽',
        credits_small: '99 ₽', credits_medium: '499 ₽', credits_large: '1990 ₽',
        starter: '349 ₽', noads: '299 ₽', season_pass: '499 ₽',
      },
      currency: '₽',
      init: () => { const br = b(); try { br && br.init && br.init(); } catch (e) {} return Promise.resolve(); },
      showRewarded: () => bridgeCall('showRewardedAd', '__onAdResult').then(r => r === 'rewarded' || r === true),
      rewardedAvailable: () => !!(b() && b().showRewardedAd),
      showInterstitial: () => bridgeCall('showInterstitial', '__onInterstitialResult').then(() => {}),
      purchase: tag => new Promise(res => {
        const br = b(); if (!br || !br.purchase) return res(false);
        window.__onPurchaseResult = s => { delete window.__onPurchaseResult; res(s === 'paid' || s === true); };
        try { br.purchase(tag); } catch (e) { res(false); }
      }),
    });
  })();

  /* ---------------- GamePush (fallback for web portals) ----------------
     GamePush auto-detects the real host (CrazyGames / Playhop / Poki / …)
     and drives that host's ads/payments. Dashboard needs: player field
     `save` (String, large) + `score`; products tagged gems_small … noads. */
  const gamepush = (() => {
    const gp = () => window.gp || null;
    // THIS project's player model (LK → Players → fields). Writing any other
    // key logs "Field X not exists on player model" and fails the sandbox.
    // Do NOT use player.getField(key) as an existence check — it is truthy
    // for missing keys. Match field.key only (name is translated, e.g. «Очки»).
    const GP_PLAYER_BASE = { score: 1, name: 1, avatar: 1 };
    const gpHasField = key => {
      if (GP_PLAYER_BASE[key]) return true;
      try {
        const f = gp() && gp().player && gp().player.fields;
        if (!Array.isArray(f)) return false;
        return f.some(x => x && x.key === key);
      } catch (e) { return false; }
    };
    const parseSave = raw => {
      if (!raw) return null;
      if (typeof raw === 'object') return raw;
      try { return JSON.parse(raw); } catch (e) { return null; }
    };
    const gpProduct = tag => {
      const list = (gp() && gp().payments && gp().payments.products) || [];
      for (let i = 0; i < list.length; i++) if (list[i] && list[i].tag === tag) return list[i];
      return null;
    };
    // PlayerPurchase often has productId, not tag — map back through the catalog.
    const gpPurchaseToken = (tag, p) => {
      if (!p) return tag;
      const id = p.id != null ? p.id : p.productId;
      const at = p.createdAt || '';
      if (id == null && !at) return tag;
      return tag + ':' + (id != null ? id : '') + (at ? ':' + at : '');
    };
    const gpMapPurchases = () => {
      const s = gp();
      const purchases = (s && s.payments && s.payments.purchases) || [];
      const products = (s && s.payments && s.payments.products) || [];
      const byId = {};
      for (let i = 0; i < products.length; i++) {
        const pr = products[i];
        if (pr && pr.id != null) byId[pr.id] = pr.tag;
      }
      const out = [];
      for (let i = 0; i < purchases.length; i++) {
        const p = purchases[i];
        if (!p) continue;
        const tag = p.tag || byId[p.productId] || byId[p.id];
        if (!tag) continue;
        out.push({ tag, token: gpPurchaseToken(tag, p), purchase: p });
      }
      return out;
    };
    // consume() `id` is the PlayerPurchase _id, NOT product.id.
    // Passing product id (19592) logs purchase_not_found. Tag-only is the
    // documented call. Dedupe: purchase() promise + on('purchase') both grant.
    const mapGpLang = code => {
      const raw = String(code || '').toLowerCase().split(/[-_]/)[0];
      return raw === 'ru' ? 'ru' : 'en';
    };
    // Sandbox auto-check looks for the changeLanguage *call*, not a property read.
    // Map anything but ru → en, then ping the SDK once so the event is visible.
    let langPushed = '';
    const applyGpLang = () => {
      const s = gp();
      const mapped = mapGpLang(s && s.language);
      try { if (typeof I18N !== 'undefined') I18N.setLang(mapped); } catch (e) {}
      if (s && typeof s.changeLanguage === 'function' && langPushed !== mapped) {
        langPushed = mapped;
        try { s.changeLanguage(mapped); } catch (e) {}
        try { console.info('[GamePush] language', mapped); } catch (e) {}
      }
    };
    /**
     * Bind a real account ONCE before the first purchase.
     *
     * On a portal (Yandex / VK / …) GamePush hands us a player the host already
     * authorised — `isLoggedInByPlatform` is true and there is nothing to do.
     * Opened outside a portal (the bare draft URL: `platform.type === 'NONE'`)
     * the player is a STUB: `isStub` true, `isLoggedIn` false, `authToken` empty.
     * A payment on a stub makes GamePush ask to sign in, and because that sign-in
     * belongs to the payment sheet rather than to `gp.player`, nothing is bound
     * afterwards — so the NEXT purchase asks all over again. That is the bug.
     *
     * Calling player.login() ourselves attaches the account to the player, so
     * the token persists and later purchases go straight through.
     *
     * Never blocks the sale: if login is unavailable or the player dismisses it,
     * we still hand the purchase to GamePush, which can run its own flow.
     */
    let loginTry = null;
    const ensureAccount = () => {
      const s = gp();
      const p = s && s.player;
      if (!p) return Promise.resolve(false);
      if (p.isLoggedInByPlatform || p.isLoggedIn) return Promise.resolve(true);
      if (typeof p.login !== 'function') return Promise.resolve(false);
      if (loginTry) return loginTry;                 // one prompt, not one per tap
      loginTry = Promise.resolve()
        .then(() => p.login())
        .then(() => true)
        .catch(() => false)
        .then(ok => {
          try { console.info('[GamePush] account bound:', ok, 'loggedIn=', p.isLoggedIn); } catch (e) {}
          // Let a later purchase retry if the player backed out of the prompt.
          if (!ok && !p.isLoggedIn) loginTry = null;
          return ok;
        });
      return loginTry;
    };

    const consumeSent = {};
    const consumeKeys = (tag, purchase) => {
      const keys = [];
      if (purchase && purchase._id) keys.push(String(purchase._id));
      const at = purchase && purchase.createdAt;
      if (at) keys.push(tag + ':' + at);
      if (!keys.length) keys.push(tag);
      return keys;
    };
    const fillPacks = packs => {
      const s = gp();
      ((s && s.payments && s.payments.products) || []).forEach(pr => {
        const cur = pr.currencySymbol || pr.currency || '';
        const price = pr.priceFormatted || (pr.price != null ? (pr.price + (cur ? ' ' + cur : '')).trim() : '');
        if (packs[pr.tag] != null && price) packs[pr.tag] = price;
      });
    };
    const pendingBuys = [];
    let gameStartSent = false;
    let preloaderSent = false;
    const notifyDeliver = (tag, purchase) => {
      try {
        if (typeof Store !== 'undefined' && Store.deliverFromSdk) Store.deliverFromSdk(tag, purchase);
      } catch (e) {}
    };
    const notifyRestore = () => {
      try { if (typeof Store !== 'undefined' && Store.restore) Store.restore(); } catch (e) {}
    };
    const boolCap = (v, fallback) => (typeof v === 'boolean' ? v : fallback);
    // Platforms where GamePush has no native IAP at all. Do NOT use
    // payments.isAvailable — GP reports false on desktop / sandbox / custom
    // origins while the test purchase overlay still works.
    // Keys are normalised the same way as `type` above: letters and digits only.
    const NO_IAP = {
      CRAZYGAMES: 1, GAMEPIX: 1, GAMEDISTRIBUTION: 1, GAMEMONETIZE: 1,
      WGPLAYGROUND: 1, PLAYDECK: 1, Y8: 1, COOLMATH: 1, YOUTUBE: 1,
    };
    /**
     * Hosts with no fullscreen ad at all. Moderation is explicit about the
     * consequence: where there is no interstitial there must be no purchase
     * that mentions ads — not in its name and not in its description — so the
     * "remove ads" product has to disappear entirely.
     *
     * A list AND a strict reading of the SDK flag, because either alone let the
     * product through: `isFullscreenAvailable` comes back undefined on these
     * hosts, and the old `boolCap(undefined, fallback)` kept the adapter's
     * optimistic default of `true`. Undefined now means NO.
     */
    const NO_INTERSTITIAL = { VKPLAY: 1, PLAYDECK: 1, FOTOSTRANA: 1 };
    const normType = t => String(t || '').toUpperCase().replace(/[^A-Z0-9]+/g, '');
    /**
     * What the host lists say about a platform, without needing that platform.
     * Used by promo/_moderation.py to check every host the moderator named
     * against the real tables instead of a copy of them in the test.
     */
    const typeCaps = raw => {
      const t = normType(raw);
      return { type: t, iap: !NO_IAP[t], interstitial: !NO_INTERSTITIAL[t] };
    };
    const refreshCaps = () => {
      const s = gp();
      if (!s) return;
      const ads = s.ads || {};
      const soc = s.socials || {};
      const plat = s.platform || {};
      // Normalised to letters and digits only. The lists below are written the
      // way GamePush spells its platform types, but "GameMonetize" could arrive
      // as GAME_MONETIZE or GAMEMONETIZE and "VK Play" as VK_PLAY or VKPLAY —
      // a lookup that matches only one spelling silently lets the other host
      // through, which is exactly the class of miss this whole section is about.
      const type = normType(plat.type || plat.tag || '');
      // Strict, for the same reason as the fullscreen flag below: `boolCap` kept
      // the adapter's optimistic default when the SDK answered `undefined`, so
      // hosts with no rewarded video still showed "watch an ad for gems" — which
      // is what the moderator screenshotted on Fotostrana. Undefined means NO.
      self.caps.rewarded = ads.isRewardedAvailable === true;
      // Strict: the SDK has to SAY the fullscreen ad exists. Anything else —
      // undefined, missing ads object, a host on the no-interstitial list — is
      // treated as "no", because the cost of guessing wrong in this direction
      // is one unsold product, and in the other direction it is a failed
      // moderation review.
      self.caps.interstitial = ads.isFullscreenAvailable === true && !NO_INTERSTITIAL[type];
      if (NO_IAP[type]) self.caps.iap = false;
      self.caps.share = boolCap(soc.isSupportsShare, self.caps.share);
      self.caps.invite = boolCap(soc.isSupportsNativeInvite, self.caps.share);
      // gp.player.set/sync is GamePush's own backend — always on in this adapter.
      // isSupportsCloudSaves is the HOST's native cloud (false in GP sandbox / custom).
      self.caps.leaderboard = boolCap(plat.isBackendAllowed, self.caps.leaderboard);
    };
    const emitMute = muted => {
      try { window.dispatchEvent(new CustomEvent('gp:audiomute', { detail: { muted: !!muted } })); } catch (e) {}
    };
    /**
     * `ad` separates "an ad is on screen" from "the host paused us".
     *
     * GamePush fires `pause` every time the tab is hidden — minimise the window,
     * switch app, answer a message. That was wired to the same handler as a real
     * ad, so coming back to the game always flashed "📺 Реклама…" while nothing
     * had played. Both still freeze and mute the game; only a real ad says so.
     */
    const emitAdFreeze = (on, ad) => {
      try { window.dispatchEvent(new CustomEvent('gp:adfreeze', { detail: { on: !!on, ad: !!ad } })); } catch (e) {}
    };
    const showPreloaderOnce = async () => {
      if (preloaderSent || window.__GP_PRELOADER) return;
      const s = gp();
      const ads = s && s.ads;
      if (!ads || typeof ads.showPreloader !== 'function') return;
      if (ads.isPreloaderAvailable === false) return;
      preloaderSent = true;
      window.__GP_PRELOADER = true;
      try {
        await Promise.race([
          Promise.resolve(ads.showPreloader()),
          new Promise(r => setTimeout(r, 12000)),
        ]);
      } catch (e) {}
    };
    const self = adapter({
      caps: { rewarded: true, interstitial: true, iap: true, cloud: true, leaderboard: true, share: true, invite: true },
      packs: {
        gems_small: '39 ₽', gems_medium: '199 ₽', gems_large: '749 ₽',
        credits_small: '39 ₽', credits_medium: '199 ₽', credits_large: '749 ₽',
        starter: '149 ₽', noads: '129 ₽', season_pass: '199 ₽',
      },
      currency: '₽',
      // Load the GamePush SDK on demand (only when this platform is active), so
      // native builds (Yandex/VK/…) never pull it in. Sets window.gp via onGPInit.
      init: () => new Promise(res => {
        let finished = false;
        const done = () => {
          if (finished) return; finished = true;          // run once (onGPInit + poll can both fire)
          const s = gp();
          if (window.__GP_DIAG !== undefined) window.__GP_DIAG.gp = !!s;
          const wire = async () => {
            if (s) {
              try {
                if (s.player && s.player.ready) {
                  await Promise.race([
                    Promise.resolve(s.player.ready),
                    new Promise(r => setTimeout(r, 4000)),
                  ]);
                }
              } catch (e) {}
              // Official sound API — ads, pause, platform mute all go through here.
              try {
                if (s.sounds && s.sounds.on) {
                  // Official channels: ads/pause fire mute + mute:sfx + mute:music.
                  s.sounds.on('mute', () => emitMute(true));
                  s.sounds.on('unmute', () => emitMute(false));
                  s.sounds.on('mute:sfx', () => emitMute(true));
                  s.sounds.on('unmute:sfx', () => emitMute(false));
                  s.sounds.on('mute:music', () => emitMute(true));
                  s.sounds.on('unmute:music', () => emitMute(false));
                  if (s.sounds.isMuted || s.sounds.isSFXMuted || s.sounds.isMusicMuted) emitMute(true);
                }
              } catch (e) {}
              // Freeze gameplay while an ad/payment overlay owns the screen.
              // Only ads:start claims to BE an ad — a payment sheet and a plain
              // host pause freeze the game just the same but must not announce one.
              try { s.on && s.on('ads:start', () => emitAdFreeze(true, true)); } catch (e) {}
              try { s.on && s.on('ads:close', () => emitAdFreeze(false, true)); } catch (e) {}
              try { s.payments && s.payments.on && s.payments.on('open', () => emitAdFreeze(true, false)); } catch (e) {}
              try { s.payments && s.payments.on && s.payments.on('close', () => emitAdFreeze(false, false)); } catch (e) {}
              // Pause/resume: still mute via sounds events; freeze combat if an ad is not up.
              try { s.on && s.on('pause', () => emitAdFreeze(true, false)); } catch (e) {}
              try { s.on && s.on('resume', () => emitAdFreeze(false, false)); } catch (e) {}
              refreshCaps();
              // Real localized prices + purchase / login hooks
              try {
                await Promise.resolve(s.payments && s.payments.fetchProducts && s.payments.fetchProducts());
                fillPacks(self.packs);
                if (window.__GP_DIAG) {
                  window.__GP_DIAG.paymentsAvailable = !!(s.payments && s.payments.isAvailable);
                  window.__GP_DIAG.productCount = ((s.payments && s.payments.products) || []).length;
                }
              } catch (e) {}
              try {
                s.payments && s.payments.on && s.payments.on('purchase', payload => {
                  const tag = payload && payload.product && payload.product.tag;
                  const pid = payload && payload.purchase && payload.purchase.productId;
                  for (let i = pendingBuys.length - 1; i >= 0; i--) {
                    const pb = pendingBuys[i];
                    if (pb.tag === tag || (pb.id != null && pid === pb.id)) {
                      pendingBuys.splice(i, 1);
                      pb.finish(payload || true);
                    }
                  }
                  if (tag) notifyDeliver(tag, payload && payload.purchase);
                });
                s.payments && s.payments.on && s.payments.on('error:purchase', err => {
                  try { if (window.__GP_DIAG) window.__GP_DIAG.lastPayErr = err; } catch (e) {}
                  try { console.warn('[GamePush] purchase error', err); } catch (e) {}
                });
              } catch (e) {}
              // Login arrives AFTER the first fetchProducts (guest → account).
              // Re-pull catalog + deliver anything that was sitting on the player.
              try {
                s.player && s.player.on && s.player.on('login', () => {
                  Promise.resolve(s.payments && s.payments.fetchProducts && s.payments.fetchProducts())
                    .then(() => { fillPacks(self.packs); refreshCaps(); })
                    .catch(() => {})
                    .then(notifyRestore);
                });
              } catch (e) {}
              refreshCaps();
              try { s.on && s.on('change:language', applyGpLang); } catch (e) {}
              applyGpLang();
              await showPreloaderOnce();
            }
            res();
          };
          wire();
        };
        if (window.gp) return done();
        const prev = window.onGPInit;
        window.onGPInit = sdk => { if (prev) try { prev(sdk); } catch (e) {} window.gp = sdk; done(); };
        window.__GP_DIAG = { requested: true, scriptLoaded: false, scriptError: false, gp: false };
        // HTML already starts the official multi-CDN loader. If it did not
        // fire (blocked / cached draft), fall back to the documented URL.
        const already = !!document.querySelector('script[src*="game-score.js"],script[src*="gamepush.js"]');
        if (!already) {
          const qs = `?projectId=${GP_PROJECT}&publicToken=${encodeURIComponent(GP_TOKEN)}&callback=onGPInit`;
          loadScript('https://gs.eponesh.com/sdk/game-score.js' + qs)
            .then(() => { window.__GP_DIAG.scriptLoaded = true; })
            .catch(() => loadScript('https://gamepush.com/sdk/game-score.js' + qs)
              .then(() => { window.__GP_DIAG.scriptLoaded = true; })
              .catch(() => { window.__GP_DIAG.scriptError = true; }));
        } else {
          window.__GP_DIAG.scriptLoaded = true;
        }
        // Resolve when gp appears; hard timeout after 12 s so the game never hangs.
        let n = 0; const t = setInterval(() => { if (window.gp) { clearInterval(t); done(); } else if (++n > 120) { clearInterval(t); done(); } }, 100);
      }),
      gameReady: () => {
        if (gameStartSent) return;
        const s = gp();
        if (!s || !s.gameStart) return;
        gameStartSent = true;
        try { s.gameStart(); } catch (e) { gameStartSent = false; }
        try { console.info('[GamePush] gameStart'); } catch (e) {}
      },
      gameplayStart: () => { const s = gp(); try { s && s.gameplayStart && s.gameplayStart(); } catch (e) {} },
      gameplayStop: () => { const s = gp(); try { s && s.gameplayStop && s.gameplayStop(); } catch (e) {} },
      getLanguage: () => {
        // Once the SDK exists, ONLY gp.language counts. Missing/fr/de/uk → en.
        if (gp()) return mapGpLang(gp().language);
        const nav = ((navigator.languages && navigator.languages[0]) || navigator.language || 'en')
          .split(/[-_]/)[0].toLowerCase();
        return nav === 'ru' ? 'ru' : 'en';
      },
      adsEnabled: () => {
        if (Profile.get().noAds) return false;
        const ads = gp() && gp().ads;
        if (!ads) return true;
        if (ads.isFullscreenAvailable === false && ads.isRewardedAvailable === false && ads.isStickyAvailable === false)
          return false;
        return true;
      },
      rewardedAvailable: () => {
        const ads = gp() && gp().ads;
        if (ads && typeof ads.isRewardedAvailable === 'boolean') return !!ads.isRewardedAvailable;
        // caps.rewarded is now strict, so this fallback can no longer invent a
        // rewarded video on a host that never reported one.
        return !!self.caps.rewarded;
      },
      // for promo/_moderation.py — checks the host lists without a live SDK
      _typeCaps: typeCaps,
      setSoundMuted: muted => {
        const snd = gp() && gp().sounds;
        if (!snd) return;
        try { muted ? (snd.mute && snd.mute()) : (snd.unmute && snd.unmute()); } catch (e) {}
      },
      showRewarded: () => new Promise(res => {
        const s = gp(), ads = s && s.ads;
        if (ads && ads.isRewardedAvailable === false) return res(false);
        const fn = ads && (ads.showRewardedVideo || ads.showRewarded);
        if (!fn) return res(false);
        let ok = false, done = false;
        const finish = (v) => {
          if (v === true) ok = true;
          if (done) return;
          done = true;
          res(!!ok);
        };
        const finishSoon = (v) => { if (v === true) ok = true; setTimeout(() => finish(), 60); };
        // Official API: await gp.ads.showRewardedVideo() → boolean when the video ends.
        // Events are backup — close can beat reward by a tick, so delay finish.
        try { ads.on && ads.on('rewarded:reward', () => { ok = true; }); } catch (e) {}
        try { ads.on && ads.on('rewarded:close', success => { if (success) ok = true; finishSoon(); }); } catch (e) {}
        try { ads.on && ads.on('rewarded:error', () => finishSoon()); } catch (e) {}
        try {
          // 2026 typed SDK: showRewardedFailedOverlay. Older docs: showFailedOverlay.
          Promise.resolve(fn.call(ads, { showRewardedFailedOverlay: true, showFailedOverlay: true })).then(r => {
            if (r === true || r === 1 || r === 'rewarded') ok = true;
            else if (r && typeof r === 'object' && (r.success || r.rewarded || r.result === true || r.result === 'ok')) ok = true;
            // Boolean / object = completion. undefined = "ad started"; wait for events.
            if (r === true || r === false || r === 1 || r === 'rewarded' || (r && typeof r === 'object')) finishSoon();
          }).catch(() => finishSoon());
        } catch (e) { finish(false); }
        setTimeout(() => finish(), 60000);
      }),
      showInterstitial: () => new Promise(res => {
        const s = gp(), ads = s && s.ads;
        const fn = ads && (ads.showFullscreen || ads.showFullscreenAdv);
        if (!fn) return res();
        let done = false; const finish = () => { if (!done) { done = true; res(); } };
        try { ads.on && ads.on('fullscreen:close', finish); ads.on && ads.on('fullscreen:error', finish); } catch (e) {}
        try { Promise.resolve(fn.call(ads, { onClose: finish, onError: finish })).then(finish).catch(finish); } catch (e) { finish(); }
        setTimeout(finish, 30000);
      }),
      showSticky: () => { const s = gp(); try { if (s && s.ads && s.ads.isStickyAvailable) s.ads.showSticky(); } catch (e) {} },
      hideSticky: () => { const s = gp(); try { s && s.ads && s.ads.closeSticky && s.ads.closeSticky(); } catch (e) {} },
      purchase: tag => {
        const s = gp();
        if (!s || !s.payments || !s.payments.purchase) return Promise.resolve(false);
        const pr = gpProduct(tag);
        const spec = pr && pr.id != null ? { id: pr.id, tag } : { tag };
        try { console.info('[GamePush] purchase start', tag, spec, 'available=', s.payments.isAvailable); } catch (e) {}
        return ensureAccount().then(() => {
        // Do not bail on isAvailable === false — GP test overlays still work on
        // desktop / custom origins; the SDK rejects with a typed error if not.
        return new Promise(resolve => {
          let settled = false;
          const finish = val => {
            if (settled) return;
            settled = true;
            for (let i = pendingBuys.length - 1; i >= 0; i--) {
              if (pendingBuys[i].finish === finish) pendingBuys.splice(i, 1);
            }
            resolve(val);
          };
          pendingBuys.push({ tag, id: pr && pr.id, finish });
          Promise.resolve(s.payments.purchase(spec)).then(r => {
            if (r && (r.product || r.purchase)) finish(r);
            else setTimeout(() => finish(false), 500);
          }).catch(err => {
            try { if (window.__GP_DIAG) window.__GP_DIAG.lastPayErr = err; } catch (e) {}
            try { console.warn('[GamePush] purchase rejected', tag, err); } catch (e) {}
            setTimeout(() => finish(false), 500);
          });
          setTimeout(() => finish(false), 180000);
        });
        });
      },
      getUnconsumed: () => Promise.resolve(gpMapPurchases()),
      consumePurchase: (tag, purchase) => {
        if (NONCONSUMABLE[tag]) return Promise.resolve();
        const s = gp();
        if (!s || !s.payments || !s.payments.consume) return Promise.resolve();
        const keys = consumeKeys(tag, purchase);
        if (keys.some(k => consumeSent[k])) return Promise.resolve();
        for (let i = 0; i < keys.length; i++) consumeSent[keys[i]] = 1;
        // Tag only — product id in `id` is treated as a purchase id and 404s.
        try { return Promise.resolve(s.payments.consume({ tag })).catch(() => {}); }
        catch (e) { return Promise.resolve(); }
      },
      cloudGet: () => {
        const s = gp();
        // No SDK means the save is UNREADABLE, not absent. Resolving null here
        // would start the player fresh and then overwrite their real save.
        if (!s) return Promise.reject(new Error('GamePush SDK not ready'));
        // The player field is authoritative when it exists: empty means a new
        // account, and falling through to storage would resurrect a blob left
        // by an older build.
        if (s.player && s.player.get && gpHasField('save')) {
          try {
            return Promise.resolve(parseSave(s.player.get('save')));
          } catch (e) {
            return Promise.reject(e);
          }
        }
        if (s.storage && s.storage.get) {
          return Promise.resolve(s.storage.get('save')).then(parseSave);
        }
        // Neither surface exists — we cannot say whether this account has a
        // save, so say so rather than guessing "no".
        return Promise.reject(new Error('no save surface on this project'));
      },
      /**
       * The save goes through gp.player — that is what GamePush moderation
       * requires, and gp.storage is only a fallback for projects whose player
       * model has no `save` field yet.
       *
       * sync() is called WITHOUT `override`. Override tells the backend to trust
       * this client's copy wholesale; combined with a push at boot (which Cloud
       * no longer does) it can overwrite a good server profile with a fresh
       * local one — the exact "так вы можете затереть данные игрока" case.
       * Plain sync() merges the fields we actually set.
       */
      cloudSet: o => {
        const s = gp();
        if (!s || !s.player || !s.player.set) return Promise.resolve();
        // Player model in LK: only score / name / avatar exist by default. Never
        // set a key unless that exact field.key exists — missing keys = ERR in
        // the sandbox ("Field X not exists on player model").
        try { s.player.set('score', (o && o.highScore) || 0); } catch (e) {}
        let onPlayer = false;
        if (gpHasField('save')) {
          try {
            s.player.set('save', JSON.stringify(o || {}));
            onPlayer = true;
          } catch (e) { onPlayer = false; }
        }
        const jobs = [];
        // Storage only when the player field is unavailable, so the blob never
        // lives in two places and drifts apart.
        if (!onPlayer && s.storage && s.storage.set) {
          jobs.push(Promise.resolve(s.storage.set('save', o || {})).catch(() => {}));
        }
        try {
          if (s.player.sync) jobs.push(Promise.resolve(s.player.sync()).catch(() => {}));
        } catch (e) {}
        return jobs.length ? Promise.all(jobs).then(() => {}) : Promise.resolve();
      },
      submitScore: (board, val) => {
        const s = gp();
        if (!s || !s.player || !s.player.set || !gpHasField(board)) return Promise.resolve();
        try { s.player.set(board, val); } catch (e) { return Promise.resolve(); }
        try { return s.player.sync ? Promise.resolve(s.player.sync()).catch(() => {}) : Promise.resolve(); }
        catch (e) { return Promise.resolve(); }
      },
      share: (text, url) => { const s = gp(); if (s && s.socials && s.socials.share) s.socials.share({ text, url }); },
      invite: text => { const s = gp(); if (s && s.socials && s.socials.invite) s.socials.invite({ text }); },
    });
    return self;
  })();

  const adapters = { web, yandex, vk, ok, telegram, rustore, gamepush };
  const id = detect();
  const sdk = adapters[id] || web;

  // One-line diagnostic — call __diag() in the console on ANY host to see what
  // was detected, which SDK loaded, and the resolved language. Makes "SDK not
  // detected" reports actionable without guessing.
  window.__diag = () => {
    const d = {
      platform: id, host, referrer: ref.slice(0, 60),
      urlLang: q.get('lang') || q.get('vk_language') || null,
      resolvedLang: (() => { try { return sdk.getLanguage(); } catch (e) { return '?'; } })(),
      sdkReady: !!sdk._ready, caps: sdk.caps,
      globals: { YaGames: !!window.YaGames, vkBridge: !!window.vkBridge, gp: !!window.gp, FAPI: !!window.FAPI },
      gamepush: window.__GP_DIAG || null,
      gpPay: window.gp && window.gp.payments ? {
        available: window.gp.payments.isAvailable,
        products: (window.gp.payments.products || []).length,
        purchases: (window.gp.payments.purchases || []).length,
      } : null,
    };
    try { console.info('[Starward diag]', JSON.stringify(d, null, 2)); } catch (e) {}
    return d;
  };

  let resolveReady;
  const ready = new Promise(r => (resolveReady = r));
  let started = false;
  function init() {
    if (started) return ready;
    started = true;
    Promise.resolve().then(() => sdk.init()).catch(() => {}).then(() => { sdk._ready = true; resolveReady(sdk); });
    return ready;
  }

  return {
    id, sdk, caps: sdk.caps, ready, init,
    // The GamePush adapter is the only one with host lists; exposed so
    // promo/_moderation.py can check them against the real tables.
    _gamepush: gamepush,
    isNative: ['yandex', 'vk', 'ok', 'telegram', 'rustore'].includes(id),
    shareUrl: () => location.href.split('?')[0].split('#')[0],
    // Convenience passthroughs for callers that don't want to touch .sdk
    gameReady: () => { try { sdk.gameReady(); } catch (e) {} },
    gameplayStart: () => { try { sdk.gameplayStart && sdk.gameplayStart(); } catch (e) {} },
    gameplayStop: () => { try { sdk.gameplayStop && sdk.gameplayStop(); } catch (e) {} },
    getLanguage: () => { try { return sdk.getLanguage(); } catch (e) { return localeLang(); } },
    priceOf: tag => (sdk.packs && sdk.packs[tag]) || null,
    currency: () => sdk.currency || '',
    showSticky: () => { try { sdk.showSticky(); } catch (e) {} },
    hideSticky: () => { try { sdk.hideSticky(); } catch (e) {} },
    PRODUCT_TAGS, NONCONSUMABLE,
  };
})();
