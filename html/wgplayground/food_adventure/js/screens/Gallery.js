(function(){
// Put user code here //
 
//  End of user code  //

game.level.Gallery = me.Stage.extend({
	onResetEvent: function() {
        // Put user code here //
        
        //  End of user code  //
		me.levelDirector.loadLevel("Gallery");
		this.var = {};
        // Put user code here //

        this.container = me.pool.pull("GalleryContainer", 0, 0);
        me.game.world.addChild(this.container, 5);
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