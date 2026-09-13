(function(){
// Put user code here //
 
//  End of user code  //

game.object.LogoMelon = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "Splash";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"melongaming"
		], settings);
		settings.framewidth = settings.framewidth || 283;
		settings.frameheight = settings.frameheight || 375;
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

		this.addAnimation('idle', [{ name: "melongaming", delay: 100 }]);
		this.setCurrentAnimation('idle');
		this.var = {};

        // Put user code here //
        this.alpha = 0;
        this.timer = setInterval(()=> {
            this.alpha += 0.005;
            if(this.alpha >= 1){
                this.alpha = 1;
                clearInterval(this.timer);
                setTimeout(()=>{
                    this.timer2 = setInterval(()=> {
                    this.alpha -= 0.005;
                        if(this.alpha <= 0){
                            this.alpha = 0;
                            clearInterval(this.timer2);
                        }
                    }, 5);
                }, 1000);
            }
        }, 5);
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