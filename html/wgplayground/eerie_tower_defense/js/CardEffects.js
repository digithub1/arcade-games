




class CardEffects {
    constructor(game) {
        this.game = game;
        this.activeCards = [];
        this.activeSynergies = [];
        this.tagCounts = {};
        this.synergyBonuses = this.createEmptySynergyBonuses();
        
        
        this.berserkActive = false;
        this.berserkDuration = 0;
        this.berserkCooldown = 0;
        this.berserkMaxCooldown = 60000; 
        
        
        this.darkPactWaveBonus = 0;
        
        
        this.lastCheckedDay = 0;
    }

    createEmptySynergyBonuses() {
        return {
            waveGoldMult: 1,
            waveCrystalMult: 1,
            bossRewardMult: 1,
            enemyHealthMult: 1,
            enemySpeedMult: 1,
            harvestGoldMult: 1,
            xpMult: 1,
            tower: {
                damageMult: 0,
                attackSpeedMult: 0,
                maxHealthMult: 0,
                rangeFlat: 0,
                healthRegenFlat: 0,
                defenseFlat: 0
            }
        };
    }
    
    


    loadActiveCards() {
        this.activeCards = SaveManager.getAltarCards() || [];
        console.log('📦 CardEffects: загружено карт из алтаря:', this.activeCards.length);
        this.rebuildPersistentBonuses();
    }

    recalculateSynergies() {
        this.tagCounts = {};
        this.activeSynergies = [];
        this.synergyBonuses = this.createEmptySynergyBonuses();

        this.activeCards.forEach((card) => {
            const tags = Array.isArray(card.tags) ? card.tags : [];
            tags.forEach((tag) => {
                this.tagCounts[tag] = (this.tagCounts[tag] || 0) + 1;
            });
        });

        const pushSynergy = (id, lineKey, fallback, applyFn) => {
            this.activeSynergies.push({ id, lineKey, fallback });
            if (typeof applyFn === 'function') {
                applyFn();
            }
        };

        if ((this.tagCounts.economy || 0) >= 2) {
            pushSynergy('economy_2', 'altarSynergy_economy_2', 'Экономика x2: +8% золота за волну', () => {
                this.synergyBonuses.waveGoldMult *= 1.08;
            });
        }
        if ((this.tagCounts.economy || 0) >= 3) {
            pushSynergy('economy_3', 'altarSynergy_economy_3', 'Экономика x3: +12% кристаллов за волну', () => {
                this.synergyBonuses.waveCrystalMult *= 1.12;
            });
        }
        if ((this.tagCounts.economy || 0) >= 5) {
            pushSynergy('economy_5', 'altarSynergy_economy_5', 'Экономика x5: +12% золота и +10% кристаллов за волну', () => {
                this.synergyBonuses.waveGoldMult *= 1.12;
                this.synergyBonuses.waveCrystalMult *= 1.1;
            });
        }
        if ((this.tagCounts.survival || 0) >= 2) {
            pushSynergy('survival_2', 'altarSynergy_survival_2', 'Выживание x2: +12% HP и +0.12 регена/сек', () => {
                this.synergyBonuses.tower.maxHealthMult += 0.12;
                this.synergyBonuses.tower.healthRegenFlat += 0.12;
            });
        }
        if ((this.tagCounts.survival || 0) >= 3) {
            pushSynergy('survival_3', 'altarSynergy_survival_3', 'Выживание x3: +5% защиты', () => {
                this.synergyBonuses.tower.defenseFlat += 0.05;
            });
        }
        if ((this.tagCounts.tempo || 0) >= 2) {
            pushSynergy('tempo_2', 'altarSynergy_tempo_2', 'Темп x2: +10% скорости атаки', () => {
                this.synergyBonuses.tower.attackSpeedMult += 0.1;
            });
        }
        if ((this.tagCounts.tempo || 0) >= 3) {
            pushSynergy('tempo_3', 'altarSynergy_tempo_3', 'Темп x3: +8% урона', () => {
                this.synergyBonuses.tower.damageMult += 0.08;
            });
        }
        if ((this.tagCounts.control || 0) >= 2) {
            pushSynergy('control_2', 'altarSynergy_control_2', 'Контроль x2: враги на 6% медленнее', () => {
                this.synergyBonuses.enemySpeedMult *= 0.94;
            });
        }
        if ((this.tagCounts.control || 0) >= 3) {
            pushSynergy('control_3', 'altarSynergy_control_3', 'Контроль x3: враги медленнее и башня получает +12 радиуса', () => {
                this.synergyBonuses.enemySpeedMult *= 0.95;
                this.synergyBonuses.tower.rangeFlat += 12;
            });
        }
        if ((this.tagCounts.risk || 0) >= 2) {
            pushSynergy('risk_2', 'altarSynergy_risk_2', 'Риск x2: +12% кристаллов, враги крепче', () => {
                this.synergyBonuses.waveCrystalMult *= 1.12;
                this.synergyBonuses.enemyHealthMult *= 1.05;
            });
        }
        if ((this.tagCounts.risk || 0) >= 3) {
            pushSynergy('risk_3', 'altarSynergy_risk_3', 'Риск x3: +10% урона башни и +8% HP врагов', () => {
                this.synergyBonuses.tower.damageMult += 0.1;
                this.synergyBonuses.enemyHealthMult *= 1.08;
            });
        }
        if ((this.tagCounts.boss || 0) >= 2) {
            pushSynergy('boss_2', 'altarSynergy_boss_2', 'Охота x2: +12% награда за боссов, +8% урон', () => {
                this.synergyBonuses.bossRewardMult *= 1.12;
                this.synergyBonuses.tower.damageMult += 0.08;
            });
        }
        if ((this.tagCounts.boss || 0) >= 3) {
            pushSynergy('boss_3', 'altarSynergy_boss_3', 'Охота x3: +18% награда за боссов и +6% золота за волну', () => {
                this.synergyBonuses.bossRewardMult *= 1.18;
                this.synergyBonuses.waveGoldMult *= 1.06;
            });
        }

        const activeGroups = Object.keys(this.tagCounts).filter((tag) => this.tagCounts[tag] > 0);
        if (activeGroups.length >= 5) {
            pushSynergy('rainbow_5', 'altarSynergy_rainbow_5', 'Пантеон x5: смешанный универсальный бонус', () => {
                this.synergyBonuses.waveGoldMult *= 1.05;
                this.synergyBonuses.waveCrystalMult *= 1.05;
                this.synergyBonuses.tower.attackSpeedMult += 0.05;
                this.synergyBonuses.tower.maxHealthMult += 0.05;
            });
        }
    }
    
    


    recalculateDarkPact() {
        this.darkPactWaveBonus = 0;

        this.activeCards.forEach((card) => {
            if (card.id !== 'card_darkPact') {
                return;
            }

            const values = typeof getCardEffectValues === 'function'
                ? getCardEffectValues(card)
                : null;
            this.darkPactWaveBonus += values && Number.isFinite(values.virtualWaveBonus)
                ? values.virtualWaveBonus
                : 2;
        });
        
        if (this.darkPactWaveBonus > 0) {
            console.log(`👹 Тёмный Пакт: +${this.darkPactWaveBonus} к сложности волн`);
        }
    }
    
    


    getVirtualWaveBonus() {
        return this.darkPactWaveBonus;
    }
    
    


    rebuildPersistentBonuses() {
        this.recalculateDarkPact();
        this.recalculateSynergies();

        let towerMaxHealthFlat = 0;
        let towerBaseHealthRegenFlat = 0;

        this.activeCards.forEach((card) => {
            const values = typeof getCardEffectValues === 'function'
                ? getCardEffectValues(card)
                : null;
            if (!values) {
                return;
            }

            towerMaxHealthFlat += values.towerMaxHealthFlat || 0;
            towerBaseHealthRegenFlat += values.towerBaseHealthRegenFlat || 0;

            this.synergyBonuses.waveGoldMult *= values.waveGoldMult || 1;
            this.synergyBonuses.waveCrystalMult *= values.waveCrystalMult || 1;
            this.synergyBonuses.bossRewardMult *= values.bossRewardMult || 1;
            this.synergyBonuses.enemyHealthMult *= values.enemyHealthMult || 1;
            this.synergyBonuses.enemySpeedMult *= values.enemySpeedMult || 1;
            this.synergyBonuses.harvestGoldMult *= values.harvestGoldMult || 1;
            this.synergyBonuses.xpMult *= values.xpMult || 1;

            this.synergyBonuses.tower.damageMult += values.towerDamageMult || 0;
            this.synergyBonuses.tower.attackSpeedMult += values.towerAttackSpeedMult || 0;
            this.synergyBonuses.tower.maxHealthMult += values.towerMaxHealthMult || 0;
            this.synergyBonuses.tower.rangeFlat += values.towerRangeFlat || 0;
            this.synergyBonuses.tower.healthRegenFlat += values.towerHealthRegenFlat || 0;
            this.synergyBonuses.tower.defenseFlat += values.towerDefenseFlat || 0;
        });

        if (!this.game || !this.game.tower) {
            return;
        }

        this.game.tower.cardBonuses.maxHealth = towerMaxHealthFlat;
        this.game.tower.cardBonuses.healthRegen = towerBaseHealthRegenFlat;
        this.applyTowerExternalBonuses();
    }




    applyStartEffects() {
        this.rebuildPersistentBonuses();

        const goldenStartCards = this.activeCards.filter(c => c.id === 'card_goldenStart');
        if (goldenStartCards.length > 0) {
            let totalGold = 0;
            goldenStartCards.forEach(card => {
                const values = typeof getCardEffectValues === 'function'
                    ? getCardEffectValues(card)
                    : null;
                totalGold += values && Number.isFinite(values.startGold) ? values.startGold : 0;
            });
            
            const finalGold = this.game.applyGoldEventMultiplier
                ? this.game.applyGoldEventMultiplier(totalGold)
                : totalGold;
            this.game.gold += finalGold;
            this.game.createFloatingText(
                this.game.canvas.width / 2,
                this.game.canvas.height / 2 - 100,
                `💰 Золотой Старт: +${finalGold}`,
                '#FFD700'
            );
            console.log(`💰 Золотой Старт: +${finalGold} золота`);
        }
    }

    applyTowerExternalBonuses() {
        if (!this.game || !this.game.tower) {
            return;
        }

        this.game.tower.externalBonuses = {
            damageMult: this.synergyBonuses.tower.damageMult,
            attackSpeedMult: this.synergyBonuses.tower.attackSpeedMult,
            maxHealthMult: this.synergyBonuses.tower.maxHealthMult,
            rangeFlat: this.synergyBonuses.tower.rangeFlat,
            healthRegenFlat: this.synergyBonuses.tower.healthRegenFlat,
            defenseFlat: this.synergyBonuses.tower.defenseFlat
        };

        const healthRatio = this.game.tower.maxHealth > 0 ? (this.game.tower.health / this.game.tower.maxHealth) : 1;
        this.game.tower.recalculateStats();
        this.game.tower.health = Math.min(this.game.tower.maxHealth, Math.max(1, Math.floor(this.game.tower.maxHealth * healthRatio)));
    }
    
    


    checkDailyEffects(currentDay) {
        if (currentDay === this.lastCheckedDay) return;
        this.lastCheckedDay = currentDay;
        
        
        if (currentDay > 0 && currentDay % 4 === 0) {
            const mineCards = this.activeCards.filter(c => c.id === 'card_crystalMine');
            if (mineCards.length > 0) {
                let totalCrystals = 0;
                mineCards.forEach(card => {
                    const values = typeof getCardEffectValues === 'function'
                        ? getCardEffectValues(card)
                        : null;
                    totalCrystals += values && Number.isFinite(values.dailyCrystals) ? values.dailyCrystals : 0;
                });
                
                this.game.addCrystalsDirect(totalCrystals);
                this.game.createFloatingText(
                    this.game.canvas.width / 2,
                    this.game.canvas.height / 2 - 80,
                    `💎 Шахта: +${totalCrystals}`,
                    '#9b59b6'
                );
                console.log(`💎 Кристальная Шахта: +${totalCrystals} кристаллов (день ${currentDay})`);
            }
        }
        
        
        if (currentDay > 0) {
            const goldenCards = this.activeCards.filter(c => c.id === 'card_goldenStart');
            if (goldenCards.length > 0) {
                let totalGold = 0;
                goldenCards.forEach(card => {
                    const values = typeof getCardEffectValues === 'function'
                        ? getCardEffectValues(card)
                        : null;
                    totalGold += values && Number.isFinite(values.dailyGold) ? values.dailyGold : 0;
                });
                
                const finalGold = this.game.applyGoldEventMultiplier
                    ? this.game.applyGoldEventMultiplier(totalGold)
                    : totalGold;
                this.game.gold += finalGold;
                this.game.createFloatingText(
                    this.game.canvas.width / 2,
                    this.game.canvas.height / 2 - 60,
                    `💰 За день: +${finalGold}`,
                    '#FFD700'
                );
                console.log(`💰 Золотой Старт (дневной): +${finalGold} золота`);
            }
        }
        
        
        if (currentDay > 0 && currentDay % 7 === 0) {
            const darkCards = this.activeCards.filter(c => c.id === 'card_darkPact');
            if (darkCards.length > 0) {
                let totalCrystals = 0;
                darkCards.forEach(card => {
                    const values = typeof getCardEffectValues === 'function'
                        ? getCardEffectValues(card)
                        : null;
                    totalCrystals += values && Number.isFinite(values.darkPactCrystals) ? values.darkPactCrystals : 0;
                });
                
                this.game.addCrystalsDirect(totalCrystals);
                this.game.createFloatingText(
                    this.game.canvas.width / 2,
                    this.game.canvas.height / 2 - 100,
                    `👹 Тёмный Пакт: +${totalCrystals} 💎`,
                    '#8b0000'
                );
                console.log(`👹 Тёмный Пакт: +${totalCrystals} кристаллов (день ${currentDay})`);
            }
        }
    }
    
    


    modifyHarvestGold(baseGold) {
        const farmerCards = this.activeCards.filter(c => c.id === 'card_farmerFortune');
        if (farmerCards.length === 0) return baseGold;
        
        let bonus = 0;
        farmerCards.forEach(card => {
            const values = typeof getCardEffectValues === 'function'
                ? getCardEffectValues(card)
                : null;
            bonus += values && Number.isFinite(values.harvestGoldFlat) ? values.harvestGoldFlat : 0;
        });
        
        const withCards = baseGold + bonus;
        return Math.max(0, Math.floor(withCards * (this.synergyBonuses.harvestGoldMult || 1)));
    }
    
    


    modifyMushroomGold(baseGold) {
        const farmerCards = this.activeCards.filter(c => c.id === 'card_farmerFortune');
        if (farmerCards.length === 0) return baseGold;
        
        let bonus = 0;
        farmerCards.forEach(card => {
            const values = typeof getCardEffectValues === 'function'
                ? getCardEffectValues(card)
                : null;
            bonus += values && Number.isFinite(values.mushroomGoldFlat) ? values.mushroomGoldFlat : 0;
        });
        
        return Math.max(0, Math.floor((baseGold + bonus) * (this.synergyBonuses.harvestGoldMult || 1)));
    }
    
    



    modifyXPDrop(baseXP) {
        return Math.max(0, Math.floor(baseXP * (this.synergyBonuses.xpMult || 1)));
    }

    getWaveGoldMultiplier() {
        return this.synergyBonuses.waveGoldMult || 1;
    }

    getWaveCrystalMultiplier() {
        return this.synergyBonuses.waveCrystalMult || 1;
    }

    getEnemyHealthMultiplier() {
        return this.synergyBonuses.enemyHealthMult || 1;
    }

    getEnemySpeedMultiplier() {
        return this.synergyBonuses.enemySpeedMult || 1;
    }

    getBossRewardMultiplier() {
        return this.synergyBonuses.bossRewardMult || 1;
    }

    getActiveSynergies() {
        return this.activeSynergies.map((entry) => {
            const text = (typeof LocalizationManager !== 'undefined' && LocalizationManager.t)
                ? LocalizationManager.t(entry.lineKey, entry.fallback)
                : entry.fallback;
            return {
                id: entry.id,
                text
            };
        });
    }

    getNextSynergyHints() {
        const hints = [];
        const pushHint = (tag, required, key, fallback) => {
            const current = this.tagCounts[tag] || 0;
            if (current > 0 && current < required) {
                const text = (typeof LocalizationManager !== 'undefined' && LocalizationManager.t)
                    ? LocalizationManager.t(key, fallback, required - current)
                    : fallback.replace('{0}', required - current);
                hints.push(text);
            }
        };

        pushHint('economy', 2, 'altarHint_economy', 'Еще {0} карта экономики до бонуса');
        pushHint('survival', 2, 'altarHint_survival', 'Еще {0} карта выживания до бонуса');
        pushHint('tempo', 2, 'altarHint_tempo', 'Еще {0} карта темпа до бонуса');
        pushHint('control', 2, 'altarHint_control', 'Еще {0} карта контроля до бонуса');
        pushHint('risk', 2, 'altarHint_risk', 'Еще {0} риск-карта до бонуса');
        pushHint('boss', 2, 'altarHint_boss', 'Еще {0} карта охоты до бонуса');
        return hints.slice(0, 3);
    }

    



    getXPOrbSpawnMultiplier() {
        const wisdomCards = this.activeCards.filter(c => c.id === 'card_wisdom');
        if (wisdomCards.length === 0) return 1;
        
        let totalChance = 0;
        wisdomCards.forEach(card => {
            const values = typeof getCardEffectValues === 'function'
                ? getCardEffectValues(card)
                : null;
            totalChance += values && Number.isFinite(values.tripleXpChance) ? values.tripleXpChance : 0;
        });
        
        totalChance = Math.min(totalChance, 1.0); 
        
        if (Math.random() < totalChance) {
            console.log('⭐ Мудрость: x3 сферы опыта!');
            return 3;
        }

        return 1;
    }
    
    


    onCriticalHit() {
        const greedCards = this.activeCards.filter(c => c.id === 'card_bloodGreed');
        if (greedCards.length === 0) return;
        
        let totalGold = 0;
        greedCards.forEach(card => {
            const values = typeof getCardEffectValues === 'function'
                ? getCardEffectValues(card)
                : null;
            totalGold += values && Number.isFinite(values.critGoldFlat) ? values.critGoldFlat : 0;
        });
        
        const finalGold = this.game.applyGoldEventMultiplier
            ? this.game.applyGoldEventMultiplier(totalGold)
            : totalGold;
        this.game.gold += finalGold;
        
        
        this.game.createFloatingText(
            this.game.tower.x,
            this.game.tower.y - 50,
            `💥 +${finalGold}`,
            '#FFD700'
        );
    }
    
    


    activateBerserk() {
        if (this.berserkActive) {
            console.log('🔥 Берсерк уже активен');
            return false;
        }
        
        if (this.berserkCooldown > 0) {
            const remainingSec = Math.ceil(this.berserkCooldown / 1000);
            console.log(`⏳ Берсерк на перезарядке: ${remainingSec} сек`);
            
            const msg = LocalizationManager.t('berserkCooldown', 'Берсерк: откат {0} сек')
                .replace('{0}', remainingSec);
            this.game.createFloatingText(
                this.game.canvas.width / 2,
                this.game.canvas.height / 2 - 120,
                msg,
                '#ff6b6b'
            );
            return false;
        }
        
        const berserkCards = this.activeCards.filter(c => c.id === 'card_berserk');
        if (berserkCards.length === 0) {
            console.log('❌ Нет карты Берсерка в алтаре');
            return false;
        }
        
        
        let duration = 0;
        berserkCards.forEach(card => {
            const values = typeof getCardEffectValues === 'function'
                ? getCardEffectValues(card)
                : null;
            duration += values && Number.isFinite(values.berserkDurationMs) ? values.berserkDurationMs : 0;
        });
        
        this.berserkActive = true;
        this.berserkDuration = duration;
        this.berserkCooldown = this.berserkMaxCooldown;
        
        
        this.game.tower.attackSpeed *= 0.5; 
        
        const msg = LocalizationManager.t('berserkActivated', '🔥 БЕРСЕРК! ×2 скорость атаки!');
        this.game.createFloatingText(
            this.game.canvas.width / 2,
            this.game.canvas.height / 2 - 120,
            msg,
            '#ff4757'
        );
        
        console.log(`🔥 Берсерк активирован на ${duration / 1000} сек`);
        return true;
    }
    
    


    update(deltaTime) {
        const gameSpeed = this.game.gameSpeed || 1;
        const dt = deltaTime * gameSpeed;
        
        
        if (this.berserkActive) {
            this.berserkDuration -= dt;
            
            if (this.berserkDuration <= 0) {
                this.berserkActive = false;
                this.berserkDuration = 0;
                
                
                this.game.tower.attackSpeed *= 2; 
                
                const msg = LocalizationManager.t('berserkEnded', 'Берсерк закончился');
                this.game.createFloatingText(
                    this.game.canvas.width / 2,
                    this.game.canvas.height / 2 - 120,
                    msg,
                    '#95a5a6'
                );
                
                console.log('🔥 Берсерк закончился');
            }
        }
        
        
        if (this.berserkCooldown > 0) {
            this.berserkCooldown -= dt;
            if (this.berserkCooldown < 0) this.berserkCooldown = 0;
        }
    }
    
    


    getBerserkStatus() {
        const berserkCards = this.activeCards.filter(c => c.id === 'card_berserk');
        if (berserkCards.length === 0) {
            return { available: false };
        }
        
        return {
            available: true,
            active: this.berserkActive,
            duration: this.berserkDuration,
            cooldown: this.berserkCooldown,
            ready: this.berserkCooldown === 0 && !this.berserkActive
        };
    }
}


if (typeof module !== 'undefined' && module.exports) {
    module.exports = CardEffects;
}
