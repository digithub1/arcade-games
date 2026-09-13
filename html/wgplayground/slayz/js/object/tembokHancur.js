(function(){
// Put user code here //
 
//  End of user code  //

game.object.tembokHancur = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "america";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"tembokHancur_00","tembokHancur_01","tembokHancur_02",
			"tembokHancur_03","tembokHancur_04","tembokHancur_05",
			"tembokHancur_06","tembokHancur_07","tembokHancur_08",
			"tembokHancur_09","tembokHancur_10","tembokHancur_11",
			"tembokHancur_12","tembokHancur_13","tembokHancur_14",
			"tembokHancur_15"
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

		this.addAnimation('1', [{ name: "tembokHancur_00", delay: 100 },{ name: "tembokHancur_01", delay: 100 },{ name: "tembokHancur_02", delay: 100 },{ name: "tembokHancur_03", delay: 100 },{ name: "tembokHancur_04", delay: 100 },{ name: "tembokHancur_05", delay: 100 },{ name: "tembokHancur_06", delay: 100 },{ name: "tembokHancur_07", delay: 100 },{ name: "tembokHancur_08", delay: 100 },{ name: "tembokHancur_09", delay: 100 },{ name: "tembokHancur_10", delay: 100 },{ name: "tembokHancur_11", delay: 100 },{ name: "tembokHancur_12", delay: 100 },{ name: "tembokHancur_13", delay: 100 },{ name: "tembokHancur_14", delay: 100 },{ name: "tembokHancur_15", delay: 100 }]);
		this.setCurrentAnimation('1');
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