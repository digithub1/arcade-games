(function(){
// Put user code here //

//  End of user code  //

game.object.NerdFightSplash = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "Logo_Nerd_Fight";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"LOGO NERD FIGHT GAME_0","LOGO NERD FIGHT GAME_1","LOGO NERD FIGHT GAME_2",
			"LOGO NERD FIGHT GAME_3","LOGO NERD FIGHT GAME_4","LOGO NERD FIGHT GAME_5",
			"LOGO NERD FIGHT GAME_6","LOGO NERD FIGHT GAME_7","LOGO NERD FIGHT GAME_8",
			"LOGO NERD FIGHT GAME_9","LOGO NERD FIGHT GAME_10","LOGO NERD FIGHT GAME_11",
			"LOGO NERD FIGHT GAME_12","LOGO NERD FIGHT GAME_13","LOGO NERD FIGHT GAME_14",
			"LOGO NERD FIGHT GAME_15","LOGO NERD FIGHT GAME_17","LOGO NERD FIGHT GAME_18",
			"LOGO NERD FIGHT GAME_19","LOGO NERD FIGHT GAME_20","LOGO NERD FIGHT GAME_21",
			"LOGO NERD FIGHT GAME_22","LOGO NERD FIGHT GAME_23","LOGO NERD FIGHT GAME_24",
			"LOGO NERD FIGHT GAME_25","LOGO NERD FIGHT GAME_26","LOGO NERD FIGHT GAME_27",
			"LOGO NERD FIGHT GAME_28","LOGO NERD FIGHT GAME_29","LOGO NERD FIGHT GAME_31",
			"LOGO NERD FIGHT GAME_32","LOGO NERD FIGHT GAME_33","LOGO NERD FIGHT GAME_34",
			"LOGO NERD FIGHT GAME_35","LOGO NERD FIGHT GAME_36","LOGO NERD FIGHT GAME_37",
			"LOGO NERD FIGHT GAME_38","LOGO NERD FIGHT GAME_39","LOGO NERD FIGHT GAME_40",
			"LOGO NERD FIGHT GAME_41","LOGO NERD FIGHT GAME_42","LOGO NERD FIGHT GAME_43",
			"LOGO NERD FIGHT GAME_44","LOGO NERD FIGHT GAME_45","LOGO NERD FIGHT GAME_46",
			"LOGO NERD FIGHT GAME_47","LOGO NERD FIGHT GAME_48","LOGO NERD FIGHT GAME_49",
			"LOGO NERD FIGHT GAME_50","LOGO NERD FIGHT GAME_51","LOGO NERD FIGHT GAME_52",
			"LOGO NERD FIGHT GAME_53","LOGO NERD FIGHT GAME_54","LOGO NERD FIGHT GAME_55",
			"LOGO NERD FIGHT GAME_56","LOGO NERD FIGHT GAME_57","LOGO NERD FIGHT GAME_58",
			"LOGO NERD FIGHT GAME_59","LOGO NERD FIGHT GAME_60","LOGO NERD FIGHT GAME_61",
			"LOGO NERD FIGHT GAME_62","LOGO NERD FIGHT GAME_63","LOGO NERD FIGHT GAME_64",
			"LOGO NERD FIGHT GAME_65","LOGO NERD FIGHT GAME_66","LOGO NERD FIGHT GAME_67",
			"LOGO NERD FIGHT GAME_68","LOGO NERD FIGHT GAME_69","LOGO NERD FIGHT GAME_70",
			"LOGO NERD FIGHT GAME_71"
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

		this.addAnimation('idle', [{ name: "LOGO NERD FIGHT GAME_0", delay: 100 },{ name: "LOGO NERD FIGHT GAME_1", delay: 100 },{ name: "LOGO NERD FIGHT GAME_2", delay: 100 },{ name: "LOGO NERD FIGHT GAME_3", delay: 100 },{ name: "LOGO NERD FIGHT GAME_4", delay: 100 },{ name: "LOGO NERD FIGHT GAME_5", delay: 100 },{ name: "LOGO NERD FIGHT GAME_6", delay: 100 },{ name: "LOGO NERD FIGHT GAME_7", delay: 100 },{ name: "LOGO NERD FIGHT GAME_8", delay: 100 },{ name: "LOGO NERD FIGHT GAME_9", delay: 100 },{ name: "LOGO NERD FIGHT GAME_10", delay: 100 },{ name: "LOGO NERD FIGHT GAME_11", delay: 100 },{ name: "LOGO NERD FIGHT GAME_12", delay: 100 },{ name: "LOGO NERD FIGHT GAME_13", delay: 100 },{ name: "LOGO NERD FIGHT GAME_14", delay: 100 },{ name: "LOGO NERD FIGHT GAME_15", delay: 100 },{ name: "LOGO NERD FIGHT GAME_17", delay: 100 },{ name: "LOGO NERD FIGHT GAME_18", delay: 100 },{ name: "LOGO NERD FIGHT GAME_19", delay: 100 },{ name: "LOGO NERD FIGHT GAME_20", delay: 100 },{ name: "LOGO NERD FIGHT GAME_21", delay: 100 },{ name: "LOGO NERD FIGHT GAME_22", delay: 100 },{ name: "LOGO NERD FIGHT GAME_23", delay: 100 },{ name: "LOGO NERD FIGHT GAME_24", delay: 100 },{ name: "LOGO NERD FIGHT GAME_25", delay: 100 },{ name: "LOGO NERD FIGHT GAME_26", delay: 100 },{ name: "LOGO NERD FIGHT GAME_27", delay: 100 },{ name: "LOGO NERD FIGHT GAME_28", delay: 100 },{ name: "LOGO NERD FIGHT GAME_29", delay: 100 },{ name: "LOGO NERD FIGHT GAME_31", delay: 100 },{ name: "LOGO NERD FIGHT GAME_32", delay: 100 },{ name: "LOGO NERD FIGHT GAME_33", delay: 100 },{ name: "LOGO NERD FIGHT GAME_34", delay: 100 },{ name: "LOGO NERD FIGHT GAME_35", delay: 100 },{ name: "LOGO NERD FIGHT GAME_36", delay: 100 },{ name: "LOGO NERD FIGHT GAME_37", delay: 100 },{ name: "LOGO NERD FIGHT GAME_38", delay: 100 },{ name: "LOGO NERD FIGHT GAME_39", delay: 100 },{ name: "LOGO NERD FIGHT GAME_40", delay: 100 },{ name: "LOGO NERD FIGHT GAME_41", delay: 100 },{ name: "LOGO NERD FIGHT GAME_42", delay: 100 },{ name: "LOGO NERD FIGHT GAME_43", delay: 100 },{ name: "LOGO NERD FIGHT GAME_44", delay: 100 },{ name: "LOGO NERD FIGHT GAME_45", delay: 100 },{ name: "LOGO NERD FIGHT GAME_46", delay: 100 },{ name: "LOGO NERD FIGHT GAME_47", delay: 100 },{ name: "LOGO NERD FIGHT GAME_48", delay: 100 },{ name: "LOGO NERD FIGHT GAME_49", delay: 100 },{ name: "LOGO NERD FIGHT GAME_50", delay: 100 },{ name: "LOGO NERD FIGHT GAME_51", delay: 100 },{ name: "LOGO NERD FIGHT GAME_52", delay: 100 },{ name: "LOGO NERD FIGHT GAME_53", delay: 100 },{ name: "LOGO NERD FIGHT GAME_54", delay: 100 },{ name: "LOGO NERD FIGHT GAME_55", delay: 100 },{ name: "LOGO NERD FIGHT GAME_56", delay: 100 },{ name: "LOGO NERD FIGHT GAME_57", delay: 100 },{ name: "LOGO NERD FIGHT GAME_58", delay: 100 },{ name: "LOGO NERD FIGHT GAME_59", delay: 100 },{ name: "LOGO NERD FIGHT GAME_60", delay: 100 },{ name: "LOGO NERD FIGHT GAME_61", delay: 100 },{ name: "LOGO NERD FIGHT GAME_62", delay: 100 },{ name: "LOGO NERD FIGHT GAME_63", delay: 100 },{ name: "LOGO NERD FIGHT GAME_64", delay: 100 },{ name: "LOGO NERD FIGHT GAME_65", delay: 100 },{ name: "LOGO NERD FIGHT GAME_66", delay: 100 },{ name: "LOGO NERD FIGHT GAME_67", delay: 100 },{ name: "LOGO NERD FIGHT GAME_68", delay: 100 },{ name: "LOGO NERD FIGHT GAME_69", delay: 100 },{ name: "LOGO NERD FIGHT GAME_70", delay: 100 },{ name: "LOGO NERD FIGHT GAME_71", delay: 100 }]);
		this.addAnimation('stop', [{ name: "LOGO NERD FIGHT GAME_71", delay: 100 }]);
		this.setCurrentAnimation('idle');
		this.var = {};

        // Put user code here //
        this.setCurrentAnimation("idle", ()=>{
            this.setCurrentAnimation("stop");
            this.alpha = 0;
            setTimeout(()=>{
                me.state.change("GameMenu");    
            },500);
            
        });
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

        // Put user code here //
        
        //  End of user code  //
	},

    // Put user code here //
    
    //  End of user code  //
});

// Put user code here //

//  End of user code  //
})();