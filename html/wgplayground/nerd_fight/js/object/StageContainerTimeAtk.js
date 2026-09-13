(function(){
// Put user code here //
 
//  End of user code  //

game.object.StageContainerTimeAtk = me.Container.extend({
	init: function(x, y, settings = {}){
		settings.width = settings.width || 100;
		settings.height = settings.height || 100;
		settings.anchorPoint = {
			x: 0.5,
			y: 0.5
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
        this.currentTime = game.controller.data.getDataTimeAtkInfo()[0].time;
        this.bossTime = 360;
        
        this.waveBar = me.pool.pull('WaveBar', this.pos.x - (me.game.viewport.width / 2), this.pos.y - (me.game.viewport.height / 2));
		this.addChild(this.waveBar, 0);
		    
		this.stageCounter = me.pool.pull('StageCounter', this.pos.x - (me.game.viewport.width / 2) - 300, this.pos.y - (me.game.viewport.height / 2));
		this.addChild(this.stageCounter, 0);
		
		this.stageCounter2 = me.pool.pull('StageCounter', this.pos.x - (me.game.viewport.width / 2) + 300, this.pos.y - (me.game.viewport.height / 2));
		this.addChild(this.stageCounter2, 0);
		
        this.textPosX = (this.stageCounter.pos.x - (me.game.viewport.width / 2)) - (this.pos.x - (me.game.viewport.width / 2));
        this.textPosY = this.pos.y - 10;
        this.stageText = me.pool.pull('me.BitmapText', this.textPosX + 50, 24, {
                                             font: 'Niagaraphobia',
                                             size : 1.2,
                                             text : '',//this.WriteStageText(this.stageNumber),
                                             textAlign : 'center',
                                             textBaseAlign : 'middle',
                                             anchorPoint : {x: 0,y: 0}
                                             }); 
		this.addChild(this.stageText, 1);
		
		this.textPosX = (this.stageCounter2.pos.x - (me.game.viewport.width / 2)) - (this.pos.x - (me.game.viewport.width / 2));
		this.stageText2 = me.pool.pull('me.BitmapText', this.textPosX + 50, 24, {
                                             font: 'Niagaraphobia',
                                             size : 1.2,
                                             text : '',//this.WriteStageText(this.stageNumber + 1),
                                             textAlign : 'center',
                                             textBaseAlign : 'middle',
                                             anchorPoint : {x: 0,y: 0}
                                             }); 
		this.addChild(this.stageText2, 1);
		
	    this.timerPanel = me.pool.pull('me.Sprite', 40, 120,{
		                            image:  game.textureMap.get("Campaign"),
                                    region:"timer boss panel png"
		                        });
		
		this.addChild(this.timerPanel, 3);
		this.timerPanel.alpha = 0;
		
		this.timerTxt = me.pool.pull('me.BitmapText', 40, 110, {font: 'NiagaraphobiaWhite',
                                                            size : 1.5,
                                                            text : ' ',
                                                            textAlign : 'center',
                                                            textBaseAlign : 'bottom',
                                                            anchorPoint : {x: 0,y: 0.5}});
		
		this.addChild(this.timerTxt, 4)
		
		this.waveBar.setCurrentAnimation(10);

		this.newStage = 0;
		this.newWave = 0;
		
		this.currentEnemies = 0;
		this.enemy = {total : 10, 
                    difficulty : 'easy',
                    level : 1};
                    
        this.completed = false;
        //  End of user code  //
	},

	update: function(dt){
		var drawNextFrame = this._super(me.Container, 'update', [dt]);
        // Put user code here //
        this.stageText.setText(this.WriteStageText(this.currentEnemies));
        this.stageText2.setText(this.WriteStageText(this.enemy.total));
        
        if(this.completed == false){
            if(this.currentEnemies == this.enemy.total){
                this.completed = true;
                this.component.ShowReward();
                clearInterval(this.timer);
            }
        }
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
        if(this.timer != undefined)
            clearInterval(this.timer);
            
        //  End of user code  //
	},

    // Put user code here //
    NextWave : function(){
        let enemyCount = MAX_ENEMY;
        if(this.currentEnemies + MAX_ENEMY > this.enemy.total){
            enemyCount = this.enemy.total - this.currentEnemies;
        }
        
        let enemyInfo = game.controller.data.getDataEnemyInfo(),
            getEnemy = [];
            enemyList = [];
            
        for(let j in enemyInfo){
            if(enemyInfo[j].difficulty == this.enemy.difficulty && enemyInfo[j].type == 'regular'){
            let enemy = {};
                enemy = {id : enemyInfo[j].id, level : this.enemy.level, type : 'regular', onEntrance : true};
                    
                getEnemy.push(enemy);
            }
        }
            
        for(let k = 0; k < enemyCount; k++){
            let randIndex = Math.floor(Math.random() * getEnemy.length);
            enemyList.push(getEnemy[randIndex]);
            getEnemy.splice(randIndex, 1);
                
            if(getEnemy.length == 0){
                getEnemy = enemyList;
            }
        }
        return enemyList;
    },
    
    StartTimer : function(){
        this.timerPanel.alpha = 1;
        this.timerTxt.setText(this.MinuteTxt(this.currentTime));
        this.timer = setInterval(function(){
            this.currentTime = Math.max(0, this.currentTime - 1);
            this.timerTxt.setText(this.MinuteTxt(this.currentTime));
            if(this.currentTime == 0){
                clearInterval(this.timer);
                this.component.ShowRetry();
            }
        }.bind(this), 1000);
    },
    
    WriteStageText : function(stage){
        let txt = '0'
        
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
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();