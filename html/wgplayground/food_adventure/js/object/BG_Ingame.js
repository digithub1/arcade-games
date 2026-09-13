(function(){
// Put user code here //
 
//  End of user code  //

game.object.BG_Ingame = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "UI";
		settings.image = game.textureMap.get(settings.texture);
		game.util.__populateAtlasIndices([
			"bg_a","bg_b","bg_c"
		], settings);
		settings.framewidth = settings.framewidth || 100;
		settings.frameheight = settings.frameheight || 100;
		settings.anchorPoint = {
			x: 0.5,
			y: 0.5
		};

        // Put user code here //
        this.container = settings.container;
        //  End of user code  //

		x += me.game.viewport.width*0.5;
		y += me.game.viewport.height*0.5;
		this._super(me.Sprite, 'init', [x, y, settings]);
		delete settings.image;
		this.alpha = 1;
		this.floating = true;
		this.alwaysUpdate = true;
		this.updateWhenPaused = false;
		this.isPersistent = false;

		this.addAnimation('2', [{ name: "bg_b", delay: 100 }]);
		this.addAnimation('3', [{ name: "bg_c", delay: 100 }]);
		this.setCurrentAnimation('2');
		this.isKinematic = false;
		this._pointerDownHandler = me.input.registerPointerEvent("pointerdown", this, this.onClick.bind(this));
		this.var = {};

        // Put user code here //
        let randBG = Math.floor(Math.random() * 2);
        if(randBG == 0){
            this.setCurrentAnimation("2");
        }
        else{
            this.setCurrentAnimation("3");
        }
        
        this.click = true;
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
        me.timer.clearTimeout(this.timeWait);
        //  End of user code  //
	},

	onClick : function(pointer) {
        // Put user code here //
        if(me.state.isCurrent(game.state.Gallery) && this.click){
            this.click = false;
            this.container.ChangeHint();
            this.timeWait = me.timer.setTimeout(()=>{this.click = true}, 500);
        }
        //  End of user code  //
	},

    // Put user code here //
    
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();