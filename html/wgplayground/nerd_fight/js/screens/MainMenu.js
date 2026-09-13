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
        let component = me.pool.pull('game.component.mainmenu');
        game.var.libraryData = null;
        
        //game.controller.data.clearData();
        
        //game.controller.data.modifyUserDataProperty("comic", "not finished");
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