// Put user code here //
import * as me from '../../dist/melonjs.module.js'
import game from '../game.js'

window.gamePlayStateOn = false;
window.gamePlayPauseState = false;
window.firstPressSushi = false;
window.otherSushi = {};
window.posYDeleteSushi = 0;
window.timerGameState = true;
window.score = 0;
window.webAds = false;
window.dataPlayer = {coin:0, powerUp:{ginger:0, radish:0, mayo:0, soySauce:0}, sfx:true, bgm:true};
// dataPlayer.powerUp = {ginger:0, radish:0, mayo:0, soySauce:0};

if(localStorage.getItem("sushiSekai") == null){
    localStorage.setItem("sushiSekai", JSON.stringify(dataPlayer));
}else{
    dataPlayer = JSON.parse(localStorage.getItem("sushiSekai"));
}

export  default {};
//  End of user code  //
