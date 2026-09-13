(function(){
// Put user code here //
 
//  End of user code  //

game.object.HPBar = me.Renderable.extend({
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
		this.alwaysUpdate = true;
		this.updateWhenPaused = false;
		this.isPersistent = false;
		this.anchorPoint.set(settings.anchorPoint.x, settings.anchorPoint.y);
		this.var = {};

        // Put user code here //
        let vars = ['char'];
        verify(settings, vars);
		game.util.spread(this, settings, vars);
		
        this.fullHP = 100;
        this.currentHP = 0;
        this.barWidth = 200;
        this.barHeight = 25;
        this.hpBarPosY = 0;
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
        
        if(this.char.currentHP > 0){
            renderer.setColor('#64e3ce');
            renderer.fillRect(this.pos.x - (this.barWidth / 4), this.pos.y,
            (this.char.currentHP / this.char.fullHP) * this.barWidth,  this.barHeight);
        }
        //  End of user code  //
	},

	onActivateEvent : function() {
        // Put user code here //
        
        //  End of user code  //
	},

	onDeactivateEvent : function() {

        // Put user code here //
        
        //  End of user code  //
	},

    // Put user code here //
    
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();