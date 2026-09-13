(function(){
// Put user code here //
 
//  End of user code  //

game.level.splashScreen2 = me.Stage.extend({
	onResetEvent: function() {
        // Put user code here //
        
        //  End of user code  //
		me.levelDirector.loadLevel("splashScreen2");
		this.var = {};
        // Put user code here //
        me.game.viewport.fadeOut("#000000", 3000);
        
        this.splashAnim = me.pool.pull("animSplash", 0,0);
        me.game.world.addChild(this.splashAnim, 10);
        game.util.scale(this.splashAnim, 1.25);
        
        me.audio.play("env-loading", true, null, 0.5);
        
        let onceTimeOut = true;
        this.timeOt1 = me.timer.setTimeout(()=>{
            if(onceTimeOut){
                onceTimeOut = false; 
                me.game.viewport.fadeIn("#000000", 2000);
                let onceTimeOut2 = true;
                this.timeOt2 = me.timer.setTimeout(()=>{
                    if(onceTimeOut2){
                        onceTimeOut2 = false;
                        me.state.change("startMenu");
                        me.audio.stop("env-loading");
                    }
                }, 2000);
            }
        }, 5000);
        //  End of user code  //
	},

	onDestroyEvent: function() {
        // Put user code here //
        me.timer.clearTimeout(this.timeOt1);
        me.timer.clearTimeout(this.timeOt2);
        //  End of user code  //
	},

    // Put user code here //
    
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();