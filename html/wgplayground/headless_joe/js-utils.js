var JS_UTILS = "JSPlugin";
var isAppReceivedFocus = false;

window.addEventListener('mousedown', AppInFocusEvent);
window.addEventListener('touchstart', AppInFocusEvent);

console.error = () => {};

function ShowExceptionErrorMessage(e, name)
{
	console.warn('*** CRASH ' + name + ': ' + e);
}

function AppInFocusEvent()
{
	try
	{
		isAppReceivedFocus = true;

		console.log("App in focus!");

		if(typeof window.unityInstance !== 'undefined')
		{
			window.unityInstance.SendMessage(JS_UTILS, "AppReceivedFocusCallback");
		}

		window.removeEventListener('mousedown', AppInFocusEvent);
		window.removeEventListener('touchstart', AppInFocusEvent);
	}
	catch(e)
	{
		ShowExceptionErrorMessage(e, 'AppReceivedFocus');
	}
}

function IsAppReceivedFocus()
{
	return isAppReceivedFocus;
}

function ConsoleLog(msg)
{
	console.log('*** APP LOG: ' + msg);
}