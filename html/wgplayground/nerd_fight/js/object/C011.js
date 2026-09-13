(function(){
// Put user code here //
 
//  End of user code  //

game.object.C011 = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "Lunchbox4";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"Atomic Box-2-1_00","Atomic Box-2-1_01","Atomic Box-2-1_02",
			"Atomic Box-2-1_03","Atomic Box-2-1_04","Atomic Box-2-1_05",
			"Atomic Box-2-1_06","Atomic Box-2-1_07","Atomic Box-2-1_08",
			"Atomic Box-2-1_09","Atomic Box-2-1_10","Atomic Box-2-1_11",
			"Atomic Box-2-1_12","Atomic Box-2-1_13","Atomic Box-2-1_14",
			"Atomic Box-2-1_15","Atomic Box-2-1_16","Atomic Box-2-1_17",
			"Atomic Box-2-1_18","Atomic Box-2-1_19"
		], settings);
		settings.framewidth = settings.framewidth || 100;
		settings.frameheight = settings.frameheight || 100;
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
		this.alwaysUpdate = false;
		this.updateWhenPaused = false;
		this.isPersistent = false;

		this.addAnimation('open', [{ name: "Atomic Box-2-1_00", delay: 100 },{ name: "Atomic Box-2-1_01", delay: 100 },{ name: "Atomic Box-2-1_02", delay: 100 },{ name: "Atomic Box-2-1_03", delay: 100 },{ name: "Atomic Box-2-1_04", delay: 100 },{ name: "Atomic Box-2-1_05", delay: 100 },{ name: "Atomic Box-2-1_06", delay: 100 },{ name: "Atomic Box-2-1_07", delay: 100 },{ name: "Atomic Box-2-1_08", delay: 100 },{ name: "Atomic Box-2-1_09", delay: 100 },{ name: "Atomic Box-2-1_10", delay: 100 },{ name: "Atomic Box-2-1_11", delay: 100 },{ name: "Atomic Box-2-1_12", delay: 100 },{ name: "Atomic Box-2-1_13", delay: 100 },{ name: "Atomic Box-2-1_14", delay: 100 },{ name: "Atomic Box-2-1_15", delay: 100 },{ name: "Atomic Box-2-1_16", delay: 100 },{ name: "Atomic Box-2-1_17", delay: 100 },{ name: "Atomic Box-2-1_18", delay: 100 },{ name: "Atomic Box-2-1_19", delay: 100 }]);
		this.addAnimation('close', [{ name: "Atomic Box-2-1_00", delay: 100 }]);
		this.setCurrentAnimation('close');
		this.isKinematic = false;
		this._pointerDownHandler = me.input.registerPointerEvent("pointerdown", this, this.onClick.bind(this));
		this.var = {};

        // Put user code here //
        let vars = ['id'];
        verify(settings, vars);
		game.util.spread(this, settings, vars);
		
        this.itemInfo;
        let info = game.controller.data.getDataCafeInfo();
        for(let i in info){
            if(info[i].id == this.id){
                this.itemInfo = info[i];
                break;
            }
        }
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
        if(this.alpha == 1)
        game.var.cafeContainer.ShowConf(this.itemInfo);
        //  End of user code  //
	},

    // Put user code here //
    
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();