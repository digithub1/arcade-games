/* ============================================================
 * analytics.js — analytics abstraction layer.
 *
 * One thin API the game calls; the backend is pluggable. In
 * production it forwards to Firebase Analytics (GA4) if present,
 * else gtag, else Yandex Metrica; always buffers the last events
 * so they can be inspected. ?debug logs every event to console.
 *
 * Event taxonomy & Firebase setup: docs/ANALYTICS_PLAN.md
 * ========================================================== */
const Analytics = (() => {
  const DEBUG = new URLSearchParams(location.search).has('debug');
  const buffer = [];            // ring buffer of recent events (debug/QA)
  let sessionStart = 0, started = false, runStart = 0;

  // Forward one event to whichever backend is wired up.
  function send(name, params) {
    try {
      if (window.firebase && firebase.analytics) firebase.analytics().logEvent(name, params);
      else if (typeof window.gtag === 'function') window.gtag('event', name, params);
      else if (typeof window.ym === 'function' && window.YM_COUNTER) window.ym(window.YM_COUNTER, 'reachGoal', name, params);
    } catch (e) { /* never let analytics break the game */ }
    if (DEBUG) console.log('%c[analytics]', 'color:#4ad6ff', name, params);
    buffer.push({ name, params, t: Date.now() });
    if (buffer.length > 200) buffer.shift();
  }

  function log(name, params = {}) {
    send(name, Object.assign({ platform: Platform.id, lang: I18N.lang }, params));
  }

  function init() {
    if (started) return;
    started = true; sessionStart = Date.now();
    log('app_open', { is_new: !Profile.get().totalRuns });
    // session length: flush on tab hide / unload, restart clock on return
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) flushSession(); else sessionStart = Date.now();
    });
    window.addEventListener('beforeunload', flushSession);
  }

  function flushSession() {
    if (!started) return;
    const seconds = Math.round((Date.now() - sessionStart) / 1000);
    if (seconds > 0) log('session_length', { seconds });
  }

  // ---- typed event helpers (the names the game should call) ----
  return {
    init, log,
    recent: (n = 25) => buffer.slice(-n),

    // gameplay
    levelStart(p) { runStart = performance.now(); log('level_start', p); },
    levelFinish(p) {
      const duration = runStart ? Math.round((performance.now() - runStart) / 1000) : 0;
      log('level_finish', Object.assign({ duration }, p));
    },
    tutorialComplete() { log('tutorial_complete'); },
    bossDefeated(p) { log('boss_defeated', p); },

    // ads (rewarded video) — call from the ad hooks when added
    rewardVideoStart(p) { log('reward_video_start', p); },
    rewardVideoComplete(p) { log('reward_video_complete', p); },

    // monetization
    purchaseOffer(p) { log('purchase_offer', p); },     // a paid offer was shown
    purchaseSuccess(p) { log('purchase_success', p); }, // real-money purchase done
    spendCurrency(p) { log('spend_virtual_currency', p); }, // soft-currency sink
    earnCurrency(p) { log('earn_virtual_currency', p); },

    // social
    share(p) { log('share', p); },
    invite(p) { log('invite', p); },
  };
})();
