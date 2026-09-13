(function(){
// Put user code here //
 
//  End of user code  //

game.object.BtnSettings = me.GUI_Object.extend({
	init: function(x, y, settings = {}){
		settings.texture = "UI";
		settings.image = game.textureMap.get(settings.texture);
		game.util.__populateAtlasIndices([
			"button_settings"
		], settings);
		settings.framewidth = settings.framewidth || 100;
		settings.frameheight = settings.frameheight || 30;
		settings.anchorPoint = {
			x: 0.5,
			y: 0.5
		};

        // Put user code here //
        
        //  End of user code  //

		x += me.game.viewport.width*0.5;
		y += me.game.viewport.height*0.5;
		this._super(me.GUI_Object, 'init', [x, y, settings]);
		delete settings.image;
		this.alpha = 1;
		this.floating = true;
		this.alwaysUpdate = true;
		this.updateWhenPaused = false;
		this.isPersistent = false;

		this.addAnimation('idle', [{ name: "button_settings", delay: 100 }]);
		this.setCurrentAnimation('idle');
		this.var = {};

        // Put user code here //
        this.container = settings.container;
        this.click = true;
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
        
        //  End of user code  //
	},

    // Put user code here //
    onClick : function(event){
        if(this.click){
            this.currentTransform.translate(this.pos.x, this.pos.x);
            this.currentTransform.scale(1, 0.99);
            this.currentTransform.translate(-this.pos.x, -this.pos.x);
            me.game.repaint();
            //sound
            me.audio.play("sfx-button2");
            //--
            let once = true;
            me.timer.setTimeout(()=>{
                if(once){
                    once = false;
                    this.onRelease();
                }
            }, 100);
        }
    },
    onRelease : function(event){
        if(this.click){
            this.click = false;
            this.currentTransform.identity();
            me.game.repaint();
            let once = true;
            me.timer.setTimeout(()=>{
                if(once){
                    once = false;
                    this.container.settingContainer.ShowSetting();
                }
            }, 100);
            me.timer.setTimeout(()=>{
                this.click = true;
            }, 1000);
        }
    },
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();