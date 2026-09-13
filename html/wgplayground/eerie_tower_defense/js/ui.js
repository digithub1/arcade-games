


const UI = {
    
    screens: {
        mainMenu: null,
        upgradeScreen: null,
        gameScreen: null,
        cardsScreen: null,
        talentScreen: null,
        achievementsScreen: null,
        shopScreen: null,
        optionsScreen: null,
        crystalStoreScreen: null,
        helpScreen: null,
        changelogScreen: null
    },

    
    currentScreen: 'mainMenu',

    
    _saveEventsBound: false,

    
    _initialized: false,

    
    debugLogs: false,

    
    _scaleSyncRafId: null,
    _scaleSyncTimer: null,
    _mainMenuRefreshRafId: null,
    _bonusBadgeRetryTimers: [],
    _bonusBadgeEventsBound: false,
    _cloudSaveTimer: null,
    _cloudSaveInProgress: false,
    _cloudRefreshInProgress: false,
    _lastCloudRefreshAt: 0,
    _selectedTalentNodeId: null,
    _nativeToastClickGuardBound: false,
    _layoutMode: 'desktop',
    _mobileMainPanelOpen: null,
    _mobileMainMenuPage: 'main',
    _pendingStageSelection: 1,
    _feedbackHistoryHasMore: false,
    _feedbackHistoryOffset: 0,
    _feedbackHistoryPageSize: 12,
    _feedbackHistoryLoading: false,
    _feedbackHistoryItems: [],
    _feedbackItemsById: {},
    _activeFeedbackThreadId: null,
     _feedbackThreadSending: false,
     _feedbackEventsBound: false,
    _feedbackPromptShownThisMenuVisit: false,
    _uiClickSoundBound: false,
    _shopEventsBound: false,
    _crystalStoreEventsBound: false,
    _profileModalEventsBound: false,
    _profileModalState: null,
    _modifierHudCollapsed: true,
    _selectedModifierId: null,
    _runModifierIntroTimer: null,
    _cardsExitInProgress: false,
    _cardsSaveOverlayShownAt: 0,
    _progressSaveOverlayShownAt: 0,
    _releaseAnnouncementShown: false,
    _compensationClaimInProgress: false,
    _modalSoundsBound: false,
    _modalSoundObserver: null,
     _modalVisibilityState: null,
     _initialScaleStabilized: false,
     _startupRevealDone: false,
     _menuChatEventsBound: false,
     _menuChatSdkEventsBound: false,
     _menuChatSdkReadyListenerBound: false,
     _menuChatOpenedChannelId: null,
     _menuChatUnreadCount: 0,
       _talentView: {
        scale: 1,
        panX: 0,
        panY: 0
    },

    getGp() {
        return window.GP || window.__GP_SDK_INSTANCE || window.gp || null;
    },

    getGpPayments() {
        const gp = this.getGp();
        return gp && gp.payments ? gp.payments : null;
    },

    getDefaultPlayerAvatar() {
        return 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Cdefs%3E%3ClinearGradient id=%22g%22 x1=%220%22 y1=%220%22 x2=%221%22 y2=%221%22%3E%3Cstop offset=%220%25%22 stop-color=%22%231d3147%22/%3E%3Cstop offset=%22100%25%22 stop-color=%22%23486f92%22/%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx=%2250%22 cy=%2250%22 r=%2248%22 fill=%22url(%23g)%22/%3E%3Ccircle cx=%2250%22 cy=%2239%22 r=%2218%22 fill=%22%23dcecff%22 fill-opacity=%220.9%22/%3E%3Cpath d=%22M22 82c4-15 16-24 28-24s24 9 28 24%22 fill=%22%23dcecff%22 fill-opacity=%220.9%22/%3E%3C/svg%3E';
    },

    getProfileCosmetic(type, itemId) {
        if (typeof ProfileCosmetics === 'undefined' || !ProfileCosmetics) {
            return null;
        }

        return type === 'background'
            ? ProfileCosmetics.getBackgroundById(itemId)
            : ProfileCosmetics.getFrameById(itemId);
    },

    getProfileFrameClass(frameId) {
        const safeId = (typeof ProfileCosmetics !== 'undefined' && ProfileCosmetics && typeof ProfileCosmetics.sanitizeFrameId === 'function')
            ? ProfileCosmetics.sanitizeFrameId(frameId)
            : 'frame_default';
        return `profile-frame--${safeId}`;
    },

    getProfileBackgroundClass(backgroundId) {
        const safeId = (typeof ProfileCosmetics !== 'undefined' && ProfileCosmetics && typeof ProfileCosmetics.sanitizeBackgroundId === 'function')
            ? ProfileCosmetics.sanitizeBackgroundId(backgroundId)
            : 'bg_default';
        return `profile-bg--${safeId}`;
    },

    getResolvedPublicProfile(rawValue) {
        if (window.AuthManager && typeof AuthManager.parsePublicProfileValue === 'function') {
            return AuthManager.parsePublicProfileValue(rawValue);
        }

        return {
            v: 1,
            bestWave: SaveManager.getBestWave ? SaveManager.getBestWave() : 0,
            bestWaveByStage: SaveManager.getDefaultStageBestWaveMap ? SaveManager.getDefaultStageBestWaveMap() : { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
            totalKills: SaveManager.getTotalKills ? SaveManager.getTotalKills() : 0,
            totalGames: SaveManager.getTotalGames ? SaveManager.getTotalGames() : 0,
            frameId: SaveManager.getDefaultProfileFrameId ? SaveManager.getDefaultProfileFrameId() : 'frame_default',
            backgroundId: SaveManager.getDefaultProfileBackgroundId ? SaveManager.getDefaultProfileBackgroundId() : 'bg_default'
        };
    },

    getLocalizedCosmeticName(item) {
        if (!item) {
            return '';
        }

        if (typeof LocalizationManager !== 'undefined' && LocalizationManager && typeof LocalizationManager.t === 'function') {
            return LocalizationManager.t(item.nameKey, item.name);
        }

        return item.name;
    },

    getLocalizedCosmeticDescription(item) {
        if (!item) {
            return '';
        }

        if (typeof LocalizationManager !== 'undefined' && LocalizationManager && typeof LocalizationManager.t === 'function') {
            return LocalizationManager.t(item.descKey, item.description);
        }

        return item.description;
    },

    getMoonSealCrystalOffers() {
        return [
            { id: 'moon_crystals_small', crystals: 180, moonSealsCost: 15 },
            { id: 'moon_crystals_medium', crystals: 650, moonSealsCost: 55 },
            { id: 'moon_crystals_large', crystals: 2900, moonSealsCost: 200 },
            { id: 'moon_crystals_ultimate', crystals: 6500, moonSealsCost: 420 }
        ];
    },

    getStarterMoonBundleOffer() {
        return {
            id: 'starter_moon_bundle',
            moonSealsCost: 60,
            frameId: 'frame_prem',
            backgroundId: 'bg_prem'
        };
    },

    isStarterMoonBundleOwned() {
        const offer = this.getStarterMoonBundleOffer();
        return SaveManager.isProfileCosmeticOwned('frame', offer.frameId)
            && SaveManager.isProfileCosmeticOwned('background', offer.backgroundId);
    },

    getProfileAvatar(playerData) {
        const avatar = playerData && typeof playerData.avatar === 'string' ? playerData.avatar.trim() : '';
        return avatar || this.getDefaultPlayerAvatar();
    },

    buildProfileViewModel(playerData, rawProfile, options = {}) {
        const isSelf = Boolean(options.isSelf);
        const fallbackName = (typeof LocalizationManager !== 'undefined' && LocalizationManager)
            ? LocalizationManager.t('playerFallbackName', 'Игрок')
            : 'Игрок';
        const name = playerData && playerData.name ? String(playerData.name) : fallbackName;
        const profile = this.getResolvedPublicProfile(rawProfile);

        return {
            player: {
                id: playerData && playerData.id ? playerData.id : null,
                name,
                avatar: this.getProfileAvatar(playerData)
            },
            profile,
            isSelf
        };
    },

    renderProfileCard(playerData, profile, options = {}) {
        const safeName = this.escapeHtml(playerData && playerData.name ? playerData.name : LocalizationManager.t('playerFallbackName', 'Игрок'));
        const safeAvatar = this.escapeHtml(this.getProfileAvatar(playerData));
        const frameClass = this.getProfileFrameClass(profile.frameId);
        const backgroundClass = this.getProfileBackgroundClass(profile.backgroundId);
        const compact = Boolean(options.compact);
        const bestWaveLabel = this.escapeHtml(LocalizationManager.t('playerProfileBestWaveShort', 'Рекорд'));
        const killsLabel = this.escapeHtml(LocalizationManager.t('playerProfileKillsShort', 'Убийств'));
        const gamesLabel = this.escapeHtml(LocalizationManager.t('playerProfileGamesShort', 'Забегов'));

        return `
            <article class="player-profile-card ${backgroundClass} ${compact ? 'is-compact' : ''}">
                <div class="player-profile-card__identity">
                    <div class="profile-avatar-shell ${frameClass}">
                        <img src="${safeAvatar}" alt="${safeName}" class="profile-avatar-image">
                    </div>
                    <div class="player-profile-card__meta">
                        <div class="player-profile-card__name">${safeName}</div>
                        <div class="player-profile-card__subtitle">${this.escapeHtml(LocalizationManager.t(options.subtitleKey || 'playerProfileSubtitle', options.subtitleFallback || 'Защитник башни'))}</div>
                    </div>
                </div>
                <div class="player-profile-card__summary">
                    <div class="player-profile-card__stat">
                        <span>${bestWaveLabel}</span>
                        <strong>${Math.max(0, Math.floor(Number(profile.bestWave) || 0))}</strong>
                    </div>
                    <div class="player-profile-card__stat">
                        <span>${killsLabel}</span>
                        <strong>${Math.max(0, Math.floor(Number(profile.totalKills) || 0))}</strong>
                    </div>
                    <div class="player-profile-card__stat">
                        <span>${gamesLabel}</span>
                        <strong>${Math.max(0, Math.floor(Number(profile.totalGames) || 0))}</strong>
                    </div>
                </div>
            </article>
        `;
    },

    renderProfileStageStats(profile) {
        const stageMap = profile && profile.bestWaveByStage ? profile.bestWaveByStage : {};
        const maxStage = SaveManager.getStageCount ? SaveManager.getStageCount() : 5;
        const cards = [];

        for (let stage = 1; stage <= maxStage; stage += 1) {
            const score = Math.max(0, Math.floor(Number(stageMap[stage]) || 0));
            cards.push(`
                <div class="player-profile-stage-card">
                    <span class="player-profile-stage-card__label">${this.escapeHtml(LocalizationManager.t('stageLabel', 'Стадия {0}', stage))}</span>
                    <strong class="player-profile-stage-card__value">${score}</strong>
                </div>
            `);
        }

        return cards.join('');
    },

    renderProfileModal(viewModel) {
        const modal = document.getElementById('playerProfileModal');
        const titleEl = document.getElementById('playerProfileModalTitle');
        const eyebrowEl = document.getElementById('playerProfileModalEyebrow');
        const bodyEl = document.getElementById('playerProfileModalBody');
        const btnShop = document.getElementById('btnPlayerProfileShop');
        const btnLogout = document.getElementById('btnPlayerProfileLogout');

        if (!modal || !titleEl || !eyebrowEl || !bodyEl) {
            return;
        }

        this._profileModalState = viewModel;
        titleEl.textContent = viewModel.isSelf
            ? LocalizationManager.t('playerProfileSelfTitle', 'Мой профиль')
            : LocalizationManager.t('playerProfileOtherTitle', 'Профиль игрока');
        eyebrowEl.textContent = viewModel.isSelf
            ? LocalizationManager.t('playerProfileSelfEyebrow', 'Личный баннер')
            : LocalizationManager.t('playerProfileOtherEyebrow', 'Игрок из таблицы лидеров');

        bodyEl.innerHTML = `
            <div class="player-profile-modal__grid">
                <div class="player-profile-modal__hero">
                    ${this.renderProfileCard(viewModel.player, viewModel.profile, {
                        subtitleKey: viewModel.isSelf ? 'playerProfileSelfSubtitle' : 'playerProfileOtherSubtitle',
                        subtitleFallback: viewModel.isSelf ? 'Ваш текущий профиль' : 'Публичная карточка игрока'
                    })}
                </div>
                <div class="player-profile-stat-panel">
                    <div class="player-profile-stat-panel__title">${this.escapeHtml(LocalizationManager.t('playerProfileOverview', 'Обзор'))}</div>
                    <div class="player-profile-stat-list">
                        <div class="player-profile-stat-line"><span>${this.escapeHtml(LocalizationManager.t('bestWave', '🎯 Рекорд волн:'))}</span><strong>${Math.max(0, Math.floor(Number(viewModel.profile.bestWave) || 0))}</strong></div>
                        <div class="player-profile-stat-line"><span>${this.escapeHtml(LocalizationManager.t('playerProfileTotalKills', 'Всего убийств'))}</span><strong>${Math.max(0, Math.floor(Number(viewModel.profile.totalKills) || 0))}</strong></div>
                        <div class="player-profile-stat-line"><span>${this.escapeHtml(LocalizationManager.t('playerProfileTotalGames', 'Всего забегов'))}</span><strong>${Math.max(0, Math.floor(Number(viewModel.profile.totalGames) || 0))}</strong></div>
                    </div>
                </div>
            </div>
            <div class="player-profile-stage-panel">
                <div class="player-profile-stat-panel__title">${this.escapeHtml(LocalizationManager.t('playerProfileStageBest', 'Лучшие волны по стадиям'))}</div>
                <div class="player-profile-stage-grid">
                    ${this.renderProfileStageStats(viewModel.profile)}
                </div>
            </div>
        `;

        if (btnShop) {
            btnShop.classList.toggle('hidden', !viewModel.isSelf);
        }
        if (btnLogout) {
            btnLogout.classList.toggle('hidden', !viewModel.isSelf);
        }

        modal.classList.remove('hidden');
        this.syncModalScale('playerProfileModal');
    },

    openSelfProfileModal() {
        if (!window.AuthManager || !AuthManager.isAuthorized) {
            if (window.AuthManager && typeof AuthManager.showAuthDialog === 'function') {
                AuthManager.showAuthDialog();
            }
            return;
        }

        this.renderProfileModal(this.buildProfileViewModel(
            AuthManager.getPlayerInfo ? AuthManager.getPlayerInfo() : {},
            AuthManager.buildPublicProfileSnapshot ? AuthManager.buildPublicProfileSnapshot() : null,
            { isSelf: true }
        ));
    },

    openPlayerProfileModal(playerData, rawProfile, options = {}) {
        this.renderProfileModal(this.buildProfileViewModel(playerData, rawProfile, options));
    },

    closePlayerProfileModal() {
        const modal = document.getElementById('playerProfileModal');
        if (modal) {
            modal.classList.add('hidden');
        }
        this._profileModalState = null;
    },

    refreshOpenPlayerProfileModal() {
        const modal = document.getElementById('playerProfileModal');
        if (!modal || modal.classList.contains('hidden') || !this._profileModalState) {
            return;
        }

        if (this._profileModalState.isSelf) {
            this.openSelfProfileModal();
            return;
        }

        this.renderProfileModal(this._profileModalState);
    },

    getMenuChatChannelId() {
        return 97906;
    },

    isMenuChatSupported() {
        const gp = this.getGp();
        return Boolean(gp && gp.channels && typeof gp.channels.openChat === 'function');
    },

    applyChatBadgeState(element, unreadCount) {
        if (!element) {
            return;
        }

        const unread = Math.max(0, Number(unreadCount) || 0);
        const hasCount = unread >= 10;
        element.classList.toggle('hidden', unread <= 0);
        element.classList.toggle('has-count', hasCount);
        element.textContent = hasCount ? '9+' : '';
    },

    refreshMenuChatUi() {
        const wrap = document.getElementById('menuChatWrap');
        const totalBadge = document.getElementById('menuChatTotalBadge');
        const btnGameChat = document.getElementById('btnGameChat');
        const btnGameChatBadge = document.getElementById('btnGameChatBadge');
        const supported = this.isMenuChatSupported();

        if (wrap) {
            wrap.classList.toggle('hidden', !supported);
        }

        if (btnGameChat) {
            btnGameChat.classList.toggle('hidden', !supported);
        }

        if (!supported) {
            return;
        }

        this.applyChatBadgeState(totalBadge, this._menuChatUnreadCount);
        this.applyChatBadgeState(btnGameChatBadge, this._menuChatUnreadCount);
    },

    bindMenuChatUiEvents() {
        if (this._menuChatEventsBound) {
            return;
        }
        this._menuChatEventsBound = true;

        const btnMenuChat = document.getElementById('btnMenuChat');
        const btnGameChat = document.getElementById('btnGameChat');

        if (btnMenuChat) {
            btnMenuChat.addEventListener('click', (event) => {
                event.preventDefault();
                this.openMenuChatChannel(this.getMenuChatChannelId());
            });
        }

        if (btnGameChat) {
            btnGameChat.addEventListener('click', (event) => {
                event.preventDefault();
                this.openMenuChatChannel(this.getMenuChatChannelId());
            });
        }
    },

    bindMenuChatSdkEvents() {
        if (this._menuChatSdkEventsBound) {
            return true;
        }

        const gp = this.getGp();
        const channels = gp && gp.channels ? gp.channels : null;
        if (!channels || typeof channels.on !== 'function') {
            return false;
        }

        channels.on('event:message', (message) => {
            if (Number(message && message.channelId) !== this.getMenuChatChannelId()) {
                return;
            }

            const currentPlayerId = gp && gp.player ? gp.player.id : null;
            if (currentPlayerId !== null && currentPlayerId !== undefined && String(message.authorId) === String(currentPlayerId)) {
                return;
            }

            if (this._menuChatOpenedChannelId === this.getMenuChatChannelId()) {
                this._menuChatUnreadCount = 0;
            } else {
                this._menuChatUnreadCount += 1;
            }

            this.refreshMenuChatUi();
        });

        channels.on('openChat', () => {
            if (!this._menuChatOpenedChannelId) {
                return;
            }

            this._menuChatUnreadCount = 0;
            this.refreshMenuChatUi();
        });

        channels.on('closeChat', () => {
            this._menuChatOpenedChannelId = null;
            this.refreshMenuChatUi();
        });

        channels.on('error:openChat', () => {
            this._menuChatOpenedChannelId = null;
            this.refreshMenuChatUi();
            this.showNotification(LocalizationManager.t('menuChatOpenError', 'Не удалось открыть чат. Попробуйте позже'), 'warning');
        });

        this._menuChatSdkEventsBound = true;
        return true;
    },

    setupMenuChatIntegration() {
        this.bindMenuChatUiEvents();
        this.refreshMenuChatUi();
        this.bindMenuChatSdkEvents();

        if (this._menuChatSdkReadyListenerBound) {
            return;
        }
        this._menuChatSdkReadyListenerBound = true;

        window.addEventListener('gp:sdk-ready', () => {
            this.bindMenuChatSdkEvents();
            this.refreshMenuChatUi();
        });
    },

    openMenuChatChannel(channelId) {
        const gp = this.getGp();
        const channels = gp && gp.channels ? gp.channels : null;
        if (!channels || typeof channels.openChat !== 'function') {
            this.showNotification(LocalizationManager.t('menuChatUnavailable', 'Чаты недоступны на этой платформе'), 'warning');
            this.refreshMenuChatUi();
            return;
        }

        this._menuChatOpenedChannelId = Number(channelId);
        this._menuChatUnreadCount = 0;
        this.refreshMenuChatUi();

        try {
            const openResult = channels.openChat({ id: this._menuChatOpenedChannelId });
            if (openResult && typeof openResult.catch === 'function') {
                openResult.catch(() => {
                    this._menuChatOpenedChannelId = null;
                    this.refreshMenuChatUi();
                    this.showNotification(LocalizationManager.t('menuChatOpenError', 'Не удалось открыть чат. Попробуйте позже'), 'warning');
                });
            }
        } catch (_) {
            this._menuChatOpenedChannelId = null;
            this.refreshMenuChatUi();
            this.showNotification(LocalizationManager.t('menuChatOpenError', 'Не удалось открыть чат. Попробуйте позже'), 'warning');
        }
    },

    isMenuChatOpen() {
        return this._menuChatOpenedChannelId !== null;
    },

    isEditableElement(element) {
        if (!element || typeof element !== 'object') {
            return false;
        }

        const tagName = typeof element.tagName === 'string'
            ? element.tagName.toUpperCase()
            : '';

        if (tagName === 'INPUT' || tagName === 'TEXTAREA' || tagName === 'SELECT') {
            return true;
        }

        if (element.isContentEditable) {
            return true;
        }

        return Boolean(element.closest && element.closest('[contenteditable="true"]'));
    },

    shouldBlockGameplayHotkeys(event) {
        if (this.isMenuChatOpen()) {
            return true;
        }

        const target = event && event.target ? event.target : null;
        if (this.isEditableElement(target)) {
            return true;
        }

        return this.isEditableElement(document.activeElement);
    },

    async initGpPaymentsDirect() {
        const gp = this.getGp();
        const payments = this.getGpPayments();
        if (!gp || !payments) {
            return false;
        }

        if (gp.isAllowedOrigin === false) {
            return false;
        }

        if (payments.isAvailable === undefined) {
            for (let i = 0; i < 20; i++) {
                await new Promise((resolve) => setTimeout(resolve, 150));
                if (payments.isAvailable !== undefined) break;
            }
        }

        if (!payments.isAvailable) {
            return false;
        }

        let fetchedProducts = Array.isArray(payments.products) ? payments.products : [];

        if (typeof payments.fetchProducts === 'function') {
            try {
                const result = await payments.fetchProducts();
                if (result && typeof result === 'object') {
                    const { products, playerPurchases } = result;
                    if (Array.isArray(products)) {
                        fetchedProducts = products;
                    }
                    if (Array.isArray(playerPurchases)) {
                        console.log('💳 UI payments sync: playerPurchases=', playerPurchases.length);
                    }
                }
            } catch (_) {
                
            }
        }

        if (fetchedProducts.length === 0 && typeof payments.fetch === 'function') {
            try {
                await payments.fetch();
                if (Array.isArray(payments.products)) {
                    fetchedProducts = payments.products;
                }
            } catch (_) {
                
            }
        }

        return true;
    },

    async purchaseViaGp(productId) {
        const gp = this.getGp();
        const payments = this.getGpPayments();
        if (!gp || !payments) {
            return { success: false, error: 'PAYMENTS_NOT_INITIALIZED' };
        }

        if (gp.isAllowedOrigin === false || payments.isAvailable === false) {
            return { success: false, error: 'PAYMENTS_NOT_AVAILABLE' };
        }

        try {
            const numericId = Number(productId);
            const params = Number.isFinite(numericId) && String(numericId) === String(productId)
                ? { id: numericId }
                : { tag: productId };
            const result = await payments.purchase(params);
            return { success: Boolean(result), raw: result || null };
        } catch (error) {
            const msg = String(error && error.message ? error.message : '').toLowerCase();
            if (msg.includes('payment_rejected') || msg.includes('payment_cancel')) {
                return { success: false, canceled: true, error: 'PAYMENT_REJECTED' };
            }
            return { success: false, error: error.message || 'PURCHASE_FAILED' };
        }
    },

    async consumeViaGp(purchaseToken) {
        const payments = this.getGpPayments();
        if (!payments || typeof payments.consume !== 'function') {
            return false;
        }

        try {
            const numericId = Number(purchaseToken);
            const params = Number.isFinite(numericId) && String(numericId) === String(purchaseToken)
                ? { id: numericId }
                : { tag: purchaseToken };
            await payments.consume(params);
            return true;
        } catch (_) {
            return false;
        }
    },

    hasGpEvent(tag) {
        const gp = this.getGp();
        if (!gp || !gp.events) {
            return false;
        }

        
        try {
            if (typeof gp.events.has === 'function') {
                return Boolean(gp.events.has(tag));
            }
        } catch (_) {
            return false;
        }

        return false;
    },

    
     init() {
         if (this._initialized) {
             return;
         }
         this._initialized = true;

         
         this.screens.mainMenu = document.getElementById('mainMenu');
         this.screens.upgradeScreen = document.getElementById('upgradeScreen');
           this.screens.gameScreen = document.getElementById('gameScreen');
            this.screens.cardsScreen = document.getElementById('cardsScreen');
            this.screens.talentScreen = document.getElementById('talentScreen');
            this.screens.achievementsScreen = document.getElementById('achievementsScreen');
           this.screens.shopScreen = document.getElementById('shopScreen');
           this.screens.optionsScreen = document.getElementById('optionsScreen');
           this.screens.crystalStoreScreen = document.getElementById('crystalStoreScreen');
          this.screens.helpScreen = document.getElementById('helpScreen');
          this.screens.changelogScreen = document.getElementById('changelogScreen');

          
           this.bindEvents();
           this.bindGlobalClickSounds();
           this.bindModalSounds();
            
            
            this.initVisualEffects();

            
            
            this.disableNativeAchievementToastClicks();
            this.installNativeToastClickGuard();
           
           
           this.setupGardenModal();
          
          
          this.setupForgeSystem();
          
          
          this.setupCardTooltips();
          
           
           this.updateMainMenu();
           this.updateBonusDayBadge();
           
           
           if (typeof LeaderboardManager !== 'undefined') {
               setTimeout(() => LeaderboardManager.init(), 500);
           }
           
            
            this.updateLayoutMode();
            this.syncMobileMainMenuState();
            this.syncMainMenuScale();
            this.setupMenuChatIntegration();
            this.syncCurrentScreenScale();
            this.runInitialScaleStabilization();
            this.finalizeStartupReveal();

            if (
                window.__gpReadyLockRequired === false
                && typeof window.__releaseStartupUi === 'function'
                && window.LocalizationManager
                && typeof LocalizationManager.isReady === 'function'
                && LocalizationManager.isReady()
            ) {
                window.__releaseStartupUi();
            }
           
           
            window.addEventListener('resize', () => {
                this.scheduleScaleSync(0);
            });

            window.addEventListener('load', () => {
                this.scheduleScaleSync(0);
                setTimeout(() => this.scheduleScaleSync(0), 120);
                setTimeout(() => this.scheduleScaleSync(0), 400);
            });

            window.addEventListener('pageshow', () => {
                this.scheduleScaleSync(0);
                setTimeout(() => this.scheduleScaleSync(0), 120);
            });
          
          
          if (typeof AudioManager !== 'undefined') {
              AudioManager.playMenuMusic();
          }
          
           
           setTimeout(async () => {
               console.log('=== ОТЛАДКА КНОПОК ===');
               console.log('btnCards:', document.getElementById('btnCards') ? '✅' : '❌');
               console.log('btnCrystalStore:', document.getElementById('btnCrystalStore') ? '✅' : '❌');
               console.log('========================');
               
               
               this.updateMainMenu();
               
                
                if (window.PurchasesManager) {
                    console.log('💳 Инициализация системы покупок...');
                    await this.initGpPaymentsDirect();
                    await PurchasesManager.loadCatalogFromSDK();

                    if (typeof PurchasesManager.ensureStartupPurchaseRecovery === 'function') {
                        PurchasesManager.ensureStartupPurchaseRecovery(true);
                    } else if (typeof PurchasesManager.checkAndProcessUnprocessedPurchases === 'function') {
                        await PurchasesManager.checkAndProcessUnprocessedPurchases();
                    }
                }
            }, 200);

            
            if (!this._saveEventsBound) {
                window.addEventListener('save:changed', (event) => {
                    const key = event && event.detail ? event.detail.key : null;
                    if (!key) return;

                    if (
                        key === SaveManager.KEYS.CRYSTALS ||
                        key === SaveManager.KEYS.BEST_WAVE ||
                        key === SaveManager.KEYS.SEASON_STATE ||
                        key === SaveManager.KEYS.SAVE_TIMESTAMP
                    ) {
                        this.scheduleMainMenuRefresh();
                    }
                });
                this._saveEventsBound = true;
            }
        },
       
       


        async processUnprocessedPurchase(purchase) {
            console.log('🔄 Обработка необработанной покупки:', purchase.productID);
           
           try {
               
               if (purchase.productID.startsWith('crystals_')) {
                   const product = window.PurchasesManager && PurchasesManager.PRODUCTS
                       ? (PurchasesManager.PRODUCTS[purchase.productID] || null)
                       : null;
                   const fallbackAmount = parseInt(purchase.productID.split('_')[1], 10) || 0;
                   const totalAmount = window.PurchasesManager && typeof PurchasesManager.getCrystalRewardAmount === 'function'
                       ? PurchasesManager.getCrystalRewardAmount(product || { amount: fallbackAmount, bonus: 0 })
                       : fallbackAmount;

                   if (totalAmount > 0) {
                       SaveManager.addCrystals(totalAmount);
                       console.log('💎 Начислено кристаллов:', totalAmount);
                   }
               }
               
               
                 const consumed = await this.consumeViaGp(purchase.purchaseToken);
                if (consumed) {
                    console.log('✅ Покупка успешно обработана и подтверждена');
                    
                    const notifText = typeof LocalizationManager !== 'undefined' ? 
                        LocalizationManager.t('purchaseRestored', 'Покупка восстановлена!') : 'Покупка восстановлена!';
                    this.showNotification(notifText, '#2ecc71');
                }
               
                
                this.updateMainMenu();
                this.requestCloudSave('restore_unprocessed_purchase', true);
                
            } catch (error) {
                console.error('❌ Ошибка обработки покупки:', error);
            }
        },

     
     bindGlobalClickSounds() {
         if (this._uiClickSoundBound) {
             return;
         }

         const clickableSelector = [
             'button',
             '[role="button"]',
             '.btn',
             '.menu-btn',
             '.control-btn',
             '.perm-upgrade-btn',
             '.tab-btn',
             '.modal-close',
             '.close-btn',
             '.scheduler-btn'
         ].join(', ');

         document.addEventListener('click', (event) => {
             const eventTarget = event && event.target;
             if (!(eventTarget instanceof Element)) {
                 return;
             }

             const clickable = eventTarget.closest(clickableSelector);
             if (!clickable) {
                 return;
             }

             if (
                 clickable.hasAttribute('disabled') ||
                 clickable.classList.contains('disabled') ||
                 clickable.classList.contains('is-disabled') ||
                 clickable.dataset.noUiSound === '1'
             ) {
                 return;
             }

             if (typeof AudioManager === 'undefined' || typeof AudioManager.playSound !== 'function') {
                 return;
             }

             const isSoftClick =
                 clickable.classList.contains('modal-close') ||
                 clickable.classList.contains('close-btn') ||
                 clickable.classList.contains('btn-back') ||
                 clickable.dataset.soundStyle === 'soft';

             AudioManager.playSound(isSoftClick ? 'click' : 'buttonClick');
         }, true);

         this._uiClickSoundBound = true;
     },

     playModalSound(soundType) {
         if (typeof AudioManager === 'undefined' || typeof AudioManager.playSound !== 'function') {
             return;
         }

         if (soundType === 'open') {
             AudioManager.playSound('uiOpenModal');
             return;
         }

         AudioManager.playSound('uiCloseModal');
     },

     bindModalSounds() {
         if (this._modalSoundsBound || !document.body) {
             return;
         }

         const modalSelector = '.modal, .game-modal';
         const getHiddenState = (element) => {
             if (!(element instanceof Element)) {
                 return true;
             }
             const classHidden = element.classList.contains('hidden');
             const ariaHidden = element.getAttribute('aria-hidden') === 'true';
             return classHidden || ariaHidden;
         };

         this._modalVisibilityState = new WeakMap();

         const currentModals = document.querySelectorAll(modalSelector);
         for (let i = 0; i < currentModals.length; i++) {
             const modal = currentModals[i];
             this._modalVisibilityState.set(modal, getHiddenState(modal));
         }

         this._modalSoundObserver = new MutationObserver((mutationList) => {
             for (let i = 0; i < mutationList.length; i++) {
                 const mutation = mutationList[i];
                 const target = mutation && mutation.target;
                 if (!(target instanceof Element) || !target.matches(modalSelector)) {
                     continue;
                 }

                 const currentHidden = getHiddenState(target);
                 const prevHidden = this._modalVisibilityState.get(target);

                 if (typeof prevHidden !== 'boolean') {
                     this._modalVisibilityState.set(target, currentHidden);
                     continue;
                 }

                 if (prevHidden === currentHidden) {
                     continue;
                 }

                 this._modalVisibilityState.set(target, currentHidden);
                 this.playModalSound(currentHidden ? 'close' : 'open');
             }
         });

         this._modalSoundObserver.observe(document.body, {
             subtree: true,
             attributes: true,
             attributeFilter: ['class', 'aria-hidden']
         });

         this._modalSoundsBound = true;
     },

     bindEvents() {
         console.log('🎮 bindEvents starting...');
         
          
          const btnStart = document.getElementById('btnStart');
          if (btnStart && !btnStart.getAttribute('onclick')) {
                btnStart.addEventListener('click', () => {
                    if (typeof AudioManager !== 'undefined' && typeof AudioManager.unlockAudio === 'function') {
                        AudioManager.unlockAudio();
                   }
                   console.log('▶️ btnStart CLICKED!');
                   this.showStageSelectModal();
               });
           }

          const btnOpenMobileQuests = document.getElementById('btnOpenMobileQuests');
          if (btnOpenMobileQuests) {
              btnOpenMobileQuests.addEventListener('click', () => {
                  this.openMobileMainMenuPanel('quests');
              });
          }

          const btnOpenMobileLeaderboard = document.getElementById('btnOpenMobileLeaderboard');
          if (btnOpenMobileLeaderboard) {
              btnOpenMobileLeaderboard.addEventListener('click', () => {
                  this.openMobileMainMenuPanel('leaderboard');
              });
          }

          const btnCloseMobileQuests = document.getElementById('btnCloseMobileQuests');
          if (btnCloseMobileQuests) {
              btnCloseMobileQuests.addEventListener('click', () => {
                  this.closeMobileMainMenuPanel();
              });
          }

          const btnCloseMobileLeaderboard = document.getElementById('btnCloseMobileLeaderboard');
          if (btnCloseMobileLeaderboard) {
              btnCloseMobileLeaderboard.addEventListener('click', () => {
                  this.closeMobileMainMenuPanel();
              });
          }

          const mobileMainMenuOverlay = document.getElementById('mobileMainMenuOverlay');
          if (mobileMainMenuOverlay) {
              mobileMainMenuOverlay.addEventListener('click', () => {
                  this.closeMobileMainMenuPanel();
              });
          }

          const btnMobileMenuMainTab = document.getElementById('btnMobileMenuMainTab');
          if (btnMobileMenuMainTab) {
              btnMobileMenuMainTab.addEventListener('click', () => {
                  this.setMobileMainMenuPage('main');
              });
          }

          const btnMobileMenuMoreTab = document.getElementById('btnMobileMenuMoreTab');
          if (btnMobileMenuMoreTab) {
              btnMobileMenuMoreTab.addEventListener('click', () => {
                  this.setMobileMainMenuPage('more');
              });
          }

           const btnCancelStageSelect = document.getElementById('btnCancelStageSelect');
           if (btnCancelStageSelect) {
               btnCancelStageSelect.addEventListener('click', () => {
                   this.hideStageSelectModal();
               });
           }

           const btnConfirmStageSelect = document.getElementById('btnConfirmStageSelect');
           if (btnConfirmStageSelect && !btnConfirmStageSelect.getAttribute('onclick')) {
               btnConfirmStageSelect.addEventListener('click', () => {
                   const stage = this._pendingStageSelection || ((typeof SaveManager !== 'undefined' && SaveManager.getSelectedStage)
                       ? SaveManager.getSelectedStage()
                       : 1);
                   this.startWithStage(stage);
               });
           }

          const stageSelectModal = document.getElementById('stageSelectModal');
          if (stageSelectModal) {
              stageSelectModal.addEventListener('click', (e) => {
                  if (this.isModalBackdropTarget(e, stageSelectModal)) {
                      this.hideStageSelectModal();
                  }
              });
          }

          const btnUpgrades = document.getElementById('btnUpgrades');
          if (btnUpgrades) {
              btnUpgrades.addEventListener('click', () => {
                  console.log('⚡ btnUpgrades CLICKED!');
                  this.showScreen('upgradeScreen');
                  this.updateUpgradeScreen();
              });
          }

          
          const btnCards = document.getElementById('btnCards');
          console.log('🎴 btnCards найдена:', !!btnCards);
          if (btnCards) {
              btnCards.addEventListener('click', async () => {
                  console.log('🎴 btnCards CLICKED!');
                  this.showScreen('cardsScreen');
                  const collection = document.getElementById('cardsCollection');
                  if (collection) {
                      delete collection.dataset.cardsKey;
                  }
                  this.updateCardsScreen();
                  requestAnimationFrame(() => this.updateCardsScreen());
              });
          }

           
           const btnShop = document.getElementById('btnShop');
          console.log('🛍️ btnShop найдена:', !!btnShop);
           if (btnShop) {
               btnShop.addEventListener('click', () => {
                   console.log('🛍️ btnShop CLICKED!');
                   this.showScreen('shopScreen');
                   this.updateShopUI();
               });
           }

           const btnOptions = document.getElementById('btnOptions');
           if (btnOptions) {
               btnOptions.addEventListener('click', () => {
                   this.showScreen('optionsScreen');
                   this.updateOptionsScreen();
               });
           }

           const btnBackFromOptions = document.getElementById('btnBackFromOptions');
           if (btnBackFromOptions) {
               btnBackFromOptions.addEventListener('click', () => {
                    this.requestCloudSave('back_from_options');
                    this.showScreen('mainMenu');
                    this.updateMainMenu();
                });
            }

           const btnOpenFeedback = document.getElementById('btnOpenFeedback');
           if (btnOpenFeedback) {
               btnOpenFeedback.addEventListener('click', () => {
                   this.openFeedbackModal();
               });
           }

           const btnOpenFeedbackHistory = document.getElementById('btnOpenFeedbackHistory');
           if (btnOpenFeedbackHistory) {
               btnOpenFeedbackHistory.addEventListener('click', async () => {
                   await this.openFeedbackHistoryModal();
               });
           }

           const feedbackModal = document.getElementById('feedbackModal');
           const btnCloseFeedbackModal = document.getElementById('btnCloseFeedbackModal');
           const btnFeedbackCancel = document.getElementById('btnFeedbackCancel');
           const btnFeedbackSend = document.getElementById('btnFeedbackSend');
           const btnFeedbackHistory = document.getElementById('btnFeedbackHistory');

           if (btnCloseFeedbackModal) {
               btnCloseFeedbackModal.addEventListener('click', () => {
                   this.closeFeedbackModal();
               });
           }

           if (btnFeedbackCancel) {
               btnFeedbackCancel.addEventListener('click', () => {
                   this.closeFeedbackModal();
               });
           }

           if (btnFeedbackSend) {
               btnFeedbackSend.addEventListener('click', async () => {
                   await this.sendFeedbackFromModal();
               });
           }

            if (btnFeedbackHistory) {
                btnFeedbackHistory.addEventListener('click', async () => {
                    this.closeFeedbackModal();
                    await this.openFeedbackHistoryModal();
                });
            }

            const feedbackPromptModal = document.getElementById('feedbackPromptModal');
            const btnFeedbackPromptSend = document.getElementById('btnFeedbackPromptSend');
            const btnFeedbackPromptLater = document.getElementById('btnFeedbackPromptLater');
            const btnFeedbackPromptNever = document.getElementById('btnFeedbackPromptNever');
            const btnCloseFeedbackPromptModal = document.getElementById('btnCloseFeedbackPromptModal');

            if (btnFeedbackPromptSend) {
                btnFeedbackPromptSend.addEventListener('click', () => {
                    this.closeFeedbackPromptModal();
                    this.openFeedbackModal();
                });
            }

            if (btnFeedbackPromptLater) {
                btnFeedbackPromptLater.addEventListener('click', () => {
                    this.dismissFeedbackPrompt(false);
                });
            }

            if (btnFeedbackPromptNever) {
                btnFeedbackPromptNever.addEventListener('click', () => {
                    this.dismissFeedbackPrompt(true);
                });
            }

            if (btnCloseFeedbackPromptModal) {
                btnCloseFeedbackPromptModal.addEventListener('click', () => {
                    this.dismissFeedbackPrompt(false);
                });
            }

            if (feedbackPromptModal) {
                feedbackPromptModal.addEventListener('click', (e) => {
                    if (this.isModalBackdropTarget(e, feedbackPromptModal)) {
                        this.dismissFeedbackPrompt(false);
                    }
                });
            }

           const feedbackHistoryModal = document.getElementById('feedbackHistoryModal');
           const btnCloseFeedbackHistoryModal = document.getElementById('btnCloseFeedbackHistoryModal');
           const btnFeedbackHistoryRefresh = document.getElementById('btnFeedbackHistoryRefresh');
           const btnFeedbackHistoryMore = document.getElementById('btnFeedbackHistoryMore');
           const feedbackThreadModal = document.getElementById('feedbackThreadModal');
           const btnCloseFeedbackThreadModal = document.getElementById('btnCloseFeedbackThreadModal');
           const btnFeedbackThreadSend = document.getElementById('btnFeedbackThreadSend');

           if (btnCloseFeedbackHistoryModal) {
               btnCloseFeedbackHistoryModal.addEventListener('click', () => {
                   this.closeFeedbackHistoryModal();
               });
           }

           if (btnFeedbackHistoryRefresh) {
               btnFeedbackHistoryRefresh.addEventListener('click', async () => {
                   await this.loadFeedbackHistory({ reset: true });
               });
           }

           if (btnFeedbackHistoryMore) {
               btnFeedbackHistoryMore.addEventListener('click', async () => {
                   await this.loadFeedbackHistory({ reset: false });
               });
           }

           if (feedbackHistoryModal) {
               feedbackHistoryModal.addEventListener('click', (e) => {
                   if (this.isModalBackdropTarget(e, feedbackHistoryModal)) {
                       this.closeFeedbackHistoryModal();
                    }
                });

                const feedbackHistoryList = document.getElementById('feedbackHistoryList');
                if (feedbackHistoryList) {
                    feedbackHistoryList.addEventListener('click', (e) => {
                        const row = e.target.closest('.feedback-history-item[data-feedback-id]');
                        if (!row) {
                            return;
                        }

                        const feedbackId = row.getAttribute('data-feedback-id');
                        if (!feedbackId) {
                            return;
                        }

                        this.openFeedbackThreadModal(feedbackId);
                    });
                }
           }

           if (btnCloseFeedbackThreadModal) {
               btnCloseFeedbackThreadModal.addEventListener('click', () => {
                   this.closeFeedbackThreadModal();
               });
           }

           if (btnFeedbackThreadSend) {
               btnFeedbackThreadSend.addEventListener('click', async () => {
                   await this.sendFeedbackThreadMessage();
               });
           }

           if (feedbackThreadModal) {
               feedbackThreadModal.addEventListener('click', (e) => {
                   if (this.isModalBackdropTarget(e, feedbackThreadModal)) {
                       this.closeFeedbackThreadModal();
                   }
               });

               const feedbackThreadMessageInput = document.getElementById('feedbackThreadMessageInput');
               if (feedbackThreadMessageInput) {
                   feedbackThreadMessageInput.addEventListener('keydown', (e) => {
                       if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
                           e.preventDefault();
                           this.sendFeedbackThreadMessage();
                       }
                   });
               }
           }

           if (feedbackModal) {
               feedbackModal.addEventListener('click', (e) => {
                   if (this.isModalBackdropTarget(e, feedbackModal)) {
                       this.closeFeedbackModal();
                   }
               });

                document.addEventListener('keydown', (e) => {
                     if (e.key === 'Escape' && !feedbackModal.classList.contains('hidden')) {
                         this.closeFeedbackModal();
                     } else if (e.key === 'Escape' && feedbackPromptModal && !feedbackPromptModal.classList.contains('hidden')) {
                         this.dismissFeedbackPrompt(false);
                     } else if (e.key === 'Escape' && feedbackHistoryModal && !feedbackHistoryModal.classList.contains('hidden')) {
                          this.closeFeedbackHistoryModal();
                      } else if (e.key === 'Escape' && feedbackThreadModal && !feedbackThreadModal.classList.contains('hidden')) {
                          this.closeFeedbackThreadModal();
                     }
                 });

               const feedbackMessageInput = document.getElementById('feedbackMessageInput');
               if (feedbackMessageInput) {
                   feedbackMessageInput.addEventListener('keydown', (e) => {
                       if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
                           e.preventDefault();
                           this.sendFeedbackFromModal();
                       }
                   });
               }
           }

           const optDisableShake = document.getElementById('optDisableShake');
           if (optDisableShake) {
               optDisableShake.addEventListener('change', () => {
                   if (typeof SaveManager !== 'undefined' && typeof SaveManager.setSetting === 'function') {
                       SaveManager.setSetting('disableScreenShake', Boolean(optDisableShake.checked));
                   }
               });
           }

           const optDisableHeavyEffects = document.getElementById('optDisableHeavyEffects');
           if (optDisableHeavyEffects) {
               optDisableHeavyEffects.addEventListener('change', () => {
                   if (typeof SaveManager !== 'undefined' && typeof SaveManager.setSetting === 'function') {
                       SaveManager.setSetting('disableHeavyEffects', Boolean(optDisableHeavyEffects.checked));
                   }
               });
           }

          const btnTalents = document.getElementById('btnTalents');
          if (btnTalents) {
              btnTalents.addEventListener('click', () => {
                  this.showScreen('talentScreen');
                  this.renderTalentTree();
              });
          }

          const btnBackFromTalents = document.getElementById('btnBackFromTalents');
          if (btnBackFromTalents) {
              btnBackFromTalents.addEventListener('click', () => {
                  this.requestCloudSave('back_from_talents');
                  this.showScreen('mainMenu');
              });
          }

          
          const btnCrystalStore = document.getElementById('btnCrystalStore');
          if (btnCrystalStore) {
              btnCrystalStore.addEventListener('click', async () => {
                  console.log('💎 btnCrystalStore CLICKED!');
                  this.showScreen('crystalStoreScreen');
                  this.updateCrystalStoreScreen();

                  try {
                      await this.syncCrystalStoreCatalogUI();
                  } catch (error) {
                      console.warn('⚠️ Не удалось синхронизировать цены магазина кристаллов:', error);
                  }
              });
          }

          if (!this._crystalStoreEventsBound && this.screens.crystalStoreScreen) {
              this.screens.crystalStoreScreen.addEventListener('click', async (event) => {
                  const btn = event.target.closest('.btn-crystal-package[data-product]');
                  const moonOfferBtn = event.target.closest('.btn-moon-offer[data-moon-offer]');
                  const moonBundleBtn = event.target.closest('.btn-moon-bundle[data-moon-bundle]');
                  const actionableBtn = btn || moonOfferBtn || moonBundleBtn;
                  if (!actionableBtn || !this.screens.crystalStoreScreen.contains(actionableBtn)) {
                      return;
                  }

                  if (actionableBtn.disabled || actionableBtn.classList.contains('disabled')) {
                      return;
                  }

                  if (btn) {
                      const productId = String(btn.dataset.product || '').trim();
                      if (!productId) {
                          return;
                      }
                      await this.buyCrystalPackage(productId, 0);
                      return;
                  }

                  if (moonOfferBtn) {
                      const offerId = String(moonOfferBtn.dataset.moonOffer || '').trim();
                      if (!offerId) {
                          return;
                      }
                      await this.buyCrystalsWithMoonSeals(offerId);
                      return;
                  }

                  const bundleId = moonBundleBtn ? String(moonBundleBtn.dataset.moonBundle || '').trim() : '';
                  if (!bundleId) {
                      return;
                  }
                  await this.buyStarterMoonBundle(bundleId);
              });
              this._crystalStoreEventsBound = true;
          }

          if (!this._shopEventsBound && this.screens.shopScreen) {
              this.screens.shopScreen.addEventListener('click', async (event) => {
                  const btn = event.target.closest('[data-shop-action][data-shop-type][data-item-id]');
                  if (!btn || !this.screens.shopScreen.contains(btn) || btn.disabled) {
                      return;
                  }

                  const itemType = String(btn.dataset.shopType || 'frame');
                  const itemId = String(btn.dataset.itemId || '');
                  const action = String(btn.dataset.shopAction || '');

                  if (!itemId) {
                      return;
                  }

                  if (action === 'buy') {
                      await this.buyProfileCosmetic(itemType, itemId);
                      return;
                  }

                  if (action === 'equip') {
                      await this.equipProfileCosmetic(itemType, itemId);
                  }
              });
              this._shopEventsBound = true;
          }

          const playerProfileModal = document.getElementById('playerProfileModal');
          if (!this._profileModalEventsBound && playerProfileModal) {
              playerProfileModal.addEventListener('click', (event) => {
                  const actionBtn = event.target.closest('[data-profile-action]');
                  if (actionBtn && playerProfileModal.contains(actionBtn)) {
                      const action = String(actionBtn.dataset.profileAction || '');
                      if (action === 'close') {
                          this.closePlayerProfileModal();
                          return;
                      }

                      if (action === 'open-shop') {
                          this.closePlayerProfileModal();
                          this.showScreen('shopScreen');
                          this.updateShopUI();
                          return;
                      }

                      if (action === 'logout') {
                          this.closePlayerProfileModal();
                          if (window.AuthManager && typeof AuthManager.showLogoutDialog === 'function') {
                              AuthManager.showLogoutDialog();
                          }
                      }
                      return;
                  }

                  if (this.isModalBackdropTarget(event, playerProfileModal)) {
                      this.closePlayerProfileModal();
                  }
              });
              this._profileModalEventsBound = true;
          }

          
         document.getElementById('btnBack').addEventListener('click', () => {
             this.requestCloudSave('back_from_upgrades');
             this.showScreen('mainMenu');
             this.updateMainMenu();
         });

        
        document.querySelectorAll('#upgradeScreen .upgrade-item').forEach(item => {
            const btn = item.querySelector('.btn-upgrade');
            const type = item.dataset.upgrade;
            
            btn.addEventListener('click', () => {
                if (SaveManager.upgrade(type)) {
                    this.requestCloudSave('upgrade_purchase');
                    this.updateUpgradeScreen();
                    this.playUpgradeSound();
                }
            });
        });

        
        
        
        
        document.addEventListener('mouseenter', (e) => {
            if (!e.target || !e.target.closest) return;
            const upgradeBtn = e.target.closest('.upgrade-btn-new');
            if (upgradeBtn && upgradeBtn.dataset.upgrade === 'range') {
                if (typeof Game !== 'undefined' && Game.tower) {
                    Game.tower.showRangeHighlight = true;
                }
            }
        }, true);
        
        document.addEventListener('mouseleave', (e) => {
            if (!e.target || !e.target.closest) return;
            const upgradeBtn = e.target.closest('.upgrade-btn-new');
            if (upgradeBtn && upgradeBtn.dataset.upgrade === 'range') {
                if (typeof Game !== 'undefined' && Game.tower) {
                    Game.tower.showRangeHighlight = false;
                }
            }
        }, true);

        
        document.querySelectorAll('.arrow-slot').forEach(slot => {
            const type = slot.dataset.type;

            slot.addEventListener('click', () => {
                Game.switchArrowType(type);
            });
        });

         
          const btnHelp = document.getElementById('btnHelp');
          if (btnHelp) {
              btnHelp.addEventListener('click', () => {
                   console.log('📖 btnHelp CLICKED!');
                   this.showScreen('helpScreen');
               });
           }

        const btnBackFromHelp = document.getElementById('btnBackFromHelp');
        if (btnBackFromHelp) {
            btnBackFromHelp.addEventListener('click', () => {
                this.requestCloudSave('back_from_help');
                this.showScreen('mainMenu');
            });
        }

        
        document.addEventListener('keydown', (e) => {
            if (e.repeat) return;
            if (this.currentScreen !== 'gameScreen') return;

            if (e.key === 'Escape') {
                const traderChoiceModal = document.getElementById('traderChoiceModal');
                if (traderChoiceModal && !traderChoiceModal.classList.contains('hidden')) {
                    this.hideTraderChoiceModal();
                    return;
                }
            }

            if (this.shouldBlockGameplayHotkeys(e)) {
                return;
            }

            
            const isModalOpen = 
                (document.getElementById('shopScreen') && document.getElementById('shopScreen').classList.contains('active')) ||
                (document.getElementById('talentScreen') && document.getElementById('talentScreen').classList.contains('active')) ||
                (document.getElementById('forgeScreen') && document.getElementById('forgeScreen').classList.contains('active')) ||
                (document.getElementById('exitConfirmModal') && !document.getElementById('exitConfirmModal').classList.contains('hidden')) ||
                (document.getElementById('traderChoiceModal') && !document.getElementById('traderChoiceModal').classList.contains('hidden'));

            if (isModalOpen && e.key === ' ') return;

            switch(e.key) {
                case '1':
                    Game.switchArrowType('normal');
                    break;
                case '5':
                    if (Game.tower.inventory.useItem('thunderStrike')) {
                        Game.useThunderStrike();
                        this.updateItemsUI();
                    }
                    break;
                case '6':
                    if (Game.tower.inventory.useItem('frenzyPotion')) {
                        Game.useFrenzyPotion();
                        this.updateItemsUI();
                    }
                    break;
                case ' ': 
                case 'p':
                case 'P':
                case 'З':
                case 'з':
                    e.preventDefault();
                    e.stopImmediatePropagation();

                    
                    if (Game && Game.xpSystem && Game.xpSystem.isSelectingUpgrade) {
                        return;
                    }
                    
                    
                    if (window.AdsManager && AdsManager.isAnyAdPlaying && AdsManager.isAnyAdPlaying()) {
                        console.log('⏸️ Пауза заблокирована - воспроизводится реклама');
                        return;
                    }
                    
                    if (Game.isRunning && !Game.gameOver) {
                        if (typeof Game.isGameplayPaused === 'function' ? Game.isGameplayPaused() : Game.isPaused) {
                            Game.resume();
                        } else {
                            Game.pause();
                        }
                    }
                    break;
            }
        });

          
           document.getElementById('btnExit').addEventListener('click', () => {
               
               if (window.AdsManager && AdsManager.isAnyAdPlaying && AdsManager.isAnyAdPlaying()) {
                   console.log('🚫 Выход заблокирован - воспроизводится реклама');
                   return;
               }
               
               Game.pause();
               
               this.showExitConfirmDialog();
           });

          
          document.getElementById('btnMainMenu').addEventListener('click', async () => {
              const btnMainMenu = document.getElementById('btnMainMenu');
              if (btnMainMenu && btnMainMenu.disabled) {
                  return;
              }

              if (btnMainMenu) {
                  btnMainMenu.disabled = true;
              }

              document.getElementById('gameOverModal').classList.add('hidden');

              await this.showImmediateInterstitial({
                  placement: 'game_over_exit_menu'
              });

              await this.runWithProgressSaveOverlay(async () => {
                  if (window.Game && typeof Game.finalizeGameOver === 'function') {
                      try {
                          await Game.finalizeGameOver();
                      } catch (error) {
                          console.warn('⚠️ Не удалось завершить финализацию game over перед выходом в меню:', error);
                      }
                  }
              });
               
                
                if (window.Game && typeof Game.resetSystems === 'function') {
                    Game.resetSystems();
                    Game.isRunning = false; 
               }
              
              
              if (typeof AudioManager !== 'undefined') {
                  AudioManager.stopBackgroundMusic();
                  
                  setTimeout(() => {
                      AudioManager.playMenuMusic();
                   }, 100);
               }
                
                this.showScreen('mainMenu');
                this.updateMainMenu();

              if (btnMainMenu) {
                  btnMainMenu.disabled = false;
              }
          });

          const btnRevive = document.getElementById('btnRevive');
          if (btnRevive) {
              btnRevive.addEventListener('click', async () => {
                  if (typeof AdsManager === 'undefined' || typeof AdsManager.showRewardedAd !== 'function') {
                      this.showNotification(LocalizationManager.t('uiAdUnavailable', 'Реклама недоступна'), '#e67e22');
                      return;
                  }

                  if (btnRevive.disabled) {
                      return;
                  }

                  btnRevive.disabled = true;

                  const tryApplyRevive = () => {
                      if (window.Game && typeof Game.reviveWithHalfHealth === 'function') {
                          let revived = Game.reviveWithHalfHealth();
                          if (!revived && typeof Game.forceReviveWithHalfHealth === 'function') {
                              revived = Game.forceReviveWithHalfHealth();
                          }
                          if (revived) {
                              document.getElementById('gameOverModal').classList.add('hidden');
                              this.showNotification(
                                  (typeof LocalizationManager !== 'undefined')
                                      ? LocalizationManager.t('reviveSuccess', 'Возрождение: 50% HP!')
                                      : 'Возрождение: 50% HP!',
                                  '#2ecc71'
                              );
                              return true;
                          }
                      }

                      return false;
                  };

                  const rewarded = await AdsManager.showRewardedAd({
                      onErrorMessage: LocalizationManager.t('uiReviveAdLoadError', 'Не удалось загрузить рекламу для возрождения')
                  });

                  if (!rewarded) {
                      this.showNotification(LocalizationManager.t('uiRewardNotGrantedRetry', 'Награда не засчитана. Попробуйте еще раз.'), '#e67e22');
                      btnRevive.disabled = false;
                      return;
                  }

                  if (!tryApplyRevive()) {
                      this.showNotification(LocalizationManager.t('uiReviveNotApplied', 'Награда получена, но возрождение не применилось. Попробуйте еще раз.'), '#e67e22');
                      btnRevive.disabled = false;
                  }
              });
          }

          const btnReviveOfferYes = document.getElementById('btnReviveOfferYes');
          const btnReviveOfferNo = document.getElementById('btnReviveOfferNo');
          const reviveOfferModal = document.getElementById('reviveOfferModal');

          if (btnReviveOfferYes && btnReviveOfferNo && reviveOfferModal) {
              btnReviveOfferYes.addEventListener('click', async () => {
                  if (btnReviveOfferYes.disabled) {
                      return;
                  }

                  if (typeof AdsManager === 'undefined' || typeof AdsManager.showRewardedAd !== 'function') {
                      this.showNotification(LocalizationManager.t('uiAdUnavailable', 'Реклама недоступна'), '#e67e22');
                      return;
                  }

                  btnReviveOfferYes.disabled = true;
                  btnReviveOfferNo.disabled = true;

                  let reviveApplied = false;
                  const applyRevive = () => {
                      if (reviveApplied) {
                          return true;
                      }

                      if (window.Game && typeof Game.forceReviveWithHalfHealth === 'function') {
                          const revived = Game.forceReviveWithHalfHealth();
                          if (revived) {
                              reviveApplied = true;
                              reviveOfferModal.classList.add('hidden');
                              this.showNotification(
                                  (typeof LocalizationManager !== 'undefined')
                                      ? LocalizationManager.t('reviveSuccess', 'Возрождение: 50% HP!')
                                      : 'Возрождение: 50% HP!',
                                  '#2ecc71'
                              );
                              return true;
                          }
                      }

                      return false;
                  };

                  const rewarded = await AdsManager.showRewardedAd({
                      onErrorMessage: LocalizationManager.t('uiReviveAdLoadError', 'Не удалось загрузить рекламу для возрождения')
                  });

                  if (rewarded) {
                      if (!applyRevive()) {
                          this.showNotification(LocalizationManager.t('uiReviveNotApplied', 'Награда получена, но возрождение не применилось. Попробуйте еще раз.'), '#e67e22');
                          btnReviveOfferYes.disabled = false;
                          btnReviveOfferNo.disabled = false;
                      }
                      return;
                  }

                  this.showNotification(LocalizationManager.t('uiRewardNotGrantedRetry', 'Награда не засчитана. Попробуйте еще раз.'), '#e67e22');
                  btnReviveOfferYes.disabled = false;
                  btnReviveOfferNo.disabled = false;
              });

              btnReviveOfferNo.addEventListener('click', async () => {
                  reviveOfferModal.classList.add('hidden');

                  await this.showImmediateInterstitial({
                      placement: 'game_over_decline_revive'
                  });

                  await this.runWithProgressSaveOverlay(async () => {
                      if (window.Game && typeof Game.finalizeGameOver === 'function') {
                          await Game.finalizeGameOver();
                      }
                  });
              });
          }

          
          this.populateChangelog();

          
          const btnChangelog = document.getElementById('btnChangelog');
          if (btnChangelog) {
              btnChangelog.addEventListener('click', () => {
                  this.showScreen('changelogScreen');
              });
          }

          const btnReplayReleaseAnnouncement = document.getElementById('btnReplayReleaseAnnouncement');
          if (btnReplayReleaseAnnouncement) {
              btnReplayReleaseAnnouncement.addEventListener('click', () => {
                  const modal = document.getElementById('releaseAnnouncementModal');
                  if (!modal) {
                      return;
                  }
                  this._releaseAnnouncementShown = true;
                  modal.classList.remove('hidden');
                  this.syncModalScale('releaseAnnouncementModal');
              });
          }

          const btnReleaseAnnouncementClose = document.getElementById('btnReleaseAnnouncementClose');
          if (btnReleaseAnnouncementClose) {
              btnReleaseAnnouncementClose.addEventListener('click', () => {
                  this.dismissReleaseAnnouncement();
              });
          }

          const btnReleaseAnnouncementDetails = document.getElementById('btnReleaseAnnouncementDetails');
          if (btnReleaseAnnouncementDetails) {
              btnReleaseAnnouncementDetails.addEventListener('click', () => {
                  this.dismissReleaseAnnouncement();
                  this.showScreen('changelogScreen');
              });
          }

          const btnCompensationLater = document.getElementById('btnCompensationLater');
          if (btnCompensationLater) {
              btnCompensationLater.addEventListener('click', () => {
                  this.dismissCompensationModal();
              });
          }

          const btnClaimCompensation = document.getElementById('btnClaimCompensation');
          if (btnClaimCompensation) {
              btnClaimCompensation.addEventListener('click', async () => {
                  await this.claimCompensationReward();
              });
          }

          window.addEventListener('gp:daily-reward-handled', () => {
              this.maybeShowMainMenuPrompts();
          });

          const btnAchievements = document.getElementById('btnAchievements');
          if (btnAchievements) {
               btnAchievements.addEventListener('click', async () => {
                   this.showScreen('achievementsScreen');
                   if (typeof AchievementsManager !== 'undefined' && AchievementsManager.openAchievementsUI) {
                       if (typeof AchievementsManager.checkProgress === 'function') {
                           AchievementsManager.checkProgress();
                       }
                       if (typeof AchievementsManager.flushPendingProgress === 'function') {
                           try {
                               await AchievementsManager.flushPendingProgress(true);
                           } catch (error) {
                               console.warn('⚠️ Не удалось синхронизировать прогресс достижений перед открытием экрана:', error);
                           }
                       }
                       const opened = await AchievementsManager.openAchievementsUI();
                       if (!opened) {
                           this.showNotification(LocalizationManager.t('uiAchievementsUnavailable', 'Достижения недоступны на этой платформе'), '#e67e22');
                       }
                  } else {
                      this.showNotification(LocalizationManager.t('uiAchievementsNotInitialized', 'Система достижений не инициализирована'), '#e67e22');
                  }
              });
          }

          const btnBackFromAchievements = document.getElementById('btnBackFromAchievements');
          if (btnBackFromAchievements) {
              btnBackFromAchievements.addEventListener('click', () => {
                  this.requestCloudSave('back_from_achievements');
                  this.showScreen('mainMenu');
                  this.updateMainMenu();
              });
          }

          const btnBackFromChangelog = document.getElementById('btnBackFromChangelog');
          if (btnBackFromChangelog) {
              btnBackFromChangelog.addEventListener('click', () => {
                  this.requestCloudSave('back_from_changelog');
                  this.showScreen('mainMenu');
                  this.updateMainMenu();
              });
          }

          
          setTimeout(() => {
              const btnBackFromShop = document.getElementById('btnBackFromShop');
              console.log('🔙 btnBackFromShop найдена:', !!btnBackFromShop);
        if (btnBackFromShop) {
            btnBackFromShop.addEventListener('click', () => {
                console.log('🔙 BACK FROM SHOP CLICKED!');
                
                
                if (window.Game && Game.isRunning) {
                    Game.resetSystems();
                }

                this.requestCloudSave('back_from_shop');
                
                this.showScreen('mainMenu');
                this.updateMainMenu();
            });
        }
    }, 100);

        
        const btnBackFromCrystalStore = document.getElementById('btnBackFromCrystalStore');
        if (btnBackFromCrystalStore) {
            btnBackFromCrystalStore.addEventListener('click', () => {
                this.requestCloudSave('back_from_crystal_store');
                this.showScreen('mainMenu');
                this.updateMainMenu();
            });
        }

    
        const itemSlots = document.querySelectorAll('.item-slot');
        if (itemSlots.length > 0) {
            itemSlots.forEach(slot => {
                slot.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const itemType = slot.dataset.item;
                    if (Game.tower.inventory.useItem(itemType)) {
                        if (itemType === 'thunderStrike') Game.useThunderStrike();
                        if (itemType === 'frenzyPotion') Game.useFrenzyPotion();
                        this.updateItemsUI();
                    }
                });
            });
        }

    
    
    
    
        const btnOpenDebugModal = document.getElementById('btnOpenDebugModal');
        const btnCloseDebugModal = document.getElementById('btnCloseDebugModal');
        const debugModal = document.getElementById('debugModal');

        if (btnOpenDebugModal && btnCloseDebugModal && debugModal) {
            const closeDebugModal = () => {
                debugModal.classList.add('hidden');
                debugModal.setAttribute('aria-hidden', 'true');
            };

            const syncDebugToggleButtons = () => {
                const btnToggleNoDamage = document.getElementById('btnToggleNoDamage');
                const btnToggleNoAttack = document.getElementById('btnToggleNoAttack');
                const btnToggleEventHud = document.getElementById('btnToggleEventHud');

                if (!window.Game || !Game.debugCheats) {
                    return;
                }

                if (btnToggleNoDamage) {
                    const on = Boolean(Game.debugCheats.invulnerableTower);
                    btnToggleNoDamage.textContent = (typeof LocalizationManager !== 'undefined')
                        ? LocalizationManager.t(on ? 'debugInvulnerableOn' : 'debugInvulnerableOff', on ? '🛡️ Invulnerability: ON' : '🛡️ Invulnerability: OFF')
                        : (on ? '🛡️ Invulnerability: ON' : '🛡️ Invulnerability: OFF');
                    btnToggleNoDamage.classList.toggle('toggle-active', on);
                }

                if (btnToggleNoAttack) {
                    const on = Boolean(Game.debugCheats.disableTowerAttack);
                    btnToggleNoAttack.textContent = (typeof LocalizationManager !== 'undefined')
                        ? LocalizationManager.t(on ? 'debugNoAttackOn' : 'debugNoAttackOff', on ? '🏹 Tower attack: ON' : '🏹 Tower attack: OFF')
                        : (on ? '🏹 Tower attack: ON' : '🏹 Tower attack: OFF');
                    btnToggleNoAttack.classList.toggle('toggle-active', on);
                }

                if (btnToggleEventHud) {
                    const on = Boolean(Game.debugCheats.showEventHud);
                    btnToggleEventHud.textContent = (typeof LocalizationManager !== 'undefined')
                        ? LocalizationManager.t(on ? 'debugEventHudOn' : 'debugEventHudOff', on ? '📡 Event HUD: ON' : '📡 Event HUD: OFF')
                        : (on ? '📡 Event HUD: ON' : '📡 Event HUD: OFF');
                    btnToggleEventHud.classList.toggle('toggle-active', on);
                }
            };

            const openDebugModal = () => {
                syncDebugToggleButtons();
                debugModal.classList.remove('hidden');
                debugModal.setAttribute('aria-hidden', 'false');
            };

            btnOpenDebugModal.addEventListener('click', openDebugModal);
            btnCloseDebugModal.addEventListener('click', closeDebugModal);

            debugModal.addEventListener('click', (e) => {
                if (this.isModalBackdropTarget(e, debugModal)) {
                    closeDebugModal();
                }
            });

            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && !debugModal.classList.contains('hidden')) {
                    closeDebugModal();
                }
            });
        }

        
        const btnAddCrystals = document.getElementById('btnAddCrystals');
        if (btnAddCrystals) {
            btnAddCrystals.addEventListener('click', () => {
                SaveManager.addCrystals(50);
                this.updateMainMenu();
                this.playUpgradeSound();
            });
        }

        const btnAddTalentPoint = document.getElementById('btnAddTalentPoint');
        if (btnAddTalentPoint) {
            btnAddTalentPoint.addEventListener('click', () => {
                if (typeof TalentTree === 'undefined') return;

                const wave = TalentTree.grantDebugPoint();
                this._selectedTalentNodeId = null;
                this.updateMainMenu();
                if (this.currentScreen === 'talentScreen') {
                    this.renderTalentTree();
                }

                this.showNotification(LocalizationManager.t('debugTalentGranted', '🌳 +1 talent point (record: {0})').replace('{0}', wave), '#9b59b6');
                this.playUpgradeSound();
            });
        }

        const btnAddGold10000 = document.getElementById('btnAddGold10000');
        if (btnAddGold10000) {
            btnAddGold10000.addEventListener('click', () => {
                if (!window.Game) return;

                if (Game.isRunning) {
                    Game.gold += 10000;
                    if (typeof UI !== 'undefined' && UI.updateGold) {
                        UI.updateGold(Game.gold);
                    }
                    if (typeof inGameUpgrades !== 'undefined') {
                        inGameUpgrades.updateUI();
                    }
                } else {
                    Game.debugCheats.nextRunGoldBonus = (Game.debugCheats.nextRunGoldBonus || 0) + 10000;
                }

                this.showNotification(LocalizationManager.t('uiDebugGoldAdded', '💰 +10,000 gold'), '#2ecc71');
                this.playUpgradeSound();
            });
        }

        const btnToggleNoDamage = document.getElementById('btnToggleNoDamage');
        if (btnToggleNoDamage) {
            btnToggleNoDamage.addEventListener('click', () => {
                if (!window.Game || !Game.debugCheats) return;
                Game.debugCheats.invulnerableTower = !Game.debugCheats.invulnerableTower;
                btnToggleNoDamage.textContent = (typeof LocalizationManager !== 'undefined')
                    ? LocalizationManager.t(
                        Game.debugCheats.invulnerableTower ? 'debugInvulnerableOn' : 'debugInvulnerableOff',
                        Game.debugCheats.invulnerableTower ? '🛡️ Бессмертие: ON' : '🛡️ Бессмертие: OFF'
                    )
                    : `🛡️ Бессмертие: ${Game.debugCheats.invulnerableTower ? 'ON' : 'OFF'}`;
                btnToggleNoDamage.setAttribute('data-i18n', Game.debugCheats.invulnerableTower ? 'debugInvulnerableOn' : 'debugInvulnerableOff');
                btnToggleNoDamage.classList.toggle('toggle-active', Game.debugCheats.invulnerableTower);
                this.showNotification(
                    (typeof LocalizationManager !== 'undefined')
                        ? LocalizationManager.t(
                            Game.debugCheats.invulnerableTower ? 'debugNotifyInvulnerableOn' : 'debugNotifyInvulnerableOff',
                            Game.debugCheats.invulnerableTower ? '🛡️ Бессмертие включено' : '🛡️ Бессмертие выключено'
                        )
                        : `🛡️ Бессмертие ${Game.debugCheats.invulnerableTower ? 'включено' : 'выключено'}`,
                    '#3498db'
                );
            });
        }

        const btnToggleNoAttack = document.getElementById('btnToggleNoAttack');
        if (btnToggleNoAttack) {
            btnToggleNoAttack.addEventListener('click', () => {
                if (!window.Game || !Game.debugCheats) return;
                Game.debugCheats.disableTowerAttack = !Game.debugCheats.disableTowerAttack;
                btnToggleNoAttack.textContent = (typeof LocalizationManager !== 'undefined')
                    ? LocalizationManager.t(
                        Game.debugCheats.disableTowerAttack ? 'debugNoAttackOn' : 'debugNoAttackOff',
                        Game.debugCheats.disableTowerAttack ? '🏹 Без атаки башни: ON' : '🏹 Без атаки башни: OFF'
                    )
                    : `🏹 Без атаки башни: ${Game.debugCheats.disableTowerAttack ? 'ON' : 'OFF'}`;
                btnToggleNoAttack.setAttribute('data-i18n', Game.debugCheats.disableTowerAttack ? 'debugNoAttackOn' : 'debugNoAttackOff');
                btnToggleNoAttack.classList.toggle('toggle-active', Game.debugCheats.disableTowerAttack);
                this.showNotification(
                    (typeof LocalizationManager !== 'undefined')
                        ? LocalizationManager.t(
                            Game.debugCheats.disableTowerAttack ? 'debugNotifyNoAttackOn' : 'debugNotifyNoAttackOff',
                            Game.debugCheats.disableTowerAttack ? '🏹 Атака башни отключена' : '🏹 Атака башни включена'
                        )
                        : `🏹 Атака башни ${Game.debugCheats.disableTowerAttack ? 'отключена' : 'включена'}`,
                    '#3498db'
                );
            });
        }

        const btnToggleEventHud = document.getElementById('btnToggleEventHud');
        if (btnToggleEventHud) {
            btnToggleEventHud.addEventListener('click', () => {
                if (!window.Game || !Game.debugCheats) return;
                Game.debugCheats.showEventHud = !Game.debugCheats.showEventHud;
                btnToggleEventHud.textContent = (typeof LocalizationManager !== 'undefined')
                    ? LocalizationManager.t(
                        Game.debugCheats.showEventHud ? 'debugEventHudOn' : 'debugEventHudOff',
                        `📡 Event HUD: ${Game.debugCheats.showEventHud ? 'ON' : 'OFF'}`
                    )
                    : `📡 Event HUD: ${Game.debugCheats.showEventHud ? 'ON' : 'OFF'}`;
                btnToggleEventHud.setAttribute('data-i18n', Game.debugCheats.showEventHud ? 'debugEventHudOn' : 'debugEventHudOff');
                btnToggleEventHud.classList.toggle('toggle-active', Game.debugCheats.showEventHud);
            });
        }

        

        
        const btnAddThunder = document.getElementById('btnAddThunder');
        if (btnAddThunder) {
            btnAddThunder.addEventListener('click', () => {
                SaveManager.addItem('thunderStrike', 1);
                this.updateMainMenu();
                this.playUpgradeSound();
                this.showNotification('+1 ⚡', '#2ecc71');
            });
        }

        
        const btnAddFrenzy = document.getElementById('btnAddFrenzy');
        if (btnAddFrenzy) {
            btnAddFrenzy.addEventListener('click', () => {
                SaveManager.addItem('frenzyPotion', 1);
                this.updateMainMenu();
                this.playUpgradeSound();
                this.showNotification('+1 🔥', '#2ecc71');
            });
        }

        
        const btnResetProgress = document.getElementById('btnResetProgress');
        if (btnResetProgress) {
            btnResetProgress.addEventListener('click', () => {
                const modal = document.getElementById('resetConfirmModal');
                if (modal) {
                    modal.classList.remove('hidden');
                }
            });
        }

        const btnCancelReset = document.getElementById('btnCancelReset');
        if (btnCancelReset) {
            btnCancelReset.addEventListener('click', () => {
                const modal = document.getElementById('resetConfirmModal');
                if (modal) modal.classList.add('hidden');
            });
        }

        const btnConfirmReset = document.getElementById('btnConfirmReset');
        if (btnConfirmReset) {
            btnConfirmReset.addEventListener('click', async () => {
                if (btnConfirmReset.disabled) {
                    return;
                }

                btnConfirmReset.disabled = true;

                
                SaveManager.reset();
                
                
                if (typeof permanentUpgradeManager !== 'undefined') {
                    permanentUpgradeManager.reset();
                }
                
                
                if (typeof inGameUpgrades !== 'undefined') {
                    inGameUpgrades.reset();
                }

                if (typeof TalentTree !== 'undefined' && TalentTree.reset) {
                    TalentTree.reset();
                }

                if (window.Game && Game.debugCheats) {
                    Game.debugCheats.nextRunGoldBonus = 0;
                    Game.debugCheats.invulnerableTower = false;
                    Game.debugCheats.disableTowerAttack = false;
                    Game.debugCheats.showEventHud = true;
                }

                const btnToggleNoDamage = document.getElementById('btnToggleNoDamage');
                if (btnToggleNoDamage) {
                    btnToggleNoDamage.textContent = (typeof LocalizationManager !== 'undefined')
                        ? LocalizationManager.t('debugInvulnerableOff', '🛡️ Бессмертие: OFF')
                        : '🛡️ Бессмертие: OFF';
                    btnToggleNoDamage.setAttribute('data-i18n', 'debugInvulnerableOff');
                    btnToggleNoDamage.classList.remove('toggle-active');
                }
                const btnToggleNoAttack = document.getElementById('btnToggleNoAttack');
                if (btnToggleNoAttack) {
                    btnToggleNoAttack.textContent = (typeof LocalizationManager !== 'undefined')
                        ? LocalizationManager.t('debugNoAttackOff', '🏹 Без атаки башни: OFF')
                        : '🏹 Без атаки башни: OFF';
                    btnToggleNoAttack.setAttribute('data-i18n', 'debugNoAttackOff');
                    btnToggleNoAttack.classList.remove('toggle-active');
                }
                const btnToggleEventHud = document.getElementById('btnToggleEventHud');
                if (btnToggleEventHud) {
                    btnToggleEventHud.textContent = (typeof LocalizationManager !== 'undefined')
                        ? LocalizationManager.t('debugEventHudOn', '📡 Event HUD: ON')
                        : '📡 Event HUD: ON';
                    btnToggleEventHud.setAttribute('data-i18n', 'debugEventHudOn');
                    btnToggleEventHud.classList.remove('toggle-active');
                }

                this._selectedTalentNodeId = null;
                this._talentView = { scale: 1, panX: 0, panY: 0 };

                const needsCloudReset = typeof AuthManager !== 'undefined' && AuthManager.isLoggedIn && AuthManager.isLoggedIn();
                if (needsCloudReset && AuthManager.forceSave) {
                    const cloudResetDone = await AuthManager.forceSave(true);
                    if (!cloudResetDone) {
                        btnConfirmReset.disabled = false;
                        this.showNotification(LocalizationManager.t('uiCloudResetIncomplete', 'Сброс в облаке не завершен. Проверьте интернет и попробуйте снова.'), '#e67e22');
                        return;
                    }
                }
                
                const modal = document.getElementById('resetConfirmModal');
                if (modal) modal.classList.add('hidden');
                this.updateMainMenu();
                this.playUpgradeSound();

                if (this.currentScreen === 'talentScreen') {
                    this.renderTalentTree();
                }
                
                
                const resetMessage = (typeof LocalizationManager !== 'undefined')
                    ? LocalizationManager.t('debugNotifyResetDone', 'Прогресс сброшен! Перезапуск...')
                    : 'Прогресс сброшен! Перезапуск...';
                this.showNotification(resetMessage, 'warning');
                setTimeout(() => {
                    if (typeof window !== 'undefined' && window.location && window.location.reload) {
                        window.location.reload();
                    }
                }, 450);
            });
        }

        
        const resetConfirmModal = document.getElementById('resetConfirmModal');
        if (resetConfirmModal) {
            resetConfirmModal.addEventListener('click', (e) => {
                if (this.isModalBackdropTarget(e, resetConfirmModal)) {
                    resetConfirmModal.classList.add('hidden');
                }
            });
        }

        const myPurchasesModal = document.getElementById('myPurchasesModal');
        const btnCloseMyPurchases = document.getElementById('btnCloseMyPurchases');
        const btnRefreshMyPurchases = document.getElementById('btnRefreshMyPurchases');

        if (btnCloseMyPurchases && myPurchasesModal) {
            btnCloseMyPurchases.addEventListener('click', () => {
                myPurchasesModal.classList.add('hidden');
            });
        }

        if (btnRefreshMyPurchases) {
            btnRefreshMyPurchases.addEventListener('click', async () => {
                await this.showMyPurchasesModal();
            });
        }

        if (myPurchasesModal) {
            myPurchasesModal.addEventListener('click', (e) => {
                if (this.isModalBackdropTarget(e, myPurchasesModal)) {
                    myPurchasesModal.classList.add('hidden');
                }
            });
        }

        
        setTimeout(() => {
            const btnBackFromCards = document.getElementById('btnBackFromCards');
            console.log('🔙 btnBackFromCards найдена:', !!btnBackFromCards);
            if (btnBackFromCards) {
                btnBackFromCards.addEventListener('click', async () => {
                    if (this._cardsExitInProgress) {
                        return;
                    }
                    this._cardsExitInProgress = true;
                    console.log('🔙 BACK FROM CARDS CLICKED!');
                    this.restoreCardsFromForgeCache();
                    try {
                        await this.commitCardsChangesBeforeExit();
                        this.showScreen('mainMenu');
                    } finally {
                        this._cardsExitInProgress = false;
                    }
                });
            }
        }, 100);

        
         const buyCardBtn = document.getElementById('buyCardBtn');
         if (buyCardBtn) {
             buyCardBtn.addEventListener('click', () => {
                 this.buyCard();
             });
         }

         const btnClaimSeasonReward = document.getElementById('btnClaimSeasonReward');
         if (btnClaimSeasonReward) {
             btnClaimSeasonReward.addEventListener('click', () => {
                 this.claimSeasonReward();
             });
         }

         const btnOpenSeasonModal = document.getElementById('btnOpenSeasonModal');
         if (btnOpenSeasonModal) {
             btnOpenSeasonModal.addEventListener('click', () => {
                 this.showSeasonModal();
             });
         }

         const btnCloseSeasonModal = document.getElementById('btnCloseSeasonModal');
         if (btnCloseSeasonModal) {
             btnCloseSeasonModal.addEventListener('click', () => {
                 this.hideSeasonModal();
             });
         }

         const traderChoiceModal = document.getElementById('traderChoiceModal');
         if (traderChoiceModal) {
             traderChoiceModal.addEventListener('click', (e) => {
                 if (this.isModalBackdropTarget(e, traderChoiceModal)) {
                     this.hideTraderChoiceModal();
                 }
             });
         }

        
        const btnCancelExit = document.getElementById('btnCancelExit');
        if (btnCancelExit) {
            btnCancelExit.addEventListener('click', () => {
                const modal = document.getElementById('exitConfirmModal');
                if (modal) modal.classList.add('hidden');
                
                if (typeof Game.isGameplayPaused === 'function' ? Game.isGameplayPaused() : Game.isPaused) {
                    Game.resume();
                }
            });
        }

         document.getElementById('btnConfirmExit').addEventListener('click', async () => {
              document.getElementById('exitConfirmModal').classList.add('hidden');

              if (window.Game && Game.stats && !Game.stats.gameTime && Game.stats.startTime) {
                  Game.stats.gameTime = Math.floor((Date.now() - Game.stats.startTime) / 1000);
              }

              const waveAtExit = (window.Game && Game.waveManager)
                  ? Math.max(0, Math.floor(Number(Game.waveManager.wave) || 0))
                  : 0;
              const exitPenaltyRate = this.getExitPenaltyRate();
              const exitSessionData = window.Game ? {
                  stats: Game.stats ? { ...Game.stats } : null,
                  wave: waveAtExit,
                  sessionCrystals: Game.sessionCrystals || 0
              } : null;

              await this.showImmediateInterstitial({
                  placement: 'exit_to_menu'
              });

               let stageProgress = null;
               if (window.Game && waveAtExit > 0 && typeof SaveManager !== 'undefined' && SaveManager) {
                  if (typeof SaveManager.updateStageProgress === 'function') {
                      stageProgress = SaveManager.updateStageProgress(Game.currentStage, waveAtExit);
                  }

                  if (typeof SaveManager.saveGameStats === 'function') {
                      SaveManager.saveGameStats({
                          wave: waveAtExit,
                          kills: Game.stats ? (Game.stats.kills || 0) : 0,
                          totalGold: Game.stats ? (Game.stats.totalGold || 0) : 0,
                          crystals: Game.sessionCrystals || 0,
                          time: Game.stats ? (Game.stats.gameTime || 0) : 0
                      });
                  }

                  if (typeof SaveManager.updateBestWave === 'function') {
                      SaveManager.updateBestWave(waveAtExit);
                  }
              }

             if (stageProgress && stageProgress.unlockedNewStage) {
                 const unlockedText = (typeof LocalizationManager !== 'undefined')
                     ? LocalizationManager.t('stageUnlockedToast', 'Открыта Стадия {0}!', stageProgress.unlockedStage)
                     : `Открыта Стадия ${stageProgress.unlockedStage}!`;
                 this.showNotification(unlockedText, 'reward');
             }
             
              
              if (window.Game) {
                  Game.isRunning = false;
                  Game._manualPauseTriggered = false;
                  Game.isPaused = false;
                  if (typeof window.__gpRequestResume === 'function') {
                      window.__gpRequestResume('exit_to_menu_confirm');
                  } else {
                      const gp = typeof Game.getGp === 'function' ? Game.getGp() : null;
                      if (gp && typeof gp.resume === 'function') {
                          try {
                              gp.resume();
                          } catch (error) {
                              console.warn('⚠️ Не удалось снять паузу SDK при выходе в меню:', error);
                          }
                      }
                  }

                  const pauseOverlay = document.getElementById('pauseOverlay');
                  if (pauseOverlay) {
                      pauseOverlay.classList.add('hidden');
                  }

                  if (Game.animationId) {
                      cancelAnimationFrame(Game.animationId);
                      Game.animationId = null;
                  }
              }
             
             
             
             if (Game && Game.sessionCrystals > 0) {
                  const sessionCrystals = Math.max(0, Math.floor(Game.sessionCrystals));
                  const crystalsLost = Math.ceil(sessionCrystals * exitPenaltyRate);
                  const crystalsToKeep = Math.max(0, sessionCrystals - crystalsLost);
                  const baseCrystals = Math.max(0, Math.floor(SaveManager.getCrystals() || 0));
 
                 const updatedTotal = baseCrystals + crystalsToKeep;
                  Game.crystals = updatedTotal;
                  SaveManager.setCrystals(updatedTotal);
              }

              await this.runWithProgressSaveOverlay(async () => {
                  if (window.AchievementsManager && AchievementsManager._isInitialized && exitSessionData) {
                      try {
                          await Promise.race([
                              Promise.resolve(AchievementsManager.finalizeSession(exitSessionData)),
                              new Promise((_, reject) => {
                                  setTimeout(() => reject(new Error('achievements_finalize_timeout')), 2500);
                              })
                          ]);
                      } catch (error) {
                          console.warn('⚠️ Не удалось завершить достижения при выходе в меню:', error);
                      }
                  }

                  if (typeof AuthManager !== 'undefined' && AuthManager.forceSave) {
                      try {
                          await AuthManager.forceSave(true);
                      } catch (error) {
                          console.warn('⚠️ Не удалось синхронизировать сохранение при выходе:', error);
                      }
                  }
              });

               if (window.Game && typeof Game.resetSystems === 'function') {
                   Game.resetSystems();
               }

              if (typeof AudioManager !== 'undefined') {
                  AudioManager.stopBackgroundMusic();

                  setTimeout(() => {
                      AudioManager.playMenuMusic();
                  }, 100);
              }

              this.showScreen('mainMenu');
              this.updateMainMenu();
          });

         
         document.getElementById('exitConfirmModal').addEventListener('click', (e) => {
             const modal = document.getElementById('exitConfirmModal');
             if (this.isModalBackdropTarget(e, modal)) {
                 modal.classList.add('hidden');
                 
                 if (typeof Game.isGameplayPaused === 'function' ? Game.isGameplayPaused() : Game.isPaused) {
                     Game.resume();
                 }
             }
         });

          
          console.log('🎴 Инициализация Drag and Drop...');
          this.initCardDragAndDrop();

        console.log('✅ bindEvents завершен');
      },

    
    buyCard() {
        const result = SaveManager.buyRandomCard();
        if (result.success) {
            this.requestCloudSave('buy_card');
            this.refreshCardAchievements();
            this.updateCardsScreen();
            this.playUpgradeSound();
            const newCard = document.querySelector('.card-item.card-appear');
            if (newCard) {
                setTimeout(() => newCard.classList.remove('card-appear'), 500);
            }
        } else {
            this.playErrorSound();
            this.showNotification(result.error || LocalizationManager.t('errorNotEnoughCrystals', 'Недостаточно кристаллов'), 'error'); 
        }
    },

     
      
      initCardDragAndDrop() {
          console.log('🎴 Drag & Drop disabled - using button-based card actions');
          
          

         
         const btnRewardedAd = document.getElementById('btnCrystalStoreRewardedAd');
         console.log('📺 btnRewardedAd:', btnRewardedAd ? 'НАЙДЕНА ✅' : 'НЕ НАЙДЕНА ❌');
         if (btnRewardedAd) {
              btnRewardedAd.addEventListener('click', async () => {
                  console.log('📺 Пользователь нажал на Rewarded видео');
                  if (typeof AdsManager === 'undefined' || !AdsManager.showRewardedVideo) {
                      this.showNotification(LocalizationManager.t('uiAdTemporarilyUnavailable', 'Реклама временно недоступна'), '#e74c3c');
                      return;
                  }
                  const result = await AdsManager.showRewardedVideo(AdsManager.rewardedDefaultAmount || 35);
                  if (result) {
                      this.requestCloudSave('rewarded_video_reward');
                      this.requestCloudRefresh('rewarded_video_reward');
                      this.updateMainMenu();
                      this.updateCrystalStoreScreen();
                  }
              });
          }

          const btnMyPurchases = document.getElementById('btnMyPurchases');
          if (btnMyPurchases) {
              btnMyPurchases.addEventListener('click', async () => {
                  await this.showMyPurchasesModal();
              });
          }

        
        const bindSoundToggle = (button, setTextContent = false) => {
            if (!button) {
                return;
            }

            button.addEventListener('click', () => {
                if (typeof AudioManager !== 'undefined') {
                    AudioManager.toggleMute();
                    this.updateSoundButtons();
                }
            });

            if (setTextContent) {
                button.textContent = (typeof AudioManager !== 'undefined' && AudioManager.isSoundEnabled()) ? '🔊' : '🔇';
            }
        };

        bindSoundToggle(document.getElementById('btnSound'), true);
        bindSoundToggle(document.getElementById('btnGameSound'));
        this.updateSoundButtons();
        this.refreshMenuChatUi();

          
    },

    
    updateShopScreen() {
        this.updateShopUI();
    },

    
    renderProfileCosmeticsGrid(type) {
        if (typeof ProfileCosmetics === 'undefined' || !ProfileCosmetics) {
            return '';
        }

        const crystals = SaveManager.getCrystals();
        const profilePrivate = SaveManager.getProfilePrivate();
        const equippedId = type === 'background'
            ? profilePrivate.equippedBackgroundId
            : profilePrivate.equippedFrameId;
        const defaultAvatar = this.escapeHtml(this.getDefaultPlayerAvatar());

        return ProfileCosmetics.getCatalog(type).map((item) => {
            const itemId = String(item.id || '');
            const isOwned = SaveManager.isProfileCosmeticOwned(type, itemId);
            const isEquipped = equippedId === itemId;
            const isBundleOnly = Boolean(item.bundleOnly);
            const canAfford = crystals >= Number(item.cost || 0);
            const previewFrameClass = this.getProfileFrameClass(type === 'frame' ? itemId : profilePrivate.equippedFrameId);
            const previewBackgroundClass = this.getProfileBackgroundClass(type === 'background' ? itemId : profilePrivate.equippedBackgroundId);

            let action = 'buy';
            let label = `${this.escapeHtml(LocalizationManager.t('playerProfileBuy', 'Купить'))} • 💎 ${Math.max(0, Number(item.cost) || 0)}`;
            let disabled = !canAfford;
            let metaExtra = '';

            if (isBundleOnly && !isOwned) {
                action = 'bundle';
                label = this.escapeHtml(LocalizationManager.t('profileCosmeticBundleExclusive', 'Входит в стартовый набор'));
                disabled = true;
                metaExtra = `<div class="profile-cosmetic-card__exclusive">${this.escapeHtml(LocalizationManager.t('profileCosmeticUnlockViaStarter', 'Открывается через стартовый набор'))}</div>`;
            }

            if (isOwned) {
                action = 'equip';
                label = isEquipped
                    ? this.escapeHtml(LocalizationManager.t('playerProfileEquipped', 'Надето'))
                    : this.escapeHtml(LocalizationManager.t('playerProfileEquip', 'Надеть'));
                disabled = isEquipped;
                if (isBundleOnly) {
                    metaExtra = `<div class="profile-cosmetic-card__exclusive is-owned">${this.escapeHtml(LocalizationManager.t('profileCosmeticBundleOwned', 'Открыто через набор'))}</div>`;
                }
            }

            return `
                <article class="shop-item profile-cosmetic-card ${isOwned ? 'is-owned' : ''} ${isEquipped ? 'is-equipped' : ''}">
                    <div class="profile-cosmetic-card__preview ${previewBackgroundClass}">
                        <div class="profile-avatar-shell ${previewFrameClass}">
                            <img src="${defaultAvatar}" alt="" class="profile-avatar-image">
                        </div>
                    </div>
                    <div class="shop-item-name">${this.escapeHtml(`${item.icon || ''} ${this.getLocalizedCosmeticName(item)}`.trim())}</div>
                    <div class="shop-item-desc">${this.escapeHtml(this.getLocalizedCosmeticDescription(item))}</div>
                    <div class="profile-cosmetic-card__meta">${this.escapeHtml(LocalizationManager.t(`playerProfileRarity_${item.rarity}`, item.rarity || 'Common'))}</div>
                    ${metaExtra}
                    <button
                        class="btn btn-buy"
                        data-shop-action="${action}"
                        data-shop-type="${this.escapeHtml(type)}"
                        data-item-id="${this.escapeHtml(itemId)}"
                        ${disabled ? 'disabled' : ''}
                    >${label}</button>
                </article>
            `;
        }).join('');
    },

    scheduleLeaderboardProfileRefresh() {
        if (typeof LeaderboardManager === 'undefined' || !LeaderboardManager || typeof LeaderboardManager.loadLeaderboard !== 'function') {
            return;
        }

        setTimeout(() => {
            if (typeof LeaderboardManager.isLeaderboardVisible === 'function' && !LeaderboardManager.isLeaderboardVisible()) {
                LeaderboardManager._pendingRefreshWhenVisible = true;
                return;
            }
            LeaderboardManager.loadLeaderboard(true);
        }, 900);
    },

    async buyProfileCosmetic(type, itemId) {
        const item = this.getProfileCosmetic(type, itemId);
        if (!item) {
            return false;
        }

        if (SaveManager.isProfileCosmeticOwned(type, item.id)) {
            return this.equipProfileCosmetic(type, item.id);
        }

        if (!SaveManager.spendCrystals(item.cost)) {
            this.showNotification(LocalizationManager.t('errorNotEnoughCrystals', 'Недостаточно кристаллов'), 'error');
            return false;
        }

        SaveManager.unlockProfileCosmetic(type, item.id);
        SaveManager.equipProfileCosmetic(type, item.id);
        this.updateShopUI();
        this.updateMainMenu();
        this.refreshOpenPlayerProfileModal();
        this.scheduleLeaderboardProfileRefresh();
        if (typeof this.playUpgradeSound === 'function') {
            this.playUpgradeSound();
        }
        this.requestCloudSave('profile_cosmetic_purchase', true);
        this.showNotification(
            LocalizationManager.t('profileCosmeticPurchaseSuccess', 'Косметика приобретена: {0}', this.getLocalizedCosmeticName(item)),
            'success'
        );
        return true;
    },

    async equipProfileCosmetic(type, itemId) {
        const item = this.getProfileCosmetic(type, itemId);
        if (!item || !SaveManager.isProfileCosmeticOwned(type, item.id)) {
            return false;
        }

        const profilePrivate = SaveManager.getProfilePrivate();
        const currentEquippedId = type === 'background'
            ? profilePrivate.equippedBackgroundId
            : profilePrivate.equippedFrameId;
        if (currentEquippedId === item.id) {
            return false;
        }

        SaveManager.equipProfileCosmetic(type, item.id);
        this.updateShopUI();
        this.updateMainMenu();
        this.refreshOpenPlayerProfileModal();
        this.scheduleLeaderboardProfileRefresh();
        this.requestCloudSave('profile_cosmetic_equip', true);
        this.showNotification(
            LocalizationManager.t('profileCosmeticEquipped', 'Экипировано: {0}', this.getLocalizedCosmeticName(item)),
            'info'
        );
        return true;
    },

    updateShopUI() {
        const crystals = SaveManager.getCrystals();
        const crystalsDisplay = document.getElementById('shopCrystals');
        if (crystalsDisplay) {
            crystalsDisplay.textContent = crystals;
        }

        const previewEl = document.getElementById('shopProfilePreviewCard');
        if (previewEl) {
            const playerInfo = window.AuthManager && typeof AuthManager.getPlayerInfo === 'function'
                ? AuthManager.getPlayerInfo()
                : {
                    id: null,
                    name: LocalizationManager.t('authGuestName', 'Guest'),
                    avatar: ''
                };
            const publicProfile = window.AuthManager && typeof AuthManager.buildPublicProfileSnapshot === 'function'
                ? AuthManager.buildPublicProfileSnapshot()
                : this.getResolvedPublicProfile(null);

            previewEl.innerHTML = this.renderProfileCard(playerInfo, publicProfile, {
                compact: true,
                subtitleKey: 'playerProfilePreviewSubtitle',
                subtitleFallback: 'Так будет выглядеть ваша карточка'
            });
        }

        const framesGrid = document.getElementById('shopFramesGrid');
        if (framesGrid) {
            framesGrid.innerHTML = this.renderProfileCosmeticsGrid('frame');
        }

        const backgroundsGrid = document.getElementById('shopBackgroundsGrid');
        if (backgroundsGrid) {
            backgroundsGrid.innerHTML = this.renderProfileCosmeticsGrid('background');
        }
    },

    renderTalentTree() {
        if (typeof TalentTree === 'undefined') {
            return;
        }

        const t = (key, fallback, ...args) => {
            if (typeof LocalizationManager !== 'undefined' && LocalizationManager.t) {
                return LocalizationManager.t(key, fallback, ...args);
            }
            return fallback;
        };

        const pointsEl = document.getElementById('talentPointsCount');
        const hintEl = document.getElementById('talentProgressHint');
        const gridEl = document.getElementById('talentTreeGrid');
        const dockEl = document.getElementById('talentDetailsDock');
        if (!pointsEl || !hintEl || !gridEl || !dockEl) {
            return;
        }

        const bestWave = TalentTree.getBestWave();
        const earned = TalentTree.getEarnedPoints(bestWave);
        const spent = TalentTree.getSpentPoints();
        const available = TalentTree.getAvailablePoints();

        if (document.documentElement.classList.contains('layout-mobile')) {
            this.renderTalentTreeMobile(t, {
                pointsEl,
                hintEl,
                gridEl,
                dockEl,
                bestWave,
                earned,
                spent,
                available
            });
            return;
        }

        pointsEl.textContent = available;
        hintEl.textContent = bestWave < 50
            ? t('talent_hint_locked', 'Откроется на 50 волне. Текущий рекорд: {0}', bestWave)
            : t('talent_hint_progress', 'Рекорд: {0} | Получено очков: {1} | Потрачено: {2}', bestWave, earned, spent);

        const branches = [
            { id: 'attack', title: `⚔️ ${t('talent_branch_attack', 'Натиск')}` },
            { id: 'defense', title: `🛡️ ${t('talent_branch_defense', 'Оплот')}` },
            { id: 'utility', title: `⚡ ${t('talent_branch_utility', 'Тактика')}` }
        ];

        const branchX = { attack: 18, defense: 50, utility: 82 };
        const allNodes = [];
        const nodeById = {};
        const nodePositions = {};

        branches.forEach((branch) => {
            const nodes = TalentTree.getNodesByBranch(branch.id);
            const depthMemo = {};
            const localById = {};
            nodes.forEach((node) => {
                localById[node.id] = node;
                nodeById[node.id] = node;
            });

            const getDepth = (id) => {
                if (depthMemo[id] !== undefined) return depthMemo[id];
                const node = localById[id];
                if (!node || !node.prereq || node.prereq.length === 0) {
                    depthMemo[id] = 0;
                    return 0;
                }

                let maxParent = 0;
                node.prereq.forEach((pid) => {
                    if (localById[pid]) {
                        maxParent = Math.max(maxParent, getDepth(pid) + 1);
                    }
                });

                depthMemo[id] = maxParent;
                return maxParent;
            };

            nodes.forEach((node) => getDepth(node.id));

            const byDepth = {};
            nodes.forEach((node) => {
                const depth = depthMemo[node.id];
                if (!byDepth[depth]) byDepth[depth] = [];
                byDepth[depth].push(node);
            });

            Object.keys(byDepth).forEach((depthKey) => {
                const depth = Number(depthKey);
                const list = byDepth[depth];
                list.sort((a, b) => {
                    const aName = t(`talent_${a.id}_name`, a.name || a.id);
                    const bName = t(`talent_${b.id}_name`, b.name || b.id);
                    return aName.localeCompare(bName, 'ru');
                });

                const y = 20 + depth * 30;
                const spread = list.length === 1 ? [0] : list.length === 2 ? [-6, 6] : [-8, 0, 8];
                list.forEach((node, idx) => {
                    const x = branchX[branch.id] + (spread[idx] || 0);
                    nodePositions[node.id] = { x, y };
                    allNodes.push(node);
                });
            });
        });

        if (!this._selectedTalentNodeId || !nodeById[this._selectedTalentNodeId]) {
            this._selectedTalentNodeId = allNodes.length > 0 ? allNodes[0].id : null;
        }

        const selectedNode = this._selectedTalentNodeId ? nodeById[this._selectedTalentNodeId] : null;
        const selectedUnlocked = selectedNode ? TalentTree.isUnlocked(selectedNode.id) : false;
        const selectedCanUnlock = selectedNode ? TalentTree.canUnlock(selectedNode.id).ok : false;

        const links = [];
        allNodes.forEach((node) => {
            (node.prereq || []).forEach((pid) => {
                if (!nodePositions[pid] || !nodePositions[node.id]) return;
                const fromUnlocked = TalentTree.isUnlocked(pid);
                const toUnlocked = TalentTree.isUnlocked(node.id);
                const cls = toUnlocked ? 'is-unlocked' : (fromUnlocked ? 'is-ready' : 'is-locked');
                links.push(`<line class="talent-link ${cls}" x1="${nodePositions[pid].x}" y1="${nodePositions[pid].y}" x2="${nodePositions[node.id].x}" y2="${nodePositions[node.id].y}"></line>`);
            });
        });

        const nodeHtml = allNodes.map((node) => {
            const unlocked = TalentTree.isUnlocked(node.id);
            const canUnlock = TalentTree.canUnlock(node.id).ok;
            const isSelected = this._selectedTalentNodeId === node.id;
            const stateClass = unlocked ? 'is-unlocked' : (canUnlock ? 'is-ready' : 'is-locked');
            const keystoneClass = node.isKeystone ? 'is-keystone' : '';
            const selectedClass = isSelected ? 'is-selected' : '';
            const pos = nodePositions[node.id];
            const nodeName = t(`talent_${node.id}_name`, node.name || node.id);

            return `
                <button type="button" class="talent-orb ${stateClass} ${keystoneClass} ${selectedClass}" data-talent-node="${node.id}" style="left:${pos.x}%;top:${pos.y}%" title="${nodeName}">
                    <span class="talent-orb__icon">${node.icon || '✦'}</span>
                    <span class="talent-orb__pip">${unlocked ? '1' : '0'}</span>
                </button>
            `;
        }).join('');

        const branchLabels = branches.map((branch) => {
            const x = branchX[branch.id];
            return `<div class="talent-branch-label" style="left:${x}%">${branch.title}</div>`;
        }).join('');

        const selectedReq = selectedNode && selectedNode.prereq && selectedNode.prereq.length > 0
            ? selectedNode.prereq.map((id) => t(`talent_${id}_name`, nodeById[id]?.name || id)).join(', ')
            : t('talent_base_node', 'Базовый узел');

        const selectedName = selectedNode ? t(`talent_${selectedNode.id}_name`, selectedNode.name || selectedNode.id) : '';
        const selectedDesc = selectedNode ? t(`talent_${selectedNode.id}_desc`, selectedNode.description || '') : '';

        const detailsHtml = selectedNode ? `
            <div class="talent-details__title">${selectedNode.icon || '✦'} ${selectedName}</div>
            <div class="talent-details__desc">${selectedDesc}</div>
            <div class="talent-details__meta">${t('talent_requirements', 'Требования')}: ${selectedReq}</div>
            <button type="button" class="btn btn-buy btn-talent-unlock-detail" data-talent-id="${selectedNode.id}" ${selectedUnlocked || !selectedCanUnlock ? 'disabled' : ''}>
                ${selectedUnlocked ? t('talent_state_unlocked', 'Изучено') : `${t('talent_btn_unlock', 'Изучить')} (${selectedNode.cost})`}
            </button>
        ` : `<div class="talent-details__desc">${t('talent_no_nodes', 'Нет доступных узлов.')}</div>`;

        gridEl.classList.remove('talent-tree-grid-mobile');
        gridEl.classList.add('talent-tree-grid');
        gridEl.innerHTML = `
            <div class="talent-canvas-wrap">
                <div class="talent-canvas-head">${branchLabels}</div>
                <div class="talent-canvas">
                    <div class="talent-canvas-pan" id="talentCanvasPan">
                        <svg class="talent-links" viewBox="0 0 100 100" preserveAspectRatio="none">
                            ${links.join('')}
                        </svg>
                        ${nodeHtml}
                    </div>
                    <div class="talent-canvas-controls">
                        <button type="button" class="btn-talent-canvas-control" data-talent-zoom="in">+</button>
                        <button type="button" class="btn-talent-canvas-control" data-talent-zoom="out">-</button>
                        <button type="button" class="btn-talent-canvas-control" data-talent-zoom="reset">⟳</button>
                    </div>
                </div>
            </div>
        `;

        dockEl.innerHTML = detailsHtml;

        const canvasEl = gridEl.querySelector('.talent-canvas');
        const panEl = gridEl.querySelector('#talentCanvasPan');
        if (canvasEl && panEl) {
            const applyTransform = () => {
                panEl.style.transform = `translate(${this._talentView.panX}px, ${this._talentView.panY}px) scale(${this._talentView.scale})`;
            };

            applyTransform();

            let dragging = false;
            let startX = 0;
            let startY = 0;
            let startPanX = 0;
            let startPanY = 0;

            canvasEl.addEventListener('pointerdown', (event) => {
                if (event.target.closest('[data-talent-node]') || event.target.closest('.talent-canvas-controls')) {
                    return;
                }
                dragging = true;
                startX = event.clientX;
                startY = event.clientY;
                startPanX = this._talentView.panX;
                startPanY = this._talentView.panY;
                canvasEl.setPointerCapture(event.pointerId);
                canvasEl.classList.add('is-dragging');
            });

            canvasEl.addEventListener('pointermove', (event) => {
                if (!dragging) return;
                this._talentView.panX = startPanX + (event.clientX - startX);
                this._talentView.panY = startPanY + (event.clientY - startY);
                applyTransform();
            });

            const stopDrag = (event) => {
                if (!dragging) return;
                dragging = false;
                if (event && event.pointerId !== undefined) {
                    try {
                        canvasEl.releasePointerCapture(event.pointerId);
                    } catch (e) {
                        
                    }
                }
                canvasEl.classList.remove('is-dragging');
            };

            canvasEl.addEventListener('pointerup', stopDrag);
            canvasEl.addEventListener('pointercancel', stopDrag);

            canvasEl.addEventListener('wheel', (event) => {
                event.preventDefault();
                const delta = event.deltaY < 0 ? 0.08 : -0.08;
                this._talentView.scale = Math.max(0.75, Math.min(1.9, this._talentView.scale + delta));
                applyTransform();
            }, { passive: false });

            gridEl.querySelectorAll('[data-talent-zoom]').forEach((btn) => {
                btn.addEventListener('click', () => {
                    const mode = btn.dataset.talentZoom;
                    if (mode === 'in') {
                        this._talentView.scale = Math.min(1.9, this._talentView.scale + 0.1);
                    } else if (mode === 'out') {
                        this._talentView.scale = Math.max(0.75, this._talentView.scale - 0.1);
                    } else {
                        this._talentView.scale = 1;
                        this._talentView.panX = 0;
                        this._talentView.panY = 0;
                    }
                    applyTransform();
                });
            });
        }

        gridEl.querySelectorAll('[data-talent-node]').forEach((btn) => {
            btn.addEventListener('click', () => {
                this._selectedTalentNodeId = btn.dataset.talentNode;
                this.renderTalentTree();
            });
        });

        const detailUnlockBtn = dockEl.querySelector('.btn-talent-unlock-detail');
        if (detailUnlockBtn) {
            detailUnlockBtn.addEventListener('click', () => {
                const nodeId = detailUnlockBtn.dataset.talentId;
                const result = TalentTree.unlock(nodeId);
                if (!result.success) {
                    this.playErrorSound();
                    return;
                }

                this.playUpgradeSound();
                this.requestCloudSave('talent_unlock');
                this.renderTalentTree();
                this.updateMainMenu();
            });
        }
    },

    renderTalentTreeMobile(t, ctx) {
        const { pointsEl, hintEl, gridEl, dockEl, bestWave, earned, spent, available } = ctx;

        pointsEl.textContent = available;
        hintEl.textContent = bestWave < 50
            ? t('talent_hint_locked', 'Откроется на 50 волне. Текущий рекорд: {0}', bestWave)
            : t('talent_hint_progress', 'Рекорд: {0} | Получено очков: {1} | Потрачено: {2}', bestWave, earned, spent);

        const branches = [
            { id: 'attack', title: `⚔️ ${t('talent_branch_attack', 'Натиск')}` },
            { id: 'defense', title: `🛡️ ${t('talent_branch_defense', 'Оплот')}` },
            { id: 'utility', title: `⚡ ${t('talent_branch_utility', 'Тактика')}` }
        ];

        if (!this._mobileTalentBranch || !branches.some((b) => b.id === this._mobileTalentBranch)) {
            this._mobileTalentBranch = branches[0].id;
        }

        const statusText = (nodeId) => {
            if (TalentTree.isUnlocked(nodeId)) {
                return t('talent_state_unlocked', 'Изучено');
            }
            const canUnlock = TalentTree.canUnlock(nodeId).ok;
            return canUnlock ? t('talent_state_ready', 'Доступно') : t('talent_state_locked', 'Закрыто');
        };

        const branchTabsHtml = branches.map((branch) => {
            const isActive = this._mobileTalentBranch === branch.id;
            return `
                <button type="button" class="talent-mobile-tab ${isActive ? 'is-active' : ''}" data-talent-branch="${branch.id}">${branch.title}</button>
            `;
        }).join('');

        const selectedBranch = branches.find((branch) => branch.id === this._mobileTalentBranch) || branches[0];

        const branchHtml = [selectedBranch].map((branch) => {
            const nodes = TalentTree.getNodesByBranch(branch.id).slice().sort((a, b) => {
                const aName = t(`talent_${a.id}_name`, a.name || a.id);
                const bName = t(`talent_${b.id}_name`, b.name || b.id);
                return aName.localeCompare(bName, 'ru');
            });

            const rows = nodes.map((node) => {
                const unlocked = TalentTree.isUnlocked(node.id);
                const canUnlock = TalentTree.canUnlock(node.id).ok;
                const nodeName = t(`talent_${node.id}_name`, node.name || node.id);
                const nodeDesc = t(`talent_${node.id}_desc`, node.description || '');

                return `
                    <div class="talent-mobile-row ${unlocked ? 'is-unlocked' : (canUnlock ? 'is-ready' : 'is-locked')}">
                        <div class="talent-mobile-row__main">
                            <div class="talent-mobile-row__title">${node.icon || '✦'} ${nodeName}</div>
                            <div class="talent-mobile-row__desc">${nodeDesc}</div>
                            <div class="talent-mobile-row__meta">${statusText(node.id)} | ${t('cost', 'Цена')}: ${node.cost}</div>
                        </div>
                        <button type="button" class="btn btn-buy talent-mobile-row__btn" data-talent-id="${node.id}" ${unlocked || !canUnlock ? 'disabled' : ''}>
                            ${unlocked ? t('talent_state_unlocked', 'Изучено') : t('talent_btn_unlock', 'Изучить')}
                        </button>
                    </div>
                `;
            }).join('');

            return `
                <section class="talent-mobile-branch">
                    <h3>${branch.title}</h3>
                    <div class="talent-mobile-list">${rows || `<div class="mobile-info-empty">${t('talent_no_nodes', 'Нет доступных узлов.')}</div>`}</div>
                </section>
            `;
        }).join('');

        gridEl.classList.remove('talent-tree-grid');
        gridEl.classList.add('talent-tree-grid-mobile');
        gridEl.innerHTML = `
            <div class="talent-mobile-layout">
                <div class="talent-mobile-tabs">${branchTabsHtml}</div>
                ${branchHtml}
            </div>
        `;

        dockEl.innerHTML = '';

        gridEl.querySelectorAll('[data-talent-id]').forEach((btn) => {
            btn.addEventListener('click', () => {
                const nodeId = btn.dataset.talentId;
                const result = TalentTree.unlock(nodeId);
                if (!result.success) {
                    this.playErrorSound();
                    return;
                }

                this.playUpgradeSound();
                this.requestCloudSave('talent_unlock');
                this.renderTalentTree();
                this.updateMainMenu();
            });
        });

        gridEl.querySelectorAll('[data-talent-branch]').forEach((btn) => {
            btn.addEventListener('click', () => {
                this._mobileTalentBranch = btn.dataset.talentBranch;
                this.renderTalentTree();
            });
        });
    },

    
    updateCrystalStoreScreen() {
        const crystals = SaveManager.getCrystals();
        const moonSeals = SaveManager.getMoonSeals ? SaveManager.getMoonSeals() : 0;
        const crystalsDisplay = document.getElementById('crystalStoreCrystals');
        if (crystalsDisplay) crystalsDisplay.textContent = crystals;
        const moonSealsDisplay = document.getElementById('crystalStoreMoonSeals');
        if (moonSealsDisplay) moonSealsDisplay.textContent = moonSeals;
    },

    updateMoonSeals(moonSeals) {
        const mainEl = document.getElementById('menuMoonSeals');
        if (mainEl) {
            const parent = mainEl.parentElement;
            if (parseInt(mainEl.textContent, 10) !== Math.floor(moonSeals)) {
                this.triggerPop(parent);
            }
            mainEl.textContent = Math.floor(moonSeals);
        }

        const storeEl = document.getElementById('crystalStoreMoonSeals');
        if (storeEl) {
            storeEl.textContent = Math.floor(moonSeals);
        }
    },

    formatCrystalStorePrice(product, unavailableLabel) {
        if (!product || typeof product !== 'object') {
            return unavailableLabel;
        }

        const rawPriceValue = product.priceValue !== undefined ? product.priceValue : product.price;
        const numericPrice = Number(rawPriceValue);
        const currencyCode = String(product.priceCurrencyCode || product.currency || '').trim();
        const currencySymbol = String(product.currencySymbol || '').trim();
        const currencyLabel = currencySymbol || currencyCode;

        if (Number.isFinite(numericPrice)) {
            return currencyLabel ? `${numericPrice} ${currencyLabel}` : String(numericPrice);
        }

        const priceText = typeof product.price === 'string' ? product.price.trim() : '';
        if (priceText) {
            return priceText;
        }

        return unavailableLabel;
    },

    resolveCrystalStoreCatalog() {
        if (!window.PurchasesManager) {
            return [];
        }

        const catalog = Array.isArray(PurchasesManager.catalogProducts) ? PurchasesManager.catalogProducts : [];
        const knownProducts = PurchasesManager.PRODUCTS && typeof PurchasesManager.PRODUCTS === 'object'
            ? PurchasesManager.PRODUCTS
            : null;

        const filtered = catalog.filter((product) => {
            if (!product || !product.id) {
                return false;
            }

            if (!knownProducts) {
                return true;
            }

            return Object.prototype.hasOwnProperty.call(knownProducts, product.id);
        });

        const getNumericPrice = (product) => {
            const raw = product && product.priceValue !== undefined ? product.priceValue : (product ? product.price : null);
            const parsed = Number(raw);
            return Number.isFinite(parsed) ? parsed : Number.MAX_SAFE_INTEGER;
        };

        filtered.sort((a, b) => getNumericPrice(a) - getNumericPrice(b));

        return filtered;
    },

    async syncCrystalStoreCatalogUI() {
        const gridEl = document.getElementById('crystalStorePackagesGrid');
        if (!gridEl) {
            return false;
        }
        const moonSealsGridEl = document.getElementById('moonSealsPackagesGrid');
        const starterBundleGridEl = document.getElementById('starterMoonBundleGrid');

        const t = (key, fallback, ...args) => {
            if (typeof LocalizationManager !== 'undefined' && typeof LocalizationManager.t === 'function') {
                return LocalizationManager.t(key, fallback, ...args);
            }

            return fallback;
        };

        const loadingLabel = this.escapeHtml(t('loading', 'Загрузка...'));
        const unavailableLabel = this.escapeHtml(t('uiPriceUnavailableShort', 'Недоступно'));

        gridEl.innerHTML = `<div class="shop-item crystal-package-card"><div class="shop-item-name">${loadingLabel}</div></div>`;
        if (moonSealsGridEl) {
            moonSealsGridEl.innerHTML = `<div class="shop-item crystal-package-card"><div class="shop-item-name">${loadingLabel}</div></div>`;
        }
        if (starterBundleGridEl) {
            starterBundleGridEl.innerHTML = `<div class="shop-item crystal-package-card"><div class="shop-item-name">${loadingLabel}</div></div>`;
        }

        const moonSealsOffersMarkup = this.getMoonSealCrystalOffers().map((offer) => {
            const canAfford = (SaveManager.getMoonSeals ? SaveManager.getMoonSeals() : 0) >= offer.moonSealsCost;
            return `
                <div class="shop-item crystal-package-card moon-offer-card">
                    <div class="shop-item-icon">💎</div>
                    <div class="shop-item-name">${this.escapeHtml(t('moonSealsCrystalOfferName', '{0} кристаллов', offer.crystals))}</div>
                    <div class="shop-item-desc">${this.escapeHtml(t('moonSealsCrystalOfferDesc', 'Цена: {0} Лунных печатей', offer.moonSealsCost))}</div>
                    <button class="btn btn-buy btn-moon-offer" data-moon-offer="${this.escapeHtml(offer.id)}" ${canAfford ? '' : 'disabled'}>🌙 ${offer.moonSealsCost}</button>
                </div>
            `;
        }).join('');

        const starterBundle = this.getStarterMoonBundleOffer();
        const starterBundleOwned = this.isStarterMoonBundleOwned();
        const starterBundleAffordable = (SaveManager.getMoonSeals ? SaveManager.getMoonSeals() : 0) >= starterBundle.moonSealsCost;
        const starterBundleMarkup = `
            <div class="shop-item crystal-package-card moon-offer-card moon-bundle-card ${starterBundleOwned ? 'is-owned' : ''}">
                <div class="shop-item-icon">🌙</div>
                <div class="shop-item-name">${this.escapeHtml(t('purchase_starter_moon_bundle_name', 'Стартовый лунный набор'))}</div>
                <div class="shop-item-desc">${this.escapeHtml(t('purchase_starter_moon_bundle_desc', 'Премиальная рамка и фон профиля'))}</div>
                <button class="btn btn-buy btn-moon-bundle" data-moon-bundle="${this.escapeHtml(starterBundle.id)}" ${(starterBundleOwned || !starterBundleAffordable) ? 'disabled' : ''}>${starterBundleOwned ? this.escapeHtml(t('profileCosmeticBundleOwned', 'Открыто через набор')) : `🌙 ${starterBundle.moonSealsCost}`}</button>
            </div>
        `;

        const paymentsReady = await this.initGpPaymentsDirect();
        if (!paymentsReady) {
            gridEl.innerHTML = moonSealsOffersMarkup;
            if (moonSealsGridEl) {
                moonSealsGridEl.innerHTML = `<div class="shop-item crystal-package-card"><div class="shop-item-name">${unavailableLabel}</div></div>`;
            }
            if (starterBundleGridEl) {
                starterBundleGridEl.innerHTML = starterBundleMarkup;
            }
            return false;
        }

        if (window.PurchasesManager && typeof PurchasesManager.loadCatalogFromSDK === 'function') {
            await PurchasesManager.loadCatalogFromSDK();
        }

        const catalog = this.resolveCrystalStoreCatalog();
        if (!catalog || catalog.length === 0) {
            gridEl.innerHTML = moonSealsOffersMarkup;
            if (moonSealsGridEl) {
                moonSealsGridEl.innerHTML = `<div class="shop-item crystal-package-card"><div class="shop-item-name">${unavailableLabel}</div></div>`;
            }
            if (starterBundleGridEl) {
                starterBundleGridEl.innerHTML = starterBundleMarkup;
            }
            return false;
        }

        const renderCards = (products) => products.map((product) => {
            const productId = this.escapeHtml(String(product.id || ''));
            const rawTitle = (window.PurchasesManager && typeof PurchasesManager.getLocalizedProductName === 'function')
                ? PurchasesManager.getLocalizedProductName(product.id, String(product.title || '').trim())
                : String(product.title || '').trim();
            const rawDescription = (window.PurchasesManager && typeof PurchasesManager.getLocalizedProductDescription === 'function')
                ? PurchasesManager.getLocalizedProductDescription(product.id, String(product.description || '').trim())
                : String(product.description || '').trim();
            const productTitle = this.escapeHtml(rawTitle || t('uiPriceUnavailableShort', 'Недоступно'));
            const productDescription = this.escapeHtml(rawDescription);
            const priceLabel = this.escapeHtml(this.formatCrystalStorePrice(product, t('uiPriceUnavailableShort', 'Недоступно')));
            const imageURI = String(product.imageURI || '').trim();
            const configuredProduct = PurchasesManager && PurchasesManager.PRODUCTS ? PurchasesManager.PRODUCTS[product.id] : null;
            const imageHtml = imageURI
                ? `<img src="${this.escapeHtml(imageURI)}" alt="" loading="lazy" referrerpolicy="no-referrer" style="width:56px;height:56px;object-fit:contain;" />`
                : this.escapeHtml((configuredProduct && configuredProduct.icon) ? configuredProduct.icon : '💎');

            console.log('💳 Crystal SKU', {
                id: product.id,
                title: product.title || '',
                priceValue: product.priceValue,
                currency: product.priceCurrencyCode || product.currency || '',
                currencySymbol: product.currencySymbol || ''
            });

            return `
                <div class="shop-item crystal-package-card">
                    <div class="shop-item-icon">${imageHtml}</div>
                    <div class="shop-item-name">${productTitle}</div>
                    <div class="shop-item-desc">${productDescription || '&nbsp;'}</div>
                    <button class="btn btn-buy btn-crystal-package" data-product="${productId}">${priceLabel}</button>
                </div>
            `;
        }).join('');

        const moonSealsCatalog = catalog.filter((product) => {
            const config = PurchasesManager && PurchasesManager.PRODUCTS ? PurchasesManager.PRODUCTS[product.id] : null;
            return config && config.storefrontGroup === 'moonseals';
        });
        gridEl.innerHTML = moonSealsOffersMarkup;

        if (moonSealsGridEl) {
            moonSealsGridEl.innerHTML = moonSealsCatalog.length > 0
                ? renderCards(moonSealsCatalog)
                : `<div class="shop-item crystal-package-card"><div class="shop-item-name">${unavailableLabel}</div></div>`;
        }
        if (starterBundleGridEl) {
            starterBundleGridEl.innerHTML = starterBundleMarkup;
        }
        return true;
    },

    
    async buyCrystalPackage(productId, amount) {
        if (!productId) return;

        if (typeof PurchasesManager === 'undefined' || !PurchasesManager.purchaseProduct) {
            this.showNotification(LocalizationManager.t('uiPurchasesSystemUnavailable', 'Система покупок временно недоступна'), '#e74c3c');
            return;
        }

        
        if (!(await this.initGpPaymentsDirect())) {
            this.showNotification(LocalizationManager.t('uiPaymentsHostUnavailable', 'Платежи недоступны на текущем хосте'), '#e67e22');
            return;
        }

        try {
            const success = await PurchasesManager.purchaseProduct(productId);

            if (success) {
                this.requestCloudSave('buy_crystal_package', true);
                this.updateMainMenu();
                this.updateCrystalStoreScreen();
                await this.syncCrystalStoreCatalogUI();
            }
        } catch (error) {
            console.error('❌ Ошибка покупки пакета кристаллов:', error);
        }
    },

    async buyCrystalsWithMoonSeals(offerId) {
        const offer = this.getMoonSealCrystalOffers().find((entry) => entry.id === offerId);
        if (!offer) {
            return;
        }

        if (!SaveManager.spendMoonSeals(offer.moonSealsCost)) {
            this.showNotification(LocalizationManager.t('moonSealsNotEnough', 'Недостаточно Лунных печатей'), '#e74c3c');
            return;
        }

        SaveManager.addCrystals(offer.crystals);
        this.requestCloudSave('buy_crystals_with_moonseals', true);
        this.updateMainMenu();
        this.updateCrystalStoreScreen();
        await this.syncCrystalStoreCatalogUI();
        this.showNotification(
            LocalizationManager.t('moonSealsCrystalOfferSuccess', 'Получено: {0} кристаллов', offer.crystals),
            'reward'
        );
    },

    async buyStarterMoonBundle(bundleId) {
        const offer = this.getStarterMoonBundleOffer();
        if (!bundleId || bundleId !== offer.id) {
            return;
        }

        if (this.isStarterMoonBundleOwned()) {
            return;
        }

        if (!SaveManager.spendMoonSeals(offer.moonSealsCost)) {
            this.showNotification(LocalizationManager.t('moonSealsNotEnough', 'Недостаточно Лунных печатей'), '#e74c3c');
            return;
        }

        SaveManager.unlockProfileCosmetic('frame', offer.frameId);
        SaveManager.unlockProfileCosmetic('background', offer.backgroundId);
        SaveManager.equipProfileCosmetic('frame', offer.frameId);
        SaveManager.equipProfileCosmetic('background', offer.backgroundId);

        this.requestCloudSave('buy_starter_moon_bundle', true);
        this.updateMainMenu();
        this.updateCrystalStoreScreen();
        this.updateShopUI();
        await this.syncCrystalStoreCatalogUI();
        this.refreshOpenPlayerProfileModal();
        this.showNotification(
            LocalizationManager.t('starterMoonBundleSuccess', 'Получено: премиальная рамка и фон'),
            'reward'
        );
    },

    
    updateItemsUI() {
        if (!window.Game || !Game.tower || !Game.tower.inventory) return;

        const items = Game.tower.inventory.items;
        const isFrenzyActive = window.Game && window.Game.frenzyTimer > 0;
        
        const thunderCount = document.getElementById('item-thunder-count');
        if (thunderCount) {
            thunderCount.textContent = items.thunderStrike.count;
            const slot = document.querySelector('.item-slot[data-item="thunderStrike"]');
            if (slot) slot.classList.toggle('disabled', items.thunderStrike.count === 0);
        }
        
        const frenzyCount = document.getElementById('item-frenzy-count');
        if (frenzyCount) {
            frenzyCount.textContent = items.frenzyPotion.count;
            const slot = document.querySelector('.item-slot[data-item="frenzyPotion"]');
            if (slot) {
                slot.classList.toggle('disabled', items.frenzyPotion.count === 0 || isFrenzyActive);
                
                slot.style.filter = isFrenzyActive ? 'grayscale(0.5) sepia(0.5) hue-rotate(-50deg)' : '';
            }
        }
    },

    updateCardsScreen() {
        const crystals = SaveManager.getCrystals();
        document.getElementById('cardsCrystals').textContent = crystals;

        const buyBtn = document.getElementById('buyCardBtn');
        if (crystals < 50) {
            buyBtn.classList.add('disabled');
        } else {
            buyBtn.classList.remove('disabled');
        }

        const cards = SaveManager.getCards();
        const altarCards = SaveManager.getAltarCards();

        if (typeof Game !== 'undefined' && Game && Game.cardEffects && typeof Game.cardEffects.loadActiveCards === 'function') {
            Game.cardEffects.loadActiveCards();
        }

        const isMobileLayout = document.documentElement.classList.contains('layout-mobile');
        if (isMobileLayout) {
            this.renderMobileCardsTextMode(cards, altarCards);
            this.updateForgeDisplay();
            this.updateMobileForgeSummary();
            return;
        }

        document.getElementById('altarCount').textContent = altarCards.length;
        const altarSlots = document.getElementById('altarSlots');
        altarSlots.innerHTML = '';

        for (let i = 0; i < 5; i++) {
            const slot = document.createElement('div');
            slot.className = 'altar-slot';
            slot.dataset.slot = i;

            if (altarCards[i]) {
                const card = altarCards[i];
                slot.classList.add('filled', card.rarity);
                slot.dataset.cardId = card.instanceId;
                const cardName = typeof getLocalizedCardName !== 'undefined' ? getLocalizedCardName(card) : card.name;
                const starsDisplay = getStarsDisplay(card.stars);
                
                slot.innerHTML = `
                    <div class="card-icon">${card.icon}</div>
                    <div class="card-name">${cardName}</div>
                    ${card.stars > 0 ? `<div class="card-stars">${starsDisplay}</div>` : ''}
                    <button class="altar-remove-btn" data-card-id="${card.instanceId}">✕</button>
                `;
                
                
                const removeBtn = slot.querySelector('.altar-remove-btn');
                removeBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.handleCardAction(card, 'removeAltar');
                });
            } else {
                slot.classList.add('empty');
                slot.innerHTML = `<div style="color: #95a5a6; font-size: 0.8em;">${LocalizationManager.t('altarSlotEmpty', 'Пусто')}</div>`;
            }

            altarSlots.appendChild(slot);
        }

        
        const bonusesContainer = document.getElementById('altarBonuses');
        bonusesContainer.innerHTML = '';
        
        const altarCards2 = SaveManager.getAltarCards();
        if (altarCards2.length === 0) {
            bonusesContainer.innerHTML = `<div style="color: #95a5a6; font-style: italic;">${LocalizationManager.t('altarNoActiveCards', 'Нет активных карт')}</div>`;
        } else {
            altarCards2.forEach(card => {
                const bonusTag = document.createElement('div');
                bonusTag.className = 'bonus-tag';
                
                const bonusText = getCardBonusWithStars(card);
                const cardName = getLocalizedCardName(card);
                
                bonusTag.innerHTML = `<strong>${card.icon} ${cardName}:</strong> ${bonusText}`;
                bonusesContainer.appendChild(bonusTag);
            });

            if (typeof CardEffects !== 'undefined' && typeof Game !== 'undefined' && Game.cardEffects) {
                const activeSynergies = Game.cardEffects.getActiveSynergies ? Game.cardEffects.getActiveSynergies() : [];
                const nextHints = Game.cardEffects.getNextSynergyHints ? Game.cardEffects.getNextSynergyHints() : [];

                activeSynergies.forEach((synergy) => {
                    const synergyTag = document.createElement('div');
                    synergyTag.className = 'bonus-tag';
                    synergyTag.innerHTML = `<strong>✨ ${LocalizationManager.t('altarSynergyTitle', 'Синергия')}:</strong> ${synergy.text}`;
                    bonusesContainer.appendChild(synergyTag);
                });

                nextHints.forEach((hint) => {
                    const hintTag = document.createElement('div');
                    hintTag.className = 'bonus-tag';
                    hintTag.style.opacity = '0.78';
                    hintTag.innerHTML = `<strong>→</strong> ${hint}`;
                    bonusesContainer.appendChild(hintTag);
                });
            }
        }

        const collection = document.getElementById('cardsCollection');

        if (cards.length === 0) {
            collection.innerHTML = `<div class="empty-collection">${LocalizationManager.t('emptyCollection', 'Нет карточек. Купите первую карточку!')}</div>`;
        } else {
            
            
            const cardsKey = cards.map(c => c.instanceId + '_' + (c.stars || 0)).join(',');
            if (collection.dataset.cardsKey === cardsKey) {
                
            } else {
                collection.dataset.cardsKey = cardsKey;
                const fragment = document.createDocumentFragment();

                const grouped = new Map();

                cards.forEach((card) => {
                    const key = `${card.id || card.name}_${card.stars || 0}_${card.rarity || 'common'}`;
                    if (!grouped.has(key)) {
                        grouped.set(key, { card, count: 0 });
                    }
                    grouped.get(key).count += 1;
                });

                Array.from(grouped.values()).forEach((group) => {
                    const card = group.card;
                    const starsDisplay = getStarsDisplay(card.stars);
                    const cardEl = document.createElement('div');
                    cardEl.className = 'card-item ' + card.rarity;
                    cardEl.dataset.cardId = card.instanceId;
                    const cardName2 = typeof getLocalizedCardName !== 'undefined' ? getLocalizedCardName(card) : card.name;

                    
                    cardEl.innerHTML = `
                        <div class="card-icon">${card.icon}</div>
                        <div class="card-name">${cardName2}</div>
                        ${card.stars > 0 ? `<div class="card-stars">${starsDisplay}</div>` : ''}
                        <div class="card-rarity">${LocalizationManager.t('rarity_' + card.rarity, card.rarity.toUpperCase())}</div>
                        ${group.count > 1 ? `<div class="card-stack-count">x${group.count}</div>` : ''}
                    `;

                    
                    cardEl.addEventListener('click', () => {
                        this.showCardDetail(card);
                    });

                    fragment.appendChild(cardEl);
                });

                collection.innerHTML = '';
                collection.appendChild(fragment);
            }
        }

        this.updateForgeDisplay();
    },

    renderMobileCardsTextMode(cards, altarCards) {
        const t = (key, fallback, ...args) => {
            if (typeof LocalizationManager !== 'undefined' && LocalizationManager.t) {
                return LocalizationManager.t(key, fallback, ...args);
            }
            return fallback;
        };

        const collection = document.getElementById('cardsCollection');
        const altarSlots = document.getElementById('altarSlots');
        const bonusesContainer = document.getElementById('altarBonuses');
        const altarCountEl = document.getElementById('altarCount');

        if (!collection || !altarSlots || !bonusesContainer) {
            return;
        }

        if (altarCountEl) {
            altarCountEl.textContent = altarCards.length;
        }

        
        if (!cards || cards.length === 0) {
            collection.innerHTML = `<div class="empty-collection">${t('emptyCollection', 'Нет карточек. Купите первую карточку!')}</div>`;
        } else {
            const grouped = new Map();

            cards.forEach((card) => {
                const localizedName = typeof getLocalizedCardName !== 'undefined' ? getLocalizedCardName(card) : card.name;
                const key = `${card.id || card.name || localizedName}_${card.stars || 0}`;
                if (!grouped.has(key)) {
                    grouped.set(key, {
                        card,
                        name: localizedName,
                        stars: card.stars || 0,
                        count: 0
                    });
                }
                grouped.get(key).count += 1;
            });

            const groups = Array.from(grouped.values()).sort((a, b) => a.name.localeCompare(b.name, 'ru'));

            collection.innerHTML = groups.map((group) => {
                const starsSuffix = group.stars > 0 ? ` ${getStarsDisplay(group.stars)}` : '';
                return `
                    <button type="button" class="mobile-card-line" data-card-id="${group.card.instanceId}">
                        <span class="mobile-card-line__name">${group.name}${starsSuffix}</span>
                        <span class="mobile-card-line__count">x${group.count}</span>
                    </button>
                `;
            }).join('');

            collection.querySelectorAll('.mobile-card-line').forEach((btn) => {
                btn.addEventListener('click', () => {
                    const cardId = btn.dataset.cardId;
                    const selected = SaveManager.getCardById(cardId);
                    if (selected) {
                        this.showCardDetail(selected);
                    }
                });
            });
        }

        
        if (!altarCards || altarCards.length === 0) {
            altarSlots.innerHTML = `<div class="mobile-info-empty">${t('noCardsInAltar', 'Алтарь пуст')}</div>`;
        } else {
            altarSlots.innerHTML = altarCards.map((card, index) => {
                const cardName = typeof getLocalizedCardName !== 'undefined' ? getLocalizedCardName(card) : card.name;
                const stars = card.stars > 0 ? ` ${getStarsDisplay(card.stars)}` : '';
                return `
                    <div class="mobile-altar-line">
                        <span class="mobile-altar-line__title">${t('altarSlot', 'Слот')} ${index + 1}: ${cardName}${stars}</span>
                        <button type="button" class="mobile-altar-line__remove" data-card-id="${card.instanceId}">✕</button>
                    </div>
                `;
            }).join('');

            altarSlots.querySelectorAll('.mobile-altar-line__remove').forEach((btn) => {
                btn.addEventListener('click', () => {
                    const card = SaveManager.getAltarCards().find((c) => c.instanceId === btn.dataset.cardId);
                    if (card) {
                        this.handleCardAction(card, 'removeAltar');
                    }
                });
            });
        }

        
        bonusesContainer.innerHTML = '';
        if (!altarCards || altarCards.length === 0) {
            bonusesContainer.innerHTML = `<div class="mobile-info-empty">${t('noActiveCards', 'Нет активных карт')}</div>`;
        } else {
            altarCards.forEach((card) => {
                const cardName = typeof getLocalizedCardName !== 'undefined' ? getLocalizedCardName(card) : card.name;
                const bonusText = getCardBonusWithStars(card);
                const row = document.createElement('div');
                row.className = 'mobile-bonus-line';
                row.textContent = `${cardName}: ${bonusText}`;
                bonusesContainer.appendChild(row);
            });

            if (typeof CardEffects !== 'undefined' && typeof Game !== 'undefined' && Game.cardEffects) {
                const activeSynergies = Game.cardEffects.getActiveSynergies ? Game.cardEffects.getActiveSynergies() : [];
                activeSynergies.forEach((synergy) => {
                    const row = document.createElement('div');
                    row.className = 'mobile-bonus-line';
                    row.textContent = `✨ ${synergy.text}`;
                    bonusesContainer.appendChild(row);
                });
            }
        }
    },

    updateMobileForgeSummary() {
        if (!document.documentElement.classList.contains('layout-mobile')) {
            return;
        }

        const forgeSection = document.querySelector('#cardsScreen .forge-section');
        if (!forgeSection) {
            return;
        }

        let summaryEl = document.getElementById('mobileForgeSummary');
        if (!summaryEl) {
            summaryEl = document.createElement('div');
            summaryEl.id = 'mobileForgeSummary';
            summaryEl.className = 'mobile-forge-summary';

            const chanceDisplay = document.getElementById('forgeChanceDisplay');
            if (chanceDisplay && chanceDisplay.parentNode) {
                chanceDisplay.parentNode.insertBefore(summaryEl, chanceDisplay);
            } else {
                forgeSection.appendChild(summaryEl);
            }
        }

        const t = (key, fallback, ...args) => {
            if (typeof LocalizationManager !== 'undefined' && LocalizationManager.t) {
                return LocalizationManager.t(key, fallback, ...args);
            }
            return fallback;
        };

        const resolveCard = (id) => {
            if (!id) return null;
            if (this.forgeCardsCache && this.forgeCardsCache[id]) {
                return this.forgeCardsCache[id];
            }
            return SaveManager.getCardById(id);
        };

        const targetCard = resolveCard(this.forgeState.target);
        const sacrificeCards = (this.forgeState.sacrifices || []).map(resolveCard).filter(Boolean);

        const targetText = targetCard
            ? `${typeof getLocalizedCardName !== 'undefined' ? getLocalizedCardName(targetCard) : targetCard.name}`
            : t('none', 'Нет');

        const sacrificesText = sacrificeCards.length > 0
            ? sacrificeCards.map((card, idx) => {
                const cardName = typeof getLocalizedCardName !== 'undefined' ? getLocalizedCardName(card) : card.name;
                return `${idx + 1}. ${cardName}`;
            }).join(' | ')
            : t('none', 'Нет');

        summaryEl.innerHTML = `
            <div class="mobile-forge-line"><b>${t('forgeTargetLabel', 'Карта для улучшения')}:</b> ${targetText}</div>
            <div class="mobile-forge-line"><b>${t('forgeSacrificeLabel', 'Жертвы (до 4)')}:</b> ${sacrificesText}</div>
            <div class="mobile-forge-tip">${t('mobileForgeTip', 'Добавляйте карты через список коллекции (тап по строке).')}</div>
        `;
    },

    


    handleCardAction(card, action) {
        const altarCards = SaveManager.getAltarCards();
        
        switch (action) {
            case 'altar':
                
                {
                    const result = SaveManager.moveCardToAltar(card.instanceId);
                    if (!result.success) {
                        this.showNotification(result.error || LocalizationManager.t('altarFull', 'Алтарь заполнен! (максимум 5 карт)'), 'error');
                        return;
                    }

                    this.cleanupCardFromForgeState(card.instanceId, { discardCache: true });
                    if (window.AuthManager && typeof AuthManager.beginCardsCloudSyncPending === 'function') {
                        AuthManager.beginCardsCloudSyncPending();
                    }
                    this.showNotification(`${card.icon} ${getLocalizedCardName(card)} ${LocalizationManager.t('addedToAltar', 'добавлена в алтарь')}!`, 'success');
                    this.requestCloudSave('card_added_to_altar', true);
                    this.refreshCardAchievements();
                    this.updateCardsDisplay();
                }
                break;
                
            case 'removeAltar':
                
                {
                    const result = SaveManager.moveCardFromAltar(card.instanceId);
                    if (result.success) {
                        this.cleanupCardFromForgeState(card.instanceId, { discardCache: true });
                        if (window.AuthManager && typeof AuthManager.beginCardsCloudSyncPending === 'function') {
                            AuthManager.beginCardsCloudSyncPending();
                        }
                        this.showNotification(`${card.icon} ${getLocalizedCardName(card)} ${LocalizationManager.t('removedFromAltar', 'убрана из алтаря')}`, 'info');
                        this.requestCloudSave('card_removed_from_altar', true);
                        this.refreshCardAchievements();
                        this.updateCardsDisplay();
                    } else {
                        this.showNotification(result.error || LocalizationManager.t('cardNotFound', 'Карта не найдена'), 'error');
                    }
                }
                break;
                
            case 'forgeTarget':
                
                this.setForgeTargetCard(card);
                
                this.showNotification(`${card.icon} ${LocalizationManager.t('setAsForgeTarget', 'установлена для улучшения')}`, 'info');
                break;
                
            case 'forgeSacrifice':
                
                this.addForgeSacrificeCard(card);
                
                this.showNotification(`${card.icon} ${LocalizationManager.t('addedToSacrifices', 'добавлена в жертвы')}`, 'info');
                break;
                
            case 'burn':
                this.showCardBurnConfirmation(card).then((confirmed) => {
                    if (!confirmed) return;
                    this.cleanupCardFromForgeState(card.instanceId, { discardCache: true });
                    if (window.AuthManager && typeof AuthManager.beginCardsCloudSyncPending === 'function') {
                        AuthManager.beginCardsCloudSyncPending();
                    }
                    SaveManager.removeCard(card.instanceId);
                    this.showNotification(`${card.icon} ${getLocalizedCardName(card)} ${LocalizationManager.t('cardBurned', 'сожжена')} 🔥`, 'info');
                    this.requestCloudSave('card_burned', true);
                    this.refreshCardAchievements();
                    this.updateCardsDisplay();
                });
                break;
        }
    },

    showCardBurnConfirmation(card) {
        return new Promise((resolve) => {
            const modal = document.getElementById('cardBurnConfirmModal');
            const text = document.getElementById('cardBurnConfirmText');
            const btnCancel = document.getElementById('btnCancelCardBurn');
            const btnConfirm = document.getElementById('btnConfirmCardBurn');
            if (!modal || !text || !btnCancel || !btnConfirm) {
                resolve(false);
                return;
            }

            text.textContent = `${LocalizationManager.t('confirmBurnCard', 'Вы уверены, что хотите сжечь карту')} ${card.icon} ${getLocalizedCardName(card)}?`;

            const handleCancel = () => {
                modal.classList.add('hidden');
                btnCancel.removeEventListener('click', handleCancel);
                btnConfirm.removeEventListener('click', handleConfirm);
                resolve(false);
            };

            const handleConfirm = () => {
                modal.classList.add('hidden');
                btnCancel.removeEventListener('click', handleCancel);
                btnConfirm.removeEventListener('click', handleConfirm);
                resolve(true);
            };

            btnCancel.addEventListener('click', handleCancel);
            btnConfirm.addEventListener('click', handleConfirm);

            modal.classList.remove('hidden');
            this.syncModalScale('cardBurnConfirmModal');
        });
    },

    cleanupCardFromForgeState(instanceId, options = {}) {
        const discardCache = Boolean(options.discardCache);
        if (!instanceId) return;

        if (this.forgeState && this.forgeState.target === instanceId) {
            this.forgeState.target = null;
        }

        if (this.forgeState && Array.isArray(this.forgeState.sacrifices)) {
            this.forgeState.sacrifices = this.forgeState.sacrifices.filter((id) => id !== instanceId);
        }

        if (discardCache && this.forgeCardsCache && this.forgeCardsCache[instanceId]) {
            delete this.forgeCardsCache[instanceId];
        }
    },

    showCardsSavingOverlay(visible) {
        const modal = document.getElementById('cardsSaveOverlay');
        if (!modal) return;
        modal.classList.toggle('hidden', !visible);
        if (visible) {
            this._cardsSaveOverlayShownAt = Date.now();
            this.syncModalScale('cardsSaveOverlay');
        }
    },

    showProgressSavingOverlay(visible) {
        const modal = document.getElementById('progressSaveOverlay');
        if (!modal) return;
        modal.classList.toggle('hidden', !visible);
        if (visible) {
            this._progressSaveOverlayShownAt = Date.now();
            this.syncModalScale('progressSaveOverlay');
        }
    },

    async showImmediateInterstitial(options = null) {
        if (!window.AdsManager || typeof AdsManager.showInterstitial !== 'function') {
            return false;
        }

        const request = Object.assign({ ignoreCooldown: true }, options || {});
        try {
            return await AdsManager.showInterstitial(request);
        } catch (error) {
            console.warn('⚠️ Не удалось показать interstitial без задержки:', error);
            return false;
        }
    },

    async runWithProgressSaveOverlay(task, minDurationMs = 350) {
        this.showProgressSavingOverlay(true);
        try {
            return await task();
        } finally {
            const shownFor = Date.now() - (this._progressSaveOverlayShownAt || 0);
            if (shownFor < minDurationMs) {
                await new Promise((resolve) => setTimeout(resolve, minDurationMs - shownFor));
            }
            this.showProgressSavingOverlay(false);
        }
    },

    getCurrentReleaseAnnouncementId() {
        return '1.9.3';
    },

    getCurrentCompensationId() {
        return 'save_sync_fix_500_v1';
    },

    hasSeenCurrentReleaseAnnouncement() {
        return SaveManager.get(SaveManager.KEYS.SEEN_RELEASE_ANNOUNCEMENT, null) === this.getCurrentReleaseAnnouncementId();
    },

    markReleaseAnnouncementSeen() {
        SaveManager.set(SaveManager.KEYS.SEEN_RELEASE_ANNOUNCEMENT, this.getCurrentReleaseAnnouncementId());
    },

    canShowReleaseAnnouncement() {
        if (this.hasSeenCurrentReleaseAnnouncement()) {
            return false;
        }
        if (this.currentScreen !== 'mainMenu') {
            return false;
        }
        if (window.__gpStartupPreloaderClosed !== true || window.__gpPreloaderDone !== true || window.__gpGameReadyReported !== true) {
            return false;
        }
        if (window.AdsManager && typeof AdsManager.isAnyAdPlaying === 'function' && AdsManager.isAnyAdPlaying()) {
            return false;
        }
        if (window.SchedulerManager && typeof SchedulerManager.canShowReleaseAnnouncement === 'function') {
            return SchedulerManager.canShowReleaseAnnouncement();
        }
        return true;
    },

    tryShowReleaseAnnouncement() {
        if (!this.canShowReleaseAnnouncement()) {
            return false;
        }
        const modal = document.getElementById('releaseAnnouncementModal');
        if (!modal || !modal.classList.contains('hidden')) {
            return false;
        }
        this._releaseAnnouncementShown = true;
        modal.classList.remove('hidden');
        this.syncModalScale('releaseAnnouncementModal');
        return true;
    },

    dismissReleaseAnnouncement() {
        const modal = document.getElementById('releaseAnnouncementModal');
        if (modal) {
            modal.classList.add('hidden');
        }
        this.markReleaseAnnouncementSeen();
        this._releaseAnnouncementShown = false;
        this.maybeShowMainMenuPrompts();
    },

    hasClaimedCurrentCompensation() {
        if (typeof SaveManager === 'undefined' || !SaveManager || typeof SaveManager.isCompensationClaimed !== 'function') {
            return false;
        }

        return SaveManager.isCompensationClaimed(this.getCurrentCompensationId());
    },

    canShowCompensationModal() {
        return false;
    },

    tryShowCompensationModal() {
        if (!this.canShowCompensationModal()) {
            return false;
        }

        const modal = document.getElementById('compensationModal');
        if (!modal || !modal.classList.contains('hidden')) {
            return false;
        }

        modal.classList.remove('hidden');
        this.syncModalScale('compensationModal');
        return true;
    },

    dismissCompensationModal() {
        const modal = document.getElementById('compensationModal');
        if (modal) {
            modal.classList.add('hidden');
        }

        this.maybeShowFeedbackPrompt();
    },

    async claimCompensationReward() {
        if (this._compensationClaimInProgress || this.hasClaimedCurrentCompensation()) {
            return false;
        }

        this._compensationClaimInProgress = true;
        try {
            SaveManager.addCrystals(500);
            SaveManager.markCompensationClaimed(this.getCurrentCompensationId());
            this.updateMainMenu();

            await this.runWithProgressSaveOverlay(async () => {
                if (typeof AuthManager !== 'undefined' && AuthManager && typeof AuthManager.forceSave === 'function') {
                    await AuthManager.forceSave(true);
                }
            }, 450);

            this.dismissCompensationModal();
            this.showNotification(LocalizationManager.t('compensationClaimedToast', '🎁 Компенсация получена: +500 💎'), 'reward');
            return true;
        } catch (error) {
            console.warn('⚠️ Не удалось выдать компенсацию:', error);
            this.showNotification(LocalizationManager.t('compensationClaimError', 'Не удалось выдать компенсацию. Попробуйте еще раз.'), 'warning');
            return false;
        } finally {
            this._compensationClaimInProgress = false;
        }
    },

    maybeShowMainMenuPrompts() {
        const releaseModal = document.getElementById('releaseAnnouncementModal');
        const compensationModal = document.getElementById('compensationModal');
        const feedbackPromptModal = document.getElementById('feedbackPromptModal');
        if ((releaseModal && !releaseModal.classList.contains('hidden'))
            || (compensationModal && !compensationModal.classList.contains('hidden'))
            || (feedbackPromptModal && !feedbackPromptModal.classList.contains('hidden'))) {
            return false;
        }

        if (this.tryShowReleaseAnnouncement()) {
            return true;
        }

        if (this.tryShowCompensationModal()) {
            return true;
        }

        return this.maybeShowFeedbackPrompt();
    },

    refreshCardAchievements() {
        if (typeof AchievementsManager !== 'undefined' && AchievementsManager && typeof AchievementsManager.checkProgress === 'function') {
            AchievementsManager.checkProgress();
            if (typeof AchievementsManager.flushPendingProgress === 'function') {
                AchievementsManager.flushPendingProgress();
            }
        }
    },

    async commitCardsChangesBeforeExit() {
        this.showCardsSavingOverlay(true);
        try {
            if (window.AuthManager && AuthManager.isAuthorized && typeof AuthManager.forceSave === 'function') {
                const saved = await AuthManager.forceSave(true);
                if (saved && typeof AuthManager.markCloudFresh === 'function') {
                    AuthManager.markCloudFresh();
                }
                return saved;
            }

            if (typeof SaveManager !== 'undefined' && SaveManager) {
                SaveManager.set(SaveManager.KEYS.CARDS, SaveManager.getCards());
                SaveManager.set(SaveManager.KEYS.ALTAR_CARDS, SaveManager.getAltarCards());
            }
            if (window.AuthManager && typeof AuthManager.markCloudFresh === 'function') {
                AuthManager.markCloudFresh();
                if (typeof AuthManager.endCardsCloudSyncPending === 'function') {
                    AuthManager.endCardsCloudSyncPending();
                }
            }
            return true;
        } finally {
            const shownFor = Date.now() - (this._cardsSaveOverlayShownAt || 0);
            if (shownFor < 350) {
                await new Promise((resolve) => setTimeout(resolve, 350 - shownFor));
            }
            this.showCardsSavingOverlay(false);
        }
    },

    


    createForgeCardElement(card) {
        const cardEl = document.createElement('div');
        cardEl.className = 'card-item ' + card.rarity;
        cardEl.dataset.cardId = card.instanceId;
        const cardName = typeof getLocalizedCardName !== 'undefined' ? getLocalizedCardName(card) : card.name;
        const starsDisplay = getStarsDisplay(card.stars);
        
        cardEl.innerHTML = `
            <div class="card-icon">${card.icon}</div>
            <div class="card-name">${cardName}</div>
            ${card.stars > 0 ? `<div class="card-stars">${starsDisplay}</div>` : ''}
            <div class="card-rarity">${LocalizationManager.t('rarity_' + card.rarity, card.rarity.toUpperCase())}</div>
        `;
        
        return cardEl;
    },

    


    setForgeTargetCard(card) {
        
        const altarCards = SaveManager.getAltarCards();
        const isInAltar = altarCards.some(c => c.instanceId === card.instanceId);
        
        if (isInAltar) {
            this.showNotification(LocalizationManager.t('cardInAltar', 'Карта находится в алтаре. Сначала уберите её из алтаря.'), 'error');
            return;
        }
        
        
        if (this.forgeState.target) {
            const oldCardId = this.forgeState.target;
            const oldCard = this.forgeCardsCache[oldCardId];
            if (oldCard) {
                SaveManager.addCard(oldCard);
                delete this.forgeCardsCache[oldCardId];
            }
        }
        
        
        if (!this.forgeCardsCache) this.forgeCardsCache = {};
        this.forgeCardsCache[card.instanceId] = card;
        SaveManager.removeCard(card.instanceId);
        
        
        this.forgeState.target = card.instanceId;
        this.updateForgeDisplay();
        this.updateCardsDisplay();
    },

    


    addForgeSacrificeCard(card) {
        
        if (this.forgeState.sacrifices.length >= 4) {
            this.showNotification(LocalizationManager.t('forgeSacrificesFull', 'Все слоты жертв заполнены! (максимум 4)'), 'error');
            return;
        }
        
        
        const altarCards = SaveManager.getAltarCards();
        const isInAltar = altarCards.some(c => c.instanceId === card.instanceId);
        
        if (isInAltar) {
            this.showNotification(LocalizationManager.t('cardInAltar', 'Карта находится в алтаре. Сначала уберите её из алтаря.'), 'error');
            return;
        }
        
        
        if (!this.forgeCardsCache) this.forgeCardsCache = {};
        this.forgeCardsCache[card.instanceId] = card;
        SaveManager.removeCard(card.instanceId);
        
        
        this.forgeState.sacrifices.push(card.instanceId);
        this.updateForgeDisplay();
        this.updateCardsDisplay();
    },

    


    updateCardsDisplay() {
        this.updateCardsScreen();
    },

    


    restoreCardsFromForgeCache() {
        if (!this.forgeCardsCache) return;

        const cachedCards = Object.values(this.forgeCardsCache);
        if (cachedCards.length > 0) {
            const collection = SaveManager.getCards();
            const existingIds = new Set(collection.map(card => card.instanceId));

            cachedCards.forEach(card => {
                if (!existingIds.has(card.instanceId)) {
                    SaveManager.addCard(card);
                }
            });
        }

        this.forgeState.target = null;
        this.forgeState.sacrifices = [];
        this.forgeCardsCache = {};
    },

    
    showPauseOverlay() {
        let pauseOverlay = document.getElementById('pauseOverlay');
        if (!pauseOverlay) {
            pauseOverlay = document.createElement('div');
            pauseOverlay.id = 'pauseOverlay';
            pauseOverlay.className = 'pause-overlay';
            pauseOverlay.innerHTML = `
                <div class="pause-content">
                    <h2 data-i18n="pauseTitle">ПАУЗА</h2>
                    <p data-i18n="pauseDesc">Нажмите Пробел или кнопку ниже, чтобы продолжить</p>
                    <button id="btnResume" class="btn btn-primary" data-i18n="resume">Продолжить</button>
                </div>
            `;
            document.querySelector('.game-container').appendChild(pauseOverlay);
            
            document.getElementById('btnResume').addEventListener('click', () => {
                
                if (window.AdsManager && AdsManager.isAnyAdPlaying && AdsManager.isAnyAdPlaying()) {
                    console.log('▶️ Возобновление заблокировано - воспроизводится реклама');
                    return;
                }
                
                Game.resume();
            });

            
            LocalizationManager.applyLanguage();
        }
        pauseOverlay.classList.remove('hidden');
    },

    
    showScreen(screenName) {
         if (screenName !== 'mainMenu') {
             this._feedbackPromptShownThisMenuVisit = false;
         }

         if (screenName !== 'mainMenu') {
             this.closeMobileMainMenuPanel();
         }

         
         if (this.currentScreen === 'cardsScreen' && screenName !== 'cardsScreen') {
             this.restoreCardsFromForgeCache();
         }

         
         Object.values(this.screens).forEach(screen => {
             if (screen) {
                 screen.classList.remove('active');
                 screen.style.display = 'none';
             }
         });

         
         const selectedScreen = this.screens[screenName];
         if (selectedScreen) {
               selectedScreen.classList.add('active');
              if (screenName === 'gameScreen' || selectedScreen.classList.contains('screen-scaled')) {
                  selectedScreen.style.display = 'block';
              } else {
                  selectedScreen.style.display = 'flex';
              }

               this.syncScreenScale(selectedScreen, '.screen-wrapper', '.screen-content');
           }

            this.currentScreen = screenName;

            if (screenName === 'mainMenu' && typeof LeaderboardManager !== 'undefined' && LeaderboardManager) {
                if (LeaderboardManager._pendingRefreshWhenVisible && typeof LeaderboardManager.loadLeaderboard === 'function') {
                    setTimeout(() => LeaderboardManager.loadLeaderboard(true), 120);
                }
            }

           if (window.AdsManager) {
               if (screenName === 'mainMenu' && typeof AdsManager.showStickyBanner === 'function') {
                   AdsManager.showStickyBanner();
               } else if (typeof AdsManager.closeStickyBanner === 'function') {
                   AdsManager.closeStickyBanner();
               }
           }
           
           
            if (typeof AudioManager !== 'undefined') {
               if (screenName === 'gameScreen') {
                  
                  AudioManager.resumeBackgroundMusic();
                } else if (screenName === 'mainMenu') {
                  
                  AudioManager.resumeBackgroundMusic();
                    
                    this.scheduleScaleSync(50);
                }
           }

            if (screenName === 'mainMenu') {
                this.updateBonusDayBadge();
                this.syncMobileMainMenuState();
                this.updateMainMenu();
                this.maybeShowMainMenuPrompts();
            } else if (screenName === 'talentScreen') {
                this.renderTalentTree();
            } else if (screenName === 'cardsScreen') {
                const collection = document.getElementById('cardsCollection');
                if (collection) {
                    delete collection.dataset.cardsKey;
                }
                this.updateCardsScreen();
                requestAnimationFrame(() => this.updateCardsScreen());
            } else if (screenName === 'changelogScreen') {
                this.populateChangelog();
            }

            const modifierHud = document.getElementById('runModifierHud');
            if (modifierHud && screenName !== 'gameScreen') {
                modifierHud.classList.add('hidden');
            }
        },

    requestCloudSave(reason = 'ui_action', immediate = false) {
        if (typeof AuthManager === 'undefined') {
            return;
        }

        if (typeof AuthManager.requestCloudSave === 'function') {
            AuthManager.requestCloudSave(reason, immediate);
            return;
        }

        if (!AuthManager.forceSave) {
            return;
        }

        const isCritical = reason.includes('purchase') || reason.includes('reward');
        AuthManager.forceSave(isCritical);
    },

    async requestCloudRefresh(reason = 'main_menu_refresh') {
        const now = Date.now();
        if (this._cloudRefreshInProgress || (now - this._lastCloudRefreshAt) < 4000) {
            return;
        }

        if (typeof AuthManager === 'undefined' || !AuthManager.loadCloudSave) {
            return;
        }

        if (!AuthManager.isAuthorized) {
            return;
        }

        if (reason === 'enter_main_menu') {
            return;
        }

        if (
            (typeof AuthManager.isCardsCloudSyncPending === 'function' && AuthManager.isCardsCloudSyncPending())
            || (typeof AuthManager.hasFreshLocalCardState === 'function' && AuthManager.hasFreshLocalCardState())
        ) {
            return;
        }

        this._cloudRefreshInProgress = true;
        try {
            await AuthManager.loadCloudSave();
            this.updateMainMenu();
        } catch (error) {
            console.warn(`⚠️ Cloud refresh failed (${reason}):`, error);
        } finally {
            this._cloudRefreshInProgress = false;
            this._lastCloudRefreshAt = Date.now();
        }
    },

    


    updateBonusDayBadge() {
        
        const badge = document.getElementById('bonusDayBadgeCenter');
        if (!badge) {
            console.log('⚠️ Баннер #bonusDayBadgeCenter не найден в DOM');
            return;
        }

        
        this._bonusBadgeRetryTimers.forEach((timerId) => clearTimeout(timerId));
        this._bonusBadgeRetryTimers = [];

        const applyState = () => {
            const isActive = this.hasGpEvent('Bonus_day');
            badge.classList.toggle('hidden', !isActive);
        };

        applyState();

        
        this._bonusBadgeRetryTimers.push(setTimeout(() => applyState(), 1000));
        this._bonusBadgeRetryTimers.push(setTimeout(() => applyState(), 3000));
        this._bonusBadgeRetryTimers.push(setTimeout(() => applyState(), 5000));

        
        const gp = this.getGp();
        if (!this._bonusBadgeEventsBound && gp && gp.events && typeof gp.events.on === 'function') {
            gp.events.on('join', () => applyState());
            gp.events.on('change', () => applyState());
            this._bonusBadgeEventsBound = true;
        }
    },

    


    scheduleMainMenuRefresh() {
        if (this._mainMenuRefreshRafId) {
            return;
        }

        this._mainMenuRefreshRafId = requestAnimationFrame(() => {
            this._mainMenuRefreshRafId = null;
            this.updateMainMenu();
        });
    },
       
    
     updateMainMenu() {
          const crystals = SaveManager.getCrystals() || 0;
          const moonSeals = SaveManager.getMoonSeals ? (SaveManager.getMoonSeals() || 0) : 0;
          const bestWave = SaveManager.getBestWave() || 0;
          document.getElementById('menuCrystals').textContent = crystals;
          const menuMoonSeals = document.getElementById('menuMoonSeals');
          if (menuMoonSeals) {
              menuMoonSeals.textContent = moonSeals;
          }
          document.getElementById('menuBestWave').textContent = bestWave;
          if (this.debugLogs || (typeof DebugLogger !== 'undefined' && DebugLogger.enabled)) {
              console.log('💎 Crystals:', crystals, '🌙 Moon Seals:', moonSeals, '🌊 Best Wave:', bestWave);
          }

        
        if (window.AuthManager) {
            AuthManager.updateAuthUI();
        }

        
        try {
            this.updateActiveBonusesDisplay();
            this.updateSeasonPanel();
        } catch (error) {
            console.warn('⚠️ Не удалось обновить блок активных бонусов:', error);
        }
     },

    
     updateActiveBonusesDisplay() {
        if (typeof PurchasesManager === 'undefined') return;

        const bonuses = PurchasesManager.checkActiveBonuses();
        const bonusesInfo = document.getElementById('activeBonusesInfo');
        const bonusesList = document.getElementById('activeBonusesList');

        if (!bonusesInfo || !bonusesList) {
            return;
        }

        
        if (bonuses.boosterActive) {
            bonusesInfo.classList.remove('hidden');
            bonusesList.innerHTML = '';

            if (bonuses.boosterActive) {
                const boosterItem = document.createElement('div');
                boosterItem.className = 'bonus-item';
                boosterItem.innerHTML = LocalizationManager.t('boosterActiveLabel', '⚡ Бустер активен (+50% дохода)');
                bonusesList.appendChild(boosterItem);
            }

         } else {
             bonusesInfo.classList.add('hidden');
         }
      },

    refreshLocalizedDynamicContent() {
        try {
            this.updateMainMenuLogo();
            this.refreshMenuChatUi();
            this.updateMainMenu();
            this.updateModifierHud();

            if (typeof window.questUI !== 'undefined' && window.questUI && typeof window.questUI.update === 'function') {
                window.questUI.update();
            }

            const seasonModal = document.getElementById('seasonModal');
            if (seasonModal && !seasonModal.classList.contains('hidden')) {
                this.updateSeasonPanel();
            }

            const cardDetailModal = document.getElementById('cardDetailModal');
            if (cardDetailModal && !cardDetailModal.classList.contains('hidden') && this.selectedCardForActions) {
                this.showCardDetail(this.selectedCardForActions);
            }

            if (this.currentScreen === 'shopScreen' && typeof this.updateShopUI === 'function') {
                this.updateShopUI();
            }

            this.refreshOpenPlayerProfileModal();

            if (this.currentScreen === 'cardsScreen' && typeof this.updateCardsDisplay === 'function') {
                this.updateCardsDisplay();
            }

            if (typeof this.populateChangelog === 'function') {
                this.populateChangelog();
            }

            if (this.currentScreen === 'gameScreen' && typeof this.updateModifierHud === 'function') {
                this.updateModifierHud();
            }
        } catch (error) {
            console.warn('⚠️ Не удалось обновить динамические UI-блоки после смены языка:', error);
        }
    },

    updateMainMenuLogo() {
        const logo = document.querySelector('#mainMenu .main-menu-logo');
        if (!logo) {
            return;
        }

        const currentLanguage = (typeof LocalizationManager !== 'undefined' && LocalizationManager)
            ? (typeof LocalizationManager.getCurrentLanguage === 'function'
                ? LocalizationManager.getCurrentLanguage()
                : LocalizationManager.currentLanguage)
            : 'en';
        const nextSrc = currentLanguage === 'ru'
            ? (logo.dataset.ruSrc || logo.dataset.defaultSrc || 'assets/images/Ru_name.png')
            : (logo.dataset.defaultSrc || 'assets/images/name.png');

        if (!logo.src || !logo.src.endsWith(nextSrc.replace(/\\/g, '/'))) {
            logo.src = nextSrc;
        }
    },

    updateSeasonPanel() {
        const panel = document.getElementById('seasonPanel');
        if (!panel || typeof SeasonSystem === 'undefined' || !SeasonSystem) {
            return;
        }

        const state = SeasonSystem.getState();
        const tierInfo = SeasonSystem.getTierProgress(state.points || 0);
        const tierLabel = document.getElementById('seasonTierLabel');
        const progressText = document.getElementById('seasonProgressText');
        const progressFill = document.getElementById('seasonProgressFill');
        const nextReward = document.getElementById('seasonNextReward');
        const claimBadge = document.getElementById('seasonClaimBadge');
        const xpShortLabel = document.getElementById('seasonXpShortLabel');
        const openBtn = document.getElementById('btnOpenSeasonModal');
        const claimableReward = SeasonSystem.getClaimableReward();
        const nextTierReward = SeasonSystem.getNextReward();

        if (tierLabel) {
            tierLabel.textContent = `${LocalizationManager.t('seasonTierLabel', 'Ранг')} ${tierInfo.tier}`;
        }
        if (xpShortLabel) {
            xpShortLabel.textContent = LocalizationManager.t('seasonXpShort', 'Опыт сезона');
        }
        const totalPoints = Math.max(0, Math.floor(Number(state.points) || 0));
        if (progressText) {
            progressText.textContent = `${tierInfo.current} / ${tierInfo.required} ${LocalizationManager.t('seasonXpUnit', 'Сезонный XP')} · ${LocalizationManager.t('seasonXpTotal', 'всего {0}', totalPoints)}`;
        }
        if (progressFill) {
            progressFill.style.width = `${Math.max(0, Math.min(100, (tierInfo.current / Math.max(1, tierInfo.required)) * 100))}%`;
        }
        if (nextReward) {
            if (claimableReward) {
                nextReward.textContent = LocalizationManager.t('seasonReadyReward', 'Можно забрать: {0}', this.formatSeasonRewardPreview(claimableReward));
            } else if (nextTierReward) {
                nextReward.textContent = LocalizationManager.t('seasonNextRewardInline', 'Далее: {0}', this.formatSeasonRewardPreview(nextTierReward));
            } else {
                nextReward.textContent = LocalizationManager.t('seasonAllRewardsClaimed', 'Все награды сезона уже доступны');
            }
        }

        if (claimBadge) {
            claimBadge.classList.toggle('hidden', !claimableReward);
        }
        if (openBtn) {
            openBtn.textContent = claimableReward
                ? LocalizationManager.t('seasonClaimRewardBtn', 'Забрать награду')
                : LocalizationManager.t('seasonOpenBtn', 'Сезон');
        }

        this.updateSeasonModal(state, tierInfo, claimableReward, nextTierReward);
    },

    updateSeasonModal(state, tierInfo, claimableReward, nextTierReward) {
        const modalTier = document.getElementById('seasonModalTierLabel');
        const modalProgress = document.getElementById('seasonModalProgressText');
        const modalFill = document.getElementById('seasonModalProgressFill');
        const availableReward = document.getElementById('seasonModalAvailableReward');
        const modalNextReward = document.getElementById('seasonModalNextReward');
        const missionList = document.getElementById('seasonMissionList');
        const claimBtn = document.getElementById('btnClaimSeasonReward');

        if (modalTier) {
            modalTier.textContent = `${LocalizationManager.t('seasonTierLabel', 'Ранг')} ${tierInfo.tier}`;
        }
        if (modalProgress) {
            modalProgress.textContent = `${tierInfo.current} / ${tierInfo.required} ${LocalizationManager.t('seasonXpUnit', 'Сезонный XP')}`;
        }
        if (modalFill) {
            modalFill.style.width = `${Math.max(0, Math.min(100, (tierInfo.current / Math.max(1, tierInfo.required)) * 100))}%`;
        }
        if (availableReward) {
            availableReward.textContent = claimableReward
                ? this.formatSeasonRewardPreview(claimableReward)
                : LocalizationManager.t('seasonNoRewardReady', 'Сейчас награда не готова');
        }
        if (modalNextReward) {
            modalNextReward.textContent = nextTierReward
                ? this.formatSeasonRewardPreview(nextTierReward)
                : LocalizationManager.t('seasonAllRewardsClaimed', 'Все награды сезона уже доступны');
        }
        if (claimBtn) {
            claimBtn.disabled = !claimableReward;
            claimBtn.textContent = claimableReward
                ? LocalizationManager.t('seasonClaimRewardWithItem', 'Забрать: {0}', this.formatSeasonRewardPreview(claimableReward))
                : LocalizationManager.t('seasonClaimRewardUnavailable', 'Награда не готова');
        }

        if (missionList) {
            missionList.innerHTML = '';
            (state.missions || []).forEach((mission) => {
                const row = document.createElement('div');
                row.className = `season-mission-line${mission.completed ? ' is-completed' : ''}`;
                const parts = this.getSeasonMissionLabel(mission);
                row.innerHTML = `
                    <span class="season-mission-line__text">${parts.text}</span>
                    <span class="season-mission-line__progress">${parts.progress}</span>
                `;
                missionList.appendChild(row);
            });
        }
    },

    showSeasonModal() {
        const modal = document.getElementById('seasonModal');
        if (!modal) return;
        this.updateSeasonPanel();
        modal.classList.remove('hidden');
        this.syncModalScale('seasonModal');
    },

    hideSeasonModal() {
        const modal = document.getElementById('seasonModal');
        if (modal) {
            modal.classList.add('hidden');
        }
    },

    showRunModifierIntro(modifiers) {
        const intro = document.getElementById('runModifierIntro');
        if (!intro || !Array.isArray(modifiers) || modifiers.length === 0) {
            return;
        }

        if (this._runModifierIntroTimer) {
            clearTimeout(this._runModifierIntroTimer);
            this._runModifierIntroTimer = null;
        }

        const summaryText = modifiers.length === 1
            ? modifiers[0].description
            : LocalizationManager.t('runModifierIntroSummary', 'Этот забег проходит по особым правилам. Учитывай их при выборе улучшений и рисков.');

        intro.innerHTML = `
            <div class="run-modifier-intro__eyebrow">${LocalizationManager.t('runModifierIntroEyebrow', 'Условия забега')}</div>
            <div class="run-modifier-intro__title">${LocalizationManager.t('runModifierIntroTitle', 'Темные влияния активны')}</div>
            <div class="run-modifier-intro__desc">${summaryText}</div>
            <div class="run-modifier-intro__list">
                ${modifiers.map((entry) => `
                    <div class="run-modifier-intro__chip">
                        <span>${this.getModifierIcon(entry)}</span>
                        <span>${entry.name}</span>
                    </div>
                `).join('')}
            </div>
        `;

        intro.classList.remove('hidden');
        requestAnimationFrame(() => intro.classList.add('is-visible'));

        this._runModifierIntroTimer = setTimeout(() => {
            intro.classList.remove('is-visible');
            setTimeout(() => {
                intro.classList.add('hidden');
                intro.innerHTML = '';
            }, 220);
        }, 2600);
    },

    getSeasonMissionLabel(mission) {
        if (!mission) {
            return '';
        }

        let label = '';
        if (mission.type === 'waves') {
            label = LocalizationManager.t('seasonMission_waves', 'Пройти волн', mission.progress || 0, mission.target || 0);
        } else if (mission.type === 'elite_choices') {
            label = LocalizationManager.t('seasonMission_elite', 'Сделать выбор в элитных событиях', mission.progress || 0, mission.target || 0);
        } else if (mission.type === 'stage_clear') {
            label = LocalizationManager.t('seasonMission_stage', 'Дойти до волны 15 в забеге', mission.progress || 0, mission.target || 0);
        }

        if (mission.completed) {
            return {
                text: `${label} ${LocalizationManager.t('seasonMissionDone', '— выполнено')}`,
                progress: LocalizationManager.t('seasonMissionReady', 'Готово')
            };
        }
        return {
            text: label,
            progress: `${mission.progress || 0}/${mission.target || 0}`
        };
    },

    claimSeasonReward() {
        if (typeof SeasonSystem === 'undefined' || !SeasonSystem) {
            return;
        }

        const result = SeasonSystem.claimNextReward();
        if (!result.success) {
            this.showNotification(LocalizationManager.t('seasonNothingToClaim', 'Пока нет наград для получения'), 'info');
            return;
        }

        const grantedText = (result.grantedRewards || []).map((entry) => this.formatGrantedSeasonReward(entry)).filter(Boolean).join(', ');
        const text = result.premiumGranted
            ? LocalizationManager.t('seasonRewardClaimedPremiumDetailed', 'Получено: {0}. Премиум-награда тоже выдана.', grantedText || LocalizationManager.t('seasonRewardClaimed', 'Награда сезона получена!'))
            : LocalizationManager.t('seasonRewardClaimedDetailed', 'Получено: {0}', grantedText || LocalizationManager.t('seasonRewardClaimed', 'Награда сезона получена!'));
        this.showNotification(text, 'success');
        this.updateMainMenu();
        this.updateCardsDisplay();
    },

    formatGrantedSeasonReward(entry) {
        if (!entry) return '';
        if (entry.type === 'crystals') {
            return LocalizationManager.t('seasonRewardPreviewCrystals', '{0} кристаллов', entry.amount || 0);
        }
        if (entry.type === 'freeCard') {
            if (entry.cards && entry.cards[0]) {
                return LocalizationManager.t('seasonGrantedCardNamed', 'карта: {0}', getLocalizedCardName(entry.cards[0]));
            }
            return LocalizationManager.t('seasonRewardPreviewCard', '{0} карта', entry.amount || 1);
        }
        if (entry.type === 'item') {
            const itemName = entry.itemId === 'thunderStrike'
                ? LocalizationManager.t('itemThunderStrike', 'Удар грома')
                : LocalizationManager.t('itemFrenzy', 'Берсерк');
            return `${itemName} x${entry.amount || 1}`;
        }
        return '';
    },

    formatSeasonRewardPreview(rewardEntry) {
        if (!rewardEntry || !rewardEntry.free) {
            return '—';
        }

        const reward = rewardEntry.free;
        if (reward.type === 'crystals') {
            return LocalizationManager.t('seasonRewardPreviewCrystals', '{0} кристаллов', reward.amount || 0);
        }
        if (reward.type === 'freeCard') {
            return LocalizationManager.t('seasonRewardPreviewCard', '{0} карта', reward.amount || 1);
        }
        if (reward.type === 'item') {
            const itemName = reward.itemId === 'thunderStrike'
                ? LocalizationManager.t('itemThunderStrike', 'Удар грома')
                : LocalizationManager.t('itemFrenzy', 'Берсерк');
            return `${itemName} x${reward.amount || 1}`;
        }
        if (reward.type === 'seeds') {
            return LocalizationManager.t('seasonRewardPreviewSeeds', '{0} семян', reward.amount || 0);
        }
        return '—';
    },

    getCardTagLabel(tag) {
        const map = {
            economy: 'cardTagEconomy',
            survival: 'cardTagSurvival',
            tempo: 'cardTagTempo',
            control: 'cardTagControl',
            risk: 'cardTagRisk',
            boss: 'cardTagBoss'
        };
        const fallbackMap = {
            economy: 'Экономика',
            survival: 'Выживание',
            tempo: 'Темп',
            control: 'Контроль',
            risk: 'Риск',
            boss: 'Охота на боссов'
        };
        const key = map[tag] || null;
        return key
            ? LocalizationManager.t(key, fallbackMap[tag] || tag)
            : LocalizationManager.t('cardTagUnknown', 'Прочее');
    },

    renderCardTagMarkup(cardType, limit = 2) {
        const tags = Array.isArray(cardType && cardType.tags) ? cardType.tags.slice(0, limit) : [];
        if (!tags.length) {
            return '';
        }
        return `
            <div class="card-item-tags">
                ${tags.map((tag) => `<span class="card-item-tag">${this.escapeHtml(this.getCardTagLabel(tag))}</span>`).join('')}
            </div>
        `;
    },

    renderCardDetailTags(cardType) {
        const container = document.getElementById('cardDetailTags');
        if (!container) {
            return;
        }

        const tags = Array.isArray(cardType && cardType.tags) ? cardType.tags : [];
        container.innerHTML = '';
        tags.forEach((tag) => {
            const chip = document.createElement('div');
            chip.className = 'card-detail-tag';
            chip.textContent = this.getCardTagLabel(tag);
            container.appendChild(chip);
        });
    },

    getModifierIcon(entry) {
        if (!entry || !entry.id) {
            return '✦';
        }
        if (entry.icon) return entry.icon;
        if (entry.source === 'pact' || entry.category === 'pact') return '✦';
        if (entry.source === 'stage') return '🧭';
        if (entry.id.includes('crystal')) return '💎';
        if (entry.id.includes('boss')) return '👑';
        if (entry.id.includes('soil') || entry.id.includes('grave')) return '🌿';
        if (entry.id.includes('rush') || entry.id.includes('swarm')) return '⚡';
        if (entry.id.includes('siege') || entry.id.includes('defense')) return '🛡️';
        return '✦';
    },

    getModifierMeta(entry) {
        if (!entry) {
            return '';
        }
        const sourceText = entry.source === 'stage'
            ? LocalizationManager.t('modifierMetaStage', 'Тема стадии')
            : entry.source === 'event'
                ? LocalizationManager.t('modifierMetaEvent', 'Выбор события')
                : entry.source === 'pact'
                    ? LocalizationManager.t('modifierMetaPact', 'Пакт')
                    : LocalizationManager.t('modifierMetaRun', 'Условие забега');
        const stacksText = entry.stacks > 1
            ? ` · ${LocalizationManager.t('modifierStackCount', 'x{0}', entry.stacks)}`
            : '';
        return `${sourceText}${stacksText}`;
    },

    toggleModifierHud() {
        this._modifierHudCollapsed = !this._modifierHudCollapsed;
        this.updateModifierHud();
    },

    selectModifierDetail(modifierId) {
        this._selectedModifierId = modifierId || null;
        this.updateModifierHud();
    },

    updateModifierHud() {
        const hud = document.getElementById('runModifierHud');
        if (!hud || typeof RunModifiers === 'undefined' || !RunModifiers || !Game || !Game.isRunning) {
            return;
        }

        const active = RunModifiers.getActiveModifiers();
        if (!active.length) {
            hud.classList.add('hidden');
            hud.innerHTML = '';
            return;
        }

        const selected = active.find((entry) => entry.id === this._selectedModifierId) || active[0];
        this._selectedModifierId = selected ? selected.id : null;
        const collapsed = Boolean(this._modifierHudCollapsed);

        hud.classList.remove('hidden');
        hud.classList.toggle('is-collapsed', collapsed);

        if (collapsed) {
            hud.innerHTML = `
                <button type="button" class="run-modifier-hud__collapsed-btn">
                    <span class="run-modifier-hud__title">${LocalizationManager.t('runModifierHudTitle', 'Модификаторы забега')}</span>
                    <span class="run-modifier-hud__collapsed-count">${LocalizationManager.t('runModifierHudHint', 'Активно: {0}', active.length)}</span>
                </button>
            `;
            const compactBtn = hud.querySelector('.run-modifier-hud__collapsed-btn');
            if (compactBtn) {
                compactBtn.addEventListener('click', () => {
                    this.toggleModifierHud();
                });
            }
            return;
        }

        hud.innerHTML = `
            <div class="run-modifier-hud__header">
                <div class="run-modifier-hud__title">${LocalizationManager.t('runModifierHudTitle', 'Условия забега')}</div>
                <div class="run-modifier-hud__actions">
                    <div class="run-modifier-hud__hint">${LocalizationManager.t('runModifierHudHint', 'Активно: {0}', active.length)}</div>
                    <button type="button" class="run-modifier-hud__toggle">${collapsed ? LocalizationManager.t('modifierHudExpand', 'Развернуть') : LocalizationManager.t('modifierHudCollapse', 'Свернуть')}</button>
                </div>
            </div>
            <div class="run-modifier-hud__list">
                ${active.map((entry) => `
                    <button type="button" class="run-modifier-chip${selected && selected.id === entry.id ? ' is-active' : ''}" data-modifier-id="${entry.id}" title="${entry.description.replace(/"/g, '&quot;')}">
                        <span class="run-modifier-chip__icon">${this.getModifierIcon(entry)}</span>
                        <span class="run-modifier-chip__body">
                            <span class="run-modifier-chip__name">${entry.name}</span>
                            <span class="run-modifier-chip__meta">${this.getModifierMeta(entry)}</span>
                        </span>
                    </button>
                `).join('')}
            </div>
            <div class="run-modifier-hud__detail${collapsed ? ' hidden' : ''}">
                <div class="run-modifier-hud__detail-name">${selected ? selected.name : ''}</div>
                <div class="run-modifier-hud__detail-text">${selected ? selected.description : ''}</div>
            </div>
        `;

        const toggleBtn = hud.querySelector('.run-modifier-hud__toggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => {
                this.toggleModifierHud();
            });
        }
        hud.querySelectorAll('.run-modifier-chip[data-modifier-id]').forEach((btn) => {
            btn.addEventListener('click', () => {
                this.selectModifierDetail(btn.dataset.modifierId);
                if (this._modifierHudCollapsed) {
                    this._modifierHudCollapsed = false;
                    this.updateModifierHud();
                }
            });
        });
    },

    getEliteChoiceKind(choice) {
        const kind = choice && choice.kind ? choice.kind : 'safe';
        if (kind === 'pact') {
            return {
                className: 'is-risk',
                label: LocalizationManager.t('eliteChoiceKindPact', 'Пакт')
            };
        }
        if (kind === 'risk') {
            return {
                className: 'is-risk',
                label: LocalizationManager.t('eliteChoiceKindRisk', 'Риск')
            };
        }
        if (kind === 'economy') {
            return {
                className: 'is-economy',
                label: LocalizationManager.t('eliteChoiceKindEconomy', 'Экономика')
            };
        }
        return {
            className: 'is-safe',
            label: LocalizationManager.t('eliteChoiceKindSafe', 'Безопасно')
        };
    },

    showEliteEventModal(payload) {
        const modal = document.getElementById('eliteEventModal');
        const title = document.getElementById('eliteEventTitle');
        const description = document.getElementById('eliteEventDescription');
        const choices = document.getElementById('eliteEventChoices');
        if (!modal || !payload || !payload.event || !choices) {
            return;
        }

        title.textContent = LocalizationManager.t(payload.event.titleKey, 'Событие');
        description.textContent = LocalizationManager.t(payload.event.descKey, 'Выбери, как пережить следующий отрезок забега.');
        choices.innerHTML = '';

        (payload.event.choices || []).forEach((choice) => {
            const kind = this.getEliteChoiceKind(choice);
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'elite-choice-btn';
            btn.innerHTML = `
                <div class="elite-choice-btn__top">
                    <div class="elite-choice-btn__kind ${kind.className}">${kind.label}</div>
                    <div class="elite-choice-btn__name">${LocalizationManager.t(choice.labelKey, choice.id)}</div>
                    <div class="elite-choice-btn__desc">${LocalizationManager.t(choice.descKey, '')}</div>
                </div>
                <div class="elite-choice-btn__footer">${LocalizationManager.t('eliteChoiceFooter', 'Эффект сохранится до конца забега')}</div>
            `;
            btn.addEventListener('click', () => {
                if (typeof Game !== 'undefined' && Game && typeof Game.resolveEliteEventChoice === 'function') {
                    Game.resolveEliteEventChoice(choice.id);
                }
                modal.classList.add('hidden');
                this.updateModifierHud();
            });
            choices.appendChild(btn);
        });

        modal.classList.remove('hidden');
        this.syncModalScale('eliteEventModal');
    },

    showTraderChoiceModal(payload) {
        const modal = document.getElementById('traderChoiceModal');
        const choices = document.getElementById('traderChoiceOptions');
        const title = document.getElementById('traderChoiceTitle');
        const description = document.getElementById('traderChoiceDescription');
        const rewardedSection = document.getElementById('traderRewardedSection');
        const rewardedTitle = document.getElementById('traderRewardedTitle');
        const rewardedDescription = document.getElementById('traderRewardedDescription');
        const rewardedButton = document.getElementById('btnTraderRewardedOffer');
        if (!modal || !choices || !payload || !Array.isArray(payload.offers)) {
            return;
        }

        title.textContent = LocalizationManager.t('traderChoiceTitle', 'Бродячий торговец');
        description.textContent = LocalizationManager.t('traderChoiceSummary', 'Торговец предлагает несколько сделок. Выбери только одну.');
        choices.innerHTML = '';

        payload.offers.forEach((offer) => {
            const tone = this.getTraderChoiceTone(offer);
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'elite-choice-btn trader-choice-btn';
            button.innerHTML = `
                <div class="elite-choice-btn__top">
                    <div class="elite-choice-btn__kind ${tone.className}">${tone.label}</div>
                    <div class="trader-choice-btn__icon">${offer.displayIcon || '🎁'}</div>
                    <div class="elite-choice-btn__name">${this.escapeHtml(offer.displayName || offer.type || 'Offer')}</div>
                    <div class="elite-choice-btn__desc">${this.escapeHtml(offer.displayDescription || '')}</div>
                </div>
                <div class="elite-choice-btn__footer">${LocalizationManager.t('traderChoiceFooter', 'Сделка применяется сразу и торговец уходит')}</div>
            `;
            button.addEventListener('click', () => {
                if (typeof Game !== 'undefined' && Game && typeof Game.resolveTraderChoice === 'function') {
                    Game.resolveTraderChoice(offer.index);
                }
                this.hideTraderChoiceModal(false);
            });
            choices.appendChild(button);
        });

        if (rewardedSection && rewardedTitle && rewardedDescription && rewardedButton) {
            const rewardedOffer = payload.rewardedOffer || null;
            const rewardedAvailable = typeof AdsManager !== 'undefined' && AdsManager && typeof AdsManager.showRewardedAd === 'function';

            if (rewardedOffer) {
                rewardedSection.classList.remove('hidden');
                rewardedTitle.textContent = `${rewardedOffer.displayIcon || '📺'} ${rewardedOffer.displayName || LocalizationManager.t('traderRewardedTitle', 'Эксклюзивная сделка')}`;
                rewardedDescription.textContent = rewardedOffer.displayDescription || LocalizationManager.t('traderRewardedDesc', 'Сильное предложение за просмотр рекламы');
                rewardedButton.disabled = !rewardedAvailable;
                rewardedButton.textContent = rewardedAvailable
                    ? LocalizationManager.t('traderRewardedButton', '📺 Смотреть и получить')
                    : LocalizationManager.t('traderRewardedUnavailable', 'Реклама недоступна');
                rewardedButton.onclick = async () => {
                    if (rewardedButton.disabled) {
                        return;
                    }

                    rewardedButton.disabled = true;
                    const rewarded = await AdsManager.showRewardedAd({
                        onErrorMessage: LocalizationManager.t('traderRewardedAdError', 'Не удалось загрузить рекламу для сделки торговца')
                    });

                    if (!rewarded) {
                        this.showNotification(LocalizationManager.t('uiRewardNotGrantedRetry', 'Награда не засчитана. Попробуйте еще раз.'), '#e67e22');
                        rewardedButton.disabled = false;
                        return;
                    }

                    if (typeof Game !== 'undefined' && Game && typeof Game.resolveTraderRewardedChoice === 'function') {
                        Game.resolveTraderRewardedChoice();
                    }
                    this.hideTraderChoiceModal(false);
                };
            } else {
                rewardedSection.classList.add('hidden');
                rewardedButton.onclick = null;
            }
        }

        modal.classList.remove('hidden');
        this.syncModalScale('traderChoiceModal');
    },

    hideTraderChoiceModal(shouldResumeGame = true) {
        const modal = document.getElementById('traderChoiceModal');
        if (modal) {
            modal.classList.add('hidden');
        }

        if (shouldResumeGame && typeof Game !== 'undefined' && Game) {
            if (typeof Game.endModalPause === 'function') {
                Game.endModalPause('trader_choice');
            }
        }
    },

    getTraderChoiceTone(offer) {
        const riskyTypes = new Set(['damage_boost', 'cursed_contract']);
        const economyTypes = new Set(['gold', 'crystals']);
        if (offer && (offer.type === 'pact' || offer.addModifierSource === 'pact')) {
            return {
                className: 'is-risk',
                label: LocalizationManager.t('traderTonePact', 'Пакт')
            };
        }
        if (offer && riskyTypes.has(offer.type)) {
            return {
                className: 'is-risk',
                label: LocalizationManager.t('traderToneRisk', 'Риск / сила')
            };
        }
        if (offer && economyTypes.has(offer.type)) {
            return {
                className: 'is-economy',
                label: LocalizationManager.t('traderToneEconomy', 'Экономика')
            };
        }
        return {
            className: 'is-safe',
            label: LocalizationManager.t('traderToneSafe', 'Поддержка')
        };
    },

    showSeasonXpGain(amount, sourceKey = null) {
        const safeAmount = Math.max(0, Math.floor(Number(amount) || 0));
        if (safeAmount <= 0) {
            return;
        }

        const sourceText = sourceKey ? LocalizationManager.t(sourceKey, '') : '';
        const text = sourceText
            ? LocalizationManager.t('seasonXpGainWithSource', '+{0} сезонного XP · {1}', safeAmount, sourceText)
            : LocalizationManager.t('seasonXpGain', '+{0} сезонного XP', safeAmount);
        if (typeof Game !== 'undefined' && Game && Game.isRunning && Game.tower && typeof Game.createFloatingText === 'function') {
            Game.createFloatingText(Game.tower.x, Game.tower.y - 92, text, '#8ad7ff');
            return;
        }
        this.showNotification(text, 'reward');
    },

    
    getChangelogEntries() {
        const t = (key, fallback) => typeof LocalizationManager !== 'undefined'
            ? LocalizationManager.t(key, fallback)
            : fallback;

        return [
            {
                version: 'v1.9.3',
                date: '2026-05-05',
                badge: '🚀 UPDATE',
                changes: [
                    t('ch_v193_1', '👹 Добавлены новые поздние враги: циклопы, огры и демоны с уникальными угрозами для башни'),
                    t('ch_v193_2', '🩸 Новые эффекты врагов: раны снижают регенерацию, раскол ослабляет защиту, метка усиливает входящий урон'),
                    t('ch_v193_3', '🏹 Добавлены новые уникальные улучшения башни: приоритет опасных целей и бонусный урон по элите/боссам'),
                    t('ch_v193_4', '🌊 Переработана плотность особых врагов на поздних волнах, чтобы забеги после середины игры были напряженнее'),
                    t('ch_v193_5', '🌙 Добавлена новая донатная валюта: Лунные печати, наборы печатей и обмен печатей на кристаллы'),
                    t('ch_v193_6', '🎁 Добавлен стартовый лунный набор с премиальной рамкой и фоном профиля')
                ]
            },
            {
                version: 'v1.9.2',
                date: '2026-04-07',
                badge: '✨ UPDATE',
                changes: [
                    t('ch_v192_1', '🪪 Добавлен профиль игрока с публичной карточкой, статистикой и предпросмотром оформления'),
                    t('ch_v192_2', '🏆 В таблице лидеров появились кликабельные профили, рамки и фоновые карточки игроков'),
                    t('ch_v192_3', '🛒 Магазин переработан в витрину косметики: фоны и рамки покупаются за кристаллы'),
                    t('ch_v192_4', '🃏 Исправлены карточки и звёздные бонусы: описания и реальные эффекты больше не расходятся'),
                    t('ch_v192_5', '💬 Исправлен ввод в чат: игровые hotkeys больше не мешают печатать'),
                    t('ch_v192_6', '🛡️ Уменьшен риск резких всплесков урона по башне на высоких волнах и улучшена диагностика боевых burst-ситуаций')
                ]
            },
            {
                version: 'v1.9.1',
                date: '2026-04-02',
                badge: '🛠️ PATCH',
                changes: [
                    t('ch_v191_1', '🐛 Исправлен баг, из-за которого враг в редких случаях мог становиться неуязвимым'),
                    t('ch_v191_2', '❤️ Исправлена просадка текущего HP башни при прокачке максимального здоровья'),
                    t('ch_v191_3', '🛡️ Добавлены защитные проверки для боевого урона и состояний снарядов'),
                    t('ch_v191_4', '💬 Добавлен быстрый доступ к общему чату из меню и прямо во время боя'),
                    t('ch_v191_5', '🔴 Для чата добавлен индикатор новых сообщений в текущей сессии')
                ]
            },
            {
                version: 'v1.9.0',
                date: '2026-03-25',
                badge: '🚀 MAJOR',
                changes: [
                    t('ch_v190_1', '🌘 Существенно расширен пул элитных событий и развилок забега'),
                    t('ch_v190_2', '👑 Босс-волны получили уникальные поведения для каждой стадии'),
                    t('ch_v190_3', '🃏 Добавлены новые карты и более глубокие синергии алтаря'),
                    t('ch_v190_4', '🤝 Торговец теперь предлагает осмысленные сделки с выбором награды'),
                    t('ch_v190_5', '⚖️ Пройден баланс-пасс по темпу, риску и наградам новых билдов'),
                    t('ch_v190_6', '🎨 Улучшены подсказки, читаемость боевых событий и общий feedback забега')
                ]
            },
            {
                version: 'v1.8.0',
                date: '2026-03-16',
                badge: '🚀 MAJOR',
                changes: [
                    t('ch_v180_1', '🌒 Добавлены модификаторы забега, элитные события и тематические стадии'),
                    t('ch_v180_2', '🃏 Полностью переработаны карточки, алтарь, кузница и достижения коллекции'),
                    t('ch_v180_3', '📈 Добавлена сезонная прогрессия с задачами, наградами и сезонным окном'),
                    t('ch_v180_4', '⚖️ Проведен крупный баланс-проход по карточкам, модификаторам и апгрейдам'),
                    t('ch_v180_5', '☁️ Облачные профили переработаны: карточки, сезон, таланты и улучшения корректно разделяются между аккаунтами'),
                    t('ch_v180_6', '🎨 Выполнен крупный UI/UX полиш меню, экрана карточек, сезона и HUD-модификаторов')
                ]
            },
            {
                version: 'v1.7.0',
                date: '2026-02-23',
                badge: '🆕 NEW',
                changes: [
                    t('ch_v170_1', 'Добавлено полноценное Древо талантов (разблокировка с 50 волны)'),
                    t('ch_v170_2', 'Добавлен выбор стадии перед стартом (этап 1 из 5)'),
                    t('ch_v170_3', 'Глобальный ребаланс экономики, волн и прогрессии'),
                    t('ch_v170_4', 'Переработаны ключевые апгрейды: контроль толпы, газовые стрелы, разделение стрел'),
                    t('ch_v170_5', 'Cloud Save переведен на action-based синхронизацию'),
                    t('ch_v170_6', 'Крупный UI-полиш: новое меню талантов, единый стиль скроллов, плотный layout'),
                    t('ch_v170_7', 'Расширено debug-меню и улучшен полный сброс прогресса до состояния нового аккаунта'),
                    t('ch_v170_8', 'Расширена локализация RU/EN для талантов, HUD-статусов и новых экранов')
                ]
            },
            {
                version: 'v1.6.1',
                date: '2026-02-19',
                badge: '🐛 FIX',
                changes: [
                    t('ch_v161_1', 'Панель ежедневных квестов с наградами'),
                    t('ch_v161_2', 'Панель "Мои улучшения" для отслеживания полученных бонусов'),
                    t('ch_v161_3', 'Исправлен баг Вампирской ярости (башня не умирала)'),
                    t('ch_v161_4', 'Исправлен баг Золотой лихорадки (NaN в золоте)'),
                    t('ch_v161_5', 'Разлетающиеся стрелы: урон уменьшен на 50% (было слишком сильно)'),
                    t('ch_v161_6', 'Семена от торговца теперь добавляются в инвентарь'),
                    t('ch_v161_7', 'Улучшения за уровень теперь сбрасываются после каждой игры')
                ]
            },
            {
                version: 'v1.6.0',
                date: '2026-02-18',
                badge: '🎉 MAJOR',
                changes: [
                    t('ch_v160_1', '⭐ Система опыта (XP) и уровней! Получай XP за убийства'),
                    t('ch_v160_2', '🎴 17 уникальных улучшений с 3 уровнями каждое'),
                    t('ch_v160_3', '🍄 Кликабельные грибы: +10 золота каждые 20-30 сек'),
                    t('ch_v160_4', '🐦 Летающие птицы для атмосферы (программная анимация)'),
                    t('ch_v160_5', '🛣️ Улучшенная каменная дорога с текстурой'),
                    t('ch_v160_6', '🌳 Переработанные деревья: 2 типа, правильные слои'),
                    t('ch_v160_7', '🐛 Исправлен баг с полоской HP'),
                    t('ch_v160_8', '💾 Система версионирования сохранений')
                ]
            },
            {
                version: 'v1.5.3',
                date: '2026-02-17',
                badge: '⚡ UPD',
                changes: [
                    t('ch_v153_1', '⚡ Переработана скорость атаки: 1.0 выстрел/сек +0.10 за улучшение'),
                    t('ch_v153_2', '⏩ Добавлена кнопка скорости игры (x1.00 → x4.50)'),
                    t('ch_v153_3', '🎮 Скорость игры влияет на все системы: врагов, атаку, анимации'),
                    t('ch_v153_4', '🐛 Исправлен сброс постоянных улучшений в debug-меню')
                ]
            },
            {
                version: 'v1.5.2',
                date: '2026-02-16',
                badge: '✨ NEW',
                changes: [
                    t('ch_v152_1', '🔨 Система Кузницы - улучшение карт со звёздами'),
                    t('ch_v152_2', '⭐ Звёздная система для карт (макс 5 звёзд)'),
                    t('ch_v152_3', '🏰 Новый фэнтезийный дизайн главного меню'),
                    t('ch_v152_4', '📋 Панель обновлений справа')
                ]
            },
            {
                version: 'v1.5.1',
                date: '2026-02-15',
                badge: '🐛 FIX',
                changes: [
                    t('ch_v151_1', 'Исправлено моргание экрана'),
                    t('ch_v151_2', 'Оптимизирован UI')
                ]
            },
            {
                version: 'v1.5.0',
                date: '2026-02-14',
                badge: '✨ NEW',
                changes: [
                    t('ch_v150_1', '⚡ Оптимизации производительности (+25-30% FPS)'),
                    t('ch_v150_2', '🎯 FPS мониторинг (F3/F4)'),
                    t('ch_v150_3', '💾 Object pooling и canvas кэширование')
                ]
            },
            {
                version: 'v1.4.0',
                date: '2026-02-13',
                badge: '✨ NEW',
                changes: [
                    t('ch_v140_1', 'Новое фоновое изображение в главном меню'),
                    t('ch_v140_2', 'Fantasy деревья с parallax эффектом на игровом поле'),
                    t('ch_v140_3', 'Враги появляются из-за деревьев (эффект глубины)'),
                    t('ch_v140_4', 'Магазин для покупки стрел и семян перед игрой'),
                    t('ch_v140_5', 'Улучшенная графика и визуальные эффекты'),
                    t('ch_v140_6', 'Исправлен урон босса (увеличен до 100)')
                ]
            }
        ];
    },

     
     updateUpgradeScreen() {
         
         const crystalCount = document.getElementById('menuCrystalCountUpgrade');
         if (crystalCount) {
             crystalCount.textContent = SaveManager.getCrystals();
         }
         
         
         if (typeof permanentUpgradeManager !== 'undefined') {
             console.log('>>> Calling permanentUpgradeManager.initUI() from UI.showScreen');
             permanentUpgradeManager.initUI();
             permanentUpgradeManager.updateUI();
             console.log('>>> Finished permanentUpgradeManager calls');
         } else {
             console.warn('>>> permanentUpgradeManager is undefined!');
         }
         
         
         const upgrades = SaveManager.getUpgrades();
         document.querySelectorAll('#upgradeScreen .upgrade-item').forEach(item => {
             const type = item.dataset.upgrade;
             if (type === 'garden-2' || type === 'garden-3') {
                 const upgrade = upgrades[type];
                 const cost = SaveManager.getUpgradeCost(type);
                 const btn = item.querySelector('.btn-upgrade');
                 
                 if (upgrade && upgrade.level > 0) {
                     item.querySelector('.level').textContent = LocalizationManager.t('uiUpgradePurchasedStatus', '✅ Куплено');
                     if (btn) {
                         btn.disabled = true;
                         btn.style.opacity = '0.5';
                     }
                 } else {
                     item.querySelector('.level').textContent = LocalizationManager.t('uiUpgradeNotPurchasedStatus', '❌ Не куплено');
                     if (btn) {
                         const canAfford = SaveManager.getCrystals() >= cost;
                         btn.disabled = !canAfford;
                         btn.style.opacity = canAfford ? '1' : '0.5';
                         btn.querySelector('.cost').textContent = cost;
                     }
                 }
             }
         });
     },

    
      updateGameUI(gameState) {
          
          const healthEl = document.getElementById('health');
          if (healthEl) {
              const currentHealth = Math.max(0, Math.floor(gameState.health || 0));
              const maxHealth = Math.max(1, Math.floor(gameState.maxHealth || currentHealth || 1));
              healthEl.textContent = `${currentHealth}/${maxHealth}`;
          }
          
          const goldEl = document.getElementById('gold');
           if (goldEl) goldEl.textContent = Math.floor(gameState.gold);
           
           
           const dayEl = document.getElementById('dayDisplay');
           if (dayEl && gameState.wave) dayEl.textContent = gameState.wave;
           
           
           this.updateGoldTooltip(gameState);
        
        
        const seedsCountEl = document.getElementById('seeds-count');
        if (seedsCountEl && Game && Game.gardenSystem) {
            seedsCountEl.textContent = Game.gardenSystem.getSeedCount();
        }

        
        if (typeof inGameUpgrades !== 'undefined') {
            inGameUpgrades.updateUI();
        }
    },

    
    updateGoldTooltip(gameState) {
        const tooltipIncome = document.getElementById('tooltipIncome');
        const tooltipCrystals = document.getElementById('tooltipCrystals');
        
        if (tooltipIncome && gameState.passiveIncome !== undefined) {
            const incomeText = typeof LocalizationManager !== 'undefined' ?
                LocalizationManager.t('goldTooltipIncome', 'Прирост: +{0}/сек').replace('{0}', gameState.passiveIncome) :
                `Прирост: +${gameState.passiveIncome}/сек`;
            tooltipIncome.textContent = incomeText;
        }
        
        if (tooltipCrystals && gameState.crystals !== undefined) {
            const crystalsText = typeof LocalizationManager !== 'undefined' ?
                LocalizationManager.t('goldTooltipCrystals', 'Кристаллы: 💎 {0}').replace('{0}', Math.floor(gameState.crystals)) :
                `Кристаллы: 💎 ${Math.floor(gameState.crystals)}`;
            tooltipCrystals.textContent = crystalsText;
        }
    },

    
    updateSeedsCount() {
        const seedsCountEl = document.getElementById('seeds-count');
        if (seedsCountEl && Game && Game.gardenSystem) {
            const count = Game.gardenSystem.getSeedCount();
            if (parseInt(seedsCountEl.textContent) !== count) {
                this.triggerPop(seedsCountEl.parentElement);
            }
            seedsCountEl.textContent = count;
        }
    },

    
    updateHealth(health, maxHealth) {
        const el = document.getElementById('health');
        if (!el) return;
        const parent = el.parentElement;
        const currentValue = Math.max(0, Math.floor(health || 0));
        const maxValue = Math.max(1, Math.floor(maxHealth || currentValue || 1));
        if (parseInt(el.textContent, 10) !== currentValue) {
            this.triggerPop(parent);
        }
        el.textContent = `${currentValue}/${maxValue}`;
    },

     
     updateGold(gold) {
         const el = document.getElementById('gold');
         const parent = el.parentElement;
         if (parseInt(el.textContent) !== Math.floor(gold)) {
             this.triggerPop(parent);
         }
         el.textContent = Math.floor(gold);
     },

     
     updateCrystals(crystals) {
         const el = document.getElementById('crystals');
         if (!el) return; 
         const parent = el.parentElement;
         if (parseInt(el.textContent) !== Math.floor(crystals)) {
             this.triggerPop(parent);
         }
         el.textContent = Math.floor(crystals);
     },

     
    updateWave(wave) {
        
        const dayDisplay = document.getElementById('dayDisplay');
        if (dayDisplay) {
            const parent = dayDisplay.parentElement;
            if (parseInt(dayDisplay.textContent) !== wave) {
                this.triggerPop(parent);
            }
            dayDisplay.textContent = wave;
        }
        
        
        if (typeof daySystem !== 'undefined') {
            const stats = daySystem.getStats();
            const weeklyTimer = document.getElementById('weeklyBonusTimer');
            if (weeklyTimer) {
                const bonusInLabel = typeof LocalizationManager !== 'undefined' ?
                    LocalizationManager.t('bonusIn', 'Бонус через') : 'Бонус через';
                weeklyTimer.textContent = `${bonusInLabel}: ${stats.nextBonusIn}`;
            }
        }
    },

    
    updateSessionCrystals(crystals) {
        const el = document.getElementById('sessionCrystals');
        const parent = el.parentElement;
        if (parseInt(el.textContent) !== crystals) {
            this.triggerPop(parent);
        }
        el.textContent = crystals;
    },

    
    triggerPop(element) {
        if (!element) return;
        element.classList.remove('pop');
        void element.offsetWidth; 
        element.classList.add('pop');
        setTimeout(() => element.classList.remove('pop'), 200);
    },

    
    updateArrowSelection(type) {
        document.querySelectorAll('.arrow-slot').forEach(slot => {
            slot.classList.remove('active');
            if (slot.dataset.type === type) {
                slot.classList.add('active');
            }
        });
    },

    
    showGameOver(stats) {
        document.getElementById('finalWave').textContent = stats.wave;
        document.getElementById('finalKills').textContent = stats.kills;
        document.getElementById('finalGold').textContent = stats.totalGold;
        document.getElementById('earnedCrystals').textContent = stats.crystals;
        document.getElementById('finalTime').textContent = this.formatTime(stats.time);
        const finalEliteChoices = document.getElementById('finalEliteChoices');
        const finalTraderDeals = document.getElementById('finalTraderDeals');
        const finalModifierCount = document.getElementById('finalModifierCount');
        if (finalEliteChoices) finalEliteChoices.textContent = Math.max(0, Math.floor(Number(stats.eliteChoices) || 0));
        if (finalTraderDeals) finalTraderDeals.textContent = Math.max(0, Math.floor(Number(stats.traderDeals) || 0));
        if (finalModifierCount) finalModifierCount.textContent = Math.max(0, Math.floor(Number(stats.modifierCount) || 0));

        const stageProgressRow = document.getElementById('stageProgressRow');
        const stageProgressLabel = document.getElementById('stageProgressLabel');
        const stageProgressValue = document.getElementById('stageProgressValue');
        const seasonProgressRow = document.getElementById('seasonProgressRow');
        const seasonProgressValue = document.getElementById('seasonProgressValue');
        const stageProgress = stats && stats.stageProgress ? stats.stageProgress : null;
        const stageCount = (typeof SaveManager !== 'undefined' && typeof SaveManager.getStageCount === 'function')
            ? SaveManager.getStageCount()
            : 5;

        if (
            stageProgressRow &&
            stageProgressLabel &&
            stageProgressValue &&
            stageProgress &&
            Number.isFinite(stageProgress.stage) &&
            Number.isFinite(stageProgress.unlockedStage) &&
            Number.isFinite(stageProgress.unlockWaveTarget)
        ) {
            const nextStage = stageProgress.stage + 1;
            const canUnlockNextStage = (
                stageProgress.stage < stageCount &&
                stageProgress.unlockedStage < nextStage
            );

            if (canUnlockNextStage) {
                const progressValue = Math.max(
                    0,
                    Math.min(stageProgress.unlockWaveTarget, Math.floor(stageProgress.stageBestWave || 0))
                );

                const progressLabel = (typeof LocalizationManager !== 'undefined')
                    ? LocalizationManager.t('statStageUnlockProgress', '🧭 До S{0}:', nextStage)
                    : `🧭 До S${nextStage}:`;

                stageProgressLabel.textContent = progressLabel;
                stageProgressValue.textContent = `${progressValue}/${stageProgress.unlockWaveTarget}`;
                stageProgressRow.classList.remove('hidden');
            } else {
                stageProgressRow.classList.add('hidden');
            }
        } else if (stageProgressRow) {
            stageProgressRow.classList.add('hidden');
        }

        const seasonPointsEarned = Math.max(0, Math.floor(Number(stats && stats.seasonPointsEarned) || 0));
        if (seasonProgressRow && seasonProgressValue) {
            seasonProgressRow.classList.toggle('hidden', seasonPointsEarned <= 0);
            if (seasonPointsEarned > 0) {
                seasonProgressValue.textContent = `+${seasonPointsEarned}`;
            }
        }
        
        
        const personalBestRow = document.getElementById('personalBestRow');
        if (stats.isNewRecord) {
            personalBestRow.classList.remove('hidden');
        } else {
            personalBestRow.classList.add('hidden');
        }

        const btnRevive = document.getElementById('btnRevive');
        if (btnRevive) {
            btnRevive.disabled = false;
            btnRevive.classList.toggle('hidden', !stats.reviveAvailable);
        }

        const btnMainMenu = document.getElementById('btnMainMenu');
        if (btnMainMenu) {
            btnMainMenu.disabled = false;
        }
        
        document.getElementById('gameOverModal').classList.remove('hidden');
        
    },

    showReviveOffer() {
        const modal = document.getElementById('reviveOfferModal');
        if (!modal) {
            return;
        }

        const btnYes = document.getElementById('btnReviveOfferYes');
        const btnNo = document.getElementById('btnReviveOfferNo');
        if (btnYes) btnYes.disabled = false;
        if (btnNo) btnNo.disabled = false;

        modal.classList.remove('hidden');
        this.syncModalScale('reviveOfferModal');
    },

    
    formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    },

    
    updateArrowCount(type, count) {
        const countEl = document.getElementById(`${type}-count`);
        if (countEl) {
            countEl.textContent = count === Infinity ? '∞' : count;
        }
        
        
        const slot = document.querySelector(`.arrow-slot[data-type="${type}"]`);
        if (slot) {
            if (count > 0 || count === Infinity) {
                slot.classList.remove('empty');
            } else {
                slot.classList.add('empty');
            }
        }
    },

    
    buyShopItem(itemId, cost) {
        if (SaveManager.getCrystals() < cost) {
            this.playErrorSound();
            return;
        }
        
        if (!SaveManager.spendCrystals(cost)) {
            this.playErrorSound();
            return;
        }
        
        
        if (itemId.startsWith('seeds_')) {
            const parts = itemId.split('_');
            const amount = parseInt(parts[1]);
            
            SaveManager.addSeedsForNextGame(amount);
            const seedsText = typeof LocalizationManager !== 'undefined' ? 
                LocalizationManager.t('seedsAdded', '+{0} семян!').replace('{0}', amount) : '+' + amount + ' семян!';
            this.showNotification(seedsText, '#2ecc71');
        }
        
        this.playUpgradeSound();
        this.requestCloudSave('shop_purchase_legacy');
        this.updateShopScreen();
        this.updateMainMenu();
    },

    showStageSelectModal() {
        const modal = document.getElementById('stageSelectModal');
        if (!modal) return;

        this._pendingStageSelection = (typeof SaveManager !== 'undefined' && SaveManager.getSelectedStage)
            ? SaveManager.getSelectedStage()
            : 1;

        this.renderStageSelectOptions();
        modal.classList.remove('hidden');
        this.syncModalScale('stageSelectModal');
    },

    hideStageSelectModal() {
        const modal = document.getElementById('stageSelectModal');
        if (!modal) return;
        modal.classList.add('hidden');
    },

    renderStageSelectOptions() {
        const grid = document.getElementById('stageSelectGrid');
        if (!grid) return;

        const t = (key, fallback, ...args) => {
            if (typeof LocalizationManager === 'undefined') return fallback;
            return LocalizationManager.t(key, fallback, ...args);
        };

        const stageData = (typeof SaveManager !== 'undefined' && SaveManager.getStageData)
            ? SaveManager.getStageData()
            : {
                selectedStage: 1,
                unlockedStage: 1
            };

        const maxStage = (typeof SaveManager !== 'undefined' && typeof SaveManager.getStageCount === 'function')
            ? SaveManager.getStageCount()
            : 5;
        const unlockWaveTarget = (typeof SaveManager !== 'undefined' && typeof SaveManager.getStageUnlockWaveTarget === 'function')
            ? SaveManager.getStageUnlockWaveTarget()
            : 50;
        const unlockedStage = Math.max(1, Math.min(maxStage, Math.floor(stageData.unlockedStage || 1)));

        const rawPending = Number(this._pendingStageSelection || stageData.selectedStage || 1);
        const normalizedPending = Number.isFinite(rawPending)
            ? Math.max(1, Math.min(maxStage, Math.floor(rawPending)))
            : 1;
        const selectedStage = Math.max(1, Math.min(normalizedPending, unlockedStage));
        this._pendingStageSelection = selectedStage;

        const defaultTierByStage = {
            1: 'Ранняя',
            2: 'Ранняя+',
            3: 'Средняя',
            4: 'Средняя+',
            5: 'Поздняя'
        };

        const html = [];
        for (let stage = 1; stage <= maxStage; stage++) {
            const locked = stage > unlockedStage;
            const isActive = !locked && stage === selectedStage;

            let stateText = isActive
                ? t('stageSelected', 'Выбрано')
                : t('stageAvailable', 'Доступно');

            if (locked) {
                const prevStage = Math.max(1, stage - 1);
                const prevBestWave = (typeof SaveManager !== 'undefined' && typeof SaveManager.getStageBestWave === 'function')
                    ? SaveManager.getStageBestWave(prevStage)
                    : 0;
                stateText = `🔒 ${t('stageUnlockProgressShort', 'С{0}: {1}/{2}', prevStage, prevBestWave, unlockWaveTarget)}`;
            }

            const stageOffset = (typeof Game !== 'undefined' && Game && typeof Game.getStageWaveOffset === 'function')
                ? Game.getStageWaveOffset(stage)
                : (stage - 1) * 50;
            const equivalentWaveStart = Math.max(1, stageOffset + 1);
            const tierText = t(`stageTier${stage}`, defaultTierByStage[stage] || 'Stage');
            const descriptor = (typeof StageThemes !== 'undefined' && StageThemes)
                ? StageThemes.getStageDescriptor(stage)
                : null;
            const stageMetaText = descriptor
                ? `${descriptor.subtitle} · ${t('stageEquivalentWave', 'Экв. волна {0}+', equivalentWaveStart)}`
                : `${tierText} · ${t('stageEquivalentWave', 'Экв. волна {0}+', equivalentWaveStart)}`;
            const stateDetail = descriptor
                ? `${descriptor.dominantThreat} · ${descriptor.rewardFocus}`
                : stateText;

            html.push(`
                <button
                    type="button"
                    class="stage-option ${locked ? 'is-locked' : ''} ${isActive ? 'is-active' : ''}"
                    data-stage="${stage}"
                    ${locked ? 'disabled' : ''}
                >
                    <span class="stage-option__name">${t('stageLabel', 'Стадия {0}', stage)}</span>
                    <span class="stage-option__meta">${stageMetaText}</span>
                    <span class="stage-option__state">${stateText}</span>
                    <span class="stage-option__state">${stateDetail}</span>
                </button>
            `);
        }

        grid.innerHTML = html.join('');

        grid.querySelectorAll('.stage-option').forEach((btn) => {
            btn.addEventListener('click', () => {
                const stage = Number(btn.dataset.stage || 1);
                if (!Number.isFinite(stage)) return;
                this._pendingStageSelection = stage;
                this.renderStageSelectOptions();
                const activeBtn = grid.querySelector(`.stage-option[data-stage="${stage}"]`);
                if (activeBtn) {
                    activeBtn.classList.add('is-picked');
                }
            });
        });

        const btnConfirmStageSelect = document.getElementById('btnConfirmStageSelect');
        if (btnConfirmStageSelect) {
            btnConfirmStageSelect.disabled = selectedStage > unlockedStage;
        }
    },

    updateOptionsScreen() {
        const settings = (typeof SaveManager !== 'undefined' && typeof SaveManager.getSettings === 'function')
            ? SaveManager.getSettings()
            : { disableScreenShake: false, disableHeavyEffects: false };

        const optDisableShake = document.getElementById('optDisableShake');
        if (optDisableShake) {
            optDisableShake.checked = Boolean(settings.disableScreenShake);
        }

        const optDisableHeavyEffects = document.getElementById('optDisableHeavyEffects');
        if (optDisableHeavyEffects) {
            optDisableHeavyEffects.checked = Boolean(settings.disableHeavyEffects);
        }
    },

    openFeedbackModal() {
        const modal = document.getElementById('feedbackModal');
        if (!modal) {
            return;
        }

        const typeSelect = document.getElementById('feedbackTypeSelect');
        if (typeSelect && !typeSelect.value) {
            typeSelect.value = 'SUGGESTION';
        }

        modal.classList.remove('hidden');
        this.syncModalScale('feedbackModal');

        const messageInput = document.getElementById('feedbackMessageInput');
        if (messageInput) {
            setTimeout(() => messageInput.focus(), 40);
        }
    },

    shouldShowFeedbackPrompt() {
        if (this._feedbackPromptShownThisMenuVisit) {
            return false;
        }

        if (typeof SaveManager === 'undefined' || !SaveManager || typeof SaveManager.getFeedbackPromptState !== 'function') {
            return false;
        }

        const gp = this.getGp();
        const hasFeedbackSend = gp && gp.feedbacks && typeof gp.feedbacks.send === 'function' && gp.isAllowedOrigin !== false;
        if (!hasFeedbackSend) {
            return false;
        }

        const state = SaveManager.getFeedbackPromptState();
        if (state.disabled || state.submitted) {
            return false;
        }

        const totalGames = typeof SaveManager.getTotalGames === 'function' ? SaveManager.getTotalGames() : 0;
        if (totalGames < 3) {
            return false;
        }

        if (state.shownCount >= 3) {
            return false;
        }

        const lastShownGameCount = Number(state.lastShownGameCount || 0);
        if (lastShownGameCount > 0 && (totalGames - lastShownGameCount) < 5) {
            return false;
        }

        return true;
    },

    maybeShowFeedbackPrompt() {
        if (!this.shouldShowFeedbackPrompt()) {
            return false;
        }

        const modal = document.getElementById('feedbackPromptModal');
        if (!modal) {
            return false;
        }

        const totalGames = typeof SaveManager !== 'undefined' && SaveManager && typeof SaveManager.getTotalGames === 'function'
            ? SaveManager.getTotalGames()
            : 0;
        const state = SaveManager.getFeedbackPromptState();
        SaveManager.patchFeedbackPromptState({
            shownCount: Math.max(0, Number(state.shownCount || 0)) + 1,
            lastShownGameCount: totalGames
        });

        this._feedbackPromptShownThisMenuVisit = true;
        modal.classList.remove('hidden');
        this.syncModalScale('feedbackPromptModal');
        return true;
    },

    closeFeedbackPromptModal() {
        const modal = document.getElementById('feedbackPromptModal');
        if (modal) {
            modal.classList.add('hidden');
        }
    },

    dismissFeedbackPrompt(disablePermanently = false) {
        this.closeFeedbackPromptModal();
        if (typeof SaveManager !== 'undefined' && SaveManager && typeof SaveManager.patchFeedbackPromptState === 'function' && disablePermanently) {
            SaveManager.patchFeedbackPromptState({ disabled: true });
        }
    },

    closeFeedbackModal(resetForm = false) {
        const modal = document.getElementById('feedbackModal');
        if (modal) {
            modal.classList.add('hidden');
        }

        if (!resetForm) {
            return;
        }

        const typeSelect = document.getElementById('feedbackTypeSelect');
        const messageInput = document.getElementById('feedbackMessageInput');
        if (typeSelect) {
            typeSelect.value = 'SUGGESTION';
        }
        if (messageInput) {
            messageInput.value = '';
        }
    },

    async sendFeedbackFromModal() {
        const typeSelect = document.getElementById('feedbackTypeSelect');
        const messageInput = document.getElementById('feedbackMessageInput');
        const sendBtn = document.getElementById('btnFeedbackSend');

        if (!typeSelect || !messageInput) {
            return false;
        }

        const text = String(messageInput.value || '').trim();
        if (text.length < 5) {
            const validationText = (typeof LocalizationManager !== 'undefined')
                ? LocalizationManager.t('feedbackValidation', 'Опишите проблему подробнее (минимум 5 символов)')
                : 'Опишите проблему подробнее (минимум 5 символов)';
            this.showNotification(validationText, 'warning');
            messageInput.focus();
            return false;
        }

        const gp = this.getGp();
        const hasFeedbackSend = gp && gp.feedbacks && typeof gp.feedbacks.send === 'function';
        if (!hasFeedbackSend || gp.isAllowedOrigin === false) {
            const unavailableText = (typeof LocalizationManager !== 'undefined')
                ? LocalizationManager.t('feedbackUnavailable', 'Сервис обратной связи недоступен на этой платформе')
                : 'Сервис обратной связи недоступен на этой платформе';
            this.showNotification(unavailableText, 'warning');
            return false;
        }

        if (sendBtn) {
            sendBtn.disabled = true;
        }

        try {
            await gp.feedbacks.send({
                type: String(typeSelect.value || 'SUGGESTION').toUpperCase(),
                text
            });

            const successText = (typeof LocalizationManager !== 'undefined')
                ? LocalizationManager.t('feedbackSentSuccess', 'Обращение отправлено')
                : 'Обращение отправлено';
            this.showNotification(successText, 'success');
            if (typeof SaveManager !== 'undefined' && SaveManager && typeof SaveManager.patchFeedbackPromptState === 'function') {
                SaveManager.patchFeedbackPromptState({ submitted: true, disabled: true });
            }
            this.closeFeedbackPromptModal();
            this.closeFeedbackModal(true);
            return true;
        } catch (error) {
            console.warn('⚠️ Не удалось отправить обращение:', error);
            const errorText = (typeof LocalizationManager !== 'undefined')
                ? LocalizationManager.t('feedbackSendError', 'Не удалось отправить обращение. Попробуйте позже')
                : 'Не удалось отправить обращение. Попробуйте позже';
            this.showNotification(errorText, 'error');
            return false;
        } finally {
            if (sendBtn) {
                sendBtn.disabled = false;
            }
        }
    },

    async openFeedbackHistoryModal() {
        const modal = document.getElementById('feedbackHistoryModal');
        if (!modal) {
            return false;
        }

        this.closeFeedbackThreadModal();
        this.bindFeedbackEventsOnce();
        modal.classList.remove('hidden');
        this.syncModalScale('feedbackHistoryModal');
        await this.loadFeedbackHistory({ reset: true });
        return true;
    },

    closeFeedbackHistoryModal() {
        const modal = document.getElementById('feedbackHistoryModal');
        if (modal) {
            modal.classList.add('hidden');
        }
    },

    bindFeedbackEventsOnce() {
        if (this._feedbackEventsBound) {
            return;
        }

        const gp = this.getGp();
        if (!gp) {
            return;
        }

        const handleEvent = (payload) => {
            this.handleFeedbackRealtimeEvent(payload);
        };

        let bound = false;
        try {
            if (gp.feedbacks && typeof gp.feedbacks.on === 'function') {
                gp.feedbacks.on('event:feedbackMessage', handleEvent);
                gp.feedbacks.on('event:feedbackCreated', handleEvent);
                gp.feedbacks.on('event:feedbackStatusUpdated', handleEvent);
                gp.feedbacks.on('event:feedbackPlatformStatusUpdated', handleEvent);
                bound = true;
            }
        } catch (_) {
            bound = false;
        }

        if (!bound) {
            try {
                if (typeof gp.on === 'function') {
                    gp.on('event:feedbackMessage', handleEvent);
                    gp.on('event:feedbackCreated', handleEvent);
                    gp.on('event:feedbackStatusUpdated', handleEvent);
                    gp.on('event:feedbackPlatformStatusUpdated', handleEvent);
                    bound = true;
                }
            } catch (_) {
                bound = false;
            }
        }

        this._feedbackEventsBound = bound;
    },

    handleFeedbackRealtimeEvent(payload) {
        if (!payload || typeof payload !== 'object') {
            return;
        }

        const normalized = this.normalizeFeedbackItem(payload);
        const feedbackId = normalized && normalized.id
            ? String(normalized.id)
            : String(payload.feedbackId || payload.id || payload.feedback_id || '');

        if (!feedbackId) {
            return;
        }

        const existing = this._feedbackItemsById[feedbackId] || { id: feedbackId, messages: [] };
        const merged = {
            ...existing,
            ...normalized,
            id: feedbackId,
            messages: Array.isArray(existing.messages) ? existing.messages.slice() : [],
            unreadCount: Number(existing.unreadCount || 0)
        };

        const messageText = payload.text || payload.message || payload.content || '';
        let shouldPulseUnread = false;
        if (messageText) {
            const source = String(payload.source || payload.author || payload.sender || 'event').toLowerCase();
            const mine = source.includes('player') || source.includes('user') || source.includes('client') || source.includes('me');
            merged.messages.push({
                text: String(messageText),
                createdAt: payload.createdAt || payload.created_at || Date.now(),
                source: payload.source || payload.author || 'event'
            });
            merged.lastMessage = String(messageText);

            if (!mine && String(this._activeFeedbackThreadId || '') !== feedbackId) {
                merged.unreadCount = Number(merged.unreadCount || 0) + 1;
                shouldPulseUnread = true;
            }
        }

        if (payload.status) {
            merged.status = String(payload.status).toUpperCase();
        }

        if (String(this._activeFeedbackThreadId || '') === feedbackId) {
            merged.unreadCount = 0;
        }

        this._feedbackItemsById[feedbackId] = merged;
        this.syncFeedbackHistoryCacheItem(merged, true);
        this.updateFeedbackHistoryRow(merged, true, shouldPulseUnread);

        if (this._activeFeedbackThreadId && String(this._activeFeedbackThreadId) === feedbackId) {
            this.renderFeedbackThread(merged);
        }
    },

    getFeedbackStatusLabel(status) {
        const key = `feedbackStatus_${String(status || 'NEW').toUpperCase()}`;
        const fallback = String(status || 'NEW').split('_').join(' ');
        return (typeof LocalizationManager !== 'undefined')
            ? LocalizationManager.t(key, fallback)
            : fallback;
    },

    getFeedbackTypeLabel(type) {
        const key = `feedbackType_${String(type || 'SUGGESTION').toUpperCase()}`;
        const fallback = String(type || 'SUGGESTION').split('_').join(' ');
        return (typeof LocalizationManager !== 'undefined')
            ? LocalizationManager.t(key, fallback)
            : fallback;
    },

    escapeHtml(value) {
        const text = String(value || '');
        return text
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    },

    syncFeedbackHistoryCacheItem(item, prependIfNew = false) {
        if (!item || !item.id) {
            return;
        }

        const id = String(item.id);
        const index = this._feedbackHistoryItems.findIndex((entry) => String(entry.id || '') === id);
        if (index >= 0) {
            this._feedbackHistoryItems[index] = item;
        } else if (prependIfNew) {
            this._feedbackHistoryItems.unshift(item);
        } else {
            this._feedbackHistoryItems.push(item);
        }
    },

    createFeedbackHistoryRow(item) {
        const itemId = String(item.id || '');
        const row = document.createElement('article');
        row.className = 'feedback-history-item';
        if (itemId) {
            row.setAttribute('data-feedback-id', itemId);
            row.setAttribute('role', 'button');
            row.setAttribute('tabindex', '0');
        } else {
            row.classList.add('is-disabled');
        }

        const safeType = this.escapeHtml(this.getFeedbackTypeLabel(item.type));
        const safeStatus = this.escapeHtml(this.getFeedbackStatusLabel(item.status));
        const safeText = String(item.text || '').trim();
        const safePreview = this.escapeHtml(safeText.length > 180 ? `${safeText.slice(0, 180)}...` : safeText);

        const date = item.createdAt ? new Date(item.createdAt) : null;
        const dateText = date && Number.isFinite(date.getTime())
            ? date.toLocaleString()
            : '-';
        const safeId = this.escapeHtml(item.id || '-');
        const safeDate = this.escapeHtml(dateText);

        const unreadCount = Math.max(0, Number(item.unreadCount || 0));
        const unreadBadge = unreadCount > 0
            ? `<span class="feedback-unread-badge">${unreadCount}</span>`
            : '';

        row.innerHTML = `
            <div class="feedback-history-top">
                <span class="feedback-type-badge">${safeType}</span>
                <div class="feedback-history-top-right">
                    ${unreadBadge}
                    <span class="feedback-status-badge status-${String(item.status || 'NEW').toLowerCase()}">${safeStatus}</span>
                </div>
            </div>
            <div class="feedback-history-text">${safePreview || '-'}</div>
            <div class="feedback-history-meta">#${safeId} · ${safeDate}</div>
        `;

        return row;
    },

    updateFeedbackHistoryRow(item, prependIfMissing = false, pulseUnread = false) {
        if (!item || !item.id) {
            return;
        }

        const list = document.getElementById('feedbackHistoryList');
        if (!list) {
            return;
        }

        const id = String(item.id);
        let existingRow = null;
        list.querySelectorAll('.feedback-history-item[data-feedback-id]').forEach((row) => {
            if (!existingRow && row.getAttribute('data-feedback-id') === id) {
                existingRow = row;
            }
        });
        const nextRow = this.createFeedbackHistoryRow(item);
        if (existingRow) {
            existingRow.replaceWith(nextRow);
        } else if (prependIfMissing) {
            list.querySelectorAll('.feedback-history-empty, .feedback-history-loading').forEach((node) => node.remove());
            list.prepend(nextRow);
        }

        if (pulseUnread && nextRow.isConnected) {
            nextRow.classList.remove('is-unread-pulse');
            void nextRow.offsetWidth;
            nextRow.classList.add('is-unread-pulse');
            setTimeout(() => {
                if (nextRow && nextRow.isConnected) {
                    nextRow.classList.remove('is-unread-pulse');
                }
            }, 900);
        }

        this.applyFeedbackHistoryKeyboardSupport();
    },

    openFeedbackThreadModal(feedbackId) {
        const id = String(feedbackId || '');
        if (!id) {
            return false;
        }

        const modal = document.getElementById('feedbackThreadModal');
        if (!modal) {
            return false;
        }

        this.closeFeedbackHistoryModal();

        this._activeFeedbackThreadId = id;
        const item = this._feedbackItemsById[id] || { id };
        item.unreadCount = 0;
        this._feedbackItemsById[id] = item;
        this.syncFeedbackHistoryCacheItem(item);
        this.updateFeedbackHistoryRow(item);
        this.renderFeedbackThread(item);
        modal.classList.remove('hidden');
        this.syncModalScale('feedbackThreadModal');
        const input = document.getElementById('feedbackThreadMessageInput');
        if (input) {
            setTimeout(() => input.focus(), 40);
        }
        return true;
    },

    closeFeedbackThreadModal() {
        const modal = document.getElementById('feedbackThreadModal');
        if (modal) {
            modal.classList.add('hidden');
        }
        this._activeFeedbackThreadId = null;
    },

    renderFeedbackThread(item) {
        const meta = document.getElementById('feedbackThreadMeta');
        const messagesHost = document.getElementById('feedbackThreadMessages');
        if (!meta || !messagesHost || !item) {
            return;
        }

        const typeLabel = this.escapeHtml(this.getFeedbackTypeLabel(item.type));
        const statusLabel = this.escapeHtml(this.getFeedbackStatusLabel(item.status));
        const date = item.createdAt ? new Date(item.createdAt) : null;
        const dateText = this.escapeHtml(date && Number.isFinite(date.getTime()) ? date.toLocaleString() : '-');
        const safeId = this.escapeHtml(item.id || '-');

        meta.innerHTML = `
            <span class="feedback-type-badge">${typeLabel}</span>
            <span class="feedback-status-badge status-${String(item.status || 'NEW').toLowerCase()}">${statusLabel}</span>
            <span class="feedback-thread-id">#${safeId}</span>
            <span class="feedback-thread-date">${dateText}</span>
        `;

        const messages = this.extractThreadMessages(item);
        if (!messages.length) {
            const emptyText = (typeof LocalizationManager !== 'undefined')
                ? LocalizationManager.t('feedbackThreadEmpty', 'Сообщений пока нет')
                : 'Сообщений пока нет';
            messagesHost.innerHTML = `<div class="feedback-history-empty">${emptyText}</div>`;
            return;
        }

        messagesHost.innerHTML = '';
        messages.forEach((message) => {
            const bubble = document.createElement('div');
            const mine = message.mine ? ' mine' : '';
            bubble.className = `feedback-thread-message${mine}`;
            const safeText = this.escapeHtml(String(message.text || '').trim() || '-');
            const createdAt = message.createdAt ? new Date(message.createdAt) : null;
            const timeText = this.escapeHtml(createdAt && Number.isFinite(createdAt.getTime()) ? createdAt.toLocaleString() : '');

            bubble.innerHTML = `
                <div class="feedback-thread-message-text">${safeText}</div>
                <div class="feedback-thread-message-meta">${timeText}</div>
            `;
            messagesHost.appendChild(bubble);
        });

        messagesHost.scrollTop = messagesHost.scrollHeight;
    },

    extractThreadMessages(item) {
        const messages = [];
        const seenMessageKeys = new Set();
        const toTimestamp = (value) => {
            if (value === null || value === undefined || value === '') {
                return null;
            }

            const numeric = Number(value);
            if (Number.isFinite(numeric) && numeric > 0) {
                return numeric;
            }

            const parsed = Date.parse(String(value));
            return Number.isFinite(parsed) ? parsed : null;
        };
        const pushUniqueMessage = (textValue, createdAtValue, mine) => {
            const text = String(textValue || '').trim();
            if (!text) {
                return;
            }

            const timestamp = toTimestamp(createdAtValue);
            const dedupeSecond = Number.isFinite(timestamp) ? Math.round(timestamp / 1000) : 'na';
            const dedupeKey = `${text}::${dedupeSecond}`;
            if (seenMessageKeys.has(dedupeKey)) {
                return;
            }

            seenMessageKeys.add(dedupeKey);
            messages.push({
                text,
                createdAt: createdAtValue || (Number.isFinite(timestamp) ? timestamp : Date.now()),
                mine: Boolean(mine)
            });
        };

        const baseCreatedAt = item.createdAt || Date.now();
        const baseText = String(item.text || '').trim();
        if (baseText) {
            pushUniqueMessage(baseText, baseCreatedAt, true);
        }

        if (Array.isArray(item.messages)) {
            item.messages.forEach((raw) => {
                const text = String((raw && (raw.text || raw.message || raw.content)) || '').trim();
                if (!text) {
                    return;
                }
                const source = String((raw && (raw.source || raw.author || raw.sender || '')) || '').toLowerCase();
                const mine = source.includes('player') || source.includes('user') || source.includes('client') || source.includes('me');
                pushUniqueMessage(
                    text,
                    (raw && (raw.createdAt || raw.created_at || raw.time || raw.date)) || Date.now(),
                    mine
                );
            });
        } else {
            const lastText = String(item.lastMessage || '').trim();
            if (lastText && lastText !== baseText) {
                pushUniqueMessage(lastText, item.updatedAt || Date.now(), false);
            }
        }

        return messages;
    },

    async sendFeedbackThreadMessage() {
        if (this._feedbackThreadSending) {
            return false;
        }

        const feedbackId = this._activeFeedbackThreadId;
        if (!feedbackId) {
            return false;
        }

        const input = document.getElementById('feedbackThreadMessageInput');
        const sendBtn = document.getElementById('btnFeedbackThreadSend');
        if (!input) {
            return false;
        }

        const text = String(input.value || '').trim();
        if (text.length < 2) {
            const validationText = (typeof LocalizationManager !== 'undefined')
                ? LocalizationManager.t('feedbackThreadValidation', 'Введите сообщение (минимум 2 символа)')
                : 'Введите сообщение (минимум 2 символа)';
            this.showNotification(validationText, 'warning');
            input.focus();
            return false;
        }

        const gp = this.getGp();
        const canSend = gp && gp.feedbacks && typeof gp.feedbacks.sendMessage === 'function';
        if (!canSend || gp.isAllowedOrigin === false) {
            const unavailableText = (typeof LocalizationManager !== 'undefined')
                ? LocalizationManager.t('feedbackUnavailable', 'Сервис обратной связи недоступен на этой платформе')
                : 'Сервис обратной связи недоступен на этой платформе';
            this.showNotification(unavailableText, 'warning');
            return false;
        }

        this._feedbackThreadSending = true;
        if (sendBtn) {
            sendBtn.disabled = true;
        }

        try {
            await gp.feedbacks.sendMessage({
                feedbackId,
                text
            });

            const item = this._feedbackItemsById[feedbackId] || { id: feedbackId, messages: [] };
            if (!Array.isArray(item.messages)) {
                item.messages = [];
            }
            item.messages.push({ text, createdAt: Date.now(), source: 'player' });
            item.lastMessage = text;
            this._feedbackItemsById[feedbackId] = item;

            this.renderFeedbackThread(item);
            input.value = '';

            const sentText = (typeof LocalizationManager !== 'undefined')
                ? LocalizationManager.t('feedbackThreadSent', 'Сообщение отправлено')
                : 'Сообщение отправлено';
            this.showNotification(sentText, 'success');
            return true;
        } catch (error) {
            console.warn('⚠️ Не удалось отправить сообщение в обращение:', error);
            const errorText = (typeof LocalizationManager !== 'undefined')
                ? LocalizationManager.t('feedbackThreadSendError', 'Не удалось отправить сообщение')
                : 'Не удалось отправить сообщение';
            this.showNotification(errorText, 'error');
            return false;
        } finally {
            this._feedbackThreadSending = false;
            if (sendBtn) {
                sendBtn.disabled = false;
            }
        }
    },

    renderFeedbackHistoryItems(items, reset = false) {
        const list = document.getElementById('feedbackHistoryList');
        if (!list) {
            return;
        }

        if (reset) {
            list.innerHTML = '';
            this._feedbackItemsById = {};
            this._feedbackHistoryItems = [];
        }

        if (!items.length && reset) {
            const emptyText = (typeof LocalizationManager !== 'undefined')
                ? LocalizationManager.t('feedbackHistoryEmpty', 'Пока нет обращений')
                : 'Пока нет обращений';
            list.innerHTML = `<div class="feedback-history-empty">${emptyText}</div>`;
            return;
        }

        items.forEach((item) => {
            const itemId = String(item.id || '');
            if (itemId) {
                this._feedbackItemsById[itemId] = item;
            }

            this.syncFeedbackHistoryCacheItem(item);
            list.appendChild(this.createFeedbackHistoryRow(item));
        });

        this.applyFeedbackHistoryKeyboardSupport();
    },

    applyFeedbackHistoryKeyboardSupport() {
        const list = document.getElementById('feedbackHistoryList');
        if (!list) {
            return;
        }

        list.querySelectorAll('.feedback-history-item[data-feedback-id]').forEach((row) => {
            if (row.dataset.keybindReady === '1') {
                return;
            }

            row.dataset.keybindReady = '1';
            row.addEventListener('keydown', (e) => {
                if (e.key !== 'Enter' && e.key !== ' ') {
                    return;
                }
                e.preventDefault();
                const feedbackId = row.getAttribute('data-feedback-id');
                if (feedbackId) {
                    this.openFeedbackThreadModal(feedbackId);
                }
            });
        });
    },

    updateFeedbackHistoryControls() {
        const btnMore = document.getElementById('btnFeedbackHistoryMore');
        if (btnMore) {
            btnMore.disabled = this._feedbackHistoryLoading || !this._feedbackHistoryHasMore;
            btnMore.classList.toggle('hidden', !this._feedbackHistoryHasMore);
        }

        const btnRefresh = document.getElementById('btnFeedbackHistoryRefresh');
        if (btnRefresh) {
            btnRefresh.disabled = this._feedbackHistoryLoading;
        }
    },

    extractFeedbackItems(payload) {
        if (!payload) {
            return [];
        }

        if (Array.isArray(payload)) {
            return payload;
        }

        const directCollections = [
            payload.feedbacks,
            payload.items,
            payload.list,
            payload.data,
            payload.result
        ];

        for (let i = 0; i < directCollections.length; i++) {
            if (Array.isArray(directCollections[i])) {
                return directCollections[i];
            }
        }

        return [];
    },

    normalizeFeedbackItem(raw) {
        if (!raw || typeof raw !== 'object') {
            return null;
        }

        return {
            id: raw.id || raw.feedbackId || raw._id || raw.uuid || null,
            type: String(raw.type || 'SUGGESTION').toUpperCase(),
            status: String(raw.status || 'NEW').toUpperCase(),
            text: raw.text || raw.message || raw.description || raw.lastMessage || '',
            createdAt: raw.createdAt || raw.created_at || raw.date || raw.time || null,
            updatedAt: raw.updatedAt || raw.updated_at || raw.modifiedAt || null,
            lastMessage: raw.lastMessage || raw.last_message || raw.message || '',
            messages: Array.isArray(raw.messages) ? raw.messages : [],
            unreadCount: Number(raw.unreadCount || raw.unread_count || raw.unread || 0)
        };
    },

    async loadFeedbackHistory({ reset = false } = {}) {
        if (this._feedbackHistoryLoading) {
            return false;
        }

        const gp = this.getGp();
        const hasFetch = gp && gp.feedbacks && typeof gp.feedbacks.fetch === 'function';
        if (!hasFetch || gp.isAllowedOrigin === false) {
            const unavailableText = (typeof LocalizationManager !== 'undefined')
                ? LocalizationManager.t('feedbackUnavailable', 'Сервис обратной связи недоступен на этой платформе')
                : 'Сервис обратной связи недоступен на этой платформе';
            this.showNotification(unavailableText, 'warning');
            return false;
        }

        const list = document.getElementById('feedbackHistoryList');
        if (list && reset) {
            const loadingText = (typeof LocalizationManager !== 'undefined')
                ? LocalizationManager.t('loading', 'Загрузка...')
                : 'Загрузка...';
            list.innerHTML = `<div class="feedback-history-loading">${loadingText}</div>`;
        }

        if (reset) {
            this._feedbackHistoryOffset = 0;
            this._feedbackHistoryHasMore = false;
        }

        this._feedbackHistoryLoading = true;
        this.updateFeedbackHistoryControls();

        try {
            const params = {
                limit: this._feedbackHistoryPageSize
            };

            let result = null;
            if (reset) {
                result = await gp.feedbacks.fetch(params);
            } else if (typeof gp.feedbacks.fetchMore === 'function') {
                result = await gp.feedbacks.fetchMore(params);
            } else {
                params.offset = this._feedbackHistoryOffset;
                result = await gp.feedbacks.fetch(params);
            }

            const rawItems = this.extractFeedbackItems(result);
            const items = rawItems.map((item) => this.normalizeFeedbackItem(item)).filter(Boolean);

            if (!reset && !items.length) {
                this._feedbackHistoryHasMore = false;
                this.updateFeedbackHistoryControls();
                return true;
            }

            this.renderFeedbackHistoryItems(items, reset);
            this._feedbackHistoryOffset += items.length;
            this._feedbackHistoryHasMore = items.length >= this._feedbackHistoryPageSize;
            if (this._activeFeedbackThreadId && this._feedbackItemsById[this._activeFeedbackThreadId]) {
                this.renderFeedbackThread(this._feedbackItemsById[this._activeFeedbackThreadId]);
            }
            this.updateFeedbackHistoryControls();
            return true;
        } catch (error) {
            console.warn('⚠️ Не удалось загрузить историю обращений:', error);
            const errorText = (typeof LocalizationManager !== 'undefined')
                ? LocalizationManager.t('feedbackHistoryLoadError', 'Не удалось загрузить историю обращений')
                : 'Не удалось загрузить историю обращений';
            this.showNotification(errorText, 'error');
            if (list && reset) {
                list.innerHTML = `<div class="feedback-history-empty">${errorText}</div>`;
            }
            this._feedbackHistoryHasMore = false;
            this.updateFeedbackHistoryControls();
            return false;
        } finally {
            this._feedbackHistoryLoading = false;
            this.updateFeedbackHistoryControls();
        }
    },

    async showPreRunAdBuffPrompt() {
        const modal = document.getElementById('preRunBuffModal');
        const btnAccept = document.getElementById('btnPreRunBuffAccept');
        const btnDecline = document.getElementById('btnPreRunBuffDecline');

        const modalScreen = modal ? modal.closest('.screen') : null;
        const modalScreenHidden = Boolean(modalScreen && !modalScreen.classList.contains('active'));

        
        if (!modal || !btnAccept || !btnDecline || modalScreenHidden) {
            const shouldWatch = window.confirm(
                (typeof LocalizationManager !== 'undefined')
                    ? LocalizationManager.t('preRunBuffDesc', 'Посмотреть рекламу и получить +100% золота и +100% XP на первые 5 волн?')
                    : 'Посмотреть рекламу и получить +100% золота и +100% XP на первые 5 волн?'
            );
            return shouldWatch;
        }

        return new Promise((resolve) => {
            let resolved = false;
            const resolveOnce = (value) => {
                if (resolved) return;
                resolved = true;
                this._preRunBuffModalResolver = null;
                this._preRunBuffModalCleanup = null;
                resolve(Boolean(value));
            };

            const cleanup = (hideModal = true) => {
                if (hideModal) {
                    modal.classList.add('hidden');
                }
                btnAccept.removeEventListener('click', onAccept);
                btnDecline.removeEventListener('click', onDecline);
            };

            const onDecline = () => {
                cleanup(true);
                resolveOnce(false);
            };

            const onAccept = async () => {
                cleanup(false);
                resolveOnce(true);
            };

            btnAccept.addEventListener('click', onAccept);
            btnDecline.addEventListener('click', onDecline);

            this._preRunBuffModalResolver = resolveOnce;
            this._preRunBuffModalCleanup = cleanup;

            modal.classList.remove('hidden');
            this.syncModalScale('preRunBuffModal');
        });
    },

    handlePreRunBuffModalChoice(accepted) {
        if (typeof this._preRunBuffModalCleanup === 'function') {
            this._preRunBuffModalCleanup(!accepted);
        }
        if (typeof this._preRunBuffModalResolver === 'function') {
            this._preRunBuffModalResolver(Boolean(accepted));
        }
    },

    updatePreRunAdBuffBadge(wavesLeft) {
        const badge = document.getElementById('adBoostBadge');
        const topStatus = document.getElementById('preRunBuffTopStatus');
        const topText = document.getElementById('preRunBuffTopText');

        
        
        if (badge) {
            badge.classList.add('hidden');
        }

        const left = Math.max(0, Number(wavesLeft || 0));
        if (left <= 0) {
            if (topStatus) {
                topStatus.classList.add('hidden');
            }
            return;
        }

        if (topStatus && topText) {
            topText.textContent = (typeof LocalizationManager !== 'undefined')
                ? LocalizationManager.t('preRunBuffTop', '+100% золото/XP • {0} волн', left)
                : `+100% золото/XP • ${left} волн`;
            topStatus.classList.remove('hidden');
        }
    },

    async startWithStage(stage) {
        if (!Number.isFinite(stage)) return;

        const stageData = (typeof SaveManager !== 'undefined' && SaveManager.getStageData)
            ? SaveManager.getStageData()
            : { selectedStage: 1, unlockedStage: 1 };

        if (stage > stageData.unlockedStage) {
            this.showNotification(
                (typeof LocalizationManager !== 'undefined')
                    ? LocalizationManager.t('stageLockedHint', 'Эта стадия пока закрыта')
                    : 'Эта стадия пока закрыта',
                '#e67e22'
            );
            return;
        }

        if (typeof SaveManager !== 'undefined' && SaveManager.setSelectedStage) {
            SaveManager.setSelectedStage(stage);
        }

        let preRunBuffEnabled = false;
        if (typeof AdsManager !== 'undefined' && typeof AdsManager.showRewardedAd === 'function') {
            while (true) {
                let wantsPreRunBuffAd = false;
                try {
                    wantsPreRunBuffAd = await this.showPreRunAdBuffPrompt();
                } catch (error) {
                    console.error('❌ Ошибка в модалке стартового баффа:', error);
                    wantsPreRunBuffAd = false;
                }

                if (!wantsPreRunBuffAd) {
                    break;
                }

                const rewarded = await AdsManager.showRewardedAd({
                    onErrorMessage: LocalizationManager.t('uiPreRunAdLoadError', 'Не удалось загрузить рекламу для стартового баффа')
                });

                if (rewarded) {
                    preRunBuffEnabled = true;
                    break;
                }

                this.showNotification(
                    (typeof LocalizationManager !== 'undefined')
                        ? LocalizationManager.t('preRunBuffNotGranted', 'Награда не засчитана. Можно попробовать еще раз или пропустить.')
                        : 'Награда не засчитана. Можно попробовать еще раз или пропустить.',
                    '#e67e22'
                );
            }
        }

        if (typeof Game !== 'undefined' && typeof Game.setPreRunAdBuffEnabled === 'function') {
            Game.setPreRunAdBuffEnabled(preRunBuffEnabled);
        }

        const preRunBuffModal = document.getElementById('preRunBuffModal');
        if (preRunBuffModal) {
            preRunBuffModal.classList.add('hidden');
        }

        if (preRunBuffEnabled) {
            this.showNotification(
                (typeof LocalizationManager !== 'undefined')
                    ? LocalizationManager.t('preRunBuffGranted', 'Бонус активирован: +100% золота и XP на 5 волн')
                    : 'Бонус активирован: +100% золота и XP на 5 волн',
                '#f1c40f'
            );
        }

        this.hideStageSelectModal();
        this.showScreen('gameScreen');

        setTimeout(() => {
            Game.start(stage);
        }, 100);
    },

    formatPurchaseTimestamp(timestamp) {
        const value = Number(timestamp);
        if (!Number.isFinite(value) || value <= 0) {
            return (typeof LocalizationManager !== 'undefined')
                ? LocalizationManager.t('myPurchasesUnknownDate', 'Дата неизвестна')
                : 'Дата неизвестна';
        }

        return new Date(value).toLocaleString();
    },

    async showMyPurchasesModal() {
        if (!window.PurchasesManager || !PurchasesManager.getMyPurchasesData) {
            this.showNotification(LocalizationManager.t('uiPurchaseHistoryUnavailable', 'История покупок недоступна'), '#e67e22');
            return;
        }

        const modal = document.getElementById('myPurchasesModal');
        const activeList = document.getElementById('myPurchasesActiveList');
        const pendingList = document.getElementById('myPurchasesPendingList');

        if (!modal || !activeList || !pendingList) {
            this.showNotification(LocalizationManager.t('uiPurchasesWindowUnavailable', 'Окно покупок недоступно'), '#e67e22');
            return;
        }

        const t = (key, fallback, ...args) => {
            if (typeof LocalizationManager !== 'undefined' && LocalizationManager.t) {
                return LocalizationManager.t(key, fallback, ...args);
            }
            return fallback;
        };

        activeList.innerHTML = `<div class="my-purchases-loading">${t('myPurchasesLoading', 'Загрузка...')}</div>`;
        pendingList.innerHTML = `<div class="my-purchases-loading">${t('myPurchasesLoading', 'Загрузка...')}</div>`;
        modal.classList.remove('hidden');

        try {
            const data = await PurchasesManager.getMyPurchasesData(25);
            const active = Array.isArray(data.active) ? data.active : [];
            const pending = Array.isArray(data.pending) ? data.pending : [];

            if (active.length === 0) {
                activeList.innerHTML = `<div class="my-purchases-empty">${t('myPurchasesActiveEmpty', 'Активных покупок нет')}</div>`;
            } else {
                activeList.innerHTML = active.map((item) => {
                    return `
                        <div class="my-purchases-item">
                            <div class="my-purchases-item-title">${item.productName || item.productId}</div>
                            <div class="my-purchases-item-meta">${this.formatPurchaseTimestamp(item.timestamp)} · ${item.priceLabel || '—'}</div>
                        </div>
                    `;
                }).join('');
            }

            if (pending.length === 0) {
                pendingList.innerHTML = `<div class="my-purchases-empty">${t('myPurchasesPendingEmpty', 'Необработанных покупок нет')}</div>`;
            } else {
                pendingList.innerHTML = pending.map((item) => {
                    return `
                        <div class="my-purchases-item is-pending">
                            <div class="my-purchases-item-title">${item.productName || item.productId}</div>
                            <div class="my-purchases-item-meta">${this.formatPurchaseTimestamp(item.createdAt)} · ${t('myPurchasesStatusPending', 'Ожидает обработки')}</div>
                        </div>
                    `;
                }).join('');
            }
        } catch (error) {
            console.error('❌ Не удалось загрузить список покупок:', error);
            activeList.innerHTML = `<div class="my-purchases-empty">${t('myPurchasesLoadError', 'Не удалось загрузить данные')}</div>`;
            pendingList.innerHTML = `<div class="my-purchases-empty">${t('myPurchasesLoadError', 'Не удалось загрузить данные')}</div>`;
        }
     },

     getExitPenaltyRate() {
         const economyCfg = (typeof BalanceRuntime !== 'undefined' && BalanceRuntime && typeof BalanceRuntime.get === 'function')
             ? (BalanceRuntime.get('economy', {}) || {})
             : {};
         const rawRate = Number(economyCfg.exitPenaltyRate);

         if (!Number.isFinite(rawRate)) {
             return 0.35;
         }

         return Math.max(0, Math.min(1, rawRate));
     },

     
     showExitConfirmDialog() {
         const modal = document.getElementById('exitConfirmModal');
         const sessionCrystals = Game.sessionCrystals || 0;
         const crystalsLost = Math.ceil(sessionCrystals * this.getExitPenaltyRate());

         const pauseOverlay = document.getElementById('pauseOverlay');
         if (pauseOverlay) {
             pauseOverlay.classList.add('hidden');
         }
         
         
         document.getElementById('exitSessionCrystals').textContent = sessionCrystals;
         document.getElementById('exitCrystalsLoss').textContent = crystalsLost;
         
         modal.classList.remove('hidden');
         this.syncModalScale('exitConfirmModal');
     },

     
     showNotification(text, color) {
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

        const notification = document.createElement('div');
        notification.className = `shop-notification tone-${tone}`;
        notification.textContent = text;
        notification.style.setProperty('--toast-accent', resolvedColor);

        
        
        const host = this.getNotificationHost();
        host.appendChild(notification);

        
        const maxVisibleToasts = 4;
        const toasts = host.querySelectorAll('.shop-notification');
        if (toasts.length > maxVisibleToasts) {
            toasts[0].remove();
        }

        setTimeout(() => {
            notification.classList.add('is-leaving');
            setTimeout(() => notification.remove(), 260);
        }, 2600);
     },

    getNotificationHost() {
        const activeScreenContent = document.querySelector('.screen.active .screen-content');
        const gameScreenActive = document.getElementById('gameScreen') && document.getElementById('gameScreen').classList.contains('active');
        const gameUiHost = gameScreenActive ? document.querySelector('#gameScreen .game-ui') : null;
        let host = document.body;

        if (gameUiHost) {
            host = gameUiHost;
            let layer = gameUiHost.querySelector('.notification-layer');
            if (!layer) {
                layer = document.createElement('div');
                layer.className = 'notification-layer';
                gameUiHost.appendChild(layer);
            }
            layer.classList.add('in-game-screen');
            host = layer;
        } else if (activeScreenContent) {
            host = activeScreenContent;
            let layer = activeScreenContent.querySelector('.notification-layer');
            if (!layer) {
                layer = document.createElement('div');
                layer.className = 'notification-layer';
                activeScreenContent.appendChild(layer);
            }
            layer.classList.remove('in-game-screen');
            host = layer;
        } else {
            let layer = document.body.querySelector('.notification-layer.notification-layer-global');
            if (!layer) {
                layer = document.createElement('div');
                layer.className = 'notification-layer notification-layer-global';
                document.body.appendChild(layer);
            }
            host = layer;
        }

        return host;
    },

    showAchievementUnlockToast(achievement) {
        if (!achievement) {
            return;
        }

        const host = this.getNotificationHost();
        const toast = document.createElement('div');
        const rare = String(achievement.rare || 'COMMON').toLowerCase();
        toast.className = `achievement-unlock-toast rare-${rare}`;

        const icon = achievement.iconSmall || achievement.icon || '';
        const name = achievement.name || LocalizationManager.t('achievementUnlockedFallback', 'Достижение');
        const description = achievement.description || LocalizationManager.t('achievementUnlockedDescFallback', 'Новое достижение разблокировано');
        const label = LocalizationManager.t('achievementUnlockedLabel', 'Достижение открыто');

        toast.innerHTML = `
            <div class="achievement-unlock-toast__icon-wrap">
                ${icon ? `<img class="achievement-unlock-toast__icon" src="${String(icon).replace(/"/g, '&quot;')}" alt="">` : '<div class="achievement-unlock-toast__icon achievement-unlock-toast__icon--fallback">🏆</div>'}
            </div>
            <div class="achievement-unlock-toast__body">
                <div class="achievement-unlock-toast__label">${label}</div>
                <div class="achievement-unlock-toast__title">${name}</div>
                <div class="achievement-unlock-toast__desc">${description}</div>
            </div>
        `;

        host.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('is-leaving');
            setTimeout(() => toast.remove(), 260);
        }, 3200);
    },

    updateSoundButtons() {
        const soundEnabled = typeof AudioManager !== 'undefined' ? AudioManager.isSoundEnabled() : true;
        const icon = soundEnabled ? '🔊' : '🔇';

        const btnSound = document.getElementById('btnSound');
        if (btnSound) {
            btnSound.textContent = icon;
        }

        const btnGameSound = document.getElementById('btnGameSound');
        const btnGameSoundIcon = document.getElementById('btnGameSoundIcon');
        if (btnGameSound && btnGameSoundIcon) {
            btnGameSoundIcon.textContent = icon;
            btnGameSound.classList.toggle('is-muted', !soundEnabled);
        }
    },

    
     playUpgradeSound() {
         if (typeof AudioManager !== 'undefined') {
             AudioManager.playSound('towerUpgrade');
         }
     },

     playErrorSound() {
         if (typeof AudioManager !== 'undefined') {
             AudioManager.playSound('error');
         }
     },

     playGoldSound() {
         if (typeof AudioManager !== 'undefined') {
             AudioManager.playSound('moneyGain');
         }
     },

     playShootSound() {
         if (typeof AudioManager !== 'undefined') {
             AudioManager.playSound('shoot');
         }
     },

    

    


     async showCrystalsShopDialog() {
         console.log('📦 showCrystalsShopDialog вызван');

         
         if (!(await this.initGpPaymentsDirect())) {
             console.warn('⚠️ Система покупок недоступна на текущем хосте');

             this.showPaymentsUnavailableDialog();
             return;
         }

         console.log('✅ SDK покупок доступен');
         this.showSDKCrystalsShop();
     },

     


     showMockCrystalsShop() {
         console.log('📦 Показываем mock-магазин кристаллов');

         const t = (key, fallback, ...args) => {
             if (typeof LocalizationManager !== 'undefined' && LocalizationManager.t) {
                 return LocalizationManager.t(key, fallback, ...args);
             }
             return fallback;
         };
         
         const packages = [
             { id: 'crystals_100', icon: '💎', amount: 100, price: 'TEST', bonus: 0 },
             { id: 'crystals_500', icon: '💎', amount: 500, price: 'TEST', bonus: 50 },
             { id: 'crystals_2500', icon: '💎', amount: 2500, price: 'TEST', bonus: 400 },
             { id: 'crystals_5000', icon: '💎', amount: 5000, price: 'TEST', bonus: 1500 }
         ];

         const dialogHTML = `
             <div id="crystalsShopDialog" class="modal">
                 <div class="modal-content crystals-shop-content">
                     <div class="shop-header">
                         <h2>💎 ${t('buyCrystalsBtn', 'Купить кристаллы')}</h2>
                         <button id="closeCrystalsDialog" class="btn-close">✕</button>
                     </div>
                     <div style="padding: 20px; text-align: center; background: rgba(0,0,0,0.3); border-radius: 10px; margin-bottom: 15px;">
                         <p style="color: #FFD700; margin: 0;">⚠️ ${t('uiTestModeTitle', 'Тестовый режим')}</p>
                         <p style="color: #aaa; font-size: 0.9em; margin: 5px 0 0 0;">${t('uiTestModePurchasesHint', 'Покупки работают только на поддерживаемых платформах')}</p>
                     </div>
                     <div class="crystals-packages">
                         ${packages.map(pkg => `
                             <div class="package-card">
                                 <div class="package-icon">${pkg.icon}</div>
                                 <div class="package-info">
                                     <div class="package-name">${pkg.amount} ${t('crystals_short', 'Кристаллы').toLowerCase()}</div>
                                     ${pkg.bonus ? `<div class="package-bonus">+ ${pkg.bonus} ${t('uiBonusWord', 'бонус')}</div>` : ''}
                                 </div>
                                 <button class="btn btn-buy-package mock-buy" data-package="${pkg.id}">
                                     ${pkg.price}
                                 </button>
                             </div>
                         `).join('')}
                     </div>
                     <div class="shop-footer">
                         <p class="payment-info" style="color: #888;">💳 ${t('uiTestModeFreeCrystals', 'В тестовом режиме кристаллы начисляются бесплатно')}</p>
                     </div>
                 </div>
             </div>
         `;

         this.renderCrystalsDialog(dialogHTML, true);
      },

     


     showPaymentsUnavailableDialog() {
         const dialogHTML = `
             <div id="crystalsShopDialog" class="modal">
                 <div class="modal-content crystals-shop-content">
                     <div class="shop-header">
                         <h2>💎 ${LocalizationManager.t('buyCrystalsBtn', 'Купить кристаллы')}</h2>
                         <button id="closeCrystalsDialog" class="btn-close">✕</button>
                     </div>
                     <div style="padding: 20px; text-align: center; background: rgba(0,0,0,0.3); border-radius: 10px; margin: 10px 0 15px 0;">
                          <p style="color: #f1c40f; margin: 0 0 8px 0; font-weight: 700;">⚠️ ${LocalizationManager.t('paymentUnavailableTitle', 'Платежи недоступны')}</p>
                         <p style="color: #bbb; margin: 0; line-height: 1.4;">
                              ${LocalizationManager.t('paymentUnavailableHint', 'Проверьте настройки хоста проекта и конфигурацию покупок.')}
                         </p>
                     </div>
                     <div class="shop-footer">
                          <p class="payment-info">💳 ${LocalizationManager.t('paymentUnavailableHostHint', 'Доступно только на поддерживаемом хосте')}</p>
                     </div>
                 </div>
             </div>
         `;

         this.renderCrystalsDialog(dialogHTML, false);
     },

     


     async showSDKCrystalsShop() {
          console.log('📦 Загрузка каталога из SDK...');
         
         try {
              let catalog = [];
               if (window.PurchasesManager && typeof PurchasesManager.loadCatalogFromSDK === 'function') {
                   await PurchasesManager.loadCatalogFromSDK();
                  catalog = this.resolveCrystalStoreCatalog();
               } else {
                  const payments = this.getGpPayments();
                  const products = payments && Array.isArray(payments.products) ? payments.products : [];
                  catalog = products.map((p) => ({
                      id: String(p.tag || p.id || ''),
                      title: String(p.name || p.title || '').trim(),
                      description: p.description || '',
                      imageURI: p.iconSmall || p.icon || '',
                      price: this.formatCrystalStorePrice(p, LocalizationManager.t('uiPriceUnavailableShort', 'Недоступно'))
                  }));
              }
              
                if (!catalog || catalog.length === 0) {
                    console.warn('⚠️ Каталог пуст');
                   this.showPaymentsUnavailableDialog();
                   return;
               }

              const renderProducts = (products) => products.map(product => {
                  return `
                  <div class="package-card package-card-modern">
                      <div class="package-icon">${product.imageURI ? `<img src="${this.escapeHtml(String(product.imageURI))}" alt="" style="width:52px;height:52px;object-fit:contain;" />` : '💎'}</div>
                      <div class="package-info">
                          <div class="package-name">${this.escapeHtml(product.title || '')}</div>
                          <div class="package-amount">${this.escapeHtml(product.description || '')}</div>
                      </div>
                      <button class="btn btn-buy-package sdk-buy" data-product="${this.escapeHtml(String(product.id || ''))}">${this.escapeHtml(String(product.price || ''))}</button>
                  </div>
              `;
              }).join('');

             const dialogHTML = `
                 <div id="crystalsShopDialog" class="modal">
                      <div class="modal-content crystals-shop-content">
                          <div class="shop-header">
                              <h2>💎 ${LocalizationManager.t('buyCrystalsBtn', 'Купить кристаллы')}</h2>
                              <button id="closeCrystalsDialog" class="btn-close">✕</button>
                           </div>
                           <div class="crystals-packages">
                               <div class="store-section-title">${this.escapeHtml(LocalizationManager.t('storeCrystalsTitle', 'Кристаллы'))}</div>
                               <div class="store-section-grid store-section-grid--shop store-section-grid--crystals">${renderProducts(catalog)}</div>
                           </div>
                           <div class="shop-footer">
                               <p class="payment-info">💳 ${LocalizationManager.t('paymentsSafe', 'Все платежи безопасны')}</p>
                          </div>
                      </div>
                 </div>
             `;

             this.renderCrystalsDialog(dialogHTML, false);
             
         } catch (error) {
             console.error('❌ Ошибка загрузки каталога:', error);
             this.showPaymentsUnavailableDialog();
         }
     },

     


     renderCrystalsDialog(dialogHTML, isMock) {
         
         const existingDialog = document.getElementById('crystalsShopDialog');
         if (existingDialog) existingDialog.remove();

         const tempDiv = document.createElement('div');
         tempDiv.innerHTML = dialogHTML;
         document.body.appendChild(tempDiv.firstElementChild);

         
         const closeBtn = document.getElementById('closeCrystalsDialog');
         if (closeBtn) {
             closeBtn.addEventListener('click', () => {
                 const dialog = document.getElementById('crystalsShopDialog');
                 if (dialog) dialog.remove();
             });
         }

         
          if (isMock) {
             
             document.querySelectorAll('.mock-buy').forEach(btn => {
                 btn.addEventListener('click', () => {
                     const packageId = btn.dataset.package;
                     const product = window.PurchasesManager && PurchasesManager.PRODUCTS
                         ? (PurchasesManager.PRODUCTS[packageId] || null)
                         : null;
                     const fallbackAmount = parseInt(packageId.split('_')[1], 10) || 100;
                     const totalAmount = window.PurchasesManager && typeof PurchasesManager.getCrystalRewardAmount === 'function'
                         ? PurchasesManager.getCrystalRewardAmount(product || { amount: fallbackAmount, bonus: 0 })
                         : fallbackAmount;

                     SaveManager.addCrystals(totalAmount);
                     this.updateMainMenu();
                     this.showNotification(LocalizationManager.t('uiMockCrystalsAdded', '+{0} crystals (test)!', totalAmount), '#2ecc71');
                     const dialog = document.getElementById('crystalsShopDialog');
                     if (dialog) dialog.remove();
                 });
             });
         } else {
             
              document.querySelectorAll('.sdk-buy').forEach(btn => {
                  btn.addEventListener('click', async () => {
                       if (!window.PurchasesManager || !PurchasesManager.purchaseProduct) {
                           this.showNotification(LocalizationManager.t('uiPurchasesSystemUnavailable', 'Система покупок временно недоступна'), '#e74c3c');
                           return;
                       }

                       const productId = btn.dataset.product;
                        const result = await PurchasesManager.purchaseProduct(productId);
                        
                        if (result) {
                            this.updateMainMenu();
                            await this.showSDKCrystalsShop();
                            return;
                        }
                  });
              });
         }

         
         const dialog = document.getElementById('crystalsShopDialog');
         if (dialog) {
             dialog.addEventListener('click', (e) => {
                 if (e.target.id === 'crystalsShopDialog') {
                     dialog.remove();
                 }
             });
         }
     },

    

     setupGardenModal() {
         try {
             const btnOpenGarden = document.getElementById('btnOpenGarden');
             if (!btnOpenGarden) {
                 console.error('❌ btnOpenGarden not found in DOM');
                 return;
             }
             
             console.log('✅ btnOpenGarden found, adding click listener');
             
             btnOpenGarden.addEventListener('click', (e) => {
                 e.preventDefault();
                 console.log('🌱 Garden button clicked!');
                 
                 
                 const btnCloseGarden = document.getElementById('btnCloseGarden');
                 const gardenModal = document.getElementById('gardenModal');
                 
                 if (btnCloseGarden && gardenModal) {
                     if (!btnCloseGarden._setupDone) {
                         console.log('🌱 Setting up close button listener');
                         btnCloseGarden.addEventListener('click', () => {
                             gardenModal.classList.add('hidden');
                         });
                         
                         gardenModal.addEventListener('click', (e) => {
                             if (e.target === gardenModal) {
                                 gardenModal.classList.add('hidden');
                             }
                         });
                         
                         btnCloseGarden._setupDone = true;
                     }
                 }
                 
                 this.showGardenModal();
             });
         } catch (error) {
             console.error('❌ Error in setupGardenModal:', error);
         }
     },

     showGardenModal() {
         try {
             console.log('📖 showGardenModal called');
             
             if (!Game || !Game.gardenSystem) {
                 console.error('❌ Game or gardenSystem not initialized');
                 return;
             }
             
             const modal = document.getElementById('gardenModal');
             const container = document.getElementById('gardensContainer');
             const seedsCount = document.getElementById('gardenSeedsCount');
             
             if (!modal) {
                 console.error('❌ gardenModal element not found');
                 return;
             }
             if (!container) {
                 console.error('❌ gardensContainer element not found');
                 return;
             }
             if (!seedsCount) {
                 console.warn('⚠️ gardenSeedsCount element not found (but continuing)');
             }
             
             console.log('✅ All elements found, rendering gardens...');
             
             
             container.innerHTML = '';
        
        const gardens = Game.gardenSystem.gardens;
        const gardenSystem = Game.gardenSystem;
        
        gardens.forEach((garden, idx) => {
            const gardenDiv = document.createElement('div');
            gardenDiv.className = `garden-grid ${!garden.unlocked ? 'locked' : ''}`;
            
            
            const header = document.createElement('h3');
            const gardenKey = `garden${idx + 1}`;
            const gardenName = typeof LocalizationManager !== 'undefined' ?
                LocalizationManager.t(gardenKey, `Огород ${idx + 1}`) : `Огород ${idx + 1}`;
            header.innerHTML = `${gardenName} ${!garden.unlocked ? '🔒' : ''}`;
            header.style.gridColumn = '1/-1';
            header.style.textAlign = 'center';
            header.style.margin = '0 0 10px 0';
            header.style.fontSize = '1.1em';
            header.style.color = '#fff';
            gardenDiv.appendChild(header);
            
            if (garden.unlocked) {
                garden.grid.forEach((row, r) => {
                    row.forEach((cell, c) => {
                        const cellDiv = document.createElement('div');
                        cellDiv.className = 'garden-cell';
                        
                        if (cell.planted) {
                            const progress = Math.min(cell.daysSincePlanted, 3);
                            cellDiv.classList.add('growing');
                            cellDiv.setAttribute('data-progress', `${progress}/3`);
                            cellDiv.textContent = `🌱\n${progress}/3`;
                            
                            if (progress >= 3) {
                                cellDiv.className = 'garden-cell mature';
                                const readyText = typeof LocalizationManager !== 'undefined' ?
                                    LocalizationManager.t('ready', 'Готово') : 'Готово';
                                cellDiv.textContent = `🌾\n${readyText}`;
                            }
                        } else {
                            cellDiv.className += ' empty';
                            const emptyText = typeof LocalizationManager !== 'undefined' ?
                                LocalizationManager.t('empty', 'Пусто') : 'Пусто';
                            cellDiv.textContent = `○\n${emptyText}`;
                            cellDiv.style.cursor = 'pointer';
                            cellDiv.addEventListener('click', () => {
                                gardenSystem.plantSeed(idx, r, c);
                                this.showGardenModal();
                            });
                        }
                        
                        gardenDiv.appendChild(cellDiv);
                    });
                });
            }
            
            container.appendChild(gardenDiv);
        });
        
             
             if (seedsCount) {
                 const seedsLabel = typeof LocalizationManager !== 'undefined' ?
                     LocalizationManager.t('seedsCount', 'Семян') : 'Семян';
                 seedsCount.textContent = `${gardenSystem.getSeedCount()} ${seedsLabel}`;
             }
             
             
             modal.classList.remove('hidden');
             console.log('✅ Garden modal opened successfully');
         } catch (error) {
             console.error('❌ Error in showGardenModal:', error);
         }
     },

    


     setupForgeSystem() {
         try {
             const forgeBtn = document.getElementById('btnConfirmForge');
             if (!forgeBtn) {
                 console.warn('⚠️ btnConfirmForge not found yet, skipping Forge setup');
                 return;
             }

            forgeBtn.addEventListener('click', () => this.confirmForge());

            
            const forgeSlots = document.querySelectorAll('.forge-slot');
            forgeSlots.forEach(slot => {
                slot.addEventListener('dragover', e => this.handleForgeDragOver(e));
                slot.addEventListener('drop', e => this.handleForgeDrop(e));
                slot.addEventListener('dragleave', e => this.handleForgeDragLeave(e));
                slot.addEventListener('click', e => this.handleForgeSlotClick(e));
            });

            console.log('✅ Forge system initialized');
        } catch (err) {
            console.error('❌ Error initializing forge system:', err);
        }
    },

    forgeState: {
        target: null,
        sacrifices: []
    },

    handleForgeDragOver(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        e.currentTarget.classList.add('drag-over');
    },

    handleForgeDragLeave(e) {
        e.currentTarget.classList.remove('drag-over');
    },

    handleForgeDrop(e) {
        e.preventDefault();
        e.currentTarget.classList.remove('drag-over');

        const draggedCardId = e.dataTransfer.getData('cardId');
        const slotType = e.currentTarget.dataset.forgeSlot;

        if (!draggedCardId) return;

        
        const card = SaveManager.getCardById(draggedCardId);
        if (!card) return;

        const altarCards = SaveManager.getAltarCards();
        if (altarCards.find(c => c.instanceId === draggedCardId)) {
            this.showNotification(LocalizationManager.t('cardInAltar', 'Карта находится в алтаре'), 'error'); 
            return;
        }

        if (slotType === 'target') {
            
            if (this.forgeState.target) {
                
            }
            this.forgeState.target = draggedCardId;
            this.updateForgeDisplay();
        } else if (slotType.startsWith('sacrifice')) {
            
            if (!this.forgeState.sacrifices.includes(draggedCardId)) {
                if (this.forgeState.sacrifices.length < 4) {
                    this.forgeState.sacrifices.push(draggedCardId);
                }
            }
            this.updateForgeDisplay();
        }
    },

    handleForgeSlotClick(e) {
        const slot = e.currentTarget;
        const slotType = slot.dataset.forgeSlot;
        
        if (slotType === 'target' && this.forgeState.target) {
            
            const cardId = this.forgeState.target;
            if (this.forgeCardsCache && this.forgeCardsCache[cardId]) {
                SaveManager.addCard(this.forgeCardsCache[cardId]);
                delete this.forgeCardsCache[cardId];
            }
            this.forgeState.target = null;
            this.updateForgeDisplay();
            this.updateCardsDisplay();
        } else if (slotType.startsWith('sacrifice')) {
            
            const slotIndex = parseInt(slotType.slice(-1)) - 1;
            const cardId = this.forgeState.sacrifices[slotIndex];
            if (cardId) {
                if (this.forgeCardsCache && this.forgeCardsCache[cardId]) {
                    SaveManager.addCard(this.forgeCardsCache[cardId]);
                    delete this.forgeCardsCache[cardId];
                }
                this.forgeState.sacrifices.splice(slotIndex, 1);
                this.updateForgeDisplay();
                this.updateCardsDisplay();
            }
        }
        
        this.updateForgeDisplay();
    },

    updateForgeDisplay() {
        try {
            const targetSlot = document.getElementById('forgeTarget');
            const sacrificeSlots = [
                document.getElementById('forgeSacrifice1'),
                document.getElementById('forgeSacrifice2'),
                document.getElementById('forgeSacrifice3'),
                document.getElementById('forgeSacrifice4')
            ];
            const confirmBtn = document.getElementById('btnConfirmForge');
            const chanceDisplay = document.getElementById('forgeChanceValue');
            const warningDisplay = document.getElementById('forgeWarning');

            
            if (this.forgeState.target) {
                
                let card = this.forgeCardsCache ? this.forgeCardsCache[this.forgeState.target] : null;
                if (!card) card = SaveManager.getCardById(this.forgeState.target);
                
                if (card) {
                    const cardType = AVAILABLE_CARDS.find(c => c.id === card.id);
                    const cardName = cardType ? getLocalizedCardName(cardType) : card.name;
                    const starsDisplay = getStarsDisplay(card.stars);
                    targetSlot.innerHTML = `
                        <div class="card-icon">${card.icon}</div>
                        <div class="card-name">${cardName}</div>
                        <div class="tooltip-stars">${starsDisplay}</div>
                    `;
                    targetSlot.classList.add('filled');
                }
            } else {
                targetSlot.innerHTML = '';
                targetSlot.classList.remove('filled');
            }

            
            sacrificeSlots.forEach((slot, idx) => {
                if (this.forgeState.sacrifices[idx]) {
                    
                    let card = this.forgeCardsCache ? this.forgeCardsCache[this.forgeState.sacrifices[idx]] : null;
                    if (!card) card = SaveManager.getCardById(this.forgeState.sacrifices[idx]);
                    
                    if (card) {
                        const cardType = AVAILABLE_CARDS.find(c => c.id === card.id);
                        const cardName = cardType ? getLocalizedCardName(cardType) : card.name;
                        slot.innerHTML = `
                            <div class="card-icon">${card.icon}</div>
                            <div class="card-name">${cardName}</div>
                        `;
                        slot.classList.add('filled');
                    }
                } else {
                    slot.innerHTML = '';
                    slot.classList.remove('filled');
                }
            });

            
            const canForge = this.forgeState.target && this.forgeState.sacrifices.length > 0;
            confirmBtn.disabled = !canForge;
            
            if (canForge) {
                
                let targetCard = this.forgeCardsCache ? this.forgeCardsCache[this.forgeState.target] : null;
                if (!targetCard) targetCard = SaveManager.getCardById(this.forgeState.target);
                
                const sacrificeCards = this.forgeState.sacrifices.map(id => {
                    let card = this.forgeCardsCache ? this.forgeCardsCache[id] : null;
                    if (!card) card = SaveManager.getCardById(id);
                    return card;
                });
                
                const chance = SaveManager.calculateForgeChance(targetCard, sacrificeCards);
                
                chanceDisplay.textContent = `${chance}%`;
                chanceDisplay.style.color = chance === 100 ? '#2ecc71' : (chance >= 50 ? '#f39c12' : '#e74c3c');
                
                
                if (chance < 100) {
                    warningDisplay.style.display = 'block';
                } else {
                    warningDisplay.style.display = 'none';
                }
            } else {
                chanceDisplay.textContent = '0%';
                chanceDisplay.style.color = '#95a5a6';
                warningDisplay.style.display = 'none';
            }

            this.updateMobileForgeSummary();

        } catch (err) {
            console.error('❌ Error updating forge display:', err);
        }
    },

    async confirmForge() {
        try {
            if (!this.forgeState.target || this.forgeState.sacrifices.length === 0) {
                this.showNotification(LocalizationManager.t('forgeInvalid', 'Требуется 1 целевая карта и хотя бы 1 жертва'), 'error');
                return;
            }

            
            let targetCard = this.forgeCardsCache ? this.forgeCardsCache[this.forgeState.target] : null;
            if (!targetCard) targetCard = SaveManager.getCardById(this.forgeState.target);
            
            const sacrificeCards = this.forgeState.sacrifices.map(id => {
                let card = this.forgeCardsCache ? this.forgeCardsCache[id] : null;
                if (!card) card = SaveManager.getCardById(id);
                return card;
            });

            
            const confirmed = await this.showForgeConfirmation(targetCard, sacrificeCards);
            if (!confirmed) {
                return;
            }

            
            await this.animateForgeProcess();

            
            if (this.forgeCardsCache) {
                const targetId = this.forgeState.target;
                if (this.forgeCardsCache[targetId]) {
                    SaveManager.addCard(this.forgeCardsCache[targetId]);
                }
                this.forgeState.sacrifices.forEach(id => {
                    if (this.forgeCardsCache[id]) {
                        SaveManager.addCard(this.forgeCardsCache[id]);
                    }
                });
            }
            
            
            const result = SaveManager.upgradeCardInForge(
                this.forgeState.target,
                this.forgeState.sacrifices
            );

            
            this.forgeState.target = null;
            this.forgeState.sacrifices = [];
            this.forgeCardsCache = {};

            
            this.updateCardsScreen();
            this.updateForgeDisplay();
            this.refreshCardAchievements();

            if (!result.success) {
                
                if (result.failed) {
                    this.showNotification(result.error, 'error');
                } else {
                    this.showNotification(result.error || LocalizationManager.t('forgeError', 'Ошибка кузницы'), 'error');
                }
                return;
            }

            
            const cardName = getLocalizedCardName(result.upgradedCard);
            this.showNotification(
                `✅ ${cardName} → ${result.newStars}⭐`,
                '#FFD700'
            );

        } catch (err) {
            console.error('❌ Ошибка при улучшении карты:', err);
            this.showNotification(LocalizationManager.t('forgeUpgradeError', 'Ошибка при улучшении карты'), 'error'); 
        }
    },

    


    showForgeConfirmation(targetCard, sacrificeCards) {
        return new Promise((resolve) => {
            
            const targetCardType = AVAILABLE_CARDS.find(c => c.id === targetCard.id);
            const targetCardName = targetCardType ? getLocalizedCardName(targetCardType) : targetCard.name;
            
            const sacrificeCardsHTML = sacrificeCards.map(card => {
                const cardType = AVAILABLE_CARDS.find(c => c.id === card.id);
                const cardName = cardType ? getLocalizedCardName(cardType) : card.name;
                return `
                    <div style="display: inline-block; text-align: center; margin: 0 6px; vertical-align: top;">
                        <div style="font-size: 1.5em;">${card.icon}</div>
                        <div style="font-size: 0.8em;">${cardName}</div>
                    </div>
                `;
            }).join('');
            
            const dialogHTML = `
                <div id="forgeConfirmDialog" class="modal" style="position: fixed; inset: 0; z-index: 2000; background: rgba(0, 0, 0, 0.78);">
                    <div class="modal-content" style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); width: min(92vw, 420px); max-height: 88vh; overflow-y: auto; text-align: center;">
                        <h3 style="color: #FFD700; margin-bottom: 15px;">
                            ${LocalizationManager.t('forgeConfirmTitle')}
                        </h3>
                        
                        <div style="margin: 20px 0; padding: 15px; background: rgba(0,0,0,0.3); border-radius: 10px;">
                            <div style="margin-bottom: 10px;">
                                <strong>${LocalizationManager.t('forgeTargetLabel')}:</strong>
                                <div style="font-size: 2em; margin: 5px 0;">${targetCard.icon}</div>
                                <div>${targetCardName} ${'⭐'.repeat(targetCard.stars)}</div>
                            </div>
                            
                            <div style="margin-top: 15px;">
                                <strong>${LocalizationManager.t('forgeSacrificeLabel')}:</strong>
                                <div style="margin-top: 10px;">
                                    ${sacrificeCardsHTML}
                                </div>
                            </div>
                        </div>
                        
                        <div style="margin: 15px 0; padding: 10px; background: rgba(46, 204, 113, 0.2); border-radius: 5px;">
                            <strong style="color: #2ecc71;">${LocalizationManager.t('forgeChanceLabel', 'Шанс успеха:')} ${SaveManager.calculateForgeChance(targetCard, sacrificeCards)}%</strong>
                        </div>
                        
                        <p style="color: #e74c3c; font-weight: bold; margin: 15px 0;">
                            ⚠️ ${LocalizationManager.t('forgeConfirmWarning', 'Жертвенные карты будут потеряны безвозвратно!')}
                        </p>
                        
                        <div style="margin-top: 20px; text-align: center;">
                            <button id="forgeConfirmYes" class="btn btn-primary" style="background: linear-gradient(135deg, #e74c3c, #c0392b); margin-right: 10px; min-width: 72px;">
                                ${LocalizationManager.t('btnYes')}
                            </button>
                            <button id="forgeConfirmNo" class="btn btn-secondary" style="min-width: 72px;">
                                ${LocalizationManager.t('btnNo')}
                            </button>
                        </div>
                    </div>
                </div>
            `;

            
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = dialogHTML;
            document.body.appendChild(tempDiv.firstElementChild);

            const dialog = document.getElementById('forgeConfirmDialog');

            
            document.getElementById('forgeConfirmYes').addEventListener('click', () => {
                dialog.remove();
                resolve(true);
            });

            document.getElementById('forgeConfirmNo').addEventListener('click', () => {
                dialog.remove();
                resolve(false);
            });

            
            dialog.addEventListener('click', (e) => {
                if (e.target === dialog) {
                    dialog.remove();
                    resolve(false);
                }
            });
        });
    },

    


    animateForgeProcess() {
        return new Promise((resolve) => {
            
            const overlay = document.createElement('div');
            overlay.id = 'forgeAnimationOverlay';
            overlay.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                z-index: 3000;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                color: #FFD700;
            `;

            overlay.innerHTML = `
                <div style="font-size: 4em; margin-bottom: 20px;">🔨</div>
                <div style="font-size: 1.5em; margin-bottom: 30px;">
                    ${LocalizationManager.t('forgeInProgress')}
                </div>
                <div class="forge-progress" style="
                    width: 300px;
                    height: 10px;
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 5px;
                    overflow: hidden;
                ">
                    <div class="forge-progress-bar" style="
                        width: 0%;
                        height: 100%;
                        background: linear-gradient(90deg, #FFD700, #FFA500);
                        transition: width 2s ease-in-out;
                    "></div>
                </div>
            `;

            document.body.appendChild(overlay);

            
            setTimeout(() => {
                const progressBar = overlay.querySelector('.forge-progress-bar');
                if (progressBar) {
                    progressBar.style.width = '100%';
                }
            }, 100);

            
            setTimeout(() => {
                overlay.remove();
                resolve();
            }, 2500);
        });
    },

     


     setupCardTooltips() {
         try {
             
             document.removeEventListener('click', this.handleCardClick);
             
             
             this.handleCardClick = (e) => {
                 const card = e.target.closest('.card-item');
                 if (!card) return;
                 
                 const cardId = card.dataset.cardId;
                 if (cardId) {
                     this.showCardDetail(cardId);
                 }
             };
             
             document.addEventListener('click', this.handleCardClick);
             
             
             this.setupCardDetailModal();
             
             console.log('✅ Card click handlers initialized');
         } catch (err) {
             console.error('❌ Error initializing card clicks:', err);
         }
     },

    


    setupCardDetailModal() {
        const modal = document.getElementById('cardDetailModal');
        const closeBtn = document.getElementById('btnCloseCardDetail');
        
        if (!modal || !closeBtn) {
            console.warn('⚠️ Card detail modal elements not found');
            return;
        }
        
        
        closeBtn.addEventListener('click', () => {
            modal.classList.add('hidden');
        });
        
        
        modal.addEventListener('click', (e) => {
            if (this.isModalBackdropTarget(e, modal)) {
                modal.classList.add('hidden');
            }
        });
        
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
                modal.classList.add('hidden');
            }
        });
    },

    


    showCardDetail(card) {
        try {
            
            if (typeof card === 'string') {
                card = SaveManager.getCardById(card);
            }
            
            if (!card) {
                console.warn('⚠️ Card not found');
                return;
            }
            
            
            const cardType = AVAILABLE_CARDS.find(c => c.id === card.id);
            if (!cardType) {
                console.warn('⚠️ Card type not found:', card.id);
                return;
            }
            
            
            document.getElementById('cardDetailIcon').textContent = cardType.icon;
            
            const localizedName = typeof getLocalizedCardName !== 'undefined' 
                ? getLocalizedCardName(cardType) 
                : cardType.name;
            document.getElementById('cardDetailName').textContent = localizedName;
            
            const rarityEl = document.getElementById('cardDetailRarity');
            rarityEl.textContent = LocalizationManager.t(`rarity_${card.rarity}`, card.rarity.toUpperCase());
            rarityEl.className = 'card-detail-rarity ' + card.rarity;

            const showcaseEl = document.querySelector('#cardDetailModal .card-detail-showcase');
            if (showcaseEl) {
                showcaseEl.classList.remove('rarity-common', 'rarity-rare', 'rarity-epic');
                showcaseEl.classList.add(`rarity-${card.rarity}`);
            }
            
            
            const localizedDesc = typeof getLocalizedCardDescription !== 'undefined' 
                ? getLocalizedCardDescription(card) 
                : cardType.description;
            document.getElementById('cardDetailDescription').textContent = localizedDesc;
            
            
            const bonusText = getCardBonusWithStars(card);
            const bonusEl = document.getElementById('cardDetailBonus');
            if (bonusEl) {
                if (bonusText && bonusText.trim() !== localizedDesc.trim()) {
                    bonusEl.textContent = bonusText;
                    bonusEl.classList.remove('hidden');
                } else {
                    bonusEl.textContent = '';
                    bonusEl.classList.add('hidden');
                }
            }
            this.renderCardDetailTags(cardType);
            
            
            document.getElementById('cardDetailStars').innerHTML = getStarsDisplay(card.stars);
            
            
            const altarCards = SaveManager.getAltarCards();
            const isInAltar = altarCards.some(c => c.instanceId === card.instanceId);
            
            const btnAltar = document.getElementById('btnCardActionAltar');
            const btnRemoveAltar = document.getElementById('btnCardActionRemoveAltar');
            const btnForge = document.getElementById('btnCardActionForge');
            const btnSacrifice = document.getElementById('btnCardActionSacrifice');
            const btnBurn = document.getElementById('btnCardActionBurn');
            
            
            if (isInAltar) {
                btnAltar.classList.add('hidden');
                btnRemoveAltar.classList.remove('hidden');
            } else {
                btnAltar.classList.remove('hidden');
                btnRemoveAltar.classList.add('hidden');
            }
            
            
            const newBtnAltar = btnAltar.cloneNode(true);
            const newBtnRemoveAltar = btnRemoveAltar.cloneNode(true);
            const newBtnForge = btnForge.cloneNode(true);
            const newBtnSacrifice = btnSacrifice.cloneNode(true);
            const newBtnBurn = btnBurn.cloneNode(true);
            
            btnAltar.parentNode.replaceChild(newBtnAltar, btnAltar);
            btnRemoveAltar.parentNode.replaceChild(newBtnRemoveAltar, btnRemoveAltar);
            btnForge.parentNode.replaceChild(newBtnForge, btnForge);
            btnSacrifice.parentNode.replaceChild(newBtnSacrifice, btnSacrifice);
            btnBurn.parentNode.replaceChild(newBtnBurn, btnBurn);
            
            
            newBtnAltar.addEventListener('click', () => {
                this.handleCardAction(card, 'altar');
                document.getElementById('cardDetailModal').classList.add('hidden');
            });
            
            newBtnRemoveAltar.addEventListener('click', () => {
                this.handleCardAction(card, 'removeAltar');
                document.getElementById('cardDetailModal').classList.add('hidden');
            });
            
            newBtnForge.addEventListener('click', () => {
                this.handleCardAction(card, 'forgeTarget');
                document.getElementById('cardDetailModal').classList.add('hidden');
            });
            
            newBtnSacrifice.addEventListener('click', () => {
                this.handleCardAction(card, 'forgeSacrifice');
                document.getElementById('cardDetailModal').classList.add('hidden');
            });
            
            newBtnBurn.addEventListener('click', () => {
                this.handleCardAction(card, 'burn');
                document.getElementById('cardDetailModal').classList.add('hidden');
            });
            
            
            document.getElementById('cardDetailModal').classList.remove('hidden');
            this.syncModalScale('cardDetailModal');
            
        } catch (err) {
            console.error('❌ Error showing card detail:', err);
        }
    },

    


    populateChangelog() {
        try {
            const changelogContent = document.getElementById('changelogContent');
            const changelogHeader = document.querySelector('.changelog-header');
            const changelogToggle = document.getElementById('btnToggleChangelog');
            
            if (!changelogContent) return;

            const changelog = this.getChangelogEntries();

            changelogContent.innerHTML = changelog.map((entry, index) => `
                <div class="changelog-entry" style="animation-delay: ${index * 0.1}s;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
                        <span class="changelog-version">${entry.version}</span>
                        <span class="changelog-badge">${entry.badge}</span>
                    </div>
                    <ul style="margin: 5px 0; padding-left: 15px; list-style: none;">
                        ${entry.changes.map(change => `<li>• ${change}</li>`).join('')}
                    </ul>
                </div>
            `).join('');

            console.log('✅ Changelog populated');
        } catch (err) {
            console.error('❌ Error populating changelog:', err);
        }
    },

    


    toggleChangelog(isExpanded) {
        const changelogContent = document.getElementById('changelogContent');
        const changelogToggle = document.getElementById('btnToggleChangelog');
        const changelogPanel = document.querySelector('.changelog-panel');
        
        if (!changelogContent || !changelogToggle) return;
        
        if (isExpanded) {
            changelogContent.classList.remove('collapsed');
            changelogToggle.classList.remove('collapsed');
            changelogToggle.textContent = '▼';
            changelogPanel.style.maxHeight = '500px';
        } else {
            changelogContent.classList.add('collapsed');
            changelogToggle.classList.add('collapsed');
            changelogToggle.textContent = '▶';
            changelogPanel.style.maxHeight = '60px';
        }
        
        console.log('📜 Changelog:', isExpanded ? 'развёрнут' : 'свёрнут');
    },

    


    initVisualEffects() {
        console.log('✨ Initializing visual effects...');
        
        
        this.createParticles();
        
        
        this.createLightningEffect();
        
        
        this.createFogEffect();
        
        
        this.createMenuTower();
        
        console.log('✅ Visual effects initialized');
    },

    


    createParticles() {
        const mainMenu = document.getElementById('mainMenu');
        if (!mainMenu) return;
        
        
        const oldContainer = mainMenu.querySelector('.particles-container');
        if (oldContainer) oldContainer.remove();
        
        const container = document.createElement('div');
        container.className = 'particles-container';
        
        
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 15 + 's';
            particle.style.animationDuration = (15 + Math.random() * 10) + 's';
            
            
            const colors = [
                'rgba(218, 165, 32, 0.6)',
                'rgba(155, 89, 182, 0.6)',
                'rgba(255, 215, 0, 0.6)',
                'rgba(100, 200, 255, 0.5)'
            ];
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];
            particle.style.boxShadow = `0 0 10px ${particle.style.background}`;
            
            container.appendChild(particle);
        }
        
        mainMenu.insertBefore(container, mainMenu.firstChild);
    },

    


    createLightningEffect() {
        const mainMenu = document.getElementById('mainMenu');
        if (!mainMenu) return;
        
        
        const oldLightning = mainMenu.querySelector('.lightning-flash');
        if (oldLightning) oldLightning.remove();
        
        const lightning = document.createElement('div');
        lightning.className = 'lightning-flash';
        mainMenu.insertBefore(lightning, mainMenu.firstChild);
    },

    


    createFogEffect() {
        const mainMenu = document.getElementById('mainMenu');
        if (!mainMenu) return;
        
        
        const oldFog = mainMenu.querySelector('.fog-effect');
        if (oldFog) oldFog.remove();
        
        const fog = document.createElement('div');
        fog.className = 'fog-effect';
        mainMenu.appendChild(fog);
    },

    


    createMenuTower() {
        const menuContainer = document.querySelector('.menu-container');
        if (!menuContainer) return;
        
        
        const oldTower = menuContainer.querySelector('.menu-tower');
        if (oldTower) oldTower.remove();
        
        const tower = document.createElement('div');
        tower.className = 'menu-tower';
        menuContainer.insertBefore(tower, menuContainer.firstChild);
    },

    


    isModalBackdropTarget(event, modal) {
        if (!modal) return false;
        const target = event.target;
        return target === modal || target.classList.contains('screen-wrapper') || target.classList.contains('screen-content');
    },

    openMobileMainMenuPanel(panelType) {
        if (this.currentScreen !== 'mainMenu') {
            return;
        }

        const questPanel = document.getElementById('questPanel');
        const leaderboardPanel = document.querySelector('#mainMenu .leaderboard-panel');
        const overlay = document.getElementById('mobileMainMenuOverlay');
        if (!questPanel || !leaderboardPanel || !overlay) {
            return;
        }

        const targetPanel = panelType === 'leaderboard' ? leaderboardPanel : questPanel;
        questPanel.classList.remove('is-open');
        leaderboardPanel.classList.remove('is-open');

        targetPanel.classList.add('is-open');
        targetPanel.scrollTop = 0;
        document.documentElement.classList.add('mobile-main-panel-open');
        this._mobileMainPanelOpen = panelType === 'leaderboard' ? 'leaderboard' : 'quests';
    },

    closeMobileMainMenuPanel() {
        const questPanel = document.getElementById('questPanel');
        const leaderboardPanel = document.querySelector('#mainMenu .leaderboard-panel');
        const overlay = document.getElementById('mobileMainMenuOverlay');

        if (questPanel) {
            questPanel.classList.remove('is-open');
        }
        if (leaderboardPanel) {
            leaderboardPanel.classList.remove('is-open');
        }
        if (overlay) {
            overlay.classList.remove('is-active');
        }

        document.documentElement.classList.remove('mobile-main-panel-open');
        this._mobileMainPanelOpen = null;
    },

    setMobileMainMenuPage(page) {
        const normalizedPage = page === 'more' ? 'more' : 'main';
        this._mobileMainMenuPage = normalizedPage;

        const mainMenu = document.getElementById('mainMenu');
        const btnMain = document.getElementById('btnMobileMenuMainTab');
        const btnMore = document.getElementById('btnMobileMenuMoreTab');
        if (!mainMenu || this._layoutMode !== 'mobile') {
            return;
        }

        mainMenu.classList.toggle('mobile-menu-page-main', normalizedPage === 'main');
        mainMenu.classList.toggle('mobile-menu-page-more', normalizedPage === 'more');

        if (btnMain) {
            btnMain.classList.toggle('is-active', normalizedPage === 'main');
        }
        if (btnMore) {
            btnMore.classList.toggle('is-active', normalizedPage === 'more');
        }
    },

    syncMobileMainMenuState() {
        if (this._layoutMode !== 'mobile') {
            this.closeMobileMainMenuPanel();
            const mainMenu = document.getElementById('mainMenu');
            if (mainMenu) {
                mainMenu.classList.remove('mobile-menu-page-main');
                mainMenu.classList.remove('mobile-menu-page-more');
            }
            return;
        }

        this.setMobileMainMenuPage(this._mobileMainMenuPage || 'main');
    },

    




    updateLayoutMode() {
        
        
        const isPortrait = window.innerHeight > window.innerWidth;
        this._layoutMode = 'desktop';

        document.documentElement.classList.toggle('layout-mobile', this._layoutMode === 'mobile');
        document.documentElement.classList.toggle('layout-desktop', this._layoutMode === 'desktop');
        document.documentElement.classList.toggle('layout-phone', false);
        document.documentElement.classList.toggle('device-portrait', Boolean(isPortrait));
        document.documentElement.classList.toggle('device-landscape', !isPortrait);
        document.documentElement.classList.toggle('ultrawide-mobile', false);
        this.syncMobileMainMenuState();
    },

    runInitialScaleStabilization() {
        if (this._initialScaleStabilized) {
            return;
        }

        this._initialScaleStabilized = true;

        [0, 80, 180, 320, 650, 1000].forEach((delayMs) => {
            setTimeout(() => this.scheduleScaleSync(0), delayMs);
        });
    },

    waitForImageElement(image) {
        if (!image || typeof image !== 'object') {
            return Promise.resolve();
        }

        if (image.complete && image.naturalWidth > 0) {
            if (typeof image.decode === 'function') {
                return image.decode().catch(() => {});
            }
            return Promise.resolve();
        }

        return new Promise((resolve) => {
            const done = () => {
                image.removeEventListener('load', done);
                image.removeEventListener('error', done);
                resolve();
            };

            image.addEventListener('load', done, { once: true });
            image.addEventListener('error', done, { once: true });
        });
    },

    preloadImage(src) {
        if (!src) {
            return Promise.resolve();
        }

        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
                if (typeof img.decode === 'function') {
                    img.decode().catch(() => {}).finally(resolve);
                    return;
                }
                resolve();
            };
            img.onerror = () => resolve();
            img.src = src;
        });
    },

    waitForStartupAssets() {
        const logo = document.querySelector('#mainMenu .main-menu-logo');
        const logoDefault = logo && logo.dataset ? (logo.dataset.defaultSrc || 'assets/images/name.png') : 'assets/images/name.png';
        const logoRu = logo && logo.dataset ? (logo.dataset.ruSrc || 'assets/images/Ru_name.png') : 'assets/images/Ru_name.png';
        this.updateMainMenuLogo();

        return Promise.all([
            this.waitForImageElement(logo),
            this.preloadImage(logoDefault),
            this.preloadImage(logoRu),
            this.preloadImage('assets/images/menu-bg.jpg')
        ]).catch(() => {});
    },

    finalizeStartupReveal() {
        if (this._startupRevealDone) {
            return;
        }

        this._startupRevealDone = true;

        const reveal = async () => {
            await this.waitForStartupAssets();

            this.syncMainMenuScale();
            this.syncCurrentScreenScale();
            this.scheduleScaleSync(0);

            requestAnimationFrame(() => {
                this.syncMainMenuScale();
                requestAnimationFrame(() => {
                    this.syncMainMenuScale();

                    requestAnimationFrame(() => {
                        if (typeof window.__notifyStartupGameLoaded === 'function') {
                            window.__notifyStartupGameLoaded();
                        }

                        if (
                            window.__gpReadyLockRequired === false
                            && typeof window.__releaseStartupUi === 'function'
                            && window.LocalizationManager
                            && typeof LocalizationManager.isReady === 'function'
                            && LocalizationManager.isReady()
                        ) {
                            window.__releaseStartupUi();
                        }
                    });
                });
            });
        };

        if (document.fonts && document.fonts.ready) {
            document.fonts.ready.then(() => {
                setTimeout(() => {
                    reveal();
                }, 60);
            }).catch(() => {
                setTimeout(() => {
                    reveal();
                }, 60);
            });
            return;
        }

        setTimeout(() => {
            reveal();
        }, 60);
    },

    


    syncScreenScale(rootElement, wrapperSelector, contentSelector) {
        if (!rootElement) return;

        const wrapper = rootElement.querySelector(wrapperSelector);
        const content = rootElement.querySelector(contentSelector);

        if (!wrapper || !content) return;

        const rect = wrapper.getBoundingClientRect();
        if (rect.width <= 0 || rect.height <= 0) {
            this.scheduleScaleSync(50);
            return;
        }

        const baseWidth = 1920;
        const baseHeight = 1080;

        
        
        const isScaledMenuScreen = rootElement.classList.contains('screen-scaled') && rootElement.id !== 'mainMenu';
        const isMainMenuMobile = rootElement.id === 'mainMenu' && this._layoutMode === 'mobile';
        const isStageSelectModalMobile = rootElement.id === 'stageSelectModal' && this._layoutMode === 'mobile';
        const isModal = rootElement.classList.contains('modal');
        const scaleXOnly = rect.width / baseWidth;
        const requiredHeightForDesktopScale = baseHeight * scaleXOnly;
        const wouldCropInDesktopMode = rect.height < (requiredHeightForDesktopScale - 2);
        const shouldUseAdaptiveMenuLayout = this._layoutMode === 'mobile';

        if (((isScaledMenuScreen || isMainMenuMobile) && !isModal && shouldUseAdaptiveMenuLayout) || isStageSelectModalMobile) {
            content.style.transform = 'none';
            content.style.width = '100%';
            content.style.height = '100%';
            wrapper.style.overflow = 'hidden';
            return;
        }

        const scaleX = rect.width / baseWidth;
        const scaleY = rect.height / baseHeight;
        const isMainMenu = rootElement.id === 'mainMenu';
        const isMobileLandscape = window.innerWidth > window.innerHeight && window.innerHeight <= 700;

        let scale = Math.max(0.1, Math.min(scaleX, scaleY));
        let offsetX = Math.floor((rect.width - baseWidth * scale) / 2);
        let offsetY = Math.floor((rect.height - baseHeight * scale) / 2);

        if (isMainMenu) {
            
            scale = Math.round(scale * 100) / 100;
            offsetX = Math.floor((rect.width - baseWidth * scale) / 2);
            offsetY = Math.floor((rect.height - baseHeight * scale) / 2);
        }

        
        
        if (!isMainMenu && isMobileLandscape) {
            scale = Math.max(0.1, scaleX);
            offsetX = 0;
            offsetY = 0;
            wrapper.style.overflowY = 'auto';
            wrapper.style.overflowX = 'hidden';
        } else {
            wrapper.style.overflow = 'hidden';
        }

        content.style.transformOrigin = 'top left';
        content.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scale})`;
        content.style.width = `${baseWidth}px`;
        content.style.height = `${baseHeight}px`;
    },

    


    syncMainMenuScale() {
        this.syncScreenScale(document.getElementById('mainMenu'), '.main-menu-wrapper', '.main-menu-content');
    },

    


    syncCurrentScreenScale() {
        const current = this.screens[this.currentScreen];
        if (!current) return;

        if (current.classList.contains('screen-scaled')) {
            this.syncScreenScale(current, '.screen-wrapper', '.screen-content');
        }
    },

    


    syncModalScale(modalId) {
        const modal = document.getElementById(modalId);
        if (!modal || modal.classList.contains('hidden')) return;
        this.syncScreenScale(modal, '.screen-wrapper', '.screen-content');
    },

    


    syncVisibleModalsScale() {
        document.querySelectorAll('.modal:not(.hidden)').forEach((modal) => {
            this.syncScreenScale(modal, '.screen-wrapper', '.screen-content');
        });
    },

    



    scheduleScaleSync(delayMs = 0) {
        if (this._scaleSyncTimer) {
            clearTimeout(this._scaleSyncTimer);
            this._scaleSyncTimer = null;
        }

        const run = () => {
            if (this._scaleSyncRafId) {
                cancelAnimationFrame(this._scaleSyncRafId);
                this._scaleSyncRafId = null;
            }

            this._scaleSyncRafId = requestAnimationFrame(() => {
                this._scaleSyncRafId = null;
                this.updateLayoutMode();
                this.syncMainMenuScale();
                this.syncCurrentScreenScale();
                this.syncVisibleModalsScale();
            });
        };

        if (delayMs > 0) {
            this._scaleSyncTimer = setTimeout(() => {
                this._scaleSyncTimer = null;
                run();
            }, delayMs);
            return;
        }

        run();
    },

    



    disableNativeAchievementToastClicks() {
        const isNativeAchievementToast = (el) => {
            if (!el || el.nodeType !== 1) return false;

            const id = String(el.id || '').toLowerCase();
            const cls = String(el.className || '').toLowerCase();
            const marker = `${id} ${cls}`;

            
            const hasSdkMark = /\bgp\b|gamepush/.test(marker);
            const hasToastMark = /achiev|toast|notification/.test(marker);

            if (hasSdkMark && hasToastMark) {
                return true;
            }

            
            const style = window.getComputedStyle(el);
            const rect = el.getBoundingClientRect();
            const likelyTopToast =
                style.position === 'fixed' &&
                rect.top >= -20 &&
                rect.top < 220 &&
                rect.height > 24 &&
                rect.height < 240 &&
                rect.width < window.innerWidth * 0.95;

            return likelyTopToast;
        };

        const applyNoClick = (el) => {
            if (!el || el.nodeType !== 1) return;
            el.style.pointerEvents = 'none';
            el.style.userSelect = 'none';
            el.setAttribute('data-non-clickable-toast', '1');
        };

        const scan = (root) => {
            if (!root || root.nodeType !== 1) return;
            if (isNativeAchievementToast(root)) {
                applyNoClick(root);
            }

            const suspects = root.querySelectorAll('[id*="gp"], [class*="gp"], [id*="gamepush"], [class*="gamepush"]');
            suspects.forEach((node) => {
                if (isNativeAchievementToast(node)) {
                    applyNoClick(node);
                }
            });
        };

        scan(document.body);

        
        if (this._nativeToastObserver) {
            return;
        }

        this._nativeToastObserver = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === 1) {
                        scan(node);
                    }
                });
            });
        });

        this._nativeToastObserver.observe(document.body, {
            childList: true,
            subtree: true
        });
    },

    



    installNativeToastClickGuard() {
        if (this._nativeToastClickGuardBound) {
            return;
        }

        const handler = (event) => {
            const target = event.target;
            if (!(target instanceof Element)) {
                return;
            }

            
            if (target.closest('.menu-container, .game-ui, .modal-panel, #gameCanvas, .screen-content')) {
                return;
            }

            const suspect = target.closest('[class*="gp"], [id*="gp"], [class*="gamepush"], [id*="gamepush"], iframe');
            if (!suspect) {
                return;
            }

            const rect = suspect.getBoundingClientRect();
            const style = window.getComputedStyle(suspect);
            const likelyTopToast =
                style.position === 'fixed' &&
                rect.top >= -20 &&
                rect.top < 220 &&
                rect.height > 24 &&
                rect.height < 220 &&
                rect.width < window.innerWidth * 0.95;

            if (!likelyTopToast) {
                return;
            }

            event.preventDefault();
            event.stopPropagation();
            if (typeof event.stopImmediatePropagation === 'function') {
                event.stopImmediatePropagation();
            }
        };

        document.addEventListener('click', handler, true);
        document.addEventListener('touchstart', handler, true);

        this._nativeToastClickGuardBound = true;
    }
};


window.UI = UI;
window.UIManager = UI; 
