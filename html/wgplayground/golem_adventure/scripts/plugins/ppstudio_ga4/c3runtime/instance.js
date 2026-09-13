"use strict";

{
	const DOM_COMPONENT_ID = "ppstudio_ga4_DOM";
	const C3=globalThis.C3;
	
	C3.Plugins.ppstudio_ga4.Instance = class ppstudio_ga4_Instance extends globalThis.ISDKInstanceBase
	{		
		constructor()
		{
			super({ domComponentId: DOM_COMPONENT_ID });
			const properties=this._getInitProperties();

			if (properties){
				let idx=0;
				this._gaID = properties[idx++];
				this._loadtype = properties[idx++];
				this._config = properties[idx++];
				this._GAEnabled=null;
			}

			this._registeredPropertyIDs=[];
			this._params={};
			if (this._loadtype==0){
				this._initAnalytics();
			}
		}
		
		_release()
		{
			super._release();
		}

		
		_saveToJson()
		{
			return {
				// data to be saved for savegames
			};
		}
		
		_loadFromJson(o)
		{
			// load state for savegames
		}

		_addEventParam(param,value){
			if (param!==""&&param!==undefined)
				this._params[param]=value;
		}

		_addPropertyId(property,config){
			if (!this._GAEnabled){
				console.warn("GA4 Plugin WARNING: GA4 not initialized, can't register additional properties");
				return;
			}				

			if (this._registeredPropertyIDs.includes(property)){
				console.warn("GA4 Plugin WARNING: GA4 property ID already registered, initialization skiped");
				return; //If a property is already registered, then skip it.
			}			

			let configParsed=null;
			try {
				configParsed=config.replaceAll("\'","\"")
				configParsed=JSON.parse(configParsed);
			}
			catch(e){
				console.error("GA4 Plugin ERROR: \n"+e);
				return;
			}

			const propertydata={
				"property-id":property,
				"config":configParsed
			};

			this._registeredPropertyIDs.push(property);

			this._postToDOMAsync("add-property-id", propertydata)
					.then((d) => {
							console.log("Property registered!");
						})
					.catch(e=>console.error(e))
		}

		_sendEvent(event,data){
			if (!this._GAEnabled){
				console.warn("GA4 Plugin WARNING: GA4 not initialized, can't send events.");
				return;
			}				

			if (this._GAEnabled){
				const msgdata = {
					"event-name":event,
					"event-data":data
				}
				
				this._postToDOM("send-event", msgdata);
			}
		}

		_initAnalytics(){
			// Get initial state from DOM. Make runtime loading wait for the response.

			let configParsed=null;
			try {
				configParsed=this._config.replaceAll("\'","\"")
				configParsed=JSON.parse(configParsed);
			}
			catch(e){
				console.error("GA4 Plugin ERROR: \n"+e);
				return;
			}

			const data = {
				"gaID":this._gaID,
				"GAEnabled":this._GAEnabled,
				"data":configParsed
			}			

			if (this._gaID!=="")
				this._registeredPropertyIDs.push(this._gaID);

			// First we need to add a LoadPromise to make sure that GA is loaded before continuing
			this.runtime.addLoadPromise(
				this._postToDOMAsync("load", data)
					.then((data) => {
							this._OnGAInitialized(data);
						})
					.catch(e=>console.error("GA4 Plugin ERROR: \n"+e))
			);
		}

		_OnGAInitialized(data){
			this._GAEnabled = data["GAEnabled"];
			this._trigger(C3.Plugins.ppstudio_ga4.Cnds.OnInitialized);
		}
	};
	
}