(function(){
// Put user code here //
 
//  End of user code  //

game.object.BtnStart = me.GUI_Object.extend({
	init: function(x, y, settings = {}){
		settings.texture = "UI";
		settings.image = game.textureMap.get(settings.texture);
		game.util.__populateAtlasIndices([
			"button_start","button_start 2"
		], settings);
		settings.framewidth = settings.framewidth || 100;
		settings.frameheight = settings.frameheight || 48;
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
		this.alwaysUpdate = false;
		this.updateWhenPaused = false;
		this.isPersistent = false;

		this.addAnimation('idle', [{ name: "button_start 2", delay: 100 }]);
		this.setCurrentAnimation('idle');
		this.var = {};

        // Put user code here //
        this.click = true;
        this.startPosX = this.pos.x;
        this.twin1 = false;
        this.twin2 = false;
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
        this.tween1.stop();
        this.tween2.stop();
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
                    me.state.change(game.state.Gameplay);
                }
            }, 100);
            me.timer.setTimeout(()=>{
                this.click = true;
            }, 1000);
        }
    },
    
    tweenPlay: function(){
        this.twin1 = true;
        this.tween1 = new me.Tween(this.pos).to({x: this.startPosX + 5}, 500).onComplete(()=>{
            this.tween2.start();
            this.twin1 = false;
            this.twin2 = true;
        }); 
        this.tween1.start();
        this.tween2 = new me.Tween(this.pos).to({x: this.startPosX }, 500).onComplete(()=>{
            this.tween1.start();
            this.twin1 = true;
            this.twin2 = false;
        }); 
    },
    tweenStop: function(){
        if(this.twin1){
            this.tween1.stop();
        }
        if(this.twin2){
            this.tween2.stop();
        }
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();