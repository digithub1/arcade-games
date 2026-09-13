(function(){
// Put user code here //
 
//  End of user code  //

game.object.L6003SmokeCar = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "australia";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"L6003_SmokeCar_1","L6003_SmokeCar_2","L6003_SmokeCar_3",
			"L6003_SmokeCar_4","L6003_SmokeCar_5","L6003_SmokeCar_6",
			"L6003_SmokeCar_7","L6003_SmokeCar_8"
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

		this.addAnimation('Animation 1', [{ name: "L6003_SmokeCar_1", delay: 100 },{ name: "L6003_SmokeCar_2", delay: 100 },{ name: "L6003_SmokeCar_3", delay: 100 },{ name: "L6003_SmokeCar_4", delay: 100 },{ name: "L6003_SmokeCar_5", delay: 100 },{ name: "L6003_SmokeCar_6", delay: 100 },{ name: "L6003_SmokeCar_7", delay: 100 },{ name: "L6003_SmokeCar_8", delay: 100 }]);
		this.setCurrentAnimation('Animation 1');
		this.var = {};

        // Put user code here //
        game.util.scale(this, 1.2);
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
        me.game.world.removeChild(this);
        //  End of user code  //
	},

    // Put user code here //
    
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();