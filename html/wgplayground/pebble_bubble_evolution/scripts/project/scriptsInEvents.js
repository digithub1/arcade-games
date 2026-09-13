


const scriptsInEvents = {

	async Es_main_Event14_Act6(runtime, localVars)
	{
		
		const pebbles= runtime.objects.Pegs_POP.getAllInstances();
		const LayoutName= parseInt(runtime.layout.name);
		const peggleCount= runtime.objects.LevelStatistic.getFirstInstance();
		const states = [
		  { animation: "1", count: peggleCount.getAt(0,LayoutName,1), },
		  { animation: "2", count: peggleCount.getAt(1,LayoutName,1), },
		  { animation: "3", count: peggleCount.getAt(2,LayoutName,1) },
		  { animation: "4", count: peggleCount.getAt(3,LayoutName,1) },
		]
		function randomizePebblesState(pebbles, states) {
		  const unprocessedIndices = Array.from({ length: pebbles.length }, (_, index) => index);
		  states.forEach((state) => {
		    for (let i = 0; i < state.count; i++) {
		      const randomIndex = unprocessedIndices.splice(Math.floor(Math.random() * unprocessedIndices.length), 1)[0];
		      pebbles[randomIndex].setAnimation(state.animation);
		    }
		  });
		}
		
		randomizePebblesState(pebbles, states);
		
	},

	async Loading_Event8_Act1(runtime, localVars)
	{
		// OK
		const FAPI = await runtime.GamePush.platform.getNativeSDK();
		console.log(FAPI)
		console.log("---OK-OK-OK-OK-OK-OK-OK-OK-OK---")
		console.log(FAPI.invokeUIMethod("setBannerFormat", {vertical_outer: ["right"]}))
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

