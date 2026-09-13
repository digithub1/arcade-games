(function(){
// Put user code here //
 
//  End of user code  //

game.level.achievement = me.Stage.extend({
	onResetEvent: function() {
        // Put user code here //
        
        //  End of user code  //
		me.levelDirector.loadLevel("achievement");
		this.var = {};
        // Put user code here //
        me.game.viewport.fadeOut("#000000", 1000);

        this.achContainer = me.pool.pull('AchievementContainer', 0, 0);
        me.game.world.addChild(this.achContainer, 3);
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
            // if (me.input.isKeyPressed('left')){
            //     this.cursor.pos.x -= 8;
            // }
            // if (me.input.isKeyPressed('right')){
            //     this.cursor.pos.x += 8;
            // }
            if (me.input.isKeyPressed('up')){
                this.achContainer.Move('up');
            }
            if (me.input.isKeyPressed('down')){
                this.achContainer.Move('down');
            }
            if (me.input.isKeyPressed('enter')){
                let a = this.achContainer.pos.x - (me.game.viewport.width / 2) + 50 + 225 + me.game.viewport.width * 2;
                if(this.achContainer.leftIndex == 0){
                    if(this.achContainer.achList[0].statusTxt._text == 'Status : Complete' && this.achContainer.achList[0].stamp.pos.x == a){
                        this.achContainer.achList[0].claimBtn.func();
                    }
                    if(this.achContainer.achList[1].statusTxt._text == 'Status : Complete' && this.achContainer.achList[1].stamp.pos.x == a){
                        this.achContainer.achList[1].claimBtn.func();
                    }
                }
                else if(this.achContainer.leftIndex == 1){
                    if(this.achContainer.achList[1].statusTxt._text == 'Status : Complete' && this.achContainer.achList[1].stamp.pos.x == a){
                        this.achContainer.achList[1].claimBtn.func();
                    }
                    if(this.achContainer.achList[2].statusTxt._text == 'Status : Complete' && this.achContainer.achList[2].stamp.pos.x == a){
                        this.achContainer.achList[2].claimBtn.func();
                    }
                }
                else if(this.achContainer.leftIndex == 2){
                    if(this.achContainer.achList[2].statusTxt._text == 'Status : Complete' && this.achContainer.achList[2].stamp.pos.x == a){
                        this.achContainer.achList[2].claimBtn.func();
                    }
                    if(this.achContainer.achList[3].statusTxt._text == 'Status : Complete' && this.achContainer.achList[3].stamp.pos.x == a){
                        this.achContainer.achList[3].claimBtn.func();
                    }
                }
                else if(this.achContainer.leftIndex == 3){
                    if(this.achContainer.achList[3].statusTxt._text == 'Status : Complete' && this.achContainer.achList[3].stamp.pos.x == a){
                        this.achContainer.achList[3].claimBtn.func();
                    }
                    if(this.achContainer.achList[4].statusTxt._text == 'Status : Complete' && this.achContainer.achList[4].stamp.pos.x == a){
                        this.achContainer.achList[4].claimBtn.func();
                    }
                }
                else if(this.achContainer.leftIndex == 4){
                    if(this.achContainer.achList[4].statusTxt._text == 'Status : Complete' && this.achContainer.achList[4].stamp.pos.x == a){
                        this.achContainer.achList[4].claimBtn.func();
                    }
                    if(this.achContainer.achList[5].statusTxt._text == 'Status : Complete' && this.achContainer.achList[5].stamp.pos.x == a){
                        this.achContainer.achList[5].claimBtn.func();
                    }
                }
            }
            if (me.input.isKeyPressed('num9')){
                this.achContainer.exitButtonKey.func();
            }
        },10);
    },
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();