






(function initBalanceConfig(global) {
    const BalanceConfig = {
        enemies: {
            baseStats: {
                basic: { health: 4, speed: 1.32, reward: 3, radius: 20, damage: 5, isBoss: false },
                fast: { health: 3, speed: 2.2, reward: 5, radius: 18, damage: 3, isBoss: false },
                tank: { health: 18, speed: 1.05, reward: 8, radius: 28, damage: 8, isBoss: false },
                healer: {
                    health: 20,
                    speed: 1.0,
                    reward: 12,
                    radius: 24,
                    damage: 4,
                    isBoss: false,
                    isHealer: true,
                    isRangedHealer: true
                },
                splitter: { health: 34, speed: 0.8, reward: 15, radius: 32, damage: 10, isBoss: false, isSplitter: true },
                boss: { health: 95, speed: 0.7, reward: 50, radius: 50, damage: 30, isBoss: true },
                skull: { health: 12, speed: 1.54, reward: 8, radius: 25, damage: 6, isBoss: false, isElite: true },
                cyclop: {
                    health: 52,
                    speed: 0.74,
                    reward: 18,
                    radius: 34,
                    damage: 15,
                    isBoss: false,
                    isElite: true,
                    threatPriority: 8,
                    woundDurationSec: 4,
                    woundRegenMultiplier: 0.25
                },
                ogre: {
                    health: 68,
                    speed: 0.84,
                    reward: 20,
                    radius: 36,
                    damage: 18,
                    isBoss: false,
                    isElite: true,
                    threatPriority: 7,
                    controlResist: 0.35,
                    defenseSunderDurationSec: 5,
                    defenseSunderFlat: 0.18
                },
                demon: {
                    health: 22,
                    speed: 1.14,
                    reward: 18,
                    radius: 24,
                    damage: 10,
                    isBoss: false,
                    isElite: true,
                    isRangedAttacker: true,
                    threatPriority: 10,
                    preferredAttackDistance: 245,
                    minAttackDistance: 180,
                    rangedAttackIntervalFrames: 122,
                    shootWindupFrames: 20,
                    projectileSpeed: 7.2,
                    projectileDamageMultiplier: 1.08,
                    projectileRadius: 11,
                    projectileColor: '#ff7a9a',
                    markDurationSec: 4,
                    markDamageTakenMult: 1.22
                },
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
            },
            scaling: {
                hpPerWave: 0.043,
                hpPowerStep: 10,
                hpPowerMultiplier: 1.15,
                midWaveHpRampFromWave: 30,
                midWaveHpRampPerWave: 0.048,
                midWaveHpRampMaxBonus: 2.0,
                speedPerWave: 0.013,
                speedMaxMultiplier: 2.5,
                rewardPerWave: 0.038,
                damagePerWaveEarly: 0.032,
                damagePerWaveLate: 0.082,
                damageLateFromWave: 14,
                lateGameSurge: {
                    fromWave: 60,
                    hpPerWaveMultiplier: 1.06,
                    damagePerWaveMultiplier: 1.05,
                    speedPerWaveMultiplier: 1.008,
                    speedMaxExtraMultiplier: 1.35
                },
                smallEnemyHpMultiplier: 0.3,
                smallEnemySpeedMultiplier: 1.5,
                smallEnemyRewardMultiplier: 0.2,
                smallEnemyDamageMultiplier: 0.4,
                smallEnemyRadiusMultiplier: 0.6
            },
            healerRanged: {
                healIntervalFrames: 180,
                healPercentFromSelfMaxHp: 0.12,
                rangedAttackIntervalFrames: 78,
                preferredAttackDistance: 135,
                minAttackDistance: 115,
                projectileSpeed: 5.5,
                projectileDamageMultiplier: 0.8,
                projectileRadius: 9
            },
            archerRanged: {
                rangedAttackIntervalFrames: 104,
                preferredAttackDistance: 215,
                minAttackDistance: 165,
                shootWindupFrames: 16,
                projectileSpeed: 7.8,
                projectileDamageMultiplier: 0.95,
                projectileRadius: 9,
                projectileColor: '#d7dee8'
            }
        },

        waves: {
            baseEnemies: 6,
            enemiesPerWave: 3,
            maxActiveEnemies: 10,
            earlyWaveEnemies: [3, 5, 7, 9, 11],
            waveBonusEvery: 4,
            waveBonusAmount: 2,
            bossWaveEvery: 10,
            bossWaveMultiplier: 0.68,
            bossWaveMinEnemies: 10,
            spawnDelayEarly: {
                maxBase: 58,
                perWaveDelta: 1.5,
                min: 18
            },
            spawnDelayDefault: {
                maxBase: 50,
                perWaveDelta: 1.7,
                min: 8
            },
            spawn: {
                margin: 50,
                minSpawnDistance: 130,
                recentPointsLimit: 18,
                attempts: 8
            },
            composition: {
                fastShareBase: 0.22,
                fastSharePerWave: 0.013,
                fastShareMax: 0.5,
                specialCountStartWave: 16,
                specialCountStepWave: 10,
                specialCountMax: 5,
                bossDoubleStartWave: 60,
                bossDoubleEvery: 20,
                bossCountMax: 3,
                skullStartWave: 14,
                ogreStartWave: 24,
                cyclopStartWave: 32,
                archerStartWave: 22,
                demonStartWave: 42,
                post20ExtraSpecialChance: 0.82,
                post20ExtraPool: ['healer', 'splitter', 'tank', 'skull', 'archer', 'ogre', 'cyclop', 'demon']
            },
            lateGameSurge: {
                fromWave: 60,
                enemiesPerWaveMultiplier: 1.02,
                spawnDelayPerWaveMultiplier: 0.995,
                spawnDelayMinMultiplier: 0.70,
                extraSpecialEveryWaves: 8,
                extraSpecialMax: 4,
                extraFastSharePerWave: 0.004,
                extraFastShareMax: 0.25,
                extraBossEveryWaves: 18,
                extraBossMax: 1,
                bossCountMax: 5
            }
        },

        stages: {
            maxStage: 5,
            unlockWaveTarget: 50,
            waveOffsetPerStage: 50,
            enemyWaveBonusPerStage: 10,
            waveGoldPerStageBonus: 0.18,
            waveCrystalPerStageBonus: 0.22
        },

        uniqueUpgrades: {
            chainLightning: { chances: [0.2, 0.25, 0.3], jumps: [2, 3, 4], damagePercent: [0.75, 0.8, 0.85] },
            doubleShot: { chances: [0.15, 0.2, 0.25] },
            poisonArrows: { slowPercent: [0.16, 0.2, 0.24], radius: [95, 115, 135], durations: [2.4, 2.8, 3.2] },
            frostAura: { slowPercent: [0.2, 0.25, 0.3], radius: [200, 225, 250] },
            piercingArrow: { interval: [5, 4, 3] },
            splittingArrow: { arrows: [2, 2, 3], damagePercent: [0.22, 0.26, 0.3] },
            critExplosion: { radius: [100, 125, 150], damagePercent: [0.5, 0.6, 0.75] },
            fireAura: {
                damage: [2, 3, 4],
                radius: [140, 160, 180],
                maxTargets: [4, 5, 6]
            },
            lastStand: { speedBoost: [1.0, 1.0, 1.0], damageBoost: [0.5, 0.75, 1.0], duration: [5, 5, 5], cooldown: [15, 15, 15] },
            killStreak: {
                killsRequired: [6, 5, 4],
                duration: [2.5, 3, 3.5],
                attackSpeedBoost: [0.28, 0.38, 0.48],
                damageBoost: [0.12, 0.2, 0.28]
            },
            goldFever: { chance: [0.1, 0.15, 0.2], goldMultiplier: [2, 2.5, 3], radius: [150, 175, 200] },
            vampiricRage: { healAmount: [2, 3, 5], duration: [10, 10, 10] },
            crowdControl: {
                interval: [11, 9, 7],
                pushDistance: [42, 56, 70],
                radius: [220, 245, 270],
                eliteResistance: {
                    boss: 0.7,
                    tank: 0.5,
                    splitter: 0.45,
                    healer: 0.3
                }
            },
            freezingArrows: { chance: [0.1, 0.15, 0.2], duration: [2, 2.5, 3], radius: [80, 100, 120] },
            statBoost: { critChance: [0.1, 0.15, 0.2], multishot: [0.1, 0.15, 0.2], vampChance: [0.1, 0.15, 0.2] },
            luckyTree: { goldAmount: [25, 30, 40], spawnRate: [0.8, 0.7, 0.6] },
            crystalRain: { interval: [30, 25, 20], amount: [1, 1, 2] }
            ,
            hunterSight: { priorityMode: 'danger' },
            monsterHunter: { damageMult: [0.2, 0.3, 0.45] }
        },

        upgradeDefinitions: {
            sharedMaxLevels: {
                damage: 200,
                attackSpeed: 50,
                range: 100,
                multishotChance: 50,
                critChance: 100,
                critMultiplier: 100,
                maxHealth: 500,
                healthRegen: 50,
                defense: 50,
                vampirismChance: 50,
                vampirismAmount: 100,
                thornsDamage: 100,
                killGoldBonus: 50,
                weeklyGoldBonus: 100,
                weeklyCrystalBonus: 50,
                gameSpeed: 12,
                traderChance: 100,
                evolutionStage: 3
            },
            inGame: {
                damage: { baseValue: 3, increment: 1.25, baseCost: 5, costIncrement: 4 },
                attackSpeed: {
                    baseValue: 1.0,
                    increment: 0.04,
                    baseCost: 5,
                    costFormula: 'arithmetic',
                    baseCostIncrement: 7,
                    costIncrementGrowth: 1
                },
                range: { baseValue: 130, increment: 5, baseCost: 16, costIncrement: 7 },
                multishotChance: { baseValue: 0, increment: 0.5, baseCost: 10, costIncrement: 5 },
                critChance: { baseValue: 0, increment: 0.5, baseCost: 5, costIncrement: 5 },
                critMultiplier: { baseValue: 2.0, increment: 0.25, baseCost: 15, costIncrement: 21 },
                maxHealth: { baseValue: 50, increment: 5, baseCost: 5, costIncrement: 6 },
                healthRegen: { baseValue: 0.50, increment: 0.12, baseCost: 5, costIncrement: 8 },
                defense: { baseValue: 0, increment: 0.5, baseCost: 5, costIncrement: 10 },
                vampirismChance: { baseValue: 0, increment: 0.35, baseCost: 7, costIncrement: 12 },
                vampirismAmount: { baseValue: 0.5, increment: 0.4, baseCost: 12, costIncrement: 18 },
                thornsDamage: { baseValue: 0, increment: 2, baseCost: 15, costIncrement: 10 },
                killGoldBonus: { baseValue: 0, increment: 1, baseCost: 30, costIncrement: 35 },
                weeklyGoldBonus: { baseValue: 0, increment: 1, baseCost: 5, costIncrement: 1 },
                weeklyCrystalBonus: { baseValue: 0, increment: 1, baseCost: 12, costIncrement: 22 },
                gameSpeed: { baseValue: 1.0, increment: 0.25, baseCost: 100, costIncrement: 75 },
                traderChance: { baseValue: 0, increment: 0.2, baseCost: 5, costIncrement: 7 }
            },
            permanent: {
                permDamage: { baseCost: 6, costIncrement: 13 },
                permAttackSpeed: { baseCost: 6, costIncrement: 9 },
                permRange: { baseCost: 14, costIncrement: 9 },
                permMultishotChance: { baseCost: 12, costIncrement: 11 },
                permCritChance: { baseCost: 8, costIncrement: 11 },
                permCritMultiplier: { baseCost: 12, costIncrement: 17 },
                permMaxHealth: { baseCost: 7, costIncrement: 5 },
                permHealthRegen: { baseCost: 18, costIncrement: 8 },
                permDefense: { baseCost: 10, costIncrement: 11 },
                permVampirismChance: { baseCost: 12, costIncrement: 12 },
                permVampirismAmount: { baseCost: 14, costIncrement: 15 },
                permThornsDamage: { baseCost: 18, costIncrement: 12 },
                permWeeklyGoldBonus: { baseCost: 6, costIncrement: 6 },
                permKillGoldBonus: { baseCost: 150, costIncrement: 40 },
                permWeeklyCrystalBonus: { baseCost: 20, costIncrement: 30 },
                permGameSpeed: { baseCost: 300, costIncrement: 110 },
                permTraderChance: { baseCost: 12, costIncrement: 11 },
                permUnlockGarden: { baseCost: 500, costIncrement: 550 }
            }
        },

        quests: {
            daily: {
                countByDifficulty: {
                    easy: 2,
                    medium: 2,
                    hard: 1
                },
                rewardBonusByDifficulty: {
                    easy: 4,
                    medium: 6,
                    hard: 8
                }
            }
        },

        economy: {
            waveGoldBase: 24,
            waveGoldPerWave: 4,
            bossCrystalBase: 4,
            bossCrystalWaveDivisor: 12,
            leakGoldFactor: 0.22,
            leakBossGoldFactor: 0.12,
            cardCost: 55,
            rewardedDefaultAmount: 50,
            rewardedDailyLimit: 10,
            exitPenaltyRate: 0.35,
            shopCosts: {
                seeds_5: 20,
                seeds_10: 40,
                seeds_25: 85,
                item_thunder: 60,
                item_frenzy: 40
            }
        },

        activeProfile: 'soft',

        profiles: {
            legacy: {
                enemies: {
                    scaling: {
                        rewardPerWave: 0.05
                    }
                },
                upgradeDefinitions: {
                    inGame: {
                        killGoldBonus: { baseValue: 0, increment: 1, baseCost: 25, costIncrement: 45 },
                        weeklyGoldBonus: { baseValue: 0, increment: 3, baseCost: 5, costIncrement: 1 },
                        weeklyCrystalBonus: { baseValue: 0, increment: 1, baseCost: 25, costIncrement: 45 }
                    }
                },
                quests: {
                    daily: {
                        rewardBonusByDifficulty: {
                            easy: 5,
                            medium: 7,
                            hard: 10
                        }
                    }
                },
                economy: {
                    waveGoldBase: 20,
                    waveGoldPerWave: 5,
                    bossCrystalBase: 5,
                    bossCrystalWaveDivisor: 10,
                    cardCost: 50,
                    rewardedDefaultAmount: 50,
                    rewardedDailyLimit: 999,
                    exitPenaltyRate: 0.5,
                    shopCosts: {
                        seeds_5: 20,
                        seeds_10: 35,
                        seeds_25: 75,
                        item_thunder: 50,
                        item_frenzy: 30
                    }
                }
            },
            soft: {}
        }
    };

    global.BalanceConfig = BalanceConfig;
})(window);
