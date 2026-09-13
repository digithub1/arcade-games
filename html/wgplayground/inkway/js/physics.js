/**
 * INKWAY — Physics Engine
 * =======================
 * Matter.js wrapper, body factory, world management.
 */

window.INKWAY = window.INKWAY || {};

INKWAY.Physics = (function () {
    'use strict';

    const { Engine, Render, Runner, Bodies, Body, Composite, Events, Vector, Constraint } = Matter;

    let _engine = null;
    let _world = null;
    let _runner = null;
    let _paused = false;
    let _accumulator = 0;
    const FIXED_TIME_STEP = 16.667; // 60Hz step in ms

    function init() {
        _engine = Engine.create({
            gravity: {
                x: INKWAY_CONFIG.PHYSICS.gravity.x,
                y: INKWAY_CONFIG.PHYSICS.gravity.y
            }
        });
        _world = _engine.world;

        _engine.velocityIterations = INKWAY_CONFIG.PHYSICS.velocityIterations;
        _engine.positionIterations = INKWAY_CONFIG.PHYSICS.positionIterations;

        Events.on(_engine, 'beforeUpdate', () => {
            const fixedDt = FIXED_TIME_STEP / 1000;
            const state = window.INKWAY && INKWAY.Main && INKWAY.Main.getGameState();
            if (state === 'simulating') {
                if (INKWAY.Vehicle && INKWAY.Vehicle.updatePhysics) {
                    INKWAY.Vehicle.updatePhysics(fixedDt);
                }
                if (INKWAY.Objects && INKWAY.Objects.updatePhysics) {
                    INKWAY.Objects.updatePhysics(fixedDt);
                }
            }
        });
    }

    function getEngine() { return _engine; }
    function getWorld() { return _world; }

    /** Step the physics simulation by dt (seconds) using a stable fixed accumulator. */
    function step(dt) {
        if (_paused || !_engine) return;
        
        _accumulator += dt * 1000;
        
        let steps = 0;
        // Cap the number of steps to 5 per frame to prevent the spiral of death during lag
        while (_accumulator >= FIXED_TIME_STEP && steps < 5) {
            Engine.update(_engine, FIXED_TIME_STEP);
            _accumulator -= FIXED_TIME_STEP;
            steps++;
        }
    }

    /** Clear all bodies from the world. */
    function clear() {
        if (_world) {
            Composite.clear(_world, false);
        }
    }

    /** Set gravity. */
    function setGravity(x, y) {
        if (_engine) {
            _engine.gravity.x = x;
            _engine.gravity.y = y;
        }
    }

    /** Add a body to the world. */
    function addBody(body) {
        if (_world) Composite.add(_world, body);
        return body;
    }

    /** Remove a body from the world. */
    function removeBody(body) {
        if (_world) Composite.remove(_world, body);
    }

    /** Add a constraint to the world. */
    function addConstraint(constraint) {
        if (_world) Composite.add(_world, constraint);
        return constraint;
    }

    /** Remove a constraint. */
    function removeConstraint(constraint) {
        if (_world) Composite.remove(_world, constraint);
    }

    // ─── BODY FACTORIES ───

    /**
     * Create a static rectangular body (terrain block).
     */
    function createRect(x, y, w, h, options = {}) {
        return Bodies.rectangle(x, y, w, h, {
            isStatic: true,
            friction: options.friction ?? INKWAY_CONFIG.PHYSICS.drawnLineFriction,
            restitution: options.restitution ?? INKWAY_CONFIG.PHYSICS.drawnLineRestitution,
            ...options
        });
    }

    /**
     * Create a static polygon from an array of vertices.
     */
    function createPolygon(vertices, options = {}) {
        const cx = vertices.reduce((s, v) => s + v.x, 0) / vertices.length;
        const cy = vertices.reduce((s, v) => s + v.y, 0) / vertices.length;

        return Bodies.fromVertices(cx, cy, vertices, {
            isStatic: true,
            friction: options.friction ?? INKWAY_CONFIG.PHYSICS.drawnLineFriction,
            restitution: options.restitution ?? INKWAY_CONFIG.PHYSICS.drawnLineRestitution,
            ...options
        });
    }

    /**
     * Create a chain of small rectangle segments along a path.
     * This is how drawn strokes become physics bodies.
     * Much more reliable than Bodies.fromVertices for curves.
     */
    function createPathBody(points, thickness = 8, options = {}) {
        if (points.length < 2) return null;

        const segments = [];

        for (let i = 0; i < points.length - 1; i++) {
            const p1 = points[i];
            const p2 = points[i + 1];
            const dx = p2.x - p1.x;
            const dy = p2.y - p1.y;
            const len = Math.sqrt(dx * dx + dy * dy);
            if (len < 1) continue;

            const angle = Math.atan2(dy, dx);
            const cx = (p1.x + p2.x) / 2;
            const cy = (p1.y + p2.y) / 2;

            const seg = Bodies.rectangle(cx, cy, len + 2, thickness, {
                isStatic: true,
                angle: angle,
                friction: options.friction ?? INKWAY_CONFIG.PHYSICS.drawnLineFriction,
                restitution: options.restitution ?? INKWAY_CONFIG.PHYSICS.drawnLineRestitution,
                render: { visible: false },
                ...options
            });

            segments.push(seg);
        }

        if (segments.length === 0) return null;

        // Create a composite body from all segments
        const composite = Body.create({
            parts: segments,
            isStatic: true,
            friction: options.friction ?? INKWAY_CONFIG.PHYSICS.drawnLineFriction,
            restitution: options.restitution ?? INKWAY_CONFIG.PHYSICS.drawnLineRestitution
        });

        return composite;
    }

    /**
     * Create a circle body.
     */
    function createCircle(x, y, radius, options = {}) {
        return Bodies.circle(x, y, radius, options);
    }

    function setPaused(paused) {
        _paused = paused;
    }

    function isPaused() {
        return _paused;
    }

    // ─── COLLISION EVENTS ───

    function onCollisionStart(callback) {
        if (_engine) Events.on(_engine, 'collisionStart', callback);
    }

    function onCollisionEnd(callback) {
        if (_engine) Events.on(_engine, 'collisionEnd', callback);
    }

    function offCollisionStart(callback) {
        if (_engine) Events.off(_engine, 'collisionStart', callback);
    }

    return {
        init, getEngine, getWorld,
        step, clear, setGravity,
        addBody, removeBody,
        addConstraint, removeConstraint,
        createRect, createPolygon, createPathBody, createCircle,
        setPaused, isPaused,
        onCollisionStart, onCollisionEnd, offCollisionStart
    };
})();
