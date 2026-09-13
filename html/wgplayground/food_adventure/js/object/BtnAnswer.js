(function(){
// Put user code here //
 
//  End of user code  //

game.object.BtnAnswer = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "UI";
		settings.image = game.textureMap.get(settings.texture);
		game.util.__populateAtlasIndices([
			"Letter_A","Letter_B","Letter_C",
			"Letter_D"
		], settings);
		settings.framewidth = settings.framewidth || 100;
		settings.frameheight = settings.frameheight || 20;
		settings.anchorPoint = {
			x: 0.5,
			y: 0.5
		};

        // Put user code here //
        
        //  End of user code  //

		x += me.game.viewport.width*0.5;
		y += me.game.viewport.height*0.5;
		this._super(me.Sprite, 'init', [x, y, settings]);
		delete settings.image;
		this.alpha = 1;
		this.floating = true;
		this.alwaysUpdate = false;
		this.updateWhenPaused = false;
		this.isPersistent = false;

		this.addAnimation('a', [{ name: "Letter_A", delay: 100 }]);
		this.addAnimation('b', [{ name: "Letter_B", delay: 100 }]);
		this.addAnimation('c', [{ name: "Letter_C", delay: 100 }]);
		this.addAnimation('d', [{ name: "Letter_D", delay: 100 }]);
		this.setCurrentAnimation('a');
		this.isKinematic = false;
		this._pointerDownHandler = me.input.registerPointerEvent("pointerdown", this, this.onClick.bind(this));
		this.var = {};

        // Put user code here //
        this.container = settings.container;
        
        this.able = true;
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
      
        if(this.able && !this.highlight.isCurrentAnimation("wrong")){
            me.audio.play("sfx-button");
            this.container.ClickAnswer(this);
        }
        //  End of user code  //
	},

    // Put user code here //
    SelectBtn : function(){
        
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();