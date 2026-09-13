/* ============================================================
 * hangar.js — Hangar / loadout bay.
 *
 * Information architecture (pre-release, mobile-first):
 *   1) Sticky chrome: back + title + resources
 *   2) Dual context strip: active SHIP + active BASE GUN
 *   3) Segmented TABS:
 *        fleet    — ships+systems | weapons (primary / special)
 *        defense  — turrets+systems | special (base supers)
 *        modules  — Aegis / future modules
 *        archives — story disks + research notes
 *   4) Panel body scrolls under chrome; OK footer
 *
 * Legacy tab ids: 'systems'→fleet ships, 'armory'→fleet weapons, 'modules' stays modules.
 * ============================================================ */
const Hangar = (() => {
  const el = () => document.getElementById('hangar');
  let onClose = null;
  /** Active bay tab — survives re-renders within a session. */
  let tab = 'fleet';
  /** Fleet inner: ships | weapons */
  let fleetSub = 'ships';
  /**
   * Fleet gallery page. Every ship card carries a LIVE voxel hull, and the row
   * used to render all six at once — six hulls turning thirty times a second,
   * five of them off the side of a scroll strip nobody was looking at. It is
   * paged now: two on screen, arrows to the rest, and the cards that are not
   * on the page are not in the DOM at all, so there is nothing left to animate.
   *
   * null means "follow the active ship". Any re-render (buying an upgrade,
   * equipping, switching a sub-tab) keeps the page the player is on — the row
   * used to snap back to the first ship on every purchase because the scroll
   * position died with the innerHTML that held it.
   */
  let fleetPage = null;
  const FLEET_PER_PAGE = 2;
  /** Weapons inner: primary | special */
  let weaponSub = 'primary';
  /** Defense inner: turrets | special */
  let defenseSub = 'turrets';

  const TABS = [
    { id: 'fleet',    key: 'hangar.tab.fleet' },
    // Defense bay is post-release DLC (360° orbit). Hidden until then.
    { id: 'modules',  key: 'hangar.tab.modules' },
    // Observation Deck: showcase + cosmetics + archive. The archive used to be a
    // top-level tab of its own; the hangar was already overloaded, and reading
    // logs sits far better next to "look at your ship" than next to "buy upgrades".
    { id: 'deck',     key: 'hangar.tab.deck' },
  ];
  /** Deck inner: view | archive (cosmetics live INSIDE view, under the turntable) */
  let deckSub = 'view';
  /** Which cosmetic slot the view's swatch grid is showing */
  let paintSlot = 'paint';
  /** Deck element tabs: the three colour slots plus the animated FX bay. */
  const DECK_SLOTS = ['paint', 'glow', 'trail', 'fx'];
  let diskReadId = null;   // open disk reader overlay inside hangar
  let rlogReadId = null;   // research log reader

  // Vector icons matching hub language (unique per system / weapon-stat).
  const SYS_ICON = {
    hull: 'statHull', weapons: 'statGun', ordnance: 'upAim', munitions: 'upBomb',
    magnet: 'upMagnet', salvage: 'credit', firerate: 'upFlame', regen: 'upRegen',
    luck: 'upLuck', revive: 'upHeart', pierce: 'upPierce', crit: 'upCrit', guard: 'upGuard',
    modules: 'statUpg',
  };
  /** Selected module key for hangar bay placement (click-to-place). */
  let modulePick = null;
  /** Module catalogue filter: 'all' | 'combat' | 'support' | 'salvage' */
  let modCat = 'all';
  const WSTAT_ICON = { aim: 'upAim', dmg: 'statGun', rate: 'upFlame' };
  const GUN_ICON = { power: 'statGun', cycle: 'upFlame', optics: 'upAim', bays: 'statUpg' };
  const sysIcon = (key, s) => Icons.svg(SYS_ICON[key] || 'statUpg', s || 22);
  const wstatIcon = (key, s) => Icons.svg(WSTAT_ICON[key] || 'statUpg', s || 20);
  const gunIcon = (key, s) => Icons.svg(GUN_ICON[key] || 'statGun', s || 20);
  // Module icons — Meta.moduleIconKey → Icons (same as combat HUD + map fuel)
  const modIcon = (key, s) => {
    const ik = (Meta.moduleIconKey && Meta.moduleIconKey(key))
      || (Meta.moduleByKey[key] && Meta.moduleByKey[key].iconKey);
    if (ik && typeof Icons !== 'undefined' && Icons.svg) return Icons.svg(ik, s || 22);
    const def = Meta.moduleByKey && Meta.moduleByKey[key];
    return def ? def.icon : Icons.svg('module', 16);
  };

  function normalizeTab(t) {
    if (t === 'systems') { fleetSub = 'ships'; return 'fleet'; }
    if (t === 'armory') { fleetSub = 'weapons'; return 'fleet'; }
    // legacy deep-links (disk prompts, old saves) still say 'archives'
    if (t === 'archives') { deckSub = 'archive'; return 'deck'; }
    if (TABS.some(x => x.id === t)) return t;
    return 'fleet';
  }

  function open(cb, opts) {
    // open(cb) or open(cb, { tab, disk }) — disk prompt jumps to archives reader
    if (cb && typeof cb === 'object' && !opts) { opts = cb; cb = null; }
    opts = opts || {};
    onClose = cb || null;
    tab = normalizeTab(opts.tab || 'fleet');
    // Entering the hangar always lands on the ship you are flying; only moves
    // made INSIDE the gallery are remembered while it stays open.
    fleetPage = null;
    if (opts.fleetSub === 'ships' || opts.fleetSub === 'weapons') fleetSub = opts.fleetSub;
    if (opts.weaponSub === 'primary' || opts.weaponSub === 'special') weaponSub = opts.weaponSub;
    if (opts.defenseSub === 'turrets' || opts.defenseSub === 'special') defenseSub = opts.defenseSub;
    diskReadId = opts.disk || null;
    rlogReadId = opts.rlog || null;
    if (typeof Onboarding !== 'undefined' && Onboarding.enter) Onboarding.enter('hangar');
    render();
    el().classList.remove('hidden');
    if (typeof Onboarding !== 'undefined') {
      setTimeout(() => {
        if (el().classList.contains('hidden')) return;
        const anchor = el().querySelector('#hg-tab-fleet') ? '#hg-tab-fleet'
          : el().querySelector('.hg-tabs') ? '.hg-tabs' : '.hg-body';
        Onboarding.tip('hangar', 'tip.hangar', {
          icon: Icons.svg('wrench', 18), ms: 6500,
          anchor, place: 'below', scope: 'hangar',
        });
      }, 280);
    }
  }
  function close() {
    stopDeckView();   // the deck turntable owns its own rAF — never leave it running
    el().classList.add('hidden');
    if (onClose) { const c = onClose; onClose = null; c(); }
  }

  /** Compact segmented control used inside fleet / weapons / defense. */
  function subtabsHtml(id, items, active) {
    return `<div class="hg-subtabs" role="tablist" data-subtabs="${id}">
      ${items.map(it => `
        <button type="button" class="hg-subtab ${active === it.id ? 'on' : ''}" role="tab"
          data-sub="${id}" data-subval="${it.id}" aria-selected="${active === it.id}">
          ${T(it.key)}${it.dot ? '<span class="hg-tab-dot"></span>' : ''}
        </button>`).join('')}
    </div>`;
  }

  /**
   * A price is ONE unit: coin/gem glued to its number.
   *
   * An inline <svg> is a line-break opportunity, so "ОТКРЫТЬ ⬥11000" wrapped
   * between the icon and the digits and left the coin stranded at the end of the
   * first line — that is the "кнопки кривовата / выходят за пределы блока"
   * report. Wrapping the pair in a nowrap inline-flex lets the label break
   * before the price instead of inside it.
   */
  const priceChip = (icoKey, amount) =>
    `<span class="price-chip">${Icons.svg(icoKey)}<b>${amount}</b></span>`;
  const priceLabel = info => info.currency === 'gems'
    ? priceChip('gem', info.amount)
    : `${info.amount.toLocaleString()}`;
  const canAfford = (info, p) => info.currency === 'gems' ? (p.gems || 0) >= info.amount : p.credits >= info.amount;
  /** Level pips: spent + empty up to max (max always visible). */
  const pipRow = (lv, max, small) => `<div class="up-pips ${small ? 'small' : ''}" title="${lv}/${max}">` +
    Array.from({ length: max }, (_, i) => `<span class="pip ${i < lv ? 'on' : ''}"></span>`).join('') +
    `<span class="pip-max">${lv}/${max}</span></div>`;

  /**
   * Shared mastery XP track — weapons / supers / def supers.
   * Shows full bar with tier notches, spent/open/locked slots, available pts badge.
   */
  function xpTrackHtml(prog, opts) {
    if (!prog) return '';
    opts = opts || {};
    const used = prog.used | 0;
    const unlocked = (prog.unlocked != null ? prog.unlocked : prog.cap) | 0;
    const max = Math.max(1, prog.max | 0);
    const avail = Math.max(0, prog.available != null ? prog.available : (unlocked - used));
    const maxed = used >= max;
    const markers = prog.markers || [];
    const ticks = markers.map(m => {
      const cls = m.spent ? 'spent' : (m.open ? 'open' : (m.unlocked ? 'ready' : 'locked'));
      return `<i class="xp-tick ${cls}" style="left:${m.pct}%" title="${m.xp}"></i>`;
    }).join('');
    const slots = Array.from({ length: max }, (_, i) => {
      let cls = 'locked';
      if (i < used) cls = 'spent';
      else if (i < unlocked) cls = 'open';
      return `<span class="xp-slot ${cls}"></span>`;
    }).join('');
    const ptsBadge = maxed
      ? `<span class="xp-pts max">${T('btn.max')}</span>`
      : (avail > 0
        ? `<span class="xp-pts ready">${Tf('hangar.xpPts', avail)}</span>`
        : `<span class="xp-pts wait">${T('hangar.xpWait')}</span>`);
    const nextLine = maxed
      ? T('hangar.xpCap')
      : (avail > 0
        ? Tf('hangar.xpReady', avail, max)
        : Tf('hangar.xpNext', prog.nextNeed | 0));
    return `<div class="xp-track ${avail > 0 ? 'has-pts' : ''} ${maxed ? 'maxed' : ''}">
      <div class="xp-track-head">
        <span class="xp-track-title">${opts.title || T('hangar.xp')}</span>
        ${ptsBadge}
      </div>
      <div class="xp-track-bar" role="progressbar" aria-valuenow="${Math.round(prog.overallPct || prog.pct || 0)}" aria-valuemin="0" aria-valuemax="100">
        <div class="xp-track-fill" style="width:${(prog.overallPct != null ? prog.overallPct : prog.pct) || 0}%"></div>
        <div class="xp-track-ticks">${ticks}</div>
      </div>
      <div class="xp-track-slots" title="${Tf('hangar.xpSlots', used, unlocked, max)}">${slots}</div>
      <div class="xp-track-lbl">
        <span>${T('hangar.xp')}: <b>${prog.xp | 0}</b></span>
        <span>${nextLine}</span>
        <span class="xp-track-ratio">${used}/${max}</span>
      </div>
    </div>`;
  }

  function shipProgress(p, shipKey) {
    const shipLv = Meta.shipUpgrades(p, shipKey);
    const tree = Meta.shipTree(shipKey);
    const upTotal = tree.reduce((a, { def }) => a + (shipLv[def.key] || 0), 0);
    const upMax = tree.reduce((a, { max }) => a + max, 0);
    return { shipLv, tree, upTotal, upMax };
  }

  function gunProgress(p, gunKey) {
    gunKey = gunKey || Meta.equippedGun(p);
    const gunLv = Meta.gunUpgrades(p, gunKey);
    const tree = Meta.gunTree(gunKey);
    const upTotal = tree.reduce((a, { def }) => a + (gunLv[def.key] || 0), 0);
    const upMax = tree.reduce((a, { max }) => a + max, 0);
    return { gunLv, tree, upTotal, upMax };
  }

  function canBuyAnyShipUpg(p) {
    const { shipLv, tree } = shipProgress(p, p.ship);
    return tree.some(({ def, max }) => {
      const lv = shipLv[def.key] || 0;
      if (lv >= max) return false;
      return canAfford(Meta.shipBuyInfo(def.key, lv), p);
    });
  }
  function canUnlockAnyShip(p) {
    return Meta.SHIPS.some(s => !p.ownedShips.includes(s.key) && !s.story && p.credits >= s.cost);
  }
  function canTrainAnyWeapon(p) {
    return Meta.WEAPON_ROSTER.some(w => {
      if (!Meta.weaponUnlocked(w.key, p)) return false;
      return Meta.WEAPON_UPG_ORDER.some(stat => {
        const d = Meta.WEAPON_UPGRADES[stat];
        const lv = Meta.weaponUpgLv(p, w.key, stat);
        if (lv >= d.max) return false;
        if (!Meta.canTrainWeaponStat(p, w.key, stat)) return false;
        return canAfford(Meta.weaponBuyInfo(stat, lv), p);
      });
    });
  }
  function canTrainAnySuper(p) {
    return Meta.SUPER_ROSTER.some(s => {
      if (!Meta.canBuySuper(p, s.key)) return false;
      return canAfford(Meta.superBuyInfo(Meta.superBuyLv(p, s.key), s.key), p);
    });
  }
  function canUnlockAnyGun(p) {
    return Meta.BASE_GUNS.some(g => !Meta.ownedGuns(p).includes(g.key) && g.cost > 0 && p.credits >= g.cost);
  }
  function canBuyAnyGunUpg(p) {
    const key = Meta.equippedGun(p);
    const { gunLv, tree } = gunProgress(p, key);
    return tree.some(({ def, max }) => {
      const lv = gunLv[def.key] || 0;
      if (lv >= max) return false;
      return canAfford(Meta.gunBuyInfo(def.key, lv), p);
    });
  }
  function canTrainAnyDefSuper(p) {
    return Meta.DEF_SUPER_ROSTER.some(s => {
      if (!Meta.canBuyDefSuper(p, s.key)) return false;
      return canAfford(Meta.defSuperBuyInfo(Meta.defSuperBuyLv(p, s.key)), p);
    });
  }

  /* ---------- panels ---------- */
  /** Page the active ship sits on — where the gallery opens by default. */
  function activeFleetPage(p) {
    const i = Meta.SHIPS.findIndex(s => s.key === p.ship);
    return i < 0 ? 0 : Math.floor(i / FLEET_PER_PAGE);
  }
  function fleetPages() { return Math.max(1, Math.ceil(Meta.SHIPS.length / FLEET_PER_PAGE)); }

  function renderFleet(p) {
    const pages = fleetPages();
    if (fleetPage == null) fleetPage = activeFleetPage(p);
    fleetPage = Math.max(0, Math.min(pages - 1, fleetPage));
    const from = fleetPage * FLEET_PER_PAGE;
    const ships = Meta.SHIPS.slice(from, from + FLEET_PER_PAGE).map(s => {
      const owned = p.ownedShips.includes(s.key);
      const selected = p.ship === s.key;
      const state = selected ? 'sel' : owned ? 'own' : 'locked';
      const { upTotal, upMax } = owned ? shipProgress(p, s.key) : { upTotal: 0, upMax: 0 };
      let action;
      if (owned) {
        action = selected
          ? `<span class="ship-tag">${T('btn.equipped')}</span>`
          : `<button class="mini" data-equip="${s.key}">${T('btn.equip')}</button>`;
      } else if (s.story) {
        const parts = (p.shipParts || []).length;
        action = `<span class="ship-tag story">${Icons.svg('wrench', 13)} ${parts}/${Meta.SHIP_PARTS}</span>`;
      } else {
        action = `<button class="mini buy nocoin" data-unlock="${s.key}" ${p.credits < s.cost ? 'disabled' : ''}>${T('btn.unlock')} ${priceChip('credit', s.cost)}</button>`;
      }
      return `<div class="ship-card glass-card ${state} ${s.story ? 'story' : ''}" data-shipcard="${s.key}">
          <canvas class="ship-anim card-anim" data-voxship="${s.key}" width="76" height="66"></canvas>
          <div class="ship-name">${T('ship.' + s.key + '.name', s.name)}</div>
          <div class="ship-blurb">${T('ship.' + s.key + '.blurb', s.blurb)}</div>
          ${owned ? `<div class="ship-meta">${Icons.svg('statUpg', 14)} ${upTotal}/${upMax}</div>` : ''}
          ${action}
        </div>`;
    }).join('');

    // Systems for the active ship (merged into fleet — no separate tab)
    const ship = Meta.shipByKey[p.ship] || Meta.SHIPS[0];
    const { shipLv, tree, upTotal, upMax } = shipProgress(p, p.ship);
    const upgrades = tree.map(({ def: u, max }) => {
      const lv = shipLv[u.key] || 0, maxed = lv >= max;
      const info = maxed ? null : Meta.shipBuyInfo(u.key, lv);
      const btn = maxed ? `<span class="ship-tag">${T('btn.max')}</span>`
        : `<button class="mini buy ${info.currency === 'gems' ? 'gem' : ''}" data-shipupg="${u.key}" ${!canAfford(info, p) ? 'disabled' : ''}>${priceLabel(info)}</button>`;
      return `<div class="up-card glass-card ${maxed ? 'maxed' : ''}">
          <div class="up-top"><span class="up-icon">${sysIcon(u.key)}</span><span class="up-name">${T('up.' + u.key + '.name', u.name)}</span></div>
          ${pipRow(lv, max)}
          <div class="up-eff">${lv > 0 ? u.effect(lv) : T('up.' + u.key + '.desc', u.desc)}</div>
          <div class="up-buy">${btn}</div></div>`;
    }).join('');

    const shipsBlock = `
      <p class="hg-hint">${T('hangar.fleetHint')}</p>
      <div class="ship-gal">
        <button type="button" class="hub-icon-btn gal-arrow" data-fleetpage="-1"
          aria-label="${T('btn.prev', 'Previous')}" ${fleetPage <= 0 ? 'disabled' : ''}>${Icons.svg('chevron', 18)}</button>
        <div class="ship-row">${ships}</div>
        <button type="button" class="hub-icon-btn gal-arrow gal-next" data-fleetpage="1"
          aria-label="${T('btn.next', 'Next')}" ${fleetPage >= pages - 1 ? 'disabled' : ''}>${Icons.svg('chevron', 18)}</button>
      </div>
      <div class="gal-dots">${Array.from({ length: pages },
        (_, i) => `<i class="gal-dot ${i === fleetPage ? 'on' : ''}"></i>`).join('')}</div>
      <div class="hg-section-head">
        <div class="hg-section-title">${T('hangar.systemsSection')}</div>
        <div class="hg-section-meta">${T('ship.' + ship.key + '.name', ship.name)} · ${Tf('hangar.systemsProgress', upTotal, upMax)}</div>
      </div>
      <p class="hg-hint">${T('hangar.systemsHint')}</p>
      <div class="up-grid">${upgrades}</div>`;

    return `
      ${subtabsHtml('fleet', [
        { id: 'ships', key: 'hangar.sub.ships', dot: canBuyAnyShipUpg(p) || canUnlockAnyShip(p) },
        { id: 'weapons', key: 'hangar.sub.weapons', dot: canTrainAnyWeapon(p) || canTrainAnySuper(p) },
      ], fleetSub)}
      ${fleetSub === 'weapons' ? renderWeaponsBay(p) : shipsBlock}`;
  }

  function renderWeaponsBay(p) {
    return `
      ${subtabsHtml('weapon', [
        { id: 'primary', key: 'hangar.sub.primary', dot: canTrainAnyWeapon(p) },
        { id: 'special', key: 'hangar.sub.special', dot: canTrainAnySuper(p) },
      ], weaponSub)}
      ${weaponSub === 'special' ? renderSuperSection(p) : renderPrimaryWeapons(p)}`;
  }

  function renderPrimaryWeapons(p) {
    const startW = Meta.startWeapon(p);
    const loadout = Meta.battleLoadout(p);
    const maxSlots = Meta.LOADOUT_MAX || 5;
    const weapons = Meta.WEAPON_ROSTER.map(w => {
      const name = T('weapon.' + w.key);
      const unlocked = Meta.weaponUnlocked(w.key, p);
      if (!unlocked) {
        const btn = w.gem > 0
          ? `<button class="mini buy gem" data-warunlock="${w.key}" ${p.gems < w.gem ? 'disabled' : ''}>${w.gem} ${Icons.svg('gem')}</button>` : '';
        return `<div class="wpn-card glass-card locked">
            <div class="wpn-head"><span class="wpn-name">${Icons.svg('lock', 13)} ${name}</span>${btn}</div>
            <div class="wpn-note">${Tf('armory.sector', w.sector)}</div></div>`;
      }
      const isStart = w.key === startW;
      const inLoad = loadout.includes(w.key);
      const prioOn = !!(Meta.hasModuleEquipped && Meta.hasModuleEquipped(p, 'priority'));
      const isPrio = prioOn && Meta.priorityWeapon && Meta.priorityWeapon(p) === w.key;
      const xp = Meta.weaponXpProgress(p, w.key);
      const rows = Meta.WEAPON_UPG_ORDER.map(stat => {
        const d = Meta.WEAPON_UPGRADES[stat];
        const lv = Meta.weaponUpgLv(p, w.key, stat), maxed = lv >= d.max;
        const gated = !maxed && !Meta.canTrainWeaponStat(p, w.key, stat);
        const info = maxed || gated ? null : Meta.weaponBuyInfo(stat, lv);
        const val = lv * d.per, eff = d.unit === '%' ? `+${val}%` : (val ? `+${val}` : '—');
        let btn;
        if (maxed) btn = `<span class="ship-tag">${T('btn.max')}</span>`;
        else if (gated) btn = `<span class="ship-tag wpn-xp-lock" title="${T('hangar.xpNeed')}">XP</span>`;
        else btn = `<button class="mini buy ${info.currency === 'gems' ? 'gem' : ''}" data-wupg="${w.key}:${stat}" ${!canAfford(info, p) ? 'disabled' : ''}>${priceLabel(info)}</button>`;
        return `<div class="wupg-row">
            <span class="wupg-ic" title="${T('wup.' + stat + '.name', d.name)}">${wstatIcon(stat)}</span>
            <span class="wupg-nm">${T('wup.' + stat + '.name', d.name)}</span>
            ${pipRow(lv, d.max, true)}
            <span class="wupg-eff">${eff}</span>${btn}</div>`;
      }).join('');
      return `<div class="wpn-card glass-card ${isStart ? 'start' : ''} ${inLoad ? 'in-loadout' : ''} ${isPrio ? 'is-prio' : ''}">
          <div class="wpn-head">
            <span class="wpn-name">${name}</span>
            <div class="wpn-actions">
              ${prioOn && inLoad ? `<button type="button" class="mini prio-tog ${isPrio ? 'on' : ''}" data-prio="${w.key}"
                title="${T('hangar.prioHint')}">${isPrio ? '★ ' : '+ '}${T('hangar.prio')}</button>` : ''}
              <button type="button" class="mini loadout-tog ${inLoad ? 'on' : ''}" data-loadout="${w.key}"
                title="${T('hangar.loadout')}">${inLoad ? '✓' : '+'} ${T('hangar.slot')}</button>
              <button class="mini setstart ${isStart ? 'on' : ''}" data-setstart="${w.key}">${isStart ? '★ ' + T('hangar.start') : T('hangar.setStart')}</button>
            </div>
          </div>
          ${xpTrackHtml(xp)}
          ${rows}</div>`;
    }).join('');
    const lockOn = !!p.startWeaponLocked;
    return `
      <p class="hg-hint">${T('hangar.armoryHint')}</p>
      <div class="glass-card glass-card-cyan hg-loadout-bar">
        <div class="hg-loadout-title">${T('hangar.loadoutTitle')} <b>${loadout.length}/${maxSlots}</b></div>
        <div class="hg-hint" style="margin:4px 0 0">${T('hangar.loadoutHint')}</div>
      </div>
      <div class="glass-card glass-card-cyan hg-wlock-start">
        <div class="set-row" style="border:none;padding:8px 0">
          <span class="set-label">${T('hangar.startLock')}</span>
          <button type="button" class="switch ${lockOn ? 'on' : ''}" id="hg-start-wlock" role="switch" aria-checked="${lockOn}">
            <span class="knob"></span>
          </button>
        </div>
        <div class="hg-hint" style="margin:0 0 4px">${T('hangar.startLockHint')}</div>
      </div>
      <div class="wpn-list">${weapons}</div>`;
  }

  /** Super weapons bay (bomb / nuke / barrier) — equip one + train tiers. */
  function renderSuperSection(p) {
    const equipped = Meta.startSuper(p); // may be null when unequipped
    const cards = Meta.SUPER_ROSTER.map(s => {
      const key = s.key;
      const isEq = equipped != null && key === equipped;
      const lv = Meta.superLevel(p, key);           // 1..4
      const bought = Meta.superBuyLv(p, key);       // 0..3
      const maxed = bought >= Meta.SUPER_MAX_BUY;
      const xp = Meta.superXpProgress(p, key);
      const can = !maxed && Meta.canBuySuper(p, key);
      const info = maxed ? null : Meta.superBuyInfo(bought, key);
      let buyBtn;
      if (maxed) buyBtn = `<span class="ship-tag">${T('btn.max')}</span>`;
      else if (!can) buyBtn = `<span class="ship-tag wpn-xp-lock" title="${T('hangar.superXpNeed')}">XP</span>`;
      else buyBtn = `<button type="button" class="mini buy ${info.currency === 'gems' ? 'gem' : ''}" data-supupg="${key}" ${!canAfford(info, p) ? 'disabled' : ''}>${priceLabel(info)}</button>`;
      const st = Meta.superStats(p, key);
      let eff;
      if (key === 'bomb') {
        eff = st.enemyR > 0
          ? Tf('super.bomb.effR', st.enemyR)
          : T('super.bomb.eff0');
      } else if (key === 'nuke') {
        eff = Tf('super.nuke.eff', Math.round(st.dmg), st.r, Math.round((st.hpShare || 0) * 100));
      } else if (key === 'sphere') {
        // Opening burn rate; it ramps the longer a target is held.
        eff = Tf('super.sphere.eff', st.duration.toFixed(1), Math.round(st.r),
          Math.round((st.burn0 || 0.4) * 100));
      } else {
        eff = Tf('super.barrier.eff', st.duration.toFixed(1));
      }
      return `<div class="wpn-card glass-card super-card ${isEq ? 'start in-loadout' : ''}">
        <div class="wpn-head">
          <span class="wpn-name">${s.icon} ${T('super.' + key + '.name')}</span>
          <div class="wpn-actions">
            <button type="button" class="mini setstart ${isEq ? 'on' : ''}" data-setsuper="${key}">
              ${isEq ? '✓ ' + T('hangar.slot') : '+ ' + T('hangar.slot')}
            </button>
          </div>
        </div>
        <div class="hg-hint" style="margin:2px 0 6px">${T('super.' + key + '.desc')}</div>
        ${xpTrackHtml(xp, { title: T('hangar.xp') + ' · Lv ' + lv + '/4' })}
        <div class="up-eff" style="margin-top:4px">${eff}</div>
        <div class="up-buy" style="margin-top:6px">${buyBtn}</div>
      </div>`;
    }).join('');
    return `
      <div class="super-section">
        <div class="glass-card glass-card-cyan hg-loadout-bar">
          <div class="hg-loadout-title">${T('hangar.superTitle')}</div>
          <div class="hg-hint" style="margin:4px 0 0">${T('hangar.superHint')}</div>
        </div>
        <div class="wpn-list super-list">${cards}</div>
      </div>`;
  }

  function renderDefense(p) {
    const eq = Meta.equippedGun(p);
    const owned = Meta.ownedGuns(p);
    const guns = Meta.BASE_GUNS.map(g => {
      const isOwned = owned.includes(g.key);
      const selected = eq === g.key;
      const state = selected ? 'sel' : isOwned ? 'own' : 'locked';
      const { upTotal, upMax } = isOwned ? gunProgress(p, g.key) : { upTotal: 0, upMax: 0 };
      let action;
      if (isOwned) {
        action = selected
          ? `<span class="ship-tag">${T('btn.equipped')}</span>`
          : `<button class="mini" data-equipegun="${g.key}">${T('btn.equip')}</button>`;
      } else {
        action = `<button class="mini buy nocoin" data-unlockgun="${g.key}" ${p.credits < g.cost ? 'disabled' : ''}>${T('btn.unlock')} ${priceChip('credit', g.cost)}</button>`;
      }
      return `<div class="ship-card glass-card gun-card ${state}" data-guncard="${g.key}">
          <canvas class="ship-anim card-anim" data-voxship="${g.model}" data-thrust="0.25" data-speed="0.55" width="76" height="66"></canvas>
          <div class="ship-name">${T('gun.' + g.key + '.name', g.name)}</div>
          <div class="ship-blurb">${T('gun.' + g.key + '.blurb', g.blurb)}</div>
          ${isOwned ? `<div class="ship-meta">${Icons.svg('statUpg', 14)} ${upTotal}/${upMax}</div>` : ''}
          ${action}
        </div>`;
    }).join('');

    const gun = Meta.gunByKey[eq] || Meta.BASE_GUNS[0];
    const { gunLv, tree, upTotal, upMax } = gunProgress(p, eq);
    const upgrades = tree.map(({ def: u, max }) => {
      const lv = gunLv[u.key] || 0, maxed = lv >= max;
      const info = maxed ? null : Meta.gunBuyInfo(u.key, lv);
      const btn = maxed ? `<span class="ship-tag">${T('btn.max')}</span>`
        : `<button class="mini buy ${info.currency === 'gems' ? 'gem' : ''}" data-gunupg="${u.key}" ${!canAfford(info, p) ? 'disabled' : ''}>${priceLabel(info)}</button>`;
      const eff = lv > 0 ? Meta.gunEffectText(u.key, lv) : T('gun.up.' + u.key + '.desc', u.name);
      return `<div class="up-card glass-card ${maxed ? 'maxed' : ''}">
          <div class="up-top"><span class="up-icon">${gunIcon(u.key)}</span><span class="up-name">${T('gun.up.' + u.key + '.name', u.name)}</span></div>
          ${pipRow(lv, max)}
          <div class="up-eff">${eff}</div>
          <div class="up-buy">${btn}</div></div>`;
    }).join('');

    const turretsBlock = `
      <p class="hg-hint">${T('hangar.defenseHint')}</p>
      <div class="ship-row gun-row">${guns}</div>
      <div class="hg-section-head">
        <div class="hg-section-title">${T('hangar.defenseSystems')}</div>
        <div class="hg-section-meta">${T('gun.' + gun.key + '.name', gun.name)} · ${Tf('hangar.systemsProgress', upTotal, upMax)}</div>
      </div>
      <p class="hg-hint">${T('hangar.defenseSystemsHint')}</p>
      <div class="up-grid">${upgrades}</div>`;

    return `
      ${subtabsHtml('defense', [
        { id: 'turrets', key: 'hangar.sub.turrets', dot: canUnlockAnyGun(p) || canBuyAnyGunUpg(p) },
        { id: 'special', key: 'hangar.sub.special', dot: canTrainAnyDefSuper(p) },
      ], defenseSub)}
      ${defenseSub === 'special' ? renderDefSuperSection(p) : turretsBlock}`;
  }

  /** Base-defense supers — equip/unequip slots (cap from turret Dual Bay) + train. */
  function renderDefSuperSection(p) {
    const cap = Meta.defSuperCapacity ? Meta.defSuperCapacity(p) : 1;
    const loadout = Meta.defSuperLoadout ? Meta.defSuperLoadout(p) : [Meta.startDefSuper(p)];
    const cards = Meta.DEF_SUPER_ROSTER.map(s => {
      const key = s.key;
      const slot = loadout.indexOf(key); // 0 primary, 1 secondary, -1 none
      const isEq = slot >= 0;
      const lv = Meta.defSuperLevel(p, key);
      const bought = Meta.defSuperBuyLv(p, key);
      const maxed = bought >= Meta.DEF_SUPER_MAX_BUY;
      const xp = Meta.defSuperXpProgress(p, key);
      const can = !maxed && Meta.canBuyDefSuper(p, key);
      const info = maxed ? null : Meta.defSuperBuyInfo(bought);
      let buyBtn;
      if (maxed) buyBtn = `<span class="ship-tag">${T('btn.max')}</span>`;
      else if (!can) buyBtn = `<span class="ship-tag wpn-xp-lock" title="${T('hangar.defSuperXpNeed')}">XP</span>`;
      else buyBtn = `<button type="button" class="mini buy ${info.currency === 'gems' ? 'gem' : ''}" data-defsupupg="${key}" ${!canAfford(info, p) ? 'disabled' : ''}>${priceLabel(info)}</button>`;
      const st = Meta.defSuperStats(p, key);
      let eff;
      if (key === 'emp') {
        eff = st.enemyR > 0
          ? Tf('defsuper.emp.effR', st.enemyR)
          : T('defsuper.emp.eff0');
      } else if (key === 'salvo') {
        eff = Tf('defsuper.salvo.eff', st.count, st.dmg);
      } else if (key === 'fortress') {
        eff = Tf('defsuper.fortress.eff', st.duration.toFixed(1));
      } else if (key === 'turret') {
        eff = Tf('defsuper.turret.eff', st.maxTurrets, st.dmg);
      } else if (key === 'repair') {
        eff = Tf('defsuper.repair.eff', st.heal) + (st.revive ? ' · ' + T('defsuper.repair.revive') : '');
      } else {
        eff = Tf('defsuper.overdrive.eff', st.duration.toFixed(1));
      }
      const cd = Meta.defSuperCooldown ? Meta.defSuperCooldown(p, key) : 12;
      const slotBadge = isEq ? (slot === 0 ? '★1' : '★2') : '';
      return `<div class="wpn-card glass-card super-card ${isEq ? 'start in-loadout' : ''}">
        <div class="wpn-head">
          <span class="wpn-name">${s.icon} ${T('defsuper.' + key + '.name')}${slotBadge ? ' <span class="wpn-slot-n">' + slotBadge + '</span>' : ''}</span>
          <div class="wpn-actions">
            <button type="button" class="mini loadout-tog ${isEq ? 'on' : ''}" data-defloadout="${key}"
              title="${T('hangar.loadout')}">${isEq ? '✓ ' + T('hangar.slot') : '+ ' + T('hangar.slot')}</button>
          </div>
        </div>
        <div class="hg-hint" style="margin:2px 0 6px">${T('defsuper.' + key + '.desc')}</div>
        ${xpTrackHtml(xp, { title: T('hangar.xp') + ' · Lv ' + lv + '/4 · CD ' + cd.toFixed(0) + 's' })}
        <div class="up-eff" style="margin-top:4px">${eff}</div>
        <div class="up-buy" style="margin-top:6px">${buyBtn}</div>
      </div>`;
    }).join('');
    const lo = loadout.map((k, i) => {
      const d = Meta.defSuperByKey[k];
      return `${i + 1}:${d ? d.icon : '?'} ${T('defsuper.' + k + '.name')}`;
    }).join(' · ') || '—';
    const bayHint = cap < 2
      ? T('hangar.defSuperBayHint')
      : T('hangar.defSuperBayOpen');
    return `
      <div class="super-section">
        <div class="glass-card glass-card-cyan hg-loadout-bar">
          <div class="hg-loadout-title">${T('hangar.defSuperTitle')} <b>${loadout.length}/${cap}</b></div>
          <div class="hg-hint" style="margin:4px 0 0">${T('hangar.defSuperHint')}</div>
          <div class="hg-hint" style="margin:6px 0 0">${T('hangar.defSuperLoadout')}: ${lo}</div>
          <div class="hg-hint" style="margin:4px 0 0">${bayHint}</div>
        </div>
        <div class="wpn-list super-list">${cards}</div>
      </div>`;
  }

  /**
   * The tuning control that lives ON a drop-shaping module's card, plus a plain
   * reading of what the current level actually does. These modules are expensive
   * and invisible in play, so the card has to state the odds outright.
   */
  function moduleChoiceHtml(p, m) {
    const cur = Meta.moduleChoice(p, m.key);
    if (m.choice === 'super') {
      const b = Meta.beaconSplit(p);
      const eq = Meta.startSuper(p) || 'bomb';
      const opts = Meta.SUPER_CHOICES.map(k => `
        <button type="button" class="mod-opt ${cur === k ? 'on' : ''}" data-modchoice="${m.key}:${k}">
          ${T('super.' + k + '.name')}${k === eq ? ' <i class="mod-opt-eq">●</i>' : ''}
        </button>`).join('');
      // Quote the EFFECTIVE odds, not the raw split: the "random" slice is a
      // fair roll across all four supers, so a quarter of it lands back on the
      // tuned one. Printing the raw 70% when the real answer is 72% is the kind
      // of small lie that makes players stop trusting the numbers.
      let note;
      if (b) {
        const s = b.split;
        const each = s.rnd / b.pool.length;
        const pct = x => Math.round(x * 100);
        note = (cur === eq)
          ? Tf('mod.superDrop.same', pct(s.prio + s.act + each))
          : Tf('mod.superDrop.split', pct(s.prio + each), pct(s.act + each), pct(each));
      } else note = T('mod.needEquip');
      return `<div class="mod-choice">
          <div class="mod-choice-lbl">${T('mod.superDrop.pick')}</div>
          <div class="mod-opts">${opts}</div>
          <div class="mod-choice-note">${note}</div>
        </div>`;
    }
    const bias = Meta.sorterBias(p);
    const opts = Meta.LOOT_CHOICES.map(k => `
      <button type="button" class="mod-opt ${cur === k ? 'on' : ''}" data-modchoice="${m.key}:${k}">
        ${T('mod.loot.' + k)}
      </button>`).join('');
    const note = bias ? Tf('mod.lootBias.mult', bias.mult.toFixed(1)) : T('mod.needEquip');
    return `<div class="mod-choice">
        <div class="mod-choice-lbl">${T('mod.lootBias.pick')}</div>
        <div class="mod-opts">${opts}</div>
        <div class="mod-choice-note">${note}</div>
      </div>`;
  }

  function renderModules(p) {
    const parts = (p.shipParts || []).length;
    const hasAegis = (p.ownedShips || []).includes(Meta.STORY_SHIP);
    const cap = Meta.moduleCapacity ? Meta.moduleCapacity(p) : 0;
    const slots = Meta.moduleSlots ? Meta.moduleSlots(p) : [];
    const ship = Meta.shipByKey[p.ship] || Meta.SHIPS[0];
    const shipName = T('ship.' + ship.key + '.name', ship.name);

    // Top-down bay: ship silhouette + hardpoint slots
    const slotEls = [];
    // Hardpoint count is per-ship now (Phantom 2 … Goliath 4), so draw the
    // active hull's ceiling rather than a hard-coded three.
    const capMax = Meta.moduleCapacityMax ? Meta.moduleCapacityMax(p) : 3;
    for (let i = 0; i < capMax; i++) {
      const open = i < cap;
      const key = open ? (slots[i] || null) : null;
      const def = key && Meta.moduleByKey ? Meta.moduleByKey[key] : null;
      const locked = !open;
      const empty = open && !key;
      const pickOn = modulePick && open;
      slotEls.push(`
        <button type="button" class="mod-slot ${locked ? 'locked' : ''} ${empty ? 'empty' : ''} ${key ? 'filled' : ''} ${pickOn ? 'drop-target' : ''}"
          data-modslot="${i}" ${locked ? 'disabled' : ''}
          style="${def ? '--mc:' + def.color : ''}"
          aria-label="${locked ? T('mod.slotLocked') : (key ? T('mod.' + key + '.name') : T('mod.slotEmpty'))}">
          ${locked ? `<span class="mod-slot-ico">${Icons.svg('lock', 14)}</span>`
            : (key ? `<span class="mod-slot-ico">${modIcon(key, 18)}</span><span class="mod-slot-lv">${Meta.moduleLevel(p, key)}</span>`
              : `<span class="mod-slot-ico">＋</span>`)}
          <span class="mod-slot-n">${i + 1}</span>
        </button>`);
    }

    const cats = Meta.MODULE_CATS || ['all'];
    const activeCat = cats.includes(modCat) ? modCat : 'all';
    const catCount = k => (Meta.MODULE_ROSTER || []).filter(m => k === 'all' || m.cat === k).length;
    const catTabs = `<div class="mod-cats">${cats.map(k => `
      <button type="button" class="mod-cat ${activeCat === k ? 'on' : ''}" data-modcat="${k}">
        ${T('mod.cat.' + k)}<span class="mod-cat-n">${catCount(k)}</span>
      </button>`).join('')}</div>`;

    const roster = (Meta.MODULE_ROSTER || [])
      .filter(m => activeCat === 'all' || m.cat === activeCat)
      .map(m => {
      const owned = Meta.moduleOwned(p, m.key);
      const lv = Meta.moduleLevel(p, m.key);
      const bought = Meta.moduleBuyLv(p, m.key);
      const maxed = owned && bought >= m.max - 1;
      const equipped = Meta.hasModuleEquipped && Meta.hasModuleEquipped(p, m.key);
      const pick = modulePick === m.key;
      let canPurchase = false;
      let action = '';
      if (!owned) {
        const unlockCost = Meta.moduleUnlockCost ? Meta.moduleUnlockCost(m.key) : m.unlock;
        canPurchase = p.credits >= unlockCost;
        action = `<button type="button" class="mini buy ${canPurchase ? 'afford' : ''}" data-modunlock="${m.key}" ${canPurchase ? '' : 'disabled'}>${unlockCost.toLocaleString()}</button>`;
      } else {
        const info = Meta.moduleBuyInfo(m.key, bought);
        const xpReady = !Meta.canBuyModule || Meta.canBuyModule(p, m.key);
        canPurchase = !maxed && xpReady && canAfford(info, p);
        action = maxed
          ? `<span class="ship-tag mod-act-tag">${T('btn.max')}</span>`
          : (!xpReady
            ? `<span class="ship-tag wpn-xp-lock" title="${T('hangar.xpNeed')}">XP</span>`
            : `<button type="button" class="mini buy ${canPurchase ? 'afford' : ''}" data-modupg="${m.key}" ${canPurchase ? '' : 'disabled'}>${priceLabel(info)}</button>`);
        action += equipped
          ? `<button type="button" class="mini mod-act-sec" data-modunequip="${m.key}">${T('mod.unequip')}</button>`
          : `<button type="button" class="mini mod-act-sec ${pick ? 'on' : ''}" data-modpick="${m.key}">${pick ? '★ ' + T('mod.placing') : T('mod.equip')}</button>`;
      }
      // Don't dim affordable unlock cards (old .locked made buy button look disabled)
      const cardCls = [
        'mod-card', 'glass-card',
        owned ? '' : (canPurchase ? 'can-buy' : 'locked'),
        equipped ? 'equipped' : '',
        pick ? 'picking' : '',
        canPurchase ? 'affordable' : '',
      ].filter(Boolean).join(' ');
      return `
        <div class="${cardCls}" style="--mc:${m.color}">
          <div class="mod-card-top">
            <span class="mod-card-ico">${modIcon(m.key, 26)}</span>
            <div class="mod-card-text">
              <div class="mod-card-name">${T('mod.' + m.key + '.name')}</div>
              <div class="mod-card-desc">${T('mod.' + m.key + '.desc')}</div>
            </div>
          </div>
          ${owned ? `<div class="mod-card-meta">${T('hangar.level')}: ${lv}/${m.max}</div>${pipRow(lv, m.max, true)}${Meta.moduleXpProgress ? xpTrackHtml(Meta.moduleXpProgress(p, m.key), { title: T('hangar.xp') + ' · Lv ' + lv + '/' + m.max }) : ''}` : ''}
          ${owned && m.choice ? moduleChoiceHtml(p, m) : ''}
          <div class="mod-card-act">${action}</div>
        </div>`;
    }).join('');

    return `
      <div class="hg-modules">
        <p class="hg-hint">${Tf('mod.bayHint', cap, shipName)}</p>
        <div class="mod-bay glass-card">
          <div class="mod-bay-ship">
            <canvas class="ship-anim mod-bay-canvas" data-voxship="${ship.key}" width="160" height="140"></canvas>
            <div class="mod-bay-slots">${slotEls.join('')}</div>
          </div>
          <div class="mod-bay-meta">
            <div class="hg-section-title">${T('mod.hardpoints')}</div>
            <div class="hg-hint" style="margin:4px 0 0">${cap > 0
              ? Tf('mod.capacity', cap, capMax)
              : T('mod.needBay')}</div>
            ${modulePick ? `<div class="mod-pick-hint">${Tf('mod.pickHint', T('mod.' + modulePick + '.name'))}</div>` : ''}
          </div>
        </div>
        <div class="hg-section-head" style="margin-top:12px">
          <div class="hg-section-title">${T('mod.catalog')}</div>
        </div>
        ${catTabs}
        <div class="mod-grid">${roster}</div>
        <div class="hg-aegis-strip glass-card glass-card-gold" style="margin-top:14px">
          <div class="hg-aegis-ico" aria-hidden="true">${Icons.svg('swords', 22)}</div>
          <div class="hg-aegis-body">
            <div class="hg-aegis-title">${T('hangar.aegisStripTitle')}</div>
            <div class="hg-aegis-sub">${hasAegis
              ? T('hangar.modulesAegis')
              : Tf('hangar.modulesProgress', parts, Meta.SHIP_PARTS)}</div>
          </div>
        </div>
      </div>`;
  }

  /* ── Observation Deck ─────────────────────────────────────────────────────
   * One room for the three things a player does when they are NOT preparing a
   * run: look at their ship, spend leftover credits on how it looks, and read
   * what they have collected. Nothing here touches a stat or a run.
   */
  function canBuyAnyCosmetic(p) {
    return Meta.COSMETIC_SLOTS.some(slot => Meta.cosmeticList(slot).some(c =>
      c.key && !Meta.cosmeticOwned(p, slot, c.key) && p.credits >= c.cost));
  }

  /**
   * The showcase IS the cosmetics editor. Paint used to live on its own sub-tab,
   * which meant every swatch you tried was a tab away from the ship you were
   * trying it on. Now the turntable stays on screen and the swatch grid sits
   * directly under the controls: pick a colour, watch it land.
   */
  function renderShowcase(p) {
    const ship = Meta.shipByKey[p.ship] || Meta.SHIPS[0];
    const wornFx = Meta.fxEquipped(p);
    const worn = Meta.COSMETIC_SLOTS
      .map(s => T('cos.' + s + '.' + Meta.cosmeticEquipped(p, s) + '.name'))
      .concat(wornFx.map(k => T('cos.fx.' + k + '.name')))
      .join(' · ');
    const tog = (k, lbl) => `<button type="button" class="mini deck-tog ${deckOpt[k] ? 'on' : ''}" data-deck-tog="${k}">${lbl}</button>`;
    const chk = (k, lbl) => `<button type="button" class="deck-chk ${deckOpt[k] ? 'on' : ''}" data-deck-tog="${k}"
      role="checkbox" aria-checked="${!!deckOpt[k]}"><span class="deck-chk-box"></span>${lbl}</button>`;
    return `
      <p class="hg-hint">${T('deck.viewHint')}</p>
      <div class="deck-stage glass-card">
        <canvas id="deck-view" class="deck-canvas" width="320" height="300"></canvas>
        <div class="deck-plate">
          <div class="deck-ship-name">${T('ship.' + ship.key + '.name', ship.name)}</div>
          <div class="deck-ship-sub">${worn}</div>
        </div>
      </div>
      <div class="deck-controls">
        ${tog('spin', T('deck.spin'))}
        ${tog('engines', T('deck.engines'))}
        <button type="button" class="mini deck-shot-btn" id="deck-shot">${T('deck.shot')}</button>
      </div>
      <div class="deck-shotopts">
        <span class="deck-shotopts-lbl">${T('deck.shotOpts')}</span>
        ${chk('shotFx', T('deck.shotFx'))}
        ${chk('shotName', T('deck.shotName'))}
        ${chk('shotRecord', T('deck.shotRecord'))}
        ${chk('shotFrame', T('deck.shotFrame'))}
      </div>
      ${renderPaint(p)}`;
  }

  /**
   * Hull FX bay. Unlike the colour slots these are multi-select (up to two) and
   * cost gems AND credits, so they get their own grid rather than being bent
   * into the single-choice swatch layout.
   */
  function renderFx(p) {
    const on = Meta.fxEquipped(p);
    const cards = Meta.FX_LIST.map(f => {
      const owned = Meta.fxOwned(p, f.key);
      const active = on.includes(f.key);
      const afford = (p.gems || 0) >= f.gems && p.credits >= f.cost;
      let action;
      if (!owned) {
        action = `<button type="button" class="mini buy ${afford ? 'afford' : ''}" data-fxbuy="${f.key}" ${afford ? '' : 'disabled'}>
            ${Icons.svg('gem', 13)} ${f.gems} · ${f.cost.toLocaleString()}
          </button>`;
      } else {
        action = `<button type="button" class="mini ${active ? 'on' : ''}" data-fxtog="${f.key}">
            ${active ? '✓ ' + T('deck.equipped') : T('deck.equip')}
          </button>`;
      }
      return `
        <div class="cos-card fx-card glass-card ${active ? 'equipped' : ''} ${owned ? '' : 'locked'}">
          <span class="cos-swatch fx-swatch" style="--cs:${f.hex}"></span>
          <span class="cos-name">${T('cos.fx.' + f.key + '.name')}</span>
          <span class="fx-desc">${T('cos.fx.' + f.key + '.desc')}</span>
          <span class="cos-act">${action}</span>
        </div>`;
    }).join('');
    return `
      ${subtabsHtml('paint', DECK_SLOTS.map(s => ({
        id: s, key: 'deck.slot.' + s, dot: s === 'fx' ? canBuyAnyFx(p) : canBuySlotCosmetic(p, s),
      })), 'fx')}
      <p class="hg-hint">${Tf('deck.hint.fx', Meta.FX_MAX)} <b>${on.length}/${Meta.FX_MAX}</b></p>
      <div class="cos-grid fx-grid">${cards}</div>`;
  }
  function canBuyAnyFx(p) {
    return Meta.FX_LIST.some(f => !Meta.fxOwned(p, f.key)
      && (p.gems || 0) >= f.gems && p.credits >= f.cost);
  }

  /** Swatch grid for ONE cosmetic slot — the deck's element sub-tabs pick which. */
  function renderPaint(p) {
    if (paintSlot === 'fx') return renderFx(p);
    const slot = Meta.COSMETIC_SLOTS.includes(paintSlot) ? paintSlot : 'paint';
    const cur = Meta.cosmeticEquipped(p, slot);
    const cards = Meta.cosmeticList(slot).map(c => {
      const owned = Meta.cosmeticOwned(p, slot, c.key);
      const on = cur === c.key;
      const afford = p.credits >= c.cost;
      const swatch = c.hex || SLOT_STOCK_SWATCH[slot] || '#cfeaff';
      let action;
      if (!owned) {
        action = `<button type="button" class="mini buy ${afford ? 'afford' : ''}" data-cosbuy="${slot}:${c.key}" ${afford ? '' : 'disabled'}>${c.cost.toLocaleString()}</button>`;
      } else if (on) {
        action = `<span class="ship-tag">${T('deck.equipped')}</span>`;
      } else {
        action = `<button type="button" class="mini" data-cosequip="${slot}:${c.key}">${T('deck.equip')}</button>`;
      }
      return `
        <div class="cos-card glass-card ${on ? 'equipped' : ''} ${owned ? '' : 'locked'}">
          <span class="cos-swatch" style="--cs:${swatch}"></span>
          <span class="cos-name">${T('cos.' + slot + '.' + c.key + '.name')}</span>
          <span class="cos-act">${action}</span>
        </div>`;
    }).join('');
    return `
      ${subtabsHtml('paint', DECK_SLOTS.map(s => ({
        id: s, key: 'deck.slot.' + s, dot: s === 'fx' ? canBuyAnyFx(p) : canBuySlotCosmetic(p, s),
      })), slot)}
      <p class="hg-hint">${T('deck.hint.' + slot)}</p>
      <div class="cos-grid">${cards}</div>
      <p class="hg-hint deck-foot">${T('deck.noTracer')}</p>`;
  }

  function renderDeck(p) {
    const inner = deckSub === 'archive' ? renderArchives(p) : renderShowcase(p);
    return `
      ${subtabsHtml('deck', [
        { id: 'view', key: 'deck.sub.view', dot: canBuyAnyCosmetic(p) },
        { id: 'archive', key: 'deck.sub.archive' },
      ], deckSub)}
      ${inner}`;
  }

  /* ── Deck turntable ───────────────────────────────────────────────────────
   * Own rAF; stops when the canvas leaves the DOM or the hangar closes.
   * deckYaw is module-level on purpose: toggling SPIN off must FREEZE the ship
   * where it stands, and a re-render (buying a paint) must not snap it back to
   * the front. Drag writes to the same angle, so mouse/touch and auto-spin are
   * the same control rather than two competing ones.
   */
  let deckRaf = 0;
  let deckYaw = 0;
  let deckDragging = false;
  const deckOpt = { spin: true, engines: true, shotFx: true, shotName: true, shotRecord: false, shotFrame: true };

  /** Everything the turntable and the screenshot both need. One source. */
  function deckScene() {
    const p = Profile.get();
    const key = p.ship || 'vanguard';
    const ship = Meta.shipByKey[key] || Meta.SHIPS[0];
    return {
      key, ship,
      model: Player.paintedModel(key, Meta.paintHex(p), Meta.glowHex(p)),
      flame: Meta.trailHex(p) || ship.accent,
      fx: Meta.fxEquipped(p),
      name: T('ship.' + ship.key + '.name', ship.name),
      record: Math.max((p.highScore | 0), (Campaign.bestScore && Campaign.bestScore()) || 0),
    };
  }

  function startDeckView() {
    if (deckRaf) { cancelAnimationFrame(deckRaf); deckRaf = 0; }
    const cv = el().querySelector('#deck-view');
    if (!cv) return;
    const ctx = cv.getContext('2d');
    const sc = deckScene();
    const t0 = performance.now();
    let last = t0;
    const frame = () => {
      if (!cv.isConnected) { deckRaf = 0; return; }
      const now = performance.now();
      const dt = Math.min(0.1, (now - last) / 1000); last = now;
      const t = (now - t0) / 1000;
      // Auto-spin only advances the angle; it never owns it. Stopping leaves the
      // ship exactly where the player was looking at it.
      if (deckOpt.spin && !deckDragging) deckYaw += dt * 0.6;
      ctx.clearRect(0, 0, cv.width, cv.height);
      Vox.groundShadow(ctx, cv.width / 2, cv.height * 0.62, 46, { a: 0.42 });
      // FX bracket the hull: 'under' before it, 'over' after. That is what puts
      // the ship INSIDE its rings and plume instead of beneath a sticker.
      const showFx = deckOpt.shotFx && sc.fx.length;
      const fxOpt = { accent: sc.flame, thrust: deckOpt.engines ? 1 : 0, scale: 2.05, t };
      if (showFx) { fxOpt.pass = 'under'; Player.drawHullFx(ctx, sc.fx, cv.width / 2, cv.height * 0.5, fxOpt); }
      Vox.draw(ctx, sc.model, cv.width / 2, cv.height * 0.5, {
        s: 7.2, yaw: deckYaw, roll: Math.sin(t * 0.5) * 0.10, pitch: 0.82,
        t, thrust: deckOpt.engines ? 0.9 + 0.35 * Math.sin(t * 6) : 0,
        flameColor: sc.flame, ignoreCam: true,
      });
      if (showFx) { fxOpt.pass = 'over'; Player.drawHullFx(ctx, sc.fx, cv.width / 2, cv.height * 0.5, fxOpt); }
      deckRaf = requestAnimationFrame(frame);
    };
    frame();
    wireDeckDrag(cv);
  }
  function stopDeckView() {
    if (deckRaf) { cancelAnimationFrame(deckRaf); deckRaf = 0; }
    deckDragging = false;
  }

  /** Grab-and-turn. Pointer events cover mouse and touch with one path. */
  function wireDeckDrag(cv) {
    let lastX = 0, id = null, moved = 0;
    cv.style.touchAction = 'none';        // otherwise the panel scrolls instead of turning
    cv.onpointerdown = e => {
      id = e.pointerId; lastX = e.clientX; moved = 0;
      deckDragging = true;
      cv.classList.add('dragging');
      try { cv.setPointerCapture(id); } catch (err) {}
    };
    cv.onpointermove = e => {
      if (!deckDragging || e.pointerId !== id) return;
      const dx = e.clientX - lastX; lastX = e.clientX;
      moved += Math.abs(dx);
      deckYaw += dx * 0.012;              // ~half a turn across the canvas width
    };
    const end = e => {
      if (e && id != null && e.pointerId !== id) return;
      if (!deckDragging) return;
      deckDragging = false;
      cv.classList.remove('dragging');
      try { if (id != null) cv.releasePointerCapture(id); } catch (err) {}
      id = null;
      if (moved > 6) Engine.audio.blip(520, 0.03, 'sine', 0.05);
    };
    cv.onpointerup = end;
    cv.onpointercancel = end;
    cv.onpointerleave = end;
  }

  /**
   * Save-shot. The live canvas is transparent and 320×300, which makes a poor
   * thing to post; this re-renders at 2× into a fresh canvas and composites only
   * what the player ticked, so "just the ship" stays a clean cut-out with alpha.
   */
  function deckSnapshot() {
    const sc = deckScene();
    const W = 640, H = 640;
    const c = document.createElement('canvas');
    c.width = W; c.height = H;
    const x = c.getContext('2d');
    const t = performance.now() / 1000;

    if (deckOpt.shotFrame) {
      const g = x.createLinearGradient(0, 0, 0, H);
      g.addColorStop(0, '#0b1020'); g.addColorStop(1, '#131a30');
      x.fillStyle = g; x.fillRect(0, 0, W, H);
      const r = x.createRadialGradient(W / 2, H * 0.44, 10, W / 2, H * 0.44, W * 0.55);
      r.addColorStop(0, 'rgba(74,214,255,0.18)'); r.addColorStop(1, 'rgba(0,0,0,0)');
      x.fillStyle = r; x.fillRect(0, 0, W, H);
      x.strokeStyle = 'rgba(159,233,255,0.35)'; x.lineWidth = 2;
      x.strokeRect(12.5, 12.5, W - 25, H - 25);
    }

    Vox.groundShadow(x, W / 2, H * 0.60, 96, { a: 0.42 });
    const shotFx = deckOpt.shotFx && sc.fx.length;
    const shotOpt = { accent: sc.flame, thrust: deckOpt.engines ? 1 : 0, scale: 4.1, t };
    if (shotFx) { shotOpt.pass = 'under'; Player.drawHullFx(x, sc.fx, W / 2, H * 0.46, shotOpt); }
    Vox.draw(x, sc.model, W / 2, H * 0.46, {
      s: 14.4, yaw: deckYaw, roll: Math.sin(t * 0.5) * 0.10, pitch: 0.82,
      t, thrust: deckOpt.engines ? 1.0 : 0, flameColor: sc.flame, ignoreCam: true,
    });
    if (shotFx) { shotOpt.pass = 'over'; Player.drawHullFx(x, sc.fx, W / 2, H * 0.46, shotOpt); }

    let y = H - 96;
    if (deckOpt.shotName) {
      x.textAlign = 'center';
      x.fillStyle = '#eaf6ff';
      x.font = 'bold 40px system-ui, sans-serif';
      x.shadowColor = 'rgba(0,0,0,0.7)'; x.shadowBlur = 8;
      x.fillText(sc.name, W / 2, y);
      x.shadowBlur = 0;
      y += 44;
    }
    if (deckOpt.shotRecord) {
      x.textAlign = 'center';
      x.fillStyle = '#ffd24a';
      x.font = 'bold 28px system-ui, sans-serif';
      x.shadowColor = 'rgba(0,0,0,0.7)'; x.shadowBlur = 8;
      x.fillText(T('hub.best').toUpperCase() + ' ' + sc.record.toLocaleString(), W / 2, y);
      x.shadowBlur = 0;
    }
    return c;
  }

  function canBuySlotCosmetic(p, slot) {
    return Meta.cosmeticList(slot).some(c =>
      c.key && !Meta.cosmeticOwned(p, slot, c.key) && p.credits >= c.cost);
  }
  const SLOT_STOCK_SWATCH = { paint: '#cfeaff', glow: '#6ef0ff', trail: '#4ad6ff' };

  function renderArchives(p) {
    const owned = p.disks || {};
    const cards = [];
    for (let i = 1; i <= 10; i++) {
      const id = String(i).padStart(2, '0');
      const open = !!owned[id];
      const title = open ? T('disk.' + id + '.title') : T('disk.locked');
      const preview = open
        ? T('disk.' + id + '.body').split('\n')[0]
        : '····';
      cards.push(`
        <button type="button" class="disk-card ${open ? '' : 'locked'}" data-disk="${id}" ${open ? '' : 'disabled aria-disabled="true"'}>
          <div class="disk-card-shine" aria-hidden="true"></div>
          <div class="disk-card-top">
            <span class="disk-id">📀 ${id}</span>
            ${open ? `<span class="disk-badge">${T('disk.read')}</span>` : `<span class="disk-lock-ico">🔒</span>`}
          </div>
          <div class="disk-title">${title}</div>
          <div class="disk-preview">${preview}</div>
        </button>`);
    }
    // Research notes (1–5) from science stations
    const rOwned = (Campaign.researchLogs && Campaign.researchLogs()) || p.researchLogs || {};
    const rCards = [];
    for (let i = 1; i <= 5; i++) {
      const id = String(i).padStart(2, '0');
      const open = !!rOwned[id];
      const title = open ? T('rlog.' + id + '.title') : T('disk.locked');
      const preview = open ? T('rlog.' + id + '.body').split('\n')[0] : '····';
      rCards.push(`
        <button type="button" class="disk-card rlog-card ${open ? '' : 'locked'}" data-rlog="${id}" ${open ? '' : 'disabled aria-disabled="true"'}>
          <div class="disk-card-shine" aria-hidden="true"></div>
          <div class="disk-card-top">
            <span class="disk-id">🔬 ${id}</span>
            ${open ? `<span class="disk-badge">${T('disk.read')}</span>` : `<span class="disk-lock-ico">🔒</span>`}
          </div>
          <div class="disk-title">${title}</div>
          <div class="disk-preview">${preview}</div>
        </button>`);
    }
    const found = Object.keys(owned).filter(k => owned[k]).length;
    const rFound = Object.keys(rOwned).filter(k => rOwned[k]).length;
    return `
      <div class="disk-archive-wrap">
        <div class="disk-archive-head">
          <div class="disk-archive-title">${T('hangar.archives')}</div>
          <div class="disk-archive-count">${found}/10</div>
        </div>
        <p class="hg-hint disk-archive-hint">${Tf('hangar.archivesHint', found, 10)}</p>
        <div class="disk-grid">${cards.join('')}</div>
        <div class="disk-archive-head" style="margin-top:18px">
          <div class="disk-archive-title">${T('rsch.section')}</div>
          <div class="disk-archive-count">${rFound}/5</div>
        </div>
        <p class="hg-hint disk-archive-hint">${Tf('rsch.sectionHint', rFound)}</p>
        <div class="disk-grid">${rCards.join('')}</div>
      </div>`;
  }

  /** Tablet reader hoisted outside the hangar scroller so the list cannot scroll under it. */
  function archiveReaderHtml(p) {
    const owned = p.disks || {};
    const rOwned = (Campaign.researchLogs && Campaign.researchLogs()) || p.researchLogs || {};
    if (diskReadId && owned[diskReadId]) {
      return `
        <div class="disk-read" id="disk-read" role="dialog" aria-modal="true">
          <div class="disk-tablet">
            <div class="disk-tablet-bezel">
              <div class="disk-tablet-cam" aria-hidden="true"></div>
              <div class="disk-tablet-screen">
                <div class="disk-read-head">
                  <span class="disk-read-id">📀 ${diskReadId}</span>
                  <button type="button" class="disk-read-x" id="disk-close" aria-label="${T('disk.close')}">✕</button>
                </div>
                <div class="disk-read-title">${T('disk.' + diskReadId + '.title')}</div>
                <div class="disk-read-body">${T('disk.' + diskReadId + '.body')}</div>
              </div>
            </div>
            <button type="button" class="btn btn-cta set-wide disk-read-close" id="disk-close-2">${T('disk.close')}</button>
          </div>
        </div>`;
    }
    if (rlogReadId && rOwned[rlogReadId]) {
      return `
        <div class="disk-read" id="disk-read" role="dialog" aria-modal="true">
          <div class="disk-tablet rsch-tablet">
            <div class="disk-tablet-bezel">
              <div class="disk-tablet-cam" aria-hidden="true"></div>
              <div class="disk-tablet-screen">
                <div class="disk-read-head">
                  <span class="disk-read-id">🔬 ${rlogReadId}</span>
                  <button type="button" class="disk-read-x" id="disk-close" aria-label="${T('disk.close')}">✕</button>
                </div>
                <div class="disk-read-title">${T('rlog.' + rlogReadId + '.title')}</div>
                <div class="disk-read-body">${T('rlog.' + rlogReadId + '.body')}</div>
              </div>
            </div>
            <button type="button" class="btn btn-cta set-wide disk-read-close" id="disk-close-2">${T('disk.close')}</button>
          </div>
        </div>`;
    }
    return '';
  }

  function renderPanel(p) {
    if (tab === 'defense') return renderDefense(p);
    if (tab === 'modules') return renderModules(p);
    if (tab === 'deck') return renderDeck(p);
    return renderFleet(p);
  }

  function activeUnitHtml(p) {
    const ship = Meta.shipByKey[p.ship] || Meta.SHIPS[0];
    const { upTotal, upMax } = shipProgress(p, p.ship);
    const shipName = T('ship.' + ship.key + '.name', ship.name);
    return `
      <div class="hg-context">
        <div class="hg-ctx-card" data-ctx="fleet" title="${T('hangar.tab.fleet')}">
          <canvas class="ship-anim hg-ctx-ship" data-voxship="${ship.key}" width="72" height="56"></canvas>
          <div class="hg-ctx-body">
            <div class="hg-ctx-k">${T('hangar.activeUnit')}</div>
            <div class="hg-ctx-name">${shipName}</div>
            <div class="hg-ctx-meta">${Icons.svg('statUpg', 12)} ${upTotal}/${upMax}</div>
          </div>
        </div>
      </div>`;
  }

  function tabsHtml(p) {
    const badges = {
      fleet: canUnlockAnyShip(p) || canBuyAnyShipUpg(p) || canTrainAnyWeapon(p) || canTrainAnySuper(p),
      modules: canBuyAnyModule(p),
      deck: canBuyAnyCosmetic(p),
    };
    return `<div class="hg-tabs" role="tablist">
      ${TABS.map(t => `
        <button type="button" class="hg-tab ${tab === t.id ? 'on' : ''}" role="tab"
          data-tab="${t.id}" aria-selected="${tab === t.id}" id="hg-tab-${t.id}">
          ${T(t.key)}${badges[t.id] ? '<span class="hg-tab-dot"></span>' : ''}
        </button>`).join('')}
    </div>`;
  }

  function render() {
    const prevWrap = el().querySelector('.hub-wrap');
    const savedScroll = prevWrap ? prevWrap.scrollTop : 0;
    const p = Profile.get();
    const credits = p.credits.toLocaleString();
    const gems = (p.gems || 0).toLocaleString();

    el().innerHTML = `
      <canvas class="scene-bg" data-scene="hub"></canvas>
      <div class="hub-wrap panel-scroll">
        <div class="hg-chrome">
          <div class="scr-head">
            <button type="button" class="hub-icon-btn scr-back" id="hangar-back" aria-label="${T('btn.back')}">${Icons.svg('chevron', 18)}</button>
            <div class="scr-title title-grad">${T('hub.title')}</div>
            <div class="curr-row">
              <span class="curr curr-gold">${Icons.svg('credit', 16)} ${credits}</span>
              <span class="curr-sep">|</span>
              <span class="curr curr-gem">${Icons.svg('gem', 16)} ${gems}</span>
            </div>
          </div>
          ${activeUnitHtml(p)}
          ${tabsHtml(p)}
        </div>

        <div class="scr-body hg-body" data-hg-tab="${tab}">
          ${renderPanel(p)}
        </div>

        <div class="scr-foot">
          <button id="hangar-ok" class="btn btn-cta set-wide">${T('btn.done')}</button>
        </div>
      </div>
      ${archiveReaderHtml(p)}`;
    const newWrap = el().querySelector('.hub-wrap');
    if (newWrap) {
      if (!(diskReadId || rlogReadId)) newWrap.scrollTop = savedScroll;
      else newWrap.style.overflow = 'hidden';
    }
    VoxUI.scan(el());
    wire();
    if (tab === 'modules' && typeof Onboarding !== 'undefined' && Onboarding.tip) {
      Onboarding.tip('modules', 'tip.modules', {
        icon: Icons.svg('module', 18), ms: 6000, anchor: '#hg-tab-modules', place: 'below', scope: 'hangar',
      });
    }
  }

  function wire() {
    const root = el();

    // ---- Observation Deck ----
    stopDeckView();
    if (tab === 'deck' && deckSub === 'view') {
      startDeckView();
      if (typeof Onboarding !== 'undefined' && Onboarding.tip) {
        try {
          Onboarding.tip('deck', 'tip.deck',
            { icon: '◉', ms: 6000, anchor: '#hg-tab-deck', place: 'below', scope: 'hangar' });
        } catch (e) {}
      }
    }
    // Toggles never re-render: a full render would rebuild the canvas and kill
    // the turntable mid-spin. They flip the flag and repaint their own chip.
    root.querySelectorAll('[data-deck-tog]').forEach(b => b.onclick = () => {
      const k = b.dataset.deckTog;
      deckOpt[k] = !deckOpt[k];
      b.classList.toggle('on', deckOpt[k]);
      if (b.hasAttribute('role')) b.setAttribute('aria-checked', String(!!deckOpt[k]));
      Engine.audio.blip(deckOpt[k] ? 660 : 420, 0.04, 'sine', 0.08);
    });
    const shotBtn = root.querySelector('#deck-shot');
    if (shotBtn) shotBtn.onclick = () => {
      try {
        const c = deckSnapshot();
        const a = document.createElement('a');
        a.download = 'starward-' + (Profile.get().ship || 'ship') + '.png';
        a.href = c.toDataURL('image/png');
        a.click();
        Engine.audio.power();
      } catch (e) {}
    };
    root.querySelectorAll('[data-cosbuy]').forEach(b => b.onclick = () => {
      const [slot, key] = b.dataset.cosbuy.split(':');
      const prof = Profile.get();
      if (!Meta.buyCosmetic(prof, slot, key)) {
        Engine.audio.blip(200, 0.05, 'square', 0.08);
        return;
      }
      Meta.equipCosmetic(prof, slot, key);      // buying it means you want to wear it
      Engine.audio.power();
      render();
    });
    root.querySelectorAll('[data-cosequip]').forEach(b => b.onclick = () => {
      const [slot, key] = b.dataset.cosequip.split(':');
      if (!Meta.equipCosmetic(Profile.get(), slot, key)) return;
      Engine.audio.blip(640, 0.05, 'sine', 0.09);
      render();
    });
    root.querySelectorAll('[data-fxbuy]').forEach(b => b.onclick = () => {
      const prof = Profile.get();
      if (!Meta.buyFx(prof, b.dataset.fxbuy)) { Engine.audio.blip(200, 0.05, 'square', 0.08); return; }
      Meta.toggleFx(prof, b.dataset.fxbuy);      // buying it means you want to see it
      Engine.audio.power();
      render();
    });
    root.querySelectorAll('[data-fxtog]').forEach(b => b.onclick = () => {
      if (!Meta.toggleFx(Profile.get(), b.dataset.fxtog)) return;
      Engine.audio.blip(660, 0.05, 'sine', 0.09);
      render();
    });

    root.querySelectorAll('[data-tab]').forEach(b => b.onclick = () => {
      if (b.dataset.tab === tab) return;
      tab = normalizeTab(b.dataset.tab);
      diskReadId = null;
      rlogReadId = null;
      modulePick = null;
      Engine.audio.blip(640, 0.04, 'sine', 0.08);
      const wrap = el().querySelector('.hub-wrap');
      if (wrap) wrap.scrollTop = 0;
      render();
    });

    // ── Modules bay ──
    root.querySelectorAll('[data-modcat]').forEach(b => b.onclick = () => {
      if (modCat === b.dataset.modcat) return;
      modCat = b.dataset.modcat;
      Engine.audio.blip(600, 0.035, 'sine', 0.07);
      render();
    });
    root.querySelectorAll('[data-modchoice]').forEach(b => b.onclick = () => {
      const [key, val] = b.dataset.modchoice.split(':');
      if (!Meta.setModuleChoice(Profile.get(), key, val)) return;
      Engine.audio.blip(660, 0.04, 'sine', 0.08);
      render();
    });
    root.querySelectorAll('[data-modunlock]').forEach(b => b.onclick = () => {
      if (Meta.unlockModule(Profile.get(), b.dataset.modunlock)) {
        Engine.audio.power(); render();
      } else Engine.audio.blip(220, 0.05, 'square', 0.07);
    });
    root.querySelectorAll('[data-modupg]').forEach(b => b.onclick = () => {
      if (Meta.buyModuleUpg(Profile.get(), b.dataset.modupg)) {
        Engine.audio.power(); render();
      } else Engine.audio.blip(220, 0.05, 'square', 0.07);
    });
    root.querySelectorAll('[data-modpick]').forEach(b => b.onclick = () => {
      const k = b.dataset.modpick;
      modulePick = modulePick === k ? null : k;
      Engine.audio.blip(600, 0.04, 'sine', 0.07);
      render();
    });
    root.querySelectorAll('[data-modunequip]').forEach(b => b.onclick = () => {
      Meta.unequipModule(Profile.get(), b.dataset.modunequip);
      Engine.audio.blip(400, 0.04, 'sine', 0.07);
      render();
    });
    root.querySelectorAll('[data-modslot]').forEach(b => b.onclick = () => {
      const idx = +b.dataset.modslot;
      const prof = Profile.get();
      const slots = Meta.moduleSlots(prof);
      const cur = slots[idx];
      if (modulePick) {
        if (Meta.equipModule(prof, modulePick, idx)) {
          modulePick = null;
          Engine.audio.power();
          render();
        }
        return;
      }
      if (cur) {
        // Unequip on second click without pick
        Meta.unequipModule(prof, idx);
        Engine.audio.blip(400, 0.04, 'sine', 0.07);
        render();
      }
    });

    // Inner subtabs (fleet / weapons / defense)
    root.querySelectorAll('[data-sub]').forEach(b => b.onclick = () => {
      const kind = b.dataset.sub;
      const val = b.dataset.subval;
      let changed = false;
      if (kind === 'fleet' && (val === 'ships' || val === 'weapons') && fleetSub !== val) {
        fleetSub = val; changed = true;
      } else if (kind === 'weapon' && (val === 'primary' || val === 'special') && weaponSub !== val) {
        weaponSub = val; changed = true;
      } else if (kind === 'defense' && (val === 'turrets' || val === 'special') && defenseSub !== val) {
        defenseSub = val; changed = true;
      } else if (kind === 'deck' && ['view', 'archive'].includes(val) && deckSub !== val) {
        deckSub = val; changed = true;
      } else if (kind === 'paint' && DECK_SLOTS.includes(val) && paintSlot !== val) {
        paintSlot = val; changed = true;
      }
      if (!changed) return;
      diskReadId = null;
      rlogReadId = null;
      Engine.audio.blip(600, 0.035, 'sine', 0.07);
      render();
    });

    // Dual context strip → jump to bay
    root.querySelectorAll('[data-ctx]').forEach(c => c.onclick = () => {
      const next = normalizeTab(c.dataset.ctx);
      if (next === 'fleet') fleetSub = 'ships';
      if (next === 'defense') defenseSub = 'turrets';
      if (next === tab && !(c.dataset.ctx === 'fleet' || c.dataset.ctx === 'defense')) return;
      tab = next;
      diskReadId = null;
      rlogReadId = null;
      Engine.audio.blip(580, 0.04, 'sine', 0.07);
      const wrap = el().querySelector('.hub-wrap');
      if (wrap) wrap.scrollTop = 0;
      render();
    });

    root.querySelectorAll('[data-disk]').forEach(b => b.onclick = () => {
      const id = b.dataset.disk;
      if (!Campaign.hasDisk(id)) return;
      diskReadId = id;
      rlogReadId = null;
      Engine.audio.blip(520, 0.05, 'sine', 0.07);
      render();
    });
    root.querySelectorAll('[data-rlog]').forEach(b => b.onclick = () => {
      const id = b.dataset.rlog;
      if (Campaign.hasResearchLog && !Campaign.hasResearchLog(id)) return;
      rlogReadId = id;
      diskReadId = null;
      Engine.audio.blip(500, 0.05, 'sine', 0.07);
      render();
    });
    const closeDisk = () => { diskReadId = null; rlogReadId = null; render(); };
    root.querySelectorAll('#disk-close, #disk-close-2').forEach(b => { b.onclick = closeDisk; });
    const diskLayer = root.querySelector('#disk-read');
    if (diskLayer) {
      diskLayer.addEventListener('click', (e) => {
        if (e.target === diskLayer) closeDisk();
      });
      diskLayer.addEventListener('wheel', (e) => {
        if (!e.target.closest || !e.target.closest('.disk-tablet-screen')) e.preventDefault();
      }, { passive: false });
    }

    root.querySelectorAll('[data-shipupg]').forEach(b => b.onclick = () => {
      const prof = Profile.get(), key = b.dataset.shipupg;
      const sl = Meta.shipUpgrades(prof), lv = sl[key] || 0, max = Meta.upgMax(prof.ship, key);
      if (lv >= max) return;
      const info = Meta.shipBuyInfo(key, lv);
      if (Meta.spendFor(info)) {
        sl[key] = lv + 1; Profile.save(); Engine.audio.power();
        Analytics.spendCurrency({ item: key, type: 'upgrade', ship: prof.ship, cost: info.amount, currency: info.currency, level: lv + 1 });
        render();
      }
    });
    root.querySelectorAll('[data-wupg]').forEach(b => b.onclick = () => {
      const [wkey, stat] = b.dataset.wupg.split(':'), prof = Profile.get();
      const d = Meta.WEAPON_UPGRADES[stat], lv = Meta.weaponUpgLv(prof, wkey, stat);
      if (lv >= d.max) return;
      if (!Meta.canTrainWeaponStat(prof, wkey, stat)) {
        Engine.audio.blip(220, 0.06, 'square', 0.08);
        return;
      }
      const info = Meta.weaponBuyInfo(stat, lv);
      if (Meta.spendFor(info)) {
        Meta.weaponUpg(prof, wkey)[stat] = lv + 1; Profile.save(); Engine.audio.power();
        Analytics.spendCurrency({ item: wkey + '_' + stat, type: 'weapon_upg', cost: info.amount, currency: info.currency });
        render();
      }
    });
    root.querySelectorAll('[data-setstart]').forEach(b => b.onclick = () => {
      const prof = Profile.get();
      const key = b.dataset.setstart;
      const load = Meta.battleLoadout(prof);
      if (!load.includes(key)) {
        if (load.length >= Meta.LOADOUT_MAX) load.pop();
        load.unshift(key);
        prof.battleLoadout = load;
      }
      prof.startWeapon = key;
      Profile.save();
      Engine.audio.blip(720, 0.06, 'sine', 0.1); render();
    });
    root.querySelectorAll('[data-prio]').forEach(b => b.onclick = () => {
      const prof = Profile.get();
      if (!Meta.hasModuleEquipped || !Meta.hasModuleEquipped(prof, 'priority')) return;
      Meta.setPriorityWeapon(prof, b.dataset.prio);
      Engine.audio.blip(640, 0.05, 'sine', 0.09);
      render();
    });
    root.querySelectorAll('[data-loadout]').forEach(b => b.onclick = () => {
      const prof = Profile.get();
      const res = Meta.toggleLoadout(prof, b.dataset.loadout);
      if (res === true) {
        Engine.audio.blip(640, 0.05, 'square', 0.1);
        render();
      } else if (res === 'full') {
        Engine.audio.blip(220, 0.06, 'square', 0.08);
        showLoadoutFullModal();
      } else {
        Engine.audio.blip(220, 0.05, 'square', 0.08);
      }
    });
    const wlockBtn = root.querySelector('#hg-start-wlock');
    if (wlockBtn) wlockBtn.onclick = () => {
      const prof = Profile.get();
      prof.startWeaponLocked = !prof.startWeaponLocked;
      Profile.save();
      Engine.audio.blip(prof.startWeaponLocked ? 440 : 660, 0.05, 'square', 0.1);
      render();
    };
    root.querySelectorAll('[data-unlock]').forEach(b => b.onclick = () => {
      const key = b.dataset.unlock, p = Profile.get(), s = Meta.shipByKey[key];
      if (Profile.spend(s.cost)) {
        p.ownedShips.push(key); p.ship = key; Profile.save(); Engine.audio.power();
        Analytics.spendCurrency({ item: key, type: 'ship', cost: s.cost });
        render();
      }
    });
    root.querySelectorAll('[data-fleetpage]').forEach(b => b.onclick = () => {
      const pages = fleetPages();
      fleetPage = Math.max(0, Math.min(pages - 1, (fleetPage || 0) + (+b.dataset.fleetpage)));
      Engine.audio.blip(520, 0.04, 'sine', 0.08);
      render();
    });
    root.querySelectorAll('[data-equip]').forEach(b => b.onclick = () => {
      Profile.get().ship = b.dataset.equip; Profile.save();
      Engine.audio.blip(660, 0.06, 'sine', 0.1);
      render();
    });
    // Tap owned ship card → equip + keep fleet (systems already below)
    root.querySelectorAll('[data-shipcard]').forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('button')) return;
        const key = card.dataset.shipcard;
        const p = Profile.get();
        if (!p.ownedShips.includes(key)) return;
        if (p.ship !== key) {
          p.ship = key; Profile.save();
          Engine.audio.blip(660, 0.06, 'sine', 0.1);
          render();
        }
      });
    });

    // ---- Base guns ----
    root.querySelectorAll('[data-unlockgun]').forEach(b => b.onclick = () => {
      const key = b.dataset.unlockgun, p = Profile.get(), g = Meta.gunByKey[key];
      if (!g || Meta.ownedGuns(p).includes(key)) return;
      if (Profile.spend(g.cost)) {
        Meta.ownedGuns(p).push(key);
        p.baseGun = key;
        Profile.save();
        Engine.audio.power();
        Analytics.spendCurrency({ item: key, type: 'base_gun', cost: g.cost });
        render();
      }
    });
    root.querySelectorAll('[data-equipegun]').forEach(b => b.onclick = () => {
      if (Meta.equipGun(Profile.get(), b.dataset.equipegun)) {
        Engine.audio.blip(660, 0.06, 'sine', 0.1);
        render();
      }
    });
    root.querySelectorAll('[data-guncard]').forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('button')) return;
        const key = card.dataset.guncard;
        const p = Profile.get();
        if (!Meta.ownedGuns(p).includes(key)) return;
        if (Meta.equippedGun(p) !== key) {
          Meta.equipGun(p, key);
          Engine.audio.blip(660, 0.06, 'sine', 0.1);
          render();
        }
      });
    });
    root.querySelectorAll('[data-gunupg]').forEach(b => b.onclick = () => {
      const prof = Profile.get(), stat = b.dataset.gunupg;
      const gkey = Meta.equippedGun(prof);
      const max = Meta.gunUpgMax(gkey, stat);
      const lv = Meta.gunUpgLv(prof, gkey, stat);
      if (lv >= max) return;
      const info = Meta.gunBuyInfo(stat, lv);
      if (Meta.spendFor(info)) {
        Meta.gunUpgrades(prof, gkey)[stat] = lv + 1;
        Profile.save();
        Engine.audio.power();
        Analytics.spendCurrency({ item: gkey + '_' + stat, type: 'gun_upg', cost: info.amount, currency: info.currency, level: lv + 1 });
        render();
      }
    });
    root.querySelectorAll('[data-defloadout]').forEach(b => b.onclick = () => {
      const key = b.dataset.defloadout;
      const prof = Profile.get();
      const res = Meta.toggleDefSuperLoadout
        ? Meta.toggleDefSuperLoadout(prof, key)
        : (Meta.setStartDefSuper(prof, key) ? true : false);
      // 'full' no longer used (swap when full); keep modal path for safety
      if (res === 'full') {
        Engine.audio.blip(220, 0.06, 'square', 0.08);
        showDefLoadoutFullModal();
        return;
      }
      if (res) {
        Engine.audio.blip(res === 'off' ? 380 : 700, 0.06, 'sine', 0.1);
        render();
      }
    });
    // Legacy equip attribute (if any residual markup)
    root.querySelectorAll('[data-setdefsuper]').forEach(b => b.onclick = () => {
      const key = b.dataset.setdefsuper;
      const res = Meta.toggleDefSuperLoadout
        ? Meta.toggleDefSuperLoadout(Profile.get(), key)
        : Meta.setStartDefSuper(Profile.get(), key);
      if (res === 'full') { showDefLoadoutFullModal(); return; }
      if (res) { Engine.audio.blip(res === 'off' ? 380 : 700, 0.06, 'sine', 0.1); render(); }
    });
    root.querySelectorAll('[data-defsupupg]').forEach(b => b.onclick = () => {
      const key = b.dataset.defsupupg, prof = Profile.get();
      const bought = Meta.defSuperBuyLv(prof, key);
      if (bought >= Meta.DEF_SUPER_MAX_BUY) return;
      if (!Meta.canBuyDefSuper(prof, key)) {
        Engine.audio.blip(220, 0.06, 'square', 0.08);
        return;
      }
      const info = Meta.defSuperBuyInfo(bought);
      if (Meta.spendFor(info)) {
        Meta.defSuperUpgMap(prof)[key] = bought + 1;
        Profile.save();
        Engine.audio.power();
        Analytics.spendCurrency({ item: 'defsuper_' + key, type: 'def_super_upg', cost: info.amount, currency: info.currency, level: bought + 1 });
        render();
      }
    });

    root.querySelectorAll('[data-warunlock]').forEach(b => b.onclick = () => {
      const key = b.dataset.warunlock, prof = Profile.get(), w = Meta.weaponByKey[key];
      if ((prof.gems || 0) >= w.gem) {
        prof.gems -= w.gem; if (!prof.weaponUnlocks) prof.weaponUnlocks = {}; prof.weaponUnlocks[key] = true; Profile.save();
        Analytics.spendCurrency({ item: key, type: 'weapon_unlock', currency: 'gems', cost: w.gem }); Engine.audio.power(); render();
      }
    });
    root.querySelectorAll('[data-setsuper]').forEach(b => b.onclick = () => {
      const key = b.dataset.setsuper;
      const res = Meta.setStartSuper(Profile.get(), key);
      if (res) {
        Engine.audio.blip(res === 'off' ? 380 : 700, 0.06, 'sine', 0.1);
        render();
      }
    });
    root.querySelectorAll('[data-supupg]').forEach(b => b.onclick = () => {
      const key = b.dataset.supupg, prof = Profile.get();
      const bought = Meta.superBuyLv(prof, key);
      if (bought >= Meta.SUPER_MAX_BUY) return;
      if (!Meta.canBuySuper(prof, key)) {
        Engine.audio.blip(220, 0.06, 'square', 0.08);
        return;
      }
      const info = Meta.superBuyInfo(bought, key);
      if (Meta.spendFor(info)) {
        Meta.superUpgMap(prof)[key] = bought + 1;
        Profile.save();
        Engine.audio.power();
        Analytics.spendCurrency({ item: 'super_' + key, type: 'super_upg', cost: info.amount, currency: info.currency, level: bought + 1 });
        render();
      }
    });
    const goBack = () => {
      if (typeof FXTrans !== 'undefined') FXTrans.go({ style: 'cube', run: close });
      else close();
    };
    const hb = root.querySelector('#hangar-back');
    if (hb) hb.onclick = goBack;
    const ok = root.querySelector('#hangar-ok');
    if (ok) ok.onclick = goBack;
  }

  /** True if player can buy any ship/weapon/gun upgrade (map/hub badge). */
  function canBuyAnyModule(p) {
    p = p || Profile.get();
    if (typeof Meta === 'undefined' || !Meta.MODULE_ROSTER) return false;
    // Capacity upgrade
    const { shipLv, tree } = shipProgress(p, p.ship);
    if (tree.some(({ def, max }) => {
      if (def.key !== 'modules') return false;
      const lv = shipLv[def.key] || 0;
      if (lv >= max) return false;
      return canAfford(Meta.shipBuyInfo(def.key, lv), p);
    })) return true;
    return Meta.MODULE_ROSTER.some(m => {
      if (!Meta.moduleOwned(p, m.key)) {
        const unlockCost = Meta.moduleUnlockCost ? Meta.moduleUnlockCost(m.key) : m.unlock;
        return p.credits >= unlockCost;
      }
      const bought = Meta.moduleBuyLv(p, m.key);
      if (bought >= m.max - 1) return false;
      if (Meta.canBuyModule && !Meta.canBuyModule(p, m.key)) return false;
      return canAfford(Meta.moduleBuyInfo(m.key, bought), p);
    });
  }

  function hasAffordableUpgrade(p) {
    p = p || Profile.get();
    return canBuyAnyShipUpg(p) || canTrainAnyWeapon(p) || canTrainAnySuper(p)
      || canUnlockAnyShip(p) || canBuyAnyModule(p);
  }

  /**
   * Stable post-run offers: prefer cheap ship systems (hull/weapons first),
   * then start-weapon training. No random reshuffle — priority order only.
   */
  function miniOffers(p, limit) {
    p = p || Profile.get();
    limit = limit || 2;
    const offers = [];
    const { shipLv, tree } = shipProgress(p, p.ship);
    const prio = ['hull', 'weapons', 'munitions', 'firerate', 'magnet', 'salvage'];
    const sortedTree = tree.slice().sort((a, b) => {
      const ia = prio.indexOf(a.def.key), ib = prio.indexOf(b.def.key);
      return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib);
    });
    sortedTree.forEach(({ def, max }) => {
      const lv = shipLv[def.key] || 0;
      if (lv >= max) return;
      const info = Meta.shipBuyInfo(def.key, lv);
      if (!canAfford(info, p)) return;
      if (info.currency === 'gems') return;
      offers.push({
        kind: 'ship', key: def.key, lv, max, info,
        name: T('up.' + def.key + '.name', def.name),
        icon: sysIcon(def.key, 18),
        sort: offers.length,
      });
    });
    if (offers.length < limit) {
      const wFocus = Meta.startWeapon(p);
      for (const stat of Meta.WEAPON_UPG_ORDER) {
        if (!Meta.canTrainWeaponStat(p, wFocus, stat)) continue;
        const d = Meta.WEAPON_UPGRADES[stat];
        const lv = Meta.weaponUpgLv(p, wFocus, stat);
        if (lv >= d.max) continue;
        const info = Meta.weaponBuyInfo(stat, lv);
        if (!canAfford(info, p) || info.currency === 'gems') continue;
        offers.push({
          kind: 'weapon', wkey: wFocus, stat, lv, max: d.max, info,
          name: T('weapon.' + wFocus) + ' · ' + T('wup.' + stat + '.name', stat),
          icon: wstatIcon(stat, 18),
          sort: 100 + offers.length,
        });
        break;
      }
    }
    return offers.slice(0, limit);
  }

  function buyOffer(o) {
    const p = Profile.get();
    if (o.kind === 'ship') {
      const sl = Meta.shipUpgrades(p);
      const lv = sl[o.key] || 0;
      const max = Meta.upgMax(p.ship, o.key);
      if (lv >= max) return false;
      const info = Meta.shipBuyInfo(o.key, lv);
      if (!Meta.spendFor(info)) return false;
      sl[o.key] = lv + 1;
      Profile.save();
      Analytics.spendCurrency && Analytics.spendCurrency({
        item: o.key, type: 'upgrade', ship: p.ship, cost: info.amount, currency: info.currency, level: lv + 1,
      });
      return true;
    }
    if (o.kind === 'weapon') {
      const d = Meta.WEAPON_UPGRADES[o.stat];
      const lv = Meta.weaponUpgLv(p, o.wkey, o.stat);
      if (lv >= d.max) return false;
      const info = Meta.weaponBuyInfo(o.stat, lv);
      if (!Meta.spendFor(info)) return false;
      Meta.weaponUpg(p, o.wkey)[o.stat] = lv + 1;
      Profile.save();
      Analytics.spendCurrency && Analytics.spendCurrency({
        item: o.wkey + '_' + o.stat, type: 'weapon_upg', cost: info.amount, currency: info.currency,
      });
      return true;
    }
    return false;
  }

  /** Modal when battle loadout already has LOADOUT_MAX weapons. */
  function showLoadoutFullModal() {
    const frame = document.getElementById('game-frame') || document.body;
    const prev = frame.querySelector('#loadout-full-modal');
    if (prev) prev.remove();
    const max = Meta.LOADOUT_MAX || 4;
    const modal = document.createElement('div');
    modal.id = 'loadout-full-modal';
    modal.className = 'overlay';
    modal.innerHTML = `
      <div class="set-panel glass-panel loadout-full-card ftl-card-anim">
        <div class="loadout-full-ico" aria-hidden="true">${Icons.svg('barrier', 22)}</div>
        <h3 class="set-title">${T('hangar.loadoutFullTitle')}</h3>
        <p class="loadout-full-body">${Tf('hangar.loadoutFullBody', max)}</p>
        <button type="button" class="btn btn-cta set-wide" id="loadout-full-ok">✓ ${T('btn.ok')}</button>
      </div>`;
    frame.appendChild(modal);
    const close = () => { if (modal.parentNode) modal.remove(); };
    modal.querySelector('#loadout-full-ok').onclick = close;
    modal.onclick = (e) => { if (e.target === modal) close(); };
  }

  /** Defense super slots full — unequip first (or buy Dual Bay on turret). */
  function showDefLoadoutFullModal() {
    const frame = document.getElementById('game-frame') || document.body;
    const prev = frame.querySelector('#def-loadout-full-modal');
    if (prev) prev.remove();
    const p = Profile.get();
    const cap = Meta.defSuperCapacity ? Meta.defSuperCapacity(p) : 1;
    const modal = document.createElement('div');
    modal.id = 'def-loadout-full-modal';
    modal.className = 'overlay';
    modal.innerHTML = `
      <div class="set-panel glass-panel loadout-full-card ftl-card-anim">
        <div class="loadout-full-ico" aria-hidden="true">⚡</div>
        <h3 class="set-title">${T('hangar.defLoadoutFullTitle')}</h3>
        <p class="loadout-full-body">${Tf('hangar.defLoadoutFullBody', cap)}</p>
        <button type="button" class="btn btn-cta set-wide" id="def-loadout-full-ok">✓ ${T('btn.ok')}</button>
      </div>`;
    frame.appendChild(modal);
    const close = () => { if (modal.parentNode) modal.remove(); };
    modal.querySelector('#def-loadout-full-ok').onclick = close;
    modal.onclick = (e) => { if (e.target === modal) close(); };
  }

  function mountMiniUpgrades(host, onChange) {
    if (!host) return;
    let list = miniOffers(Profile.get(), 2);
    const paint = () => {
      list = list.map(o => {
        const p = Profile.get();
        if (o.kind === 'ship') {
          const lv = Meta.shipUpgrades(p)[o.key] || 0;
          const max = Meta.upgMax(p.ship, o.key);
          if (lv >= max) return null;
          const info = Meta.shipBuyInfo(o.key, lv);
          if (info.currency === 'gems' || !canAfford(info, p)) return { ...o, lv, info, disabled: true };
          return { ...o, lv, info, disabled: false };
        }
        if (o.kind === 'weapon') {
          const lv = Meta.weaponUpgLv(p, o.wkey, o.stat);
          const d = Meta.WEAPON_UPGRADES[o.stat];
          if (lv >= d.max || !Meta.canTrainWeaponStat(p, o.wkey, o.stat)) return null;
          const info = Meta.weaponBuyInfo(o.stat, lv);
          if (info.currency === 'gems' || !canAfford(info, p)) return { ...o, lv, info, disabled: true };
          return { ...o, lv, info, disabled: false };
        }
        return o;
      }).filter(Boolean);

      if (!list.length) {
        host.innerHTML = `<div class="go-mini-empty">${T('go.miniEmpty')}</div>`;
        return;
      }
      host.innerHTML = `
        <div class="go-mini-title">${T('go.miniTitle')}</div>
        <div class="go-mini-list">${list.map((o, i) => `
          <div class="go-mini-row">
            <span class="go-mini-ico">${o.icon}</span>
            <div class="go-mini-meta">
              <div class="go-mini-name">${o.name}</div>
              <div class="go-mini-lv">${T('map.lv')}${o.lv} → ${o.lv + 1}</div>
            </div>
            <button type="button" class="mini buy go-mini-buy ${o.info && o.info.currency === 'gems' ? 'gem' : ''}" data-mi="${i}" ${o.disabled ? 'disabled' : ''}>
              ${priceLabel(o.info)}
            </button>
          </div>`).join('')}</div>`;
      host.querySelectorAll('[data-mi]').forEach(btn => {
        btn.onclick = () => {
          const o = list[+btn.dataset.mi];
          if (!o || o.disabled) return;
          if (buyOffer(o)) {
            try { Engine.audio.power(); } catch (e) {}
            paint();
            if (onChange) onChange();
          }
        };
      });
    };
    paint();
  }

  return { open, close, render, hasAffordableUpgrade, miniOffers, mountMiniUpgrades };
})();
