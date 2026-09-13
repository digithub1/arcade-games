/**
 * Neon Kong - Modern Donkey Kong Remake
 * Main Game Controller
 */

class AssetLoader {
    constructor() {
        this.assets = new Map();
        this.toLoad = 0;
        this.loaded = 0;
    }

    loadImage(key, src) {
        this.toLoad++;
        const img = new Image();
        img.src = src;
        img.onload = () => {
            this.loaded++;
            this.assets.set(key, img);
        };
        img.onerror = () => {
            console.error(`Failed to load image: ${src}`);
            this.loaded++;
        };
    }

    get(key) {
        return this.assets.get(key);
    }

    isDone() {
        return this.toLoad > 0 && this.loaded >= this.toLoad;
    }
}

class InputHandler {
    constructor() {
        this.keys = {};
        window.addEventListener('keydown', e => this.keys[e.code] = true);
        window.addEventListener('keyup', e => this.keys[e.code] = false);
    }

    isDown(code) {
        return this.keys[code] || false;
    }

    isAnyDown(codes) {
        return codes.some(code => this.keys[code]);
    }
}

class AudioManager {
    constructor() {
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        this.enabled = true;
    }

    setEnabled(enabled) {
        this.enabled = enabled;
        if (!enabled) this.ctx.suspend();
        else this.ctx.resume();
    }

    playOsc(type, freq, duration, volume = 0.1) {
        if (!this.enabled) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

        gain.gain.setValueAtTime(volume, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + duration);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + duration);
    }

    playJump() { this.playOsc('square', 400, 0.1); }
    playHit() { this.playOsc('sawtooth', 100, 0.3, 0.2); }
    playClimb() { this.playOsc('triangle', 300, 0.05, 0.05); }
    playLevel() {
        this.playOsc('square', 500, 0.1);
        setTimeout(() => this.playOsc('square', 700, 0.1), 100);
        setTimeout(() => this.playOsc('square', 900, 0.2), 200);
    }
    playGameOver() { this.playOsc('sawtooth', 50, 0.5, 0.3); }
}

class Game {
    constructor() {
        this.canvas = document.getElementById('game-canvas');
        this.ctx = this.canvas.getContext('2d');

        // Canvas dimensions
        this.canvas.width = 800;
        this.canvas.height = 600;

        // Assets, Input & Audio
        this.assets = new AssetLoader();
        this.input = new InputHandler();
        this.audio = new AudioManager();

        // Game State
        this.gameState = 'MENU';
        this.score = 0;
        this.lives = 3;
        this.level = 1;
        this.paused = false;

        // Entities
        this.player = null;
        this.platforms = [];
        this.ladders = [];
        this.barrels = [];

        // UI Elements
        this.screens = {
            menu: document.getElementById('main-menu'),
            instructions: document.getElementById('instructions'),
            game: document.getElementById('game-screen'),
            gameOver: document.getElementById('game-over')
        };

        this.loadAssets();
        this.init();
    }

    loadAssets() {
        this.assets.loadImage('player', 'assets/images/player.png');
        this.assets.loadImage('kong', 'assets/images/kong.png');
        this.assets.loadImage('barrel', 'assets/images/barrel.png');
    }

    init() {
        this.setupEventListeners();
        this.gameLoop();
    }

    setupEventListeners() {
        document.getElementById('start-btn').addEventListener('click', () => {
            if (this.audio.ctx.state === 'suspended') this.audio.ctx.resume();
            this.startGame();
        });
        document.getElementById('instructions-btn').addEventListener('click', () => this.showScreen('instructions'));
        document.getElementById('back-to-menu-btn').addEventListener('click', () => this.showScreen('menu'));
        document.getElementById('restart-btn').addEventListener('click', () => this.startGame());
        document.getElementById('main-menu-btn').addEventListener('click', () => this.showScreen('menu'));
        document.getElementById('pause-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            this.togglePause();
        });

        document.getElementById('sound-toggle').addEventListener('change', (e) => {
            this.audio.setEnabled(e.target.checked);
        });

        // Global key for pause
        window.addEventListener('keydown', (e) => {
            if (e.code === 'KeyP') this.togglePause();
        });
    }

    showScreen(screenKey) {
        Object.values(this.screens).forEach(screen => screen.classList.remove('active'));
        this.screens[screenKey].classList.add('active');

        if (screenKey === 'menu') this.gameState = 'MENU';
        if (screenKey === 'game') this.gameState = 'PLAYING';
    }

    startGame() {
        this.score = 0;
        this.lives = 3;
        this.level = 1;
        this.resetLevel();
        this.showScreen('game');
    }

    resetLevel() {
        this.barrels = [];
        this.setupLevel();
        this.updateHUD();
    }

    setupLevel() {
        // Platform & Ladder data
        this.platforms = [];
        this.ladders = [];

        // Base bottom platform
        this.platforms.push({ x: 0, y: 550, width: 800, height: 20, color: '#ff00ff' });

        // Zig-zag platforms (modern DK style)
        for (let i = 0; i < 5; i++) {
            const y = 450 - i * 100;
            const w = 700;
            const x = (i % 2 === 0) ? 0 : 100;
            this.platforms.push({ x, y, width: w, height: 15, color: '#0ff' });
        }

        // Add ladders connecting each platform to the one below
        // Ladder positions alternate to match zig-zag platforms
        this.ladders.push({ x: 650, y: 450, width: 60, height: 115 });  // bottom to platform 0
        this.ladders.push({ x: 150, y: 350, width: 60, height: 115 });  // platform 0 to 1
        this.ladders.push({ x: 650, y: 250, width: 60, height: 115 });  // platform 1 to 2
        this.ladders.push({ x: 150, y: 150, width: 60, height: 115 });  // platform 2 to 3
        this.ladders.push({ x: 650, y: 50, width: 60, height: 115 });   // platform 3 to 4

        // Top platform (Princess area)
        this.platforms.push({ x: 300, y: 50, width: 200, height: 15, color: '#ffff00' });

        // Player starting position
        this.player = {
            x: 50,
            y: 500,
            width: 30,
            height: 30,
            vx: 0,
            vy: 0,
            speed: 1.0,
            jumpForce: -8,
            grounded: false,
            climbing: false
        };
    }

    togglePause() {
        if (this.gameState !== 'PLAYING' && this.gameState !== 'PAUSED') return;
        this.gameState = (this.gameState === 'PLAYING') ? 'PAUSED' : 'PLAYING';
        document.getElementById('pause-btn').textContent = (this.gameState === 'PAUSED') ? '►' : '||';
    }

    updateHUD() {
        document.getElementById('score-val').textContent = this.score.toString().padStart(4, '0');
        document.getElementById('lives-val').textContent = this.lives;
        document.getElementById('level-val').textContent = this.level;
    }

    update() {
        if (this.gameState !== 'PLAYING' || !this.assets.isDone()) return;

        this.updatePlayer();
        this.updateBarrels();
        this.checkCollisions();
    }

    updatePlayer() {
        const p = this.player;

        // Ladder detection (with 15px padding for easier alignment)
        const ladderPadding = 15;
        const onLadder = this.ladders.find(l =>
            p.x + p.width / 2 > l.x - ladderPadding && p.x + p.width / 2 < l.x + l.width + ladderPadding &&
            p.y + p.height > l.y && p.y < l.y + l.height
        );

        // Climbing logic
        if (onLadder) {
            if (this.input.isAnyDown(['KeyW', 'ArrowUp', 'KeyS', 'ArrowDown'])) {
                p.climbing = true;
                p.vx = 0; // Fix horizontal position while climbing
                p.x = onLadder.x + onLadder.width / 2 - p.width / 2;
            }
        } else {
            p.climbing = false;
        }

        if (p.climbing) {
            if (this.input.isAnyDown(['KeyW', 'ArrowUp'])) {
                p.vy = -p.speed;
                if (Math.random() < 0.1) this.audio.playClimb();
            }
            else if (this.input.isAnyDown(['KeyS', 'ArrowDown'])) {
                p.vy = p.speed;
                if (Math.random() < 0.1) this.audio.playClimb();
            }
            else p.vy = 0;

            // Check top/bottom of ladder
            if (!onLadder) p.climbing = false;
        } else {
            // Normal movement
            if (this.input.isAnyDown(['KeyA', 'ArrowLeft'])) p.vx = -p.speed;
            else if (this.input.isAnyDown(['KeyD', 'ArrowRight'])) p.vx = p.speed;
            else p.vx = 0;

            // Jump
            if (this.input.isDown('Space') && p.grounded) {
                p.vy = p.jumpForce;
                p.grounded = false;
                this.audio.playJump();
            }

            p.vy += 0.4; // Gravity
        }

        p.x += p.vx;
        p.y += p.vy;

        // Boundaries
        if (p.x < 0) p.x = 0;
        if (p.x + p.width > this.canvas.width) p.x = this.canvas.width - p.width;
        if (p.y < 0) {
            this.winLevel();
        }
    }

    updateBarrels() {
        // Spawn barrels
        if (Math.random() < 0.02 * this.level) {
            this.barrels.push({
                x: 400,
                y: 80,
                width: 25,
                height: 25,
                vx: 2,
                vy: 0,
                direction: 1 // 1 for right, -1 for left
            });
        }

        for (let i = this.barrels.length - 1; i >= 0; i--) {
            const b = this.barrels[i];

            // Gravity for barrels
            b.vy += 0.3;
            b.y += b.vy;
            b.x += b.vx;

            // Platform collision for barrels
            let onPlat = false;
            for (const plat of this.platforms) {
                if (b.x < plat.x + plat.width &&
                    b.x + b.width > plat.x &&
                    b.y + b.height > plat.y &&
                    b.y + b.height < plat.y + plat.height + b.vy) {
                    b.y = plat.y - b.height;
                    b.vy = 0;
                    onPlat = true;

                    // Change direction at platform edges
                    if (b.x <= plat.x) b.vx = Math.abs(b.vx);
                    if (b.x + b.width >= plat.x + plat.width) b.vx = -Math.abs(b.vx);
                }
            }

            // Remove if off screen
            if (b.y > this.canvas.height) {
                this.barrels.splice(i, 1);
            }
        }
    }

    checkCollisions() {
        const p = this.player;
        if (p.climbing) return;

        p.grounded = false;
        for (const plat of this.platforms) {
            if (p.x < plat.x + plat.width &&
                p.x + p.width > plat.x &&
                p.y + p.height > plat.y &&
                p.y + p.height < plat.y + plat.height + p.vy) {
                p.y = plat.y - p.height;
                p.vy = 0;
                p.grounded = true;
            }
        }

        // Barrel collision
        for (const b of this.barrels) {
            const dx = (p.x + p.width / 2) - (b.x + b.width / 2);
            const dy = (p.y + p.height / 2) - (b.y + b.height / 2);
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < (p.width / 2 + b.width / 2) - 5) {
                this.audio.playHit();
                this.loseLife();
                break;
            }

            // Scoring for jumping over barrels
            if (p.vy > 0 && !p.grounded && Math.abs(dx) < 10 && p.y < b.y) {
                this.score += 100;
                this.updateHUD();
            }
        }
    }

    loseLife() {
        this.lives--;
        this.updateHUD();
        if (this.lives <= 0) {
            this.gameOver(false);
        } else {
            this.resetPlayer();
        }
    }

    resetPlayer() {
        this.player.x = 50;
        this.player.y = 500;
        this.player.vx = 0;
        this.player.vy = 0;
        this.player.climbing = false;
        this.barrels = [];
    }

    winLevel() {
        this.audio.playLevel();
        this.level++;
        this.score += 1000;
        if (this.level > 3) {
            this.gameOver(true);
        } else {
            this.resetLevel();
            this.resetPlayer();
        }
    }

    gameOver(victory) {
        if (!victory) this.audio.playGameOver();
        else this.audio.playLevel();
        this.gameState = 'GAMEOVER';
        document.getElementById('end-status').textContent = victory ? 'VICTORY!' : 'GAME OVER';
        document.getElementById('final-score-val').textContent = this.score;
        this.showScreen('gameOver');
    }

    draw() {
        this.ctx.fillStyle = '#000';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        if (!this.assets.isDone()) {
            this.drawLoading();
            return;
        }

        if (this.gameState === 'PLAYING' || this.gameState === 'PAUSED' || this.gameState === 'GAMEOVER') {
            this.drawLevel();
            this.drawPlayer();
            this.drawBarrels();
        }
    }

    drawLoading() {
        this.ctx.fillStyle = '#fff';
        this.ctx.font = '20px Orbitron';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(`LOADING... ${Math.round((this.assets.loaded / this.assets.toLoad) * 100)}%`, this.canvas.width / 2, this.canvas.height / 2);
    }

    drawLevel() {
        // Draw Ladders (bright yellow/orange for visibility)
        this.ctx.strokeStyle = '#ffaa00';
        this.ctx.lineWidth = 3;
        for (const lad of this.ladders) {
            this.ctx.strokeRect(lad.x, lad.y, lad.width, lad.height);
            // Draw rungs
            for (let r = lad.y; r < lad.y + lad.height; r += 12) {
                this.ctx.beginPath();
                this.ctx.moveTo(lad.x, r);
                this.ctx.lineTo(lad.x + lad.width, r);
                this.ctx.stroke();
            }
        }

        // Draw Platforms
        for (const plat of this.platforms) {
            this.ctx.fillStyle = plat.color;
            this.ctx.fillRect(plat.x, plat.y, plat.width, plat.height);
            // Add glow
            this.ctx.shadowBlur = 10;
            this.ctx.shadowColor = plat.color;
            this.ctx.strokeRect(plat.x, plat.y, plat.width, plat.height);
            this.ctx.shadowBlur = 0;
        }

        // Draw Kong
        const kongImg = this.assets.get('kong');
        if (kongImg) {
            this.ctx.drawImage(kongImg, 350, 10, 80, 80);
        }
    }

    drawPlayer() {
        const p = this.player;
        const playerImg = this.assets.get('player');
        if (playerImg) {
            this.ctx.drawImage(playerImg, p.x, p.y, p.width, p.height);
        } else {
            this.ctx.fillStyle = '#ff00ff';
            this.ctx.fillRect(p.x, p.y, p.width, p.height);
        }
    }

    drawBarrels() {
        const barrelImg = this.assets.get('barrel');
        for (const b of this.barrels) {
            if (barrelImg) {
                // Add rotation effect
                this.ctx.save();
                this.ctx.translate(b.x + b.width / 2, b.y + b.height / 2);
                this.ctx.rotate((b.x / 10) * b.direction);
                this.ctx.drawImage(barrelImg, -b.width / 2, -b.height / 2, b.width, b.height);
                this.ctx.restore();
            } else {
                this.ctx.fillStyle = '#ff9900';
                this.ctx.fillRect(b.x, b.y, b.width, b.height);
            }
        }
    }

    gameLoop() {
        this.update();
        this.draw();
        requestAnimationFrame(() => this.gameLoop());
    }
}

window.addEventListener('load', () => {
    new Game();
});
