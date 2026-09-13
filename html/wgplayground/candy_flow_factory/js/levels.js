(function () {
  "use strict";

  var COLORS = ["red", "yellow", "blue", "green", "purple", "pink", "orange", "cyan"];

  function seededRandom(seed) {
    var value = seed >>> 0;
    return function () {
      value = (value * 1664525 + 1013904223) >>> 0;
      return value / 4294967296;
    };
  }

  function rowSnake(rows, cols) {
    var cells = [];
    var r;
    var c;
    for (r = 0; r < rows; r += 1) {
      if (r % 2 === 0) {
        for (c = 0; c < cols; c += 1) cells.push([r, c]);
      } else {
        for (c = cols - 1; c >= 0; c -= 1) cells.push([r, c]);
      }
    }
    return cells;
  }

  function columnSnake(rows, cols) {
    var cells = [];
    var r;
    var c;
    for (c = 0; c < cols; c += 1) {
      if (c % 2 === 0) {
        for (r = 0; r < rows; r += 1) cells.push([r, c]);
      } else {
        for (r = rows - 1; r >= 0; r -= 1) cells.push([r, c]);
      }
    }
    return cells;
  }

  function spiral(rows, cols) {
    var cells = [];
    var top = 0;
    var bottom = rows - 1;
    var left = 0;
    var right = cols - 1;
    var r;
    var c;
    while (top <= bottom && left <= right) {
      for (c = left; c <= right; c += 1) cells.push([top, c]);
      top += 1;
      for (r = top; r <= bottom; r += 1) cells.push([r, right]);
      right -= 1;
      if (top <= bottom) {
        for (c = right; c >= left; c -= 1) cells.push([bottom, c]);
        bottom -= 1;
      }
      if (left <= right) {
        for (r = bottom; r >= top; r -= 1) cells.push([r, left]);
        left += 1;
      }
    }
    return cells;
  }

  function rowLadder(rows, cols) {
    if (cols % 2 === 0) return rowSnake(rows, cols);
    var cells = [];
    var direction = 1;
    var row;
    var step;
    var c;
    for (row = 0; row < rows; row += 2) {
      if (row === rows - 1) {
        if (direction > 0) for (c = 0; c < cols; c += 1) cells.push([row, c]);
        else for (c = cols - 1; c >= 0; c -= 1) cells.push([row, c]);
      } else {
        for (step = 0; step < cols; step += 1) {
          c = direction > 0 ? step : cols - 1 - step;
          if (step % 2 === 0) {
            cells.push([row, c]);
            cells.push([row + 1, c]);
          } else {
            cells.push([row + 1, c]);
            cells.push([row, c]);
          }
        }
      }
      direction *= -1;
    }
    return cells;
  }

  function columnLadder(rows, cols) {
    var transposed = rowLadder(cols, rows);
    return transposed.map(function (cell) { return [cell[1], cell[0]]; });
  }

  function basePaths(rows, cols) {
    var paths = [rowSnake(rows, cols), columnSnake(rows, cols), spiral(rows, cols)];
    if (cols % 2 === 1) paths.push(rowLadder(rows, cols));
    if (rows % 2 === 1) paths.push(columnLadder(rows, cols));
    return paths;
  }

  function transformPath(cells, rows, cols, mode, reverse) {
    var result = cells.map(function (cell) {
      if (mode === 1) return [cell[0], cols - 1 - cell[1]];
      if (mode === 2) return [rows - 1 - cell[0], cell[1]];
      if (mode === 3) return [rows - 1 - cell[0], cols - 1 - cell[1]];
      return [cell[0], cell[1]];
    });
    if (reverse) result.reverse();
    return result;
  }

  function shuffledColors(count, random) {
    var colors = COLORS.slice(0, count);
    var i;
    var j;
    var temporary;
    for (i = colors.length - 1; i > 0; i -= 1) {
      j = Math.floor(random() * (i + 1));
      temporary = colors[i];
      colors[i] = colors[j];
      colors[j] = temporary;
    }
    return colors;
  }

  function partitionLengths(total, count, random) {
    var minimum = 3;
    var lengths = [];
    var i;
    var remaining = total - count * minimum;
    var softMaximum = Math.ceil(total / count) + 4;
    for (i = 0; i < count; i += 1) lengths.push(minimum);
    while (remaining > 0) {
      var index = Math.floor(random() * count);
      if (lengths[index] < softMaximum) {
        lengths[index] += 1;
        remaining -= 1;
      }
    }
    for (i = lengths.length - 1; i > 0; i -= 1) {
      var swapIndex = Math.floor(random() * (i + 1));
      var temporary = lengths[i];
      lengths[i] = lengths[swapIndex];
      lengths[swapIndex] = temporary;
    }
    return lengths;
  }

  function progression(id) {
    var config;
    if (id <= 5) config = { start: 1, end: 5, rows: 5, cols: 5, low: 2, high: 3 };
    else if (id <= 10) config = { start: 6, end: 10, rows: 5, cols: 5, low: 3, high: 4 };
    else if (id <= 20) config = { start: 11, end: 20, rows: 5, cols: 6, low: 3, high: 4 };
    else if (id <= 30) config = { start: 21, end: 30, rows: 6, cols: 6, low: 4, high: 5 };
    else if (id <= 40) config = { start: 31, end: 40, rows: 6, cols: 7, low: 4, high: 5 };
    else if (id <= 50) config = { start: 41, end: 50, rows: 6, cols: 7, low: 5, high: 6 };
    else if (id <= 60) config = { start: 51, end: 60, rows: 6, cols: 8, low: 5, high: 6 };
    else if (id <= 70) config = { start: 61, end: 70, rows: 6, cols: 8, low: 6, high: 7 };
    else if (id <= 80) config = { start: 71, end: 80, rows: 6, cols: 8, low: 6, high: 7 };
    else if (id <= 89) config = { start: 81, end: 89, rows: 6, cols: 8, low: 7, high: 8 };
    else config = { start: 90, end: 90, rows: 6, cols: 8, low: 8, high: 8 };
    var span = config.end - config.start + 1;
    var position = id - config.start;
    var pairCount = config.low;
    if (config.high > config.low && position >= Math.floor(span / 2)) pairCount = config.high;
    return {
      rows: config.rows,
      cols: config.cols,
      pairCount: pairCount
    };
  }

  function centeredOffset(total, active, id) {
    var gap = total - active;
    var offset = Math.floor(gap / 2);
    if (gap % 2 === 1 && id % 2 === 0) offset += 1;
    return offset;
  }

  function routeTurns(route) {
    var turns = 0;
    var previousDirection = null;
    var i;
    for (i = 1; i < route.length; i += 1) {
      var direction = [route[i][0] - route[i - 1][0], route[i][1] - route[i - 1][1]];
      if (previousDirection && (direction[0] !== previousDirection[0] || direction[1] !== previousDirection[1])) turns += 1;
      previousDirection = direction;
    }
    return turns;
  }

  function candidateQuality(pairs, pairCount, relaxed) {
    var requiredDistance = pairCount <= 2 ? 4 : pairCount <= 4 ? 3 : 2;
    if (relaxed) requiredDistance = Math.max(2, requiredDistance - 1);
    var totalTurns = 0;
    var totalDetour = 0;
    var straightRoutes = 0;
    var i;
    for (i = 0; i < pairs.length; i += 1) {
      var pair = pairs[i];
      var distance = Math.abs(pair.start[0] - pair.end[0]) + Math.abs(pair.start[1] - pair.end[1]);
      var turns = routeTurns(pair.solution);
      if (distance < requiredDistance) return null;
      if (turns === 0) straightRoutes += 1;
      totalTurns += turns;
      totalDetour += Math.max(0, pair.solution.length - 1 - distance);
    }
    if (!relaxed && straightRoutes > Math.max(1, Math.floor(pairCount / 4))) return null;
    var score = pairCount * 6 + totalTurns * 3 + totalDetour * 2;
    if (!relaxed && score < pairCount * 9) return null;
    return score;
  }

  function localTransform(cell, rows, cols, mode) {
    var r = cell[0];
    var c = cell[1];
    if (mode === 1) return [r, cols - 1 - c];
    if (mode === 2) return [rows - 1 - r, c];
    if (mode === 3) return [rows - 1 - r, cols - 1 - c];
    if (mode === 4) return [c, r];
    if (mode === 5) return [c, rows - 1 - r];
    if (mode === 6) return [cols - 1 - c, r];
    if (mode === 7) return [cols - 1 - c, rows - 1 - r];
    return [r, c];
  }

  function endpointSignature(level) {
    var symmetryCount = level.activeRows === level.activeColumns ? 8 : 4;
    var variants = [];
    var mode;
    for (mode = 0; mode < symmetryCount; mode += 1) {
      var pairCodes = [];
      var i;
      for (i = 0; i < level.pairs.length; i += 1) {
        var pair = level.pairs[i];
        var start = [pair.start[0] - level.activeOffsetRow, pair.start[1] - level.activeOffsetColumn];
        var end = [pair.end[0] - level.activeOffsetRow, pair.end[1] - level.activeOffsetColumn];
        start = localTransform(start, level.activeRows, level.activeColumns, mode);
        end = localTransform(end, level.activeRows, level.activeColumns, mode);
        var a = start[0] + "," + start[1];
        var b = end[0] + "," + end[1];
        pairCodes.push(a < b ? a + "-" + b : b + "-" + a);
      }
      pairCodes.sort();
      variants.push(pairCodes.join("|"));
    }
    variants.sort();
    return level.activeRows + "x" + level.activeColumns + ":" + variants[0];
  }

  function buildCandidate(id, config, attempt) {
    var random = seededRandom(id * 982451653 + attempt * 961748927 + 12345);
    var paths = basePaths(config.rows, config.cols);
    var base = paths[Math.floor(random() * paths.length)];
    var transformed = transformPath(base, config.rows, config.cols, Math.floor(random() * 4), random() > 0.5);
    var lengths = partitionLengths(config.rows * config.cols, config.pairCount, random);
    var colors = shuffledColors(config.pairCount, random);
    var offsetRow = centeredOffset(6, config.rows, id);
    var offsetColumn = centeredOffset(8, config.cols, id);
    var pairs = [];
    var cursor = 0;
    var i;
    for (i = 0; i < config.pairCount; i += 1) {
      var localRoute = transformed.slice(cursor, cursor + lengths[i]);
      var route = localRoute.map(function (cell) {
        return [cell[0] + offsetRow, cell[1] + offsetColumn];
      });
      pairs.push({
        color: colors[i],
        start: route[0],
        end: route[route.length - 1],
        solution: route
      });
      cursor += lengths[i];
    }
    var quality = candidateQuality(pairs, config.pairCount, attempt >= 1400);
    if (quality === null) return null;
    return {
      id: id,
      activeRows: config.rows,
      activeColumns: config.cols,
      activeOffsetRow: offsetRow,
      activeOffsetColumn: offsetColumn,
      pairs: pairs,
      tutorialStep: id <= 4 ? id : 0,
      difficultyScore: quality,
      difficultyLabel: id <= 10 ? "sweet-start" : id <= 40 ? "tricky" : id <= 70 ? "challenging" : "master"
    };
  }

  function generateLevels() {
    var levels = [];
    var signatures = [];
    var used = Object.create(null);
    var id;
    for (id = 1; id <= 90; id += 1) {
      var config = progression(id);
      var chosen = null;
      var signature = "";
      var attempt;
      for (attempt = 0; attempt < 3000; attempt += 1) {
        var candidate = buildCandidate(id, config, attempt);
        if (!candidate) continue;
        signature = endpointSignature(candidate);
        if (used[signature]) continue;
        chosen = candidate;
        break;
      }
      if (!chosen) throw new Error("Unable to create a distinct puzzle for level " + id);
      used[signature] = true;
      signatures.push(signature);
      levels.push(chosen);
    }
    return { levels: levels, signatures: signatures };
  }

  function key(cell) {
    return cell[0] + "," + cell[1];
  }

  function validate(level) {
    var errors = [];
    var active = Object.create(null);
    var used = Object.create(null);
    var seenColors = Object.create(null);
    var r;
    var c;
    var i;
    for (r = level.activeOffsetRow; r < level.activeOffsetRow + level.activeRows; r += 1) {
      for (c = level.activeOffsetColumn; c < level.activeOffsetColumn + level.activeColumns; c += 1) active[r + "," + c] = true;
    }
    for (i = 0; i < level.pairs.length; i += 1) {
      var pair = level.pairs[i];
      if (seenColors[pair.color]) errors.push("Duplicate color " + pair.color);
      seenColors[pair.color] = true;
      if (key(pair.start) !== key(pair.solution[0])) errors.push(pair.color + " start mismatch");
      if (key(pair.end) !== key(pair.solution[pair.solution.length - 1])) errors.push(pair.color + " end mismatch");
      var routeIndex;
      for (routeIndex = 0; routeIndex < pair.solution.length; routeIndex += 1) {
        var cell = pair.solution[routeIndex];
        var cellKey = key(cell);
        if (!active[cellKey]) errors.push(pair.color + " leaves active board at " + cellKey);
        if (used[cellKey]) errors.push("Solution overlap at " + cellKey);
        used[cellKey] = pair.color;
        if (routeIndex > 0) {
          var previous = pair.solution[routeIndex - 1];
          if (Math.abs(previous[0] - cell[0]) + Math.abs(previous[1] - cell[1]) !== 1) errors.push(pair.color + " has a non-orthogonal step");
        }
      }
    }
    var expected = progression(level.id);
    if (level.pairs.length !== expected.pairCount) errors.push("Expected " + expected.pairCount + " pairs, found " + level.pairs.length);
    if (Object.keys(used).length !== level.activeRows * level.activeColumns) errors.push("Canonical routes do not cover the active board");
    return errors;
  }

  var generated = generateLevels();
  var levels = generated.levels;
  var validationErrors = [];
  var signatureCheck = Object.create(null);
  var i;
  for (i = 0; i < levels.length; i += 1) {
    var levelErrors = validate(levels[i]);
    var errorIndex;
    for (errorIndex = 0; errorIndex < levelErrors.length; errorIndex += 1) {
      validationErrors.push("Level " + levels[i].id + ": " + levelErrors[errorIndex]);
    }
    if (signatureCheck[generated.signatures[i]]) validationErrors.push("Level " + levels[i].id + ": duplicate endpoint layout");
    signatureCheck[generated.signatures[i]] = true;
  }
  if (levels[0].pairs.length !== 2) validationErrors.push("Level 1 must begin with two pairs");
  if (levels[89].pairs.length !== 8) validationErrors.push("Level 90 must use eight pairs");

  window.CandyLevels = {
    colors: COLORS,
    levels: levels,
    signatures: generated.signatures,
    validate: validate,
    progression: progression,
    validationErrors: validationErrors
  };
}());
