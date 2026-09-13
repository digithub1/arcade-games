


const scriptsInEvents = {

	async Maincode_Event109_Act1(runtime, localVars)
	{
		runOnStartup(async runtime =>
		{
		  runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
		});
		
		async function OnBeforeProjectStart(runtime)
		{
		  runtime.addEventListener("tick", () => Tick(runtime));
		  C3.CanvasManager.prototype.GetDocumentFullscreenMode = function () {return "scale-outer";}
		}
		
		function Tick(runtime)
		{
		  C3.CanvasManager.prototype.GetDocumentFullscreenMode = function () {return "scale-outer";}
		}
	},

	async Q1_Event70_Act1(runtime, localVars)
	{
		runOnStartup(async runtime =>
		{
		  runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
		});
		
		async function OnBeforeProjectStart(runtime)
		{
		  runtime.addEventListener("tick", () => Tick(runtime));
		  C3.CanvasManager.prototype.GetDocumentFullscreenMode = function () {return "scale-outer";}
		}
		
		function Tick(runtime)
		{
		  C3.CanvasManager.prototype.GetDocumentFullscreenMode = function () {return "scale-outer";}
		}
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

