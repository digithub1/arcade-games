/**
 * INKWAY — Vehicle System
 * =======================
 * Vehicle types, physics bodies, motor control, camera follow.
 */

window.INKWAY = window.INKWAY || {};

INKWAY.Vehicle = (function () {
    'use strict';

    const { lerp, clamp } = INKWAY.Utils;

    let _body = null;       // Main chassis body
    let _wheels = [];       // Wheel bodies (rear = 0, front = 1)
    let _constraints = [];  // Axle constraints
    let _isLaunched = false;
    let _chassisRenderOffset = { x: 0, y: 0 };
    let _stuckTimer = 0;
    let _lastPos = { x: 0, y: 0 };
    let _engineOff = false;
    let _gravityInverted = false;
    let _time = 0;
    let _exhaustTimer = 0;
    let _particles = [];

    const DEF = {
        chassisW: 65, chassisH: 20,
        wheelRadius: 14, wheelOffset: 22,
        chassisDensity: 0.003, chassisFriction: 0.4, chassisRestitution: 0.02,
        wheelDensity: 0.004, wheelFriction: 1.2, wheelRestitution: 0.05,
        motorTorque: 0.025
    };

    function init() {
    }

    /**
     * Spawn the vehicle at position (x, y).
     */
    function spawn(x, y) {
        const { Bodies, Constraint, Body } = Matter;

        destroy(); // Clear previous

        // All vehicle parts share the same negative group so they never collide with each other
        const filter = { group: Body.nextGroup(true) };

        const basePart = Bodies.rectangle(x, y - 8, DEF.chassisW, DEF.chassisH, {
            density: DEF.chassisDensity,
            friction: DEF.chassisFriction,
            restitution: DEF.chassisRestitution,
            collisionFilter: filter
        });
        
        const cabinPart = Bodies.rectangle(x - 5, y - 8 - 14, 42, 18, {
            density: DEF.chassisDensity,
            friction: DEF.chassisFriction,
            restitution: DEF.chassisRestitution,
            collisionFilter: filter
        });

        const chassis = Body.create({
            parts: [basePart, cabinPart],
            label: 'chassis',
            collisionFilter: filter
        });

        _chassisRenderOffset = {
            x: x - chassis.position.x,
            y: (y - 8) - chassis.position.y
        };

        const wheelY = y + DEF.wheelRadius * 0.4;
        const wheelRear = Bodies.circle(x - DEF.wheelOffset, wheelY, DEF.wheelRadius, {
            density: DEF.wheelDensity,
            friction: DEF.wheelFriction,
            restitution: DEF.wheelRestitution,
            label: 'wheel',
            collisionFilter: filter
        });

        const wheelFront = Bodies.circle(x + DEF.wheelOffset, wheelY, DEF.wheelRadius, {
            density: DEF.wheelDensity,
            friction: DEF.wheelFriction,
            restitution: DEF.wheelRestitution,
            label: 'wheel',
            collisionFilter: filter
        });

        const rearWheelWorld = { x: x - DEF.wheelOffset, y: wheelY };
        const frontWheelWorld = { x: x + DEF.wheelOffset, y: wheelY };
        
        const rearLocal = {
            x: rearWheelWorld.x - chassis.position.x,
            y: rearWheelWorld.y - chassis.position.y
        };
        const frontLocal = {
            x: frontWheelWorld.x - chassis.position.x,
            y: frontWheelWorld.y - chassis.position.y
        };

        // Stiff axle constraints — length 0 keeps chassis perfectly rigid on top of wheels
        const axleRear = Constraint.create({
            bodyA: chassis,
            pointA: rearLocal,
            bodyB: wheelRear,
            pointB: { x: 0, y: 0 },
            stiffness: 1.0,
            length: 0
        });

        const axleFront = Constraint.create({
            bodyA: chassis,
            pointA: frontLocal,
            bodyB: wheelFront,
            pointB: { x: 0, y: 0 },
            stiffness: 1.0,
            length: 0
        });

        _body = chassis;
        _wheels = [wheelRear, wheelFront];
        _constraints = [axleRear, axleFront];

        INKWAY.Physics.addBody(chassis);
        INKWAY.Physics.addBody(wheelRear);
        INKWAY.Physics.addBody(wheelFront);
        INKWAY.Physics.addConstraint(axleRear);
        INKWAY.Physics.addConstraint(axleFront);

        _isLaunched = false;
        _stuckTimer = 0;
        _lastPos = { x, y };
        _time = 0;
        _exhaustTimer = 0;
        _particles = [];
    }

    /**
     * Launch the vehicle — start applying motor force.
     */
    function launch() {
        if (!_body) return;
        _isLaunched = true;
        _stuckTimer = 0;
        _lastPos = { x: _body.position.x, y: _body.position.y };

        // Give initial rightward velocity (gentler when engine is off)
        const startVx = _engineOff ? 0.3 : 2;
        Matter.Body.setVelocity(_body, { x: startVx, y: 0 });
    }

    /**
     * Update vehicle motor and check stuck/fall conditions.
     * Called every frame during simulation.
     */
    function update(dt) {
        if (!_body) return;
        _time += dt;

        // Exhaust particles & Fail particles
        for (let i = _particles.length - 1; i >= 0; i--) {
            const p = _particles[i];
            if (p.type === 'fail') {
                p.x += p.vx * dt;
                p.y += p.vy * dt;
                p.angle += p.vr * dt;
                p.life -= dt / 0.4;
            } else {
                p.life -= dt / 0.4;
                p.radius = 4 + (1 - p.life) * 8; // expands to 12
            }
            if (p.life <= 0) _particles.splice(i, 1);
        }

        if (!_isLaunched) return;

        const isAirborne = _body.velocity.y > 2 || _body.velocity.y < -2;

        if (!isAirborne && !_engineOff) {
            _exhaustTimer += dt;
            if (_exhaustTimer > 0.6) {
                _exhaustTimer = 0;
                const rad = _body.angle;
                const ex = _body.position.x - Math.cos(rad) * (DEF.chassisW/2 + 5) + Math.sin(rad) * (DEF.chassisH/2);
                const ey = _body.position.y - Math.sin(rad) * (DEF.chassisW/2 + 5) - Math.cos(rad) * (DEF.chassisH/2);
                _particles.push({ x: ex, y: ey, life: 1.0, radius: 4 });
            }
        }
    }

    /**
     * Update vehicle physics (applied before/during every physics step).
     */
    function updatePhysics(dt) {
        if (!_body || !_isLaunched) return;

        const isAirborne = _body.velocity.y > 2 || _body.velocity.y < -2;

        // When engine is off, reduce wheel friction so the car freewheels / slides on slopes
        if (_engineOff && _wheels.length >= 2) {
            _wheels.forEach(w => {
                w.friction = 0.05;      // Nearly frictionless — let gravity do the work
                w.frictionStatic = 0.02;
            });
        } else if (_wheels.length >= 2) {
            // Restore normal friction when engine is on
            _wheels.forEach(w => {
                w.friction = DEF.wheelFriction;
                w.frictionStatic = DEF.wheelFriction;
            });
        }

        if (isAirborne) {
            // Slight tilt correction in air
            const velAngle = Math.atan2(_body.velocity.y, _body.velocity.x);
            const angDiff = velAngle - _body.angle;
            Matter.Body.setAngularVelocity(_body, _body.angularVelocity + clamp(angDiff * 0.01, -0.05, 0.05));
        }

        if (!_engineOff) {
            const motorForce = 0.003;
            const targetAngle = _gravityInverted ? Math.PI : 0;
            const relativeAngle = _body.angle - targetAngle;
            const fx = Math.cos(relativeAngle) * motorForce;
            const fy = Math.sin(relativeAngle) * motorForce;
            Matter.Body.applyForce(_body, _body.position, { x: fx, y: fy });
            
            // Spin wheels visually (purely cosmetic — actual drive is from chassis force)
            const wheelSpin = _gravityInverted ? -0.015 : 0.015;
            _wheels.forEach(w => {
                // Gently push wheel spin toward target, don't override
                if (Math.abs(w.angularVelocity) < 0.3) {
                    Matter.Body.setAngularVelocity(w, w.angularVelocity + wheelSpin);
                }
            });
        }

        // Gentle self-righting torque to prevent flipping (only when engine is ON)
        // When engine is off, let the car tilt freely so it follows the slope
        if (!_engineOff) {
            const targetAngle = _gravityInverted ? Math.PI : 0;
            let angleDiff = _body.angle - targetAngle;
            // Normalize angle difference to [-PI, PI]
            while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
            while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;
            _body.torque += -angleDiff * 0.003;
        }

        // Check if stuck
        const dx = _body.position.x - _lastPos.x;
        const dy = _body.position.y - _lastPos.y;
        const moved = Math.sqrt(dx * dx + dy * dy);

        if (moved < 0.5) {
            _stuckTimer += dt * 1000;
        } else {
            _stuckTimer = 0;
        }
        _lastPos = { x: _body.position.x, y: _body.position.y };

        // Emit stuck event
        if (_stuckTimer >= INKWAY_CONFIG.STUCK_TIMEOUT_MS) {
            INKWAY.Main.events.emit('vehicleStuck');
            _stuckTimer = 0;
        }

        // Check if fell off screen (including upward when gravity is inverted)
        if (_body.position.y > 2000 || _body.position.y < -1000 || _body.position.x < -500) {
            INKWAY.Main.events.emit('vehicleFell');
        }
    }

    /**
     * Get vehicle position for camera following.
     */
    function getPosition() {
        if (!_body) return { x: 0, y: 0 };
        return { x: _body.position.x, y: _body.position.y };
    }

    function getVelocity() {
        if (!_body) return { x: 0, y: 0 };
        return _body.velocity;
    }

    function isLaunched() {
        return _isLaunched;
    }

    function render(ctx) {
        if (!_body) return;

        ctx.save();

        // Particles
        for (const p of _particles) {
            if (p.type === 'fail') {
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate(p.angle);
                ctx.globalAlpha = p.life;
                ctx.fillStyle = '#1A1A2E';
                ctx.font = 'bold 16px "Caveat", cursive';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText('×', 0, 0);
                ctx.restore();
            } else {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(150, 150, 150, ${p.life * 0.5})`;
                ctx.fill();
            }
        }

        // Idle bounce
        let bounceY = 0;
        if (!_isLaunched) {
            bounceY = Math.sin(_time * Math.PI * 2 / 0.8) * 2;
        }

        _drawCar(ctx, _body, _wheels, bounceY, DEF);

        ctx.restore(); // Restore outermost render save
    }

    /**
     * Shared car drawing — exact VW Beetle profile from reference image.
     * Called from render() and also exported for editor use.
     *
     * Physics layout:
     *   chassis = 65×20 rect, wheels at x ± 22, wheelRadius = 14
     *   wheelY ≈ chassisY + 14 (below chassis center)
     */
    function _drawCar(ctx, body, wheels, bounceY, def) {
        const wr = def.wheelRadius;

        // ─── DRAW WHEELS (behind chassis) ───
        for (const wheel of wheels) {
            ctx.save();
            ctx.translate(wheel.position.x, wheel.position.y + bounceY * 0.3);
            // Invert visual angle when gravity is inverted so wheels spin clockwise (forward)
            const drawAngle = _gravityInverted ? -wheel.angle : wheel.angle;
            ctx.rotate(drawAngle);
            _drawWheel(ctx, wr + 1.5);
            ctx.restore();
        }

        // ─── DRAW CHASSIS (on top of wheels) ───
        ctx.save();
        ctx.translate(body.position.x, body.position.y + bounceY);
        ctx.rotate(body.angle);
        
        // Flip horizontally if gravity is inverted to offset the 180deg flip
        const engine = INKWAY.Physics.getEngine();
        const isGravityInverted = engine && engine.gravity.y < 0;
        if (isGravityInverted) {
            ctx.scale(-1, 1);
        }
        
        ctx.translate(_chassisRenderOffset.x, _chassisRenderOffset.y); // Dynamic alignment

        _drawBody(ctx);

        ctx.restore(); // chassis transform
    }

    /** Draw one wheel — dark tire, silver rim, dark inner, black hub, 5 bolts */
    function _drawWheel(ctx, r) {
        // Outer tire
        ctx.fillStyle = '#444';
        ctx.strokeStyle = '#222';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.arc(0, 0, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Silver rim
        ctx.fillStyle = '#bbb';
        ctx.strokeStyle = '#555';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(0, 0, r * 0.68, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Dark inner ring
        ctx.fillStyle = '#666';
        ctx.strokeStyle = '#444';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(0, 0, r * 0.45, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Black center hub
        ctx.fillStyle = '#222';
        ctx.beginPath();
        ctx.arc(0, 0, r * 0.2, 0, Math.PI * 2);
        ctx.fill();

        // 5 bolt circles
        ctx.fillStyle = '#999';
        for (let i = 0; i < 5; i++) {
            const a = i * Math.PI * 2 / 5 - Math.PI / 2;
            ctx.beginPath();
            ctx.arc(Math.cos(a) * r * 0.33, Math.sin(a) * r * 0.33, 1.5, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    /**
     * Draw the Beetle body — coordinates designed to fit the physics body.
     * Physics chassis: 65×20, centered at (0,0).
     * Wheels at x=±22 with radius 14.
     * Wheel wells centered at (±22, 14) with radius 16.
     * Body extends ~42px left, ~46px right, ~40px up, ~14px down from chassis center.
     */
    function _drawBody(ctx) {
        const OL = 2.5; // outline thickness

        // ─── MAIN BODY SHAPE ───
        ctx.fillStyle = '#cc2222';
        ctx.strokeStyle = '#222';
        ctx.lineWidth = OL;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';

        ctx.beginPath();
        // Start at rear bottom
        ctx.moveTo(-40, 14);
        // Rear bumper going up
        ctx.lineTo(-42, 8);
        // Rear rises up with distinctive tall Beetle curve
        ctx.bezierCurveTo(-42, -5, -38, -18, -28, -28);
        // Rear roof corner
        ctx.bezierCurveTo(-22, -33, -14, -35, -6, -35);
        // Flat roof
        ctx.lineTo(8, -35);
        // Front roof slopes down (windshield pillar)
        ctx.bezierCurveTo(14, -35, 18, -32, 22, -24);
        // Front windshield down to hood
        ctx.bezierCurveTo(24, -18, 26, -12, 28, -8);
        // Front hood - flat lower section
        ctx.bezierCurveTo(32, -8, 36, -8, 40, -6);
        // Front nose curves down
        ctx.bezierCurveTo(44, -4, 46, 0, 46, 4);
        // Front bottom
        ctx.bezierCurveTo(46, 10, 44, 14, 40, 14);
        // Bottom: front wheel well
        ctx.lineTo(34, 14);
        ctx.arc(22, 14, 16, 0, Math.PI, true);  // front wheel arch at x=22
        ctx.lineTo(-10, 14);
        // Bottom: rear wheel well
        ctx.arc(-22, 14, 16, 0, Math.PI, true);  // rear wheel arch at x=-22
        ctx.lineTo(-40, 14);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // ─── FENDER ARCHES (thick curves over wheel wells) ───
        ctx.strokeStyle = '#222';
        ctx.lineWidth = OL + 1.5;
        // Rear fender arch
        ctx.beginPath();
        ctx.arc(-22, 14, 17, 0, Math.PI, true);
        ctx.stroke();
        // Front fender arch
        ctx.beginPath();
        ctx.arc(22, 14, 17, 0, Math.PI, true);
        ctx.stroke();

        // ─── BODY LINE between arches ───
        ctx.lineWidth = OL;
        ctx.beginPath();
        ctx.moveTo(-6, 11);
        ctx.lineTo(6, 11);
        ctx.stroke();

        // ─── WINDOWS ───
        const wg = ctx.createLinearGradient(0, -32, 0, -6);
        wg.addColorStop(0, '#ddf0f8');
        wg.addColorStop(0.5, '#b5dff0');
        wg.addColorStop(1, '#8dc8e0');
        ctx.fillStyle = wg;
        ctx.strokeStyle = '#222';
        ctx.lineWidth = 2;

        // REAR window (taller, curved left edge)
        ctx.beginPath();
        ctx.moveTo(-24, -10);
        ctx.lineTo(-4, -10);
        ctx.lineTo(-4, -30);
        ctx.bezierCurveTo(-12, -30, -20, -26, -24, -10);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // FRONT window (slopes forward at top)
        ctx.beginPath();
        ctx.moveTo(2, -10);
        ctx.lineTo(22, -10);
        ctx.bezierCurveTo(20, -26, 12, -30, 2, -30);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // ─── DOOR HANDLE ───
        ctx.fillStyle = '#888';
        ctx.strokeStyle = '#222';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(-3, 2, 8, 3, 1.5);
        ctx.fill();
        ctx.stroke();

        // ─── HEADLIGHT (front — white oval) ───
        ctx.fillStyle = '#ffe';
        ctx.strokeStyle = '#222';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.ellipse(43, 3, 4, 6, 0.1, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // ─── TAILLIGHT (rear — orange oval) ───
        ctx.fillStyle = '#e89020';
        ctx.strokeStyle = '#222';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.ellipse(-40, 2, 3, 5, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // ─── FRONT BUMPER ───
        ctx.fillStyle = '#666';
        ctx.strokeStyle = '#222';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(42, 10, 5, 4, 2);
        ctx.fill();
        ctx.stroke();

        // ─── REAR BUMPER ───
        ctx.beginPath();
        ctx.roundRect(-47, 10, 5, 4, 2);
        ctx.fill();
        ctx.stroke();

        // ─── EXHAUST PIPE ───
        ctx.fillStyle = '#444';
        ctx.fillRect(-48, 14, 6, 2);
    }

    /** Helper: draw a rounded rectangle path */
    function _roundRect(ctx, x, y, w, h, r) {
        ctx.beginPath();
        ctx.moveTo(x + r, y);
        ctx.lineTo(x + w - r, y);
        ctx.quadraticCurveTo(x + w, y, x + w, y + r);
        ctx.lineTo(x + w, y + h - r);
        ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
        ctx.lineTo(x + r, y + h);
        ctx.quadraticCurveTo(x, y + h, x, y + h - r);
        ctx.lineTo(x, y + r);
        ctx.quadraticCurveTo(x, y, x + r, y);
        ctx.closePath();
    }

    function addFailParticles() {
        if (!_body) return;
        for (let i = 0; i < 8; i++) {
            const ang = Math.random() * Math.PI * 2;
            const spd = Math.random() * 60 + 40;
            _particles.push({
                type: 'fail',
                x: _body.position.x, y: _body.position.y,
                vx: Math.cos(ang) * spd, vy: Math.sin(ang) * spd,
                vr: (Math.random() - 0.5) * 10,
                angle: Math.random() * Math.PI * 2,
                life: 1.0, radius: 4
            });
        }
    }

    function destroy() {
        if (_body) INKWAY.Physics.removeBody(_body);
        for (const w of _wheels) INKWAY.Physics.removeBody(w);
        for (const c of _constraints) INKWAY.Physics.removeConstraint(c);
        _body = null;
        _wheels = [];
        _constraints = [];
        _isLaunched = false;
    }

    function setType(type) {
        // vehicle types disabled for classic single-car doodle style
    }

    function getType() {
        return 'classic';
    }

    function setEngineOff(off) { _engineOff = off; }
    function setGravityInverted(inv) { _gravityInverted = inv; }
    function isGravityInverted() { return _gravityInverted; }

    function getBody() { return _body; }

    function getWheels() { return _wheels; }

    return {
        init, spawn, launch, update, updatePhysics, render, destroy,
        getPosition, getVelocity, isLaunched,
        getBody, getWheels, setType, getType, setEngineOff,
        setGravityInverted, isGravityInverted, addFailParticles
    };
})();
