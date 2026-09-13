(function(){
// Put user code here //
 
//  End of user code  //

game.level.loadDataLevel = me.Stage.extend({
	onResetEvent: function() {
        // Put user code here //
        
        //  End of user code  //
		me.levelDirector.loadLevel("loadDataLevel");
		this.var = {};
        // Put user code here //
        console.log("load data");
        // game.controller.data.initDatabase(() => {
            me.state.change(game.state.menuLevel);
        // });
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