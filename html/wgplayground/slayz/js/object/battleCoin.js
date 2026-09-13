(function(){
// Put user code here //
 
//  End of user code  //

game.object.battleCoin = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "effect";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"animCoin-00","animCoin-10","animCoin-13",
			"animCoin-16","animCoin-19"
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

		this.addAnimation('idle', [{ name: "animCoin-00", delay: 100 },{ name: "animCoin-19", delay: 100 },{ name: "animCoin-10", delay: 100 },{ name: "animCoin-13", delay: 100 },{ name: "animCoin-16", delay: 100 }]);
		this.setCurrentAnimation('idle');
		this.var = {};

        // Put user code here //
        this.setCurrentAnimation('idle',()=>{
            let toOnce = true;
            this.timeOt1 = me.timer.setTimeout(()=>{
                toOnce = false;
                me.game.world.removeChildNow(this);
            }, 500);
            // return false;
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