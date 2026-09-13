// ─── AUDIO ENGINE ──────────────────────────────────────────────
const AC = new(window.AudioContext || window.webkitAudioContext)();

function resumeAC() {
    if (AC.state === 'suspended') AC.resume()
}

function playTone(freq, type, dur, vol = 0.3, delay = 0) {
    resumeAC();
    const o = AC.createOscillator(),
        g = AC.createGain();
    o.connect(g);
    g.connect(AC.destination);
    o.type = type;
    o.frequency.value = freq;
    const t = AC.currentTime + delay;
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    o.start(t);
    o.stop(t + dur);
}

function playClick() {
    playTone(440, 'sine', 0.08, 0.15)
}

function playPlace() {
    playTone(523, 'sine', 0.1, 0.25);
    playTone(659, 'sine', 0.1, 0.2, 0.08);
}

function playError() {
    playTone(220, 'sawtooth', 0.15, 0.2)
}

function playSuccess() {
    const notes = [523, 659, 784, 1047];
    notes.forEach((f, i) => playTone(f, 'sine', 0.3, 0.25, i * 0.1));
}

function playHint() {
    playTone(880, 'sine', 0.12, 0.2);
    playTone(1108, 'sine', 0.12, 0.15, 0.12)
}

function playPickup() {
    playTone(660, 'triangle', 0.06, 0.15)
}

// ─── LEVEL DATA ────────────────────────────────────────────────
// Each level: gridSize, pieces (array of shape matrices), solution grid, title
const LEVELS = [{
        size: 4,
        title: "INTELLECTUAL THRILLS",
        colors: ['#ff6b9d', '#4ecdc4', '#f5c842', '#b39ddb'],
        pieces: [{
                id: 0,
                shape: [
                    [1, 1],
                    [1, 0]
                ],
                color: '#ff6b9d'
            },
            {
                id: 1,
                shape: [
                    [1, 1, 1]
                ],
                color: '#4ecdc4'
            },
            {
                id: 2,
                shape: [
                    [1, 0],
                    [1, 1]
                ],
                color: '#f5c842'
            },
            {
                id: 3,
                shape: [
                    [1, 1],
                    [0, 1]
                ],
                color: '#b39ddb'
            },
            {
                id: 4,
                shape: [
                    [1],
                    [1]
                ],
                color: '#a8e6cf'
            },
            {
                id: 5,
                shape: [
                    [1, 1]
                ],
                color: '#ff8b94'
            },
        ],
        solution: [
            [0, 0, 1, 1],
            [0, 0, 1, 2],
            [3, 3, 2, 2],
            [3, 4, 5, 5],
        ]
    },
    {
        size: 4,
        title: "SMART FUN",
        colors: ['#ff6b9d', '#4ecdc4', '#f5c842', '#b39ddb'],
        pieces: [{
                id: 0,
                shape: [
                    [1, 1],
                    [1, 1]
                ],
                color: '#f5c842'
            },
            {
                id: 1,
                shape: [
                    [1, 0],
                    [1, 0],
                    [1, 1]
                ],
                color: '#4ecdc4'
            },
            {
                id: 2,
                shape: [
                    [1, 1, 1]
                ],
                color: '#ff6b9d'
            },
            {
                id: 3,
                shape: [
                    [1],
                    [1],
                    [1]
                ],
                color: '#b39ddb'
            },
        ],
        solution: [
            [0, 0, 3, 2],
            [0, 0, 3, 2],
            [1, 1, 3, 2],
            [1, -1, 1, -1],
        ]
    },
    {
        size: 5,
        title: "MIND MASTERY",
        colors: ['#ff6b9d', '#4ecdc4', '#f5c842', '#b39ddb', '#a8e6cf'],
        pieces: [{
                id: 0,
                shape: [
                    [1, 1, 1],
                    [0, 1, 0]
                ],
                color: '#ff6b9d'
            },
            {
                id: 1,
                shape: [
                    [1, 0],
                    [1, 1],
                    [1, 0]
                ],
                color: '#4ecdc4'
            },
            {
                id: 2,
                shape: [
                    [1, 1],
                    [1, 0],
                    [1, 0]
                ],
                color: '#f5c842'
            },
            {
                id: 3,
                shape: [
                    [0, 1],
                    [1, 1],
                    [0, 1]
                ],
                color: '#b39ddb'
            },
            {
                id: 4,
                shape: [
                    [1, 1, 1, 1]
                ],
                color: '#a8e6cf'
            },
        ],
        solution: [
            [0, 0, 0, 3, 4],
            [1, 0, 3, 3, 4],
            [1, 1, 2, 3, 4],
            [1, 2, 2, -1, 4],
            [-1, -1, 2, -1, -1],
        ]
    },
    {
        size: 5,
        title: "BRAIN CHALLENGES",
        colors: ['#ff6b9d', '#4ecdc4', '#f5c842', '#b39ddb', '#ff8b94'],
        pieces: [{
                id: 0,
                shape: [
                    [1, 1, 0],
                    [0, 1, 1]
                ],
                color: '#ff6b9d'
            },
            {
                id: 1,
                shape: [
                    [0, 1, 1],
                    [1, 1, 0]
                ],
                color: '#4ecdc4'
            },
            {
                id: 2,
                shape: [
                    [1, 1],
                    [1, 0],
                    [1, 0]
                ],
                color: '#f5c842'
            },
            {
                id: 3,
                shape: [
                    [1, 0],
                    [1, 1],
                    [0, 1]
                ],
                color: '#b39ddb'
            },
            {
                id: 4,
                shape: [
                    [1],
                    [1],
                    [1],
                    [1]
                ],
                color: '#ff8b94'
            },
        ],
        solution: [
            [0, 0, -1, 1, 1],
            [-1, 0, 1, 1, -1],
            [2, 2, 3, -1, 4],
            [2, -1, 3, 3, 4],
            [2, -1, -1, 3, 4],
        ]
    },
    {
        size: 5,
        title: "USE HELP",
        colors: ['#ff6b9d', '#4ecdc4', '#f5c842', '#b39ddb', '#a8e6cf', '#ff8b94'],
        pieces: [{
                id: 0,
                shape: [
                    [1, 1, 1],
                    [1, 0, 0],
                    [1, 0, 0]
                ],
                color: '#ff6b9d'
            },
            {
                id: 1,
                shape: [
                    [0, 0, 1],
                    [1, 1, 1],
                    [0, 0, 1]
                ],
                color: '#4ecdc4'
            },
            {
                id: 2,
                shape: [
                    [1, 1],
                    [0, 1],
                    [0, 1]
                ],
                color: '#f5c842'
            },
            {
                id: 3,
                shape: [
                    [1, 0],
                    [1, 1]
                ],
                color: '#b39ddb'
            },
            {
                id: 4,
                shape: [
                    [1, 1],
                    [1, 0]
                ],
                color: '#a8e6cf'
            },
        ],
        solution: [
            [0, 0, 0, 1, 1],
            [0, -1, 1, 1, -1],
            [0, -1, 2, 1, 3],
            [4, 4, 2, 3, 3],
            [-1, 4, 2, -1, -1],
        ]
    },
    {
        size: 6,
        title: "GENIUS MODE",
        colors: ['#ff6b9d', '#4ecdc4', '#f5c842', '#b39ddb', '#a8e6cf', '#ff8b94'],
        pieces: [{
                id: 0,
                shape: [
                    [1, 1, 1],
                    [0, 0, 1],
                    [0, 0, 1]
                ],
                color: '#ff6b9d'
            },
            {
                id: 1,
                shape: [
                    [1, 0, 0],
                    [1, 1, 1],
                    [1, 0, 0]
                ],
                color: '#4ecdc4'
            },
            {
                id: 2,
                shape: [
                    [0, 1, 1],
                    [1, 1, 0]
                ],
                color: '#f5c842'
            },
            {
                id: 3,
                shape: [
                    [1, 1, 0],
                    [0, 1, 1]
                ],
                color: '#b39ddb'
            },
            {
                id: 4,
                shape: [
                    [1, 1],
                    [1, 1]
                ],
                color: '#a8e6cf'
            },
            {
                id: 5,
                shape: [
                    [1, 1, 1, 1]
                ],
                color: '#ff8b94'
            },
        ],
        solution: [
            [0, 0, 0, 5, 5, 5],
            [1, 2, 2, 0, -1, -1],
            [1, 1, 2, 0, -1, -1],
            [1, 3, 3, 4, 4, -1],
            [-1, -1, 3, 4, 4, -1],
            [-1, -1, -1, -1, -1, -1],
        ]
    }
];

// ─── GAME STATE ────────────────────────────────────────────────
let currentLevel = 0;
let gridState = []; // 2D: null = empty, pieceId = filled
let placedPieces = new Set();
let selectedPiece = null;
let coins = 10;
let totalStars = 0;
let levelStars = []; // per level
let gridSize = 4;
let cellSize = 64;
let currentLevelData = null;

// ─── PRELOADER ─────────────────────────────────────────────────
let preProgress = 0;
const preBar = document.getElementById('pre-bar');
const preloader = document.getElementById('preloader');

function finishLoading() {
    // Prevent multiple calls
    if (preloader.classList.contains('done')) return;
    preloader.classList.add('done');

    preloader.style.transition = 'opacity 0.6s ease';
    preloader.style.opacity = '0';

    setTimeout(() => {
        preloader.style.display = 'none';
        showHome();
    }, 600);
}

const preInterval = setInterval(() => {
    preProgress += Math.random() * 8 + 4;

    if (preProgress >= 100) {
        preProgress = 100;
        clearInterval(preInterval);

        // Smooth delay before hiding
        setTimeout(finishLoading, 500);
    }

    preBar.style.width = preProgress + '%';
}, 80);

// ─── FLOATING BG SHAPES ────────────────────────────────────────
function createFloatingShapes() {
    const bg = document.getElementById('shapes-bg');
    const shapeTypes = ['rect', 'circle', 'poly'];
    const colors = ['#ff6b9d', '#4ecdc4', '#f5c842', '#b39ddb', '#a8e6cf', '#ff8b94'];
    for (let i = 0; i < 12; i++) {
        const d = document.createElement('div');
        const c = colors[i % colors.length];
        const s = 30 + Math.random() * 60;
        const type = shapeTypes[i % 3];
        d.className = 'float-shape';
        d.style.cssText = `left:${Math.random() * 100}%;top:${Math.random() * 100}%;width:${s}px;height:${s}px;background:${c};opacity:0.12;animation-duration:${5 + Math.random() * 4}s;animation-delay:${Math.random() * 3}s;`;
        if (type === 'circle') d.style.borderRadius = '50%';
        if (type === 'poly') d.style.clipPath = 'polygon(50% 0%,100% 100%,0% 100%)';
        bg.appendChild(d);
    }
}

// ─── LEVEL SELECT ──────────────────────────────────────────────
function buildLevelSelect() {
    const ls = document.getElementById('level-select');
    ls.innerHTML = '';
    LEVELS.forEach((lv, i) => {
        const btn = document.createElement('button');
        btn.className = 'lvl-btn' + (i > totalUnlocked ? ' locked' : '');
        btn.textContent = i + 1;
        const s = levelStars[i] || 0;
        if (s > 0) {
            const star = document.createElement('span');
            star.className = 'lstar';
            star.textContent = '⭐'.repeat(s);
            btn.appendChild(star);
        }
        btn.onclick = () => {
            if (i > totalUnlocked) return;
            playClick();
            currentLevel = i;
            highlightLvlBtn(i);
        };
        ls.appendChild(btn);
    });
    highlightLvlBtn(currentLevel);
}

let totalUnlocked = 0;

function highlightLvlBtn(i) {
    document.querySelectorAll('.lvl-btn').forEach((b, j) => {
        b.style.borderColor = j === i ? 'var(--accent)' : '';
        b.style.background = j === i ? 'var(--cell-hover)' : '';
    });
}

// ─── SCREEN NAV ────────────────────────────────────────────────
function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function showHome() {
    document.getElementById('success-overlay').classList.remove('show');
    document.getElementById('total-stars').textContent = totalStars;
    document.getElementById('total-coins').textContent = coins;
    buildLevelSelect();
    showScreen('home');
}

// ─── START LEVEL ───────────────────────────────────────────────
function startLevel(idx) {
    playClick();
    currentLevel = idx;
    currentLevelData = LEVELS[idx];
    gridSize = currentLevelData.size;
    placedPieces = new Set();
    selectedPiece = null;

    // Calculate cell size based on screen
    const maxW = Math.min(window.innerWidth, 400) - 48;
    cellSize = Math.floor((maxW - 16 - 3 * (gridSize - 1)) / gridSize);
    cellSize = Math.max(40, Math.min(cellSize, 72));

    // Build empty grid state
    gridState = [];
    for (let r = 0; r < gridSize; r++) {
        gridState.push(new Array(gridSize).fill(null));
    }

    document.getElementById('hud-level').textContent = `Level ${idx + 1}`;
    document.getElementById('hud-stars').textContent = totalStars;
    document.getElementById('hud-coins').textContent = coins;
    document.getElementById('level-title').textContent = currentLevelData.title;

    buildGrid();
    buildPieces();
    showScreen('game');

    // Animate grid in
    const cells = document.querySelectorAll('.grid-cell');
    cells.forEach((c, i) => {
        c.style.opacity = '0';
        c.style.transform = 'scale(0.5)';
        setTimeout(() => {
            c.style.transition = 'all 0.3s cubic-bezier(0.34,1.56,0.64,1)';
            c.style.opacity = '1';
            c.style.transform = 'scale(1)'
        }, i * 12);
    });
}

// ─── BUILD GRID ────────────────────────────────────────────────
function buildGrid() {
    const grid = document.getElementById('puzzle-grid');
    grid.style.gridTemplateColumns = `repeat(${gridSize},${cellSize}px)`;
    grid.innerHTML = '';
    for (let r = 0; r < gridSize; r++) {
        for (let c = 0; c < gridSize; c++) {
            const cell = document.createElement('div');
            cell.className = 'grid-cell empty';
            cell.style.width = cellSize + 'px';
            cell.style.height = cellSize + 'px';
            cell.dataset.row = r;
            cell.dataset.col = c;
            cell.addEventListener('click', () => onCellClick(r, c));
            cell.addEventListener('mouseenter', () => onCellHover(r, c, true));
            cell.addEventListener('mouseleave', () => onCellHover(r, c, false));
            grid.appendChild(cell);
        }
    }
}

// ─── BUILD PIECES ──────────────────────────────────────────────
function buildPieces() {
    const shelf = document.getElementById('pieces-shelf');
    shelf.innerHTML = '';
    const pSize = Math.max(18, Math.min(22, cellSize * 0.36));
    currentLevelData.pieces.forEach(piece => {
        const wrapper = document.createElement('div');
        wrapper.className = 'piece-wrapper';
        wrapper.id = `piece-${piece.id}`;
        wrapper.dataset.pieceId = piece.id;

        const mg = document.createElement('div');
        mg.className = 'piece-mini-grid';
        mg.style.gridTemplateColumns = `repeat(${piece.shape[0].length},${pSize}px)`;
        mg.style.gap = '2px';

        piece.shape.forEach(row => {
            row.forEach(v => {
                const pc = document.createElement('div');
                pc.className = 'piece-cell';
                pc.style.width = pSize + 'px';
                pc.style.height = pSize + 'px';
                pc.style.background = v ? piece.color : 'transparent';
                pc.style.borderRadius = v ? '4px' : '0';
                pc.style.boxShadow = v ? `0 2px 0 ${darken(piece.color, 0.3)}` : 'none';
                mg.appendChild(pc);
            });
        });

        wrapper.appendChild(mg);
        wrapper.addEventListener('click', () => selectPiece(piece.id));
        wrapper.addEventListener('mousedown', (e) => startDrag(e, piece.id));
        wrapper.addEventListener('touchstart', (e) => startDragTouch(e, piece.id), {
            passive: false
        });
        shelf.appendChild(wrapper);
    });
}

function darken(hex, amt) {
    const n = parseInt(hex.replace('#', ''), 16);
    const r = Math.max(0, ((n >> 16) & 255) - Math.round(amt * 255));
    const g = Math.max(0, ((n >> 8) & 255) - Math.round(amt * 255));
    const b = Math.max(0, (n & 255) - Math.round(amt * 255));
    return '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
}

// ─── PIECE SELECTION ───────────────────────────────────────────
function selectPiece(id) {
    playPickup();
    document.querySelectorAll('.piece-wrapper').forEach(w => w.classList.remove('selected'));
    if (selectedPiece === id) {
        selectedPiece = null;
        return
    }
    selectedPiece = id;
    const pw = document.getElementById(`piece-${id}`);
    if (pw) pw.classList.add('selected');
    clearHover();
}

// ─── CELL CLICK ────────────────────────────────────────────────
function onCellClick(r, c) {
    if (selectedPiece === null) return;
    const piece = currentLevelData.pieces.find(p => p.id === selectedPiece);
    if (!piece || placedPieces.has(piece.id)) return;
    if (canPlace(piece, r, c)) {
        placePiece(piece, r, c);
    } else {
        playError();
        shakeCells(r, c, piece);
    }
}

// ─── HOVER PREVIEW ─────────────────────────────────────────────
function onCellHover(r, c, enter) {
    clearHover();
    if (!enter || selectedPiece === null) return;
    const piece = currentLevelData.pieces.find(p => p.id === selectedPiece);
    if (!piece || placedPieces.has(piece.id)) return;
    const valid = canPlace(piece, r, c);
    getCells(piece, r, c).forEach(([pr, pc]) => {
        const cell = getCell(pr, pc);
        if (cell) cell.classList.add(valid ? 'valid-drop' : 'invalid-drop');
    });
}

function clearHover() {
    document.querySelectorAll('.valid-drop,.invalid-drop').forEach(c => {
        c.classList.remove('valid-drop', 'invalid-drop');
    });
}

function getCells(piece, startR, startC) {
    const cells = [];
    piece.shape.forEach((row, dr) => row.forEach((v, dc) => {
        if (v) cells.push([startR + dr, startC + dc])
    }));
    return cells;
}

function getCell(r, c) {
    return document.querySelector(`.grid-cell[data-row="${r}"][data-col="${c}"]`);
}

// ─── CAN PLACE ─────────────────────────────────────────────────
function canPlace(piece, startR, startC) {
    for (let dr = 0; dr < piece.shape.length; dr++) {
        for (let dc = 0; dc < piece.shape[dr].length; dc++) {
            if (!piece.shape[dr][dc]) continue;
            const r = startR + dr,
                c = startC + dc;
            if (r < 0 || r >= gridSize || c < 0 || c >= gridSize) return false;
            if (gridState[r][c] !== null) return false;
        }
    }
    return true;
}

// ─── PLACE PIECE ───────────────────────────────────────────────
function placePiece(piece, startR, startC) {
    playPlace();
    clearHover();
    const cells = getCells(piece, startR, startC);
    cells.forEach(([r, c], i) => {
        gridState[r][c] = piece.id;
        const cell = getCell(r, c);
        if (!cell) return;
        setTimeout(() => {
            cell.className = 'grid-cell filled placed';
            cell.style.background = piece.color;
            cell.style.boxShadow = `inset 0 -3px 0 ${darken(piece.color, 0.25)},0 0 12px ${piece.color}55`;
            cell.style.border = `1px solid ${darken(piece.color, 0.15)}`;
        }, i * 30);
    });

    // Show float score
    const pw = document.getElementById(`piece-${piece.id}`);
    if (pw) {
        const rect = pw.getBoundingClientRect();
        showFloatScore('+10', rect.left + rect.width / 2, rect.top);
        pw.classList.add('placed-piece');
    }

    placedPieces.add(piece.id);
    selectedPiece = null;
    document.querySelectorAll('.piece-wrapper').forEach(w => w.classList.remove('selected'));
    coins += 10;
    document.getElementById('hud-coins').textContent = coins;
    document.getElementById('total-coins').textContent = coins;

    setTimeout(() => checkWin(), cells.length * 30 + 100);
}

// ─── CHECK WIN ─────────────────────────────────────────────────
function checkWin() {
    if (placedPieces.size < currentLevelData.pieces.length) return;
    // Check all cells needed by solution are filled
    let filled = 0,
        total = 0;
    for (let r = 0; r < gridSize; r++)
        for (let c = 0; c < gridSize; c++)
            if (gridState[r][c] !== null) filled++;
    // Count valid cells in solution
    total = filled; // simplified: all placed = win
    if (placedPieces.size === currentLevelData.pieces.length) {
        setTimeout(triggerWin, 300);
    }
}

function triggerWin() {
    playSuccess();
    spawnConfetti();
    // Stars
    const stars = 3;
    levelStars[currentLevel] = Math.max(levelStars[currentLevel] || 0, stars);
    totalStars = levelStars.reduce((a, b) => a + (b || 0), 0);
    if (currentLevel >= totalUnlocked && currentLevel < LEVELS.length - 1) totalUnlocked = currentLevel + 1;

    document.getElementById('hud-stars').textContent = totalStars;
    document.getElementById('suc-stars').textContent = '⭐'.repeat(stars);
    document.getElementById('suc-sub').textContent = `Level ${currentLevel + 1} complete! +${stars * 10} coins`;
    coins += stars * 10;
    document.getElementById('next-btn').style.display = currentLevel < LEVELS.length - 1 ? '' : 'none';
    document.getElementById('success-overlay').classList.add('show');
}
function nextLevel() {
    playClick();
    document.getElementById('success-overlay').classList.remove('show');
    if (currentLevel < LEVELS.length - 1) {
        startLevel(currentLevel + 1);
    } else {
        showHome();
    }
}

// ─── RESET / HINT ──────────────────────────────────────────────
function restartLevel() {
    placedPieces.clear();
    selectedPiece = null;
    for (let r = 0; r < gridSize; r++) gridState[r] = new Array(gridSize).fill(null);
    buildGrid();
    buildPieces();
    const cells = document.querySelectorAll('.grid-cell');
    cells.forEach((c, i) => {
        c.style.opacity = '0';
        c.style.transform = 'scale(0.5)';
        setTimeout(() => {
            c.style.transition = 'all 0.25s cubic-bezier(0.34,1.56,0.64,1)';
            c.style.opacity = '1';
            c.style.transform = 'scale(1)'
        }, i * 8);
    });
}

function resetLevel() {
    playClick();
    restartLevel();
}

function useHint() {
    if (coins < 5) {
        playError();
        return
    }
    playHint();
    coins -= 5;
    document.getElementById('hud-coins').textContent = coins;
    // Highlight an unplaced piece
    const unplaced = currentLevelData.pieces.filter(p => !placedPieces.has(p.id));
    if (!unplaced.length) return;
    const piece = unplaced[0];
    const pw = document.getElementById(`piece-${piece.id}`);
    if (pw) {
        pw.style.animation = 'none';
        pw.style.boxShadow = `0 0 24px ${piece.color},0 0 48px ${piece.color}`;
        pw.style.transform = 'scale(1.2)';
        setTimeout(() => {
            pw.style.boxShadow = '';
            pw.style.transform = '';
        }, 2000);
    }
}

// ─── SHAKE ─────────────────────────────────────────────────────
function shakeCells(r, c, piece) {
    getCells(piece, r, c).forEach(([pr, pc]) => {
        const cell = getCell(pr, pc);
        if (!cell) return;
        cell.style.animation = 'none';
        cell.style.background = '#8b1a1a';
        setTimeout(() => {
            cell.style.background = '';
            cell.style.animation = '';
        }, 400);
    });
}

// ─── DRAG & DROP ───────────────────────────────────────────────
let dragData = null;
const ghost = document.getElementById('drag-ghost');

function startDrag(e, pieceId) {
    if (placedPieces.has(pieceId)) return;
    e.preventDefault();
    selectPiece(pieceId);
    dragData = {
        pieceId,
        startX: e.clientX,
        startY: e.clientY
    };
    buildGhost(pieceId, e.clientX, e.clientY);
    playPickup();
    document.addEventListener('mousemove', onDragMove);
    document.addEventListener('mouseup', onDragEnd);
}

function startDragTouch(e, pieceId) {
    if (placedPieces.has(pieceId)) return;
    e.preventDefault();
    const touch = e.touches[0];
    selectPiece(pieceId);
    dragData = {
        pieceId,
        startX: touch.clientX,
        startY: touch.clientY
    };
    buildGhost(pieceId, touch.clientX, touch.clientY);
    playPickup();
    document.addEventListener('touchmove', onDragMoveTouch, {
        passive: false
    });
    document.addEventListener('touchend', onDragEndTouch);
}

function buildGhost(pieceId, x, y) {
    const piece = currentLevelData.pieces.find(p => p.id === pieceId);
    const pSize = 20;
    ghost.innerHTML = '';
    ghost.style.display = 'block';
    const mg = document.createElement('div');
    mg.style.display = 'grid';
    mg.style.gridTemplateColumns = `repeat(${piece.shape[0].length},${pSize}px)`;
    mg.style.gap = '2px';
    piece.shape.forEach(row => row.forEach(v => {
        const pc = document.createElement('div');
        pc.style.cssText = `width:${pSize}px;height:${pSize}px;background:${v ? piece.color : 'transparent'};border-radius:${v ? '3px' : '0'};`;
        mg.appendChild(pc);
    }));
    ghost.appendChild(mg);
    positionGhost(x, y);
}

function positionGhost(x, y) {
    ghost.style.left = (x - ghost.offsetWidth / 2) + 'px';
    ghost.style.top = (y - ghost.offsetHeight / 2) + 'px';
}

function onDragMove(e) {
    if (!dragData) return;
    positionGhost(e.clientX, e.clientY);
    const el = document.elementFromPoint(e.clientX, e.clientY);
    clearHover();
    if (el && el.dataset.row !== undefined) {
        const r = +el.dataset.row,
            c = +el.dataset.col;
        const piece = currentLevelData.pieces.find(p => p.id === dragData.pieceId);
        if (piece) {
            const valid = canPlace(piece, r, c);
            getCells(piece, r, c).forEach(([pr, pc]) => {
                const cell = getCell(pr, pc);
                if (cell) cell.classList.add(valid ? 'valid-drop' : 'invalid-drop');
            });
        }
    }
}

function onDragMoveTouch(e) {
    e.preventDefault();
    const touch = e.touches[0];
    onDragMove({
        clientX: touch.clientX,
        clientY: touch.clientY,
        elementFromPoint: true
    });
    positionGhost(touch.clientX, touch.clientY);
    const el = document.elementFromPoint(touch.clientX, touch.clientY);
    clearHover();
    if (el && el.dataset.row !== undefined) {
        const r = +el.dataset.row,
            c = +el.dataset.col;
        const piece = currentLevelData.pieces.find(p => p.id === dragData.pieceId);
        if (piece) {
            const valid = canPlace(piece, r, c);
            getCells(piece, r, c).forEach(([pr, pc]) => {
                const cell = getCell(pr, pc);
                if (cell) cell.classList.add(valid ? 'valid-drop' : 'invalid-drop');
            });
        }
    }
}

function onDragEnd(e) {
    if (!dragData) return;
    const el = document.elementFromPoint(e.clientX, e.clientY);
    ghost.style.display = 'none';
    clearHover();
    if (el && el.dataset.row !== undefined) {
        const r = +el.dataset.row,
            c = +el.dataset.col;
        const piece = currentLevelData.pieces.find(p => p.id === dragData.pieceId);
        if (piece && canPlace(piece, r, c)) placePiece(piece, r, c);
        else if (piece) playError();
    }
    dragData = null;
    document.removeEventListener('mousemove', onDragMove);
    document.removeEventListener('mouseup', onDragEnd);
}

function onDragEndTouch(e) {
    const touch = e.changedTouches[0];
    const el = document.elementFromPoint(touch.clientX, touch.clientY);
    ghost.style.display = 'none';
    clearHover();
    if (el && el.dataset.row !== undefined) {
        const r = +el.dataset.row,
            c = +el.dataset.col;
        const piece = currentLevelData.pieces.find(p => p.id === dragData.pieceId);
        if (piece && canPlace(piece, r, c)) placePiece(piece, r, c);
        else if (piece) playError();
    }
    dragData = null;
    document.removeEventListener('touchmove', onDragMoveTouch);
    document.removeEventListener('touchend', onDragEndTouch);
}

// ─── CONFETTI ──────────────────────────────────────────────────
function spawnConfetti() {
    const colors = ['#ff6b9d', '#4ecdc4', '#f5c842', '#b39ddb', '#a8e6cf', '#ff8b94', '#fff'];
    for (let i = 0; i < 80; i++) {
        const el = document.createElement('div');
        el.className = 'confetti-piece';
        el.style.left = Math.random() * 100 + 'vw';
        el.style.background = colors[Math.floor(Math.random() * colors.length)];
        el.style.width = (6 + Math.random() * 10) + 'px';
        el.style.height = (6 + Math.random() * 10) + 'px';
        el.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        el.style.animationDuration = (1 + Math.random() * 2) + 's';
        el.style.animationDelay = (Math.random() * 0.5) + 's';
        document.body.appendChild(el);
        setTimeout(() => el.remove(), 3000);
    }
}

// ─── FLOAT SCORE ───────────────────────────────────────────────
function showFloatScore(text, x, y) {
    const el = document.createElement('div');
    el.className = 'float-score';
    el.textContent = text;
    el.style.left = x + 'px';
    el.style.top = y + 'px';
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 900);
}
// Initialize Home Screen
window.addEventListener('load', () => {
    createFloatingShapes();
    buildLevelSelect();
});

// Show WeeGoo midroll ad before starting a level
function showInterstitialThenStart(idx) {
    const resumeGame = () => startLevel(idx);

    try {
        if (window.preroll && window.preroll.config && window.preroll.config.loaderObjectName) {
            const loaderName = window.preroll.config.loaderObjectName;
            const loader = window[loaderName];
            if (loader && typeof loader.refetchAd === 'function') {
                loader.refetchAd(resumeGame);
                return;
            }
        }
    } catch (e) {
        console.warn('WeeGoo midroll init failed, starting game directly', e);
    }

    resumeGame();
}