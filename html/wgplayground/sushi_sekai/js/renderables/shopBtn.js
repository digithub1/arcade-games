import * as me from '../../dist/melonjs.module.js'
import game from '../game.js'


// Put user code here //
 
//  End of user code  //

export default class shopBtn extends me.Sprite {
	constructor(x, y, settings = {}) {
		settings.image = settings.image || game.textureMap.get('image')
		settings.framewidth = settings.framewidth || 207;
		settings.frameheight = settings.frameheight || 339;
		settings.anchorPoint = {
			x: 0.5,
			y: 0.5
		};

        // Put user code here //
        settings.texture = "menu";
		settings.image = game.textureMap.get(settings.texture);
		game.util.__populateAtlasIndices([
			"shopItem_0","shopItem_1","shopItem_2","shopItem_3","shopItem_4"
		], settings);
		settings.framewidth = settings.framewidth || 207;
		settings.frameheight = settings.frameheight || 339;
		settings.anchorPoint = {
			x: 0.5,
			y: 0.5
		};
        //  End of user code  //

		super(x, y, Object.assign(settings));
		delete settings.image;
		this.alpha = 1;
		this.floating = false;
		this.alwaysUpdate = true;
		this.updateWhenPaused = false;
		this.isPersistent = false;
		this.isKinematic = false;
		this._pointerDownHandler = me.input.registerPointerEvent("pointerdown", this, this.onClick.bind(this));
		this.var = {};

        // Put user code here //
        this.type = settings.type;
        this.addAnimation('0', [{ name: "shopItem_0", delay: 1 }]);
        this.addAnimation('1', [{ name: "shopItem_1", delay: 1 }]);
        this.addAnimation('2', [{ name: "shopItem_2", delay: 1 }]);
        this.addAnimation('3', [{ name: "shopItem_3", delay: 1 }]);
        this.addAnimation('4', [{ name: "shopItem_4", delay: 1 }]);
        this.setCurrentAnimation(this.type);
        this.nameItem;
        this.price;
        
        if(this.type == 0){
            this.nameItem = "ginger";
            this.price = 425;
        }else if(this.type == 1){
            this.nameItem = "radish";
            this.price = 400;
        }else if(this.type == 2){
            this.nameItem = "mayo";
            this.price = 375;
        }else if(this.type == 3){
            this.nameItem = "soySauce";
            this.price = 350;
        }else if(this.type == 4){
            this.nameItem = "ads";
        }
        
        this.priceText = new me.BitmapText(this.pos.x-this.width/4, this.pos.y+this.height/4, {
            font:"font-blue-kecil",
            text:this.price,
            size: 0.6,
            fillStyle: "yellow"
        });
        this.priceText.floating = true;
        me.game.world.addChild(this.priceText, this.pos._z+1);
        //  End of user code  //
	}

	update (dt){
		var drawNextFrame = super.update(dt);
        // Put user code here //
        if(me.state.current().shopClickState == false && me.state.current().shopCloseState){
            this.tint.setColor(100, 100, 100);
            this.alpha = 0.8;
            this.priceText.tint.setColor(100, 100, 0);
            this.priceText.alpha = 0.8;
        }else{
            this.tint.setColor(255, 255, 255);
            this.alpha = 1;
            this.priceText.tint.setColor(255, 255, 0);
            this.priceText.alpha = 1;
        }
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
        
        //  End of user code  //
	}

	onClick(pointer) {
        // Put user code here //
        if(me.state.current().shopClickState){
            this.currentTransform.translate(this.pos.x, this.pos.x);
            this.currentTransform.scale(1, 0.99);
            this.currentTransform.translate(-this.pos.x, -this.pos.x);
            me.game.repaint();
            //sound
                me.audio.play("sfx_button");
            //--
            let once = true;
            me.timer.setTimeout(()=>{
                if(once){
                    once = false;
                    this.onRelease();
                }
            }, 100);
        }
        return false;
        //  End of user code  //
	}

    // Put user code here //
    onRelease(){
        if(me.state.current().shopClickState){
            me.state.current().shopClickState = false;
            this.currentTransform.identity();
            me.game.repaint();
            
            let once = true;
            me.timer.setTimeout(()=>{
                if(once){
                    once = false;
                    if(this.nameItem == "ads"){
                        if(me.state.current().showAdsOnce){
                            me.state.current().showAdsFunc();                            
                        }else{
                            me.state.current().bannerNotifNoAds.showFunc(()=>{me.audio.unmuteAll()});
                        }

                        me.state.current().shopClickState = false;
                        me.state.current().shopCloseState = true;   
                    }else{
                        me.state.current().shopCheckMoneyFunc(this.price, this.nameItem);
                    }
                }
            }, 100);
            // me.timer.setTimeout(()=>{
            //     this.click = true;
            // }, 1000);
        }
    }
    //  End of user code  //
};

// Put user code here //
 
//  End of user code  //
