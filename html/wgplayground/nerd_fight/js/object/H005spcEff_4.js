(function(){
// Put user code here //

//  End of user code  //

game.object.H005spcEff_4 = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "NerdH005-4";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"MABEL skin 4 SPECIAL EFFECT-0004","MABEL skin 4 SPECIAL EFFECT-0005","MABEL skin 4 SPECIAL EFFECT-0006",
			"MABEL skin 4 SPECIAL EFFECT-0007","MABEL skin 4 SPECIAL EFFECT-0008","MABEL skin 4 SPECIAL EFFECT-0009",
			"MABEL skin 4 SPECIAL EFFECT-0010","MABEL skin 4 SPECIAL EFFECT-0011","MABEL skin 4 SPECIAL EFFECT-0012",
			"MABEL skin 4 SPECIAL EFFECT-0013","MABEL skin 4 SPECIAL EFFECT-0014"
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

		this.addAnimation('idle', [{ name: "MABEL skin 4 SPECIAL EFFECT-0004", delay: 100 },{ name: "MABEL skin 4 SPECIAL EFFECT-0005", delay: 100 },{ name: "MABEL skin 4 SPECIAL EFFECT-0006", delay: 100 },{ name: "MABEL skin 4 SPECIAL EFFECT-0007", delay: 100 },{ name: "MABEL skin 4 SPECIAL EFFECT-0008", delay: 100 },{ name: "MABEL skin 4 SPECIAL EFFECT-0009", delay: 100 },{ name: "MABEL skin 4 SPECIAL EFFECT-0010", delay: 100 },{ name: "MABEL skin 4 SPECIAL EFFECT-0011", delay: 100 },{ name: "MABEL skin 4 SPECIAL EFFECT-0012", delay: 100 },{ name: "MABEL skin 4 SPECIAL EFFECT-0013", delay: 100 },{ name: "MABEL skin 4 SPECIAL EFFECT-0014", delay: 100 }]);
		this.addAnimation('stop', [{ name: "MABEL skin 4 SPECIAL EFFECT-0014", delay: 100 }]);
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