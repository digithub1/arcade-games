import * as me from '../../dist/melonjs.module.js'
import game from '../game.js'


// Put user code here //
 
//  End of user code  //

export default class menuCredits extends me.Sprite {
	constructor(x, y, settings = {}) {
		settings.texture = "menu";
		settings.image = game.textureMap.get(settings.texture);
		game.util.__populateAtlasIndices([
			"menu-creditScreen"
		], settings);
		settings.framewidth = settings.framewidth || 516;
		settings.frameheight = settings.frameheight || 624;
		settings.anchorPoint = {
			x: 0.5,
			y: 0.5
		};

        // Put user code here //
        
        //  End of user code  //

		super(x, y, Object.assign(settings));
		delete settings.image;
		this.alpha = 1;
		this.floating = false;
		this.alwaysUpdate = false;
		this.updateWhenPaused = false;
		this.isPersistent = false;
		this.isKinematic = false;
		this._pointerDownHandler = me.input.registerPointerEvent("pointerdown", this, this.onClick.bind(this));
		this.var = {};

        // Put user code here //
        this.tweenOnState = false;
        this.tweenOffState = false;
        this.click = true;
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
        if(this.tweenOnState){
            this.tweenOn.stop();
        }
        if(this.tweenOffState){
            this.tweenOff.stop();
        }
        //  End of user code  //
	}

	onClick(pointer) {
        // Put user code here //
        if(this.click){
            this.click = false;
            this.tweenOffFunc(me.state.current().blackLayer);
            //sound
                me.audio.play("sfx_button");
            //--
        }
        return false;
        //  End of user code  //
	}

    // Put user code here //
    tweenOnFunc(objLayer){
        me.state.current().shopUiClick = false;
        this.tweenOnState = true;
        this.tweenOn = new me.Tween(this.pos)
            .to({y:me.game.world.height/2}, 500)
            .easing(me.Tween.Easing.Linear.None).onComplete(()=>{
                this.tweenOnState = false;
                objLayer.alpha = 0.8;
                objLayer.pos.y = me.game.world.height/2;
            });
        this.tweenOn.start();
    }
    
    tweenOffFunc(objLayer){
        objLayer.alpha = 0;
        objLayer.pos.y = me.game.world.height+me.game.world.height/2;
        this.tweenOffState = true;
        this.tweenOff = new me.Tween(this.pos)
            .to({y:me.game.world.height+me.game.world.height/2}, 300)
            .easing(me.Tween.Easing.Linear.None).onComplete(()=>{
                me.state.current().shopUiClick = true;
                this.click = true;
                this.tweenOffState = false;
            });
        this.tweenOff.start();
    }
    //  End of user code  //
};

// Put user code here //
 
//  End of user code  //
