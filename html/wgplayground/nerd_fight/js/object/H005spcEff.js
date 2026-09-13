(function(){
// Put user code here //
 
//  End of user code  //

game.object.H005spcEff = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "NerdH005";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"MABEL SPECIAL EFFECT-0001","MABEL SPECIAL EFFECT-0002","MABEL SPECIAL EFFECT-0003",
			"MABEL SPECIAL EFFECT-0004","MABEL SPECIAL EFFECT-0005","MABEL SPECIAL EFFECT-0006",
			"MABEL SPECIAL EFFECT-0007","MABEL SPECIAL EFFECT-0008","MABEL SPECIAL EFFECT-0009",
			"MABEL SPECIAL EFFECT-00010","MABEL SPECIAL EFFECT-00011"
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

		this.addAnimation('idle', [{ name: "MABEL SPECIAL EFFECT-0001", delay: 100 },{ name: "MABEL SPECIAL EFFECT-0002", delay: 100 },{ name: "MABEL SPECIAL EFFECT-0003", delay: 100 },{ name: "MABEL SPECIAL EFFECT-0004", delay: 100 },{ name: "MABEL SPECIAL EFFECT-0005", delay: 100 },{ name: "MABEL SPECIAL EFFECT-0006", delay: 100 },{ name: "MABEL SPECIAL EFFECT-0007", delay: 100 },{ name: "MABEL SPECIAL EFFECT-0008", delay: 100 },{ name: "MABEL SPECIAL EFFECT-0009", delay: 100 },{ name: "MABEL SPECIAL EFFECT-00010", delay: 100 },{ name: "MABEL SPECIAL EFFECT-00011", delay: 100 }]);
		this.addAnimation('stop', [{ name: "MABEL SPECIAL EFFECT-00011", delay: 100 }]);
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