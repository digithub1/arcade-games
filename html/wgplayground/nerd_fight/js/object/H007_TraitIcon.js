(function(){
// Put user code here //
 
//  End of user code  //

game.object.H007_TraitIcon = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "Lab";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"nur highlight attack damage increased","nur highlight chance to do ultimate imediatelly","nur highlight reduce defeat time",
			"nur highlight health regen","nur highlight health buffed","nur highlight skill cooldown increaseds",
			"nur highlight skill heal ammount increased","nur normal attack damage increased","nur normal health regen",
			"nur normal health buffed","nur normal chance to do ultimate imediatelly","nur normal reduce defeat time",
			"nur normal skill cooldown increaseds","nur normal skill heal ammount increased"
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

		this.addAnimation('1normal', [{ name: "nur normal attack damage increased", delay: 100 }]);
		this.addAnimation('1highlight', [{ name: "nur highlight attack damage increased", delay: 100 }]);
		this.addAnimation('2normal', [{ name: "nur normal chance to do ultimate imediatelly", delay: 100 }]);
		this.addAnimation('2highlight', [{ name: "nur highlight chance to do ultimate imediatelly", delay: 100 }]);
		this.addAnimation('3normal', [{ name: "nur normal health buffed", delay: 100 }]);
		this.addAnimation('3highlight', [{ name: "nur highlight health buffed", delay: 100 }]);
		this.addAnimation('4normal', [{ name: "nur normal health regen", delay: 100 }]);
		this.addAnimation('4highlight', [{ name: "nur highlight health regen", delay: 100 }]);
		this.addAnimation('5normal', [{ name: "nur normal reduce defeat time", delay: 100 }]);
		this.addAnimation('5highlight', [{ name: "nur highlight reduce defeat time", delay: 100 }]);
		this.addAnimation('6normal', [{ name: "nur normal skill cooldown increaseds", delay: 100 }]);
		this.addAnimation('6highlight', [{ name: "nur highlight skill cooldown increaseds", delay: 100 }]);
		this.addAnimation('7normal', [{ name: "nur normal skill heal ammount increased", delay: 100 }]);
		this.addAnimation('7highlight', [{ name: "nur highlight skill heal ammount increased", delay: 100 }]);
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