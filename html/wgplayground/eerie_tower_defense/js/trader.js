



class Trader {
    
    static bonusImages = {};
    static imagesLoaded = false;

    static loadImages() {
        const paths = {
            'gold': 'assets/images/bonus_gold.png',
            'heal': 'assets/images/bonus_heal.png',
            'damage_boost': 'assets/images/bonus_damage.png',
            'speed_boost': 'assets/images/bonus_speed.png',
            'seeds': 'assets/images/bonus_seeds.png'
        };

        const promises = Object.entries(paths).map(([key, src]) => {
            return new Promise((resolve) => {
                const img = new Image();
                img.onload = () => {
                    Trader.bonusImages[key] = img;
                    resolve();
                };
                img.onerror = () => {
                    console.warn(`Failed to load trader icon: ${src}`);
                    resolve();
                };
                img.src = src;
            });
        });

        return Promise.all(promises).then(() => {
            Trader.imagesLoaded = true;
        });
    }

    constructor(canvas) {
        this.canvas = canvas;
        this.active = false;
        this.x = 0;
        this.y = 0;
        this.spawnTimer = 0;
        this.spawnInterval = 1800; 
        this.lifetime = 600; 
        this.life = 0;
        this.bobblePhase = 0;
        this.radius = 25;
        
        
        this.vx = 0;
        this.vy = 0;
        this.speed = 1.5;
        this.moveTimer = 0;
        this.changeDirInterval = 60; 
        
         
         const _t = (key, fallback, ...args) => {
             if (typeof LocalizationManager !== 'undefined') return LocalizationManager.t(key, fallback, ...args);
             return args.reduce((s, a, i) => s.replace(`{${i}}`, a), fallback);
         };
         
         this.bonuses = [
             { type: 'gold', amount: 65, icon: '💰', nameKey: 'traderOffer_gold_name', fallbackName: 'Кошель каравана', descKey: 'traderOffer_gold_desc', fallbackDesc: '+65 золота прямо сейчас' },
             { type: 'heal', amount: 36, icon: '❤️', nameKey: 'traderOffer_heal_name', fallbackName: 'Полевая починка', descKey: 'traderOffer_heal_desc', fallbackDesc: 'Восстановить 36 HP' },
             { type: 'damage_boost', amount: 1.45, duration: 300, icon: '⚔️', nameKey: 'traderOffer_damage_name', fallbackName: 'Закаленные болты', descKey: 'traderOffer_damage_desc', fallbackDesc: 'Урон x1.45 на 5 секунд' },
             { type: 'speed_boost', amount: 0.72, duration: 300, icon: '⚡', nameKey: 'traderOffer_speed_name', fallbackName: 'Боевой ритм', descKey: 'traderOffer_speed_desc', fallbackDesc: 'Скорость атаки +28% на 5 секунд' },
             { type: 'crystals', amount: 3, icon: '💎', nameKey: 'traderOffer_crystals_name', fallbackName: 'Карманные кристаллы', descKey: 'traderOffer_crystals_desc', fallbackDesc: '+3 кристалла' },
             { type: 'fortify', healthMult: 0.08, defenseFlat: 0.04, icon: '🛡️', nameKey: 'traderOffer_fortify_name', fallbackName: 'Укрепление', descKey: 'traderOffer_fortify_desc', fallbackDesc: '+8% HP и +4% защиты до конца забега' },
             { type: 'cursed_contract', gold: 120, crystals: 2, addModifier: 'gilded_debt', icon: '🕯️', nameKey: 'traderOffer_contract_name', fallbackName: 'Проклятый контракт', descKey: 'traderOffer_contract_desc', fallbackDesc: '+120 золота, +2 кристалла и долг до конца забега' }
          ];
         this.rewardedOffers = [
             { type: 'royal_cache', gold: 170, crystals: 4, icon: '👑', nameKey: 'traderRewarded_royalCache_name', fallbackName: 'Королевский запас', descKey: 'traderRewarded_royalCache_desc', fallbackDesc: '+170 золота и +4 кристалла' },
             { type: 'moon_arsenal', damageMult: 1.55, speedMult: 0.78, duration: 480, icon: '🌙', nameKey: 'traderRewarded_moonArsenal_name', fallbackName: 'Лунный арсенал', descKey: 'traderRewarded_moonArsenal_desc', fallbackDesc: 'Урон x1.55 и скорость атаки +22% на 8 секунд' },
             { type: 'bastion_banner', healthMult: 0.14, defenseFlat: 0.06, healPercent: 0.22, icon: '🏰', nameKey: 'traderRewarded_bastionBanner_name', fallbackName: 'Знамя бастиона', descKey: 'traderRewarded_bastionBanner_desc', fallbackDesc: '+14% HP, +6% защиты и лечение 22%' }
         ];
        this.currentOffers = [];
        this.currentBonus = null;
        this.currentRewardedOffer = null;
    }

    localize(key, fallback, ...args) {
        if (typeof LocalizationManager !== 'undefined') {
            return LocalizationManager.t(key, fallback, ...args);
        }
        return args.reduce((s, a, i) => String(s).replace(`{${i}}`, a), fallback);
    }

    getOfferMeta(offer) {
        if (!offer) {
            return { name: '', description: '', icon: '🎁' };
        }
        return {
            name: this.localize(offer.nameKey, offer.fallbackName || offer.type),
            description: this.localize(offer.descKey, offer.fallbackDesc || ''),
            icon: offer.icon || '🎁'
        };
    }

    rollOffers() {
        const offers = this.bonuses
            .map((offer) => ({ ...offer, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .slice(0, 3)
            .map(({ sort, ...offer }) => offer);

        const pactOffer = this.rollPactOffer();
        if (pactOffer) {
            offers.push(pactOffer);
        }

        this.currentOffers = offers;
        this.currentBonus = offers[0] || null;
        const rewardedPool = this.rewardedOffers
            .map((offer) => ({ ...offer, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ sort, ...offer }) => offer);
        this.currentRewardedOffer = rewardedPool[0] || null;
    }

    rollPactOffer() {
        if (typeof RunModifiers === 'undefined' || !RunModifiers || typeof RunModifiers.getPactOffers !== 'function') {
            return null;
        }
        if (typeof Game === 'undefined' || !Game || !Game.wave) {
            return null;
        }
        if (Math.random() > 0.4) {
            return null;
        }

        const pactOffers = RunModifiers.getPactOffers({
            stage: Game.currentStage || 1,
            wave: Game.wave || 1,
            source: 'trader',
            limit: 1
        });
        const pactOffer = pactOffers[0];
        if (!pactOffer) {
            return null;
        }

        const name = this.localize(pactOffer.labelKey, pactOffer.pactId || 'Пакт');
        const description = this.localize(pactOffer.descKey, 'Эффект сохранится до конца забега');
        return {
            type: 'pact',
            pactId: pactOffer.pactId,
            addModifier: pactOffer.pactId,
            addModifierSource: 'pact',
            icon: pactOffer.icon || '✦',
            nameKey: pactOffer.labelKey,
            fallbackName: name,
            descKey: pactOffer.descKey,
            fallbackDesc: description
        };
    }

    spawnAt(x, y) {
        this.active = true;
        this.spawnTimer = 0;
        this.life = this.lifetime;
        this.moveTimer = 0;
        this.vx = 0;
        this.vy = 0;

        const margin = 100;
        const bottomMargin = 150;
        this.x = Math.max(margin, Math.min(this.canvas.width - margin, x));
        this.y = Math.max(margin, Math.min(this.canvas.height - bottomMargin, y));

        this.rollOffers();

        if (typeof AudioManager !== 'undefined' && AudioManager.playSound) {
            AudioManager.playSound('traderArrival');
        }
    }
    
    update(deltaTime = 16.6) {
        const dtScale = Math.max(0.25, Math.min(4, deltaTime / 16.6 || 1));
        
        if (!this.active) {
            this.spawnTimer += dtScale;
            
            const baseChance = 0.05;
            const stageTheme = (typeof StageThemes !== 'undefined' && StageThemes && typeof Game !== 'undefined' && Game)
                ? StageThemes.getTheme(Game.currentStage)
                : null;
            const stageSpawnMult = stageTheme && stageTheme.economyBias && Number.isFinite(Number(stageTheme.economyBias.traderSpawnMult))
                ? Number(stageTheme.economyBias.traderSpawnMult)
                : 1;
            const runSpawnMult = (typeof RunModifiers !== 'undefined' && RunModifiers)
                ? (RunModifiers.getValue('traderSpawnMult', 1) || 1)
                : 1;
            if (this.spawnTimer >= this.spawnInterval && Math.random() < (baseChance * stageSpawnMult * runSpawnMult)) {
                this.spawn();
            }
        } else {
            this.life -= dtScale;
            this.bobblePhase += 0.05 * dtScale;
            
            
            this.moveTimer += dtScale;
            if (this.moveTimer >= this.changeDirInterval) {
                this.moveTimer = 0;
                
                const angle = Math.random() * Math.PI * 2;
                this.vx = Math.cos(angle) * this.speed;
                this.vy = Math.sin(angle) * this.speed;
            }
            
            
            this.x += this.vx * dtScale;
            this.y += this.vy * dtScale;
            
            
            const margin = 50;
            const bottomMargin = 150; 
            if (this.x < margin) { this.x = margin; this.vx *= -1; }
            if (this.x > this.canvas.width - margin) { this.x = this.canvas.width - margin; this.vx *= -1; }
            if (this.y < margin) { this.y = margin; this.vy *= -1; }
            if (this.y > this.canvas.height - bottomMargin) { this.y = this.canvas.height - bottomMargin; this.vy *= -1; }
            
            if (this.life <= 0) {
                this.active = false;
            }
        }
    }
    
    spawn() {
        const margin = 100;
        const bottomMargin = 150; 
        this.spawnAt(
            margin + Math.random() * (this.canvas.width - margin * 2),
            margin + Math.random() * (this.canvas.height - margin - bottomMargin)
        );
    }
    
    onClick(game) {
        if (!this.active || !this.currentOffers || this.currentOffers.length === 0) return false;

        if (typeof UI !== 'undefined' && UI && typeof UI.showTraderChoiceModal === 'function' && game && typeof game.beginModalPause === 'function') {
            game.beginModalPause('trader_choice');
            UI.showTraderChoiceModal({
                offers: this.currentOffers.map((offer, index) => {
                    const meta = this.getOfferMeta(offer);
                    return { index, ...offer, displayName: meta.name, displayDescription: meta.description, displayIcon: meta.icon };
                }),
                rewardedOffer: this.currentRewardedOffer ? (() => {
                    const meta = this.getOfferMeta(this.currentRewardedOffer);
                    return {
                        ...this.currentRewardedOffer,
                        displayName: meta.name,
                        displayDescription: meta.description,
                        displayIcon: meta.icon
                    };
                })() : null
            });
            return true;
        }

        return this.applyOffer(game, 0);
    }

    applyOffer(game, offerIndex, options = null) {
        if (!this.active) return false;

        const settings = options && typeof options === 'object' ? options : {};
        const useRewardedOffer = Boolean(settings.rewarded);
        const safeIndex = Math.max(0, Math.min(this.currentOffers.length - 1, Number(offerIndex) || 0));
        const bonus = useRewardedOffer ? this.currentRewardedOffer : this.currentOffers[safeIndex];
        if (!bonus) {
            return false;
        }

        switch(bonus.type) {
            case 'gold':
                const finalGoldAmount = game.applyGoldEventMultiplier
                    ? game.applyGoldEventMultiplier(bonus.amount)
                    : bonus.amount;
                game.gold += finalGoldAmount;
                game.stats.totalGold += finalGoldAmount;
                game.createFloatingText(this.x, this.y - 30, `+${finalGoldAmount} 💰`, '#f1c40f');
                UI.updateGold(game.gold);
                
                if (typeof inGameUpgrades !== 'undefined') {
                    inGameUpgrades.updateUI();
                }
                break;
            case 'heal':
                game.tower.heal(bonus.amount);
                game.createFloatingText(this.x, this.y - 30, `+${bonus.amount} ❤️`, '#e74c3c');
                UI.updateHealth(game.tower.health);
                break;
            case 'damage_boost':
                const originalDamage = game.tower.damage;
                game.tower.damage *= bonus.amount;
                const dmgLabel = typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('traderDamageBonusLabel', '⚔️ Урон') : '⚔️ Урон';
                game.addActiveBonus('damage', originalDamage, bonus.duration, dmgLabel, '#f39c12');
                game.createFloatingText(this.x, this.y - 30, typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('traderDamageBoost', `Урон x${bonus.amount} (5с)`, bonus.amount) : `Урон x${bonus.amount} ⚔️`, '#f39c12');
                break;
            case 'speed_boost':
                const originalSpeed = game.tower.attackSpeed;
                game.tower.attackSpeed *= bonus.amount;
                const spdLabel = typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('traderSpeedBonusLabel', '⚡ Скорость') : '⚡ Скорость';
                game.addActiveBonus('speed', originalSpeed, bonus.duration, spdLabel, '#3498db');
                game.createFloatingText(this.x, this.y - 30, typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('traderSpeedBoost', 'Скорость +30% (5с)') : 'Скорость +30% ⚡', '#3498db');
                break;
            case 'crystals':
                if (typeof game.addCrystalsDirect === 'function') {
                    game.addCrystalsDirect(bonus.amount);
                }
                game.createFloatingText(this.x, this.y - 30, `+${bonus.amount} 💎`, '#8e7cff');
                break;
            case 'fortify':
                game._eventTowerBonuses = game._eventTowerBonuses || {};
                game._eventTowerBonuses.maxHealthMult = (game._eventTowerBonuses.maxHealthMult || 0) + (bonus.healthMult || 0);
                game._eventTowerBonuses.defenseFlat = (game._eventTowerBonuses.defenseFlat || 0) + (bonus.defenseFlat || 0);
                if (typeof game.refreshRunDerivedBonuses === 'function') {
                    game.refreshRunDerivedBonuses();
                }
                game.createFloatingText(this.x, this.y - 30, this.localize('traderOfferFortifyApplied', 'Башня укреплена'), '#8fd8fb');
                break;
            case 'cursed_contract':
                if (bonus.gold) {
                    const finalGold = game.applyGoldEventMultiplier ? game.applyGoldEventMultiplier(bonus.gold) : bonus.gold;
                    game.gold += finalGold;
                    if (game.stats) {
                        game.stats.totalGold += finalGold;
                    }
                }
                if (bonus.crystals && typeof game.addCrystalsDirect === 'function') {
                    game.addCrystalsDirect(bonus.crystals);
                }
                if (bonus.addModifier && typeof RunModifiers !== 'undefined' && RunModifiers && typeof RunModifiers.addModifier === 'function') {
                    RunModifiers.addModifier(bonus.addModifier, 'trader');
                    if (typeof game.refreshRunDerivedBonuses === 'function') {
                        game.refreshRunDerivedBonuses();
                    }
                    if (typeof UI !== 'undefined' && UI.updateModifierHud) {
                        UI.updateModifierHud();
                    }
                }
                if (typeof UI !== 'undefined' && UI.updateGold) {
                    UI.updateGold(game.gold);
                }
                game.createFloatingText(this.x, this.y - 30, this.localize('traderOfferContractApplied', 'Сделка заключена'), '#f0c674');
                break;
            case 'pact':
                if (bonus.addModifier && typeof RunModifiers !== 'undefined' && RunModifiers && typeof RunModifiers.addModifier === 'function') {
                    const added = RunModifiers.addModifier(bonus.addModifier, bonus.addModifierSource || 'pact');
                    if (added && typeof game.refreshRunDerivedBonuses === 'function') {
                        game.refreshRunDerivedBonuses();
                    }
                    if (added && typeof UI !== 'undefined' && UI.updateModifierHud) {
                        UI.updateModifierHud();
                    }
                }
                game.createFloatingText(this.x, this.y - 30, this.localize('traderOfferPactApplied', 'Пакт заключен'), '#d98cff');
                break;
            case 'royal_cache':
                if (bonus.gold) {
                    const rewardedGold = game.applyGoldEventMultiplier ? game.applyGoldEventMultiplier(bonus.gold) : bonus.gold;
                    game.gold += rewardedGold;
                    if (game.stats) {
                        game.stats.totalGold += rewardedGold;
                    }
                }
                if (bonus.crystals && typeof game.addCrystalsDirect === 'function') {
                    game.addCrystalsDirect(bonus.crystals);
                }
                if (typeof UI !== 'undefined' && UI.updateGold) {
                    UI.updateGold(game.gold);
                }
                game.createFloatingText(this.x, this.y - 30, this.localize('traderRewardedClaimed', 'Эксклюзивная сделка получена'), '#74d8ff', { ignoreGameSpeed: true });
                break;
            case 'moon_arsenal':
                const moonBaseDamage = game.tower.damage;
                const moonBaseSpeed = game.tower.attackSpeed;
                game.tower.damage *= bonus.damageMult;
                game.tower.attackSpeed *= bonus.speedMult;
                game.addActiveBonus('damage', moonBaseDamage, bonus.duration, this.localize('traderRewardedDamageLabel', '🌙 Арсенал'), '#a88cff');
                game.addActiveBonus('speed', moonBaseSpeed, bonus.duration, this.localize('traderRewardedSpeedLabel', '⚡ Темп'), '#74d8ff');
                game.createFloatingText(this.x, this.y - 30, this.localize('traderRewardedClaimed', 'Эксклюзивная сделка получена'), '#a88cff', { ignoreGameSpeed: true });
                break;
            case 'bastion_banner':
                game._eventTowerBonuses = game._eventTowerBonuses || {};
                game._eventTowerBonuses.maxHealthMult = (game._eventTowerBonuses.maxHealthMult || 0) + (bonus.healthMult || 0);
                game._eventTowerBonuses.defenseFlat = (game._eventTowerBonuses.defenseFlat || 0) + (bonus.defenseFlat || 0);
                if (typeof game.refreshRunDerivedBonuses === 'function') {
                    game.refreshRunDerivedBonuses();
                }
                if (bonus.healPercent && game.tower && typeof game.tower.heal === 'function') {
                    game.tower.heal(Math.max(1, Math.floor(game.tower.maxHealth * bonus.healPercent)));
                    if (typeof UI !== 'undefined' && UI.updateHealth) {
                        UI.updateHealth(game.tower.health, game.tower.maxHealth);
                    }
                }
                game.createFloatingText(this.x, this.y - 30, this.localize('traderRewardedClaimed', 'Эксклюзивная сделка получена'), '#8fd8fb', { ignoreGameSpeed: true });
                break;

        }

        this.active = false;
        this.currentOffers = [];
        this.currentBonus = null;
        this.currentRewardedOffer = null;
        return true;
    }
    
    checkClick(x, y) {
        if (!this.active) return false;
        const dx = x - this.x;
        const dy = y - this.y;
        
        return Math.sqrt(dx * dx + dy * dy) <= this.radius * 2;
    }
    
    draw(ctx) {
        if (!this.active) return;
        
        ctx.save();
        
        
        const bobble = Math.sin(this.bobblePhase) * 3;
        
         
         ctx.shadowBlur = 12;
         ctx.shadowColor = 'rgba(241, 196, 15, 0.6)';
         
         
         ctx.fillStyle = '#d4ac0d';
         ctx.beginPath();
         ctx.ellipse(this.x, this.y + bobble, this.radius, this.radius * 1.2, 0, 0, Math.PI * 2);
         ctx.fill();
         
         
         if (Trader.imagesLoaded && Trader.bonusImages[this.currentBonus.type]) {
             const img = Trader.bonusImages[this.currentBonus.type];
             const size = this.radius * 2.0; 
             ctx.drawImage(img, this.x - size/2, this.y + bobble - size/2 - 5, size, size);
         } else {
             ctx.font = '28px Arial'; 
             ctx.textAlign = 'center';
             ctx.textBaseline = 'middle';
             ctx.fillText(this.currentBonus.icon, this.x, this.y + bobble - 5);
         }
         
           
            let bonusLabel = this.localize('traderChoiceTitle', 'Бродячий торговец');
         
         ctx.font = 'bold 16px Arial';
         ctx.fillStyle = '#FFD700';
         ctx.strokeStyle = '#000000';
         ctx.lineWidth = 3;
         ctx.textAlign = 'center';
         ctx.textBaseline = 'bottom';
         ctx.strokeText(bonusLabel, this.x, this.y - this.radius - 20);
         ctx.fillText(bonusLabel, this.x, this.y - this.radius - 20);
         
         
         ctx.font = 'bold 12px Arial';
         ctx.fillStyle = 'white';
         ctx.strokeStyle = '#000000';
         ctx.lineWidth = 2;
         ctx.textAlign = 'center';
         ctx.textBaseline = 'middle';
          const clickHint = typeof LocalizationManager !== 'undefined' ? LocalizationManager.t('traderClickHint', 'ВЫБОР!') : 'ВЫБОР!';
         ctx.strokeText(clickHint, this.x, this.y + bobble + 25);
         ctx.fillText(clickHint, this.x, this.y + bobble + 25);
         
         ctx.restore();
    }
}
