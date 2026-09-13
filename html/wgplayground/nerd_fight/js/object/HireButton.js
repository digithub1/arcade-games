(function(){
// Put user code here //
 
//  End of user code  //

game.object.HireButton = me.GUI_Object.extend({
	init: function(x, y, settings = {}){
		settings.texture = "Lab";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"HIRE BUTTON (DIPENCET)","HIRE BUTTON","LOCKED BUTTON"
		], settings);
		settings.framewidth = settings.framewidth || 216;
		settings.frameheight = settings.frameheight || 105;
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

		this.addAnimation('idle', [{ name: "HIRE BUTTON", delay: 100 }]);
		this.addAnimation('pressed', [{ name: "HIRE BUTTON (DIPENCET)", delay: 100 }]);
		this.addAnimation('locked', [{ name: "LOCKED BUTTON", delay: 100 }]);
		this.setCurrentAnimation('idle');
		this.var = {};

        // Put user code here //
        this.var.pressedTimer = null;
        this.pressed = false;
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

        // Put user code here //
        if(this.hireTimer != undefined)
            clearTimeout(this.hireTimer);
        //  End of user code  //
	},

    // Put user code here //
    onClick : function(event){
        if(this.isCurrentAnimation('idle')){
            if(game.var.tutorial.Step('hireHero')){
                me.audio.play('sfx-button', false);
                this.setCurrentAnimation('pressed');
                this.hireTimer = setTimeout(function(){
                    if(!this.pressed){
                        this.pressed = true;
                        me.event.publish('HireHeroEvent',[]);
                    }
                }.bind(this), 200);
            }
        }
    },
    
    onRelease : function(event){
        
        //this.setCurrentAnimation('idle');
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();