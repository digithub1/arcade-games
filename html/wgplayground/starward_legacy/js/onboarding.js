/* ============================================================
 * onboarding.js — contextual coach-marks (progressive disclosure).
 *
 * Complements tutorial.js (the in-battle move/fire/focus/bomb coach).
 * Where the tutorial teaches CONTROLS, Onboarding surfaces SYSTEMS the
 * moment they first become reachable — upgrades, the campaign map, fuel,
 * supply bases, the weapon-lock — each as a one-shot toast.
 *
 * Tips can anchor to a UI element (opts.anchor CSS selector).
 * A FIFO queue prevents overlapping / duplicate tips when several
 * systems open in the same second (hub+hangar, map+relay, etc.).
 *
 * Scope lifecycle: every tip has opts.scope ('hub'|'hangar'|'map'|
 * 'base'|'combat'|…). Call Onboarding.enter(scope) when opening a
 * screen — tips for other scopes are dismissed immediately so a hub
 * tip never floats over the hangar.
 *
 * Every tip fires at most once (flag in profile.seenTips[id]); the whole
 * set can be replayed via Onboarding.reset() (Settings → replay tips).
 * ========================================================== */
const Onboarding = (() => {
  let host = null, toast = null, hideT = 0, anchorEl = null;
  let showing = false;
  let activeTipId = null;
  let activeTipScope = null;
  let screenScope = null; // last enter()
  let watchT = 0;
  /** Fired once when the active tip is dismissed (timeout / X / enter). */
  let onDoneCb = null;
  /** @type {{id:string, textKey:string, opts:object}[]} */
  let queue = [];

  // Mutual exclusion: never show both of these to the same pilot
  const EXCLUDE = {
    hub: ['hubFirst'],
    hubFirst: ['hub'],
  };

  function seen(id) { const p = Profile.get(); return !!(p.seenTips && p.seenTips[id]); }
  function mark(id) { const p = Profile.get(); if (!p.seenTips) p.seenTips = {}; p.seenTips[id] = true; Profile.save(); }
  function reset() {
    const p = Profile.get();
    p.seenTips = {};
    Profile.save();
    queue = [];
    hide({ drain: false });
  }

  function ensureDom() {
    host = document.getElementById('game-frame') || document.body;
    if (toast && toast.isConnected) return;
    toast = document.createElement('div');
    toast.className = 'coach-toast';
    toast.innerHTML =
      `<div class="coach-arrow" aria-hidden="true"></div>` +
      `<span class="coach-ic"></span><span class="coach-text"></span>` +
      `<button class="coach-x" aria-label="close">✕</button>`;
    toast.querySelector('.coach-x').onclick = () => { hide({ drain: true }); };
    host.appendChild(toast);
  }

  function clearAnchor() {
    if (anchorEl) {
      anchorEl.classList.remove('coach-pulse-target');
      const dot = anchorEl.querySelector && anchorEl.querySelector('.ftl-dot');
      if (dot) dot.classList.remove('coach-map-focus-dot');
      anchorEl.classList.remove('coach-map-focus');
      anchorEl = null;
    }
    if (toast) {
      toast.classList.remove('anchored', 'arr-above', 'arr-below', 'arr-left', 'arr-right');
      toast.style.left = '';
      toast.style.top = '';
      toast.style.bottom = '';
      toast.style.right = '';
      toast.style.transform = '';
    }
  }

  /**
   * Hide current tip.
   * opts.drain — if true (default for X / timeout), show next queued tip for this scope
   * opts.drain:false — used when replacing tip / navigating (don't pop next yet)
   * opts.keepQueue — keep queue when drain:false (screen enter already filtered it)
   * opts.pruneQueue — clear queue when drain:false (intentional tip replace: map→relay)
   */
  function hide(opts) {
    opts = opts || {};
    const doDrain = opts.drain !== false;
    if (toast) toast.classList.remove('show');
    clearTimeout(hideT);
    clearTimeout(watchT);
    clearAnchor();
    showing = false;
    activeTipId = null;
    activeTipScope = null;
    const done = onDoneCb;
    onDoneCb = null;
    // Replacing tips: drop queue so we don't re-show the tip we closed (map → relay).
    // Screen enter uses keepQueue — queue was already filtered to the new scope.
    if (!doDrain && opts.keepQueue !== true) queue = [];
    if (!doDrain && opts.pruneQueue) queue = [];
    // onDone ONLY on natural dismiss (timeout / X / anchor gone → drain:true).
    // Scope change & intentional replace must NOT fire onDone — otherwise
    // map tip's chain would re-enter while navigating to hangar, or fire mid-replace.
    if (done && doDrain) { try { done(); } catch (e) {} }
    if (doDrain) drainQueue();
  }

  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }

  function blockedByExclude(id) {
    const rivals = EXCLUDE[id];
    if (!rivals) return false;
    return rivals.some(r => seen(r));
  }

  /** Anchor still in the live DOM and not inside a .hidden ancestor. */
  function anchorStillValid() {
    if (!anchorEl) return true;
    if (!anchorEl.isConnected) return false;
    let p = anchorEl;
    while (p) {
      if (p.classList && p.classList.contains('hidden')) return false;
      if (p === host || p === document.body) break;
      p = p.parentElement;
    }
    // offsetParent null often means display:none (except fixed — rare here)
    if (anchorEl.offsetParent === null && getComputedStyle(anchorEl).position !== 'fixed') {
      // Still visible if inside #game-frame with opacity; check client rects
      const r = anchorEl.getBoundingClientRect();
      if (r.width < 1 && r.height < 1) return false;
    }
    return true;
  }

  let watchSelector = null;
  let watchPlace = null;
  let watchPosOpts = null;

  function startAnchorWatch(selector, place, posOpts) {
    clearTimeout(watchT);
    watchSelector = selector || null;
    watchPlace = place || null;
    watchPosOpts = posOpts || null;
    const tick = () => {
      if (!showing) return;
      if (!anchorStillValid()) {
        // Target left the screen — dismiss without showing unrelated queue junk
        hide({ drain: true });
        return;
      }
      // Re-pin if layout/scroll moved the anchor (map pan, hangar tab, resize)
      if (watchSelector && toast && toast.classList.contains('anchored')) {
        try {
          positionAnchored(watchSelector, watchPlace, Object.assign({}, watchPosOpts || {}, { rePin: true }));
        } catch (e) {}
      }
      watchT = setTimeout(tick, 280);
    };
    watchT = setTimeout(tick, 280);
  }

  /**
   * Position toast near a DOM target inside #game-frame.
   * place: 'above' | 'below' | 'left' | 'right' (default auto)
   * posOpts.noScrollIntoView — map pans its own camera; don't fight it
   */
  function positionAnchored(selector, place, posOpts) {
    posOpts = posOpts || {};
    const target = (host && host.querySelector(selector)) || document.querySelector(selector);
    if (!target || !host) return false;
    const fr = host.getBoundingClientRect();
    const tr = target.getBoundingClientRect();
    toast.style.visibility = 'hidden';
    toast.classList.add('show', 'anchored');
    const tw = Math.max(toast.offsetWidth || 0, 200);
    const th = Math.max(toast.offsetHeight || 0, 52);
    toast.style.visibility = '';

    let side = place || 'below';
    if (!place) {
      const roomBelow = fr.bottom - tr.bottom;
      const roomAbove = tr.top - fr.top;
      side = roomBelow >= th + 16 || roomBelow >= roomAbove ? 'below' : 'above';
    }

    let left = tr.left - fr.left + tr.width / 2;
    let top;
    const gap = 12;
    if (side === 'above') top = tr.top - fr.top - th - gap;
    else if (side === 'below') top = tr.bottom - fr.top + gap;
    else if (side === 'left') {
      left = tr.left - fr.left - tw / 2 - gap;
      top = tr.top - fr.top + tr.height / 2 - th / 2;
    } else {
      left = tr.right - fr.left + tw / 2 + gap;
      top = tr.top - fr.top + tr.height / 2 - th / 2;
    }

    left = clamp(left, tw / 2 + 8, fr.width - tw / 2 - 8);
    top = clamp(top, 8, fr.height - th - 8);

    toast.style.left = left + 'px';
    toast.style.top = top + 'px';
    toast.style.bottom = 'auto';
    toast.style.transform = 'translateX(-50%)';
    toast.classList.remove('arr-above', 'arr-below', 'arr-left', 'arr-right');
    toast.classList.add('arr-' + side);

    // Keep single pulse target (re-pin from watch shouldn't stack)
    if (anchorEl && anchorEl !== target) {
      anchorEl.classList.remove('coach-pulse-target', 'coach-map-focus');
      const oldDot = anchorEl.querySelector && anchorEl.querySelector('.ftl-dot');
      if (oldDot) oldDot.classList.remove('coach-map-focus-dot');
    }
    anchorEl = target;
    target.classList.add('coach-pulse-target');
    // Map already pans its own viewport — scrolling here would fight that camera.
    // Never re-scroll on watch re-pins (posOpts.noScrollIntoView or rePin flag).
    //
    // The panel is scrolled by hand rather than with scrollIntoView: that call
    // walks up and scrolls every scrollable ancestor including the document,
    // and on iOS WebKit it does it even with html/body set to overflow:hidden,
    // leaving the whole game offset afterwards.
    if (!posOpts.noScrollIntoView && !posOpts.rePin) {
      try { scrollPanelTo(target); } catch (e) {}
    }
    return true;
  }

  /**
   * Bring `target` into view by scrolling ONLY the panel it lives in. Walks up
   * to the nearest element that actually scrolls and stops there; if nothing
   * scrolls, nothing moves — which is the correct answer, not a reason to fall
   * back to scrollIntoView.
   */
  function scrollPanelTo(target) {
    let box = target.parentElement;
    while (box && box !== document.body) {
      const canScroll = box.scrollHeight > box.clientHeight + 2;
      if (canScroll && /auto|scroll/.test(getComputedStyle(box).overflowY)) break;
      box = box.parentElement;
    }
    if (!box || box === document.body) return;
    const br = box.getBoundingClientRect();
    const tr = target.getBoundingClientRect();
    if (tr.top >= br.top && tr.bottom <= br.bottom) return;   // already visible
    box.scrollTo({
      top: Math.max(0, box.scrollTop + (tr.top - br.top) - (br.height - tr.height) / 2),
      behavior: 'smooth',
    });
  }

  function showNow(id, textKey, opts) {
    opts = opts || {};
    // Don't show a tip for a different screen than we're on
    if (opts.scope && screenScope && opts.scope !== screenScope) {
      return false;
    }
    // Host screen may have closed mid-queue (DOM gone / not mounted)
    if (opts.scope && !scopeScreenLive(opts.scope)) {
      return false;
    }
    ensureDom();
    clearAnchor();
    mark(id);
    const rivals = EXCLUDE[id];
    if (rivals) rivals.forEach(r => mark(r));

    toast.querySelector('.coach-ic').innerHTML = opts.icon || '💡';
    toast.querySelector('.coach-text').innerHTML = T(textKey);

    let anchored = false;
    const posOpts = { noScrollIntoView: !!opts.noScrollIntoView };
    // Combat gets its own, smaller skin: in a menu a wide card costs nothing,
    // over the play area it hides the ship and the lane it flies in.
    const combat = opts.scope === 'combat' ? ' in-combat' : '';
    if (opts.anchor) {
      toast.className = 'coach-toast show anchored' + combat;
      anchored = positionAnchored(opts.anchor, opts.place, posOpts);
    }
    if (!anchored) {
      toast.className = 'coach-toast pos-' + (opts.pos || 'top') + ' show' + combat;
      toast.style.left = '';
      toast.style.top = '';
      toast.style.bottom = '';
      toast.style.right = '';
      toast.style.transform = '';
    }

    showing = true;
    activeTipId = id;
    activeTipScope = opts.scope || null;
    onDoneCb = typeof opts.onDone === 'function' ? opts.onDone : null;
    clearTimeout(hideT);
    hideT = setTimeout(() => hide({ drain: true }), opts.ms || 5600);
    if (anchored && opts.anchor) startAnchorWatch(opts.anchor, opts.place, posOpts);
    else {
      watchSelector = null;
      watchPlace = null;
      watchPosOpts = null;
    }
    try { Engine.audio.blip(720, 0.05, 'sine', 0.08); } catch (e) {}
    return true;
  }

  /** Quick check that the UI for a scope is still the visible screen. */
  function scopeScreenLive(scope) {
    if (!scope) return true;
    try {
      const idBy = {
        hub: 'hub', hangar: 'hangar', map: 'campaignMap', combat: 'hud',
        settings: 'settings', shop: 'shop', rewards: 'rewards', season: 'season',
      };
      // base is a modal on the map — map must be open
      if (scope === 'base') {
        const map = document.getElementById('campaignMap');
        return !!(map && !map.classList.contains('hidden'));
      }
      const id = idBy[scope];
      if (!id) return true;
      const el = document.getElementById(id);
      if (!el) return true; // unknown — don't block
      return !el.classList.contains('hidden');
    } catch (e) { return true; }
  }

  function drainQueue() {
    while (queue.length) {
      const next = queue.shift();
      if (!next.opts.force && seen(next.id)) continue;
      if (!next.opts.force && blockedByExclude(next.id)) continue;
      // Skip tips for a different screen / unmounted UI
      if (next.opts.scope && screenScope && next.opts.scope !== screenScope) continue;
      if (next.opts.scope && !scopeScreenLive(next.opts.scope)) continue;
      if (showNow(next.id, next.textKey, next.opts)) return;
      // showNow failed (race) — try next, don't stick
    }
  }

  // Show a one-time coach toast (queued if another is already up).
  // opts: { pos, icon, ms, force, anchor, place, scope, onDone }
  function tip(id, textKey, opts) {
    opts = opts || {};
    if (!opts.force && seen(id)) return false;
    if (!opts.force && blockedByExclude(id)) return false;
    // Wrong screen — drop (don't queue forever for a closed screen)
    if (opts.scope && screenScope && opts.scope !== screenScope) return false;
    if (opts.scope && !scopeScreenLive(opts.scope)) return false;
    // De-dupe: never double-queue / double-show the same id
    if (queue.some(q => q.id === id)) return false;
    if (showing && activeTipId === id) return false;
    if (showing) {
      queue.push({ id, textKey, opts });
      return true;
    }
    return showNow(id, textKey, opts);
  }

  /**
   * Call when the player opens a major screen. Dismisses tips that belong
   * to other scopes so e.g. hub→hangar never leaves a floating hub tip.
   */
  function enter(scope) {
    screenScope = scope || null;
    // Drop queued tips for other scopes
    queue = queue.filter(q => !q.opts.scope || q.opts.scope === screenScope);
    // Dismiss active tip if it belongs elsewhere (keep same-scope queue)
    if (showing && activeTipScope && activeTipScope !== screenScope) {
      hide({ drain: false, keepQueue: true });
    } else if (showing && !anchorStillValid()) {
      hide({ drain: false, keepQueue: true });
    } else if (showing && activeTipScope && activeTipScope === screenScope
      && optsScopeDead(activeTipScope)) {
      hide({ drain: false, keepQueue: true });
    }
  }

  function optsScopeDead(scope) {
    return scope && !scopeScreenLive(scope);
  }

  /** Hard clear — leave combat / full overlay takeover. */
  function clearAll() {
    queue = [];
    hide({ drain: false, pruneQueue: true });
  }

  return { tip, seen, mark, reset, hide, enter, clearAll, isShowing: () => showing, activeId: () => activeTipId };
})();
