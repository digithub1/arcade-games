import * as me from '../../dist/melonjs.module.js'
import game from '../game.js'


// Put user code here //
 
//  End of user code  //

export default class gamePlayCharSpawner extends me.Sprite {
	constructor(x, y, settings = {}) {
		settings.texture = "gamePlay";
		settings.image = game.textureMap.get(settings.texture);
		game.util.__populateAtlasIndices([
			"gamePlay_timeBar_02"
		], settings);
		settings.framewidth = settings.framewidth || 60;
		settings.frameheight = settings.frameheight || 66;
		settings.anchorPoint = {
			x: 0,
			y: 0
		};

        // Put user code here //
        
        //  End of user code  //

		super(x, y, Object.assign(settings));
		delete settings.image;
		this.alpha = 0;
		this.floating = false;
		this.alwaysUpdate = true;
		this.updateWhenPaused = false;
		this.isPersistent = false;
		this.var = {};

        // Put user code here //
        this.listChar = ["charBeauty", "charFox", "charNeko"];
        this.posY = settings.posY;
        this.firstSpawn = true;
        //  End of user code  //
	}

	update (dt){
		var drawNextFrame = super.update(dt);
        // Put user code here //
        if(this.firstSpawn && gamePlayStateOn){
            this.firstSpawn = false;
            this.charInFunc();
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
        
        //  End of user code  //
	}

    // Put user code here //
    charInFunc(){
        let randomChar = Math.floor(Math.random() * this.listChar.length);
        this.char = me.pool.pull(this.listChar[randomChar], this.pos.x, this.posY, {parentObj:this});
        me.game.world.addChild(this.char, 6);
        this.char.tweenOn();
    }
    
    charOutFunc(){
        score += 10;
        this.char.tweenOff(()=>{
            me.game.world.removeChild(this.char);
            delete this.char;
            this.charInFunc();
        });
    }
    //  End of user code  //
};

// Put user code here //
 
//  End of user code  //
