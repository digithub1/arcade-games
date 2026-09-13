(function(){
// Put user code here //
 
//  End of user code  //

game.level.Gameplay = me.Stage.extend({
	onResetEvent: function() {
        // Put user code here //
        
        //  End of user code  //
		me.levelDirector.loadLevel("Gameplay");
		this.var = {};
        // Put user code here //
        adsOnceRun = true;
        game.util.resumeGame();
        this.combo = 0;
        this.audioResumeFunc();
        
        this.pauseIcon = me.pool.pull("PauseIcon", 430, -1100,{container:this});
        me.game.world.addChild(this.pauseIcon, 10);
        
        // this.event = me.event.subscribe(me.event.KEYDOWN, function (action, keyCode, edge) {
        //     if(action === "esc") {
        //         if(!this.pauseContainer.onShow){
        //             this.pauseIcon.onClick();
        //             // this.pauseContainer.Show();
        //         }
        //         else{
        //             this.pauseContainer.Hide();
        //         }
        //     }
        //     else if(action == "up" || action == "down" || action == "left" || action == "right"){
        //         if(!this.pauseContainer.onShow){
        //             this.Select(action);
        //             // this.EnterAnswer();
        //         }
        //     }
        //     else if(action == "space"){
        //         if(!this.pauseContainer.onShow){
        //             this.EnterAnswer();
        //         }
        //     }
        // }.bind(this));
        this.startSelect = false;
        this.over = false;
        
        this.pauseContainer = me.pool.pull("PauseContainer", 0, 0, {
            container : this
        });
        me.game.world.addChild(this.pauseContainer, 100);
        
        this.bannerContainer = me.pool.pull("BannerContainer", 0, 0,{
            container : this
        });
        me.game.world.addChild(this.bannerContainer, 20);
        
        this.bg = me.pool.pull("BG_Ingame", 0, 0);
        me.game.world.addChild(this.bg, 1);
        
        this.board = me.pool.pull("HintBoard", 0, -675);
        me.game.world.addChild(this.board, 3);
        
        this.descTxt = game.font.rockford(me.game.world.width/2, me.game.viewport.width/2-200, {
            size : 3.5,
            text : "",
            textAlign : 'center',
            textBaseAlign : 'middle',
            lineHeight : 2
        });
        me.game.world.addChild(this.descTxt, 4);
        
        this.scenery = me.pool.pull("Scenery", 0, -700);
        me.game.world.addChild(this.scenery, 1);
        
        this.score = 0;
        this.scoreFrame = me.pool.pull("ScoreFrame", 0, -1100);
        me.game.world.addChild(this.scoreFrame, 7);
        
        this.scoreTxt = game.font.loja(me.game.world.width/2-90, me.game.viewport.width/2-505, {
            size : 5,
            text : "0",
            textAlign : 'left',
            textBaseAlign : 'middle'
        });
        me.game.world.addChild(this.scoreTxt, 8);
        
        this.btn = [];
        for(let i = 0; i < 4; i++){
            let btnPos, anim;
            if(i == 0){
                btnPos = {x : 0, y : 475}; anim = "a";
            }
            else if(i == 1){
                btnPos = {x : 0, y : 650}; anim = "b";
            }
            else if(i == 2){
                btnPos = {x : 0, y : 825}; anim = "c";
            }
            else if(i == 3){
                btnPos = {x : 0, y : 1000}; anim = "d";
            }
                
            let btn = me.pool.pull("BtnAnswer", btnPos.x, btnPos.y, {
                container : this
            });
            me.game.world.addChild(btn, 5);
            btn.setCurrentAnimation(anim);
            
            btn.highlight = me.pool.pull("BtnHighlight", btnPos.x, btnPos.y);
            me.game.world.addChild(btn.highlight, btn.pos.z + 1);
            
            btn.highlight.alpha = 0;
            
            btn.txt = game.font.rockford(btn.pos.x - 287, btn.pos.y - 36, {
                size : 5,
                text : "",
                textAlign : 'left',
                textBaseAlign : 'middle'
            });
            me.game.world.addChild(btn.txt, btn.pos.z + 2);
            
            btn.txtSmall = game.font.rockford(btn.pos.x - 287, btn.pos.y - 34, {
                size : 5,
                text : "",
                textAlign : 'left',
                textBaseAlign : 'middle'
            });
            me.game.world.addChild(btn.txtSmall, btn.pos.z + 2);
            this.btn.push(btn);
        }
        this.currentBtn = this.btn[0];
        
        this.timerBase = me.pool.pull("TimerBase", 0, 355);
        me.game.world.addChild(this.timerBase, 3);
        
        this.timerGreen = me.pool.pull("TimerGreen", 0, 355, {
            container : this
        });
        me.game.world.addChild(this.timerGreen, 4);
        
        this.food = [];
        this.plate = [];
        this.index = 0;
        
        for(let i = 0; i < 2; i++){
            let food = me.pool.pull("Food", 1100, -60);
            me.game.world.addChild(food, 6);
            
            let plate = me.pool.pull("Plate", 1100, 15);
            me.game.world.addChild(plate, 5);    
            this.plate.push(plate);
            this.food.push(food);
        }
        
        this.question = 0;
        this.questionList = [];
        for(let i in me.loader.getJSON("FoodInfo")){
            this.questionList.push(me.loader.getJSON("FoodInfo")[i]);
        }
        
        this.start = true;
        this.NextFood();
        //  End of user code  //
	},

	onDestroyEvent: function() {
        // Put user code here //
        me.audio.stop("bgm-gameplay");

        if(this.nextTimeout != undefined)
            clearTimeout(this.nextTimeout);
            
        if(this.tweenEnter != undefined)
            clearTimeout(this.tweenEnter);
            
        if(this.plateEnter != undefined)
            clearTimeout(this.plateEnter);
            
        if(this.tweenExit != undefined)
            clearTimeout(this.tweenExit);
            
        if(this.plateExit != undefined)
            clearTimeout(this.plateExit);
            
        if(this.event != undefined)
            me.event.unsubscribe(this.event);
        //  End of user code  //
	},

    // Put user code here //
    audioResumeFunc(){
        me.audio.play("bgm-gameplay", false, ()=>{this.audioResumeFunc()}, 0.4);
    },

    NextFood : function(){
        me.game.world.removeChild(this.timerGreen);
        if(this.combo >= 0 && this.combo < 5){
            TIME = 10000;
        } else if(this.combo >= 5 && this.combo < 10){
            TIME = 8000;
        } else if(this.combo >= 10 && this.combo < 15){
            TIME = 6000;
        } else if(this.combo >= 15 && this.combo < 20){
            TIME = 4000;
        } else if(this.combo >= 20 && this.combo < 25){
            TIME = 2000;
        }
        if(TIME <= 2000){
            TIME = 2000;
        }
        // TIME = 2000;
        // console.log(TIME);
        this.timerGreen = me.pool.pull("TimerGreen", 0, 355, {
            container : this
        });
        me.game.world.addChild(this.timerGreen, 4);
        
        this.question = Math.floor(Math.random() * this.questionList.length);
        
        this.index ++;
        if(this.index == 2)
            this.index = 0;
        
        //this.question = 16;
        this.food[this.index].setCurrentAnimation(this.questionList[this.question].id);
        this.food[this.index].pos.y = me.game.viewport.height/2-60 + OFFSET(this.questionList[this.question].id).y;  
        this.targetX = me.game.viewport.width / 2 + OFFSET(this.questionList[this.question].id).x;  
        
        this.tweenEnter = new me.Tween(this.food[this.index].pos).to({x : this.targetX}, 1000)
        .onComplete(()=>{
            this.SetBtn();
        });
        this.tweenEnter.start();
        
        this.plateEnter = new me.Tween(this.plate[this.index].pos).to({x : me.game.viewport.width / 2}, 1000)
        .onComplete(()=>{
            //this.SetBtn();
        });
        this.plateEnter.start();
        
        
        /*if(NO_PLATE.includes(this.questionList[this.question].id)){
            this.plate[this.index].alpha = 0;
        }
        else{
            this.plate[this.index].alpha = 1;
        }*/
    },
    
    SetBtn : function(){
        //this.timerGreen.tween.start();
        this.startSelect = true;
        let rand = Math.floor(Math.random() * 2);
        let hint = "", desc = "";
        if(rand == 0){
            hint = this.questionList[this.question].hint;
        }
        else{
            hint = this.questionList[this.question].hint2;
        }
        
        for(let i in hint){
            if(hint[i] != ";"){
                desc += hint[i];
            }
            else{
                desc += '\n';
            }
        }
        this.descTxt.setText(desc); 
        
        for(let i in this.btn){
            this.btn[i].highlight.setCurrentAnimation("select");
            this.btn[i].highlight.alpha = 0;
            this.btn[i].able = true;
        }
        
        
        this.rightAnswer = this.questionList[this.question].name;
        let answer = [];
        answer.push(this.questionList[this.question].name);
        while(answer.length < 4){
            let rand = Math.floor(Math.random() * this.questionList.length);
            if(!answer.includes(this.questionList[rand].name) && 
                this.questionList[rand].name != this.rightAnswer){
                answer.push(this.questionList[rand].name);
            }
        }
        
        let i = 0;
        for(let i in this.btn){
            let rand = Math.floor(Math.random() * answer.length);
            if(answer[rand].length > 14){
                this.btn[i].txtSmall.setText(answer[rand]);
                this.btn[i].txt.setText("");
            }
            else{
                this.btn[i].txtSmall.setText("");
                this.btn[i].txt.setText(answer[rand]);
            }
            
            this.btn[i].txtString = answer[rand];
            answer.splice(rand, 1);
        }
        
        this.timerGreen.currentTime = TIME;
        this.timerGreen.time = TIME;
        this.timerGreen.tween.start();
        
        let randBG = Math.floor(Math.random() * 2);
        if(rand == 0){
            hint = this.questionList[this.question].hint;
        }
        else{
            hint = this.questionList[this.question].hint2;
        }
        
        // this.Select();
    },
    
    ClickAnswer : function(btn){
        // if(btn.highlight.alpha == 0){
            for(let i in this.btn){
                if(!this.btn[i].highlight.isCurrentAnimation("wrong"))
                    this.btn[i].highlight.alpha = 0;
            }
            
            btn.highlight.alpha = 1;
            btn.highlight.setCurrentAnimation("select");
            
            this.currentBtn = btn;
        // }
        // else{
            for(let i in this.btn){
                this.btn[i].able = false;
            }
            
            this.lastBtn = btn;
            this.alphaInterval = setInterval(()=>{
                if(this.lastBtn.highlight.alpha == 0){
                    this.lastBtn.highlight.alpha = 1;
                }
                else{
                    this.lastBtn.highlight.alpha = 0;
                }
            }, 100);
            
            if(btn.txtString == this.rightAnswer){
                this.Right();
            }
            else{
                btn.highlight.setCurrentAnimation("wrong");
                this.Wrong();
            }
        // }
    },
    
    Right : function(){
        this.combo += 1;
        me.audio.play("sfx-benar");
        this.timerGreen.tween.stop();
        this.score += 10;
        this.scoreTxt.setText(this.score);
        this.lastBtn.highlight.setCurrentAnimation("correct");
        this.nextTimeout = setTimeout(()=> {
            clearInterval(this.alphaInterval);
            this.lastBtn.highlight.alpha = 1;
            this.lastFood = this.food[this.index];
            this.lastPlate = this.plate[this.index];
            this.tweenExit = new me.Tween(this.lastFood.pos).to({x : me.game.viewport.width / 2 - 1100}, 1000).onComplete(()=>{
                this.lastFood.pos.x = me.game.viewport.width / 2 + 1100;
            });
            this.tweenExit.start();
            
            this.plateExit = new me.Tween(this.lastPlate.pos).to({x : me.game.viewport.width / 2 - 1100}, 1000).onComplete(()=>{
                this.lastPlate.pos.x = me.game.viewport.width / 2 + 1100;
            });
            this.plateExit.start();
            
            this.NextFood();   
        }, 1000);
    },
    
    Wrong : function(){
        me.audio.play("sfx-salah gede");
        this.nextTimeout = setTimeout(()=> {
            clearInterval(this.alphaInterval);
            this.lastBtn.highlight.alpha = 1;
            
            for(let i in this.btn){
                this.btn[i].able = true;
            }  
        }, 1000);
    },
    
    Select : function(move){
        if(this.startSelect){
            this.startSelect = false;
            if(this.btn[0].highlight.alpha == 0){
                this.btn[0].onClick();
            }
        }else{
            if(move == "down"){
                if(this.btn[0].highlight.alpha == 1 && this.btn[1].highlight.alpha == 0 && this.btn[2].highlight.alpha == 0 && this.btn[3].highlight.alpha == 0){
                    this.btn[1].onClick();
                }
                if(this.btn[0].highlight.alpha == 0 && this.btn[1].highlight.alpha == 0 && this.btn[2].highlight.alpha == 1 && this.btn[3].highlight.alpha == 0){
                    this.btn[3].onClick();
                }
            }
            else if(move == "right"){
                if(this.btn[0].highlight.alpha == 1 && this.btn[1].highlight.alpha == 0 && this.btn[2].highlight.alpha == 0 && this.btn[3].highlight.alpha == 0){
                    this.btn[2].onClick();
                }
                if(this.btn[0].highlight.alpha == 0 && this.btn[1].highlight.alpha == 1 && this.btn[2].highlight.alpha == 0 && this.btn[3].highlight.alpha == 0){
                    this.btn[3].onClick();
                }
            }
            else if(move == "up"){
                if(this.btn[0].highlight.alpha == 0 && this.btn[1].highlight.alpha == 0 && this.btn[2].highlight.alpha == 0 && this.btn[3].highlight.alpha == 1){
                    this.btn[2].onClick();
                }
                if(this.btn[0].highlight.alpha == 0 && this.btn[1].highlight.alpha == 1 && this.btn[2].highlight.alpha == 0 && this.btn[3].highlight.alpha == 0){
                    this.btn[0].onClick();
                }
            }
            else if(move == "left"){
                if(this.btn[0].highlight.alpha == 0 && this.btn[1].highlight.alpha == 0 && this.btn[2].highlight.alpha == 0 && this.btn[3].highlight.alpha == 1){
                    this.btn[1].onClick();
                }
                if(this.btn[0].highlight.alpha == 0 && this.btn[1].highlight.alpha == 0 && this.btn[2].highlight.alpha == 1 && this.btn[3].highlight.alpha == 0){
                    this.btn[0].onClick();
                }
            }   
        }
    },
    
    EnterAnswer : function(){
        if(this.currentBtn.highlight.alpha == 1 && this.currentBtn.highlight.isCurrentAnimation("select"))
            this.currentBtn.onClick();
    },
    
    End : function(){
        if(!this.over){
            this.over = true;
            for(let i in this.btn){
                this.btn[i].able = false;
            }
            
            let time = 500;
            me.game.viewport.fadeIn("#000000", time);
             setTimeout(() =>{
                this.bannerContainer.Show();
            }, time);
            
            setTimeout(() =>{
                 for(let i in this.btn){
                    this.btn[i].able = false;
                }
                me.game.viewport.fadeOut("#000000", time);
            }, time);
        }
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();