/**
 * INKWAY — Level Manager
 * ======================
 * JSON level loader, manifest reader, level state.
 */

window.INKWAY = window.INKWAY || {};

INKWAY.Levels = (function () {
    'use strict';

    let _manifest = null;
    let _currentLevel = null;
    let _levelCache = {};

    // World metadata
    const WORLD_META = {
        1: { name: 'The Notebook', theme: 'notebook' }
    };

    async function init() {
        // Scan the levels folder for sequential n.json files (1.json, 2.json, ...)
        const scannedLevels = [];
        let index = 1;
        
        while (index <= 200) {
            try {
                // Fetch the actual JSON file using GET
                const resp = await fetch(`levels/${index}.json?t=${Date.now()}`);
                if (resp.ok) {
                    // Check if it's actually an HTML fallback page served by the dev server
                    const contentType = resp.headers.get('content-type');
                    if (contentType && contentType.includes('text/html')) {
                        break;
                    }
                    // Try to parse the content to verify it's a valid JSON level file
                    const data = await resp.json();
                    if (data && (data.id !== undefined || data.name !== undefined)) {
                        const idStr = String(index);
                        _levelCache[idStr] = data;
                        scannedLevels.push(idStr);
                        index++;
                        continue;
                    }
                }
                break; // Stop scanning at first missing or invalid level
            } catch (e) {
                break;
            }
        }

        _manifest = {
            worlds: [
                {
                    id: 1,
                    name: "The Notebook",
                    theme: "notebook",
                    unlockStars: 0,
                    levels: scannedLevels
                }
            ]
        };
        console.log(`[Levels] Detected ${scannedLevels.length} levels:`, scannedLevels);
    }

    function _generateDefaultManifest() {
        return { worlds: [{ id: 1, name: 'The Notebook', theme: 'notebook', unlockStars: 0, levels: [] }] };
    }

    /**
     * Load a specific level by its ID (e.g., "3").
     * Checks cache first, then fetches from levels/ folder.
     */
    async function loadLevel(levelId) {
        const idStr = String(levelId);
        if (_levelCache[idStr]) {
            _currentLevel = _levelCache[idStr];
            return _currentLevel;
        }

        try {
            const resp = await fetch(`levels/${idStr}.json`);
            if (resp.ok) {
                const data = await resp.json();
                _levelCache[idStr] = data;
                _currentLevel = data;
                return data;
            }
        } catch (e) {
            console.error('[Levels] Failed to load level:', idStr, e);
        }

        return null;
    }

    /**
     * Generate a basic procedural level for when no JSON exists.
     * This ensures the game is playable even without level files.
     */
    function _generateProceduralLevel(levelId) {
        let worldNum = 1;
        let levelNum = parseInt(levelId);

        if (levelId.includes('-')) {
            const [worldStr, levelStr] = levelId.split('-');
            worldNum = parseInt(worldStr) || 1;
            levelNum = parseInt(levelStr) || 1;
        } else if (isNaN(levelNum)) {
            levelNum = 1;
        }
        
        const meta = WORLD_META[worldNum] || WORLD_META[1];

        // Difficulty scales with level
        const difficulty = ((worldNum - 1) * 20 + levelNum) / 100;
        const inkBudget = Math.round(1000 * (1 - difficulty * 0.6));

        // Canvas size
        const w = 1280;
        const h = 720;

        // Ground and terrain
        const terrain = [];

        // Always add a ground platform at the start
        terrain.push({
            type: 'static_polygon',
            points: [[0, h - 80], [250, h - 80], [250, h], [0, h]],
            friction: 0.8,
            restitution: 0.1
        });

        // Goal platform
        const goalX = 200 + Math.round(800 * (0.5 + difficulty * 0.5));
        const goalY = h - 80 - Math.round(difficulty * 200);

        terrain.push({
            type: 'static_polygon',
            points: [
                [goalX - 60, goalY],
                [goalX + 60, goalY],
                [goalX + 60, goalY + 30],
                [goalX - 60, goalY + 30]
            ],
            friction: 0.8,
            restitution: 0.1
        });

        // Add some obstacles based on world
        if (worldNum >= 2 && levelNum >= 3) {
            // Wall obstacle
            const wallX = 300 + Math.round(Math.random() * 200);
            terrain.push({
                type: 'static_polygon',
                points: [
                    [wallX, h - 80 - 120],
                    [wallX + 20, h - 80 - 120],
                    [wallX + 20, h - 80],
                    [wallX, h - 80]
                ],
                friction: 0.8,
                restitution: 0.1
            });
        }

        // Objects
        const objects = [];

        // Goal
        objects.push({
            type: 'goal',
            x: goalX,
            y: goalY - 20,
            radius: 40
        });

        // Add world-specific objects
        if (worldNum >= 2 && levelNum >= 3) {
            objects.push({
                type: 'spring',
                x: 400 + Math.round(Math.random() * 200),
                y: h - 80 - 5,
                angle: 0,
                force: 0.12
            });
        }

        if (worldNum >= 2) {
            objects.push({
                type: 'ink_drop',
                x: 350 + Math.round(Math.random() * 200),
                y: h - 200,
                value: 80
            });
        }

        return {
            id: levelId,
            name: `Level ${levelId}`,
            world: worldNum,
            inkBudget: inkBudget,
            parTime: 30 + worldNum * 5,
            gravity: { x: 0, y: 1.2 },
            engineOff: worldNum >= 2 && levelNum >= 8 && levelNum <= 10,
            vehicle: 'classic',
            canvasSize: { w, h },
            camera: { startX: 0, startY: 0 },
            start: { x: 120, y: h - 80 - 30 },
            goal: { x: goalX, y: goalY - 20, radius: 40 },
            terrain: terrain,
            objects: objects,
            hints: { showArrow: levelNum <= 3, ghostPath: null }
        };
    }

    // ─── GETTERS ───

    function getManifest() { return _manifest; }
    function getCurrentLevel() { return _currentLevel; }
    function getWorldMeta(worldId) { return WORLD_META[worldId]; }
    function getAllWorldMeta() { return WORLD_META; }

    function getWorldLevels(worldId) {
        if (!_manifest) return [];
        const world = _manifest.worlds.find(w => w.id === worldId);
        return world ? world.levels : [];
    }

    function getNextLevelId(currentId) {
        if (!_manifest) return null;

        for (const world of _manifest.worlds) {
            const idx = world.levels.indexOf(currentId);
            if (idx >= 0) {
                // Next in same world
                if (idx + 1 < world.levels.length) {
                    return world.levels[idx + 1];
                }
                // First of next world
                const nextWorld = _manifest.worlds.find(w => w.id === world.id + 1);
                if (nextWorld && nextWorld.levels.length > 0) {
                    return nextWorld.levels[0];
                }
                return null; // Game complete
            }
        }
        return null;
    }

    function getTotalLevelCount() {
        if (!_manifest) return 0;
        return _manifest.worlds.reduce((sum, w) => sum + w.levels.length, 0);
    }

    return {
        init, loadLevel,
        getManifest, getCurrentLevel,
        getWorldMeta, getAllWorldMeta,
        getWorldLevels, getNextLevelId,
        getTotalLevelCount
    };
})();
