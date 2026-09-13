




const AuthManager = {
    
    isAuthorized: false,
    playerData: null,
    playerID: null,
    playerName: (typeof LocalizationManager !== 'undefined' && typeof LocalizationManager.t === 'function')
        ? LocalizationManager.t('authGuestName', 'Guest')
        : 'Guest',
    sdkWaitAttempts: 40,
    sdkWaitDelayMs: 250,
    
    
    _autoSaveInterval: null,
    _autoSaveIntervalMs: 30000, 
    _lastSaveTime: 0,
    _cloudSyncTimeoutMs: 4500,
    _playerEventsBound: false,
    _playerAutoSyncEnabled: false,
    _saveEventsBound: false,
    _lifecycleEventsBound: false,
    _criticalSaveKeys: null,
    _isCloudSaveInProgress: false,
    _hasQueuedCloudSave: false,
    _queuedCloudSaveIsAuto: true,
    _queuedCloudSaveIsCritical: false,
    _activeCloudSavePromise: null,
    _lastChangedSaveKey: null,
    _isApplyingCloudData: false,
    _cardsCloudSyncPending: false,
    _initialized: false,
    _initInProgress: false,
    _initRetryTimer: null,
    PUBLIC_PROFILE_FIELD_KEY: 'publicprofile',

    getStoredPlayerId() {
        return SaveManager.get(SaveManager.KEYS.LAST_AUTH_PLAYER_ID, null);
    },

    isCardsCloudSyncPending() {
        return Boolean(this._cardsCloudSyncPending);
    },

    beginCardsCloudSyncPending() {
        this._cardsCloudSyncPending = true;
    },

    endCardsCloudSyncPending() {
        this._cardsCloudSyncPending = false;
    },

    setStoredPlayerId(playerId) {
        SaveManager.set(SaveManager.KEYS.LAST_AUTH_PLAYER_ID, playerId || null);
    },

    isDifferentAuthorizedProfile(playerId) {
        const currentId = playerId ? String(playerId) : null;
        const storedId = this.getStoredPlayerId();
        return Boolean(currentId && storedId && currentId !== String(storedId));
    },

    resetLocalProfileForNewUser(playerId) {
        console.log('🧹 Сброс локального профиля для нового пользователя:', playerId);
        SaveManager.resetProfileProgress();
        this.endCardsCloudSyncPending();
        this.setStoredPlayerId(playerId);
        if (window.Game && Game.cardEffects && typeof Game.cardEffects.loadActiveCards === 'function') {
            Game.cardEffects.loadActiveCards();
        }
        if (typeof TalentTree !== 'undefined' && TalentTree && typeof TalentTree.reloadState === 'function') {
            TalentTree.reloadState();
        }
        if (typeof permanentUpgradeManager !== 'undefined' && permanentUpgradeManager && typeof permanentUpgradeManager.reloadFromSave === 'function') {
            permanentUpgradeManager.reloadFromSave();
        }
        if (window.UI) {
            if (typeof UI.updateUpgradeScreen === 'function') {
                UI.updateUpgradeScreen();
            }
            if (typeof UI.renderTalentTree === 'function') {
                UI.renderTalentTree();
            }
            if (typeof UI.updateCardsDisplay === 'function') {
                UI.updateCardsDisplay();
            }
            if (typeof UI.updateMainMenu === 'function') {
                UI.updateMainMenu();
            }
            if (typeof UI.updateSeasonPanel === 'function') {
                UI.updateSeasonPanel();
            }
        }
    },

    resetToGuestProfile() {
        console.log('🧼 Сброс в гостевой профиль');
        SaveManager.resetProfileProgress();
        this.endCardsCloudSyncPending();
        this.setStoredPlayerId(null);
        if (window.Game && Game.cardEffects && typeof Game.cardEffects.loadActiveCards === 'function') {
            Game.cardEffects.loadActiveCards();
        }
        if (typeof TalentTree !== 'undefined' && TalentTree && typeof TalentTree.reloadState === 'function') {
            TalentTree.reloadState();
        }
        if (typeof permanentUpgradeManager !== 'undefined' && permanentUpgradeManager && typeof permanentUpgradeManager.reloadFromSave === 'function') {
            permanentUpgradeManager.reloadFromSave();
        }
        if (typeof SeasonSystem !== 'undefined' && SeasonSystem && typeof SeasonSystem.init === 'function') {
            SeasonSystem.init();
        }
        if (window.UI) {
            if (typeof UI.updateUpgradeScreen === 'function') {
                UI.updateUpgradeScreen();
            }
            if (typeof UI.renderTalentTree === 'function') {
                UI.renderTalentTree();
            }
            if (typeof UI.updateCardsDisplay === 'function') {
                UI.updateCardsDisplay();
            }
            if (typeof UI.updateMainMenu === 'function') {
                UI.updateMainMenu();
            }
            if (typeof UI.updateSeasonPanel === 'function') {
                UI.updateSeasonPanel();
            }
        }
    },

    getGp() {
        return window.GP || window.__GP_SDK_INSTANCE || window.gp || null;
    },

    getGpPlayer() {
        const gp = this.getGp();
        return gp && gp.player ? gp.player : null;
    },

    getGpPlatform() {
        const gp = this.getGp();
        return gp && gp.platform ? gp.platform : null;
    },

    hasPlayerField(fieldKey) {
        const gpPlayer = this.getGpPlayer();
        if (!gpPlayer || !fieldKey) {
            return false;
        }

        if (Array.isArray(gpPlayer.fields)) {
            return gpPlayer.fields.some((field) => field && field.key === fieldKey);
        }

        return false;
    },

    _t(key, fallback, ...args) {
        if (typeof LocalizationManager !== 'undefined' && typeof LocalizationManager.t === 'function') {
            return LocalizationManager.t(key, fallback, ...args);
        }
        return fallback;
    },

    getDefaultPublicProfileSnapshot() {
        const bestWaveByStage = (typeof SaveManager !== 'undefined' && SaveManager && typeof SaveManager.getDefaultStageBestWaveMap === 'function')
            ? SaveManager.getDefaultStageBestWaveMap()
            : { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

        return {
            v: 1,
            bestWave: 0,
            bestWaveByStage,
            totalKills: 0,
            totalGames: 0,
            frameId: (typeof SaveManager !== 'undefined' && SaveManager && typeof SaveManager.getDefaultProfileFrameId === 'function')
                ? SaveManager.getDefaultProfileFrameId()
                : 'frame_default',
            backgroundId: (typeof SaveManager !== 'undefined' && SaveManager && typeof SaveManager.getDefaultProfileBackgroundId === 'function')
                ? SaveManager.getDefaultProfileBackgroundId()
                : 'bg_default'
        };
    },

    normalizePublicProfileSnapshot(snapshot) {
        const fallback = this.getDefaultPublicProfileSnapshot();
        const raw = snapshot && typeof snapshot === 'object' ? snapshot : {};
        const stageMap = { ...fallback.bestWaveByStage };

        if (raw.bestWaveByStage && typeof raw.bestWaveByStage === 'object') {
            Object.keys(stageMap).forEach((stageKey) => {
                const numericValue = Number(raw.bestWaveByStage[stageKey]);
                stageMap[stageKey] = Number.isFinite(numericValue) ? Math.max(0, Math.floor(numericValue)) : stageMap[stageKey];
            });
        }

        const frameId = (typeof ProfileCosmetics !== 'undefined' && ProfileCosmetics && typeof ProfileCosmetics.sanitizeFrameId === 'function')
            ? ProfileCosmetics.sanitizeFrameId(raw.frameId)
            : fallback.frameId;
        const backgroundId = (typeof ProfileCosmetics !== 'undefined' && ProfileCosmetics && typeof ProfileCosmetics.sanitizeBackgroundId === 'function')
            ? ProfileCosmetics.sanitizeBackgroundId(raw.backgroundId)
            : fallback.backgroundId;

        return {
            v: Math.max(1, Math.floor(Number(raw.v) || fallback.v)),
            bestWave: Math.max(0, Math.floor(Number(raw.bestWave) || fallback.bestWave)),
            bestWaveByStage: stageMap,
            totalKills: Math.max(0, Math.floor(Number(raw.totalKills) || fallback.totalKills)),
            totalGames: Math.max(0, Math.floor(Number(raw.totalGames) || fallback.totalGames)),
            frameId,
            backgroundId
        };
    },

    parsePublicProfileValue(rawValue) {
        if (!rawValue) {
            return this.getDefaultPublicProfileSnapshot();
        }

        let parsed = rawValue;
        if (typeof rawValue === 'string') {
            try {
                parsed = JSON.parse(rawValue);
            } catch (error) {
                console.warn('⚠️ Не удалось распарсить public profile field:', error);
                return this.getDefaultPublicProfileSnapshot();
            }
        }

        return this.normalizePublicProfileSnapshot(parsed);
    },

    buildPublicProfileSnapshot() {
        const stageData = (typeof SaveManager !== 'undefined' && SaveManager && typeof SaveManager.getStageData === 'function')
            ? SaveManager.getStageData()
            : { bestWaveByStage: {} };
        const profilePrivate = (typeof SaveManager !== 'undefined' && SaveManager && typeof SaveManager.getProfilePrivate === 'function')
            ? SaveManager.getProfilePrivate()
            : {
                equippedFrameId: this.getDefaultPublicProfileSnapshot().frameId,
                equippedBackgroundId: this.getDefaultPublicProfileSnapshot().backgroundId
            };

        return this.normalizePublicProfileSnapshot({
            v: 1,
            bestWave: SaveManager.getBestWave ? SaveManager.getBestWave() : 0,
            bestWaveByStage: stageData.bestWaveByStage || {},
            totalKills: SaveManager.getTotalKills ? SaveManager.getTotalKills() : 0,
            totalGames: SaveManager.getTotalGames ? SaveManager.getTotalGames() : 0,
            frameId: profilePrivate.equippedFrameId,
            backgroundId: profilePrivate.equippedBackgroundId
        });
    },

    trackEvent(eventName, payload = {}) {
        console.log(`📈 Event: ${eventName}`, payload || {});
    },

    


    async init() {
        if (this._initialized || this._initInProgress) {
            return;
        }

        this._initInProgress = true;
        console.log('🔐 Инициализация системы авторизации');

        const sdkReady = await this.waitForSDKReady();
        if (!sdkReady) {
            this._initInProgress = false;
            if (!this._initRetryTimer) {
                this._initRetryTimer = setTimeout(() => {
                    this._initRetryTimer = null;
                    this.init();
                }, 500);
            }
            return;
        }
        
        try {
            
            await this.checkAuthStatus();

            
            this.bindPlayerEvents();
            
            
            this.updateAuthUI();
            
            
            await this.loadCloudSave({ forceCloud: true });
            
            
            this.enablePlayerAutoSync();

            
            this.bindLifecycleEvents();

            this._initialized = true;
            console.log('✅ Система авторизации инициализирована');
        } catch (error) {
            console.error('❌ Ошибка инициализации AuthManager:', error);
        } finally {
            this._initInProgress = false;
        }
    },

    


    async checkAuthStatus() {
        const sdkReady = await this.waitForSDKReady(1);
        if (!sdkReady) {
            console.log('ℹ️ SDK еще не готов для проверки авторизации');
            return false;
        }

        try {
            const gpPlayer = this.getGpPlayer();
            if (!gpPlayer) {
                return false;
            }

            
            if (gpPlayer.ready) {
                await gpPlayer.ready;
            }

            this.isAuthorized = gpPlayer.isLoggedIn === true;
            this.playerID = gpPlayer.get('credentials') || gpPlayer.get('id') || null;
            this.playerName = gpPlayer.get('name')
                || (
                    this.isAuthorized
                        ? this._t('authPlayerName', 'Player')
                        : this._t('authGuestName', 'Guest')
                );

            
            if (this.isAuthorized) {
                this.applyRemoteCrystalsFromPlayerField();
            }

            if (this.isAuthorized) {
                console.log(`✅ Пользователь авторизован: ${this.playerName} (ID: ${this.playerID})`);
            } else {
                console.log(`👤 Гостевой вход: ${this.playerName}`);
            }

            return this.isAuthorized;
        } catch (error) {
            console.error('Ошибка проверки авторизации:', error);
        }

        return false;
    },

    


    async showAuthDialog() {
        console.log('🔐 Отображение диалога авторизации');

        const sdkReady = await this.waitForSDKReady();
        if (!sdkReady) {
            const msg = typeof LocalizationManager !== 'undefined'
                ? LocalizationManager.t('authSdkNotReady', 'SDK не готов. Пожалуйста, перезагрузите страницу.')
                : 'SDK не готов. Пожалуйста, перезагрузите страницу.';
            if (typeof UI !== 'undefined' && UI.showNotification) {
                UI.showNotification(msg, '#e74c3c');
            } else {
                console.error(msg);
            }
            return false;
        }

        try {
            const gpPlayer = this.getGpPlayer();
            const platform = this.getGpPlatform();
            const platformType = platform && platform.type ? platform.type : 'CUSTOM';
            const hasIntegratedAuth = Boolean(platform && platform.hasIntegratedAuth);
            const hasSecretCodeAuth = Boolean(platform && platform.isSecretCodeAuthAvailable);

            if (!hasIntegratedAuth && !hasSecretCodeAuth) {
                if (window.UI && UI.showNotification) {
                    UI.showNotification(
                        (typeof LocalizationManager !== 'undefined' && typeof LocalizationManager.t === 'function')
                            ? LocalizationManager.t('authUnavailableOnPlatform', 'Authorization is unavailable on platform: {0}', platformType)
                            : `Authorization is unavailable on platform: ${platformType}`,
                        '#e67e22'
                    );
                }
                console.warn('⚠️ Авторизация недоступна на текущем хосте', {
                    platformType,
                    hasIntegratedAuth,
                    hasSecretCodeAuth
                });
                return false;
            }

            if (!gpPlayer || typeof gpPlayer.login !== 'function') {
                return false;
            }

            await gpPlayer.login();
            const isAuthorized = await this.checkAuthStatus();

            if (isAuthorized) {
                console.log(`✅ Успешная авторизация: ${this.playerName}`);
                this.trackEvent('auth_login_success', { playerId: this.playerID });
                this.updateAuthUI();
                await this.loadCloudSave({ forceCloud: true });

                
                
                return true;
            }

            console.warn('⚠️ Авторизация не выполнена');
            return false;
        } catch (error) {
            console.error('Ошибка авторизации:', error);
            return false;
        }
    },

    




    async waitForSDKReady(attempts = this.sdkWaitAttempts) {
        for (let i = 0; i < attempts; i++) {
            if (this.getGp()) {
                return true;
            }
            await new Promise((resolve) => setTimeout(resolve, this.sdkWaitDelayMs));
        }
        return Boolean(this.getGp());
    },

    


    async logout() {
        console.log('🚪 Выход из аккаунта');

        if (this.isAuthorized) {
            try {
                console.log('☁️ Сохраняем прогресс в облако перед выходом...');
                await this.forceSave(true);
            } catch (error) {
                console.warn('⚠️ Не удалось сохранить прогресс перед выходом:', error);
            }
        }

        try {
            const gpPlayer = this.getGpPlayer();
            const platform = this.getGpPlatform();
            const canLogout = Boolean(platform && platform.isLogoutAvailable);

            if (gpPlayer && typeof gpPlayer.logout === 'function' && canLogout) {
                await gpPlayer.logout();
            }
        } catch (error) {
            console.warn('⚠️ Ошибка выхода из аккаунта:', error);
        }
        
        this.isAuthorized = false;
        this.playerName = 'Guest';
        this.playerID = null;
        
        this.disablePlayerAutoSync();
        this.playerData = null;
        this.resetToGuestProfile();

        this.trackEvent('auth_logout', {});
        this.updateAuthUI();
    },

    


    updateAuthUI() {
        const t = (key, fallback, ...args) => {
            if (typeof LocalizationManager !== 'undefined' && typeof LocalizationManager.t === 'function') {
                return LocalizationManager.t(key, fallback, ...args);
            }

            if (!args || args.length === 0) {
                return fallback;
            }

            return String(fallback).replace(/\{(\d+)\}/g, (m, idx) => {
                const index = Number(idx);
                return Number.isFinite(index) && index < args.length ? String(args[index]) : m;
            });
        };

        
        const authButton = document.getElementById('btnAuth');
        const playerNameElement = document.getElementById('playerName');
        
        if (authButton) {
            if (this.isAuthorized) {
                authButton.textContent = '👤 ' + this.playerName;
                authButton.classList.add('authorized');
                authButton.title = t('authOpenProfileButtonTitle', 'Открыть профиль');
                authButton.onclick = () => {
                    if (window.UI && typeof UI.openSelfProfileModal === 'function') {
                        UI.openSelfProfileModal();
                        return;
                    }

                    this.showLogoutDialog();
                };
            } else {
                authButton.textContent = t('btnAuth', '🔐 Sign In');
                authButton.classList.remove('authorized');
                authButton.title = t('authSignInButtonTitle', 'Sign in to your account');
                authButton.onclick = () => this.showAuthDialog();
            }
        }

        if (playerNameElement) {
            playerNameElement.textContent = this.playerName;
        }

        
        const authIndicator = document.getElementById('authIndicator');
        if (authIndicator) {
            authIndicator.className = this.isAuthorized ? 'auth-indicator authorized' : 'auth-indicator guest';
            authIndicator.title = this.isAuthorized
                ? t('authSignedInStatus', 'Signed in')
                : t('authGuestStatus', 'Guest mode');
        }
    },

    


    showLogoutDialog() {
        const L = typeof LocalizationManager !== 'undefined' ? LocalizationManager : null;
        const t = (key, fallback, ...args) => {
            if (!L) return args.reduce((s, a, i) => s.replace(`{${i}}`, a), fallback);
            return L.t(key, fallback, ...args);
        };

        
        const existing = document.getElementById('authLogoutDialog');
        if (existing) existing.remove();

        const dialog = document.createElement('div');
        dialog.id = 'authLogoutDialog';
        dialog.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.7);display:flex;align-items:center;justify-content:center;z-index:9999;';
        dialog.innerHTML = `
            <div style="background:linear-gradient(135deg,#1a1a2e,#16213e);border:2px solid rgba(255,255,255,0.2);border-radius:16px;padding:30px;max-width:400px;width:90%;text-align:center;color:white;">
                <h3 style="color:#f39c12;margin-bottom:16px;">${t('authLogoutTitle', '⚠️ Выход из аккаунта')}</h3>
                <p style="margin-bottom:8px;">${t('authLogoutDesc', `Вы уверены, что хотите выйти из аккаунта ${this.playerName}?`, this.playerName)}</p>
                <p style="color:rgba(255,255,255,0.7);font-size:0.9em;margin-bottom:24px;">${t('authLogoutWarning', 'Ваш локальный прогресс сохранится.')}</p>
                <div style="display:flex;gap:12px;justify-content:center;">
                    <button id="authLogoutYes" style="background:linear-gradient(135deg,#e74c3c,#c0392b);color:white;border:none;border-radius:8px;padding:10px 24px;cursor:pointer;font-size:1em;">${t('btnYes', 'Да')}</button>
                    <button id="authLogoutNo" style="background:rgba(255,255,255,0.1);color:white;border:1px solid rgba(255,255,255,0.3);border-radius:8px;padding:10px 24px;cursor:pointer;font-size:1em;">${t('btnNo', 'Нет')}</button>
                </div>
            </div>
        `;
        document.body.appendChild(dialog);

        document.getElementById('authLogoutYes').addEventListener('click', () => {
            dialog.remove();
            this.logout();
        });
        document.getElementById('authLogoutNo').addEventListener('click', () => {
            dialog.remove();
        });
        dialog.addEventListener('click', (e) => {
            if (e.target === dialog) dialog.remove();
        });
    },

    async waitForSyncWithTimeout(syncPromise, reason = 'cloud_save') {
        const timeoutMs = Math.max(1000, Number(this._cloudSyncTimeoutMs) || 4500);

        const result = await Promise.race([
            Promise.resolve(syncPromise).then(() => 'success'),
            new Promise((resolve) => {
                setTimeout(() => resolve('timeout'), timeoutMs);
            })
        ]);

        if (result === 'timeout') {
            console.warn(`⚠️ Cloud sync timeout (${reason}) after ${timeoutMs}ms`);
            return false;
        }

        return true;
    },

    

    




    async saveToCloud(isAutoSave = false, isCritical = false) {
        const gpPlayer = this.getGpPlayer();
        if (!gpPlayer) {
            return false;
        }

        try {
            if (gpPlayer.ready) {
                await gpPlayer.ready;
            }

            const now = Date.now();
            const reason = isCritical ? 'critical_save' : 'progress_save';
            const seedsNextGame = typeof SaveManager.getSeedsNextGame === 'function'
                ? SaveManager.getSeedsNextGame()
                : (typeof SaveManager.getSeedsForNextGame === 'function' ? SaveManager.getSeedsForNextGame() : 0);

            const saveData = {
                gameProgress: {
                    crystals: SaveManager.getCrystals(),
                    moonseals: SaveManager.getMoonSeals ? SaveManager.getMoonSeals() : 0,
                    bestWave: SaveManager.getBestWave(),
                    stageData: SaveManager.getStageData ? SaveManager.getStageData() : SaveManager.DEFAULT_STAGE_DATA,
                    seasonState: SaveManager.getSeasonState ? SaveManager.getSeasonState() : null,
                    talentTree: SaveManager.get(SaveManager.KEYS.TALENT_TREE, null),
                    dailyQuests: SaveManager.get('daily_quests', null),
                    upgrades: SaveManager.getUpgrades(),
                    cards: SaveManager.getCards(),
                    altarCards: SaveManager.getAltarCards(),
                    arrows: SaveManager.getArrows(),
                    seedsNextGame,
                    items: SaveManager.getItems(),
                    profilePrivate: SaveManager.getProfilePrivate ? SaveManager.getProfilePrivate() : null,
                    permanentUpgrades: SaveManager.getPermanentUpgrades(),
                    unlockedGardens: SaveManager.getUnlockedGardens(),
                    pactMeta: SaveManager.getPactMeta ? SaveManager.getPactMeta() : null,
                    compensationState: SaveManager.getCompensationState ? SaveManager.getCompensationState() : null,
                    daySystemData: (typeof daySystem !== 'undefined' && daySystem && typeof daySystem.serialize === 'function')
                        ? daySystem.serialize()
                        : SaveManager.getDaySystemData(),
                    stats: SaveManager.getGameHistory(),
                    totalKills: SaveManager.getTotalKills(),
                    totalGames: SaveManager.getTotalGames()
                },
                settings: {
                    soundEnabled: SaveManager.isSoundEnabled(),
                    language: LocalizationManager.getCurrentLanguage(),
                    disableScreenShake: SaveManager.getSetting ? SaveManager.getSetting('disableScreenShake', false) : false,
                    disableHeavyEffects: SaveManager.getSetting ? SaveManager.getSetting('disableHeavyEffects', false) : false
                },
                timestamp: Date.now()
            };

            const publicProfile = this.buildPublicProfileSnapshot();

            gpPlayer.set('progress', JSON.stringify(saveData));
            if (this.hasPlayerField(this.PUBLIC_PROFILE_FIELD_KEY)) {
                gpPlayer.set(this.PUBLIC_PROFILE_FIELD_KEY, JSON.stringify(publicProfile));
            }

            const crystalsValue = Number(saveData.gameProgress && saveData.gameProgress.crystals);
            const normalizedCrystals = Number.isFinite(crystalsValue)
                ? Math.max(0, Math.floor(crystalsValue))
                : null;

            if (normalizedCrystals !== null) {
                gpPlayer.set('crystals', normalizedCrystals);
            }

            const moonSealsValue = Number(saveData.gameProgress && saveData.gameProgress.moonseals);
            const normalizedMoonSeals = Number.isFinite(moonSealsValue)
                ? Math.max(0, Math.floor(moonSealsValue))
                : null;

            if (normalizedMoonSeals !== null && this.hasPlayerField('moonseals')) {
                gpPlayer.set('moonseals', normalizedMoonSeals);
            }

            console.log('☁️ Sync start:', {
                reason,
                isCritical,
                crystals: normalizedCrystals,
                moonseals: normalizedMoonSeals,
                bestWave: saveData.gameProgress.bestWave,
                frameId: publicProfile.frameId,
                backgroundId: publicProfile.backgroundId
            });

            const syncSuccess = await this.waitForSyncWithTimeout(
                gpPlayer.sync({ storage: 'cloud' }),
                reason
            );

            if (!syncSuccess) {
                return false;
            }

            this._lastSaveTime = now;
            SaveManager.set(SaveManager.KEYS.SAVE_TIMESTAMP, saveData.timestamp);

            if (!isAutoSave) {
                console.log('☁️ Прогресс сохранен в облако');
            }

            return true;
        } catch (error) {
            if (!isAutoSave) {
                console.error('Ошибка сохранения в облако:', error);
            }
        }

        return false;
    },

    


    async loadCloudSave(options = {}) {
        const gpPlayer = this.getGpPlayer();
        if (!gpPlayer) {
            console.log('ℹ️ SDK не готов для загрузки облачных данных');
            return false;
        }

        const forceCloud = options.forceCloud !== false;
        const currentPlayerId = this.playerID ? String(this.playerID) : null;
        const switchedProfile = this.isDifferentAuthorizedProfile(currentPlayerId);

        try {
            console.log('☁️ Загрузка данных из облака...');
            if (gpPlayer.ready) {
                await gpPlayer.ready;
            }

            const progressRaw = gpPlayer.get('progress');
            const cloudData = progressRaw ? JSON.parse(progressRaw) : null;
            if (!cloudData) {
                console.log('ℹ️ Облачные данные отсутствуют (первый запуск)');

                if (switchedProfile && currentPlayerId) {
                    this.applyRemoteCrystalsFromPlayerField();
                    this.applyRemoteMoonSealsFromPlayerField();
                    this.resetLocalProfileForNewUser(currentPlayerId);
                    await this.saveToCloud(false);
                    return false;
                }

                if (currentPlayerId) {
                    this.setStoredPlayerId(currentPlayerId);
                }

                
                this.applyRemoteCrystalsFromPlayerField();
                this.applyRemoteMoonSealsFromPlayerField();
                
                
                console.log('☁️ Сохраняем локальный прогресс в облако...');
                await this.saveToCloud(false);
                
                return false;
            }
            
            if (!cloudData.gameProgress) {
                console.log('ℹ️ Облачные данные не содержат gameProgress');

                
                this.applyRemoteCrystalsFromPlayerField();
                this.applyRemoteMoonSealsFromPlayerField();
                if (currentPlayerId) {
                    this.setStoredPlayerId(currentPlayerId);
                }
                return false;
            }
            
            console.log('☁️ Облачные данные загружены успешно');
            console.log('ℹ️ Timestamp облака:', new Date(cloudData.timestamp).toLocaleString());
            
            
            const useCloud = (switchedProfile || forceCloud)
                ? true
                : await this.resolveConflict(cloudData);
            
            if (useCloud) {
                this.applyCloudSave(cloudData);
                if (currentPlayerId) {
                    this.setStoredPlayerId(currentPlayerId);
                }
                this.endCardsCloudSyncPending();
                return true;
            } else {
                
                console.log('☁️ Сохраняем локальные данные в облако...');
                if (currentPlayerId) {
                    this.setStoredPlayerId(currentPlayerId);
                }
                await this.saveToCloud(false);
            }
        } catch (error) {
            console.error('❌ Ошибка загрузки из облака:', error);
        }

        return false;
    },

    


    async resolveConflict(cloudData) {
        const localTimestamp = SaveManager.get(SaveManager.KEYS.SAVE_TIMESTAMP, 0);
        const cloudTimestamp = cloudData.timestamp || 0;
        
        
        if (cloudTimestamp > localTimestamp) {
            return new Promise((resolve) => {
                const L = typeof LocalizationManager !== 'undefined' ? LocalizationManager : null;
                const t = (key, fallback, ...args) => {
                    if (!L) return args.reduce((s, a, i) => s.replace(`{${i}}`, a), fallback);
                    return L.t(key, fallback, ...args);
                };
                const dateStr = new Date(cloudTimestamp).toLocaleString();

                const existing = document.getElementById('authConflictDialog');
                if (existing) existing.remove();

                const dialog = document.createElement('div');
                dialog.id = 'authConflictDialog';
                dialog.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.7);display:flex;align-items:center;justify-content:center;z-index:9999;';
                dialog.innerHTML = `
                    <div style="background:linear-gradient(135deg,#1a1a2e,#16213e);border:2px solid rgba(255,255,255,0.2);border-radius:16px;padding:30px;max-width:420px;width:90%;text-align:center;color:white;">
                        <h3 style="color:#3498db;margin-bottom:16px;">${t('authCloudConflictTitle', '☁️ Облачный прогресс')}</h3>
                        <p style="margin-bottom:8px;">${t('authCloudConflictDesc', `Найден более свежий прогресс в облаке (${dateStr}).`, dateStr)}</p>
                        <p style="color:rgba(255,255,255,0.8);margin-bottom:24px;">${t('authCloudConflictQuestion', 'Использовать облачный прогресс?')}</p>
                        <div style="display:flex;gap:12px;justify-content:center;">
                            <button id="authConflictYes" style="background:linear-gradient(135deg,#3498db,#2980b9);color:white;border:none;border-radius:8px;padding:10px 24px;cursor:pointer;font-size:1em;">${t('btnYes', 'Да')}</button>
                            <button id="authConflictNo" style="background:rgba(255,255,255,0.1);color:white;border:1px solid rgba(255,255,255,0.3);border-radius:8px;padding:10px 24px;cursor:pointer;font-size:1em;">${t('btnNo', 'Нет')}</button>
                        </div>
                    </div>
                `;
                document.body.appendChild(dialog);

                document.getElementById('authConflictYes').addEventListener('click', () => {
                    dialog.remove();
                    resolve(true);
                });
                document.getElementById('authConflictNo').addEventListener('click', () => {
                    dialog.remove();
                    resolve(false);
                });
                dialog.addEventListener('click', (e) => {
                    if (e.target === dialog) { dialog.remove(); resolve(false); }
                });
            });
        }
        
        return false;
    },

    


    applyCloudSave(data) {
        if (!data.gameProgress) return;

        const progress = data.gameProgress;

        this._isApplyingCloudData = true;
        try {
            SaveManager.set(SaveManager.KEYS.CRYSTALS, progress.crystals || 0);
            SaveManager.set(SaveManager.KEYS.MOONSEALS, progress.moonseals || 0);
            SaveManager.set(SaveManager.KEYS.BEST_WAVE, progress.bestWave || 0);
            if (progress.seasonState && typeof SaveManager.setSeasonState === 'function') {
                SaveManager.setSeasonState(progress.seasonState);
            }
            SaveManager.set(SaveManager.KEYS.TALENT_TREE, progress.talentTree || null);
            SaveManager.set('daily_quests', progress.dailyQuests || SaveManager.get('daily_quests', null));
            if (typeof SaveManager.setStageData === 'function') {
                SaveManager.setStageData(progress.stageData || SaveManager.getStageData());
            } else {
                SaveManager.set(SaveManager.KEYS.STAGE_DATA, progress.stageData || SaveManager.getStageData());
            }
            SaveManager.set(SaveManager.KEYS.UPGRADES, progress.upgrades || SaveManager.DEFAULT_UPGRADES);
            SaveManager.set(SaveManager.KEYS.CARDS, progress.cards || []);
            SaveManager.set(SaveManager.KEYS.ALTAR_CARDS, progress.altarCards || []);
            SaveManager.set(SaveManager.KEYS.ARROWS, progress.arrows || []);
            SaveManager.set(SaveManager.KEYS.SEEDS_NEXT_GAME, progress.seedsNextGame || 0);
            const remoteGameHistory = Array.isArray(progress.stats)
                ? progress.stats
                : (Array.isArray(progress.gameHistory) ? progress.gameHistory : null);
            if (remoteGameHistory) {
                SaveManager.set(SaveManager.KEYS.GAME_STATS, remoteGameHistory);
            } else if (!Array.isArray(SaveManager.getGameHistory())) {
                SaveManager.set(SaveManager.KEYS.GAME_STATS, []);
            }
            SaveManager.set(SaveManager.KEYS.TOTAL_KILLS, progress.totalKills || 0);
            SaveManager.set(SaveManager.KEYS.TOTAL_GAMES, progress.totalGames || 0);
            SaveManager.set(SaveManager.KEYS.ITEMS, progress.items || SaveManager.getItems());
            if (typeof SaveManager.setProfilePrivate === 'function') {
                SaveManager.setProfilePrivate(progress.profilePrivate || SaveManager.getProfilePrivate());
            }
            SaveManager.set(SaveManager.KEYS.PERMANENT_UPGRADES, progress.permanentUpgrades || SaveManager.getPermanentUpgrades());
            SaveManager.set(SaveManager.KEYS.UNLOCKED_GARDENS, progress.unlockedGardens || SaveManager.getUnlockedGardens());
            if (progress.pactMeta && typeof SaveManager.setPactMeta === 'function') {
                SaveManager.setPactMeta(progress.pactMeta);
            }
            if (progress.compensationState && typeof SaveManager.setCompensationState === 'function') {
                SaveManager.setCompensationState(progress.compensationState);
            }
            SaveManager.set(SaveManager.KEYS.DAY_SYSTEM, progress.daySystemData || SaveManager.getDaySystemData());

            if (data.settings && typeof data.settings === 'object' && SaveManager.KEYS.SETTINGS) {
                const currentSettings = (typeof SaveManager.getSettings === 'function')
                    ? SaveManager.getSettings()
                    : {};
                const mergedSettings = { ...currentSettings };

                if (Object.prototype.hasOwnProperty.call(data.settings, 'disableScreenShake')) {
                    mergedSettings.disableScreenShake = Boolean(data.settings.disableScreenShake);
                }

                if (Object.prototype.hasOwnProperty.call(data.settings, 'disableHeavyEffects')) {
                    mergedSettings.disableHeavyEffects = Boolean(data.settings.disableHeavyEffects);
                }

                SaveManager.set(SaveManager.KEYS.SETTINGS, mergedSettings);
            }

            SaveManager.set(SaveManager.KEYS.SAVE_TIMESTAMP, data.timestamp || Date.now());
        } finally {
            this._isApplyingCloudData = false;
        }

        if (typeof daySystem !== 'undefined' && daySystem && typeof daySystem.deserialize === 'function') {
            daySystem.deserialize(SaveManager.getDaySystemData());
        }

        if (window.Game && Game.questSystem && typeof Game.questSystem.loadQuests === 'function') {
            Game.questSystem.loadQuests();
            Game.questSystem.checkDailyRefresh();
            Game.questSystem.updateUI();
        }

        if (window.Game && Game.cardEffects && typeof Game.cardEffects.loadActiveCards === 'function') {
            Game.cardEffects.loadActiveCards();
        }
        if (typeof TalentTree !== 'undefined' && TalentTree && typeof TalentTree.reloadState === 'function') {
            TalentTree.reloadState();
        }
        if (typeof permanentUpgradeManager !== 'undefined' && permanentUpgradeManager && typeof permanentUpgradeManager.reloadFromSave === 'function') {
            permanentUpgradeManager.reloadFromSave();
        }

        if (typeof SeasonSystem !== 'undefined' && SeasonSystem && typeof SeasonSystem.init === 'function') {
            SeasonSystem.init();
        }

        
        this.applyRemoteCrystalsFromPlayerField();
        this.applyRemoteMoonSealsFromPlayerField();

        if (window.UI && UI.updateMainMenu) {
            UI.updateMainMenu();
            if (typeof UI.updateUpgradeScreen === 'function') {
                UI.updateUpgradeScreen();
            }
            if (typeof UI.renderTalentTree === 'function') {
                UI.renderTalentTree();
            }
            if (typeof UI.updateCardsDisplay === 'function') {
                const collection = document.getElementById('cardsCollection');
                if (collection) {
                    delete collection.dataset.cardsKey;
                }
                UI.updateCardsDisplay();
            }
            if (typeof UI.updateSeasonPanel === 'function') {
                UI.updateSeasonPanel();
            }
        }

        console.log('✅ Облачные данные применены');
    },

    

    


    getPlayerInfo() {
        const gpPlayer = this.getGpPlayer();
        return {
            id: this.playerID,
            name: this.playerName,
            avatar: gpPlayer && typeof gpPlayer.get === 'function' ? gpPlayer.get('avatar') : '',
            isAuthorized: this.isAuthorized
        };
    },

    


    isLoggedIn() {
        return this.isAuthorized;
    },

    

    


    async forceSave(isCritical = false) {
        console.log(isCritical ? '☁️ Критическое сохранение...' : '☁️ Сохранение прогресса...');
        const saved = await this.flushCloudSave(false, isCritical);
        if (saved) {
            this.endCardsCloudSyncPending();
        }
        return saved;
    },

    markCloudFresh() {
        this._lastSaveTime = Date.now();
    },

    hasFreshLocalCardState(maxAgeMs = 5000) {
        return (Date.now() - Number(this._lastSaveTime || 0)) <= maxAgeMs;
    },

    


    bindLifecycleEvents() {
        if (this._lifecycleEventsBound || typeof document === 'undefined' || typeof window === 'undefined') {
            return;
        }

        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.forceSave(true);
            }
        });

        window.addEventListener('pagehide', () => {
            this.forceSave(true);
        });

        this._lifecycleEventsBound = true;
    },

    shouldSyncKeyToCloud(key) {
        if (!key) return false;

        if (!this._criticalSaveKeys) {
            this._criticalSaveKeys = new Set([
                SaveManager.KEYS.CRYSTALS,
                SaveManager.KEYS.MOONSEALS,
                SaveManager.KEYS.BEST_WAVE,
                SaveManager.KEYS.UPGRADES,
                SaveManager.KEYS.CARDS,
                SaveManager.KEYS.ALTAR_CARDS,
                SaveManager.KEYS.ARROWS,
                SaveManager.KEYS.SEEDS_NEXT_GAME,
                SaveManager.KEYS.ITEMS,
                SaveManager.KEYS.PROFILE_PRIVATE,
                SaveManager.KEYS.PERMANENT_UPGRADES,
                SaveManager.KEYS.UNLOCKED_GARDENS,
                SaveManager.KEYS.PACT_META,
                SaveManager.KEYS.COMPENSATION_STATE,
                SaveManager.KEYS.STAGE_DATA,
                SaveManager.KEYS.DAY_SYSTEM,
                SaveManager.KEYS.SETTINGS,
                SaveManager.KEYS.GAME_STATS,
                SaveManager.KEYS.TOTAL_KILLS,
                SaveManager.KEYS.TOTAL_GAMES,
                'daily_quests'
            ]);
        }

        return this._criticalSaveKeys.has(key);
    },

    isCriticalSaveKey(key) {
        return this.shouldSyncKeyToCloud(key)
            && key !== SaveManager.KEYS.CRYSTALS
            && key !== SaveManager.KEYS.MOONSEALS;
    },

    isCriticalSaveReason(reason = '') {
        return true;
    },

    queueCloudSaveRequest(isAutoSave = true, isCritical = false) {
        const hadQueuedRequest = this._hasQueuedCloudSave;
        this._hasQueuedCloudSave = true;
        this._queuedCloudSaveIsAuto = hadQueuedRequest
            ? (this._queuedCloudSaveIsAuto && isAutoSave)
            : isAutoSave;
        this._queuedCloudSaveIsCritical = this._queuedCloudSaveIsCritical || isCritical;
    },

    consumeQueuedCloudSaveRequest() {
        if (!this._hasQueuedCloudSave) {
            return null;
        }

        const queued = {
            isAutoSave: this._queuedCloudSaveIsAuto,
            isCritical: this._queuedCloudSaveIsCritical
        };

        this._hasQueuedCloudSave = false;
        this._queuedCloudSaveIsAuto = true;
        this._queuedCloudSaveIsCritical = false;
        return queued;
    },

    requestCloudSave(reason = 'progress_update', immediate = false, forceCritical = null) {
        if (this._isApplyingCloudData) {
            return Promise.resolve(false);
        }

        const isCritical = typeof forceCritical === 'boolean'
            ? forceCritical
            : this.isCriticalSaveReason(reason);

        return this.flushCloudSave(false, isCritical);
    },

    




    async flushCloudSave(isAutoSave = true, isCritical = false) {
        if (this._isApplyingCloudData) {
            return false;
        }

        this.queueCloudSaveRequest(isAutoSave, isCritical);

        if (this._activeCloudSavePromise) {
            return this._activeCloudSavePromise;
        }

        this._activeCloudSavePromise = (async () => {
            this._isCloudSaveInProgress = true;
            let success = false;

            try {
                let nextRequest = this.consumeQueuedCloudSaveRequest();

                while (nextRequest) {
                    const saveSuccess = await this.saveToCloud(nextRequest.isAutoSave, nextRequest.isCritical);
                    success = saveSuccess || success;
                    nextRequest = this.consumeQueuedCloudSaveRequest();
                }
            } finally {
                this._isCloudSaveInProgress = false;
                this._hasQueuedCloudSave = false;
                this._queuedCloudSaveIsAuto = true;
                this._queuedCloudSaveIsCritical = false;
                this._activeCloudSavePromise = null;
            }

            return success;
        })();

        return this._activeCloudSavePromise;
    },

    



    applyRemoteCrystalsFromPlayerField() {
        const gpPlayer = this.getGpPlayer();
        if (!gpPlayer || typeof gpPlayer.get !== 'function') {
            return false;
        }

        const remoteRaw = gpPlayer.get('crystals');
        const remoteCrystals = Number(remoteRaw);
        if (!Number.isFinite(remoteCrystals)) {
            return false;
        }

        const normalized = Math.max(0, Math.floor(remoteCrystals));
        const localCrystals = Number(SaveManager.getCrystals() || 0);

        if (normalized !== localCrystals) {
            SaveManager.setCrystals(normalized);
            console.log(`💎 Синхронизация crystals из player field: ${localCrystals} → ${normalized}`);
            if (window.UI && UI.updateMainMenu) {
                UI.updateMainMenu();
            }
        }

        return true;
    },

    applyRemoteMoonSealsFromPlayerField() {
        const gpPlayer = this.getGpPlayer();
        if (!gpPlayer || typeof gpPlayer.get !== 'function') {
            return false;
        }

        const remoteRaw = gpPlayer.get('moonseals');
        const remoteMoonSeals = Number(remoteRaw);
        if (!Number.isFinite(remoteMoonSeals)) {
            return false;
        }

        const normalized = Math.max(0, Math.floor(remoteMoonSeals));
        const localMoonSeals = Number(SaveManager.getMoonSeals ? SaveManager.getMoonSeals() : 0);

        if (normalized !== localMoonSeals) {
            SaveManager.setMoonSeals(normalized);
            console.log(`🌙 Синхронизация moonseals из player field: ${localMoonSeals} → ${normalized}`);
            if (window.UI && UI.updateMainMenu) {
                UI.updateMainMenu();
                if (typeof UI.updateCrystalStoreScreen === 'function') {
                    UI.updateCrystalStoreScreen();
                }
            }
        }

        return true;
    },

    


    bindPlayerEvents() {
        const gpPlayer = this.getGpPlayer();
        if (!gpPlayer || typeof gpPlayer.on !== 'function' || this._playerEventsBound) {
            return;
        }

        gpPlayer.on('login', async (success) => {
            if (!success) return;
            await this.checkAuthStatus();
            await this.loadCloudSave({ forceCloud: true });
            this.updateAuthUI();
        });

        gpPlayer.on('logout', async () => {
            this.isAuthorized = false;
            this.playerName = 'Guest';
            this.playerID = null;
            this.disablePlayerAutoSync();
            this.playerData = null;
            this.resetToGuestProfile();
            this.updateAuthUI();
        });

        gpPlayer.on('sync', (success) => {
            if (success) {
                console.log('☁️ Player sync успешен');
            }
        });

        this._playerEventsBound = true;
    },

    


    enablePlayerAutoSync() {
        const gpPlayer = this.getGpPlayer();
        if (!gpPlayer || typeof gpPlayer.enableAutoSync !== 'function') {
            return;
        }

        if (this._playerAutoSyncEnabled) {
            return;
        }

        try {
            gpPlayer.enableAutoSync({ interval: 30, storage: 'cloud' });
            this._playerAutoSyncEnabled = true;
        } catch (error) {
            console.warn('⚠️ Не удалось включить player auto sync:', error);
        }
    },

    


    disablePlayerAutoSync() {
        const gpPlayer = this.getGpPlayer();
        if (!gpPlayer || typeof gpPlayer.disableAutoSync !== 'function') {
            return;
        }

        if (!this._playerAutoSyncEnabled) {
            return;
        }

        try {
            gpPlayer.disableAutoSync({ storage: 'cloud' });
            this._playerAutoSyncEnabled = false;
        } catch (error) {
            console.warn('⚠️ Не удалось выключить player auto sync:', error);
        }
    }
};

window.AuthManager = AuthManager;


if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        
        setTimeout(() => AuthManager.init(), 500);
    });
} else {
    
    setTimeout(() => AuthManager.init(), 500);
}
