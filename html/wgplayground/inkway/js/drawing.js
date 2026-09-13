/**
 * INKWAY — Drawing System
 * =======================
 * Input handling, stroke recording, ink management.
 */

window.INKWAY = window.INKWAY || {};

INKWAY.Drawing = (function () {
    'use strict';

    const { $, dist, catmullRomSpline, simplifyPath, pathLength, addJitter, clamp } = INKWAY.Utils;

    let _canvas = null;
    let _ctx = null;
    let _staticCanvas = null;
    let _staticCtx = null;
    let _isDrawing = false;
    let _currentStroke = [];
    let _currentSplatters = [];
    let _strokes = [];       // All completed strokes [{points, body, inkCost, splatters}]
    let _activeTool = 'draw'; // draw, cut, erase
    let _inkBudget = 1000;
    let _inkUsed = 0;
    let _camera = { x: 0, y: 0, zoom: 1 };
    let _cachedInkColor = null;

    // Pan state
    let _isPanning = false;
    let _panStart = { x: 0, y: 0 };
    let _cameraStart = { x: 0, y: 0 };

    function init() {
        _canvas = $('#canvas-dynamic');
        _ctx = _canvas?.getContext('2d');
        _staticCanvas = $('#canvas-static');
        _staticCtx = _staticCanvas?.getContext('2d');

        if (_canvas) {
            _resizeCanvases();
            window.addEventListener('resize', _resizeCanvases);
            _bindInput();
        }
    }

    function _resizeCanvases() {
        const container = $('#canvas-container');
        if (!container) return;

        const dpr = Math.min(window.devicePixelRatio || 1, 3);
        const w = container.clientWidth;
        const h = container.clientHeight;

        // Set backing resolution to physical pixels for crystal clear, high-DPI rendering
        [_canvas, _staticCanvas].forEach(c => {
            if (c) {
                c.width = Math.round(w * dpr);
                c.height = Math.round(h * dpr);
                c.style.width = w + 'px';
                c.style.height = h + 'px';
            }
        });

        // Recalculate camera zoom and centering to fit level play area
        const levelData = window.INKWAY && INKWAY.Main && INKWAY.Main.getCurrentLevel();
        if (levelData && INKWAY.Utils.calculateLevelCamera) {
            const cam = INKWAY.Utils.calculateLevelCamera(levelData, w, h);
            setCamera(cam.x, cam.y, cam.zoom);
        }
    }

    // ─── INPUT BINDING ───

    function _bindInput() {
        // Mouse events
        _canvas.addEventListener('mousedown', _onPointerDown);
        _canvas.addEventListener('mousemove', _onPointerMove);
        _canvas.addEventListener('mouseup', _onPointerUp);
        _canvas.addEventListener('mouseleave', _onPointerUp);

        // Touch events
        _canvas.addEventListener('touchstart', _onTouchStart, { passive: false });
        _canvas.addEventListener('touchmove', _onTouchMove, { passive: false });
        _canvas.addEventListener('touchend', _onTouchEnd);
        _canvas.addEventListener('touchcancel', _onTouchEnd);

        // Right-click pan (desktop)
        _canvas.addEventListener('contextmenu', e => e.preventDefault());

        // Scroll zoom
        _canvas.addEventListener('wheel', _onWheel, { passive: false });
    }

    function _getCanvasPos(clientX, clientY) {
        const rect = _canvas.getBoundingClientRect();
        return {
            x: (clientX - rect.left) / _camera.zoom + _camera.x,
            y: (clientY - rect.top) / _camera.zoom + _camera.y
        };
    }

    // ─── MOUSE HANDLERS ───

    function _onPointerDown(e) {
        if (e.button === 2) {
            // Right-click = pan
            _isPanning = true;
            _panStart = { x: e.clientX, y: e.clientY };
            _cameraStart = { x: _camera.x, y: _camera.y };
            return;
        }

        const gameState = INKWAY.Main.getGameState();
        if (gameState !== 'idle' && gameState !== 'drawing') return;

        INKWAY.Main.setGameState('drawing');

        const pos = _getCanvasPos(e.clientX, e.clientY);

        if (_activeTool === 'draw') {
            _startStroke(pos);
        } else if (_activeTool === 'erase') {
            _eraseAt(pos);
        } else if (_activeTool === 'cut') {
            _startStroke(pos); // Cut also starts a stroke (straight line)
        }
    }

    function _onPointerMove(e) {
        if (_isPanning) {
            _camera.x = _cameraStart.x - (e.clientX - _panStart.x) / _camera.zoom;
            _camera.y = _cameraStart.y - (e.clientY - _panStart.y) / _camera.zoom;
            return;
        }

        if (!_isDrawing) return;
        const pos = _getCanvasPos(e.clientX, e.clientY);

        if (_activeTool === 'draw') {
            _continueStroke(pos);
        }
    }

    function _onPointerUp(e) {
        if (_isPanning) {
            _isPanning = false;
            return;
        }

        if (!_isDrawing) return;

        if (_activeTool === 'draw') {
            _endStroke();
        } else if (_activeTool === 'cut') {
            const pos = _getCanvasPos(e.clientX, e.clientY);
            _endCut(pos);
        }
    }

    // ─── TOUCH HANDLERS ───

    function _onTouchStart(e) {
        e.preventDefault();
        if (e.touches.length === 2) {
            // Two-finger = pan
            _isPanning = true;
            const t = e.touches;
            _panStart = {
                x: (t[0].clientX + t[1].clientX) / 2,
                y: (t[0].clientY + t[1].clientY) / 2
            };
            _cameraStart = { x: _camera.x, y: _camera.y };
            return;
        }

        if (e.touches.length !== 1) return;
        const touch = e.touches[0];
        _onPointerDown({ clientX: touch.clientX, clientY: touch.clientY, button: 0 });
    }

    function _onTouchMove(e) {
        e.preventDefault();
        if (_isPanning && e.touches.length === 2) {
            const t = e.touches;
            const cx = (t[0].clientX + t[1].clientX) / 2;
            const cy = (t[0].clientY + t[1].clientY) / 2;
            _camera.x = _cameraStart.x - (cx - _panStart.x) / _camera.zoom;
            _camera.y = _cameraStart.y - (cy - _panStart.y) / _camera.zoom;
            return;
        }

        if (e.touches.length !== 1) return;
        const touch = e.touches[0];
        _onPointerMove({ clientX: touch.clientX, clientY: touch.clientY });
    }

    function _onTouchEnd(e) {
        if (_isPanning && e.touches.length < 2) {
            _isPanning = false;
            return;
        }
        _onPointerUp({ clientX: 0, clientY: 0 });
    }

    function _onWheel(e) {
        e.preventDefault();
        const delta = e.deltaY > 0 ? -0.05 : 0.05;
        _camera.zoom = clamp(_camera.zoom + delta, INKWAY_CONFIG.MIN_ZOOM, INKWAY_CONFIG.MAX_ZOOM);
    }

    // ─── STROKE DRAWING ───

    function _startStroke(pos) {
        if (_inkUsed >= _inkBudget && _activeTool === 'draw') return;
        _isDrawing = true;
        _currentStroke = [pos];
        _currentSplatters = [];
    }

    function _continueStroke(pos) {
        if (!_isDrawing) return;
        const last = _currentStroke[_currentStroke.length - 1];
        const d = dist(last.x, last.y, pos.x, pos.y);

        // Only add point if moved enough (reduces noise)
        if (d >= 3) {
            _currentStroke.push(pos);

            // Add ink splatters at tip
            if (Math.random() > 0.3) {
                for (let i = 0; i < 2; i++) {
                    _currentSplatters.push({
                        x: pos.x + (Math.random() - 0.5) * 8,
                        y: pos.y + (Math.random() - 0.5) * 8,
                        r: Math.random() * 1 + 1,
                        alpha: Math.random() * 0.2 + 0.3
                    });
                }
            }

            // Update ink in real-time as the user draws
            const segmentCost = d * INKWAY_CONFIG.INK_COST_PER_PIXEL;
            _inkUsed += segmentCost;
            _updateInkUI();

            // Stop drawing if ink is exhausted
            if (_inkUsed >= _inkBudget) {
                _endStroke();
            }
        }
    }

    function _endStroke() {
        _isDrawing = false;
        if (_currentStroke.length < 2) {
            _currentStroke = [];
            return;
        }

        const len = pathLength(_currentStroke);
        if (len < INKWAY_CONFIG.MIN_STROKE_LENGTH) {
            // Refund the ink for this too-short stroke
            const refundCost = len * INKWAY_CONFIG.INK_COST_PER_PIXEL;
            _inkUsed = Math.max(0, _inkUsed - refundCost);
            _currentStroke = [];
            _currentSplatters = [];
            _updateInkUI();
            return;
        }

        // Smooth the stroke
        const simplified = simplifyPath(_currentStroke, 2);
        const smoothed = catmullRomSpline(simplified, 6, 0.5);
        const jittered = addJitter(smoothed, 0.8);

        // Recalculate final ink cost (smoothed path may differ from raw)
        const rawCost = pathLength(_currentStroke) * INKWAY_CONFIG.INK_COST_PER_PIXEL;
        const finalCost = pathLength(jittered) * INKWAY_CONFIG.INK_COST_PER_PIXEL;
        // Adjust _inkUsed: remove raw real-time cost, add final smoothed cost
        _inkUsed = Math.max(0, _inkUsed - rawCost + finalCost);

        // Create physics body
        const body = INKWAY.Physics.createPathBody(jittered, 8);
        if (body) {
            INKWAY.Physics.addBody(body);
        }

        // Store the stroke
        _strokes.push({
            points: jittered,
            rawPoints: _currentStroke.slice(),
            body: body,
            inkCost: finalCost,
            splatters: _currentSplatters.slice()
        });

        _currentStroke = [];
        _currentSplatters = [];
        _updateInkUI();

        INKWAY.Main.events.emit('strokeComplete', { inkUsed: _inkUsed, inkBudget: _inkBudget });
    }

    // ─── CUT TOOL ───

    function _endCut(endPos) {
        _isDrawing = false;
        if (_currentStroke.length < 1) return;

        const startPos = _currentStroke[0];
        const cutLen = dist(startPos.x, startPos.y, endPos.x, endPos.y);
        const cutCost = cutLen * INKWAY_CONFIG.INK_COST_PER_PIXEL * 0.5;

        if (_inkUsed + cutCost > _inkBudget) {
            _currentStroke = [];
            return;
        }

        _inkUsed += cutCost;

        // Find any stroke bodies intersected by the cut line
        // Simple approach: check if cut line crosses near any stroke's points
        INKWAY.Main.events.emit('cutPerformed', { start: startPos, end: endPos });

        _currentStroke = [];
        _updateInkUI();
    }

    // ─── ERASE TOOL ───

    function _eraseAt(pos) {
        // Find the closest stroke to the click point
        let closestIdx = -1;
        let closestDist = 20; // Max distance to detect

        for (let i = _strokes.length - 1; i >= 0; i--) {
            const stroke = _strokes[i];
            for (const p of stroke.points) {
                const d = dist(pos.x, pos.y, p.x, p.y);
                if (d < closestDist) {
                    closestDist = d;
                    closestIdx = i;
                    break;
                }
            }
        }

        if (closestIdx >= 0) {
            const stroke = _strokes[closestIdx];
            // Remove physics body
            if (stroke.body) {
                INKWAY.Physics.removeBody(stroke.body);
            }
            // Refund ink
            const refund = stroke.inkCost * INKWAY_CONFIG.ERASE_REFUND_PERCENT;
            _inkUsed = Math.max(0, _inkUsed - refund);
            // Remove stroke
            _strokes.splice(closestIdx, 1);
            _updateInkUI();

            INKWAY.Main.events.emit('strokeErased', { inkUsed: _inkUsed, inkBudget: _inkBudget });
        }
    }

    // ─── INK UI ───

    function _updateInkUI() {
        const pct = clamp(1 - (_inkUsed / _inkBudget), 0, 1);
        const fill = $('#ink-bar-fill');
        const label = $('#ink-percent');

        if (fill) {
            fill.style.width = `${pct * 100}%`;
            fill.classList.remove('ink-mid', 'ink-low');
            if (pct <= 0.1) fill.classList.add('ink-low');
            else if (pct <= 0.4) fill.classList.add('ink-mid');
        }
        if (label) {
            label.textContent = `${Math.round(pct * 100)}%`;
        }
    }

    // ─── RENDER ───

    function render(clear = true) {
        if (!_ctx || !_canvas) return;

        const dpr = Math.min(window.devicePixelRatio || 1, 3);
        if (clear) _ctx.clearRect(0, 0, _canvas.width, _canvas.height);
        _ctx.save();

        // Apply camera transform with DPR scaling for sharp rendering
        _ctx.scale(_camera.zoom * dpr, _camera.zoom * dpr);
        _ctx.translate(-_camera.x, -_camera.y);

        // Draw completed strokes
        for (const stroke of _strokes) {
            _drawStrokePath(_ctx, stroke.points, stroke.splatters);
        }

        // Draw current stroke (while drawing)
        if (_isDrawing && _currentStroke.length >= 2) {
            if (_activeTool === 'draw') {
                _drawStrokePath(_ctx, _currentStroke, _currentSplatters);
            } else if (_activeTool === 'cut') {
                _drawCutLine(_ctx, _currentStroke[0], _currentStroke[_currentStroke.length - 1]);
            }
        }

        _ctx.restore();
    }

    function _drawStrokePath(ctx, points, splatters) {
        if (points.length < 2) return;

        if (!_cachedInkColor) {
            _cachedInkColor = getComputedStyle(document.documentElement).getPropertyValue('--theme-ink').trim() || '#1A1A2E';
        }
        const inkColor = _cachedInkColor;

        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) {
            ctx.lineTo(points[i].x, points[i].y);
        }
        ctx.strokeStyle = inkColor;
        ctx.lineWidth = 4;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.stroke();

        if (splatters) {
            for (const sp of splatters) {
                ctx.beginPath();
                ctx.arc(sp.x, sp.y, sp.r, 0, Math.PI * 2);
                ctx.fillStyle = inkColor;
                ctx.globalAlpha = sp.alpha;
                ctx.fill();
            }
            ctx.globalAlpha = 1.0;
        }
    }

    function _drawCutLine(ctx, start, end) {
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.strokeStyle = '#D94040';
        ctx.lineWidth = 2;
        ctx.setLineDash([8, 6]);
        ctx.stroke();
        ctx.setLineDash([]);
    }

    // ─── PUBLIC API ───

    function setTool(tool) {
        _activeTool = tool;
        const container = $('#canvas-container');
        if (container) {
            container.className = 'canvas-container tool-' + tool;
        }
    }

    function setInkBudget(budget) {
        _inkBudget = budget;
        _inkUsed = 0;
        _updateInkUI();
    }

    function getInkUsed() { return _inkUsed; }
    function getInkBudget() { return _inkBudget; }
    function getInkPercent() { return _inkUsed / _inkBudget; }

    function getCamera() { return _camera; }

    function setCamera(x, y, zoom) {
        _camera.x = x ?? _camera.x;
        _camera.y = y ?? _camera.y;
        _camera.zoom = zoom ?? _camera.zoom;
    }

    function resetDrawing() {
        // Remove all stroke bodies
        for (const stroke of _strokes) {
            if (stroke.body) INKWAY.Physics.removeBody(stroke.body);
        }
        _strokes = [];
        _currentStroke = [];
        _inkUsed = 0;
        _isDrawing = false;
        _cachedInkColor = null;
        _updateInkUI();
    }

    function getStrokes() {
        return _strokes;
    }

    return {
        init, render, setTool,
        setInkBudget, getInkUsed, getInkBudget, getInkPercent,
        getCamera, setCamera, resetDrawing, getStrokes, resizeCanvases: _resizeCanvases
    };
})();
