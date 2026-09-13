(function(){
// Put user code here //
 
//  End of user code  //

game.object.EnemyManager = me.Container.extend({
	init: function(x, y, settings = {}){
		settings.width = settings.width || 100;
		settings.height = settings.height || 100;
		settings.anchorPoint = {
			x: 0,
			y: 0
		};

        // Put user code here //
 
        //  End of user code  //

		this._super(me.Container, 'init', [x, y, settings.width, settings.height]);

		this.alpha = 1;
		this.floating = false;
		this.alwaysUpdate = false;
		this.updateWhenPaused = false;
		this.isPersistent = false;
		this.anchorPoint.set(settings.anchorPoint.x, settings.anchorPoint.y);
		this.var = {};


        // Put user code here //
        this.stageCounter = 0;
        this.bossPos = {x : 515, y : 300};
        this.enemyPos = [{x : 500, y : 257},
                            {x : 400, y : 123},
                            {x : 600, y : 400},
                            {x : 900, y : 257},
                            {x : 800, y : 123},
                            {x : 1000, y : 400}];
        
        this.layerPos = [70, 65, 75, 70, 60, 75, 70];
        this.list = [null, null, null, null, null, null, null];
        this.aliveList = [];
    
        this.count = 0;
        this.onClear = false;
        this.jumper = 0;
        this.onRequest = false;
        this.initLoading = false;
            
        this.load = false;
        this.medalIndex = 0;
        this.starIndex = 0;
        this.candyIndex = 0;
        this.starList = [];
        this.medalList = [];
        this.candyList = [];
        this.SpawnDropList();
        
        this.i = 1;

        this.LoadEnemy();
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
        if(this.startTimer != undefined)
            clearTimeout(this.startTimer);
        
        if(this.loadTimer != undefined)
            clearTimeout(this.loadTimer);
        //  End of user code  //
	},

    // Put user code here //
    RequestWave : function(){
        if(this.onRequest == false){
            this.onRequest = true;
            this.list = [];
            this.getNextList = game.var.uiMngr.stageManager.NextWave(1);
            game.var.uiMngr.stageManager.SaveCampaignProgress(function(){
                this.SpawnWave(this.getNextList);
                this.onRequest = false;
            }.bind(this));
        }
    },
    
    SpawnWave : function(list){
        me.event.publish("DisableBtnEvent", []);
        this.enemyList = list;
        this.enemyData = [];
        
        for(i in this.enemyList){
            this.SpawnEnemy(this.enemyList[i], i);
            this.enemyData.push({id : this.enemyList[i].id,
                    type : this.enemyList[i].type,
                    level : this.enemyList[i].level,
                    index : i,
                    onEntrance : true,
                    death : false,
                    cooldownTime : 0, 
                    stunTime : 0});
        }
        this.count = this.enemyList.length;     
    },
    
    SpawnEnemy : function(enemy, getIndex){
        let delay = 1000;
        if(this.load == true){
            delay = 0;
        }
        
        let newEnemy, time;    
		if(enemy.type == 'boss'){
		    let pos = {x : this.bossPos.x + OFFSET(enemy.id, false).x, 
		                    y : this.bossPos.y  + OFFSET(enemy.id, false).y};
		  
		    if(enemy.onEntrance == true){
		        newEnemy = me.pool.pull(enemy.id, pos.x, pos.y - 1000, {
                    id : enemy.id,
                    level : enemy.level,
                    index : getIndex,
                    delay : delay
                });  
                
		        time = 250;
		        newEnemy.setCurrentAnimation('stand');
		        newEnemy.TweenEntrance(newEnemy.pos.x,  pos.y + (me.game.viewport.height / 2), time);
		        setTimeout(()=>{
                    let bossTime = game.var.uiMngr.stageManager.bossTime;
                    game.var.uiMngr.stageManager.currentTime = bossTime;
                    game.var.uiMngr.stageManager.StartTimerBoss();
                }, time);
                
                setTimeout(()=>{
                    me.event.publish("EnableBtnEvent", []);    
                }, delay + time);
		    }
		    else{
		        newEnemy = me.pool.pull(enemy.id, pos.x, pos.y, {
                    id : enemy.id,
                    level : enemy.level,
                    index : getIndex,
                    delay : delay
                });
                setTimeout(()=>{
                    game.var.uiMngr.stageManager.StartTimerBoss();
                }, delay);
                
                setTimeout(()=>{
                    me.event.publish("EnableBtnEvent", []);    
                }, delay);
		    }
		    me.game.world.addChild(newEnemy, 15);
		}
        else if(enemy.type == 'regular'){
            let pos = {x : this.enemyPos[getIndex].x + OFFSET(enemy.id, false).x, 
		              y : this.enemyPos[getIndex].y  + OFFSET(enemy.id, false).y};
            if(enemy.onEntrance == true){
                newEnemy = me.pool.pull(enemy.id, pos.x + 1000, pos.y, {
                    id : enemy.id,
                    level : enemy.level,
                    index : getIndex,
                    delay : delay
                });
                time = 1500;
                newEnemy.setCurrentAnimation('entrance');
                newEnemy.TweenEntrance(pos.x + (me.game.viewport.width / 2), newEnemy.pos.y, time);
                
                setTimeout(()=>{
                    me.event.publish("EnableBtnEvent", []);    
                }, delay + time);
            }
            else{
		        newEnemy = me.pool.pull(enemy.id, pos.x, pos.y, {
                    id : enemy.id,
                    level : enemy.level,
                    index : getIndex,
                    delay : delay
                });
                
                setTimeout(()=>{
                    me.event.publish("EnableBtnEvent", []);    
                }, delay);
		    }
		    
		    me.game.world.addChild(newEnemy, this.layerPos[getIndex]);
        }
        
        let unlockData = game.user.userData.unlockLibraryEnemy;
        if(!unlockData.includes(enemy.id)){
            unlockData.push(enemy.id);
            game.controller.data.modifyUserDataProperty('unlockLibraryEnemy', unlockData);
        }
        
        this.list[getIndex] = newEnemy;
    },
    
    LoadEnemy : function(){
        game.controller.data.getUserDataProperty('enemyCampaign', function(enemyList){
            if(this.load == false){
                let enemyCount = 0;
                
                for(let i in enemyList){
                    if(enemyList[i].death == false){
                        this.SpawnEnemy(enemyList[i], enemyList[i].index);
                        enemyCount ++;
                    }
                }
            
                this.count = enemyCount;
                
                if(enemyList.length == 0){
                    let list = game.var.uiMngr.stageManager.NextWave(0);
                    this.SpawnWave(list);
                }
                else if(this.count == 0){
                    this.RequestWave();
                }
                this.load = true;
            }
        }.bind(this));
    },
    
    SpawnDropItem: function(dropItem, enemyPos){
        let dropList = [];
        let randomY = Math.floor(Math.random * 2);
        this.itemFlip = false;
        if(1 == Math.round(Math.random() * 1)){
            this.itemFlip = true;
        }
        
        if(dropItem == 'StarDrop'){
            this.maxDistanceX = 75;
            this.minDistanceX = -50;
            this.maxDistanceY = 55;
            this.minDistanceY = 30;
        }
        else if(dropItem == 'MedalDrop'){
            this.maxDistanceX = 75;
            this.minDistanceX = 0;
            this.maxDistanceY = 45;
            this.minDistanceY = 30;
        }
        else if(dropItem == "CandyDrop"){
            this.maxDistanceX = 75;
            this.minDistanceX = -50;
            this.maxDistanceY = 100;
            this.minDistanceY = 50;
        }
        
        this.tempDistX = 0;
        this.tempPosY = Math.max(-160 + (me.game.viewport.height / 2), enemyPos.y -  200);
        this.tempPosX = enemyPos.x;

        for(let i = 0;i < 3;i ++){
            if(i == randomY){
                this.tempPosY = enemyPos.y;
            }
            
            let getRandPosition = this.RandomPosition();
            if(dropItem == 'StarDrop'){
                dropList.push(this.starList[this.starIndex]);
                this.starIndex++;
                if(this.starIndex == this.starList.length) this.starIndex = 0;
            }
            else if(dropItem == 'MedalDrop'){
                dropList.push(this.medalList[this.medalIndex]);
                this.medalIndex++;
                if(this.medalIndex == this.medalList.length) this.medalIndex = 0;
            }
            else if(dropItem == 'CandyDrop'){
                dropList.push(this.candyList[this.candyIndex]);
                this.candyIndex++;
                if(this.candyIndex == this.candyList.length) this.candyIndex = 0;
            }
            
            let layer = 0;
            if(getRandPosition[2] <= enemyPos.y){
                layer = enemyPos.z - 1; 
            }
            else{
                layer = enemyPos.z + 1; 
            }
            
            dropList[i].setAnimationFrame(0);
            dropList[i].pos.set(getRandPosition[1], getRandPosition[2], layer);
            dropList[i].flipX(getRandPosition[0]);

            this.tempPosY = getRandPosition[2];
            dropList[i].setCurrentAnimation('drop', function(){
                return false;
            });
        }

        return dropList;
    },
    
    RandomPosition: function(){
        let randPosX = 0;
        let randPosY = this.tempPosY + Math.random() * (this.maxDistanceY - this.minDistanceY) + (this.minDistanceY);

        let randDistX = Math.random() * (this.maxDistanceX - this.minDistanceX) + (this.minDistanceX);
        if(randDistX > this.tempDistX){
            randDistX = Math.max(randDistX, this.tempDistX + 25);
        }
        else{
            randDistX = Math.min(randDistX, this.tempDistX - 25);
            randDistX = Math.max(randDistX, 0);
        }
        this.tempDistX = randDistX;
       
        if(this.itemFlip){
            this.itemFlip = false;
            randPosX = this.tempPosX + randDistX;
        }
        else{
            this.itemFlip = true;
            randPosX = this.tempPosX - randDistX;
        }
        
        return [this.itemFlip, randPosX, randPosY];
    },
    
    EnemyData : function(){
        let data = [];
        
        for(let i in this.list){
            if(this.list[i] != null){
                data.push({id : this.list[i].id,
                    type : this.list[i].type,
                    level : this.list[i].level,
                    index : this.list[i].index,
                    hp : this.list[i].currentHP,
                    onEntrance : this.list[i].onEntrance,
                    death : this.list[i].death,
                    cooldownTime : this.list[i].cooldownTime, 
                    stunTime : this.list[i].stunTime});
            }
        }

        return data;
    },
    
    SpawnDropList : function(){
        for(let i = 0; i < MAX_ENEMY; i ++){
            for(let j = 0; j < 3; j++){
                let star = me.pool.pull('StarDrop', 0, 0);
                me.game.world.addChild(star, 15);
                star.pos.x = me.game.viewport.width * 2;
                this.starList.push(star);
            }
        }
        
        for(let j = 0; j < 3; j++){
            let medal = me.pool.pull('MedalDrop', 0, 0);
            me.game.world.addChild(medal, 15);
             
            medal.pos.x = me.game.viewport.width * 2;  
            this.medalList.push(medal);
        }
        
        for(let j = 0; j < 3; j++){
            let candy = me.pool.pull('CandyDrop', 0, 0);
            me.game.world.addChild(candy, 15);
             
            candy.pos.x = me.game.viewport.width * 2;  
            this.candyList.push(candy);
        }
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();