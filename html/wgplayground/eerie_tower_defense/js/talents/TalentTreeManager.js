



class TalentTreeManager {
    constructor() {
        this.storageKey = (typeof SaveManager !== 'undefined' && SaveManager.KEYS && SaveManager.KEYS.TALENT_TREE)
            ? SaveManager.KEYS.TALENT_TREE
            : 'td_talent_tree';
        this.nodes = this.createNodes();
        this.state = this.loadState();
    }

    createNodes() {
        return {
            
            attack_ballistics_1: {
                id: 'attack_ballistics_1',
                branch: 'attack',
                icon: '🏹',
                name: 'Баллистика I',
                description: '+6% к урону',
                cost: 1,
                prereq: [],
                effect: { damageMult: 0.06 }
            },
            attack_quickdraw: {
                id: 'attack_quickdraw',
                branch: 'attack',
                icon: '⚡',
                name: 'Быстрые руки',
                description: '+8% к скорости атаки',
                cost: 1,
                prereq: ['attack_ballistics_1'],
                effect: { attackSpeedMult: 0.08 }
            },
            attack_overpressure: {
                id: 'attack_overpressure',
                branch: 'attack',
                icon: '💥',
                isKeystone: true,
                name: 'Перегрузка',
                description: 'Каждый 8-й выстрел наносит +40% урона',
                cost: 1,
                prereq: ['attack_quickdraw'],
                effect: { overpressureEveryShots: 8, overpressureDamageMult: 0.4 }
            },

            
            defense_fortified: {
                id: 'defense_fortified',
                branch: 'defense',
                icon: '🧱',
                name: 'Укрепление стен',
                description: '+12% к макс. здоровью',
                cost: 1,
                prereq: [],
                effect: { maxHealthMult: 0.12 }
            },
            defense_recovery: {
                id: 'defense_recovery',
                branch: 'defense',
                icon: '🛠️',
                name: 'Ремонт',
                description: '+0.25/с к регенерации',
                cost: 1,
                prereq: ['defense_fortified'],
                effect: { healthRegenFlat: 0.25 }
            },
            defense_bastion: {
                id: 'defense_bastion',
                branch: 'defense',
                icon: '🛡️',
                isKeystone: true,
                name: 'Последний бастион',
                description: 'При HP < 25% даёт щит 30% урона на 4с (КД 25с)',
                cost: 1,
                prereq: ['defense_recovery'],
                effect: { lowHpShieldDamageReduction: 0.3, lowHpShieldDurationSec: 4, lowHpShieldCooldownSec: 25 }
            },

            
            utility_economy: {
                id: 'utility_economy',
                branch: 'utility',
                icon: '💰',
                name: 'Военная экономика',
                description: '+8% золота за день',
                cost: 1,
                prereq: [],
                effect: { dayGoldMult: 0.08 }
            },
            utility_fieldengineer: {
                id: 'utility_fieldengineer',
                branch: 'utility',
                icon: '🔧',
                name: 'Полевой инженер',
                description: '+1 кристалл за каждый завершённый день',
                cost: 1,
                prereq: ['utility_economy'],
                effect: { dayCrystalFlat: 1 }
            },
            utility_momentum: {
                id: 'utility_momentum',
                branch: 'utility',
                icon: '📈',
                isKeystone: true,
                name: 'Инерция',
                description: '+5% золота за волну',
                cost: 1,
                prereq: ['utility_fieldengineer'],
                effect: { waveGoldMult: 0.05 }
            }
        };
    }

    loadState() {
        const raw = SaveManager.get(this.storageKey, null);
        if (!raw || typeof raw !== 'object') {
            return { unlocked: {} };
        }
        return {
            unlocked: raw.unlocked && typeof raw.unlocked === 'object' ? raw.unlocked : {}
        };
    }

    saveState() {
        SaveManager.set(this.storageKey, this.state);
    }

    reloadState() {
        this.state = this.loadState();
    }

    reset() {
        this.state = { unlocked: {} };
        this.saveState();
    }

    getBestWave() {
        return SaveManager.getBestWave() || 0;
    }

    getEarnedPoints(bestWave = this.getBestWave()) {
        if (bestWave < 50) return 0;
        return 1 + Math.floor((bestWave - 50) / 25);
    }

    getSpentPoints() {
        return Object.keys(this.state.unlocked).length;
    }

    getAvailablePoints() {
        return Math.max(0, this.getEarnedPoints() - this.getSpentPoints());
    }

    grantDebugPoint() {
        const currentBest = this.getBestWave();
        const currentEarned = this.getEarnedPoints(currentBest);
        const targetWave = currentEarned <= 0 ? 50 : 50 + currentEarned * 25;

        SaveManager.updateBestWave(Math.max(currentBest, targetWave));
        return SaveManager.getBestWave();
    }

    isUnlocked(nodeId) {
        return Boolean(this.state.unlocked[nodeId]);
    }

    canUnlock(nodeId) {
        const node = this.nodes[nodeId];
        if (!node) return { ok: false, reason: 'node_missing' };
        if (this.isUnlocked(nodeId)) return { ok: false, reason: 'already_unlocked' };
        if (this.getAvailablePoints() < node.cost) return { ok: false, reason: 'not_enough_points' };

        for (let i = 0; i < node.prereq.length; i++) {
            if (!this.isUnlocked(node.prereq[i])) {
                return { ok: false, reason: 'prereq_missing' };
            }
        }

        return { ok: true };
    }

    unlock(nodeId) {
        const check = this.canUnlock(nodeId);
        if (!check.ok) {
            return { success: false, reason: check.reason };
        }

        this.state.unlocked[nodeId] = true;
        this.saveState();
        return { success: true };
    }

    getNodesByBranch(branch) {
        return Object.values(this.nodes).filter((node) => node.branch === branch);
    }

    getEffects() {
        const total = {
            damageMult: 0,
            attackSpeedMult: 0,
            maxHealthMult: 0,
            healthRegenFlat: 0,
            waveGoldMult: 0,
            dayGoldMult: 0,
            dayCrystalFlat: 0,
            overpressureEveryShots: 0,
            overpressureDamageMult: 0,
            lowHpShieldDamageReduction: 0,
            lowHpShieldDurationSec: 0,
            lowHpShieldCooldownSec: 0
        };

        Object.keys(this.state.unlocked).forEach((nodeId) => {
            const node = this.nodes[nodeId];
            if (!node || !node.effect) return;
            Object.keys(node.effect).forEach((key) => {
                const val = node.effect[key];
                if (typeof val === 'number') {
                    if (key === 'overpressureEveryShots') {
                        total[key] = val;
                    } else {
                        total[key] += val;
                    }
                }
            });
        });

        return total;
    }
}

const TalentTree = new TalentTreeManager();
