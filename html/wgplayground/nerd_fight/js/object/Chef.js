(function(){
// Put user code here //
 
//  End of user code  //

game.object.Chef = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "Chef";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"chef anim0000","chef anim0002","chef anim0003",
			"chef anim0005","chef anim0007","chef anim0010",
			"chef anim0011","chef anim0012","chef anim0014"
		], settings);
		settings.framewidth = settings.framewidth || 666;
		settings.frameheight = settings.frameheight || 492;
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

		this.addAnimation('idle', [{ name: "chef anim0000", delay: 100 }]);
		this.addAnimation('talk', [{ name: "chef anim0003", delay: 200 },{ name: "chef anim0005", delay: 200 },{ name: "chef anim0007", delay: 200 },{ name: "chef anim0010", delay: 200 },{ name: "chef anim0012", delay: 200 },{ name: "chef anim0014", delay: 200 }]);
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