




class InGameUpgrades {
    constructor() {
        this.currentTab = 'attack';
        this.levels = {
            damage: 0, attackSpeed: 0, range: 0,
            multishotChance: 0, critChance: 0, critMultiplier: 0,
            maxHealth: 0, healthRegen: 0, defense: 0,
            vampirismChance: 0, vampirismAmount: 0, thornsDamage: 0,
            killGoldBonus: 0, weeklyGoldBonus: 0, weeklyCrystalBonus: 0,
            gameSpeed: 0, traderChance: 0
        };
        this.initialized = false;
        this.mobileDockInitialized = false;
    }

    init() {
        if (this.initialized) return;
        
        this.createPanel();
        this.bindTabs();
        this.bindUpgrades();
        this.bindToggleButton();
        this.bindKeyboardShortcut();
        this.showTab('attack');
        this.loadPanelState();
        this.initMobileDockControls();
        
        this.initialized = true;
        console.log('✅ InGameUpgrades initialized');
    }

    createPanel() {
        const container = document.querySelector('.game-ui');
        if (!container) return;

        
        const old = document.getElementById('upgradesPanel');
        if (old) old.remove();

        const panel = document.createElement('div');
        panel.id = 'upgradesPanel';
        panel.className = 'upgrades-panel';
        panel.innerHTML = `
            <div class="upgrade-header">
                <div class="upgrade-tabs">
                    <button class="tab-btn active" data-tab="attack" data-i18n="attack">
                        <span class="tab-icon">⚔️</span>
                        <span class="tab-name">Атака</span>
                    </button>
                    <button class="tab-btn" data-tab="defense" data-i18n="defense">
                        <span class="tab-icon">🛡️</span>
                        <span class="tab-name">Защита</span>
                    </button>
                    <button class="tab-btn" data-tab="utility" data-i18n="utility">
                        <span class="tab-icon">⚡</span>
                        <span class="tab-name">Утилиты</span>
                    </button>
                </div>
                <button class="toggle-btn" id="upgradesToggleBtn" title="Свернуть/развернуть панель (Q)" data-i18n-title="tooltip_togglePanel">
                    <span class="toggle-icon">▼</span>
                </button>
            </div>
            <div class="upgrade-content-wrapper">
                <div class="upgrade-content">
                <div class="tab-panel" id="tab-attack">
                    <button class="upgrade-btn" data-upgrade="damage" data-base="5" data-inc="4">
                        <span class="icon">⚔️</span>
                        <span class="name" data-i18n="damage">Урон</span>
                        <span class="value">3.00</span>
                        <span class="cost">💰 5</span>
                        <span class="level" data-i18n="level">Ур. 0</span>
                    </button>
                    <button class="upgrade-btn" data-upgrade="attackSpeed" data-base="5" data-inc="9" data-inc2="2">
                        <span class="icon">⚡</span>
                        <span class="name" data-i18n="attackSpeed">Скорость Атаки</span>
                        <span class="value">1.00/с</span>
                        <span class="cost">💰 5</span>
                        <span class="level" data-i18n="level">Ур. 0</span>
                    </button>
                    <button class="upgrade-btn" data-upgrade="range" data-base="20" data-inc="7">
                        <span class="icon">🎯</span>
                        <span class="name" data-i18n="range">Радиус</span>
                        <span class="value">130</span>
                        <span class="cost">💰 20</span>
                        <span class="level" data-i18n="level">Ур. 0</span>
                    </button>
                    <button class="upgrade-btn" data-upgrade="multishotChance" data-base="10" data-inc="5">
                        <span class="icon">🔫</span>
                        <span class="name" data-i18n="multishot">Мультишот</span>
                        <span class="value">0.0%</span>
                        <span class="cost">💰 10</span>
                        <span class="level" data-i18n="level">Ур. 0</span>
                    </button>
                    <button class="upgrade-btn" data-upgrade="critChance" data-base="5" data-inc="5">
                        <span class="icon">💥</span>
                        <span class="name" data-i18n="critChance">Крит Шанс</span>
                        <span class="value">0.0%</span>
                        <span class="cost">💰 5</span>
                        <span class="level" data-i18n="level">Ур. 0</span>
                    </button>
                    <button class="upgrade-btn" data-upgrade="critMultiplier" data-base="15" data-inc="21">
                        <span class="icon">💪</span>
                        <span class="name" data-i18n="critDamage">Крит Урон</span>
                        <span class="value">x2.00</span>
                        <span class="cost">💰 15</span>
                        <span class="level" data-i18n="level">Ур. 0</span>
                    </button>
                </div>
                <div class="tab-panel hidden" id="tab-defense">
                    <button class="upgrade-btn" data-upgrade="maxHealth" data-base="5" data-inc="6">
                        <span class="icon">❤️</span>
                        <span class="name" data-i18n="maxHealth">Макс Здоровье</span>
                        <span class="value">50</span>
                        <span class="cost">💰 5</span>
                        <span class="level" data-i18n="level">Ур. 0</span>
                    </button>
                    <button class="upgrade-btn" data-upgrade="healthRegen" data-base="5" data-inc="10">
                        <span class="icon">💚</span>
                        <span class="name" data-i18n="healthRegen">Реген Здоровья</span>
                        <span class="value">0.50/с</span>
                        <span class="cost">💰 5</span>
                        <span class="level" data-i18n="level">Ур. 0</span>
                    </button>
                    <button class="upgrade-btn" data-upgrade="defense" data-base="5" data-inc="10">
                        <span class="icon">🛡️</span>
                        <span class="name" data-i18n="defense_stat">Защита</span>
                        <span class="value">0.0%</span>
                        <span class="cost">💰 5</span>
                        <span class="level" data-i18n="level">Ур. 0</span>
                    </button>
                    <button class="upgrade-btn" data-upgrade="vampirismChance" data-base="5" data-inc="10">
                        <span class="icon">🩸</span>
                        <span class="name" data-i18n="vampirism">Вампиризм</span>
                        <span class="value">0.0%</span>
                        <span class="cost">💰 5</span>
                        <span class="level" data-i18n="level">Ур. 0</span>
                    </button>
                    <button class="upgrade-btn" data-upgrade="vampirismAmount" data-base="10" data-inc="15">
                        <span class="icon">💉</span>
                        <span class="name" data-i18n="vampirism">Вампиризм Сила</span>
                        <span class="value">0.5%</span>
                        <span class="cost">💰 10</span>
                        <span class="level" data-i18n="level">Ур. 0</span>
                    </button>
                    <button class="upgrade-btn" data-upgrade="thornsDamage" data-base="15" data-inc="10">
                        <span class="icon">🌵</span>
                        <span class="name" data-i18n="ingame_thornsDamage">Контрударный щит</span>
                        <span class="value">0.0%</span>
                        <span class="cost">💰 15</span>
                        <span class="level" data-i18n="level">Ур. 0</span>
                    </button>
                </div>
                <div class="tab-panel hidden" id="tab-utility">
                    <button class="upgrade-btn" data-upgrade="killGoldBonus" data-base="25" data-inc="45">
                        <span class="icon">💰</span>
                        <span class="name" data-i18n="killGoldBonus">Золото за Убийство</span>
                        <span class="value">+0</span>
                        <span class="cost">💰 25</span>
                        <span class="level" data-i18n="level">Ур. 0</span>
                    </button>
                    <button class="upgrade-btn" data-upgrade="weeklyGoldBonus" data-base="5" data-inc="1">
                        <span class="icon">📅</span>
                        <span class="name" data-i18n="ingame_weeklyGoldBonus">Бонус золота за день</span>
                        <span class="value">+0</span>
                        <span class="cost">💰 5</span>
                        <span class="level" data-i18n="level">Ур. 0</span>
                    </button>
                    <button class="upgrade-btn" data-upgrade="weeklyCrystalBonus" data-base="25" data-inc="45">
                        <span class="icon">💎</span>
                        <span class="name" data-i18n="ingame_weeklyCrystalBonus">Бонус кристаллов за день</span>
                        <span class="value">+0</span>
                        <span class="cost">💰 25</span>
                        <span class="level" data-i18n="level">Ур. 0</span>
                    </button>
                    <button class="upgrade-btn" data-upgrade="gameSpeed" data-base="15" data-inc="12">
                        <span class="icon">⏩</span>
                        <span class="name" data-i18n="ingame_gameSpeed">Скорость Игры</span>
                        <span class="value">x1.00</span>
                        <span class="cost">💰 15</span>
                        <span class="level" data-i18n="level">Ур. 0</span>
                    </button>
                    <button class="upgrade-btn" data-upgrade="traderChance" data-base="5" data-inc="7">
                        <span class="icon">🤝</span>
                        <span class="name" data-i18n="ingame_traderChance">Шанс торговца</span>
                        <span class="value">0.00%</span>
                        <span class="cost">💰 5</span>
                        <span class="level" data-i18n="level">Ур. 0</span>
                    </button>
                </div>
            </div>
        </div>
        `;
        
        container.appendChild(panel);
        
        
        if (typeof LocalizationManager !== 'undefined') {
            LocalizationManager.applyLanguage();
        }
    }

    bindTabs() {
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.onclick = (e) => {
                e.stopPropagation();
                const tab = btn.dataset.tab;
                const panel = document.getElementById('upgradesPanel');
                const isActive = btn.classList.contains('active');
                
                
                if (isActive && panel && !panel.classList.contains('minimized')) {
                    this.minimizePanel();
                    return;
                }
                
                
                if (panel && panel.classList.contains('minimized')) {
                    this.restorePanel();
                }
                
                this.showTab(tab);
            };
        });
    }

    bindUpgrades() {
        document.querySelectorAll('.upgrade-btn').forEach(btn => {
            btn.onclick = (e) => {
                e.stopPropagation();
                e.preventDefault();
                
                const upgradeId = btn.dataset.upgrade;
                console.log('[UPGRADE CLICK]', upgradeId);
                
                if (!upgradeId) {
                    console.error('No upgrade ID');
                    return;
                }
                
                if (window.Game && window.Game.upgradeTower) {
                    window.Game.upgradeTower(upgradeId);
                } else {
                    console.error('Game.upgradeTower not available');
                }
            };
        });
    }

    bindToggleButton() {
        const toggleBtn = document.getElementById('upgradesToggleBtn');
        if (toggleBtn) {
            toggleBtn.onclick = (e) => {
                e.stopPropagation();
                this.togglePanel();
            };
        }
    }

    isMobileLayout() {
        return Boolean(
            typeof document !== 'undefined' && document.documentElement.classList.contains('layout-mobile')
        );
    }

    initMobileDockControls() {
        if (this.mobileDockInitialized) {
            this.syncDockButtonStates();
            return;
        }

        const btnUpgradesDock = document.getElementById('btnUpgradesDock');
        if (btnUpgradesDock) {
            btnUpgradesDock.onclick = (e) => {
                e.stopPropagation();
                this.togglePanel();
            };
        }

        const btnInventoryDock = document.getElementById('btnInventoryDock');
        if (btnInventoryDock) {
            btnInventoryDock.onclick = (e) => {
                e.stopPropagation();
                this.toggleInventoryPanel();
            };
        }

        this.mobileDockInitialized = true;
        this.syncDockButtonStates();
    }

    syncDockButtonStates() {
        const btnUpgradesDock = document.getElementById('btnUpgradesDock');
        const btnInventoryDock = document.getElementById('btnInventoryDock');
        const upgradesPanel = document.getElementById('upgradesPanel');
        const inventoryPanel = document.getElementById('inventoryPanel');

        const upgradesOpen = Boolean(upgradesPanel && upgradesPanel.classList.contains('mobile-open'));
        const inventoryOpen = Boolean(inventoryPanel && inventoryPanel.classList.contains('mobile-open'));

        if (btnUpgradesDock) {
            btnUpgradesDock.classList.toggle('is-active', upgradesOpen);
        }
        if (btnInventoryDock) {
            btnInventoryDock.classList.toggle('is-active', inventoryOpen);
        }
    }

    togglePanel() {
        const panel = document.getElementById('upgradesPanel');
        if (!panel) return;

        if (this.isMobileLayout()) {
            const isOpen = panel.classList.contains('mobile-open');
            if (isOpen) {
                this.minimizePanel();
            } else {
                this.restorePanel();
            }
            return;
        }
        
        if (panel.classList.contains('minimized')) {
            this.restorePanel();
        } else {
            this.minimizePanel();
        }
    }

    minimizePanel() {
        const panel = document.getElementById('upgradesPanel');
        const toggleIcon = document.querySelector('#upgradesToggleBtn .toggle-icon');
        
        if (panel) {
            if (this.isMobileLayout()) {
                panel.classList.remove('mobile-open');
                panel.classList.add('minimized');
                this.syncDockButtonStates();
                return;
            }
            panel.classList.add('minimized');
        }
        
        if (toggleIcon) {
            toggleIcon.textContent = '▶';
        }
        
        this.savePanelState(true);
        console.log('📦 Panel minimized');
    }

    restorePanel() {
        const panel = document.getElementById('upgradesPanel');
        const toggleIcon = document.querySelector('#upgradesToggleBtn .toggle-icon');
        
        if (panel) {
            if (this.isMobileLayout()) {
                panel.classList.remove('minimized');
                panel.classList.add('mobile-open');

                const inventoryPanel = document.getElementById('inventoryPanel');
                if (inventoryPanel) {
                    inventoryPanel.classList.remove('mobile-open');
                    inventoryPanel.classList.add('minimized');
                }

                this.syncDockButtonStates();
                return;
            }
            panel.classList.remove('minimized');
        }
        
        if (toggleIcon) {
            toggleIcon.textContent = '▼';
        }
        
        this.savePanelState(false);
        console.log('📦 Panel restored');
    }

    savePanelState(isMinimized) {
        if (typeof SaveManager !== 'undefined') {
            SaveManager.set('td_upgrades_panel_minimized', isMinimized);
        }
    }

    loadPanelState() {
        if (typeof SaveManager !== 'undefined') {
            const isMobileLayout = Boolean(
                typeof document !== 'undefined' && document.documentElement.classList.contains('layout-mobile')
            );
            const panel = document.getElementById('upgradesPanel');

            if (isMobileLayout) {
                if (panel) {
                    panel.classList.remove('minimized');
                    panel.classList.add('mobile-open');
                }
                this.syncDockButtonStates();
                return false;
            }

            const savedState = SaveManager.get('td_upgrades_panel_minimized', null);
            const isMinimized = savedState === null ? isMobileLayout : Boolean(savedState);
            if (isMinimized) {
                
                setTimeout(() => this.minimizePanel(), 100);
            }
            return isMinimized;
        }
        return false;
    }

    bindKeyboardShortcut() {
        document.addEventListener('keydown', (e) => {
            if (e.repeat) return;
            
            if (e.key === 'q' || e.key === 'Q') {
                if (window.UI && typeof UI.shouldBlockGameplayHotkeys === 'function' && UI.shouldBlockGameplayHotkeys(e)) {
                    return;
                }
                
                
                const isPaused = window.Game && typeof window.Game.isGameplayPaused === 'function'
                    ? window.Game.isGameplayPaused()
                    : (window.Game ? window.Game.isPaused : false);
                if (window.Game && window.Game.isRunning && !isPaused) {
                    this.togglePanel();
                }
            }
        });
    }

    showTab(tabName) {
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.tab === tabName);
        });
        
        document.querySelectorAll('.tab-panel').forEach(panel => {
            panel.classList.add('hidden');
        });
        
        const activePanel = document.getElementById(`tab-${tabName}`);
        if (activePanel) activePanel.classList.remove('hidden');
        
        this.currentTab = tabName;
    }

    getCost(upgradeId) {
        if (typeof UpgradeDefinitions !== 'undefined' && typeof UpgradeDefinitions.getInGameCost === 'function') {
            const level = this.levels[upgradeId] || 0;
            return UpgradeDefinitions.getInGameCost(upgradeId, level);
        }

        const btn = document.querySelector(`[data-upgrade="${upgradeId}"]`);
        if (!btn) return Infinity;
        
        const base = parseInt(btn.dataset.base) || 0;
        const level = this.levels[upgradeId] || 0;
        const inc = parseInt(btn.dataset.inc) || 0;
        const inc2 = parseInt(btn.dataset.inc2) || 0;
        
        
        if (upgradeId === 'attackSpeed' && inc2 > 0) {
            let additional = 0;
            for (let i = 0; i < level; i++) {
                additional += inc + (i * inc2);
            }
            return base + additional;
        }
        
        return base + (level * inc);
    }

    
    getPermanentBonus(upgradeId) {
        if (typeof permanentUpgradeManager === 'undefined') return 0;

        
        
        if (
            typeof UpgradeDefinitions !== 'undefined' &&
            typeof UpgradeDefinitions.getPermanentUpgradeId === 'function' &&
            UpgradeDefinitions.PERMANENT
        ) {
            const permId = UpgradeDefinitions.getPermanentUpgradeId(upgradeId);
            const permDef = permId ? UpgradeDefinitions.PERMANENT[permId] : null;
            if (permDef && typeof permDef.baseIncrement === 'number') {
                const permLevel = this.getPermanentLevel(upgradeId);
                return permLevel * permDef.baseIncrement;
            }
        }
        
        const effects = permanentUpgradeManager.getTotalEffects();
        
        const effectMap = {
            damage: 'damageBonus',
            attackSpeed: 'attackSpeedBonus',
            range: 'rangeBonus',
            multishotChance: 'multishotChanceBonus',
            critChance: 'critChanceBonus',
            critMultiplier: 'critMultiplierBonus',
            maxHealth: 'healthBonus',
            healthRegen: 'regenBonus',
            defense: 'defenseBonus',
            vampirismChance: 'vampirismChanceBonus',
            vampirismAmount: 'vampirismAmountBonus',
            thornsDamage: 'thornsBonus',
            killGoldBonus: 'killGoldBonus',
            weeklyGoldBonus: 'weeklyGoldBonus',
            weeklyCrystalBonus: 'weeklyCrystalBonus',
            gameSpeed: 'gameSpeedBonus',
            traderChance: 'traderChanceBonus'
        };
        
        const effectKey = effectMap[upgradeId];
        return effectKey ? (effects[effectKey] || 0) : 0;
    }

    
    getBaseValue(upgradeId) {
        if (typeof UpgradeDefinitions !== 'undefined' && typeof UpgradeDefinitions.findInGameUpgrade === 'function') {
            const definition = UpgradeDefinitions.findInGameUpgrade(upgradeId);
            if (definition && typeof definition.baseValue === 'number') {
                return definition.baseValue;
            }
        }

        const fallbackBaseValues = {
            damage: 3, attackSpeed: 1.0, range: 130,
            multishotChance: 0, critChance: 0, critMultiplier: 2.0,
            maxHealth: 50, healthRegen: 0, defense: 0,
            vampirismChance: 0, vampirismAmount: 0.5, thornsDamage: 0,
            killGoldBonus: 0, weeklyGoldBonus: 0, weeklyCrystalBonus: 0,
            gameSpeed: 1.0, traderChance: 0
        };
        return fallbackBaseValues[upgradeId] || 0;
    }

    
    getIncrement(upgradeId) {
        if (typeof UpgradeDefinitions !== 'undefined' && typeof UpgradeDefinitions.findInGameUpgrade === 'function') {
            const definition = UpgradeDefinitions.findInGameUpgrade(upgradeId);
            if (definition && typeof definition.increment === 'number') {
                return definition.increment;
            }
        }

        const fallbackIncrements = {
            damage: 1.25, attackSpeed: 0.04, range: 4,
            multishotChance: 0.5, critChance: 0.5, critMultiplier: 0.25,
            maxHealth: 5, healthRegen: 0.10, defense: 0.5,
            vampirismChance: 0.35, vampirismAmount: 0.4, thornsDamage: 2,
            killGoldBonus: 1, weeklyGoldBonus: 3, weeklyCrystalBonus: 1,
            gameSpeed: 0.25, traderChance: 0.2
        };
        return fallbackIncrements[upgradeId] || 0;
    }

    
    getLevel(upgradeId) {
        return this.levels[upgradeId] || 0;
    }

    
    getSharedMaxLevel(upgradeId) {
        return UpgradeDefinitions.getSharedMaxLevel(upgradeId);
    }

    
    getPermanentLevel(upgradeId) {
        const permId = UpgradeDefinitions.getPermanentUpgradeId(upgradeId);
        if (!permId) return 0;
        
        
        if (typeof permanentUpgradeManager !== 'undefined') {
            return permanentUpgradeManager.getLevel(permId);
        }
        return 0;
    }

    
    
    getMaxLevel(upgradeId) {
        const sharedMax = this.getSharedMaxLevel(upgradeId);
        const permanentLevel = this.getPermanentLevel(upgradeId);
        return Math.max(0, sharedMax - permanentLevel);
    }

    
    getAvailableLevels(upgradeId) {
        const maxLevel = this.getMaxLevel(upgradeId);
        const currentLevel = this.getLevel(upgradeId);
        return Math.max(0, maxLevel - currentLevel);
    }

    
    isAtMaxLevel(upgradeId) {
        const currentLevel = this.getLevel(upgradeId);
        const maxLevel = this.getMaxLevel(upgradeId);
        return currentLevel >= maxLevel;
    }

    
    getTotalLevel(upgradeId) {
        return this.getPermanentLevel(upgradeId) + this.getLevel(upgradeId);
    }

    
    getBaseWithPermanent(upgradeId) {
        return this.getBaseValue(upgradeId) + this.getPermanentBonus(upgradeId);
    }

    
    getValue(upgradeId) {
        const base = this.getBaseValue(upgradeId);
        const permanent = this.getPermanentBonus(upgradeId);
        const level = this.levels[upgradeId] || 0;
        const inc = this.getIncrement(upgradeId);
        const gameBonus = level * inc;
        
        return base + permanent + gameBonus;
    }

    buy(upgradeId, playerGold) {
        const cost = this.getCost(upgradeId);
        
        if (playerGold < cost) {
            return { success: false, error: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('errorNotEnoughGold', 'Not enough gold') : 'Not enough gold' };
        }
        
        
        if (this.isAtMaxLevel(upgradeId)) {
            return { success: false, error: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('errorMaxLevel', 'Maximum level reached') : 'Maximum level reached' };
        }
        
        this.levels[upgradeId]++;
        
        return { success: true, cost: cost };
    }

    updateUI() {
        const playerGold = (window.Game && window.Game.gold) || 0;
        
        document.querySelectorAll('.upgrade-btn').forEach(btn => {
            const upgradeId = btn.dataset.upgrade;
            const level = this.levels[upgradeId] || 0;
            const totalLevel = this.getTotalLevel(upgradeId);
            const sharedMax = this.getSharedMaxLevel(upgradeId);
            const isMax = this.isAtMaxLevel(upgradeId);
            const cost = this.getCost(upgradeId);
            const value = this.getValue(upgradeId);
            const canAfford = playerGold >= cost;
            
            
            const costEl = btn.querySelector('.cost');
            const levelEl = btn.querySelector('.level');
            const valueEl = btn.querySelector('.value');
            
            if (costEl) {
                if (isMax) {
                    const maxLabel = typeof LocalizationManager !== 'undefined'
                        ? LocalizationManager.t('maxLabel', 'MAX')
                        : 'MAX';
                    costEl.textContent = maxLabel;
                    costEl.style.color = '#95a5a6';
                } else {
                    costEl.textContent = `💰 ${cost}`;
                    costEl.style.color = '';
                }
            }
            
            if (levelEl) {
                
                const levelLabel = typeof LocalizationManager !== 'undefined' ? 
                    LocalizationManager.t('level', 'Ур.') : 'Ур.';
                levelEl.textContent = `${levelLabel} ${totalLevel}/${sharedMax}`;
            }
            
            if (valueEl) {
                
                let formatted = value.toFixed(2);
                const utilityDelta = this.getIncrement(upgradeId);
                if (upgradeId.includes('Chance') || upgradeId === 'defense' || upgradeId === 'thornsDamage') {
                    formatted = value.toFixed(1) + '%';
                } else if (upgradeId === 'attackSpeed') {
                    const perSecSuffix = typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('perSecondSuffix', '/s') : '/s';
                    formatted = value.toFixed(2) + perSecSuffix;
                } else if (upgradeId === 'critMultiplier' || upgradeId === 'gameSpeed') {
                    formatted = 'x' + value.toFixed(2);
                } else if (upgradeId.includes('Bonus')) {
                    formatted = (value >= 0 ? '+' : '') + Math.floor(value);
                } else if (upgradeId === 'vampirismAmount') {
                    formatted = value.toFixed(1) + '%';
                } else if (Number.isInteger(this.getBaseValue(upgradeId))) {
                    formatted = Math.floor(value);
                }

                
                if (upgradeId === 'killGoldBonus' || upgradeId === 'weeklyGoldBonus' || upgradeId === 'weeklyCrystalBonus') {
                    formatted = `+${Math.floor(value)} (+${Math.floor(utilityDelta)})`;
                } else if (upgradeId === 'gameSpeed') {
                    formatted = `x${value.toFixed(2)} (+${utilityDelta.toFixed(2)})`;
                } else if (upgradeId === 'traderChance') {
                    formatted = `${value.toFixed(2)}% (+${utilityDelta.toFixed(2)}%)`;
                }

                valueEl.textContent = formatted;
            }
            
            
            const shouldDisable = !canAfford || isMax;
            btn.classList.toggle('disabled', shouldDisable);
            
            
            btn.classList.toggle('max-level', isMax);
        });
    }

    reset() {
        Object.keys(this.levels).forEach(key => {
            this.levels[key] = 0;
        });
        this.updateUI();
    }

    



    initInventoryPanel() {
        this.bindInventoryToggle();
        this.bindInventoryKeyboard();
        this.loadInventoryPanelState();
    }

    bindInventoryToggle() {
        
        const toggleBtn = document.getElementById('inventoryToggleBtn');
        if (toggleBtn) {
            toggleBtn.onclick = (e) => {
                e.stopPropagation();
                this.toggleInventoryPanel();
            };
        }
        
        
        const header = document.querySelector('.inventory-header');
        if (header) {
            header.onclick = (e) => {
                
                if (e.target.closest('#inventoryToggleBtn')) {
                    return;
                }
                this.toggleInventoryPanel();
            };
            header.style.cursor = 'pointer';
        }
    }

    bindInventoryKeyboard() {
        document.addEventListener('keydown', (e) => {
            if (e.repeat) return;
            
            if (e.key === 'e' || e.key === 'E') {
                if (window.UI && typeof UI.shouldBlockGameplayHotkeys === 'function' && UI.shouldBlockGameplayHotkeys(e)) {
                    return;
                }
                
                
                const isPaused = window.Game && typeof window.Game.isGameplayPaused === 'function'
                    ? window.Game.isGameplayPaused()
                    : (window.Game ? window.Game.isPaused : false);
                if (window.Game && window.Game.isRunning && !isPaused) {
                    this.toggleInventoryPanel();
                }
            }
        });
    }

    toggleInventoryPanel() {
        const panel = document.getElementById('inventoryPanel');
        if (!panel) return;

        if (this.isMobileLayout()) {
            const isOpen = panel.classList.contains('mobile-open');
            if (isOpen) {
                this.minimizeInventoryPanel();
            } else {
                this.restoreInventoryPanel();
            }
            return;
        }
        
        if (panel.classList.contains('minimized')) {
            this.restoreInventoryPanel();
        } else {
            this.minimizeInventoryPanel();
        }
    }

    minimizeInventoryPanel() {
        const panel = document.getElementById('inventoryPanel');
        const toggleIcon = document.querySelector('#inventoryToggleBtn .inventory-toggle-icon');
        
        if (panel) {
            if (this.isMobileLayout()) {
                panel.classList.remove('mobile-open');
                panel.classList.add('minimized');
                this.syncDockButtonStates();
                return;
            }
            panel.classList.add('minimized');
        }
        
        if (toggleIcon) {
            toggleIcon.textContent = '▶';
        }
        
        this.saveInventoryPanelState(true);
        console.log('📦 Inventory panel minimized');
    }

    restoreInventoryPanel() {
        const panel = document.getElementById('inventoryPanel');
        const toggleIcon = document.querySelector('#inventoryToggleBtn .inventory-toggle-icon');
        
        if (panel) {
            if (this.isMobileLayout()) {
                panel.classList.remove('minimized');
                panel.classList.add('mobile-open');

                const upgradesPanel = document.getElementById('upgradesPanel');
                if (upgradesPanel) {
                    upgradesPanel.classList.remove('mobile-open');
                    upgradesPanel.classList.add('minimized');
                }

                this.syncDockButtonStates();
                return;
            }
            panel.classList.remove('minimized');
        }
        
        if (toggleIcon) {
            toggleIcon.textContent = '▼';
        }
        
        this.saveInventoryPanelState(false);
        console.log('📦 Inventory panel restored');
    }

    saveInventoryPanelState(isMinimized) {
        if (typeof SaveManager !== 'undefined') {
            SaveManager.set('td_inventory_panel_minimized', isMinimized);
        }
    }

    loadInventoryPanelState() {
        if (typeof SaveManager !== 'undefined') {
            const isMobileLayout = Boolean(
                typeof document !== 'undefined' && document.documentElement.classList.contains('layout-mobile')
            );
            const panel = document.getElementById('inventoryPanel');

            if (isMobileLayout) {
                if (panel) {
                    panel.classList.add('minimized');
                    panel.classList.remove('mobile-open');
                }
                this.syncDockButtonStates();
                return true;
            }

            const savedState = SaveManager.get('td_inventory_panel_minimized', null);
            const isMinimized = savedState === null ? isMobileLayout : Boolean(savedState);
            if (isMinimized) {
                
                setTimeout(() => this.minimizeInventoryPanel(), 100);
            }
            return isMinimized;
        }
        return false;
    }
}

const baseValues = {
    damage: 3, attackSpeed: 1.0, range: 130,
    multishotChance: 0, critChance: 0, critMultiplier: 2.0,
    maxHealth: 50, healthRegen: 0.50, defense: 0,
    vampirismChance: 0, vampirismAmount: 0.5, thornsDamage: 0,
    killGoldBonus: 0, weeklyGoldBonus: 0, weeklyCrystalBonus: 0,
    gameSpeed: 1.0, traderChance: 0
};


const inGameUpgrades = new InGameUpgrades();
