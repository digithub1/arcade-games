import * as me from '../../dist/melonjs.module.js'
import game from '../game.js'


// Put user code here //
 
//  End of user code  //

export default class shopBannerItem extends me.Sprite {
	constructor(x, y, settings = {}) {
		settings.image = settings.image || game.textureMap.get('image')
		settings.framewidth = settings.framewidth || 625;
		settings.frameheight = settings.frameheight || 295;
		settings.anchorPoint = {
			x: 0.5,
			y: 0.5
		};

        // Put user code here //
        settings.texture = "menu";
		settings.image = game.textureMap.get(settings.texture);
		game.util.__populateAtlasIndices([
			"shop-ginger","shop-mayo","shop-soy-sauce","shop-radish"
		], settings);
		settings.framewidth = settings.framewidth || 625;
		settings.frameheight = settings.frameheight || 295;
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
        this.addAnimation('shop-ginger', [{ name: "shop-ginger", delay: 1 }]);
        this.addAnimation('shop-mayo', [{ name: "shop-mayo", delay: 1 }]);
        this.addAnimation('shop-soySauce', [{ name: "shop-soy-sauce", delay: 1 }]);
        this.addAnimation('shop-radish', [{ name: "shop-radish", delay: 1 }]);
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
    showFunc(type){
        if(!this.isCurrentAnimation("shop-"+type)){this.setCurrentAnimation("shop-"+type)}
    }
    //  End of user code  //
};

// Put user code here //
 
//  End of user code  //
