



class ArrowInventory {
    constructor() {
        
        const _t = (key, fallback) => typeof LocalizationManager !== 'undefined' ? LocalizationManager.t(key, fallback) : fallback;
        
        this.arrowTypes = {
            normal: {
                get name() { return _t('arrowNormal', 'Обычные'); },
                icon: '🏹',
                damage: 1.0,
                count: Infinity, 
                color: '#f39c12',
                get description() { return _t('arrowNormalDesc', 'Бесконечные обычные стрелы'); }
            }
        };
        
        this.currentType = 'normal';
        
        
        this.items = {
            thunderStrike: {
                get name() { return _t('itemThunderStrike', 'Удар грома'); },
                icon: 'assets/images/thunder.png', 
                count: 0,
                get description() { return _t('itemThunderStrikeDesc', 'Наносит огромный урон всем врагам на экране'); }
            },
            frenzyPotion: {
                get name() { return _t('itemFrenzy', 'Зелье безумия'); },
                icon: 'assets/images/frenzy.png', 
                count: 0,
                get description() { return _t('itemFrenzyDesc', 'Удваивает спавн врагов и бонус золота на 20 сек'); }
            }
        };

        
        this.loadArrows();
        this.loadItems();
    }
    
    
    loadItems() {
        const saved = SaveManager.getItems();
        if (saved) {
            this.items.thunderStrike.count = saved.thunderStrike || 0;
            this.items.frenzyPotion.count = saved.frenzyPotion || 0;
        }
    }
    
    
    useItem(type) {
        if (this.items[type] && this.items[type].count > 0) {
            
            if (type === 'frenzyPotion' && window.Game && window.Game.frenzyTimer > 0) {
                return false;
            }

            if (SaveManager.useItem(type)) {
                this.items[type].count--;
                
                if (typeof UI !== 'undefined' && UI.updateItemsUI) {
                    UI.updateItemsUI();
                }
                return true;
            }
        }
        return false;
    }
    
    
    loadArrows() {
        if (typeof SaveManager !== 'undefined' && SaveManager.getArrows && SaveManager.setArrows) {
            const current = SaveManager.getArrows();
            if ((current.explosive || 0) > 0 || (current.heavy || 0) > 0 || (current.smoke || 0) > 0) {
                SaveManager.setArrows({ explosive: 0, heavy: 0, smoke: 0 });
            }
        }
        this.currentType = 'normal';
    }
    
    
    saveArrows() {
        return;
    }
    
    
    addArrows(type, amount) {
        return false;
    }
    
    
    useArrow() {
        const arrow = this.arrowTypes[this.currentType];
        if (arrow.count > 0 || arrow.count === Infinity) {
            if (arrow.count !== Infinity) {
                arrow.count--;
                this.saveArrows(); 
                
                
                if (UI.updateArrowCount) {
                    UI.updateArrowCount(this.currentType, arrow.count);
                }
                
                
                if (arrow.count === 0) {
                    this.currentType = 'normal';
                    if (UI.updateArrowSelection) {
                        UI.updateArrowSelection('normal');
                    }
                }
            }
            return this.currentType;
        }
        
        this.currentType = 'normal';
        if (UI.updateArrowSelection) {
            UI.updateArrowSelection('normal');
        }
        return 'normal';
    }
    
    
    switchType(type) {
        if (this.arrowTypes[type]) {
            
            if (type === 'normal' || this.arrowTypes[type].count > 0) {
                this.currentType = type;
                return true;
            }
        }
        return false;
    }
    
    
    getCurrentType() {
        return this.currentType;
    }
    
    
    getArrowInfo(type) {
        return this.arrowTypes[type] || this.arrowTypes.normal;
    }
    
    
    getCount(type) {
        return this.arrowTypes[type] ? this.arrowTypes[type].count : 0;
    }
    
    
    getAvailableTypes() {
        return Object.keys(this.arrowTypes).filter(type => {
            return type === 'normal' || this.arrowTypes[type].count > 0;
        });
    }
    
    
    hasSpecialArrows() {
        return false;
    }
}
