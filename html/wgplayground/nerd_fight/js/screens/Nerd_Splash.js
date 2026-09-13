(function(){
// Put user code here //
 
//  End of user code  //

game.level.Nerd_Splash = me.Stage.extend({
	onResetEvent: function() {
        // Put user code here //
        if(window.plugins != undefined)
             window.plugins.insomnia.allowSleepAgain();
        //  End of user code  //
		me.levelDirector.loadLevel("Nerd_Splash");
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