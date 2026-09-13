(function(){
// Put user code here //
 
//  End of user code  //

game.object.TraitIcon = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.image = settings.image || game.textureMap.get('image')
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
		this.alwaysUpdate = false;
		this.updateWhenPaused = false;
		this.isPersistent = false;

		this.addAnimation('trait1pressed', [{ name: "token skills add attack damage", delay: 100 }]);
		this.addAnimation('trait1idle', [{ name: "token skills add attack damage(normal)", delay: 100 }]);
		this.addAnimation('trait2pressed', [{ name: "token skill health regeneration ", delay: 100 }]);
		this.addAnimation('trait2idle', [{ name: "token skill health regeneration(normal) ", delay: 100 }]);
		this.addAnimation('trait3idle', [{ name: "token skills add attack speed(normal)", delay: 100 }]);
		this.addAnimation('trait3pressed', [{ name: "token skills add attack speed", delay: 100 }]);
		this.addAnimation('trait4idle', [{ name: "token skill death cooldown reduction (normal)", delay: 100 }]);
		this.addAnimation('trait5idle', [{ name: "token skill add critical (normal)", delay: 100 }]);
		this.addAnimation('trait4pressed', [{ name: "token skill death cooldown reduction", delay: 100 }]);
		this.addAnimation('trait6idle', [{ name: "token skill add health(normal) ", delay: 100 }]);
		this.addAnimation('trait6pressed', [{ name: "token skill add health ", delay: 100 }]);
		this.addAnimation('trait7idle', [{ name: "token skill  ultimate cooldown reduction(normal)", delay: 100 }]);
		this.addAnimation('trait7pressed', [{ name: "token skill  ultimate cooldown reduction", delay: 100 }]);
		this.addAnimation('trait5pressed', [{ name: "token skill add critical ", delay: 100 }]);
		this.setCurrentAnimation('trait1pressed');
		this.isKinematic = false;
		this._pointerDownHandler = me.input.registerPointerEvent("pointerdown", this, this.onClick.bind(this));
		this.var = {};

        // Put user code here //
        this.name = 1;
        this.id = 'trait1';
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

        
        game.var.labManager.uiLab.DeselectTrait();
        this.setCurrentAnimation(this.id + 'pressed');
        game.var.labManager.uiLab.ClickTrait(this.id);

        
        //  End of user code  //
	},

    // Put user code here //
    
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();