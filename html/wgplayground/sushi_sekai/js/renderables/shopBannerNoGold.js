import * as me from '../../dist/melonjs.module.js'
import game from '../game.js'


// Put user code here //
 
//  End of user code  //

export default class shopBannerNoGold extends me.Sprite {
	constructor(x, y, settings = {}) {
		settings.image = settings.image || game.textureMap.get('image')
		settings.framewidth = settings.framewidth || 457;
		settings.frameheight = settings.frameheight || 200;
		settings.anchorPoint = {
			x: 0.5,
			y: 0.5
		};

        // Put user code here //
        settings.texture = "menu";
		settings.image = game.textureMap.get(settings.texture);
		game.util.__populateAtlasIndices([
			"no-gold"
		], settings);
		settings.framewidth = settings.framewidth || 457;
		settings.frameheight = settings.frameheight || 200;
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
		this.var = {};

        // Put user code here //
        this.tweenOnState = false;
        this.tweenOffState = false;
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

        // Put user code here //
        if(this.tweenOnState){
            this.tweenOn.stop();
        }
        if(this.tweenOffState){
            this.tweenOff.stop();
        }
        //  End of user code  //
	}

    // Put user code here //
    showFunc(){
        this.tweenOnState = true;
        this.tweenOn = new me.Tween(this.pos)
            .to({y:me.game.world.height/2}, 500)
            .easing(me.Tween.Easing.Linear.None).onComplete(()=>{
                this.tweenOnState = false;
                let jj = true;
                this.wait = me.timer.setTimeout(()=>{
                    if(jj){
                        jj = false;
                        this.closeFunc();
                    }
                },1000);
            });
        this.tweenOn.start();
    }
    
    closeFunc(){
        this.tweenOffState = true;
        this.tweenOn = new me.Tween(this.pos)
            .to({y:me.game.world.height+me.game.world.height/2}, 500)
            .easing(me.Tween.Easing.Linear.None).onComplete(()=>{
                this.tweenOffState = false;
                me.state.current().shopClickState = true;
            });
        this.tweenOn.start();
    }
    //  End of user code  //
};

// Put user code here //
 
//  End of user code  //
