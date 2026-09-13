(function(){
// Put user code here //
 
//  End of user code  //

game.object.ZB01GreenSmoke = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "americaZombieBos";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"ZB01_greenSmoke-00","ZB01_greenSmoke-02","ZB01_greenSmoke-04",
			"ZB01_greenSmoke-06","ZB01_greenSmoke-08"
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
		this.alwaysUpdate = true;
		this.updateWhenPaused = false;
		this.isPersistent = false;

		this.addAnimation('idle', [{ name: "ZB01_greenSmoke-00", delay: 100 },{ name: "ZB01_greenSmoke-02", delay: 100 },{ name: "ZB01_greenSmoke-04", delay: 100 },{ name: "ZB01_greenSmoke-04", delay: 100 },{ name: "ZB01_greenSmoke-06", delay: 100 },{ name: "ZB01_greenSmoke-08", delay: 100 }]);
		this.setCurrentAnimation('idle');
		this.var = {};

        // Put user code here //
        let to = true;
        this.setCurrentAnimation('idle',()=>{
            if(to){
                to = false;
                me.game.world.removeChild(this);
            }
            return false;
        });
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