(function(){
// Put user code here //
 
//  End of user code  //

game.object.ZB09CinematicIntro = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "australiaZombieBos";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"roarr","sikil_1","sikil_2"
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

		this.addAnimation('1', [{ name: "sikil_1", delay: 100 }]);
		this.addAnimation('2', [{ name: "sikil_2", delay: 100 }]);
		this.addAnimation('3', [{ name: "roarr", delay: 100 }]);
		this.setCurrentAnimation('1');
		this.var = {};

        // Put user code here //
        this.tween = new me.Tween();
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
        me.timer.clearTimeout(this.delay);
        this.tween.stop();
        //  End of user code  //
	},

    // Put user code here //
    tween1: function(callback){
        me.audio.play("sfx-zombie-flamethrower", false, null, game.user.userData.sound.SFX);
        this.tween = new me.Tween(this.pos)
        .to({y:this.pos.y+600}, 100)
        .onComplete(()=>{
            let to = true;
            this.delay = me.timer.setTimeout(()=>{
                if(to){
                    to = false;
                    callback();
                }
            }, 250);
        });
        this.tween.start();
    },
    tween2: function(callback){
        me.audio.play("sfx-zombie-flamethrower", false, null, game.user.userData.sound.SFX);
        this.tween = new me.Tween(this.pos)
        .to({y:this.pos.y+600}, 100)
        .onComplete(()=>{
            let to = true;
            this.delay = me.timer.setTimeout(()=>{
                if(to){
                    to = false;
                    callback();
                }
            }, 250);
        });
        this.tween.start();
    },
    tween3: function(callback){
        this.tween = new me.Tween(this.pos)
        .to({x:this.pos.x-1500}, 100)
        .onComplete(()=>{
            let to = true;
            me.audio.play("sfx-abdomination-die", false, null, game.user.userData.sound.SFX);
            this.delay = me.timer.setTimeout(()=>{
                if(to){
                    to = false;
                    callback();
                }
            }, 1000);
        });
        this.tween.start();
    },
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();