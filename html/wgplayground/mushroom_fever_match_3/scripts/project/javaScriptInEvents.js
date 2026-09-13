

const scriptsInEvents = {

	async Translations_Event14_Act11(runtime, localVars)
	{
		const s1 = runtime.getInstanceByUid(localVars.sourceUID);
		const s2 = runtime.getInstanceByUid(localVars.destUID);
		
		s2.horizontalAlign=s1.horizontalAlign;
		s2.verticalAlign=s1.verticalAlign;
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
