/**
 * LeaderboardService - service for GamePush leaderboards and local/cloud win tracking.
 */
(function(global) {
    'use strict';

    const STORAGE_KEY = 'ttm_leaderboard_stats';
    const CLOUD_WINS_KEY = 'wins';
    const WINS_RETRY_MS = 5000;

    // GamePush leaderboard config (ID: 28636, tag: wins)
    const LEADERBOARD_ID = 28636;
    const LEADERBOARD_FIELD = 'wins';

    const state = {
        gp: null,
        initialized: false,
        stats: null,
        currentGame: null,
        winsSyncPendingValue: null,
        winsRetryTimer: null,
        winsSyncChain: Promise.resolve(),
        cloudWinsHydrated: false,
        lastKnownCloudWins: 0,
    };

    // === Date helpers ===

    function getTodayVariant() {
        return new Date().toLocaleString('en', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        });
    }

    function getWeekVariant() {
        const d = new Date();
        const firstDay = new Date(d.getFullYear(), 0, 1);
        const pastDays = (d - firstDay) / 86400000;
        const weekNum = Math.ceil((pastDays + firstDay.getDay() + 1) / 7);
        return `WEEK_${weekNum}/${d.getFullYear()}`;
    }

    function getTodayKey() {
        return new Date().toISOString().split('T')[0];
    }

    function normalizeWins(value) {
        const n = Number(value);
        if (!Number.isFinite(n) || n < 0) return 0;
        return Math.floor(n);
    }

    function isWrongSignatureError(e) {
        const msg = String(e && (e.message || e) || '');
        return msg.toLowerCase().includes('wrong_signature');
    }

    function purgeGamepushStorage() {
        try {
            const keysToRemove = [];
            for (let i = 0; i < localStorage.length; i++) {
                const k = localStorage.key(i);
                if (!k) continue;
                const lk = k.toLowerCase();
                if (lk.startsWith('gp_') || lk.startsWith('gamepush') || lk.includes('gamepush')) {
                    keysToRemove.push(k);
                }
            }
            keysToRemove.forEach(k => localStorage.removeItem(k));
        } catch (e) {}
    }

    function clearGamepushCookies() {
        try {
            const cookies = document.cookie ? document.cookie.split(';') : [];
            for (const c of cookies) {
                const name = c.split('=')[0].trim();
                if (!name) continue;
                const ln = name.toLowerCase();
                if (ln.startsWith('gp_') || ln.startsWith('gamepush') || ln.includes('gamepush')) {
                    document.cookie = `${name}=; Max-Age=0; path=/`;
                }
            }
        } catch (e) {}
    }

    async function clearGamepushIndexedDb() {
        if (!('indexedDB' in window)) return;
        try {
            if (indexedDB.databases) {
                const dbs = await indexedDB.databases();
                for (const db of dbs) {
                    const name = (db && db.name) ? db.name : '';
                    const ln = name.toLowerCase();
                    if (ln.startsWith('gp_') || ln.startsWith('gamepush') || ln.includes('gamepush')) {
                        indexedDB.deleteDatabase(name);
                    }
                }
            }
        } catch (e) {}
    }

    async function recoverWrongSignature(reason) {
        try {
            const last = Number(sessionStorage.getItem('gp_wrong_signature_recovered') || '0');
            if (last && (Date.now() - last) < 5000) return false;
            sessionStorage.setItem('gp_wrong_signature_recovered', String(Date.now()));
        } catch (e) {}
        console.error('[Cloud Saves][Wins] wrong_signature recovery triggered:', reason || 'unknown');
        purgeGamepushStorage();
        clearGamepushCookies();
        try { await clearGamepushIndexedDb(); } catch (e) {}
        try { location.reload(); } catch (e) {}
        return true;
    }

    // === Local storage ===

    function getDefaultStats() {
        return {
            currentStreak: 0,
            bestStreak: 0,
            todayWinsAI: 0,
            todayWinsOnline: 0,
            totalWins: 0,
            totalWinsAI: 0,
            totalWinsOnline: 0,
            bestCombo: 1,
            perfectGames: 0,
            lastPlayDate: getTodayKey(),
        };
    }

    function getDefaultCurrentGame() {
        return {
            maxCombo: 1,
            captures: 0,
            level3Merges: 0,
        };
    }

    function ensureStatsIntegrity() {
        if (!state.stats) return;
        state.stats.totalWins = normalizeWins(state.stats.totalWins);
        state.stats.totalWinsAI = normalizeWins(state.stats.totalWinsAI);
        state.stats.totalWinsOnline = normalizeWins(state.stats.totalWinsOnline);
        state.stats.todayWinsAI = normalizeWins(state.stats.todayWinsAI);
        state.stats.todayWinsOnline = normalizeWins(state.stats.todayWinsOnline);
        state.stats.currentStreak = normalizeWins(state.stats.currentStreak);
        state.stats.bestStreak = normalizeWins(state.stats.bestStreak);
        state.stats.bestCombo = Math.max(1, normalizeWins(state.stats.bestCombo));
        state.stats.perfectGames = normalizeWins(state.stats.perfectGames);
        const legacyTotal = state.stats.totalWinsAI + state.stats.totalWinsOnline;
        if (state.stats.totalWins < legacyTotal) {
            state.stats.totalWins = legacyTotal;
        }
    }

    function getTotalWins() {
        if (!state.stats) return 0;
        return normalizeWins(state.stats.totalWins);
    }

    function loadStats() {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved) {
                const parsed = JSON.parse(saved);
                if (parsed.lastPlayDate !== getTodayKey()) {
                    parsed.todayWinsAI = 0;
                    parsed.todayWinsOnline = 0;
                    parsed.lastPlayDate = getTodayKey();
                }
                state.stats = { ...getDefaultStats(), ...parsed };
            } else {
                state.stats = getDefaultStats();
            }
            ensureStatsIntegrity();
        } catch (e) {
            console.warn('[Leaderboard] Failed to load stats:', e);
            state.stats = getDefaultStats();
        }
    }

    function saveStats() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state.stats));
        } catch (e) {
            console.warn('[Leaderboard] Failed to save stats:', e);
        }
    }

    // === Cloud wins sync ===

    function scheduleWinsRetry() {
        if (state.winsRetryTimer) return;
        state.winsRetryTimer = setTimeout(() => {
            state.winsRetryTimer = null;
            flushPendingWinsSync();
        }, WINS_RETRY_MS);
    }

    function enqueueWinsSync(op) {
        state.winsSyncChain = state.winsSyncChain.then(op, op);
        return state.winsSyncChain;
    }

    function getGP() {
        if (!state.gp && global._gamepush) {
            state.gp = global._gamepush;
            console.log('[Leaderboard] GamePush connected (lazy)');
        }
        return state.gp;
    }

    async function waitForPlayerReady() {
        try {
            if (global.GamepushService && typeof global.GamepushService.ready === 'function') {
                await global.GamepushService.ready();
            } else if (global._gamepushReady) {
                await global._gamepushReady;
            }
        } catch (e) {
            console.warn('[Cloud Saves][Wins] Failed waiting for GamePush ready:', e);
        }

        const gp = getGP();
        if (!gp || !gp.player) return null;

        if (gp.player.ready) {
            try { await gp.player.ready; } catch (e) {}
        }

        return gp;
    }

    async function hydrateCloudWinsSnapshot(gp) {
        if (!gp || !gp.player) return null;
        if (state.cloudWinsHydrated) return state.lastKnownCloudWins;
        try {
            const cloudWins = normalizeWins(gp.player.get(CLOUD_WINS_KEY));
            state.lastKnownCloudWins = cloudWins;
            state.cloudWinsHydrated = true;
            return cloudWins;
        } catch (e) {
            console.warn('[Cloud Saves][Wins] Failed to hydrate cloud snapshot:', e);
            return null;
        }
    }

    async function syncWinsToCloudInternal() {
        if (state.winsSyncPendingValue === null || state.winsSyncPendingValue === undefined) {
            return true;
        }

        const pending = normalizeWins(state.winsSyncPendingValue);
        const gp = await waitForPlayerReady();
        if (!gp || !gp.player) {
            console.warn('[Cloud Saves][Wins] Player unavailable, deferred sync');
            scheduleWinsRetry();
            return false;
        }

        const hydrated = await hydrateCloudWinsSnapshot(gp);
        if (hydrated === null) {
            scheduleWinsRetry();
            return false;
        }

        const localFloor = getTotalWins();
        const wins = Math.max(pending, localFloor, state.lastKnownCloudWins);

        try {
            gp.player.set(CLOUD_WINS_KEY, wins);
            await gp.player.sync();

            const cloudAfter = normalizeWins(gp.player.get(CLOUD_WINS_KEY));
            if (cloudAfter < wins) {
                throw new Error(`Cloud verification failed. expected=${wins}, actual=${cloudAfter}`);
            }

            state.lastKnownCloudWins = Math.max(state.lastKnownCloudWins, cloudAfter);
            if (normalizeWins(state.winsSyncPendingValue) <= state.lastKnownCloudWins) {
                state.winsSyncPendingValue = null;
            }

            console.log('[Cloud Saves][Wins] Synced wins:', wins);
            return true;
        } catch (e) {
            try {
                if (isWrongSignatureError(e)) {
                    await recoverWrongSignature('wins.sync');
                }
            } catch (e2) {}
            console.warn('[Cloud Saves][Wins] Failed to sync wins, will retry:', e);
            scheduleWinsRetry();
            return false;
        }
    }

    async function syncWinsToCloud(totalWins) {
        const requestedWins = normalizeWins(totalWins);
        state.winsSyncPendingValue = Math.max(normalizeWins(state.winsSyncPendingValue), requestedWins);
        return enqueueWinsSync(() => syncWinsToCloudInternal());
    }

    async function flushPendingWinsSync() {
        if (state.winsSyncPendingValue === null || state.winsSyncPendingValue === undefined) {
            return;
        }
        await syncWinsToCloud(state.winsSyncPendingValue);
    }

    async function loadStatsFromCloud() {
        return enqueueWinsSync(async () => {
            if (!state.stats) loadStats();

            const gp = await waitForPlayerReady();
            if (!gp || !gp.player) {
                console.log('[Cloud Saves][Wins] Player unavailable, local fallback only');
                return;
            }

            try {
                const cloudWins = await hydrateCloudWinsSnapshot(gp);
                if (cloudWins === null) return;

                const localWins = getTotalWins();

                // Облако — авторитетный источник при старте. Просто читаем через Player.get(), не пишем обратно.
                if (cloudWins !== localWins) {
                    state.stats.totalWins = cloudWins;
                    saveStats();
                }
                console.log('[Cloud Saves][Wins] Loaded from cloud:', cloudWins, '(local was:', localWins, ')');
            } catch (e) {
                try {
                    if (isWrongSignatureError(e)) {
                        await recoverWrongSignature('wins.load');
                    }
                } catch (e2) {}
                console.warn('[Cloud Saves][Wins] Failed to load from cloud:', e);
            }
        });
    }

    // === Initialization ===

    async function init() {
        if (state.initialized) return;

        loadStats();
        resetCurrentGame();
        getGP();

        // Background cloud bootstrap (does not block game start).
        loadStatsFromCloud()
            .then(() => flushPendingWinsSync())
            .catch((e) => console.warn('[Cloud Saves][Wins] init cloud sync failed:', e));

        state.initialized = true;
        console.log('[Leaderboard] Initialized', state.stats);
    }

    // === In-game tracking ===

    function resetCurrentGame() {
        state.currentGame = getDefaultCurrentGame();
    }

    function trackCombo(multiplier) {
        if (!state.currentGame) resetCurrentGame();
        if (multiplier > state.currentGame.maxCombo) {
            state.currentGame.maxCombo = multiplier;
        }
    }

    function trackCapture() {
        if (!state.currentGame) resetCurrentGame();
        state.currentGame.captures++;
    }

    function trackLevel3Merge() {
        if (!state.currentGame) resetCurrentGame();
        state.currentGame.level3Merges++;
    }

    // === Publish results ===

    async function publishWin(mode, myScore, enemyScore) {
        if (!state.stats) loadStats();

        const isAI = mode === 'ai';
        const isPerfect = enemyScore === 0;

        if (isAI) {
            state.stats.totalWinsAI++;
            state.stats.todayWinsAI++;
        } else {
            state.stats.totalWinsOnline++;
            state.stats.todayWinsOnline++;
        }
        state.stats.totalWins = getTotalWins() + 1;

        state.stats.currentStreak++;
        if (state.stats.currentStreak > state.stats.bestStreak) {
            state.stats.bestStreak = state.stats.currentStreak;
        }

        if (state.currentGame && state.currentGame.maxCombo > state.stats.bestCombo) {
            state.stats.bestCombo = state.currentGame.maxCombo;
        }

        if (isPerfect) {
            state.stats.perfectGames++;
        }

        saveStats();

        const totalWins = getTotalWins();
        await syncWinsToCloud(totalWins);

        const gp = getGP();
        if (gp && gp.leaderboard) {
            const todayWins = state.stats.todayWinsAI + state.stats.todayWinsOnline;

            console.log('[Leaderboard] Publishing records:', {
                id: LEADERBOARD_ID,
                field: LEADERBOARD_FIELD,
                totalWins,
                todayWins,
                weekVariant: getWeekVariant(),
                dayVariant: getTodayVariant(),
            });

            try {
                const r1 = await gp.leaderboard.publishRecord({
                    id: LEADERBOARD_ID,
                    variant: 'default',
                    record: { [LEADERBOARD_FIELD]: totalWins },
                    override: true,
                });
                console.log('[Leaderboard] All-time result:', r1);

                const r2 = await gp.leaderboard.publishRecord({
                    id: LEADERBOARD_ID,
                    variant: getWeekVariant(),
                    record: { [LEADERBOARD_FIELD]: totalWins },
                    override: true,
                });
                console.log('[Leaderboard] Weekly result:', r2);

                const r3 = await gp.leaderboard.publishRecord({
                    id: LEADERBOARD_ID,
                    variant: getTodayVariant(),
                    record: { [LEADERBOARD_FIELD]: todayWins },
                    override: true,
                });
                console.log('[Leaderboard] Daily result:', r3);

                console.log('[Leaderboard] All records published successfully!');
            } catch (e) {
                console.error('[Leaderboard] Failed to publish records:', e);
            }
        } else {
            console.warn('[Leaderboard] GamePush not available, skipping publish');
        }

        return {
            isNewStreakRecord: state.stats.currentStreak === state.stats.bestStreak && state.stats.currentStreak > 1,
            isNewComboRecord: state.currentGame && state.currentGame.maxCombo === state.stats.bestCombo && state.stats.bestCombo > 1,
            isPerfect: isPerfect,
            streak: state.stats.currentStreak,
            combo: state.currentGame ? state.currentGame.maxCombo : 1,
        };
    }

    function recordLoss() {
        if (!state.stats) loadStats();
        state.stats.currentStreak = 0;
        saveStats();
    }

    // === UI: open leaderboard ===

    function openLeaderboard(period = 'alltime') {
        let variant = 'default';
        if (period === 'weekly') {
            variant = getWeekVariant();
        } else if (period === 'daily') {
            variant = getTodayVariant();
        }

        console.log('[Leaderboard] Opening:', { period, variant, id: LEADERBOARD_ID });

        const gp = getGP();
        console.log('[Leaderboard] GamePush instance:', gp);
        console.log('[Leaderboard] leaderboard API:', gp ? gp.leaderboard : 'no gp');

        if (gp && gp.leaderboard) {
            try {
                const result = gp.leaderboard.openScoped({
                    id: LEADERBOARD_ID,
                    variant: variant,
                    order: 'DESC',
                    limit: 10,
                    withMe: 'last',
                    showNearest: 5,
                });
                console.log('[Leaderboard] openScoped result:', result);
            } catch (e) {
                console.error('[Leaderboard] openScoped error:', e);
                try {
                    gp.leaderboard.open({ id: LEADERBOARD_ID, variant: variant });
                    console.log('[Leaderboard] Fallback open() called');
                } catch (e2) {
                    console.error('[Leaderboard] Fallback open error:', e2);
                }
            }
        } else {
            console.warn('[Leaderboard] GamePush not available, gp:', !!gp, 'leaderboard:', gp ? !!gp.leaderboard : false);
            const stats = state.stats || getDefaultStats();
            alert(`Your wins: ${normalizeWins(stats.totalWins)}\nBest streak: ${stats.bestStreak}`);
        }
    }

    // === Sharing ===

    function getShareUrl() {
        if (global.parent === global) return global.location.href;
        try { return global.parent.location.href; } catch (e) {}
        if (document.referrer) return document.referrer;
        return global.location.href;
    }

    async function shareResult(type, data = {}) {
        const texts = {
            dailyWins: global.i18n
                ? global.i18n.t('share.daily_wins', { wins: data.wins })
                : `I won ${data.wins} games today in TicTacToe Merge!`,
            weeklyTop: global.i18n
                ? global.i18n.t('share.weekly_top', { rank: data.rank })
                : `I'm in TOP-${data.rank} this week in TicTacToe Merge!`,
            winStreak: global.i18n
                ? global.i18n.t('share.win_streak', { streak: data.streak })
                : `${data.streak} wins in a row in TicTacToe Merge!`,
            perfect: global.i18n
                ? global.i18n.t('share.perfect', { myScore: data.myScore, enemyScore: data.enemyScore })
                : `Perfect victory ${data.myScore}:${data.enemyScore} in TicTacToe Merge!`,
        };

        const text = texts[type] || texts.dailyWins;

        if (state.gp && state.gp.socials) {
            try {
                const lang = state.gp.language || 'en';
                const shareImage = lang === 'ru'
                    ? 'https://s3.eponesh.com/games/files/26225/share-ru.png'
                    : 'https://s3.eponesh.com/games/files/26225/share-en.png';
                await state.gp.socials.share({
                    text: text,
                    url: (state.gp.app && state.gp.app.url) || getShareUrl(),
                    image: shareImage,
                });
                return true;
            } catch (e) {
                console.warn('[Leaderboard] Share failed:', e);
            }
        }

        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'TicTacToe Merge',
                    text: text,
                    url: getShareUrl(),
                });
                return true;
            } catch (e) {
                // user cancelled or browser error
            }
        }

        return false;
    }

    // === Getters ===

    function getStats() {
        if (!state.stats) loadStats();
        return { ...state.stats };
    }

    function getCurrentGame() {
        return state.currentGame ? { ...state.currentGame } : getDefaultCurrentGame();
    }

    function isAvailable() {
        const gp = getGP();
        return gp && gp.leaderboard;
    }

    global.LeaderboardService = {
        init,
        resetCurrentGame,
        trackCombo,
        trackCapture,
        trackLevel3Merge,
        publishWin,
        recordLoss,
        openLeaderboard,
        shareResult,
        getStats,
        getCurrentGame,
        isAvailable,
        // Exposed for diagnostics/tests.
        loadStatsFromCloud,
        syncWinsToCloud,
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})(window);
