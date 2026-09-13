(function (root, factory) {
    const api = factory();
    if (typeof module === 'object' && module.exports) module.exports = api;
    root.EmberRippleLevels = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
    'use strict';

    const ROWS = 14;
    const COLS = 20;
    const TILE = 40;
    const PUZZLE_NAMES = [
        'Rune Stairway',
        'Elemental Causeway',
        'Solid Switchback',
        'Temple Maze',
        'Split Elements',
        'Labyrinth Run',
        'Crystal Caverns',
        'Spiral Sanctuary'
    ];
    const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

    function randomFor(seed) {
        let state = seed >>> 0;
        return function () {
            state = (Math.imul(state, 1664525) + 1013904223) >>> 0;
            return state / 4294967296;
        };
    }

    function emptyMap() {
        const map = Array.from({ length:ROWS }, () => Array(COLS).fill(0));
        for (let col = 0; col < COLS; col++) {
            map[0][col] = 1;
            map[ROWS - 1][col] = 1;
        }
        for (let row = 0; row < ROWS; row++) {
            map[row][0] = 1;
            map[row][COLS - 1] = 1;
        }
        // The lower room is a real stone floor with recessed elemental basins.
        // Pool calls replace sections of this row with lava/water, producing
        // DDD-LLL-DDD-WWW-DDD layouts instead of liquids floating in empty air.
        for (let col = 1; col < COLS - 1; col++) map[ROWS - 2][col] = 1;
        return map;
    }

    function segmentGap(a, b) {
        const aEnd = a.start + a.width - 1;
        const bEnd = b.start + b.width - 1;
        if (aEnd < b.start) return b.start - aEnd - 1;
        if (bEnd < a.start) return a.start - bEnd - 1;
        return 0;
    }

    function sideSpawn(mirror) {
        return mirror ? { fireX:620, waterX:690, y:442 } : { fireX:60, waterX:120, y:442 };
    }

    function buildGeometry(map, puzzleType, variant) {
        const mirror = variant % 2 === 1;
        const orientStart = (start, width) => mirror ? COLS - start - width : start;
        const requestedBlocks = [];
        const place = (row, start, width, solidDepth=0) => {
            const orientedStart = orientStart(start, width);
            for (let col = orientedStart; col < orientedStart + width; col++) map[row][col] = 6;
            // Platforms on the validated route stay one-way and open underneath.
            // Earlier solid fill beneath them created 40px-high tunnels: technically
            // tall enough for a 38px hero, but too cramped to jump or turn around.
            return { row, start:orientedStart, width };
        };
        const block = (row, start, width, height) => {
            const orientedStart = orientStart(start, width);
            requestedBlocks.push({ row, start:orientedStart, width, height });
        };
        const pool = (start, width, type) => {
            const orientedStart = orientStart(start, width);
            for (let col = orientedStart; col < orientedStart + width; col++) map[12][col] = type;
        };

        let paths;
        let exitOptions;
        let spawn = sideSpawn(mirror);
        let fireSegments = null;
        let waterSegments = null;
        let mandatoryPoolCrossings = 0;

        if (puzzleType === 0) {
            const a = place(11, 1, 6);
            const b = place(9, 4, 6, 1);
            const c = place(7, 8, 6, 1);
            const d = place(5, 11, 6, 1);
            const e = place(3, 6, 8, 1);
            paths = [[a, b, c, d, e]];
            exitOptions = [e];
        } else if (puzzleType === 1) {
            const a = place(11, 1, 4);
            const b = place(11, 6, 4);
            const c = place(11, 10, 4);
            const d = place(11, 15, 4);
            const e = place(8, 11, 6, 1);
            const f = place(8, 5, 7);
            const g = place(5, 2, 7, 1);
            paths = [[a, b, c, d, e, f, g]];
            exitOptions = [d, f, g];
        } else if (puzzleType === 2) {
            const step = place(11, 1 + variant % 3, 4);
            const lower = place(9, 4, 15, 2);
            const middle = place(6, 1, 15, 2);
            const upper = place(3, 4, 15, 2);
            paths = [[step, lower, middle, upper]];
            exitOptions = [upper];
        } else if (puzzleType === 3) {
            const a = place(11, 1, 5);
            const b = place(9, 4, 6, 2);
            const c = place(7, 8, 5, 2);
            const d = place(9, 12, 7);
            const e = place(6, 13, 6);
            const f = place(4, 8, 7, 1);
            const g = place(7, 4, 6);
            block(5, 2, 2, 5);
            block(8, 10, 2, 3);
            paths = [[a, b, c, d, e, f, g]];
            exitOptions = [g, f];
        } else if (puzzleType === 4) {
            // Split routes still begin from a roomy side chamber; spawning in
            // the centre would place a hero directly inside a recessed basin.
            spawn = sideSpawn(mirror);
            const leftLow = place(11, 1, 4);
            const leftMid = place(9, 4, 4, 1);
            const leftHigh = place(7, 2, 6);
            const rightLow = place(11, 15, 4);
            const rightMid = place(9, 12, 4, 1);
            const rightHigh = place(7, 12, 6);
            const hub = place(7, 7, 6);
            const exit = place(5, 7, 6, 1);
            const leftPath = [leftLow, leftMid, leftHigh, exit];
            const rightPath = [rightLow, rightMid, rightHigh, exit];
            paths = [leftPath, rightPath];
            exitOptions = [exit];
            const baseFire = [rightLow, rightMid, rightHigh, exit];
            const baseWater = [leftLow, leftMid, leftHigh, exit];
            fireSegments = baseFire;
            waterSegments = baseWater;
        } else if (puzzleType === 5) {
            const a = place(11, 1, 5);
            const b = place(10, 5, 4);
            const c = place(8, 7, 4, 1);
            const d = place(6, 10, 5, 2);
            const e = place(8, 14, 5);
            const f = place(11, 14, 5);
            const g = place(9, 9, 6);
            block(7, 5, 2, 4);
            block(8, 12, 2, 3);
            paths = [[a, b, c, d, e, f, g]];
            exitOptions = [f, d];
        } else if (puzzleType === 6) {
            const a = place(11, 1, 6);
            const b = place(9, 5, 7);
            const c = place(9, 12, 7);
            const step = place(8, 15, 4);
            const shelf = place(6, 3, 13, 2);
            const top = place(3, 1, 7, 2);
            const exit = place(10, 1, 4);
            paths = [[a, b, c, step, shelf, top, exit]];
            exitOptions = [exit, top];
        } else {
            const a = place(11, 1, 5);
            const b = place(9, 1, 6);
            const c = place(6, 2, 5);
            const d = place(3, 2, 6);
            const e = place(3, 7, 6);
            const f = place(3, 12, 6);
            const g = place(6, 14, 5);
            const h = place(9, 13, 6);
            const exit = place(10, 7, 6);
            block(5, 8, 5, 4);
            paths = [[a, b, c, d, e, f, g, h, exit]];
            exitOptions = [exit, e, h];
        }

        // Every room now uses the elemental basins as a required traversal,
        // inspired by the readable stone-contained hazards of classic co-op
        // temple rooms. Both ends remain solid for safe spawning and landing.
        for (let col = 1; col < COLS - 1; col++) map[12][col] = 1;
        const basinWidth = variant >= 2 ? 4 : 3;
        const secondBasinStart = basinWidth === 4 ? 11 : 12;
        const firstType = puzzleType === 4 ? 3 : ((puzzleType + variant) % 2 === 0 ? 2 : 3);
        const secondType = firstType === 2 ? 3 : 2;
        pool(5, basinWidth, firstType);
        pool(secondBasinStart, basinWidth, secondType);
        mandatoryPoolCrossings = basinWidth * 2;

        // Reuse a broad platform from the actual route as the far checkpoint.
        // A separate low shelf could be hidden beneath a higher platform and
        // become impossible to land on, so the checkpoint must belong to the
        // main, already-readable puzzle path.
        const checkpointCandidates = paths.flat().filter(segment => segment.width >= 5);
        checkpointCandidates.sort((a, b) => {
            const centreA = a.start + a.width / 2;
            const centreB = b.start + b.width / 2;
            return mirror ? centreA - centreB : centreB - centreA;
        });
        const basinCheckpoint = checkpointCandidates[0];
        if (!basinCheckpoint) throw new Error('Missing route checkpoint platform');

        // Insert a broad intermediate step whenever a route originally climbed
        // three tiles (120px) at once. The heroes can jump that high, but the
        // extra 80px step gives players comfortable timing and landing room.
        paths = paths.map(path => {
            const expanded = [];
            let previous = { row:13, start:1, width:18 };
            for (const segment of path) {
                if (previous.row - segment.row === 3) {
                    const assistRow = previous.row - 2;
                    const candidates = [];
                    for (let start = 1; start <= COLS - 5; start++) {
                        const candidate = { row:assistRow, start, width:4 };
                        const gapFromPrevious = segmentGap(previous, candidate);
                        const gapToTarget = segmentGap(candidate, segment);
                        const outsideTarget = Array.from({ length:4 }, (_, offset) => start + offset)
                            .filter(col => col < segment.start || col >= segment.start + segment.width).length;
                        const clear = Array.from({ length:4 }, (_, offset) => map[assistRow][start + offset])
                            .every(tile => tile === 0 || tile === 6);
                        if (gapFromPrevious <= 1 && gapToTarget <= 1 && outsideTarget >= 2 && clear) {
                            candidates.push({
                                ...candidate,
                                order:(4 - outsideTarget) * 50 + gapFromPrevious * 9 + gapToTarget * 7 +
                                    (start * 13 + variant * 5 + puzzleType * 3) % 5
                            });
                        }
                    }
                    candidates.sort((a, b) => a.order - b.order || a.start - b.start);
                    const assist = candidates[0];
                    if (assist) {
                        for (let col = assist.start; col < assist.start + assist.width; col++) {
                            if (map[assist.row][col] === 0) map[assist.row][col] = 6;
                        }
                        expanded.push(assist);
                        previous = assist;
                    }
                }
                expanded.push(segment);
                previous = segment;
            }
            return expanded;
        });

        const uniqueRoute = [];
        const seen = new Set();
        for (const segment of paths.flat()) {
            const key = `${segment.row}:${segment.start}:${segment.width}`;
            if (!seen.has(key)) {
                seen.add(key);
                uniqueRoute.push(segment);
            }
        }

        // Each room receives a deterministic solid rune arrangement in unused
        // space. It changes the silhouette without blocking the validated route.
        const reservedDoorCells = new Set(exitOptions.flatMap(segment => [
            `${segment.row - 1}:${segment.start}`,
            `${segment.row - 1}:${segment.start + segment.width - 1}`
        ]));

        // Solid boxes remain part of the maze artwork, but are only committed
        // when a roomy two-tile buffer from every playable route is available.
        // This keeps the full-solid look without forming head-height tunnels.
        const isRouteClearanceCell = (row, col) => uniqueRoute.some(segment =>
            row >= segment.row - 3 && row <= segment.row + 1 &&
            col >= segment.start - 2 && col <= segment.start + segment.width + 1
        );
        const canPlaceSolid = (row, col) =>
            row >= 2 && row <= 10 && col >= 2 && col <= 17 &&
            map[row][col] === 0 && !reservedDoorCells.has(`${row}:${col}`) &&
            !isRouteClearanceCell(row, col);

        for (const request of requestedBlocks) {
            const cells = [];
            for (let row = request.row; row < Math.min(11, request.row + request.height); row++) {
                for (let col = request.start; col < request.start + request.width; col++) cells.push({ row, col });
            }
            if (cells.every(cell => canPlaceSolid(cell.row, cell.col))) {
                for (const cell of cells) map[cell.row][cell.col] = 1;
            }
        }

        const boxCandidates = [];
        for (let row = 3; row <= 9; row++) for (let col = 3; col <= 15; col++) {
            const cells = [
                { row, col }, { row, col:col + 1 },
                { row:row + 1, col }, { row:row + 1, col:col + 1 }
            ];
            if (cells.every(cell => canPlaceSolid(cell.row, cell.col))) {
                boxCandidates.push({
                    row,
                    col,
                    cells,
                    order:Math.abs(col - 9) * 9 + Math.abs(row - 6) * 7 +
                        (row * 31 + col * 17 + variant * 23 + puzzleType * 13) % 19
                });
            }
        }
        boxCandidates.sort((a, b) => a.order - b.order || a.row - b.row || a.col - b.col);
        const boxTarget = 1 + variant % 2;
        let boxesPlaced = 0;
        for (const candidate of boxCandidates) {
            if (boxesPlaced >= boxTarget) break;
            if (!candidate.cells.every(cell => canPlaceSolid(cell.row, cell.col))) continue;
            for (const cell of candidate.cells) map[cell.row][cell.col] = 1;
            boxesPlaced++;
        }

        const runeCandidates = [];
        for (let row = 2; row <= 10; row++) for (let col = 2; col <= 17; col++) {
            if (map[row][col] !== 0 || reservedDoorCells.has(`${row}:${col}`)) continue;
            if (!isRouteClearanceCell(row, col)) runeCandidates.push({
                row,
                col,
                order:(row * 37 + col * 41 + variant * 17 + puzzleType * 23) % 211
            });
        }
        runeCandidates.sort((a, b) => a.order - b.order || a.row - b.row || a.col - b.col);
        const runeCount = 2 + variant % 3;
        for (let index = 0; index < Math.min(runeCount, runeCandidates.length); index++) {
            const rune = runeCandidates[index];
            map[rune.row][rune.col] = 1;
        }

        // Keep the centre of each basin accessible even when a higher one-way
        // platform crosses it. The matching hero drops into this shaft while
        // the vulnerable hero jumps through the very same column.
        const doorSupportCols = new Set(exitOptions.flatMap(segment =>
            [segment.start, segment.start + segment.width - 1]
        ));
        const chooseBasinAccess = tile => {
            const columns = [];
            for (let col = 1; col < COLS - 1; col++) if (map[12][col] === tile) columns.push(col);
            const centre = columns.reduce((sum, col) => sum + col, 0) / columns.length;
            columns.sort((a, b) => Math.abs(a - centre) - Math.abs(b - centre));
            const col = columns.find(candidate => !doorSupportCols.has(candidate));
            if (!Number.isInteger(col)) throw new Error(`Unable to place elemental basin access ${puzzleType}/${variant}/${tile}`);
            for (let row = 1; row <= 11; row++) {
                if (map[row][col] === 1 || map[row][col] === 6) map[row][col] = 0;
            }
            return col;
        };
        const basinAccess = {
            fire:chooseBasinAccess(2),
            water:chooseBasinAccess(3)
        };

        return {
            paths,
            route:uniqueRoute,
            finalPlatform:paths[0][paths[0].length - 1],
            exitPlatform:exitOptions[variant % exitOptions.length],
            spawn,
            fireSegments:fireSegments ? [basinCheckpoint, ...fireSegments] : null,
            waterSegments:waterSegments ? [basinCheckpoint, ...waterSegments] : null,
            basinCheckpoint,
            basinAccess,
            mandatoryPoolCrossings,
            mirror
        };
    }

    function cellsForSegments(segments, map, doors) {
        const cells = [];
        const seen = new Set();
        for (const segment of segments) {
            for (let offset = 1; offset <= segment.width - 2; offset++) {
                const col = segment.start + offset;
                const gemRow = segment.row - 1;
                const key = `${gemRow}:${col}`;
                if (seen.has(key)) continue;
                if (map[segment.row]?.[col] !== 6) continue;
                if ([doors.fire, doors.water].some(door => door.row === gemRow && door.col === col)) continue;
                let safe = true;
                for (let row = gemRow - 1; row <= gemRow + 1; row++) {
                    for (let nearbyCol = col - 1; nearbyCol <= col + 1; nearbyCol++) {
                        if ([1, 2, 3, 7].includes(map[row]?.[nearbyCol])) safe = false;
                    }
                }
                if (safe) {
                    seen.add(key);
                    cells.push({ segment, col });
                }
            }
        }
        return cells;
    }

    function spreadSlots(slots, count, reverse=false) {
        if (slots.length < count) throw new Error(`Not enough safe gem slots (${slots.length}/${count})`);
        const source = reverse ? slots.slice().reverse() : slots;
        const selected = [];
        const used = new Set();
        for (let index = 0; index < count; index++) {
            let slotIndex = count === 1 ? 0 : Math.round(index * (source.length - 1) / (count - 1));
            while (used.has(slotIndex) && slotIndex + 1 < source.length) slotIndex++;
            while (used.has(slotIndex) && slotIndex > 0) slotIndex--;
            used.add(slotIndex);
            selected.push(source[slotIndex]);
        }
        return selected;
    }

    function buildLevel(number) {
        const rand = randomFor(0x9e3779b9 ^ Math.imul(number, 7919));
        const map = emptyMap();
        const puzzleType = (number - 1) % PUZZLE_NAMES.length;
        const variant = Math.floor((number - 1) / PUZZLE_NAMES.length);
        const difficultyBand = Math.floor((number - 1) / 25);
        const geometry = buildGeometry(map, puzzleType, variant);
        const { route, paths, finalPlatform, exitPlatform, spawn } = geometry;

        const doors = {
            fire:{ col:exitPlatform.start, row:exitPlatform.row - 1 },
            water:{ col:exitPlatform.start + exitPlatform.width - 1, row:exitPlatform.row - 1 },
            platformRow:exitPlatform.row
        };
        const isDoorCell = (row, col) => [doors.fire, doors.water].some(door => door.row === row && door.col === col);

        const spawnStartCol = Math.max(1, Math.floor((spawn.fireX + 4) / TILE) - 1);
        const spawnEndCol = Math.min(COLS - 2, Math.floor((spawn.waterX + 22) / TILE) + 1);
        const spawnCols = new Set(Array.from({ length:spawnEndCol - spawnStartCol + 1 }, (_, index) => spawnStartCol + index));

        // Rooms begin with six gems per hero and gradually rise to ten. Three
        // are structural: one inside the safe pool, one above the dangerous
        // pool, and one on the far checkpoint beyond both basins.
        const gemCount = 6 + Math.floor((number - 1) / 20);
        const basinSlots = cellsForSegments([geometry.basinCheckpoint], map, doors);
        if (basinSlots.length < 2) throw new Error(`Level ${number}: no room for basin checkpoint gems`);
        const fireCheckpoint = basinSlots[0];
        const waterCheckpoint = basinSlots[basinSlots.length - 1];
        const mandatoryKeys = new Set([fireCheckpoint, waterCheckpoint].map(slot =>
            `${slot.segment.row}:${slot.col}`
        ));
        const sharedSlots = cellsForSegments(route, map, doors).filter(slot =>
            !mandatoryKeys.has(`${slot.segment.row}:${slot.col}`)
        );
        const fireSlots = sharedSlots.slice();
        const waterSlots = sharedSlots.slice();
        const diamonds = [];
        const addGem = (slot, type) => diamonds.push({
            x:slot.col * TILE + (type === 'fire' ? 0 : 20),
            y:slot.segment.row * TILE - 28,
            type,
            collected:false,
            supportRow:slot.segment.row
        });
        const addPoolPair = (safeType, jumpingType, hazardTile) => {
            const col = geometry.basinAccess[safeType];
            if (!Number.isInteger(col) || map[12][col] !== hazardTile) {
                throw new Error(`Level ${number}: missing paired gem basin`);
            }
            diamonds.push({
                x:col * TILE + 10,
                y:12 * TILE + 2,
                type:safeType,
                collected:false,
                supportRow:13,
                poolGem:true,
                hazardTile
            });
            diamonds.push({
                x:col * TILE + 10,
                y:326,
                type:jumpingType,
                collected:false,
                supportRow:null,
                jumpGem:true,
                hazardTile
            });
        };
        // Two heroes visit the same basin in different ways: the matching gem
        // is inside, while the vulnerable hero's gem floats in the jump arc.
        addPoolPair('fire', 'water', 2);
        addPoolPair('water', 'fire', 3);
        addGem(fireCheckpoint, 'fire');
        addGem(waterCheckpoint, 'water');
        for (const slot of spreadSlots(fireSlots, gemCount - 3)) addGem(slot, 'fire');
        for (const slot of spreadSlots(waterSlots, gemCount - 3, true)) addGem(slot, 'water');

        const gemCells = diamonds.map(diamond => ({
            row:Math.floor((diamond.y + 10) / TILE),
            col:Math.floor((diamond.x + 10) / TILE)
        }));
        const isNearGem = (row, col, padding=1) => gemCells.some(cell =>
            Math.abs(cell.row - row) <= padding && Math.abs(cell.col - col) <= padding
        );

        const pathSegments = route;
        const safeCellsOnSegment = segment => {
            let safe = 0;
            for (let col = segment.start; col < segment.start + segment.width; col++) {
                if (![1, 2, 3, 7].includes(map[segment.row - 1][col])) safe++;
            }
            return safe;
        };

        const surfaceCandidates = [];
        const surfaceSeen = new Set();
        for (const segment of pathSegments) {
            const carriesExitDoors = segment.row === doors.platformRow &&
                segment.start <= doors.fire.col &&
                segment.start + segment.width - 1 >= doors.water.col;
            if (carriesExitDoors) continue;
            for (let col = segment.start + 2; col < segment.start + segment.width - 2; col++) {
                const key = `${segment.row}:${col}`;
                if (surfaceSeen.has(key)) continue;
                surfaceSeen.add(key);
                surfaceCandidates.push({
                    segment,
                    col,
                    order:(segment.row * 29 + col * 17 + number * 23) % 113
                });
            }
        }
        surfaceCandidates.sort((a, b) => a.order - b.order || a.segment.row - b.segment.row || a.col - b.col);

        const isNearDanger = (row, col, padding=2) => {
            for (let nearbyRow = row - padding; nearbyRow <= row + padding; nearbyRow++) {
                for (let nearbyCol = col - padding; nearbyCol <= col + padding; nearbyCol++) {
                    if ([2, 3, 7].includes(map[nearbyRow]?.[nearbyCol])) return true;
                }
            }
            return false;
        };
        const trapSegments = new Set();
        const bypassFor = candidate => {
            const bypassRow = candidate.segment.row - 2;
            if (bypassRow < 3) return null;
            const cells = [candidate.col - 1, candidate.col, candidate.col + 1]
                .map(col => ({ row:bypassRow, col }));
            if (cells.some(cell => cell.col < 2 || cell.col > 17 ||
                map[cell.row][cell.col] !== 0 || map[cell.row - 1]?.[cell.col] !== 0 ||
                map[cell.row - 2]?.[cell.col] === 1 || isDoorCell(cell.row - 1, cell.col) ||
                isNearGem(cell.row - 1, cell.col, 1))) return null;
            return cells;
        };
        const buildBypass = cells => {
            for (const cell of cells) map[cell.row][cell.col] = 6;
        };

        const platformTrapTarget = 2 + Math.floor((number - 1) / 20);
        let platformTraps = 0;
        for (const candidate of surfaceCandidates) {
            if (platformTraps >= platformTrapTarget) break;
            const trapRow = candidate.segment.row - 1;
            const segmentKey = `${candidate.segment.row}:${candidate.segment.start}:${candidate.segment.width}`;
            if (trapSegments.has(segmentKey) || map[trapRow][candidate.col] !== 0 ||
                isDoorCell(trapRow, candidate.col) || isNearGem(trapRow, candidate.col, 2) ||
                isNearDanger(trapRow, candidate.col, 2)) continue;
            const bypass = bypassFor(candidate);
            if (!bypass) continue;
            const containingSegments = route.filter(segment =>
                segment.row === candidate.segment.row && candidate.col >= segment.start && candidate.col < segment.start + segment.width
            );
            if (containingSegments.some(segment => safeCellsOnSegment(segment) <= 4)) continue;
            map[trapRow][candidate.col] = (platformTraps + number + puzzleType) % 2 ? 2 : 3;
            buildBypass(bypass);
            trapSegments.add(segmentKey);
            platformTraps++;
        }

        const platformSpikeTarget = Math.min(5, Math.floor((number - 1) / 18));
        let platformSpikes = 0;
        for (let index = surfaceCandidates.length - 1; index >= 0 && platformSpikes < platformSpikeTarget; index--) {
            const candidate = surfaceCandidates[index];
            const spikeRow = candidate.segment.row - 1;
            const segmentKey = `${candidate.segment.row}:${candidate.segment.start}:${candidate.segment.width}`;
            if (trapSegments.has(segmentKey) || map[spikeRow][candidate.col] !== 0 ||
                isDoorCell(spikeRow, candidate.col) || isNearGem(spikeRow, candidate.col, 2) ||
                isNearDanger(spikeRow, candidate.col, 2)) continue;
            const bypass = bypassFor(candidate);
            if (!bypass) continue;
            const containingSegments = route.filter(segment =>
                segment.row === candidate.segment.row && candidate.col >= segment.start && candidate.col < segment.start + segment.width
            );
            if (containingSegments.some(segment => safeCellsOnSegment(segment) <= 4)) continue;
            map[spikeRow][candidate.col] = 7;
            buildBypass(bypass);
            trapSegments.add(segmentKey);
            platformSpikes++;
        }

        const floorSpikeTarget = Math.min(3, Math.floor((number - 1) / 22));
        let floorSpikes = 0;
        const floorCandidates = [18, 2, 16, 4, 14, 6, 12, 8, 10, 17, 3, 15, 5, 13, 7, 11, 9];
        for (const col of floorCandidates) {
            if (floorSpikes >= floorSpikeTarget) break;
            const nearSpawn = [...spawnCols].some(spawnCol => Math.abs(spawnCol - col) <= 2);
            const nearFloorDanger = [col - 2, col - 1, col, col + 1, col + 2]
                .some(nearbyCol => [2, 3].includes(map[12][nearbyCol]) || map[11][nearbyCol] === 7);
            if (map[12][col] === 1 && map[11][col] === 0 && !nearSpawn && !nearFloorDanger) {
                map[11][col] = 7;
                floorSpikes++;
            }
        }

        const hazards = [];
        // Keep the tutorial readable, then populate rooms earlier so the lower
        // and middle bands do not feel empty. Crowded rooms retain the existing
        // automatic speed reduction.
        const hazardCount = Math.min(8, Math.floor((number + 5) / 10));
        const crowdSpeedMultiplier = Math.max(0.65, 1 - Math.max(0, hazardCount - 3) * 0.07);
        const hazardRows = [9, 7, 5, 3, 8, 6, 4, 2];
        for (let index = 0; index < hazardCount; index++) {
            const vertical = index % 3 === 2;
            const minX = 190 + (index % 2) * 30;
            const maxX = 730 - (index % 3) * 30;
            const verticalChoices = [200, 280, 360, 440, 520, 600, 680]
                .filter(x => [spawn.fireX + 13, spawn.waterX + 13].every(heroX => Math.abs(heroX - x) >= 75));
            const verticalX = verticalChoices[(index + number) % verticalChoices.length];
            hazards.push({
                axis:vertical ? 'y' : 'x',
                x:vertical ? verticalX : minX + rand() * (maxX - minX),
                y:vertical ? 150 + rand() * 290 : hazardRows[(index + puzzleType) % hazardRows.length] * TILE + 20,
                minX,
                maxX,
                minY:130,
                maxY:420,
                speed:(0.85 + number * 0.01 + index * 0.06) * crowdSpeedMultiplier * 0.92,
                direction:rand() < 0.5 ? -1 : 1,
                radius:10 + Math.min(3, Math.floor(number / 35)),
                phase:rand() * Math.PI * 2
            });
        }

        const solidTiles = map.slice(1, -1).reduce((total, row) =>
            total + row.slice(1, -1).filter(tile => tile === 1).length, 0
        );
        const level = {
            number,
            map,
            route,
            paths,
            finalPlatform,
            doors,
            diamonds,
            hazards,
            gemCount,
            spawn,
            basinCheckpoint:geometry.basinCheckpoint,
            basinAccess:geometry.basinAccess,
            puzzleName:PUZZLE_NAMES[puzzleType],
            platformStyle:(puzzleType + difficultyBand) % 4,
            theme:(puzzleType + difficultyBand + variant) % 5,
            difficulty:{
                puzzleType,
                puzzleName:PUZZLE_NAMES[puzzleType],
                variant,
                spikes:floorSpikes + platformSpikes,
                elementalTraps:map.flat().filter(tile => tile === 2 || tile === 3).length,
                platformTraps,
                solidBoxes:solidTiles,
                fullSolidTiles:solidTiles,
                exitPlatformRow:exitPlatform.row,
                movingHazards:hazardCount,
                totalItems:gemCount * 2,
                mandatoryPoolCrossings:geometry.mandatoryPoolCrossings,
                mirrored:geometry.mirror
            }
        };

        validateLevel(level);
        return level;
    }

    function validateLevel(level) {
        if (!Number.isInteger(level.number) || level.number < 1 || level.number > 100) throw new Error('Invalid level number');
        if (level.map.length !== ROWS || level.map.some(row => row.length !== COLS)) {
            throw new Error(`Level ${level.number}: invalid map dimensions`);
        }

        const ground = { row:12, start:1, width:18 };
        if (!Array.isArray(level.paths) || !level.paths.length) throw new Error(`Level ${level.number}: missing puzzle paths`);
        for (const path of level.paths) {
            let previous = ground;
            for (const segment of path) {
                for (let col = segment.start; col < segment.start + segment.width; col++) {
                    const basinOpening = level.map[segment.row][col] === 0 &&
                        [level.basinAccess.fire, level.basinAccess.water].includes(col);
                    if (level.map[segment.row][col] !== 6 && !basinOpening) {
                        throw new Error(`Level ${level.number}: missing route tile`);
                    }
                }
                const rise = (previous.row - segment.row) * TILE;
                const gap = segmentGap(previous, segment);
                if (rise > 120 || gap > 3) throw new Error(`Level ${level.number}: unreachable ${level.puzzleName} step`);
                if (rise >= 120 && gap > 1) throw new Error(`Level ${level.number}: high jump lacks horizontal margin`);
                previous = segment;
            }
        }

        const typeCounts = { fire:0, water:0 };
        for (const diamond of level.diamonds) {
            typeCounts[diamond.type]++;
            const col = Math.floor((diamond.x + 10) / TILE);
            const gemRow = Math.floor((diamond.y + 10) / TILE);
            if (diamond.poolGem) {
                const expectedTile = diamond.type === 'fire' ? 2 : 3;
                if (diamond.hazardTile !== expectedTile || diamond.supportRow !== 13 ||
                    level.map[12][col] !== expectedTile || level.map[13][col] !== 1) {
                    throw new Error(`Level ${level.number}: invalid safe-element pool gem`);
                }
                continue;
            }
            if (diamond.jumpGem) {
                const expectedTile = diamond.type === 'fire' ? 3 : 2;
                if (diamond.hazardTile !== expectedTile || level.map[12][col] !== expectedTile ||
                    diamond.y < 300 || diamond.y > 350) {
                    throw new Error(`Level ${level.number}: invalid opposite-element jump gem`);
                }
                continue;
            }
            if (level.map[diamond.supportRow][col] !== 6) throw new Error(`Level ${level.number}: unsupported gem`);
            for (let row = gemRow - 1; row <= gemRow + 1; row++) {
                for (let nearbyCol = col - 1; nearbyCol <= col + 1; nearbyCol++) {
                    if ([1, 2, 3, 7].includes(level.map[row]?.[nearbyCol])) {
                        throw new Error(`Level ${level.number}: gem too close to a trap`);
                    }
                }
            }
        }
        if (typeCounts.fire !== level.gemCount || typeCounts.water !== level.gemCount) {
            throw new Error(`Level ${level.number}: wrong gem count`);
        }
        for (const hazardTile of [2, 3]) {
            const inside = level.diamonds.find(diamond => diamond.poolGem && diamond.hazardTile === hazardTile);
            const above = level.diamonds.find(diamond => diamond.jumpGem && diamond.hazardTile === hazardTile);
            if (!inside || !above || inside.x !== above.x || inside.type === above.type) {
                throw new Error(`Level ${level.number}: basin gem pair is not aligned`);
            }
        }
        const checkpointGems = level.diamonds.filter(diamond =>
            !diamond.poolGem && !diamond.jumpGem && diamond.supportRow === level.basinCheckpoint.row &&
            Math.floor((diamond.x + 10) / TILE) >= level.basinCheckpoint.start &&
            Math.floor((diamond.x + 10) / TILE) < level.basinCheckpoint.start + level.basinCheckpoint.width
        );
        if (!checkpointGems.some(diamond => diamond.type === 'fire') ||
            !checkpointGems.some(diamond => diamond.type === 'water')) {
            throw new Error(`Level ${level.number}: missing mandatory far-side checkpoint gems`);
        }

        if (!level.spawn || level.spawn.fireX >= level.spawn.waterX) throw new Error(`Level ${level.number}: invalid hero order`);
        for (const x of [level.spawn.fireX, level.spawn.waterX]) {
            const left = Math.floor((x + 4) / TILE);
            const right = Math.floor((x + 22) / TILE);
            if (level.map[12][left] !== 1 || level.map[12][right] !== 1 ||
                [7, 2, 3].includes(level.map[11][left]) || [7, 2, 3].includes(level.map[11][right])) {
                throw new Error(`Level ${level.number}: unsafe spawn zone`);
            }
        }

        for (const hazard of level.hazards) {
            for (const x of [level.spawn.fireX, level.spawn.waterX]) {
                const nearestX = clamp(hazard.x, x, x + 26);
                const nearestY = clamp(hazard.y, level.spawn.y, level.spawn.y + 38);
                const dx = hazard.x - nearestX;
                const dy = hazard.y - nearestY;
                const extendedRadius = hazard.radius + 14;
                if (dx * dx + dy * dy < extendedRadius * extendedRadius) {
                    throw new Error(`Level ${level.number}: hazard overlaps spawn`);
                }
            }
        }

        for (const segment of level.route) {
            let safeCells = 0;
            for (let col = segment.start; col < segment.start + segment.width; col++) {
                if (![2, 3, 7].includes(level.map[segment.row - 1][col])) safeCells++;
                if (level.map[segment.row - 2]?.[col] === 1) {
                    throw new Error(`Level ${level.number}: cramped ceiling above route ${segment.row}/${col}`);
                }
            }
            if (safeCells < 4) throw new Error(`Level ${level.number}: platform ${segment.row}/${segment.start}/${segment.width} has no roomy landing lane`);

            for (const edgeCol of [segment.start, segment.start + 1, segment.start + segment.width - 2, segment.start + segment.width - 1]) {
                if ([2, 3, 7].includes(level.map[segment.row - 1]?.[edgeCol])) {
                    throw new Error(`Level ${level.number}: trap blocks a route takeoff or landing edge`);
                }
            }
        }

        if (!level.doors?.fire || !level.doors?.water || level.doors.fire.col >= level.doors.water.col) {
            throw new Error(`Level ${level.number}: invalid exit doors`);
        }
        for (const door of [level.doors.fire, level.doors.water]) {
            if (door.row < 1 || door.row > 10 || level.map[door.row][door.col] !== 0 || level.map[door.row + 1][door.col] !== 6) {
                throw new Error(`Level ${level.number}: unsupported exit door`);
            }
        }

        const interiorSolidTiles = level.map.slice(1, -1).reduce((total, row) =>
            total + row.slice(1, -1).filter(tile => tile === 1).length, 0
        );
        if (interiorSolidTiles !== level.difficulty.solidBoxes) {
            throw new Error(`Level ${level.number}: invalid solid maze geometry`);
        }
        if (level.difficulty.mandatoryPoolCrossings > 0) {
            const fireTiles = level.map[12].filter(tile => tile === 2).length;
            const waterTiles = level.map[12].filter(tile => tile === 3).length;
            if (!fireTiles || !waterTiles) throw new Error(`Level ${level.number}: missing elemental crossing`);
        }

        for (let col = 1; col < COLS - 1; col++) {
            if (![1, 2, 3].includes(level.map[12][col])) {
                throw new Error(`Level ${level.number}: floor basin row contains an unsupported gap at ${col}`);
            }
            if (level.map[13][col] !== 1) throw new Error(`Level ${level.number}: elemental basin has no solid bottom`);
        }
        return true;
    }

    function createAllLevels() {
        return Array.from({ length:100 }, (_, index) => buildLevel(index + 1));
    }

    return {
        ROWS,
        COLS,
        TILE,
        PUZZLE_NAMES,
        buildLevel,
        validateLevel,
        createAllLevels
    };
});
