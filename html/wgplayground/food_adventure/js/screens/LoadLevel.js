(function(){
// Put user code here //
 
//  End of user code  //

game.level.LoadLevel = me.Stage.extend({
	onResetEvent: function() {
        // Put user code here //
        
        //  End of user code  //
		me.levelDirector.loadLevel("LoadLevel");
		this.var = {};
        // Put user code here //
        game.controller.data.initDatabase(() => {
            me.state.change(game.state.MainMenu);
        });
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