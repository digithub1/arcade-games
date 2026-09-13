(function(){
// Put user code here //
 
//  End of user code  //

game.level.MelonSplash = me.Stage.extend({
	onResetEvent: function() {
        // Put user code here //
        if(window.plugins != undefined)
             window.plugins.insomnia.allowSleepAgain();
        
        setTimeout(function(){
			me.state.change("Nerd_Splash");
		}.bind(this), 3500);
        //  End of user code  //
		me.levelDirector.loadLevel("MelonSplash");
		this.var = {};
        // Put user code here //
        
        //  End of user code  //
	},

	onDestroyEvent: function() {
        // Put user code here //
        
        //  End of user code  //
	},

    // Put user code here //
    
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();