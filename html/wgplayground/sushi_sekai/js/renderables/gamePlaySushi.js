import * as me from '../../dist/melonjs.module.js'
import game from '../game.js'


// Put user code here //
 
//  End of user code  //

export default class gamePlaySushi extends me.Sprite {
	constructor(x, y, settings = {}) {
		settings.image = settings.image || game.textureMap.get('image')
		settings.framewidth = settings.framewidth || 59;
		settings.frameheight = settings.frameheight || 63;
		settings.anchorPoint = {
			x: 0,
			y: 0
		};

        // Put user code here //
        settings.texture = "gamePlay";
		settings.image = game.textureMap.get(settings.texture);
		game.util.__populateAtlasIndices([
			"sushi0","sushi1","sushi2","sushi3","sushi4","sushi5","sushi6",
			"sushi0v","sushi1v","sushi2v","sushi3v","sushi4v","sushi5v","sushi6v",
			"sushi_bonus"
		], settings);
		settings.framewidth = settings.framewidth || 59;
		settings.frameheight = settings.frameheight || 63;
		settings.anchorPoint = {
			x: 0,
			y: 0
		};
        //  End of user code  //

		super(x, y, Object.assign(settings));
		delete settings.image;
		this.alpha = 0;
		this.floating = false;
		this.alwaysUpdate = false;
		this.updateWhenPaused = false;
		this.isPersistent = false;
		this.isKinematic = false;
		this._pointerDownHandler = me.input.registerPointerEvent("pointerdown", this, this.onClick.bind(this));
		this.var = {};

        // Put user code here //
        this.type = settings.type;
        this.gameOn = settings.gameOn;
        this.numberSushi;
        if(this.gameOn){
            this.numberSushi = settings.numberSushi;
            this.columnSushi = settings.columnSushi;
            this.rowSushi = settings.rowSushi;
            this.specialSushi = settings.specialSushi;
            this.bonusSushi = settings.bonusSushi;
        }else{
            this.numberSushi = 0;
        }
        
        this.addAnimation('0', [{ name: "sushi0", delay: 1 }]);
        this.addAnimation('1', [{ name: "sushi1", delay: 1 }]);
        this.addAnimation('2', [{ name: "sushi2", delay: 1 }]);
        this.addAnimation('3', [{ name: "sushi3", delay: 1 }]);
        this.addAnimation('4', [{ name: "sushi4", delay: 1 }]);
        this.addAnimation('5', [{ name: "sushi5", delay: 1 }]);
        this.addAnimation('6', [{ name: "sushi6", delay: 1 }]);
        this.addAnimation('0_special', [{ name: "sushi0v", delay: 1 }]);
        this.addAnimation('1_special', [{ name: "sushi1v", delay: 1 }]);
        this.addAnimation('2_special', [{ name: "sushi2v", delay: 1 }]);
        this.addAnimation('3_special', [{ name: "sushi3v", delay: 1 }]);
        this.addAnimation('4_special', [{ name: "sushi4v", delay: 1 }]);
        this.addAnimation('5_special', [{ name: "sushi5v", delay: 1 }]);
        this.addAnimation('6_special', [{ name: "sushi6v", delay: 1 }]);
        this.addAnimation('0_bonus', [{ name: "sushi_bonus", delay: 1 }]);
        this.addAnimation('1_bonus', [{ name: "sushi_bonus", delay: 1 }]);
        this.addAnimation('2_bonus', [{ name: "sushi_bonus", delay: 1 }]);
        this.addAnimation('3_bonus', [{ name: "sushi_bonus", delay: 1 }]);
        this.addAnimation('4_bonus', [{ name: "sushi_bonus", delay: 1 }]);
        this.addAnimation('5_bonus', [{ name: "sushi_bonus", delay: 1 }]);
        this.addAnimation('6_bonus', [{ name: "sushi_bonus", delay: 1 }]);
        if(this.specialSushi){
            this.setCurrentAnimation(this.type+"_special");
        }else if(this.bonusSushi){
            this.setCurrentAnimation(this.type+"_bonus");
        }else{
            this.setCurrentAnimation(this.type);
        }
            
        
        this.otherPosX;
        this.otherPosY;
        this.tweenSwap;
        this.tweenSwapState = false;
        this.repeat = 0;
        this.checkStep = 0;
        this.hitOther = false;
        //  End of user code  //
	}

	update (dt){
		var drawNextFrame = super.update(dt);
        // Put user code here //
        
        //  End of user code  //
		return drawNextFrame;
	}

	draw(renderer) {
		super.draw(renderer);
        // Put user code here //
        
        //  End of user code  //
	}

	onActivateEvent() {
        // Put user code here //
        
        //  End of user code  //
	}

	onDeactivateEvent() {

		me.input.releasePointerEvent("pointerdown", this, this._pointerDownHandler);
        // Put user code here //
        me.timer.clearTimeout(this.waitFunc);
        if(this.tweenSwapState){
            this.tweenSwap1.stop();
            this.tweenSwap2.stop();
        }
        //  End of user code  //
	}

	onClick(pointer) {
        // Put user code here //
        if(this.gameOn && me.state.current().clickSushi){
            me.state.current().sushiStage.resetSushiHintAnimFunc();
            me.state.current().sushiStage.timeHint = 0;
            me.state.current().clickSushi = false;
            
            if(me.state.current().powerUpRadishState){
                me.state.current().sushiStage.powerUpFunction(this.columnSushi, this.rowSushi, "radish", ()=>{
                    this.currentTransform.identity();
                    me.state.current().clickSushi = true;
                    me.state.current().powerUpClickState = true;
                    me.state.current().resetPowerUpFunc();
                    let oldValue = dataPlayer.powerUp.radish,
                        newValue = oldValue-1;
                    if(newValue <= 0){
                        dataPlayer.powerUp.radish = 0;
                    }else{
                        dataPlayer.powerUp.radish = newValue;
                    }
                    me.state.current().radishPu.countPu.textTarget.setText(dataPlayer.powerUp.radish);
                    localStorage.setItem("sushiSekai", JSON.stringify(dataPlayer));
                });
                //sound
                    me.audio.play("sfx_gamePlayPowerUp");
                //--
            }else if(me.state.current().powerUpMayoState){
                me.state.current().sushiStage.powerUpFunction(this.columnSushi, this.rowSushi, "mayo", ()=>{
                    this.currentTransform.identity();
                    me.state.current().clickSushi = true;
                    me.state.current().powerUpClickState = true;
                    me.state.current().resetPowerUpFunc();
                    let oldValue = dataPlayer.powerUp.mayo,
                        newValue = oldValue-1;
                    if(newValue <= 0){
                        dataPlayer.powerUp.mayo = 0;
                    }else{
                        dataPlayer.powerUp.mayo = newValue;
                    }
                    me.state.current().mayoPu.countPu.textTarget.setText(dataPlayer.powerUp.mayo);
                    localStorage.setItem("sushiSekai", JSON.stringify(dataPlayer));
                });
                //sound
                    me.audio.play("sfx_gamePlayPowerUp");
                //--
            }else if(me.state.current().powerUpSoySauceState){
                me.state.current().sushiStage.powerUpFunction(this.columnSushi, this.rowSushi, "soySauce", ()=>{
                    this.currentTransform.identity();
                    me.state.current().clickSushi = true;
                    me.state.current().powerUpClickState = true;
                    me.state.current().resetPowerUpFunc();
                    let oldValue = dataPlayer.powerUp.soySauce,
                        newValue = oldValue-1;
                    if(newValue <= 0){
                        dataPlayer.powerUp.soySauce = 0;
                    }else{
                        dataPlayer.powerUp.soySauce = newValue;
                    }
                    me.state.current().soySaucePu.countPu.textTarget.setText(dataPlayer.powerUp.soySauce);
                    localStorage.setItem("sushiSekai", JSON.stringify(dataPlayer));
                });
                //sound
                    me.audio.play("sfx_gamePlayPowerUp");
                //--
            }else{
                if(firstPressSushi){
                    firstPressSushi = false;
                    this.scale(1.2);
                    me.game.repaint();
                    this.otherPosX = this.pos.x;
                    this.otherPosY = this.pos.y;
                    this.tempSushi = this;
                    let hh = true;
                    this.waitFunc = me.timer.setTimeout(()=>{
                        if(hh){
                            hh = false;
                            this.checkPosFunc(()=>{
                                this.currentTransform.identity();
                                otherSushi.currentTransform.identity();
                                otherSushi = {};
                                me.state.current().clickSushi = true;
                            });
                        }
                    },200);
                }else{
                    firstPressSushi = true;
                    this.scale(1.2);
                    me.game.repaint();
                    this.otherPosX = this.pos.x;
                    this.otherPosY = this.pos.y;
                    otherSushi = this;
                    this.tempSushi = this;
                    me.timer.setTimeout(()=>{me.state.current().clickSushi = true}, 200);
                }
                
                //sound
                    me.audio.play("sfx_gamePlaySushiClick");
                //--
            }
        }
        return false;
        //  End of user code  //
	}

    // Put user code here //
    checkPosFunc(callback){
        if(this.rowSushi == otherSushi.rowSushi){
            if(this.columnSushi == otherSushi.columnSushi+1 || this.columnSushi == otherSushi.columnSushi-1){
                if(this.bonusSushi){
                    me.state.current().sushiStage.deleteAllBonusFunc(this, otherSushi.type);
                }else if(otherSushi.bonusSushi){
                    me.state.current().sushiStage.deleteAllBonusFunc(otherSushi, this.type);
                }else{
                    me.state.current().sushiStage.swapSushiFunc(this, otherSushi,()=>{
                        this.repeat = 0;
                        this.swapHorizontalFunc(true);
                    },()=>{
                        this.repeat = 1;
                        this.swapHorizontalFunc(false);
                    });
                }
            }else{
                callback();
            }
            //horizontal
        }else if(this.columnSushi == otherSushi.columnSushi){
            if(this.rowSushi == otherSushi.rowSushi+1 || this.rowSushi == otherSushi.rowSushi-1){
                if(this.bonusSushi){
                    me.state.current().sushiStage.deleteAllBonusFunc(this, otherSushi.type);
                }else if(otherSushi.bonusSushi){
                    me.state.current().sushiStage.deleteAllBonusFunc(otherSushi, this.type);
                }else{
                    me.state.current().sushiStage.swapSushiFunc(this, otherSushi,()=>{
                        this.repeat = 0;
                        this.swapVerticalFunc(true);
                    },()=>{
                        this.repeat = 1;
                        this.swapVerticalFunc(false);
                    });
                }
            }else{
                callback();
            }
            //vertical
        }else{
            callback();
        }
    }
    
    swapHorizontalFunc(correct){
        this.tweenSwapState = true;
        this.tweenSwap1 = new me.Tween(this.pos)
            .to({x:otherSushi.otherPosX}, 100)
            .easing(me.Tween.Easing.Linear.None)
            .repeat(this.repeat)
            .yoyo(true)
            .onComplete(()=>{
                this.currentTransform.identity();
                otherSushi.currentTransform.identity();
                otherSushi = {};
                if(correct){
                    me.state.current().sushiStage.deleteSushiFunc();
                }else{
                    me.state.current().clickSushi = true
                }
            });
        this.tweenSwap1.start();
        
        this.tweenSwap2 = new me.Tween(otherSushi.pos)
            .to({x:this.otherPosX}, 100)
            .easing(me.Tween.Easing.Linear.None)
            .repeat(this.repeat)
            .yoyo(true);
        this.tweenSwap2.start();
    }
    
    swapVerticalFunc(correct){
        this.tweenSwapState = true;
        this.tweenSwap1 = new me.Tween(this.pos)
            .to({y:otherSushi.otherPosY}, 100)
            .easing(me.Tween.Easing.Linear.None)
            .repeat(this.repeat)
            .yoyo(true)
            .onComplete(()=>{
                this.currentTransform.identity();
                otherSushi.currentTransform.identity();
                otherSushi = {};
                if(correct){
                    me.state.current().sushiStage.deleteSushiFunc();
                }else{
                    me.state.current().clickSushi = true
                }
            });
        this.tweenSwap1.start();
        
        this.tweenSwap2 = new me.Tween(otherSushi.pos)
            .to({y:this.otherPosY}, 100)
            .easing(me.Tween.Easing.Linear.None)
            .repeat(this.repeat)
            .yoyo(true);
        this.tweenSwap2.start();
    }
    
    changeSushiSpecialFunc(type){
        this.specialSushi = true;
        if(!this.isCurrentAnimation(type+"_special")){this.setCurrentAnimation(type+"_special")}
    }
    
    changeSushiBonusFunc(type){
        this.bonusSushi = true;
        if(!this.isCurrentAnimation(type+"_bonus")){this.setCurrentAnimation(type+"_bonus")}
    }
    //  End of user code  //
};

// Put user code here //
 
//  End of user code  //
