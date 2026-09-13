




const LeaderboardManager = {
    scoreField: 'score',
    scopedTag: 'STAGE_WAVES',
    mode: 'global',
    publicProfileFieldKey: 'publicprofile',
    selectedStage: 1,
    lastUpdateTime: 0,
    updateInterval: 30000,
    _initRetryCount: 0,
    _apiRetryCount: 0,
    _isLoading: false,
    _pollTimer: null,
    _pendingRefreshWhenVisible: false,
    _apiDiagnosticsLogged: false,

    getGp() {
        return window.GP || window.__GP_SDK_INSTANCE || window.gp || null;
    },

    logApiDiagnostics(gpInstance = null) {
        if (this._apiDiagnosticsLogged) {
            return;
        }

        const gp = gpInstance || this.getGp();
        const api = gp && gp.leaderboard ? gp.leaderboard : null;
        if (!api) {
            return;
        }

        this._apiDiagnosticsLogged = true;
        console.log('🔎 Leaderboard API diagnostics:', {
            hasLeaderboardApi: true,
            hasFetch: typeof api.fetch === 'function',
            hasFetchScoped: typeof api.fetchScoped === 'function',
            hasFetchPlayerRating: typeof api.fetchPlayerRating === 'function',
            hasFetchPlayerRatingScoped: typeof api.fetchPlayerRatingScoped === 'function',
            hasPublishRecord: typeof api.publishRecord === 'function'
        });
    },

    t(key, fallback, ...args) {
        if (typeof LocalizationManager !== 'undefined' && typeof LocalizationManager.t === 'function') {
            return LocalizationManager.t(key, fallback, ...args);
        }

        return args.reduce((text, arg, index) => {
            return String(text).replace(`{${index}}`, arg);
        }, fallback);
    },

    getMaxStageCount() {
        if (typeof SaveManager !== 'undefined' && SaveManager && typeof SaveManager.getStageCount === 'function') {
            return Math.max(1, Math.floor(SaveManager.getStageCount() || 1));
        }

        return 5;
    },

    normalizeStage(stage) {
        const maxStage = this.getMaxStageCount();
        if (!Number.isFinite(stage)) {
            return 1;
        }

        return Math.max(1, Math.min(maxStage, Math.floor(stage)));
    },

    resolveSelectedStage() {
        const fromSave = (
            typeof SaveManager !== 'undefined'
            && SaveManager
            && typeof SaveManager.getSelectedStage === 'function'
        )
            ? Number(SaveManager.getSelectedStage())
            : 1;

        const candidate = Number(this.selectedStage || fromSave || 1);
        this.selectedStage = this.normalizeStage(candidate);
        return this.selectedStage;
    },

    getScopedVariant(stage) {
        return `STAGE_${this.normalizeStage(stage)}`;
    },

    isScopedFetchSupported(api) {
        return Boolean(api && typeof api.fetchScoped === 'function');
    },

    isScopedPublishSupported(api) {
        return Boolean(api && typeof api.publishRecord === 'function');
    },

    resolveActiveMode(api) {
        if (this.mode === 'scoped' && this.isScopedFetchSupported(api)) {
            return 'scoped';
        }

        return 'global';
    },

    hasPublicProfileField() {
        if (window.AuthManager && typeof AuthManager.hasPlayerField === 'function') {
            return AuthManager.hasPlayerField(this.publicProfileFieldKey);
        }

        const gp = this.getGp();
        const gpPlayer = gp && gp.player ? gp.player : null;
        if (!gpPlayer) {
            return false;
        }

        if (Array.isArray(gpPlayer.fields)) {
            return gpPlayer.fields.some((field) => field && field.key === this.publicProfileFieldKey);
        }

        return false;
    },

    getIncludeFields(baseFields = []) {
        const fields = Array.isArray(baseFields) ? baseFields.slice() : [];
        if (this.hasPublicProfileField()) {
            fields.push(this.publicProfileFieldKey);
        }

        return fields;
    },

    buildFetchParams() {
        return {
            orderBy: [this.scoreField],
            order: 'DESC',
            limit: 10,
            includeFields: this.getIncludeFields(['rank']),
            withMe: 'none',
            showNearest: 0
        };
    },

    buildScopedFetchParams() {
        const stage = this.resolveSelectedStage();
        return {
            tag: this.scopedTag,
            variant: this.getScopedVariant(stage),
            order: 'DESC',
            limit: 10,
            includeFields: this.getIncludeFields(['rank']),
            withMe: 'none',
            showNearest: 0
        };
    },

    hasPlayerIdentity() {
        const gp = this.getGp();
        if (!gp || !gp.player || typeof gp.player.get !== 'function') {
            return false;
        }

        if (gp.player.isLoggedIn !== true) {
            return false;
        }

        const playerId = gp.player.get('id');
        return playerId !== undefined && playerId !== null && String(playerId) !== '';
    },

    isLeaderboardVisible() {
        const container = document.getElementById('leaderboardContent');
        const panel = document.querySelector('#mainMenu .leaderboard-panel');
        const mainMenu = document.getElementById('mainMenu');

        if (!container || !panel || !mainMenu) {
            return false;
        }

        const uiOnMainMenu = !window.UI || UI.currentScreen === 'mainMenu';
        const menuActive = mainMenu.classList.contains('active') && mainMenu.style.display !== 'none';
        const panelVisible = panel.style.display !== 'none';

        return uiOnMainMenu && menuActive && panelVisible && !document.hidden;
    },

    startPolling() {
        if (this._pollTimer) {
            clearInterval(this._pollTimer);
        }

        this._pollTimer = setInterval(() => {
            if (!this.isLeaderboardVisible()) {
                return;
            }
            this.loadLeaderboard();
        }, this.updateInterval);
    },

    async fetchLeaderboardData(api, mode) {
        if (mode === 'scoped') {
            return api.fetchScoped(this.buildScopedFetchParams());
        }

        return api.fetch(this.buildFetchParams());
    },

    getErrorText(error) {
        return String((error && (error.code || error.message || error.status || error.error)) || '').toLowerCase();
    },

    async fetchPublicTopFallback(api, mode) {
        if (mode === 'scoped') {
            return api.fetchScoped({
                tag: this.scopedTag,
                variant: this.getScopedVariant(this.resolveSelectedStage()),
                order: 'DESC',
                limit: 10,
                includeFields: this.getIncludeFields([]),
                withMe: 'none'
            });
        }

        return api.fetch({
            orderBy: [this.scoreField],
            order: 'DESC',
            limit: 10,
            includeFields: this.getIncludeFields([]),
            withMe: 'none'
        });
    },

    async fetchPlayerRating(api, mode) {
        if (!this.hasPlayerIdentity()) {
            return null;
        }

        try {
            if (mode === 'scoped' && typeof api.fetchPlayerRatingScoped === 'function') {
                const stage = this.resolveSelectedStage();
                return await api.fetchPlayerRatingScoped({
                    tag: this.scopedTag,
                    variant: this.getScopedVariant(stage),
                    includeFields: this.getIncludeFields(['rank']),
                    showNearest: 2
                });
            }

            if (mode === 'global' && typeof api.fetchPlayerRating === 'function') {
                return await api.fetchPlayerRating({
                    orderBy: [this.scoreField],
                    order: 'DESC',
                    includeFields: this.getIncludeFields(['rank']),
                    showNearest: 2
                });
            }
        } catch (err) {
            const errorText = this.getErrorText(err);
            if (errorText.includes('player_not_found')) {
                return null;
            }
            console.warn('⚠️ Не удалось получить рейтинг игрока:', err);
        }

        return null;
    },

    


    async init() {
        try {
            const gp = this.getGp();
            if (!gp) {
                this._initRetryCount += 1;
                setTimeout(() => this.init(), 250);
                return;
            }

            if (window.__gpPlayerReadyPromise && typeof window.__gpPlayerReadyPromise.then === 'function') {
                try {
                    await window.__gpPlayerReadyPromise;
                } catch (_) {
                    
                }
            }

            this._initRetryCount = 0;
            this.resolveSelectedStage();
            this.logApiDiagnostics(gp);

            console.log('✅ Leaderboard GamePush готов к использованию');
            this.startPolling();

            if (this.isLeaderboardVisible()) {
                await this.loadLeaderboard(true);
            } else {
                this._pendingRefreshWhenVisible = true;
            }
        } catch (err) {
            console.error('❌ Ошибка инициализации Leaderboard:', err);
            this.showError();
        }
    },

    


    async loadLeaderboard(force = false) {
        const container = document.getElementById('leaderboardContent');
        if (!container) {
            return;
        }

        if (!this.isLeaderboardVisible()) {
            this._pendingRefreshWhenVisible = true;
            return;
        }

        if (this._isLoading) {
            return;
        }

        const now = Date.now();
        if (!force && now - this.lastUpdateTime < 5000) {
            return;
        }
        this.lastUpdateTime = now;
        this._isLoading = true;
        this._pendingRefreshWhenVisible = false;

        container.innerHTML = `
            <div class="leaderboard-loading">
                <div class="spinner"></div>
                <p>${this.t('loading', 'Загрузка...')}</p>
            </div>
        `;

        try {
            const leaderboardApi = this.getLeaderboardApi();

            if (!leaderboardApi) {
                this._apiRetryCount += 1;
                if (this._apiRetryCount <= 20) {
                    setTimeout(() => this.loadLeaderboard(true), 500);
                    return;
                }

                this.showUnavailable(this.mode === 'scoped');
                return;
            }

            this._apiRetryCount = 0;

            const scopedSupported = this.isScopedFetchSupported(leaderboardApi);
            let activeMode = this.resolveActiveMode(leaderboardApi);
            let fallbackNotice = false;
            let result = null;
            try {
                result = await this.fetchLeaderboardData(leaderboardApi, activeMode);
            } catch (scopedErr) {
                const errorText = this.getErrorText(scopedErr);

                if (errorText.includes('player_not_found')) {
                    console.warn('⚠️ Leaderboard fetch вернул player_not_found, используем public top fallback');
                    try {
                        result = await this.fetchPublicTopFallback(leaderboardApi, activeMode);
                    } catch (publicTopErr) {
                        if (activeMode === 'scoped') {
                            console.warn('⚠️ Scoped public top недоступен, используем global public fallback:', publicTopErr);
                            this.mode = 'global';
                            activeMode = 'global';
                            fallbackNotice = true;
                            result = await this.fetchPublicTopFallback(leaderboardApi, activeMode);
                        } else {
                            throw publicTopErr;
                        }
                    }
                } else if (activeMode === 'scoped') {
                    console.warn('⚠️ Scoped leaderboard недоступен, используем global fallback:', scopedErr);
                    this.mode = 'global';
                    activeMode = 'global';
                    fallbackNotice = true;

                    result = await this.fetchLeaderboardData(leaderboardApi, activeMode);
                } else {
                    throw scopedErr;
                }
            }

            this.renderLeaderboard(result, null, activeMode, {
                scopedSupported,
                fallbackNotice
            });
        } catch (err) {
            const errorText = this.getErrorText(err);
            if (errorText.includes('player_not_found')) {
                console.warn('⚠️ Leaderboard остается недоступен для guest top:', err);
                this.showNotAuthorized();
                return;
            }

            console.error('❌ Ошибка загрузки Leaderboard:', err);
            this.showError();
        } finally {
            this._isLoading = false;
        }
    },

    



    getLeaderboardApi() {
        const gp = this.getGp();
        if (!gp) {
            return null;
        }

        const api = gp.leaderboard || null;
        if (!api || typeof api.fetch !== 'function') {
            return null;
        }

        return api;
    },

    



    renderLeaderboard(data, ratingData, activeMode, meta = {}) {
        const container = document.getElementById('leaderboardContent');
        if (!container) {
            return;
        }

        const scopedSupported = Boolean(meta && meta.scopedSupported);
        const fallbackNotice = Boolean(meta && meta.fallbackNotice);

        const players = Array.isArray(data?.topPlayers)
            ? data.topPlayers
            : (Array.isArray(data?.players) ? data.players : []);

        const toolbarHtml = this.renderToolbar(activeMode, scopedSupported);
        const ratingHtml = this.renderRatingCard(data, ratingData, activeMode, players);
        const fallbackHtml = fallbackNotice
            ? `<div class="leaderboard-note">${this.t('leaderboardScopedFallback', 'Scoped-лидерборд недоступен, показан общий рейтинг')}</div>`
            : '';

        if (!players.length) {
            container.innerHTML = `
                ${toolbarHtml}
                ${fallbackHtml}
                ${ratingHtml}
                <div class="leaderboard-empty">
                    <p style="font-size: 3em; margin-bottom: 10px;">🏆</p>
                    <p>${this.t('leaderboardEmpty', 'Пока никто не установил рекорд')}</p>
                </div>
            `;
            this.bindToolbarControls(container, scopedSupported);
            return;
        }

        const gp = this.getGp();
        const currentPlayerId = gp?.player?.get
            ? gp.player.get('id')
            : null;
        const localCurrentPlayerInfo = currentPlayerId && window.AuthManager && typeof AuthManager.getPlayerInfo === 'function'
            ? AuthManager.getPlayerInfo()
            : null;
        const localCurrentPublicProfile = currentPlayerId && window.AuthManager && typeof AuthManager.buildPublicProfileSnapshot === 'function'
            ? AuthManager.buildPublicProfileSnapshot()
            : null;
        this._renderedPlayersById = new Map();

        const html = players.map((player, index) => {
            const position = player.position || (index + 1);
            const score = Number(player[this.scoreField] ?? player.score ?? 0);
            const isCurrentPlayer = currentPlayerId && Number(player.id) === Number(currentPlayerId);
            const resolvedPlayer = isCurrentPlayer && localCurrentPlayerInfo
                ? {
                    ...player,
                    name: localCurrentPlayerInfo.name || player.name,
                    avatar: localCurrentPlayerInfo.avatar || player.avatar,
                    publicProfile: localCurrentPublicProfile || player[this.publicProfileFieldKey] || player.publicProfile
                }
                : player;
            const publicProfile = isCurrentPlayer && localCurrentPublicProfile
                ? localCurrentPublicProfile
                : this.getResolvedPublicProfile(resolvedPlayer.publicProfile || resolvedPlayer[this.publicProfileFieldKey]);
            const backgroundClass = this.getProfileBackgroundClass(publicProfile.backgroundId);
            const frameClass = this.getProfileFrameClass(publicProfile.frameId);

            let rankIcon = `#${position}`;
            if (position === 1) {
                rankIcon = '🥇 1';
            } else if (position === 2) {
                rankIcon = '🥈 2';
            } else if (position === 3) {
                rankIcon = '🥉 3';
            }

            const safeAvatar = resolvedPlayer.avatar || 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Ccircle cx=%2250%22 cy=%2250%22 r=%2250%22 fill=%22%2395a5a6%22/%3E%3C/svg%3E';
            const safeName = this.escapeHtml(resolvedPlayer.name || this.t('playerFallbackName', 'Player'));
            const playerId = resolvedPlayer.id !== undefined && resolvedPlayer.id !== null ? String(resolvedPlayer.id) : '';
            if (playerId) {
                this._renderedPlayersById.set(playerId, resolvedPlayer);
            }

            return `
                <div class="leaderboard-item ${backgroundClass} rank-${position} ${isCurrentPlayer ? 'current-player' : ''}" data-player-id="${this.escapeHtml(playerId)}" style="animation-delay: ${position * 0.05}s;">
                    <div class="rank">${rankIcon}</div>
                    <div class="leaderboard-avatar-shell ${frameClass}">
                        <img src="${safeAvatar}" alt="${safeName}" class="player-avatar">
                    </div>
                    <div class="player-info">
                        <div class="player-name">${safeName}</div>
                        <div class="player-score">
                            <span class="wave-icon" aria-hidden="true"></span>
                             ${this.t('wave', 'Wave')} ${score}
                         </div>
                     </div>
                 </div>
             `;
        }).join('');

        container.innerHTML = `
            ${toolbarHtml}
            ${fallbackHtml}
            ${ratingHtml}
            <div class="leaderboard-list">
                ${html}
            </div>
        `;

        this.bindToolbarControls(container, scopedSupported);
        this.bindProfileCards(container, currentPlayerId);
    },

    getResolvedPublicProfile(rawValue) {
        if (window.AuthManager && typeof AuthManager.parsePublicProfileValue === 'function') {
            return AuthManager.parsePublicProfileValue(rawValue);
        }

        return {
            frameId: 'frame_default',
            backgroundId: 'bg_default'
        };
    },

    getProfileFrameClass(frameId) {
        if (window.UI && typeof UI.getProfileFrameClass === 'function') {
            return UI.getProfileFrameClass(frameId);
        }

        return 'profile-frame--frame_default';
    },

    getProfileBackgroundClass(backgroundId) {
        if (window.UI && typeof UI.getProfileBackgroundClass === 'function') {
            return UI.getProfileBackgroundClass(backgroundId);
        }

        return 'profile-bg--bg_default';
    },

    bindProfileCards(container, currentPlayerId) {
        const rows = container.querySelectorAll('.leaderboard-item[data-player-id]');
        rows.forEach((row) => {
            row.addEventListener('click', async () => {
                const playerId = String(row.dataset.playerId || '').trim();
                if (!playerId) {
                    return;
                }

                if (currentPlayerId && Number(playerId) === Number(currentPlayerId)) {
                    if (window.UI && typeof UI.openSelfProfileModal === 'function') {
                        UI.openSelfProfileModal();
                    }
                    return;
                }

                const player = this._renderedPlayersById && this._renderedPlayersById.get(playerId);
                if (!player) {
                    return;
                }

                await this.openPlayerProfile(player);
            });
        });
    },

    async openPlayerProfile(player) {
        if (!window.UI || typeof UI.openPlayerProfileModal !== 'function') {
            return;
        }

        let resolvedPlayer = player;
        let publicProfile = player.publicProfile || player[this.publicProfileFieldKey] || null;
        const gp = this.getGp();
        const canFetchPlayers = gp && gp.players && typeof gp.players.fetch === 'function';

        if (!publicProfile && canFetchPlayers && player && player.id !== undefined && player.id !== null) {
            try {
                const result = await gp.players.fetch({ ids: [Number(player.id)] });
                const fetchedPlayer = Array.isArray(result && result.players) ? result.players[0] : null;
                if (fetchedPlayer && fetchedPlayer.state) {
                    resolvedPlayer = {
                        ...player,
                        name: fetchedPlayer.state.name || player.name,
                        avatar: fetchedPlayer.state.avatar || player.avatar,
                        publicProfile: fetchedPlayer.state[this.publicProfileFieldKey] || fetchedPlayer.state.publicProfile || publicProfile
                    };
                    publicProfile = resolvedPlayer.publicProfile || null;
                }
            } catch (error) {
                console.warn('⚠️ Не удалось получить публичный профиль игрока:', error);
            }
        }

        UI.openPlayerProfileModal({
            id: resolvedPlayer.id,
            name: resolvedPlayer.name,
            avatar: resolvedPlayer.avatar
        }, publicProfile, { isSelf: false });
    },

    renderToolbar(activeMode, scopedSupported) {
        const maxStage = this.getMaxStageCount();
        const selectedStage = this.resolveSelectedStage();
        const stageOptions = [];

        for (let stage = 1; stage <= maxStage; stage += 1) {
            const selected = stage === selectedStage ? 'selected' : '';
            stageOptions.push(
                `<option value="${stage}" ${selected}>${this.t('stageLabel', 'Стадия {0}', stage)}</option>`
            );
        }

        return `
            <div class="leaderboard-toolbar">
                <div class="leaderboard-mode-group" role="group" aria-label="${this.t('leaderboardModeAria', 'Leaderboard mode')}">
                    <button
                        class="leaderboard-mode-btn ${activeMode === 'global' ? 'is-active' : ''}"
                        data-mode="global"
                        type="button"
                    >
                        ${this.t('leaderboardModeGlobal', 'Общий')}
                    </button>
                    <button
                        class="leaderboard-mode-btn ${activeMode === 'scoped' ? 'is-active' : ''}"
                        data-mode="scoped"
                        type="button"
                        ${scopedSupported ? '' : 'disabled'}
                    >
                        ${this.t('leaderboardModeStage', 'По стадиям')}
                    </button>
                </div>
                <div class="leaderboard-stage-wrap ${activeMode === 'scoped' ? '' : 'hidden'}">
                    <label class="leaderboard-stage-label" for="leaderboardStageSelect">${this.t('leaderboardStage', 'Стадия')}</label>
                    <select id="leaderboardStageSelect" class="leaderboard-stage-select" ${activeMode === 'scoped' ? '' : 'disabled'}>
                        ${stageOptions.join('')}
                    </select>
                </div>
            </div>
        `;
    },

    bindToolbarControls(container, scopedSupported) {
        const modeButtons = container.querySelectorAll('.leaderboard-mode-btn[data-mode]');
        modeButtons.forEach((btn) => {
            btn.addEventListener('click', () => {
                const requestedMode = btn.dataset.mode === 'scoped' ? 'scoped' : 'global';
                if (requestedMode === 'scoped' && !scopedSupported) {
                    return;
                }

                if (this.mode === requestedMode) {
                    return;
                }

                this.mode = requestedMode;
                this.loadLeaderboard(true);
            });
        });

        const stageSelect = container.querySelector('#leaderboardStageSelect');
        if (stageSelect) {
            stageSelect.addEventListener('change', () => {
                const stage = this.normalizeStage(Number(stageSelect.value));
                if (this.selectedStage === stage) {
                    return;
                }

                this.selectedStage = stage;
                if (this.mode === 'scoped') {
                    this.loadLeaderboard(true);
                }
            });
        }
    },

    resolveCurrentPlayer(data, ratingData, players, currentPlayerId) {
        if (ratingData && ratingData.player) {
            return ratingData.player;
        }

        if (data && data.player) {
            return data.player;
        }

        if (currentPlayerId) {
            const matchedPlayer = players.find((player) => Number(player.id) === Number(currentPlayerId));
            if (matchedPlayer) {
                return matchedPlayer;
            }
        }

        return null;
    },

    renderRatingCard(data, ratingData, activeMode, players) {
        if (!this.hasPlayerIdentity()) {
            return '';
        }

        const gp = this.getGp();
        const currentPlayerId = gp?.player?.get
            ? gp.player.get('id')
            : null;

        const currentPlayer = this.resolveCurrentPlayer(data, ratingData, players, currentPlayerId);
        const localCurrentPlayerInfo = currentPlayerId && window.AuthManager && typeof AuthManager.getPlayerInfo === 'function'
            ? AuthManager.getPlayerInfo()
            : null;
        const stage = this.resolveSelectedStage();

        const title = activeMode === 'scoped'
            ? this.t('leaderboardMyRatingStage', 'Мое место на стадии {0}', stage)
            : this.t('leaderboardMyRating', 'Мое место в общем рейтинге');

        const hasPosition = currentPlayer && Number.isFinite(Number(currentPlayer.position));
        const position = hasPosition
            ? `#${Math.max(1, Math.floor(Number(currentPlayer.position)))}`
            : this.t('leaderboardRankUnavailable', '—');

        const hasScore = currentPlayer && Number.isFinite(Number(currentPlayer[this.scoreField] ?? currentPlayer.score));
        const score = hasScore
            ? `${this.t('wave', 'Волна')} ${Math.max(0, Math.floor(Number(currentPlayer[this.scoreField] ?? currentPlayer.score)))}`
            : this.t('leaderboardRankUnavailable', '—');

        const playerName = currentPlayer
            ? this.escapeHtml((currentPlayerId && currentPlayer && Number(currentPlayer.id) === Number(currentPlayerId) && localCurrentPlayerInfo && localCurrentPlayerInfo.name)
                ? localCurrentPlayerInfo.name
                : (currentPlayer.name || 'Player'))
            : this.t('leaderboardRankUnavailable', '—');

        return `
            <div class="leaderboard-my-rating">
                <div class="leaderboard-my-rating-title">${title}</div>
                <div class="leaderboard-my-rating-row">
                    <span class="leaderboard-my-rating-position">${position}</span>
                    <span class="leaderboard-my-rating-name">${playerName}</span>
                    <span class="leaderboard-my-rating-score">${score}</span>
                </div>
            </div>
        `;
    },

    


    showError() {
        const container = document.getElementById('leaderboardContent');
        if (!container) {
            return;
        }

        container.innerHTML = `
            <div class="leaderboard-error">
                <p style="font-size: 2em; margin-bottom: 10px;">❌</p>
                <p>${this.t('leaderboardError', 'Ошибка загрузки таблицы лидеров')}</p>
                <button class="btn btn-secondary" onclick="LeaderboardManager.loadLeaderboard()" style="margin-top: 15px;">
                    🔄 ${this.t('retry', 'Повторить')}
                </button>
            </div>
        `;
    },

    


    showUnavailable(isScopedMode = false) {
        const container = document.getElementById('leaderboardContent');
        if (!container) {
            return;
        }

        const extraHint = isScopedMode
            ? `
                <p style="font-size: 0.85em; color: #95a5a6; margin-top: 8px; line-height: 1.4;">
                    ${this.t('leaderboardHintScoped', 'For scoped mode create a table with tag {0} and field {1}').replace('{0}', `<b>${this.escapeHtml(this.scopedTag)}</b>`).replace('{1}', `<b>${this.escapeHtml(this.scoreField)}</b>`)}
                </p>
            `
            : `
                <p style="font-size: 0.85em; color: #95a5a6; margin-top: 8px; line-height: 1.4;">
                    ${this.t('leaderboardHintYandex', 'For Yandex platform a leaderboard with technical name {0} is required').replace('{0}', `<b>${this.escapeHtml(this.scoreField)}</b>`)}
                </p>
            `;

        container.innerHTML = `
            <div class="leaderboard-error">
                <p style="font-size: 2em; margin-bottom: 10px;">⚠️</p>
                <p>${this.t('leaderboardError', 'Лидерборд временно недоступен')}</p>
                ${extraHint}
                <button class="btn btn-secondary" onclick="LeaderboardManager.loadLeaderboard()" style="margin-top: 15px;">
                    🔄 ${this.t('retry', 'Повторить')}
                </button>
            </div>
        `;
    },

    


    showNotAuthorized() {
        const container = document.getElementById('leaderboardContent');
        if (!container) {
            return;
        }

        container.innerHTML = `
            <div class="leaderboard-empty">
                <p style="font-size: 3em; margin-bottom: 10px;">🏆</p>
                <p>${this.t('leaderboardEmpty', 'Пока никто не установил рекорд')}</p>
                <button id="btnLeaderboardAuth" class="btn btn-primary" style="margin-top: 15px;">
                    🔐 ${this.t('btnAuth', 'Авторизоваться')}
                </button>
                <p style="font-size: 0.85em; color: #95a5a6; margin-top: 10px;">
                    ${this.t('leaderboardAuthHint', 'Авторизуйтесь, чтобы попасть в рейтинг')}
                </p>
            </div>
        `;

        const authBtn = document.getElementById('btnLeaderboardAuth');
        if (authBtn) {
            authBtn.addEventListener('click', () => {
                if (window.AuthManager && AuthManager.showAuthDialog) {
                    AuthManager.showAuthDialog();
                }
            });
        }
    },

    




    async setScore(wave, stage) {
        try {
            const gp = this.getGp();
            if (!gp || !gp.player || typeof gp.player.get !== 'function' || typeof gp.player.set !== 'function') {
                return;
            }

            const normalizedWave = Number.isFinite(Number(wave))
                ? Math.max(0, Math.floor(Number(wave)))
                : 0;
            const normalizedStage = this.normalizeStage(Number(stage));

            const currentScore = Number(gp.player.get(this.scoreField) || 0);
            const nextScore = Math.max(currentScore, normalizedWave);

            gp.player.set(this.scoreField, nextScore);

            const scopedPublished = await this.publishScopedRecord(normalizedWave, normalizedStage);

            if (typeof SeasonSystem !== 'undefined' && SeasonSystem && typeof SeasonSystem.addPoints === 'function' && normalizedWave > 0) {
                SeasonSystem.addPoints(12 + Math.max(0, normalizedStage - 1) * 3);
            }

            console.log(`✅ Счёт записан в GamePush leaderboard: Wave ${nextScore}, stage=${normalizedStage}, scoped=${scopedPublished}`);

            this._pendingRefreshWhenVisible = true;
        } catch (err) {
            console.error('❌ Ошибка отправки счёта в GamePush:', err);
        }
    },

    





    async publishScopedRecord(wave, stage) {
        const api = this.getLeaderboardApi();
        const gp = this.getGp();
        if (!this.isScopedPublishSupported(api) || !gp || !gp.player || gp.player.isLoggedIn !== true) {
            return false;
        }

        const normalizedWave = Number.isFinite(Number(wave))
            ? Math.max(0, Math.floor(Number(wave)))
            : 0;
        const normalizedStage = this.normalizeStage(Number(stage));

        try {
            await api.publishRecord({
                tag: this.scopedTag,
                variant: this.getScopedVariant(normalizedStage),
                record: {
                    [this.scoreField]: normalizedWave
                }
            });

            return true;
        } catch (err) {
            console.warn('⚠️ Ошибка публикации scoped рекорда:', err);
            return false;
        }
    },

    




    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
};

window.LeaderboardManager = LeaderboardManager;
