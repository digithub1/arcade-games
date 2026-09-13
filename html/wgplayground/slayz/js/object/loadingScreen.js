(function(){
// Put user code here //
 
//  End of user code  //

game.object.loadingScreen = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "battle";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"loadingStage - 01","loadingStage - 02","loadingStage - 03",
			"loadingStage - 04","loadingStage - 05","loadingStage - 06",
			"loadingStage - 07","loadingStage - 08","loadingStage - 09",
			"loadingStage - 10","loadingStage - 11","loadingStage - 12",
			"loadingStage - 13","loadingStage - 14","loadingStage - 15"
		], settings);
		settings.framewidth = settings.framewidth || 100;
		settings.frameheight = settings.frameheight || 100;
		settings.anchorPoint = {
			x: 0.5,
			y: 0.5
		};

        // Put user code here //
        
        //  End of user code  //

		this._super(me.Sprite, 'init', [x, y, settings]);

		this.alpha = 1;
		this.floating = true;
		this.alwaysUpdate = false;
		this.updateWhenPaused = false;
		this.isPersistent = false;

		this.addAnimation('Animation 1', [{ name: "loadingStage - 01", delay: 100 },{ name: "loadingStage - 02", delay: 100 },{ name: "loadingStage - 03", delay: 100 },{ name: "loadingStage - 04", delay: 100 },{ name: "loadingStage - 05", delay: 100 },{ name: "loadingStage - 06", delay: 100 },{ name: "loadingStage - 07", delay: 100 },{ name: "loadingStage - 08", delay: 100 },{ name: "loadingStage - 09", delay: 100 },{ name: "loadingStage - 10", delay: 100 },{ name: "loadingStage - 11", delay: 100 },{ name: "loadingStage - 12", delay: 100 },{ name: "loadingStage - 13", delay: 100 },{ name: "loadingStage - 14", delay: 100 },{ name: "loadingStage - 15", delay: 100 }]);
		this.setCurrentAnimation('Animation 1');
		this.var = {};

        // Put user code here //
        game.util.scale(this, 2);
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