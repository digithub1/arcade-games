import * as me from '../../dist/melonjs.module.js'
import game from '../game.js'


// Put user code here //
 
//  End of user code  //

import gamePlayCharAnim from './gamePlayCharAnim.js'

export default class charNeko extends gamePlayCharAnim {
	constructor(x, y, settings = {}) {
        // Put user code here //
        settings.sfxAudio = "sfx_gamePlayNeko";
        settings.baseName = "common";
        settings.animObj = [
            {nameAnim:"normal", motionAmount: 56}
        ];
        settings.framewidth = 194;
		settings.frameheight = 211;
        super(x, y, Object.assign(settings));
        //  End of user code  //
	}

    // Put user code here //
    
    //  End of user code  //
};

// Put user code here //
 
//  End of user code  //
