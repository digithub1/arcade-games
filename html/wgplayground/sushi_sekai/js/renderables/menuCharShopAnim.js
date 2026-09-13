import * as me from '../../dist/melonjs.module.js'
import game from '../game.js'


// Put user code here //

//  End of user code  //

export default class menuCharShopAnim extends me.Sprite {
	constructor(x, y, settings = {}) {
		settings.image = settings.image || game.textureMap.get('image')
		settings.framewidth = settings.framewidth || 177;
		settings.frameheight = settings.frameheight || 269;
		settings.anchorPoint = {
			x: 0.5,
			y: 0.5
		};

        // Put user code here //
        let animaName = [],
            baseName = "beauty_idle_";
        settings.texture = "menu";
        
        for(let i=0; i <= 20; i++){
            animaName.push(baseName+i);
        }
        
        settings.image = game.textureMap.get(settings.texture);
		game.util.__populateAtlasIndices(animaName, settings);
		settings.framewidth = settings.framewidth || 177;
		settings.frameheight = settings.frameheight || 269;
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
