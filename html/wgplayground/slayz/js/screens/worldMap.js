(function(){
// Put user code here //
 
//  End of user code  //

game.level.worldMap = me.Stage.extend({
	onResetEvent: function() {
        // Put user code here //
        
        //  End of user code  //
		me.levelDirector.loadLevel("worldMap");
		this.var = {};
        // Put user code here //
        me.game.viewport.fadeOut("#000000", 1500);
        me.audio.play("bgm-menu", false, ()=>{this.audioFunc()}, 1);
        me.audio.stop("gameover");
        this.selisihHeightLayar = me.game.viewport.height/2 - me.game.world.height/2;
        
        this.optionButton = me.pool.pull('openContainerButton', me.game.viewport.width/2-49, -me.game.viewport.height/2+this.selisihHeightLayar+38, {
                        container : "option",
                        folder  :   'worldMap',
                        region  : 'Button_settings'
        });
        me.game.world.addChild(this.optionButton, 11);
        
        this.ava = me.pool.pull('worldMapAvatarPic', -535, -230);
        me.game.world.addChild(this.ava, this.ava.pos.z);
        
        this.optionContainer = me.pool.pull('optionContainer', 9999 / 2, 9999 / 2);//1170,540  8829, 9459
        me.game.world.addChild(this.optionContainer, this.optionContainer.pos.z);
        
        this.isOptionOpen = false;
        
        this.deathisland = me.pool.pull("deathisland",me.game.viewport.width / 2 + 412.5, me.game.viewport.height / 2,{
           region: "survivor_island"
        });
        me.game.world.addChild(this.deathisland, 11);
        
        this.shopButton = me.pool.pull("changeStateButton", 575.5, me.game.viewport.height/2+242.25,{
            folder:"worldMap",
            region:"Button_shop",
            state:"Shop"
        });
        me.game.world.addChild(this.shopButton, 12);
        //nyalahin kalo mau apus database
// 		let deleteButton = me.pool.pull("deleteDataButton", 0, 0);
// 		me.game.world.addChild(deleteButton, 11);
		//--
        this.mapUIContainer = me.pool.pull("mapUIContainer", 0, 0);
        me.game.world.addChild(this.mapUIContainer, 11);
        
        this.setlastlogin();
        
        // let namaplayer = me.pool.pull('me.BitmapText', me.game.world.width/2-485, me.game.world.height/2-255, {//-900,-490
        //     font: 'veteranTypewriterWhite',
        //     size : 0.75,//1.5,
        //     text : game.user.userData.name
        // }); 
        // me.game.world.addChild(namaplayer, 50);
        
        let posY;
        if(me.game.viewport.height/2 < me.game.world.height/2){
            let p = me.game.world.height/2 - me.game.viewport.height/2;
            posY = me.game.world.height/2 - p;
        }else{
            posY = me.game.world.height/2;
        }
        
        let goldIcon = me.pool.pull('me.Sprite', 980.5, posY+252.5,{
            image : game.textureMap.get("image"),
            region: 'gold'
        });
        me.game.world.addChild(goldIcon, 5);
        
        this.goldText = me.pool.pull('me.BitmapText', 998, posY+243.5,{
                                             font: 'veteranTypewriterWhite',
                                             size : 0.75,//1.5,
                                             text : game.user.userData.gold,
                                             textAlign : 'left',
                                             textBaseAlign : 'bottom',
                                             anchorPoint : {x: 0, y: 0.5}}); 
        me.game.world.addChild(this.goldText, 5);
        
        let diamondIcon = me.pool.pull('me.Sprite', 1087.5, posY+250,{
            image : game.textureMap.get("image"),
            region: 'diamond icon'
        });
        me.game.world.addChild(diamondIcon, 5);
        
        this.diamondText = me.pool.pull('me.BitmapText', 1105, posY+243.5,{
                                             font: 'veteranTypewriterWhite',
                                             size : 0.75,//1.5,
                                             text : game.user.userData.diamond,
                                             textAlign : 'left',
                                             textBaseAlign : 'bottom',
                                             anchorPoint : {x: 0, y: 0.5}}); 
        me.game.world.addChild(this.diamondText, 5);
        
        if(IS_KEYBOARD){
            this.cursor = me.pool.pull("cursor", 0, 0, {container:this});
            me.game.world.addChild(this.cursor, 100);
            
            this.buttonWaitUp = true;
            this.timeButton = 0;
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
    
    setlastlogin: function(){
        let now = new Date().getTime();
        game.controller.data.setlastlogin(now, function(newDailyQuest){
            this.mapUIContainer.SetNotif();
        }.bind(this));
    },
    
    controllerPad: function(){
        this.padInterval = me.timer.setInterval(()=>{
            if (me.input.isKeyPressed('left')){
                if(this.isOptionOpen){
                    if(this.buttonWaitUp){
                        this.buttonWaitUp = false;
                        this.optionContainer.decreaseSFXRemote();
                    }
                }else{
                    this.cursor.pos.x -= 8;
                    if(this.cursor.pos.x <= 10){
                        this.cursor.pos.x = 10;
                    }
                }
            }
            if (me.input.isKeyPressed('right')){
                if(this.isOptionOpen){
                    if(this.buttonWaitUp){
                        this.buttonWaitUp = false;
                        this.optionContainer.increaseSFXRemote();
                    }
                }else{
                    this.cursor.pos.x += 8;
                    if(this.cursor.pos.x >= me.game.viewport.width-10){
                        this.cursor.pos.x = me.game.viewport.width-10;
                    }
                }
            }
            if (me.input.isKeyPressed('up')){
                if(this.isOptionOpen){
                    if(this.buttonWaitUp){
                        this.buttonWaitUp = false;
                        this.optionContainer.increaseBGMRemote();
                    }
                }else{
                    this.cursor.pos.y -= 8;
                    if(this.cursor.pos.y <= this.selisihHeightLayar+10){
                        this.cursor.pos.y = this.selisihHeightLayar+10;
                    }
                }
            }
            if (me.input.isKeyPressed('down')){
                if(this.isOptionOpen){
                    if(this.buttonWaitUp){
                        this.buttonWaitUp = false;
                        this.optionContainer.decreaseBGMRemote();
                    }
                }else{
                    this.cursor.pos.y += 8;
                    if(this.cursor.pos.y >= me.game.viewport.height-this.selisihHeightLayar-10){
                        this.cursor.pos.y = me.game.viewport.height-this.selisihHeightLayar-10;
                    }
                }
            }
            
            if(this.buttonWaitUp){
                if (me.input.isKeyPressed('enter')){
                    this.buttonWaitUp = false;
                    this.cursor.onClick();
                }
                if (me.input.isKeyPressed('num9') && this.isOptionOpen){
                    this.buttonWaitUp = false;
                    this.optionContainer.closeButton.onClick();
                }
                
                // SFX
                if (me.input.isKeyPressed('num4') && this.isOptionOpen){
                    this.buttonWaitUp = false;
                    this.optionContainer.decreaseSFXRemote();
                }
                if (me.input.isKeyPressed('num6') && this.isOptionOpen){
                    this.buttonWaitUp = false;
                    this.optionContainer.increaseSFXRemote();
                }
                
                // BGM
                if (me.input.isKeyPressed('num2') && this.isOptionOpen){
                    this.buttonWaitUp = false;
                    this.optionContainer.increaseBGMRemote();
                }
                if (me.input.isKeyPressed('num8') && this.isOptionOpen){
                    this.buttonWaitUp = false;
                    this.optionContainer.decreaseBGMRemote();
                }
            }else{
                this.timeButton += 1;
                if(this.timeButton >= 20){
                    this.timeButton = 0;
                    this.buttonWaitUp = true;
                }
            }
        },10);
    },
    
    cekLocationCursor: function(){
        if(this.isOptionOpen)
            return;
            
        //change avatar
        if(this.cursor.pos.x > this.ava.pos.x-(this.ava.width/2) && this.cursor.pos.x < this.ava.pos.x+(this.ava.width/2)
        && this.cursor.pos.y > this.ava.pos.y-(this.ava.width/2) && this.cursor.pos.y < this.ava.pos.y+(this.ava.width/2)){
            this.ava.onClick();
        }
        
        //achievment
        if(this.cursor.pos.x > this.mapUIContainer.achBtn.pos.x-(this.mapUIContainer.achBtn.width/2) && this.cursor.pos.x < this.mapUIContainer.achBtn.pos.x+(this.mapUIContainer.achBtn.width/2)
        && this.cursor.pos.y > this.mapUIContainer.achBtn.pos.y-(this.mapUIContainer.achBtn.width/2) && this.cursor.pos.y < this.mapUIContainer.achBtn.pos.y+(this.mapUIContainer.achBtn.width/2)){
            this.mapUIContainer.achBtn.func();
        }
        
        //daily mission
        if(this.cursor.pos.x > this.mapUIContainer.dailyQuestBtn.pos.x-(this.mapUIContainer.dailyQuestBtn.width/2) && this.cursor.pos.x < this.mapUIContainer.dailyQuestBtn.pos.x+(this.mapUIContainer.dailyQuestBtn.width/2)
        && this.cursor.pos.y > this.mapUIContainer.dailyQuestBtn.pos.y-(this.mapUIContainer.dailyQuestBtn.width/2) && this.cursor.pos.y < this.mapUIContainer.dailyQuestBtn.pos.y+(this.mapUIContainer.dailyQuestBtn.width/2)){
            this.mapUIContainer.dailyQuestBtn.func();
        }
        
        //benua America
        if(this.cursor.pos.x > this.mapUIContainer.benuaBtnRemote[0].pos.x-(this.mapUIContainer.benuaBtnRemote[0].width/2) && this.cursor.pos.x < this.mapUIContainer.benuaBtnRemote[0].pos.x+(this.mapUIContainer.benuaBtnRemote[0].width/2)
        && this.cursor.pos.y > this.mapUIContainer.benuaBtnRemote[0].pos.y-(this.mapUIContainer.benuaBtnRemote[0].width/2) && this.cursor.pos.y < this.mapUIContainer.benuaBtnRemote[0].pos.y+(this.mapUIContainer.benuaBtnRemote[0].width/2)){
            this.mapUIContainer.benuaBtnRemote[0].func();
        }
        
        //benua America Selatan
        if(this.cursor.pos.x > this.mapUIContainer.benuaBtnRemote[1].pos.x-(this.mapUIContainer.benuaBtnRemote[1].width/2) && this.cursor.pos.x < this.mapUIContainer.benuaBtnRemote[1].pos.x+(this.mapUIContainer.benuaBtnRemote[1].width/2)
        && this.cursor.pos.y > this.mapUIContainer.benuaBtnRemote[1].pos.y-(this.mapUIContainer.benuaBtnRemote[1].width/2) && this.cursor.pos.y < this.mapUIContainer.benuaBtnRemote[1].pos.y+(this.mapUIContainer.benuaBtnRemote[1].width/2)){
            this.mapUIContainer.benuaBtnRemote[1].func();
        }
        
        //benua Eropa
        if(this.cursor.pos.x > this.mapUIContainer.benuaBtnRemote[2].pos.x-(this.mapUIContainer.benuaBtnRemote[2].width/2) && this.cursor.pos.x < this.mapUIContainer.benuaBtnRemote[2].pos.x+(this.mapUIContainer.benuaBtnRemote[2].width/2)
        && this.cursor.pos.y > this.mapUIContainer.benuaBtnRemote[2].pos.y-(this.mapUIContainer.benuaBtnRemote[2].width/2) && this.cursor.pos.y < this.mapUIContainer.benuaBtnRemote[2].pos.y+(this.mapUIContainer.benuaBtnRemote[2].width/2)){
            this.mapUIContainer.benuaBtnRemote[2].func();
        }
        
        //benua Africa
        if(this.cursor.pos.x > this.mapUIContainer.benuaBtnRemote[3].pos.x-(this.mapUIContainer.benuaBtnRemote[3].width/2) && this.cursor.pos.x < this.mapUIContainer.benuaBtnRemote[3].pos.x+(this.mapUIContainer.benuaBtnRemote[3].width/2)
        && this.cursor.pos.y > this.mapUIContainer.benuaBtnRemote[3].pos.y-(this.mapUIContainer.benuaBtnRemote[3].width/2) && this.cursor.pos.y < this.mapUIContainer.benuaBtnRemote[3].pos.y+(this.mapUIContainer.benuaBtnRemote[3].width/2)){
            this.mapUIContainer.benuaBtnRemote[3].func();
        }
        
        //Shop
        if(this.cursor.pos.x > this.shopButton.pos.x-(this.shopButton.width/2) && this.cursor.pos.x < this.shopButton.pos.x+(this.shopButton.width/2)
        && this.cursor.pos.y > this.shopButton.pos.y && this.cursor.pos.y < this.shopButton.pos.y+(this.shopButton.width/2)){
            this.shopButton.func();
        }
        
        //benua Asia
        if(this.cursor.pos.x > this.mapUIContainer.benuaBtnRemote[4].pos.x-(this.mapUIContainer.benuaBtnRemote[4].width/2) && this.cursor.pos.x < this.mapUIContainer.benuaBtnRemote[4].pos.x+(this.mapUIContainer.benuaBtnRemote[4].width/2)
        && this.cursor.pos.y > this.mapUIContainer.benuaBtnRemote[4].pos.y-(this.mapUIContainer.benuaBtnRemote[4].width/2) && this.cursor.pos.y < this.mapUIContainer.benuaBtnRemote[4].pos.y+(this.mapUIContainer.benuaBtnRemote[4].width/2)){
            this.mapUIContainer.benuaBtnRemote[4].func();
        }
        
        //benua Australia
        if(this.cursor.pos.x > this.mapUIContainer.benuaBtnRemote[5].pos.x-(this.mapUIContainer.benuaBtnRemote[5].width/2) && this.cursor.pos.x < this.mapUIContainer.benuaBtnRemote[5].pos.x+(this.mapUIContainer.benuaBtnRemote[5].width/2)
        && this.cursor.pos.y > this.mapUIContainer.benuaBtnRemote[5].pos.y-(this.mapUIContainer.benuaBtnRemote[5].width/2) && this.cursor.pos.y < this.mapUIContainer.benuaBtnRemote[5].pos.y+(this.mapUIContainer.benuaBtnRemote[5].width/2)){
            this.mapUIContainer.benuaBtnRemote[5].func();
        }
        
        //Survivor island
        if(this.cursor.pos.x > this.deathisland.pos.x-(this.deathisland.width/2) && this.cursor.pos.x < this.deathisland.pos.x+(this.deathisland.width/2)
        && this.cursor.pos.y > this.deathisland.pos.y-(this.deathisland.width/2) && this.cursor.pos.y < this.deathisland.pos.y+(this.deathisland.width/2)){
            this.deathisland.func();
        }
        
        //option
        if(this.cursor.pos.x > this.optionButton.pos.x-(this.optionButton.width/2) && this.cursor.pos.x < this.optionButton.pos.x+(this.optionButton.width/2)
        && this.cursor.pos.y > this.optionButton.pos.y-(this.optionButton.width/2) && this.cursor.pos.y < this.optionButton.pos.y+(this.optionButton.width/2))
        {
            this.optionContainer.show();
            this.isOptionOpen = true;
            this.cursor.alpha = 0;
        }
        
        //Daily Reward
        if(this.cursor.pos.x > this.mapUIContainer.dailyRewardBtn.pos.x-(this.mapUIContainer.dailyRewardBtn.width/2) && this.cursor.pos.x < this.mapUIContainer.dailyRewardBtn.pos.x+(this.mapUIContainer.dailyRewardBtn.width/2)
        && this.cursor.pos.y > this.mapUIContainer.dailyRewardBtn.pos.y-(this.mapUIContainer.dailyRewardBtn.width/2) && this.cursor.pos.y < this.mapUIContainer.dailyRewardBtn.pos.y+(this.mapUIContainer.dailyRewardBtn.width/2)){
            this.mapUIContainer.dailyRewardBtn.func();
        }
        
        //Log in Reward
        if(this.cursor.pos.x > this.mapUIContainer.loginRewardBtn.pos.x-(this.mapUIContainer.loginRewardBtn.width/2) && this.cursor.pos.x < this.mapUIContainer.loginRewardBtn.pos.x+(this.mapUIContainer.loginRewardBtn.width/2)
        && this.cursor.pos.y > this.mapUIContainer.loginRewardBtn.pos.y-(this.mapUIContainer.loginRewardBtn.width/2) && this.cursor.pos.y < this.mapUIContainer.loginRewardBtn.pos.y+(this.mapUIContainer.loginRewardBtn.width/2)){
            this.mapUIContainer.loginRewardBtn.func();
        }
        
    },
    
    closeOptionScreen: function(){
        this.isOptionOpen = false;
        if(IS_KEYBOARD){
            this.cursor.alpha = 1;
            this.cursor.pos.x = me.game.viewport.width/ 2;
            this.cursor.pos.y = me.game.viewport.height/2; 
        }
            
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();