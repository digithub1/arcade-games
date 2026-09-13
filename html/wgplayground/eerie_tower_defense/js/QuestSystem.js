




const QUEST_DEFINITIONS = [
    
    {
        id: 'kill_50',
        type: 'kill',
        title: 'Охотник',
        titleKey: 'quest_hunter',
        description: 'Убить 50 врагов',
        descKey: 'quest_kill_50_desc',
        target: 50,
        reward: 45,
        difficulty: 'easy',
        icon: '👻'
    },
    {
        id: 'collect_mushrooms_10',
        type: 'collect_mushrooms',
        title: 'Грибник',
        titleKey: 'quest_mushroomer',
        description: 'Собрать 10 грибов',
        descKey: 'quest_mushrooms_10_desc',
        target: 10,
        reward: 45,
        difficulty: 'easy',
        icon: '🍄'
    },
    {
        id: 'survive_waves_5',
        type: 'survive_waves',
        title: 'Выживший',
        titleKey: 'quest_survivor',
        description: 'Прожить 5 волн',
        descKey: 'quest_waves_5_desc',
        target: 5,
        reward: 45,
        difficulty: 'easy',
        icon: '🌊'
    },
    {
        id: 'earn_gold_500',
        type: 'earn_gold',
        title: 'Копилка',
        titleKey: 'quest_piggy',
        description: 'Заработать 500 золота',
        descKey: 'quest_gold_500_desc',
        target: 500,
        reward: 45,
        difficulty: 'easy',
        icon: '💰'
    },
    {
        id: 'buy_upgrades_5',
        type: 'buy_upgrades',
        title: 'Улучшатор',
        titleKey: 'quest_upgrader',
        description: 'Купить 5 улучшений',
        descKey: 'quest_upgrades_5_desc',
        target: 5,
        reward: 45,
        difficulty: 'easy',
        icon: '⚡'
    },
    
    
    {
        id: 'kill_100',
        type: 'kill',
        title: 'Мастер Охоты',
        titleKey: 'quest_master_hunter',
        description: 'Убить 100 врагов',
        descKey: 'quest_kill_100_desc',
        target: 100,
        reward: 95,
        difficulty: 'medium',
        icon: '🏹'
    },
    {
        id: 'kill_bosses_2',
        type: 'kill_bosses',
        title: 'Убийца Боссов',
        titleKey: 'quest_boss_slayer',
        description: 'Убить 2 боссов',
        descKey: 'quest_bosses_2_desc',
        target: 2,
        reward: 95,
        difficulty: 'medium',
        icon: '👑'
    },
    {
        id: 'collect_mushrooms_25',
        type: 'collect_mushrooms',
        title: 'Грибной Король',
        titleKey: 'quest_mushroom_king',
        description: 'Собрать 25 грибов',
        descKey: 'quest_mushrooms_25_desc',
        target: 25,
        reward: 95,
        difficulty: 'medium',
        icon: '🍄'
    },
    {
        id: 'get_levels_5',
        type: 'get_levels',
        title: 'Прокачка',
        titleKey: 'quest_leveling',
        description: 'Получить 5 уровней',
        descKey: 'quest_levels_5_desc',
        target: 5,
        reward: 95,
        difficulty: 'medium',
        icon: '⭐'
    },
    {
        id: 'earn_gold_1000',
        type: 'earn_gold',
        title: 'Финансист',
        titleKey: 'quest_financier',
        description: 'Заработать 1000 золота',
        descKey: 'quest_gold_1000_desc',
        target: 1000,
        reward: 95,
        difficulty: 'medium',
        icon: '💵'
    },
    {
        id: 'survive_waves_10',
        type: 'survive_waves',
        title: 'Стойкость',
        titleKey: 'quest_tenacity',
        description: 'Прожить 10 волн',
        descKey: 'quest_waves_10_desc',
        target: 10,
        reward: 95,
        difficulty: 'medium',
        icon: '🛡️'
    },
    
    
    {
        id: 'kill_200',
        type: 'kill',
        title: 'Легенда',
        titleKey: 'quest_legend',
        description: 'Убить 200 врагов',
        descKey: 'quest_kill_200_desc',
        target: 200,
        reward: 150,
        difficulty: 'hard',
        icon: '⚔️'
    },
    {
        id: 'kill_bosses_5',
        type: 'kill_bosses',
        title: 'Гроза Боссов',
        titleKey: 'quest_boss_nightmare',
        description: 'Убить 5 боссов',
        descKey: 'quest_bosses_5_desc',
        target: 5,
        reward: 150,
        difficulty: 'hard',
        icon: '🐉'
    },
    {
        id: 'survive_waves_20',
        type: 'survive_waves',
        title: 'Бессмертный',
        titleKey: 'quest_immortal',
        description: 'Прожить 20 волн',
        descKey: 'quest_waves_20_desc',
        target: 20,
        reward: 150,
        difficulty: 'hard',
        icon: '👑'
    },
    {
        id: 'get_levels_10',
        type: 'get_levels',
        title: 'Максимум',
        titleKey: 'quest_maximum',
        description: 'Получить 10 уровней',
        descKey: 'quest_levels_10_desc',
        target: 10,
        reward: 150,
        difficulty: 'hard',
        icon: '🌟'
    },
    {
        id: 'earn_gold_3000',
        type: 'earn_gold',
        title: 'Магнат',
        titleKey: 'quest_magnate',
        description: 'Заработать 3000 золота',
        descKey: 'quest_gold_3000_desc',
        target: 3000,
        reward: 150,
        difficulty: 'hard',
        icon: '💎'
    }
];

class QuestSystem {
    constructor() {
        this.quests = [];
        this.lastRefresh = null;
        this.refreshDateKey = null;
        this.initialized = false;
    }

    



    initOnce() {
        if (this.initialized) return;

        this.loadQuests();
        this.checkDailyRefresh();
        this.initialized = true;

        console.log('✅ QuestSystem initialized');
    }

    



    reset() {
        this.quests.forEach(quest => {
            quest.current = 0;
            quest.completed = false;
            quest.claimed = false;
        });
        this.saveQuests();
        this.updateUI();
        console.log('🔄 QuestSystem: прогресс сброшен для новой игры');
    }

    
    checkDailyRefresh() {
        const currentDateKey = this.getRefreshDateKey();

        if (!this.hasValidQuestState()) {
            this.generateNewQuests();
            return;
        }

        if (this.refreshDateKey !== currentDateKey) {
            console.log('🔄 New day in MSK - refreshing quests');
            this.generateNewQuests();
        }
    }

    generateNewQuests() {
        
        const easy = QUEST_DEFINITIONS.filter(q => q.difficulty === 'easy');
        const medium = QUEST_DEFINITIONS.filter(q => q.difficulty === 'medium');
        const hard = QUEST_DEFINITIONS.filter(q => q.difficulty === 'hard');

        const countByDifficulty = (typeof BalanceRuntime !== 'undefined' && BalanceRuntime.get)
            ? (BalanceRuntime.get('quests.daily.countByDifficulty', null) || {})
            : {};
        const rewardBonusByDifficulty = (typeof BalanceRuntime !== 'undefined' && BalanceRuntime.get)
            ? (BalanceRuntime.get('quests.daily.rewardBonusByDifficulty', null) || {})
            : {};

        const easyCount = Math.max(0, countByDifficulty.easy ?? 1);
        const mediumCount = Math.max(0, countByDifficulty.medium ?? 1);
        const hardCount = Math.max(0, countByDifficulty.hard ?? 1);
        
        
        const selectedQuests = [
            ...this.getRandomQuests(easy, easyCount),
            ...this.getRandomQuests(medium, mediumCount),
            ...this.getRandomQuests(hard, hardCount)
        ].filter(q => q !== null);
        
        
        this.quests = selectedQuests.map(def => ({
            ...def,
            reward: Math.max(1, Math.floor((def.reward || 0) + (rewardBonusByDifficulty[def.difficulty] || 0))),
            current: 0,
            completed: false,
            claimed: false
        }));

        this.lastRefresh = this.getCurrentDate().toISOString();
        this.refreshDateKey = this.getRefreshDateKey();
        this.saveQuests();
        
        console.log('✨ New daily quests generated:', this.quests.length);
    }

    getRandomQuest(questPool) {
        if (questPool.length === 0) return null;
        return questPool[Math.floor(Math.random() * questPool.length)];
    }

    getRandomQuests(questPool, count) {
        if (!Array.isArray(questPool) || questPool.length === 0 || count <= 0) {
            return [];
        }

        const pool = [...questPool];
        const result = [];
        const pickCount = Math.min(count, pool.length);

        for (let i = 0; i < pickCount; i++) {
            const index = Math.floor(Math.random() * pool.length);
            result.push(pool[index]);
            pool.splice(index, 1);
        }

        return result;
    }

    
    updateProgress(type, amount = 1) {
        let updated = false;
        let completedNow = false;
        
        this.quests.forEach(quest => {
            if (quest.type === type && !quest.completed) {
                quest.current += amount;
                
                if (quest.current >= quest.target) {
                    quest.current = quest.target;
                    quest.completed = true;
                    completedNow = true;
                    this.showQuestCompleteNotification(quest);
                }
                
                updated = true;
            }
        });
        
        if (updated) {
            this.saveQuests();
            this.updateUI();
            if (completedNow && window.AuthManager && AuthManager.isAuthorized && typeof AuthManager.requestCloudSave === 'function') {
                AuthManager.requestCloudSave('quest_completed', true);
            }
        }
    }

    
    onEnemyKilled(isBoss = false) {
        this.updateProgress('kill', 1);
        if (isBoss) {
            this.updateProgress('kill_bosses', 1);
        }
    }

    onMushroomCollected() {
        this.updateProgress('collect_mushrooms', 1);
    }

    onWaveCompleted(waveNumber) {
        let completedNow = false;
        
        this.quests.forEach(quest => {
            if (quest.type === 'survive_waves' && !quest.completed) {
                if (waveNumber > quest.current) {
                    quest.current = waveNumber;
                    if (quest.current >= quest.target) {
                        quest.current = quest.target;
                        quest.completed = true;
                        completedNow = true;
                        this.showQuestCompleteNotification(quest);
                    }
                    this.saveQuests();
                    this.updateUI();
                }
            }
        });

        if (completedNow && window.AuthManager && AuthManager.isAuthorized && typeof AuthManager.requestCloudSave === 'function') {
            AuthManager.requestCloudSave('quest_completed', true);
        }
    }

    onGoldEarned(amount) {
        this.updateProgress('earn_gold', amount);
    }

    onUpgradeBought() {
        this.updateProgress('buy_upgrades', 1);
    }

    onLevelUp() {
        this.updateProgress('get_levels', 1);
    }

    
    claimReward(questIndex) {
        const quest = this.quests[questIndex];
        if (!quest || !quest.completed || quest.claimed) {
            return { success: false, error: typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('questNotReadyError', 'Quest not completed or reward already claimed') : 'Quest not completed or reward already claimed' };
        }
        
        
        if (typeof SaveManager !== 'undefined') {
            SaveManager.addCrystals(quest.reward);
        }
        
        quest.claimed = true;
        this.saveQuests();
        this.updateUI();

        if (window.AuthManager && AuthManager.isAuthorized && typeof AuthManager.requestCloudSave === 'function') {
            AuthManager.requestCloudSave('quest_claimed', true);
        }
        
        
        this.showRewardNotification(quest);
        
        return { success: true, reward: quest.reward };
    }

    
    showQuestCompleteNotification(quest) {
        const completedLabel = typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('questCompleted', '✅ Completed!') : '✅ Completed!';
        const questTitle = typeof LocalizationManager !== 'undefined'
            ? LocalizationManager.t(quest.titleKey, quest.title)
            : quest.title;
        if (typeof UI !== 'undefined' && typeof UI.showNotification === 'function') {
            UI.showNotification(`${quest.icon} ${questTitle} — ${completedLabel}`, 'success');
            return;
        }

        const notification = document.createElement('div');
        notification.className = 'quest-complete-notification';
        notification.innerHTML = `
            <div class="quest-icon">${quest.icon}</div>
            <div class="quest-info">
                <div class="quest-title">${questTitle}</div>
                <div class="quest-status">${completedLabel}</div>
            </div>
        `;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 4000);
    }

    showRewardNotification(quest) {
        const rewardLabel = typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('questCrystalsReward', '💎 +{0} crystals').replace('{0}', quest.reward) : `💎 +${quest.reward} crystals`;
        if (typeof UI !== 'undefined' && typeof UI.showNotification === 'function') {
            UI.showNotification(rewardLabel, 'reward');
            return;
        }

        const notification = document.createElement('div');
        notification.className = 'quest-reward-notification';
        notification.innerHTML = `
            <div class="reward-icon">💎</div>
            <div class="reward-text">${rewardLabel}</div>
        `;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    
    saveQuests() {
        if (typeof SaveManager !== 'undefined') {
            SaveManager.set('daily_quests', {
                quests: this.quests,
                lastRefresh: this.lastRefresh,
                refreshDateKey: this.refreshDateKey
            });
        }
    }

    loadQuests() {
        if (typeof SaveManager !== 'undefined') {
            const data = SaveManager.get('daily_quests', null);
            if (data) {
                this.quests = data.quests || [];
                this.lastRefresh = data.lastRefresh;
                this.refreshDateKey = data.refreshDateKey || null;
            }
        }
    }

    hasValidQuestState() {
        return Array.isArray(this.quests) && this.quests.length > 0 && Boolean(this.lastRefresh || this.refreshDateKey);
    }

    
    getTimeUntilRefresh() {
        const currentDate = this.getCurrentDate();
        const mskTime = new Date(currentDate.toLocaleString("en-US", {timeZone: "Europe/Moscow"}));
        
        
        const nextMidnight = new Date(mskTime);
        nextMidnight.setDate(nextMidnight.getDate() + 1);
        nextMidnight.setHours(0, 0, 0, 0);
        
        
        const diff = nextMidnight.getTime() - mskTime.getTime();
        
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        
        if (typeof LocalizationManager !== 'undefined') {
            if (hours > 0) {
                return LocalizationManager.t('questTimerHours', '{0}h {1}m').replace('{0}', hours).replace('{1}', minutes);
            }
            return LocalizationManager.t('questTimerMinutes', '{0}m').replace('{0}', minutes);
        }
        return hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
    }

    



    getCurrentDate() {
        const gp = window.GP || window.__GP_SDK_INSTANCE || window.gp || null;
        const raw = gp && gp.serverTime ? gp.serverTime : null;
        if (raw) {
            const date = new Date(raw);
            if (!Number.isNaN(date.getTime())) {
                return date;
            }
        }
        return new Date();
    }

    getRefreshDateKey() {
        const currentDate = this.getCurrentDate();
        const formatter = new Intl.DateTimeFormat('en-CA', {
            timeZone: 'Europe/Moscow',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        });
        return formatter.format(currentDate);
    }

    
    updateUI() {
        
        if (window.questUI) {
            window.questUI.update();
        }
    }

    
    getStats() {
        const completed = this.quests.filter(q => q.completed).length;
        const claimed = this.quests.filter(q => q.claimed).length;
        const totalReward = this.quests
            .filter(q => q.claimed)
            .reduce((sum, q) => sum + q.reward, 0);
        
        return {
            total: this.quests.length,
            completed,
            claimed,
            timeUntilRefresh: this.getTimeUntilRefresh(),
            totalReward
        };
    }
}


if (typeof module !== 'undefined' && module.exports) {
    module.exports = { QuestSystem, QUEST_DEFINITIONS };
}
