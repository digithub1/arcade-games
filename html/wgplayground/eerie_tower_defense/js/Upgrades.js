





class BaseUpgrade {
    constructor(id, name, icon, maxLevel = 3) {
        this.id = id;
        this._nameKey = 'unique_' + id;
        this._defaultName = name;
        this.icon = icon;
        this.maxLevel = maxLevel;
        this.updateName();
    }
    
    


    updateName() {
        if (typeof LocalizationManager !== 'undefined' && LocalizationManager.translations) {
            this.name = LocalizationManager.t(this._nameKey, this._defaultName);
        } else {
            this.name = this._defaultName;
        }
    }
    
    getShortDescription(level) {
        return 'Базовое улучшение';
    }
    
    getDetailedDescription(level) {
        return 'Подробное описание';
    }
    
    apply(game, level) {
        
    }
}

function getUniqueUpgradeConfig(upgradeId, field, fallback) {
    if (typeof BalanceRuntime === 'undefined' || !BalanceRuntime.get) {
        return fallback;
    }

    const value = BalanceRuntime.get(`uniqueUpgrades.${upgradeId}.${field}`, undefined);
    return value === undefined ? fallback : value;
}

function getUpgradeLevelValue(values, level, fallback) {
    const normalizedLevel = Math.max(1, Math.floor(Number(level) || 1));
    const index = normalizedLevel - 1;

    if (Array.isArray(values) && index < values.length && values[index] !== undefined) {
        return values[index];
    }

    return fallback;
}



class ChainLightningUpgrade extends BaseUpgrade {
    constructor() {
        super('chainLightning', typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('unique_chainLightning', 'Цепная Молния') : 'Цепная Молния', '⚡');
        this.chances = getUniqueUpgradeConfig('chainLightning', 'chances', [0.2, 0.25, 0.3]);
        this.jumps = getUniqueUpgradeConfig('chainLightning', 'jumps', [2, 3, 4]);
        this.damagePercent = getUniqueUpgradeConfig('chainLightning', 'damagePercent', [0.75, 0.8, 0.85]);
    }

    getShortDescription(level) {
        const chance = Math.round(this.chances[level - 1] * 100);
        if (typeof LocalizationManager !== 'undefined') {
            return LocalizationManager.t('unique_short_chainLightning', '{0}% шанс цепной молнии', chance);
        }
        return `${chance}% шанс цепной молнии`;
    }

    getDetailedDescription(level) {
        const chance = Math.round(this.chances[level - 1] * 100);
        const jumps = this.jumps[level - 1];
        const dmg = Math.round(this.damagePercent[level - 1] * 100);
        if (typeof LocalizationManager !== 'undefined') {
            return LocalizationManager.t('unique_desc_chainLightning', 'При попадании {0}% шанс создать цепную молнию. Молния поражает {1} ближайших врагов, нанося {2}% урона каждому.', chance, jumps, dmg);
        }
        return `При попадании ${chance}% шанс создать цепную молнию. Молния поражает ${jumps} ближайших врагов, нанося ${dmg}% урона каждому.`;
    }
    
    apply(game, level) {
        if (!game.tower) return;
        game.tower.chainLightning = {
            chance: getUpgradeLevelValue(this.chances, level, 0.2),
            jumps: getUpgradeLevelValue(this.jumps, level, 2),
            damagePercent: getUpgradeLevelValue(this.damagePercent, level, 0.75)
        };
    }
}

class DoubleShotUpgrade extends BaseUpgrade {
    constructor() {
        super('doubleShot', typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('unique_doubleShot', 'Двойной Выстрел') : 'Двойной Выстрел', '👥');
        this.chances = getUniqueUpgradeConfig('doubleShot', 'chances', [0.15, 0.2, 0.25]);
    }

    getShortDescription(level) {
        const chance = Math.round(this.chances[level - 1] * 100);
        if (typeof LocalizationManager !== 'undefined') {
            return LocalizationManager.t('unique_short_doubleShot', '{0}% шанс выстрелить 2 стрелами', chance);
        }
        return `${chance}% шанс выстрелить 2 стрелами`;
    }

    getDetailedDescription(level) {
        const chance = Math.round(this.chances[level - 1] * 100);
        if (typeof LocalizationManager !== 'undefined') {
            return LocalizationManager.t('unique_desc_doubleShot', '{0}% шанс выпустить 2 стрелы вместо 1. Обе стрелы наносят полный урон.', chance);
        }
        return `${chance}% шанс выпустить 2 стрелы вместо 1. Обе стрелы наносят полный урон.`;
    }
    
    apply(game, level) {
        if (!game.tower) return;
        game.tower.doubleShotChance = getUpgradeLevelValue(this.chances, level, 0.15);
    }
}

class PoisonArrowsUpgrade extends BaseUpgrade {
    constructor() {
        super('poisonArrows', typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('unique_poisonArrows', 'Газовые стрелы') : 'Газовые стрелы', '🌫️');
        this.slowPercent = getUniqueUpgradeConfig('poisonArrows', 'slowPercent', [0.16, 0.2, 0.24]);
        this.radius = getUniqueUpgradeConfig('poisonArrows', 'radius', [95, 115, 135]);
        this.durations = getUniqueUpgradeConfig('poisonArrows', 'durations', [2.4, 2.8, 3.2]);
    }

    getShortDescription(level) {
        const slow = Math.round(this.slowPercent[level - 1] * 100);
        if (typeof LocalizationManager !== 'undefined') {
            return LocalizationManager.t('unique_short_poisonArrows', 'Газовое облако: замедление {0}%', slow);
        }
        return `Газовое облако: замедление ${slow}%`;
    }

    getDetailedDescription(level) {
        const slow = Math.round(this.slowPercent[level - 1] * 100);
        const radius = this.radius[level - 1];
        const dur = this.durations[level - 1];
        if (typeof LocalizationManager !== 'undefined') {
            return LocalizationManager.t(
                'unique_desc_poisonArrows',
                'Попадания создают облако газа ({0}px) на {1}с, замедляя врагов на {2}%.',
                radius,
                dur,
                slow
            );
        }
        return `Попадания создают облако газа (${radius}px) на ${dur}с, замедляя врагов на ${slow}%.`;
    }
    
    apply(game, level) {
        if (!game.tower) return;
        game.tower.poison = {
            slowPercent: getUpgradeLevelValue(this.slowPercent, level, 0.16),
            radius: getUpgradeLevelValue(this.radius, level, 95),
            duration: getUpgradeLevelValue(this.durations, level, 2.4)
        };
    }
}

class FrostAuraUpgrade extends BaseUpgrade {
    constructor() {
        super('frostAura', typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('unique_frostAura', 'Ледяная Аура') : 'Ледяная Аура', '❄️');
        this.slowPercent = getUniqueUpgradeConfig('frostAura', 'slowPercent', [0.2, 0.25, 0.3]);
        this.radius = getUniqueUpgradeConfig('frostAura', 'radius', [200, 225, 250]);
    }

    getShortDescription(level) {
        const slow = Math.round(this.slowPercent[level - 1] * 100);
        const radius = this.radius[level - 1];
        if (typeof LocalizationManager !== 'undefined') {
            return LocalizationManager.t('unique_short_frostAura', 'Замедление {0}% в радиусе {1}px', slow, radius);
        }
        return `Замедление ${slow}% в радиусе ${radius}px`;
    }

    getDetailedDescription(level) {
        const slow = Math.round(this.slowPercent[level - 1] * 100);
        const radius = this.radius[level - 1];
        if (typeof LocalizationManager !== 'undefined') {
            return LocalizationManager.t('unique_desc_frostAura', 'Все враги в радиусе {0}px замедлены на {1}%. Эффект постоянный.', radius, slow);
        }
        return `Все враги в радиусе ${radius}px замедлены на ${slow}%. Эффект постоянный.`;
    }
    
    apply(game, level) {
        if (!game.tower) return;
        game.tower.frostAura = {
            slowPercent: getUpgradeLevelValue(this.slowPercent, level, 0.2),
            radius: getUpgradeLevelValue(this.radius, level, 200)
        };
    }
}



class PiercingArrowUpgrade extends BaseUpgrade {
    constructor() {
        super('piercingArrow', typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('unique_piercingArrow', 'Сквозная Стрела') : 'Сквозная Стрела', '🏹');
        this.interval = getUniqueUpgradeConfig('piercingArrow', 'interval', [5, 4, 3]);
    }

    getShortDescription(level) {
        const interval = this.interval[level - 1];
        if (typeof LocalizationManager !== 'undefined') {
            return LocalizationManager.t('unique_short_piercingArrow', 'Каждая {0}-я стрела пробивает всех', interval);
        }
        return `Каждая ${interval}-я стрела пробивает всех`;
    }

    getDetailedDescription(level) {
        const interval = this.interval[level - 1];
        if (typeof LocalizationManager !== 'undefined') {
            return LocalizationManager.t('unique_desc_piercingArrow', 'Каждая {0}-я стрела пролетает сквозь всех врагов на линии, нанося полный урон каждому.', interval);
        }
        return `Каждая ${interval}-я стрела пролетает сквозь всех врагов на линии, нанося полный урон каждому.`;
    }
    
    apply(game, level) {
        if (!game.tower) return;
        game.tower.piercingInterval = getUpgradeLevelValue(this.interval, level, 5);
    }
}

class SplittingArrowUpgrade extends BaseUpgrade {
    constructor() {
        super('splittingArrow', typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('unique_splittingArrow', 'Разделяющаяся Стрела') : 'Разделяющаяся Стрела', '🎯');
        this.arrows = getUniqueUpgradeConfig('splittingArrow', 'arrows', [2, 2, 3]);
        this.damagePercent = getUniqueUpgradeConfig('splittingArrow', 'damagePercent', [0.5, 0.6, 0.5]);
    }

    getShortDescription(level) {
        const arrows = this.arrows[level - 1];
        if (typeof LocalizationManager !== 'undefined') {
            return LocalizationManager.t('unique_short_splittingArrow', 'Стрелы разделяются на {0}', arrows);
        }
        return `Стрелы разделяются на ${arrows}`;
    }

    getDetailedDescription(level) {
        const arrows = this.arrows[level - 1];
        const dmg = Math.round(this.damagePercent[level - 1] * 100);
        if (typeof LocalizationManager !== 'undefined') {
            return LocalizationManager.t('unique_desc_splittingArrow', 'При попадании стрела разделяется на {0} маленькие стрелы ({1}% урона каждая), которые летят в случайных ближайших врагов.', arrows, dmg);
        }
        return `При попадании стрела разделяется на ${arrows} маленькие стрелы (${dmg}% урона каждая), которые летят в случайных ближайших врагов.`;
    }
    
    apply(game, level) {
        if (!game.tower) return;
        game.tower.splittingArrow = {
            arrows: getUpgradeLevelValue(this.arrows, level, 2),
            damagePercent: getUpgradeLevelValue(this.damagePercent, level, 0.5)
        };
    }
}

class CritExplosionUpgrade extends BaseUpgrade {
    constructor() {
        super('critExplosion', typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('unique_critExplosion', 'Крит-Взрыв') : 'Крит-Взрыв', '💥');
        this.radius = getUniqueUpgradeConfig('critExplosion', 'radius', [100, 125, 150]);
        this.damagePercent = getUniqueUpgradeConfig('critExplosion', 'damagePercent', [0.5, 0.6, 0.75]);
    }

    getShortDescription(level) {
        const radius = this.radius[level - 1];
        if (typeof LocalizationManager !== 'undefined') {
            return LocalizationManager.t('unique_short_critExplosion', 'Криты создают взрыв радиусом {0}px', radius);
        }
        return `Криты создают взрыв радиусом ${radius}px`;
    }

    getDetailedDescription(level) {
        const radius = this.radius[level - 1];
        const dmg = Math.round(this.damagePercent[level - 1] * 100);
        if (typeof LocalizationManager !== 'undefined') {
            return LocalizationManager.t('unique_desc_critExplosion', 'Критические удары создают взрыв радиусом {0}px, нанося {1}% урона всем врагам в радиусе.', radius, dmg);
        }
        return `Критические удары создают взрыв радиусом ${radius}px, нанося ${dmg}% урона всем врагам в радиусе.`;
    }
    
    apply(game, level) {
        if (!game.tower) return;
        game.tower.critExplosion = {
            radius: getUpgradeLevelValue(this.radius, level, 100),
            damagePercent: getUpgradeLevelValue(this.damagePercent, level, 0.5)
        };
    }
}

class FireAuraUpgrade extends BaseUpgrade {
    constructor() {
        super('fireAura', typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('unique_fireAura', 'Огненная Аура') : 'Огненная Аура', '🔥');
        this.damage = getUniqueUpgradeConfig('fireAura', 'damage', [2, 3, 4]);
        this.radius = getUniqueUpgradeConfig('fireAura', 'radius', [140, 160, 180]);
        this.maxTargets = getUniqueUpgradeConfig('fireAura', 'maxTargets', [4, 5, 6]);
    }

    getShortDescription(level) {
        const dmg = this.damage[level - 1];
        const radius = this.radius[level - 1];
        if (typeof LocalizationManager !== 'undefined') {
            return LocalizationManager.t('unique_short_fireAura', '{0} урона/сек в радиусе {1}px', dmg, radius);
        }
        return `${dmg} урона/сек в радиусе ${radius}px`;
    }

    getDetailedDescription(level) {
        const dmg = this.damage[level - 1];
        const radius = this.radius[level - 1];
        if (typeof LocalizationManager !== 'undefined') {
            return LocalizationManager.t('unique_desc_fireAura', 'Все враги в радиусе {0}px получают {1} урона каждую секунду.', radius, dmg);
        }
        return `Все враги в радиусе ${radius}px получают ${dmg} урона каждую секунду.`;
    }
    
    apply(game, level) {
        if (!game.tower) return;
        game.tower.fireAura = {
            damage: getUpgradeLevelValue(this.damage, level, 2),
            radius: getUpgradeLevelValue(this.radius, level, 140),
            maxTargets: getUpgradeLevelValue(this.maxTargets, level, 4)
        };
    }
}



class LastStandUpgrade extends BaseUpgrade {
    constructor() {
        super('lastStand', typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('unique_lastStand', 'Последний Рубеж') : 'Последний Рубеж', '🛡️');
        this.speedBoost = getUniqueUpgradeConfig('lastStand', 'speedBoost', [1.0, 1.0, 1.0]);
        this.damageBoost = getUniqueUpgradeConfig('lastStand', 'damageBoost', [0.5, 0.75, 1.0]);
        this.duration = getUniqueUpgradeConfig('lastStand', 'duration', [5, 5, 5]);
        this.cooldown = getUniqueUpgradeConfig('lastStand', 'cooldown', [15, 15, 15]);
    }

    getShortDescription(level) {
        const dmg = Math.round(this.damageBoost[level - 1] * 100);
        if (typeof LocalizationManager !== 'undefined') {
            return LocalizationManager.t('unique_short_lastStand', 'При HP<25%: скорость x2, урон +{0}%', dmg);
        }
        return `При HP<25%: скорость x2, урон +${dmg}%`;
    }

    getDetailedDescription(level) {
        const dmg = Math.round(this.damageBoost[level - 1] * 100);
        if (typeof LocalizationManager !== 'undefined') {
            return LocalizationManager.t('unique_desc_lastStand', 'Когда здоровье падает ниже 25%: скорость атаки удваивается, урон +{0}%. Длится 5 секунд, перезарядка 15 сек.', dmg);
        }
        return `Когда здоровье падает ниже 25%: скорость атаки удваивается, урон +${dmg}%. Длится 5 секунд, перезарядка 15 сек.`;
    }
    
    apply(game, level) {
        if (!game.tower) return;
        game.tower.lastStand = {
            speedBoost: getUpgradeLevelValue(this.speedBoost, level, 1.0),
            damageBoost: getUpgradeLevelValue(this.damageBoost, level, 0.5),
            duration: getUpgradeLevelValue(this.duration, level, 5),
            cooldown: getUpgradeLevelValue(this.cooldown, level, 15)
        };
    }
}

class KillStreakUpgrade extends BaseUpgrade {
    constructor() {
        super('killStreak', typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('unique_killStreak', 'Убийственный Ритм') : 'Убийственный Ритм', '🎵');
        this.killsRequired = getUniqueUpgradeConfig('killStreak', 'killsRequired', [6, 5, 4]);
        this.duration = getUniqueUpgradeConfig('killStreak', 'duration', [2.5, 3, 3.5]);
        this.attackSpeedBoost = getUniqueUpgradeConfig('killStreak', 'attackSpeedBoost', [0.28, 0.38, 0.48]);
        this.damageBoost = getUniqueUpgradeConfig('killStreak', 'damageBoost', [0.12, 0.2, 0.28]);
    }

    getShortDescription(level) {
        const kills = this.killsRequired[level - 1];
        const speedBoost = Math.round(this.attackSpeedBoost[level - 1] * 100);
        if (typeof LocalizationManager !== 'undefined') {
            return LocalizationManager.t('unique_short_killStreak', '{0} убийств подряд = +{1}% к скорости атаки', kills, speedBoost);
        }
        return `${kills} убийств подряд = +${speedBoost}% к скорости атаки`;
    }

    getDetailedDescription(level) {
        const kills = this.killsRequired[level - 1];
        const speedBoost = Math.round(this.attackSpeedBoost[level - 1] * 100);
        const damageBoost = Math.round(this.damageBoost[level - 1] * 100);
        const duration = this.duration[level - 1];
        if (typeof LocalizationManager !== 'undefined') {
            return LocalizationManager.t(
                'unique_desc_killStreak',
                'После {0} убийств подряд: на {1}с башня получает +{2}% к скорости атаки и +{3}% к урону.',
                kills,
                duration,
                speedBoost,
                damageBoost
            );
        }
        return `После ${kills} убийств подряд: на ${duration}с башня получает +${speedBoost}% к скорости атаки и +${damageBoost}% к урону.`;
    }
    
    apply(game, level) {
        if (!game.tower) return;
        game.tower.killStreak = {
            killsRequired: getUpgradeLevelValue(this.killsRequired, level, 6),
            duration: getUpgradeLevelValue(this.duration, level, 2.5),
            attackSpeedBoost: getUpgradeLevelValue(this.attackSpeedBoost, level, 0.28),
            damageBoost: getUpgradeLevelValue(this.damageBoost, level, 0.12),
            currentKills: 0
        };
    }
}

class GoldFeverUpgrade extends BaseUpgrade {
    constructor() {
        super('goldFever', typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('unique_goldFever', 'Золотая Лихорадка') : 'Золотая Лихорадка', '💰');
        this.chance = getUniqueUpgradeConfig('goldFever', 'chance', [0.1, 0.15, 0.2]);
        this.goldMultiplier = getUniqueUpgradeConfig('goldFever', 'goldMultiplier', [2, 2.5, 3]);
        this.radius = getUniqueUpgradeConfig('goldFever', 'radius', [150, 175, 200]);
    }

    getShortDescription(level) {
        const chance = Math.round(this.chance[level - 1] * 100);
        if (typeof LocalizationManager !== 'undefined') {
            return LocalizationManager.t('unique_short_goldFever', '{0}% шанс золотого взрыва', chance);
        }
        return `${chance}% шанс золотого взрыва`;
    }

    getDetailedDescription(level) {
        const chance = Math.round(this.chance[level - 1] * 100);
        const mult = this.goldMultiplier[level - 1];
        const radius = this.radius[level - 1];
        if (typeof LocalizationManager !== 'undefined') {
            return LocalizationManager.t('unique_desc_goldFever', '{0}% шанс при убийстве: враг взрывается золотом. Все враги в радиусе {1}px дают x{2} золота.', chance, radius, mult);
        }
        return `${chance}% шанс при убийстве: враг взрывается золотом. Все враги в радиусе ${radius}px дают x${mult} золота.`;
    }
    
    apply(game, level) {
        if (!game.tower) return;
        game.tower.goldFever = {
            chance: getUpgradeLevelValue(this.chance, level, 0.1),
            goldMultiplier: getUpgradeLevelValue(this.goldMultiplier, level, 2),
            radius: getUpgradeLevelValue(this.radius, level, 150)
        };
    }
}

class VampiricRageUpgrade extends BaseUpgrade {
    constructor() {
        super('vampiricRage', typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('unique_vampiricRage', 'Вампирская Ярость') : 'Вампирская Ярость', '🩸');
        this.healAmount = getUniqueUpgradeConfig('vampiricRage', 'healAmount', [2, 3, 5]);
        this.duration = getUniqueUpgradeConfig('vampiricRage', 'duration', [10, 10, 10]);
    }

    getShortDescription(level) {
        const heal = this.healAmount[level - 1];
        const dur = this.duration[level - 1];
        if (typeof LocalizationManager !== 'undefined') {
            return LocalizationManager.t('unique_short_vampiricRage', '+{0} HP за убийство ({1} сек)', heal, dur);
        }
        return `+${heal} HP за убийство (${dur} сек)`;
    }

    getDetailedDescription(level) {
        const heal = this.healAmount[level - 1];
        const dur = this.duration[level - 1];
        if (typeof LocalizationManager !== 'undefined') {
            return LocalizationManager.t('unique_desc_vampiricRage', 'При повышении уровня и на следующие {0} секунд: каждое убийство восстанавливает {1} HP.', dur, heal);
        }
        return `При повышении уровня и на следующие ${dur} секунд: каждое убийство восстанавливает ${heal} HP.`;
    }
    
    apply(game, level) {
        if (!game.tower) return;
        const duration = getUpgradeLevelValue(this.duration, level, 10);
        game.tower.vampiricRage = {
            healAmount: getUpgradeLevelValue(this.healAmount, level, 2),
            duration: duration,
            active: true,
            endTime: Date.now() + duration * 1000
        };
    }
}



class CrowdControlUpgrade extends BaseUpgrade {
    constructor() {
        super('crowdControl', typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('unique_crowdControl', 'Контроль Толпы') : 'Контроль Толпы', '🌀');
        this.interval = getUniqueUpgradeConfig('crowdControl', 'interval', [11, 9, 7]);
        this.pushDistance = getUniqueUpgradeConfig('crowdControl', 'pushDistance', [42, 56, 70]);
        this.radius = getUniqueUpgradeConfig('crowdControl', 'radius', [220, 245, 270]);
        this.eliteResistance = getUniqueUpgradeConfig('crowdControl', 'eliteResistance', {
            boss: 0.7,
            tank: 0.5,
            splitter: 0.45,
            healer: 0.3
        });
    }

    getShortDescription(level) {
        const interval = this.interval[level - 1];
        const radius = this.radius[level - 1];
        if (typeof LocalizationManager !== 'undefined') {
            return LocalizationManager.t('unique_short_crowdControl', 'Каждые {0}с импульс ({1}px)', interval, radius);
        }
        return `Каждые ${interval}с импульс (${radius}px)`;
    }

    getDetailedDescription(level) {
        const interval = this.interval[level - 1];
        const dist = this.pushDistance[level - 1];
        const radius = this.radius[level - 1];
        if (typeof LocalizationManager !== 'undefined') {
            return LocalizationManager.t(
                'unique_desc_crowdControl',
                'Каждые {0}с башня создаёт импульс в радиусе {1}px и отталкивает врагов на {2}px.',
                interval,
                radius,
                dist
            );
        }
        return `Каждые ${interval}с башня создаёт импульс в радиусе ${radius}px и отталкивает врагов на ${dist}px.`;
    }
    
    apply(game, level) {
        if (!game.tower) return;
        game.tower.crowdControl = {
            interval: getUpgradeLevelValue(this.interval, level, 11),
            pushDistance: getUpgradeLevelValue(this.pushDistance, level, 42),
            radius: getUpgradeLevelValue(this.radius, level, 220),
            eliteResistance: this.eliteResistance,
            lastPush: 0
        };
    }
}

class FreezingArrowsUpgrade extends BaseUpgrade {
    constructor() {
        super('freezingArrows', typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('unique_freezingArrows', 'Ледяной Взрыв') : 'Ледяной Взрыв', '❄️');
        this.chance = getUniqueUpgradeConfig('freezingArrows', 'chance', [0.1, 0.15, 0.2]);
        this.duration = getUniqueUpgradeConfig('freezingArrows', 'duration', [2, 2.5, 3]);
        this.radius = getUniqueUpgradeConfig('freezingArrows', 'radius', [80, 100, 120]);
    }

    getShortDescription(level) {
        const chance = Math.round(this.chance[level - 1] * 100);
        if (typeof LocalizationManager !== 'undefined') {
            return LocalizationManager.t('unique_short_freezingArrows', '{0}% шанс ледяного взрыва', chance);
        }
        return `${chance}% шанс ледяного взрыва`;
    }

    getDetailedDescription(level) {
        const chance = Math.round(this.chance[level - 1] * 100);
        const dur = this.duration[level - 1];
        const radius = this.radius[level - 1];
        if (typeof LocalizationManager !== 'undefined') {
            return LocalizationManager.t('unique_desc_freezingArrows', '{0}% шанс замедлить врага и всех в радиусе {1}px на {2} сек. (Не работает на Боссов и Элиту)', chance, radius, dur);
        }
        return `${chance}% шанс заморозить врага и всех в радиусе ${radius}px на ${dur} сек.`;
    }
    
    apply(game, level) {
        if (!game.tower) return;
        game.tower.freezingArrows = {
            chance: getUpgradeLevelValue(this.chance, level, 0.1),
            duration: getUpgradeLevelValue(this.duration, level, 2),
            radius: getUpgradeLevelValue(this.radius, level, 80)
        };
    }
}

class StatBoostUpgrade extends BaseUpgrade {
    constructor() {
        super('statBoost', typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('unique_statBoost', 'Усиление Процента') : 'Усиление Процента', '📊');
        this.critChance = getUniqueUpgradeConfig('statBoost', 'critChance', [0.1, 0.15, 0.2]);
        this.multishot = getUniqueUpgradeConfig('statBoost', 'multishot', [0.1, 0.15, 0.2]);
        this.vampChance = getUniqueUpgradeConfig('statBoost', 'vampChance', [0.1, 0.15, 0.2]);
    }

    getShortDescription(level) {
        const crit = Math.round(this.critChance[level - 1] * 100);
        if (typeof LocalizationManager !== 'undefined') {
            return LocalizationManager.t('unique_short_statBoost', '+{0}% к шансам', crit);
        }
        return `+${crit}% к шансам`;
    }

    getDetailedDescription(level) {
        const crit = Math.round(this.critChance[level - 1] * 100);
        const multi = Math.round(this.multishot[level - 1] * 100);
        const vamp = Math.round(this.vampChance[level - 1] * 100);
        if (typeof LocalizationManager !== 'undefined') {
            return LocalizationManager.t('unique_desc_statBoost', 'Увеличивает все шансы: крита +{0}%, мультивыстрела +{1}%, вампиризма +{2}%.', crit, multi, vamp);
        }
        return `Увеличивает все шансы: крита +${crit}%, мультивыстрела +${multi}%, вампиризма +${vamp}%.`;
    }
    
    apply(game, level) {
        if (!game.tower) return;
        game.tower.statBoost = {
            critChance: getUpgradeLevelValue(this.critChance, level, 0.1),
            multishot: getUpgradeLevelValue(this.multishot, level, 0.1),
            vampChance: getUpgradeLevelValue(this.vampChance, level, 0.1)
        };
    }
}

class HunterSightUpgrade extends BaseUpgrade {
    constructor() {
        super(
            'hunterSight',
            typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('unique_hunterSight', 'Охотничий Прицел') : 'Охотничий Прицел',
            '🎯',
            1
        );
        this.priorityMode = getUniqueUpgradeConfig('hunterSight', 'priorityMode', 'danger');
    }

    getShortDescription() {
        if (typeof LocalizationManager !== 'undefined') {
            return LocalizationManager.t('unique_short_hunterSight', 'Башня сама выбирает опасные цели');
        }
        return 'Башня сама выбирает опасные цели';
    }

    getDetailedDescription() {
        if (typeof LocalizationManager !== 'undefined') {
            return LocalizationManager.t('unique_desc_hunterSight', 'Приоритет цели меняется: сначала опасные кастеры и готовящиеся элитки, затем остальные элитные и боссы.');
        }
        return 'Приоритет цели меняется: сначала опасные кастеры и готовящиеся элитки, затем остальные элитные и боссы.';
    }

    apply(game) {
        if (!game.tower) return;
        game.tower.priorityMode = this.priorityMode;
    }
}

class MonsterHunterUpgrade extends BaseUpgrade {
    constructor() {
        super(
            'monsterHunter',
            typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('unique_monsterHunter', 'Охотник на Чудовищ') : 'Охотник на Чудовищ',
            '🗡️'
        );
        this.damageMult = getUniqueUpgradeConfig('monsterHunter', 'damageMult', [0.2, 0.3, 0.45]);
    }

    getShortDescription(level) {
        const bonus = Math.round(getUpgradeLevelValue(this.damageMult, level, 0.2) * 100);
        if (typeof LocalizationManager !== 'undefined') {
            return LocalizationManager.t('unique_short_monsterHunter', '+{0}% урона по элите и боссам', bonus);
        }
        return `+${bonus}% урона по элите и боссам`;
    }

    getDetailedDescription(level) {
        const bonus = Math.round(getUpgradeLevelValue(this.damageMult, level, 0.2) * 100);
        if (typeof LocalizationManager !== 'undefined') {
            return LocalizationManager.t('unique_desc_monsterHunter', 'Башня автоматически наносит на {0}% больше урона элитным врагам и боссам.', bonus);
        }
        return `Башня автоматически наносит на ${bonus}% больше урона элитным врагам и боссам.`;
    }

    apply(game, level) {
        if (!game.tower) return;
        game.tower.monsterHunterDamageMult = getUpgradeLevelValue(this.damageMult, level, 0.2);
    }
}

class LuckyTreeUpgrade extends BaseUpgrade {
    constructor() {
        super('luckyTree', typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('unique_luckyTree', 'Дерево Удачи') : 'Дерево Удачи', '🌳');
        this.goldAmount = getUniqueUpgradeConfig('luckyTree', 'goldAmount', [25, 30, 40]);
        this.spawnRate = getUniqueUpgradeConfig('luckyTree', 'spawnRate', [0.8, 0.7, 0.6]);
    }

    getShortDescription(level) {
        const gold = this.goldAmount[level - 1];
        if (typeof LocalizationManager !== 'undefined') {
            return LocalizationManager.t('unique_short_luckyTree', 'Грибы дают {0} золота', gold);
        }
        return `Грибы дают ${gold} золота`;
    }

    getDetailedDescription(level) {
        const gold = this.goldAmount[level - 1];
        if (typeof LocalizationManager !== 'undefined') {
            return LocalizationManager.t('unique_desc_luckyTree', 'Грибы теперь дают {0} золота вместо 10 и появляются чаще.', gold);
        }
        return `Грибы теперь дают ${gold} золота вместо 10 и появляются чаще.`;
    }
    
    apply(game, level) {
        game.mushroomGold = getUpgradeLevelValue(this.goldAmount, level, 25);
        game.mushroomSpawnRate = getUpgradeLevelValue(this.spawnRate, level, 0.8);
    }
}

class CrystalRainUpgrade extends BaseUpgrade {
    constructor() {
        super('crystalRain', typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('unique_crystalRain', 'Кристаллический Дождь') : 'Кристаллический Дождь', '💎');
        this.interval = getUniqueUpgradeConfig('crystalRain', 'interval', [30, 25, 20]);
        this.amount = getUniqueUpgradeConfig('crystalRain', 'amount', [1, 1, 2]);
    }

    getShortDescription(level) {
        const interval = this.interval[level - 1];
        if (typeof LocalizationManager !== 'undefined') {
            return LocalizationManager.t('unique_short_crystalRain', 'Каждые {0} сек падает кристалл', interval);
        }
        return `Каждые ${interval} сек падает кристалл`;
    }

    getDetailedDescription(level) {
        const interval = this.interval[level - 1];
        const amount = this.amount[level - 1];
        if (typeof LocalizationManager !== 'undefined') {
            return LocalizationManager.t('unique_desc_crystalRain', 'Каждые {0} секунд с неба падает {1} кристалл(ов). Кликни, чтобы собрать!', interval, amount);
        }
        return `Каждые ${interval} секунд с неба падает ${amount} кристалл(ов). Кликни, чтобы собрать!`;
    }
    
    apply(game, level) {
        game.crystalRain = {
            interval: getUpgradeLevelValue(this.interval, level, 30),
            amount: getUpgradeLevelValue(this.amount, level, 1),
            lastDrop: 0
        };
    }
}


if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        ChainLightningUpgrade,
        DoubleShotUpgrade,
        PoisonArrowsUpgrade,
        FrostAuraUpgrade,
        PiercingArrowUpgrade,
        SplittingArrowUpgrade,
        CritExplosionUpgrade,
        FireAuraUpgrade,
        LastStandUpgrade,
        KillStreakUpgrade,
        GoldFeverUpgrade,
        VampiricRageUpgrade,
        CrowdControlUpgrade,
        FreezingArrowsUpgrade,
        StatBoostUpgrade,
        HunterSightUpgrade,
        MonsterHunterUpgrade,
        LuckyTreeUpgrade,
        CrystalRainUpgrade
    };
}
