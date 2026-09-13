/**
 * Local persistence — per-level best time, best stars, completion, and total plays.
 * Fails safe: private mode / disabled storage → in-memory only.
 */
import { STORAGE_KEY } from './config.js';

let mem = null;

function read() {
  if (mem) return mem;
  try {
    mem = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}') || {};
  } catch (_) { mem = {}; }
  if (!mem.levels) mem.levels = {};
  if (!Number.isFinite(mem.playCount) || mem.playCount < 0) mem.playCount = 0;
  if (!Number.isFinite(mem.marathonBest) || mem.marathonBest < 0) mem.marathonBest = 0;
  if (!mem.tutorial || typeof mem.tutorial !== 'object') mem.tutorial = {};
  return mem;
}

function write() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(mem)); }
  catch (_) { /* in-memory only */ }
}

export const Storage = {
  /** @returns {{bestTime:number|null, bestStars:number, completed:boolean, noDamage:boolean, tries:number}} */
  getLevel(id) {
    const s = read().levels[id];
    return s
      ? {
        bestTime: s.bestTime ?? null, bestStars: s.bestStars ?? 0, completed: !!s.completed,
        noDamage: !!s.noDamage, tries: s.tries | 0,
      }
      : { bestTime: null, bestStars: 0, completed: false, noDamage: false, tries: 0 };
  },

  /**
   * Bump a level's attempt counter — once per run that actually ends (win or crash), same
   * cadence as the global playCount. Independent of win/loss so it reflects real attempts.
   */
  recordLevelAttempt(id) {
    const data = read();
    const prev = data.levels[id] || { bestTime: null, bestStars: 0, completed: false, noDamage: false, tries: 0 };
    data.levels[id] = { ...prev, tries: (prev.tries | 0) + 1 };
    write();
    return data.levels[id].tries;
  },

  /** Record a successful level finish; keeps the best of each metric. Returns the merged record. */
  recordRun(id, { time, stars, noDamage }) {
    const data = read();
    const prev = data.levels[id] || { bestTime: null, bestStars: 0, completed: false, noDamage: false, tries: 0 };
    const next = {
      completed: true,
      bestTime: prev.bestTime == null ? time : Math.min(prev.bestTime, time),
      bestStars: Math.max(prev.bestStars || 0, stars || 0),
      noDamage: prev.noDamage || !!noDamage,
      tries: prev.tries | 0,
    };
    data.levels[id] = next;
    write();
    return next;
  },

  /**
   * Total finished attempts (wins + crashes). Mid-run exits via Pause → Menu do not count.
   * @returns {number}
   */
  playCount() {
    return read().playCount | 0;
  },

  /** Bump the global play counter once when a run ends in a win or a crash. */
  recordPlay() {
    const data = read();
    data.playCount = (data.playCount | 0) + 1;
    write();
    return data.playCount;
  },

  /** Record a Marathon attempt's distance (meters); keeps the best. Returns the best. */
  recordMarathon(meters) {
    const data = read();
    data.marathonBest = Math.max(data.marathonBest || 0, meters || 0);
    write();
    return data.marathonBest;
  },

  getMarathonBest() {
    return read().marathonBest || 0;
  },

  /** Versioned onboarding progress. A copy is returned so callers cannot mutate storage. */
  getTutorial() {
    const t = read().tutorial || {};
    return {
      version: Number.isFinite(t.version) ? t.version : 0,
      steering: !!t.steering,
      release: !!t.release,
      hazards: !!t.hazards,
      level1Complete: !!t.level1Complete,
      infiniteSeen: !!t.infiniteSeen,
    };
  },

  updateTutorial(patch) {
    const data = read();
    data.tutorial = { ...(data.tutorial || {}), ...(patch || {}) };
    write();
    return this.getTutorial();
  },

  totalStars() {
    const lv = read().levels;
    return Object.keys(lv).reduce((sum, k) => sum + (lv[k].bestStars || 0), 0);
  },

  isCompleted(id) { return !!read().levels[id]?.completed; },
};
