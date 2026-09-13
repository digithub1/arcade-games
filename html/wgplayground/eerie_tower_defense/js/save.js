




const SaveManager = {
    
    SAVE_VERSION: 4,
    
    
    KEYS: {
        VERSION: 'td_save_version',
        SAVE_TIMESTAMP: 'td_save_timestamp',
        CRYSTALS: 'td_crystals',
        MOONSEALS: 'td_moonseals',
        BEST_WAVE: 'td_best_wave',
        UPGRADES: 'td_upgrades',
        SETTINGS: 'td_settings',
        GAME_STATS: 'td_game_stats',
        TOTAL_KILLS: 'td_total_kills',
        TOTAL_GAMES: 'td_total_games',
        ARROWS: 'td_arrows',
        CARDS: 'td_cards',
        ALTAR_CARDS: 'td_altar_cards',
        SEEDS_NEXT_GAME: 'td_seeds_next_game',
        UNLOCKED_GARDENS: 'td_unlocked_gardens',
        PERMANENT_UPGRADES: 'td_permanent_upgrades',
        DAY_SYSTEM: 'td_day_system',
        ITEMS: 'td_items',
        TALENT_TREE: 'td_talent_tree',
        STAGE_DATA: 'td_stage_data',
        SEASON_STATE: 'td_season_state',
        PACT_META: 'td_pact_meta',
        COMPENSATION_STATE: 'td_compensation_state',
        LAST_AUTH_PLAYER_ID: 'td_last_auth_player_id',
        SEEN_RELEASE_ANNOUNCEMENT: 'td_seen_release_announcement',
        FEEDBACK_PROMPT: 'td_feedback_prompt',
        PROFILE_PRIVATE: 'td_profile_private'
    },

    DEFAULT_STAGE_DATA: {
        selectedStage: 1,
        unlockedStage: 1,
        bestWaveByStage: {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0
        }
    },

    STAGE_COUNT: 5,
    STAGE_UNLOCK_WAVE_TARGET: 50,

    DEFAULT_SETTINGS: {
        disableScreenShake: false,
        disableHeavyEffects: false
    },

    DEFAULT_FEEDBACK_PROMPT: {
        disabled: false,
        submitted: false,
        shownCount: 0,
        lastShownGameCount: 0
    },

    DEFAULT_PACT_META: {
        seen: {},
        accepted: {},
        acceptedTotal: 0,
        lastAcceptedAt: 0
    },

    DEFAULT_COMPENSATION_STATE: {
        claimedIds: []
    },

    DEFAULT_PROFILE_PRIVATE: {
        ownedFrames: ['frame_default'],
        ownedBackgrounds: ['bg_default'],
        equippedFrameId: 'frame_default',
        equippedBackgroundId: 'bg_default'
    },

    
     DEFAULT_UPGRADES: {
         health: { level: 1, baseCost: 10 },
         gold: { level: 1, baseCost: 15 },
         damage: { level: 1, baseCost: 20 },
         speed: { level: 1, baseCost: 25 },
         crystalFocus: { level: 0, baseCost: 50 },
         'garden-2': { level: 0, baseCost: 500 },
         'garden-3': { level: 0, baseCost: 500 }
     },

    
    DEFAULT_PERMANENT_UPGRADES: {
        
        permDamage: 0,
        permAttackSpeed: 0,
        permRange: 0,
        permMultishotChance: 0,
        permCritChance: 0,
        permCritMultiplier: 0,
        
        permMaxHealth: 0,
        permHealthRegen: 0,
        permDefense: 0,
        permVampirismChance: 0,
        permVampirismAmount: 0,
        permThornsDamage: 0,
        
        permWeeklyGoldBonus: 0,
        permKillGoldBonus: 0,
        permWeeklyCrystalBonus: 0,
        permGameSpeed: 0,
        permTraderChance: 0,
        permUnlockGarden: 0
    },

    


    get(key, defaultValue = 0) {
        try {
            const value = localStorage.getItem(key);
            return value ? JSON.parse(value) : defaultValue;
        } catch (e) {
            console.error('Error reading from localStorage:', e);
            return defaultValue;
        }
    },

    


    set(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));

            
            
            if (key !== this.KEYS.SAVE_TIMESTAMP) {
                localStorage.setItem(this.KEYS.SAVE_TIMESTAMP, JSON.stringify(Date.now()));
            }

            
            if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function') {
                let eventObj = null;

                if (typeof CustomEvent === 'function') {
                    eventObj = new CustomEvent('save:changed', {
                        detail: { key, value }
                    });
                } else if (typeof document !== 'undefined' && typeof document.createEvent === 'function') {
                    eventObj = document.createEvent('CustomEvent');
                    eventObj.initCustomEvent('save:changed', false, false, { key, value });
                }

                if (eventObj) {
                    window.dispatchEvent(eventObj);
                }
            }
        } catch (e) {
            console.error('Error writing to localStorage:', e);
        }
    },

    


     getCrystals() {
         return this.get(this.KEYS.CRYSTALS, 0);
     },

     getMoonSeals() {
         return this.get(this.KEYS.MOONSEALS, 0);
     },

     


     setCrystals(amount) {
         this.set(this.KEYS.CRYSTALS, Math.max(0, amount));
     },

     setMoonSeals(amount) {
         this.set(this.KEYS.MOONSEALS, Math.max(0, amount));
     },

     



     addCrystals(amount) {
         if (!Number.isFinite(amount) || amount <= 0) {
             console.warn('addCrystals: некорректное значение', amount);
             return;
         }
         const current = this.getCrystals();
         this.set(this.KEYS.CRYSTALS, Math.max(0, current + amount));
     },

     addMoonSeals(amount) {
         if (!Number.isFinite(amount) || amount <= 0) {
             console.warn('addMoonSeals: некорректное значение', amount);
             return;
         }
         const current = this.getMoonSeals();
         this.set(this.KEYS.MOONSEALS, Math.max(0, current + amount));
     },

     



     spendCrystals(amount) {
         if (!Number.isFinite(amount) || amount <= 0) {
             console.warn('spendCrystals: некорректное значение', amount);
             return false;
         }
         const current = this.getCrystals();
         if (current >= amount) {
             this.set(this.KEYS.CRYSTALS, current - amount);
             return true;
         }
         return false;
     },

     spendMoonSeals(amount) {
         if (!Number.isFinite(amount) || amount <= 0) {
             console.warn('spendMoonSeals: некорректное значение', amount);
             return false;
         }
         const current = this.getMoonSeals();
         if (current >= amount) {
             this.set(this.KEYS.MOONSEALS, current - amount);
             return true;
         }
         return false;
     },

    


    getBestWave() {
        return this.get(this.KEYS.BEST_WAVE, 0);
    },

    


    updateBestWave(wave) {
        const current = this.getBestWave();
        if (wave > current) {
            this.set(this.KEYS.BEST_WAVE, wave);
            return true;
        }
        return false;
    },

    


    getStageCount() {
        const configured = (typeof BalanceRuntime !== 'undefined' && BalanceRuntime && typeof BalanceRuntime.get === 'function')
            ? Number(BalanceRuntime.get('stages.maxStage', this.STAGE_COUNT))
            : this.STAGE_COUNT;
        if (!Number.isFinite(configured)) {
            return this.STAGE_COUNT;
        }
        return Math.max(1, Math.floor(configured));
    },

    getStageUnlockWaveTarget() {
        const configured = (typeof BalanceRuntime !== 'undefined' && BalanceRuntime && typeof BalanceRuntime.get === 'function')
            ? Number(BalanceRuntime.get('stages.unlockWaveTarget', this.STAGE_UNLOCK_WAVE_TARGET))
            : this.STAGE_UNLOCK_WAVE_TARGET;
        if (!Number.isFinite(configured)) {
            return this.STAGE_UNLOCK_WAVE_TARGET;
        }
        return Math.max(1, Math.floor(configured));
    },

    normalizeStageNumber(stage) {
        const maxStage = this.getStageCount();
        if (!Number.isFinite(stage)) {
            return 1;
        }
        return Math.max(1, Math.min(maxStage, Math.floor(stage)));
    },

    getDefaultStageBestWaveMap() {
        const maxStage = this.getStageCount();
        const bestWaveByStage = {};
        for (let stage = 1; stage <= maxStage; stage++) {
            bestWaveByStage[stage] = 0;
        }
        return bestWaveByStage;
    },

    normalizeStageData(data) {
        const raw = (data && typeof data === 'object') ? data : this.DEFAULT_STAGE_DATA;
        const maxStage = this.getStageCount();

        let unlockedStage = this.normalizeStageNumber(raw.unlockedStage || 1);
        let selectedStage = this.normalizeStageNumber(raw.selectedStage || 1);
        if (selectedStage > unlockedStage) {
            selectedStage = unlockedStage;
        }

        const defaults = this.getDefaultStageBestWaveMap();
        const savedBest = (raw.bestWaveByStage && typeof raw.bestWaveByStage === 'object')
            ? raw.bestWaveByStage
            : {};
        const bestWaveByStage = {};
        for (let stage = 1; stage <= maxStage; stage++) {
            const rawWave = Number(savedBest[stage]);
            bestWaveByStage[stage] = Number.isFinite(rawWave)
                ? Math.max(0, Math.floor(rawWave))
                : defaults[stage];
        }

        if (unlockedStage > maxStage) {
            unlockedStage = maxStage;
        }

        return {
            selectedStage,
            unlockedStage,
            bestWaveByStage
        };
    },

    getStageData() {
        const saved = this.get(this.KEYS.STAGE_DATA, this.DEFAULT_STAGE_DATA);
        return this.normalizeStageData(saved);
    },

    


    setStageData(data) {
        const normalized = this.normalizeStageData(data);
        this.set(this.KEYS.STAGE_DATA, normalized);
    },

    getUnlockedStage() {
        return this.getStageData().unlockedStage;
    },

    getSelectedStage() {
        return this.getStageData().selectedStage;
    },

    setSelectedStage(stage) {
        const data = this.getStageData();
        const normalizedStage = this.normalizeStageNumber(stage);
        data.selectedStage = Math.max(1, Math.min(normalizedStage, data.unlockedStage));
        this.setStageData(data);
    },

    setUnlockedStage(stage) {
        const data = this.getStageData();
        const normalizedStage = this.normalizeStageNumber(stage);
        data.unlockedStage = Math.max(data.unlockedStage, normalizedStage);
        if (data.selectedStage > data.unlockedStage) {
            data.selectedStage = data.unlockedStage;
        }
        this.setStageData(data);
    },

    getStageBestWave(stage) {
        const normalizedStage = this.normalizeStageNumber(stage);
        const data = this.getStageData();
        return Math.max(0, Math.floor(data.bestWaveByStage[normalizedStage] || 0));
    },

    updateStageProgress(stage, reachedWave) {
        const normalizedStage = this.normalizeStageNumber(stage);
        const normalizedWave = Number.isFinite(reachedWave) ? Math.max(0, Math.floor(reachedWave)) : 0;
        const unlockWaveTarget = this.getStageUnlockWaveTarget();
        const maxStage = this.getStageCount();
        const data = this.getStageData();

        let changed = false;
        let isNewStageBest = false;
        let unlockedNewStage = false;

        const currentBest = Math.max(0, Math.floor(data.bestWaveByStage[normalizedStage] || 0));
        if (normalizedWave > currentBest) {
            data.bestWaveByStage[normalizedStage] = normalizedWave;
            isNewStageBest = true;
            changed = true;
        }

        const nextStage = normalizedStage + 1;
        if (
            normalizedWave >= unlockWaveTarget &&
            normalizedStage < maxStage &&
            data.unlockedStage < nextStage
        ) {
            data.unlockedStage = nextStage;
            unlockedNewStage = true;
            changed = true;
        }

        if (data.selectedStage > data.unlockedStage) {
            data.selectedStage = data.unlockedStage;
            changed = true;
        }

        if (changed) {
            this.setStageData(data);
        }

        return {
            stage: normalizedStage,
            reachedWave: normalizedWave,
            stageBestWave: Math.max(0, Math.floor(data.bestWaveByStage[normalizedStage] || 0)),
            unlockedStage: data.unlockedStage,
            unlockedNewStage,
            isNewStageBest,
            unlockWaveTarget
        };
    },

    


    getUpgrades() {
        return this.get(this.KEYS.UPGRADES, this.DEFAULT_UPGRADES);
    },

    


     upgrade(type) {
         const upgrades = this.getUpgrades();
         const upgrade = upgrades[type];
         
         if (!upgrade) return false;

         const cost = this.getUpgradeCost(type);
         
         if (this.spendCrystals(cost)) {
             upgrade.level++;
             this.set(this.KEYS.UPGRADES, upgrades);
             
             
             if (type === 'garden-2' || type === 'garden-3') {
                 this.unlockNextGarden();
                 if (typeof Game !== 'undefined' && Game.gardenSystem) {
                     Game.gardenSystem.unlockGarden(this.getUnlockedGardens() - 1, 500);
                 }
             }
             
             return true;
         }
         
         return false;
     },

    


     getUpgradeCost(type) {
         const upgrades = this.getUpgrades();
         const upgrade = upgrades[type];
         
         if (!upgrade) return Infinity;
         
         
         if (type === 'garden-2' || type === 'garden-3') {
             return upgrade.baseCost;
         }
         
         
         const multiplier = type === 'crystalFocus' ? 1.2 : 1.5;
         return Math.floor(upgrade.baseCost * Math.pow(multiplier, upgrade.level - 1));
     },

    


     getUpgradeMultipliers() {
         const upgrades = this.getUpgrades();
         
         return {
             health: 1 + (upgrades.health.level - 1) * 0.5,  
             gold: 1 + (upgrades.gold.level - 1) * 0.1,      
             damage: 1 + (upgrades.damage.level - 1) * 0.2,  
             speed: 1 + (upgrades.speed.level - 1) * 0.1,    
             crystalFocus: upgrades.crystalFocus.level        
         };
     },

    


    getTotalStats() {
        return {
            totalKills: this.get(this.KEYS.TOTAL_KILLS, 0),
            totalGames: this.get(this.KEYS.TOTAL_GAMES, 0),
            bestWave: this.getBestWave()
        };
    },

    



    getTotalKills() {
        return this.get(this.KEYS.TOTAL_KILLS, 0);
    },

    



    getTotalGames() {
        return this.get(this.KEYS.TOTAL_GAMES, 0);
    },

    


    getGameStats() {
        return this.getTotalStats();
    },

    getNormalizedGameHistory() {
        const rawHistory = this.get(this.KEYS.GAME_STATS, []);
        if (Array.isArray(rawHistory)) {
            return rawHistory;
        }

        console.warn('GAME_STATS has legacy non-array format, resetting history storage', rawHistory);
        this.set(this.KEYS.GAME_STATS, []);
        return [];
    },

    


    saveGameStats(stats) {
        const gameHistory = this.getNormalizedGameHistory();
        gameHistory.push({
            date: new Date().toISOString(),
            wave: stats.wave,
            kills: stats.kills,
            gold: stats.totalGold,
            crystals: stats.crystals,
            time: stats.time
        });
        
        
        if (gameHistory.length > 50) {
            gameHistory.shift();
        }
        
        this.set(this.KEYS.GAME_STATS, gameHistory);
        
        
        this.set(this.KEYS.TOTAL_KILLS, this.get(this.KEYS.TOTAL_KILLS, 0) + stats.kills);
        this.set(this.KEYS.TOTAL_GAMES, this.get(this.KEYS.TOTAL_GAMES, 0) + 1);
        
        
        const isNewRecord = this.updateBestWave(stats.wave);
        
        return isNewRecord;
    },

    


    getGameHistory() {
        return this.getNormalizedGameHistory();
    },

    


    getArrows() {
        const defaults = { explosive: 0, heavy: 0, smoke: 0 };
        const saved = this.get(this.KEYS.ARROWS, defaults);
        return { ...defaults, ...saved };
    },

    


    setArrows(arrows) {
        this.set(this.KEYS.ARROWS, arrows);
    },

    


    getCards() {
        return this.get(this.KEYS.CARDS, []);
    },

    


    addCard(card) {
        const cards = this.getCards();
        cards.push(card);
        this.set(this.KEYS.CARDS, cards);
    },

    


    removeCard(cardId) {
        const cards = this.getCards();
        
        const index = cards.findIndex(c => c.instanceId === cardId || c.id === cardId);
        if (index > -1) {
            cards.splice(index, 1);
            this.set(this.KEYS.CARDS, cards);
        }
    },

    


    getAltarCards() {
        return this.get(this.KEYS.ALTAR_CARDS, []);
    },

    


    setAltarCards(cards) {
        this.set(this.KEYS.ALTAR_CARDS, cards);
    },

    


    getSeedsForNextGame() {
        return this.get(this.KEYS.SEEDS_NEXT_GAME, 0);
    },

    



    getSeedsNextGame() {
        return this.getSeedsForNextGame();
    },

    


    addSeedsForNextGame(amount) {
        const current = this.getSeedsForNextGame();
        this.set(this.KEYS.SEEDS_NEXT_GAME, current + amount);
    },

    


    consumeSeedsForNextGame() {
        const seeds = this.getSeedsForNextGame();
        this.set(this.KEYS.SEEDS_NEXT_GAME, 0);
        return seeds;
    },

    


    addArrows(type, amount) {
        const arrows = this.getArrows();
        if (arrows[type] === undefined) {
            arrows[type] = 0;
        }
        arrows[type] += amount;
        this.setArrows(arrows);
    },

    


    getItems() {
        const defaults = { thunderStrike: 0, frenzyPotion: 0 };
        const saved = this.get(this.KEYS.ITEMS, defaults);
        
        return { ...defaults, ...saved };
    },

    


    setItems(items) {
        this.set(this.KEYS.ITEMS, items);
    },

    


    addItem(type, amount) {
        const items = this.getItems();
        
        if (items[type] === undefined) {
            items[type] = 0;
        }
        items[type] += amount;
        this.setItems(items);
        return true;
    },

    


    useItem(type) {
        const items = this.getItems();
        if (items[type] > 0) {
            items[type]--;
            this.setItems(items);
            return true;
        }
        return false;
    },

    getDefaultProfileFrameId() {
        if (typeof ProfileCosmetics !== 'undefined' && ProfileCosmetics && ProfileCosmetics.DEFAULT_FRAME_ID) {
            return ProfileCosmetics.DEFAULT_FRAME_ID;
        }

        return this.DEFAULT_PROFILE_PRIVATE.equippedFrameId;
    },

    getDefaultProfileBackgroundId() {
        if (typeof ProfileCosmetics !== 'undefined' && ProfileCosmetics && ProfileCosmetics.DEFAULT_BACKGROUND_ID) {
            return ProfileCosmetics.DEFAULT_BACKGROUND_ID;
        }

        return this.DEFAULT_PROFILE_PRIVATE.equippedBackgroundId;
    },

    normalizeProfilePrivate(profile) {
        const defaultFrameId = this.getDefaultProfileFrameId();
        const defaultBackgroundId = this.getDefaultProfileBackgroundId();
        const raw = profile && typeof profile === 'object' ? profile : {};

        const sanitizeList = (values, type, fallbackId) => {
            const list = Array.isArray(values) ? values : [];
            const unique = [];

            list.forEach((entry) => {
                if (typeof entry !== 'string') {
                    return;
                }

                const normalized = type === 'frame'
                    ? (typeof ProfileCosmetics !== 'undefined' && ProfileCosmetics && typeof ProfileCosmetics.sanitizeFrameId === 'function'
                        ? ProfileCosmetics.sanitizeFrameId(entry)
                        : entry)
                    : (typeof ProfileCosmetics !== 'undefined' && ProfileCosmetics && typeof ProfileCosmetics.sanitizeBackgroundId === 'function'
                        ? ProfileCosmetics.sanitizeBackgroundId(entry)
                        : entry);

                if (!normalized || unique.includes(normalized)) {
                    return;
                }

                unique.push(normalized);
            });

            if (!unique.includes(fallbackId)) {
                unique.unshift(fallbackId);
            }

            return unique;
        };

        const ownedFrames = sanitizeList(raw.ownedFrames, 'frame', defaultFrameId);
        const ownedBackgrounds = sanitizeList(raw.ownedBackgrounds, 'background', defaultBackgroundId);

        const equippedFrameId = ownedFrames.includes(raw.equippedFrameId)
            ? raw.equippedFrameId
            : defaultFrameId;
        const equippedBackgroundId = ownedBackgrounds.includes(raw.equippedBackgroundId)
            ? raw.equippedBackgroundId
            : defaultBackgroundId;

        return {
            ownedFrames,
            ownedBackgrounds,
            equippedFrameId,
            equippedBackgroundId
        };
    },

    getProfilePrivate() {
        return this.normalizeProfilePrivate(this.get(this.KEYS.PROFILE_PRIVATE, this.DEFAULT_PROFILE_PRIVATE));
    },

    setProfilePrivate(profile) {
        this.set(this.KEYS.PROFILE_PRIVATE, this.normalizeProfilePrivate(profile));
    },

    isProfileCosmeticOwned(type, itemId) {
        const profile = this.getProfilePrivate();
        if (type === 'background') {
            return profile.ownedBackgrounds.includes(itemId);
        }

        return profile.ownedFrames.includes(itemId);
    },

    unlockProfileCosmetic(type, itemId) {
        const profile = this.getProfilePrivate();

        if (type === 'background') {
            if (!profile.ownedBackgrounds.includes(itemId)) {
                profile.ownedBackgrounds.push(itemId);
            }
        } else if (!profile.ownedFrames.includes(itemId)) {
            profile.ownedFrames.push(itemId);
        }

        this.setProfilePrivate(profile);
        return this.getProfilePrivate();
    },

    equipProfileCosmetic(type, itemId) {
        const profile = this.getProfilePrivate();
        if (!this.isProfileCosmeticOwned(type, itemId)) {
            return false;
        }

        if (type === 'background') {
            profile.equippedBackgroundId = itemId;
        } else {
            profile.equippedFrameId = itemId;
        }

        this.setProfilePrivate(profile);
        return true;
    },

    


    reset() {
        
        
        for (let i = localStorage.length - 1; i >= 0; i--) {
            const key = localStorage.key(i);
            if (key && key.startsWith('td_')) {
                localStorage.removeItem(key);
            }
        }
    },

    


    isSoundEnabled() {
        return this.get('td_sound_enabled', true);
    },

    


    getSettings() {
        const saved = this.get(this.KEYS.SETTINGS, {});
        return {
            disableScreenShake: Boolean(saved.disableScreenShake),
            disableHeavyEffects: Boolean(saved.disableHeavyEffects)
        };
    },

    


    setSettings(settings) {
        const merged = {
            ...this.DEFAULT_SETTINGS,
            ...(settings && typeof settings === 'object' ? settings : {})
        };
        this.set(this.KEYS.SETTINGS, {
            disableScreenShake: Boolean(merged.disableScreenShake),
            disableHeavyEffects: Boolean(merged.disableHeavyEffects)
        });
    },

    


    getSetting(key, fallbackValue = false) {
        const settings = this.getSettings();
        if (Object.prototype.hasOwnProperty.call(settings, key)) {
            return settings[key];
        }
        return fallbackValue;
    },

    


    setSetting(key, value) {
        const settings = this.getSettings();
        settings[key] = Boolean(value);
        this.setSettings(settings);
    },

    getFeedbackPromptState() {
        const saved = this.get(this.KEYS.FEEDBACK_PROMPT, this.DEFAULT_FEEDBACK_PROMPT);
        return {
            ...this.DEFAULT_FEEDBACK_PROMPT,
            ...(saved && typeof saved === 'object' ? saved : {})
        };
    },

    setFeedbackPromptState(state) {
        this.set(this.KEYS.FEEDBACK_PROMPT, {
            ...this.DEFAULT_FEEDBACK_PROMPT,
            ...(state && typeof state === 'object' ? state : {})
        });
    },

    patchFeedbackPromptState(patch) {
        const current = this.getFeedbackPromptState();
        this.setFeedbackPromptState({
            ...current,
            ...(patch && typeof patch === 'object' ? patch : {})
        });
    },

    getCompensationState() {
        const saved = this.get(this.KEYS.COMPENSATION_STATE, this.DEFAULT_COMPENSATION_STATE);
        const claimedIds = Array.isArray(saved && saved.claimedIds) ? saved.claimedIds : [];

        return {
            ...this.DEFAULT_COMPENSATION_STATE,
            ...(saved && typeof saved === 'object' ? saved : {}),
            claimedIds: claimedIds.filter((id) => typeof id === 'string' && id)
        };
    },

    setCompensationState(state) {
        const normalized = {
            ...this.DEFAULT_COMPENSATION_STATE,
            ...(state && typeof state === 'object' ? state : {})
        };

        normalized.claimedIds = Array.isArray(normalized.claimedIds)
            ? normalized.claimedIds.filter((id) => typeof id === 'string' && id)
            : [];

        this.set(this.KEYS.COMPENSATION_STATE, normalized);
    },

    isCompensationClaimed(compensationId) {
        if (!compensationId) {
            return false;
        }

        return this.getCompensationState().claimedIds.includes(String(compensationId));
    },

    markCompensationClaimed(compensationId) {
        if (!compensationId) {
            return;
        }

        const state = this.getCompensationState();
        const normalizedId = String(compensationId);
        if (!state.claimedIds.includes(normalizedId)) {
            state.claimedIds.push(normalizedId);
            this.setCompensationState(state);
        }
    },

    


    getUnlockedGardens() {
        return this.get(this.KEYS.UNLOCKED_GARDENS, 1);
    },

    


    setUnlockedGardens(count) {
        this.set(this.KEYS.UNLOCKED_GARDENS, Math.min(count, 3));
    },

    


    unlockNextGarden() {
        const current = this.getUnlockedGardens();
        if (current < 3) {
            this.setUnlockedGardens(current + 1);
            return true;
        }
        return false;
    },

    

    


    getPermanentUpgrades() {
        return this.get(this.KEYS.PERMANENT_UPGRADES, this.DEFAULT_PERMANENT_UPGRADES);
    },

    


    setPermanentUpgrades(upgrades) {
        this.set(this.KEYS.PERMANENT_UPGRADES, upgrades);
    },

    


    getPermanentUpgradeLevel(upgradeId) {
        const upgrades = this.getPermanentUpgrades();
        return upgrades[upgradeId] || 0;
    },

    


    setPermanentUpgradeLevel(upgradeId, level) {
        const upgrades = this.getPermanentUpgrades();
        upgrades[upgradeId] = Math.max(0, level);
        this.setPermanentUpgrades(upgrades);
    },

    


    buyPermanentUpgrade(upgradeId) {
        const currentLevel = this.getPermanentUpgradeLevel(upgradeId);
        const cost = UpgradeDefinitions.getPermanentCost(upgradeId, currentLevel);
        
        if (this.spendCrystals(cost)) {
            this.setPermanentUpgradeLevel(upgradeId, currentLevel + 1);
            return {
                success: true,
                newLevel: currentLevel + 1,
                cost: cost
            };
        }
        
        return {
            success: false,
            error: LocalizationManager.t('errorNotEnoughCrystals', { amount: cost })
        };
    },

    


    getDaySystemData() {
        return this.get(this.KEYS.DAY_SYSTEM, {
            currentDay: 1,
            daysCompleted: 0,
            lastBonusDay: 0,
            weeklyBonuses: { gold: 0, crystals: 0 }
        });
    },

    


    setDaySystemData(data) {
        this.set(this.KEYS.DAY_SYSTEM, data);
    },

    getSeasonState() {
        const fallback = {
            seasonId: 'season_1',
            seasonStart: Date.now(),
            points: 0,
            claimedTiers: [],
            premiumClaimedTiers: [],
            missions: [],
            lastUpdatedAt: Date.now()
        };
        return this.get(this.KEYS.SEASON_STATE, fallback);
    },

    setSeasonState(state) {
        this.set(this.KEYS.SEASON_STATE, state);
    },

    getPactMeta() {
        const saved = this.get(this.KEYS.PACT_META, this.DEFAULT_PACT_META);
        return {
            ...this.DEFAULT_PACT_META,
            ...(saved && typeof saved === 'object' ? saved : {}),
            seen: {
                ...this.DEFAULT_PACT_META.seen,
                ...((saved && typeof saved === 'object' && saved.seen && typeof saved.seen === 'object') ? saved.seen : {})
            },
            accepted: {
                ...this.DEFAULT_PACT_META.accepted,
                ...((saved && typeof saved === 'object' && saved.accepted && typeof saved.accepted === 'object') ? saved.accepted : {})
            }
        };
    },

    setPactMeta(meta) {
        this.set(this.KEYS.PACT_META, {
            ...this.DEFAULT_PACT_META,
            ...(meta && typeof meta === 'object' ? meta : {}),
            seen: {
                ...this.DEFAULT_PACT_META.seen,
                ...((meta && typeof meta === 'object' && meta.seen && typeof meta.seen === 'object') ? meta.seen : {})
            },
            accepted: {
                ...this.DEFAULT_PACT_META.accepted,
                ...((meta && typeof meta === 'object' && meta.accepted && typeof meta.accepted === 'object') ? meta.accepted : {})
            }
        });
    },

    markPactSeen(pactId) {
        if (!pactId) return;
        const meta = this.getPactMeta();
        meta.seen[pactId] = true;
        this.setPactMeta(meta);
    },

    markPactAccepted(pactId) {
        if (!pactId) return;
        const meta = this.getPactMeta();
        meta.seen[pactId] = true;
        meta.accepted[pactId] = (meta.accepted[pactId] || 0) + 1;
        meta.acceptedTotal = Math.max(0, Number(meta.acceptedTotal) || 0) + 1;
        meta.lastAcceptedAt = Date.now();
        this.setPactMeta(meta);
    },

    resetProfileProgress() {
        this.set(this.KEYS.CRYSTALS, 0);
        this.set(this.KEYS.MOONSEALS, 0);
        this.set(this.KEYS.BEST_WAVE, 0);
        this.set(this.KEYS.UPGRADES, JSON.parse(JSON.stringify(this.DEFAULT_UPGRADES)));
        this.set(this.KEYS.GAME_STATS, []);
        this.set(this.KEYS.TOTAL_KILLS, 0);
        this.set(this.KEYS.TOTAL_GAMES, 0);
        this.set(this.KEYS.ARROWS, {});
        this.set(this.KEYS.CARDS, []);
        this.set(this.KEYS.ALTAR_CARDS, []);
        this.set(this.KEYS.SEEDS_NEXT_GAME, 0);
        this.set(this.KEYS.UNLOCKED_GARDENS, []);
        this.set(this.KEYS.PERMANENT_UPGRADES, JSON.parse(JSON.stringify(this.DEFAULT_PERMANENT_UPGRADES)));
        this.set(this.KEYS.DAY_SYSTEM, {
            currentDay: 1,
            daysCompleted: 0,
            lastBonusDay: 0,
            weeklyBonuses: { gold: 0, crystals: 0 }
        });
        this.set(this.KEYS.ITEMS, { thunderStrike: 0, frenzyPotion: 0 });
        this.set(this.KEYS.TALENT_TREE, null);
        this.set(this.KEYS.STAGE_DATA, JSON.parse(JSON.stringify(this.DEFAULT_STAGE_DATA)));
        this.set(this.KEYS.SEASON_STATE, {
            seasonId: 'season_1',
            seasonStart: Date.now(),
            points: 0,
            claimedTiers: [],
            missions: [],
            lastUpdatedAt: Date.now()
        });
        this.set(this.KEYS.PACT_META, { ...this.DEFAULT_PACT_META });
        this.set(this.KEYS.COMPENSATION_STATE, { ...this.DEFAULT_COMPENSATION_STATE });
        this.set(this.KEYS.FEEDBACK_PROMPT, { ...this.DEFAULT_FEEDBACK_PROMPT });
        this.set(this.KEYS.PROFILE_PRIVATE, { ...this.DEFAULT_PROFILE_PRIVATE });
        this.set('daily_quests', null);
    },

    


    migrateOldUpgrades() {
        const oldUpgrades = this.getUpgrades();
        const permanentUpgrades = this.getPermanentUpgrades();
        let migrated = false;

        
        if (oldUpgrades.health && oldUpgrades.health.level > 1) {
            
            const levels = oldUpgrades.health.level - 1;
            if (permanentUpgrades.permMaxHealth < levels) {
                permanentUpgrades.permMaxHealth = levels;
                migrated = true;
            }
        }

        if (oldUpgrades.damage && oldUpgrades.damage.level > 1) {
            const levels = oldUpgrades.damage.level - 1;
            if (permanentUpgrades.permDamage < levels) {
                permanentUpgrades.permDamage = levels;
                migrated = true;
            }
        }

        if (oldUpgrades.speed && oldUpgrades.speed.level > 1) {
            const levels = oldUpgrades.speed.level - 1;
            if (permanentUpgrades.permAttackSpeed < levels) {
                permanentUpgrades.permAttackSpeed = levels;
                migrated = true;
            }
        }

        if (migrated) {
            this.setPermanentUpgrades(permanentUpgrades);
            console.log('✅ Миграция улучшений завершена');
        }

        return migrated;
    },

    

    


    getSaveVersion() {
        return this.get(this.KEYS.VERSION, 0);
    },

    


    setSaveVersion(version) {
        this.set(this.KEYS.VERSION, version);
    },

    


    checkAndMigrate() {
        const currentVersion = this.getSaveVersion();
        
        if (currentVersion < this.SAVE_VERSION) {
            console.log(`🔄 Миграция сохранений: v${currentVersion} -> v${this.SAVE_VERSION}`);
            
            
            for (let v = currentVersion; v < this.SAVE_VERSION; v++) {
                this.migrateFromVersion(v);
            }
            
            
            this.setSaveVersion(this.SAVE_VERSION);
            console.log('✅ Миграция завершена');
        }
    },

    


    migrateFromVersion(version) {
        switch (version) {
            case 0:
                
                this.migrateFromV0();
                break;
            case 1:
                
                this.migrateFromV1();
                break;
            case 2:
                this.migrateFromV2();
                break;
            case 3:
                this.migrateFromV3();
                break;
        }
    },

    


    migrateFromV0() {
        console.log('📝 Миграция с v0 на v1...');
        
        
        this.migrateOldUpgrades();
        
        
        this.ensureDefaultValues();
    },

    


    migrateFromV1() {
        console.log('📝 Миграция с v1 на v2: удаление старых карточек...');
        
        
        const oldCardIds = [
            'health_boost',    
            'damage_boost',    
            'speed_boost',     
            'gold_boost',      
            'crit_boost',      
            'regen_boost',     
            'multishot_boost', 
            'range_boost',     
            'defense_boost',   
            'vampirism_boost', 
            'thorns_boost',    
            'crystal_boost'    
        ];
        
        
        const cards = this.getCards();
        const filteredCards = cards.filter(card => !oldCardIds.includes(card.id));
        const removedCount = cards.length - filteredCards.length;
        
        if (removedCount > 0) {
            this.set(this.KEYS.CARDS, filteredCards);
            console.log(`✅ Удалено ${removedCount} старых карточек из коллекции`);
        }
        
        
        const altarCards = this.getAltarCards();
        const filteredAltarCards = altarCards.filter(card => !oldCardIds.includes(card.id));
        const removedAltarCount = altarCards.length - filteredAltarCards.length;
        
        if (removedAltarCount > 0) {
            this.setAltarCards(filteredAltarCards);
            console.log(`✅ Удалено ${removedAltarCount} старых карточек из алтаря`);
        }
        
        console.log('✅ Миграция на v2 завершена. Новые карточки можно получить из паков!');
    },

    migrateFromV2() {
        console.log('📝 Миграция с v2 на v3: добавление сезонного состояния...');
        if (!this.get(this.KEYS.SEASON_STATE, null)) {
            this.set(this.KEYS.SEASON_STATE, this.getSeasonState());
        }
    },

    migrateFromV3() {
        console.log('📝 Миграция с v3 на v4: добавление pact meta...');
        if (!this.get(this.KEYS.PACT_META, null)) {
            this.set(this.KEYS.PACT_META, { ...this.DEFAULT_PACT_META });
        }
    },

    


    ensureDefaultValues() {
        
        const permanentUpgrades = this.getPermanentUpgrades();
        let updated = false;
        
        for (const [key, defaultValue] of Object.entries(this.DEFAULT_PERMANENT_UPGRADES)) {
            if (!(key in permanentUpgrades)) {
                permanentUpgrades[key] = defaultValue;
                updated = true;
            }
        }
        
        if (updated) {
            this.setPermanentUpgrades(permanentUpgrades);
        }
        
        
        if (this.getUnlockedGardens() === 0) {
            this.setUnlockedGardens(1);
        }

        
        const stageData = this.getStageData();
        this.setStageData(stageData);

        if (!this.get(this.KEYS.SEASON_STATE, null)) {
            this.set(this.KEYS.SEASON_STATE, this.getSeasonState());
        }
        if (!this.get(this.KEYS.PACT_META, null)) {
            this.set(this.KEYS.PACT_META, { ...this.DEFAULT_PACT_META });
        }
    }
};

window.SaveManager = SaveManager;
