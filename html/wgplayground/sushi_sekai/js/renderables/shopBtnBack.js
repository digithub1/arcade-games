import * as me from '../../dist/melonjs.module.js'
import game from '../game.js'


// Put user code here //
 
//  End of user code  //

export default class shopBtnBack extends me.Sprite {
	constructor(x, y, settings = {}) {
		settings.image = settings.image || game.textureMap.get('image')
		settings.framewidth = settings.framewidth || 100;
		settings.frameheight = settings.frameheight || 110;
		settings.anchorPoint = {
			x: 0.5,
			y: 0.5
		};

        // Put user code here //
        settings.texture = "menu";
		settings.image = game.textureMap.get(settings.texture);
		game.util.__populateAtlasIndices([
			"back"
		], settings);
		settings.framewidth = settings.framewidth || 100;
		settings.frameheight = settings.frameheight || 110;
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
        
        //  End of user code  //
	}

	update (dt){
		var drawNextFrame = super.update(dt);
        // Put user code here //
        if(me.state.current().shopClickState == false && me.state.current().shopCloseState){
            this.tint.setColor(100, 100, 100);
            this.alpha = 0.8;
        }else{
            this.tint.setColor(255, 255, 255);
            this.alpha = 1;
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
            me.state.current().shopCloseState = false;
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
                    me.state.current().UIShopFunc();
                }
            }, 100);
        }
    }
    //  End of user code  //
};

// Put user code here //
 
//  End of user code  //
