




const PurchasesManager = {
    
    
    PRODUCTS: {
        crystals_small: {
            id: 'crystals_small',
            consumable: true,
            nameKey: 'purchase_crystals_small_name',
            descKey: 'purchase_crystals_small_desc',
            name: 'Малый пакет кристаллов',
            description: '180 кристаллов',
            icon: '💎',
            storefrontGroup: 'crystals',
            rewards: {
                crystals: 180
            }
        },
        crystals_medium: {
            id: 'crystals_medium',
            consumable: true,
            nameKey: 'purchase_crystals_medium_name',
            descKey: 'purchase_crystals_medium_desc',
            name: 'Стандартный пакет кристаллов',
            description: '650 кристаллов',
            icon: '💎',
            storefrontGroup: 'crystals',
            rewards: {
                crystals: 650
            }
        },
        crystals_large: {
            id: 'crystals_large',
            consumable: true,
            nameKey: 'purchase_crystals_large_name',
            descKey: 'purchase_crystals_large_desc',
            name: 'Большой пакет кристаллов',
            description: '2900 кристаллов',
            icon: '💎💎',
            storefrontGroup: 'crystals',
            rewards: {
                crystals: 2900
            }
        },
        crystals_ultimate: {
            id: 'crystals_ultimate',
            consumable: true,
            nameKey: 'purchase_crystals_ultimate_name',
            descKey: 'purchase_crystals_ultimate_desc',
            name: 'Максимальный пакет кристаллов',
            description: '6500 кристаллов',
            icon: '💎💎',
            storefrontGroup: 'crystals',
            rewards: {
                crystals: 6500
            }
        },
        moonseals_1: {
            id: 'moonseals_1',
            consumable: true,
            nameKey: 'purchase_moonseals_1_name',
            descKey: 'purchase_moonseals_1_desc',
            name: 'Малый набор печатей',
            description: '80 Лунных печатей',
            icon: '🌙',
            storefrontGroup: 'moonseals',
            rewards: {
                moonseals: 80
            }
        },
        moonseals_2: {
            id: 'moonseals_2',
            consumable: true,
            nameKey: 'purchase_moonseals_2_name',
            descKey: 'purchase_moonseals_2_desc',
            name: 'Стандартный набор печатей',
            description: '220 Лунных печатей',
            icon: '🌙',
            storefrontGroup: 'moonseals',
            rewards: {
                moonseals: 220
            }
        },
        moonseals_3: {
            id: 'moonseals_3',
            consumable: true,
            nameKey: 'purchase_moonseals_3_name',
            descKey: 'purchase_moonseals_3_desc',
            name: 'Большой набор печатей',
            description: '500 Лунных печатей',
            icon: '🌙',
            storefrontGroup: 'moonseals',
            rewards: {
                moonseals: 500
            }
        },
        starter_moon_bundle: {
            id: 'starter_moon_bundle',
            consumable: true,
            nameKey: 'purchase_starter_moon_bundle_name',
            descKey: 'purchase_starter_moon_bundle_desc',
            name: 'Стартовый лунный набор',
            description: 'Премиальная рамка и фон профиля',
            icon: '🌙',
            storefrontGroup: 'bundles',
            rewards: {
                cosmetics: {
                    frames: ['frame_prem'],
                    backgrounds: ['bg_prem']
                }
            }
        }
    },

    
    catalogProducts: [],

    _sdkCatalogSourceProducts: null,
    _sdkPlayerPurchases: null,

    
    purchaseHistory: [],

    
    _lastPurchaseCanceled: false,

    
    _paymentsEventsBound: false,

    
    _startupRecoveryInProgress: false,
    _startupRecoveryDone: false,
    _startupRecoveryAttempts: 0,
    _startupRecoveryMaxAttempts: 8,
    _startupRecoveryTimer: null,
    _startupRecoveryEventsBound: false,

    _getGp() {
        return window.GP || window.__GP_SDK_INSTANCE || window.gp || null;
    },

    _getPayments() {
        const gp = this._getGp();
        return gp && gp.payments ? gp.payments : null;
    },

    _trackEvent(eventName, payload = {}) {
        console.log(`📈 Event: ${eventName}`, payload || {});
    },

    t(key, fallback, ...args) {
        if (typeof LocalizationManager !== 'undefined' && typeof LocalizationManager.t === 'function') {
            return LocalizationManager.t(key, fallback, ...args);
        }

        if (!args || args.length === 0) {
            return fallback;
        }

        return String(fallback).replace(/\{(\d+)\}/g, (m, idx) => {
            const index = Number(idx);
            return Number.isFinite(index) && index < args.length ? String(args[index]) : m;
        });
    },

    getLocalizedProductName(productId, fallbackName = '') {
        const baseProduct = this.PRODUCTS[productId] || null;
        if (baseProduct && baseProduct.nameKey) {
            return this.t(baseProduct.nameKey, baseProduct.name || fallbackName || productId);
        }
        return fallbackName || (baseProduct && baseProduct.name) || productId;
    },

    getLocalizedProductDescription(productId, fallbackDescription = '') {
        const baseProduct = this.PRODUCTS[productId] || null;
        if (baseProduct && baseProduct.descKey) {
            return this.t(baseProduct.descKey, baseProduct.description || fallbackDescription || '');
        }
        return fallbackDescription || (baseProduct && baseProduct.description) || '';
    },

    _normalizeSdkCatalogProduct(product) {
        if (!product || typeof product !== 'object') {
            return null;
        }

        const productIdRaw = product.tag || product.id;
        if (productIdRaw === undefined || productIdRaw === null || productIdRaw === '') {
            return null;
        }

        const productId = String(productIdRaw);
        const title = typeof product.name === 'string' && product.name.trim()
            ? product.name.trim()
            : (typeof product.title === 'string' && product.title.trim() ? product.title.trim() : '');
        const description = typeof product.description === 'string' ? product.description.trim() : '';
        const imageURI = String(product.imageURI || product.iconSmall || product.icon || '').trim();

        const rawPriceValue = product.priceValue !== undefined ? product.priceValue : product.price;
        const numericPriceValue = Number(rawPriceValue);
        const priceValue = Number.isFinite(numericPriceValue)
            ? String(numericPriceValue)
            : (rawPriceValue === undefined || rawPriceValue === null ? '' : String(rawPriceValue));

        const priceCurrencyCode = String(product.priceCurrencyCode || product.currency || '').trim();
        const currencySymbol = String(product.currencySymbol || '').trim();
        const currencyLabel = currencySymbol || priceCurrencyCode;

        let priceLabel = '';
        if (Number.isFinite(numericPriceValue)) {
            priceLabel = currencyLabel ? `${numericPriceValue} ${currencyLabel}` : String(numericPriceValue);
        } else if (typeof product.price === 'string' && product.price.trim()) {
            priceLabel = product.price.trim();
        }

        return {
            id: productId,
            gpId: product.id,
            tag: product.tag || productId,
            title,
            description,
            imageURI,
            price: priceLabel,
            priceValue,
            priceCurrencyCode,
            currencySymbol,
            getPriceCurrencyImage: typeof product.getPriceCurrencyImage === 'function'
                ? product.getPriceCurrencyImage.bind(product)
                : null
        };
    },

    _mapCatalogFromProducts(products) {
        if (!Array.isArray(products) || products.length === 0) {
            return [];
        }

        const mapped = [];
        const seenIds = new Set();

        products.forEach((product) => {
            const normalized = this._normalizeSdkCatalogProduct(product);
            if (!normalized || seenIds.has(normalized.id)) {
                return;
            }

            seenIds.add(normalized.id);
            mapped.push(normalized);
        });

        return mapped;
    },

    _extractPlayerPurchasesFromFetchResult(result) {
        if (!result || typeof result !== 'object') {
            return null;
        }

        if (Array.isArray(result.playerPurchases)) {
            return result.playerPurchases;
        }

        if (Array.isArray(result.purchases)) {
            return result.purchases;
        }

        return null;
    },

    _resolvePurchaseProductId(purchase) {
        if (!purchase || typeof purchase !== 'object') {
            return '';
        }

        const rawProductId = purchase.tag
            || purchase.productTag
            || purchase.productID
            || purchase.productId
            || (purchase.product && (purchase.product.tag || purchase.product.id));

        return rawProductId === undefined || rawProductId === null || rawProductId === ''
            ? ''
            : String(rawProductId);
    },

    _parsePurchaseTimestamp(value) {
        if (typeof value === 'number' && Number.isFinite(value)) {
            return value > 0 ? value : 0;
        }

        if (typeof value === 'string' && value.trim()) {
            const asNumber = Number(value);
            if (Number.isFinite(asNumber) && asNumber > 0) {
                return asNumber;
            }

            const parsed = Date.parse(value);
            return Number.isFinite(parsed) ? parsed : 0;
        }

        return 0;
    },

    _normalizePlayerPurchaseEntry(purchase) {
        if (!purchase || typeof purchase !== 'object') {
            return null;
        }

        const productId = this._resolvePurchaseProductId(purchase);
        if (!productId) {
            return null;
        }

        const productInfo = this.getProductInfo(productId) || this.PRODUCTS[productId] || null;
        const createdAt = this._parsePurchaseTimestamp(purchase.createdAt || purchase.time || purchase.timestamp || 0);

        return {
            productId,
            productName: this.getLocalizedProductName(
                productId,
                (productInfo && (productInfo.title || productInfo.name)) || productId
            ),
            priceLabel: productInfo && productInfo.price ? String(productInfo.price) : '—',
            purchaseToken: purchase.purchaseToken || purchase.id || productId,
            purchaseId: purchase.id || purchase.purchaseId || null,
            productTag: productId,
            createdAt,
            raw: purchase
        };
    },

    _getCachedSdkPurchases() {
        if (!Array.isArray(this._sdkPlayerPurchases) || this._sdkPlayerPurchases.length === 0) {
            const payments = this._getPayments();
            if (payments) {
                if (Array.isArray(payments.playerPurchases) && payments.playerPurchases.length > 0) {
                    this._sdkPlayerPurchases = payments.playerPurchases.slice();
                } else if (Array.isArray(payments.purchases) && payments.purchases.length > 0) {
                    this._sdkPlayerPurchases = payments.purchases.slice();
                }
            }
        }

        return Array.isArray(this._sdkPlayerPurchases) ? this._sdkPlayerPurchases : [];
    },

    getActivePurchases() {
        return this._getCachedSdkPurchases()
            .map((purchase) => this._normalizePlayerPurchaseEntry(purchase))
            .filter((purchase) => Boolean(purchase));
    },

    hasActivePurchase(productId) {
        if (!productId) {
            return false;
        }

        const normalizedId = String(productId);
        return this.getActivePurchases().some((purchase) => purchase.productId === normalizedId);
    },

    async _syncCatalogAndPurchasesFromPayments(forceFetch = false) {
        const payments = this._getPayments();
        if (!payments) {
            this._sdkCatalogSourceProducts = [];
            this._sdkPlayerPurchases = [];
            return { products: [], playerPurchases: [] };
        }

        let products = Array.isArray(payments.products) ? payments.products : [];
        let playerPurchases = Array.isArray(payments.playerPurchases)
            ? payments.playerPurchases
            : (Array.isArray(payments.purchases) ? payments.purchases : []);

        const shouldFetch = forceFetch
            || !Array.isArray(this._sdkCatalogSourceProducts)
            || !Array.isArray(this._sdkPlayerPurchases)
            || products.length === 0;

        if (shouldFetch && typeof payments.fetchProducts === 'function') {
            try {
                const result = await payments.fetchProducts();
                if (result && typeof result === 'object') {
                    const { products: resultProducts, playerPurchases: resultPlayerPurchasesRaw } = result;
                    const resultPlayerPurchases = Array.isArray(resultPlayerPurchasesRaw)
                        ? resultPlayerPurchasesRaw
                        : this._extractPlayerPurchasesFromFetchResult(result);

                    if (Array.isArray(resultProducts)) {
                        products = resultProducts;
                    }

                    if (resultPlayerPurchases) {
                        playerPurchases = resultPlayerPurchases;
                    }
                }
            } catch (error) {
                console.warn('⚠️ payments.fetchProducts() ошибка:', error);
            }
        }

        if (products.length === 0 && typeof payments.fetch === 'function') {
            try {
                await payments.fetch();
            } catch (error) {
                console.warn('⚠️ payments.fetch() ошибка:', error);
            }
        }

        if (products.length === 0 && Array.isArray(payments.products)) {
            products = payments.products;
        }

        if (playerPurchases.length === 0) {
            if (Array.isArray(payments.playerPurchases)) {
                playerPurchases = payments.playerPurchases;
            } else if (Array.isArray(payments.purchases)) {
                playerPurchases = payments.purchases;
            }
        }

        this._sdkCatalogSourceProducts = Array.isArray(products) ? products.slice() : [];
        this._sdkPlayerPurchases = Array.isArray(playerPurchases) ? playerPurchases.slice() : [];

        return {
            products: this._sdkCatalogSourceProducts,
            playerPurchases: this._sdkPlayerPurchases
        };
    },

    _parseCrystalBonus(bonusValue) {
        if (Number.isFinite(bonusValue)) {
            return Math.max(0, Math.floor(bonusValue));
        }

        if (typeof bonusValue === 'string') {
            const cleaned = bonusValue.replace(',', '.').replace(/[^\d.-]/g, '');
            const parsed = Number(cleaned);
            if (Number.isFinite(parsed)) {
                return Math.max(0, Math.floor(parsed));
            }
        }

        return 0;
    },

    getCrystalRewardAmount(product) {
        if (!product) {
            return 0;
        }

        const baseAmount = Math.max(0, Math.floor(Number(product.amount) || 0));
        const bonusAmount = this._parseCrystalBonus(product.bonus);
        return baseAmount + bonusAmount;
    },

    getConfiguredRewards(productId) {
        const product = this.PRODUCTS[productId] || null;
        if (!product || !product.rewards) {
            return null;
        }
        return product.rewards;
    },

    async _grantConfiguredCards(groups = []) {
        if (!Array.isArray(groups) || groups.length === 0) {
            return [];
        }

        const grantedCards = [];
        groups.forEach((group) => {
            const count = Math.max(0, Math.floor(Number(group.count) || 0));
            for (let i = 0; i < count; i++) {
                let card = null;
                if (group.rarity && typeof SaveManager.grantRandomCardByRarity === 'function') {
                    card = SaveManager.grantRandomCardByRarity(group.rarity);
                } else if (typeof SaveManager.grantRandomCard === 'function') {
                    card = SaveManager.grantRandomCard();
                }
                if (card) {
                    grantedCards.push(card);
                }
            }
        });
        return grantedCards;
    },

    async applyProductRewards(product) {
        const rewards = this.getConfiguredRewards(product.id);
        if (!rewards) {
            const fallbackAmount = Math.max(0, Math.floor(Number(product.amount) || 0));
            if (fallbackAmount > 0) {
                const rewardSynced = await this._applyCrystalsReward(fallbackAmount);
                return rewardSynced ? [{ type: 'crystals', amount: fallbackAmount }] : null;
            }
            return [];
        }

        const grantedRewards = [];

        if (rewards.crystals) {
            const safeCrystals = Math.max(0, Math.floor(Number(rewards.crystals) || 0));
            const rewardSynced = await this._applyCrystalsReward(safeCrystals);
            if (!rewardSynced) {
                return null;
            }
            grantedRewards.push({ type: 'crystals', amount: safeCrystals });
        }

        if (rewards.moonseals) {
            const safeMoonSeals = Math.max(0, Math.floor(Number(rewards.moonseals) || 0));
            const rewardSynced = await this._applyMoonSealsReward(safeMoonSeals);
            if (!rewardSynced) {
                return null;
            }
            grantedRewards.push({ type: 'moonseals', amount: safeMoonSeals });
        }

        if (rewards.cosmetics) {
            const grantedCosmetics = this._applyProfileCosmeticsReward(rewards.cosmetics);
            if (grantedCosmetics.length > 0) {
                grantedRewards.push({ type: 'cosmetics', items: grantedCosmetics });
            }
        }

        const guaranteedCards = await this._grantConfiguredCards(rewards.guaranteedCards || []);
        if (guaranteedCards.length > 0) {
            grantedRewards.push({ type: 'freeCard', amount: guaranteedCards.length, cards: guaranteedCards });
        }

        if (rewards.randomCards) {
            const randomCards = await this._grantConfiguredCards([{ count: rewards.randomCards }]);
            if (randomCards.length > 0) {
                grantedRewards.push({ type: 'freeCard', amount: randomCards.length, cards: randomCards });
            }
        }

        return grantedRewards;
    },

    _isConsumableProduct(productId) {
        const product = this.PRODUCTS[productId];
        if (!product || !Object.prototype.hasOwnProperty.call(product, 'consumable')) {
            return true;
        }
        return Boolean(product.consumable);
    },

    _bindPaymentsEvents() {
        if (this._paymentsEventsBound) {
            return;
        }

        const payments = this._getPayments();
        if (!payments || typeof payments.on !== 'function') {
            return;
        }

        payments.on('purchase', ({ product, purchase }) => {
            console.log('💳 payments:on(purchase)', {
                tag: product && product.tag ? product.tag : null,
                id: product && product.id ? product.id : null,
                purchaseId: purchase && purchase.id ? purchase.id : null
            });
        });

        payments.on('error:purchase', (error) => {
            console.warn('💳 payments:on(error:purchase)', error || null);
        });

        payments.on('consume', ({ product, purchase }) => {
            console.log('💳 payments:on(consume)', {
                tag: product && product.tag ? product.tag : null,
                id: product && product.id ? product.id : null,
                purchaseId: purchase && purchase.id ? purchase.id : null
            });
        });

        payments.on('error:consume', (error) => {
            console.warn('💳 payments:on(error:consume)', error || null);
        });

        payments.on('fetchProducts', (result) => {
            const products = result && Array.isArray(result.products) ? result.products.length : null;
            console.log('💳 payments:on(fetchProducts)', { products });
        });

        payments.on('error:fetchProducts', (error) => {
            console.warn('💳 payments:on(error:fetchProducts)', error || null);
        });

        payments.on('open', () => {
            console.log('💳 payments:on(open)');
        });

        payments.on('close', () => {
            console.log('💳 payments:on(close)');
        });

        this._paymentsEventsBound = true;
    },

    _bindStartupRecoveryEvents() {
        if (this._startupRecoveryEventsBound || typeof window === 'undefined' || !window.addEventListener) {
            return;
        }

        window.addEventListener('gp:preloader-finished', () => {
            this.ensureStartupPurchaseRecovery(true);
        });

        window.addEventListener('focus', () => {
            this.ensureStartupPurchaseRecovery(false);
        });

        this._startupRecoveryEventsBound = true;
    },

    ensureStartupPurchaseRecovery(force = false) {
        if (this._startupRecoveryDone && !force) {
            return;
        }

        if (this._startupRecoveryInProgress) {
            return;
        }

        if (this._startupRecoveryTimer) {
            clearTimeout(this._startupRecoveryTimer);
            this._startupRecoveryTimer = null;
        }

        const runAttempt = async () => {
            this._startupRecoveryInProgress = true;
            this._startupRecoveryAttempts += 1;

            try {
                const success = await this.checkAndProcessUnprocessedPurchases();
                if (success) {
                    this._startupRecoveryDone = true;
                    return;
                }
            } finally {
                this._startupRecoveryInProgress = false;
            }

            if (this._startupRecoveryAttempts >= this._startupRecoveryMaxAttempts) {
                console.warn('⚠️ Startup IAP recovery: попытки исчерпаны, продолжим при следующем фокусе/запуске');
                return;
            }

            const delay = Math.min(2000 + this._startupRecoveryAttempts * 600, 5000);
            this._startupRecoveryTimer = setTimeout(() => {
                this._startupRecoveryTimer = null;
                runAttempt();
            }, delay);
        };

        runAttempt();
    },

    async _applyCrystalsReward(amount) {
        const safeAmount = Math.max(0, Math.floor(Number(amount) || 0));
        if (safeAmount <= 0) {
            return true;
        }

        const gp = this._getGp();
        const gpPlayer = gp && gp.player ? gp.player : null;

        if (!gpPlayer) {
            SaveManager.addCrystals(safeAmount);
            return true;
        }

        try {
            if (typeof gpPlayer.add === 'function') {
                gpPlayer.add('crystals', safeAmount);
            } else if (typeof gpPlayer.get === 'function' && typeof gpPlayer.set === 'function') {
                const current = Number(gpPlayer.get('crystals'));
                const base = Number.isFinite(current) ? Math.max(0, Math.floor(current)) : SaveManager.getCrystals();
                gpPlayer.set('crystals', base + safeAmount);
            } else {
                SaveManager.addCrystals(safeAmount);
                return true;
            }

            if (typeof gpPlayer.sync === 'function') {
                await gpPlayer.sync({ storage: 'preferred' });
            }

            if (typeof gpPlayer.get === 'function') {
                const syncedCrystals = Number(gpPlayer.get('crystals'));
                if (Number.isFinite(syncedCrystals)) {
                    SaveManager.setCrystals(Math.max(0, Math.floor(syncedCrystals)));
                    return true;
                }
            }

            SaveManager.addCrystals(safeAmount);
            return true;
        } catch (error) {
            console.error('❌ Ошибка начисления кристаллов через gp.player:', error);
            return false;
        }
    },

    async _applyMoonSealsReward(amount) {
        const safeAmount = Math.max(0, Math.floor(Number(amount) || 0));
        if (safeAmount <= 0) {
            return true;
        }

        const gp = this._getGp();
        const gpPlayer = gp && gp.player ? gp.player : null;

        if (!gpPlayer) {
            SaveManager.addMoonSeals(safeAmount);
            return true;
        }

        try {
            if (typeof gpPlayer.add === 'function') {
                gpPlayer.add('moonseals', safeAmount);
            } else if (typeof gpPlayer.get === 'function' && typeof gpPlayer.set === 'function') {
                const current = Number(gpPlayer.get('moonseals'));
                const base = Number.isFinite(current) ? Math.max(0, Math.floor(current)) : SaveManager.getMoonSeals();
                gpPlayer.set('moonseals', base + safeAmount);
            } else {
                SaveManager.addMoonSeals(safeAmount);
                return true;
            }

            if (typeof gpPlayer.sync === 'function') {
                await gpPlayer.sync({ storage: 'preferred' });
            }

            if (typeof gpPlayer.get === 'function') {
                const syncedMoonSeals = Number(gpPlayer.get('moonseals'));
                if (Number.isFinite(syncedMoonSeals)) {
                    SaveManager.setMoonSeals(Math.max(0, Math.floor(syncedMoonSeals)));
                    return true;
                }
            }

            SaveManager.addMoonSeals(safeAmount);
            return true;
        } catch (error) {
            console.error('❌ Ошибка начисления лунных печатей через gp.player:', error);
            return false;
        }
    },

    _applyProfileCosmeticsReward(reward) {
        if (!reward || typeof SaveManager === 'undefined' || !SaveManager) {
            return [];
        }

        const granted = [];
        const frames = Array.isArray(reward.frames) ? reward.frames : [];
        const backgrounds = Array.isArray(reward.backgrounds) ? reward.backgrounds : [];

        frames.forEach((frameId) => {
            if (!frameId) return;
            SaveManager.unlockProfileCosmetic('frame', frameId);
            granted.push({ type: 'frame', id: String(frameId) });
        });

        backgrounds.forEach((backgroundId) => {
            if (!backgroundId) return;
            SaveManager.unlockProfileCosmetic('background', backgroundId);
            granted.push({ type: 'background', id: String(backgroundId) });
        });

        const firstFrame = granted.find((entry) => entry.type === 'frame');
        const firstBackground = granted.find((entry) => entry.type === 'background');
        if (firstFrame) {
            SaveManager.equipProfileCosmetic('frame', firstFrame.id);
        }
        if (firstBackground) {
            SaveManager.equipProfileCosmetic('background', firstBackground.id);
        }

        return granted;
    },

    async _syncSaveAfterReward(reason = 'iap_purchase') {
        if (window.AuthManager && AuthManager.forceSave) {
            return Boolean(await AuthManager.forceSave(true));
        }

        if (window.UI && typeof UI.requestCloudSave === 'function') {
            UI.requestCloudSave(reason, true);
            return true;
        }

        return true;
    },

    async _initPayments() {
        const gp = this._getGp();
        if (!gp) {
            return false;
        }

        const payments = this._getPayments();
        if (!payments) {
            return false;
        }

        if (gp.isAllowedOrigin === false) {
            return false;
        }

        if (payments.isAvailable === undefined) {
            for (let i = 0; i < 20; i++) {
                await new Promise((resolve) => setTimeout(resolve, 150));
                if (payments.isAvailable !== undefined) break;
            }
        }

        if (!payments.isAvailable) {
            return false;
        }

        await this._syncCatalogAndPurchasesFromPayments(false);

        this._bindPaymentsEvents();

        return true;
    },

    async _getCatalog() {
        const payments = this._getPayments();
        const productsSource = Array.isArray(this._sdkCatalogSourceProducts)
            ? this._sdkCatalogSourceProducts
            : (payments && Array.isArray(payments.products) ? payments.products : []);

        return this._mapCatalogFromProducts(productsSource);
    },

    async _purchase(productId) {
        const gp = this._getGp();
        const payments = this._getPayments();
        if (!gp || !payments) {
            return { success: false, error: 'PAYMENTS_NOT_INITIALIZED' };
        }

        if (gp.isAllowedOrigin === false) {
            return { success: false, error: 'NOT_ALLOWED_ORIGIN' };
        }

        if (payments.isAvailable === false) {
            return { success: false, error: 'PAYMENTS_NOT_AVAILABLE' };
        }

        try {
            if (typeof gp.gameplayStop === 'function') {
                gp.gameplayStop();
            }

            const numericId = Number(productId);
            const params = Number.isFinite(numericId) && String(numericId) === String(productId)
                ? { id: numericId }
                : { tag: productId };

            const result = await payments.purchase(params);

            if (!result) {
                return { success: false, error: 'EMPTY_RESULT' };
            }

            const purchaseId = result?.purchase?.id || null;
            const purchaseTag = result?.product?.tag || result?.purchase?.tag || productId;
            const productNumericId = result?.product?.id || null;
            return {
                success: true,
                purchase: {
                    productID: purchaseTag,
                    purchaseToken: purchaseId || purchaseTag,
                    purchaseId,
                    productGpId: productNumericId,
                    purchaseTag,
                    raw: result?.purchase || null
                },
                product: result?.product || null
            };
        } catch (error) {
            const rawMessage = error && error.message ? String(error.message) : '';
            const code = rawMessage.toLowerCase();

            if (code.includes('payment_rejected') || code.includes('payment_cancel')) {
                return { success: false, canceled: true, error: 'PAYMENT_REJECTED' };
            }
            return { success: false, error: error.message || 'PURCHASE_FAILED' };
        } finally {
            if (typeof gp.gameplayStart === 'function') {
                gp.gameplayStart();
            }
        }
    },

    async _consumePurchase(purchaseRef) {
        const payments = this._getPayments();
        if (!payments || typeof payments.consume !== 'function') {
            return false;
        }

        try {
            const idOrTag = purchaseRef && typeof purchaseRef === 'object'
                ? (purchaseRef.productGpId || purchaseRef.purchaseTag || purchaseRef.productID || purchaseRef.purchaseToken || '')
                : purchaseRef;

            const numericId = Number(idOrTag);
            const params = Number.isFinite(numericId) && String(numericId) === String(idOrTag)
                ? { id: numericId }
                : { tag: idOrTag };
            await payments.consume(params);
            return true;
        } catch (_) {
            return false;
        }
    },

    async _checkUnprocessedPurchases() {
        const payments = this._getPayments();
        if (!payments) {
            return [];
        }

        const syncResult = await this._syncCatalogAndPurchasesFromPayments(true);
        const purchasesSource = syncResult && Array.isArray(syncResult.playerPurchases)
            ? syncResult.playerPurchases
            : [];

        if (purchasesSource.length === 0) {
            return [];
        }

        return purchasesSource
            .filter((purchase) => {
                if (!purchase || typeof purchase !== 'object') {
                    return false;
                }

                const productId = this._resolvePurchaseProductId(purchase);
                if (!productId) {
                    return false;
                }

                if (!this._isConsumableProduct(productId)) {
                    return false;
                }

                const state = typeof purchase.state === 'string' ? purchase.state.toLowerCase() : '';
                return purchase.isConsumed !== true && purchase.consumed !== true && state !== 'consumed';
            })
            .map((purchase) => {
            const purchaseTag = this._resolvePurchaseProductId(purchase);
            const purchaseId = purchase.id || purchase.purchaseId || null;
            const purchaseToken = purchase.purchaseToken || purchaseId || purchaseTag;

            return {
                productID: purchaseTag,
                purchaseToken,
                purchaseId,
                productGpId: purchase.productId || (purchase.product && purchase.product.id) || null,
                purchaseTag,
                raw: purchase
            };
        })
            .filter((purchase) => Boolean(purchase.purchaseToken));
    },

    


    async init() {
         console.log('💳 Инициализация системы покупок');
         
         try {
             
             this.loadPurchaseHistory();
             console.log('✅ История покупок загружена');
             
             
              await this.loadCatalogFromSDK();
              console.log('✅ Каталог загружен');

              this._bindPaymentsEvents();
              this._bindStartupRecoveryEvents();
              
              
              this.ensureStartupPurchaseRecovery(true);
             
             
             this.setupShopUI();
             console.log('✅ UI магазина создан');
             
             console.log('💳 Инициализация системы покупок завершена');
         } catch (error) {
             console.error('❌ Ошибка инициализации системы покупок:', error);
         }
     },

    


    async loadCatalogFromSDK() {
        
        if (await this._initPayments()) {
            try {
                console.log('💳 Загрузка каталога из GamePush SDK...');
                await this._syncCatalogAndPurchasesFromPayments(true);
                const catalog = await this._getCatalog();
                
                if (catalog && catalog.length > 0) {
                    this.catalogProducts = catalog;
                    console.log('💳 Каталог загружен из SDK:', catalog.length, 'товаров');
                    console.log('💳 Валюта:', catalog[0].priceCurrencyCode || 'unknown');
                    return;
                }

                console.warn('⚠️ Каталог SDK пуст');
            } catch (error) {
                console.warn('⚠️ Не удалось загрузить каталог из SDK:', error.message);
            }
        }

        this.catalogProducts = [];
        const gp = this._getGp();
        const payments = this._getPayments();
        
        const diagnostics = {
            gpReady: Boolean(gp),
            isAllowedOrigin: gp ? gp.isAllowedOrigin : false,
            paymentsExists: Boolean(payments),
            paymentsAvailable: payments ? Boolean(payments.isAvailable) : false,
            productsCount: Array.isArray(this._sdkCatalogSourceProducts)
                ? this._sdkCatalogSourceProducts.length
                : (payments && Array.isArray(payments.products) ? payments.products.length : 0),
            playerPurchasesCount: Array.isArray(this._sdkPlayerPurchases)
                ? this._sdkPlayerPurchases.length
                : (payments && Array.isArray(payments.purchases) ? payments.purchases.length : 0)
        };
        
        
        if (!gp || !payments) {
            console.warn('⚠️ Payments diagnostics (SDK не загружен):', diagnostics);
        } else if (!gp.isAllowedOrigin) {
            console.log('ℹ️ Payments diagnostics (локальная разработка, payments недоступны):', diagnostics);
        } else {
            console.log('📊 Payments diagnostics:', diagnostics);
        }
    },

    


    loadPurchaseHistory() {
        const history = SaveManager.get('td_purchase_history', []);
        this.purchaseHistory = history;
        console.log(`📝 Загружено ${history.length} покупок из истории`);
    },

    


    savePurchaseHistory() {
        SaveManager.set('td_purchase_history', this.purchaseHistory);
    },

    


    async purchaseProduct(productId) {
        this._lastPurchaseCanceled = false;

        const baseProduct = this.PRODUCTS[productId];
        if (!baseProduct) {
            console.error('❌ Товар не найден:', productId);
            return false;
        }

        
        const catalogProduct = this.getProductInfo(productId) || {};
        const sdkTitle = typeof catalogProduct.title === 'string' ? catalogProduct.title.trim() : '';
        const localizedTitle = this.getLocalizedProductName(productId, sdkTitle);
        const localizedDescription = this.getLocalizedProductDescription(productId, catalogProduct.description || '');

        const product = {
            ...baseProduct,
            ...catalogProduct,
            id: productId,
            name: localizedTitle || productId,
            description: localizedDescription,
            amount: Number.isFinite(baseProduct.amount) ? baseProduct.amount : (catalogProduct.amount || 0),
            price: catalogProduct.price || baseProduct.price || ''
        };

        console.log(`💳 Попытка покупки: ${product.name}`);

        try {
            
            const result = await this.processPurchase(product);
            
            if (result) {
                return true;
            } else {
                
                if (this._lastPurchaseCanceled) {
                    return false;
                }

                
                this.handlePurchaseError(product);
                return false;
            }
        } catch (error) {
            console.error('Ошибка при попытке покупки:', error);
            this.handlePurchaseError(product);
            return false;
        }
    },

    


    async showPurchaseDialog(product) {
        
        
        return true;
    },

    


    async processPurchase(product) {
        
        if (!this._getGp()) {
            console.error('❌ GamePush gp instance не загружен');
            return false;
        }

        if (!(await this._initPayments())) {
            console.error('❌ Payments не инициализированы');
            return false;
        }

        
        if (this._getGp() && this._getGp().isAllowedOrigin === false) {
            console.error('❌ Покупки недоступны: домен не в whitelist');
            AdsManager.showNotification(this.t('purchaseOnlyOfficialDomain', 'Purchases are available only on the official game domain'), 'error');
            return false;
        }

        
        if (this._getPayments() && !this._getPayments().isAvailable) {
            console.error('❌ Покупки недоступны на текущей платформе');
            AdsManager.showNotification(this.t('purchaseUnavailablePlatform', 'Purchases are unavailable on the current platform'), 'error');
            return false;
        }

        try {
            console.log('💳 Отправка запроса на покупку через GamePush SDK...');
            
            this._trackEvent('purchase_start', { productId: product.id });

            const result = await this._purchase(product.id);
            
            if (result.success) {
                console.log('✅ Покупка подтверждена SDK');

                const rewardApplied = await this.handlePurchaseSuccess(product, {
                    skipUiFeedback: false,
                    skipCloudSync: true
                });

                if (!rewardApplied) {
                    console.error('❌ Покупка есть, но награда не синхронизирована. Consume пропущен.');
                    AdsManager.showNotification(this.t('purchaseSyncIncomplete', 'Purchase confirmed. Reward sync is not completed, please try later.'), 'error');
                    return false;
                }

                const saveSynced = await this._syncSaveAfterReward('iap_purchase');
                if (!saveSynced) {
                    console.error('❌ Покупка есть, но облачный save не синхронизирован. Consume пропущен.');
                    AdsManager.showNotification(this.t('purchaseSaveSyncIncomplete', 'Purchase confirmed. Reward save is not completed, please try later.'), 'error');
                    return false;
                }

                if (this._isConsumableProduct(product.id) && result.purchase) {
                    const consumed = await this._consumePurchase(result.purchase);
                    if (!consumed) {
                        console.warn('⚠️ Не удалось consume покупку, будет повторно обработана при следующем запуске');
                    }
                }
                
                return true;
            } else {
                console.error('❌ Ошибка покупки:', result.error);

                if (result.canceled || result.error === 'PAYMENT_REJECTED' || result.error === 'payment_rejected') {
                    this._lastPurchaseCanceled = true;
                    AdsManager.showNotification(this.t('purchaseCanceled', 'Purchase canceled'), 'info');
                    return false;
                }
                
                
                if (result.error === 'NOT_ALLOWED_ORIGIN') {
                    AdsManager.showNotification(this.t('purchaseOnlyOfficialDomainShort', 'Purchases are available only on the official domain'), 'error');
                } else if (result.error === 'PAYMENTS_NOT_AVAILABLE') {
                    AdsManager.showNotification(this.t('purchaseUnavailablePlatform', 'Purchases are unavailable on the current platform'), 'error');
                } else {
                    AdsManager.showNotification(this.t('purchaseTryLater', 'Purchase error. Please try again later.'), 'error');
                }
                
                return false;
            }
        } catch (error) {
            console.error('❌ Исключение при покупке:', error);
            AdsManager.showNotification(this.t('purchaseTryLater', 'Purchase error. Please try again later.'), 'error');
            return false;
        }
    },

    


    async handlePurchaseSuccess(product, options = {}) {
        const skipUiFeedback = Boolean(options.skipUiFeedback);
        const skipCloudSync = Boolean(options.skipCloudSync);
        const rewards = this.getConfiguredRewards(product.id);

        console.log(`✅ Покупка успешна: ${product.name}`);
        this._trackEvent('purchase_success', {
            productId: product.id,
            rewards: rewards || null
        });

        const grantedRewards = await this.applyProductRewards(product);
        if (grantedRewards === null) {
            return false;
        }

        
        this.purchaseHistory.push({
            productId: product.id,
            timestamp: Date.now(),
            price: product.price
        });
        this.savePurchaseHistory();

        if (window.AchievementsManager && AchievementsManager._isInitialized) {
            if (this.purchaseHistory.length === 1) {
                
                AchievementsManager.unlock(AchievementsManager.ACHIEVEMENTS.FIRST_PURCHASE);
            } else if (this.purchaseHistory.length >= 10) {
                
                AchievementsManager.unlock(AchievementsManager.ACHIEVEMENTS.GENEROUS_PATRON);
            }
        }

        if (!skipCloudSync) {
            await this._syncSaveAfterReward('iap_purchase');
        }

        
        if (!skipUiFeedback) {
            const rewardText = this.formatPurchaseRewardsSummary(grantedRewards);
            AdsManager.showNotification(
                rewardText
                    ? this.t('purchaseAcquiredDetailed', 'Получено: {0}', rewardText)
                    : this.t('purchaseAcquired', 'Purchased: {0}', product.name),
                'reward'
            );
        }

        
        if (window.UI) {
            UI.updateMainMenu();
            if (typeof UI.updateCrystalStoreScreen === 'function') {
                UI.updateCrystalStoreScreen();
            }
        }

        return true;
    },

    formatPurchaseRewardsSummary(grantedRewards) {
        if (!Array.isArray(grantedRewards) || grantedRewards.length === 0) {
            return '';
        }

        return grantedRewards.map((entry) => {
            if (!entry) return '';
            if (entry.type === 'crystals') {
                return this.t('purchaseRewardCrystals', '{0} кристаллов', entry.amount || 0);
            }
            if (entry.type === 'moonseals') {
                return this.t('purchaseRewardMoonSeals', '{0} Лунных печатей', entry.amount || 0);
            }
            if (entry.type === 'cosmetics') {
                return this.t('purchaseRewardPremiumCosmetics', 'премиальная рамка и фон', 0);
            }
            if (entry.type === 'freeCard') {
                if (entry.cards && entry.cards.length > 0) {
                    const rareCount = entry.cards.filter((card) => card && card.rarity === 'rare').length;
                    const commonCount = entry.cards.filter((card) => card && card.rarity === 'common').length;
                    const epicCount = entry.cards.filter((card) => card && card.rarity === 'epic').length;
                    const parts = [];
                    if (rareCount > 0) parts.push(this.t('purchaseRewardRareCards', '{0} редк. карт', rareCount));
                    if (commonCount > 0) parts.push(this.t('purchaseRewardCommonCards', '{0} обычн. карт', commonCount));
                    if (epicCount > 0) parts.push(this.t('purchaseRewardEpicCards', '{0} эпич. карт', epicCount));
                    return parts.join(', ');
                }
                return this.t('purchaseRewardCards', '{0} карт', entry.amount || 0);
            }
            return '';
        }).filter(Boolean).join(', ');
    },

    


    handlePurchaseError(product) {
        console.error(`❌ Ошибка покупки: ${product.name}`);
        this._trackEvent('purchase_error', { productId: product.id });
        AdsManager.showNotification(this.t('purchaseTryLater', 'Purchase error. Please try again later.'), 'error');
    },

    


    addPremiumCards(count) {
        
        
        
        const epicRarityCards = ['strength', 'destruction', 'swiftness', 'longRange', 'multishot'];

        for (let i = 0; i < count; i++) {
            const cardName = epicRarityCards[Math.floor(Math.random() * epicRarityCards.length)];
            const card = {
                instanceId: 'premium_' + Date.now() + '_' + i,
                name: cardName,
                rarity: 'epic',
                stars: 0,
                acquiredAt: Date.now()
            };
            SaveManager.addCard(card);
        }

        console.log(`🎴 Добавлено ${count} премиум карточек`);
    },

    


    activateBooster(duration) {
        SaveManager.set('td_booster_active', true);
        SaveManager.set('td_booster_expiry', Date.now() + (duration * 60 * 1000)); 
        console.log(`⚡ Бустер активирован на ${duration} минут`);
    },

    


    activateSeasonPass() {
        SaveManager.set('td_season_pass_active', true);
        SaveManager.set('td_season_pass_expiry', Date.now() + (30 * 24 * 60 * 60 * 1000)); 
        console.log('👑 Сезонный пасс активирован на 30 дней');
    },

    


    checkActiveBonuses() {
        const now = Date.now();
        
        
        const boosterExpiry = SaveManager.get('td_booster_expiry', 0);
        if (boosterExpiry < now) {
            SaveManager.set('td_booster_active', false);
        }

        
        const passExpiry = SaveManager.get('td_season_pass_expiry', 0);
        if (passExpiry < now) {
            SaveManager.set('td_season_pass_active', false);
        }

        return {
            boosterActive: SaveManager.get('td_booster_active', false),
            passActive: SaveManager.get('td_season_pass_active', false)
        };
    },

    


    getIncomeMultiplier() {
        const bonuses = this.checkActiveBonuses();
        let multiplier = 1.0;

        if (bonuses.boosterActive) {
            multiplier *= 1.5; 
        }

        if (bonuses.passActive) {
            multiplier *= 1.25; 
        }

        return multiplier;
    },

    


    setupShopUI() {
        
        console.log('📦 Система покупок готова');
    },

    


    getProducts() {
        
        if (this.catalogProducts.length > 0) {
            const result = {};
            this.catalogProducts.forEach(product => {
                result[product.id] = product;
            });
            return result;
        }

        
        return this.PRODUCTS;
    },

    


    getProductInfo(productId) {
        
        const catalogItem = this.catalogProducts.find(p => p.id === productId);
        if (catalogItem) {
            return catalogItem;
        }

        
        return this.PRODUCTS[productId] || null;
    },

    


    getPurchaseStats() {
        const totalSpent = this.purchaseHistory.reduce((sum, purchase) => {
            const priceValue = Number(purchase && purchase.price);
            return sum + (Number.isFinite(priceValue) ? priceValue : 0);
        }, 0);
        
        return {
            totalPurchases: this.purchaseHistory.length,
            totalSpent: totalSpent,
            avgPurchasePrice: this.purchaseHistory.length > 0 ? (totalSpent / this.purchaseHistory.length) : 0,
            lastPurchaseTime: this.purchaseHistory.length > 0
                ? new Date(this.purchaseHistory[this.purchaseHistory.length - 1].timestamp).toLocaleString()
                : this.t('none', 'None')
        };
    },

    




    async getMyPurchasesData(limit = 25) {
        const safeLimit = Math.max(1, Math.floor(Number(limit) || 25));
        let pending = [];
        let active = [];
        if (await this._initPayments()) {
            try {
                await this._syncCatalogAndPurchasesFromPayments(true);

                const unprocessed = await this._checkUnprocessedPurchases();
                pending = unprocessed.slice(0, safeLimit).map((purchase) => {
                    const productId = purchase && purchase.productID ? purchase.productID : 'unknown';
                    const productInfo = this.getProductInfo(productId) || this.PRODUCTS[productId] || null;

                    return {
                        productId,
                        productName: this.getLocalizedProductName(
                            productId,
                            (productInfo && (productInfo.title || productInfo.name)) || productId
                        ),
                        purchaseToken: purchase && purchase.purchaseToken ? purchase.purchaseToken : '',
                        createdAt: purchase && purchase.raw
                            ? this._parsePurchaseTimestamp(purchase.raw.createdAt || purchase.raw.time || purchase.raw.timestamp || 0)
                            : 0
                    };
                });

                const pendingIds = new Set(pending.map((entry) => entry.productId));
                active = this.getActivePurchases()
                    .filter((purchase) => !pendingIds.has(purchase.productId) && !this._isConsumableProduct(purchase.productId))
                    .sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0))
                    .slice(0, safeLimit)
                    .map((purchase) => ({
                        productId: purchase.productId,
                        productName: purchase.productName,
                        priceLabel: purchase.priceLabel,
                        timestamp: purchase.createdAt
                    }));
            } catch (error) {
                console.warn('⚠️ Не удалось получить список pending-покупок:', error);
            }
        }

        return { active, pending };
    },

    



    async checkAndProcessUnprocessedPurchases() {
        if (!(await this._initPayments())) {
            return false;
        }

        try {
            await this._syncCatalogAndPurchasesFromPayments(true);

            const unprocessedPurchases = await this._checkUnprocessedPurchases();
            
            if (unprocessedPurchases.length > 0) {
                console.log(`🔄 Обнаружено ${unprocessedPurchases.length} необработанных покупок`);
                await this.processUnprocessedPurchases(unprocessedPurchases);
            }
            return true;
        } catch (error) {
            console.error('❌ Ошибка проверки необработанных покупок:', error);
            return false;
        }
    },

    




    async processUnprocessedPurchases(purchases) {
        console.log('🔄 Обработка необработанных покупок:', purchases);

        let shouldSyncSave = false;

        for (const purchase of purchases) {
            try {
                const productId = purchase.productID;
                const product = this.PRODUCTS[productId];

                if (!product) {
                    console.warn(`⚠️ Неизвестный продукт: ${productId}, пропускаем`);
                    
                    await this._consumePurchase(purchase);
                    continue;
                }

                console.log(`✅ Восстановление покупки: ${product.name}`);
                
                
                let restored = true;
                if (this._isConsumableProduct(productId)) {
                    restored = await this.handlePurchaseSuccess(product, {
                        skipUiFeedback: true,
                        skipCloudSync: true
                    });
                }

                if (!restored) {
                    console.warn(`⚠️ Не удалось применить награду для ${productId}, consume пропущен`);
                    continue;
                }
                
                
                if (this._isConsumableProduct(productId)) {
                    await this._consumePurchase(purchase);
                    shouldSyncSave = shouldSyncSave || restored;
                }
                
                console.log(`✅ Покупка ${productId} успешно обработана`);
            } catch (error) {
                console.error(`❌ Ошибка обработки покупки ${purchase.productID}:`, error);
            }
        }

        if (shouldSyncSave) {
            await this._syncSaveAfterReward('restore_unprocessed_purchase');
        }

        console.log('✅ Все необработанные покупки обработаны');
    }
};


window.PurchasesManager = PurchasesManager;


window.addEventListener('load', () => {
    if (typeof SaveManager !== 'undefined') {
        PurchasesManager.init().catch(error => {
            console.error('Ошибка инициализации PurchasesManager:', error);
        });
    } else {
        console.warn('⚠️ SaveManager не загружен, инициализация PurchasesManager отложена');
        setTimeout(() => {
            if (typeof SaveManager !== 'undefined') {
                PurchasesManager.init().catch(error => {
                    console.error('Ошибка инициализации PurchasesManager:', error);
                });
            }
        }, 100);
    }
});
