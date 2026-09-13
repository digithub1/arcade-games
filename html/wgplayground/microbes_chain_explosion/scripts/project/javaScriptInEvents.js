

const scriptsInEvents = {

	async Esglobal_Event3_Act1(runtime, localVars)
	{
		const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		let result = '';
		const charactersLength = characters.length;
		for ( let i = 0; i < 6; i++ ) {
		    result+=characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		runtime.globalVars.Username = "player-"+result;
		
	},

	async Esglobal_Event4_Act1(runtime, localVars)
	{
		globalThis.retrieveLeaderboardData(runtime.globalVars.Username);
	},

	async Esglobal_Event5_Act1(runtime, localVars)
	{
		globalThis.updateLeaderboardData(runtime.globalVars.Username ,runtime.globalVars.best)
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
