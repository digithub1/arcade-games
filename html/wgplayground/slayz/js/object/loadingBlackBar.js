(function(){
// Put user code here //
 
//  End of user code  //

game.object.loadingBlackBar = me.Renderable.extend({
	init: function(x, y, settings = {}){
		settings.width = settings.width || 100;
		settings.height = settings.height || 100;
		settings.anchorPoint = {
			x: 0.5,
			y: 0.5
		};


        // Put user code here //
        
        //  End of user code  //

		this._super(me.Renderable, 'init', [x, y, settings.width, settings.height]);

		this.alpha = 1;
		this.floating = true;
		this.alwaysUpdate = false;
		this.updateWhenPaused = false;
		this.isPersistent = false;
		this.anchorPoint.set(settings.anchorPoint.x, settings.anchorPoint.y);
		this.var = {};

        // Put user code here //
        this.frontColor = settings.frontColor || "black";
        this.minValue = settings.minValue || 1170;
        this.maxValue = settings.maxValue || 1170;
        this.value = settings.value || this.minValue;
        this.width = 1170;
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
    draw : function(renderer){
        this._super(me.Renderable, 'draw', [renderer]);
        var x = this.pos.x,
            y = this.pos.y,
            width = 1170,
            height = 50, 
            rad = height / 2,
            r = this.value / this.maxValue;
        
        renderer.setColor(this.frontColor);
        renderer.fillRect(x, y, this.width, height);
        renderer.fillArc(x - rad, y, rad, Math.PI / 2, Math.PI * 1.5, false);
        renderer.fillArc(x + this.width - rad, y, rad, Math.PI / 2, Math.PI * 1.5, true);
    },
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();