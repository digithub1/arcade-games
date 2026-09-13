/* ============================================================
 * music.js — procedural synthwave soundtrack (no audio files).
 *
 * A lookahead step-sequencer on the shared AudioContext. Moods share
 * one always-running scheduler so switching (boss / story / orbit)
 * is seamless. Routed through its own gain bus (settings volume + mute).
 * ============================================================ */
const Music = (() => {
  const A = Engine.audio;                 // shared synth (ctx, resume, master/mute)
  let bus = null;                         // music gain node
  let running = false, timer = null;
  let stepTime = 0, step = 0, bar = 0;
  let vol = 0.5, muted = false;
  let cur = null;                         // active mood config
  let moodKey = 'menu';

  const mtof = m => 440 * Math.pow(2, (m - 69) / 12);

  // chord = { root: MIDI, type: intervals[] }
  const M = [0, 4, 7], m = [0, 3, 7], m7 = [0, 3, 7, 10], sus2 = [0, 2, 7];
  const chord = (root, type) => ({ root, type });

  // Distinct progressions per mood (still A-family for cohesion)
  const PROG = {
    menu:  [chord(57, m), chord(53, M), chord(60, M), chord(55, M)],             // Am F C G
    game:  [chord(57, m), chord(53, M), chord(60, M), chord(55, M)],             // Am F C G
    game2: [chord(50, m), chord(53, M), chord(57, m), chord(55, M)],             // Dm F Am G — alt combat
    boss:  [chord(57, m), chord(55, M), chord(50, m), chord(52, M)],             // Am G Dm E
    boss2: [chord(52, m), chord(48, M), chord(50, m), chord(55, M)],             // Em C Dm G — heavier
    story: [chord(57, m), chord(60, sus2), chord(53, M), chord(55, m7)],         // Am Csus2 F G7 — soft
    orbit: [chord(57, m), chord(52, m), chord(53, M), chord(50, m)],             // Am Em F Dm — tense hold
    assault: [chord(50, m), chord(57, m), chord(55, M), chord(52, M)],           // Dm Am G E — aggressive
  };

  const CONFIG = {
    menu:    { prog: PROG.menu,    bpm: 96,  arpEvery: 2, drums: false, bass: 0.18, arp: 0.10, lead: 0,     wave: 'triangle' },
    game:    { prog: PROG.game,    bpm: 126, arpEvery: 2, drums: true,  bass: 0.22, arp: 0.13, lead: 0,     wave: 'sawtooth' },
    game2:   { prog: PROG.game2,   bpm: 132, arpEvery: 2, drums: true,  bass: 0.23, arp: 0.14, lead: 0.04,  wave: 'sawtooth' },
    boss:    { prog: PROG.boss,    bpm: 150, arpEvery: 1, drums: true,  bass: 0.26, arp: 0.14, lead: 0.10,  wave: 'sawtooth' },
    boss2:   { prog: PROG.boss2,   bpm: 158, arpEvery: 1, drums: true,  bass: 0.28, arp: 0.15, lead: 0.12,  wave: 'square' },
    story:   { prog: PROG.story,   bpm: 72,  arpEvery: 4, drums: false, bass: 0.14, arp: 0.07, lead: 0.05,  wave: 'sine' },
    orbit:   { prog: PROG.orbit,   bpm: 118, arpEvery: 2, drums: true,  bass: 0.24, arp: 0.12, lead: 0.06,  wave: 'triangle' },
    assault: { prog: PROG.assault, bpm: 140, arpEvery: 1, drums: true,  bass: 0.25, arp: 0.14, lead: 0.08,  wave: 'sawtooth' },
  };

  function ensureBus() {
    A.resume();
    if (!A.ctx) return false;
    if (!bus) { bus = A.ctx.createGain(); bus.gain.value = 0.0001; bus.connect(A.ctx.destination); }
    return true;
  }

  function gain() { return muted ? 0.0001 : Math.max(0.0001, vol); }

  // one oscillator note → music bus
  function note(freq, t, dur, wave, v) {
    const ctx = A.ctx;
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = wave; o.frequency.value = freq;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(v, t + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g).connect(bus);
    o.start(t); o.stop(t + dur + 0.03);
  }

  function kick(t) {
    const ctx = A.ctx;
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = 'sine';
    o.frequency.setValueAtTime(150, t);
    o.frequency.exponentialRampToValueAtTime(45, t + 0.11);
    g.gain.setValueAtTime(0.5, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.16);
    o.connect(g).connect(bus);
    o.start(t); o.stop(t + 0.18);
  }

  function hat(t, open) {
    const ctx = A.ctx, dur = open ? 0.08 : 0.03;
    const buf = ctx.createBuffer(1, ctx.sampleRate * dur, ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / d.length);
    const src = ctx.createBufferSource(); src.buffer = buf;
    const hp = ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 7000;
    const g = ctx.createGain(); g.gain.value = 0.12;
    src.connect(hp).connect(g).connect(bus);
    src.start(t);
  }

  function scheduleStep(s, t) {
    const c = cur, ch = c.prog[bar % c.prog.length];
    const tones = ch.type.map(iv => ch.root + iv);
    const stepDur = (60 / c.bpm) / 4;

    if (s % 4 === 0) note(mtof(ch.root - 12), t, stepDur * 3.6, c.wave, c.bass);   // bass (quarter)
    if (s % c.arpEvery === 0) {                                                     // arpeggio
      const idx = Math.floor(s / c.arpEvery) % tones.length;
      note(mtof(tones[idx] + 12), t, stepDur * (c.arpEvery * 0.9), c.wave, c.arp);
    }
    if (c.lead && (s === 0 || s === 8)) note(mtof(ch.root + 24), t, stepDur * 6, 'square', c.lead); // boss lead
    if (c.drums) {
      if (s % 4 === 0) kick(t);
      if (s % 4 === 2) hat(t, false);
      if (s % 2 === 1) hat(t, false);
    }
  }

  function scheduler() {
    if (!running || !A.ctx) return;
    const ahead = A.ctx.currentTime + 0.12;
    while (stepTime < ahead) {
      scheduleStep(step, stepTime);
      stepTime += (60 / cur.bpm) / 4;
      step = (step + 1) % 16;
      if (step === 0) bar++;
    }
  }

  function play(mood) {
    // Aliases so call sites stay simple
    let key = mood || 'game';
    if (key === 'defense') key = 'orbit';
    if (key === 'research') key = 'assault';
    // Alternate combat beds so long sessions don't loop one progression forever
    if (key === 'game' && moodKey === 'game' && running) key = 'game2';
    else if (key === 'game2' && moodKey === 'game2') key = 'game';
    if (key === 'boss' && moodKey === 'boss' && running) key = 'boss2';
    else if (key === 'boss2' && moodKey === 'boss2') key = 'boss';

    const next = CONFIG[key] || CONFIG.game;
    if (!ensureBus()) return;
    const same = cur === next && moodKey === key;
    cur = next;
    moodKey = key;
    bus.gain.cancelScheduledValues(A.ctx.currentTime);
    bus.gain.setTargetAtTime(gain(), A.ctx.currentTime, 0.3);   // fade in / hold
    if (!running) {
      running = true;
      stepTime = A.ctx.currentTime + 0.06; step = 0; bar = 0;
      timer = setInterval(scheduler, 25);
      scheduler();
    } else if (!same) {
      // Seamless mood change: keep scheduler, soft re-phase on next bar
      bar = 0;
    }
  }

  function stop() {
    if (bus && A.ctx) bus.gain.setTargetAtTime(0.0001, A.ctx.currentTime, 0.25);
    running = false;
    if (timer) { clearInterval(timer); timer = null; }
  }

  function setVolume(v) { vol = Engine.clamp(v, 0, 1); if (bus && A.ctx && running) bus.gain.setTargetAtTime(gain(), A.ctx.currentTime, 0.1); }
  function setMuted(b) { muted = !!b; if (bus && A.ctx) bus.gain.setTargetAtTime(gain(), A.ctx.currentTime, 0.1); }

  return { play, stop, setVolume, setMuted, get playing() { return running; }, get mood() { return moodKey; } };
})();
