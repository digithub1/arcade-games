import * as me from '../../dist/melonjs.module.js'
import game from '../game.js'


// Put user code here //
 
//  End of user code  //

import gamePlayCharAnim from './gamePlayCharAnim.js'

export default class charFox extends gamePlayCharAnim {
	constructor(x, y, settings = {}) {
        // Put user code here //
        settings.sfxAudio = "sfx_gamePlayFox";
        settings.baseName = "foxy";
        settings.animObj = [
            {nameAnim:"normal", motionAmount: 41}
        ];
        settings.framewidth = 212;
		settings.frameheight = 204;
        super(x, y, Object.assign(settings));
        //  End of user code  //
	}

    // Put user code here //
    
    //  End of user code  //
};

// Put user code here //
 
//  End of user code  //
