import * as me from '../../dist/melonjs.module.js'
import game from '../game.js'

// Put user code here //
 
//  End of user code  //

export default class gamePlayScene extends me.Stage {
	onResetEvent() {
        // Put user code here //
        
        //  End of user code  //
		me.level.load("gamePlayScene");
		this.var = {};
        // Put user code here //
        gamePlayStateOn = true;
        
        this.blackLayer = me.game.world.getChildByName("gamePlayPauseBlackPanel")[0];
        this.sushiStage = me.game.world.getChildByName("gamePlaySushiSpawnerStage")[0];
        this.gameTimer = me.game.world.getChildByName("gamePlayTimer")[0];
        this.targetSushi1 = me.game.world.getChildByName("gamePlayCharSpawner")[0];
        this.targetSushi2 = me.game.world.getChildByName("gamePlayCharSpawner")[1];
        
        //pausePanel
            this.pauseObjList = [];
            this.pauseTween = [];
            this.pauseBackground = me.game.world.getChildByName("gamePlayPause")[0];
            this.pauseBtnAudio = me.game.world.getChildByName("gamePlayPauseBtnOnOff");
            this.pauseBtn = me.game.world.getChildByName("gamePlayPauseBtn");
            this.pauseObjList.push(this.pauseBackground);
            for(let i in this.pauseBtnAudio){
                this.pauseObjList.push(this.pauseBtnAudio[i]);
            }
            for(let k in this.pauseBtn){
                this.pauseObjList.push(this.pauseBtn[k]);
            }
            
            this.pauseState = false;
        //--
        
        this.clickSushi = true;
        
        score = 0;
        this.scoreText = new me.BitmapText(1090, 327, {
            font:"font-blue-kecil",
            text:score,
            size: 0.6
        });
        this.scoreText.floating = true;
        me.game.world.addChild(this.scoreText, 6);
        
        //powerUp
            this.powerUpClickState = true;
            this.gingerPu = me.pool.pull("gamePlayPowerUp", 1043, 495, {type:0});
            this.radishPu = me.pool.pull("gamePlayPowerUp", 1198, 495, {type:1});
            this.mayoPu = me.pool.pull("gamePlayPowerUp", 1043, 620, {type:2});
            this.soySaucePu = me.pool.pull("gamePlayPowerUp", 1198, 620, {type:3});
            me.game.world.addChild(this.gingerPu, this.blackLayer.pos._z-3);
            me.game.world.addChild(this.radishPu, this.blackLayer.pos._z-3);
            me.game.world.addChild(this.mayoPu, this.blackLayer.pos._z-3);
            me.game.world.addChild(this.soySaucePu, this.blackLayer.pos._z-3);
            
            this.resetPowerUpFunc();
        //--
        
        this.onceRunGameOver = true;
        
        //sound
            this.audioFunc();
        //--
        //  End of user code  //
	}

	onDestroyEvent() {
        // Put user code here //
        me.audio.stop("bgm_gamePlay");
        //  End of user code  //
	}

    // Put user code here //
    audioFunc(){
        me.audio.play("bgm_gamePlay", false, ()=>{
            this.audioFunc();
        }, 1);
    }
    
    resetPowerUpFunc(){
        this.powerUpGingerState = false;
        this.powerUpRadishState = false;
        this.powerUpMayoState = false;
        this.powerUpSoySauceState = false;
    }
    
    pauseOnFunc(){
        for(let i in this.pauseObjList){
            this.pauseTween[i] = new me.Tween(this.pauseObjList[i].pos)
                .to({y:this.pauseObjList[i].pos.y - me.game.viewport.height}, 500)
                .easing(me.Tween.Easing.Linear.None).onComplete(()=>{
                    this.blackLayer.alpha = 0.8;
                    this.blackLayer.pos.y = me.game.viewport.height/2;
                    gamePlayPauseState = true;
                });
            this.pauseTween[i].start();
        }
    }
    
    pauseOffFunc(){
        this.blackLayer.alpha = 0;
        this.blackLayer.pos.y = me.game.world.height+me.game.world.height/2;
        
        for(let i in this.pauseObjList){
            this.pauseTween[i] = new me.Tween(this.pauseObjList[i].pos)
                .to({y:this.pauseObjList[i].pos.y + me.game.viewport.height}, 500)
                .easing(me.Tween.Easing.Linear.None).onComplete(()=>{
                    gamePlayPauseState = false;
                });
            this.pauseTween[i].start();
        }
    }
    
    gameOverFunc(){
        if(this.onceRunGameOver){
            //sound
                me.audio.stop("bgm_gamePlay");
                me.audio.play("sfx_gamePlayLose");
            //--
            this.clickSushi = true;
            this.onceRunGameOver = false;
            let oldCoin = dataPlayer.coin,
                newCoin = oldCoin+score;
                
            dataPlayer.coin = newCoin;
            localStorage.setItem("sushiSekai", JSON.stringify(dataPlayer));
            
            this.blackLayer.pos.y = me.game.viewport.height/2;
            
            this.gameOverPanel = me.pool.pull("gameOverPanel", 0, -50);
            this.gameOverChar = me.pool.pull("gameOverCryChar", -250, -50);
            this.gameOverBtnRestart = me.pool.pull("gameOverBtnRestart", -100, 200);
            this.gameOverBtnHome = me.pool.pull("gameOverBtnHome", 100, 200);
            me.game.world.addChild(this.gameOverPanel, this.blackLayer.pos._z+1);
            me.game.world.addChild(this.gameOverChar, this.blackLayer.pos._z+2);
            me.game.world.addChild(this.gameOverBtnRestart, this.blackLayer.pos._z+1);
            me.game.world.addChild(this.gameOverBtnHome, this.blackLayer.pos._z+1);
            
            this.gameOverScoreText = new me.BitmapText(me.game.viewport.width/2-130, me.game.viewport.height/2-105, {
                font:"font-blue-kecil",
                text:"Score: "+score,
                size: 0.4
            });
            this.gameOverScoreText.floating = true;
            me.game.world.addChild(this.gameOverScoreText, this.blackLayer.pos._z+2);
            
            this.gameOverCoinText = new me.BitmapText(me.game.viewport.width/2-130, me.game.viewport.height/2+5, {
                font:"font-blue-kecil",
                text:"Coin: "+dataPlayer.coin,
                size: 0.4,
                fillStyle: "yellow"
            });
            this.gameOverCoinText.floating = true;
            me.game.world.addChild(this.gameOverCoinText, this.blackLayer.pos._z+2);
        }
    }
    //  End of user code  //
};

// Put user code here //
 
//  End of user code  //
