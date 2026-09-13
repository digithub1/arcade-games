(function () {
  "use strict";

  class ChicAudioManager {
    constructor(paths) {
      this.enabled = true;
      this.unlocked = false;
      this.suspended = false;
      this.sounds = {};
      this.activeInstances = new Set();
      Object.entries(paths).forEach(([name, src]) => {
        const audio = new Audio(src);
        audio.preload = "auto";
        audio.loop = name === "music";
        audio.volume = name === "music" ? 0.34 : 0.72;
        this.sounds[name] = audio;
      });
    }

    setEnabled(value) {
      this.enabled = !!value;
      if (!this.enabled) {
        Object.values(this.sounds).forEach((audio) => audio.pause());
      } else if (this.unlocked && !this.suspended) {
        this.playMusic();
      }
    }

    setSuspended(value) {
      this.suspended = !!value;
      if (this.suspended) this.pauseAll();
      else this.resume();
    }

    unlock() {
      this.unlocked = true;
      if (this.enabled && !this.suspended) this.playMusic();
    }

    playMusic() {
      const music = this.sounds.music;
      if (!music || !this.enabled || !this.unlocked || this.suspended) return;
      music.play().catch(() => {});
    }

    play(name, volumeScale = 1) {
      if (!this.enabled || !this.unlocked || this.suspended || name === "music") return;
      const source = this.sounds[name];
      if (!source) return;
      const instance = source.cloneNode();
      instance.volume = Math.max(0, Math.min(1, source.volume * volumeScale));
      const cleanup = () => this.activeInstances.delete(instance);
      instance.addEventListener("ended", cleanup, { once: true });
      instance.addEventListener("error", cleanup, { once: true });
      this.activeInstances.add(instance);
      instance.play().catch(cleanup);
    }

    pauseAll() {
      Object.values(this.sounds).forEach((audio) => audio.pause());
      this.activeInstances.forEach((audio) => audio.pause());
      this.activeInstances.clear();
    }

    resume() {
      if (this.enabled && this.unlocked && !this.suspended) this.playMusic();
    }
  }

  window.ChicAudioManager = ChicAudioManager;
})();
