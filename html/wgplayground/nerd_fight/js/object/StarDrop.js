(function(){
// Put user code here //
 
//  End of user code  //

game.object.StarDrop = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "Campaign";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"Star effect_1","Star effect_3","Star effect_7",
			"Star effect_9","Star effect_11","Star effect_13",
			"Star effect_15"
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
		this.alwaysUpdate = true;
		this.updateWhenPaused = false;
		this.isPersistent = false;

		this.addAnimation('drop', [{ name: "Star effect_1", delay: 100 },{ name: "Star effect_3", delay: 100 },{ name: "Star effect_7", delay: 100 },{ name: "Star effect_9", delay: 100 },{ name: "Star effect_11", delay: 100 },{ name: "Star effect_13", delay: 100 },{ name: "Star effect_15", delay: 100 }]);
		this.setCurrentAnimation('drop');
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