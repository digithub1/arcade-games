(function(){
// Put user code here //
 
//  End of user code  //

game.object.EnemyBase = me.Sprite.extend({
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
        let vars = ['id', 'level', 'index', 'delay'];
        verify(settings, vars);
		game.util.spread(this, settings, vars);
		
		this.addAnimation("attack", this.listAnimation[0]);
		this.addAnimation("entrance", this.listAnimation[1]);
        this.addAnimation("idle", this.listAnimation[2]);
        this.addAnimation("ko", this.listAnimation[3]);
		//
		this.initWidth = this.width;
		this.initHeight = this.height;
        this.onTapHit = false;
        this.fullHP = 3;
        this.currentHP = this.fullHP;
        this.onEntrance = true;
        this.atkSpeed = 1;
        this.atkTime = this.atkSpeed;
        this.stunTime = 0;
        this.cooldown = 0;
        this.cooldownTime = 0;
        this.spcEff = null;
        this.spcValue = null;
        this.atkDmg = 1;
        this.atkFrame = 1;
        this.death = false;
        this.deathTime = 0.75;
        this.star = 10;
        this.medal = 10;
        this.candy = 10;
        this.removed = false;
        this.hpBar = null;
        this.dropItem = [];
        this.drop = ENEMY_DROP;
        this.onFrame = false;
        this.type = 'regular';
        this.scene = me.levelDirector.getCurrentLevel().name;
        this.spcProjectile = null;
        this.setCurrentAnimation('idle');
        this.stun = false;
        
        let enemyInfo = game.controller.data.getDataEnemyInfo();
        for(let i in enemyInfo){
            if(enemyInfo[i].id == this.id){
                this.fullHP = enemyInfo[i].hp * Math.max(1, (this.level - 1) * 5);
                this.atkDmg = enemyInfo[i].atk * Math.max(1, (this.level - 1) * 5);
                this.type = enemyInfo[i].type;
                this.currentHP = this.fullHP;
                if(this.type == 'boss'){
                    this.spcValue = enemyInfo[i].spcValue;
                    this.cooldown = enemyInfo[i].spcCooldown;
                    this.cooldownTime = this.cooldown;
                }
            }
        }
                    
        if(this.type == "easy"){
            this.star = 10 * Math.pow(3, this.level - 1);
            this.medal = 20 * Math.pow(3, this.level - 1);
            this.candy = 10 * Math.pow(2, this.level - 1);
        }
        else if(this.type == "medium"){
            this.star = Math.ceil(10 * Math.pow(3, this.level - 1) * 1.8);
            this.medal = Math.ceil(20 * Math.pow(3, this.level - 1) * 1.8);
            this.candy = Math.ceil(10 * Math.pow(2, this.level - 1) * 1.4);
        }
        else if(this.type == "hard"){
            this.star = Math.ceil(10 * Math.pow(3, this.level - 1) * 2.6);
            this.medal = Math.ceil(20 * Math.pow(3, this.level - 1) * 2.6);
            this.candy = Math.ceil(10 * Math.pow(2, this.level - 1) * 1.8);
        }
        
        if(this.scene == 'Campaign'|| this.scene == 'TimeAttack'){
            this.stunEff = me.pool.pull("StunEff", 99999, 99999);
            me.game.world.addChild(this.stunEff, game.var.enemyMngr.layerPos[this.index] + 2);
            this.stunEff.alpha = 0;
        }
        
        this.initLoad = false;
        
        this.initTimer = setInterval(function(){
            if(this.initLoad == false){
                if(this.scene == 'Campaign'|| this.scene == 'TimeAttack'){
                    this.LoadStatus();
                    this.timerAtk = setInterval(function(){
                        if(game.var.saving == false){
                            if(this.isCurrentAnimation('idle') && this.stun == false){
                                this.atkTime = Math.max(this.atkTime - 0.1, 0);
                                if(this.atkTime == 0){
                                    this.atkTime = this.atkSpeed;
                                    if(game.var.heroMngr.aliveList.length > 0){
                                        this.onFrame = false;
                                        this.setAnimationFrame(0);
                                        if(this.GetHero()){
                                            this.setCurrentAnimation('attack', function(){
                                                this.setCurrentAnimation('idle');
                                            });
                                        }
                                    }
                                }
                            }
                            else{
                                this.atkTime = this.atkSpeed;
                            }
                        }
                    }.bind(this), 100);
                    
                    if(this.type == 'boss'){
                        this.deathTime = 1.5;
                        this.drop = "CandyDrop";
                        this.drop2 = "MedalDrop";
                        this.timerCooldown = setInterval(function(){
                            if(game.var.saving == false){
                                if(this.Available()){
                                    this.cooldownTime = Math.max(this.cooldownTime - 1, 0);
                                    if(this.cooldownTime == 0 && this.stun == false){
                                        if(game.var.heroMngr.aliveList.length > 0){
                                            this.cooldownTime = this.cooldown;
                                            this.onFrame = false;
                                            this.setAnimationFrame(0);
                                            this.SfxPlay('voiceSpc');
                                            this.setCurrentAnimation('special', function(){
                                                this.setCurrentAnimation('idle');
                                            });
                                        }
                                    }
                                }
                            }
                        }.bind(this), 1000);
                    }
                }
                
                this.hitEvent = me.event.subscribe('HitEvent', this.HitEventFunc.bind(this));
                
                this.initLoad = true;
                clearInterval(this.initTimer);
            }
        }.bind(this), this.delay);
        //  End of user code  //
	},

	update: function(dt){
		var drawNextFrame = this._super(me.Sprite, 'update', [dt]);
        // Put user code here //
        if(this.scene == 'Campaign'|| (this.scene == 'TimeAttack' && game.var.uiMngr.stageManager.currentTime > 0)){
            if(!this.onEntrance){
                if(!this.death){
                    if(this.isCurrentAnimation('attack')){
                        if(!this.onFrame){
                            if(this.getCurrentAnimationFrame() == this.atkFrame){
                                if(this.GetHero()){
                                    this.Attack();
                                }
                                this.onFrame = true;
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
                                this.onFrame = true;
                                this.Special();
                            }
                        }
                    }
                }
                else{
                    //this.animationpause = false;
                }
            }
            
            if(this.stun){
                this.stunEff.alpha = 1;
            }
            else{
                this.stunEff.alpha = 0;
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
        if(this.hitEvent != undefined)
            me.event.unsubscribe(this.hitEvent);
        
        if(this.var.tween != undefined)
            this.var.tween.stop();
        
        if(this.timerSave != undefined) clearInterval(this.timerSave);
        
        if(this.timerAtk != undefined) clearInterval(this.timerAtk);
        
        if(this.timerCooldown != undefined) clearInterval(this.timerCooldown);
        
        if(this.timerDeath != undefined) clearTimeout(this.timerDeath);
        
        if(this.timerStun != undefined) clearInterval(this.timerStun);
        
        if(this.currSfx != undefined) me.audio.stop(this.currSfx);
        
        if(this.spcSfx != undefined) me.audio.stop(this.spcSfx);
        //  End of user code  //
	},

    // Put user code here //
    GetHero(){
        if(game.var.heroMngr.aliveList.length > 0){
            if(this.target == null || !game.var.heroMngr.aliveList.includes(this.target)){
                let rand = Math.floor(Math.random() * game.var.heroMngr.aliveList.length); 
                this.target = game.var.heroMngr.aliveList[rand];
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
        game.var.heroMngr.list[this.target].Hit(this.atkDmg);
    },
    
    Special : function(){
        this.SfxPlay('special');
        let aliveList = game.util.cloneData(game.var.heroMngr.aliveList);
        for(let i in aliveList){
            game.var.heroMngr.list[aliveList[i]].Hit(this.spcValue);
        }
    },
    
    SpecialEff : function(){
        this.eff = me.pool.pull(this.spcEff, 
                this.pos.x - (me.game.viewport.width / 2) - OFFSET(this.id, false).y + this.spcEffOffset.x
            , this.pos.y - (me.game.viewport.height / 2) - OFFSET(this.id, false).y + this.spcEffOffset.y);
        
        me.game.world.addChild(this.eff, 55);                            

        this.eff.setCurrentAnimation('idle', function(){ 
            me.game.world.removeChild(this.eff);
            this.onEff = false;
            return false;
        }.bind(this));
    },
    
    Hit : function(damage){
        if(this.Available()){
            this.currentHP = Math.max(this.currentHP - damage, 0);
            this.death = this.currentHP == 0 ? true : false;
            if(this.death){
                me.game.world.removeChild(this.hpBar);
                
                let index = game.var.enemyMngr.aliveList.indexOf(this.index);
                game.var.enemyMngr.aliveList.splice(index, 1);
                
                if(this.scene == "Campaign"){
                    if(this.type == 'regular'){
                        let totalStar = game.user.userData.star + this.star;
                        game.controller.data.modifyUserDataProperty('star', totalStar, function(){
                            game.var.tutorial.Step('getStar');
                        });
                    }
                    else if(this.type == 'boss'){
                        let totalMedal = game.user.userData.medal + this.medal;
                        let totalCandy = game.user.userData.candy + this.candy;
                        game.controller.data.modifyUserDataProperty('medal', totalMedal);
                        game.controller.data.modifyUserDataProperty('candy', totalCandy);
                    }
                }
                
                if(this.type == 'boss'){
                    game.var.uiMngr.stageManager.StopTimerBoss();
                    
                    let progress = 0;
                    if(game.user.userData.achievementProgress['DefeatBoss'] != undefined)
                        progress = game.user.userData.achievementProgress['DefeatBoss'];
                    
                    game.controller.data.saveAchievementProgress('DefeatBoss', progress + 1);
                }
                
                if(this.scene == 'TimeAttack' && game.var.uiMngr.stageManager.currentTime > 0){
                   game.var.uiMngr.stageManager.currentEnemies ++;
                }
                this.Die();
            }
        }
    },
    
    HitEventFunc : function(dmg){
        this.Hit(dmg);
    },
    
    Die : function(){
        this.SfxPlay('die');
        this.stun = false;
        if(this.scene == "Campaign"){
            if(this.type == "regular"){
                let dropPos = {x : this.pos.x - OFFSET(this.id, false).x, y : this.pos.y - OFFSET(this.id, false).y, z : this.pos.z};
                this.dropItem = game.var.enemyMngr.SpawnDropItem(this.drop, dropPos);
            }
            else if(this.type == "boss"){
                let dropPos = {x : this.pos.x - OFFSET(this.id, false).x, y : this.pos.y - OFFSET(this.id, false).y, z : this.pos.z};
                this.dropItem = game.var.enemyMngr.SpawnDropItem(this.drop, dropPos);
                this.dropItem2 = game.var.enemyMngr.SpawnDropItem(this.drop2, dropPos);
            }
        }
        
        this.setAnimationFrame(0);
        this.setCurrentAnimation('ko', function(){
            return false;
        });
                
        this.StartDeathTimer();
    },
    
    RemoveEnemy : function(){
        if(this.type == "regular"){
            for(let i in this.dropItem) this.dropItem[i].pos.x = me.game.viewport.width * 2;
        }
        else{
            for(let i in this.dropItem) this.dropItem[i].pos.x = me.game.viewport.width * 2;
            for(let i in this.dropItem2) this.dropItem2[i].pos.x = me.game.viewport.width * 2;
        }
        
        me.game.world.removeChild(this);
        game.var.enemyMngr.count --;;
        if(game.var.enemyMngr.count == 0){
            me.event.publish("DisableBtnEvent", []);
            game.var.enemyMngr.RequestWave();
        }
    },
    
    StartDeathTimer : function(){
        this.timerDeath = setTimeout(function(){
            if(!this.removed){
                this.removed = true;
                
                this.RemoveEnemy();
            }
        }.bind(this), this.deathTime * 1000);
    },
    
    StartStun : function(time){
        if(this.Available()){
            if(this.stunTime < time){
                this.stunTime = time;
                this.stunEff.pos.x = this.StunPos(this.id).x;
                this.stunEff.pos.y = this.StunPos(this.id).y;
                this.setCurrentAnimation("idle");
                this.stun = true;
                this.timerStun = setInterval(function(){
                    if(game.var.saving == false){
                        this.stunTime = Math.max(0, this.stunTime - 1);
                        
                        if(this.stunTime == 0)
                            this.stun = false;//this.animationpause = false;
                    }
                }.bind(this), 1000);
            }
        }
    },
  
    Available : function(){
        if(!this.death && !this.onEntrance && this.alpha == 1){
            return true;
        }else{
            return false;
        }
    },
    
    TweenEntrance : function (containerPosX, containerPosY, time){
        this.startTween = false;
        this.tweenTimer = setInterval(function(){
            if(this.startTween == false){
                this.startTween = true;
                this.tween = new me.Tween(this.pos).to({x : containerPosX, y : containerPosY}, time).onComplete(this.EndEntrance.bind(this));
                this.tween.start();
            }
            clearInterval(this.tweenTimer);
        }.bind(this), this.delay)
    },
    
    EndEntrance : function(){
        if(this.isCurrentAnimation('entrance')){
            this.setCurrentAnimation('idle');
            this.onEntrance = false;
        }
        else if(this.isCurrentAnimation('stand')){
            this.setCurrentAnimation('entrance', function(){
			    this.setCurrentAnimation('idle');
			    this.onEntrance = false;
		    }.bind(this));
        }
        
        game.var.enemyMngr.aliveList.push(this.index);
        this.SfxPlay('intro');
        this.SpawnHPBar();
    },
    
    SpawnHPBar : function(){
        this.hpBar = me.pool.pull('HPBar', this.pos.x - (me.game.viewport.width / 2) - OFFSET(this.id, false).x + this.HPBarPos().x, 
                    this.pos.y - (me.game.viewport.height / 2) + - OFFSET(this.id, false).y + this.HPBarPos().y, {
                                            char : this
                                });
        this.hpBar.fullHP = this.fullHP;
        me.game.world.addChild(this.hpBar, game.var.enemyMngr.layerPos[this.index] + 1); 
    },
    
    LoadStatus : function(){
        if(this.scene == 'Campaign'){
            let getEnemyStatus = game.user.userData.enemyCampaign;

            if(getEnemyStatus[this.index] != undefined){
                if(getEnemyStatus[this.index].hp != undefined)
                    this.currentHP = getEnemyStatus[this.index].hp;
                
                this.death = getEnemyStatus[this.index].death;
                this.onEntrance = getEnemyStatus[this.index].onEntrance;
                
                if(this.onEntrance == false){
                    game.var.enemyMngr.aliveList.push(this.index);
                    this.setCurrentAnimation('idle');
                    this.SpawnHPBar();
                }
                
                if(getEnemyStatus[this.index].cooldownTime > 0){
                    this.cooldownTime = getEnemyStatus[this.index].cooldownTime;
                }
                
                if(getEnemyStatus[this.index].stunTime > 0){
                    this.StartStun();
                    this.stunTime = getEnemyStatus[this.index].stunTime;
                }
                
                if(getEnemyStatus[this.index].deathTime > 0){
                    this.Die();
                    this.deathTime = getEnemyStatus[this.index].deathTime;
                }
                else if(this.currentHP == 0){
                    this.Die();
                }
            }
        }
    },
    
    Status : function(){
        
        let stats = {id : this.id,
                    type : this.type,
                    level : this.level,
                    index : this.index,
                    hp : this.currentHP,
                    onEntrance : this.onEntrance,
                    death : this.death,
                    cooldownTime : this.cooldownTime, 
                    stunTime : this.stunTime};
        
        return stats;
    },
    
    SaveStatus : function(callback){
        if(typeof callback !== "function") callback = function(){};
        
        if(this.scene == 'Campaign')
            game.controller.data.saveEnemyStatus(this.Status(), callback);
    },
    
    GetOffset : function(){
        if(this.id == 'EB005'){
            return - 600;
        }else{
            return -300;
        }
    },
    
    HPBarPos : function(){
        switch(this.id) {
            case 'EB000':
                return {x : 100, y : -500};
            break;
            case 'EB001':
                return {x : -50, y : -500};
            break;
            case 'EB002':
                return {x : -50, y : -500};
            break;
            case 'EB003':
                return {x : 0, y : -550};
            break;
            case 'EB004':
                return {x : -50, y : -500}; 
            break;
            case 'EB005':
                return {x : -50, y : -600}; 
            break;
             default:
                return {x : 0, y : -400};
        }
    },
    
    StunPos : function(id){
        let pos = {x : this.pos.x - + OFFSET(id, false).x, y : this.pos.y - (this.height) + 30 - OFFSET(id, false).y};
        if(id == "EB000"){
            pos = {x : this.pos.x - + OFFSET(id, false).x + 75, y : this.pos.y - (this.height) + 30 - OFFSET(id, false).y};
        }
        else if(id == "EB002"){
            pos = {x : this.pos.x - + OFFSET(id, false).x - 70, y : this.pos.y - (this.height) + 30 - OFFSET(id, false).y};
        }
        else if(id == "EB004"){
            pos = {x : this.pos.x - + OFFSET(id, false).x - 60, y : this.pos.y - (this.height) + 60 - OFFSET(id, false).y};
        }
        else if(id == "EB005"){
            pos = {x : this.pos.x - + OFFSET(id, false).x - 20, y : this.pos.y - (this.height) + 40 - OFFSET(id, false).y};
        }
        return pos;
    },
    
    SfxPlay : function(audio){
        if(audio == 'intro'){
            if(this.introSfx != undefined){
                this.currSfx = this.introSfx;
                game.util.audioPlay(this.introSfx, false);
            }
        }
        else if(audio == 'die'){
            if(this.sfxDie != undefined){
                if(this.currSfx != undefined){
                    me.audio.stop(this.currSfx);
                }
                
                this.currSfx = this.sfxDie;
                game.util.audioPlay(this.currSfx, false);
            }
        }
        else if(audio == 'voiceAtk'){
            
        }
        else if(audio == 'atk'){
            
        }
        else if(audio == 'voiceSpc'){
            if(this.voiceSpcSfx != undefined){
                if(this.currSfx != undefined){
                    me.audio.stop(this.currSfx);
                }
                
                this.currSfx = this.voiceSpcSfx;
                game.util.audioPlay(this.currSfx, false);
            }
        }
        else if(audio == 'special'){
            if(this.spcSfx != undefined){
                game.util.audioPlay(this.spcSfx, false);
            }
        }
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();