(function(){
// Put user code here //
 
//  End of user code  //

game.level.stageMenu = me.Stage.extend({
	onResetEvent: function() {
        // Put user code here //
        
        //  End of user code  //
		me.levelDirector.loadLevel("stageMenu");
		this.var = {};
        // Put user code here //
        me.game.viewport.fadeOut("#000000", 1000);
        this.selisihHeightLayar = me.game.viewport.height/2 - me.game.world.height/2;
        
        this.level = me.pool.pull("levelContainerAmerica", me.game.viewport.width / 2, me.game.viewport.height / 2);
        me.game.world.addChild(this.level, this.level.pos.z);
        me.audio.play("bgm-menu", false, ()=>{this.audioFunc()}, game.user.userData.sound.BGM);
        
        
        let posY;
        if(me.game.viewport.height/2 < me.game.world.height/2){
            let p = me.game.world.height/2 - me.game.viewport.height/2;
            posY = me.game.world.height/2 - p;
        }else{
            posY = me.game.world.height/2;
        }
        this.goldText = me.pool.pull('me.BitmapText', 850, posY+231.5, {
                                             font: 'veteranTypewriterWhite',
                                             size : 0.75,//1.5,
                                             text : game.user.userData.gold,
                                             textAlign : 'left',
                                             textBaseAlign : 'bottom',
                                             anchorPoint : {x: 0, y: 0.5}}); 
        me.game.world.addChild(this.goldText, 5);
        
        this.diamondText = me.pool.pull('me.BitmapText', 965, posY+231.5, {
                                             font: 'veteranTypewriterWhite',
                                             size : 0.75,//1.5,
                                             text : game.user.userData.diamond,
                                             textAlign : 'left',
                                             textBaseAlign : 'bottom',
                                             anchorPoint : {x: 0, y: 0.5}}); 
        me.game.world.addChild(this.diamondText, 5);
        
        if(IS_KEYBOARD){
            this.buttonWaitUp = true;
            this.timeButton = 0;
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
            if(this.buttonWaitUp){
                if (me.input.isKeyPressed('left')){
                    this.buttonWaitUp = false;
                    this.level.kananSwipe();
                }
                if (me.input.isKeyPressed('right')){
                    this.buttonWaitUp = false;
                    this.level.kiriSwipe();
                }
                if (me.input.isKeyPressed('enter')){
                    this.buttonWaitUp = false;
                    this.level.playButton.func();
                }
            }else{
                this.timeButton += 1;
                if(this.timeButton >= 50){
                    this.timeButton = 0;
                    this.buttonWaitUp = true;
                }
            }
            if (me.input.isKeyPressed('num9')){
                this.level.exitButtonKey.func();
            }
        },10);
    },
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();