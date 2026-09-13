import * as me from '../../dist/melonjs.module.js'
import game from '../game.js'


// Put user code here //
 
//  End of user code  //

export default class gamePlayPowerUpCount extends me.Sprite {
	constructor(x, y, settings = {}) {
		settings.texture = "gamePlay";
		settings.image = game.textureMap.get(settings.texture);
		game.util.__populateAtlasIndices([
			"gamePlay_powerUp_number"
		], settings);
		settings.framewidth = settings.framewidth || 39;
		settings.frameheight = settings.frameheight || 38;
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
        this.namePu = settings.namePu;
        this.textTarget = new me.BitmapText(this.pos.x+1, this.pos.y-14, {
            font:"font-blue-kecil",
            textAlign:"center",
            text:dataPlayer.powerUp[this.namePu],
            size: 0.23
        });
        this.textTarget.floating = true;
        me.game.world.addChild(this.textTarget, me.state.current().blackLayer.pos._z-1);
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
