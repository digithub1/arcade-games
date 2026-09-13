





const AVAILABLE_CARDS = [
    
    {
        id: 'card_goldenStart',
        name: 'Золотой Старт',
        nameKey: 'card_goldenStart',
        description: '+{0} золота в начале, +{1} золота/день',
        descKey: 'cardDesc_goldenStart',
        icon: '💰',
        rarity: 'common',
        cost: 50,
        effectType: 'startGold',
        tags: ['economy'],
        synergyGroup: 'economy'
    },
    {
        id: 'card_vitality',
        name: 'Живучесть',
        nameKey: 'card_vitality',
        description: '+{0} HP, +{1} реген/сек',
        descKey: 'cardDesc_vitality',
        icon: '❤️',
        rarity: 'common',
        cost: 50,
        effectType: 'health',
        tags: ['survival'],
        synergyGroup: 'survival'
    },
    {
        id: 'card_farmerFortune',
        name: 'Собирательская Удача',
        nameKey: 'card_farmerFortune',
        description: '+{0} золота из находок, +{1} золота за гриб',
        descKey: 'cardDesc_farmerFortune',
        icon: '🌱',
        rarity: 'common',
        cost: 50,
        effectType: 'farming',
        tags: ['economy'],
        synergyGroup: 'economy'
    },
    
    
    {
        id: 'card_crystalMine',
        name: 'Кристальная Шахта',
        nameKey: 'card_crystalMine',
        description: '+{0} кристалла каждые 4 дня',
        descKey: 'cardDesc_crystalMine',
        icon: '💎',
        rarity: 'rare',
        cost: 80,
        effectType: 'dailyCrystals',
        tags: ['economy', 'risk'],
        synergyGroup: 'economy'
    },
    {
        id: 'card_wisdom',
        name: 'Мудрость',
        nameKey: 'card_wisdom',
        description: '{0}% шанс тройного опыта от врага',
        descKey: 'cardDesc_wisdom',
        icon: '⭐',
        rarity: 'rare',
        cost: 80,
        effectType: 'xpBonus',
        tags: ['tempo'],
        synergyGroup: 'tempo'
    },
    {
        id: 'card_bloodGreed',
        name: 'Кровавая Жадность',
        nameKey: 'card_bloodGreed',
        description: '+{0} золота за каждый крит',
        descKey: 'cardDesc_bloodGreed',
        icon: '💥',
        rarity: 'rare',
        cost: 80,
        effectType: 'critGold',
        tags: ['risk', 'economy'],
        synergyGroup: 'risk'
    },
    
    
    {
        id: 'card_berserk',
        name: 'Берсерк',
        nameKey: 'card_berserk',
        description: 'Клик на скил = {0} сек ×2 скорости, откат 60 сек',
        descKey: 'cardDesc_berserk',
        icon: '🔥',
        rarity: 'epic',
        cost: 150,
        effectType: 'activeAbility',
        tags: ['tempo', 'risk'],
        synergyGroup: 'tempo'
    },
    {
        id: 'card_darkPact',
        name: 'Тёмный Пакт',
        nameKey: 'card_darkPact',
        description: '+{0} 💎 каждые 7 дней, враги сильней на +2 лвл',
        descKey: 'cardDesc_darkPact',
        icon: '👹',
        rarity: 'epic',
        cost: 150,
        effectType: 'riskReward',
        tags: ['risk', 'boss'],
        synergyGroup: 'risk'
    },
    {
        id: 'card_overclockCore',
        name: 'Сердце Разгона',
        nameKey: 'card_overclockCore',
        description: '+{0}% скорости атаки, +{1} радиуса',
        descKey: 'cardDesc_overclockCore',
        icon: '⚙️',
        rarity: 'rare',
        cost: 90,
        effectType: 'tempoBoost',
        tags: ['tempo'],
        synergyGroup: 'tempo'
    },
    {
        id: 'card_wardenSigil',
        name: 'Печать Стража',
        nameKey: 'card_wardenSigil',
        description: '+{0}% HP, +{1} реген/сек',
        descKey: 'cardDesc_wardenSigil',
        icon: '🛡️',
        rarity: 'rare',
        cost: 90,
        effectType: 'survivalBoost',
        tags: ['survival', 'control'],
        synergyGroup: 'survival'
    },
    {
        id: 'card_moonBeacon',
        name: 'Лунный Маяк',
        nameKey: 'card_moonBeacon',
        description: 'Враги на {0}% медленнее, +{1}% награда за боссов',
        descKey: 'cardDesc_moonBeacon',
        icon: '🌙',
        rarity: 'epic',
        cost: 140,
        effectType: 'controlField',
        tags: ['control', 'boss'],
        synergyGroup: 'control'
    },
    {
        id: 'card_bountySeal',
        name: 'Печать Охоты',
        nameKey: 'card_bountySeal',
        description: '+{0}% золота за волну, +{1}% награды за боссов',
        descKey: 'cardDesc_bountySeal',
        icon: '🎯',
        rarity: 'epic',
        cost: 140,
        effectType: 'bountyBoost',
        tags: ['boss', 'economy'],
        synergyGroup: 'boss'
    },
    {
        id: 'card_merchantMap',
        name: 'Карта Караванов',
        nameKey: 'card_merchantMap',
        description: '+{0}% золота за волну, +{1}% кристаллов за волну',
        descKey: 'cardDesc_merchantMap',
        icon: '🗺️',
        rarity: 'rare',
        cost: 95,
        effectType: 'merchantMap',
        tags: ['economy'],
        synergyGroup: 'economy'
    },
    {
        id: 'card_sanctuaryLantern',
        name: 'Фонарь Святилища',
        nameKey: 'card_sanctuaryLantern',
        description: '+{0}% HP, враги на {1}% медленнее',
        descKey: 'cardDesc_sanctuaryLantern',
        icon: '🏮',
        rarity: 'rare',
        cost: 95,
        effectType: 'sanctuaryLantern',
        tags: ['survival', 'control'],
        synergyGroup: 'survival'
    },
    {
        id: 'card_emberSigil',
        name: 'Печать Жара',
        nameKey: 'card_emberSigil',
        description: '+{0}% урона, +{1}% скорости атаки',
        descKey: 'cardDesc_emberSigil',
        icon: '🔥',
        rarity: 'rare',
        cost: 100,
        effectType: 'emberSigil',
        tags: ['tempo'],
        synergyGroup: 'tempo'
    },
    {
        id: 'card_frostCircuit',
        name: 'Ледяной Контур',
        nameKey: 'card_frostCircuit',
        description: 'Враги на {0}% медленнее, +{1} радиуса',
        descKey: 'cardDesc_frostCircuit',
        icon: '❄️',
        rarity: 'rare',
        cost: 100,
        effectType: 'frostCircuit',
        tags: ['control'],
        synergyGroup: 'control'
    },
    {
        id: 'card_debtBloom',
        name: 'Цветущий Долг',
        nameKey: 'card_debtBloom',
        description: '+{0}% золота за волну, -{1}% HP',
        descKey: 'cardDesc_debtBloom',
        icon: '🥀',
        rarity: 'epic',
        cost: 135,
        effectType: 'debtBloom',
        tags: ['risk', 'economy'],
        synergyGroup: 'risk'
    },
    {
        id: 'card_grimAtlas',
        name: 'Мрачный Атлас',
        nameKey: 'card_grimAtlas',
        description: '+{0}% награды за боссов, враги получают +{1}% HP',
        descKey: 'cardDesc_grimAtlas',
        icon: '📚',
        rarity: 'epic',
        cost: 140,
        effectType: 'grimAtlas',
        tags: ['boss', 'risk'],
        synergyGroup: 'boss'
    },
    {
        id: 'card_crystalLedger',
        name: 'Кристальный Реестр',
        nameKey: 'card_crystalLedger',
        description: '+{0}% кристаллов за волну, +{1}% золота за волну',
        descKey: 'cardDesc_crystalLedger',
        icon: '📘',
        rarity: 'rare',
        cost: 95,
        effectType: 'crystalLedger',
        tags: ['economy', 'boss'],
        synergyGroup: 'economy'
    },
    {
        id: 'card_bastionSpikes',
        name: 'Шипы Бастиона',
        nameKey: 'card_bastionSpikes',
        description: '+{0}% HP, +{1}% защиты',
        descKey: 'cardDesc_bastionSpikes',
        icon: '🧱',
        rarity: 'rare',
        cost: 95,
        effectType: 'bastionSpikes',
        tags: ['survival'],
        synergyGroup: 'survival'
    },
    {
        id: 'card_arcaneReservoir',
        name: 'Чародейский Резервуар',
        nameKey: 'card_arcaneReservoir',
        description: '+{0} регена/сек, +{1}% скорости атаки',
        descKey: 'cardDesc_arcaneReservoir',
        icon: '🔮',
        rarity: 'rare',
        cost: 100,
        effectType: 'arcaneReservoir',
        tags: ['tempo', 'survival'],
        synergyGroup: 'tempo'
    },
    {
        id: 'card_executionTally',
        name: 'Счет Палача',
        nameKey: 'card_executionTally',
        description: '+{0}% урона, +{1}% награды за боссов',
        descKey: 'cardDesc_executionTally',
        icon: '🪓',
        rarity: 'epic',
        cost: 145,
        effectType: 'executionTally',
        tags: ['boss', 'tempo'],
        synergyGroup: 'boss'
    }
];


const RARITY_CHANCES = {
    epic: 0.10,    
    rare: 0.30,    
    common: 0.60   
};




function getLocalizedCardName(card) {
    if (card.nameKey && typeof LocalizationManager !== 'undefined') {
        return LocalizationManager.t(card.nameKey, card.name);
    }
    return card.name;
}




function getCardEffectValues(cardOrId, explicitStars) {
    const cardId = typeof cardOrId === 'string' ? cardOrId : (cardOrId && cardOrId.id);
    const rawStars = explicitStars !== undefined ? explicitStars : (cardOrId && cardOrId.stars);
    const parsedStars = Number(rawStars);
    const stars = Number.isFinite(parsedStars) ? Math.max(0, Math.min(5, Math.floor(parsedStars))) : 0;

    switch (cardId) {
        case 'card_goldenStart': {
            const startGold = 24 + stars * 8;
            const dailyGold = 3 + stars;
            return {
                stars,
                startGold,
                dailyGold,
                descriptionValues: [startGold, dailyGold]
            };
        }
        case 'card_vitality': {
            const towerMaxHealthFlat = 25 + stars * 10;
            const towerBaseHealthRegenFlat = 0.10 + stars * 0.05;
            return {
                stars,
                towerMaxHealthFlat,
                towerBaseHealthRegenFlat,
                descriptionValues: [towerMaxHealthFlat, towerBaseHealthRegenFlat.toFixed(2)]
            };
        }
        case 'card_farmerFortune': {
            const harvestGoldFlat = 10 + stars * 4;
            const mushroomGoldFlat = 6 + stars * 2;
            return {
                stars,
                harvestGoldFlat,
                mushroomGoldFlat,
                descriptionValues: [harvestGoldFlat, mushroomGoldFlat]
            };
        }
        case 'card_crystalMine': {
            const dailyCrystals = 2 + stars;
            return {
                stars,
                dailyCrystals,
                descriptionValues: [dailyCrystals]
            };
        }
        case 'card_wisdom': {
            const tripleXpChance = 0.12 + stars * 0.04;
            return {
                stars,
                tripleXpChance,
                descriptionValues: [Math.floor(tripleXpChance * 100)]
            };
        }
        case 'card_bloodGreed': {
            const critGoldFlat = 4 + stars * 2;
            return {
                stars,
                critGoldFlat,
                descriptionValues: [critGoldFlat]
            };
        }
        case 'card_berserk': {
            const berserkDurationMs = 6000 + stars * 2000;
            return {
                stars,
                berserkDurationMs,
                descriptionValues: [Math.floor(berserkDurationMs / 1000)]
            };
        }
        case 'card_darkPact': {
            const darkPactCrystals = 5 + stars * 2;
            return {
                stars,
                darkPactCrystals,
                virtualWaveBonus: 2,
                descriptionValues: [darkPactCrystals]
            };
        }
        case 'card_overclockCore': {
            const towerAttackSpeedMult = 0.06 + stars * 0.02;
            const towerRangeFlat = 8 + stars * 3;
            return {
                stars,
                towerAttackSpeedMult,
                towerRangeFlat,
                descriptionValues: [Math.round(towerAttackSpeedMult * 100), towerRangeFlat]
            };
        }
        case 'card_wardenSigil': {
            const towerMaxHealthMult = 0.1 + stars * 0.025;
            const towerHealthRegenFlat = 0.08 + stars * 0.03;
            return {
                stars,
                towerMaxHealthMult,
                towerHealthRegenFlat,
                descriptionValues: [(towerMaxHealthMult * 100).toFixed(1), towerHealthRegenFlat.toFixed(2)]
            };
        }
        case 'card_moonBeacon': {
            const enemySpeedMult = Math.max(0.8, 0.96 - stars * 0.01);
            const bossRewardMult = 1.08 + stars * 0.02;
            return {
                stars,
                enemySpeedMult,
                bossRewardMult,
                descriptionValues: [Math.round((1 - enemySpeedMult) * 100), Math.round((bossRewardMult - 1) * 100)]
            };
        }
        case 'card_bountySeal': {
            const waveGoldMult = 1.08 + stars * 0.02;
            const bossRewardMult = 1.1 + stars * 0.02;
            return {
                stars,
                waveGoldMult,
                bossRewardMult,
                descriptionValues: [Math.round((waveGoldMult - 1) * 100), Math.round((bossRewardMult - 1) * 100)]
            };
        }
        case 'card_merchantMap': {
            const waveGoldMult = 1.06 + stars * 0.02;
            const waveCrystalMult = 1.04 + stars * 0.02;
            return {
                stars,
                waveGoldMult,
                waveCrystalMult,
                descriptionValues: [Math.round((waveGoldMult - 1) * 100), Math.round((waveCrystalMult - 1) * 100)]
            };
        }
        case 'card_sanctuaryLantern': {
            const towerMaxHealthMult = 0.08 + stars * 0.03;
            const enemySpeedMult = Math.max(0.82, 0.97 - stars * 0.01);
            return {
                stars,
                towerMaxHealthMult,
                enemySpeedMult,
                descriptionValues: [Math.round(towerMaxHealthMult * 100), Math.round((1 - enemySpeedMult) * 100)]
            };
        }
        case 'card_emberSigil': {
            const towerDamageMult = 0.06 + stars * 0.02;
            const towerAttackSpeedMult = 0.07 + stars * 0.02;
            return {
                stars,
                towerDamageMult,
                towerAttackSpeedMult,
                descriptionValues: [Math.round(towerDamageMult * 100), Math.round(towerAttackSpeedMult * 100)]
            };
        }
        case 'card_frostCircuit': {
            const enemySpeedMult = Math.max(0.8, 0.95 - stars * 0.01);
            const towerRangeFlat = 10 + stars * 3;
            return {
                stars,
                enemySpeedMult,
                towerRangeFlat,
                descriptionValues: [Math.round((1 - enemySpeedMult) * 100), towerRangeFlat]
            };
        }
        case 'card_debtBloom': {
            const waveGoldMult = 1.14 + stars * 0.03;
            const towerMaxHealthMult = -(0.06 + stars * 0.01);
            return {
                stars,
                waveGoldMult,
                towerMaxHealthMult,
                descriptionValues: [Math.round((waveGoldMult - 1) * 100), Math.round(Math.abs(towerMaxHealthMult) * 100)]
            };
        }
        case 'card_grimAtlas': {
            const bossRewardMult = 1.14 + stars * 0.03;
            const enemyHealthMult = 1.08 + stars * 0.02;
            return {
                stars,
                bossRewardMult,
                enemyHealthMult,
                descriptionValues: [Math.round((bossRewardMult - 1) * 100), Math.round((enemyHealthMult - 1) * 100)]
            };
        }
        case 'card_crystalLedger': {
            const waveCrystalMult = 1.1 + stars * 0.03;
            const waveGoldMult = 1.04 + stars * 0.02;
            return {
                stars,
                waveCrystalMult,
                waveGoldMult,
                descriptionValues: [Math.round((waveCrystalMult - 1) * 100), Math.round((waveGoldMult - 1) * 100)]
            };
        }
        case 'card_bastionSpikes': {
            const towerMaxHealthMult = 0.1 + stars * 0.03;
            const towerDefenseFlat = 0.04 + stars * 0.01;
            return {
                stars,
                towerMaxHealthMult,
                towerDefenseFlat,
                descriptionValues: [Math.round(towerMaxHealthMult * 100), Math.round(towerDefenseFlat * 100)]
            };
        }
        case 'card_arcaneReservoir': {
            const towerHealthRegenFlat = 0.12 + stars * 0.04;
            const towerAttackSpeedMult = 0.05 + stars * 0.02;
            return {
                stars,
                towerHealthRegenFlat,
                towerAttackSpeedMult,
                descriptionValues: [towerHealthRegenFlat.toFixed(2), Math.round(towerAttackSpeedMult * 100)]
            };
        }
        case 'card_executionTally': {
            const towerDamageMult = 0.08 + stars * 0.02;
            const bossRewardMult = 1.1 + stars * 0.03;
            return {
                stars,
                towerDamageMult,
                bossRewardMult,
                descriptionValues: [Math.round(towerDamageMult * 100), Math.round((bossRewardMult - 1) * 100)]
            };
        }
        default:
            return {
                stars,
                descriptionValues: []
            };
    }
}

function formatCardDescriptionValue(value) {
    if (typeof value === 'string') {
        return value;
    }

    const numeric = Number(value);
    if (!Number.isFinite(numeric)) {
        return String(value);
    }

    if (Math.abs(numeric - Math.round(numeric)) < 0.001) {
        return String(Math.round(numeric));
    }

    return numeric.toFixed(2).replace(/0+$/u, '').replace(/\.$/u, '');
}




function getLocalizedCardDescription(card) {
    let desc = card.description;
    const effectValues = getCardEffectValues(card);
    
    if (card.descKey && typeof LocalizationManager !== 'undefined') {
        desc = LocalizationManager.t(card.descKey, card.description);
    }
    if (Array.isArray(effectValues.descriptionValues)) {
        effectValues.descriptionValues.forEach((value, index) => {
            desc = desc.replace(`{${index}}`, formatCardDescriptionValue(value));
        });
    }
    
    return desc;
}




function getRandomCard() {
    const roll = Math.random();
    let targetRarity;
    
    if (roll < RARITY_CHANCES.epic) {
        targetRarity = 'epic';
    } else if (roll < RARITY_CHANCES.epic + RARITY_CHANCES.rare) {
        targetRarity = 'rare';
    } else {
        targetRarity = 'common';
    }
    
    const cardsOfRarity = AVAILABLE_CARDS.filter(c => c.rarity === targetRarity);
    return cardsOfRarity[Math.floor(Math.random() * cardsOfRarity.length)];
}




function buyRandomCard() {
    const cost = 55; 
    
    if (SaveManager.getCrystals() < cost) {
        const errorMsg = LocalizationManager.t('errorNotEnoughCrystals', 'Недостаточно кристаллов');
        return { success: false, error: errorMsg };
    }
    
    if (!SaveManager.spendCrystals(cost)) {
        const errorMsg = LocalizationManager.t('errorNotEnoughCrystals', 'Недостаточно кристаллов');
        return { success: false, error: errorMsg };
    }
    
     const card = getRandomCard();
     const cardInstance = {
         ...card,
         instanceId: Date.now() + Math.random().toString(36).substr(2, 9),
         stars: 0  
     };
     
     SaveManager.addCard(cardInstance);
    
    return { success: true, card: cardInstance };
}

function grantRandomCard() {
    const card = getRandomCard();
    const cardInstance = {
        ...card,
        instanceId: Date.now() + Math.random().toString(36).substr(2, 9),
        stars: 0,
        acquiredAt: Date.now(),
        grantedBySeason: true
    };

    SaveManager.addCard(cardInstance);
    return cardInstance;
}

function grantRandomCardByRarity(rarity) {
    const normalizedRarity = String(rarity || '').toLowerCase();
    const cardsOfRarity = AVAILABLE_CARDS.filter((card) => card.rarity === normalizedRarity);
    if (cardsOfRarity.length === 0) {
        return grantRandomCard();
    }

    const card = cardsOfRarity[Math.floor(Math.random() * cardsOfRarity.length)];
    const cardInstance = {
        ...card,
        instanceId: Date.now() + Math.random().toString(36).substr(2, 9),
        stars: 0,
        acquiredAt: Date.now(),
        grantedByPurchase: true,
        grantedRarity: normalizedRarity
    };

    SaveManager.addCard(cardInstance);
    return cardInstance;
}




function moveCardToAltar(cardInstanceId) {
    const cards = SaveManager.getCards();
    const altarCards = SaveManager.getAltarCards();
    
    if (altarCards.length >= 5) {
        return { success: false, error: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('errorAltarFull', 'Altar is full (max 5 cards)') : 'Altar is full (max 5 cards)' };
    }
    
    const cardIndex = cards.findIndex(c => c.instanceId === cardInstanceId);
    if (cardIndex === -1) {
        return { success: false, error: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('errorCardNotFound', 'Card not found') : 'Card not found' };
    }
    
    const card = cards[cardIndex];
    cards.splice(cardIndex, 1);
    altarCards.push(card);
    
    SaveManager.set(SaveManager.KEYS.CARDS, cards);
    SaveManager.setAltarCards(altarCards);
    
    return { success: true };
}




function removeCardFromAltar(cardInstanceId) {
    const cards = SaveManager.getCards();
    const altarCards = SaveManager.getAltarCards();
    
    const cardIndex = altarCards.findIndex(c => c.instanceId === cardInstanceId);
    if (cardIndex === -1) {
        return { success: false, error: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('errorCardNotInAltar', 'Card not found in altar') : 'Card not found in altar' };
    }
    
    const card = altarCards[cardIndex];
    altarCards.splice(cardIndex, 1);
    cards.push(card);
    
    SaveManager.set(SaveManager.KEYS.CARDS, cards);
    SaveManager.setAltarCards(altarCards);
    
    return { success: true };
}


if (!SaveManager.KEYS.CARDS) {
    SaveManager.KEYS.CARDS = 'td_cards';
}
if (!SaveManager.KEYS.ALTAR_CARDS) {
    SaveManager.KEYS.ALTAR_CARDS = 'td_altar_cards';
}

if (typeof SaveManager.getCards !== 'function') {
    SaveManager.getCards = function() {
        return this.get(this.KEYS.CARDS, []);
    };
}

if (typeof SaveManager.addCard !== 'function') {
    SaveManager.addCard = function(card) {
        const cards = this.getCards();
        cards.push(card);
        this.set(this.KEYS.CARDS, cards);
    };
}

if (typeof SaveManager.removeCard !== 'function') {
    SaveManager.removeCard = function(instanceId) {
        const cards = this.getCards();
        const index = cards.findIndex(c => c.instanceId === instanceId);
        if (index > -1) {
            cards.splice(index, 1);
            this.set(this.KEYS.CARDS, cards);
            return true;
        }
        return false;
    };
}

if (typeof SaveManager.getAltarCards !== 'function') {
    SaveManager.getAltarCards = function() {
        return this.get(this.KEYS.ALTAR_CARDS, []);
    };
}

if (typeof SaveManager.setAltarCards !== 'function') {
    SaveManager.setAltarCards = function(cards) {
        this.set(this.KEYS.ALTAR_CARDS, cards);
    };
}

SaveManager.moveCardToAltar = function(instanceId) {
    const cards = this.getCards();
    const altarCards = this.getAltarCards();
    
    if (altarCards.length >= 5) {
        return { success: false, error: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('errorAltarFull', 'Altar is full (max 5 cards)') : 'Altar is full (max 5 cards)' };
    }
    
    const cardIndex = cards.findIndex(c => c.instanceId === instanceId);
    if (cardIndex === -1) {
        return { success: false, error: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('errorCardNotFound', 'Card not found') : 'Card not found' };
    }
    
    const card = cards[cardIndex];
    cards.splice(cardIndex, 1);
    altarCards.push(card);
    
    this.set(this.KEYS.CARDS, cards);
    this.setAltarCards(altarCards);
    
    return { success: true };
};

SaveManager.moveCardFromAltar = function(instanceId) {
    const cards = this.getCards();
    const altarCards = this.getAltarCards();
    
    const cardIndex = altarCards.findIndex(c => c.instanceId === instanceId);
    if (cardIndex === -1) {
        return { success: false, error: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('errorCardNotInAltar', 'Card not found in altar') : 'Card not found in altar' };
    }
    
    const card = altarCards[cardIndex];
    altarCards.splice(cardIndex, 1);
    cards.push(card);
    
    this.set(this.KEYS.CARDS, cards);
    this.setAltarCards(altarCards);
    
    return { success: true };
};

SaveManager.buyRandomCard = function() {
    const cost = 55;
    
    if (this.getCrystals() < cost) {
        const errorMsg = LocalizationManager.t('errorNotEnoughCrystals', 'Недостаточно кристаллов');
        return { success: false, error: errorMsg };
    }
    
    if (!this.spendCrystals(cost)) {
        const errorMsg = LocalizationManager.t('errorNotEnoughCrystals', 'Недостаточно кристаллов');
        return { success: false, error: errorMsg };
    }
    
    const card = getRandomCard();
    const cardInstance = {
        ...card,
        instanceId: Date.now() + Math.random().toString(36).substr(2, 9),
        stars: 0,
        acquiredAt: Date.now()
    };
    
    this.addCard(cardInstance);
    
    return { success: true, card: cardInstance };
};

SaveManager.grantRandomCard = function() {
    return grantRandomCard();
};

SaveManager.grantRandomCardByRarity = function(rarity) {
    return grantRandomCardByRarity(rarity);
};




SaveManager.getCardById = function(instanceId) {
    const cards = this.getCards();
    return cards.find(c => c.instanceId === instanceId);
};







SaveManager.calculateForgeChance = function(targetCard, sacrificeCards) {
    let chance = 0;
    
    sacrificeCards.forEach(sacrifice => {
        if (sacrifice.id === targetCard.id) {
            chance += 25; 
        } else {
            chance += 10; 
        }
    });
    
    return Math.min(chance, 100);
};







SaveManager.upgradeCardInForge = function(targetInstanceId, sacrificeInstanceIds) {
    try {
        
        if (!targetInstanceId || !sacrificeInstanceIds || sacrificeInstanceIds.length === 0 || sacrificeInstanceIds.length > 4) {
            return { success: false, error: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('errorForgeArgs', 'Requires 1 target card and 1–4 sacrifices') : 'Requires 1 target card and 1–4 sacrifices' };
        }
        
        const cards = this.getCards();
        
        
        const targetCardIndex = cards.findIndex(c => c.instanceId === targetInstanceId);
        if (targetCardIndex === -1) {
            return { success: false, error: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('errorForgeTargetNotFound', 'Target card not found') : 'Target card not found' };
        }
        
        const targetCard = cards[targetCardIndex];
        
        
        const altarCards = this.getAltarCards();
        if (altarCards.find(c => c.instanceId === targetInstanceId)) {
            return { success: false, error: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('errorForgeTargetInAltar', 'Target card is in the altar') : 'Target card is in the altar' };
        }
        
        
        const sacrificeCards = [];
        const sacrificeIndices = [];
        
        for (const sacrificeId of sacrificeInstanceIds) {
            const idx = cards.findIndex(c => c.instanceId === sacrificeId);
            if (idx === -1) {
                return { success: false, error: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('errorForgeSacrificeNotFound', 'Sacrifice card {0} not found').replace('{0}', sacrificeId) : `Sacrifice card ${sacrificeId} not found` };
            }
            
            
            if (altarCards.find(c => c.instanceId === sacrificeId)) {
                return { success: false, error: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('errorForgeSacrificeInAltar', 'One of the sacrifice cards is in the altar') : 'One of the sacrifice cards is in the altar' };
            }
            
            sacrificeCards.push(cards[idx]);
            sacrificeIndices.push(idx);
        }
        
        
        const currentStars = targetCard.stars || 0;
        if (currentStars >= 5) {
            return { success: false, error: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('errorCardMaxStars', 'Card is already at max level (5 stars)') : 'Card is already at max level (5 stars)' };
        }
        
        
        const successChance = this.calculateForgeChance(targetCard, sacrificeCards);
        const roll = Math.random() * 100;
        
        console.log(`🔨 Кузница: шанс ${successChance}%, бросок ${roll.toFixed(1)}`);
        
        
        sacrificeIndices.sort((a, b) => b - a).forEach(idx => {
            cards.splice(idx, 1);
        });
        
        
        if (roll <= successChance) {
            
            targetCard.stars = currentStars + 1;
            
            this.set(this.KEYS.CARDS, cards);
            
            return { 
                success: true, 
                upgradedCard: targetCard,
                newStars: targetCard.stars,
                chance: successChance
            };
        } else {
            
            this.set(this.KEYS.CARDS, cards);
            
            return {
                success: false,
                failed: true,
                targetCard: targetCard,
                chance: successChance,
                error: LocalizationManager.t('forgeFailed', '❌ Улучшение не удалось! Жертвенные карты потеряны.')
            };
        }
        
    } catch (err) {
        console.error('❌ Ошибка при улучшении карты:', err);
        return { success: false, error: err.message };
    }
};




function getCardBonusWithStars(card) {
    return getLocalizedCardDescription(card);
}




function getStarsDisplay(stars) {
    stars = Math.min(stars || 0, 5);
    let display = '';
    for (let i = 0; i < 5; i++) {
        display += i < stars ? '⭐' : '☆';
    }
    return display;
}
