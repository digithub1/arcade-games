(function(){
// Put user code here //
 
//  End of user code  //

game.object.ADS_Notif = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "battle";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"ADS_NoADS","ADS_Rewards"
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

		this.addAnimation('0', [{ name: "ADS_NoADS", delay: 1 }]);
		this.addAnimation('1', [{ name: "ADS_Rewards", delay: 1 }]);
		this.setCurrentAnimation('0');
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
    on: function(){
        let tween = new me.Tween(this.pos)
            .to({y:me.game.viewport.height/2}, 750)
            .easing(me.Tween.Easing.Linear.None)
            .onComplete(()=>{
                me.timer.setTimeout(()=>{
                    this.off();
                }, 2000);
            });
        tween.start();
    },
    off: function(){
        let tween = new me.Tween(this.pos)
            .to({y:me.game.viewport.height/2-me.game.viewport.height*2}, 1000)
            .easing(me.Tween.Easing.Linear.None)
            .onComplete(()=>{
                me.audio.unmuteAll();
                if(this.isCurrentAnimation("1")){
                    me.state.current().component.stage.endKonten.continue.func();
                }
            });
        tween.start();
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();