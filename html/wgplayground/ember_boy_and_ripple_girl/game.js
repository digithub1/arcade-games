(function () {
    'use strict';

    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    const gameContainer = document.getElementById('game-container');
    const startBtn = document.getElementById('start-btn');
    const levelSelect = document.getElementById('level-select');
    const introScreen = document.getElementById('intro-screen');
    const introVideo = document.getElementById('intro-video');
    const introSkipBtn = document.getElementById('skip-intro-btn');
    const mainMenu = document.getElementById('main-menu');
    const hud = document.getElementById('hud');
    const hint = document.getElementById('controls-hint');
    const winScreen = document.getElementById('win-screen');
    const loseScreen = document.getElementById('lose-screen');
    const pauseScreen = document.getElementById('pause-screen');
    const pauseBtn = document.getElementById('pause-btn');
    const resumeBtn = document.getElementById('resume-btn');
    const pauseRestartBtn = document.getElementById('pause-restart-btn');
    const nextLevelBtn = document.getElementById('next-level-btn');
    const retryLevelBtn = document.getElementById('retry-level-btn');
    const rewardLifeBtn = document.getElementById('reward-life-btn');
    const winDescription = document.getElementById('win-description');
    const fireScore = document.getElementById('fire-score');
    const waterScore = document.getElementById('water-score');
    const levelBox = document.getElementById('level-box');
    const menuMusic = document.getElementById('menu-music');
    const bgMusic = document.getElementById('bg-music');
    const winMusic = document.getElementById('win-music');
    const loseMusic = document.getElementById('lose-music');
    const musicBtn = document.getElementById('music-btn');
    const gemPickupSound = new Audio('assets/gem-pickup.mp3');
    const doorOpenSound = new Audio('assets/door-open.mp3');

    const TILE = 40;
    const FIXED_STEP = 1000 / 60;
    const GRAVITY = 0.46;
    const MAX_FALL_SPEED = 10.5;
    const JUMP_SPEED = -12;
    const LEVELS = window.EmberRippleLevels.createAllLevels();
    const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

    const THEMES = [
        { top:'#21150f', bottom:'#09080b', stone:'#4d4034', edge:'#c49a64', accent:'#ffd180' },
        { top:'#102129', bottom:'#070b11', stone:'#334c57', edge:'#6fb6c9', accent:'#80deea' },
        { top:'#24102e', bottom:'#090611', stone:'#52365c', edge:'#bd7bd2', accent:'#e1bee7' },
        { top:'#17260e', bottom:'#070b06', stone:'#405538', edge:'#8ebc72', accent:'#c5e1a5' },
        { top:'#2b1f08', bottom:'#0b0804', stone:'#5b4d2e', edge:'#d8b85c', accent:'#ffe082' }
    ];

    const spriteSheet = new Image();
    spriteSheet.src = 'assets/ember-ripple-sprites-v9.webp';
    const backgroundArt = new Image();
    backgroundArt.src = 'assets/elemental-temple-background.webp';
    const trapSheet = new Image();
    trapSheet.src = 'assets/elemental-traps-v1.webp';
    const doorSheet = new Image();
    doorSheet.src = 'assets/elemental-doors-v1.webp';
    const blockSheet = new Image();
    blockSheet.src = 'assets/temple-blocks-v1.webp';
    const blobSheet = new Image();
    blobSheet.src = 'assets/spike-blob-v1.webp';

    const keys = Object.create(null);
    const pressed = Object.create(null);
    window.addEventListener('keydown', event => {
        if (event.key === 'Escape' && introScreen.classList.contains('active')) {
            finishIntro();
            return;
        }
        if (['ArrowLeft', 'ArrowRight', 'ArrowUp', ' '].includes(event.key)) event.preventDefault();
        if (event.key === 'Escape') {
            event.preventDefault();
            if (pauseScreen.classList.contains('active')) resumeFromPause();
            else if (gameActive) enterPause();
            else if (winScreen.classList.contains('active') || loseScreen.classList.contains('active')) showMenu();
            return;
        }
        if (userPaused) return;
        if (!keys[event.key]) pressed[event.key] = true;
        keys[event.key] = true;
        if ((event.key === 'r' || event.key === 'R') && gameActive) startStage(currentLevel, true);
    });
    window.addEventListener('keyup', event => { keys[event.key] = false; });
    window.addEventListener('blur', () => {
        Object.keys(keys).forEach(key => { keys[key] = false; });
        Object.keys(pressed).forEach(key => { pressed[key] = false; });
    });

    function fitGame() {
        const viewport = window.visualViewport;
        const viewportWidth = Math.max(1, viewport ? viewport.width : (document.documentElement.clientWidth || window.innerWidth));
        const viewportHeight = Math.max(1, viewport ? viewport.height : (document.documentElement.clientHeight || window.innerHeight));
        const viewportLeft = viewport ? viewport.offsetLeft : 0;
        const viewportTop = viewport ? viewport.offsetTop : 0;
        const scale = Math.min(viewportWidth / canvas.width, viewportHeight / canvas.height);

        gameContainer.style.setProperty('--game-scale', String(scale));
        gameContainer.style.setProperty('--game-center-x', `${viewportLeft + viewportWidth / 2}px`);
        gameContainer.style.setProperty('--game-center-y', `${viewportTop + viewportHeight / 2}px`);
    }
    window.addEventListener('resize', fitGame);
    window.addEventListener('orientationchange', fitGame);
    window.addEventListener('pageshow', fitGame);
    document.addEventListener('fullscreenchange', fitGame);
    if (window.visualViewport) {
        window.visualViewport.addEventListener('resize', fitGame);
        window.visualViewport.addEventListener('scroll', fitGame);
    }
    fitGame();

    const PROGRESS_KEY = 'emberRippleHighestUnlocked';
    let highestUnlocked = 1;
    try {
        const storedProgress = Number(localStorage.getItem(PROGRESS_KEY));
        const legacyProgress = Number(localStorage.getItem('emberRippleLevel'));
        highestUnlocked = clamp(Math.floor(storedProgress || legacyProgress || 1), 1, LEVELS.length);
    } catch (_) {}

    function refreshLevelSelect(selectedLevel=highestUnlocked) {
        levelSelect.replaceChildren();
        for (let level = 1; level <= LEVELS.length; level++) {
            const option = document.createElement('option');
            const locked = level > highestUnlocked;
            option.value = String(level);
            option.disabled = locked;
            option.textContent = locked
                ? `Stage ${level} — Locked`
                : `Stage ${level} — ${LEVELS[level - 1].puzzleName}`;
            levelSelect.appendChild(option);
        }
        const safeSelection = clamp(Number(selectedLevel) || 1, 1, highestUnlocked);
        levelSelect.value = String(safeSelection);
        startBtn.textContent = `Start Stage ${safeSelection}`;
    }

    function saveUnlockedStage(stage) {
        const nextHighest = clamp(Math.max(highestUnlocked, Math.floor(Number(stage) || 1)), 1, LEVELS.length);
        if (nextHighest === highestUnlocked) return;
        highestUnlocked = nextHighest;
        try {
            localStorage.setItem(PROGRESS_KEY, String(highestUnlocked));
            localStorage.setItem('emberRippleLevel', String(highestUnlocked));
        } catch (_) {}
        refreshLevelSelect(highestUnlocked);
    }

    refreshLevelSelect(highestUnlocked);
    levelSelect.addEventListener('change', () => {
        const selectedLevel = clamp(Number(levelSelect.value) || 1, 1, highestUnlocked);
        levelSelect.value = String(selectedLevel);
        startBtn.textContent = `Start Stage ${selectedLevel}`;
    });

    let map = LEVELS[0].map;
    let currentLevelData = LEVELS[0];
    let currentLevel = 1;
    let gameActive = false;
    let animationId = 0;
    let lastFrameTime = performance.now();
    let accumulator = 0;
    let ember;
    let ripple;
    let diamonds = [];
    let hazards = [];
    let doorOpenProgress = { fire:0, water:0 };
    let doorSoundPlayed = { fire:false, water:false };
    let userPaused = false;
    let wgLoader = null;
    let wgAdInProgress = false;
    let lastWGInterstitialAt = -Infinity;
    let wgRewardReady = false;
    let wgRewardCallbacksBound = false;
    let rewardRequestPending = false;
    let pauseRequestPending = false;
    let pendingMenuInterstitial = false;
    const WG_INTERSTITIAL_COOLDOWN_MS = 90000;
    let rewardUsedThisRun = false;
    let reviveGraceUntil = 0;
    let musicEnabled = true;
    try { musicEnabled = localStorage.getItem('emberRippleMusic') !== 'off'; } catch (_) {}
    menuMusic.volume = 0.28;
    bgMusic.volume = 0.34;
    winMusic.volume = 0.48;
    loseMusic.volume = 0.42;
    gemPickupSound.volume = 0.58;
    doorOpenSound.volume = 0.62;

    function updateMusicButton() {
        musicBtn.textContent = musicEnabled ? '♫ ON' : '♫ OFF';
        musicBtn.classList.toggle('off', !musicEnabled);
        musicBtn.setAttribute('aria-pressed', String(musicEnabled));
        musicBtn.setAttribute('aria-label', musicEnabled ? 'Turn music off' : 'Turn music on');
    }

    function playTrack(audio) {
        if (!musicEnabled) return;
        const playRequest = audio.play();
        if (playRequest && typeof playRequest.catch === 'function') playRequest.catch(() => {});
    }

    function playGemPickupSound(element) {
        if (!musicEnabled) return;
        const sound = gemPickupSound.cloneNode();
        sound.volume = gemPickupSound.volume;
        sound.playbackRate = element === 'fire' ? 1.06 : 0.96;
        const playRequest = sound.play();
        if (playRequest && typeof playRequest.catch === 'function') playRequest.catch(() => {});
    }

    function playDoorOpenSound(element) {
        if (!musicEnabled) return;
        const sound = doorOpenSound.cloneNode();
        sound.volume = doorOpenSound.volume;
        sound.playbackRate = element === 'fire' ? 1.04 : 0.94;
        const playRequest = sound.play();
        if (playRequest && typeof playRequest.catch === 'function') playRequest.catch(() => {});
    }

    function stopAllMusic() {
        menuMusic.pause();
        bgMusic.pause();
        winMusic.pause();
        loseMusic.pause();
    }

    function getWGLoader() {
        try {
            if (!window.preroll || !window.preroll.config || !window.preroll.config.loaderObjectName) return null;
            const loader = window[window.preroll.config.loaderObjectName];
            return loader || null;
        } catch (_) {
            return null;
        }
    }

    function updateRewardButton() {
        if (rewardUsedThisRun) {
            rewardLifeBtn.hidden = true;
            return;
        }
        rewardLifeBtn.hidden = false;
        rewardLifeBtn.disabled = !wgRewardReady || wgAdInProgress;
        rewardLifeBtn.textContent = wgRewardReady ? 'Watch Ad · Extra Life' : 'Reward loading…';
    }

    function bindWGAds() {
        const loader = getWGLoader();
        if (!loader) return false;
        wgLoader = loader;

        if (!wgRewardCallbacksBound && typeof loader.registerRewardCallbacks === 'function') {
            wgRewardCallbacksBound = true;
            try {
                loader.registerRewardCallbacks({
                    onReady: () => {
                        wgRewardReady = true;
                        updateRewardButton();
                    },
                    onSuccess: () => {
                        wgRewardReady = false;
                        wgAdInProgress = false;
                        const shouldGrant = rewardRequestPending;
                        rewardRequestPending = false;
                        if (shouldGrant && !rewardUsedThisRun && loseScreen.classList.contains('active')) {
                            reviveAfterReward();
                        } else {
                            updateRewardButton();
                        }
                    },
                    onFail: () => {
                        wgRewardReady = false;
                        wgAdInProgress = false;
                        rewardRequestPending = false;
                        updateRewardButton();
                    }
                });
            } catch (error) {
                console.error('WG rewarded callback registration failed:', error);
                wgRewardCallbacksBound = false;
            }
        }
        if (pendingMenuInterstitial && mainMenu.classList.contains('active')) {
            pendingMenuInterstitial = false;
            setTimeout(() => showWGInterstitial('menu-after-fmv'), 0);
        }
        return true;
    }

    document.addEventListener('wgSdkReady', bindWGAds);
    bindWGAds();

    function showWGInterstitial(reason, onDone) {
        let callbackUsed = false;
        const done = () => {
            if (callbackUsed) return;
            callbackUsed = true;
            if (typeof onDone === 'function') onDone();
        };

        const now = Date.now();
        if (wgAdInProgress || now - lastWGInterstitialAt < WG_INTERSTITIAL_COOLDOWN_MS) {
            done();
            return false;
        }

        const loader = wgLoader || getWGLoader();
        if (!loader || typeof loader.refetchAd !== 'function') {
            bindWGAds();
            done();
            return false;
        }

        wgLoader = loader;
        wgAdInProgress = true;
        lastWGInterstitialAt = now;

        const adFinished = () => {
            wgAdInProgress = false;
            done();
        };

        try {
            // Intentionally NO pause(), NO mute(), NO stopAllMusic(), and NO
            // cancelAnimationFrame() here. WG is asked to display the ad directly.
            loader.refetchAd(adFinished);
            console.log('WG interstitial requested:', reason);
            return true;
        } catch (error) {
            console.error('WG interstitial failed:', error);
            adFinished();
            return false;
        }
    }

    function reviveAfterReward() {
        rewardUsedThisRun = true;
        rewardLifeBtn.hidden = true;
        rewardLifeBtn.disabled = false;
        rewardLifeBtn.textContent = wgRewardReady ? 'Watch Ad · Extra Life' : 'Reward loading…';
        loseScreen.classList.remove('active');
        stopAllMusic();

        ember = new Hero(currentLevelData.spawn.fireX, currentLevelData.spawn.y, 'fire');
        ripple = new Hero(currentLevelData.spawn.waterX, currentLevelData.spawn.y, 'water');
        ember.grounded = true;
        ripple.grounded = true;
        hazards = currentLevelData.hazards.map(hazard => ({ ...hazard }));
        gameActive = true;
        userPaused = false;
        reviveGraceUntil = performance.now() + 1200;
        accumulator = 0;
        lastFrameTime = performance.now();
        Object.keys(keys).forEach(key => { keys[key] = false; });
        Object.keys(pressed).forEach(key => { pressed[key] = false; });
        updateHUD();
        if (musicEnabled) playTrack(bgMusic);
        animationId = requestAnimationFrame(gameLoop);
    }

    function showRewardedAd() {
        if (wgAdInProgress || rewardUsedThisRun || gameActive || !loseScreen.classList.contains('active')) return false;
        const loader = wgLoader || getWGLoader();
        if (!loader || typeof loader.showRewardAd !== 'function') {
            bindWGAds();
            updateRewardButton();
            return false;
        }
        if (!wgRewardReady) {
            bindWGAds();
            updateRewardButton();
            return false;
        }

        wgLoader = loader;
        wgAdInProgress = true;
        wgRewardReady = false;
        rewardRequestPending = true;
        rewardLifeBtn.disabled = true;
        rewardLifeBtn.textContent = 'Opening Ad…';

        try {
            // Rewarded ads are also displayed directly: no game/audio pause wrapper.
            loader.showRewardAd();
            return true;
        } catch (error) {
            console.error('WG rewarded ad failed:', error);
            wgAdInProgress = false;
            rewardRequestPending = false;
            updateRewardButton();
            return false;
        }
    }

    function playMenuMusic(restart=false) {
        if (!musicEnabled || !mainMenu.classList.contains('active')) return;
        bgMusic.pause();
        winMusic.pause();
        loseMusic.pause();
        if (restart) menuMusic.currentTime = 0;
        playTrack(menuMusic);
    }

    updateMusicButton();
    window.addEventListener('pointerdown', () => playMenuMusic(), { once:true });

    let introFinished = false;
    function finishIntro() {
        if (introFinished) return;
        introFinished = true;
        introVideo.pause();
        introScreen.classList.remove('active');
        mainMenu.classList.add('active');
        playMenuMusic(true);
        pendingMenuInterstitial = !getWGLoader();
        showWGInterstitial('menu-after-fmv');
    }

    function launchIntro() {
        introScreen.classList.add('active');
        introVideo.currentTime = 0;
        introVideo.muted = false;
        introVideo.defaultMuted = false;
        introVideo.volume = 0.88;
        const playRequest = introVideo.play();
        if (playRequest && typeof playRequest.catch === 'function') {
            // Browsers may block audible autoplay. Continue automatically in muted
            // mode instead of stopping on a separate Play button.
            playRequest.catch(() => {
                introVideo.muted = true;
                const mutedPlay = introVideo.play();
                if (mutedPlay && typeof mutedPlay.catch === 'function') mutedPlay.catch(finishIntro);
            });
        }
    }

    introSkipBtn.addEventListener('click', finishIntro);
    document.addEventListener('pointerdown', () => {
        if (introScreen.classList.contains('active') && introVideo.muted) {
            introVideo.muted = false;
            introVideo.volume = 0.88;
        }
    }, { capture:true });
    introVideo.addEventListener('ended', finishIntro);
    introVideo.addEventListener('error', finishIntro);
    launchIntro();

    class Hero {
        constructor(x, y, element) {
            this.x = x;
            this.y = y;
            this.width = 26;
            this.height = 38;
            this.vx = 0;
            this.vy = 0;
            this.element = element;
            this.grounded = false;
            this.facing = 1;
            this.runFrame = 0;
            this.animTime = 0;
            this.idleTime = Math.random() * 900;
            this.landTimer = 0;
        }

        update(stepMs) {
            const previousX = this.x;
            const previousY = this.y;
            const wasGrounded = this.grounded;

            this.vy = Math.min(this.vy + GRAVITY, MAX_FALL_SPEED);
            this.x += this.vx;
            this.resolveHorizontal(previousX);
            this.y += this.vy;
            this.grounded = false;
            this.resolveVertical(previousY, wasGrounded);

            this.x = clamp(this.x, TILE + 0.5, canvas.width - TILE - this.width - 0.5);
            if (this.y > canvas.height + 80) endGame(false, `${this.element === 'fire' ? 'Ember' : 'Ripple'} fell out of the temple!`);

            if (Math.abs(this.vx) > 0.1) {
                this.facing = Math.sign(this.vx);
                this.animTime = (this.animTime + stepMs) % 360;
                this.runFrame = Math.floor(this.animTime / 90);
            } else {
                this.animTime = 0;
                this.runFrame = 0;
                if (this.grounded) this.idleTime = (this.idleTime + stepMs) % 6000;
            }
            if (this.grounded && this.landTimer > 0) this.landTimer--;
        }

        resolveHorizontal(previousX) {
            const topRow = clamp(Math.floor((this.y + 2) / TILE), 0, map.length - 1);
            const bottomRow = clamp(Math.floor((this.y + this.height - 2) / TILE), 0, map.length - 1);
            if (this.vx > 0) {
                const previousRight = previousX + this.width;
                const currentRight = this.x + this.width;
                const firstCol = Math.floor(previousRight / TILE);
                const lastCol = Math.floor(currentRight / TILE);
                for (let c = firstCol; c <= lastCol; c++) for (let r = topRow; r <= bottomRow; r++) {
                    if (map[r]?.[c] === 1 && previousRight <= c * TILE + 1) {
                        this.x = c * TILE - this.width - 0.1;
                        return;
                    }
                }
            } else if (this.vx < 0) {
                const previousLeft = previousX;
                const currentLeft = this.x;
                const firstCol = Math.floor(previousLeft / TILE);
                const lastCol = Math.floor(currentLeft / TILE);
                for (let c = firstCol; c >= lastCol; c--) for (let r = topRow; r <= bottomRow; r++) {
                    if (map[r]?.[c] === 1 && previousLeft >= (c + 1) * TILE - 1) {
                        this.x = (c + 1) * TILE + 0.1;
                        return;
                    }
                }
            }
        }

        resolveVertical(previousY, wasGrounded) {
            const leftCol = clamp(Math.floor((this.x + 3) / TILE), 0, map[0].length - 1);
            const rightCol = clamp(Math.floor((this.x + this.width - 3) / TILE), 0, map[0].length - 1);

            if (this.vy >= 0) {
                const previousBottom = previousY + this.height;
                const currentBottom = this.y + this.height;
                const firstRow = clamp(Math.floor(previousBottom / TILE), 0, map.length - 1);
                const lastRow = clamp(Math.floor(currentBottom / TILE), 0, map.length - 1);
                let landingTop = Infinity;
                for (let r = firstRow; r <= lastRow; r++) for (let c = leftCol; c <= rightCol; c++) {
                    const tile = map[r]?.[c];
                    const tileTop = r * TILE;
                    if ((tile === 1 || tile === 6) && previousBottom <= tileTop + 1 && currentBottom >= tileTop) {
                        landingTop = Math.min(landingTop, tileTop);
                    }
                }
                if (landingTop < Infinity) {
                    if (!wasGrounded && this.vy > 2.5) this.landTimer = 5;
                    this.y = landingTop - this.height - 0.1;
                    this.vy = 0;
                    this.grounded = true;
                }
            } else {
                const previousTop = previousY;
                const currentTop = this.y;
                const firstRow = clamp(Math.floor(previousTop / TILE), 0, map.length - 1);
                const lastRow = clamp(Math.floor(currentTop / TILE), 0, map.length - 1);
                let ceilingBottom = -Infinity;
                for (let r = firstRow; r >= lastRow; r--) for (let c = leftCol; c <= rightCol; c++) {
                    const tileBottom = (r + 1) * TILE;
                    if (map[r]?.[c] === 1 && previousTop >= tileBottom - 1 && currentTop <= tileBottom) {
                        ceilingBottom = Math.max(ceilingBottom, tileBottom);
                    }
                }
                if (ceilingBottom > -Infinity) {
                    this.y = ceilingBottom + 0.1;
                    this.vy = 0;
                }
            }
        }

        getFrame() {
            const baseRow = this.element === 'fire' ? 0 : 2;
            if (!this.grounded) return this.vy < -4 ? { col:1, row:baseRow + 1 } : { col:2, row:baseRow + 1 };
            if (this.landTimer > 0) return { col:3, row:baseRow + 1 };
            if (Math.abs(this.vx) > 0.1) {
                return [
                    { col:1, row:baseRow },
                    { col:2, row:baseRow },
                    { col:3, row:baseRow },
                    { col:0, row:baseRow + 1 }
                ][this.runFrame];
            }
            return { col:0, row:baseRow };
        }

        draw() {
            const frame = this.getFrame();
            const cellSize = 256;
            const inset = 2;
            const moving = this.grounded && Math.abs(this.vx) > 0.1;
            const idling = this.grounded && !moving;
            const bob = moving ? Math.sin(this.runFrame * Math.PI / 2) * 1.1 : 0;
            const idlePhase = this.idleTime / 520;
            const idleBob = idling ? Math.sin(idlePhase) * 0.75 : 0;
            const breath = idling ? Math.sin(idlePhase) * 0.012 : 0;
            const idleLean = idling ? Math.sin(this.idleTime / 940) * 0.012 : 0;
            const floorOffset = this.element === 'water' ? 3 : 0;
            const drawSize = 78;
            ctx.save();
            ctx.translate(Math.round(this.x + this.width / 2), Math.round(this.y + this.height + bob + idleBob + floorOffset));
            ctx.rotate(idleLean * this.facing);
            ctx.scale(this.facing * (1 - breath * 0.35), 1 + breath);
            if (spriteSheet.complete && spriteSheet.naturalWidth === 1024) {
                ctx.drawImage(
                    spriteSheet,
                    frame.col * cellSize + inset,
                    frame.row * cellSize + inset,
                    cellSize - inset * 2,
                    cellSize - inset * 2,
                    -drawSize / 2,
                    -drawSize + 5,
                    drawSize,
                    drawSize
                );
            } else {
                ctx.fillStyle = this.element === 'fire' ? '#ff650f' : '#00cfff';
                ctx.fillRect(-this.width / 2, -this.height, this.width, this.height);
            }
            if (idling) {
                const moteY = -36 - Math.sin(this.idleTime / 210) * 7;
                const moteX = 20 + Math.sin(this.idleTime / 330) * 4;
                ctx.globalAlpha = 0.35 + Math.sin(this.idleTime / 170) * 0.12;
                ctx.shadowBlur = 9;
                ctx.shadowColor = this.element === 'fire' ? '#ff7b22' : '#50dfff';
                ctx.fillStyle = this.element === 'fire' ? '#ffd064' : '#b8fbff';
                ctx.beginPath();
                ctx.arc(moteX, moteY, 2.2, 0, Math.PI * 2);
                ctx.fill();
            }
            ctx.restore();
        }
    }

    function cloneLevelData(levelNumber) {
        const source = LEVELS[levelNumber - 1];
        currentLevelData = source;
        map = source.map.map(row => row.slice());
        diamonds = source.diamonds.map(diamond => ({ ...diamond, collected:false }));
        hazards = source.hazards.map(hazard => ({ ...hazard }));
    }

    function initGame(levelNumber) {
        cancelAnimationFrame(animationId);
        userPaused = false;
        pauseRequestPending = false;
        pauseScreen.classList.remove('active');
        rewardUsedThisRun = false;
        reviveGraceUntil = 0;
        rewardLifeBtn.hidden = false;
        rewardLifeBtn.disabled = false;
        rewardLifeBtn.textContent = 'Watch Ad · Extra Life';
        currentLevel = clamp(Number(levelNumber) || 1, 1, highestUnlocked);
        cloneLevelData(currentLevel);
        ember = new Hero(currentLevelData.spawn.fireX, currentLevelData.spawn.y, 'fire');
        ripple = new Hero(currentLevelData.spawn.waterX, currentLevelData.spawn.y, 'water');
        doorOpenProgress = { fire:0, water:0 };
        doorSoundPlayed = { fire:false, water:false };
        ember.grounded = true;
        ripple.grounded = true;
        gameActive = true;
        accumulator = 0;
        lastFrameTime = performance.now();
        Object.keys(pressed).forEach(key => { pressed[key] = false; });
        mainMenu.classList.remove('active');
        winScreen.classList.remove('active');
        loseScreen.classList.remove('active');
        canvas.style.display = 'block';
        hud.style.display = 'grid';
        hint.style.display = 'block';
        updateHUD();
        stopAllMusic();
        playTrack(bgMusic);
        animationId = requestAnimationFrame(gameLoop);
    }

    function showMenu() {
        gameActive = false;
        userPaused = false;
        pauseRequestPending = false;
        cancelAnimationFrame(animationId);
        pauseScreen.classList.remove('active');
        winScreen.classList.remove('active');
        loseScreen.classList.remove('active');
        canvas.style.display = 'none';
        hud.style.display = 'none';
        hint.style.display = 'none';
        stopAllMusic();
        refreshLevelSelect(currentLevel);
        mainMenu.classList.add('active');
        playMenuMusic(true);
    }

    function handleInput() {
        ember.vx = 0;
        if (keys.a || keys.A) ember.vx = -4;
        if (keys.d || keys.D) ember.vx = 4;
        if ((pressed.w || pressed.W) && ember.grounded) {
            ember.vy = JUMP_SPEED;
            ember.grounded = false;
        }

        ripple.vx = 0;
        if (keys.ArrowLeft) ripple.vx = -4;
        if (keys.ArrowRight) ripple.vx = 4;
        if (pressed.ArrowUp && ripple.grounded) {
            ripple.vy = JUMP_SPEED;
            ripple.grounded = false;
        }
        pressed.w = pressed.W = pressed.ArrowUp = false;
    }

    function updateHazards(stepMs) {
        const factor = stepMs / FIXED_STEP;
        for (const hazard of hazards) {
            if (hazard.axis === 'y') {
                hazard.y += hazard.speed * hazard.direction * factor;
                if (hazard.y <= hazard.minY) { hazard.y = hazard.minY; hazard.direction = 1; }
                if (hazard.y >= hazard.maxY) { hazard.y = hazard.maxY; hazard.direction = -1; }
            } else {
                hazard.x += hazard.speed * hazard.direction * factor;
                if (hazard.x <= hazard.minX) { hazard.x = hazard.minX; hazard.direction = 1; }
                if (hazard.x >= hazard.maxX) { hazard.x = hazard.maxX; hazard.direction = -1; }
            }
            hazard.phase += 0.055 * factor;
        }
    }

    function footTiles(hero) {
        const row = clamp(Math.floor((hero.y + hero.height - 3) / TILE), 0, map.length - 1);
        const left = clamp(Math.floor((hero.x + 4) / TILE), 0, map[0].length - 1);
        const right = clamp(Math.floor((hero.x + hero.width - 4) / TILE), 0, map[0].length - 1);
        return [map[row][left], map[row][right]];
    }

    const BLOB_FRAME_COUNT = 8;

    function blobFrame(hazard) {
        const cycle = ((hazard.phase % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
        return Math.floor(cycle / (Math.PI * 2) * BLOB_FRAME_COUNT) % BLOB_FRAME_COUNT;
    }

    function blobCollisionRadius(hazard, hero) {
        // Only the soft inner body can hurt the heroes. The animated spikes and
        // outer glow are deliberately forgiving so near misses feel fair.
        const bodyRadius = Math.max(8, hazard.radius + 1);
        return hero.grounded ? bodyRadius : Math.max(7, bodyRadius - 2);
    }

    function circleHitsHero(hazard, hero) {
        const nearestX = clamp(hazard.x, hero.x, hero.x + hero.width);
        const nearestY = clamp(hazard.y, hero.y, hero.y + hero.height);
        const dx = hazard.x - nearestX;
        const dy = hazard.y - nearestY;
        const collisionRadius = blobCollisionRadius(hazard, hero);
        return dx * dx + dy * dy < collisionRadius * collisionRadius;
    }

    function checkDanger() {
        if (performance.now() < reviveGraceUntil) return;
        const emberTiles = footTiles(ember);
        const rippleTiles = footTiles(ripple);
        if (emberTiles.includes(3)) return endGame(false, 'Ember was extinguished in the water pool!');
        if (rippleTiles.includes(2)) return endGame(false, 'Ripple evaporated in the lava pool!');

        for (const hero of [ember, ripple]) {
            const left = Math.floor((hero.x + 3) / TILE);
            const right = Math.floor((hero.x + hero.width - 3) / TILE);
            const bottomRow = Math.floor((hero.y + hero.height - 1) / TILE);
            for (let col = left; col <= right; col++) {
                if (map[bottomRow]?.[col] === 7 && hero.y + hero.height > bottomRow * TILE + 17) {
                    return endGame(false, `${hero.element === 'fire' ? 'Ember' : 'Ripple'} landed on temple spikes!`);
                }
            }
            if (hazards.some(hazard => circleHitsHero(hazard, hero))) {
                return endGame(false, `${hero.element === 'fire' ? 'Ember' : 'Ripple'} touched a flying spike blob!`);
            }
        }
    }

    function checkDiamondCollections() {
        for (const hero of [ember, ripple]) for (const diamond of diamonds) {
            if (!diamond.collected && diamond.type === hero.element &&
                hero.x < diamond.x + 20 && hero.x + hero.width > diamond.x &&
                hero.y < diamond.y + 20 && hero.y + hero.height > diamond.y) {
                diamond.collected = true;
                playGemPickupSound(hero.element);
                updateHUD();
            }
        }
    }

    function heroAtDoor(hero, door) {
        const center = hero.x + hero.width / 2;
        const doorBottom = (door.row + 1) * TILE;
        return center > door.col * TILE && center < (door.col + 1) * TILE &&
            Math.abs(hero.y + hero.height - doorBottom) <= 6;
    }

    function checkWinCondition() {
        const allFire = diamonds.every(d => d.type !== 'fire' || d.collected);
        const allWater = diamonds.every(d => d.type !== 'water' || d.collected);
        if (allFire && allWater && doorOpenProgress.fire >= 1 && doorOpenProgress.water >= 1 &&
            heroAtDoor(ember, currentLevelData.doors.fire) &&
            heroAtDoor(ripple, currentLevelData.doors.water)) {
            endGame(true);
        }
    }

    function updateDoorAnimations(stepMs) {
        const amount = stepMs / 650;
        const fireReady = diamonds.every(d => d.type !== 'fire' || d.collected);
        const waterReady = diamonds.every(d => d.type !== 'water' || d.collected);
        if (fireReady) {
            if (!doorSoundPlayed.fire) {
                doorSoundPlayed.fire = true;
                playDoorOpenSound('fire');
            }
            doorOpenProgress.fire = Math.min(1, doorOpenProgress.fire + amount);
        }
        if (waterReady) {
            if (!doorSoundPlayed.water) {
                doorSoundPlayed.water = true;
                playDoorOpenSound('water');
            }
            doorOpenProgress.water = Math.min(1, doorOpenProgress.water + amount);
        }
    }

    function updateHUD() {
        const fireTotal = diamonds.filter(d => d.type === 'fire').length;
        const waterTotal = diamonds.filter(d => d.type === 'water').length;
        const fireFound = diamonds.filter(d => d.type === 'fire' && d.collected).length;
        const waterFound = diamonds.filter(d => d.type === 'water' && d.collected).length;
        fireScore.textContent = `Ember Boy Gems: ${fireFound} / ${fireTotal}`;
        waterScore.textContent = `Ripple Girl Gems: ${waterFound} / ${waterTotal}`;
        levelBox.textContent = `Level ${currentLevel} / 100 · ${currentLevelData.puzzleName}`;
    }

    function endGame(victory, reason) {
        if (!gameActive) return;
        gameActive = false;
        stopAllMusic();
        if (victory) {
            const next = Math.min(LEVELS.length, currentLevel + 1);
            saveUnlockedStage(next);
            winDescription.textContent = currentLevel === 100
                ? 'All 100 temple levels completed! Ember and Ripple are true elemental masters.'
                : `Level ${currentLevel} complete! The next temple room is more difficult.`;
            nextLevelBtn.textContent = currentLevel === 100 ? 'Play Level 1' : 'Next Level';
            winScreen.classList.add('active');
            winMusic.currentTime = 0;
            playTrack(winMusic);
        } else {
            document.getElementById('lose-reason').textContent = reason || 'The temple defeated the heroes.';
            rewardLifeBtn.hidden = rewardUsedThisRun;
            rewardLifeBtn.disabled = !wgRewardReady;
            rewardLifeBtn.textContent = wgRewardReady ? 'Watch Ad · Extra Life' : 'Reward loading…';
            loseScreen.classList.add('active');
            loseMusic.currentTime = 0;
            playTrack(loseMusic);
        }
        showWGInterstitial(victory ? 'victory' : 'defeat');
    }

    function drawBackground() {
        const theme = THEMES[currentLevelData.theme];
        if (backgroundArt.complete && backgroundArt.naturalWidth > 1) {
            ctx.drawImage(backgroundArt, 0, 0, canvas.width, canvas.height);
            ctx.fillStyle = ['#3b160020','#002a3b20','#2a063520','#15330020','#3a2b0020'][currentLevelData.theme];
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#00000012';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        } else {
            const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
            gradient.addColorStop(0, theme.top);
            gradient.addColorStop(1, theme.bottom);
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
    }

    function drawSpike(x, y, theme) {
        ctx.fillStyle = '#b6c2c9';
        ctx.strokeStyle = theme.bottom;
        ctx.beginPath();
        ctx.moveTo(x, y + TILE);
        ctx.lineTo(x + 10, y + 14);
        ctx.lineTo(x + 20, y + TILE);
        ctx.lineTo(x + 30, y + 14);
        ctx.lineTo(x + TILE, y + TILE);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }

    function drawMap() {
        const theme = THEMES[currentLevelData.theme];
        for (let r = 0; r < map.length; r++) for (let c = 0; c < map[r].length; c++) {
            const tile = map[r][c];
            const x = c * TILE;
            const y = r * TILE;
            if (tile === 1) {
                if (blockSheet.complete && blockSheet.naturalWidth === 512) {
                    const blockStyle = (currentLevelData.theme + currentLevelData.platformStyle) % 4;
                    ctx.drawImage(blockSheet, blockStyle * 128, 0, 128, 128, x - 1, y - 1, TILE + 2, TILE + 2);
                } else {
                    ctx.fillStyle = theme.stone;
                    ctx.fillRect(x, y, TILE, TILE);
                    ctx.strokeStyle = theme.edge;
                    ctx.strokeRect(x + 0.5, y + 0.5, TILE - 1, TILE - 1);
                }
            } else if (tile === 6) {
                const platformStyles = [
                    { slab:theme.stone, edge:theme.edge, inset:'#ffffff12' },
                    { slab:'#334755', edge:'#8fd7e8', inset:'#13252e' },
                    { slab:'#58402f', edge:'#e5ad5c', inset:'#2b1d16' },
                    { slab:'#3d4e32', edge:'#a6d477', inset:'#1d2817' }
                ];
                const style = platformStyles[currentLevelData.platformStyle || 0];
                ctx.fillStyle = style.slab;
                ctx.fillRect(x, y, TILE, 14);
                ctx.fillStyle = style.edge;
                ctx.fillRect(x, y, TILE, 4);
                ctx.fillStyle = style.inset;
                ctx.fillRect(x + 5, y + 7, TILE - 10, 4);
                ctx.strokeStyle = theme.bottom;
                ctx.strokeRect(x + 0.5, y + 0.5, TILE - 1, 13);
            } else if (tile === 2 || tile === 3) {
                // Render one continuous basin strip, not one rectangle per map
                // cell. This removes the visible tile/item boundaries.
                let runEnd = c + 1;
                while (runEnd < map[r].length && map[r][runEnd] === tile) runEnd++;
                const runWidth = (runEnd - c) * TILE;
                const liquid = ctx.createLinearGradient(0, y + 7, 0, y + TILE);
                if (tile === 2) {
                    liquid.addColorStop(0, '#ffd84d');
                    liquid.addColorStop(0.18, '#ff5a13');
                    liquid.addColorStop(1, '#721400');
                } else {
                    liquid.addColorStop(0, '#b7ffff');
                    liquid.addColorStop(0.2, '#00bfe8');
                    liquid.addColorStop(1, '#064b89');
                }
                ctx.fillStyle = '#0a1119';
                ctx.fillRect(x, y + 5, runWidth, TILE - 5);
                ctx.fillStyle = liquid;
                ctx.fillRect(x + 2, y + 9, runWidth - 4, TILE - 9);
                ctx.fillStyle = tile === 2 ? '#fff09a' : '#d9ffff';
                ctx.fillRect(x + 2, y + 9, runWidth - 4, 3);
                // Only the two outer ends receive stone caps.
                ctx.fillStyle = theme.edge;
                ctx.fillRect(x, y + 5, 3, TILE - 5);
                ctx.fillRect(x + runWidth - 3, y + 5, 3, TILE - 5);
                c = runEnd - 1;
            } else if (tile === 7) {
                drawSpike(x, y, theme);
            }
        }
    }

    function drawAnimatedTraps(now) {
        if (!trapSheet.complete || trapSheet.naturalWidth !== 1024) return;
        for (let r = 0; r < map.length; r++) for (let c = 0; c < map[r].length; c++) {
            const tile = map[r][c];
            if (tile !== 2 && tile !== 3) continue;
            if (map[r][c - 1] === tile) continue;
            let runEnd = c + 1;
            while (runEnd < map[r].length && map[r][runEnd] === tile) runEnd++;
            const frame = (Math.floor(now / 85) + c + r) % 8;
            const trapRow = tile === 2 ? 0 : 1;
            for (let col = c; col < runEnd; col++) {
                ctx.drawImage(
                    trapSheet,
                    frame * 128,
                    trapRow * 128,
                    128,
                    128,
                    col * TILE - 8,
                    r * TILE - 36,
                    56,
                    76
                );
            }
            // One animated highlight spans the whole run and visually welds
            // the overlapping PNG frames into a seamless liquid surface.
            ctx.save();
            ctx.strokeStyle = tile === 2 ? '#fff1a0' : '#d9ffff';
            ctx.shadowColor = tile === 2 ? '#ff5a13' : '#00cfff';
            ctx.shadowBlur = 7;
            ctx.lineWidth = 2.5;
            ctx.beginPath();
            const startX = c * TILE + 3;
            const endX = runEnd * TILE - 3;
            for (let px = startX; px <= endX; px += 4) {
                const waveY = r * TILE + 9 + Math.sin(now / 145 + px * 0.055) * 1.5;
                if (px === startX) ctx.moveTo(px, waveY);
                else ctx.lineTo(px, waveY);
            }
            ctx.stroke();
            ctx.restore();
        }
    }

    function drawDoors() {
        const doors = currentLevelData.doors;
        for (const door of [
            { ...doors.fire, element:'fire', spriteRow:0, color:'#ff650f' },
            { ...doors.water, element:'water', spriteRow:1, color:'#00cfff' }
        ]) {
            const progress = doorOpenProgress[door.element];
            const frame = Math.min(7, Math.floor(progress * 7 + 0.001));
            const drawWidth = 52;
            const drawHeight = 78;
            const x = door.col * TILE + TILE / 2 - drawWidth / 2;
            const y = (door.row + 1) * TILE - drawHeight;
            if (doorSheet.complete && doorSheet.naturalWidth === 1024) {
                if (progress > 0) {
                    ctx.save();
                    ctx.globalAlpha = 0.22 + progress * 0.18;
                    ctx.shadowBlur = 18;
                    ctx.shadowColor = door.color;
                    ctx.fillStyle = door.color;
                    ctx.fillRect(x + 12, y + 22, drawWidth - 24, drawHeight - 25);
                    ctx.restore();
                }
                ctx.drawImage(doorSheet, frame * 128, door.spriteRow * 192, 128, 192, x, y, drawWidth, drawHeight);
            } else {
                ctx.fillStyle = door.color;
                ctx.fillRect(x + 12, y + 28, drawWidth - 24, drawHeight - 28);
            }
        }
    }

    function drawDiamonds(now) {
        for (const diamond of diamonds) {
            if (diamond.collected) continue;
            ctx.save();
            ctx.translate(diamond.x + 10, diamond.y + 10 + Math.sin(now / 150 + diamond.x) * 2);
            const color = diamond.type === 'fire' ? '#ff650f' : '#00cfff';
            const highlight = diamond.type === 'fire' ? '#fff1a3' : '#c9fbff';
            const pulse = 1 + Math.sin(now / 180 + diamond.x * 0.04) * 0.07;
            ctx.scale(pulse, pulse);

            // Wide translucent aura separates gems from both dark stone and
            // similarly colored fire/water artwork in the background.
            ctx.globalAlpha = 0.34;
            ctx.shadowBlur = 30;
            ctx.shadowColor = color;
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.moveTo(0, -14); ctx.lineTo(12, 0); ctx.lineTo(0, 14); ctx.lineTo(-12, 0); ctx.closePath();
            ctx.fill();

            ctx.globalAlpha = 1;
            ctx.shadowBlur = 18;
            ctx.shadowColor = color;
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.moveTo(0, -10); ctx.lineTo(8, 0); ctx.lineTo(0, 10); ctx.lineTo(-8, 0); ctx.closePath();
            ctx.fill();

            // Dark silhouette plus bright inner rim stays readable over any
            // temple theme without making the collectible visually oversized.
            ctx.shadowBlur = 0;
            ctx.lineWidth = 3;
            ctx.strokeStyle = '#071018';
            ctx.stroke();
            ctx.lineWidth = 1.3;
            ctx.strokeStyle = highlight;
            ctx.stroke();
            ctx.fillStyle = '#ffffffcc';
            ctx.beginPath();
            ctx.moveTo(-2, -6); ctx.lineTo(2, -3); ctx.lineTo(0, 1); ctx.closePath();
            ctx.fill();
            ctx.restore();
        }
    }

    function drawHazards() {
        for (const hazard of hazards) {
            const frame = blobFrame(hazard);
            const pulse = 1 + Math.sin(hazard.phase * 2) * 0.035;
            const size = hazard.radius * 2 + 36;
            ctx.save();
            ctx.translate(hazard.x, hazard.y);
            ctx.scale(pulse, pulse);
            if (blobSheet.complete && blobSheet.naturalWidth === 1024) {
                ctx.shadowBlur = 11;
                ctx.shadowColor = '#65ff73';
                ctx.drawImage(blobSheet, frame * 128, 0, 128, 128, -size / 2, -size / 2, size, size);
            } else {
                ctx.shadowBlur = 14;
                ctx.shadowColor = '#65ff73';
                ctx.fillStyle = '#218f69';
                ctx.beginPath();
                ctx.arc(0, 0, hazard.radius + 5, 0, Math.PI * 2);
                ctx.fill();
            }
            ctx.restore();
        }
    }

    function fixedUpdate() {
        handleInput();
        ember.update(FIXED_STEP);
        ripple.update(FIXED_STEP);
        updateHazards(FIXED_STEP);
        checkDanger();
        if (!gameActive) return;
        checkDiamondCollections();
        updateDoorAnimations(FIXED_STEP);
        checkWinCondition();
    }

    function render(now) {
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        drawBackground();
        drawMap();
        drawAnimatedTraps(now);
        drawDoors();
        drawDiamonds(now);
        drawHazards();
        ember.draw();
        ripple.draw();
    }

    function gameLoop(now) {
        if (!gameActive || userPaused) return;
        const elapsed = Math.min(100, Math.max(0, now - lastFrameTime));
        lastFrameTime = now;
        accumulator += elapsed;
        let safety = 0;
        while (accumulator >= FIXED_STEP && safety++ < 6 && gameActive) {
            fixedUpdate();
            accumulator -= FIXED_STEP;
        }
        if (!gameActive) return;
        render(now);
        animationId = requestAnimationFrame(gameLoop);
    }

    function startStage(levelNumber, requestAd=false) {
        const begin = () => initGame(levelNumber);
        if (requestAd) showWGInterstitial('level-start', begin);
        else begin();
    }

    function enterPause() {
        if (!gameActive || userPaused || pauseRequestPending) return;
        pauseRequestPending = true;
        Object.keys(keys).forEach(key => { keys[key] = false; });
        Object.keys(pressed).forEach(key => { pressed[key] = false; });

        const openPauseScreen = () => {
            pauseRequestPending = false;
            if (!gameActive || userPaused) return;
            userPaused = true;
            cancelAnimationFrame(animationId);
            pauseScreen.classList.add('active');
        };

        // Important: request the WG ad BEFORE pausing the gameplay. There is no
        // pause/mute/stop-audio action before refetchAd(); the actual pause screen
        // is entered only after WG calls the completion callback.
        showWGInterstitial('pause', openPauseScreen);
    }

    function resumeFromPause() {
        if (!userPaused || !gameActive) return;
        pauseScreen.classList.remove('active');
        userPaused = false;
        accumulator = 0;
        lastFrameTime = performance.now();
        animationId = requestAnimationFrame(gameLoop);
    }

    startBtn.addEventListener('click', () => startStage(Number(levelSelect.value), true));
    musicBtn.addEventListener('click', () => {
        musicEnabled = !musicEnabled;
        try { localStorage.setItem('emberRippleMusic', musicEnabled ? 'on' : 'off'); } catch (_) {}
        updateMusicButton();
        if (!musicEnabled) stopAllMusic();
        else if (gameActive) playTrack(bgMusic);
        else if (winScreen.classList.contains('active')) playTrack(winMusic);
        else if (loseScreen.classList.contains('active')) playTrack(loseMusic);
        else if (mainMenu.classList.contains('active')) playMenuMusic();
    });
    retryLevelBtn.addEventListener('click', () => startStage(currentLevel, true));
    nextLevelBtn.addEventListener('click', () => startStage(currentLevel === 100 ? 1 : currentLevel + 1, true));
    rewardLifeBtn.addEventListener('click', showRewardedAd);
    pauseBtn.addEventListener('click', enterPause);
    resumeBtn.addEventListener('click', resumeFromPause);
    pauseRestartBtn.addEventListener('click', () => startStage(currentLevel, true));
    document.querySelectorAll('.menu-btn').forEach(button => button.addEventListener('click', showMenu));
})();
