/* ============================================================
 * story.js — Comm Window (cyberpunk dialogue) + script catalog.
 *
 * Stack UX: plates auto-advance bottom-up, max 2 visible; a 3rd
 * pushes the top one out. Skip is separate. Per-char plate color +
 * distinct silhouettes.
 *
 * Bible-driven beats: part enter, Vex, Aegis, pre/post gate, warlord,
 * supply Unit-10, mechanic onboarding. Freezes Game via mode='story'
 * when pauseGame is true.
 * ============================================================ */
const Story = (() => {
  const CHARS = {
    nova:    { nameKey: 'char.nova',    color: '#ffd86b', sil: 'nova' },
    aria:    { nameKey: 'char.aria',    color: '#4ad6ff', sil: 'aria' },
    vex:     { nameKey: 'char.vex',     color: '#ff5bd0', sil: 'vex' },
    unit10:  { nameKey: 'char.unit10',  color: '#7dffa0', sil: 'unit' },
    warlord: { nameKey: 'char.warlord', color: '#ff6a4a', sil: 'warlord' },
    pilot:   { nameKey: 'char.pilot',   color: '#9fe9ff', sil: 'pilot' },
  };

  /**
   * Script catalog — [charId, textKey] lines.
   * Keys map 1:1 to bible §5 (i18n).
   */
  const SCRIPTS = {
    // ── Part enter ──
    'part1.enter': [['nova', 'story.p1.enter.0'], ['aria', 'story.p1.enter.1']],
    // part2 enter lines are the same as part1.afterGate (gate sealed) — shown once after warlord
    'part2.enter': [],
    'part3.enter': [['aria', 'story.p3.enter.0'], ['nova', 'story.p3.enter.1']],
    'part4.enter': [['aria', 'story.p4.enter.0'], ['nova', 'story.p4.enter.1']],
    'part5.enter': [['aria', 'story.p5.enter.0'], ['nova', 'story.p5.enter.1']],

    // ── Vex contacts ──
    'part2.vex':  [['vex', 'story.p2.vex.0'], ['aria', 'story.p2.vex.1']],
    'part2.vex2': [['vex', 'story.p2.vex2.0'], ['nova', 'story.p2.vex2.1']],
    'part3.vex':  [['vex', 'story.p3.vex.0'], ['aria', 'story.p3.vex.1']],
    'part3.vex2': [['vex', 'story.p3.vex2.0'], ['nova', 'story.p3.vex2.1']],
    'part4.vex':  [['vex', 'story.p4.vex.0'], ['nova', 'story.p4.vex.1']],
    'part4.vex2': [['vex', 'story.p4.vex2.0'], ['aria', 'story.p4.vex2.1']],
    'part5.vex':  [['vex', 'story.p5.vex.0'], ['aria', 'story.p5.vex.1']],
    'part5.vex2': [['vex', 'story.p5.vex2.0'], ['aria', 'story.p5.vex2.1']],

    // ── Aegis parts ──
    'part1.aegis': [['aria', 'story.p1.aegis.0'], ['nova', 'story.p1.aegis.1']],
    'part2.aegis': [['aria', 'story.p2.aegis.0'], ['nova', 'story.p2.aegis.1']],
    'part3.aegis': [['aria', 'story.p3.aegis.0'], ['nova', 'story.p3.aegis.1']],
    'part4.aegis': [['aria', 'story.p4.aegis.0'], ['nova', 'story.p4.aegis.1']],
    'part5.aegis': [['aria', 'story.p5.aegis.0'], ['nova', 'story.p5.aegis.1'], ['vex', 'story.p5.aegis.2']],
    'aegis.complete': [['aria', 'story.aegis.done.0'], ['nova', 'story.aegis.done.1'], ['vex', 'story.aegis.done.2']],

    // ── Gates ──
    'part1.preGate': [['aria', 'story.p1.gate.0'], ['nova', 'story.p1.gate.1']],
    'part2.preGate': [['aria', 'story.p2.gate.0'], ['nova', 'story.p2.gate.1']],
    'part3.preGate': [['aria', 'story.p3.gate.0'], ['nova', 'story.p3.gate.1']],
    'part4.preGate': [['aria', 'story.p4.gate.0'], ['nova', 'story.p4.gate.1']],
    'part5.preGate': [['aria', 'story.p5.gate.0'], ['nova', 'story.p5.gate.1']],
    'part1.afterGate': [['nova', 'story.p1.after.0'], ['aria', 'story.p1.after.1']],
    'part2.afterGate': [['nova', 'story.p2.after.0'], ['aria', 'story.p2.after.1']],
    'part3.afterGate': [['nova', 'story.p3.after.0'], ['aria', 'story.p3.after.1']],
    'part4.afterGate': [['nova', 'story.p4.after.0'], ['aria', 'story.p4.after.1']],
    'part5.afterGate': [['aria', 'story.p5.after.0'], ['nova', 'story.p5.after.1']],
    'part5.finale': [['aria', 'story.p5.finale.0'], ['nova', 'story.p5.finale.1']],
    'part5.epilogue': [
      ['vex',  'story.p5.epilogue.0'],
      ['aria', 'story.p5.epilogue.1'],
      ['vex',  'story.p5.epilogue.2'],
      ['nova', 'story.p5.epilogue.3'],
    ],

    // ── Warlords (before fight) ──
    'part1.warlord': [['warlord', 'story.wl.1']],
    'part2.warlord': [['warlord', 'story.wl.2']],
    'part3.warlord': [['warlord', 'story.wl.3']],
    'part4.warlord': [['warlord', 'story.wl.4']],
    'part5.warlord': [['warlord', 'story.wl.5']],

    // ── Supply / mechanics onboarding (once) ──
    'base.first':  [['unit10', 'story.base.first.0'], ['aria', 'story.base.first.1']],
    'base.hold':   [['aria', 'story.base.hold.0'], ['nova', 'story.base.hold.1']],
    'relay.first': [['aria', 'story.relay.first.0'], ['nova', 'story.relay.first.1']],
    'research.first': [['aria', 'story.research.first.0'], ['nova', 'story.research.first.1']],

    // ── First-flight intro briefing ──
    'intro.briefing': [
      ['nova', 'story.intro.0'],
      ['pilot', 'story.intro.1'],
      ['nova', 'story.intro.2'],
    ],
    // After the practice wave — beat before hub
    'intro.outro': [
      ['nova', 'story.intro.outro.0'],
      ['pilot', 'story.intro.outro.1'],
    ],
  };

  // Legacy world-index dialogues (endless / old campaign path).
  const DIALOGUES = {
    0: SCRIPTS['part1.enter'],
    1: [['aria', 'story.p3.enter.0'], ['nova', 'story.p3.enter.1']],
    2: [['aria', 'story.p3.enter.0'], ['nova', 'story.p3.enter.1']],
    3: SCRIPTS['part2.vex'],
    4: SCRIPTS['part4.vex'],
    5: [['aria', 'story.p3.enter.0'], ['nova', 'story.p3.enter.1']],
    6: SCRIPTS['part3.vex'],
    7: SCRIPTS['part5.vex'],
  };

  const TYPE_MS = 13;       // typewriter pace — was 8, which outran comfortable reading
  const HOLD_MS = 1750;     // pause after typewriter before auto-next
  const MAX_VISIBLE = 2;

  let lines = [], idx = 0, done = null, opts = {};
  let typeTimer = null, holdTimer = null;
  let fullText = '', shown = 0, typing = false;
  let cardSeq = 0;
  let curCharId = 'aria';
  let voiceTick = 0;
  /** @type {{id:number, el:HTMLElement}[]} bottom = newest */
  let stack = [];

  const el = () => document.getElementById('story');

  function seenStore() {
    if (typeof Campaign !== 'undefined' && Campaign.ensure) {
      const c = Campaign.ensure();
      if (!c.storySeen) c.storySeen = {};
      return c.storySeen;
    }
    const p = Profile.get();
    if (!p.storySeen) p.storySeen = {};
    return p.storySeen;
  }

  function hasSeen(id) { return !!seenStore()[id]; }
  function markSeen(id) {
    if (!id) return;
    seenStore()[id] = true;
    Profile.save();
  }

  /**
   * Play a script by id or raw line array.
   * opts: { onDone, skippable=true, pauseGame=true, once=false, force=false, warlordKey }
   */
  function isAegisScript(id) {
    return !!(id && /aegis/.test(id));
  }
  function aegisAssembled() {
    try {
      const p = Profile.get();
      return !!(p.ownedShips && p.ownedShips.includes(typeof Meta !== 'undefined' ? Meta.STORY_SHIP : 'aegis'));
    } catch (e) { return false; }
  }
  /** After any difficulty is cleared, campaign story stays off unless Settings replay is on. */
  function campaignStoryMuted() {
    try {
      const p = Profile.get();
      if (!p.campaignEverCleared) return false;
      return !(p.settings && p.settings.replayStory);
    } catch (e) { return false; }
  }

  function play(scriptOrLines, options) {
    opts = Object.assign({ skippable: true, pauseGame: true, once: false, force: false }, options || {});
    const scriptId = typeof scriptOrLines === 'string' ? scriptOrLines : null;

    // Aegis lines never replay once the ship is assembled (even with story replay on).
    if (scriptId && isAegisScript(scriptId) && aegisAssembled() && !opts.force) {
      if (opts.onDone) opts.onDone();
      return false;
    }
    // Intro briefing is onboarding, not campaign story.
    const intro = scriptId && scriptId.indexOf('intro') === 0;
    if (scriptId && opts.once && !opts.force && !isAegisScript(scriptId) && !intro && campaignStoryMuted()) {
      if (opts.onDone) opts.onDone();
      return false;
    }

    if (scriptId && opts.once && hasSeen(scriptId) && !opts.force) {
      if (opts.onDone) opts.onDone();
      return false;
    }

    if (scriptId) lines = (SCRIPTS[scriptId] || []).slice();
    else lines = (scriptOrLines || []).slice();

    if (!lines.length) {
      if (opts.onDone) opts.onDone();
      return false;
    }

    idx = 0;
    done = opts.onDone || null;
    if (scriptId && opts.once) markSeen(scriptId);

    if (opts.pauseGame && typeof Game !== 'undefined' && Game.freezeForStory) {
      Game.freezeForStory(true);
    }
    try {
      const root = el();
      if (opts.overlayCine) root.classList.add('over-cine');
      else root.classList.remove('over-cine');
    } catch (e) {}

    // Soft story bed — restore previous mood when the window closes
    try {
      if (typeof Music !== 'undefined' && Music.play) {
        opts._prevMusic = Music.mood || 'menu';
        Music.play('story');
      }
    } catch (e) {}

    ensureShell();
    el().classList.remove('hidden');
    clearStack();
    pushLine(idx);
    return true;
  }

  function playOnce(scriptId, options) {
    return play(scriptId, Object.assign({}, options, { once: true }));
  }

  function show(worldIndex, onDone) {
    const L = DIALOGUES[worldIndex] || [];
    if (!L.length) { if (onDone) onDone(); return; }
    play(L, { onDone, skippable: true, pauseGame: true });
  }

  function charName(charId) {
    if (charId === 'warlord' && opts.warlordKey) {
      return T('boss.' + opts.warlordKey + '.name', T('char.warlord'));
    }
    if (charId === 'unit10' && opts.unitCode) {
      return Tf('char.unit10.serial', opts.unitCode);
    }
    const c = CHARS[charId] || CHARS.aria;
    return T(c.nameKey);
  }

  function ensureShell() {
    const root = el();
    root.innerHTML = `
      <div class="story-scrim"></div>
      <div class="story-stack" id="story-stack"></div>
      ${opts.skippable !== false
        ? `<button type="button" class="story-skip-btn" id="story-skip">${T('tut.skip')}</button>`
        : ''}`;
    const skip = root.querySelector('#story-skip');
    if (skip) skip.onclick = (e) => { e.stopPropagation(); finish(); };
    // Tap empty area / plate: finish typewriter or nudge next
    root.onclick = (e) => {
      if (e.target && (e.target.id === 'story-skip' || e.target.closest('#story-skip'))) return;
      if (typing) { finishType(); return; }
      // Manual nudge while holding
      clearHold();
      next();
    };
  }

  function clearStack() {
    stack.forEach(c => { if (c.el && c.el.parentNode) c.el.remove(); });
    stack = [];
  }

  function pushLine(lineIdx) {
    if (lineIdx < 0 || lineIdx >= lines.length) { finish(); return; }
    clearType();
    clearHold();

    const [charId, key] = lines[lineIdx];
    const c = CHARS[charId] || CHARS.aria;
    const name = charName(charId);
    fullText = T(key);
    shown = 0;
    typing = true;
    curCharId = charId;
    voiceTick = 0;

    const card = document.createElement('div');
    card.className = 'story-box story-enter';
    card.style.setProperty('--pc', c.color);
    card.dataset.char = charId;
    const id = ++cardSeq;
    card.innerHTML = `
      <div class="story-portrait sil-${c.sil}" style="--pc:${c.color}" aria-hidden="true">
        <div class="story-sil"></div>
        <div class="story-sil-mark"></div>
        <div class="story-sil-glow"></div>
      </div>
      <div class="story-body">
        <div class="story-name" style="color:${c.color}">${name}</div>
        <div class="story-text"></div>
      </div>`;

    const stackEl = document.getElementById('story-stack');
    if (!stackEl) return;
    stackEl.appendChild(card);
    stack.push({ id, el: card, textNode: card.querySelector('.story-text') });
    // The line before this one stays for context, but as HISTORY, not as a
    // second window: portrait dropped, text clamped to one line, dimmed. Two
    // full boxes plus the skip button took over a third of a phone screen and
    // read as panels piling on top of each other.
    for (let i = 0; i < stack.length; i++) {
      stack[i].el.classList.toggle('is-prev', i < stack.length - 1);
    }

    // Evict top when > MAX_VISIBLE (stack grows bottom-up; first = oldest)
    while (stack.length > MAX_VISIBLE) {
      const old = stack.shift();
      if (old && old.el) {
        old.el.classList.remove('story-enter');
        old.el.classList.add('story-exit');
        setTimeout(() => { if (old.el && old.el.parentNode) old.el.remove(); }, 280);
      }
    }

    startType();
    // Line open chime (not for Unit-10 / product bots)
    if (charId !== 'unit10') {
      try { Engine.audio.voiceOpen(charId); } catch (e) {}
    }
  }

  function startType() {
    const cur = stack[stack.length - 1];
    if (!cur || !cur.textNode) return;
    typeTimer = setInterval(() => {
      shown++;
      if (shown >= fullText.length) {
        shown = fullText.length;
        cur.textNode.textContent = fullText;
        clearType();
        typing = false;
        scheduleHold();
        return;
      }
      cur.textNode.textContent = fullText.slice(0, shown);
      // Character "speech" ticks while typing — skip Unit-10 (Изделие)
      if (curCharId !== 'unit10') {
        const ch = fullText[shown - 1];
        if (ch && /[^\s.,!?;:—–-]/.test(ch)) {
          voiceTick++;
          // Every 2nd glyph → short chirp; denser speech feel without mush
          if (voiceTick % 2 === 0) {
            try { Engine.audio.voiceTick(curCharId, voiceTick); } catch (e) {}
          }
        }
      }
    }, TYPE_MS);
  }

  function clearType() {
    if (typeTimer) { clearInterval(typeTimer); typeTimer = null; }
  }
  function clearHold() {
    if (holdTimer) { clearTimeout(holdTimer); holdTimer = null; }
  }

  function finishType() {
    clearType();
    typing = false;
    const cur = stack[stack.length - 1];
    if (cur && cur.textNode) cur.textNode.textContent = fullText;
    shown = fullText.length;
    scheduleHold();
  }

  function scheduleHold() {
    clearHold();
    // Scale hold slightly with text length
    const extra = Math.min(900, Math.floor(fullText.length * 12));
    holdTimer = setTimeout(() => {
      holdTimer = null;
      next();
    }, HOLD_MS + extra);
  }

  function next() {
    idx++;
    if (idx >= lines.length) finish();
    else pushLine(idx);
  }

  function finish() {
    clearType();
    clearHold();
    clearStack();
    el().classList.add('hidden');
    el().classList.remove('over-cine');
    el().onclick = null;
    el().innerHTML = '';
    if (opts.pauseGame && typeof Game !== 'undefined' && Game.freezeForStory) {
      Game.freezeForStory(false);
    }
    try {
      if (typeof Music !== 'undefined' && Music.play) {
        Music.play(opts._prevMusic || 'menu');
      }
    } catch (e) {}
    const cb = done;
    done = null;
    lines = [];
    opts = {};
    if (cb) cb();
  }

  function isOpen() { return !el().classList.contains('hidden'); }

  return {
    play, playOnce, show, hasSeen, markSeen, isOpen, finish,
    campaignStoryMuted, aegisAssembled,
    SCRIPTS, DIALOGUES, CHARS,
  };
})();
