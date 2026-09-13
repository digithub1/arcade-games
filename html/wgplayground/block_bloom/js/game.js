(() => {
'use strict';

// ── Platform facade (see js/platform.js). The game talks to the platform /
// ads / SDK ONLY through this object — never a portal SDK directly. Which
// adapter it delegates to is chosen by the build flag in js/config.js. ──
const Platform = window.BB_PLATFORM_API;

// Ad policy lives here in the game, not in the adapters:
//   • interstitial only if ≥3 min since the last one AND ≥1 full game since.
//   • "continue after game over" rewarded: once per game.
//   • booster recharge rewarded: tap an empty booster to refill it.
const INTERSTITIAL_MIN_INTERVAL_MS = 3 * 60 * 1000;
const BOOSTER_RECHARGE_AMOUNT = 1;

// ── Safe storage. localStorage THROWS (SecurityError) in a sandboxed third-
// party iframe — which is exactly how Yandex Games embeds the game — so every
// access must be guarded or it crashes boot. Falls back to an in-memory map. ──
const Store = (() => {
  const mem = {};
  let ok = false;
  try { const k = '__bb_probe'; localStorage.setItem(k, '1'); localStorage.removeItem(k); ok = true; } catch (e) { ok = false; }
  return {
    get(k) { try { if (window.BB_PLATFORM === 'gamepix' && window.GamePix && GamePix.localStorage) return GamePix.localStorage.getItem(k); return ok ? localStorage.getItem(k) : (k in mem ? mem[k] : null); } catch (e) { return (k in mem ? mem[k] : null); } },
    set(k, v) { try { if (window.BB_PLATFORM === 'gamepix' && window.GamePix && GamePix.localStorage) GamePix.localStorage.setItem(k, String(v)); else if (ok) localStorage.setItem(k, v); else mem[k] = String(v); } catch (e) { mem[k] = String(v); } },
    remove(k) { try { if (window.BB_PLATFORM === 'gamepix' && window.GamePix && GamePix.localStorage) GamePix.localStorage.removeItem(k); else if (ok) localStorage.removeItem(k); else delete mem[k]; } catch (e) { delete mem[k]; } },
  };
})();

// ── Localization shortcut (see js/strings.js). BB_I18N is initialized at boot. ──
const I18N = window.BB_I18N;
const t = (key, params) => I18N.t(key, params);
const LANG_LIST = window.BB_LANG_LIST || [{ code: 'en', name: 'English' }];

// ── Wood theme design tokens (extracted 1:1 from lib/theme/background_themes.dart) ──
const THEME = {
  bg: '#F5EDE0',
  bgCard: '#FDF8F0',
  bgTray: '#FAF3E8',
  bgGrid: '#E8D9C0',
  bgCellEmpty: '#EDE2D0',
  accent: '#8B5E34',
  accentAlt: '#C17832',
  accentTertiary: '#5C8A4A',
  success: '#5C8A4A',
  warning: '#D4A030',
  danger: '#BF4040',
  textPrimary: '#3D2B1A',
  textSecondary: '#6B5240',
  textMuted: '#A08868',
  textOnAccent: '#FFF8F0',
  borderOuter: '#CBB898',
  borderInner: '#DDD0BA',
  borderCard: '#D4C4A8',
  gridLine: '#D0C0A4',
};

function loadUiImage(src) {
  const img = new Image();
  img.decoding = 'async';
  img.src = src;
  return img;
}

const UI_ASSETS = {
  wood: loadUiImage('assets/ui/wood-tabletop.jpg'),
  cream: loadUiImage('assets/ui/cream-panel.jpg'),
  menu: loadUiImage('assets/ui/main-menu-tabletop.jpg?v=1.2.6'),
  menuPortrait: loadUiImage('assets/ui/main-menu-tabletop-portrait.jpg?v=1.2.6'),
  tutorialHand: loadUiImage('assets/ui/tutorial-hand.png'),
};

// Wood piece palette (lib/logic/piece_color.dart kWoodPieceColors)
const PIECE_COLORS = [
  [194, 78, 63], [205, 120, 48], [214, 165, 62], [150, 158, 66],
  [92, 138, 74], [70, 140, 128], [150, 95, 68], [182, 112, 96],
  [120, 84, 150], [90, 110, 160],
];

// ── Piece shapes (lib/logic/piece_shapes.dart, ported 1:1) ──────────────────
const PIECE_SHAPES = [
  [[0,0]],
  [[0,0],[0,1]],
  [[0,0],[1,0]],
  [[0,0],[0,1],[0,2]],
  [[0,0],[1,0],[2,0]],
  [[0,0],[0,1],[0,2],[0,3]],
  [[0,0],[1,0],[2,0],[3,0]],
  [[0,0],[0,1],[0,2],[0,3],[0,4]],
  [[0,0],[1,0],[2,0],[3,0],[4,0]],
  [[0,0],[0,1],[1,0],[1,1]],
  [[0,0],[0,1],[0,2],[1,0],[1,1],[1,2]],
  [[0,0],[0,1],[1,0],[1,1],[2,0],[2,1]],
  [[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]],
  [[0,0],[1,0],[1,1]],
  [[0,0],[0,1],[1,1]],
  [[0,0],[0,1],[1,0]],
  [[0,1],[1,0],[1,1]],
  [[0,0],[1,0],[2,0],[2,1]],
  [[0,0],[0,1],[0,2],[1,0]],
  [[0,0],[0,1],[1,1],[2,1]],
  [[0,2],[1,0],[1,1],[1,2]],
  [[0,1],[1,1],[2,0],[2,1]],
  [[0,0],[1,0],[1,1],[1,2]],
  [[0,0],[0,1],[1,0],[2,0]],
  [[0,0],[0,1],[0,2],[1,2]],
  [[0,0],[1,0],[2,0],[3,0],[3,1]],
  [[0,1],[1,1],[2,1],[3,0],[3,1]],
  [[0,0],[0,1],[0,2],[0,3],[1,0]],
  [[0,0],[0,1],[0,2],[0,3],[1,3]],
  [[0,1],[1,0],[1,1],[1,2]],
  [[0,0],[1,0],[1,1],[2,0]],
  [[0,0],[0,1],[0,2],[1,1]],
  [[0,1],[1,0],[1,1],[2,1]],
  [[0,1],[0,2],[1,0],[1,1]],
  [[0,0],[1,0],[1,1],[2,1]],
  [[0,0],[0,1],[1,1],[1,2]],
  [[0,1],[1,0],[1,1],[2,0]],
];
const SMALL_SHAPES = PIECE_SHAPES.filter(s => s.length <= 2);
const MEDIUM_SHAPES = PIECE_SHAPES.filter(s => s.length >= 3 && s.length <= 4);
const LARGE_SHAPES = PIECE_SHAPES.filter(s => s.length >= 5);

// ── Scoring constants (lib/logic/scoring.dart) ───────────────────────────
const SCORE_PER_CELL = 12;
const SCORE_PER_LINE = 120;
const MULTI_LINE_BONUS = 60;
const GRID_SIZE = 8;

// ── Layout constants (design proportions from lib/theme/app_theme.dart) ──
const DESIGN_WIDTH_CAP = 640;
const START_BOOSTERS = { bomb: 2, sword: 2 };

// ═════════════════════════════════════════════════════════════════════════
// Utilities
// ═════════════════════════════════════════════════════════════════════════
function rand(n) { return Math.floor(Math.random() * n); }
function randFloat() { return Math.random(); }
function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = rand(i + 1);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
function shapeBounds(shape) {
  let h = 0, w = 0;
  for (const [dr, dc] of shape) { h = Math.max(h, dr + 1); w = Math.max(w, dc + 1); }
  return { width: w, height: h };
}
function shapesEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i][0] !== b[i][0] || a[i][1] !== b[i][1]) return false;
  }
  return true;
}
function distinctColors(n) {
  const palette = PIECE_COLORS.slice();
  if (palette.length < n) {
    const out = [];
    for (let i = 0; i < n; i++) out.push(PIECE_COLORS[rand(PIECE_COLORS.length)]);
    return out;
  }
  shuffle(palette);
  return palette.slice(0, n);
}

// ═════════════════════════════════════════════════════════════════════════
// Piece
// ═════════════════════════════════════════════════════════════════════════
class Piece {
  constructor(shape, color) {
    this.shape = shape;
    this.color = color;
    const b = shapeBounds(shape);
    this.width = b.width;
    this.height = b.height;
  }
}

// ═════════════════════════════════════════════════════════════════════════
// Board (lib/logic/board.dart, ported 1:1)
// ═════════════════════════════════════════════════════════════════════════
class Board {
  constructor(size = GRID_SIZE) {
    this.size = size;
    this.grid = Array.from({ length: size }, () => new Array(size).fill(null));
  }
  reset() {
    for (let r = 0; r < this.size; r++) this.grid[r].fill(null);
  }
  isValidPlacement(piece, row, col) {
    for (const [dr, dc] of piece.shape) {
      const r = row + dr, c = col + dc;
      if (r < 0 || r >= this.size || c < 0 || c >= this.size) return false;
      if (this.grid[r][c] != null) return false;
    }
    return true;
  }
  place(piece, row, col) {
    for (const [dr, dc] of piece.shape) {
      this.grid[row + dr][col + dc] = piece.color;
    }
    return piece.shape.length;
  }
  clearLines() {
    const fullRows = [];
    for (let r = 0; r < this.size; r++) {
      if (this.grid[r].every(c => c != null)) fullRows.push(r);
    }
    const fullCols = [];
    for (let c = 0; c < this.size; c++) {
      let full = true;
      for (let r = 0; r < this.size; r++) if (this.grid[r][c] == null) { full = false; break; }
      if (full) fullCols.push(c);
    }
    const clearedCells = [];
    const seen = new Set();
    const add = (r, c) => { const k = r * this.size + c; if (!seen.has(k)) { seen.add(k); clearedCells.push([r, c]); } };
    for (const r of fullRows) for (let c = 0; c < this.size; c++) add(r, c);
    for (const c of fullCols) for (let r = 0; r < this.size; r++) add(r, c);
    for (const [r, c] of clearedCells) this.grid[r][c] = null;
    return { rows: fullRows, cols: fullCols, clearedCells, lineCount: fullRows.length + fullCols.length };
  }
  previewCompletedLines(piece, row, col) {
    const occupied = new Set();
    for (const [dr, dc] of piece.shape) occupied.add((row + dr) * this.size + (col + dc));
    const rows = [];
    for (let r = 0; r < this.size; r++) {
      let full = true;
      for (let c = 0; c < this.size; c++) {
        if (this.grid[r][c] == null && !occupied.has(r * this.size + c)) { full = false; break; }
      }
      if (full) rows.push(r);
    }
    const cols = [];
    for (let c = 0; c < this.size; c++) {
      let full = true;
      for (let r = 0; r < this.size; r++) {
        if (this.grid[r][c] == null && !occupied.has(r * this.size + c)) { full = false; break; }
      }
      if (full) cols.push(c);
    }
    return { rows, cols };
  }
  canPlaceAnywhere(piece) {
    for (let r = 0; r <= this.size - piece.height; r++) {
      for (let c = 0; c <= this.size - piece.width; c++) {
        if (this.isValidPlacement(piece, r, c)) return true;
      }
    }
    return false;
  }
  isGameOverForPieces(pieces) {
    if (pieces.length === 0) return false;
    return pieces.every(p => !this.canPlaceAnywhere(p));
  }
  get filledCount() {
    let n = 0;
    for (const row of this.grid) for (const c of row) if (c != null) n++;
    return n;
  }
}

// ═════════════════════════════════════════════════════════════════════════
// PieceGenerator (lib/logic/piece_generator.dart, ported 1:1: fairness
// guarantee via row-bitmask feasibility search + medium/large/small mixing)
// ═════════════════════════════════════════════════════════════════════════
const Mix = { MEDIUM: 'medium', STANDARD: 'standard', RESCUE_MEDIUM: 'rescueMedium', RESCUE_SMALL: 'rescueSmall' };

class PieceGenerator {
  generatePieces(board, difficulty = 1.0) {
    const rows = this._rowsFromBoard(board);
    const fillRatio = board.filledCount / (board.size * board.size);
    const effectiveFill = clamp(fillRatio / difficulty, 0, 1);

    const mixes = [this._chooseMix(effectiveFill), Mix.MEDIUM];
    for (const mix of mixes) {
      for (let attempt = 0; attempt < 24; attempt++) {
        const pieces = this._buildTrio(mix);
        if (this._isFullyPlayable(rows, board.size, pieces)) return pieces;
      }
    }
    return this._safeFallback(rows, board.size);
  }

  _chooseMix(fillRatio) {
    const roll = randFloat();
    if (fillRatio > 0.5) return roll < 0.65 ? Mix.MEDIUM : Mix.STANDARD;
    return roll < 0.65 ? Mix.STANDARD : Mix.MEDIUM;
  }

  _buildTrio(mix) {
    const large = LARGE_SHAPES.length ? LARGE_SHAPES : MEDIUM_SHAPES;
    let pools;
    switch (mix) {
      case Mix.MEDIUM: pools = [MEDIUM_SHAPES, MEDIUM_SHAPES, MEDIUM_SHAPES]; break;
      case Mix.STANDARD: pools = [MEDIUM_SHAPES, MEDIUM_SHAPES, large]; break;
      case Mix.RESCUE_MEDIUM: pools = [SMALL_SHAPES, MEDIUM_SHAPES, MEDIUM_SHAPES]; break;
      case Mix.RESCUE_SMALL: pools = [SMALL_SHAPES, SMALL_SHAPES, MEDIUM_SHAPES]; break;
    }
    const colors = distinctColors(3);
    const pieces = [];
    const used = [];
    for (let i = 0; i < 3; i++) {
      const pool = pools[i];
      let shape = pool[rand(pool.length)];
      for (let t = 0; t < 12 && used.some(s => shapesEqual(s, shape)); t++) {
        shape = pool[rand(pool.length)];
      }
      used.push(shape);
      pieces.push(new Piece(shape.slice(), colors[i]));
    }
    return pieces;
  }

  _safeFallback(rows, size) {
    for (const mix of [Mix.RESCUE_MEDIUM, Mix.RESCUE_SMALL]) {
      for (let attempt = 0; attempt < 30; attempt++) {
        const pieces = this._buildTrio(mix);
        if (this._isFullyPlayable(rows, size, pieces)) return pieces;
      }
    }
    const colors = distinctColors(3);
    return [new Piece([[0, 0]], colors[0]), new Piece([[0, 0]], colors[1]), new Piece([[0, 0]], colors[2])];
  }

  _isFullyPlayable(rows, size, pieces) {
    if (!pieces.length) return false;
    const budget = { remaining: 120000 };
    return this._canPlaceSequence(rows, size, pieces, budget);
  }

  _rowsFromBoard(board) {
    const rows = new Array(board.size).fill(0);
    for (let r = 0; r < board.size; r++) {
      let m = 0;
      for (let c = 0; c < board.size; c++) if (board.grid[r][c] != null) m |= (1 << c);
      rows[r] = m;
    }
    return rows;
  }

  _fits(rows, size, p, r, c) {
    for (const [dr, dc] of p.shape) {
      const rr = r + dr, cc = c + dc;
      if (rr < 0 || rr >= size || cc < 0 || cc >= size) return false;
      if (rows[rr] & (1 << cc)) return false;
    }
    return true;
  }

  _placeAndClear(rows, size, p, r, c) {
    const out = rows.slice();
    for (const [dr, dc] of p.shape) out[r + dr] |= (1 << (c + dc));
    const fullMask = (1 << size) - 1;
    let fullColMask = 0;
    for (let cc = 0; cc < size; cc++) {
      const bit = 1 << cc;
      let full = true;
      for (let rr = 0; rr < size; rr++) if (!(out[rr] & bit)) { full = false; break; }
      if (full) fullColMask |= bit;
    }
    for (let rr = 0; rr < size; rr++) {
      if (out[rr] === fullMask) out[rr] = 0;
      else if (fullColMask) out[rr] = out[rr] & ~fullColMask & fullMask;
    }
    return out;
  }

  _canPlaceSequence(rows, size, pieces, budget) {
    if (!pieces.length) return true;
    for (let i = 0; i < pieces.length; i++) {
      const p = pieces[i];
      const maxR = size - p.height, maxC = size - p.width;
      if (maxR < 0 || maxC < 0) continue;
      const rest = pieces.slice(0, i).concat(pieces.slice(i + 1));
      for (let r = 0; r <= maxR; r++) {
        for (let c = 0; c <= maxC; c++) {
          if (budget.remaining-- <= 0) return false;
          if (!this._fits(rows, size, p, r, c)) continue;
          const next = this._placeAndClear(rows, size, p, r, c);
          if (this._canPlaceSequence(next, size, rest, budget)) return true;
        }
      }
    }
    return false;
  }
}

// ═════════════════════════════════════════════════════════════════════════
// ScoreManager (lib/logic/scoring.dart, ported 1:1 incl. the combo-reset
// quirk on zero-line clears — boosters intentionally trigger this)
// ═════════════════════════════════════════════════════════════════════════
class ScoreManager {
  constructor() { this.score = 0; this.combo = 0; }
  addPlacementScore(cells) { this.score += cells * SCORE_PER_CELL; }
  addClearScore(clearResult) {
    const lines = clearResult.lineCount;
    if (lines > 0) {
      this.score += lines * SCORE_PER_LINE;
      if (lines > 1) this.score += (lines - 1) * MULTI_LINE_BONUS;
      this.combo += 1;
    } else {
      this.combo = 0;
    }
  }
  reset() { this.score = 0; this.combo = 0; }
}

// ═════════════════════════════════════════════════════════════════════════
// Boosters (lib/logic/boosters/*.dart, ported 1:1)
// ═════════════════════════════════════════════════════════════════════════
const BombBooster = {
  apply(board, scoreManager, centerRow, centerCol) {
    const cleared = [];
    for (let r = centerRow - 1; r <= centerRow + 1; r++) {
      for (let c = centerCol - 1; c <= centerCol + 1; c++) {
        if (r >= 0 && r < board.size && c >= 0 && c < board.size && board.grid[r][c] != null) {
          board.grid[r][c] = null;
          cleared.push([r, c]);
        }
      }
    }
    if (cleared.length) scoreManager.addClearScore({ rows: [], cols: [], clearedCells: cleared, lineCount: 0 });
    return cleared;
  },
};
const SwordBooster = {
  apply(board, scoreManager, row, col) {
    const cleared = [];
    const seen = new Set();
    const add = (r, c) => { const k = r * board.size + c; if (!seen.has(k)) { seen.add(k); cleared.push([r, c]); } };
    for (let c = 0; c < board.size; c++) if (board.grid[row][c] != null) { board.grid[row][c] = null; add(row, c); }
    for (let r = 0; r < board.size; r++) if (board.grid[r][col] != null) { board.grid[r][col] = null; add(r, col); }
    if (cleared.length) scoreManager.addClearScore({ rows: [row], cols: [col], clearedCells: cleared, lineCount: 2 });
    return cleared;
  },
};

// ═════════════════════════════════════════════════════════════════════════
// Placement math (lib/logic/placement.dart, ported 1:1 — the centered-grab
// snap logic with the gentle ±1-cell assist)
// ═════════════════════════════════════════════════════════════════════════
function findClosestValidPlacement(board, piece, mx, my, gridX, gridY, gridW, gridH, cellSize) {
  const relX = mx - gridX, relY = my - gridY;
  if (!(-cellSize * 2 <= relX && relX <= gridW + cellSize * 2 &&
        -cellSize * 2 <= relY && relY <= gridH + cellSize * 2)) return null;

  const maxRow = board.size - piece.height, maxCol = board.size - piece.width;
  if (maxRow < 0 || maxCol < 0) return null;

  const idealRow = relY / cellSize - piece.height / 2.0;
  const idealCol = relX / cellSize - piece.width / 2.0;
  const baseRow = clamp(Math.round(idealRow), 0, maxRow);
  const baseCol = clamp(Math.round(idealCol), 0, maxCol);

  if (board.isValidPlacement(piece, baseRow, baseCol)) return [baseRow, baseCol];

  const assist = 1;
  let best = null, bestDist = Infinity;
  for (let dr = -assist; dr <= assist; dr++) {
    for (let dc = -assist; dc <= assist; dc++) {
      const r = baseRow + dr, c = baseCol + dc;
      if (r < 0 || r > maxRow || c < 0 || c > maxCol) continue;
      if (!board.isValidPlacement(piece, r, c)) continue;
      const ddr = r - idealRow, ddc = c - idealCol;
      const dist = ddr * ddr + ddc * ddc;
      if (dist < bestDist) { bestDist = dist; best = [r, c]; }
    }
  }
  return best;
}

// ═════════════════════════════════════════════════════════════════════════
// Sound — the real sampled wood-theme SFX (lib/logic/sound_manager.dart's
// 'wood' set: place, clear, victory), transcoded to tiny opus/ogg files
// (~2.7KB / ~7.7KB / ~14.7KB — ~25KB total). Fetch+decode kicks off in the
// background right after boot (doesn't block time-to-playable, the board is
// already interactive), and playback starts on the first user gesture once
// the AudioContext is resumed — matching Flutter's on-demand SoundManager,
// including the same combo pitch-ramp on consecutive line clears.
// ═════════════════════════════════════════════════════════════════════════
// Audio is embedded as base64 data URIs in js/audio.js (window.BB_AUDIO) and
// decoded straight from memory — no fetch, no network request — so sound works
// identically whether the game is served over HTTP or index.html is opened
// directly from disk (file://), where fetch() of local assets is blocked.
const SOUND_KEYS = ['place', 'clear', 'victory'];
const GAME_VERSION = '1.2.5';
const SAVE_VERSION = 2;

// Decode a "data:...;base64,XXXX" URI to an ArrayBuffer without fetch().
function dataUriToArrayBuffer(uri) {
  const base64 = uri.slice(uri.indexOf(',') + 1);
  const bin = atob(base64);
  const len = bin.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) bytes[i] = bin.charCodeAt(i);
  return bytes.buffer;
}
const VOICE_COUNT = 8;

class Sound {
  constructor() {
    const AC = window.AudioContext || window.webkitAudioContext;
    this.ctx = AC ? new AC() : null;
    this.buffers = {};
    this.voices = [];
    this.nextVoice = 0;
    this.enabled = Store.get('bb_sound_wood') !== 'off';
    this._load();
  }
  setEnabled(on) {
    this.enabled = !!on;
    Store.set('bb_sound_wood', on ? 'on' : 'off');
    try {
      if (this.ctx && this.enabled && this.ctx.state === 'suspended') this.ctx.resume();
      else if (this.ctx && !this.enabled && this.ctx.state === 'running') this.ctx.suspend();
    } catch (e) {}
  }
  async _load() {
    if (!this.ctx) return;
    const src = window.BB_AUDIO || {};
    for (const key of SOUND_KEYS) {
      const uri = src[key];
      if (!uri) continue;
      try {
        const arr = dataUriToArrayBuffer(uri);
        // decodeAudioData returns a promise in modern browsers; some older
        // Safari builds only support the callback form — support both.
        this.buffers[key] = await new Promise((resolve, reject) => {
          const p = this.ctx.decodeAudioData(arr, resolve, reject);
          if (p && typeof p.then === 'function') p.then(resolve, reject);
        });
      } catch (e) { /* best-effort, matches Flutter's silent-fail SoundManager */ }
    }
  }
  _ensure() {
    if (this.enabled && this.ctx && this.ctx.state === 'suspended') this.ctx.resume();
    return this.ctx;
  }
  _play(key, rate = 1.0) {
    if (!this.enabled) return;
    const ctx = this._ensure();
    const buffer = this.buffers[key];
    if (!ctx || !buffer) return;
    const src = ctx.createBufferSource();
    src.buffer = buffer;
    src.playbackRate.value = rate;
    src.connect(ctx.destination);
    src.start();
  }
  place() { this._play('place'); }
  clear(lineCount, combo = 1) {
    const steps = clamp(combo - 1, 0, 5);
    this._play('clear', 1.0 + steps * 0.06); // 1.00 → 1.30, same ladder as Flutter
  }
  victory() { this._play('victory'); }
}


// ═════════════════════════════════════════════════════════════════════════
// Layout — mirrors AppTheme.updateLayout: header → board → booster bar →
// tray, centered vertically, board sized to fit both width and leftover
// height, capped at a tablet design width.
// ═════════════════════════════════════════════════════════════════════════
class Layout {
  constructor() { this.recompute(window.innerWidth, window.innerHeight); }
  recompute(w, h) {
    this.windowWidth = w;
    this.windowHeight = h;
    const designWidth = Math.min(w, DESIGN_WIDTH_CAP);
    const tinyHeight = h < 480;
    const compactHeight = h < 620;
    this.sidePad = clamp((w - designWidth) / 2 + (w < 420 ? 8 : 12), 8, 100);

    const availH = h;
    this.outerPad = tinyHeight ? 4 : 6;
    // At medium-short desktop heights the board's 10px wooden frame plus its
    // drop shadow needs real visual clearance, not merely grid-to-grid space.
    this.vGap = tinyHeight ? 6 : (compactHeight ? 22 : clamp(availH * 0.025, 18, 24));
    this.headerBoardGap = tinyHeight ? 8 : (compactHeight ? 24 : clamp(availH * 0.035, 24, 32));
    this.headerH = tinyHeight ? 44 : (compactHeight ? 52 : clamp(availH * 0.09, 66, 88));
    this.boosterBarH = tinyHeight ? 36 : (compactHeight ? 42 : clamp(availH * 0.075, 48, 64));
    this.trayH = tinyHeight ? 58 : (compactHeight ? 72 : clamp(availH * 0.15, 100, 154));
    this.trayPad = tinyHeight ? 4 : (compactHeight ? 6 : 10);
    this.trayCardH = this.trayH - this.trayPad * 2;
    this.trayCardW = Math.floor((w - this.sidePad * 2 - this.trayPad * 2) / 3);

    // Include the board frame and shadow in the vertical fit calculation.
    this.boardVisualTop = 18;
    this.boardVisualBottom = 28;
    const reserved = this.headerH + this.boosterBarH + this.trayH + this.vGap * 2 +
      this.headerBoardGap + this.boardVisualTop + this.boardVisualBottom + this.outerPad * 2;
    const boardMaxH = availH - reserved;
    const boardMaxW = designWidth - 24;
    const fit = Math.min(boardMaxW, boardMaxH);
    this.cellSize = clamp(Math.floor(Math.max(64, fit) / GRID_SIZE), 8, 66);
    this.gridW = this.cellSize * GRID_SIZE;
    this.gridH = this.cellSize * GRID_SIZE;

    this.dragLiftOffset = this.cellSize * 0.9;

    const totalH = this.headerH + this.headerBoardGap + this.boardVisualTop + this.gridH +
      this.boardVisualBottom + this.vGap + this.boosterBarH + this.vGap + this.trayH;
    const startY = Math.max(this.outerPad, (availH - totalH) / 2);

    this.headerTop = startY;
    this.gridY = this.headerTop + this.headerH + this.headerBoardGap + this.boardVisualTop;
    this.gridX = (w - this.gridW) / 2;
    this.boardBottom = this.gridY + this.gridH + this.boardVisualBottom;
    this.boosterBarY = this.boardBottom + this.vGap;
    this.trayY = this.boosterBarY + this.boosterBarH + this.vGap;
  }
}

// ═════════════════════════════════════════════════════════════════════════
// Depth-block canvas renderer (lib/theme/depth.dart paintDepthBlock, ported)
// ═════════════════════════════════════════════════════════════════════════
function mix(a, b, t) { return Math.round(a + (b - a) * t); }
function lighten(rgb, amt) { return rgb.map(v => mix(v, 255, amt)); }
function darkenRgb(rgb, amt) { return rgb.map(v => mix(v, 0, amt)); }
function rgba(rgb, a) { return `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${a})`; }

function roundedRectPath(ctx, x, y, w, h, radius) {
  const r = Math.max(0, Math.min(radius, w / 2, h / 2));
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function fillRoundedRect(ctx, x, y, w, h, radius) {
  roundedRectPath(ctx, x, y, w, h, radius);
  ctx.fill();
}

function strokeRoundedRect(ctx, x, y, w, h, radius) {
  roundedRectPath(ctx, x, y, w, h, radius);
  ctx.stroke();
}

// Every block-shaped visual (real pieces, previews, clear flashes, shadows,
// and tutorial targets) uses this same corner geometry.
function pieceCellRadius(size) {
  return Math.max(2, size * 0.055);
}

function drawImageCover(ctx, img, x, y, w, h) {
  if (!img || !img.complete || !img.naturalWidth) return false;
  const sourceRatio = img.naturalWidth / img.naturalHeight;
  const targetRatio = w / h;
  let sx = 0, sy = 0, sw = img.naturalWidth, sh = img.naturalHeight;
  if (sourceRatio > targetRatio) {
    sw = img.naturalHeight * targetRatio;
    sx = (img.naturalWidth - sw) / 2;
  } else {
    sh = img.naturalWidth / targetRatio;
    sy = (img.naturalHeight - sh) / 2;
  }
  ctx.drawImage(img, sx, sy, sw, sh, x, y, w, h);
  return true;
}

function fillTexturedRoundedRect(ctx, img, x, y, w, h, radius, fallback, tint) {
  ctx.save();
  roundedRectPath(ctx, x, y, w, h, radius);
  ctx.clip();
  ctx.fillStyle = fallback;
  ctx.fillRect(x, y, w, h);
  drawImageCover(ctx, img, x, y, w, h);
  if (tint) {
    ctx.fillStyle = tint;
    ctx.fillRect(x, y, w, h);
  }
  ctx.restore();
}

function drawWoodTabletop(ctx, w, h) {
  if (drawImageCover(ctx, UI_ASSETS.wood, 0, 0, w, h)) {
    const glow = ctx.createRadialGradient(w * 0.5, h * 0.35, 0, w * 0.5, h * 0.4, Math.max(w, h) * 0.8);
    glow.addColorStop(0, 'rgba(255,244,220,0.10)');
    glow.addColorStop(1, 'rgba(126,76,30,0.08)');
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, w, h);
    return;
  }
  const base = ctx.createLinearGradient(0, 0, w, h);
  base.addColorStop(0, '#E8C99D');
  base.addColorStop(0.48, '#DDB681');
  base.addColorStop(1, '#CFA36C');
  ctx.fillStyle = base;
  ctx.fillRect(0, 0, w, h);

  // Subtle procedural grain: deterministic, asset-free, and cheap to render.
  ctx.save();
  ctx.globalAlpha = 0.12;
  for (let y = 18; y < h; y += 34) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    for (let x = 0; x <= w; x += 48) {
      const wave = Math.sin((x + y * 0.7) * 0.025) * 2.2;
      ctx.lineTo(x, y + wave);
    }
    ctx.strokeStyle = y % 68 === 18 ? '#8F6036' : '#FFF1D9';
    ctx.lineWidth = 1;
    ctx.stroke();
  }
  ctx.restore();
}

function drawDepthBlock(ctx, x, y, w, h, rgb, alpha = 1) {
  const lip = darkenRgb(rgb, 0.28);
  const lipH = h * 0.10;
  const radius = pieceCellRadius(Math.min(w, h));
  ctx.save();
  ctx.shadowColor = `rgba(61,43,26,${0.18 * alpha})`;
  ctx.shadowBlur = Math.max(1.5, h * 0.05);
  ctx.shadowOffsetY = Math.max(1, h * 0.035);
  ctx.fillStyle = rgba(lip, alpha);
  fillRoundedRect(ctx, x, y, w, h, radius);
  ctx.restore();

  const faceH = h - lipH;
  const faceTop = lighten(rgb, 0.12);
  const grad = ctx.createLinearGradient(x, y, x, y + faceH);
  grad.addColorStop(0, rgba(faceTop, alpha));
  grad.addColorStop(1, rgba(rgb, alpha));
  ctx.fillStyle = grad;
  ctx.save();
  roundedRectPath(ctx, x, y, w, faceH, radius);
  ctx.clip();
  ctx.fillRect(x, y, w, faceH);

  ctx.fillStyle = `rgba(255,255,255,${0.18 * alpha})`;
  ctx.fillRect(x, y, w, faceH * 0.30);
  ctx.fillStyle = `rgba(255,255,255,${0.22 * alpha})`;
  ctx.fillRect(x, y, w, 1.5);
  ctx.fillStyle = `rgba(0,0,0,${0.10 * alpha})`;
  ctx.fillRect(x, y + faceH - faceH * 0.06, w, faceH * 0.06);
  ctx.restore();

  ctx.strokeStyle = rgba(lip, alpha);
  ctx.lineWidth = 1.3;
  strokeRoundedRect(ctx, x + 0.65, y + 0.65, w - 1.3, faceH - 1.3, radius);
}

function drawWell(ctx, x, y, w, h, fill, line) {
  ctx.fillStyle = fill;
  fillRoundedRect(ctx, x, y, w, h, Math.max(2, Math.min(w, h) * 0.04));
  ctx.strokeStyle = line;
  ctx.lineWidth = 1;
  strokeRoundedRect(ctx, x + 0.5, y + 0.5, w - 1, h - 1, Math.max(2, Math.min(w, h) * 0.04));
}

function drawPieceCells(ctx, piece, x, y, cellSize, alpha = 1) {
  const gap = cellSize * 0.02;
  for (const [dr, dc] of piece.shape) {
    const rx = x + dc * cellSize, ry = y + dr * cellSize;
    drawDepthBlock(ctx, rx + gap / 2, ry + gap / 2, cellSize - gap, cellSize - gap, piece.color, alpha);
  }
}
function drawBombIcon(ctx, cx, cy, size, alpha = 1) {
  ctx.save();
  ctx.globalAlpha = alpha;
  const r = size * 0.25;
  const bx = cx - size * 0.03, by = cy + size * 0.06;
  ctx.shadowColor = 'rgba(61,43,26,0.28)';
  ctx.shadowBlur = size * 0.08;
  ctx.shadowOffsetY = size * 0.04;
  const body = ctx.createRadialGradient(bx - r * 0.35, by - r * 0.42, r * 0.08, bx, by, r);
  body.addColorStop(0, '#75695F');
  body.addColorStop(0.38, '#37312D');
  body.addColorStop(1, '#171413');
  ctx.fillStyle = body;
  ctx.beginPath();
  ctx.arc(bx, by, r, 0, Math.PI * 2);
  ctx.fill();
  ctx.shadowColor = 'transparent';
  ctx.strokeStyle = '#231B16';
  ctx.lineWidth = Math.max(1.2, size * 0.055);
  ctx.stroke();
  ctx.fillStyle = 'rgba(255,255,255,0.40)';
  ctx.beginPath();
  ctx.arc(bx - r * 0.34, by - r * 0.40, r * 0.18, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#5B3B22';
  ctx.lineWidth = Math.max(1.4, size * 0.06);
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(bx + r * 0.38, by - r * 0.78);
  ctx.quadraticCurveTo(cx + size * 0.20, cy - size * 0.32, cx + size * 0.28, cy - size * 0.26);
  ctx.stroke();
  ctx.fillStyle = '#F2B33D';
  ctx.beginPath();
  ctx.arc(cx + size * 0.29, cy - size * 0.27, size * 0.055, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function drawSwordIcon(ctx, cx, cy, size, alpha = 1) {
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.translate(cx, cy);
  const drawOne = (rotation) => {
    ctx.save();
    ctx.rotate(rotation);
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#3D2B1A';
    ctx.lineWidth = Math.max(2.4, size * 0.12);
    ctx.beginPath();
    ctx.moveTo(0, size * 0.25);
    ctx.lineTo(0, -size * 0.25);
    ctx.stroke();
    ctx.strokeStyle = '#F2E5C9';
    ctx.lineWidth = Math.max(1.2, size * 0.065);
    ctx.beginPath();
    ctx.moveTo(0, size * 0.17);
    ctx.lineTo(0, -size * 0.24);
    ctx.stroke();
    ctx.fillStyle = '#F2E5C9';
    ctx.beginPath();
    ctx.moveTo(0, -size * 0.34);
    ctx.lineTo(-size * 0.07, -size * 0.22);
    ctx.lineTo(size * 0.07, -size * 0.22);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = THEME.accentAlt;
    ctx.lineWidth = Math.max(1.8, size * 0.085);
    ctx.beginPath();
    ctx.moveTo(-size * 0.13, size * 0.13);
    ctx.lineTo(size * 0.13, size * 0.13);
    ctx.stroke();
    ctx.strokeStyle = '#6B4125';
    ctx.lineWidth = Math.max(2, size * 0.10);
    ctx.beginPath();
    ctx.moveTo(0, size * 0.14);
    ctx.lineTo(0, size * 0.30);
    ctx.stroke();
    ctx.fillStyle = '#D7A23C';
    ctx.beginPath();
    ctx.arc(0, size * 0.32, size * 0.055, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  };
  drawOne(-Math.PI / 4);
  drawOne(Math.PI / 4);
  ctx.restore();
}

function drawBoosterIcon(ctx, key, cx, cy, size, alpha = 1) {
  if (key === 'bomb') drawBombIcon(ctx, cx, cy, size, alpha);
  else drawSwordIcon(ctx, cx, cy, size, alpha);
}

function drawSoundIcon(ctx, cx, cy, size, enabled = true) {
  ctx.save();
  ctx.translate(cx, cy);
  ctx.strokeStyle = enabled ? THEME.accent : THEME.textMuted;
  ctx.fillStyle = enabled ? THEME.accent : THEME.textMuted;
  ctx.lineWidth = Math.max(1.5, size * 0.08);
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(-size * 0.30, -size * 0.12);
  ctx.lineTo(-size * 0.12, -size * 0.12);
  ctx.lineTo(size * 0.08, -size * 0.30);
  ctx.lineTo(size * 0.08, size * 0.30);
  ctx.lineTo(-size * 0.12, size * 0.12);
  ctx.lineTo(-size * 0.30, size * 0.12);
  ctx.closePath();
  ctx.fill();
  if (enabled) {
    ctx.beginPath();
    ctx.arc(size * 0.08, 0, size * 0.22, -Math.PI * 0.35, Math.PI * 0.35);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(size * 0.08, 0, size * 0.36, -Math.PI * 0.30, Math.PI * 0.30);
    ctx.stroke();
  } else {
    ctx.beginPath();
    ctx.moveTo(size * 0.20, -size * 0.20);
    ctx.lineTo(size * 0.46, size * 0.20);
    ctx.moveTo(size * 0.46, -size * 0.20);
    ctx.lineTo(size * 0.20, size * 0.20);
    ctx.stroke();
  }
  ctx.restore();
}

function drawGlobeIcon(ctx, cx, cy, size, color = THEME.accent) {
  ctx.save();
  ctx.translate(cx, cy);
  ctx.strokeStyle = color;
  ctx.lineWidth = Math.max(1.4, size * 0.07);
  ctx.beginPath();
  ctx.arc(0, 0, size * 0.34, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.ellipse(0, 0, size * 0.15, size * 0.34, 0, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(-size * 0.34, 0); ctx.lineTo(size * 0.34, 0);
  ctx.moveTo(-size * 0.29, -size * 0.17); ctx.lineTo(size * 0.29, -size * 0.17);
  ctx.moveTo(-size * 0.29, size * 0.17); ctx.lineTo(size * 0.29, size * 0.17);
  ctx.stroke();
  ctx.restore();
}

function drawHomeIcon(ctx, cx, cy, size) {
  ctx.save();
  ctx.translate(cx, cy);
  ctx.strokeStyle = THEME.accent;
  ctx.fillStyle = THEME.accent;
  ctx.lineWidth = Math.max(1.8, size * 0.09);
  ctx.lineJoin = 'round';
  ctx.beginPath();
  ctx.moveTo(-size * 0.36, -size * 0.02);
  ctx.lineTo(0, -size * 0.34);
  ctx.lineTo(size * 0.36, -size * 0.02);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(-size * 0.27, -size * 0.04);
  ctx.lineTo(-size * 0.27, size * 0.32);
  ctx.lineTo(size * 0.27, size * 0.32);
  ctx.lineTo(size * 0.27, -size * 0.04);
  ctx.closePath();
  ctx.stroke();
  ctx.fillRect(-size * 0.06, size * 0.10, size * 0.12, size * 0.22);
  ctx.restore();
}

function drawRetryIcon(ctx, cx, cy, size, color = THEME.textOnAccent) {
  ctx.save();
  ctx.translate(cx, cy);
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = Math.max(1.6, size * 0.10);
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.arc(0, 0, size * 0.30, -Math.PI * 0.78, Math.PI * 0.72);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(-size * 0.30, -size * 0.22);
  ctx.lineTo(-size * 0.38, -size * 0.02);
  ctx.lineTo(-size * 0.15, -size * 0.05);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

function drawPlayIcon(ctx, cx, cy, size, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(cx - size * 0.24, cy - size * 0.34);
  ctx.lineTo(cx + size * 0.34, cy);
  ctx.lineTo(cx - size * 0.24, cy + size * 0.34);
  ctx.closePath();
  ctx.fill();
}

function drawTutorialHand(ctx, x, y, width) {
  const img = UI_ASSETS.tutorialHand;
  if (!img || !img.complete || !img.naturalWidth) return;
  const scale = width / img.naturalWidth;
  const height = img.naturalHeight * scale;
  // Anchor the artwork's fingertip to the guided pointer position.
  const anchorX = 113 * scale;
  const anchorY = 55 * scale;
  ctx.save();
  ctx.shadowColor = 'rgba(54,34,20,0.34)';
  ctx.shadowBlur = Math.max(5, width * 0.08);
  ctx.shadowOffsetY = Math.max(3, width * 0.04);
  ctx.drawImage(img, x - anchorX, y - anchorY, width, height);
  ctx.restore();
}

// ═════════════════════════════════════════════════════════════════════════
// Main game
// ═════════════════════════════════════════════════════════════════════════
class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.layout = new Layout();
    this.sound = new Sound();

    this.board = new Board();
    this.generator = new PieceGenerator();
    this.scoreManager = new ScoreManager();
    this.pieces = [null, null, null];

    this.bestScore = parseInt(Store.get('bb_best_wood') || '0', 10);

    this.isGameOver = false;
    this.failureReason = '';
    this.screen = 'game';
    this.hasSavedRun = false;
    this.tutorialActive = false;
    this.tutorialStep = -1;
    this.tutorialStepAtMs = 0;
    this._menuRects = null;
    this.confirmation = null;
    this._confirmationRects = null;
    this._headerRects = null;
    this.languagePicker = false;
    this._languagePickerRects = null;
    this._lastDestructiveActionAt = 0;

    // Ad policy state (see constants above). Timestamps are Date.now() ms.
    this.lastInterstitialAt = Date.now(); // treat launch as t0 (no ad first 3 min)
    this.gamesSinceInterstitial = 0;
    this.continueUsedThisRun = false;

    // Boosters — earned 1 (random) per 1000 score. boostersAwarded tracks how
    // many 1000-point milestones have already paid out this run.
    this.inventory = Object.assign({}, START_BOOSTERS);
    this.boostersAwarded = 0;

    // Piece drag state
    this.draggingIndex = null;
    this.draggingPiece = null;
    this.pointer = null; // lifted pointer {x,y}
    this.potentialPos = null; // [row,col]
    this.dragValid = false;
    this.activePointerId = null;

    // Booster drag state (boosters are dragged onto the board like pieces)
    this.draggingBoosterKey = null;
    this.boosterPointer = null; // lifted pointer {x,y}
    this.boosterTargetCell = null; // [row,col] under the drag, or null

    // Animations
    this.justPlacedCells = [];
    this.justPlacedAtMs = 0;
    this.justClearedCells = [];
    this.justClearedAtMs = 0;
    this.comboFlashText = null;
    this.comboFlashAtMs = 0;
    this.awardFlashText = null;
    this.awardFlashAtMs = 0;
    this.adRequest = null;
    this.noticeText = null;
    this.noticeUntil = 0;

    // True while a full-screen ad is on screen (set via Platform pause hooks).
    this._paused = false;

    this._tick = 0;
    this._lastFrameAt = 0;
    this._boundLoop = this._loop.bind(this);
    this._dpr = 1;

    this._bindEvents();
    this._resize();

    // One startup decision: restore a playable run, otherwise begin now.
    if (!this._loadSavedRun()) {
      Store.remove('bb_active_run');
      this.newRun({ allowTutorial: Store.get('bb_tutorial_seen') !== '1' });
    }

    requestAnimationFrame(this._boundLoop);
  }

  // Pause/resume around a full-screen ad (driven by Platform.pauseHooks).
  pause() {
    this._saveRun();
    this._paused = true;
    try { if (this.sound.ctx && this.sound.ctx.state === 'running') this.sound.ctx.suspend(); } catch (e) {}
  }
  resume() {
    this._paused = false;
    try { if (this.sound.enabled && !document.hidden && this.sound.ctx && this.sound.ctx.state === 'suspended') this.sound.ctx.resume(); } catch (e) {}
  }

  // ── Run lifecycle ────────────────────────────────────────────────────
  _normalizeSavedRun(data) {
    if (!data || (data.version !== 1 && data.version !== SAVE_VERSION)) return null;
    if (!Array.isArray(data.grid) || data.grid.length !== GRID_SIZE) return null;
    const normalizeColor = (value) => {
      if (!Array.isArray(value) || value.length < 3) return null;
      const color = value.slice(0, 3).map(Number);
      return color.every(Number.isFinite) ? color.map(v => clamp(Math.round(v), 0, 255)) : null;
    };
    const grid = [];
    for (const sourceRow of data.grid) {
      if (!Array.isArray(sourceRow) || sourceRow.length !== GRID_SIZE) return null;
      const row = [];
      for (const cell of sourceRow) {
        if (cell == null) row.push(null);
        else {
          const color = normalizeColor(cell);
          if (!color) return null;
          row.push(color);
        }
      }
      grid.push(row);
    }
    if (!Array.isArray(data.pieces) || data.pieces.length !== 3) return null;
    const pieces = [];
    for (const savedPiece of data.pieces) {
      if (savedPiece == null) { pieces.push(null); continue; }
      if (!Array.isArray(savedPiece.shape) || !savedPiece.shape.length || savedPiece.shape.length > 25) return null;
      const shape = [];
      for (const cell of savedPiece.shape) {
        if (!Array.isArray(cell) || cell.length !== 2 || !cell.every(Number.isInteger)) return null;
        if (cell[0] < 0 || cell[1] < 0 || cell[0] >= GRID_SIZE || cell[1] >= GRID_SIZE) return null;
        shape.push([cell[0], cell[1]]);
      }
      const color = normalizeColor(savedPiece.color);
      if (!color) return null;
      pieces.push(new Piece(shape, color));
    }

    const tutorialActive = !!data.tutorialActive;
    const tutorialStep = Number.isInteger(data.tutorialStep) ? data.tutorialStep : -1;
    if (tutorialActive && (tutorialStep < 0 || tutorialStep > 5)) return null;
    const activePieces = pieces.filter(Boolean);
    if (!tutorialActive && !activePieces.length) return null;
    const testBoard = new Board();
    testBoard.grid = grid.map(row => row.slice());
    if (!tutorialActive && testBoard.isGameOverForPieces(activePieces)) return null;

    const score = Number(data.score);
    const combo = Number(data.combo);
    if (!Number.isFinite(score) || score < 0 || !Number.isFinite(combo) || combo < 0) return null;
    return {
      grid,
      pieces,
      score: Math.floor(score),
      combo: Math.floor(combo),
      bestScore: Math.max(0, Math.floor(Number(data.bestScore) || 0)),
      inventory: {
        bomb: Math.max(0, Math.floor(Number(data.inventory && data.inventory.bomb) || 0)),
        sword: Math.max(0, Math.floor(Number(data.inventory && data.inventory.sword) || 0)),
      },
      boostersAwarded: Math.max(0, Math.floor(Number(data.boostersAwarded) || 0)),
      continueUsedThisRun: !!data.continueUsedThisRun,
      tutorialActive,
      tutorialStep,
    };
  }

  _readSavedRun() {
    try {
      return this._normalizeSavedRun(JSON.parse(Store.get('bb_active_run') || 'null'));
    } catch (e) { return null; }
  }

  _hasValidSavedRun() {
    return !!this._readSavedRun();
  }

  _saveRun() {
    if (this.screen !== 'game' || this.isGameOver) return false;
    try {
      Store.set('bb_active_run', JSON.stringify({
        version: SAVE_VERSION,
        grid: this.board.grid,
        pieces: this.pieces.map(p => p ? { shape: p.shape, color: p.color } : null),
        score: this.scoreManager.score,
        combo: this.scoreManager.combo,
        bestScore: this.bestScore,
        inventory: this.inventory,
        boostersAwarded: this.boostersAwarded,
        continueUsedThisRun: this.continueUsedThisRun,
        tutorialActive: this.tutorialActive,
        tutorialStep: this.tutorialStep,
        savedAt: Date.now(),
      }));
      this.hasSavedRun = true;
      return true;
    } catch (e) { return false; }
  }

  _loadSavedRun() {
    const data = this._readSavedRun();
    if (!data) return false;
    this.board.grid = data.grid.map(row => row.slice());
    this.pieces = data.pieces;
    this.scoreManager.score = data.score;
    this.scoreManager.combo = data.combo;
    this.bestScore = Math.max(this.bestScore, data.bestScore);
    Store.set('bb_best_wood', String(this.bestScore));
    this.inventory = data.inventory;
    this.boostersAwarded = data.boostersAwarded;
    this.continueUsedThisRun = data.continueUsedThisRun;
    this.isGameOver = false;
    this.tutorialActive = data.tutorialActive;
    this.tutorialStep = data.tutorialStep;
    this.tutorialStepAtMs = performance.now();
    this.screen = 'game';
    this.hasSavedRun = true;
    Platform.gameplayStart();
    this._saveRun();
    return true;
  }

  startNewFromMenu() {
    if (this.hasSavedRun && this._hasValidSavedRun()) {
      this._showConfirmation('newGame');
      return;
    }
    this._startFreshRun();
  }

  continueFromMenu() {
    if (!this._loadSavedRun()) {
      Store.remove('bb_active_run');
      this.hasSavedRun = false;
      this._startFreshRun();
      return;
    }
    this.confirmation = null;
    try { if (this.sound.enabled && this.sound.ctx && this.sound.ctx.state === 'suspended') this.sound.ctx.resume(); } catch (e) {}
  }

  _startFreshRun() {
    Store.remove('bb_active_run');
    this.hasSavedRun = false;
    this.confirmation = null;
    this.newRun({ allowTutorial: Store.get('bb_tutorial_seen') !== '1' });
  }

  _hasMeaningfulProgress() {
    return this.scoreManager.score > 0 || this.board.grid.some(row => row.some(cell => cell != null));
  }

  _cancelActiveInput() {
    this.draggingIndex = null;
    this.draggingPiece = null;
    this.pointer = null;
    this.potentialPos = null;
    this.draggingBoosterKey = null;
    this.boosterPointer = null;
    this.boosterTargetCell = null;
    this.activePointerId = null;
  }

  openMainMenu() {
    if (this.isGameOver) {
      Store.remove('bb_active_run');
      this.hasSavedRun = false;
    } else {
      this._saveRun();
      this.hasSavedRun = this._hasValidSavedRun();
    }
    this._cancelActiveInput();
    this.confirmation = null;
    this.screen = 'menu';
    Platform.gameplayStop();
    try { if (this.sound.ctx && this.sound.ctx.state === 'running') this.sound.ctx.suspend(); } catch (e) {}
  }

  restartFromHeader() {
    if (this._hasMeaningfulProgress()) this._showConfirmation('restart');
    else this._runDestructiveAction('restart');
  }

  _showConfirmation(action) {
    this.confirmation = action;
    this._cancelActiveInput();
  }

  _runDestructiveAction(action) {
    const now = Date.now();
    if (now - this._lastDestructiveActionAt < 400) return;
    this._lastDestructiveActionAt = now;
    this.confirmation = null;
    if (action === 'newGame' || action === 'restart') this._startFreshRun();
  }

  newRun(options = {}) {
    this.board.reset();
    this.scoreManager.reset();
    this.inventory = Object.assign({}, START_BOOSTERS);
    this.boostersAwarded = 0;
    this.draggingBoosterKey = null;
    this.boosterPointer = null;
    this.boosterTargetCell = null;
    this.isGameOver = false;
    this.failureReason = '';
    this.continueUsedThisRun = false;
    this.awardFlashText = null;
    this.comboFlashText = null;
    this.justPlacedCells = [];
    this.justClearedCells = [];
    this.confirmation = null;
    this.pieces = this.generator.generatePieces(this.board, 1.0);
    this.screen = 'game';
    this.tutorialActive = false;
    Platform.gameplayStart();
    if (options.allowTutorial) this._beginTutorial();
    this._saveRun();
  }

  _beginTutorial() {
    this.tutorialActive = true;
    this.tutorialStep = 0;
    this.tutorialStepAtMs = performance.now();
    this.board.reset();
    this.scoreManager.reset();
    this.pieces = [
      new Piece([[0,0],[0,1],[0,2]], PIECE_COLORS[2]),
      new Piece([[0,0],[0,1],[0,2]], PIECE_COLORS[5]),
      new Piece([[0,0],[0,1]], PIECE_COLORS[8]),
    ];
    this.inventory = { bomb: 1, sword: 1 };
  }

  _startTutorialBombStep() {
    this.board.reset();
    for (let r = 2; r <= 4; r++) for (let c = 2; c <= 4; c++) this.board.grid[r][c] = PIECE_COLORS[(r + c) % PIECE_COLORS.length];
    this.pieces = [null, null, null];
    this.tutorialStep = 3;
    this.tutorialStepAtMs = performance.now();
    this._saveRun();
  }

  _startTutorialSwordStep() {
    this.board.reset();
    for (let c = 1; c < GRID_SIZE - 1; c++) this.board.grid[4][c] = PIECE_COLORS[(c + 3) % PIECE_COLORS.length];
    for (let r = 1; r < GRID_SIZE - 1; r++) this.board.grid[r][4] = PIECE_COLORS[(r + 6) % PIECE_COLORS.length];
    this.tutorialStep = 4;
    this.tutorialStepAtMs = performance.now();
    this._saveRun();
  }

  _finishTutorial() {
    Store.set('bb_tutorial_seen', '1');
    this.tutorialActive = false;
    this.tutorialStep = -1;
    this.newRun();
  }

  // Called from the game-over screen's "Play Again". Shows a gated interstitial
  // on the transition, then starts a fresh run. (Ad policy lives here, not in
  // the adapter — the adapter only shows the ad when we ask.)
  playAgainFromGameOver() {
    const now = Date.now();
    if (Platform.isAdAvailable('interstitial') &&
        (now - this.lastInterstitialAt) >= INTERSTITIAL_MIN_INTERVAL_MS &&
        this.gamesSinceInterstitial >= 1) {
      this.lastInterstitialAt = now;
      this.gamesSinceInterstitial = 0;
      Platform.showInterstitial();
    }
    this.newRun();
  }

  // "Continue after game over" rewarded placement — once per run. Watches a
  // rewarded ad; on reward, clears the bottom rows (keeping score) and resumes.
  continueAfterGameOver() {
    if (this.continueUsedThisRun) return;
    this._requestRewarded('continue', null, () => {
      this.continueUsedThisRun = true;
      // Clear the bottom half of the board to reopen space (score is kept).
      for (let r = Math.floor(this.board.size / 2); r < this.board.size; r++) {
        for (let c = 0; c < this.board.size; c++) this.board.grid[r][c] = null;
      }
      this.isGameOver = false;
      // Guarantee a playable tray again.
      const remaining = this.pieces.filter(p => p);
      if (!remaining.length || this.board.isGameOverForPieces(remaining)) {
        this.pieces = this.generator.generatePieces(this.board, 1.0);
      }
      Platform.gameplayStart();
      this._saveRun();
    });
  }

  // Booster recharge rewarded placement — tapping an empty booster watches an
  // ad to refill it (instant on the generic/no-ad build so boosters still work).
  rechargeBooster(key) {
    this._requestRewarded('booster', key, () => {
      this.inventory[key] = (this.inventory[key] || 0) + BOOSTER_RECHARGE_AMOUNT;
      this.awardFlashText = t('boosterAward', {
        icon: key === 'bomb' ? '💣' : '⚔️',
        name: t(key),
      });
      this.awardFlashAtMs = performance.now();
      this._saveRun();
    });
  }

  _requestRewarded(kind, key, onReward) {
    if (this.adRequest) return;
    this.adRequest = { kind, key, startedAt: performance.now() };
    const finish = () => { this.adRequest = null; };
    Platform.showRewarded(
      () => { finish(); onReward(); },
      () => {
        const showUnavailable = () => {
          finish();
          this.noticeText = t('adUnavailable');
          this.noticeUntil = performance.now() + 2400;
        };
        const remainingLoadingMs = Math.max(0, 350 - (performance.now() - this.adRequest.startedAt));
        if (remainingLoadingMs) setTimeout(showUnavailable, remainingLoadingMs);
        else showUnavailable();
      }
    );
  }

  // Award 1 random booster (bomb or sword) for every 1000 points reached.
  _awardScoreBoosters() {
    const milestone = Math.floor(this.scoreManager.score / 1000);
    while (this.boostersAwarded < milestone) {
      this.boostersAwarded += 1;
      const key = Math.random() < 0.5 ? 'bomb' : 'sword';
      this.inventory[key] = (this.inventory[key] || 0) + 1;
      this.awardFlashText = t('boosterAward', {
        icon: key === 'bomb' ? '💣' : '⚔️',
        name: t(key),
      });
      this.awardFlashAtMs = performance.now();
    }
  }

  checkGameOver() {
    const remaining = this.pieces.filter(p => p);
    if (remaining.length && this.board.isGameOverForPieces(remaining)) {
      this.isGameOver = true;
      this.gamesSinceInterstitial += 1; // counts toward the interstitial gate
      this.failureReason = t('gameOverSubtitle');
      if (this.scoreManager.score > this.bestScore) {
        this.bestScore = this.scoreManager.score;
        Store.set('bb_best_wood', String(this.bestScore));
        this.sound.victory();
      }
      Store.remove('bb_active_run');
      this.hasSavedRun = false;
      Platform.gameplayStop();
    }
  }

  // ── Resize ───────────────────────────────────────────────────────────
  _resize() {
    const w = window.innerWidth, h = window.innerHeight;
    this.layout.recompute(w, h);
    const deviceDpr = Math.max(1, window.devicePixelRatio || 1);
    const cssPixels = w * h;
    // Large canvas backing stores become expensive very quickly (DPR is
    // squared). Full HD needs fewer subpixels than small mobile screens.
    const dprCap = cssPixels >= 1800000 ? 1.25 : (cssPixels >= 900000 ? 1.5 : 2);
    this._dpr = Math.min(deviceDpr, dprCap);
    this.canvas.width = Math.round(w * this._dpr);
    this.canvas.height = Math.round(h * this._dpr);
    this.canvas.style.width = w + 'px';
    this.canvas.style.height = h + 'px';
    this.ctx.setTransform(this._dpr, 0, 0, this._dpr, 0, 0);
  }

  // ── Input ────────────────────────────────────────────────────────────
  _bindEvents() {
    window.addEventListener('resize', () => this._resize());
    const c = this.canvas;
    c.addEventListener('pointerdown', e => this._onPointerDown(e));
    c.addEventListener('pointermove', e => this._onPointerMove(e));
    window.addEventListener('pointerup', e => this._onPointerUp(e));
    window.addEventListener('pointercancel', e => this._onPointerUp(e));
    window.addEventListener('beforeunload', () => this._saveRun());
    window.addEventListener('pagehide', () => { this._saveRun(); Platform.gameplayStop(); });
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this._saveRun();
        Platform.gameplayStop();
        try { if (this.sound.ctx && this.sound.ctx.state === 'running') this.sound.ctx.suspend(); } catch (e) {}
      } else if (this.screen === 'game' && !this.isGameOver) {
        Platform.gameplayStart();
        try { if (this.sound.enabled && this.sound.ctx && this.sound.ctx.state === 'suspended') this.sound.ctx.resume(); } catch (e) {}
      }
    });
    c.addEventListener('contextmenu', e => e.preventDefault());
  }

  _canvasPos(e) {
    const rect = this.canvas.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }

  _trayScaledCell() {
    const L = this.layout;
    const slotW = L.trayCardW, slotH = L.trayCardH;
    const totalW = slotW * 3 + L.trayPad * 2;
    this._trayLeftPad = (this.layout.windowWidth - totalW) / 2;
    const maxExtent = 5;
    const slotMin = Math.min(slotW, slotH);
    return slotMin * 0.9 / maxExtent;
  }

  _traySlotAt(x, y) {
    const L = this.layout;
    const slotW = L.trayCardW, slotH = L.trayCardH;
    const totalW = slotW * 3 + L.trayPad * 2;
    const leftPad = (L.windowWidth - totalW) / 2;
    for (let i = 0; i < 3; i++) {
      const sx = leftPad + i * (slotW + L.trayPad);
      const sy = L.trayY + L.trayPad;
      const ex0 = sx - 10, ey0 = sy - 10, ex1 = sx + slotW + 10, ey1 = sy + slotH + 10;
      if (x >= ex0 && x <= ex1 && y >= ey0 && y <= ey1) return i;
    }
    return null;
  }

  _boosterIconRects() {
    const L = this.layout;
    const keys = Object.keys(this.inventory);
    const iconSize = Math.min(L.boosterBarH * 0.72, 44);
    const gap = 14;
    const totalW = keys.length * iconSize + (keys.length - 1) * gap;
    let x = (L.windowWidth - totalW) / 2;
    const y = L.boosterBarY + (L.boosterBarH - iconSize) / 2;
    const rects = {};
    for (const k of keys) {
      rects[k] = { x, y, w: iconSize, h: iconSize };
      x += iconSize + gap;
    }
    return rects;
  }

  _onPointerDown(e) {
    if (this._paused) return; // an ad is on screen
    this.sound._ensure();
    const pos = this._canvasPos(e);

    if (this.languagePicker) {
      this._handleLanguagePickerTap(pos);
      return;
    }

    if (this.confirmation) {
      this._handleConfirmationTap(pos);
      return;
    }

    if (this.screen === 'menu') {
      this._handleMainMenuTap(pos);
      return;
    }

    // Game-over overlay buttons (Continue / Play Again).
    if (this.isGameOver) {
      this._handleGameOverTap(pos);
      return;
    }

    if (this._handleHeaderTap(pos)) return;
    if (this.tutorialActive && this.tutorialStep === 5) return;

    // Booster icon: drag it if you have one, else tap to watch a rewarded ad
    // to recharge it (instant on the no-ad build).
    const rects = this._boosterIconRects();
    for (const key of Object.keys(rects)) {
      const r = rects[key];
      if (pos.x >= r.x && pos.x <= r.x + r.w && pos.y >= r.y && pos.y <= r.y + r.h) {
        if (this.tutorialActive) {
          const required = this.tutorialStep === 3 ? 'bomb' : (this.tutorialStep === 4 ? 'sword' : null);
          if (key !== required) return;
        }
        if (this.inventory[key] > 0) {
          this.activePointerId = e.pointerId;
          this.draggingBoosterKey = key;
          this.canvas.setPointerCapture(e.pointerId);
          this._updateBoosterDrag(pos);
        } else {
          this.rechargeBooster(key);
        }
        return;
      }
    }

    if (this.tutorialActive && this.tutorialStep > 2) return;

    const idx = this._traySlotAt(pos.x, pos.y);
    if (idx != null && this.pieces[idx]) {
      if (this.tutorialActive && idx !== this.tutorialStep) return;
      this.activePointerId = e.pointerId;
      this.draggingIndex = idx;
      this.draggingPiece = this.pieces[idx];
      this.canvas.setPointerCapture(e.pointerId);
      this._updateDrag(pos);
    }
  }

  _onPointerMove(e) {
    if (e.pointerId !== this.activePointerId) return;
    if (this.draggingBoosterKey) { this._updateBoosterDrag(this._canvasPos(e)); return; }
    if (this.draggingIndex == null) return;
    this._updateDrag(this._canvasPos(e));
  }

  _updateBoosterDrag(pos) {
    const L = this.layout;
    // Lift above the finger so the target cell + chip aren't hidden.
    this.boosterPointer = { x: pos.x, y: pos.y - L.dragLiftOffset };
    const lx = this.boosterPointer.x - L.gridX, ly = this.boosterPointer.y - L.gridY;
    if (lx >= 0 && ly >= 0 && lx < L.gridW && ly < L.gridH) {
      this.boosterTargetCell = [Math.floor(ly / L.cellSize), Math.floor(lx / L.cellSize)];
    } else {
      this.boosterTargetCell = null;
    }
  }

  boosterWouldHaveEffect(key, row, col) {
    const b = this.board;
    if (key === 'bomb') {
      for (let r = row - 1; r <= row + 1; r++)
        for (let c = col - 1; c <= col + 1; c++)
          if (r >= 0 && r < b.size && c >= 0 && c < b.size && b.grid[r][c] != null) return true;
      return false;
    }
    if (key === 'sword') {
      for (let c = 0; c < b.size; c++) if (b.grid[row][c] != null) return true;
      for (let r = 0; r < b.size; r++) if (b.grid[r][col] != null) return true;
      return false;
    }
    return false;
  }

  _updateDrag(pos) {
    const L = this.layout;
    this.pointer = { x: pos.x, y: pos.y - L.dragLiftOffset };
    const piece = this.draggingPiece;
    const result = findClosestValidPlacement(
      this.board, piece, this.pointer.x, this.pointer.y, L.gridX, L.gridY, L.gridW, L.gridH, L.cellSize
    );
    if (result) {
      this.potentialPos = result;
      this.dragValid = this.board.isValidPlacement(piece, result[0], result[1]);
    } else {
      this.potentialPos = null;
      this.dragValid = false;
    }
  }

  _onPointerUp(e) {
    if (e.pointerId !== this.activePointerId) return;

    if (this.draggingBoosterKey) {
      const key = this.draggingBoosterKey, cell = this.boosterTargetCell;
      if (cell) this._applyBooster(key, cell[0], cell[1]);
      this.draggingBoosterKey = null;
      this.boosterPointer = null;
      this.boosterTargetCell = null;
      this.activePointerId = null;
      return;
    }

    if (this.draggingIndex == null) return;
    this._tryPlacePiece();
    this.draggingIndex = null;
    this.draggingPiece = null;
    this.pointer = null;
    this.potentialPos = null;
    this.activePointerId = null;
  }

  _tryPlacePiece() {
    const idx = this.draggingIndex;
    const piece = this.draggingPiece;
    if (this.tutorialActive && this.tutorialStep >= 0 && this.tutorialStep <= 2) {
      const targetCols = [0, 3, 6];
      if (idx !== this.tutorialStep || !this.potentialPos ||
          this.potentialPos[0] !== GRID_SIZE - 1 || this.potentialPos[1] !== targetCols[this.tutorialStep]) return;
    }
    if (piece && this.potentialPos && this.dragValid) {
      const [row, col] = this.potentialPos;
      const cells = this.board.place(piece, row, col);
      this.scoreManager.addPlacementScore(cells);
      this.sound.place();

      this.justPlacedCells = piece.shape.map(([dr, dc]) => [row + dr, col + dc]);
      this.justPlacedAtMs = performance.now();

      const clearResult = this.board.clearLines();
      if (clearResult.lineCount > 0) {
        this.scoreManager.addClearScore(clearResult);
        this.justClearedCells = clearResult.clearedCells;
        this.justClearedAtMs = performance.now();
        this.sound.clear(clearResult.lineCount, this.scoreManager.combo);
        if (this.scoreManager.combo > 1) {
          this.comboFlashText = t('combo', { n: this.scoreManager.combo });
          this.comboFlashAtMs = performance.now();
        }
      }

      this._awardScoreBoosters();

      this.pieces[idx] = null;
      if (this.pieces.every(p => p == null) && !this.tutorialActive) {
        this.pieces = this.generator.generatePieces(this.board, 1.0);
      }
      this.checkGameOver();
      if (this.tutorialActive && this.tutorialStep >= 0 && this.tutorialStep <= 2) {
        if (this.tutorialStep < 2) {
          this.tutorialStep += 1;
          this.tutorialStepAtMs = performance.now();
          this._saveRun();
        } else {
          this._startTutorialBombStep();
        }
      } else this._saveRun();
    }
  }

  _applyBooster(key, row, col) {
    if (!(this.inventory[key] > 0)) return;
    if (this.tutorialActive) {
      if (this.tutorialStep === 3 && (key !== 'bomb' || row !== 3 || col !== 3)) return;
      if (this.tutorialStep === 4 && (key !== 'sword' || row !== 4 || col !== 4)) return;
    }
    let cleared = [];
    if (key === 'bomb') cleared = BombBooster.apply(this.board, this.scoreManager, row, col);
    else if (key === 'sword') cleared = SwordBooster.apply(this.board, this.scoreManager, row, col);
    if (cleared.length) {
      this.inventory[key] -= 1;
      this.justClearedCells = cleared;
      this.justClearedAtMs = performance.now();
      this.sound.clear(2, 1);
      this._awardScoreBoosters();
      this.checkGameOver();
      if (this.tutorialActive && this.tutorialStep === 3) this._startTutorialSwordStep();
      else if (this.tutorialActive && this.tutorialStep === 4) {
        this.tutorialStep = 5;
        this.tutorialStepAtMs = performance.now();
        this._saveRun();
      } else this._saveRun();
    }
  }

  // ── Loop ─────────────────────────────────────────────────────────────
  _loop(ts) {
    // Do not redraw at 120/144 Hz. Gameplay and animation timing remain based
    // on real timestamps while rendering is capped near 60 FPS.
    if (!this._lastFrameAt || ts - this._lastFrameAt >= 16) {
      this._lastFrameAt = ts;
      this._tick = ts;
      this._render();
    }
    requestAnimationFrame(this._boundLoop);
  }

  _render() {
    const ctx = this.ctx, L = this.layout;
    ctx.clearRect(0, 0, L.windowWidth, L.windowHeight);
    if (this.screen === 'menu') {
      this._renderMainMenu();
      if (this.confirmation) this._renderConfirmation();
      if (this.languagePicker) this._renderLanguagePicker();
      return;
    }
    // The static wood surface is rendered by CSS underneath the transparent
    // canvas, avoiding a full-screen image redraw on every animation frame.

    this._renderHeader();
    this._renderBoard();
    this._renderBoosterBar();
    this._renderTray();
    if (this.draggingPiece && this.pointer) this._renderDraggedPiece();
    if (this.draggingBoosterKey && this.boosterPointer) this._renderDraggedBooster();
    if (this.comboFlashText) this._renderComboFlash();
    if (this.awardFlashText) this._renderAwardFlash();
    if (this.tutorialActive) this._renderTutorialGuide();
    if (this.isGameOver) this._renderGameOver();
    if (this.noticeText) this._renderNotice();
    if (this.confirmation) this._renderConfirmation();
  }

  _renderMainMenu() {
    const ctx = this.ctx, L = this.layout;
    const menuImage = L.windowWidth / L.windowHeight < 0.86 ? UI_ASSETS.menuPortrait : UI_ASSETS.menu;
    if (!drawImageCover(ctx, menuImage, 0, 0, L.windowWidth, L.windowHeight)) {
      drawWoodTabletop(ctx, L.windowWidth, L.windowHeight);
    }
    const shade = ctx.createLinearGradient(0, 0, 0, L.windowHeight);
    shade.addColorStop(0, 'rgba(255,248,230,0.04)');
    shade.addColorStop(0.52, 'rgba(255,245,222,0.10)');
    shade.addColorStop(1, 'rgba(74,40,17,0.10)');
    ctx.fillStyle = shade;
    ctx.fillRect(0, 0, L.windowWidth, L.windowHeight);

    const centerX = L.windowWidth / 2;
    const logoY = clamp(L.windowHeight * 0.27, 155, 285);
    const logoSize = clamp(Math.min(L.windowWidth * 0.105, L.windowHeight * 0.065), 34, 58);
    ctx.save();
    ctx.shadowColor = 'rgba(58,33,15,0.26)';
    ctx.shadowBlur = 12;
    ctx.shadowOffsetY = 5;
    ctx.textAlign = 'center';
    ctx.fillStyle = '#3D2B1A';
    ctx.font = `900 ${Math.round(logoSize)}px -apple-system, "Segoe UI", sans-serif`;
    ctx.fillText('BLOCK', centerX, logoY);
    ctx.fillStyle = '#8B5E34';
    ctx.fillText('BLOOM', centerX, logoY + logoSize * 0.92);
    ctx.restore();

    // Small block arrangement under the logo, reinforcing the game identity.
    const mini = Math.max(9, logoSize * 0.22), miniY = logoY + logoSize * 1.22;
    drawDepthBlock(ctx, centerX - mini * 2.2, miniY, mini, mini, PIECE_COLORS[4]);
    drawDepthBlock(ctx, centerX - mini * 2.2, miniY + mini, mini, mini, PIECE_COLORS[4]);
    drawDepthBlock(ctx, centerX - mini * 1.2, miniY + mini, mini, mini, PIECE_COLORS[4]);
    drawDepthBlock(ctx, centerX - mini * 0.1, miniY, mini, mini, PIECE_COLORS[1]);
    drawDepthBlock(ctx, centerX + mini * 0.9, miniY, mini, mini, PIECE_COLORS[1]);
    drawDepthBlock(ctx, centerX - mini * 0.1, miniY + mini, mini, mini, PIECE_COLORS[1]);
    drawDepthBlock(ctx, centerX + mini * 0.9, miniY + mini, mini, mini, PIECE_COLORS[1]);

    const bw = Math.min(L.windowWidth - 64, 330), bh = 58;
    const firstY = clamp(L.windowHeight * 0.58, logoY + logoSize * 1.8, L.windowHeight - (this.hasSavedRun ? 164 : 92));
    const drawMenuButton = (rect, label, primary) => {
      ctx.save();
      ctx.shadowColor = 'rgba(61,43,26,0.34)';
      ctx.shadowBlur = 12;
      ctx.shadowOffsetY = 6;
      if (primary) {
        const grad = ctx.createLinearGradient(rect.x, rect.y, rect.x, rect.y + rect.h);
        grad.addColorStop(0, '#A87849');
        grad.addColorStop(1, '#754724');
        ctx.fillStyle = grad;
        fillRoundedRect(ctx, rect.x, rect.y, rect.w, rect.h, 12);
      } else {
        fillTexturedRoundedRect(ctx, UI_ASSETS.cream, rect.x, rect.y, rect.w, rect.h, 12, '#FFF7EA', 'rgba(255,249,239,0.16)');
      }
      ctx.restore();
      ctx.strokeStyle = primary ? '#5E371D' : THEME.borderOuter;
      ctx.lineWidth = 1.5;
      strokeRoundedRect(ctx, rect.x + 0.75, rect.y + 0.75, rect.w - 1.5, rect.h - 1.5, 11.5);
      const color = primary ? THEME.textOnAccent : THEME.textPrimary;
      drawPlayIcon(ctx, rect.x + 34, rect.y + rect.h / 2, 24, color);
      ctx.fillStyle = color;
      ctx.font = 'bold 17px -apple-system, "Segoe UI", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(label, rect.x + rect.w / 2 + 10, rect.y + rect.h / 2 + 1);
      ctx.textBaseline = 'alphabetic';
      ctx.textAlign = 'left';
    };

    let continueRect = null;
    let newRect;
    if (this.hasSavedRun) {
      continueRect = { x: centerX - bw / 2, y: firstY, w: bw, h: bh };
      newRect = { x: centerX - bw / 2, y: firstY + bh + 16, w: bw, h: bh };
      drawMenuButton(continueRect, t('continueRun'), true);
      drawMenuButton(newRect, t('newGame'), false);
    } else {
      newRect = { x: centerX - bw / 2, y: firstY, w: bw, h: bh };
      drawMenuButton(newRect, t('newGame'), true);
    }
    // Globe button — opens the manual language picker. Top-right corner,
    // clear of the logo/menu buttons at every aspect ratio.
    const langSize = 40;
    const langRect = { x: L.windowWidth - langSize - 14, y: 14, w: langSize, h: langSize };
    ctx.save();
    ctx.shadowColor = 'rgba(61,43,26,0.30)';
    ctx.shadowBlur = 8;
    ctx.shadowOffsetY = 3;
    fillTexturedRoundedRect(ctx, UI_ASSETS.cream, langRect.x, langRect.y, langRect.w, langRect.h, 10, '#FFF7EA', 'rgba(255,249,239,0.20)');
    ctx.restore();
    ctx.strokeStyle = THEME.borderOuter;
    ctx.lineWidth = 1.2;
    strokeRoundedRect(ctx, langRect.x + 0.6, langRect.y + 0.6, langRect.w - 1.2, langRect.h - 1.2, 9.5);
    drawGlobeIcon(ctx, langRect.x + langRect.w / 2, langRect.y + langRect.h / 2, langRect.w * 0.56, THEME.accent);

    this._menuRects = { continueRun: continueRect, newGame: newRect, language: langRect };
  }

  _handleMainMenuTap(pos) {
    const hit = (r) => r && pos.x >= r.x && pos.x <= r.x + r.w && pos.y >= r.y && pos.y <= r.y + r.h;
    if (hit(this._menuRects && this._menuRects.language)) { this.languagePicker = true; return; }
    if (hit(this._menuRects && this._menuRects.continueRun)) this.continueFromMenu();
    else if (hit(this._menuRects && this._menuRects.newGame)) this.startNewFromMenu();
  }

  _renderLanguagePicker() {
    const ctx = this.ctx, L = this.layout;
    ctx.fillStyle = 'rgba(43,26,15,0.66)';
    ctx.fillRect(0, 0, L.windowWidth, L.windowHeight);

    const rowH = 48, pad = 18;
    const cw = Math.min(L.windowWidth - 32, 320);
    const ch = pad * 2 + rowH * LANG_LIST.length + 40;
    const cx = (L.windowWidth - cw) / 2;
    const cy = Math.max(20, (L.windowHeight - ch) / 2);

    ctx.save();
    ctx.shadowColor = 'rgba(28,16,8,0.46)';
    ctx.shadowBlur = 24;
    ctx.shadowOffsetY = 10;
    fillTexturedRoundedRect(ctx, UI_ASSETS.wood, cx, cy, cw, ch, 17, '#B98046', 'rgba(120,68,28,0.20)');
    ctx.restore();
    fillTexturedRoundedRect(ctx, UI_ASSETS.cream, cx + 6, cy + 6, cw - 12, ch - 12, 13, THEME.bgCard, 'rgba(255,249,239,0.20)');

    ctx.textAlign = 'center';
    ctx.fillStyle = THEME.textPrimary;
    ctx.font = 'bold 18px -apple-system, "Segoe UI", sans-serif';
    ctx.fillText(t('language'), L.windowWidth / 2, cy + 34);

    const rows = [];
    let rowY = cy + 50;
    for (const lang of LANG_LIST) {
      const rect = { x: cx + pad, y: rowY, w: cw - pad * 2, h: rowH - 8, code: lang.code };
      const active = lang.code === I18N.lang;
      ctx.fillStyle = active ? THEME.accent : '#EFE3D2';
      fillRoundedRect(ctx, rect.x, rect.y, rect.w, rect.h, 9);
      ctx.strokeStyle = active ? '#5E371D' : THEME.borderOuter;
      ctx.lineWidth = 1.3;
      strokeRoundedRect(ctx, rect.x + 0.65, rect.y + 0.65, rect.w - 1.3, rect.h - 1.3, 8.5);
      ctx.fillStyle = active ? THEME.textOnAccent : THEME.textPrimary;
      ctx.font = 'bold 15px -apple-system, "Segoe UI", sans-serif';
      ctx.fillText(lang.name, rect.x + rect.w / 2, rect.y + rect.h / 2 + 5);
      rows.push(rect);
      rowY += rowH;
    }

    const closeRect = { x: cx + pad, y: cy + ch - 40, w: cw - pad * 2, h: 32 };
    ctx.fillStyle = THEME.textSecondary;
    ctx.font = '13px -apple-system, "Segoe UI", sans-serif';
    ctx.fillText(t('cancel'), L.windowWidth / 2, closeRect.y + 20);

    ctx.textAlign = 'left';
    this._languagePickerRects = { rows, close: closeRect };
  }

  _handleLanguagePickerTap(pos) {
    const rects = this._languagePickerRects;
    if (!rects) { this.languagePicker = false; return; }
    const hit = r => pos.x >= r.x && pos.x <= r.x + r.w && pos.y >= r.y && pos.y <= r.y + r.h;
    for (const row of rects.rows) {
      if (hit(row)) {
        if (I18N.setLang(row.code)) Store.set('bb_lang_override', row.code);
        this.languagePicker = false;
        return;
      }
    }
    if (hit(rects.close)) { this.languagePicker = false; return; }
  }

  _handleConfirmationTap(pos) {
    const rects = this._confirmationRects;
    if (!rects) return;
    const hit = r => pos.x >= r.x && pos.x <= r.x + r.w && pos.y >= r.y && pos.y <= r.y + r.h;
    if (hit(rects.cancel)) {
      this.confirmation = null;
      return;
    }
    if (hit(rects.confirm)) this._runDestructiveAction(this.confirmation);
  }

  _renderConfirmation() {
    const ctx = this.ctx, L = this.layout;
    const isRestart = this.confirmation === 'restart';
    const title = t(isRestart ? 'restartTitle' : 'startNewTitle');
    const body = t(isRestart ? 'restartBody' : 'startNewBody');
    const confirmLabel = t(isRestart ? 'restart' : 'newGame');

    ctx.fillStyle = 'rgba(43,26,15,0.66)';
    ctx.fillRect(0, 0, L.windowWidth, L.windowHeight);
    const cw = Math.min(L.windowWidth - 32, 390);
    const ch = 238;
    const cx = (L.windowWidth - cw) / 2;
    const cy = (L.windowHeight - ch) / 2;
    ctx.save();
    ctx.shadowColor = 'rgba(28,16,8,0.46)';
    ctx.shadowBlur = 24;
    ctx.shadowOffsetY = 10;
    fillTexturedRoundedRect(ctx, UI_ASSETS.wood, cx, cy, cw, ch, 17, '#B98046', 'rgba(120,68,28,0.20)');
    ctx.restore();
    fillTexturedRoundedRect(ctx, UI_ASSETS.cream, cx + 6, cy + 6, cw - 12, ch - 12, 13, THEME.bgCard, 'rgba(255,249,239,0.20)');

    ctx.textAlign = 'center';
    ctx.fillStyle = THEME.textPrimary;
    ctx.font = 'bold 21px -apple-system, "Segoe UI", sans-serif';
    ctx.fillText(title, L.windowWidth / 2, cy + 48);
    ctx.fillStyle = THEME.textSecondary;
    ctx.font = '14px -apple-system, "Segoe UI", sans-serif';
    wrapText(ctx, body, L.windowWidth / 2, cy + 82, cw - 52, 19);

    const gap = 12;
    const btnH = 50;
    const btnW = (cw - 48 - gap) / 2;
    const btnY = cy + ch - btnH - 22;
    const cancel = { x: cx + 24, y: btnY, w: btnW, h: btnH };
    const confirm = { x: cancel.x + btnW + gap, y: btnY, w: btnW, h: btnH };
    const drawBtn = (rect, label, primary) => {
      ctx.fillStyle = primary ? THEME.accent : '#EFE3D2';
      fillRoundedRect(ctx, rect.x, rect.y, rect.w, rect.h, 9);
      ctx.strokeStyle = primary ? '#5E371D' : THEME.borderOuter;
      ctx.lineWidth = 1.3;
      strokeRoundedRect(ctx, rect.x + 0.65, rect.y + 0.65, rect.w - 1.3, rect.h - 1.3, 8.5);
      ctx.fillStyle = primary ? THEME.textOnAccent : THEME.textPrimary;
      ctx.font = 'bold 14px -apple-system, "Segoe UI", sans-serif';
      ctx.fillText(label, rect.x + rect.w / 2, rect.y + rect.h / 2 + 5);
    };
    drawBtn(cancel, t('cancel'), false);
    drawBtn(confirm, confirmLabel, true);
    ctx.textAlign = 'left';
    this._confirmationRects = { cancel, confirm };
  }

  _renderTutorialGuide() {
    const ctx = this.ctx, L = this.layout;
    if (this.tutorialStep === 5) {
      const elapsed = performance.now() - this.tutorialStepAtMs;
      const p = clamp(elapsed / 700, 0, 1);
      const cx = L.windowWidth / 2, cy = L.gridY + L.gridH / 2;
      ctx.save();
      ctx.globalAlpha = Math.sin(p * Math.PI) * 0.95;
      ctx.shadowColor = 'rgba(212,160,48,0.85)';
      ctx.shadowBlur = 28;
      ctx.strokeStyle = '#FFF4C8';
      ctx.lineWidth = Math.max(7, L.cellSize * 0.14);
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(cx - L.cellSize * 0.55, cy);
      ctx.lineTo(cx - L.cellSize * 0.12, cy + L.cellSize * 0.42);
      ctx.lineTo(cx + L.cellSize * 0.70, cy - L.cellSize * 0.48);
      ctx.stroke();
      ctx.restore();
      if (elapsed > 900) this._finishTutorial();
      return;
    }

    let source, sourceRect, sourceRadius, targetCell, targetWidthCells = 1;
    if (this.tutorialStep >= 0 && this.tutorialStep <= 2) {
      const slotW = L.trayCardW;
      const totalW = slotW * 3 + L.trayPad * 2;
      const leftPad = (L.windowWidth - totalW) / 2;
      const slotX = leftPad + this.tutorialStep * (slotW + L.trayPad);
      const piece = this.pieces[this.tutorialStep];
      const pieceCell = this._trayScaledCell();
      const pieceW = piece.width * pieceCell, pieceH = piece.height * pieceCell;
      source = { x: slotX + slotW / 2, y: L.trayY + L.trayH / 2 };
      sourceRect = {
        x: source.x - pieceW / 2 - 5,
        y: source.y - pieceH / 2 - 5,
        w: pieceW + 10,
        h: pieceH + 10
      };
      sourceRadius = pieceCellRadius(pieceCell);
      targetCell = { row: GRID_SIZE - 1, col: [0, 3, 6][this.tutorialStep] };
      targetWidthCells = [3, 3, 2][this.tutorialStep];
    } else {
      const rects = this._boosterIconRects();
      const key = this.tutorialStep === 3 ? 'bomb' : 'sword';
      const r = rects[key];
      source = { x: r.x + r.w / 2, y: r.y + r.h / 2 };
      sourceRect = { x: r.x - 3, y: r.y - 3, w: r.w + 6, h: r.h + 6 };
      sourceRadius = pieceCellRadius(r.w);
      targetCell = this.tutorialStep === 3 ? { row: 3, col: 3 } : { row: 4, col: 4 };
    }

    const cellX = L.gridX + (targetCell.col + 0.5) * L.cellSize;
    const cellY = L.gridY + (targetCell.row + 0.5) * L.cellSize;
    const pointerTarget = { x: cellX, y: cellY + L.dragLiftOffset };
    const phase = ((performance.now() - this.tutorialStepAtMs) % 1800) / 1800;
    const raw = phase < 0.72 ? phase / 0.72 : 1;
    const eased = raw * raw * (3 - 2 * raw);
    const handX = source.x + (pointerTarget.x - source.x) * eased;
    const handY = source.y + (pointerTarget.y - source.y) * eased;
    const pulse = 0.70 + Math.sin(performance.now() * 0.008) * 0.22;

    ctx.save();
    ctx.fillStyle = 'rgba(46,27,14,0.16)';
    ctx.fillRect(0, 0, L.windowWidth, L.windowHeight);
    ctx.shadowColor = 'rgba(255,210,70,0.85)';
    ctx.shadowBlur = 18;
    ctx.strokeStyle = `rgba(255,241,170,${pulse})`;
    ctx.lineWidth = 4;
    strokeRoundedRect(ctx, sourceRect.x, sourceRect.y, sourceRect.w, sourceRect.h, sourceRadius);
    const targetPad = 3;
    strokeRoundedRect(
      ctx,
      L.gridX + targetCell.col * L.cellSize + targetPad,
      L.gridY + targetCell.row * L.cellSize + targetPad,
      targetWidthCells * L.cellSize - targetPad * 2,
      L.cellSize - targetPad * 2,
      pieceCellRadius(L.cellSize - targetPad * 2)
    );
    ctx.restore();
    drawTutorialHand(ctx, handX, handY, Math.min(104, L.cellSize * 1.8));
  }

  _headerBounds() {
    const L = this.layout;
    const available = L.windowWidth - L.sidePad * 2;
    const w = Math.min(available, Math.max(L.gridW, 520));
    return { x: (L.windowWidth - w) / 2, y: L.headerTop, w, h: L.headerH };
  }

  _headerControlRects() {
    const L = this.layout;
    const bounds = this._headerBounds();
    const { x, y, w, h } = bounds;
    const size = clamp(Math.min(h - 8, w * 0.14), 34, 52);
    const top = y + (h - size) / 2;
    const gap = Math.max(6, Math.min(10, w * 0.025));
    return {
      home: { x: x + 7, y: top, w: size, h: size },
      sound: { x: x + w - size - 7, y: top, w: size, h: size },
      restart: { x: x + w - size * 2 - gap - 7, y: top, w: size, h: size },
    };
  }

  _handleHeaderTap(pos) {
    const rects = this._headerRects || this._headerControlRects();
    const hit = r => pos.x >= r.x && pos.x <= r.x + r.w && pos.y >= r.y && pos.y <= r.y + r.h;
    if (hit(rects.home)) { this.openMainMenu(); return true; }
    if (hit(rects.restart)) { this.restartFromHeader(); return true; }
    if (hit(rects.sound)) { this.sound.setEnabled(!this.sound.enabled); return true; }
    return false;
  }

  _renderHeader() {
    const ctx = this.ctx, L = this.layout;
    const { x, y, w, h } = this._headerBounds();

    ctx.save();
    ctx.shadowColor = 'rgba(83,50,24,0.22)';
    ctx.shadowBlur = 14;
    ctx.shadowOffsetY = 5;
    fillTexturedRoundedRect(ctx, UI_ASSETS.cream, x, y, w, h, 12, '#FFF8EE', 'rgba(255,250,242,0.22)');
    ctx.restore();
    ctx.strokeStyle = THEME.borderCard;
    ctx.lineWidth = 1.5;
    strokeRoundedRect(ctx, x + 0.75, y + 0.75, w - 1.5, h - 1.5, 11);

    const rects = this._headerControlRects();
    this._headerRects = rects;
    const drawControl = (rect, icon) => {
      ctx.save();
      ctx.shadowColor = 'rgba(61,43,26,0.14)';
      ctx.shadowBlur = 5;
      ctx.shadowOffsetY = 2;
      fillTexturedRoundedRect(ctx, UI_ASSETS.cream, rect.x, rect.y, rect.w, rect.h, 8, THEME.bgCellEmpty, 'rgba(255,248,238,0.16)');
      ctx.restore();
      ctx.strokeStyle = THEME.borderOuter;
      ctx.lineWidth = 1.2;
      strokeRoundedRect(ctx, rect.x + 0.6, rect.y + 0.6, rect.w - 1.2, rect.h - 1.2, 7.5);
      icon(rect.x + rect.w / 2, rect.y + rect.h / 2, Math.min(28, rect.w * 0.58));
    };
    drawControl(rects.home, (cx, cy, size) => drawHomeIcon(ctx, cx, cy, size));
    drawControl(rects.restart, (cx, cy, size) => drawRetryIcon(ctx, cx, cy, size, THEME.accent));
    drawControl(rects.sound, (cx, cy, size) => drawSoundIcon(ctx, cx, cy, size, this.sound.enabled));

    const statsLeft = rects.home.x + rects.home.w + 5;
    const statsRight = rects.restart.x - 5;
    const statsW = Math.max(80, statsRight - statsLeft);
    const scoreX = statsLeft + statsW * 0.38;
    const bestX = statsLeft + statsW * 0.78;
    const midY = y + h / 2;
    const scoreSize = Math.max(18, Math.min(25, h * 0.32));

    ctx.textAlign = 'center';
    ctx.fillStyle = THEME.textSecondary;
    ctx.font = `${Math.max(9, Math.min(11, h * 0.15))}px -apple-system, "Segoe UI", sans-serif`;
    ctx.fillText(t('score'), scoreX, midY - 8);
    ctx.fillText(t('best'), bestX, midY - 8);
    ctx.fillStyle = THEME.textPrimary;
    ctx.font = `bold ${scoreSize}px -apple-system, "Segoe UI", sans-serif`;
    ctx.fillText(String(this.scoreManager.score), scoreX, midY + 17);
    ctx.fillStyle = THEME.textSecondary;
    ctx.font = `bold ${Math.max(15, scoreSize - 5)}px -apple-system, "Segoe UI", sans-serif`;
    ctx.fillText(String(this.bestScore), bestX, midY + 15);
    ctx.textAlign = 'left';
  }

  _cellRect(cs, r, c) {
    const gap = cs * 0.02;
    return { x: c * cs + gap / 2, y: r * cs + gap / 2, w: cs - gap, h: cs - gap };
  }

  _renderBoard() {
    const ctx = this.ctx, L = this.layout, board = this.board;
    const cs = L.cellSize;

    ctx.save();
    ctx.translate(L.gridX, L.gridY);

    const pad = 10;
    ctx.save();
    ctx.shadowColor = 'rgba(72,43,20,0.34)';
    ctx.shadowBlur = 16;
    ctx.shadowOffsetY = 7;
    fillTexturedRoundedRect(ctx, UI_ASSETS.wood, -pad, -pad, L.gridW + pad * 2, L.gridH + pad * 2, 9, '#D4B17B', 'rgba(151,96,44,0.22)');
    ctx.restore();
    ctx.strokeStyle = THEME.borderOuter;
    ctx.lineWidth = 1.5;
    strokeRoundedRect(ctx, -pad + 0.75, -pad + 0.75, L.gridW + pad * 2 - 1.5, L.gridH + pad * 2 - 1.5, 8);

    for (let r = 0; r < board.size; r++) {
      for (let c = 0; c < board.size; c++) {
        const rect = this._cellRect(cs, r, c);
        const color = board.grid[r][c];
        if (color != null) drawDepthBlock(ctx, rect.x, rect.y, rect.w, rect.h, color);
        else drawWell(ctx, rect.x, rect.y, rect.w, rect.h, THEME.bgCellEmpty, THEME.gridLine);
      }
    }

    this._renderPlacementPreview(ctx, cs);
    this._renderPlacementFlash(ctx, cs);
    this._renderLineClearAnim(ctx, cs);
    this._renderBoosterTargeting(ctx, cs);

    ctx.restore();
  }

  _renderPlacementPreview(ctx, cs) {
    if (!this.draggingPiece || !this.potentialPos) return;
    const piece = this.draggingPiece;
    const [row, col] = this.potentialPos;
    const valid = this.dragValid;
    const board = this.board;

    const ghostCells = new Set();
    for (const [dr, dc] of piece.shape) ghostCells.add((row + dr) * board.size + (col + dc));

    if (valid) {
      const { rows, cols } = board.previewCompletedLines(piece, row, col);
      if (rows.length || cols.length) this._drawCompletionPreview(ctx, cs, rows, cols, ghostCells);
    }

    const baseAlpha = valid ? 0.63 : 0.51;
    let pulse = baseAlpha + Math.sin(this._tick * 0.006) * 0.15;
    pulse = clamp(pulse, 0.35, 0.94);

    for (const [dr, dc] of piece.shape) {
      const r = row + dr, c = col + dc;
      if (r < 0 || r >= board.size || c < 0 || c >= board.size) continue;
      const rect = this._cellRect(cs, r, c);
      const color = valid ? piece.color : [191, 64, 64];
      ctx.fillStyle = rgba(color, pulse);
      fillRoundedRect(ctx, rect.x, rect.y, rect.w, rect.h, pieceCellRadius(rect.w));
      ctx.strokeStyle = valid ? THEME.accent : THEME.danger;
      ctx.lineWidth = 2.5;
      strokeRoundedRect(ctx, rect.x + 1.25, rect.y + 1.25, rect.w - 2.5, rect.h - 2.5, pieceCellRadius(rect.w - 2.5));
    }
  }

  _drawCompletionPreview(ctx, cs, rows, cols, ghostCells) {
    const board = this.board;
    const cells = new Set();
    for (const r of rows) for (let c = 0; c < board.size; c++) cells.add(r * board.size + c);
    for (const c of cols) for (let r = 0; r < board.size; r++) cells.add(r * board.size + c);
    for (const g of ghostCells) cells.delete(g);

    // Lighter, sparklier "about to complete" glow: bright gold fill, luminous
    // border, a fast white sheen sweep, plus a few twinkling sparks per cell.
    const gold = [240, 205, 110], brightGold = [255, 235, 175];
    const pulse = Math.sin(this._tick * 0.0075);
    const fillA = clamp((120 + pulse * 55) / 255, 0.25, 0.8);
    const borderA = clamp((210 + pulse * 45) / 255, 0.6, 1);
    const sheenPos = (this._tick * 0.0014) % 1.0;

    for (const key of cells) {
      const r = Math.floor(key / board.size), c = key % board.size;
      const rect = this._cellRect(cs, r, c);
      ctx.save();
      ctx.shadowColor = rgba(brightGold, 0.8);
      ctx.shadowBlur = cs * 0.22;
      ctx.fillStyle = rgba(gold, fillA);
      fillRoundedRect(ctx, rect.x, rect.y, rect.w, rect.h, pieceCellRadius(rect.w));
      ctx.restore();
      ctx.strokeStyle = rgba(brightGold, borderA);
      ctx.lineWidth = 2.5;
      strokeRoundedRect(ctx, rect.x + 1.25, rect.y + 1.25, rect.w - 2.5, rect.h - 2.5, pieceCellRadius(rect.w - 2.5));

      const norm = (r + c) / (board.size * 2);
      const dist = Math.abs(norm - sheenPos);
      if (dist < 0.16) {
        const a = clamp((1 - dist / 0.16) * 0.6, 0, 0.7);
        ctx.fillStyle = `rgba(255,255,255,${a})`;
        fillRoundedRect(ctx, rect.x, rect.y, rect.w, rect.h, pieceCellRadius(rect.w));
      }

      // Twinkling sparks that drift within the cell.
      const rng = mulberry32((r * 8 + c) * 101);
      for (let j = 0; j < 2; j++) {
        const phase = (this._tick * 0.004 + rng()) % 1.0;
        const tw = Math.sin(phase * Math.PI); // 0→1→0 twinkle
        if (tw <= 0.05) continue;
        const sx = rect.x + rect.w * (0.2 + rng() * 0.6);
        const sy = rect.y + rect.h * (0.2 + rng() * 0.6);
        const sz = (1.2 + rng() * 1.8) * tw;
        ctx.save();
        ctx.shadowColor = 'rgba(255,255,255,0.9)';
        ctx.shadowBlur = 4;
        ctx.fillStyle = `rgba(255,255,255,${clamp(tw, 0, 1)})`;
        ctx.fillRect(sx - sz / 2, sy - sz / 2, sz, sz);
        ctx.restore();
      }
    }
  }

  _renderPlacementFlash(ctx, cs) {
    if (!this.justPlacedCells.length) return;
    const elapsed = performance.now() - this.justPlacedAtMs;
    const dur = 280;
    if (elapsed < 0 || elapsed >= dur) { this.justPlacedCells = []; return; }
    const t = elapsed / dur;
    const alpha = clamp((1 - t) * 0.7, 0, 0.7);
    const inflate = cs * 0.12 * (1 - t);
    for (const [r, c] of this.justPlacedCells) {
      const rect = this._cellRect(cs, r, c);
      ctx.fillStyle = `rgba(255,255,255,${alpha})`;
      fillRoundedRect(ctx, rect.x - inflate, rect.y - inflate, rect.w + inflate * 2, rect.h + inflate * 2, pieceCellRadius(rect.w + inflate * 2));
    }
  }

  // Light, sparkly line clear: a bright warm-white flash swells, then each cell
  // bursts into golden + white sparks that fly outward and fade. Lighter and
  // livelier than the old amber-glow/sawdust crumble.
  _renderLineClearAnim(ctx, cs) {
    if (!this.justClearedCells.length) return;
    const elapsed = performance.now() - this.justClearedAtMs;
    const totalMs = 600;
    if (elapsed < 0 || elapsed >= totalMs) { this.justClearedCells = []; return; }
    const t = elapsed / totalMs;
    const gold = [245, 214, 130], brightGold = [255, 236, 190], white = [255, 255, 255];

    let minR = 999, maxR = -1, minC = 999, maxC = -1;
    for (const [r, c] of this.justClearedCells) { minR = Math.min(minR, r); maxR = Math.max(maxR, r); minC = Math.min(minC, c); maxC = Math.max(maxC, c); }
    const horizontal = (maxC - minC) >= (maxR - minR);
    const span = Math.max(1, horizontal ? maxC - minC : maxR - minR);

    for (const [r, c] of this.justClearedCells) {
      const cx = c * cs + cs / 2, cy = r * cs + cs / 2;
      const norm = horizontal ? (c - minC) / span : (r - minR) / span;
      const delay = norm * 0.22;
      const cellT = clamp((t - delay) / (1 - delay), 0, 1);
      if (cellT <= 0) continue;

      const gap = cs * 0.02, half = (cs - gap) / 2;
      if (cellT < 0.35) {
        // Bright bloom: white-hot core over a soft gold halo, scaling up.
        const p = cellT / 0.35;
        const scale = 1 + 0.28 * Math.sin(p * Math.PI);
        const hs = half * scale;
        ctx.save();
        ctx.shadowColor = rgba(brightGold, 0.9);
        ctx.shadowBlur = cs * 0.5 * p;
        ctx.fillStyle = rgba(gold, clamp(0.55 * Math.sin(p * Math.PI) + 0.35, 0, 1));
        fillRoundedRect(ctx, cx - hs, cy - hs, hs * 2, hs * 2, pieceCellRadius(hs * 2));
        ctx.restore();
        ctx.fillStyle = `rgba(255,255,255,${clamp(Math.sin(p * Math.PI) * 0.95, 0, 1)})`;
        const cc = half * (0.55 + 0.35 * p);
        fillRoundedRect(ctx, cx - cc, cy - cc, cc * 2, cc * 2, pieceCellRadius(cc * 2));
      } else {
        // Shrinking bright core + golden/white sparks flying outward.
        const p = (cellT - 0.35) / 0.65;
        const shrink = half * (1 - p) * 0.85;
        if (shrink > 0) {
          ctx.fillStyle = rgba(brightGold, clamp((1 - p) * 0.85, 0, 1));
          fillRoundedRect(ctx, cx - shrink, cy - shrink, shrink * 2, shrink * 2, pieceCellRadius(shrink * 2));
        }
        const sparkA = clamp((1 - p) * 0.95, 0, 1);
        const rng = mulberry32((r * 8 + c) * 47 + 13);
        for (let j = 0; j < 8; j++) {
          const ang = rng() * Math.PI * 2;
          const speed = 0.45 + rng() * 0.85;
          const dist = cs * speed * p;
          const sx = cx + Math.cos(ang) * dist;
          const sy = cy + Math.sin(ang) * dist - cs * 0.15 * p; // slight upward drift
          const sz = (1.6 + rng() * 2.6) * (1 - p * 0.5);
          ctx.save();
          ctx.shadowColor = rgba(brightGold, sparkA);
          ctx.shadowBlur = 4;
          ctx.fillStyle = rgba(j % 3 === 0 ? white : (j % 3 === 1 ? brightGold : gold), sparkA);
          ctx.fillRect(sx - sz / 2, sy - sz / 2, sz, sz);
          ctx.restore();
        }
      }
    }
  }

  _renderBoosterTargeting(ctx, cs) {
    if (!this.draggingBoosterKey || !this.boosterTargetCell) return;
    const [row, col] = this.boosterTargetCell;
    const key = this.draggingBoosterKey;
    const board = this.board;
    const valid = this.boosterWouldHaveEffect(key, row, col);
    const col1 = valid ? [92, 138, 74] : [191, 64, 64]; // success / danger
    const pulse = 0.30 + Math.sin(this._tick * 0.012) * 0.14;
    const mark = (r, c) => {
      if (r < 0 || r >= board.size || c < 0 || c >= board.size) return;
      const rect = this._cellRect(cs, r, c);
      ctx.fillStyle = rgba(col1, clamp(pulse, 0.12, 0.5));
      fillRoundedRect(ctx, rect.x, rect.y, rect.w, rect.h, pieceCellRadius(rect.w));
      ctx.strokeStyle = rgba(col1, 0.9);
      ctx.lineWidth = 2;
      strokeRoundedRect(ctx, rect.x + 1, rect.y + 1, rect.w - 2, rect.h - 2, pieceCellRadius(rect.w - 2));
    };
    if (key === 'bomb') {
      for (let dr = -1; dr <= 1; dr++) for (let dc = -1; dc <= 1; dc++) mark(row + dr, col + dc);
    } else if (key === 'sword') {
      for (let c = 0; c < board.size; c++) mark(row, c);
      for (let r = 0; r < board.size; r++) mark(r, col);
    }
  }

  _renderBoosterBar() {
    const ctx = this.ctx, L = this.layout;
    const rects = this._boosterIconRects();
    for (const key of Object.keys(rects)) {
      const r = rects[key];
      const count = this.inventory[key];
      const disabled = count <= 0;
      const dragging = this.draggingBoosterKey === key; // its source slot dims
      const loading = this.adRequest && this.adRequest.kind === 'booster' && this.adRequest.key === key;

      ctx.globalAlpha = dragging ? 0.35 : 1;
      ctx.save();
      ctx.shadowColor = 'rgba(61,43,26,0.22)';
      ctx.shadowBlur = 5;
      ctx.shadowOffsetY = 2;
      fillTexturedRoundedRect(ctx, UI_ASSETS.cream, r.x, r.y, r.w, r.h, 6, THEME.bgCellEmpty, 'rgba(255,248,238,0.18)');
      ctx.restore();
      ctx.strokeStyle = THEME.borderOuter;
      ctx.lineWidth = 1.5;
      strokeRoundedRect(ctx, r.x + 0.75, r.y + 0.75, r.w - 1.5, r.h - 1.5, 5.5);

      const iconAlpha = disabled ? 0.35 : (dragging ? 0.35 : 1);
      drawBoosterIcon(ctx, key, r.x + r.w / 2, r.y + r.h / 2, r.w * 0.86, loading ? 0.2 : iconAlpha);
      if (loading) this._drawLoadingSpinner(r.x + r.w / 2, r.y + r.h / 2, r.w * 0.24);
      ctx.globalAlpha = 1;
      ctx.textAlign = 'left';
      ctx.textBaseline = 'alphabetic';

      // Corner badge: the count you own, or a "▶AD" tag when empty and a
      // rewarded recharge is available (tap the icon to watch an ad / refill).
      const rechargeable = count <= 0;
      const label = count > 0 ? String(count) : (rechargeable ? '▶' : '0');
      const bw = 18, bh = 15;
      const bx = r.x + r.w - bw + 5, by = r.y - 5;
      ctx.fillStyle = count > 0 ? THEME.accent : (rechargeable ? THEME.success : THEME.textMuted);
      fillRoundedRect(ctx, bx, by, bw, bh, 4);
      ctx.fillStyle = THEME.textOnAccent;
      ctx.font = 'bold 10px -apple-system, "Segoe UI", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(label, bx + bw / 2, by + bh / 2 + 0.5);
      ctx.textAlign = 'left';
      ctx.textBaseline = 'alphabetic';
    }
  }

  // The booster chip lifted under the finger while dragging.
  _renderDraggedBooster() {
    const ctx = this.ctx;
    const key = this.draggingBoosterKey;
    const size = Math.min(this.layout.cellSize * 1.25, 56);
    const x = this.boosterPointer.x - size / 2, y = this.boosterPointer.y - size / 2;

    ctx.save();
    ctx.shadowColor = 'rgba(61,43,26,0.35)';
    ctx.shadowBlur = 10;
    ctx.shadowOffsetY = 4;
    fillTexturedRoundedRect(ctx, UI_ASSETS.cream, x, y, size, size, 7, THEME.bgCard, 'rgba(255,248,238,0.18)');
    ctx.restore();
    ctx.strokeStyle = THEME.accent;
    ctx.lineWidth = 2;
    strokeRoundedRect(ctx, x + 1, y + 1, size - 2, size - 2, 6);

    drawBoosterIcon(ctx, key, x + size / 2, y + size / 2, size * 0.86);
  }

  _renderAwardFlash() {
    const elapsed = performance.now() - this.awardFlashAtMs;
    const dur = 1400;
    if (elapsed >= dur) { this.awardFlashText = null; return; }
    const t = elapsed / dur;
    const alpha = t < 0.12 ? t / 0.12 : (1 - (t - 0.12) / 0.88);
    const ctx = this.ctx, L = this.layout;
    ctx.save();
    ctx.globalAlpha = clamp(alpha, 0, 1);
    ctx.fillStyle = THEME.accent;
    ctx.font = `bold ${Math.round(L.cellSize * 0.5)}px -apple-system, "Segoe UI", sans-serif`;
    ctx.textAlign = 'center';
    ctx.fillText(this.awardFlashText, L.windowWidth / 2, L.boosterBarY - 8 - t * 18);
    ctx.fillStyle = THEME.textSecondary;
    ctx.font = `bold ${Math.round(L.cellSize * 0.26)}px -apple-system, "Segoe UI", sans-serif`;
    ctx.fillText(I18N.t('boosterEarned'), L.windowWidth / 2, L.boosterBarY - 8 - t * 18 + L.cellSize * 0.36);
    ctx.restore();
    ctx.textAlign = 'left';
  }

  _drawLoadingSpinner(cx, cy, radius) {
    const ctx = this.ctx;
    ctx.save();
    ctx.strokeStyle = THEME.accent;
    ctx.lineWidth = Math.max(2, radius * 0.22);
    ctx.lineCap = 'round';
    ctx.beginPath();
    const start = this._tick * 0.008;
    ctx.arc(cx, cy, radius, start, start + Math.PI * 1.35);
    ctx.stroke();
    ctx.restore();
  }

  _renderNotice() {
    if (performance.now() >= this.noticeUntil) { this.noticeText = null; return; }
    const ctx = this.ctx, L = this.layout;
    const w = Math.min(L.windowWidth - 24, 330), h = 46;
    const x = (L.windowWidth - w) / 2;
    const y = Math.max(8, Math.min(L.windowHeight - h - 8, L.boosterBarY - h - 8));
    ctx.save();
    ctx.shadowColor = 'rgba(45,27,14,0.28)';
    ctx.shadowBlur = 12;
    ctx.shadowOffsetY = 4;
    ctx.fillStyle = 'rgba(255,248,238,0.97)';
    fillRoundedRect(ctx, x, y, w, h, 10);
    ctx.restore();
    ctx.strokeStyle = THEME.borderOuter;
    ctx.lineWidth = 1.2;
    strokeRoundedRect(ctx, x + 0.6, y + 0.6, w - 1.2, h - 1.2, 9.5);
    ctx.fillStyle = THEME.textSecondary;
    ctx.font = 'bold 13px -apple-system, "Segoe UI", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(this.noticeText, L.windowWidth / 2, y + h / 2);
    ctx.textAlign = 'left';
    ctx.textBaseline = 'alphabetic';
  }

  _renderTray() {
    const ctx = this.ctx, L = this.layout;
    const trayMargin = Math.max(8, L.sidePad * 0.55);
    ctx.save();
    ctx.shadowColor = 'rgba(72,43,20,0.28)';
    ctx.shadowBlur = 14;
    ctx.shadowOffsetY = 5;
    fillTexturedRoundedRect(ctx, UI_ASSETS.cream, trayMargin, L.trayY, L.windowWidth - trayMargin * 2, L.trayH, 13, '#FFF8EE', 'rgba(255,249,239,0.18)');
    ctx.restore();
    ctx.strokeStyle = THEME.borderOuter;
    ctx.lineWidth = 1.5;
    strokeRoundedRect(ctx, trayMargin + 0.75, L.trayY + 0.75, L.windowWidth - trayMargin * 2 - 1.5, L.trayH - 1.5, 12);

    const slotW = L.trayCardW, slotH = L.trayCardH;
    const totalW = slotW * 3 + L.trayPad * 2;
    const leftPad = (L.windowWidth - totalW) / 2;
    const fixedCell = this._trayScaledCell();

    for (let i = 0; i < 3; i++) {
      const piece = this.pieces[i];
      if (!piece || i === this.draggingIndex) continue;
      const sx = leftPad + i * (slotW + L.trayPad);
      const sy = L.trayY + L.trayPad;
      const pw = piece.width * fixedCell, ph = piece.height * fixedCell;
      const px = sx + slotW / 2 - pw / 2;
      const py = sy + slotH / 2 - ph / 2;
      drawPieceCells(this.ctx, piece, px, py, fixedCell);
    }
  }

  _renderDraggedPiece() {
    const ctx = this.ctx;
    const piece = this.draggingPiece;
    const cs = this.layout.cellSize * 1.10;
    const pw = piece.width * cs, ph = piece.height * cs;
    const x = this.pointer.x - pw / 2, y = this.pointer.y - ph / 2;

    // Soft per-cell contact shadow (matches Flutter's DraggedPieceOverlay):
    // one blurred pass under the shape so it lifts off the board without the
    // harsh "black box" that a whole-piece drop shadow produces.
    const gap = cs * 0.02;
    ctx.save();
    ctx.fillStyle = 'rgba(61,43,26,0.22)';
    ctx.shadowColor = 'rgba(61,43,26,0.28)';
    ctx.shadowBlur = 8;
    ctx.shadowOffsetY = 4;
    for (const [dr, dc] of piece.shape) {
      const shadowSize = cs - gap - 2;
      fillRoundedRect(ctx, x + dc * cs + gap / 2 + 1, y + dr * cs + gap / 2 + 2, shadowSize, shadowSize, pieceCellRadius(shadowSize));
    }
    ctx.restore();

    // Then the piece itself, crisp (no canvas shadow on the block gradients).
    drawPieceCells(ctx, piece, x, y, cs);
  }

  _renderComboFlash() {
    const elapsed = performance.now() - this.comboFlashAtMs;
    const dur = 900;
    if (elapsed >= dur) { this.comboFlashText = null; return; }
    const t = elapsed / dur;
    const alpha = t < 0.15 ? t / 0.15 : (1 - (t - 0.15) / 0.85);
    const ctx = this.ctx, L = this.layout;
    ctx.save();
    ctx.globalAlpha = clamp(alpha, 0, 1);
    ctx.fillStyle = THEME.warning;
    ctx.font = `bold ${Math.round(L.cellSize * 0.6)}px -apple-system, "Segoe UI", sans-serif`;
    ctx.textAlign = 'center';
    ctx.fillText(this.comboFlashText, L.windowWidth / 2, L.gridY + L.gridH * 0.4 - t * 30);
    ctx.restore();
    ctx.textAlign = 'left';
  }

  _renderGameOver() {
    const ctx = this.ctx, L = this.layout;
    ctx.fillStyle = 'rgba(43,26,15,0.70)';
    ctx.fillRect(0, 0, L.windowWidth, L.windowHeight);

    // Keep the option visible; the SDK reports a friendly no-fill result after tap.
    const canContinue = !this.continueUsedThisRun;

    const cw = Math.min(L.windowWidth - 32, 390);
    const btnH = 48, btnGap = 11;
    const ch = canContinue ? 370 : 312;
    const cx = (L.windowWidth - cw) / 2, cy = (L.windowHeight - ch) / 2;

    ctx.save();
    ctx.shadowColor = 'rgba(28,16,8,0.52)';
    ctx.shadowBlur = 26;
    ctx.shadowOffsetY = 11;
    fillTexturedRoundedRect(ctx, UI_ASSETS.wood, cx, cy, cw, ch, 18, '#B98046', 'rgba(112,61,24,0.22)');
    ctx.restore();
    fillTexturedRoundedRect(ctx, UI_ASSETS.cream, cx + 7, cy + 7, cw - 14, ch - 14, 13, THEME.bgCard, 'rgba(255,249,239,0.22)');
    ctx.strokeStyle = THEME.borderOuter;
    ctx.lineWidth = 1.4;
    strokeRoundedRect(ctx, cx + 7.7, cy + 7.7, cw - 15.4, ch - 15.4, 12.5);

    ctx.textAlign = 'center';
    ctx.save();
    ctx.shadowColor = 'rgba(92,48,24,0.20)';
    ctx.shadowBlur = 5;
    ctx.shadowOffsetY = 2;
    ctx.fillStyle = '#8A3F2F';
    ctx.font = '900 25px -apple-system, "Segoe UI", sans-serif';
    ctx.fillText(t('gameOverTitle'), L.windowWidth / 2, cy + 47);
    ctx.restore();

    ctx.fillStyle = THEME.textSecondary;
    ctx.font = '13px -apple-system, "Segoe UI", sans-serif';
    wrapText(ctx, this.failureReason, L.windowWidth / 2, cy + 68, cw - 48, 16);

    ctx.fillStyle = THEME.textMuted;
    ctx.font = '12px -apple-system, "Segoe UI", sans-serif';
    ctx.fillText(t('score'), L.windowWidth / 2, cy + 111);
    ctx.fillStyle = THEME.textPrimary;
    ctx.font = 'bold 36px -apple-system, "Segoe UI", sans-serif';
    ctx.fillText(String(this.scoreManager.score), L.windowWidth / 2, cy + 151);

    const isNewBest = this.scoreManager.score >= this.bestScore && this.scoreManager.score > 0;
    ctx.fillStyle = THEME.textMuted;
    ctx.font = '12px -apple-system, "Segoe UI", sans-serif';
    ctx.fillText(t('best'), L.windowWidth / 2, cy + 172);
    ctx.fillStyle = THEME.textSecondary;
    ctx.font = 'bold 18px -apple-system, "Segoe UI", sans-serif';
    ctx.fillText(String(this.bestScore), L.windowWidth / 2, cy + 194);

    if (isNewBest) {
      ctx.fillStyle = THEME.warning;
      ctx.font = 'bold 13px -apple-system, "Segoe UI", sans-serif';
      ctx.fillText(t('newBest'), L.windowWidth / 2, cy + 218);
    }

    const btnW = cw - 52, btnX = cx + 26;
    const playAgainY = cy + ch - btnH - 20;
    const continueY = playAgainY - btnH - btnGap;

    const drawBtn = (y, label, bg, fg, border) => {
      ctx.save();
      ctx.shadowColor = 'rgba(62,35,17,0.22)';
      ctx.shadowBlur = 7;
      ctx.shadowOffsetY = 3;
      ctx.fillStyle = bg;
      fillRoundedRect(ctx, btnX, y, btnW, btnH, 10);
      ctx.restore();
      ctx.strokeStyle = border;
      ctx.lineWidth = 1.4;
      strokeRoundedRect(ctx, btnX + 0.7, y + 0.7, btnW - 1.4, btnH - 1.4, 9.5);
      const shine = ctx.createLinearGradient(0, y, 0, y + btnH);
      shine.addColorStop(0, 'rgba(255,255,255,0.20)');
      shine.addColorStop(0.48, 'rgba(255,255,255,0.03)');
      shine.addColorStop(1, 'rgba(69,35,14,0.10)');
      ctx.fillStyle = shine;
      fillRoundedRect(ctx, btnX + 2, y + 2, btnW - 4, btnH - 4, 8);
      ctx.fillStyle = fg;
      ctx.font = 'bold 15px -apple-system, "Segoe UI", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(label, L.windowWidth / 2, y + btnH / 2 + 5);
    };

    this._gameOverButtons = {
      continue: canContinue ? { x: btnX, y: continueY, w: btnW, h: btnH } : null,
      playAgain: { x: btnX, y: playAgainY, w: btnW, h: btnH },
    };
    if (canContinue) {
      const continueLabel = this.adRequest && this.adRequest.kind === 'continue' ? t('loadingAd') : t('continueAd');
      drawBtn(continueY, continueLabel, THEME.success, THEME.textOnAccent, '#365D34');
    }
    drawBtn(playAgainY, t('retry'), THEME.accent, THEME.textOnAccent, '#5E371D');
    ctx.textAlign = 'left';
  }

  _handleGameOverTap(pos) {
    const b = this._gameOverButtons;
    if (!b) return;
    const hit = (r) => r && pos.x >= r.x && pos.x <= r.x + r.w && pos.y >= r.y && pos.y <= r.y + r.h;
    if (hit(b.continue)) { this.continueAfterGameOver(); return; }
    if (hit(b.playAgain)) { this.playAgainFromGameOver(); return; }
  }
}

function wrapText(ctx, text, cx, y, maxWidth, lineHeight) {
  const words = text.split(' ');
  let line = '';
  const lines = [];
  for (const w of words) {
    const test = line ? line + ' ' + w : w;
    if (ctx.measureText(test).width > maxWidth && line) { lines.push(line); line = w; }
    else line = test;
  }
  if (line) lines.push(line);
  lines.forEach((l, i) => ctx.fillText(l, cx, y + i * lineHeight));
}

function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// ── Boot ──────────────────────────────────────────────────────────────
// The game renders IMMEDIATELY and never waits on a portal SDK — critical
// because a slow/blocked SDK (or a hung YaGames.init in a draft frame) must
// not leave the player staring at a blank canvas. We pick the adapter
// synchronously, resolve a provisional language, start the game, THEN load
// the SDK in the background and refine the language once it's ready.
function boot() {
  Platform.select(); // sync — adapter chosen, gameplayStart() etc. safe to call
  I18N.init({ lang: Platform.getLanguage(), fallback: Platform.getFallbackLang() });
  const savedLang = Store.get('bb_lang_override');
  if (savedLang) I18N.setLang(savedLang);

  const canvas = document.getElementById('game');
  let game;
  try {
    game = new Game(canvas);
    window.__blockBlastGame = game; // debug hook
    // Let adapters pause/resume the game around full-screen ads.
    Platform.setPauseHooks(() => game.pause(), () => game.resume());
  } catch (e) {
    // Absolute last resort: never leave a blank frame. Show a minimal message.
    try {
      const ctx = canvas.getContext('2d');
      canvas.width = window.innerWidth; canvas.height = window.innerHeight;
      ctx.fillStyle = THEME.bg; ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = THEME.textSecondary; ctx.font = '16px sans-serif'; ctx.textAlign = 'center';
      ctx.fillText('Loading…', canvas.width / 2, canvas.height / 2);
    } catch (_) {}
    throw e;
  }

  // Load the SDK in the background; refine language + signal the round when up.
  Platform.init().then(() => {
    if (!Store.get('bb_lang_override')) {
      I18N.init({ lang: Platform.getLanguage(), fallback: Platform.getFallbackLang() });
    }
    if (game.screen === 'game') Platform.gameplayStart();
  });
}

if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}

})();
