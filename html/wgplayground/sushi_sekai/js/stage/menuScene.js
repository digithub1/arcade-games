import * as me from '../../dist/melonjs.module.js'
import game from '../game.js'
import wgPlayFunc from '../../wgPlay.js'

// Put user code here //
 
//  End of user code  //

export default class menuScene extends me.Stage {
	onResetEvent() {
        // Put user code here //
        
        //  End of user code  //
		me.level.load("menuScene");
		this.var = {};
        // Put user code here //        
        var image = me.loader.getImage('petals');
        var emitter = new me.ParticleEmitter(0, 0, {
            image: image,
            width: 1320,
            height: 760,
            totalParticles: 50,
            angle: 4,
            maxLife: 2000,
            speed: 0.8,
            speedVariation: 0,
            minRotation: -2.35763558773986,
            maxRotation: 3.14159265358979,
            minStartScale: 0.8,
            maxStartScale: 0.8,
            minEndScale: 0.8,
            maxEndScale: 0.8,
            wind: 0.035,
            maxParticles: 50,
            floating: true
        });
        
        me.game.world.addChild(emitter, 4);
        emitter.streamParticles();
        
        //Data
            this.money = dataPlayer.coin;
        //--
        
        //credits
            this.blackLayer = me.game.world.getChildByName("menuBlackLayer")[0];
            this.creditsBoard = me.game.world.getChildByName("menuCredits")[0];
        //--
            
        
        //Shop Obj
            this.listShopObj = [];
            this.shopClickState = true;
            this.shopCloseState = true;
            this.shopUI = me.game.world.getChildByName("shopUIMoney")[0];
            this.shopBtnBack = me.game.world.getChildByName("shopBtnBack")[0];
            this.shopBtnItem = me.game.world.getChildByName("shopBtn");
            this.shopText = new me.BitmapText(this.shopUI.pos.x+100, this.shopUI.pos.y-40, {
                font:"font-blue-kecil",
                text:dataPlayer.coin,
                size: 0.6,
                fillStyle: "yellow"
            });
            this.shopText.floating = true;
            me.game.world.addChild(this.shopText, this.shopUI.pos._z+1);
            this.listShopObj.push(this.shopUI);
            this.listShopObj.push(this.shopBtnBack);
            for(let i in this.shopBtnItem){
                this.listShopObj.push(this.shopBtnItem[i]);
                this.listShopObj.push(this.shopBtnItem[i].priceText);
            }
            this.listShopObj.push(this.shopText);
            
            this.shopUiState = false;
            this.shopUiClick = true;
            this.shopTween = [];
            this.shopTweenState = false;
        //--
        
        
        //Shop Banner
            this.priceItem = 0;
            this.bannerObjList = [];
            this.bannerObjTween = [];
            this.bannerNotifNoGold = me.game.world.getChildByName("shopBannerNoGold")[0];
            this.bannerNotifNoAds = me.game.world.getChildByName("shopBannerNoAds")[0];
            this.bannerText = me.game.world.getChildByName("shopBannerText")[0];
            this.bannerItem = me.game.world.getChildByName("shopBannerItem")[0];
            this.bannerBtn = me.game.world.getChildByName("shopBannerBtn");
            this.bannerObjList.push(this.bannerText);
            this.bannerObjList.push(this.bannerItem);
            for(let i in this.bannerBtn){
                this.bannerObjList.push(this.bannerBtn[i]);
            }
        //--
        
        
        //tuttorialPage
            this.noTuttor = 0;
            this.listTuttorObj = [];
            this.tuttorImg = me.game.world.getChildByName("tuttorImage")[0];
            this.tuttorBtn = me.game.world.getChildByName("tuttorBtn");
            
            this.listTuttorObj.push(this.tuttorImg);
            for(let i in this.tuttorBtn){
                this.listTuttorObj.push(this.tuttorBtn[i]);
            }
        //--
        
        //sound
            this.audioFunc();
            
            if(dataPlayer.bgm){
                me.audio.unmute("bgm_gamePlay");
                me.audio.unmute("bgm_mainMenu");
            }else{
                me.audio.mute("bgm_gamePlay");
                me.audio.mute("bgm_mainMenu");
            }
            
            if(dataPlayer.sfx){
                me.audio.unmute("sfx_button");
                me.audio.unmute("sfx_gamePlayBeauty");
                me.audio.unmute("sfx_gamePlayFox");
                me.audio.unmute("sfx_gamePlayLose");
                me.audio.unmute("sfx_gamePlayNeko");
                me.audio.unmute("sfx_gamePlayPowerUp");
                me.audio.unmute("sfx_gamePlaySushiClick");
                me.audio.unmute("sfx_gamePlaySushiCorrect");
                me.audio.unmute("sfx_gamePlayTimeTicking");
                me.audio.unmute("sfx_mainMenuPurchase");
            }else{
                me.audio.mute("sfx_button");
                me.audio.mute("sfx_gamePlayBeauty");
                me.audio.mute("sfx_gamePlayFox");
                me.audio.mute("sfx_gamePlayLose");
                me.audio.mute("sfx_gamePlayNeko");
                me.audio.mute("sfx_gamePlayPowerUp");
                me.audio.mute("sfx_gamePlaySushiClick");
                me.audio.mute("sfx_gamePlaySushiCorrect");
                me.audio.mute("sfx_gamePlayTimeTicking");
                me.audio.mute("sfx_mainMenuPurchase");
            }
        //--

        this.showAdsOnce = true;
        //  End of user code  //
	}

	onDestroyEvent() {
        // Put user code here //
        if(this.shopTweenState){
            for(let i in this.listShopObj){
                this.shopTween[i].stop();
            }
        }
        
        me.audio.stop("bgm_mainMenu");
        //  End of user code  //
	}

    // Put user code here //
    audioFunc(){
        me.audio.play("bgm_mainMenu", false, ()=>{
            this.audioFunc();
        }, 1);
    }
    
    UIShopFunc(){
        if(this.shopUiClick){
            this.shopUiClick = false;
                
            if(this.shopUiState){
                this.shopUiState = false;
                
                this.shopTweenState = true;
                this.blackLayer.alpha = 0;
                this.blackLayer.pos.y = me.game.world.height+me.game.world.height/2;

                for(let i in this.listShopObj){
                    this.shopTween[i] = new me.Tween(this.listShopObj[i].pos)
                        .to({y:this.listShopObj[i].pos.y + me.game.viewport.height}, 500)
                        .easing(me.Tween.Easing.Linear.None).onComplete(()=>{
                            this.shopTweenState = false;
                            this.shopUiClick = true
                            this.shopClickState = true;
                            this.shopCloseState = true;
                        });
                    this.shopTween[i].start();
                }
            }else{
                this.shopUiState = true;
                
                this.shopTweenState = true;
                for(let i in this.listShopObj){
                    this.shopTween[i] = new me.Tween(this.listShopObj[i].pos)
                        .to({y:this.listShopObj[i].pos.y - me.game.viewport.height}, 500)
                        .easing(me.Tween.Easing.Linear.None).onComplete(()=>{
                            this.shopTweenState = false;
                            this.blackLayer.alpha = 0.8;
                            this.blackLayer.pos.y = me.game.viewport.height/2;
                            this.shopUiClick = true
                        });
                    this.shopTween[i].start();
                }
            }
        }
    }
    
    shopCheckMoneyFunc(price, type){
        this.shopClickState = false;
        this.shopCloseState = true;
        
        if(this.money >= price){
            this.priceItem = price;
            this.nameItem = type;
            this.shopBannerOnFunc(type);
        }else{
            this.bannerNotifNoGold.showFunc();
        }
    }
    
    shopBannerOnFunc(type){
        this.bannerItem.showFunc(type);
        for(let i in this.bannerObjList){
            this.bannerObjTween[i] = new me.Tween(this.bannerObjList[i].pos)
                .to({y:this.bannerObjList[i].pos.y - me.game.viewport.height}, 500)
                .easing(me.Tween.Easing.Linear.None);
            this.bannerObjTween[i].start();
        }
    }
    
    shopBannerOffFunc(){
        for(let i in this.bannerObjList){
            this.bannerObjTween[i] = new me.Tween(this.bannerObjList[i].pos)
                .to({y:this.bannerObjList[i].pos.y + me.game.viewport.height}, 500)
                .easing(me.Tween.Easing.Linear.None).onComplete(()=>{
                    this.shopClickState = true;
                    this.shopCloseState = false;
                    
                    this.shopText.setText(this.money);
                });
            this.bannerObjTween[i].start();
        }
    }
    
    shopBannerCalculateItem(){
        this.money -= this.priceItem;
        dataPlayer.coin = this.money;
        dataPlayer.powerUp[this.nameItem] += 1;
        if(dataPlayer.powerUp[this.nameItem] >= 99){
            dataPlayer.powerUp[this.nameItem] = 99;
        }
        
        localStorage.setItem("sushiSekai", JSON.stringify(dataPlayer));
        this.money = dataPlayer.coin;
        
        this.shopBannerOffFunc();
    }
    
    tuttorOnFunc(){
        for(let i in this.listTuttorObj){
            this.listTuttorObj[i].pos.y -= me.game.viewport.height;
        }
    }
    
    tuttorNextPageFunc(direction){
        if(direction){
            this.noTuttor += 1;
            if(this.noTuttor > 3){
                me.game.viewport.fadeIn("#000000", 1000,()=>{
                    me.state.change("gamePlayScene");
                });
            }
        }else{
            this.noTuttor -= 1;
            if(this.noTuttor <= 0){
                this.noTuttor = 0;
            }
        }
        
        if(this.noTuttor <= 3){
            if(!this.tuttorImg.isCurrentAnimation(this.noTuttor)){this.tuttorImg.setCurrentAnimation(this.noTuttor)}
        }
    }
    
    showAdsFunc(){
        this.showAdsOnce = false;
        wgPlayFunc.showAdsRunOnce = true;
        wgPlayFunc.showAdsReady = true;
        wgPlayFunc.showAdsSuccess = true;
        wgPlayFunc.showAdsFail = true;
        me.audio.muteAll();
        if(webAds){
            let chance = Math.random();
            if(chance < 0.4){
                this.ads = me.pool.pull("shopAds", 660, 380);
                me.game.world.addChild(this.ads, 50);
            }else{
                this.bannerNotifNoAds.showFunc(()=>{me.audio.unmuteAll()});
            }
        }else{
            me.state.resume(false);
            me.state.pause(true);

            wgPlayFunc.adShowReward(()=>{
                wgPlayFunc.rewardReady();
            },()=>{
                wgPlayFunc.rewardSuccess(()=>{
                    this.adsCallbackFunc(()=>{
                        me.state.pause(false);
                        me.state.resume(true);
                        me.audio.unmuteAll();
                    });
                });
            },()=>{
                wgPlayFunc.rewardFail(()=>{
                    this.bannerNotifNoAds.showFunc(()=>{
                        me.state.pause(false);
                        me.state.resume(true);
                        me.audio.unmuteAll();
                    });
                });
            });
        }
    }
    
    adsCallbackFunc(callback){
        //sound
            me.audio.play("sfx_mainMenuPurchase");
        //--
        this.shopClickState = false;
        this.shopCloseState = true;
        let oldValue = dataPlayer.coin,
            newValue = oldValue+50,
            newValueString = JSON.stringify(newValue),
            timeCalculate = 0,
            manyTimes = 0,
            textNumber = 0;
        dataPlayer.coin = newValue;
        localStorage.setItem("sushiSekai", JSON.stringify(dataPlayer));
        this.money = dataPlayer.coin;
        
        this.calculateInterval = me.timer.setInterval(()=>{
            textNumber += 1;
            if(textNumber >= 9){
                textNumber = 0;
            }
            timeCalculate += 1;
            if(timeCalculate >= 10){
                timeCalculate = 0;
                manyTimes += 1;
            }
            
            if(manyTimes == 0){
                if(newValueString.length >= 2 && newValueString.length < 3){
                    this.shopText.setText(textNumber+""+textNumber);
                }else if(newValueString.length >= 3 && newValueString.length < 4){
                    this.shopText.setText(textNumber+""+textNumber+""+textNumber);
                }else if(newValueString.length >= 4 && newValueString.length < 5){
                    this.shopText.setText(textNumber+""+textNumber+""+textNumber+""+textNumber);
                }else if(newValueString.length >= 5 && newValueString.length < 6){
                    this.shopText.setText(textNumber+""+textNumber+""+textNumber+""+textNumber+""+textNumber);
                }else if(newValueString.length >= 6 && newValueString.length < 7){
                    this.shopText.setText(textNumber+""+textNumber+""+textNumber+""+textNumber+""+textNumber+""+textNumber);
                }
            }else if(manyTimes == 1){
                    
                if(newValueString.length >= 2 && newValueString.length < 3){
                    this.shopText.setText(newValueString[0]+""+textNumber);
                }else if(newValueString.length >= 3 && newValueString.length < 4){
                    this.shopText.setText(newValueString[0]+""+textNumber+""+textNumber);
                }else if(newValueString.length >= 4 && newValueString.length < 5){
                    this.shopText.setText(newValueString[0]+""+textNumber+""+textNumber+""+textNumber);
                }else if(newValueString.length >= 5 && newValueString.length < 6){
                    this.shopText.setText(newValueString[0]+""+textNumber+""+textNumber+""+textNumber+""+textNumber);
                }else if(newValueString.length >= 6 && newValueString.length < 7){
                    this.shopText.setText(newValueString[0]+""+textNumber+""+textNumber+""+textNumber+""+textNumber+""+textNumber);
                }
            }else if(manyTimes == 2){
                if(newValueString.length >= 2 && newValueString.length < 3){
                    this.shopText.setText(newValueString[0]+""+newValueString[1]);
                    timeCalculate = 0;
                    manyTimes = 0;
                    textNumber = 0;
                    this.shopClickState = true;
                    this.shopCloseState = false;
                    me.timer.clearInterval(this.calculateInterval);
                    callback();
                }else if(newValueString.length >= 3 && newValueString.length < 4){
                    this.shopText.setText(newValueString[0]+""+newValueString[1]+""+textNumber);
                }else if(newValueString.length >= 4 && newValueString.length < 5){
                    this.shopText.setText(newValueString[0]+""+newValueString[1]+""+textNumber+""+textNumber);
                }else if(newValueString.length >= 5 && newValueString.length < 6){
                    this.shopText.setText(newValueString[0]+""+newValueString[1]+""+textNumber+""+textNumber+""+textNumber);
                }else if(newValueString.length >= 6 && newValueString.length < 7){
                    this.shopText.setText(newValueString[0]+""+newValueString[1]+""+textNumber+""+textNumber+""+textNumber+""+textNumber);
                }
            }else if(manyTimes == 3){
                if(newValueString.length >= 3 && newValueString.length < 4){
                    this.shopText.setText(newValueString[0]+""+newValueString[1]+""+newValueString[2]);
                    timeCalculate = 0;
                    manyTimes = 0;
                    textNumber = 0;
                    this.shopClickState = true;
                    this.shopCloseState = false;
                    me.timer.clearInterval(this.calculateInterval);
                    callback();
                }else if(newValueString.length >= 4 && newValueString.length < 5){
                    this.shopText.setText(newValueString[0]+""+newValueString[1]+""+newValueString[2]+""+textNumber);
                }else if(newValueString.length >= 5 && newValueString.length < 6){
                    this.shopText.setText(newValueString[0]+""+newValueString[1]+""+newValueString[2]+""+textNumber+""+textNumber);
                }else if(newValueString.length >= 6 && newValueString.length < 7){
                    this.shopText.setText(newValueString[0]+""+newValueString[1]+""+newValueString[2]+""+textNumber+""+textNumber+""+textNumber);
                }
            }else if(manyTimes == 4){
                if(newValueString.length >= 4 && newValueString.length < 5){
                    this.shopText.setText(newValueString[0]+""+newValueString[1]+""+newValueString[2]+""+newValueString[3]);
                    timeCalculate = 0;
                    manyTimes = 0;
                    textNumber = 0;
                    this.shopClickState = true;
                    this.shopCloseState = false;
                    me.timer.clearInterval(this.calculateInterval);
                    callback();
                }else if(newValueString.length >= 5 && newValueString.length < 6){
                    this.shopText.setText(newValueString[0]+""+newValueString[1]+""+newValueString[2]+""+newValueString[3]+""+textNumber);
                }else if(newValueString.length >= 6 && newValueString.length < 7){
                    this.shopText.setText(newValueString[0]+""+newValueString[1]+""+newValueString[2]+""+newValueString[3]+""+textNumber+""+textNumber);
                }
            }else if(manyTimes == 5){
                if(newValueString.length >= 5 && newValueString.length < 6){
                    this.shopText.setText(newValueString[0]+""+newValueString[1]+""+newValueString[2]+""+newValueString[3]+""+newValueString[4]);
                    timeCalculate = 0;
                    manyTimes = 0;
                    textNumber = 0;
                    this.shopClickState = true;
                    this.shopCloseState = false;
                    me.timer.clearInterval(this.calculateInterval);
                    callback();
                }else if(newValueString.length >= 6 && newValueString.length < 7){
                    this.shopText.setText(newValueString[0]+""+newValueString[1]+""+newValueString[2]+""+newValueString[3]+""+newValueString[4]+""+textNumber);
                }
            }else if(manyTimes == 6){
                if(newValueString.length >= 6 && newValueString.length < 7){
                    this.shopText.setText(newValueString[0]+""+newValueString[1]+""+newValueString[2]+""+newValueString[3]+""+newValueString[4]+""+newValueString[5]);
                    timeCalculate = 0;
                    manyTimes = 0;
                    textNumber = 0;
                    this.shopClickState = true;
                    this.shopCloseState = false;
                    me.timer.clearInterval(this.calculateInterval);
                    callback();
                }
            }
        }, 50);
    }
    //  End of user code  //
};

// Put user code here //
 
//  End of user code  //
