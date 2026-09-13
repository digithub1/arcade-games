(function(){
// Put user code here //
 
//  End of user code  //

game.object.LabNextButton = me.GUI_Object.extend({
	init: function(x, y, settings = {}){
		settings.texture = "Lab";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"next button choose hero  ","next button choose hero tekan"
		], settings);
		settings.framewidth = settings.framewidth || 232;
		settings.frameheight = settings.frameheight || 110;
		settings.anchorPoint = {
			x: 0.5,
			y: 0.5
		};

        // Put user code here //
        
        //  End of user code  //

		x += me.game.viewport.width*0.5;
		y += me.game.viewport.height*0.5;
		this._super(me.GUI_Object, 'init', [x, y, settings]);

		this.alpha = 1;
		this.floating = true;
		this.alwaysUpdate = false;
		this.updateWhenPaused = false;
		this.isPersistent = false;

		this.addAnimation('idle', [{ name: "next button choose hero  ", delay: 100 }]);
		this.addAnimation('pressed', [{ name: "next button choose hero tekan", delay: 100 }]);
		this.setCurrentAnimation('idle');
		this.var = {};

        // Put user code here //
        this.nextIndex = -1;
        //  End of user code  //
	},

	update: function(dt){
		var drawNextFrame = this._super(me.GUI_Object, 'update', [dt]);
        // Put user code here //
 
        //  End of user code  //
		return drawNextFrame;
	},

	draw : function(renderer, rect) {
		this._super(me.GUI_Object, 'draw', [renderer, rect]);
        // Put user code here //
        
        //  End of user code  //
	},

	onActivateEvent : function() {
		this._super(me.GUI_Object, 'onActivateEvent');
        // Put user code here //
        
        //  End of user code  //
	},

	onDeactivateEvent : function() {
		this._super(me.GUI_Object, 'onDeactivateEvent');

		me.input.releasePointerEvent("pointerdown", this, this._pointerDownHandler);
        // Put user code here //
        
        //  End of user code  //
	},

	onClick : function(pointer) {
        // Put user code here //
        
        //  End of user code  //
	},

    // Put user code here //
   onClick : function(event){
       if(game.var.tutorial.Step("changeHero")){
           if(this.isCurrentAnimation('idle')){
                me.audio.play('sfx-button', false);
                this.setCurrentAnimation('pressed');
                me.event.publish('ShowHeroEvent', [this.nextIndex]);
           }
       }
   },

    onRelease : function(event){
        this.setCurrentAnimation('idle');
   }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();