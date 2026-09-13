




class UpgradeEffects {
    constructor(game) {
        this.game = game;
        
        
        this.arrowCounter = 0; 
        this.killStreak = 0; 
        this.lastKillTime = 0; 
        
        
        this.auraTimer = 0;
        this.auraInterval = 1000; 
        
        
        this.crowdControlTimer = 0;

        
        this.killStreakBuffUntil = 0;
        this.killStreakAttackSpeedBoost = 0;
        this.killStreakDamageBoost = 0;
        
        
        this.gasClouds = [];
        this.lastGasCloudAt = 0;

        
        this.crowdControlImmunity = new WeakMap();
        
        
        this.lastStandActive = false;
        this.lastStandStartedAt = 0;
        this.lastStandCooldownUntil = 0;
    }

    



    processDamageResult(result) {
        if (!result || !result.killed) return;
        if (typeof Game !== 'undefined' && typeof Game.onEnemyKilled === 'function') {
            Game.onEnemyKilled(result.reward, result.x, result.y, result.isBoss);
        }
    }

    update(deltaTime) {
        this.updateAuras(deltaTime);
        this.updateGasClouds(deltaTime);
        this.updateCrowdControl(deltaTime);
        this.checkLastStand();
        this.checkKillStreakReset();
    }

    
    
    updateAuras(deltaTime) {
        this.auraTimer += deltaTime;
        
        if (this.auraTimer >= this.auraInterval) {
            this.auraTimer = 0;
            
            if (!this.game.tower) return;
            
            const tower = this.game.tower;
            
            
            if (tower.frostAura) {
                this.applyFrostAura(tower.frostAura);
            }
            
            
            if (tower.fireAura) {
                this.applyFireAura(tower.fireAura);
            }
        }
    }

    applyFrostAura(frostAura) {
        const enemies = this.game.waveManager.enemies;
        
        enemies.forEach(enemy => {
            const dx = enemy.x - this.game.tower.x;
            const dy = enemy.y - this.game.tower.y;
            const distSq = dx * dx + dy * dy;
            
            if (distSq <= frostAura.radius * frostAura.radius) {
                
                
                enemy.slowFactor = Math.min(enemy.slowFactor || 1.0, 1 - frostAura.slowPercent);
                enemy.slowTimer = Math.max(enemy.slowTimer || 0, 65);
                enemy.frostEffect = true;
            } else if (enemy.frostEffect) {
                enemy.frostEffect = false;
            }
        });
    }

    applyFireAura(fireAura) {
        const enemies = this.game.waveManager.enemies;
        const tower = this.game.tower;
        const maxTargets = Math.max(1, Number(fireAura.maxTargets) || 4);
        const candidates = [];
        
        enemies.forEach(enemy => {
            if (!enemy || enemy.markedForDeletion) {
                return;
            }
            const dx = enemy.x - tower.x;
            const dy = enemy.y - tower.y;
            const distSq = dx * dx + dy * dy;
            
            if (distSq <= fireAura.radius * fireAura.radius) {
                candidates.push({ enemy, distSq });
            }
        });

        candidates.sort((a, b) => a.distSq - b.distSq);

        for (let i = 0; i < candidates.length && i < maxTargets; i++) {
            const enemy = candidates[i].enemy;
            const result = enemy.takeDamage(fireAura.damage);
            this.processDamageResult(result);

            
            this.game.createHitEffect(enemy.x, enemy.y, false);
        }
    }

    

    createGasCloud(x, y, gasData) {
        const now = Date.now();
        if (now - this.lastGasCloudAt < 120) {
            return;
        }
        this.lastGasCloudAt = now;

        this.gasClouds.push({
            x,
            y,
            radius: gasData.radius,
            slowPercent: gasData.slowPercent,
            endTime: now + (gasData.duration * 1000)
        });

        if (this.gasClouds.length > 14) {
            this.gasClouds.shift();
        }

        if (this.game.createSmokeEffect) {
            this.game.createSmokeEffect(x, y, gasData.radius);
        }
    }

    updateGasClouds(deltaTime) {
        if (!this.gasClouds.length || !this.game.waveManager) {
            return;
        }

        const now = Date.now();
        const enemies = this.game.waveManager.enemies;

        for (let i = this.gasClouds.length - 1; i >= 0; i--) {
            const cloud = this.gasClouds[i];
            if (now >= cloud.endTime) {
                this.gasClouds[i] = this.gasClouds[this.gasClouds.length - 1];
                this.gasClouds.pop();
                continue;
            }

            const radiusSq = cloud.radius * cloud.radius;
            for (let j = 0; j < enemies.length; j++) {
                const enemy = enemies[j];
                if (!enemy || enemy.markedForDeletion) continue;

                const dx = enemy.x - cloud.x;
                const dy = enemy.y - cloud.y;
                if ((dx * dx + dy * dy) > radiusSq) continue;

                const slowFactor = Math.max(0.35, 1 - cloud.slowPercent);
                enemy.slowFactor = Math.min(enemy.slowFactor || 1.0, slowFactor);
                enemy.slowTimer = Math.max(enemy.slowTimer || 0, 35);
            }
        }
    }

    
    
    onArrowFired(arrow, target) {
        const tower = this.game.tower;
        if (!tower) return;
        
        
        this.arrowCounter++;
        
        
        const doubleShotChance = this.getModifiedChance(tower.doubleShotChance || 0, 'doubleShot');
        if (doubleShotChance > 0 && Math.random() < doubleShotChance) {
            this.createDoubleShot(target, arrow);
        }
        
        
        if (tower.piercingInterval) {
            if (this.arrowCounter % tower.piercingInterval === 0) {
                arrow.piercing = true;
                arrow.hitEnemies = new Set(); 
                
                
                arrow.color = '#ffffff';
                arrow.glowColor = '#f1c40f';
            }
        }
        
        
        if (tower.splittingArrow) {
            arrow.splitting = tower.splittingArrow;
        }
        
        
        arrow.freezing = false;
        arrow.freezeDuration = 0;
        arrow.freezeRadius = 0;
        if (tower.freezingArrows) {
            const rawFreezeChance = Number(tower.freezingArrows.chance) || 0;
            const normalizedFreezeChance = rawFreezeChance > 1 ? (rawFreezeChance / 100) : rawFreezeChance;
            const freezeChance = Math.max(0, Math.min(1, normalizedFreezeChance));
            if (freezeChance > 0 && Math.random() < freezeChance) {
                arrow.freezing = true;
                arrow.freezeDuration = tower.freezingArrows.duration;
                arrow.freezeRadius = tower.freezingArrows.radius;
            }
        }
    }

    createDoubleShot(target, originalArrow) {
        
        const arrow = new Arrow(
            this.game.tower.x,
            this.game.tower.y,
            target,
            {
                damage: originalArrow.damage,
                speed: originalArrow.speed,
                type: originalArrow.type,
                isCrit: originalArrow.isCrit,
                vampirismChance: originalArrow.vampirismChance || 0,
                vampirismAmount: originalArrow.vampirismAmount || 0,
                piercing: originalArrow.piercing || false
            }
        );
        
        
        if (originalArrow.piercing) arrow.piercing = true;
        if (originalArrow.splitting) arrow.splitting = originalArrow.splitting;
        if (originalArrow.freezing) {
            arrow.freezing = true;
            arrow.freezeDuration = originalArrow.freezeDuration;
            arrow.freezeRadius = originalArrow.freezeRadius;
        }
        
        this.game.addProjectile(arrow);
        
        
        this.game.createFloatingText(
            this.game.tower.x,
            this.game.tower.y - 40,
            typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('floatDoubleShot', '👥 Double!') : '👥 Double!',
            '#9b59b6'
        );
    }

    
    
    onArrowHit(arrow, enemy) {
        const tower = this.game.tower;
        if (!tower) return;
        
        
        if (tower.chainLightning && Math.random() < tower.chainLightning.chance) {
            this.createChainLightning(enemy, tower.chainLightning);
        }
        
        
        if (tower.poison) {
            this.createGasCloud(enemy.x, enemy.y, tower.poison);
        }
        
        
        if (arrow.isCrit && tower.critExplosion) {
            this.createCritExplosion(enemy.x, enemy.y, tower.critExplosion);
        }
        
        
        if (arrow.splitting && !arrow.hasSplit) {
            arrow.hasSplit = true;
            this.createSplittingArrows(enemy, arrow);
        }
        
        
        if (arrow.freezing) {
            const freezeDuration = arrow.freezeDuration * 60; 
            const freezeRadius = arrow.freezeRadius || 80;
            const slowAmount = 0.5; 
            
            
            const applyFreezeSlow = (target) => {
                if (target.isBoss || target.isElite) return; 
                
                target.slowFactor = Math.min(target.slowFactor || 1.0, slowAmount);
                target.slowTimer = Math.max(target.slowTimer || 0, freezeDuration);
                
                
                if (!target._hadFreezeEffectRecently) {
                    this.game.createFloatingText(target.x, target.y - 30, '❄️', '#3498db');
                    target._hadFreezeEffectRecently = true;
                    
                    setTimeout(() => { if (target) target._hadFreezeEffectRecently = false; }, 500);
                }
            };
            
            
            applyFreezeSlow(enemy);
            
            
            const enemies = this.game.waveManager.enemies;
            for (let i = 0; i < enemies.length; i++) {
                const other = enemies[i];
                if (other === enemy) continue;
                
                const dx = other.x - enemy.x;
                const dy = other.y - enemy.y;
                const distSq = dx * dx + dy * dy;
                
                if (distSq <= freezeRadius * freezeRadius) {
                    applyFreezeSlow(other);
                }
            }
            
            
            if (this.game.createIceExplosionEffect) {
                this.game.createIceExplosionEffect(enemy.x, enemy.y, freezeRadius);
            }

            if (typeof AudioManager !== 'undefined' && typeof AudioManager.playSound === 'function') {
                AudioManager.playSound('freezeBurst');
            }
        }
    }

    createChainLightning(firstEnemy, chainData) {
        const enemies = this.game.waveManager.enemies;
        const hitEnemies = [firstEnemy];
        let currentEnemy = firstEnemy;
        
        
        for (let i = 0; i < chainData.jumps; i++) {
            let closest = null;
            let closestDist = Infinity;
            
            enemies.forEach(enemy => {
                if (hitEnemies.includes(enemy) || enemy.markedForDeletion) return;
                
                const dx = enemy.x - currentEnemy.x;
                const dy = enemy.y - currentEnemy.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < closestDist && dist < 150) { 
                    closestDist = dist;
                    closest = enemy;
                }
            });
            
            if (!closest) break;
            
            
            const damage = this.game.tower.damage * chainData.damagePercent;
            const result = closest.takeDamage(damage);
            this.processDamageResult(result);
            
            
            this.createLightningEffect(currentEnemy.x, currentEnemy.y, closest.x, closest.y);
            
            hitEnemies.push(closest);
            currentEnemy = closest;
        }
    }

    createLightningEffect(x1, y1, x2, y2) {
        if (typeof AudioManager !== 'undefined' && typeof AudioManager.playSound === 'function') {
            AudioManager.playSound('chainLightning');
        }

        
        this.game.effects.push({
            x1, y1, x2, y2,
            life: 10,
            type: 'lightning',
            update() {
                this.life--;
                if (this.life <= 0) this.markedForDeletion = true;
            },
            draw(ctx) {
                ctx.save();
                ctx.strokeStyle = '#9b59b6';
                ctx.lineWidth = 3;
                ctx.shadowBlur = 10;
                ctx.shadowColor = '#9b59b6';
                
                
                const midX = (this.x1 + this.x2) / 2 + (Math.random() - 0.5) * 20;
                const midY = (this.y1 + this.y2) / 2 + (Math.random() - 0.5) * 20;
                
                ctx.beginPath();
                ctx.moveTo(this.x1, this.y1);
                ctx.lineTo(midX, midY);
                ctx.lineTo(this.x2, this.y2);
                ctx.stroke();
                
                ctx.restore();
            },
            markedForDeletion: false
        });
    }

    createCritExplosion(x, y, explosionData) {
        const enemies = this.game.waveManager.enemies;
        const damage = this.game.tower.damage * explosionData.damagePercent;
        
        
        enemies.forEach(enemy => {
            const dx = enemy.x - x;
            const dy = enemy.y - y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            if (dist <= explosionData.radius) {
                const result = enemy.takeDamage(damage);
                this.processDamageResult(result);
            }
        });
        
        
        this.game.createExplosionEffect(x, y, explosionData.radius);
        
        
        this.game.createFloatingText(x, y - 30, typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('floatCrit', '💥 CRIT!') : '💥 CRIT!', '#e74c3c');
    }

    createSplittingArrows(hitEnemy, originalArrow) {
        const enemies = this.game.waveManager.enemies;
        const otherEnemies = enemies.filter(e => e !== hitEnemy && !e.markedForDeletion);
        
        if (otherEnemies.length === 0) return;
        
        const count = Math.max(1, Math.min(originalArrow.splitting.arrows, 5));
        const splitDamagePercent = Math.max(0.12, Math.min(0.35, originalArrow.splitting.damagePercent || 0.2));
        const damage = originalArrow.damage * splitDamagePercent;

        const baseAngle = typeof originalArrow.angle === 'number' ? originalArrow.angle : 0;
        const spread = Math.PI * 0.95;
        
        for (let i = 0; i < count; i++) {
            const angleOffset = count === 1
                ? 0
                : (-spread / 2) + (spread * i / (count - 1));
            const flightAngle = baseAngle + angleOffset;

            const arrow = new Arrow(
                hitEnemy.x,
                hitEnemy.y,
                null,
                {
                    damage: damage,
                    speed: originalArrow.speed * 0.95,
                    type: originalArrow.type,
                    isCrit: false,
                    vampirismChance: originalArrow.vampirismChance || 0,
                    vampirismAmount: originalArrow.vampirismAmount || 0,
                    piercing: false,
                    noHoming: true,
                    angle: flightAngle,
                    maxDistance: 320
                }
            );
            
            arrow.isSplitArrow = true;
            this.game.addProjectile(arrow);
        }
    }

    
    
    onEnemyKilled(enemy) {
        const tower = this.game.tower;
        if (!tower) return;
        
        const now = Date.now();
        
        
        if (tower.killStreak) {
            this.killStreak++;
            this.lastKillTime = now;
            
            if (this.killStreak >= tower.killStreak.killsRequired) {
                this.triggerKillStreak();
                this.killStreak = 0;
            }
        }
        
        
        if (tower.vampiricRage && tower.vampiricRage.active && Date.now() < tower.vampiricRage.endTime) {
            tower.heal(tower.vampiricRage.healAmount);
            this.game.createFloatingText(
                tower.x, 
                tower.y - 30, 
                `+${tower.vampiricRage.healAmount} 🩸`, 
                '#e74c3c'
            );
        }
        
        
        if (tower.goldFever && Math.random() < tower.goldFever.chance) {
            const rawBonusGold = Math.floor(enemy.reward * tower.goldFever.goldMultiplier);
            const bonusGold = this.game.applyGoldEventMultiplier
                ? this.game.applyGoldEventMultiplier(rawBonusGold)
                : rawBonusGold;
            this.game.gold += bonusGold;
            this.game.stats.totalGold += bonusGold;
            UI.updateGold(this.game.gold);
            
            this.game.createFloatingText(
                enemy.x, 
                enemy.y - 40, 
                `💰 +${bonusGold}`, 
                '#f1c40f'
            );
            
            
            this.createGoldExplosion(enemy.x, enemy.y);
        }
    }

    checkKillStreakReset() {
        if (this.killStreak > 0) {
            const now = Date.now();
            
            if (now - this.lastKillTime > 3000) {
                this.killStreak = 0;
            }
        }
    }

    triggerKillStreak() {
        const tower = this.game.tower;

        if (!tower || !tower.killStreak) {
            return;
        }

        const now = Date.now();
        const durationMs = Math.max(500, (tower.killStreak.duration || 3) * 1000);
        this.killStreakBuffUntil = now + durationMs;
        this.killStreakAttackSpeedBoost = Math.max(0, tower.killStreak.attackSpeedBoost || 0);
        this.killStreakDamageBoost = Math.max(0, tower.killStreak.damageBoost || 0);
        
        
        this.game.createFloatingText(
            tower.x, 
            tower.y - 50, 
            typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('floatKillStreak', '🔥 KILL STREAK!') : '🔥 KILL STREAK!',
            '#e74c3c'
        );
        
        this.game.createFloatingText(
            tower.x,
            tower.y - 76,
            `+${Math.round(this.killStreakAttackSpeedBoost * 100)}% SPD / +${Math.round(this.killStreakDamageBoost * 100)}% DMG`,
            '#f1c40f'
        );

        this.game.createExplosionEffect(tower.x, tower.y, Math.min(140, tower.range * 0.35));
    }

    getKillStreakBuff() {
        const now = Date.now();
        if (now >= this.killStreakBuffUntil) {
            return { attackSpeedBoost: 0, damageBoost: 0, active: false };
        }

        return {
            attackSpeedBoost: this.killStreakAttackSpeedBoost,
            damageBoost: this.killStreakDamageBoost,
            active: true
        };
    }

    createGoldExplosion(x, y) {
        
        for (let i = 0; i < 8; i++) {
            const angle = (Math.PI * 2 / 8) * i;
            this.game.effects.push({
                x: x,
                y: y,
                vx: Math.cos(angle) * 5,
                vy: Math.sin(angle) * 5,
                life: 30,
                color: '#f1c40f',
                size: 4,
                update(gameSpeed = 1) {
                    this.x += this.vx * gameSpeed;
                    this.y += this.vy * gameSpeed;
                    this.life -= gameSpeed;
                    this.size *= 0.95;
                    if (this.life <= 0) this.markedForDeletion = true;
                },
                draw(ctx) {
                    ctx.save();
                    ctx.globalAlpha = this.life / 30;
                    ctx.fillStyle = this.color;
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.restore();
                },
                markedForDeletion: false
            });
        }
    }

    
    
    updateCrowdControl(deltaTime) {
        const tower = this.game.tower;
        if (!tower || !tower.crowdControl) return;
        
        this.crowdControlTimer += deltaTime;
        const interval = tower.crowdControl.interval * 1000;
        
        if (this.crowdControlTimer >= interval) {
            this.crowdControlTimer = 0;
            this.triggerCrowdControl(tower.crowdControl);
        }
    }

    triggerCrowdControl(crowdData) {
        const tower = this.game.tower;
        const enemies = this.game.waveManager.enemies;
        
        const now = Date.now();
        const pushRadius = crowdData.radius || 220;
        const radiusSq = pushRadius * pushRadius;

        
        enemies.forEach(enemy => {
            const dx = enemy.x - tower.x;
            const dy = enemy.y - tower.y;
            const distSq = dx * dx + dy * dy;
            if (distSq > radiusSq) {
                return;
            }

            const immunityUntil = this.crowdControlImmunity.get(enemy) || 0;
            if (now < immunityUntil) {
                return;
            }

            const dist = Math.sqrt(distSq);
            
            if (dist > 0) {
                const pushDistance = crowdData.pushDistance || 100;
                const resist = crowdData.eliteResistance || {};
                let resistance = 0;
                if (enemy.isBoss) resistance = resist.boss || 0;
                else if (enemy.type === 'tank') resistance = resist.tank || 0;
                else if (enemy.type === 'splitter') resistance = resist.splitter || 0;
                else if (enemy.type === 'healer') resistance = resist.healer || 0;

                const actualPush = pushDistance * (1 - resistance);
                enemy.x += (dx / dist) * actualPush;
                enemy.y += (dy / dist) * actualPush;

                this.crowdControlImmunity.set(enemy, now + 1500);
            }
        });
        
        
        this.game.createFloatingText(
            tower.x, 
            tower.y - 50, 
            typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('floatCrowdControl', '💨 CROWD CONTROL!') : '💨 CROWD CONTROL!', 
            '#3498db'
        );
        
        
        this.game.effects.push({
            x: tower.x,
            y: tower.y,
            radius: 50,
            maxRadius: pushRadius,
            alpha: 1,
            update() {
                this.radius += 10;
                this.alpha -= 0.02;
                if (this.alpha <= 0) this.markedForDeletion = true;
            },
            draw(ctx) {
                ctx.save();
                ctx.globalAlpha = this.alpha;
                ctx.strokeStyle = '#3498db';
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.stroke();
                ctx.restore();
            },
            markedForDeletion: false
        });
    }

    
    
    checkLastStand() {
        const tower = this.game.tower;
        if (!tower || !tower.lastStand) return;

        const now = Date.now();

        if (this.lastStandActive && now >= this.lastStandStartedAt + tower.lastStand.duration * 1000) {
            this.lastStandActive = false;
            this.lastStandCooldownUntil = now + tower.lastStand.cooldown * 1000;
            this.deactivateLastStand(tower.lastStand);
            return;
        }
        
        const healthPercent = tower.health / tower.maxHealth;
        
        if (healthPercent <= 0.25 && !this.lastStandActive && now >= this.lastStandCooldownUntil) {
            
            this.lastStandActive = true;
            this.lastStandStartedAt = now;
            this.activateLastStand(tower.lastStand);
        } else if (healthPercent > 0.25 && this.lastStandActive) {
            
            this.lastStandActive = false;
            this.lastStandCooldownUntil = now + tower.lastStand.cooldown * 1000;
            this.deactivateLastStand(tower.lastStand);
        }
    }

    activateLastStand(lastStandData) {
        const tower = this.game.tower;

        if (tower.lastStandEffect) {
            return;
        }

        if (typeof tower.recalculateStats === 'function') {
            tower.recalculateStats();
        }
        
        
        tower.attackSpeed = tower.attackSpeed / (1 + lastStandData.speedBonus);
        
        
        tower.damage *= (1 + lastStandData.damageBonus);
        
        
        this.game.createFloatingText(
            tower.x, 
            tower.y - 60, 
            typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('floatLastStand', '⚔️ LAST STAND!') : '⚔️ LAST STAND!', 
            '#e74c3c'
        );
        
        
        tower.lastStandEffect = true;
    }

    deactivateLastStand(lastStandData) {
        const tower = this.game.tower;

        
        if (typeof tower.recalculateStats === 'function') {
            tower.recalculateStats();
        } else {
            tower.attackSpeed = tower.attackSpeed * (1 + lastStandData.speedBonus);
            tower.damage /= (1 + lastStandData.damageBonus);
        }
        
        tower.lastStandEffect = false;
    }

    
    
    getModifiedChance(baseChance, chanceType) {
        const tower = this.game.tower;
        if (!tower || !tower.statBoost) return Math.min(1, Math.max(0, baseChance || 0));
        
        let bonus = 0;
        switch (chanceType) {
            case 'critChance':
                bonus = tower.statBoost.critChance || 0;
                break;
            case 'multishot':
            case 'doubleShot':
                bonus = tower.statBoost.multishot || 0;
                break;
            case 'vampirism':
                bonus = tower.statBoost.vampChance || 0;
                break;
            default:
                bonus = 0;
        }

        return Math.min(1, Math.max(0, (baseChance || 0) * (1 + bonus)));
    }

    reset() {
        this.arrowCounter = 0;
        this.killStreak = 0;
        this.lastKillTime = 0;
        this.auraTimer = 0;
        this.crowdControlTimer = 0;
        this.gasClouds = [];
        this.lastGasCloudAt = 0;
        this.crowdControlImmunity = new WeakMap();
        this.lastStandActive = false;
        this.lastStandStartedAt = 0;
        this.lastStandCooldownUntil = 0;
        this.killStreakBuffUntil = 0;
        this.killStreakAttackSpeedBoost = 0;
        this.killStreakDamageBoost = 0;
    }
}


if (typeof module !== 'undefined' && module.exports) {
    module.exports = UpgradeEffects;
}
