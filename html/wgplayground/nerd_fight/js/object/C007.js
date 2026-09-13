(function(){
// Put user code here //
 
//  End of user code  //

game.object.C007 = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "Common_lunchbox";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"Lootbox test-3-animation_00","Lootbox test-3-animation_01","Lootbox test-3-animation_02",
			"Lootbox test-3-animation_03","Lootbox test-3-animation_04","Lootbox test-3-animation_05",
			"Lootbox test-3-animation_06","Lootbox test-3-animation_07","Lootbox test-3-animation_08",
			"Lootbox test-3-animation_09","Lootbox test-3-animation_10","Lootbox test-3-animation_11",
			"Lootbox test-3-animation_12","Lootbox test-3-animation_13","Lootbox test-3-animation_14",
			"Lootbox test-3-animation_15","Lootbox test-3-animation_16","Lootbox test-3-animation_17",
			"Lootbox test-3-animation_18","Lootbox test-3-animation_19"
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
		this.alwaysUpdate = true;
		this.updateWhenPaused = false;
		this.isPersistent = false;

		this.addAnimation('open', [{ name: "Lootbox test-3-animation_00", delay: 100 },{ name: "Lootbox test-3-animation_01", delay: 100 },{ name: "Lootbox test-3-animation_02", delay: 100 },{ name: "Lootbox test-3-animation_03", delay: 100 },{ name: "Lootbox test-3-animation_04", delay: 100 },{ name: "Lootbox test-3-animation_05", delay: 100 },{ name: "Lootbox test-3-animation_06", delay: 100 },{ name: "Lootbox test-3-animation_07", delay: 100 },{ name: "Lootbox test-3-animation_08", delay: 100 },{ name: "Lootbox test-3-animation_09", delay: 100 },{ name: "Lootbox test-3-animation_10", delay: 100 },{ name: "Lootbox test-3-animation_11", delay: 100 },{ name: "Lootbox test-3-animation_12", delay: 100 },{ name: "Lootbox test-3-animation_13", delay: 100 },{ name: "Lootbox test-3-animation_14", delay: 100 },{ name: "Lootbox test-3-animation_15", delay: 100 },{ name: "Lootbox test-3-animation_16", delay: 100 },{ name: "Lootbox test-3-animation_17", delay: 100 },{ name: "Lootbox test-3-animation_18", delay: 100 },{ name: "Lootbox test-3-animation_19", delay: 100 }]);
		this.addAnimation('close', [{ name: "Lootbox test-3-animation_00", delay: 100 }]);
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