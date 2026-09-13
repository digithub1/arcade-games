(function(){
// Put user code here //
 
//  End of user code  //

game.object.UpgradeButton = me.GUI_Object.extend({
	init: function(x, y, settings = {}){
		settings.texture = "Lab";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"upgrade","upgrades","upgrade2"
		], settings);
		settings.framewidth = settings.framewidth || 139;
		settings.frameheight = settings.frameheight || 76;
		settings.anchorPoint = {
			x: 0.5,
			y: 0.5
		};

        // Put user code here //
        
        //  End of user code  //

		x += me.game.viewport.width*0.5;
		y += me.game.viewport.height*0.5;
		this._super(me.GUI_Object, 'init', [x, y, settings]);

		this.alpha = 1;
		this.floating = true;
		this.alwaysUpdate = true;
		this.updateWhenPaused = false;
		this.isPersistent = false;

		this.addAnimation('idle', [{ name: "upgrades", delay: 100 }]);
		this.addAnimation('pressed', [{ name: "upgrade2", delay: 100 }]);
		this.addAnimation('disable', [{ name: "upgrade", delay: 100 }]);
		this.setCurrentAnimation('idle');
		this.var = {};

        // Put user code here //
        
        //  End of user code  //
	},

	update: function(dt){
		var drawNextFrame = this._super(me.GUI_Object, 'update', [dt]);
        // Put user code here //
        
        //  End of user code  //
		return drawNextFrame;
	},

	draw : function(renderer, rect) {
		this._super(me.GUI_Object, 'draw', [renderer, rect]);
        // Put user code here //
        
        //  End of user code  //
	},

	onActivateEvent : function() {
		this._super(me.GUI_Object, 'onActivateEvent');
        // Put user code here //
        
        //  End of user code  //
	},

	onDeactivateEvent : function() {
		this._super(me.GUI_Object, 'onDeactivateEvent');

		me.input.releasePointerEvent("pointerdown", this, this._pointerDownHandler);
        // Put user code here //
        
        //  End of user code  //
	},

	onClick : function(pointer) {
        // Put user code here //
        
        //  End of user code  //
	},

    // Put user code here //
    onClick : function(event){
        if(this.isCurrentAnimation('idle') && this.alpha == 1){
            me.audio.play('sfx-button', false);
                this.setCurrentAnimation('pressed');
                this.container.UpgradeItem();
                /*this.timer = new me.timer.setTimeout(function(){
                    this.container.UpgradeItem();
                }.bind(this), 200);*/
        }
    },
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();