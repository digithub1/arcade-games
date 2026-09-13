(function(){
// Put user code here //
 
//  End of user code  //

game.object.ZB10FallSmoke = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "africaZombieBos";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"ZB10_fallen_smoke_0","ZB10_fallen_smoke_1","ZB10_fallen_smoke_2",
			"ZB10_fallen_smoke_3","ZB10_fallen_smoke_4"
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

		this.addAnimation('Animation 1', [{ name: "ZB10_fallen_smoke_0", delay: 100 },{ name: "ZB10_fallen_smoke_1", delay: 100 },{ name: "ZB10_fallen_smoke_2", delay: 100 },{ name: "ZB10_fallen_smoke_3", delay: 100 },{ name: "ZB10_fallen_smoke_4", delay: 100 }]);
		this.setCurrentAnimation('Animation 1');
		this.var = {};

        // Put user code here //
        let to = true;
        this.setCurrentAnimation('Animation 1',()=>{
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