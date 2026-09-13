/**
 * INKWAY — Utility Functions
 * ==========================
 * Math helpers, spline smoothing, easing functions,
 * color utilities, and general-purpose tools.
 */

window.INKWAY = window.INKWAY || {};

INKWAY.Utils = (function () {
    'use strict';

    // ─── MATH ───

    function clamp(val, min, max) {
        return Math.max(min, Math.min(max, val));
    }

    function lerp(a, b, t) {
        return a + (b - a) * t;
    }

    function inverseLerp(a, b, v) {
        return (v - a) / (b - a);
    }

    function remap(inMin, inMax, outMin, outMax, v) {
        const t = inverseLerp(inMin, inMax, v);
        return lerp(outMin, outMax, clamp(t, 0, 1));
    }

    function dist(x1, y1, x2, y2) {
        const dx = x2 - x1;
        const dy = y2 - y1;
        return Math.sqrt(dx * dx + dy * dy);
    }

    function angle(x1, y1, x2, y2) {
        return Math.atan2(y2 - y1, x2 - x1);
    }

    function degToRad(deg) {
        return deg * (Math.PI / 180);
    }

    function radToDeg(rad) {
        return rad * (180 / Math.PI);
    }

    function randomRange(min, max) {
        return min + Math.random() * (max - min);
    }

    function randomInt(min, max) {
        return Math.floor(randomRange(min, max + 1));
    }

    // ─── VECTOR HELPERS ───

    function vecAdd(a, b) {
        return { x: a.x + b.x, y: a.y + b.y };
    }

    function vecSub(a, b) {
        return { x: a.x - b.x, y: a.y - b.y };
    }

    function vecScale(v, s) {
        return { x: v.x * s, y: v.y * s };
    }

    function vecLength(v) {
        return Math.sqrt(v.x * v.x + v.y * v.y);
    }

    function vecNormalize(v) {
        const len = vecLength(v);
        if (len === 0) return { x: 0, y: 0 };
        return { x: v.x / len, y: v.y / len };
    }

    function vecDot(a, b) {
        return a.x * b.x + a.y * b.y;
    }

    function vecPerp(v) {
        return { x: -v.y, y: v.x };
    }

    // ─── EASING FUNCTIONS ───

    const Easing = {
        linear: t => t,
        easeInQuad: t => t * t,
        easeOutQuad: t => t * (2 - t),
        easeInOutQuad: t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
        easeInCubic: t => t * t * t,
        easeOutCubic: t => (--t) * t * t + 1,
        easeInOutCubic: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
        easeOutBack: t => {
            const c1 = 1.70158;
            const c3 = c1 + 1;
            return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
        },
        easeOutElastic: t => {
            if (t === 0 || t === 1) return t;
            return Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * (2 * Math.PI / 3)) + 1;
        },
        easeOutBounce: t => {
            const n1 = 7.5625;
            const d1 = 2.75;
            if (t < 1 / d1) return n1 * t * t;
            if (t < 2 / d1) return n1 * (t -= 1.5 / d1) * t + 0.75;
            if (t < 2.5 / d1) return n1 * (t -= 2.25 / d1) * t + 0.9375;
            return n1 * (t -= 2.625 / d1) * t + 0.984375;
        }
    };

    // ─── CATMULL-ROM SPLINE ───

    /**
     * Compute a smooth Catmull-Rom spline through the given points.
     * Returns a denser array of interpolated {x, y} points.
     * @param {Array} points - Array of {x, y}
     * @param {number} segments - Interpolation segments between each pair
     * @param {number} tension - Spline tension (0.5 = standard Catmull-Rom)
     */
    function catmullRomSpline(points, segments = 8, tension = 0.5) {
        if (points.length < 2) return points.slice();
        if (points.length === 2) {
            return interpolateLinear(points[0], points[1], segments);
        }

        const result = [];

        // Pad start/end with duplicated points
        const pts = [points[0], ...points, points[points.length - 1]];

        for (let i = 1; i < pts.length - 2; i++) {
            const p0 = pts[i - 1];
            const p1 = pts[i];
            const p2 = pts[i + 1];
            const p3 = pts[i + 2];

            for (let s = 0; s < segments; s++) {
                const t = s / segments;
                const t2 = t * t;
                const t3 = t2 * t;

                const x = tension * (
                    (2 * p1.x) +
                    (-p0.x + p2.x) * t +
                    (2 * p0.x - 5 * p1.x + 4 * p2.x - p3.x) * t2 +
                    (-p0.x + 3 * p1.x - 3 * p2.x + p3.x) * t3
                );
                const y = tension * (
                    (2 * p1.y) +
                    (-p0.y + p2.y) * t +
                    (2 * p0.y - 5 * p1.y + 4 * p2.y - p3.y) * t2 +
                    (-p0.y + 3 * p1.y - 3 * p2.y + p3.y) * t3
                );

                result.push({ x, y });
            }
        }

        // Add the last point
        result.push(points[points.length - 1]);
        return result;
    }

    function interpolateLinear(a, b, segments) {
        const result = [];
        for (let i = 0; i <= segments; i++) {
            const t = i / segments;
            result.push({ x: lerp(a.x, b.x, t), y: lerp(a.y, b.y, t) });
        }
        return result;
    }

    // ─── STROKE PROCESSING ───

    /**
     * Add hand-drawn jitter to points for a sketchy feel.
     * @param {Array} points - Array of {x, y}
     * @param {number} amount - Max jitter in pixels
     */
    function addJitter(points, amount = 1) {
        return points.map(p => ({
            x: p.x + randomRange(-amount, amount),
            y: p.y + randomRange(-amount, amount)
        }));
    }

    /**
     * Simplify a polyline using the Ramer-Douglas-Peucker algorithm.
     * Reduces point count while preserving shape.
     */
    function simplifyPath(points, tolerance = 2) {
        if (points.length <= 2) return points.slice();

        // Find the point farthest from the line between first and last
        let maxDist = 0;
        let maxIdx = 0;
        const first = points[0];
        const last = points[points.length - 1];

        for (let i = 1; i < points.length - 1; i++) {
            const d = pointToLineDist(points[i], first, last);
            if (d > maxDist) {
                maxDist = d;
                maxIdx = i;
            }
        }

        if (maxDist > tolerance) {
            const left = simplifyPath(points.slice(0, maxIdx + 1), tolerance);
            const right = simplifyPath(points.slice(maxIdx), tolerance);
            return [...left.slice(0, -1), ...right];
        }

        return [first, last];
    }

    function pointToLineDist(point, lineStart, lineEnd) {
        const dx = lineEnd.x - lineStart.x;
        const dy = lineEnd.y - lineStart.y;
        const lenSq = dx * dx + dy * dy;

        if (lenSq === 0) return dist(point.x, point.y, lineStart.x, lineStart.y);

        let t = ((point.x - lineStart.x) * dx + (point.y - lineStart.y) * dy) / lenSq;
        t = clamp(t, 0, 1);

        const projX = lineStart.x + t * dx;
        const projY = lineStart.y + t * dy;
        return dist(point.x, point.y, projX, projY);
    }

    /**
     * Calculate total path length from an array of {x, y} points.
     */
    function pathLength(points) {
        let total = 0;
        for (let i = 1; i < points.length; i++) {
            total += dist(points[i - 1].x, points[i - 1].y, points[i].x, points[i].y);
        }
        return total;
    }

    // ─── COLOR UTILITIES ───

    function hexToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    function rgbToHex(r, g, b) {
        return '#' + [r, g, b].map(c => {
            const hex = clamp(Math.round(c), 0, 255).toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        }).join('');
    }

    function lerpColor(hexA, hexB, t) {
        const a = hexToRgb(hexA);
        const b = hexToRgb(hexB);
        if (!a || !b) return hexA;
        return rgbToHex(
            lerp(a.r, b.r, t),
            lerp(a.g, b.g, t),
            lerp(a.b, b.b, t)
        );
    }

    // ─── TIMING ───

    function formatTime(seconds) {
        const m = Math.floor(seconds / 60);
        const s = Math.floor(seconds % 60);
        return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }

    // ─── SEEDED RANDOM (for daily challenges) ───

    function seededRandom(seed) {
        let s = seed;
        return function () {
            s = (s * 16807 + 0) % 2147483647;
            return (s - 1) / 2147483646;
        };
    }

    /**
     * Get a date-based seed (same for all players on the same day).
     */
    function dailySeed() {
        const d = new Date();
        return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
    }

    // ─── DOM HELPERS ───

    function $(selector) {
        return document.querySelector(selector);
    }

    function $$(selector) {
        return Array.from(document.querySelectorAll(selector));
    }

    function createElement(tag, className, textContent) {
        const el = document.createElement(tag);
        if (className) el.className = className;
        if (textContent) el.textContent = textContent;
        return el;
    }

    // ─── EVENT EMITTER ───

    class EventEmitter {
        constructor() {
            this._listeners = {};
        }

        on(event, callback) {
            if (!this._listeners[event]) this._listeners[event] = [];
            this._listeners[event].push(callback);
            return () => this.off(event, callback);
        }

        off(event, callback) {
            if (!this._listeners[event]) return;
            this._listeners[event] = this._listeners[event].filter(cb => cb !== callback);
        }

        emit(event, ...args) {
            if (!this._listeners[event]) return;
            this._listeners[event].forEach(cb => cb(...args));
        }

        once(event, callback) {
            const unsub = this.on(event, (...args) => {
                unsub();
                callback(...args);
            });
            return unsub;
        }
    }

    // ─── ANIMATION HELPER ───

    /**
     * Animate a value over time using requestAnimationFrame.
     * @param {number} duration - Duration in ms
     * @param {Function} onUpdate - Called each frame with (progress 0-1, easedProgress)
     * @param {Function} easingFn - Easing function
     * @returns {Object} - { cancel() }
     */
    function animate(duration, onUpdate, easingFn = Easing.easeOutCubic) {
        let startTime = null;
        let frameId = null;
        let cancelled = false;

        function tick(timestamp) {
            if (cancelled) return;
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const rawProgress = clamp(elapsed / duration, 0, 1);
            const easedProgress = easingFn(rawProgress);

            onUpdate(easedProgress, rawProgress);

            if (rawProgress < 1) {
                frameId = requestAnimationFrame(tick);
            }
        }

        frameId = requestAnimationFrame(tick);

        return {
            cancel() {
                cancelled = true;
                if (frameId) cancelAnimationFrame(frameId);
            }
        };
    }

    /**
     * Wait for a given number of ms (promise-based).
     */
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // ─── HAPTIC ───

    function haptic(pattern) {
        if (INKWAY_CONFIG.HAPTIC_FEEDBACK && navigator.vibrate) {
            navigator.vibrate(pattern);
        }
    }

    // ─── CANVAS DRAWING HELPERS ───

    /**
     * Draw a hand-drawn style line on a canvas context.
     * Adds subtle jitter for the sketchy aesthetic.
     */
    function drawSketchyLine(ctx, x1, y1, x2, y2, jitter = 0.8) {
        const segments = Math.max(3, Math.floor(dist(x1, y1, x2, y2) / 15));
        ctx.beginPath();
        ctx.moveTo(x1 + randomRange(-jitter, jitter), y1 + randomRange(-jitter, jitter));
        for (let i = 1; i <= segments; i++) {
            const t = i / segments;
            const x = lerp(x1, x2, t) + randomRange(-jitter, jitter);
            const y = lerp(y1, y2, t) + randomRange(-jitter, jitter);
            ctx.lineTo(x, y);
        }
        ctx.stroke();
    }

    /**
     * Draw a hand-drawn style rounded rectangle.
     */
    function drawSketchyRect(ctx, x, y, w, h, jitter = 1) {
        drawSketchyLine(ctx, x, y, x + w, y, jitter);
        drawSketchyLine(ctx, x + w, y, x + w, y + h, jitter);
        drawSketchyLine(ctx, x + w, y + h, x, y + h, jitter);
        drawSketchyLine(ctx, x, y + h, x, y, jitter);
    }

    /**
     * Draw a hand-drawn style polygon.
     */
    function drawSketchyPolygon(ctx, vertices, jitter = 1, close = true) {
        if (vertices.length < 2) return;
        for (let i = 0; i < vertices.length - 1; i++) {
            drawSketchyLine(ctx, vertices[i].x, vertices[i].y, vertices[i + 1].x, vertices[i + 1].y, jitter);
        }
        if (close) {
            drawSketchyLine(ctx, vertices[vertices.length - 1].x, vertices[vertices.length - 1].y, vertices[0].x, vertices[0].y, jitter);
        }
    }

    /**
     * Draw a hand-drawn style circle.
     */
    function drawSketchyCircle(ctx, x, y, radius, jitter = 1) {
        const segments = Math.max(24, Math.floor(radius * 1.5));
        ctx.beginPath();
        const startAng = randomRange(0, Math.PI * 2);
        for (let i = 0; i <= segments; i++) {
            const t = i / segments;
            const ang = startAng + t * Math.PI * 2;
            const rx = x + Math.cos(ang) * radius + randomRange(-jitter * 0.3, jitter * 0.3);
            const ry = y + Math.sin(ang) * radius + randomRange(-jitter * 0.3, jitter * 0.3);
            if (i === 0) ctx.moveTo(rx, ry);
            else ctx.lineTo(rx, ry);
        }
        ctx.closePath();
    }

    /**
     * Check if a point is inside a rotated rectangle.
     */
    function pointInRotatedRect(px, py, rx, ry, rw, rh, angleDeg) {
        const rad = degToRad(-angleDeg);
        const cos = Math.cos(rad);
        const sin = Math.sin(rad);
        
        // Translate point to rectangle center
        const dx = px - rx;
        const dy = py - ry;
        
        // Rotate point back to axis-aligned
        const localX = dx * cos - dy * sin;
        const localY = dx * sin + dy * cos;
        
        return localX >= -rw/2 && localX <= rw/2 && localY >= -rh/2 && localY <= rh/2;
    }

    function calculateLevelCamera(levelData, cw, ch) {
        if (!levelData) return { x: 0, y: 0, zoom: 1 };

        const levelW = levelData.canvasSize?.w || 1280;
        const levelH = levelData.canvasSize?.h || 720;

        let minX = levelData.start?.x ?? 100;
        let maxX = levelData.start?.x ?? 100;
        let minY = levelData.start?.y ?? 300;
        let maxY = levelData.start?.y ?? 300;

        const expand = (x, y) => {
            if (typeof x === 'number' && !isNaN(x) && typeof y === 'number' && !isNaN(y)) {
                minX = Math.min(minX, x);
                maxX = Math.max(maxX, x);
                minY = Math.min(minY, y);
                maxY = Math.max(maxY, y);
            }
        };

        if (levelData.goal) {
            expand(levelData.goal.x, levelData.goal.y);
        }

        if (levelData.terrain) {
            for (const t of levelData.terrain) {
                if (t.points && Array.isArray(t.points)) {
                    for (const p of t.points) expand(p[0], p[1]);
                } else if (t.x !== undefined && t.y !== undefined) {
                    const hw = (t.width || 80) / 2;
                    const hh = (t.height || 40) / 2;
                    expand(t.x - hw, t.y - hh);
                    expand(t.x + hw, t.y + hh);
                }
            }
        }

        if (levelData.objects) {
            for (const o of levelData.objects) {
                if (o.x !== undefined && o.y !== undefined) {
                    const hw = (o.width || 40) / 2;
                    const hh = (o.height || 40) / 2;
                    expand(o.x - hw, o.y - hh);
                    expand(o.x + hw, o.y + hh);
                }
                if (o.exitX !== undefined && o.exitY !== undefined) {
                    expand(o.exitX, o.exitY);
                }
            }
        }

        // Add padding around active level elements
        const padX = 100;
        const padY = 80;
        minX -= padX;
        maxX += padX;
        minY -= padY;
        maxY += padY;

        let contentW = maxX - minX;
        let contentH = maxY - minY;

        // Cap minimum content dimensions so small levels zoom in nicely (~850x480 max viewport box)
        const minW = 850;
        const minH = 480;
        contentW = Math.max(minW, Math.min(levelW, contentW));
        contentH = Math.max(minH, Math.min(levelH, contentH));

        let centerX = (minX + maxX) / 2;
        let centerY = (minY + maxY) / 2;

        // Clamp camera center so view stays within valid level bounds
        const halfW = contentW / 2;
        const halfH = contentH / 2;
        centerX = Math.max(halfW, Math.min(levelW - halfW, centerX));
        centerY = Math.max(halfH, Math.min(levelH - halfH, centerY));

        const zoomX = cw / contentW;
        const zoomY = ch / contentH;
        const fitZoom = Math.min(zoomX, zoomY);

        const camX = centerX - cw / (2 * fitZoom);
        const camY = centerY - ch / (2 * fitZoom);

        return { x: camX, y: camY, zoom: fitZoom };
    }

    // ─── PUBLIC API ───

    return {
        clamp, lerp, inverseLerp, remap,
        dist, angle, degToRad, radToDeg,
        randomRange, randomInt,
        vecAdd, vecSub, vecScale, vecLength, vecNormalize, vecDot, vecPerp,
        Easing,
        catmullRomSpline, addJitter, simplifyPath, pathLength,
        hexToRgb, rgbToHex, lerpColor,
        formatTime,
        seededRandom, dailySeed,
        $, $$, createElement,
        EventEmitter,
        animate, delay, haptic,
        drawSketchyLine, drawSketchyRect, drawSketchyPolygon, drawSketchyCircle,
        pointInRotatedRect, calculateLevelCamera
    };
})();
