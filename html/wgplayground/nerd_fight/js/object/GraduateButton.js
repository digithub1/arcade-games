(function(){
// Put user code here //
 
//  End of user code  //

game.object.GraduateButton = me.GUI_Object.extend({
	init: function(x, y, settings = {}){
		settings.texture = "Lab";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"GRADUATE","GRADUATE 2","locked"
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
		this._super(me.GUI_Object, 'init', [x, y, settings]);

		this.alpha = 1;
		this.floating = true;
		this.alwaysUpdate = false;
		this.updateWhenPaused = false;
		this.isPersistent = false;

		this.addAnimation('idle', [{ name: "GRADUATE", delay: 100 }]);
		this.addAnimation('pressed', [{ name: "GRADUATE 2", delay: 100 }]);
		this.addAnimation('disable', [{ name: "locked", delay: 100 }]);
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

        // Put user code here //
        
        //  End of user code  //
	},

    // Put user code here //
    onClick : function(event){
        if(this.isCurrentAnimation('idle') && this.alpha == 1){
            this.container.upgraded = false;
            
            me.audio.play('sfx-upgrade', false);
            this.setCurrentAnimation('pressed');
            this.timer = setTimeout(function(){
                this.container.UpgradeSkin();
            }.bind(this), 200);
        }
    },
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();