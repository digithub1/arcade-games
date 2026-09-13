(function(){
// Put user code here //
 
//  End of user code  //

game.object.TimerGreen = me.Renderable.extend({
	init: function(x, y, settings = {}){
		settings.width = settings.width || 100;
		settings.height = settings.height || 100;
		settings.anchorPoint = {
			x: 0.5,
			y: 0.5
		};


        // Put user code here //
        
        //  End of user code  //

		x += me.game.viewport.width*0.5;
		y += me.game.viewport.height*0.5;
		this._super(me.Renderable, 'init', [x, y, settings.width, settings.height]);

		this.alpha = 1;
		this.floating = true;
		this.alwaysUpdate = false;
		this.updateWhenPaused = false;
		this.isPersistent = false;
		this.anchorPoint.set(settings.anchorPoint.x, settings.anchorPoint.y);
		this.var = {};

        // Put user code here //
        this.container = settings.container;
        this.width = 870;
        this.height = 33;
        this.time = TIME;
        this.currentTime = this.time;
        
        this.tween = new me.Tween(this).to({currentTime : 0}, this.time).onComplete(()=>{
            this.container.End();
        });
        //this.tween.start();
        /*this.interval = setInterval(()=>{
            if(this.currentTime > 0)
                this.currentTime -= 1000;
        }, 1000);*/
        //  End of user code  //
	},

	update: function(dt){
		var drawNextFrame = this._super(me.Renderable, 'update', [dt]);
        // Put user code here //
        
        //  End of user code  //
		return drawNextFrame;
	},

	draw : function(renderer, rect) {
		this._super(me.Renderable, 'draw', [renderer, rect]);
        // Put user code here //
        renderer.setColor("#4cd137");
        let width = (this.currentTime / this.time) * this.width;
        renderer.fillRect(this.pos.x, this.pos.y, width, this.height);
        //  End of user code  //
	},

	onActivateEvent : function() {
        // Put user code here //
        
        //  End of user code  //
	},

	onDeactivateEvent : function() {

        // Put user code here //
        //clearInterval(this.interval);
        this.tween.stop();
        //  End of user code  //
	},

    // Put user code here //
    
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();