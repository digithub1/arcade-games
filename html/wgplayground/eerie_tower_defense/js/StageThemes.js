(function initStageThemes(global) {
    const DEFAULT_THEMES = {
        1: {
            id: 'frontier',
            nameKey: 'stageTheme_frontier_name',
            subtitleKey: 'stageTheme_frontier_subtitle',
            descKey: 'stageTheme_frontier_desc',
            dominantThreatKey: 'stageThreat_balanced',
            rewardFocusKey: 'stageReward_stable',
            baseModifierId: 'frontier_watch',
            bossProfileId: 'frontier_bulwark',
            enemyBias: {
                fastShareBonus: 0,
                tankShareBonus: 0,
                healerShareBonus: 0,
                splitterShareBonus: 0,
                skullShareBonus: 0,
                ogreShareBonus: 0.04,
                cyclopShareBonus: 0.08,
                demonShareBonus: -0.08,
                archerShareBonus: -0.05,
                specialCountBonus: 0
            },
            economyBias: {
                waveGoldMult: 1.0,
                waveCrystalMult: 1.0,
                traderSpawnMult: 1.0,
                harvestGoldMult: 1.0
            },
            eventBias: {
                riskWeight: 1.0,
                economyWeight: 1.0,
                safeWeight: 1.15
            }
        },
        2: {
            id: 'swarm',
            nameKey: 'stageTheme_swarm_name',
            subtitleKey: 'stageTheme_swarm_subtitle',
            descKey: 'stageTheme_swarm_desc',
            dominantThreatKey: 'stageThreat_swarm',
            rewardFocusKey: 'stageReward_tempo',
            baseModifierId: 'swarm_pressure',
            bossProfileId: 'swarm_broodmother',
            enemyBias: {
                fastShareBonus: 0.18,
                tankShareBonus: -0.08,
                healerShareBonus: -0.04,
                splitterShareBonus: 0.08,
                skullShareBonus: -0.1,
                ogreShareBonus: -0.06,
                cyclopShareBonus: -0.04,
                demonShareBonus: 0.12,
                archerShareBonus: -0.12,
                specialCountBonus: 1
            },
            economyBias: {
                waveGoldMult: 0.96,
                waveCrystalMult: 1.05,
                traderSpawnMult: 1.0,
                harvestGoldMult: 0.95
            },
            eventBias: {
                riskWeight: 1.2,
                economyWeight: 0.9,
                safeWeight: 0.9
            }
        },
        3: {
            id: 'attrition',
            nameKey: 'stageTheme_attrition_name',
            subtitleKey: 'stageTheme_attrition_subtitle',
            descKey: 'stageTheme_attrition_desc',
            dominantThreatKey: 'stageThreat_attrition',
            rewardFocusKey: 'stageReward_endurance',
            baseModifierId: 'attrition_tithe',
            bossProfileId: 'attrition_revenant',
            enemyBias: {
                fastShareBonus: -0.1,
                tankShareBonus: 0.12,
                healerShareBonus: 0.14,
                splitterShareBonus: 0,
                skullShareBonus: 0.2,
                ogreShareBonus: 0.2,
                cyclopShareBonus: 0.14,
                demonShareBonus: -0.04,
                archerShareBonus: 0.05,
                specialCountBonus: 1
            },
            economyBias: {
                waveGoldMult: 1.02,
                waveCrystalMult: 1.08,
                traderSpawnMult: 0.92,
                harvestGoldMult: 1.0
            },
            eventBias: {
                riskWeight: 0.95,
                economyWeight: 0.95,
                safeWeight: 1.2
            }
        },
        4: {
            id: 'greed',
            nameKey: 'stageTheme_greed_name',
            subtitleKey: 'stageTheme_greed_subtitle',
            descKey: 'stageTheme_greed_desc',
            dominantThreatKey: 'stageThreat_greed',
            rewardFocusKey: 'stageReward_economy',
            baseModifierId: 'greed_toll',
            bossProfileId: 'greed_collector',
            enemyBias: {
                fastShareBonus: 0.06,
                tankShareBonus: 0.04,
                healerShareBonus: 0.04,
                splitterShareBonus: 0.06,
                skullShareBonus: 0.08,
                ogreShareBonus: 0.16,
                cyclopShareBonus: 0.04,
                demonShareBonus: 0.06,
                archerShareBonus: 0.18,
                specialCountBonus: 1
            },
            economyBias: {
                waveGoldMult: 1.14,
                waveCrystalMult: 0.96,
                traderSpawnMult: 1.2,
                harvestGoldMult: 1.18
            },
            eventBias: {
                riskWeight: 1.05,
                economyWeight: 1.25,
                safeWeight: 0.82
            }
        },
        5: {
            id: 'eclipse',
            nameKey: 'stageTheme_eclipse_name',
            subtitleKey: 'stageTheme_eclipse_subtitle',
            descKey: 'stageTheme_eclipse_desc',
            dominantThreatKey: 'stageThreat_boss',
            rewardFocusKey: 'stageReward_crystals',
            baseModifierId: 'eclipse_omen',
            bossProfileId: 'eclipse_harbinger',
            enemyBias: {
                fastShareBonus: 0.08,
                tankShareBonus: 0.08,
                healerShareBonus: 0.08,
                splitterShareBonus: 0.1,
                skullShareBonus: 0.16,
                ogreShareBonus: 0.06,
                cyclopShareBonus: 0.08,
                demonShareBonus: 0.24,
                archerShareBonus: 0.22,
                specialCountBonus: 2,
                bossCountBonus: 1
            },
            economyBias: {
                waveGoldMult: 0.94,
                waveCrystalMult: 1.18,
                traderSpawnMult: 0.88,
                harvestGoldMult: 0.92
            },
            eventBias: {
                riskWeight: 1.35,
                economyWeight: 0.95,
                safeWeight: 0.72
            }
        }
    };

    function getStageCount() {
        if (typeof SaveManager !== 'undefined' && SaveManager && typeof SaveManager.getStageCount === 'function') {
            return SaveManager.getStageCount();
        }
        return 5;
    }

    function normalizeStage(stage) {
        const maxStage = getStageCount();
        if (!Number.isFinite(stage)) {
            return 1;
        }
        return Math.max(1, Math.min(maxStage, Math.floor(stage)));
    }

    function getThemeConfig() {
        const configured = (typeof BalanceRuntime !== 'undefined' && BalanceRuntime.get)
            ? BalanceRuntime.get('stageThemes', null)
            : null;
        return configured && typeof configured === 'object' ? configured : DEFAULT_THEMES;
    }

    global.StageThemes = {
        getTheme(stage) {
            const normalized = normalizeStage(Number(stage));
            const config = getThemeConfig();
            return config[normalized] || DEFAULT_THEMES[1];
        },

        getThemeId(stage) {
            const theme = this.getTheme(stage);
            return theme && theme.id ? theme.id : 'frontier';
        },

        getThemeList() {
            const list = [];
            const stageCount = getStageCount();
            for (let stage = 1; stage <= stageCount; stage++) {
                list.push(this.getTheme(stage));
            }
            return list;
        },

        normalizeStage,

        getLocalizedText(theme, key, fallback) {
            if (!theme) return fallback;
            if (typeof LocalizationManager !== 'undefined' && LocalizationManager && typeof LocalizationManager.t === 'function') {
                return LocalizationManager.t(theme[key], fallback);
            }
            return fallback;
        },

        getStageDescriptor(stage) {
            const theme = this.getTheme(stage);
            return {
                id: theme.id,
                name: this.getLocalizedText(theme, 'nameKey', 'Theme'),
                subtitle: this.getLocalizedText(theme, 'subtitleKey', ''),
                description: this.getLocalizedText(theme, 'descKey', ''),
                dominantThreat: (typeof LocalizationManager !== 'undefined' && LocalizationManager.t)
                    ? LocalizationManager.t(theme.dominantThreatKey, 'Balanced')
                    : 'Balanced',
                rewardFocus: (typeof LocalizationManager !== 'undefined' && LocalizationManager.t)
                    ? LocalizationManager.t(theme.rewardFocusKey, 'Stable rewards')
                    : 'Stable rewards',
                baseModifierId: theme.baseModifierId,
                bossProfileId: theme.bossProfileId || 'frontier_bulwark',
                enemyBias: theme.enemyBias || {},
                economyBias: theme.economyBias || {},
                eventBias: theme.eventBias || {}
            };
        }
    };
})(window);
