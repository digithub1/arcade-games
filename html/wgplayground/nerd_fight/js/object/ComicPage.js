(function(){
// Put user code here //
 
//  End of user code  //

game.object.ComicPage = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "Comic";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"comic 1","comic 2","comic 3",
			"comic 4","comic 5","comic 6",
			"comic 7","comic 8"
		], settings);
		settings.framewidth = settings.framewidth || 100;
		settings.frameheight = settings.frameheight || 100;
		settings.anchorPoint = {
			x: 0,
			y: 0
		};

        // Put user code here //
        
        //  End of user code  //

		this._super(me.Sprite, 'init', [x, y, settings]);

		this.alpha = 1;
		this.floating = true;
		this.alwaysUpdate = false;
		this.updateWhenPaused = false;
		this.isPersistent = false;

		this.addAnimation('1', [{ name: "comic 1", delay: 100 }]);
		this.addAnimation('2', [{ name: "comic 2", delay: 100 }]);
		this.addAnimation('3', [{ name: "comic 3", delay: 100 }]);
		this.addAnimation('4', [{ name: "comic 4", delay: 100 }]);
		this.addAnimation('5', [{ name: "comic 5", delay: 100 }]);
		this.addAnimation('6', [{ name: "comic 6", delay: 100 }]);
		this.addAnimation('7', [{ name: "comic 7", delay: 100 }]);
		this.addAnimation('8', [{ name: "comic 8", delay: 100 }]);
		this.setCurrentAnimation('1');
		this.var = {};

        // Put user code here //
        game.util.scale(this, 2);
        this.pos.x = me.game.viewport.width / 2;
        this.pos.y = me.game.viewport.height / 2;
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