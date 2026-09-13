import * as me from '../../dist/melonjs.module.js'
import game from '../game.js'


// Put user code here //
 
//  End of user code  //

export default class gamePlaySushiTarget extends me.Sprite {
	constructor(x, y, settings = {}) {
		settings.texture = "gamePlay";
		settings.image = game.textureMap.get(settings.texture);
		game.util.__populateAtlasIndices([
			"gamePlay_sushi_number"
		], settings);
		settings.framewidth = settings.framewidth || 37;
		settings.frameheight = settings.frameheight || 37;
		settings.anchorPoint = {
			x: 0,
			y: 0
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
		this.var = {};

        // Put user code here //
        this.targetNumber = settings.targetNumber;
        this.textTarget = new me.BitmapText(this.pos.x-6, this.pos.y-14, {
            font:"font-blue-kecil",
            text:this.targetNumber,
            size: 0.23
        });
        this.textTarget.floating = true;
        me.game.world.addChild(this.textTarget, 11);
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
        
        //  End of user code  //
	}

    // Put user code here //
    
    //  End of user code  //
};

// Put user code here //
 
//  End of user code  //
