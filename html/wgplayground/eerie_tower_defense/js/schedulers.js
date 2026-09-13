



const SchedulerManager = {
    schedulerTag: 'bonus_week',
    rewardFallbackTag: 'dail_150',
    _initialized: false,
    _eventsBound: false,
    _autoCheckTimer: null,
    _snapshotKey: '',
    _dismissedSnapshotKey: '',
    _claimInProgress: false,
    _autoOpenCooldownUntil: 0,
    _lastRewardSoundAt: 0,
    _schedulerRef: null,
    _sdkRetryTimer: null,
    _sdkUnavailableWarned: false,
    _started: false,
    _registerPromise: null,
    _registerCompleted: false,
    _preloaderListenerBound: false,
    _claimedDaysLocal: {},

    buildClaimedDayKey(schedulerRef, day) {
        const normalizedDay = Number(day);
        if (!Number.isFinite(normalizedDay) || normalizedDay <= 0) {
            return null;
        }

        const ref = (schedulerRef !== undefined && schedulerRef !== null)
            ? schedulerRef
            : this.resolveSchedulerRef();
        return `${String(ref)}:${normalizedDay}`;
    },

    markDayClaimedLocal(schedulerRef, day) {
        const key = this.buildClaimedDayKey(schedulerRef, day);
        if (!key) {
            return;
        }
        this._claimedDaysLocal[key] = true;
    },

    isDayClaimedLocal(schedulerRef, day) {
        const key = this.buildClaimedDayKey(schedulerRef, day);
        return key ? this._claimedDaysLocal[key] === true : false;
    },

    getRewardSoundDiagnostics() {
        const audioManager = this.getAudioManager();
        const gp = this.getGp();
        const sdkSounds = gp && gp.sounds ? gp.sounds : null;
        const sdkAds = gp && gp.ads ? gp.ads : null;
        const cached = audioManager && audioManager.audioCache
            ? audioManager.audioCache.dailyBonus || audioManager.audioCache.dailyBonusReward || null
            : null;

        return {
            timestamp: new Date().toISOString(),
            hasAudioManager: Boolean(audioManager),
            audioUnlocked: Boolean(audioManager && audioManager.audioUnlocked),
            soundEnabled: Boolean(audioManager && typeof audioManager.isSoundEnabled === 'function'
                ? audioManager.isSoundEnabled()
                : audioManager && audioManager.soundEnabled),
            masterVolume: Number(audioManager && typeof audioManager.getVolume === 'function'
                ? audioManager.getVolume()
                : audioManager && audioManager.masterVolume),
            sfxMutedBySDK: Boolean(audioManager && audioManager.sfxMutedBySDK),
            musicMutedBySDK: Boolean(audioManager && audioManager.musicMutedBySDK),
            playbackBlocked: Boolean(audioManager && typeof audioManager.isPlaybackBlocked === 'function'
                ? audioManager.isPlaybackBlocked()
                : false),
            isWindowActive: Boolean(audioManager && audioManager._isWindowActive),
            shouldMuteSFX: Boolean(audioManager && audioManager._shouldMuteSFX),
            documentHidden: typeof document !== 'undefined' ? Boolean(document.hidden) : false,
            sdkIsMuted: Boolean(sdkSounds && sdkSounds.isMuted),
            sdkIsSFXMuted: Boolean(sdkSounds && sdkSounds.isSFXMuted),
            sdkIsMusicMuted: Boolean(sdkSounds && sdkSounds.isMusicMuted),
            sdkFullscreenAd: Boolean(sdkAds && sdkAds.isFullscreenPlaying),
            sdkRewardedAd: Boolean(sdkAds && sdkAds.isRewardedPlaying),
            sdkPreloaderAd: Boolean(sdkAds && sdkAds.isPreloaderPlaying),
            cachedReadyState: cached ? Number(cached.readyState) : -1,
            cachedNetworkState: cached ? Number(cached.networkState) : -1,
            cachedCurrentSrc: cached ? String(cached.currentSrc || cached.src || '') : '',
            directReadyState: this._rewardAcceptedAudio ? Number(this._rewardAcceptedAudio.readyState) : -1,
            directNetworkState: this._rewardAcceptedAudio ? Number(this._rewardAcceptedAudio.networkState) : -1
        };
    },

    logRewardSoundDiagnostics(reason = 'manual') {
        const snapshot = this.getRewardSoundDiagnostics();
        try {
            console.warn('[SchedulerSound]', reason, snapshot);
        } catch (_) {
            
        }
        return snapshot;
    },

    getGp() {
        return window.GP || window.__GP_SDK_INSTANCE || window.gp || null;
    },

    getAudioManager() {
        return typeof AudioManager !== 'undefined' ? AudioManager : null;
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

    getApi() {
        const gp = this.getGp();
        return gp && gp.schedulers ? gp.schedulers : null;
    },

    resolveSchedulerRef() {
        if (this._schedulerRef !== null && this._schedulerRef !== undefined) {
            return this._schedulerRef;
        }

        const api = this.getApi();
        if (!api) {
            return this.schedulerTag;
        }

        const configured = this.schedulerTag;
        if (configured !== null && configured !== undefined && this.getSchedulerInfo(configured)) {
            this._schedulerRef = configured;
            return this._schedulerRef;
        }

        const pickCandidate = (list) => {
            if (!Array.isArray(list) || list.length === 0) {
                return null;
            }

            const ranked = list.find((item) => {
                const tag = String(item && (item.tag || item.name || '')).toLowerCase();
                return /daily|day|bonus|reward|week/.test(tag);
            }) || list[0];

            if (!ranked) {
                return null;
            }

            if (ranked.id !== undefined && ranked.id !== null) {
                return ranked.id;
            }
            if (ranked.tag !== undefined && ranked.tag !== null && ranked.tag !== '') {
                return ranked.tag;
            }
            return null;
        };

        const pickConfiguredFromList = (list, configuredRef) => {
            if (!Array.isArray(list) || list.length === 0 || configuredRef === null || configuredRef === undefined) {
                return null;
            }

            const configuredStr = String(configuredRef);
            const found = list.find((item) => {
                if (!item || typeof item !== 'object') {
                    return false;
                }
                return String(item.tag || '') === configuredStr || String(item.id || '') === configuredStr;
            });

            if (!found) {
                return null;
            }

            if (found.id !== undefined && found.id !== null) {
                return found.id;
            }
            if (found.tag !== undefined && found.tag !== null && found.tag !== '') {
                return found.tag;
            }

            return null;
        };

        const fromConfigured = pickConfiguredFromList(api.activeList, configured)
            || pickConfiguredFromList(api.list, configured);
        if (fromConfigured !== null && fromConfigured !== undefined) {
            this._schedulerRef = fromConfigured;
            return this._schedulerRef;
        }

        const fromActive = pickCandidate(api.activeList);
        const fromList = fromActive || pickCandidate(api.list);
        if (fromList !== null && fromList !== undefined) {
            this._schedulerRef = fromList;
            this.schedulerTag = fromList;
            return this._schedulerRef;
        }

        this._schedulerRef = configured;
        return this._schedulerRef;
    },

    isRegisteredInActiveList(ref) {
        const api = this.getApi();
        if (!api || !Array.isArray(api.activeList)) {
            return false;
        }

        const refStr = String(ref);
        return api.activeList.some((item) => {
            if (!item || typeof item !== 'object') {
                return false;
            }

            const tag = item.tag;
            const id = item.id;
            return String(tag || '') === refStr || String(id || '') === refStr;
        });
    },

    callSchedulerBool(methodName, day, refOverride = undefined) {
        const api = this.getApi();
        if (!api || typeof api[methodName] !== 'function') {
            return false;
        }

        const ref = (refOverride !== undefined && refOverride !== null)
            ? refOverride
            : this.resolveSchedulerRef();
        const payloadByTag = typeof ref === 'number'
            ? (day !== undefined && day !== null ? { id: ref, day } : { id: ref })
            : (day !== undefined && day !== null ? { tag: ref, day } : { tag: ref });

        try {
            const byPayload = api[methodName](payloadByTag);
            if (Boolean(byPayload)) {
                return true;
            }
        } catch (_) {
            
        }

        try {
            const byDirect = day !== undefined && day !== null
                ? api[methodName](ref, day)
                : api[methodName](ref);
            if (Boolean(byDirect)) {
                return true;
            }
        } catch (_) {
            
        }

        if (this.schedulerTag !== ref) {
            try {
                const byTag = day !== undefined && day !== null
                    ? api[methodName](this.schedulerTag, day)
                    : api[methodName](this.schedulerTag);
                if (Boolean(byTag)) {
                    return true;
                }
            } catch (_) {
                
            }
        }

        return false;
    },

    getSchedulerRefFromData(schedulerData) {
        const scheduler = schedulerData && schedulerData.scheduler ? schedulerData.scheduler : null;
        if (scheduler && scheduler.id !== undefined && scheduler.id !== null) {
            return scheduler.id;
        }
        if (scheduler && scheduler.tag !== undefined && scheduler.tag !== null && scheduler.tag !== '') {
            return scheduler.tag;
        }
        return this.resolveSchedulerRef();
    },

    getSchedulerType(schedulerData) {
        const scheduler = schedulerData && schedulerData.scheduler ? schedulerData.scheduler : null;
        if (!scheduler) {
            return null;
        }
        
        // Тип из API: 'ACTIVE_DAYS' или 'ACTIVE_DAYS_CONSECUTIVE'
        return scheduler.type || null;
    },

    getErrorCode(err) {
        if (!err) {
            return '';
        }

        if (typeof err === 'string') {
            return err.toLowerCase();
        }

        const direct = err.code || err.status || err.error || err.message || '';
        if (typeof direct === 'string') {
            return direct.toLowerCase();
        }

        const nested = err.error && (err.error.code || err.error.message || err.error.status);
        if (typeof nested === 'string') {
            return nested.toLowerCase();
        }

        return '';
    },

    getRewardsApi() {
        const gp = this.getGp();
        return gp && gp.rewards ? gp.rewards : null;
    },

    isUsableSchedulerInfo(info) {
        if (!info || typeof info !== 'object') {
            return false;
        }

        if (info.scheduler && typeof info.scheduler === 'object') {
            return true;
        }

        const nested = info.schedulerInfo;
        if (!nested || typeof nested !== 'object') {
            return false;
        }

        if (nested.scheduler && typeof nested.scheduler === 'object') {
            return true;
        }

        return nested.id !== undefined || nested.tag !== undefined;
    },

    isUsableSchedulerDayInfo(dayInfo, expectedDay = undefined) {
        if (!dayInfo || typeof dayInfo !== 'object') {
            return false;
        }

        const dayNumber = Number(dayInfo.day);
        if (!Number.isFinite(dayNumber) || dayNumber <= 0) {
            return false;
        }

        if (expectedDay !== undefined && expectedDay !== null) {
            const expected = Number(expectedDay);
            if (Number.isFinite(expected) && expected > 0 && dayNumber !== expected) {
                return false;
            }
        }

        return true;
    },

    getSchedulerInfo(idOrTag) {
        const api = this.getApi();
        if (!api || typeof api.getScheduler !== 'function') {
            return null;
        }

        let byDirect = null;
        try {
            byDirect = api.getScheduler(idOrTag);
            if (this.isUsableSchedulerInfo(byDirect)) {
                return byDirect;
            }
        } catch (error) {
            
        }

        try {
            const payload = typeof idOrTag === 'number' ? { id: idOrTag } : { tag: idOrTag };
            const byPayload = api.getScheduler(payload);
            if (this.isUsableSchedulerInfo(byPayload)) {
                return byPayload;
            }
        } catch (_) {
            
        }

        return this.isUsableSchedulerInfo(byDirect) ? byDirect : null;
    },

    getSchedulerCurrentDayInfo(idOrTag) {
        const api = this.getApi();
        if (!api || typeof api.getSchedulerCurrentDay !== 'function') {
            return null;
        }

        let byDirect = null;
        try {
            byDirect = api.getSchedulerCurrentDay(idOrTag);
            if (this.isUsableSchedulerDayInfo(byDirect)) {
                return byDirect;
            }
        } catch (error) {
            
        }

        try {
            const payload = typeof idOrTag === 'number' ? { id: idOrTag } : { tag: idOrTag };
            const byPayload = api.getSchedulerCurrentDay(payload);
            if (this.isUsableSchedulerDayInfo(byPayload)) {
                return byPayload;
            }
        } catch (_) {
            
        }

        return this.isUsableSchedulerDayInfo(byDirect) ? byDirect : null;
    },

    getSchedulerDayInfo(idOrTag, day) {
        const api = this.getApi();
        if (!api || typeof api.getSchedulerDay !== 'function') {
            return null;
        }

        let byDirect = null;
        try {
            byDirect = api.getSchedulerDay(idOrTag, day);
            if (this.isUsableSchedulerDayInfo(byDirect, day)) {
                return byDirect;
            }
        } catch (error) {
            
        }

        try {
            const payload = typeof idOrTag === 'number' ? { id: idOrTag, day } : { tag: idOrTag, day };
            const byPayload = api.getSchedulerDay(payload);
            if (this.isUsableSchedulerDayInfo(byPayload, day)) {
                return byPayload;
            }
        } catch (_) {
            
        }

        return this.isUsableSchedulerDayInfo(byDirect, day) ? byDirect : null;
    },

    async claimSchedulerAllDay(idOrTag, day) {
        const api = this.getApi();
        if (!api || typeof api.claimAllDay !== 'function') {
            return null;
        }

        try {
            const byDirect = day !== undefined ? await api.claimAllDay(idOrTag, day) : await api.claimAllDay(idOrTag);
            if (byDirect) {
                return byDirect;
            }
        } catch (error) {
            
        }

        try {
            const payload = typeof idOrTag === 'number'
                ? (day !== undefined ? { id: idOrTag, day } : { id: idOrTag })
                : (day !== undefined ? { tag: idOrTag, day } : { tag: idOrTag });
            const byPayload = await api.claimAllDay(payload);
            if (byPayload) {
                return byPayload;
            }
        } catch (_) {
            
        }

        return null;
    },

    async claimSchedulerDay(idOrTag, day) {
        const api = this.getApi();
        if (!api || typeof api.claimDay !== 'function') {
            return null;
        }

        try {
            const byDirect = await api.claimDay(idOrTag, day);
            if (byDirect) {
                return byDirect;
            }
        } catch (error) {
            
        }

        try {
            const payload = typeof idOrTag === 'number' ? { id: idOrTag, day } : { tag: idOrTag, day };
            const byPayload = await api.claimDay(payload);
            if (byPayload) {
                return byPayload;
            }
        } catch (_) {
            
        }

        return null;
    },

    async claimSchedulerAllDays(idOrTag) {
        const api = this.getApi();
        if (!api || typeof api.claimAllDays !== 'function') {
            return null;
        }

        try {
            const byDirect = await api.claimAllDays(idOrTag);
            if (byDirect) {
                return byDirect;
            }
        } catch (error) {
            
        }

        try {
            const payload = typeof idOrTag === 'number' 
                ? { id: idOrTag } 
                : { tag: idOrTag };
            const byPayload = await api.claimAllDays(payload);
            if (byPayload) {
                return byPayload;
            }
        } catch (_) {
            
        }

        return null;
    },

    getRewardInfo(idOrTag) {
        const rewardsApi = this.getRewardsApi();
        if (!rewardsApi || typeof rewardsApi.getReward !== 'function') {
            return null;
        }

        try {
            const payload = typeof idOrTag === 'number' ? { id: idOrTag } : { tag: idOrTag };
            return rewardsApi.getReward(payload) || rewardsApi.getReward(idOrTag);
        } catch (error) {
            try {
                return rewardsApi.getReward(idOrTag);
            } catch (_) {
                return null;
            }
        }
    },

    getGivenRewardsList() {
        const rewardsApi = this.getRewardsApi();
        return rewardsApi && Array.isArray(rewardsApi.givenList) ? rewardsApi.givenList : [];
    },

    hasRewardAccepted(idOrTag) {
        const rewardsApi = this.getRewardsApi();
        if (!rewardsApi || typeof rewardsApi.hasAccepted !== 'function') {
            return false;
        }

        try {
            return Boolean(rewardsApi.hasAccepted(idOrTag));
        } catch (error) {
            return false;
        }
    },

    async acceptReward(idOrTag) {
        const rewardsApi = this.getRewardsApi();
        if (!rewardsApi || typeof rewardsApi.accept !== 'function') {
            return null;
        }

        try {
            const payload = typeof idOrTag === 'number' ? { id: idOrTag } : { tag: idOrTag };
            return await rewardsApi.accept(payload);
        } catch (error) {
            try {
                return await rewardsApi.accept(idOrTag);
            } catch (_) {
                return null;
            }
        }
    },

    init() {
        if (this._initialized) {
            return;
        }
        this._initialized = true;

        if (!this._preloaderListenerBound) {
            window.addEventListener('gp:preloader-finished', () => {
                setTimeout(() => {
                    this.refresh(false);
                }, 120);
            });
            this._preloaderListenerBound = true;
        }

        this.ensureModal();
        this.waitForSDKAndStart();
    },

    isPreloaderFinished() {
        return window.__gpPreloaderDone !== false;
    },

    isStartupUiReleased() {
        return window.__startupUiPending !== true;
    },

    isStartupPreloaderClosed() {
        return window.__gpStartupPreloaderClosed === true || window.__gpPreloaderDone === true;
    },

    isAnyAdPlaying() {
        if (window.AdsManager && typeof window.AdsManager.isAnyAdPlaying === 'function') {
            return window.AdsManager.isAnyAdPlaying();
        }

        const gp = this.getGp();
        const ads = gp && gp.ads ? gp.ads : null;
        return Boolean(ads && (ads.isFullscreenPlaying || ads.isRewardedPlaying || ads.isPreloaderPlaying));
    },

    scheduleSdkRetry(delayMs = 2000) {
        if (this._sdkRetryTimer) {
            return;
        }
        this._sdkRetryTimer = setTimeout(() => {
            this._sdkRetryTimer = null;
            this.waitForSDKAndStart();
        }, delayMs);
    },

    async waitForSDKAndStart() {
        if (this._started) {
            return;
        }

        for (let i = 0; i < 60; i++) {
            if (this.getApi()) {
                break;
            }
            await new Promise((resolve) => setTimeout(resolve, 250));
        }

        const api = this.getApi();
        if (!api) {
            if (!this._sdkUnavailableWarned) {
                this._sdkUnavailableWarned = true;
                console.warn('⚠️ SchedulerManager: gp.schedulers недоступен, повторим инициализацию');
            }
            this.scheduleSdkRetry(2000);
            return;
        }

        this._sdkUnavailableWarned = false;
        this._started = true;

        this.bindEvents();
        await this.registerIfNeeded();
        await this.acceptUnacceptedRewards(this.t('schedulerRewardsSynced', 'Rewards synchronized'));
        await this.refresh(false);
        this.startAutoCheck();
    },

    async registerIfNeeded() {
        if (this._registerCompleted) {
            return true;
        }

        if (this._registerPromise) {
            return this._registerPromise;
        }

        this._registerPromise = this._registerIfNeededInternal();

        try {
            const result = await this._registerPromise;
            this._registerCompleted = result === true;
            return result;
        } finally {
            this._registerPromise = null;
        }
    },

    async _registerIfNeededInternal() {
        const api = this.getApi();
        if (!api) {
            return false;
        }

        const ref = this.resolveSchedulerRef();
        const schedulerInfo = this.getSchedulerInfo(ref);

        let isRegistered = Boolean(schedulerInfo && schedulerInfo.isRegistered === true);
        if (typeof api.isRegistered === 'function') {
            isRegistered = isRegistered || this.callSchedulerBool('isRegistered', undefined, ref);
        }

        if (!isRegistered && this.isRegisteredInActiveList(ref)) {
            isRegistered = true;
        }

        if (isRegistered) {
            return true;
        }

        if (typeof api.register !== 'function') {
            return false;
        }

        try {
            if (typeof ref === 'number') {
                await api.register({ id: ref });
            } else {
                await api.register({ tag: ref });
            }
            return true;
        } catch (error) {
            const code = this.getErrorCode(error);
            if (code.includes('already_registered')) {
                return true;
            }

            if (this.isRegisteredInActiveList(ref)) {
                return true;
            }

            if (code.includes('scheduler_not_found')) {
                
                const prevRef = this._schedulerRef;
                this._schedulerRef = null;
                const fallbackRef = this.resolveSchedulerRef();

                if (fallbackRef !== null && fallbackRef !== undefined && fallbackRef !== prevRef) {
                    try {
                        if (typeof fallbackRef === 'number') {
                            await api.register({ id: fallbackRef });
                        } else {
                            await api.register({ tag: fallbackRef });
                        }
                        return true;
                    } catch (fallbackError) {
                        const fallbackCode = this.getErrorCode(fallbackError);
                        if (fallbackCode.includes('already_registered')) {
                            return true;
                        }
                    }
                }
            }

            try {
                await api.register(ref);
                return true;
            } catch (error2) {
                const code2 = this.getErrorCode(error2);
                if (code2.includes('already_registered')) {
                    return true;
                }
                if (this.isRegisteredInActiveList(ref)) {
                    return true;
                }
                console.warn('⚠️ Scheduler register failed:', error2);
                return false;
            }
        }
    },

    bindEvents() {
        if (this._eventsBound) {
            return;
        }
        const api = this.getApi();
        if (!api || typeof api.on !== 'function') {
            return;
        }

        api.on('register', async () => {
            await this.refresh(true);
        });

        api.on('claimDay', async (data) => {
            void data;
            if (!this._claimInProgress) {
                await this.acceptUnacceptedRewards(this.t('schedulerClaimDayReceived', 'Daily reward received!'));
                await this.applyRemoteCrystals(this.t('schedulerThanksPlaying', 'Thanks for playing!'));
            }
            await this.refresh(true);
            window.dispatchEvent(new CustomEvent('gp:daily-reward-handled'));
        });

        api.on('claimDayAdditional', async (data) => {
            void data;
            if (!this._claimInProgress) {
                await this.acceptUnacceptedRewards(this.t('schedulerClaimDayExtraReceived', 'Extra daily reward received!'));
                await this.applyRemoteCrystals(this.t('schedulerThanksPlaying', 'Thanks for playing!'));
            }
            await this.refresh(true);
            window.dispatchEvent(new CustomEvent('gp:daily-reward-handled'));
        });

        api.on('claimAllDay', async (data) => {
            void data;
            if (!this._claimInProgress) {
                await this.acceptUnacceptedRewards(this.t('schedulerClaimAllDayReceived', 'All daily rewards received!'));
                await this.applyRemoteCrystals(this.t('schedulerThanksPlaying', 'Thanks for playing!'));
            }
            await this.refresh(true);
            window.dispatchEvent(new CustomEvent('gp:daily-reward-handled'));
        });

        api.on('claimAllDays', async (data) => {
            void data;
            if (!this._claimInProgress) {
                await this.acceptUnacceptedRewards(this.t('schedulerClaimAllDaysReceived', 'All scheduler rewards received!'));
                await this.applyRemoteCrystals(this.t('schedulerThanksPlaying', 'Thanks for playing!'));
            }
            await this.refresh(true);
            window.dispatchEvent(new CustomEvent('gp:daily-reward-handled'));
        });

        api.on('error:register', (err) => {
            const code = this.getErrorCode(err);
            if (code.includes('already_registered') || code.includes('scheduler_not_found')) {
                return;
            }
            console.warn('⚠️ Scheduler error:register', err);
        });
        api.on('error:claimDay', (err) => {
            const code = this.getErrorCode(err);
            console.warn('⚠️ Scheduler error:claimDay', { error: err, code });
            if (window.UI && UI.showNotification && !this._claimInProgress) {
                UI.showNotification(this.t('schedulerClaimErrorDay', 'Failed to claim daily reward'), '#e74c3c');
            }
        });
        api.on('error:claimDayAdditional', (err) => {
            const code = this.getErrorCode(err);
            console.warn('⚠️ Scheduler error:claimDayAdditional', { error: err, code });
        });
        api.on('error:claimAllDay', (err) => {
            const code = this.getErrorCode(err);
            console.warn('⚠️ Scheduler error:claimAllDay', { error: err, code });
            if (window.UI && UI.showNotification && !this._claimInProgress) {
                UI.showNotification(this.t('schedulerClaimErrorDays', 'Failed to claim daily rewards'), '#e74c3c');
            }
        });
        api.on('error:claimAllDays', (err) => {
            const code = this.getErrorCode(err);
            console.warn('⚠️ Scheduler error:claimAllDays', { error: err, code });
        });

        this._eventsBound = true;
    },

    startAutoCheck() {
        if (this._autoCheckTimer) {
            clearInterval(this._autoCheckTimer);
        }

        this._autoCheckTimer = setInterval(() => {
            this.refresh(true);
        }, 5000);
    },

    isMainMenuVisible() {
        const mainMenu = document.getElementById('mainMenu');
        return Boolean(mainMenu && mainMenu.classList.contains('active') && mainMenu.style.display !== 'none');
    },

    getSchedulerData() {
        const schedulerRef = this.resolveSchedulerRef();
        const schedulerInfo = this.getSchedulerInfo(schedulerRef);
        if (!schedulerInfo) {
            return null;
        }

        const api = this.getApi();

        const findSchedulerInList = (ref) => {
            if (!api || !Array.isArray(api.list)) {
                return null;
            }

            const refStr = String(ref);
            return api.list.find((item) => {
                if (!item || typeof item !== 'object') {
                    return false;
                }
                return String(item.id || '') === refStr || String(item.tag || '') === refStr;
            }) || null;
        };

        const normalizedScheduler = schedulerInfo.scheduler
            || (schedulerInfo.schedulerInfo && schedulerInfo.schedulerInfo.scheduler)
            || schedulerInfo.schedulerInfo
            || findSchedulerInList(schedulerRef)
            || null;

        if (!normalizedScheduler || typeof normalizedScheduler !== 'object') {
            return null;
        }

        return {
            ...schedulerInfo,
            scheduler: normalizedScheduler
        };
    },

    



    async getDiagnosticsSnapshot() {
        const api = this.getApi();
        if (!api) {
            return {
                ok: false,
                reason: 'gp.schedulers is unavailable'
            };
        }

        await this.registerIfNeeded();

        const list = Array.isArray(api.list) ? api.list : [];
        const activeList = Array.isArray(api.activeList) ? api.activeList : [];
        const activeIds = new Set(
            activeList
                .map((item) => item && item.schedulerId)
                .filter((id) => id !== null && id !== undefined)
                .map((id) => Number(id))
        );

        const refs = [];
        const seen = new Set();
        const pushRef = (value) => {
            if (value === null || value === undefined || value === '') {
                return;
            }
            const key = `${typeof value}:${String(value)}`;
            if (seen.has(key)) {
                return;
            }
            seen.add(key);
            refs.push(value);
        };

        pushRef(this.schedulerTag);
        pushRef(this.resolveSchedulerRef());
        for (const scheduler of list) {
            if (!scheduler || typeof scheduler !== 'object') {
                continue;
            }
            if (scheduler.id !== undefined && scheduler.id !== null) {
                pushRef(Number(scheduler.id));
            }
            if (scheduler.tag !== undefined && scheduler.tag !== null && scheduler.tag !== '') {
                pushRef(String(scheduler.tag));
            }
        }

        const schedulerStates = refs.map((ref) => {
            const info = this.getSchedulerInfo(ref);
            const currentDayInfo = this.getSchedulerCurrentDayInfo(ref);
            const currentDay = Number(
                (currentDayInfo && currentDayInfo.day)
                || (info && info.currentDay)
                || 1
            );

            const scheduler = info && info.scheduler ? info.scheduler : null;
            const schedulerId = scheduler && scheduler.id !== undefined && scheduler.id !== null
                ? Number(scheduler.id)
                : null;

            const isRegistered = this.callSchedulerBool('isRegistered', undefined, ref)
                || Boolean(info && info.isRegistered)
                || (schedulerId !== null && activeIds.has(schedulerId));

            const isTodayRewardClaimed = this.callSchedulerBool('isTodayRewardClaimed', currentDay, ref);
            const canClaimDay = this.callSchedulerBool('canClaimDay', currentDay, ref);
            const canClaimAllDay = this.callSchedulerBool('canClaimAllDay', currentDay, ref);

            return {
                ref,
                schedulerId,
                schedulerTag: scheduler && scheduler.tag ? scheduler.tag : null,
                days: scheduler && scheduler.days ? Number(scheduler.days) : null,
                isRegistered,
                currentDay,
                isTodayRewardClaimed,
                canClaimDay,
                canClaimAllDay,
                dayFlags: currentDayInfo
                    ? {
                        isDayReached: currentDayInfo.isDayReached,
                        isDayClaimed: currentDayInfo.isDayClaimed,
                        canClaimDay: currentDayInfo.canClaimDay,
                        canClaimAllDay: currentDayInfo.canClaimAllDay,
                        canClaimDayAdditional: currentDayInfo.canClaimDayAdditional
                    }
                    : null,
                rawSchedulerInfo: info || null,
                rawCurrentDayInfo: currentDayInfo || null
            };
        });

        const snapshot = {
            ok: true,
            timestamp: new Date().toISOString(),
            configuredSchedulerTag: this.schedulerTag,
            resolvedSchedulerRef: this.resolveSchedulerRef(),
            list,
            activeList,
            schedulerStates
        };

        window.__gpSchedulerSnapshot = snapshot;
        return snapshot;
    },

    



    getDayDiagnostics(day, schedulerRef = undefined) {
        const normalizedDay = Number(day);
        if (!Number.isFinite(normalizedDay) || normalizedDay <= 0) {
            return null;
        }

        const ref = (schedulerRef !== undefined && schedulerRef !== null)
            ? schedulerRef
            : this.resolveSchedulerRef();
        const dayInfo = this.getSchedulerDayInfo(ref, normalizedDay);

        return {
            schedulerRef: ref,
            day: normalizedDay,
            isRegistered: this.callSchedulerBool('isRegistered', undefined, ref),
            isTodayRewardClaimed: this.isTodayClaimedByApi(normalizedDay, ref),
            canClaimDay: this.callSchedulerBool('canClaimDay', normalizedDay, ref),
            canClaimAllDay: this.callSchedulerBool('canClaimAllDay', normalizedDay, ref),
            dayInfo: dayInfo || null
        };
    },

    



    getAllDaysDiagnostics(schedulerRef = undefined) {
        const schedulerData = this.getSchedulerData();
        const ref = (schedulerRef !== undefined && schedulerRef !== null)
            ? schedulerRef
            : this.getSchedulerRefFromData(schedulerData);

        const totalDays = Number(
            (schedulerData && schedulerData.scheduler && schedulerData.scheduler.days)
            || 7
        );

        const rows = [];
        for (let day = 1; day <= totalDays; day++) {
            const info = this.getDayDiagnostics(day, ref);
            rows.push({
                day,
                canClaimDay: Boolean(info && info.canClaimDay),
                canClaimAllDay: Boolean(info && info.canClaimAllDay),
                isDayReached: Boolean(info && info.dayInfo && info.dayInfo.isDayReached),
                isDayClaimed: Boolean(info && info.dayInfo && info.dayInfo.isDayClaimed),
                isDayComplete: Boolean(info && info.dayInfo && info.dayInfo.isDayComplete)
            });
        }

        const result = {
            schedulerRef: ref,
            totalDays,
            rows
        };

        window.__gpSchedulerDaysSnapshot = result;
        return result;
    },

    



    printAllDaysDiagnostics(schedulerRef = undefined) {
        const result = this.getAllDaysDiagnostics(schedulerRef);
        if (!result) {
            return null;
        }

        if (console && typeof console.table === 'function') {
            console.table(result.rows);
        }

        return result;
    },

    getCurrentDayData(schedulerRef = undefined) {
        const resolvedRef = (schedulerRef !== undefined && schedulerRef !== null)
            ? schedulerRef
            : this.resolveSchedulerRef();
        const dayInfo = this.getSchedulerCurrentDayInfo(resolvedRef);
        if (!dayInfo || typeof dayInfo !== 'object') {
            return null;
        }

        const hasDayFlags = dayInfo.isDayReached !== undefined || dayInfo.isDayClaimed !== undefined;
        const dayNumber = Number(dayInfo.day);
        if (Number.isFinite(dayNumber) && dayNumber > 0) {
            return dayInfo;
        }

        const schedulerData = this.getSchedulerData();
        const schedulerCurrentDay = Number(schedulerData && schedulerData.currentDay);
        if (Number.isFinite(schedulerCurrentDay) && schedulerCurrentDay > 0) {
            return {
                ...dayInfo,
                day: schedulerCurrentDay,
                isDayReached: hasDayFlags ? dayInfo.isDayReached : (dayInfo.isDayReached === true),
                isDayClaimed: hasDayFlags ? dayInfo.isDayClaimed : (dayInfo.isDayClaimed === true)
            };
        }

        const fallbackDay = dayInfo.currentDay !== undefined ? dayInfo.currentDay : dayInfo.index;
        const normalizedFallbackDay = Number(fallbackDay);
        if (Number.isFinite(normalizedFallbackDay) && normalizedFallbackDay > 0) {
            return {
                ...dayInfo,
                day: normalizedFallbackDay
            };
        }

        if (hasDayFlags) {
            return {
                ...dayInfo,
                day: 1
            };
        }

        return null;
    },

    buildSnapshotKey(currentDayData) {
        if (!currentDayData) {
            return 'none';
        }
        return [
            currentDayData.day || 0,
            currentDayData.isDayClaimed ? 1 : 0,
            currentDayData.canClaimDay ? 1 : 0,
            currentDayData.canClaimDayAdditional ? 1 : 0,
            currentDayData.canClaimAllDay ? 1 : 0
        ].join(':');
    },

    startAutoOpenCooldown(ms = 15000) {
        this._autoOpenCooldownUntil = Date.now() + ms;
    },

    isTodayClaimedByApi(_day, schedulerRef = undefined) {
        return this.callSchedulerBool('isTodayRewardClaimed', undefined, schedulerRef);
    },

    canClaimTodayFromDay(currentDayData) {
        if (!currentDayData) {
            return false;
        }

        const isDayReached = currentDayData.isDayReached !== false;
        const isDayClaimed = currentDayData.isDayClaimed === true;
        const isDayComplete = currentDayData.isDayComplete === true;
        const canClaimAllDay = currentDayData.canClaimAllDay === true;
        const canClaimDay = currentDayData.canClaimDay === true;
        const canClaimDayAdditional = currentDayData.canClaimDayAdditional === true;

        if (isDayReached && !isDayClaimed && isDayComplete) {
            return true;
        }

        return canClaimAllDay || canClaimDay || canClaimDayAdditional;
    },

    canClaimTodayByApi(day, schedulerRef = undefined) {
        const api = this.getApi();
        if (!api) {
            return false;
        }

        const checks = [
            ['canClaimAllDay', true],
            ['canClaimDay', true],
            ['canClaimDayAdditional', true]
        ];

        for (const [method] of checks) {
            if (typeof api[method] !== 'function') {
                continue;
            }
            if (this.callSchedulerBool(method, day, schedulerRef)) {
                return true;
            }
        }

        return false;
    },

    canClaimToday(day, currentDayData = null, schedulerRef = undefined) {
        const byDayInfo = this.canClaimTodayFromDay(currentDayData);
        if (byDayInfo) {
            return true;
        }

        return this.canClaimTodayByApi(day, schedulerRef);
    },

    getPreferredDayFromData(schedulerData, currentDayData) {
        const fromCurrentDayData = Number(currentDayData && currentDayData.day);
        if (Number.isFinite(fromCurrentDayData) && fromCurrentDayData > 0) {
            return fromCurrentDayData;
        }

        const fromSchedulerData = Number(schedulerData && schedulerData.currentDay);
        if (Number.isFinite(fromSchedulerData) && fromSchedulerData > 0) {
            return fromSchedulerData;
        }

        return 1;
    },

    resolveDayState(schedulerData, currentDayData, schedulerRef) {
        // Используем currentDay напрямую из SDK (согласно документации)
        const currentDay = this.getPreferredDayFromData(schedulerData, currentDayData);
        
        // Проверяем флаги текущего дня из SDK
        const isDayClaimed = Boolean(currentDayData && currentDayData.isDayClaimed);
        const canClaimDay = Boolean(currentDayData && currentDayData.canClaimDay);
        const canClaimAllDay = Boolean(currentDayData && currentDayData.canClaimAllDay);
        
        // Можно забрать награду если SDK разрешает
        // Делаем fallback на bool-методы SDK, если dayInfo пришел неполным
        const canClaim = canClaimDay || canClaimAllDay || this.canClaimTodayByApi(currentDay, schedulerRef);
        const todayClaimed = isDayClaimed || this.isTodayClaimedByApi(undefined, schedulerRef);

        return {
            day: currentDay,
            preferredDay: currentDay,
            todayClaimed,
            canClaim: canClaim
        };
    },

    async refresh(allowAutoOpen = false) {
        let schedulerData = this.getSchedulerData();

        if (!schedulerData) {
            return false;
        }

        const schedulerRef = this.getSchedulerRefFromData(schedulerData);
        this._schedulerRef = schedulerRef;

        const currentDayData = this.getCurrentDayData(schedulerRef);
        const dayState = this.resolveDayState(schedulerData, currentDayData, schedulerRef);
        const snapshot = [
            dayState.day || 0,
            dayState.todayClaimed ? 1 : 0,
            dayState.canClaim ? 1 : 0
        ].join(':');

        if (snapshot !== this._snapshotKey) {
            this._snapshotKey = snapshot;
            this._dismissedSnapshotKey = '';
        }

        this.renderModal(schedulerData, currentDayData, schedulerRef, dayState);

        if (dayState.todayClaimed && !dayState.canClaim) {
            this._dismissedSnapshotKey = snapshot;
            this.closeModal(false);
        }

        const cooldownPassed = Date.now() >= this._autoOpenCooldownUntil;
        const preloaderFinished = this.isPreloaderFinished();
        const startupUiReleased = this.isStartupUiReleased();
        if (allowAutoOpen && preloaderFinished && this.isStartupPreloaderClosed() && startupUiReleased && !this.isAnyAdPlaying() && window.__gpGameReadyReported === true && cooldownPassed && this.isMainMenuVisible() && dayState.canClaim && this._dismissedSnapshotKey !== snapshot) {
            this.openModal();
        }

        return true;
    },

    ensureModal() {
        if (document.getElementById('schedulerRewardModal')) {
            return;
        }

        const modal = document.createElement('div');
        modal.id = 'schedulerRewardModal';
        modal.className = 'modal hidden';
        modal.innerHTML = `
            <div class="modal-content scheduler-modal-content">
                <h2>${this.t('schedulerTitle', 'Daily reward')}</h2>
                <p class="scheduler-subtitle">${this.t('schedulerSubtitle', 'Log in every day and claim your reward!')}</p>
                <div id="schedulerDaysGrid" class="scheduler-days-grid"></div>
                <div class="scheduler-actions">
                    <button id="btnSchedulerClaim" class="btn btn-primary">${this.t('schedulerClaimButton', 'Claim reward')}</button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        const btnClaim = document.getElementById('btnSchedulerClaim');
        if (btnClaim) {
            btnClaim.addEventListener('click', async () => {
                btnClaim.disabled = true;
                await this.claimToday();
                btnClaim.disabled = false;
            });
        }

        
    },

    refreshLocalizedUi() {
        const modal = document.getElementById('schedulerRewardModal');
        if (!modal) {
            return;
        }

        const title = modal.querySelector('.scheduler-modal-content h2');
        if (title) {
            title.textContent = this.t('schedulerTitle', 'Daily reward');
        }

        const subtitle = modal.querySelector('.scheduler-subtitle');
        if (subtitle) {
            subtitle.textContent = this.t('schedulerSubtitle', 'Log in every day and claim your reward!');
        }

        const btnClaim = document.getElementById('btnSchedulerClaim');
        if (btnClaim) {
            btnClaim.textContent = this.t('schedulerClaimButton', 'Claim reward');
        }

        const schedulerData = this.getSchedulerData();
        if (!schedulerData) {
            return;
        }

        const schedulerRef = this.getSchedulerRefFromData(schedulerData);
        const currentDayData = this.getCurrentDayData(schedulerRef);
        const dayState = this.resolveDayState(schedulerData, currentDayData, schedulerRef);
        this.renderModal(schedulerData, currentDayData, schedulerRef, dayState);
    },

    playRewardAcceptedSound(attempt = 0) {
        const now = Date.now();
        if (attempt === 0 && now - this._lastRewardSoundAt < 900) {
            return;
        }

        if (attempt === 0) {
            this.logRewardSoundDiagnostics('claim-sound-start');
        }

        const audioManager = this.getAudioManager();
        if (audioManager && typeof audioManager.playSound === 'function') {
            const blocked = typeof audioManager.isPlaybackBlocked === 'function'
                ? audioManager.isPlaybackBlocked()
                : false;

            if (blocked) {
                this.logRewardSoundDiagnostics(`claim-sound-blocked-attempt-${attempt}`);
                if (attempt < 3) {
                    setTimeout(() => this.playRewardAcceptedSound(attempt + 1), 350);
                } else {
                    this.playRewardAcceptedSoundDirect();
                }
                return;
            }

            this._lastRewardSoundAt = Date.now();

            
            
            if (typeof audioManager.playAudioFile === 'function') {
                audioManager.playAudioFile('assets/music/dally_bonus.mp3', 'dailyBonusReward');
            } else {
                audioManager.playSound('dailyBonus');
            }
            return;
        }

        if (window.UI && UI.playGoldSound) {
            this._lastRewardSoundAt = Date.now();
            UI.playGoldSound();
        }
    },

    playRewardAcceptedSoundDirect() {
        const audioManager = this.getAudioManager();
        if (audioManager && typeof audioManager.isSoundEnabled === 'function' && !audioManager.isSoundEnabled()) {
            return;
        }

        if (!audioManager || typeof audioManager.playAudioFile !== 'function') {
            return;
        }

        const blocked = typeof audioManager.isPlaybackBlocked === 'function'
            ? audioManager.isPlaybackBlocked(false)
            : false;
        if (blocked) {
            this.logRewardSoundDiagnostics('claim-sound-direct-blocked');
            return;
        }

        this._lastRewardSoundAt = Date.now();
        audioManager.playAudioFile('assets/music/dally_bonus.mp3', 'dailyBonusRewardDirect', true, null, () => {
            this.logRewardSoundDiagnostics('claim-sound-direct-failed');
        });
        this.logRewardSoundDiagnostics('claim-sound-direct-played');
    },

    showRewardClaimedNotification(message) {
        if (window.UI && typeof UI.showNotification === 'function') {
            UI.showNotification(message, '#2ecc71');
            return;
        }

        if (window.AdsManager && typeof window.AdsManager.showNotification === 'function') {
            window.AdsManager.showNotification(message, 'success');
        }
    },

    openModal() {
        const modal = document.getElementById('schedulerRewardModal');
        if (!modal) return;

        if (!this.isPreloaderFinished() || !this.isStartupPreloaderClosed() || window.__gpGameReadyReported !== true || !this.isStartupUiReleased() || this.isAnyAdPlaying()) {
            return;
        }

        if (!this.isMainMenuVisible()) {
            return;
        }

        modal.classList.remove('hidden');
        if (window.UI && UI.syncModalScale) {
            UI.syncModalScale('schedulerRewardModal');
        }
    },

    closeModal(markDismissed = false) {
        const modal = document.getElementById('schedulerRewardModal');
        if (!modal) return;
        if (markDismissed) {
            this._dismissedSnapshotKey = this._snapshotKey;
        }
        modal.classList.add('hidden');
    },

    canShowReleaseAnnouncement() {
        const schedulerData = this.getSchedulerData();
        if (!schedulerData) {
            return true;
        }

        const schedulerRef = this.getSchedulerRefFromData(schedulerData);
        const currentDayData = this.getCurrentDayData(schedulerRef);
        const dayState = this.resolveDayState(schedulerData, currentDayData, schedulerRef);
        return Boolean(dayState.todayClaimed || !dayState.canClaim);
    },

    renderModal(schedulerData, currentDayData, schedulerRef = undefined, dayState = null) {
        const grid = document.getElementById('schedulerDaysGrid');
        const btnClaim = document.getElementById('btnSchedulerClaim');
        if (!grid || !btnClaim) {
            return;
        }

        const scheduler = schedulerData.scheduler;
        const totalDays = Number(scheduler.days || 7);
        const state = dayState || this.resolveDayState(schedulerData, currentDayData, schedulerRef);
        const currentDay = Number(state.day || 1);

        grid.innerHTML = '';
        for (let day = 1; day <= totalDays; day++) {
            const dayInfo = this.getSchedulerDayInfo(schedulerRef !== undefined ? schedulerRef : this.resolveSchedulerRef(), day);

            const isCurrent = day === currentDay;
            const isPastDay = day < currentDay;
            const isClaimTargetDay = Boolean(state && state.canClaim && day === currentDay);
            
            // Используем ТОЛЬКО флаги из SDK (согласно документации GamePush)
            const isDayReached = Boolean(dayInfo && dayInfo.isDayReached);
            const isDayClaimed = Boolean(dayInfo && dayInfo.isDayClaimed);
            const isMissedDay = isPastDay && isDayReached && !isDayClaimed && !isClaimTargetDay;

            const item = document.createElement('div');
            
            // Классы согласно документации:
            // - .reached: день достигнут (isDayReached)
            // - .claimed: награда получена (isDayClaimed)
            // - .missed: день пропущен (достигнут, но не получен и уже в прошлом)
            // - .current: текущий день
            // - .claimable: день, который реально заберет кнопка "Получить награду"
            const claimableClass = isClaimTargetDay && !isDayClaimed ? ' claimable' : '';
            const missedClass = isMissedDay ? ' missed' : '';
            item.className = `scheduler-day-item${isDayReached ? ' reached' : ''}${isDayClaimed ? ' claimed' : ''}${missedClass}${isCurrent ? ' current' : ''}${claimableClass}`;

            const bonuses = dayInfo && Array.isArray(dayInfo.bonuses) ? dayInfo.bonuses : [];

            const title = document.createElement('div');
            title.className = 'scheduler-day-title';
            title.textContent = this.t('schedulerDayLabel', 'Day {0}', day);

            const bonusBox = document.createElement('div');
            bonusBox.className = 'scheduler-day-bonus';
            this.renderBonusList(bonusBox, bonuses);

            const status = document.createElement('div');
            status.className = 'scheduler-day-status';
            status.textContent = isDayClaimed
                ? this.t('schedulerStatusClaimed', 'Claimed')
                : (isClaimTargetDay
                    ? this.t('schedulerStatusAvailable', 'Available')
                    : (isMissedDay
                        ? this.t('schedulerStatusMissed', 'Missed')
                        : (isDayReached
                        ? this.t('schedulerStatusReached', 'Reached')
                        : this.t('schedulerStatusLocked', 'Not reached'))));

            item.appendChild(title);
            item.appendChild(bonusBox);
            item.appendChild(status);
            grid.appendChild(item);
        }

        btnClaim.disabled = !state.canClaim;
    },

    renderBonusList(container, bonuses) {
        container.innerHTML = '';

        const source = Array.isArray(bonuses) && bonuses.length > 0
            ? bonuses
            : [this.rewardFallbackTag];

        for (const bonus of source) {
            const row = document.createElement('div');
            row.className = 'scheduler-bonus-row';

            const rewardRef = this.extractRewardRefFromBonus(bonus);
            const rewardMeta = this.resolveRewardMetaByRef(rewardRef);

            if (rewardMeta && rewardMeta.iconSmall) {
                const icon = document.createElement('img');
                icon.className = 'scheduler-bonus-icon';
                icon.src = String(rewardMeta.iconSmall);
                icon.alt = rewardMeta.name || 'Reward';
                row.appendChild(icon);
            }

            const label = document.createElement('span');
            label.className = 'scheduler-bonus-label';
            label.textContent = rewardMeta && rewardMeta.name
                ? rewardMeta.name
                : this.formatBonusLabel(bonus);
            row.appendChild(label);

            container.appendChild(row);
        }
    },

    formatBonusLabel(bonus) {
        if (typeof bonus === 'string' || typeof bonus === 'number') {
            const reward = this.resolveRewardMetaByRef(bonus);
            return reward && reward.name ? reward.name : String(bonus);
        }

        if (!bonus || typeof bonus !== 'object') {
            const fallbackMeta = this.resolveRewardMetaByRef(this.rewardFallbackTag);
            return fallbackMeta && fallbackMeta.name ? fallbackMeta.name : this.rewardFallbackTag;
        }

        const rewardRef = bonus.rewardTag || bonus.rewardId || bonus.reward || bonus.tag || bonus.id || null;
        const rewardMeta = this.resolveRewardMetaByRef(rewardRef);
        if (rewardMeta && rewardMeta.name) {
            return rewardMeta.name;
        }

        if ((bonus.type || '').toUpperCase() === 'REWARD') {
            const fallbackMeta = this.resolveRewardMetaByRef(this.rewardFallbackTag);
            return fallbackMeta && fallbackMeta.name ? fallbackMeta.name : this.rewardFallbackTag;
        }

        if (bonus.name) {
            return String(bonus.name);
        }
        if (bonus.title) {
            return String(bonus.title);
        }

        const value = bonus.value ?? bonus.amount ?? bonus.count ?? null;
        if (bonus.type && value !== null) {
            return `${bonus.type}: ${value}`;
        }
        if (bonus.type) {
            return String(bonus.type);
        }

        return this.t('schedulerRewardGeneric', 'Reward');
    },

    extractRewardRefFromBonus(bonus) {
        if (bonus === null || bonus === undefined) {
            return this.rewardFallbackTag;
        }
        if (typeof bonus === 'string' || typeof bonus === 'number') {
            return bonus;
        }
        if (typeof bonus !== 'object') {
            return this.rewardFallbackTag;
        }
        return bonus.rewardTag || bonus.rewardId || bonus.reward || bonus.tag || bonus.id || this.rewardFallbackTag;
    },

    getRewardsListSafe() {
        const rewardsApi = this.getRewardsApi();
        return rewardsApi && Array.isArray(rewardsApi.list) ? rewardsApi.list : [];
    },

    resolveRewardMetaByRef(ref) {
        if (ref === null || ref === undefined) {
            return null;
        }

        const candidates = [];
        candidates.push(ref);

        if (typeof ref === 'string') {
            const numeric = Number(ref);
            if (Number.isFinite(numeric)) {
                candidates.push(numeric);
            }
        }

        if (typeof ref === 'object') {
            if (ref.tag !== undefined) {
                candidates.push(ref.tag);
            }
            if (ref.id !== undefined) {
                candidates.push(ref.id);
            }
            if (ref.rewardTag !== undefined) {
                candidates.push(ref.rewardTag);
            }
            if (ref.rewardId !== undefined) {
                candidates.push(ref.rewardId);
            }
        }

        const rewardsList = this.getRewardsListSafe();
        const byTag = new Map();
        const byId = new Map();

        for (const reward of rewardsList) {
            if (!reward || typeof reward !== 'object') {
                continue;
            }
            if (reward.tag !== undefined && reward.tag !== null) {
                byTag.set(String(reward.tag), reward);
            }
            if (reward.id !== undefined && reward.id !== null) {
                byId.set(Number(reward.id), reward);
            }
        }

        for (const candidate of candidates) {
            if (candidate === null || candidate === undefined) {
                continue;
            }

            const asString = typeof candidate === 'string' ? candidate : null;
            const asNumber = Number(candidate);

            if (asString && byTag.has(asString)) {
                const reward = byTag.get(asString);
                return {
                    name: reward.name || reward.title || reward.tag || null,
                    iconSmall: reward.iconSmall || reward.icon || null,
                    tag: reward.tag,
                    id: reward.id
                };
            }

            if (Number.isFinite(asNumber) && byId.has(asNumber)) {
                const reward = byId.get(asNumber);
                return {
                    name: reward.name || reward.title || reward.tag || null,
                    iconSmall: reward.iconSmall || reward.icon || null,
                    tag: reward.tag,
                    id: reward.id
                };
            }

            {
                let info = this.getRewardInfo(candidate);
                if (!info && typeof candidate !== 'object') {
                    const payload = typeof candidate === 'number' ? { id: candidate } : { tag: String(candidate) };
                    info = this.getRewardInfo(payload);
                }

                const reward = info && info.reward ? info.reward : null;
                if (reward) {
                    return {
                        name: reward.name || reward.title || reward.tag || (reward.id !== undefined ? `Reward ${reward.id}` : null),
                        iconSmall: reward.iconSmall || reward.icon || null,
                        tag: reward.tag,
                        id: reward.id
                    };
                }
            }
        }

        return null;
    },

    async claimToday() {
        const api = this.getApi();
        if (!api) {
            return false;
        }

        const schedulerData = this.getSchedulerData();
        const schedulerRef = this.getSchedulerRefFromData(schedulerData);
        const currentDayData = this.getCurrentDayData(schedulerRef);
        const dayState = this.resolveDayState(schedulerData, currentDayData, schedulerRef);
        const claimSnapshot = this.buildSnapshotKey(currentDayData);
        const day = Number(dayState.day || 1);

        let result = null;
        this._claimInProgress = true;
        
        try {
            // Просто вызываем claimDay для текущего дня - SDK сам решит что можно
            result = await this.claimSchedulerDay(schedulerRef, day);
            
            if (!result) {
                // Если не сработало - пробуем со всеми активностями дня
                result = await this.claimSchedulerAllDay(schedulerRef, day);
            }

            if (!result) {
                console.warn('📅 All claim attempts failed');
                if (window.UI && UI.showNotification) {
                    UI.showNotification(
                        this.t('schedulerClaimUnavailable', 'Daily reward is unavailable'), 
                        '#f39c12'
                    );
                }
                return false;
            }

            this.markDayClaimedLocal(schedulerRef, day);
            this.showRewardClaimedNotification(
                this.t('schedulerClaimedToday', 'Daily reward received!')
            );
            this.playRewardAcceptedSound();
            await this.acceptUnacceptedRewards(
                this.t('schedulerRewardAccepted', 'Reward received')
            );
            await this.applyRemoteCrystals(
                this.t('schedulerClaimedToday', 'Daily reward received!')
            );
            this._dismissedSnapshotKey = claimSnapshot;
            this.startAutoOpenCooldown(15000);
            await this.refresh(false);
            return true;
        } finally {
            this._claimInProgress = false;
        }
    },

    getRewardRef(playerReward) {
        if (!playerReward) {
            return null;
        }

        if (playerReward.rewardId !== undefined && playerReward.rewardId !== null) {
            return Number(playerReward.rewardId);
        }
        if (playerReward.id !== undefined && playerReward.id !== null) {
            return Number(playerReward.id);
        }
        if (playerReward.tag) {
            return String(playerReward.tag);
        }
        return null;
    },

    getRewardTitle(ref) {
        if (ref === null || ref === undefined) {
            return null;
        }

        const info = this.getRewardInfo(ref);
        if (!info || !info.reward) {
            return null;
        }

        return info.reward.name || info.reward.title || info.reward.tag || null;
    },

    async acceptUnacceptedRewards(notificationTitle = '') {
        const given = this.getGivenRewardsList();
        if (!Array.isArray(given) || given.length === 0) {
            return 0;
        }

        let acceptedCount = 0;
        const acceptedTitles = [];

        for (const playerReward of given) {
            const ref = this.getRewardRef(playerReward);
            if (ref === null || ref === undefined) {
                continue;
            }

            if (this.hasRewardAccepted(ref)) {
                continue;
            }

            const result = await this.acceptReward(ref);
            if (result) {
                acceptedCount += 1;
                const title = this.getRewardTitle(ref);
                if (title) {
                    acceptedTitles.push(title);
                }
            }
        }

        if (acceptedCount > 0 && window.UI && UI.showNotification) {
            const first = acceptedTitles[0] || this.t('schedulerRewardGeneric', 'Reward');
            const suffix = acceptedCount > 1 ? ` (+${acceptedCount - 1})` : '';
            const base = notificationTitle || this.t('schedulerRewardAcceptedBase', 'Reward accepted');
            UI.showNotification(`${base}: ${first}${suffix}`, '#2ecc71');
        }

        return acceptedCount;
    },

    async applyRemoteCrystals(successMessage) {
        const gp = this.getGp();
        const canSyncPlayer = gp && gp.player && typeof gp.player.get === 'function';
        if (!canSyncPlayer) {
            if (window.UI && UI.showNotification) {
                UI.updateMainMenu();
            }
            return;
        }

        const before = Number(SaveManager.getCrystals() || 0);

        if (window.AuthManager && AuthManager.forceSave) {
            await AuthManager.forceSave(true);
        }

        const remote = Number(gp.player.get('crystals'));
        if (Number.isFinite(remote)) {
            SaveManager.setCrystals(Math.max(0, Math.floor(remote)));
        }

        const after = Number(SaveManager.getCrystals() || 0);
        const delta = after - before;

        if (window.UI && UI.showNotification) {
            if (delta > 0) {
                UI.showNotification(this.t('schedulerRewardCredited', 'Reward credited: +{0} 💎', delta), '#2ecc71');
            }
            UI.updateMainMenu();
        }
    }
};

window.SchedulerManager = SchedulerManager;

window.addEventListener('load', () => {
    SchedulerManager.init();
});
