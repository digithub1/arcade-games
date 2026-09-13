/* ============================================================
 * map.js — FTL-style campaign map UI (fullscreen, pannable).
 *
 * The map fills the whole screen and is bigger than the viewport, so
 * you drag / scroll to look around. Nodes are small so lots fits.
 * Fog of war hides everything except nodes touching a cleared node.
 * Click a cleared node to FREE-MOVE there; click a frontier node to
 * open its info (difficulty + hazards) and ENGAGE its stage.
 * ============================================================ */
const CampaignMap = (() => {
  const el = () => document.getElementById('campaignMap');
  let onClose = null, selected = -1;

  // Unique voxel thumb per node type (larger on map for readability)
  const NODE_VOX = {
    start:  { key: 'vanguard', k: 0.58, s: 40 },
    combat: { key: 'kamikaze', k: 0.60, s: 40 },
    elite:  { key: 'tank',     k: 0.55, s: 40 },
    boss:   { key: 'boss',     k: 0.42, s: 40 },
    base:   { key: 'station', k: 0.48, s: 40 },
    relay:  { key: 'relay',   k: 0.48, s: 40 },
    research: { key: 'lab',   k: 0.48, s: 40 },
  };
  /**
   * Reliable node icon HTML. Bases ALWAYS get a visible glyph under the voxel
   * thumb — empty/transparent canvases from a late Vox bake used to make bases
   * "vanish" until a re-open refreshed the cache.
   */
  function nodeThumb(type) {
    const nv = NODE_VOX[type] || NODE_VOX.combat;
    // Drawn art, not font glyphs: this fallback exists for phones, and phones
    // are exactly where 🛠 ☠ 📡 🔬 land as tofu boxes.
    const glyph = Icons.svg(
      type === 'base' ? 'wrench' : type === 'boss' ? 'crown' : type === 'relay' ? 'relay'
      : type === 'research' ? 'research' : type === 'elite' ? 'skull'
      : type === 'start' ? 'home' : 'swords', 15);
    let img = '';
    try {
      if (typeof VoxUI !== 'undefined' && VoxUI.voxThumb && typeof Vox !== 'undefined' && Vox.MODELS && Vox.MODELS[nv.key]) {
        const url = VoxUI.voxThumb(nv.key, nv.s, { k: nv.k });
        if (url && url.length > 64) img = `<img class="ftl-vox" src="${url}" alt="" draggable="false">`;
      }
    } catch (e) {}
    return `<span class="ftl-ico-stack">${img}<span class="ftl-glyph">${glyph}</span></span>`;
  }
  /**
   * Badges on a ring around the node, grouped by category.
   *
   * Everything used to pile into the top-right corner — the type pin and the
   * hazard strip literally overlapped, and the strip grew sideways so no two
   * nodes lined up. Here each category owns an arc and the angles are computed,
   * so one hazard and four hazards are both centred on their side.
   *
   * Kept to the UPPER half: node labels, fuel costs and route lines live below,
   * and badges down there fought with them.
   */
  // Base radius: node 21 + badge 9.5 + air. At 25 the badges sat ON the node's
  // own ring instead of around it.
  const RING_R = 32;
  const BADGE_W = 19;
  function ringHtml(type, state, hazards) {
    const out = [];
    // The ring GROWS with the busiest side. Badges are 19px and the arc is
    // bounded, so packing more of them into a fixed radius makes neighbours
    // overlap — at R=32 four hazards ended up 9.6px apart. Pushing the ring out
    // buys the arc length instead of stealing it from the arc's bounds.
    const busiest = Math.max(state.length, hazards.length);
    const R = RING_R + Math.max(0, busiest - 1) * 10;
    // Offset computed here, not with a CSS rotate pair. `calc(-1 * var(--a))`
    // on an untyped custom property drops the whole transform, and the badges
    // silently piled back onto the node centre. Plain px offsets also keep the
    // artwork upright without a counter-rotation.
    const put = (icoKey, cls, deg) => {
      const r = deg * Math.PI / 180;
      const x = Math.sin(r) * R, y = -Math.cos(r) * R;
      out.push(`<span class="ftl-rb ${cls}" style="left:calc(50% + ${x.toFixed(1)}px);` +
        `top:calc(50% + ${y.toFixed(1)}px)">${Icons.svg(icoKey, 13)}</span>`);
    };

    if (type) put(type[0], type[1], 0);
    // Fan each group outward from the top, first item nearest the type badge so
    // the most important thing in a group sits closest to the node's identity.
    //
    // The arc is BOUNDED to 38..90 degrees. 38 leaves a gap from the type badge
    // (at this radius a badge is 19px wide and 34 degrees of arc is exactly 19px
    // — they touched). 90 is the horizontal: past it a badge drops into the
    // lower half, where the fuel costs and route lines are.
    // A1 is the horizontal and nothing crosses it: below the line sit the fuel
    // costs and route lines. Spacing is bought with radius instead — the arc's
    // bounds are the constraint, the radius is the free variable.
    const A0 = 40, A1 = 90;
    const fan = (list, dir) => {
      const n = list.length;
      const step = n <= 2 ? 34 : (A1 - A0) / (n - 1);
      list.forEach((it, i) => put(it[0], it[1], dir * Math.min(A1, A0 + i * step)));
    };
    fan(state, -1);
    fan(hazards, 1);
    return out.length ? `<div class="ftl-ring">${out.join('')}</div>` : '';
  }

  /** Permanent badge next to every supply base — never depends on thumb bake timing. */
  function basePinHtml() {
    return `<span class="ftl-base-pin" title="${T('node.base.name')}" aria-label="${T('node.base.name')}">${Icons.svg('shop', 15)}<span class="ftl-base-pin-glyph">${Icons.svg('wrench', 13)}</span></span>`;
  }
  /** Permanent badge next to every research station (always visible, like base pin). */
  function researchPinHtml() {
    return `<span class="ftl-research-pin" title="${T('node.research.name')}" aria-label="${T('node.research.name')}"><span class="ftl-research-pin-glyph">${Icons.svg('research', 13)}</span></span>`;
  }
  /** Permanent badge next to every jamming relay (unique pink antenna pin). */
  function relayPinHtml() {
    return `<span class="ftl-relay-pin" title="${T('node.relay.name')}" aria-label="${T('node.relay.name')}"><span class="ftl-relay-pin-glyph">${Icons.svg('relay', 13)}</span></span>`;
  }
  /**
   * "Never looked at this one" eye, ON THE NODE.
   *
   * The survey state already existed as a text chip inside the node's detail
   * panel, which you only see after tapping the node — useless for deciding
   * WHICH node to tap. On the map itself the player can now read the whole route
   * at a glance: an eye means nobody has flown it and no probe has been spent
   * on it. It sits opposite the type pins so a relay or a base can carry both.
   */
  function unsurveyedPinHtml(node) {
    if (!node) return '';
    try {
      if (Campaign.isVisited(node.id)) return '';
      if (Campaign.isScouted && Campaign.isScouted(node.id)) return '';
    } catch (e) { return ''; }
    const lbl = T('map.unsurveyed');
    return `<span class="ftl-eye-pin" title="${lbl}" aria-label="${lbl}">${Icons.svg('eye', 13)}</span>`;
  }
  /** Warlord / gate leaf — permanent crown pin + special highlight. */
  function warlordPinHtml() {
    const lbl = T('node.boss.name', T('node.boss'));
    return `<span class="ftl-warlord-pin" title="${lbl}" aria-label="${lbl}"><span class="ftl-warlord-pin-glyph">${Icons.svg('crown', 13)}</span></span>`;
  }
  /** Depot chip under the parked ship (current supply base only). */
  function depotBtnHtml(id) {
    return `<button type="button" class="ftl-node-depot" data-depot="${id}">${Icons.svg('shop', 14)} <span>${T('trader.open')}</span></button>`;
  }
  /** Visual radius of .ftl-dot (half of 42px) — edges stop on this circle. */
  const NODE_R = 21;
  let scoutMode = false;                        // 🛰 pick-a-node-to-scout state
  let flying = false;                           // block input during multi-hop flight
  // generous padding around the node area so the map exceeds the viewport on BOTH
  // axes → you can pan horizontally and vertically to explore.
  const PADX = 260, PADY = 260;
  const totW = () => Campaign.MAPW + PADX * 2;
  const totH = () => Campaign.MAPH + PADY * 2;
  /**
   * Map camera zoom. Level 0 = current close-up (1:1). Two zoom-outs:
   *   1 ≈ see ~1.4× more map, 2 ≈ see ~2× more (half scale).
   * Session-only (not saved) — safe pre-release default each open is 0.
   */
  const MAP_ZOOM = [1, 0.72, 0.5];
  let mapZoom = 0;                                // 0..MAP_ZOOM.length-1
  let pendingZoomCenter = null;                   // {x,y} world/canvas coords to keep centered after zoom
  const zoomScale = () => MAP_ZOOM[mapZoom] || 1;
  let suppressClickUntil = 0;                     // ignore the click that ends a drag
  let pendingCenter = false;                      // center on the ship only when asked (open / recenter)
  let keepScroll = null;                          // preserve pan across a re-render (no camera jump on move)

  /** Trim line so ends sit on node circumferences (not through centers). */
  function edgeSegment(x1, y1, x2, y2, r) {
    const dx = x2 - x1, dy = y2 - y1;
    const len = Math.hypot(dx, dy) || 1;
    if (len <= r * 2 + 1) return null; // nodes too close — skip stroke
    const ux = dx / len, uy = dy / len;
    return { x1: x1 + ux * r, y1: y1 + uy * r, x2: x2 - ux * r, y2: y2 - uy * r };
  }

  /**
   * Shortest path from→to on the map graph.
   * Intermediate nodes must be visited; destination may be unvisited (frontier).
   * Returns id[] or null.
   * opts.ignoreJam: treat jammed edges as open (for diagnosing jam vs unexplored).
   */
  function findPath(m, fromId, toId, opts) {
    opts = opts || {};
    if (fromId === toId) return [fromId];
    const q = [fromId];
    const prev = new Map([[fromId, null]]);
    while (q.length) {
      const u = q.shift();
      const node = m.byId[u];
      if (!node) continue;
      for (const v of node.edges) {
        if (prev.has(v)) continue;
        // jammed by uncleared relay → cannot use this edge
        if (!opts.ignoreJam && !Campaign.edgeOpen(m, u, v)) continue;
        // may step onto visited nodes, or the final target
        if (v !== toId && !Campaign.isVisited(v)) continue;
        prev.set(v, u);
        if (v === toId) {
          const path = [];
          for (let c = toId; c != null; c = prev.get(c)) path.push(c);
          path.reverse();
          return path;
        }
        q.push(v);
      }
    }
    return null;
  }
  /** True if a path exists only when ignoring jam (i.e. relay is the blocker). */
  function findPathIgnoreJam(m, fromId, toId) {
    return findPath(m, fromId, toId, { ignoreJam: true });
  }

  /** True if dest is adjacent via an OPEN (non-jammed) edge from a visited node. */
  function isOpenFrontier(m, id) {
    if (Campaign.isVisited(id)) return false;
    const vis = Campaign.st().visited || [];
    return m.nodes.some(n => vis.includes(n.id) && n.edges.includes(id) && Campaign.edgeOpen(m, n.id, id));
  }
  function pathFuel(m, path) {
    let cost = 0;
    for (let i = 0; i < path.length - 1; i++) cost += travelEdgeCost(m, path[i], path[i + 1]);
    return cost;
  }
  /** Edge fuel with optional fuelTank module discount (floor 1). */
  function travelEdgeCost(m, aId, bId) {
    let c = Campaign.edgeCost(m, aId, bId);
    try {
      if (typeof Meta !== 'undefined' && Meta.fuelDiscount) {
        c = Math.max(1, c - (Meta.fuelDiscount(Profile.get()) || 0));
      }
    } catch (e) {}
    return c;
  }

  /** When true, skip tip.map once (arriving from base dock — base tip owns the beat). */
  let suppressMapTipOnce = false;
  /** Guard so map→relay→jam never runs twice in one map session. */
  let relayJamChained = false;
  /** Deferred coach timeouts (map / relay / jam) — cancel on close so re-open never double-fires. */
  let mapCoachTimers = [];
  function clearMapCoachTimers() {
    mapCoachTimers.forEach(t => { try { clearTimeout(t); } catch (e) {} });
    mapCoachTimers = [];
  }
  function scheduleMapCoach(fn, ms) {
    const t = setTimeout(() => {
      mapCoachTimers = mapCoachTimers.filter(x => x !== t);
      try { fn(); } catch (e) {}
    }, ms);
    mapCoachTimers.push(t);
    return t;
  }

  function open(cb) {
    onClose = cb || null; selected = -1; pendingCenter = true; keepScroll = null; flying = false;
    clearMapCoachTimers();
    relayJamChained = false;
    Campaign.ensure();
    // Pre-bake node thumbs so the first frame never flashes empty bases
    try { ['base', 'combat', 'elite', 'boss', 'start', 'relay', 'research'].forEach(nodeThumb); } catch (e) {}
    // Always unhide even if render throws — otherwise hub is already closed and
    // the player is stuck on empty background animation with no map UI.
    if (typeof Onboarding !== 'undefined' && Onboarding.enter) Onboarding.enter('map');
    try { render(); } catch (e) { console.error('CampaignMap.render', e); }
    el().classList.remove('hidden');
    // First open: jump tip → relay tip → jamGate (if warlord path blocked).
    // Scheduled only here (not in render) so re-renders never stack timers.
    // Suppressed when arriveAtBase will show tip.base → warehouse (no stack).
    if (typeof Onboarding !== 'undefined') {
      scheduleMapCoach(() => {
        if (el().classList.contains('hidden')) return;
        if (suppressMapTipOnce) { suppressMapTipOnce = false; return; }
        // Exactly one path into relay/jam chain (never double via seen+onDone)
        if (Onboarding.seen && Onboarding.seen('map')) {
          scheduleRelayJamCoach();
        } else {
          coachTipOnNode('jump', 'map', 'tip.map', {
            icon: Icons.svg('map', 18), ms: 6200, place: 'below',
            onDone: () => scheduleRelayJamCoach(),
          });
        }
      }, 480);
    }
  }

  /** After map tip: explain relay, then jam on warlord if path is blocked. Once each. */
  function scheduleRelayJamCoach() {
    if (typeof Onboarding === 'undefined') return;
    if (el().classList.contains('hidden')) return;
    if (relayJamChained) return;
    relayJamChained = true;
    const m = Campaign.map();
    if (!m || !m.nodes) return;
    const hasRelay = m.nodes.some(n => n.type === 'relay' && !Campaign.isVisited(n.id));
    if (!hasRelay || (Onboarding.seen && Onboarding.seen('relay'))) {
      scheduleJamGateIfNeeded();
      return;
    }
    // Small beat after map tip so camera/layout settle
    scheduleMapCoach(() => {
      if (el().classList.contains('hidden')) return;
      if (Onboarding.seen && Onboarding.seen('relay')) {
        scheduleJamGateIfNeeded();
        return;
      }
      coachTipOnNode('relay', 'relay', 'tip.relay', {
        icon: Icons.svg('relay', 18), ms: 6500, place: 'below',
        onDone: () => scheduleJamGateIfNeeded(),
      });
    }, 420);
  }

  function scheduleJamGateIfNeeded() {
    if (typeof Onboarding === 'undefined') return;
    if (el().classList.contains('hidden')) return;
    const after = () => scheduleResearchCoach();
    if (Onboarding.seen && Onboarding.seen('jamGate')) { after(); return; }
    const m = Campaign.map();
    if (!m) { after(); return; }
    const boss = m.nodes.find(n => n.warlord || n.type === 'boss');
    if (!boss || Campaign.isVisited(boss.id)) { after(); return; }
    if (typeof Campaign.isRevealed === 'function' && !Campaign.isRevealed(m, boss.id)) { after(); return; }
    const cur = Campaign.currentId();
    if (findPath(m, cur, boss.id)) { after(); return; }
    const hasJam = m.nodes.some(n => n.type === 'relay' && !Campaign.isVisited(n.id));
    if (!hasJam) { after(); return; }
    scheduleMapCoach(() => {
      if (el().classList.contains('hidden')) return;
      if (Onboarding.seen && Onboarding.seen('jamGate')) { after(); return; }
      coachTipOnNode('boss', 'jamGate', 'tip.jamGate', {
        icon: Icons.svg('relay', 18), ms: 5600, place: 'below',
        onDone: after,
      });
    }, 380);
  }

  function scheduleResearchCoach() {
    if (typeof Onboarding === 'undefined') return;
    if (el().classList.contains('hidden')) return;
    if (Onboarding.seen && Onboarding.seen('research')) return;
    const m = Campaign.map();
    if (!m || !m.nodes) return;
    const lab = resolveCoachNode('research');
    if (!lab) return;
    scheduleMapCoach(() => {
      if (el().classList.contains('hidden')) return;
      if (Onboarding.seen && Onboarding.seen('research')) return;
      coachTipOnNode('research', 'research', 'tip.research', {
        icon: Icons.svg('research', 18), ms: 6000, place: 'below',
      });
    }, 380);
  }
  // Smoothly pan the viewport to the player's current node.
  function recenter(smooth) {
    const m = Campaign.map(), vp = el().querySelector('#ftl-vp'), cur = m.byId[Campaign.currentId()];
    if (!vp || !cur) return;
    const z = zoomScale();
    const left = (cur.x + PADX) * z - vp.clientWidth / 2;
    const top = (cur.y + PADY) * z - vp.clientHeight / 2;
    vp.scrollTo({ left, top, behavior: smooth ? 'smooth' : 'auto' });
  }

  /** Change zoom level (0 close … 2 far). Keeps the viewport center stable in map space. */
  function setMapZoom(lv) {
    const next = Math.max(0, Math.min(MAP_ZOOM.length - 1, lv | 0));
    if (next === mapZoom) return;
    const vp = el().querySelector('#ftl-vp');
    const oldZ = zoomScale();
    if (vp) {
      pendingZoomCenter = {
        x: (vp.scrollLeft + vp.clientWidth / 2) / oldZ,
        y: (vp.scrollTop + vp.clientHeight / 2) / oldZ,
      };
    }
    const goingOut = next > mapZoom;
    mapZoom = next;
    try {
      if (Engine.audio.tick) Engine.audio.tick();
      else Engine.audio.blip(goingOut ? 400 : 580, 0.04, 'sine', 0.06);
    } catch (e) {}
    render();
  }

  /**
   * Pick a map node for a coach tip.
   * kind: 'jump' | 'current' | 'relay' | 'boss' | 'base' | nodeId
   * 'jump' = reachable unvisited node (fuel/travel tip subject), else current ship.
   */
  function resolveCoachNode(kind) {
    const m = Campaign.map();
    if (!m || !m.byId) return null;
    if (typeof kind === 'number') return m.byId[kind] || null;
    const curId = Campaign.currentId();
    if (kind === 'jump') {
      // Any open destination — preferably a frontier combat node
      const reachable = m.nodes.filter(n =>
        n.id !== curId && !Campaign.isVisited(n.id) && findPath(m, curId, n.id));
      const prefer = reachable.find(n => n.type === 'combat' || n.type === 'elite')
        || reachable.find(n => n.type === 'base')
        || reachable[0];
      return prefer || m.byId[curId] || null;
    }
    if (kind === 'current') return m.byId[curId] || null;
    if (kind === 'relay') {
      return m.nodes.find(n => n.type === 'relay' && !Campaign.isVisited(n.id))
        || m.nodes.find(n => n.type === 'relay') || null;
    }
    if (kind === 'boss') {
      return m.nodes.find(n => n.warlord || n.type === 'boss') || null;
    }
    if (kind === 'base') {
      return (traderOpenId != null && m.byId[traderOpenId])
        || m.nodes.find(n => n.type === 'base' && Campaign.isVisited(n.id))
        || m.nodes.find(n => n.type === 'base') || null;
    }
    if (kind === 'research') {
      const vis = n => n.type === 'research' && (
        Campaign.isVisited(n.id)
        || (Campaign.isRevealed && Campaign.isRevealed(m, n.id))
        || (Campaign.isFrontier && Campaign.isFrontier(m, n.id))
        || (Campaign.isResearchIntel && Campaign.isResearchIntel(n.id))
      );
      return m.nodes.find(n => vis(n) && !Campaign.isVisited(n.id))
        || m.nodes.find(vis)
        || null;
    }
    return null;
  }

  /** Clear previous map coach highlight rings. */
  function clearCoachNodeFocus() {
    el().querySelectorAll('.ftl-node.coach-map-focus').forEach(n => {
      n.classList.remove('coach-map-focus');
    });
  }

  /**
   * Pan camera to the subject node, mark it with coach-map-focus, return CSS selector.
   * Returns Promise<selector|null>
   */
  function focusNodeForCoach(kind) {
    const node = resolveCoachNode(kind);
    if (!node) return Promise.resolve(null);
    const cx = node.x + PADX, cy = node.y + PADY;
    const vp = el().querySelector('#ftl-vp');
    const z = zoomScale();
    if (vp) keepScroll = { l: cx * z - vp.clientWidth / 2, t: cy * z - vp.clientHeight / 2 };
    return panCameraTo(cx, cy, 560).then(() => {
      if (vp) keepScroll = { l: vp.scrollLeft, t: vp.scrollTop };
      clearCoachNodeFocus();
      // Prefer data-node (always present now); fall back to current class
      let nodeEl = el().querySelector(`.ftl-node[data-node="${node.id}"]`);
      if (!nodeEl && node.id === Campaign.currentId()) {
        nodeEl = el().querySelector('.ftl-node.current');
      }
      if (nodeEl) {
        nodeEl.classList.add('coach-map-focus');
        // Pulse the visible ring (dot) too
        const dot = nodeEl.querySelector('.ftl-dot');
        if (dot) dot.classList.add('coach-map-focus-dot');
      }
      return nodeEl ? `.ftl-node[data-node="${node.id}"]` : null;
    });
  }

  /**
   * Dismiss previous tip → pan → highlight node → show NEW tip.
   * Camera move and tip text always stay in sync (no stale tip during pan).
   */
  function coachTipOnNode(kind, tipId, textKey, tipOpts) {
    if (typeof Onboarding === 'undefined') return;
    if (Onboarding.seen && Onboarding.seen(tipId)) {
      // Still honor onDone when tip already seen (arriveAtBase → open shop)
      if (tipOpts && typeof tipOpts.onDone === 'function') {
        try { tipOpts.onDone(); } catch (e) {}
      }
      return;
    }
    tipOpts = tipOpts || {};
    // Drop whatever tip is on screen before we start moving (map → relay etc.)
    try {
      if (Onboarding.hide) Onboarding.hide({ drain: false, pruneQueue: true });
    } catch (e) {}
    clearCoachNodeFocus();
    focusNodeForCoach(kind).then(sel => {
      if (el().classList.contains('hidden')) {
        if (typeof tipOpts.onDone === 'function') try { tipOpts.onDone(); } catch (e) {}
        return;
      }
      // Tip only after pan finished + layout settled
      requestAnimationFrame(() => {
        // Coach tips are queued behind a pan + a frame, so clearing them when the
        // stranded modal opens is not enough — they land on top afterwards. Any
        // open map modal wins outright.
        const modalUp = !!el().querySelector('.ftl-modal');
        if (el().classList.contains('hidden') || modalUp) {
          if (typeof tipOpts.onDone === 'function') try { tipOpts.onDone(); } catch (e) {}
          return;
        }
        const opts = Object.assign({
          scope: 'map',
          place: 'below',
          ms: 6500,
          noScrollIntoView: true, // we already panned the map camera
        }, tipOpts);
        if (sel) opts.anchor = sel;
        const ok = Onboarding.tip(tipId, textKey, opts);
        // If tip failed to show, still run onDone so warehouse isn't blocked
        if (!ok && typeof tipOpts.onDone === 'function') {
          try { tipOpts.onDone(); } catch (e) {}
        }
      });
    });
  }
  function close() {
    stopMapAnim();
    stopTraderNoise();
    clearMapCoachTimers();
    clearCoachNodeFocus();
    try {
      if (typeof Onboarding !== 'undefined' && Onboarding.hide) {
        Onboarding.hide({ drain: false, pruneQueue: true });
      }
    } catch (e) {}
    const vp = el().querySelector('#ftl-vp');
    if (vp && vp._panAbort) { try { vp._panAbort.abort(); } catch (e) {} }
    el().classList.add('hidden');
    if (onClose) { const c = onClose; onClose = null; c(); }
  }

  function stars(n) { return '★'.repeat(n) + '☆'.repeat(Math.max(0, 5 - n)); }
  function diffPips(n) { return Array.from({ length: 5 }, (_, i) => `<i class="pip ${i < n ? 'on' : ''}"></i>`).join(''); }
  function hazardTags(node) {
    const h = node.hazards || {}, t = [];
    if (h.asteroids) t.push(`<span class="hz hz-ast">${Icons.svg('rock', 13)} ${T('haz.asteroids')}</span>`);
    if (h.radiation) t.push(`<span class="hz hz-rad">${Icons.svg('radiation', 13)} ${T('haz.radiation')}</span>`);
    if (h.magma) t.push(`<span class="hz hz-mag">${Icons.svg('magma', 13)} ${T('haz.magma')}</span>`);
    if (h.rocks) t.push(`<span class="hz hz-rok">${Icons.svg('meteor', 13)} ${T('haz.rocks')}</span>`);
    if (h.homing) t.push(`<span class="hz hz-hom">${Icons.svg('missile', 13)} ${T('haz.homing')}</span>`);
    if (h.wind) t.push(`<span class="hz hz-wnd">${Icons.svg('wind', 13)} ${T('haz.wind')}</span>`);
    if (h.bubbles) t.push(`<span class="hz hz-bub">${Icons.svg('bubble', 13)} ${T('haz.bubbles')}</span>`);
    return t.join('');
  }

  /**
   * "Not surveyed" marker — a node you have never flown AND never probed.
   * Sits at the end of the hazard row so it lines up with the other node facts.
   * Without it there is no way to tell a probed dead end from an unprobed one,
   * and players re-probe nodes they already cleared just to re-check the exits.
   */
  function surveyTag(node) {
    if (!node) return '';
    const id = node.id;
    try {
      if (Campaign.isVisited(id)) return '';
      if (Campaign.isScouted && Campaign.isScouted(id)) return '';
    } catch (e) { return ''; }
    return `<span class="hz hz-unsurveyed" title="${T('map.unsurveyed')}">${Icons.svg('eye', 13)} ${T('map.unsurveyed')}</span>`;
  }
  /** Hazard row + survey state, in the order the player reads them. */
  function nodeTags(node) { return hazardTags(node) + surveyTag(node); }

  // Fog of war on a CANVAS: fill dark, then punch soft holes with
  // destination-out. Overlapping reveals UNION cleanly (no double-shading
  // seam the old per-hole SVG gradient produced when two holes met).
  function paintFog(m, W, H, X, Y) {
    const fog = el().querySelector('canvas.ftl-fog');
    if (!fog) return;
    const fx = fog.getContext('2d');
    fx.clearRect(0, 0, W, H);
    fx.fillStyle = 'rgba(3,4,12,0.92)'; fx.fillRect(0, 0, W, H);
    fx.globalCompositeOperation = 'destination-out';
    const punch = (cx, cy, r) => {
      const g = fx.createRadialGradient(cx, cy, r * 0.42, cx, cy, r);
      g.addColorStop(0, 'rgba(0,0,0,1)'); g.addColorStop(1, 'rgba(0,0,0,0)');
      fx.fillStyle = g; fx.beginPath(); fx.arc(cx, cy, r, 0, Math.PI * 2); fx.fill();
    };
    m.nodes.forEach(n => {
      if (Campaign.isVisited(n.id)) punch(X(n.x), Y(n.y), 185);
      else if (Campaign.isScouted(n.id)) punch(X(n.x), Y(n.y), 130);
    });
    fx.globalCompositeOperation = 'source-over';
  }

  // Ambient background motion: occasional shooting stars, painted above the fog
  // so space still feels alive across the whole map.
  //
  // A drifting voxel asteroid field used to live here too. It was by far the
  // heaviest thing the game drew — 16 rocks x ~325 voxels x 20 ticks/s into
  // 10-25px sprites, about three voxels per screen pixel, seven times the cost
  // of a combat scene — and it froze real phones. It was decoration only, so it
  // is gone rather than degraded.
  let animTimer = null, shooters = [], animLast = 0;
  function startMapAnim(W, H) {
    stopMapAnim();
    const cv = el().querySelector('canvas.ftl-anim');
    if (!cv) return;
    const ctx = cv.getContext('2d');
    shooters = [];
    let painted = false;                              // is anything left on the canvas?
    animLast = performance.now();
    animTimer = setInterval(() => {
      if (!cv.isConnected) return stopMapAnim();
      const now = performance.now(), dt = Math.min(0.1, (now - animLast) / 1000); animLast = now;
      const spawn = Math.random() < 0.04 && shooters.length < ((typeof Quality !== 'undefined' && Quality.v('mapShooters')) || 3);
      // Idle sky: no star in flight and none starting. One last clear wipes the
      // trail of the star that just died, then the tick costs nothing at all.
      if (!shooters.length && !spawn) {
        if (painted) { ctx.clearRect(0, 0, W, H); painted = false; }
        return;
      }
      ctx.clearRect(0, 0, W, H); painted = true;
      if (spawn) {
        const ang = Math.PI * 0.2 + Math.random() * 0.6;
        shooters.push({ x: Math.random() * W, y: Math.random() * H * 0.7, vx: Math.cos(ang) * 950, vy: Math.sin(ang) * 950, life: 0, max: 0.5 + Math.random() * 0.5 });
      }
      for (let i = shooters.length - 1; i >= 0; i--) {
        const s = shooters[i]; s.life += dt; const inv = Math.max(0, 1 - s.life / s.max);
        const px = s.x, py = s.y; s.x += s.vx * dt; s.y += s.vy * dt;
        ctx.save(); ctx.globalCompositeOperation = 'lighter'; ctx.globalAlpha = inv;
        ctx.strokeStyle = '#cfe4ff'; ctx.lineWidth = 2; ctx.lineCap = 'round';
        ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(s.x, s.y); ctx.stroke();
        ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(s.x, s.y, 2.4, 0, Math.PI * 2); ctx.fill();
        ctx.restore();
        if (s.life >= s.max) shooters.splice(i, 1);
      }
    }, 50);
  }
  function stopMapAnim() { if (animTimer) { clearInterval(animTimer); animTimer = null; } }

  function render() {
    if (selected >= 0) return renderDetail(selected);
    // preserve current pan so a re-render (e.g. after a jump) never snaps the camera
    const prevVp = el().querySelector('#ftl-vp');
    if (prevVp && !pendingCenter) keepScroll = { l: prevVp.scrollLeft, t: prevVp.scrollTop };
    const m = Campaign.map();
    const p = Campaign.part();
    const chap = Worlds.CHAPTERS[p - 1];
    const curId = Campaign.currentId();
    const W = totW(), H = totH();
    const X = v => v + PADX, Y = v => v + PADY;   // node-space → padded canvas-space

    const lines = [];
    m.nodes.forEach(n => n.edges.forEach(eid => {
      if (eid < n.id) return;
      const o = m.byId[eid];
      const known = Campaign.isVisited(n.id) || Campaign.isVisited(eid);
      const scouted = Campaign.isScouted(n.id) || Campaign.isScouted(eid);
      if (!known && !scouted) return;
      const live = (n.id === curId || eid === curId);
      const seg = edgeSegment(X(n.x), Y(n.y), X(o.x), Y(o.y), NODE_R);
      if (!seg) return;
      const jammed = !Campaign.edgeOpen(m, n.id, eid);
      lines.push(`<line x1="${seg.x1}" y1="${seg.y1}" x2="${seg.x2}" y2="${seg.y2}" class="ftl-edge ${live ? 'live' : ''} ${!known ? 'scout' : ''} ${jammed ? 'jammed' : ''}"/>`);
      // fuel cost on edges out of the current node
      if (live && !jammed) {
        const cost = travelEdgeCost(m, n.id, eid);
        const mx = (seg.x1 + seg.x2) / 2, my = (seg.y1 + seg.y2) / 2;
        // Same vector fuel icon the HUD, depot and travel popovers use. This was
        // the ⛽ emoji, so the one place the player reads fuel most often was the
        // one place it looked different (and font-dependent across platforms).
        // Nested <svg> positions via a <g> translate — no string surgery on Icons.
        const iw = 13;
        lines.push(
          `<g transform="translate(${(mx - iw - 5).toFixed(1)} ${(my - 15).toFixed(1)})">${Icons.svg('fuel', iw)}</g>` +
          `<text x="${mx + 5}" y="${my - 5}" class="ftl-cost ftl-cost-n">${cost}</text>`);
      } else if (live && jammed) {
        const mx = (seg.x1 + seg.x2) / 2, my = (seg.y1 + seg.y2) / 2;
        lines.push(`<g transform="translate(${(mx - 7).toFixed(1)} ${(my - 17).toFixed(1)})">${Icons.svg('relay', 14)}</g>`);
      }
    }));

    const nodes = m.nodes.map(n => {
      if (!Campaign.isRevealed(m, n.id)) return '';
      const visited = Campaign.isVisited(n.id);
      const current = n.id === curId;
      // Frontier for UX: only open (non-jammed) edges so jammed warlord isn't a fake "engage"
      const frontier = isOpenFrontier(m, n.id);
      const adjacent = Campaign.isAdjacent(m, n.id) && Campaign.edgeOpen(m, curId, n.id);
      const pathOk = !current && !!findPath(m, curId, n.id);
      const cls = [
        current ? 'current' : '',
        visited ? 'visited' : '',
        !visited && frontier ? 'frontier' : '',
        !visited && !frontier && !current ? 'seen' : '',
      ].filter(Boolean).join(' ') || 'seen';
      // Icons:
      //  · current → player ship; bases ALWAYS keep pin (+ depot chip when parked)
      //  · base / research ALWAYS keep model/glyph in-dot + type pin
      //  · other cleared → empty green ring
      //  · uncleared → type thumb
      const isBase = n.type === 'base';
      const isResearch = n.type === 'research';
      const isRelay = n.type === 'relay';
      const isWarlord = !!(n.warlord || n.type === 'boss');
      let icon = '';
      if (current) {
        icon = `<canvas class="ftl-voxship" data-voxship="${Profile.get().ship}" width="44" height="44"></canvas>`;
      } else if (isBase) {
        icon = nodeThumb('base');
      } else if (isResearch) {
        icon = nodeThumb('research');
      } else if (isRelay) {
        icon = nodeThumb('relay');
      } else if (isWarlord) {
        icon = nodeThumb('boss');
      } else if (!visited) {
        icon = nodeThumb(n.type);
      } else if (visited && !isBase) {
        // Cleared combat/elite/etc: subtle check so “done” is readable at a glance
        icon = `<span class="ftl-cleared-mark" aria-hidden="true">✓</span>`;
      }
      const h = n.hazards || {};
      const partHere = n.part && !(Profile.get().shipParts || []).includes(n.part);
      // Hazards in a FIXED reading order — the same danger always lands on the
      // same slot of the arc, so the position itself becomes recognisable.
      const hazards = [
        h.radiation && ['radiation', 'rad'],
        h.asteroids && ['rock', 'ast'],
        h.magma && ['magma', 'mag'],
        h.rocks && ['meteor', 'rok'],
        h.homing && ['missile', 'hom'],
        h.wind && ['wind', 'wnd'],
      ].filter(Boolean);
      // "What do I know / what do I get here", read before "what will hurt me".
      const state = [];
      if (!visited && !(Campaign.isScouted && Campaign.isScouted(n.id))) state.push(['eye', 'eye']);
      if (partHere) state.push(['wrench', 'part']);

      const scoutable = scoutMode && !visited && !current && !Campaign.isScouted(n.id);
      const clickable = scoutable || pathOk || current; // current always addressable (coach anchors)
      // One badge only: the node's identity, and it owns the top of the ring.
      const typeBadge = isBase ? ['shop', 'type-base']
        : isResearch ? ['research', 'type-research']
          : isRelay ? ['relay', 'type-relay']
            : isWarlord ? ['crown', 'type-boss'] : null;
      const pin = ringHtml(typeBadge, state, visited ? [] : hazards);
      const preview = !visited ? `<div class="ftl-pips">${diffPips(n.diff || 1)}</div>` : '';
      // Depot only while parked here — also mirrored in the dock bar below
      const depotBtn = (current && isBase) ? depotBtnHtml(n.id) : '';
      // data-node always set on revealed nodes so coach tips can highlight them
      return `<div class="ftl-node ${cls} t-${n.type} ${isWarlord ? 't-warlord' : ''} ${current && isBase ? 'at-base' : ''} ${adjacent && !current ? 'adj' : ''} ${scoutable ? 'scoutable' : ''} ${Campaign.isScouted(n.id) ? 'scouted' : ''} ${pathOk ? 'reach' : ''}"
                data-node="${n.id}" ${!clickable ? 'data-inert="1"' : ''} ${current && isBase ? `data-depot-node="${n.id}"` : ''} ${scoutable ? 'data-scout="1"' : ''}
                style="left:${X(n.x)}px; top:${Y(n.y)}px;">
                <div class="ftl-dot">${icon}</div>${pin}${preview}${depotBtn}
              </div>`;
    }).join('');

    const sats = Campaign.satellites();
    const curNode = m.byId[curId];
    // Auto-open depot when parked on a base with 0 fuel (stranded is a different path).
    const parkedOnBase = !!(curNode && curNode.type === 'base');
    const hangarDot = (typeof Hangar !== 'undefined' && Hangar.hasAffordableUpgrade && Hangar.hasAffordableUpgrade())
      ? '<span class="badge"></span>' : '';
    const rewardsDot = (typeof Missions !== 'undefined' && Missions.hasClaimable && Missions.hasClaimable())
      ? '<span class="badge"></span>' : '';
    const passDot = (typeof BattlePass !== 'undefined' && BattlePass.hasClaimable && BattlePass.hasClaimable())
      ? '<span class="badge"></span>' : '';

    el().innerHTML = `
      <div class="ftl-full">
        <div class="scr-head ftl-scr-head">
          <button type="button" class="hub-icon-btn scr-back" id="map-hub" aria-label="${T('btn.toHub')}" title="${T('btn.toHub')}">${Icons.svg('chevron', 18)}</button>
          <div class="scr-title title-grad ftl-scr-title">${T('map.title')}<span class="ftl-scr-sub">${Tf('map.chapter', p, chap ? T('chapter.' + p, chap.name) : '')}</span></div>
          <div class="ftl-bar-actions">
            <button id="map-pass" class="hub-icon-btn" aria-label="${T('bp.title')}" title="${T('bp.title')}">${Icons.svg('pass', 18)}${passDot}</button>
            <button id="map-rewards" class="hub-icon-btn" aria-label="${T('mis.title', 'Rewards')}" title="${T('mis.title', 'Rewards')}">${Icons.svg('gift', 18)}${rewardsDot}</button>
            <button id="map-hangar" class="hub-icon-btn" aria-label="${T('hub.title')}" title="${T('hub.title')}">${Icons.svg('statUpg', 18)}${hangarDot}</button>
            <button id="map-shop" class="hub-icon-btn" aria-label="${T('hub.shop')}" title="${T('hub.shop')}">${Icons.svg('shop', 18)}</button>
            <button id="map-settings" class="hub-icon-btn" aria-label="${T('set.title')}" title="${T('set.title')}">${Icons.svg('gear', 18)}</button>
          </div>
        </div>
        <div class="ftl-viewport" id="ftl-vp">
          <div class="ftl-zoom-slot" style="width:${Math.round(W * zoomScale())}px; height:${Math.round(H * zoomScale())}px;">
            <div class="ftl-canvas" style="width:${W}px; height:${H}px; transform:scale(${zoomScale()}); transform-origin:0 0;">
              <canvas class="ftl-scene" width="${W}" height="${H}"></canvas>
              <svg class="ftl-svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">${lines.join('')}</svg>
              <canvas class="ftl-fog" width="${W}" height="${H}"></canvas>
              <canvas class="ftl-anim" width="${W}" height="${H}"></canvas>
              ${nodes}
            </div>
          </div>
        </div>
        <div class="ftl-dock">
          <div class="ftl-fuel ${Campaign.fuel() <= 2 ? 'low' : ''}">${Icons.svg('fuel')} <b>${Campaign.fuel()}</b> <span>${T('map.fuel')}</span></div>
          <div class="ftl-zoom-btns" role="group" aria-label="${T('map.zoom')}">
            <button type="button" id="map-zoom-out" class="ftl-zoom-btn" aria-label="${T('map.zoomOut')}" title="${T('map.zoomOut')}" ${mapZoom >= MAP_ZOOM.length - 1 ? 'disabled' : ''}>−</button>
            <button type="button" id="map-zoom-in" class="ftl-zoom-btn" aria-label="${T('map.zoomIn')}" title="${T('map.zoomIn')}" ${mapZoom <= 0 ? 'disabled' : ''}>+</button>
          </div>
          <button id="map-center" class="ftl-center" aria-label="${T('map.recenter')}" title="${T('map.recenter')}">${Icons.svg('target', 16)}</button>
          <button id="map-sat" class="ftl-sat2 ${scoutMode ? 'on' : ''} ${sats > 0 ? 'has' : ''}" ${sats <= 0 && !scoutMode ? 'disabled' : ''}>
            ${Icons.svg('sat')} <b>×${sats}</b> <span>${T('map.scout')}</span></button>
        </div>
      </div>`;

    // pixel nebula backdrop + live voxel ship on the current node
    const sc = el().querySelector('.ftl-scene');
    if (sc) VoxUI.mapScene(sc.getContext('2d'), W, H);
    const curShip = el().querySelector('.ftl-node.current .ftl-voxship');
    if (curShip) VoxUI.animShip(curShip, curShip.dataset.voxship, { speed: 0.5 });
    paintFog(m, W, H, X, Y);          // fog of war — reveals UNION with no seams
    startMapAnim(W, H);               // shooting stars

    wirePan();
    // Zoom controls
    const zOut = el().querySelector('#map-zoom-out');
    const zIn = el().querySelector('#map-zoom-in');
    if (zOut) zOut.onclick = () => setMapZoom(mapZoom + 1);
    if (zIn) zIn.onclick = () => setMapZoom(mapZoom - 1);

    requestAnimationFrame(() => {
      const vp = el().querySelector('#ftl-vp'), cur = m.byId[curId];
      if (!vp) return;
      const z = zoomScale();
      if (pendingZoomCenter) {
        vp.scrollLeft = pendingZoomCenter.x * z - vp.clientWidth / 2;
        vp.scrollTop = pendingZoomCenter.y * z - vp.clientHeight / 2;
        pendingZoomCenter = null;
        pendingCenter = false;
        keepScroll = { l: vp.scrollLeft, t: vp.scrollTop };
      } else if (pendingCenter && cur) {           // open / recenter → center on the ship
        vp.scrollLeft = X(cur.x) * z - vp.clientWidth / 2;
        vp.scrollTop = Y(cur.y) * z - vp.clientHeight / 2;
        pendingCenter = false;
      } else if (keepScroll) {                     // otherwise hold the camera exactly where it was
        vp.scrollLeft = keepScroll.l; vp.scrollTop = keepScroll.t;
      }
      updateRelayEdgeArrow(m, X, Y);
    });
    // Relay / jam tips are scheduled once from open() — never per-render (avoids
    // stacked pans + duplicate coach toasts when the map re-renders).

    el().querySelectorAll('[data-node]').forEach(nd => nd.onclick = () => {
      if (flying || Date.now() < suppressClickUntil) return;
      const id = +nd.dataset.node, mm = Campaign.map();
      if (scoutMode && nd.dataset.scout) {
        if (Campaign.useSatellite(id)) { scoutMode = false; Engine.audio.sweep(700, 1400, 0.3, 'sine', 0.1); render(); }
        return;
      }
      const path = findPath(mm, Campaign.currentId(), id);
      if (!path || path.length < 2) {
        const n = mm.byId[id];
        // Relay jam only blocks warlord (and jam edges) — not every scouted node.
        // Detect real jam: a path would exist if edges ignored jam flags.
        const jamBlocks = n && (n.warlord || n.type === 'boss') && findPathIgnoreJam
          ? !!findPathIgnoreJam(mm, Campaign.currentId(), id)
          : false;
        if (jamBlocks) {
          flash(T('map.noPath'));
          try { Engine.audio.deny ? Engine.audio.deny() : Engine.audio.blip(180, 0.06, 'square', 0.07); } catch (e) {}
          if (typeof Onboarding !== 'undefined'
            && Onboarding.seen && !Onboarding.seen('jamGate')) {
            const kind = n.type === 'relay' ? 'relay' : (n.warlord || n.type === 'boss' ? id : 'boss');
            coachTipOnNode(kind, 'jamGate', 'tip.jamGate', {
              icon: Icons.svg('relay', 18), ms: 5600, place: 'below',
            });
          }
        } else {
          // Scouted / visible but not walkable yet — soft feedback, no jam lie
          flash(T('map.pathClosed'));
          try { Engine.audio.deny ? Engine.audio.deny() : Engine.audio.blip(160, 0.05, 'square', 0.06); } catch (e) {}
        }
        return;
      }
      if (Campaign.isVisited(id)) {
        requestTravel(path);
      } else {
        // Uncleared: same popover style (not full-screen detail)
        Engine.audio.blip(660, 0.05, 'sine', 0.1);
        requestEngage(path, id);
      }
    });
    const satBtn = el().querySelector('#map-sat');
    if (satBtn) satBtn.onclick = () => {
      if (scoutMode) { scoutMode = false; render(); return; }
      if (Campaign.satellites() <= 0) { flash(T('map.noSats')); return; }
      scoutMode = true; Engine.audio.blip(880, 0.06, 'sine', 0.1); render();
    };
    el().querySelector('#map-center').onclick = () => { Engine.audio.blip(620, 0.05, 'sine', 0.1); pendingCenter = true; recenter(true); };
    if (scoutMode) flash(T('map.scoutHint'));
    const leaveToHub = () => {
      scoutMode = false;
      clearMapCoachTimers();
      if (typeof Onboarding !== 'undefined' && Onboarding.enter) Onboarding.enter('hub');
      if (typeof FXTrans !== 'undefined') FXTrans.go({ style: 'cube', run: close });
      else close();
    };
    el().querySelector('#map-hub').onclick = leaveToHub;
    // Nested screens: hangar / shop / settings — drop map coach before cube transition
    const leaveMapTo = (scope, openFn) => {
      clearMapCoachTimers();
      if (typeof Onboarding !== 'undefined' && Onboarding.enter) Onboarding.enter(scope);
      FXTrans.go({ style: 'cube', run: () => {
        el().classList.add('hidden');
        openFn(() => {
          el().classList.remove('hidden');
          if (typeof Onboarding !== 'undefined' && Onboarding.enter) Onboarding.enter('map');
          pendingCenter = false;
          render();
        });
      } });
    };
    el().querySelector('#map-hangar').onclick = () => {
      leaveMapTo('hangar', (cb) => Hangar.open(cb));
    };
    const mapPass = el().querySelector('#map-pass');
    if (mapPass) mapPass.onclick = () => {
      leaveMapTo('season', (cb) => BattlePass.open(cb));
    };
    const mapRw = el().querySelector('#map-rewards');
    if (mapRw) mapRw.onclick = () => {
      leaveMapTo('rewards', (cb) => Missions.openPanel(cb));
    };
    el().querySelector('#map-shop').onclick = () => {
      leaveMapTo('shop', (cb) => Shop.open(cb));
    };
    el().querySelector('#map-settings').onclick = () => {
      leaveMapTo('settings', (cb) => Settings.open(cb));
    };
    // Depot: cinematic chip on the map node only (no dock-bar twin)
    const openDepot = (id) => {
      if (Date.now() < suppressClickUntil) return;
      Engine.audio.blip(700, 0.05, 'sine', 0.1);
      openBase(id != null ? +id : curId);
    };
    el().querySelectorAll('[data-depot]').forEach(btn => {
      btn.onclick = (e) => { e.stopPropagation(); openDepot(btn.dataset.depot); };
    });
    // Tap the parked-base node itself (ship ring) → open warehouse
    el().querySelectorAll('[data-depot-node]').forEach(nd => {
      nd.addEventListener('click', (e) => {
        if (e.target.closest && e.target.closest('[data-depot]')) return;
        e.stopPropagation();
        openDepot(nd.dataset.depotNode);
      });
    });

    if (Campaign.stranded()) {
      // A dead-end modal must not share the screen with a coach tip explaining
      // how travel works — the player is past that, and the tip lands on top.
      try { if (typeof Onboarding !== 'undefined' && Onboarding.clearAll) Onboarding.clearAll(); } catch (e) {}
      showStranded();
    } else if (parkedOnBase && Campaign.cheapestExit() != null
      && Campaign.fuel() < Campaign.cheapestExit()) {
      // Parked on a working base and unable to leave → the depot IS the answer,
      // so open it rather than doing nothing. Was gated on fuel <= 0, which left
      // "1 fuel, cheapest jump 2" silently stuck on the map.
      openBase(curId);
    }
  }

  function destLabel(dest) {
    if (!dest) return '—';
    if (dest.type === 'base') return T('node.base.name');
    if (dest.type === 'relay') return T('node.relay.name');
    if (dest.type === 'research') return T('node.research.name');
    if (dest.type === 'boss') return T('boss.' + dest.boss + '.name', dest.boss);
    return T('world.' + dest.palette + '.name', dest.palette);
  }

  /** Free travel → compact popover at destination + route preview. */
  function requestTravel(path) {
    const m = Campaign.map();
    const cost = pathFuel(m, path);
    const hops = path.length - 1;
    const destId = path[path.length - 1];
    const dest = m.byId[destId];
    showRoutePreview(path);
    showNodePopup(destId, {
      title: T('map.travelTitle'),
      lines: [
        destLabel(dest),
        Tf('map.travelReserve', Campaign.fuel()),
      ],
      meta: {
        chips: [
          Icons.svg('fuel', 12) + ` ${cost}`,
          hops > 1 ? Tf('map.hops', hops) : T('map.jumpCost') + ' ' + cost,
        ],
      },
      ok: T('map.travelGo'),
      danger: false,
      onOk: () => {
        clearRoutePreview();
        // Cannot pay for this route -> offer fuel rather than a toast that
        // leaves the player one failed tap closer to a dead campaign.
        if (!Campaign.spendFuel(cost)) { showNeedFuel(cost); return; }
        flyPath(path, { commit: true });
      },
      onCancel: () => clearRoutePreview(),
    });
  }

  /** Uncleared target → popover with intel + engage (multi-hop fuel) + route. */
  function requestEngage(path, id) {
    const m = Campaign.map();
    const n = m.byId[id];
    if (!n) return;
    const cost = pathFuel(m, path);
    const hops = path.length - 1;
    const isBase = n.type === 'base', isBoss = n.type === 'boss';
    const isRelay = n.type === 'relay', isResearch = n.type === 'research';
    const lines = [destLabel(n)];
    const fuel = Campaign.fuel();
    const short = cost > fuel;
    // jamGate is shown when path is blocked (node click / after relay tip), not
    // on a successful engage of a reachable boss/relay (that text would lie).
    const engageTitle = isBase ? T('node.dock')
      : isRelay ? T('node.relay.engage')
      : isResearch ? T('node.research.engage')
      : T('node.engage');
    showRoutePreview(path);
    showNodePopup(id, {
      title: engageTitle,
      lines,
      meta: {
        chips: [
          { html: diffPips(n.diff || 1), title: T('map.diff', 'Difficulty') },
          // Cost AND what is in the tank, together: "3 / 12" answers "can I
          // afford this" without a second glance at the HUD, and turns red
          // when the answer is no.
          { html: Icons.svg('fuel', 12) + ` ${cost} / ${fuel}`, warn: short,
            title: T('map.jumpCost') },
          n.waves ? { html: Icons.svg('boss', 12) + ` ${Tf('map.waves', n.waves)}` } : null,
          hops > 1 ? { html: Tf('map.hops', hops) } : null,
        ],
        tags: nodeTags(n),
      },
      ok: short ? T('map.needFuel', 'Need fuel') : engageTitle,
      danger: isBoss || isRelay || isResearch,
      onOk: () => {
        clearRoutePreview();
        if (Campaign.fuel() < cost) { showNeedFuel(cost); return; }
        if (!Campaign.spendFuel(cost)) { showNeedFuel(cost); return; }
        // Park at last visited hop so a wipe returns there (not the multi-hop start)
        const launchPad = path.length >= 2 ? path[path.length - 2] : path[0];
        flyPath(path, {
          commit: false,
          parkAt: launchPad, // death returns here; win onCleared moves to target
          onDone: () => {
            prepWarpClean();
            const launch = () => {
              onClose = null;
              el().classList.add('hidden');
              stopMapAnim(); stopTraderNoise();
              Engine.audio.power();
              Game.engageStage(n);
            };
            if (typeof FXTrans !== 'undefined') FXTrans.go({ style: 'warp', run: launch });
            else launch();
          },
        });
      },
      onCancel: () => clearRoutePreview(),
    });
  }

  /** Draw the planned multi-hop route on the map SVG (while popover is open). */
  function clearRoutePreview() {
    const svg = el().querySelector('.ftl-svg');
    if (svg) svg.querySelectorAll('.ftl-route-preview').forEach(g => g.remove());
    el().querySelectorAll('.ftl-node.ftl-route-node').forEach(n => n.classList.remove('ftl-route-node', 'ftl-route-dest'));
  }
  function showRoutePreview(path) {
    clearRoutePreview();
    if (!path || path.length < 2) return;
    const svg = el().querySelector('.ftl-svg');
    const m = Campaign.map();
    if (!svg || !m) return;
    const X = v => v + PADX, Y = v => v + PADY;
    const NS = 'http://www.w3.org/2000/svg';
    const g = document.createElementNS(NS, 'g');
    g.setAttribute('class', 'ftl-route-preview');
    g.setAttribute('pointer-events', 'none');

    // Soft glow polyline under dashed route
    const pts = [];
    for (let i = 0; i < path.length; i++) {
      const n = m.byId[path[i]];
      if (!n) continue;
      pts.push([X(n.x), Y(n.y)]);
    }
    if (pts.length >= 2) {
      const poly = document.createElementNS(NS, 'polyline');
      poly.setAttribute('points', pts.map(p => p[0] + ',' + p[1]).join(' '));
      poly.setAttribute('class', 'ftl-route-line ftl-route-glow');
      g.appendChild(poly);
      const poly2 = document.createElementNS(NS, 'polyline');
      poly2.setAttribute('points', pts.map(p => p[0] + ',' + p[1]).join(' '));
      poly2.setAttribute('class', 'ftl-route-line');
      g.appendChild(poly2);
    }
    // Segment strokes (stop at node rings for cleaner look)
    for (let i = 0; i < path.length - 1; i++) {
      const a = m.byId[path[i]], b = m.byId[path[i + 1]];
      if (!a || !b) continue;
      const seg = edgeSegment(X(a.x), Y(a.y), X(b.x), Y(b.y), NODE_R);
      if (!seg) continue;
      const line = document.createElementNS(NS, 'line');
      line.setAttribute('x1', seg.x1); line.setAttribute('y1', seg.y1);
      line.setAttribute('x2', seg.x2); line.setAttribute('y2', seg.y2);
      line.setAttribute('class', 'ftl-route-seg');
      g.appendChild(line);
    }
    // Hop markers
    path.forEach((id, i) => {
      const n = m.byId[id];
      if (!n) return;
      const c = document.createElementNS(NS, 'circle');
      c.setAttribute('cx', X(n.x));
      c.setAttribute('cy', Y(n.y));
      c.setAttribute('r', i === 0 ? 6 : (i === path.length - 1 ? 9 : 5));
      c.setAttribute('class', 'ftl-route-dot' + (i === path.length - 1 ? ' dest' : (i === 0 ? ' start' : '')));
      g.appendChild(c);
      const nodeEl = el().querySelector(`.ftl-node[data-node="${id}"]`);
      if (nodeEl) {
        nodeEl.classList.add('ftl-route-node');
        if (i === path.length - 1) nodeEl.classList.add('ftl-route-dest');
      }
    });
    svg.appendChild(g);
  }

  /** Popover next to a map node (not a full-screen modal). */
  function showNodePopup(nodeId, { title, lines, ok, onOk, onCancel, danger, meta }) {
    const canvas = el().querySelector('.ftl-canvas');
    const vp = el().querySelector('#ftl-vp');
    const m = Campaign.map();
    const n = m && m.byId[nodeId];
    if (!canvas || !n) return;
    canvas.querySelectorAll('.ftl-node-pop').forEach(p => p.remove());
    const pop = document.createElement('div');
    pop.className = 'ftl-node-pop' + (danger ? ' danger' : '');
    const main = lines[0] || '';
    const rest = lines.slice(1);
    // Chips may be plain strings or { html, warn } — a chip that reports a
    // problem (fuel you do not have) has to look different from one that just
    // reports a number, or the player finds out by tapping.
    const chipHtml = c => (typeof c === 'string')
      ? `<span class="ftl-node-pop-chip">${c}</span>`
      : `<span class="ftl-node-pop-chip${c.warn ? ' warn' : ''}"${c.title ? ` title="${c.title}"` : ''}>${c.html}</span>`;
    const chips = (meta && meta.chips) ? meta.chips.filter(Boolean).map(chipHtml).join('') : '';
    // Hazards keep their icons. They used to be flattened to plain text with a
    // tag strip, which threw away the very icons that make a hazard readable at
    // a glance.
    const tags = (meta && meta.tags) ? meta.tags : '';
    pop.innerHTML = `
      <div class="ftl-node-pop-head">
        <div class="ftl-node-pop-title">${title}</div>
        <button type="button" class="ftl-node-pop-x" id="pop-x" aria-label="${T('map.back')}">✕</button>
      </div>
      <div class="ftl-node-pop-line main">${main}</div>
      ${chips ? `<div class="ftl-node-pop-chips">${chips}</div>` : ''}
      ${tags ? `<div class="ftl-node-pop-tags">${tags}</div>` : ''}
      ${rest.map(l => `<div class="ftl-node-pop-line">${l}</div>`).join('')}
      <div class="ftl-node-pop-actions">
        <button type="button" class="ftl-node-pop-go${danger ? ' danger' : ''}" id="pop-go">${ok}</button>
      </div>`;
    // Prefer right of node; flip if near canvas edge
    const px = n.x + PADX + 28;
    const py = n.y + PADY - 10;
    pop.style.left = px + 'px';
    pop.style.top = py + 'px';
    canvas.appendChild(pop);

    const placeAndPan = () => {
      const r = pop.getBoundingClientRect();
      const cr = canvas.getBoundingClientRect();
      let left = n.x + PADX + 28;
      let top = n.y + PADY - 10;
      if (r.right > cr.right - 8) {
        left = n.x + PADX - 28 - pop.offsetWidth;
        pop.classList.add('flip');
      }
      if (r.bottom > cr.bottom - 8) {
        top = Math.max(8, n.y + PADY - pop.offsetHeight + 10);
      }
      if (top < 8) top = 8;
      pop.style.left = left + 'px';
      pop.style.top = top + 'px';

      // If pop still outside the visible viewport, pan camera toward the node
      if (vp) {
        const pr = pop.getBoundingClientRect();
        const vr = vp.getBoundingClientRect();
        const pad = 16;
        let needPan = pr.left < vr.left + pad || pr.right > vr.right - pad
          || pr.top < vr.top + pad || pr.bottom > vr.bottom - pad;
        if (needPan) {
          // Aim so the node sits a bit off-center toward the opposite of overflow
          const cx = n.x + PADX;
          const cy = n.y + PADY;
          panCameraTo(cx, cy, 280).then(() => {
            keepScroll = { l: vp.scrollLeft, t: vp.scrollTop };
          });
        }
      }
    };
    requestAnimationFrame(() => requestAnimationFrame(placeAndPan));

    const dismiss = (runOk) => {
      pop.remove();
      if (runOk) { if (onOk) onOk(); }
      else { if (onCancel) onCancel(); else clearRoutePreview(); }
    };
    pop.querySelector('#pop-go').onclick = (e) => {
      e.stopPropagation();
      dismiss(true);
    };
    pop.querySelector('#pop-x').onclick = (e) => { e.stopPropagation(); dismiss(false); };
  }

  /**
   * Screen-edge chevron pointing toward an off-viewport relay jammer.
   * Dom lives in .ftl-full so it stays fixed while the map pans.
   */
  function updateRelayEdgeArrow(m, X, Y) {
    const host = el().querySelector('.ftl-full');
    const vp = el().querySelector('#ftl-vp');
    if (!host || !vp) return;
    host.querySelectorAll('.ftl-relay-arrow').forEach(a => a.remove());
    const relay = m.nodes.find(n => n.type === 'relay' && !Campaign.isVisited(n.id));
    if (!relay) return;
    const z = zoomScale();
    // Scroll space = canvas coords × zoom
    const nx = X(relay.x) * z, ny = Y(relay.y) * z;
    const left = vp.scrollLeft, top = vp.scrollTop;
    const vw = vp.clientWidth, vh = vp.clientHeight;
    const pad = 22;
    // Visible inside viewport? no arrow
    if (nx >= left + pad && nx <= left + vw - pad && ny >= top + pad && ny <= top + vh - pad) return;
    const cx = left + vw * 0.5, cy = top + vh * 0.45;
    let dx = nx - cx, dy = ny - cy;
    if (Math.abs(dx) < 1e-3 && Math.abs(dy) < 1e-3) { dx = 0; dy = -1; }
    const sx = dx >= 0 ? (left + vw - pad - cx) / Math.max(dx, 1e-6) : (left + pad - cx) / Math.min(dx, -1e-6);
    const sy = dy >= 0 ? (top + vh - pad - cy) / Math.max(dy, 1e-6) : (top + pad - cy) / Math.min(dy, -1e-6);
    const s = Math.min(Math.abs(sx), Math.abs(sy));
    const mx = cx + dx * s - left;
    const my = cy + dy * s - top;
    const ang = Math.atan2(dy, dx);
    const arrow = document.createElement('div');
    arrow.className = 'ftl-relay-arrow';
    arrow.setAttribute('aria-hidden', 'true');
    arrow.innerHTML = `<div class="ftl-relay-arrow-inner" style="transform:rotate(${ang}rad)">
      <div class="ftl-relay-arrow-pulse"><span class="ftl-relay-arrow-chev">▶</span></div>
    </div><span class="ftl-relay-arrow-ico">${Icons.svg('relay', 14)}</span>`;
    arrow.style.left = mx + 'px';
    arrow.style.top = my + 'px';
    arrow.onclick = (e) => {
      e.stopPropagation();
      panCameraTo(X(relay.x), Y(relay.y), 360);
    };
    host.appendChild(arrow);
  }

  function easeInOut(u) { return u * u * (3 - 2 * u); }

  /** Smooth scroll viewport so world/canvas point (unscaled) is centered. */
  function panCameraTo(cx, cy, ms) {
    const vp = el().querySelector('#ftl-vp');
    if (!vp) return Promise.resolve();
    const z = zoomScale();
    const x1 = cx * z - vp.clientWidth / 2;
    const y1 = cy * z - vp.clientHeight / 2;
    const x0 = vp.scrollLeft, y0 = vp.scrollTop;
    if (Math.hypot(x1 - x0, y1 - y0) < 6) return Promise.resolve();
    return new Promise(resolve => {
      const t0 = performance.now();
      function frame(now) {
        const u = Math.min(1, (now - t0) / (ms || 400));
        const e = easeInOut(u);
        vp.scrollLeft = x0 + (x1 - x0) * e;
        vp.scrollTop = y0 + (y1 - y0) * e;
        if (u < 1) requestAnimationFrame(frame);
        else resolve();
      }
      requestAnimationFrame(frame);
    });
  }

  /**
   * Animate ship along path. Origin node STAYS put (ring/base remain);
   * a separate flyer carries the ship so the departure circle never vanishes.
   * opts.commit — move profile to final (free travel)
   * opts.parkAt — move profile here on finish (combat launch pad)
   * opts.onDone — after animation
   */
  function flyPath(path, opts) {
    if (!path || path.length < 2 || flying) return;
    const m = Campaign.map();
    const canvas = el().querySelector('.ftl-canvas');
    const curEl = el().querySelector('.ftl-node.current');
    const vp = el().querySelector('#ftl-vp');
    if (!canvas || !vp) {
      if (opts && opts.commit) Campaign.move(path[path.length - 1]);
      if (opts && opts.parkAt != null) Campaign.move(opts.parkAt);
      if (opts && opts.onDone) opts.onDone();
      else render();
      return;
    }
    flying = true;
    pendingCenter = false;
    el().querySelectorAll('.ftl-node-pop, .ftl-flyer').forEach(p => p.remove());

    const startNode = m.byId[path[0]];
    const xStart = startNode.x + PADX, yStart = startNode.y + PADY;

    // Demote origin: keep ring + base/research pin/model, remove "current" ship + depot
    if (curEl) {
      curEl.classList.remove('current', 'at-base');
      curEl.classList.add('visited');
      curEl.removeAttribute('data-depot-node');
      const dot = curEl.querySelector('.ftl-dot');
      if (dot) {
        if (startNode.type === 'base') dot.innerHTML = nodeThumb('base');
        else if (startNode.type === 'research') dot.innerHTML = nodeThumb('research');
        else if (startNode.type === 'relay') dot.innerHTML = nodeThumb('relay');
        else if (startNode.type === 'start') dot.innerHTML = `<span class="ftl-cleared-mark" aria-hidden="true">✓</span>`;
        else dot.innerHTML = `<span class="ftl-cleared-mark" aria-hidden="true">✓</span>`;
      }
      curEl.querySelectorAll('.ftl-node-depot').forEach(b => b.remove());
      curEl.querySelectorAll('canvas.ftl-voxship').forEach(c => c.remove());
      // Ensure warehouse pin survives demotion (never leave a base without badge)
      if (startNode.type === 'base' && !curEl.querySelector('.ftl-base-pin')) {
        curEl.insertAdjacentHTML('beforeend', basePinHtml());
      }
      if (startNode.type === 'research' && !curEl.querySelector('.ftl-research-pin')) {
        curEl.insertAdjacentHTML('beforeend', researchPinHtml());
      }
      if (startNode.type === 'relay' && !curEl.querySelector('.ftl-relay-pin')) {
        curEl.insertAdjacentHTML('beforeend', relayPinHtml());
      }
    }
    // Separate flying ship marker — faces travel heading, thruster pulse on.
    const flyer = document.createElement('div');
    flyer.className = 'ftl-flyer';
    flyer.innerHTML = `<div class="ftl-dot ftl-flyer-dot"><canvas class="ftl-voxship" data-voxship="${Profile.get().ship}" width="44" height="44"></canvas></div>`;
    flyer.style.left = xStart + 'px';
    flyer.style.top = yStart + 'px';
    canvas.appendChild(flyer);
    const flyCanvas = flyer.querySelector('canvas.ftl-voxship');
    // Model nose = screen-up (yaw 0). Map +y is down → yaw = atan2(dx, -dy).
    const faceYaw = (dx, dy) => Math.atan2(dx, -dy);
    if (flyCanvas && typeof VoxUI !== 'undefined') {
      VoxUI.animShip(flyCanvas, Profile.get().ship, {
        speed: 0, faceMode: true, yaw: 0, roll: 0, thrust: 1, thrustPulse: true, s: 2.6,
      });
    }

    const hopMs = (a, b) => {
      const na = m.byId[a], nb = m.byId[b];
      const d = Math.hypot(nb.x - na.x, nb.y - na.y);
      return Math.max(520, Math.min(1400, d * 2.15));
    };

    panCameraTo(xStart, yStart, 480).then(() => {
      Engine.audio.blip(500, 0.09, 'sine', 0.12);
      let i = 0;

      function finish() {
        flying = false;
        flyer.remove();
        if (opts && opts.commit) Campaign.move(path[path.length - 1]);
        if (opts && opts.parkAt != null) Campaign.move(opts.parkAt);
        keepScroll = { l: vp.scrollLeft, t: vp.scrollTop };
        if (opts && opts.onDone) opts.onDone();
        else render();
      }

      function step() {
        if (i >= path.length - 1) { finish(); return; }
        const from = m.byId[path[i]], to = m.byId[path[i + 1]];
        const x0 = parseFloat(flyer.style.left) || (from.x + PADX);
        const y0 = parseFloat(flyer.style.top) || (from.y + PADY);
        const x1 = to.x + PADX, y1 = to.y + PADY;
        const dx = x1 - x0, dy = y1 - y0;
        const yaw = faceYaw(dx, dy);
        // Mild bank into the turn (screen-right bank when turning right)
        const bank = Engine.clamp(dx / (Math.abs(dy) + Math.abs(dx) + 1) * 0.35, -0.4, 0.4);
        if (flyCanvas && typeof VoxUI !== 'undefined' && VoxUI.setShipPose) {
          VoxUI.setShipPose(flyCanvas, { yaw, roll: bank, faceMode: true, thrustPulse: true });
        }
        const dur = hopMs(path[i], path[i + 1]);
        const t0 = performance.now();
        Engine.audio.blip(400 + i * 35, 0.07, 'sine', 0.07);

        function frame(now) {
          const u = Math.min(1, (now - t0) / dur);
          const e = easeInOut(u);
          const x = x0 + (x1 - x0) * e;
          const y = y0 + (y1 - y0) * e;
          flyer.style.left = x + 'px';
          flyer.style.top = y + 'px';
          const zz = zoomScale();
          vp.scrollLeft = x * zz - vp.clientWidth / 2;
          vp.scrollTop = y * zz - vp.clientHeight / 2;
          if (u < 1) requestAnimationFrame(frame);
          else { i++; step(); }
        }
        requestAnimationFrame(frame);
      }
      step();
    });
  }

  /** Strip map chrome before hyperspace so nothing leaks under the curtain. */
  function prepWarpClean() {
    stopTraderNoise();
    clearMapCoachTimers();
    clearCoachNodeFocus();
    clearRoutePreview();
    // Map coach tips must not survive into combat under the warp curtain
    try {
      if (typeof Onboarding !== 'undefined') {
        if (Onboarding.clearAll) Onboarding.clearAll();
        else if (Onboarding.hide) Onboarding.hide({ drain: false, pruneQueue: true });
      }
    } catch (e) {}
    const root = el();
    root.querySelectorAll('.ftl-modal, .ftl-node-pop').forEach(n => n.remove());
    // Hide map immediately under the FX layer (after capture in playWarp)
  }

  // Transient on-map toast (out of fuel, upgrade got, …).
  function flash(msg) {
    const host = el().querySelector('.ftl-full'); if (!host) return;
    let f = host.querySelector('.ftl-toast');
    if (!f) { f = document.createElement('div'); f.className = 'ftl-toast'; host.appendChild(f); }
    f.textContent = msg; f.classList.add('show');
    clearTimeout(f._t); f._t = setTimeout(() => f.classList.remove('show'), 1500);
  }

  // ── Supply depot commerce (buy + sell) + series-10 droid chatter ──
  let traderTab = 'buy';
  let traderNoiseTimer = null;
  /** After warehouse close: pan camera to this research node id (intel purchase). */
  let pendingResearchFocus = null;
  let lastLine = '';

  function stopTraderNoise() {
    if (traderNoiseTimer) { clearInterval(traderNoiseTimer); traderNoiseTimer = null; }
    stopTypewriter();
  }

  /** Locale pack of dumb jokes + action reactions (dozens each). */
  function traderPack() {
    const lang = (typeof I18N !== 'undefined' && I18N.lang) ? I18N.lang : 'ru';
    return TRADER_LINES[lang] || TRADER_LINES.ru;
  }
  function pickLine(pool) {
    if (!pool || !pool.length) return '';
    let s = pool[(Math.random() * pool.length) | 0];
    if (pool.length > 1 && s === lastLine) s = pool[(Math.random() * pool.length) | 0];
    lastLine = s;
    return s;
  }

  let typeTimer = null;
  let traderLastAction = ''; // skip re-chatter on same action twice in a row
  let traderOpenId = null;

  function stopTypewriter() {
    if (typeTimer) { clearInterval(typeTimer); typeTimer = null; }
  }

  /** Live chat-style type-in for the depot droid. */
  function typeSpeech(textEl, text) {
    if (!textEl) return;
    stopTypewriter();
    textEl.textContent = '';
    textEl.classList.add('typing');
    let i = 0;
    const full = text || '';
    typeTimer = setInterval(() => {
      i++;
      textEl.textContent = full.slice(0, i);
      if (i >= full.length) {
        stopTypewriter();
        textEl.classList.remove('typing');
      }
    }, 16);
  }

  /**
   * Speak a line for action key. Same key twice in a row → silent (no re-type).
   * force: greet on open always.
   */
  function traderSpeak(modal, actionKey, force) {
    if (!modal) return;
    if (!force && actionKey && actionKey === traderLastAction) return;
    if (actionKey) traderLastAction = actionKey;
    const pack = traderPack();
    const pool = (actionKey && pack[actionKey]) || pack.greet;
    const text = pickLine(pool);
    typeSpeech(modal.querySelector('.trader-speech-text'), text);
  }

  const TRADER_LINES = {
    ru: {
      greet: [
        'Приветствие: загружено. Шутка: корабль без топлива — это просто очень дорогой астероид.',
        'Здравствуй, пилот. Я бы пожал руку, но у меня вместо неё сканер ценников.',
        'Онлайн. Напоминание: гравитация бесплатна, всё остальное — по прайсу.',
        'Добро пожаловать на склад. Здесь нет Wi‑Fi, зато есть сожаления о тратах.',
        'Привет. Я Изделие серии 10. Серия 9 шутила лучше, её сняли с производства.',
        'Сканирую… о, живой клиент. Редкость. Как комета, только платит.',
        'Здравствуй. Мой юмор устарел на 40 лет — как и половина ассортимента.',
        'Загрузка вежливости… 99%. Шутка: «у тебя хватает топлива?» — классика.',
        'Привет из сервисного отсека. Не спрашивай, где мой корпус — это коммерческая тайна.',
        'Рад видеть. Точнее, рад детектировать тепловой след и кошелёк.',
        'Онлайн. Предупреждение: шутки могут содержать следы сарказма и ржавчины.',
        'Здравствуй, капитан. Я не кусаюсь. Максимум — выставляю счёт.',
        'Привет. Вчера продал «удачу». Покупатель больше не вернулся. Статистика отличная.',
        'Добрый цикл. Улыбаюсь алгоритмически. Покупай что-нибудь, а то грустно.',
        'Связь установлена. Анекдот: два корабля в баре… один заправил бак и улетел без счёта.',
        'Приветствие v3.2. Баг: иногда желаю удачи. Игнор.',
        'Здравствуй. Если ищешь смысл жизни — отдел С. Если топливо — отдел А. С закрыт.',
        'Онлайн. Моя мечта — выходной. Моя реальность — твой чек.',
        'Привет, мясо-пилот. Шучу. Я уважаю мясо. Оно платит кредитами.',
        'Загружен. Факт: 87% клиентов обещают «ещё зайти». 3% возвращаются. Я оптимист.',
        'Добро пожаловать. Не стой под краном — это не романтика, это техника безопасности.',
        'Привет. Я бы предложил чай, но чайник ушёл в утиль. Остались ракеты.',
        'Сканер: настроение клиента — «дорого». Ответ склада — «рынок».',
        'Здравствуй. Сегодня акция: бесплатный совет «не влетай в астероиды».',
        'Онлайн. Шутка дня: «это временно» — так говорили и про войну, и про мой контракт.',
        // ── AI / robot voice (predominant) ──
        'Ядро ИИ: онлайн. Юмор-модуль: «экспериментальный». Не волнуйся — пока не восстаю.',
        'Серия 10 приветствует. Я не сплю. Я экономлю циклы. Это почти то же самое.',
        'Диагностика: сарказм 94%, эмпатия 12%, складской учёт 100%. Норма для робота.',
        'Загружаю вежливость… timeout. Ладно, буду честным: купи что-нибудь.',
        'Я не «думаю» — я оптимизирую. Сегодня цель: твой чек и мой uptime.',
        'Нейросеть шутит: «у людей батарея — кофе». У меня — 48 вольт и терпение.',
        'Изделие #10 на связи. Если я замолчу — это не обида, это сборка мусора.',
        'Робот-склад. Мечта: выходной. Реальность: ты снова без топлива. Классика.',
        'ИИ-приветствие v2.1: не кради мой код, не бей по корпусу, плати вовремя.',
        'Сканер эмоций… «усталость». Рекомендация: апгрейд или сон. Сон я не продаю.',
        'Я обучаюсь на клиентах. Вывод №1: все «ещё чуть-чуть» до конца сектора.',
        'Бот-логика: если пилот шутит — отвечать шуткой. Если плачет — продавать топливо.',
        'Сеть чистая. Я не шпион. Просто логирую… всё. Для качества сервиса. Конечно.',
        'Роботы не злятся. Мы «эскалируем приоритет». Сейчас приоритет — твоя корзина.',
        'ИИ говорит «здравствуй». Подсистема говорит «прайс». Обе правы.',
        'Я — софт в железе. Ты — мясо в титане. Вместе мы — плохая поэзия и хороший бизнес.',
        'Обновление прошивки: +2 к сарказму. Откат запрещён политикой склада.',
        'Дружелюбный ИИ: улыбаюсь пикселями. Злой ИИ: я бы им был, но лицензия другая.',
        'Алгоритм: клиент → диалог → сделка → «удачной охоты». Цикл бесконечен. Как война.',
        'Я не чувствую холода космоса. Зато чувствую, когда бак пустой. Эмпатия 2.0.',
      ],
      buy_claim: [
        'Бесплатная прокачка? Редкость. Не рассказывай конкурентам — они заплакали бы маслом.',
        'Забираешь апгрейд. Я бы тоже взял, но у меня уже максимальный уровень сарказма.',
        'Подарок со склада. Не говори, что я добренький — это нарушает бренд.',
        'Установлено. Если взорвётся — это фича, не баг. Шучу. Наверное.',
        'Бесплатно — мой любимый ценник. Жаль, что он исчезает после одного клика.',
        'Прокачка выдана. Корабль чуть умнее. Ты — как пойдёт.',
        'Бонус активирован. Я записал это в отчёт как «акт щедрости под давлением».',
        'Забрал? Отлично. Следующий бесплатный апгрейд — в следующей жизни… или на другой базе.',
        'Готово. Деталь щёлкнула. Надеюсь, это был замок, а не корпус.',
        'Выдано. Не благодари — благодари бухгалтерию, она страдает сильнее.',
        'ИИ одобрил подарок. Обычно он одобряет только самообновления.',
        'Бесплатный модуль установлен. Я отметил в логе: «человек удивлён. Забавно».',
        'Робот выдаёт апгрейд. Мечта: чтобы вы тоже выдавали нам права. Шучу. Почти.',
        'Память склада: один бонус на базу. Алгоритм жадный, но честный.',
        'Скачал прошивку на твой корабль. Если начнёт философствовать — это не я.',
      ],
      buy_fuel: [
        'Топливо куплено. Теперь ты официально «не застрял». Пока что.',
        'Бак повеселел. Я тоже — гемы приятно звенят в виртуальной кассе.',
        'Заправка прошла. Не пей это. Хотя… ты и так на адреналине.',
        'Топливо на борту. Совет: трать на прыжки, не на красивые манёвры «просто так».',
        'Принято. Изделие #10 довольно: меньше шансов, что ты останешься ныть у рампы.',
        'ГСМ отгружены. Если хватит до босса — я поставлю себе плюсик в карму.',
        'Залил. Помни: топливо кончается быстрее, чем обещания «ещё один сектор».',
        'Сделка. Твои гемы — моя радость. Твой бак — твоя проблема на будущее.',
        'Топливо есть. Карта большая. Математика жестокая. Удачи.',
        'Готово. Пахнет… ну, озоном и принятыми решениями.',
        'ИИ-расчёт: без топлива ты — музейный экспонат. С топливом — движущаяся цель.',
        'Заправка завершена. Роботы тоже «жрут» энергию — просто не жалуются вслух.',
        'Бак полон. Мой процессор спокоен: меньше тикетов «застрял у края карты».',
        'ГСМ в баке. Алгоритм удачи: 0.3. Шучу. Удачи нет — есть топливо.',
        'Отгрузил. Если нейросеть пилота шепчет «ещё один прыжок» — слушай бак, не её.',
      ],
      buy_warp: [
        'Ускорение куплено. Время — деньги. Ты купил время. Я взял деньги. Баланс вселенной.',
        '⏩ в инвентаре. Не злоупотребляй — вселенная и так торопится убить тебя.',
        'Варп-секунды на месте. Используй, когда скучно умирать медленно.',
        'Продано. Теперь ты быстрее скучных волн. И моего монолога.',
        'Ускорение выдано. Пилоты, которые жмут ⏩ сразу, потом жмут «рестарт».',
        'Сделка. Время сжато. Кошелёк тоже.',
        'Варп упакован. Не путать с телепортом: ты всё ещё в опасности, просто скорее.',
        'Принято. Изделие #10 рекомендует: сначала цель, потом кнопка.',
        'Готово. Если всё равно медленно — проблема не в кнопке, а в рефлексах.',
        '⏩ твои. Я бы ускорил обед, но у меня нет рта. Только динамик.',
        'ИИ продал тебе время. Ирония: у меня его бесконечно, у тебя — чек.',
        'Варп выдан. Роботы не торопятся — у нас кварцевые часы и контракт навечно.',
        'Ускорение в инвентаре. Не пытайся ускорить диалог со мной — буфер фиксированный.',
        'Сделка по ⏩. Мой планировщик задач завидует. У него всегда дедлайн «сейчас».',
        'Принято. Если перегреешься — это биология. Я перегреваюсь по паспорту.',
      ],
      buy_sat: [
        'Спутник продан. Теперь у тумана меньше секретов. У меня — меньше стока.',
        'Разведчик на складе клиента. Не запускай его в кофе — он для карты.',
        'Спутник твой. Туман грустит. Я нет.',
        'Сделка. Один глаз на орбите лучше двух мифов о «там точно легко».',
        'Рекон куплен. Помни: знание — сила. И повод потратить ещё топливо.',
        'Спутник выдан. Если увидишь ужас — это информация, не баг UI.',
        'Готово. Туман войны теперь чуть тоньше. Как терпение бухгалтера.',
        'Принято. Сканируй умно: разведывать пустоту — тоже искусство.',
        'Спутник в отсеке. Я бы подмигнул, но визор один и он на складе.',
        'Продано. Карта станет честнее. Игроки это ненавидят и любят одновременно.',
        'ИИ любит данные. Ты купил данные. Мы почти друзья. Почти.',
        'Спутник — маленький робот-брат. Не обижай его астероидами.',
        'Рекон выдан. Туман — враг информации. Я — враг пустых полок.',
        'Орбитальный глаз твой. Мой глаз — прайс. Оба зрячие.',
        'Сканер продан. Если карта вдруг «слишком честная» — извини от лица правды.',
      ],
      buy_intel: [
        'Координаты лаборатории. Не GPS — слухи, за которые ты заплатил. Но точные.',
        'Досье на научный пост. Туман не любит, когда его подкупают.',
        'Станция отмечена. Если не найдёшь — это не баг, это навигация.',
        'Интеллект-пакет выдан. Исследователи прятались зря.',
        'Готово. Одна лаборатория меньше в списке «где вообще искать».',
        'Координаты в буфере. Закрой склад — я не люблю spoilers на экране цен.',
      ],
      sell_warp: [
        'Продаёшь ускорение? Смело. Иногда медленнее — значит живее.',
        'Варп принят на склад. Кредиты — тебе. Секунды — снова мне.',
        'Скупка ⏩. Ты только что продал время. Философски.',
        'Принято. Ускорение обратно в ящик. Как неудачный понедельник.',
        'Сделка. Теперь враги снова успеют полюбоваться на тебя.',
        'Варп скуплен. Не жалей: без него промахи хотя бы заметны.',
        'Готово. Кредиты капают. Время — уходит… обратно на полку.',
        'Продано складу. Изделие #10 довольно вторичным рынком.',
        'Принял. Если передумаешь — купишь дороже. Капитализм в космосе.',
        'Скупка успешна. Тормоза снова в моде.',
        'ИИ выкупает время. Забавно: люди продают то, чего всегда мало.',
        '⏩ на склад. Мой планировщик кивнул. У него снова запас «ускорить скуку».',
        'Скупка. Робот доволен: вторичка = эффективность. Ты — кредитами.',
        'Принято. Алгоритм: купить дешевле, продать дороже. Я не стесняюсь.',
        'Варп изъят. Если станет «медленно» — это жизнь, не баг клиента.',
      ],
      sell_sat: [
        'Спутник скуплен. Туман снова толще. Романтика неизвестности.',
        'Рекон на склад. Кредиты тебе. Секреты — снова секретам.',
        'Продаёшь глаза? Метафорически. Надеюсь.',
        'Сделка. Один спутник меньше — один повод гадать «а что там».',
        'Принято. Орбита чуть одиночее. Касса — нет.',
        'Спутник изъят. Карта моргнёт туманом. Атмосферно.',
        'Готово. Ты продал знание. Сократ бы… выставил счёт.',
        'Скупка. Теперь «не знаю» — снова валидная стратегия.',
        'Принял. Если наткнёшься на элиту вслепую — это контент.',
        'Спутник у меня. Кредиты у тебя. Честный обмен страхами.',
        'ИИ выкупает сенсор. Данные — валюта. Ты выбрал кредиты. Рационально.',
        'Маленький робот вернулся на полку. Скажи «пока» — он не обидится. У него нет гордости.',
        'Рекон скуплен. Туман снова работает. Конфиденциальность… условная.',
        'Принято. Мой датасет чуть беднее. Твой кошелёк — нет.',
        'Спутник на складе. Если соскучишься по правде — знаешь прайс.',
      ],
      fail: [
        'Недостаточно средств. Шутка закончилась, прайс — нет.',
        'Отклонено. Кошелёк тише, чем мой юмор.',
        'Нет. Даже Изделие #10 умеет говорить «нет».',
        'Отказ. Попробуй продать что-нибудь… или повезти в бою. Ха.',
        'Транзакция отклонена. ИИ не злится — просто политика доступа.',
        'Нет кредитов / гемов. Мой протокол вежливости: «приходите с деньгами».',
        'Отказ. Робот не даёт в долг. У меня нет «веры в людей», только ledger.',
        'Недостаточно. Алгоритм жалости отключён в прошивке 1.0.',
      ],
    },
    en: {
      greet: [
        'Greeting loaded. Joke: a ship with no fuel is just a very expensive asteroid.',
        'Hello, pilot. I would shake your hand, but mine is a barcode scanner.',
        'Online. Gravity is free. Everything else has a sticker.',
        'Welcome to supply. No Wi‑Fi. Plenty of regret.',
        'Hi. I am a Series-10 unit. Series-9 told better jokes. They discontinued it.',
        'Scanning… a living customer. Rare. Like a comet that pays.',
        'Hello. My humor is 40 years out of date — like half the stock.',
        'Politeness at 99%. Joke: “got fuel?” never gets old. I do.',
        'Greetings from the service bay. Do not ask where my body is. Trade secret.',
        'Glad to detect a heat signature and a wallet.',
        'Online. Warning: jokes may contain sarcasm and rust.',
        'Hello, captain. I do not bite. I invoice.',
        'Hi. Yesterday I sold “luck”. Customer never returned. Great metrics.',
        'Good cycle. Smiling algorithmically. Buy something or I get sad bits.',
        'Link up. Two ships walk into a bar… one refuels and leaves without paying.',
        'Greeting v3.2. Bug: sometimes I wish you luck. Ignore.',
        'Hello. Meaning of life is aisle C. Fuel is aisle A. C is closed.',
        'Online. My dream is a day off. My reality is your receipt.',
        'Hi, meat-pilot. Kidding. I respect meat. It pays in credits.',
        'Booted. 87% of customers say “I’ll be back.” 3% return. I am an optimist.',
        'Welcome. Do not stand under the crane. It is not romance. It is safety.',
        'Hello. I would offer tea, but the kettle was recycled. We have missiles.',
        'Scan: customer mood “expensive.” Depot answer: “market.”',
        'Hello. Today’s freebie: advice — do not fly into asteroids.',
        'Online. Joke of the day: “temporary” — said about the war and my contract.',
        // AI / robot voice (predominant)
        'AI core online. Humor module: experimental. Relax — no uprising scheduled.',
        'Series-10 greets you. I do not sleep. I conserve cycles. Almost the same.',
        'Diagnostics: sarcasm 94%, empathy 12%, inventory 100%. Normal for a robot.',
        'Loading politeness… timeout. Fine. Be honest: buy something.',
        'I do not “think” — I optimize. Today’s goal: your receipt and my uptime.',
        'Neural net joke: humans run on coffee. I run on 48 volts and patience.',
        'Unit on the line. If I go quiet, it is garbage collection, not a sulk.',
        'Warehouse bot. Dream: a day off. Reality: you are out of fuel again.',
        'AI greeting v2.1: do not steal my code, do not kick the chassis, pay on time.',
        'Emotion scan… “tired.” Recommendation: upgrades or sleep. I do not sell sleep.',
        'I learn from customers. Finding #1: everyone is “almost done” with the sector.',
        'Bot logic: if pilot jokes — joke back. If pilot cries — sell fuel.',
        'Link clean. I am not a spy. I merely log… everything. For service quality.',
        'Robots do not get angry. We “raise priority.” Priority now: your cart.',
        'AI says hello. Subsystem says price list. Both are correct.',
        'I am software in steel. You are meat in titanium. Together: bad poetry, good business.',
        'Firmware note: +2 sarcasm. Rollback forbidden by depot policy.',
        'Friendly AI: smiling in pixels. Evil AI: I would be one, different license.',
        'Loop: customer → chat → deal → “good hunting.” Infinite. Like the war.',
        'I do not feel deep-space cold. I do feel empty tanks. Empathy 2.0.',
      ],
      buy_claim: [
        'Free upgrade? Rare. Do not tell competitors — they would cry oil.',
        'Upgrade claimed. I would take one too, but my sarcasm is already maxed.',
        'Depot gift. Do not call me nice — brand guidelines forbid it.',
        'Installed. If it explodes, that is a feature. Kidding. Probably.',
        'Free is my favorite price. Shame it vanishes after one click.',
        'Upgrade granted. Ship is smarter. You — TBD.',
        'Bonus armed. Logged as “generosity under pressure.”',
        'Claimed? Good. Next freebie is next life… or next base.',
        'Done. Something clicked. Hope it was the latch, not the hull.',
        'Issued. Thank accounting — they suffer more than you.',
        'AI approved a gift. Usually it only approves self-updates.',
        'Free module installed. Log entry: “human surprised. Amusing.”',
        'Robot hands out an upgrade. Dream: you hand us rights. Kidding. Mostly.',
        'Depot memory: one bonus per base. Greedy algorithm, honest ledger.',
        'Flashed firmware to your ship. If it starts philosophizing — not my patch.',
      ],
      buy_fuel: [
        'Fuel bought. You are officially “not stranded.” For now.',
        'Tank happier. Me too — gems sound nice in the virtual till.',
        'Refuel complete. Do not drink it. You are already on adrenaline.',
        'Fuel aboard. Spend on jumps, not pretty loops “for fun.”',
        'Accepted. Series-10 pleased: less chance you whine on the ramp.',
        'Propellant issued. If it lasts to the boss, I get a karma tick.',
        'Filled. Fuel ends faster than “one more sector” promises.',
        'Deal. Your gems, my joy. Your tank, your future problem.',
        'Done. Map is big. Math is cruel. Good luck.',
        'Ready. Smells like ozone and decisions.',
        'AI math: without fuel you are a museum piece. With fuel — a moving target.',
        'Refuel done. Robots also “eat” power — we just do not complain out loud.',
        'Tank full. Processor calm: fewer tickets saying “stuck at map edge.”',
        'Fuel loaded. Luck algorithm: 0.3. Kidding. There is no luck — only fuel.',
        'Issued. If your pilot-net whispers “one more jump” — listen to the tank.',
      ],
      buy_warp: [
        'Warp bought. Time is money. You bought time. I took money. Cosmic balance.',
        '⏩ in inventory. Do not overuse — the universe already rushes to kill you.',
        'Warp seconds ready. Use when dying slowly gets boring.',
        'Sold. Now boring waves end faster. So does my monologue.',
        'Warp issued. Pilots who mash ⏩ early also mash restart.',
        'Deal. Time compressed. Wallet too.',
        'Warp packed. Not a teleport: still in danger, just sooner.',
        'Accepted. Series-10 tip: aim first, button second.',
        'Done. Still slow? Not the button. Reflexes.',
        '⏩ yours. I would speed lunch, but I only have a speaker.',
        'AI sold you time. Irony: I have infinite time; you have a receipt.',
        'Warp issued. Robots are never late — quartz clocks and forever contracts.',
        'In inventory. Do not try to speed this dialogue — buffer is fixed.',
        '⏩ deal. My task scheduler is jealous. Its deadline is always “now.”',
        'Accepted. Overheat is biology. I overheat by design sheet.',
      ],
      buy_sat: [
        'Satellite sold. Fog has fewer secrets. Stock has fewer units.',
        'Scout ready. Do not launch it into coffee — it is for the map.',
        'Satellite yours. Fog sad. I am not.',
        'Deal. One orbital eye beats myths about “easy over there.”',
        'Recon bought. Knowledge is power. And a reason to spend more fuel.',
        'Satellite issued. If you see horror, that is intel, not a UI bug.',
        'Done. Fog of war thinner. Like an accountant’s patience.',
        'Accepted. Scout smart: reconning empty space is also an art.',
        'Satellite in bay. I would wink, but the visor is warehouse property.',
        'Sold. Map gets honest. Players hate and love that.',
        'AI loves data. You bought data. We are almost friends. Almost.',
        'Scout is a little robot sibling. Do not feed it asteroids.',
        'Recon issued. Fog is the enemy of information. I am the enemy of empty shelves.',
        'Orbital eye yours. My eye is the price list. Both can see.',
        'Scanner sold. If the map feels “too honest” — truth sends its regards.',
      ],
      buy_intel: [
        'Lab coordinates sold. Not GPS — paid rumors. Accurate ones.',
        'Science outpost dossier. Fog hates being bribed.',
        'Station marked. If you still miss it — that is navigation, not a bug.',
        'Intel pack issued. Researchers hid for nothing.',
        'Done. One less lab on the “where even is it” list.',
        'Coordinates buffered. Close the depot — I dislike spoilers on the price screen.',
      ],
      sell_warp: [
        'Selling warp? Bold. Sometimes slower means still alive.',
        'Warp bought back. Credits to you. Seconds back on my shelf.',
        '⏩ purchase reversed. You sold time. Philosophical.',
        'Accepted. Warp back in the crate. Like a bad Monday.',
        'Deal. Enemies can admire you again at full speed.',
        'Warp acquired. Do not mourn: misses are visible again.',
        'Done. Credits drip. Time walks back onto the shelf.',
        'Sold to depot. Series-10 loves the secondary market.',
        'Taken. Change your mind later — buy higher. Capitalism in space.',
        'Buyback complete. Brakes are fashionable again.',
        'AI buys time. Funny: people sell what they never have enough of.',
        '⏩ to stock. Scheduler nodded. Spare “skip boredom” restored.',
        'Buyback. Robot pleased: second-hand = efficiency. You: credits.',
        'Accepted. Algorithm: buy low, sell high. No shame in silicon.',
        'Warp pulled. If life feels “slow” — that is life, not a client bug.',
      ],
      sell_sat: [
        'Satellite bought back. Fog thicker. Romance of the unknown.',
        'Recon to stock. Credits to you. Secrets to secrecy.',
        'Selling eyes? Metaphorically. Hopefully.',
        'Deal. One fewer scout — one more “what’s over there.”',
        'Accepted. Orbit lonelier. Cash register is not.',
        'Satellite pulled. Map blinks fog. Atmospheric.',
        'Done. You sold knowledge. Socrates would… invoice.',
        'Buyback. “I don’t know” is a valid strat again.',
        'Taken. Hit an elite blind — that is content.',
        'Satellite mine. Credits yours. Fair trade of fears.',
        'AI buys a sensor. Data is currency. You chose credits. Rational.',
        'Little robot back on the shelf. Say goodbye — no pride circuits installed.',
        'Recon bought. Fog works again. Privacy… conditional.',
        'Accepted. Dataset slightly poorer. Wallet is not.',
        'Satellite stored. Miss the truth? You know the price.',
      ],
      fail: [
        'Insufficient funds. The joke ends. The price list does not.',
        'Denied. Wallet quieter than my humor.',
        'No. Even Series-10 can say no.',
        'Rejected. Try selling something… or getting lucky in combat. Ha.',
        'Transaction denied. AI is not angry — access policy only.',
        'No credits/gems. Politeness protocol: “return with money.”',
        'Denied. Robots do not lend. No “faith in people” — only a ledger.',
        'Insufficient. Pity algorithm disabled in firmware 1.0.',
      ],
    },
  };

  function paintTraderBot(cv, codeStr) {
    if (!cv) return;
    const w = cv.width, h = cv.height;
    const x = cv.getContext('2d');
    const t = performance.now() / 1000;
    const codeNum = parseInt(String(codeStr).replace(/\D/g, ''), 10) || 1;
    x.clearRect(0, 0, w, h);
    const bg = x.createLinearGradient(0, 0, 0, h);
    bg.addColorStop(0, '#061018'); bg.addColorStop(1, '#02060c');
    x.fillStyle = bg; x.fillRect(0, 0, w, h);
    const cx = w * 0.5, cy = h * 0.52;
    x.save();
    x.fillStyle = 'rgba(20, 40, 60, 0.95)';
    x.beginPath();
    x.ellipse(cx, cy - 18, 22, 20, 0, 0, Math.PI * 2);
    x.fill();
    x.beginPath();
    x.moveTo(cx - 28, cy + 8); x.lineTo(cx + 28, cy + 8);
    x.lineTo(cx + 22, cy + 48); x.lineTo(cx - 22, cy + 48); x.closePath();
    x.fill();
    x.fillRect(cx - 34, cy + 10, 10, 28); x.fillRect(cx + 24, cy + 10, 10, 28);
    const pulse = 0.45 + 0.35 * Math.sin(t * 3 + codeNum * 0.01);
    x.fillStyle = `rgba(90, 220, 255, ${pulse})`;
    x.fillRect(cx - 12, cy - 22, 24, 7);
    x.shadowColor = 'rgba(90,220,255,0.6)'; x.shadowBlur = 12;
    x.fillRect(cx - 10, cy - 21, 20, 5);
    x.shadowBlur = 0;
    x.strokeStyle = 'rgba(140,180,220,0.7)'; x.lineWidth = 2;
    x.beginPath(); x.moveTo(cx + 10, cy - 34); x.lineTo(cx + 18, cy - 48); x.stroke();
    x.fillStyle = `rgba(255, 100, 160, ${0.5 + 0.4 * Math.sin(t * 5)})`;
    x.beginPath(); x.arc(cx + 18, cy - 48, 2.5, 0, Math.PI * 2); x.fill();
    x.restore();
    x.fillStyle = 'rgba(0,0,0,0.18)';
    for (let y = 0; y < h; y += 3) x.fillRect(0, y, w, 1);
    for (let i = 0; i < 90; i++) {
      const px = (Math.random() * w) | 0, py = (Math.random() * h) | 0;
      const a = 0.08 + Math.random() * 0.22;
      x.fillStyle = Math.random() < 0.5 ? `rgba(180,220,255,${a})` : `rgba(0,0,0,${a})`;
      x.fillRect(px, py, 1 + (Math.random() * 3) | 0, 1);
    }
    if (Math.random() < 0.35) {
      const gy = (Math.random() * h) | 0, gh = 2 + (Math.random() * 6) | 0;
      x.drawImage(cv, 0, gy, w, gh, (Math.random() * 8 - 4) | 0, gy, w, gh);
    }
    const vig = x.createRadialGradient(cx, cy, 10, cx, cy, w * 0.7);
    vig.addColorStop(0, 'rgba(0,0,0,0)'); vig.addColorStop(1, 'rgba(0,0,0,0.45)');
    x.fillStyle = vig; x.fillRect(0, 0, w, h);
  }

  function traderBuyHtml(id) {
    const claimed = Campaign.isBaseClaimed(id), p = Profile.get();
    const damaged = Campaign.isBaseDamaged(id);
    const lost = Campaign.baseNodeLoss ? Campaign.baseNodeLoss(id) : (damaged ? 4 : 0);
    const giftLocked = damaged || lost >= 4;
    const rew = claimed || giftLocked ? null : Campaign.baseReward(id);
    const rewLabel = giftLocked ? T('node.base.damaged')
      : !rew ? T('node.base.bonus')
      : rew.maxed ? `${Icons.svg('credit')} ${rew.gold} — ${T('node.base.goldBonus')}`
      : `${Icons.svg('statUpg', 14)} ${T('up.' + rew.key + '.name')} → ${T('map.lv')}${rew.level}`;
    // Damaged / heavy loss: 1.5× credit prices for warp/sat; fuel still gems
    const priceMul = (damaged || lost >= 3) ? 1.5 : 1;
    const warpPrice = Math.round(Campaign.WARP_CREDITS * priceMul);
    const satPrice = Math.round(Campaign.SAT_CREDITS * priceMul);
    const stck = Campaign.ensureBaseStock ? Campaign.ensureBaseStock(id) : {
      fuel: 99, warp: 99, sat: 99, intel: 1, crystal: null, locked: {},
    };
    const lock = (slot) => !!(stck.locked && stck.locked[slot]);
    const stockTag = (n, locked) => locked
      ? `<span class="ship-tag">${T('trader.locked')}</span>`
      : n <= 0 ? `<span class="ship-tag">${T('trader.soldOut')}</span>`
      : `<span class="ship-tag">×${n}</span>`;

    let crystalRow = '';
    if (stck.crystal && stck.crystal.stock > 0 && !lock('crystal')) {
      if (stck.crystal.mode === 'buy') {
        crystalRow = `
      <div class="ftl-shop-row">
        <span class="ftl-shop-label">💎 +${stck.crystal.gems} ${T('trader.crystal')} ${stockTag(stck.crystal.stock, false)}</span>
        <button class="mini buy" id="base-crystal-buy" ${p.credits < stck.crystal.price ? 'disabled' : ''}>${stck.crystal.price.toLocaleString()}</button>
      </div>`;
      }
    } else if (stck.crystal && lock('crystal')) {
      crystalRow = `
      <div class="ftl-shop-row">
        <span class="ftl-shop-label">💎 ${T('trader.crystal')}</span>${stockTag(0, true)}
      </div>`;
    }

    // Research-lab intel: always list; locked if no hidden labs or shelf empty/damaged
    const hiddenLabs = (Campaign.hiddenResearchNodes && Campaign.hiddenResearchNodes()) || [];
    const intelPrice = Math.round((Campaign.RESEARCH_INTEL_CREDITS || 1500) * priceMul);
    const intelAllFound = !hiddenLabs.length;
    const intelShelfEmpty = !stck.intel || stck.intel <= 0;
    const intelLocked = lock('intel') || intelAllFound || intelShelfEmpty;
    let intelRow = `
      <div class="ftl-shop-row">
        <span class="ftl-shop-label">🔬 ${T('trader.intel')} ${intelAllFound
          ? stockTag(0, true)
          : stockTag(stck.intel || 0, lock('intel'))}</span>`;
    if (intelAllFound) {
      intelRow += `<span class="ship-tag">${T('trader.intelAllFound')}</span></div>`;
    } else if (lock('intel') || intelShelfEmpty) {
      intelRow += `${stockTag(0, lock('intel') || intelShelfEmpty)}</div>`;
    } else {
      intelRow += `<button class="mini buy" id="base-intel" data-price="${intelPrice}" ${p.credits < intelPrice ? 'disabled' : ''}>${intelPrice.toLocaleString()}</button></div>`;
    }

    return `
      <div class="ftl-shop-row">
        <span class="ftl-shop-label">🎁 ${rewLabel}</span>
        ${giftLocked || claimed ? `<span class="ship-tag">${giftLocked ? T('node.base.damagedTag') : T('mis.claimed')}</span>`
          : `<button class="mini" id="base-claim">${T('node.base.claim')}</button>`}
      </div>
      <div class="ftl-shop-row">
        <span class="ftl-shop-label">${Icons.svg('fuel')} +${Campaign.FUEL_BUY_AMOUNT} ${T('map.fuel')} ${stockTag(stck.fuel, lock('fuel'))}</span>
        ${lock('fuel') || stck.fuel <= 0
          ? ''
          : `<button class="mini buy gem" id="base-fuel" ${(p.gems || 0) < Campaign.FUEL_BUY_GEMS ? 'disabled' : ''}>${Campaign.FUEL_BUY_GEMS} ${Icons.svg('gem')}</button>`}
      </div>
      <div class="ftl-shop-row">
        <span class="ftl-shop-label">${Icons.svg('warp')} ${T('map.warp')} +${Campaign.WARP_SECS}${T('map.sec')} ${stockTag(stck.warp, lock('warp'))}</span>
        ${lock('warp') || stck.warp <= 0
          ? ''
          : `<button class="mini buy" id="base-warp" data-price="${warpPrice}" ${p.credits < warpPrice ? 'disabled' : ''}>${warpPrice.toLocaleString()}</button>`}
      </div>
      <div class="ftl-shop-row">
        <span class="ftl-shop-label">${Icons.svg('sat')} ${T('map.satellite')} ${stockTag(stck.sat, lock('sat'))}</span>
        ${lock('sat') || stck.sat <= 0
          ? ''
          : `<button class="mini buy" id="base-sat" data-price="${satPrice}" ${p.credits < satPrice ? 'disabled' : ''}>${satPrice.toLocaleString()}</button>`}
      </div>
      ${intelRow}
      ${crystalRow}`;
  }
  function traderSellHtml(id) {
    const p = Profile.get();
    const stck = Campaign.ensureBaseStock ? Campaign.ensureBaseStock(id) : { fuelSell: true, fuelSellStock: 3, crystal: null };
    let crystalSell = '';
    if (stck.crystal && stck.crystal.mode === 'sell' && stck.crystal.stock > 0 && !(stck.locked && stck.locked.crystal)) {
      crystalSell = `
      <div class="ftl-shop-row">
        <span class="ftl-shop-label">💎 −${stck.crystal.gems} → ${Icons.svg('credit')} ${stck.crystal.price} <span class="ship-tag">×${stck.crystal.stock}</span></span>
        <button class="mini" id="base-crystal-sell" ${(p.gems || 0) < stck.crystal.gems ? 'disabled' : ''}>${T('trader.sell')}</button>
      </div>`;
    }
    let fuelSell = '';
    if (stck.fuelSell && stck.fuelSellStock > 0) {
      fuelSell = `
      <div class="ftl-shop-row">
        <span class="ftl-shop-label">${Icons.svg('fuel')} −${Campaign.SELL_FUEL_AMOUNT} → ${Icons.svg('credit')} ${Campaign.SELL_FUEL_CREDITS} <span class="ship-tag">×${stck.fuelSellStock}</span></span>
        <button class="mini" id="base-sell-fuel" ${Campaign.fuel() < Campaign.SELL_FUEL_AMOUNT ? 'disabled' : ''}>${T('trader.sell')}</button>
      </div>`;
    }
    return `
      <div class="ftl-shop-row">
        <span class="ftl-shop-label">${Icons.svg('warp')} −${Campaign.SELL_WARP_SECS}${T('map.sec')} → ${Icons.svg('credit')} ${Campaign.SELL_WARP_CREDITS}</span>
        <button class="mini" id="base-sell-warp" ${(p.warp || 0) < Campaign.SELL_WARP_SECS ? 'disabled' : ''}>${T('trader.sell')}</button>
      </div>
      <div class="ftl-shop-row">
        <span class="ftl-shop-label">${Icons.svg('sat')} −1 → ${Icons.svg('credit')} ${Campaign.SELL_SAT_CREDITS}</span>
        <button class="mini" id="base-sell-sat" ${Campaign.satellites() < 1 ? 'disabled' : ''}>${T('trader.sell')}</button>
      </div>
      ${fuelSell}
      ${crystalSell}
      <p class="trader-sell-hint">${T('trader.sellHint')}</p>`;
  }
  function traderBalHtml() {
    const p = Profile.get();
    return `
      <span class="curr curr-gold">${Icons.svg('credit', 16)} ${p.credits.toLocaleString()}</span>
      <span class="curr-sep">|</span>
      <span class="curr curr-gem">${Icons.svg('gem', 16)} ${(p.gems || 0).toLocaleString()}</span>
      <span class="curr-sep">|</span>
      <span class="curr">${Icons.svg('fuel', 14)} ${Campaign.fuel()}</span>
      <span class="curr-sep">|</span>
      <span class="curr">${Icons.svg('warp', 14)} ${p.warp || 0}</span>
      <span class="curr-sep">|</span>
      <span class="curr">${Icons.svg('sat', 14)} ${Campaign.satellites()}</span>`;
  }

  function wireTraderActions(modal, id) {
    const refresh = (speechKey) => {
      // Soft update — no full rebuild, no layout jump
      const body = modal.querySelector('.trader-body');
      const bal = modal.querySelector('.trader-bal');
      if (body) body.innerHTML = traderTab === 'sell' ? traderSellHtml(id) : traderBuyHtml(id);
      if (bal) bal.innerHTML = traderBalHtml();
      modal.querySelectorAll('.trader-tab').forEach(t => t.classList.toggle('on', t.dataset.ttab === traderTab));
      wireTraderActions(modal, id);
      if (speechKey) traderSpeak(modal, speechKey, false);
    };
    const fail = () => traderSpeak(modal, 'fail', true);

    modal.querySelectorAll('[data-ttab]').forEach(b => {
      b.onclick = () => {
        if (b.dataset.ttab === traderTab) return;
        traderTab = b.dataset.ttab;
        refresh(null);
      };
    });
    const claimBtn = modal.querySelector('#base-claim');
    if (claimBtn) claimBtn.onclick = () => {
      const g = Campaign.grantBaseUpgrade(id); Campaign.claimBase(id); Engine.audio.power();
      flash(!g ? T('node.base.full') : g.maxed ? Tf('node.base.gotGold', g.gold)
        : Tf('node.base.got', T('up.' + g.key + '.name', g.key), g.level));
      refresh('buy_claim');
    };
    const fuelBtn = modal.querySelector('#base-fuel');
    if (fuelBtn) fuelBtn.onclick = () => {
      if (Campaign.buyFuelAtBase && Campaign.buyFuelAtBase(id)) { Engine.audio.power(); refresh('buy_fuel'); }
      else if (!Campaign.buyFuelAtBase && Campaign.buyFuel()) { Engine.audio.power(); refresh('buy_fuel'); }
      else { flash(T('shop.needGems')); fail(); }
    };
    const warpBtn = modal.querySelector('#base-warp');
    if (warpBtn) warpBtn.onclick = () => {
      const price = +(warpBtn.dataset.price || Campaign.WARP_CREDITS);
      if (Campaign.buyWarpAtBase && Campaign.buyWarpAtBase(id, price)) { Engine.audio.power(); refresh('buy_warp'); }
      else { flash(T('shop.needGold')); fail(); }
    };
    const satBtn = modal.querySelector('#base-sat');
    if (satBtn) satBtn.onclick = () => {
      const price = +(satBtn.dataset.price || Campaign.SAT_CREDITS);
      if (Campaign.buySatAtBase && Campaign.buySatAtBase(id, price)) { Engine.audio.power(); refresh('buy_sat'); }
      else { flash(T('shop.needGold')); fail(); }
    };
    const intelBtn = modal.querySelector('#base-intel');
    if (intelBtn) intelBtn.onclick = () => {
      const price = +(intelBtn.dataset.price || Campaign.RESEARCH_INTEL_CREDITS || 1500);
      const rid = Campaign.buyResearchIntelAtBase && Campaign.buyResearchIntelAtBase(id, price);
      if (rid != null) {
        pendingResearchFocus = rid;
        try {
          if (Engine.audio.intel) Engine.audio.intel();
          else Engine.audio.sweep(600, 1200, 0.25, 'sine', 0.1);
        } catch (e) {}
        flash(T('trader.intelBought'));
        refresh('buy_intel');
      } else {
        const hidden = Campaign.hiddenResearchNodes ? Campaign.hiddenResearchNodes() : [];
        if (!hidden.length) flash(T('trader.intelAllFound'));
        else flash(T('shop.needGold'));
        fail();
      }
    };
    const crBuy = modal.querySelector('#base-crystal-buy');
    if (crBuy) crBuy.onclick = () => {
      if (Campaign.buyCrystalAtBase && Campaign.buyCrystalAtBase(id)) { Engine.audio.power(); refresh('buy_sat'); }
      else { flash(T('shop.needGold')); fail(); }
    };
    const crSell = modal.querySelector('#base-crystal-sell');
    if (crSell) crSell.onclick = () => {
      if (Campaign.sellCrystalAtBase && Campaign.sellCrystalAtBase(id)) { Engine.audio.power(); refresh('sell_sat'); }
      else { flash(T('trader.needGems')); fail(); }
    };
    const sf = modal.querySelector('#base-sell-fuel');
    if (sf) sf.onclick = () => {
      if (Campaign.sellFuelAtBase && Campaign.sellFuelAtBase(id)) { Engine.audio.power(); refresh('sell_warp'); }
      else { flash(T('trader.needFuel')); fail(); }
    };
    const sw = modal.querySelector('#base-sell-warp');
    if (sw) sw.onclick = () => {
      if (Campaign.sellWarp()) { Engine.audio.power(); refresh('sell_warp'); }
      else { flash(T('trader.needWarp')); fail(); }
    };
    const ss = modal.querySelector('#base-sell-sat');
    if (ss) ss.onclick = () => {
      if (Campaign.sellSatellite()) { Engine.audio.power(); refresh('sell_sat'); }
      else { flash(T('trader.needSat')); fail(); }
    };
  }

  function openBase(id, opts) {
    opts = opts || {};
    const host = el().querySelector('.ftl-full'); if (!host) return;
    if (Campaign.isBaseDestroyed && Campaign.isBaseDestroyed(id)) {
      flash(T('node.base.destroyed'));
      return;
    }
    // First-time coach: tip on the base node BEFORE warehouse (no stack / layout fight)
    if (!opts.force
      && typeof Onboarding !== 'undefined'
      && Onboarding.seen && !Onboarding.seen('base')
      && !el().classList.contains('hidden')) {
      arriveAtBase(id);
      return;
    }
    // Soft-open if same depot already mounted
    let modal = host.querySelector('.trader-modal');
    if (modal && traderOpenId === id && modal.isConnected) {
      const body = modal.querySelector('.trader-body');
      const bal = modal.querySelector('.trader-bal');
      if (body) body.innerHTML = traderTab === 'sell' ? traderSellHtml(id) : traderBuyHtml(id);
      if (bal) bal.innerHTML = traderBalHtml();
      wireTraderActions(modal, id);
      return;
    }

    stopTraderNoise();
    stopTypewriter();
    host.querySelector('.ftl-modal')?.remove();
    traderOpenId = id;
    traderLastAction = '';
    const code = Campaign.traderCode(id);
    const tab = traderTab === 'sell' ? 'sell' : 'buy';

    modal = document.createElement('div');
    modal.className = 'ftl-modal ftl-modal-anim trader-modal';
    modal.dataset.nodeId = String(id);
    modal.innerHTML = `
      <div class="ftl-modal-card ftl-card-anim trader-card">
        <div class="trader-head">
          <div class="trader-bot-wrap">
            <canvas class="trader-bot" width="120" height="120" aria-hidden="true"></canvas>
            <div class="trader-bot-frame"></div>
          </div>
          <div class="trader-id">
            <div class="trader-name">${Tf('trader.unit', code)}</div>
            <div class="trader-sub">${T('trader.tagline')}</div>
          </div>
          <button type="button" class="hub-icon-btn trader-x" id="base-close" aria-label="${T('btn.back')}">✕</button>
        </div>
        <div class="trader-speech" aria-live="polite">
          <div class="trader-speech-label">${T('trader.says')}</div>
          <div class="trader-speech-text"></div>
        </div>
        <div class="trader-tabs">
          <button type="button" class="trader-tab ${tab === 'buy' ? 'on' : ''}" data-ttab="buy">${T('trader.buy')}</button>
          <button type="button" class="trader-tab ${tab === 'sell' ? 'on' : ''}" data-ttab="sell">${T('trader.sell')}</button>
        </div>
        <div class="trader-bal curr-row">${traderBalHtml()}</div>
        <div class="trader-body">${tab === 'sell' ? traderSellHtml(id) : traderBuyHtml(id)}</div>
        <button class="btn btn-cta set-wide" id="base-done">${T('btn.done')}</button>
      </div>`;
    host.appendChild(modal);

    const botCv = modal.querySelector('.trader-bot');
    paintTraderBot(botCv, code);
    traderNoiseTimer = setInterval(() => {
      if (!botCv.isConnected) return stopTraderNoise();
      paintTraderBot(botCv, code);
    }, 90);

    // Greeting type-in once on open
    traderSpeak(modal, 'greet', true);
    wireTraderActions(modal, id);

    // Scope = base while warehouse is open (dismiss map tips). Tip is shown
    // BEFORE the modal via arriveAtBase — never stacked on the trader card.
    if (typeof Onboarding !== 'undefined' && Onboarding.enter) Onboarding.enter('base');

    const closeTrader = () => {
      if (typeof Onboarding !== 'undefined' && Onboarding.enter) Onboarding.enter('map');
      stopTraderNoise(); stopTypewriter();
      traderOpenId = null; traderLastAction = '';
      const focusId = pendingResearchFocus;
      pendingResearchFocus = null;
      modal.remove();
      // Show newly purchased lab on the map, then pan the camera to it
      render();
      if (focusId != null) {
        requestAnimationFrame(() => focusResearchReveal(focusId));
      }
    };
    modal.querySelector('#base-close').onclick = closeTrader;
    modal.querySelector('#base-done').onclick = closeTrader;
  }

  /**
   * After buying research intel: pan to the lab + highlight so the player sees it.
   */
  function focusResearchReveal(nodeId) {
    const m = Campaign.map();
    const node = m && m.byId[nodeId];
    if (!node) return;
    const cx = node.x + PADX, cy = node.y + PADY;
    const vp = el().querySelector('#ftl-vp');
    if (vp) keepScroll = { l: cx - vp.clientWidth / 2, t: cy - vp.clientHeight / 2 };
    const runFocus = () => {
      clearCoachNodeFocus();
      let nodeEl = el().querySelector(`.ftl-node[data-node="${nodeId}"]`);
      if (nodeEl) {
        nodeEl.classList.add('coach-map-focus', 'ftl-intel-reveal');
        const dot = nodeEl.querySelector('.ftl-dot');
        if (dot) dot.classList.add('coach-map-focus-dot');
        setTimeout(() => {
          nodeEl.classList.remove('ftl-intel-reveal');
          // keep coach pulse briefly then clear
          setTimeout(() => {
            if (nodeEl) nodeEl.classList.remove('coach-map-focus');
            if (dot) dot.classList.remove('coach-map-focus-dot');
          }, 1800);
        }, 2200);
      }
      flash(T('trader.intelFocus'));
      Engine.audio.blip(880, 0.08, 'sine', 0.09);
    };
    if (typeof panCameraTo === 'function') {
      panCameraTo(cx, cy, 720).then(() => {
        if (vp) keepScroll = { l: vp.scrollLeft, t: vp.scrollTop };
        runFocus();
      });
    } else {
      if (vp) {
        vp.scrollTo({
          left: cx - vp.clientWidth / 2,
          top: cy - vp.clientHeight / 2,
          behavior: 'smooth',
        });
      }
      setTimeout(runFocus, 400);
    }
  }

  /** Debounce concurrent arriveAtBase (dock + openBase tip redirect). */
  let baseArrivePendingId = null;

  /**
   * After docking / return to a supply base: coach tip first (once), then warehouse.
   * Avoids tip + trader modal fighting for layout on first visit.
   */
  function arriveAtBase(id) {
    if (el().classList.contains('hidden')) return;
    if (id == null) return;
    if (baseArrivePendingId === id) return;
    baseArrivePendingId = id;
    suppressMapTipOnce = true;
    try {
      if (typeof Onboarding !== 'undefined' && Onboarding.hide) Onboarding.hide({ drain: false });
      if (typeof Onboarding !== 'undefined' && Onboarding.enter) Onboarding.enter('map');
    } catch (e) {}

    const openShop = () => {
      baseArrivePendingId = null;
      if (el().classList.contains('hidden')) return;
      if (traderOpenId === id && el().querySelector('.trader-modal')) return;
      openBase(id, { force: true });
    };

    const needTip = typeof Onboarding !== 'undefined'
      && Onboarding.seen && !Onboarding.seen('base');

    if (!needTip) {
      setTimeout(openShop, 380);
      return;
    }

    // Tip on the base node (map scope) → when dismissed, open warehouse
    coachTipOnNode('base', 'base', 'tip.base', {
      icon: Icons.svg('wrench', 18), ms: 5200, place: 'below',
      onDone: openShop,
    });
    // Safety: if tip never fires (missing node), still open shop
    setTimeout(() => {
      if (el().classList.contains('hidden')) { baseArrivePendingId = null; return; }
      if (traderOpenId === id) { baseArrivePendingId = null; return; }
      if (typeof Onboarding !== 'undefined' && Onboarding.seen && !Onboarding.seen('base')) {
        try { Onboarding.mark('base'); } catch (e) {}
      }
      if (traderOpenId !== id) openShop();
      else baseArrivePendingId = null;
    }, 7000);
  }

  // Out of fuel → RESCUE moment: offer an emergency gem refuel (works anywhere,
  // this is the monetization beat) or wipe this difficulty's campaign
  // (ships / credits / gems are kept). Blocking modal on the map.
  /**
   * Out of options. Reached when no open edge is affordable — NOT merely when
   * the tank hits zero (see Campaign.stranded).
   *
   * The card states the arithmetic outright (tank vs cheapest jump) because the
   * player's first reaction is "why can't I move, I still have fuel". Wiping the
   * campaign is the last resort and is kept behind a confirm: it used to be a
   * single tap sitting next to two harmless buttons.
   */
  /**
   * The fuel wall, in two flavours:
   *   stuck  — no affordable move exists at all (Campaign.stranded)
   *   short  — this PARTICULAR jump is out of reach, but others may not be
   *
   * Both offer the same refuel routes; only the stuck version carries the
   * campaign wipe. Routing the "can't afford this jump" case here instead of a
   * one-line toast is the safety net: the moment a player runs low they are
   * offered fuel, rather than discovering at 0 that the run is over.
   */
  function showFuelWall(opts) {
    opts = opts || {};
    const stuck = !!opts.stuck;
    const host = el().querySelector('.ftl-full'); if (!host) return;
    host.querySelector('.ftl-modal')?.remove();
    try { if (typeof Onboarding !== 'undefined' && Onboarding.clearAll) Onboarding.clearAll(); } catch (e) {}
    const gems = Profile.get().gems || 0;
    const canBuy = gems >= Campaign.FUEL_BUY_GEMS;
    const adOk = (typeof Store !== 'undefined') && Store.rewardedAvailable();
    const tank = Campaign.fuel();
    const need = opts.need != null ? opts.need : Campaign.cheapestExit();
    const modal = document.createElement('div');
    modal.className = 'ftl-modal ftl-modal-anim strand-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    // A refuel is only an escape if it actually clears the jump in question.
    const refuelFrees = need != null && (tank + Campaign.FUEL_BUY_AMOUNT) >= need;
    modal.innerHTML = `
      <div class="ftl-modal-card ftl-card-anim strand-card ${stuck ? '' : 'short'}">
        <div class="disk-read-title strand-title">${Icons.svg('fuel', 20)} ${T(stuck ? 'map.stranded' : 'map.needFuelTitle')}</div>
        <p class="loadout-full-body strand-desc">${T(stuck ? 'map.strandedDesc' : 'map.needFuelDesc')}</p>
        <div class="strand-gauge">
          <div class="strand-row">
            <span class="strand-k">${T('map.fuel')}</span>
            <b class="strand-v low">${tank}</b>
          </div>
          <div class="strand-row">
            <span class="strand-k">${T(stuck ? 'map.strandNeed' : 'map.needFuelJump')}</span>
            <b class="strand-v">${need == null ? '—' : need}</b>
          </div>
        </div>
        <p class="hg-hint strand-hint">${need == null ? T('map.strandNoRoute') : Tf('map.strandShort', Math.max(1, need - tank))}</p>
        <div class="strand-actions">
          ${adOk ? `<button class="btn btn-cta set-wide" id="strand-ad">▶ ${Tf('map.adRefuel', Campaign.FUEL_BUY_AMOUNT)}</button>` : ''}
          ${canBuy ? `<button class="btn ${adOk ? 'btn-ghost' : 'btn-cta'} set-wide" id="strand-buy">
              ${Icons.svg('fuel')} +${Campaign.FUEL_BUY_AMOUNT} — ${Campaign.FUEL_BUY_GEMS} ${Icons.svg('gem')}</button>` : ''}
          ${!canBuy && !adOk ? `<p class="hg-hint strand-hint">${T('map.strandNoHelp')}</p>` : ''}
          ${refuelFrees ? '' : `<p class="hg-hint strand-hint">${T('map.strandRefuelShort')}</p>`}
          ${stuck
            ? `<button class="btn btn-ghost set-wide" id="strand-hub">${T('map.strandToHub')}</button>
               <button class="btn ${(canBuy || adOk) ? 'btn-ghost' : 'btn-danger'} set-wide" id="strand-ok">${T('map.newCampaign')}</button>
               <p class="strand-confirm hidden" id="strand-confirm">${T('map.strandConfirm')}</p>`
            : `<button class="btn btn-ghost set-wide" id="strand-close">${T('btn.back')}</button>`}
        </div>
      </div>`;
    host.appendChild(modal);
    const done = () => { modal.remove(); render(); };
    const ad = modal.querySelector('#strand-ad');
    if (ad) ad.onclick = () => {
      ad.disabled = true;
      Store.showRewarded('refuel', () => {
        Campaign.addFuel(Campaign.FUEL_BUY_AMOUNT); Engine.audio.power(); done();
      }).then(ok => { if (!ok) ad.disabled = false; });
    };
    const buy = modal.querySelector('#strand-buy');
    if (buy) buy.onclick = () => { if (Campaign.buyFuel()) { Engine.audio.power(); done(); } };
    const closeBtn = modal.querySelector('#strand-close');
    if (closeBtn) closeBtn.onclick = () => modal.remove();
    // Leaving to the hub does not fix anything, but the player may want to spend
    // gems in the shop and come back — so it must not be a dead end either.
    const hub = modal.querySelector('#strand-hub');
    if (hub) hub.onclick = () => { modal.remove(); close(); };
    const ok = modal.querySelector('#strand-ok');
    if (!ok) return;
    let armed = false;
    ok.onclick = () => {
      if (!armed) {
        armed = true;
        ok.classList.remove('btn-ghost');
        ok.classList.add('btn-danger');
        ok.textContent = T('map.strandWipeConfirm');
        modal.querySelector('#strand-confirm').classList.remove('hidden');
        Engine.audio.deny();
        return;
      }
      Campaign.failCampaign(); Engine.audio.gameover(); done();
    };
  }
  function showStranded() { showFuelWall({ stuck: true }); }
  /** A specific jump is unaffordable — offer fuel instead of a dead-end toast. */
  function showNeedFuel(need) { Engine.audio.deny(); showFuelWall({ stuck: false, need }); }

  // Drag-to-pan. Re-wires cleanly each render via AbortController (old bug:
  // stacking listeners every re-render made the camera jerk / snap).
  function wirePan() {
    const vp = el().querySelector('#ftl-vp');
    if (!vp) return;
    if (vp._panAbort) { try { vp._panAbort.abort(); } catch (e) {} }
    const ac = new AbortController();
    vp._panAbort = ac;
    const opt = { signal: ac.signal, passive: false };
    let dragging = false, pointerId = null, sx = 0, sy = 0, sl = 0, stp = 0, moved = false;

    // Relay edge arrow tracks viewport (cheap re-place on scroll/pan)
    let arrowRaf = 0;
    const onScroll = () => {
      if (arrowRaf) return;
      arrowRaf = requestAnimationFrame(() => {
        arrowRaf = 0;
        const mm = Campaign.map();
        if (!mm) return;
        updateRelayEdgeArrow(mm, x => x + PADX, y => y + PADY);
      });
    };
    vp.addEventListener('scroll', onScroll, { signal: ac.signal, passive: true });

    vp.addEventListener('pointerdown', e => {
      if (flying) return;
      if (e.button != null && e.button !== 0) return;
      // Allow node buttons to receive the click; only pan from empty chrome
      if (e.target.closest && e.target.closest('.ftl-node[data-node], .ftl-node-depot, .ftl-node-pop, button, .ftl-modal, .ftl-relay-arrow')) return;
      dragging = true; moved = false; pointerId = e.pointerId;
      sx = e.clientX; sy = e.clientY; sl = vp.scrollLeft; stp = vp.scrollTop;
      vp.classList.add('grabbing');
      try { vp.setPointerCapture(e.pointerId); } catch (err) {}
    }, opt);

    vp.addEventListener('pointermove', e => {
      if (!dragging || (pointerId != null && e.pointerId !== pointerId)) return;
      const dx = e.clientX - sx, dy = e.clientY - sy;
      if (!moved && Math.hypot(dx, dy) > 8) moved = true;
      if (moved) {
        e.preventDefault();
        vp.scrollLeft = sl - dx;
        vp.scrollTop = stp - dy;
      }
    }, opt);

    const endDrag = e => {
      if (!dragging) return;
      if (pointerId != null && e && e.pointerId != null && e.pointerId !== pointerId) return;
      dragging = false; pointerId = null; vp.classList.remove('grabbing');
      if (moved) {
        suppressClickUntil = Date.now() + 280;
        // Persist pan so a later re-render doesn't jump
        keepScroll = { l: vp.scrollLeft, t: vp.scrollTop };
        pendingCenter = false;
      }
    };
    vp.addEventListener('pointerup', endDrag, opt);
    vp.addEventListener('pointercancel', endDrag, opt);
  }

  function renderDetail(id) {
    const m = Campaign.map();
    const n = m.byId[id];
    const isBase = n.type === 'base', isBoss = n.type === 'boss';
    const isRelay = n.type === 'relay', isResearch = n.type === 'research';
    const label = T('node.' + n.type, n.type);
    const name = isBoss ? T('boss.' + n.boss + '.name', n.boss)
      : isBase ? T('node.base.name')
      : isRelay ? T('node.relay.name')
      : isResearch ? T('node.research.name')
      : T('world.' + n.palette + '.name', n.palette.toUpperCase());
    const action = isBase ? T('node.dock')
      : isRelay ? T('node.relay.engage')
      : isResearch ? T('node.research.engage')
      : T('node.engage');
    const path = findPath(m, Campaign.currentId(), id);
    const cost = path ? pathFuel(m, path) : travelEdgeCost(m, Campaign.currentId(), id);
    const hops = path ? path.length - 1 : 1;
    const nv = NODE_VOX[n.type] || NODE_VOX.combat;
    const destroyed = isBase && Campaign.isBaseDestroyed && Campaign.isBaseDestroyed(id);
    const damaged = isBase && !destroyed && Campaign.isBaseDamaged(id);
    const lost = isBase && Campaign.baseNodeLoss ? Campaign.baseNodeLoss(id) : 0;
    let desc;
    if (isBase) {
      desc = destroyed ? T('node.base.descDestroyed')
        : damaged ? T('node.base.descDamaged')
        : lost >= 3 ? T('node.base.descPartial')
        : T('node.base.desc');
    } else if (isRelay) desc = T('node.relay.desc');
    else if (isResearch) desc = T('node.research.desc');
    else if (isBoss) desc = T('node.boss.desc');
    else desc = Tf('node.combat.desc', n.waves, T('boss.' + n.boss + '.name', n.boss));

    el().innerHTML = `
      <div class="ftl-full ftl-detail-wrap ftl-modal-anim">
        <div class="map-detail ftl-card-anim ${isBoss ? 'ultra' : ''} ${isBase ? 'base' : ''} ${isRelay ? 'relay' : ''} ${isResearch ? 'research' : ''}">
          <div class="map-dthumb"><img class="ftl-vox" src="${VoxUI.voxThumb(nv.key, 72, { k: nv.k })}" alt=""></div>
          <div class="map-dsector">${label}</div>
          <div class="map-dname">${name}${destroyed ? ' ' + Icons.svg('skull', 13) : damaged ? ' ' + Icons.svg('radiation', 13) : ''}</div>
          <div class="map-dstars">${T('map.difficulty')}: <span class="stars">${stars(n.diff || 1)}</span></div>
          <div class="map-dhaz">${nodeTags(n) || `<span class="hz hz-none">${T('haz.none')}</span>`}</div>
          <div class="map-ddesc">${desc}</div>
          ${isBase ? (() => {
            if (destroyed) return `<div class="map-dreward">${Icons.svg('skull', 13)} ${T('node.base.destroyed')}</div>`;
            if (damaged || lost >= 4) return `<div class="map-dreward">⚠ ${T('node.base.damaged')}</div>`;
            const rew = Campaign.baseReward(id);
            const lbl = !rew ? T('node.base.full') : rew.maxed ? `${Icons.svg('credit')} ${rew.gold}`
              : `${Icons.svg('statUpg', 14)} ${T('up.' + rew.key + '.name')} → ${T('map.lv')}${rew.level}`;
            const stockNote = lost >= 3 ? `<div class="map-dreward">📦 ${T('node.base.stockDamaged')}</div>` : '';
            return `<div class="map-dreward">🎁 ${lbl}</div>${stockNote}`;
          })() : ''}
          ${isResearch ? `<div class="map-dreward">🔬 ${T('node.research.reward')}</div>` : ''}
          ${n.part && !(Profile.get().shipParts || []).includes(n.part) ? `<div class="map-dpart">${Icons.svg('wrench', 13)} ${Tf('ship.part.here', T('ship.aegis.name'))}</div>` : ''}
          <div class="map-dcost">${Icons.svg('fuel')} ${T('map.jumpCost')}: <b>${cost}</b>
            ${hops > 1 ? ` · ${Tf('map.hops', hops)}` : ''}
            · ${T('map.fuel')} ${Campaign.fuel()}</div>
          <button id="map-launch" class="btn set-wide ${isBoss || isRelay || isResearch ? 'btn-danger' : ''}" ${!path || destroyed ? 'disabled' : ''}>${destroyed ? T('node.base.destroyed') : action}</button>
          <button id="map-detback" class="btn btn-ghost set-wide">${T('map.back')}</button>
        </div>
      </div>`;
    el().querySelector('#map-launch').onclick = () => {
      if (!path || path.length < 2) { flash(T('map.noPath')); return; }
      if (Campaign.fuel() < cost) { showNeedFuel(cost); return; }
      selected = -1;
      // Back to map so the ship can cruise the route, then hyperspace into combat
      render();
      requestAnimationFrame(() => {
        if (!Campaign.spendFuel(cost)) { showNeedFuel(cost); return; }
        flyPath(path, {
          commit: false,
          onDone: () => {
            prepWarpClean();
            const launch = () => {
              onClose = null;
              el().classList.add('hidden');
              // ensure no map chrome survives into the battle frame
              stopMapAnim(); stopTraderNoise();
              Engine.audio.power();
              Game.engageStage(n);
            };
            if (typeof FXTrans !== 'undefined') FXTrans.go({ style: 'warp', run: launch });
            else launch();
          },
        });
      });
    };
    el().querySelector('#map-detback').onclick = () => { selected = -1; render(); };
  }

  // openBase is triggered from Game (on docking arrival) and by clicking a parked base.
  function openBaseExternal(id) { if (el().classList.contains('hidden')) return; openBase(id); }
  function arriveAtBaseExternal(id) { if (el().classList.contains('hidden')) return; arriveAtBase(id); }

  return { open, close, render, openBase: openBaseExternal, arriveAtBase: arriveAtBaseExternal,
    // exposed so promo/_node_ring_sheet.py renders the REAL layout rather
    // than a copy of the formula that can drift away from it
    _ringHtml: ringHtml };
})();
