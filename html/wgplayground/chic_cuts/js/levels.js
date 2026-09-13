(function () {
  "use strict";

  function rectArray(rect) {
    return Array.isArray(rect)
      ? rect.slice(0, 4)
      : [rect.r0, rect.r1, rect.c0, rect.c1];
  }

  function rectKey(rect) {
    return rect.join(",");
  }

  function normalizePieces(pieces) {
    return pieces.map(rectArray).sort((a, b) => rectKey(a).localeCompare(rectKey(b)));
  }

  function stateKey(pieces) {
    return normalizePieces(pieces).map(rectKey).join("|");
  }

  function isUniform(matrix, rect) {
    const first = matrix[rect[0]][rect[2]];
    for (let r = rect[0]; r < rect[1]; r += 1) {
      for (let c = rect[2]; c < rect[3]; c += 1) {
        if (matrix[r][c] !== first) return false;
      }
    }
    return true;
  }

  function enumerateCuts(pieces) {
    const cuts = [];
    pieces.forEach((piece, pieceIndex) => {
      for (let row = piece[0] + 1; row < piece[1]; row += 1) {
        cuts.push({ axis: "h", index: row, piece: piece.slice(), pieceIndex });
      }
      for (let col = piece[2] + 1; col < piece[3]; col += 1) {
        cuts.push({ axis: "v", index: col, piece: piece.slice(), pieceIndex });
      }
    });
    return cuts;
  }

  function applyCut(matrix, piecesInput, cut) {
    const pieces = normalizePieces(piecesInput);
    const targetKey = rectKey(rectArray(cut.piece));
    const targetIndex = pieces.findIndex((piece) => rectKey(piece) === targetKey);
    if (targetIndex < 0) return null;
    const target = pieces[targetIndex];
    let children;
    if (cut.axis === "h" && cut.index > target[0] && cut.index < target[1]) {
      children = [
        [target[0], cut.index, target[2], target[3]],
        [cut.index, target[1], target[2], target[3]]
      ];
    } else if (cut.axis === "v" && cut.index > target[2] && cut.index < target[3]) {
      children = [
        [target[0], target[1], target[2], cut.index],
        [target[0], target[1], cut.index, target[3]]
      ];
    } else {
      return null;
    }
    const next = pieces.filter((_, index) => index !== targetIndex);
    children.forEach((child) => {
      if (!isUniform(matrix, child)) next.push(child);
    });
    return normalizePieces(next);
  }

  function solve(level, piecesInput, maxDepth) {
    const matrix = level.matrix;
    const initial = normalizePieces(piecesInput || [[0, level.rows, 0, level.cols]]);
    if (!initial.length) return [];
    const memo = new Map();

    function solveRect(rect) {
      const key = rectKey(rect);
      if (memo.has(key)) return memo.get(key);
      if (isUniform(matrix, rect)) {
        const solved = { cost: 0, path: [] };
        memo.set(key, solved);
        return solved;
      }
      let best = null;
      const consider = (axis, index, first, second) => {
        const a = solveRect(first);
        const b = solveRect(second);
        const candidate = {
          cost: 1 + a.cost + b.cost,
          path: [{ axis, index, piece: rect.slice() }].concat(a.path, b.path)
        };
        if (!best || candidate.cost < best.cost) best = candidate;
      };
      for (let row = rect[0] + 1; row < rect[1]; row += 1) {
        consider("h", row,
          [rect[0], row, rect[2], rect[3]],
          [row, rect[1], rect[2], rect[3]]);
      }
      for (let col = rect[2] + 1; col < rect[3]; col += 1) {
        consider("v", col,
          [rect[0], rect[1], rect[2], col],
          [rect[0], rect[1], col, rect[3]]);
      }
      memo.set(key, best);
      return best;
    }

    const combined = { cost: 0, path: [] };
    initial.forEach((piece) => {
      const result = solveRect(piece);
      combined.cost += result.cost;
      combined.path.push(...result.path);
    });
    return combined.cost <= maxDepth ? combined.path : null;
  }

  function mulberry32(seed) {
    let value = seed >>> 0;
    return function random() {
      value += 0x6D2B79F5;
      let t = value;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function shuffle(items, random) {
    const copy = items.slice();
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function targetMovesFor(levelNumber) {
    if (levelNumber === 1) return 1;
    if (levelNumber <= 4) return 2;
    if (levelNumber <= 10) return 3;
    if (levelNumber <= 18) return levelNumber % 3 === 0 ? 4 : 3;
    if (levelNumber <= 30) return 4;
    if (levelNumber <= 45) return levelNumber % 4 === 0 ? 5 : 4;
    if (levelNumber <= 65) return levelNumber % 3 === 0 ? 4 : 5;
    return 5;
  }

  const DIMENSION_BANDS = [
    [[3, 3], [3, 4], [4, 3], [4, 4], [5, 3], [3, 5], [5, 4]],
    [[4, 4], [5, 4], [4, 5], [5, 5], [6, 4], [4, 6]],
    [[5, 4], [6, 4], [5, 5], [6, 5], [7, 4], [5, 6]],
    [[6, 5], [7, 5], [6, 6], [8, 5], [7, 4], [5, 7]],
    [[7, 5], [8, 5], [7, 6], [8, 6], [6, 6], [6, 8]]
  ];

  function dimensionsFor(levelNumber) {
    const band = levelNumber <= 10 ? 0 : levelNumber <= 25 ? 1 : levelNumber <= 45 ? 2 : levelNumber <= 70 ? 3 : 4;
    const choices = DIMENSION_BANDS[band];
    return choices[(levelNumber * 5 + band * 3) % choices.length];
  }

  function activeCountFor(levelNumber, moves) {
    if (moves === 1) return 2;
    if (moves === 2) return levelNumber % 2 === 0 ? 2 : 3;
    if (moves === 3) return levelNumber % 3 === 0 ? 3 : 4;
    if (moves === 4) return levelNumber % 3 === 0 ? 5 : 4;
    return levelNumber % 4 === 0 ? 4 : 5;
  }

  function partitionBoard(rows, cols, leafCount, random) {
    const leaves = [[0, rows, 0, cols]];
    while (leaves.length < leafCount) {
      const candidates = leaves
        .map((rect, index) => ({ rect, index, area: (rect[1] - rect[0]) * (rect[3] - rect[2]) }))
        .filter(({ rect }) => rect[1] - rect[0] > 1 || rect[3] - rect[2] > 1)
        .sort((a, b) => b.area - a.area);
      if (!candidates.length) return null;
      const poolSize = Math.min(3, candidates.length);
      const chosen = candidates[Math.floor(random() * poolSize)];
      const rect = chosen.rect;
      const height = rect[1] - rect[0];
      const width = rect[3] - rect[2];
      let axis;
      if (height === 1) axis = "v";
      else if (width === 1) axis = "h";
      else if (width / height > 1.35) axis = "v";
      else if (height / width > 1.35) axis = "h";
      else axis = random() < 0.5 ? "h" : "v";
      let children;
      if (axis === "h") {
        const span = height - 1;
        const offset = height >= 4
          ? Math.max(1, Math.min(span, Math.round(height * (0.3 + random() * 0.4))))
          : 1 + Math.floor(random() * span);
        const split = rect[0] + offset;
        children = [[rect[0], split, rect[2], rect[3]], [split, rect[1], rect[2], rect[3]]];
      } else {
        const span = width - 1;
        const offset = width >= 4
          ? Math.max(1, Math.min(span, Math.round(width * (0.3 + random() * 0.4))))
          : 1 + Math.floor(random() * span);
        const split = rect[2] + offset;
        children = [[rect[0], rect[1], rect[2], split], [rect[0], rect[1], split, rect[3]]];
      }
      leaves.splice(chosen.index, 1, children[0], children[1]);
    }
    return leaves;
  }

  function canonicalMatrixKey(matrix) {
    const map = new Map();
    let next = 0;
    return matrix.map((row) => row.map((cell) => {
      if (!map.has(cell)) map.set(cell, next++);
      return map.get(cell);
    }).join("")).join("/");
  }

  function buildCandidate(levelNumber, rows, cols, moves, activeCount, seed) {
    const random = mulberry32(seed);
    const leaves = partitionBoard(rows, cols, moves + 1, random);
    if (!leaves) return null;
    const leafOrder = shuffle(leaves.map((_, i) => i), random);
    const assignments = Array(leaves.length).fill(0);
    for (let i = 0; i < activeCount; i += 1) assignments[leafOrder[i]] = i;
    for (let i = activeCount; i < leafOrder.length; i += 1) {
      assignments[leafOrder[i]] = Math.floor(random() * activeCount);
    }
    const fabricIds = shuffle([0, 1, 2, 3, 4, 5, 6, 7], random).slice(0, activeCount);
    const matrix = Array.from({ length: rows }, () => Array(cols).fill(-1));
    leaves.forEach((rect, index) => {
      const fabric = fabricIds[assignments[index]];
      for (let r = rect[0]; r < rect[1]; r += 1) {
        for (let c = rect[2]; c < rect[3]; c += 1) matrix[r][c] = fabric;
      }
    });
    const used = [...new Set(matrix.flat())].sort((a, b) => a - b);
    if (used.length !== activeCount) return null;
    const counts = {};
    matrix.flat().forEach((fabric) => { counts[fabric] = (counts[fabric] || 0) + 1; });
    const candidate = {
      number: levelNumber,
      rows,
      cols,
      matrix,
      activeTypes: used,
      counts,
      moves,
      optimalMoves: moves,
      solution: []
    };
    const solution = solve(candidate, [[0, rows, 0, cols]], moves);
    if (!solution || solution.length !== moves) return null;
    candidate.solution = solution;
    candidate.patternKey = `${rows}x${cols}:${canonicalMatrixKey(matrix)}`;
    return candidate;
  }

  function generateLevels() {
    const levels = [];
    const patterns = new Set();
    for (let number = 1; number <= 90; number += 1) {
      const [cols, rows] = dimensionsFor(number);
      const moves = targetMovesFor(number);
      const activeCount = Math.min(moves + 1, activeCountFor(number, moves));
      let level = null;
      for (let attempt = 0; attempt < 4000 && !level; attempt += 1) {
        const seed = 0xC41C0000 + number * 7919 + attempt * 104729;
        const candidate = buildCandidate(number, rows, cols, moves, activeCount, seed);
        if (candidate && !patterns.has(candidate.patternKey)) level = candidate;
      }
      if (!level) throw new Error(`Could not generate Chic Cuts level ${number}`);
      patterns.add(level.patternKey);
      levels.push(Object.freeze(level));
    }
    return Object.freeze(levels);
  }

  function validateLevels(levels) {
    const errors = [];
    if (levels.length !== 90) errors.push(`Expected 90 levels, got ${levels.length}`);
    levels.forEach((level, index) => {
      if (level.number !== index + 1) errors.push(`Level number mismatch at ${index + 1}`);
      if (level.matrix.length !== level.rows || level.matrix.some((row) => row.length !== level.cols)) {
        errors.push(`Level ${level.number} has an invalid matrix size`);
      }
      if (level.rows < 2 || level.cols < 2 || level.rows > 8 || level.cols > 8) {
        errors.push(`Level ${level.number} dimensions are outside the approved range`);
      }
      if (level.activeTypes.length < 2 || level.activeTypes.length > 5) {
        errors.push(`Level ${level.number} uses ${level.activeTypes.length} fabric types`);
      }
      if (level.moves < 1 || level.moves > 5) errors.push(`Level ${level.number} move budget is invalid`);
      const solved = solve(level, [[0, level.rows, 0, level.cols]], level.moves);
      if (!solved || solved.length !== level.optimalMoves) errors.push(`Level ${level.number} solver validation failed`);
    });
    return errors;
  }

  const levels = generateLevels();
  const validationErrors = validateLevels(levels);
  if (validationErrors.length) throw new Error(validationErrors.join("; "));

  window.ChicSolver = Object.freeze({ solve, applyCut, enumerateCuts, isUniform, stateKey, validateLevels });
  window.ChicLevels = levels;
})();
