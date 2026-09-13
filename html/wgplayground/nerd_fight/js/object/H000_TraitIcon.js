(function(){
// Put user code here //
 
//  End of user code  //

game.object.H000_TraitIcon = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "Lab";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"eugene highlight defeat time decreased","tim highlight token skill  ultimate cooldown reduction","tim highlight token skill add critical ",
			"tim highlight token skill add health ","tim highlight token skill death cooldown reduction","tim highlight token skill health regeneration ",
			"tim highlight token skills add attack damage","tim highlight token skills add attack speed","tim normal token skill  ultimate cooldown reduction(normal)",
			"tim normal token skill add critical (normal)","tim normal token skill death cooldown reduction (normal)","tim normal token skill add health(normal) ",
			"tim normal token skill health regeneration(normal) ","tim normal token skills add attack damage(normal)","tim normal token skills add attack speed(normal)"
		], settings);
		settings.framewidth = settings.framewidth || 129;
		settings.frameheight = settings.frameheight || 118;
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

		this.addAnimation('1normal', [{ name: "tim normal token skill  ultimate cooldown reduction(normal)", delay: 100 }]);
		this.addAnimation('1highlight', [{ name: "tim highlight token skill  ultimate cooldown reduction", delay: 100 }]);
		this.addAnimation('2highlight', [{ name: "tim highlight token skill add critical ", delay: 100 }]);
		this.addAnimation('2normal', [{ name: "tim normal token skill add critical (normal)", delay: 100 }]);
		this.addAnimation('3normal', [{ name: "tim normal token skill add health(normal) ", delay: 100 }]);
		this.addAnimation('3highlight', [{ name: "tim highlight token skill add health ", delay: 100 }]);
		this.addAnimation('4highlight', [{ name: "tim highlight token skill death cooldown reduction", delay: 100 }]);
		this.addAnimation('4normal', [{ name: "tim normal token skill death cooldown reduction (normal)", delay: 100 }]);
		this.addAnimation('5normal', [{ name: "tim normal token skill health regeneration(normal) ", delay: 100 }]);
		this.addAnimation('5highlight', [{ name: "tim highlight token skill health regeneration ", delay: 100 }]);
		this.addAnimation('6normal', [{ name: "tim normal token skills add attack damage(normal)", delay: 100 }]);
		this.addAnimation('6highlight', [{ name: "tim highlight token skills add attack damage", delay: 100 }]);
		this.addAnimation('7highlight', [{ name: "tim highlight token skills add attack speed", delay: 100 }]);
		this.addAnimation('7normal', [{ name: "tim normal token skills add attack speed(normal)", delay: 100 }]);
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