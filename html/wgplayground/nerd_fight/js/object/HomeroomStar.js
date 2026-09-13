(function(){
// Put user code here //
 
//  End of user code  //

game.object.HomeroomStar = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "Homeroom";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"collect stars not ready","collect stars","collect star pressed"
		], settings);
		settings.framewidth = settings.framewidth || 141;
		settings.frameheight = settings.frameheight || 125;
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
		this.alwaysUpdate = true;
		this.updateWhenPaused = false;
		this.isPersistent = false;

		this.addAnimation('idle', [{ name: "collect stars", delay: 100 }]);
		this.addAnimation('disable', [{ name: "collect stars not ready", delay: 100 }]);
		this.addAnimation('pressed', [{ name: "collect star pressed", delay: 100 }]);
		this.setCurrentAnimation('idle');
		this.isKinematic = false;
		this._pointerDownHandler = me.input.registerPointerEvent("pointerdown", this, this.onClick.bind(this));
		this.var = {};

        // Put user code here //
        let vars = ['id', 'container'];
        verify(settings, vars);
		game.util.spread(this, settings, vars);
		
		this.click = false;
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
        
        if(game.user.userData.homeroomTutorial >= 1){
            if(this.isCurrentAnimation('idle') == 1 && this.click == false){
                this.click = true;
                this.setCurrentAnimation("pressed");
                let getLvl = this.container.lvlList[this.id];
                let getStar = 10 * (Math.pow(2, getLvl - 1));
                game.controller.data.claimHomeroomStar(this.id, getLvl, getStar, function(){
                    setTimeout(function() {
                        this.click = false;
                        this.CheckTime();
                    }.bind(this), 200);
                }.bind(this));
            }
        }
        //  End of user code  //
	},

    // Put user code here //
    CheckTime : function(){
        let now = new Date().getTime();
		let info = game.user.userData.homeroom;
		
		if(info[this.id] == undefined){
		    this.setCurrentAnimation('idle');
		}
		else if(now - info[this.id].time > 43200000){
		    this.setCurrentAnimation('idle');
		}
		else{
		    this.setCurrentAnimation('disable');
		}
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();