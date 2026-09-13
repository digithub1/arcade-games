import * as me from '../../dist/melonjs.module.js'
import game from '../game.js'


// Put user code here //
 
//  End of user code  //

export default class gamePlayEffSushiMatch extends me.Sprite {
	constructor(x, y, settings = {}) {
		settings.texture = "effect";
		settings.image = game.textureMap.get(settings.texture);
		game.util.__populateAtlasIndices([
			"gamePlayEffMatchSushi_00","gamePlayEffMatchSushi_01","gamePlayEffMatchSushi_02",
			"gamePlayEffMatchSushi_03","gamePlayEffMatchSushi_04","gamePlayEffMatchSushi_05",
			"gamePlayEffMatchSushi_06","gamePlayEffMatchSushi_07","gamePlayEffMatchSushi_08",
			"gamePlayEffMatchSushi_09","gamePlayEffMatchSushi_10","gamePlayEffMatchSushi_11",
			"gamePlayEffMatchSushi_12","gamePlayEffMatchSushi_13","gamePlayEffMatchSushi_14",
			"gamePlayEffMatchSushi_15","gamePlayEffMatchSushi_16","gamePlayEffMatchSushi_17",
			"gamePlayEffMatchSushi_18","gamePlayEffMatchSushi_19"
		], settings);
		settings.framewidth = settings.framewidth || 113;
		settings.frameheight = settings.frameheight || 118;
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

		this.addAnimation('0', [{ name: "gamePlayEffMatchSushi_00", delay: 50 },{ name: "gamePlayEffMatchSushi_01", delay: 50 },{ name: "gamePlayEffMatchSushi_02", delay: 50 },{ name: "gamePlayEffMatchSushi_03", delay: 50 },{ name: "gamePlayEffMatchSushi_04", delay: 50 },{ name: "gamePlayEffMatchSushi_05", delay: 50 },{ name: "gamePlayEffMatchSushi_06", delay: 50 },{ name: "gamePlayEffMatchSushi_07", delay: 50 },{ name: "gamePlayEffMatchSushi_08", delay: 50 },{ name: "gamePlayEffMatchSushi_09", delay: 50 },{ name: "gamePlayEffMatchSushi_10", delay: 50 },{ name: "gamePlayEffMatchSushi_11", delay: 50 },{ name: "gamePlayEffMatchSushi_12", delay: 50 },{ name: "gamePlayEffMatchSushi_13", delay: 50 },{ name: "gamePlayEffMatchSushi_14", delay: 50 },{ name: "gamePlayEffMatchSushi_15", delay: 50 },{ name: "gamePlayEffMatchSushi_16", delay: 50 },{ name: "gamePlayEffMatchSushi_17", delay: 50 },{ name: "gamePlayEffMatchSushi_18", delay: 50 },{ name: "gamePlayEffMatchSushi_19", delay: 50 }]);
		this.addAnimation('1', [{ name: "gamePlayEffMatchSushi_00", delay: 1 }]);
		this.setCurrentAnimation('1');
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
    spawnEffFunc(rotate, type){
        if(type == 0){
            this.tint.setColor(60, 255, 60);
        }else if(type == 1){
            this.tint.setColor(255, 125, 125);
        }else if(type == 2){
            this.tint.setColor(255, 60, 60);
        }else if(type == 3){
            this.tint.setColor(255, 240, 220);
        }else if(type == 4){
            this.tint.setColor(180, 255, 60);
        }else if(type == 5){
            this.tint.setColor(255, 255, 60);
        }else if(type == 6){
            this.tint.setColor(255, 180, 60);
        }else if(type == "radish"){
            this.tint.setColor(240, 210, 0);
        }
        
        if(rotate){
            this.rotate(1.5707970000000002);
        }else{
            this.rotate(0);
        }
        
        if(!this.isCurrentAnimation('0')){
            let kk = true;
            this.setCurrentAnimation('0',()=>{
                if(kk){
                    kk = false;
                    me.game.world.removeChild(this);
                }
                return false;
            });
        }
    }
    //  End of user code  //
};

// Put user code here //
 
//  End of user code  //
