(function(){
// Put user code here //
 
//  End of user code  //

game.level.loginReward = me.Stage.extend({
	onResetEvent: function() {
        // Put user code here //
        
        //  End of user code  //
		me.levelDirector.loadLevel("loginReward");
		this.var = {};
        // Put user code here //
        me.game.viewport.fadeOut("#000000", 1000);
        
        // for(let i=1; i<=6; i++){
        //     game.user.userData.loginReward.push({day : i, claim : false});
        //     if(i==4){
        //         game.user.userData.loginReward[3]["claim"] = true;
        //     }
        //     if(i==6){
        //         game.user.userData.loginReward[5]["claim"] = true;
        //     }
        // }
        
        this.achContainer = me.pool.pull('LoginRewardContainer', 0, 0);
        me.game.world.addChild(this.achContainer, 3);
        me.audio.play("bgm-menu", false, ()=>{this.audioFunc()}, game.user.userData.sound.BGM);
        
        if(IS_KEYBOARD){
            this.controllerPad();
        }
        
        this.checkAvailableReward();
        //  End of user code  //
	},

	onDestroyEvent: function() {
        // Put user code here //
        me.audio.stop("bgm-menu");
        me.timer.clearInterval(this.padInterval);
        //  End of user code  //
	},

    // Put user code here //
    audioFunc: function(){
        me.audio.play("bgm-menu", false, ()=>{this.audioFunc()}, game.user.userData.sound.BGM);
    },

    controllerPad: function(){
        this.padInterval = me.timer.setInterval(()=>{
          
            if (me.input.isKeyPressed('enter')){
                  for (var i = 0; i < this.rewardData.length; i++) {
                      let distanceX = 220,
                          posX      = this.achContainer.pos.x - (me.game.viewport.width / 2) - 390 + (i * distanceX) + (me.game.viewport.width * 2);
                      if(i > 4){
                          distanceX = 360;
                          posX = this.achContainer.pos.x - (me.game.viewport.width / 2) - 155 + ((i - 5) * distanceX) + (me.game.viewport.width * 2);
                      }
                      
                      if(this.rewardData[i] == false && this.achContainer.rewardList[i].stamp.pos.x == posX){
                          this.achContainer.rewardList[i].claimBtn.func();
                      }
                  }
            }
            if (me.input.isKeyPressed('num9')){
                this.achContainer.exitButtonKey.func();
            }
        },10);
    },
    
    checkAvailableReward: function(){
        var claimList = game.user.userData.loginReward;
        this.rewardData = [];
        for (var key in claimList) {
           if (claimList.hasOwnProperty(key)) {
            this.rewardData.push(claimList[key].claim)
           }
        }
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();