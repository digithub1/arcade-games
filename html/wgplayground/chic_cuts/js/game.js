(function () {
  "use strict";

  const C = window.ChicConfig;
  const LEVELS = window.ChicLevels;
  const Solver = window.ChicSolver;
  const canvas = document.getElementById("game");
  const ctx = canvas.getContext("2d", { alpha: false });
  const fatal = document.getElementById("fatal-error");
  const fatalDetail = document.getElementById("fatal-error-detail");

  const state = {
    screen: "loading",
    page: 1,
    level: null,
    levelNumber: 1,
    pieces: [],
    pieceOffsets: {},
    seams: [],
    moves: 0,
    history: [],
    inputLocked: true,
    pointer: { x: -100, y: -100, visible: false, down: false, pointerType: "mouse" },
    cutGesture: null,
    cutPreview: null,
    cutFlash: null,
    hintCut: null,
    hintUntil: 0,
    tutorialActive: false,
    tutorialStartedAt: 0,
    collectionAnimations: [],
    basketPulses: {},
    burstParticles: [],
    ambientParticles: [],
    toast: null,
    transition: { alpha: 0, direction: 0 },
    pressed: null,
    pageSlide: 0,
    screenEnteredAt: performance.now(),
    lastTime: performance.now(),
    fpsSampleStarted: performance.now(),
    fpsFrameCount: 0,
    fps: 0,
    loadProgress: 0,
    loaded: false,
    currentGrid: null,
    save: loadSave(),
    rewardPending: false,
    rewardedAvailable: false,
    rewardModalOpen: false,
    pendingRewardCut: null,
    adBusy: false,
    adActive: false,
    adRestoreInputLocked: true
  };

  const images = {};
  const audio = new window.ChicAudioManager(C.AUDIO);
  const rewardWatchRect = { x: 448, y: 445, w: 180, h: 66 };
  const rewardCancelRect = { x: 652, y: 445, w: 180, h: 66 };

  function syncAudioSuspension() {
    audio.setSuspended(state.adActive || document.hidden);
  }

  function setAdPaused(value) {
    const paused = value === true;
    if (paused && !state.adActive) {
      state.adActive = true;
      state.adRestoreInputLocked = state.inputLocked;
      state.inputLocked = true;
      state.pointer.down = false;
      state.cutGesture = null;
      state.cutPreview = null;
    } else if (!paused && state.adActive) {
      state.adActive = false;
      state.inputLocked = state.adRestoreInputLocked;
    }
    syncAudioSuspension();
  }

  function connectWGPlayer() {
    const ads = window.ChicWGPlayerAds;
    if (!ads) return;
    ads.setHooks({
      pause: () => setAdPaused(true),
      resume: () => setAdPaused(false),
      rewardedComplete: () => finishRewardedHint(true),
      rewardedFailed: () => finishRewardedHint(false),
      rewardAvailability: (available) => { state.rewardedAvailable = !!available; }
    });
    if (ads.isAdActive()) setAdPaused(true);
    state.rewardedAvailable = ads.isRewardAvailable();
  }

  function runInterstitialAction(action) {
    if (state.adBusy || state.adActive) return;
    state.adBusy = true;
    let finished = false;
    const continueAction = () => {
      if (finished) return;
      finished = true;
      state.adBusy = false;
      action();
    };
    const ads = window.ChicWGPlayerAds;
    if (!ads) {
      continueAction();
      return;
    }
    try {
      ads.showInterstitial(continueAction);
    } catch (_) {
      continueAction();
    }
  }

  audio.setEnabled(state.save.audioEnabled);

  function defaultSave() {
    return {
      version: C.SAVE_VERSION,
      highestUnlocked: 1,
      completed: [],
      hints: C.INITIAL_HINTS,
      audioEnabled: true
    };
  }

  function loadSave() {
    try {
      const raw = localStorage.getItem(C.SAVE_KEY);
      if (!raw) return defaultSave();
      const parsed = JSON.parse(raw);
      const completed = Array.isArray(parsed.completed)
        ? [...new Set(parsed.completed.filter((n) => Number.isInteger(n) && n >= 1 && n <= 90))]
        : [];
      return {
        version: C.SAVE_VERSION,
        highestUnlocked: Math.max(1, Math.min(90, Number(parsed.highestUnlocked) || 1)),
        completed,
        hints: Math.max(0, Math.floor(Number(parsed.hints) || 0)),
        audioEnabled: typeof parsed.audioEnabled === "boolean" ? parsed.audioEnabled : true
      };
    } catch (_) {
      return defaultSave();
    }
  }

  function persistSave() {
    try {
      localStorage.setItem(C.SAVE_KEY, JSON.stringify(state.save));
    } catch (_) {}
  }

  function allImagePaths() {
    return [...Object.values(C.IMAGES), ...C.FABRICS, ...C.BASKETS];
  }

  function preloadImages() {
    const entries = allImagePaths();
    let settled = 0;
    return Promise.all(entries.map((src) => new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => {
        images[src] = image;
        settled += 1;
        state.loadProgress = settled / entries.length;
        resolve();
      };
      image.onerror = () => reject(new Error(`Missing required asset: ${src}`));
      image.src = src;
    })));
  }

  function image(path) {
    return images[path];
  }

  function rectContains(rect, x, y, padding = 0) {
    return x >= rect.x - padding && x <= rect.x + rect.w + padding && y >= rect.y - padding && y <= rect.y + rect.h + padding;
  }

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - Math.max(0, Math.min(1, t)), 3);
  }

  function easeOutBack(t) {
    const clamped = Math.max(0, Math.min(1, t));
    const c1 = 1.70158;
    const c3 = c1 + 1;
    return 1 + c3 * Math.pow(clamped - 1, 3) + c1 * Math.pow(clamped - 1, 2);
  }

  function drawImageRect(path, rect, alpha = 1) {
    const img = image(path);
    if (!img) return;
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.drawImage(img, rect.x, rect.y, rect.w, rect.h);
    ctx.restore();
  }

  function drawButton(path, rect, id, enabled = true, alpha = 1) {
    const active = state.pressed && state.pressed.id === id;
    const hovered = enabled && state.pointer.visible && rectContains(rect, state.pointer.x, state.pointer.y);
    const entered = easeOutBack((performance.now() - state.screenEnteredAt) / 360);
    const entryScale = 0.86 + entered * 0.14;
    const hoverScale = hovered ? 1.045 + Math.sin(performance.now() * 0.008) * 0.004 : 1;
    const scale = (active ? 0.92 : hoverScale) * entryScale;
    ctx.save();
    ctx.globalAlpha = enabled ? alpha : alpha * 0.48;
    ctx.translate(rect.x + rect.w / 2, rect.y + rect.h / 2);
    ctx.scale(scale, scale);
    if (hovered && !active) {
      ctx.shadowColor = "rgba(255,225,132,.8)";
      ctx.shadowBlur = 13;
    }
    const img = image(path);
    if (img) ctx.drawImage(img, -rect.w / 2, -rect.h / 2, rect.w, rect.h);
    ctx.restore();
  }

  function drawCenteredText(text, x, y, size, color = "#fff", weight = 800, shadow = true) {
    ctx.save();
    ctx.font = `${weight} ${size}px "Roboto Chic", Roboto, sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    if (shadow) {
      ctx.shadowColor = "rgba(60,25,25,.55)";
      ctx.shadowBlur = 3;
      ctx.shadowOffsetY = 2;
    }
    ctx.fillStyle = color;
    ctx.fillText(String(text), x, y);
    ctx.restore();
  }

  function switchScreen(screen) {
    state.screen = screen;
    state.inputLocked = false;
    state.cutGesture = null;
    state.cutPreview = null;
    state.hintCut = null;
    state.screenEnteredAt = performance.now();
    state.transition.alpha = 1;
    state.transition.direction = -1;
    canvas.classList.remove("scissors-cursor");
    resetAmbient(screen);
  }

  function automaticSelectPage() {
    if (state.save.completed.length === 90) return 1;
    return Math.floor((state.save.highestUnlocked - 1) / 30) + 1;
  }

  function openSelect() {
    state.page = automaticSelectPage();
    switchScreen("select");
  }

  function computeGrid(level) {
    const inner = C.BOARD_INNER;
    const tile = Math.min(C.MAX_TILE_SIZE, inner.w / level.cols, inner.h / level.rows);
    const width = tile * level.cols;
    const height = tile * level.rows;
    return {
      x: inner.x + (inner.w - width) / 2,
      y: inner.y + (inner.h - height) / 2,
      w: width,
      h: height,
      tile,
      rows: level.rows,
      cols: level.cols
    };
  }

  function startLevel(levelNumber) {
    const level = LEVELS[levelNumber - 1];
    state.level = level;
    state.levelNumber = levelNumber;
    state.pieces = [[0, level.rows, 0, level.cols]];
    state.pieceOffsets = { [`0,${level.rows},0,${level.cols}`]: { x: 0, y: 0 } };
    state.seams = [];
    state.moves = level.moves;
    state.history = [];
    state.collectionAnimations = [];
    state.basketPulses = {};
    state.cutFlash = null;
    state.hintCut = null;
    state.tutorialActive = levelNumber === 1;
    state.tutorialStartedAt = performance.now();
    state.rewardModalOpen = false;
    state.pendingRewardCut = null;
    state.rewardPending = false;
    state.currentGrid = computeGrid(level);
    switchScreen("gameplay");
  }

  function restartLevel() {
    audio.play("click");
    startLevel(state.levelNumber);
  }

  function activeCellsByType() {
    const active = {};
    state.pieces.forEach((piece) => {
      for (let r = piece[0]; r < piece[1]; r += 1) {
        for (let c = piece[2]; c < piece[3]; c += 1) {
          const type = state.level.matrix[r][c];
          active[type] = (active[type] || 0) + 1;
        }
      }
    });
    return active;
  }

  function collectedCounts() {
    const active = activeCellsByType();
    const inFlight = {};
    state.collectionAnimations.forEach((animation) => {
      const cells = (animation.rect[1] - animation.rect[0]) * (animation.rect[3] - animation.rect[2]);
      inFlight[animation.type] = (inFlight[animation.type] || 0) + cells;
    });
    const result = {};
    state.level.activeTypes.forEach((type) => {
      const total = state.level.counts[type];
      const collected = Math.max(0, total - (active[type] || 0) - (inFlight[type] || 0));
      result[type] = { collected, total };
    });
    return result;
  }

  function basketRows() {
    const types = state.level.activeTypes;
    const panel = C.BASKET_PANEL;
    const basketW = 57;
    const basketH = 51.6;
    const step = types.length >= 5 ? 68 : 76;
    const groupH = basketH + Math.max(0, types.length - 1) * step;
    const startY = panel.y + (panel.h - groupH) / 2;
    return types.map((type, index) => ({
      type,
      x: panel.x + 19,
      y: startY + step * index,
      w: basketW,
      h: basketH,
      textX: panel.x + 115,
      textY: startY + step * index + basketH / 2 + 4
    }));
  }

  function snapshotGame() {
    return {
      pieces: state.pieces.map((piece) => piece.slice()),
      pieceOffsets: Object.fromEntries(Object.entries(state.pieceOffsets).map(([key, value]) => [key, { ...value }])),
      seams: state.seams.map((seam) => ({ ...seam, piece: seam.piece.slice() })),
      moves: state.moves
    };
  }

  function undo() {
    if (state.inputLocked || !state.history.length || state.screen !== "gameplay") return;
    const previous = state.history.pop();
    state.pieces = previous.pieces.map((piece) => piece.slice());
    state.pieceOffsets = Object.fromEntries(Object.entries(previous.pieceOffsets).map(([key, value]) => [key, { ...value }]));
    state.seams = previous.seams.map((seam) => ({ ...seam, piece: seam.piece.slice() }));
    state.moves = previous.moves;
    state.collectionAnimations = [];
    state.basketPulses = {};
    state.hintCut = null;
    audio.play("undo");
    addBurst(963, 646, "thread", 16);
  }

  function splitForCut(piece, axis, index) {
    if (axis === "h") {
      return [[piece[0], index, piece[2], piece[3]], [index, piece[1], piece[2], piece[3]]];
    }
    return [[piece[0], piece[1], piece[2], index], [piece[0], piece[1], index, piece[3]]];
  }

  function pieceKey(piece) {
    return piece.join(",");
  }

  function pieceOffset(piece) {
    return state.pieceOffsets[pieceKey(piece)] || { x: 0, y: 0 };
  }

  function queueCollection(rect, now, offset) {
    const type = state.level.matrix[rect[0]][rect[2]];
    const grid = state.currentGrid;
    const rows = basketRows();
    const target = rows.find((row) => row.type === type);
    const centerX = grid.x + ((rect[2] + rect[3]) / 2) * grid.tile + offset.x;
    const centerY = grid.y + ((rect[0] + rect[1]) / 2) * grid.tile + offset.y;
    state.collectionAnimations.push({
      rect: rect.slice(),
      type,
      startX: centerX,
      startY: centerY,
      targetX: target ? target.x + 28 : 100,
      targetY: target ? target.y + 25 : 300,
      started: now,
      duration: 650
    });
  }

  function commitCut(cut) {
    if (state.inputLocked) return;
    const targetKey = cut.piece.join(",");
    const pieceIndex = state.pieces.findIndex((piece) => piece.join(",") === targetKey);
    if (pieceIndex < 0) return invalidCut();
    const target = state.pieces[pieceIndex];
    const valid = cut.axis === "h"
      ? cut.index > target[0] && cut.index < target[1]
      : cut.index > target[2] && cut.index < target[3];
    if (!valid) return invalidCut();

    const now = performance.now();
    if (state.levelNumber === 1) state.tutorialActive = false;
    state.history.push(snapshotGame());
    const children = splitForCut(target, cut.axis, cut.index);
    const parentOffset = pieceOffset(target);
    const separation = 6;
    const childOffsets = cut.axis === "v"
      ? [{ x: parentOffset.x - separation, y: parentOffset.y }, { x: parentOffset.x + separation, y: parentOffset.y }]
      : [{ x: parentOffset.x, y: parentOffset.y - separation }, { x: parentOffset.x, y: parentOffset.y + separation }];
    state.pieces.splice(pieceIndex, 1);
    delete state.pieceOffsets[pieceKey(target)];
    let collected = 0;
    children.forEach((child, childIndex) => {
      const offset = childOffsets[childIndex];
      if (Solver.isUniform(state.level.matrix, child)) {
        queueCollection(child, now, offset);
        collected += 1;
      } else {
        state.pieces.push(child);
        state.pieceOffsets[pieceKey(child)] = offset;
      }
    });
    const visualCut = { ...cut, offset: { ...parentOffset } };
    state.seams.push({ axis: cut.axis, index: cut.index, piece: target.slice(), offset: { ...parentOffset } });
    state.moves -= 1;
    state.inputLocked = true;
    state.cutFlash = { ...visualCut, started: now, duration: 280 };
    state.hintCut = null;
    audio.play("cut");
    setTimeout(() => audio.play("separate", 0.75), 90);
    if (collected) {
      setTimeout(() => audio.play("collect", collected > 1 ? 0.72 : 0.9), 240);
      addBurstForCut(visualCut, "fiber", 24 + collected * 8);
    } else {
      addBurstForCut(visualCut, "glint", 16);
    }

    const resolutionDelay = collected ? 720 : 330;
    setTimeout(() => finishCutResolution(), resolutionDelay);
  }

  function finishCutResolution() {
    if (state.screen !== "gameplay") return;
    if (!state.pieces.length) {
      completeLevel();
      return;
    }
    if (state.moves <= 0) {
      state.inputLocked = true;
      setTimeout(() => {
        audio.play("over");
        showResult("gameover");
      }, 220);
      return;
    }
    state.inputLocked = false;
  }

  function invalidCut() {
    audio.play("invalid");
    state.toast = { text: "CUT ALONG A PIECE EDGE", until: performance.now() + 900, color: "#7a315e" };
    addBurst(state.pointer.x, state.pointer.y, "soft", 8);
  }

  function completeLevel() {
    state.inputLocked = true;
    if (!state.save.completed.includes(state.levelNumber)) state.save.completed.push(state.levelNumber);
    if (state.levelNumber < 90) state.save.highestUnlocked = Math.max(state.save.highestUnlocked, state.levelNumber + 1);
    persistSave();
    audio.play("complete");
    addBurst(640, 330, "celebrate", 72);
    setTimeout(() => showResult("complete"), 470);
  }

  function showResult(screen) {
    switchScreen(screen);
  }

  function determineCut(start, current) {
    const grid = state.currentGrid;
    if (!grid || !rectContains(grid, start.x, start.y, 28)) return null;
    const dx = current.x - start.x;
    const dy = current.y - start.y;
    const axis = Math.abs(dy) >= Math.abs(dx) ? "v" : "h";
    const distance = axis === "v" ? Math.abs(dy) : Math.abs(dx);
    let match = null;
    state.pieces.forEach((piece) => {
      const offset = pieceOffset(piece);
      if (axis === "v") {
        const index = Math.round((start.x - grid.x - offset.x) / grid.tile);
        const boundaryX = grid.x + index * grid.tile + offset.x;
        const insideY = start.y >= grid.y + piece[0] * grid.tile + offset.y - 16 && start.y <= grid.y + piece[1] * grid.tile + offset.y + 16;
        const error = Math.abs(start.x - boundaryX);
        if (index > piece[2] && index < piece[3] && insideY && error <= grid.tile * 0.48 && (!match || error < match.error)) {
          match = { piece, index, error };
        }
        return;
      }
      const index = Math.round((start.y - grid.y - offset.y) / grid.tile);
      const boundaryY = grid.y + index * grid.tile + offset.y;
      const insideX = start.x >= grid.x + piece[2] * grid.tile + offset.x - 16 && start.x <= grid.x + piece[3] * grid.tile + offset.x + 16;
      const error = Math.abs(start.y - boundaryY);
      if (index > piece[0] && index < piece[1] && insideX && error <= grid.tile * 0.48 && (!match || error < match.error)) {
        match = { piece, index, error };
      }
    });
    if (!match) return null;
    const candidate = match.piece;
    const required = axis === "v"
      ? Math.min(58, (candidate[1] - candidate[0]) * grid.tile * 0.26)
      : Math.min(58, (candidate[3] - candidate[2]) * grid.tile * 0.26);
    return { axis, index: match.index, piece: candidate.slice(), ready: distance >= required };
  }

  function useHint() {
    if (state.inputLocked || state.rewardPending) return;
    const solution = Solver.solve(state.level, state.pieces, Math.max(12, state.moves));
    if (!solution || !solution.length) {
      state.toast = { text: "NO SAFE CUT FOUND", until: performance.now() + 1100, color: "#7a315e" };
      return;
    }
    if (state.save.hints > 0) {
      state.save.hints -= 1;
      persistSave();
      revealHint(solution[0]);
      return;
    }
    if (window.ChicWGPlayerAds && window.ChicWGPlayerAds.isRewardAvailable()) {
      openRewardModal(solution[0]);
    } else {
      state.toast = { text: "NO REWARDED AD IS AVAILABLE RIGHT NOW", until: performance.now() + 1500, color: "#7a315e" };
      if (window.ChicWGPlayerAds) window.ChicWGPlayerAds.reconnect();
    }
  }

  function revealHint(cut) {
    state.hintCut = { axis: cut.axis, index: cut.index, piece: cut.piece.slice() };
    state.hintUntil = performance.now() + 2600;
    audio.play("hint");
    addBurst(1080, 625, "glint", 18);
  }

  function openRewardModal(cut) {
    state.pendingRewardCut = { axis: cut.axis, index: cut.index, piece: cut.piece.slice() };
    state.rewardModalOpen = true;
    state.inputLocked = true;
    state.pointer.down = false;
    state.cutGesture = null;
    state.cutPreview = null;
  }

  function closeRewardModal() {
    if (!state.rewardModalOpen || state.rewardPending) return;
    state.rewardModalOpen = false;
    state.pendingRewardCut = null;
    if (state.screen === "gameplay") state.inputLocked = false;
  }

  function watchRewardedHint() {
    if (!state.rewardModalOpen || state.rewardPending) return;
    state.rewardModalOpen = false;
    state.rewardPending = true;
    state.inputLocked = true;
    const ads = window.ChicWGPlayerAds;
    if (!ads || !ads.showRewarded()) finishRewardedHint(false);
  }

  function finishRewardedHint(success) {
    if (!state.rewardPending) return;
    const cut = state.pendingRewardCut;
    state.pendingRewardCut = null;
    state.rewardModalOpen = false;
    state.rewardPending = false;
    if (state.screen !== "gameplay") return;
    state.inputLocked = false;
    if (success && cut) {
      state.toast = { text: "REWARD GRANTED", until: performance.now() + 1100, color: "#438336" };
      revealHint(cut);
    } else {
      state.toast = { text: "WATCH THE FULL AD TO RECEIVE THE HINT", until: performance.now() + 1500, color: "#7a315e" };
    }
  }

  function toggleAudio() {
    state.save.audioEnabled = !state.save.audioEnabled;
    persistSave();
    audio.setEnabled(state.save.audioEnabled);
    if (state.save.audioEnabled) {
      audio.unlock();
      audio.play("click");
    }
  }

  function levelGridRects() {
    const rects = [];
    const w = 76;
    const h = 74;
    const startX = 493;
    const startY = 196;
    const dx = 102;
    const dy = 88;
    for (let row = 0; row < 5; row += 1) {
      for (let col = 0; col < 6; col += 1) {
        rects.push({ x: startX + col * dx, y: startY + row * dy, w, h });
      }
    }
    return rects;
  }

  function handleUiClick(x, y) {
    const U = C.UI;
    if (state.adActive || state.adBusy || state.rewardPending) return;
    if (state.rewardModalOpen) {
      if (rectContains(rewardWatchRect, x, y)) watchRewardedHint();
      else if (rectContains(rewardCancelRect, x, y)) closeRewardModal();
      return;
    }
    if (state.screen === "title") {
      if (rectContains(U.titleStart, x, y)) {
        press("start");
        audio.unlock();
        audio.play("click");
        setTimeout(openSelect, 100);
      } else if (rectContains(U.audio, x, y, 5)) toggleAudio();
      return;
    }
    if (state.screen === "select") {
      if (rectContains(U.back, x, y, 6)) {
        press("back"); audio.play("click"); switchScreen("title"); return;
      }
      if (rectContains(U.audio, x, y, 6)) { toggleAudio(); return; }
      if (rectContains(U.pagePrev, x, y, 10) && state.page > 1) {
        state.page -= 1; state.pageSlide = -1; audio.play("page"); press("pagePrev"); return;
      }
      if (rectContains(U.pageNext, x, y, 10) && state.page < 3) {
        state.page += 1; state.pageSlide = 1; audio.play("page"); press("pageNext"); return;
      }
      const rects = levelGridRects();
      const index = rects.findIndex((rect) => rectContains(rect, x, y, 5));
      if (index >= 0) {
        const number = (state.page - 1) * 30 + index + 1;
        const open = number <= state.save.highestUnlocked || state.save.completed.includes(number);
        if (open) {
          audio.play("click");
          press(`level-${number}`);
          setTimeout(() => startLevel(number), 80);
        } else {
          audio.play("locked");
          press(`level-${number}`);
        }
      }
      return;
    }
    if (state.screen === "gameplay") {
      if (rectContains(U.back, x, y, 6)) { audio.play("click"); openSelect(); return; }
      if (rectContains(U.restart, x, y, 6)) { restartLevel(); return; }
      if (rectContains(U.audio, x, y, 6)) { toggleAudio(); return; }
      if (rectContains(U.undo, x, y, 8)) { press("undo"); undo(); return; }
      if (rectContains(U.hint, x, y, 8)) { press("hint"); useHint(); }
      return;
    }
    if (state.screen === "complete") {
      if (rectContains(U.completeLevels, x, y, 8)) { audio.play("click"); openSelect(); return; }
      if (rectContains(U.completeRestart, x, y, 8)) {
        audio.play("click");
        runInterstitialAction(() => startLevel(state.levelNumber));
        return;
      }
      if (rectContains(U.completeNext, x, y, 8)) {
        audio.play("click");
        runInterstitialAction(() => {
          if (state.levelNumber < 90) startLevel(state.levelNumber + 1);
          else openSelect();
        });
      }
      return;
    }
    if (state.screen === "gameover") {
      if (rectContains(U.overLevels, x, y, 8)) { audio.play("click"); openSelect(); return; }
      if (rectContains(U.overRestart, x, y, 8)) {
        audio.play("click");
        runInterstitialAction(() => startLevel(state.levelNumber));
      }
    }
  }

  function press(id) {
    state.pressed = { id, until: performance.now() + 120 };
  }

  function pointerPosition(event) {
    const rect = canvas.getBoundingClientRect();
    return {
      x: (event.clientX - rect.left) * C.WIDTH / rect.width,
      y: (event.clientY - rect.top) * C.HEIGHT / rect.height
    };
  }

  canvas.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    if (state.adActive || state.adBusy || state.rewardPending) return;
    canvas.focus();
    audio.unlock();
    const point = pointerPosition(event);
    state.pointer = { ...point, visible: true, down: true, pointerType: event.pointerType || "mouse" };
    canvas.setPointerCapture(event.pointerId);
    if (state.screen === "gameplay" && !state.inputLocked && rectContains(state.currentGrid, point.x, point.y, 28)) {
      state.cutGesture = { start: point, current: point };
      state.cutPreview = null;
    } else {
      handleUiClick(point.x, point.y);
    }
  }, { passive: false });

  canvas.addEventListener("pointermove", (event) => {
    event.preventDefault();
    const point = pointerPosition(event);
    state.pointer.x = point.x;
    state.pointer.y = point.y;
    state.pointer.visible = true;
    if (state.cutGesture) {
      state.cutGesture.current = point;
      state.cutPreview = determineCut(state.cutGesture.start, point);
    }
  }, { passive: false });

  canvas.addEventListener("pointerup", (event) => {
    event.preventDefault();
    const point = pointerPosition(event);
    state.pointer.x = point.x;
    state.pointer.y = point.y;
    state.pointer.down = false;
    if (state.cutGesture) {
      const cut = determineCut(state.cutGesture.start, point);
      state.cutGesture = null;
      state.cutPreview = null;
      if (cut && cut.ready) commitCut(cut);
      else invalidCut();
    }
  }, { passive: false });

  canvas.addEventListener("pointerleave", () => {
    if (!state.pointer.down) state.pointer.visible = false;
  });
  canvas.addEventListener("contextmenu", (event) => event.preventDefault());

  function resetAmbient(screen) {
    const count = screen === "gameplay" ? 36 : screen === "select" ? 24 : 16;
    state.ambientParticles = Array.from({ length: count }, (_, index) => ({
      x: (index * 173.7 + Math.random() * 120) % C.WIDTH,
      y: Math.random() * C.HEIGHT,
      size: 1.2 + Math.random() * 3.2,
      speed: 5 + Math.random() * 15,
      sway: 8 + Math.random() * 25,
      phase: Math.random() * Math.PI * 2,
      type: index % 5 === 0 ? "glint" : index % 3 === 0 ? "thread" : "dust",
      alpha: 0.14 + Math.random() * 0.28
    }));
  }

  function updateParticles(dt, now) {
    state.ambientParticles.forEach((p) => {
      p.y -= p.speed * dt;
      p.x += Math.sin(now * 0.0007 + p.phase) * p.sway * dt;
      if (p.y < -12) { p.y = C.HEIGHT + 12; p.x = Math.random() * C.WIDTH; }
      if (p.x < -20) p.x = C.WIDTH + 20;
      if (p.x > C.WIDTH + 20) p.x = -20;
    });
    state.burstParticles = state.burstParticles.filter((p) => {
      const age = (now - p.started) / p.life;
      if (age >= 1) return false;
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.vy += p.gravity * dt;
      p.rotation += p.spin * dt;
      return true;
    });
  }

  function addBurst(x, y, type, count) {
    const now = performance.now();
    for (let i = 0; i < count; i += 1) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 35 + Math.random() * (type === "celebrate" ? 190 : 95);
      state.burstParticles.push({
        x, y, type,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - (type === "celebrate" ? 80 : 20),
        gravity: type === "celebrate" ? 90 : 24,
        size: 1.5 + Math.random() * 4.5,
        rotation: Math.random() * 6.28,
        spin: -3 + Math.random() * 6,
        started: now,
        life: 500 + Math.random() * 650,
        color: ["#f7d78a", "#fff4cf", "#e86c9c", "#8d61cb", "#f1b858"][i % 5]
      });
    }
  }

  function addBurstForCut(cut, type, count) {
    const grid = state.currentGrid;
    const offset = cut.offset || pieceOffset(cut.piece);
    if (cut.axis === "v") {
      addBurst(grid.x + cut.index * grid.tile + offset.x, grid.y + (cut.piece[0] + cut.piece[1]) / 2 * grid.tile + offset.y, type, count);
    } else {
      addBurst(grid.x + (cut.piece[2] + cut.piece[3]) / 2 * grid.tile + offset.x, grid.y + cut.index * grid.tile + offset.y, type, count);
    }
  }

  function drawParticles() {
    ctx.save();
    state.ambientParticles.forEach((p) => {
      ctx.globalAlpha = p.alpha;
      if (p.type === "glint") {
        ctx.strokeStyle = "#ffe3a1";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(p.x - p.size * 2, p.y);
        ctx.lineTo(p.x + p.size * 2, p.y);
        ctx.moveTo(p.x, p.y - p.size * 2);
        ctx.lineTo(p.x, p.y + p.size * 2);
        ctx.stroke();
      } else if (p.type === "thread") {
        ctx.strokeStyle = "#f7c6d8";
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 2, 0.2, 4.5);
        ctx.stroke();
      } else {
        ctx.fillStyle = "#fff7e8";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
    });
    state.burstParticles.forEach((p) => {
      const age = (performance.now() - p.started) / p.life;
      ctx.save();
      ctx.globalAlpha = Math.max(0, 1 - age);
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.fillStyle = p.color;
      if (p.type === "fiber" || p.type === "thread") {
        ctx.fillRect(-p.size * 2.4, -0.7, p.size * 4.8, 1.4);
      } else {
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      }
      ctx.restore();
    });
    ctx.restore();
  }

  function drawLoading() {
    const bg = image(C.IMAGES.loadingBg);
    if (bg) ctx.drawImage(bg, 0, 0, C.WIDTH, C.HEIGHT);
    else {
      const grad = ctx.createLinearGradient(0, 0, C.WIDTH, C.HEIGHT);
      grad.addColorStop(0, "#f6d8c5"); grad.addColorStop(1, "#6b315d");
      ctx.fillStyle = grad; ctx.fillRect(0, 0, C.WIDTH, C.HEIGHT);
      drawCenteredText("CHIC CUTS", 640, 290, 72, "#fff5e8");
    }
    if (image(C.IMAGES.loadTray)) {
      drawImageRect(C.IMAGES.loadTray, { x: 228.5, y: 462.8, w: 472.6, h: 86.6 });
      const fillRect = { x: 260, y: 485.8, w: 409.6, h: 40.6 };
      const fill = image(C.IMAGES.loadFill);
      if (fill) {
        ctx.save();
        ctx.beginPath();
        ctx.rect(fillRect.x, fillRect.y, fillRect.w * state.loadProgress, fillRect.h);
        ctx.clip();
        ctx.drawImage(fill, fillRect.x, fillRect.y, fillRect.w, fillRect.h);
        ctx.restore();
      }
    }
  }

  function drawTitle() {
    drawImageRect(C.IMAGES.titleBg, { x: 0, y: 0, w: C.WIDTH, h: C.HEIGHT });
    drawParticles();
    drawButton(C.IMAGES.start, C.UI.titleStart, "start");
    drawAudioButton();
  }

  function drawAudioButton() {
    drawButton(state.save.audioEnabled ? C.IMAGES.audio : C.IMAGES.mute, C.UI.audio, "audio");
  }

  function drawSelect() {
    drawImageRect(C.IMAGES.selectBg, { x: 0, y: 0, w: C.WIDTH, h: C.HEIGHT });
    drawParticles();
    drawButton(C.IMAGES.back, C.UI.back, "back");
    drawAudioButton();
    drawButton(C.IMAGES.pagePrev, C.UI.pagePrev, "pagePrev", state.page > 1);
    drawButton(C.IMAGES.pageNext, C.UI.pageNext, "pageNext", state.page < 3);
    ctx.save();
    ctx.translate(state.pageSlide * 46, 0);
    const rects = levelGridRects();
    rects.forEach((rect, index) => {
      const number = (state.page - 1) * 30 + index + 1;
      const completed = state.save.completed.includes(number);
      const unlocked = number <= state.save.highestUnlocked;
      const path = completed ? C.IMAGES.levelDone : unlocked ? C.IMAGES.levelOpen : C.IMAGES.levelLocked;
      drawButton(path, rect, `level-${number}`);
      if (completed || unlocked) {
        drawCenteredText(number, rect.x + rect.w / 2, rect.y + (completed ? 27 : 37), number >= 10 ? 24 : 27, "#fff9ed", 800);
      }
    });
    drawCenteredText(`${state.page} / 3`, 788, 652, 26, "#5b2c34", 700, false);
    ctx.restore();
  }

  function drawGameplayBase() {
    drawImageRect(C.IMAGES.gameplayBg, { x: 0, y: 0, w: C.WIDTH, h: C.HEIGHT });
    drawParticles();
    drawImageRect(C.IMAGES.board, C.BOARD);
    drawImageRect(C.IMAGES.basketPanel, C.BASKET_PANEL);
    drawImageRect(C.IMAGES.levelPanel, C.UI.levelPanel);
    drawImageRect(C.IMAGES.movesPanel, C.UI.movesPanel);
    drawButton(C.IMAGES.back, C.UI.back, "back");
    drawButton(C.IMAGES.restart, C.UI.restart, "restart");
    drawAudioButton();
    drawButton(C.IMAGES.undo, C.UI.undo, "undo", state.history.length > 0 && !state.inputLocked);
    drawButton(C.IMAGES.hint, C.UI.hint, "hint", !state.inputLocked && !state.rewardPending);
    drawCenteredText("LEVEL", C.UI.levelPanel.x + C.UI.levelPanel.w / 2, 36, 15, "#fff6df", 750);
    drawCenteredText(state.levelNumber, C.UI.levelPanel.x + C.UI.levelPanel.w / 2, 66, 35, "#fff", 850);
    drawCenteredText("MOVES LEFT", C.UI.movesPanel.x + C.UI.movesPanel.w / 2, 33, 14, "#fff6df", 750);
    drawCenteredText(state.moves, C.UI.movesPanel.x + C.UI.movesPanel.w / 2, 63, 35, "#fff", 850);

    const badgeText = state.save.hints > 0 ? state.save.hints : "AD";
    ctx.save();
    ctx.fillStyle = "#55a23c";
    ctx.beginPath();
    ctx.arc(C.UI.hint.x + 90, C.UI.hint.y + 13, 18, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#f7e8a4";
    ctx.lineWidth = 3;
    ctx.stroke();
    drawCenteredText(badgeText, C.UI.hint.x + 90, C.UI.hint.y + 13, badgeText === "AD" ? 13 : 18, "#fff", 850, false);
    ctx.restore();
  }

  function drawBoardCells() {
    const grid = state.currentGrid;
    state.pieces.forEach((piece) => {
      const offset = pieceOffset(piece);
      for (let r = piece[0]; r < piece[1]; r += 1) {
        for (let c = piece[2]; c < piece[3]; c += 1) {
          const type = state.level.matrix[r][c];
          const img = image(C.FABRICS[type]);
          const x1 = Math.round(grid.x + c * grid.tile + offset.x);
          const y1 = Math.round(grid.y + r * grid.tile + offset.y);
          const x2 = Math.round(grid.x + (c + 1) * grid.tile + offset.x);
          const y2 = Math.round(grid.y + (r + 1) * grid.tile + offset.y);
          if (img) {
            const inset = 2;
            ctx.drawImage(
              img,
              inset,
              inset,
              img.naturalWidth - inset * 2,
              img.naturalHeight - inset * 2,
              x1,
              y1,
              x2 - x1 + 0.75,
              y2 - y1 + 0.75
            );
          }
        }
      }
    });
  }

  function drawCutLine(cut, color, width, dashed, alpha = 1) {
    if (!cut) return;
    const grid = state.currentGrid;
    const offset = cut.offset || pieceOffset(cut.piece);
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.shadowColor = color;
    ctx.shadowBlur = 8;
    if (dashed) ctx.setLineDash([12, 8]);
    ctx.beginPath();
    if (cut.axis === "v") {
      const x = grid.x + cut.index * grid.tile + offset.x;
      ctx.moveTo(x, grid.y + cut.piece[0] * grid.tile + offset.y);
      ctx.lineTo(x, grid.y + cut.piece[1] * grid.tile + offset.y);
    } else {
      const y = grid.y + cut.index * grid.tile + offset.y;
      ctx.moveTo(grid.x + cut.piece[2] * grid.tile + offset.x, y);
      ctx.lineTo(grid.x + cut.piece[3] * grid.tile + offset.x, y);
    }
    ctx.stroke();
    ctx.restore();
  }

  function drawTutorial(now) {
    if (!state.tutorialActive || state.levelNumber !== 1 || !state.level.solution.length) return;
    const cut = state.level.solution[0];
    const grid = state.currentGrid;
    const offset = pieceOffset(cut.piece);
    const age = now - state.tutorialStartedAt;
    const fade = Math.min(1, age / 320);
    const pulse = 0.72 + Math.sin(now * 0.007) * 0.18;
    drawCutLine(cut, "#ffe274", 7, true, fade * pulse);

    let startX;
    let startY;
    let endX;
    let endY;
    if (cut.axis === "h") {
      startX = grid.x + cut.piece[2] * grid.tile + offset.x + 24;
      endX = grid.x + cut.piece[3] * grid.tile + offset.x - 24;
      startY = endY = grid.y + cut.index * grid.tile + offset.y;
    } else {
      startY = grid.y + cut.piece[0] * grid.tile + offset.y + 24;
      endY = grid.y + cut.piece[1] * grid.tile + offset.y - 24;
      startX = endX = grid.x + cut.index * grid.tile + offset.x;
    }

    const travel = (age % 1700) / 1700;
    const eased = easeOutCubic(travel);
    const x = startX + (endX - startX) * eased;
    const y = startY + (endY - startY) * eased;
    const markerAlpha = fade * Math.sin(Math.min(1, travel) * Math.PI);
    ctx.save();
    ctx.globalAlpha = markerAlpha;
    ctx.shadowColor = "#ffe274";
    ctx.shadowBlur = 18;
    ctx.fillStyle = "rgba(255,248,211,.94)";
    ctx.beginPath();
    ctx.arc(x, y, 14, 0, Math.PI * 2);
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "#c53b6c";
    ctx.stroke();
    ctx.fillStyle = "#c53b6c";
    ctx.beginPath();
    ctx.arc(x, y, 4.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    ctx.save();
    ctx.globalAlpha = fade;
    ctx.fillStyle = "rgba(104,42,78,.94)";
    ctx.strokeStyle = "rgba(255,226,116,.95)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(405, 105, 324, 36, 18);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    drawCenteredText("DRAG ALONG THE GLOWING LINE", 567, 123, 15, "#fff8df", 850, false);
  }

  function drawCollectionAnimations(now) {
    const grid = state.currentGrid;
    state.collectionAnimations = state.collectionAnimations.filter((anim) => {
      const t = (now - anim.started) / anim.duration;
      if (t >= 1) {
        addBurst(anim.targetX, anim.targetY, "glint", 12);
        state.basketPulses[anim.type] = now + 420;
        return false;
      }
      const e = easeOutCubic(t);
      const x = anim.startX + (anim.targetX - anim.startX) * e;
      const y = anim.startY + (anim.targetY - anim.startY) * e - Math.sin(Math.PI * t) * 70;
      const baseW = (anim.rect[3] - anim.rect[2]) * grid.tile;
      const baseH = (anim.rect[1] - anim.rect[0]) * grid.tile;
      const scale = (1 - e) * 0.82 + 0.18;
      const w = Math.max(20, baseW * scale);
      const h = Math.max(18, baseH * scale * (1 - 0.38 * Math.sin(Math.PI * t)));
      const img = image(C.FABRICS[anim.type]);
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(Math.sin(t * Math.PI * 2) * 0.08);
      ctx.globalAlpha = 1 - Math.max(0, t - 0.82) / 0.18;
      if (img) ctx.drawImage(img, -w / 2, -h / 2, w, h);
      ctx.restore();
      return true;
    });
  }

  function drawBaskets(now) {
    const counts = collectedCounts();
    basketRows().forEach((row) => {
      const basket = image(C.BASKETS[row.type]);
      const pulseUntil = state.basketPulses[row.type] || 0;
      const pulseAge = pulseUntil > now ? 1 - (pulseUntil - now) / 420 : 1;
      const scale = pulseUntil > now ? 1 + Math.sin(pulseAge * Math.PI) * 0.13 : 1;
      const centerX = row.x + row.w / 2;
      const centerY = row.y + row.h / 2;
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.scale(scale, scale);
      if (basket) ctx.drawImage(basket, -row.w / 2, -row.h / 2, row.w, row.h);
      ctx.restore();
      const progress = counts[row.type];
      drawCenteredText(`${progress.collected} / ${progress.total}`, row.textX, row.textY, 19, "#3d2924", 850, false);
    });
  }

  function drawGameplay(now) {
    drawGameplayBase();
    drawBoardCells();
    drawBaskets(now);
    drawCollectionAnimations(now);
    drawTutorial(now);
    if (state.cutPreview) drawCutLine(state.cutPreview, state.cutPreview.ready ? "#fff1bc" : "#f0a7c2", 4, true, 0.95);
    if (state.cutFlash) {
      const t = (now - state.cutFlash.started) / state.cutFlash.duration;
      if (t < 1) drawCutLine(state.cutFlash, "#fff3bb", 7 - t * 4, false, 1 - t);
      else state.cutFlash = null;
    }
    if (state.hintCut && now < state.hintUntil) {
      const pulse = 0.58 + Math.sin(now * 0.009) * 0.28;
      drawCutLine(state.hintCut, "#ffe16b", 7, true, pulse);
    } else if (state.hintCut) state.hintCut = null;
  }

  function drawComplete(now) {
    drawGameplay(now);
    drawImageRect(C.IMAGES.black, { x: 0, y: 0, w: C.WIDTH, h: C.HEIGHT }, 0.72);
    const t = easeOutBack((now - state.screenEnteredAt) / 440);
    const scale = 0.78 + t * 0.22;
    ctx.save();
    ctx.translate(640, 360);
    ctx.scale(scale, scale);
    ctx.translate(-640, -360);
    drawImageRect(C.IMAGES.levelComplete, { x: 287.6, y: 124.9, w: 704.7, h: 470.1 });
    drawButton(C.IMAGES.resultLevels, C.UI.completeLevels, "completeLevels");
    drawButton(C.IMAGES.resultNext, C.UI.completeNext, "completeNext");
    drawButton(C.IMAGES.resultRestart, C.UI.completeRestart, "completeRestart");
    drawCenteredText("Level", 745, 365, 19, "#5b382b", 750, false);
    drawCenteredText(state.levelNumber, 745, 401, 49, "#a4284a", 900, false);
    ctx.restore();
    drawParticles();
  }

  function drawGameOver(now) {
    drawGameplay(now);
    drawImageRect(C.IMAGES.black, { x: 0, y: 0, w: C.WIDTH, h: C.HEIGHT }, 0.76);
    const t = easeOutBack((now - state.screenEnteredAt) / 440);
    const scale = 0.78 + t * 0.22;
    ctx.save();
    ctx.translate(640, 350);
    ctx.scale(scale, scale);
    ctx.translate(-640, -350);
    drawImageRect(C.IMAGES.gameOver, { x: 280.4, y: 116.1, w: 704.7, h: 470.1 });
    drawButton(C.IMAGES.resultLevels, C.UI.overLevels, "overLevels");
    drawButton(C.IMAGES.resultRestart, C.UI.overRestart, "overRestart");
    ctx.restore();
  }

  function drawRewardButton(rect, label, primary) {
    const hovered = state.pointer.visible && rectContains(rect, state.pointer.x, state.pointer.y);
    const scale = hovered ? 1.035 : 1;
    ctx.save();
    ctx.translate(rect.x + rect.w / 2, rect.y + rect.h / 2);
    ctx.scale(scale, scale);
    ctx.translate(-rect.w / 2, -rect.h / 2);
    const gradient = ctx.createLinearGradient(0, 0, 0, rect.h);
    if (primary) {
      gradient.addColorStop(0, "#d84c78");
      gradient.addColorStop(1, "#982c59");
    } else {
      gradient.addColorStop(0, "#835276");
      gradient.addColorStop(1, "#5b3458");
    }
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.roundRect(0, 0, rect.w, rect.h, 18);
    ctx.fill();
    ctx.strokeStyle = "#f3cf8b";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.restore();
    drawCenteredText(label, rect.x + rect.w / 2, rect.y + rect.h / 2 + 1, 22, "#fff9ed", 900, false);
  }

  function drawRewardModal() {
    ctx.save();
    ctx.fillStyle = "rgba(26, 13, 24, 0.82)";
    ctx.fillRect(0, 0, C.WIDTH, C.HEIGHT);
    ctx.shadowColor = "rgba(0, 0, 0, 0.42)";
    ctx.shadowBlur = 38;
    ctx.fillStyle = "#fff3dc";
    ctx.beginPath();
    ctx.roundRect(345, 165, 590, 390, 34);
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.strokeStyle = "#d39a52";
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.fillStyle = "#6f285c";
    ctx.beginPath();
    ctx.roundRect(367, 187, 546, 102, 25);
    ctx.fill();
    ctx.restore();
    drawCenteredText("REWARDED HINT", 640, 218, 17, "#f5d99e", 850, false);
    drawCenteredText("NEED A HINT?", 640, 258, 32, "#fff9ed", 900, false);
    drawCenteredText("Watch a short ad to reveal", 640, 342, 23, "#593a45", 750, false);
    drawCenteredText("one correct cut.", 640, 377, 23, "#593a45", 750, false);
    drawRewardButton(rewardWatchRect, "WATCH", true);
    drawRewardButton(rewardCancelRect, "CANCEL", false);
  }

  function drawToast(now) {
    if (!state.toast || now >= state.toast.until) { state.toast = null; return; }
    const text = state.toast.text;
    ctx.save();
    ctx.font = '800 18px "Roboto Chic", sans-serif';
    const width = Math.max(190, ctx.measureText(text).width + 52);
    ctx.globalAlpha = Math.min(1, (state.toast.until - now) / 180);
    ctx.fillStyle = state.toast.color;
    ctx.beginPath();
    ctx.roundRect(640 - width / 2, 650, width, 42, 21);
    ctx.fill();
    ctx.strokeStyle = "rgba(255,244,208,.85)";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.restore();
    drawCenteredText(text, 640, 671, 18, "#fff", 850, false);
  }

  function update(dt, now) {
    if (state.transition.direction) {
      state.transition.alpha += state.transition.direction * dt * 3.8;
      if (state.transition.alpha <= 0) { state.transition.alpha = 0; state.transition.direction = 0; }
    }
    if (state.pressed && now >= state.pressed.until) state.pressed = null;
    state.pageSlide *= Math.pow(0.002, dt);
    updateParticles(dt, now);
  }

  function render(now) {
    ctx.clearRect(0, 0, C.WIDTH, C.HEIGHT);
    switch (state.screen) {
      case "loading": drawLoading(); break;
      case "title": drawTitle(); break;
      case "select": drawSelect(); break;
      case "gameplay": drawGameplay(now); break;
      case "complete": drawComplete(now); break;
      case "gameover": drawGameOver(now); break;
      default: break;
    }
    drawToast(now);
    if (state.rewardModalOpen) drawRewardModal();
    if (state.transition.alpha > 0) {
      ctx.save();
      ctx.globalAlpha = state.transition.alpha;
      ctx.fillStyle = "#23131f";
      ctx.fillRect(0, 0, C.WIDTH, C.HEIGHT);
      ctx.restore();
    }
  }

  function frame(now) {
    const dt = Math.min(0.034, Math.max(0, (now - state.lastTime) / 1000));
    state.lastTime = now;
    state.fpsFrameCount += 1;
    if (now - state.fpsSampleStarted >= 1000) {
      state.fps = state.fpsFrameCount * 1000 / (now - state.fpsSampleStarted);
      canvas.dataset.fps = state.fps.toFixed(1);
      state.fpsFrameCount = 0;
      state.fpsSampleStarted = now;
    }
    if (!state.adActive) update(dt, now);
    render(now);
    requestAnimationFrame(frame);
  }

  document.addEventListener("visibilitychange", () => {
    syncAudioSuspension();
  });

  window.addEventListener("blur", () => { state.pointer.down = false; state.cutGesture = null; state.cutPreview = null; });

  async function boot() {
    requestAnimationFrame(frame);
    try {
      await preloadImages();
      state.loadProgress = 1;
      state.loaded = true;
      resetAmbient("title");
      setTimeout(() => switchScreen("title"), 260);
    } catch (error) {
      fatalDetail.textContent = error.message || "A required game asset is unavailable.";
      fatal.hidden = false;
    }
  }

  window.ChicGameDebug = Object.freeze({
    state,
    levels: LEVELS,
    startLevel,
    solveCurrent: () => Solver.solve(state.level, state.pieces, 20),
    resetSave: () => { state.save = defaultSave(); persistSave(); }
  });

  connectWGPlayer();
  boot();
})();
