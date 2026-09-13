(function(){
// Put user code here //
 
//  End of user code  //

game.object.TapArea = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "Campaign";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"black2"
		], settings);
		settings.framewidth = settings.framewidth || 2340;
		settings.frameheight = settings.frameheight || 1080;
		settings.anchorPoint = {
			x: 0.5,
			y: 0.5
		};

        // Put user code here //
        
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
        this.isKinematic = false;
        this.dragging = false;
        this.dragId = null;
        this.grabOffset = me.pool.pull("me.Vector2d", 0, 0);
        // --
        
        this.mouseDown = function (e) {
            this.translatePointerEvent(e, me.event.DRAGSTART);
        };
        this.mouseUp = function (e) {
            this.translatePointerEvent(e, me.event.DRAGEND);
        };
        
        me.input.registerPointerEvent("pointerdown", this, this.mouseDown.bind(this));
        me.input.registerPointerEvent("pointerup", this, this.mouseUp.bind(this));
        me.input.registerPointerEvent("pointercancel", this, this.mouseUp.bind(this));
        me.event.subscribe(me.event.POINTERMOVE, this.dragMove.bind(this));
        me.event.subscribe(me.event.DRAGSTART, (e, draggable) => {
            if (draggable === this) {
                this.dragStart(e);
            }
        });
        me.event.subscribe(me.event.DRAGEND, (e, draggable) => {
            if (draggable === this) {
                this.dragEnd(e);
            }
        });
        
        this.sfxTap = ["sfx-atkhit-1", "sfx-atkhit-2", "sfx-atkhit-3", "sfx-atkhit-4"];
        this.onTap = false;
        this.alpha = 0;
        this.paper = [];
        this.SpawnPaper();
        this.tapPos = {};
        this.target = null;
        this.index = 0;
        this.able = true;
        this.batasBawah = 930;
        //  End of user code  //
	},

	update: function(dt){
		var drawNextFrame = this._super(me.Sprite, 'update', [dt]);
        // Put user code here //
        if(game.var.enemyMngr.aliveList.length == 0){
            this.target = null;
        }
        if(me.levelDirector.getCurrentLevel().name == 'Campaign'){
            if(game.var.uiMngr.barAtas.itemEff["I004"] == true && this.onTap == false){
                this.TapAttack();
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
        
        me.input.releasePointerEvent("pointerdown", this, this._pointerDownHandler);
        me.event.unsubscribe(me.event.POINTERMOVE, this.dragMove);
        me.event.unsubscribe(me.event.DRAGSTART, this.dragStart);
        me.event.unsubscribe(me.event.DRAGEND, this.dragEnd);
        me.input.releasePointerEvent("pointerdown", this);
        me.input.releasePointerEvent("pointerup", this);
        //  End of user code  //
	},

    // Put user code here //
    translatePointerEvent: function (e, translation) {
        me.event.publish(translation, [e, this]);
    },
    
    dragStart: function (e) {
        if(this.able){
            if (me.levelDirector.getCurrentLevel().name == 'Campaign'){
                game.var.tutorial.Step('tapCampaign');
            }
            else if (me.levelDirector.getCurrentLevel().name == 'Lab'){
                game.var.tutorial.Step('tapLab');
            }
            else if (me.levelDirector.getCurrentLevel().name == 'TimeAttack'){
                game.var.tutorial.Step('tapTimeAtk');
            }
            
            if(me.levelDirector.getCurrentLevel().name == 'Campaign'){
                if(this.onTap == false && e.gameY > 100 && e.gameY < this.batasBawah){
                    this.TapAttack();    
                }
            }
            else if(me.levelDirector.getCurrentLevel().name == 'TimeAttack'){
                if(this.onTap == false && e.gameY > 100 && e.gameY < this.batasBawah){
                    if(this.component.uiMngr.stageManager.currentTime > 0)
                        this.TapAttack();    
                }
            }
        }
    },
    
    dragMove: function (e){
        
    },
    
    dragEnd: function (){
        return false;
    },
    
    TapAttack : function(){
        console.log(me.levelDirector.getCurrentLevel().name);
        if(me.levelDirector.getCurrentLevel().name == 'Campaign' || me.levelDirector.getCurrentLevel().name == 'TimeAttack'){
            if(game.var.enemyMngr.aliveList.length > 0){
                this.onTap = true;
                if(this.target == null || !game.var.enemyMngr.aliveList.includes(this.target)){
                    let rand = Math.floor(Math.random() * game.var.enemyMngr.aliveList.length); 
                    this.target = game.var.enemyMngr.aliveList[rand];
                }
                
                let index = this.target;
                if(this.paper[index].alpha == 0){
                    this.paper[index] = this.paper[this.target];
                    this.paper[index].setAnimationFrame(0);
                    
                    let targetID = game.var.enemyMngr.list[this.target].id;
                    let posx = game.var.enemyMngr.list[this.target].pos.x  - OFFSET(targetID, false).x - 
                        (game.var.enemyMngr.list[this.target].initWidth / 4);
                    let posy = game.var.enemyMngr.list[this.target].pos.y - OFFSET(targetID, false).y - 
                        (game.var.enemyMngr.list[this.target].initHeight / 2);
                    
                    this.paper[index].pos.set(posx, posy, game.var.enemyMngr.layerPos[this.target] + 1);
                
                    this.paper[index].target = this.target;
                    this.paper[index].alpha = 1;
                    
                    let rand = Math.floor(Math.random() * this.sfxTap.length);
                    game.util.audioPlay(this.sfxTap[rand], false);
                    this.paper[index].setCurrentAnimation('hit', function(){
                        this.paper[index].onFrame = false;
                        this.paper[index].alpha = 0;
                        setTimeout(()=>{
                            this.onTap = false;    
                        }, 150);
                        
                        return false;
                    }.bind(this));
                }
            }
        }
    },

    SpawnPaper : function(){
        for(let i = 0; i < game.var.enemyMngr.list.length; i++){
            let paper = me.pool.pull('PaperHit', 0, 0);
            me.game.world.addChild(paper, game.var.enemyMngr.layerPos[i] + 1);
            this.paper.push(paper);
        }
    }
    
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();