



function drawWindingRoad(ctx, fromX, fromY, toX, toY, width, color) {
    ctx.save();
    
    
    const segments = 20; 
    const waveAmplitude = 15; 
    
    
    const dx = toX - fromX;
    const dy = toY - fromY;
    const angle = Math.atan2(dy, dx);
    
    
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.15)';
    ctx.lineWidth = width + 3;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    
    ctx.beginPath();
    ctx.moveTo(fromX + 2, fromY + 2);
    
    for (let i = 1; i <= segments; i++) {
        const t = i / segments;
        const x = fromX + dx * t;
        const y = fromY + dy * t;
        
        const wave = Math.sin(t * Math.PI * 2.5) * waveAmplitude;
        const perpX = Math.cos(angle + Math.PI / 2) * wave;
        const perpY = Math.sin(angle + Math.PI / 2) * wave;
        
        ctx.lineTo(x + perpX + 2, y + perpY + 2);
    }
    
    ctx.stroke();
    
    
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    
    ctx.beginPath();
    ctx.moveTo(fromX, fromY);
    
    
    for (let i = 1; i <= segments; i++) {
        const t = i / segments;
        const x = fromX + dx * t;
        const y = fromY + dy * t;
        
        const wave = Math.sin(t * Math.PI * 2.5) * waveAmplitude;
        const perpX = Math.cos(angle + Math.PI / 2) * wave;
        const perpY = Math.sin(angle + Math.PI / 2) * wave;
        
        ctx.lineTo(x + perpX, y + perpY);
    }
    
    ctx.stroke();
    
    
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.lineWidth = 1;
    
    
    ctx.beginPath();
    ctx.moveTo(fromX - width/2, fromY);
    for (let i = 1; i <= segments; i++) {
        const t = i / segments;
        const x = fromX + dx * t;
        const y = fromY + dy * t;
        
        const wave = Math.sin(t * Math.PI * 2.5) * waveAmplitude;
        const perpX = Math.cos(angle + Math.PI / 2) * wave;
        const perpY = Math.sin(angle + Math.PI / 2) * wave;
        const edgeX = Math.cos(angle + Math.PI / 2) * width / 2;
        const edgeY = Math.sin(angle + Math.PI / 2) * width / 2;
        
        ctx.lineTo(x + perpX - edgeX, y + perpY - edgeY);
    }
    ctx.stroke();
    
    
    ctx.beginPath();
    ctx.moveTo(fromX + width/2, fromY);
    for (let i = 1; i <= segments; i++) {
        const t = i / segments;
        const x = fromX + dx * t;
        const y = fromY + dy * t;
        
        const wave = Math.sin(t * Math.PI * 2.5) * waveAmplitude;
        const perpX = Math.cos(angle + Math.PI / 2) * wave;
        const perpY = Math.sin(angle + Math.PI / 2) * wave;
        const edgeX = Math.cos(angle + Math.PI / 2) * width / 2;
        const edgeY = Math.sin(angle + Math.PI / 2) * width / 2;
        
        ctx.lineTo(x + perpX + edgeX, y + perpY + edgeY);
    }
    ctx.stroke();
    
    ctx.restore();
}




const GAME_WIDTH = 1920;
const GAME_HEIGHT = 1080;

const STAGE_VISUAL_PROFILES = {
    frontier: {
        groundTint: 'rgba(56, 100, 62, 0.1)',
        groundTintSoft: 'rgba(135, 191, 120, 0.04)',
        patchTint: 'rgba(72, 118, 78, 0.12)',
        patchTintSoft: 'rgba(144, 201, 126, 0.02)',
        focusGlow: 'rgba(136, 204, 145, 0.1)',
        focusGlowStrong: 'rgba(196, 235, 184, 0.06)',
        wispCore: 'rgba(189, 230, 180, 0.05)',
        wispEdge: 'rgba(189, 230, 180, 0)',
        vignette: 'rgba(4, 10, 6, 0.34)',
        towerAura: 'rgba(148, 221, 177, 0.12)',
        enemyAura: 'rgba(167, 220, 190, 0.08)'
    },
    swarm: {
        groundTint: 'rgba(34, 82, 70, 0.12)',
        groundTintSoft: 'rgba(101, 173, 149, 0.04)',
        patchTint: 'rgba(44, 98, 86, 0.14)',
        patchTintSoft: 'rgba(108, 180, 154, 0.03)',
        focusGlow: 'rgba(96, 188, 182, 0.11)',
        focusGlowStrong: 'rgba(155, 225, 220, 0.06)',
        wispCore: 'rgba(157, 225, 217, 0.05)',
        wispEdge: 'rgba(157, 225, 217, 0)',
        vignette: 'rgba(4, 9, 10, 0.38)',
        towerAura: 'rgba(118, 222, 213, 0.13)',
        enemyAura: 'rgba(125, 210, 205, 0.08)'
    },
    attrition: {
        groundTint: 'rgba(70, 79, 96, 0.12)',
        groundTintSoft: 'rgba(138, 151, 174, 0.04)',
        patchTint: 'rgba(84, 96, 116, 0.14)',
        patchTintSoft: 'rgba(152, 162, 182, 0.03)',
        focusGlow: 'rgba(132, 158, 196, 0.1)',
        focusGlowStrong: 'rgba(192, 208, 236, 0.06)',
        wispCore: 'rgba(186, 204, 232, 0.05)',
        wispEdge: 'rgba(186, 204, 232, 0)',
        vignette: 'rgba(7, 9, 14, 0.42)',
        towerAura: 'rgba(156, 186, 226, 0.12)',
        enemyAura: 'rgba(166, 188, 225, 0.08)'
    },
    greed: {
        groundTint: 'rgba(106, 83, 42, 0.11)',
        groundTintSoft: 'rgba(186, 156, 86, 0.04)',
        patchTint: 'rgba(124, 96, 46, 0.14)',
        patchTintSoft: 'rgba(201, 172, 102, 0.03)',
        focusGlow: 'rgba(214, 179, 92, 0.11)',
        focusGlowStrong: 'rgba(244, 216, 146, 0.06)',
        wispCore: 'rgba(242, 213, 141, 0.05)',
        wispEdge: 'rgba(242, 213, 141, 0)',
        vignette: 'rgba(14, 10, 4, 0.38)',
        towerAura: 'rgba(237, 205, 126, 0.13)',
        enemyAura: 'rgba(231, 190, 114, 0.08)'
    },
    eclipse: {
        groundTint: 'rgba(48, 70, 118, 0.14)',
        groundTintSoft: 'rgba(118, 141, 214, 0.05)',
        patchTint: 'rgba(59, 82, 138, 0.16)',
        patchTintSoft: 'rgba(135, 156, 227, 0.03)',
        focusGlow: 'rgba(123, 156, 255, 0.12)',
        focusGlowStrong: 'rgba(171, 195, 255, 0.07)',
        wispCore: 'rgba(165, 191, 255, 0.06)',
        wispEdge: 'rgba(165, 191, 255, 0)',
        vignette: 'rgba(4, 6, 16, 0.48)',
        towerAura: 'rgba(135, 177, 255, 0.14)',
        enemyAura: 'rgba(147, 187, 255, 0.09)'
    }
};

const STAGE_ATMOSPHERE_WISPS = [
    { x: 0.22, y: 0.3, rx: 180, ry: 62, driftX: 42, driftY: 16, speed: 0.17, phase: 0.4 },
    { x: 0.74, y: 0.24, rx: 160, ry: 58, driftX: 34, driftY: 14, speed: 0.22, phase: 1.1 },
    { x: 0.5, y: 0.56, rx: 220, ry: 78, driftX: 26, driftY: 12, speed: 0.15, phase: 2.3 }
];

const Game = {
    
    canvas: null,
    ctx: null,

    
    tower: null,
    waveManager: null,
    projectiles: [],
    effects: [],
    damageTexts: [],

    
    isRunning: false,
    isPaused: false,
    _manualPauseTriggered: false, 
    wasPausedByVisibility: false, 
    gameOver: false,
    lastTime: 0,
    animationId: null,
    currentStage: 1,

    
    gold: 0,
    sessionCrystals: 0,

    
    stats: {
        kills: 0,
        totalGold: 0,
        startTime: 0,
        gameTime: 0,
        upgradesBought: 0,
        waveDamageTaken: 0
    },

    
    crystalRewardInterval: 5, 
    crystalRewardAmount: 3,
    traderSummonCooldownMs: 14000,
    _lastTraderSummonAt: 0,
    _pendingWaveInterstitialWave: 0,
    _waveInterstitialInFlight: false,

    
    preRunAdBuffEnabled: false,
    preRunAdBuffWaveLimit: 5,

    
    reviveOfferUsed: false,
    awaitingReviveChoice: false,
    _gameOverFinalized: false,
    _gameOverFinalizePromise: null,
    _gameOverFinalStats: null,

    
    gpEventsState: {
        weekendX2GoldCrystals: false,
        bonusDayTag: 'Bonus_day',
        lastRefreshAt: 0,
        refreshIntervalMs: 30000
    },

    runModifierSnapshot: null,
    _eventTowerBonuses: null,
    _eliteEventActive: false,
    modalPauseReason: null,
    seasonPointsEarned: 0,

    debugCheats: {
        invulnerableTower: false,
        disableTowerAttack: false,
        nextRunGoldBonus: 0,
        showEventHud: false
    },

    _eventHudLastUpdateAt: 0,

    
    gameSpeed: 1.0, 
    currentSpeedStep: 0, 
    speedStepIncrement: 0.25, 
    
        
    timeOfDay: 0, 
    dayNightCycle: 0, 
    dayNightDuration: 3600, 
    
    
    damageBoostEndTime: 0,
    speedBoostEndTime: 0,

    
    xpSystem: null,
    birdSystem: null,
    mushrooms: [],
    crystals: [],
    isSoftPaused: false,
    softPauseFactor: 0.2, 

    
    mushroomSpawnTimer: 0,
    mushroomSpawnInterval: 20000, 
    mushroomGold: 10,

    
    crystalRainTimer: 0,

    
    forestData: [],

    groundTexture: {
        image: null,
        loaded: false
    },

    grassAtlas: {
        image: null,
        loaded: false,
        sprites: []
    },

    mushroomAtlas: {
        image: null,
        loaded: false,
        sprites: [],
        spriteUrls: []
    },

    groundGrassInstances: [],

    
    fantasyTrees: {
        loaded: false,
        images: {},
        imagesLoaded: { Tree1: false, Tree2: false, Tree3: false },
        
        types: [
            { type: 'back', scale: 0.8, yOffset: 0 },    
            { type: 'front', scale: 1.2, yOffset: 20 }   
        ],
        
        trees: []
    },

    getStageVisualProfile() {
        const themeId = (typeof StageThemes !== 'undefined' && StageThemes && typeof StageThemes.getThemeId === 'function')
            ? StageThemes.getThemeId(this.currentStage)
            : 'frontier';
        return STAGE_VISUAL_PROFILES[themeId] || STAGE_VISUAL_PROFILES.frontier;
    },

    
    async loadTreeImages() {
        const treeTypes = ['Tree1', 'Tree2', 'Tree3'];
        const promises = treeTypes.map(type => {
            return new Promise((resolve) => {
                if (this.fantasyTrees.images[type]) {
                    resolve();
                    return;
                }

                const img = new Image();
                img.onload = () => {
                    console.log(`Tree image ${type} loaded successfully`);
                    this.fantasyTrees.images[type] = img;
                    this.fantasyTrees.imagesLoaded[type] = true;
                    resolve();
                };
                img.onerror = () => {
                    console.warn(`Failed to load tree image ${type}`);
                    this.fantasyTrees.imagesLoaded[type] = false;
                    resolve();
                };
                img.src = `assets/images/trees/${type}.png`;
            });
        });

        await Promise.all(promises);
        this.fantasyTrees.loaded = true;
        console.log('All tree images loading complete');
    },

    async loadGroundTexture() {
        return new Promise((resolve) => {
            if (this.groundTexture.image && this.groundTexture.loaded) {
                resolve();
                return;
            }

            const img = new Image();
            img.onload = () => {
                this.groundTexture.image = img;
                this.groundTexture.loaded = true;
                console.log('Ground texture loaded: tex2.png');
                resolve();
            };
            img.onerror = () => {
                this.groundTexture.loaded = false;
                console.warn('Failed to load ground texture: assets/images/tex2.png');
                resolve();
            };
            img.src = 'assets/images/tex2.png';
        });
    },

    async loadGrassAtlas() {
        return new Promise((resolve) => {
            if (this.grassAtlas.image && this.grassAtlas.loaded) {
                resolve();
                return;
            }

            const img = new Image();
            img.onload = () => {
                this.grassAtlas.image = img;
                this.grassAtlas.loaded = true;
                this.prepareGrassSprites();
                console.log(`Grass atlas loaded: trav.png, sprites=${this.grassAtlas.sprites.length}`);
                resolve();
            };
            img.onerror = () => {
                this.grassAtlas.loaded = false;
                this.grassAtlas.sprites = [];
                console.warn('Failed to load grass atlas: assets/images/trav.png');
                resolve();
            };
            img.src = 'assets/images/trav.png';
        });
    },

    async loadMushroomAtlas() {
        return new Promise((resolve) => {
            if (this.mushroomAtlas.loaded && this.mushroomAtlas.spriteUrls && this.mushroomAtlas.spriteUrls.length > 0) {
                resolve();
                return;
            }

            const splitPaths = [
                'assets/images/moosh/White-red_mushroom1.png',
                'assets/images/moosh/White-red_mushroom2.png',
                'assets/images/moosh/White-red_mushroom3.png'
            ];

            let pending = splitPaths.length;
            let loadedCount = 0;
            const readyUrls = [];

            splitPaths.forEach((path, index) => {
                const img = new Image();
                img.onload = () => {
                    readyUrls[index] = path;
                    loadedCount++;
                    pending--;

                    if (pending === 0) {
                        if (loadedCount > 0) {
                            this.mushroomAtlas.loaded = true;
                            this.mushroomAtlas.sprites = [];
                            this.mushroomAtlas.spriteUrls = readyUrls.filter(Boolean);
                            console.log(`Mushroom sprites loaded: ${this.mushroomAtlas.spriteUrls.length} variants`);
                            resolve();
                            return;
                        }

                        const atlasImage = new Image();
                        atlasImage.onload = () => {
                            this.mushroomAtlas.image = atlasImage;
                            this.mushroomAtlas.loaded = true;
                            this.prepareMushroomSprites();
                            console.log(`Mushroom atlas loaded: moosh.png, sprites=${this.mushroomAtlas.sprites.length}`);
                            resolve();
                        };
                        atlasImage.onerror = () => {
                            this.mushroomAtlas.loaded = false;
                            this.mushroomAtlas.sprites = [];
                            this.mushroomAtlas.spriteUrls = [];
                            console.warn('Failed to load mushroom assets (split + atlas)');
                            resolve();
                        };
                        atlasImage.src = 'assets/images/moosh.png';
                    }
                };
                img.onerror = () => {
                    pending--;
                    if (pending === 0) {
                        if (loadedCount > 0) {
                            this.mushroomAtlas.loaded = true;
                            this.mushroomAtlas.sprites = [];
                            this.mushroomAtlas.spriteUrls = readyUrls.filter(Boolean);
                            console.log(`Mushroom sprites loaded: ${this.mushroomAtlas.spriteUrls.length} variants`);
                            resolve();
                            return;
                        }

                        const atlasImage = new Image();
                        atlasImage.onload = () => {
                            this.mushroomAtlas.image = atlasImage;
                            this.mushroomAtlas.loaded = true;
                            this.prepareMushroomSprites();
                            console.log(`Mushroom atlas loaded: moosh.png, sprites=${this.mushroomAtlas.sprites.length}`);
                            resolve();
                        };
                        atlasImage.onerror = () => {
                            this.mushroomAtlas.loaded = false;
                            this.mushroomAtlas.sprites = [];
                            this.mushroomAtlas.spriteUrls = [];
                            console.warn('Failed to load mushroom assets (split + atlas)');
                            resolve();
                        };
                        atlasImage.src = 'assets/images/moosh.png';
                    }
                };
                img.src = path;
            });
        });
    },

    prepareGrassSprites() {
        if (!this.grassAtlas.image) {
            this.grassAtlas.sprites = [];
            return;
        }

        const src = this.grassAtlas.image;
        const off = document.createElement('canvas');
        off.width = src.width;
        off.height = src.height;
        const octx = off.getContext('2d', { willReadFrequently: true });
        octx.drawImage(src, 0, 0);

        const imageData = octx.getImageData(0, 0, src.width, src.height);
        const data = imageData.data;
        const width = src.width;
        const height = src.height;
        const total = width * height;
        const mask = new Uint8Array(total);
        const visited = new Uint8Array(total);

        for (let i = 0; i < total; i++) {
            const p = i * 4;
            const r = data[p];
            const g = data[p + 1];
            const b = data[p + 2];
            const max = Math.max(r, g, b);
            const min = Math.min(r, g, b);
            const sat = max - min;
            const luma = (r + g + b) / 3;

            if (luma < 168 && sat > 12 && b >= (g - 14)) {
                mask[i] = 1;
            }
        }

        const sprites = [];
        const queue = [];
        const neighbors = [-1, 1, -width, width];

        for (let start = 0; start < total; start++) {
            if (!mask[start] || visited[start]) continue;

            visited[start] = 1;
            queue.length = 0;
            queue.push(start);

            let area = 0;
            let minX = width;
            let minY = height;
            let maxX = 0;
            let maxY = 0;

            for (let qi = 0; qi < queue.length; qi++) {
                const idx = queue[qi];
                area++;

                const x = idx % width;
                const y = (idx / width) | 0;
                if (x < minX) minX = x;
                if (x > maxX) maxX = x;
                if (y < minY) minY = y;
                if (y > maxY) maxY = y;

                for (let ni = 0; ni < neighbors.length; ni++) {
                    const next = idx + neighbors[ni];
                    if (next < 0 || next >= total || visited[next] || !mask[next]) continue;

                    
                    if ((neighbors[ni] === -1 && (idx % width) === 0) ||
                        (neighbors[ni] === 1 && (idx % width) === width - 1)) {
                        continue;
                    }

                    visited[next] = 1;
                    queue.push(next);
                }
            }

            const boxW = maxX - minX + 1;
            const boxH = maxY - minY + 1;
            if (area < 80 || area > 5000 || boxW < 20 || boxH < 20 || boxW > 260 || boxH > 220) {
                continue;
            }

            const pad = 5;
            const sx = Math.max(0, minX - pad);
            const sy = Math.max(0, minY - pad);
            const ex = Math.min(width - 1, maxX + pad);
            const ey = Math.min(height - 1, maxY + pad);
            const sw = ex - sx + 1;
            const sh = ey - sy + 1;

            const sc = document.createElement('canvas');
            sc.width = sw;
            sc.height = sh;
            const sctx = sc.getContext('2d');
            const out = sctx.createImageData(sw, sh);
            const outData = out.data;

            for (let y = 0; y < sh; y++) {
                for (let x = 0; x < sw; x++) {
                    const srcX = sx + x;
                    const srcY = sy + y;
                    const srcI = srcY * width + srcX;
                    const srcP = srcI * 4;
                    const dstP = (y * sw + x) * 4;

                    const r = data[srcP];
                    const g = data[srcP + 1];
                    const b = data[srcP + 2];
                    const max = Math.max(r, g, b);
                    const min = Math.min(r, g, b);
                    const sat = max - min;
                    const luma = (r + g + b) / 3;

                    const lumStrength = Math.max(0, Math.min(1, (185 - luma) / 75));
                    const satStrength = Math.max(0, Math.min(1, (sat - 8) / 30));
                    const alpha = Math.round(lumStrength * satStrength * 255);

                    if (alpha <= 8) continue;

                    outData[dstP] = r;
                    outData[dstP + 1] = g;
                    outData[dstP + 2] = b;
                    outData[dstP + 3] = alpha;
                }
            }

            sctx.putImageData(out, 0, 0);
            sprites.push(sc);
        }

        this.grassAtlas.sprites = sprites;
    },

    prepareMushroomSprites() {
        if (!this.mushroomAtlas.image) {
            this.mushroomAtlas.sprites = [];
            this.mushroomAtlas.spriteUrls = [];
            return;
        }

        const src = this.mushroomAtlas.image;
        const off = document.createElement('canvas');
        off.width = src.width;
        off.height = src.height;
        const octx = off.getContext('2d', { willReadFrequently: true });
        octx.drawImage(src, 0, 0);

        const imageData = octx.getImageData(0, 0, src.width, src.height);
        const data = imageData.data;
        const width = src.width;
        const height = src.height;
        const total = width * height;
        const mask = new Uint8Array(total);
        const visited = new Uint8Array(total);

        
        let bgR = 0;
        let bgG = 0;
        let bgB = 0;
        let bgCount = 0;

        for (let x = 0; x < width; x++) {
            const top = (x * 4);
            const bottom = ((height - 1) * width + x) * 4;
            bgR += data[top]; bgG += data[top + 1]; bgB += data[top + 2]; bgCount++;
            bgR += data[bottom]; bgG += data[bottom + 1]; bgB += data[bottom + 2]; bgCount++;
        }
        for (let y = 1; y < height - 1; y++) {
            const left = (y * width) * 4;
            const right = (y * width + (width - 1)) * 4;
            bgR += data[left]; bgG += data[left + 1]; bgB += data[left + 2]; bgCount++;
            bgR += data[right]; bgG += data[right + 1]; bgB += data[right + 2]; bgCount++;
        }
        bgR /= Math.max(1, bgCount);
        bgG /= Math.max(1, bgCount);
        bgB /= Math.max(1, bgCount);

        for (let i = 0; i < total; i++) {
            const p = i * 4;
            const r = data[p];
            const g = data[p + 1];
            const b = data[p + 2];
            const luma = (r + g + b) / 3;
            const dr = r - bgR;
            const dg = g - bgG;
            const db = b - bgB;
            const dist = Math.sqrt(dr * dr + dg * dg + db * db);

            if (dist > 20 && luma < 240) {
                mask[i] = 1;
            }
        }

        const sprites = [];
        const queue = [];
        const neighbors = [-1, 1, -width, width];

        for (let start = 0; start < total; start++) {
            if (!mask[start] || visited[start]) continue;

            visited[start] = 1;
            queue.length = 0;
            queue.push(start);

            let area = 0;
            let minX = width;
            let minY = height;
            let maxX = 0;
            let maxY = 0;

            for (let qi = 0; qi < queue.length; qi++) {
                const idx = queue[qi];
                area++;

                const x = idx % width;
                const y = (idx / width) | 0;
                if (x < minX) minX = x;
                if (x > maxX) maxX = x;
                if (y < minY) minY = y;
                if (y > maxY) maxY = y;

                for (let ni = 0; ni < neighbors.length; ni++) {
                    const next = idx + neighbors[ni];
                    if (next < 0 || next >= total || visited[next] || !mask[next]) continue;

                    if ((neighbors[ni] === -1 && (idx % width) === 0) ||
                        (neighbors[ni] === 1 && (idx % width) === width - 1)) {
                        continue;
                    }

                    visited[next] = 1;
                    queue.push(next);
                }
            }

            const boxW = maxX - minX + 1;
            const boxH = maxY - minY + 1;
            if (area < 120 || area > 9000 || boxW < 14 || boxH < 14 || boxW > 220 || boxH > 220) {
                continue;
            }

            const pad = 4;
            const sx = Math.max(0, minX - pad);
            const sy = Math.max(0, minY - pad);
            const ex = Math.min(width - 1, maxX + pad);
            const ey = Math.min(height - 1, maxY + pad);
            const sw = ex - sx + 1;
            const sh = ey - sy + 1;

            const sc = document.createElement('canvas');
            sc.width = sw;
            sc.height = sh;
            const sctx = sc.getContext('2d');
            const out = sctx.createImageData(sw, sh);
            const outData = out.data;
            let nonTransparentPixels = 0;

            for (let y = 0; y < sh; y++) {
                for (let x = 0; x < sw; x++) {
                    const srcX = sx + x;
                    const srcY = sy + y;
                    const srcI = srcY * width + srcX;
                    const srcP = srcI * 4;
                    const dstP = (y * sw + x) * 4;

                    const r = data[srcP];
                    const g = data[srcP + 1];
                    const b = data[srcP + 2];
                    const luma = (r + g + b) / 3;
                    const dr = r - bgR;
                    const dg = g - bgG;
                    const db = b - bgB;
                    const dist = Math.sqrt(dr * dr + dg * dg + db * db);

                    const keyStrength = Math.max(0, Math.min(1, (dist - 14) / 26));
                    const lumStrength = Math.max(0, Math.min(1, (245 - luma) / 90));
                    const alpha = Math.round(Math.max(keyStrength, lumStrength * 0.55) * 255);

                    if (alpha <= 10) continue;

                    outData[dstP] = r;
                    outData[dstP + 1] = g;
                    outData[dstP + 2] = b;
                    outData[dstP + 3] = alpha;
                    nonTransparentPixels++;
                }
            }

            if (nonTransparentPixels < 120) {
                continue;
            }

            sctx.putImageData(out, 0, 0);
            sprites.push(sc);
        }

        this.mushroomAtlas.sprites = sprites;
        this.mushroomAtlas.spriteUrls = sprites.map((canvas) => canvas.toDataURL('image/png'));
    },

    
    activeBonuses: [],

    
    garden: {
        grid: [], 
        cellSize: 40,
        offsetX: 0,
        offsetY: 0,
        daysPassed: 0, 
        dayThreshold: 0.5 
    },

    
    shake: 0,

    
    _initialized: false,
    _resizeSyncRafId: null,
    _resizeSyncTimer: null,

    
    init() {
        if (this._initialized) {
            return;
        }
        this._initialized = true;

        
        
        document.addEventListener('contextmenu', (e) => e.preventDefault());

        
        if (typeof SaveManager !== 'undefined') {
            SaveManager.checkAndMigrate();
        }
        
        
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');
        
        
        this.setupPools();
        
        console.log('Canvas element found:', this.canvas);
        console.log('Canvas initial size:', this.canvas.width, 'x', this.canvas.height);
        
        
        this.resizeCanvas();
        
        
        window.addEventListener('resize', () => {
            this.scheduleCanvasResizeSync(0);
        });
        
        
        window.addEventListener('orientationchange', () => {
            this.scheduleCanvasResizeSync(120);
        });

        
        
        
        
        PerformanceMonitor.init();
        console.log('Performance monitoring enabled');

        
        UI.init();

        
        this.initGamePushEvents();
        
        
        this.questSystem = new QuestSystem();
        this.questSystem.initOnce();
        
        
        this.questUI = new QuestUI(this.questSystem);
        this.questUI.init();

        if (typeof SeasonSystem !== 'undefined' && SeasonSystem && typeof SeasonSystem.init === 'function') {
            SeasonSystem.init();
        }
        
        
        this.cardEffects = new CardEffects(this);
        console.log('✅ CardEffects system initialized');
        
        
        

        
        this.canvas.addEventListener('contextmenu', (e) => e.preventDefault());
        this.canvas.addEventListener('selectstart', (e) => e.preventDefault());

        
        this.canvas.addEventListener('click', (e) => {
            if (!this.isRunning || this.isGameplayPaused() || this.gameOver) return;
            
            const rect = this.canvas.getBoundingClientRect();
            
            const x = (e.clientX - rect.left) * (this.canvas.width / rect.width);
            const y = (e.clientY - rect.top) * (this.canvas.height / rect.height);
            
            
            if (this.trader && this.trader.checkClick(x, y)) {
                this.trader.onClick(this);
            }
        });

        
        
        
        window.addEventListener('keydown', (e) => {
            
            if (e.ctrlKey && e.shiftKey && (e.key === 'D' || e.key === 'd' || e.key === 'В' || e.key === 'в')) {
                e.preventDefault();
                PerformanceMonitor.showFpsCounter = !PerformanceMonitor.showFpsCounter;
                console.log('FPS Counter:', PerformanceMonitor.showFpsCounter ? 'ON' : 'OFF');
            }
            
            if (e.ctrlKey && e.shiftKey && (e.key === 'S' || e.key === 's' || e.key === 'Ы' || e.key === 'ы')) {
                e.preventDefault();
                PerformanceMonitor.logStats();
                console.log('Canvas Cache Stats:', CanvasCache.getStats());
            }
        });

        console.log('Game initialized');
        console.log('Debug: Ctrl+Shift+D — FPS counter, Ctrl+Shift+S — performance stats');
        
        
        const btnGameSpeed = document.getElementById('btnGameSpeed');
        if (btnGameSpeed) {
            btnGameSpeed.addEventListener('click', () => this.toggleGameSpeed());
        }
        
        
        const btnBerserk = document.getElementById('btnBerserk');
        if (btnBerserk) {
            btnBerserk.addEventListener('click', () => {
                if (this.cardEffects) {
                    this.cardEffects.activateBerserk();
                }
            });
        }
    },

    
    toggleGameSpeed() {
        
        let maxSpeed = 1.0;
        if (typeof inGameUpgrades !== 'undefined') {
            maxSpeed = inGameUpgrades.getValue('gameSpeed');
        }
        
        
        const totalSteps = Math.round((maxSpeed - 1.0) / this.speedStepIncrement);
        
        
        this.currentSpeedStep++;
        
        
        if (this.currentSpeedStep > totalSteps) {
            this.currentSpeedStep = 0;
        }
        
        
        this.gameSpeed = 1.0 + (this.currentSpeedStep * this.speedStepIncrement);
        
        
        const btnGameSpeed = document.getElementById('btnGameSpeed');
        if (btnGameSpeed) {
            const label = btnGameSpeed.querySelector('.ctrl-label');
            if (label) {
                label.textContent = 'x' + this.gameSpeed.toFixed(2);
            }
        }
        
        console.log('Game speed changed to:', this.gameSpeed);
    },
    
    
    updateBerserkButton() {
        const btnBerserk = document.getElementById('btnBerserk');
        if (!btnBerserk || !this.cardEffects) return;
        
        const status = this.cardEffects.getBerserkStatus();
        
        
        if (!status.available) {
            btnBerserk.style.display = 'none';
            return;
        }
        
        btnBerserk.style.display = 'flex';
        const label = btnBerserk.querySelector('.ctrl-label');
        
        if (status.active) {
            
            const seconds = Math.ceil(status.duration / 1000);
            if (label) label.textContent = `${seconds}s`;
            btnBerserk.disabled = true;
            btnBerserk.style.opacity = '1';
            btnBerserk.style.animation = 'pulse 0.5s infinite';
        } else if (status.cooldown > 0) {
            
            const seconds = Math.ceil(status.cooldown / 1000);
            if (label) label.textContent = `${seconds}s`;
            btnBerserk.disabled = true;
            btnBerserk.style.opacity = '0.5';
            btnBerserk.style.animation = 'none';
        } else {
            
            if (label) label.textContent = '⚡';
            btnBerserk.disabled = false;
            btnBerserk.style.opacity = '1';
            btnBerserk.style.animation = 'none';
        }
    },

    
    getGameSpeed() {
        return this.gameSpeed;
    },

    isGameplayPaused() {
        const gp = this.getGp();
        if (this.modalPauseReason) {
            return true;
        }
        if (this.isPaused) {
            return true;
        }
        if (gp && typeof gp.isPaused === 'boolean') {
            return gp.isPaused === true;
        }
        return false;
    },

    beginModalPause(reason) {
        this.modalPauseReason = reason || 'modal';
    },

    endModalPause(reason = null) {
        if (!reason || this.modalPauseReason === reason) {
            this.modalPauseReason = null;
        }
    },

    
    setSoftPause(enabled) {
        this.isSoftPaused = enabled;
        console.log('Soft pause:', enabled ? 'ON' : 'OFF');
    },

    
    setupVisibilityHandler() {
        if (this._visibilityHandlersBound) return;
        this._visibilityHandlersBound = true;

        document.addEventListener('visibilitychange', () => {
            
            if (this.getGp()) return;

            if (document.hidden) {
                
                if (this.isRunning && !this.isPaused) {
                    this.isPaused = true;
                    this.wasPausedByVisibility = true;
                    AudioManager.pauseAll();
                    console.log('Game paused - window inactive (fallback)');
                }
            } else {
                
                if (this.wasPausedByVisibility) {
                    this.isPaused = false;
                    this.wasPausedByVisibility = false;
                    AudioManager.resumeAll();
                    this.lastTime = performance.now(); 
                    console.log('Game resumed - window active (fallback)');
                }
            }
        });
    },

    
    
    
    setupPools() {
        if (typeof PoolManager === 'undefined') return;
        
        console.log('Setting up object pools...');
        
        
        PoolManager.createPool('hitEffect', 
            () => new HitEffect(0, 0, false),
            (obj, x, y, isCrit = false) => {
                obj.x = x;
                obj.y = y;
                obj.isCrit = isCrit;
                obj.maxRadius = isCrit ? 30 : 15;
                obj.radius = 5;
                obj.alpha = 1;
                obj.markedForDeletion = false;
                obj.particles = [];
                
                const count = isCrit ? 12 : 6;
                for (let i = 0; i < count; i++) {
                    const angle = (Math.PI * 2 / count) * i;
                    const speed = isCrit ? 3 + Math.random() * 2 : 1.5 + Math.random() * 1.5;
                    obj.particles.push({
                        vx: Math.cos(angle) * speed,
                        vy: Math.sin(angle) * speed,
                        life: 1,
                        size: isCrit ? 3 + Math.random() * 2 : 2 + Math.random()
                    });
                }
            },
            100
        );
        
        
        PoolManager.createPool('damageText',
            () => new DamageText(0, 0, 0, false),
            (obj, x, y, damage, isCrit = false) => {
                obj.x = x;
                obj.y = y;
                obj.damage = damage;
                obj.isCrit = isCrit;
                obj.life = 1;
                obj.vy = -2;
                obj.markedForDeletion = false;
            },
            100
        );
        
        
        PoolManager.createPool('enemyProjectile',
            () => new EnemyProjectile({x:0, y:0, targetX:1, targetY:1, damage:0, speed:1, color:"#fff", radius:1}),
            (obj, params) => {
                obj.x = params.x;
                obj.y = params.y;
                obj.damage = params.damage;
                obj.speed = params.speed;
                obj.color = params.color || "#9b59b6";
                obj.radius = params.radius || 8;
                obj.life = 220;
                obj.markedForDeletion = false;

                const dx = params.targetX - params.x;
                const dy = params.targetY - params.y;
                const distance = Math.sqrt(dx * dx + dy * dy) || 1;
                obj.vx = dx / distance;
                obj.vy = dy / distance;
            },
            50
        );

        
        PoolManager.createPool('arrow',
            () => new Arrow(0, 0, null, { damage: 0, speed: 1, type: 'normal' }),
            (obj, x, y, target, params) => {
                obj.x = x;
                obj.y = y;
                obj.target = target;
                obj.splitting = null;
                obj.freezing = false;
                obj.freezeDuration = 0;
                obj.freezeRadius = 0;
                obj.hasSplit = false;
                obj.isSplitArrow = false;
                obj.hitEnemies = null;
                obj.chainCount = 0;
                obj.chainRadius = 0;
                obj.chainedEnemies = null;
                obj.explosionRadius = 0;
                obj.magicDamage = 0;
                obj.magicRadius = 0;
                obj.slowAmount = 0;
                obj.slowDuration = 0;
                obj.noHoming = false;
                obj.maxDistance = 260;
                obj.traveledDistance = 0;
                
                
                if (typeof params === 'number') {
                    obj.damage = params;
                    obj.speed = arguments[5] || 10;
                    obj.type = arguments[6] || 'normal';
                    obj.isCrit = arguments[7] || false;
                    obj.vampirismChance = 0;
                    obj.vampirismAmount = 0;
                    obj.piercing = false;
                } else {
                    obj.damage = params.damage || 0;
                    obj.speed = params.speed || 10;
                    obj.type = params.type || 'normal';
                    obj.isCrit = params.isCrit || false;
                    obj.vampirismChance = params.vampirismChance || 0;
                    obj.vampirismAmount = params.vampirismAmount || 0;
                    obj.piercing = params.piercing || false;
                    obj.hitEnemies = params.piercing ? new Set() : null;
                    obj.chainCount = params.chainCount || 0;
                    obj.chainRadius = params.chainRadius || 0;
                    obj.chainedEnemies = obj.chainCount > 0 ? new Set() : null;
                    obj.explosionRadius = params.explosionRadius || 0;
                    obj.magicDamage = params.magicDamage || 0;
                    obj.magicRadius = params.magicRadius || 0;
                    obj.slowAmount = params.slowAmount || 0;
                    obj.slowDuration = params.slowDuration || 0;
                    obj.noHoming = params.noHoming || false;
                    obj.maxDistance = params.maxDistance || 1000;
                    obj.traveledDistance = 0;
                }

                obj.markedForDeletion = false;
                obj.trail = [];
                if (typeof obj.setupByType === 'function') {
                    obj.setupByType();
                }
                
                if (obj.noHoming && typeof params === 'object' && typeof params.angle === 'number') {
                    obj.angle = params.angle;
                } else {
                    const safeTarget = target || { x: x + 1, y: y };
                    const dx = safeTarget.x - x;
                    const dy = safeTarget.y - y;
                    obj.angle = Math.atan2(dy, dx);
                }
            },
            200
        );
    },

    
    resizeCanvas() {
        if (!this.canvas) return;
        
        
        const internalWidth = 1920; 
        const internalHeight = 1080;
        
        if (this.canvas.width === internalWidth && this.canvas.height === internalHeight) {
            return;
        }
        
        this.canvas.width = internalWidth;
        this.canvas.height = internalHeight;
        
        
        

        
        if (this.isRunning) {
            this.generateForest();
            this.generateFantasyTrees();
        }

        console.log(`Canvas initialized at ${internalWidth}x${internalHeight}`);
    },

    



    scheduleCanvasResizeSync(delayMs = 0) {
        if (this._resizeSyncTimer) {
            clearTimeout(this._resizeSyncTimer);
            this._resizeSyncTimer = null;
        }

        const run = () => {
            if (this._resizeSyncRafId) {
                cancelAnimationFrame(this._resizeSyncRafId);
                this._resizeSyncRafId = null;
            }

            this._resizeSyncRafId = requestAnimationFrame(() => {
                this._resizeSyncRafId = null;
                this.resizeCanvas();

                
                if (this.isRunning) {
                    this.syncUIToCanvas();
                }
            });
        };

        if (delayMs > 0) {
            this._resizeSyncTimer = setTimeout(() => {
                this._resizeSyncTimer = null;
                run();
            }, delayMs);
            return;
        }

        run();
    },

    




    syncUIToCanvas() {
        const gameUI = document.querySelector('.game-ui');
        if (!gameUI || !this.canvas) return;

        const canvasRect = this.canvas.getBoundingClientRect();
        const containerRect = this.canvas.parentElement.getBoundingClientRect();

        gameUI.style.left   = (canvasRect.left - containerRect.left) + 'px';
        gameUI.style.top    = (canvasRect.top  - containerRect.top)  + 'px';
        gameUI.style.width  = canvasRect.width  + 'px';
        gameUI.style.height = canvasRect.height + 'px';

        
        this.scaleGameUI(canvasRect.width, canvasRect.height);

        
        const root = document.documentElement;
        if (root) {
            const isUltraWideMobile = root.classList.contains('layout-mobile')
                && root.classList.contains('device-landscape')
                && root.classList.contains('ultrawide-mobile');

            if (isUltraWideMobile) {
                const baseWidth = 1920;
                const scale = Math.max(0.0001, canvasRect.width / baseWidth);
                const verticalCropPx = Math.max(0, (canvasRect.height - containerRect.height) / 2);
                const safeInsetUnits = Math.round((verticalCropPx / scale) + 8);
                const safeInset = `${Math.max(8, safeInsetUnits)}px`;

                root.style.setProperty('--mobile-hud-safe-top', safeInset);
                root.style.setProperty('--mobile-hud-safe-bottom', safeInset);
            } else {
                root.style.setProperty('--mobile-hud-safe-top', '8px');
                root.style.setProperty('--mobile-hud-safe-bottom', '8px');
            }
        }
    },

    



    scaleGameUI(canvasWidth, canvasHeight) {
        const gameUI = document.querySelector('.game-ui');
        if (!gameUI) return;

        
        const baseWidth = 1920;
        const scale = canvasWidth / baseWidth;

        
        
        gameUI.style.transformOrigin = 'top left';
        gameUI.style.transform = `scale(${scale})`;

        
        
        gameUI.style.width = `${baseWidth}px`;
        const baseHeight = 1080;
        gameUI.style.height = `${baseHeight}px`;
    },

    showGameLoading(text) {
        const overlay = document.getElementById('gameLoadingOverlay');
        const textEl = document.getElementById('gameLoadingText');
        if (!overlay) return;

        if (this._gameLoadingHideTimer) {
            clearTimeout(this._gameLoadingHideTimer);
            this._gameLoadingHideTimer = null;
        }

        if (textEl && text) {
            textEl.textContent = text;
        }

        overlay.classList.remove('hidden');
        requestAnimationFrame(() => overlay.classList.add('visible'));
    },

    setGameLoadingText(text) {
        const textEl = document.getElementById('gameLoadingText');
        if (textEl && text) {
            textEl.textContent = text;
        }
    },

    hideGameLoading() {
        const overlay = document.getElementById('gameLoadingOverlay');
        if (overlay) {
            overlay.classList.remove('visible');
            this._gameLoadingHideTimer = setTimeout(() => {
                overlay.classList.add('hidden');
                this._gameLoadingHideTimer = null;
            }, 190);
        }
    },

    
    start(stage = null) {
        if (this.isRunning) {
            return;
        }

        if (!this.canvas) {
            this.canvas = document.getElementById('gameCanvas');
        }
        if (this.canvas && !this.ctx) {
            this.ctx = this.canvas.getContext('2d');
        }
        if (!this.canvas || !this.ctx || !this.cardEffects || !this.questSystem) {
            setTimeout(() => {
                this.start(stage);
            }, 250);
            return;
        }

        this._manualPauseTriggered = false;
        this.isPaused = false;
        this.lastTime = performance.now();

        const pauseOverlay = document.getElementById('pauseOverlay');
        if (pauseOverlay) {
            pauseOverlay.classList.add('hidden');
        }

        if (typeof window.__gpRequestResume === 'function') {
            window.__gpRequestResume('game_start');
        } else {
            const gp = this.getGp();
            if (gp && gp.isPaused === true && typeof gp.resume === 'function') {
                try {
                    gp.resume();
                } catch (error) {
                    console.warn('⚠️ Не удалось снять паузу SDK перед стартом:', error);
                }
            }
        }

        const stageData = (typeof SaveManager !== 'undefined' && SaveManager.getStageData)
            ? SaveManager.getStageData()
            : { selectedStage: 1, unlockedStage: 1 };
        const requestedStage = Number.isFinite(stage) ? stage : stageData.selectedStage;
        const normalizedStage = this.normalizeStageNumber(requestedStage);
        this.currentStage = Math.min(normalizedStage, Math.max(1, Number(stageData.unlockedStage || 1)));

        this._eventTowerBonuses = null;
        this.runModifierSnapshot = null;
        this._eliteEventActive = false;
        this.modalPauseReason = null;
        this.seasonPointsEarned = 0;
        this._lastTraderSummonAt = 0;
        this._pendingWaveInterstitialWave = 0;
        this._waveInterstitialInFlight = false;

        if (typeof RunModifiers !== 'undefined' && RunModifiers && typeof RunModifiers.startRun === 'function') {
            RunModifiers.startRun(this.currentStage);
        }
        if (typeof EliteEvents !== 'undefined' && EliteEvents && typeof EliteEvents.resetRun === 'function') {
            EliteEvents.resetRun();
        }

        if (typeof SaveManager !== 'undefined' && typeof SaveManager.setSelectedStage === 'function') {
            SaveManager.setSelectedStage(this.currentStage);
        }

        const t = (key, fallback) => {
            if (typeof LocalizationManager === 'undefined') return fallback;
            return LocalizationManager.t(key, fallback);
        };

        this.showGameLoading(t('loadingWorld', 'Загрузка мира...'));

        
        requestAnimationFrame(async () => {
            try {
                
                this.resizeCanvas();

                this.setGameLoadingText(t('loadingAssets', 'Загрузка ассетов...'));

                
                await Tower.loadImage();
                if (typeof Enemy !== "undefined" && Enemy.loadImages) {
                    await Enemy.loadImages();
                }
                if (typeof Trader !== "undefined" && Trader.loadImages) {
                    await Trader.loadImages();
                }
                await this.loadTreeImages();
                await this.loadGroundTexture();
                await this.loadGrassAtlas();
                await this.loadMushroomAtlas();

                this.setGameLoadingText(t('loadingMap', 'Подготовка карты...'));

                
                this.generateForest();
            
             
              if (typeof inGameUpgrades !== 'undefined') {
                  inGameUpgrades.reset();
              }
              
              
              let permanentEffects = {};
              if (typeof permanentUpgradeManager !== 'undefined') {
                  permanentEffects = permanentUpgradeManager.getTotalEffects();
              }
              
              
               if (typeof daySystem !== 'undefined') {
                   daySystem.init((bonuses) => {
                       
                        if (bonuses.gold > 0) {
                            let bonusGold = bonuses.gold;
                            if (typeof TalentTree !== 'undefined') {
                                const talentEffects = TalentTree.getEffects();
                                bonusGold = Math.floor(bonusGold * (1 + (talentEffects.dayGoldMult || 0)));
                            }
                            const goldReward = this.applyGoldEventMultiplier(bonusGold);
                            this.gold += goldReward;
                            this.createFloatingText(
                                this.canvas.width / 2, 
                                this.canvas.height / 2 - 50, 
                                typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('floatDayBonusGold', '+{0} 💰 (daily bonus)', goldReward).replace('{0}', goldReward) : `+${goldReward} 💰 (daily bonus)`, 
                                '#f1c40f'
                            );
                        }
                        if (bonuses.crystals > 0) {
                            let bonusCrystals = bonuses.crystals;
                            if (typeof TalentTree !== 'undefined') {
                                const talentEffects = TalentTree.getEffects();
                                bonusCrystals += Math.floor(talentEffects.dayCrystalFlat || 0);
                            }
                            const crystalReward = this.applyCrystalEventMultiplier(bonusCrystals);
                            this.sessionCrystals += crystalReward;
                            this.createFloatingText(
                                this.canvas.width / 2, 
                                this.canvas.height / 2 - 80, 
                                typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('floatDayBonusCrystals', '+{0} 💎 (daily bonus)', crystalReward).replace('{0}', crystalReward) : `+${crystalReward} 💎 (daily bonus)`, 
                                '#9b59b6'
                            );
                        }
                   });
               }

              
              this.tower = new Tower(
                  this.canvas.width / 2,
                  this.canvas.height / 2,
                  inGameUpgrades,
                  permanentEffects
              );

              
              this.projectiles = [];
              this.effects = [];
              this.damageTexts = [];
              this.fallingCrystals = [];
              this.gold = 100;
              this.crystals = SaveManager ? SaveManager.getCrystals() : 0;
              this.sessionCrystals = 0;
              this.lastPassiveIncome = Date.now();
              this._uiLastHealth = -1;
              this._uiLastGold = -1;
              this._uiLastWave = -1;
              this._uiLastCrystals = -1;
              this._uiLastPassive = -1;

              
              this.cardEffects.loadActiveCards();
              this.cardEffects.applyStartEffects();
              this.refreshRunDerivedBonuses();
              if (typeof UI !== 'undefined' && UI.updateModifierHud) {
                  UI.updateModifierHud();
                  if (typeof RunModifiers !== 'undefined' && RunModifiers && typeof UI.showRunModifierIntro === 'function') {
                      setTimeout(() => {
                          UI.showRunModifierIntro(RunModifiers.getActiveModifiers());
                      }, 650);
                  }
              }

              if (this.debugCheats.nextRunGoldBonus > 0) {
                  this.gold += this.debugCheats.nextRunGoldBonus;
                  this.createFloatingText(
                      this.canvas.width / 2,
                      this.canvas.height / 2 - 120,
                      `🔧 +${this.debugCheats.nextRunGoldBonus} 💰`,
                      '#f1c40f'
                  );
                  this.debugCheats.nextRunGoldBonus = 0;
              }
             
             
             if (typeof inGameUpgrades !== 'undefined') {
                 inGameUpgrades.init();
                 
             }

            this.waveManager = new WaveManager();
             this.trader = new Trader(this.canvas);
             
             
              const unlockedGardens = SaveManager ? SaveManager.getUnlockedGardens() : 1;
              this.gardenSystem = new GardenSystem(unlockedGardens);
              const savedSeeds = SaveManager ? SaveManager.getSeedsForNextGame() : 0;
              if (savedSeeds > 0) {
                  this.gardenSystem.addSeeds(savedSeeds);
              }
              
              
              this.xpSystem = new XPSystem(this);
              this.xpSystem.reset();
              
              
              this.birdSystem = new BirdSystem(this.canvas);
              
              
              this.setupVisibilityHandler();
              
               
               this.activeUpgradesPanel = new ActiveUpgradesPanel(this.xpSystem);
               this.activeUpgradesPanel.init();

               
               this.createXPBar();
               
               
               this.upgradeEffects = new UpgradeEffects(this);
               
               

                
                
                requestAnimationFrame(() => this.syncUIToCanvas());

                this.setGameLoadingText(t('loadingBattle', 'Подготовка к бою...'));

                this.waveManager.startWave();
             
             
             if (typeof AudioManager !== 'undefined') {
                 AudioManager.playRandomMusicTrack();
                 AudioManager.playSound('towerBuild');
              }
             
             
             AudioManager.playSound('waveStart');

               console.log('Game started with crystals:', this.crystals);
              this.isRunning = true;
             this.isPaused = false;
             this.gameOver = false;
             this.lastTime = performance.now();

             if (typeof UI !== 'undefined' && UI.updateModifierHud) {
                 UI.updateModifierHud();
             }
             
             
               const gpGameplay = this.getGp();
               if (gpGameplay && typeof gpGameplay.gameplayStart === 'function') {
                   gpGameplay.gameplayStart();
               }
               this.gpTrackEvent('game_session_start', {
                   wave: 1,
                   gold: this.gold,
                   crystals: this.crystals,
                   stage: this.currentStage
               });
             
              
              this.stats = {
                  kills: 0,
                  totalGold: 100, 
                  totalCrystals: 0, 
                  startTime: Date.now(),
                  gameTime: 0,
                  upgradesBought: 0,
                  waveDamageTaken: 0,
                  eliteChoices: 0,
                  traderDeals: 0
              };

               this.reviveOfferUsed = false;
               this.awaitingReviveChoice = false;
               this._gameOverFinalized = false;
               this._gameOverFinalizePromise = null;
               this._gameOverFinalStats = null;

              if (this.preRunAdBuffEnabled) {
                  const buffText = typeof LocalizationManager !== 'undefined' 
                      ? LocalizationManager.t('preRunBuffGranted', 'Bonus activated: +100% gold and XP for 5 waves')
                      : 'Bonus activated: +100% gold and XP for 5 waves';
                  this.createFloatingText(
                      this.canvas.width / 2,
                      this.canvas.height / 2 - 140,
                      `📺 ${buffText}`,
                      '#f1c40f'
                  );
              }

              
              this.gameSpeed = 1.0;
              this.currentSpeedStep = 0;
              const btnGameSpeed = document.getElementById('btnGameSpeed');
              if (btnGameSpeed) {
                  const label = btnGameSpeed.querySelector('.ctrl-label');
                  if (label) {
                      label.textContent = 'x1.00';
                  }
              }

            
            this.initGarden();

            
             UI.updateGameUI({
                 health: this.tower.health,
                 gold: this.gold,
                 wave: 1,
                 crystals: this.crystals,
                  sessionCrystals: 0
              });

             if (typeof UI !== 'undefined' && UI.updatePreRunAdBuffBadge) {
                 UI.updatePreRunAdBuffBadge(this.getPreRunAdBuffWavesLeft());
             }

            UI.updateArrowSelection('normal');
            
            
            if (typeof UI !== 'undefined' && UI.updateItemsUI) {
                UI.updateItemsUI();
            }
            
            
            if (typeof inGameUpgrades !== 'undefined') {
                inGameUpgrades.updateUI();
            }

                requestAnimationFrame(() => {
                    this.hideGameLoading();
                    this.gameLoop();
                });
            } catch (error) {
                console.error('Ошибка старта игры:', error);
                this.hideGameLoading();
                if (typeof UI !== 'undefined' && UI.showNotification) {
                    const errorText = (typeof LocalizationManager !== 'undefined' && typeof LocalizationManager.t === 'function')
                        ? LocalizationManager.t('uiGameLoadError', 'Loading error. Please try again.')
                        : 'Loading error. Please try again.';
                    UI.showNotification(errorText, '#e74c3c');
                }
            }
        });
    },

    
    gameLoop() {
        if (!this.isRunning) return;

        const currentTime = performance.now();
        const deltaTime = currentTime - this.lastTime;
        
        
        const frameInterval = 1000 / 60;

        if (deltaTime >= frameInterval) {
            
            
            const adjustedDelta = Math.min(deltaTime, 100); 
            this.lastTime = currentTime - (deltaTime % frameInterval);

            if (!this.isGameplayPaused() && !this.gameOver) {
                
                try {
                    PerformanceMonitor.startProfile('update');
                    this.update(adjustedDelta, currentTime);
                    PerformanceMonitor.endProfile('update');
                    
                    PerformanceMonitor.startProfile('draw');
                    this.draw();
                    PerformanceMonitor.endProfile('draw');
                } catch (err) {
                    console.error('❌ Game loop error:', err);
                    
                }
            }

            
            PerformanceMonitor.update(currentTime);
            PerformanceMonitor.recordFrameTime(performance.now() - currentTime);
        }

        this.animationId = requestAnimationFrame(() => this.gameLoop());
    },

    
    update(deltaTime, currentTime) {
        
        this.waveManager.update(this.canvas, this.tower, deltaTime);

        
        if (this.trader) this.trader.update(deltaTime);

        
        this.tower.update(deltaTime, this.waveManager, currentTime);
        
        
        if (this.tower.passiveIncome > 0) {
            const now = Date.now();
            if (now - this.lastPassiveIncome > (1000 / this.gameSpeed)) {
                this.gold += this.tower.passiveIncome;
                UI.updateGold(this.gold);
                this.lastPassiveIncome = now;
                
                
                if (typeof inGameUpgrades !== 'undefined') {
                    inGameUpgrades.updateUI();
                }
            }
        }

        
        
        for (let i = this.projectiles.length - 1; i >= 0; i--) {
            const projectile = this.projectiles[i];
            if (projectile.update) {
                projectile.update(this.waveManager, deltaTime);
            }
            if (projectile.markedForDeletion) {
                if (typeof PoolManager !== 'undefined') {
                    if (projectile instanceof EnemyProjectile) {
                        PoolManager.release('enemyProjectile', projectile);
                    } else if (projectile instanceof Arrow) {
                        PoolManager.release('arrow', projectile);
                    }
                }
                this.projectiles[i] = this.projectiles[this.projectiles.length - 1];
                this.projectiles.pop();
            }
        }

        
        for (let i = this.effects.length - 1; i >= 0; i--) {
            const effect = this.effects[i];
            const effectSpeed = effect && effect.ignoreGameSpeed ? 1 : this.gameSpeed;
            effect.update(effectSpeed);
            if (effect.markedForDeletion) {
                if (typeof PoolManager !== 'undefined' && effect instanceof HitEffect) {
                    PoolManager.release('hitEffect', effect);
                }
                this.effects[i] = this.effects[this.effects.length - 1];
                this.effects.pop();
            }
        }

        
        for (let i = this.damageTexts.length - 1; i >= 0; i--) {
            const text = this.damageTexts[i];
            text.update(this.gameSpeed);
            if (text.markedForDeletion) {
                if (typeof PoolManager !== 'undefined' && text instanceof DamageText) {
                    PoolManager.release('damageText', text);
                }
                this.damageTexts[i] = this.damageTexts[this.damageTexts.length - 1];
                this.damageTexts.pop();
            }
        }

        
        const uiHealth = Math.ceil(this.tower.health);
        const uiPassive = this.tower ? this.tower.passiveIncome : 0;
        if (uiHealth !== this._uiLastHealth ||
            this.gold !== this._uiLastGold ||
            this.waveManager.wave !== this._uiLastWave ||
            this.sessionCrystals !== this._uiLastCrystals ||
            uiPassive !== this._uiLastPassive) {
            this._uiLastHealth = uiHealth;
            this._uiLastGold = this.gold;
            this._uiLastWave = this.waveManager.wave;
            this._uiLastCrystals = this.sessionCrystals;
            this._uiLastPassive = uiPassive;
            UI.updateGameUI({
                health: this.tower.health,
                maxHealth: this.tower.maxHealth,
                gold: this.gold,
                wave: this.waveManager.wave,
                crystals: this.crystals,
                sessionCrystals: this.sessionCrystals,
                passiveIncome: uiPassive
            });

            if (typeof UI !== 'undefined' && UI.updatePreRunAdBuffBadge) {
                UI.updatePreRunAdBuffBadge(this.getPreRunAdBuffWavesLeft());
            }
        }
        
        
        this.updateBerserkButton();
        this.updateEventDebugHud(currentTime || performance.now());

         
         this.dayNightCycle += this.gameSpeed;
         if (this.dayNightCycle >= this.dayNightDuration) {
             this.dayNightCycle = 0;
         }
         this.lastTimeOfDay = this.timeOfDay;
         this.timeOfDay = this.dayNightCycle / this.dayNightDuration;

         
         this.updateGarden();
         
          const progressDay = (typeof daySystem !== 'undefined' && daySystem && typeof daySystem.getDaysCompleted === 'function')
              ? daySystem.getDaysCompleted()
              : this.garden.daysPassed;

          
          if (this.gardenSystem) {
              this.gardenSystem.updateGrowth(progressDay);
          }
          
          
          if (this.xpSystem) {
              this.xpSystem.update(deltaTime);
          }
          
          
          if (this.cardEffects) {
              this.cardEffects.update(deltaTime);
          }
          
          
          if (this.cardEffects) {
              this.cardEffects.checkDailyEffects(progressDay);
          }
          
          
          if (this.birdSystem) {
              const softPauseFactor = this.isSoftPaused ? this.softPauseFactor : 1;
              this.birdSystem.update(deltaTime * softPauseFactor);
          }
          
        
        if (this.upgradeEffects) {
            this.upgradeEffects.update(deltaTime);
        }

        
        if (this.frenzyTimer > 0) {
            const gameSpeed = this.gameSpeed || 1;
            this.frenzyTimer -= (deltaTime / 16.6) * gameSpeed;
            if (this.frenzyTimer <= 0) {
                this.waveManager.spawnDelay = this.originalSpawnDelay;
                console.log('🔥 Frenzy ended');
                UI.updateItemsUI(); 
            }
        }

        this.updateBastionShieldUI();
        
        
          this.updateMushrooms(deltaTime);
          
          
          this.updateCrystalRain(deltaTime);

          
          if (this.isScreenShakeDisabled()) {
              this.shake = 0;
          } else if (this.shake > 0) {
              this.shake *= 0.9;
              if (this.shake < 0.1) this.shake = 0;
          }
    },

    
    draw() {
        
        this._renderTime = Date.now() / 1000;

        
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        
        this.ctx.save();
        if (this.shake > 0 && !this.isScreenShakeDisabled()) {
            const sx = (Math.random() - 0.5) * this.shake;
            const sy = (Math.random() - 0.5) * this.shake;
            this.ctx.translate(sx, sy);
        }

         
         this.drawBackground();

         
         

        
        

         
         this.effects.forEach(effect => {
             if (effect instanceof HitEffect) {
                 effect.draw(this.ctx);
             }
         });

        
        this.drawEnemiesWithTreeParallax(this.ctx);

        
        this.projectiles.forEach(projectile => projectile.draw(this.ctx));

        
        this.tower.draw(this.ctx);

        
        this.effects.forEach(effect => {
            if (!(effect instanceof HitEffect)) {
                effect.draw(this.ctx);
            }
        });

        
        if (this.trader) this.trader.draw(this.ctx);

        this.ctx.restore(); 

        
        this.damageTexts.forEach(text => text.draw(this.ctx));
 
        
        this.drawBonuses();
         
        
        
        
        
         
        
        if (this.birdSystem) {
            this.birdSystem.draw(this.ctx);
        }
    },

    
    drawGrid() {
        const ctx = this.ctx;
        const gridSize = 50;
        
        ctx.save();
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
        ctx.lineWidth = 1;

        for (let x = 0; x < this.canvas.width; x += gridSize) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, this.canvas.height);
            ctx.stroke();
        }

        for (let y = 0; y < this.canvas.height; y += gridSize) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(this.canvas.width, y);
            ctx.stroke();
        }

        ctx.restore();
    },

    
    generateForest() {
        const w = this.canvas.width;
        const h = this.canvas.height;
        
        
        this.generateBackgroundCache();
        
         
         const forestDepth = 100;       
         const treeDensity = 0.4;       
         const treeSize = 35;           
        
        this.forestData = [];
        
        
        const generateTreesInZone = (x1, y1, x2, y2) => {
            const area = Math.abs(x2 - x1) * Math.abs(y2 - y1);
            const treeCount = Math.floor(area / 10000 * treeDensity * 100);
            
            for (let i = 0; i < treeCount; i++) {
                const randomX = x1 + Math.random() * (x2 - x1);
                const randomY = y1 + Math.random() * (y2 - y1);
                
                
                const sizeVariation = treeSize * (0.7 + Math.random() * 0.6);
                
                this.forestData.push({
                    x: randomX,
                    y: randomY,
                    size: sizeVariation,
                    colorIndex: Math.floor(Math.random() * 3)
                });
            }
        };

        
        generateTreesInZone(0, 0, w, forestDepth);

        
        generateTreesInZone(0, h - forestDepth, w, h);

        
        generateTreesInZone(0, forestDepth, forestDepth, h - forestDepth);

        
        generateTreesInZone(w - forestDepth, forestDepth, w, h - forestDepth);

        
        const cornerSize = 120;
        const corners = [
            {x: 0, y: 0},
            {x: w, y: 0},
            {x: 0, y: h},
            {x: w, y: h}
        ];
        
        corners.forEach((corner, idx) => {
            const extraTrees = 20; 
            for (let i = 0; i < extraTrees; i++) {
                const angle = Math.random() * Math.PI / 2;
                const distance = Math.random() * cornerSize;
                
                let offsetX = Math.cos(angle) * distance;
                let offsetY = Math.sin(angle) * distance;
                
                
                if (corner.x > w / 2) offsetX = -offsetX;
                if (corner.y > h / 2) offsetY = -offsetY;
                
                this.forestData.push({
                    x: corner.x + offsetX,
                    y: corner.y + offsetY,
                    size: treeSize * (0.7 + Math.random() * 0.6),
                    colorIndex: (idx + Math.floor(Math.random() * 3)) % 3
                });
            }
        });

        console.log(`Generated ${this.forestData.length} background trees`);

        
        this.generateFantasyTrees();
    },

    
    generateFantasyTrees() {
        const w = this.canvas.width;
        const h = this.canvas.height;

        
        this.fantasyTrees.trees = [];

        
        const forestDepth = 150; 
        
        
        const generateTreesInZone = (x1, y1, x2, y2, isFront) => {
            const area = Math.abs(x2 - x1) * Math.abs(y2 - y1);
            const density = isFront ? 0.00015 : 0.00012; 
            const treeCount = Math.floor(area * density);
            
            const type = isFront ? 'front' : 'back';
            const scale = isFront ? 0.98 : 0.76;
            const yOffset = isFront ? 18 : 0;
            const sizeMin = isFront ? 38 : 28;
            const sizeMax = isFront ? 56 : 40;
            
            for (let i = 0; i < treeCount; i++) {
                const x = x1 + Math.random() * (x2 - x1);
                const y = y1 + Math.random() * (y2 - y1) + yOffset;
                
                this.fantasyTrees.trees.push({
                    x: x,
                    y: y,
                    size: (sizeMin + Math.random() * (sizeMax - sizeMin)) * scale,
                    type: type,
                    treeType: 'Tree' + (1 + Math.floor(Math.random() * 3)),
                    swayOffset: Math.random() * Math.PI * 2
                });
            }
        };

        
        generateTreesInZone(0, -forestDepth, w, forestDepth, false); 
        generateTreesInZone(0, h - forestDepth, w, h + forestDepth, false); 
        generateTreesInZone(-forestDepth, 0, forestDepth, h, false); 
        generateTreesInZone(w - forestDepth, 0, w + forestDepth, h, false); 

        
        generateTreesInZone(0, -forestDepth, w, forestDepth, true); 
        generateTreesInZone(0, h - forestDepth, w, h + forestDepth, true); 
        generateTreesInZone(-forestDepth, 0, forestDepth, h, true); 
        generateTreesInZone(w - forestDepth, 0, w + forestDepth, h, true); 

        
        this.fantasyTrees.trees.sort((a, b) => a.y - b.y);

        console.log(`Generated ${this.fantasyTrees.trees.length} fantasy trees`);
    },

    
    generateBackgroundCache() {
        const w = this.canvas.width;
        const h = this.canvas.height;
        const visualProfile = this.getStageVisualProfile();
        
        
        CanvasCache.create('baseGround', w, h, (ctx, width, height) => {
            
            if (this.groundTexture.loaded && this.groundTexture.image) {
                const pattern = ctx.createPattern(this.groundTexture.image, 'repeat');
                if (pattern) {
                    ctx.fillStyle = pattern;
                    ctx.fillRect(0, 0, width, height);

                    
                    ctx.fillStyle = 'rgba(10, 24, 18, 0.22)';
                    ctx.fillRect(0, 0, width, height);
                } else {
                    ctx.fillStyle = '#3a6a2a';
                    ctx.fillRect(0, 0, width, height);
                }
            } else {
                ctx.fillStyle = '#3a6a2a';
                ctx.fillRect(0, 0, width, height);
            }

            const arenaCenterX = width * 0.5;
            const arenaCenterY = height * 0.58;
            const arenaFocus = ctx.createRadialGradient(
                arenaCenterX,
                arenaCenterY,
                width * 0.04,
                arenaCenterX,
                arenaCenterY,
                Math.min(width, height) * 0.44
            );
            arenaFocus.addColorStop(0, visualProfile.focusGlowStrong);
            arenaFocus.addColorStop(0.46, visualProfile.groundTintSoft);
            arenaFocus.addColorStop(1, 'rgba(0, 0, 0, 0)');
            ctx.fillStyle = arenaFocus;
            ctx.fillRect(0, 0, width, height);

            const terrainPatchCount = 9;
            for (let i = 0; i < terrainPatchCount; i++) {
                const px = 90 + Math.random() * (width - 180);
                const py = 80 + Math.random() * (height - 160);
                const radiusX = 90 + Math.random() * 90;
                const radiusY = radiusX * (0.42 + Math.random() * 0.18);
                const rotation = (Math.random() - 0.5) * 0.9;
                const patch = ctx.createRadialGradient(px, py, 0, px, py, radiusX);
                patch.addColorStop(0, visualProfile.patchTint);
                patch.addColorStop(0.72, visualProfile.patchTintSoft);
                patch.addColorStop(1, 'rgba(0, 0, 0, 0)');
                ctx.save();
                ctx.translate(px, py);
                ctx.rotate(rotation);
                ctx.fillStyle = patch;
                ctx.beginPath();
                ctx.ellipse(0, 0, radiusX, radiusY, 0, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }
            
               
               
               const decorations = [
                   
                   {x: 120, y: 600, type: 'stone', size: 12},
                   {x: 1780, y: 250, type: 'stone', size: 15},
                   {x: 200, y: 980, type: 'stone', size: 10},
                   {x: 1700, y: 800, type: 'stone', size: 13},
                   {x: 380, y: 320, type: 'stone', size: 8},
                   {x: 1520, y: 550, type: 'stone', size: 11}
               ];
               
                decorations.forEach(dec => {
                   if (dec.type === 'flower') {
                       
                       ctx.strokeStyle = '#2d5a1a';
                       ctx.lineWidth = 2;
                       ctx.beginPath();
                       ctx.moveTo(dec.x, dec.y + 8);
                       ctx.lineTo(dec.x, dec.y);
                       ctx.stroke();
                       
                       
                       ctx.fillStyle = dec.color;
                       for (let j = 0; j < 5; j++) {
                           const angle = (Math.PI * 2 / 5) * j;
                           const petalX = dec.x + Math.cos(angle) * 6;
                           const petalY = dec.y + Math.sin(angle) * 6;
                           ctx.beginPath();
                           ctx.arc(petalX, petalY, 3, 0, Math.PI * 2);
                           ctx.fill();
                       }
                       
                       
                       ctx.fillStyle = '#ffff99';
                       ctx.beginPath();
                       ctx.arc(dec.x, dec.y, 2, 0, Math.PI * 2);
                       ctx.fill();
                   } else if (dec.type === 'stone') {
                       ctx.fillStyle = '#888888';
                       ctx.beginPath();
                       ctx.arc(dec.x, dec.y, dec.size, 0, Math.PI * 2);
                       ctx.fill();
                       
                       
                       ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
                       ctx.beginPath();
                       ctx.arc(dec.x - dec.size * 0.3, dec.y - dec.size * 0.3, dec.size * 0.35, 0, Math.PI * 2);
                       ctx.fill();
                   } else if (dec.type === 'bush') {
                       ctx.fillStyle = '#2d5a1a';
                       ctx.beginPath();
                       ctx.arc(dec.x, dec.y, dec.size, 0, Math.PI * 2);
                       ctx.fill();
                       
                       ctx.fillStyle = '#3d6a2a';
                       ctx.beginPath();
                       ctx.arc(dec.x - dec.size * 0.6, dec.y + dec.size * 0.4, dec.size * 0.6, 0, Math.PI * 2);
                       ctx.fill();
                       ctx.beginPath();
                       ctx.arc(dec.x + dec.size * 0.6, dec.y + dec.size * 0.4, dec.size * 0.6, 0, Math.PI * 2);
                       ctx.fill();
                   }
                });

                
                const grassSprites = this.grassAtlas.sprites || [];
                this.groundGrassInstances = [];
                if (grassSprites.length > 0) {
                    const centerX = width * 0.5;
                    const centerY = height * 0.5;
                    const safeRadius = 190;
                    const grassCount = Math.floor((width * height) / 90000);

                    for (let i = 0; i < grassCount; i++) {
                        let gx = 0;
                        let gy = 0;
                        let tries = 0;
                        do {
                            gx = 40 + Math.random() * (width - 80);
                            gy = 40 + Math.random() * (height - 80);
                            tries++;
                        } while (tries < 8 && Math.hypot(gx - centerX, gy - centerY) < safeRadius);

                        const spriteIndex = (Math.random() * grassSprites.length) | 0;
                        const sprite = grassSprites[spriteIndex];
                        if (!sprite) continue;

                        const maxDim = Math.max(sprite.width, sprite.height) || 1;
                        const targetMax = 58 + Math.random() * 34;
                        const scale = targetMax / maxDim;
                        const drawW = sprite.width * scale;
                        const drawH = sprite.height * scale;

                        this.groundGrassInstances.push({
                            x: gx,
                            y: gy,
                            spriteIndex: spriteIndex,
                            drawW: drawW,
                            drawH: drawH,
                            baseRotation: (Math.random() - 0.5) * 0.9,
                            alpha: 0.62 + Math.random() * 0.14,
                            swayAmplitude: 0.035 + Math.random() * 0.025,
                            swaySpeed: 0.75 + Math.random() * 0.55,
                            swayPhase: Math.random() * Math.PI * 2
                        });
                    }
                }
         });

        console.log('Background cache generated:', CanvasCache.getStats());
    },

    
    drawBackground() {
        const ctx = this.ctx;
        
        
        if (typeof CanvasCache !== "undefined" && CanvasCache.has && CanvasCache.has("baseGround")) {
            CanvasCache.draw(ctx, "baseGround");
        } else {
            
            ctx.fillStyle = "#2d5a27";
            ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        }
        
        
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

                // Убрали холодные синие пучки: новая подложка уже достаточно живая сама по себе.
                this.drawStageAtmosphere(ctx);
    },

    drawAnimatedGroundGrass(ctx) {
        const grassSprites = this.grassAtlas.sprites || [];
        const grassInstances = this.groundGrassInstances || [];
        if (!grassSprites.length || !grassInstances.length) return;

        const t = this._renderTime || (Date.now() / 1000);

        for (let i = 0; i < grassInstances.length; i++) {
            const g = grassInstances[i];
            const sprite = grassSprites[g.spriteIndex];
            if (!sprite) continue;

            const sway = Math.sin(t * g.swaySpeed + g.swayPhase) * g.swayAmplitude;

            ctx.save();
            ctx.translate(g.x, g.y);
            ctx.rotate(g.baseRotation + sway);
            ctx.globalAlpha = g.alpha;
            ctx.drawImage(sprite, -g.drawW * 0.5, -g.drawH * 0.5, g.drawW, g.drawH);
            ctx.globalCompositeOperation = 'source-atop';
            ctx.fillStyle = 'rgba(8, 20, 30, 0.24)';
            ctx.fillRect(-g.drawW * 0.5, -g.drawH * 0.5, g.drawW, g.drawH);
            ctx.restore();
        }
    },

    drawStageAtmosphere(ctx) {
        const width = this.canvas.width;
        const height = this.canvas.height;
        const t = this._renderTime || (Date.now() / 1000);
        const visualProfile = this.getStageVisualProfile();
        const towerX = this.tower ? this.tower.x : width * 0.5;
        const towerY = this.tower ? this.tower.y + 24 : height * 0.6;

        ctx.save();

        const centerGlow = ctx.createRadialGradient(
            towerX,
            towerY,
            32,
            towerX,
            towerY,
            Math.min(width, height) * 0.36
        );
        centerGlow.addColorStop(0, visualProfile.focusGlowStrong);
        centerGlow.addColorStop(0.5, visualProfile.focusGlow);
        centerGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = centerGlow;
        ctx.fillRect(0, 0, width, height);

        STAGE_ATMOSPHERE_WISPS.forEach((wisp) => {
            const x = width * wisp.x + Math.sin(t * wisp.speed + wisp.phase) * wisp.driftX;
            const y = height * wisp.y + Math.cos(t * (wisp.speed * 0.8) + wisp.phase) * wisp.driftY;
            const gradient = ctx.createRadialGradient(x, y, 0, x, y, wisp.rx);
            gradient.addColorStop(0, visualProfile.wispCore);
            gradient.addColorStop(0.72, visualProfile.wispEdge);
            gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(Math.sin(t * 0.12 + wisp.phase) * 0.08);
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.ellipse(0, 0, wisp.rx, wisp.ry, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        });

        const vignette = ctx.createRadialGradient(
            width * 0.5,
            height * 0.48,
            Math.min(width, height) * 0.24,
            width * 0.5,
            height * 0.5,
            Math.max(width, height) * 0.76
        );
        vignette.addColorStop(0, 'rgba(0, 0, 0, 0)');
        vignette.addColorStop(0.7, 'rgba(0, 0, 0, 0)');
        vignette.addColorStop(1, visualProfile.vignette);
        ctx.fillStyle = vignette;
        ctx.fillRect(0, 0, width, height);

        ctx.restore();
    },
    
    
    drawTree(ctx, x, y, size, color) {
        ctx.save();
        
        
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
        
        
        ctx.fillStyle = 'rgba(0,0,0,0.2)';
        ctx.beginPath();
        ctx.arc(x - size*0.2, y - size*0.2, size * 0.5, 0, Math.PI * 2);
        ctx.fill();
        
        
        ctx.fillStyle = '#3E2723';
        ctx.beginPath();
        ctx.arc(x, y, size * 0.15, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
    },

    
    
    drawRoad(ctx, w, h, isDay) {
        
        
    },

    
     lerpColor(a, b, t) {
         return a.map((v, i) => Math.round(v + (b[i] - v) * t));
     },

      
      isTreeInGardenArea(tree) {
          const gardenX = this.garden.offsetX - 5;
          const gardenY = this.garden.offsetY - 5;
          const gardenWidth = this.garden.cellSize * 3 + 20;
          const gardenHeight = this.garden.cellSize * 3 + 20;
          const margin = 200; 
          
          return tree.x >= gardenX - margin &&
                 tree.x <= gardenX + gardenWidth + margin &&
                 tree.y >= gardenY - margin &&
                 tree.y <= gardenY + gardenHeight + margin;
      },

     
    drawFantasyTrees(ctx, timeOfDay) {
         const isDay = timeOfDay < 0.5;
         const time = this._renderTime || Date.now() / 1000; 

         
         this.fantasyTrees.trees.forEach(tree => {
             if (tree.type === 'back' && !this.isTreeInGardenArea(tree)) {
                 this.drawFantasyTree(ctx, tree, time, isDay);
             }
         });
     },

      
      
    drawEnemiesWithTreeParallax(ctx) {
        if (!this.fantasyTrees.loaded) {
            this.waveManager.draw(ctx);
            return;
        }

        const time = this.timeOfDay;

        
        this.fantasyTrees.trees.forEach(tree => {
            if (tree.type === 'back') {
                this.drawFantasyTree(ctx, tree, time, true); 
            }
        });

        
        if (this.xpSystem) {
            this.xpSystem.draw(ctx);
        }

        
        this.waveManager.draw(ctx);

        
        this.fantasyTrees.trees.forEach(tree => {
            if (tree.type === 'front') {
                this.drawFantasyTree(ctx, tree, time, true);
            }
        });
    },

     
     drawForegroundTrees(ctx, timeOfDay) {
         const isDay = timeOfDay < 0.5;
         const time = this._renderTime || Date.now() / 1000; 

         
         this.fantasyTrees.trees.forEach(tree => {
             if (tree.type === 'front' && !this.isTreeInGardenArea(tree)) {
                 this.drawFantasyTree(ctx, tree, time, isDay);
             }
         });
     },

    
    drawFantasyTree(ctx, tree, time, isDay = true) {
        const size = tree.size;
        const treeType = tree.treeType || 'Tree1';
        const image = this.fantasyTrees.images[treeType];
        const usesSpriteTree = Boolean(image && this.fantasyTrees.imagesLoaded[treeType]);

        ctx.save();

        if (!usesSpriteTree) {
            this.drawTreeShadow(ctx, tree.x, tree.y, size, isDay, 0);
        }
        
        ctx.translate(tree.x, tree.y);
        
        const sway = Math.sin(time * 0.9 + tree.swayOffset) * 0.015;
        ctx.rotate(sway);

        
        if (usesSpriteTree) {
            
            const aspectRatio = image.width / image.height;
            const drawWidth = size * 2.55;
            const drawHeight = drawWidth / aspectRatio;

            ctx.globalAlpha = isDay ? 0.95 : 0.75;
            ctx.drawImage(image, -drawWidth / 2, -drawHeight, drawWidth, drawHeight);
            ctx.globalAlpha = 1;
        } else {
            
            
            const trunkColor = isDay ? '#4a3728' : '#2d1f16';
            const foliageColor1 = isDay ? '#2d5a3d' : '#1a3d28';
            const foliageColor2 = isDay ? '#3d7a52' : '#244d35';
            const foliageColor3 = isDay ? '#4a9a6a' : '#2d5d42';

            
            ctx.fillStyle = trunkColor;
            ctx.beginPath();
            ctx.moveTo(-size * 0.12, 0);
            ctx.lineTo(size * 0.12, 0);
            ctx.lineTo(size * 0.08, -size * 0.7);
            ctx.lineTo(-size * 0.08, -size * 0.7);
            ctx.closePath();
            ctx.fill();
            
            
            ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
            ctx.beginPath();
            ctx.moveTo(-size * 0.12, 0);
            ctx.lineTo(-size * 0.08, -size * 0.7);
            ctx.lineTo(-size * 0.05, -size * 0.7);
            ctx.lineTo(-size * 0.09, 0);
            ctx.closePath();
            ctx.fill();

            
            const foliageColors = [foliageColor1, foliageColor2, foliageColor3];

            
            ctx.fillStyle = foliageColors[0];
            ctx.beginPath();
            ctx.arc(0, -size * 0.5, size * 0.45, 0, Math.PI * 2);
            ctx.fill();

            
            ctx.fillStyle = foliageColors[1];
            ctx.beginPath();
            ctx.arc(-size * 0.2, -size * 0.7, size * 0.38, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(size * 0.2, -size * 0.7, size * 0.38, 0, Math.PI * 2);
            ctx.fill();

            
            ctx.fillStyle = foliageColors[2];
            ctx.beginPath();
            ctx.arc(0, -size * 0.95, size * 0.3, 0, Math.PI * 2);
            ctx.fill();
            
            
            ctx.fillStyle = foliageColors[1];
            ctx.globalAlpha = 0.6;
            ctx.beginPath();
            ctx.arc(-size * 0.25, -size * 0.5, size * 0.25, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(size * 0.25, -size * 0.5, size * 0.25, 0, Math.PI * 2);
            ctx.fill();
            ctx.globalAlpha = 1;

            
            if (!isDay) {
                ctx.shadowBlur = 15;
                ctx.shadowColor = 'rgba(100, 200, 255, 0.4)';
                ctx.fillStyle = 'rgba(100, 200, 255, 0.15)';
                ctx.beginPath();
                ctx.arc(0, -size * 0.6, size * 0.5, 0, Math.PI * 2);
                ctx.fill();
                ctx.shadowBlur = 0;
            }
        }

        ctx.restore();
    },

    
    drawTreeShadow(ctx, x, y, size, isDay = true, sway) {
        ctx.save();

        
        const timeOfDay = this.timeOfDay;
        const isDusk = timeOfDay >= 0.4 && timeOfDay <= 0.6; 
        
        
        let shadowAlpha;
        if (isDay) {
            shadowAlpha = 0.25; 
        } else if (isDusk) {
            shadowAlpha = 0.20; 
        } else {
            shadowAlpha = 0.12; 
        }

        
        
        const shadowWidth = size * 0.54;
        const shadowHeight = size * 0.16;
        const shadowX = x;
        const shadowY = y + size * 0.24;

        
        ctx.fillStyle = isDay 
            ? `rgba(0, 0, 0, ${shadowAlpha * 0.4})`
            : (isDusk 
                ? `rgba(255, 120, 40, ${shadowAlpha * 0.3})`
                : `rgba(100, 150, 255, ${shadowAlpha * 0.25})`
            );
        
        ctx.beginPath();
        ctx.ellipse(shadowX, shadowY, shadowWidth * 1.1, shadowHeight * 1.1, 0, 0, Math.PI * 2);
        ctx.fill();

        
        ctx.fillStyle = isDay 
            ? `rgba(0, 0, 0, ${shadowAlpha * 0.75})`
            : (isDusk
                ? `rgba(255, 100, 20, ${shadowAlpha * 0.6})`
                : `rgba(100, 150, 255, ${shadowAlpha * 0.5})`
            );
        
        ctx.beginPath();
        ctx.ellipse(shadowX, shadowY, shadowWidth * 0.8, shadowHeight * 0.8, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = isDay
            ? `rgba(0, 0, 0, ${shadowAlpha * 0.22})`
            : (isDusk
                ? `rgba(255, 120, 40, ${shadowAlpha * 0.16})`
                : `rgba(100, 150, 255, ${shadowAlpha * 0.12})`
            );
        ctx.beginPath();
        ctx.ellipse(shadowX, shadowY + shadowHeight * 0.35, shadowWidth * 0.55, shadowHeight * 0.45, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
    },

    
    towerTakeDamage(damage, attacker = null) {
        if (!this.tower || this.gameOver) return;

        if (this.debugCheats.invulnerableTower) {
            return;
        }
        
        const actualDamage = this.tower.takeDamage(damage, attacker);
        this.trackTowerDamageBurst(actualDamage, attacker);

        if (this.stats) {
            this.stats.waveDamageTaken = (this.stats.waveDamageTaken || 0) + Math.max(0, actualDamage || 0);
        }
        
        
        this.shakeScreen(actualDamage * 0.5 + 3);
    },

    trackTowerDamageBurst(actualDamage, attacker = null) {
        const safeDamage = Math.max(0, Number(actualDamage) || 0);
        if (safeDamage <= 0) {
            return;
        }

        const now = Date.now();
        const burstWindowMs = 180;
        if (!Array.isArray(this._towerDamageSamples)) {
            this._towerDamageSamples = [];
        }

        this._towerDamageSamples.push({ at: now, damage: safeDamage });
        while (this._towerDamageSamples.length > 0 && (now - this._towerDamageSamples[0].at) > burstWindowMs) {
            this._towerDamageSamples.shift();
        }

        let burstDamage = 0;
        for (let i = 0; i < this._towerDamageSamples.length; i++) {
            burstDamage += this._towerDamageSamples[i].damage;
        }

        const maxHealth = Math.max(1, Number(this.tower.maxHealth) || 1);
        const singleHitThreshold = Math.max(600, Math.floor(maxHealth * 0.18));
        const burstThreshold = Math.max(1200, Math.floor(maxHealth * 0.42));
        if (safeDamage < singleHitThreshold && burstDamage < burstThreshold) {
            return;
        }

        if (this._lastTowerBurstLogAt && (now - this._lastTowerBurstLogAt) < 350) {
            return;
        }
        this._lastTowerBurstLogAt = now;

        const localWave = this.waveManager ? Math.max(1, Math.floor(this.waveManager.wave || 1)) : 1;
        const effectiveEnemyWave = typeof this.getEffectiveEnemyWaveNumber === 'function'
            ? this.getEffectiveEnemyWaveNumber(localWave, this.currentStage)
            : localWave;
        const activeModifiers = (typeof RunModifiers !== 'undefined' && RunModifiers && typeof RunModifiers.getActiveModifiers === 'function')
            ? RunModifiers.getActiveModifiers().map((entry) => entry.id)
            : [];
        const source = attacker && attacker.sourceBossProfileId
            ? `${attacker.sourceBossProfileId}:${attacker.sourceType || attacker.sourceEnemyType || 'projectile'}`
            : (attacker && (attacker.sourceType || attacker.sourceEnemyType || attacker.type)) || 'unknown';

        console.warn('[TowerDamageBurst]', {
            stage: this.currentStage,
            localWave,
            effectiveEnemyWave,
            hitDamage: Math.round(safeDamage),
            burstWindowMs,
            burstDamage: Math.round(burstDamage),
            towerHealth: Math.max(0, Math.round(this.tower.health || 0)),
            towerMaxHealth: Math.round(maxHealth),
            enemyProjectiles: this.waveManager ? this.waveManager.enemyProjectiles.length : 0,
            source,
            activeModifiers
        });
    },

    
    onEnemyLeaked(reward, enemyX, enemyY, isBoss) {
        const economyCfg = (typeof BalanceRuntime !== 'undefined' && BalanceRuntime.get)
            ? (BalanceRuntime.get('economy', {}) || {})
            : {};

        const leakGoldFactor = Number.isFinite(economyCfg.leakGoldFactor)
            ? economyCfg.leakGoldFactor
            : 0.35;
        const leakBossGoldFactor = Number.isFinite(economyCfg.leakBossGoldFactor)
            ? economyCfg.leakBossGoldFactor
            : 0.2;

        const factor = isBoss ? leakBossGoldFactor : leakGoldFactor;
        if (!Number.isFinite(factor) || factor <= 0) {
            return;
        }

        const baseReward = Math.max(0, Number(reward) || 0);
        if (baseReward <= 0) {
            return;
        }

        const rawLeakReward = Math.floor(baseReward * factor);
        if (rawLeakReward <= 0) {
            return;
        }

        const leakReward = this.applyGoldEventMultiplier(rawLeakReward);
        this.gold += leakReward;
        this.stats.totalGold += leakReward;
        UI.updateGold(this.gold);

        this.createFloatingText(enemyX, enemyY - 20, `🧷 +${leakReward} 💰`, '#f1c40f');

        if (this.questSystem) {
            this.questSystem.onGoldEarned(leakReward);
        }
    },

    
    onEnemyKilled(reward, enemyX, enemyY, isBoss) {
        
        let finalReward = reward + Math.floor(this.tower ? (this.tower.killGoldBonus || 0) : 0);

        
        if (this.frenzyTimer > 0) {
            finalReward = Math.floor(reward * 1.5);
            finalReward += Math.floor(this.tower ? (this.tower.killGoldBonus || 0) : 0);
        }

        finalReward = this.applyGoldEventMultiplier(finalReward);
        
        this.gold += finalReward;
        this.stats.kills++;
        this.stats.totalGold += finalReward;
        UI.updateGold(this.gold);

        
        const traderSummonChance = Math.max(0, Math.min(1, this.tower ? (this.tower.traderChance || 0) : 0));
        const now = Date.now();
        const traderCooldownReady = !this._lastTraderSummonAt || (now - this._lastTraderSummonAt) >= this.traderSummonCooldownMs;
        if (traderSummonChance > 0 && traderCooldownReady && this.trader && !this.trader.active && Math.random() < traderSummonChance) {
            if (typeof this.trader.spawnAt === 'function') {
                this.trader.spawnAt(enemyX, enemyY);
            } else if (typeof this.trader.spawn === 'function') {
                this.trader.spawn();
            }

            this._lastTraderSummonAt = now;

            if (typeof UI !== 'undefined' && UI.showNotification) {
                UI.showNotification(
                    typeof LocalizationManager !== 'undefined'
                        ? LocalizationManager.t('traderApproachToast', 'Торговец услышал битву и спешит к башне')
                        : 'Торговец услышал битву и спешит к башне',
                    '#8fd8fb'
                );
            }

            this.createFloatingText(
                enemyX,
                enemyY - 28,
                typeof LocalizationManager !== 'undefined'
                    ? LocalizationManager.t('floatTraderSummon', '🤝 Торговец прибыл!')
                    : '🤝 Торговец прибыл!',
                '#8fd8fb',
                { ignoreGameSpeed: true }
            );
        }
        
        
        if (window.AchievementsManager && AchievementsManager.onEnemyKilled) {
            AchievementsManager.onEnemyKilled(this.stats.kills);
        }

        
        if (this.xpSystem) {
            const baseXPAmount = isBoss ? 50 : 10;
            const xpAmount = this.applyXPPreRunBuffMultiplier(baseXPAmount);
            const orbMultiplier = (this.cardEffects && this.cardEffects.getXPOrbSpawnMultiplier)
                ? this.cardEffects.getXPOrbSpawnMultiplier()
                : 1;

            for (let i = 0; i < orbMultiplier; i++) {
                const spreadX = orbMultiplier > 1 ? (Math.random() - 0.5) * 24 : 0;
                const spreadY = orbMultiplier > 1 ? (Math.random() - 0.5) * 24 : 0;
                this.xpSystem.spawnXPOrb(enemyX + spreadX, enemyY + spreadY, xpAmount);
            }
        }
        
        
        if (typeof inGameUpgrades !== 'undefined') {
            inGameUpgrades.updateUI();
        }
        
        
        if (this.questSystem) {
            this.questSystem.onEnemyKilled(isBoss);
            this.questSystem.onGoldEarned(finalReward);
        }
        
        
        if (this.upgradeEffects) {
            const enemy = { x: enemyX, y: enemyY, reward: finalReward, markedForDeletion: false };
            this.upgradeEffects.onEnemyKilled(enemy);
        }
    },

    



    getWaveCrystalReward(waveNumber) {
        let reward = 0;

        if (waveNumber > 0 && this.crystalRewardInterval > 0 && waveNumber % this.crystalRewardInterval === 0) {
            reward += this.crystalRewardAmount;
        }

        return reward;
    },

     
      rewardForWave(waveNumber) {
          const currentStage = this.normalizeStageNumber(this.currentStage);
          const stageWaveGoldMultiplier = this.getStageWaveGoldMultiplier(currentStage);
          const stageWaveCrystalMultiplier = this.getStageWaveCrystalMultiplier(currentStage);
          const runWaveGoldMultiplier = (typeof RunModifiers !== 'undefined' && RunModifiers)
              ? (RunModifiers.getValue('waveGoldMult', 1) || 1)
              : 1;
          const runWaveCrystalMultiplier = (typeof RunModifiers !== 'undefined' && RunModifiers)
              ? (RunModifiers.getValue('waveCrystalMult', 1) || 1)
              : 1;
          const cardWaveGoldMultiplier = (this.cardEffects && this.cardEffects.getWaveGoldMultiplier)
              ? this.cardEffects.getWaveGoldMultiplier()
              : 1;
          const cardWaveCrystalMultiplier = (this.cardEffects && this.cardEffects.getWaveCrystalMultiplier)
              ? this.cardEffects.getWaveCrystalMultiplier()
              : 1;

          
          const economyCfg = (typeof BalanceRuntime !== 'undefined' && BalanceRuntime.get)
              ? (BalanceRuntime.get('economy', {}) || {})
              : {};
          const waveGoldBase = Number.isFinite(economyCfg.waveGoldBase) ? economyCfg.waveGoldBase : 20;
          const waveGoldPerWave = Number.isFinite(economyCfg.waveGoldPerWave) ? economyCfg.waveGoldPerWave : 4;
          let rawWaveGold = waveGoldBase + waveNumber * waveGoldPerWave;
          if (typeof TalentTree !== 'undefined') {
              const talentEffects = TalentTree.getEffects();
              rawWaveGold *= (1 + (talentEffects.waveGoldMult || 0));
          }
          rawWaveGold *= stageWaveGoldMultiplier * runWaveGoldMultiplier * cardWaveGoldMultiplier;
          const waveGold = this.applyGoldEventMultiplier(Math.floor(rawWaveGold));
          this.gold += waveGold;
          this.stats.totalGold += waveGold;
          UI.updateGold(this.gold);

          
          const baseCrystalReward = this.getWaveCrystalReward(waveNumber);
          const stagedCrystalReward = baseCrystalReward > 0
              ? Math.max(1, Math.floor(baseCrystalReward * stageWaveCrystalMultiplier * runWaveCrystalMultiplier * cardWaveCrystalMultiplier))
              : 0;
          const crystalReward = this.applyCrystalEventMultiplier(stagedCrystalReward);
          if (crystalReward > 0) {
              this.addCrystalsDirect(crystalReward, true);
              const crystalText = typeof LocalizationManager !== 'undefined'
                  ? LocalizationManager.t('waveCrystalReward', '+{0} 💎 за волну', crystalReward)
                  : `+${crystalReward} 💎 за волну`;
              this.createFloatingText(
                  this.tower.x,
                  this.tower.y - 55,
                  crystalText,
                  '#9b59b6'
              );
          }

          
          if (this.questSystem) {
              this.questSystem.onWaveCompleted(waveNumber);
              this.questSystem.onGoldEarned(waveGold);
          }

          
          if (window.AchievementsManager && AchievementsManager._isInitialized) {
              if ((this.stats && (this.stats.waveDamageTaken || 0) <= 0) && !AchievementsManager.isUnlocked(AchievementsManager.ACHIEVEMENTS.PACIFIST)) {
                  AchievementsManager.unlock(AchievementsManager.ACHIEVEMENTS.PACIFIST, true);
              }
          }

          if (this.stats) {
              this.stats.waveDamageTaken = 0;
          }

          let dayResult = null;

          
          if (typeof daySystem !== 'undefined' && daySystem && typeof daySystem.completeDay === 'function') {
              dayResult = daySystem.completeDay();

              if (typeof daySystem.showDayCompleteScreen === 'function') {
                  daySystem.showDayCompleteScreen(dayResult);
              }

              
              this.updateDayUI();
          }

          
          if (typeof inGameUpgrades !== 'undefined') {
              inGameUpgrades.updateUI();
          }

          
          const dayNumber = dayResult && Number.isFinite(dayResult.day)
              ? dayResult.day
              : Math.max(1, Math.floor(waveNumber));
          const dayCompletedText = typeof LocalizationManager !== 'undefined'
              ? LocalizationManager.t('dayCompleted', 'День {0} завершен...', dayNumber)
              : `День ${dayNumber} завершен...`;
          this.createFloatingText(
              this.tower.x,
              this.tower.y - 30,
              dayCompletedText,
              '#61b4e2'
          );

          UI.playGoldSound();
          if (typeof AudioManager !== 'undefined' && AudioManager.playSound) {
              AudioManager.playSound('waveRewardStinger');
          }

          this.gpTrackEvent('wave_completed', {
              wave: waveNumber,
              stage: currentStage,
              waveGold,
              crystalReward,
              totalGold: this.gold,
              sessionCrystals: this.sessionCrystals
          });

          if (typeof SeasonSystem !== 'undefined' && SeasonSystem && typeof SeasonSystem.onWaveCompleted === 'function') {
              const seasonResult = SeasonSystem.onWaveCompleted(waveNumber, currentStage);
              const gained = seasonResult && Number.isFinite(seasonResult.pointsGained)
                  ? seasonResult.pointsGained
                  : 0;
              this.seasonPointsEarned += gained;
              if (gained > 0 && typeof UI !== 'undefined' && UI.showSeasonXpGain) {
                  UI.showSeasonXpGain(gained, 'seasonSourceWave');
              }
          }

          if (waveNumber > 0 && waveNumber % 10 === 0) {
              this._pendingWaveInterstitialWave = waveNumber;
          }

          if (typeof EliteEvents !== 'undefined' && EliteEvents && EliteEvents.shouldTrigger(waveNumber) && typeof UI !== 'undefined' && UI.showEliteEventModal) {
              const payload = EliteEvents.createEventForWave(currentStage, waveNumber);
              if (payload) {
                  this._eliteEventActive = true;
                  this.beginModalPause('elite_event');
                  UI.showEliteEventModal(payload);
              }
          } else {
              this.triggerQueuedWaveInterstitial();
          }
      },

     
      upgradeTower(type) {
          if (!this.tower) return;
          
          const result = this.tower.upgrade(type, this.gold);
          
          if (result.success) {
              this.gold -= result.cost;
              UI.updateGold(this.gold);
              
              
              if (this.questSystem) {
                  this.questSystem.onUpgradeBought();
              }
              
              
              if (typeof inGameUpgrades !== 'undefined') {
                  inGameUpgrades.updateUI();
              }

               this.gpTrackEvent('upgrade_bought', {
                   type,
                   cost: result.cost,
                   goldAfter: this.gold
               });

               if (this.stats) {
                   this.stats.upgradesBought = (this.stats.upgradesBought || 0) + 1;
               }

               if (window.AchievementsManager && AchievementsManager._isInitialized && this.stats && this.stats.upgradesBought >= 10) {
                   AchievementsManager.unlock(AchievementsManager.ACHIEVEMENTS.UPGRADER, true);
               }
               
               
               this.updateDayUI();
          } else {
              UI.playErrorSound();
          }
      },

    
    getUpgradeCost(type) {
        if (typeof inGameUpgrades !== 'undefined') {
            return inGameUpgrades.getCost(type);
        }
        return this.tower ? this.tower.getUpgradeCost(type) : 0;
    },

    
    getUpgradeLevel(type) {
        if (typeof inGameUpgrades !== 'undefined') {
            return inGameUpgrades.getLevel(type);
        }
        return this.tower ? this.tower.getUpgradeLevel(type) : 0;
    },
    
    
    updateDayUI() {
        if (typeof daySystem !== 'undefined') {
            const stats = daySystem.getStats();
            
            
            const dayLabel = typeof LocalizationManager !== 'undefined' ?
                LocalizationManager.t('day', 'День') : 'День';
            const bonusInLabel = typeof LocalizationManager !== 'undefined' ?
                LocalizationManager.t('bonusIn', 'Бонус через') : 'Бонус через';
            
            
            const dayDisplay = document.getElementById('dayDisplay');
            if (dayDisplay) {
                dayDisplay.textContent = stats.currentDay;
            }
            
            
            const weeklyTimer = document.getElementById('weeklyBonusTimer');
            if (weeklyTimer) {
                const bonusText = typeof LocalizationManager !== 'undefined' ?
                    LocalizationManager.t('bonusInFull', 'Бонус через: {0}', stats.nextBonusIn) : `Бонус через: ${stats.nextBonusIn}`;
                weeklyTimer.textContent = bonusText;
                if (stats.nextBonusIn <= 2) {
                    weeklyTimer.classList.add('bonus-soon');
                } else {
                    weeklyTimer.classList.remove('bonus-soon');
                }
            }
        }
    },

    
    addProjectile(projectile) {
        this.projectiles.push(projectile);
    },

    
    useThunderStrike() {
        if (!this.isRunning || this.isGameplayPaused() || this.gameOver) return;
        
        
        if (typeof AudioManager !== 'undefined') {
            AudioManager.playSound('thunderStrikeImpact');
            AudioManager.playSound('thunder');
        }

        
        this.shake = 30;

        
        this.effects.push({
            x: this.canvas.width / 2,
            y: this.canvas.height / 2,
            life: 20,
            draw(ctx) {
                ctx.save();
                ctx.globalAlpha = this.life / 20;
                ctx.fillStyle = 'white';
                ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                ctx.restore();
            },
            update(gameSpeed) {
                this.life -= gameSpeed;
                if (this.life <= 0) this.markedForDeletion = true;
            },
            markedForDeletion: false
        });

        
        const damage = this.tower.damage * 15;
        const enemies = [...this.waveManager.enemies];
        enemies.forEach(enemy => {
            const result = enemy.takeDamage(damage);
            
            this.effects.push({
                x1: this.canvas.width / 2, y1: 0,
                x2: enemy.x, y2: enemy.y,
                life: 10,
                draw(ctx) {
                    ctx.save();
                    ctx.strokeStyle = '#00ffff';
                    ctx.lineWidth = 3;
                    ctx.beginPath();
                    ctx.moveTo(this.x1, this.y1);
                    ctx.lineTo(this.x2, this.y2);
                    ctx.stroke();
                    ctx.restore();
                },
                update(gameSpeed) {
                    this.life -= gameSpeed;
                    if (this.life <= 0) this.markedForDeletion = true;
                },
                markedForDeletion: false
            });

            if (result && result.killed) {
                this.onEnemyKilled(result.reward, result.x, result.y, result.isBoss);
            }
        });

        console.log('⚡ Thunder Strike used!');
    },

    useFrenzyPotion() {
        if (!this.isRunning || this.isGameplayPaused() || this.gameOver) return;

        
        if (this.frenzyTimer > 0) {
            console.log('🔥 Frenzy is already active!');
            return;
        }

        const duration = 1200; 
        const oldSpawnDelay = this.waveManager.spawnDelay;
        
        
        this.waveManager.spawnDelay /= 4;
        
        
        for(let i = 0; i < 5; i++) {
            this.waveManager.spawnEnemy(this.canvas);
        }
        
        
        if (this.addActiveBonus) {
            const label = typeof LocalizationManager !== 'undefined' ? 
                LocalizationManager.t('frenzyActive', 'БЕЗУМИЕ') : 'БЕЗУМИЕ';
            this.addActiveBonus('frenzy', 1.0, duration, `🔥 ${label}`, '#e67e22');
        }

        
        this.effects.push({
            life: duration,
            maxLife: duration,
            draw(ctx) {
                ctx.save();
                
                const pulse = 0.15 + Math.sin(Date.now() / 250) * 0.08;
                ctx.globalAlpha = pulse * (this.life / this.maxLife);
                ctx.fillStyle = '#ff0000';
                ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                ctx.restore();
            },
            update(gameSpeed) {
                this.life -= gameSpeed;
                if (this.life <= 0) this.markedForDeletion = true;
            },
            markedForDeletion: false
        });

        this.frenzyTimer = duration;
        this.originalSpawnDelay = oldSpawnDelay;

        console.log('🔥 Frenzy activated! Spawn speed x4 + instant pack');
    },

    
    shakeScreen(intensity) {
        if (this.isScreenShakeDisabled()) {
            this.shake = 0;
            return;
        }
        this.shake = intensity;
    },

    isScreenShakeDisabled() {
        return Boolean(
            typeof SaveManager !== 'undefined' &&
            typeof SaveManager.getSetting === 'function' &&
            SaveManager.getSetting('disableScreenShake', false)
        );
    },

    isHeavyEffectsDisabled() {
        return Boolean(
            typeof SaveManager !== 'undefined' &&
            typeof SaveManager.getSetting === 'function' &&
            SaveManager.getSetting('disableHeavyEffects', false)
        );
    },

    
    createHitEffect(x, y, isCrit) {
        if (typeof PoolManager !== 'undefined') {
            this.effects.push(PoolManager.acquire('hitEffect', x, y, isCrit));
        } else {
            this.effects.push(new HitEffect(x, y, isCrit));
        }
    },

    
    createDamageText(x, y, damage, isCrit) {
        if (typeof PoolManager !== 'undefined') {
            this.damageTexts.push(PoolManager.acquire('damageText', x, y, damage, isCrit));
        } else {
            this.damageTexts.push(new DamageText(x, y, damage, isCrit));
        }
    },

    
    createDeathEffect(x, y, color, radius) {
        if (this.isHeavyEffectsDisabled()) {
            return;
        }

        const count = 12 + Math.floor(radius / 5); 

        
        this.effects.push({
            x, y,
            radius: radius * 0.5,
            maxRadius: radius * 3.5,
            alpha: 0.9,
            color: color,
            update(gameSpeed = 1) {
                this.radius += 6 * gameSpeed;
                this.alpha -= 0.07 * gameSpeed;
                if (this.alpha <= 0) this.markedForDeletion = true;
            },
            draw(ctx) {
                ctx.save();
                ctx.globalAlpha = this.alpha;
                ctx.strokeStyle = this.color;
                ctx.lineWidth = 3;
                ctx.shadowBlur = 12;
                ctx.shadowColor = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.stroke();
                ctx.restore();
            },
            markedForDeletion: false
        });

        
        for (let i = 0; i < count; i++) {
            const angle = (Math.PI * 2 / count) * i + Math.random() * 0.5;
            const speed = 1.5 + Math.random() * 3.5;
            const sizeBase = (radius / 4) * (0.4 + Math.random() * 0.8);
            
            const hue = Math.random() < 0.3 ? '#ffffff' : color;
            this.effects.push({
                x, y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed - 1.5, 
                gravity: 0.12,
                friction: 0.97,
                life: 1,
                color: hue,
                size: sizeBase,
                rotation: Math.random() * Math.PI * 2,
                rotSpeed: (Math.random() - 0.5) * 0.3,
                update(gameSpeed = 1) {
                    this.vy += this.gravity * gameSpeed;    
                    this.vx *= Math.pow(this.friction, gameSpeed); 
                    this.vy *= Math.pow(this.friction, gameSpeed);
                    this.x += this.vx * gameSpeed;
                    this.y += this.vy * gameSpeed;
                    this.rotation += this.rotSpeed * gameSpeed;
                    this.life -= 0.035 * gameSpeed;
                    this.size *= Math.pow(0.97, gameSpeed);
                    if (this.life <= 0) this.markedForDeletion = true;
                },
                draw(ctx) {
                    ctx.save();
                    ctx.globalAlpha = Math.max(0, this.life);
                    ctx.translate(this.x, this.y);
                    ctx.rotate(this.rotation);
                    ctx.fillStyle = this.color;
                    ctx.shadowBlur = 6;
                    ctx.shadowColor = this.color;
                    
                    ctx.beginPath();
                    ctx.moveTo(0, -this.size);
                    ctx.lineTo(this.size * 0.6, 0);
                    ctx.lineTo(0, this.size);
                    ctx.lineTo(-this.size * 0.6, 0);
                    ctx.closePath();
                    ctx.fill();
                    ctx.restore();
                },
                markedForDeletion: false
            });
        }
    },

    
    createCritFlashEffect(x, y) {
        if (this.isHeavyEffectsDisabled()) {
            return;
        }

        this.shakeScreen(6); 
        
        this.effects.push({
            x, y,
            alpha: 1.0,
            radius: 20,
            update(gameSpeed = 1) {
                this.radius += 15 * gameSpeed;
                this.alpha -= 0.08 * gameSpeed;
                if (this.alpha <= 0) this.markedForDeletion = true;
            },
            draw(ctx) {
                ctx.save();
                ctx.globalAlpha = this.alpha;
                const grad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
                grad.addColorStop(0, 'rgba(255, 255, 255, 1.0)');
                grad.addColorStop(0.3, 'rgba(255, 230, 100, 0.8)');
                grad.addColorStop(0.7, 'rgba(255, 100, 50, 0.4)');
                grad.addColorStop(1, 'rgba(255, 50, 0, 0)');
                ctx.fillStyle = grad;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fill();
                
                
                ctx.strokeStyle = '#ffffff';
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius * 0.8, 0, Math.PI * 2);
                ctx.stroke();
                
                ctx.restore();
            },
            markedForDeletion: false
        });

        
        this.effects.push({
            x, y,
            radius: 15,
            alpha: 1,
            update(gameSpeed = 1) {
                this.radius += 20 * gameSpeed;
                this.alpha -= 0.1 * gameSpeed;
                if (this.alpha <= 0) this.markedForDeletion = true;
            },
            draw(ctx) {
                ctx.save();
                ctx.globalAlpha = this.alpha;
                ctx.strokeStyle = '#ff9f43';
                ctx.lineWidth = 5;
                ctx.shadowBlur = 20;
                ctx.shadowColor = '#ff9f43';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.stroke();
                ctx.restore();
            },
            markedForDeletion: false
        });

        
        for (let i = 0; i < 4; i++) {
            const angle = (Math.PI / 2) * i + Math.PI / 4;
            this.effects.push({
                x, y,
                vx: Math.cos(angle) * 6,
                vy: Math.sin(angle) * 6,
                life: 0.8,
                size: 5,
                update(gameSpeed = 1) {
                    this.x += this.vx * gameSpeed;
                    this.y += this.vy * gameSpeed;
                    this.vx *= 0.9;
                    this.vy *= 0.9;
                    this.life -= 0.08 * gameSpeed;
                    this.size *= 0.93;
                    if (this.life <= 0) this.markedForDeletion = true;
                },
                draw(ctx) {
                    ctx.save();
                    ctx.globalAlpha = this.life;
                    ctx.fillStyle = '#f1c40f';
                    ctx.shadowBlur = 8;
                    ctx.shadowColor = '#f1c40f';
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.restore();
                },
                markedForDeletion: false
            });
        }
    },

    
    createExplosionEffect(x, y, radius) {
        if (this.isHeavyEffectsDisabled()) {
            return;
        }
        this.shakeScreen(radius * 0.1); 
        this.effects.push(new ExplosionEffect(x, y, radius));
    },

    
    createSmokeEffect(x, y, radius) {
        if (this.isHeavyEffectsDisabled()) {
            return;
        }
        this.effects.push(new SmokeEffect(x, y, radius));
    },

    
    createIceExplosionEffect(x, y, radius) {
        if (this.isHeavyEffectsDisabled()) {
            return;
        }
        this.effects.push(new IceExplosionEffect(x, y, radius));
    },

    
    showBossWarning() {
        if (typeof AudioManager !== 'undefined' && AudioManager.playSound) {
            AudioManager.playSound('bossWarningStinger');
        }

        const bossWarningText = typeof LocalizationManager !== 'undefined' ?
            LocalizationManager.t('bossWarning', '⚠️ ВНИМАНИЕ! БОСС! ⚠️') :
            '⚠️ ВНИМАНИЕ! БОСС! ⚠️';
        const bossProfileInfo = this.getCurrentBossProfileInfo();
        this.effects.push({
            text: bossWarningText,
            subtitle: bossProfileInfo.name,
            description: bossProfileInfo.description,
            ignoreGameSpeed: true,
            x: this.canvas.width / 2,
            y: this.canvas.height / 2 - 100,
            life: 180, 
            scale: 1,
            update(gameSpeed = 1) {
                this.life -= gameSpeed;
                this.scale = 1 + Math.sin((180 - this.life) * 0.1) * 0.1;
                if (this.life <= 0) this.markedForDeletion = true;
            },
            draw(ctx) {
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.scale(this.scale, this.scale);
                
                
                ctx.fillStyle = 'rgba(231, 76, 60, 0.3)';
                ctx.fillRect(-200, -40, 400, 80);
                
                
                ctx.font = 'bold 36px Arial';
                ctx.fillStyle = '#e74c3c';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.shadowBlur = 20;
                ctx.shadowColor = '#c0392b';
                ctx.fillText(this.text, 0, 0);

                if (this.subtitle) {
                    ctx.font = '700 24px Georgia';
                    ctx.fillStyle = '#8fd8fb';
                    ctx.shadowBlur = 14;
                    ctx.shadowColor = 'rgba(22, 58, 86, 0.75)';
                    ctx.fillText(this.subtitle, 0, 40);
                }

                if (this.description) {
                    ctx.font = '600 16px Georgia';
                    ctx.fillStyle = '#d8eefb';
                    ctx.shadowBlur = 10;
                    ctx.shadowColor = 'rgba(8, 22, 34, 0.7)';
                    ctx.fillText(this.description, 0, 68);
                }
                
                ctx.restore();
            },
            markedForDeletion: false
        });

        if (typeof UI !== 'undefined' && UI.showNotification && bossProfileInfo.name) {
            UI.showNotification(`${bossProfileInfo.name} - ${bossProfileInfo.description}`, '#8fd8fb');
        }
    },

    getCurrentBossProfileInfo() {
        const descriptor = (typeof StageThemes !== 'undefined' && StageThemes && typeof StageThemes.getStageDescriptor === 'function')
            ? StageThemes.getStageDescriptor(this.currentStage)
            : null;
        const profileId = descriptor && descriptor.bossProfileId ? descriptor.bossProfileId : 'frontier_bulwark';
        const entries = {
            frontier_bulwark: {
                nameKey: 'bossProfile_frontier_bulwark_name',
                descKey: 'bossProfile_frontier_bulwark_desc',
                fallbackName: 'Оплот Пограничья',
                fallbackDesc: 'Поднимает щит и пережимает темп боя'
            },
            swarm_broodmother: {
                nameKey: 'bossProfile_swarm_broodmother_name',
                descKey: 'bossProfile_swarm_broodmother_desc',
                fallbackName: 'Матка Выводка',
                fallbackDesc: 'Регулярно призывает мелких тварей'
            },
            attrition_revenant: {
                nameKey: 'bossProfile_attrition_revenant_name',
                descKey: 'bossProfile_attrition_revenant_desc',
                fallbackName: 'Истлевший Ревенант',
                fallbackDesc: 'Лечит себя и ближайшие волны'
            },
            greed_collector: {
                nameKey: 'bossProfile_greed_collector_name',
                descKey: 'bossProfile_greed_collector_desc',
                fallbackName: 'Сборщик Податей',
                fallbackDesc: 'Ускоряется и вырывает золото при прорыве'
            },
            eclipse_harbinger: {
                nameKey: 'bossProfile_eclipse_harbinger_name',
                descKey: 'bossProfile_eclipse_harbinger_desc',
                fallbackName: 'Вестник Затмения',
                fallbackDesc: 'Входит в ярость и выпускает пустотные залпы'
            }
        };
        const entry = entries[profileId] || entries.frontier_bulwark;
        return {
            id: profileId,
            name: (typeof LocalizationManager !== 'undefined' && LocalizationManager.t)
                ? LocalizationManager.t(entry.nameKey, entry.fallbackName)
                : entry.fallbackName,
            description: (typeof LocalizationManager !== 'undefined' && LocalizationManager.t)
                ? LocalizationManager.t(entry.descKey, entry.fallbackDesc)
                : entry.fallbackDesc
        };
    },

    
    createUpgradeEffect(x, y) {
        
        for (let i = 0; i < 3; i++) {
            this.effects.push({
                x: x,
                y: y,
                radius: 20 + i * 20,
                alpha: 1,
                life: 1,
                delay: i * 10,
                update(gameSpeed = 1) {
                    if (this.delay > 0) {
                        this.delay -= gameSpeed;
                        return;
                    }
                    this.radius += 2 * gameSpeed;
                    this.alpha -= 0.05 * gameSpeed;
                    if (this.alpha <= 0) this.markedForDeletion = true;
                },
                draw(ctx) {
                    if (this.delay > 0) return;
                    ctx.save();
                    ctx.globalAlpha = this.alpha;
                    ctx.strokeStyle = '#f1c40f';
                    ctx.lineWidth = 3;
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.restore();
                },
                markedForDeletion: false
            });
        }
    },

    
      
      addBonus(bonusData) {
          
          const amount = bonusData.amount || 0;
          
          
          if (this.trader && !this.trader.active) {
              this.trader.x = bonusData.x;
              this.trader.y = bonusData.y;
              
              
              let icon = '💎'; 
              let name = bonusData.type;
              
              if (bonusData.type === 'crystals') {
                  icon = '💎';
                  name = typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('floatCrystalsTrader', 'Crystals x{0}').replace('{0}', amount) : `Crystals x${amount}`;
              }
              
              this.trader.currentBonus = {
                  type: bonusData.type,
                  amount: amount,
                  name: name,
                  icon: icon
              };
              this.trader.active = true;
              this.trader.life = this.trader.lifetime;
           } else {
                
                 if (bonusData.type === 'crystals') {
                     const finalAmount = this.applyCrystalEventMultiplier(amount);
                     this.crystals += finalAmount;
                     this.sessionCrystals += finalAmount; 
                     this.stats.totalCrystals = (this.stats.totalCrystals || 0) + finalAmount;
                     UI.updateCrystals(this.sessionCrystals); 
                     this.createFloatingText(bonusData.x, bonusData.y - 30, `+${finalAmount} 💎`, '#9b59b6');
                 }
           }
      },

      
      addCrystalsDirect(amount, alreadyMultiplied = false) {
          const finalAmount = alreadyMultiplied ? amount : this.applyCrystalEventMultiplier(amount);
          this.crystals += finalAmount;
          this.sessionCrystals += finalAmount; 
          this.stats.totalCrystals = (this.stats.totalCrystals || 0) + finalAmount;
          if (typeof UI !== 'undefined' && UI.updateCrystals) {
              UI.updateCrystals(this.sessionCrystals); 
          }
      },

      updateEventDebugHud(now = performance.now()) {
          return;
          if (now - this._eventHudLastUpdateAt < 250) {
              return;
          }
          this._eventHudLastUpdateAt = now;

          const hud = document.getElementById('eventDebugHud');
          if (!hud) {
              return;
          }

          if (!this.debugCheats.showEventHud) {
              hud.classList.add('hidden');
              return;
          }

          const x2Active = this.isX2GoldCrystalsEventActive();
          const multiplier = x2Active ? 2 : 1;
          hud.textContent = `Event x${multiplier} | Gold x${multiplier} | Crystal x${multiplier}`;
          hud.classList.remove('hidden');
      },

      


      initGamePushEvents() {
          this.refreshGamePushEvents();

          if (this._gpEventsIntervalId) {
              clearInterval(this._gpEventsIntervalId);
          }

          this._gpEventsIntervalId = setInterval(() => {
              this.refreshGamePushEvents();
          }, this.gpEventsState.refreshIntervalMs);
      },

      


      async refreshGamePushEvents() {
          if (!this.getGp()) {
              return;
          }

          const eventTag = this.gpEventsState.bonusDayTag || 'Bonus_day';
          let active = false;
          try {
              active = this.gpHasEvent(eventTag);
          } catch (_) {
              active = Boolean(this.gpEventsState.weekendX2GoldCrystals);
          }

          this.gpEventsState.weekendX2GoldCrystals = active;
          this.gpEventsState.lastRefreshAt = Date.now();
      },

      isX2GoldCrystalsEventActive() {
          const now = Date.now();
          const refreshIntervalMs = Number.isFinite(this.gpEventsState.refreshIntervalMs) && this.gpEventsState.refreshIntervalMs > 0
              ? this.gpEventsState.refreshIntervalMs
              : 30000;
          const cacheAgeMs = now - (this.gpEventsState.lastRefreshAt || 0);
          const hasFreshCache = this.gpEventsState.lastRefreshAt > 0 && cacheAgeMs < refreshIntervalMs;

          if (hasFreshCache) {
              return Boolean(this.gpEventsState.weekendX2GoldCrystals);
          }

          const eventTag = this.gpEventsState.bonusDayTag || 'Bonus_day';

          if (this.getGp()) {
              let active = false;
              try {
                  active = this.gpHasEvent(eventTag);
              } catch (_) {
                  active = Boolean(this.gpEventsState.weekendX2GoldCrystals);
              }
              this.gpEventsState.weekendX2GoldCrystals = active;
              this.gpEventsState.lastRefreshAt = now;
              return active;
          }

          return Boolean(this.gpEventsState.weekendX2GoldCrystals);
      },

      getStageBalanceConfig() {
          const defaults = {
              maxStage: 5,
              unlockWaveTarget: 50,
              waveOffsetPerStage: 50,
              enemyWaveBonusPerStage: 10,
              waveGoldPerStageBonus: 0.18,
              waveCrystalPerStageBonus: 0.22
          };

          if (typeof BalanceRuntime === 'undefined' || !BalanceRuntime || typeof BalanceRuntime.get !== 'function') {
              return defaults;
          }

          const cfg = BalanceRuntime.get('stages', null);
          if (!cfg || typeof cfg !== 'object') {
              return defaults;
          }

          return {
              ...defaults,
              ...cfg
          };
      },

      getStageCount() {
          const cfg = this.getStageBalanceConfig();
          const maxStage = Number(cfg.maxStage);
          if (!Number.isFinite(maxStage)) {
              return 5;
          }
          return Math.max(1, Math.floor(maxStage));
      },

      normalizeStageNumber(stage) {
          const maxStage = this.getStageCount();
          if (!Number.isFinite(stage)) {
              return 1;
          }
          return Math.max(1, Math.min(maxStage, Math.floor(stage)));
      },

      getStageUnlockWaveTarget() {
          if (typeof SaveManager !== 'undefined' && SaveManager && typeof SaveManager.getStageUnlockWaveTarget === 'function') {
              return SaveManager.getStageUnlockWaveTarget();
          }

          const cfg = this.getStageBalanceConfig();
          const target = Number(cfg.unlockWaveTarget);
          if (!Number.isFinite(target)) {
              return 50;
          }
          return Math.max(1, Math.floor(target));
      },

      getStageWaveOffset(stage = this.currentStage) {
          const cfg = this.getStageBalanceConfig();
          const offsetPerStage = Number(cfg.waveOffsetPerStage);
          const safeOffsetPerStage = Number.isFinite(offsetPerStage) ? Math.max(0, Math.floor(offsetPerStage)) : 50;
          const normalizedStage = this.normalizeStageNumber(stage);
          return Math.max(0, (normalizedStage - 1) * safeOffsetPerStage);
      },

      getEffectiveWaveNumber(localWave, stage = this.currentStage) {
          const normalizedWave = Number.isFinite(localWave) ? Math.max(1, Math.floor(localWave)) : 1;
          return normalizedWave + this.getStageWaveOffset(stage);
      },

      getStageEnemyWaveOffset(stage = this.currentStage) {
          const cfg = this.getStageBalanceConfig();
          const enemyBonusPerStage = Number(cfg.enemyWaveBonusPerStage);
          const normalizedStage = this.normalizeStageNumber(stage);

          if (!Number.isFinite(enemyBonusPerStage)) {
              return this.getStageWaveOffset(normalizedStage);
          }

          return Math.max(0, (normalizedStage - 1) * Math.max(0, Math.floor(enemyBonusPerStage)));
      },

      getEffectiveEnemyWaveNumber(localWave, stage = this.currentStage) {
          const normalizedWave = Number.isFinite(localWave) ? Math.max(1, Math.floor(localWave)) : 1;
          return normalizedWave + this.getStageEnemyWaveOffset(stage);
      },

      getStageWaveGoldMultiplier(stage = this.currentStage) {
          const cfg = this.getStageBalanceConfig();
          const perStageBonus = Number(cfg.waveGoldPerStageBonus);
          const safePerStageBonus = Number.isFinite(perStageBonus) ? Math.max(0, perStageBonus) : 0.18;
          const normalizedStage = this.normalizeStageNumber(stage);
          const base = 1 + (normalizedStage - 1) * safePerStageBonus;
          const theme = (typeof StageThemes !== 'undefined' && StageThemes) ? StageThemes.getTheme(normalizedStage) : null;
          const themeMult = theme && theme.economyBias && Number.isFinite(Number(theme.economyBias.waveGoldMult))
              ? Number(theme.economyBias.waveGoldMult)
              : 1;
          return base * themeMult;
      },

      getStageWaveCrystalMultiplier(stage = this.currentStage) {
          const cfg = this.getStageBalanceConfig();
          const perStageBonus = Number(cfg.waveCrystalPerStageBonus);
          const safePerStageBonus = Number.isFinite(perStageBonus) ? Math.max(0, perStageBonus) : 0.22;
          const normalizedStage = this.normalizeStageNumber(stage);
          const base = 1 + (normalizedStage - 1) * safePerStageBonus;
          const theme = (typeof StageThemes !== 'undefined' && StageThemes) ? StageThemes.getTheme(normalizedStage) : null;
          const themeMult = theme && theme.economyBias && Number.isFinite(Number(theme.economyBias.waveCrystalMult))
              ? Number(theme.economyBias.waveCrystalMult)
              : 1;
          return base * themeMult;
      },

      getEnemyModifierSnapshot(isBoss = false) {
          const runEnemyHealth = (typeof RunModifiers !== 'undefined' && RunModifiers) ? (RunModifiers.getValue('enemyHealthMult', 1) || 1) : 1;
          const runEnemySpeed = (typeof RunModifiers !== 'undefined' && RunModifiers) ? (RunModifiers.getValue('enemySpeedMult', 1) || 1) : 1;
          const runEnemyReward = (typeof RunModifiers !== 'undefined' && RunModifiers) ? (RunModifiers.getValue('enemyRewardMult', 1) || 1) : 1;
          const runEnemyDamage = (typeof RunModifiers !== 'undefined' && RunModifiers) ? (RunModifiers.getValue('enemyDamageMult', 1) || 1) : 1;
          const cardEnemyHealth = (this.cardEffects && this.cardEffects.getEnemyHealthMultiplier) ? this.cardEffects.getEnemyHealthMultiplier() : 1;
          const cardEnemySpeed = (this.cardEffects && this.cardEffects.getEnemySpeedMultiplier) ? this.cardEffects.getEnemySpeedMultiplier() : 1;
          const bossHealthMult = isBoss && typeof RunModifiers !== 'undefined' && RunModifiers ? (RunModifiers.getValue('bossHealthMult', 1) || 1) : 1;
          const bossDamageMult = isBoss && typeof RunModifiers !== 'undefined' && RunModifiers ? (RunModifiers.getValue('bossDamageMult', 1) || 1) : 1;
          const bossRewardMult = isBoss && this.cardEffects && this.cardEffects.getBossRewardMultiplier ? this.cardEffects.getBossRewardMultiplier() : 1;
          const runBossRewardMult = isBoss && typeof RunModifiers !== 'undefined' && RunModifiers ? (RunModifiers.getValue('bossRewardMult', 1) || 1) : 1;

          return {
              healthMult: runEnemyHealth * cardEnemyHealth * bossHealthMult,
              speedMult: runEnemySpeed * cardEnemySpeed,
              rewardMult: runEnemyReward * bossRewardMult * runBossRewardMult,
              damageMult: runEnemyDamage * bossDamageMult
          };
      },

      refreshRunDerivedBonuses() {
          if (!this.tower) {
              return;
          }

          const previousMaxHealth = Math.max(1, Number(this.tower.maxHealth) || 1);
          const previousHealth = Math.max(1, Number(this.tower.health) || previousMaxHealth);
          const healthRatio = previousHealth / previousMaxHealth;

          const runBonuses = {
              damageMult: (typeof RunModifiers !== 'undefined' && RunModifiers) ? (RunModifiers.getValue('playerDamageMult', 0) || 0) : 0,
              attackSpeedMult: (typeof RunModifiers !== 'undefined' && RunModifiers) ? (RunModifiers.getValue('playerAttackSpeedMult', 0) || 0) : 0,
              maxHealthMult: (typeof RunModifiers !== 'undefined' && RunModifiers) ? (RunModifiers.getValue('playerMaxHealthMult', 0) || 0) : 0,
              rangeFlat: (typeof RunModifiers !== 'undefined' && RunModifiers) ? (RunModifiers.getValue('playerRangeFlat', 0) || 0) : 0,
              healthRegenFlat: (typeof RunModifiers !== 'undefined' && RunModifiers) ? (RunModifiers.getValue('playerHealthRegenFlat', 0) || 0) : 0,
              defenseFlat: (typeof RunModifiers !== 'undefined' && RunModifiers) ? (RunModifiers.getValue('playerDefenseFlat', 0) || 0) : 0
          };

          if (this._eventTowerBonuses) {
              runBonuses.damageMult += this._eventTowerBonuses.damageMult || 0;
              runBonuses.attackSpeedMult += this._eventTowerBonuses.attackSpeedMult || 0;
              runBonuses.maxHealthMult += this._eventTowerBonuses.maxHealthMult || 0;
              runBonuses.rangeFlat += this._eventTowerBonuses.rangeFlat || 0;
              runBonuses.healthRegenFlat += this._eventTowerBonuses.healthRegenFlat || 0;
              runBonuses.defenseFlat += this._eventTowerBonuses.defenseFlat || 0;
          }

          if (this.cardEffects && typeof this.cardEffects.applyTowerExternalBonuses === 'function') {
              this.cardEffects.applyTowerExternalBonuses();
              this.tower.externalBonuses.damageMult += runBonuses.damageMult;
              this.tower.externalBonuses.attackSpeedMult += runBonuses.attackSpeedMult;
              this.tower.externalBonuses.maxHealthMult += runBonuses.maxHealthMult;
              this.tower.externalBonuses.rangeFlat += runBonuses.rangeFlat;
              this.tower.externalBonuses.healthRegenFlat += runBonuses.healthRegenFlat;
              this.tower.externalBonuses.defenseFlat += runBonuses.defenseFlat;
          } else {
              this.tower.externalBonuses = runBonuses;
          }

          this.tower.recalculateStats();
          this.tower.health = Math.min(this.tower.maxHealth, Math.max(1, Math.floor(this.tower.maxHealth * healthRatio)));
          if (typeof UI !== 'undefined' && UI.updateHealth) {
              UI.updateHealth(this.tower.health, this.tower.maxHealth);
          }
      },

      resolveEliteEventChoice(choiceId) {
          if (typeof EliteEvents === 'undefined' || !EliteEvents || typeof EliteEvents.resolveChoice !== 'function') {
              return false;
          }

          const resolved = EliteEvents.resolveChoice(this, choiceId);
          this.refreshRunDerivedBonuses();
          this.endModalPause('elite_event');
          this._eliteEventActive = false;

          if (resolved && this.stats) {
              this.stats.eliteChoices = (this.stats.eliteChoices || 0) + 1;
          }

          if (resolved && typeof SeasonSystem !== 'undefined' && SeasonSystem && typeof SeasonSystem.onEliteEventChosen === 'function') {
              const seasonResult = SeasonSystem.onEliteEventChosen();
              const gained = seasonResult && Number.isFinite(seasonResult.pointsGained)
                  ? seasonResult.pointsGained
                  : 0;
              this.seasonPointsEarned += gained;
              if (gained > 0 && typeof UI !== 'undefined' && UI.showSeasonXpGain) {
                  UI.showSeasonXpGain(gained, 'seasonSourceEliteEvent');
              }
          }

          if (typeof UI !== 'undefined' && UI.updateModifierHud) {
              UI.updateModifierHud();
          }

          this.triggerQueuedWaveInterstitial();

          return Boolean(resolved);
      },

      resolveTraderChoice(choiceIndex) {
          if (!this.trader || typeof this.trader.applyOffer !== 'function') {
              return false;
          }

          const resolved = this.trader.applyOffer(this, choiceIndex);
          this.endModalPause('trader_choice');

          if (resolved && this.stats) {
              this.stats.traderDeals = (this.stats.traderDeals || 0) + 1;
          }

          if (typeof UI !== 'undefined' && UI.updateModifierHud) {
              UI.updateModifierHud();
          }

          return Boolean(resolved);
      },

      resolveTraderRewardedChoice() {
          if (!this.trader || typeof this.trader.applyOffer !== 'function') {
              return false;
          }

          const resolved = this.trader.applyOffer(this, 0, { rewarded: true });
          this.endModalPause('trader_choice');

          if (resolved && this.stats) {
              this.stats.traderDeals = (this.stats.traderDeals || 0) + 1;
          }

          if (typeof UI !== 'undefined' && UI.updateModifierHud) {
              UI.updateModifierHud();
          }

          return Boolean(resolved);
      },

      triggerQueuedWaveInterstitial() {
          const waveNumber = Number(this._pendingWaveInterstitialWave || 0);
          if (!waveNumber || this._waveInterstitialInFlight || this.gameOver) {
              return;
          }

          this._pendingWaveInterstitialWave = 0;
          this._waveInterstitialInFlight = true;
          this.beginModalPause('wave_interstitial');

          Promise.resolve().then(async () => {
              if (typeof UI !== 'undefined' && UI.showNotification) {
                  UI.showNotification(
                      (typeof LocalizationManager !== 'undefined')
                          ? LocalizationManager.t('waveInterstitialToast', '📺 Передышка после волны {0}', waveNumber)
                          : `📺 Передышка после волны ${waveNumber}`,
                      '#8fd8fb'
                  );
              }

              if (window.AdsManager && typeof AdsManager.showInterstitial === 'function') {
                  await AdsManager.showInterstitial({
                      ignoreCooldown: true,
                      placement: 'wave_milestone',
                      wave: waveNumber
                  });
              }
          }).catch((error) => {
              console.warn('⚠️ Не удалось показать межволновую fullscreen рекламу:', error);
          }).finally(() => {
              this._waveInterstitialInFlight = false;
              this.endModalPause('wave_interstitial');
          });
      },

      


      applyGoldEventMultiplier(amount) {
          if (!Number.isFinite(amount) || amount <= 0) {
              return 0;
          }

          if (this.isPreRunAdBuffActive()) {
              amount = Math.floor(amount * 2);
          }

          if (this.isX2GoldCrystalsEventActive()) {
              return Math.floor(amount * 2);
          }

          return amount;
      },

    applyXPPreRunBuffMultiplier(amount) {
          if (!Number.isFinite(amount) || amount <= 0) {
              return 0;
          }

          if (this.isPreRunAdBuffActive()) {
              return Math.floor(amount * 2);
          }

          return amount;
      },

      getGp() {
          return window.GP || window.__GP_SDK_INSTANCE || window.gp || null;
      },

      gpTrackEvent(eventName, payload = {}) {
          
          console.log(`📈 Event: ${eventName}`, payload || {});
      },

      gpHasEvent(eventTag) {
          const gp = this.getGp();
          return Boolean(gp && gp.trigger && typeof gp.trigger.isActivated === 'function' && gp.trigger.isActivated(eventTag));
      },

      getServerDateSafe() {
          const gp = this.getGp();
          const raw = gp && gp.serverTime ? gp.serverTime : null;
          const date = raw ? new Date(raw) : new Date();
          return Number.isNaN(date.getTime()) ? new Date() : date;
      },

      isPreRunAdBuffActive() {
          const wave = this.waveManager ? Number(this.waveManager.wave || 0) : 0;
          return Boolean(this.preRunAdBuffEnabled && wave > 0 && wave <= this.preRunAdBuffWaveLimit);
      },

      getPreRunAdBuffWavesLeft() {
          if (!this.preRunAdBuffEnabled) {
              return 0;
          }

          if (!this.waveManager) {
              return this.preRunAdBuffWaveLimit;
          }

          const wave = Number(this.waveManager.wave || 1);
          return Math.max(0, this.preRunAdBuffWaveLimit - wave + 1);
      },

      setPreRunAdBuffEnabled(enabled) {
          this.preRunAdBuffEnabled = Boolean(enabled);

          if (typeof UI !== 'undefined' && typeof UI.updatePreRunAdBuffBadge === 'function') {
              UI.updatePreRunAdBuffBadge(this.getPreRunAdBuffWavesLeft());
          }
      },

      


      applyCrystalEventMultiplier(amount) {
          if (!Number.isFinite(amount) || amount <= 0) {
              return 0;
          }

          if (this.isX2GoldCrystalsEventActive()) {
              return Math.floor(amount * 2);
          }

          return amount;
      },

      createFloatingText(x, y, text, color, options = null) {
         const settings = options && typeof options === 'object' ? options : {};
         this.effects.push({
              x: x,
              y: y,
              text: text,
              color: color,
              life: 1,
              vy: -1,
              ignoreGameSpeed: Boolean(settings.ignoreGameSpeed),
               update(gameSpeed = 1) {
                  this.y += this.vy * gameSpeed;
                 this.life -= 0.02 * gameSpeed;
                if (this.life <= 0) this.markedForDeletion = true;
            },
            draw(ctx) {
                ctx.save();
                ctx.globalAlpha = this.life;
                ctx.font = 'bold 20px Arial';
                ctx.fillStyle = this.color;
                ctx.textAlign = 'center';
                ctx.shadowBlur = 10;
                ctx.shadowColor = this.color;
                ctx.fillText(this.text, this.x, this.y);
                ctx.restore();
            },
            markedForDeletion: false
        });
    },

    
    createXPCollectEffect(x, y) {
        for (let i = 0; i < 5; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = 1 + Math.random() * 2;
            this.effects.push({
                x, y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                life: 0.6,
                color: '#2ecc71',
                update(gameSpeed = 1) {
                    this.x += this.vx * gameSpeed;
                    this.y += this.vy * gameSpeed;
                    this.life -= 0.04 * gameSpeed;
                    if (this.life <= 0) this.markedForDeletion = true;
                },
                draw(ctx) {
                    ctx.save();
                    ctx.globalAlpha = this.life;
                    ctx.fillStyle = this.color;
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.restore();
                },
                markedForDeletion: false
            });
        }
    },

    
    createLevelUpEffect() {
        if (!this.tower) return;
        
        
        this.effects.push({
            x: this.tower.x,
            y: this.tower.y,
            radius: 50,
            alpha: 1,
            update(gameSpeed = 1) {
                this.radius += 5 * gameSpeed;
                this.alpha -= 0.02 * gameSpeed;
                if (this.alpha <= 0) this.markedForDeletion = true;
            },
            draw(ctx) {
                ctx.save();
                ctx.globalAlpha = this.alpha;
                ctx.strokeStyle = '#2ecc71';
                ctx.lineWidth = 5;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.stroke();
                ctx.restore();
            },
            markedForDeletion: false
        });
        
        const levelUpText = (typeof LocalizationManager !== 'undefined')
            ? LocalizationManager.t('notificationLevelUp', 'LEVEL UP!')
            : 'LEVEL UP!';
        this.createFloatingText(this.tower.x, this.tower.y - 100, levelUpText, '#2ecc71');
    },

    
    endGame() {
          this.gameOver = true;
          this.isRunning = false;

          
          if (this.animationId) {
              cancelAnimationFrame(this.animationId);
          }

          if (!this.stats.gameTime) {
              this.stats.gameTime = Math.floor((Date.now() - this.stats.startTime) / 1000);
          }

          AudioManager.playSound('gameOver');

          const canOfferRevive = !this.reviveOfferUsed && typeof AdsManager !== 'undefined' && typeof AdsManager.showRewardedAd === 'function';
          this.awaitingReviveChoice = canOfferRevive;

          if (canOfferRevive && typeof UI !== 'undefined' && typeof UI.showReviveOffer === 'function') {
              UI.showReviveOffer();
          } else {
              UI.showGameOver({
                  wave: this.waveManager ? this.waveManager.wave : 0,
                  kills: this.stats ? this.stats.kills : 0,
                  totalGold: this.stats ? this.stats.totalGold : 0,
                  crystals: this.sessionCrystals || 0,
                  time: this.stats ? this.stats.gameTime : 0,
                  isNewRecord: false,
                  reviveAvailable: false,
                  stageProgress: null
              });
          }

          if (!canOfferRevive && window.AdsManager && typeof AdsManager.onGameOver === 'function') {
              setTimeout(() => {
                  const gameOverModal = document.getElementById('gameOverModal');
                  if (gameOverModal && !gameOverModal.classList.contains('hidden')) {
                      AdsManager.onGameOver();
                  }
              }, 900);
          }

          
          if (!canOfferRevive) {
              this.finalizeGameOver();
          }
    },

    async finalizeGameOver() {
        if (this._gameOverFinalizePromise) {
            return this._gameOverFinalizePromise;
        }

        if (this._gameOverFinalized) {
            return this._gameOverFinalStats || null;
        }
        this._gameOverFinalizePromise = (async () => {
            const reviveOfferModal = document.getElementById('reviveOfferModal');
            if (reviveOfferModal) {
                reviveOfferModal.classList.add('hidden');
            }

            const traderChoiceModal = document.getElementById('traderChoiceModal');
            if (traderChoiceModal) {
                traderChoiceModal.classList.add('hidden');
            }

            this._gameOverFinalized = true;
            this.awaitingReviveChoice = false;
            this.endModalPause();

            const waveAtEnd = this.waveManager ? this.waveManager.wave : 0;
            const finalStats = {
                wave: waveAtEnd,
                kills: this.stats ? this.stats.kills : 0,
                totalGold: this.stats ? this.stats.totalGold : 0,
                crystals: this.sessionCrystals || 0,
                time: this.stats ? this.stats.gameTime : 0,
                isNewRecord: false,
                reviveAvailable: false,
                stageProgress: null,
                seasonPointsEarned: this.seasonPointsEarned || 0,
                eliteChoices: this.stats ? (this.stats.eliteChoices || 0) : 0,
                traderDeals: this.stats ? (this.stats.traderDeals || 0) : 0,
                modifierCount: (typeof RunModifiers !== 'undefined' && RunModifiers && typeof RunModifiers.getActiveModifiers === 'function')
                    ? RunModifiers.getActiveModifiers().length
                    : 0
            };

            let stageProgress = null;
            let isNewRecord = false;

            try {
                this.resetSystems();

                const gp = this.getGp();
                if (gp && typeof gp.gameplayStop === 'function') {
                    gp.gameplayStop();
                }
                this.gpTrackEvent('game_session_end', {
                    wave: waveAtEnd,
                    kills: finalStats.kills,
                    totalGold: finalStats.totalGold,
                    sessionCrystals: finalStats.crystals
                });

                stageProgress = (typeof SaveManager !== 'undefined' && SaveManager && typeof SaveManager.updateStageProgress === 'function')
                    ? SaveManager.updateStageProgress(this.currentStage, waveAtEnd)
                    : null;

                if (stageProgress && stageProgress.unlockedNewStage) {
                    const unlockedText = (typeof LocalizationManager !== 'undefined')
                        ? LocalizationManager.t('stageUnlockedToast', 'Открыта Стадия {0}!', stageProgress.unlockedStage)
                        : `Открыта Стадия ${stageProgress.unlockedStage}!`;

                    if (typeof UI !== 'undefined' && UI.showNotification) {
                        UI.showNotification(unlockedText, 'reward');
                    }

                    this.gpTrackEvent('stage_unlocked', {
                        stage: stageProgress.unlockedStage,
                        reachedWave: stageProgress.reachedWave,
                        sourceStage: this.currentStage
                    });
                }

                isNewRecord = SaveManager.saveGameStats({
                    wave: waveAtEnd,
                    kills: finalStats.kills,
                    totalGold: finalStats.totalGold,
                    crystals: finalStats.crystals,
                    time: finalStats.time
                });

                SaveManager.addCrystals(finalStats.crystals);

                if (window.AchievementsManager && AchievementsManager._isInitialized) {
                    Promise.resolve(AchievementsManager.finalizeSession({
                        stats: this.stats,
                        wave: waveAtEnd,
                        sessionCrystals: finalStats.crystals
                    })).catch((error) => {
                        console.warn('⚠️ Не удалось завершить синхронизацию достижений:', error);
                    });
                }

                if (typeof LeaderboardManager !== 'undefined') {
                    LeaderboardManager.setScore(waveAtEnd, this.currentStage);
                }

                if (typeof SeasonSystem !== 'undefined' && SeasonSystem && typeof SeasonSystem.onRunEnded === 'function') {
                    const seasonResult = SeasonSystem.onRunEnded({
                        wave: waveAtEnd,
                        stage: this.currentStage,
                        crystals: finalStats.crystals,
                        gold: finalStats.totalGold
                    });
                    if (seasonResult && Number.isFinite(seasonResult.pointsGained)) {
                        this.seasonPointsEarned += seasonResult.pointsGained;
                    }
                }

                if (window.AuthManager && AuthManager.forceSave) {
                    await AuthManager.forceSave(true);
                }
            } catch (error) {
                console.error('❌ Ошибка финализации game over:', error);
                if (typeof UI !== 'undefined' && UI.showNotification) {
                    UI.showNotification(
                        (typeof LocalizationManager !== 'undefined')
                            ? LocalizationManager.t('gameOverFinalizeFallback', 'Забег завершен, но часть итоговых данных не успела сохраниться')
                            : 'Забег завершен, но часть итоговых данных не успела сохраниться',
                        'warning'
                    );
                }
            } finally {
                finalStats.isNewRecord = Boolean(isNewRecord);
                finalStats.stageProgress = stageProgress;
                finalStats.seasonPointsEarned = this.seasonPointsEarned || 0;
                this._gameOverFinalStats = finalStats;

                if (typeof UI !== 'undefined' && UI && typeof UI.showGameOver === 'function') {
                    UI.showGameOver(finalStats);
                }

                this._gameOverFinalizePromise = null;
            }

            return finalStats;
        })();

        return this._gameOverFinalizePromise;
    },

    reviveWithHalfHealth() {
        if (!this.awaitingReviveChoice || this.reviveOfferUsed || !this.tower) {
            return false;
        }

        return this.forceReviveWithHalfHealth();
    },

    forceReviveWithHalfHealth() {
        if (!this.tower) {
            return false;
        }

        this.reviveOfferUsed = true;
        this.awaitingReviveChoice = false;
        this._gameOverFinalized = false;
        this.gameOver = false;
        this.isRunning = true;
        this.isPaused = false;

        this.tower.health = Math.max(1, Math.ceil(this.tower.maxHealth * 0.5));
        if (this.stats) {
            this.stats.gameTime = 0;
        }
        this.createFloatingText(this.tower.x, this.tower.y - 70, typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('floatRevive', '❤️ REVIVE: 50% HP') : '❤️ REVIVE: 50% HP', '#2ecc71');

        this.gpTrackEvent('revive_used', {
            wave: this.waveManager ? this.waveManager.wave : 0
        });

        this.lastTime = performance.now();
        this.gameLoop();
        return true;
    },

    
    pause() {
        const gp = this.getGp();
        if (!gp || typeof gp.pause !== 'function') {
            return;
        }
        
        
        this._manualPauseTriggered = true;

        
        gp.pause();
    },

    
    resume() {
        const gp = this.getGp();
        if (!gp || typeof gp.resume !== 'function') {
            return;
        }
        
        
        this._manualPauseTriggered = false;

        
        gp.resume();
    },

    
    switchArrowType(type) {
        if (this.tower && this.tower.switchArrowType(type)) {
            UI.updateArrowSelection(type);
            return true;
        }
        return false;
    },

    
    addActiveBonus(type, originalValue, duration, label, color) {
        
        const existing = this.activeBonuses.find(b => b.type === type);
        if (existing && existing.interval) {
            clearInterval(existing.interval);
        }
        this.activeBonuses = this.activeBonuses.filter(b => b.type !== type);
        
        
        const bonus = {
            type: type,
            originalValue: originalValue,
            duration: duration,
            remaining: duration,
            label: label,
            color: color,
            icon: type === 'damage' ? '⚔️' : (type === 'speed' ? '⚡' : '')
        };
        
        this.activeBonuses.push(bonus);
        
        
        this.showBonusTimerUI(type, duration);
        
        
        const interval = setInterval(() => {
            
            if (this.isGameplayPaused()) return;

            bonus.remaining--;
            
            
            this.updateBonusTimerUI(type, bonus.remaining, duration);
            
            if (bonus.remaining <= 0) {
                clearInterval(interval);
                
                if (type === 'damage' && this.tower) {
                    this.tower.damage = originalValue;
                } else if (type === 'speed' && this.tower) {
                    this.tower.attackSpeed = originalValue;
                }
                
                this.activeBonuses = this.activeBonuses.filter(b => b !== bonus);
                
                
                this.hideBonusTimerUI(type);
            }
        }, 16); 
        
        bonus.interval = interval;
    },
    
    
    showBonusTimerUI(type, duration) {
        let timerId = '';
        if (type === 'damage') timerId = 'damageBoostTimer';
        else if (type === 'speed') timerId = 'speedBoostTimer';
        else if (type === 'frenzy') timerId = 'frenzyTimer';
        
        const timerEl = document.getElementById(timerId);
        if (timerEl) {
            timerEl.classList.remove('hidden');
        }
    },
    
    
    updateBonusTimerUI(type, remaining, duration) {
        let progressId = '';
        let timeId = '';
        
        if (type === 'damage') {
            progressId = 'damageBoostProgress';
            timeId = 'damageBoostTime';
        } else if (type === 'speed') {
            progressId = 'speedBoostProgress';
            timeId = 'speedBoostTime';
        } else if (type === 'frenzy') {
            progressId = 'frenzyProgress';
            timeId = 'frenzyTime';
        }
        
        const progressEl = document.getElementById(progressId);
        const timeEl = document.getElementById(timeId);
        
        if (progressEl && timeEl) {
            const progress = (remaining / duration) * 100;
            progressEl.style.width = progress + '%';
            
            const seconds = Math.ceil(remaining / 60);
            const secondsSuffix = (typeof LocalizationManager !== 'undefined' && typeof LocalizationManager.t === 'function')
                ? LocalizationManager.t('secondsSuffix', 's')
                : 's';
            
            if (type === 'frenzy') {
                const label = typeof LocalizationManager !== 'undefined' ? 
                    LocalizationManager.t('frenzyActive', 'FRENZY') : 'FRENZY';
                timeEl.textContent = `${label} ${seconds}${secondsSuffix}`;
            } else {
                timeEl.textContent = `${seconds}${secondsSuffix}`;
            }
        }
    },
    
    
    hideBonusTimerUI(type) {
        let timerId = '';
        if (type === 'damage') timerId = 'damageBoostTimer';
        else if (type === 'speed') timerId = 'speedBoostTimer';
        else if (type === 'frenzy') timerId = 'frenzyTimer';
        
        const timerEl = document.getElementById(timerId);
        if (timerEl) {
            timerEl.classList.add('hidden');
        }
    },

    
    drawBonuses() {
        
        
    },

    
    initGarden() {
        this.garden.grid = [];
         for (let row = 0; row < 3; row++) {
             this.garden.grid[row] = [];
             for (let col = 0; col < 3; col++) {
                 this.garden.grid[row][col] = {
                     planted: false,
                     growthDays: 0,
                     ready: false
                 };
             }
         }
        this.garden.daysPassed = 0;
        this.lastTimeOfDay = 0; 
         
         this.garden.offsetX = this.canvas.width / 2 + 250;
         this.garden.offsetY = this.canvas.height / 2 + 80;
    },

    
      plantSeeds(amount) {
          let planted = 0;
          for (let row = 0; row < 3; row++) {
              for (let col = 0; col < 3; col++) {
                  if (planted >= amount) return planted;
                  if (!this.garden.grid[row][col].planted) {
                      this.garden.grid[row][col] = {
                          planted: true,
                          plantedDay: this.garden.daysPassed, 
                          ready: false
                      };
                      planted++;
                  }
              }
          }
          return planted;
      },

     
     updateGarden() {
         
         if (this.timeOfDay < this.garden.dayThreshold && this.lastTimeOfDay >= this.garden.dayThreshold) {
             this.garden.daysPassed++;
             
             
             let readyToHarvest = [];
             
             for (let row = 0; row < 3; row++) {
                 for (let col = 0; col < 3; col++) {
                     const cell = this.garden.grid[row][col];
                     if (cell.planted && !cell.ready) {
                         
                         const daysSincePlanting = this.garden.daysPassed - cell.plantedDay;
                         if (daysSincePlanting >= 3) {
                             cell.ready = true;
                             readyToHarvest.push({row, col});
                             
                             const x = this.garden.offsetX + col * this.garden.cellSize + this.garden.cellSize / 2;
                             const y = this.garden.offsetY + row * this.garden.cellSize + this.garden.cellSize / 2;
                             const readyText = typeof LocalizationManager !== 'undefined' ? 
                                 LocalizationManager.t('ready', '🌱 Созрело!') : '🌱 Созрело!';
                             this.createFloatingText(x, y - 20, readyText, '#2ecc71');
                         }
                     }
                 }
             }
             
             
             if (readyToHarvest.length > 0) {
                 this.harvestGarden();
             }
         }
         
         this.lastTimeOfDay = this.timeOfDay;
     },

    
     harvestGarden() {
         let harvested = 0;
         for (let row = 0; row < 3; row++) {
             for (let col = 0; col < 3; col++) {
                 const cell = this.garden.grid[row][col];
                 if (cell.ready) {
                     harvested++;
                     this.gold += 50;
                     this.stats.totalGold += 50;
                     
                     const x = this.garden.offsetX + col * this.garden.cellSize + this.garden.cellSize / 2;
                     const y = this.garden.offsetY + row * this.garden.cellSize + this.garden.cellSize / 2;
                     this.createFloatingText(x, y - 30, '+50 💰', '#f1c40f');
                     
                      
                      cell.planted = false;
                      cell.plantedDay = 0;
                      cell.ready = false;
                 }
            }
        }
        
        if (harvested > 0) {
            UI.updateGold(this.gold);
        }
    },

    
    drawGarden() {
        const ctx = this.ctx;
        const cellSize = this.garden.cellSize;
        const offsetX = this.garden.offsetX;
        const offsetY = this.garden.offsetY;
        
         
         ctx.save();
         ctx.fillStyle = 'rgba(101, 67, 33, 0.8)';
         ctx.fillRect(offsetX - 5, offsetY - 5, cellSize * 3 + 10, cellSize * 3 + 10);
         
         
         for (let row = 0; row < 3; row++) {
             for (let col = 0; col < 3; col++) {
                const x = offsetX + col * cellSize;
                const y = offsetY + row * cellSize;
                const cell = this.garden.grid[row][col];
                
                
                ctx.fillStyle = 'rgba(139, 90, 43, 0.6)';
                ctx.fillRect(x, y, cellSize - 2, cellSize - 2);
                
                  
                  if (cell.planted) {
                      if (cell.ready) {
                          
                          ctx.font = '24px Arial';
                          ctx.textAlign = 'center';
                          ctx.textBaseline = 'middle';
                          ctx.fillText('🌻', x + cellSize / 2, y + cellSize / 2);
                      } else {
                          
                          const daysSincePlanting = this.garden.daysPassed - (cell.plantedDay || 0);
                          const growthProgress = Math.min(daysSincePlanting / 3, 1); 
                          const plantSize = Math.max(12, 24 * growthProgress);
                          ctx.font = `${plantSize}px Arial`;
                          ctx.textAlign = 'center';
                          ctx.textBaseline = 'middle';
                          ctx.globalAlpha = 0.5 + growthProgress * 0.5;
                          ctx.fillText('🌱', x + cellSize / 2, y + cellSize / 2);
                          ctx.globalAlpha = 1;
                          
                          
                          ctx.font = '8px Arial';
                          ctx.fillStyle = '#FFF';
                          ctx.globalAlpha = 1;
                          ctx.textAlign = 'center';
                          ctx.textBaseline = 'bottom';
                          ctx.fillText(`${daysSincePlanting}/3`, x + cellSize / 2, y + cellSize - 2);
                      }
                  }
            }
        }
        
         
          ctx.strokeStyle = 'rgba(101, 67, 33, 1)';
          ctx.lineWidth = 3;
          ctx.strokeRect(offsetX - 5, offsetY - 5, cellSize * 3 + 10, cellSize * 3 + 10);
          
          
          ctx.font = 'bold 12px Arial';
          ctx.fillStyle = '#FFD700';
          ctx.textAlign = 'left';
          ctx.textBaseline = 'top';
          ctx.fillText(typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('gardenDay', 'Day: {0}').replace('{0}', this.garden.daysPassed) : `Day: ${this.garden.daysPassed}`, offsetX, offsetY + cellSize * 3 + 15);
         
          ctx.restore();
      },

    
    
    createXPBar() {
        
        const existingBar = document.getElementById('xpBarContainer');
        if (existingBar) {
            existingBar.remove();
        }
        
        
        const levelLabel = typeof LocalizationManager !== 'undefined' ?
            LocalizationManager.t('level', 'Ур.') : 'Ур.';
        
        const container = document.createElement('div');
        container.id = 'xpBarContainer';
        container.className = 'xp-bar-container';
        
        const levelIndicator = document.createElement('div');
        levelIndicator.id = 'levelText';
        levelIndicator.className = 'level-indicator';
        levelIndicator.textContent = `${levelLabel} 1`;
        container.appendChild(levelIndicator);
        
        const fill = document.createElement('div');
        fill.id = 'xpBar';
        fill.className = 'xp-bar-fill';
        fill.style.width = '0%';
        container.appendChild(fill);
        
        const text = document.createElement('div');
        text.id = 'xpText';
        text.className = 'xp-text';
        text.textContent = '0/100 XP';
        container.appendChild(text);
        
        
        const activeUpgradesBtn = document.getElementById('activeUpgradesBtn');
        if (activeUpgradesBtn) {
            container.classList.add('xp-on-active-btn');
            activeUpgradesBtn.appendChild(container);
            return;
        }

        const bottomControls = document.querySelector('.bottom-controls');
        if (bottomControls) {
            bottomControls.appendChild(container);
        } else {
            
            document.body.appendChild(container);
        }
    },

    updateBastionShieldUI() {
        const timerEl = document.getElementById('bastionShieldTimer');
        const progressEl = document.getElementById('bastionShieldProgress');
        const timeEl = document.getElementById('bastionShieldTime');
        const hudIconEl = document.getElementById('bastionHudIcon');
        if (!timerEl || !progressEl || !timeEl || !this.tower) {
            return;
        }

        const now = Date.now();
        const activeUntil = this.tower.lowHpShieldUntil || 0;
        if (now >= activeUntil) {
            timerEl.classList.add('hidden');
            if (hudIconEl) {
                hudIconEl.classList.add('hidden');
                hudIconEl.classList.remove('active');
            }
            return;
        }

        const activatedAt = this.tower.lowHpShieldActivatedAt || now;
        const totalDurationMs = Math.max(1, activeUntil - activatedAt);
        const remainingMs = Math.max(0, activeUntil - now);
        const progress = Math.max(0, Math.min(100, (remainingMs / totalDurationMs) * 100));
        const seconds = Math.ceil(remainingMs / 1000);
        const label = (typeof LocalizationManager !== 'undefined')
            ? LocalizationManager.t('talent_lastBastion_active', 'Бастион')
            : 'Бастион';
        const secSuffix = (typeof LocalizationManager !== 'undefined' && LocalizationManager.getLanguage && LocalizationManager.getLanguage() === 'en')
            ? 's'
            : 'с';

        progressEl.style.width = `${progress}%`;
        timeEl.textContent = `${label} ${seconds}${secSuffix}`;
        timerEl.classList.remove('hidden');
        if (hudIconEl) {
            hudIconEl.classList.remove('hidden');
            hudIconEl.classList.add('active');
        }
    },
    
    
    
    updateMushrooms(deltaTime) {
        
        this.mushroomSpawnTimer += deltaTime;
        const spawnInterval = this.mushroomSpawnInterval * (this.mushroomSpawnRate || 1);
        
        if (this.mushroomSpawnTimer > spawnInterval && this.mushrooms.length < 3) {
            this.spawnMushroom();
            this.mushroomSpawnTimer = 0;
        }
        
        
        for (let i = this.mushrooms.length - 1; i >= 0; i--) {
            const mushroom = this.mushrooms[i];
            mushroom.life -= deltaTime / 1000; 
            
            if (mushroom.life <= 0) {
                
                this.removeMushroomElement(mushroom);
                this.mushrooms.splice(i, 1);
            }
        }
    },
    
    spawnMushroom() {
        const margin = 100;
        const x = margin + Math.random() * (this.canvas.width - margin * 2);
        const y = margin + Math.random() * (this.canvas.height - margin * 2);
        
        const mushroom = {
            x: x,
            y: y,
            life: 8, 
            id: 'mushroom_' + Date.now(),
            spriteIndex: this.mushroomAtlas.spriteUrls.length > 0
                ? Math.floor(Math.random() * this.mushroomAtlas.spriteUrls.length)
                : -1
        };
        
        this.mushrooms.push(mushroom);
        this.createMushroomElement(mushroom);
    },
    
    createMushroomElement(mushroom) {
        const el = document.createElement('div');
        el.id = mushroom.id;
        el.className = 'mushroom';
        el.style.left = mushroom.x + 'px';
        el.style.top = mushroom.y + 'px';

        const icon = document.createElement('div');
        icon.className = 'mushroom-icon';
        if (Number.isFinite(mushroom.spriteIndex) && mushroom.spriteIndex >= 0) {
            const spriteUrl = this.mushroomAtlas.spriteUrls[mushroom.spriteIndex];
            if (spriteUrl) {
                icon.style.backgroundImage = `url('${spriteUrl}')`;
                icon.classList.add('sprite');
            } else {
                icon.textContent = '🍄';
            }
        } else {
            icon.textContent = '🍄';
        }
        el.appendChild(icon);
        
        el.addEventListener('click', (e) => {
            e.stopPropagation();
            this.collectMushroom(mushroom);
        });
        
        
        const gameUI = document.querySelector('.game-ui');
        if (gameUI) {
            gameUI.appendChild(el);
        } else {
            document.body.appendChild(el);
        }
    },
    
    removeMushroomElement(mushroom) {
        const el = document.getElementById(mushroom.id);
        if (el) {
            el.classList.add('collecting');
            setTimeout(() => el.remove(), 300);
        }
    },
    
    collectMushroom(mushroom) {
        
        let goldAmount = this.mushroomGold || 10;
        
        
        if (this.cardEffects) {
            goldAmount = this.cardEffects.modifyMushroomGold(goldAmount);
        }

        goldAmount = this.applyGoldEventMultiplier(goldAmount);
        
        this.gold += goldAmount;
        this.stats.totalGold += goldAmount;
        UI.updateGold(this.gold);

        if (this.questSystem) {
            this.questSystem.onGoldEarned(goldAmount);
        }
        
        
        const el = document.getElementById(mushroom.id);
        if (el) {
            const popup = document.createElement('div');
            popup.className = 'mushroom-gold';
            popup.textContent = '+' + goldAmount;
            el.appendChild(popup);
        }
        
        
        const index = this.mushrooms.indexOf(mushroom);
        if (index > -1) {
            this.mushrooms.splice(index, 1);
        }
        
        
        this.removeMushroomElement(mushroom);
        
        
        if (typeof AudioManager !== 'undefined') {
            AudioManager.playSound('collect');
        }
        
        
        if (this.questSystem) {
            this.questSystem.onMushroomCollected();
        }
    },
    
    drawMushrooms(ctx) {
        
    },
    
    
    
    updateCrystalRain(deltaTime) {
        if (!this.crystalRain) return;
        
        this.crystalRainTimer += deltaTime;
        const interval = this.crystalRain.interval * 1000;
        
        if (this.crystalRainTimer > interval) {
            this.spawnCrystal();
            this.crystalRainTimer = 0;
        }
        
        
        for (let i = this.fallingCrystals.length - 1; i >= 0; i--) {
            const crystal = this.fallingCrystals[i];
            crystal.y += crystal.speed * deltaTime / 1000;
            
            if (crystal.y > this.canvas.height + 50) {
                this.removeCrystalElement(crystal);
                this.fallingCrystals.splice(i, 1);
            }
        }
    },
    
    spawnCrystal() {
        const x = 50 + Math.random() * (this.canvas.width - 100);
        
        const crystal = {
            x: x,
            y: -50,
            speed: 100 + Math.random() * 50,
            id: 'crystal_' + Date.now()
        };
        
        this.fallingCrystals.push(crystal);
        this.createCrystalElement(crystal);
    },
    
    createCrystalElement(crystal) {
        const el = document.createElement('div');
        el.id = crystal.id;
        el.className = 'crystal-drop';
        el.style.left = crystal.x + 'px';
        el.style.top = crystal.y + 'px';
        el.innerHTML = '<div class="crystal-drop-icon">💎</div>';
        
        el.addEventListener('click', (e) => {
            e.stopPropagation();
            this.collectCrystal(crystal);
        });
        
        document.body.appendChild(el);
    },
    
    removeCrystalElement(crystal) {
        const el = document.getElementById(crystal.id);
        if (el) {
            el.remove();
        }
    },
    
    collectCrystal(crystal) {
        const amount = this.crystalRain.amount || 1;
        this.sessionCrystals += amount;
        this.crystals += amount; 
        
        
        if (typeof UI !== 'undefined') {
            UI.updateCrystals(this.sessionCrystals);
        }
        
        
        this.createFloatingText(
            crystal.x,
            crystal.y,
            '+' + amount + ' 💎',
            '#9b59b6'
        );
        
        
        const index = this.fallingCrystals.indexOf(crystal);
        if (index > -1) {
            this.fallingCrystals.splice(index, 1);
        }
        
        
        this.removeCrystalElement(crystal);
        
        
        if (typeof AudioManager !== 'undefined') {
            AudioManager.playSound('crystal');
        }
    },
    
    drawCrystals(ctx) {
        
    },
    
    
    
    resetSystems() {
        
        if (this.activeBonuses && this.activeBonuses.length > 0) {
            this.activeBonuses.forEach(bonus => {
                if (bonus.interval) {
                    clearInterval(bonus.interval);
                }
            });
            this.activeBonuses = [];
        }

        
        this.mushrooms.forEach(mushroom => {
            this.removeMushroomElement(mushroom);
        });
        this.mushrooms = [];
        this.mushroomSpawnTimer = 0;
        
        
        if (this.fallingCrystals && Array.isArray(this.fallingCrystals)) {
            this.fallingCrystals.forEach(crystal => {
                this.removeCrystalElement(crystal);
            });
        }
        this.fallingCrystals = [];
        this.crystalRainTimer = 0;
        
        
        if (this.xpSystem) {
            this.xpSystem.reset();
        }
        
        
        if (this.upgradeEffects) {
            this.upgradeEffects.reset();
        }
        
        
        if (this.birdSystem) {
            this.birdSystem.reset();
        }
        
        
        if (this.tower) {
            this.tower.chainLightning = null;
            this.tower.doubleShotChance = 0;
            this.tower.poison = null;
            this.tower.frostAura = null;
            this.tower.piercingInterval = 0;
            this.tower.splittingArrow = null;
            this.tower.critExplosion = null;
            this.tower.fireAura = null;
            this.tower.lastStand = null;
            this.tower.killStreak = null;
            this.tower.goldFever = null;
            this.tower.vampiricRage = null;
            this.tower.crowdControl = null;
            this.tower.freezingArrows = null;
            this.tower.statBoost = null;
            
        }
        
        
        this.mushroomGold = 10; 
        this.mushroomSpawnRate = 1.0; 
        this.crystalRain = null;
        
        
        const xpBar = document.getElementById('xpBarContainer');
        if (xpBar) {
            xpBar.remove();
        }
        
        
        if (this.activeUpgradesPanel) {
            this.activeUpgradesPanel.hide();
        }
        
        
        this.isSoftPaused = false;

        
        this.frenzyTimer = 0;
        this.originalSpawnDelay = null;
        this._lastTraderSummonAt = 0;
        this._pendingWaveInterstitialWave = 0;
        this._waveInterstitialInFlight = false;
        
        
        this.effects = [];
        
        
        const damageBoostTimer = document.getElementById('damageBoostTimer');
        if (damageBoostTimer) damageBoostTimer.classList.add('hidden');
        const speedBoostTimer = document.getElementById('speedBoostTimer');
        if (speedBoostTimer) speedBoostTimer.classList.add('hidden');
        const frenzyTimer = document.getElementById('frenzyTimer');
        if (frenzyTimer) frenzyTimer.classList.add('hidden');
        const bastionShieldTimer = document.getElementById('bastionShieldTimer');
        if (bastionShieldTimer) bastionShieldTimer.classList.add('hidden');
        const bastionHudIcon = document.getElementById('bastionHudIcon');
        if (bastionHudIcon) {
            bastionHudIcon.classList.add('hidden');
            bastionHudIcon.classList.remove('active');
        }
    }


};


window.Game = Game;


window.addEventListener('load', async () => {
    if (window.LocalizationManager && typeof LocalizationManager.whenReady === 'function') {
        try {
            await LocalizationManager.whenReady();
        } catch (_) {
            
        }
    }

    Game.init();
});

