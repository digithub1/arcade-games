(function(){
// Put user code here //
 
//  End of user code  //

game.level.splashScreen = me.Stage.extend({
	onResetEvent: function() {
        // Put user code here //
        
        //  End of user code  //
		me.levelDirector.loadLevel("splashScreen");
		this.var = {};
        // Put user code here //
        // me.game.viewport.fadeOut("#000000", 2000);
        me.video.renderer.settings.scaleMethod = "fit";
        me.state.change("splashScreen2");
        // let onceTimeOut = true;
        // this.timeOt1 = me.timer.setTimeout(function() {
        //     if(onceTimeOut){
        //         onceTimeOut = false;
        //         me.game.viewport.fadeIn("#000000", 2000);
        //         let onceTimeOut2 = true;
        //         this.timeOt2 = me.timer.setTimeout(function() {
        //             if(onceTimeOut2){
        //               onceTimeOut2 = false;
        //               me.state.change("splashScreen2");
        //             }
        //         }, 2000);
        //     }
        // }, 3000);
        //  End of user code  //
	},

	onDestroyEvent: function() {
        // Put user code here //
        // me.timer.clearTimeout(this.timeOt1);
        // me.timer.clearTimeout(this.timeOt2);
        //  End of user code  //
	},

    // Put user code here //
    
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();