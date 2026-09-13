(function(){
// Put user code here //
 
//  End of user code  //

game.object.H004_TraitIcon = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "Lab";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"eugene highlight attack speed increase","eugene highlight cooldown ult decreased","eugene highlight critical damage",
			"eugene highlight defeat time decreased","eugene highlight health increased","eugene highlight normal attack increased",
			"eugene highlight ulti damage increased","eugene normal attack speed increase","eugene normal cooldown ult decreased",
			"eugene normal critical damage","eugene normal defeat time decreased","eugene normal ulti damage increased",
			"eugene normal normal attack increased","eugene normal health increased"
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

		this.addAnimation('1highlight', [{ name: "eugene highlight normal attack increased", delay: 100 }]);
		this.addAnimation('1normal', [{ name: "eugene normal normal attack increased", delay: 100 }]);
		this.addAnimation('2highlight', [{ name: "eugene highlight cooldown ult decreased", delay: 100 }]);
		this.addAnimation('2normal', [{ name: "eugene normal cooldown ult decreased", delay: 100 }]);
		this.addAnimation('3highlight', [{ name: "eugene highlight critical damage", delay: 100 }]);
		this.addAnimation('3normal', [{ name: "eugene normal critical damage", delay: 100 }]);
		this.addAnimation('4normal', [{ name: "eugene normal defeat time decreased", delay: 100 }]);
		this.addAnimation('4highlight', [{ name: "eugene highlight defeat time decreased", delay: 100 }]);
		this.addAnimation('5normal', [{ name: "eugene normal health increased", delay: 100 }]);
		this.addAnimation('5highlight', [{ name: "eugene highlight health increased", delay: 100 }]);
		this.addAnimation('6highlight', [{ name: "eugene highlight normal attack increased", delay: 100 }]);
		this.addAnimation('6normal', [{ name: "eugene normal normal attack increased", delay: 100 }]);
		this.addAnimation('7normal', [{ name: "eugene normal ulti damage increased", delay: 100 }]);
		this.addAnimation('7highlight', [{ name: "eugene highlight ulti damage increased", delay: 100 }]);
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