


const scriptsInEvents = {

	async Egame_Event142_Act1(runtime, localVars)
	{
		//finish
	},

	async Egame_Event145_Act2(runtime, localVars)
	{
		// Destroy DrawingCanvas, DriftMarks, Particles, CoinFx, RocketBox, and PoofFx objects
	},

	async Egame_Event145_Act9(runtime, localVars)
	{
		// Set rotation of the Cactus object
	},

	async Egame_Event145_Act11(runtime, localVars)
	{
		// Set collision filter for the Player object
		
	},

	async Egame_Event145_Act13(runtime, localVars)
	{
		// Set angle for the Player and WheelRotator objects based on FinishLine.Angle
		
	},

	async Egame_Event145_Act16(runtime, localVars)
	{
		// Set the XrotZ instance variable for the Karts object
	},

	async Egame_Event145_Act18(runtime, localVars)
	{
		// Set the rotation of the Karts object
	},

	async Eads_Event1_Act1(runtime, localVars)
	{
		if(document.getElementById("loader-wrapper")){
			document.getElementById("loader-wrapper").remove();
		}
		
		if(document.getElementById("loader-title")){
			document.getElementById("loader-title").remove();
		}
	},

	async Eads_Event7_Act1(runtime, localVars)
	{
		//Add your ad function here
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

