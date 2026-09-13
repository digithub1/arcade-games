/* ============================================================
 * hub.js — the Home screen: daily, a big HANGAR button (opens the
 * ship/upgrade screen), the launch settings (mode + difficulty),
 * and the LAUNCH button below them. Ships/upgrades/armory live in
 * hangar.js.
 * ========================================================== */
const Hub = (() => {
  const el = () => document.getElementById('hub');

  function open(opts) {
    const show = () => {
      document.getElementById('menu').classList.add('hidden');
      document.getElementById('gameover').classList.add('hidden');
      document.getElementById('hud').classList.add('hidden');
      el().classList.remove('hidden');
      Music.play('menu');
      if (typeof Onboarding !== 'undefined' && Onboarding.enter) Onboarding.enter('hub');
      render();
      // First visit → Hangar nudge. Prefer post-intro starter-funds tip (exclusive vs tip.hub).
      if (typeof Onboarding !== 'undefined') {
        const p = Profile.get();
        setTimeout(() => {
          // Still on hub? (user may have opened hangar / map already)
          if (el().classList.contains('hidden')) return;
          // Scope guard: enter() may have already switched away
          if (Onboarding.enter && document.getElementById('hangar')
            && !document.getElementById('hangar').classList.contains('hidden')) return;
          if (p.introGrantDone) {
            Onboarding.tip('hubFirst', 'tip.hubFirst', {
              icon: Icons.svg('credit', 18), ms: 7200,
              anchor: '#hub-hangar', place: 'below', scope: 'hub',
            });
          } else {
            Onboarding.tip('hub', 'tip.hub', {
              icon: Icons.svg('gear', 18), ms: 6500,
              anchor: '#hub-hangar', place: 'below', scope: 'hub',
            });
          }
        }, 380);
      }
    };
    // From splash / gameover: cube assemble into hub
    if (opts && opts.trans && typeof FXTrans !== 'undefined') {
      FXTrans.go({ style: opts.trans, run: show });
    } else {
      show();
    }
  }
  function close() {
    el().classList.add('hidden');
    VoxUI.stopRain();
    // The chapter-replay sheet lives on #game-frame, not on #hub — if we leave
    // the home screen with it still mounted it resurfaces mid-battle.
    const stray = document.getElementById('camp-replay-modal');
    if (stray && stray.parentNode) stray.parentNode.removeChild(stray);
  }

  /** Chapter progress for the currently selected difficulty (per-diff campaigns). */
  function campaignProgressLabel() {
    const c = Campaign.ensure();
    const total = Campaign.PARTS.length;
    if (c.done) {
      const rec = (Campaign.bestScore && Campaign.bestScore()) || 0;
      return rec ? Tf('hub.campaignRecord', rec.toLocaleString()) : T('hub.campaignDone');
    }
    const part = c.part || 1;
    const name = T('chapter.' + part, '');
    return Tf('hub.campaignProgress', part, total, name);
  }

  /** Soft UI update when only difficulty changes — keeps hangar ship canvas alive. */
  function applyDifficulty(diff) {
    const p = Profile.get();
    const same = p.difficulty === diff;
    if (!same) {
      p.difficulty = diff;
      Profile.save();
      Engine.audio.blip(580, 0.05, 'sine', 0.1);
      const root = el();
      root.querySelectorAll('[data-diff]').forEach(x => {
        x.classList.toggle('on', x.dataset.diff === diff);
      });
      const sub = root.querySelector('#hub-campaign .mode-banner-sub');
      if (sub) {
        sub.textContent = campaignProgressLabel();
        sub.className = 'mode-banner-sub diff-tint-' + diff;
      }
    }
    // Completed campaign on this difficulty → chapter pick / restart (even if already selected).
    try {
      if (Campaign.ensure().done) openCampaignReplay();
    } catch (e) {}
  }

  function render() {
    const p = Profile.get();
    const credits = p.credits.toLocaleString();
    const gems = (p.gems || 0).toLocaleString();

    // Hangar preview stats: upgrade progress + weapons owned + "can afford" hint.
    const shipLv = Meta.shipUpgrades(p, p.ship);
    const tree = Meta.shipTree(p.ship);
    const upTotal = tree.reduce((a, { def }) => a + (shipLv[def.key] || 0), 0);
    const upMax = tree.reduce((a, { max }) => a + max, 0);
    const wpnOwned = Meta.unlockedWeapons(p).length;
    const wpnTotal = Meta.WEAPON_ROSTER.length;
    const canBuy = tree.some(({ def, max }) => { const lv = shipLv[def.key] || 0; return lv < max && p.credits >= Meta.cost(def.key, lv); });

    // difficulty applies to BOTH modes; each difficulty keeps its own campaign progress
    const diffBtns = Meta.DIFF_ORDER.map(k =>
      `<button class="seg seg-${k} ${p.difficulty === k ? 'on' : ''}" data-diff="${k}">${T('diff.' + k)}</button>`).join('');

    const campSub = campaignProgressLabel();
    const ctrS = Contracts.state(0);
    const ctrId = ctrS.id;
    // "Done" for the chip means every OPEN contract is finished — with a second
    // slot unlocked, one of two cleared is not a cleared day.
    let ctrOpen = 0, ctrCleared = 0;
    for (let i = 0; i < Contracts.SLOTS; i++) {
      const st = Contracts.state(i);
      if (!st.unlocked) continue;
      ctrOpen++;
      if (st.done) ctrCleared++;
    }
    const ctrDone = ctrOpen > 0 && ctrCleared === ctrOpen;
    // An unstarted contract said "IN PROGRESS", which was simply false — nothing
    // was in progress. The chip now shows the payout you can go and take.
    // A reward waiting is a call to action ("COLLECT"), not a status — saying
    // "COMPLETE" with one of two contracts cleared read as "the day is done".
    const ctrState = Contracts.hasClaimable()
      ? T('ctr.claim')
      : ctrDone
        ? T('ctr.claimed')
        : `${Icons.svg('gem', 13)} ${Contracts.rewardFor(Contracts.today(0), Profile.get().difficulty).gems}`;
    const ctrSub = ctrOpen > 1
      ? `${T('ctr.' + ctrId + '.name')} · ${Tf('ctr.progress', ctrCleared, ctrOpen)}`
      : T('ctr.' + ctrId + '.name');

    // daily challenge — primary mutator as title (ref layout)
    const day = Daily.getToday();
    const mutMain = day.mutators[0];
    const mutTitle = mutMain
      ? T('mut.' + mutMain.key + '.name', mutMain.name)
      : T('hub.daily');
    const mutSub = day.mutators.slice(1).map(m =>
      T('mut.' + m.key + '.name', m.name)).join(' · ');
    const dBest = Daily.bestToday();
    const dStreak = Daily.state().streak || 0;
    // DD.MM.YYYY for the premium card date
    const dParts = (day.dateStr || '').split('-');
    const dateNice = dParts.length === 3 ? `${dParts[2]}.${dParts[1]}.${dParts[0]}` : day.dateStr;
    const dailyCard = `
      <div class="daily-card glass-card glass-card-purple">
        <div class="daily-top">
          <span class="daily-tag">${T('hub.daily')}</span>
          <span class="daily-date">${dateNice}</span>
        </div>
        <div class="daily-title">${mutTitle}</div>
        ${mutSub ? `<div class="daily-muts">${mutSub}</div>` : ''}
        <div class="daily-foot">
          <span class="daily-best">${T('hub.best')} ${dBest ? dBest.toLocaleString() : '—'}${dStreak > 1 ? ` · 🔥${dStreak}` : ''}</span>
          <span class="daily-actions">
            ${Platform.caps.invite ? `<button id="daily-invite" class="btn-soft daily-action-btn" type="button">${Icons.svg('friends', 14)} ${T('social.invite')}</button>` : ''}
            <button id="daily-play" class="mini btn-cta-sm daily-action-btn" type="button">▶ ${T('btn.play')}</button>
          </span>
        </div>
      </div>`;


    const bt = BattlePass.tier(), bp = BattlePass.tierProgress(), prem = BattlePass.isPremium();

    const diff = p.difficulty || 'normal';
    // Career = all-time pilot stats; footer strip under the campaign button
    const careerHtml = `
      <div class="campaign-career" title="${T('hub.careerHint')}">
        <span class="hub-career-label">${T('hub.career')}</span>
        <div class="hub-stats">
          <span class="hub-stat"><span class="hub-stat-k">${T('hub.best')}</span> <b>${p.highScore.toLocaleString()}</b></span>
          <span class="hub-dot">·</span>
          <span class="hub-stat"><span class="hub-stat-k">${T('hub.wave')}</span> <b>${p.bestWave}</b></span>
          <span class="hub-dot">·</span>
          <span class="hub-stat"><span class="hub-stat-k">${T('hub.sectors')}</span> <b>${p.stagesCleared || 0}</b></span>
          <span class="hub-dot">·</span>
          <span class="hub-stat"><span class="hub-stat-k">${T('hub.runs')}</span> <b>${p.totalRuns || 0}</b></span>
        </div>
      </div>`;

    el().innerHTML = `
      <canvas class="scene-bg" data-scene="hub"></canvas>
      <div class="hub-wrap home-wrap">
        <div class="hub-head">
          <div class="home-title title-grad">${T('app.title')}</div>
          <div class="hub-head-right">
            <div class="curr-row">
              <span class="curr curr-gold">${Icons.svg('credit', 16)} ${credits}</span>
              <span class="curr-sep">|</span>
              <span class="curr curr-gem">${Icons.svg('gem', 16)} ${gems}</span>
            </div>
            <div class="hub-head-btns">
              <button id="hub-rewards" class="hub-icon-btn" aria-label="Rewards">${Icons.svg('gift', 20)}${Missions.hasClaimable() ? '<span class="badge"></span>' : ''}</button>
              <button id="hub-shop" class="hub-icon-btn" aria-label="${T('hub.shop')}">${Icons.svg('shop', 20)}</button>
              <button id="hub-settings" class="hub-icon-btn" aria-label="${T('set.title')}">${Icons.svg('gear', 20)}</button>
            </div>
          </div>
        </div>

        <button id="hub-hangar" class="hangar-btn glass-card glass-card-cyan">
          <div class="hangar-btn-text">
            <div class="hangar-btn-label">${T('hub.title')}${canBuy ? ' ★' : ''}${canBuy ? '<span class="badge"></span>' : ''}</div>
            <div class="hangar-btn-ship">${T('ship.' + p.ship + '.name', p.ship)}</div>
            <div class="hangar-btn-stats">
              <span class="hangar-stat">${Icons.svg('statUpg', 18)}<b>${upTotal}/${upMax}</b></span>
              <span class="hangar-stat">${Icons.svg('statGun', 18)}<b>${wpnOwned}/${wpnTotal}</b></span>
              <span class="hangar-stat">${Icons.svg('statHull', 18)}<b>${3 + (shipLv.hull || 0)}</b></span>
            </div>
          </div>
          <canvas class="ship-anim hangar-ship" data-voxship="${p.ship}" width="148" height="104"></canvas>
          <div class="hangar-btn-arrow" aria-hidden="true">${Icons.svg('chevron', 28)}</div>
        </button>

        <div class="hub-section-label">${T('hub.difficulty')}</div>
        <div class="seg-row">${diffBtns}</div>

        <div class="campaign-block glass-card glass-card-cyan">
          <button id="hub-campaign" class="mode-banner" type="button">
            <div class="mode-banner-icon" aria-hidden="true">${Icons.svg('campaign', 52)}</div>
            <div class="mode-banner-text">
              <div class="mode-banner-title">${T('mode.campaign')}</div>
              <div class="mode-banner-sub diff-tint-${diff}">${campSub}</div>
            </div>
          </button>
          ${careerHtml}
        </div>

        <div class="hub-section-label">${T('bp.title')}</div>
        <button id="hub-pass" class="pass-card glass-card glass-card-gold ${prem ? 'premium' : ''}">
          <div class="pass-icon" aria-hidden="true">${Icons.svg('pass', 52)}</div>
          <div class="pass-body">
            <div class="pass-top">
              <span class="pass-name">${T('bp.title')}${BattlePass.hasClaimable() ? '<span class="badge"></span>' : ''}</span>
              <span class="pass-tier">${T('bp.tier')} ${bt}/${BattlePass.TIERS}</span>
            </div>
            <div class="pass-sub">${prem ? T('bp.premiumOn') : T('bp.tapUnlock')}</div>
            <div class="pass-bar"><div class="pass-fill" style="width:${bp.pct}%"></div></div>
          </div>
        </button>

        <div class="hub-section-label">${T('hub.daily')}</div>
        ${dailyCard}

        <button id="hub-contract" class="contract-btn glass-card glass-card-gold ${ctrDone ? 'done' : ''}">
          <div class="contract-ico" aria-hidden="true">${Icons.svg('upAim', 34)}</div>
          <div class="contract-body">
            <div class="contract-top">
              <span class="contract-name">${T('ctr.title')}${Contracts.hasClaimable() ? '<span class="badge"></span>' : ''}</span>
              <span class="contract-state ${ctrDone ? 'done' : ''}">${ctrState}</span>
            </div>
            <div class="contract-sub">${ctrSub}</div>
          </div>
          <div class="hangar-btn-arrow" aria-hidden="true">${Icons.svg('chevron', 22)}</div>
        </button>

      </div>`;

    VoxUI.scan(el());   // nebula scene bg + live rotating hangar ship
    VoxUI.decorate(el());   // pixel planets/asteroids on the campaign & pass cards
    wire();
  }

  function wire() {
    const root = el();
    root.querySelectorAll('[data-diff]').forEach(b => b.onclick = () => applyDifficulty(b.dataset.diff));
    root.querySelector('#hub-hangar').onclick = () => {
      // Dismiss hub tip immediately (before cube transition finishes)
      if (typeof Onboarding !== 'undefined' && Onboarding.enter) Onboarding.enter('hangar');
      FXTrans.go({ style: 'cube', run: () => { close(); Hangar.open(() => Hub.open()); } });
    };
    // Full-screen destinations (like Hangar): hide hub, cube flip, reopen hub on close.
    root.querySelector('#hub-settings').onclick = () => {
      if (typeof Onboarding !== 'undefined' && Onboarding.enter) Onboarding.enter('settings');
      FXTrans.go({ style: 'cube', run: () => { close(); Settings.open(() => Hub.open()); } });
    };
    root.querySelector('#hub-shop').onclick = () => {
      if (typeof Onboarding !== 'undefined' && Onboarding.enter) Onboarding.enter('shop');
      FXTrans.go({ style: 'cube', run: () => { close(); Shop.open(() => Hub.open()); } });
    };
    root.querySelector('#hub-rewards').onclick = () => {
      if (typeof Onboarding !== 'undefined' && Onboarding.enter) Onboarding.enter('rewards');
      FXTrans.go({ style: 'cube', run: () => { close(); Missions.openPanel(() => Hub.open()); } });
    };
    root.querySelector('#hub-pass').onclick = () => {
      if (typeof Onboarding !== 'undefined' && Onboarding.enter) Onboarding.enter('season');
      FXTrans.go({ style: 'cube', run: () => { close(); BattlePass.open(() => Hub.open()); } });
    };
    const di = root.querySelector('#daily-invite');
    if (di) di.onclick = (e) => { e.stopPropagation(); Social.invite(); };
    const cbtn = root.querySelector('#hub-contract');
    if (cbtn) cbtn.onclick = () => {
      if (typeof Onboarding !== 'undefined' && Onboarding.enter) Onboarding.enter('contracts');
      FXTrans.go({ style: 'cube', run: () => { close(); Contracts.open(() => Hub.open()); } });
    };
    const dp = root.querySelector('#daily-play');
    if (dp) dp.onclick = () => {
      FXTrans.go({ style: 'warp', run: () => { close(); Game.startDaily(); } });
    };
    root.querySelector('#hub-campaign').onclick = () => {
      if (Campaign.ensure().done) {
        openCampaignReplay();
        return;
      }
      if (typeof Onboarding !== 'undefined' && Onboarding.enter) Onboarding.enter('map');
      FXTrans.go({
        style: 'cube',
        run: () => {
          Profile.get().mode = 'campaign'; Profile.save();
          close();
          CampaignMap.open(() => Hub.open());
        },
      });
    };
  }

  function openCampaignReplay() {
    const rec = (Campaign.bestScore && Campaign.bestScore()) || 0;
    const last = Campaign.LAST_PART || 5;
    const adGate = typeof Store !== 'undefined'
      && Store.rewardedAvailable && Store.rewardedAvailable()
      && Store.adsEnabled && Store.adsEnabled();
    const chapters = [];
    for (let n = 1; n <= last; n++) {
      const cost = Campaign.chapterGemCost(n);
      chapters.push(`<button type="button" class="shop-item glass-row" data-camp-part="${n}">
        <span class="shop-item-text"><span class="shop-item-main">${Tf('camp.chapter', n)}</span>
        <span class="shop-item-sub">${Tf('camp.chapterHint', cost)}</span></span>
        <span class="shop-price">${cost} ${Icons.svg('gem')}</span></button>`);
    }
    const layer = document.createElement('div');
    layer.className = 'ftl-modal ftl-modal-anim camp-replay-modal';
    layer.id = 'camp-replay-modal';
    layer.setAttribute('role', 'dialog');
    layer.setAttribute('aria-modal', 'true');
    layer.innerHTML = `
      <div class="ftl-modal-card ftl-card-anim camp-replay-card">
        <div class="camp-replay-head">
          <div class="disk-read-title">${T('camp.replayTitle')}</div>
          <p class="loadout-full-body">${rec ? Tf('hub.campaignRecord', rec.toLocaleString()) : T('hub.campaignDone')}</p>
          <button type="button" class="btn btn-cta set-wide" id="camp-restart">${T('camp.restart')}</button>
          <p class="hg-hint camp-replay-hint">${adGate ? T('camp.restartHint') : T('camp.restartFree')}</p>
          <p class="camp-replay-msg hidden" id="camp-replay-msg"></p>
        </div>
        <div class="camp-replay-body">${chapters.join('')}</div>
        <button type="button" class="btn btn-ghost set-wide camp-replay-ok" id="camp-replay-x">${T('btn.ok')}</button>
      </div>`;
    const host = document.getElementById('game-frame') || document.body;
    const prev = document.getElementById('camp-replay-modal');
    if (prev) prev.remove();
    host.appendChild(layer);
    const drop = () => { if (layer.parentNode) layer.parentNode.removeChild(layer); };
    const note = (text) => {
      const el = layer.querySelector('#camp-replay-msg');
      if (!el) return;
      el.textContent = text;
      el.classList.remove('hidden');
    };
    const openFreshMap = () => {
      drop();
      FXTrans.go({
        style: 'cube',
        run: () => {
          Profile.get().mode = 'campaign'; Profile.save();
          close();
          CampaignMap.open(() => Hub.open());
        },
      });
    };
    const onWipe = () => {
      Campaign.resetProgress();
      openFreshMap();
    };
    layer.querySelector('#camp-replay-x').onclick = drop;
    layer.addEventListener('click', (e) => { if (e.target === layer) drop(); });
    // Restart is FREE — the ad is an optional courtesy, never a gate. When an ad
    // fails or is declined the old code just re-enabled the button and said
    // nothing, so the whole modal read as dead. Now: one ad attempt, and if it
    // does not pay out the player is told and the next tap restarts regardless.
    let adTried = false;
    layer.querySelector('#camp-restart').onclick = () => {
      const btn = layer.querySelector('#camp-restart');
      if (adGate && !adTried && Store.showRewarded) {
        adTried = true;
        if (btn) btn.disabled = true;
        Promise.resolve(Store.showRewarded('campaign_restart', onWipe))
          .catch(() => false)
          .then(ok => {
            if (ok) return;
            if (btn) btn.disabled = false;
            note(T('camp.restartNoAd'));
          });
        return;
      }
      onWipe();
    };
    layer.querySelectorAll('[data-camp-part]').forEach(b => {
      b.onclick = () => {
        const n = +b.dataset.campPart;
        const cost = Campaign.chapterGemCost(n);
        const p = Profile.get();
        if ((p.gems || 0) < cost) {
          Engine.audio.deny ? Engine.audio.deny() : Engine.audio.blip(180, 0.05, 'square', 0.06);
          note(T('camp.needGems'));
          return;
        }
        p.gems -= cost;
        Campaign.jumpToPart(n);
        Profile.save();
        Analytics.spendCurrency && Analytics.spendCurrency({ item: 'chapter_' + n, type: 'campaign_jump', cost, currency: 'gems' });
        openFreshMap();
      };
    });
  }

  return { open, close, render };
})();
