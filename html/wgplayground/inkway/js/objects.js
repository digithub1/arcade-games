/**
 * INKWAY — Special Objects
 * ========================
 * All 10 interactable object types.
 * Each has: spawn, update, render, and collision behavior.
 */

window.INKWAY = window.INKWAY || {};

INKWAY.Objects = (function () {
    'use strict';

    const { dist, degToRad, lerp, randomRange } = INKWAY.Utils;

    let _objects = []; // Active objects in current level
    let _time = 0;

    function init() {
        INKWAY.Physics.onCollisionStart((event) => {
            const pairs = event.pairs;
            for (const pair of pairs) {
                const bodyA = pair.bodyA;
                const bodyB = pair.bodyB;
                
                const isVehicleA = ['chassis', 'wheel'].includes(bodyA.label);
                const isVehicleB = ['chassis', 'wheel'].includes(bodyB.label);
                
                if (!isVehicleA && !isVehicleB) continue;
                
                const hazardLabel = isVehicleA ? bodyB.label : bodyA.label;
                const hazardBody = isVehicleA ? bodyB : bodyA;

                if (hazardLabel === 'spike') {
                    INKWAY.Main.events.emit('vehicleSpike');
                    _triggerHazardFlash(hazardBody, 'spike');
                } else if (hazardLabel === 'lava_block') {
                    INKWAY.Main.events.emit('vehicleLava');
                    _triggerHazardFlash(hazardBody, 'lava_block');
                } else if (hazardLabel === 'spring_pad') {
                    _triggerSpringPad(hazardBody, isVehicleA ? bodyA : bodyB);
                } else if (hazardLabel === 'booster_pad') {
                    _triggerBoosterPad(hazardBody, isVehicleA ? bodyA : bodyB);
                } else if (hazardLabel === 'gravity_flip') {
                    // Handled via proximity check in updatePhysics to match editor
                } else if (hazardLabel === 'portal_in') {
                    _triggerPortalIn(hazardBody, isVehicleA ? bodyA : bodyB);
                } else if (hazardLabel === 'win_box') {
                    // Find the win box and trigger
                    const wb = _objects.find(o => o.type === 'win_box' && o.body === (isVehicleA ? bodyB : bodyA));
                    if (wb && wb.state !== 'triggered') {
                        wb.state = 'triggered';
                        wb.flashTimer = 300;
                        for (let i = 0; i < 8; i++) {
                            const ang = randomRange(0, Math.PI * 2);
                            const spd = randomRange(40, 80);
                            wb.particles.push({
                                x: wb.x, y: wb.y,
                                vx: Math.cos(ang) * spd,
                                vy: Math.sin(ang) * spd,
                                life: 1.0,
                                color: Math.random() > 0.5 ? '#27AE60' : '#F1C40F'
                            });
                        }
                        INKWAY.Audio?.playSound?.('win');
                        INKWAY.Main.events.emit('goalReached');
                    }
                }
            }
        });
    }

    function _triggerSpringPad(padBody, vehiclePart) {
        const chassis = INKWAY.Vehicle.getBody();
        if (!chassis) return;
        const wheels = INKWAY.Vehicle.getWheels?.() || [];
        
        for (const obj of _objects) {
            if (obj.type === 'spring_pad' && obj.body === padBody && obj.cooldown <= 0) {
                obj.cooldown = 0.5; // 500ms
                obj.state = 'compress';
                obj.animPhase = 0; // use phase as timer
                
                // Cancel current Y velocity of both chassis and wheels for a consistent bounce
                Matter.Body.setVelocity(chassis, { x: chassis.velocity.x, y: 0 });
                wheels.forEach(w => {
                    Matter.Body.setVelocity(w, { x: w.velocity.x, y: 0 });
                });

                const rad = degToRad(obj.angle - 90);
                const vx = Math.cos(rad) * obj.force * 45;
                const vy = Math.sin(rad) * obj.force * 45;
                
                Matter.Body.setVelocity(chassis, { x: chassis.velocity.x + vx, y: chassis.velocity.y + vy });
                wheels.forEach(w => {
                    Matter.Body.setVelocity(w, { x: w.velocity.x + vx, y: w.velocity.y + vy });
                });

                INKWAY.Audio?.playSound?.('spring');
            }
        }
    }

    function _updateGravityFlipPhysics(obj, dt) {
        if (obj.cooldown && obj.cooldown > 0) {
            obj.cooldown -= dt;
        }

        const chassis = INKWAY.Vehicle.getBody();
        if (!chassis) return;

        const dx = Math.abs(chassis.position.x - obj.x);
        const dy = Math.abs(chassis.position.y - obj.y);

        // Tight threshold: 20% of block dimensions, capped at 25px (exact editor match)
        const centerThresholdX = Math.min(25, obj.width * 0.2);
        const centerThresholdY = Math.min(25, obj.height * 0.2);

        if (dx < centerThresholdX && dy < centerThresholdY) {
            if (!obj.cooldown || obj.cooldown <= 0) {
                obj.cooldown = 1.0; // 1s cooldown to prevent double flip

                const engine = INKWAY.Physics.getEngine();
                if (engine) {
                    engine.gravity.y = -engine.gravity.y;
                    const isNowInverted = engine.gravity.y < 0;
                    INKWAY.Vehicle.setGravityInverted(isNowInverted);

                    const forwardVx = Math.max(2, Math.abs(chassis.velocity.x));
                    Matter.Body.setAngle(chassis, chassis.angle + Math.PI);
                    const liftY = isNowInverted ? -6 : 6;

                    Matter.Body.setVelocity(chassis, { x: forwardVx, y: liftY });

                    const wheels = INKWAY.Vehicle.getWheels?.() || [];
                    wheels.forEach(w => {
                        Matter.Body.setVelocity(w, { x: forwardVx, y: liftY });
                        Matter.Body.setAngularVelocity(w, isNowInverted ? -0.2 : 0.2);
                    });
                }
            }
        }
    }

    function _triggerPortalIn(padBody, vehiclePart) {
        for (const obj of _objects) {
            if ((obj.type === 'portal_in' || obj.type === 'portal') && obj.body === padBody && (!obj.cooldown || obj.cooldown <= 0)) {
                if (obj.exitX !== undefined && obj.exitY !== undefined) {
                    obj.cooldown = 1.0;
                    
                    const dx = obj.exitX - obj.x;
                    const dy = obj.exitY - obj.y;
                    
                    const chassis = INKWAY.Vehicle.getBody();
                    if (chassis) {
                        Matter.Body.setPosition(chassis, {
                            x: chassis.position.x + dx, y: chassis.position.y + dy
                        });
                        
                        const wheels = INKWAY.Vehicle.getWheels?.() || [];
                        wheels.forEach(w => {
                            Matter.Body.setPosition(w, {
                                x: w.position.x + dx, y: w.position.y + dy
                            });
                        });
                        
                        INKWAY.Audio?.playSound?.('portal');
                    }
                }
            }
        }
    }
    function _triggerBoosterPad(padBody, vehiclePart) {
        const chassis = INKWAY.Vehicle.getBody();
        if (!chassis) return;
        const wheels = INKWAY.Vehicle.getWheels?.() || [];

        for (const obj of _objects) {
            if (obj.type === 'booster_pad' && obj.body === padBody && obj.cooldown <= 0) {
                obj.cooldown = 0.6; // 600ms cooldown
                obj.flashTimer = 200;
                
                // Boost the chassis & wheels uniformly
                const rad = degToRad(obj.angle);
                const vx = Math.cos(rad) * obj.force * 120;
                const vy = Math.sin(rad) * obj.force * 120;
                
                // Reset X velocity to make boost consistent if we are moving slow
                if (Math.abs(chassis.velocity.x) < 5) {
                    Matter.Body.setVelocity(chassis, { x: chassis.velocity.x * 0.5, y: chassis.velocity.y });
                    wheels.forEach(w => {
                        Matter.Body.setVelocity(w, { x: w.velocity.x * 0.5, y: w.velocity.y });
                    });
                }
                
                Matter.Body.setVelocity(chassis, { x: chassis.velocity.x + vx, y: chassis.velocity.y + vy });
                wheels.forEach(w => {
                    Matter.Body.setVelocity(w, { x: w.velocity.x + vx, y: w.velocity.y + vy });
                });

                // Play SFX
                INKWAY.Audio?.playSound?.('booster');

                // Particle burst
                _createBoostParticles(obj);
            }
        }
    }

    function _createBoostParticles(obj) {
        const rad = degToRad(obj.angle);
        const cos = Math.cos(rad);
        const sin = Math.sin(rad);
        
        for (let i = 0; i < 6; i++) {
            const lx = randomRange(-obj.width / 2, obj.width / 2);
            const ly = randomRange(-10, 10);
            
            const px = obj.x + lx * cos - ly * sin;
            const py = obj.y + lx * sin + ly * cos;
            
            const spd = randomRange(150, 250);
            
            obj.particles.push({
                x: px,
                y: py,
                vx: cos * spd,
                vy: sin * spd,
                length: randomRange(15, 30),
                life: 1.0
            });
        }
    }

    function _triggerHazardFlash(body, type) {
        for (const obj of _objects) {
            if (obj.type === type && obj.body === body) {
                obj.flashTimer = 200;
            }
        }
    }

    /**
     * Spawn all objects for a level from its JSON data.
     */
    function spawnFromLevel(levelData) {
        clear();
        
        if (levelData.terrain) {
            for (const t of levelData.terrain) {
                if (t.type !== 'static_polygon') {
                    const spawned = _createObject(t);
                    if (spawned) _objects.push(spawned);
                }
            }
        }

        if (levelData.objects) {
            for (const obj of levelData.objects) {
                const spawned = _createObject(obj);
                if (spawned) _objects.push(spawned);
            }
        }

        // Auto-link portal_in and portal_out for absolute safety
        const pin = _objects.find(o => o.type === 'portal_in');
        const pout = _objects.find(o => o.type === 'portal_out');
        if (pin && pout) {
            pin.exitX = pout.x;
            pin.exitY = pout.y;
        }
    }

    function _createObject(data) {
        const handlers = {
            spring_pad: _createSpringPad,
            booster_pad: _createBoosterPad,
            toggle_block: _createToggleBlock,
            toggle_switch: _createToggleSwitch,
            rope: _createRope,
            magnet: _createMagnet,
            portal: _createPortal,
            portal_in: _createPortalIn,
            portal_out: _createPortalOut,
            crumble: _createCrumble,
            gravity_flip: _createGravityFlip,
            ink_drop: _createInkDrop,
            win_box: _createWinBox,
            goal: _createWinBox, // Legacy alias — old levels use 'goal' instead of 'win_box'
            ground_block: _createGroundBlock,
            platform: _createPlatform,
            spike: _createSpike,
            lava_block: _createLavaBlock
        };

        const handler = handlers[data.type];
        if (!handler) {
            console.warn(`[Objects] Unknown object type: ${data.type}`);
            return null;
        }

        return handler(data);
    }

    // ─── GROUND BLOCK ───
    function _createGroundBlock(data) {
        const body = INKWAY.Physics.createRect(
            data.x, data.y, data.width || 100, data.height || 40,
            { isStatic: true, label: 'ground_block', friction: 0.8, restitution: 0.05, angle: degToRad(data.angle || 0) }
        );
        INKWAY.Physics.addBody(body);

        return {
            type: 'ground_block',
            x: data.x, y: data.y,
            width: data.width || 100, height: data.height || 40,
            angle: data.angle || 0,
            body
        };
    }

    // ─── PLATFORM ───
    function _createPlatform(data) {
        const h = 20; // Fixed height
        const body = INKWAY.Physics.createRect(
            data.x, data.y, data.width || 100, h,
            { isStatic: true, label: 'platform', friction: 0.7, restitution: 0.05, angle: degToRad(data.angle || 0) }
        );
        INKWAY.Physics.addBody(body);

        return {
            type: 'platform',
            baseX: data.x, baseY: data.y,
            x: data.x, y: data.y,
            width: data.width || 100, height: h,
            angle: data.angle || 0,
            animPhase: randomRange(0, Math.PI * 2), // random start phase
            body
        };
    }

    // ─── SPIKE ───
    function _createSpike(data) {
        const w = data.width || 60;
        const h = data.height || 20;
        
        const body = INKWAY.Physics.createRect(
            data.x, data.y, w, h,
            { isStatic: true, label: 'spike', friction: 0.1, restitution: 0.1, angle: degToRad(data.angle || 0) }
        );
        INKWAY.Physics.addBody(body);

        return {
            type: 'spike',
            x: data.x, y: data.y,
            width: w, height: h,
            angle: data.angle || 0,
            animPhase: randomRange(0, Math.PI * 2),
            flashTimer: 0,
            body
        };
    }

    // ─── LAVA BLOCK ───
    function _createLavaBlock(data) {
        const w = data.width || 80;
        const h = data.height || 40;
        
        const body = INKWAY.Physics.createRect(
            data.x, data.y, w, h,
            { isStatic: true, label: 'lava_block', friction: 0.05, restitution: 0.2, angle: degToRad(data.angle || 0) }
        );
        INKWAY.Physics.addBody(body);

        // Generate some bubbles
        const bubbles = [];
        for (let i = 0; i < 5; i++) {
            bubbles.push({
                x: randomRange(-w/2 + 5, w/2 - 5),
                y: randomRange(0, h),
                speed: randomRange(10, 30),
                radius: randomRange(3, 7)
            });
        }

        return {
            type: 'lava_block',
            x: data.x, y: data.y,
            width: w, height: h,
            angle: data.angle || 0,
            animPhase: randomRange(0, Math.PI * 2),
            flashTimer: 0,
            bubbles,
            body
        };
    }

    // ─── SPRING PAD ───
    function _createSpringPad(data) {
        const body = INKWAY.Physics.createRect(
            data.x, data.y, data.width || 40, data.height || 35,
            { isStatic: true, label: 'spring_pad', isSensor: true, angle: degToRad(data.angle || 0) }
        );
        INKWAY.Physics.addBody(body);

        return {
            type: 'spring_pad',
            x: data.x, y: data.y,
            width: data.width || 40,
            height: data.height || 35,
            angle: data.angle || 0,
            force: data.force || 0.15,
            body,
            animPhase: 0,
            state: 'idle', // idle, compress, release
            cooldown: 0
        };
    }

    // ─── BOOSTER PAD ───
    function _createBoosterPad(data) {
        const body = INKWAY.Physics.createRect(
            data.x, data.y, data.width || 60, data.height || 20,
            { isStatic: true, label: 'booster_pad', isSensor: true, angle: degToRad(data.angle || 0) }
        );
        INKWAY.Physics.addBody(body);

        return {
            type: 'booster_pad',
            x: data.x, y: data.y,
            width: data.width || 60,
            height: data.height || 20,
            angle: data.angle || 0,
            force: data.force || 0.12,
            body,
            cooldown: 0,
            animPhase: randomRange(0, Math.PI * 2),
            flashTimer: 0,
            particles: []
        };
    }

    // ─── PORTAL IN / OUT ───
    function _createPortalIn(data) {
        const w = data.width || 40;
        const h = data.height || 60;
        const body = INKWAY.Physics.createRect(
            data.x, data.y, w, h,
            { isStatic: true, label: 'portal_in', isSensor: true }
        );
        INKWAY.Physics.addBody(body);

        return {
            type: 'portal_in',
            x: data.x, y: data.y,
            width: w, height: h,
            body,
            exitX: data.exitX, exitY: data.exitY,
            radius: data.radius || 30,
            exitAngle: data.exitAngle || 0,
            animPhase: randomRange(0, Math.PI * 2),
            cooldown: 0
        };
    }
    function _createPortalOut(data) {
        return {
            type: 'portal_out',
            x: data.x, y: data.y,
            width: data.width || 40,
            height: data.height || 60,
            radius: data.radius || 30,
            animPhase: randomRange(0, Math.PI * 2)
        };
    }

    // ─── TOGGLE BLOCK ───
    function _createToggleBlock(data) {
        const body = INKWAY.Physics.createRect(
            data.x, data.y, data.width || 60, data.height || 60,
            { isStatic: true, label: 'toggle_block' }
        );
        INKWAY.Physics.addBody(body);

        return {
            type: 'toggle_block',
            x: data.x, y: data.y,
            width: data.width || 60,
            height: data.height || 60,
            linkedSwitch: data.linkedSwitch,
            active: true,
            body
        };
    }

    // ─── TOGGLE SWITCH ───
    function _createToggleSwitch(data) {
        const body = INKWAY.Physics.createRect(
            data.x, data.y, 30, 10,
            { isStatic: true, label: 'toggle_switch', isSensor: true }
        );
        INKWAY.Physics.addBody(body);

        return {
            type: 'toggle_switch',
            x: data.x, y: data.y,
            linkedBlock: data.linkedBlock,
            pressed: false,
            body
        };
    }

    // ─── ROPE / PENDULUM ───
    function _createRope(data) {
        return {
            type: 'rope',
            anchorX: data.x, anchorY: data.y,
            length: data.length || 100,
            objectType: data.objectType || 'platform',
            cut: false,
            angle: 0,
            angularVel: 0
        };
    }

    // ─── MAGNET ───
    function _createMagnet(data) {
        return {
            type: 'magnet',
            x: data.x, y: data.y,
            polarity: data.polarity || 'attract', // 'attract' or 'repel'
            radius: data.radius || 150,
            force: data.force || 0.004
        };
    }

    // ─── PORTAL PAIR ───
    function _createPortal(data) {
        const w = data.width || 40;
        const h = data.height || 60;
        const body = INKWAY.Physics.createRect(
            data.x, data.y, w, h,
            { isStatic: true, label: 'portal_in', isSensor: true }
        );
        INKWAY.Physics.addBody(body);

        return {
            type: 'portal',
            x: data.x, y: data.y,
            width: w, height: h,
            body,
            exitX: data.exitX, exitY: data.exitY,
            radius: data.radius || 30,
            exitAngle: data.exitAngle || 0,
            animPhase: randomRange(0, Math.PI * 2),
            cooldown: 0
        };
    }

    // ─── CRUMBLE BLOCK ───
    function _createCrumble(data) {
        const body = INKWAY.Physics.createRect(
            data.x, data.y, data.width || 50, data.height || 20,
            { isStatic: true, label: 'crumble' }
        );
        INKWAY.Physics.addBody(body);

        return {
            type: 'crumble',
            x: data.x, y: data.y,
            width: data.width || 50,
            height: data.height || 20,
            body,
            touched: false,
            crumbleTimer: 0,
            crumbled: false
        };
    }

    // ─── GRAVITY FLIP ZONE ───
    function _createGravityFlip(data) {
        const w = data.width || 100;
        const h = data.height || 100;
        const body = INKWAY.Physics.createRect(
            data.x, data.y, w, h,
            { isStatic: true, label: 'gravity_flip', isSensor: true }
        );
        INKWAY.Physics.addBody(body);

        return {
            type: 'gravity_flip',
            x: data.x, y: data.y,
            width: w, height: h,
            body,
            cooldown: 0
        };
    }

    // ─── INK DROP ───
    function _createInkDrop(data) {
        return {
            type: 'ink_drop',
            x: data.x, y: data.y,
            value: data.value || 80,
            collected: false,
            animPhase: randomRange(0, Math.PI * 2)
        };
    }

    // ─── WIN BOX ───
    function _createWinBox(data) {
        const w = data.width || 80;
        const h = data.height || 80;
        const body = INKWAY.Physics.createRect(
            data.x, data.y, w, h,
            { isStatic: true, isSensor: true, label: 'win_box' }
        );
        INKWAY.Physics.addBody(body);

        return {
            type: 'win_box',
            x: data.x, y: data.y,
            width: w, height: h,
            body,
            state: 'idle',
            flashTimer: 0,
            particles: []
        };
    }

    // ─── UPDATE ───

    let _gravityFlipped = false;

    function updatePhysics(dt) {
        const vBody = INKWAY.Vehicle.getBody?.();
        const vPos = INKWAY.Vehicle.getPosition();
        const launched = INKWAY.Vehicle.isLaunched();

        for (const obj of _objects) {
            switch (obj.type) {
                case 'platform':
                    _updatePlatform(obj, dt);
                    break;
                case 'magnet':
                    _updateMagnet(obj, vBody, vPos, launched);
                    break;
                case 'gravity_flip':
                    _updateGravityFlipPhysics(obj, dt);
                    break;
                case 'portal':
                case 'portal_in':
                    if (obj.cooldown && obj.cooldown > 0) {
                        obj.cooldown -= dt;
                    }
                    break;
            }
        }
    }

    function update(dt) {
        _time += dt;

        for (const obj of _objects) {
            switch (obj.type) {
                case 'crumble':
                    _updateCrumble(obj, dt);
                    break;
                case 'spike':
                case 'lava_block':
                    if (obj.flashTimer > 0) obj.flashTimer -= dt * 1000;
                    if (obj.type === 'lava_block') _updateLavaBlock(obj, dt);
                    break;
                case 'spring_pad':
                    _updateSpringPad(obj, dt);
                    break;
                case 'booster_pad':
                    _updateBoosterPad(obj, dt);
                    break;
                case 'win_box':
                    _updateWinBox(obj, dt);
                    break;
            }
            // Animation phases
            if (obj.animPhase !== undefined) {
                obj.animPhase += dt * 2;
            }
        }
    }


    function _updatePlatform(obj, dt) {
        // 3-second loop => frequency = Math.PI * 2 / 3
        const freq = (Math.PI * 2) / 3;
        // The phase increases differently from generic animPhase, or we can just use generic animPhase and scale it.
        // generic animPhase increases by dt * 2. 
        // Let's do it exactly:
        
        // Use generic animPhase (increases by dt*2)
        // Actually, just use _time to make it independent of animPhase scaling.
        const bob = Math.sin(_time * freq + obj.animPhase) * 3;
        
        obj.x = obj.baseX;
        obj.y = obj.baseY + bob;

        if (obj.body) {
            // Keep existing rotation but update position
            Matter.Body.setPosition(obj.body, { x: obj.x, y: obj.y });
        }
    }

    function _updateFan(obj, vBody, vPos, launched) {
        if (!launched || !vBody) return;
        const rad = degToRad(obj.angle);
        const forceX = Math.cos(rad) * obj.force;
        const forceY = Math.sin(rad) * obj.force;

        const inX = vPos.x > obj.x - obj.width / 2 && vPos.x < obj.x + obj.width / 2;
        const inY = vPos.y > obj.y - obj.height / 2 && vPos.y < obj.y + obj.height / 2;

        if (inX && inY) {
            Matter.Body.applyForce(vBody, vBody.position, { x: forceX, y: forceY });
        }
    }

    function _updateMagnet(obj, vBody, vPos, launched) {
        if (!launched || !vBody) return;
        const d = dist(vPos.x, vPos.y, obj.x, obj.y);
        if (d > obj.radius || d < 1) return;

        const strength = obj.force * (1 - d / obj.radius);
        const dx = obj.x - vPos.x;
        const dy = obj.y - vPos.y;
        const nx = dx / d;
        const ny = dy / d;

        const sign = obj.polarity === 'attract' ? 1 : -1;
        Matter.Body.applyForce(vBody, vBody.position, {
            x: nx * strength * sign,
            y: ny * strength * sign
        });
    }

    function _updateWinBox(obj, dt) {
        if (obj.flashTimer > 0) obj.flashTimer -= dt * 1000;
        for (let i = obj.particles.length - 1; i >= 0; i--) {
            const p = obj.particles[i];
            p.x += p.vx * dt;
            p.y += p.vy * dt;
            p.life -= dt / 0.5; // 500ms life
            if (p.life <= 0) {
                obj.particles.splice(i, 1);
            }
        }
    }



    function _updateLavaBlock(obj, dt) {
        for (const b of obj.bubbles) {
            b.y -= b.speed * dt;
            if (b.y < -obj.height/2) {
                b.y = obj.height/2;
                b.x = randomRange(-obj.width/2 + 5, obj.width/2 - 5);
            }
        }
    }

    function _updateSpringPad(obj, dt) {
        if (obj.cooldown > 0) obj.cooldown -= dt;
        
        if (obj.state === 'compress') {
            obj.animPhase += dt; // time in state
            if (obj.animPhase >= 0.08) { // 80ms
                obj.state = 'release';
                obj.animPhase = 0;
            }
        } else if (obj.state === 'release') {
            obj.animPhase += dt;
            if (obj.animPhase >= 0.26) { // 60ms overshoot + 200ms settle = 260ms
                obj.state = 'idle';
                obj.animPhase = 0;
            }
        }
    }

    function _updateBoosterPad(obj, dt) {
        if (obj.cooldown > 0) obj.cooldown -= dt;
        if (obj.flashTimer > 0) obj.flashTimer -= dt * 1000;
        
        for (let i = obj.particles.length - 1; i >= 0; i--) {
            const p = obj.particles[i];
            p.x += p.vx * dt;
            p.y += p.vy * dt;
            p.life -= dt / 0.15; // 150ms life
            if (p.life <= 0) {
                obj.particles.splice(i, 1);
            }
        }
    }

    function _updateCrumble(obj, dt) {
        if (obj.touched && !obj.crumbled) {
            obj.crumbleTimer += dt * 1000;
            if (obj.crumbleTimer >= 800) {
                obj.crumbled = true;
                if (obj.body) {
                    INKWAY.Physics.removeBody(obj.body);
                    obj.body = null;
                }
            }
        }
    }

    // ─── COLLISION CHECKS (every frame during simulation) ───

    function checkVehicleCollisions(vehiclePos) {
        const vBody = INKWAY.Vehicle.getBody?.();

        for (const obj of _objects) {
            const d = dist(vehiclePos.x, vehiclePos.y, obj.x, obj.y);

            switch (obj.type) {
                case 'win_box':
                    if (d < obj.width / 2) {
                        INKWAY.Main.events.emit('goalReached');
                    }
                    break;

                case 'ink_drop':
                    if (!obj.collected && d < 30) {
                        obj.collected = true;
                        INKWAY.Main.events.emit('inkCollected', { amount: obj.value });
                        INKWAY.Audio?.playSound?.('collect');
                    }
                    break;

                case 'crumble':
                    if (!obj.touched) {
                        const chassis = INKWAY.Vehicle.getBody();
                        if (chassis) {
                            const dx = Math.abs(chassis.position.x - obj.x);
                            const dy = Math.abs(chassis.position.y - obj.y);
                            if (dx < (obj.width / 2 + 35) && dy < (obj.height / 2 + 15)) {
                                obj.touched = true;
                            }
                        }
                    }
                    break;

                case 'toggle_switch':
                    if (vBody && d < 25 && !obj.pressed) {
                        obj.pressed = true;
                        for (const other of _objects) {
                            if (other.type === 'toggle_block' &&
                                other.linkedSwitch === obj.linkedBlock ||
                                _objects.indexOf(other) === obj.linkedBlock) {
                                other.active = !other.active;
                                if (other.active && !other.body) {
                                    other.body = INKWAY.Physics.createRect(
                                        other.x, other.y,
                                        other.width, other.height,
                                        { isStatic: true, label: 'toggle_block' }
                                    );
                                    INKWAY.Physics.addBody(other.body);
                                } else if (!other.active && other.body) {
                                    INKWAY.Physics.removeBody(other.body);
                                    other.body = null;
                                }
                            }
                        }
                        INKWAY.Audio?.playSound?.('click');
                    }
                    break;


            }
        }
    }

    // ─── RENDER ───

    function render(ctx) {
        for (const obj of _objects) {
            _renderObject(ctx, obj);
        }
    }

    function _renderObject(ctx, obj) {
        ctx.save();

        switch (obj.type) {
            case 'spring_pad':
                _renderSpringPad(ctx, obj);
                break;
            case 'booster_pad':
                _renderBoosterPad(ctx, obj);
                break;
            case 'portal':
            case 'portal_in':
                _renderPortalIn(ctx, obj);
                break;
            case 'portal_out':
                _renderPortalOut(ctx, obj);
                break;
            case 'win_box':
                _renderWinBox(ctx, obj);
                break;
            case 'ink_drop':
                if (!obj.collected) _renderInkDrop(ctx, obj);
                break;
            case 'crumble':
                if (!obj.crumbled) _renderCrumble(ctx, obj);
                break;
            case 'magnet':
                _renderMagnet(ctx, obj);
                break;
            case 'toggle_block':
                _renderToggleBlock(ctx, obj);
                break;
            case 'gravity_flip':
                _renderGravityFlip(ctx, obj);
                break;
            case 'ground_block':
                _renderGroundBlock(ctx, obj);
                break;
            case 'platform':
                _renderPlatform(ctx, obj);
                break;
            case 'spike':
                _renderSpike(ctx, obj);
                break;
            case 'lava_block':
                _renderLavaBlock(ctx, obj);
                break;
            default:
                ctx.beginPath();
                ctx.arc(obj.x, obj.y, 10, 0, Math.PI * 2);
                ctx.fillStyle = '#888';
                ctx.fill();
        }

        ctx.restore();
    }

    function _renderWinBox(ctx, obj) {
        const w = obj.width;
        const h = obj.height;
        const hw = w / 2;
        const hh = h / 2;

        ctx.save();
        for (const p of obj.particles) {
            ctx.globalAlpha = p.life;
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, 3 + p.life*2, 0, Math.PI*2);
            ctx.fill();
        }
        ctx.restore();

        ctx.translate(obj.x, obj.y);

        const glowPulse = 0.1 + (Math.sin(_time * Math.PI * 2 / 1.8) + 1) / 2 * 0.2;
        ctx.shadowColor = `rgba(39, 174, 96, ${glowPulse})`;
        ctx.shadowBlur = 15;

        if (obj.flashTimer > 0) {
            const flashOp = obj.flashTimer / 300;
            ctx.fillStyle = `rgba(39, 174, 96, ${flashOp})`;
            ctx.fillRect(-hw, -hh, w, h);
        }

        const dashOffset = -(_time * 60);
        ctx.strokeStyle = '#27AE60';
        ctx.lineWidth = 3;
        ctx.setLineDash([10, 5]);
        ctx.lineDashOffset = dashOffset;
        INKWAY.Utils.drawSketchyRect(ctx, -hw, -hh, w, h, 2);
        ctx.stroke();
        
        ctx.setLineDash([]);
        ctx.shadowBlur = 0;

        ctx.save();
        const swayAngle = Math.sin(_time * Math.PI) * degToRad(3);
        ctx.rotate(swayAngle);
        ctx.translate(0, -10);
        
        const flagSize = 24;
        const sq = flagSize / 4;
        ctx.strokeStyle = '#1A1A2E';
        ctx.lineWidth = 1;
        for (let row = 0; row < 4; row++) {
            for (let col = 0; col < 4; col++) {
                ctx.fillStyle = ((row + col) % 2 === 0) ? '#1A1A2E' : '#FFFFFF';
                ctx.fillRect(-flagSize/2 + col*sq, -flagSize/2 + row*sq, sq, sq);
                INKWAY.Utils.drawSketchyRect(ctx, -flagSize/2 + col*sq, -flagSize/2 + row*sq, sq, sq, 0.5);
                ctx.stroke();
            }
        }
        ctx.restore();

        ctx.font = 'bold 16px "Caveat"';
        ctx.fillStyle = '#27AE60';
        ctx.textAlign = 'center';
        ctx.fillText('FINISH', 0, hh - 10);
    }

    function _renderGroundBlock(ctx, obj) {
        ctx.translate(obj.x, obj.y);
        ctx.rotate(degToRad(obj.angle));
        
        const w = obj.width;
        const h = obj.height;
        const hw = w / 2;
        const hh = h / 2;

        // Fill background
        ctx.fillStyle = '#D4C9A8';
        INKWAY.Utils.drawSketchyRect(ctx, -hw, -hh, w, h, 2);
        ctx.fill();

        // Hatch lines
        ctx.save();
        ctx.beginPath();
        ctx.rect(-hw, -hh, w, h);
        ctx.clip();
        ctx.strokeStyle = '#BFB495';
        ctx.lineWidth = 1;
        const diagDist = Math.sqrt(w*w + h*h);
        for (let i = -diagDist; i < diagDist; i += 8) {
            INKWAY.Utils.drawSketchyLine(ctx, i, -hh, i + h, hh, 0.5);
        }
        ctx.restore();

        // Top surface darker strip
        ctx.fillStyle = '#C4B898';
        ctx.fillRect(-hw, -hh, w, 4);

        // Thick outline
        ctx.strokeStyle = '#1A1A2E';
        ctx.lineWidth = 3;
        INKWAY.Utils.drawSketchyRect(ctx, -hw, -hh, w, h, 2);
        ctx.stroke();
    }

    function _renderPlatform(ctx, obj) {
        ctx.translate(obj.x, obj.y);
        ctx.rotate(degToRad(obj.angle));
        
        const w = obj.width;
        const h = obj.height;
        const hw = w / 2;
        const hh = h / 2;

        // 1. Draw dashed shadow beneath (3px below)
        ctx.save();
        ctx.translate(0, 3);
        ctx.strokeStyle = 'rgba(26, 26, 46, 0.3)';
        ctx.lineWidth = 2;
        ctx.setLineDash([4, 4]);
        INKWAY.Utils.drawSketchyLine(ctx, -hw + 5, hh + 2, hw - 5, hh + 2, 1);
        ctx.restore();

        // 2. Draw two short vertical support lines underneath
        ctx.strokeStyle = '#1A1A2E';
        ctx.lineWidth = 2;
        ctx.setLineDash([]);
        INKWAY.Utils.drawSketchyLine(ctx, -hw + 15, hh, -hw + 15, hh + 6, 1);
        INKWAY.Utils.drawSketchyLine(ctx, hw - 15, hh, hw - 15, hh + 6, 1);

        // 3. Draw platform body
        ctx.fillStyle = '#E8DFC8';
        INKWAY.Utils.drawSketchyRect(ctx, -hw, -hh, w, h, 2);
        ctx.fill();

        // Hatch lines
        ctx.save();
        ctx.beginPath(); ctx.rect(-hw, -hh, w, h); ctx.clip();
        ctx.strokeStyle = '#D1C8B3';
        ctx.lineWidth = 1;
        const diagDist = Math.sqrt(w*w + h*h);
        for (let i = -diagDist; i < diagDist; i += 8) {
            INKWAY.Utils.drawSketchyLine(ctx, i, -hh, i + h, hh, 0.5);
        }
        ctx.restore();

        // Top surface darker strip
        ctx.fillStyle = '#C4B898';
        ctx.fillRect(-hw, -hh, w, 3);

        // Thick outline
        ctx.strokeStyle = '#1A1A2E';
        ctx.lineWidth = 3;
        INKWAY.Utils.drawSketchyRect(ctx, -hw, -hh, w, h, 2);
        ctx.stroke();
    }
    function _renderSpike(ctx, obj) {
        ctx.translate(obj.x, obj.y);
        ctx.rotate(degToRad(obj.angle));
        
        const w = obj.width;
        const h = obj.height;
        const hw = w / 2;
        const hh = h / 2;
        
        // Glow halo
        const haloOpacity = 0.1 + (Math.sin(_time * (Math.PI * 2 / 1.5) + obj.animPhase) + 1) / 2 * 0.15;
        const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, Math.max(w, h) + 20);
        grad.addColorStop(0, `rgba(192, 57, 43, ${haloOpacity})`);
        grad.addColorStop(1, 'rgba(192, 57, 43, 0)');
        ctx.fillStyle = grad;
        ctx.fillRect(-hw - 20, -hh - 20, w + 40, h + 40);

        // Draw spikes
        const numSpikes = Math.max(3, Math.floor(w / 15));
        const spikeW = w / numSpikes;
        
        let fillColor = '#C0392B';
        if (obj.flashTimer > 0) {
            fillColor = obj.flashTimer > 100 ? '#FFFFFF' : '#FF0000';
        }
        ctx.fillStyle = fillColor;
        ctx.strokeStyle = '#1A1A2E';
        ctx.lineWidth = 2;

        for (let i = 0; i < numSpikes; i++) {
            const sx = -hw + i * spikeW;
            const verts = [
                {x: sx, y: hh},
                {x: sx + spikeW, y: hh},
                {x: sx + spikeW/2, y: -hh}
            ];
            ctx.beginPath();
            ctx.moveTo(verts[0].x, verts[0].y);
            ctx.lineTo(verts[1].x, verts[1].y);
            ctx.lineTo(verts[2].x, verts[2].y);
            ctx.closePath();
            ctx.fill();
            INKWAY.Utils.drawSketchyPolygon(ctx, verts, 1.5);
        }

        // Tiny "danger" symbol
        ctx.fillStyle = '#C0392B';
        ctx.font = 'bold 10px "Caveat"';
        ctx.textAlign = 'center';
        ctx.fillText('✕', 0, -hh - 5);
    }

    function _renderLavaBlock(ctx, obj) {
        ctx.translate(obj.x, obj.y);
        ctx.rotate(degToRad(obj.angle));
        
        const w = obj.width;
        const h = obj.height;
        const hw = w / 2;
        const hh = h / 2;

        const brightBob = Math.sin(_time * Math.PI + obj.animPhase) * 8;
        
        if (obj.flashTimer > 0) {
            ctx.filter = 'brightness(200%)';
        } else {
            ctx.filter = `brightness(${100 + brightBob}%)`;
        }

        // Wavy top edge drawn as sketchy polygon
        const wavePts = [];
        wavePts.push({x: -hw, y: hh});
        wavePts.push({x: hw, y: hh});
        wavePts.push({x: hw, y: -hh});
        for (let x = hw; x >= -hw; x -= 4) {
            const yOffset = Math.sin((x + _time * 20) * Math.PI * 2 / 30) * 4;
            wavePts.push({x: x, y: -hh + yOffset});
        }
        
        ctx.fillStyle = '#E74C3C';
        ctx.beginPath();
        ctx.moveTo(wavePts[0].x, wavePts[0].y);
        for(let i=1; i<wavePts.length; i++) ctx.lineTo(wavePts[i].x, wavePts[i].y);
        ctx.closePath();
        ctx.fill();

        // Bubbles
        ctx.save();
        ctx.clip();
        ctx.fillStyle = 'rgba(255, 200, 0, 0.6)';
        for (const b of obj.bubbles) {
            INKWAY.Utils.drawSketchyCircle(ctx, b.x, b.y, b.radius, 0.5);
            ctx.fill();
        }
        ctx.restore();

        // Thick outline
        ctx.strokeStyle = '#1A1A2E';
        ctx.lineWidth = 3;
        INKWAY.Utils.drawSketchyPolygon(ctx, wavePts, 0.5);
        
        ctx.filter = 'none';
    }

    function _renderSpringPad(ctx, obj) {
        ctx.translate(obj.x, obj.y);
        ctx.rotate(degToRad(obj.angle));
        
        const w = obj.width;
        const h = obj.height;
        const hw = w / 2;
        const hh = h / 2;

        let scaleY = 1.0;
        let particlesOpacity = 0;
        
        if (obj.state === 'idle') {
            scaleY = 1.0 + Math.sin(_time * Math.PI) * 0.08;
        } else if (obj.state === 'compress') {
            const p = Math.min(obj.animPhase / 0.08, 1.0);
            scaleY = 1.0 - (p * 0.7);
        } else if (obj.state === 'release') {
            if (obj.animPhase < 0.06) {
                const p = obj.animPhase / 0.06;
                scaleY = 0.3 + (p * 1.1);
                particlesOpacity = 1.0 - p;
            } else {
                const p = (obj.animPhase - 0.06) / 0.2;
                const damp = Math.cos(p * Math.PI * 4) * (1 - p);
                scaleY = 1.0 + (0.4 * damp);
            }
        }

        // Draw Base
        ctx.fillStyle = '#7F8C8D';
        ctx.fillRect(-hw, hh - 8, w, 8);
        ctx.strokeStyle = '#1A1A2E';
        ctx.lineWidth = 2;
        INKWAY.Utils.drawSketchyRect(ctx, -hw, hh - 8, w, 8, 1);
        ctx.stroke();

        // Spring body scaled
        const springH = (h - 16) * scaleY;
        const springTopY = hh - 8 - springH;
        
        ctx.strokeStyle = '#2C3E50';
        ctx.lineWidth = 3;
        
        const numCoils = 4;
        const step = springH / numCoils;
        for (let i = 0; i < numCoils; i++) {
            const by = hh - 8 - i * step;
            const ty = hh - 8 - (i+1) * step;
            INKWAY.Utils.drawSketchyLine(ctx, -hw + 5, by, hw - 5, (by+ty)/2, 1.5);
            INKWAY.Utils.drawSketchyLine(ctx, hw - 5, (by+ty)/2, -hw + 5, ty, 1.5);
        }

        // Top plate
        ctx.fillStyle = '#2C3E50';
        ctx.fillRect(-hw - 2, springTopY - 4, w + 4, 4);
        ctx.strokeStyle = '#1A1A2E';
        ctx.lineWidth = 2;
        INKWAY.Utils.drawSketchyRect(ctx, -hw - 2, springTopY - 4, w + 4, 4, 1);
        ctx.stroke();

        // Speed lines particles (draw if released)
        if (particlesOpacity > 0) {
            ctx.strokeStyle = `rgba(44, 62, 80, ${particlesOpacity})`;
            ctx.lineWidth = 2;
            for (let i = 0; i < 4; i++) {
                const ang = -Math.PI/2 + (i - 1.5) * 0.4;
                const d1 = 10 + (1-particlesOpacity)*30;
                const d2 = d1 + 20 + i*10;
                INKWAY.Utils.drawSketchyLine(ctx, Math.cos(ang)*d1, springTopY + Math.sin(ang)*d1, Math.cos(ang)*d2, springTopY + Math.sin(ang)*d2, 1);
            }
        }
    }

    function _renderBoosterPad(ctx, obj) {
        ctx.translate(obj.x, obj.y);
        ctx.rotate(degToRad(obj.angle));
        
        // Render Particles
        ctx.save();
        ctx.translate(-obj.x, -obj.y);
        ctx.rotate(-degToRad(obj.angle));
        for (const p of obj.particles) {
            ctx.strokeStyle = `rgba(243, 156, 18, ${p.life})`;
            ctx.lineWidth = 2;
            INKWAY.Utils.drawSketchyLine(ctx, p.x, p.y, p.x + p.length, p.y, 1);
        }
        ctx.restore();

        // Pad visuals
        const glowOp = 0.15 * (obj.flashTimer > 0 ? (obj.flashTimer/200) : 1);
        const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, 40);
        grad.addColorStop(0, `rgba(243, 156, 18, ${glowOp})`);
        grad.addColorStop(1, 'rgba(243, 156, 18, 0)');
        ctx.fillStyle = grad;
        ctx.fillRect(-50, -30, 100, 60);

        // Flash
        if (obj.flashTimer > 0) {
            const op = (obj.flashTimer / 200) * 0.8;
            ctx.fillStyle = `rgba(243, 156, 18, ${op})`;
            ctx.fillRect(-30, -10, 60, 20);
        }

        // Two chevron arrows (>> shape)
        const step = Math.floor(_time / 0.4) % 2;
        
        const drawChevron = (ox, isGlowing) => {
            const verts = [
                {x: ox - 10, y: -8},
                {x: ox + 5, y: 0},
                {x: ox - 10, y: 8},
                {x: ox - 4, y: 0}
            ];
            ctx.fillStyle = isGlowing ? '#F1C40F' : '#F39C12';
            ctx.beginPath();
            ctx.moveTo(verts[0].x, verts[0].y);
            ctx.lineTo(verts[1].x, verts[1].y);
            ctx.lineTo(verts[2].x, verts[2].y);
            ctx.lineTo(verts[3].x, verts[3].y);
            ctx.closePath();
            ctx.fill();
            ctx.strokeStyle = '#1A1A2E';
            ctx.lineWidth = 2;
            INKWAY.Utils.drawSketchyPolygon(ctx, verts, 1);
        };

        drawChevron(-10, step === 0 && obj.flashTimer === 0);
        drawChevron(10, step === 1 && obj.flashTimer === 0);

        // Surrounding speed lines
        const lineOp = 0.4 + Math.sin(_time * Math.PI / 0.4) * 0.2;
        ctx.strokeStyle = `rgba(243, 156, 18, ${lineOp})`;
        ctx.setLineDash([8, 8]);
        ctx.lineWidth = 2;
        INKWAY.Utils.drawSketchyLine(ctx, -35, -12, 35, -12, 1);
        INKWAY.Utils.drawSketchyLine(ctx, -35, 12, 35, 12, 1);
        ctx.setLineDash([]);
    }

    function _renderPortalIn(ctx, obj) {
        ctx.translate(obj.x, obj.y);
        
        // Entry Portal (Blue)
        ctx.fillStyle = 'rgba(52, 152, 219, 0.15)';
        ctx.strokeStyle = '#3498DB';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.ellipse(0, 0, 20, 30, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Swirling vortex animation inside portal!
        ctx.strokeStyle = '#3498DB';
        ctx.lineWidth = 1.5;
        const phase = (obj.animPhase || 0) * 5;
        for (let i = 0; i < 3; i++) {
            ctx.save();
            ctx.rotate(phase + (i * Math.PI / 3));
            ctx.beginPath();
            ctx.ellipse(0, 0, 14, 9, 0, 0, Math.PI * 2);
            ctx.stroke();
            ctx.restore();
        }
        
        // Connection line if exit defined
        if (obj.exitX !== undefined && obj.exitY !== undefined) {
            ctx.restore();
            ctx.save();
            ctx.strokeStyle = 'rgba(230, 126, 34, 0.2)';
            ctx.lineWidth = 2;
            ctx.setLineDash([4, 4]);
            ctx.beginPath();
            ctx.moveTo(obj.x, obj.y);
            ctx.lineTo(obj.exitX, obj.exitY);
            ctx.stroke();
            ctx.setLineDash([]);
            
            // For legacy 'portal' type, also draw the exit orange swirl right here
            if (obj.type === 'portal') {
                ctx.translate(obj.exitX, obj.exitY);
                ctx.fillStyle = 'rgba(230, 126, 34, 0.15)';
                ctx.strokeStyle = '#E67E22';
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.ellipse(0, 0, 20, 30, 0, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();
                
                // Swirl
                ctx.strokeStyle = '#E67E22';
                ctx.lineWidth = 1.5;
                for (let i = 0; i < 3; i++) {
                    ctx.save();
                    ctx.rotate(phase + (i * Math.PI / 3));
                    ctx.beginPath();
                    ctx.ellipse(0, 0, 14, 9, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.restore();
                }
            }
        }
    }

    function _renderPortalOut(ctx, obj) {
        ctx.translate(obj.x, obj.y);
        
        // Exit Portal (Orange)
        ctx.fillStyle = 'rgba(230, 126, 34, 0.15)';
        ctx.strokeStyle = '#E67E22';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.ellipse(0, 0, 20, 30, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Swirling vortex animation inside portal (Orange)
        ctx.strokeStyle = '#E67E22';
        ctx.lineWidth = 1.5;
        const phase = (obj.animPhase || 0) * 5;
        for (let i = 0; i < 3; i++) {
            ctx.save();
            ctx.rotate(phase + (i * Math.PI / 3));
            ctx.beginPath();
            ctx.ellipse(0, 0, 14, 9, 0, 0, Math.PI * 2);
            ctx.stroke();
            ctx.restore();
        }
    }

    function _renderGoal(ctx, obj) {
        const bob = Math.sin(obj.animPhase * 2) * 4;
        // Flag pole
        ctx.strokeStyle = '#666';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(obj.x, obj.y + 20);
        ctx.lineTo(obj.x, obj.y - 25 + bob);
        ctx.stroke();
        // Flag
        ctx.fillStyle = '#3D8B37';
        ctx.beginPath();
        ctx.moveTo(obj.x, obj.y - 25 + bob);
        ctx.lineTo(obj.x + 20, obj.y - 18 + bob);
        ctx.lineTo(obj.x, obj.y - 11 + bob);
        ctx.closePath();
        ctx.fill();
        // Glow circle
        ctx.beginPath();
        ctx.arc(obj.x, obj.y, obj.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(61, 139, 55, 0.08)';
        ctx.fill();
        ctx.strokeStyle = 'rgba(61, 139, 55, 0.25)';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4, 4]);
        ctx.stroke();
        ctx.setLineDash([]);
    }

    function _renderInkDrop(ctx, obj) {
        const bob = Math.sin(obj.animPhase * 3) * 3;
        ctx.translate(obj.x, obj.y + bob);
        // Ink drop shape
        ctx.beginPath();
        ctx.moveTo(0, -10);
        ctx.bezierCurveTo(8, -2, 8, 6, 0, 10);
        ctx.bezierCurveTo(-8, 6, -8, -2, 0, -10);
        ctx.fillStyle = '#1A1A2E';
        ctx.fill();
        ctx.strokeStyle = '#2A2A4E';
        ctx.lineWidth = 1;
        ctx.stroke();
        // Highlight
        ctx.beginPath();
        ctx.arc(-2, -3, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,0.4)';
        ctx.fill();
    }

    function _renderCrumble(ctx, obj) {
        const shake = obj.touched ? randomRange(-1.5, 1.5) : 0;
        ctx.translate(obj.x + shake, obj.y + shake);
        ctx.fillStyle = '#8B7355';
        ctx.strokeStyle = '#6B5535';
        ctx.lineWidth = 1.5;
        ctx.fillRect(-obj.width / 2, -obj.height / 2, obj.width, obj.height);
        ctx.strokeRect(-obj.width / 2, -obj.height / 2, obj.width, obj.height);
        // Crack lines
        ctx.strokeStyle = '#5A4530';
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.moveTo(-obj.width * 0.3, -obj.height / 2);
        ctx.lineTo(0, obj.height * 0.2);
        ctx.lineTo(obj.width * 0.2, obj.height / 2);
        ctx.stroke();
    }

    function _renderMagnet(ctx, obj) {
        ctx.translate(obj.x, obj.y);
        const color = obj.polarity === 'attract' ? '#4A90E2' : '#D94040';
        // U-shape magnet
        ctx.strokeStyle = color;
        ctx.lineWidth = 6;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.arc(0, 0, 15, 0, Math.PI);
        ctx.stroke();
        // Prongs
        ctx.beginPath();
        ctx.moveTo(-15, 0);
        ctx.lineTo(-15, -12);
        ctx.moveTo(15, 0);
        ctx.lineTo(15, -12);
        ctx.stroke();
        // Field lines
        ctx.strokeStyle = color + '30';
        ctx.lineWidth = 1;
        ctx.setLineDash([3, 5]);
        ctx.beginPath();
        ctx.arc(0, 5, obj.radius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
    }

    function _renderToggleBlock(ctx, obj) {
        const alpha = obj.active ? 1 : 0.25;
        ctx.globalAlpha = alpha;
        ctx.fillStyle = '#6A5ACD';
        ctx.strokeStyle = '#4B3DAD';
        ctx.lineWidth = 2;
        ctx.fillRect(obj.x - obj.width / 2, obj.y - obj.height / 2, obj.width, obj.height);
        ctx.strokeRect(obj.x - obj.width / 2, obj.y - obj.height / 2, obj.width, obj.height);
        ctx.globalAlpha = 1;
    }


    function _renderGravityFlip(ctx, obj) {
        const w = obj.width || 100;
        const h = obj.height || 100;
        const hw = w / 2;
        const hh = h / 2;

        ctx.translate(obj.x, obj.y);

        // Draw dashed bounds in purple sketchy style
        ctx.strokeStyle = '#9B59B6';
        ctx.lineWidth = 2;
        ctx.setLineDash([6, 4]);
        INKWAY.Utils.drawSketchyRect(ctx, -hw, -hh, w, h, 2);
        ctx.stroke();
        ctx.setLineDash([]);
        
        // Translucent purple background
        ctx.fillStyle = 'rgba(155, 89, 182, 0.1)';
        ctx.fillRect(-hw, -hh, w, h);
        
        // Up and down arrow indicators
        ctx.strokeStyle = '#9B59B6';
        ctx.lineWidth = 3;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        // Up arrow
        ctx.beginPath();
        ctx.moveTo(-15, 10); ctx.lineTo(-15, -10);
        ctx.lineTo(-20, -5); ctx.moveTo(-15, -10); ctx.lineTo(-10, -5);
        ctx.stroke();
        // Down arrow
        ctx.beginPath();
        ctx.moveTo(15, -10); ctx.lineTo(15, 10);
        ctx.lineTo(10, 5); ctx.moveTo(15, 10); ctx.lineTo(20, 5);
        ctx.stroke();
    }

    function clear() {
        for (const obj of _objects) {
            if (obj.body) INKWAY.Physics.removeBody(obj.body);
        }
        _objects = [];
        _time = 0;
        _gravityFlipped = false;
        
        // Reset gravity to default (positive = downward) on level clear/restart
        const engine = INKWAY.Physics.getEngine();
        if (engine && engine.gravity.y < 0) {
            engine.gravity.y = Math.abs(engine.gravity.y);
        }
        
        // Reset vehicle gravity state
        INKWAY.Vehicle.setGravityInverted?.(false);
    }

    function getObjects() { return _objects; }

    return {
        init, spawnFromLevel, update, updatePhysics, render, clear,
        checkVehicleCollisions, getObjects
    };
})();
