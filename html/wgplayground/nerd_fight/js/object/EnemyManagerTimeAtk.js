(function(){
// Put user code here //
 
//  End of user code  //

game.object.EnemyManagerTimeAtk = me.Container.extend({
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
        this.bossPos = {x : 715, y : 200};
        this.enemyPos = [{x : 500, y : 257},
                        {x : 400, y : 123},
                        {x : 600, y : 400},
                        {x : 900, y : 257},
                        {x : 800, y : 123},
                        {x : 1000, y : 400}];

        this.layerPos = [10, 5, 15, 10, 5, 15, 10];
        this.list = [null, null, null, null, null, null, null];
        this.aliveList = [];

        this.count = 0;
        this.load = false;
        this.onClear = false;
        
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
        
        //  End of user code  //
	},

    // Put user code here //
    RequestWave : function(){
        if(this.count == 0){
            let list = game.var.uiMngr.stageManager.NextWave();
            this.SpawnWave(list);
        }
    },
    
    SpawnWave : function(list){
        me.event.publish("DisableBtnEvent", []);
        this.enemyList = list;
        let enemyData = [];
        
        for(i in this.enemyList){
            this.SpawnEnemy(this.enemyList[i], i);
        }
        
        this.count = this.enemyList.length;
    },
    
    SpawnEnemy : function(enemy, getIndex){
        let delay = 0;
        
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
		    }
		    else{
		        newEnemy = me.pool.pull(enemy.id, pos.x, pos.y, {
                    id : enemy.id,
                    level : enemy.level,
                    index : getIndex,
                    delay : delay
                });  
		    }
		    me.game.world.addChild(newEnemy, this.layerPos[6]);
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
    
    SpawnDropItem: function(dropItem, enemyPos){
        let dropList = [];
        this.itemFlip = false;
        if(1 == Math.round(Math.random() * 1)){
            this.itemFlip = true;
        }
        
        if(dropItem == 'StarDrop'){
            this.maxDistanceX = 75;
            this.minDistanceX = -50;
            this.maxDistanceY = 65;
            this.minDistanceY = 30;
        }
        else if(dropItem == 'CandyDrop'){
            this.maxDistanceX = 75;
            this.minDistanceX = 0;
            this.maxDistanceY = 45;
            this.minDistanceY = 30;
        }
        
        this.tempDistX = 0;
        this.tempPosY = Math.max(-160, enemyPos.y - (me.game.viewport.height / 2) -  200);
        this.tempPosX = enemyPos.x - (me.game.viewport.width / 2);

        for(let i = 0;i < 6;i ++){
            if(i == 3){
                this.tempPosY = enemyPos.y - (me.game.viewport.height / 2);
            }
            
            let getRandPosition = this.RandomPosition();
            dropList.push(me.pool.pull(dropItem, getRandPosition[1], getRandPosition[2]));
            dropList[i].flipX(getRandPosition[0]);

            this.tempPosY = getRandPosition[2];
            
            let layer = 0;
            if(getRandPosition[2] <= enemyPos.y - (me.game.viewport.height / 2)){
                layer = enemyPos.z - 1; 
            }
            else{
                layer = enemyPos.z + 1; 
            }
            
            me.game.world.addChild(dropList[i], layer);
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
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();