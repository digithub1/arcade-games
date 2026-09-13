"use strict";

{
	const C3=globalThis.C3;
	C3.Plugins.ppstudio_ga4.Cnds =
	{
		IsTracking(){
			return this._GAEnabled;
		},

		OnInitialized(){
			return true;
		}
	};
}