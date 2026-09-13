(function(){
// Put user code here //
 
//  End of user code  //

game.level.NerdComic = me.Stage.extend({
	onResetEvent: function() {
        // Put user code here //
        
        //  End of user code  //
		me.levelDirector.loadLevel("NerdComic");
		this.var = {};
        // Put user code here //
        let comic = me.pool.pull("ComicPage", 0, 0);
        me.game.world.addChild(comic, 1);
        
        let btn = me.pool.pull("NextPage", 900, 450, {
            container : this,
            region : "next icon",
            folder : "Comic"
        });
        me.game.world.addChild(btn, 2);
        btn.comic = comic;
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