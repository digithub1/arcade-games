(function(){
// Put user code here //
 
//  End of user code  //

game.object.L5003_Lampu = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "asia";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"L5003_lampu"
		], settings);
		settings.framewidth = settings.framewidth || 288;
		settings.frameheight = settings.frameheight || 114;
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
        this.tweenMove = new me.Tween();
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
        this.tweenMove.stop();
        //  End of user code  //
	},

    // Put user code here //
    tween: function(){
        this.tweenMove = new me.Tween(this)
            .to({alpha:0.4}, 1000)
            .yoyo(true)
            .repeat(Infinity);
            
        this.tweenMove.start();
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();