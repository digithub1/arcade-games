import * as me from '../../dist/melonjs.module.js'
import game from '../game.js'


// Put user code here //
 
//  End of user code  //

export default class gamePlayCharAnim extends me.Sprite {
	constructor(x, y, settings = {}) {
		settings.image = settings.image || game.textureMap.get('image')
		settings.framewidth = settings.framewidth || 181;
		settings.frameheight = settings.frameheight || 203;
		settings.anchorPoint = {
			x: 0.5,
			y: 0.5
		};

        // Put user code here //
        var sfxAudio = settings.sfxAudio,
            animaName = [],
            baseName = settings.baseName,
            animObj = settings.animObj,
            detailAnim = [[],[],[]];
        
        for(let i in animObj){
            for(let k=0; k<animObj[i].motionAmount; k++){
                animaName.push(baseName+"_"+animObj[i].nameAnim+"_"+k);
                
                detailAnim[i].push({name: baseName+"_"+animObj[i].nameAnim+"_"+k, delay: 100});
            }
        }
        
        settings.texture = "gamePlay";
        settings.image = game.textureMap.get(settings.texture);
		game.util.__populateAtlasIndices(animaName, settings);
		settings.framewidth = settings.framewidth;
		settings.frameheight = settings.frameheight;
		settings.anchorPoint = {
			x: 0.5,
			y: 0.5
		};
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
        this.sfxAudio = sfxAudio;
        for(let i in animObj){
            this.addAnimation(animObj[i].nameAnim, detailAnim[i]);
        }
        this.setCurrentAnimation(animObj[0].nameAnim);
        
        this.tweenStateOn = false;
        this.tweenStateOff = false;
        
        this.parentObj = settings.parentObj;
        this.sushiTargetActive = false;
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
        if(this.tweenStateOn){
            this.tweenOn.stop();
        }
        
        if(this.tweenStateOff){
            this.tweenOff.stop();
        }
        //  End of user code  //
	}

    // Put user code here //
    tweenOn(){
        this.tweenStateOn = true;
        this.tweenOn = new me.Tween(this.pos)
            .to({x:189}, 1000)
            .easing(me.Tween.Easing.Linear.None).onComplete(()=>{
                this.tweenStateOn = false;
                this.sushiTarget = me.pool.pull("gamePlaySushiTargetSpawner", 199, this.pos.y+155, {parentObj:this});
                me.game.world.addChild(this.sushiTarget, this.sushiTarget.pos.z);
                this.sushiTarget.spawnSushiFunc();
                me.state.current().sushiStage.showAllSushiFunc();
                this.sushiTargetActive = true;
            });
        this.tweenOn.start();
    }
    
    tweenOff(callback){
        //sound
            me.audio.play(this.sfxAudio);
            me.audio.play("sfx_mainMenuPurchase");
        //--
        this.sushiTargetActive = false;
        this.sushiTarget.removeAllSushiFunc();
        this.tweenStateOff = true;
        this.tweenOff = new me.Tween(this.pos)
            .to({x:-300}, 1000)
            .easing(me.Tween.Easing.Linear.None).onComplete(()=>{
                this.tweenStateOff = false;
                callback();
            });
        this.tweenOff.start();
    }
    //  End of user code  //
};

// Put user code here //
 
//  End of user code  //
