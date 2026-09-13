//*-------- Show Interstitial --------*//
function ShowInter(complete) {
	gp.sounds.mute();
	// Show fullscreen, returns a promise
	gp.ads.showFullscreen();
	gp.ads.on('fullscreen:close', (success) => {
		if(complete)
			complete();
		gp.sounds.unmute();
	});
}

//*-------- Show Rewarded --------*//
function ShowRewarded(success, failure) {
	gp.sounds.mute();
	// Show rewarded video, returns a promise
	gp.ads.showRewardedVideo();
	// Reward is received
	gp.ads.on('rewarded:reward', () => {success()});
	// Showing ended
	gp.ads.on('rewarded:close', (success) => {
		if(!success&&failure)
			failure();
		gp.sounds.unmute();
	});
}

function isAfterTime() {
	return window.adState;
}

window.onGPInit = async (gp) => {
	window.gp = gp;
    // Wait while the player syncs with the server
    await gp.player.ready;

	// waiting for the variables
	await gp.variables.fetch();

	// Get the field value
	const infoSave = gp.player.get('playerInfo');
	if(infoSave != "NONE") {
		localStorage.setItem("RunnerCoaster:ssjjh5", infoSave);
	}

	gp.sounds.on('mute', () => {
		// Need to mute all sounds in the game
		if(window.Laya)
			Laya.SoundManager.muted = true;
	});

	gp.sounds.on('unmute', () => {
		// Need to mute all sounds in the game
		if(window.Laya)
			Laya.SoundManager.muted = window.wasMuted;
	});

	// Successful fetched
	gp.variables.on('fetch', () => 
	{
		window.adState = gp.variables.get('currentState');;
		window.timeToShow = gp.variables.get('timeToShow');;
	});
    // Show the ad preloader and wait until it ends
    await gp.ads.showPreloader();
    // Show the sticky banner (then it will update itself)
    gp.ads.showSticky();

    // You can start the game :)

	window.isRussian = gp.language == "ru";
	loadLib("index.js");
	window.timeToShow = 1500;
};

/*YaGames
.init()
.then(ysdk => {
	window.ysdk = ysdk;
	window.isRussian = ysdk.environment.i18n.lang == "ru";
	loadLib("index.js");
	window.timeToShow = 1500;
	return ysdk.getFlags();
}).then(flags => {
	window.adState = parseInt(flags.currentState) == 1;
	window.timeToShow = parseInt(flags.timeToShow);
});
*/
function PromptDialog(msg, duration = 3e3) {
	if (!this.prompt_) {
		this.prompt_ = document.createElement('div');
		this.prompt_.style.cssText = "font-family:siyuan;max-width:80%;min-width:320px;padding:10px 10px 10px 10px;min-height:40px;color: rgb(255, 255, 255);line-height: 20px;text-align:center;border-radius: 4px;position: fixed;top: 40%;left: 50%;transform: translate(-50%, -50%);z-index: 999999;background: rgba(0, 0, 0,.7);font-size: 16px;";
		document.body.appendChild(this.prompt_);
	}
	this.prompt_.innerHTML = msg;
	duration = isNaN(duration) ? 3e3 : duration;
	this.prompt_.style.display = "inline";
	this.prompt_.style.opacity = '1';
	setTimeout(function() {
		var d = 0.5;
		this.prompt_.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';
		this.prompt_.style.opacity = '0';
		this.prompt_.style.display = "none";
	}.bind(this), duration);
}