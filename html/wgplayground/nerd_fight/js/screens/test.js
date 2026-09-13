(function(){
// Put user code here //
 
//  End of user code  //

game.level.test = me.Stage.extend({
	onResetEvent: function() {
        // Put user code here //
        
        //  End of user code  //
		me.levelDirector.loadLevel("test");
		this.var = {};
        // Put user code here //
		this.id = "EB005";
		let enemy = me.pool.pull(this.id, 0, 0, {
                    id : this.id,
                    level : 1,
                    index : 1,
                    delay : 1000
                });  
        
        me.game.world.addChild(enemy, 1);
        enemy.StartStun(20);
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