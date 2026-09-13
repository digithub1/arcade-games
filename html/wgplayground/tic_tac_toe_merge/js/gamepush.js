// Lightweight Gamepush wrapper for TicTacToe Merge
// Exposes: window.GamepushService with methods: init(), ready (Promise), isAvailable(), showRewardedAd(placement), showInterstitial(), showBanner(), on(event, handler)

(function(global){
    const svc = {
        _gp: null,
        _ready: null,
        _available: false,
        _listeners: {},
    };
    const RECOVERY_FLAG = 'gp_wrong_signature_recovered';
    const RECOVERY_COOLDOWN_MS = 5000;

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
            const last = Number(sessionStorage.getItem(RECOVERY_FLAG) || '0');
            if (last && (Date.now() - last) < RECOVERY_COOLDOWN_MS) return false;
            sessionStorage.setItem(RECOVERY_FLAG, String(Date.now()));
        } catch (e) {}
        console.error('[GamePush] wrong_signature recovery triggered:', reason || 'unknown');
        purgeGamepushStorage();
        clearGamepushCookies();
        try { await clearGamepushIndexedDb(); } catch (e) {}
        try { location.reload(); } catch (e) {}
        return true;
    }

    function init() {
        console.log('[GamePush] Initializing GamePush wrapper...');
        if (svc._ready) {
            console.log('[GamePush] Already initialized, returning existing promise');
            return svc._ready;
        }
        svc._ready = (async () => {
            // Wait for global onGPInit to set window._gamepush
            if (global._gamepush) {
                console.log('[GamePush] window._gamepush already available');
                svc._gp = global._gamepush;
            } else {
                // wait up to 10s for script init (increased from 5s to handle slow connections)
                console.log('[GamePush] Waiting for window._gamepush (up to 10s)...');
                const start = Date.now();
                while (!global._gamepush && Date.now() - start < 10000) {
                    await new Promise(r => setTimeout(r, 100));
                }
                svc._gp = global._gamepush || null;
                const elapsed = Date.now() - start;
                if (svc._gp) {
                    console.log(`[GamePush] ✓ window._gamepush loaded after ${elapsed}ms`);
                } else {
                    console.error(`[GamePush] ✗ window._gamepush not available after ${elapsed}ms timeout`);
                }
            }

            if (!svc._gp) {
                console.error('[GamePush] SDK not loaded, service unavailable');
                svc._available = false;
                return;
            }

            try {
                // wait for player ready if provided
                if (svc._gp.player && svc._gp.player.ready) {
                    console.log('[GamePush] Waiting for gp.player.ready...');
                    try {
                        await svc._gp.player.ready;
                    } catch (e) {
                        if (isWrongSignatureError(e)) {
                            console.error('[GamePush] wrong_signature detected. Attempting recovery...');
                            if (await recoverWrongSignature('player.ready')) return;
                        }
                        throw e;
                    }
                    console.log('[GamePush] ✓ Player ready');
                }
                svc._available = true;
                console.log('[GamePush] ✓ Service is now available');

                // Notify platform that game has started (required by some platforms)
                if (typeof svc._gp.gameStart === 'function') {
                    svc._gp.gameStart();
                    console.log('[GamePush] ✓ Game start notification sent');
                } else {
                    console.warn('[GamePush] gameStart method not found in SDK');
                }
            } catch (e) {
                console.error('[GamePush] Initialization failed:', e);
                svc._available = false;
            }

            // wire events from gp.ads if available
            try {
                if (svc._gp.ads && typeof svc._gp.ads.on === 'function') {
                    svc._gp.ads.on('rewarded:start', () => emit('rewarded:start'));
                    svc._gp.ads.on('rewarded:close', (success) => emit('rewarded:close', success));
                    svc._gp.ads.on('rewarded:reward', (data) => emit('rewarded:reward', data));
                    svc._gp.ads.on('start', () => emit('ads:start'));
                    svc._gp.ads.on('close', (success) => emit('ads:close', success));
                }
            } catch (e) {}

            // wire events from gp.sounds if available
            try {
                if (svc._gp.sounds && typeof svc._gp.sounds.on === 'function') {
                    svc._gp.sounds.on('mute:sfx',     () => emit('mute:sfx'));
                    svc._gp.sounds.on('unmute:sfx',   () => emit('unmute:sfx'));
                    svc._gp.sounds.on('mute:music',   () => emit('mute:music'));
                    svc._gp.sounds.on('unmute:music', () => emit('unmute:music'));
                }
            } catch (e) {}
        })();

        return svc._ready;
    }

    function isAvailable() { return !!svc._available; }

    async function showRewardedAd(placement) {
        if (!isAvailable()) return { success: false };
        try {
            if (svc._gp && svc._gp.ads && typeof svc._gp.ads.showRewarded === 'function') {
                const res = await svc._gp.ads.showRewarded({ placement });
                return { success: !!res };
            }
            // fallback API names
            if (svc._gp && svc._gp.ads && typeof svc._gp.ads.show === 'function') {
                const res = await svc._gp.ads.show('rewarded', { placement });
                return { success: !!res };
            }
        } catch (e) {
            console.warn('Gamepush showRewardedAd error', e);
        }
        return { success: false };
    }

    async function showInterstitial() {
        if (!isAvailable()) return false;
        try {
            // GamePush uses showFullscreen for interstitial ads
            if (svc._gp && svc._gp.ads && typeof svc._gp.ads.showFullscreen === 'function') {
                await svc._gp.ads.showFullscreen();
                return true;
            }
        } catch (e) { console.warn('Gamepush showInterstitial error', e); }
        return false;
    }

    function showBanner() {
        if (!isAvailable()) return false;
        try {
            if (svc._gp && svc._gp.ads && typeof svc._gp.ads.showSticky === 'function') {
                svc._gp.ads.showSticky();
                return true;
            }
        } catch (e) { console.warn('Gamepush showBanner error', e); }
        return false;
    }

    function on(event, handler) {
        if (!svc._listeners[event]) svc._listeners[event] = [];
        svc._listeners[event].push(handler);
    }

    function emit(event, payload) {
        const list = svc._listeners[event] || [];
        for (const h of list) try { h(payload); } catch (e) {}
    }

    function gameplayStart() {
        if (!isAvailable()) {
            console.warn('[GamePush] gameplayStart called but SDK not available');
            return false;
        }
        try {
            if (svc._gp && typeof svc._gp.gameplayStart === 'function') {
                svc._gp.gameplayStart();
                console.log('[GamePush] Gameplay started');
                return true;
            } else {
                console.warn('[GamePush] gameplayStart method not found in SDK');
            }
        } catch (e) { console.warn('[GamePush] gameplayStart error', e); }
        return false;
    }

    function gameplayStop() {
        if (!isAvailable()) {
            console.warn('[GamePush] gameplayStop called but SDK not available');
            return false;
        }
        try {
            if (svc._gp && typeof svc._gp.gameplayStop === 'function') {
                svc._gp.gameplayStop();
                console.log('[GamePush] Gameplay stopped');
                return true;
            } else {
                console.warn('[GamePush] gameplayStop method not found in SDK');
            }
        } catch (e) { console.warn('[GamePush] gameplayStop error', e); }
        return false;
    }

    // sounds proxy — wraps gp.sounds for SFX/Music mute (not general mute)
    const sounds = {
        muteSFX()    { try { svc._gp?.sounds?.muteSFX();    } catch(e) {} },
        unmuteSFX()  { try { svc._gp?.sounds?.unmuteSFX();  } catch(e) {} },
        muteMusic()  { try { svc._gp?.sounds?.muteMusic();  } catch(e) {} },
        unmuteMusic(){ try { svc._gp?.sounds?.unmuteMusic();} catch(e) {} },
        get isSFXMuted()   { return !!svc._gp?.sounds?.isSFXMuted;   },
        get isMusicMuted() { return !!svc._gp?.sounds?.isMusicMuted; },
    };

    // expose global
    const api = { init, ready: () => svc._ready, isAvailable, showRewardedAd, showInterstitial, showBanner, on, gameplayStart, gameplayStop, sounds };
    global.GamepushService = api;
    // auto-init
    init();
})(window);

