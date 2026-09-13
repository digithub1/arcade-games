import * as me from '../../dist/melonjs.module.js'
import game from '../game.js'


// Put user code here //
 
//  End of user code  //

export default class gamePlayEffSushiRainbow extends me.Sprite {
	constructor(x, y, settings = {}) {
		settings.texture = "effect";
		settings.image = game.textureMap.get(settings.texture);
		game.util.__populateAtlasIndices([
			"gamePlayEffRaibowSushi_00","gamePlayEffRaibowSushi_01","gamePlayEffRaibowSushi_02",
			"gamePlayEffRaibowSushi_03","gamePlayEffRaibowSushi_04","gamePlayEffRaibowSushi_05",
			"gamePlayEffRaibowSushi_06","gamePlayEffRaibowSushi_07","gamePlayEffRaibowSushi_08",
			"gamePlayEffRaibowSushi_09","gamePlayEffRaibowSushi_10","gamePlayEffRaibowSushi_11",
			"gamePlayEffRaibowSushi_12","gamePlayEffRaibowSushi_13","gamePlayEffRaibowSushi_14",
			"gamePlayEffRaibowSushi_15","gamePlayEffRaibowSushi_16","gamePlayEffRaibowSushi_17",
			"gamePlayEffRaibowSushi_18","gamePlayEffRaibowSushi_19"
		], settings);
		settings.framewidth = settings.framewidth || 145;
		settings.frameheight = settings.frameheight || 96;
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
		this.var = {};

        // Put user code here //
        let timeAnimationList = [30, 40, 50, 60, 70],
            timeRandom = timeAnimationList[Math.floor(Math.random() * timeAnimationList.length)],
            objAnim = [];
        for(let i=0; i<20;i++){
            if(i<10){
                objAnim.push({ name: "gamePlayEffRaibowSushi_0"+i, delay: timeRandom });
            }else{
                objAnim.push({ name: "gamePlayEffRaibowSushi_"+i, delay: timeRandom });
            }
                
        }
        this.addAnimation('1', [{ name: "gamePlayEffRaibowSushi_01", delay: 1 }]);
        this.addAnimation('0', objAnim);
		this.setCurrentAnimation('1');
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
    spawnEffFunc(type){
        if(type == 0){
            this.tint.setColor(60, 255, 60);
            this.scale(0.3);
        }else if(type == 1){
            this.tint.setColor(255, 125, 125);
            this.scale(0.3);
        }else if(type == 2){
            this.tint.setColor(255, 60, 60);
            this.scale(0.3);
        }else if(type == 3){
            this.tint.setColor(255, 240, 220);
            this.scale(0.3);
        }else if(type == 4){
            this.tint.setColor(180, 255, 60);
            this.scale(0.3);
        }else if(type == 5){
            this.tint.setColor(255, 255, 60);
            this.scale(0.3);
        }else if(type == 6){
            this.tint.setColor(255, 180, 60);
            this.scale(0.3);
        }else if(type == "soySauce"){
            this.tint.setColor(30, 5, 5);
            this.scale(0.3);
        }else if(type == "mayo"){
            this.tint.setColor(255, 240, 220);
            this.scale(0.3);
        }else if(type == "ginger"){
            this.tint.setColor(240, 115, 100);
            this.scale(1.5);
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
