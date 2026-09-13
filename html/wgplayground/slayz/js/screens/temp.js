(function(){
// Put user code here //
 
//  End of user code  //

game.level.temp = me.Stage.extend({
	onResetEvent: function() {
        // Put user code here //
        
        //  End of user code  //
		me.levelDirector.loadLevel("temp");
		this.var = {};
        // Put user code here //
        me.state.pause(false); 
        me.state.resume(true);
        let toOnce = true;
        this.timeOt1 = me.timer.setTimeout(()=>{
            if(toOnce){
            toOnce = false;
                me.state.change(game.state[arguments[0]]);
            }
        }, 1000);
        //  End of user code  //
	},

	onDestroyEvent: function() {
        // Put user code here //
        me.timer.clearTimeout(this.timeOt1);
        //  End of user code  //
	},

    // Put user code here //
    
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();