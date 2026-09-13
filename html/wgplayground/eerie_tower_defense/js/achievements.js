




const AchievementsManager = {
    
    ACHIEVEMENTS: {
        
        FIRST_BLOOD: 'first_blood',           
        HUNTER: 'hunter',                     
        SLAYER: 'slayer',                     
        LEGEND: 'legend',                     
        EXTERMINATOR: 'exterminator',         
        
        
        SURVIVOR: 'survivor',                 
        VETERAN: 'veteran',                   
        MASTER: 'master',                     
        CHAMPION: 'champion',                 
        
        
        RICH: 'rich',                         
        MILLIONAIRE: 'millionaire',           
        CRYSTAL_COLLECTOR: 'crystal_collector', 
        CRYSTAL_MASTER: 'crystal_master',     
        
        
        COLLECTOR: 'collector',               
        LIBRARIAN: 'librarian',               
        ALCHEMIST: 'alchemist',               
        FIVE_STAR: 'five_star',               
        
        
        FIRST_PURCHASE: 'first_purchase',     
        GENEROUS_PATRON: 'generous_patron',   
        
        
        UPGRADER: 'upgrader',                 
        POWER_GAMER: 'power_gamer',           
        
        
        SPEEDRUNNER: 'speedrunner',           
        PACIFIST: 'pacifist',                 
        GARDENER: 'gardener'                  
    },

    
    _unlockedCache: new Set(),
    _availableTags: new Set(),
    _availableById: new Set(),
    _pendingProgress: {},
    _lastSyncedProgress: {},
    _flushPromise: null,
    _lifecycleEventsBound: false,
    _selectedGroupTag: '__all__',
    _isInitialized: false,

    getGp() {
        return window.GP || window.__GP_SDK_INSTANCE || window.gp || null;
    },

    getApi() {
        const gp = this.getGp();
        return gp && gp.achievements ? gp.achievements : null;
    },

    trackEvent(eventName, payload = {}) {
        console.log(`📈 Event: ${eventName}`, payload || {});
    },

    


    async init() {
        console.log('🏆 Инициализация системы достижений');
        
        try {
            if (!this.getGp()) {
                console.warn('⚠️ GamePush SDK не готов, достижения будут недоступны');
                return false;
            }

            if (typeof LocalizationManager !== 'undefined' && LocalizationManager && typeof LocalizationManager.whenReady === 'function') {
                await LocalizationManager.whenReady();
            }

            
            this.bindEvents();
            this.bindLifecycleEvents();

            
            await this.loadUnlockedAchievements();
            
            this._isInitialized = true;
            console.log('✅ Система достижений инициализирована');
            return true;
        } catch (error) {
            console.error('❌ Ошибка инициализации системы достижений:', error);
            return false;
        }
    },

    


    async loadUnlockedAchievements() {
        const api = this.getApi();
        if (!api) {
            return;
        }

        try {
            if (typeof api.fetch === 'function') {
                await api.fetch();
            }

            
            const list = Array.isArray(api.list) ? api.list : [];
            this._availableTags.clear();
            this._availableById.clear();

            list.forEach((achievement) => {
                if (achievement.tag) {
                    this._availableTags.add(String(achievement.tag));
                }
                if (achievement.id !== undefined && achievement.id !== null) {
                    this._availableById.add(Number(achievement.id));
                }
            });

            
            this._unlockedCache.clear();
            const playerList = Array.isArray(api.playerAchievementsList) ? api.playerAchievementsList : [];

            playerList.forEach((playerAchievement) => {
                if (!playerAchievement) {
                    return;
                }

                const id = Number(playerAchievement.achievementId);
                if (Number.isFinite(id)) {
                    this.setLastSyncedProgress({ id }, Number(playerAchievement.progress || 0));
                }

                if (playerAchievement.unlocked) {
                    this._unlockedCache.add(id);
                }
            });

            
            list.forEach((achievement) => {
                this.rememberAchievementState(achievement);
                if (achievement.unlocked) {
                    if (achievement.tag) this._unlockedCache.add(String(achievement.tag));
                    if (achievement.id !== undefined && achievement.id !== null) {
                        this._unlockedCache.add(Number(achievement.id));
                    }
                }
            });

            console.log(`🏆 Загружено достижений: ${list.length}, разблокировано: ${this._unlockedCache.size}`);
            console.log('🏷️ Теги достижений из SDK:', Array.from(this._availableTags));
        } catch (error) {
            console.error('❌ Ошибка загрузки достижений:', error);
        }
    },

    bindLifecycleEvents() {
        if (this._lifecycleEventsBound || typeof document === 'undefined' || typeof window === 'undefined') {
            return;
        }

        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.flushPendingProgress(true);
            }
        });

        window.addEventListener('pagehide', () => {
            this.flushPendingProgress(true);
        });

        this._lifecycleEventsBound = true;
    },

    


    bindEvents() {
        const api = this.getApi();
        if (!api || typeof api.on !== 'function') {
            return;
        }

        api.on('unlock', (achievement) => {
            if (achievement) {
                const tag = achievement.tag ? String(achievement.tag) : null;
                const id = (achievement.id !== undefined && achievement.id !== null) ? Number(achievement.id) : null;
                this.rememberAchievementState(achievement);

                
                const alreadyShown = (tag && this._unlockedCache.has(tag)) || (id !== null && this._unlockedCache.has(id));

                if (tag) this._unlockedCache.add(tag);
                if (id !== null) this._unlockedCache.add(id);

                if (alreadyShown) {
                    return;
                }

                if (typeof UI !== 'undefined' && UI && typeof UI.showAchievementUnlockToast === 'function') {
                    UI.showAchievementUnlockToast(this.getDisplayAchievementData(achievement));
                }
            }
            console.log('🏆 Событие unlock:', achievement);
        });

        api.on('error:unlock', (error) => {
            console.warn('⚠️ Событие error:unlock:', error);
        });

        api.on('progress', (achievement) => {
            if (!achievement) {
                return;
            }

            this.rememberAchievementState(achievement);
            
            const max = Number(achievement.maxProgress || 0);
            const progress = Number(achievement.progress || 0);
            if (max > 0) {
                console.log(`🏆 Прогресс достижения: ${achievement.name || achievement.tag} (${progress}/${max})`);
            }
            
        });

        api.on('fetch', () => {
            console.log('🏆 Achievements fetch успешен');
        });
    },

    



    async onEnemyKilled(sessionKills) {
        if (!this._isInitialized) {
            return;
        }

        const persistentKills = Number(SaveManager.getTotalKills() || 0);
        const totalKills = Math.max(0, persistentKills + Number(sessionKills || 0));

        
        if (totalKills >= 1 && !this.isUnlocked(this.ACHIEVEMENTS.FIRST_BLOOD)) {
            await this.unlock(this.ACHIEVEMENTS.FIRST_BLOOD, true);
        }

        
        this.queueProgressByRef(this.ACHIEVEMENTS.HUNTER, Math.min(totalKills, 100));
        this.queueProgressByRef(this.ACHIEVEMENTS.SLAYER, Math.min(totalKills, 500));
        this.queueProgressByRef(this.ACHIEVEMENTS.LEGEND, Math.min(totalKills, 1000));
        this.queueProgressByRef(this.ACHIEVEMENTS.EXTERMINATOR, Math.min(totalKills, 5000));
    },

    




    async setProgressByRef(achievementRef, progress) {
        this.queueProgressByRef(achievementRef, progress);
        return this.flushPendingProgress();
    },

    queueProgressByRef(achievementRef, progress) {
        const payload = this.resolveAchievementPayload(achievementRef);
        if (!payload) {
            return false;
        }

        const key = this.getProgressCacheKey(payload);
        if (!key) {
            return false;
        }

        const nextProgress = Math.max(0, Math.floor(progress));
        const currentPending = Number(this._pendingProgress[key] || 0);
        const syncedProgress = Number(this._lastSyncedProgress[key] || 0);
        const targetProgress = Math.max(currentPending, syncedProgress, nextProgress);

        if (targetProgress <= syncedProgress) {
            return false;
        }

        this._pendingProgress[key] = targetProgress;
        return true;
    },

    async flushPendingProgress(force = false) {
        const api = this.getApi();
        if (!api || typeof api.setProgress !== 'function') {
            return false;
        }

        if (this._flushPromise) {
            return this._flushPromise;
        }

        const pendingEntries = Object.entries(this._pendingProgress);
        if (!pendingEntries.length) {
            return true;
        }

        this._flushPromise = (async () => {
            for (let i = 0; i < pendingEntries.length; i++) {
                const [key, pendingValue] = pendingEntries[i];
                const progress = Math.max(0, Math.floor(Number(pendingValue) || 0));
                const payload = this.payloadFromProgressKey(key);
                if (!payload) {
                    delete this._pendingProgress[key];
                    continue;
                }

                const syncedProgress = Number(this._lastSyncedProgress[key] || 0);
                if (progress <= syncedProgress) {
                    delete this._pendingProgress[key];
                    continue;
                }

                try {
                    const result = await api.setProgress({ ...payload, progress });
                    const isSameProgress = result && result.success === false && result.error === 'progress_the_same';
                    const isAlreadyUnlocked = result && result.success === false && result.error === 'already_unlocked';

                    if (result && result.success && result.achievement) {
                        this.rememberAchievementState(result.achievement);
                        this.setLastSyncedProgress(payload, progress);
                    } else if (isSameProgress || isAlreadyUnlocked) {
                        this.setLastSyncedProgress(payload, progress);
                    } else if (!force) {
                        console.warn('⚠️ Не удалось обновить прогресс достижения:', key, result && result.error);
                    }

                    const latestPending = Number(this._pendingProgress[key] || 0);
                    if (latestPending <= progress || isSameProgress || isAlreadyUnlocked) {
                        delete this._pendingProgress[key];
                    }
                } catch (error) {
                    if (!force) {
                        console.warn('⚠️ Ошибка отправки прогресса достижения:', key, error);
                    }
                }
            }

            return true;
        })().finally(() => {
            this._flushPromise = null;
        });

        return this._flushPromise;
    },

    




    resolveAchievementPayload(achievementRef) {
        if (achievementRef === undefined || achievementRef === null) {
            return null;
        }

        if (typeof achievementRef === 'number') {
            return { id: achievementRef };
        }

        const raw = String(achievementRef).trim();
        if (!raw) {
            return null;
        }

        
        const maybeNumber = Number(raw);
        if (Number.isFinite(maybeNumber) && String(maybeNumber) === raw) {
            return { id: maybeNumber };
        }

        
        if (this._availableTags.has(raw)) {
            return { tag: raw };
        }

        
        const upperSnake = raw.replace(/([a-z])([A-Z])/g, '$1_$2').replace(/-/g, '_').toUpperCase();
        if (this._availableTags.has(upperSnake)) {
            return { tag: upperSnake };
        }

        
        const lowerSnake = raw.replace(/([a-z])([A-Z])/g, '$1_$2').replace(/-/g, '_').toLowerCase();
        if (this._availableTags.has(lowerSnake)) {
            return { tag: lowerSnake };
        }

        
        return { tag: raw };
    },

    getProgressCacheKey(payload) {
        if (!payload) {
            return null;
        }

        if (payload.tag) {
            return `tag:${String(payload.tag)}`;
        }

        if (payload.id !== undefined && payload.id !== null) {
            return `id:${Number(payload.id)}`;
        }

        return null;
    },

    payloadFromProgressKey(key) {
        if (typeof key !== 'string' || key.length < 4) {
            return null;
        }

        if (key.indexOf('tag:') === 0) {
            return { tag: key.slice(4) };
        }

        if (key.indexOf('id:') === 0) {
            const id = Number(key.slice(3));
            return Number.isFinite(id) ? { id } : null;
        }

        return null;
    },

    setLastSyncedProgress(payload, progress) {
        const key = this.getProgressCacheKey(payload);
        if (!key) {
            return;
        }

        const normalizedProgress = Math.max(0, Math.floor(Number(progress) || 0));
        const previous = Number(this._lastSyncedProgress[key] || 0);
        if (normalizedProgress > previous) {
            this._lastSyncedProgress[key] = normalizedProgress;
        }
    },

    rememberAchievementState(achievement) {
        if (!achievement) {
            return;
        }

        if (achievement.tag) {
            this._availableTags.add(String(achievement.tag));
            this.setLastSyncedProgress({ tag: String(achievement.tag) }, Number(achievement.progress || 0));
        }

        if (achievement.id !== undefined && achievement.id !== null) {
            const numericId = Number(achievement.id);
            if (Number.isFinite(numericId)) {
                this._availableById.add(numericId);
                this.setLastSyncedProgress({ id: numericId }, Number(achievement.progress || 0));
            }
        }
    },

    getDisplayAchievementData(achievement) {
        if (!achievement) {
            return null;
        }

        const api = this.getApi();
        const list = api && Array.isArray(api.list) ? api.list : [];
        const achievementTag = achievement.tag ? String(achievement.tag) : null;
        const achievementId = achievement.id !== undefined && achievement.id !== null
            ? Number(achievement.id)
            : (achievement.achievementId !== undefined && achievement.achievementId !== null ? Number(achievement.achievementId) : null);

        const matched = list.find((entry) => {
            if (!entry) return false;
            const entryTag = entry.tag ? String(entry.tag) : null;
            const entryId = entry.id !== undefined && entry.id !== null ? Number(entry.id) : null;
            if (achievementTag && entryTag && achievementTag === entryTag) {
                return true;
            }
            if (achievementId !== null && entryId !== null && achievementId === entryId) {
                return true;
            }
            return false;
        });

        return {
            ...achievement,
            ...(matched || {})
        };
    },

    




    async unlock(achievementId, silent = false) {
        
        if (!this._isInitialized) {
            if (!silent) {
                console.warn('⚠️ Система достижений не инициализирована');
            }
            return false;
        }

        const payload = this.resolveAchievementPayload(achievementId);
        if (!payload) {
            if (!silent) {
                console.warn('⚠️ Пустой achievementId');
            }
            return false;
        }

        
        const cacheKeys = [achievementId];
        if (payload.tag) cacheKeys.push(payload.tag);
        if (payload.id !== undefined) cacheKeys.push(Number(payload.id));

        if (cacheKeys.some((k) => this._unlockedCache.has(k))) {
            if (!silent) {
                console.log(`ℹ️ Достижение ${achievementId} уже разблокировано`);
            }
            return false;
        }

        
        const api = this.getApi();
        if (!api) {
            if (!silent) {
                console.warn('⚠️ GamePush achievements недоступны');
            }
            return false;
        }

        try {
            console.log(`🏆 Разблокировка достижения: ${achievementId}`, payload);

            const result = await api.unlock(payload);
            if (!result || !result.success) {
                if (!silent) {
                    console.warn(`⚠️ Не удалось разблокировать достижение ${achievementId}:`, result && result.error);
                }
                return false;
            }

            const achievement = result.achievement || null;

            
            this._unlockedCache.add(achievementId);
            if (payload.tag) this._unlockedCache.add(payload.tag);
            if (payload.id !== undefined) this._unlockedCache.add(Number(payload.id));
            if (achievement && achievement.tag) this._unlockedCache.add(String(achievement.tag));
            if (achievement && achievement.id !== undefined && achievement.id !== null) {
                this._unlockedCache.add(Number(achievement.id));
            }

            console.log(`✅ Достижение ${achievementId} разблокировано!`, achievement);

            if (typeof AudioManager !== 'undefined' && AudioManager.playSound) {
                AudioManager.playSound('achievement');
            }
            
            
            this.trackEvent('achievement_unlocked', { achievementId });
            
            return true;
        } catch (error) {
            console.error(`❌ Ошибка разблокировки достижения ${achievementId}:`, error);
            return false;
        }
    },

    




    isUnlocked(achievementId) {
        const payload = this.resolveAchievementPayload(achievementId);
        if (!payload) {
            return false;
        }

        if (this._unlockedCache.has(achievementId)) {
            return true;
        }

        if (payload.tag && this._unlockedCache.has(payload.tag)) {
            return true;
        }

        if (payload.id !== undefined && this._unlockedCache.has(Number(payload.id))) {
            return true;
        }

        const api = this.getApi();
        if (api && typeof api.has === 'function') {
            const ref = payload.tag || payload.id;
            if (ref !== undefined) {
                return Boolean(api.has(ref));
            }
        }

        return false;
    },

    



    checkProgress() {
        if (!this._isInitialized) {
            return;
        }

        const stats = SaveManager.getGameStats();
        const totalKills = SaveManager.getTotalKills();
        const totalGames = SaveManager.getTotalGames();
        const crystals = SaveManager.getCrystals();
        const bestWave = SaveManager.getBestWave();
        const cards = SaveManager.getCards();
        const altarCards = typeof SaveManager.getAltarCards === 'function' ? SaveManager.getAltarCards() : [];
        const allOwnedCards = [...cards, ...altarCards];
        
        
        if (totalKills >= 1 && !this.isUnlocked(this.ACHIEVEMENTS.FIRST_BLOOD)) {
            this.unlock(this.ACHIEVEMENTS.FIRST_BLOOD, true);
        }
        if (totalKills >= 100 && !this.isUnlocked(this.ACHIEVEMENTS.HUNTER)) {
            this.unlock(this.ACHIEVEMENTS.HUNTER, true);
        }
        if (totalKills >= 500 && !this.isUnlocked(this.ACHIEVEMENTS.SLAYER)) {
            this.unlock(this.ACHIEVEMENTS.SLAYER, true);
        }
        if (totalKills >= 1000 && !this.isUnlocked(this.ACHIEVEMENTS.LEGEND)) {
            this.unlock(this.ACHIEVEMENTS.LEGEND, true);
        }
        if (totalKills >= 5000 && !this.isUnlocked(this.ACHIEVEMENTS.EXTERMINATOR)) {
            this.unlock(this.ACHIEVEMENTS.EXTERMINATOR, true);
        }

        
        if (bestWave >= 10 && !this.isUnlocked(this.ACHIEVEMENTS.SURVIVOR)) {
            this.unlock(this.ACHIEVEMENTS.SURVIVOR, true);
        }
        if (bestWave >= 25 && !this.isUnlocked(this.ACHIEVEMENTS.VETERAN)) {
            this.unlock(this.ACHIEVEMENTS.VETERAN, true);
        }
        if (bestWave >= 50 && !this.isUnlocked(this.ACHIEVEMENTS.MASTER)) {
            this.unlock(this.ACHIEVEMENTS.MASTER, true);
        }
        if (bestWave >= 100 && !this.isUnlocked(this.ACHIEVEMENTS.CHAMPION)) {
            this.unlock(this.ACHIEVEMENTS.CHAMPION, true);
        }

        
        if (crystals >= 100 && !this.isUnlocked(this.ACHIEVEMENTS.CRYSTAL_COLLECTOR)) {
            this.unlock(this.ACHIEVEMENTS.CRYSTAL_COLLECTOR, true);
        }
        if (crystals >= 1000 && !this.isUnlocked(this.ACHIEVEMENTS.CRYSTAL_MASTER)) {
            this.unlock(this.ACHIEVEMENTS.CRYSTAL_MASTER, true);
        }
        this.queueProgressByRef(this.ACHIEVEMENTS.CRYSTAL_COLLECTOR, Math.min(crystals, 100));
        this.queueProgressByRef(this.ACHIEVEMENTS.CRYSTAL_MASTER, Math.min(crystals, 1000));

        
        if (allOwnedCards.length >= 10 && !this.isUnlocked(this.ACHIEVEMENTS.COLLECTOR)) {
            this.unlock(this.ACHIEVEMENTS.COLLECTOR, true);
        }
        if (allOwnedCards.length >= 50 && !this.isUnlocked(this.ACHIEVEMENTS.LIBRARIAN)) {
            this.unlock(this.ACHIEVEMENTS.LIBRARIAN, true);
        }
        this.queueProgressByRef(this.ACHIEVEMENTS.COLLECTOR, Math.min(allOwnedCards.length, 10));
        this.queueProgressByRef(this.ACHIEVEMENTS.LIBRARIAN, Math.min(allOwnedCards.length, 50));

        
        const fiveStarCards = allOwnedCards.filter(card => card.stars >= 5);
        if (fiveStarCards.length >= 1 && !this.isUnlocked(this.ACHIEVEMENTS.ALCHEMIST)) {
            this.unlock(this.ACHIEVEMENTS.ALCHEMIST, true);
        }
        if (fiveStarCards.length >= 5 && !this.isUnlocked(this.ACHIEVEMENTS.FIVE_STAR)) {
            this.unlock(this.ACHIEVEMENTS.FIVE_STAR, true);
        }
        this.queueProgressByRef(this.ACHIEVEMENTS.ALCHEMIST, Math.min(fiveStarCards.length, 1));
        this.queueProgressByRef(this.ACHIEVEMENTS.FIVE_STAR, Math.min(fiveStarCards.length, 5));

        
        const unlockedGardens = SaveManager.get(SaveManager.KEYS.UNLOCKED_GARDENS, 1);
        if (unlockedGardens >= 3 && !this.isUnlocked(this.ACHIEVEMENTS.GARDENER)) {
            this.unlock(this.ACHIEVEMENTS.GARDENER, true);
        }

        
        const permanentUpgrades = (typeof SaveManager.getPermanentUpgrades === 'function')
            ? SaveManager.getPermanentUpgrades()
            : {};
        let hasMaxPermanentUpgrade = false;

        if (typeof UpgradeDefinitions !== 'undefined' && UpgradeDefinitions.PERMANENT) {
            Object.keys(UpgradeDefinitions.PERMANENT).forEach((permId) => {
                if (hasMaxPermanentUpgrade) return;
                const def = UpgradeDefinitions.PERMANENT[permId];
                const maxLevel = Number(def && def.maxLevel);
                const currentLevel = Number(permanentUpgrades[permId] || 0);
                if (Number.isFinite(maxLevel) && maxLevel > 0 && currentLevel >= maxLevel) {
                    hasMaxPermanentUpgrade = true;
                }
            });
        }

        if (hasMaxPermanentUpgrade && !this.isUnlocked(this.ACHIEVEMENTS.POWER_GAMER)) {
            this.unlock(this.ACHIEVEMENTS.POWER_GAMER, true);
        }
    },

    



    checkGameSessionProgress(gameState) {
        if (!this._isInitialized || !gameState) {
            return;
        }

        
        if (gameState.stats && gameState.stats.totalGold >= 10000) {
            if (!this.isUnlocked(this.ACHIEVEMENTS.RICH)) {
                this.unlock(this.ACHIEVEMENTS.RICH, true);
            }
        }

        
        if (gameState.stats && gameState.stats.totalGold >= 100000) {
            if (!this.isUnlocked(this.ACHIEVEMENTS.MILLIONAIRE)) {
                this.unlock(this.ACHIEVEMENTS.MILLIONAIRE, true);
            }
        }

        
        const survivedWaves = Number(gameState.wave || 0);
        const gameTimeSec = Number(gameState.stats && gameState.stats.gameTime ? gameState.stats.gameTime : 0);
        if (survivedWaves >= 10 && gameTimeSec > 0 && gameTimeSec <= 300) {
            if (!this.isUnlocked(this.ACHIEVEMENTS.SPEEDRUNNER)) {
                this.unlock(this.ACHIEVEMENTS.SPEEDRUNNER, true);
            }
        }
    },

    async finalizeSession(gameState) {
        if (!this._isInitialized) {
            return false;
        }

        await this.flushPendingProgress(true);
        this.checkProgress();
        this.checkGameSessionProgress(gameState);
        return true;
    },

    



    getAchievementsList() {
        const api = this.getApi();
        if (!api || !Array.isArray(api.list)) {
            return [];
        }

        return api.list.map(achievement => {
            const progressRef = achievement.tag || achievement.id;
            let progress = achievement.progress || 0;
            if (typeof api.getProgress === 'function' && progressRef !== undefined) {
                const sdkProgress = api.getProgress(progressRef);
                if (Number.isFinite(Number(sdkProgress))) {
                    progress = Number(sdkProgress);
                }
            }

            return {
            id: achievement.tag || achievement.id,
            tag: achievement.tag || null,
            numericId: achievement.id || null,
            name: achievement.name,
            description: achievement.description,
            icon: achievement.icon,
            lockedIcon: achievement.lockedIcon,
            unlocked: achievement.unlocked,
            rare: achievement.rare || 0,
            progress,
            maxProgress: achievement.maxProgress || 0
            };
        });
    },

    



    getAchievementGroups() {
        const api = this.getApi();
        if (!api || !Array.isArray(api.groupsList)) {
            return [];
        }

        return api.groupsList.map((group) => ({
            id: group.id !== undefined && group.id !== null ? Number(group.id) : null,
            tag: String(group.tag || `group_${group.id || 'unknown'}`),
            name: group.name || String(group.tag || 'Group'),
            achievements: Array.isArray(group.achievements) ? group.achievements.map(Number) : []
        }));
    },

    



    async showAchievementsPanel() {
        const api = this.getApi();
        if (api && typeof api.fetch === 'function') {
            try {
                await api.fetch();
            } catch (error) {
                console.warn('⚠️ Не удалось обновить достижения перед показом:', error);
            }
        }

        const list = this.getAchievementsList();
        if (!list.length) {
            if (window.UI && UI.showNotification) {
                const text = (typeof LocalizationManager !== 'undefined' && typeof LocalizationManager.t === 'function')
                    ? LocalizationManager.t('achievementsNoData', 'No achievements data')
                    : 'No achievements data';
                UI.showNotification(text, '#e67e22');
            }
            return false;
        }

        const listEl = document.getElementById('achievementsScreenList');
        const totalEl = document.getElementById('achievementsScreenTotal');
        const unlockedEl = document.getElementById('achievementsScreenUnlocked');
        const groupsEl = document.getElementById('achievementsGroups');

        if (!listEl) {
            return false;
        }

        const groups = this.getAchievementGroups();
        const allGroupName = (typeof LocalizationManager !== 'undefined' && LocalizationManager.t)
            ? LocalizationManager.t('all', 'Все')
            : 'Все';
        const allGroup = { id: null, tag: '__all__', name: allGroupName, achievements: [] };
        const groupList = [allGroup, ...groups];

        if (!groupList.some((g) => g.tag === this._selectedGroupTag)) {
            this._selectedGroupTag = '__all__';
        }

        
        if (groupsEl) {
            groupsEl.innerHTML = '';
            groupList.forEach((group) => {
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.className = `achievement-group-btn ${this._selectedGroupTag === group.tag ? 'active' : ''}`;
                btn.textContent = group.name;
                btn.addEventListener('click', async () => {
                    this._selectedGroupTag = group.tag;
                    await this.showAchievementsPanel();
                });
                groupsEl.appendChild(btn);
            });
        }

        
        let filtered = list;
        if (this._selectedGroupTag !== '__all__') {
            const selected = groupList.find((g) => g.tag === this._selectedGroupTag);
            if (selected) {
                const allowedIds = new Set((selected.achievements || []).map(Number));
                filtered = list.filter((item) => item.numericId !== null && allowedIds.has(Number(item.numericId)));
            }
        }

        const unlockedCount = filtered.filter((a) => Boolean(a.unlocked || this.isUnlocked(a.tag || a.numericId || a.id))).length;
        if (totalEl) totalEl.textContent = String(filtered.length);
        if (unlockedEl) unlockedEl.textContent = String(unlockedCount);

        listEl.innerHTML = '';
        filtered.forEach((a) => {
            const unlocked = Boolean(a.unlocked || this.isUnlocked(a.tag || a.numericId || a.id));
            const card = document.createElement('div');
            card.className = `achievement-item ${unlocked ? 'unlocked' : 'locked'}`;

            const progress = Number(a.progress || 0);
            const maxProgress = Number(a.maxProgress || 0);
            const progressPercent = maxProgress > 0 ? Math.min(100, Math.round((progress / maxProgress) * 100)) : 0;
            const iconSrc = unlocked ? (a.icon || a.lockedIcon || '') : (a.lockedIcon || a.icon || '');

            card.innerHTML = `
                <div class="achievement-item-icon-wrap">
                    ${iconSrc ? `<img class="achievement-item-icon" src="${iconSrc}" alt="">` : '🏆'}
                </div>
                <div class="achievement-item-body">
                    <div class="achievement-item-title">${a.name || a.tag || a.id}</div>
                    <div class="achievement-item-desc">${a.description || ''}</div>
                    ${maxProgress > 0 ? `
                        <div class="achievement-progress-row">
                            <div class="achievement-progress-bar"><span style="width:${progressPercent}%"></span></div>
                            <div class="achievement-progress-text">${progress} / ${maxProgress}</div>
                        </div>
                    ` : ''}
                </div>
                <div class="achievement-item-status">${unlocked ? '✅' : '🔒'}</div>
            `;

            listEl.appendChild(card);
        });

        return true;
    },

    


    async openAchievementsUI() {
        
        return this.showAchievementsPanel();
    }
};


window.AchievementsManager = AchievementsManager;


window.addEventListener('load', () => {
    
    const waitForSDK = setInterval(() => {
        if (AchievementsManager.getApi()) {
            clearInterval(waitForSDK);
            AchievementsManager.init();
        }
    }, 250);
    
    
    setTimeout(() => {
        clearInterval(waitForSDK);
    }, 10000);
});
