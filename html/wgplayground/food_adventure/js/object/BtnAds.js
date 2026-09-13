(function(){
// Put user code here //
 
//  End of user code  //

game.object.BtnAds = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "UI";
		settings.image = game.textureMap.get(settings.texture);
		game.util.__populateAtlasIndices([
			"ads-button"
		], settings);
		settings.framewidth = settings.framewidth || 100;
		settings.frameheight = settings.frameheight || 100;
		settings.anchorPoint = {
			x: 0.5,
			y: 0.5
		};

        // Put user code here //
        this.container = settings.container;
        //  End of user code  //

		x += me.game.viewport.width*0.5;
		y += me.game.viewport.height*0.5;
		this._super(me.Sprite, 'init', [x, y, settings]);
		delete settings.image;
		this.alpha = 1;
		this.floating = true;
		this.alwaysUpdate = false;
		this.updateWhenPaused = false;
		this.isPersistent = false;
		this.isKinematic = false;
		this._pointerDownHandler = me.input.registerPointerEvent("pointerdown", this, this.onClick.bind(this));
		this.var = {};

        // Put user code here //
        this.click = true;
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

		me.input.releasePointerEvent("pointerdown", this, this._pointerDownHandler);
        // Put user code here //
        
        //  End of user code  //
	},

	onClick : function(pointer) {
        // Put user code here //
        if(this.click){
            this.currentTransform.translate(this.pos.x, this.pos.x);
            this.currentTransform.scale(1, 0.99);
            this.currentTransform.translate(-this.pos.x, -this.pos.x);
            me.game.repaint();
            //sound
            me.audio.play("sfx-button2");
            //--
            let once = true;
            me.timer.setTimeout(()=>{
                if(once){
                    once = false;
                    this.onRelease();
                }
            }, 100);
        }
        return false;
        //  End of user code  //
	},

    // Put user code here //
    onRelease : function(event){
        if(this.click){
            this.click = false;
            this.currentTransform.identity();
            me.game.repaint();
            
            game.util.resumeGame();
            let once = true;
            me.timer.setTimeout(()=>{
                if(once){
                    once = false;
                    if(gakAdaADS){
                        //Ads gagal
                            this.container.noAdsFunc(()=>{
                                this.click = true;
                            });
                        //--
                        
                        //Ads berhasil
                            // this.container.doubleScoreFunc();
                        //--
                    }else{
                        me.audio.muteAll();
                        adShowReward(()=>{
                            rewardReady();
                        },()=>{
                            rewardSuccess(()=>{
                                me.audio.unmuteAll();
                                this.container.doubleScoreFunc();
                            });
                        },()=>{
                            rewardFail(()=>{
                                me.audio.unmuteAll();
                                this.container.noAdsFunc(()=>{
                                    this.click = true;
                                });
                            });
                        });
                    }
                        
                }
            }, 100);
        }
    },
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();