(function(){
// Put user code here //
 
//  End of user code  //

game.level.Cafetaria = me.Stage.extend({
	onResetEvent: function() {
        // Put user code here //
        game.var.game_code = 2;
        //  End of user code  //
		me.levelDirector.loadLevel("Cafetaria");
		this.var = {};
        // Put user code here //
        let component = me.pool.pull('game.component.cafetaria', 0, 0);
        
        
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