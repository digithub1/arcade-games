/* ============================================================
 * contracts.js — DAILY CONTRACT: one standalone mission per day.
 *
 * The point: a maxed pilot has nothing left to spend credits on and nothing to
 * chase between runs. A contract is a single self-contained dare ("survive five
 * waves without taking a hit") that pays gems — the only currency that still
 * means something once the hangar is full.
 *
 * It is its OWN mission, not a rider on a campaign node: you launch it from the
 * contract panel, you pick the difficulty on the launch card, and the payout
 * scales with what you picked. The fight itself is a normal endless run — the
 * contract is a rule laid over it, plus a finish line.
 *
 * ONE difficulty counts. Once the contract is cleared the day is done; you
 * cannot clear it on Casual and then farm it again on ULTRA for the bigger
 * bounty. That makes the difficulty pick an actual decision instead of a ladder.
 *
 * DESIGN RULE: this file must not change how the game plays anywhere else. It
 * spawns nothing, edits no player state and gates no other mode. Outside a
 * contract run every hook is inert, and each one is wrapped at the call site —
 * delete the module and the rest of the game behaves identically.
 * ========================================================== */
const Contracts = (() => {
  /**
   * Templates. Each is a GOAL (the finish line) plus a RULE (what must hold the
   * whole way there). Keep them restatable in one line — a contract nobody can
   * repeat back is a chore, not a dare.
   *
   *   goal.kind 'waves'   — reach wave N of the endless escalation
   *             'bosses'  — kill N bosses (endless spawns one every 5 waves)
   *             'pickups' — collect N drops
   *   broke(r)  — the rule is now unsalvageable; end the run and say why
   */
  const TEMPLATES = [
    {
      id: 'noHit', reward: { gems: 18, credits: 4000, xp: 500 },
      goal: { kind: 'waves', n: 5 },
      broke: r => (r.hits > 0 ? 'ctr.fail.hit' : null),
    },
    {
      id: 'noSuper', reward: { gems: 22, credits: 5000, xp: 600 },
      goal: { kind: 'bosses', n: 1 },
      broke: r => (r.supers > 0 ? 'ctr.fail.super' : null),
    },
    {
      id: 'oneGun', reward: { gems: 16, credits: 3500, xp: 450 },
      goal: { kind: 'waves', n: 6 },
      broke: r => (r.weaponsUsed.size > 1 ? 'ctr.fail.gun' : null),
    },
    {
      id: 'flawlessBoss', reward: { gems: 28, credits: 6000, xp: 750 },
      goal: { kind: 'bosses', n: 1 },
      broke: r => (r.hits > 0 ? 'ctr.fail.hit' : null),
    },
    {
      id: 'noShield', reward: { gems: 20, credits: 4500, xp: 550 },
      goal: { kind: 'waves', n: 6 },
      broke: r => (r.hits > 1 ? 'ctr.fail.hits2' : null),
    },
    {
      id: 'bossRush', reward: { gems: 24, credits: 5000, xp: 650 },
      goal: { kind: 'bosses', n: 2 },
      broke: () => null,
    },
    {
      id: 'scavenger', reward: { gems: 14, credits: 3000, xp: 400 },
      goal: { kind: 'pickups', n: 25 },
      broke: () => null,
    },
    // ---- endurance / combined-rule jobs ----
    {
      id: 'marathon', reward: { gems: 26, credits: 5500, xp: 700 },
      goal: { kind: 'waves', n: 10 },
      broke: () => null,
    },
    {
      id: 'ironclad', reward: { gems: 30, credits: 6500, xp: 800 },
      goal: { kind: 'waves', n: 8 },
      broke: r => (r.hits > 2 ? 'ctr.fail.hits3' : null),
    },
    {
      // Two rules at once — the only template that stacks them, so it reads as
      // the "purist" run rather than another single-restriction job.
      id: 'purist', reward: { gems: 34, credits: 7000, xp: 900 },
      goal: { kind: 'waves', n: 5 },
      broke: r => (r.supers > 0 ? 'ctr.fail.super' : r.weaponsUsed.size > 1 ? 'ctr.fail.gun' : null),
    },
    {
      id: 'hoarder', reward: { gems: 20, credits: 4200, xp: 560 },
      goal: { kind: 'pickups', n: 45 },
      broke: () => null,
    },
    {
      id: 'executioner', reward: { gems: 32, credits: 6800, xp: 850 },
      goal: { kind: 'bosses', n: 3 },
      broke: () => null,
    },
    {
      // Against the clock instead of against a rule: the only job you can fail
      // by being careful, which is exactly why it is worth having.
      id: 'blitz', reward: { gems: 28, credits: 6000, xp: 760 },
      goal: { kind: 'waves', n: 6 },
      timeLimit: 115,
      broke: r => (r.t > 115 ? 'ctr.fail.time' : null),
    },
  ];
  const byId = Object.fromEntries(TEMPLATES.map(t => [t.id, t]));

  /* ── How hard a contract is ────────────────────────────────────────────────
   * A contract is endgame content whatever difficulty you pick, so it is pinned
   * to the LAST campaign part: chapter-5 enemies, chapter-5 scaling, with the
   * chosen difficulty multiplying on top. Before this it ran the endless spawner
   * from wave 0 in sector 1 — the weakest content in the game — which is why it
   * was a formality.
   *
   * Both numbers are the campaign's own formulas (campaign.js genMap) rather
   * than invented ones, so a contract lands on a real part-5 node's power curve
   * instead of drifting away from it:
   *     tier      = (part - 1) * 3 + ring
   *     startWave = 4 + tier * 4
   */
  const PART = 5, RING = 1;
  const TIER = (PART - 1) * 3 + RING;          // 13
  const START_WAVE = 4 + TIER * 4;             // 56
  /** Same tier multipliers game.js applies to a campaign node. */
  const TIER_MODS = {
    enemyHp: 1 + TIER * 0.08,
    bossHp: 1 + TIER * 0.04,
    bulletSpeed: 1 + TIER * 0.03,
    enemyDensity: 1 + TIER * 0.06,
  };

  /**
   * Environmental hazards. Chapter 4-5 mechanics plus radiation — the same set
   * the late campaign uses. Never all five at once: a subset is drawn per day
   * and folded in one at a time as the waves climb, so each contract has its own
   * character instead of every one being the same soup.
   */
  const HAZARD_POOL = ['radiation', 'rocks', 'wind', 'homing', 'magma', 'bubbles'];
  const HAZARD_COUNT = { casual: 1, normal: 2, hard: 3, brutal: 3 };
  /** Radiation bites harder the higher you set the dial. */
  const RAD_BOOST = { casual: 0, normal: 0, hard: 1, brutal: 2 };

  function hashOf(str) {
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619) >>> 0; }
    return h >>> 0;
  }

  /**
   * [{ key, atWave, boost }] — which hazards this contract brings and when.
   * Seeded on the day + template so everyone flying today's contract faces the
   * same environment (the whole point of a daily dare), while tomorrow's differs.
   */
  function hazardPlan(diffKey, slot) {
    const i = slot != null ? slotOf(slot) : runSlot;
    const s = state(i);
    const diff = diffKey || s.diff || 'normal';
    const rng = Engine.makeRng(hashOf(s.day + '|' + s.id + '|haz|' + i));
    // Jammer bubbles are ALWAYS on a contract — it is opt-in endgame content and
    // they are the one hazard that tests piloting rather than hull. The rest of
    // the environment is drawn around them.
    const pool = HAZARD_POOL.filter(k => k !== 'bubbles');
    for (let i = pool.length - 1; i > 0; i--) {      // seeded shuffle
      const j = Math.floor(rng() * (i + 1));
      const t = pool[i]; pool[i] = pool[j]; pool[j] = t;
    }
    const n = Math.min(pool.length, HAZARD_COUNT[diff] != null ? HAZARD_COUNT[diff] : 2);
    const plan = pool.slice(0, n).map((key, i) => ({
      key,
      atWave: i * 2 + 1,                              // 1, 3, 5 waves into the run
      boost: key === 'radiation' ? (RAD_BOOST[diff] || 0) : 0,
    }));
    plan.unshift({ key: 'bubbles', atWave: 0, boost: 0 });
    return plan;
  }

  /**
   * Payout by difficulty. Casual pays real money but not the good money; ULTRA
   * roughly triples it. Deliberately steeper than the credit multipliers in
   * Meta.DIFFICULTIES — a contract is opt-in, so the top end can be greedier.
   */
  const DIFF_MULT = { casual: 0.5, normal: 1, hard: 1.7, brutal: 3 };
  const diffMult = key => DIFF_MULT[key] != null ? DIFF_MULT[key] : 1;
  const round10 = n => Math.round(n / 10) * 10;
  function rewardFor(tpl, diffKey) {
    const m = diffMult(diffKey);
    return {
      gems: Math.max(1, Math.round(tpl.reward.gems * m)),
      credits: round10(tpl.reward.credits * m),
      xp: Math.round(tpl.reward.xp * m),
    };
  }

  const pad = n => (n < 10 ? '0' + n : '' + n);
  function dayKey(d) {
    const x = d || new Date();
    return `${x.getFullYear()}-${pad(x.getMonth() + 1)}-${pad(x.getDate())}`;
  }
  /**
   * Date-seeded pick, so everyone on the same day gets the same dare — but the
   * last few days are excluded, otherwise a 13-template pool still hands out
   * repeats often enough to feel like it is not rolling at all.
   */
  const RECENT_MEMORY = 5;
  function recentIds() {
    const p = Profile.get();
    return Array.isArray(p.contractRecent) ? p.contractRecent : [];
  }
  function rememberId(id) {
    const p = Profile.get();
    const list = recentIds().filter(x => x !== id);
    list.push(id);
    while (list.length > RECENT_MEMORY) list.shift();
    p.contractRecent = list;
    Profile.save();
  }
  function pickFor(key) {
    let h = 0;
    for (let i = 0; i < key.length; i++) h = (h * 31 + key.charCodeAt(i)) >>> 0;
    const recent = recentIds();
    const fresh = TEMPLATES.filter(t => !recent.includes(t.id));
    const pool = fresh.length ? fresh : TEMPLATES;
    return pool[h % pool.length].id;
  }

  /* ── Two slots ─────────────────────────────────────────────────────────────
   * 0 = the day's contract, always available.
   * 1 = a SECOND contract, unlocked once a day by watching a rewarded ad. It is
   *     seeded from a different key so it is never the same dare as slot 0, and
   *     it lives in its own profile field with its own done/claimed/difficulty —
   *     the two never share progress.
   */
  const SLOTS = 2;
  const FIELD = ['contract', 'contract2'];
  const slotOf = i => (i === 1 ? 1 : 0);

  /** Seeded pick for a slot; slot 1 must differ from slot 0. */
  function pickForSlot(key, slot) {
    const first = pickFor(key);
    if (slot === 0) return first;
    let h = 0;
    const k2 = key + '|b';
    for (let i = 0; i < k2.length; i++) h = (h * 31 + k2.charCodeAt(i)) >>> 0;
    const pool = TEMPLATES.filter(t => t.id !== first);
    return pool[h % pool.length].id;
  }

  function state(slot) {
    const i = slotOf(slot);
    const f = FIELD[i];
    const p = Profile.get();
    const key = dayKey();
    if (!p[f] || p[f].day !== key) {
      const id = pickForSlot(key, i);
      p[f] = {
        day: key, id, done: false, claimed: false, diff: '',
        // slot 0 is always open; slot 1 has to be earned with an ad
        unlocked: i === 0,
      };
      Profile.save();
      rememberId(id);
    }
    if (!byId[p[f].id]) {                  // template retired in an update
      p[f].id = pickForSlot(key, i);
      Profile.save();
    }
    if (i === 0 && !p[f].unlocked) { p[f].unlocked = true; Profile.save(); }
    return p[f];
  }

  const today = slot => byId[state(slot).id];
  const isDone = slot => !!state(slot).done;
  const isClaimed = slot => !!state(slot).claimed;
  const isUnlocked = slot => !!state(slot).unlocked;
  /** Any slot with a reward waiting — drives the hub badge. */
  const hasClaimable = () => {
    for (let i = 0; i < SLOTS; i++) {
      const s = state(i);
      if (s.unlocked && s.done && !s.claimed) return true;
    }
    return false;
  };
  /** Difficulty the contract was beaten on ('' until it is). */
  const clearedOn = slot => state(slot).diff || '';
  /** The second slot can be opened today (ad available and not yet taken). */
  function canUnlockSecond() {
    if (state(1).unlocked) return false;
    try { return !!(typeof Store !== 'undefined' && Store.rewardedAvailable()); } catch (e) { return false; }
  }
  /** Watch-an-ad → open slot 1 for the rest of the day. */
  function unlockSecond(cb) {
    if (state(1).unlocked) { if (cb) cb(false); return; }
    try {
      Store.showRewarded('contract2', () => {
        state(1).unlocked = true;
        Profile.save();
        try { Engine.audio.power(); } catch (e) {}
      }).then(ok => { if (cb) cb(!!ok && state(1).unlocked); });
    } catch (e) { if (cb) cb(false); }
  }

  /* ---------------- run tally (written only by the hooks) ---------------- */
  let run = null;
  /** Which slot the current contract run belongs to. */
  let runSlot = 0;

  /** Human-readable goal line, used on the launch card and in the HUD chip. */
  function goalText(tpl) {
    const t = tpl || today(0);
    if (!t) return '';
    const base = Tf('ctr.goal.' + t.goal.kind, t.goal.n);
    return t.timeLimit ? base + ' · ' + Tf('ctr.goal.time', t.timeLimit) : base;
  }
  function goalProgress() {
    if (!run) return 0;
    const t = today(runSlot);
    if (!t) return 0;
    if (t.goal.kind === 'waves') return Math.min(run.wave, t.goal.n);
    if (t.goal.kind === 'bosses') return Math.min(run.bossKilled, t.goal.n);
    return Math.min(run.pickups, t.goal.n);
  }
  /** HUD chip during a contract run: the objective, never the wave number. */
  function hudLabel() {
    const t = today(runSlot);
    if (!run || !t) return null;
    const base = Tf('ctr.hud.' + t.goal.kind, goalProgress(), t.goal.n);
    if (!t.timeLimit) return base;
    return base + ' · ' + Math.max(0, Math.ceil(t.timeLimit - run.t)) + 's';
  }

  function fresh(kind, diffKey) {
    return {
      kind, diff: diffKey || 'normal',
      hits: 0, supers: 0, bossKilled: 0, pickups: 0, t: 0,
      wave: 0, wave0: null,        // waves are counted RELATIVE to the run's start
      weaponsUsed: new Set(), settled: false,
    };
  }
  /** Waves survived in the current contract run (0 outside one). */
  function wavesDone() { return run ? run.wave : 0; }

  /**
   * Called from beginRun. Only a CONTRACT run tallies anything — a contract that
   * completes itself while you happen to be playing something else is not a
   * contract, and every other mode must behave exactly as it did before.
   */
  function runStart(type, diffKey, slot) {
    run = (type === 'contract') ? fresh(type, diffKey) : null;
    runSlot = slotOf(slot);
  }
  function hit() { if (run) run.hits++; }
  function superUsed() { if (run) run.supers++; }
  function pickup() { if (run) run.pickups++; }
  function weaponFired(key) { if (run && key) run.weaponsUsed.add(key); }
  function bossKilled() { if (run) run.bossKilled++; }
  /** Campaign nodes no longer feed contracts; kept so the old hook stays inert. */
  function stageWon() {}

  /**
   * Polled once a frame during a contract run (game.js). Fires exactly once:
   * either the rule broke or the finish line was crossed.
   */
  function tick(wave, dt) {
    if (!run || run.settled) return;
    const t = today(runSlot);
    if (!t) return;
    run.t += (dt || 0);
    // The spawner starts deep in the escalation (START_WAVE), so goals count
    // waves survived in THIS run — "wave 3/5", not "wave 59/5".
    if (run.wave0 == null) run.wave0 = wave | 0;
    run.wave = Math.max(run.wave, (wave | 0) - run.wave0);
    const why = t.broke(run);
    if (why) {
      run.settled = true;
      try { Game.contractFailed(why); } catch (e) {}
      return;
    }
    if (goalProgress() >= t.goal.n) {
      run.settled = true;
      try { Game.contractWon(); } catch (e) {}
    }
  }

  /**
   * Rewarded revive during a contract. The old behaviour dropped the player back
   * into a run whose rule was ALREADY broken — the ad bought nothing. Clearing
   * the violated tallies makes the revive mean what it says: a clean sheet from
   * here. Progress toward the goal (waves, bosses, pickups) is deliberately kept.
   */
  function reviveClear() {
    if (!run) return false;
    run.hits = 0;
    run.supers = 0;
    run.weaponsUsed = new Set();
    run.settled = false;
    // Blitz is a race, so give back the seconds the death cost rather than the
    // whole clock — otherwise reviving would be a strict downgrade.
    const t = today(runSlot);
    if (t && t.timeLimit) run.t = Math.max(0, run.t - 6);
    return true;
  }

  /**
   * The run was won — bank the contract at the difficulty it was flown on.
   * Returns what was earned so the results sheet can show it.
   */
  function completeRun(diffKey, slot) {
    const i = slot != null ? slotOf(slot) : runSlot;
    const s = state(i);
    const t = today(i);
    if (!t) return null;
    const diff = diffKey || (run && run.diff) || 'normal';
    run = null;
    if (s.done) return { id: t.id, slot: i, reward: rewardFor(t, s.diff || diff), already: true };
    s.done = true;
    s.diff = diff;
    Profile.save();
    return { id: t.id, slot: i, reward: rewardFor(t, diff) };
  }

  function claim(slot) {
    const i = slotOf(slot);
    const s = state(i);
    if (!s.unlocked || !s.done || s.claimed) return null;
    const t = today(i);
    if (!t) return null;
    const reward = rewardFor(t, s.diff || 'normal');
    const p = Profile.get();
    p.gems = (p.gems || 0) + reward.gems;
    p.credits += reward.credits;
    s.claimed = true;
    Profile.save();
    let xp = 0;
    // addBonusXp caps a single call at 200 — a contract is worth more than a
    // mission claim, so use addXp (still subject to the daily soft cap).
    try { xp = BattlePass.addXp(reward.xp) || 0; } catch (e) {}
    try {
      Analytics.earnCurrency({ currency: 'gems', amount: reward.gems, src: 'contract' });
      Analytics.earnCurrency({ currency: 'credits', amount: reward.credits, src: 'contract' });
    } catch (e) {}
    try { Engine.audio.coin(); } catch (e) {}
    return { reward, xp };
  }

  /* ---------------- panel ---------------- */
  let onClose = null;
  /** Difficulty selected on each launch card (not the player's campaign setting). */
  const pickDiff = ['normal', 'normal'];
  const el = () => document.getElementById('contracts');

  function defaultDiff() {
    const p = Profile.get();
    return Meta.DIFFICULTIES[p.difficulty] ? p.difficulty : 'normal';
  }

  function open(cb) {
    onClose = cb || null;
    for (let i = 0; i < SLOTS; i++) {
      if (!Meta.DIFFICULTIES[pickDiff[i]]) pickDiff[i] = defaultDiff();
    }
    if (typeof Onboarding !== 'undefined' && Onboarding.enter) Onboarding.enter('contracts');
    render();
    el().classList.remove('hidden');
    // First visit only — Onboarding.seen() keeps it to once ever.
    if (typeof Onboarding !== 'undefined' && Onboarding.tip) {
      setTimeout(() => {
        if (el().classList.contains('hidden')) return;
        try {
          Onboarding.tip('contracts', 'tip.contracts',
            { icon: Icons.svg('target', 18), pos: 'side', ms: 6500, scope: 'contracts' });
        } catch (e) {}
      }, 320);
    }
  }
  function close() {
    el().classList.add('hidden');
    if (onClose) { const f = onClose; onClose = null; f(); }
  }
  function goBack() {
    if (typeof FXTrans !== 'undefined') FXTrans.go({ style: 'cube', run: close });
    else close();
  }

  function resetsIn() {
    const now = new Date();
    const end = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const ms = Math.max(0, end - now);
    const h = Math.floor(ms / 3600000);
    const m = Math.floor((ms % 3600000) / 60000);
    return h > 0 ? Tf('ctr.resetH', h, m) : Tf('ctr.resetM', m);
  }

  function launch(slot) {
    const i = slotOf(slot);
    const diff = Meta.DIFFICULTIES[pickDiff[i]] ? pickDiff[i] : 'normal';
    const go = () => { el().classList.add('hidden'); Game.startContract(diff, i); };
    onClose = null;                                // we are leaving, not returning
    if (typeof FXTrans !== 'undefined') FXTrans.go({ style: 'warp', run: go });
    else go();
  }

  /** One contract card. Slot 1 renders locked until the ad has been watched. */
  function cardHtml(i) {
    const s = state(i);
    const t = today(i);
    const locked = !s.unlocked;
    const stateCls = locked ? 'locked' : s.claimed ? 'claimed' : s.done ? 'done' : 'open';
    const stateLbl = locked ? T('ctr.locked2')
      : s.claimed ? T('ctr.claimed') : s.done ? T('ctr.ready') : T('ctr.open');
    const dPick = pickDiff[i] || 'normal';
    const reward = rewardFor(t, s.done ? (s.diff || 'normal') : dPick);

    if (locked) {
      // A host with no rewarded video never sees this card at all. The slot is
      // bought with an ad and every line describing it says so, and moderation
      // rejects ad wording on platforms without ads "даже в тексте описания" —
      // so the whole offer is dropped rather than reworded into something the
      // player could never act on.
      // Same rule as the shop's watch-a-video rows: this is a list of OFFERS,
      // which is what a moderator opens and reads, so it needs the host to
      // advertise at all — not merely to have rewarded video.
      if (typeof Store !== 'undefined' && Store.adOffersAllowed && !Store.adOffersAllowed()) return '';
      // Deliberately shows the reward but NOT the dare: the ad has to buy
      // something, and "another contract worth ~N gems" is the pitch.
      const canAd = canUnlockSecond();
      return `
        <div class="ctr-card glass-card ctr-card-locked ${stateCls}">
          <div class="ctr-top">
            <span class="ctr-state ${stateCls}">${stateLbl}</span>
            <span class="ctr-timer">${resetsIn()}</span>
          </div>
          <div class="ctr-name ctr-name-locked">${T('ctr.second.name')}</div>
          <div class="ctr-desc">${T('ctr.second.desc')}</div>
          <div class="ctr-rewards">
            <span class="ctr-rw">${Icons.svg('gem', 18)} ~${rewardFor(t, 'normal').gems}</span>
          </div>
          ${canAd
            ? `<button type="button" class="btn btn-cta set-wide" id="ctr-unlock2">▶ ${T('ctr.second.watch')}</button>`
            : `<p class="hg-hint">${T('ctr.second.noAd')}</p>`}
        </div>`;
    }

    // Difficulty is a decision, not a ladder: it is locked once the contract is
    // cleared, and the card shows which one it was cleared on.
    const diffRow = s.done
      ? `<div class="ctr-difflocked">${T('ctr.clearedOn')} <b class="diff-tint-${s.diff || 'normal'}">${T('diff.' + (s.diff || 'normal'))}</b></div>`
      : `<div class="ctr-diff">
           <div class="ctr-diff-lbl">${T('ctr.pickDiff')}</div>
           <div class="seg-row ctr-diff-row">
             ${Meta.DIFF_ORDER.map(k => `
               <button type="button" class="seg seg-${k} ${dPick === k ? 'on' : ''}" data-ctrdiff="${i}:${k}">
                 ${T('diff.' + k)}
               </button>`).join('')}
           </div>
           <div class="ctr-diff-note">${Tf('ctr.diffPays', 'x' + diffMult(dPick))}</div>
         </div>`;

    return `
      <div class="ctr-card glass-card glass-card-gold ${stateCls}">
        <div class="ctr-top">
          <span class="ctr-state ${stateCls}">${stateLbl}</span>
          <span class="ctr-timer">${i === 0 ? resetsIn() : T('ctr.second.tag')}</span>
        </div>
        <div class="ctr-name">${T('ctr.' + s.id + '.name')}</div>
        <div class="ctr-desc">${T('ctr.' + s.id + '.desc')}</div>
        <div class="ctr-goal">${Icons.svg('upAim', 16)} ${goalText(t)}</div>
        <div class="ctr-threat">
          <span class="ctr-threat-tag">${T('ctr.threat')}</span>
          <span class="ctr-threat-list">${hazardPlan(s.done ? (s.diff || 'normal') : dPick, i)
            .map(h => T('haz.' + h.key)).join(' · ')}</span>
        </div>
        ${diffRow}
        <div class="ctr-rewards">
          <span class="ctr-rw">${Icons.svg('gem', 18)} ${reward.gems}</span>
          <span class="ctr-rw">${Icons.svg('credit', 18)} ${reward.credits.toLocaleString()}</span>
          <span class="ctr-rw">${Icons.svg('pass', 18)} ${reward.xp}</span>
        </div>
        ${s.done
          ? `<button type="button" class="btn ${s.claimed ? 'btn-ghost' : 'btn-cta'} set-wide"
               data-ctrclaim="${i}" ${s.claimed ? 'disabled' : ''}>
               ${s.claimed ? T('ctr.claimed') : T('ctr.claim')}
             </button>`
          : `<button type="button" class="btn btn-cta set-wide" data-ctrgo="${i}">${T('ctr.launch')}</button>`}
      </div>`;
  }

  function render() {
    const p = Profile.get();
    const credits = p.credits.toLocaleString();
    const gems = (p.gems || 0).toLocaleString();
    const s0 = state(0);
    const cards = [];
    for (let i = 0; i < SLOTS; i++) cards.push(cardHtml(i));

    el().innerHTML = `
      <canvas class="scene-bg" data-scene="hub"></canvas>
      <div class="hub-wrap panel-scroll">
        <div class="scr-head">
          <button type="button" class="hub-icon-btn scr-back" id="ctr-back" aria-label="${T('btn.back')}">${Icons.svg('chevron', 18)}</button>
          <div class="scr-title title-grad">${T('ctr.title')}</div>
          <div class="curr-row">
            <span class="curr curr-gold">${Icons.svg('credit', 16)} ${credits}</span>
            <span class="curr-sep">|</span>
            <span class="curr curr-gem">${Icons.svg('gem', 16)} ${gems}</span>
          </div>
        </div>

        <div class="scr-body">
          <p class="hg-hint">${T('ctr.intro')}</p>
          ${cards.join('')}
          <p class="hg-hint ctr-foot">${s0.done ? T('ctr.whereDone') : T('ctr.where')}</p>
        </div>

        <div class="scr-foot">
          <button id="ctr-ok" class="btn btn-ghost set-wide">${T('btn.done')}</button>
        </div>
      </div>`;
    VoxUI.scan(el());
    el().querySelector('#ctr-back').onclick = goBack;
    el().querySelector('#ctr-ok').onclick = goBack;
    el().querySelectorAll('[data-ctrdiff]').forEach(b => b.onclick = () => {
      const [i, k] = b.dataset.ctrdiff.split(':');
      if (pickDiff[i] === k) return;
      pickDiff[i] = k;
      Engine.audio.blip(620, 0.04, 'sine', 0.08);
      render();
    });
    el().querySelectorAll('[data-ctrclaim]').forEach(b => b.onclick = () => {
      if (!claim(+b.dataset.ctrclaim)) return;
      render();
      try { Hub.render(); } catch (e) {}
    });
    el().querySelectorAll('[data-ctrgo]').forEach(b => b.onclick = () => launch(+b.dataset.ctrgo));
    const un = el().querySelector('#ctr-unlock2');
    if (un) un.onclick = () => {
      un.disabled = true;
      unlockSecond(ok => {
        if (ok) { render(); try { Hub.render(); } catch (e) {} }
        else un.disabled = false;
      });
    };
  }

  return {
    TEMPLATES, SLOTS, today, state, isDone, isClaimed, isUnlocked, hasClaimable, clearedOn, claim,
    canUnlockSecond, unlockSecond,
    rewardFor, diffMult, goalText, hudLabel,
    open, close, dayKey, launch,
    // run setup (game.js): chapter-5 power + this contract's environment
    TIER, TIER_MODS, START_WAVE, HAZARD_POOL, hazardPlan, wavesDone,
    // hooks (game.js)
    runStart, hit, superUsed, pickup, weaponFired, bossKilled, stageWon, tick, completeRun, reviveClear,
  };
})();
