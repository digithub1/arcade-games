

const scriptsInEvents = {

	async Edebug_Event31_Act1(runtime, localVars)
	{

	},

	async Ecat_Event51_Act3(runtime, localVars)
	{
		const all_spriters = runtime.objects.cats_spriter.instances();
		const all_hats = runtime.objects.Hat.getAllInstances();
		var spriters = [];
		var hats = [];
		
		//console.log("STAART");
		all_spriters.forEach((sprite, index) => {
			//sprite.order = sprite.y;
			if (sprite.instVars.location == "field"){
				//console.log("spriter uid " + sprite.uid);
				spriters.push(sprite);
				if (sprite.instVars.hatUID > 0){
						//console.warn("has hat");
						var hat = all_hats.filter(i => i.uid === sprite.instVars.hatUID)[0];
						//console.log("hat uid " + hat.uid);
						hat.instVars.sort = sprite.instVars.sort + 0.01;
						hats.push(hat);
				}
				else{
					//console.error("no hat");
				}
			}
				
			//hats[index].order = sprite.y + 0.0;
		});
		
		//console.log(spriters);
		//console.log(hats);
		
		runtime.sortZOrder([...spriters, ...hats], (a, b) => a.instVars.sort - b.instVars.sort);
		//runtime.sortZOrder([...spriters, ...hats], (a, b) => a.order - b.order);
		//console.log(hats);
	},

	async Ecat_Event51_Act4(runtime, localVars)
	{

	},

	async Esaveload_Event3_Act5(runtime, localVars)
	{

	},

	async Esaveload_Event15_Act5(runtime, localVars)
	{

	}
};

self.C3.ScriptsInEvents = scriptsInEvents;
