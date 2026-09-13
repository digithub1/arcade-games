(function(){
// Put user code here //
 
//  End of user code  //

game.object.draggableSprite = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.image = settings.image || game.textureMap.get('image')
		settings.framewidth = settings.framewidth || 100;
		settings.frameheight = settings.frameheight || 100;
		settings.anchorPoint = {
			x: 0.5,
			y: 0.5
		};

        // Put user code here //
        verify(settings, ["region", "folder"]);
        settings.texture = settings.folder;
		settings.image = game.textureMap.get(settings.texture);
        var tempSprite = game.util.__populateAtlasIndices([
			settings.region
		], settings);
        
        settings.framewidth = undefined;
        settings.frameheight = undefined;
        this.originX = x;
        this.originY = y;
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
        x -= me.game.viewport.width * 0.5;
		y -= me.game.viewport.height * 0.5;
        // init variable
        this.isKinematic = false;
        this.dragging = false;
        this.dragId = null;
        this.grabOffset = me.pool.pull("me.Vector2d", 0, 0);
        // --
        
        // init events
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
        // --
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
            this.grabOffset.set(e.gameX, e.gameY);
            this.grabOffset.sub(this.pos);
            return false;
        }
    },
    
    dragMove: function (e) {
        if (this.dragging === true) {
            this.pos.set(e.gameX, e.gameY, this.pos.z);
            this.pos.sub(this.grabOffset);
        }
    },
    
    dragEnd: function () {
        if (this.dragging === true) {
            this.dragging = false;
            return false;
        }
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();