(function(){
// Put user code here //
 
//  End of user code  //

game.level.lobysolo = me.Stage.extend({
	onResetEvent: function() {
        // Put user code here //
       
        //  End of user code  //
		me.levelDirector.loadLevel("lobysolo");
		this.var = {};
        // Put user code here //
        // me.game.viewport.fadeOut("#000000", 1000);
        me.audio.play("bgm-menu", false, ()=>{this.audioFunc()}, game.user.userData.sound.BGM);
        this.selisihHeightLayar = me.game.viewport.height/2 - me.game.world.height/2;
        
        this.mode = "solo";
        me.game.viewport.fadeOut("#000000", 1000);
        this.playerAva =  me.pool.pull('worldMapAvatarPic', -435, -35);
        me.game.world.addChild(this.playerAva, 11);
        game.util.scale(this.playerAva,2);
        
        this.start = me.pool.pull("survival", 0, 225,{
           region: "button_battle"
        });
        me.game.world.addChild(this.start, 21);
        
        this.rankBoard = me.pool.pull('rankContainerSolo', 0, 0,{
            container:this
        });
        me.game.world.addChild(this.rankBoard, 11);
        
        let blackPanelKiri = me.pool.pull("blackPanel", -me.game.world.width+25, 0);
        me.game.world.addChild(blackPanelKiri, 100);
        let blackPanelKanan = me.pool.pull("blackPanel", me.game.world.width-25, 0);
        me.game.world.addChild(blackPanelKanan, 100);
        let blackPanelAtas = me.pool.pull("blackPanel", 0, -me.game.world.height+2.5);
        me.game.world.addChild(blackPanelAtas, 100);
        let blackPanelBawah = me.pool.pull("blackPanel", 0, me.game.world.height-7.5);
        me.game.world.addChild(blackPanelBawah, 100);
        
        this.back = me.pool.pull("backLobbySolo", -475, -200,{
           region: "Button_back"
        });
        me.game.world.addChild(this.back,  3);
        
        let bottomBorder = me.pool.pull("worldMapBckgrndBottomBar", 0, 235),
            topBorder   = me.pool.pull("topBarEndless", 0, -225),
            survivalText = me.pool.pull("survivalText", -50, -232.5);
        me.game.world.addChild(bottomBorder, 20);
        me.game.world.addChild(topBorder, 20);
        me.game.world.addChild(survivalText, 21);
        
        if(IS_KEYBOARD){
            this.exitButtonKey = me.pool.pull('changeStateButton', 175, this.selisihHeightLayar+50, {
                            container : this,
                            folder  :   'battle',
                            region  : 'pauseHomeKey',
                            state   : 'worldMap'
            });
            me.game.world.addChild(this.exitButtonKey, 6);
            this.exitButtonKey.scale(0.5);
            this.controllerPad();
        }
        //  End of user code  //
	},

	onDestroyEvent: function() {
        // Put user code here //
        me.audio.stop("bgm-menu");
        me.timer.clearInterval(this.padInterval);
        //  End of user code  //
	},

    // Put user code here //
    audioFunc: function(){
        me.audio.play("bgm-menu", false, ()=>{this.audioFunc()}, game.user.userData.sound.BGM);
    },
    
    controllerPad: function(){
        this.padInterval = me.timer.setInterval(()=>{
            if (me.input.isKeyPressed('num9')){
                this.exitButtonKey.func();
            }
            if (me.input.isKeyPressed('enter')){
                this.start.func();
            }
        },10);
    },
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();