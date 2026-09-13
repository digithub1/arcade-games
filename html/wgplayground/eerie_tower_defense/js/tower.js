



class Tower {
    static images = {
        full: null
    };
    static imagesLoaded = false;
    static spriteFrames = 4;
    static spriteFps = 7;
    
    
    static loadImage() {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
                Tower.images.full = img;
                Tower.imagesLoaded = true;
                resolve();
            };
            img.onerror = () => {
                console.warn('Failed to load tower image: assets/images/Tower/7.png');
                Tower.imagesLoaded = false;
                resolve();
            };
            img.src = 'assets/images/Tower/7.png';
        }).then(() => {
            console.log('Tower images loading complete');
        });
    }

    constructor(x, y, inGameUpgradesInstance, permanentEffects) {
        this.x = x;
        this.y = y;
        this.radius = 40;
        
        
        this.inGameUpgrades = inGameUpgradesInstance;
        this.permanentEffects = permanentEffects || {};

        
        this.damage = 1;
        this.attackSpeed = 1000;
        this.range = 100;
        this.maxHealth = 100;
        this.health = 100;
        this.lastAttackTime = 0;
        this.multishotChance = 0;
        this.critChance = 0;
        this.critMultiplier = 2;
        this.healthRegen = 0; 
        this.defense = 0;
        this.vampirismChance = 0;
        this.vampirismAmount = 0;
        this.thornsDamage = 0;

        
        this.cardBonuses = {
            maxHealth: 0,
            healthRegen: 0
        };

        this.externalBonuses = {
            damageMult: 0,
            attackSpeedMult: 0,
            maxHealthMult: 0,
            rangeFlat: 0,
            healthRegenFlat: 0,
            defenseFlat: 0
        };

        this.progressionBonuses = {
            exhaustedUpgradeStacks: 0
        };
        
        
        this.recalculateStats();
        this.health = this.maxHealth;
        this.lastRegenTime = 0;
        
        
        const baseKillGoldWithPermanent = this.inGameUpgrades.getBaseWithPermanent('killGoldBonus');
        const gameKillGoldLevel = this.inGameUpgrades.getLevel('killGoldBonus');
        const gameKillGoldBonus = gameKillGoldLevel * this.inGameUpgrades.getIncrement('killGoldBonus');
        this.killGoldBonus = baseKillGoldWithPermanent + gameKillGoldBonus;
        
        const baseTraderChanceWithPermanent = this.inGameUpgrades.getBaseWithPermanent('traderChance');
        const gameTraderChanceLevel = this.inGameUpgrades.getLevel('traderChance');
        const gameTraderChanceBonus = gameTraderChanceLevel * this.inGameUpgrades.getIncrement('traderChance');
        this.traderChance = (baseTraderChanceWithPermanent + gameTraderChanceBonus) / 100;
        
        
        this.inventory = new ArrowInventory();
        
        
        this.chainLightning = null;
        this.freezingArrows = null;
        this.doubleShotChance = 0;
        this.poison = null;
        this.frostAura = null;
        this.piercingInterval = 0;
        this.splittingArrow = null;
        this.critExplosion = null;
        this.fireAura = null;
        this.lastStand = null;
        this.killStreak = null;
        this.goldFever = null;
        this.vampiricRage = null;
        this.crowdControl = null;
        this.statBoost = null;
        
        
        this.pulsePhase = 0;
        this.spriteTime = 0;
        this.currentSpriteFrame = 0;
        this.barrelCount = 1;
        this.showRangeHighlight = false;
        
        
        this.baseValues = {
            damage: this.damage,
            attackSpeed: this.attackSpeed,
            range: this.range,
            maxHealth: this.maxHealth,
            healthRegen: this.healthRegen
        };

        this.evolutionStage = 0;
        this.shotCounter = 0;
        this.lowHpShieldUntil = 0;
        this.lowHpShieldCooldownUntil = 0;
        this.lowHpShieldActivatedAt = 0;
        this.priorityMode = 'closest';
        this.monsterHunterDamageMult = 0;
        this.debuffs = {
            woundUntil: 0,
            woundRegenMultiplier: 1,
            sunderUntil: 0,
            sunderFlat: 0,
            markedUntil: 0,
            markedDamageMult: 1
        };
    }

    


    recalculateStats() {
        if (!this.inGameUpgrades) return;

        
        const baseDmg = this.inGameUpgrades.getBaseWithPermanent('damage');
        const dmgLevel = this.inGameUpgrades.getLevel('damage');
        this.damage = baseDmg + (dmgLevel * this.inGameUpgrades.getIncrement('damage'));
        
        
        const baseAS = this.inGameUpgrades.getBaseWithPermanent('attackSpeed');
        const asLevel = this.inGameUpgrades.getLevel('attackSpeed');
        const totalShotsPerSecond = baseAS + (asLevel * this.inGameUpgrades.getIncrement('attackSpeed'));
        this.attackSpeed = 1000 / Math.max(0.1, totalShotsPerSecond);
        
        
        const baseRange = this.inGameUpgrades.getBaseWithPermanent('range');
        const rangeLevel = this.inGameUpgrades.getLevel('range');
        this.range = baseRange + (rangeLevel * this.inGameUpgrades.getIncrement('range'));
        
        
        const baseMH = this.inGameUpgrades.getBaseWithPermanent('maxHealth');
        const mhLevel = this.inGameUpgrades.getLevel('maxHealth');
        this.maxHealth = baseMH + (mhLevel * this.inGameUpgrades.getIncrement('maxHealth')) + (this.cardBonuses.maxHealth || 0);
        
        
        const baseRegen = this.inGameUpgrades.getBaseWithPermanent('healthRegen');
        const regenLevel = this.inGameUpgrades.getLevel('healthRegen');
        this.healthRegen = baseRegen + (regenLevel * this.inGameUpgrades.getIncrement('healthRegen')) + (this.cardBonuses.healthRegen || 0);

        
        this.health = Math.min(this.maxHealth, Math.max(0, this.health));
        
        
        const baseDef = this.inGameUpgrades.getBaseWithPermanent('defense');
        const defLevel = this.inGameUpgrades.getLevel('defense');
        this.defense = Math.min(0.85, (baseDef + (defLevel * this.inGameUpgrades.getIncrement('defense'))) / 100);

        
        const baseMulti = this.inGameUpgrades.getBaseWithPermanent('multishotChance');
        const multiLevel = this.inGameUpgrades.getLevel('multishotChance');
        this.multishotChance = (baseMulti + (multiLevel * this.inGameUpgrades.getIncrement('multishotChance'))) / 100;

        
        const baseCritCh = this.inGameUpgrades.getBaseWithPermanent('critChance');
        const critChLevel = this.inGameUpgrades.getLevel('critChance');
        this.critChance = (baseCritCh + (critChLevel * this.inGameUpgrades.getIncrement('critChance'))) / 100;

        
        const baseCritMult = this.inGameUpgrades.getBaseWithPermanent('critMultiplier');
        const critMultLevel = this.inGameUpgrades.getLevel('critMultiplier');
        this.critMultiplier = baseCritMult + (critMultLevel * this.inGameUpgrades.getIncrement('critMultiplier'));
        
        
        const baseVampCh = this.inGameUpgrades.getBaseWithPermanent('vampirismChance');
        const vampChLevel = this.inGameUpgrades.getLevel('vampirismChance');
        this.vampirismChance = Math.min(0.3, (baseVampCh + (vampChLevel * this.inGameUpgrades.getIncrement('vampirismChance'))) / 100);
        
        const baseVampAm = this.inGameUpgrades.getBaseWithPermanent('vampirismAmount');
        const vampAmLevel = this.inGameUpgrades.getLevel('vampirismAmount');
        this.vampirismAmount = (baseVampAm + (vampAmLevel * this.inGameUpgrades.getIncrement('vampirismAmount'))) / 100;

        
        const baseThorns = this.inGameUpgrades.getBaseWithPermanent('thornsDamage');
        const thornsLevel = this.inGameUpgrades.getLevel('thornsDamage');
        const impactGuardPercent = baseThorns + (thornsLevel * this.inGameUpgrades.getIncrement('thornsDamage'));
        this.thornsDamage = Math.max(0, Math.min(0.6, impactGuardPercent / 100));

        if (typeof TalentTree !== 'undefined') {
            const effects = TalentTree.getEffects();
            this.damage *= (1 + (effects.damageMult || 0));
            this.attackSpeed = this.attackSpeed / Math.max(0.05, 1 + (effects.attackSpeedMult || 0));
            this.maxHealth *= (1 + (effects.maxHealthMult || 0));
            this.healthRegen += (effects.healthRegenFlat || 0);
        }

        if (this.externalBonuses) {
            this.damage *= (1 + (this.externalBonuses.damageMult || 0));
            this.attackSpeed = this.attackSpeed / Math.max(0.05, 1 + (this.externalBonuses.attackSpeedMult || 0));
            this.maxHealth *= (1 + (this.externalBonuses.maxHealthMult || 0));
            this.range += (this.externalBonuses.rangeFlat || 0);
            this.healthRegen += (this.externalBonuses.healthRegenFlat || 0);
            this.defense = Math.min(0.85, Math.max(0, this.defense + (this.externalBonuses.defenseFlat || 0)));
        }

        const exhaustedUpgradeStacks = this.progressionBonuses && Number.isFinite(this.progressionBonuses.exhaustedUpgradeStacks)
            ? Math.max(0, this.progressionBonuses.exhaustedUpgradeStacks)
            : 0;
        if (exhaustedUpgradeStacks > 0) {
            const statMultiplier = Math.pow(1.05, exhaustedUpgradeStacks);
            const attackIntervalMultiplier = Math.pow(0.95, exhaustedUpgradeStacks);
            this.damage *= statMultiplier;
            this.attackSpeed *= attackIntervalMultiplier;
            this.maxHealth *= statMultiplier;
            this.range *= statMultiplier;
        }

        this.maxHealth = Math.max(1, this.maxHealth);
        this.healthRegen = Math.max(0, this.healthRegen);
        this.damage = Math.max(0.1, this.damage);
        if (Number.isFinite(this.health)) {
            this.health = Math.min(this.maxHealth, this.health);
        }
    }

    


    checkEvolution(wave) {
        return;
    }

    evolve(stage) {
        this.evolutionStage = stage;
        
        
        switch(stage) {
            case 1: 
                this.damage *= 1.2;
                this.permanentEffects.piercingChance = (this.permanentEffects.piercingChance || 0) + 0.15;
                Game.createFloatingText(this.x, this.y - 100, typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('floatEvoBallist', 'EVOLUTION: BALLISTA') : 'EVOLUTION: BALLISTA', '#f1c40f');
                break;
            case 2: 
                this.attackSpeed *= 0.8; 
                this.multishotChance += 0.2;
                Game.createFloatingText(this.x, this.y - 100, typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('floatEvoSpire', 'EVOLUTION: SPIRE') : 'EVOLUTION: SPIRE', '#9b59b6');
                break;
            case 3: 
                this.maxHealth *= 1.5;
                this.health = this.maxHealth;
                this.defense = Math.min(0.85, this.defense + 0.1);
                Game.createFloatingText(this.x, this.y - 100, typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('floatEvoCitadel', 'EVOLUTION: CITADEL') : 'EVOLUTION: CITADEL', '#e74c3c');
                break;
        }

        
        if (typeof Game !== 'undefined') {
            Game.shake = 50;
            Game.createLevelUpEffect();
        }
    }

    update(deltaTime, waveManager, currentTime) {
        const gameSpeed = (typeof Game !== 'undefined' && Game.gameSpeed) ? Game.gameSpeed : 1;
        const now = Date.now();
        this.cleanupDebuffs(now);
        
        
        this.pulsePhase += 0.05 * gameSpeed;
        if (Tower.imagesLoaded && Tower.images.full) {
            this.spriteTime += deltaTime * gameSpeed;
            const msPerFrame = 1000 / Math.max(1, Tower.spriteFps);
            const cycleMs = msPerFrame * Math.max(1, Tower.spriteFrames);
            if (this.spriteTime >= cycleMs) {
                this.spriteTime %= cycleMs;
            }
            this.currentSpriteFrame = Math.floor(this.spriteTime / msPerFrame) % Math.max(1, Tower.spriteFrames);
        }
        
        
        const effectiveRegen = this.getEffectiveHealthRegen(now);
        if (effectiveRegen > 0 && this.health < this.maxHealth) {
            const deltaSeconds = Math.max(0, Number(deltaTime) || 0) / 1000;
            if (deltaSeconds > 0) {
                this.heal(effectiveRegen * deltaSeconds);
                this.lastRegenTime = currentTime;
            }
        }
        
        
        this.target = waveManager.getClosestEnemy(this.x, this.y, this.range, {
            priorityMode: this.priorityMode || 'closest'
        });
        
        
        
        const killStreakBuff = (typeof Game !== 'undefined' && Game.upgradeEffects && Game.upgradeEffects.getKillStreakBuff)
            ? Game.upgradeEffects.getKillStreakBuff()
            : { attackSpeedBoost: 0, damageBoost: 0, active: false };
        const attackSpeedMultiplier = 1 + Math.max(0, killStreakBuff.attackSpeedBoost || 0);
        const adjustedAttackSpeed = this.attackSpeed / (gameSpeed * attackSpeedMultiplier);
        
        
        const attackNow = currentTime || performance.now();
        
        const disableTowerAttack = typeof Game !== 'undefined' && Game.debugCheats && Game.debugCheats.disableTowerAttack;
        if (!disableTowerAttack && this.target && (attackNow - this.lastAttackTime >= adjustedAttackSpeed)) {
            this.attack(waveManager);
            this.lastAttackTime = attackNow;
        }
        
        
        if (this.target) {
            const dx = this.target.x - this.x;
            const dy = this.target.y - this.y;
            this.rotation = Math.atan2(dy, dx);
        }
    }

    attack(waveManager) {
        
        const arrowType = this.inventory.useArrow();
        const arrowInfo = this.inventory.getArrowInfo(arrowType);
        
        
        
        
        
        const modifiedMultishotChance = (typeof Game !== 'undefined' && Game.upgradeEffects)
            ? Game.upgradeEffects.getModifiedChance(this.multishotChance, 'multishot')
            : this.multishotChance;

        const guaranteedExtra = Math.floor(modifiedMultishotChance); 
        const probabilisticExtra = Math.random() < (modifiedMultishotChance % 1) ? 1 : 0;
        const shotCount = 1 + guaranteedExtra + probabilisticExtra;
        
        
        this.fireArrow(this.target, arrowType, arrowInfo);
        
        if (shotCount > 1) {
            
            if (!this._cachedTargetsArray) {
                this._cachedTargetsArray = [];
            }
            
            
            waveManager.getEnemiesInRange(this.x, this.y, this.range, this._cachedTargetsArray);
            
            
            let validTargetsCount = 0;
            for (let i = 0; i < this._cachedTargetsArray.length; i++) {
                const e = this._cachedTargetsArray[i];
                if (e !== this.target && !e.markedForDeletion) {
                    this._cachedTargetsArray[validTargetsCount++] = e;
                }
            }
            this._cachedTargetsArray.length = validTargetsCount;
            
            
            const targetsToPick = Math.min(shotCount - 1, validTargetsCount);
            
            for (let i = 0; i < targetsToPick; i++) {
                const randIdx = i + Math.floor(Math.random() * (validTargetsCount - i));
                
                const randomTarget = this._cachedTargetsArray[randIdx];
                this._cachedTargetsArray[randIdx] = this._cachedTargetsArray[i];
                this._cachedTargetsArray[i] = randomTarget;
                
                this.fireArrow(randomTarget, arrowType, arrowInfo);
            }
        }
    }

    fireArrow(target, arrowType, arrowInfo) {
        if (!target) return;

        this.shotCounter++;
        
        
        const modifiedCritChance = (typeof Game !== 'undefined' && Game.upgradeEffects)
            ? Game.upgradeEffects.getModifiedChance(this.critChance, 'critChance')
            : this.critChance;
        const isCrit = Math.random() < modifiedCritChance;
        let finalDamage = isCrit ? this.damage * this.critMultiplier : this.damage;

        const killStreakBuff = (typeof Game !== 'undefined' && Game.upgradeEffects && Game.upgradeEffects.getKillStreakBuff)
            ? Game.upgradeEffects.getKillStreakBuff()
            : { attackSpeedBoost: 0, damageBoost: 0, active: false };
        if (killStreakBuff.damageBoost > 0) {
            finalDamage *= (1 + killStreakBuff.damageBoost);
        }

        if (typeof TalentTree !== 'undefined') {
            const talentEffects = TalentTree.getEffects();
            if (talentEffects.overpressureEveryShots > 0 && this.shotCounter % talentEffects.overpressureEveryShots === 0) {
                finalDamage *= (1 + (talentEffects.overpressureDamageMult || 0));
            }
        }
        
        
        if (isCrit && typeof Game !== 'undefined' && Game.cardEffects) {
            Game.cardEffects.onCriticalHit();
        }

        if (target && (target.isElite || target.isBoss) && this.monsterHunterDamageMult > 0) {
            finalDamage *= (1 + this.monsterHunterDamageMult);
        }
        
        
        finalDamage *= arrowInfo.damage;
        
        const speed = 20;
        
        
        if (typeof AudioManager !== 'undefined') {
            AudioManager.playSound('shoot');
        }
        
        
        const arrowParams = {
            type: arrowType,
            damage: finalDamage,
            speed: speed,
            isCrit: isCrit,
            vampirismChance: this.vampirismChance,
            vampirismAmount: this.vampirismAmount,
            piercing: Math.random() < (this.permanentEffects.piercingChance || 0) 
        };

        let arrow;
        if (typeof PoolManager !== 'undefined') {
            arrow = PoolManager.acquire('arrow', this.x, this.y, target, arrowParams);
        } else {
            arrow = new Arrow(this.x, this.y, target, arrowParams);
        }
        Game.addProjectile(arrow);
        
        
        if (Game.upgradeEffects) {
            Game.upgradeEffects.onArrowFired(arrow, target);
        }
        
    }

    


    applyVampirism(damageDealt) {
        if (this.vampirismChance > 0 && Math.random() < this.vampirismChance) {
            const healAmount = this.getVampirismHealAmount(damageDealt, this.vampirismAmount);
            this.heal(healAmount);
            
            
            if (typeof Game !== 'undefined') {
                Game.createFloatingText(this.x, this.y - 30, `+${Math.floor(healAmount)} ❤️`, '#e74c3c');
            }
        }
    }

    getVampirismHealAmount(damageDealt, vampirismAmount = this.vampirismAmount) {
        const rawHeal = Math.max(0, Number(damageDealt) || 0) * Math.max(0, Number(vampirismAmount) || 0);
        const maxHealPerHit = Math.max(0.75, this.maxHealth * 0.02);
        return Math.min(rawHeal, maxHealPerHit);
    }

    cleanupDebuffs(now = Date.now()) {
        if (!this.debuffs) {
            return;
        }

        if (now >= this.debuffs.woundUntil) {
            this.debuffs.woundUntil = 0;
            this.debuffs.woundRegenMultiplier = 1;
        }

        if (now >= this.debuffs.sunderUntil) {
            this.debuffs.sunderUntil = 0;
            this.debuffs.sunderFlat = 0;
        }

        if (now >= this.debuffs.markedUntil) {
            this.debuffs.markedUntil = 0;
            this.debuffs.markedDamageMult = 1;
        }
    }

    getEffectiveHealthRegen(now = Date.now()) {
        this.cleanupDebuffs(now);
        const regenMultiplier = now < this.debuffs.woundUntil
            ? Math.max(0, Number(this.debuffs.woundRegenMultiplier) || 0)
            : 1;
        return Math.max(0, this.healthRegen * regenMultiplier);
    }

    getCurrentDefense(now = Date.now()) {
        this.cleanupDebuffs(now);
        const sunderFlat = now < this.debuffs.sunderUntil
            ? Math.max(0, Number(this.debuffs.sunderFlat) || 0)
            : 0;
        return Math.max(0, Math.min(0.95, this.defense - sunderFlat));
    }

    getIncomingDamageMultiplier(now = Date.now()) {
        this.cleanupDebuffs(now);
        if (now < this.debuffs.markedUntil) {
            return Math.max(1, Number(this.debuffs.markedDamageMult) || 1);
        }
        return 1;
    }

    applyDebuff(kind, options = {}) {
        if (!this.debuffs) {
            return;
        }

        const durationSec = Math.max(0, Number(options.durationSec) || 0);
        if (durationSec <= 0) {
            return;
        }

        const now = Date.now();
        const until = now + durationSec * 1000;
        const t = (key, fallback) => {
            if (typeof LocalizationManager !== 'undefined' && LocalizationManager && typeof LocalizationManager.t === 'function') {
                return LocalizationManager.t(key, fallback);
            }
            return fallback;
        };

        if (kind === 'wound') {
            this.debuffs.woundUntil = Math.max(this.debuffs.woundUntil, until);
            this.debuffs.woundRegenMultiplier = Math.min(this.debuffs.woundRegenMultiplier, Math.max(0, Number(options.regenMultiplier) || 0));
            if (typeof Game !== 'undefined' && Game && typeof Game.createFloatingText === 'function') {
                Game.createFloatingText(this.x, this.y - 108, t('towerDebuff_wound', '🩸 Реген сорван'), '#ff8a80');
            }
            return;
        }

        if (kind === 'sunder') {
            this.debuffs.sunderUntil = Math.max(this.debuffs.sunderUntil, until);
            this.debuffs.sunderFlat = Math.max(this.debuffs.sunderFlat, Math.max(0, Number(options.defenseFlat) || 0));
            if (typeof Game !== 'undefined' && Game && typeof Game.createFloatingText === 'function') {
                Game.createFloatingText(this.x, this.y - 108, t('towerDebuff_sunder', '🪓 Броня расколота'), '#ffd166');
            }
            return;
        }

        if (kind === 'mark') {
            this.debuffs.markedUntil = Math.max(this.debuffs.markedUntil, until);
            this.debuffs.markedDamageMult = Math.max(this.debuffs.markedDamageMult, Math.max(1, Number(options.damageMult) || 1));
            if (typeof Game !== 'undefined' && Game && typeof Game.createFloatingText === 'function') {
                Game.createFloatingText(this.x, this.y - 108, t('towerDebuff_mark', '👁 Метка бездны'), '#d291ff');
            }
        }
    }

    applyAttackerDebuffs(attacker) {
        if (!attacker) {
            return;
        }

        const sourceEnemyType = attacker.sourceEnemyType || attacker.type || null;
        const sourceBossProfileId = attacker.sourceBossProfileId || null;

        if (sourceEnemyType === 'cyclop' || sourceBossProfileId === 'frontier_bulwark') {
            this.applyDebuff('wound', {
                durationSec: attacker.woundDurationSec || 4,
                regenMultiplier: attacker.woundRegenMultiplier || 0.25
            });
        }

        if (sourceEnemyType === 'ogre' || sourceBossProfileId === 'attrition_revenant') {
            this.applyDebuff('sunder', {
                durationSec: attacker.defenseSunderDurationSec || 5,
                defenseFlat: attacker.defenseSunderFlat || 0.18
            });
        }

        if (sourceEnemyType === 'demon' || sourceBossProfileId === 'eclipse_harbinger') {
            this.applyDebuff('mark', {
                durationSec: attacker.markDurationSec || 4,
                damageMult: attacker.markDamageTakenMult || 1.22
            });
        }
    }

    
    switchArrowType(type) {
        return this.inventory.switchType(type);
    }
    
    
    getCurrentArrowType() {
        return this.inventory.getCurrentType();
    }
    
    
    addArrows(type, amount) {
        const result = this.inventory.addArrows(type, amount);
        if (result) {
            
            UI.updateArrowCount(type, this.inventory.getCount(type));
        }
        return result;
    }

    
    takeDamage(amount, attacker = null) {
        const now = Date.now();
        if (typeof TalentTree !== 'undefined') {
            const talentEffects = TalentTree.getEffects();
            const shieldReduction = talentEffects.lowHpShieldDamageReduction || 0;
            const shieldDurationMs = (talentEffects.lowHpShieldDurationSec || 0) * 1000;
            const shieldCooldownMs = (talentEffects.lowHpShieldCooldownSec || 0) * 1000;

            if (
                shieldReduction > 0 &&
                this.health / Math.max(1, this.maxHealth) <= 0.25 &&
                now >= this.lowHpShieldCooldownUntil &&
                now >= this.lowHpShieldUntil
            ) {
                this.lowHpShieldUntil = now + shieldDurationMs;
                this.lowHpShieldCooldownUntil = now + shieldCooldownMs;
                this.lowHpShieldActivatedAt = now;

                if (typeof Game !== 'undefined') {
                    const msg = (typeof LocalizationManager !== 'undefined')
                        ? LocalizationManager.t('talent_lastBastion_trigger', '🛡️ Последний бастион!')
                        : '🛡️ Последний бастион!';
                    Game.createFloatingText(this.x, this.y - 108, msg, '#66d9ff');
                }
            }
        }

        
        const safeDefense = this.getCurrentDefense(now);
        const incomingDamage = Math.max(0, Number(amount) || 0) * this.getIncomingDamageMultiplier(now);
        let actualDamage = incomingDamage * (1 - safeDefense);

        
        if (attacker && this.thornsDamage > 0) {
            actualDamage *= (1 - this.thornsDamage);
        }

        if (now < this.lowHpShieldUntil && typeof TalentTree !== 'undefined') {
            const talentEffects = TalentTree.getEffects();
            const shieldReduction = Math.max(0, Math.min(0.9, talentEffects.lowHpShieldDamageReduction || 0));
            actualDamage *= (1 - shieldReduction);
        }
        const blockedDamage = Math.max(0, incomingDamage - actualDamage);
        this.health -= actualDamage;
        this.applyAttackerDebuffs(attacker);
        
        if (attacker && this.thornsDamage > 0 && !attacker.markedForDeletion) {
            const dx = attacker.x - this.x;
            const dy = attacker.y - this.y;
            const dist = Math.sqrt(dx * dx + dy * dy) || 1;
            const pushDistance = 8 + this.thornsDamage * 22;
            attacker.x += (dx / dist) * pushDistance;
            attacker.y += (dy / dist) * pushDistance;

            attacker.slowFactor = Math.min(attacker.slowFactor || 1.0, Math.max(0.45, 1 - this.thornsDamage));
            attacker.slowTimer = Math.max(attacker.slowTimer || 0, 28);

            if (typeof Game !== 'undefined') {
                const reducedPercent = Math.round(this.thornsDamage * 100);
                Game.createFloatingText(this.x, this.y - 84, `🛡️ -${reducedPercent}%`, '#4fc3f7');
            }
        }
        
        
        if (typeof Game !== 'undefined') {
            Game.createHitEffect(this.x, this.y, false);

            const damageText = actualDamage < 1 ? actualDamage.toFixed(1) : Math.floor(actualDamage);
            Game.createFloatingText(this.x, this.y - 58, `-${damageText} ❤️`, '#ff6b6b');

            if (blockedDamage > 0.2) {
                const blockedText = blockedDamage < 1 ? blockedDamage.toFixed(1) : Math.floor(blockedDamage);
                Game.createFloatingText(this.x, this.y - 84, `🛡️ ${blockedText}`, '#4fc3f7');
            }
        }
        
        
        if (typeof AudioManager !== 'undefined') {
            AudioManager.playSound('healthLoss');
        }
        
        if (this.health <= 0) {
            Game.endGame();
        }
        
        return actualDamage;
    }

    heal(amount) {
        this.health = Math.min(this.maxHealth, this.health + amount);
    }

    


    getUpgradeCost(type) {
        if (this.inGameUpgrades) {
            return this.inGameUpgrades.getCost(type);
        }
        return Infinity;
    }

    


    getUpgradeLevel(type) {
        if (this.inGameUpgrades) {
            return this.inGameUpgrades.getLevel(type);
        }
        return 0;
    }

    


    upgrade(type, playerGold) {
        if (!this.inGameUpgrades) return { success: false };

        const previousMaxHealth = Math.max(1, Number(this.maxHealth) || 1);
        const previousHealth = Math.max(0, Number(this.health) || 0);
        const healthRatio = previousHealth / previousMaxHealth;
        
        const result = this.inGameUpgrades.buy(type, playerGold);
        
        if (result.success) {
            
            if (typeof this.recalculateStats === 'function') {
                this.recalculateStats();
            } else {
                console.warn('recalculateStats not found on Tower');
            }

            if (type === 'maxHealth') {
                this.health = Math.min(this.maxHealth, Math.max(0, this.maxHealth * healthRatio));
            }
            
            
            if (typeof Game !== 'undefined') {
                Game.createUpgradeEffect(this.x, this.y);
            }
            
            
            if (typeof AudioManager !== 'undefined') {
                AudioManager.playSound('towerUpgrade');
            }
        }
        
        return result;
    }

    draw(ctx) {
        ctx.save();

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.range, 0, Math.PI * 2);
        
        if (this.showRangeHighlight) {
            const highlightAlpha = 0.3 + Math.sin(Date.now() * 0.01) * 0.1;
            ctx.fillStyle = `rgba(231, 76, 60, ${highlightAlpha})`;
            ctx.strokeStyle = 'rgba(231, 76, 60, 0.8)';
            ctx.lineWidth = 4;
        } else {
            ctx.fillStyle = 'rgba(52, 152, 219, 0.2)';
            ctx.strokeStyle = 'rgba(52, 152, 219, 0.5)';
            ctx.lineWidth = 2;
        }
        
        ctx.fill();
        ctx.setLineDash([8, 4]);
        ctx.stroke();
        ctx.setLineDash([]);

        this.drawTowerShadow(ctx);
        
        
        if (this.target) {
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.target.x, this.target.y);
            ctx.strokeStyle = 'rgba(231, 76, 60, 0.15)';
            ctx.lineWidth = 2;
            ctx.setLineDash([5, 5]);
            ctx.stroke();
            ctx.setLineDash([]);
            
            
            ctx.beginPath();
            ctx.arc(this.target.x, this.target.y, this.target.radius + 5, 0, Math.PI * 2);
            ctx.strokeStyle = 'rgba(231, 76, 60, 0.4)';
            ctx.lineWidth = 2;
            ctx.stroke();
        }

        
        if (Tower.imagesLoaded) {
            const currentImage = Tower.images.full;
            if (currentImage) {
                const frameCount = Math.max(1, Tower.spriteFrames);
                const frameWidth = Math.floor(currentImage.width / frameCount) || currentImage.width;
                const frameHeight = currentImage.height;
                const safeFrame = Math.max(0, Math.min(frameCount - 1, this.currentSpriteFrame || 0));
                const size = this.radius * 3.8;
                const drawWidth = size * (frameWidth / Math.max(1, frameHeight));
                const lowHpTint = this.health / this.maxHealth < 0.35 ? 0.9 : 1;
                ctx.save();
                ctx.globalAlpha = lowHpTint;
                ctx.drawImage(
                    currentImage,
                    safeFrame * frameWidth,
                    0,
                    frameWidth,
                    frameHeight,
                    this.x - drawWidth / 2,
                    this.y - size / 2 - 16,
                    drawWidth,
                    size
                );
                ctx.restore();
            } else {
                this.drawFallbackTower(ctx);
            }
        } else {
            
            this.drawFallbackTower(ctx);
        }

        
        if (Date.now() < this.lowHpShieldUntil) {
            const pulse = (Math.sin(Date.now() * 0.02) + 1) * 0.5;
            const shieldRadius = this.radius + 20 + pulse * 6;
            ctx.beginPath();
            ctx.arc(this.x, this.y + 6, shieldRadius, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(102, 217, 255, ${0.55 + pulse * 0.25})`;
            ctx.lineWidth = 4;
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(this.x, this.y + 6, shieldRadius - 8, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(171, 237, 255, ${0.28 + pulse * 0.2})`;
            ctx.lineWidth = 2;
            ctx.stroke();
        }

        ctx.restore();
        
        
        this.drawHealthBar(ctx);
    }

    drawFallbackTower(ctx) {
        const towerW = 50;
        const towerH = 70;
        
        
        ctx.fillStyle = '#7f8c8d';
        ctx.fillRect(this.x - towerW/2 - 5, this.y + 15, towerW + 10, 20);
        ctx.strokeStyle = '#555';
        ctx.lineWidth = 2;
        ctx.strokeRect(this.x - towerW/2 - 5, this.y + 15, towerW + 10, 20);
        
        
        const woodGradient = ctx.createLinearGradient(this.x - towerW/2, 0, this.x + towerW/2, 0);
        woodGradient.addColorStop(0, '#8B4513');
        woodGradient.addColorStop(0.5, '#A0522D');
        woodGradient.addColorStop(1, '#8B4513');
        ctx.fillStyle = woodGradient;
        ctx.fillRect(this.x - towerW/2, this.y - towerH/2 + 10, towerW, towerH);
        
        
        ctx.strokeStyle = '#654321';
        ctx.lineWidth = 2;
        ctx.strokeRect(this.x - towerW/2, this.y - towerH/2 + 10, towerW, towerH);
        
        
        ctx.strokeStyle = '#654321';
        ctx.lineWidth = 1;
        for (let i = 1; i < 4; i++) {
            const y = this.y - towerH/2 + 10 + (towerH / 4) * i;
            ctx.beginPath();
            ctx.moveTo(this.x - towerW/2, y);
            ctx.lineTo(this.x + towerW/2, y);
            ctx.stroke();
        }
        
        
        ctx.fillStyle = '#2c3e50';
        ctx.fillRect(this.x - 12, this.y - 15, 8, 12);
        ctx.fillRect(this.x + 4, this.y - 15, 8, 12);
        ctx.fillRect(this.x - 12, this.y + 5, 8, 12);
        ctx.fillRect(this.x + 4, this.y + 5, 8, 12);
        
        
        ctx.fillStyle = '#DAA520';
        ctx.beginPath();
        ctx.moveTo(this.x - towerW/2 - 15, this.y - towerH/2 + 5);
        ctx.lineTo(this.x, this.y - towerH/2 - 25);
        ctx.lineTo(this.x + towerW/2 + 15, this.y - towerH/2 + 5);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = '#B8860B';
        ctx.stroke();
    }

    drawTowerShadow(ctx) {
        ctx.save();

        const timeOfDay = (typeof Game !== 'undefined' && Game.timeOfDay) ? Game.timeOfDay : 0;
        const isDusk = timeOfDay >= 0.4 && timeOfDay <= 0.6;

        
        let shadowAlpha = 0.26;
        if (isDusk) {
            shadowAlpha = 0.24;
        } else if (timeOfDay >= 0.6) {
            shadowAlpha = 0.2;
        }

        const shadowWidth = this.radius * 1.8;
        const shadowHeight = this.radius * 0.5;
        const shadowX = this.x - this.radius * 0.36;
        const shadowY = this.y + this.radius * 1.62;

        let auraColor = 'rgba(116, 196, 235, 0.1)';
        if (typeof Game !== 'undefined' && Game && typeof Game.getStageVisualProfile === 'function') {
            auraColor = Game.getStageVisualProfile().towerAura || auraColor;
        }

        const auraGradient = ctx.createRadialGradient(
            shadowX,
            shadowY - shadowHeight * 0.2,
            shadowWidth * 0.15,
            shadowX,
            shadowY,
            shadowWidth * 1.5
        );
        auraGradient.addColorStop(0, auraColor);
        auraGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = auraGradient;
        ctx.beginPath();
        ctx.ellipse(shadowX, shadowY, shadowWidth * 1.45, shadowHeight * 1.6, 0, 0, Math.PI * 2);
        ctx.fill();

        if (Tower.imagesLoaded && Tower.images.full) {
            const currentImage = Tower.images.full;
            const frameCount = Math.max(1, Tower.spriteFrames);
            const frameWidth = Math.floor(currentImage.width / frameCount) || currentImage.width;
            const frameHeight = currentImage.height;
            const safeFrame = Math.max(0, Math.min(frameCount - 1, this.currentSpriteFrame || 0));
            const towerHeight = this.radius * 3.8;
            const towerWidth = towerHeight * (frameWidth / Math.max(1, frameHeight));

            ctx.save();
            ctx.translate(shadowX, shadowY + shadowHeight * 0.28);
            ctx.scale(1.22, -0.54);
            ctx.globalAlpha = shadowAlpha * 0.55;
            ctx.filter = 'brightness(0)';
            ctx.drawImage(
                currentImage,
                safeFrame * frameWidth,
                0,
                frameWidth,
                frameHeight,
                -towerWidth / 2,
                -towerHeight * 0.82,
                towerWidth,
                towerHeight
            );
            ctx.filter = 'none';
            ctx.globalAlpha = shadowAlpha * 0.12;
            ctx.drawImage(
                currentImage,
                safeFrame * frameWidth,
                0,
                frameWidth,
                frameHeight,
                -towerWidth / 2,
                -towerHeight * 0.76,
                towerWidth,
                towerHeight
            );
            ctx.restore();
        }

        ctx.restore();
    }

    drawHealthBar(ctx) {
        const barWidth = this.radius * 2.2;
        const barHeight = 8;
        const healthPercent = Math.max(0, Math.min(1, this.health / this.maxHealth));
        const barX = this.x - barWidth / 2;
        const barY = this.y + this.radius + 26;
        
        
        ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
        ctx.fillRect(barX, barY, barWidth, barHeight);
        
        
        const healthGradient = ctx.createLinearGradient(
            barX, 0, barX + barWidth, 0
        );
        if (healthPercent > 0.5) {
            healthGradient.addColorStop(0, '#27ae60');
            healthGradient.addColorStop(1, '#2ecc71');
        } else if (healthPercent > 0.25) {
            healthGradient.addColorStop(0, '#f39c12');
            healthGradient.addColorStop(1, '#f1c40f');
        } else {
            healthGradient.addColorStop(0, '#e74c3c');
            healthGradient.addColorStop(1, '#c0392b');
        }
        
        ctx.fillStyle = healthGradient;
        ctx.fillRect(barX, barY, barWidth * healthPercent, barHeight);
        
        
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.lineWidth = 1;
        ctx.strokeRect(barX, barY, barWidth, barHeight);
    }
}
