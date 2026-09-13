/**
 * INKWAY — UI Renderer
 * ====================
 * Renders dynamic UI elements: world map, level grid,
 * result screen, HUD updates.
 */

window.INKWAY = window.INKWAY || {};

INKWAY.UI = (function () {
    'use strict';

    const { $, $$, createElement, formatTime, animate, Easing } = INKWAY.Utils;

    // Theme class names for each world
    const THEME_CLASSES = {
        1: 'theme-notebook',
        2: 'theme-blackboard',
        3: 'theme-blueprint',
        4: 'theme-watercolor',
        5: 'theme-neon',
        6: 'theme-sketchbook'
    };

    let _cachedW1Line = null;
    let _cachedW1Margin = null;
    let _lastCamX = null;
    let _lastCamY = null;
    let _lastCamZoom = null;

    // World thumbnail gradient backgrounds — VIBRANT
    const WORLD_GRADIENTS = {
        1: 'linear-gradient(135deg, #D4A574 0%, #8B6914 50%, #C49B5E 100%)',
        2: 'linear-gradient(135deg, #1B8A3A 0%, #0D6B3F 50%, #2ECC71 100%)',
        3: 'linear-gradient(135deg, #1565C0 0%, #0D47A1 50%, #42A5F5 100%)',
        4: 'linear-gradient(135deg, #E67E22 0%, #D35400 50%, #F39C12 100%)',
        5: 'linear-gradient(135deg, #8E24AA 0%, #6A1B9A 50%, #CE93D8 100%)',
        6: 'linear-gradient(135deg, #5D4037 0%, #3E2723 50%, #8D6E63 100%)'
    };

    // Themed SVG icons for each world
    const WORLD_ICONS = {
        1: `<svg viewBox="0 0 48 48" width="56" height="56" fill="none" stroke="#FFF" stroke-width="2" stroke-linecap="round"><rect x="10" y="6" width="28" height="36" rx="2"/><line x1="16" y1="14" x2="32" y2="14"/><line x1="16" y1="20" x2="32" y2="20"/><line x1="16" y1="26" x2="28" y2="26"/><line x1="16" y1="32" x2="24" y2="32"/><path d="M14 6v36" stroke-dasharray="2 2" opacity="0.5"/></svg>`,  // Notebook
        2: `<svg viewBox="0 0 48 48" width="56" height="56" fill="none" stroke="#FFF" stroke-width="2" stroke-linecap="round"><rect x="6" y="8" width="36" height="28" rx="1"/><line x1="6" y1="36" x2="42" y2="36"/><line x1="14" y1="36" x2="14" y2="42"/><line x1="34" y1="36" x2="34" y2="42"/><text x="24" y="26" text-anchor="middle" font-size="10" fill="#FFF" stroke="none" font-family="serif">ABC</text></svg>`,  // Blackboard
        3: `<svg viewBox="0 0 48 48" width="56" height="56" fill="none" stroke="#FFF" stroke-width="2" stroke-linecap="round"><line x1="6" y1="42" x2="42" y2="42"/><line x1="6" y1="42" x2="6" y2="6"/><path d="M6 42 L20 14 L34 32 L42 20"/><polygon points="16,8 20,2 24,8" fill="none"/><line x1="20" y1="2" x2="20" y2="8"/></svg>`,  // Blueprint / Compass
        4: `<svg viewBox="0 0 48 48" width="56" height="56" fill="none" stroke="#FFF" stroke-width="2.5" stroke-linecap="round"><circle cx="18" cy="16" r="6" fill="rgba(255,255,255,0.3)"/><circle cx="30" cy="18" r="5" fill="rgba(255,255,255,0.2)"/><circle cx="22" cy="30" r="7" fill="rgba(255,255,255,0.25)"/><path d="M36 34 L40 28 L44 36 L36 34z" fill="rgba(255,255,255,0.3)"/><path d="M8 38 Q12 30 16 38" stroke-width="3"/></svg>`,  // Watercolor
        5: `<svg viewBox="0 0 48 48" width="56" height="56" fill="none" stroke="#FFF" stroke-width="2" stroke-linecap="round"><circle cx="24" cy="20" r="8"/><line x1="24" y1="28" x2="24" y2="38"/><line x1="18" y1="38" x2="30" y2="38"/><line x1="24" y1="12" x2="24" y2="6"/><line x1="16" y1="14" x2="12" y2="10"/><line x1="32" y1="14" x2="36" y2="10"/><line x1="14" y1="22" x2="8" y2="22"/><line x1="34" y1="22" x2="40" y2="22"/></svg>`,  // Lightbulb / Neon
        6: `<svg viewBox="0 0 48 48" width="56" height="56" fill="none" stroke="#FFF" stroke-width="2" stroke-linecap="round"><path d="M8 6 L8 42 L40 42 L40 12 L34 6 Z"/><polyline points="34,6 34,12 40,12"/><path d="M14 18 Q20 14 26 18 Q32 22 38 18" stroke-width="1.5"/><path d="M14 26 Q20 22 26 26 Q32 30 38 26" stroke-width="1.5"/><circle cx="20" cy="34" r="3" fill="rgba(255,255,255,0.3)"/></svg>`  // Sketchbook
    };

    function init() {
        _renderWorldMap();
        _bindNavEvents();
    }

    // ─── WORLD MAP ───

    function _renderWorldMap() {
        const container = $('#world-map-container');
        if (!container) return;
        container.innerHTML = '';

        const allMeta = INKWAY.Levels.getAllWorldMeta();

        for (const [idStr, meta] of Object.entries(allMeta)) {
            const worldId = parseInt(idStr);
            const unlocked = INKWAY.Storage.isWorldUnlocked(worldId);
            const levels = INKWAY.Levels.getWorldLevels(worldId);

            // Count stars for this world
            let worldStars = 0;
            for (const lvl of levels) {
                worldStars += INKWAY.Storage.getStars(lvl);
            }
            const maxStars = levels.length * 3;

            // Count completed levels
            let completed = 0;
            for (const lvl of levels) {
                if (INKWAY.Storage.isLevelCompleted(lvl)) completed++;
            }

            const node = createElement('div', `world-node ${unlocked ? '' : 'locked'}`);
            node.dataset.worldId = worldId;

            node.innerHTML = `
                <div class="world-thumb" style="background: ${WORLD_GRADIENTS[worldId]}">
                    <span class="world-thumb-icon">${WORLD_ICONS[worldId] || worldId}</span>
                </div>
                <div class="world-label">
                    <div class="world-name">${meta.name}</div>
                    ${unlocked
                        ? `<div class="world-progress">${completed}/${levels.length} levels  |  ${worldStars}/${maxStars} stars</div>`
                        : `<div class="world-lock-badge">Locked — ${(INKWAY_CONFIG.WORLD_UNLOCK && INKWAY_CONFIG.WORLD_UNLOCK[worldId]) || 0} stars needed</div>`
                    }
                </div>
            `;

            if (unlocked) {
                node.addEventListener('click', () => {
                    INKWAY.Main.goFullscreen?.();
                    INKWAY.Main.setCurrentWorld(worldId);
                    _renderLevelGrid(worldId);
                    INKWAY.Main.showScreen(INKWAY.Main.SCREENS.LEVEL_SELECT);
                });
            }

            container.appendChild(node);
        }
    }

    // ─── LEVEL SELECT GRID ───

    // World accent colors for level dots — STRONG visible colors
    const LEVEL_ACCENT = {
        1: { bg: 'rgba(212, 165, 116, 0.25)', border: 'rgba(139, 105, 20, 0.5)', num: '#6B5A20' },
        2: { bg: 'rgba(27, 138, 58, 0.20)', border: 'rgba(13, 107, 63, 0.5)', num: '#0D6B3F' },
        3: { bg: 'rgba(21, 101, 192, 0.18)', border: 'rgba(13, 71, 161, 0.5)', num: '#0D47A1' },
        4: { bg: 'rgba(230, 126, 34, 0.20)', border: 'rgba(211, 84, 0, 0.5)', num: '#D35400' },
        5: { bg: 'rgba(142, 36, 170, 0.18)', border: 'rgba(106, 27, 154, 0.5)', num: '#6A1B9A' },
        6: { bg: 'rgba(93, 64, 55, 0.20)', border: 'rgba(62, 39, 35, 0.5)', num: '#3E2723' }
    };

    function _renderLevelGrid(worldId) {
        const grid = $('#level-grid');
        const title = $('#level-select-title');
        const starsLabel = $('#ls-stars .stat-value');

        if (!grid) return;
        grid.innerHTML = '';

        const meta = INKWAY.Levels.getWorldMeta(worldId);
        const levels = INKWAY.Levels.getWorldLevels(worldId);

        if (title && meta) title.textContent = meta.name;

        let worldStars = 0;
        const maxStars = levels.length * 3;

        for (const levelId of levels) {
            const stars = INKWAY.Storage.getStars(levelId);
            worldStars += stars;
            const unlocked = INKWAY.Storage.isLevelUnlocked(levelId);
            const levelNum = levelId;

            const completed = INKWAY.Storage.isLevelCompleted(levelId);
            const dotClasses = ['level-dot'];
            if (!unlocked) dotClasses.push('locked');
            if (completed && stars > 0) dotClasses.push('completed');

            const dot = createElement('div', dotClasses.join(' '));
            dot.dataset.levelId = levelId;

            // Make it colorful by cycling accents
            const accentIndex = ((parseInt(levelNum) - 1) % 6) + 1;
            const accent = LEVEL_ACCENT[accentIndex] || LEVEL_ACCENT[1];

            // Apply world accent color
            if (unlocked) {
                dot.style.background = accent.bg;
                dot.style.borderColor = accent.border;
            }

            // Star display
            let starsHTML = '';
            for (let i = 0; i < 3; i++) {
                starsHTML += `<span class="${i < stars ? 'star-filled' : 'star-empty'}">★</span>`;
            }

            dot.innerHTML = `
                <span class="level-number" style="color: ${unlocked ? accent.num : ''}">${levelNum}</span>
                <div class="level-mini-stars">${starsHTML}</div>
            `;

            if (unlocked) {
                dot.addEventListener('click', () => {
                    INKWAY.Main.goFullscreen?.();
                    _startLevel(levelId, worldId);
                });
            }

            grid.appendChild(dot);
        }

        if (starsLabel) starsLabel.textContent = `${worldStars}/${maxStars}`;
    }

    // ─── START LEVEL ───

    async function _startLevel(levelId, worldId) {
        const levelData = await INKWAY.Levels.loadLevel(levelId);
        if (!levelData) {
            console.error('[UI] Failed to load level:', levelId);
            return;
        }

        const meta = INKWAY.Levels.getWorldMeta(worldId);

        // Apply world theme
        const gameScreen = $('#screen-game');
        if (gameScreen) {
            // Remove all theme classes
            Object.values(THEME_CLASSES).forEach(cls => gameScreen.classList.remove(cls));
            // Apply current world theme
            gameScreen.classList.add(THEME_CLASSES[worldId] || 'theme-notebook');
        }

        // Update HUD
        const hudName = $('#hud-level-name');
        if (hudName) {
            hudName.textContent = `${meta?.name || 'World ' + worldId} · Level ${levelId}`;
        }

        // Store current level
        INKWAY.Main.setCurrentWorld(worldId);
        INKWAY.Main.setCurrentLevel(levelData);

        // Handle Engine Off flag
        const isEngineOff = levelData.engineOff === true;
        const hudEngineOff = $('#hud-engine-off');
        if (hudEngineOff) {
            hudEngineOff.style.display = isEngineOff ? 'block' : 'none';
        }

        // Setup game systems
        INKWAY.Physics.clear();
        INKWAY.Objects.clear();
        INKWAY.Vehicle.destroy();
        INKWAY.Drawing.resetDrawing();
        INKWAY.Drawing.setInkBudget(levelData.inkBudget || 1000);
        // Fit and center the level play area with comfortable zoom on any screen size
        if (INKWAY.Drawing && INKWAY.Drawing.resizeCanvases) {
            INKWAY.Drawing.resizeCanvases();
        }

        // Set gravity
        INKWAY.Physics.setGravity(
            levelData.gravity?.x ?? 0,
            levelData.gravity?.y ?? 1.2
        );

        // Spawn terrain
        _spawnTerrain(levelData.terrain);

        // Spawn objects
        INKWAY.Objects.spawnFromLevel(levelData);

        // Spawn vehicle
        INKWAY.Vehicle.spawn(
            levelData.start?.x || 120,
            levelData.start?.y || 500
        );
        INKWAY.Vehicle.setEngineOff(isEngineOff);

        // Reset game state
        _lastCamX = null;
        _lastCamY = null;
        _lastCamZoom = null;
        _cachedW1Line = null;
        _cachedW1Margin = null;
        INKWAY.Main.setGameState('idle');
        _resetTimer();

        // Re-enable launch button
        $('#btn-launch')?.classList.remove('disabled');

        // Reset tool
        INKWAY.Drawing.setTool('draw');
        $$('.btn-tool[data-tool]').forEach(b => b.classList.remove('active'));
        $('#tool-draw')?.classList.add('active');

        // Render static layer
        _renderStaticLayer(levelData);

        // Switch to game screen
        INKWAY.Main.showScreen(INKWAY.Main.SCREENS.GAME);

        // Start game loop
        INKWAY.Main.startGameLoop();
    }

    // ─── TERRAIN SPAWN ───

    function _spawnTerrain(terrain) {
        if (!terrain) return;

        for (const t of terrain) {
            if (t.type === 'static_polygon' && t.points) {
                // Check if this static_polygon is a duplicate of a typed block in the terrain array
                const cx = t.points.reduce((s, p) => s + p[0], 0) / t.points.length;
                const cy = t.points.reduce((s, p) => s + p[1], 0) / t.points.length;
                const isDuplicate = terrain.some(other => 
                    other.type !== 'static_polygon' && 
                    other.x !== undefined && 
                    other.y !== undefined && 
                    Math.abs(other.x - cx) < 3 && 
                    Math.abs(other.y - cy) < 3
                );
                if (isDuplicate) continue;

                // Legacy polygon terrain (no matching typed block)
                const vertices = t.points.map(p => ({ x: p[0], y: p[1] }));
                const body = INKWAY.Physics.createPolygon(vertices, {
                    friction: t.friction || 0.8,
                    restitution: t.restitution || 0.1
                });
                if (body) INKWAY.Physics.addBody(body);
            }
            // Skip typed rectangle blocks here since they are handled properly by objects.js spawnFromLevel
        }
    }

    // ─── STATIC CANVAS ───

    function _renderStaticLayer(levelData) {
        const canvas = $('#canvas-static');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const cam = INKWAY.Drawing.getCamera();

        const dpr = Math.min(window.devicePixelRatio || 1, 3);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        ctx.scale(cam.zoom * dpr, cam.zoom * dpr);
        ctx.translate(-cam.x, -cam.y);

        // Draw notebook ruled lines and vertical red margin line for notebook theme
        if (levelData) {
            if (!_cachedW1Line || !_cachedW1Margin) {
                const rootStyle = getComputedStyle(document.documentElement);
                _cachedW1Line = rootStyle.getPropertyValue('--w1-line').trim() || 'rgba(0, 0, 0, 0.06)';
                _cachedW1Margin = rootStyle.getPropertyValue('--w1-margin').trim() || 'rgba(220, 50, 50, 0.4)';
            }
            const lineColor = _cachedW1Line;
            const marginColor = _cachedW1Margin;

            ctx.save();
            
            // Draw horizontal ruled lines across canvas space
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 1;
            const levelH = levelData.canvasSize?.h || 720;
            for (let y = 31; y < levelH; y += 31) {
                ctx.beginPath();
                ctx.moveTo(-2000, y);
                ctx.lineTo(4000, y);
                ctx.stroke();
            }

            // Draw vertical red margin line
            ctx.strokeStyle = marginColor;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(cam.x + 45, -2000);
            ctx.lineTo(cam.x + 45, 4000);
            ctx.stroke();

            ctx.restore();
        }

        // Draw terrain
        if (levelData.terrain) {
            for (const t of levelData.terrain) {
                ctx.save();
                if (t.points && t.points.length >= 3) {
                    // Skip static drawing for hazards (spikes, lava_blocks)
                    // because they are rendered dynamically with animations in objects.js
                    const isHazard = t.fill === '#C0392B' || t.fill === '#E74C3C';
                    if (isHazard) {
                        ctx.restore();
                        continue;
                    }

                    // Legacy polygon terrain
                    ctx.beginPath();
                    ctx.moveTo(t.points[0][0], t.points[0][1]);
                    for (let i = 1; i < t.points.length; i++) {
                        ctx.lineTo(t.points[i][0], t.points[i][1]);
                    }
                    ctx.closePath();
                    ctx.fillStyle = t.fill || '#D4C9A8';
                    ctx.fill();
                    ctx.strokeStyle = t.stroke || '#1A1A2E';
                    ctx.lineWidth = 2.5;
                    ctx.stroke();
                } else if (t.x !== undefined && t.y !== undefined) {
                    // Rectangle terrain from editor
                    const w = t.width || 100, h = t.height || 40;
                    const hw = w / 2, hh = h / 2;
                    ctx.translate(t.x, t.y);
                    ctx.rotate((t.angle || 0) * Math.PI / 180);

                    switch (t.type) {
                        case 'ground_block':
                        case 'platform': {
                            // Warm earth/paper tones
                            ctx.fillStyle = t.type === 'platform' ? '#E8DFC8' : '#D4C9A8';
                            ctx.fillRect(-hw, -hh, w, h);

                            // Hatching lines
                            ctx.save();
                            ctx.beginPath();
                            ctx.rect(-hw, -hh, w, h);
                            ctx.clip();
                            ctx.strokeStyle = t.type === 'platform' ? '#D1C8B3' : '#BFB495';
                            ctx.lineWidth = 1;
                            for (let i = -w - h; i < w + h; i += 8) {
                                ctx.beginPath();
                                ctx.moveTo(i - hw, -hh);
                                ctx.lineTo(i - hw + h, hh);
                                ctx.stroke();
                            }
                            ctx.restore();

                            // Border
                            ctx.strokeStyle = '#1A1A2E';
                            ctx.lineWidth = 2.5;
                            ctx.strokeRect(-hw, -hh, w, h);
                            break;
                        }
                        case 'spike':
                        case 'lava_block':
                            // Hazards are rendered dynamically with animations in objects.js
                            break;
                        default: {
                            // Fallback
                            ctx.fillStyle = '#D4C9A8';
                            ctx.fillRect(-hw, -hh, w, h);
                            ctx.strokeStyle = '#1A1A2E';
                            ctx.lineWidth = 2.5;
                            ctx.strokeRect(-hw, -hh, w, h);
                        }
                    }
                }
                ctx.restore();
            }
        }

        // Draw start marker
        if (levelData.start) {
            const sx = levelData.start.x;
            const sy = levelData.start.y;
            ctx.fillStyle = 'rgba(61, 139, 55, 0.15)';
            ctx.beginPath();
            ctx.arc(sx, sy, 20, 0, Math.PI * 2);
            ctx.fill();
            ctx.font = '14px Patrick Hand, sans-serif';
            ctx.fillStyle = '#3D8B37';
            ctx.textAlign = 'center';
            ctx.fillText('START', sx, sy - 25);
        }

        ctx.restore();
    }

    // ─── TIMER ───

    let _timerStart = 0;
    let _timerRunning = false;
    let _elapsedTime = 0;

    function _resetTimer() {
        _timerStart = 0;
        _timerRunning = false;
        _elapsedTime = 0;
        const el = $('#game-timer');
        if (el) el.textContent = '00:00';
    }

    function startTimer() {
        _timerStart = performance.now();
        _timerRunning = true;
        _elapsedTime = 0;
    }

    function stopTimer() {
        if (_timerRunning) {
            _elapsedTime = (performance.now() - _timerStart) / 1000;
            _timerRunning = false;
        }
    }

    function getElapsedTime() {
        if (_timerRunning) {
            return (performance.now() - _timerStart) / 1000;
        }
        return _elapsedTime;
    }

    function updateTimer() {
        if (!_timerRunning) return;
        const elapsed = (performance.now() - _timerStart) / 1000;
        const el = $('#game-timer');
        if (el) el.textContent = formatTime(elapsed);
    }

    // ─── RESULT SCREEN ───

    function showResult(stars, inkPercent, timeSeconds) {
        const resultStars = $$('#result-stars .result-star');
        resultStars.forEach((el, i) => {
            el.classList.toggle('earned', i < stars);
        });

        const inkEl = $('#result-ink');
        const timeEl = $('#result-time');

        if (inkEl) inkEl.textContent = `${Math.round(inkPercent * 100)}%`;
        if (timeEl) timeEl.textContent = formatTime(timeSeconds);

        INKWAY.Main.showOverlay(INKWAY.Main.SCREENS.RESULT);
    }

    function showFail(reason) {
        if (INKWAY.Main.getGameState() !== 'simulating') return;
        INKWAY.Main.setGameState('failed');

        INKWAY.Audio?.stopAllLoops?.(true);
        INKWAY.Audio?.playSound?.('fail');
        INKWAY.Vehicle.addFailParticles?.();

        const messages = {
            ink: 'Your pen ran dry! Try a shorter path.',
            stuck: 'Stuck in place… redraw and try again!',
            fell: 'Off the edge! Draw something to catch it.',
            spike: 'Ouch! Hit a spike!',
            lava: 'Melted! Avoid the lava!'
        };
        const msgEl = $('#fail-message');
        if (msgEl) msgEl.textContent = messages[reason] || messages.stuck;

        INKWAY.Main.showOverlay(INKWAY.Main.SCREENS.FAIL);
    }

    // ─── NAV EVENTS ───

    let _hintLines = null; // Active hint lines to render
    let _hintTimer = 0;    // Countdown to hide hint

    function _bindNavEvents() {
        // Listen for game events
        INKWAY.Main.events.on('launch', _onLaunch);
        INKWAY.Main.events.on('restartLevel', _onRestart);
        INKWAY.Main.events.on('nextLevel', _onNextLevel);
        INKWAY.Main.events.on('goalReached', _onGoalReached);
        INKWAY.Main.events.on('vehicleStuck', () => showFail('stuck'));
        INKWAY.Main.events.on('vehicleFell', () => showFail('fell'));
        INKWAY.Main.events.on('vehicleSpike', () => showFail('spike'));
        INKWAY.Main.events.on('vehicleLava', () => showFail('lava'));
        INKWAY.Main.events.on('toolChange', tool => INKWAY.Drawing.setTool(tool));
        INKWAY.Main.events.on('inkCollected', data => {
            // Add ink
            const budget = INKWAY.Drawing.getInkBudget();
            INKWAY.Drawing.setInkBudget(budget + data.value);
        });

        // Hint button
        const hintBtn = $('#btn-hint-game');
        if (hintBtn) {
            hintBtn.addEventListener('click', _onHintClick);
        }

        // Ad hint unlock overlay buttons
        const adCancelBtn = $('#btn-ad-cancel');
        if (adCancelBtn) {
            adCancelBtn.addEventListener('click', () => {
                INKWAY.Main.hideOverlay('screen-ad-unlock', true);
            });
        }

        const adWatchBtn = $('#btn-ad-watch');
        if (adWatchBtn) {
            adWatchBtn.addEventListener('click', () => {
                INKWAY.Main.hideOverlay('screen-ad-unlock', true);

                /* 
                 * DEVELOPER / BUYER AD SDK INTEGRATION NOTE:
                 * ==========================================
                 * To connect Google AdMob, Google AdSense, Adsterra, Poki, or CrazyGames SDKs:
                 * 
                 * Example for Google AdSense / H5 Games Ads:
                 *   adConfig({ sound: 'on', adComplete: () => { _showHint(); } });
                 *   adBreak({ type: 'reward', name: 'hint_reward', adComplete: () => { _showHint(); } });
                 * 
                 * For custom AdMob / Cordova / Capacitor wrappers:
                 *   admob.rewarded.show().then(() => { _showHint(); });
                 * 
                 * By default, INKWAY runs a smooth 3-second simulated video ad player below:
                 */
                INKWAY.Main.showOverlay('screen-ad-watching');

                // Countdown timer for simulated video ad playback
                const countEl = $('#ad-timer-count');
                let timeLeft = 3; // 3 seconds count
                if (countEl) countEl.textContent = timeLeft;

                const interval = setInterval(() => {
                    timeLeft--;
                    if (countEl) countEl.textContent = timeLeft;

                    if (timeLeft <= 0) {
                        clearInterval(interval);
                        INKWAY.Main.hideOverlay('screen-ad-watching', true);
                        _showHint();
                    }
                }, 1000);
            });
        }

        // Game loop hooks
        INKWAY.Main.events.on('update', _onUpdate);
        INKWAY.Main.events.on('render', _onRender);
    }

    function _getHintLines(level) {
        if (!level) return null;
        const raw = level.devHintLines || level.solution || level.hintLines;
        if (raw && raw.length > 0) {
            return raw.map(line => {
                const pts = line.points || line;
                return pts.map(p => Array.isArray(p) ? { x: p[0], y: p[1] } : p);
            });
        }
        // Fallback hint line connecting car start to finish goal
        const startX = level.start?.x || 94;
        const startY = (level.start?.y || 210) + 30;
        const goalObj = level.objects?.find(o => o.type === 'win_box');
        const goalX = level.goal?.x || goalObj?.x || 811;
        const goalY = level.goal?.y || goalObj?.y || 512;
        return [[{ x: startX, y: startY }, { x: goalX, y: goalY }]];
    }

    function _onHintClick() {
        if (INKWAY_CONFIG.AD_ENABLED) {
            const titleEl = $('#screen-ad-unlock .modal-title');
            if (titleEl && INKWAY_CONFIG.AD_POPUP_TITLE) titleEl.textContent = INKWAY_CONFIG.AD_POPUP_TITLE;

            const msgEl = $('#screen-ad-unlock p');
            if (msgEl && INKWAY_CONFIG.AD_POPUP_MESSAGE) msgEl.textContent = INKWAY_CONFIG.AD_POPUP_MESSAGE;

            INKWAY.Main.showOverlay('screen-ad-unlock');
        } else {
            _showHint();
        }
    }

    function _showHint() {
        const level = INKWAY.Main.getCurrentLevel();
        _hintLines = _getHintLines(level);
        _hintTimer = 5.0; // Show for 5 seconds

        INKWAY.Audio?.playSound?.('hint');
    }


    function _onLaunch() {
        const state = INKWAY.Main.getGameState();
        if (state !== 'idle' && state !== 'drawing') return;

        INKWAY.Main.setGameState('simulating');

        // Check engine-off mode
        const levelData = INKWAY.Main.getCurrentLevel();
        if (levelData?.engineOff) {
            INKWAY.Vehicle.setEngineOff(true);
        } else {
            INKWAY.Vehicle.setEngineOff(false);
        }

        INKWAY.Vehicle.launch();
        startTimer();

        INKWAY.Audio?.playSound?.('launch');
        if (!levelData?.engineOff) INKWAY.Audio?.startLoop?.('engine');

        // Disable drawing tools
        $('#btn-launch')?.classList.add('disabled');
    }

    function _onRestart() {
        const levelData = INKWAY.Main.getCurrentLevel();
        if (!levelData) return;

        INKWAY.Audio?.stopAllLoops?.();

        INKWAY.Physics.clear();
        INKWAY.Drawing.resetDrawing();
        INKWAY.Drawing.setInkBudget(levelData.inkBudget || 1000);
        INKWAY.Objects.spawnFromLevel(levelData);

        // Reset gravity to level defaults
        INKWAY.Physics.setGravity(
            levelData.gravity?.x ?? 0,
            levelData.gravity?.y ?? 1.2
        );

        INKWAY.Vehicle.spawn(
            levelData.start?.x || 120,
            levelData.start?.y || 500,
            levelData.vehicle || INKWAY.Storage.getActiveVehicle()
        );

        _spawnTerrain(levelData.terrain);
        _renderStaticLayer(levelData);
        _resetTimer();
        INKWAY.Main.setGameState('idle');

        // Restore Engine Off alert badge if active
        const isEngineOff = levelData.engineOff === true;
        const hudEngineOff = $('#hud-engine-off');
        if (hudEngineOff) {
            hudEngineOff.style.display = isEngineOff ? 'block' : 'none';
        }

        // Re-enable launch button
        $('#btn-launch')?.classList.remove('disabled');

        // Reset tool
        INKWAY.Drawing.setTool('draw');
        $$('.btn-tool[data-tool]').forEach(b => b.classList.remove('active'));
        $('#tool-draw')?.classList.add('active');
    }

    function _onNextLevel() {
        const current = INKWAY.Main.getCurrentLevel();
        if (!current) return;

        const nextId = INKWAY.Levels.getNextLevelId(current.id);
        if (nextId) {
            const worldNum = 1;
            _startLevel(nextId, worldNum);
        } else {
            // Game complete!
            INKWAY.Main.stopGameLoop();
            INKWAY.Main.showScreen(INKWAY.Main.SCREENS.MENU);
        }
    }

    function _onGoalReached() {
        if (INKWAY.Main.getGameState() !== 'simulating') return;

        INKWAY.Main.setGameState('complete');
        stopTimer();
        INKWAY.Audio?.stopAllLoops?.();

        const level = INKWAY.Main.getCurrentLevel();
        const inkPercent = INKWAY.Drawing.getInkPercent(); // fraction of budget USED (0=none, 1=all)
        const timeSeconds = getElapsedTime();

        // Calculate stars using devInkUsed from level JSON
        // devInkUsed is the pixel-cost the designer used to solve the level
        // 3★ = player used <= devInkUsed amount (the designer's solution)
        // 2★ = player used <= 1.5x devInkUsed
        // 1★ = anything else
        const budget = INKWAY.Drawing.getInkBudget();
        const inkUsed = INKWAY.Drawing.getInkUsed();
        const devInk = (level.devInkUsed != null && level.devInkUsed !== 0)
            ? level.devInkUsed
            : (budget * 0.3);

        let stars = 1;
        if (inkUsed <= devInk * 1.0) stars = 3;
        else if (inkUsed <= devInk * 1.5) stars = 2;

        // Save progress
        const newStars = INKWAY.Storage.setStars(level.id, stars);
        INKWAY.Storage.setBestInk(level.id, inkPercent);
        INKWAY.Storage.setBestTime(level.id, timeSeconds);
        INKWAY.Main.updateStatsDisplay();

        // Play complete sound, then individual star chimes
        INKWAY.Audio?.playSound?.('complete');

        // Show result after a brief delay
        setTimeout(() => {
            showResult(stars, inkPercent, timeSeconds);
        }, 800);
    }

    // ─── GAME LOOP HANDLERS ───

    function _onUpdate(dt) {
        const state = INKWAY.Main.getGameState();

        // Always update ink HUD (while drawing or simulating)
        _updateInkHUD();

        // Always update interactive objects animation state (bubbles rise, platforms bob/move)
        INKWAY.Objects.update(dt);

        if (state === 'simulating') {
            INKWAY.Physics.step(dt);
            INKWAY.Vehicle.update(dt);

            // Check collisions
            const vPos = INKWAY.Vehicle.getPosition();
            INKWAY.Objects.checkVehicleCollisions(vPos);

            // Camera follow
            _updateCamera(dt);
            updateTimer();

            // Update engine sound pitch/volume dynamically based on vehicle speed
            if (INKWAY.Audio?.updateEngineSound) {
                const vel = INKWAY.Vehicle.getVelocity();
                const speed = Math.sqrt(vel.x * vel.x + vel.y * vel.y);
                INKWAY.Audio.updateEngineSound(speed);
            }
        }

        // Countdown hint timer
        if (_hintTimer > 0) {
            _hintTimer -= dt;
            if (_hintTimer <= 0) {
                _hintLines = null;
                _hintTimer = 0;
            }
        }
    }

    function _onRender(dt) {
        // Re-render static layer if camera moved
        const levelData = INKWAY.Main.getCurrentLevel();
        if (levelData) {
            const cam = INKWAY.Drawing.getCamera();
            if (cam.x !== _lastCamX || cam.y !== _lastCamY || cam.zoom !== _lastCamZoom) {
                _renderStaticLayer(levelData);
                _lastCamX = cam.x;
                _lastCamY = cam.y;
                _lastCamZoom = cam.zoom;
            }
        }

        // Dynamic layer
        const canvas = $('#canvas-dynamic');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const cam = INKWAY.Drawing.getCamera();

        const dpr = Math.min(window.devicePixelRatio || 1, 3);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        ctx.scale(cam.zoom * dpr, cam.zoom * dpr);
        ctx.translate(-cam.x, -cam.y);

        // Render objects
        INKWAY.Objects.render(ctx);

        // Render vehicle
        INKWAY.Vehicle.render(ctx);

        // Render Level 1 animated hand trial tutorial
        _renderLevel1TutorialHand(ctx);

        // Render hint lines (if active)
        if (_hintLines && _hintTimer > 0) {
            const alpha = Math.min(1, _hintTimer / 2); // Fade out in last 2 sec
            ctx.save();
            ctx.globalAlpha = alpha * 0.5;
            ctx.strokeStyle = '#3498DB';
            ctx.lineWidth = 4;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.setLineDash([8, 6]);
            for (const line of _hintLines) {
                if (line.length < 2) continue;
                ctx.beginPath();
                ctx.moveTo(line[0].x, line[0].y);
                for (let i = 1; i < line.length; i++) {
                    ctx.lineTo(line[i].x, line[i].y);
                }
                ctx.stroke();
            }
            ctx.setLineDash([]);
            ctx.restore();
        }

        ctx.restore();

        // Render drawn strokes (pass false to prevent clearRect)
        INKWAY.Drawing.render(false);
    }

    function _renderLevel1TutorialHand(ctx) {
        const level = INKWAY.Main.getCurrentLevel();
        if (!level || String(level.id) !== '1') return;

        // Hide tutorial if vehicle is launched or player has already drawn an ink stroke
        if (INKWAY.Vehicle.isLaunched() || INKWAY.Drawing.getInkUsed() > 0) return;
        if (INKWAY.Main.getGameState() === 'simulating' || INKWAY.Main.getGameState() === 'complete') return;

        const startX = 94;
        const endX = 756;
        const lineY = 359;

        ctx.save();

        // Dotted guide line
        ctx.strokeStyle = 'rgba(52, 152, 219, 0.45)';
        ctx.lineWidth = 4;
        ctx.setLineDash([8, 6]);
        ctx.beginPath();
        ctx.moveTo(startX, lineY);
        ctx.lineTo(endX, lineY);
        ctx.stroke();
        ctx.setLineDash([]);

        // Calculate smooth animation loop (2.4s cycle)
        const duration = 2400;
        const cycle = (performance.now() % duration) / duration; // 0 to 1

        let handX = startX;
        let isDrawing = false;

        if (cycle < 0.15) {
            handX = startX;
            isDrawing = false;
        } else if (cycle < 0.75) {
            const t = (cycle - 0.15) / 0.6;
            handX = startX + (endX - startX) * t;
            isDrawing = true;
        } else if (cycle < 0.85) {
            handX = endX;
            isDrawing = true;
        } else {
            handX = endX;
            isDrawing = false;
        }

        // Render ink line trail while hand is drawing
        if (isDrawing && handX > startX) {
            ctx.strokeStyle = '#1A1A2E';
            ctx.lineWidth = 8;
            ctx.lineCap = 'round';
            ctx.beginPath();
            ctx.moveTo(startX, lineY);
            ctx.lineTo(handX, lineY);
            ctx.stroke();
        }

        // Draw pointing index finger SVG hand
        ctx.save();
        ctx.translate(handX, lineY);

        // Tilt hand at a natural drawing angle (-30deg)
        const rad = INKWAY.Utils.degToRad(-30);
        ctx.rotate(rad);

        // Hand shadow
        ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
        ctx.beginPath();
        ctx.ellipse(8, 12, 14, 28, INKWAY.Utils.degToRad(15), 0, Math.PI * 2);
        ctx.fill();

        // Vector hand path
        ctx.fillStyle = '#F5CBA7'; // Skin tone
        ctx.strokeStyle = '#2C3E50'; // Dark outline matching doodle theme
        ctx.lineWidth = 2.5;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        ctx.beginPath();
        ctx.moveTo(0, 0); // Finger tip at contact point (0,0)
        ctx.lineTo(10, 24);
        ctx.bezierCurveTo(24, 30, 26, 45, 18, 55);
        ctx.lineTo(6, 60);
        ctx.lineTo(-8, 55);
        ctx.bezierCurveTo(-16, 40, -12, 25, -6, 18);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Fingernail detail
        ctx.beginPath();
        ctx.ellipse(2, 6, 2.5, 4, INKWAY.Utils.degToRad(5), 0, Math.PI * 2);
        ctx.fillStyle = '#FFEBE0';
        ctx.fill();
        ctx.stroke();

        ctx.restore();

        // Floating tooltip badge above the path
        const midX = (startX + endX) / 2;
        const badgeY = lineY - 60 + Math.sin(performance.now() * 0.004) * 4; // Gentle float

        ctx.font = '700 16px "Patrick Hand", "Caveat", cursive, sans-serif';
        const text = "✏️ Draw a line from the car to the finish!";
        const textWidth = ctx.measureText(text).width;

        // Badge background
        ctx.fillStyle = '#FFF8E7';
        ctx.strokeStyle = '#E67E22';
        ctx.lineWidth = 2;
        ctx.beginPath();
        if (ctx.roundRect) {
            ctx.roundRect(midX - textWidth / 2 - 14, badgeY - 14, textWidth + 28, 30, 15);
        } else {
            ctx.rect(midX - textWidth / 2 - 14, badgeY - 14, textWidth + 28, 30);
        }
        ctx.fill();
        ctx.stroke();

        // Badge text
        ctx.fillStyle = '#1A1A2E';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(text, midX, badgeY + 1);

        ctx.restore();
    }

    function _updateCamera(dt) {
        if (!INKWAY.Vehicle.isLaunched()) return;

        // Camera follow disabled as per request, the level stays stationary.
        // const vPos = INKWAY.Vehicle.getPosition();
        // const vVel = INKWAY.Vehicle.getVelocity();
        // const canvas = $('#canvas-dynamic');
        // if (!canvas) return;
        // const cam = INKWAY.Drawing.getCamera();
        // const targetX = vPos.x - canvas.width / (2 * cam.zoom) + vVel.x * INKWAY_CONFIG.CAMERA_LEAD;
        // const targetY = vPos.y - canvas.height / (2 * cam.zoom);
        // INKWAY.Drawing.setCamera(
        //     cam.x + (targetX - cam.x) * INKWAY_CONFIG.CAMERA_LERP,
        //     cam.y + (targetY - cam.y) * INKWAY_CONFIG.CAMERA_LERP
        // );
    }

    // ─── REFRESH HELPERS ───

    function refreshWorldMap() {
        _renderWorldMap();
    }

    function refreshLevelGrid() {
        const world = INKWAY.Main.getCurrentWorld();
        if (world) _renderLevelGrid(world);
    }

    // ─── INK HUD WITH STAR MARKERS ───

    function _updateInkHUD() {
        const inkFill = $('#ink-bar-fill');
        const inkPercentEl = $('#ink-percent');
        const star3 = $('#ink-star-3');
        const star2 = $('#ink-star-2');

        const budget = INKWAY.Drawing.getInkBudget();
        const inkUsed = INKWAY.Drawing.getInkUsed();
        const level = INKWAY.Main.getCurrentLevel();
        const devInk = (level?.devInkUsed != null && level.devInkUsed !== 0)
            ? level.devInkUsed
            : (budget * 0.3);

        // Scale the visible bar so ink looks proportional, not unlimited.
        // The "visual budget" is capped at 3x devInkUsed so the star markers
        // are spread nicely across the bar (~33% for 3★, ~50% for 2★).
        const visualBudget = Math.min(budget, Math.max(devInk * 3, budget * 0.25));

        if (inkFill) {
            // How much of the visual bar is remaining
            const remaining = Math.max(0, visualBudget - inkUsed);
            const pct = Math.max(0, Math.min(100, (remaining / visualBudget) * 100));
            inkFill.style.width = `${pct}%`;

            // Color transitions
            inkFill.classList.remove('ink-mid', 'ink-low');
            if (pct < 20) {
                inkFill.classList.add('ink-low');
            } else if (pct < 50) {
                inkFill.classList.add('ink-mid');
            }
        }

        if (inkPercentEl) {
            // Show actual remaining % of real budget
            const actualRemaining = Math.max(0, Math.min(100, ((budget - inkUsed) / budget) * 100));
            inkPercentEl.textContent = `${Math.round(actualRemaining)}%`;
        }

        // Star marker positions on the scaled bar
        const star3Pos = devInk / visualBudget;          // fraction used for 3★
        const star2Pos = (devInk * 1.5) / visualBudget;  // fraction used for 2★

        if (star3) {
            // Position from the right (remaining side) — bar fills right-to-left
            star3.style.left = `${Math.max(5, Math.min(95, (1 - star3Pos) * 100))}%`;
            const within3 = inkUsed <= devInk;
            star3.classList.toggle('active', within3);
            star3.classList.toggle('passed', !within3);
        }
        if (star2) {
            star2.style.left = `${Math.max(5, Math.min(95, (1 - star2Pos) * 100))}%`;
            const within2 = inkUsed <= devInk * 1.5;
            const past3 = inkUsed > devInk;
            star2.classList.toggle('active', past3 && within2);
            star2.classList.toggle('passed', !within2);
        }
    }

    return {
        init,
        showResult, showFail,
        startTimer, stopTimer, updateTimer,
        refreshWorldMap, refreshLevelGrid,
        updateInkHUD: _updateInkHUD
    };
})();
