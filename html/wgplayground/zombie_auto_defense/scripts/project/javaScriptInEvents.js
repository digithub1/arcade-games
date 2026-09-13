

const scriptsInEvents = {

	async Sobitya_Event1(runtime, localVars)
	{
		if ('onblur' in document) {
		  if (!window.blurFocusHandlersInstalled) {
		    window.addEventListener('blur', function() {
		      let blockerButton = document.createElement('button');
		      blockerButton.style.position = 'fixed';
		      blockerButton.style.top = '0';
		      blockerButton.style.left = '0';
		      blockerButton.style.width = '100%';
		      blockerButton.style.height = '100%';
		      blockerButton.style.zIndex = '9999';
		      blockerButton.style.backgroundColor = 'rgba(0, 0, 0, 0)';
		      blockerButton.style.border = 'none';
		      blockerButton.style.cursor = 'default';
		      document.body.appendChild(blockerButton);
		
		      function removeBlockerButton() {
		        if (blockerButton && blockerButton.parentNode) {
		          blockerButton.parentNode.removeChild(blockerButton);
		        }
		        window.removeEventListener('focus', removeBlockerButton);
		      }
		      window.addEventListener('focus', removeBlockerButton);
		    });
		    window.blurFocusHandlersInstalled = true;
		  }
		}
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
