



class WaveManager {
    constructor() {
        const cfg = (typeof BalanceRuntime !== 'undefined' && BalanceRuntime.getAll)
            ? BalanceRuntime.getAll()
            : {};
        const waveCfg = cfg.waves || {};

        this.wave = 1;
        this.enemiesSpawned = 0;
        this.totalEnemies = 0;
        this.spawnTimer = 0;
        this.spawnDelay = 60;
        this.waveActive = false;
        this.waveTimer = 0;
        this.waveDelay = 180;
        this.enemies = [];
        this.enemyProjectiles = [];
        this.baseEnemies = waveCfg.baseEnemies ?? 6;
        this.enemiesPerWave = waveCfg.enemiesPerWave ?? 4;
        this.maxActiveEnemies = Number.isFinite(Number(waveCfg.maxActiveEnemies))
            ? Math.max(1, Math.floor(Number(waveCfg.maxActiveEnemies)))
            : 10;
        this.recentSpawnPoints = [];
        this.waveSpawnPlan = [];
        this.config = waveCfg;
    }

    startWave() {
        this.waveActive = true;
        this.enemiesSpawned = 0;
        this.recentSpawnPoints = [];
        const localWave = Math.max(1, Math.floor(this.wave));
        const lateGameSurgeCfg = this.config.lateGameSurge || {};
        const surgeFromWave = Number.isFinite(Number(lateGameSurgeCfg.fromWave))
            ? Math.max(1, Math.floor(Number(lateGameSurgeCfg.fromWave)))
            : 50;
        const lateWaveCount = Math.max(0, localWave - surgeFromWave);

        const earlyWaveEnemies = this.config.earlyWaveEnemies || [4, 6, 8, 11, 14];
        if (localWave <= earlyWaveEnemies.length) {
            this.totalEnemies = earlyWaveEnemies[localWave - 1];
        } else {
            const waveBonusEvery = this.config.waveBonusEvery ?? 4;
            const waveBonusAmount = this.config.waveBonusAmount ?? 3;
            const waveBonus = Math.floor(localWave / waveBonusEvery) * waveBonusAmount;
            this.totalEnemies = this.baseEnemies + (localWave - 1) * this.enemiesPerWave + waveBonus;
        }

        if (lateWaveCount > 0) {
            const enemiesPerWaveMultiplier = Number.isFinite(Number(lateGameSurgeCfg.enemiesPerWaveMultiplier))
                ? Math.max(1, Number(lateGameSurgeCfg.enemiesPerWaveMultiplier))
                : 1.045;
            this.totalEnemies = Math.max(1, Math.floor(this.totalEnemies * Math.pow(enemiesPerWaveMultiplier, lateWaveCount)));
        }

        const bossWaveEvery = this.config.bossWaveEvery ?? 10;
        if (localWave % bossWaveEvery === 0) {
            const bossWaveMultiplier = this.config.bossWaveMultiplier ?? 0.72;
            const bossWaveMinEnemies = this.config.bossWaveMinEnemies ?? 10;
            this.totalEnemies = Math.max(bossWaveMinEnemies, Math.floor(this.totalEnemies * bossWaveMultiplier));
            Game.showBossWarning();
        }

        if (localWave <= 5) {
            const spawnEarly = this.config.spawnDelayEarly || {};
            this.spawnDelay = Math.max(
                spawnEarly.min ?? 18,
                (spawnEarly.maxBase ?? 58) - localWave * (spawnEarly.perWaveDelta ?? 1.5)
            );
        } else {
            const spawnDefault = this.config.spawnDelayDefault || {};
            this.spawnDelay = Math.max(
                spawnDefault.min ?? 8,
                (spawnDefault.maxBase ?? 50) - localWave * (spawnDefault.perWaveDelta ?? 1.7)
            );
        }

        if (lateWaveCount > 0) {
            const spawnDelayPerWaveMultiplier = Number.isFinite(Number(lateGameSurgeCfg.spawnDelayPerWaveMultiplier))
                ? Math.min(1, Math.max(0.1, Number(lateGameSurgeCfg.spawnDelayPerWaveMultiplier)))
                : 0.985;
            const spawnDelayMinMultiplier = Number.isFinite(Number(lateGameSurgeCfg.spawnDelayMinMultiplier))
                ? Math.min(1, Math.max(0.1, Number(lateGameSurgeCfg.spawnDelayMinMultiplier)))
                : 0.55;

            const baseSpawnCfg = localWave <= 5
                ? (this.config.spawnDelayEarly || {})
                : (this.config.spawnDelayDefault || {});
            const baseMinDelay = Number.isFinite(Number(baseSpawnCfg.min))
                ? Math.max(2, Number(baseSpawnCfg.min))
                : 8;
            const hardMinDelay = Math.max(2, baseMinDelay * spawnDelayMinMultiplier);

            this.spawnDelay *= Math.pow(spawnDelayPerWaveMultiplier, lateWaveCount);
            this.spawnDelay = Math.max(hardMinDelay, this.spawnDelay);
        }

        this.waveSpawnPlan = this.buildWaveSpawnPlan(localWave);
        UI.updateWave(this.wave);
    }

    update(canvas, tower, deltaTime = 16.6) {
        const dtScale = deltaTime / 16.6;
        const gameSpeed = (typeof Game !== "undefined" && Game.gameSpeed) ? Game.gameSpeed : 1;

        for (let i = this.enemies.length - 1; i >= 0; i--) {
            const enemy = this.enemies[i];
            const result = enemy.update(tower, deltaTime);
            if (result.hitTower) {
                Game.towerTakeDamage(result.damage, enemy);

                if (Game && typeof Game.onEnemyLeaked === 'function') {
                    Game.onEnemyLeaked(enemy.reward, enemy.x, enemy.y, enemy.isBoss);
                }

                enemy.markedForDeletion = true;
            }
            if (result.spawnProjectile) {
                if (typeof PoolManager !== 'undefined') {
                    this.enemyProjectiles.push(PoolManager.acquire('enemyProjectile', result.spawnProjectile));
                } else {
                    this.enemyProjectiles.push(new EnemyProjectile(result.spawnProjectile));
                }
            }
            if (enemy.markedForDeletion) {
                this.enemies[i] = this.enemies[this.enemies.length - 1];
                this.enemies.pop();
            }
        }

        for (let i = this.enemyProjectiles.length - 1; i >= 0; i--) {
            const projectile = this.enemyProjectiles[i];
            const projectileResult = projectile.update(tower, deltaTime);

            if (projectileResult.hitTower) {
                Game.towerTakeDamage(projectileResult.damage, projectile);
            }

            if (projectile.markedForDeletion) {
                this.enemyProjectiles[i] = this.enemyProjectiles[this.enemyProjectiles.length - 1];
                this.enemyProjectiles.pop();
            }
        }

        if (this.waveActive) {
            if (this.enemiesSpawned < this.totalEnemies) {
                if (this.getActiveEnemiesCount() < this.getMaxActiveEnemies()) {
                    this.spawnTimer += dtScale * gameSpeed;
                    if (this.spawnTimer >= this.spawnDelay) {
                        this.spawnEnemy(canvas);
                        this.spawnTimer = 0;
                    }
                }
            } else if (this.enemies.length === 0) {
                this.waveActive = false;
                this.wave++;
                this.waveTimer = 0;
                if (typeof AudioManager !== "undefined") AudioManager.playSound("waveEnd");
                Game.rewardForWave(this.wave - 1);
            }
        } else {
            this.waveTimer += dtScale * gameSpeed;
            if (this.waveTimer >= this.waveDelay) this.startWave();
        }
    }

    spawnEnemy(canvas) {
        if (this.getActiveEnemiesCount() >= this.getMaxActiveEnemies()) {
            return;
        }

        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const spawnCfg = this.config.spawn || {};
        const margin = spawnCfg.margin ?? 50;
        const minSpawnDistance = spawnCfg.minSpawnDistance ?? 130;
        const spawnRadiusX = canvas.width / 2 + margin;
        const spawnRadiusY = canvas.height / 2 + margin;
        let x = 0;
        let y = 0;

        const attempts = spawnCfg.attempts ?? 8;
        for (let attempt = 0; attempt < attempts; attempt++) {
            const angle = Math.random() * Math.PI * 2;
            x = centerX + Math.cos(angle) * spawnRadiusX;
            y = centerY + Math.sin(angle) * spawnRadiusY;

            let tooClose = false;

            for (let i = 0; i < this.recentSpawnPoints.length; i++) {
                const p = this.recentSpawnPoints[i];
                const dx = p.x - x;
                const dy = p.y - y;
                if ((dx * dx + dy * dy) < (minSpawnDistance * minSpawnDistance)) {
                    tooClose = true;
                    break;
                }
            }

            if (!tooClose) break;
        }

        this.recentSpawnPoints.push({ x, y });
        const recentPointsLimit = spawnCfg.recentPointsLimit ?? 18;
        if (this.recentSpawnPoints.length > recentPointsLimit) {
            this.recentSpawnPoints.shift();
        }

        let type = this.waveSpawnPlan[this.enemiesSpawned] || "basic";
        const effectiveWave = this.getEffectiveWaveForBalance();
        
        this.enemies.push(new Enemy(x, y, type, effectiveWave));
        this.enemiesSpawned++;
    }

    getMaxActiveEnemies() {
        if (!Number.isFinite(this.maxActiveEnemies)) {
            return 10;
        }
        return Math.max(1, Math.floor(this.maxActiveEnemies));
    }

    getActiveEnemiesCount() {
        let activeCount = 0;
        for (let i = 0, len = this.enemies.length; i < len; i++) {
            const enemy = this.enemies[i];
            if (enemy && !enemy.markedForDeletion && !enemy.isDying) {
                activeCount++;
            }
        }
        return activeCount;
    }

    getEffectiveWaveForBalance() {
        let effectiveWave = this.wave;

        if (Game && typeof Game.getEffectiveEnemyWaveNumber === 'function') {
            effectiveWave = Game.getEffectiveEnemyWaveNumber(this.wave);
        } else if (Game && typeof Game.getEffectiveWaveNumber === 'function') {
            effectiveWave = Game.getEffectiveWaveNumber(this.wave);
        } else if (Game && typeof Game.getStageWaveOffset === 'function') {
            effectiveWave += Game.getStageWaveOffset();
        }

        if (Game && Game.cardEffects && typeof Game.cardEffects.getVirtualWaveBonus === 'function') {
            effectiveWave += Game.cardEffects.getVirtualWaveBonus();
        }

        if (!Number.isFinite(effectiveWave)) {
            return 1;
        }

        return Math.max(1, Math.floor(effectiveWave));
    }

    buildWaveSpawnPlan(effectiveWave = this.getEffectiveWaveForBalance()) {
        const plan = [];
        const wave = Math.max(1, Math.floor(effectiveWave));
        const specialUnits = [];
        const compositionCfg = this.config.composition || {};
        const currentStage = (typeof Game !== 'undefined' && Game) ? Game.currentStage : 1;
        const theme = (typeof StageThemes !== 'undefined' && StageThemes) ? StageThemes.getTheme(currentStage) : null;
        const enemyBias = theme && theme.enemyBias ? theme.enemyBias : {};
        const lateGameSurgeCfg = this.config.lateGameSurge || {};
        const surgeFromWave = Number.isFinite(Number(lateGameSurgeCfg.fromWave))
            ? Math.max(1, Math.floor(Number(lateGameSurgeCfg.fromWave)))
            : 50;
        const lateWaveCount = Math.max(0, wave - surgeFromWave);

        let specialTargetCount = 0;
        if (wave >= 5) {
            specialTargetCount = 1;
        }

        const specialCountStartWave = compositionCfg.specialCountStartWave ?? 20;
        if (wave >= specialCountStartWave) {
            const step = Math.max(1, compositionCfg.specialCountStepWave ?? 15);
            const add = Math.floor((wave - specialCountStartWave) / step);
            const specialCountMax = Math.max(1, compositionCfg.specialCountMax ?? 4);
            specialTargetCount = Math.min(specialCountMax, 1 + add);
        }

        if (lateWaveCount > 0) {
            const extraSpecialEveryWaves = Number.isFinite(Number(lateGameSurgeCfg.extraSpecialEveryWaves))
                ? Math.max(1, Math.floor(Number(lateGameSurgeCfg.extraSpecialEveryWaves)))
                : 6;
            const extraSpecialMax = Number.isFinite(Number(lateGameSurgeCfg.extraSpecialMax))
                ? Math.max(0, Math.floor(Number(lateGameSurgeCfg.extraSpecialMax)))
                : 6;
            const extraSpecial = Math.min(extraSpecialMax, Math.floor(lateWaveCount / extraSpecialEveryWaves) + 1);
            specialTargetCount += extraSpecial;
        }

        specialTargetCount += Number(enemyBias.specialCountBonus || 0);
        if (typeof RunModifiers !== 'undefined' && RunModifiers) {
            specialTargetCount += Number(RunModifiers.getValue('specialCountBonus', 0) || 0);
        }
        specialTargetCount = Math.max(0, Math.floor(specialTargetCount));

        const bossDoubleStartWave = compositionCfg.bossDoubleStartWave ?? 60;
        const bossDoubleEvery = Math.max(1, compositionCfg.bossDoubleEvery ?? 20);
        const bossCountMax = Math.max(1, compositionCfg.bossCountMax ?? 3);
        const isBossWave = wave % 10 === 0;
        let bossCount = isBossWave
            ? Math.min(bossCountMax, 1 + (wave >= bossDoubleStartWave ? 1 + Math.floor((wave - bossDoubleStartWave) / bossDoubleEvery) : 0))
            : 0;

        if (isBossWave) {
            bossCount += Number(enemyBias.bossCountBonus || 0);
            if (typeof RunModifiers !== 'undefined' && RunModifiers) {
                bossCount += Number(RunModifiers.getValue('bossCountBonus', 0) || 0);
            }
        }
        bossCount = Math.max(0, Math.floor(bossCount));

        if (isBossWave && lateWaveCount > 0) {
            const extraBossEveryWaves = Number.isFinite(Number(lateGameSurgeCfg.extraBossEveryWaves))
                ? Math.max(1, Math.floor(Number(lateGameSurgeCfg.extraBossEveryWaves)))
                : 18;
            const extraBossMax = Number.isFinite(Number(lateGameSurgeCfg.extraBossMax))
                ? Math.max(0, Math.floor(Number(lateGameSurgeCfg.extraBossMax)))
                : 2;
            const surgeBossCountMax = Number.isFinite(Number(lateGameSurgeCfg.bossCountMax))
                ? Math.max(bossCountMax, Math.floor(Number(lateGameSurgeCfg.bossCountMax)))
                : Math.max(bossCountMax, bossCountMax + extraBossMax);
            const extraBoss = Math.min(extraBossMax, Math.floor(lateWaveCount / extraBossEveryWaves));
            bossCount = Math.min(surgeBossCountMax, bossCount + extraBoss);
        }

        for (let i = 0; i < bossCount; i++) {
            specialUnits.push("boss");
        }

        const specialPool = [];
        const tankWeight = Math.max(0.1, 1 + Number(enemyBias.tankShareBonus || 0));
        const healerWeight = Math.max(0.1, 1 + Number(enemyBias.healerShareBonus || 0));
        const splitterWeight = Math.max(0.1, 1 + Number(enemyBias.splitterShareBonus || 0));
        const skullWeight = Math.max(0.1, 1 + Number(enemyBias.skullShareBonus || 0));
        const ogreWeight = Math.max(0.1, 1 + Number(enemyBias.ogreShareBonus || 0));
        const cyclopWeight = Math.max(0.1, 1 + Number(enemyBias.cyclopShareBonus || 0));
        const demonWeight = Math.max(0.1, 1 + Number(enemyBias.demonShareBonus || 0));
        const archerWeight = Math.max(0.1, 1 + Number(enemyBias.archerShareBonus || 0));
        const skullStartWave = compositionCfg.skullStartWave ?? 12;
        const ogreStartWave = compositionCfg.ogreStartWave ?? 24;
        const cyclopStartWave = compositionCfg.cyclopStartWave ?? 32;
        const archerStartWave = compositionCfg.archerStartWave ?? 18;
        const demonStartWave = compositionCfg.demonStartWave ?? 42;

        if (wave >= 15) {
            for (let i = 0; i < Math.round(2 * tankWeight); i++) specialPool.push('tank');
        } else {
            for (let i = 0; i < Math.round(3 * tankWeight); i++) specialPool.push('tank');
        }
        if (wave >= 15) {
            for (let i = 0; i < Math.round(2 * healerWeight); i++) specialPool.push('healer');
        }
        if (wave >= 20) {
            for (let i = 0; i < Math.round(2 * splitterWeight); i++) specialPool.push('splitter');
        }
        if (wave >= skullStartWave) {
            for (let i = 0; i < Math.round(2 * skullWeight); i++) specialPool.push('skull');
        }
        if (wave >= ogreStartWave) {
            for (let i = 0; i < Math.round(2 * ogreWeight); i++) specialPool.push('ogre');
        }
        if (wave >= cyclopStartWave) {
            for (let i = 0; i < Math.round(2 * cyclopWeight); i++) specialPool.push('cyclop');
        }
        if (wave >= archerStartWave) {
            for (let i = 0; i < Math.round(2 * archerWeight); i++) specialPool.push('archer');
        }
        if (wave >= demonStartWave) {
            for (let i = 0; i < Math.round(2 * demonWeight); i++) specialPool.push('demon');
        }

        while (specialUnits.length < specialTargetCount) {
            const next = specialPool[Math.floor(Math.random() * specialPool.length)];
            specialUnits.push(next);
        }

        if (wave >= 20 && Math.random() < (compositionCfg.post20ExtraSpecialChance ?? 0.6) && specialUnits.length < specialTargetCount + 1) {
            const extraPool = compositionCfg.post20ExtraPool || ["healer", "splitter", "tank"];
            const extra = extraPool[Math.floor(Math.random() * extraPool.length)];
            specialUnits.push(extra);
        }

        const specialsCount = Math.min(specialUnits.length, this.totalEnemies);
        for (let i = 0; i < specialsCount; i++) {
            plan.push(specialUnits[i]);
        }

        const remaining = this.totalEnemies - plan.length;
        let fastShare = Math.min(
            compositionCfg.fastShareMax ?? 0.5,
            (compositionCfg.fastShareBase ?? 0.22) + wave * (compositionCfg.fastSharePerWave ?? 0.013)
        );

        fastShare += Number(enemyBias.fastShareBonus || 0);
        if (typeof RunModifiers !== 'undefined' && RunModifiers) {
            fastShare += Number(RunModifiers.getValue('fastShareBonus', 0) || 0);
        }

        if (lateWaveCount > 0) {
            const extraFastSharePerWave = Number.isFinite(Number(lateGameSurgeCfg.extraFastSharePerWave))
                ? Math.max(0, Number(lateGameSurgeCfg.extraFastSharePerWave))
                : 0.004;
            const extraFastShareMax = Number.isFinite(Number(lateGameSurgeCfg.extraFastShareMax))
                ? Math.max(0, Number(lateGameSurgeCfg.extraFastShareMax))
                : 0.25;
            fastShare = Math.min(0.95, fastShare + Math.min(extraFastShareMax, lateWaveCount * extraFastSharePerWave));
        }

        fastShare = Math.max(0.05, Math.min(0.9, fastShare));
        const fastCount = Math.max(0, Math.min(remaining, Math.round(remaining * fastShare)));
        const basicCount = Math.max(0, remaining - fastCount);

        for (let i = 0; i < basicCount; i++) plan.push("basic");
        for (let i = 0; i < fastCount; i++) plan.push("fast");

        const hasLeadingBoss = plan[0] === "boss";
        const startIndex = hasLeadingBoss ? 1 : 0;
        for (let i = plan.length - 1; i > startIndex; i--) {
            const j = startIndex + Math.floor(Math.random() * (i - startIndex + 1));
            const temp = plan[i];
            plan[i] = plan[j];
            plan[j] = temp;
        }

        return plan;
    }

    draw(ctx) {
        this.enemies.forEach(enemy => enemy.draw(ctx));
        this.enemyProjectiles.forEach(projectile => projectile.draw(ctx));
    }

    getClosestEnemy(x, y, range, options = null) {
        const priorityMode = options && typeof options.priorityMode === 'string'
            ? options.priorityMode
            : 'closest';
        let closest = null;
        let closestDistSq = range * range;
        let bestPriority = -Infinity;
        for (const enemy of this.enemies) {
            if (!enemy || enemy.markedForDeletion || enemy.isDying) continue;
            const dx = enemy.x - x;
            const dy = enemy.y - y;
            const distSq = dx * dx + dy * dy;
            if (distSq > (range * range)) continue;

            if (priorityMode === 'closest') {
                if (distSq < closestDistSq) {
                    closest = enemy;
                    closestDistSq = distSq;
                }
                continue;
            }

            const priority = this.getEnemyPriorityScore(enemy, priorityMode);
            if (priority > bestPriority || (priority === bestPriority && distSq < closestDistSq)) {
                bestPriority = priority;
                closest = enemy;
                closestDistSq = distSq;
            }
        }
        return closest;
    }

    getEnemyPriorityScore(enemy, priorityMode = 'danger') {
        if (!enemy) {
            return -Infinity;
        }

        if (priorityMode === 'elite') {
            return (enemy.isBoss ? 2000 : 0) + (enemy.isElite ? 1000 : 0);
        }

        let score = 0;
        score += (enemy.isBoss ? 3200 : 0);
        score += (enemy.isElite ? 1100 : 0);
        score += Number(enemy.threatPriority || 0) * 100;
        score += (enemy.type === 'demon' ? 450 : 0);
        score += (enemy.type === 'cyclop' ? 260 : 0);
        score += (enemy.type === 'ogre' ? 220 : 0);
        score += (enemy.isPreparingShot ? 380 : 0);
        score += (enemy.telegraphTimer > 0 ? 120 : 0);
        return score;
    }

    getEnemiesInRange(x, y, range, outArray = null) {
        const rangeSq = range * range;
        
        
        
        if (outArray !== null) {
            outArray.length = 0; 
            for (let i = 0, len = this.enemies.length; i < len; i++) {
                const enemy = this.enemies[i];
                if (enemy.markedForDeletion || enemy.isDying) continue;
                
                const dx = enemy.x - x;
                const dy = enemy.y - y;
                if ((dx * dx + dy * dy) <= rangeSq) {
                    outArray.push(enemy);
                }
            }
            return outArray;
        }
        
        
        return this.enemies.filter(enemy => {
            if (enemy.markedForDeletion || enemy.isDying) return false;
            const dx = enemy.x - x;
            const dy = enemy.y - y;
            return (dx * dx + dy * dy) <= rangeSq;
        });
    }
}
