/* ============================
   Arrow Escape - Audio Manager
   ============================ */

class AudioManager {
    constructor() {
        this.ctx = null;
        this.soundEnabled = true;
        this.musicEnabled = true;
        this.musicVolume = 0.3;
        this.musicElement = null;
        this._loadSettings();
    }

    _loadSettings() {
        try {
            var sfx = localStorage.getItem('arrowEscape_sfx');
            if (sfx !== null) this.soundEnabled = sfx === 'true';

            var music = localStorage.getItem('arrowEscape_music');
            if (music !== null) this.musicEnabled = music === 'true';

            var vol = localStorage.getItem('arrowEscape_musicVol');
            if (vol !== null) this.musicVolume = parseFloat(vol);
        } catch (e) { /* ignore */ }
    }

    _saveSettings() {
        try {
            localStorage.setItem('arrowEscape_sfx', String(this.soundEnabled));
            localStorage.setItem('arrowEscape_music', String(this.musicEnabled));
            localStorage.setItem('arrowEscape_musicVol', String(this.musicVolume));
        } catch (e) { /* ignore */ }
    }

    setSfxEnabled(enabled) {
        this.soundEnabled = enabled;
        this._saveSettings();
    }

    setMusicEnabled(enabled) {
        this.musicEnabled = enabled;
        if (enabled) {
            this.startMusic();
        } else {
            this.stopMusic();
        }
        this._saveSettings();
    }

    setMusicVolume(val) {
        this.musicVolume = Math.max(0, Math.min(1, val));
        if (this.musicElement) {
            this.musicElement.volume = this.musicVolume;
        }
        this._saveSettings();
    }

    _ensureContext() {
        if (!this.ctx) {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    // ---- Background Music ----
    startMusic() {
        if (!this.musicEnabled) return;

        if (!this.musicElement) {
            this.musicElement = new Audio(GameConfig.bgMusicFile);
            this.musicElement.loop = true;
        }

        this.musicElement.volume = this.musicVolume;
        this.musicElement.play().catch(() => {});
    }

    stopMusic() {
        if (this.musicElement) {
            this.musicElement.pause();
            this.musicElement.currentTime = 0;
        }
    }

    toggleMusic(enabled) {
        this.setMusicEnabled(enabled);
    }

    // ---- Procedural Sounds ----

    playClick() {
        if (!this.soundEnabled) return;
        this._ensureContext();

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.frequency.setValueAtTime(800, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1200, this.ctx.currentTime + 0.05);

        gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.1);

        osc.start();
        osc.stop(this.ctx.currentTime + 0.1);
    }

    playEscape() {
        if (!this.soundEnabled) return;
        this._ensureContext();

        const t = this.ctx.currentTime;

        const osc1 = this.ctx.createOscillator();
        const gain1 = this.ctx.createGain();
        osc1.type = 'sawtooth';
        osc1.connect(gain1);
        gain1.connect(this.ctx.destination);
        osc1.frequency.setValueAtTime(200, t);
        osc1.frequency.exponentialRampToValueAtTime(1500, t + 0.3);
        gain1.gain.setValueAtTime(0.12, t);
        gain1.gain.exponentialRampToValueAtTime(0.001, t + 0.35);
        osc1.start(t);
        osc1.stop(t + 0.35);

        const osc2 = this.ctx.createOscillator();
        const gain2 = this.ctx.createGain();
        osc2.type = 'sine';
        osc2.connect(gain2);
        gain2.connect(this.ctx.destination);
        osc2.frequency.setValueAtTime(1200, t + 0.05);
        osc2.frequency.exponentialRampToValueAtTime(2400, t + 0.2);
        gain2.gain.setValueAtTime(0.08, t + 0.05);
        gain2.gain.exponentialRampToValueAtTime(0.001, t + 0.3);
        osc2.start(t + 0.05);
        osc2.stop(t + 0.3);
    }

    playWrongTap() {
        if (!this.soundEnabled) return;
        this._ensureContext();

        const t = this.ctx.currentTime;

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'square';
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.frequency.setValueAtTime(150, t);
        osc.frequency.exponentialRampToValueAtTime(80, t + 0.2);
        gain.gain.setValueAtTime(0.15, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.3);
        osc.start(t);
        osc.stop(t + 0.3);

        const osc2 = this.ctx.createOscillator();
        const gain2 = this.ctx.createGain();
        osc2.type = 'sawtooth';
        osc2.connect(gain2);
        gain2.connect(this.ctx.destination);
        osc2.frequency.setValueAtTime(180, t);
        osc2.frequency.exponentialRampToValueAtTime(60, t + 0.25);
        gain2.gain.setValueAtTime(0.1, t);
        gain2.gain.exponentialRampToValueAtTime(0.001, t + 0.25);
        osc2.start(t);
        osc2.stop(t + 0.25);
    }

    playWin() {
        if (!this.soundEnabled) return;
        this._ensureContext();

        const t = this.ctx.currentTime;
        const notes = [523, 659, 784, 1047];

        notes.forEach((freq, i) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.connect(gain);
            gain.connect(this.ctx.destination);

            const start = t + i * 0.12;
            osc.frequency.setValueAtTime(freq, start);
            gain.gain.setValueAtTime(0, start);
            gain.gain.linearRampToValueAtTime(0.15, start + 0.03);
            gain.gain.exponentialRampToValueAtTime(0.001, start + 0.5);

            osc.start(start);
            osc.stop(start + 0.5);
        });
    }

    playFail() {
        if (!this.soundEnabled) return;
        this._ensureContext();

        const t = this.ctx.currentTime;
        const notes = [400, 350, 300];

        notes.forEach((freq, i) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.connect(gain);
            gain.connect(this.ctx.destination);

            const start = t + i * 0.2;
            osc.frequency.setValueAtTime(freq, start);
            gain.gain.setValueAtTime(0, start);
            gain.gain.linearRampToValueAtTime(0.12, start + 0.03);
            gain.gain.exponentialRampToValueAtTime(0.001, start + 0.4);

            osc.start(start);
            osc.stop(start + 0.4);
        });
    }
}
