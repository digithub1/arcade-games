function gpMute(){
  gp.sounds.muteSFX();
}

function gpUnmute(){
  gp.sounds.unmuteSFX();
}

function gpinit(gp){
  window.ndk = null;
  window.gp = gp;
  if(gp != null){
	gp.sounds.on('mute:sfx', () => {
	   unityInstance.SendMessage('Interop', 'mute');
	});
	
	gp.sounds.on('unmute:sfx', () => {
		unityInstance.SendMessage('Interop', 'unmute');
	});

    gp.ads.showSticky();
	
	  if(gp.platform.type == 'YANDEX'){
		  window.ndk = gp.platform.getNativeSDK();
	  }
	  else gp.ads.showPreloader();

		gp.ads.on('fullscreen:close', (success) => {
			if(window.adscb == null) return;
			window.adscb.onClose();
		});

		gp.ads.on('rewarded:close', (success) => {
			if(window.adscb == null) return;
			window.adscb.onClose();
		});

    const adstart = () => {
      unityInstance.SendMessage('Interop', 'PreBanner');
    };

    gp.ads.on('fullscreen:start', adstart);
    gp.ads.on('rewarded:start', adstart);
	}

  window.ysdk = {adv: {
	showFullscreenAdv: function(info){

		const cb = info.callbacks;

		if(gp == null){
			cb.onClose();
			return;
		}

		window.adscb = cb;

		gp.ads.showFullscreen();
	},
	showRewardedVideo: function(info){
		const cb = info.callbacks;

		if(gp == null){
			cb.onRewarded();
			cb.onClose();
			return;
		}

		window.adscb = cb;
		gp.ads.showRewardedVideo();
		// Показать rewarded video, возвращает промис
	}}};

  window.isMobile = gp == null ? true : gp.isMobile;
  if(window.isMobile){
	  JSInput();
	  unityInstance.SendMessage('Main Camera', 'isMobile');
  }
  
  if(gp.sounds.isSFXMuted){
     unityInstance.SendMessage('Main Camera', 'SoundsMuted');
  }

  if(!gp.socials.isSupportsShare || gp.platform.type == 'GAME_DISTRIBUTION'){
     unityInstance.SendMessage('Main Camera', 'ShareNoSupport');
	 window.cancelleads = true;
  }
  else window.cancelleads = false;
  
  window.lang = gp == null ? "ru" : gp.language;
  unityInstance.SendMessage('Main Camera', 'SetLang', lang);
  window.lb = null;

  document.addEventListener("visibilitychange", visibleChange);
  storage(() =>{
    unityInstance.SendMessage('Main Camera', 'SetRawSave', storage.get('main') == null ? '{}' : storage.get('main'));
    unityInstance.SendMessage('Main Camera', 'LoadComplite', gp.platform.type);
    $('canvas').css({'width':'100%','height':'100%'});
  });
}

function InitSDK(id, token){
  const apiurl = 'https://gs.eponesh.com/sdk/gamepush.js?projectId='+id+'&publicToken='+token+'&callback=gpinit';
  const initFunc = function(){
	console.log("gp init");
  }

  const t = document.getElementsByTagName('script')[0];
  const s = document.createElement('script');
  s.src = apiurl;
  s.async = true;
  t.parentNode.insertBefore(s, t);
  s.onload = initFunc;

  s.onerror = function() {
		gpinit(null);
  }
}

function visibleChange(){
	if (document.visibilityState === "hidden") {
      unityInstance.SendMessage('Interop', 'PreBanner');
    } else if(!advscr) {
      unityInstance.SendMessage('Interop', 'PostBanner');
    }
}
