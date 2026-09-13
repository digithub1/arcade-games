(function(){
// Put user code here //
 
//  End of user code  //

game.object.H003_TraitIcon = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "Lab";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"chintya highlight cooldown defeat increase highlight","chintya highlight attack speed increase highlight","chintya highlight critical increase highlight",
			"chintya highlight damage increase highlight","chintya highlight health increase highlight","chintya highlight Health regen Highligt",
			"chintya highlight ulti damage increase highlight","chintya normal attack speed increase","chintya normal cooldown defeat increase",
			"chintya normal critical increase","chintya normal damage increase","chintya normal ulti damage increase",
			"chintya normal Health regen","chintya normal health increase"
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

		this.addAnimation('1normal', [{ name: "chintya normal attack speed increase", delay: 100 }]);
		this.addAnimation('1highlight', [{ name: "chintya highlight attack speed increase highlight", delay: 100 }]);
		this.addAnimation('2highlight', [{ name: "chintya highlight cooldown defeat increase highlight", delay: 100 }]);
		this.addAnimation('2normal', [{ name: "chintya normal cooldown defeat increase", delay: 100 }]);
		this.addAnimation('3normal', [{ name: "chintya normal critical increase", delay: 100 }]);
		this.addAnimation('3highlight', [{ name: "chintya highlight critical increase highlight", delay: 100 }]);
		this.addAnimation('4highlight', [{ name: "chintya highlight damage increase highlight", delay: 100 }]);
		this.addAnimation('4normal', [{ name: "chintya normal damage increase", delay: 100 }]);
		this.addAnimation('5normal', [{ name: "chintya normal health increase", delay: 100 }]);
		this.addAnimation('5highlight', [{ name: "chintya highlight health increase highlight", delay: 100 }]);
		this.addAnimation('6normal', [{ name: "chintya normal Health regen", delay: 100 }]);
		this.addAnimation('6highlight', [{ name: "chintya highlight Health regen Highligt", delay: 100 }]);
		this.addAnimation('7normal', [{ name: "chintya normal ulti damage increase", delay: 100 }]);
		this.addAnimation('7highlight', [{ name: "chintya highlight ulti damage increase highlight", delay: 100 }]);
		this.setCurrentAnimation('1normal');
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