/* ============================
   Arrow Escape - Game Engine
   ============================ */

class ArrowGame {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.engine = null;
        this.scene = null;
        this.camera = null;
        this.glowLayer = null;

        // Game state
        this.currentLevel = null;
        this.arrows = [];           // { id, cells, direction, color, meshes, isEscaped, parentNode }
        this.occupancy = new Map();  // "row,col" -> arrowId
        this.gridRows = 0;
        this.gridCols = 0;
        this.inputEnabled = false;
        this.isAnimating = false;
        this.screenShakeOffset = { x: 0, y: 0 };

        // Callbacks
        this.onArrowEscaped = null;   // (arrowId) => {}
        this.onWrongTap = null;       // (arrowId) => {}
        this.onAllEscaped = null;     // () => {}

        this._init();
    }

    _init() {
        this.engine = new BABYLON.Engine(this.canvas, true, {
            preserveDrawingBuffer: true,
            stencil: true,
            antialias: true,
        });

        this.scene = new BABYLON.Scene(this.engine);
        this.scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);

        // Orthographic camera
        this.camera = new BABYLON.FreeCamera('cam', new BABYLON.Vector3(0, 0, -10), this.scene);
        this.camera.mode = BABYLON.Camera.ORTHOGRAPHIC_CAMERA;
        this._updateCameraOrtho();

        // Light
        const light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0, 1, -0.5), this.scene);
        light.intensity = 1.0;

        // Glow
        this.glowLayer = new BABYLON.GlowLayer('glow', this.scene, {
            mainTextureFixedSize: 256,
            blurKernelSize: 32,
        });
        this.glowLayer.intensity = GameConfig.arrowGlowIntensity;

        // Input
        this.scene.onPointerDown = (evt, pickResult) => {
            if (!this.inputEnabled || this.isAnimating) return;
            if (pickResult.hit && pickResult.pickedMesh) {
                const arrowId = pickResult.pickedMesh.metadata?.arrowId;
                if (arrowId !== undefined && arrowId !== null) {
                    this._handleArrowTap(arrowId);
                }
            }
        };

        // Render loop
        this.engine.runRenderLoop(() => {
            this._updatePulse();
            // Apply screen shake
            if (this.camera && this._baseCamPos) {
                this.camera.position.x = this._baseCamPos.x + this.screenShakeOffset.x;
                this.camera.position.y = this._baseCamPos.y + this.screenShakeOffset.y;
            }
            this.scene.render();
        });

        // Resize
        window.addEventListener('resize', () => {
            this.engine.resize();
            if (this.arrows && this.arrows.length > 0) {
                this._centerCameraOnArrows();
            } else {
                this._updateCameraOrtho();
            }
        });
    }

    _updateCameraOrtho(fitSize) {
        const aspect = this.canvas.width / this.canvas.height;
        const vertSize = fitSize || Math.max(this.gridRows + 2, 6);
        this.camera.orthoTop = vertSize / 2;
        this.camera.orthoBottom = -vertSize / 2;
        this.camera.orthoLeft = -vertSize * aspect / 2;
        this.camera.orthoRight = vertSize * aspect / 2;
    }

    _centerCameraOnArrows() {
        let minR = Infinity, maxR = -Infinity, minC = Infinity, maxC = -Infinity;
        this.arrows.forEach(a => {
            a.cells.forEach(c => {
                minR = Math.min(minR, c.row);
                maxR = Math.max(maxR, c.row);
                minC = Math.min(minC, c.col);
                maxC = Math.max(maxC, c.col);
            });
        });

        if (minR === Infinity) {
            // No arrows — fallback to grid center
            const cx = (this.gridCols - 1) / 2;
            const cy = -(this.gridRows - 1) / 2;
            this._baseCamPos = { x: cx, y: cy };
            this.camera.position = new BABYLON.Vector3(cx, cy, -10);
            this._updateCameraOrtho();
            return;
        }

        const cx = (minC + maxC) / 2;
        const cy = -(minR + maxR) / 2;
        this._baseCamPos = { x: cx, y: cy };
        this.camera.position = new BABYLON.Vector3(cx, cy, -10);

        // Fit camera to arrow bounds + generous padding (arrows should feel small & centered)
        const spanR = maxR - minR + 1;
        const spanC = maxC - minC + 1;
        const padding = 8;
        const aspect = this.canvas.width / this.canvas.height;
        const vertSize = spanR + padding;
        const horizSize = (spanC + padding) / aspect;
        const finalSize = Math.max(vertSize, horizSize, 14);
        this._updateCameraOrtho(finalSize);
    }

    // ---- Level Loading ----
    loadLevel(levelData) {
        this._cleanup();

        this.currentLevel = levelData;
        this.gridRows = levelData.rows;
        this.gridCols = levelData.cols;
        this.inputEnabled = false;
        this.isAnimating = false;

        // Draw grid background
        this._drawGrid();

        // Create arrows
        this.occupancy.clear();
        this.arrows = [];
        this._trailMeshes = [];

        let arrowIndex = 0;
        levelData.arrows.forEach((arrowData) => {
            const max = GameConfig.maxArrowCells;
            const cells = arrowData.cells;

            if (max && cells.length > max) {
                // Split long arrow into multiple shorter arrows
                for (let i = 0; i < cells.length; i += max) {
                    const chunk = cells.slice(i, Math.min(i + max, cells.length));
                    if (chunk.length < 2) continue;

                    // Direction from head cell relative to next cell
                    const head = chunk[0];
                    const next = chunk[1];
                    let dir;
                    if (head.row > next.row) dir = 'DOWN';
                    else if (head.row < next.row) dir = 'UP';
                    else if (head.col > next.col) dir = 'RIGHT';
                    else dir = 'LEFT';

                    const splitData = {
                        id: arrowData.id + '_' + Math.floor(i / max),
                        direction: dir,
                        cells: chunk,
                    };
                    const arrow = this._createArrow(splitData, arrowIndex++);
                    this.arrows.push(arrow);
                    arrow.cells.forEach(cell => {
                        this.occupancy.set(`${cell.row},${cell.col}`, arrow.id);
                    });
                }
            } else {
                const arrow = this._createArrow(arrowData, arrowIndex++);
                this.arrows.push(arrow);
                arrow.cells.forEach(cell => {
                    this.occupancy.set(`${cell.row},${cell.col}`, arrow.id);
                });
            }
        });

        // Center camera on arrows (not full grid)
        this._centerCameraOnArrows();

        // Update blocked states
        this._updateBlockedStates();

        // Spawn animation
        this._animateSpawn();
    }

    _cleanup() {
        // Dispose arrow meshes
        this.arrows.forEach(a => {
            if (a.parentNode) a.parentNode.dispose();
        });
        this.arrows = [];
        this.occupancy.clear();

        // Dispose trails
        if (this._trailMeshes) {
            this._trailMeshes.forEach(m => m.dispose());
        }
        this._trailMeshes = [];

        // Dispose grid
        if (this._gridMeshes) {
            this._gridMeshes.forEach(m => m.dispose());
            this._gridMeshes = [];
        }

        // Dispose particles
        if (this._particleSystems) {
            this._particleSystems.forEach(ps => { ps.stop(); ps.dispose(); });
            this._particleSystems = [];
        }
        this._particleSystems = [];
    }

    // ---- Grid ----
    _drawGrid() {
        this._gridMeshes = [];

        for (let r = 0; r < this.gridRows; r++) {
            for (let c = 0; c < this.gridCols; c++) {
                const plane = BABYLON.MeshBuilder.CreatePlane(`grid_${r}_${c}`, {
                    width: GameConfig.cellSize,
                    height: GameConfig.cellSize,
                }, this.scene);
                plane.position = new BABYLON.Vector3(c, -r, 0.1);

                const mat = new BABYLON.StandardMaterial(`gridMat_${r}_${c}`, this.scene);
                mat.diffuseColor = BABYLON.Color3.FromHexString('#ffffff');
                mat.alpha = 0.0;
                mat.disableLighting = true;
                mat.emissiveColor = BABYLON.Color3.FromHexString('#ffffff');
                plane.material = mat;
                plane.isPickable = false;

                this._gridMeshes.push(plane);
            }
        }
    }

    // ---- Path helpers (rounded corners, straight segments) ----
    _buildRoundedPath(cells) {
        const R = 0.18; // corner fillet radius
        const ARC_STEPS = 12; // more points for smooth small arcs

        // Reverse cells: tail → head (same convention as before)
        const wp = [];
        for (let i = cells.length - 1; i >= 0; i--) {
            wp.push({ x: cells[i].col, y: -cells[i].row });
        }

        const N = wp.length;
        if (N < 2) return { pts: [wp[0]], arc: [0], total: 0, wpArcs: [0] };

        const path = [];
        const arcArr = [];
        const wpArcs = new Array(N).fill(0);
        let cum = 0;

        const add = (x, y) => {
            if (path.length > 0) {
                const dx = x - path[path.length - 1].x;
                const dy = y - path[path.length - 1].y;
                cum += Math.sqrt(dx * dx + dy * dy);
            }
            path.push({ x, y });
            arcArr.push(cum);
        };

        add(wp[0].x, wp[0].y);
        wpArcs[0] = 0;

        for (let i = 1; i < N - 1; i++) {
            const prev = wp[i - 1], curr = wp[i], next = wp[i + 1];

            const inDx = curr.x - prev.x, inDy = curr.y - prev.y;
            const inLen = Math.sqrt(inDx * inDx + inDy * inDy);
            const outDx = next.x - curr.x, outDy = next.y - curr.y;
            const outLen = Math.sqrt(outDx * outDx + outDy * outDy);

            if (inLen < 0.001 || outLen < 0.001) {
                add(curr.x, curr.y); wpArcs[i] = cum; continue;
            }

            const inNx = inDx / inLen, inNy = inDy / inLen;
            const outNx = outDx / outLen, outNy = outDy / outLen;

            // Collinear — no corner
            if (Math.abs(inNx - outNx) < 0.01 && Math.abs(inNy - outNy) < 0.01) {
                add(curr.x, curr.y); wpArcs[i] = cum; continue;
            }

            // Fillet radius clamped to fit
            const r = Math.min(R, inLen * 0.45, outLen * 0.45);

            const asX = curr.x - inNx * r, asY = curr.y - inNy * r; // arc start
            const aeX = curr.x + outNx * r, aeY = curr.y + outNy * r; // arc end
            const cx = curr.x + r * (-inNx + outNx);
            const cy = curr.y + r * (-inNy + outNy);

            const sa = Math.atan2(asY - cy, asX - cx);
            const ea = Math.atan2(aeY - cy, aeX - cx);
            let da = ea - sa;
            if (da > Math.PI) da -= 2 * Math.PI;
            if (da < -Math.PI) da += 2 * Math.PI;

            add(asX, asY); // straight segment ends here

            const midJ = Math.ceil(ARC_STEPS / 2);
            for (let j = 1; j <= ARC_STEPS; j++) {
                const angle = sa + (j / ARC_STEPS) * da;
                add(cx + r * Math.cos(angle), cy + r * Math.sin(angle));
                if (j === midJ) wpArcs[i] = cum;
            }
        }

        add(wp[N - 1].x, wp[N - 1].y);
        wpArcs[N - 1] = cum;

        return { pts: path, arc: arcArr, total: cum, wpArcs };
    }

    _samplePath(sp, d) {
        d = Math.max(0, Math.min(d, sp.total));
        let lo = 0, hi = sp.arc.length - 1;
        while (lo < hi - 1) {
            const mid = (lo + hi) >> 1;
            if (sp.arc[mid] <= d) lo = mid; else hi = mid;
        }
        const segL = sp.arc[hi] - sp.arc[lo];
        const f = segL > 0 ? (d - sp.arc[lo]) / segL : 0;
        const p1 = sp.pts[lo], p2 = sp.pts[Math.min(hi, sp.pts.length - 1)];
        return {
            x: p1.x + (p2.x - p1.x) * f,
            y: p1.y + (p2.y - p1.y) * f,
            tx: p2.x - p1.x,
            ty: p2.y - p1.y,
        };
    }

    _buildRibbonPaths(sp, halfW, numPts, z) {
        const top = [], bot = [];
        const pts = sp.pts;
        const N = pts.length;
        for (let i = 0; i < N; i++) {
            // Tangent from neighbors (central difference, forward/backward at ends)
            let tx, ty;
            if (i === 0) {
                tx = pts[1].x - pts[0].x; ty = pts[1].y - pts[0].y;
            } else if (i === N - 1) {
                tx = pts[i].x - pts[i - 1].x; ty = pts[i].y - pts[i - 1].y;
            } else {
                tx = pts[i + 1].x - pts[i - 1].x; ty = pts[i + 1].y - pts[i - 1].y;
            }
            const tLen = Math.sqrt(tx * tx + ty * ty);
            let ux = 0, uy = 1;
            if (tLen > 0.001) { ux = -ty / tLen; uy = tx / tLen; }
            top.push(new BABYLON.Vector3(pts[i].x + ux * halfW, pts[i].y + uy * halfW, z));
            bot.push(new BABYLON.Vector3(pts[i].x - ux * halfW, pts[i].y - uy * halfW, z));
        }
        return [top, bot];
    }

    // ---- Arrow Creation (spline + ribbon body with rounded corners) ----
    _createArrow(arrowData, index) {
        const id = arrowData.id || `arrow_${index}`;
        const cells = arrowData.cells;
        const direction = arrowData.direction;
        const color = GameConfig.arrowColors[index % GameConfig.arrowColors.length];

        const parentNode = new BABYLON.TransformNode(`arrow_${id}`, this.scene);
        const meshes = [];
        const color3 = BABYLON.Color3.FromHexString(color);
        const bodyW = GameConfig.arrowBodyWidth;

        const headCell = cells[0];
        const tailCell = cells[cells.length - 1];

        // Extend body path toward escape direction for smooth head transition
        const dir = GameConfig.directions[direction];
        const ext = 0.45;
        const headExt = { row: headCell.row + dir.y * ext, col: headCell.col + dir.x * ext };
        const extCells = [headExt, ...cells];

        // Build rounded-corner body path (extended)
        const sp = this._buildRoundedPath(extCells);
        const paths = this._buildRibbonPaths(sp, bodyW / 2, 60, 0);

        const ribbon = BABYLON.MeshBuilder.CreateRibbon(`body_${id}`, {
            pathArray: paths,
            sideOrientation: BABYLON.Mesh.DOUBLESIDE,
        }, this.scene);
        ribbon.parent = parentNode;
        const rMat = new BABYLON.StandardMaterial(`mat_body_${id}`, this.scene);
        rMat.diffuseColor = color3;
        rMat.emissiveColor = color3.scale(0.5);
        rMat.disableLighting = true;
        ribbon.material = rMat;
        ribbon.metadata = { arrowId: id };
        meshes.push(ribbon);

        // Invisible hitbox planes at each cell (easier tapping)
        cells.forEach(cell => {
            const hit = BABYLON.MeshBuilder.CreatePlane(`hit_${id}_${cell.row}_${cell.col}`, {
                width: 1.0, height: 1.0,
            }, this.scene);
            hit.position = new BABYLON.Vector3(cell.col, -cell.row, 0.02);
            hit.parent = parentNode;
            hit.metadata = { arrowId: id };
            hit.visibility = 0;
            hit.isPickable = true;
            meshes.push(hit);
        });

        // Arrowhead at path end (tangent-aligned)
        const headPt = this._samplePath(sp, sp.total);
        const headAngle = Math.atan2(headPt.ty, headPt.tx);
        this._createArrowHead(id, headPt, headAngle, color3, parentNode, meshes);

        // Tail cap at tail cell
        this._createTailCap(id, tailCell, direction, color3, parentNode, meshes, cells.length - 1);

        return {
            id, cells, direction, color, color3, meshes, parentNode,
            headCell, tailCell,
            isEscaped: false,
            isBlocked: false,
        };
    }

    _createArrowHead(id, headPt, angle, color3, parentNode, meshes) {
        const hw = GameConfig.arrowHeadWidth / 2;
        const hl = GameConfig.arrowHeadLength;

        // Triangle pointing RIGHT, rotated by angle
        const triangle = new BABYLON.Mesh(`head_${id}`, this.scene);
        const vertexData = new BABYLON.VertexData();
        const positions = [hl, 0, 0, 0, hw, 0, 0, -hw, 0];
        const indices = [0, 1, 2];
        const normals = [];
        BABYLON.VertexData.ComputeNormals(positions, indices, normals);
        vertexData.positions = positions;
        vertexData.indices = indices;
        vertexData.normals = normals;
        vertexData.applyToMesh(triangle);

        triangle.position = new BABYLON.Vector3(headPt.x, headPt.y, -0.01);
        triangle.rotation.z = angle;
        triangle.parent = parentNode;

        const mat = new BABYLON.StandardMaterial(`mat_head_${id}`, this.scene);
        mat.diffuseColor = color3;
        mat.emissiveColor = color3.scale(0.5);
        mat.disableLighting = true;
        mat.backFaceCulling = false;
        triangle.material = mat;
        triangle.metadata = { arrowId: id, cellIndex: 0 };
        meshes.push(triangle);
    }

    _createTailCap(id, cell, direction, color3, parentNode, meshes, tailIndex) {
        const r = GameConfig.arrowBodyWidth / 2;
        const disc = BABYLON.MeshBuilder.CreateDisc(`tail_${id}`, {
            radius: r,
            tessellation: 16,
        }, this.scene);

        disc.position = new BABYLON.Vector3(cell.col, -cell.row, -0.01);
        disc.parent = parentNode;

        const mat = new BABYLON.StandardMaterial(`mat_tail_${id}`, this.scene);
        mat.diffuseColor = color3;
        mat.emissiveColor = color3.scale(0.5);
        mat.disableLighting = true;
        disc.material = mat;
        disc.metadata = { arrowId: id, cellIndex: tailIndex };
        meshes.push(disc);
    }

    // ---- Blocking Algorithm ----
    _updateBlockedStates() {
        this.arrows.forEach(arrow => {
            if (arrow.isEscaped) return;
            arrow.isBlocked = this._isBlocked(arrow);
            this._setArrowVisualState(arrow);
        });
    }

    _isBlocked(arrow) {
        const dir = GameConfig.directions[arrow.direction];
        const headCell = arrow.cells[0]; // Only check from head cell

        // Trace from head in escape direction to board edge
        let r = headCell.row + dir.y;
        let c = headCell.col + dir.x;

        while (r >= 0 && r < this.gridRows && c >= 0 && c < this.gridCols) {
            const key = `${r},${c}`;
            if (this.occupancy.has(key)) {
                const blockingId = this.occupancy.get(key);
                if (blockingId !== arrow.id) {
                    return true; // Blocked by another arrow
                }
            }
            r += dir.y;
            c += dir.x;
        }

        return false;
    }

    _setArrowVisualState(arrow) {
        // All arrows always full opacity
        arrow.meshes.forEach(mesh => {
            if (mesh.material) {
                mesh.material.alpha = 1.0;
            }
        });
    }

    // ---- Pulse Animation (disabled) ----
    _updatePulse() {
        // No pulse - arrows stay static
    }

    // ---- Input Handling ----
    _handleArrowTap(arrowId) {
        const arrow = this.arrows.find(a => a.id === arrowId);
        if (!arrow || arrow.isEscaped || arrow._escaping) return;

        if (arrow.isBlocked) {
            if (this.isAnimating) return; // only block during shake
            this._animateWrongTap(arrow);
            if (this.onWrongTap) this.onWrongTap(arrowId);
        } else {
            this._animateEscape(arrow);
        }
    }

    // ---- Escape Animation (smooth spline snake with ribbon body) ----
    _animateEscape(arrow) {
        arrow._escaping = true;
        const dir = GameConfig.directions[arrow.direction];

        // Remove from occupancy immediately so other arrows unblock
        arrow.cells.forEach(cell => {
            const key = `${cell.row},${cell.col}`;
            if (this.occupancy.get(key) === arrow.id) {
                this.occupancy.delete(key);
            }
        });
        this._updateBlockedStates();

        this._createTrail(arrow);

        const N = arrow.cells.length;
        const E = N + 10;
        const bodyW = GameConfig.arrowBodyWidth;
        const halfW = bodyW / 2;
        const color3 = arrow.color3;

        // Build extended path: original cells + escape extension
        const extCells = [];
        for (let i = N - 1; i >= 0; i--) {
            extCells.push({ row: arrow.cells[i].row, col: arrow.cells[i].col });
        }
        const hc = arrow.cells[0];
        const nx = dir.x, ny = dir.y;
        for (let e = 1; e <= E; e++) {
            extCells.push({ row: hc.row + ny * e, col: hc.col + nx * e });
        }
        // Reverse to head-first order for _buildRoundedPath (which reverses internally)
        extCells.reverse();

        const sp = this._buildRoundedPath(extCells);

        // Body arc length & head start on path (include 0.45 head extension to match static render)
        const HEAD_EXT = 0.45;
        const bodyArc = sp.wpArcs[N - 1] + HEAD_EXT;
        const headStartArc = sp.wpArcs[N - 1] + HEAD_EXT;
        const headTravelArc = sp.total - headStartArc;

        // Hide original arrow
        arrow.parentNode.setEnabled(false);

        // Create updatable ribbon
        const RIBBON_PTS = 200;
        const SMOOTH_EPS = 0.03; // tangent smoothing window
        const topPath = [], botPath = [];
        for (let i = 0; i < RIBBON_PTS; i++) {
            topPath.push(new BABYLON.Vector3(0, 0, -0.01));
            botPath.push(new BABYLON.Vector3(0, 0, -0.01));
        }

        const fillPaths = (headD, tailD) => {
            const range = headD - tailD;
            for (let i = 0; i < RIBBON_PTS; i++) {
                const t = i / (RIBBON_PTS - 1);
                const d = tailD + t * range;
                const s = this._samplePath(sp, d);

                // Smoothed tangent via central difference (matches static rendering)
                const s0 = this._samplePath(sp, Math.max(0, d - SMOOTH_EPS));
                const s1 = this._samplePath(sp, Math.min(sp.total, d + SMOOTH_EPS));
                const tx = s1.x - s0.x, ty = s1.y - s0.y;

                const tLen = Math.sqrt(tx * tx + ty * ty);
                let ux = 0, uy = 1;
                if (tLen > 0.001) { ux = -ty / tLen; uy = tx / tLen; }
                topPath[i].set(s.x + ux * halfW, s.y + uy * halfW, -0.01);
                botPath[i].set(s.x - ux * halfW, s.y - uy * halfW, -0.01);
            }
        };

        fillPaths(headStartArc, headStartArc - bodyArc);
        const ribbon = BABYLON.MeshBuilder.CreateRibbon(`sr_${arrow.id}`, {
            pathArray: [topPath, botPath],
            updatable: true,
            sideOrientation: BABYLON.Mesh.DOUBLESIDE,
        }, this.scene);
        const rMat = new BABYLON.StandardMaterial(`srm_${arrow.id}`, this.scene);
        rMat.diffuseColor = color3;
        rMat.emissiveColor = color3.scale(0.5);
        rMat.disableLighting = true;
        ribbon.material = rMat;
        ribbon.isPickable = false;

        // Arrowhead triangle
        const hw = GameConfig.arrowHeadWidth / 2;
        const hl = GameConfig.arrowHeadLength;
        const headTri = new BABYLON.Mesh(`sh_${arrow.id}`, this.scene);
        const vd = new BABYLON.VertexData();
        vd.positions = [hl, 0, 0, 0, hw, 0, 0, -hw, 0];
        vd.indices = [0, 1, 2];
        vd.normals = [];
        BABYLON.VertexData.ComputeNormals(vd.positions, vd.indices, vd.normals);
        vd.applyToMesh(headTri);
        const hMat = new BABYLON.StandardMaterial(`shm_${arrow.id}`, this.scene);
        hMat.diffuseColor = color3;
        hMat.emissiveColor = color3.scale(0.5);
        hMat.disableLighting = true;
        hMat.backFaceCulling = false;
        headTri.material = hMat;
        headTri.isPickable = false;

        const animMeshes = [ribbon, headTri];

        const initH = this._samplePath(sp, headStartArc);
        headTri.position.set(initH.x, initH.y, -0.02);
        headTri.rotation.z = Math.atan2(initH.ty, initH.tx);

        // Animate
        const duration = 0.35 + N * 0.04;
        const state = { p: 0 };

        gsap.to(state, {
            p: 1,
            duration,
            ease: 'power2.in',
            onUpdate: () => {
                const headD = headStartArc + state.p * headTravelArc;
                const tailD = Math.max(headD - bodyArc, 0);

                fillPaths(headD, tailD);
                BABYLON.MeshBuilder.CreateRibbon(null, {
                    pathArray: [topPath, botPath],
                    instance: ribbon,
                });

                const hp = this._samplePath(sp, headD);
                headTri.position.set(hp.x, hp.y, -0.02);
                headTri.rotation.z = Math.atan2(hp.ty, hp.tx);
            },
            onComplete: () => {
                animMeshes.forEach(m => m.dispose());

                arrow.isEscaped = true;
                arrow._escaping = false;
                arrow.parentNode.dispose();

                if (this.onArrowEscaped) this.onArrowEscaped(arrow.id);
                const remaining = this.arrows.filter(a => !a.isEscaped);
                if (remaining.length === 0 && this.onAllEscaped) {
                    this.onAllEscaped();
                }
            }
        });

        if (window.audioManager) window.audioManager.playEscape();
    }

    // ---- Trail (ghost left behind after escape — same rounded spline shape) ----
    _createTrail(arrow) {
        const color3 = arrow.color3;
        const bodyW = GameConfig.arrowBodyWidth;
        const trailAlpha = 0.25;
        const trailEmissive = 0.3;

        // Build rounded-corner ribbon trail (matches the arrow body)
        const sp = this._buildRoundedPath(arrow.cells);
        const paths = this._buildRibbonPaths(sp, bodyW / 2, 60, 0.05);

        const ribbon = BABYLON.MeshBuilder.CreateRibbon(`trail_${arrow.id}`, {
            pathArray: paths,
            sideOrientation: BABYLON.Mesh.DOUBLESIDE,
        }, this.scene);
        const rMat = new BABYLON.StandardMaterial(`mat_trail_${arrow.id}`, this.scene);
        rMat.diffuseColor = color3;
        rMat.emissiveColor = color3.scale(trailEmissive);
        rMat.alpha = trailAlpha;
        rMat.disableLighting = true;
        ribbon.material = rMat;
        ribbon.isPickable = false;
        this._trailMeshes.push(ribbon);
    }

    // ---- Wrong Tap Animation ----
    _animateWrongTap(arrow) {
        this.isAnimating = true;

        // Shake the arrow
        const tl = gsap.timeline({
            onComplete: () => {
                this.isAnimating = false;
            }
        });

        // Red flash
        const origEmissive = arrow.color3.scale(0.5);
        arrow.meshes.forEach(mesh => {
            if (mesh.material) {
                mesh.material.emissiveColor = new BABYLON.Color3(1, 0, 0);
            }
        });

        // Elastic shake
        tl.to(arrow.parentNode.position, {
            x: arrow.parentNode.position.x + GameConfig.shakeIntensity,
            duration: GameConfig.shakeDuration * 0.1,
            yoyo: true,
            repeat: 5,
            ease: 'power1.inOut',
            onComplete: () => {
                arrow.meshes.forEach(mesh => {
                    if (mesh.material) {
                        mesh.material.emissiveColor = origEmissive;
                    }
                });
            }
        });

        // Screen shake
        this._screenShake();

        // Wrong tap particles
        this._createWrongTapParticles(arrow);

        // Play sound
        if (window.audioManager) window.audioManager.playWrongTap();
    }

    _screenShake() {
        gsap.to(this.screenShakeOffset, {
            x: GameConfig.screenShakeIntensity,
            duration: GameConfig.screenShakeDuration * 0.15,
            yoyo: true,
            repeat: 3,
            ease: 'power1.inOut',
            onComplete: () => {
                this.screenShakeOffset.x = 0;
                this.screenShakeOffset.y = 0;
            }
        });
    }

    // ---- Spawn Animation ----
    _animateSpawn() {
        this.arrows.forEach((arrow) => {
            // Set pivot to arrow center so it scales from the middle
            const center = this._getArrowCenter(arrow);
            arrow.parentNode.setPivotPoint(new BABYLON.Vector3(center.x, center.y, 0));

            arrow.parentNode.scaling = new BABYLON.Vector3(0, 0, 1);

            gsap.to(arrow.parentNode.scaling, {
                x: 1,
                y: 1,
                duration: GameConfig.spawnDuration,
                delay: 0,
                ease: 'power2.out',
            });
        });

        // Enable input after spawn duration
        setTimeout(() => {
            this.inputEnabled = true;
        }, GameConfig.spawnDuration * 1000);
    }

    // ---- Particles ----
    _createEscapeParticles(arrow) {
        const headCell = arrow.headCell;
        const emitPos = new BABYLON.Vector3(headCell.col, -headCell.row, -0.5);

        const ps = new BABYLON.ParticleSystem(`escape_${arrow.id}`, GameConfig.escapeParticleCount, this.scene);

        // Texture - create programmatic
        ps.particleTexture = this._getParticleTexture();

        ps.emitter = emitPos;
        ps.minLifeTime = GameConfig.escapeParticleLifetime * 0.5;
        ps.maxLifeTime = GameConfig.escapeParticleLifetime;
        ps.minSize = GameConfig.escapeParticleSize * 0.5;
        ps.maxSize = GameConfig.escapeParticleSize;

        ps.color1 = new BABYLON.Color4(arrow.color3.r, arrow.color3.g, arrow.color3.b, 1);
        ps.color2 = new BABYLON.Color4(1, 1, 1, 1);
        ps.colorDead = new BABYLON.Color4(arrow.color3.r, arrow.color3.g, arrow.color3.b, 0);

        ps.emitRate = 0;
        ps.manualEmitCount = GameConfig.escapeParticleCount;

        const dir = GameConfig.directions[arrow.direction];
        ps.direction1 = new BABYLON.Vector3(dir.x * 2 - 1, -dir.y * 2 - 1, -0.5);
        ps.direction2 = new BABYLON.Vector3(dir.x * 2 + 1, -dir.y * 2 + 1, 0.5);

        ps.minEmitPower = GameConfig.escapeParticleSpeed * 0.5;
        ps.maxEmitPower = GameConfig.escapeParticleSpeed;
        ps.gravity = new BABYLON.Vector3(0, -2, 0);

        ps.start();
        this._particleSystems.push(ps);

        setTimeout(() => {
            ps.stop();
            setTimeout(() => { ps.dispose(); }, 1000);
        }, 200);
    }

    _createWrongTapParticles(arrow) {
        const center = this._getArrowCenter(arrow);
        const emitPos = new BABYLON.Vector3(center.x, center.y, -0.5);

        const ps = new BABYLON.ParticleSystem(`wrong_${arrow.id}`, GameConfig.wrongTapParticleCount, this.scene);
        ps.particleTexture = this._getParticleTexture();
        ps.emitter = emitPos;
        ps.minLifeTime = GameConfig.wrongTapParticleLifetime * 0.5;
        ps.maxLifeTime = GameConfig.wrongTapParticleLifetime;
        ps.minSize = 0.08;
        ps.maxSize = 0.15;
        ps.color1 = new BABYLON.Color4(1, 0.2, 0.2, 1);
        ps.color2 = new BABYLON.Color4(1, 0.5, 0, 1);
        ps.colorDead = new BABYLON.Color4(1, 0, 0, 0);
        ps.emitRate = 0;
        ps.manualEmitCount = GameConfig.wrongTapParticleCount;
        ps.direction1 = new BABYLON.Vector3(-2, -2, -0.5);
        ps.direction2 = new BABYLON.Vector3(2, 2, 0.5);
        ps.minEmitPower = 1;
        ps.maxEmitPower = 3;
        ps.gravity = new BABYLON.Vector3(0, -3, 0);

        ps.start();
        this._particleSystems.push(ps);

        setTimeout(() => {
            ps.stop();
            setTimeout(() => { ps.dispose(); }, 800);
        }, 150);
    }

    _getParticleTexture() {
        if (this._cachedParticleTex) return this._cachedParticleTex;

        // Create a simple white circle texture
        const size = 32;
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');
        const gradient = ctx.createRadialGradient(size/2, size/2, 0, size/2, size/2, size/2);
        gradient.addColorStop(0, 'rgba(255,255,255,1)');
        gradient.addColorStop(0.6, 'rgba(255,255,255,0.6)');
        gradient.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, size, size);

        const tex = new BABYLON.DynamicTexture('particleTex', { width: size, height: size }, this.scene, false);
        const texCtx = tex.getContext();
        texCtx.drawImage(canvas, 0, 0);
        tex.update();

        this._cachedParticleTex = tex;
        return tex;
    }

    _getArrowCenter(arrow) {
        let sumR = 0, sumC = 0;
        arrow.cells.forEach(c => { sumR += c.row; sumC += c.col; });
        return {
            x: sumC / arrow.cells.length,
            y: -sumR / arrow.cells.length,
        };
    }

    // ---- Utility ----
    getArrowScreenPosition(arrowId) {
        const arrow = this.arrows.find(a => a.id === arrowId);
        if (!arrow) return null;

        const center = this._getArrowCenter(arrow);
        const worldPos = new BABYLON.Vector3(center.x, center.y, 0);
        const screenPos = BABYLON.Vector3.Project(
            worldPos,
            BABYLON.Matrix.Identity(),
            this.scene.getTransformMatrix(),
            this.camera.viewport.toGlobal(this.engine.getRenderWidth(), this.engine.getRenderHeight())
        );

        return { x: screenPos.x, y: screenPos.y };
    }

    enableInput() {
        this.inputEnabled = true;
    }

    disableInput() {
        this.inputEnabled = false;
    }

    dispose() {
        this._cleanup();
        this.engine.stopRenderLoop();
        this.engine.dispose();
    }
}

// Global instance
window.arrowGame = null;
