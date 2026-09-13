const ENEMY_ANIMATION_LIBRARY = {
    wraith: {
        variants: ['Wraith_01', 'Wraith_02', 'Wraith_03'],
        states: {
            walk: {
                folder: 'Walking',
                pattern: '{variant}_Moving Forward_{index}.png',
                frameCount: 12,
                fps: 11,
                loop: true
            },
            attack: {
                folder: 'Attacking',
                pattern: '{variant}_Attack_{index}.png',
                frameCount: 12,
                fps: 13,
                loop: false
            },
            cast: {
                folder: 'Casting Spells',
                pattern: '{variant}_Casting Spells_{index}.png',
                frameCount: 18,
                fps: 12,
                loop: false
            }
        }
    },
    wizard: {
        variants: ['Wizard - 03'],
        states: {
            walk: {
                folder: 'PNG Sequences/Walking',
                pattern: 'Walking_{index}.png',
                frameCount: 18,
                fps: 10,
                loop: true
            },
            cast: {
                folder: 'PNG Sequences/Casting Spells',
                pattern: 'Casting Spells_{index}.png',
                frameCount: 12,
                fps: 12,
                loop: false
            }
        },
        effectSprite: 'Game Objects/Spells Effect.png'
    },
    necromancer: {
        variants: ['Necromancer_03'],
        states: {
            walk: {
                folder: 'PNG Sequences/Walking',
                pattern: 'Necromancer_03_Walking_{index}.png',
                frameCount: 18,
                fps: 10,
                loop: true
            },
            attack: {
                folder: 'PNG Sequences/Attacking',
                pattern: 'Necromancer_03_Casting Spells_{index}.png',
                frameCount: 12,
                fps: 11,
                loop: false
            }
        }
    },
    skull: {
        variants: ['Skull 01', 'Skull 02', 'Skull 03'],
        states: {
            walk: {
                folder: 'PNG Sequences/Walking',
                pattern: 'Walking_{index}.png',
                frameCount: 18,
                fps: 11,
                loop: true
            },
            attack: {
                folder: 'PNG Sequences/Attacking',
                pattern: 'Attacking_{index}.png',
                frameCount: 12,
                fps: 13,
                loop: false
            }
        }
    },
    cyclop: {
        variants: ['Cyclop_01', 'Cyclop_02', 'Cyclop_03'],
        states: {
            walk: {
                folder: 'PNG Sequences/Walking',
                pattern: 'Walking_{index}.png',
                frameCount: 18,
                fps: 10,
                loop: true
            },
            attack: {
                folder: 'PNG Sequences/Attacking',
                pattern: 'Attacking_{index}.png',
                frameCount: 12,
                fps: 11,
                loop: false
            },
            death: {
                folder: 'PNG Sequences/Dying',
                pattern: 'Dying_{index}.png',
                frameCount: 15,
                fps: 10,
                loop: false
            }
        }
    },
    ogre: {
        variants: ['Ogre_01', 'Ogre_02', 'Ogre_03'],
        states: {
            walk: {
                folder: 'PNG Sequences/Walking',
                pattern: 'Walking_{index}.png',
                frameCount: 18,
                fps: 10,
                loop: true
            },
            attack: {
                folder: 'PNG Sequences/Attacking',
                pattern: 'Attacking_{index}.png',
                frameCount: 12,
                fps: 10,
                loop: false
            },
            death: {
                folder: 'PNG Sequences/Dying',
                pattern: 'Dying_{index}.png',
                frameCount: 15,
                fps: 10,
                loop: false
            }
        }
    },
    giantSkeleton: {
        variants: ['Giant_Skeleton_01', 'Giant_Skeleton_02', 'Giant_Skeleton_03'],
        states: {
            walk: {
                folder: 'PNG Sequences/Walking',
                pattern: '{variant}_Walking_{index}.png',
                frameCount: 18,
                fps: 10,
                loop: true
            },
            attack: {
                folder: 'PNG Sequences/Attacking',
                pattern: '{variant}_Attacking_{index}.png',
                frameCount: 12,
                fps: 11,
                loop: false
            },
            cast: {
                folder: 'PNG Sequences/Taunt',
                pattern: '{variant}_Taunt_{index}.png',
                frameCount: 18,
                fps: 10,
                loop: false
            },
            death: {
                folder: 'PNG Sequences/Dying',
                pattern: '{variant}_Dying_{index}.png',
                frameCount: 15,
                fps: 10,
                loop: false
            }
        }
    },
    demon: {
        variants: ['Demon_01', 'Demon_02', 'Demon_03'],
        states: {
            walk: {
                folder: 'PNG Sequences/Walking',
                pattern: '{variant}_Walking_{index}.png',
                frameCount: 18,
                fps: 10,
                loop: true
            },
            shoot: {
                folder: 'PNG Sequences/Attacking',
                pattern: '{variant}_Attacking_{index}.png',
                frameCount: 12,
                fps: 12,
                loop: false
            },
            death: {
                folder: 'PNG Sequences/Dying',
                pattern: '{variant}_Dying_{index}.png',
                frameCount: 15,
                fps: 10,
                loop: false
            }
        }
    },
    skeletonArcher: {
        variants: ['Skeleton_Archer_01', 'Skeleton_Archer_02', 'Skeleton_Archer_03'],
        states: {
            walk: {
                folder: 'PNG Sequences/Walking',
                pattern: '{variant}_Walking_{index}.png',
                frameCount: 18,
                fps: 10,
                loop: true
            },
            shoot: {
                folder: 'PNG Sequences/Shooting',
                pattern: '{variant}_Shooting_{index}.png',
                frameCount: 15,
                fps: 12,
                loop: false
            }
        },
        projectileSprite: 'Arrow.png'
    }
};

const ENEMY_VISUAL_PROFILES = {
    basic: { libraryId: 'wraith', variant: 'Wraith_01', baseScale: 3.05, yOffset: -6 },
    fast: { libraryId: 'wraith', variant: 'Wraith_02', baseScale: 2.9, yOffset: -6 },
    tank: { libraryId: 'wraith', variant: 'Wraith_03', baseScale: 3.45, yOffset: -2, shadowScale: 1.18, auraColor: 'rgba(118, 178, 226, 0.1)', hpBarScale: 1.12 },
    healer: { libraryId: 'wizard', variant: 'Wizard - 03', baseScale: 3.3, yOffset: -8, spellEffectScale: 1.2 },
    splitter: { libraryId: 'necromancer', variant: 'Necromancer_03', baseScale: 3.35, yOffset: -8 },
    boss: { libraryId: 'giantSkeleton', variants: ['Giant_Skeleton_01', 'Giant_Skeleton_02', 'Giant_Skeleton_03'], baseScale: 4.35, yOffset: -14 },
    skull: { libraryId: 'skull', variants: ['Skull 01', 'Skull 02', 'Skull 03'], baseScale: 3.02, yOffset: -9, shadowScale: 0.9, auraColor: 'rgba(232, 164, 92, 0.12)', hpBarScale: 0.96 },
    cyclop: { libraryId: 'cyclop', variants: ['Cyclop_01', 'Cyclop_02', 'Cyclop_03'], baseScale: 3.55, yOffset: -10, shadowScale: 1.16, auraColor: 'rgba(255, 154, 116, 0.12)', hpBarScale: 1.08 },
    ogre: { libraryId: 'ogre', variants: ['Ogre_01', 'Ogre_02', 'Ogre_03'], baseScale: 3.85, yOffset: -9, shadowScale: 1.2, auraColor: 'rgba(181, 227, 138, 0.12)', hpBarScale: 1.12 },
    demon: { libraryId: 'demon', variants: ['Demon_01', 'Demon_02', 'Demon_03'], baseScale: 3.25, yOffset: -9, shadowScale: 0.94, auraColor: 'rgba(212, 120, 184, 0.12)', projectileScale: 1.2, hpBarScale: 1.02 },
    archer: { libraryId: 'skeletonArcher', variants: ['Skeleton_Archer_01', 'Skeleton_Archer_02', 'Skeleton_Archer_03'], baseScale: 3.1, yOffset: -8, projectileScale: 1.45 }
};

function padAnimationIndex(index) {
    return String(index).padStart(3, '0');
}

function buildAnimationPath(variant, stateConfig, index) {
    const folder = stateConfig.folder.replace(/\\/g, '/');
    const fileName = stateConfig.pattern
        .replace(/\{variant\}/g, variant)
        .replace(/\{index\}/g, padAnimationIndex(index));
    return `assets/images/Enemy/${variant}/${folder}/${fileName}`;
}

class Enemy {
    static animationSets = {};
    static effectImages = {};
    static projectileImages = {};
    static backgroundLoadStarted = false;

    static getVisualProfile(type) {
        return ENEMY_VISUAL_PROFILES[type] || ENEMY_VISUAL_PROFILES.basic;
    }

    static chooseVariant(profile) {
        if (profile.variant) {
            return profile.variant;
        }
        const variants = Array.isArray(profile.variants) && profile.variants.length > 0
            ? profile.variants
            : (ENEMY_ANIMATION_LIBRARY[profile.libraryId] && ENEMY_ANIMATION_LIBRARY[profile.libraryId].variants) || ['Wraith_01'];
        return variants[Math.floor(Math.random() * variants.length)];
    }

    static ensureAnimationSet(libraryId, variant) {
        if (!Enemy.animationSets[libraryId]) {
            Enemy.animationSets[libraryId] = {};
        }
        if (!Enemy.animationSets[libraryId][variant]) {
            Enemy.animationSets[libraryId][variant] = { states: {} };
        }
        return Enemy.animationSets[libraryId][variant];
    }

    static loadProfileAssets(profileKeys) {
        const promises = [];

        profileKeys.forEach((profileKey) => {
            const profile = ENEMY_VISUAL_PROFILES[profileKey];
            if (!profile) {
                return;
            }
            const library = ENEMY_ANIMATION_LIBRARY[profile.libraryId];
            if (!library) {
                return;
            }

            const variants = profile.variant ? [profile.variant] : (profile.variants || library.variants || []);
            variants.forEach((variant) => {
                const set = Enemy.ensureAnimationSet(profile.libraryId, variant);

                Object.entries(library.states).forEach(([stateName, stateConfig]) => {
                    if (set.states[stateName]) {
                        return;
                    }

                    const stateEntry = {
                        frames: [],
                        fps: stateConfig.fps,
                        loop: stateConfig.loop,
                        loaded: false,
                        failed: false
                    };
                    set.states[stateName] = stateEntry;

                    const framePromises = [];
                    for (let i = 0; i < stateConfig.frameCount; i++) {
                        framePromises.push(new Promise((resolve) => {
                            const image = new Image();
                            image.onload = () => {
                                stateEntry.frames[i] = image;
                                resolve();
                            };
                            image.onerror = () => {
                                stateEntry.frames[i] = null;
                                resolve();
                            };
                            image.src = buildAnimationPath(variant, stateConfig, i);
                        }));
                    }

                    promises.push(Promise.all(framePromises).then(() => {
                        stateEntry.frames = stateEntry.frames.filter(Boolean);
                        stateEntry.loaded = stateEntry.frames.length > 0;
                        stateEntry.failed = !stateEntry.loaded;
                    }));
                });

                if (library.effectSprite && !Enemy.effectImages[variant]) {
                    promises.push(new Promise((resolve) => {
                        const image = new Image();
                        image.onload = () => {
                            Enemy.effectImages[variant] = image;
                            resolve();
                        };
                        image.onerror = () => resolve();
                        image.src = `assets/images/Enemy/${variant}/${library.effectSprite}`;
                    }));
                }

                if (library.projectileSprite && profile.libraryId !== 'skeletonArcher' && !Enemy.projectileImages[variant]) {
                    promises.push(new Promise((resolve) => {
                        const image = new Image();
                        image.onload = () => {
                            Enemy.projectileImages[variant] = image;
                            resolve();
                        };
                        image.onerror = () => resolve();
                        image.src = `assets/images/Enemy/${variant}/${library.projectileSprite}`;
                    }));
                }
            });
        });

        return Promise.all(promises);
    }

    static loadImages() {
        const startupProfiles = ['basic', 'fast', 'tank', 'healer', 'splitter', 'boss'];
        const backgroundProfiles = ['skull', 'archer', 'cyclop', 'ogre', 'demon'];
        const startupPromise = Enemy.loadProfileAssets(startupProfiles);

        if (!Enemy.projectileImages.__defaultArrow) {
            const globalArrowImage = new Image();
            globalArrowImage.onload = () => {
                Enemy.projectileImages.__defaultArrow = globalArrowImage;
            };
            globalArrowImage.onerror = () => {};
            globalArrowImage.src = 'assets/images/Arrow.png';
        }

        if (!Enemy.backgroundLoadStarted) {
            Enemy.backgroundLoadStarted = true;
            startupPromise.then(() => Enemy.loadProfileAssets(backgroundProfiles));
        }

        return startupPromise;
    }

    constructor(x, y, type, wave) {
        this.x = x;
        this.y = y;
        this.type = type;
        this.wave = wave;
        this.markedForDeletion = false;
        this.frozen = 0; 
        this.slowTimer = 0; 
        this.slowFactor = 1.0; 
        this.targetX = 960; 
        this.targetY = 540;
        
        
        const stats = this.getStats(type);
        const enemyCfg = (typeof BalanceRuntime !== 'undefined' && BalanceRuntime.get)
            ? (BalanceRuntime.get('enemies', {}) || {})
            : {};
        const scalingCfg = enemyCfg.scaling || {};
        const lateGameSurgeCfg = scalingCfg.lateGameSurge || {};
        const healerRangedCfg = enemyCfg.healerRanged || {};
        const archerRangedCfg = enemyCfg.archerRanged || {};
        this.stats = stats;
        
        
        this.isHealer = stats.isHealer || false;
        this.isRangedHealer = stats.isRangedHealer || false;
        this.isRangedAttacker = stats.isRangedAttacker || false;
        this.isRanged = this.isRangedHealer || this.isRangedAttacker;
        this.isSplitter = stats.isSplitter || false;
        this.isSmall = stats.isSmall || false;
        
        
        const waveScale = 1 + (wave - 1) * (scalingCfg.hpPerWave ?? 0.06);
        const bossStep = Math.floor((wave - 1) / (scalingCfg.hpPowerStep ?? 10));
        const powerMultiplier = Math.pow((scalingCfg.hpPowerMultiplier ?? 1.15), bossStep);

        const midWaveHpRampFromWave = scalingCfg.midWaveHpRampFromWave ?? 20;
        const midWaveHpRampPerWave = scalingCfg.midWaveHpRampPerWave ?? 0.1;
        const midWaveHpRampMaxBonus = scalingCfg.midWaveHpRampMaxBonus ?? 2.0;
        const midWaveHpRampBonus = wave > midWaveHpRampFromWave
            ? Math.min(midWaveHpRampMaxBonus, (wave - midWaveHpRampFromWave) * midWaveHpRampPerWave)
            : 0;
        const midWaveHpMultiplier = 1 + midWaveHpRampBonus;

        this.maxHealth = stats.health * waveScale * powerMultiplier * midWaveHpMultiplier;
        if (this.isSmall) this.maxHealth *= (scalingCfg.smallEnemyHpMultiplier ?? 0.3);
        this.health = this.maxHealth;
        
        
        const speedScale = 1 + (wave - 1) * (scalingCfg.speedPerWave ?? 0.02);
        this.speed = stats.speed * Math.min(speedScale, scalingCfg.speedMaxMultiplier ?? 2.5);
        if (this.isSmall) this.speed *= (scalingCfg.smallEnemySpeedMultiplier ?? 1.5);
        
        
        this.reward = Math.floor(stats.reward * (1 + (wave - 1) * (scalingCfg.rewardPerWave ?? 0.05)));
        if (this.isSmall) this.reward = Math.floor(this.reward * (scalingCfg.smallEnemyRewardMultiplier ?? 0.2));
        
        this.radius = stats.radius;
        if (this.isSmall) this.radius *= (scalingCfg.smallEnemyRadiusMultiplier ?? 0.6);
        
        this.color = stats.color;
        
        
        const damageScale = wave < (scalingCfg.damageLateFromWave ?? 11)
            ? (scalingCfg.damagePerWaveEarly ?? 0.05)
            : (scalingCfg.damagePerWaveLate ?? 0.1);
        this.damage = Math.floor(stats.damage * (1 + (wave - 1) * damageScale));
        if (this.isSmall) this.damage = Math.floor(this.damage * (scalingCfg.smallEnemyDamageMultiplier ?? 0.4));

        const lateFromWave = Number.isFinite(Number(lateGameSurgeCfg.fromWave))
            ? Math.max(1, Math.floor(Number(lateGameSurgeCfg.fromWave)))
            : 50;
        const normalizedWave = Number.isFinite(Number(wave)) ? Math.max(1, Math.floor(Number(wave))) : 1;
        const lateWaveCount = Math.max(0, normalizedWave - lateFromWave);

        if (lateWaveCount > 0) {
            const hpPerWaveMultiplier = Number.isFinite(Number(lateGameSurgeCfg.hpPerWaveMultiplier))
                ? Math.max(1, Number(lateGameSurgeCfg.hpPerWaveMultiplier))
                : 1.12;
            const damagePerWaveMultiplier = Number.isFinite(Number(lateGameSurgeCfg.damagePerWaveMultiplier))
                ? Math.max(1, Number(lateGameSurgeCfg.damagePerWaveMultiplier))
                : 1.1;
            const speedPerWaveMultiplier = Number.isFinite(Number(lateGameSurgeCfg.speedPerWaveMultiplier))
                ? Math.max(1, Number(lateGameSurgeCfg.speedPerWaveMultiplier))
                : 1.012;
            const speedMaxExtraMultiplier = Number.isFinite(Number(lateGameSurgeCfg.speedMaxExtraMultiplier))
                ? Math.max(1, Number(lateGameSurgeCfg.speedMaxExtraMultiplier))
                : 1.75;

            this.maxHealth *= Math.pow(hpPerWaveMultiplier, lateWaveCount);
            this.health = this.maxHealth;

            this.damage = Math.max(1, Math.floor(this.damage * Math.pow(damagePerWaveMultiplier, lateWaveCount)));

            const baseSpeedCap = stats.speed * (scalingCfg.speedMaxMultiplier ?? 2.5);
            const lateSpeedCap = baseSpeedCap * speedMaxExtraMultiplier;
            this.speed = Math.min(lateSpeedCap, this.speed * Math.pow(speedPerWaveMultiplier, lateWaveCount));
        }

        if (typeof Game !== 'undefined' && Game && typeof Game.getEnemyModifierSnapshot === 'function') {
            const modifiers = Game.getEnemyModifierSnapshot(Boolean(stats.isBoss));
            this.maxHealth *= Number.isFinite(modifiers.healthMult) ? modifiers.healthMult : 1;
            this.health = this.maxHealth;
            this.speed *= Number.isFinite(modifiers.speedMult) ? modifiers.speedMult : 1;
            this.reward = Math.max(1, Math.floor(this.reward * (Number.isFinite(modifiers.rewardMult) ? modifiers.rewardMult : 1)));
            this.damage = Math.max(1, Math.floor(this.damage * (Number.isFinite(modifiers.damageMult) ? modifiers.damageMult : 1)));
        }
        
        this.isBoss = stats.isBoss;
        this.isElite = stats.isElite;
        this.stageThemeId = (typeof StageThemes !== 'undefined' && typeof Game !== 'undefined' && Game)
            ? StageThemes.getThemeId(Game.currentStage)
            : 'frontier';
        this.bossProfileId = null;
        this.bossState = null;
        this.visualProfile = Enemy.getVisualProfile(this.type);
        this.visualVariant = Enemy.chooseVariant(this.visualProfile);
        Enemy.loadProfileAssets([this.type]);
        this.animationState = 'walk';
        this.animationFrameIndex = 0;
        this.animationStateTime = 0;
        this.animationHoldTime = 0;
        this.isDying = false;
        this.isDefeated = false;
        this.deathResolved = false;
        this.spellEffectTimer = 0;
        this.telegraphTimer = 0;
        this.telegraphColor = null;
        this.isPreparingShot = false;
        this.pendingProjectileData = null;
        this.shootWindupTimer = 0;
        
        
        this.hitFlash = 0;
        this.animationFrame = 0;
        this.wobblePhase = Math.random() * Math.PI * 2;
        this.healTimer = 0;
        this.healInterval = this.isHealer ? (healerRangedCfg.healIntervalFrames ?? 180) : 0;
        const rangedCfg = this.isRangedHealer ? healerRangedCfg : archerRangedCfg;
        this.rangedAttackInterval = this.isRanged ? (stats.rangedAttackIntervalFrames ?? rangedCfg.rangedAttackIntervalFrames ?? 78) : 0;
        this.rangedAttackTimer = this.isRanged ? -(Math.random() * this.rangedAttackInterval * 0.5) : 0;
        this.preferredAttackDistance = stats.preferredAttackDistance ?? rangedCfg.preferredAttackDistance ?? 135;
        this.minAttackDistance = stats.minAttackDistance ?? rangedCfg.minAttackDistance ?? 115;
        this.projectileSpeed = stats.projectileSpeed ?? rangedCfg.projectileSpeed ?? 5.5;
        this.projectileDamage = Math.max(1, Math.floor(this.damage * (stats.projectileDamageMultiplier ?? rangedCfg.projectileDamageMultiplier ?? 0.8)));
        this.projectileRadius = stats.projectileRadius ?? rangedCfg.projectileRadius ?? 9;
        this.projectileColor = stats.projectileColor || rangedCfg.projectileColor || '#9b59b6';
        this.shootWindupFrames = stats.shootWindupFrames ?? rangedCfg.shootWindupFrames ?? 0;
        this.woundDurationSec = Math.max(0, Number(stats.woundDurationSec) || 0);
        this.woundRegenMultiplier = Math.max(0, Number(stats.woundRegenMultiplier) || 0);
        this.defenseSunderDurationSec = Math.max(0, Number(stats.defenseSunderDurationSec) || 0);
        this.defenseSunderFlat = Math.max(0, Number(stats.defenseSunderFlat) || 0);
        this.markDurationSec = Math.max(0, Number(stats.markDurationSec) || 0);
        this.markDamageTakenMult = Math.max(1, Number(stats.markDamageTakenMult) || 1);
        this.controlResist = Math.max(0, Math.min(0.9, Number(stats.controlResist) || 0));
        this.threatPriority = Math.max(0, Number(stats.threatPriority) || 0);
        this.projectileSprite = this.isRangedAttacker
            ? (Enemy.projectileImages.__defaultArrow || null)
            : null;
        
        this.trail = [];
        this.maxTrailLength = 8;
        this.trailUpdateCounter = 0;

        if (this.isBoss) {
            this.initBossBehavior();
        }
    }

    initBossBehavior() {
        const stageDescriptor = (typeof StageThemes !== 'undefined' && typeof Game !== 'undefined' && Game && typeof StageThemes.getStageDescriptor === 'function')
            ? StageThemes.getStageDescriptor(Game.currentStage)
            : null;
        this.bossProfileId = stageDescriptor && stageDescriptor.bossProfileId
            ? stageDescriptor.bossProfileId
            : 'frontier_bulwark';
        this.bossState = {
            abilityTimer: -(Math.random() * 80),
            shieldTriggered: false,
            shieldTimer: 0,
            armorTimer: 0,
            greedRushTimer: 0,
            enraged: false,
            lastTextAt: 0
        };
    }

    getAnimationSet(state = this.animationState) {
        const profile = this.visualProfile || Enemy.getVisualProfile(this.type);
        const variantSet = profile && Enemy.animationSets[profile.libraryId]
            ? Enemy.animationSets[profile.libraryId][this.visualVariant]
            : null;
        const stateSet = this.getSpecificAnimationSet(state);

        if (stateSet && stateSet.loaded && stateSet.frames.length > 0) {
            return stateSet;
        }

        if (variantSet && variantSet.states.walk && variantSet.states.walk.loaded) {
            return variantSet.states.walk;
        }

        return null;
    }

    getSpecificAnimationSet(state) {
        const profile = this.visualProfile || Enemy.getVisualProfile(this.type);
        const variantSet = profile && Enemy.animationSets[profile.libraryId]
            ? Enemy.animationSets[profile.libraryId][this.visualVariant]
            : null;
        return variantSet && variantSet.states ? variantSet.states[state] : null;
    }

    supportsAnimationState(state) {
        const set = this.getSpecificAnimationSet(state);
        return Boolean(set && set.frames && set.frames.length > 0);
    }

    triggerAnimationState(state, holdMs = 0) {
        if (this.isDying && state !== 'death') {
            return;
        }
        if (!this.supportsAnimationState(state)) {
            return;
        }
        if (this.animationState !== state) {
            this.animationState = state;
            this.animationFrameIndex = 0;
            this.animationStateTime = 0;
        }
        this.animationHoldTime = Math.max(this.animationHoldTime, holdMs);
    }

    advanceAnimation(deltaTime, gameSpeed) {
        const activeSet = this.getAnimationSet(this.animationState);
        if (!activeSet || !activeSet.frames || activeSet.frames.length === 0) {
            return;
        }

        if (this.animationHoldTime > 0) {
            this.animationHoldTime = Math.max(0, this.animationHoldTime - (deltaTime * gameSpeed));
        }

        this.animationStateTime += deltaTime * gameSpeed;
        const msPerFrame = 1000 / Math.max(1, activeSet.fps || 10);

        if (activeSet.loop) {
            const cycleMs = activeSet.frames.length * msPerFrame;
            if (cycleMs > 0 && this.animationStateTime >= cycleMs) {
                this.animationStateTime %= cycleMs;
            }
            this.animationFrameIndex = Math.min(activeSet.frames.length - 1, Math.floor(this.animationStateTime / msPerFrame));
            return;
        }

        const frameIndex = Math.floor(this.animationStateTime / msPerFrame);
        if (frameIndex >= activeSet.frames.length) {
            this.animationFrameIndex = activeSet.frames.length - 1;
            if (this.animationState === 'death') {
                this.markedForDeletion = true;
                return;
            }
            if (this.animationHoldTime <= 0) {
                this.animationState = 'walk';
                this.animationFrameIndex = 0;
                this.animationStateTime = 0;
            }
        } else {
            this.animationFrameIndex = frameIndex;
        }
    }

    getCurrentFrameImage() {
        const activeSet = this.getAnimationSet(this.animationState);
        if (!activeSet || !activeSet.frames || activeSet.frames.length === 0) {
            return null;
        }
        return activeSet.frames[Math.max(0, Math.min(activeSet.frames.length - 1, this.animationFrameIndex))] || null;
    }

    getDrawScale() {
        const profile = this.visualProfile || Enemy.getVisualProfile(this.type);
        const baseScale = profile && Number.isFinite(profile.baseScale) ? profile.baseScale : 3;
        if (this.isSmall) {
            return baseScale * 0.84;
        }
        return baseScale;
    }

    getDrawYOffset() {
        const profile = this.visualProfile || Enemy.getVisualProfile(this.type);
        return profile && Number.isFinite(profile.yOffset) ? profile.yOffset : 0;
    }

    getProjectileSprite() {
        return this.projectileSprite || Enemy.projectileImages.__defaultArrow || null;
    }

    createProjectilePayload(tower) {
        return {
            x: this.x,
            y: this.y,
            targetX: tower.x,
            targetY: tower.y,
            damage: this.projectileDamage,
            speed: this.projectileSpeed,
            color: this.projectileColor,
            radius: this.projectileRadius,
            sourceType: this.isBoss ? 'boss_projectile' : 'enemy_projectile',
            sourceEnemyType: this.type,
            sourceBossProfileId: this.isBoss ? this.bossProfileId : null,
            woundDurationSec: this.woundDurationSec,
            woundRegenMultiplier: this.woundRegenMultiplier,
            defenseSunderDurationSec: this.defenseSunderDurationSec,
            defenseSunderFlat: this.defenseSunderFlat,
            markDurationSec: this.markDurationSec,
            markDamageTakenMult: this.markDamageTakenMult,
            spriteImage: this.getProjectileSprite(),
            spriteScale: this.visualProfile && this.visualProfile.projectileScale ? this.visualProfile.projectileScale : 1
        };
    }

    triggerTelegraph(color, duration = 32) {
        this.telegraphColor = color || '#9b59b6';
        this.telegraphTimer = Math.max(this.telegraphTimer, duration);
    }

    getBossMoveMultiplier() {
        if (!this.isBoss || !this.bossState) {
            return 1;
        }
        if (this.bossProfileId === 'greed_collector' && this.bossState.greedRushTimer > 0) {
            return 1.24;
        }
        if (this.bossProfileId === 'eclipse_harbinger' && this.bossState.enraged) {
            return 1.18;
        }
        if (this.bossProfileId === 'frontier_bulwark' && this.bossState.shieldTimer > 0) {
            return 1.08;
        }
        return 1;
    }

    getBossDamageMultiplier() {
        if (!this.isBoss || !this.bossState) {
            return 1;
        }
        if (this.bossProfileId === 'greed_collector' && this.bossState.greedRushTimer > 0) {
            return 1.15;
        }
        if (this.bossProfileId === 'eclipse_harbinger' && this.bossState.enraged) {
            return 1.22;
        }
        return 1;
    }

    getBossDamageTakenMultiplier() {
        if (!this.isBoss || !this.bossState) {
            return 1;
        }
        if (this.bossProfileId === 'frontier_bulwark' && this.bossState.shieldTimer > 0) {
            return 0.58;
        }
        if (this.bossProfileId === 'attrition_revenant' && this.bossState.armorTimer > 0) {
            return 0.78;
        }
        return 1;
    }

    showBossText(textKey, fallback, color = '#8ad7ff') {
        if (typeof Game === 'undefined' || !Game || typeof Game.createFloatingText !== 'function') {
            return;
        }
        const text = (typeof LocalizationManager !== 'undefined' && LocalizationManager.t)
            ? LocalizationManager.t(textKey, fallback)
            : fallback;
        Game.createFloatingText(this.x, this.y - this.radius - 32, text, color);
    }

    spawnBossMinions(types) {
        if (!Game.waveManager || !Array.isArray(types) || types.length === 0) {
            return;
        }

        const waveManager = Game.waveManager;
        const maxActiveEnemies = typeof waveManager.getMaxActiveEnemies === 'function'
            ? waveManager.getMaxActiveEnemies()
            : Math.max(1, Number(waveManager.maxActiveEnemies) || 10);
        const activeEnemiesCount = typeof waveManager.getActiveEnemiesCount === 'function'
            ? waveManager.getActiveEnemiesCount()
            : waveManager.enemies.length;
        const availableSlots = Math.max(0, maxActiveEnemies - activeEnemiesCount);
        const summonCount = Math.min(types.length, availableSlots);

        for (let i = 0; i < summonCount; i++) {
            const angle = (Math.PI * 2 / Math.max(1, summonCount)) * i;
            const spawnX = this.x + Math.cos(angle) * 42;
            const spawnY = this.y + Math.sin(angle) * 42;
            waveManager.enemies.push(new Enemy(spawnX, spawnY, types[i], this.wave));
        }
    }

    emitBossHealPulse(selfPercent, allyPercent, radius) {
        const safeRadius = radius || 170;
        const selfHeal = Math.max(0, this.maxHealth * (selfPercent || 0));
        this.health = Math.min(this.maxHealth, this.health + selfHeal);

        if (Game.waveManager) {
            for (let i = 0; i < Game.waveManager.enemies.length; i++) {
                const ally = Game.waveManager.enemies[i];
                if (!ally || ally === this || ally.markedForDeletion) {
                    continue;
                }
                const dx = ally.x - this.x;
                const dy = ally.y - this.y;
                if ((dx * dx + dy * dy) > (safeRadius * safeRadius)) {
                    continue;
                }
                const healAmount = Math.max(0, ally.maxHealth * (allyPercent || 0));
                if (healAmount > 0) {
                    ally.health = Math.min(ally.maxHealth, ally.health + healAmount);
                }
            }
        }

        if (Game && Array.isArray(Game.effects)) {
            Game.effects.push({
                x: this.x,
                y: this.y,
                radius: 18,
                alpha: 0.65,
                markedForDeletion: false,
                update(gameSpeed = 1) {
                    this.radius += 6 * gameSpeed;
                    this.alpha -= 0.025 * gameSpeed;
                    if (this.alpha <= 0) {
                        this.markedForDeletion = true;
                    }
                },
                draw(ctx) {
                    ctx.save();
                    ctx.globalAlpha = this.alpha;
                    ctx.strokeStyle = '#6fe2b0';
                    ctx.lineWidth = 5;
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.restore();
                }
            });
        }
    }

    fireBossVolley(targetX, targetY) {
        if (!Game.waveManager) {
            return;
        }

        const baseAngle = Math.atan2(targetY - this.y, targetX - this.x);
        const damage = Math.max(1, Math.floor(this.damage * this.getBossDamageMultiplier() * 0.55));
        [-0.2, 0, 0.2].forEach((offset) => {
            const angle = baseAngle + offset;
            Game.waveManager.enemyProjectiles.push(new EnemyProjectile({
                x: this.x,
                y: this.y,
                targetX: this.x + Math.cos(angle) * 320,
                targetY: this.y + Math.sin(angle) * 320,
                damage,
                speed: 6.2,
                color: '#7d5cff',
                radius: 10,
                sourceType: 'boss_volley',
                sourceEnemyType: this.type,
                sourceBossProfileId: this.bossProfileId,
                markDurationSec: 4,
                markDamageTakenMult: 1.24
            }));
        });
    }

    updateBossBehavior(tower, dtScale, gameSpeed) {
        if (!this.isBoss || !this.bossState || !tower) {
            return;
        }

        this.bossState.abilityTimer += dtScale * gameSpeed;
        this.bossState.shieldTimer = Math.max(0, this.bossState.shieldTimer - dtScale * gameSpeed);
        this.bossState.armorTimer = Math.max(0, this.bossState.armorTimer - dtScale * gameSpeed);
        this.bossState.greedRushTimer = Math.max(0, this.bossState.greedRushTimer - dtScale * gameSpeed);

        if (this.bossProfileId === 'frontier_bulwark') {
            if (!this.bossState.shieldTriggered && this.health <= this.maxHealth * 0.6) {
                this.bossState.shieldTriggered = true;
                this.bossState.shieldTimer = 220;
                this.triggerAnimationState('cast', 900);
                this.triggerTelegraph('#7ad3ff', 40);
                this.spellEffectTimer = 30;
                this.showBossText('bossAbility_frontier_bulwark', 'Bulwark rises', '#8ad7ff');
            }
            return;
        }

        if (this.bossProfileId === 'swarm_broodmother') {
            if (this.bossState.abilityTimer >= 220) {
                this.bossState.abilityTimer = 0;
                this.triggerAnimationState('cast', 820);
                this.triggerTelegraph('#f6c36d', 34);
                this.spellEffectTimer = 24;
                this.spawnBossMinions(this.wave >= 70 ? ['fast', 'demon', 'fast'] : ['fast', 'basic', 'fast']);
                this.showBossText('bossAbility_swarm_broodmother', 'Brood surge', '#f6c36d');
            }
            return;
        }

        if (this.bossProfileId === 'attrition_revenant') {
            if (this.bossState.abilityTimer >= 240) {
                this.bossState.abilityTimer = 0;
                this.bossState.armorTimer = 150;
                this.triggerAnimationState('cast', 860);
                this.triggerTelegraph('#8ff0b7', 38);
                this.spellEffectTimer = 30;
                this.emitBossHealPulse(0.08, 0.12, 190);
                this.showBossText('bossAbility_attrition_revenant', 'Revenant pulse', '#8ff0b7');
            }
            return;
        }

        if (this.bossProfileId === 'greed_collector') {
            if (this.bossState.abilityTimer >= 210) {
                this.bossState.abilityTimer = 0;
                this.bossState.greedRushTimer = 170;
                this.triggerAnimationState('cast', 720);
                this.triggerTelegraph('#ffd36c', 30);
                this.spellEffectTimer = 22;
                this.showBossText('bossAbility_greed_collector', 'Collector rush', '#ffd36c');
            }
            return;
        }

        if (this.bossProfileId === 'eclipse_harbinger') {
            if (!this.bossState.enraged && this.health <= this.maxHealth * 0.45) {
                this.bossState.enraged = true;
                this.triggerAnimationState('cast', 760);
                this.triggerTelegraph('#c6a8ff', 32);
                this.spellEffectTimer = 24;
                this.showBossText('bossAbility_eclipse_enrage', 'Eclipse frenzy', '#c6a8ff');
            }
            if (this.bossState.abilityTimer >= 170) {
                this.bossState.abilityTimer = 0;
                this.triggerAnimationState('cast', 920);
                this.triggerTelegraph('#b79cff', 40);
                this.spellEffectTimer = 34;
                this.fireBossVolley(tower.x, tower.y);
                this.showBossText('bossAbility_eclipse_harbinger', 'Void volley', '#b79cff');
            }
        }
    }

    onBossHitTower() {
        if (!this.isBoss || !this.bossState || this.bossProfileId !== 'greed_collector' || typeof Game === 'undefined' || !Game) {
            return;
        }
        const stealAmount = Math.min(Game.gold || 0, 45);
        if (stealAmount <= 0) {
            return;
        }
        Game.gold -= stealAmount;
        if (typeof UI !== 'undefined' && UI.updateGold) {
            UI.updateGold(Game.gold);
        }
        this.showBossText('bossAbility_greed_steal', `-${stealAmount} gold`, '#ffd36c');
    }

    getStats(type) {
        const configuredTypes = (typeof BalanceRuntime !== 'undefined' && BalanceRuntime.get)
            ? BalanceRuntime.get('enemies.baseStats', null)
            : null;

        const baseTypes = {
            basic: { health: 4, speed: 1.32, reward: 3, radius: 20, damage: 5, isBoss: false, isElite: false },
            fast: { health: 3, speed: 2.2, reward: 5, radius: 18, damage: 3, isBoss: false, isElite: false },
            tank: { health: 18, speed: 1.05, reward: 8, radius: 28, damage: 8, isBoss: false, isElite: true },
            healer: { health: 20, speed: 1.0, reward: 12, radius: 24, damage: 4, isBoss: false, isElite: true, isHealer: true, isRangedHealer: true },
            splitter: { health: 34, speed: 0.8, reward: 15, radius: 32, damage: 10, isBoss: false, isElite: true, isSplitter: true },
            boss: { health: 95, speed: 0.7, reward: 50, radius: 50, damage: 30, isBoss: true, isElite: true },
            skull: { health: 12, speed: 1.54, reward: 8, radius: 25, damage: 6, isBoss: false, isElite: true },
            cyclop: { health: 52, speed: 0.74, reward: 18, radius: 34, damage: 15, isBoss: false, isElite: true, threatPriority: 8, woundDurationSec: 4, woundRegenMultiplier: 0.25 },
            ogre: { health: 68, speed: 0.84, reward: 20, radius: 36, damage: 18, isBoss: false, isElite: true, threatPriority: 7, controlResist: 0.35, defenseSunderDurationSec: 5, defenseSunderFlat: 0.18 },
            demon: { health: 22, speed: 1.14, reward: 18, radius: 24, damage: 10, isBoss: false, isElite: true, isRangedAttacker: true, threatPriority: 10, preferredAttackDistance: 245, minAttackDistance: 180, rangedAttackIntervalFrames: 122, shootWindupFrames: 20, projectileSpeed: 7.2, projectileDamageMultiplier: 1.08, projectileRadius: 11, projectileColor: '#ff7a9a', markDurationSec: 4, markDamageTakenMult: 1.22 },
            archer: {
                health: 6,
                speed: 1.0,
                reward: 9,
                radius: 22,
                damage: 4,
                isBoss: false,
                isElite: true,
                isRangedAttacker: true,
                preferredAttackDistance: 215,
                minAttackDistance: 165,
                rangedAttackIntervalFrames: 104,
                shootWindupFrames: 16,
                projectileSpeed: 7.8,
                projectileDamageMultiplier: 0.95,
                projectileRadius: 9,
                projectileColor: '#d7dee8'
            }
        };

        const colors = {
            basic: "#e74c3c",
            fast: "#f39c12",
            tank: "#8e44ad",
            healer: "#2ecc71",
            splitter: "#34495e",
            boss: "#c0392b",
            skull: "#d35400",
            cyclop: '#ff8a65',
            ogre: '#8bc34a',
            demon: '#ff5c8d',
            archer: "#95a5a6"
        };

        const types = configuredTypes || baseTypes;
        const selectedType = types[type] || types.basic;
        return { color: colors[type] || colors.basic, ...selectedType };
    }

    update(tower, deltaTime = 16.6) {
        if (this.markedForDeletion) return { hitTower: false };
        
        const dtScale = deltaTime / 16.6;
        const gameSpeed = (typeof Game !== "undefined" && Game.gameSpeed) ? Game.gameSpeed : 1;

        if (this.isDying) {
            this.advanceAnimation(deltaTime, gameSpeed);
            this.spellEffectTimer = Math.max(0, this.spellEffectTimer - dtScale * gameSpeed);
            this.telegraphTimer = Math.max(0, this.telegraphTimer - dtScale * gameSpeed);
            return { hitTower: false };
        }

        if (this.frozen > 0) {
            this.frozen -= dtScale * gameSpeed;
            this.advanceAnimation(deltaTime, gameSpeed);
            return { hitTower: false };
        }

        
        let currentSlowFactor = 1.0;
        if (this.slowTimer > 0) {
            this.slowTimer -= dtScale * gameSpeed;
            currentSlowFactor = this.slowFactor;
            if (this.controlResist > 0 && currentSlowFactor < 1) {
                currentSlowFactor = Math.min(1, currentSlowFactor + ((1 - currentSlowFactor) * this.controlResist));
            }
            if (this.slowTimer <= 0) {
                this.slowFactor = 1.0; 
            }
        }

        
        if (this.isHealer) {
            this.healTimer += dtScale * gameSpeed;
            if (this.healTimer >= this.healInterval) {
                this.healTimer = 0;
                this.performHeal();
            }
        }

        
        const dx = tower.x - this.x;
        const dy = tower.y - this.y;
        const distSq = dx * dx + dy * dy;

        if (distSq > 0) {
            const distance = Math.sqrt(distSq);
            const moveSpeed = this.speed * this.getBossMoveMultiplier() * currentSlowFactor * dtScale * gameSpeed;

            if (this.isBoss) {
                this.updateBossBehavior(tower, dtScale, gameSpeed);
            }

            if (this.isPreparingShot) {
                this.shootWindupTimer -= dtScale * gameSpeed;
                if (this.shootWindupTimer <= 0) {
                    const payload = this.pendingProjectileData || this.createProjectilePayload(tower);
                    this.isPreparingShot = false;
                    this.pendingProjectileData = null;
                    return {
                        hitTower: false,
                        spawnProjectile: payload
                    };
                }
            }

            if (this.isRanged) {
                if (!this.isPreparingShot) {
                    this.rangedAttackTimer += dtScale * gameSpeed;
                }

                if (this.isPreparingShot) {
                    this.triggerAnimationState(this.isRangedAttacker ? 'shoot' : 'cast', Math.max(260, this.shootWindupFrames * 16.6));
                } else if (distance > this.preferredAttackDistance) {
                    this.x += (dx / distance) * moveSpeed;
                    this.y += (dy / distance) * moveSpeed;
                } else if (distance < this.minAttackDistance) {
                    this.x -= (dx / distance) * moveSpeed;
                    this.y -= (dy / distance) * moveSpeed;
                }

                if (distance <= this.preferredAttackDistance + tower.radius && this.rangedAttackTimer >= this.rangedAttackInterval) {
                    this.rangedAttackTimer = 0;
                    if (this.isRangedAttacker && this.shootWindupFrames > 0) {
                        this.isPreparingShot = true;
                        this.shootWindupTimer = this.shootWindupFrames;
                        this.pendingProjectileData = this.createProjectilePayload(tower);
                        this.triggerAnimationState('shoot', Math.max(280, this.shootWindupFrames * 16.6));
                        this.triggerTelegraph('#dfe8f2', 18);
                    } else {
                        this.triggerAnimationState(this.isRangedAttacker ? 'shoot' : 'cast', this.isRangedAttacker ? 420 : 520);
                    }
                    if (!this.isRangedAttacker) {
                        this.spellEffectTimer = 20;
                    } else if (!this.isPreparingShot) {
                        this.triggerTelegraph('#dfe8f2', 12);
                    }
                    if (!this.isPreparingShot) {
                        return {
                            hitTower: false,
                            spawnProjectile: this.createProjectilePayload(tower)
                        };
                    }
                }
            } else {
                const collisionRadius = this.radius + tower.radius;
                if (distance < collisionRadius * 1.35) {
                    this.triggerAnimationState('attack', 280);
                }
                this.x += (dx / distance) * moveSpeed;
                this.y += (dy / distance) * moveSpeed;

                if (distSq < collisionRadius * collisionRadius) {
                    this.triggerAnimationState('attack', 220);
                    this.markedForDeletion = true;
                    this.onBossHitTower();
                    return { hitTower: true, damage: Math.max(1, Math.floor(this.damage * this.getBossDamageMultiplier())) };
                }
            }
        }

        this.animationFrame += 0.1 * dtScale * gameSpeed;
        this.trailUpdateCounter += dtScale * gameSpeed;
        this.spellEffectTimer = Math.max(0, this.spellEffectTimer - dtScale * gameSpeed);
        this.telegraphTimer = Math.max(0, this.telegraphTimer - dtScale * gameSpeed);
        this.advanceAnimation(deltaTime, gameSpeed);
        if (this.trailUpdateCounter >= 3) {
            this.trail.push({ x: this.x, y: this.y, alpha: 0.6, scale: 1.0 });
            if (this.trail.length > this.maxTrailLength) this.trail.shift();
            this.trailUpdateCounter = 0;
        }

        let validTrailCount = 0;
        for (let i = 0; i < this.trail.length; i++) {
            const p = this.trail[i];
            p.alpha *= Math.pow(0.92, dtScale);
            p.scale *= Math.pow(0.97, dtScale);
            if (p.alpha > 0.05) {
                this.trail[validTrailCount++] = p;
            }
        }
        this.trail.length = validTrailCount;

        if (this.hitFlash > 0) this.hitFlash -= dtScale;

        return { hitTower: false };
    }

    performHeal() {
        if (!Game.waveManager) return;
        const healRadius = 150;
        const healerRangedCfg = (typeof BalanceRuntime !== 'undefined' && BalanceRuntime.get)
            ? (BalanceRuntime.get('enemies.healerRanged', {}) || {})
            : {};
        const healAmount = this.maxHealth * (healerRangedCfg.healPercentFromSelfMaxHp ?? 0.12);
        const allies = [];
        for (let i = 0, len = Game.waveManager.enemies.length; i < len; i++) {
            const e = Game.waveManager.enemies[i];
            if (e === this || e.markedForDeletion) continue;
            const dx = e.x - this.x;
            const dy = e.y - this.y;
            if ((dx * dx + dy * dy) < (healRadius * healRadius)) {
                allies.push(e);
            }
        }

        if (allies.length > 0) {
            this.triggerAnimationState('cast', 560);
            this.spellEffectTimer = 24;
            if (typeof AudioManager !== 'undefined' && typeof AudioManager.playSound === 'function') {
                AudioManager.playSound('enemyHealCast');
            }

            for (let i = 0; i < allies.length; i++) {
                const a = allies[i];
                const actualHeal = Math.min(a.maxHealth - a.health, healAmount);
                if (actualHeal > 0) {
                    a.health += actualHeal;
                    Game.createFloatingText(a.x, a.y - 20, `+${Math.floor(actualHeal)}`, "#2ecc71");
                }
            }

            Game.effects.push({
                x: this.x, y: this.y, radius: 10, maxRadius: healRadius, alpha: 0.6,
                update(gameSpeed = 1) {
                    this.radius += 5 * gameSpeed;
                    this.alpha -= 0.02 * gameSpeed;
                    if (this.alpha <= 0) this.markedForDeletion = true;
                },
                draw(ctx) {
                    ctx.save();
                    ctx.globalAlpha = this.alpha;
                    ctx.strokeStyle = "#2ecc71";
                    ctx.lineWidth = 4;
                    ctx.beginPath(); ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2); ctx.stroke();
                    ctx.restore();
                },
                markedForDeletion: false
            });
        }
    }

    takeDamage(damage) {
        if (this.isDying || this.isDefeated) {
            return { killed: false };
        }

        if (!Number.isFinite(this.health)) {
            this.health = Number.isFinite(this.maxHealth) ? Math.max(1, this.maxHealth) : 1;
            console.warn('[Enemy.takeDamage] Recovered invalid enemy health state', this.type, this.wave);
        }

        const numericDamage = Number(damage);
        if (!Number.isFinite(numericDamage) || numericDamage <= 0) {
            console.warn('[Enemy.takeDamage] Ignored invalid damage value', damage, this.type, this.wave);
            return { killed: false };
        }

        damage = numericDamage * this.getBossDamageTakenMultiplier();
        this.health -= damage;
        this.hitFlash = 5;
        
        const displayDamage = Math.max(1, Math.round(damage));
        Game.createDamageText(this.x, this.y - 20, displayDamage, damage > this.maxHealth * 0.3);
        
        if (this.health <= 0 && !this.markedForDeletion) {
            this.isDefeated = true;
            Game.createDeathEffect(this.x, this.y, this.color, this.radius);

            if (typeof AudioManager !== 'undefined' && typeof AudioManager.playSound === 'function') {
                const deathSoundId = this.isBoss
                    ? 'enemyDeathBoss'
                    : (this.isElite ? 'enemyDeathElite' : 'enemyDeathSmall');
                AudioManager.playSound(deathSoundId);
            }

            if (this.supportsAnimationState('death')) {
                this.isDying = true;
                this.triggerAnimationState('death');
                this.animationHoldTime = 0;
            } else {
                this.markedForDeletion = true;
            }

            if (this.isSplitter) this.spawnSplits();
            this.dropCrystals();
            return { killed: true, reward: this.reward, x: this.x, y: this.y, isBoss: this.isBoss };
        }
        return { killed: false };
    }

    spawnSplits() {
        if (!Game.waveManager) return;

        const waveManager = Game.waveManager;
        const maxActiveEnemies = (typeof waveManager.getMaxActiveEnemies === 'function')
            ? waveManager.getMaxActiveEnemies()
            : (Number.isFinite(Number(waveManager.maxActiveEnemies))
                ? Math.max(1, Math.floor(Number(waveManager.maxActiveEnemies)))
                : 10);
        const activeEnemiesCount = (typeof waveManager.getActiveEnemiesCount === 'function')
            ? waveManager.getActiveEnemiesCount()
            : waveManager.enemies.reduce((count, enemy) => {
                if (enemy && !enemy.markedForDeletion) {
                    return count + 1;
                }
                return count;
            }, 0);
        const availableSlots = Math.max(0, maxActiveEnemies - activeEnemiesCount);
        const splitCount = Math.min(3, availableSlots);

        if (splitCount <= 0) {
            return;
        }

        if (typeof AudioManager !== 'undefined' && typeof AudioManager.playSound === 'function') {
            AudioManager.playSound('enemySplit');
        }

        for (let i = 0; i < splitCount; i++) {
            const angle = (Math.PI * 2 / splitCount) * i;
            const spawnX = this.x + Math.cos(angle) * 20;
            const spawnY = this.y + Math.sin(angle) * 20;
            const miniGhost = new Enemy(spawnX, spawnY, "basic", this.wave);
            miniGhost.isSmall = true;
            miniGhost.maxHealth = this.maxHealth * 0.2;
            miniGhost.health = miniGhost.maxHealth;
            miniGhost.speed = this.speed * 1.4;
            miniGhost.radius = this.radius * 0.5;
            miniGhost.reward = Math.floor(this.reward * 0.15);
            miniGhost.color = "#5dade2";
            waveManager.enemies.push(miniGhost);
        }
        Game.createFloatingText(this.x, this.y - 40, typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('floatSplit', 'SPLIT!') : 'SPLIT!', "#34495e");
    }

    dropCrystals() {
        if (this.isBoss) {
            const economyCfg = (typeof BalanceRuntime !== 'undefined' && BalanceRuntime.get)
                ? (BalanceRuntime.get('economy', {}) || {})
                : {};
            const bossCrystalBase = Number.isFinite(economyCfg.bossCrystalBase) ? economyCfg.bossCrystalBase : 4;
            const bossCrystalWaveDivisor = Number.isFinite(economyCfg.bossCrystalWaveDivisor)
                ? economyCfg.bossCrystalWaveDivisor
                : 12;
            const crystalAmount = Math.max(0, Math.floor(bossCrystalBase + (this.wave / bossCrystalWaveDivisor)));
            Game.addCrystalsDirect(crystalAmount);
            Game.createFloatingText(this.x, this.y - 30, `+${crystalAmount} 💎`, "#9b59b6");
        }
    }

    draw(ctx) {
        ctx.save();
        if (this.trail.length > 1) {
            ctx.save();
            for (let i = 0; i < this.trail.length; i++) {
                const p = this.trail[i];
                const progress = i / this.trail.length;
                ctx.globalAlpha = p.alpha * (0.3 + progress * 0.4);
                ctx.fillStyle = this.color;
                const tSize = this.radius * p.scale * (0.5 + progress * 0.5);
                ctx.beginPath(); ctx.arc(p.x, p.y, tSize, 0, Math.PI * 2); ctx.fill();
                ctx.shadowBlur = 5 * p.alpha; ctx.shadowColor = this.color;
                ctx.beginPath(); ctx.arc(p.x, p.y, tSize * 0.5, 0, Math.PI * 2); ctx.fill();
                ctx.shadowBlur = 0;
            }
            ctx.restore();
        }
        
        this.wobblePhase += 0.05;
        const wobble = Math.sin(this.wobblePhase) * 2;
        const drawY = this.y + Math.sin(this.wobblePhase * 1.5) * (this.isDying ? 1 : 3) + this.getDrawYOffset();
        const vx = Game.tower ? Game.tower.x - this.x : 1;
        const facingRight = vx > 0;
        const profile = this.visualProfile || Enemy.getVisualProfile(this.type);

        let ambientShadowColor = 'rgba(132, 198, 235, 0.08)';
        if (typeof Game !== 'undefined' && Game && typeof Game.getStageVisualProfile === 'function') {
            ambientShadowColor = Game.getStageVisualProfile().enemyAura || ambientShadowColor;
        }
        if (profile && profile.auraColor) {
            ambientShadowColor = profile.auraColor;
        }

        const shadowScale = profile && Number.isFinite(profile.shadowScale) ? profile.shadowScale : 1;
        const shadowWidth = this.radius * (this.isBoss ? 2.1 : 1.45) * shadowScale;
        const shadowHeight = this.radius * (this.isBoss ? 0.72 : 0.45) * Math.sqrt(shadowScale);
        const shadowYOffset = this.isBoss ? (this.radius * 0.24) : 0;
        const shadowY = drawY + this.radius * 0.95 + shadowYOffset;
        ctx.save();
        ctx.fillStyle = this.isBoss ? 'rgba(0, 0, 0, 0.24)' : 'rgba(0, 0, 0, 0.16)';
        ctx.beginPath();
        ctx.ellipse(this.x, shadowY, shadowWidth * 1.06, shadowHeight * 1.08, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = ambientShadowColor;
        ctx.beginPath();
        ctx.ellipse(this.x, shadowY - 1, shadowWidth * 0.82, shadowHeight * 0.8, 0, 0, Math.PI * 2);
        ctx.fill();

        if (this.telegraphTimer > 0 && this.telegraphColor) {
            const telegraphAlpha = Math.min(0.65, this.telegraphTimer / 36);
            const telegraphRadius = this.radius * (this.isBoss ? 2.4 : 1.8) * (1 + (1 - telegraphAlpha) * 0.12);
            ctx.globalAlpha = telegraphAlpha;
            ctx.strokeStyle = this.telegraphColor;
            ctx.lineWidth = this.isBoss ? 5 : 3;
            ctx.beginPath();
            ctx.arc(this.x, shadowY - this.radius * 0.12, telegraphRadius, 0, Math.PI * 2);
            ctx.stroke();
            ctx.globalAlpha = telegraphAlpha * 0.2;
            ctx.fillStyle = this.telegraphColor;
            ctx.beginPath();
            ctx.arc(this.x, shadowY - this.radius * 0.12, telegraphRadius * 0.92, 0, Math.PI * 2);
            ctx.fill();
            ctx.globalAlpha = 1;
        }
        ctx.restore();

        const frameImage = this.getCurrentFrameImage();
        if (frameImage) {
            const aspect = frameImage.width > 0 && frameImage.height > 0 ? (frameImage.width / frameImage.height) : 1;
            const size = this.radius * this.getDrawScale();
            const drawWidth = size * aspect;
            const drawHeight = size;

            ctx.globalAlpha = this.hitFlash > 0 ? 0.65 : (this.isDying ? 0.92 : 1.0);
            ctx.save();
            ctx.translate(this.x, drawY);
            if (!facingRight) ctx.scale(-1, 1);
            ctx.drawImage(frameImage, -drawWidth / 2, -drawHeight / 2, drawWidth, drawHeight);
            ctx.restore();
        } else {
            ctx.save();
            ctx.translate(this.x, drawY);
            if (!facingRight) ctx.scale(-1, 1);
            this.drawGhost(ctx, 0, 0, wobble);
            ctx.restore();
        }

        if (this.spellEffectTimer > 0 && this.visualProfile && this.visualProfile.spellEffectScale) {
            const spellEffect = Enemy.effectImages[this.visualVariant];
            if (spellEffect) {
                const effectSize = this.radius * this.visualProfile.spellEffectScale * 2.4;
                const pulse = 1 + Math.sin(this.wobblePhase * 2.4) * 0.08;
                ctx.save();
                ctx.globalAlpha = Math.min(0.75, this.spellEffectTimer / 24);
                ctx.translate(this.x, drawY - this.radius * 0.1);
                ctx.drawImage(
                    spellEffect,
                    -effectSize * pulse / 2,
                    -effectSize * pulse / 2,
                    effectSize * pulse,
                    effectSize * pulse
                );
                ctx.restore();
            }
        }
        
        if (!this.isDying && !this.markedForDeletion && this.health > 0 && (this.health < this.maxHealth || this.isBoss)) {
            const hpBarScale = profile && Number.isFinite(profile.hpBarScale) ? profile.hpBarScale : 1;
            const barWidth = this.radius * 2.5 * hpBarScale;
            const barHeight = this.isBoss ? 6 : 4;
            const hpPct = this.health / this.maxHealth;
            ctx.fillStyle = "rgba(0, 0, 0, 0.6)";
            ctx.fillRect(this.x - barWidth/2, drawY - this.radius - 15, barWidth, barHeight);
            ctx.fillStyle = hpPct > 0.5 ? "#2ecc71" : (hpPct > 0.25 ? "#f1c40f" : "#e74c3c");
            ctx.fillRect(this.x - barWidth/2, drawY - this.radius - 15, barWidth * hpPct, barHeight);
            ctx.strokeStyle = "rgba(255, 255, 255, 0.3)"; ctx.lineWidth = 1;
            ctx.strokeRect(this.x - barWidth/2, drawY - this.radius - 15, barWidth, barHeight);

            if (this.isBoss && this.bossState) {
                const stateWidth = barWidth;
                const stateY = drawY - this.radius - 24;
                let stateRatio = 0;
                let stateColor = null;
                if (this.bossState.shieldTimer > 0) {
                    stateRatio = this.bossState.shieldTimer / 220;
                    stateColor = '#7ad3ff';
                } else if (this.bossState.armorTimer > 0) {
                    stateRatio = this.bossState.armorTimer / 150;
                    stateColor = '#8ff0b7';
                } else if (this.bossState.greedRushTimer > 0) {
                    stateRatio = this.bossState.greedRushTimer / 170;
                    stateColor = '#ffd36c';
                }
                if (stateColor && stateRatio > 0) {
                    ctx.fillStyle = 'rgba(0, 0, 0, 0.55)';
                    ctx.fillRect(this.x - stateWidth / 2, stateY, stateWidth, 3);
                    ctx.fillStyle = stateColor;
                    ctx.fillRect(this.x - stateWidth / 2, stateY, stateWidth * Math.max(0, Math.min(1, stateRatio)), 3);
                }
            }
        }
        ctx.restore();
    }
    
    drawGhost(ctx, x, y, wobble) {
        const size = this.radius * 1.5;
        ctx.globalAlpha = this.hitFlash > 0 ? 0.4 : 0.75;
        const ghostColor = this.type === "fast" ? "#E0F7FA" : (this.type === "tank" ? "#B3E5FC" : "#FFFFFF");
        ctx.shadowBlur = 15; ctx.shadowColor = "rgba(100, 200, 255, 0.5)";
        ctx.save(); ctx.translate(x, y); ctx.rotate(wobble * 0.02);
        ctx.beginPath(); ctx.ellipse(0, -size * 0.3, size * 0.6, size * 0.5, 0, 0, Math.PI * 2); ctx.fillStyle = ghostColor; ctx.fill();
        ctx.beginPath(); ctx.moveTo(-size * 0.6, -size * 0.2); ctx.quadraticCurveTo(-size * 0.8, size * 0.3, -size * 0.5, size * 0.8); ctx.quadraticCurveTo(-size * 0.3, size * 0.6, -size * 0.1, size * 0.9); ctx.quadraticCurveTo(size * 0.1, size * 0.6, size * 0.3, size * 0.85); ctx.quadraticCurveTo(size * 0.6, size * 0.5, size * 0.6, -size * 0.2); ctx.closePath(); ctx.fill();
        ctx.shadowBlur = 0; ctx.fillStyle = "#2C3E50";
        ctx.beginPath(); ctx.ellipse(-size * 0.2, -size * 0.25, size * 0.12, size * 0.15, -0.1, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.ellipse(size * 0.2, -size * 0.25, size * 0.12, size * 0.15, 0.1, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        ctx.beginPath(); ctx.ellipse(-size * 0.15, -size * 0.3, size * 0.04, size * 0.06, 0, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.ellipse(size * 0.25, -size * 0.3, size * 0.04, size * 0.06, 0, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = "#2C3E50"; ctx.lineWidth = 2; ctx.beginPath();
        if (this.type === "fast") ctx.arc(0, size * 0.1, size * 0.15, 0.2, Math.PI - 0.2);
        else if (this.type === "tank") { ctx.moveTo(-size * 0.15, size * 0.15); ctx.lineTo(size * 0.15, size * 0.25); }
        else ctx.ellipse(0, size * 0.1, size * 0.1, size * 0.05, 0, 0, Math.PI * 2);
        ctx.stroke(); ctx.restore(); ctx.globalAlpha = 1; ctx.shadowBlur = 0;
    }
}

class EnemyProjectile {
    constructor({ x, y, targetX, targetY, damage, speed, color, radius, spriteImage, spriteScale, sourceType, sourceEnemyType, sourceBossProfileId, woundDurationSec, woundRegenMultiplier, defenseSunderDurationSec, defenseSunderFlat, markDurationSec, markDamageTakenMult }) {
        this.x = x;
        this.y = y;
        this.damage = damage;
        this.speed = speed;
        this.color = color || "#9b59b6";
        this.radius = radius || 8;
        this.spriteImage = spriteImage || null;
        this.spriteScale = Number.isFinite(spriteScale) ? spriteScale : 1;
        this.sourceType = sourceType || 'enemy_projectile';
        this.sourceEnemyType = sourceEnemyType || null;
        this.sourceBossProfileId = sourceBossProfileId || null;
        this.woundDurationSec = Math.max(0, Number(woundDurationSec) || 0);
        this.woundRegenMultiplier = Math.max(0, Number(woundRegenMultiplier) || 0);
        this.defenseSunderDurationSec = Math.max(0, Number(defenseSunderDurationSec) || 0);
        this.defenseSunderFlat = Math.max(0, Number(defenseSunderFlat) || 0);
        this.markDurationSec = Math.max(0, Number(markDurationSec) || 0);
        this.markDamageTakenMult = Math.max(1, Number(markDamageTakenMult) || 1);
        this.life = 220;
        this.markedForDeletion = false;

        const dx = targetX - x;
        const dy = targetY - y;
        const distance = Math.sqrt(dx * dx + dy * dy) || 1;
        this.vx = dx / distance;
        this.vy = dy / distance;
    }

    update(tower, deltaTime = 16.6) {
        if (this.markedForDeletion) return { hitTower: false };

        const dtScale = deltaTime / 16.6;
        const gameSpeed = (typeof Game !== "undefined" && Game.gameSpeed) ? Game.gameSpeed : 1;
        const moveSpeed = this.speed * dtScale * gameSpeed;

        this.x += this.vx * moveSpeed;
        this.y += this.vy * moveSpeed;
        this.life -= dtScale * gameSpeed;

        const dx = tower.x - this.x;
        const dy = tower.y - this.y;
        const hitRadius = tower.radius + this.radius;
        if ((dx * dx + dy * dy) <= (hitRadius * hitRadius)) {
            this.markedForDeletion = true;
            return { hitTower: true, damage: this.damage };
        }

        if (this.life <= 0) {
            this.markedForDeletion = true;
        }

        return { hitTower: false };
    }

    draw(ctx) {
        if (this.markedForDeletion) return;

        ctx.save();
        if (this.spriteImage) {
            const angle = Math.atan2(this.vy, this.vx);
            const size = this.radius * 4.2 * this.spriteScale;
            const aspect = this.spriteImage.width > 0 && this.spriteImage.height > 0
                ? (this.spriteImage.width / this.spriteImage.height)
                : 1;
            ctx.shadowBlur = 10;
            ctx.shadowColor = 'rgba(255, 245, 214, 0.35)';
            ctx.translate(this.x, this.y);
            ctx.rotate(angle);
            ctx.drawImage(this.spriteImage, -size * aspect * 0.56, -size * 0.2, size * aspect, size * 0.4);
        } else {
            ctx.shadowBlur = 14;
            ctx.shadowColor = this.color;

            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
            ctx.beginPath();
            ctx.arc(this.x - this.radius * 0.3, this.y - this.radius * 0.3, this.radius * 0.4, 0, Math.PI * 2);
            ctx.fill();
        }

        ctx.restore();
    }
}
