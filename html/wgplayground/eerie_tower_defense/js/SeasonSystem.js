(function initSeasonSystem(global) {
    const DAYS_PER_SEASON = 28;
    const TIER_POINTS = 120;
    const MAX_TIERS = 20;
    const EPOCH = Date.UTC(2026, 0, 5, 0, 0, 0, 0);

    const DEFAULT_REWARDS = [
        { tier: 1, free: { type: 'crystals', amount: 40 } },
        { tier: 2, free: { type: 'freeCard', amount: 1 } },
        { tier: 3, free: { type: 'crystals', amount: 60 } },
        { tier: 4, free: { type: 'crystals', amount: 70 } },
        { tier: 5, free: { type: 'freeCard', amount: 1 } },
        { tier: 6, free: { type: 'crystals', amount: 90 } },
        { tier: 7, free: { type: 'crystals', amount: 100 } },
        { tier: 8, free: { type: 'freeCard', amount: 1 } },
        { tier: 9, free: { type: 'crystals', amount: 120 } },
        { tier: 10, free: { type: 'crystals', amount: 140 } },
        { tier: 11, free: { type: 'freeCard', amount: 1 } },
        { tier: 12, free: { type: 'crystals', amount: 160 } },
        { tier: 13, free: { type: 'crystals', amount: 180 } },
        { tier: 14, free: { type: 'freeCard', amount: 1 } },
        { tier: 15, free: { type: 'crystals', amount: 200 } },
        { tier: 16, free: { type: 'crystals', amount: 220 } },
        { tier: 17, free: { type: 'freeCard', amount: 1 } },
        { tier: 18, free: { type: 'crystals', amount: 240 } },
        { tier: 19, free: { type: 'freeCard', amount: 1 } },
        { tier: 20, free: { type: 'crystals', amount: 300 } }
    ];

    function now() {
        return Date.now();
    }

    function getSeasonIndex(timestamp) {
        const elapsed = Math.max(0, timestamp - EPOCH);
        return Math.floor(elapsed / (DAYS_PER_SEASON * 24 * 60 * 60 * 1000));
    }

    function getSeasonId(timestamp) {
        return `season_${getSeasonIndex(timestamp) + 1}`;
    }

    function getSeasonStart(timestamp) {
        const index = getSeasonIndex(timestamp);
        return EPOCH + index * DAYS_PER_SEASON * 24 * 60 * 60 * 1000;
    }

    function createMissionPool() {
        return [
            { id: 'waves', target: 30, progress: 0, type: 'waves', points: 80 },
            { id: 'elite_choices', target: 4, progress: 0, type: 'elite_choices', points: 70 },
            { id: 'stage_clear', target: 1, progress: 0, type: 'stage_clear', points: 90 }
        ];
    }

    function createDefaultState(timestamp) {
        return {
            seasonId: getSeasonId(timestamp),
            seasonStart: getSeasonStart(timestamp),
            points: 0,
            claimedTiers: [],
            missions: createMissionPool(),
            lastUpdatedAt: timestamp
        };
    }

    const manager = {
        init() {
            this.ensureSeason();
        },

        ensureSeason() {
            if (typeof SaveManager === 'undefined' || !SaveManager) {
                return createDefaultState(now());
            }

            const timestamp = now();
            const currentId = getSeasonId(timestamp);
            const saved = SaveManager.getSeasonState ? SaveManager.getSeasonState() : null;
            const state = saved && saved.seasonId === currentId
                ? saved
                : createDefaultState(timestamp);

            if (!saved || saved.seasonId !== currentId) {
                if (SaveManager.setSeasonState) {
                    SaveManager.setSeasonState(state);
                }
            }

            return state;
        },

        getState() {
            return this.ensureSeason();
        },

        setState(nextState) {
            if (typeof SaveManager !== 'undefined' && SaveManager && SaveManager.setSeasonState) {
                SaveManager.setSeasonState(nextState);
            }
        },

        addPoints(amount) {
            const state = this.getState();
            const safeAmount = Math.max(0, Math.floor(Number(amount) || 0));
            if (safeAmount <= 0) {
                return state;
            }
            state.points += safeAmount;
            state.lastUpdatedAt = now();
            this.setState(state);
            return state;
        },

        updateMission(type, amount) {
            const state = this.getState();
            let missionCompleted = false;
            let rewardPoints = 0;

            state.missions.forEach((mission) => {
                if (mission.type !== type || mission.completed) {
                    return;
                }

                mission.progress = Math.min(mission.target, mission.progress + amount);
                if (mission.progress >= mission.target) {
                    mission.completed = true;
                    missionCompleted = true;
                    rewardPoints += mission.points;
                }
            });

            if (rewardPoints > 0) {
                state.points += rewardPoints;
            }
            this.setState(state);

            return {
                missionCompleted,
                rewardPoints,
                state
            };
        },

        onWaveCompleted(wave, stage) {
            const stageBonus = Math.max(0, (Math.floor(Number(stage) || 1) - 1) * 2);
            let pointsGained = 8 + stageBonus;
            pointsGained = 0;
            const missionResult = this.updateMission('waves', 1);
            pointsGained += missionResult.rewardPoints || 0;
            if (Number(wave) % 10 === 0) {
                const milestonePoints = 20 + stageBonus;
                this.addPoints(milestonePoints);
                pointsGained += milestonePoints;
            }
            return {
                pointsGained,
                missionCompleted: Boolean(missionResult.missionCompleted)
            };
        },

        onEliteEventChosen() {
            let pointsGained = 10;
            this.addPoints(pointsGained);
            const missionResult = this.updateMission('elite_choices', 1);
            pointsGained += missionResult.rewardPoints || 0;
            return {
                pointsGained,
                missionCompleted: Boolean(missionResult.missionCompleted)
            };
        },

        onRunEnded(stats) {
            if (!stats) {
                return { pointsGained: 0, missionCompleted: false };
            }
            const wave = Math.max(0, Math.floor(Number(stats.wave) || 0));
            const stage = Math.max(1, Math.floor(Number(stats.stage) || 1));
            const milestonesCleared = Math.floor(wave / 10);
            let pointsGained = milestonesCleared > 0 ? (milestonesCleared * 6 + (stage - 1) * 2) : 0;
            this.addPoints(pointsGained);
            let missionCompleted = false;
            if (wave >= 15) {
                const missionResult = this.updateMission('stage_clear', 1);
                pointsGained += missionResult.rewardPoints || 0;
                missionCompleted = Boolean(missionResult.missionCompleted);
            }
            return {
                pointsGained,
                missionCompleted
            };
        },

        getTier(points) {
            const safePoints = Math.max(0, Math.floor(Number(points) || 0));
            return Math.min(MAX_TIERS, Math.floor(safePoints / TIER_POINTS) + 1);
        },

        getTierProgress(points) {
            const safePoints = Math.max(0, Math.floor(Number(points) || 0));
            const tier = this.getTier(safePoints);
            const tierStart = (tier - 1) * TIER_POINTS;
            const progress = Math.min(TIER_POINTS, safePoints - tierStart);
            return {
                tier,
                current: progress,
                required: TIER_POINTS
            };
        },

        getRewards() {
            return DEFAULT_REWARDS;
        },

        getUnlockedTier(points = null) {
            const targetPoints = points === null ? this.getState().points : points;
            return Math.min(MAX_TIERS, Math.floor(Math.max(0, Number(targetPoints) || 0) / TIER_POINTS));
        },

        getClaimableReward() {
            const state = this.getState();
            const unlockedTier = this.getUnlockedTier(state.points);
            return DEFAULT_REWARDS.find((entry) => entry.tier <= unlockedTier && !state.claimedTiers.includes(entry.tier)) || null;
        },

        getNextReward() {
            const state = this.getState();
            const unlockedTier = this.getUnlockedTier(state.points);
            return DEFAULT_REWARDS.find((entry) => entry.tier > unlockedTier) || null;
        },

        claimNextReward() {
            const state = this.getState();
            const reward = this.getClaimableReward();

            if (!reward) {
                return { success: false };
            }

            const grantedRewards = [];
            const freeGranted = this.applyReward(reward.free);
            if (freeGranted) {
                grantedRewards.push(freeGranted);
            }
            state.claimedTiers.push(reward.tier);

            this.setState(state);
            return {
                success: true,
                tier: reward.tier,
                reward,
                grantedRewards
            };
        },

        applyReward(reward) {
            if (!reward || typeof SaveManager === 'undefined' || !SaveManager) {
                return null;
            }

            if (reward.type === 'crystals') {
                SaveManager.addCrystals(reward.amount);
                return { type: 'crystals', amount: reward.amount };
            }

            if (reward.type === 'seeds') {
                if (typeof SaveManager.addSeedsForNextGame === 'function') {
                    SaveManager.addSeedsForNextGame(reward.amount);
                }
                return { type: 'seeds', amount: reward.amount };
            }

            if (reward.type === 'item') {
                if (typeof SaveManager.addItem === 'function') {
                    SaveManager.addItem(reward.itemId, reward.amount);
                }
                return { type: 'item', itemId: reward.itemId, amount: reward.amount };
            }

            if (reward.type === 'freeCard' && typeof SaveManager.grantRandomCard === 'function') {
                const cards = [];
                for (let i = 0; i < Math.max(1, reward.amount || 1); i++) {
                    const grantedCard = SaveManager.grantRandomCard();
                    if (grantedCard) {
                        cards.push(grantedCard);
                    }
                }
                return { type: 'freeCard', amount: cards.length || reward.amount || 1, cards };
            }

            return null;
        }
    };

    global.SeasonSystem = manager;
})(window);
