

const scriptsInEvents = {

	async Make_donut_es_Event9_Act2(runtime, localVars)
	{
		function getMenuPosition(centerX, centerY, radius, frame) {
		    if (frame < 1 || frame > 12) {
		        console.error("Frame must be between 1 and 12.");
		        return null;
		    }
		    
		    const angle = ((frame - 1) * (360 / 12)) * (Math.PI / 180); // Convert to radians
		    const x = centerX + radius * Math.cos(angle);
		    const y = centerY + radius * Math.sin(angle);
		    
		    return { x, y };
		}
		
		// Example usage: Center at (400, 300), radius 100, for frame 5
		const position = getMenuPosition(runtime.viewportWidth/2, runtime.viewportHeight/2, 300, runtime.globalVars.loopindex_var);
		
		runtime.globalVars.position_to_be_placed_x = position.x;
		runtime.globalVars.position_to_be_placed_y = position.y;
		
	},

	async Game_Event28_Act1(runtime, localVars)
	{
		function classifyDonutText(text) {
		    const classifications = [
		        { pattern: /^Which two Donuts are same shape\?$/, number: 1 },
		        { pattern: /^Which Donut doesn't have same shape\?$/, number: 2 },
		        { pattern: /^Which two Donuts are same color\?$/, number: 3 },
		        { pattern: /^Which Donut doesn't have same color\?$/, number: 4 },
		        { pattern: /^Which two Donuts are same color and shape\?$/, number: 5 },
		        { pattern: /^Which Donuts doesn't have same color and shape\?$/, number: 6 }
		    ];
		    
		    for (const { pattern, number } of classifications) {
		        if (pattern.test(text)) {
		            return number;
		        }
		    }
		    
		    return null; // Return null if no match is found
		}
		
		// Example usage
		//console.log(classifyDonutText("Which two Donuts are same shape?")); // 1
		//console.log(classifyDonutText("Which Donut doesn't have same shape?")); // 2
		//console.log(classifyDonutText("Which two Donuts are same color?")); // 3
		//console.log(classifyDonutText("Which Donut doesn't have same color?")); // 4
		//console.log(classifyDonutText("Which two Donuts are same color and shape?")); // 5
		//console.log(classifyDonutText("Which two Donuts are not the same color and shape?")); // 6
		
		
		
		runtime.globalVars.game_type = classifyDonutText(runtime.objects.TheGameInstructionMini.getAllInstances()[0].text);
	},

	async Game_Event41_Act1(runtime, localVars)
	{
		const selected_shape = runtime.objects.donut_selector.getAllInstances()[0];
		
		const all_donut = runtime.objects.donut_sprite.getAllInstances();
		
		let number_of_similar_shape = 0
		
		for (let i = 0; i < all_donut.length; i++) {
		  if (selected_shape.animationName == all_donut[i].animationName){
		  	number_of_similar_shape = number_of_similar_shape+1;
		  }
		}
		
		if(number_of_similar_shape==1){
			runtime.callFunction("show_tick");
		}
		else{
			runtime.callFunction("show_cross");
		}
		
	},

	async Game_Event54_Act1(runtime, localVars)
	{
		const selected_color = runtime.globalVars.Selected_Anime_Index;
		
		const all_donut = runtime.objects.donut_sprite.getAllInstances();
		
		let number_of_similar_color = 0
		
		for (let i = 0; i < all_donut.length; i++) {
		  if (selected_color == all_donut[i].animationFrame){
		  	number_of_similar_color = number_of_similar_color+1;
		  }
		}
		
		
		
		if(number_of_similar_color==1){
			runtime.callFunction("show_tick");
		}
		else{
			runtime.callFunction("show_cross");
		}
		
	},

	async Game_Event67_Act1(runtime, localVars)
	{
		const selected_shape = runtime.objects.donut_selector.getAllInstances()[0];
		
		
		
		const selected_color = runtime.globalVars.Selected_Anime_Index;
		
		const all_donut = runtime.objects.donut_sprite.getAllInstances();
		
		let number_of_similar_shape_color = 0
		
		for (let i = 0; i < all_donut.length; i++) {
		  if ((selected_shape.animationName == all_donut[i].animationName) || (selected_color == all_donut[i].animationFrame)){
		  	number_of_similar_shape_color = number_of_similar_shape_color+1;
		  }
		  
		}
		
		if(number_of_similar_shape_color==1){
			runtime.callFunction("show_tick");
		}
		else{
			runtime.callFunction("show_cross");
		}
		
		
		
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
