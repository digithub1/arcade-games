(function(){
// Put user code here //
 
//  End of user code  //

game.object.BtnBGM = me.GUI_Object.extend({
	init: function(x, y, settings = {}){
		settings.texture = "UI";
		settings.image = game.textureMap.get(settings.texture);
		game.util.__populateAtlasIndices([
			"music_on","music_off","music_on_h",
			"music_off_h"
		], settings);
		settings.framewidth = settings.framewidth || 64;
		settings.frameheight = settings.frameheight || 38;
		settings.anchorPoint = {
			x: 0.5,
			y: 0.5
		};

        // Put user code here //
        this.container = settings.container;
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

		this.addAnimation('on', [{ name: "music_on", delay: 100 }]);
		this.addAnimation('off', [{ name: "music_off", delay: 100 }]);
		this.addAnimation('on_select', [{ name: "music_on_h", delay: 100 }]);
		this.addAnimation('off_select', [{ name: "music_off_h", delay: 100 }]);
		this.setCurrentAnimation('on');
		this.var = {};

        // Put user code here //
        this.checkButtonFunc();
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
        me.audio.play("sfx-button2");
        if(this.isCurrentAnimation('on')){
            game.user.userData.bgm = false;
            game.util.muteBgm();
            if(!this.isCurrentAnimation('off')){this.setCurrentAnimation('off')}
        }else{
            game.user.userData.bgm = true;
            game.util.unmuteBgm();
            if(!this.isCurrentAnimation('on')){this.setCurrentAnimation('on')}
        }
        
        if(localSave){localStorage.setItem('foodQuiz.AllData', JSON.stringify(game.user))}
    },
    
    checkButtonFunc: function(){
        if(game.user.userData.bgm){
            game.util.unmuteBgm();
            if(!this.isCurrentAnimation('on')){this.setCurrentAnimation('on')}
        }else{
            game.util.muteBgm();
            if(!this.isCurrentAnimation('off')){this.setCurrentAnimation('off')}
        }
        
        if(localSave){localStorage.setItem('foodQuiz.AllData', JSON.stringify(game.user))}
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();