import * as me from '../../dist/melonjs.module.js'
import game from '../game.js'


// Put user code here //
 
//  End of user code  //

export default class tuttorImage extends me.Sprite {
	constructor(x, y, settings = {}) {
		settings.texture = "menu";
		settings.image = game.textureMap.get(settings.texture);
		game.util.__populateAtlasIndices([
			"tutorial-1","tutorial-2","tutorial-3",
			"tutorial-4"
		], settings);
		settings.framewidth = settings.framewidth || 1319;
		settings.frameheight = settings.frameheight || 759;
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
		this.alwaysUpdate = false;
		this.updateWhenPaused = false;
		this.isPersistent = false;

		this.addAnimation('0', [{ name: "tutorial-1", delay: 1 }]);
		this.addAnimation('1', [{ name: "tutorial-2", delay: 1 }]);
		this.addAnimation('2', [{ name: "tutorial-3", delay: 1 }]);
		this.addAnimation('3', [{ name: "tutorial-4", delay: 1 }]);
		this.setCurrentAnimation('0');
		this.isKinematic = false;
		this._pointerDownHandler = me.input.registerPointerEvent("pointerdown", this, this.onClick.bind(this));
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
