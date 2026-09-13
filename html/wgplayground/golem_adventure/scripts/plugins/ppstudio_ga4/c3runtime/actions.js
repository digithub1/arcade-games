"use strict";

{
	const C3=globalThis.C3;
	C3.Plugins.ppstudio_ga4.Acts =
	{
		InitGA(){
			if (!this._GAEnabled)
				this._initAnalytics();
		},
		
		GAAddProperty(property,config){
			if (config=="")
				config="\{\}";
			this._addPropertyId(property,config);
		},
		
		GAScreenView(screen,appname){
			if (screen=="")
			{
				console.error("GA4 Plugin ERROR:\nIncomplete data, 'screen_name' is mandatory");
				return; 
			}

			if (appname=="")
			{
				console.error("GA4 Plugin ERROR:\nIncomplete data, 'app_name' is mandatory");
				return; 
			}

			this._sendEvent("screen_view",{"app_name":appname,"screen_name":screen});
		},

		GASendEvent(event,data){

			if (data=="")
				data={};
			else{
				try{
					let newdata=data.replaceAll("\'","\"");
					data=JSON.parse(newdata);
				}
				catch(e){
					console.error("GA4 Plugin ERROR: \n"+e);
					return; //Data parsing error, skiping event sendout.
				}
			}

			this._sendEvent(event,data);
		},

		GAQueueParams(param,value){
			this._addEventParam(param,value);
		},

		GASendEventAsyncParams(event){
			if (!this._GAEnabled){
				console.warn("GA4 Plugin WARNING: GA4 not initialized, can't send events.");
				return;
			}	

			const msgdata = {
				"event-name":event,
				"event-data":this._params
			}
			
			this._postToDOM("send-event", msgdata);
			this._params={}; //Clearing the params queued
		}
	};
}