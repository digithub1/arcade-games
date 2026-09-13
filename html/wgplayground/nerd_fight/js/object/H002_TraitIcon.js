(function(){
// Put user code here //
 
//  End of user code  //

game.object.H002_TraitIcon = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "Lab";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"ming highlight attack damage","ming highlight damage recevied reduced","ming highlight defeat time reduced",
			"ming highlight health increased","ming highlight normal attack have stun chance","ming highlight ulti cooldown reduced",
			"ming highlight ulti duration increased","ming normal defeat time reduced","ming normal damage recevied reduced",
			"ming normal attack damage","ming normal health increased","ming normal normal attack have stun chance",
			"ming normal ulti cooldown reduced","ming normal ulti duration increased"
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
		this.alwaysUpdate = true;
		this.updateWhenPaused = false;
		this.isPersistent = false;

		this.addAnimation('1highlight', [{ name: "ming highlight attack damage", delay: 100 }]);
		this.addAnimation('1normal', [{ name: "ming normal attack damage", delay: 100 }]);
		this.addAnimation('2normal', [{ name: "ming normal damage recevied reduced", delay: 100 }]);
		this.addAnimation('2highlight', [{ name: "ming highlight damage recevied reduced", delay: 100 }]);
		this.addAnimation('3normal', [{ name: "ming normal defeat time reduced", delay: 100 }]);
		this.addAnimation('3highlight', [{ name: "ming highlight defeat time reduced", delay: 100 }]);
		this.addAnimation('4highlight', [{ name: "ming highlight health increased", delay: 100 }]);
		this.addAnimation('4normal', [{ name: "ming normal health increased", delay: 100 }]);
		this.addAnimation('5normal', [{ name: "ming normal normal attack have stun chance", delay: 100 }]);
		this.addAnimation('5highlight', [{ name: "ming highlight normal attack have stun chance", delay: 100 }]);
		this.addAnimation('6normal', [{ name: "ming normal ulti cooldown reduced", delay: 100 }]);
		this.addAnimation('6highlight', [{ name: "ming highlight ulti cooldown reduced", delay: 100 }]);
		this.addAnimation('7highlight', [{ name: "ming highlight ulti duration increased", delay: 100 }]);
		this.addAnimation('7normal', [{ name: "ming normal ulti duration increased", delay: 100 }]);
		this.setCurrentAnimation('1highlight');
		this.isKinematic = false;
		this._pointerDownHandler = me.input.registerPointerEvent("pointerdown", this, this.onClick.bind(this));
		this.var = {};

        // Put user code here //
        let vars = ['traitNumber'];
        verify(settings, vars);
        game.util.spread(this, settings, vars);
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
            me.audio.play('sfx-button', false);
            game.var.labManager.uiLab.traitContainer.DeselectTrait();
            this.setCurrentAnimation(this.traitNumber + 'highlight');
            game.var.labManager.uiLab.traitContainer.ClickTrait(this.traitNumber);
        }
        //  End of user code  //
	},

    // Put user code here //
    
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();