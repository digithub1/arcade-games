(function(){
// Put user code here //
 
//  End of user code  //

game.object.TimeAttackDoor = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "Door";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"time attack door","time attack door2","time attack door3",
			"time attack door4"
		], settings);
		settings.framewidth = settings.framewidth || 320;
		settings.frameheight = settings.frameheight || 660;
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

		this.addAnimation('idle', [{ name: "time attack door", delay: 100 }]);
		this.addAnimation('open', [{ name: "time attack door", delay: 100 },{ name: "time attack door2", delay: 100 },{ name: "time attack door3", delay: 100 },{ name: "time attack door4", delay: 100 }]);
		this.setCurrentAnimation('idle');
		this.isKinematic = false;
		this._pointerDownHandler = me.input.registerPointerEvent("pointerdown", this, this.onClick.bind(this));
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

		me.input.releasePointerEvent("pointerdown", this, this._pointerDownHandler);
        // Put user code here //
        
        //  End of user code  //
	},

	onClick : function(pointer) {
        // Put user code here //
		this.component.OpenTimeAtk();
		//me.state.change("Loading", "TimeAttack");
		/*if(game.var.homebase.achContainer.backPanel.alpha == 0){
    		me.audio.play('sfx-bukapintu', false);
            this.setCurrentAnimation('open', function(){
                me.audio.stop('bgm-mainmenu');
    			if(game.user.userData.comic == 'unfinished'){
    			    me.state.change("NerdComic");
    			}
    			else{
                    game.var.nextLevel = 'TimeAttack';
                    me.state.change("Loading", "TimeAttack");
    			}
    			return false;
    		}.bind(this));
		}*/
        //  End of user code  //
	},

    // Put user code here //
    
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();