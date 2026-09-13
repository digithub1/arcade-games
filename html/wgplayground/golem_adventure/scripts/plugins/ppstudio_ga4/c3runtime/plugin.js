"use strict";

{
	const DOM_COMPONENT_ID = "ppstudio_ga4_DOM";
	const C3 = globalThis.C3;
	
	C3.Plugins.ppstudio_ga4 = class ppstudio_ga4_plugin extends globalThis.ISDKPluginBase
	{
		constructor()
		{
			super({ domComponentId: DOM_COMPONENT_ID });
		}
	};
}