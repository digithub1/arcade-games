import * as me from '../../dist/melonjs.module.js'
import game from '../game.js'


// Put user code here //
 
//  End of user code  //

export default class gamePlaySushiTargetSpawner extends me.Sprite {
	constructor(x, y, settings = {}) {
		settings.texture = "gamePlay";
		settings.image = game.textureMap.get(settings.texture);
		game.util.__populateAtlasIndices([
			"gamePlay_meja_char"
		], settings);
		settings.framewidth = settings.framewidth || 277;
		settings.frameheight = settings.frameheight || 154;
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
		this.var = {};

        // Put user code here //
        this.pos.z = 9;
        this.parentObj = settings.parentObj;
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
    spawnSushiFunc(){
        let sushi1Name = Math.floor(Math.random() * 7),
            sushi2Name = Math.floor(Math.random() * 7),
            sushi3Name = Math.floor(Math.random() * 7),
            target1Number = Math.floor(Math.random() * 2)+1,
            target2Number = Math.floor(Math.random() * 2)+1,
            target3Number = Math.floor(Math.random() * 2)+1;
            
        this.sushi1 = me.pool.pull("gamePlaySushi", this.pos.x-85, this.pos.y-33,{type:sushi1Name, gameOn: false});
        this.sushi2 = me.pool.pull("gamePlaySushi", this.pos.x-5, this.pos.y-33,{type:sushi2Name, gameOn: false});
        this.sushi3 = me.pool.pull("gamePlaySushi", this.pos.x+75, this.pos.y-33,{type:sushi3Name, gameOn: false});
        me.game.world.addChild(this.sushi1, this.pos.z+1);
        me.game.world.addChild(this.sushi2, this.pos.z+1);
        me.game.world.addChild(this.sushi3, this.pos.z+1);
        
        this.target1 = me.pool.pull("gamePlaySushiTarget", this.sushi1.pos.x+25, this.sushi1.pos.y-23, {targetNumber:target1Number});
        this.target2 = me.pool.pull("gamePlaySushiTarget", this.sushi2.pos.x+25, this.sushi2.pos.y-23, {targetNumber:target2Number});
        this.target3 = me.pool.pull("gamePlaySushiTarget", this.sushi3.pos.x+25, this.sushi3.pos.y-23, {targetNumber:target3Number});
        me.game.world.addChild(this.target1, this.pos.z+2);
        me.game.world.addChild(this.target2, this.pos.z+2);
        me.game.world.addChild(this.target3, this.pos.z+2);
        
        this.sushi1.alpha = 1;
        this.sushi2.alpha = 1;
        this.sushi3.alpha = 1;
    }
    
    removeAllSushiFunc(){
        me.game.world.removeChild(this.sushi1);
        me.game.world.removeChild(this.sushi2);
        me.game.world.removeChild(this.sushi3);
        me.game.world.removeChild(this.target1.textTarget);
        me.game.world.removeChild(this.target2.textTarget);
        me.game.world.removeChild(this.target3.textTarget);
        me.game.world.removeChild(this.target1);
        me.game.world.removeChild(this.target2);
        me.game.world.removeChild(this.target3);
        me.game.world.removeChild(this);
    }
    
    calculateSushi(otherType){
        if(this.sushi1.type == otherType){
            this.target1.targetNumber -= 1;
            if(this.target1.targetNumber <= 0){
                this.target1.targetNumber = 0;
                this.target1.textTarget.setText(0);
            }else{
                this.target1.textTarget.setText(this.target1.targetNumber);
            }
        }
        if(this.sushi2.type == otherType){
            this.target2.targetNumber -= 1;
            if(this.target2.targetNumber <= 0){
                this.target2.targetNumber = 0;
                this.target2.textTarget.setText(0);
            }else{
                this.target2.textTarget.setText(this.target2.targetNumber);
            }
        }
        if(this.sushi3.type == otherType){
            this.target3.targetNumber -= 1;
            if(this.target3.targetNumber <= 0){
                this.target3.targetNumber = 0;
                this.target3.textTarget.setText(0);
            }else{
                this.target3.textTarget.setText(this.target3.targetNumber);
            }
        }
        
        if(this.target1.targetNumber == 0 && this.target2.targetNumber == 0 && this.target3.targetNumber == 0){
            this.parentObj.parentObj.charOutFunc();
        }
    }
    //  End of user code  //
};

// Put user code here //
 
//  End of user code  //
