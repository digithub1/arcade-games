/**
 * 100% Offline GamePush Mock
 * Neutralizes all ads, trackers, analytics, external login, and network pings.
 * Persists player profile & save data locally in localStorage.
 */
(function() {
    console.log('[OfflinePatch] Initializing 100% Offline GamePush Mock...');

    // Storage helper
    const STORAGE_KEY = 'gp_offline_player_data';
    let playerData = {};
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) playerData = JSON.parse(saved);
    } catch(e) {}

    function savePlayerData() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(playerData));
        } catch(e) {}
    }

    class EventEmitter {
        constructor() {
            this.events = {};
        }
        on(event, listener) {
            if (!this.events[event]) this.events[event] = [];
            this.events[event].push(listener);
            return this;
        }
        once(event, listener) {
            const wrapper = (...args) => {
                this.off(event, wrapper);
                listener.apply(this, args);
            };
            return this.on(event, wrapper);
        }
        off(event, listener) {
            if (!this.events[event]) return this;
            this.events[event] = this.events[event].filter(l => l !== listener);
            return this;
        }
        emit(event, ...args) {
            if (!this.events[event]) return false;
            this.events[event].slice().forEach(listener => {
                try { listener.apply(this, args); } catch(e) { console.error(e); }
            });
            return true;
        }
    }

    const emitter = new EventEmitter();

    const mockGP = {
        isReady: true,
        language: 'en',
        platform: {
            type: 'DESKTOP',
            isMobile: false,
            isDesktop: true,
            hasTouch: false
        },
        app: {
            id: '29222',
            title: 'War Of Tanks',
            url: window.location.href,
            description: 'War Of Tanks Offline'
        },
        player: {
            id: 1288,
            name: 'Player',
            avatar: '',
            isLoggedIn: true,
            hasAnyCredentials: true,
            state: playerData,
            get(key) {
                return playerData[key];
            },
            set(key, val) {
                playerData[key] = val;
                savePlayerData();
            },
            sync() {
                savePlayerData();
                return Promise.resolve(true);
            },
            login() {
                return Promise.resolve(this);
            },
            logout() {
                return Promise.resolve(true);
            },
            fetch() {
                return Promise.resolve(this);
            },
            load() {
                return Promise.resolve(this);
            }
        },
        ads: {
            isAdblockEnabled: false,
            isCountdownOverlayEnabled: false,
            showFullscreen(options = {}) {
                console.log('[OfflinePatch] showFullscreen ad bypassed');
                emitter.emit('ads:fullscreen:start');
                setTimeout(() => {
                    emitter.emit('ads:fullscreen:close', true);
                    if (options.onClose) options.onClose(true);
                }, 10);
                return Promise.resolve(true);
            },
            showRewardedVideo(options = {}) {
                console.log('[OfflinePatch] showRewardedVideo ad rewarded');
                emitter.emit('ads:rewarded:start');
                setTimeout(() => {
                    emitter.emit('ads:rewarded:reward');
                    emitter.emit('ads:rewarded:close', true);
                    if (options.onReward) options.onReward();
                    if (options.onClose) options.onClose(true);
                }, 10);
                return Promise.resolve(true);
            },
            showPreloader(options = {}) {
                console.log('[OfflinePatch] showPreloader ad bypassed');
                emitter.emit('ads:preloader:start');
                setTimeout(() => {
                    emitter.emit('ads:preloader:close', true);
                    if (options.onClose) options.onClose(true);
                }, 10);
                return Promise.resolve(true);
            },
            showSticky() {},
            refreshSticky() {},
            closeSticky() {}
        },
        game: {
            isPaused: false,
            ready() {
                console.log('[OfflinePatch] Game reported ready');
                emitter.emit('game:ready');
                return Promise.resolve(true);
            },
            pause() {
                this.isPaused = true;
                emitter.emit('game:pause');
            },
            resume() {
                this.isPaused = false;
                emitter.emit('game:resume');
            },
            gameplayStart() {
                console.log('[OfflinePatch] Gameplay started');
                emitter.emit('gameplay:start');
            },
            gameplayStop() {
                console.log('[OfflinePatch] Gameplay stopped');
                emitter.emit('gameplay:stop');
            }
        },
        analytics: {
            hit() {},
            goal() {},
            event() {}
        },
        leaderboard: {
            open() { return Promise.resolve(true); },
            fetch() { return Promise.resolve({ players: [] }); },
            fetchPlayerRating() { return Promise.resolve(1); }
        },
        achievements: {
            open() { return Promise.resolve(true); },
            fetch() { return Promise.resolve({ achievements: [] }); },
            unlock() { return Promise.resolve(true); }
        },
        variables: {
            fetch() { return Promise.resolve({}); },
            has(name) { return false; },
            get(name) { return null; }
        },
        storage: {
            get(key) {
                try { return localStorage.getItem('gp_storage_' + key); } catch(e) { return null; }
            },
            set(key, val) {
                try { localStorage.setItem('gp_storage_' + key, val); } catch(e) {}
            }
        },
        files: {
            upload() { return Promise.resolve(''); }
        },
        fullscreen: {
            open() {
                if (document.documentElement.requestFullscreen) document.documentElement.requestFullscreen();
            },
            close() {
                if (document.exitFullscreen) document.exitFullscreen();
            },
            toggle() {
                if (!document.fullscreenElement) this.open();
                else this.close();
            }
        },
        on: emitter.on.bind(emitter),
        once: emitter.once.bind(emitter),
        off: emitter.off.bind(emitter),
        emit: emitter.emit.bind(emitter)
    };

    window.GP = mockGP;
    window.GamePush = mockGP;
    window.gp = mockGP;

    // Dispatch ready event if anyone listens for 'gp:ready' or similar
    window.addEventListener('DOMContentLoaded', () => {
        window.dispatchEvent(new CustomEvent('gp:ready', { detail: mockGP }));
        window.dispatchEvent(new CustomEvent('gamepush:ready', { detail: mockGP }));
    });

    console.log('[OfflinePatch] GamePush offline mock installed successfully.');
})();
