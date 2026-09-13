




class QuestUI {
    constructor(questSystem) {
        this.questSystem = questSystem;
        this.initialized = false;
        this._claimInProgress = false;
    }

    init() {
        if (this.initialized) return;
        
        this.createQuestPanel();
        this.bindEvents();
        this.update();
        
        this.initialized = true;
        window.questUI = this;
    }

    createQuestPanel() {
        
        const panel = document.getElementById('questPanel');
        if (!panel) {
            console.warn('⚠️ Quest panel not found in HTML. Make sure #questPanel exists.');
            return;
        }
        
        console.log('✅ Quest panel found in unified menu');
    }

    bindEvents() {
        
        setInterval(() => {
            this.updateTimer();
        }, 60000);
    }

    update() {
        if (!this.questSystem) return;
        
        const questList = document.getElementById('questList');
        const timer = document.getElementById('questTimer');
        
        if (!questList) return;
        
        
        const headerTitle = document.querySelector('#questPanel .quest-header h3');
        if (headerTitle) {
            const title = typeof LocalizationManager !== 'undefined' ? 
                LocalizationManager.t('dailyQuests', '📜 Ежедневные Квесты') : '📜 Ежедневные Квесты';
            headerTitle.textContent = title;
        }
        
        
        this.updateTimer();
        
        
        const t = typeof LocalizationManager !== 'undefined' ? 
            (key, def) => LocalizationManager.t(key, def) : (key, def) => def;
        
        
        if (this.questSystem.quests.length === 0) {
            questList.innerHTML = `
                <div class="quest-empty">
                    <div class="quest-empty-icon">📋</div>
                    <div class="quest-empty-text">${t('noActiveQuests', 'Нет активных квестов')}</div>
                    <div class="quest-empty-hint">${t('reloadHint', 'Перезайдите в игру для загрузки')}</div>
                </div>
            `;
            return;
        }
        
        let html = '';
        this.questSystem.quests.forEach((quest, index) => {
            html += this.createQuestCard(quest, index);
        });
        
        questList.innerHTML = html;
        
        
        this.bindQuestButtons();
    }

    createQuestCard(quest, index) {
        const progressPercent = Math.min(100, (quest.current / quest.target) * 100);
        const isCompleted = quest.completed;
        const isClaimed = quest.claimed;
        
        
        const t = typeof LocalizationManager !== 'undefined' ? 
            (key, def) => LocalizationManager.t(key, def) : (key, def) => def;
        
        let statusClass = '';
        let statusText = '';
        let buttonHtml = '';
        
        if (isClaimed) {
            statusClass = 'claimed';
            statusText = t('claimed', '✅ Получено');
            buttonHtml = `<button class="quest-btn claimed" disabled>${t('claimed', 'Получено')}</button>`;
        } else if (isCompleted) {
            statusClass = 'completed';
            statusText = t('readyToClaim', '🎉 Готово!');
            const claimText = t('claimReward', 'Получить');
            buttonHtml = `<button class="quest-btn claim" data-index="${index}">${claimText} 💎 ${quest.reward}</button>`;
        } else {
            statusClass = 'active';
            statusText = `${quest.current} / ${quest.target}`;
            buttonHtml = `<button class="quest-btn" disabled>${t('inProgress', 'В процессе')}</button>`;
        }
        
        const difficultyClass = `difficulty-${quest.difficulty}`;
        
        
        const title = t(quest.titleKey, quest.title);
        const description = t(quest.descKey, quest.description);
        
        return `
            <div class="quest-card ${statusClass} ${difficultyClass}" data-index="${index}">
                <div class="quest-card-header">
                    <div class="quest-icon">${quest.icon}</div>
                    <div class="quest-title-section">
                        <div class="quest-title">${title}</div>
                        <div class="quest-description">${description}</div>
                    </div>
                    <div class="quest-reward">💎 ${quest.reward}</div>
                </div>
                <div class="quest-progress-section">
                    <div class="quest-progress-bar">
                        <div class="quest-progress-fill" style="width: ${progressPercent}%"></div>
                    </div>
                    <div class="quest-progress-text">${statusText}</div>
                </div>
                <div class="quest-footer">
                    ${buttonHtml}
                </div>
            </div>
        `;
    }

    bindQuestButtons() {
        document.querySelectorAll('.quest-btn.claim').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = parseInt(e.target.dataset.index);
                this.claimQuest(index);
            });
        });
    }

    async claimQuest(index) {
        if (this._claimInProgress) {
            return;
        }

        this._claimInProgress = true;
        const result = this.questSystem.claimReward(index);
        
        if (result.success) {
            if (window.AuthManager && AuthManager.isAuthorized && typeof AuthManager.forceSave === 'function') {
                try {
                    await AuthManager.forceSave(true);
                    if (typeof AuthManager.markCloudFresh === 'function') {
                        AuthManager.markCloudFresh();
                    }
                } catch (error) {
                    console.warn('⚠️ Не удалось синхронизировать награду квеста с облаком:', error);
                }
            }

            
            if (typeof UI !== 'undefined' && UI.updateMainMenu) {
                UI.updateMainMenu();
            }
            
            
            this.update();
        }

        this._claimInProgress = false;
    }

    updateTimer() {
        const timer = document.getElementById('questTimer');
        if (timer && this.questSystem) {
            const refreshText = typeof LocalizationManager !== 'undefined' ? 
                LocalizationManager.t('refreshIn', 'Обновление через') : 'Обновление через';
            timer.textContent = `${refreshText}: ${this.questSystem.getTimeUntilRefresh()}`;
        }
    }
}


if (typeof module !== 'undefined' && module.exports) {
    module.exports = QuestUI;
}
