(function(){
// Put user code here //
 
//  End of user code  //

game.level.dailyReward = me.Stage.extend({
	onResetEvent: function() {
        // Put user code here //
        
        //  End of user code  //
		me.levelDirector.loadLevel("dailyReward");
		this.var = {};
        // Put user code here //
        me.game.viewport.fadeOut("#000000", 1000);
        // for(let i=1; i<=28; i++){
        //     game.user.userData.dailyReward.push({day : i, claim : false});
        // }
        this.questContainer = me.pool.pull('DailyRewardContainer', 0, 0);
        me.game.world.addChild(this.questContainer, 3);
        me.audio.play("bgm-menu", false, ()=>{this.audioFunc()}, game.user.userData.sound.BGM);
        
        if(IS_KEYBOARD){
            this.controllerPad();
        }
        
        this.rewardData = [];
        
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
        let posX = [];
        for(let i=0; i<6; i++){
            posX.push(this.questContainer.pos.x - (me.game.viewport.width / 2) - 422.5 + me.game.viewport.width * 2 + 187.5*i);
        }
        this.padInterval = me.timer.setInterval(()=>{
            if (me.input.isKeyPressed('up')){
                this.questContainer.Move('up');
            }
            if (me.input.isKeyPressed('down')){
                this.questContainer.Move('down');
            }
            if (me.input.isKeyPressed('enter')){
                for (var i = 0; i < this.rewardData.length; i++) {
                    if(this.rewardData[i] == false){
                        // Row 1 (Day 1-6)
                        if(i >= 0 && i < 6 && this.questContainer.rewardList[0][i].stamp.pos.x == posX[i]){
                            this.questContainer.rewardList[0][i].claimBtn.func();
                        } 
                        
                        // Row 2 (Day 7-12)
                        if(i >= 6 && i < 12 && this.questContainer.rewardList[1][i-6].stamp.pos.x == posX[i-6]){
                            this.questContainer.rewardList[1][i - 6].claimBtn.func();
                        } 
                        
                        // Row 2 (Day 19-24)
                        if(i >= 12 && i < 18 && this.questContainer.rewardList[2][i-12].stamp.pos.x == posX[i-12]){
                            this.questContainer.rewardList[2][i - 12].claimBtn.func();
                        } 
                        
                        // Row 2 (Day 25-28)
                        if(i >= 18 && i < 24 && this.questContainer.rewardList[3][i-18].stamp.pos.x == posX[i-18]){
                            this.questContainer.rewardList[3][i - 18].claimBtn.func();
                        }
                        
                        if(i >= 24 && i < 28 && this.questContainer.rewardList[4][i-24].stamp.pos.x == posX[i-24]){
                            this.questContainer.rewardList[4][i - 24].claimBtn.func();
                        }
                    }    
                }
                
                this.checkAvailableReward();
                
            }
            if (me.input.isKeyPressed('num9')){
                this.questContainer.exitButtonKey.func();
            }
        },10);
    },
    
    checkAvailableReward: function(){
        var claimList = game.user.userData.dailyReward;
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