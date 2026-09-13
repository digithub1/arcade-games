(function(){
// Put user code here //
 
//  End of user code  //

game.object.fallenSmoke = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "asia";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"fallen_smoke_0","fallen_smoke_1","fallen_smoke_2",
			"fallen_smoke_3","fallen_smoke_4"
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

		this.addAnimation('idle', [{ name: "fallen_smoke_0", delay: 100 },{ name: "fallen_smoke_1", delay: 100 },{ name: "fallen_smoke_2", delay: 100 },{ name: "fallen_smoke_3", delay: 100 },{ name: "fallen_smoke_4", delay: 100 }]);
		this.addAnimation('stop', [{ name: "fallen_smoke_4", delay: 100 },{ name: "fallen_smoke_4", delay: 100 }]);
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