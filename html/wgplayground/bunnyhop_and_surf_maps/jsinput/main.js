var joycontfunc = function(s){
	console.log("joycontfunc " + s);
}

function JSInput(){

  const joycont = $('<div class="joystick-container">');
  const joystick = $('<div class="joystick"></div>');
  joycont.append(joystick);

  $(document.body).append(
    joycont
  );
  
  window.joycontfunc = (val) => val == 1 ? joycont.show() : joycont.hide();

  setupJoy(joystick[0], joycont[0]);
  joycont.hide();
  
  let trackedTouchId = null;

  function MouseLoockStart(e) {	
    for (let touch of e.touches) {
      if (touch.clientX > window.innerWidth / 2) {
        trackedTouchId = touch.identifier;
		unityInstance.SendMessage('Player', 'SetTouchX', touch.clientX);
        unityInstance.SendMessage('Player', 'SetTouchY', touch.clientY);
        unityInstance.SendMessage('Player', 'TouchStart');        
        break; // отслеживаем только первый подходящий
      }
    }
	e.preventDefault();
  }

  function MouseLoockMove(e) {
    for (let touch of e.touches) {
      if (touch.identifier === trackedTouchId) {
        unityInstance.SendMessage('Player', 'SetTouchX', touch.clientX);
        unityInstance.SendMessage('Player', 'SetTouchY', touch.clientY);
      }
    }
	e.preventDefault();
  }

  function MouseLoockEnd(e) {
    for (let touch of e.changedTouches) {
      if (touch.identifier === trackedTouchId) {
        unityInstance.SendMessage('Player', 'SetTouchX', touch.clientX);
        unityInstance.SendMessage('Player', 'SetTouchY', touch.clientY);
        unityInstance.SendMessage('Player', 'TouchEnd');
        trackedTouchId = null;
      }
    }
	e.preventDefault();
  }

  document.addEventListener('touchstart', MouseLoockStart, { passive: false });//если вторым пальцем нажать это не сработает
  document.addEventListener('touchmove', MouseLoockMove, { passive: false });
  document.addEventListener('touchend', MouseLoockEnd, { passive: false });
}
