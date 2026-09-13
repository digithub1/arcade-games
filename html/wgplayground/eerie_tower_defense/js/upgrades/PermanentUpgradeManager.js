




class PermanentUpgradeManager {
    constructor() {
        
        this.levels = this.loadLevels();
        this._uiInitialized = false;
        this._eventsBound = false;
    }

    


    loadLevels() {
        const saved = SaveManager.get('td_permanent_upgrades', {});
        const levels = {};

        
        for (const key of Object.keys(UpgradeDefinitions.PERMANENT)) {
            levels[key] = saved[key] || 0;
        }

        return levels;
    }

    


    saveLevels() {
        SaveManager.set('td_permanent_upgrades', this.levels);
    }

    


    getLevel(upgradeId) {
        return this.levels[upgradeId] || 0;
    }

    


    getCost(upgradeId) {
        const currentLevel = this.getLevel(upgradeId);
        return UpgradeDefinitions.getPermanentCost(upgradeId, currentLevel);
    }

    


    buy(upgradeId) {
        const cost = this.getCost(upgradeId);
        const crystals = SaveManager.getCrystals();

        if (crystals < cost) {
            return { 
                success: false, 
                error: 'errorNotEnoughCrystals',
                needed: cost,
                have: crystals
            };
        }

        const upgrade = UpgradeDefinitions.PERMANENT[upgradeId];
        if (!upgrade) {
            return { success: false, error: 'errorUpgradeNotFound' };
        }

        if (this.levels[upgradeId] >= upgrade.maxLevel) {
            return { success: false, error: 'errorMaxLevel' };
        }

        
        const gameUpgradeId = this.getGameUpgradeId(upgradeId);
        if (gameUpgradeId) {
            const sharedMax = UpgradeDefinitions.getSharedMaxLevel(gameUpgradeId);
            if (this.levels[upgradeId] >= sharedMax) {
                return { success: false, error: 'errorSharedMaxLevel' };
            }
        }

        
        SaveManager.spendCrystals(cost);
        
        
        this.levels[upgradeId]++;
        
        
        this.saveLevels();
        
        
        if (upgradeId === 'permUnlockGarden') {
            SaveManager.unlockNextGarden();
        }

        return {
            success: true,
            cost: cost,
            newLevel: this.levels[upgradeId],
            remainingCrystals: SaveManager.getCrystals()
        };
    }

    




    getGameUpgradeId(permId) {
        const mapping = {
            permDamage: 'damage',
            permAttackSpeed: 'attackSpeed',
            permRange: 'range',
            permMultishotChance: 'multishotChance',
            permCritChance: 'critChance',
            permCritMultiplier: 'critMultiplier',
            permMaxHealth: 'maxHealth',
            permHealthRegen: 'healthRegen',
            permDefense: 'defense',
            permVampirismChance: 'vampirismChance',
            permVampirismAmount: 'vampirismAmount',
            permThornsDamage: 'thornsDamage',
            permKillGoldBonus: 'killGoldBonus',
            permWeeklyGoldBonus: 'weeklyGoldBonus',
            permWeeklyCrystalBonus: 'weeklyCrystalBonus',
            permGameSpeed: 'gameSpeed',
            permTraderChance: 'traderChance'
        };
        return mapping[permId] || null;
    }

    
    
    

    


    getTotalEffects() {
        const getIncrement = (permId, fallback) => {
            if (
                typeof UpgradeDefinitions !== 'undefined' &&
                UpgradeDefinitions.PERMANENT &&
                UpgradeDefinitions.PERMANENT[permId] &&
                typeof UpgradeDefinitions.PERMANENT[permId].baseIncrement === 'number'
            ) {
                return UpgradeDefinitions.PERMANENT[permId].baseIncrement;
            }
            return fallback;
        };

        
        const effects = {
            
            damageBonus: this.getLevel('permDamage') * getIncrement('permDamage', 1.0),
            attackSpeedBonus: this.getLevel('permAttackSpeed') * getIncrement('permAttackSpeed', 0.04),
            rangeBonus: this.getLevel('permRange') * getIncrement('permRange', 5),
            multishotChanceBonus: this.getLevel('permMultishotChance') * getIncrement('permMultishotChance', 0.5),
            critChanceBonus: this.getLevel('permCritChance') * getIncrement('permCritChance', 0.5),
            critMultiplierBonus: this.getLevel('permCritMultiplier') * getIncrement('permCritMultiplier', 0.10),
            
            
            healthBonus: this.getLevel('permMaxHealth') * getIncrement('permMaxHealth', 3),
            regenBonus: this.getLevel('permHealthRegen') * getIncrement('permHealthRegen', 0.10),
            defenseBonus: this.getLevel('permDefense') * getIncrement('permDefense', 0.5),
            vampirismChanceBonus: this.getLevel('permVampirismChance') * getIncrement('permVampirismChance', 0.25),
            vampirismAmountBonus: this.getLevel('permVampirismAmount') * getIncrement('permVampirismAmount', 0.25),
            thornsBonus: this.getLevel('permThornsDamage') * getIncrement('permThornsDamage', 1.5),
            
            
            weeklyGoldBonus: this.getLevel('permWeeklyGoldBonus') * getIncrement('permWeeklyGoldBonus', 1),
            killGoldBonus: this.getLevel('permKillGoldBonus') * getIncrement('permKillGoldBonus', 1),
            weeklyCrystalBonus: this.getLevel('permWeeklyCrystalBonus') * getIncrement('permWeeklyCrystalBonus', 0.5),
            gameSpeedBonus: this.getLevel('permGameSpeed') * getIncrement('permGameSpeed', 0.25),
            traderChanceBonus: this.getLevel('permTraderChance') * getIncrement('permTraderChance', 0.15)
        };

        return effects;
    }

    


    getStats() {
        let totalSpent = 0;
        let totalLevels = 0;

        for (const key of Object.keys(UpgradeDefinitions.PERMANENT)) {
            const level = this.getLevel(key);
            totalLevels += level;
            
            
            for (let i = 0; i < level; i++) {
                totalSpent += UpgradeDefinitions.getPermanentCost(key, i);
            }
        }

        return {
            totalSpent,
            totalLevels,
            averageLevel: totalLevels / Object.keys(UpgradeDefinitions.PERMANENT).length
        };
    }

    


    initUI() {
        console.log('>>> PermanentUpgradeManager.initUI() called');
        if (!this._uiInitialized) {
            this.createPermanentUpgradesUI();
            this._uiInitialized = true;
        }

        if (!this._eventsBound) {
            this.bindEvents();
        }

        this.updateUI();
        console.log('>>> PermanentUpgradeManager.initUI() finished');
    }

    


    createPermanentUpgradesUI() {
        const container = document.getElementById('upgradeScreen');
        if (!container) return;

        
        let upgradesContainer = document.getElementById('permanentUpgradesContainer');
        
        if (!upgradesContainer) {
            console.log('>>> Creating new permanentUpgradesContainer');
            upgradesContainer = document.createElement('div');
            upgradesContainer.id = 'permanentUpgradesContainer';
            upgradesContainer.className = 'permanent-upgrades-container';
            
            
            const header = container.querySelector('.upgrade-header');
            if (header && header.nextSibling) {
                container.insertBefore(upgradesContainer, header.nextSibling);
            } else {
                container.appendChild(upgradesContainer);
            }
        } else {
            console.log('>>> Using existing permanentUpgradesContainer');
        }

        
        const existingGrid = document.getElementById('permanentUpgradesGrid');
        if (!existingGrid) {
            console.log('>>> Setting innerHTML for upgradesContainer');
            upgradesContainer.innerHTML = `
            <div class="permanent-upgrades-title">
                <span class="crystal-icon">💎</span>
                <span data-i18n="permUpgradesTitle">Постоянные Улучшения</span>
                <span class="crystal-count" id="menuCrystalCountUpgrade">0</span>
            </div>
            <div class="permanent-upgrades-tabs">
                <button class="perm-tab active" data-category="attack" data-i18n="attack">⚔️ Атака</button>
                <button class="perm-tab" data-category="defense" data-i18n="defense">🛡️ Защита</button>
                <button class="perm-tab" data-category="utility" data-i18n="utility">⚡ Утилиты</button>
            </div>
            <div class="permanent-upgrades-grid" id="permanentUpgradesGrid">
                <!-- Улучшения будут здесь -->
            </div>
        `;
        } else {
            console.log('>>> Grid already exists, not overwriting');
        }
    }

    


    bindEvents() {
        if (this._eventsBound) {
            return;
        }

        
        document.querySelectorAll('.perm-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                const category = e.target.dataset.category;
                this.switchCategory(category);
            });
        });

        
        const grid = document.getElementById('permanentUpgradesGrid');
        if (grid) {
            grid.addEventListener('click', (e) => {
                const btn = e.target.closest('.perm-upgrade-btn');
                if (btn) {
                    const upgradeId = btn.dataset.upgrade;
                    this.handleBuyClick(upgradeId);
                }
            });
        }

        this._eventsBound = true;
    }

    


    switchCategory(category) {
        document.querySelectorAll('.perm-tab').forEach(tab => {
            tab.classList.toggle('active', tab.dataset.category === category);
        });

        this.renderUpgrades(category);
    }

    


    handleBuyClick(upgradeId) {
        const result = this.buy(upgradeId);
        
        if (result.success) {
            
            if (typeof AudioManager !== 'undefined') {
                AudioManager.playSound('upgrade');
            }

            if (typeof UI !== 'undefined' && UI.requestCloudSave) {
                UI.requestCloudSave('permanent_upgrade_purchase');
            }
            
            
            this.showUpgradeEffect(upgradeId);
            
            
            if (typeof inGameUpgrades !== 'undefined') {
                inGameUpgrades.updateUI();
            }
        } else {
            
            if (typeof AudioManager !== 'undefined') {
                AudioManager.playSound('error');
            }
            
            
            this.showNotification(result.error, 'error');
        }

        this.updateUI();
        
        
        if (typeof UI !== 'undefined') {
            UI.updateMainMenu();
        }
    }

    


    renderUpgrades(category) {
        console.log('>>> renderUpgrades called for category:', category);
        const grid = document.getElementById('permanentUpgradesGrid');
        console.log('>>> Grid element:', grid);
        if (!grid) {
            console.warn('>>> permanentUpgradesGrid not found');
            return;
        }

        const upgrades = UpgradeDefinitions.getPermanentByCategory(category);
        console.log('>>> Got upgrades:', upgrades);
        const crystals = SaveManager.getCrystals();
        console.log('>>> Crystals:', crystals);

        
        const baseValues = {
            damage: 3,
            attackSpeed: 2.50,
            range: 130,
            multishotChance: 0,
            critChance: 0,
            critMultiplier: 2.0,
            maxHealth: 50,
            healthRegen: 0, 
                defense: 0,
                vampirismChance: 0,
                vampirismAmount: 0.5,
                thornsDamage: 0
            };

        grid.innerHTML = Object.values(upgrades).map(upgrade => {
            const level = this.getLevel(upgrade.id);
            const cost = this.getCost(upgrade.id);
            const canAfford = crystals >= cost;
            
            
            const gameUpgradeId = this.getGameUpgradeId(upgrade.id);
            const sharedMax = gameUpgradeId ? UpgradeDefinitions.getSharedMaxLevel(gameUpgradeId) : upgrade.maxLevel;
            const isMaxLevel = level >= sharedMax;
            
            
            let totalValue = '';
            
            const keyMap = {
                'permDamage': 'damage',
                'permAttackSpeed': 'attackSpeed',
                'permRange': 'range',
                'permMultishotChance': 'multishotChance',
                'permCritChance': 'critChance',
                'permCritMultiplier': 'critMultiplier',
                'permMaxHealth': 'maxHealth',
                'permHealthRegen': 'healthRegen',
                'permDefense': 'defense',
                'permVampirismChance': 'vampirismChance',
                'permVampirismAmount': 'vampirismAmount',
                'permThornsDamage': 'thornsDamage'
            };
            const baseKey = keyMap[upgrade.id];
            if (baseKey && baseValues[baseKey] !== undefined && upgrade.baseIncrement) {
                const base = baseValues[baseKey];
                const bonus = level * upgrade.baseIncrement;
                const total = base + bonus;
                
                
                if (upgrade.id.includes('Chance') || upgrade.id.includes('Thorns') || upgrade.id.includes('VampirismAmount')) {
                    totalValue = `${total.toFixed(1)}%`;
                } else if (upgrade.id.includes('Speed')) {
                    const sSuffix = typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('secondsSuffix', 'с') : 'с';
                    totalValue = `${total.toFixed(2)}${sSuffix}`;
                } else if (upgrade.id.includes('Multiplier')) {
                    totalValue = `x${total.toFixed(2)}`;
                } else {
                    totalValue = total.toFixed(2);
                }
            }
            
            
            const levelText = typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('level_abbr', 'Ур.') : 'Ур.';
            const gardensText = typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('gardensOwned', 'огородов') : 'огородов';
            let levelDisplay = `${levelText} ${level}/${sharedMax}`;
            if (upgrade.id === 'permUnlockGarden') {
                const currentGardens = level + 1; 
                levelDisplay = `${currentGardens}/3 ${gardensText}`;
            }
            
            
            
            const upgradeBaseKey = upgrade.id.replace('perm', '');
            const normalizedKey = upgradeBaseKey.charAt(0).toLowerCase() + upgradeBaseKey.slice(1);
            const nameKey = 'perm_' + normalizedKey;
            const descKey = 'perm_desc_' + normalizedKey;
            const localizedName = typeof LocalizationManager !== 'undefined' ? 
                LocalizationManager.t(nameKey, upgrade.name) : upgrade.name;
            const localizedDesc = typeof LocalizationManager !== 'undefined' ? 
                LocalizationManager.t(descKey, upgrade.description) : upgrade.description;

            return `
                <div class="perm-upgrade-btn ${canAfford || isMaxLevel ? '' : 'disabled'} ${isMaxLevel ? 'max-level' : ''}" 
                     data-upgrade="${upgrade.id}">
                    <div class="perm-upgrade-header">
                        <span class="perm-upgrade-icon">${upgrade.icon}</span>
                        <span class="perm-upgrade-name" data-i18n="${nameKey}">${localizedName}</span>
                    </div>
                    <div class="perm-upgrade-desc" data-i18n="${descKey}">${localizedDesc}</div>
                    <div class="perm-upgrade-level">
                        ${totalValue ? `<span class="total-value">${totalValue}</span> ` : ''}
                        <span class="level-progress">${levelDisplay}</span>
                    </div>
                    <div class="perm-upgrade-cost">
                        ${isMaxLevel
                            ? (typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('maxLabel', 'MAX') : 'MAX')
                            : `<span class="crystal-icon-small">💎</span> ${cost}`}
                    </div>
                </div>
            `;
        }).join('');
        
        console.log('>>> Generated HTML length:', grid.innerHTML.length);
        console.log('>>> Grid HTML preview:', grid.innerHTML.substring(0, 200));
    }

    


    updateUI() {
        console.log('>>> PermanentUpgradeManager.updateUI() called');
        const activeTab = document.querySelector('.perm-tab.active');
        const category = activeTab ? activeTab.dataset.category : 'attack';
        console.log('>>> Active category:', category);
        this.renderUpgrades(category);
        
        
        const crystalCount = document.getElementById('menuCrystalCountUpgrade');
        if (crystalCount) {
            crystalCount.textContent = SaveManager.getCrystals();
        }
        
        
        if (typeof LocalizationManager !== 'undefined') {
            document.querySelectorAll('.perm-upgrade-name[data-i18n], .perm-upgrade-desc[data-i18n]').forEach(element => {
                const key = element.dataset.i18n;
                const translation = LocalizationManager.t(key);
                if (translation && translation !== key) {
                    element.textContent = translation;
                }
            });
        }
    }

    


    showUpgradeEffect(upgradeId) {
        const btn = document.querySelector(`[data-upgrade="${upgradeId}"]`);
        if (btn) {
            btn.classList.add('upgrade-flash');
            setTimeout(() => btn.classList.remove('upgrade-flash'), 300);
        }
    }

    


    showNotification(message, type = 'info') {
        
        const translatedMessage = typeof LocalizationManager !== 'undefined' ? 
            LocalizationManager.t(message, message) : message;

        if (typeof UI !== 'undefined' && typeof UI.showNotification === 'function') {
            UI.showNotification(translatedMessage, type);
            return;
        }

        const notification = document.createElement('div');
        notification.className = 'shop-notification';
        notification.textContent = translatedMessage;
        notification.style.setProperty('--toast-bg', type === 'error' ? '#e74c3c' : '#3498db');
        notification.style.position = 'fixed';
        notification.style.top = '18px';
        notification.style.right = '18px';
        notification.style.zIndex = '3000';
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.classList.add('is-leaving');
            setTimeout(() => notification.remove(), 260);
        }, 2600);
    }

    


    reset() {
        for (const key of Object.keys(this.levels)) {
            this.levels[key] = 0;
        }
        this.saveLevels();
        
        
        SaveManager.setUnlockedGardens(1);
        
        this.updateUI();
    }

    reloadFromSave() {
        this.levels = this.loadLevels();
        if (this._uiInitialized) {
            this.updateUI();
        }
    }
}


const permanentUpgradeManager = new PermanentUpgradeManager();


if (typeof module !== 'undefined' && module.exports) {
    module.exports = PermanentUpgradeManager;
}
