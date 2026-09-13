(function(){
// Put user code here //
 
//  End of user code  //

game.object.CafetariaDragArea = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "image";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"black"
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
        // init variable
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
        
        this.alpha = 0;
        
        //  End of user code  //
	},

	update: function(dt){
		var drawNextFrame = this._super(me.Sprite, 'update', [dt]);
        // Put user code here //
        
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
        this.dragEnd();
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
        if (this.dragging === false) {
            this.dragging = true;
            this.touchPosX = e.gameX;
            // *2.5
            return false;
        }
    },
    
    dragMove: function (e) {
        if (this.dragging === true) {
            let moveX = e.gameX - this.touchPosX;
            if(e.gameX < 10){
                this.dragEnd();
                return false;
            }
            
            if(e.gameX > me.game.viewport.width - 10){
                this.dragEnd();
                return false;
            }
            
            this.touchPosX = e.gameX;
            
            let container = game.var.cafeContainer;
            if(container.itemList[0].pos.x + moveX < container.limitKiri){
                moveX = container.limitKiri - container.itemList[0].pos.x;
            }
                
            if(container.itemList[0].pos.x + moveX > container.limitKanan){
                moveX = container.limitKanan - container.itemList[0].pos.x;
            }
                
            for(let i in container.itemList){
                container.itemList[i].pos.x += moveX;
            }
            
            for(let i in container.freeBG){
                container.freeBG[i].pos.x += moveX;
            }
            
        }
    },
    
    dragEnd: function () {
        if (this.dragging === true) {
            this.dragging = false;
            return false;
        }
    },
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();