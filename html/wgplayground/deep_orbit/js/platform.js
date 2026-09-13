/**
 * WG Playground / WGPlayer adapter for the JavaScript universal tag.
 *
 * The tag is loaded from index.html. Midrolls are requested only while the
 * game is already at a natural pause, and the caller-provided hooks mute all
 * audio before refetchAd() as required by WGPlayer's integration guide.
 * Missing, blocked, or not-yet-onboarded SDKs safely degrade to no ads.
 */

const resolved = () => Promise.resolve({ shown: false });
const AD_SAFETY_TIMEOUT_MS = 120000;

function getLoader() {
  try {
    const name = window.preroll?.config?.loaderObjectName;
    const loader = name ? window[name] : null;
    return loader && typeof loader.refetchAd === 'function' ? loader : null;
  } catch (_) {
    return null;
  }
}

export const Platform = {
  id: 'wgplayground',
  _ready: false,
  _warnedUnavailable: false,
  _adPromise: null,

  async init() {
    const markReady = () => {
      this._ready = true;
      try { console.info('[WGPlayer] universal tag ready'); } catch (_) { /* ignore */ }
    };

    if (getLoader()) markReady();
    else {
      try { document.addEventListener('wgSdkReady', markReady, { once: true }); }
      catch (_) { /* ignore */ }
    }
    return this.id;
  },

  loadingStart() {},
  loadingFinished() {},
  gameplayStart() { return resolved(); },
  gameplayStop() { return resolved(); },

  /**
   * Request a WGPlayer midroll. refetchAd() invokes the supplied function once
   * the ad closes, which is the only supported resume signal for plain HTML5.
   */
  commercialBreak(hooks = {}) {
    if (this._adPromise) return this._adPromise;

    const loader = getLoader();
    if (!loader) {
      if (!this._warnedUnavailable) {
        this._warnedUnavailable = true;
        try { console.warn('[WGPlayer] ad loader unavailable; continuing without an ad'); }
        catch (_) { /* ignore */ }
      }
      return resolved();
    }

    let resolveBreak;
    const promise = new Promise((resolve) => { resolveBreak = resolve; });
    this._adPromise = promise;
    let settled = false;
    let timer = null;

    const finish = (shown = true) => {
      if (settled) return;
      settled = true;
      if (timer) clearTimeout(timer);
      try { hooks.onAdEnd?.(); } catch (_) { /* ignore */ }
      this._adPromise = null;
      resolveBreak({ shown });
    };

    try {
      // WGPlayer requires the game to be paused and muted before this call.
      try { hooks.onAdStart?.(); } catch (_) { /* ignore */ }
      timer = setTimeout(() => {
        try { console.warn('[WGPlayer] ad callback timed out; resuming game'); }
        catch (_) { /* ignore */ }
        finish(false);
      }, AD_SAFETY_TIMEOUT_MS);
      loader.refetchAd(() => finish(true));
    } catch (err) {
      try { console.warn('[WGPlayer] refetchAd() failed:', err); } catch (_) { /* ignore */ }
      finish(false);
    }

    return promise;
  },

  // Orbit Deep has no opt-in reward mechanic, so rewarded ads are deliberately
  // not exposed in this build.
  rewardedBreak: async () => false,
  happyTime() {},
};
