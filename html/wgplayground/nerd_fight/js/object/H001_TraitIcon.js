(function(){
// Put user code here //
 
//  End of user code  //

game.object.H001_TraitIcon = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "Lab";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"anya highlight  ulti damage highlight","anya highlight attack damage","anya highlight attack speed ",
			"anya highlight confused","anya highlight damage reduction","anya highlight Health increased ",
			"anya highlight ult cooldown reduction ","anya normal attack damage","anya normal attack speed ",
			"anya normal Health increased ","anya normal damage reduction","anya normal confused",
			"anya normal ult cooldown reduction ","anya normal ulti damage speed"
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

		this.addAnimation('1normal', [{ name: "anya normal ulti damage speed", delay: 100 }]);
		this.addAnimation('1highlight', [{ name: "anya highlight  ulti damage highlight", delay: 100 }]);
		this.addAnimation('2normal', [{ name: "anya normal attack speed ", delay: 100 }]);
		this.addAnimation('2highlight', [{ name: "anya highlight attack speed ", delay: 100 }]);
		this.addAnimation('3normal', [{ name: "anya normal attack damage", delay: 100 }]);
		this.addAnimation('3highlight', [{ name: "anya highlight attack damage", delay: 100 }]);
		this.addAnimation('4normal', [{ name: "anya normal confused", delay: 100 }]);
		this.addAnimation('4highlight', [{ name: "anya highlight confused", delay: 100 }]);
		this.addAnimation('5normal', [{ name: "anya normal damage reduction", delay: 100 }]);
		this.addAnimation('5highlight', [{ name: "anya highlight damage reduction", delay: 100 }]);
		this.addAnimation('6normal', [{ name: "anya normal Health increased ", delay: 100 }]);
		this.addAnimation('6highlight', [{ name: "anya highlight Health increased ", delay: 100 }]);
		this.addAnimation('7highlight', [{ name: "anya highlight ult cooldown reduction ", delay: 100 }]);
		this.addAnimation('7normal', [{ name: "anya normal ult cooldown reduction ", delay: 100 }]);
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