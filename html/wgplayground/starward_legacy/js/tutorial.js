/* ============================================================
 * tutorial.js — first-run onboarding.
 *
 * Two layers:
 *   1) INTRO mission (settings.onboarding === 'full', once):
 *      story briefing → spotlight steps (move / weapon / bomb)
 *      → one easy combat wave. Exit or finish = complete.
 *   2) LIGHT coach (tips mode / legacy): non-blocking move→fire→
 *      focus→bomb hints during the first real battle.
 *
 * Spotlight: dims the frame with a cutout hole + pulse on the target.
 * ========================================================== */
const Tutorial = (() => {
  let active = false, phase = 'idle'; // idle | intro | coach
  let idx = 0, stepT = 0, focusUsed = false;
  let startX = 0, startY = 0, bombMark = 0, startWeapon = '';
  let combatReady = false; // intro: spawner may release the practice wave
  let combatStarted = false;
  let pickupMark = 0;
  let betweenSteps = false; // theatrical gap between intro prompts
  let el = null, textEl = null, spot = null, gesture = null;
  const STEP_GAP_MS = 750; // pause after a step is done before the next prompt
  let superMark = 0, bubbleSeen = false, bubbleShield = 0;

  /**
   * Touch or keyboard? The super is a DOUBLE TAP on a phone and Space on a
   * desktop, and telling a player the wrong one is worse than saying nothing.
   *
   * Both signals are required: `maxTouchPoints` alone is true on touch-capable
   * laptops that are being driven with a mouse, and a coarse pointer alone can
   * be reported by some desktop remote-desktop setups.
   */
  // Test override (promo/_tutorial_intro.py): one machine cannot be a phone and
  // a desktop at once, but both wordings have to be checked.
  let forceTouch = null;
  function touchInput() {
    if (forceTouch !== null) return !!forceTouch;
    try {
      return (navigator.maxTouchPoints || 0) > 0 && matchMedia('(pointer: coarse)').matches;
    } catch (e) {
      return 'ontouchstart' in window;
    }
  }

  /** Current super weapon count — bomb, nuke or barrier, whichever is armed. */
  function superCount() {
    const p = Game.player;
    if (!p) return 0;
    const sk = p.superWeapon || 'bomb';
    return sk === 'nuke' ? p.nukes : sk === 'barrier' ? (p.barriers || 0) : p.bombs;
  }
  function setSuperCount(n) {
    const p = Game.player;
    if (!p) return;
    const sk = p.superWeapon || 'bomb';
    if (sk === 'nuke') p.nukes = n;
    else if (sk === 'barrier') p.barriers = n;
    else p.bombs = n;
    if (Game.updateHud) Game.updateHud();
  }

  const INTRO_STEPS = [
    {
      id: 'move',
      key: 'tut.intro.move',
      spot: null,
      done: () => Math.hypot(Game.player.x - startX, Game.player.y - startY) > 55,
      dwell: 0.8, timeout: 12,
      enter: () => { startX = Game.player.x; startY = Game.player.y; },
    },
    {
      id: 'weapon',
      key: 'tut.intro.weapon',
      spot: '#hud-weapons',
      done: () => Game.player.weapon !== startWeapon,
      dwell: 0.4, timeout: 14,
      enter: () => {
        const p = Game.player;
        startWeapon = p.weapon;
        const alt = Weapons.order.find(w => w !== p.weapon) || 'spread';
        if (!p.weaponLevels[alt]) p.weaponLevels[alt] = 1;
        if (Game.updateHud) Game.updateHud();
      },
    },
    {
      // The super is the one control nobody discovers on their own: a DOUBLE
      // TAP on the play area. Tapping the on-screen button also fires it, so a
      // player can spend every charge without ever learning the gesture — this
      // step asks for the gesture itself, shows it, and refuses to let the
      // charges run out while they work it out.
      id: 'bomb',
      key: () => touchInput() ? 'tut.intro.bombTap' : 'tut.intro.bombKey',
      spot: '#hud-bombs:not(.hidden), #hud-nuke:not(.hidden), #hud-barrier:not(.hidden)',
      done: () => {
        const want = touchInput() ? 'tap' : 'key';
        return Engine.input.superSeq > superMark && Engine.input.superSource === want;
      },
      dwell: 0.4,
      // Longer than the other prompts: we are asking for a specific gesture,
      // not just any interaction. It still times out — the tutorial teaches,
      // it never traps.
      timeout: 20,
      enter: () => {
        bombMark = superCount();
        superMark = Engine.input.superSeq;
        showGesture(touchInput() ? 'tap' : 'key');
      },
      // Charges are refilled every frame for the length of this step. Mashing
      // the button is exactly what a confused player does, and running dry
      // would leave them staring at a prompt they can no longer satisfy.
      tick: () => { if (superCount() < bombMark) setSuperCount(bombMark); },
      leave: () => { hideGesture(); setSuperCount(bombMark); },
    },
    {
      id: 'pickup',
      key: 'tut.intro.pickup',
      spot: null,
      done: () => {
        // Player collected at least one drop (score rose via pickups) OR none remain
        const n = (typeof Game.enemyCount === 'function' ? Game.enemyCount() : 0);
        const pu = (typeof Game.powerupCount === 'function' ? Game.powerupCount() : 0);
        return (stepT > 1.5 && pu === 0 && n === 0) || (stepT > 2 && Game.player.score > pickupMark + 20);
      },
      dwell: 0.5, timeout: 16,
      enter: () => {
        pickupMark = Game.player.score || 0;
        // Intro asteroid: soft rock that drops several pickups when destroyed
        if (Game.spawnIntroAsteroid) Game.spawnIntroAsteroid();
        else if (Game.spawnEnemy) {
          Game.spawnEnemy('asteroid', Engine.W * 0.5, 100);
        }
      },
    },
    {
      // Bubbles are the one hazard that does something TO the ship rather than
      // to its health bar, and reading about it later mid-fight is too late.
      // The gentlest grade, met on purpose, in a quiet room.
      id: 'bubble',
      key: 'tut.intro.bubble',
      spot: null,
      done: () => bubbleSeen && !(Game.player && Game.player.jamT > 0),
      dwell: 0.6, timeout: 18,
      enter: () => {
        bubbleSeen = false;
        bubbleShield = (Game.player && Game.player.shield) || 0;
        const p = Game.player;
        if (Hazards.demoBubble) {
          Hazards.demoBubble({
            kind: 'amber',
            x: p ? p.x : Engine.W * 0.5,
            y: -60,
            vy: 46,
          });
        }
      },
      tick: () => { if (Game.player && Game.player.jamT > 0) bubbleSeen = true; },
      // Practice must not cost anything: hand the shield back and clear the
      // field so the first real wave starts from where the player earned it.
      leave: () => {
        const p = Game.player;
        if (p && bubbleShield > p.shield) p.shield = bubbleShield;
        if (Hazards.endDemoBubble) Hazards.endDemoBubble();
        if (Game.updateHud) Game.updateHud();
      },
    },
    {
      id: 'combat',
      key: 'tut.intro.combat',
      spot: null,
      done: () => false,
      dwell: 1.0, timeout: 3.0,
      enter: () => { combatReady = true; combatStarted = true; },
    },
  ];

  // Legacy light coach for tips-only / first real fight without intro.
  const COACH_STEPS = [
    { key: 'tut.move',  done: () => Math.hypot(Game.player.x - startX, Game.player.y - startY) > 60, dwell: 1.2, timeout: 9 },
    { key: 'tut.fire',  done: () => false, dwell: 3, timeout: 3.2 },
    { key: 'tut.focus', done: () => focusUsed, dwell: 1.5, timeout: 7 },
    { key: 'tut.bomb',  done: () => {
        const p = Game.player;
        const sk = p.superWeapon || 'bomb';
        const cur = sk === 'nuke' ? p.nukes : sk === 'barrier' ? (p.barriers || 0) : p.bombs;
        return cur < bombMark;
      }, dwell: 1.5, timeout: 8, enter: () => {
        const p = Game.player;
        const sk = p.superWeapon || 'bomb';
        bombMark = sk === 'nuke' ? p.nukes : sk === 'barrier' ? (p.barriers || 0) : p.bombs;
      } },
    { key: 'tut.done',  done: () => false, dwell: 2, timeout: 2.2 },
  ];

  function onboardingMode() {
    const s = Profile.get().settings || {};
    return s.onboarding === 'tips' ? 'tips' : 'full';
  }

  function shouldStartIntro() {
    const p = Profile.get();
    return onboardingMode() === 'full' && !p.introDone;
  }

  function shouldRunCoach() {
    const p = Profile.get();
    if (p.tutorialDone) return false;
    // Full intro teaches controls; skip light coach after / during intro.
    if (onboardingMode() === 'full') return false;
    return true;
  }

  function ensureDom() {
    el = document.getElementById('tutorial');
    textEl = el ? el.querySelector('.tut-text') : null;
    const skip = el ? el.querySelector('#tut-skip') : null;
    if (skip) skip.onclick = () => {
      if (phase === 'intro') finishIntro(true);
      else finish();
    };
    ensureSpot();
  }

  function ensureSpot() {
    if (spot && spot.isConnected) return;
    const host = document.getElementById('game-frame') || document.body;
    spot = document.createElement('div');
    spot.id = 'tut-spotlight';
    spot.className = 'tut-spotlight hidden';
    spot.innerHTML = '<div class="tut-hole"></div>';
    host.appendChild(spot);
  }

  function setPrompt(htmlOrKey, isHtml) {
    if (!textEl) return;
    if (isHtml) textEl.innerHTML = htmlOrKey;
    else textEl.innerHTML = T(htmlOrKey);
  }

  function showSkip(labelKey) {
    if (!el) return;
    const skip = el.querySelector('#tut-skip');
    if (skip) skip.textContent = T(labelKey || 'tut.skip');
  }

  /**
   * Show the gesture we are asking for, performed. Two rings that swell in
   * quick succession read as tap-tap far better than any sentence; the desktop
   * variant is a key cap that presses itself.
   *
   * Lives over the play area rather than next to the button on purpose: the
   * double tap works anywhere on the field, and putting the demo on the button
   * would teach exactly the wrong thing.
   */
  function showGesture(kind) {
    hideGesture();
    const host = document.getElementById('game-frame') || document.body;
    gesture = document.createElement('div');
    gesture.className = 'tut-gesture tut-gesture-' + kind;
    gesture.setAttribute('aria-hidden', 'true');
    gesture.innerHTML = kind === 'tap'
      ? '<span class="tg-ring tg-r1"></span><span class="tg-ring tg-r2"></span><span class="tg-dot"></span>'
      : '<span class="tg-key">SPACE</span>';
    host.appendChild(gesture);
  }
  function hideGesture() {
    if (gesture && gesture.parentElement) gesture.parentElement.removeChild(gesture);
    gesture = null;
  }

  function clearSpot() {
    if (!spot) return;
    spot.classList.add('hidden');
    spot.classList.remove('show');
    document.querySelectorAll('.tut-pulse').forEach(n => n.classList.remove('tut-pulse'));
  }

  function aimSpot(selector) {
    ensureSpot();
    clearSpot();
    if (!selector) return;
    const target = document.querySelector(selector);
    if (!target) return;
    const frame = document.getElementById('game-frame') || document.body;
    const fr = frame.getBoundingClientRect();
    const tr = target.getBoundingClientRect();
    const pad = 14;
    const hole = spot.querySelector('.tut-hole');
    const left = tr.left - fr.left - pad;
    const top = tr.top - fr.top - pad;
    const w = tr.width + pad * 2;
    const h = tr.height + pad * 2;
    hole.style.left = left + 'px';
    hole.style.top = top + 'px';
    hole.style.width = w + 'px';
    hole.style.height = h + 'px';
    spot.classList.remove('hidden');
    spot.classList.add('show');
    target.classList.add('tut-pulse');
  }

  function showIntroStep() {
    const s = INTRO_STEPS[idx];
    if (!s) return;
    stepT = 0;
    if (s.enter) s.enter();
    setPrompt(typeof s.key === 'function' ? s.key() : s.key, false);
    showSkip('tut.skip');
    if (s.spot) aimSpot(s.spot);
    else clearSpot();
  }

  function showCoachStep() {
    const s = COACH_STEPS[idx];
    if (!s) return;
    if (s.enter) s.enter();
    stepT = 0;
    focusUsed = false;
    setPrompt(s.key, false);
    showSkip('tut.skip');
    clearSpot();
  }

  /** Full intro after beginRun('intro'). Dialogue first (alone), then steps. */
  function startIntro() {
    ensureDom();
    if (!el) return;
    active = true;
    phase = 'intro';
    idx = 0;
    stepT = 0;
    combatReady = false;
    combatStarted = false;
    focusUsed = false;
    // Only story during briefing — hide coach so it never layers under/over dialogs
    el.classList.add('hidden');
    clearSpot();
    try { if (typeof Onboarding !== 'undefined' && Onboarding.hide) Onboarding.hide(); } catch (e) {}
    // Hyperspace star rush under the briefing (Game also snaps this on startIntro)
    try { if (Game.setFlightBoost) Game.setFlightBoost(6.5, true); } catch (e) {}

    const runSteps = () => {
      if (!active || phase !== 'intro') return;
      // Ease starfield back to combat speed for the lesson
      try { if (Game.setFlightBoost) Game.setFlightBoost(1, false); } catch (e) {}
      el.classList.remove('hidden');
      showSkip('tut.skip');
      idx = 0;
      showIntroStep();
    };

    if (typeof Story !== 'undefined' && Story.play) {
      Story.play('intro.briefing', {
        once: false,
        pauseGame: true,
        skippable: true,
        onDone: runSteps,
      });
    } else {
      runSteps();
    }
  }

  /** Light coach for tips-only first battle. */
  function start() {
    ensureDom();
    if (!el) return;
    active = true;
    phase = 'coach';
    idx = 0;
    stepT = 0;
    focusUsed = false;
    combatReady = true;
    combatStarted = true;
    startX = Game.player.x;
    startY = Game.player.y;
    el.classList.remove('hidden');
    clearSpot();
    showCoachStep();
  }

  function advanceIntroStep() {
    if (betweenSteps || phase !== 'intro' || !active) return;
    // Whatever the step set up — a gesture demo, a spawned bubble, refilled
    // charges — is torn down here, whether it finished or simply timed out.
    const cur = INTRO_STEPS[idx];
    if (cur && cur.leave) { try { cur.leave(); } catch (e) {} }
    betweenSteps = true;
    clearSpot();
    // Fade prompt out for a theatrical beat
    if (el) el.classList.add('tut-fade');
    setTimeout(() => {
      betweenSteps = false;
      if (!active || phase !== 'intro') return;
      if (el) el.classList.remove('tut-fade');
      idx++;
      if (idx >= INTRO_STEPS.length) {
        idx = INTRO_STEPS.length - 1;
        combatReady = true;
        combatStarted = true;
        setPrompt('tut.intro.combat', false);
        clearSpot();
        if (el) el.classList.remove('hidden');
        return;
      }
      showIntroStep();
    }, STEP_GAP_MS);
  }

  function update(dt) {
    if (!active) return;
    if (betweenSteps) return;
    stepT += dt;
    if (Engine.input.focus) focusUsed = true;

    if (phase === 'intro') {
      const s = INTRO_STEPS[idx];
      if (!s) return;
      // Last combat prompt: stay until wave ends (handled by Game/Spawner).
      if ((typeof s.key === 'function' ? s.key() : s.key) === 'tut.intro.combat') {
        if (stepT >= s.timeout && !combatStarted) {
          combatReady = true;
          combatStarted = true;
        }
        return;
      }
      if (s.tick) s.tick(dt);
      if ((stepT >= s.dwell && s.done()) || stepT >= s.timeout) {
        advanceIntroStep();
      }
      return;
    }

    // coach
    const s = COACH_STEPS[idx];
    if (!s) return;
    if ((stepT >= s.dwell && s.done()) || stepT >= s.timeout) {
      idx++;
      if (idx >= COACH_STEPS.length) { finish(); return; }
      showCoachStep();
    }
  }

  function markTutorialDone() {
    const prof = Profile.get();
    if (!prof.tutorialDone) {
      prof.tutorialDone = true;
      Profile.save();
      try { Analytics.tutorialComplete(); } catch (e) {}
    }
  }

  function markIntroDone() {
    const prof = Profile.get();
    if (!prof.introDone) {
      prof.introDone = true;
      Profile.save();
    }
    markTutorialDone();
  }

  function finish() {
    if (!active) return;
    active = false;
    phase = 'idle';
    combatReady = true;
    if (el) el.classList.add('hidden');
    clearSpot();
    hideGesture();
    markTutorialDone();
  }

  /** Exit or complete intro mission (Skip button). */
  function finishIntro(/*skipped*/) {
    markIntroDone();
    silence();
    if (typeof Game !== 'undefined' && Game.completeIntro) Game.completeIntro(false);
  }

  function cancel() {
    // Leaving mid-intro still counts as completed (user request).
    if (phase === 'intro' && active) {
      finishIntro(true);
      return;
    }
    silence();
  }

  /** Hide UI without side-effects (Game.completeIntro owns the flow). */
  function silence() {
    // Skipping mid-step must not leave a gesture demo floating over the game,
    // nor the practice bubble drifting into a real fight.
    hideGesture();
    try { if (typeof Hazards !== 'undefined' && Hazards.endDemoBubble) Hazards.endDemoBubble(); } catch (e) {}
    active = false;
    phase = 'idle';
    betweenSteps = false;
    combatReady = true;
    if (el) {
      el.classList.add('hidden');
      el.classList.remove('tut-fade');
    }
    clearSpot();
  }

  function isIntro() { return phase === 'intro'; }

  /** Jump the intro to a named step — for promo/_tutorial_intro.py. */
  function goStep(id) {
    const i = INTRO_STEPS.findIndex(x => x.id === id);
    if (i < 0 || phase !== 'intro') return false;
    const cur = INTRO_STEPS[idx];
    if (cur && cur.leave) { try { cur.leave(); } catch (e) {} }
    betweenSteps = false;
    idx = i;
    showIntroStep();
    return true;
  }
  // Only meaningful during the intro: the coach phase indexes a different list,
  // and reading INTRO_STEPS[idx] there reports a step that is not running.
  function stepId() { return phase === 'intro' ? ((INTRO_STEPS[idx] || {}).id || null) : null; }
  function isCombatReady() { return combatReady || phase === 'coach' || !active; }

  /**
   * Called when intro practice wave is cleared.
   * Theatrical beat: wait for pickups → short hold → closing dialogue → hub.
   */
  function onIntroWaveClear() {
    if (phase !== 'intro') return;
    clearSpot();
    setPrompt('tut.intro.ready', false);
    combatReady = true;

    const waitPickupsThenOutro = () => {
      if (phase !== 'intro') return;
      const pu = (typeof Game.powerupCount === 'function') ? Game.powerupCount() : 0;
      if (pu > 0) {
        setTimeout(waitPickupsThenOutro, 280);
        return;
      }
      // Breath after last pickup, then closing dialogue, then hub
      setTimeout(() => {
        if (phase !== 'intro') return; // cancelled / already finished
        if (el) el.classList.add('hidden');
        clearSpot();
        // Strip frozen bullets/enemies before cinematic ship-only outro
        try {
          if (Game.clearCombatEphemera) Game.clearCombatEphemera({ keepPlayer: true });
        } catch (e) {}
        const finish = () => {
          markIntroDone();
          silence();
          try { if (Game.setFlightBoost) Game.setFlightBoost(1, true); } catch (e) {}
          if (typeof Game !== 'undefined' && Game.completeIntro) Game.completeIntro(true);
        };
        if (typeof Story !== 'undefined' && Story.play) {
          try { if (Game.setFlightBoost) Game.setFlightBoost(2.2, false); } catch (e) {}
          Story.play('intro.outro', {
            once: false,
            pauseGame: true,
            skippable: true,
            onDone: finish,
          });
        } else {
          finish();
        }
      }, 1100);
    };
    waitPickupsThenOutro();
  }

  return {
    start, startIntro, update, finish, finishIntro, cancel, silence,
    shouldRun: shouldRunCoach, shouldStartIntro,
    isCombatReady, onIntroWaveClear, markIntroDone,
    get active() { return active; },
    get phase() { return phase; },
    // test hooks — promo/_tutorial_intro.py
    _goStep: goStep, _stepKey: stepId, _superCount: superCount,
    set _forceTouch(v) { forceTouch = v; },
  };
})();
