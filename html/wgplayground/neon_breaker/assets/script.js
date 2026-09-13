// ============================================================
//  CONFIG
// ============================================================
const CONFIG = {
    paddle: {
        width: 100,
        height: 14,
        speed: 8
    },
    ball: {
        radius: 6,
        speed: 5,
        maxSpeed: 10
    },
    brick: {
        cols: 8,
        height: 24,
        padding: 8,
        offsetTop: 58,
        offsetLeft: 30
    },
    lives: 3,
    powerUpDropChance: 0.18,
    colors: {
        1: '#00f5ff',
        2: '#ff00e5',
        3: '#555566'
    }
};

const LEVELS = [
    [
        [0, 0, 1, 1, 1, 1, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 1, 1, 0]
    ],
    [
        [2, 2, 2, 2, 2, 2, 2, 2],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [0, 1, 1, 0, 0, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 1]
    ],
    [
        [2, 0, 2, 0, 2, 0, 2, 0],
        [0, 2, 0, 2, 0, 2, 0, 2],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [2, 2, 2, 2, 2, 2, 2, 2]
    ],
    [
        [2, 0, 2, 0, 2, 0, 2, 0],
        [0, 2, 0, 2, 0, 2, 0, 2],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 1]
    ],
    [
        [2, 0, 2, 0, 2, 0, 2, 0],
        [0, 2, 0, 2, 0, 2, 0, 2],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [2, 2, 2, 2, 2, 2, 2, 2],
        [0, 1, 1, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 1, 1, 0]
    ]
];

// ============================================================
//  STATE
// ============================================================
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let gameState = 'START';
let currentLevel = 0;
let score = 0,
    levelScore = 0,
    combo = 1,
    maxCombo = 1,
    lives = CONFIG.lives;
let soundEnabled = true;
let paddle, ball, bricks = [],
    particles = [],
    powerUps = [],
    trail = [];
let rightPressed = false,
    leftPressed = false;
let mouseX = canvas.width / 2;
let audioCtx;
let rewardAdReady = false;
let rewardAdSoundWasEnabled = true;

// ============================================================
//  CLASSES
// ============================================================
class Paddle {
    constructor() {
        this.width = CONFIG.paddle.width;
        this.height = CONFIG.paddle.height;
        this.x = (canvas.width - this.width) / 2;
        this.y = canvas.height - this.height - 20;
        this.expandedTimer = 0;
    }
    draw() {
        let c = '#00f5ff',
            g = '#00f5ff';
        if (this.expandedTimer > 0) {
            c = '#ffd700';
            g = '#ffd700';
        }
        const grad = ctx.createLinearGradient(this.x, this.y, this.x + this.width, this.y + this.height);
        grad.addColorStop(0, c);
        grad.addColorStop(0.5, '#fff');
        grad.addColorStop(1, c);
        ctx.shadowBlur = 18;
        ctx.shadowColor = g;
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.roundRect(this.x, this.y, this.width, this.height, 4);
        ctx.fill();
        ctx.shadowBlur = 0;
        if (this.expandedTimer > 0) {
            this.expandedTimer--;
            if (this.expandedTimer === 0) this.width = CONFIG.paddle.width;
        }
    }
    update() {
        if (rightPressed && this.x < canvas.width - this.width) this.x += CONFIG.paddle.speed;
        else if (leftPressed && this.x > 0) this.x -= CONFIG.paddle.speed;
        else {
            let t = Math.max(0, Math.min(canvas.width - this.width, mouseX - this.width / 2));
            this.x += (t - this.x) * 0.18;
        }
    }
    expand() {
        this.width = CONFIG.paddle.width * 1.5;
        this.expandedTimer = 600;
    }
}

class Ball {
    constructor() {
        this.radius = CONFIG.ball.radius;
        this.reset();
    }
    reset() {
        this.x = canvas.width / 2;
        this.y = canvas.height - 55;
        this.dx = CONFIG.ball.speed * (Math.random() > 0.5 ? 1 : -1);
        this.dy = -CONFIG.ball.speed;
        trail = [];
    }
    draw() {
        trail.forEach((t, i) => {
            ctx.globalAlpha = (i / trail.length) * 0.35;
            ctx.fillStyle = '#fff';
            ctx.beginPath();
            ctx.arc(t.x, t.y, this.radius * (i / trail.length), 0, Math.PI * 2);
            ctx.fill();
        });
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 16;
        ctx.shadowColor = '#00f5ff';
        ctx.fillStyle = '#fff';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#00f5ff';
        ctx.beginPath();
        ctx.arc(this.x - 1, this.y - 1, this.radius * 0.35, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
    }
    update() {
        trail.push({
            x: this.x,
            y: this.y
        });
        if (trail.length > 12) trail.shift();
        this.x += this.dx;
        this.y += this.dy;
        if (this.x + this.dx > canvas.width - this.radius || this.x + this.dx < this.radius) {
            this.dx = -this.dx;
            playSound(400, 'sine', 0.05);
        }
        if (this.y + this.dy < this.radius) {
            this.dy = -this.dy;
            playSound(400, 'sine', 0.05);
        } else if (this.y + this.dy > canvas.height - this.radius) {
            lives--;
            updateHUD();
            combo = 1;
            if (lives <= 0) gameOver();
            else {
                playSound(150, 'sawtooth', 0.3);
                shakeScreen();
                this.reset();
                paddle.width = CONFIG.paddle.width;
            }
        }
        if (this.y + this.radius > paddle.y && this.y - this.radius < paddle.y + paddle.height && this.x + this.radius > paddle.x && this.x - this.radius < paddle.x + paddle.width) {
            playSound(600, 'square', 0.05);
            this.dy = -Math.abs(this.dy);
            this.dx = (this.x - (paddle.x + paddle.width / 2)) * 0.15;
            combo = 1;
            updateHUD();
            const spd = Math.sqrt(this.dx * this.dx + this.dy * this.dy);
            if (spd < CONFIG.ball.maxSpeed) this.dy *= 1.05;
        }
    }
}

class Brick {
    constructor(r, c, type) {
        this.r = r;
        this.c = c;
        this.type = type;
        this.status = type;
        this.width = (canvas.width - (CONFIG.brick.cols + 1) * CONFIG.brick.padding) / CONFIG.brick.cols;
        this.height = CONFIG.brick.height;
        this.x = (c * (this.width + CONFIG.brick.padding)) + CONFIG.brick.padding;
        this.y = (r * (this.height + CONFIG.brick.padding)) + CONFIG.brick.offsetTop;
        this.flashTimer = 0;
    }
    draw() {
        if (this.status <= 0) return;
        const col = CONFIG.colors[this.status];
        if (this.flashTimer > 0) {
            ctx.globalAlpha = 0.5 + Math.sin(this.flashTimer * 0.8) * 0.5;
            this.flashTimer--;
        }
        ctx.shadowBlur = 8;
        ctx.shadowColor = col;
        const g = ctx.createLinearGradient(this.x, this.y, this.x, this.y + this.height);
        g.addColorStop(0, col);
        g.addColorStop(1, col + '44');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.roundRect(this.x + 1, this.y + 1, this.width - 2, this.height - 2, 3);
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.fillStyle = 'rgba(255,255,255,0.18)';
        ctx.beginPath();
        ctx.roundRect(this.x + 2, this.y + 2, this.width - 4, (this.height - 4) * 0.4, 2);
        ctx.fill();
        ctx.globalAlpha = 1;
    }
    hit() {
        this.status--;
        this.flashTimer = 6;
        if (this.status <= 0) {
            score += 10 * combo;
            levelScore += 10 * combo;
            if (combo > maxCombo) maxCombo = combo;
            combo++;
            createParticles(this.x + this.width / 2, this.y + this.height / 2, CONFIG.colors[this.type]);
            playSound(800 + combo * 50, 'square', 0.1);
            shakeScreen();
            if (Math.random() < CONFIG.powerUpDropChance) powerUps.push(new PowerUp(this.x + this.width / 2, this.y));
            checkLevelComplete();
        } else playSound(300, 'square', 0.1);
        updateHUD();
    }
}

class Particle {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 12;
        this.vy = (Math.random() - 0.5) * 12;
        this.life = 1;
        this.color = color;
        this.size = Math.random() * 5 + 2;
    }
    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += 0.15;
        this.life -= 0.045;
    }
    draw() {
        ctx.globalAlpha = Math.max(0, this.life);
        ctx.shadowBlur = 6;
        ctx.shadowColor = this.color;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * this.life, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;
    }
}

class PowerUp {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 9;
        this.dy = 2;
        this.type = Math.random() > 0.5 ? 'expand' : 'life';
        this.color = this.type === 'expand' ? '#ffd700' : '#00ff88';
        this.active = true;
        this.bob = Math.random() * Math.PI * 2;
    }
    update() {
        this.y += this.dy;
        this.bob += 0.1;
        if (this.y + this.radius > paddle.y && this.y - this.radius < paddle.y + paddle.height && this.x + this.radius > paddle.x && this.x - this.radius < paddle.x + paddle.width) {
            playSound(1200, 'sine', 0.2);
            if (this.type === 'expand') paddle.expand();
            else {
                lives++;
                updateHUD();
            }
            this.active = false;
        }
    }
    draw() {
        const p = 1 + Math.sin(this.bob) * 0.15;
        ctx.shadowBlur = 14;
        ctx.shadowColor = this.color;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * p, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = 'rgba(0,0,0,0.4)';
        ctx.font = `bold ${Math.floor(this.radius * 1.4)}px Arial`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(this.type === 'expand' ? '+' : '\u2665', this.x, this.y);
        ctx.shadowBlur = 0;
    }
}

// ============================================================
//  AUDIO
// ============================================================
function initAudio() {
    if (!audioCtx) audioCtx = new(window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();
}

function playSound(freq, type, dur) {
    if (!soundEnabled || !audioCtx) return;
    try {
        const o = audioCtx.createOscillator(),
            g = audioCtx.createGain();
        o.type = type;
        o.frequency.setValueAtTime(freq, audioCtx.currentTime);
        g.gain.setValueAtTime(0.07, audioCtx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + dur);
        o.connect(g);
        g.connect(audioCtx.destination);
        o.start();
        o.stop(audioCtx.currentTime + dur);
    } catch (e) {}
}

function setRewardAdButtonState(ready) {
    const button = document.getElementById('btn-continue');
    rewardAdReady = ready;
    if (button) {
        button.disabled = !ready;
        button.style.opacity = ready ? '1' : '0.45';
    }
}

function onRewardAdReady() {
    setRewardAdButtonState(true);
}

function onRewardAdSuccess() {
    soundEnabled = rewardAdSoundWasEnabled;
    if (audioCtx && audioCtx.state === 'suspended' && soundEnabled) audioCtx.resume();
    lives = 1;
    updateHUD();
    document.getElementById('screen-gameover').classList.add('hidden');
    ball.reset();
    paddle.width = CONFIG.paddle.width;
    gameState = 'PLAYING';
    setRewardAdButtonState(false);
}

function onRewardAdFail() {
    soundEnabled = rewardAdSoundWasEnabled;
    if (audioCtx && audioCtx.state === 'suspended' && soundEnabled) audioCtx.resume();
    setRewardAdButtonState(false);
}

function registerRewardCallbacks() {
    const loaderName = window.preroll && window.preroll.config && window.preroll.config.loaderObjectName;
    const adLoader = loaderName && window[loaderName];
    if (!adLoader || typeof adLoader.registerRewardCallbacks !== 'function') return false;

    adLoader.registerRewardCallbacks({
        onReady: onRewardAdReady,
        onSuccess: onRewardAdSuccess,
        onFail: onRewardAdFail
    });
    return true;
}

function waitForRewardCallbacks() {
    if (registerRewardCallbacks()) return;
    setTimeout(waitForRewardCallbacks, 250);
}

// ============================================================
//  HELPERS
// ============================================================
function buildLevel(idx) {
    bricks = [];
    const layout = LEVELS[idx];
    for (let r = 0; r < layout.length; r++)
        for (let c = 0; c < layout[r].length; c++)
            if (layout[r][c] > 0) bricks.push(new Brick(r, c, layout[r][c]));
}

function createParticles(x, y, color) {
    for (let i = 0; i < 18; i++) particles.push(new Particle(x, y, color));
}

function shakeScreen() {
    canvas.classList.add('shake');
    setTimeout(() => canvas.classList.remove('shake'), 60);
}

function checkLevelComplete() {
    if (bricks.filter(b => b.status > 0).length === 0) {
        if (currentLevel + 1 >= LEVELS.length) victory();
        else {
            gameState = 'LEVELUP';
            playSound(1000, 'sine', 0.5);
            showLevelUpModal();
        }
    }
}

function showLevelUpModal() {
    const n = currentLevel + 1;
    document.getElementById('levelup-score').innerText = levelScore;
    document.getElementById('levelup-combo').innerText = 'x' + maxCombo;
    document.getElementById('levelup-total').innerText = score;
    document.getElementById('next-level-label').innerText = 'Level ' + (n + 1);
    document.getElementById('levelup-progress').style.width = (n / LEVELS.length * 100) + '%';
    document.getElementById('screen-levelup').classList.remove('hidden');
}

function updateHUD() {
    document.getElementById('score-display').innerText = score;
    document.getElementById('combo-display').innerText = combo > 1 ? '\xd7' + combo + ' COMBO' : '';
    document.getElementById('level-display').innerText = currentLevel + 1;
    document.getElementById('lives-display').innerText = '\u2764'.repeat(Math.max(0, lives));
}

function collisionDetection() {
    for (let b of bricks) {
        if (b.status <= 0) continue;
        let tx = Math.max(b.x, Math.min(ball.x, b.x + b.width));
        let ty = Math.max(b.y, Math.min(ball.y, b.y + b.height));
        let dist = Math.sqrt((ball.x - tx) ** 2 + (ball.y - ty) ** 2);
        if (dist <= ball.radius) {
            if (tx === b.x || tx === b.x + b.width) ball.dx = -ball.dx;
            else ball.dy = -ball.dy;
            b.hit();
        }
    }
}

// ============================================================
//  GAME LOOP
// ============================================================
function update() {
    if (gameState !== 'PLAYING') return;
    paddle.update();
    ball.update();
    collisionDetection();
    particles.forEach(p => p.update());
    particles = particles.filter(p => p.life > 0);
    powerUps.forEach(p => p.update());
    powerUps = powerUps.filter(p => p.active && p.y < canvas.height);
}

function draw() {
    ctx.fillStyle = 'rgba(2,1,10,0.28)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = 'rgba(0,245,255,0.015)';
    ctx.lineWidth = 1;
    for (let x = 0; x < canvas.width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }
    bricks.forEach(b => b.draw());
    particles.forEach(p => p.draw());
    powerUps.forEach(p => p.draw());
    paddle.draw();
    ball.draw();
}

function gameLoop() {
    if (gameState === 'PLAYING') {
        update();
        draw();
    }
    requestAnimationFrame(gameLoop);
}

// ============================================================
//  STATE MANAGEMENT
// ============================================================
function startGame() {
    initAudio();
    hideAllScreens();
    score = 0;
    levelScore = 0;
    combo = 1;
    maxCombo = 1;
    lives = CONFIG.lives;
    currentLevel = 0;
    paddle = new Paddle();
    ball = new Ball();
    powerUps = [];
    particles = [];
    buildLevel(currentLevel);
    updateHUD();
    gameState = 'PLAYING';
    resizeCanvas();
}

function gameOver() {
    gameState = 'GAMEOVER';
    playSound(100, 'sawtooth', 1);
    document.getElementById('final-score').innerText = score;
    document.getElementById('gameover-level').innerText = currentLevel + 1;
    document.getElementById('gameover-combo').innerText = 'x' + maxCombo;
    document.getElementById('screen-gameover').classList.remove('hidden');
}

function victory() {
    gameState = 'VICTORY';
    playSound(800, 'sine', 1);
    document.getElementById('victory-score').innerText = score;
    document.getElementById('victory-combo').innerText = 'x' + maxCombo;
    document.getElementById('screen-victory').classList.remove('hidden');
}

function togglePause() {
    if (gameState === 'PLAYING') {
        gameState = 'PAUSED';
        document.getElementById('screen-pause').classList.remove('hidden');
    } else if (gameState === 'PAUSED') {
        gameState = 'PLAYING';
        document.getElementById('screen-pause').classList.add('hidden');
    }
}

function hideAllScreens() {
    ['screen-start', 'screen-gameover', 'screen-victory', 'screen-levelup', 'screen-pause'].forEach(id => document.getElementById(id).classList.add('hidden'));
}

// ============================================================
//  INPUT – KEYBOARD
// ============================================================
document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') rightPressed = true;
    else if (e.key === 'ArrowLeft') leftPressed = true;
    else if (e.key === 'p' || e.key === 'P' || e.key === 'Escape') togglePause();
});
document.addEventListener('keyup', e => {
    if (e.key === 'ArrowRight') {
        rightPressed = false;
        if (paddle) mouseX = paddle.x + paddle.width / 2;
    } else if (e.key === 'ArrowLeft') {
        leftPressed = false;
        if (paddle) mouseX = paddle.x + paddle.width / 2;
    }
});

// ============================================================
//  INPUT – MOUSE
// ============================================================
function getCanvasX(cx) {
    const r = canvas.getBoundingClientRect();
    return (cx - r.left) * (canvas.width / r.width);
}
canvas.addEventListener('mousemove', e => {
    mouseX = getCanvasX(e.clientX);
});

// ============================================================
//  INPUT – TOUCH DRAG on canvas (primary mobile control)
// ============================================================
canvas.addEventListener('touchstart', e => {
    e.preventDefault();
    initAudio();
    mouseX = getCanvasX(e.touches[0].clientX);
}, {
    passive: false
});
canvas.addEventListener('touchmove', e => {
    e.preventDefault();
    mouseX = getCanvasX(e.touches[0].clientX);
}, {
    passive: false
});
canvas.addEventListener('touchend', e => {
    e.preventDefault();
}, {
    passive: false
});

// ============================================================
//  INPUT – D-PAD BUTTONS
// ============================================================
const dpadL = document.getElementById('dpad-left');
const dpadR = document.getElementById('dpad-right');

function dpadStart(dir) {
    initAudio();
    if (dir === 'left') {
        leftPressed = true;
        rightPressed = false;
        dpadL.classList.add('pressed');
    } else {
        rightPressed = true;
        leftPressed = false;
        dpadR.classList.add('pressed');
    }
}

function dpadEnd(dir) {
    if (dir === 'left') {
        leftPressed = false;
        dpadL.classList.remove('pressed');
    } else {
        rightPressed = false;
        dpadR.classList.remove('pressed');
    }
    if (paddle) mouseX = paddle.x + paddle.width / 2;
}

['touchstart', 'mousedown'].forEach(ev => {
    dpadL.addEventListener(ev, e => {
        e.preventDefault();
        dpadStart('left');
    }, {
        passive: false
    });
    dpadR.addEventListener(ev, e => {
        e.preventDefault();
        dpadStart('right');
    }, {
        passive: false
    });
});
['touchend', 'touchcancel', 'mouseup', 'mouseleave'].forEach(ev => {
    dpadL.addEventListener(ev, e => {
        e.preventDefault();
        dpadEnd('left');
    }, {
        passive: false
    });
    dpadR.addEventListener(ev, e => {
        e.preventDefault();
        dpadEnd('right');
    }, {
        passive: false
    });
});

// ============================================================
//  BUTTON LISTENERS
// ============================================================
document.getElementById('btn-start').addEventListener('click', startGame);
document.getElementById('btn-restart').addEventListener('click', startGame);
document.getElementById('btn-playagain').addEventListener('click', startGame);
document.getElementById('btn-resume').addEventListener('click', togglePause);
document.getElementById('btn-pause').addEventListener('click', () => {
    initAudio();
    togglePause();
});
document.getElementById('btn-quit').addEventListener('click', () => {
    gameState = 'START';
    hideAllScreens();
    document.getElementById('screen-start').classList.remove('hidden');
});
document.getElementById('btn-nextlevel').addEventListener('click', () => {
    currentLevel++;
    levelScore = 0;
    maxCombo = 1;
    document.getElementById('screen-levelup').classList.add('hidden');
    ball.reset();
    paddle.width = CONFIG.paddle.width;
    powerUps = [];
    particles = [];
    buildLevel(currentLevel);
    updateHUD();
    gameState = 'PLAYING';
});
document.getElementById('btn-sound').addEventListener('click', e => {
    soundEnabled = !soundEnabled;
    e.currentTarget.innerText = soundEnabled ? '\uD83D\uDD0A' : '\uD83D\uDD07';
    if (soundEnabled) initAudio();
});
document.getElementById('btn-continue').addEventListener('click', () => {
    if (!rewardAdReady) return;
    const loaderName = window.preroll && window.preroll.config && window.preroll.config.loaderObjectName;
    const adLoader = loaderName && window[loaderName];
    if (!adLoader || typeof adLoader.showRewardAd !== 'function') return;

    rewardAdSoundWasEnabled = soundEnabled;
    soundEnabled = false;
    if (audioCtx && audioCtx.state === 'running') audioCtx.suspend();
    setRewardAdButtonState(false);
    adLoader.showRewardAd();
});

// ============================================================
//  RESPONSIVE RESIZE
// ============================================================
function resizeCanvas() {
    const container = document.getElementById('game-container');
    const mobileCtrl = document.getElementById('mobile-controls');
    const adBanner = document.getElementById('ad-banner-top');

    const isTouch = window.matchMedia('(hover:none) and (pointer:coarse)').matches || window.innerWidth <= 600;
    const dpadH = isTouch ? 70 : 0;
    const adH = (adBanner.style.display !== 'none' && window.innerHeight > 580) ? (adBanner.offsetHeight + 8) : 0;
    const pad = 12;

    let avW = window.innerWidth - pad;
    let avH = window.innerHeight - dpadH - adH - pad;

    const ratio = 800 / 600;
    let w = avW,
        h = w / ratio;
    if (h > avH) {
        h = avH;
        w = h * ratio;
    }

    container.style.width = w + 'px';
    container.style.height = h + 'px';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    mobileCtrl.style.width = w + 'px';

    const hint = document.getElementById('start-hint');
    if (hint) hint.textContent = isTouch ? 'DRAG ON SCREEN OR USE D-PAD BELOW' : 'ARROW KEYS OR MOUSE TO MOVE';
}

window.addEventListener('resize', resizeCanvas);
window.addEventListener('orientationchange', () => setTimeout(resizeCanvas, 250));

// ============================================================
//  BOOT
// ============================================================
resizeCanvas();
setRewardAdButtonState(false);
waitForRewardCallbacks();
requestAnimationFrame(gameLoop);


(function() {
    const preloader = document.getElementById('preloader');
    const bar = document.getElementById('preloader-bar');
    const percentEl = document.getElementById('preloader-percent');
    const statusEl = document.getElementById('preloader-status');
    const particlesContainer = document.getElementById('preloader-particles');

    // --- Generate floating particles ---
    if (particlesContainer) {
        const particleCount = 35;
        for (let i = 0; i < particleCount; i++) {
            const p = document.createElement('div');
            p.classList.add('preloader-particle');
            p.style.left = Math.random() * 100 + '%';
            p.style.animationDuration = (4 + Math.random() * 8) + 's';
            p.style.animationDelay = Math.random() * 6 + 's';
            p.style.width = (1.5 + Math.random() * 2.5) + 'px';
            p.style.height = p.style.width;
            const hue = Math.random() < 0.5 ? '0ff' : 'f0f';
            p.style.background = '#' + hue;
            p.style.boxShadow = '0 0 6px #' + hue + ', 0 0 14px #' + (hue === '0ff' ? '00bfff' : 'c0f');
            particlesContainer.appendChild(p);
        }
    }

    // --- Status messages ---
    const statusMessages = [
        'Initializing core modules…',
        'Loading shader pipelines…',
        'Calibrating neon grid…',
        'Spinning up particle engine…',
        'Establishing cyber-link…',
        'Rendering scanlines…',
        'Booting arcade subsystem…',
        'Almost ready…',
    ];

    // --- Smooth progress simulation ---
    let currentProgress = 0;
    const targetProgress = 100;
    const duration = 2800; // total simulated load time in ms
    const startTime = performance.now();

    function updateProgress(timestamp) {
        const elapsed = timestamp - startTime;
        const rawFraction = Math.min(elapsed / duration, 1);

        // Easing: fast start, slow end (ease-out cubic)
        const easedFraction = 1 - Math.pow(1 - rawFraction, 3);
        const simulatedProgress = Math.floor(easedFraction * 92); // simulate up to 92%

        if (simulatedProgress > currentProgress) {
            currentProgress = simulatedProgress;
            bar.style.width = currentProgress + '%';
            percentEl.textContent = currentProgress + '%';

            // Update status message
            const msgIndex = Math.min(
                Math.floor((currentProgress / 92) * statusMessages.length),
                statusMessages.length - 1
            );
            statusEl.textContent = statusMessages[msgIndex];
        }

        if (rawFraction < 1) {
            requestAnimationFrame(updateProgress);
        } else {
            // Hold at 92% until actual window load
            currentProgress = 92;
            bar.style.width = '92%';
            percentEl.textContent = '92%';
            statusEl.textContent = 'Waiting for full load…';
        }
    }

    requestAnimationFrame(updateProgress);

    // --- Finalize on window load ---
    function finalizePreloader() {
        // Rapidly fill to 100%
        const fillStart = performance.now();
        const fillDuration = 350;

        function fillStep(ts) {
            const e = Math.min((ts - fillStart) / fillDuration, 1);
            const p = 92 + Math.floor(e * 8);
            bar.style.width = p + '%';
            percentEl.textContent = p + '%';
            statusEl.textContent = 'Ready.';
            if (e < 1) {
                requestAnimationFrame(fillStep);
            } else {
                // 100% reached
                bar.style.width = '100%';
                percentEl.textContent = '100%';
                statusEl.textContent = 'Launching…';

                // Brief pause then hide
                setTimeout(() => {
                    preloader.classList.add('hidden');
                    // Remove preloader from DOM after fade
                    setTimeout(() => {
                        if (preloader.parentNode) {
                            preloader.parentNode.removeChild(preloader);
                        }
                    }, 700);
                }, 350);
            }
        }
        requestAnimationFrame(fillStep);
    }

    // Listen for full page load (including all assets like fonts, images)
    if (document.readyState === 'complete') {
        // Already fully loaded
        finalizePreloader();
    } else {
        window.addEventListener('load', finalizePreloader, {
            once: true
        });
    }

    // Fallback: if load event hasn't fired after 5 seconds, force-finalize
    setTimeout(() => {
        if (!preloader.classList.contains('hidden')) {
            finalizePreloader();
        }
    }, 5000);
})();