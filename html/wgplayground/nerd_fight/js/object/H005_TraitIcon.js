(function(){
// Put user code here //
 
//  End of user code  //

game.object.H005_TraitIcon = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "Lab";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"marble highlight attack damage normal increase","marble highlight cooldown ulti decreased","marble highlight defeat cooldown reduced",
			"marble highlight health increased","marble highlight attack speed increase","marble highlight ulti damage increase",
			"marble highlight ulti duration increased","marble normal attack damage normal increase","marble normal attack speed increase",
			"marble normal cooldown ulti decreased","marble normal defeat cooldown reduced","marble normal health increased",
			"marble normal ulti damage increase","marble normal ulti duration increased"
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

		this.addAnimation('1normal', [{ name: "marble normal attack damage normal increase", delay: 100 }]);
		this.addAnimation('1highlight', [{ name: "marble highlight attack damage normal increase", delay: 100 }]);
		this.addAnimation('2normal', [{ name: "marble normal attack speed increase", delay: 100 }]);
		this.addAnimation('2highlight', [{ name: "marble highlight attack speed increase", delay: 100 }]);
		this.addAnimation('3normal', [{ name: "marble normal cooldown ulti decreased", delay: 100 }]);
		this.addAnimation('3highlight', [{ name: "marble highlight cooldown ulti decreased", delay: 100 }]);
		this.addAnimation('4normal', [{ name: "marble normal defeat cooldown reduced", delay: 100 }]);
		this.addAnimation('4highlight', [{ name: "marble highlight defeat cooldown reduced", delay: 100 }]);
		this.addAnimation('5normal', [{ name: "marble normal health increased", delay: 100 }]);
		this.addAnimation('5highlight', [{ name: "marble highlight health increased", delay: 100 }]);
		this.addAnimation('6normal', [{ name: "marble normal ulti damage increase", delay: 100 }]);
		this.addAnimation('6highlight', [{ name: "marble highlight ulti damage increase", delay: 100 }]);
		this.addAnimation('7highlight', [{ name: "marble highlight ulti duration increased", delay: 100 }]);
		this.addAnimation('7normal', [{ name: "marble normal ulti duration increased", delay: 100 }]);
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