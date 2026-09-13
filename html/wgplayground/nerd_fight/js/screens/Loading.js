(function(){
// Put user code here //
 
//  End of user code  //

game.level.Loading = me.Stage.extend({
	onResetEvent: function() {
        // Put user code here //
        
        //  End of user code  //
		me.levelDirector.loadLevel("Loading");
		this.var = {};
        // Put user code here //
        let component = me.pool.pull('game.component.loading', 0, 0, {
            nextLevel : arguments[0]
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