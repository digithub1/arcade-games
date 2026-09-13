(function(){
// Put user code here //
 
//  End of user code  //

game.object.WP0007ujungPeluru = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "effect";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"WP0007_explosion_0","WP0007_explosion_2","WP0007_explosion_4",
			"WP0007_explosion_5"
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

		this.addAnimation('1', [{ name: "WP0007_explosion_0", delay: 100 },{ name: "WP0007_explosion_2", delay: 100 },{ name: "WP0007_explosion_4", delay: 100 },{ name: "WP0007_explosion_5", delay: 100 }]);
		this.setCurrentAnimation('1');
		this.var = {};

        // Put user code here //
        this.setCurrentAnimation('1',()=>{
            let toOnce = true;
            this.timeOt1 = me.timer.setTimeout(()=>{
                if(toOnce){
                    toOnce = false;
                    me.game.world.removeChildNow(this);
                }
            }, 300);
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
        me.timer.clearTimeout(this.timeOt1);
        //  End of user code  //
	},

    // Put user code here //
    
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();