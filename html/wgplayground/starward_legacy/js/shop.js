/* ============================================================
 * shop.js — Store (payments/ads logic) + Shop (overlay UI).
 *
 * Monetization is abstracted behind GamePush (`window.gp`). With the
 * SDK present it calls real IAP / rewarded video; standalone it
 * simulates success so the flow is testable. Every step logs the
 * matching analytics event. Premium currency = gems.
 *
 * GamePush product tags & player fields: docs/GAMEPUSH_SETUP.md
 *
 * Shop UI: full-screen hub-style shell (sticky back + title +
 * resources, scrollable catalog, OK footer).
 * ========================================================== */
const Store = (() => {
  // Real prices/titles come from GamePush; these are display fallbacks.
  /**
   * Pack contents, 2026-08-31.
   *
   * The old ladder was internally inconsistent: the game values a crystal at
   * 300 credits (a satellite costs 10 crystals or 3000 credits), and at that
   * rate the credit packs were worth about a FIFTH of the crystal pack at the
   * same price — $19.99 bought 480k credits' worth of crystals or 90k credits.
   * They also lost to free play: a week of daily logins hands out 9800 credits
   * and 84 crystals, so a dollar bought less than two free days.
   *
   * Rebalanced so a dollar is worth roughly a week of free play and the gap
   * between the two currencies is ~1.5x instead of 5x, keeping the "bigger pack,
   * better rate" ladder:
   *   crystals   101 / 120 / 130 per dollar
   *   credits  12.1k / 14.0k / 15.0k per dollar
   */
  const PRODUCTS = {
    gems_small:  { tag: 'gems_small',  price: '$0.99',  gems: 100 },
    gems_medium: { tag: 'gems_medium', price: '$4.99',  gems: 600 },
    gems_large:  { tag: 'gems_large',  price: '$19.99', gems: 2600 },
    credits_small:  { tag: 'credits_small',  price: '$0.99',  credits: 12000 },
    credits_medium: { tag: 'credits_medium', price: '$4.99',  credits: 70000 },
    credits_large:  { tag: 'credits_large',  price: '$19.99', credits: 300000 },
    starter:     { tag: 'starter',     price: '$3.99',  gems: 300, credits: 10000 },
    noads:       { tag: 'noads',       price: '$2.99',  grant: p => { p.noAds = true; } },
    season_pass: { tag: 'season_pass', price: '$4.99',  grant: p => { if (typeof BattlePass !== 'undefined') BattlePass.unlockPremium(true); } },
  };

  /** Does this product actually hand over currency? Only those can be doubled. */
  function paysCurrency(prod) { return !!(prod && (prod.gems || prod.credits)); }

  function grant(prod) {
    const p = Profile.get();
    // The first-purchase doubler is spent only by a product that HAS something
    // to double. It used to be consumed by any first purchase at all, so a
    // player whose first buy was "remove ads" or the season pass silently lost
    // the bonus and never found out it existed.
    const first = !p.firstBuyDone && paysCurrency(prod);
    if (first) p.firstBuyDone = true;
    if (prod.gems) {
      let g = prod.gems;
      if (first) g *= 2;
      p.gems = (p.gems || 0) + g;
      Analytics.earnCurrency({ currency: 'gems', amount: g, src: 'iap' });
    }
    if (prod.credits) {
      let c = prod.credits;
      if (first) c *= 2;
      p.credits += c;
      Analytics.earnCurrency({ currency: 'credits', amount: c, src: 'iap' });
    }
    if (prod.grant) prod.grant(p);
    Profile.save();
  }

  // Unique per purchase so two gems_small buys both grant, and event+then
  // of the SAME purchase does not double-grant. Returns the bare tag when the
  // platform hands us no identity at all — see deliver() for why that matters.
  function tokenOf(tag, purchase) {
    if (!purchase) return tag;
    const id = purchase.id != null ? purchase.id : purchase.productId;
    const at = purchase.createdAt || '';
    if (id == null && !at) return tag;
    return tag + ':' + (id != null ? id : '') + (at ? ':' + at : '');
  }

  /**
   * Same-transaction guard for platforms that give us no purchase identity.
   *
   * GamePush signals one buy TWICE (the purchase() promise and the
   * payments.on('purchase') event), so a grant needs deduping. When the store
   * returns a real purchase id we dedupe on it and the question is settled.
   * But Yandex, VK, OK and the local web adapter all resolve a bare `true` —
   * there the only key available is the product tag, and keying a permanent
   * "already delivered" list on the tag means the SECOND large gem pack a player
   * buys is silently swallowed as a duplicate: charged, nothing granted.
   *
   * So a purchase the player just made is deduped by TIME instead: a window wide
   * enough to absorb one transaction's twin signal, far too short to swallow a
   * second trip through a payment dialog. In memory on purpose — it describes
   * one transaction, not a purchase history.
   */
  const TWIN_SIGNAL_MS = 8000;
  const recentBare = new Map();                 // tag -> ts of last id-less grant

  /**
   * Returns 'new' | 'dup' | false. Consumes after a successful grant.
   * opts.fresh — the player just paid, so a grant is OWED; only the twin-signal
   * guard applies. Without it (restore() replaying history at boot) an id-less
   * item can only be granted once ever, since two historical buys of the same
   * pack are indistinguishable.
   */
  function deliver(tag, token, purchase, opts) {
    const prod = PRODUCTS[tag];
    if (!prod) return false;
    const fresh = !!(opts && opts.fresh);
    const tok = token || tag;
    const hasId = tok !== tag;                  // did the platform identify it?
    const p = Profile.get();
    const delivered = p.deliveredTokens || (p.deliveredTokens = []);
    if (tag === 'noads') {
      if (p.noAds) return 'dup';
      grant(prod);
      try { if (typeof Cloud !== 'undefined' && Cloud.persist) Cloud.persist(); } catch (e) {}
      try { if (typeof Shop !== 'undefined' && Shop.refresh) Shop.refresh(); } catch (e) {}
      return 'new';
    }
    let dup;
    if (hasId) dup = delivered.includes(tok);
    else if (fresh) dup = (Date.now() - (recentBare.get(tag) || 0)) < TWIN_SIGNAL_MS;
    else dup = delivered.includes(tok);
    if (dup) {
      try { Platform.sdk.consumePurchase(tag, purchase); } catch (e) {}
      return 'dup';
    }
    grant(prod);
    if (!hasId) recentBare.set(tag, Date.now());
    // Only a keyed delivery belongs in the permanent list. Writing the bare tag
    // there would re-create exactly the bug above on the next purchase.
    if (hasId || !fresh) {
      delivered.push(tok);
      if (delivered.length > 60) delivered.splice(0, delivered.length - 60);
    }
    Profile.save();
    try { if (typeof Cloud !== 'undefined' && Cloud.persist) Cloud.persist(); } catch (e) {}
    try { Platform.sdk.consumePurchase(tag, purchase); } catch (e) {}
    try { if (typeof Shop !== 'undefined' && Shop.refresh) Shop.refresh(); } catch (e) {}
    return 'new';
  }

  // GamePush payments.on('purchase') — also covers Devtools / overlay buys
  // that never went through the shop button.
  function deliverFromSdk(tag, purchase) {
    const st = deliver(tag, tokenOf(tag, purchase), purchase, { fresh: true });
    if (st === 'new') {
      try { Analytics.purchaseSuccess({ item: tag, value: priceOf(tag), platform: Platform.id }); } catch (e) {}
      try { Engine.audio.power(); } catch (e) {}
    }
    return st;
  }

  // Localized real-money price for a product (platform catalog → fallback).
  function priceOf(tag) {
    try { return Platform.priceOf(tag) || (PRODUCTS[tag] && PRODUCTS[tag].price) || ''; }
    catch (e) { return (PRODUCTS[tag] && PRODUCTS[tag].price) || ''; }
  }

  // Real-money purchase via the active platform adapter. onDone(ok) after.
  // On success we deliver the goods THEN consumePurchase() so consumables
  // can be re-bought (Yandex/GamePush require it); noads is non-consumable.
  function purchase(tag, onDone) {
    const prod = PRODUCTS[tag]; if (!prod) return;
    // One choke point for "this host does not sell anything". Moderation asks
    // for unavailable purchases to be hidden, and the shop does hide its own
    // cards — but the battle pass reaches this function from a button priced in
    // gems, and a player short of gems used to fall through to a real-money
    // sheet that could never complete. Refusing here covers every call site,
    // including ones added later.
    if (!iapAvailable()) { if (onDone) onDone(false); return; }
    Analytics.purchaseOffer({ item: tag, price: priceOf(tag), platform: Platform.id });
    Promise.resolve(Platform.sdk.purchase(tag)).then(ok => {
      let paid = !!ok;
      if (ok) {
        const result = (ok && typeof ok === 'object') ? ok : null;
        const purchase = result && result.purchase;
        const st = deliver(tag, tokenOf(tag, purchase), purchase, { fresh: true });
        if (st === 'new') {
          Analytics.purchaseSuccess({ item: tag, value: priceOf(tag), platform: Platform.id });
          Engine.audio.power();
        }
        paid = st === 'new' || st === 'dup' || paid;
      }
      if (onDone) onDone(paid);
    }).catch(() => { if (onDone) onDone(false); });
  }

  // Restore purchases paid-for-but-not-delivered (app closed mid-flow, or a
  // non-consumable like noads bought on another device). Called on boot and
  // again after GamePush login (purchases attach to the account, not the guest).
  function restore() {
    if (!Platform.caps.iap) return;
    Platform.ready.then(() => Platform.sdk.getUnconsumed()).then(items => {
      (items || []).forEach(it => {
        const tag = (typeof it === 'string') ? it : (it && it.tag);
        const token = (typeof it === 'string') ? tag : ((it && it.token) || tag);
        const purchase = (typeof it === 'object' && it) ? it.purchase : null;
        if (!PRODUCTS[tag]) return;
        const st = deliver(tag, token, purchase);
        if (st === 'new') {
          Analytics.purchaseSuccess({ item: tag, value: priceOf(tag), platform: Platform.id, restored: true });
        }
      });
    }).catch(() => {});
  }

  function adsEnabled() { return Platform.sdk.adsEnabled(); }

  // Opt-in rewarded video via the platform adapter. onReward() runs only on reward.
  // Freezes + mutes the game while the ad is on screen (Game.onAdOpen/Close).
  function showRewarded(placement, onReward) {
    if (!rewardedAvailable()) return Promise.resolve(false);
    Analytics.rewardVideoStart({ placement, platform: Platform.id });
    try { Game.onAdOpen(); } catch (e) {}
    const done = () => { try { Game.onAdClose(); } catch (e) {} };
    return Promise.resolve(Platform.sdk.showRewarded(placement)).then(rewarded => {
      done();
      if (rewarded) {
        Analytics.rewardVideoComplete({ placement, platform: Platform.id });
        if (onReward) onReward();
        // GP: sync after a reward. Debounced push is too slow if the tab reloads.
        try { if (typeof Cloud !== 'undefined' && Cloud.persist) Cloud.persist(); } catch (e) {}
      }
      return !!rewarded;
    }).catch(() => { done(); return false; });
  }

  function rewardedAvailable() {
    try {
      if (Platform.sdk && typeof Platform.sdk.rewardedAvailable === 'function')
        return !!Platform.sdk.rewardedAvailable();
    } catch (e) {}
    return !!(Platform.caps && Platform.caps.rewarded);
  }

  /**
   * Does this host have rewarded video AT ALL, as opposed to "is one loaded
   * right now"? The two are different answers and the UI needs both: a momentary
   * gap earns a "try again later", but a host with no rewarded must not be shown
   * the offer at all — moderation rejects ad wording, including in descriptions,
   * on platforms that have no ads.
   */
  function rewardedSupported() { return !!(Platform.caps && Platform.caps.rewarded); }
  /** Same split for fullscreen/interstitial — gates the "remove ads" product. */
  function interstitialSupported() { return !!(Platform.caps && Platform.caps.interstitial); }
  /** Can this host take money at all? Gates every purchase surface. */
  function iapAvailable() { return !!(Platform.caps && Platform.caps.iap); }

  /**
   * May the SHOP list an ad-funded offer?
   *
   * Stricter than "does rewarded video work here", and deliberately so. These
   * rows sit in the store next to the purchases, and moderation reads the store
   * as a whole: "на площадках, где нет всплывающей рекламы, не должно быть
   * покупок с указанием рекламы, даже в тексте их описания". A row offering
   * gems for watching a video is, to that reader, an offer that mentions ads.
   *
   * So the store shows them only where the host advertises at all — rewarded AND
   * fullscreen. Rewarded video elsewhere in the game (revive, refuel, the second
   * contract) is gated on rewarded support alone: those are gameplay moments,
   * not entries in a price list.
   *
   * The cost, stated plainly: on a host with rewarded but no fullscreen ads the
   * store loses its two free-gems rows. Widen or narrow this in ONE place.
   */
  function adOffersAllowed() { return rewardedSupported() && interstitialSupported(); }

  return { PRODUCTS, purchase, priceOf, restore, showRewarded, rewardedAvailable,
    rewardedSupported, interstitialSupported, iapAvailable, adOffersAllowed,
    adsEnabled, grant, paysCurrency, deliverFromSdk };
})();


const Shop = (() => {
  const el = () => document.getElementById('shop');
  let onClose = null;
  const ADS_PER_HOUR = 3;
  const pad = n => (n < 10 ? '0' + n : '' + n);
  function hourKey() {
    const d = new Date();
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}-${pad(d.getHours())}`;
  }
  function shopAdsState() {
    const p = Profile.get();
    if (!p.shopAds || typeof p.shopAds !== 'object') p.shopAds = { hour: '', n: 0 };
    const h = hourKey();
    if (p.shopAds.hour !== h) { p.shopAds.hour = h; p.shopAds.n = 0; }
    return p.shopAds;
  }
  function shopAdsLeft() {
    return Math.max(0, ADS_PER_HOUR - (shopAdsState().n | 0));
  }
  function noteShopAd() {
    const s = shopAdsState();
    s.n = (s.n | 0) + 1;
    Profile.save();
  }

  function open(closeCb) {
    onClose = closeCb || null;
    if (typeof Onboarding !== 'undefined' && Onboarding.enter) Onboarding.enter('shop');
    render();
    el().classList.remove('hidden');
  }
  function close() { el().classList.add('hidden'); if (onClose) { const cb = onClose; onClose = null; cb(); } }

  function goBack() {
    if (typeof FXTrans !== 'undefined') FXTrans.go({ style: 'cube', run: close });
    else close();
  }

  /**
   * The ×2 badge lives HERE, not in the store catalogue.
   *
   * It was only ever written into the GamePush product name, which is the one
   * place it cannot be correct: the catalogue text is permanent, so it keeps
   * promising a doubled pack long after the bonus is spent — and it was
   * attached to a single pack although the bonus applies to whichever paid
   * product a player buys first. In game it can appear on every eligible pack
   * and vanish the moment it is used.
   */
  /**
   * What a pack contains, read from the catalogue.
   *
   * The amounts used to be typed a second time in the markup next to the tag,
   * so changing a pack meant changing two places and the shop would happily
   * advertise 60 crystals while granting 100. Derived now, so it cannot drift.
   */
  function packContents(tag) {
    const p = Store.PRODUCTS[tag] || {};
    const loc = (typeof I18N !== 'undefined' && I18N.lang === 'en') ? 'en-US' : 'ru-RU';
    const bits = [];
    if (p.gems) bits.push(Icons.svg('gem') + ' ' + p.gems.toLocaleString(loc));
    if (p.credits) bits.push(Icons.svg('credit') + ' ' + p.credits.toLocaleString(loc));
    return bits.join(' + ');
  }

  function packCard(tag, label, sub) {
    // Store and Shop are separate closures in this file: reach the catalogue
    // through the exported object, not the private const.
    const prod = Store.PRODUCTS[tag];
    const bonus = Store.paysCurrency(prod) && !Profile.get().firstBuyDone;
    return `<button class="shop-item glass-row" data-buy="${tag}">
      <span class="shop-item-text"><span class="shop-item-main">${label}${
        bonus ? `<span class="shop-first">${T('shop.firstX2')}</span>` : ''}</span>
      ${sub ? `<span class="shop-item-sub">${sub}</span>` : ''}</span>
      <span class="shop-price">${Store.priceOf(tag)}</span></button>`;
  }

  function render() {
    const prevWrap = el().querySelector('.hub-wrap');
    const savedScroll = prevWrap ? prevWrap.scrollTop : 0;
    const p = Profile.get();
    const credits = p.credits.toLocaleString();
    const gems = (p.gems || 0).toLocaleString();
    // gem-unlockable ships still locked
    const ships = Meta.SHIPS.filter(s => s.gemCost && !p.ownedShips.includes(s.key)).map(s =>
      `<button class="shop-item glass-row" data-gemship="${s.key}" ${p.gems < s.gemCost ? 'disabled' : ''}>
        <span class="shop-item-text"><span class="shop-item-main">${T('ship.' + s.key + '.name', s.name)}</span>
        <span class="shop-item-sub">${T('shop.shipUnlock')}</span></span>
        <span class="shop-price">${s.gemCost} ${Icons.svg('gem')}</span></button>`).join('');

    el().innerHTML = `
      <div class="hub-wrap panel-scroll">
        <div class="scr-head">
          <button type="button" class="hub-icon-btn scr-back" id="shop-back" aria-label="${T('btn.back')}">${Icons.svg('chevron', 18)}</button>
          <div class="scr-title title-grad">${T('shop.title')}</div>
          <div class="curr-row">
            <span class="curr curr-gold">${Icons.svg('credit', 16)} ${credits}</span>
            <span class="curr-sep">|</span>
            <span class="curr curr-gem">${Icons.svg('gem', 16)} ${gems}</span>
          </div>
        </div>
        <div class="shop-status" id="shop-status" hidden></div>

        <div class="scr-body">
          ${Platform.caps.iap ? `<div class="hub-section-label shop-section">${T('shop.gems')}</div>
          ${packCard('gems_small', packContents('gems_small'), '')}
          ${packCard('gems_medium', packContents('gems_medium'), T('shop.popular'))}
          ${packCard('gems_large', packContents('gems_large'), T('shop.best'))}

          <div class="hub-section-label shop-section">${T('shop.creditsPacks')}</div>
          ${packCard('credits_small', packContents('credits_small'), '')}
          ${packCard('credits_medium', packContents('credits_medium'), T('shop.popular'))}
          ${packCard('credits_large', packContents('credits_large'), T('shop.best'))}

          <div class="hub-section-label shop-section">${T('shop.offers')}</div>
          ${packCard('starter', T('shop.starter'), packContents('starter'))}
          ${(p.noAds || !Store.interstitialSupported()) ? '' : packCard('noads', T('shop.removeAds'), '')}` : ''}
          ${Store.adOffersAllowed() && Store.rewardedAvailable() ? `<button class="shop-item glass-row shop-reward" id="shop-free" ${shopAdsLeft() <= 0 ? 'disabled' : ''}>
            <span class="shop-item-text"><span class="shop-item-main">＋${Icons.svg('gem')} ${T('shop.freeGems')}</span>
            <span class="shop-item-sub">${Tf('shop.adLeft', shopAdsLeft())}</span></span>
            <span class="shop-price shop-price-play">▶</span></button>` : ''}
          ${Store.adOffersAllowed() && Store.rewardedAvailable() ? `<button class="shop-item glass-row shop-reward" id="shop-freewarp" ${shopAdsLeft() <= 0 ? 'disabled' : ''}>
            <span class="shop-item-text"><span class="shop-item-main">＋${Icons.svg('warp')} ${T('shop.freeWarp')}</span>
            <span class="shop-item-sub">${Tf('shop.adLeft', shopAdsLeft())}</span></span>
            <span class="shop-price shop-price-play">▶</span></button>` : ''}

          <div class="hub-section-label shop-section">${T('shop.gear')}</div>
          <button class="shop-item glass-row" data-gem="warp" ${(p.gems || 0) < 2 ? 'disabled' : ''}>
            <span class="shop-item-text"><span class="shop-item-main">${Icons.svg('warp')} ${T('shop.warp')}</span>
            <span class="shop-item-sub">${T('shop.warpSub')}</span></span>
            <span class="shop-price">2 ${Icons.svg('gem')}</span></button>
          <button class="shop-item glass-row" data-gem="sat" ${(p.gems || 0) < 10 ? 'disabled' : ''}>
            <span class="shop-item-text"><span class="shop-item-main">${Icons.svg('sat')} ${T('shop.sat')}</span>
            <span class="shop-item-sub">${T('shop.satSub')}</span></span>
            <span class="shop-price">10 ${Icons.svg('gem')}</span></button>

          ${ships ? `<div class="hub-section-label shop-section">${T('shop.ships')}</div>${ships}` : ''}
        </div>

        <div class="scr-foot">
          <button id="shop-ok" class="btn btn-cta set-wide">✓ ${T('btn.ok')}</button>
        </div>
      </div>`;
    const newWrap = el().querySelector('.hub-wrap');
    if (newWrap) newWrap.scrollTop = savedScroll;
    VoxUI.bg(el(), 'shop');
    wire();
  }

  function showStatus(msg, ok) {
    const n = el().querySelector('#shop-status');
    if (!n) return;
    n.hidden = !msg;
    n.textContent = msg || '';
    n.classList.toggle('ok', !!ok);
  }

  function refresh() {
    const n = el();
    if (n && !n.classList.contains('hidden')) render();
  }

  function wire() {
    const root = el();
    root.querySelectorAll('[data-buy]').forEach(b => b.onclick = () => {
      if (b.disabled) return;
      b.disabled = true;
      showStatus('');
      Store.purchase(b.dataset.buy, ok => {
        if (ok) render();
        else { b.disabled = false; showStatus(T('shop.buyFail')); }
      });
    });
    root.querySelectorAll('[data-gemship]').forEach(b => b.onclick = () => {
      const key = b.dataset.gemship, s = Meta.shipByKey[key], p = Profile.get();
      if ((p.gems || 0) >= s.gemCost) {
        p.gems -= s.gemCost; p.ownedShips.push(key); p.ship = key; Profile.save();
        Analytics.spendCurrency({ item: key, type: 'ship_gem', cost: s.gemCost, currency: 'gems' });
        Engine.audio.power(); render();
      }
    });
    // gem-only battle gear: ⏩ time-warp seconds, 🛰 recon satellites
    root.querySelectorAll('[data-gem]').forEach(b => b.onclick = () => {
      const kind = b.dataset.gem, p = Profile.get();
      const cost = kind === 'warp' ? 2 : 10;
      if ((p.gems || 0) < cost) return;
      p.gems -= cost;
      if (kind === 'warp') p.warp = (p.warp || 0) + 10; else p.satellites = (p.satellites == null ? 1 : p.satellites) + 1;
      Profile.save();
      Analytics.spendCurrency({ item: kind, type: 'gear', cost, currency: 'gems' });
      Engine.audio.power(); render();
    });
    const free = root.querySelector('#shop-free');
    if (free) free.onclick = () => {
      if (shopAdsLeft() <= 0 || free.disabled) return;
      free.disabled = true;
      Store.showRewarded('free_gems', () => {
        noteShopAd();
        const p = Profile.get(); p.gems = (p.gems || 0) + 10; Profile.save();
        Analytics.earnCurrency({ currency: 'gems', amount: 10, src: 'rewarded' });
        Engine.audio.power(); render();
      }).then(ok => { if (!ok) { free.disabled = false; } });
    };
    const freeWarp = root.querySelector('#shop-freewarp');
    if (freeWarp) freeWarp.onclick = () => {
      if (shopAdsLeft() <= 0 || freeWarp.disabled) return;
      freeWarp.disabled = true;
      Store.showRewarded('free_warp', () => {
        noteShopAd();
        const p = Profile.get(); p.warp = (p.warp || 0) + 10; Profile.save();
        Analytics.earnCurrency({ currency: 'warp', amount: 10, src: 'rewarded' });
        Engine.audio.power(); render();
      }).then(ok => { if (!ok) { freeWarp.disabled = false; } });
    };
    const back = root.querySelector('#shop-back');
    if (back) back.onclick = goBack;
    const ok = root.querySelector('#shop-ok');
    if (ok) ok.onclick = goBack;
  }

  return { open, close, render, refresh };
})();
