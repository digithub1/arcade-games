


class Arrow {
    constructor(x, y, target, params) {
        this.x = x;
        this.y = y;
        this.target = target;
        
        
        if (typeof params === 'number') {
            
            this.damage = params;
            this.speed = arguments[4] || 10;
            this.type = arguments[5] || 'normal';
            this.isCrit = arguments[6] || false;
            this.vampirismChance = 0;
            this.vampirismAmount = 0;
            this.piercing = false;
        } else {
            this.damage = params.damage || 0;
            this.speed = params.speed || 10;
            this.type = params.type || 'normal';
            this.isCrit = params.isCrit || false;
            this.vampirismChance = params.vampirismChance || 0;
            this.vampirismAmount = params.vampirismAmount || 0;
            this.piercing = params.piercing || false;
            this.noHoming = Boolean(params.noHoming);
            this.maxDistance = params.maxDistance || 260;
        }

        this.markedForDeletion = false;
        this.trail = [];
        
        if (this.noHoming && typeof params === 'object' && typeof params.angle === 'number') {
            this.angle = params.angle;
        } else {
            const safeTarget = target || { x: x + 1, y };
            const dx = safeTarget.x - x;
            const dy = safeTarget.y - y;
            this.angle = Math.atan2(dy, dx);
        }

        this.traveledDistance = 0;
        
        this.setupByType();
    }
    
    setupByType() {
        
        
        switch(this.type) {
            case 'explosive':
                this.color = '#e74c3c';
                this.glowColor = '#c0392b';
                this.explosionRadius = 120; 
                break;
            case 'heavy':
                this.color = '#8e44ad';
                this.glowColor = '#6c3483';
                break;
            case 'smoke':
                this.color = '#7f8c8d';
                this.glowColor = '#95a5a6';
                break;
            default:
                this.color = '#f39c12';
                this.glowColor = '#f1c40f';
        }
    }

    update(waveManager, deltaTime = 16.6) {
        const gameSpeed = (typeof Game !== 'undefined' && Game.gameSpeed) ? Game.gameSpeed : 1;
        const safeDeltaTime = Number.isFinite(deltaTime) ? Math.max(0, deltaTime) : 16.6;
        const dtScale = safeDeltaTime / 16.6;
        const adjustedSpeed = this.speed * dtScale * gameSpeed;
        const hitDistance = this.speed * Math.max(1, dtScale * gameSpeed) + 10;
        
        this.trail.push({ x: this.x, y: this.y });
        if (this.trail.length > 3) this.trail.shift();

        if (this.noHoming) {
            this.x += Math.cos(this.angle) * adjustedSpeed;
            this.y += Math.sin(this.angle) * adjustedSpeed;
            this.traveledDistance += adjustedSpeed;

            const enemies = waveManager.enemies || [];
            let closestEnemy = null;
            let closestDist = Infinity;

            for (let i = 0; i < enemies.length; i++) {
                const enemy = enemies[i];
                if (!enemy || enemy.markedForDeletion) continue;
                const dx = enemy.x - this.x;
                const dy = enemy.y - this.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < hitDistance && dist < closestDist) {
                    closestDist = dist;
                    closestEnemy = enemy;
                }
            }

            if (closestEnemy) {
                this.target = closestEnemy;
                this.hit(waveManager);
                return;
            }

            const canvas = (typeof Game !== 'undefined' && Game.canvas) ? Game.canvas : null;
            const outOfBounds = canvas
                ? (this.x < -60 || this.x > canvas.width + 60 || this.y < -60 || this.y > canvas.height + 60)
                : false;

            if (this.traveledDistance >= this.maxDistance || outOfBounds) {
                this.markedForDeletion = true;
            }

            return;
        }

        if (!this.target || this.target.markedForDeletion) {
            this.markedForDeletion = true;
            return;
        }

        const speedScale = Math.max(1, dtScale * gameSpeed);
        const substeps = Math.max(1, Math.min(6, Math.ceil(adjustedSpeed / 12)));
        const stepDistance = adjustedSpeed / substeps;

        for (let step = 0; step < substeps; step++) {
            if (!this.target || this.target.markedForDeletion) {
                this.markedForDeletion = true;
                return;
            }

            const dxToTarget = this.target.x - this.x;
            const dyToTarget = this.target.y - this.y;
            const targetRadius = Number(this.target.radius) || 0;
            const directDistance = Math.sqrt(dxToTarget * dxToTarget + dyToTarget * dyToTarget);
            const instantHitRadius = Math.max(10, hitDistance * 0.5 + targetRadius * 0.5);

            if (directDistance <= instantHitRadius + stepDistance) {
                if (this.isCrit && typeof Game !== 'undefined') {
                    Game.createCritFlashEffect(this.x, this.y);
                }
                this.hit(waveManager);
                return;
            }

            const targetAngle = Math.atan2(dyToTarget, dxToTarget);
            let angleDiff = targetAngle - this.angle;
            while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
            while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;

            const stepScale = speedScale / substeps;
            const turnRate = Math.min(0.85, 0.2 * Math.max(1, stepScale));
            const maxTurnPerStep = Math.min(Math.PI, 0.55 * Math.max(1, stepScale));
            const turnDelta = Math.max(-maxTurnPerStep, Math.min(maxTurnPerStep, angleDiff * turnRate));
            this.angle += turnDelta;

            const prevX = this.x;
            const prevY = this.y;
            this.x += Math.cos(this.angle) * stepDistance;
            this.y += Math.sin(this.angle) * stepDistance;

            const collisionRadius = Math.max(10, hitDistance * 0.5 + targetRadius * 0.5);
            const passedThroughTarget = this.segmentIntersectsCircle(
                prevX,
                prevY,
                this.x,
                this.y,
                this.target.x,
                this.target.y,
                collisionRadius
            );

            if (passedThroughTarget) {
                if (this.isCrit && typeof Game !== 'undefined') {
                    Game.createCritFlashEffect(this.x, this.y);
                }
                this.hit(waveManager);
                return;
            }
        }
    }

    segmentIntersectsCircle(x1, y1, x2, y2, cx, cy, radius) {
        const vx = x2 - x1;
        const vy = y2 - y1;
        const segLenSq = vx * vx + vy * vy;

        if (segLenSq <= 0) {
            const px = cx - x1;
            const py = cy - y1;
            return (px * px + py * py) <= radius * radius;
        }

        const t = Math.max(0, Math.min(1, ((cx - x1) * vx + (cy - y1) * vy) / segLenSq));
        const closestX = x1 + vx * t;
        const closestY = y1 + vy * t;
        const dx = cx - closestX;
        const dy = cy - closestY;
        return (dx * dx + dy * dy) <= radius * radius;
    }

    




    _handleKillResult(result, actualDamage) {
        if (result && result.killed) {
            
            Game.onEnemyKilled(result.reward, result.x, result.y, result.isBoss);
        }
        
        if (Game.tower && actualDamage > 0) {
            const modifiedVampChance = (Game.upgradeEffects && Game.upgradeEffects.getModifiedChance)
                ? Game.upgradeEffects.getModifiedChance(this.vampirismChance, 'vampirism')
                : this.vampirismChance;

            if (modifiedVampChance > 0 && Math.random() < modifiedVampChance) {
                const healAmount = (typeof Game.tower.getVampirismHealAmount === 'function')
                    ? Game.tower.getVampirismHealAmount(actualDamage, this.vampirismAmount)
                    : (actualDamage * this.vampirismAmount);
                Game.tower.heal(healAmount);
                const displayHeal = healAmount < 1 ? healAmount.toFixed(1) : Math.floor(healAmount);
                Game.createFloatingText(Game.tower.x, Game.tower.y - 30, `+${displayHeal} ❤️`, '#e74c3c');
            }
        }
    }

    playImpactSound() {
        if (typeof AudioManager === 'undefined' || typeof AudioManager.playSound !== 'function') {
            return;
        }

        AudioManager.playSound(this.isCrit ? 'arrowCrit' : 'arrowHit');
    }

    hit(waveManager) {
        
        if (this.piercing) {
            
            if (this.hitEnemies && this.hitEnemies.has(this.target)) {
                return; 
            }
            
            
            if (this.hitEnemies) {
                this.hitEnemies.add(this.target);
            }
            
            
            const result = this.target.takeDamage(this.damage);
            this.playImpactSound();
            
            
            if (Game.upgradeEffects) {
                Game.upgradeEffects.onArrowHit(this, this.target);
            }
            
            this._handleKillResult(result, this.damage);
            Game.createHitEffect(this.x, this.y, this.isCrit);
            
            
            this.findNextTarget(waveManager);
            return;
        }
        
        
        this.markedForDeletion = true;
        this.playImpactSound();
        
        switch(this.type) {
            case 'explosive':
                this.explode(waveManager);
                break;
            case 'smoke': {
                if (typeof AudioManager !== 'undefined' && typeof AudioManager.playSound === 'function') {
                    AudioManager.playSound('smokeDeploy');
                }

                
                const smokeRadius = 100;
                if (!this._cachedTargetsArray) this._cachedTargetsArray = [];
                waveManager.getEnemiesInRange(this.x, this.y, smokeRadius, this._cachedTargetsArray);
                for (let i = 0; i < this._cachedTargetsArray.length; i++) {
                    const enemy = this._cachedTargetsArray[i];
                    const res = enemy.takeDamage(this.damage);
                    enemy.slowTimer = Math.max(enemy.slowTimer || 0, 180); 
                    enemy.slowFactor = 0.5; 
                    this._handleKillResult(res, this.damage);
                }
                Game.createSmokeEffect(this.x, this.y, smokeRadius);
                break;
            }
            case 'heavy': {
                const heavyResult = this.target.takeDamage(this.damage); 
                this._handleKillResult(heavyResult, this.damage);
                break;
            }
            default: {
                const result = this.target.takeDamage(this.damage);
                
                
                if (Game.upgradeEffects) {
                    Game.upgradeEffects.onArrowHit(this, this.target);
                }
                
                this._handleKillResult(result, this.damage);
            }
        }
        
        Game.createHitEffect(this.x, this.y, this.isCrit);
    }
    
    findNextTarget(waveManager) {
        
        const enemies = waveManager.enemies;
        let closest = null;
        let closestDist = Infinity;
        
        enemies.forEach(enemy => {
            
            if (enemy === this.target || (this.hitEnemies && this.hitEnemies.has(enemy))) return;
            if (enemy.markedForDeletion) return;
            
            const dx = enemy.x - this.x;
            const dy = enemy.y - this.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            
            const enemyAngle = Math.atan2(dy, dx);
            const angleDiff = Math.abs(enemyAngle - this.angle);
            const normalizedDiff = Math.min(angleDiff, Math.PI * 2 - angleDiff);
            
            if (dist < 200 && normalizedDiff < Math.PI / 3) { 
                if (dist < closestDist) {
                    closestDist = dist;
                    closest = enemy;
                }
            }
        });
        
        if (closest) {
            this.target = closest;
        } else {
            
            this.markedForDeletion = true;
        }
    }
    
    explode(waveManager) {
        if (typeof AudioManager !== 'undefined' && typeof AudioManager.playSound === 'function') {
            AudioManager.playSound('explosiveImpact');
        }

        if (!this._cachedTargetsArray) this._cachedTargetsArray = [];
        waveManager.getEnemiesInRange(this.x, this.y, this.explosionRadius, this._cachedTargetsArray);
        for (let i = 0; i < this._cachedTargetsArray.length; i++) {
            const enemy = this._cachedTargetsArray[i];
            const result = enemy.takeDamage(this.damage); 
            this._handleKillResult(result, this.damage);
        }
        Game.createExplosionEffect(this.x, this.y, this.explosionRadius);
    }

    draw(ctx) {
        ctx.save();
        
        for (let i = 0; i < this.trail.length; i++) {
            const alpha = (i / this.trail.length) * 0.4;
            ctx.beginPath();
            ctx.arc(this.trail[i].x, this.trail[i].y, 2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(200, 200, 200, ${alpha})`;
            ctx.fill();
        }
        
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        
        const length = 25;
        const width = 6;
        
        ctx.shadowBlur = 8;
        ctx.shadowColor = this.glowColor;
        
        ctx.beginPath();
        ctx.moveTo(length, 0);
        ctx.lineTo(length - 10, -width/2);
        ctx.lineTo(length - 10, width/2);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
        
        ctx.beginPath();
        ctx.moveTo(length - 10, -width/4);
        ctx.lineTo(-length/2, -width/4);
        ctx.lineTo(-length/2, width/4);
        ctx.lineTo(length - 10, width/4);
        ctx.closePath();
        ctx.fillStyle = this.getShaftColor();
        ctx.fill();
        
        ctx.beginPath();
        ctx.moveTo(-length/2, -width);
        ctx.lineTo(-length, -width/2);
        ctx.lineTo(-length, width/2);
        ctx.lineTo(-length/2, width);
        ctx.closePath();
        ctx.fillStyle = this.getFletchingColor();
        ctx.fill();
        
        ctx.shadowBlur = 0;
        ctx.restore();
    }
    
    getShaftColor() {
        switch(this.type) {
            case 'explosive': return '#c0392b';
            case 'heavy': return '#5d6d7e';
            case 'smoke': return '#7f8c8d';
            default: return '#8b4513';
        }
    }
    
    getFletchingColor() {
        switch(this.type) {
            case 'explosive': return '#e74c3c';
            case 'heavy': return '#9b59b6';
            case 'smoke': return '#95a5a6';
            default: return '#f39c12';
        }
    }
}




class ExplosionEffect {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.currentRadius = 10;
        this.alpha = 1;
        this.markedForDeletion = false;
        this.particles = [];
        
        for (let i = 0; i < 12; i++) {
            const angle = (Math.PI * 2 / 12) * i;
            this.particles.push({
                x: x, y: y,
                vx: Math.cos(angle) * (Math.random() * 4 + 2),
                vy: Math.sin(angle) * (Math.random() * 4 + 2),
                life: 1, size: Math.random() * 5 + 3
            });
        }
    }

    update(gameSpeed = 1) {
        this.currentRadius += 3 * gameSpeed;
        this.alpha -= 0.03 * gameSpeed;
        if (this.alpha <= 0) this.markedForDeletion = true;
        
        this.particles.forEach(p => {
            p.x += p.vx * gameSpeed; 
            p.y += p.vy * gameSpeed;
            p.life -= 0.02 * gameSpeed; 
            p.size *= 0.98;
        });
    }

    draw(ctx) {
        ctx.save();
        ctx.globalAlpha = this.alpha * 0.5;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = '#e74c3c'; ctx.fill();
        
        ctx.globalAlpha = this.alpha;
        this.particles.forEach(p => {
            if (p.life > 0) {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(241, 196, 15, ${p.life})`;
                ctx.fill();
            }
        });
        ctx.restore();
    }
}




class SmokeEffect {
    constructor(x, y, radius) {
        this.x = x; this.y = y; this.radius = radius;
        this.life = 300; this.markedForDeletion = false;
        this.particles = [];
        
        for (let i = 0; i < 20; i++) {
            this.particles.push({
                x: x + (Math.random() - 0.5) * radius,
                y: y + (Math.random() - 0.5) * radius,
                vx: (Math.random() - 0.5) * 0.5,
                vy: -Math.random() * 0.5 - 0.2,
                size: Math.random() * 15 + 10,
                alpha: Math.random() * 0.4 + 0.3
            });
        }
    }

    update(gameSpeed = 1) {
        this.life -= gameSpeed;
        if (this.life <= 0) this.markedForDeletion = true;
        
        const lifePercent = this.life / 300;
        this.particles.forEach(p => {
            p.x += p.vx * gameSpeed; 
            p.y += p.vy * gameSpeed;
            p.size += 0.1 * gameSpeed; 
            p.alpha = lifePercent * 0.4;
        });
    }

    draw(ctx) {
        ctx.save();
        this.particles.forEach(p => {
            ctx.globalAlpha = p.alpha;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = '#7f8c8d'; ctx.fill();
        });
        ctx.restore();
    }
}




class IceExplosionEffect {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.currentRadius = 0;
        this.maxRadius = radius;
        this.alpha = 1;
        this.markedForDeletion = false;
        this.particles = [];
        
        
        const particleCount = Math.floor(radius / 10) + 8;
        for (let i = 0; i < particleCount; i++) {
            const angle = (Math.PI * 2 / particleCount) * i;
            const speed = Math.random() * 2 + 1;
            this.particles.push({
                x: x,
                y: y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                life: 1,
                size: Math.random() * 4 + 2,
                rotation: Math.random() * Math.PI * 2
            });
        }
    }

    update(gameSpeed = 1) {
        
        this.currentRadius += 4 * gameSpeed;
        this.alpha -= 0.04 * gameSpeed;
        
        if (this.alpha <= 0) {
            this.markedForDeletion = true;
        }
        
        
        this.particles.forEach(p => {
            p.x += p.vx * gameSpeed;
            p.y += p.vy * gameSpeed;
            p.life -= 0.025 * gameSpeed;
            p.size *= 0.97;
            p.rotation += 0.1 * gameSpeed;
        });
    }

    draw(ctx) {
        ctx.save();
        
        
        ctx.globalAlpha = this.alpha * 0.4;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = '#3498db';
        ctx.fill();
        
        
        ctx.globalAlpha = this.alpha * 0.8;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.currentRadius, 0, Math.PI * 2);
        ctx.strokeStyle = '#5dade2';
        ctx.lineWidth = 3;
        ctx.stroke();
        
        
        ctx.globalAlpha = this.alpha;
        this.particles.forEach(p => {
            if (p.life > 0) {
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate(p.rotation);
                
                
                ctx.beginPath();
                ctx.moveTo(0, -p.size);
                ctx.lineTo(p.size * 0.6, 0);
                ctx.lineTo(0, p.size);
                ctx.lineTo(-p.size * 0.6, 0);
                ctx.closePath();
                ctx.fillStyle = `rgba(174, 214, 241, ${p.life})`;
                ctx.fill();
                
                ctx.restore();
            }
        });
        
        ctx.restore();
    }
}
