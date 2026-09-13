(function(){
// Put user code here //
 
//  End of user code  //

game.object.MissJane = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "HomeroomTeacher";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"teacher-Idle_00","teacher-Idle_03","teacher-Idle_06",
			"teacher-Idle_09","teacher-Idle_12","teacher-Idle_15",
			"teacher-Idle_18","teacher-Idle_21","teacher-Idle_17",
			"teacher-Idle_22","teacher-Idle_01","teacher-Idle_02",
			"teacher-Idle_04","teacher-Idle_05","teacher-Idle_07",
			"teacher-Idle_08","teacher-Idle_10","teacher-Idle_11",
			"teacher-Idle_13","teacher-Idle_14","teacher-Idle_16",
			"teacher-Talk_18","teacher-Talk_19","teacher-Talk_20",
			"teacher-Talk_00","teacher-Talk_01","teacher-Talk_02",
			"teacher-Talk_03","teacher-Talk_04","teacher-Talk_05",
			"teacher-Talk_06","teacher-Talk_07","teacher-Talk_08",
			"teacher-Talk_09","teacher-Talk_10","teacher-Talk_11",
			"teacher-Talk_12","teacher-Talk_13","teacher-Talk_14",
			"teacher-Talk_15","teacher-Talk_16","teacher-Talk_17"
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

		this.addAnimation('talk', [{ name: "teacher-Talk_00", delay: 100 },{ name: "teacher-Talk_01", delay: 100 },{ name: "teacher-Talk_02", delay: 100 },{ name: "teacher-Talk_03", delay: 100 },{ name: "teacher-Talk_04", delay: 100 },{ name: "teacher-Talk_05", delay: 100 },{ name: "teacher-Talk_06", delay: 100 },{ name: "teacher-Talk_07", delay: 100 },{ name: "teacher-Talk_08", delay: 100 },{ name: "teacher-Talk_09", delay: 100 },{ name: "teacher-Talk_10", delay: 100 },{ name: "teacher-Talk_11", delay: 100 },{ name: "teacher-Talk_12", delay: 100 },{ name: "teacher-Talk_13", delay: 100 },{ name: "teacher-Talk_14", delay: 100 },{ name: "teacher-Talk_15", delay: 100 },{ name: "teacher-Talk_16", delay: 100 },{ name: "teacher-Talk_17", delay: 100 },{ name: "teacher-Talk_18", delay: 100 },{ name: "teacher-Talk_19", delay: 100 },{ name: "teacher-Talk_20", delay: 100 }]);
		this.addAnimation('idle', [{ name: "teacher-Idle_00", delay: 100 },{ name: "teacher-Idle_01", delay: 100 },{ name: "teacher-Idle_02", delay: 100 },{ name: "teacher-Idle_03", delay: 100 },{ name: "teacher-Idle_04", delay: 100 },{ name: "teacher-Idle_05", delay: 100 },{ name: "teacher-Idle_06", delay: 100 },{ name: "teacher-Idle_07", delay: 100 },{ name: "teacher-Idle_08", delay: 100 },{ name: "teacher-Idle_09", delay: 100 },{ name: "teacher-Idle_10", delay: 100 },{ name: "teacher-Idle_11", delay: 100 },{ name: "teacher-Idle_12", delay: 100 },{ name: "teacher-Idle_13", delay: 100 },{ name: "teacher-Idle_14", delay: 100 },{ name: "teacher-Idle_15", delay: 100 },{ name: "teacher-Idle_16", delay: 100 },{ name: "teacher-Idle_17", delay: 100 },{ name: "teacher-Idle_18", delay: 100 },{ name: "teacher-Idle_19", delay: 100 },{ name: "teacher-Idle_20", delay: 100 },{ name: "teacher-Idle_21", delay: 100 },{ name: "teacher-Idle_22", delay: 100 }]);
		this.setCurrentAnimation('talk');
		this.var = {};

        // Put user code here //
        
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