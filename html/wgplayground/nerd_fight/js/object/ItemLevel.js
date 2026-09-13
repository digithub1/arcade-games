(function(){
// Put user code here //
 
//  End of user code  //

game.object.ItemLevel = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "Lab";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"slot kosong","graduate (new skin) token atomic","graduate (new skin) token common",
			"graduate (new skin) token spectacular","graduate (new skin) token superb","graduate (new skin) token"
		], settings);
		settings.framewidth = settings.framewidth || 92;
		settings.frameheight = settings.frameheight || 77;
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

		this.addAnimation('empty', [{ name: "slot kosong", delay: 100 }]);
		this.addAnimation('atomic', [{ name: "graduate (new skin) token atomic", delay: 100 }]);
		this.addAnimation('common', [{ name: "graduate (new skin) token common", delay: 100 }]);
		this.addAnimation('spectacular', [{ name: "graduate (new skin) token spectacular", delay: 100 }]);
		this.addAnimation('radical', [{ name: "graduate (new skin) token", delay: 100 }]);
		this.addAnimation('superb', [{ name: "graduate (new skin) token superb", delay: 100 }]);
		this.setCurrentAnimation('empty');
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