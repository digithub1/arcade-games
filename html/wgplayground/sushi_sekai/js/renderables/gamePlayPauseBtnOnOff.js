import * as me from '../../dist/melonjs.module.js'
import game from '../game.js'


// Put user code here //
 
//  End of user code  //

export default class gamePlayPauseBtnOnOff extends me.Sprite {
	constructor(x, y, settings = {}) {
		settings.image = settings.image || game.textureMap.get('image')
		settings.framewidth = settings.framewidth || 205;
		settings.frameheight = settings.frameheight || 99;
		settings.anchorPoint = {
			x: 0.5,
			y: 0.5
		};

        // Put user code here //
        settings.texture = "menu";
		settings.image = game.textureMap.get(settings.texture);
		game.util.__populateAtlasIndices([
			"papanmusic"
		], settings);
		settings.framewidth = settings.framewidth || 205;
		settings.frameheight = settings.frameheight || 99;
		settings.anchorPoint = {
			x: 0.5,
			y: 0.5
		};
        //  End of user code  //

		super(x, y, Object.assign(settings));
		delete settings.image;
		this.alpha = 1;
		this.floating = true;
		this.alwaysUpdate = true;
		this.updateWhenPaused = false;
		this.isPersistent = false;
		this.isKinematic = false;
		this._pointerDownHandler = me.input.registerPointerEvent("pointerdown", this, this.onClick.bind(this));
		this.var = {};

        // Put user code here //
        this.type = settings.type;
        
        if(this.type == 0){
            if(dataPlayer.bgm){
                this.state = false;
            }else{
                this.state = true;
            }
            this.switchFunc(()=>{});
        }else{
            if(dataPlayer.sfx){
                this.state = false;
            }else{
                this.state = true;
            }
            this.switchFunc(()=>{});
        }
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
        this.switchFunc(()=>{
            this.checkAudioFunc();
        });
        me.audio.play("sfx_button");
        return false;
        //  End of user code  //
	}

    // Put user code here //
    switchFunc(callback){
        if(this.state){
            this.state = false;
            this.pos.x = 583;
        }else{
            this.state = true;
            this.pos.x = 740;
        }
        callback();
    }
    
    checkAudioFunc(){
        if(this.type == 0){
            if(dataPlayer.bgm){
                dataPlayer.bgm = false;
                me.audio.mute("bgm_gamePlay");
                me.audio.mute("bgm_mainMenu");
            }else{
                dataPlayer.bgm = true;
                me.audio.unmute("bgm_gamePlay");
                me.audio.unmute("bgm_mainMenu");
            }
        }else{
            if(dataPlayer.sfx){
                dataPlayer.sfx = false;
                me.audio.mute("sfx_button");
                me.audio.mute("sfx_gamePlayBeauty");
                me.audio.mute("sfx_gamePlayFox");
                me.audio.mute("sfx_gamePlayLose");
                me.audio.mute("sfx_gamePlayNeko");
                me.audio.mute("sfx_gamePlayPowerUp");
                me.audio.mute("sfx_gamePlaySushiClick");
                me.audio.mute("sfx_gamePlaySushiCorrect");
                me.audio.mute("sfx_gamePlayTimeTicking");
                me.audio.mute("sfx_mainMenuPurchase");
            }else{
                dataPlayer.sfx = true;
                me.audio.unmute("sfx_button");
                me.audio.unmute("sfx_gamePlayBeauty");
                me.audio.unmute("sfx_gamePlayFox");
                me.audio.unmute("sfx_gamePlayLose");
                me.audio.unmute("sfx_gamePlayNeko");
                me.audio.unmute("sfx_gamePlayPowerUp");
                me.audio.unmute("sfx_gamePlaySushiClick");
                me.audio.unmute("sfx_gamePlaySushiCorrect");
                me.audio.unmute("sfx_gamePlayTimeTicking");
                me.audio.unmute("sfx_mainMenuPurchase");
            }
        }
        
        localStorage.setItem("sushiSekai", JSON.stringify(dataPlayer));
    }
    //  End of user code  //
};

// Put user code here //
 
//  End of user code  //
