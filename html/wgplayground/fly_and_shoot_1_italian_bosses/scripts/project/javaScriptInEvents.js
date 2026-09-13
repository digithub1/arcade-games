

const scriptsInEvents = {

	async Zastavka_Event1211_Act1(runtime, localVars)
	{
		var ysdk = runtime.GamePush.platform.getNativeSDK();
		ysdk.getLeaderboards()
		  .then(lb => {
		    lb.setLeaderboardScore('lbstar', runtime.GamePush.player.get('star'));
		  });
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
