(function(){
// Put user code here //
 
//  End of user code  //

game.level.Lab = me.Stage.extend({
	onResetEvent: function() {
        // Put user code here //
        
        //  End of user code  //
		me.levelDirector.loadLevel("Lab");
		this.var = {};
        // Put user code here //
        let component = me.pool.pull('game.component.lab', 0, 0);
        
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