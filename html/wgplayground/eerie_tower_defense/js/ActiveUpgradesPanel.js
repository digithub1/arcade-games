




class ActiveUpgradesPanel {
    constructor(xpSystem) {
        this.xpSystem = xpSystem;
        this.visible = false;
        this.initialized = false;
    }

    init() {
        if (this.initialized) return;
        this.createButton();
        this.createModal();
        this.initialized = true;
    }

    createButton() {
        const container = document.querySelector('.bottom-controls');
        if (!container) {
            console.warn('ActiveUpgradesPanel: .bottom-controls not found');
            return;
        }

        
        const oldBtn = document.getElementById('activeUpgradesBtn');
        if (oldBtn) oldBtn.remove();

        const btnText = typeof LocalizationManager !== 'undefined' ?
            LocalizationManager.t('myUpgrades', '📋 Мои Улучшения').replace('📋 ', '') : 'Мои Улучшения';

        const button = document.createElement('button');
        button.id = 'activeUpgradesBtn';
        button.className = 'ctrl-btn active-upgrades-btn';
        button.title = btnText;
        button.innerHTML = `
            <span class="ctrl-icon">📋</span>
            <span class="ctrl-label">${btnText}</span>
            <span class="btn-count">0</span>
        `;
        button.onclick = () => this.toggle();
        
        
        container.appendChild(button);
    }

    createModal() {
        
        const oldModal = document.getElementById('activeUpgradesModal');
        if (oldModal) oldModal.remove();

        const t = typeof LocalizationManager !== 'undefined' ?
            (key, def) => LocalizationManager.t(key, def) : (key, def) => def;

        const modalTitle = t('activeUpgradesTitle', '📋 Полученные Улучшения');
        const emptyText = t('noUpgradesYet', 'Улучшения пока не получены');
        const emptyHint = t('killEnemiesForXP', 'Убивайте врагов и получайте опыт для повышения уровня!');

        const modal = document.createElement('div');
        modal.id = 'activeUpgradesModal';
        modal.className = 'active-upgrades-modal hidden';
        modal.innerHTML = `
            <div class="modal-overlay"></div>
            <div class="modal-content">
                <div class="modal-header">
                    <h2>${modalTitle}</h2>
                    <button class="close-btn">✕</button>
                </div>
                <div class="modal-body">
                    <div class="upgrades-list" id="activeUpgradesList">
                        <div class="empty-state">${emptyText}. ${emptyHint}</div>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        
        modal.querySelector('.close-btn').onclick = () => this.hide();
        modal.querySelector('.modal-overlay').onclick = () => this.hide();
    }

    toggle() {
        if (this.visible) {
            this.hide();
        } else {
            this.show();
        }
    }

    show() {
        if (!this.initialized) this.init();
        this.updateList();
        const modal = document.getElementById('activeUpgradesModal');
        if (modal) {
            modal.classList.remove('hidden');
            this.visible = true;
        }
    }

    hide() {
        const modal = document.getElementById('activeUpgradesModal');
        if (modal) {
            modal.classList.add('hidden');
            this.visible = false;
        }
    }

    updateList() {
        const list = document.getElementById('activeUpgradesList');
        const btnCount = document.querySelector('.active-upgrades-btn .btn-count');
        
        const t = typeof LocalizationManager !== 'undefined' ?
            (key, def) => LocalizationManager.t(key, def) : (key, def) => def;

        if (!this.xpSystem || !this.xpSystem.collectedUpgrades) {
            if (list) list.innerHTML = '<div class="empty-state">' + t('noUpgradesYet', 'Upgrades load error') + '</div>';
            return;
        }

        const upgrades = this.xpSystem.collectedUpgrades;
        const upgradePool = this.xpSystem.upgradePool;
        
        
        if (btnCount) {
            btnCount.textContent = upgrades.size;
            btnCount.style.display = upgrades.size > 0 ? 'flex' : 'none';
        }

        
        const btnText = document.querySelector('.active-upgrades-btn .btn-text');
        if (btnText) {
            btnText.textContent = t('myUpgrades', '📋 My Upgrades').replace('📋 ', '');
        }

        
        const modalHeader = document.querySelector('#activeUpgradesModal .modal-header h2');
        if (modalHeader) {
            modalHeader.textContent = t('activeUpgradesTitle', '📋 Collected Upgrades');
        }

        if (upgrades.size === 0) {
            if (list) {
                list.innerHTML = `
                    <div class="empty-state">
                        <div class="empty-icon">🎯</div>
                        <div class="empty-text">${t('noUpgradesYet', 'Улучшения пока не получены')}</div>
                        <div class="empty-hint">${t('killEnemiesForXP', 'Убивайте врагов и получайте опыт для Level Up!')}</div>
                    </div>
                `;
            }
            return;
        }

        
        let html = '';
        
        
        const tiers = [
            { name: t('tier1', 'Tier 1 (Levels 1-5)'), upgrades: [] },
            { name: t('tier2', 'Tier 2 (Levels 6-10)'), upgrades: [] },
            { name: t('tier3', 'Tier 3 (Levels 11-15)'), upgrades: [] },
            { name: t('tier4', 'Tier 4 (Levels 16+)'), upgrades: [] }
        ];

        upgrades.forEach((level, upgradeId) => {
            const upgrade = upgradePool.upgrades.find(u => u.id === upgradeId);
            if (upgrade) {
                const tierIndex = this.getTierIndex(upgradeId);
                if (tierIndex >= 0) {
                    tiers[tierIndex].upgrades.push({ upgrade, level });
                }
            }
        });

        tiers.forEach(tier => {
            if (tier.upgrades.length > 0) {
                html += `<div class="tier-section">`;
                html += `<div class="tier-header">${tier.name}</div>`;
                html += `<div class="tier-upgrades">`;
                
                tier.upgrades.forEach(({ upgrade, level }) => {
                    html += this.createUpgradeCard(upgrade, level);
                });
                
                html += `</div></div>`;
            }
        });

        if (list) list.innerHTML = html;
    }

    getTierIndex(upgradeId) {
        const tier1 = ['chainLightning', 'doubleShot', 'poisonArrows', 'frostAura'];
        const tier2 = ['piercingArrow', 'splittingArrow', 'critExplosion', 'fireAura'];
        const tier3 = ['lastStand', 'killStreak', 'goldFever', 'vampiricRage'];
        const tier4 = ['crowdControl', 'freezingArrows', 'statBoost', 'luckyTree', 'crystalRain'];
        
        if (tier1.includes(upgradeId)) return 0;
        if (tier2.includes(upgradeId)) return 1;
        if (tier3.includes(upgradeId)) return 2;
        if (tier4.includes(upgradeId)) return 3;
        return -1;
    }

    createUpgradeCard(upgrade, level) {
        const stars = '⭐'.repeat(level);
        const shortDesc = upgrade.getShortDescription(level);
        const detailedDesc = upgrade.getDetailedDescription(level);
        
        return `
            <div class="upgrade-card-item">
                <div class="upgrade-icon">${upgrade.icon}</div>
                <div class="upgrade-info">
                    <div class="upgrade-name">${upgrade.name}</div>
                    <div class="upgrade-level">${stars}</div>
                    <div class="upgrade-short">${shortDesc}</div>
                    <div class="upgrade-detailed">${detailedDesc}</div>
                </div>
            </div>
        `;
    }

    refresh() {
        if (this.visible) {
            this.updateList();
        }
        
        const btnCount = document.querySelector('.active-upgrades-btn .btn-count');
        if (btnCount && this.xpSystem && this.xpSystem.collectedUpgrades) {
            const count = this.xpSystem.collectedUpgrades.size;
            btnCount.textContent = count;
            btnCount.style.display = count > 0 ? 'flex' : 'none';
        }
    }
}


if (typeof module !== 'undefined' && module.exports) {
    module.exports = ActiveUpgradesPanel;
}
