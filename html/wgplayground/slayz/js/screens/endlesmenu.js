(function(){
// Put user code here //
 
//  End of user code  //

game.level.endlesmenu = me.Stage.extend({
	onResetEvent: function() {
        // Put user code here //
        
        //  End of user code  //
		me.levelDirector.loadLevel("endlesmenu");
		this.var = {};
        // Put user code here //
        me.game.viewport.fadeOut("#000000", 1000);
        
        let solo = me.pool.pull("solo",me.game.viewport.width / 2 - 200, me.game.viewport.height / 2 + 75,{
           region: "survivor_solo"
        });
        me.game.world.addChild(solo,  3);
        
        let multi = me.pool.pull("multi",me.game.viewport.width / 2 + 200, me.game.viewport.height / 2 + 75,{
           region: "survivor_multi"
        });
        me.game.world.addChild(multi,  3);
        
        let multilock = me.pool.pull("multi",me.game.viewport.width / 2 + 200, me.game.viewport.height / 2 + 50,{
           region: "gembok_mini"
        });
        me.game.world.addChild(multilock,  4);
     
        
        let back = me.pool.pull("back", -475, -200,{
           region: "Button_back"
        });
        me.game.world.addChild(back,  3);
        
        this.sololed = me.pool.pull("lightsolo", -200, 60);
        me.game.world.addChild(this.sololed, 2);
        this.tweenled(this.sololed);
        
        // this.multiled = me.pool.pull("lightmulti",me.game.viewport.width / 2 + 400, me.game.viewport.height / 2);
        // me.game.world.addChild(this.multiled, 2);
        // this.tweenled(this.multiled);
        
        // game.controller.data.myRank();
        // this.updateFb();
        me.audio.resume("bgm-menu", game.user.userData.sound.BGM);
        this.tween = new me.Tween();
        //  End of user code  //
	},

	onDestroyEvent: function() {
        // Put user code here //
        me.audio.pause("bgm-menu");
        this.tween.stop();
        //  End of user code  //
	},

    // Put user code here //
    tweenled: function(data){
           this.tween = new me.Tween(data).to({alpha:0.2}, 1000);
           //tween.easing(me.Tween.Easing.Linear.None);
           this.tween.repeat(Infinity);
           this.tween.yoyo(true);
           this.tween.start();
    },
    
    updateFb: function(){
        var contextType = FBInstant.context.getType();
        // console.log("jalan");
        FBInstant.updateAsync({
            action: 'LEADERBOARD',
            name: 'slayerz'
        })
        .then(() => console.log('Update Posted'))
        .catch(error => console.error(error));  
    },
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();