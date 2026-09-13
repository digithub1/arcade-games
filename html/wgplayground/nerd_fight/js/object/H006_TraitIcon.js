(function(){
// Put user code here //
 
//  End of user code  //

game.object.H006_TraitIcon = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "Lab";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"dave highlight attack damage","dave highlight attack speed","dave highlight cooldown ulti decrease",
			"dave highlight critical","dave highlight health increase","dave highlight stun chance",
			"dave highlight ulti damage increased","dave normal  critical","dave normal attack damage",
			"dave normal attack speed","dave normal cooldown ulti decrease","dave normal ulti damage increased",
			"dave normal stun chance","dave normal health increase"
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

		this.addAnimation('1normal', [{ name: "dave normal attack damage", delay: 100 }]);
		this.addAnimation('1highlight', [{ name: "dave highlight attack damage", delay: 100 }]);
		this.addAnimation('2highlight', [{ name: "dave highlight attack speed", delay: 100 }]);
		this.addAnimation('2normal', [{ name: "dave normal attack speed", delay: 100 }]);
		this.addAnimation('3normal', [{ name: "dave normal cooldown ulti decrease", delay: 100 }]);
		this.addAnimation('3highlight', [{ name: "dave highlight cooldown ulti decrease", delay: 100 }]);
		this.addAnimation('4normal', [{ name: "dave normal  critical", delay: 100 }]);
		this.addAnimation('4highlight', [{ name: "dave highlight critical", delay: 100 }]);
		this.addAnimation('5highlight', [{ name: "dave highlight health increase", delay: 100 }]);
		this.addAnimation('5normal', [{ name: "dave normal health increase", delay: 100 }]);
		this.addAnimation('6normal', [{ name: "dave normal stun chance", delay: 100 }]);
		this.addAnimation('6highlight', [{ name: "dave highlight stun chance", delay: 100 }]);
		this.addAnimation('7normal', [{ name: "dave normal ulti damage increased", delay: 100 }]);
		this.addAnimation('7highlight', [{ name: "dave highlight ulti damage increased", delay: 100 }]);
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