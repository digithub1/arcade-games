import * as me from '../../dist/melonjs.module.js'
import game from '../game.js'

// Put user code here //
 
//  End of user code  //

export default class tempRestartScene extends me.Stage {
	onResetEvent() {
        // Put user code here //
        
        //  End of user code  //
		me.level.load("tempRestartScene");
		this.var = {};
        // Put user code here //
        gamePlayStateOn = false;
        gamePlayPauseState = false;
        
        let kk = setTimeout(()=>{
            me.state.change("gamePlayScene");
        },1000);
        //  End of user code  //
	}

	onDestroyEvent() {
        // Put user code here //
        
        //  End of user code  //
	}

    // Put user code here //
    
    //  End of user code  //
};

// Put user code here //
 
//  End of user code  //
