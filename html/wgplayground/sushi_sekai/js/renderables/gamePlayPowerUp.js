import * as me from '../../dist/melonjs.module.js'
import game from '../game.js'


// Put user code here //
 
//  End of user code  //

export default class gamePlayPowerUp extends me.Sprite {
	constructor(x, y, settings = {}) {
		settings.image = settings.image || game.textureMap.get('image')
		settings.framewidth = settings.framewidth || 100;
		settings.frameheight = settings.frameheight || 100;
		settings.anchorPoint = {
			x: 0,
			y: 0
		};

        // Put user code here //
        settings.texture = "menu";
		settings.image = game.textureMap.get(settings.texture);
		game.util.__populateAtlasIndices([
			"powerup1","powerup2","powerup3","powerup4"
		], settings);
		settings.framewidth = settings.framewidth || 126;
		settings.frameheight = settings.frameheight || 99;
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
		this.isKinematic = false;
		this._pointerDownHandler = me.input.registerPointerEvent("pointerdown", this, this.onClick.bind(this));
		this.var = {};

        // Put user code here //
        this.type = settings.type;
        this.addAnimation('0', [{ name: "powerup1", delay: 1 }]);
        this.addAnimation('1', [{ name: "powerup2", delay: 1 }]);
        this.addAnimation('2', [{ name: "powerup3", delay: 1 }]);
        this.addAnimation('3', [{ name: "powerup4", delay: 1 }]);
        this.setCurrentAnimation(this.type);
        
        this.namePu;
        if(this.type == 0){
            this.namePu = "ginger";
        }else if(this.type == 1){
            this.namePu = "radish";
        }else if(this.type == 2){
            this.namePu = "mayo";
        }else if(this.type == 3){
            this.namePu = "soySauce";
        }

        this.countPu = me.pool.pull("gamePlayPowerUpCount", this.pos.x+50, this.pos.y-35, {namePu:this.namePu});
        me.game.world.addChild(this.countPu, me.state.current().blackLayer.pos._z-2);
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
        clearTimeout(this.globalTimeout);
        //  End of user code  //
	}

	onClick(pointer) {
        // Put user code here //
        if(me.state.current().powerUpClickState){
            this.currentTransform.translate(this.pos.x, this.pos.x);
            this.currentTransform.scale(1, 0.99);
            this.currentTransform.translate(-this.pos.x, -this.pos.x);
            
            this.countPu.currentTransform.translate(this.countPu.pos.x, this.countPu.pos.x);
            this.countPu.currentTransform.scale(1, 0.99);
            this.countPu.currentTransform.translate(-this.countPu.pos.x, -this.countPu.pos.x);
            
            this.countPu.textTarget.currentTransform.translate(this.countPu.pos.x, this.countPu.pos.x);
            this.countPu.textTarget.currentTransform.scale(1, 0.99);
            this.countPu.textTarget.currentTransform.translate(-this.countPu.pos.x, -this.countPu.pos.x);
            
            me.game.repaint();
            //sound
                // me.audio.play("sfx-button2");
            //--
            let once = true;
            me.timer.setTimeout(()=>{
                if(once){
                    once = false;
                    this.onRelease();
                }
            }, 100);
        }
        return false;
        //  End of user code  //
	}

    // Put user code here //
    onRelease(){
        if(me.state.current().powerUpClickState){
            me.state.current().powerUpClickState = false;
            this.currentTransform.identity();
            this.countPu.currentTransform.identity();
            this.countPu.textTarget.currentTransform.identity();
            
            me.game.repaint();
            
            let once = true;
            me.timer.setTimeout(()=>{
                if(once){
                    once = false;
                    if(this.type == 0 && dataPlayer.powerUp.ginger > 0){
                        me.state.current().powerUpGingerState = true;
                        me.state.current().powerUpRadishState = false;
                        me.state.current().powerUpMayoState = false;
                        me.state.current().powerUpSoySauceState = false;
                        me.state.current().sushiStage.powerUpFunction(0, 0, "ginger",()=>{
                            me.state.current().powerUpClickState = true;
                            me.state.current().resetPowerUpFunc();
                            let oldValue = dataPlayer.powerUp.ginger,
                                newValue = oldValue-1;
                            if(newValue <= 0){
                                dataPlayer.powerUp.ginger = 0;
                            }else{
                                dataPlayer.powerUp.ginger = newValue;
                            }
                            me.state.current().gingerPu.countPu.textTarget.setText(dataPlayer.powerUp.ginger);
                            localStorage.setItem("sushiSekai", JSON.stringify(dataPlayer));
                            this.globalTimeout = setTimeout(()=>{
                                me.state.current().sushiStage.showAllSushiFunc();
                                clearTimeout(this.globalTimeout);
                            },500);
                        });
                    }else if(this.type == 1 && dataPlayer.powerUp.radish > 0){
                        me.state.current().powerUpGingerState = false;
                        me.state.current().powerUpRadishState = true;
                        me.state.current().powerUpMayoState = false;
                        me.state.current().powerUpSoySauceState = false;
                    }else if(this.type == 2 && dataPlayer.powerUp.mayo > 0){
                        me.state.current().powerUpGingerState = false;
                        me.state.current().powerUpRadishState = false;
                        me.state.current().powerUpMayoState = true;
                        me.state.current().powerUpSoySauceState = false;
                    }else if(this.type == 3 && dataPlayer.powerUp.soySauce > 0){
                        me.state.current().powerUpGingerState = false;
                        me.state.current().powerUpRadishState = false;
                        me.state.current().powerUpMayoState = false;
                        me.state.current().powerUpSoySauceState = true;
                    }else{
                        me.timer.setTimeout(()=>{
                            me.state.current().powerUpClickState = true;
                        }, 1000);
                    }
                }
            }, 100);
                        
        }
    }
    //  End of user code  //
};

// Put user code here //
 
//  End of user code  //
