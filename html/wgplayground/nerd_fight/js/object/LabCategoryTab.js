(function(){
// Put user code here //
 
//  End of user code  //

game.object.LabCategoryTab = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "Lab";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"Nerd Traits","Nerd Traits pushed","Nerd items items",
			"Nerd items pushed"
		], settings);
		settings.framewidth = settings.framewidth || 596;
		settings.frameheight = settings.frameheight || 84;
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

		this.addAnimation('traitTabIdle', [{ name: "Nerd Traits", delay: 100 }]);
		this.addAnimation('traitTabPressed', [{ name: "Nerd Traits pushed", delay: 100 }]);
		this.addAnimation('TraitTabIdle', [{ name: "Nerd Traits", delay: 100 }]);
		this.addAnimation('TraitTabPressed', [{ name: "Nerd Traits pushed", delay: 100 }]);
		this.addAnimation('ItemTabIdle', [{ name: "Nerd items items", delay: 100 }]);
		this.addAnimation('ItemTabPressed', [{ name: "Nerd items pushed", delay: 100 }]);
		this.setCurrentAnimation('traitTabIdle');
		this.isKinematic = false;
		this._pointerDownHandler = me.input.registerPointerEvent("pointerdown", this, this.onClick.bind(this));
		this.var = {};

        // Put user code here //
        this.type = 'item';
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
        let anim = this.type + "TabIdle";
        
        game.var.labManager.uiLab.ShowTab(this.type);
        if(this.isCurrentAnimation(this.type + "TabIdle")){
            me.audio.play('sfx-button', false);
        }
        //  End of user code  //
	},

    // Put user code here //
    
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();