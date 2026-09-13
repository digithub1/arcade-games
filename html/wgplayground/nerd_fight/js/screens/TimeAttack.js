(function(){
// Put user code here //
 
//  End of user code  //

game.level.TimeAttack = me.Stage.extend({
	onResetEvent: function() {
        // Put user code here //
        game.var.game_code = 1;
        //  End of user code  //
		me.levelDirector.loadLevel("TimeAttack");
		this.var = {};
        // Put user code here //
        let component = me.pool.pull('game.component.timeAtk', 0, 0);
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