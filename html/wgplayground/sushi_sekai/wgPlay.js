import * as me from './dist/melonjs.module.js'

var wgPlayFunc = {};

wgPlayFunc.showAdsRunOnce = true;
wgPlayFunc.showAdsReady = true;
wgPlayFunc.showAdsSuccess = true;
wgPlayFunc.showAdsFail = true;

wgPlayFunc.init = async function(){
	console.log("Init SDK");
}

wgPlayFunc.adShowReward = function(onReadyFunc, onSuccessFunc, onFailFunc){
	if(wgPlayFunc.showAdsRunOnce){
		wgPlayFunc.showAdsRunOnce = false;
		window[window.preroll.config.loaderObjectName].registerRewardCallbacks({
	        onReady:onReadyFunc,
	        onSuccess:onSuccessFunc,
	        onFail:onFailFunc
	    });
	}		
}

wgPlayFunc.rewardReady = function(){
	if(wgPlayFunc.showAdsReady){
		wgPlayFunc.showAdsReady = false;
		window[window.preroll.config.loaderObjectName].showRewardAd();
	}		
}

wgPlayFunc.rewardSuccess = function(callback){
	if(wgPlayFunc.showAdsSuccess){
		wgPlayFunc.showAdsSuccess = false;
		callback();
	}		
}

wgPlayFunc.rewardFail = function(callback){
	if(wgPlayFunc.showAdsFail){
		wgPlayFunc.showAdsFail = false;
		callback();
	}		
}

export default wgPlayFunc;