(function(){
// Put user code here //
 
//  End of user code  //

game.object.LvlUpBtnLab = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "Lab";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"LEVEL UP button","LEVEL UP PUSHED button","button invalid"
		], settings);
		settings.framewidth = settings.framewidth || 100;
		settings.frameheight = settings.frameheight || 90;
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

		this.addAnimation('idle', [{ name: "LEVEL UP button", delay: 100 }]);
		this.addAnimation('pressed', [{ name: "LEVEL UP PUSHED button", delay: 100 }]);
		this.addAnimation('disable', [{ name: "button invalid", delay: 100 }]);
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
        if(this.alpha == 1){
            if(this.isCurrentAnimation('idle')){
                me.audio.play('sfx-upgrade', false);
                this.setCurrentAnimation('pressed');
                game.controller.data.lvlUpHero(this.container.selectedHeroID, this.container.lvlCost, function(){
                    this.timer = setTimeout(function() {
                        this.setCurrentAnimation('disable');
                        this.container.SetLvlInfo();
                    }.bind(this), 250);
                }.bind(this));
            }
        }
        //  End of user code  //
	},

    // Put user code here //
    
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();