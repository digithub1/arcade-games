/**
 * INKWAY — Storage Manager
 * ========================
 * Handles all save/load via localStorage.
 * Provides a clean API for game state persistence.
 */

window.INKWAY = window.INKWAY || {};

INKWAY.Storage = (function () {
    'use strict';

    const STORAGE_KEY = 'inkway_save';
    const STORAGE_VERSION = '2.0';

    /** Default save data for new players. */
    function getDefaultSave() {
        return {
            version: STORAGE_VERSION,
            stars: {},
            bestInk: {},
            bestTime: {},
            totalStars: 0,
            unlockedVehicles: ['classic'],
            activeVehicle: 'classic',
            activeSkin: 'default',
            skins: ['default'],
            settings: {
                music: true,
                sfx: true,
                haptic: true
            },
            daily: {
                lastDate: null,
                attempted: false,
                stars: 0
            },
            sandbox: [],
            achievements: {},
            hintsUsedToday: 0,
            lastHintDate: null,
            levelsCompleted: 0,
            worldsCompleted: []
        };
    }

    let _data = null;

    /** Load save data from localStorage (or create fresh). */
    function load() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (raw) {
                const parsed = JSON.parse(raw);
                if (parsed.version === STORAGE_VERSION) {
                    _data = Object.assign(getDefaultSave(), parsed);
                    _recalcTotalStars();
                    return _data;
                }
                // Version mismatch — migrate or reset
                console.warn('[Storage] Version mismatch, resetting save data.');
            }
        } catch (e) {
            console.error('[Storage] Failed to load:', e);
        }
        _data = getDefaultSave();
        save();
        return _data;
    }

    /** Persist current save data to localStorage. */
    function save() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(_data));
        } catch (e) {
            console.error('[Storage] Failed to save:', e);
        }
    }

    /** Get the current save data (read-only reference). */
    function getData() {
        if (!_data) load();
        return _data;
    }

    // ─── STARS ───

    function getStars(levelId) {
        return _data.stars[levelId] || 0;
    }

    function setStars(levelId, stars) {
        const prev = _data.stars[levelId] || 0;
        if (stars > prev) {
            _data.stars[levelId] = stars;
            _recalcTotalStars();
            save();
            return stars - prev; // new stars earned
        }
        return 0;
    }

    function getTotalStars() {
        if (!_data) load();
        return _data.totalStars;
    }

    function _recalcTotalStars() {
        _data.totalStars = Object.values(_data.stars).reduce((sum, s) => sum + s, 0);
    }

    // ─── BEST SCORES ───

    function getBestInk(levelId) {
        return _data.bestInk[levelId] || null;
    }

    function setBestInk(levelId, inkPercent) {
        const prev = _data.bestInk[levelId];
        if (prev === undefined || inkPercent < prev) {
            _data.bestInk[levelId] = inkPercent;
            save();
            return true;
        }
        return false;
    }

    function getBestTime(levelId) {
        return _data.bestTime[levelId] || null;
    }

    function setBestTime(levelId, time) {
        const prev = _data.bestTime[levelId];
        if (prev === undefined || time < prev) {
            _data.bestTime[levelId] = time;
            save();
            return true;
        }
        return false;
    }

    // ─── COINS ───

    function getCoins() {
        return 0;
    }

    function addCoins(amount) {
        return 0;
    }

    function spendCoins(amount) {
        return true;
    }

    // ─── VEHICLES ───

    function isVehicleUnlocked(vehicleId) {
        return _data.unlockedVehicles.includes(vehicleId);
    }

    function unlockVehicle(vehicleId) {
        if (!_data.unlockedVehicles.includes(vehicleId)) {
            _data.unlockedVehicles.push(vehicleId);
            save();
        }
    }

    function setActiveVehicle(vehicleId) {
        _data.activeVehicle = vehicleId;
        save();
    }

    function getActiveVehicle() {
        return _data.activeVehicle;
    }

    // ─── SETTINGS ───

    function getSettings() {
        return _data.settings;
    }

    function setSetting(key, value) {
        _data.settings[key] = value;
        save();
    }

    // ─── WORLD PROGRESS ───

    function isWorldUnlocked(worldId) {
        const unlockMap = INKWAY_CONFIG.WORLD_UNLOCK || {};
        const required = unlockMap[worldId] || 0;
        return getTotalStars() >= required;
    }

    function isLevelUnlocked(levelId) {
        // First level is always unlocked
        if (levelId === '1-1' || levelId === '1') return true;

        if (levelId.includes('-')) {
            // Parse world-level
            const [worldStr, levelStr] = levelId.split('-');
            const worldNum = parseInt(worldStr);
            const levelNum = parseInt(levelStr);

            // Check world unlock
            if (!isWorldUnlocked(worldNum)) return false;

            // First level of a world is unlocked if world is unlocked
            if (levelNum === 1) return true;

            // Previous level must be completed
            const prevLevel = `${worldNum}-${levelNum - 1}`;
            return getStars(prevLevel) > 0;
        } else {
            // Simple sequential levels: 1, 2, 3, ...
            const levelNum = parseInt(levelId);
            if (isNaN(levelNum)) return false;
            if (levelNum === 1) return true;

            // Previous level must be completed
            const prevLevel = `${levelNum - 1}`;
            return getStars(prevLevel) > 0;
        }
    }

    function isLevelCompleted(levelId) {
        return getStars(levelId) > 0;
    }

    // ─── DAILY CHALLENGE ───

    function getDailyData() {
        return _data.daily;
    }

    function setDailyData(data) {
        Object.assign(_data.daily, data);
        save();
    }

    // ─── HINTS ───

    function getHintsRemaining() {
        return 999;
    }

    function useHint() {
        return true;
    }

    // ─── SANDBOX ───

    function saveSandbox(slotIndex, data) {
        while (_data.sandbox.length <= slotIndex) _data.sandbox.push(null);
        _data.sandbox[slotIndex] = data;
        save();
    }

    function loadSandbox(slotIndex) {
        return _data.sandbox[slotIndex] || null;
    }

    // ─── ACHIEVEMENTS ───

    function isAchievementUnlocked(id) {
        return !!_data.achievements[id];
    }

    function unlockAchievement(id) {
        if (!_data.achievements[id]) {
            _data.achievements[id] = Date.now();
            save();
            return true;
        }
        return false;
    }

    // ─── RESET ───

    function resetAll() {
        _data = getDefaultSave();
        save();
    }

    return {
        load, save, getData,
        getStars, setStars, getTotalStars,
        getBestInk, setBestInk,
        getBestTime, setBestTime,
        getCoins, addCoins, spendCoins,
        isVehicleUnlocked, unlockVehicle,
        setActiveVehicle, getActiveVehicle,
        getSettings, setSetting,
        isWorldUnlocked, isLevelUnlocked, isLevelCompleted,
        getDailyData, setDailyData,
        getHintsRemaining, useHint,
        saveSandbox, loadSandbox,
        isAchievementUnlocked, unlockAchievement,
        resetAll
    };
})();
