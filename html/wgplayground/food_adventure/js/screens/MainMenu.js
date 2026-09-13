(function(){
// Put user code here //
 
//  End of user code  //

game.level.MainMenu = me.Stage.extend({
	onResetEvent: function() {
        // Put user code here //
        
        //  End of user code  //
		me.levelDirector.loadLevel("MainMenu");
		this.var = {};
        // Put user code here //
        this.audioResumeFunc();
        
        this.settingContainer = me.pool.pull("SettingContainer", 0, 0, {
            container : this
        });
        me.game.world.addChild(this.settingContainer, 3);
        
        this.bg = me.pool.pull("BG_MainMenu", 0, 0, {
            container : this
        });
        me.game.world.addChild(this.bg, 1);
        
        this.btnStart = me.pool.pull("BtnStart", -5, 100, {
            container : this
        });
        this.settingContainer.addChild(this.btnStart, 2);
        
        this.btnGallery = me.pool.pull("BtnGallery", -16, 335, {
            container : this
        });
        this.settingContainer.addChild(this.btnGallery, 2);
        
        this.btnSettings = me.pool.pull("BtnSettings", -16, 500, {
            container : this
        });
        this.settingContainer.addChild(this.btnSettings, 2);
        
        this.settingContainer.HideSetting();
        
        this.highScoreText = game.font.arialBlack(me.game.viewport.width/2-270, me.game.viewport.height/2+580, {
            fillStyle : "#C63D2F",
            size : 0.6,
            text : "Hi Score : "+game.user.userData.highScore
        });
        this.settingContainer.addChild(this.highScoreText, 2);
        this.highScoreText.floating = true;
        //  End of user code  //
	},

	onDestroyEvent: function() {
        // Put user code here //
        me.audio.stop("bgm-mainmenu");
        //  End of user code  //
	},

    // Put user code here //
    audioResumeFunc(){
        me.audio.play("bgm-mainmenu", false, ()=>{this.audioResumeFunc()}, 0.4);
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();