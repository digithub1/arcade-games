/* ============================================================
 * battlepass.js — seasonal Battle Pass (headline monetization).
 *
 * Design (mobile F2P best practice):
 *   • Season = calendar month (auto-reset, premium rebuy)
 *   • 30 tiers free + premium tracks; premium retroactive claim
 *   • Target pace: ~1 tier / active day → full free track ≈ season
 *   • Soft daily XP cap slows binge-finish (retention, not hard lock)
 *   • Stage XP = score DELTA (not cumulative) so campaign can't melt
 *   • Run XP = diminishing score + wave + win/boss bonuses + per-run cap
 *
 * State: profile.pass = {
 *   season, xp, premium, claimed[], claimedP[],
 *   xpDay, xpToday   // daily soft-cap bookkeeping
 * }
 *
 * UI: full-screen hub shell (sticky back + resources + CTA OK).
 * ============================================================ */
const BattlePass = (() => {
  const TIERS = 30;
  /**
   * Pacing. A full campaign clear used to land around tier 10 and then stall:
   * the daily soft cap (4200 ≈ 6 tiers) throttled everything to 28% for the rest
   * of the session, which is exactly when a player binges the campaign.
   * Track is now 30 × 600 = 18 000, the daily ceiling is ~15 tiers, and the
   * throttle past it is gentler.
   */
  // 600 → 780: a straight +30% to the cost of every tier. Raising the price of a
  // tier (rather than cutting what each run pays) keeps every grant in the game
  // reading the same on the results sheet — only the bar moves slower.
  /**
   * Rising tier cost. It used to be a flat 780 for every tier, which is why a
   * player could sit on tier 25 by chapter 4 on Casual: the last tier cost the
   * same as the first, so the pass finished long before the campaign did.
   *
   * Tier N costs TIER_BASE + (N-1) * TIER_STEP:
   *   tier 1  = 560   (cheaper than the old flat rate, so early progress reads
   *                    faster and onboarding still feels rewarding)
   *   tier 30 = 1778
   *   full season = 35 070 XP, against 23 400 for the old flat curve.
   */
  const TIER_BASE = 560, TIER_STEP = 42;
  /** Cost of a single tier (1-indexed). */
  function tierCost(n) {
    const i = Math.max(1, Math.min(TIERS, n | 0));
    return TIER_BASE + (i - 1) * TIER_STEP;
  }
  /** Total XP needed to have COMPLETED n tiers. */
  function xpForTiers(n) {
    const k = Math.max(0, Math.min(TIERS, n | 0));
    return k * TIER_BASE + TIER_STEP * (k * (k - 1)) / 2;
  }
  /** Kept for the results sheet / season UI: the cost of the CURRENT tier. */
  const XP_PER_TIER = TIER_BASE;
  /** Soft daily ceiling ≈ 11.5 tiers; further XP applies at SOFT_RATE.
   *  Deliberately NOT scaled with XP_PER_TIER: raising it too would hand the
   *  daily-cap players their 30% straight back and change nothing for them. */
  const DAILY_SOFT_CAP = 9000;
  const SOFT_RATE = 0.42;
  /** Single endless/daily run hard ceiling. */
  const RUN_XP_CAP = 2200;
  /** Single campaign stage hard ceiling. */
  const STAGE_XP_CAP = 700;
  /** Chapter clear — a real milestone, worth more than the stage that ended it. */
  const CHAPTER_XP = 1400;
  const PREMIUM_GEMS = 400;
  const XP_MAX = xpForTiers(TIERS);

  const pad = n => (n < 10 ? '0' + n : '' + n);
  const dayKey = (d) => {
    const x = d || new Date();
    return `${x.getFullYear()}-${pad(x.getMonth() + 1)}-${pad(x.getDate())}`;
  };

  // Current season id (rotates monthly so the pass resets & re-monetizes).
  function seasonId() { const d = new Date(); return d.getFullYear() * 12 + d.getMonth(); }

  function seasonLabel() {
    const d = new Date();
    // Human season number within the year (1–12)
    return d.getMonth() + 1;
  }

  /** Days remaining in the calendar-month season (inclusive of today). */
  function daysLeft() {
    const now = new Date();
    const end = new Date(now.getFullYear(), now.getMonth() + 1, 1); // next month 00:00
    return Math.max(0, Math.ceil((end - now) / 86400000));
  }

  // Reward tables — free is solid, premium clearly wins (retro claim = mid-season buy impulse).
  // Rewards scale with the hangar, not with 2019 prices. A tier that pays 700
  // credits is an insult next to an upgrade step that costs five figures, and
  // gems are the only currency that still matters to a maxed player — so gems
  // appear far more often than they used to.
  function freeReward(tier) {
    if (tier === TIERS) return { kind: 'gems', amount: 120 };
    if (tier % 10 === 0) return { kind: 'gems', amount: 45 };
    if (tier % 5 === 0) return { kind: 'gems', amount: 22 };
    if (tier % 3 === 0) return { kind: 'warp', amount: 8 };
    return { kind: 'credits', amount: 700 + tier * 260 };
  }
  function premReward(tier) {
    if (tier === TIERS) return { kind: 'ship', key: 'comet' };          // season finale: premium ship
    if (tier % 10 === 0) return { kind: 'gems', amount: 160 };
    if (tier % 5 === 0) return { kind: 'gems', amount: 80 };
    if (tier % 4 === 0) return { kind: 'sat', amount: 2 };
    if (tier % 2 === 0) return { kind: 'warp', amount: 16 };
    return { kind: 'credits', amount: 1600 + tier * 540 };
  }

  function state() {
    const p = Profile.get();
    if (!p.pass) p.pass = emptyPass(seasonId());
    // new season → reset progress (premium must be re-bought)
    if (p.pass.season !== seasonId()) {
      p.pass = emptyPass(seasonId());
      Profile.save();
    }
    // migrate older saves missing daily fields
    if (p.pass.xpDay == null) p.pass.xpDay = '';
    if (p.pass.xpToday == null) p.pass.xpToday = 0;
    return p.pass;
  }
  function emptyPass(sid) {
    return { season: sid, xp: 0, premium: false, claimed: [], claimedP: [], xpDay: '', xpToday: 0 };
  }

  /** Completed tiers for the current XP total, against the rising curve. */
  const tier = () => {
    const xp = state().xp;
    let n = 0;
    while (n < TIERS && xp >= xpForTiers(n + 1)) n++;
    return n;
  };
  /** Progress inside the tier being worked on, and what that tier costs. */
  const tierProgress = () => {
    const s = state();
    const n = tier();
    if (n >= TIERS || s.xp >= XP_MAX) {
      const c = tierCost(TIERS);
      return { x: c, need: c, pct: 100 };
    }
    const base = xpForTiers(n);
    const need = tierCost(n + 1);
    const x = Math.max(0, s.xp - base);
    return { x, need, pct: Math.round(x / need * 100) };
  };
  const isPremium = () => !!state().premium;

  function ensureDay(s) {
    const d = dayKey();
    if (s.xpDay !== d) { s.xpDay = d; s.xpToday = 0; }
  }

  /**
   * Apply raw XP with daily soft-cap and season hard-cap.
   * Returns the amount actually granted (may be less than raw).
   */
  function applyGained(raw) {
    if (!raw || raw <= 0) return 0;
    const s = state();
    ensureDay(s);
    let gain = raw | 0;
    if (s.xpToday >= DAILY_SOFT_CAP) {
      gain = Math.max(1, Math.round(raw * SOFT_RATE));
    } else if (s.xpToday + raw > DAILY_SOFT_CAP) {
      const under = DAILY_SOFT_CAP - s.xpToday;
      const over = raw - under;
      gain = under + Math.round(over * SOFT_RATE);
    }
    // Cap at max track
    const room = XP_MAX - s.xp;
    if (room <= 0) return 0;
    if (gain > room) gain = room;
    s.xp += gain;
    s.xpToday += gain;
    Profile.save();
    return gain;
  }

  /** Diminishing score curve — big runs still pay, not linearly. */
  function scoreXp(score) {
    return Math.floor(Math.sqrt(Math.max(0, score || 0)) * 2.7);
    // 4k→170 · 10k→270 · 25k→426 · 50k→604
  }

  /**
   * Endless / daily / full-run XP.
   * opts: { wave, won, bossKills }
   * Back-compat: addRunXp(score, bossKillsNumber) still works.
   */
  function addRunXp(score, bossOrOpts) {
    let wave = 0, won = false, bossKills = 0;
    if (bossOrOpts && typeof bossOrOpts === 'object') {
      wave = bossOrOpts.wave || 0;
      won = !!bossOrOpts.won;
      bossKills = bossOrOpts.bossKills || 0;
    } else {
      bossKills = bossOrOpts || 0;
    }
    const scorePart = scoreXp(score);
    const wavePart = Math.min(Math.max(0, wave | 0), 25) * 14;   // wave 12 → 168
    const bossPart = (bossKills | 0) * 70;
    const winPart = won ? 100 : 0;
    let raw = scorePart + wavePart + bossPart + winPart;
    if ((score || 0) > 100 && raw < 36) raw = 36;               // participation floor
    raw = Math.min(raw, RUN_XP_CAP);
    return applyGained(raw);
  }

  /**
   * Campaign stage clear — uses SCORE DELTA since last mark (not cumulative).
   * Prevents the old "every stage awards full score/40" melt.
   */
  function addStageXp(scoreDelta, isBoss) {
    const dPart = Math.floor(Math.sqrt(Math.max(0, scoreDelta || 0)) * 2.6);
    let raw = 95 + dPart + (isBoss ? 190 : 0);
    raw = Math.min(raw, STAGE_XP_CAP);
    return applyGained(raw);
  }

  /** Chapter cleared. Bypasses the per-call bonus cap but still respects the
   *  daily soft cap, so it cannot be farmed by replaying one chapter forever. */
  function addChapterXp() {
    return applyGained(CHAPTER_XP);
  }

  /** Small engagement XP (login / mission claims). Goes through soft-cap. */
  function addBonusXp(n) {
    if (!n || n <= 0) return 0;
    return applyGained(Math.min(n | 0, 200));
  }

  /**
   * Signed XP adjust. Positive → applyGained (soft-cap).
   * Negative → roll back (revive) without soft-cap weirdness.
   */
  function addXp(n) {
    if (!n) return 0;
    if (n < 0) {
      const s = state();
      const take = Math.min(s.xp, -n);
      s.xp -= take;
      ensureDay(s);
      s.xpToday = Math.max(0, (s.xpToday || 0) - take);
      Profile.save();
      return -take;
    }
    return applyGained(n);
  }

  function grant(r) {
    const p = Profile.get();
    switch (r.kind) {
      case 'credits': p.credits += r.amount; break;
      case 'gems':    p.gems = (p.gems || 0) + r.amount; break;
      case 'warp':    p.warp = (p.warp || 0) + r.amount; break;
      case 'sat':     p.satellites = (p.satellites == null ? 1 : p.satellites) + r.amount; break;
      case 'fuel':    break;
      case 'ship':    if (!p.ownedShips.includes(r.key)) p.ownedShips.push(r.key); break;
    }
    Profile.save();
    Analytics.earnCurrency && Analytics.earnCurrency({ currency: r.kind, amount: r.amount || 1, src: 'battlepass' });
  }
  function rewardLabel(r) {
    switch (r.kind) {
      case 'credits': return Icons.svg('credit') + ' ' + r.amount;
      case 'gems':    return Icons.svg('gem') + ' ' + r.amount;
      case 'warp':    return Icons.svg('warp') + ' ' + r.amount;
      case 'sat':     return Icons.svg('sat') + ' ' + r.amount;
      case 'ship':    return Icons.svg('ship') + ' ' + T('ship.' + r.key + '.name', r.key);
      default:        return '';
    }
  }

  const canClaimFree = t => t <= tier() && !state().claimed.includes(t);
  const canClaimPrem = t => t <= tier() && isPremium() && !state().claimedP.includes(t);
  function claimFree(t) { if (!canClaimFree(t)) return null; state().claimed.push(t); grant(freeReward(t)); Profile.save(); return freeReward(t); }
  function claimPrem(t) { if (!canClaimPrem(t)) return null; state().claimedP.push(t); grant(premReward(t)); Profile.save(); return premReward(t); }
  function claimAll() {
    let n = 0;
    for (let t = 1; t <= TIERS; t++) { if (canClaimFree(t)) { claimFree(t); n++; } if (canClaimPrem(t)) { claimPrem(t); n++; } }
    return n;
  }
  function hasClaimable() {
    for (let t = 1; t <= tier(); t++) if (canClaimFree(t) || canClaimPrem(t)) return true;
    return false;
  }

  function unlockPremium(viaIap) {
    const p = Profile.get();
    if (isPremium()) return false;
    if (!viaIap) { if ((p.gems || 0) < PREMIUM_GEMS) return false; p.gems -= PREMIUM_GEMS; }
    state().premium = true; Profile.save();
    Analytics.purchaseSuccess && Analytics.purchaseSuccess({ item: 'season_pass', value: viaIap ? 'iap' : PREMIUM_GEMS + 'gems' });
    return true;
  }

  /**
   * The premium offer, with every price it can be bought at ON the button that
   * charges it.
   *
   * There used to be ONE button, labelled 400 crystals, which quietly opened a
   * real-money sheet when the player could not afford the crystals — a price
   * the player never saw until the payment window appeared. Three things were
   * wrong with that and all three are fixed here:
   *   - a crystal price must not charge money;
   *   - where payments are unavailable AND crystals are short, the button did
   *     nothing at all and read as broken;
   *   - the money offer was only reachable by players too poor for crystals,
   *     which is the opposite of how it should work.
   *
   * Now: the crystal button is always shown, disabled with a reason when short;
   * the money button appears beside it only where the host sells, carrying the
   * host's own localized price.
   */
  function premiumOffer() {
    const gems = Profile.get().gems || 0;
    const short = gems < PREMIUM_GEMS;
    const canPay = typeof Store !== 'undefined' && Store.iapAvailable && Store.iapAvailable();
    const price = canPay && Store.priceOf ? (Store.priceOf('season_pass') || '') : '';
    return `
      <button type="button" class="bp-premium-cta${short ? ' is-short' : ''}" id="bp-buy"
        ${short ? 'disabled' : ''}>
        <span class="bp-prem-star">★</span>
        <span class="bp-prem-txt">
          <span class="bp-prem-title">${T('bp.unlock')}</span>
          <span class="bp-prem-sub">${short ? Tf('bp.needGems', PREMIUM_GEMS - gems) : T('bp.premium')}</span>
        </span>
        <span class="bp-prem-price">${PREMIUM_GEMS} ${Icons.svg('gem', 14)}</span>
      </button>
      ${canPay && price ? `
      <button type="button" class="bp-premium-cta bp-premium-iap" id="bp-buy-iap">
        <span class="bp-prem-star">${Icons.svg('shop', 18)}</span>
        <span class="bp-prem-txt">
          <span class="bp-prem-title">${T('bp.unlock')}</span>
          <span class="bp-prem-sub">${T('bp.buyMoney')}</span>
        </span>
        <span class="bp-prem-price">${price}</span>
      </button>` : ''}`;
  }

  /* ---------------- UI — full-screen hub shell ---------------- */
  const el = () => document.getElementById('season');
  let onClose = null;
  function open(cb) {
    onClose = cb || null;
    if (typeof Onboarding !== 'undefined' && Onboarding.enter) Onboarding.enter('season');
    render();
    el().classList.remove('hidden');
  }
  function close() { el().classList.add('hidden'); if (onClose) { const c = onClose; onClose = null; c(); } }

  function goBack() {
    if (typeof FXTrans !== 'undefined') FXTrans.go({ style: 'cube', run: close });
    else close();
  }

  function render() {
    const prevWrap = el().querySelector('.hub-wrap');
    const savedScroll = prevWrap ? prevWrap.scrollTop : 0;
    const p = Profile.get(), s = state(), cur = tier(), prog = tierProgress();
    const credits = p.credits.toLocaleString();
    const gems = (p.gems || 0).toLocaleString();
    const left = daysLeft();

    const cell = (track, t, reward, claimed, claimable, locked) => {
      const label = `<span class="bp-rw ${locked ? 'locked' : ''}">${rewardLabel(reward)}</span>`;
      const act = claimed ? `<span class="bp-got">✓</span>`
        : claimable ? `<button class="mini bp-claim ${track === 'p' ? 'gem' : ''}" data-bp="${track}:${t}">${T('bp.claim')}</button>`
        : '';
      return `${label}<div class="bp-act">${act}</div>`;
    };
    const rows = [];
    for (let t = 1; t <= TIERS; t++) {
      const reached = t <= cur;
      const fr = freeReward(t), pr = premReward(t);
      const fClaimed = s.claimed.includes(t), pClaimed = s.claimedP.includes(t);
      const isNow = t === cur || (cur === 0 && t === 1);
      rows.push(`<div class="bp-tier ${reached ? 'reached' : ''} ${isNow ? 'current' : ''}">
        <div class="bp-lv">${t}</div>
        <div class="bp-cell free">${cell('f', t, fr, fClaimed, canClaimFree(t), false)}</div>
        <div class="bp-cell prem ${isPremium() ? 'on' : 'off'}">${cell('p', t, pr, pClaimed, canClaimPrem(t), !isPremium())}</div>
      </div>`);
    }

    el().innerHTML = `
      <div class="hub-wrap panel-scroll">
        <div class="scr-head">
          <button type="button" class="hub-icon-btn scr-back" id="bp-back" aria-label="${T('btn.back')}">${Icons.svg('chevron', 18)}</button>
          <div class="scr-title title-grad">${T('bp.title')}</div>
          <div class="curr-row">
            <span class="curr curr-gold">${Icons.svg('credit', 16)} ${credits}</span>
            <span class="curr-sep">|</span>
            <span class="curr curr-gem">${Icons.svg('gem', 16)} ${gems}</span>
          </div>
        </div>

        <div class="scr-body">
          <div class="glass-card glass-card-gold bp-summary">
            <div class="bp-summary-top">
              <span class="bp-season-lbl">${T('bp.season')} ${seasonLabel()}</span>
              <span class="bp-days">${Tf('bp.daysLeft', left)}</span>
            </div>
            <div class="bp-head">
              <div class="bp-tiernow">${T('bp.tier')} <b>${cur}</b>/${TIERS}</div>
              <div class="bp-xpbar">
                <div class="bp-xpfill" style="width:${prog.pct}%"></div>
                <span>${prog.x}/${prog.need} XP</span>
              </div>
            </div>
            ${isPremium() ? `<div class="bp-premon">⭐ ${T('bp.premiumOn')}</div>` : premiumOffer()}
            ${hasClaimable() ? `<button class="btn btn-ghost set-wide" id="bp-claimall">${T('bp.claimAll')}</button>` : ''}
          </div>

          <div class="bp-track-wrap">
            <div class="bp-cols"><span></span><span>${T('bp.free')}</span><span>${T('bp.premium')}</span></div>
            <div class="bp-track">${rows.join('')}</div>
          </div>
        </div>

        <div class="scr-foot">
          <button id="bp-ok" class="btn btn-cta set-wide">✓ ${T('btn.ok')}</button>
        </div>
      </div>`;
    const newWrap = el().querySelector('.hub-wrap');
    if (newWrap) {
      if (savedScroll) newWrap.scrollTop = savedScroll;
      else {
        // First open: jump near the current tier so the track feels alive.
        //
        // Deliberately NOT scrollIntoView. That call scrolls EVERY scrollable
        // ancestor it can find, including the document — and on iOS WebKit it
        // does so even though html/body are overflow:hidden. The page then
        // stays offset after this screen closes, which is how "open the battle
        // pass, take the reward, go back to the map" left the whole game
        // shifted up with a black band at the bottom.
        requestAnimationFrame(() => {
          const curEl = el().querySelector('.bp-tier.current');
          if (!curEl) return;
          const wr = newWrap.getBoundingClientRect();
          const cr = curEl.getBoundingClientRect();
          newWrap.scrollTop = Math.max(
            0, newWrap.scrollTop + (cr.top - wr.top) - (wr.height - cr.height) / 2);
        });
      }
    }
    VoxUI.bg(el(), 'season');
    wire();
  }

  function wire() {
    const root = el();
    root.querySelectorAll('[data-bp]').forEach(b => b.onclick = () => {
      const [trk, tt] = b.dataset.bp.split(':'), t = +tt;
      const r = trk === 'f' ? claimFree(t) : claimPrem(t);
      if (r) { Engine.audio.coin(); render(); }
    });
    // Each button charges what it says and nothing else.
    const buy = root.querySelector('#bp-buy');
    if (buy) buy.onclick = () => {
      if (unlockPremium(false)) { Engine.audio.power(); render(); }
    };
    const buyIap = root.querySelector('#bp-buy-iap');
    if (buyIap) buyIap.onclick = () => {
      Store.purchase('season_pass', ok => { if (ok) { unlockPremium(true); render(); } });
    };
    const all = root.querySelector('#bp-claimall');
    if (all) all.onclick = () => { if (claimAll() > 0) { Engine.audio.power(); render(); } };
    const back = root.querySelector('#bp-back');
    if (back) back.onclick = goBack;
    const ok = root.querySelector('#bp-ok');
    if (ok) ok.onclick = goBack;
  }

  /**
   * Compact post-run teaser: XP gained + free progress + what premium track
   * would already unlock (retroactive value for tiers 1..current).
   */
  function teaserHtml(xpGained) {
    const s = state();
    const cur = tier();
    const prog = tierProgress();
    const xp = Math.max(0, xpGained | 0);
    let premCredits = 0, premGems = 0, premOther = 0;
    for (let t = 1; t <= cur; t++) {
      const r = premReward(t);
      if (r.kind === 'credits') premCredits += r.amount;
      else if (r.kind === 'gems') premGems += r.amount;
      else premOther++;
    }
    const premBits = [];
    if (premCredits > 0) premBits.push(Icons.svg('credit', 12) + ' ~' + premCredits.toLocaleString());
    if (premGems > 0) premBits.push(Icons.svg('gem', 12) + ' ~' + premGems);
    if (premOther > 0) premBits.push('+' + premOther);

    const bar = `<div class="go-bp-bar"><div class="go-bp-fill" style="width:${prog.pct}%"></div></div>`;
    let line;
    if (isPremium()) {
      line = `<div class="go-bp-prem on">⭐ ${T('bp.premiumOn')}</div>`;
    } else if (cur > 0 && premBits.length) {
      line = `<div class="go-bp-prem">${T('go.bpWithPass')}: <b>${premBits.join(' · ')}</b>
        <span class="go-bp-hint">${T('go.bpRetro')}</span></div>`;
    } else {
      line = `<div class="go-bp-prem muted">${T('go.bpHint')}</div>`;
    }
    return `
      <div class="go-bp-card">
        <div class="go-bp-top">
          <span class="go-bp-title">${T('bp.title')}</span>
          <span class="go-bp-xp">⭐ +${xp} XP</span>
        </div>
        <div class="go-bp-tier">${T('bp.tier')} <b>${cur}</b>/${TIERS} · ${prog.x}/${prog.need}</div>
        ${bar}
        ${line}
      </div>`;
  }

  return {
    TIERS, PREMIUM_GEMS, XP_PER_TIER, tierCost, xpForTiers, DAILY_SOFT_CAP, CHAPTER_XP,
    state, tier, tierProgress, isPremium, daysLeft, seasonLabel,
    addRunXp, addStageXp, addChapterXp, addBonusXp, addXp,
    hasClaimable, unlockPremium, claimAll, open, close, render, seasonId,
    freeReward, premReward, rewardLabel, teaserHtml,
  };
})();
