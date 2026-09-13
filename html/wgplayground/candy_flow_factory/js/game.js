(function () {
  "use strict";

  var canvas = document.getElementById("game");
  var ctx = canvas.getContext("2d", { alpha: false, desynchronized: true });
  var W = 1280;
  var H = 720;
  var BOARD = { x: 260, y: 52, w: 736, h: 582, cols: 8, rows: 6 };
  BOARD.cellW = BOARD.w / BOARD.cols;
  BOARD.cellH = BOARD.h / BOARD.rows;
  var boardLayer = document.createElement("canvas");
  boardLayer.width = BOARD.w;
  boardLayer.height = BOARD.h;
  var boardLayerContext = boardLayer.getContext("2d", { alpha: true });
  var selectLayer = document.createElement("canvas");
  selectLayer.width = W;
  selectLayer.height = H;
  var selectLayerContext = selectLayer.getContext("2d", { alpha: true });
  var selectLayerKey = "";

  var COLORS = {
    red: "#f23a45",
    yellow: "#ffc928",
    blue: "#1699f4",
    green: "#55c92e",
    purple: "#a63ef0",
    pink: "#ff5bae",
    orange: "#ff8b24",
    cyan: "#24d9dc"
  };

  var imageFiles = {
    titleBg: "assets/TittleScreenBackground.jpg",
    play: "assets/TittleScreenPlayButton.png",
    selectBg: "assets/SelectLevelScreenBackground.jpg",
    gameplayBg: "assets/GamePlayScreenBackground.jpg",
    completePanel: "assets/LevelCompleteScreenBackground.png",
    back: "assets/BackButton.png",
    restart: "assets/RestartButton.png",
    audio: "assets/AudioButton.png",
    mute: "assets/AudioMuteButton.png",
    hint: "assets/HintButton.png",
    levelPanel: "assets/GamePlayScreenLevelPanel.png",
    goalPanel: "assets/GoalPanel.png",
    darkTile: "assets/PlayableDarkTile.png",
    brightTile: "assets/UnplayableBrightTile.png",
    completedLevel: "assets/LevelSelectScreenAlreadyCompletedLevelButton.png",
    unlockedLevel: "assets/LevelSelectScreenUnlockedLevelButton.png",
    lockedLevel: "assets/LevelSelectScreenLockedLevelButton.png",
    page1: "assets/Page1Selected.png",
    page2: "assets/Page2Selected.png",
    page3: "assets/Page3Selected.png",
    pagePrev: "assets/SelectLevelScreenPageDecreaseButton.png",
    pageNext: "assets/SelectLevelScreenPageIncreaseButton.png",
    completeSelect: "assets/LevelCompletePanelSelectLevelButton.png",
    completeNext: "assets/LevelCompletePanelNextLevelButton.png",
    completeRestart: "assets/LevelCompletePanelRestartButton.png",
    red: "assets/RedFactory.png",
    yellow: "assets/YellowFactory.png",
    blue: "assets/BlueFactory.png",
    green: "assets/GreenFactory.png",
    purple: "assets/PurpleFactory.png",
    pink: "assets/PinkFactory.png",
    orange: "assets/OrangeFactory.png",
    cyan: "assets/CyanFactory.png"
  };

  var sfxFiles = {
    click: "assets/Audio/button_click.ogg",
    start: "assets/Audio/path_start.ogg",
    draw: "assets/Audio/path_draw.ogg",
    remove: "assets/Audio/path_remove.ogg",
    blocked: "assets/Audio/path_blocked.ogg",
    hint: "assets/Audio/hint.ogg",
    complete: "assets/Audio/level_complete.ogg",
    red: "assets/Audio/connect_red.ogg",
    yellow: "assets/Audio/connect_yellow.ogg",
    blue: "assets/Audio/connect_blue.ogg",
    green: "assets/Audio/connect_green.ogg",
    purple: "assets/Audio/connect_purple.ogg",
    pink: "assets/Audio/connect_pink.ogg",
    orange: "assets/Audio/connect_orange.ogg",
    cyan: "assets/Audio/connect_cyan.ogg"
  };

  var images = Object.create(null);
  var loadedImages = 0;
  var totalImages = Object.keys(imageFiles).length;
  var lastTime = performance.now();

  var state = {
    scene: "loading",
    sceneTime: 0,
    page: 1,
    currentLevelId: 1,
    level: null,
    paths: Object.create(null),
    occupancy: Object.create(null),
    drawingColor: null,
    pointerId: null,
    lastPointer: null,
    hover: null,
    completePending: 0,
    completeShown: false,
    particles: [],
    ambientParticles: [],
    toast: "",
    toastTime: 0,
    modal: null,
    adPaused: false,
    assetsReady: false,
    rewardedHintAvailable: false,
    tutorialVisible: false,
    tutorialPulse: 0
  };

  var SAVE_KEY = "candyFlowFactorySaveV1";
  var save = loadSave();

  function defaultSave() {
    return {
      highestUnlockedLevel: 1,
      completedLevels: [],
      hintCount: 3,
      audioEnabled: true,
      tutorialCompleted: false,
      selectedPage: 1
    };
  }

  function loadSave() {
    var fallback = defaultSave();
    try {
      var parsed = JSON.parse(localStorage.getItem(SAVE_KEY) || "null");
      if (!parsed || typeof parsed !== "object") return fallback;
      var completed = Array.isArray(parsed.completedLevels) ? parsed.completedLevels.filter(function (id) {
        return Number.isInteger(id) && id >= 1 && id <= 90;
      }) : [];
      var loadedHints = Number(parsed.hintCount);
      return {
        highestUnlockedLevel: clamp(Number(parsed.highestUnlockedLevel) || 1, 1, 90),
        completedLevels: Array.from(new Set(completed)),
        hintCount: Number.isFinite(loadedHints) ? clamp(loadedHints, 0, 99) : fallback.hintCount,
        audioEnabled: parsed.audioEnabled !== false,
        tutorialCompleted: parsed.tutorialCompleted === true,
        selectedPage: clamp(Number(parsed.selectedPage) || 1, 1, 3)
      };
    } catch (error) {
      return fallback;
    }
  }

  function persist() {
    try { localStorage.setItem(SAVE_KEY, JSON.stringify(save)); } catch (error) { /* local privacy mode */ }
  }

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  var audio = {
    unlocked: false,
    music: null,
    sfx: Object.create(null),
    activeSounds: [],
    adMuted: false,
    adAudioWasEnabled: false,
    lastDraw: 0,
    lastBlocked: 0,
    unlock: function () {
      if (this.unlocked) return;
      this.unlocked = true;
      this.music = new Audio("assets/Audio/music_candy_flow_factory_loop.ogg");
      this.music.loop = true;
      this.music.volume = 0.4;
      var self = this;
      Object.keys(sfxFiles).forEach(function (name) {
        var sound = new Audio(sfxFiles[name]);
        sound.preload = "auto";
        self.sfx[name] = sound;
      });
      if (save.audioEnabled) this.music.play()["catch"](function () {});
    },
    play: function (name) {
      if (!this.unlocked || !save.audioEnabled || this.adMuted || !this.sfx[name]) return;
      var now = performance.now();
      if (name === "draw" && now - this.lastDraw < 65) return;
      if (name === "blocked" && now - this.lastBlocked < 180) return;
      if (name === "draw") this.lastDraw = now;
      if (name === "blocked") this.lastBlocked = now;
      var source = this.sfx[name];
      var sound = source.cloneNode();
      var self = this;
      sound.volume = name === "draw" ? 0.28 : name === "complete" ? 0.9 : 0.75;
      this.activeSounds.push(sound);
      sound.addEventListener("ended", function () {
        var index = self.activeSounds.indexOf(sound);
        if (index >= 0) self.activeSounds.splice(index, 1);
      });
      sound.play()["catch"](function () {});
    },
    toggle: function () {
      save.audioEnabled = !save.audioEnabled;
      persist();
      if (!this.unlocked) return;
      if (save.audioEnabled) this.music.play()["catch"](function () {});
      else this.music.pause();
    },
    pauseForAd: function () {
      if (this.adMuted) return;
      this.adAudioWasEnabled = save.audioEnabled;
      this.adMuted = true;
      if (this.music) this.music.pause();
      this.activeSounds.forEach(function (sound) {
        sound.pause();
        sound.currentTime = 0;
      });
      this.activeSounds = [];
    },
    resumeAfterAd: function () {
      if (!this.adMuted) return;
      this.adMuted = false;
      if (this.adAudioWasEnabled && save.audioEnabled && this.unlocked && this.music && !document.hidden) {
        this.music.play()["catch"](function () {});
      }
    }
  };

  function preload() {
    Object.keys(imageFiles).forEach(function (name) {
      var image = new Image();
      image.onload = image.onerror = function () {
        loadedImages += 1;
        if (loadedImages >= totalImages) {
          state.assetsReady = true;
          if (state.level) rebuildBoardLayer();
          setTimeout(tryEnterTitle, 120);
        }
      };
      image.src = imageFiles[name];
      images[name] = image;
    });
  }

  function tryEnterTitle() {
    if (state.scene === "loading" && state.assetsReady) changeScene("title");
  }

  function changeScene(scene) {
    state.scene = scene;
    state.sceneTime = 0;
    state.modal = null;
    state.toast = "";
    if (scene === "select") {
      state.page = save.selectedPage;
      save.selectedPage = state.page;
      persist();
    }
  }

  function startLevel(id) {
    state.currentLevelId = clamp(id, 1, 90);
    state.level = window.CandyLevels.levels[state.currentLevelId - 1];
    state.paths = Object.create(null);
    state.level.pairs.forEach(function (pair) { state.paths[pair.color] = []; });
    state.occupancy = Object.create(null);
    state.drawingColor = null;
    state.pointerId = null;
    state.completePending = 0;
    state.completeShown = false;
    state.particles = [];
    state.tutorialVisible = !save.tutorialCompleted && state.currentLevelId <= 4;
    rebuildBoardLayer();
    changeScene("game");
  }

  function resetLevel() {
    if (!state.level) return;
    state.level.pairs.forEach(function (pair) { state.paths[pair.color] = []; });
    rebuildOccupancy();
    state.completePending = 0;
    state.completeShown = false;
    state.particles = [];
    audio.play("remove");
  }

  function pairForColor(color) {
    return state.level.pairs.find(function (pair) { return pair.color === color; });
  }

  function cellKey(cell) {
    return cell[0] + "," + cell[1];
  }

  function sameCell(a, b) {
    return a && b && a[0] === b[0] && a[1] === b[1];
  }

  function activeCell(cell) {
    if (!state.level) return false;
    return cell[0] >= state.level.activeOffsetRow &&
      cell[0] < state.level.activeOffsetRow + state.level.activeRows &&
      cell[1] >= state.level.activeOffsetColumn &&
      cell[1] < state.level.activeOffsetColumn + state.level.activeColumns;
  }

  function machineAt(cell) {
    var found = null;
    state.level.pairs.some(function (pair) {
      if (sameCell(cell, pair.start) || sameCell(cell, pair.end)) {
        found = pair;
        return true;
      }
      return false;
    });
    return found;
  }

  function rebuildOccupancy() {
    state.occupancy = Object.create(null);
    Object.keys(state.paths).forEach(function (color) {
      state.paths[color].forEach(function (cell) { state.occupancy[cellKey(cell)] = color; });
    });
  }

  function connected(color) {
    var pair = pairForColor(color);
    var path = state.paths[color];
    if (!pair || !path || path.length < 2) return false;
    return (sameCell(path[0], pair.start) && sameCell(path[path.length - 1], pair.end)) ||
      (sameCell(path[0], pair.end) && sameCell(path[path.length - 1], pair.start));
  }

  function connectedCount() {
    return state.level.pairs.reduce(function (count, pair) {
      return count + (connected(pair.color) ? 1 : 0);
    }, 0);
  }

  function beginPath(cell) {
    var machine = machineAt(cell);
    var color;
    var path;
    var index;
    if (machine) {
      color = machine.color;
      state.paths[color] = [cell.slice()];
      rebuildOccupancy();
    } else {
      color = state.occupancy[cellKey(cell)];
      if (!color) return false;
      path = state.paths[color];
      index = path.findIndex(function (entry) { return sameCell(entry, cell); });
      if (index < 0) return false;
      state.paths[color] = path.slice(0, index + 1);
      rebuildOccupancy();
      audio.play("remove");
    }
    state.drawingColor = color;
    audio.play("start");
    return true;
  }

  function extendPath(cell) {
    var color = state.drawingColor;
    if (!color) return;
    var path = state.paths[color];
    var last = path[path.length - 1];
    if (!last || sameCell(last, cell)) return;
    if (Math.abs(last[0] - cell[0]) + Math.abs(last[1] - cell[1]) !== 1) return;

    var previous = path[path.length - 2];
    if (previous && sameCell(previous, cell)) {
      path.pop();
      rebuildOccupancy();
      audio.play("remove");
      return;
    }

    var ownIndex = path.findIndex(function (entry) { return sameCell(entry, cell); });
    if (ownIndex >= 0) {
      state.paths[color] = path.slice(0, ownIndex + 1);
      rebuildOccupancy();
      audio.play("remove");
      return;
    }

    if (!activeCell(cell)) {
      audio.play("blocked");
      return;
    }
    var machine = machineAt(cell);
    if (machine && machine.color !== color) {
      audio.play("blocked");
      return;
    }
    var occupying = state.occupancy[cellKey(cell)];
    if (occupying && occupying !== color) {
      audio.play("blocked");
      return;
    }
    var pair = pairForColor(color);
    if (machine && machine.color === color && sameCell(cell, path[0])) return;

    path.push(cell.slice());
    rebuildOccupancy();
    spawnTrailParticles(cell, color);
    if (machine && machine.color === color && (sameCell(cell, pair.start) || sameCell(cell, pair.end))) {
      audio.play(color);
      spawnConnectionParticles(cell, color);
      state.drawingColor = null;
      checkCompletion();
    } else {
      audio.play("draw");
    }
  }

  function checkCompletion() {
    if (connectedCount() !== state.level.pairs.length) return false;
    state.completePending = 0.45;
    spawnCompletionParticles();
    return true;
  }

  function finishLevel() {
    if (state.completeShown) return;
    state.completeShown = true;
    if (save.completedLevels.indexOf(state.currentLevelId) < 0) save.completedLevels.push(state.currentLevelId);
    if (state.currentLevelId < 90) save.highestUnlockedLevel = Math.max(save.highestUnlockedLevel, state.currentLevelId + 1);
    if (state.currentLevelId <= 4 && !save.tutorialCompleted) save.tutorialCompleted = true;
    persist();
    audio.play("complete");
  }

  function revealHint() {
    var target = state.level.pairs.find(function (pair) {
      return !connected(pair.color);
    });
    if (!target) {
      showToast("Every route is already correct!");
      return;
    }
    var solutionCells = Object.create(null);
    target.solution.forEach(function (cell) { solutionCells[cellKey(cell)] = true; });
    Object.keys(state.paths).forEach(function (color) {
      if (color === target.color) return;
      if (state.paths[color].some(function (cell) { return solutionCells[cellKey(cell)]; })) state.paths[color] = [];
    });
    state.paths[target.color] = target.solution.map(function (cell) { return cell.slice(); });
    save.hintCount -= 1;
    persist();
    rebuildOccupancy();
    audio.play("hint");
    audio.play(target.color);
    target.solution.forEach(function (cell, index) {
      if (index % 2 === 0) spawnTrailParticles(cell, target.color, 5);
    });
    spawnConnectionParticles(target.end, target.color);
    showToast("A " + target.color + " route was revealed!");
    checkCompletion();
  }

  function useHint() {
    if (save.hintCount <= 0) {
      if (!window.WGAds || !window.WGAds.isRewardAvailable()) {
        showToast("Rewarded ad is not available right now.");
        return;
      }
      state.modal = "rewarded-hint";
      return;
    }
    revealHint();
  }

  function requestRewardedHint() {
    state.modal = null;
    if (!window.WGAds || !window.WGAds.showRewarded()) {
      showToast("Rewarded ad is not available right now.");
    }
  }

  function grantRewardedHint() {
    if (state.scene !== "game" || !state.level || state.completeShown) return;
    save.hintCount = clamp(save.hintCount + 1, 0, 99);
    persist();
    revealHint();
  }

  function showToast(message) {
    state.toast = message;
    state.toastTime = 2.2;
  }

  function createParticle(x, y, color, options) {
    options = options || {};
    state.particles.push({
      x: x,
      y: y,
      vx: options.vx || 0,
      vy: options.vy || 0,
      gravity: options.gravity || 0,
      life: options.life || 0.5,
      maxLife: options.life || 0.5,
      size: options.size || 4,
      color: color,
      kind: options.kind || "glow",
      rotation: options.rotation || 0,
      spin: options.spin || 0
    });
  }

  function spawnTrailParticles(cell, color, amount) {
    var center = cellCenter(cell);
    var count = amount || 3;
    for (var i = 0; i < count; i += 1) {
      createParticle(
        center.x + (Math.random() - 0.5) * 26,
        center.y + (Math.random() - 0.5) * 26,
        i % 3 === 0 ? "#fff8bd" : COLORS[color],
        {
          vx: (Math.random() - 0.5) * 34,
          vy: -12 - Math.random() * 30,
          life: 0.28 + Math.random() * 0.28,
          size: 2 + Math.random() * 3,
          kind: i % 2 === 0 ? "star" : "glow",
          spin: (Math.random() - 0.5) * 7
        }
      );
    }
  }

  function spawnConnectionParticles(cell, color) {
    var center = cellCenter(cell);
    for (var i = 0; i < 24; i += 1) {
      var angle = Math.PI * 2 * i / 24 + Math.random() * 0.18;
      var speed = 55 + Math.random() * 105;
      createParticle(center.x, center.y, i % 4 === 0 ? "#fff5a8" : COLORS[color], {
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        gravity: 55,
        life: 0.55 + Math.random() * 0.45,
        size: 3 + Math.random() * 5,
        kind: i % 3 === 0 ? "star" : "glow",
        spin: (Math.random() - 0.5) * 9
      });
    }
  }

  function spawnCompletionParticles() {
    var palette = Object.keys(COLORS).map(function (name) { return COLORS[name]; });
    for (var i = 0; i < 76; i += 1) {
      createParticle(
        BOARD.x + Math.random() * BOARD.w,
        BOARD.y + Math.random() * BOARD.h,
        i % 5 === 0 ? "#fff5a8" : palette[i % palette.length],
        {
        vx: (Math.random() - 0.5) * 100,
        vy: -40 - Math.random() * 120,
        gravity: 180,
        life: 0.7 + Math.random() * 0.8,
        size: 3 + Math.random() * 7,
          kind: i % 3 === 0 ? "star" : "glow",
          spin: (Math.random() - 0.5) * 8
        }
      );
    }
  }

  function initializeAmbientParticles() {
    var palette = ["#ff74c8", "#ffd95a", "#71e9ff", "#c589ff", "#ffffff"];
    for (var i = 0; i < 28; i += 1) {
      state.ambientParticles.push({
        x: Math.random() * W,
        y: Math.random() * H,
        baseX: Math.random() * W,
        speed: 7 + Math.random() * 17,
        drift: 7 + Math.random() * 16,
        phase: Math.random() * Math.PI * 2,
        twinkle: 1.2 + Math.random() * 2.6,
        size: 1.8 + Math.random() * 4.8,
        alpha: 0.18 + Math.random() * 0.34,
        color: palette[i % palette.length],
        kind: i % 3 === 0 ? "bubble" : "sparkle"
      });
    }
  }

  function update(dt) {
    if (state.adPaused) return;
    state.sceneTime += dt;
    state.tutorialPulse += dt;
    if (state.toastTime > 0) state.toastTime -= dt;
    if (state.completePending > 0) {
      state.completePending -= dt;
      if (state.completePending <= 0) finishLevel();
    }
    state.particles.forEach(function (particle) {
      particle.x += particle.vx * dt;
      particle.y += particle.vy * dt;
      particle.vy += particle.gravity * dt;
      particle.rotation += particle.spin * dt;
      particle.life -= dt;
    });
    state.particles = state.particles.filter(function (particle) { return particle.life > 0; });
    state.ambientParticles.forEach(function (particle) {
      particle.y -= particle.speed * dt;
      particle.phase += particle.twinkle * dt;
      particle.x = particle.baseX + Math.sin(particle.phase * 0.55) * particle.drift;
      if (particle.y < -24) {
        particle.y = H + 24;
        particle.baseX = Math.random() * W;
      }
    });
  }

  function drawImage(name, x, y, width, height) {
    var image = images[name];
    if (image && image.complete && image.naturalWidth) ctx.drawImage(image, x, y, width, height);
  }

  function rebuildBoardLayer() {
    boardLayerContext.clearRect(0, 0, BOARD.w, BOARD.h);
    if (!state.level) return;
    for (var r = 0; r < BOARD.rows; r += 1) {
      for (var c = 0; c < BOARD.cols; c += 1) {
        var active = activeCell([r, c]);
        var image = images[active ? "darkTile" : "brightTile"];
        if (image && image.complete && image.naturalWidth) {
          boardLayerContext.drawImage(image, c * BOARD.cellW, r * BOARD.cellH, BOARD.cellW + 1, BOARD.cellH + 1);
        }
      }
    }
  }

  function roundRect(x, y, width, height, radius) {
    radius = Math.min(radius, width / 2, height / 2);
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
  }

  function text(value, x, y, size, color, align, stroke) {
    ctx.save();
    ctx.font = "900 " + size + "px 'Arial Rounded MT Bold', 'Trebuchet MS', Arial, sans-serif";
    ctx.textAlign = align || "center";
    ctx.textBaseline = "middle";
    ctx.lineJoin = "round";
    if (stroke) {
      ctx.strokeStyle = stroke;
      ctx.lineWidth = Math.max(2, size * 0.12);
      ctx.strokeText(String(value), x, y);
    }
    ctx.fillStyle = color || "#ffffff";
    ctx.fillText(String(value), x, y);
    ctx.restore();
  }

  function drawLoading() {
    var progress = totalImages ? loadedImages / totalImages : 0;
    var gradient = ctx.createLinearGradient(0, 0, W, H);
    gradient.addColorStop(0, "#281044");
    gradient.addColorStop(1, "#9c176e");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, W, H);
    text("CANDY", 640, 230, 86, "#ff62bd", "center", "#641459");
    text("FLOW FACTORY", 640, 320, 66, "#ffd342", "center", "#8f3b10");
    roundRect(310, 430, 660, 54, 27);
    ctx.fillStyle = "#321247";
    ctx.fill();
    roundRect(320, 440, 640 * progress, 34, 17);
    ctx.fillStyle = "#ffb52f";
    ctx.fill();
    text(Math.round(progress * 100) + "%", 640, 530, 25, "#fff4ca");
  }

  function drawTitle() {
    drawImage("titleBg", 0, 0, W, H);
    drawAmbientParticles(1);
    var pulse = 1 + Math.sin(state.sceneTime * 3) * 0.035;
    var size = 180 * pulse;
    drawImage("play", 395 - (size - 180) / 2, 470 - (size - 180) / 2, size, size);
    drawAudioButton(1180, 18, 82);
  }

  function drawAudioButton(x, y, size) {
    drawImage(save.audioEnabled ? "audio" : "mute", x, y, size, size);
  }

  function levelButtonRect(index) {
    var column = index % 6;
    var row = Math.floor(index / 6);
    return { x: 398 + column * 126, y: 145 + row * 93, w: 102, h: 76 };
  }

  function drawSelect() {
    drawImage("selectBg", 0, 0, W, H);
    drawAmbientParticles(0.82);
    var key = state.page + "|" + save.highestUnlockedLevel + "|" + save.completedLevels.join(",");
    if (key !== selectLayerKey) rebuildSelectLayer(key);
    ctx.drawImage(selectLayer, 0, 0);
    drawAudioButton(1188, 14, 72);
  }

  function rebuildSelectLayer(key) {
    selectLayerContext.clearRect(0, 0, W, H);
    var mainContext = ctx;
    ctx = selectLayerContext;
    drawImage("back", 18, 14, 72, 72);
    var first = (state.page - 1) * 30 + 1;
    for (var i = 0; i < 30; i += 1) {
      var levelId = first + i;
      var rect = levelButtonRect(i);
      var complete = save.completedLevels.indexOf(levelId) >= 0;
      var unlocked = levelId <= save.highestUnlockedLevel;
      drawImage(complete ? "completedLevel" : unlocked ? "unlockedLevel" : "lockedLevel", rect.x, rect.y, rect.w, rect.h);
      var numberY = rect.y + (!complete && !unlocked ? 26 : 28);
      text(levelId, rect.x + rect.w / 2, numberY, 23, "#ffffff", "center", "#2d1740");
    }
    drawImage("pagePrev", 530, 636, 66, 66);
    drawImage("page" + state.page, 621, 642, 230, 58);
    drawImage("pageNext", 878, 636, 66, 66);
    ctx = mainContext;
    selectLayerKey = key;
  }

  function drawBoard() {
    ctx.drawImage(boardLayer, BOARD.x, BOARD.y);
    Object.keys(state.paths).forEach(function (color) { drawPath(state.paths[color], color); });
    state.level.pairs.forEach(function (pair) {
      drawMachine(pair.start, pair.color);
      drawMachine(pair.end, pair.color);
    });
  }

  function cellCenter(cell) {
    return {
      x: BOARD.x + (cell[1] + 0.5) * BOARD.cellW,
      y: BOARD.y + (cell[0] + 0.5) * BOARD.cellH
    };
  }

  function drawPath(path, color) {
    if (!path || path.length < 2) return;
    ctx.save();
    ctx.beginPath();
    path.forEach(function (cell, index) {
      var center = cellCenter(cell);
      if (index === 0) ctx.moveTo(center.x, center.y);
      else ctx.lineTo(center.x, center.y);
    });
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = "rgba(0,0,0,0.34)";
    ctx.lineWidth = 43;
    ctx.stroke();
    ctx.strokeStyle = COLORS[color];
    ctx.globalAlpha = state.drawingColor === color ? 0.3 : 0.18;
    ctx.lineWidth = state.drawingColor === color ? 49 : 45;
    ctx.stroke();
    ctx.globalAlpha = 1;
    ctx.lineWidth = 35;
    ctx.stroke();
    ctx.strokeStyle = "rgba(255,255,255,0.42)";
    ctx.lineWidth = 7;
    ctx.stroke();
    ctx.restore();
  }

  function drawMachine(cell, color) {
    var center = cellCenter(cell);
    var pulse = state.drawingColor === color ? 1 + Math.sin(state.tutorialPulse * 8) * 0.045 : 1;
    var w = 72 * pulse;
    var h = 86 * pulse;
    drawImage(color, center.x - w / 2, center.y - h / 2, w, h);
  }

  function drawGameplayUi() {
    drawImage("back", 18, 15, 72, 72);
    drawImage("restart", 1090, 15, 72, 72);
    drawAudioButton(1188, 15, 72);
    drawImage("levelPanel", 18, 105, 193, 73);
    text("Level " + state.currentLevelId, 114, 142, 27, "#ffffff", "center", "#7c2145");
    drawImage("goalPanel", 19, 195, 193, 296);
    text(connectedCount() + "/" + state.level.pairs.length, 139, 313, 31, "#ffffff", "center", "#2d1820");
    drawImage("hint", 1082, 165, 155, 155);
    ctx.save();
    ctx.beginPath();
    ctx.arc(1204, 290, 25, 0, Math.PI * 2);
    ctx.fillStyle = "#6a25bd";
    ctx.fill();
    ctx.strokeStyle = "#ffd34c";
    ctx.lineWidth = 4;
    ctx.stroke();
    text(save.hintCount, 1204, 290, 24, "#ffffff", "center", "#35124f");
    ctx.restore();
  }

  function drawTutorial() {
    if (!state.tutorialVisible) return;
    var step = state.level.tutorialStep;
    var messages = {
      1: "Connect matching machines.",
      2: "Connect every color pair.",
      3: "Tubes cannot cross.",
      4: "Drag back to change your path."
    };
    ctx.save();
    ctx.fillStyle = "rgba(16, 5, 29, 0.46)";
    ctx.fillRect(0, 0, W, H);
    roundRect(360, 594, 560, 92, 30);
    ctx.fillStyle = "#fff0cf";
    ctx.fill();
    ctx.strokeStyle = "#ffca3d";
    ctx.lineWidth = 7;
    ctx.stroke();
    text(messages[step] || "Connect every matching pair.", 640, 628, 28, "#52144f");
    text("Tap to continue", 640, 662, 16, "#a94a81");
    var pair = state.level.pairs[0];
    var center = cellCenter(pair.start);
    ctx.beginPath();
    ctx.arc(center.x, center.y, 46 + Math.sin(state.tutorialPulse * 5) * 7, 0, Math.PI * 2);
    ctx.strokeStyle = "#fff6a8";
    ctx.lineWidth = 8;
    ctx.stroke();
    ctx.restore();
  }

  function drawParticles() {
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    state.particles.forEach(function (particle) {
      var alpha = clamp(particle.life / particle.maxLife, 0, 1);
      ctx.globalAlpha = alpha;
      ctx.fillStyle = particle.color;
      ctx.beginPath();
      if (particle.kind === "star") {
        for (var point = 0; point < 8; point += 1) {
          var radius = point % 2 === 0 ? particle.size : particle.size * 0.35;
          var angle = particle.rotation - Math.PI / 2 + point * Math.PI / 4;
          var x = particle.x + Math.cos(angle) * radius;
          var y = particle.y + Math.sin(angle) * radius;
          if (point === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
      } else {
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      }
      ctx.fill();
    });
    ctx.restore();
  }

  function drawAmbientParticles(intensity) {
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    state.ambientParticles.forEach(function (particle) {
      var flicker = 0.62 + (Math.sin(particle.phase * 2) + 1) * 0.19;
      ctx.globalAlpha = particle.alpha * flicker * intensity;
      ctx.strokeStyle = particle.color;
      ctx.fillStyle = particle.color;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      if (particle.kind === "bubble") {
        ctx.arc(particle.x, particle.y, particle.size * 1.5, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(particle.x - particle.size * 0.45, particle.y - particle.size * 0.45, particle.size * 0.32, 0, Math.PI * 2);
        ctx.fill();
      } else {
        var size = particle.size;
        ctx.moveTo(particle.x, particle.y - size * 1.8);
        ctx.quadraticCurveTo(particle.x + size * 0.35, particle.y - size * 0.35, particle.x + size * 1.8, particle.y);
        ctx.quadraticCurveTo(particle.x + size * 0.35, particle.y + size * 0.35, particle.x, particle.y + size * 1.8);
        ctx.quadraticCurveTo(particle.x - size * 0.35, particle.y + size * 0.35, particle.x - size * 1.8, particle.y);
        ctx.quadraticCurveTo(particle.x - size * 0.35, particle.y - size * 0.35, particle.x, particle.y - size * 1.8);
        ctx.fill();
      }
    });
    ctx.restore();
  }

  function drawCompleteOverlay() {
    ctx.fillStyle = "rgba(10, 2, 19, 0.78)";
    ctx.fillRect(0, 0, W, H);
    var scale = Math.min(1, 0.72 + state.sceneTime * 1.5);
    ctx.save();
    ctx.translate(W / 2, H / 2);
    ctx.scale(scale, scale);
    ctx.translate(-W / 2, -H / 2);
    drawImage("completePanel", 0, 0, W, H);
    drawImage("completeSelect", 500, 442, 130, 130);
    drawImage("completeNext", 655, 442, 130, 130);
    drawImage("completeRestart", 810, 442, 130, 130);
    ctx.restore();
  }

  function drawToast() {
    if (state.toastTime <= 0) return;
    ctx.save();
    ctx.globalAlpha = Math.min(1, state.toastTime * 2);
    roundRect(390, 28, 500, 58, 24);
    ctx.fillStyle = "rgba(63, 17, 81, 0.94)";
    ctx.fill();
    ctx.strokeStyle = "#ffc83d";
    ctx.lineWidth = 4;
    ctx.stroke();
    text(state.toast, 640, 57, 21, "#fff5d5");
    ctx.restore();
  }

  function drawModal() {
    if (!state.modal) return;
    ctx.fillStyle = "rgba(11, 2, 20, 0.78)";
    ctx.fillRect(0, 0, W, H);
    roundRect(390, 210, 500, 300, 36);
    ctx.fillStyle = "#fff0ce";
    ctx.fill();
    ctx.strokeStyle = "#f246a4";
    ctx.lineWidth = 12;
    ctx.stroke();
    text("NEED A HINT?", 640, 275, 38, "#6c1a75");
    text("Watch a short ad to reveal", 640, 334, 22, "#4d294d");
    text("one correct candy route.", 640, 365, 22, "#4d294d");
    roundRect(430, 420, 205, 62, 22);
    ctx.fillStyle = "#6cc52f";
    ctx.fill();
    ctx.strokeStyle = "#e3a520";
    ctx.lineWidth = 6;
    ctx.stroke();
    text("WATCH", 533, 451, 25, "#ffffff", "center", "#367517");
    roundRect(650, 420, 205, 62, 22);
    ctx.fillStyle = "#d96a9e";
    ctx.fill();
    ctx.strokeStyle = "#a93c78";
    ctx.lineWidth = 6;
    ctx.stroke();
    text("CANCEL", 753, 451, 23, "#ffffff", "center", "#76234f");
  }

  function drawGame() {
    drawImage("gameplayBg", 0, 0, W, H);
    drawAmbientParticles(0.65);
    drawBoard();
    drawGameplayUi();
    drawParticles();
    drawTutorial();
    drawToast();
    if (state.completeShown) drawCompleteOverlay();
    drawModal();
  }

  function render() {
    ctx.clearRect(0, 0, W, H);
    if (state.scene === "loading") drawLoading();
    else if (state.scene === "title") drawTitle();
    else if (state.scene === "select") drawSelect();
    else if (state.scene === "game") drawGame();
  }

  function loop(now) {
    if (state.adPaused) {
      lastTime = now;
      requestAnimationFrame(loop);
      return;
    }
    var dt = Math.min(0.05, (now - lastTime) / 1000);
    lastTime = now;
    update(dt);
    render();
    requestAnimationFrame(loop);
  }

  function logicalPoint(event) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: (event.clientX - rect.left) * W / rect.width,
      y: (event.clientY - rect.top) * H / rect.height
    };
  }

  function boardCell(point) {
    if (point.x < BOARD.x || point.y < BOARD.y || point.x >= BOARD.x + BOARD.w || point.y >= BOARD.y + BOARD.h) return null;
    return [Math.floor((point.y - BOARD.y) / BOARD.cellH), Math.floor((point.x - BOARD.x) / BOARD.cellW)];
  }

  function inside(point, rect) {
    return point.x >= rect.x && point.x <= rect.x + rect.w && point.y >= rect.y && point.y <= rect.y + rect.h;
  }

  function handleTitle(point) {
    if (inside(point, { x: 350, y: 430, w: 260, h: 260 })) {
      audio.play("click");
      changeScene("select");
    } else if (inside(point, { x: 1160, y: 0, w: 120, h: 120 })) {
      audio.toggle();
      audio.play("click");
    }
  }

  function handleSelect(point) {
    if (inside(point, { x: 0, y: 0, w: 110, h: 105 })) {
      audio.play("click");
      changeScene("title");
      return;
    }
    if (inside(point, { x: 1165, y: 0, w: 115, h: 105 })) {
      audio.toggle();
      audio.play("click");
      return;
    }
    if (inside(point, { x: 510, y: 625, w: 100, h: 90 })) {
      state.page = Math.max(1, state.page - 1);
      save.selectedPage = state.page;
      persist();
      audio.play("click");
      return;
    }
    if (inside(point, { x: 864, y: 625, w: 100, h: 90 })) {
      state.page = Math.min(3, state.page + 1);
      save.selectedPage = state.page;
      persist();
      audio.play("click");
      return;
    }
    if (inside(point, { x: 620, y: 635, w: 232, h: 70 })) {
      var relative = point.x - 620;
      state.page = clamp(Math.floor(relative / (232 / 3)) + 1, 1, 3);
      save.selectedPage = state.page;
      persist();
      audio.play("click");
      return;
    }
    for (var i = 0; i < 30; i += 1) {
      var rect = levelButtonRect(i);
      if (inside(point, rect)) {
        var levelId = (state.page - 1) * 30 + i + 1;
        if (levelId <= save.highestUnlockedLevel) {
          audio.play("click");
          startLevel(levelId);
        } else audio.play("blocked");
        return;
      }
    }
  }

  function handleComplete(point) {
    if (inside(point, { x: 490, y: 425, w: 150, h: 165 })) {
      save.selectedPage = Math.ceil(state.currentLevelId / 30);
      persist();
      audio.play("click");
      changeScene("select");
    } else if (inside(point, { x: 645, y: 425, w: 150, h: 165 })) {
      audio.play("click");
      var nextLevel = function () {
        if (state.currentLevelId < 90) startLevel(state.currentLevelId + 1);
        else {
          save.selectedPage = 3;
          persist();
          changeScene("select");
        }
      };
      if (window.WGAds) window.WGAds.showInterstitial(nextLevel);
      else nextLevel();
    } else if (inside(point, { x: 800, y: 425, w: 150, h: 165 })) {
      audio.play("click");
      var restartLevel = function () { startLevel(state.currentLevelId); };
      if (window.WGAds) window.WGAds.showInterstitial(restartLevel);
      else restartLevel();
    }
  }

  function handleGameDown(point, event) {
    if (state.modal) {
      if (inside(point, { x: 410, y: 400, w: 245, h: 105 })) {
        audio.play("click");
        requestRewardedHint();
      } else if (inside(point, { x: 635, y: 400, w: 245, h: 105 })) {
        state.modal = null;
        audio.play("click");
      }
      return;
    }
    if (state.completeShown) {
      handleComplete(point);
      return;
    }
    if (state.completePending > 0) return;
    if (state.tutorialVisible) {
      state.tutorialVisible = false;
      audio.play("click");
      return;
    }
    if (inside(point, { x: 0, y: 0, w: 110, h: 100 })) {
      save.selectedPage = Math.ceil(state.currentLevelId / 30);
      persist();
      audio.play("click");
      changeScene("select");
      return;
    }
    if (inside(point, { x: 1070, y: 0, w: 110, h: 105 })) {
      resetLevel();
      audio.play("click");
      return;
    }
    if (inside(point, { x: 1170, y: 0, w: 110, h: 105 })) {
      audio.toggle();
      audio.play("click");
      return;
    }
    if (inside(point, { x: 1060, y: 140, w: 200, h: 200 })) {
      audio.play("click");
      useHint();
      return;
    }
    var cell = boardCell(point);
    if (cell && activeCell(cell) && beginPath(cell)) {
      state.pointerId = event.pointerId;
      state.lastPointer = point;
      canvas.setPointerCapture(event.pointerId);
    }
  }

  function tracePointer(from, to) {
    var dx = to.x - from.x;
    var dy = to.y - from.y;
    var distance = Math.sqrt(dx * dx + dy * dy);
    var steps = Math.max(1, Math.ceil(distance / 12));
    for (var i = 1; i <= steps; i += 1) {
      var point = { x: from.x + dx * i / steps, y: from.y + dy * i / steps };
      var cell = boardCell(point);
      if (cell) extendPath(cell);
      if (!state.drawingColor) break;
    }
  }

  canvas.addEventListener("pointerdown", function (event) {
    event.preventDefault();
    if (state.adPaused) return;
    audio.unlock();
    var point = logicalPoint(event);
    if (state.scene === "title") handleTitle(point);
    else if (state.scene === "select") handleSelect(point);
    else if (state.scene === "game") handleGameDown(point, event);
  });

  canvas.addEventListener("pointermove", function (event) {
    if (state.adPaused) return;
    var point = logicalPoint(event);
    state.hover = point;
    if (state.scene === "game" && state.pointerId === event.pointerId && state.drawingColor && state.lastPointer) {
      event.preventDefault();
      tracePointer(state.lastPointer, point);
      state.lastPointer = point;
    }
  });

  function endPointer(event) {
    if (state.pointerId === event.pointerId) {
      state.pointerId = null;
      state.drawingColor = null;
      state.lastPointer = null;
      if (canvas.hasPointerCapture(event.pointerId)) canvas.releasePointerCapture(event.pointerId);
    }
  }

  canvas.addEventListener("pointerup", endPointer);
  canvas.addEventListener("pointercancel", endPointer);
  canvas.addEventListener("contextmenu", function (event) { event.preventDefault(); });

  document.addEventListener("visibilitychange", function () {
    if (!audio.unlocked || !audio.music) return;
    if (document.hidden) audio.music.pause();
    else if (save.audioEnabled && !state.adPaused) audio.music.play()["catch"](function () {});
  });

  if (window.WGAds) {
    window.WGAds.setHooks({
      pause: function () {
        state.adPaused = true;
        state.pointerId = null;
        state.drawingColor = null;
        state.lastPointer = null;
        audio.pauseForAd();
      },
      resume: function () {
        state.adPaused = false;
        audio.resumeAfterAd();
      },
      rewardedComplete: function () {
        grantRewardedHint();
      },
      rewardedFailed: function () {
        showToast("Watch the full ad to receive the hint.");
      },
      rewardAvailability: function (available) {
        state.rewardedHintAvailable = available;
      }
    });
  }

  if (window.CandyLevels.validationErrors.length) {
    console.error("Candy Flow Factory level validation failed", window.CandyLevels.validationErrors);
  }

  state.page = save.selectedPage;
  initializeAmbientParticles();
  preload();
  requestAnimationFrame(loop);
}());
