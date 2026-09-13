/*
* @author edapskov
* @copyright 2023 edapskov v 1.0
*/
function Application()
{
	/*
	константы
	*/
	var _CWIDTH = 800;
	var _CHEIGHT = 600;
	var _BGWIDTH = 1200;
	var _BGHEIGHT = 600;
	var _INDENT = 10;
	var _BGCOLOR = "#ffffff";
	var _FONT = "Arial";
	var _TITLE = "BlackPink Chibi Claw Machine";
	var _LINKTOGAME = "https://www.dressupwho.com";
	var _LINKTOFACEBOOK = "https://www.facebook.com/dressupwho";
	var _DELAY = 1;
	var _LANGUAGE = "en";
	/*
	публичные переменные
	*/
	this.copyright = "© DL-Studio, v 1.0";
	/*
	приватные переменные
	*/
	var _stage;
	var _main;
	var _before;
	var _cursor;
	var _shadowScreen;
	var _orientationLock;
	var _debugger;
	var _soundManager;
	var _fullScreenCanvasManager;
	var _information = {
		firstRun:true,
		shownAds:false,
		percentLuck:20,
		percentSuperLuck:50,
		totalPositions:4,
		prevPosition:1,
		nextPosition:2,
		totalOptions:null,
		currentOptions:null,
		currentСhances:null,
		currentRewards:null,
		hintsClawResult:3,
		timeout_id:null,
		interval_id:null,
		options:{
			option_1:{completed:false},
			option_2:{completed:false},
			option_3:{completed:false},
			option_4:{completed:false},
			option_5:{completed:false},
			option_6:{completed:false},
			option_7:{completed:false},
			option_8:{completed:false},
			option_9:{completed:false},
			option_10:{completed:false},
			option_11:{completed:false},
			option_12:{completed:false},
			option_13:{completed:false},
			option_14:{completed:false},
			option_15:{completed:false},
			option_16:{completed:false},
			option_17:{completed:false},
			option_18:{completed:false},
			option_19:{completed:false},
			option_20:{completed:false}
		}
	};
	var _currentMainScreen_mc;
	var _currentBeforeScreen_mc;
	var _action_mc;
	/*
	
	*/
	this.initFunc = function()
	{
		/*
		
		*/
		var canvas = document.getElementById("canvas");
		/*
		
		*/
		var elementTitle = document.getElementsByTagName("title")[0];
		elementTitle.innerHTML = _TITLE;
		/*
		добавляем контекстное меню
		*/
		/*
		try
		{
			var contextmenu = document.createElement("menu");
			document.body.appendChild(contextmenu);
			contextmenu.type = "context";
			contextmenu.id = "contextmenu";
			var menuitem_1 = document.createElement("menuitem");
			contextmenu.appendChild(menuitem_1);
			menuitem_1.innerHTML = "&nbsp;" + _TITLE + "&nbsp;";
			menuitem_1.addEventListener("click", _onClickLogoBtnFunc, false);
			var menuitem_2 = document.createElement("menuitem");
			contextmenu.appendChild(menuitem_2);
			menuitem_2.innerHTML = "&nbsp;" + this.copyright + "&nbsp;";
			menuitem_2.addEventListener("click", _onClickCopyrightMenuItemFunc, false);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
		*/
		/*
		
		*/
		_stage = new createjs.Stage(canvas);
		if(createjs.Touch.isSupported())
		{
			/*
			
			*/
			createjs.Touch.enable(_stage);
			/*
			
			*/
			_stage.addEventListener("stagemousedown", _onStageMouseDownFunc, false);
			_stage.addEventListener("stagemousemove", _onStageMouseMoveFunc, false);
			_stage.addEventListener("stagemouseup", _onStageMouseUpFunc, false);
		}
		else
		{
			/*
			
			*/
			_stage.enableMouseOver(10);
			/*
			
			*/
			_stage.addEventListener("stagemousemove", _onStageMouseMoveFunc, false);
		}
		/*
		
		*/
		createjs.Ticker.addEventListener("tick", _onTickFunc, false);
		createjs.Ticker.framerate = lib.properties.fps;
		/*
		
		*/
		var container = new createjs.Container();
		var backgroundContainer = new createjs.Shape();
		backgroundContainer.graphics.beginFill(_BGCOLOR);
		backgroundContainer.graphics.drawRect(-(_BGWIDTH - _CWIDTH) / 2, 0, _BGWIDTH, _CHEIGHT);
		backgroundContainer.graphics.endFill();
		container.addChild(backgroundContainer);
		_stage.addChild(container);
		/*
		
		*/
		var maskContainer = new createjs.Shape();
		maskContainer.graphics.beginFill(_BGCOLOR);
		maskContainer.graphics.drawRect(-(_BGWIDTH - _CWIDTH) / 2, 0, _BGWIDTH, _CHEIGHT);
		maskContainer.graphics.endFill();
		maskContainer.cache(-(_BGWIDTH - _CWIDTH) / 2, 0, _BGWIDTH, _CHEIGHT);
		maskContainer.mouseChildren = false;
		maskContainer.mouseEnabled = false;
		container.mask = maskContainer;
		/*
		контейнер для основной программы
		*/
		_main = new createjs.Container();
		container.addChild(_main);
		/*
		
		*/
		_soundManager = new Edapskov_SoundManager();
		_soundManager.initFunc();
		_soundManager.setInvisibleFunc(false);
		//_soundManager.setVolumeFunc(0.4);
		/*
		
		*/
		_fullScreenCanvasManager = new Edapskov_FullScreenCanvasManager();
		_fullScreenCanvasManager.initFunc();
		/*
		контейнер для вспомогательных окон
		*/
		_before = new createjs.Container();
		container.addChild(_before);
		/*
		
		*/
		_cursor = new createjs.Container();
		container.addChild(_cursor);
		_cursorUpdateFunc();
		/*
		
		*/
		_shadowScreen = new createjs.Container();
		container.addChild(_shadowScreen);
		// затемнение
		var shadowContainer = new createjs.Container();
		_shadowScreen.addChild(shadowContainer);
		shadowContainer.name = "shadowContainer";
		var shadowContainer_part_1 = new createjs.Shape();
		shadowContainer_part_1.graphics.beginFill(_BGCOLOR);
		shadowContainer_part_1.graphics.drawRect(-(_BGWIDTH - _CWIDTH) / 2, 0, _BGWIDTH, _CHEIGHT);
		shadowContainer_part_1.graphics.endFill();
		shadowContainer.addChild(shadowContainer_part_1);
		try
		{
			var shadowContainer_part_2 = new createjs.Shape();
			shadowContainer_part_2.graphics.beginRadialGradientFill([_BGCOLOR, _BGCOLOR], [0, 1], _BGWIDTH / 2, _CHEIGHT / 2, 0, _BGWIDTH / 2, _CHEIGHT / 2, (_BGWIDTH + _CHEIGHT) / 2);
			shadowContainer_part_2.graphics.drawRect(-(_BGWIDTH - _CWIDTH) / 2, 0, _BGWIDTH, _CHEIGHT);
			shadowContainer_part_2.graphics.endFill();
			shadowContainer.addChild(shadowContainer_part_2);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
		shadowContainer.cache(-(_BGWIDTH - _CWIDTH) / 2, 0, _BGWIDTH, _CHEIGHT);
		// контейнер для анимации перехода
		var curtainContainer = new createjs.Container();
		_shadowScreen.addChild(curtainContainer);
		curtainContainer.name = "curtainContainer";
		// делаем некликабельным
		_shadowScreen.mouseChildren = false;
		_shadowScreen.mouseEnabled = false;
		/*
		контейнер для вывода сообщения о запрете поворота экрана
		*/
		_orientationLock = new createjs.Container();
		container.addChild(_orientationLock);
		/*
		
		*/
		_debugger = new Edapskov_Debugger();
		_debugger.initFunc(container, _CWIDTH, _CHEIGHT);
		/*
		
		*/
		window.addEventListener("keydown", _onKeyPressFunc, false);
		window.addEventListener("resize", _onResizeWindowFunc, false);
		window.addEventListener("orientationchange", _onResizeWindowFunc, false);
		_onResizeWindowFunc();
		/*
		понакупают айфончиков...
		*/
		_initOrientationChangeIphoneFunc();
		/*
		
		*/
		_animationTransitionBetweenScenesFunc(_preloaderFunc);
	}
	/*
	
	*/
	this.stopAppFunc = function()
	{
		_stopAppFunc();
	}
	this.playAppFunc = function()
	{
		_playAppFunc();
	}
	this.addSoundFunc = function(nameSound_str, initVolume_num)
	{
		if(initVolume_num === undefined)
		{
			initVolume_num = 1;
		}
		_soundManager.addSoundFunc(nameSound_str, 0, 0, 0, initVolume_num, 0);
	}
	/*
	
	*/
	function _onResizeWindowFunc()
	{
		/*
		
		*/
		var innerWidth_num = window.innerWidth;
		var innerHeight_num = window.innerHeight;
		var devicePixelRatio_num = 1;
		if(window.devicePixelRatio)
		{
			devicePixelRatio_num = window.devicePixelRatio;
		}
		/*
		
		*/
		var ratio_num = _CWIDTH / _CHEIGHT;
		var windowRatio_num = innerWidth_num / innerHeight_num;
		var scale_num = innerWidth_num / _CWIDTH;
		if (windowRatio_num > ratio_num)
		{
			scale_num = innerHeight_num / _CHEIGHT;
		}
		/*
		костыль, ограничивающий масштабирование в Firefox
		*/
		var userAgent_str = navigator.userAgent.toLowerCase();
		if(userAgent_str.indexOf("firefox") >= 0)
		{
			if(scale_num > 1)
			{
				scale_num = 1;
			}
		}
		/*
		
		*/
		_stage.canvas.width = Math.round(innerWidth_num * devicePixelRatio_num);
		_stage.canvas.height = Math.round(innerHeight_num * devicePixelRatio_num);
		/*
		
		*/
		_stage.canvas.style.width = innerWidth_num + "px";
		_stage.canvas.style.height = innerHeight_num + "px";
		/*
		
		*/
		_stage.scaleX = scale_num * devicePixelRatio_num;
		_stage.scaleY = scale_num * devicePixelRatio_num;
		/*
		
		*/
		_stage.x = Math.round(((innerWidth_num - (_CWIDTH * scale_num)) / 2) * devicePixelRatio_num);
		_stage.y = Math.round(((innerHeight_num - (_CHEIGHT * scale_num)) / 2) * devicePixelRatio_num);
		/*
		выводим сообщение о запрете поворота экрана
		*/
		_clearContainerFunc(_orientationLock);
		if(!_isLandscapeOrientationFunc())
		{
			if(lib.OrientationLockScreen)
			{
				var orientationLock_mc = new lib.OrientationLockScreen();
				_orientationLock.addChild(orientationLock_mc);
				orientationLock_mc.gotoAndStop(0);
				if(orientationLock_mc.screen_mc)
				{
					orientationLock_mc.screen_mc.gotoAndStop(0);
					orientationLock_mc.screen_mc.addEventListener("click", _onClickScreenMcOrientationLockScreenFunc, false);
				}
			}
		}
		/*
		
		*/
		_stage.update();
	}
	function _isLandscapeOrientationFunc()
	{
		/*
		
		*/
		var landscapeOrientation_bool = true;
		var platform_str = navigator.platform.toLowerCase();
		/*
		
		*/
		if(window.screen.orientation)
		{
			if(window.screen.orientation.type)
			{
				if(window.screen.orientation.type == "portrait-primary" || window.screen.orientation.type == "portrait-secondary")
				{
					landscapeOrientation_bool = false;
				}
			}
		}
		/*
		понакупают айфончиков...
		*/
		if(platform_str == "iphone" || platform_str == "ipad")
		{
			
		}
		/*
		
		*/
		return landscapeOrientation_bool;
	}
	function _onClickScreenMcOrientationLockScreenFunc(event)
	{
		
	}
	/*
	понакупают айфончиков...
	*/
	function _initOrientationChangeIphoneFunc()
	{
		var platform_str = navigator.platform.toLowerCase();
		if(platform_str == "iphone" || platform_str == "ipad")
		{
			_information.windowInnerWidth_num = window.innerWidth;
			setInterval(_checkOrientationChangeIphoneFunc, 100);
		}
	}
	function _checkOrientationChangeIphoneFunc()
	{
		if(_information.windowInnerWidth_num != window.innerWidth)
		{
			_information.windowInnerWidth_num = window.innerWidth;
			_onResizeWindowFunc();
		}
	}
	/*
	==============================================================================================================
	Прелоадер
	==============================================================================================================
	*/
	function _preloaderFunc()
	{
		/*
		
		*/
		_clearContainerFunc(_main);
		_clearContainerFunc(_before);
		/*
		
		*/
		_currentMainScreen_mc = new lib.PreloaderScreen();
		_main.addChild(_currentMainScreen_mc);
		_currentMainScreen_mc.gotoAndStop(0);
		/*
		
		*/
		_currentMainScreen_mc.play_mc.visible = false;
		/*
		
		*/
		_currentMainScreen_mc.indicator_mc.gotoAndStop(0);
		_currentMainScreen_mc.indicator_mc.mouseChildren = false;
		_currentMainScreen_mc.indicator_mc.mouseEnabled = false;
		_currentMainScreen_mc.indicator_mc.indicator_mc.loop = false;
		_currentMainScreen_mc.indicator_mc.indicator_mc.gotoAndStop(0);
		/*
		
		*/
		_currentMainScreen_mc.animation_mc.gotoAndPlay(0);
		_currentMainScreen_mc.animation_mc.loop = false;
		_currentMainScreen_mc.animation_mc.mouseChildren = true;
		_currentMainScreen_mc.animation_mc.mouseEnabled = true;
		/*
		
		*/
		_currentMainScreen_mc.animation_mc.logo_mc.gotoAndPlay(0);
		_currentMainScreen_mc.animation_mc.logo_mc.mouseChildren = true;
		_currentMainScreen_mc.animation_mc.logo_mc.mouseEnabled = true;
		_currentMainScreen_mc.animation_mc.logo_mc.cursor = "pointer";
		_currentMainScreen_mc.animation_mc.logo_mc.addEventListener("click", _onClickPreloaderBtnFunc, false);
		/*
		
		*/
		_currentMainScreen_mc.bg_mc.gotoAndStop(0);
		_currentMainScreen_mc.bg_mc.cache(-(_BGWIDTH - _CWIDTH) / 2, 0, _BGWIDTH, _CHEIGHT);
		/*
		
		*/
		var loadQueue = new createjs.LoadQueue();
		loadQueue.installPlugin(createjs.Sound);
		createjs.Sound.alternateExtensions = ["mp3"];
		/*
		слушаем события
		*/
		loadQueue.addEventListener("error", _onErrorLoadManifestFunc, false);
		loadQueue.addEventListener("progress", _onProgressLoadManifestFunc, false);
		loadQueue.addEventListener("fileload", _onFileLoadManifestFunc, false);
		loadQueue.addEventListener("complete", _onCompleteLoadManifestFunc, false);
		/*
		создаём очередь на загрузку, но запрещаем саму загрузку
		*/
		loadQueue.loadManifest(lib.properties.manifest, false);
		/*
		загружаем звук
		*/
		loadQueue.loadFile({id:"background_sound", src:"library/sounds/background_sound.ogg"});
		loadQueue.loadFile({id:"click_sound", src:"library/sounds/click_sound.ogg"});
		loadQueue.loadFile({id:"hit_sound", src:"library/sounds/hit_sound.ogg"});
		loadQueue.loadFile({id:"machine_sound", src:"library/sounds/machine_sound.ogg"});
		loadQueue.loadFile({id:"off_sound", src:"library/sounds/off_sound.ogg"});
		loadQueue.loadFile({id:"luck_sound", src:"library/sounds/luck_sound.ogg"});
		loadQueue.loadFile({id:"squeak_sound", src:"library/sounds/squeak_sound.ogg"});
		/*
		добавляем в очередь кое-что из своего
		*/
		
		/*
		запускаем загрузку
		*/
		loadQueue.load();
	}
	function _onErrorLoadManifestFunc(event)
	{
		trace("Could not load: " + event.data.src + " !", 2);
	}
	function _onProgressLoadManifestFunc(event)
	{
		/*
		
		*/
		_currentMainScreen_mc = _main.getChildAt(0);
		_currentMainScreen_mc.gotoAndStop(0);
		/*
		
		*/
		_currentMainScreen_mc.indicator_mc.gotoAndStop(0);
		var totalFrames_num = _currentMainScreen_mc.indicator_mc.indicator_mc.totalFrames;
		var currentFrame_num = Math.floor(totalFrames_num *  event.progress);
		if(currentFrame_num > totalFrames_num)
		{
			currentFrame_num = totalFrames_num;
		}
		else if(currentFrame_num < 0)
		{
			currentFrame_num = totalFrames_num;
		}
		_currentMainScreen_mc.indicator_mc.indicator_mc.gotoAndStop(currentFrame_num);
	}
	function _onFileLoadManifestFunc(event)
	{
		if (event.item.type == "image")
		{
			images[event.item.id] = event.result;
		}
	}
	function _onCompleteLoadManifestFunc(event)
	{
		/*
		
		*/
		var queue = event.target;
		var ssMetadata = lib.ssMetadata;
		for(i = 0; i < ssMetadata.length; i++)
		{
			ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
		}
		/*
		
		*/
		_currentMainScreen_mc = _main.getChildAt(0);
		/*
		
		*/
		var totalFrames_num = _currentMainScreen_mc.animation_mc.totalFrames;
		var currentFrame_num = _currentMainScreen_mc.animation_mc.currentFrame;
		if(currentFrame_num < totalFrames_num)
		{
			setTimeout(_onCompleteLoadAppFunc, ((totalFrames_num - currentFrame_num) / lib.properties.fps) * 1000);
		}
		else
		{
			_onCompleteLoadAppFunc();
		}
	}
	/*
	
	*/
	function _onCompleteLoadAppFunc()
	{
		/*
		
		*/
		_currentMainScreen_mc = _main.getChildAt(0);
		_currentMainScreen_mc.gotoAndStop(0);
		/*
		
		*/
		createjs.Tween.get(_currentMainScreen_mc.indicator_mc).wait(0).to({visible:false, alpha:0.01, scaleX:0.1, scaleY:0.1}, _DELAY * 1000, createjs.Ease.bounceInOut);
		/*
		
		*/
		_currentMainScreen_mc.play_mc.alpha = 0.01;
		_currentMainScreen_mc.play_mc.scaleX = 0.1;
		_currentMainScreen_mc.play_mc.scaleY = 0.1;
		_currentMainScreen_mc.play_mc.visible = true;
		_currentMainScreen_mc.play_mc.cursor = "pointer";
		_currentMainScreen_mc.play_mc.mouseChildren = false;
		_currentMainScreen_mc.play_mc.mouseEnabled = true;
		_currentMainScreen_mc.play_mc.addEventListener("click", _onClickPlayAppBtnFunc, false);
		createjs.Tween.get(_currentMainScreen_mc.play_mc).wait(_DELAY * 1000).to({alpha:1, scaleX:1, scaleY:1}, _DELAY * 1000, createjs.Ease.bounceInOut);
		/*
		
		*/
		var bodyCursor_mc = new lib.Cursor();
		bodyCursor_mc.name = "body_mc";
		_cursor.addChild(bodyCursor_mc);
		_cursor.mouseChildren = false;
		_cursor.mouseEnabled = false;
	}
	/*
	
	*/
	function _onClickPlayAppBtnFunc(event)
	{
		/*
		
		*/
		_soundManager.addSoundFunc("background_sound", 0, 0, -1, 0.04, 0);
		/*
		
		*/
		_animationTransitionBetweenScenesFunc(_welcomeFunc);
	}
	/*
	==============================================================================================================
	Окно приветствия
	==============================================================================================================
	*/
	function _welcomeFunc()
	{
		/*
		
		*/
		_initInformationFunc();
		/*
		СОХРАНЕНИЕ ИГРЫ
		*/
		_loadGameFunc();
		/*
		
		*/
		_clearContainerFunc(_main);
		_clearContainerFunc(_before);
		/*
		
		*/
		_currentMainScreen_mc = new lib.WelcomeScreen();
		_main.addChild(_currentMainScreen_mc);
		_currentMainScreen_mc.gotoAndStop(0);
		/*
		
		*/
		_currentMainScreen_mc.logo_btn.addEventListener("click", _onClickLogoBtnFunc, false);
		/*
		
		*/
		if(_currentMainScreen_mc.credits_btn)
		{
			_currentMainScreen_mc.credits_btn.addEventListener("click", _onClickCreditsBtnFunc, false);
		}
		/*
		
		*/
		if(_currentMainScreen_mc.instruction_btn)
		{
			_currentMainScreen_mc.instruction_btn.addEventListener("click", _onClickInstructionBtnFunc, false);
		}
		/*
		
		*/
		if(_currentMainScreen_mc.moreGames_btn)
		{
			_currentMainScreen_mc.moreGames_btn.addEventListener("click", _onClickMoreGamesBtnFunc, false);
		}
		/*
		
		*/
		_currentMainScreen_mc.play_btn.addEventListener("click", _onClickPlayBtnFunc, false);
		/*
		
		*/
		if(_currentMainScreen_mc.bg)
		{
			_currentMainScreen_mc.bg.cache(-(_BGWIDTH - _CWIDTH) / 2, 0, _BGWIDTH, _CHEIGHT);
		}
		/*
		
		*/
		_soundManager.updateSoundMcFunc(_currentMainScreen_mc);
		/*
		
		*/
		_fullScreenCanvasManager.updateFullScreenMcFunc(_currentMainScreen_mc);
		/*
		
		*/
		_cursorUpdateFunc();
	}
	/*
	
	*/
	function _onClickPlayBtnFunc(event)
	{
		/*
		
		*/
		var point_obj = event.currentTarget.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		event.currentTarget.removeEventListener("click", _onClickPlayBtnFunc, false);
		/*
		
		*/
		_addAdsFunc();
		/*
		
		*/
		_animationTransitionBetweenScenesFunc(_gameFunc, 0, 1, null, true);
	}
	function _onClicknNewGameBtnFunc(event)
	{
		/*
		
		*/
		var point_obj = event.currentTarget.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		event.currentTarget.removeEventListener("click", _onClicknNewGameBtnFunc, false);
		/*
		
		*/
		if(_information.currentOptions >= _information.totalOptions)
		{
			_resetInformationFunc();
		}
		/*
		
		*/
		_addAdsFunc();
		/*
		
		*/
		_animationTransitionBetweenScenesFunc(_gameFunc, 0, 1, null, true);
	}
	/*
	
	*/
	function _onClickCreditsBtnFunc(event)
	{
		/*
		
		*/
		var point_obj = event.currentTarget.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		_copyrightFunc();
	}
	/*
	
	*/
	function _onClickInstructionBtnFunc(event)
	{
		/*
		
		*/
		var point_obj = event.currentTarget.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		_animationTransitionBetweenScenesFunc(_simpleScreenFunc, 0, _DELAY / 2, ["InstructionScreen"]);
	}
	/*
	
	*/
	function _initInformationFunc()
	{
		/*
		
		*/
		if(_information.timeout_id != null)
		{
			clearTimeout(_information.timeout_id);
		}
		if(_information.interval_id != null)
		{
			clearInterval(_information.interval_id);
		}
		/*
		
		*/
		if(_information.percentLuck < 0)
		{
			_information.percentLuck = 1;
		}
		if(_information.percentLuck >= 100)
		{
			_information.percentLuck = 99;
		}
		/*
		
		*/
		_information.totalOptions = 0;
		_information.currentOptions = 0;
		/*
		
		*/
		for(var prop in _information.options)
		{
			if(_information.options.hasOwnProperty(prop))
			{
				_information.totalOptions++;
			}
		}
		/*
		
		*/
		_updateCurrentOptionsFunc();
		/*
		
		*/
		_information.currentСhances = new Array();
		_information.currentRewards = new Array();
	}
	function _resetInformationFunc()
	{
		/*
		
		*/
		_information.shownAds = false;
		/*
		
		*/
		_information.currentOptions = 0;
		/*
		
		*/
		for(var prop in _information.options)
		{
			if(_information.options.hasOwnProperty(prop))
			{
				_information.options[prop].completed = false;
			}
		}
	}
	/*
	==============================================================================================================
	Game Screen
	==============================================================================================================
	*/
	function _gameFunc()
	{
		/*
		
		*/
		if(_information.timeout_id != null)
		{
			clearTimeout(_information.timeout_id);
		}
		if(_information.interval_id != null)
		{
			clearInterval(_information.interval_id);
		}
		/*
		
		*/
		_clearContainerFunc(_main);
		_clearContainerFunc(_before);
		/*
		
		*/
		_currentMainScreen_mc = new lib.GameScreen();
		_main.addChild(_currentMainScreen_mc);
		_currentMainScreen_mc.gotoAndStop(0);
		/*
		
		*/
		_currentMainScreen_mc.logo_btn.addEventListener("click", _onClickLogoBtnFunc, false);
		/*
		
		*/
		if(_currentMainScreen_mc.moreGames_btn)
		{
			_currentMainScreen_mc.moreGames_btn.addEventListener("click", _onClickMoreGamesBtnFunc, false);
		}
		/*
		
		*/
		_beginGameScreenFunc(true);
		/*
		
		*/
		if(_currentMainScreen_mc.bg)
		{
			_currentMainScreen_mc.bg.cache(-(_BGWIDTH - _CWIDTH) / 2, 0, _BGWIDTH, _CHEIGHT);
		}
		/*
		
		*/
		_soundManager.updateSoundMcFunc(_currentMainScreen_mc);
		/*
		
		*/
		_fullScreenCanvasManager.updateFullScreenMcFunc(_currentMainScreen_mc);
		/*
		
		*/
		_cursorUpdateFunc();
	}
	/*
	
	*/
	function _beginGameScreenFunc(firstRun_bool)
	{
		/*
		
		*/
		if(firstRun_bool !== undefined)
		{
			firstRun_bool = Boolean(firstRun_bool);
		}
		else
		{
			firstRun_bool = false;
		}
		/*
		
		*/
		if(_currentMainScreen_mc.next_btn)
		{
			if(firstRun_bool)
			{
				_currentMainScreen_mc.next_btn.addEventListener("click", _onClickNextBtnGameScreenFunc, false);
			}
			_updateNextBtnGameScreenFunc(true);
		}
		else
		{
			trace("Хде next_btn ?!");
		}
		/*
		
		*/
		if(_currentMainScreen_mc.superluck_mc)
		{
			if(firstRun_bool)
			{
				/*
				
				*/
				_currentMainScreen_mc.superluck_mc.gotoAndStop(0);
				/*
				
				*/
				if(Number(_information.percentLuck) < Number(_information.percentSuperLuck))
				{
					_currentMainScreen_mc.superluck_mc.visible = true;
					_currentMainScreen_mc.superluck_mc.mouseEnabled = true;
					_currentMainScreen_mc.superluck_mc.mouseChildren = false;
					_currentMainScreen_mc.superluck_mc.cursor = "pointer";
					_currentMainScreen_mc.superluck_mc.addEventListener("click", _onClickSuperLuckFunc, false);
				}
				else
				{
					_currentMainScreen_mc.superluck_mc.visible = false;
					_currentMainScreen_mc.superluck_mc.mouseEnabled = false;
					_currentMainScreen_mc.superluck_mc.mouseChildren = false;
				}
			}
		}
		else
		{
			trace("Хде next_btn ?!");
		}
		/*
		
		*/
		if(_currentMainScreen_mc.popUp_mc)
		{
			/*
			
			*/
			if(firstRun_bool)
			{
				_currentMainScreen_mc.popUp_mc.gotoAndStop(0);
				_currentMainScreen_mc.popUp_mc.mouseEnabled = false;
				_currentMainScreen_mc.popUp_mc.mouseChildren = false;
			}
			_currentMainScreen_mc.popUp_mc.visible = false;
			/*
			
			*/
			if(_currentMainScreen_mc.popUp_mc.body_mc)
			{
				if(firstRun_bool)
				{
					/*
					
					*/
					_currentMainScreen_mc.popUp_mc.body_mc.gotoAndStop(0);
					/*
					
					*/
					if(_currentMainScreen_mc.popUp_mc.body_mc.frame_0_mc)
					{
						_currentMainScreen_mc.popUp_mc.body_mc.frame_0_mc.gotoAndStop(0);
					}
				}
			}
			else
			{
				trace("Хде popUp_mc.body_mc ?!");
			}
		}
		else
		{
			trace("Хде popUp_mc ?!");
		}
		/*
		
		*/
		if(_currentMainScreen_mc.machine_mc)
		{
			/*
			
			*/
			if(firstRun_bool)
			{
				_currentMainScreen_mc.machine_mc.gotoAndStop(0);
			}
			/*
			
			*/
			_updateBtnsMachineGameScreenFunc(false);
			/*
			
			*/
			if(_currentMainScreen_mc.machine_mc.clawResult_mc)
			{
				if(firstRun_bool)
				{
					/*
					
					*/
					_currentMainScreen_mc.machine_mc.clawResult_mc.gotoAndStop(0);
					/*
					
					*/
					if(_currentMainScreen_mc.machine_mc.clawResult_mc.hint_mc)
					{
						_currentMainScreen_mc.machine_mc.clawResult_mc.hint_mc.gotoAndStop(0);
						_currentMainScreen_mc.machine_mc.clawResult_mc.hint_mc.gotoAndPlay(0);
						_currentMainScreen_mc.machine_mc.clawResult_mc.hint_mc.mouseChildren = false;
						_currentMainScreen_mc.machine_mc.clawResult_mc.hint_mc.mouseEnabled = false;
						_currentMainScreen_mc.machine_mc.clawResult_mc.hint_mc.visible = false;
					}
				}
			}
			else
			{
				trace("Хде clawResult_mc ?!");
			}
			/*
			
			*/
			if(_currentMainScreen_mc.machine_mc.animation_mc)
			{
				if(firstRun_bool)
				{
					/*
					
					*/
					_currentMainScreen_mc.machine_mc.animation_mc.gotoAndStop(0);
					_currentMainScreen_mc.machine_mc.animation_mc.gotoAndStop("luck_" + Number(_information.prevPosition));
					/*
					
					*/
					if(_currentMainScreen_mc.machine_mc.animation_mc["frame_" + Number(_currentMainScreen_mc.machine_mc.animation_mc.currentFrame) + "_mc"])
					{
						_action_mc = _currentMainScreen_mc.machine_mc.animation_mc["frame_" + Number(_currentMainScreen_mc.machine_mc.animation_mc.currentFrame) + "_mc"];
						_action_mc.gotoAndStop(0);
					}
				}
			}
			else
			{
				trace("Хде animation_mc ?!");
			}
		}
		else
		{
			trace("Хде machine_mc ?!");
		}
	}
	/*
	
	*/
	function _updateBtnsMachineGameScreenFunc(block_bool)
	{
		/*
		
		*/
		if(block_bool !== undefined)
		{
			block_bool = Boolean(block_bool);
		}
		else
		{
			block_bool = false;
		}
		/*
		
		*/
		if(_currentMainScreen_mc.machine_mc.clawRun_mc)
		{
			/*
			
			*/
			_currentMainScreen_mc.machine_mc.clawRun_mc.gotoAndStop(0);
			/*
			
			*/
			if(block_bool)
			{
				_currentMainScreen_mc.machine_mc.clawRun_mc.gotoAndStop(1);
				_currentMainScreen_mc.machine_mc.clawRun_mc.mouseEnabled = false;
				_currentMainScreen_mc.machine_mc.clawRun_mc.mouseChildren = false;
				_currentMainScreen_mc.machine_mc.clawRun_mc.cursor = "default";
				_currentMainScreen_mc.machine_mc.clawRun_mc.removeEventListener("click", _onClickClawRunGameScreenFunc, false);
			}
			else
			{
				_currentMainScreen_mc.machine_mc.clawRun_mc.mouseEnabled = true;
				_currentMainScreen_mc.machine_mc.clawRun_mc.mouseChildren = false;
				_currentMainScreen_mc.machine_mc.clawRun_mc.cursor = "pointer";
				_currentMainScreen_mc.machine_mc.clawRun_mc.addEventListener("click", _onClickClawRunGameScreenFunc, false);
			}
		}
		/*
		
		*/
		if(_currentMainScreen_mc.machine_mc.clawLeft_mc)
		{
			/*
			
			*/
			_currentMainScreen_mc.machine_mc.clawLeft_mc.gotoAndStop(0);
			/*
			
			*/
			if(block_bool)
			{
				_currentMainScreen_mc.machine_mc.clawLeft_mc.gotoAndStop(1);
				_currentMainScreen_mc.machine_mc.clawLeft_mc.mouseEnabled = false;
				_currentMainScreen_mc.machine_mc.clawLeft_mc.mouseChildren = false;
				_currentMainScreen_mc.machine_mc.clawLeft_mc.cursor = "default";
				_currentMainScreen_mc.machine_mc.clawLeft_mc.removeEventListener("click", _onClickClawLeftGameScreenFunc, false);
			}
			else
			{
				if(_information.prevPosition > 1)
				{
					_currentMainScreen_mc.machine_mc.clawLeft_mc.mouseEnabled = true;
					_currentMainScreen_mc.machine_mc.clawLeft_mc.mouseChildren = false;
					_currentMainScreen_mc.machine_mc.clawLeft_mc.cursor = "pointer";
					_currentMainScreen_mc.machine_mc.clawLeft_mc.addEventListener("click", _onClickClawLeftGameScreenFunc, false);
				}
				else
				{
					_currentMainScreen_mc.machine_mc.clawLeft_mc.gotoAndStop(1);
					_currentMainScreen_mc.machine_mc.clawLeft_mc.mouseEnabled = false;
					_currentMainScreen_mc.machine_mc.clawLeft_mc.mouseChildren = false;
					_currentMainScreen_mc.machine_mc.clawLeft_mc.cursor = "default";
					_currentMainScreen_mc.machine_mc.clawLeft_mc.removeEventListener("click", _onClickClawLeftGameScreenFunc, false);
				}
			}
		}
		/*
		
		*/
		if(_currentMainScreen_mc.machine_mc.clawRight_mc)
		{
			/*
			
			*/
			_currentMainScreen_mc.machine_mc.clawRight_mc.gotoAndStop(0);
			/*
			
			*/
			if(block_bool)
			{
				_currentMainScreen_mc.machine_mc.clawRight_mc.gotoAndStop(1);
				_currentMainScreen_mc.machine_mc.clawRight_mc.mouseEnabled = false;
				_currentMainScreen_mc.machine_mc.clawRight_mc.mouseChildren = false;
				_currentMainScreen_mc.machine_mc.clawRight_mc.cursor = "default";
				_currentMainScreen_mc.machine_mc.clawRight_mc.removeEventListener("click", _onClickClawRightGameScreenFunc, false);
			}
			else
			{
				if(_information.prevPosition < _information.totalPositions)
				{
					_currentMainScreen_mc.machine_mc.clawRight_mc.mouseEnabled = true;
					_currentMainScreen_mc.machine_mc.clawRight_mc.mouseChildren = false;
					_currentMainScreen_mc.machine_mc.clawRight_mc.cursor = "pointer";
					_currentMainScreen_mc.machine_mc.clawRight_mc.addEventListener("click", _onClickClawRightGameScreenFunc, false);
				}
				else
				{
					_currentMainScreen_mc.machine_mc.clawRight_mc.gotoAndStop(1);
					_currentMainScreen_mc.machine_mc.clawRight_mc.mouseEnabled = false;
					_currentMainScreen_mc.machine_mc.clawRight_mc.mouseChildren = false;
					_currentMainScreen_mc.machine_mc.clawRight_mc.cursor = "default";
					_currentMainScreen_mc.machine_mc.clawRight_mc.removeEventListener("click", _onClickClawRightGameScreenFunc, false);
				}
			}
		}
	}
	function _onClickClawRunGameScreenFunc(event)
	{
		/*
		
		*/
		_soundManager.addSoundFunc("machine_sound", 0, 0, 0, 1);
		/*
		
		*/
		_updateBtnsMachineGameScreenFunc(true);
		/*
		
		*/
		if(_information.currentСhances.length <= 0)
		{
			_updateCurrentСhancesFunc();
		}
		/*
		
		*/
		var currentСhance_bool = _information.currentСhances.splice(Number(_information.currentСhances.length - 1), 1)[0];
		var timelineControl;
		if(currentСhance_bool)
		{
			/*
			
			*/
			_currentMainScreen_mc.machine_mc.animation_mc.gotoAndStop("luck_" + Number(_information.prevPosition));
			/*
			
			*/
			if(_currentMainScreen_mc.machine_mc.animation_mc["frame_" + Number(_currentMainScreen_mc.machine_mc.animation_mc.currentFrame) + "_mc"])
			{
				_action_mc = _currentMainScreen_mc.machine_mc.animation_mc["frame_" + Number(_currentMainScreen_mc.machine_mc.animation_mc.currentFrame) + "_mc"];
				_action_mc.gotoAndStop(0);
				_action_mc.loop = false;
				timelineControl = new Edapskov_TimelineControl(_action_mc);
				timelineControl.gotoEndFunc();
				timelineControl.addEventListener("completed_timeline", _onCompletedTimelineLuckGameScreenFunc, false);
			}
		}
		else
		{
			/*
			
			*/
			_currentMainScreen_mc.machine_mc.animation_mc.gotoAndStop("fail_" + Number(_information.prevPosition));
			/*
			
			*/
			if(_currentMainScreen_mc.machine_mc.animation_mc["frame_" + Number(_currentMainScreen_mc.machine_mc.animation_mc.currentFrame) + "_mc"])
			{
				_action_mc = _currentMainScreen_mc.machine_mc.animation_mc["frame_" + Number(_currentMainScreen_mc.machine_mc.animation_mc.currentFrame) + "_mc"];
				_action_mc.gotoAndStop(0);
				_action_mc.loop = false;
				timelineControl = new Edapskov_TimelineControl(_action_mc);
				timelineControl.gotoEndFunc();
				timelineControl.addEventListener("completed_timeline", _onCompletedTimelineFailGameScreenFunc, false);
			}
		}
	}
	function _updateCurrentСhancesFunc()
	{
		/*
		
		*/
		var temp_arr = [true, true, false, false];
		_information.currentСhances = new Array();
		/*
		
		*/
		var i = 0;
		var l = temp_arr.length;
		while(i < l)
		{
			/*
			
			*/
			_information.currentСhances[i] = temp_arr.splice(Math.floor(Math.random() * temp_arr.length), 1)[0];
			/*
			
			*/
			i++;
		}
	}
	function _onClickClawLeftGameScreenFunc(event)
	{
		if(_information.prevPosition > 1)
		{
			/*
			
			*/
			_soundManager.addSoundFunc("machine_sound", 0, 0, 0, 1);
			/*
			
			*/
			_information.nextPosition = _information.prevPosition - 1;
			/*
			
			*/
			_moveClawGameScreenFunc();
		}
	}
	function _onClickClawRightGameScreenFunc(event)
	{
		if(_information.prevPosition < _information.totalPositions)
		{
			/*
			
			*/
			_soundManager.addSoundFunc("machine_sound", 0, 0, 0, 1);
			/*
			
			*/
			_information.nextPosition = _information.prevPosition + 1;
			/*
			
			*/
			_moveClawGameScreenFunc();
		}
	}
	function _moveClawGameScreenFunc()
	{
		/*
		
		*/
		_updateBtnsMachineGameScreenFunc(true);
		/*
		
		*/
		_currentMainScreen_mc.machine_mc.animation_mc.gotoAndStop("go_" + Number(_information.prevPosition) + "_" + Number(_information.nextPosition));
		/*
		
		*/
		if(_currentMainScreen_mc.machine_mc.animation_mc["frame_" + Number(_currentMainScreen_mc.machine_mc.animation_mc.currentFrame) + "_mc"])
		{
			_action_mc = _currentMainScreen_mc.machine_mc.animation_mc["frame_" + Number(_currentMainScreen_mc.machine_mc.animation_mc.currentFrame) + "_mc"];
			_action_mc.gotoAndStop(0);
			_action_mc.loop = false;
			var timelineControl = new Edapskov_TimelineControl(_action_mc);
			timelineControl.gotoEndFunc();
			timelineControl.addEventListener("completed_timeline", _onCompletedTimelineMoveClawGameScreenFunc, false);
		}
	}
	function _onCompletedTimelineMoveClawGameScreenFunc(event)
	{
		/*
		
		*/
		_information.prevPosition = _information.nextPosition;
		_information.nextPosition = 0;
		/*
		
		*/
		_soundManager.removeAllSoundExceptNameFunc(["background_sound"]);
		/*
		
		*/
		_updateBtnsMachineGameScreenFunc(false);
	}
	/*
	
	*/
	function _onCompletedTimelineLuckGameScreenFunc(event)
	{
		/*
		
		*/
		_soundManager.removeAllSoundExceptNameFunc(["background_sound"]);
		/*
		
		*/
		_currentMainScreen_mc.machine_mc.clawResult_mc.mouseEnabled = true;
		_currentMainScreen_mc.machine_mc.clawResult_mc.mouseChildren = false;
		_currentMainScreen_mc.machine_mc.clawResult_mc.cursor = "pointer";
		_currentMainScreen_mc.machine_mc.clawResult_mc.addEventListener("click", _onClickClawResultGameScreenFunc, false);
		/*
		
		*/
		if(_information.hintsClawResult > 0)
		{
			/*
			
			*/
			_information.hintsClawResult--;
			/*
			
			*/
			if(_currentMainScreen_mc.machine_mc.clawResult_mc.hint_mc)
			{
				_currentMainScreen_mc.machine_mc.clawResult_mc.hint_mc.visible = true;
			}
		}
	}
	function _onClickClawResultGameScreenFunc(event)
	{
		/*
		
		*/
		_currentMainScreen_mc.machine_mc.clawResult_mc.mouseEnabled = false;
		_currentMainScreen_mc.machine_mc.clawResult_mc.mouseChildren = false;
		_currentMainScreen_mc.machine_mc.clawResult_mc.cursor = "default";
		_currentMainScreen_mc.machine_mc.clawResult_mc.removeEventListener("click", _onClickClawResultGameScreenFunc, false);
		/*
		
		*/
		if(_currentMainScreen_mc.machine_mc.clawResult_mc.hint_mc)
		{
			_currentMainScreen_mc.machine_mc.clawResult_mc.hint_mc.visible = false;
		}
		/*
		
		*/
		if(_information.currentRewards.length <= 0)
		{
			_updateCurrentRewardsFunc();
		}
		/*
		
		*/
		trace(_information.currentRewards)
		var currentReward_uint = _information.currentRewards.splice(Number(_information.currentRewards.length - 1), 1)[0];
		var currentReward_str = String("option_" + currentReward_uint);
		/*
		
		*/
		for(var prop in _information.options)
		{
			if(_information.options.hasOwnProperty(prop))
			{
				if(prop == currentReward_str)
				{
					_information.options[prop].completed = true;
				}
			}
		}
		/*
		
		*/
		_updateCurrentOptionsFunc();
		/*
		
		*/
		if(_currentMainScreen_mc.machine_mc.animation_mc["frame_" + Number(_currentMainScreen_mc.machine_mc.animation_mc.currentFrame) + "_mc"])
		{
			_currentMainScreen_mc.machine_mc.animation_mc["frame_" + Number(_currentMainScreen_mc.machine_mc.animation_mc.currentFrame) + "_mc"].gotoAndStop(0);
		}
		/*
		
		*/
		_currentMainScreen_mc.popUp_mc.visible = true;
		_currentMainScreen_mc.popUp_mc.body_mc.gotoAndStop(currentReward_uint);
		/*
		
		*/
		if(_currentMainScreen_mc.popUp_mc.body_mc["frame_" + Number(_currentMainScreen_mc.popUp_mc.body_mc.currentFrame) + "_mc"])
		{
			_action_mc = _currentMainScreen_mc.popUp_mc.body_mc["frame_" + Number(_currentMainScreen_mc.popUp_mc.body_mc.currentFrame) + "_mc"];
			_action_mc.gotoAndStop(0);
			_action_mc.loop = false;
			var timelineControl = new Edapskov_TimelineControl(_action_mc);
			timelineControl.gotoEndFunc();
			timelineControl.addEventListener("completed_timeline", _onCompletedTimelinePopUpGameScreenFunc, false);
		}
		/*
		
		*/
		if(currentReward_uint > 0)
		{
			_soundManager.addSoundFunc("luck_sound", 0, 0, 0, 0.1);
		}
		else
		{
			_soundManager.addSoundFunc("squeak_sound", 0, 0, 0, 0.1);
		}
		/*
		СОХРАНЕНИЕ ИГРЫ
		*/
		_saveGameFunc();
	}
	function _onCompletedTimelinePopUpGameScreenFunc(event)
	{
		/*
		
		*/
		_soundManager.removeAllSoundExceptNameFunc(["background_sound"]);
		/*
		
		*/
		_beginGameScreenFunc();
	}
	function _updateCurrentRewardsFunc()
	{
		/*
		
		*/
		_information.currentRewards = new Array();
		var temp_arr = new Array();
		var i;
		var l;
		/*
		
		*/
		for(var prop in _information.options)
		{
			if(_information.options.hasOwnProperty(prop))
			{
				if(!_information.options[prop].completed)
				{
					temp_arr.push(parseInt(prop.split("_")[1]));
				}
			}
		}
		/*
		
		*/
		i = 0;
		l = Math.floor((temp_arr.length * (100 - _information.percentLuck)) / _information.percentLuck) + 1;
		while(i < l)
		{
			/*
			
			*/
			temp_arr.push(0);
			/*
			
			*/
			i++;
		}
		/*
		
		*/
		i = 0;
		l = temp_arr.length;
		while(i < l)
		{
			/*
			
			*/
			_information.currentRewards[i] = temp_arr.splice(Math.floor(Math.random() * temp_arr.length), 1)[0];
			/*
			
			*/
			i++;
		}
	}
	function _onCompletedTimelineFailGameScreenFunc(event)
	{
		/*
		
		*/
		_soundManager.removeAllSoundExceptNameFunc(["background_sound"]);
		/*
		
		*/
		_updateBtnsMachineGameScreenFunc(false);
	}
	/*
	
	*/
	function _updateNextBtnGameScreenFunc(block_bool)
	{
		/*
		
		*/
		if(block_bool !== undefined)
		{
			block_bool = Boolean(block_bool);
		}
		else
		{
			block_bool = false;
		}
		/*
		
		*/
		if(block_bool)
		{
			if(!_currentMainScreen_mc.next_btn.visible)
			{
				_currentMainScreen_mc.next_btn.alpha = 0.01;
				createjs.Tween.get(_currentMainScreen_mc.next_btn).wait(0).to({alpha:1}, (_DELAY / 2) * 1000);
			}
			_currentMainScreen_mc.next_btn.visible = true;
		}
		else
		{
			_currentMainScreen_mc.next_btn.visible = false;
		}
	}
	function _onClickNextBtnGameScreenFunc(event)
	{
		/*
		
		*/
		_soundManager.removeAllSoundExceptNameFunc(["background_sound"]);
		/*
		
		*/
		var point_obj = event.currentTarget.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		event.currentTarget.removeEventListener("click", _onClickNextBtnGameScreenFunc, false);
		/*
		
		*/
		_animationTransitionBetweenScenesFunc(_galleryFunc, 0, 1, null, true);
	}
	/*
	
	*/
	function _onClickSuperLuckFunc(event)
	{
		/*
		
		*/
		var currentTarget_mc = event.currentTarget;
		/*
		
		*/
		var point_obj = currentTarget_mc.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 0.1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		currentTarget_mc.visible = false;
		currentTarget_mc.mouseEnabled = false;
		currentTarget_mc.mouseChildren = false;
		currentTarget_mc.cursor = "default";
		currentTarget_mc.removeEventListener("click", _onClickSuperLuckFunc, false);
		/*
		
		*/
		_information.percentLuck = _information.percentSuperLuck;
		/*
		
		*/
		_updateCurrentRewardsFunc();
		/*
		
		*/
		_addAdsFunc();
	}
	/*
	
	*/
	function _updateCurrentOptionsFunc()
	{
		/*
		
		*/
		_information.currentOptions = 0;
		/*
		
		*/
		for(var prop in _information.options)
		{
			if(_information.options.hasOwnProperty(prop))
			{
				if(_information.options[prop].completed)
				{
					_information.currentOptions++;
				}
			}
		}
	}
	/*
	==============================================================================================================
	Gallery Screen
	==============================================================================================================
	*/
	function _galleryFunc()
	{
		/*
		
		*/
		if(_information.timeout_id != null)
		{
			clearTimeout(_information.timeout_id);
		}
		if(_information.interval_id != null)
		{
			clearInterval(_information.interval_id);
		}
		/*
		
		*/
		_clearContainerFunc(_main);
		_clearContainerFunc(_before);
		/*
		
		*/
		_currentMainScreen_mc = new lib.GalleryScreen();
		_main.addChild(_currentMainScreen_mc);
		_currentMainScreen_mc.gotoAndStop(0);
		/*
		
		*/
		_currentMainScreen_mc.logo_btn.addEventListener("click", _onClickLogoBtnFunc, false);
		/*
		
		*/
		if(_currentMainScreen_mc.facebook_btn)
		{
			_currentMainScreen_mc.facebook_btn.addEventListener("click", _onClickFacebookBtnFunc, false);
		}
		/*
		
		*/
		if(_currentMainScreen_mc.moreGames_btn)
		{
			_currentMainScreen_mc.moreGames_btn.addEventListener("click", _onClickMoreGamesBtnFunc, false);
		}
		/*
		
		*/
		if(_currentMainScreen_mc.freeGames_mc)
		{
			_currentMainScreen_mc.freeGames_mc.cursor = "pointer";
			_currentMainScreen_mc.freeGames_mc.addEventListener("click", _onClickFreeGamesMcFunc, false);
		}
		/*
		
		*/
		_currentMainScreen_mc.playAgain_btn.addEventListener("click", _onClickPlayBtnFunc, false);
		/*
		
		*/
		if(_information.currentOptions >= _information.totalOptions)
		{
			if(_currentMainScreen_mc.newGame_btn)
			{
				_currentMainScreen_mc.newGame_btn.addEventListener("click", _onClicknNewGameBtnFunc, false);
			}
			if(_currentMainScreen_mc.moreGames_btn)
			{
				_currentMainScreen_mc.moreGames_btn.visible = false;
			}
		}		
		else
		{
			if(_currentMainScreen_mc.newGame_btn)
			{
				_currentMainScreen_mc.newGame_btn.visible = false;
			}
		}
		/*
		
		*/
		_beginGalleryScreenFunc();
		/*
		
		*/
		if(_currentMainScreen_mc.bg)
		{
			_currentMainScreen_mc.bg.cache(-(_BGWIDTH - _CWIDTH) / 2, 0, _BGWIDTH, _CHEIGHT);
		}
		/*
		
		*/
		_soundManager.updateSoundMcFunc(_currentMainScreen_mc);
		/*
		
		*/
		_fullScreenCanvasManager.updateFullScreenMcFunc(_currentMainScreen_mc);
		/*
		
		*/
		_cursorUpdateFunc();
		/*
		редирект
		*/
		if(_information.firstRun)
		{
			_information.firstRun = false;
			if(_information.timeout_id != null)
			{
				clearTimeout(_information.timeout_id);
			}
			_information.timeout_id = setTimeout(_redirectFunc, 8000);
		}
	}
	/*
	
	*/
	function _beginGalleryScreenFunc()
	{
		/*
		
		*/
		if(_currentMainScreen_mc.congratulation_mc)
		{
			/*
			
			*/
			_currentMainScreen_mc.congratulation_mc.gotoAndStop(0);
			/*
			
			*/
			if(_information.currentOptions >= _information.totalOptions)
			{
				_currentMainScreen_mc.congratulation_mc.mouseChildren = false;
				_currentMainScreen_mc.congratulation_mc.mouseEnabled = false;
				_currentMainScreen_mc.congratulation_mc.loop = false;
				_currentMainScreen_mc.congratulation_mc.gotoAndPlay(0);
			}
		}
		else
		{
			trace("Хде congratulation_mc ?!");
		}
		/*
		
		*/
		if(_currentMainScreen_mc.popUp_mc)
		{
			/*
			
			*/
			_currentMainScreen_mc.popUp_mc.gotoAndStop(0);
			/*
			
			*/
			if(_currentMainScreen_mc.popUp_mc.body_mc)
			{
				_showBigPicGalleryScreenFunc(0);
			}
			else
			{
				trace("Хде popUp_mc.body_mc ?!");
			}
		}
		else
		{
			trace("Хде popUp_mc ?!");
		}
		/*
		
		*/
		if(_currentMainScreen_mc.gallery_mc)
		{
			/*
			
			*/
			_currentMainScreen_mc.gallery_mc.gotoAndStop(0);
			/*
			
			*/
			if(_currentMainScreen_mc.gallery_mc.prev_mc)
			{
				_currentMainScreen_mc.gallery_mc.prev_mc.gotoAndStop(0);
				_currentMainScreen_mc.gallery_mc.prev_mc.mouseEnabled = true;
				_currentMainScreen_mc.gallery_mc.prev_mc.mouseChildren = false;
				_currentMainScreen_mc.gallery_mc.prev_mc.cursor = "pointer";
				_currentMainScreen_mc.gallery_mc.prev_mc.addEventListener("click", _onClickPrevGalleryScreenFunc, false);
			}
			/*
			
			*/
			if(_currentMainScreen_mc.gallery_mc.next_mc)
			{
				_currentMainScreen_mc.gallery_mc.next_mc.gotoAndStop(0);
				_currentMainScreen_mc.gallery_mc.next_mc.mouseEnabled = true;
				_currentMainScreen_mc.gallery_mc.next_mc.mouseChildren = false;
				_currentMainScreen_mc.gallery_mc.next_mc.cursor = "pointer";
				_currentMainScreen_mc.gallery_mc.next_mc.addEventListener("click", _onClickNextGalleryScreenFunc, false);
			}
			/*
			
			*/
			_updateOptionsGalleryScreenFunc();
			/*
			
			*/
			_updateCounterGalleryScreenFunc();
		}
		else
		{
			trace("Хде gallery_mc ?!");
		}
	}
	/*
	
	*/
	function _updateCounterGalleryScreenFunc()
	{
		if(_currentMainScreen_mc.gallery_mc.counter_mc)
		{
			/*
			
			*/
			_currentMainScreen_mc.gallery_mc.counter_mc.gotoAndStop(0);
			_currentMainScreen_mc.gallery_mc.counter_mc.mouseEnabled = false;
			_currentMainScreen_mc.gallery_mc.counter_mc.mouseChildren = false;
			/*
			
			*/
			if(_currentMainScreen_mc.gallery_mc.counter_mc.currentOptions_mc)
			{
				_currentMainScreen_mc.gallery_mc.counter_mc.currentOptions_mc.gotoAndStop(0);
				_currentMainScreen_mc.gallery_mc.counter_mc.currentOptions_mc.gotoAndStop(_information.currentOptions);
			}
			/*
			
			*/
			if(_currentMainScreen_mc.gallery_mc.counter_mc.totalOptions_mc)
			{
				_currentMainScreen_mc.gallery_mc.counter_mc.totalOptions_mc.gotoAndStop(0);
				_currentMainScreen_mc.gallery_mc.counter_mc.totalOptions_mc.gotoAndStop(_information.totalOptions);
			}
		}
	}
	/*
	
	*/
	function _updateOptionsGalleryScreenFunc()
	{
		/*
		
		*/
		var option_str;
		var option_mc;
		/*
		
		*/
		for(var prop in _information.options)
		{
			if(_information.options.hasOwnProperty(prop))
			{
				/*
				
				*/
				option_str = prop + "_mc";
				/*
				
				*/
				if(_currentMainScreen_mc.gallery_mc[option_str])
				{
					/*
					
					*/
					option_mc = _currentMainScreen_mc.gallery_mc[option_str];
					option_mc.gotoAndStop(0);
					option_mc.name = option_str;
					/*
					
					*/
					if(_information.options[prop].completed)
					{
						option_mc.gotoAndStop(1);
						option_mc.mouseEnabled = true;
						option_mc.mouseChildren = false;
						option_mc.cursor = "pointer";
						option_mc.addEventListener("click", _onClickOptionGalleryScreenFunc, false);
					}
				}
			}
		}
	}
	function _onClickOptionGalleryScreenFunc(event)
	{
		/*
		
		*/
		var currentOption_mc = event.currentTarget;
		var currentOption_str = currentOption_mc.name;
		/*
		
		*/
		var point_obj = currentOption_mc.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		var temp_arr = currentOption_str.split("_");
		var option_str = String(temp_arr[0]);
		var option_num = parseInt(temp_arr[1]);
		/*
		
		*/
		_showBigPicGalleryScreenFunc(option_num);
	}
	/*
	
	*/
	function _onClickPrevGalleryScreenFunc(event)
	{
		/*
		
		*/
		var point_obj = event.currentTarget.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		var totalFrames_num = _currentMainScreen_mc.gallery_mc.totalFrames;
		var currentFrame_num = _currentMainScreen_mc.gallery_mc.currentFrame + 1;
		currentFrame_num--;
		if(currentFrame_num <= 0)
		{
			currentFrame_num = totalFrames_num;
		}
		/*
		
		*/
		_currentMainScreen_mc.gallery_mc.gotoAndStop(Number(currentFrame_num - 1));
		/*
		
		*/
		_updateOptionsGalleryScreenFunc();
	}
	function _onClickNextGalleryScreenFunc(event)
	{
		/*
		
		*/
		var point_obj = event.currentTarget.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		var totalFrames_num = _currentMainScreen_mc.gallery_mc.totalFrames;
		var currentFrame_num = _currentMainScreen_mc.gallery_mc.currentFrame + 1;
		currentFrame_num++;
		if(currentFrame_num > totalFrames_num)
		{
			currentFrame_num = 1;
		}
		/*
		
		*/
		_currentMainScreen_mc.gallery_mc.gotoAndStop(Number(currentFrame_num - 1));
		/*
		
		*/
		_updateOptionsGalleryScreenFunc();
	}
	/*
	
	*/
	function _showBigPicGalleryScreenFunc(index_uint)
	{
		/*
		
		*/
		if(index_uint !== undefined)
		{
			index_uint = Math.floor(Number(index_uint));
		}
		else
		{
			index_uint = 0;
		}
		/*
		
		*/
		if(index_uint == 0)
		{
			/*
			
			*/
			_currentMainScreen_mc.popUp_mc.visible = false;
			_currentMainScreen_mc.popUp_mc.cursor = "default";
			_currentMainScreen_mc.popUp_mc.mouseChildren = false;
			_currentMainScreen_mc.popUp_mc.mouseEnabled = false;
			_currentMainScreen_mc.popUp_mc.removeEventListener("click", _onClickPopUpGalleryScreenFunc, false);
			/*
			
			*/
			_currentMainScreen_mc.popUp_mc.body_mc.gotoAndStop(0);
		}
		else
		{
			/*
			
			*/
			_currentMainScreen_mc.popUp_mc.visible = true;
			_currentMainScreen_mc.popUp_mc.cursor = "pointer";
			_currentMainScreen_mc.popUp_mc.mouseChildren = false;
			_currentMainScreen_mc.popUp_mc.mouseEnabled = true;
			_currentMainScreen_mc.popUp_mc.addEventListener("click", _onClickPopUpGalleryScreenFunc, false);
			/*
			
			*/
			_currentMainScreen_mc.popUp_mc.body_mc.gotoAndStop(Number(index_uint - 1));
		}
	}
	function _onClickPopUpGalleryScreenFunc(event)
	{
		/*
		
		*/
		var point_obj = event.currentTarget.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 0.1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		_showBigPicGalleryScreenFunc(0);
	}
	/*
	==============================================================================================================
	Окно редиректа
	==============================================================================================================
	*/
	function _redirectFunc()
	{
		/*
		
		*/
		if(_information.timeout_id != null)
		{
			clearTimeout(_information.timeout_id);
		}
		/*
		
		*/
		_clearContainerFunc(_before);
		/*
		
		*/
		_currentBeforeScreen_mc = new lib.RedirectScreen();
		_before.addChild(_currentBeforeScreen_mc);
		_currentBeforeScreen_mc.gotoAndStop(0);
		_currentBeforeScreen_mc.body_mc.gotoAndStop(0);
		/*
		
		*/
		if(_currentBeforeScreen_mc.body_mc.playRedirect_btn)
		{
			_currentBeforeScreen_mc.body_mc.playRedirect_btn.addEventListener("click", _onClickPlayRedirectBtnFunc, false);
		}
		/*
		
		*/
		if(_currentBeforeScreen_mc.body_mc.cancelRedirect_btn)
		{
			_currentBeforeScreen_mc.body_mc.cancelRedirect_btn.addEventListener("click", _onClickCancelRedirectBtnFunc, false);
		}
	}
	/*
	
	*/
	function _onClickPlayRedirectBtnFunc(event)
	{
		/*
		
		*/
		var currentTarget_btn = event.currentTarget;
		/*
		
		*/
		var point_obj = currentTarget_btn.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 0.3, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		currentTarget_btn.removeEventListener("click", _onClickPlayRedirectBtnFunc, false);
		/*
		
		*/
		window.open("https://dressupwho.net/html5/Chibi-Troll-Fashion-Maker" + "?utm_source=" + _getLocationFunc() + "&utm_medium=game_referral|game&utm_content=simple&utm_campaign=" + _TITLE, "_self");
	}
	/*
	
	*/
	function _onClickCancelRedirectBtnFunc(event)
	{
		/*
		
		*/
		var currentTarget_btn = event.currentTarget;
		/*
		
		*/
		var point_obj = currentTarget_btn.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 0.3, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		currentTarget_btn.removeEventListener("click", _onClickCancelRedirectBtnFunc, false);
		/*
		
		*/
		_clearContainerFunc(_before);
	}
	/*
	==============================================================================================================
	СОХРАНЕНИЕ ИГРЫ
	==============================================================================================================
	*/
	/*
	загружаем сохраненные необходимые данные приложения
	*/
	function _loadGameFunc()
	{
		/*
		
		*/
		var keyLocalStorage_str = _getSafeTitleGameFunc();
		/*
		
		*/
		var loadInformation_obj = new Edapskov_LocalStorage().loadFunc(keyLocalStorage_str);
		//console.log("Загружено: ");
		//console.log(loadInformation_obj);
		/*
		
		*/
		if(loadInformation_obj != null)
		{
			if(loadInformation_obj.hasOwnProperty("currentOptions"))
			{
				if(Number(loadInformation_obj.currentOptions) < _information.totalOptions)
				{
					/*
					
					*/
					_information.currentOptions = Number(loadInformation_obj.currentOptions);
					/*
					
					*/
					if(loadInformation_obj.hasOwnProperty("options"))
					{
						for(var prop in loadInformation_obj.options)
						{
							if(loadInformation_obj.options.hasOwnProperty(prop))
							{
								if(_information.options.hasOwnProperty(prop))
								{
									_information.options[prop].completed = Boolean(loadInformation_obj.options[prop].completed);
								}
							}
						}
					}
				}
			}
		}
	}
	/*
	сохраняем необходимые данные приложения
	*/
	function _saveGameFunc()
	{
		/*
		
		*/
		var loadInformation_obj = {options:{}};
		loadInformation_obj.currentOptions = Number(_information.currentOptions);
		/*
		
		*/
		for(var prop in _information.options)
		{
			if(_information.options.hasOwnProperty(prop))
			{
				loadInformation_obj.options[prop] = {};
				loadInformation_obj.options[prop].completed = Boolean(_information.options[prop].completed);
			}
		}
		/*
		
		*/
		var keyLocalStorage_str = _getSafeTitleGameFunc();
		/*
		
		*/
		//console.log("Сохранено: ");
		//console.log(loadInformation_obj);
		new Edapskov_LocalStorage().saveFunc(keyLocalStorage_str, loadInformation_obj);
	}
	/*
	
	*/
	function _getSafeTitleGameFunc()
	{
		/*
		
		*/
		var safeTitleGame_str = _TITLE.replace(/[^a-z0-9]/gi, "").trim();
		/*
		
		*/
		return safeTitleGame_str;
	}
	/*
	==============================================================================================================
	Вспомогательные окна
	==============================================================================================================
	*/
	/*
	Credits
	*/
	function _copyrightFunc()
	{
		/*
		
		*/
		_clearContainerFunc(_before);
		/*
		
		*/
		_currentBeforeScreen_mc = new lib.CopyrightScreen();
		_before.addChild(_currentBeforeScreen_mc);
		_currentBeforeScreen_mc.gotoAndStop(0);
		/*
		
		*/
		_currentBeforeScreen_mc.cursor = "pointer";
		_currentBeforeScreen_mc.addEventListener("click", _onClickCopyrightScreenFunc, false);
	}
	function _onClickCopyrightScreenFunc(event)
	{
		/*
		
		*/
		var point_obj = event.currentTarget.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		event.currentTarget.removeEventListener("click", _onClickCopyrightScreenFunc, false);
		/*
		
		*/
		_clearContainerFunc(_before);
	}
	/*
	простое окно с кнопкой закрытия
	*/
	function _simpleScreenFunc(nameScreen_str)
	{
		/*
		
		*/
		if(nameScreen_str !== undefined)
		{
			/*
			
			*/
			nameScreen_str = String(nameScreen_str);
			/*
			
			*/
			_clearContainerFunc(_before);
			/*
			
			*/
			_currentBeforeScreen_mc = new lib[nameScreen_str]();
			_before.addChild(_currentBeforeScreen_mc);
			_currentBeforeScreen_mc.gotoAndStop(0);
			/*
			
			*/
			if(_currentBeforeScreen_mc.screen_mc)
			{
				_currentBeforeScreen_mc.screen_mc.addEventListener("click", _onClickScreenMcSimpleScreenFunc, false);
			}
			/*
			
			*/
			if(_currentBeforeScreen_mc.remove_btn)
			{
				_currentBeforeScreen_mc.remove_btn.addEventListener("click", _onClickRemoveBtnSimpleScreenFunc, false);
			}
		}
	}
	function _onClickScreenMcSimpleScreenFunc(event)
	{
		
	}
	function _onClickRemoveBtnSimpleScreenFunc(event)
	{
		/*
		
		*/
		var point_obj = event.currentTarget.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		event.currentTarget.removeEventListener("click", _onClickRemoveBtnSimpleScreenFunc, false);
		/*
		
		*/
		_animationTransitionBetweenScenesFunc(_removeSimpleScreenFunc, 0, _DELAY / 2);
	}
	function _removeSimpleScreenFunc()
	{
		_clearContainerFunc(_before);
	}
	/*
	==============================================================================================================
	Вспомогательные методы
	==============================================================================================================
	*/
	/*
	функция для перехода между локациями
	*/
	function _animationTransitionBetweenScenesFunc(func, delayTime_num, time_num, arrayParams_arr, animated_bool)
	{
		/*
		
		*/
		if(delayTime_num === undefined)
		{
			delayTime_num = 0;
		}
		else
		{
			delayTime_num = Number(delayTime_num);
		}
		if(time_num === undefined)
		{
			time_num = 1;
		}
		else
		{
			time_num = Number(time_num);
		}
		if(arrayParams_arr === undefined)
		{
			arrayParams_arr = null;
		}
		if(animated_bool === undefined)
		{
			animated_bool = false;
		}
		else
		{
			animated_bool = Boolean(animated_bool);
		}
		/*
		проверяем переменные
		*/
		if(time_num < 0)
		{
			time_num = 0;
		}
		/*
		блокировать
		*/
		_main.mouseEnabled = false;
		_main.mouseChildren = false;
		_before.mouseEnabled = false;
		_before.mouseChildren = false;
		/*
		
		*/
		if(animated_bool)
		{
			_onStartAnimatedTransitionBetweenScenesFunc(func, delayTime_num, time_num, arrayParams_arr);
		}
		else
		{
			_onStartNonAnimatedTransitionBetweenScenesFunc(func, delayTime_num, time_num, arrayParams_arr);
		}
	}
	function _onStartNonAnimatedTransitionBetweenScenesFunc(func, delayTime_num, time_num, arrayParams_arr)
	{
		createjs.Tween.get(_shadowScreen.getChildByName("shadowContainer")).wait(delayTime_num * 1000).to({alpha:1}, time_num * 1000).call(_onMidNonAnimatedTransitionBetweenScenesFunc, [func, time_num, arrayParams_arr], this);
	}
	function _onMidNonAnimatedTransitionBetweenScenesFunc(func, time_num, arrayParams_arr)
	{
		/*
		обновление
		*/
		_updateSceneTransitionBetweenScenesFunc(func, arrayParams_arr);
		/*
		появление
		*/
		createjs.Tween.get(_shadowScreen.getChildByName("shadowContainer")).wait(0).to({alpha:0.01}, time_num * 1000).call(_onFinishTransitionBetweenScenesFunc);
	}
	function _onStartAnimatedTransitionBetweenScenesFunc(func, delayTime_num, time_num, arrayParams_arr)
	{
		/*
		
		*/
		var curtainContainer = _shadowScreen.getChildByName("curtainContainer");
		var curtainScreen_mc;
		var animation_mc;
		/*
		
		*/
		if(lib.hasOwnProperty("CurtainScreen"))
		{
			/*
			
			*/
			curtainScreen_mc = new lib.CurtainScreen();
			curtainScreen_mc.gotoAndStop(0);
			/*
			
			*/
			if(curtainScreen_mc.body_mc)
			{
				/*
				
				*/
				curtainContainer.addChild(curtainScreen_mc);
				/*
				
				*/
				animation_mc = curtainScreen_mc.body_mc;
				animation_mc.gotoAndStop(0);
				/*
				
				*/
				var timelineControl = new Edapskov_TimelineControl(animation_mc);
				timelineControl.gotoFunc("mid", 1, delayTime_num, [animation_mc, func, arrayParams_arr]);
				timelineControl.addEventListener("completed_timeline", _onMidAnimatedTransitionBetweenScenesFunc, false);
			}
			else
			{
				_onStartNonAnimatedTransitionBetweenScenesFunc(func, delayTime_num, time_num, arrayParams_arr);
			}
		}
		else
		{
			_onStartNonAnimatedTransitionBetweenScenesFunc(func, delayTime_num, time_num, arrayParams_arr);
		}
	}
	function _onMidAnimatedTransitionBetweenScenesFunc(event)
	{
		/*
		
		*/
		var animation_mc = event.params[0];
		var func = event.params[1];
		var arrayParams_arr = event.params[2];
		/*
		обновление
		*/
		_updateSceneTransitionBetweenScenesFunc(func, arrayParams_arr);
		/*
		появление
		*/
		var timelineControl = new Edapskov_TimelineControl(animation_mc);
		timelineControl.gotoFunc("end", 1, 0);
		timelineControl.addEventListener("completed_timeline", _onFinishTransitionBetweenScenesFunc, false);
	}
	function _onFinishTransitionBetweenScenesFunc(event)
	{
		/*
		
		*/
		_clearContainerFunc(_shadowScreen.getChildByName("curtainContainer"));
		/*
		разблокировать
		*/
		_main.mouseEnabled = true;
		_main.mouseChildren = true;
		_before.mouseEnabled = true;
		_before.mouseChildren = true;
	}
	function _updateSceneTransitionBetweenScenesFunc(func, arrayParams_arr)
	{
		/*
		
		*/
		if(arrayParams_arr === undefined)
		{
			arrayParams_arr = null;
		}
		/*
		запуск функции
		*/
		if(arrayParams_arr !== null)
		{
			func(arrayParams_arr);
		}
		else
		{
			func();
		}
	}
	/*
	обновление
	*/
	function _onTickFunc(event)
	{
		/*
		
		*/
		if(_debugger.getVisibleFunc())
		{
			_debugger.updateFpsFunc(Math.round(event.currentTarget.getMeasuredFPS()) + " / " + event.currentTarget.framerate);
		}
		/*
		
		*/
		_stage.update();
	}
	/*
	управление курсором
	*/
	function _cursorUpdateFunc(nameCursor_str)
	{
		/*
		
		*/
		if(nameCursor_str === undefined)
		{
			nameCursor_str = "default";
		}
		/*
		
		*/
		if(_cursor.getChildByName("body_mc"))
		{
			var bodyCursor_mc = _cursor.getChildByName("body_mc");
			bodyCursor_mc.gotoAndStop(nameCursor_str);
		}
		/*
		
		*/
		if(nameCursor_str === "default")
		{
			_mouseShowFunc();
			_cursor.visible = false;
		}
		else
		{
			_mouseHideFunc();
			_cursor.visible = true;
		}
	}
	function _cursorAnimationFunc()
	{
		var animation_mc;
		if(_cursor["body_mc"])
		{
			animation_mc = _cursor["body_mc"];
			animation_mc.play();
		}
	}
	function _mouseHideFunc()
	{
		if(!createjs.Touch.isSupported())
		{
			_stage.enableMouseOver(0);
			_stage.canvas.style.cursor = "none";
		}
	}
	function _mouseShowFunc()
	{
		if(!createjs.Touch.isSupported())
		{
			_stage.enableMouseOver(10);
			_stage.canvas.style.cursor = "auto";
		}
	}
	function _updateCoordinatesCursorFunc(newX_num, newY_num)
	{
		var point_obj = _stage.localToLocal(newX_num, newY_num, _cursor.parent); 
		_cursor.x = point_obj.x;
		_cursor.y = point_obj.y;
	}
	function _onStageMouseDownFunc(event)
	{
		_cursor.alpha = 1;
		_updateCoordinatesCursorFunc(event.localX, event.localY);
	}
	function _onStageMouseMoveFunc(event)
	{
		_updateCoordinatesCursorFunc(event.localX, event.localY);
	}
	function _onStageMouseUpFunc(event)
	{
		_cursor.alpha = 0.01;
	}
	/*
	очистка контейнеров
	*/
	function _clearContainerFunc(container)
	{
		container.removeAllChildren();
	}
	/*
	поиск лейблов в мувиках
	*/
	function _hasLabelInMovieClipFunc(movieClip_mc, label_str)
	{
		/*
		
		*/
		var result_bool = false;
		var labels_arr = movieClip_mc.labels;
		var i = 0;
		var l = labels_arr.length;
		/*
		
		*/
		while (i < l)
		{
			/*
			
			*/
			if (label_str === labels_arr[i].label)
			{
				result_bool = true;
			}
			/*
			
			*/
			i++;
		}
		/*
		
		*/
		return result_bool;
	}
	/*
	обработка событий клавиатуры
	*/
	function _onKeyPressFunc(event)
	{
		/*
		
		*/
		var keyCode_num = event.which || event.keyCode;
		var keyChar_str = String.fromCharCode(keyCode_num);
		var shiftKey_bool = event.shiftKey;
		var ctrlKey_bool = event.ctrlKey;
		var altKey_bool = event.altKey;
		/*
		
		*/
		if(keyCode_num === 68)
		{
			if(ctrlKey_bool && altKey_bool)
			{
				_debugger.toggleVisibleFunc();
			}
		}
		else if(keyCode_num === 65)
		{
			if(ctrlKey_bool && altKey_bool)
			{
				alert("edapskov");
			}
		}
	}
	/*
	остановка - запуск приложения
	*/
	function _stopAppFunc()
	{
		/*
		
		*/
		//createjs.Ticker.removeEventListener("tick", _onTickFunc, false);
		/*
		
		*/
		_soundManager.setInvisibleFunc(true);
		/*
		
		*/
		trace("Application is stopped!", 1)
	}
	function _playAppFunc()
	{
		/*
		
		*/
		//createjs.Ticker.addEventListener("tick", _onTickFunc, false);
		/*
		
		*/
		_soundManager.setInvisibleFunc(false);
		/*
		
		*/
		trace("Application is running!", 1)
	}
	/*
	встроенная реклама
	*/
	function _addAdsFunc()
	{
		try
		{
			/*
			
			*/
			_stopAppFunc();
			/*
			
			*/
			var mygame = document.getElementById("mygame");
			_mygameChildNodes_num = mygame.childNodes.length;
			/*
			
			*/
			window[preroll.config.loaderObjectName].refetchAd();
			/*
			
			*/
			setTimeout(_onCheckAdsFunc, 1000);
		}
		catch(event)
		{
			/*
			
			*/
			trace(event, 1);
			/*
			
			*/
			_playAppFunc();
		}
		finally
		{
			
		}
	}
	function _onCheckAdsFunc()
	{
		var mygame = document.getElementById("mygame");
		if(mygame.childNodes.length > _mygameChildNodes_num)
		{
			setTimeout(_onCheckAdsFunc, 100)
		}
		else
		{
			_playAppFunc();
		}
	}
	this.showRewardFunc = function()
	{
		
	}
	/*
	
	*/
	function _getLocationFunc()
	{
		var url_str = (window.location != window.parent.location) ? document.referrer: document.location.host;
		return url_str;
	}
	function _getSimplifiedTitleGameFunc()
	{
		var title_str = _TITLE.replace(/[^a-z0-9\-_ ]/gi, "");
		return title_str.toLowerCase().replace(/ +/g, "-");
	}
	function _onClickPreloaderBtnFunc(event)
	{
		window.open(_LINKTOGAME + "?utm_source=" + _getLocationFunc() + "&utm_medium=game_referral|preloader&utm_content=simple&utm_campaign=" + _getSimplifiedTitleGameFunc(), "_blank");
	}
	function _onClickLogoBtnFunc(event)
	{
		window.open(_LINKTOGAME + "?utm_source=" + _getLocationFunc() + "&utm_medium=game_referral|logo&utm_content=simple&utm_campaign=" + _getSimplifiedTitleGameFunc(), "_blank");
	}
	function _onClickFreeGamesMcFunc(event)
	{
		window.open(_LINKTOGAME + "?utm_source=" + _getLocationFunc() + "&utm_medium=game_referral|game&utm_content=simple&utm_campaign=" + _getSimplifiedTitleGameFunc(), "_blank");
	}
	function _onClickFacebookBtnFunc(event)
	{
		window.open(_LINKTOFACEBOOK + "?utm_source=" + _getLocationFunc() + "&utm_medium=game_referral|game&utm_content=simple&utm_campaign=" + _getSimplifiedTitleGameFunc(), "_blank");
	}
	function _onClickMoreGamesBtnFunc(event)
	{
		window.open(_LINKTOGAME + "?utm_source=" + _getLocationFunc() + "&utm_medium=game_referral|game&utm_content=simple&utm_campaign=" + _getSimplifiedTitleGameFunc(), "_blank");
	}
	/*
	ссылочка на разработчиков
	*/
	function _onClickCopyrightMenuItemFunc(event)
	{
		window.open("http://dlstudio.edapskov.ru", '_blank');
	}
}