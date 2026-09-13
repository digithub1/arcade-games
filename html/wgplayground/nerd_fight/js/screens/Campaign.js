(function(){
// Put user code here //
 
//  End of user code  //

game.level.Campaign = me.Stage.extend({
	onResetEvent: function() {
        // Put user code here //
        
        //  End of user code  //
		me.levelDirector.loadLevel("Campaign");
		this.var = {};
        // Put user code here //
        let component = me.pool.pull('game.component.campaign', 0, 0);
         
		//console.log(me.video.renderer.cache);
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