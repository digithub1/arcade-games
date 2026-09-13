/* ============================================================
 * cloud.js — cloud-save + leaderboard sync via the active platform
 * adapter (Platform.sdk). Works the same on Yandex / VK / OK /
 * Telegram / GamePush; no-op where the platform has no cloud.
 *
 *   - pulls the cloud save and adopts it only if it is actually ahead
 *     (never clobber local gems/credits from a rewarded grant / shop buy),
 *   - registers a syncer so every Profile.save() pushes to the cloud,
 *   - mirrors numeric fields for leaderboards.
 * ============================================================ */
const Cloud = (() => {
  let ready = false, syncT = null, pending = null;

  function init() {
    return Platform.ready.then(() => {
      if (!Platform.caps.cloud) return;          // platform has no cloud save
      ready = true;
      // Flush the pending write immediately when the tab is hidden/closed —
      // visibilitychange fires reliably on mobile where beforeunload does not.
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden' && pending) flush();
      });
      // This host stores saves on the account, so the device stores none. The
      // local copy is dropped HERE, before it can be read by anything, and the
      // profile is reset to defaults until the account's own save arrives.
      try { Profile.useCloudOnly(); } catch (e) {}
      // The syncer is attached by pull(), and only when the read SUCCEEDED —
      // see there.
      return pull();
    });
  }

  // Push the latest snapshot now, cancelling the debounce timer.
  function flush() {
    if (!ready || !pending) return;
    const data = pending; pending = null;
    clearTimeout(syncT); syncT = null;
    try {
      Platform.sdk.cloudSet(data);
      if (Platform.caps.leaderboard) {
        // Only `score` exists on the GP player model unless extra fields are added in LK.
        Platform.sdk.submitScore('score', data.highScore || 0);
      }
    } catch (e) {}
  }

  // Immediate write (rewarded / IAP). Safe if Cloud is not ready yet — localStorage
  // already has the grant; boot pull will keep the richer local copy.
  function persist() {
    pending = (typeof Profile !== 'undefined' && Profile.get) ? Profile.get() : pending;
    flush();
  }

  /**
   * Pull the account's save. The account is the only source of truth here, so
   * whatever it holds is adopted as-is and an account with no save simply
   * starts empty.
   *
   * The failure branch is the important one. `cloudGet` REJECTS when the save
   * could not be read (SDK missing, network gone) as opposed to resolving with
   * null for "this account has nothing". Those must not be confused: treating a
   * failed read as an empty account would start the player fresh and then push
   * that empty profile over their real save on the first autosave. So on a
   * rejection the syncer is never attached — the session stays playable and
   * writes nothing.
   */
  function pull() {
    return Promise.resolve(Platform.sdk.cloudGet()).then(cloud => {
      if (cloud && typeof cloud === 'object') {
        Profile.replace(cloud);
        if (typeof Settings !== 'undefined') Settings.apply();
        if (typeof I18N !== 'undefined') I18N.setLang(Platform.getLanguage());
      }
      Profile.setSyncer(push);
    }, err => {
      ready = false;
      try { console.warn('[Cloud] save unreadable — this session will not write', err); } catch (e) {}
    });
  }

  // Mirror profile to the cloud (save blob) + numeric leaderboard fields.
  // Debounced to 3 s to respect platform write limits (Yandex: 100/5 min);
  // flush() sends the pending snapshot early on tab-hide / critical events.
  function push(data) {
    if (!ready) return;
    pending = data || Profile.get();
    clearTimeout(syncT);
    syncT = setTimeout(flush, 3000);
  }

  return { init, push, flush, persist, get ready() { return ready; } };
})();
