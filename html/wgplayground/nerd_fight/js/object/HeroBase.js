(function(){
// Put user code here //
 
//  End of user code  //

game.object.HeroBase = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.image = settings.image || game.textureMap.get('image')
		settings.framewidth = settings.framewidth || 100;
		settings.frameheight = settings.frameheight || 100;
		settings.anchorPoint = {
			x: 0.5,
			y: 0.5
		};

        // Put user code here //

		this.id = settings.id;
        this.folder = settings.folder;
        this.animationMotions = settings.animationMotions;
        settings.image = game.textureMap.get(this.folder);

        this.listAnimation = [];
        let animationKeyList = {}, // for add animation, motion with imageNameList
            imageNameList = [],
            fullMotions = game.util.getFullMotionList(this.id, this.animationMotions);
            
        fullMotions.forEach((motion) => {
            let imageNames = game.util.createImageNameList(motion.name, motion.count);
            animationKeyList[motion.name] = imageNames;
            this.listAnimation.push(imageNames);
            Array.prototype.push.apply(imageNameList, imageNames);
        });

        let atlasIndices = game.util.populateAtlasIndices(settings.image, imageNameList);
        game.util.spreadAll(settings, atlasIndices);
		//
		this.originX = x;
        this.originY = y;
        //
        //  End of user code  //

		x += me.game.viewport.width*0.5;
		y += me.game.viewport.height*0.5;
		this._super(me.Sprite, 'init', [x, y, settings]);

		this.alpha = 1;
		this.floating = true;
		this.alwaysUpdate = false;
		this.updateWhenPaused = false;
		this.isPersistent = false;
		this.var = {};

        // Put user code here //
		this.id = this.id.substring(0, 4);
		if(me.levelDirector.getCurrentLevel().name != 'Lab'){
            this.addAnimation("attack", this.listAnimation[0]);
            this.addAnimation("idle", this.listAnimation[1]);
            this.addAnimation("ko", this.listAnimation[2]);
            this.addAnimation("ko_loop", this.listAnimation[3]);
            this.addAnimation("special", this.listAnimation[4]);
		}
		else{
		    this.addAnimation("idle", this.listAnimation[0]);
		}
		
		this.trait = {};
		this.atkCounter = 0;
        this.target = null;
        this.atkSpeed = 1;
        this.cooldown = 3;
        this.cooldownTime = 0;
        this.respawnTime = 5;
        this.death = false;
        this.deathTime = 0;
        this.protectTime = 0;
        this.fullHP = 10;
        this.atkDmg = 1;
        this.spcValue = 1;
        this.onFrame = false;
        this.atkFrame = 1;
        this.spcFrame = 2;
        this.spcEffFrame = 0;
        this.atkEff = null;
        this.atkEffFrame = null;
        this.hpBar = null;
        this.hpRegen = 0;
        this.regenTime = 0;
        this.regenSpeed = 10;
        this.guard = 0;
        this.atkCounter = 0;
        this.atkCounterMax = 0;
        this.atkCounterBonus = 0;
        this.spcCounter = 0;
        this.spcCounterMax = 0;
        this.spcCounterBonus = 0;
        this.armor = 0;
        this.scene = me.levelDirector.getCurrentLevel().name;
        this.setCurrentAnimation('idle');
        this.getHiredHero = game.user.userData.hiredHero;
        this.restTime = 0;
        this.initLoad = false;
        
        this.GetBaseStatus();
        this.LoadTrait();
        this.LoadStatus();
        this.SpawnHPBar();
        
        this.initTimer = setInterval(function(){
            if(this.scene == 'Campaign' || this.scene == 'TimeAttack'){
                if(this.currentHP > 0){
                    //this.SfxPlay('intro');
                }
                
                if(this.spcEff != undefined){
                    this.eff = me.pool.pull(this.spcEff,
                                this.pos.x - (me.game.viewport.width / 2) + this.spcEffOffset.x
                            , this.pos.y - (me.game.viewport.height / 2) + this.spcEffOffset.y);
                    
                    me.game.world.addChild(this.eff, this.pos.z + 1);
                    this.eff.alpha = 0;
                }
                
                this.StartAllTimer();
                
                this.atkInterval = 2 - (this.atkSpeed - 2);
                this.timerAtk = setInterval(function(){
                    if(game.var.saving == false){
                        if(this.isCurrentAnimation('idle')){
                            if(game.var.enemyMngr.aliveList.length > 0){
                                if(this.GetEnemy()){
                                    this.onFrame = false;
                                    this.setAnimationFrame(0);
                                    this.SfxPlay('voiceAtk');
                                    this.setCurrentAnimation('attack', function(){
                                        this.setCurrentAnimation('idle');
                                    });
                                }
                            }
                            else{
                                this.target = null;
                            }
                        }
                    }
                }.bind(this), this.atkInterval * 1000);
                
                if(this.hpRegen > 0){
                    this.timerRegen = setInterval(function(){
                        if(game.var.saving == false){
                            if(!this.deathTimer == 0){
                                this.currentHP = Math.min(this.fullHP, this.currentHP + this.hpRegen);
                            }
                        }
                    }, this.regenSpeed * 1000);
                }
            }
            else if(this.scene == 'Lab'){
                //this.SfxPlay('intro');
            }
            clearInterval(this.initTimer);
        }.bind(this), 2000);
        //  End of user code  //
	},

	update: function(dt){
		var drawNextFrame = this._super(me.Sprite, 'update', [dt]);
        // Put user code here //
        if((this.scene == 'Campaign')
        || (this.scene == 'TimeAttack' && game.var.uiMngr.stageManager.currentTime > 0)){
            if(!this.death){
                if(this.isCurrentAnimation('attack')){
                    if(!this.onFrame){
                        if(this.getCurrentAnimationFrame() == this.atkFrame){
                            this.SfxPlay('atk');
                            this.onFrame = true;
                            if(this.GetEnemy()){
                                this.Attack();
                            }
                        }
                    }
                }
                else if(this.isCurrentAnimation('special')){
                    if(!this.onFrame){
                        if(!this.onEff && this.spcEff != null){
                            if(this.getCurrentAnimationFrame() == this.spcEffFrame){
                                this.onEff = true;
                                this.SpecialEff();
                            }
                        }
                    
                        if(this.getCurrentAnimationFrame() == this.spcFrame){
                            this.SfxPlay('special');
                            this.onFrame = true;
                            this.Special();
                        }
                    }
                }
                //console.log(this.cooldownTime);
            }
        }
        
        //  End of user code  //
		return drawNextFrame;
	},

	draw : function(renderer, rect) {
		this._super(me.Sprite, 'draw', [renderer, rect]);
        // Put user code here //
        
        //  End of user code  //
	},

	onActivateEvent : function() {
        // Put user code here //
        
        //  End of user code  //
	},

	onDeactivateEvent : function() {

        // Put user code here //
        if(this.timerAtk != undefined) clearInterval(this.timerAtk);
            
        if(this.timerSave != undefined) clearInterval(this.timerSave);
        
        if(this.timerCooldown != undefined) clearInterval(this.timerCooldown);
        
        if(this.timerDeath != undefined) clearInterval(this.timerDeath);
        
        if(this.timerProtect != undefined) clearInterval(this.timerProtect);
        
        if(this.timerRegen != undefined) clearInterval(this.timerRegen);
        
        if(this.currSfx != undefined) me.audio.stop(this.currSfx);
        
        if(this.atkSfx != undefined) me.audio.stop(this.atkSfx);
        
        if(this.spcSfx != undefined) me.audio.stop(this.spcSfx);
        
        if(this.voiceAtkSfx != undefined) me.audio.stop(this.voiceAtkSfx);
        
        if(this.voiceSpcSfx != undefined) me.audio.stop(this.voiceSpcSfx);
        
        clearInterval(this.initTimer);
        //  End of user code  //
	},

    // Put user code here //
    GetEnemy(){
        if(game.var.enemyMngr.aliveList.length > 0){
            if(this.target == null || !game.var.enemyMngr.aliveList.includes(this.target)){
                let rand = Math.floor(Math.random() * game.var.enemyMngr.aliveList.length); 
                this.target = game.var.enemyMngr.aliveList[rand];
                return true;
            }
            else{
                return true;
            }
        }
        else{
            this.target = null;
            return false;
        }
    },
    
    Attack : function(){
        let bonusDmg = 0;
        
        if(game.var.uiMngr.stageManager.wave == 10){
            if(this.atkCounterBonus > 0){
                this.atkCounter ++;
                if(this.atkCounter == this.atkCounterMax){
                    this.atkCounter = 0;
                    bonusDmg += (this.atkDmg * this.atkCounterBonus / 100);
                }
            }
        }
            
        let dmg = this.atkDmg + bonusDmg;
        
        
        if(game.var.uiMngr.barAtas.itemEff['I001'] == true)
            dmg = dmg * 2;
        
        game.var.enemyMngr.list[this.target].Hit(dmg);
    },
    
    StartSpecial : function(){
        if(this.deathTime == 0 && this.cooldownTime == 0){
            this.onFrame = false;
            this.setAnimationFrame(0);
            this.SfxPlay('voiceSpc');
            this.setCurrentAnimation('special', 
                    function(){
                    this.setCurrentAnimation('idle');
                }.bind(this));

            this.StartCooldownTimer();
        }
    },
    
    Special : function(){
        let bonusDmg = 0;
        if(game.var.uiMngr.stageManager.wave == 10){
            if(this.spcCounterBonus > 0){
                this.spcCounter ++;
                if(this.spcCounter == this.spcCounterMax){
                    this.spcCounter = 0;
                    bonusDmg += this.spcCounterBonus;
                }
            }
        }

        let dmg = this.spcValue + bonusDmg;
        if(game.var.uiMngr.barAtas.itemEff['I001'] == true)
            dmg = dmg * 2;
            
        let aliveList = game.util.cloneData(game.var.enemyMngr.aliveList);
        for(let i in aliveList){
            game.var.enemyMngr.list[aliveList[i]].Hit(dmg);
        }
    },
    
    SpecialEff : function(){
        this.eff.setAnimationFrame(0);
        this.eff.alpha = 1;
        this.eff.setCurrentAnimation('idle', function(){ 
            this.eff.alpha = 0;
            this.eff.setCurrentAnimation('stop');
            this.onEff = false;
            return false;
        }.bind(this));
    },
    
    Hit : function(damage){
        if(game.user.userData.tutorialStep <= 5){
            damage = 0;
        }
        else if(game.var.uiMngr.barAtas.itemEff["I003"] == true){
            damage = 0;
        }
        
        damage -= this.armor;
     
        if(this.deathTime == 0 && this.protectTime == 0){
            this.currentHP = Math.max(this.currentHP - damage, 0);
            this.hpBar.currentHP = this.currentHP;
                
            if(this.currentHP <= 0){
                let getIndex = game.var.heroMngr.aliveList.indexOf(this.index);
                game.var.heroMngr.aliveList.splice(getIndex, 1);
                
                this.SfxPlay('die');
                this.Die();
            }
            return true;
        }
        else{
            return false;
        }
    },
    
    Die : function(){
        this.setCurrentAnimation('ko', function(){ 
            this.setCurrentAnimation('ko_loop');
        });
        this.StartDeathTimer();
    },
    
    
    Respawn : function(){
        this.setCurrentAnimation('idle');
        this.target = null;
        this.currentHP = this.fullHP;
        this.hpBar.currentHP = this.currentHP;
        this.protectTime = 0;
        game.var.heroMngr.aliveList.push(this.index);
        
    },
    
    SpawnHPBar : function(){
        if(this.scene == "Campaign" || this.scene == "TimeAttack"){
            this.hpBar = me.pool.pull('HPBar', this.pos.x - (me.game.viewport.width / 2) - OFFSET(this.id, false).x,
                        this.pos.y - (me.game.viewport.height / 2) - OFFSET(this.id, false).y + this.HPBarPos().y, {
                                                char : this
                                            });
                                            
            me.game.world.addChild(this.hpBar, game.var.heroMngr.layerPos[this.index] + 1); 
        }
    },
    
    LvlUp : function(){
        this.level = this.getHiredHero[this.id].level;
        
        let heroInfo = game.controller.data.getDataHeroInfo();
        for(let i in heroInfo){
            if(heroInfo[i].id == this.id){
                this.fullHP = heroInfo[i].hp + ((this.level - 1) * heroInfo[i].hpGrowth);
                this.currentHP = Math.min(this.fullHP, this.currentHP + heroInfo[i].hpGrowth);
                this.atkDmg = heroInfo[i].atk + ((this.level - 1) * heroInfo[i].atkGrowth);
                this.cooldown = heroInfo[i].spcCooldown;
                this.respawnTime = heroInfo[i].timeOut;
                this.spcValue = heroInfo[i].spcValue;
                break;
            }
        } 
    },
    
    GetBaseStatus : function(){
        if(this.scene == "Campaign" || this.scene == "TimeAttack"){
            let heroInfo = game.controller.data.getDataHeroInfo();
            
            for(let i in heroInfo){
                if(heroInfo[i].id == this.id){
                    this.level = this.getHiredHero[this.id].level;
                    this.fullHP = heroInfo[i].hp + ((this.level - 1) * heroInfo[i].hpGrowth * SKIN_BUFF_HP(this.skin));
                    this.currentHP = this.fullHP;
                    this.atkDmg = heroInfo[i].atk + ((this.level - 1) * heroInfo[i].atkGrowth * SKIN_BUFF_ATK(this.skin));
                    this.cooldown = heroInfo[i].spcCooldown;
                    this.respawnTime = heroInfo[i].timeOut;
                    this.spcValue = heroInfo[i].spcValue;
                    this.atkSpeed = heroInfo[i].atkSpeed;
                    break;
                }
            }
        }
    },
    
    LoadStatus : function(){
        if(this.scene == 'Campaign'){
            if(this.getHiredHero[this.id].hp == 'full'){
                this.currentHP = this.fullHP;
            }
            else{
                this.currentHP = this.getHiredHero[this.id].hp;
            }
            
            if(this.getHiredHero[this.id].rest > 0){
                let now = new Date().getTime();
                this.restTime = (now - this.getHiredHero[this.id].rest) / 1000;
            }
            else{
                this.restTime = 0;
            }
            
            this.atkCounter = this.getHiredHero[this.id].atkCounter;
            this.spcCounter = this.getHiredHero[this.id].spcCounter;
        }
        else if(this.scene == 'TimeAttack'){
            this.currentHP = this.fullHP;
            game.var.heroMngr.aliveList.push(this.index);
        }
    },
    
    StartAllTimer : function(){
        if(this.scene == 'Campaign'){
            if(this.getHiredHero[this.id].cooldownTime > 0){
                this.StartCooldownTimer();
                this.cooldownTime = this.getHiredHero[this.id].cooldownTime;
            }
              
            if(this.getHiredHero[this.id].deathTime > 0){
                this.Die();
                this.deathTime = this.getHiredHero[this.id].deathTime;
            }
            else{
                game.var.heroMngr.aliveList.push(this.index);
            }
        }
    },
    
    LoadTrait : function(){
        this.trait = game.user.userData.traitHero[this.id];
        let traitInfo = game.controller.data.getDataTraitInfo();
        let index = 0;
        for(let i in traitInfo){
            if(traitInfo[i].id == this.id){
                index = i;
            }
        }
        
        let j = 0;
        for(let traitID in this.trait){
            if(traitID == 'trait1'){
                j = 0;
                this.cooldown -= (traitInfo[index].baseValue[j] + ((this.trait[traitID] - 1) * traitInfo[index].growthValue[j]));
            }
            else if(traitID == 'trait2'){
                j = 1;
                this.spcCounterMax = 2;
                this.spcCounterBonus = traitInfo[index].baseValue[j] + ((this.trait[traitID] - 1) * traitInfo[index].growthValue[j]);
            }
            else if(traitID == 'trait3'){
                j = 2;
                this.fullHP += (this.fullHP * ((traitInfo[index].baseValue[j] + ((this.trait[traitID] - 1) * traitInfo[index].growthValue[j])) / 100));
            }
            else if(traitID == 'trait4'){
                j = 3;
                this.respawn -= (traitInfo[index].baseValue[j] + ((this.trait[traitID] - 1) * traitInfo[index].growthValue[j]));
            }
            else if(traitID == 'trait5'){
                j = 4;
                this.hpRegen += (traitInfo[index].baseValue[j] + ((this.trait[traitID] - 1) * traitInfo[index].growthValue[j]));
            }
            else if(traitID == 'trait6'){
                j = 5;
                this.atkDmg += (traitInfo[index].baseValue[j] + ((this.trait[traitID] - 1) * traitInfo[index].growthValue[j]));
            }
            else if(traitID == 'trait7'){
                j = 6;
                this.atkSpeed -= (this.atkSpeed * ((traitInfo[index].baseValue[j] + ((this.trait[traitID] - 1) * traitInfo[index].growthValue[j])) / 100));
            }
        }
        
    },
    
    StartCooldownTimer : function(){
        let hourglass = 0;
        if(game.var.uiMngr.barAtas.itemEff['I000'] == true)
            hourglass = 1;
            
        this.cooldownTime = this.cooldown;
        this.timerCooldown = setInterval(function(){
            if(game.var.saving == false){
                this.cooldownTime = Math.max(0, this.cooldownTime - 1 - hourglass);
                
                if(this.cooldownTime == 0){
                    clearInterval(this.timerCooldown);
                }
            }
        }.bind(this), 1000);
    },
    
    StartDeathTimer : function(){
        let hourglass = 0;
        if(game.var.uiMngr.barAtas.itemEff['I000'] == true)
            hourglass = 1;
            
        this.deathTime = this.respawnTime;
        this.timerDeath = setInterval(function(){
            if(game.var.saving == false){
                this.deathTime = Math.max(0, this.deathTime - 1 - hourglass);
                
                if(this.deathTime == 0){
                    this.Respawn();
                    clearInterval(this.timerDeath);
                }
            }
        }.bind(this), 1000);
        
        //this.SaveStatus();
    },
    
    StartProtectTimer : function(time){
        if(this.deathTime == 0){
            this.protectTime = time;
            
            this.timerProtect = setInterval(function(){
                if(game.var.saving == false)
                    this.protectTime = Math.max(0, this.protectTime - 1);
            }.bind(this), 1000);
            
            //this.SaveStatus();
        }
    },
    
    HPBarPos : function(){
        switch(this.id) {
            case 'H005':
                return {x : 0, y : -320};
            break;
            default:
                return {x : 0, y : -320};
        }
    },
    
    SkinBuffAtk : function(skin){
        switch(skin) {
            case 'default':
                return 1;
            break;
            case 'common':
                return 1.25;
            break;
            case 'superb':
                return 1.5;
            break;
            case 'spectacular':
                return 2;
            break;
            case 'radical':
                return 2.25;
            break;
            case 'atomic':
                return 2.5;
            break;
            default:
                return 1;
        }
    },
    
    SkinBuffHP : function(skin){
        switch(skin) {
            case 'default':
                return 1;
            break;
            case 'common':
                return 1.5;
            break;
            case 'superb':
                return 2;
            break;
            case 'spectacular':
                return 2.5;
            break;
            case 'radical':
                return 3;
            break;
            case 'atomic':
                return 3.5;
            break;
            default:
                return 1;
        }
    },
    
    SfxPlay : function(audio){
        if(audio == 'intro'){
            this.currSfx = this.introSfx;
            game.util.audioPlay(this.introSfx, false);
        }
        else if(audio == 'die'){
            if(this.currSfx != undefined){
                me.audio.stop(this.currSfx);
            }
            
            let time = 500;
            if(this.id == 'H007') time = 2000;
            
            this.currSfx = this.hitSfx;
            game.util.audioPlay(this.hitSfx, false);
            
            
            if(this.dieSfx != undefined){
                this.playDieSfx = false;
                this.dieSfxTimer =  setTimeout(function(){
                    if(this.playDieSfx == false){
                        this.playDieSfx = true;
                        this.currSfx = this.dieSfx;
                        game.util.audioPlay(this.dieSfx, false);
                    }
                    clearTimeout(this.dieSfxTimer);
                }.bind(this), time);
            }
        }
        else if(audio == 'voiceAtk'){
            this.currSfx = this.voiceAtkSfx;
            game.util.audioPlay(this.voiceAtkSfx, false);
        }
        else if(audio == 'atk'){
            game.util.audioPlay(this.atkSfx, false);
        }
        else if(audio == 'special'){
            if(this.spcSfx != undefined)
                game.util.audioPlay(this.spcSfx, false);
        }
        else if(audio == 'voiceSpc'){
            if(this.voiceSpcSfx != undefined){
                if(this.currSfx != undefined && this.currSfx != this.voiceAtkSfx){
                    me.audio.stop(this.currSfx);
                }
                
                this.currSfx = this.voiceSpcSfx;
                game.util.audioPlay(this.voiceSpcSfx, false);
            }
        }
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();