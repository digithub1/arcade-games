





class DaySystem {
    constructor() {
        this.currentDay = 1;
        this.daysCompleted = 0;
        this.lastBonusDay = 0; 
        this.weeklyBonuses = {
            gold: 0,
            crystals: 0
        };
        
        
        this.isShowingDayScreen = false;
        
        
        this.onWeeklyBonus = null;
    }

    


    init(onWeeklyBonusCallback) {
        this.currentDay = 1;
        this.daysCompleted = 0;
        this.lastBonusDay = 0;
        this.onWeeklyBonus = onWeeklyBonusCallback;
        this.updateWeeklyBonuses();
    }

    


    updateWeeklyBonuses() {
        
        if (typeof inGameUpgrades !== 'undefined') {
            this.weeklyBonuses.gold = inGameUpgrades.getValue('weeklyGoldBonus');
            this.weeklyBonuses.crystals = inGameUpgrades.getValue('weeklyCrystalBonus');
        }
    }

    


    completeDay() {
        this.daysCompleted = this.currentDay;
        
        
        this.updateWeeklyBonuses();
        
        
        const isWeekly = false;
        let bonusResult = null;
        
        if (this.currentDay > this.lastBonusDay) {
            bonusResult = this.giveWeeklyBonus();
            this.lastBonusDay = this.currentDay;
        }
        
        
        this.currentDay++;
        
        return {
            day: this.daysCompleted,
            isWeekly,
            bonus: bonusResult
        };
    }

    


    giveWeeklyBonus() {
        const bonuses = {
            gold: Math.floor(this.weeklyBonuses.gold),
            crystals: Math.floor(this.weeklyBonuses.crystals)
        };

        
        if (this.onWeeklyBonus && typeof this.onWeeklyBonus === 'function') {
            this.onWeeklyBonus(bonuses);
        }

        return bonuses;
    }

    


    getCurrentDay() {
        return this.currentDay;
    }

    


    getDaysCompleted() {
        return this.daysCompleted;
    }

    


    getDaysUntilNextBonus() {
        const nextBonusDay = Math.ceil(this.currentDay / 7) * 7;
        return nextBonusDay - this.currentDay + 1;
    }

    


    showDayCompleteScreen(result, callback) {
        this.isShowingDayScreen = true;

        const isWeekly = result.isWeekly;
        const hasBonus = result.bonus && (result.bonus.gold > 0 || result.bonus.crystals > 0);

        const L = typeof LocalizationManager !== 'undefined' ? LocalizationManager : null;
        const t = (key, fallback, ...args) => L ? L.t(key, fallback, ...args) : args.reduce((s, a, i) => s.replace(`{${i}}`, a), fallback);

        const dayTitle = t('dayComplete', `День ${result.day} завершен...`, result.day);

        let weeklyLine = null;
        if (isWeekly) {
            if (hasBonus) {
                const parts = [];
                if (result.bonus.gold > 0) {
                    parts.push(`💰 ${t('weekBonusGold', `+${result.bonus.gold} золота`, result.bonus.gold)}`);
                }
                if (result.bonus.crystals > 0) {
                    parts.push(`💎 ${t('weekBonusCrystals', `+${result.bonus.crystals} кристаллов`, result.bonus.crystals)}`);
                }
                weeklyLine = parts.join('   ');
            } else {
                weeklyLine = t('weekBonusHint', 'Купите улучшения для получения недельных бонусов!');
            }
        }

        if (typeof Game !== 'undefined' && Game.effects) {
            const rootStyles = (typeof document !== 'undefined' && document.documentElement)
                ? getComputedStyle(document.documentElement)
                : null;
            const getVar = (name, fallback) => {
                if (!rootStyles) return fallback;
                const value = rootStyles.getPropertyValue(name);
                return value && value.trim() ? value.trim() : fallback;
            };

            Game.effects.push({
                x: Game.tower ? Game.tower.x : 960,
                y: Game.tower ? (Game.tower.y - 150) : 390,
                life: isWeekly ? 200 : 150,
                title: dayTitle,
                extra: weeklyLine,
                theme: {
                    bgTop: getVar('--dc-bg-top', 'rgba(7, 16, 28, 0.95)'),
                    bgMid: getVar('--dc-bg-mid', 'rgba(6, 17, 30, 0.95)'),
                    border: getVar('--dc-border', 'rgba(136, 213, 250, 0.36)'),
                    borderStrong: getVar('--dc-border-strong', 'rgba(198, 236, 255, 0.9)'),
                    accent: getVar('--dc-accent', '#61b4e2'),
                    text: getVar('--dc-text', '#e4f5ff'),
                    textMuted: getVar('--dc-text-muted', '#c0d9ea')
                },
                roundedRect(ctx, x, y, width, height, radius) {
                    const r = Math.min(radius, width * 0.5, height * 0.5);
                    ctx.beginPath();
                    ctx.moveTo(x + r, y);
                    ctx.lineTo(x + width - r, y);
                    ctx.quadraticCurveTo(x + width, y, x + width, y + r);
                    ctx.lineTo(x + width, y + height - r);
                    ctx.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
                    ctx.lineTo(x + r, y + height);
                    ctx.quadraticCurveTo(x, y + height, x, y + height - r);
                    ctx.lineTo(x, y + r);
                    ctx.quadraticCurveTo(x, y, x + r, y);
                    ctx.closePath();
                },
                update(gameSpeed = 1) {
                    this.life -= gameSpeed;
                    if (this.life <= 0) this.markedForDeletion = true;
                },
                draw(ctx) {
                    const alpha = Math.max(0, Math.min(1, this.life / 30));
                    const pulse = 1 + Math.sin((150 - this.life) * 0.08) * 0.04;

                    ctx.save();
                    ctx.globalAlpha = alpha;
                    ctx.translate(this.x, this.y);
                    ctx.scale(pulse, pulse);

                    this.roundedRect(ctx, -364, -90, 728, 168, 22);
                    ctx.fillStyle = 'rgba(0, 0, 0, 0.42)';
                    ctx.fill();

                    const panelGradient = ctx.createLinearGradient(0, -88, 0, 76);
                    panelGradient.addColorStop(0, this.theme.bgTop);
                    panelGradient.addColorStop(1, this.theme.bgMid);
                    this.roundedRect(ctx, -360, -86, 720, 160, 20);
                    ctx.fillStyle = panelGradient;
                    ctx.fill();

                    this.roundedRect(ctx, -360, -86, 720, 160, 20);
                    ctx.lineWidth = 2;
                    ctx.strokeStyle = this.theme.border;
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.moveTo(-250, -34);
                    ctx.lineTo(250, -34);
                    ctx.lineWidth = 3;
                    ctx.strokeStyle = this.theme.borderStrong;
                    ctx.globalAlpha = alpha * 0.7;
                    ctx.stroke();
                    ctx.globalAlpha = alpha;

                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';

                    ctx.font = '700 42px Trebuchet MS';
                    ctx.fillStyle = this.theme.text;
                    ctx.shadowBlur = 18;
                    ctx.shadowColor = this.theme.accent;
                    ctx.fillText(this.title, 0, -4);

                    if (this.extra) {
                        ctx.font = '700 21px Trebuchet MS';
                        ctx.fillStyle = this.theme.textMuted;
                        ctx.shadowBlur = 10;
                        ctx.shadowColor = this.theme.accent;
                        ctx.fillText(this.extra, 0, 34);
                    }

                    ctx.restore();
                },
                markedForDeletion: false
            });
        }

        setTimeout(() => {
            this.hideDayCompleteScreen();
            if (callback) callback();
        }, isWeekly ? 3000 : 2200);
    }

    


    hideDayCompleteScreen() {
        this.isShowingDayScreen = false;
    }

    


    isShowingScreen() {
        return this.isShowingDayScreen;
    }

    


    reset() {
        this.currentDay = 1;
        this.daysCompleted = 0;
        this.lastBonusDay = 0;
        this.weeklyBonuses = { gold: 0, crystals: 0 };
        this.isShowingDayScreen = false;
    }

    


    getStats() {
        return {
            currentDay: this.currentDay,
            daysCompleted: this.daysCompleted,
            weeksCompleted: Math.floor(this.daysCompleted / 7),
            nextBonusIn: this.getDaysUntilNextBonus(),
            weeklyBonuses: this.weeklyBonuses
        };
    }

    


    serialize() {
        return {
            currentDay: this.currentDay,
            daysCompleted: this.daysCompleted,
            lastBonusDay: this.lastBonusDay,
            weeklyBonuses: this.weeklyBonuses
        };
    }

    


    deserialize(data) {
        if (data) {
            
            this.currentDay = data.currentDay ?? 1;
            this.daysCompleted = data.daysCompleted ?? 0;
            this.lastBonusDay = data.lastBonusDay ?? 0;
            this.weeklyBonuses = data.weeklyBonuses ?? { gold: 0, crystals: 0 };
        }
    }
}


const daySystem = new DaySystem();


if (typeof module !== 'undefined' && module.exports) {
    module.exports = DaySystem;
}
