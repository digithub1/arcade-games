(function(){
// Put user code here //
 
//  End of user code  //

game.object.battleDieAnim = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "effect";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"dieSkull-01","dieSkull-04","dieSkull-13",
			"dieSkull-16","dieSkull-19","dieMeat-01",
			"dieMeat-04","dieMeat-13","dieMeat-16",
			"dieMeat-19"
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

		this.addAnimation('1', [{ name: "dieSkull-01", delay: 115 },{ name: "dieSkull-04", delay: 115 },{ name: "dieSkull-13", delay: 115 },{ name: "dieSkull-16", delay: 115 },{ name: "dieSkull-19", delay: 115 }]);
		this.addAnimation('2', [{ name: "dieMeat-01", delay: 115 },{ name: "dieMeat-04", delay: 115 },{ name: "dieMeat-13", delay: 115 },{ name: "dieMeat-16", delay: 115 },{ name: "dieMeat-19", delay: 115 }]);
		this.setCurrentAnimation('1');
		this.var = {};

        // Put user code here //
        let index = Math.floor(Math.random() * 2) + 1;
        this.setCurrentAnimation(index,()=>{
            let toOnce = true;
            this.timeOt1 = me.timer.setTimeout(()=>{
                if(toOnce){
                    toOnce = false;
                    me.game.world.removeChildNow(this);
                }
            }, 500);
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