(function(){
// Put user code here //
 
//  End of user code  //

game.object.HeroManager = me.Container.extend({
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
        game.var.heroMngr = this; 
        this.meleeCount = 0;
        this.rangeCount = 0;
        
        this.list = [null, null, null, null, null, null];
        //this.layerPos = [50, 40, 30, 55, 45, 35];
        this.layerPos = [50, 40, 30, 55, 45, 35];
        this.aliveList = [];
        this.currentPos = 0;
        this.heroPos = [{x : -1040, y :200}, //200
                    {x : -819, y : 75}, //75
                    {x : -649, y : -23}, // 23
                    {x : -665, y : 400},
                    {x : -488, y : 257},
                    {x : -308, y : 123},
                    {x : -328, y : 123},
                    {x : -328, y : 123}];
        
        this.initLoading = false;
        
        if(me.levelDirector.getCurrentLevel().name == 'Campaign')
            this.SpawnHero();
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
        if(this.startTimer != undefined){
            clearTimeout(this.startTimer);
        }
        
        if(this.initTimer != undefined)
            clearTimeout(this.initTimer);
        //  End of user code  //
	},

    // Put user code here //
    SpawnHero : function(){
        this.heroList = {}, i = 0;
        
        if(me.levelDirector.getCurrentLevel().name == 'Campaign'){
            this.heroList = game.user.userData.hiredHero;
        }
        else if(me.levelDirector.getCurrentLevel().name == 'TimeAttack'){
            this.heroList = this.component.heroList;
        }
        
        for(let id in this.heroList){
            if(i < MAX_HERO){
                let getPos = this.GetPos(id);
                let getSkin = (game.user.userData.heroSkin[id] != undefined) ? game.user.userData.heroSkin[id] : 'default';
                let offset = OFFSET(id, false);
                let heroPosX = this.heroPos[getPos].x + offset.x;
                let heroPosY = this.heroPos[getPos].y + offset.y;
                let hero = me.pool.pull(id, this.heroPos[getPos].x + + offset.x, this.heroPos[getPos].y + offset.y, {
                    index : i,
                    skin : getSkin
                });
                
                me.game.world.addChild(hero, this.layerPos[getPos]);
            
                this.list[i] = hero;
                game.var.uiMngr.barBawah.AddHeroButton(this.list[i], id);
                i++;
            }
        }
    },
    
    GetPos : function(heroID){
        let include = false, index = 0;
        for(let id in this.heroList){
            if(index < MAX_HERO){
                if(id == "H005"){
                    include = true;
                }    
            }
            index ++;
        }
        
        let pos = 0;
        
        if(heroID != 'H005'){
            pos = this.currentPos;
            
            if(this.currentPos == 2 && include){
                pos = this.currentPos + 1;
                this.currentPos += 2;
            }
            else{
                this.currentPos ++;    
            }
        }
        else{
            pos = 2;
        }
        
        return pos;
    },
    
    HeroData : function(){
        let data = game.util.cloneData(game.user.userData.hiredHero);
        for(let i in this.list){
            if(this.list[i] != null){
                
                data[this.list[i].id] = {level : this.list[i].level,
                                    hp : this.list[i].currentHP, 
                                    protectTime : this.list[i].protectTime, 
                                    cooldownTime : this.list[i].cooldownTime, 
                                    atkCounter : this.list[i].atkCounter,
                                    spcCounter : this.list[i].spcCounter,
                                    deathTime : this.list[i].deathTime,
                                    rest    : 0
                };
            }
        }
       
        return data;
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();