(function initRunModifiers(global) {
    const MAX_ACTIVE_PACTS = 2;

    const DEFAULT_DEFINITIONS = {
        frontier_watch: {
            id: 'frontier_watch',
            nameKey: 'modifier_frontier_watch_name',
            descKey: 'modifier_frontier_watch_desc',
            rarity: 'stage',
            effects: {
                enemyHealthMult: 0.98,
                waveGoldMult: 1.04,
                safeChoiceBias: 0.08
            }
        },
        swarm_pressure: {
            id: 'swarm_pressure',
            nameKey: 'modifier_swarm_pressure_name',
            descKey: 'modifier_swarm_pressure_desc',
            rarity: 'stage',
            effects: {
                enemySpeedMult: 1.08,
                fastShareBonus: 0.12,
                waveCrystalMult: 1.05
            }
        },
        attrition_tithe: {
            id: 'attrition_tithe',
            nameKey: 'modifier_attrition_tithe_name',
            descKey: 'modifier_attrition_tithe_desc',
            rarity: 'stage',
            effects: {
                enemyHealthMult: 1.08,
                healerShareBonus: 0.12,
                playerMaxHealthMult: 0.06
            }
        },
        greed_toll: {
            id: 'greed_toll',
            nameKey: 'modifier_greed_toll_name',
            descKey: 'modifier_greed_toll_desc',
            rarity: 'stage',
            effects: {
                enemyRewardMult: 1.08,
                waveGoldMult: 1.08,
                traderSpawnMult: 1.15
            }
        },
        eclipse_omen: {
            id: 'eclipse_omen',
            nameKey: 'modifier_eclipse_omen_name',
            descKey: 'modifier_eclipse_omen_desc',
            rarity: 'stage',
            effects: {
                enemyHealthMult: 1.1,
                enemyDamageMult: 1.08,
                waveCrystalMult: 1.14,
                bossCountBonus: 1
            }
        },
        moon_rush: {
            id: 'moon_rush',
            nameKey: 'modifier_moon_rush_name',
            descKey: 'modifier_moon_rush_desc',
            rarity: 'mixed',
            effects: {
                enemySpeedMult: 1.12,
                fastShareBonus: 0.14,
                waveGoldMult: 1.08
            }
        },
        rotting_soil: {
            id: 'rotting_soil',
            nameKey: 'modifier_rotting_soil_name',
            descKey: 'modifier_rotting_soil_desc',
            rarity: 'mixed',
            effects: {
                healerShareBonus: 0.12,
                splitterShareBonus: 0.08,
                waveGoldMult: 1.08,
                enemyHealthMult: 1.03
            }
        },
        crystal_storm: {
            id: 'crystal_storm',
            nameKey: 'modifier_crystal_storm_name',
            descKey: 'modifier_crystal_storm_desc',
            rarity: 'mixed',
            effects: {
                waveGoldMult: 0.92,
                waveCrystalMult: 1.22,
                enemyHealthMult: 1.03
            }
        },
        siege_night: {
            id: 'siege_night',
            nameKey: 'modifier_siege_night_name',
            descKey: 'modifier_siege_night_desc',
            rarity: 'mixed',
            effects: {
                enemyDamageMult: 1.08,
                playerAttackSpeedMult: 0.08,
                playerHealthRegenFlat: -0.08,
                bossRewardMult: 1.12
            }
        },
        splitter_bloom: {
            id: 'splitter_bloom',
            nameKey: 'modifier_splitter_bloom_name',
            descKey: 'modifier_splitter_bloom_desc',
            rarity: 'mixed',
            effects: {
                splitterShareBonus: 0.16,
                enemyRewardMult: 1.08,
                playerRangeFlat: 10
            }
        },
        merciless_bosses: {
            id: 'merciless_bosses',
            nameKey: 'modifier_merciless_bosses_name',
            descKey: 'modifier_merciless_bosses_desc',
            rarity: 'mixed',
            effects: {
                bossHealthMult: 1.15,
                bossDamageMult: 1.12,
                waveCrystalMult: 1.14,
                bossRewardMult: 1.18
            }
        },
        greedy_harvest: {
            id: 'greedy_harvest',
            nameKey: 'modifier_greedy_harvest_name',
            descKey: 'modifier_greedy_harvest_desc',
            rarity: 'mixed',
            effects: {
                waveGoldMult: 1.12,
                enemyHealthMult: 1.06,
                enemyDamageMult: 1.04
            }
        },
        thin_defenses: {
            id: 'thin_defenses',
            nameKey: 'modifier_thin_defenses_name',
            descKey: 'modifier_thin_defenses_desc',
            rarity: 'mixed',
            effects: {
                playerMaxHealthMult: -0.18,
                playerHealthRegenFlat: -0.4,
                playerDamageMult: 0.08
            }
        },
        grave_chill: {
            id: 'grave_chill',
            nameKey: 'modifier_grave_chill_name',
            descKey: 'modifier_grave_chill_desc',
            rarity: 'mixed',
            effects: {
                enemySpeedMult: 0.92,
                enemyHealthMult: 1.09,
                waveCrystalMult: 1.1
            }
        },
        blood_tax: {
            id: 'blood_tax',
            nameKey: 'modifier_blood_tax_name',
            descKey: 'modifier_blood_tax_desc',
            rarity: 'mixed',
            effects: {
                enemyDamageMult: 1.12,
                playerHealthRegenFlat: -0.16,
                waveGoldMult: 1.1
            }
        },
        iron_convoy: {
            id: 'iron_convoy',
            nameKey: 'modifier_iron_convoy_name',
            descKey: 'modifier_iron_convoy_desc',
            rarity: 'mixed',
            effects: {
                traderSpawnMult: 1.25,
                bossRewardMult: 1.12,
                waveGoldMult: 0.96,
                enemyRewardMult: 1.08
            }
        },
        cursed_precision: {
            id: 'cursed_precision',
            nameKey: 'modifier_cursed_precision_name',
            descKey: 'modifier_cursed_precision_desc',
            rarity: 'mixed',
            effects: {
                playerDamageMult: 0.1,
                playerAttackSpeedMult: 0.04,
                playerMaxHealthMult: -0.06,
                bossHealthMult: 1.08
            }
        },
        hollow_victory: {
            id: 'hollow_victory',
            nameKey: 'modifier_hollow_victory_name',
            descKey: 'modifier_hollow_victory_desc',
            rarity: 'mixed',
            effects: {
                enemyRewardMult: 1.12,
                waveCrystalMult: 1.1,
                playerDamageMult: -0.05
            }
        },
        fortified_core: {
            id: 'fortified_core',
            nameKey: 'modifier_fortified_core_name',
            descKey: 'modifier_fortified_core_desc',
            rarity: 'mixed',
            effects: {
                playerMaxHealthMult: 0.1,
                playerHealthRegenFlat: 0.12,
                enemySpeedMult: 0.97
            }
        },
        scavenger_routes: {
            id: 'scavenger_routes',
            nameKey: 'modifier_scavenger_routes_name',
            descKey: 'modifier_scavenger_routes_desc',
            rarity: 'mixed',
            effects: {
                traderSpawnMult: 1.18,
                waveGoldMult: 1.08,
                enemyRewardMult: 1.04
            }
        },
        healer_mist: {
            id: 'healer_mist',
            nameKey: 'modifier_healer_mist_name',
            descKey: 'modifier_healer_mist_desc',
            rarity: 'mixed',
            effects: {
                healerShareBonus: 0.16,
                playerAttackSpeedMult: 0.08,
                playerHealthRegenFlat: -0.12
            }
        },
        shatter_charge: {
            id: 'shatter_charge',
            nameKey: 'modifier_shatter_charge_name',
            descKey: 'modifier_shatter_charge_desc',
            rarity: 'mixed',
            effects: {
                splitterShareBonus: 0.12,
                playerDamageMult: 0.1,
                enemyHealthMult: 1.05
            }
        },
        omen_lantern: {
            id: 'omen_lantern',
            nameKey: 'modifier_omen_lantern_name',
            descKey: 'modifier_omen_lantern_desc',
            rarity: 'mixed',
            effects: {
                enemySpeedMult: 0.95,
                bossHealthMult: 1.1,
                waveCrystalMult: 1.1
            }
        },
        gilded_debt: {
            id: 'gilded_debt',
            nameKey: 'modifier_gilded_debt_name',
            descKey: 'modifier_gilded_debt_desc',
            rarity: 'mixed',
            effects: {
                waveGoldMult: 1.14,
                playerMaxHealthMult: -0.08,
                enemyDamageMult: 1.06
            }
        },
        hunter_mark: {
            id: 'hunter_mark',
            nameKey: 'modifier_hunter_mark_name',
            descKey: 'modifier_hunter_mark_desc',
            rarity: 'mixed',
            effects: {
                bossRewardMult: 1.14,
                playerDamageMult: 0.08,
                enemySpeedMult: 1.04
            }
        },
        glass_cannon: {
            id: 'glass_cannon',
            nameKey: 'modifier_glass_cannon_name',
            descKey: 'modifier_glass_cannon_desc',
            rarity: 'mixed',
            effects: {
                playerDamageMult: 0.14,
                playerAttackSpeedMult: 0.06,
                playerMaxHealthMult: -0.14
            }
        },
        pact_blood_ledger: {
            id: 'pact_blood_ledger',
            nameKey: 'pact_blood_ledger_name',
            descKey: 'pact_blood_ledger_desc',
            rarity: 'pact',
            category: 'pact',
            icon: '🩸',
            offerRules: {
                minWave: 10,
                minBestWave: 10,
                allowedSources: ['elite', 'trader'],
                weight: 1.05,
                preferredThemes: ['greed', 'attrition']
            },
            effects: {
                waveGoldMult: 1.18,
                bossRewardMult: 1.2,
                playerMaxHealthMult: -0.16,
                enemyDamageMult: 1.08
            }
        },
        pact_hunters_oath: {
            id: 'pact_hunters_oath',
            nameKey: 'pact_hunters_oath_name',
            descKey: 'pact_hunters_oath_desc',
            rarity: 'pact',
            category: 'pact',
            icon: '🎯',
            offerRules: {
                minWave: 20,
                minBestWave: 25,
                allowedSources: ['elite'],
                weight: 0.95,
                preferredThemes: ['eclipse', 'attrition']
            },
            effects: {
                bossHealthMult: 1.24,
                bossCountBonus: 1,
                playerDamageMult: 0.1,
                bossRewardMult: 1.35
            }
        },
        pact_glass_march: {
            id: 'pact_glass_march',
            nameKey: 'pact_glass_march_name',
            descKey: 'pact_glass_march_desc',
            rarity: 'pact',
            category: 'pact',
            icon: '⚔️',
            offerRules: {
                minWave: 10,
                minBestWave: 10,
                allowedSources: ['elite', 'trader'],
                weight: 1,
                preferredThemes: ['frontier', 'eclipse']
            },
            effects: {
                playerDamageMult: 0.14,
                playerAttackSpeedMult: 0.08,
                playerMaxHealthMult: -0.22,
                playerHealthRegenFlat: -0.2
            }
        },
        pact_grave_exchange: {
            id: 'pact_grave_exchange',
            nameKey: 'pact_grave_exchange_name',
            descKey: 'pact_grave_exchange_desc',
            rarity: 'pact',
            category: 'pact',
            icon: '🪦',
            offerRules: {
                minWave: 10,
                minBestWave: 12,
                allowedSources: ['elite'],
                weight: 0.95,
                preferredThemes: ['attrition', 'eclipse']
            },
            effects: {
                enemySpeedMult: 0.92,
                enemyHealthMult: 1.14,
                waveCrystalMult: 1.18,
                bossHealthMult: 1.1
            }
        },
        pact_swarm_tribute: {
            id: 'pact_swarm_tribute',
            nameKey: 'pact_swarm_tribute_name',
            descKey: 'pact_swarm_tribute_desc',
            rarity: 'pact',
            category: 'pact',
            icon: '☠️',
            offerRules: {
                minWave: 20,
                minBestWave: 20,
                allowedSources: ['elite'],
                weight: 0.9,
                preferredThemes: ['swarm', 'eclipse']
            },
            effects: {
                specialCountBonus: 2,
                fastShareBonus: 0.1,
                enemyRewardMult: 1.18,
                waveGoldMult: 1.08
            }
        },
        pact_black_caravan: {
            id: 'pact_black_caravan',
            nameKey: 'pact_black_caravan_name',
            descKey: 'pact_black_caravan_desc',
            rarity: 'pact',
            category: 'pact',
            icon: '🕯️',
            offerRules: {
                minWave: 15,
                minBestWave: 15,
                allowedSources: ['elite', 'trader'],
                weight: 0.85,
                preferredThemes: ['greed', 'frontier']
            },
            effects: {
                traderSpawnMult: 1.35,
                enemyRewardMult: 1.12,
                waveGoldMult: 0.9
            }
        }
    };

    function getDefinitions() {
        const configured = (typeof BalanceRuntime !== 'undefined' && BalanceRuntime.get)
            ? BalanceRuntime.get('runModifiers.definitions', null)
            : null;
        return configured && typeof configured === 'object' ? configured : DEFAULT_DEFINITIONS;
    }

    function cloneEffects(effects) {
        return effects ? JSON.parse(JSON.stringify(effects)) : {};
    }

    function isPactDefinition(definition) {
        return Boolean(definition && definition.category === 'pact');
    }

    function getThemeId(stage) {
        if (typeof StageThemes === 'undefined' || !StageThemes || typeof StageThemes.getThemeId !== 'function') {
            return 'frontier';
        }
        return StageThemes.getThemeId(stage);
    }

    function weightedPick(entries, count) {
        const picked = [];
        const pool = Array.isArray(entries) ? entries.slice() : [];
        const targetCount = Math.max(0, Math.floor(Number(count) || 0));

        while (pool.length > 0 && picked.length < targetCount) {
            let totalWeight = 0;
            pool.forEach((entry) => {
                totalWeight += Math.max(0.001, Number(entry.weight) || 0.001);
            });
            let roll = Math.random() * totalWeight;
            let chosenIndex = 0;
            for (let i = 0; i < pool.length; i++) {
                roll -= Math.max(0.001, Number(pool[i].weight) || 0.001);
                if (roll <= 0) {
                    chosenIndex = i;
                    break;
                }
            }
            picked.push(pool[chosenIndex]);
            pool.splice(chosenIndex, 1);
        }

        return picked;
    }

    function additiveKeys() {
        return new Set([
            'fastShareBonus',
            'tankShareBonus',
            'healerShareBonus',
            'splitterShareBonus',
            'specialCountBonus',
            'bossCountBonus',
            'playerDamageMult',
            'playerAttackSpeedMult',
            'playerMaxHealthMult',
            'playerRangeFlat',
            'playerHealthRegenFlat',
            'playerDefenseFlat',
            'safeChoiceBias'
        ]);
    }

    function createEmptyState() {
        return {
            stage: 1,
            seed: Date.now(),
            active: [],
            effectCache: {},
            choices: []
        };
    }

    const manager = {
        state: createEmptyState(),

        reset() {
            this.state = createEmptyState();
        },

        getDefinition(id) {
            const definitions = getDefinitions();
            return definitions[id] || null;
        },

        startRun(stage) {
            this.reset();
            this.state.stage = Number.isFinite(stage) ? Math.max(1, Math.floor(stage)) : 1;

            const theme = typeof StageThemes !== 'undefined' ? StageThemes.getTheme(this.state.stage) : null;
            if (theme && theme.baseModifierId) {
                this.addModifier(theme.baseModifierId, 'stage');
            }

            const randomPool = Object.values(getDefinitions()).filter((entry) => entry && entry.rarity === 'mixed');
            if (randomPool.length > 0) {
                const picked = randomPool[Math.floor(Math.random() * randomPool.length)];
                if (picked) {
                    this.addModifier(picked.id, 'run');
                }
            }
        },

        addModifier(id, source = 'event') {
            const definition = this.getDefinition(id);
            if (!definition) {
                return false;
            }

            if (!this.canAddModifier(id, source)) {
                return false;
            }

            const existing = this.state.active.find((entry) => entry.id === id && entry.source === source);
            if (existing) {
                existing.stacks = (existing.stacks || 1) + 1;
                this.rebuildCache();
                return true;
            }

            this.state.active.push({
                id,
                source,
                effects: cloneEffects(definition.effects),
                stacks: 1
            });

            if (isPactDefinition(definition) && typeof SaveManager !== 'undefined' && SaveManager && typeof SaveManager.markPactAccepted === 'function') {
                SaveManager.markPactAccepted(id);
            }

            this.rebuildCache();
            return true;
        },

        canAddModifier(id, source = 'event') {
            const definition = this.getDefinition(id);
            if (!definition) {
                return false;
            }

            if (isPactDefinition(definition)) {
                const activePacts = this.getActivePacts();
                if (activePacts.length >= MAX_ACTIVE_PACTS) {
                    return false;
                }
                if (activePacts.some((entry) => entry.id === id)) {
                    return false;
                }
                const exclusiveWith = Array.isArray(definition.exclusiveWith) ? definition.exclusiveWith : [];
                if (exclusiveWith.some((pactId) => activePacts.some((entry) => entry.id === pactId))) {
                    return false;
                }
            }

            return true;
        },

        rememberChoice(eventId, choiceId) {
            this.state.choices.push({ eventId, choiceId, at: Date.now() });
        },

        rebuildCache() {
            const cache = {};
            const additive = additiveKeys();

            this.state.active.forEach((entry) => {
                const effects = entry.effects || {};
                const stacks = Math.max(1, Math.floor(Number(entry.stacks) || 1));
                Object.keys(effects).forEach((key) => {
                    const value = Number(effects[key]);
                    if (!Number.isFinite(value)) {
                        return;
                    }

                    if (additive.has(key)) {
                        cache[key] = (cache[key] || 0) + value * stacks;
                    } else if (/Mult$/i.test(key)) {
                        cache[key] = (cache[key] || 1) * Math.pow(value, stacks);
                    } else {
                        cache[key] = (cache[key] || 0) + value * stacks;
                    }
                });
            });

            this.state.effectCache = cache;
        },

        getValue(key, fallbackValue) {
            if (!this.state.effectCache || typeof this.state.effectCache !== 'object') {
                this.rebuildCache();
            }
            const value = this.state.effectCache[key];
            return value === undefined ? fallbackValue : value;
        },

        getActiveModifiers() {
            return this.state.active.map((entry) => {
                const definition = this.getDefinition(entry.id) || {};
                return {
                    id: entry.id,
                    source: entry.source,
                    stacks: Math.max(1, Math.floor(Number(entry.stacks) || 1)),
                    category: definition.category || definition.rarity || 'run',
                    icon: definition.icon || null,
                    name: (typeof LocalizationManager !== 'undefined' && LocalizationManager.t)
                        ? LocalizationManager.t(definition.nameKey, definition.id || entry.id)
                        : (definition.id || entry.id),
                    description: (typeof LocalizationManager !== 'undefined' && LocalizationManager.t)
                        ? LocalizationManager.t(definition.descKey, '')
                        : ''
                };
            });
        },

        getActivePacts() {
            return this.state.active
                .map((entry) => {
                    const definition = this.getDefinition(entry.id);
                    return definition && isPactDefinition(definition)
                        ? { id: entry.id, source: entry.source, definition }
                        : null;
                })
                .filter(Boolean);
        },

        getPactOffers(context = {}) {
            const stage = Number.isFinite(Number(context.stage)) ? Math.max(1, Math.floor(Number(context.stage))) : 1;
            const wave = Number.isFinite(Number(context.wave)) ? Math.max(1, Math.floor(Number(context.wave))) : 1;
            const source = context.source || 'elite';
            const limit = Math.max(0, Math.floor(Number(context.limit) || 1));
            const bestWave = (typeof SaveManager !== 'undefined' && SaveManager && typeof SaveManager.getBestWave === 'function')
                ? Math.max(0, Number(SaveManager.getBestWave()) || 0)
                : 0;
            const themeId = getThemeId(stage);

            if (this.getActivePacts().length >= MAX_ACTIVE_PACTS) {
                return [];
            }

            const candidates = Object.values(getDefinitions())
                .filter((definition) => isPactDefinition(definition))
                .filter((definition) => this.canAddModifier(definition.id, 'pact'))
                .filter((definition) => {
                    const rules = definition.offerRules || {};
                    const minWave = Math.max(1, Math.floor(Number(rules.minWave) || 1));
                    const minBestWave = Math.max(0, Math.floor(Number(rules.minBestWave) || 0));
                    const allowedSources = Array.isArray(rules.allowedSources) ? rules.allowedSources : ['elite'];
                    return wave >= minWave && bestWave >= minBestWave && allowedSources.includes(source);
                })
                .map((definition) => {
                    const rules = definition.offerRules || {};
                    const preferredThemes = Array.isArray(rules.preferredThemes) ? rules.preferredThemes : [];
                    let weight = Math.max(0.1, Number(rules.weight) || 1);
                    if (preferredThemes.includes(themeId)) {
                        weight *= 1.4;
                    }
                    return { definition, weight };
                });

            const picked = weightedPick(candidates, limit);
            const offers = picked.map((entry) => {
                const definition = entry.definition;
                if (typeof SaveManager !== 'undefined' && SaveManager && typeof SaveManager.markPactSeen === 'function') {
                    SaveManager.markPactSeen(definition.id);
                }
                return {
                    id: `pact_${definition.id}`,
                    kind: 'pact',
                    pactId: definition.id,
                    labelKey: definition.nameKey,
                    descKey: definition.descKey,
                    icon: definition.icon || '✦',
                    effects: {
                        addModifier: definition.id,
                        addModifierSource: 'pact'
                    }
                };
            });

            return offers;
        },

        applyChoiceEffects(choiceEffects, game) {
            if (!choiceEffects || typeof choiceEffects !== 'object') {
                return;
            }

            if (choiceEffects.addModifier) {
                this.addModifier(choiceEffects.addModifier, choiceEffects.addModifierSource || 'event');
            }

            if (choiceEffects.gold && game) {
                const goldReward = Number(choiceEffects.gold);
                if (Number.isFinite(goldReward) && goldReward > 0) {
                    game.gold += goldReward;
                    if (game.stats) {
                        game.stats.totalGold += goldReward;
                    }
                    if (typeof UI !== 'undefined' && UI.updateGold) {
                        UI.updateGold(game.gold);
                    }
                    if (typeof game.createFloatingText === 'function') {
                        game.createFloatingText(game.canvas.width / 2, game.canvas.height / 2 - 120, `+${goldReward} 💰`, '#f1c40f');
                    }
                }
            }

            if (choiceEffects.crystals && game && typeof game.addCrystalsDirect === 'function') {
                game.addCrystalsDirect(Number(choiceEffects.crystals) || 0);
            }

            if (choiceEffects.healPercent && game && game.tower) {
                const percent = Math.max(0, Number(choiceEffects.healPercent) || 0);
                const amount = Math.floor(game.tower.maxHealth * percent);
                if (amount > 0 && typeof game.tower.heal === 'function') {
                    game.tower.heal(amount);
                    if (typeof UI !== 'undefined' && UI.updateHealth) {
                        UI.updateHealth(game.tower.health, game.tower.maxHealth);
                    }
                }
            }

            if (choiceEffects.immediateDamageMult && game && game.tower) {
                const bonus = Number(choiceEffects.immediateDamageMult) || 0;
                game._eventTowerBonuses = game._eventTowerBonuses || {};
                game._eventTowerBonuses.damageMult = (game._eventTowerBonuses.damageMult || 0) + bonus;
            }

            if (choiceEffects.immediateAttackSpeedMult && game && game.tower) {
                const bonus = Number(choiceEffects.immediateAttackSpeedMult) || 0;
                game._eventTowerBonuses = game._eventTowerBonuses || {};
                game._eventTowerBonuses.attackSpeedMult = (game._eventTowerBonuses.attackSpeedMult || 0) + bonus;
            }

            if (choiceEffects.immediateMaxHealthMult && game && game.tower) {
                const bonus = Number(choiceEffects.immediateMaxHealthMult) || 0;
                game._eventTowerBonuses = game._eventTowerBonuses || {};
                game._eventTowerBonuses.maxHealthMult = (game._eventTowerBonuses.maxHealthMult || 0) + bonus;
            }

            if (choiceEffects.immediateRangeFlat && game && game.tower) {
                const bonus = Number(choiceEffects.immediateRangeFlat) || 0;
                game._eventTowerBonuses = game._eventTowerBonuses || {};
                game._eventTowerBonuses.rangeFlat = (game._eventTowerBonuses.rangeFlat || 0) + bonus;
            }

            if (choiceEffects.immediateHealthRegenFlat && game && game.tower) {
                const bonus = Number(choiceEffects.immediateHealthRegenFlat) || 0;
                game._eventTowerBonuses = game._eventTowerBonuses || {};
                game._eventTowerBonuses.healthRegenFlat = (game._eventTowerBonuses.healthRegenFlat || 0) + bonus;
            }

            if (choiceEffects.immediateDefenseFlat && game && game.tower) {
                const bonus = Number(choiceEffects.immediateDefenseFlat) || 0;
                game._eventTowerBonuses = game._eventTowerBonuses || {};
                game._eventTowerBonuses.defenseFlat = (game._eventTowerBonuses.defenseFlat || 0) + bonus;
            }
        }
    };

    global.RunModifiers = manager;
})(window);
