(function(){
// Put user code here //
 
//  End of user code  //

game.level.dailyQuest = me.Stage.extend({
	onResetEvent: function() {
        // Put user code here //
        
        //  End of user code  //
		me.levelDirector.loadLevel("dailyQuest");
		this.var = {};
        // Put user code here //
        me.game.viewport.fadeOut("#000000", 1000);
        
        this.questContainer = me.pool.pull('DailyQuestContainer', 0, 0);
        me.game.world.addChild(this.questContainer, 3);
        me.audio.play("bgm-menu", false, ()=>{this.audioFunc()}, game.user.userData.sound.BGM);
        
        if(IS_KEYBOARD){
            this.controllerPad();
        }
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
             if (me.input.isKeyPressed('up')){
                this.questContainer.Move('up');
            }
            if (me.input.isKeyPressed('down')){
                this.questContainer.Move('down');
            }
            if (me.input.isKeyPressed('enter')){
                let itemPosX = this.questContainer.pos.x - (me.game.viewport.width / 2) + 50 + 400 + me.game.viewport.width * 2;
                let questList = this.questContainer.questList;
                
                if(this.questContainer.leftIndex == 0){ 
                    if(questList[0].progressBar.value >= questList[0].progressBar.maxValue && this.questContainer.questList[0].stamp.pos.x == itemPosX){
                         questList[0].claimBtn.func();
                    }
                    if(questList[1].progressBar.value >= questList[1].progressBar.maxValue && this.questContainer.questList[1].stamp.pos.x == itemPosX){
                         questList[1].claimBtn.func();
                    }
                }
                else if(this.questContainer.leftIndex == 1){
                    if(questList[1].progressBar.value >= questList[1].progressBar.maxValue && this.questContainer.questList[1].stamp.pos.x == itemPosX){
                         questList[1].claimBtn.func();
                    }
                    if(questList[2].progressBar.value >= questList[2].progressBar.maxValue && this.questContainer.questList[2].stamp.pos.x == itemPosX){
                         questList[2].claimBtn.func();
                    }
                }
                else if(this.questContainer.leftIndex == 2){
                    if(questList[2].progressBar.value >= questList[2].progressBar.maxValue && this.questContainer.questList[2].stamp.pos.x == itemPosX){
                         questList[2].claimBtn.func();
                    }
                    if(questList[3].progressBar.value >= questList[3].progressBar.maxValue && this.questContainer.questList[3].stamp.pos.x == itemPosX){
                         questList[3].claimBtn.func();
                    }
                }
                else if(this.questContainer.leftIndex == 3){
                    if(questList[3].progressBar.value >= questList[3].progressBar.maxValue && this.questContainer.questList[3].stamp.pos.x == itemPosX){
                         questList[3].claimBtn.func();
                    }
                    if(questList[4].progressBar.value >= questList[4].progressBar.maxValue && this.questContainer.questList[4].stamp.pos.x == itemPosX){
                         questList[4].claimBtn.func();
                    }
                }
                else if(this.questContainer.leftIndex == 4){
                    if(questList[4].progressBar.value >= questList[4].progressBar.maxValue && this.questContainer.questList[4].stamp.pos.x == itemPosX){
                         questList[4].claimBtn.func();
                    }
                    if(questList[5].progressBar.value >= questList[5].progressBar.maxValue && this.questContainer.questList[5].stamp.pos.x == itemPosX){
                         questList[5].claimBtn.func();
                    }
                }
            }
            if (me.input.isKeyPressed('num9')){
                this.questContainer.exitButtonKey.func();
            }
        },10);
    },
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();