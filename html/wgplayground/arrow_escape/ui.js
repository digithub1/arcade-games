/* ============================
   Arrow Escape - UI Manager
   ============================ */

class UIManager {
    devMode = false;

    constructor() {
        // Screens
        this.menuScreen = document.getElementById('menuScreen');
        this.levelSelectScreen = document.getElementById('levelSelectScreen');
        this.gameHUD = document.getElementById('gameHUD');
        this.settingsScreen = document.getElementById('settingsScreen');

        // Overlays
        this.levelCompleteOverlay = document.getElementById('levelCompleteOverlay');
        this.levelFailedOverlay = document.getElementById('levelFailedOverlay');
        this.allCompleteOverlay = document.getElementById('allCompleteOverlay');

        // HUD elements
        this.levelBadge = document.getElementById('levelBadge');
        this.heartsContainer = document.getElementById('heartsContainer');
        this.arrowsValue = document.getElementById('arrowsValue');
        this.floatingTextContainer = document.getElementById('floatingTextContainer');

        // Tutorial
        this.tutorialTooltip = document.getElementById('tutorialTooltip');
        this.tutorialText = document.getElementById('tutorialText');

        // Game state
        this.currentLevelId = 1;
        this.hearts = 3;
        this.maxHearts = 3;
        this.totalArrows = 0;
        this.escapedArrows = 0;

        // Settings state
        this._resetState = false;
        this._resetTimer = null;

        this._bindEvents();
        this._initSettings();
        this._initGame();
    }

    _initGame() {
        window.arrowGame = new ArrowGame();
        window.arrowGame.onArrowEscaped = (arrowId) => this._onArrowEscaped(arrowId);
        window.arrowGame.onWrongTap = (arrowId) => this._onWrongTap(arrowId);
        window.arrowGame.onAllEscaped = () => this._onAllEscaped();
        this._showScreen('menu');
    }

    _initSettings() {
        buildLangList();
        this._updateSettingsToggles();
    }

    // ---- Event Binding ----
    _bindEvents() {
        // Menu — Play
        document.getElementById('btnPlay').addEventListener('click', () => {
            if (window.audioManager) window.audioManager.playClick();
            this._showScreen('levelSelect');
        });

        // Menu — Settings
        document.getElementById('menuSettingsBtn').addEventListener('click', () => {
            if (window.audioManager) window.audioManager.playClick();
            this._showSettings();
        });

        // Settings — Back
        document.getElementById('settingsBackBtn').addEventListener('click', () => {
            if (window.audioManager) window.audioManager.playClick();
            this._hideSettings();
        });

        // Settings — Music toggle
        document.getElementById('musicToggle').addEventListener('click', (e) => {
            e.stopPropagation();
            if (window.audioManager) {
                window.audioManager.playClick();
                window.audioManager.setMusicEnabled(!window.audioManager.musicEnabled);
                this._updateSettingsToggles();
            }
        });

        // Settings — Volume slider
        var volSlider = document.getElementById('musicVolumeSlider');
        if (volSlider) {
            volSlider.addEventListener('input', (e) => {
                e.stopPropagation();
                var val = parseInt(e.target.value) / 100;
                if (window.audioManager) window.audioManager.setMusicVolume(val);
                var label = document.getElementById('musicVolumeValue');
                if (label) label.textContent = Math.round(val * 100) + '%';
            });
            volSlider.addEventListener('click', (e) => e.stopPropagation());
        }

        // Settings — SFX toggle
        document.getElementById('sfxToggle').addEventListener('click', (e) => {
            e.stopPropagation();
            if (window.audioManager) {
                window.audioManager.setSfxEnabled(!window.audioManager.soundEnabled);
                window.audioManager.playClick();
                this._updateSettingsToggles();
            }
        });

        // Settings — Reset data
        document.getElementById('settingsResetBtn').addEventListener('click', (e) => {
            e.stopPropagation();
            if (window.audioManager) window.audioManager.playClick();
            this._handleReset();
        });

        // Level select — Back
        document.getElementById('btnBackToMenu').addEventListener('click', () => {
            if (window.audioManager) window.audioManager.playClick();
            this._showScreen('menu');
        });

        // Game HUD — Back
        document.getElementById('btnBackToLevels').addEventListener('click', () => {
            if (window.audioManager) window.audioManager.playClick();
            window.arrowGame.disableInput();
            this._showScreen('levelSelect');
        });

        // Level complete — Next
        document.getElementById('btnNextLevel').addEventListener('click', () => {
            if (window.audioManager) window.audioManager.playClick();
            this._hideOverlay(this.levelCompleteOverlay);
            this._showMidrollAd(() => {
                if (this.currentLevelId < LevelData.getTotalLevels()) {
                    this._startLevel(this.currentLevelId + 1);
                } else {
                    this._showOverlay(this.allCompleteOverlay);
                    this._spawnConfetti(document.getElementById('confettiContainer2'));
                }
            });
        });

        // Level complete — Replay
        document.getElementById('btnReplayLevel').addEventListener('click', () => {
            if (window.audioManager) window.audioManager.playClick();
            this._hideOverlay(this.levelCompleteOverlay);
            this._startLevel(this.currentLevelId);
        });

        // Level failed — Retry
        document.getElementById('btnRetryLevel').addEventListener('click', () => {
            if (window.audioManager) window.audioManager.playClick();
            this._hideOverlay(this.levelFailedOverlay);
            this._startLevel(this.currentLevelId);
        });

        // Level failed — Level select
        document.getElementById('btnFailToLevels').addEventListener('click', () => {
            if (window.audioManager) window.audioManager.playClick();
            this._hideOverlay(this.levelFailedOverlay);
            this._showScreen('levelSelect');
        });

        // All complete — Main menu
        document.getElementById('btnBackToMenuFinal').addEventListener('click', () => {
            if (window.audioManager) window.audioManager.playClick();
            this._hideOverlay(this.allCompleteOverlay);
            this._showScreen('menu');
        });

        // Dev mode (P key)
        document.addEventListener('keydown', (e) => {
            if (e.key === 'p' || e.key === 'P') {
                this.devMode = !this.devMode;
                this._buildLevelList();
                console.log('Dev mode:', this.devMode ? 'ON' : 'OFF');
            }
        });
    }

    // ---- Settings ----
    _showSettings() {
        this.settingsScreen.classList.remove('hidden');
        this.settingsScreen.style.opacity = '0';
        gsap.to(this.settingsScreen, { opacity: 1, duration: 0.3 });
        this._updateSettingsToggles();
        this._resetResetBtn();
        gsap.fromTo('.settings-container',
            { y: 40, opacity: 0, scale: 0.95 },
            { y: 0, opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(1.4)', delay: 0.1 }
        );
    }

    _hideSettings() {
        gsap.to(this.settingsScreen, {
            opacity: 0, duration: 0.25, ease: 'power2.in',
            onComplete: () => { this.settingsScreen.classList.add('hidden'); }
        });
    }

    _updateSettingsToggles() {
        if (!window.audioManager) return;
        var musicRow = document.getElementById('musicToggle');
        var sfxRow = document.getElementById('sfxToggle');
        if (musicRow) {
            if (window.audioManager.musicEnabled) musicRow.classList.add('active');
            else musicRow.classList.remove('active');
        }
        if (sfxRow) {
            if (window.audioManager.soundEnabled) sfxRow.classList.add('active');
            else sfxRow.classList.remove('active');
        }
        var slider = document.getElementById('musicVolumeSlider');
        var valLabel = document.getElementById('musicVolumeValue');
        if (slider) {
            var pct = Math.round(window.audioManager.musicVolume * 100);
            slider.value = pct;
            if (valLabel) valLabel.textContent = pct + '%';
        }
    }

    _handleReset() {
        var btn = document.getElementById('settingsResetBtn');
        if (!btn) return;
        if (!this._resetState) {
            this._resetState = true;
            btn.textContent = T('reset_confirm');
            btn.classList.add('confirming');
            this._resetTimer = setTimeout(() => this._resetResetBtn(), 3000);
            return;
        }
        localStorage.clear();
        location.reload();
    }

    _resetResetBtn() {
        this._resetState = false;
        if (this._resetTimer) { clearTimeout(this._resetTimer); this._resetTimer = null; }
        var btn = document.getElementById('settingsResetBtn');
        if (btn) {
            btn.textContent = T('reset_storage');
            btn.classList.remove('confirming');
        }
    }

    // ---- Screen Management ----
    _showScreen(screenName) {
        [this.menuScreen, this.levelSelectScreen, this.gameHUD].forEach(s => {
            s.classList.remove('active');
        });
        [this.levelCompleteOverlay, this.levelFailedOverlay, this.allCompleteOverlay].forEach(o => {
            o.classList.remove('active');
        });
        this.tutorialTooltip.classList.remove('active');

        switch (screenName) {
            case 'menu':
                this.menuScreen.classList.add('active');
                this._animateMenuIn();
                break;
            case 'levelSelect':
                this.levelSelectScreen.classList.add('active');
                this._buildLevelList();
                this._animateLevelSelectIn();
                break;
            case 'game':
                this.gameHUD.classList.add('active');
                break;
        }
    }

    // ---- Menu Animation ----
    _animateMenuIn() {
        gsap.fromTo('.title-arrow', { y: -30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'back.out(1.5)' });
        gsap.fromTo('.title-escape', { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, delay: 0.15, ease: 'back.out(1.5)' });
        gsap.fromTo('.menu-subtitle', { opacity: 0 }, { opacity: 1, duration: 0.4, delay: 0.3 });
        gsap.fromTo('.play-btn', { y: 20, opacity: 0, scale: 0.8 }, { y: 0, opacity: 1, scale: 1, duration: 0.5, delay: 0.4, ease: 'back.out(1.7)' });
    }

    // ---- Level Grid ----
    _buildLevelList() {
        var scroller = document.getElementById('levelScroller');
        scroller.innerHTML = '';
        var progress = LevelData.getProgress();

        var checkSvg = '<svg viewBox="0 0 24 24" width="16" height="16"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="currentColor"/></svg>';
        var lockSvg = '<svg viewBox="0 0 24 24" width="22" height="22"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2z" fill="currentColor"/></svg>';

        LevelData.levels.forEach(function (level) {
            var card = document.createElement('div');
            card.className = 'level-card';

            var isUnlocked = this.devMode || level.id <= progress.unlockedLevel;
            var isCurrent = level.id === progress.unlockedLevel;
            var isCompleted = level.id < progress.unlockedLevel;

            if (isUnlocked) {
                card.classList.add('unlocked');
                if (isCurrent) card.classList.add('current');
                if (isCompleted) card.classList.add('completed');

                card.innerHTML =
                    '<div class="level-card-number">' + level.id + '</div>' +
                    (isCompleted ? '<div class="level-card-check">' + checkSvg + '</div>' : '');

                card.addEventListener('click', () => {
                    if (window.audioManager) window.audioManager.playClick();
                    this._startLevel(level.id);
                });
            } else {
                card.classList.add('locked');
                card.innerHTML = '<div class="level-card-lock">' + lockSvg + '</div>';
            }

            scroller.appendChild(card);
        }.bind(this));
    }

    _animateLevelSelectIn() {
        var cards = document.querySelectorAll('.level-card');
        gsap.fromTo(cards, { scale: 0, opacity: 0 }, {
            scale: 1, opacity: 1, duration: 0.35, stagger: 0.04, ease: 'back.out(1.5)'
        });
    }

    // ---- Start Level ----
    _startLevel(levelId) {
        var levelData = LevelData.getLevel(levelId);
        if (!levelData) return;

        this.currentLevelId = levelId;
        this.hearts = levelData.hearts || GameConfig.maxHearts;
        this.maxHearts = this.hearts;
        this.totalArrows = levelData.arrows.length;
        this.escapedArrows = 0;

        this._showScreen('game');
        this._updateHUD();
        window.arrowGame.loadLevel(levelData);

        if (levelData.tutorial) {
            this._showTutorial(T('tutorial_tap'));
        }

        if (window.audioManager && window.audioManager.musicEnabled) {
            window.audioManager.startMusic();
        }
    }

    // ---- HUD Updates ----
    _updateHUD() {
        document.querySelector('.level-badge-text').textContent = T('level') + ' ' + this.currentLevelId;

        var heartSvg = '<svg viewBox="0 0 24 24" width="24" height="24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/></svg>';

        this.heartsContainer.innerHTML = '';
        for (var i = 0; i < this.maxHearts; i++) {
            var heart = document.createElement('span');
            heart.className = 'heart' + (i < this.hearts ? ' pulse' : ' empty');
            heart.innerHTML = heartSvg;
            this.heartsContainer.appendChild(heart);
        }

        this.arrowsValue.textContent = this.totalArrows - this.escapedArrows;
    }

    // ---- Game Callbacks ----
    _onArrowEscaped(arrowId) {
        this.escapedArrows++;
        this._updateHUD();
        this.tutorialTooltip.classList.remove('active');
    }

    _onWrongTap(arrowId) {
        this.hearts--;

        var heartEls = this.heartsContainer.querySelectorAll('.heart');
        var breakIndex = this.hearts;
        if (heartEls[breakIndex]) {
            heartEls[breakIndex].classList.remove('pulse');
            heartEls[breakIndex].classList.add('breaking');
            setTimeout(() => {
                heartEls[breakIndex].classList.remove('breaking');
                heartEls[breakIndex].classList.add('empty');
            }, GameConfig.heartBreakDuration * 1000);
        }

        this._showFloatingText('-1', true);

        if (this.hearts <= 0) {
            setTimeout(() => {
                window.arrowGame.disableInput();
                this._showOverlay(this.levelFailedOverlay);
                if (window.audioManager) window.audioManager.playFail();
            }, 600);
        }
    }

    _onAllEscaped() {
        window.arrowGame.disableInput();

        var stars = this._calculateStars();
        LevelData.completeLevel(this.currentLevelId, stars, 0);

        setTimeout(() => {
            this._showOverlay(this.levelCompleteOverlay);
            this._spawnConfetti(document.getElementById('confettiContainer'));

            if (window.audioManager) window.audioManager.playWin();

            var nextBtn = document.getElementById('btnNextLevel');
            var nextText = nextBtn.querySelector('[data-i18n]');
            if (this.currentLevelId >= LevelData.getTotalLevels()) {
                if (nextText) {
                    nextText.textContent = T('finish');
                    nextText.setAttribute('data-i18n', 'finish');
                }
            } else {
                if (nextText) {
                    nextText.textContent = T('next_level');
                    nextText.setAttribute('data-i18n', 'next_level');
                }
            }
        }, 500);
    }

    _calculateStars() {
        if (this.hearts === this.maxHearts) return 3;
        if (this.hearts >= this.maxHearts - 1) return 2;
        return 1;
    }

    // ---- Overlays ----
    _showOverlay(overlay) {
        overlay.classList.add('active');
        var panel = overlay.querySelector('.overlay-panel');
        if (panel) {
            gsap.fromTo(panel, { scale: 0.7, opacity: 0 }, {
                scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(1.7)'
            });
        }
    }

    _hideOverlay(overlay) {
        var panel = overlay.querySelector('.overlay-panel');
        if (panel) {
            gsap.to(panel, {
                scale: 0.7, opacity: 0, duration: 0.25,
                onComplete: () => { overlay.classList.remove('active'); }
            });
        } else {
            overlay.classList.remove('active');
        }
    }

    _showMidrollAd(resumeGame) {
        window.arrowGame.disableInput();
        if (window.audioManager) window.audioManager.stopMusic();

        var loaderName = window.preroll && window.preroll.config && window.preroll.config.loaderObjectName;
        var loader = loaderName && window[loaderName];
        if (loader && typeof loader.refetchAd === 'function') {
            loader.refetchAd(resumeGame);
        } else {
            resumeGame();
        }
    }

    // ---- Floating Text ----
    _showFloatingText(text, isNegative) {
        var el = document.createElement('div');
        el.className = 'floating-text' + (isNegative ? ' negative' : '');
        el.textContent = text;
        el.style.left = '50%';
        el.style.top = '40%';
        el.style.transform = 'translate(-50%, -50%)';

        this.floatingTextContainer.appendChild(el);

        gsap.fromTo(el,
            { y: 0, opacity: 1, scale: 0.5 },
            {
                y: -GameConfig.floatingTextRise, opacity: 0, scale: 1.2,
                duration: GameConfig.floatingTextDuration, ease: 'power2.out',
                onComplete: () => el.remove()
            }
        );
    }

    // ---- Confetti ----
    _spawnConfetti(container) {
        container.innerHTML = '';
        var colors = ['#4ecca3', '#ffbe0b', '#5b7db5', '#ff6060', '#b84DFF', '#FF8C4D'];

        for (var i = 0; i < GameConfig.confettiCount; i++) {
            var piece = document.createElement('div');
            piece.className = 'confetti-piece';
            piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            piece.style.left = Math.random() * 100 + '%';
            piece.style.width = (Math.random() * 8 + 4) + 'px';
            piece.style.height = (Math.random() * 8 + 4) + 'px';
            piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
            container.appendChild(piece);

            gsap.fromTo(piece,
                { y: -20, x: (Math.random() - 0.5) * 40, rotation: 0, opacity: 1 },
                {
                    y: container.offsetHeight + 20, x: (Math.random() - 0.5) * 200,
                    rotation: Math.random() * 720 - 360, opacity: 0,
                    duration: GameConfig.confettiDuration + Math.random(),
                    delay: Math.random() * 0.5, ease: 'power1.in',
                    onComplete: () => piece.remove()
                }
            );
        }
    }

    // ---- Tutorial ----
    _showTutorial(text) {
        this.tutorialText.textContent = text;
        this.tutorialTooltip.classList.add('active');
        gsap.fromTo(this.tutorialTooltip,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, delay: 0.8, ease: 'back.out(1.5)' }
        );
    }
}

// ---- Initialize on DOM ready ----
document.addEventListener('DOMContentLoaded', () => {
    loadLanguage();
    window.audioManager = new AudioManager();
    window.uiManager = new UIManager();
});
