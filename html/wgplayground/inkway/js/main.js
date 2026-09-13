/**
 * INKWAY — Main Entry Point & Screen Manager
 * ===========================================
 * Initializes the game, manages screen transitions,
 * and runs the main game loop.
 */

window.INKWAY = window.INKWAY || {};

INKWAY.Main = (function () {
    'use strict';

    const { $, $$, EventEmitter, delay } = INKWAY.Utils;

    // ─── SCREENS ───
    const SCREENS = {
        SPLASH: 'screen-splash',
        MENU: 'screen-menu',
        WORLD_MAP: 'screen-world-map',
        LEVEL_SELECT: 'screen-level-select',
        GAME: 'screen-game',
        RESULT: 'screen-result',
        FAIL: 'screen-fail',
        SETTINGS: 'screen-settings-modal',
        INFO: 'screen-info-modal',
        PAUSE: 'screen-pause',
        GARAGE: 'screen-garage',
        SANDBOX: 'screen-sandbox'
    };

    // ─── STATE ───
    let _currentScreen = SCREENS.SPLASH;
    let _previousScreen = null;
    let _gameState = 'idle'; // idle, drawing, simulating, complete, failed
    let _currentWorld = 1;
    let _currentLevel = null;
    let _running = false;
    let _lastFrameTime = 0;
    let _preAdGameState = null;
    let _adAudioState = { music: true, sfx: true };

    const events = new EventEmitter();

    // ─── WEEGOO MIDROLL AD SUPPORT ───

    function pauseGameplayForAd() {
        _preAdGameState = getGameState();

        if (INKWAY.Physics && INKWAY.Physics.setPaused) {
            INKWAY.Physics.setPaused(true);
        }

        if (INKWAY.Audio) {
            const settings = INKWAY.Storage?.getSettings?.() || {};
            _adAudioState = {
                music: !!settings.music,
                sfx: !!settings.sfx
            };
            if (_adAudioState.music) INKWAY.Audio.setMusicEnabled(false);
            if (_adAudioState.sfx) INKWAY.Audio.setSfxEnabled(false);
        }

        if (_preAdGameState === 'simulating' || _preAdGameState === 'drawing') {
            setGameState('paused');
        }
    }

    function resumeGameplayAfterAd(callback) {
        if (INKWAY.Physics && INKWAY.Physics.setPaused) {
            INKWAY.Physics.setPaused(false);
        }

        if (INKWAY.Audio) {
            INKWAY.Audio.setMusicEnabled(_adAudioState.music);
            INKWAY.Audio.setSfxEnabled(_adAudioState.sfx);
        }

        const nextState = _preAdGameState === 'drawing' || _preAdGameState === 'simulating'
            ? _preAdGameState
            : 'simulating';
        setGameState(nextState);

        if (typeof callback === 'function') {
            callback();
        }
    }

    function showWeeGooMidrollAd(callback) {
        const resumeCallback = typeof callback === 'function' ? callback : null;

        pauseGameplayForAd();

        const loaderName = window.preroll && window.preroll.config && window.preroll.config.loaderObjectName;
        const loader = loaderName ? window[loaderName] : null;

        if (loader && typeof loader.refetchAd === 'function') {
            loader.refetchAd(() => {
                resumeGameplayAfterAd(resumeCallback);
            });
            return true;
        }

        resumeGameplayAfterAd(resumeCallback);
        return false;
    }

    // ─── SCREEN MANAGEMENT ───

    function showScreen(screenId, options = {}) {
        const current = $(`#${_currentScreen}`);
        const next = $(`#${screenId}`);

        if (!next) {
            console.error(`[Main] Screen not found: ${screenId}`);
            return;
        }

        // Don't transition to same screen
        if (screenId === _currentScreen && !options.force) return;

        _previousScreen = _currentScreen;

        // Hide current screen
        if (current) {
            current.classList.remove('active', 'entering');
        }

        // Show next screen
        next.classList.add('active');
        if (options.animate !== false) {
            next.classList.add('entering');
            // Remove entering class after animation
            setTimeout(() => next.classList.remove('entering'), 500);
        }

        _currentScreen = screenId;
        if (screenId === SCREENS.GAME) {
            requestAnimationFrame(() => {
                if (window.INKWAY && INKWAY.Drawing && INKWAY.Drawing.resizeCanvases) {
                    INKWAY.Drawing.resizeCanvases();
                }
            });
        }
        events.emit('screenChange', { from: _previousScreen, to: screenId });
    }

    function showOverlay(screenId) {
        const overlay = $(`#${screenId}`);
        if (!overlay) return;

        overlay.style.display = '';
        overlay.classList.add('active');

        const card = overlay.querySelector('.modal-card');
        if (card) {
            card.classList.add('entering');
            setTimeout(() => card.classList.remove('entering'), 500);
        }
    }

    function hideOverlay(screenId, immediate = false) {
        const overlay = $(`#${screenId}`);
        if (!overlay) return;

        overlay.classList.remove('active');
        if (immediate) {
            overlay.style.display = 'none';
        } else {
            // Allow transition to finish
            setTimeout(() => {
                if (!overlay.classList.contains('active')) {
                    overlay.style.display = 'none';
                }
            }, 400);
        }
    }

    function getCurrentScreen() {
        return _currentScreen;
    }

    function goBack() {
        if (_previousScreen) {
            showScreen(_previousScreen);
        }
    }

    // ─── GAME STATE ───

    function setGameState(state) {
        const prev = _gameState;
        _gameState = state;
        events.emit('gameStateChange', { from: prev, to: state });
    }

    function getGameState() {
        return _gameState;
    }

    function getCurrentWorld() {
        return _currentWorld;
    }

    function setCurrentWorld(worldId) {
        _currentWorld = worldId;
    }

    function getCurrentLevel() {
        return _currentLevel;
    }

    function setCurrentLevel(levelData) {
        _currentLevel = levelData;
    }

    // ─── GAME LOOP ───

    function startGameLoop() {
        if (_running) return;
        _running = true;
        _lastFrameTime = performance.now();
        requestAnimationFrame(gameLoop);
    }

    function stopGameLoop() {
        _running = false;
    }

    function gameLoop(timestamp) {
        if (!_running) return;

        const dt = Math.min((timestamp - _lastFrameTime) / 1000, 0.05); // Cap at 50ms
        _lastFrameTime = timestamp;

        // Only update game systems when on the game screen
        if (_currentScreen === SCREENS.GAME) {
            events.emit('update', dt);
            events.emit('render', dt);
        }

        requestAnimationFrame(gameLoop);
    }

    // ─── BUTTON BINDINGS ───

    function bindButtons() {
        // Main menu
        $('#btn-play')?.addEventListener('click', () => {
            goFullscreen();
            setCurrentWorld(1);
            if (INKWAY.UI) INKWAY.UI.refreshLevelGrid();
            showScreen(SCREENS.LEVEL_SELECT);
        });

        $('#btn-sandbox')?.addEventListener('click', () => {
            goFullscreen();
            showScreen(SCREENS.SANDBOX);
        });

        $('#btn-garage')?.addEventListener('click', () => {
            goFullscreen();
            showScreen(SCREENS.GARAGE);
        });

        $('#btn-daily')?.addEventListener('click', () => {
            goFullscreen();
            events.emit('startDaily');
        });

        // Settings
        $('#btn-settings')?.addEventListener('click', () => {
            showOverlay(SCREENS.SETTINGS);
        });

        $('#btn-close-settings')?.addEventListener('click', () => {
            hideOverlay(SCREENS.SETTINGS);
        });

        // Info / Guide
        $('#btn-info')?.addEventListener('click', () => {
            showOverlay(SCREENS.INFO);
        });

        $('#btn-close-info')?.addEventListener('click', () => {
            hideOverlay(SCREENS.INFO);
        });

        $('#screen-info-modal .overlay-backdrop')?.addEventListener('click', () => {
            hideOverlay(SCREENS.INFO);
        });

        // In-game HUD
        $('#btn-game-back')?.addEventListener('click', () => {
            stopGameLoop();
            setGameState('idle');
            showScreen(SCREENS.LEVEL_SELECT);
        });

        $('#btn-home')?.addEventListener('click', () => {
            stopGameLoop();
            setGameState('idle');
            showScreen(SCREENS.MENU);
        });

        $('#btn-restart')?.addEventListener('click', () => {
            goFullscreen();
            events.emit('restartLevel');
        });

        // Pause
        $('#btn-resume')?.addEventListener('click', () => {
            goFullscreen();
            hideOverlay(SCREENS.PAUSE);
        });

        $('#btn-pause-restart')?.addEventListener('click', () => {
            goFullscreen();
            hideOverlay(SCREENS.PAUSE);
            events.emit('restartLevel');
        });

        $('#btn-pause-settings')?.addEventListener('click', () => {
            hideOverlay(SCREENS.PAUSE);
            showOverlay(SCREENS.SETTINGS);
        });

        $('#btn-quit')?.addEventListener('click', () => {
            hideOverlay(SCREENS.PAUSE);
            stopGameLoop();
            setGameState('idle');
            showScreen(SCREENS.LEVEL_SELECT);
        });

        // Result
        $('#btn-replay')?.addEventListener('click', () => {
            goFullscreen();
            hideOverlay(SCREENS.RESULT, true);
            events.emit('restartLevel');
        });

        $('#btn-next-level')?.addEventListener('click', () => {
            goFullscreen();
            hideOverlay(SCREENS.RESULT, true);
            events.emit('nextLevel');
        });

        $('#btn-to-home')?.addEventListener('click', () => {
            hideOverlay(SCREENS.RESULT, true);
            stopGameLoop();
            setGameState('idle');
            showScreen(SCREENS.MENU);
        });

        $('#btn-result-replay')?.addEventListener('click', () => {
            goFullscreen();
            hideOverlay(SCREENS.RESULT, true);
            events.emit('restartLevel');
        });

        // Fail
        $('#btn-retry')?.addEventListener('click', () => {
            goFullscreen();
            hideOverlay(SCREENS.FAIL, true);
            events.emit('restartLevel');
        });

        $('#btn-fail-home')?.addEventListener('click', () => {
            hideOverlay(SCREENS.FAIL);
            stopGameLoop();
            setGameState('idle');
            showScreen(SCREENS.MENU);
        });

        // Tool buttons
        $$('.btn-tool[data-tool]').forEach(btn => {
            btn.addEventListener('click', () => {
                $$('.btn-tool[data-tool]').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                events.emit('toolChange', btn.dataset.tool);
            });
        });

        // Launch button
        $('#btn-launch')?.addEventListener('click', () => {
            goFullscreen();

            showWeeGooMidrollAd(() => {
                events.emit('launch');
            });
        });

        // Back buttons (generic)
        $$('.btn-back').forEach(btn => {
            btn.addEventListener('click', () => {
                const target = btn.dataset.target;
                if (target) {
                    showScreen(`screen-${target}`);
                } else {
                    goBack();
                }
            });
        });

        // Settings toggles
        $('#setting-music')?.addEventListener('change', (e) => {
            INKWAY.Storage.setSetting('music', e.target.checked);
            events.emit('settingChange', { key: 'music', value: e.target.checked });
        });

        $('#setting-sfx')?.addEventListener('change', (e) => {
            INKWAY.Storage.setSetting('sfx', e.target.checked);
            events.emit('settingChange', { key: 'sfx', value: e.target.checked });
        });

        $('#setting-haptic')?.addEventListener('change', (e) => {
            INKWAY.Storage.setSetting('haptic', e.target.checked);
            events.emit('settingChange', { key: 'haptic', value: e.target.checked });
        });

        $('#setting-fullscreen')?.addEventListener('change', (e) => {
            INKWAY.Storage.setSetting('fullscreen', e.target.checked);
            if (e.target.checked) {
                goFullscreen();
            } else {
                exitFullscreen();
            }
        });
    }

    // ─── SETTINGS SYNC ───

    function syncSettingsUI() {
        const settings = INKWAY.Storage.getSettings();
        const musicEl = $('#setting-music');
        const sfxEl = $('#setting-sfx');
        const hapticEl = $('#setting-haptic');
        const fullscreenEl = $('#setting-fullscreen');
        if (musicEl) musicEl.checked = settings.music;
        if (sfxEl) sfxEl.checked = settings.sfx;
        if (hapticEl) hapticEl.checked = settings.haptic;
        if (fullscreenEl) {
            fullscreenEl.checked = !!(document.fullscreenElement 
                || document.webkitFullscreenElement 
                || document.mozFullScreenElement 
                || document.msFullscreenElement);
        }
    }

    // ─── STATS DISPLAY ───

    function updateStatsDisplay() {
        const totalStars = INKWAY.Storage.getTotalStars();

        $$('.stat-stars .stat-value').forEach(el => {
            el.textContent = totalStars;
        });
    }

    // ─── INITIALIZATION ───

    let _loadingStarted = false;

    async function startLoadingSequence() {
        if (_loadingStarted) return;
        _loadingStarted = true;

        // Show splash screen
        showScreen(SCREENS.SPLASH, { animate: false, force: true });

        // Simulate loading
        const fill = $('#loader-fill');
        const text = $('#loader-text');

        // Initialize subsystems
        const loadSteps = [
            { label: 'Loading physics...', pct: 15, fn: () => INKWAY.Physics?.init?.() },
            { label: 'Loading audio...', pct: 30, fn: () => INKWAY.Audio?.init?.() },
            { label: 'Loading levels...', pct: 50, fn: () => INKWAY.Levels?.init?.() },
            { label: 'Preparing canvas...', pct: 70, fn: () => INKWAY.Drawing?.init?.() },
            { label: 'Loading vehicles...', pct: 80, fn: () => INKWAY.Vehicle?.init?.() },
            { label: 'Loading mechanics...', pct: 90, fn: () => INKWAY.Objects?.init?.() },
            { label: 'Setting up UI...', pct: 95, fn: () => INKWAY.UI?.init?.() },
            { label: 'Ready!', pct: 100, fn: null }
        ];

        for (const step of loadSteps) {
            if (text) text.textContent = step.label;
            if (fill) fill.style.width = `${step.pct}%`;
            try {
                if (step.fn) await step.fn();
            } catch (e) {
                console.warn(`[Main] Init step failed: ${step.label}`, e);
            }
            await delay(150);
        }

        // Update stats display
        updateStatsDisplay();

        // Transition to main menu
        await delay(400);
        showScreen(SCREENS.MENU);

        console.log('[INKWAY] Initialization complete.');
    }

    async function init() {
        console.log(`[INKWAY] v${INKWAY_CONFIG.VERSION} — Initializing...`);

        // Load save data
        INKWAY.Storage.load();

        // Bind all button events
        bindButtons();

        // Sync settings UI
        syncSettingsUI();

        // Hide overlays initially
        $$('.screen.overlay').forEach(el => {
            el.style.display = 'none';
            el.classList.remove('active');
        });

        // Set up mobile orientation blocker and fullscreen handlers
        _setupMobileFullscreen();

        // If not blocked by portrait mode, start loading immediately
        const isLandscape = window.innerWidth > window.innerHeight;
        const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        const isMobileDevice = isTouch && /Mobi|Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);
        if (!isMobileDevice || isLandscape) {
            startLoadingSequence();
        }
    }

    let _userExitedFullscreen = false;

    function goFullscreen(ignoreExitFlag = false) {
        const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        const isMobileDevice = isTouch && /Mobi|Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);
        if (!isMobileDevice) return; // Only fullscreen on mobile devices

        if (!ignoreExitFlag && _userExitedFullscreen) return;

        const el = document.documentElement;
        const isFull = !!(document.fullscreenElement 
            || document.webkitFullscreenElement 
            || document.mozFullScreenElement 
            || document.msFullscreenElement);
        if (isFull) return;

        if (el.requestFullscreen) {
            el.requestFullscreen().catch(() => {});
        } else if (el.webkitRequestFullscreen) {
            el.webkitRequestFullscreen();
        } else if (el.mozRequestFullScreen) {
            el.mozRequestFullScreen();
        } else if (el.msRequestFullscreen) {
            el.msRequestFullscreen();
        }
    }

    function exitFullscreen() {
        const isFull = !!(document.fullscreenElement 
            || document.webkitFullscreenElement 
            || document.mozFullScreenElement 
            || document.msFullscreenElement);
        if (!isFull) return;

        if (document.exitFullscreen) {
            document.exitFullscreen().catch(() => {});
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }

    function _setupMobileFullscreen() {
        const rotateOverlay = $('#rotate-overlay');
        
        // Initial setup on touch devices
        const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        const isMobileDevice = isTouch && /Mobi|Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);

        // Respect saved fullscreen setting on startup
        const settings = INKWAY.Storage.getSettings();
        if (settings && settings.fullscreen === false) {
            _userExitedFullscreen = true;
        }

        const checkOrientation = () => {
            const isLandscape = window.innerWidth > window.innerHeight;
            if (!rotateOverlay) return;

            if (!isMobileDevice) {
                rotateOverlay.style.display = 'none';
                return;
            }

            const isFull = !!(document.fullscreenElement 
                || document.webkitFullscreenElement 
                || document.mozFullScreenElement 
                || document.msFullscreenElement);

            if (!isLandscape) {
                rotateOverlay.style.display = 'flex';
                rotateOverlay.classList.remove('tap-to-play');
                const icon = rotateOverlay.querySelector('.rotate-icon');
                if (icon) icon.style.display = '';
                const text = rotateOverlay.querySelector('.rotate-text');
                if (text) text.textContent = 'Rotate your phone to landscape';
                const subtext = rotateOverlay.querySelector('.rotate-subtext');
                if (subtext) subtext.textContent = 'This game is best played sideways!';
                
                const playWindowedBtn = $('#btn-play-windowed');
                if (playWindowedBtn) playWindowedBtn.style.display = 'none';
            } else {
                if (!isFull && !_userExitedFullscreen) {
                    rotateOverlay.style.display = 'flex';
                    rotateOverlay.classList.add('tap-to-play');
                    const icon = rotateOverlay.querySelector('.rotate-icon');
                    if (icon) icon.style.display = 'none';
                    const text = rotateOverlay.querySelector('.rotate-text');
                    if (text) text.textContent = 'Ready to Play!';
                    const subtext = rotateOverlay.querySelector('.rotate-subtext');
                    if (subtext) subtext.textContent = 'Tap anywhere to start in Fullscreen';
                    
                    const playWindowedBtn = $('#btn-play-windowed');
                    if (playWindowedBtn) playWindowedBtn.style.display = 'inline-block';
                } else {
                    rotateOverlay.style.display = 'none';
                }
            }
        };

        // Call on startup
        checkOrientation();

        // Tapping the rotate overlay in landscape forces fullscreen
        if (rotateOverlay) {
            const handleOverlayTap = (e) => {
                const isLandscape = window.innerWidth > window.innerHeight;
                if (isLandscape && rotateOverlay.classList.contains('tap-to-play')) {
                    e.preventDefault();
                    _userExitedFullscreen = false;
                    goFullscreen(true);
                    startLoadingSequence(); // Start loading when they tap to start playing
                }
            };
            rotateOverlay.addEventListener('click', handleOverlayTap);
            rotateOverlay.addEventListener('touchstart', handleOverlayTap);

            // Play Windowed click/touch listener
            const playWindowedBtn = $('#btn-play-windowed');
            if (playWindowedBtn) {
                const handlePlayWindowed = (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    _userExitedFullscreen = true;
                    checkOrientation();
                    startLoadingSequence(); // Start loading windowed
                };
                playWindowedBtn.addEventListener('click', handlePlayWindowed);
                playWindowedBtn.addEventListener('touchstart', handlePlayWindowed);
            }
        }

        // Try requesting fullscreen on user interactions (clicks/touches)
        const onInteraction = () => {
            const isFull = !!(document.fullscreenElement 
                || document.webkitFullscreenElement 
                || document.mozFullScreenElement 
                || document.msFullscreenElement);
            if (!_userExitedFullscreen && !isFull) {
                goFullscreen();
            }
        };
        document.addEventListener('click', onInteraction);
        document.addEventListener('touchstart', onInteraction);

        // Listen for manual exit — respect the user's choice and sync settings checkbox
        const onFullscreenChange = () => {
            const isFull = !!(document.fullscreenElement 
                || document.webkitFullscreenElement 
                || document.mozFullScreenElement 
                || document.msFullscreenElement);
            const fullscreenEl = $('#setting-fullscreen');
            if (fullscreenEl) fullscreenEl.checked = isFull;
            INKWAY.Storage.setSetting('fullscreen', isFull);

            if (isFull) {
                if (screen.orientation && screen.orientation.lock) {
                    screen.orientation.lock('landscape').catch(() => {});
                }
            } else {
                // If they manually exited via browser UI, we don't automatically set _userExitedFullscreen = true.
                // This lets the "Tap to Start in Fullscreen" overlay reappear, giving them a way to re-enter!
                // Unless they explicitly click "Play windowed mode".
            }
            checkOrientation();
        };
        document.addEventListener('fullscreenchange', onFullscreenChange);
        document.addEventListener('webkitfullscreenchange', onFullscreenChange);
        document.addEventListener('mozfullscreenchange', onFullscreenChange);
        document.addEventListener('MSFullscreenChange', onFullscreenChange);

        // When user tilts phone to landscape, reset _userExitedFullscreen to false
        let lastOrientation = window.innerWidth > window.innerHeight ? 'landscape' : 'portrait';
        const handleOrientationChange = () => {
            const currentOrientation = window.innerWidth > window.innerHeight ? 'landscape' : 'portrait';
            if (currentOrientation === 'landscape' && lastOrientation === 'portrait') {
                _userExitedFullscreen = false;
            }
            lastOrientation = currentOrientation;
            checkOrientation();
        };
        window.addEventListener('resize', handleOrientationChange);
        window.addEventListener('orientationchange', handleOrientationChange);
    }

    // ─── BOOT ───
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // ─── PUBLIC API ───
    return {
        SCREENS,
        events,
        showScreen,
        showOverlay,
        hideOverlay,
        getCurrentScreen,
        goBack,
        setGameState,
        getGameState,
        getCurrentWorld,
        setCurrentWorld,
        getCurrentLevel,
        setCurrentLevel,
        startGameLoop,
        stopGameLoop,
        updateStatsDisplay,
        showWeeGooMidrollAd,
        pauseGameplayForAd,
        resumeGameplayAfterAd,
        goFullscreen,
        exitFullscreen
    };
})();
