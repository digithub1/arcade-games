import * as me from '../../dist/melonjs.module.js'
import game from '../game.js'


// Put user code here //
 
//  End of user code  //

export default class tuttorBtn extends me.Sprite {
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
			"button-next"
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
		this.alwaysUpdate = false;
		this.updateWhenPaused = false;
		this.isPersistent = false;
		this.isKinematic = false;
		this._pointerDownHandler = me.input.registerPointerEvent("pointerdown", this, this.onClick.bind(this));
		this.var = {};

        // Put user code here //
        this.type = settings.type;
        if(this.type == 0){
            this.flipX(true);
            if(me.state.current().noTuttor == 0){
                this.alpha = 0;
            }
        }else{
            this.flipX(false);
        }
        this.click = true;
        //  End of user code  //
	}

	update (dt){
		var drawNextFrame = super.update(dt);
        // Put user code here //
        if(this.type == 0){
            if(me.state.current().noTuttor == 0){
                this.alpha = 0;
            }else{
                this.alpha = 1;
            }
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
        if(this.click){
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
        if(this.click){
            this.click = false;
            this.currentTransform.identity();
            me.game.repaint();
            
            let once = true;
            me.timer.setTimeout(()=>{
                if(once){
                    once = false;
                    if(this.type == 0){
                        me.state.current().tuttorNextPageFunc(false);
                    }else{
                        me.state.current().tuttorNextPageFunc(true);
                    }
                }
            }, 100);
            me.timer.setTimeout(()=>{
                this.click = true;
            }, 500);
        }
    }
    //  End of user code  //
};

// Put user code here //
 
//  End of user code  //
