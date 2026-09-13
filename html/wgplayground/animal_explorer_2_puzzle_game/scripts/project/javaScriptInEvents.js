import * as AnimalsCollection from "./animalsCollection.js";
// Put imports here that you wish to use for script blocks in event sheets, e.g.:

// import * as myModule from "./mymodule.js";

// Then you can use 'myModule' in script blocks in event sheets.

const scriptsInEvents = {

	async Commonlogic_Event12_Act1(runtime, localVars)
	{
		const store = runtime.objects.Game.getFirstInstance().instVars;
		const animalList = AnimalsCollection.arrayList;
		
		if(localVars.moveBack){
			store.SelectedImageIndex -= 1;
			store.ImageName = AnimalsCollection.arrayList[store.SelectedImageIndex];
		} else{
			store.SelectedImageIndex += 1;
			store.ImageName = AnimalsCollection.arrayList[store.SelectedImageIndex];
		}
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
