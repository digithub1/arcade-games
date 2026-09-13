import * as me from '../../dist/melonjs.module.js'
import game from '../game.js'


// Put user code here //

//  End of user code  //

export default class gamePlayPause extends me.Sprite {
	constructor(x, y, settings = {}) {
		settings.image = settings.image || game.textureMap.get('image')
		settings.framewidth = settings.framewidth || 522;
		settings.frameheight = settings.frameheight || 431;
		settings.anchorPoint = {
			x: 0.5,
			y: 0.5
		};

        // Put user code here //
        settings.texture = "menu";
		settings.image = game.textureMap.get(settings.texture);
		game.util.__populateAtlasIndices([
			"PauseScreen"
		], settings);
		settings.framewidth = settings.framewidth || 522;
		settings.frameheight = settings.frameheight || 431;
		settings.anchorPoint = {
			x: 0.5,
			y: 0.5
		};
        //  End of user code  //

		x += me.game.viewport.width*0.5;
		y += me.game.viewport.height*0.5;
		super(x, y, Object.assign(settings));
		delete settings.image;
		this.alpha = 1;
		this.floating = true;
		this.alwaysUpdate = true;
		this.updateWhenPaused = false;
		this.isPersistent = false;
		this.var = {};

        // Put user code here //
        
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
