const ProfileCosmetics = {
    DEFAULT_FRAME_ID: 'frame_default',
    DEFAULT_BACKGROUND_ID: 'bg_default',

    FRAMES: [
        {
            id: 'frame_default',
            type: 'frame',
            cost: 0,
            rarity: 'common',
            icon: '⬡',
            nameKey: 'profileCosmetic_frame_default_name',
            name: 'Обсидиановая рамка',
            descKey: 'profileCosmetic_frame_default_desc',
            description: 'Стартовая рамка профиля'
        },
        {
            id: 'frame_crystal',
            type: 'frame',
            cost: 180,
            rarity: 'rare',
            icon: '💎',
            nameKey: 'profileCosmetic_frame_crystal_name',
            name: 'Кристальная рамка',
            descKey: 'profileCosmetic_frame_crystal_desc',
            description: 'Холодное свечение для топовых защитников'
        },
        {
            id: 'frame_ember',
            type: 'frame',
            cost: 260,
            rarity: 'epic',
            icon: '🔥',
            nameKey: 'profileCosmetic_frame_ember_name',
            name: 'Угольная рамка',
            descKey: 'profileCosmetic_frame_ember_desc',
            description: 'Тлеющий металл и жар под осадой'
        },
        {
            id: 'frame_moon',
            type: 'frame',
            cost: 320,
            rarity: 'epic',
            icon: '🌙',
            nameKey: 'profileCosmetic_frame_moon_name',
            name: 'Лунная рамка',
            descKey: 'profileCosmetic_frame_moon_desc',
            description: 'Тихий серебряный ореол вокруг аватара'
        },
        {
            id: 'frame_void',
            type: 'frame',
            cost: 420,
            rarity: 'legendary',
            icon: '🜂',
            nameKey: 'profileCosmetic_frame_void_name',
            name: 'Рамка бездны',
            descKey: 'profileCosmetic_frame_void_desc',
            description: 'Редкая рамка для тех, кто дошел дальше всех'
        },
        {
            id: 'frame_prem',
            type: 'frame',
            cost: 0,
            rarity: 'legendary',
            icon: '🌙',
            nameKey: 'profileCosmetic_frame_prem_name',
            name: 'Премиальная рамка',
            descKey: 'profileCosmetic_frame_prem_desc',
            description: 'Эксклюзивная рамка из стартового лунного набора',
            bundleOnly: true,
            bundleId: 'starter_moon_bundle'
        }
    ],

    BACKGROUNDS: [
        {
            id: 'bg_default',
            type: 'background',
            cost: 0,
            rarity: 'common',
            icon: '🌌',
            nameKey: 'profileCosmetic_bg_default_name',
            name: 'Туманный мрак',
            descKey: 'profileCosmetic_bg_default_desc',
            description: 'Стартовый фон с холодным свечением'
        },
        {
            id: 'bg_moon',
            type: 'background',
            cost: 200,
            rarity: 'rare',
            icon: '🌙',
            nameKey: 'profileCosmetic_bg_moon_name',
            name: 'Лунный зал',
            descKey: 'profileCosmetic_bg_moon_desc',
            description: 'Тонкий серебряный свет и ночная дымка'
        },
        {
            id: 'bg_frost',
            type: 'background',
            cost: 280,
            rarity: 'epic',
            icon: '❄️',
            nameKey: 'profileCosmetic_bg_frost_name',
            name: 'Ледяной бастион',
            descKey: 'profileCosmetic_bg_frost_desc',
            description: 'Хрустальный холод для спокойного, но опасного профиля'
        },
        {
            id: 'bg_ember',
            type: 'background',
            cost: 340,
            rarity: 'epic',
            icon: '🔥',
            nameKey: 'profileCosmetic_bg_ember_name',
            name: 'Тлеющий трон',
            descKey: 'profileCosmetic_bg_ember_desc',
            description: 'Жаркая плашка для агрессивной эстетики'
        },
        {
            id: 'bg_eclipse',
            type: 'background',
            cost: 460,
            rarity: 'legendary',
            icon: '🜃',
            nameKey: 'profileCosmetic_bg_eclipse_name',
            name: 'Затмение',
            descKey: 'profileCosmetic_bg_eclipse_desc',
            description: 'Редкий фон с глубоким небесным свечением'
        },
        {
            id: 'bg_prem',
            type: 'background',
            cost: 0,
            rarity: 'legendary',
            icon: '🌙',
            nameKey: 'profileCosmetic_bg_prem_name',
            name: 'Премиальный фон',
            descKey: 'profileCosmetic_bg_prem_desc',
            description: 'Эксклюзивный фон из стартового лунного набора',
            bundleOnly: true,
            bundleId: 'starter_moon_bundle'
        }
    ],

    getCatalog(type) {
        return type === 'background' ? this.BACKGROUNDS : this.FRAMES;
    },

    getItem(type, itemId) {
        return this.getCatalog(type).find((entry) => entry.id === itemId) || null;
    },

    getFrameById(frameId) {
        return this.getItem('frame', this.sanitizeFrameId(frameId));
    },

    getBackgroundById(backgroundId) {
        return this.getItem('background', this.sanitizeBackgroundId(backgroundId));
    },

    sanitizeFrameId(frameId) {
        const normalized = typeof frameId === 'string' ? frameId : this.DEFAULT_FRAME_ID;
        return this.getItem('frame', normalized) ? normalized : this.DEFAULT_FRAME_ID;
    },

    sanitizeBackgroundId(backgroundId) {
        const normalized = typeof backgroundId === 'string' ? backgroundId : this.DEFAULT_BACKGROUND_ID;
        return this.getItem('background', normalized) ? normalized : this.DEFAULT_BACKGROUND_ID;
    }
};

window.ProfileCosmetics = ProfileCosmetics;
