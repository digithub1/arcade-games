(function(){
// Put user code here //
 
//  End of user code  //

game.object.WaveBar = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "Campaign";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"wave bar 1","wave bar 2","wave bar 3",
			"wave bar 5","wave bar 7","wave bar 8",
			"wave bar 9","wave bar 10","wave bar 4",
			"wave bar 6"
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

		this.addAnimation('1', [{ name: "wave bar 1", delay: 100 }]);
		this.addAnimation('2', [{ name: "wave bar 2", delay: 100 }]);
		this.addAnimation('3', [{ name: "wave bar 3", delay: 100 }]);
		this.addAnimation('4', [{ name: "wave bar 4", delay: 100 }]);
		this.addAnimation('5', [{ name: "wave bar 5", delay: 100 }]);
		this.addAnimation('6', [{ name: "wave bar 6", delay: 100 }]);
		this.addAnimation('7', [{ name: "wave bar 7", delay: 100 }]);
		this.addAnimation('8', [{ name: "wave bar 8", delay: 100 }]);
		this.addAnimation('9', [{ name: "wave bar 9", delay: 100 }]);
		this.addAnimation('10', [{ name: "wave bar 10", delay: 100 }]);
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