/* ============================================================
 * missions.js — retention layer:
 *   - daily LOGIN ladder (Day 1-7, cycling, streak-based)
 *   - daily MISSIONS (4/day, tracked during runs, claimable)
 *   - weekly MISSIONS (harder goals, Monday→Sunday week)
 *
 * Daily resets on calendar day change (missions.date).
 * Weekly resets when week key (Monday date) changes (weekly.week).
 * Both grant credits/gems via Profile.save().
 * UI = full-screen Rewards screen (hub language).
 * ============================================================ */
const Missions = (() => {
  const pad = n => (n < 10 ? '0' + n : '' + n);
  const dstr = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  const today = () => dstr(new Date());
  const yesterday = () => { const d = new Date(); d.setDate(d.getDate() - 1); return dstr(d); };
  const daySeed = () => { const d = new Date(); return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate(); };

  /** Monday date string for the current local week (week boundary). */
  function weekKey(from) {
    const d = from ? new Date(from) : new Date();
    // Local Monday: Sun=0 → back 6 days, Mon=1 → 0, … Sat=6 → back 5
    const day = d.getDay();
    const diff = day === 0 ? -6 : 1 - day;
    d.setHours(12, 0, 0, 0); // noon avoids DST edge cases
    d.setDate(d.getDate() + diff);
    return dstr(d);
  }
  function weekSeed() {
    // Stable seed from the Monday key (YYYY-MM-DD → int)
    const k = weekKey();
    return (+k.slice(0, 4)) * 10000 + (+k.slice(5, 7)) * 100 + (+k.slice(8, 10));
  }

  const grant = r => {
    const p = Profile.get();
    if (r.credits) p.credits += r.credits;
    if (r.gems) p.gems = (p.gems || 0) + r.gems;
    // Prefer gems in analytics when both present (premium payout)
    if (r.gems && r.credits) {
      Analytics.earnCurrency({ currency: 'gems', amount: r.gems, src: 'reward' });
      Analytics.earnCurrency({ currency: 'credits', amount: r.credits, src: 'reward' });
    } else {
      Analytics.earnCurrency({ currency: r.gems ? 'gems' : 'credits', amount: r.gems || r.credits, src: 'reward' });
    }
  };

  /** Compact multi-line reward for login cells (each currency on its own line). */
  const rewardLines = r => {
    const lines = [];
    if (r.credits) lines.push(`<span class="rw-r-line">${Icons.svg('credit', 12)} ${r.credits.toLocaleString()}</span>`);
    if (r.gems) lines.push(`<span class="rw-r-line">${Icons.svg('gem', 12)} ${r.gems}</span>`);
    return lines.join('');
  };
  /** Inline reward string for claim buttons / mission rows. */
  const rewardStr = r => {
    const parts = [];
    if (r.credits) parts.push(Icons.svg('credit') + ' ' + r.credits.toLocaleString());
    if (r.gems) parts.push(Icons.svg('gem') + ' ' + r.gems);
    return parts.join(' · ');
  };

  /* ---------- daily login ladder ---------- */
  // Doubled across the board (2026-08-30). The old ladder topped out at less
  // than one weapon upgrade for a full week of logins, which read as a chore
  // rather than a reason to come back.
  const LADDER = [
    { credits: 400 }, { credits: 800 }, { gems: 10 }, { credits: 1600 },
    { credits: 2400 }, { gems: 24 }, { credits: 5000, gems: 50 },
  ];
  function login() { const p = Profile.get(); if (!p.login) p.login = { last: '', streak: 0 }; return p.login; }
  function loginClaimable() { return login().last !== today(); }
  function claimLogin() {
    const l = login(); if (l.last === today()) return null;
    l.streak = (l.last === yesterday()) ? (l.streak || 0) + 1 : 1;
    l.last = today();
    const reward = LADDER[(l.streak - 1) % 7];
    grant(reward); Profile.save();
    if (typeof BattlePass !== 'undefined') BattlePass.addBonusXp(30);
    return reward;
  }

  /* ---------- daily missions (moderate) ---------- */
  const TEMPLATES = {
    kills:    { type: 'sum',  min: 60, max: 160, step: 10, reward: { credits: 400 } },
    boss:     { type: 'sum',  min: 1,  max: 3,   step: 1,  reward: { credits: 600 } },
    bombs:    { type: 'sum',  min: 3,  max: 8,   step: 1,  reward: { credits: 300 } },
    powerups: { type: 'sum',  min: 10, max: 25,  step: 5,  reward: { credits: 350 } },
    nukes:    { type: 'sum',  min: 2,  max: 5,   step: 1,  reward: { credits: 450 } },
    score:    { type: 'best', min: 6000, max: 20000, step: 2000, reward: { gems: 6 } },
    wave:     { type: 'best', min: 6,  max: 16,  step: 1,  reward: { credits: 500 } },
    credits:  { type: 'best', min: 800, max: 3000, step: 200, reward: { gems: 5 } },
    sectors:  { type: 'best', min: 2,  max: 5,   step: 1,  reward: { credits: 700 } },
  };
  const IDS = Object.keys(TEMPLATES);
  const DAILY_COUNT = 4;

  /* ---------- weekly missions (harder, bigger payouts) ---------- */
  // Same metric ids as daily so game.js track/trackBest feed both lists.
  const WEEKLY_TEMPLATES = {
    kills:    { type: 'sum',  min: 450, max: 900, step: 50,  reward: { credits: 3000, gems: 15 } },
    boss:     { type: 'sum',  min: 6,   max: 14,  step: 1,   reward: { gems: 22 } },
    bombs:    { type: 'sum',  min: 22,  max: 45,  step: 1,   reward: { credits: 2200, gems: 8 } },
    powerups: { type: 'sum',  min: 50,  max: 100, step: 10,  reward: { credits: 2000, gems: 10 } },
    nukes:    { type: 'sum',  min: 12,  max: 25,  step: 1,   reward: { gems: 14 } },
    score:    { type: 'best', min: 45000, max: 120000, step: 5000, reward: { gems: 28 } },
    wave:     { type: 'best', min: 18,  max: 32,  step: 2,   reward: { credits: 3500, gems: 12 } },
    credits:  { type: 'best', min: 6000, max: 18000, step: 1000, reward: { gems: 18 } },
    sectors:  { type: 'best', min: 7,   max: 14,  step: 1,   reward: { credits: 4000, gems: 16 } },
  };
  const WEEKLY_IDS = Object.keys(WEEKLY_TEMPLATES);
  const WEEKLY_COUNT = 3;

  function pickList(ids, templates, count, rng) {
    const pool = ids.slice();
    const list = [];
    for (let i = 0; i < count && pool.length; i++) {
      const id = pool.splice(Math.floor(rng() * pool.length), 1)[0];
      const t = templates[id];
      const steps = Math.floor((t.max - t.min) / t.step) + 1;
      const goal = t.min + Math.floor(rng() * steps) * t.step;
      list.push({ id, type: t.type, goal, progress: 0, claimed: false });
    }
    return list;
  }

  /** Daily list — regenerates when calendar day changes. */
  function ensure() {
    const p = Profile.get();
    if (!p.missions) p.missions = { date: '', list: [] };
    const day = today();
    if (p.missions.date !== day) {
      const rng = Engine.makeRng((daySeed() ^ 0x51ede1) >>> 0);
      p.missions = { date: day, list: pickList(IDS, TEMPLATES, DAILY_COUNT, rng) };
      Profile.save();
    }
    return p.missions;
  }

  /** Weekly list — regenerates when Monday week key changes. */
  function ensureWeekly() {
    const p = Profile.get();
    if (!p.weekly) p.weekly = { week: '', list: [] };
    const wk = weekKey();
    if (p.weekly.week !== wk) {
      const rng = Engine.makeRng((weekSeed() ^ 0xa7c31e) >>> 0);
      p.weekly = { week: wk, list: pickList(WEEKLY_IDS, WEEKLY_TEMPLATES, WEEKLY_COUNT, rng) };
      Profile.save();
    }
    return p.weekly;
  }

  function applySum(list, id, amount) {
    let ch = false;
    for (const q of list) {
      if (q.id === id && q.type === 'sum' && !q.claimed && q.progress < q.goal) {
        q.progress = Math.min(q.goal, q.progress + amount);
        ch = true;
      }
    }
    return ch;
  }
  function applyBest(list, id, value) {
    let ch = false;
    for (const q of list) {
      if (q.id === id && q.type === 'best' && !q.claimed && value > q.progress) {
        q.progress = Math.min(q.goal, value);
        ch = true;
      }
    }
    return ch;
  }

  /** Feed both daily + weekly from a single game event. */
  function track(id, amount) {
    const d = ensure();
    const w = ensureWeekly();
    const ch = applySum(d.list, id, amount) | applySum(w.list, id, amount);
    if (ch) Profile.save();
  }
  function trackBest(id, value) {
    const d = ensure();
    const w = ensureWeekly();
    const ch = applyBest(d.list, id, value) | applyBest(w.list, id, value);
    if (ch) Profile.save();
  }

  function claimMission(i) {
    const m = ensure(), q = m.list[i];
    if (!q || q.claimed || q.progress < q.goal) return null;
    q.claimed = true;
    const reward = TEMPLATES[q.id].reward;
    grant(reward); Profile.save();
    if (typeof BattlePass !== 'undefined') BattlePass.addBonusXp(50);
    return reward;
  }
  function claimWeekly(i) {
    const m = ensureWeekly(), q = m.list[i];
    if (!q || q.claimed || q.progress < q.goal) return null;
    q.claimed = true;
    const reward = WEEKLY_TEMPLATES[q.id].reward;
    grant(reward); Profile.save();
    if (typeof BattlePass !== 'undefined') BattlePass.addBonusXp(140);
    return reward;
  }

  function hasClaimable() {
    if (loginClaimable()) return true;
    if (ensure().list.some(q => !q.claimed && q.progress >= q.goal)) return true;
    if (ensureWeekly().list.some(q => !q.claimed && q.progress >= q.goal)) return true;
    return false;
  }

  /* ---------- Rewards panel UI ---------- */
  const el = () => document.getElementById('rewards');
  let onClose = null;

  function openPanel(cb) {
    onClose = cb || null;
    if (typeof Onboarding !== 'undefined' && Onboarding.enter) Onboarding.enter('rewards');
    render();
    el().classList.remove('hidden');
  }
  function closePanel() { el().classList.add('hidden'); if (onClose) { const c = onClose; onClose = null; c(); } }

  function goBack() {
    if (typeof FXTrans !== 'undefined') FXTrans.go({ style: 'cube', run: closePanel });
    else closePanel();
  }

  function missionRow(q, i, templates, weekly) {
    const done = q.progress >= q.goal;
    const pct = Math.min(100, Math.round(q.progress / q.goal * 100));
    const rew = templates[q.id].reward;
    const attr = weekly ? `data-wmis="${i}"` : `data-mis="${i}"`;
    const btn = q.claimed ? `<span class="rw-claimed">${T('mis.claimed')}</span>`
      : done ? `<button class="mini rw-claim ${weekly ? 'weekly' : ''}" ${attr}>${rewardStr(rew)}</button>`
      : `<span class="rw-prog">${q.progress.toLocaleString()}/${q.goal.toLocaleString()}</span>`;
    const textKey = weekly ? ('mis.w.' + q.id) : ('mis.' + q.id);
    return `<div class="rw-mission ${weekly ? 'weekly' : ''} ${q.claimed ? 'done' : ''}">
      <div class="rw-mtop"><span class="rw-mtext">${Tf(textKey, q.goal)}</span>${btn}</div>
      <div class="rw-bar"><div class="rw-fill ${weekly ? 'weekly' : ''}" style="width:${pct}%"></div></div>
    </div>`;
  }

  function render() {
    const prevWrap = el().querySelector('.hub-wrap');
    const savedScroll = prevWrap ? prevWrap.scrollTop : 0;
    const p = Profile.get();
    const credits = p.credits.toLocaleString();
    const gems = (p.gems || 0).toLocaleString();
    const l = login();
    const claimIdx = (l.last === today()) ? ((l.streak - 1) % 7) : ((l.last === yesterday() ? l.streak : 0) % 7);

    const dayCell = (r, i) => {
      const claimed = (l.last === today()) ? (i <= claimIdx) : (i < claimIdx);
      const isNext = loginClaimable() && i === claimIdx;
      return `<div class="rw-day ${claimed ? 'got' : ''} ${isNext ? 'next' : ''}" ${isNext ? 'data-login="1"' : ''}>
        <div class="rw-d">${T('mis.day')} ${i + 1}</div>
        <div class="rw-rewards">${rewardLines(r)}</div>
        ${claimed ? '<div class="rw-check">✓</div>' : ''}
      </div>`;
    };
    // Two rows: 1–4 then 5–7 (room for dual-currency day 7)
    const row1 = LADDER.slice(0, 4).map(dayCell).join('');
    const row2 = LADDER.slice(4).map((r, i) => dayCell(r, i + 4)).join('');

    const m = ensure();
    const missions = m.list.map((q, i) => missionRow(q, i, TEMPLATES, false)).join('');
    const w = ensureWeekly();
    const weekly = w.list.map((q, i) => missionRow(q, i, WEEKLY_TEMPLATES, true)).join('');

    el().innerHTML = `
      <div class="hub-wrap panel-scroll">
        <div class="scr-head">
          <button type="button" class="hub-icon-btn scr-back" id="rw-back" aria-label="${T('btn.back')}">${Icons.svg('chevron', 18)}</button>
          <div class="scr-title title-grad">${T('mis.title')}</div>
          <div class="curr-row">
            <span class="curr curr-gold">${Icons.svg('credit', 16)} ${credits}</span>
            <span class="curr-sep">|</span>
            <span class="curr curr-gem">${Icons.svg('gem', 16)} ${gems}</span>
          </div>
        </div>

        <div class="scr-body">
          <div class="hub-section-label rw-section">${T('mis.login')} · 🔥${l.streak || 0}</div>
          <div class="rw-ladder">
            <div class="rw-ladder-row rw-ladder-4">${row1}</div>
            <div class="rw-ladder-row rw-ladder-3">${row2}</div>
          </div>

          <div class="hub-section-label rw-section">${T('mis.daily')}</div>
          ${missions}

          <div class="hub-section-label rw-section">${T('mis.weekly')}</div>
          ${weekly}
        </div>

        <div class="scr-foot">
          <button id="rw-ok" class="btn btn-cta set-wide">✓ ${T('btn.ok')}</button>
        </div>
      </div>`;
    const newWrap = el().querySelector('.hub-wrap');
    if (newWrap) newWrap.scrollTop = savedScroll;
    VoxUI.bg(el(), 'rewards');
    wire();
  }

  function wire() {
    const root = el();
    const lg = root.querySelector('[data-login]');
    if (lg) lg.onclick = () => { claimLogin(); Engine.audio.power(); render(); };
    root.querySelectorAll('[data-mis]').forEach(b => b.onclick = () => {
      claimMission(+b.dataset.mis); Engine.audio.power(); render();
    });
    root.querySelectorAll('[data-wmis]').forEach(b => b.onclick = () => {
      claimWeekly(+b.dataset.wmis); Engine.audio.power(); render();
    });
    const back = root.querySelector('#rw-back');
    if (back) back.onclick = goBack;
    const ok = root.querySelector('#rw-ok');
    if (ok) ok.onclick = goBack;
  }

  return {
    LADDER, TEMPLATES, WEEKLY_TEMPLATES,
    ensure, ensureWeekly, weekKey,
    loginClaimable, claimLogin,
    track, trackBest, claimMission, claimWeekly, hasClaimable,
    openPanel, closePanel,
  };
})();
