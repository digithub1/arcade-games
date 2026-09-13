import * as me from '../../dist/melonjs.module.js'
import game from '../game.js'


// Put user code here //
 
//  End of user code  //

export default class layerParticleSakura extends me.Sprite {
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
		this.alpha = 0;
		this.floating = false;
		this.alwaysUpdate = false;
		this.updateWhenPaused = false;
		this.isPersistent = false;
		this.var = {};

        // Put user code here //
        var image = me.loader.getImage('petals');
        var emitter = new me.ParticleEmitter(0, 0, {
            image: image,
            width: 1320,
            height: 760,
            totalParticles: 50,
            angle: 4,
            maxLife: 2000,
            speed: 0.8,
            speedVariation: 0,
            minRotation: -2.35763558773986,
            maxRotation: 3.14159265358979,
            minStartScale: 0.8,
            maxStartScale: 0.8,
            minEndScale: 0.8,
            maxEndScale: 0.8,
            wind: 0.035,
            maxParticles: 50,
            floating: true
        });
        
        me.game.world.addChild(emitter, this.pos._z);
        emitter.streamParticles();
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
