import * as me from '../../dist/melonjs.module.js'
import game from '../game.js'


// Put user code here //

//  End of user code  //

export default class gamePlayPauseBlackPanel extends me.Sprite {
	constructor(x, y, settings = {}) {
		settings.texture = "gamePlay";
		settings.image = game.textureMap.get(settings.texture);
		game.util.__populateAtlasIndices([
			"gamePlay_background_00"
		], settings);
		settings.framewidth = settings.framewidth || 1320;
		settings.frameheight = settings.frameheight || 760;
		settings.anchorPoint = {
			x: 0.5,
			y: 0.5
		};

        // Put user code here //
        
        //  End of user code  //

		x += me.game.viewport.width*0.5;
		y += me.game.viewport.height*0.5;
		super(x, y, Object.assign(settings));
		delete settings.image;
		this.alpha = 0.8;
		this.floating = true;
		this.alwaysUpdate = true;
		this.updateWhenPaused = false;
		this.isPersistent = false;
		this.isKinematic = false;
		this._pointerDownHandler = me.input.registerPointerEvent("pointerdown", this, this.onClick.bind(this));
		this.var = {};

        // Put user code here //
        this.tint.setColor(0, 0, 0);
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
        
        //  End of user code  //
	}

	onClick(pointer) {
        // Put user code here //
        return false;
        //  End of user code  //
	}

    // Put user code here //
    
    //  End of user code  //
};

// Put user code here //

//  End of user code  //
