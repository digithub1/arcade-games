(function(){
// Put user code here //

//  End of user code  //

game.object.ChyntiaSpcEff = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "Projectile";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"CHYN SPECIAL EFFECT-0001","CHYN SPECIAL EFFECT-0002","CHYN SPECIAL EFFECT-0003",
			"CHYN SPECIAL EFFECT-0004","CHYN SPECIAL EFFECT-0006"
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

		this.addAnimation('idle', [{ name: "CHYN SPECIAL EFFECT-0001", delay: 100 },{ name: "CHYN SPECIAL EFFECT-0002", delay: 100 },{ name: "CHYN SPECIAL EFFECT-0003", delay: 100 },{ name: "CHYN SPECIAL EFFECT-0004", delay: 100 },{ name: "CHYN SPECIAL EFFECT-0006", delay: 100 }]);
		this.addAnimation('stop', [{ name: "CHYN SPECIAL EFFECT-0006", delay: 100 }]);
		this.setCurrentAnimation('idle');
		this.var = {};

        // Put user code here //
        
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
        
        //  End of user code  //
	},

    // Put user code here //
    
    //  End of user code  //
});

// Put user code here //

//  End of user code  //
})();