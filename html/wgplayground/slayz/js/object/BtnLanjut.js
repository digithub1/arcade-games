(function(){
// Put user code here //
 
//  End of user code  //

game.object.BtnLanjut = me.GUI_Object.extend({
	init: function(x, y, settings = {}){
		settings.texture = "battle";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"continue"
		], settings);
		settings.framewidth = settings.framewidth || 100;
		settings.frameheight = settings.frameheight || 54;
		settings.anchorPoint = {
			x: 0.5,
			y: 0.1
		};

        // Put user code here //
        this.originX = x;
        this.originY = y;
        //  End of user code  //

		x += me.game.viewport.width*0.5;
		y += me.game.viewport.height*0.5;
		this._super(me.GUI_Object, 'init', [x, y, settings]);

		this.alpha = 1;
		this.floating = true;
		this.alwaysUpdate = false;
		this.updateWhenPaused = false;
		this.isPersistent = false;
		this.var = {};

        // Put user code here //
    
        //  End of user code  //
	},

	update: function(dt){
		var drawNextFrame = this._super(me.GUI_Object, 'update', [dt]);
        // Put user code here //
        
        //  End of user code  //
		return drawNextFrame;
	},

	draw : function(renderer, rect) {
		this._super(me.GUI_Object, 'draw', [renderer, rect]);
        // Put user code here //
        
        //  End of user code  //
	},

	onActivateEvent : function() {
		this._super(me.GUI_Object, 'onActivateEvent');
        // Put user code here //
        
        //  End of user code  //
	},

	onDeactivateEvent : function() {
		this._super(me.GUI_Object, 'onDeactivateEvent');

		me.input.releasePointerEvent("pointerdown", this, this._pointerDownHandler);
        // Put user code here //
        
        //  End of user code  //
	},

	onClick : function(pointer) {
        // Put user code here //
        
        //  End of user code  //
	},

    // Put user code here //
    onClick:function (event){
        me.state.pause(false); 
        me.state.resume(true);
        me.audio.stop("gameover");
        me.state.change("worldMap");
        // me.audio.resume("bgm-menu");
        return false;
    },
    
    close: function(){
        this.pos.set(-900000, -900000, this.pos.z);
    },
    
    show: function(){
        this.pos.set(this.originX, this.originY, this.pos.z);
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();