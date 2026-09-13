/**
 * Orbit Deep — game shell: boot, level-select, HUD, win/lose overlays, sound, and the
 * editor "Test level" round-trip (?test=1 reads a level from sessionStorage).
 */
import { Game } from './game.js';
import { Platform } from './platform.js?v=20260810wg1';
import { Audio } from './audio.js?v=20260727g';
import { Storage } from './storage.js';
import { loadManifest, loadLevel, validateLevel, isPlayableManifestEntry, computeLevelSelectStates } from './level.js';
import { loadSectionPool } from './sequencer.js';
import { CORRIDOR_WIDTH, FEEL, THEME } from './config.js';
import { DEFAULT_CRAFT_SCALE } from './campaign.js';
import { icon } from './icons.js';

const APP_VERSION = '1.0.4';

const $ = (id) => document.getElementById(id);
/** Null-safe show/hide — a missing node must never half-break a screen transition. */
const show = (el) => {
  if (!el) return;
  el.classList.remove('hidden');
  el.setAttribute('aria-hidden', 'false');
};
const hide = (el) => {
  if (!el) return;
  el.classList.add('hidden');
  el.setAttribute('aria-hidden', 'true');
};

const TEST_KEY = 'orbitDeep.testLevel';
const EDITOR_STATE_KEY = 'orbitDeep.editorState';
const query = new URLSearchParams(location.search);
const isTest = query.get('test') === '1';
const isDebug = query.get('debug') === '1';

const canvas = $('game');
let ui = 'loading';               // loading | menu | howto | select | playing | paused | over | won
let manifest = [];
let current = null;               // current level object
let crashPending = false, winPending = null;
/** Prevents double-clicks on level cards / next from racing async loads. */
let navBusy = false;

// ── mode: story (level-select grid, sequential unlocks) vs endless (Infinite Madness: a
// randomized, non-repeating sequence of existing levels/blocks — see js/sequencer.js —
// that ends only on crash) ──
let mode = 'story';                // 'story' | 'endless'

const TUTORIAL_VERSION = 1;
let tutorialSession = null;
let replayTutorialRequested = false;
let lastCrashInfo = null;
let tutorialCrashBucket = null;
let tutorialCrashCount = 0;

function usesTouchControls() {
  return (navigator.maxTouchPoints || 0) > 0 || !!window.matchMedia?.('(pointer: coarse)').matches;
}
document.documentElement.classList.add(usesTouchControls() ? 'input-touch' : 'input-keyboard');

let lastDepthShown = -1;
const game = new Game(canvas, {
  onProgress(p) {
    if (game.isEndless) {
      const meters = Math.round(game.distance * FEEL.metersPerPx);
      if (meters !== lastDepthShown) {
        lastDepthShown = meters;
        const el = $('hud-depth');
        if (el) el.textContent = meters + 'm';
      }
      return;
    }
    const depth = Math.round(p.frac * 100);
    if (depth !== lastDepthShown) {
      lastDepthShown = depth;
      const el = $('hud-depth');
      if (el) el.textContent = depth + '%';
    }
  },
  onCrash(info) {
    try { Platform.gameplayStop(); } catch (_) { /* ignore */ }
    try { Audio.playCrash(); } catch (_) { /* ignore */ }
    lastCrashInfo = info || { reason: 'obstacle', distance: game.distance };
    crashPending = true;
  },
  onWin(res) {
    try { Platform.gameplayStop(); } catch (_) { /* ignore */ }
    try { Audio.playWin(); } catch (_) { /* ignore */ }
    winPending = res;
  },
  onGapPass() { try { Audio.playWhoosh(); } catch (_) { /* ignore */ } },
});

// ── level-local debug tuning (?debug=1) ──
const DEBUG_SLIDERS = [
  { id: 'dbg-tilt', key: 'maxTiltDeg', fmt: (v) => `${v.toFixed(0)}°` },
  { id: 'dbg-turn-accel', key: 'turnAcceleration', fmt: (v) => `${v.toFixed(1)} rad/s²` },
  { id: 'dbg-max-turn-speed', key: 'maxTurnSpeed', fmt: (v) => `${v.toFixed(2)} rad/s` },
  { id: 'dbg-turn-drag', key: 'turnDrag', fmt: (v) => v.toFixed(2) },
  { id: 'dbg-lateral-inertia', key: 'lateralInertia', fmt: (v) => `${v.toFixed(3)} s` },
  { id: 'dbg-release-delay', key: 'inputReleaseDelay', fmt: (v) => `${v.toFixed(3)} s` },
  { id: 'dbg-reverse-penalty', key: 'reverseDirectionPenalty', fmt: (v) => v.toFixed(2) },
  { id: 'dbg-change-penalty', key: 'directionChangePenalty', fmt: (v) => `${v.toFixed(3)} s` },
  { id: 'dbg-buoyancy', key: 'waterBuoyancy', fmt: (v) => `${v} px/s` },
  { id: 'dbg-current', key: 'waterCurrent', fmt: (v) => `${v} px/s` },
];

function updateDebugOutputs() {
  try {
    const sizeOut = $('dbg-size-value');
    if (sizeOut) sizeOut.textContent = `${(+$('dbg-size').value).toFixed(2)}×`;
    for (const s of DEBUG_SLIDERS) {
      const out = $(`${s.id}-value`);
      const inp = $(s.id);
      if (out && inp) out.textContent = s.fmt(+inp.value);
    }
  } catch (_) { /* ignore */ }
}

function syncDebugPanel() {
  if (!isDebug || !current) return;
  try {
    const p = current.playerOverride || {};
    if ($('dbg-size')) $('dbg-size').value = p.craftScale ?? DEFAULT_CRAFT_SCALE;
    if ($('dbg-color-on')) $('dbg-color-on').checked = !!p.color;
    if ($('dbg-color')) $('dbg-color').value = p.color || THEME.sub.hull;
    for (const s of DEBUG_SLIDERS) {
      if ($(s.id)) $(s.id).value = p[s.key] ?? FEEL[s.key];
    }
    if ($('dbg-edge-behavior')) $('dbg-edge-behavior').value = p.edgeBehavior || 'death';
    updateDebugOutputs();
    show($('debug-panel'));
  } catch (_) { /* ignore */ }
}

function persistDebugOverride() {
  if (!current) return;
  try {
    const p = { ...(current.playerOverride || {}) };
    const size = +$('dbg-size')?.value;
    const edgeBehavior = $('dbg-edge-behavior')?.value;

    if (isFinite(size) && size > 0) p.craftScale = size;
    if ($('dbg-color-on')?.checked) p.color = $('dbg-color').value; else delete p.color;
    for (const s of DEBUG_SLIDERS) {
      const v = +$(s.id)?.value;
      if (v === FEEL[s.key]) delete p[s.key]; else p[s.key] = v;
    }
    if (edgeBehavior === 'clamp') p.edgeBehavior = 'clamp'; else delete p.edgeBehavior;

    current.playerOverride = Object.keys(p).length ? p : null;
    game.applyPlayerOverride(current.playerOverride);
    const half = game.player.craftWidth / 2;
    game.craftX = Math.max(half, Math.min(CORRIDOR_WIDTH - half, game.craftX));
    updateDebugOutputs();

    if (isTest) {
      const serialized = JSON.stringify(current);
      sessionStorage.setItem(TEST_KEY, serialized);
      sessionStorage.setItem(EDITOR_STATE_KEY, serialized);
    }
  } catch (err) {
    console.error('persistDebugOverride', err);
  }
}

function resetDebugOverride() {
  try {
    if ($('dbg-size')) $('dbg-size').value = DEFAULT_CRAFT_SCALE;
    if ($('dbg-color-on')) $('dbg-color-on').checked = false;
    if ($('dbg-color')) $('dbg-color').value = THEME.sub.hull;
    for (const s of DEBUG_SLIDERS) {
      if ($(s.id)) $(s.id).value = FEEL[s.key];
    }
    if ($('dbg-edge-behavior')) $('dbg-edge-behavior').value = FEEL.edgeBehavior;
    persistDebugOverride();
  } catch (_) { /* ignore */ }
}

// ── sound ──
function updateMusicLabel(muted) {
  try {
    if (muted === undefined) muted = Audio.isMusicMuted();
    const label = $('settings-music-label');
    const btn = $('btn-settings-music');
    if (label) label.textContent = muted ? 'OFF' : 'ON';
    if (btn) btn.classList.toggle('is-off', muted);
  } catch (_) { /* ignore */ }
}
function updateSfxLabel(muted) {
  try {
    if (muted === undefined) muted = Audio.isSfxMuted();
    const label = $('settings-sfx-label');
    const btn = $('btn-settings-sfx');
    if (label) label.textContent = muted ? 'OFF' : 'ON';
    if (btn) btn.classList.toggle('is-off', muted);
  } catch (_) { /* ignore */ }
}
Audio.onMusicMuteChange = updateMusicLabel;
Audio.onSfxMuteChange = updateSfxLabel;

let audioBooted = false;
function ensureAudio() {
  try {
    if (audioBooted) {
      Audio.playMusic();
      return;
    }
    audioBooted = true;
    Audio.unlock().then(() => { try { Audio.playMusic(); } catch (_) { /* ignore */ } });
  } catch (_) { /* ignore */ }
}
window.addEventListener('pointerdown', ensureAudio, { once: true });
window.addEventListener('keydown', ensureAudio, { once: true });

function clickSound() {
  try { Audio.playClick(); } catch (_) { /* ignore */ }
}

// ── settings modal ──
function openSettings() { show($('modal-settings')); }
function closeSettings() { hide($('modal-settings')); }

// ── onboarding / How to Play ──
function setTutorialPrompt(kicker, message, hint = '', controls = false) {
  const layer = $('tutorial');
  if (!layer) return;
  const kickerEl = $('tutorial-kicker');
  const messageEl = $('tutorial-message');
  const hintEl = $('tutorial-hint');
  if (kickerEl) kickerEl.textContent = kicker;
  if (messageEl) messageEl.textContent = message;
  if (hintEl) hintEl.textContent = hint;
  layer.classList.remove('prompt-hidden');
  show(layer);
  if (controls) show($('tutorial-controls')); else hide($('tutorial-controls'));
}

function hideTutorialPrompt() {
  hide($('tutorial'));
  hide($('tutorial-controls'));
}

function beginStoryTutorial() {
  tutorialSession = null;
  hideTutorialPrompt();
  if (isTest || isDebug || mode !== 'story' || current?.id !== '1') {
    replayTutorialRequested = false;
    return;
  }
  const progress = Storage.getTutorial();
  const replay = replayTutorialRequested;
  replayTutorialRequested = false;
  if (!replay && progress.version >= TUTORIAL_VERSION && progress.level1Complete) return;
  try { Storage.updateTutorial({ version: TUTORIAL_VERSION }); } catch (_) { /* ignore */ }
  tutorialSession = { kind: 'story', step: 'steer', stepStartedAt: performance.now(), finishShown: false, replay };
  setTutorialPrompt(
    'STEER',
    'HOLD LEFT OR RIGHT',
    usesTouchControls() ? 'PRESS EITHER HALF OF THE SCREEN' : 'USE ← / → OR A / D',
    true,
  );
}

function beginInfiniteGuidance() {
  tutorialSession = null;
  hideTutorialPrompt();
  if (isTest || isDebug) return;
  const progress = Storage.getTutorial();
  if (progress.infiniteSeen) return;
  try { Storage.updateTutorial({ version: Math.max(progress.version, TUTORIAL_VERSION), infiniteSeen: true }); } catch (_) {}
  tutorialSession = { kind: 'infinite', step: 'message', expiresAt: performance.now() + 3600 };
  setTutorialPrompt('INFINITE MADNESS', 'DEPTH IS YOUR SCORE', 'NO FINISH LINE · ONE CRASH ENDS THE RUN');
}

function updateTutorial(now) {
  const session = tutorialSession;
  if (!session || ui !== 'playing') return;
  if (session.kind === 'infinite') {
    if (now >= session.expiresAt) { hideTutorialPrompt(); tutorialSession = null; }
    return;
  }
  if (mode !== 'story' || current?.id !== '1') return;

  if (session.step === 'steer' && game.hasSteered) {
    try { Storage.updateTutorial({ version: TUTORIAL_VERSION, steering: true }); } catch (_) {}
    session.step = 'release';
    session.stepStartedAt = now;
    setTutorialPrompt('CONTROL THE DRIFT', 'RELEASE BEFORE THE GAP', 'THE SUBMARINE KEEPS MOVING');
    return;
  }
  if (session.step === 'release') {
    const released = game.hasSteered && game.steer === 0;
    if (released && !session.released) {
      session.released = true;
      try { Storage.updateTutorial({ release: true }); } catch (_) {}
    }
    const lessonElapsed = now - session.stepStartedAt;
    if ((session.released && lessonElapsed >= 900) || lessonElapsed >= 1500) {
      session.step = 'hazards';
      session.expiresAt = now + 2400;
      try { Storage.updateTutorial({ hazards: true }); } catch (_) {}
      setTutorialPrompt('SURVIVE', 'AVOID ROCKS AND BOTH WALLS', 'ONE HIT BREACHES THE HULL');
    }
    return;
  }
  if (session.step === 'hazards' && now >= session.expiresAt) {
    session.step = 'running';
    hideTutorialPrompt();
  }
  const frac = current?.exit?.y > 0 ? game.distance / current.exit.y : 0;
  if ((session.step === 'running' || session.step === 'hazards') && !session.finishShown && frac >= 0.78) {
    session.finishShown = true;
    session.step = 'finish';
    session.expiresAt = now + 2600;
    setTutorialPrompt('FINISH', 'CROSS THE AMBER LINE', 'COMPLETE THE DIVE TO UNLOCK THE NEXT LEVEL');
  } else if (session.step === 'finish' && now >= session.expiresAt) {
    session.step = 'done';
    hideTutorialPrompt();
  }
}

function goHowTo() {
  cancelDeathAutoRestart();
  stopLoop();
  navBusy = false;
  ui = 'howto';
  hideShellScreens();
  show($('screen-howto'));
}

function replayTutorial() {
  replayTutorialRequested = true;
  mode = 'story';
  current = null;
  startLevel('1');
}

// ── level select ──
function pearlMarkup(n) {
  let s = '';
  for (let i = 0; i < 3; i++) s += `<span class="lc-pearl${i < n ? '' : ' dim'}">●</span>`;
  return s;
}

function difficultyMarkup(value) {
  const difficulty = ['tutorial', 'easy', 'medium', 'hard', 'expert'].includes(value) ? value : 'easy';
  return `<span class="lc-difficulty difficulty-${difficulty}" aria-hidden="true">`
    + '<span></span><span></span><span></span></span>';
}

function buildSelect() {
  const grid = $('level-grid');
  if (!grid) return;
  grid.innerHTML = '';
  const states = computeLevelSelectStates(manifest, (id) => Storage.isCompleted(id));
  for (const st of states) {
    const m = st.entry;
    const rec = st.playable ? Storage.getLevel(m.id) : { bestStars: 0, completed: false, tries: 0 };
    const card = document.createElement('button');
    card.className = 'level-card';
    card.type = 'button';
    card.disabled = st.blocked;
    card.classList.toggle('level-card-locked', st.locked);
    card.classList.toggle('level-card-incomplete', st.incomplete);
    // Completed is its own signal, independent of star count — a level finished with 0
    // pearls collected must still read as "done", not look identical to never-played.
    card.classList.toggle('level-card-completed', !st.blocked && rec.completed);
    const difficulty = m.difficulty || 'easy';
    card.setAttribute('aria-label',
      st.incomplete ? `Level ${m.order}, not yet available`
        : st.locked ? `Level ${m.order}, ${difficulty} difficulty, locked`
          : `Level ${m.order}, ${difficulty} difficulty${rec.completed ? ', completed' : ''}${rec.tries ? `, ${rec.tries} tries` : ''}`);
    let sub;
    if (st.incomplete) sub = `<span class="lc-incomplete">WIP</span>`;
    else sub = difficultyMarkup(difficulty);
    const lock = st.locked ? `<span class="lc-lock">${icon('lock', { size: 11 })}</span>` : '';
    const check = !st.blocked && rec.completed ? `<span class="lc-check">${icon('check', { size: 11 })}</span>` : '';
    const tries = !st.blocked && rec.tries > 0 ? `<span class="lc-tries">×${rec.tries}</span>` : '';
    card.innerHTML = `${lock}${check}<div class="lc-num">${m.order}</div><div class="lc-sub">${sub}</div>${tries}`;
    if (!st.blocked) {
      card.addEventListener('click', () => {
        clickSound();
        mode = 'story';
        startLevel(m.id);
      });
    }
    grid.appendChild(card);
  }
}

// Infinite Madness's level/block pool — loaded once (small hand-authored JSON, fast) and
// reused for every run afterward so launching never re-fetches.
let sectionPoolPromise = null;
function getSectionPool() {
  if (!sectionPoolPromise) sectionPoolPromise = loadSectionPool();
  return sectionPoolPromise;
}

function startMarathon() {
  if (navBusy) return;
  mode = 'endless';
  current = null;
  launchEndless();
}

function updateMenuStats() {
  try {
    const el = $('menu-stats');
    if (el) {
      const n = Storage.playCount();
      el.textContent = n === 1 ? '1 TIME PLAYED' : `${n} TIMES PLAYED`;
    }
    const depthEl = $('menu-best-depth');
    if (depthEl) {
      const best = Storage.getMarathonBest();
      depthEl.textContent = best > 0 ? `INFINITE MADNESS BEST · ${best}m` : '';
    }
  } catch (_) { /* ignore */ }
}

/** Hide every gameplay/overlay shell screen (safe if nodes missing). */
function hideShellScreens() {
  hide($('screen-menu'));
  hide($('screen-howto'));
  hide($('screen-select'));
  hide($('screen-pause'));
  hide($('screen-win'));
  hide($('death-toast'));
  hide($('hud'));
  hide($('btn-pause'));
  hide($('tutorial'));
  hide($('debug-panel'));
  const toast = $('death-toast');
  if (toast) toast.classList.remove('show');
  closeSettings();
}

function goMenu() {
  try {
    cancelDeathAutoRestart();
    stopLoop();
    navBusy = false;
    ui = 'menu';
    tutorialSession = null;
    hideShellScreens();
    updateMenuStats();
    show($('screen-menu'));
  } catch (err) {
    console.error('goMenu', err);
    ui = 'menu';
    try { show($('screen-menu')); } catch (_) { /* ignore */ }
  }
}

function goSelect() {
  try {
    cancelDeathAutoRestart();
    stopLoop();
    navBusy = false;
    mode = 'story';
    ui = 'select';
    tutorialSession = null;
    hideShellScreens();
    buildSelect();
    show($('screen-select'));
  } catch (err) {
    console.error('goSelect', err);
    ui = 'select';
    try { show($('screen-select')); } catch (_) { /* ignore */ }
  }
}

// ── run a level ──
async function startLevel(id) {
  if (navBusy) return;
  navBusy = true;
  try {
    current = await loadLevel(id);
    launch();
  } catch (e) {
    console.error(e);
    navBusy = false;
    try { alert('Could not load level: ' + e.message); } catch (_) { /* ignore */ }
    // Recover to a usable screen instead of a blank shell.
    if (ui === 'playing' || ui === 'paused' || ui === 'over' || ui === 'won') goMenu();
    else if (mode === 'story') goSelect();
    else goMenu();
  }
}

function launch() {
  try {
    if (!current) {
      navBusy = false;
      goMenu();
      return;
    }
    cancelDeathAutoRestart();
    stopLoop();
    hideShellScreens();
    show($('hud'));
    show($('btn-pause'));
    const levelLabel = $('hud-level');
    if (levelLabel) levelLabel.textContent = (current.name || current.id || '').toUpperCase();
    lastDepthShown = -1;
    crashPending = false;
    lastCrashInfo = null;
    winPending = null;
    ui = 'playing';
    game.resize();
    game.setLevel(current);
    syncDebugPanel();
    game.start();
    beginStoryTutorial();
    try { Platform.gameplayStart(); } catch (_) { /* ignore */ }
    try { Audio.resumeMusic(); } catch (_) { /* ignore */ }
    startLoop();
    navBusy = false;
  } catch (err) {
    console.error('launch', err);
    navBusy = false;
    // Never leave the player on a blank canvas with no controls.
    try { goMenu(); } catch (_) { ui = 'menu'; show($('screen-menu')); }
  }
}

async function launchEndless() {
  if (navBusy) return;
  navBusy = true;
  try {
    const sections = await getSectionPool();
    if (mode !== 'endless') { navBusy = false; return; } // user navigated away while loading
    cancelDeathAutoRestart();
    stopLoop();
    hideShellScreens();
    show($('hud'));
    show($('btn-pause'));
    const levelLabel = $('hud-level');
    if (levelLabel) levelLabel.textContent = 'INFINITE';
    lastDepthShown = -1;
    crashPending = false;
    lastCrashInfo = null;
    winPending = null;
    ui = 'playing';
    game.resize();
    game.setEndless(sections, (Math.random() * 1e9) | 0);
    game.start();
    beginInfiniteGuidance();
    try { Platform.gameplayStart(); } catch (_) { /* ignore */ }
    try { Audio.resumeMusic(); } catch (_) { /* ignore */ }
    startLoop();
    navBusy = false;
  } catch (err) {
    console.error('launchEndless', err);
    navBusy = false;
    try { alert('Could not load Infinite Madness: ' + err.message); } catch (_) { /* ignore */ }
    try { goMenu(); } catch (_) { ui = 'menu'; show($('screen-menu')); }
  }
}

function pauseGame() {
  if (ui !== 'playing') return;
  try {
    game.pause();
    ui = 'paused';
    stopLoop();
    show($('screen-pause'));
    try { Platform.gameplayStop(); } catch (_) { /* ignore */ }
    try { Audio.pauseMusic(); } catch (_) { /* ignore */ }
  } catch (err) {
    console.error('pauseGame', err);
    ui = 'paused';
    stopLoop();
    try { show($('screen-pause')); } catch (_) { /* ignore */ }
  }
}

function resumeGame() {
  if (ui !== 'paused') return;
  try {
    hide($('screen-pause'));
    ui = 'playing';
    game.resume();
    try { Platform.gameplayStart(); } catch (_) { /* ignore */ }
    try { Audio.resumeMusic(); } catch (_) { /* ignore */ }
    startLoop();
  } catch (err) {
    console.error('resumeGame', err);
    ui = 'playing';
    try { startLoop(); } catch (_) { /* ignore */ }
  }
}

// ── death ──
const DEATH_TOAST_MS = 850;
const TUTORIAL_DEATH_TOAST_MS = 1450;
let deathTimer = null;

function tutorialCrashHint(info) {
  const distance = info?.distance ?? game.distance;
  const bucket = Math.round(distance / 280);
  if (bucket === tutorialCrashBucket) tutorialCrashCount++;
  else { tutorialCrashBucket = bucket; tutorialCrashCount = 1; }
  if (tutorialCrashCount >= 2) return 'Short taps give finer control.';
  return info?.reason === 'wall'
    ? 'Turn away from the wall earlier.'
    : 'Release earlier to straighten out.';
}

function handleDeath() {
  if (ui !== 'playing') return;
  crashPending = false;
  ui = 'over';
  stopLoop();
  try { Storage.recordPlay(); } catch (_) { /* ignore */ }
  noteAttemptFinished();
  try {
    hide($('hud'));
    hide($('btn-pause'));
    hide($('tutorial'));
    const sub = $('death-toast-sub');
    if (sub) {
      if (mode === 'endless') {
        const meters = Math.round(game.distance * FEEL.metersPerPx);
        const best = Storage.recordMarathon(meters);
        sub.textContent = `${meters}m — best ${best}m`;
      } else {
        if (current) { try { Storage.recordLevelAttempt(current.id); } catch (_) { /* ignore */ } }
        const progress = Storage.getTutorial();
        const tutorialRun = current?.id === '1'
          && (!progress.level1Complete || tutorialSession?.kind === 'story');
        sub.textContent = tutorialRun ? tutorialCrashHint(lastCrashInfo) : 'You struck the deep.';
      }
    }
    const toast = $('death-toast');
    if (toast) {
      show(toast);
      toast.classList.remove('show');
      void toast.offsetWidth;
      toast.classList.add('show');
    }
  } catch (_) { /* ignore */ }
  cancelDeathAutoRestart();
  const progress = Storage.getTutorial();
  const tutorialRun = mode === 'story' && current?.id === '1'
    && (!progress.level1Complete || tutorialSession?.kind === 'story');
  deathTimer = setTimeout(restartAfterDeath, tutorialRun ? TUTORIAL_DEATH_TOAST_MS : DEATH_TOAST_MS);
}

function cancelDeathAutoRestart() {
  if (deathTimer) { clearTimeout(deathTimer); deathTimer = null; }
}

async function restartAfterDeath() {
  if (ui !== 'over' && ui !== 'playing') return;
  cancelDeathAutoRestart();
  crashPending = false;
  try { await maybeRequestBreakAd(); } catch (_) { /* ignore */ }
  // The player may have navigated away while the ad was open.
  if (ui !== 'over' && ui !== 'playing') return;
  if (mode === 'endless') { launchEndless(); return; }
  if (!current) { goMenu(); return; }
  launch();
}

function goWin(res) {
  if (ui !== 'playing') return;
  const tutorialProgress = Storage.getTutorial();
  const tutorialFinish = mode === 'story' && current?.id === '1'
    && (!tutorialProgress.level1Complete || tutorialSession?.replay);
  if (mode === 'story' && current?.id === '1') {
    try {
      Storage.updateTutorial({
        version: TUTORIAL_VERSION, steering: true, hazards: true, level1Complete: true,
      });
    } catch (_) { /* ignore */ }
  }
  tutorialSession = null;
  winPending = null;
  ui = 'won';
  stopLoop();
  try { Storage.recordPlay(); } catch (_) { /* ignore */ }
  try { Storage.recordLevelAttempt(current.id); } catch (_) { /* ignore */ }
  noteAttemptFinished();
  try {
    hide($('hud'));
    hide($('btn-pause'));
    hide($('tutorial'));
    const rec = Storage.recordRun(current.id, res || { time: 0, stars: 0, noDamage: false });
    const pearls = $('win-pearls');
    const guidance = $('win-guidance');
    const timeEl = $('win-time');
    const bestEl = $('win-best');
    if (pearls) {
      const hasPearls = ((res && res.pearlsTotal) || 0) > 0;
      pearls.innerHTML = hasPearls ? pearlMarkup((res && res.stars) || 0) : '';
      if (hasPearls) show(pearls); else hide(pearls);
    }
    if (guidance) {
      guidance.textContent = tutorialFinish ? 'FIRST DIVE COMPLETE · LEVEL 2 UNLOCKED' : '';
      if (tutorialFinish) show(guidance); else hide(guidance);
    }
    if (timeEl) timeEl.textContent = ((res && res.time) || 0).toFixed(1);
    if (bestEl) bestEl.textContent = rec.bestTime != null ? rec.bestTime.toFixed(1) : '—';
    show($('screen-win'));
  } catch (err) {
    console.error('goWin', err);
    try { show($('screen-win')); } catch (_) { /* ignore */ }
  }
}

async function nextLevel() {
  if (navBusy) return;
  navBusy = true;
  try {
    const idx = manifest.findIndex((m) => m.id === current?.id);
    const nxt = manifest.slice(idx + 1).find(isPlayableManifestEntry);
    try { await maybeRequestBreakAd(); } catch (_) { /* ignore */ }
    if (ui !== 'won') { navBusy = false; return; }
    navBusy = false;
    if (nxt) startLevel(nxt.id);
    else goSelect();
  } catch (err) {
    console.error('nextLevel', err);
    navBusy = false;
    goSelect();
  }
}

async function retryWonLevel() {
  if (navBusy || ui !== 'won' || !current) return;
  navBusy = true;
  try { await maybeRequestBreakAd(); } catch (_) { /* ignore */ }
  if (ui === 'won' && current) launch();
  else navBusy = false;
}

// ── buttons ──
// Click sound NEVER blocks the action. Action is always attempted.
function bind(id, fn) {
  const el = $(id);
  if (!el) return;
  el.addEventListener('click', (e) => {
    try { e.preventDefault(); } catch (_) { /* ignore */ }
    clickSound();
    try { fn(); } catch (err) { console.error(id, err); }
  });
}

bind('btn-pause', pauseGame);
bind('btn-resume', resumeGame);
bind('btn-pause-restart', () => { if (current) launch(); });
bind('btn-pause-select', goMenuOrEditor);
bind('btn-next', nextLevel);
bind('btn-win-retry', retryWonLevel);
bind('btn-win-select', goMenuOrEditor);
bind('btn-back-editor', backToEditor);
bind('dbg-reset', resetDebugOverride);
bind('btn-menu-play', goSelect);
bind('btn-menu-classic', startMarathon);
bind('btn-help', goHowTo);
bind('btn-howto-back', goMenu);
bind('btn-replay-tutorial', replayTutorial);
bind('btn-select-back', goMenu);
bind('btn-settings', openSettings);
bind('btn-settings-close', closeSettings);
bind('btn-settings-music', () => { ensureAudio(); try { Audio.toggleMusicMuted(); } catch (_) {} });
bind('btn-settings-sfx', () => { ensureAudio(); try { Audio.toggleSfxMuted(); } catch (_) {} });
bind('death-toast', restartAfterDeath);

// Static icons — each guarded so a missing node cannot kill boot.
function setIcon(id, name, opts) {
  try {
    const el = $(id);
    if (el) el.innerHTML = icon(name, opts);
  } catch (_) { /* ignore */ }
}
setIcon('btn-settings', 'settings');
setIcon('btn-help', 'help');
setIcon('btn-howto-back', 'back');
setIcon('btn-select-back', 'back');
setIcon('btn-pause', 'pause', { strokeWidth: '2.2' });
setIcon('btn-resume', 'play', { size: 52, filled: true });
try {
  const play = $('btn-menu-play');
  if (play) {
    play.innerHTML = `${icon('levels', { size: 26, filled: true })}<span class="mf-line">LEVELS</span>`;
  }
  const next = $('btn-next');
  if (next) {
    next.innerHTML = `${icon('play', { size: 26, filled: true })}<span class="mf-line">NEXT</span>`;
  }
  const marathon = $('btn-menu-classic');
  if (marathon) {
    marathon.innerHTML = `${icon('play', { size: 24, filled: true })}`
      + `<span class="mf-line">INFINITE</span><span class="mf-line">MADNESS</span>`;
  }
  const musicIcon = $('settings-music-icon');
  if (musicIcon) musicIcon.innerHTML = icon('music', { size: 18 });
  const sfxIcon = $('settings-sfx-icon');
  if (sfxIcon) sfxIcon.innerHTML = icon('sfx', { size: 18 });
  const ver = $('settings-version');
  if (ver) ver.textContent = `ORBIT DEEP · v${APP_VERSION}`;
} catch (_) { /* ignore */ }

for (const id of ['dbg-size', 'dbg-color', 'dbg-edge-behavior', ...DEBUG_SLIDERS.map((s) => s.id)]) {
  const el = $(id);
  if (el) el.addEventListener('input', persistDebugOverride);
}
const colorOn = $('dbg-color-on');
if (colorOn) colorOn.addEventListener('change', persistDebugOverride);

// WGPlayer midrolls are requested only at natural pauses. The platform also
// applies its own availability and frequency checks, while this local cadence
// prevents repeated calls during the game's fast retry loop.
const ATTEMPTS_PER_AD = 3;
let attemptsSinceAd = 0;

function noteAttemptFinished() {
  attemptsSinceAd += 1;
}

function requestBreakAd() {
  return Platform.commercialBreak({
    onAdStart: () => { try { Audio.setAdMuted(true); } catch (_) { /* ignore */ } },
    onAdEnd: () => { try { Audio.setAdMuted(false); } catch (_) { /* ignore */ } },
  });
}

function maybeRequestBreakAd() {
  if (attemptsSinceAd < ATTEMPTS_PER_AD) return Promise.resolve();
  attemptsSinceAd = 0;
  return requestBreakAd();
}

function goMenuOrEditor() {
  if (isTest) { backToEditor(); return; }
  const cameFromPlaySession = ui === 'paused' || ui === 'over' || ui === 'won';
  goMenu();
  if (cameFromPlaySession) {
    try { maybeRequestBreakAd(); } catch (_) { /* ignore */ }
  }
}
function backToEditor() { location.href = 'editor.html'; }

document.addEventListener('visibilitychange', () => {
  try {
    if (document.hidden && ui === 'playing') pauseGame();
  } catch (_) { /* ignore */ }
});

// ── main loop ──
let last = performance.now();
let rafId = null;

function frame(now) {
  const dt = Math.min(0.05, (now - last) / 1000); last = now;
  try {
    // The first tutorial frame stays at the start line until the player actually provides
    // steering input. Input remains live; only forward simulation is held.
    const tutorialHolding = tutorialSession?.kind === 'story'
      && tutorialSession.step === 'steer' && !game.hasSteered;
    if (!tutorialHolding) game.update(dt);
    game.draw(dt);
    updateTutorial(now);
    if (ui === 'playing' && crashPending && (
      game.phase === 'over' || (game.phase === 'dead' && game.deathT >= FEEL.restartDelay)
    )) {
      handleDeath();
    }
    if (ui === 'playing' && winPending && game.phase === 'won') {
      goWin(winPending);
    }
  } catch (err) {
    console.error('frame error', err);
    try {
      if (ui === 'playing' && winPending) goWin(winPending);
      else if (ui === 'playing' && crashPending) handleDeath();
    } catch (_) { /* ignore */ }
  }

  rafId = ui === 'playing' ? requestAnimationFrame(frame) : null;
}

function startLoop() {
  if (rafId !== null) return;
  last = performance.now();
  rafId = requestAnimationFrame(frame);
}
function stopLoop() {
  if (rafId === null) return;
  cancelAnimationFrame(rafId);
  rafId = null;
}
function loopRunning() { return rafId !== null; }

if (isDebug) {
  window.__od = {
    game,
    async load(id) { current = await loadLevel(id); game.setLevel(current); syncDebugPanel(); game.start(); return current.id; },
    step(dt, n = 1) { for (let i = 0; i < n; i++) game.update(dt); },
    draw() { game.draw(0.016); },
    state() {
      return {
        phase: game.phase, distance: game.distance, time: game.time,
        x: game.craftX, tookDamage: game.tookDamage, player: { ...game.player },
      };
    },
    ui: () => ui,
    loopRunning,
    backingStore: () => ({
      width: canvas.width, height: canvas.height,
      cssW: game.cssW, cssH: game.cssH,
      dpr: game.dpr, deviceDpr: window.devicePixelRatio || 1,
    }),
    particleCounts: () => ({
      trailActive: game.trail.filter((p) => p.active).length,
      trailPool: game.trail.length,
      sparkActive: game.sparks.filter((s) => s.active).length,
      sparkPool: game.sparks.length,
    }),
    startLevel,
    pause: pauseGame,
    resume: resumeGame,
    tick: (now = performance.now()) => frame(now),
    deathToastVisible: () => {
      const t = $('death-toast');
      return !!(t && !t.classList.contains('hidden') && t.classList.contains('show'));
    },
  };
}

// ── boot ──
async function boot() {
  try { Audio.init(); } catch (_) { /* ignore */ }
  try { await Platform.init(); } catch (_) { /* ignore */ }
  try { Platform.loadingStart(); } catch (_) { /* ignore */ }

  if (isTest) {
    show($('test-bar'));
    let lv = null;
    try { lv = validateLevel(JSON.parse(sessionStorage.getItem(TEST_KEY) || 'null')); }
    catch (e) { alert('Test level invalid: ' + e.message); }
    try { Platform.loadingFinished(); } catch (_) { /* ignore */ }
    hide($('screen-loading'));
    if (lv) { current = lv; launch(); } else { backToEditor(); return; }
  } else {
    try {
      manifest = await loadManifest();
    } catch (e) {
      const loading = $('screen-loading');
      if (loading) {
        loading.innerHTML = `<p class="loading-text">Could not load levels.<br>Serve the folder with a static web server<br>(see README) and reload.</p>`;
      }
      return;
    }
    try { Platform.loadingFinished(); } catch (_) { /* ignore */ }
    hide($('screen-loading'));
    goMenu();
  }
  updateMusicLabel();
  updateSfxLabel();
}
boot().catch((err) => {
  console.error('boot failed', err);
  try { goMenu(); } catch (_) { /* ignore */ }
});
