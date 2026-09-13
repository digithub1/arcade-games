(function(){
// Put user code here //
 
//  End of user code  //

game.level.Shop = me.Stage.extend({
	onResetEvent: function() {
        // Put user code here //
        // game.controller.data.addGold(1000);
        // console.log("duit nambah")
        // game.controller.data.addTemporaryGold(1000);
        //  End of user code  //
		me.levelDirector.loadLevel("Shop");
		this.var = {};
        // Put user code here //
        me.game.viewport.fadeOut("#000000", 1000);
        
        this.shopContainer = me.pool.pull('ShopManager', 0, 0);
        me.game.world.addChild(this.shopContainer, 10);
        
        me.audio.play("bgm-menu", false, ()=>{this.audioFunc()}, game.user.userData.sound.BGM);
        //  End of user code  //
	},

	onDestroyEvent: function() {
        // Put user code here //
        me.audio.stop("bgm-menu");
        //  End of user code  //
	},

    // Put user code here //
    audioFunc: function(){
        me.audio.play("bgm-menu", false, ()=>{this.audioFunc()}, game.user.userData.sound.BGM);
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();