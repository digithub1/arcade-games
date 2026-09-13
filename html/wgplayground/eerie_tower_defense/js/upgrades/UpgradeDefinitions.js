




const UpgradeDefinitions = {
    
    SHARED_MAX_LEVELS: {
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

    
    
    
    
    ATTACK: {
        damage: {
            id: 'damage',
            name: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('ingame_damage', 'Урон') : 'Урон',
            icon: '⚔️',
            description: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('ingame_desc_damage', 'Увеличивает урон от каждой стрелы') : 'Увеличивает урон от каждой стрелы',
            baseValue: 3,
            increment: 1,
            baseCost: 7,
            costIncrement: 5, 
            format: (val) => Math.floor(val)
        },
        attackSpeed: {
            id: 'attackSpeed',
            name: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('ingame_attackSpeed', 'Скорость') : 'Скорость',
            icon: '⚡',
            description: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('ingame_desc_attackSpeed', 'Увеличивает количество выстрелов в секунду') : 'Увеличивает количество выстрелов в секунду',
            baseValue: 1.0,
            increment: 0.04,
            baseCost: 8,
            costFormula: 'arithmetic', 
            baseCostIncrement: 10,
            costIncrementGrowth: 2,
            format: (val) => val.toFixed(2) + '/с'
        },
        range: {
            id: 'range',
            name: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('ingame_range', 'Радиус') : 'Радиус',
            icon: '🎯',
            description: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('ingame_desc_range', 'Увеличивает дальность стрельбы') : 'Увеличивает дальность стрельбы',
            baseValue: 130,
            increment: 4,
            baseCost: 20,
            costIncrement: 7,
            format: (val) => Math.floor(val)
        },
        multishotChance: {
            id: 'multishotChance',
            name: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('ingame_multishot', 'Мультишот') : 'Мультишот',
            icon: '🔫',
            description: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('ingame_desc_multishot', 'Шанс выстрелить дополнительной стрелой') : 'Шанс выстрелить дополнительной стрелой',
            baseValue: 0,
            increment: 0.5,
            baseCost: 10,
            costIncrement: 5,
            format: (val) => val.toFixed(1) + '%'
        },
        critChance: {
            id: 'critChance',
            name: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('ingame_critChance', 'Крит Шанс') : 'Крит Шанс',
            icon: '💥',
            description: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('ingame_desc_critChance', 'Шанс нанести критический урон') : 'Шанс нанести критический урон',
            baseValue: 0,
            increment: 0.5,
            baseCost: 5,
            costIncrement: 5,
            format: (val) => val.toFixed(1) + '%'
        },
        critMultiplier: {
            id: 'critMultiplier',
            name: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('ingame_critMultiplier', 'Крит Урон') : 'Крит Урон',
            icon: '💪',
            description: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('ingame_desc_critMultiplier', 'Множитель критического урона') : 'Множитель критического урона',
            baseValue: 2.0,
            increment: 0.25,
            baseCost: 15,
            costIncrement: 21,
            format: (val) => 'x' + val.toFixed(2)
        }
    },

    
    DEFENSE: {
        maxHealth: {
            id: 'maxHealth',
            name: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('ingame_maxHealth', 'Макс ХП') : 'Макс ХП',
            icon: '❤️',
            description: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('ingame_desc_maxHealth', 'Увеличивает максимальное здоровье') : 'Увеличивает максимальное здоровье',
            baseValue: 50,
            increment: 5,
            baseCost: 5,
            costIncrement: 6, 
            format: (val) => Math.floor(val)
        },
        healthRegen: {
            id: 'healthRegen',
            name: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('ingame_healthRegen', 'Реген') : 'Реген',
            icon: '💚',
            description: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('ingame_desc_healthRegen', 'Восстанавливает здоровье каждую секунду') : 'Восстанавливает здоровье каждую секунду',
            baseValue: 0,
            increment: 0.05,
            baseCost: 9,
            costIncrement: 14, 
            format: (val) => val.toFixed(2) + '/с'
        },
        defense: {
            id: 'defense',
            name: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('ingame_defense', 'Защита') : 'Защита',
            icon: '🛡️',
            description: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('ingame_desc_defense', 'Уменьшает получаемый урон') : 'Уменьшает получаемый урон',
            baseValue: 0,
            increment: 0.5,
            baseCost: 5,
            costIncrement: 10, 
            format: (val) => val.toFixed(1) + '%'
        },
        vampirismChance: {
            id: 'vampirismChance',
            name: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('ingame_vampirismChance', 'Вамп Шанс') : 'Вамп Шанс',
            icon: '🩸',
            description: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('ingame_desc_vampirismChance', 'Шанс восстановить здоровье при атаке') : 'Шанс восстановить здоровье при атаке',
            baseValue: 0,
            increment: 0.35,
            baseCost: 7,
            costIncrement: 12,
            format: (val) => val.toFixed(1) + '%'
        },
        vampirismAmount: {
            id: 'vampirismAmount',
            name: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('ingame_vampirismAmount', 'Вамп Сила') : 'Вамп Сила',
            icon: '💉',
            description: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('ingame_desc_vampirismAmount', 'Количество здоровья от вампиризма') : 'Количество здоровья от вампиризма',
            baseValue: 0.5,
            increment: 0.4,
            baseCost: 12,
            costIncrement: 18,
            format: (val) => val.toFixed(1) + '%'
        },
        thornsDamage: {
            id: 'thornsDamage',
            name: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('ingame_thornsDamage', 'Контрударный щит') : 'Контрударный щит',
            icon: '🌵',
            description: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('ingame_desc_thornsDamage', 'Снижает урон контактной атаки и ослабляет ударившего врага') : 'Снижает урон контактной атаки и ослабляет ударившего врага',
            baseValue: 0,
            increment: 2,
            baseCost: 15,
            costIncrement: 10,
            format: (val) => val.toFixed(1) + '%'
        }
    },

    
    UTILITY: {
        killGoldBonus: {
            id: 'killGoldBonus',
            name: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('ingame_killGoldBonus', 'Золото за убийство') : 'Золото за убийство',
            icon: '💰',
            description: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('ingame_desc_killGoldBonus', 'Дополнительное золото за каждого врага') : 'Дополнительное золото за каждого врага',
            baseValue: 0,
            increment: 1,
            baseCost: 25,
            costIncrement: 45,
            format: (val) => '+' + Math.floor(val)
        },
        weeklyGoldBonus: {
            id: 'weeklyGoldBonus',
            name: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('ingame_weeklyGoldBonus', 'Бонус золота за день') : 'Бонус золота за день',
            icon: '📅',
            description: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('ingame_desc_weeklyGoldBonus', 'Золото за завершение дня') : 'Золото за завершение дня',
            baseValue: 0,
            increment: 1,
            baseCost: 5,
            costIncrement: 1,
            format: (val) => '+' + Math.floor(val)
        },
        weeklyCrystalBonus: {
            id: 'weeklyCrystalBonus',
            name: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('ingame_weeklyCrystalBonus', 'Бонус кристаллов за день') : 'Бонус кристаллов за день',
            icon: '💎',
            description: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('ingame_desc_weeklyCrystalBonus', 'Кристаллы за завершение дня') : 'Кристаллы за завершение дня',
            baseValue: 0,
            increment: 1,
            baseCost: 25,
            costIncrement: 45,
            format: (val) => '+' + Math.floor(val)
        },
        gameSpeed: {
            name: 'Скорость Игры',
            icon: '⏩',
            maxLevel: 12,
            baseValue: 1.0,
            increment: 0.25,
            baseCost: 100,
            costIncrement: 75,
            description: 'Ускоряет ход времени'
        },
        traderChance: {
            id: 'traderChance',
            name: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('ingame_traderChance', 'Шанс торговца') : 'Шанс торговца',
            icon: '🤝',
            description: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('ingame_desc_traderChance', 'Шанс призвать торговца после убийства врага') : 'Шанс призвать торговца после убийства врага',
            baseValue: 0,
            increment: 0.2,
            baseCost: 5,
            costIncrement: 7, 
            format: (val) => val.toFixed(2) + '%'
        }
    },

    
    
    PERMANENT: {
        
        permDamage: {
            id: 'permDamage',
            category: 'attack',
            name: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('perm_damage', 'Урон') : 'Урон',
            icon: '⚔️',
            description: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('perm_desc_damage', 'Увеличивает базовый урон') : 'Увеличивает базовый урон',
            baseCost: 10,
            costIncrement: 15,
            baseIncrement: 1.0, 
            maxLevel: 200, 
            format: (level) => `+${(level * 1.0).toFixed(1)}`
        },
        permAttackSpeed: {
            id: 'permAttackSpeed',
            category: 'attack',
            name: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('perm_attackSpeed', 'Скорость Атаки') : 'Скорость Атаки',
            icon: '⚡',
            description: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('perm_desc_attackSpeed', 'Увеличивает базовую скорость атаки') : 'Увеличивает базовую скорость атаки',
            baseCost: 10,
            costIncrement: 18,
            baseIncrement: 0.04, 
            maxLevel: 50, 
            format: (level) => level > 0 ? `+${(level * 0.04).toFixed(2)}/с` : `0/с`
        },
        permRange: {
            id: 'permRange',
            category: 'attack',
            name: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('perm_range', 'Радиус') : 'Радиус',
            icon: '🎯',
            description: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('perm_desc_range', 'Увеличивает базовый радиус атаки') : 'Увеличивает базовый радиус атаки',
            baseCost: 20,
            costIncrement: 10,
            baseIncrement: 5, 
            maxLevel: 100, 
            format: (level) => `+${(level * 5)}`
        },
        permMultishotChance: {
            id: 'permMultishotChance',
            category: 'attack',
            name: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('perm_multishotChance', 'Мультишот Шанс') : 'Мультишот Шанс',
            icon: '🔫',
            description: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('perm_desc_multishotChance', 'Увеличивает шанс мультишота') : 'Увеличивает шанс мультишота',
            baseCost: 10,
            costIncrement: 10,
            baseIncrement: 0.5, 
            maxLevel: 50, 
            format: (level) => `+${(level * 0.5).toFixed(1)}%`
        },
        permCritChance: {
            id: 'permCritChance',
            category: 'attack',
            name: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('perm_critChance', 'Крит Шанс') : 'Крит Шанс',
            icon: '💥',
            description: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('perm_desc_critChance', 'Увеличивает шанс критического удара') : 'Увеличивает шанс критического удара',
            baseCost: 5,
            costIncrement: 10,
            baseIncrement: 0.5, 
            maxLevel: 100, 
            format: (level) => `+${(level * 0.5).toFixed(1)}%`
        },
        permCritMultiplier: {
            id: 'permCritMultiplier',
            category: 'attack',
            name: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('perm_critMultiplier', 'Крит Урон') : 'Крит Урон',
            icon: '💪',
            description: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('perm_desc_critMultiplier', 'Увеличивает множитель критического урона') : 'Увеличивает множитель критического урона',
            baseCost: 10,
            costIncrement: 21,
            baseIncrement: 0.10, 
            maxLevel: 100, 
            format: (level) => `+${(level * 0.10).toFixed(2)}x`
        },

        
        permMaxHealth: {
            id: 'permMaxHealth',
            category: 'defense',
            name: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('perm_maxHealth', 'Макс Здоровье') : 'Макс Здоровье',
            icon: '❤️',
            description: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('perm_desc_maxHealth', 'Увеличивает базовое здоровье') : 'Увеличивает базовое здоровье',
            baseCost: 8,
            costIncrement: 6,
            baseIncrement: 3, 
            maxLevel: 500, 
            format: (level) => `+${(level * 3)}`
        },
        permHealthRegen: {
            id: 'permHealthRegen',
            category: 'defense',
            name: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('perm_healthRegen', 'Регенерация') : 'Регенерация',
            icon: '💚',
            description: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('perm_desc_healthRegen', 'Увеличивает базовую регенерацию') : 'Увеличивает базовую регенерацию',
            baseCost: 25,
            costIncrement: 10,
            baseIncrement: 0.10, 
            maxLevel: 50, 
            format: (level) => `+${(level * 0.10).toFixed(2)}/с`
        },
        permDefense: {
            id: 'permDefense',
            category: 'defense',
            name: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('perm_defense', 'Защита') : 'Защита',
            icon: '🛡️',
            description: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('perm_desc_defense', 'Увеличивает защиту (уменьшает получаемый урон)') : 'Увеличивает защиту (уменьшает получаемый урон)',
            baseCost: 10,
            costIncrement: 10,
            baseIncrement: 0.5, 
            maxLevel: 50, 
            format: (level) => `+${(level * 0.5).toFixed(1)}%`
        },
        permVampirismChance: {
            id: 'permVampirismChance',
            category: 'defense',
            name: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('perm_vampirismChance', 'Вампиризм Шанс') : 'Вампиризм Шанс',
            icon: '🩸',
            description: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('perm_desc_vampirismChance', 'Увеличивает шанс вампиризма') : 'Увеличивает шанс вампиризма',
            baseCost: 10,
            costIncrement: 10,
            baseIncrement: 0.25,
            maxLevel: 50, 
            format: (level) => `+${(level * 0.25).toFixed(1)}%`
        },
        permVampirismAmount: {
            id: 'permVampirismAmount',
            category: 'defense',
            name: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('perm_vampirismAmount', 'Вампиризм Сила') : 'Вампиризм Сила',
            icon: '💉',
            description: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('perm_desc_vampirismAmount', 'Увеличивает количество лечения от вампиризма') : 'Увеличивает количество лечения от вампиризма',
            baseCost: 10,
            costIncrement: 15,
            baseIncrement: 0.25,
            maxLevel: 100, 
            format: (level) => `+${(level * 0.25).toFixed(1)}%`
        },
        permThornsDamage: {
            id: 'permThornsDamage',
            category: 'defense',
            name: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('perm_thornsDamage', 'Контрударный щит') : 'Контрударный щит',
            icon: '🌵',
            description: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('perm_desc_thornsDamage', 'Усиливает снижение урона от контактных атак') : 'Усиливает снижение урона от контактных атак',
            baseCost: 15,
            costIncrement: 10,
            baseIncrement: 1.5, 
            maxLevel: 100, 
            format: (level) => `+${(level * 1.5).toFixed(1)}%`
        },

        
        permWeeklyGoldBonus: {
            id: 'permWeeklyGoldBonus',
            category: 'utility',
            name: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('perm_weeklyGoldBonus', 'Бонус золота за день') : 'Бонус золота за день',
            icon: '📅',
            description: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('perm_desc_weeklyGoldBonus', 'Увеличивает золото за завершение дня') : 'Увеличивает золото за завершение дня',
            baseCost: 5,
            costIncrement: 5,
            baseIncrement: 1, 
            maxLevel: 100,
            format: (level) => `+${level}`
        },
        permKillGoldBonus: {
            id: 'permKillGoldBonus',
            category: 'utility',
            name: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('perm_killGoldBonus', 'Золото за Убийство') : 'Золото за Убийство',
            icon: '💰',
            description: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('perm_desc_killGoldBonus', 'Увеличивает золото за каждое убийство') : 'Увеличивает золото за каждое убийство',
            baseCost: 155,
            costIncrement: 45,
            baseIncrement: 1, 
            maxLevel: 50,
            format: (level) => `+${level}`
        },
        permWeeklyCrystalBonus: {
            id: 'permWeeklyCrystalBonus',
            category: 'utility',
            name: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('perm_weeklyCrystalBonus', 'Бонус кристаллов за день') : 'Бонус кристаллов за день',
            icon: '💎',
            description: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('perm_desc_weeklyCrystalBonus', 'Увеличивает кристаллы за завершение дня') : 'Увеличивает кристаллы за завершение дня',
            baseCost: 25,
            costIncrement: 45,
            baseIncrement: 1, 
            maxLevel: 50,
            format: (level) => `+${level}`
        },
        permGameSpeed: {
            id: 'permGameSpeed',
            category: 'utility',
            name: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('perm_gameSpeed', 'Скорость Игры') : 'Скорость Игры',
            icon: '⏩',
            description: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('perm_desc_gameSpeed', 'Увеличивает скорость игры') : 'Увеличивает скорость игры',
            baseCost: 260,
            costIncrement: 90,
            baseIncrement: 0.25, 
            maxLevel: 12, 
            format: (level) => `+${(level * 0.25).toFixed(2)}x`
        },
        permTraderChance: {
            id: 'permTraderChance',
            category: 'utility',
            name: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('perm_traderChance', 'Шанс торговца') : 'Шанс торговца',
            icon: '🤝',
            description: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('perm_desc_traderChance', 'Увеличивает шанс призвать торговца после убийства врага') : 'Увеличивает шанс призвать торговца после убийства врага',
            baseCost: 10,
            costIncrement: 10,
            baseIncrement: 0.15, 
            maxLevel: 100, 
            format: (level) => `+${(level * 0.15).toFixed(2)}%`
        },
        permUnlockGarden: {
            id: 'permUnlockGarden',
            category: 'utility',
            name: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('perm_unlockGarden', 'Разблокировать Огород') : 'Разблокировать Огород',
            icon: '🌱',
            description: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('perm_desc_unlockGarden', 'Открывает дополнительный огород для выращивания растений') : 'Открывает дополнительный огород для выращивания растений',
            baseCost: 500,
            costIncrement: 500, 
            baseIncrement: 1, 
            maxLevel: 2, 
            format: (level) => `${level + 1}/3 огородов`
        }
    },

    

    


    getInGameCost(upgradeId, currentLevel) {
        const upgrade = this.findInGameUpgrade(upgradeId);
        if (!upgrade) return Infinity;

        if (upgrade.costFormula === 'arithmetic') {
            
            const n = currentLevel;
            const a1 = upgrade.baseCostIncrement;
            const d = upgrade.costIncrementGrowth;
            
            const additionalCost = (n / 2) * (2 * a1 + (n - 1) * d);
            return upgrade.baseCost + additionalCost;
        }

        return upgrade.baseCost + (currentLevel * upgrade.costIncrement);
    },

    


    getPermanentCost(upgradeId, currentLevel) {
        const upgrade = this.PERMANENT[upgradeId];
        if (!upgrade) return Infinity;
        return upgrade.baseCost + (currentLevel * upgrade.costIncrement);
    },

    


    getInGameValue(upgradeId, level) {
        const upgrade = this.findInGameUpgrade(upgradeId);
        if (!upgrade) return 0;
        return upgrade.baseValue + (level * upgrade.increment);
    },

    


    findInGameUpgrade(upgradeId) {
        const allUpgrades = { ...this.ATTACK, ...this.DEFENSE, ...this.UTILITY };
        return allUpgrades[upgradeId];
    },

    


    getByCategory(category) {
        switch(category) {
            case 'attack': return this.ATTACK;
            case 'defense': return this.DEFENSE;
            case 'utility': return this.UTILITY;
            default: return {};
        }
    },

    


    getPermanentByCategory(category) {
        const result = {};
        for (const [key, upgrade] of Object.entries(this.PERMANENT)) {
            if (upgrade.category === category) {
                result[key] = upgrade;
            }
        }
        return result;
    },

    




    getSharedMaxLevel(upgradeId) {
        return this.SHARED_MAX_LEVELS[upgradeId] || 999;
    },

    




    getPermanentUpgradeId(gameUpgradeId) {
        const mapping = {
            damage: 'permDamage',
            attackSpeed: 'permAttackSpeed',
            range: 'permRange',
            multishotChance: 'permMultishotChance',
            critChance: 'permCritChance',
            critMultiplier: 'permCritMultiplier',
            maxHealth: 'permMaxHealth',
            healthRegen: 'permHealthRegen',
            defense: 'permDefense',
            vampirismChance: 'permVampirismChance',
            vampirismAmount: 'permVampirismAmount',
            thornsDamage: 'permThornsDamage',
            killGoldBonus: 'permKillGoldBonus',
            weeklyGoldBonus: 'permWeeklyGoldBonus',
            weeklyCrystalBonus: 'permWeeklyCrystalBonus',
            gameSpeed: 'permGameSpeed',
            traderChance: 'permTraderChance'
        };
        return mapping[gameUpgradeId] || null;
    },

    




    isInGameUpgrade(upgradeId) {
        const allInGame = { ...this.ATTACK, ...this.DEFENSE, ...this.UTILITY };
        return upgradeId in allInGame;
    },

    


    applyBalanceConfigOverrides() {
        if (typeof BalanceRuntime === 'undefined' || !BalanceRuntime.get) {
            return;
        }

        const sharedMax = BalanceRuntime.get('upgradeDefinitions.sharedMaxLevels', null);
        if (sharedMax && typeof sharedMax === 'object') {
            Object.assign(this.SHARED_MAX_LEVELS, sharedMax);
        }

        const inGameOverrides = BalanceRuntime.get('upgradeDefinitions.inGame', null);
        if (inGameOverrides && typeof inGameOverrides === 'object') {
            Object.entries(inGameOverrides).forEach(([upgradeId, patch]) => {
                const target = this.findInGameUpgrade(upgradeId);
                if (!target || !patch || typeof patch !== 'object') {
                    return;
                }

                Object.entries(patch).forEach(([key, value]) => {
                    if (typeof value === 'number' || typeof value === 'string' || typeof value === 'boolean') {
                        target[key] = value;
                    }
                });
            });
        }

        const permanentOverrides = BalanceRuntime.get('upgradeDefinitions.permanent', null);
        if (permanentOverrides && typeof permanentOverrides === 'object') {
            Object.entries(permanentOverrides).forEach(([upgradeId, patch]) => {
                const target = this.PERMANENT[upgradeId];
                if (!target || !patch || typeof patch !== 'object') {
                    return;
                }

                Object.entries(patch).forEach(([key, value]) => {
                    if (typeof value === 'number' || typeof value === 'string' || typeof value === 'boolean') {
                        target[key] = value;
                    }
                });
            });
        }
    },

    




    isPermanentUpgrade(upgradeId) {
        return upgradeId in this.PERMANENT;
    }
};

UpgradeDefinitions.applyBalanceConfigOverrides();


if (typeof module !== 'undefined' && module.exports) {
    module.exports = UpgradeDefinitions;
}
