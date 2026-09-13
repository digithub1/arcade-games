(function() {
    /** --- BULLETPROOF AUDIO SYSTEM --- */
    let audioCtx = null;

    function initAudio() {
        try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (!audioCtx && AudioContext) {
                audioCtx = new AudioContext();
            }
            if (audioCtx && audioCtx.state === 'suspended') {
                audioCtx.resume();
            }
        } catch (e) {
            console.warn("Audio Context blocked or not supported.");
        }
    }

    function playSound(type) {
        try {
            if (!audioCtx) return;
            const osc = audioCtx.createOscillator();
            const gainNode = audioCtx.createGain();
            osc.connect(gainNode);
            gainNode.connect(audioCtx.destination);
            const now = audioCtx.currentTime;
            if (type === 'jump') {
                osc.type = 'square';
                osc.frequency.setValueAtTime(150, now);
                osc.frequency.exponentialRampToValueAtTime(300, now + 0.1);
                gainNode.gain.setValueAtTime(0.04, now);
                gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
                osc.start(now);
                osc.stop(now + 0.1);
            } else if (type === 'crash') {
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(100, now);
                osc.frequency.exponentialRampToValueAtTime(10, now + 0.35);
                gainNode.gain.setValueAtTime(0.18, now);
                gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
                osc.start(now);
                osc.stop(now + 0.35);
            } else if (type === 'level') {
                osc.type = 'sine';
                osc.frequency.setValueAtTime(400, now);
                osc.frequency.setValueAtTime(600, now + 0.1);
                osc.frequency.setValueAtTime(800, now + 0.2);
                gainNode.gain.setValueAtTime(0.08, now);
                gainNode.gain.linearRampToValueAtTime(0, now + 0.45);
                osc.start(now);
                osc.stop(now + 0.45);
            }
        } catch (e) { /* silent */ }
    }

    /** --- GAME ENGINE --- */
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    const uiMenu = document.getElementById('ui-menu');
    const uiHowTo = document.getElementById('ui-how-to');
    const uiGameover = document.getElementById('ui-gameover');
    const hud = document.getElementById('hud');
    const messageDisplay = document.getElementById('message-display');
    const levelDisplay = document.getElementById('level-display');
    const livesDisplay = document.getElementById('lives-display');
    const finalScore = document.getElementById('final-score');
    const finalDistanceEl = document.getElementById('final-distance');
    const damageOverlay = document.getElementById('damage-overlay');

    let w, h;
    let gameState = 'menu';
    let animationId;
    let frameCount = 0;

    let gameSpeed = 5;
    let level = 1;
    let lives = 4;
    let distance = 0;
    let distanceSinceLevelStart = 0; // ✅ FIX: distance travelled in current level
    let corridorWidth = 350;
    let cameraX = 0;
    let isInvulnerable = 0;
    let screenShake = 0;
    let shakeX = 0;
    let shakeY = 0;

    // Save state for continue feature
    let savedLevel = 1;
    let saveddistance = 1;
    let savedSpeed = 5;




    let savedCorridorWidth = 350;

    let player = {};
    let particles = [];
    let stars = [];
    let walls = [];

    function resize() {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    /** --- MENU FLOATING PARTICLES --- */
    function spawnMenuParticles() {
        const container = document.getElementById('menu-particles');
        if (!container) return;
        container.innerHTML = '';
        const colors = ['#d90bb0', '#0be0d9', '#ff66cc', '#a855f7', '#ffffff', '#ff3366', '#6a0b73'];
        for (let i = 0; i < 35; i++) {
            const particle = document.createElement('div');
            particle.classList.add('menu-particle');
            const size = Math.random() * 4 + 2;
            const color = colors[Math.floor(Math.random() * colors.length)];
            particle.style.cssText = `
                        left: ${Math.random() * 100}%;
                        width: ${size}px;
                        height: ${size}px;
                        background: ${color};
                        --glow: ${color};
                        --dur: ${Math.random() * 6 + 5}s;
                        --delay: ${Math.random() * 7}s;
                    `;
            container.appendChild(particle);
        }
    }
    spawnMenuParticles();

    /** --- UI FUNCTIONS --- */
    function showMenu() {
        gameState = 'menu';
        hideAllUI();
        uiMenu.classList.remove('hidden');
        spawnMenuParticles();
        generateStars();
        screenShake = 0;
    }

    function hideAllUI() {
        uiMenu.classList.add('hidden');
        uiHowTo.classList.add('hidden');
        uiGameover.classList.add('hidden');
        hud.classList.add('hidden');
        messageDisplay.classList.add('hidden');
    }

    function showMessage(msg) {
        messageDisplay.innerText = msg;
        messageDisplay.classList.remove('hidden');
        messageDisplay.style.animation = 'none';
        void messageDisplay.offsetWidth;
        messageDisplay.style.animation = 'msgPulse 2s ease-in-out infinite';
    }

    function updateLivesDisplay() {
        let hearts = "";
        for (let i = 0; i < lives; i++) hearts += '<span class="heart">♥</span> ';
        livesDisplay.innerHTML = hearts;
    }

    function showMidrollAd(resumeCallback) {
        const preroll = window.preroll;
        const loaderObjectName = preroll && preroll.config && preroll.config.loaderObjectName;
        const loader = loaderObjectName && window[loaderObjectName];

        if (!loader || typeof loader.refetchAd !== 'function') {
            resumeCallback();
            return;
        }

        if (audioCtx && audioCtx.state === 'running') {
            audioCtx.suspend();
        }
        gameState = 'paused';
        loader.refetchAd(resumeCallback);
    }

    /** --- START & RESET LOGIC --- */
    function startGame(continueFromLast = false) {
        initAudio();
        gameState = 'playing';
        hideAllUI();
        hud.classList.remove('hidden');

        if (continueFromLast) {
            level = savedLevel;
            gameSpeed = savedSpeed;
            corridorWidth = savedCorridorWidth;
            distance = saveddistance;
        } else {
            level = 1;
            gameSpeed = 5;
            corridorWidth = 350;
            distance = 0;
        }

        lives = 4;
        distanceSinceLevelStart = 0; // ✅ reset level progress counter
        cameraX = 0;
        particles = [];
        screenShake = 0;
        shakeX = 0;
        shakeY = 0;
        isInvulnerable = 0;

        levelDisplay.innerText = `LEVEL: ${level}`;
        updateLivesDisplay();
        showMessage("Hold To Fly Up!");

        resetPlayerAndWalls();
    }

    function resetPlayerAndWalls() {
        player = {
            x: w * 0.3,
            y: h / 2,
            size: 14,
            isHolding: false,
            vy: 5,
            trail: []
        };
        walls = [];
        let startY = h / 2;
        for (let i = -2; i < Math.ceil(w / 50) + 15; i++) {
            walls.push({
                x: cameraX + (i * 50),
                centerY: startY
            });
        }
    }

    function handleCrash() {
        if (isInvulnerable > 0) return;
        playSound('crash');
        screenShake = 18;
        damageOverlay.classList.add('flash');
        setTimeout(() => damageOverlay.classList.remove('flash'), 160);

        for (let i = 0; i < 30; i++) {
            particles.push({
                x: player.x,
                y: player.y,
                vx: (Math.random() - 0.5) * 14,
                vy: (Math.random() - 0.5) * 14,
                life: 1,
                decay: Math.random() * 0.04 + 0.015,
                color: Math.random() > 0.5 ? '#ff3366' : '#ffffff',
                size: Math.random() * 5 + 2
            });
        }

        lives--;
        updateLivesDisplay();

        if (lives <= 0) {
            // Save state for potential continue
            savedLevel = level;
            saveddistance = distance;
            savedSpeed = gameSpeed;
            savedCorridorWidth = corridorWidth;

            gameState = 'gameover';
            hud.classList.add('hidden');
            messageDisplay.classList.add('hidden');
            uiGameover.classList.remove('hidden');
            finalScore.innerText = `Level: ${level}`;
            finalDistanceEl.innerText = `Distance: ${Math.floor(distance)}`;

            const titleEl = uiGameover.querySelector('h1');
            if (titleEl) {
                titleEl.classList.remove('gameover-title');
                void titleEl.offsetWidth;
                titleEl.classList.add('gameover-title');
            }
        } else {
            showMessage(`Crash! ${lives} ${lives === 1 ? 'Life' : 'Lives'} Left!`);
            isInvulnerable = 130;
            resetPlayerAndWalls();
        }
    }

    /** --- BUTTON EVENT LISTENERS --- */
    document.getElementById('btn-play').addEventListener('click', () => startGame(false));
    document.getElementById('btn-restart').addEventListener('click', () => {
        showMidrollAd(() => startGame(true));
    });
    document.getElementById('btn-menu').addEventListener('click', showMenu);
    document.getElementById('btn-home').addEventListener('click', showMenu);
    document.getElementById('btn-how').addEventListener('click', () => {
        uiHowTo.classList.remove('hidden');
    });
    document.getElementById('btn-close-how').addEventListener('click', () => {
        uiHowTo.classList.add('hidden');
    });

    /** --- INPUT HANDLING --- */
    function handleInputStart(e) {
        if (gameState !== 'playing') return;
        if (e.type === 'mousedown' && e.button !== 0) return;
        initAudio();
        player.isHolding = true;
        playSound('jump');
    }

    function handleInputEnd(e) {
        if (gameState !== 'playing') return;
        player.isHolding = false;
        playSound('jump');
    }

    window.addEventListener('mousedown', handleInputStart);
    window.addEventListener('touchstart', handleInputStart, {
        passive: false
    });
    window.addEventListener('mouseup', handleInputEnd);
    window.addEventListener('touchend', handleInputEnd);

    document.addEventListener('touchstart', function(e) {
        if (e.touches.length > 1) e.preventDefault();
    }, {
        passive: false
    });
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function(e) {
        const now = Date.now();
        if (now - lastTouchEnd <= 300) e.preventDefault();
        lastTouchEnd = now;
    }, false);

    /** --- WORLD GENERATION --- */
    function generateStars() {
        stars = [];
        for (let i = 0; i < 100; i++) {
            stars.push({
                x: Math.random() * w,
                y: Math.random() * h,
                size: Math.random() * 2.5 + 0.5,
                speed: Math.random() * 0.6 + 0.08,
                blink: Math.random() > 0.7,
                hue: Math.random() > 0.85 ? (Math.random() > 0.5 ? '#ffb3ff' : '#b3ffff') : '#ffffff'
            });
        }
    }

    function updateWalls() {
        if (walls.length === 0) return;
        const lastWall = walls[walls.length - 1];
        if (lastWall.x - cameraX < w + 200) {
            let nextY = lastWall.centerY;
            if (Math.random() < 0.14) {
                let shift = (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 110 + 45);
                nextY += shift;
            } else {
                nextY += (Math.random() - 0.5) * 22;
            }
            const margin = (corridorWidth / 2) + 55;
            if (nextY < margin) nextY = margin;
            if (nextY > h - margin) nextY = h - margin;
            walls.push({
                x: lastWall.x + 50,
                centerY: nextY
            });
        }
        if (walls[0].x - cameraX < -150) {
            walls.shift();
        }
    }

    /** --- RENDER FUNCTIONS --- */
    function drawStars() {
        stars.forEach(star => {
            if (gameState === 'playing') star.x -= star.speed * (gameSpeed / 2.5);
            if (star.x < -10) star.x = w + 10;
            ctx.globalAlpha = star.blink ? Math.abs(Math.sin(frameCount * 0.05 + star.speed * 10)) * 0.7 + 0.3 :
                0.55;
            ctx.fillStyle = star.hue;
            if (star.size > 2) {
                ctx.fillRect(star.x - star.size, star.y, star.size * 3, star.size);
                ctx.fillRect(star.x, star.y - star.size, star.size, star.size * 3);
            } else {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fill();
            }
        });
        ctx.globalAlpha = 1;
    }

    function drawCorridor() {
        if (walls.length === 0) return;
        ctx.lineJoin = 'miter';
        const drawBoundary = (isTop) => {
            const offsetMultiplier = isTop ? -1 : 1;
            ctx.beginPath();
            walls.forEach((wObj, i) => {
                const screenX = wObj.x - cameraX;
                const screenY = wObj.centerY + (corridorWidth / 2 * offsetMultiplier);
                if (i === 0) ctx.moveTo(screenX, screenY);
                else ctx.lineTo(screenX, screenY);
            });
            ctx.lineWidth = 16;
            ctx.strokeStyle = 'rgba(106,11,115,0.3)';
            ctx.stroke();

            ctx.beginPath();
            walls.forEach((wObj, i) => {
                const screenX = wObj.x - cameraX;
                const screenY = wObj.centerY + (corridorWidth / 2 * offsetMultiplier);
                if (i === 0) ctx.moveTo(screenX, screenY);
                else ctx.lineTo(screenX, screenY);
            });
            ctx.lineWidth = 7;
            ctx.strokeStyle = '#d90bb0';
            ctx.stroke();

            ctx.beginPath();
            walls.forEach((wObj, i) => {
                const screenX = wObj.x - cameraX;
                const screenY = wObj.centerY + (corridorWidth / 2 * offsetMultiplier);
                if (i === 0) ctx.moveTo(screenX, screenY);
                else ctx.lineTo(screenX, screenY);
            });
            ctx.lineWidth = 2;
            ctx.strokeStyle = '#ffffff';
            ctx.stroke();

            ctx.lineWidth = 2;
            ctx.strokeStyle = 'rgba(217,11,176,0.5)';
            walls.forEach((wObj) => {
                const screenX = wObj.x - cameraX;
                const screenY = wObj.centerY + (corridorWidth / 2 * offsetMultiplier);
                ctx.beginPath();
                ctx.moveTo(screenX, screenY - 8);
                ctx.lineTo(screenX, screenY + 8);
                ctx.stroke();
            });
        };
        drawBoundary(true);
        drawBoundary(false);
    }

    function drawPlayer() {
        if (gameState !== 'playing') return;

        // Trail with 3D glow effect
        player.trail.forEach(t => {
            const tx = t.x - cameraX;
            ctx.globalAlpha = t.alpha * 0.6;
            ctx.shadowBlur = 8;
            ctx.shadowColor = '#0be0d9';
            ctx.fillStyle = t.alpha > 0.6 ? '#ffffff' : '#a0f0ff';
            ctx.beginPath();
            ctx.arc(tx, t.y, 3.5, 0, Math.PI * 2);
            ctx.fill();
        });
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;

        if (isInvulnerable > 0 && Math.floor(frameCount / 5) % 2 === 0) return;

        ctx.save();
        ctx.translate(player.x, player.y);
        const targetAngle = player.isHolding ? -Math.PI / 6 : Math.PI / 6;
        ctx.rotate(targetAngle);

        const s = player.size;
        // 3D Arrow shape: sleek arrowhead with body and tail fins
        ctx.shadowBlur = 18;
        ctx.shadowColor = '#00ffff';

        // Create gradient for metallic 3D look
        const gradient = ctx.createLinearGradient(s, 0, -s, 0);
        gradient.addColorStop(0, '#ffffff');
        gradient.addColorStop(0.2, '#e0f7ff');
        gradient.addColorStop(0.6, '#4dd0e1');
        gradient.addColorStop(1, '#00838f');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        // Arrow tip
        ctx.moveTo(s, 0);
        // Right wing
        ctx.lineTo(-s * 0.7, s * 0.65);
        // Right tail
        ctx.lineTo(-s * 0.9, s * 0.25);
        // Tail center indent
        ctx.lineTo(-s * 0.75, 0);
        // Left tail
        ctx.lineTo(-s * 0.9, -s * 0.25);
        // Left wing
        ctx.lineTo(-s * 0.7, -s * 0.65);
        ctx.closePath();
        ctx.fill();

        // Outer stroke for depth
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 2.5;
        ctx.stroke();

        // Inner highlight for 3D glossy effect
        ctx.shadowBlur = 0;
        ctx.fillStyle = 'rgba(255,255,255,0.7)';
        ctx.beginPath();
        ctx.moveTo(s * 0.7, 0);
        ctx.lineTo(-s * 0.5, s * 0.45);
        ctx.lineTo(-s * 0.6, s * 0.15);
        ctx.lineTo(-s * 0.5, 0);
        ctx.lineTo(-s * 0.6, -s * 0.15);
        ctx.lineTo(-s * 0.5, -s * 0.45);
        ctx.closePath();
        ctx.fill();

        // Core glow
        ctx.fillStyle = '#ffffff';
        ctx.shadowBlur = 12;
        ctx.shadowColor = '#00ffff';
        ctx.beginPath();
        ctx.moveTo(s * 0.3, 0);
        ctx.lineTo(-s * 0.2, s * 0.2);
        ctx.lineTo(-s * 0.25, 0);
        ctx.lineTo(-s * 0.2, -s * 0.2);
        ctx.closePath();
        ctx.fill();

        ctx.restore();
    }

    function drawParticles() {
        for (let i = particles.length - 1; i >= 0; i--) {
            let p = particles[i];
            p.x += p.vx;
            p.y += p.vy;
            p.life -= p.decay;
            if (p.life <= 0) {
                particles.splice(i, 1);
                continue;
            }
            ctx.globalAlpha = p.life;
            ctx.fillStyle = p.color;
            ctx.shadowBlur = 6;
            ctx.shadowColor = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size / 2, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;
    }

    /** --- COLLISION DETECTION --- */
    function checkCollisions() {
        if (isInvulnerable > 0) return;
        const absolutePlayerX = cameraX + player.x;
        for (let i = 0; i < walls.length - 1; i++) {
            let w1 = walls[i];
            let w2 = walls[i + 1];
            if (absolutePlayerX >= w1.x && absolutePlayerX <= w2.x) {
                const t = (absolutePlayerX - w1.x) / (w2.x - w1.x);
                const currentCenterY = w1.centerY + t * (w2.centerY - w1.centerY);
                const topBound = currentCenterY - (corridorWidth / 2) + player.size;
                const bottomBound = currentCenterY + (corridorWidth / 2) - player.size;
                if (player.y < topBound || player.y > bottomBound) {
                    handleCrash();
                }
                break;
            }
        }
    }

    /** --- MAIN GAME LOOP --- */
    function loop() {
        frameCount++;
        ctx.globalAlpha = 1;
        ctx.fillStyle = '#0b0514';
        ctx.fillRect(0, 0, w, h);
        drawStars();

        if (gameState === 'playing') {
            gameSpeed += 0.0003;
            cameraX += gameSpeed;
            distance += gameSpeed;
            distanceSinceLevelStart += gameSpeed; // ✅ FIX: track level progress

            if (isInvulnerable > 0) isInvulnerable--;

            if (screenShake > 0) {
                shakeX = (Math.random() - 0.5) * screenShake;
                shakeY = (Math.random() - 0.5) * screenShake;
                screenShake *= 0.85;
                if (screenShake < 0.3) screenShake = 0;
            } else {
                shakeX = 0;
                shakeY = 0;
            }

            if (player.isHolding) {
                player.y -= player.vy;
            } else {
                player.y += player.vy;
            }

            if (frameCount % 3 === 0) {
                player.trail.push({
                    x: cameraX + player.x,
                    y: player.y,
                    alpha: 1
                });
            }
            player.trail.forEach(t => t.alpha -= 0.04);
            player.trail = player.trail.filter(t => t.alpha > 0);

            // ✅ FIXED: level up after travelling 2000 units in current level
            if (distanceSinceLevelStart > 2000) {
                level++;
                gameSpeed += 0.2;
                corridorWidth = Math.max(130, corridorWidth - 8);
                levelDisplay.innerText = `LEVEL: ${level}`;
                playSound('level');
                const messages = ["Speed Up!", "Narrow Path!", "Stay Focused!", "Warp Intensifies!", "Hold Steady!",
                    "Precision Needed!"
                ];
                showMessage(messages[level % messages.length]);
                distanceSinceLevelStart -= 2000; // carry over extra distance
            }

            updateWalls();
            checkCollisions();

            ctx.save();
            if (screenShake > 0) {
                ctx.translate(shakeX, shakeY);
            }
            drawCorridor();
            drawPlayer();
            ctx.restore();
        }

        if ((gameState === 'gameover' || particles.length > 0) && gameState !== 'playing') {
            if (gameState === 'gameover') drawCorridor();
            drawParticles();
        }
        if (gameState === 'playing' && particles.length > 0) {
            ctx.save();
            if (screenShake > 0) ctx.translate(shakeX, shakeY);
            drawParticles();
            ctx.restore();
        }

        animationId = requestAnimationFrame(loop);
    }

    generateStars();
    loop();
})();

// ─── PRELOADER LOGIC ───
(function() {
    const preloader = document.getElementById('preloader');
    const progressBar = document.getElementById('loader-progress-bar');

    let progress = 0;
    const targetProgress = 100;

    function updateProgress(value) {
        progress = Math.min(value, targetProgress);
        progressBar.style.width = progress + '%';
    }

    let simulatedProgress = 0;
    const simInterval = setInterval(function() {
        const increment = simulatedProgress < 60 ? 6 : (simulatedProgress < 85 ? 3 : 1);
        simulatedProgress = Math.min(simulatedProgress + increment, 95);
        updateProgress(simulatedProgress);
    }, 80);

    window.addEventListener('load', function() {
        clearInterval(simInterval);
        updateProgress(100);
        setTimeout(function() {
            preloader.classList.add('hidden');
            setTimeout(function() {
                preloader.style.display = 'none';
            }, 800);
        }, 400);
    });

    setTimeout(function() {
        if (!preloader.classList.contains('hidden')) {
            clearInterval(simInterval);
            updateProgress(100);
            setTimeout(function() {
                preloader.classList.add('hidden');
                setTimeout(function() {
                    preloader.style.display = 'none';
                }, 800);
            }, 300);
        }
    }, 6000);
})();