


class GardenSystem {
    constructor(initialGardenCount = 1) {
        this.gardens = [];
        this.maxGardens = 3;
        this.unlockedGardenCount = Math.min(initialGardenCount, this.maxGardens);
        this.seedsInInventory = 0;
        this.cellSize = 70; 
        this.cropGrowthDays = 3; 
        this.daysPassed = 0; 
        this.dayThreshold = 0.5; 
        
        this.initializeGardens();
    }
    
    initializeGardens() {
        for (let i = 0; i < this.maxGardens; i++) {
            this.gardens[i] = {
                id: i,
                unlocked: i < this.unlockedGardenCount,
                grid: this.createEmptyGrid()
            };
        }
    }
    
    createEmptyGrid() {
        const grid = [];
        for (let row = 0; row < 3; row++) {
            grid[row] = [];
            for (let col = 0; col < 3; col++) {
                grid[row][col] = {
                    planted: false,
                    daysSincePlanted: 0,
                    plantedDay: 0,
                    type: 'crop'
                };
            }
        }
        return grid;
    }
    
    plantSeed(gardenIdx, row, col) {
        if (!this.gardens[gardenIdx]?.unlocked) return false;
        if (this.seedsInInventory <= 0) return false;
        if (this.gardens[gardenIdx].grid[row][col].planted) return false;
        
        this.gardens[gardenIdx].grid[row][col].planted = true;
        this.gardens[gardenIdx].grid[row][col].plantedDay = this.daysPassed;
        this.gardens[gardenIdx].grid[row][col].daysSincePlanted = 0;
        this.seedsInInventory--;
        return true;
    }
    
    updateGrowth(currentDay) {
        this.daysPassed = currentDay;
        
        for (let g = 0; g < this.gardens.length; g++) {
            if (!this.gardens[g].unlocked) continue;
            
            for (let row = 0; row < 3; row++) {
                for (let col = 0; col < 3; col++) {
                    const cell = this.gardens[g].grid[row][col];
                    if (!cell.planted) continue;
                    
                    cell.daysSincePlanted = currentDay - cell.plantedDay;

                    
                    if (cell.daysSincePlanted >= this.cropGrowthDays) {
                        this.harvestAndReplant(g, row, col);
                    }
                }
            }
        }
    }
    
    harvestAndReplant(gardenIdx, row, col) {
        const cell = this.gardens[gardenIdx].grid[row][col];
        if (!cell.planted || cell.daysSincePlanted < this.cropGrowthDays) return false;
        
        
        
        if (Game && Game.gold !== undefined) {
            const currentWave = (Game.waveManager && Game.waveManager.wave) ? Game.waveManager.wave : 1;
            let harvestGold = 50 + Math.floor(5 * (currentWave - 1));
            
            
            if (Game.cardEffects) {
                harvestGold = Game.cardEffects.modifyHarvestGold(harvestGold);
            }

            const stageTheme = (typeof StageThemes !== 'undefined' && StageThemes && Game)
                ? StageThemes.getTheme(Game.currentStage)
                : null;
            const harvestThemeMult = stageTheme && stageTheme.economyBias && Number.isFinite(Number(stageTheme.economyBias.harvestGoldMult))
                ? Number(stageTheme.economyBias.harvestGoldMult)
                : 1;
            const harvestRunMult = (typeof RunModifiers !== 'undefined' && RunModifiers)
                ? (RunModifiers.getValue('harvestGoldMult', 1) || 1)
                : 1;
            harvestGold = Math.floor(harvestGold * harvestThemeMult * harvestRunMult);
            
            const finalHarvestGold = Game.applyGoldEventMultiplier
                ? Game.applyGoldEventMultiplier(harvestGold)
                : harvestGold;

            Game.gold += finalHarvestGold;
            
            if (typeof Game.createFloatingText === 'function') {
                const canvasCenterX = Game.canvas ? Game.canvas.width / 2 : 400;
                const canvasCenterY = Game.canvas ? Game.canvas.height / 2 : 300;
                Game.createFloatingText(canvasCenterX, canvasCenterY - 60, `+${finalHarvestGold} 💰🌱`, '#27ae60');
            }
        }
        
        
        if (this.seedsInInventory > 0) {
            cell.plantedDay = this.daysPassed;
            cell.daysSincePlanted = 0;
            this.seedsInInventory--;
            return true;
        } else {
            cell.planted = false;
            cell.daysSincePlanted = 0;
            cell.plantedDay = 0;
            return false;
        }
    }
    
    
    autoHarvestAndReplant(currentDay) {
        for (let g = 0; g < this.gardens.length; g++) {
            if (!this.gardens[g].unlocked) continue;
            
            for (let row = 0; row < 3; row++) {
                for (let col = 0; col < 3; col++) {
                    const cell = this.gardens[g].grid[row][col];
                    if (cell.planted && cell.daysSincePlanted >= this.cropGrowthDays) {
                        this.harvestAndReplant(g, row, col);
                    }
                }
            }
        }
    }
    
    unlockGarden(gardenIdx, crystalCost = 500) {
        if (gardenIdx >= this.maxGardens) return false;
        if (this.gardens[gardenIdx].unlocked) return false;
        
        
        this.gardens[gardenIdx].unlocked = true;
        this.unlockedGardenCount++;
        return true;
    }
    
    addSeeds(amount) {
        this.seedsInInventory += amount;
    }
    
    consumeSeeds(amount) {
        if (this.seedsInInventory >= amount) {
            this.seedsInInventory -= amount;
            return true;
        }
        return false;
    }
    
    getGarden(idx) {
        return this.gardens[idx] || null;
    }
    
    getSeedCount() {
        return this.seedsInInventory;
    }
    
    isGardenUnlocked(idx) {
        return this.gardens[idx]?.unlocked || false;
    }
    
    getUnlockedGardenCount() {
        return this.unlockedGardenCount;
    }
    
    
    toJSON() {
        return {
            gardens: this.gardens,
            unlockedGardenCount: this.unlockedGardenCount,
            seedsInInventory: this.seedsInInventory
        };
    }
    
    
    fromJSON(data) {
        if (!data) return;
        
        this.gardens = data.gardens ?? this.gardens;
        this.unlockedGardenCount = data.unlockedGardenCount ?? this.unlockedGardenCount;
        
        this.seedsInInventory = data.seedsInInventory ?? this.seedsInInventory;
    }
}
