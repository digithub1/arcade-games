(function(){
// Put user code here //
 
//  End of user code  //

game.level.Library = me.Stage.extend({
	onResetEvent: function() {
        // Put user code here //
        game.var.game_code = 2;
        //  End of user code  //
		me.levelDirector.loadLevel("Library");
		this.var = {};
        // Put user code here //
        let container = me.pool.pull('LibraryContainer', 0, 0);
        me.game.world.addChild(container , 1);
        
        let blok = me.pool.pull('Blok', 0, 0);
        me.game.world.addChild(blok, 2);
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