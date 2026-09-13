/* Chroma Echo — Audio engine
 * Web Audio synthesis + a lookahead step sequencer (the "two clocks" pattern).
 * All melodic content lives in one major-pentatonic key so any stack of layers
 * is guaranteed to sound consonant — the Incredibox trick.
 */
window.CE = window.CE || {};
(function (CE) {
  'use strict';

  // ---- music theory helpers -------------------------------------------------
  const PENT = [0, 2, 4, 7, 9]; // major pentatonic degrees
  function mtof(m) { return 440 * Math.pow(2, (m - 69) / 12); }
  // build a pentatonic note from a "scale index" (… -2,-1,0,1,2 …) around root MIDI
  function pent(root, idx) {
    const oct = Math.floor(idx / 5);
    const deg = ((idx % 5) + 5) % 5;
    return root + oct * 12 + PENT[deg];
  }

  // ---- the engine -----------------------------------------------------------
  class AudioEngine {
    constructor() {
      this.ctx = null;
      this.master = null;
      this.reverb = null;
      this.bpm = 100;
      this.transpose = 0;          // semitones from C
      this.stepsPerBar = 16;
      this.bars = 2;               // 2-bar loop = 32 steps
      this.totalSteps = this.stepsPerBar * this.bars;
      this.current16 = 0;          // running step counter
      this.nextNoteTime = 0;
      this.lookahead = 0.025;      // sec (scheduler interval)
      this.scheduleAhead = 0.12;   // sec
      this.timer = null;
      this.playing = false;
      this.voices = {};            // id -> voice instance
      this.active = {};            // characterId -> { costumeId, muted }
      this.soloId = null;
      this.masterMuted = false;
      this.visualQueue = [];       // {step,time, hits:[{charId,costumeId,vel}]}
      this.onReady = null;
    }

    init() {
      if (this.ctx) return;
      const Ctx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new Ctx();
      const ctx = this.ctx;

      // master bus: gain -> soft compressor -> destination
      this.master = ctx.createGain();
      this.master.gain.value = 0.9;
      const comp = ctx.createDynamicsCompressor();
      comp.threshold.value = -10; comp.knee.value = 24; comp.ratio.value = 3;
      comp.attack.value = 0.004; comp.release.value = 0.18;
      this.master.connect(comp).connect(ctx.destination);

      // reverb send (algorithmic impulse) for a dreamy pastel space
      this.reverbIn = ctx.createGain();
      this.reverbIn.gain.value = 1;
      const conv = ctx.createConvolver();
      conv.buffer = this._impulse(2.2, 2.6);
      const wet = ctx.createGain(); wet.gain.value = 0.32;
      this.reverbIn.connect(conv).connect(wet).connect(this.master);

      // shared white-noise buffer
      this.noiseBuf = this._noise(1.0);

      // instantiate voices from costume table
      CE.COSTUMES.forEach(c => { this.voices[c.id] = new Voice(this, c); });
    }

    _impulse(dur, decay) {
      const ctx = this.ctx, rate = ctx.sampleRate, len = rate * dur;
      const buf = ctx.createBuffer(2, len, rate);
      for (let ch = 0; ch < 2; ch++) {
        const d = buf.getChannelData(ch);
        for (let i = 0; i < len; i++) {
          d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, decay);
        }
      }
      return buf;
    }
    _noise(dur) {
      const ctx = this.ctx, rate = ctx.sampleRate, len = rate * dur;
      const buf = ctx.createBuffer(1, len, rate);
      const d = buf.getChannelData(0);
      for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
      return buf;
    }

    resume() { if (this.ctx && this.ctx.state !== 'running') this.ctx.resume(); }

    // ---- transport ----------------------------------------------------------
    play() {
      this.init();
      this.resume();
      if (this.playing) return;
      this.playing = true;
      this.current16 = 0;
      this.nextNoteTime = this.ctx.currentTime + 0.06;
      this.timer = setInterval(() => this._scheduler(), this.lookahead * 1000);
    }
    stop() {
      this.playing = false;
      if (this.timer) clearInterval(this.timer);
      this.timer = null;
      this.visualQueue.length = 0;
    }
    setBpm(b) { this.bpm = b; }
    setTranspose(t) { this.transpose = t; }

    _scheduler() {
      const secPer16 = (60 / this.bpm) / 4;
      while (this.nextNoteTime < this.ctx.currentTime + this.scheduleAhead) {
        this._scheduleStep(this.current16 % this.totalSteps, this.nextNoteTime);
        this.nextNoteTime += secPer16;
        this.current16++;
      }
    }

    _scheduleStep(step, time) {
      const hits = [];
      const anySolo = this.soloId !== null;
      for (const charId in this.active) {
        const slot = this.active[charId];
        if (!slot) continue;
        const audible = !this.masterMuted && !slot.muted &&
          (!anySolo || this.soloId === charId);
        const voice = this.voices[slot.costumeId];
        if (!voice) continue;
        const cell = voice.cost.pattern[step % voice.cost.pattern.length];
        if (cell === 0 || cell === null || cell === undefined) continue;
        if (audible) voice.play(time, cell, step);
        hits.push({ charId, costumeId: slot.costumeId, vel: typeof cell === 'object' ? (cell.v || 1) : 1, audible });
      }
      this.visualQueue.push({ step, time, hits });
    }

    // drain visual events whose time has passed — called from the render loop
    pull(now) {
      const out = [];
      while (this.visualQueue.length && this.visualQueue[0].time <= now) {
        out.push(this.visualQueue.shift());
      }
      return out;
    }

    // ---- arrangement --------------------------------------------------------
    assign(charId, costumeId) { this.init(); this.active[charId] = { costumeId, muted: false }; }
    clearChar(charId) {
      delete this.active[charId];
      if (this.soloId === charId) this.soloId = null;
    }
    toggleMute(charId) {
      const s = this.active[charId]; if (!s) return false;
      s.muted = !s.muted; return s.muted;
    }
    toggleSolo(charId) {
      this.soloId = (this.soloId === charId) ? null : charId;
      return this.soloId === charId;
    }
    clearAll() { this.active = {}; this.soloId = null; }
  }

  // ---- a single synth voice -------------------------------------------------
  class Voice {
    constructor(engine, cost) { this.e = engine; this.cost = cost; }
    out(node, send) {
      node.connect(this.e.master);
      if (send) { const g = this.e.ctx.createGain(); g.gain.value = send; node.connect(g); g.connect(this.e.reverbIn); }
    }
    play(time, cell, step) {
      const v = (typeof cell === 'object') ? (cell.v || 1) : 1;
      const note = (typeof cell === 'object') ? cell.n : (typeof cell === 'number' ? cell : 0);
      this[this.cost.synth](time, note, v, step);
    }
    root() { return 60 + this.e.transpose; }

    // --- drum & perc ---
    kick(t, n, v) {
      const c = this.e.ctx, o = c.createOscillator(), g = c.createGain();
      o.type = 'sine';
      o.frequency.setValueAtTime(140, t);
      o.frequency.exponentialRampToValueAtTime(46, t + 0.12);
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(0.9 * v, t + 0.005);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.34);
      o.connect(g); this.out(g, 0.04); o.start(t); o.stop(t + 0.36);
    }
    snare(t, n, v) {
      const c = this.e.ctx;
      const src = c.createBufferSource(); src.buffer = this.e.noiseBuf;
      const bp = c.createBiquadFilter(); bp.type = 'highpass'; bp.frequency.value = 1400;
      const g = c.createGain();
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(0.5 * v, t + 0.004);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.18);
      src.connect(bp).connect(g); this.out(g, 0.18);
      // body tone
      const o = c.createOscillator(); o.type = 'triangle'; o.frequency.value = 190;
      const g2 = c.createGain(); g2.gain.setValueAtTime(0.3 * v, t); g2.gain.exponentialRampToValueAtTime(0.0001, t + 0.12);
      o.connect(g2); this.out(g2, 0.1);
      src.start(t); src.stop(t + 0.2); o.start(t); o.stop(t + 0.14);
    }
    clap(t, n, v) {
      const c = this.e.ctx;
      for (let i = 0; i < 3; i++) {
        const src = c.createBufferSource(); src.buffer = this.e.noiseBuf;
        const bp = c.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 1600; bp.Q.value = 0.7;
        const g = c.createGain(); const dt = t + i * 0.013;
        g.gain.setValueAtTime(0.0001, dt);
        g.gain.exponentialRampToValueAtTime(0.45 * v, dt + 0.002);
        g.gain.exponentialRampToValueAtTime(0.0001, dt + 0.09);
        src.connect(bp).connect(g); this.out(g, 0.2); src.start(dt); src.stop(dt + 0.1);
      }
    }
    hat(t, n, v) {
      const c = this.e.ctx;
      const src = c.createBufferSource(); src.buffer = this.e.noiseBuf;
      const hp = c.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 7000;
      const g = c.createGain();
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(0.18 * v, t + 0.002);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.05);
      src.connect(hp).connect(g); this.out(g, 0.05); src.start(t); src.stop(t + 0.06);
    }
    perc(t, n, v) {
      const c = this.e.ctx, o = c.createOscillator(), g = c.createGain();
      o.type = 'triangle';
      const f = mtof(this.root() + 12 + (n || 0));
      o.frequency.setValueAtTime(f * 1.4, t);
      o.frequency.exponentialRampToValueAtTime(f, t + 0.05);
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(0.3 * v, t + 0.004);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.16);
      o.connect(g); this.out(g, 0.22); o.start(t); o.stop(t + 0.18);
    }

    // --- bass ---
    subBass(t, n, v) {
      const c = this.e.ctx, o = c.createOscillator(), o2 = c.createOscillator(), g = c.createGain();
      const f = mtof(this.root() - 24 + n);
      o.type = 'sine'; o.frequency.value = f;
      o2.type = 'triangle'; o2.frequency.value = f; o2.detune.value = 4;
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(0.5 * v, t + 0.02);
      g.gain.setValueAtTime(0.5 * v, t + 0.16);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.32);
      o.connect(g); o2.connect(g); this.out(g, 0.02);
      o.start(t); o2.start(t); o.stop(t + 0.34); o2.stop(t + 0.34);
    }
    pluck(t, n, v) {
      const c = this.e.ctx, o = c.createOscillator(), g = c.createGain(), lp = c.createBiquadFilter();
      const f = mtof(this.root() - 12 + n);
      o.type = 'sawtooth'; o.frequency.value = f;
      lp.type = 'lowpass'; lp.frequency.setValueAtTime(2200, t); lp.frequency.exponentialRampToValueAtTime(500, t + 0.25); lp.Q.value = 6;
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(0.34 * v, t + 0.006);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.26);
      o.connect(lp).connect(g); this.out(g, 0.08); o.start(t); o.stop(t + 0.28);
    }

    // --- harmony ---
    pad(t, n, v) {
      const c = this.e.ctx;
      const intervals = [0, 7, 12, 14]; // open major-9 (no third) — consonant on any root
      const dur = (60 / this.e.bpm) * 2; // half-note swell
      const lp = c.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 2600;
      const g = c.createGain();
      g.gain.setValueAtTime(0.0001, t);
      g.gain.linearRampToValueAtTime(0.12 * v, t + 0.25);
      g.gain.setValueAtTime(0.12 * v, t + dur * 0.7);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      lp.connect(g); this.out(g, 0.4);
      intervals.forEach(iv => {
        const o = c.createOscillator(); o.type = 'sawtooth';
        o.frequency.value = mtof(this.root() + n + iv); o.detune.value = (Math.random() * 12 - 6);
        o.connect(lp); o.start(t); o.stop(t + dur + 0.05);
      });
    }
    stab(t, n, v) {
      const c = this.e.ctx;
      const intervals = [0, 5, 7]; // sus voicing (no third)
      const g = c.createGain();
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(0.16 * v, t + 0.006);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.3);
      const lp = c.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 3000; lp.Q.value = 2;
      lp.connect(g); this.out(g, 0.16);
      intervals.forEach(iv => {
        const o = c.createOscillator(); o.type = 'square';
        o.frequency.value = mtof(this.root() + n + iv);
        const og = c.createGain(); og.gain.value = 0.5; o.connect(og).connect(lp);
        o.start(t); o.stop(t + 0.32);
      });
    }

    // --- melody / lead ---
    arp(t, n, v) {
      const c = this.e.ctx, o = c.createOscillator(), g = c.createGain();
      o.type = 'triangle'; o.frequency.value = mtof(this.root() + 12 + n);
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(0.2 * v, t + 0.005);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.2);
      o.connect(g); this.out(g, 0.18); o.start(t); o.stop(t + 0.22);
    }
    bell(t, n, v) {
      const c = this.e.ctx;
      [1, 2.01, 3.0].forEach((mul, i) => {
        const o = c.createOscillator(), g = c.createGain();
        o.type = 'sine'; o.frequency.value = mtof(this.root() + 12 + n) * mul;
        const amp = [0.22, 0.12, 0.06][i] * v;
        g.gain.setValueAtTime(0.0001, t);
        g.gain.exponentialRampToValueAtTime(amp, t + 0.004);
        g.gain.exponentialRampToValueAtTime(0.0001, t + 0.9 - i * 0.2);
        o.connect(g); this.out(g, 0.3); o.start(t); o.stop(t + 1.0);
      });
    }
    // formant-ish "voice" — two oscillators through vowel bandpass + vibrato
    voice(t, n, v, vowel) {
      const c = this.e.ctx;
      const f = mtof(this.root() + n);
      const dur = (60 / this.e.bpm) * 1.0;
      const o = c.createOscillator(); o.type = 'sawtooth'; o.frequency.value = f;
      const o2 = c.createOscillator(); o2.type = 'sawtooth'; o2.frequency.value = f * 2; o2.detune.value = 6;
      // vibrato
      const lfo = c.createOscillator(); lfo.frequency.value = 5.4; const lg = c.createGain(); lg.gain.value = 4;
      lfo.connect(lg); lg.connect(o.detune); lg.connect(o2.detune); lfo.start(t); lfo.stop(t + dur + 0.1);
      const formants = vowel === 'ooh' ? [[300, 0.9], [870, 0.5], [2240, 0.18]] : [[700, 0.9], [1220, 0.6], [2600, 0.25]];
      const sum = c.createGain(); o.connect(sum); o2.connect(sum); sum.gain.value = 0.5;
      const g = c.createGain();
      g.gain.setValueAtTime(0.0001, t);
      g.gain.linearRampToValueAtTime(0.16 * v, t + 0.06);
      g.gain.setValueAtTime(0.16 * v, t + dur * 0.6);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      formants.forEach(([freq, amp]) => {
        const bp = c.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = freq; bp.Q.value = 7;
        const fg = c.createGain(); fg.gain.value = amp;
        sum.connect(bp).connect(fg).connect(g);
      });
      this.out(g, 0.34); o.start(t); o2.start(t); o.stop(t + dur + 0.05); o2.stop(t + dur + 0.05);
    }
    vocalLa(t, n, v) { this.voice(t, n, v, 'la'); }
    vocalOoh(t, n, v) { this.voice(t, n - 12, v, 'ooh'); }
    whistle(t, n, v) {
      const c = this.e.ctx, o = c.createOscillator(), g = c.createGain();
      o.type = 'sine'; o.frequency.setValueAtTime(mtof(this.root() + 24 + n), t);
      const lfo = c.createOscillator(); lfo.frequency.value = 5; const lg = c.createGain(); lg.gain.value = 6;
      lfo.connect(lg).connect(o.detune); lfo.start(t);
      g.gain.setValueAtTime(0.0001, t);
      g.gain.linearRampToValueAtTime(0.14 * v, t + 0.05);
      g.gain.setValueAtTime(0.14 * v, t + 0.18);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.4);
      o.connect(g); this.out(g, 0.3); o.start(t); o.stop(t + 0.42); lfo.stop(t + 0.42);
    }
    sparkle(t, n, v) {
      const c = this.e.ctx;
      const o = c.createOscillator(), g = c.createGain();
      o.type = 'sine'; o.frequency.setValueAtTime(mtof(this.root() + 24 + n), t);
      o.frequency.exponentialRampToValueAtTime(mtof(this.root() + 36 + n), t + 0.15);
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(0.12 * v, t + 0.004);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.4);
      o.connect(g); this.out(g, 0.45); o.start(t); o.stop(t + 0.42);
    }
  }

  CE.AudioEngine = AudioEngine;
  CE.pent = pent;
})(window.CE);
