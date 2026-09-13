(function(){
// Put user code here //
 
//  End of user code  //

game.object.C009 = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "Lunchbox2";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"Spectacular Box-2-animation_00","Spectacular Box-2-animation_01","Spectacular Box-2-animation_02",
			"Spectacular Box-2-animation_03","Spectacular Box-2-animation_04","Spectacular Box-2-animation_05",
			"Spectacular Box-2-animation_06","Spectacular Box-2-animation_07","Spectacular Box-2-animation_08",
			"Spectacular Box-2-animation_09","Spectacular Box-2-animation_10","Spectacular Box-2-animation_11",
			"Spectacular Box-2-animation_12","Spectacular Box-2-animation_13","Spectacular Box-2-animation_14",
			"Spectacular Box-2-animation_15","Spectacular Box-2-animation_16","Spectacular Box-2-animation_17",
			"Spectacular Box-2-animation_18","Spectacular Box-2-animation_19"
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

		this.addAnimation('open', [{ name: "Spectacular Box-2-animation_00", delay: 100 },{ name: "Spectacular Box-2-animation_01", delay: 100 },{ name: "Spectacular Box-2-animation_02", delay: 100 },{ name: "Spectacular Box-2-animation_03", delay: 100 },{ name: "Spectacular Box-2-animation_04", delay: 100 },{ name: "Spectacular Box-2-animation_05", delay: 100 },{ name: "Spectacular Box-2-animation_06", delay: 100 },{ name: "Spectacular Box-2-animation_07", delay: 100 },{ name: "Spectacular Box-2-animation_08", delay: 100 },{ name: "Spectacular Box-2-animation_09", delay: 100 },{ name: "Spectacular Box-2-animation_10", delay: 100 },{ name: "Spectacular Box-2-animation_11", delay: 100 },{ name: "Spectacular Box-2-animation_12", delay: 100 },{ name: "Spectacular Box-2-animation_13", delay: 100 },{ name: "Spectacular Box-2-animation_14", delay: 100 },{ name: "Spectacular Box-2-animation_15", delay: 100 },{ name: "Spectacular Box-2-animation_16", delay: 100 },{ name: "Spectacular Box-2-animation_17", delay: 100 },{ name: "Spectacular Box-2-animation_18", delay: 100 },{ name: "Spectacular Box-2-animation_19", delay: 100 }]);
		this.addAnimation('close', [{ name: "Spectacular Box-2-animation_00", delay: 100 }]);
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