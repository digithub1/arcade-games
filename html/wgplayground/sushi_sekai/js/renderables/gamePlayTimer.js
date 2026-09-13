import * as me from '../../dist/melonjs.module.js'
import game from '../game.js'


// Put user code here //
 
//  End of user code  //

export default class gamePlayTimer extends me.Sprite {
	constructor(x, y, settings = {}) {
		settings.texture = "gamePlay";
		settings.image = game.textureMap.get(settings.texture);
		game.util.__populateAtlasIndices([
			"gamePlay_timeBar_01"
		], settings);
		settings.framewidth = settings.framewidth || 458;
		settings.frameheight = settings.frameheight || 29;
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
		this.alwaysUpdate = true;
		this.updateWhenPaused = false;
		this.isPersistent = false;
		this.var = {};

        // Put user code here //
        this.mask = new me.Rect(-this.width/2, -this.height/2, this.width, this.height);
        let habis = this.mask.pos.x-this.width;
        timerGameState = true;
        
        this.range = this.width/60;
        this.maxPosMask = this.mask.pos.x;
        
        this.interval = me.timer.setInterval(()=>{
            if(gamePlayStateOn){
                if(this.mask.pos.x <= habis){
                    timerGameState = false;
                    me.timer.clearInterval(this.interval);
                    let gg = true;
                    me.timer.setTimeout(()=>{
                        if(gg){
                            gg = false;
                            me.state.current().gameOverFunc();
                        }
                    },1000);
                }else{
                    this.mask.pos.x -= this.range;
                }
            }
        },1000);
        //  End of user code  //
	}

	update (dt){
		var drawNextFrame = super.update(dt);
        // Put user code here //
        if(timerGameState == false){
            me.state.current().clickSushi = false;
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

        // Put user code here //
        this.mask = undefined;
        me.timer.clearInterval(this.interval);
        //  End of user code  //
	}

    // Put user code here //
    upTimeFunc(){
        this.mask.pos.x += this.range*3;
        if(this.mask.pos.x >= this.maxPosMask){
            this.mask.pos.x = this.maxPosMask;
        }
    }
    //  End of user code  //
};

// Put user code here //
 
//  End of user code  //
