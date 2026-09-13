(function(){
// Put user code here //
 
//  End of user code  //

game.object.australiaPasir = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "australia";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"Australia_Pasir"
		], settings);
		settings.framewidth = settings.framewidth || 100;
		settings.frameheight = settings.frameheight || 100;
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
        game.util.scale(this, 2);
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
        let endPoint = this.pos.x + me.game.viewport.width + this.width;
        this.tweenMove = new me.Tween(this.pos)
            .to({x:endPoint}, 50000)
            .easing(me.Tween.Easing.Linear.None)
            // .yoyo(true)
            .repeat(Infinity);
            
        this.tweenMove.start();
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();