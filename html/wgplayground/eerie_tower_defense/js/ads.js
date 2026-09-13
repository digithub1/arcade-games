




const AdsManager = {
    
    isAdBlocked: false,
    lastInterstitialTime: 0,
    interstitialCooldown: 90000, 

    rewardedDefaultAmount: 50,
    rewardedDailyLimit: 10,
    rewardedDailyStorageKey: 'td_rewarded_daily_usage',

    
    _rewardedEventSeq: 0,
    _lastRewardedStartAt: 0,
    _lastRewardedCloseAt: 0,
    _lastRewardedRewardAt: 0,
    _lastRewardedCloseSuccess: false,

    
    _uiVisibilityInitialized: false,

    
    _activeAdEventsCounter: 0,

    
    _stickyVisible: false,
    _stickyRequestedVisible: false,

    _markAdStarted(isFullscreenAd = true) {
        if (isFullscreenAd) {
            this._activeAdEventsCounter = Math.max(0, (this._activeAdEventsCounter || 0)) + 1;
            this.syncSdkAdSoundState();
        }
    },

    _markAdClosed(isFullscreenAd = true) {
        if (isFullscreenAd) {
            this._activeAdEventsCounter = Math.max(0, (this._activeAdEventsCounter || 0) - 1);
            this.syncSdkAdSoundState();
        }
    },

    _isDocumentActive() {
        const hasFocus = typeof document.hasFocus === 'function' ? document.hasFocus() : true;
        return !document.hidden && hasFocus;
    },

    _isManualPauseActive() {
        return Boolean(window.Game && Game._manualPauseTriggered);
    },

    _isUpgradeSelectionActive() {
        return Boolean(window.Game && Game.xpSystem && Game.xpSystem.isSelectingUpgrade);
    },

    _canResumeGameplay() {
        return this._isDocumentActive()
            && !this._isManualPauseActive()
            && !this._isUpgradeSelectionActive();
    },

    requestSdkPause(reason = 'ads') {
        
        
        
        window.__gpLifecyclePaused = true;

        if (window.AudioManager && typeof AudioManager.pauseAll === 'function') {
            try {
                AudioManager.pauseAll();
            } catch (error) {
                console.error('❌ Ошибка AudioManager.pauseAll():', error);
            }
        }

        if (window.Game) {
            Game.isPaused = true;
        }

        const gp = window.GP || window.__GP_SDK_INSTANCE || window.gp || null;
        if (gp && typeof gp.pause === 'function') {
            try {
                gp.pause();
                console.log('⏸️ GP pause requested from AdsManager:', reason);
                return true;
            } catch (error) {
                console.warn('⚠️ GP pause failed from AdsManager:', reason, error);
            }
        }

        return false;
    },

    requestSdkResume(reason = 'ads') {
        if (!this._canResumeGameplay()) {
            console.log('▶️ GP resume blocked in AdsManager (lifecycle/manual block):', reason);
            return false;
        }

        const adsState = this.getAdsPlatformState();
        const adStillPlaying = adsState.isFullscreenPlaying
            || adsState.isRewardedPlaying
            || adsState.isPreloaderPlaying
            || (this._activeAdEventsCounter || 0) > 0;

        if (adStillPlaying) {
            console.log('▶️ GP resume blocked in AdsManager (another ad still active):', reason);
            return false;
        }

        const gp = window.GP || window.__GP_SDK_INSTANCE || window.gp || null;
        if (gp && typeof gp.resume === 'function') {
            try {
                gp.resume();
                console.log('▶️ GP resume requested from AdsManager:', reason);
                return true;
            } catch (error) {
                console.warn('⚠️ GP resume failed from AdsManager:', reason, error);
            }
        }

        window.__gpLifecyclePaused = false;

        if (window.AudioManager && typeof AudioManager.resumeAll === 'function') {
            AudioManager.resumeAll();
        }

        if (window.Game) {
            Game.isPaused = false;
            Game.lastTime = performance.now();
        }

        return true;
    },

    syncSdkAdSoundState() {
        return;
    },

    _getGpAds() {
        const gpInstance = this._getGpInstance();
        return gpInstance && gpInstance.ads ? gpInstance.ads : null;
    },

    _getGpInstance() {
        return window.GP || window.__GP_SDK_INSTANCE || window.gp || null;
    },

    _isAdsOriginAllowed() {
        const gpInstance = this._getGpInstance();
        return !gpInstance || gpInstance.isAllowedOrigin !== false;
    },

    _isLikelyAdBlockError(error) {
        const raw = [
            error && error.name ? String(error.name) : '',
            error && error.message ? String(error.message) : ''
        ].join(' ').toLowerCase();

        return raw.includes('adblock')
            || raw.includes('ad block')
            || raw.includes('err_blocked_by_client')
            || raw.includes('blocked by client');
    },

    t(key, fallback, ...args) {
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
    },

    






    _readAdsFlag(ads, key, fallback = false) {
        if (!ads) {
            return fallback;
        }

        const value = ads[key];

        if (typeof value === 'function') {
            try {
                return Boolean(value.call(ads));
            } catch (error) {
                console.warn('⚠️ Ошибка чтения ads-флага ' + key + ':', error);
                return fallback;
            }
        }

        if (value === undefined || value === null) {
            return fallback;
        }

        return Boolean(value);
    },

    




    _hasAdsAvailabilityInfo(ads) {
        if (!ads) {
            return false;
        }

        return 'isStickyAvailable' in ads
            || 'isFullscreenAvailable' in ads
            || 'isRewardedAvailable' in ads
            || 'isPreloaderAvailable' in ads;
    },

    





    getEffectiveInterstitialCooldown() {
        return this.interstitialCooldown;
    },

    



    getFullscreenOptions() {
        return null;
    },

    



    getRewardedOptions() {
        return null;
    },

    




    async showRewardedWithOptions(ads) {
        const rewardedOptions = this.getRewardedOptions();

        if (typeof ads.showRewardedVideo === 'function') {
            if (rewardedOptions) {
                return ads.showRewardedVideo(rewardedOptions);
            }

            return ads.showRewardedVideo();
        }

        if (typeof ads.showRewarded === 'function') {
            return ads.showRewarded();
        }

        throw new Error('Метод показа rewarded рекламы недоступен');
    },

    



    getAdsPlatformState() {
        const ads = this._getGpAds();
        if (!ads) {
            return {
                sdkReady: false,
                isAdblockEnabled: false,
                isStickyAvailable: false,
                isFullscreenAvailable: false,
                isRewardedAvailable: false,
                isPreloaderAvailable: false,
                isStickyPlaying: false,
                isFullscreenPlaying: false,
                isRewardedPlaying: false,
                isPreloaderPlaying: false,
                isCountdownOverlayEnabled: false,
                isRewardedFailedOverlayEnabled: false,
                canShowFullscreenBeforeGamePlay: false,
                hasShowRewardedVideoMethod: false,
                hasShowRewardedMethod: false,
                hasShowFullscreenMethod: false,
                hasShowStickyMethod: false,
                hasShowPreloaderMethod: false
            };
        }

        return {
            sdkReady: true,
            isAdblockEnabled: this._readAdsFlag(ads, 'isAdblockEnabled', false),
            isStickyAvailable: this._readAdsFlag(ads, 'isStickyAvailable', false),
            isFullscreenAvailable: this._readAdsFlag(ads, 'isFullscreenAvailable', false),
            isRewardedAvailable: this._readAdsFlag(ads, 'isRewardedAvailable', false),
            isPreloaderAvailable: this._readAdsFlag(ads, 'isPreloaderAvailable', false),
            isStickyPlaying: this._readAdsFlag(ads, 'isStickyPlaying', false),
            isFullscreenPlaying: this._readAdsFlag(ads, 'isFullscreenPlaying', false),
            isRewardedPlaying: this._readAdsFlag(ads, 'isRewardedPlaying', false),
            isPreloaderPlaying: this._readAdsFlag(ads, 'isPreloaderPlaying', false),
            isCountdownOverlayEnabled: this._readAdsFlag(ads, 'isCountdownOverlayEnabled', false),
            isRewardedFailedOverlayEnabled: this._readAdsFlag(ads, 'isRewardedFailedOverlayEnabled', false),
            canShowFullscreenBeforeGamePlay: this._readAdsFlag(ads, 'canShowFullscreenBeforeGamePlay', false),
            hasShowRewardedVideoMethod: typeof ads.showRewardedVideo === 'function',
            hasShowRewardedMethod: typeof ads.showRewarded === 'function',
            hasShowFullscreenMethod: typeof ads.showFullscreen === 'function',
            hasShowStickyMethod: typeof ads.showSticky === 'function',
            hasShowPreloaderMethod: typeof ads.showPreloader === 'function'
        };
    },

    



    isRewardedAvailable() {
        const state = this.getAdsPlatformState();
        return state.isRewardedAvailable;
    },

    



    isFullscreenAvailable() {
        const state = this.getAdsPlatformState();
        return state.isFullscreenAvailable;
    },

    



    isAnyAdPlaying() {
        const state = this.getAdsPlatformState();
        return state.isFullscreenPlaying
            || state.isRewardedPlaying
            || state.isPreloaderPlaying
            || (this._activeAdEventsCounter || 0) > 0;
    },

    



    isLeaderboardAvailable() {
        const gpInstance = window.GP || window.__GP_SDK_INSTANCE || window.gp || null;
        if (!gpInstance || !gpInstance.leaderboard) {
            
            return true;
        }

        
        
        const isSupported = gpInstance.leaderboard.isSupported;
        return isSupported !== false;
    },

    



    isAchievementsAvailable() {
        const gpInstance = window.GP || window.__GP_SDK_INSTANCE || window.gp || null;
        if (!gpInstance || !gpInstance.achievements) {
            
            return true;
        }

        
        const isAvailable = gpInstance.achievements.isAvailable;
        return isAvailable !== false;
    },

    



    isPaymentsAvailable() {
        const gpInstance = window.GP || window.__GP_SDK_INSTANCE || window.gp || null;
        if (!gpInstance || !gpInstance.payments) {
            
            return true;
        }

        
        const isAvailable = gpInstance.payments.isAvailable;
        return isAvailable !== false;
    },

    


    updateAdRelatedUIVisibility() {
        const ads = this._getGpAds();
        const rewardedAvailability = this._readAdsFlag(ads, 'isRewardedAvailable', null);
        const isRewarded = rewardedAvailability !== false;

        
        const rewardedButtons = [
            'btnCrystalStoreRewardedAd',
            'btnRevive',
            'btnReviveOfferYes'
        ];

        rewardedButtons.forEach((btnId) => {
            const btn = document.getElementById(btnId);
            if (btn) {
                if (isRewarded) {
                    btn.classList.remove('hidden');
                    btn.style.display = '';
                } else {
                    btn.classList.add('hidden');
                    btn.style.display = 'none';
                }
            }
        });

        
        const crystalStoreActions = document.querySelector('.crystal-store-actions');
        if (crystalStoreActions) {
            if (isRewarded) {
                crystalStoreActions.classList.remove('hidden');
                crystalStoreActions.style.display = '';
            } else {
                crystalStoreActions.classList.add('hidden');
                crystalStoreActions.style.display = 'none';
            }
        }

        
        const reviveOfferModal = document.getElementById('reviveOfferModal');
        if (reviveOfferModal && rewardedAvailability === false) {
            reviveOfferModal.classList.add('hidden');
        }

        this.updateRewardedAdButtonState();

        console.log('📺 UI visibility updated: rewarded=' + isRewarded + ', raw=' + rewardedAvailability);
    },

    


    updateRewardedAdButtonState() {
        const rewardedButton = document.getElementById('btnCrystalStoreRewardedAd');
        if (!rewardedButton) {
            return;
        }

        const badge = rewardedButton.querySelector('.reward-badge');
        const caption = rewardedButton.querySelector('.reward-caption');
        const limitState = this.checkRewardedDailyLimit();

        if (badge) {
            let badgeText = '+50 💎';
            if (limitState.limit > 0) {
                const remaining = Math.max(limitState.limit - limitState.used, 0);
                badgeText += ' · ' + remaining + '/' + limitState.limit;
            }
            badge.textContent = badgeText;
        }

        if (caption) {
            caption.textContent = this.t('adsRewardCaption', 'Get +50 💎 for watching');
        }

        const hasLimit = limitState.limit > 0;
        rewardedButton.disabled = hasLimit && !limitState.canShow;
        rewardedButton.setAttribute('aria-disabled', rewardedButton.disabled ? 'true' : 'false');

        if (hasLimit) {
            const remaining = Math.max(limitState.limit - limitState.used, 0);
            rewardedButton.title = this.t('adsViewsAvailableToday', 'Views available today: {0}/{1}', remaining, limitState.limit);
        } else {
            rewardedButton.removeAttribute('title');
        }
    },

    


    updateBackendFeaturesVisibility() {
        const isLeaderboard = this.isLeaderboardAvailable();
        const isAchievements = this.isAchievementsAvailable();
        const isPayments = this.isPaymentsAvailable();

        
        const leaderboardPanel = document.querySelector('.leaderboard-panel');
        if (leaderboardPanel) {
            if (isLeaderboard) {
                leaderboardPanel.classList.remove('hidden');
                leaderboardPanel.style.display = '';
            } else {
                leaderboardPanel.classList.add('hidden');
                leaderboardPanel.style.display = 'none';
            }
        }

        
        const btnOpenMobileLeaderboard = document.getElementById('btnOpenMobileLeaderboard');
        if (btnOpenMobileLeaderboard) {
            if (isLeaderboard) {
                btnOpenMobileLeaderboard.classList.remove('hidden');
                btnOpenMobileLeaderboard.style.display = '';
            } else {
                btnOpenMobileLeaderboard.classList.add('hidden');
                btnOpenMobileLeaderboard.style.display = 'none';
            }
        }

        
        const btnAchievements = document.getElementById('btnAchievements');
        if (btnAchievements) {
            if (isAchievements) {
                btnAchievements.classList.remove('hidden');
                btnAchievements.style.display = '';
            } else {
                btnAchievements.classList.add('hidden');
                btnAchievements.style.display = 'none';
            }
        }

        
        const btnCrystalStore = document.getElementById('btnCrystalStore');
        if (btnCrystalStore) {
            if (isPayments) {
                btnCrystalStore.classList.remove('hidden');
                btnCrystalStore.style.display = '';
            } else {
                btnCrystalStore.classList.add('hidden');
                btnCrystalStore.style.display = 'none';
            }
        }

        console.log('🔧 Backend features visibility updated: leaderboard=' + isLeaderboard + ', achievements=' + isAchievements + ', payments=' + isPayments);
    },

    


    init() {
        console.log('📺 Инициализация системы рекламы');

        this.applyRuntimeConfig();

        
        this.bindGamePushAdEvents();

        
        this.logAdDiagnostics();
        
        
        
        

        
        this.initUIVisibility();
    },

    


    initUIVisibility() {
        if (this._uiVisibilityInitialized) {
            return;
        }

        const tryUpdate = (attempt = 0) => {
            const ads = this._getGpAds();
            if (!this._hasAdsAvailabilityInfo(ads)) {
                if (attempt < 25) {
                    setTimeout(() => tryUpdate(attempt + 1), 200);
                } else {
                    if (attempt === 25) {
                        console.warn('⚠️ Ads SDK ещё не готов, оставляем ad-UI видимым и продолжаем ожидание');
                    }

                    this.updateAdRelatedUIVisibility();
                    this.updateBackendFeaturesVisibility();
                    setTimeout(() => tryUpdate(attempt + 1), 1000);
                }
                return;
            }

            this._uiVisibilityInitialized = true;
            this.updateAdRelatedUIVisibility();
            this.updateBackendFeaturesVisibility();
        };

        tryUpdate();
    },

    applyRuntimeConfig() {
        const runtime = window.BalanceRuntime;
        if (!runtime || typeof runtime.get !== 'function') {
            return;
        }

        const rewardedDefaultAmount = Number(runtime.get('economy.rewardedDefaultAmount', this.rewardedDefaultAmount));
        const rewardedDailyLimit = Number(runtime.get('economy.rewardedDailyLimit', this.rewardedDailyLimit));
        const interstitialCooldown = Number(runtime.get('economy.interstitialCooldownMs', this.interstitialCooldown));

        if (Number.isFinite(rewardedDefaultAmount) && rewardedDefaultAmount > 0) {
            this.rewardedDefaultAmount = Math.floor(rewardedDefaultAmount);
        }

        if (Number.isFinite(rewardedDailyLimit) && rewardedDailyLimit >= 0) {
            this.rewardedDailyLimit = Math.floor(rewardedDailyLimit);
        }

        if (Number.isFinite(interstitialCooldown) && interstitialCooldown > 0) {
            this.interstitialCooldown = Math.floor(interstitialCooldown);
        }
    },

    


    bindGamePushAdEvents() {
        const tryBind = (attempt = 0) => {
            const ads = this._getGpAds();
            if (!ads || typeof ads.on !== 'function') {
                if (attempt < 50) {
                    
                    
                    setTimeout(() => tryBind(attempt + 1), 250);
                } else {
                    console.warn('⚠️ Не удалось подписаться на события рекламы после 50 попыток');
                }
                return;
            }

            console.log('✅ Подписка на события рекламы установлена');
            this._activeAdEventsCounter = 0;
            this.updateAdRelatedUIVisibility();
            this.updateBackendFeaturesVisibility();

            ads.on('start', () => {
                
                
                
                console.log('📺 ADS: START (generic event)');
            });

            ads.on('close', () => {
                console.log('📺 ADS: CLOSE (generic event)');
            });

            ads.on('fullscreen:start', () => {
                this._markAdStarted(true);
                this.requestSdkPause('fullscreen:start');
            });

            ads.on('fullscreen:close', () => {
                this._markAdClosed(true);
                if (!this.requestSdkResume('fullscreen:close')) {
                    setTimeout(() => this.requestSdkResume('fullscreen:close:deferred'), 60);
                }
            });

            ads.on('preloader:start', () => {
                this._markAdStarted(true);
                console.log('📺 PRELOADER: START');
                this.requestSdkPause('preloader:start');
            });

            ads.on('preloader:close', (success) => {
                this._markAdClosed(true);
                console.log('📺 PRELOADER: CLOSE, success=', success);
                if (!this.requestSdkResume('preloader:close')) {
                    setTimeout(() => this.requestSdkResume('preloader:close:deferred'), 60);
                }
            });

            ads.on('sticky:start', () => {
                this._stickyVisible = true;
                this._stickyRequestedVisible = true;
                console.log('📺 STICKY: START (звук продолжает играть)');
            });

            ads.on('sticky:render', () => {
                this._stickyVisible = true;
                this._stickyRequestedVisible = true;
                console.log('📺 STICKY: RENDER');
            });

            ads.on('sticky:refresh', () => {
                this._stickyRequestedVisible = true;
                console.log('📺 STICKY: REFRESH');
            });

            ads.on('sticky:close', () => {
                this._stickyVisible = false;
                this._stickyRequestedVisible = false;
                console.log('📺 STICKY: CLOSE');
            });

            ads.on('rewarded:start', () => {
                this._markAdStarted(true);
                this._rewardedEventSeq += 1;
                this._lastRewardedStartAt = Date.now();

                this.requestSdkPause('rewarded:start');
            });

            ads.on('rewarded:close', (success) => {
                this._markAdClosed(true);
                this._rewardedEventSeq += 1;
                this._lastRewardedCloseAt = Date.now();
                this._lastRewardedCloseSuccess = success === true;

                if (!this.requestSdkResume('rewarded:close')) {
                    setTimeout(() => this.requestSdkResume('rewarded:close:deferred'), 60);
                }
            });

            ads.on('rewarded:reward', () => {
                this._rewardedEventSeq += 1;
                this._lastRewardedRewardAt = Date.now();
            });
        };

        tryBind();
    },

    


    logAdDiagnostics() {
        const adsState = this.getAdsPlatformState();
        if (!adsState.sdkReady) {
            console.log('ℹ️ Ads diagnostics: SDK ещё загружается...');
            return;
        }

        console.log('📺 Ads diagnostics:', adsState);
        console.log('📺 Effective interstitial cooldown (ms):', this.getEffectiveInterstitialCooldown());

        
        if (!adsState.isRewardedAvailable) {
            console.warn('⚠️ Rewarded ads недоступны на текущей платформе');
            console.warn('⚠️ Возможные причины:');
            console.warn('   1. Локальная разработка (не на production домене)');
            console.warn('   2. Платформа не поддерживает rewarded ads');
            console.warn('   3. SDK ещё не полностью инициализирован');
            console.warn('   4. Блокировщик рекламы (isAdblockEnabled:', adsState.isAdblockEnabled, ')');
        }
    },

    


    showStickyBanner() {
        const ads = this._getGpAds();
        if (!ads || typeof ads.showSticky !== 'function') {
            return false;
        }

        const adsState = this.getAdsPlatformState();
        if (adsState.isFullscreenPlaying || adsState.isRewardedPlaying || adsState.isPreloaderPlaying) {
            return false;
        }

        if (this._stickyVisible || this._stickyRequestedVisible) {
            return true;
        }

        if (this._readAdsFlag(ads, 'isStickyPlaying', false)) {
            this._stickyVisible = true;
            this._stickyRequestedVisible = true;
            return true;
        }

        try {
            this._stickyRequestedVisible = true;
            ads.showSticky();
            return true;
        } catch (error) {
            this._stickyRequestedVisible = false;
            console.warn('⚠️ showSticky ошибка:', error);
            return false;
        }
    },

    


    refreshStickyBanner() {
        const ads = this._getGpAds();
        if (!ads || typeof ads.refreshSticky !== 'function') {
            return false;
        }

        try {
            this._stickyRequestedVisible = true;
            ads.refreshSticky();
            return true;
        } catch (error) {
            console.warn('⚠️ refreshSticky ошибка:', error);
            return false;
        }
    },

    


    closeStickyBanner() {
        const ads = this._getGpAds();
        if (!ads || typeof ads.closeSticky !== 'function') {
            this._stickyVisible = false;
            this._stickyRequestedVisible = false;
            return false;
        }

        if (!this._stickyVisible && !this._stickyRequestedVisible && !this._readAdsFlag(ads, 'isStickyPlaying', false)) {
            return true;
        }

        try {
            this._stickyVisible = false;
            this._stickyRequestedVisible = false;
            ads.closeSticky();
            return true;
        } catch (error) {
            console.warn('⚠️ closeSticky ошибка:', error);
            return false;
        }
    },

    


    showBanner() {
        return this.showStickyBanner();
    },

    


    hideBanner() {
        return this.closeStickyBanner();
    },

    


    async showInterstitial(options = null) {
        const ads = this._getGpAds();
        if (!ads) {
            console.warn('⚠️ GamePush ads не инициализированы');
            return false;
        }

        const ignoreCooldown = Boolean(options && options.ignoreCooldown);

        const adsState = this.getAdsPlatformState();

        
        if (!adsState.isFullscreenAvailable) {
            console.log('📺 Fullscreen реклама недоступна');
            return false;
        }

        if (adsState.isFullscreenPlaying || adsState.isRewardedPlaying || adsState.isPreloaderPlaying) {
            console.log('📺 Реклама уже воспроизводится, fullscreen пропущен');
            return false;
        }

        
        const now = Date.now();
        const cooldownMs = this.getEffectiveInterstitialCooldown();
        if (!ignoreCooldown && now - this.lastInterstitialTime < cooldownMs) {
            console.log('📺 Interstitial на cooldown (' + cooldownMs + 'ms)');
            return false;
        }

        try {
            console.log('📺 Показываем Interstitial рекламу');

            const fullscreenOptions = this.getFullscreenOptions();
            const result = fullscreenOptions
                ? await ads.showFullscreen(fullscreenOptions)
                : await ads.showFullscreen();
            this.lastInterstitialTime = now;
            console.log('✅ Interstitial показан, result:', result);
            return result;
        } catch (error) {
            console.error('❌ Ошибка показа Interstitial:', error);
            return false;
        }
    },

    



    checkRewardedDailyLimit() {
        if (this.rewardedDailyLimit === 0) {
            return { canShow: true, used: 0, limit: 0 };
        }

        const today = new Date().toDateString();
        const storedRaw = SaveManager.get(this.rewardedDailyStorageKey, null);

        let stored = null;
        if (storedRaw && typeof storedRaw === 'object') {
            stored = storedRaw;
        }

        if (!stored || stored.date !== today) {
            stored = { date: today, count: 0 };
            SaveManager.set(this.rewardedDailyStorageKey, stored);
        }

        const canShow = stored.count < this.rewardedDailyLimit;
        return { canShow, used: stored.count, limit: this.rewardedDailyLimit };
    },

    


    incrementRewardedDailyCount() {
        if (this.rewardedDailyLimit === 0) {
            return;
        }

        const today = new Date().toDateString();
        const storedRaw = SaveManager.get(this.rewardedDailyStorageKey, null);

        let stored = null;
        if (storedRaw && typeof storedRaw === 'object') {
            stored = storedRaw;
        }

        if (!stored || stored.date !== today) {
            stored = { date: today, count: 0 };
        }

        stored.count += 1;
        SaveManager.set(this.rewardedDailyStorageKey, stored);
        this.updateRewardedAdButtonState();
    },

    


    async showRewardedVideo(amount = null) {
        const rewardAmount = amount !== null ? amount : this.rewardedDefaultAmount;

        const ads = this._getGpAds();
        if (!ads) {
            console.warn('⚠️ GamePush ads не инициализированы');
            this.showNotification(this.t('adsTemporarilyUnavailable', 'Ads are temporarily unavailable'), '#e74c3c');
            return false;
        }

        const adsState = this.getAdsPlatformState();

        
        console.log('📺 Диагностика rewarded ads:', adsState);

        
        
        const isMockEnabled = !this._isAdsOriginAllowed();
        if (isMockEnabled) {
            console.warn('⚠️ Реклама недоступна (isAllowedOrigin=false), включаем MOCK-режим для теста');
            console.log('🎬 MOCK MODE: Эмулируем rewarded-рекламу для тестирования звука (БЕЗ НАГРАДЫ)');
            return this._mockRewardedAd(0); 
        }
        
        
        if (!adsState.isRewardedAvailable) {
            console.warn('⚠️ Rewarded реклама недоступна на платформе');
            this.showNotification(this.t('adsRewardedUnavailable', 'Rewarded ads are unavailable'), '#e74c3c');
            return false;
        }

        
        
        if (adsState.isAdblockEnabled) {
            console.warn('⚠️ ads.isAdblockEnabled=true, пробуем показать rewarded напрямую');
        }

        if (adsState.isRewardedPlaying || adsState.isFullscreenPlaying || adsState.isPreloaderPlaying) {
            this.showNotification(this.t('adsWaitCurrent', 'Wait until the current ad finishes'), '#e67e22');
            return false;
        }

        
        if (typeof ads.showRewardedVideo !== 'function' && typeof ads.showRewarded !== 'function') {
            console.error('❌ Метод показа rewarded рекламы недоступен');
            console.error('❌ Доступные методы ads:', Object.keys(ads).filter(k => typeof ads[k] === 'function'));
            this.showNotification(this.t('adsSdkMethodUnavailable', 'SDK error: ad display method is unavailable'), '#e74c3c');
            return false;
        }

        const { canShow, used, limit } = this.checkRewardedDailyLimit();
        if (!canShow) {
            console.log(`📺 Достигнут дневной лимит просмотров (${used}/${limit})`);
            this.showNotification(this.t('adsDailyLimitReached', 'Daily ad limit reached ({0}/{1})', used, limit), '#e67e22');
            return false;
        }

        try {
            console.log('📺 Показываем Rewarded видео');

            this._rewardedEventSeq = 0;
            this._lastRewardedStartAt = 0;
            this._lastRewardedCloseAt = 0;
            this._lastRewardedRewardAt = 0;
            this._lastRewardedCloseSuccess = false;

            
            const result = await this.showRewardedWithOptions(ads);
            console.log('✅ showRewarded завершён, result:', result);

            await new Promise(resolve => setTimeout(resolve, 150));

            const rewardedWasWatched = result === true || this._lastRewardedRewardAt > 0 || this._lastRewardedCloseSuccess === true;

            if (rewardedWasWatched) {
                SaveManager.addCrystals(rewardAmount);
                this.incrementRewardedDailyCount();
                this.showNotification(this.t('adsRewardGranted', '+{0} 💎 for watching video!', rewardAmount), '#2ecc71');
                console.log('✅ Rewarded награда выдана:', rewardAmount);
                return true;
            } else {
                console.log('❌ Rewarded видео не досмотрено');
                this.showNotification(this.t('adsVideoNotCompleted', 'Video was not watched to the end'), '#e67e22');
                return false;
            }
        } catch (error) {
            console.error('❌ Ошибка показа Rewarded видео:', error);
            console.error('❌ Тип ошибки:', error?.name);
            console.error('❌ Сообщение:', error?.message);
            console.error('❌ Stack:', error?.stack);

            if (this._isLikelyAdBlockError(error)) {
                this.showNotification(this.t('adsBlockedByBrowser', 'Ads seem to be blocked by browser or extension'), '#e74c3c');
            } else {
                this.showNotification(this.t('adsShowError', 'Ad display error: {0}', error?.message || this.t('adsUnknownError', 'unknown error')), '#e74c3c');
            }
            return false;
        }
    },

    







    async showRewardedAd(options = {}) {
        const ads = this._getGpAds();
        if (!ads) {
            console.warn('⚠️ GamePush ads не инициализированы');
            if (options.onErrorMessage) {
                this.showNotification(options.onErrorMessage, '#e74c3c');
            }
            return false;
        }

        if (!this._isAdsOriginAllowed()) {
            console.warn('⚠️ Реклама недоступна: isAllowedOrigin=false');
            if (options.onErrorMessage) {
                this.showNotification(this.t('adsOnlyOnPublishedPlatform', 'Ads are available only on the publication platform'), '#e67e22');
            }
            return false;
        }

        const adsState = this.getAdsPlatformState();

        
        console.log('📺 Диагностика rewarded ads (custom):', adsState);

        
        
        if (adsState.isAdblockEnabled) {
            console.warn('⚠️ ads.isAdblockEnabled=true (custom), пробуем показать rewarded напрямую');
        }

        
        if (!adsState.isRewardedAvailable) {
            console.log('📺 isRewardedAvailable=false (custom), пробуем показать напрямую...');
        }

        if (adsState.isRewardedPlaying || adsState.isFullscreenPlaying || adsState.isPreloaderPlaying) {
            if (options.onErrorMessage) {
                this.showNotification(options.onErrorMessage, '#e67e22');
            }
            return false;
        }

        
        if (typeof ads.showRewardedVideo !== 'function' && typeof ads.showRewarded !== 'function') {
            console.error('❌ Метод показа rewarded рекламы недоступен');
            if (options.onErrorMessage) {
                this.showNotification(options.onErrorMessage + ' (SDK error)', '#e74c3c');
            }
            return false;
        }

        try {
            console.log('📺 Показываем Rewarded видео (custom callback)');

            this._rewardedEventSeq = 0;
            this._lastRewardedStartAt = 0;
            this._lastRewardedCloseAt = 0;
            this._lastRewardedRewardAt = 0;
            this._lastRewardedCloseSuccess = false;

            
            const result = await this.showRewardedWithOptions(ads);
            console.log('✅ showRewarded завершён, result:', result);

            await new Promise(resolve => setTimeout(resolve, 150));

            const rewardedWasWatched = result === true || this._lastRewardedRewardAt > 0 || this._lastRewardedCloseSuccess === true;

            if (rewardedWasWatched) {
                if (options.onSuccess && typeof options.onSuccess === 'function') {
                    options.onSuccess();
                }
                console.log('✅ Rewarded награда выдана (custom)');
                return true;
            } else {
                console.log('❌ Rewarded видео не досмотрено');
                if (options.onError && typeof options.onError === 'function') {
                    options.onError();
                }
                return false;
            }
        } catch (error) {
            console.error('❌ Ошибка показа Rewarded видео (custom):', error);
            console.error('❌ Тип ошибки:', error?.name);
            console.error('❌ Сообщение:', error?.message);
            console.error('❌ Stack:', error?.stack);
            if (options.onError && typeof options.onError === 'function') {
                options.onError();
            }
            if (options.onErrorMessage) {
                if (this._isLikelyAdBlockError(error)) {
                    this.showNotification(this.t('adsBlockedByBrowser', 'Ads seem to be blocked by browser or extension'), '#e74c3c');
                } else {
                    this.showNotification(options.onErrorMessage + ': ' + (error?.message || this.t('adsUnknownError', 'unknown error')), '#e74c3c');
                }
            }
            return false;
        }
    },

    




    async _mockRewardedAd(rewardAmount) {
        console.log('🎬 MOCK: Начинаем эмуляцию rewarded-рекламы (БЕЗ НАГРАДЫ)');
        
        
        this._markAdStarted(true);
        this._rewardedEventSeq += 1;
        this._lastRewardedStartAt = Date.now();
        this.requestSdkPause('rewarded:start (MOCK)');
        
        
        const mockOverlay = document.createElement('div');
        mockOverlay.id = 'mockRewardedOverlay';
        mockOverlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.95);
            z-index: 100000;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: white;
            font-family: Arial, sans-serif;
        `;
        
        const rewardDisplay = rewardAmount > 0 ? `+${rewardAmount} 💎` : this.t('adsMockNoReward', 'NO REWARD');
        const mockModeText = this.t('adsMockEmulationTitle', 'Rewarded ad simulation');
        const mockWarningText = this.t('adsMockTestMode', 'TEST MODE');
        const mockHintText = this.t('adsMockNoRewardHint', 'Reward is not granted ({0})', rewardDisplay);
        const mockAudioCheckText = this.t('adsMockAudioStopped', 'Sound should be stopped');
        const mockAudioHintText = this.t('adsMockAudioHint', 'Check that music is not playing');
        const mockCloseLabel = this.t('adsMockCloseTest', 'Close test');
        const mockHeadingText = this.t('adsMockHeading', 'MOCK REWARDED AD');
        mockOverlay.innerHTML = `
            <div style="text-align: center; padding: 40px; background: #1a1a2e; border-radius: 20px; max-width: 500px;">
                <h2 style="color: #e67e22; margin-bottom: 20px;">🎬 ${mockHeadingText}</h2>
                <p style="font-size: 18px; margin-bottom: 20px;">${mockModeText}</p>
                <p style="color: #e74c3c; margin-bottom: 10px; font-weight: bold;">⚠️ ${mockWarningText}</p>
                <p style="color: #888; margin-bottom: 30px; font-size: 14px;">${mockHintText}</p>
                <div style="background: #2a2a3e; padding: 20px; border-radius: 10px; margin-bottom: 30px;">
                    <p style="color: #16c79a; margin-bottom: 10px;">✅ ${mockAudioCheckText}</p>
                    <p style="color: #888; font-size: 14px;">${mockAudioHintText}</p>
                </div>
                <button id="mockRewardedClose" style="
                    background: #e67e22;
                    color: white;
                    border: none;
                    padding: 15px 40px;
                    font-size: 18px;
                    border-radius: 10px;
                    cursor: pointer;
                    font-weight: bold;
                ">${mockCloseLabel} (3)</button>
            </div>
        `;
        
        document.body.appendChild(mockOverlay);
        
        
        let countdown = 3;
        const btn = document.getElementById('mockRewardedClose');
        btn.disabled = true;
        btn.style.opacity = '0.5';
        
        const interval = setInterval(() => {
            countdown--;
            btn.textContent = `${mockCloseLabel} (${countdown})`;
            if (countdown <= 0) {
                clearInterval(interval);
                btn.textContent = mockCloseLabel;
                btn.disabled = false;
                btn.style.opacity = '1';
            }
        }, 1000);
        
        
        return new Promise((resolve) => {
            btn.addEventListener('click', () => {
                console.log('🎬 MOCK: Пользователь закрыл тест');
                clearInterval(interval);
                mockOverlay.remove();
                
                
                this._markAdClosed(true);
                this._rewardedEventSeq += 1;
                this._lastRewardedCloseAt = Date.now();
                this._lastRewardedCloseSuccess = false; 
                this._lastRewardedRewardAt = 0;
                
                if (!this.requestSdkResume('rewarded:close (MOCK)')) {
                    setTimeout(() => this.requestSdkResume('rewarded:close:deferred (MOCK)'), 60);
                }
                
                
                
                console.log('🎬 MOCK: Награда НЕ выдана (тестовый режим)');
                
                resolve(false); 
            });
        });
    },

    


    showNotification(message, color = '#3498db') {
        if (window.UI && typeof UI.showNotification === 'function') {
            UI.showNotification(message, color);
            return;
        }

        const presets = {
            success: '#57d39f',
            reward: '#74d8ff',
            error: '#ff8f9c',
            warning: '#ffd48c',
            info: '#7bc8f2'
        };

        let tone = 'info';
        let resolvedColor = presets.info;

        if (typeof color === 'string') {
            const normalized = color.trim().toLowerCase();
            if (presets[normalized]) {
                tone = normalized;
                resolvedColor = presets[normalized];
            } else if (normalized.startsWith('#') || normalized.startsWith('rgb') || normalized.startsWith('hsl')) {
                tone = 'custom';
                resolvedColor = color;
            }
        }

        let layer = document.body.querySelector('.notification-layer.notification-layer-global');
        if (!layer) {
            layer = document.createElement('div');
            layer.className = 'notification-layer notification-layer-global';
            document.body.appendChild(layer);
        }

        const notification = document.createElement('div');
        notification.className = `shop-notification tone-${tone}`;
        notification.textContent = message;
        notification.style.setProperty('--toast-accent', resolvedColor);

        layer.appendChild(notification);

        const maxVisibleToasts = 4;
        const toasts = layer.querySelectorAll('.shop-notification');
        if (toasts.length > maxVisibleToasts) {
            toasts[0].remove();
        }
        
        setTimeout(() => {
            notification.classList.add('is-leaving');
            setTimeout(() => notification.remove(), 260);
        }, 2600);
    },

};


window.AdsManager = AdsManager;


window.addEventListener('load', () => {
    AdsManager.init();
});
