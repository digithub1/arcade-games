(function(){
// Put user code here //
 
//  End of user code  //

game.level.Credits = me.Stage.extend({
	onResetEvent: function() {
        // Put user code here //
        
        //  End of user code  //
		me.levelDirector.loadLevel("Credits");
		this.var = {};
        // Put user code here //
        me.audio.stop("gameover");
        let blackPanel = me.pool.pull("blackPanel", 0, 0);
        me.game.world.addChild(blackPanel, 100);
        let animasi = me.pool.pull('creditsAnim', 0, 0),
            animasi2 = me.pool.pull('creditsAnim', 0, 0),
            to = true;
        me.game.world.addChild(animasi, 1);
        animasi.setCurrentAnimation('Animation 1',()=>{
            if(to){
                to = false;
                me.game.world.removeChild(animasi);
                me.game.world.removeChild(blackPanel);
                me.game.world.addChild(animasi2, 1);
                animasi2.tweenPlay();
                me.audio.play("bgm-win", false, ()=>{this.audioFunc()}, game.user.userData.sound.BGM-0.25);
            }
            return false;
        });
        //  End of user code  //
	},

	onDestroyEvent: function() {
        // Put user code here //
        me.audio.stop("bgm-win");
        //  End of user code  //
	},

    // Put user code here //
    audioFunc: function(){
        me.audio.play("bgm-win", false, ()=>{this.audioFunc()}, game.user.userData.sound.BGM);
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();