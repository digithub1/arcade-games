(function(){
// Put user code here //
 
//  End of user code  //

game.level.Temp = me.Stage.extend({
	onResetEvent: function() {
        // Put user code here //
        
        //  End of user code  //
		me.levelDirector.loadLevel("Temp");
		this.var = {};
        // Put user code here //
        setTimeout(()=>{
            me.state.change(arguments[0])
        }, 1000);
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