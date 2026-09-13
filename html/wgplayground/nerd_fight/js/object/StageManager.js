(function(){
// Put user code here //
 
//  End of user code  //

game.object.StageManager = me.Container.extend({
	init: function(x, y, settings = {}){
		settings.width = settings.width || 100;
		settings.height = settings.height || 100;
		settings.anchorPoint = {
			x: 0,
			y: 0
		};

        // Put user code here //
        
        //  End of user code  //

		x += me.game.viewport.width*0.5;
		y += me.game.viewport.height*0.5;
		this._super(me.Container, 'init', [x, y, settings.width, settings.height]);

		this.alpha = 1;
		this.floating = true;
		this.alwaysUpdate = false;
		this.updateWhenPaused = false;
		this.isPersistent = false;
		this.anchorPoint.set(settings.anchorPoint.x, settings.anchorPoint.y);
		this.var = {};


        // Put user code here //
        this.startPlay = game.user.userData.campaignProgress.startPlay;
        this.wave = game.user.userData.campaignProgress.wave;
        this.stageNumber = game.user.userData.campaignProgress.stage;
        this.currentTime = game.user.userData.campaignProgress.timer;
        this.bossTime = 60;
        
        this.waveBar = me.pool.pull('WaveBar', this.pos.x - (me.game.viewport.width / 2), this.pos.y - (me.game.viewport.height / 2) );
		this.addChild(this.waveBar, 0);
		    
		this.stageCounter = me.pool.pull('StageCounter', this.pos.x - (me.game.viewport.width / 2) - 300, this.pos.y - (me.game.viewport.height / 2) + 7);
		this.addChild(this.stageCounter, 0);
		
		this.stageCounter2 = me.pool.pull('StageCounter', this.pos.x - (me.game.viewport.width / 2) + 300, this.pos.y - (me.game.viewport.height / 2) + 7);
		this.addChild(this.stageCounter2, 0);
		
        let textPosX = (this.stageCounter.pos.x - (me.game.viewport.width / 2)) - (this.pos.x - (me.game.viewport.width / 2));
        let textPosY = -20;
        this.stageText = me.pool.pull('me.BitmapText', textPosX, textPosY, {
                                             font: 'Niagaraphobia',
                                             size : 1.2,
                                             text : this.WriteStageText(this.stageNumber),
                                             textAlign : 'center',
                                             textBaseAlign : 'middle',
                                             anchorPoint : {x: 0,y: 0}
                                             }); 
		this.addChild(this.stageText, 1);
		
		textPosX = (this.stageCounter2.pos.x - (me.game.viewport.width / 2)) - (this.pos.x - (me.game.viewport.width / 2));
		this.stageText2 = me.pool.pull('me.BitmapText', textPosX, textPosY, {
                                             font: 'Niagaraphobia',
                                             size : 1.2,
                                             text : this.WriteStageText(this.stageNumber + 1),
                                             textAlign : 'center',
                                             textBaseAlign : 'middle',
                                             anchorPoint : {x: 0,y: 0}
                                             }); 
		this.addChild(this.stageText2, 1);
		
	    this.timerPanel = me.pool.pull('me.Sprite', 0, 65,{
		                            image:  game.textureMap.get("Campaign"),
                                    region:"timer boss panel png"
		                        });
		this.addChild(this.timerPanel, 3);
		
		this.timerPanel.alpha = 0;
		
		this.timerTxt = me.pool.pull('me.BitmapText', 0, 38, {font: 'NiagaraphobiaWhite',
                                                            size : 1.5,
                                                            text : '',
                                                            textAlign : 'center',
                                                            textBaseAlign : 'middle',
                                                            anchorPoint : {x: 0,y: 0}});
		this.addChild(this.timerTxt, 4)
		
		if(this.startPlay == 0){
		    this.startPlay = new Date().getTime();
		}
		
		if(this.wave == 0){
		    this.waveBar.setCurrentAnimation('1');
		}
		else{
		    this.waveBar.setCurrentAnimation(this.wave);
		}
		
		this.newStage = 0;
		this.newWave = 0;
		
		if(this.wave == 0){
		    this.wave = 1;
		}
		
		this.ChangeBackground(this.stageNumber, this.wave);
        //  End of user code  //
	},

	update: function(dt){
		var drawNextFrame = this._super(me.Container, 'update', [dt]);
        // Put user code here //
        
        //  End of user code  //
		return drawNextFrame;
	},

	draw : function(renderer, rect) {
		this._super(me.Container, 'draw', [renderer, rect]);
        // Put user code here //
        
        //  End of user code  //
	},

	onActivateEvent : function() {
		this._super(me.Container, 'onActivateEvent');
        // Put user code here //
        
        //  End of user code  //
	},

	onDeactivateEvent : function() {
		this._super(me.Container, 'onDeactivateEvent');

        // Put user code here //
        if(this.timerBoss != undefined)
        clearInterval(this.timerBoss);
        
        if(this.timerReset != undefined)
        clearInterval(this.timerReset);
        //  End of user code  //
	},

    // Put user code here //
    NextWave : function(next){
        let wave = this.wave,
            stage = this.stageNumber;
            
        for(let i = 0; i < next; i++){
            wave ++;
            if(wave > 10){
                wave = 1;
                stage ++;
            }
        }
        
        if(wave == 10){
            //this.currentTime = this.bossTime;
            //this.StartTimerBoss();
        }
        else{
            this.StopTimerBoss();
        }
        
        this.newWave = wave;
        this.newStage = stage;
        
        return this.EnemyWave(stage, wave);
    },
    
    EnemyWave : function(stageNumber, waveNumber){
        let waveInfo = game.controller.data.getDataWaveInfo(),
            stageInfo = game.controller.data.getDataStageInfo(),
            enemyInfo = game.controller.data.getDataEnemyInfo();
        
        let multiplier = Math.ceil(stageNumber / stageInfo[stageInfo.length - 1].stage[1]),
            stage = stageNumber - ((multiplier - 1) * stageInfo[stageInfo.length - 1].stage[1]),
            enemyCount = waveInfo[stageNumber - ((Math.ceil(stageNumber / 10) - 1) * 10) - 1].wave[waveNumber - 1],
            difficulty = 'easy', background = 'classroom', boss  = 'EB000';
        
        for(let i in stageInfo){
            if(stageInfo[i].stage[1] > stage){
                boss = stageInfo[i].boss;
                difficulty = stageInfo[i].difficulty; 
                background = stageInfo[i].background; 
                break;
            }
        }

        let enemyList = [],
            enemyLevel = multiplier;
            enemyCount = Math.min(MAX_ENEMY, enemyCount);

        if(waveNumber == 10){
            let enemy = {id : boss, level : enemyLevel, type : 'boss', onEntrance : true}; 
            
            enemyList.push(enemy);
        }
        else{
            let getEnemy = [];
            for(let j in enemyInfo){
                if(enemyInfo[j].difficulty == difficulty && enemyInfo[j].type == 'regular'){
                    let enemy = {};
                        enemy = {id : enemyInfo[j].id, level : enemyLevel, type : 'regular', onEntrance : true};
                    
                    getEnemy.push(enemy);
                }
            }
            
            let currentEnemy = [];
            for(let l in getEnemy){
                currentEnemy.push(getEnemy[l]);
            }
            
            for(let k = 0; k < enemyCount; k++){
                let randIndex = Math.floor(Math.random() * currentEnemy.length);
                    enemyList.push(currentEnemy[randIndex]);
                    currentEnemy.splice(randIndex, 1);
     
                if(currentEnemy.length == 0){
                    for(let l in getEnemy){
                        currentEnemy.push(getEnemy[l]);
                    }
                }
            }
        }
        
        this.ChangeBackground(stageNumber, waveNumber);
        return enemyList;
    },
    
    SaveCampaignProgress : function(saveCallback){
        this.wave = this.newWave;
        this.stageNumber = this.newStage;
        
        this.stageText.setText(this.WriteStageText(this.stageNumber));
        this.stageText2.setText(this.WriteStageText(this.stageNumber + 1));
        this.waveBar.setCurrentAnimation(this.wave);
        this.getStageData = this.StageData();
        game.var.saving = true;
        
        game.controller.data.saveCampaign
        (game.var.heroMngr.HeroData(), game.var.enemyMngr.EnemyData(), this.getStageData, 
            function(){
                game.var.saving = false;
                this.UnlockHero(this.stageNumber);
                this.ReachStageAchievement();
                
                if(this.getStageData.stage % 10 == 0 && this.wave == 1){
                    me.state.change("Loading", "Campaign");
                }
                else{
                    saveCallback();
                }
        }.bind(this));
    },
    
    ReachStageAchievement : function(){
        let progress = 0;
        if(game.user.userData.achievementProgress['ReachStage'] != undefined)
            progress = game.user.userData.achievementProgress['ReachStage'];
                        
        if(progress < this.stageNumber)
            game.controller.data.saveAchievementProgress('ReachStage', this.stageNumber);
    },
    
    WriteStageText : function(stage){
        let txt = '0'
        stage = Math.min(999, stage);
        if(stage > 99){
            txt = stage;
        }
        else if(stage > 9){
            txt = '0' + stage;
        }
        else{
            txt = '00' + stage;
        }
        
        return txt;
    },
    
    UnlockHero : function(stage){
        let heroInfo = game.controller.data.getDataHeroInfo();
        for(let i in heroInfo){
            if(stage == heroInfo[i].requirement){
                if(!game.user.userData.unlockHero.includes(heroInfo[i].id)){
                    let dataUnlock = game.user.userData.unlockHero;
                    dataUnlock.push(heroInfo[i].id);
                    game.controller.data.modifyUserDataProperty('unlockHero', dataUnlock);
                    let heroSkin = game.user.userData.heroSkin;
                    heroSkin[heroInfo[i].id] = 'default';
                    game.controller.data.modifyUserDataProperty('heroSkin', heroSkin);
                }
                break;
            }
        }
    },
    
    StartTimerBoss : function(){
        this.timerPanel.alpha = 1;
        this.timerTxt.setText(this.MinuteTxt(this.currentTime));
        this.timerBoss = setInterval(function(){
        this.currentTime = Math.max(0, this.currentTime - 1);
            
            if(this.currentTime == 0){
                this.timerTxt.setText( ' ');
                this.timerPanel.alpha = 0;
                clearInterval(this.timerBoss);
                this.ResetStage();
            }else{
                this.timerTxt.setText(this.MinuteTxt(this.currentTime));
            }
        }.bind(this), 1000);
    },
    
    MinuteTxt : function(time){
        let minute = 0, sec = 0;
        minute = Math.floor(time / 60);
        sec = time - (minute * 60);
        
        if(minute < 10){
            minute = '0' + minute;
        }
        
        if(sec < 10){
            sec = '0' + sec;
        }
        
        let txt = minute + ' : ' + sec;
        return txt;
    },
    
    ResetStage : function(){
        this.wave = 1;
        this.resetTime = 1;
        game.var.enemyMngr.aliveList.splice(0, 1);
        
        game.controller.data.modifyUserDataProperty('campaignProgress', 
                {stage : this.stageNumber, wave : 1, timer : this.currentTime}, function(){
                    
             game.controller.data.modifyUserDataProperty('enemyCampaign', [], function(){
                 
                this.timerReset = setInterval(function(){
                    this.resetTime = Math.max(0, this.resetTime - 0.2);
                    game.var.enemyMngr.list[0].alpha = this.resetTime;
                    game.var.enemyMngr.list[0].hpBar.alpha = this.resetTime;
                    if(this.resetTime == 0){
                        clearInterval(this.timerReset);
                        game.var.enemyMngr.count --;
                        me.game.world.removeChild(game.var.enemyMngr.list[0].hpBar);
                        me.game.world.removeChild(game.var.enemyMngr.list[0]);
                        game.var.enemyMngr.list = [];
                        this.newWave = 1;
                        this.SaveCampaignProgress(function(){
                            game.var.enemyMngr.SpawnWave(this.NextWave(0));
                        }.bind(this));
                    }
                }.bind(this), 200);
            }.bind(this));       
        }.bind(this));
    },
    
    StopTimerBoss : function(){
        this.timerTxt.setText( ' ');
        this.timerPanel.alpha = 0;
        this.currentTime = 0;
        if(this.timerBoss != undefined)
        clearInterval(this.timerBoss);
    },
    
    ChangeBackground : function(stageNumber, waveNumber){
        let waveInfo = game.controller.data.getDataWaveInfo(),
            stageInfo = game.controller.data.getDataStageInfo(),
            enemyInfo = game.controller.data.getDataEnemyInfo();
        
        let multiplier = Math.ceil(stageNumber / stageInfo[stageInfo.length - 1].stage[1]),
            stage = stageNumber - ((multiplier - 1) * stageInfo[stageInfo.length - 1].stage[1]),
            enemyCount = waveInfo[stageNumber - ((Math.ceil(stageNumber / 10) - 1) * 10) - 1].wave[waveNumber - 1],
            difficulty = 'easy', background = 'classroom', boss  = 'EB000';
            
        for(let i in stageInfo){
            if(stageInfo[i].stage[1] > stage){
                background = stageInfo[i].background; 
                break;
            }
        }
        
        let bgName = "StageBGClassroom";
        
        if(background == 'classroom'){
            bgName = "StageBGClassroom";
        }
        else if(background == 'library'){
            bgName = "StageBGLibrary";
        }
        else if(background == 'gym'){
            bgName = "StageBGGym";
        }
        else if(background == 'hall'){
            bgName = "StageBGHall";
            this.waveBar.pos.x += 16;
            this.stageText.pos.x += 16;
            this.stageText2.pos.x += 16;
            this.stageCounter.pos.x += 16;
            this.stageCounter2.pos.x += 16;
        }
        else if(background == 'playground'){
            bgName = "StageBGPlayground";
        }
        else if(background == 'theatre'){
            bgName = "StageBGTheatre";
            this.waveBar.pos.x += 18;
            this.stageText.pos.x += 18;
            this.stageText2.pos.x += 18;
            this.stageCounter.pos.x += 18;
            this.stageCounter2.pos.x += 18;
        }
        
        this.bg = me.pool.pull(bgName, 0, 0);
		me.game.world.addChild(this.bg, 0);
    },
    
    StageData : function(){
        let data = {};
        data['stage'] = this.stageNumber;
        data['wave'] = this.wave;
        data['timer'] = this.currentTime;
        data['startPlay'] = this.startPlay;
        return data;
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();