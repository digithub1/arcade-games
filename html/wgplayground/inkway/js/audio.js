/**
 * INKWAY — Audio Manager
 * ======================
 * Procedural audio using Web Audio API.
 * ALL sounds are generated with oscillators + noise — zero external files.
 */

window.INKWAY = window.INKWAY || {};

INKWAY.Audio = (function () {
    'use strict';

    let _ctx = null;
    let _masterGain = null;
    let _musicGain = null;
    let _sfxGain = null;
    let _musicEnabled = true;
    let _sfxEnabled = true;
    let _initialized = false;

    // Active looping nodes (for stopping)
    let _activeLoops = {};

    function init() {
        const resumeAudio = () => {
            if (!_ctx) {
                _ctx = new (window.AudioContext || window.webkitAudioContext)();
                _masterGain = _ctx.createGain();
                _masterGain.gain.value = 0.7;
                _masterGain.connect(_ctx.destination);

                _musicGain = _ctx.createGain();
                _musicGain.gain.value = 0.3;
                _musicGain.connect(_masterGain);

                _sfxGain = _ctx.createGain();
                _sfxGain.gain.value = 0.5;
                _sfxGain.connect(_masterGain);

                _initialized = true;
            }
            if (_ctx.state === 'suspended') {
                _ctx.resume();
            }
            document.removeEventListener('click', resumeAudio);
            document.removeEventListener('touchstart', resumeAudio);
        };
        document.addEventListener('click', resumeAudio);
        document.addEventListener('touchstart', resumeAudio);

        const settings = INKWAY.Storage.getSettings();
        _musicEnabled = settings.music;
        _sfxEnabled = settings.sfx;

        // Listen for setting changes
        INKWAY.Main.events.on('settingChange', ({ key, value }) => {
            if (key === 'music') setMusicEnabled(value);
            if (key === 'sfx') setSfxEnabled(value);
        });
    }

    // ─── UTILITY: Create noise buffer ───

    function _createNoiseBuffer(duration = 0.5) {
        if (!_ctx) return null;
        const sampleRate = _ctx.sampleRate;
        const length = sampleRate * duration;
        const buffer = _ctx.createBuffer(1, length, sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < length; i++) {
            data[i] = Math.random() * 2 - 1;
        }
        return buffer;
    }

    function _createBrownNoiseBuffer(duration = 0.5) {
        if (!_ctx) return null;
        const sampleRate = _ctx.sampleRate;
        const length = sampleRate * duration;
        const buffer = _ctx.createBuffer(1, length, sampleRate);
        const data = buffer.getChannelData(0);
        let lastOut = 0;
        for (let i = 0; i < length; i++) {
            const white = Math.random() * 2 - 1;
            data[i] = (lastOut + 0.02 * white) / 1.02;
            lastOut = data[i];
            data[i] *= 3.5; // Boost
        }
        return buffer;
    }

    // ─── SOUND EFFECTS ───

    function playSound(name, params = {}) {
        if (!_sfxEnabled || !_ctx || !_initialized) return;

        const handlers = {
            'draw':         _playDraw,
            'ink_low':      _playInkLow,
            'erase':        _playErase,
            'cut':          _playCut,
            'launch':       _playLaunch,
            'spring':       _playSpring,
            'booster':      _playBooster,
            'portal':       _playPortal,
            'complete':     _playComplete,
            'star':         _playStar,
            'fail':         _playFail,
            'click':        _playClick,
            'coin':         _playCoin,
            'ink_collect':  _playInkCollect
        };

        const handler = handlers[name];
        if (handler) handler(params);
    }

    function _playClick() {
        const osc = _ctx.createOscillator();
        const gain = _ctx.createGain();
        osc.type = 'sine';
        osc.frequency.value = 1000;
        gain.gain.setValueAtTime(0.15, _ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, _ctx.currentTime + 0.05);
        osc.connect(gain).connect(_sfxGain);
        osc.start();
        osc.stop(_ctx.currentTime + 0.05);
    }

    function _playDraw() {
        // Short scratchy burst
        const buffer = _createBrownNoiseBuffer(0.08);
        if (!buffer) return;
        const source = _ctx.createBufferSource();
        source.buffer = buffer;

        const filter = _ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.value = 2000 + Math.random() * 1000;
        filter.Q.value = 1.5;

        const gain = _ctx.createGain();
        gain.gain.setValueAtTime(0.06, _ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, _ctx.currentTime + 0.06);

        source.connect(filter).connect(gain).connect(_sfxGain);
        source.start();
    }

    function _playInkLow() {
        const buffer = _createNoiseBuffer(0.1);
        if (!buffer) return;
        const source = _ctx.createBufferSource();
        source.buffer = buffer;

        const filter = _ctx.createBiquadFilter();
        filter.type = 'highpass';
        filter.frequency.value = 4000;

        const gain = _ctx.createGain();
        gain.gain.setValueAtTime(0.08, _ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, _ctx.currentTime + 0.08);

        source.connect(filter).connect(gain).connect(_sfxGain);
        source.start();
    }

    function _playErase() {
        // Descending sine sweep + noise
        const osc = _ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(600, _ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(200, _ctx.currentTime + 0.15);

        const gain = _ctx.createGain();
        gain.gain.setValueAtTime(0.12, _ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, _ctx.currentTime + 0.15);

        osc.connect(gain).connect(_sfxGain);
        osc.start();
        osc.stop(_ctx.currentTime + 0.15);

        // Noise burst
        const buffer = _createNoiseBuffer(0.1);
        if (buffer) {
            const ns = _ctx.createBufferSource();
            ns.buffer = buffer;
            const ng = _ctx.createGain();
            ng.gain.setValueAtTime(0.06, _ctx.currentTime);
            ng.gain.exponentialRampToValueAtTime(0.001, _ctx.currentTime + 0.1);
            ns.connect(ng).connect(_sfxGain);
            ns.start();
        }
    }

    function _playCut() {
        const buffer = _createNoiseBuffer(0.06);
        if (!buffer) return;
        const source = _ctx.createBufferSource();
        source.buffer = buffer;

        const filter = _ctx.createBiquadFilter();
        filter.type = 'highpass';
        filter.frequency.value = 5000;

        const gain = _ctx.createGain();
        gain.gain.setValueAtTime(0.2, _ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, _ctx.currentTime + 0.06);

        source.connect(filter).connect(gain).connect(_sfxGain);
        source.start();
    }

    function _playLaunch() {
        const now = _ctx.currentTime;
        
        // Elegant ascending major 7th chime (F4 -> A4 -> C5 -> E5)
        const notes = [349.23, 440.00, 523.25, 659.25];
        notes.forEach((freq, idx) => {
            const osc = _ctx.createOscillator();
            const gain = _ctx.createGain();
            
            osc.type = 'triangle'; // Warm finish-line like wave
            osc.frequency.setValueAtTime(freq, now + idx * 0.08);
            
            const noteStart = now + idx * 0.08;
            gain.gain.setValueAtTime(0, now);
            gain.gain.setValueAtTime(0, noteStart);
            gain.gain.linearRampToValueAtTime(0.18, noteStart + 0.03);
            gain.gain.setValueAtTime(0.18, noteStart + 0.15);
            gain.gain.exponentialRampToValueAtTime(0.001, noteStart + 0.5);
            
            osc.connect(gain).connect(_sfxGain);
            osc.start(noteStart);
            osc.stop(noteStart + 0.5);
        });

        // Add a gentle, deep background sine swell for a sense of power/launch
        const subOsc = _ctx.createOscillator();
        const subGain = _ctx.createGain();
        
        subOsc.type = 'sine';
        subOsc.frequency.setValueAtTime(120, now);
        subOsc.frequency.exponentialRampToValueAtTime(240, now + 0.4);
        
        subGain.gain.setValueAtTime(0, now);
        subGain.gain.linearRampToValueAtTime(0.15, now + 0.1);
        subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
        
        subOsc.connect(subGain).connect(_sfxGain);
        subOsc.start(now);
        subOsc.stop(now + 0.45);
    }

    function _playSpring() {
        // Classic cartoon boing — rapid pitch decay
        const osc = _ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, _ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(150, _ctx.currentTime + 0.25);

        const gain = _ctx.createGain();
        gain.gain.setValueAtTime(0.2, _ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, _ctx.currentTime + 0.3);

        osc.connect(gain).connect(_sfxGain);
        osc.start();
        osc.stop(_ctx.currentTime + 0.3);

        // Second harmonic for richness
        const osc2 = _ctx.createOscillator();
        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(1200, _ctx.currentTime);
        osc2.frequency.exponentialRampToValueAtTime(300, _ctx.currentTime + 0.2);

        const gain2 = _ctx.createGain();
        gain2.gain.setValueAtTime(0.08, _ctx.currentTime);
        gain2.gain.exponentialRampToValueAtTime(0.001, _ctx.currentTime + 0.2);

        osc2.connect(gain2).connect(_sfxGain);
        osc2.start();
        osc2.stop(_ctx.currentTime + 0.2);
    }

    function _playBooster() {
        // Electric whoosh
        const buffer = _createNoiseBuffer(0.2);
        if (!buffer) return;
        const source = _ctx.createBufferSource();
        source.buffer = buffer;

        const filter = _ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(500, _ctx.currentTime);
        filter.frequency.exponentialRampToValueAtTime(3000, _ctx.currentTime + 0.1);
        filter.frequency.exponentialRampToValueAtTime(500, _ctx.currentTime + 0.2);
        filter.Q.value = 2;

        const gain = _ctx.createGain();
        gain.gain.setValueAtTime(0.18, _ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, _ctx.currentTime + 0.2);

        source.connect(filter).connect(gain).connect(_sfxGain);
        source.start();
    }

    function _playPortal() {
        // Ascending sparkle arpeggio (3 quick notes)
        const notes = [523.25, 659.25, 783.99]; // C5, E5, G5
        notes.forEach((freq, i) => {
            const osc = _ctx.createOscillator();
            osc.type = 'sine';
            osc.frequency.value = freq;

            const gain = _ctx.createGain();
            const t = _ctx.currentTime + i * 0.06;
            gain.gain.setValueAtTime(0, t);
            gain.gain.linearRampToValueAtTime(0.12, t + 0.02);
            gain.gain.exponentialRampToValueAtTime(0.001, t + 0.15);

            osc.connect(gain).connect(_sfxGain);
            osc.start(t);
            osc.stop(t + 0.15);
        });
    }

    function _playComplete() {
        // 3-note ascending major chord — triumphant
        const notes = [261.63, 329.63, 392.00]; // C4, E4, G4
        notes.forEach((freq, i) => {
            const osc = _ctx.createOscillator();
            osc.type = 'triangle';
            osc.frequency.value = freq;

            const gain = _ctx.createGain();
            const t = _ctx.currentTime + i * 0.15;
            gain.gain.setValueAtTime(0, t);
            gain.gain.linearRampToValueAtTime(0.2, t + 0.03);
            gain.gain.setValueAtTime(0.2, t + 0.3);
            gain.gain.exponentialRampToValueAtTime(0.001, t + 0.6);

            osc.connect(gain).connect(_sfxGain);
            osc.start(t);
            osc.stop(t + 0.6);
        });
    }

    function _playStar(params = {}) {
        const starIndex = params.index || 0;
        const baseFreq = 523.25 * (1 + starIndex * 0.25); // Higher pitch for each star

        const osc = _ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.value = baseFreq;

        // Add shimmer with slight vibrato
        const lfo = _ctx.createOscillator();
        lfo.frequency.value = 12;
        const lfoGain = _ctx.createGain();
        lfoGain.gain.value = 8;
        lfo.connect(lfoGain).connect(osc.frequency);
        lfo.start();

        const gain = _ctx.createGain();
        const t = _ctx.currentTime;
        gain.gain.setValueAtTime(0, t);
        gain.gain.linearRampToValueAtTime(0.15, t + 0.02);
        gain.gain.setValueAtTime(0.15, t + 0.15);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.4);

        osc.connect(gain).connect(_sfxGain);
        osc.start();
        osc.stop(t + 0.4);
        lfo.stop(t + 0.4);
    }

    function _playFail() {
        // Sad descending two-tone (wah-wah)
        const notes = [392, 311.13]; // G4 → Eb4
        notes.forEach((freq, i) => {
            const osc = _ctx.createOscillator();
            osc.type = 'triangle';
            osc.frequency.value = freq;

            const gain = _ctx.createGain();
            const t = _ctx.currentTime + i * 0.25;
            gain.gain.setValueAtTime(0, t);
            gain.gain.linearRampToValueAtTime(0.15, t + 0.03);
            gain.gain.setValueAtTime(0.15, t + 0.2);
            gain.gain.exponentialRampToValueAtTime(0.001, t + 0.35);

            osc.connect(gain).connect(_sfxGain);
            osc.start(t);
            osc.stop(t + 0.35);
        });
    }

    function _playCoin() {
        const osc = _ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1200, _ctx.currentTime);
        osc.frequency.setValueAtTime(1600, _ctx.currentTime + 0.05);

        const gain = _ctx.createGain();
        gain.gain.setValueAtTime(0.1, _ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, _ctx.currentTime + 0.15);

        osc.connect(gain).connect(_sfxGain);
        osc.start();
        osc.stop(_ctx.currentTime + 0.15);
    }

    function _playInkCollect() {
        // Wet splash
        const osc = _ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(400, _ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(800, _ctx.currentTime + 0.08);
        osc.frequency.exponentialRampToValueAtTime(300, _ctx.currentTime + 0.15);

        const gain = _ctx.createGain();
        gain.gain.setValueAtTime(0.12, _ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, _ctx.currentTime + 0.18);

        osc.connect(gain).connect(_sfxGain);
        osc.start();
        osc.stop(_ctx.currentTime + 0.18);
    }

    // ─── LOOPING SOUNDS ───

    function startLoop(name) {
        if (!_sfxEnabled || !_ctx || !_initialized) return;
        if (_activeLoops[name]) return; // Already playing

        if (name === 'engine') {
            const osc1 = _ctx.createOscillator();
            osc1.type = 'sawtooth';
            osc1.frequency.value = 55; // Deep base rumble

            const osc2 = _ctx.createOscillator();
            osc2.type = 'triangle';
            osc2.frequency.value = 110; // Rich mid rumble

            const filter = _ctx.createBiquadFilter();
            filter.type = 'lowpass';
            filter.frequency.value = 350; // Audible cutoff

            const engineGain = _ctx.createGain();
            engineGain.gain.value = 0.12; // Louder base volume

            // Rhythmic LFO for cylinder strokes (chugging)
            const lfo = _ctx.createOscillator();
            lfo.type = 'sine';
            lfo.frequency.value = 6; // 6 Hz idle chug

            const lfoGain = _ctx.createGain();
            lfoGain.gain.value = 0.05; // Modulates volume dynamically

            // Connect oscillators to filter
            osc1.connect(filter);
            osc2.connect(filter);

            // Connect LFO modulator to engineGain.gain
            lfo.connect(lfoGain).connect(engineGain.gain);

            filter.connect(engineGain).connect(_sfxGain);

            osc1.start();
            osc2.start();
            lfo.start();

            _activeLoops[name] = { 
                nodes: [osc1, osc2, lfo], 
                gain: engineGain,
                osc1: osc1,
                osc2: osc2,
                filter: filter,
                lfo: lfo,
                lfoGain: lfoGain
            };
        }

        if (name === 'wind') {
            const buffer = _createBrownNoiseBuffer(2);
            if (!buffer) return;
            const source = _ctx.createBufferSource();
            source.buffer = buffer;
            source.loop = true;

            const filter = _ctx.createBiquadFilter();
            filter.type = 'bandpass';
            filter.frequency.value = 600;
            filter.Q.value = 0.5;

            const gain = _ctx.createGain();
            gain.gain.value = 0.06;

            source.connect(filter).connect(gain).connect(_sfxGain);
            source.start();

            _activeLoops[name] = { nodes: [source], gain };
        }
    }

    function stopLoop(name, immediate = false) {
        const loop = _activeLoops[name];
        if (!loop) return;

        if (immediate) {
            if (loop.gain) {
                loop.gain.gain.setValueAtTime(0, _ctx.currentTime);
            }
            for (const node of loop.nodes) {
                try { node.stop(); } catch(e) {}
            }
            delete _activeLoops[name];
            return;
        }

        // Fade out
        if (loop.gain) {
            loop.gain.gain.setValueAtTime(loop.gain.gain.value, _ctx.currentTime);
            loop.gain.gain.exponentialRampToValueAtTime(0.001, _ctx.currentTime + 0.2);
        }

        setTimeout(() => {
            for (const node of loop.nodes) {
                try { node.stop(); } catch(e) {}
            }
        }, 250);

        delete _activeLoops[name];
    }

    function stopAllLoops(immediate = false) {
        for (const name of Object.keys(_activeLoops)) {
            stopLoop(name, immediate);
        }
    }

    function updateEngineSound(speed) {
        if (!_sfxEnabled || !_ctx || !_initialized) return;
        const loop = _activeLoops['engine'];
        if (!loop || !loop.osc1 || !loop.osc2 || !loop.filter || !loop.lfo || !loop.lfoGain) return;

        // Map speed (typically 0 to 20+) to a target frequency, filter cutoff, and LFO speed
        const normalizedSpeed = Math.min(1.0, speed / 22.0); // scale speed to 0-1
        
        // Base frequency range: 45Hz (idle) to 120Hz (max speed) - slower and beefier rumble
        const targetFreq1 = 45 + normalizedSpeed * 75;
        const targetFreq2 = targetFreq1 * 2;
        
        // Filter frequency range: 300Hz (idle) to 600Hz (max speed) - very clear and audible
        const targetFilterFreq = 300 + normalizedSpeed * 300;
        
        // LFO Chug Speed: 5.5Hz (idle chug) to 14Hz (running speed) - "blrrr...blrrr" chug rhythm
        const targetLfoFreq = 5.5 + normalizedSpeed * 8.5;
        
        // Base engine volume: 0.10 (idle) to 0.16 (speed) - louder
        const targetVolume = 0.10 + normalizedSpeed * 0.06;
        // Keep LFO modulation depth proportional
        const targetLfoDepth = targetVolume * 0.45; 

        const now = _ctx.currentTime;
        
        // Smoothly ramp to the target values
        loop.osc1.frequency.setTargetAtTime(targetFreq1, now, 0.06);
        loop.osc2.frequency.setTargetAtTime(targetFreq2, now, 0.06);
        loop.filter.frequency.setTargetAtTime(targetFilterFreq, now, 0.06);
        loop.lfo.frequency.setTargetAtTime(targetLfoFreq, now, 0.06);
        loop.gain.gain.setTargetAtTime(targetVolume, now, 0.06);
        loop.lfoGain.gain.setTargetAtTime(targetLfoDepth, now, 0.06);
    }

    // ─── MUSIC (Simple procedural ambient) ───

    let _musicOscillators = [];

    function playMusic(track) {
        if (!_musicEnabled || !_ctx || !_initialized) return;
        stopMusic();

        // Simple ambient pad per world
        const chords = {
            notebook:   [261.63, 329.63, 392.00],  // C major
            blackboard: [293.66, 369.99, 440.00],   // D major
            blueprint:  [329.63, 415.30, 493.88],   // E major
            watercolor: [349.23, 440.00, 523.25],   // F major
            neon:       [392.00, 493.88, 587.33],   // G major
            sketchbook: [440.00, 554.37, 659.25]    // A major
        };

        const notes = chords[track] || chords.notebook;

        for (const freq of notes) {
            const osc = _ctx.createOscillator();
            osc.type = 'sine';
            osc.frequency.value = freq;

            const gain = _ctx.createGain();
            gain.gain.setValueAtTime(0, _ctx.currentTime);
            gain.gain.linearRampToValueAtTime(0.03, _ctx.currentTime + 1);

            // Slow LFO for gentle volume swell
            const lfo = _ctx.createOscillator();
            lfo.frequency.value = 0.15 + Math.random() * 0.1;
            const lfoGain = _ctx.createGain();
            lfoGain.gain.value = 0.01;
            lfo.connect(lfoGain).connect(gain.gain);
            lfo.start();

            osc.connect(gain).connect(_musicGain);
            osc.start();

            _musicOscillators.push({ osc, gain, lfo });
        }
    }

    function stopMusic() {
        for (const { osc, gain, lfo } of _musicOscillators) {
            try {
                gain.gain.setValueAtTime(gain.gain.value, _ctx?.currentTime || 0);
                gain.gain.exponentialRampToValueAtTime(0.001, (_ctx?.currentTime || 0) + 0.5);
                setTimeout(() => {
                    try { osc.stop(); } catch(e) {}
                    try { lfo.stop(); } catch(e) {}
                }, 600);
            } catch(e) {}
        }
        _musicOscillators = [];
    }

    function setMusicEnabled(enabled) {
        _musicEnabled = enabled;
        if (!enabled) stopMusic();
    }

    function setSfxEnabled(enabled) {
        _sfxEnabled = enabled;
        if (!enabled) stopAllLoops();
    }

    return {
        init, playSound, playMusic, stopMusic,
        startLoop, stopLoop, stopAllLoops,
        updateEngineSound,
        setMusicEnabled, setSfxEnabled
    };
})();
