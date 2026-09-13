import * as me from '../../dist/melonjs.module.js'
import game from '../game.js'


// Put user code here //
 
//  End of user code  //

export default class shopAds extends me.Sprite {
	constructor(x, y, settings = {}) {
		settings.texture = "menu";
		settings.image = game.textureMap.get(settings.texture);
		game.util.__populateAtlasIndices([
			"sushiSekai_Ads"
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
		this.floating = true;
		this.alwaysUpdate = false;
		this.updateWhenPaused = false;
		this.isPersistent = false;
		this.isKinematic = false;
		this._pointerDownHandler = me.input.registerPointerEvent("pointerdown", this, this.onClick.bind(this));
		this.var = {};

        // Put user code here //
        let time = 5;
        this.timerText = new me.BitmapText(this.pos.x+555, this.pos.y+265, {
            font:"font-blue-kecil",
            text:time,
            size: 0.5
        });
        this.timerText.floating = true;
        me.game.world.addChild(this.timerText, 51);
        
        this.intervalAds = me.timer.setInterval(()=>{
            time -= 1;
            if(time < 0){
                time = "";
                me.timer.clearInterval(this.intervalAds);
                this.button = me.pool.pull("shopAdsBtnClose", this.pos.x+570, this.pos.y+300, {parentObj:this});
                me.game.world.addChild(this.button, 51);
            }
            this.timerText.setText(time);
        },1000);
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
    closeFunc(callback){
        me.game.world.removeChild(this.button);
        me.game.world.removeChild(this);
        
        callback();
    }
    //  End of user code  //
};

// Put user code here //
 
//  End of user code  //
