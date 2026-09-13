




class XPSystem {
    constructor(game) {
        this.game = game;
        this.currentXP = 0;
        this.xpToNextLevel = 100;
        this.level = 1;
        this.isSelectingUpgrade = false;
        this.collectedUpgrades = new Map(); 
        
        
        this.xpOrbs = [];
        
        
        this.upgradePool = new UpgradePool();
        
        
        if (typeof LocalizationManager !== 'undefined') {
            this.upgradePool.updateNames();
        }
    }
    
    
    calculateXPForLevel(level) {
        return Math.floor(100 * Math.pow(level, 1.3));
    }
    
    addXP(amount) {
        if (this.isSelectingUpgrade) return;
        
        
        if (this.game.cardEffects) {
            amount = this.game.cardEffects.modifyXPDrop(amount);
        }
        
        this.currentXP += amount;
        
        
        while (this.currentXP >= this.xpToNextLevel) {
            this.currentXP -= this.xpToNextLevel;
            this.levelUp();
        }
        
        this.updateUI();
    }
    
    levelUp() {
        this.level++;
        this.xpToNextLevel = this.calculateXPForLevel(this.level);
        
        
        if (this.game.questSystem) {
            this.game.questSystem.onLevelUp();
        }
        
        
        this.showUpgradeSelection();
        
        
        if (typeof AudioManager !== 'undefined') {
            AudioManager.playSound('levelUp');
        }
        
        
        this.game.createLevelUpEffect();
    }
    
    showUpgradeSelection() {
        this.isSelectingUpgrade = true;
        
        
        const availableUpgrades = this.upgradePool.getAvailableUpgrades(this.collectedUpgrades);
        const selectedUpgrades = this.getRandomUpgrades(availableUpgrades, 3);
        
        
        if (selectedUpgrades.length === 0) {
            this.applyStatBoost();
            this.isSelectingUpgrade = false;
            return;
        }
        
        
        this.createUpgradeModal(selectedUpgrades);
        
        
        if (this.game) {
            this.game._manualPauseTriggered = false;
        }
        const gp = this.game && typeof this.game.getGp === 'function' ? this.game.getGp() : null;
        if (gp && typeof gp.pause === 'function') {
            gp.pause();
        }
    }
    
    getRandomUpgrades(available, count) {
        const shuffled = [...available].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, count);
    }
    
    createUpgradeModal(upgrades) {
        
        const modalContainer = document.getElementById('upgradeModalContainer');
        if (!modalContainer) {
            console.error('upgradeModalContainer not found');
            return;
        }
        
        
        modalContainer.classList.remove('hidden');
        
        
        let modal = document.getElementById('upgradeSelectionModal');
        if (!modal) {
            
            modal = document.createElement('div');
            modal.id = 'upgradeSelectionModal';
            modalContainer.appendChild(modal);
        }
        
        
        modal.innerHTML = '';
        modal.className = 'game-modal-content upgrade-selection-content';
        
        
        const modalBody = document.createElement('div');
        modalBody.className = 'game-modal-body';
        
        
        const levelLabel = typeof LocalizationManager !== 'undefined' ?
            LocalizationManager.t('levelUpTitle', 'Уровень {level} - Выберите улучшение!').replace('{level}', this.level) :
            `Уровень ${this.level} - Выберите улучшение!`;
        const title = document.createElement('h2');
        title.className = 'upgrade-selection-title';
        title.textContent = levelLabel;
        title.style.textAlign = 'center';
        title.style.marginBottom = '20px';
        title.style.color = '#fff';
        modalBody.appendChild(title);
        
        
        const cardsContainer = document.createElement('div');
        cardsContainer.className = 'upgrade-cards-container';
        
        upgrades.forEach((upgrade, index) => {
            const card = this.createUpgradeCard(upgrade, index);
            cardsContainer.appendChild(card);
        });
        
        modalBody.appendChild(cardsContainer);
        modal.appendChild(modalBody);
        
        
        setTimeout(() => {
            cardsContainer.querySelectorAll('.upgrade-card').forEach((card, i) => {
                setTimeout(() => {
                    card.classList.add('show');
                }, i * 100);
            });
        }, 50);
    }
    
    createUpgradeCard(upgrade, index) {
        const card = document.createElement('div');
        card.className = 'upgrade-card';
        card.style.animationDelay = `${index * 0.1}s`;
        
        const currentLevel = this.collectedUpgrades.get(upgrade.id) || 0;
        const nextLevel = currentLevel + 1;
        
        
        const icon = document.createElement('div');
        icon.className = 'upgrade-card-icon';
        icon.textContent = upgrade.icon;
        card.appendChild(icon);
        
        
        const name = document.createElement('h3');
        name.className = 'upgrade-card-name';
        name.textContent = upgrade.name;
        card.appendChild(name);
        
        
        const levelText = typeof LocalizationManager !== 'undefined' ?
            LocalizationManager.t('levelShort', 'Уровень {level}').replace('{level}', nextLevel) :
            `Уровень ${nextLevel}`;
        const levelIndicator = document.createElement('div');
        levelIndicator.className = 'upgrade-card-level';
        levelIndicator.textContent = `${levelText}/3`;
        card.appendChild(levelIndicator);
        
        
        const shortDesc = document.createElement('p');
        shortDesc.className = 'upgrade-card-short-desc';
        shortDesc.textContent = upgrade.getShortDescription(nextLevel);
        card.appendChild(shortDesc);
        
        
        const detailDesc = document.createElement('div');
        detailDesc.className = 'upgrade-card-detail-desc';
        detailDesc.textContent = upgrade.getDetailedDescription(nextLevel);
        card.appendChild(detailDesc);
        
        
        card.addEventListener('mouseenter', () => {
            card.classList.add('hovered');
        });
        
        card.addEventListener('mouseleave', () => {
            card.classList.remove('hovered');
        });
        
        
        card.addEventListener('click', () => {
            this.selectUpgrade(upgrade);
        });
        
        return card;
    }
    
    selectUpgrade(upgrade) {
        if (this.selectionTimerInterval) {
            clearInterval(this.selectionTimerInterval);
            this.selectionTimerInterval = null;
        }
        
        
        const currentLevel = this.collectedUpgrades.get(upgrade.id) || 0;
        this.collectedUpgrades.set(upgrade.id, currentLevel + 1);
        upgrade.apply(this.game, currentLevel + 1);
        
        
        const modalContainer = document.getElementById('upgradeModalContainer');
        if (modalContainer) {
            modalContainer.classList.add('hidden');
        }
        
        this.isSelectingUpgrade = false;

        if (this.game) {
            this.game._manualPauseTriggered = false;
            this.game.isPaused = false;
            this.game.lastTime = performance.now();
        }

        const pauseOverlay = document.getElementById('pauseOverlay');
        if (pauseOverlay) {
            pauseOverlay.classList.add('hidden');
        }

        let resumed = false;
        if (typeof window !== 'undefined' && typeof window.__gpRequestResume === 'function') {
            resumed = window.__gpRequestResume('xp_upgrade_selected') !== false;
        }

        if (!resumed) {
            const gp = this.game && typeof this.game.getGp === 'function' ? this.game.getGp() : null;
            if (gp && typeof gp.resume === 'function') {
                try {
                    gp.resume();
                } catch (error) {
                    console.warn('⚠️ Не удалось снять паузу после выбора улучшения:', error);
                }
            }
        }
        
        
        this.showUpgradeNotification(upgrade);
        
        
        if (this.game.activeUpgradesPanel) {
            this.game.activeUpgradesPanel.refresh();
        }
    }
    
    applyStatBoost() {
        if (this.game.tower) {
            const previousMaxHealth = Math.max(1, Number(this.game.tower.maxHealth) || 1);
            const previousHealth = Math.max(1, Number(this.game.tower.health) || previousMaxHealth);
            const healthRatio = previousHealth / previousMaxHealth;

            if (!this.game.tower.progressionBonuses) {
                this.game.tower.progressionBonuses = { exhaustedUpgradeStacks: 0 };
            }

            this.game.tower.progressionBonuses.exhaustedUpgradeStacks += 1;
            this.game.tower.recalculateStats();
            this.game.tower.health = Math.min(
                this.game.tower.maxHealth,
                Math.max(1, Math.floor(this.game.tower.maxHealth * healthRatio))
            );

            if (typeof UI !== 'undefined' && UI.updateHealth) {
                UI.updateHealth(this.game.tower.health, this.game.tower.maxHealth);
            }
        }

        const statBoostMsg = typeof LocalizationManager !== 'undefined' ?
            LocalizationManager.t('allStatsBoost', 'Все характеристики +5%') :
            'Все характеристики +5%';
        this.showNotification(statBoostMsg);
    }
    
    showUpgradeNotification(upgrade) {
        const upgradedMsg = typeof LocalizationManager !== 'undefined' ?
            LocalizationManager.t('upgraded', 'улучшено!') :
            'улучшено!';
        const notification = document.createElement('div');
        notification.className = 'upgrade-notification';
        notification.innerHTML = `
            <span class="upgrade-icon">${upgrade.icon}</span>
            <span class="upgrade-text">${upgrade.name} ${upgradedMsg}</span>
        `;
        
        const gameUI = document.querySelector('.game-ui');
        if (gameUI) {
            gameUI.appendChild(notification);
        } else {
            document.body.appendChild(notification);
        }
        
        setTimeout(() => notification.remove(), 3000);
    }
    
    showNotification(text) {
        if (typeof UI !== 'undefined' && typeof UI.showNotification === 'function') {
            UI.showNotification(text, 'info');
            return;
        }

        const notification = document.createElement('div');
        notification.className = 'upgrade-notification';
        notification.textContent = text;
        
        const gameUI = document.querySelector('.game-ui');
        if (gameUI) {
            gameUI.appendChild(notification);
        } else {
            document.body.appendChild(notification);
        }
        
        setTimeout(() => notification.remove(), 3000);
    }
    
    
    spawnXPOrb(x, y, amount) {
        this.xpOrbs.push({
            x: x,
            y: y,
            targetX: this.game.tower.x,
            targetY: this.game.tower.y,
            amount: amount,
            speed: 300, 
            size: 8,
            collected: false
        });
    }
    
    update(deltaTime) {
        
        for (let i = this.xpOrbs.length - 1; i >= 0; i--) {
            const orb = this.xpOrbs[i];
            
            
            const dx = orb.targetX - orb.x;
            const dy = orb.targetY - orb.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 10 || orb.collected) {
                
                this.addXP(orb.amount);
                this.game.createXPCollectEffect(orb.x, orb.y);
                
                this.xpOrbs[i] = this.xpOrbs[this.xpOrbs.length - 1];
                this.xpOrbs.pop();
            } else {
                
                const moveDistance = orb.speed * deltaTime / 1000;
                orb.x += (dx / distance) * moveDistance;
                orb.y += (dy / distance) * moveDistance;
            }
        }
    }
    
    draw(ctx) {
        
        this.xpOrbs.forEach(orb => {
            ctx.save();
            
            
            ctx.shadowBlur = 10;
            ctx.shadowColor = '#2ecc71';
            
            
            ctx.fillStyle = '#2ecc71';
            ctx.beginPath();
            ctx.arc(orb.x, orb.y, orb.size, 0, Math.PI * 2);
            ctx.fill();
            
            
            ctx.fillStyle = '#58d68d';
            ctx.beginPath();
            ctx.arc(orb.x - 2, orb.y - 2, orb.size * 0.4, 0, Math.PI * 2);
            ctx.fill();
            
            ctx.restore();
        });
    }
    
    updateUI() {
        
        const xpBar = document.getElementById('xpBar');
        const xpText = document.getElementById('xpText');
        const levelText = document.getElementById('levelText');
        
        if (xpBar) {
            const progress = (this.currentXP / this.xpToNextLevel) * 100;
            xpBar.style.width = `${progress}%`;
        }
        
        if (xpText) {
            xpText.textContent = `${Math.floor(this.currentXP)}/${this.xpToNextLevel} XP`;
        }
        
        if (levelText) {
            const levelLabel = typeof LocalizationManager !== 'undefined' ?
                LocalizationManager.t('level', 'Ур.') : 'Ур.';
            levelText.textContent = `${levelLabel} ${this.level}`;
        }
    }
    
    reset() {
        this.currentXP = 0;
        this.xpToNextLevel = 100;
        this.level = 1;
        this.isSelectingUpgrade = false;
        this.collectedUpgrades.clear();
        this.xpOrbs = [];
        
        if (this.selectionTimerInterval) {
            clearInterval(this.selectionTimerInterval);
            this.selectionTimerInterval = null;
        }
        
        const modal = document.getElementById('upgradeSelectionModal');
        if (modal) {
            modal.remove();
        }
        
        this.updateUI();
    }
}




class UpgradePool {
    constructor() {
        this.initUpgrades();
    }
    
    initUpgrades() {
        this.upgrades = [
            
            new ChainLightningUpgrade(),
            new DoubleShotUpgrade(),
            new PoisonArrowsUpgrade(),
            new FrostAuraUpgrade(),
            
            
            new PiercingArrowUpgrade(),
            new SplittingArrowUpgrade(),
            new CritExplosionUpgrade(),
            new FireAuraUpgrade(),
            
            
            new LastStandUpgrade(),
            new KillStreakUpgrade(),
            new GoldFeverUpgrade(),
            new VampiricRageUpgrade(),
            
            
            new CrowdControlUpgrade(),
            new FreezingArrowsUpgrade(),
            new StatBoostUpgrade(),
            new HunterSightUpgrade(),
            new MonsterHunterUpgrade(),
            new LuckyTreeUpgrade(),
            new CrystalRainUpgrade()
        ];
    }
    
    


    updateNames() {
        this.upgrades.forEach(upgrade => {
            if (upgrade.updateName) {
                upgrade.updateName();
            }
        });
    }
    
    getAvailableUpgrades(collectedUpgrades) {
        return this.upgrades.filter(upgrade => {
            const currentLevel = collectedUpgrades.get(upgrade.id) || 0;
            return currentLevel < upgrade.maxLevel;
        });
    }
}


if (typeof module !== 'undefined' && module.exports) {
    module.exports = { XPSystem, UpgradePool };
}
