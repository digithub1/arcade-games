/*
* @author edapskov
* @copyright 2026 edapskov v 1.001
*/
function Application()
{
	/*
	константы
	*/
	var _CWIDTH = 800;
	var _CHEIGHT = 600;
	var _BGWIDTH = 1600;
	var _BGHEIGHT = 600;
	var _INDENT = 10;
	var _BGCOLOR = "#000000";
	var _FONT = "Arial";
	var _TITLE = "MycoThreeMemo";
	var _LINKTOGAME = "https://dl-girls.com";
	var _DELAY = 1;
	/*
	публичные переменные
	*/
	this.copyright = "© DL-Studio, v 1.001";
	/*
	приватные переменные
	*/
	var _stage;
	var _main;
	var _before;
	var _cursor;
	var _shadowScreen;
	var _pauseLock;
	var _orientationLock;
	var _debugger;
	var _soundManager;
	var _fullScreenCanvasManager;
	var _blockScript = false;
	var _blockFocus = false;
	var _blockUser = false;
	var _information = {
		language:"en",
		firstRun:true,
		shownAds:false,
		currentNameLocation:null,
		targetLocation:null,
		totalLocations:null,
		totalTimer_uint:null,
		currentTimer_uint:null,
		fine_uint:null,
		toggleTimer_bool:null,
		completeTimer_func:null,
		cards_arr:null,
		openCards_arr:null,
		timeout_id:null,
		interval_id:null,
		locations:
		{
			location_1:{
				timer:30,
				hintTimer:1.5,
				fine:2,
				skipped:false,
				completed:null
			},
			location_2:{
				timer:40,
				hintTimer:1.5,
				fine:2,
				skipped:false,
				completed:null
			},
			location_3:{
				timer:60,
				hintTimer:1.5,
				fine:2,
				skipped:false,
				completed:null
			},
			location_4:{
				timer:80,
				hintTimer:2,
				fine:2,
				skipped:false,
				completed:null
			},
			location_5:{
				timer:90,
				hintTimer:2,
				fine:2,
				skipped:true,
				completed:null
			},
			location_6:{
				timer:30,
				hintTimer:1.5,
				fine:2,
				skipped:false,
				completed:null
			},
			location_7:{
				timer:30,
				hintTimer:1.5,
				fine:2,
				skipped:false,
				completed:null
			},
			location_8:{
				timer:30,
				hintTimer:1.5,
				fine:2,
				skipped:false,
				completed:null
			},
			location_9:{
				timer:60,
				hintTimer:1.5,
				fine:2,
				skipped:false,
				completed:null
			},
			location_10:{
				timer:60,
				hintTimer:1.5,
				fine:2,
				skipped:false,
				completed:null
			},
			location_11:{
				timer:60,
				hintTimer:1.5,
				fine:2,
				skipped:false,
				completed:null
			},
			location_12:{
				timer:80,
				hintTimer:1.5,
				fine:2,
				skipped:false,
				completed:null
			},
			location_13:{
				timer:30,
				hintTimer:1.5,
				fine:2,
				skipped:false,
				completed:null
			},
			location_14:{
				timer:50,
				hintTimer:1.5,
				fine:2,
				skipped:false,
				completed:null
			},
			location_15:{
				timer:70,
				hintTimer:1.5,
				fine:2,
				skipped:false,
				completed:null
			},
			location_16:{
				timer:80,
				hintTimer:1.5,
				fine:2,
				skipped:false,
				completed:null
			},
			location_17:{
				timer:60,
				hintTimer:1.5,
				fine:4,
				skipped:false,
				completed:null
			}
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
		курсор
		*/
		_cursor = new createjs.Container();
		container.addChild(_cursor);
		_cursorUpdateFunc();
		/*
		экран перехода между локациями
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
		контейнер для вывода сообщения о паузе
		*/
		_pauseLock = new createjs.Container();
		container.addChild(_pauseLock);
		/*
		контейнер для вывода сообщения о запрете поворота экрана
		*/
		_orientationLock = new createjs.Container();
		container.addChild(_orientationLock);
		/*
		панель отладки
		*/
		_debugger = new Edapskov_Debugger();
		_debugger.initFunc(container, _CWIDTH, _CHEIGHT);
		/*
		подключение клавиатуры
		*/
		window.addEventListener("keydown", _onKeyPressFunc, false);
		/*
		настройки размера и ориентации
		*/
		window.addEventListener("resize", _onResizeWindowFunc, false);
		window.addEventListener("orientationchange", _onResizeWindowFunc, false);
		_onResizeWindowFunc();
		// понакупают айфончиков...
		_initOrientationChangeIphoneFunc();
		/*
		настройка фокуса и размытия:
		правильно - использовать Visibility API, но оно, ебать, странное...
		кстати, Visibility API и старые focus-blur работают немного по-разному...
		*/
		if (document.visibilityState)
		{
			_onVisibilityChangeFunc();
			document.addEventListener("visibilitychange", _onVisibilityChangeFunc, false);
		}
		else
		{
			window.focus();
			window.addEventListener("focus", _onFocusWindowFunc, false);
			window.addEventListener("blur", _onBlurWindowFunc, false);
			window.addEventListener("touchcancel", _onBlurWindowFunc, false);
		}
		/*
		старый способ через focus-blur - внимание, может конфликтовать со сторонними скриптами
		*/
		/*
		window.focus();
		window.addEventListener("focus", _onFocusWindowFunc, false);
		window.addEventListener("blur", _onBlurWindowFunc, false);
		window.addEventListener("touchcancel", _onBlurWindowFunc, false);
		*/
		/*
		настройка языка...
		*/
		_setLanguageFunc();
		/*
		запускаем прелоадер...
		*/
		_animationTransitionBetweenScenesFunc(_preloaderFunc);
	}
	/*
	другие публичные функции...
	*/
	this.stopAppFunc = function()
	{
		_blockScript = true;
		_toggleAppFunc();
	}
	this.playAppFunc = function()
	{
		_blockScript = false;
		_toggleAppFunc();
	}
	this.addSoundFunc = function(nameSound_str, initVolume_num)
	{
		if(initVolume_num === undefined)
		{
			initVolume_num = 1;
		}
		_soundManager.addSoundFunc(nameSound_str, 0, 0, 0, initVolume_num, 0);
	}
	this.toggleSoundFunc = function(sound_bool)
	{
		if(sound_bool === undefined)
		{
			sound_bool = false;
		}
		else
		{
			sound_bool = !Boolean(sound_bool);
		}
		_soundManager.setInvisibleFunc(sound_bool);
	}
	this.getLanguageFunc = function()
	{
		return _information.language;
	}
	/*
	Функции настройки Паузы
	В нужном месте на кнопку можно повесить _onClickPauseBtnFunc для ручной установки Паузы
	*/
	function _onClickPauseBtnFunc(event)
	{
		_blockUser = true;
		_toggleAppFunc();
	}
	function _beginPauseAppFunc()
	{
		if(lib.PauseAppScreen)
		{
			if(_pauseLock.numChildren <= 0)
			{
				/*
				
				*/
				if(_information.timeoutPause_id != null)
				{
					clearTimeout(_information.timeoutPause_id);
				}
				/*
				
				*/
				var pauseApp_mc = new lib.PauseAppScreen();
				_pauseLock.addChild(pauseApp_mc);
				pauseApp_mc.gotoAndStop(0);
				/*
				
				*/
				if(pauseApp_mc.screen_mc)
				{
					pauseApp_mc.screen_mc.gotoAndStop(0);
					if(_blockUser)
					{
						pauseApp_mc.screen_mc.gotoAndStop("play");
						pauseApp_mc.screen_mc.mouseChildren = false;
						pauseApp_mc.screen_mc.mouseEnabled = true;
						pauseApp_mc.screen_mc.cursor = "pointer";
						pauseApp_mc.screen_mc.addEventListener("mousedown", _onMouseDownPauseAppFunc, false);
					}
					else
					{
						/*
						
						*/
						pauseApp_mc.screen_mc.gotoAndStop("pause");
						pauseApp_mc.screen_mc.mouseChildren = false;
						pauseApp_mc.screen_mc.mouseEnabled = true;
						pauseApp_mc.screen_mc.cursor = "default";
						/*
						
						*/
						_information.timeoutPause_id = setTimeout(_goToPlayPauseAppFunc, 3000);
					}
				}
				/*
				
				*/
				_stage.update();
			}
		}
	}
	function _endPauseAppFunc()
	{
		/*
		
		*/
		if(_information.timeoutPause_id != null)
		{
			clearTimeout(_information.timeoutPause_id);
		}
		/*
		
		*/
		_clearContainerFunc(_pauseLock);
	}
	function _goToPlayPauseAppFunc()
	{
		if(_blockScript || _blockFocus)
		{
			if(_pauseLock.numChildren === 1)
			{
				var pauseApp_mc = _pauseLock.getChildAt(0);
				if(pauseApp_mc.screen_mc)
				{
					/*
					
					*/
					pauseApp_mc.screen_mc.gotoAndStop("play");
					pauseApp_mc.screen_mc.cursor = "pointer";
					pauseApp_mc.screen_mc.addEventListener("mousedown", _onMouseDownPauseAppFunc, false);
					/*
					
					*/
					_stage.update();
				}
			}
		}
	}
	function _onMouseDownPauseAppFunc(event)
	{
		_blockScript = _blockFocus = _blockUser = false;
		_toggleAppFunc();
	}
	/*
	Функции настройки размера и ориентации
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
			/*
			проверка через availHeight и availWidth
			*/
			/*
			if(window.screen.availHeight > window.screen.availWidth)
			{
				landscapeOrientation_bool = false;
			}
			*/
			/*
			проверка через медиа-запросы
			*/
			/*
			if(window.matchMedia("(orientation: portrait)").matches)
			{
				landscapeOrientation_bool = false;
			}
			*/
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
	Функции настройки фокуса и размытия
	*/
	function _onVisibilityChangeFunc()
	{
		if ((document.visibilityState === "hidden") || (document.hidden))
		{
			_blockFocus = true;
		}
		else
		{
			_blockFocus = false;
		}
		_toggleAppFunc();
	}
	function _onFocusWindowFunc(event)
	{
		_blockFocus = false;
		_toggleAppFunc();
	}
	function _onBlurWindowFunc(event)
	{
		_blockFocus = true;
		_toggleAppFunc();
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
		_currentMainScreen_mc.logo_mc.gotoAndStop(0);
		var logo_img = new Image();
		logo_img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozMkNGOTMxNEE2MzJGMDExQUVGRkIxNjJENEQxMDk1NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowQzM1OUE0NjZCMzQxMUYxQTFEMUM0ODczRDVGNjkzOCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowQzM1OUE0NTZCMzQxMUYxQTFEMUM0ODczRDVGNjkzOCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCRDkzMjgzN0ZCNkFGMTExOTM4MUE5NDQzMEEzQzQyNyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozMkNGOTMxNEE2MzJGMDExQUVGRkIxNjJENEQxMDk1NiIvPiA8L3JkZjpEZXNjcmlwdGlv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";
		var logo_bitmap = new createjs.Bitmap(logo_img);
		_currentMainScreen_mc.logo_mc.addChild(logo_bitmap);
		logo_bitmap.x = -150;
		logo_bitmap.y = -150;
		/*
		_currentMainScreen_mc.logo_mc.scaleX = 0.95;
		_currentMainScreen_mc.logo_mc.scaleY = 0.95;
		_currentMainScreen_mc.logo_mc.mouseChildren = false;
		_currentMainScreen_mc.logo_mc.mouseEnabled = true;
		_currentMainScreen_mc.logo_mc.cursor = "pointer";
		_currentMainScreen_mc.logo_mc.addEventListener("click", _onClickPreloaderBtnFunc, false);
		_currentMainScreen_mc.logo_mc.addEventListener("mouseover", _onMouseOverPreloaderMcFunc, false);
		_currentMainScreen_mc.logo_mc.addEventListener("mouseout", _onMouseOutPreloaderMcFunc, false);
		*/
		/*
		
		*/
		_currentMainScreen_mc.play_mc.gotoAndStop(0);
		_currentMainScreen_mc.play_mc.visible = false;
		_currentMainScreen_mc.play_mc.mouseChildren = false;
		_currentMainScreen_mc.play_mc.mouseEnabled = false;
		/*
		
		*/
		_currentMainScreen_mc.indicator_mc.gotoAndStop(0);
		_currentMainScreen_mc.indicator_mc.mouseChildren = false;
		_currentMainScreen_mc.indicator_mc.mouseEnabled = false;
		_currentMainScreen_mc.indicator_mc.indicator_mc.gotoAndStop(0);
		_currentMainScreen_mc.indicator_mc.indicator_mc.loop = false;
		_currentMainScreen_mc.indicator_mc.indicator_mc.alpha = 1;
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
		loadQueue.loadFile({id:"completed_sound", src:"library/sounds/completed_sound.ogg"});
		loadQueue.loadFile({id:"message_sound", src:"library/sounds/message_sound.ogg"});
		loadQueue.loadFile({id:"tink_sound", src:"library/sounds/tink_sound.ogg"});
		loadQueue.loadFile({id:"tick_sound", src:"library/sounds/tick_sound.ogg"});
		loadQueue.loadFile({id:"paper_sound", src:"library/sounds/paper_sound.ogg"});
		loadQueue.loadFile({id:"success_sound", src:"library/sounds/success_sound.ogg"});
		loadQueue.loadFile({id:"win_sound", src:"library/sounds/win_sound.ogg"});
		loadQueue.loadFile({id:"loss_sound", src:"library/sounds/loss_sound.ogg"});
		loadQueue.loadFile({id:"air_sound", src:"library/sounds/air_sound.ogg"});
		loadQueue.loadFile({id:"whoosh_sound", src:"library/sounds/whoosh_sound.ogg"});
		/*
		добавляем в очередь кое-что из своего
		*/
		
		/*
		запускаем загрузку
		*/
		loadQueue.load();
	}
	function _onMouseOverPreloaderMcFunc(event)
	{
		var currentTarget_mc = event.currentTarget;
		createjs.Tween.get(currentTarget_mc).wait(0).to({scaleX:1, scaleY:1}, (_DELAY / 4) * 1000);
	}
	function _onMouseOutPreloaderMcFunc(event)
	{
		var currentTarget_mc = event.currentTarget;
		createjs.Tween.get(currentTarget_mc).wait(0).to({scaleX:0.95, scaleY:0.95}, (_DELAY / 2) * 1000);
	}
	function _onErrorLoadManifestFunc(event)
	{
		trace("Could not load: " + event.data.src + " !", 2);
	}
	function _onProgressLoadManifestFunc(event)
	{
		var totalFrames_num = _currentMainScreen_mc.indicator_mc.indicator_mc.totalFrames;
		var currentFrame_num = Math.floor(totalFrames_num * event.progress);
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
		_onCompleteLoadAppFunc();
	}
	/*
	
	*/
	function _onCompleteLoadAppFunc()
	{
		/*
		
		*/
		createjs.Tween.get(_currentMainScreen_mc.indicator_mc).wait(0).to({y:700, visible:false}, _DELAY * 1000, createjs.Ease.cubicInOut);
		/*
		
		*/
		_currentMainScreen_mc.play_mc.cursor = "pointer";
		_currentMainScreen_mc.play_mc.mouseChildren = false;
		_currentMainScreen_mc.play_mc.mouseEnabled = true;
		_currentMainScreen_mc.play_mc.alpha = 0.01;
		_currentMainScreen_mc.play_mc.scaleX = 0.04;
		_currentMainScreen_mc.play_mc.scaleY = 0.04;
		_currentMainScreen_mc.play_mc.addEventListener("click", _onClickPlayAppBtnFunc, false);
		_currentMainScreen_mc.play_mc.addEventListener("mouseover", _onMouseOverPreloaderMcFunc, false);
		_currentMainScreen_mc.play_mc.addEventListener("mouseout", _onMouseOutPreloaderMcFunc, false);
		createjs.Tween.get(_currentMainScreen_mc.play_mc).wait(_DELAY * 1000).to({alpha:1, scaleX:0.9, scaleY:0.9}, _DELAY * 1000, createjs.Ease.bounceInOut);
		_currentMainScreen_mc.play_mc.visible = true;
		/*
		
		*/
		var bodyCursor_mc = new lib.Cursor();
		bodyCursor_mc.gotoAndStop(0);
		bodyCursor_mc.name = "body_mc";
		_cursor.addChild(bodyCursor_mc);
		_cursor.mouseChildren = false;
		_cursor.mouseEnabled = false;
		/*
		
		*/
		_onResizeWindowFunc();
	}
	/*
	
	*/
	function _onClickPlayAppBtnFunc(event)
	{
		/*
		
		*/
		_soundManager.addSoundFunc("background_sound", 0, 0, -1, 0.1, 0);
		/*
		Pre-roll ads
		*/
		//_addAdsFunc();
		/*
		
		*/
		_animationTransitionBetweenScenesFunc(_languagesFunc);
		//_animationTransitionBetweenScenesFunc(_welcomeFunc);
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
		if(_currentMainScreen_mc.freeGames_mc)
		{
			_currentMainScreen_mc.freeGames_mc.addEventListener("click", _onClickFreeGamesMcFunc, false);
		}
		/*
		
		*/
		_currentMainScreen_mc.play_btn.addEventListener("click", _onClickPlayBtnFunc, false);
		/*
		
		*/
		if(_currentMainScreen_mc.totalFrames > 1)
		{
			if(_hasLabelInMovieClipFunc(_currentMainScreen_mc, "mid"))
			{
				_currentMainScreen_mc.loop = false;
				var timelineControl = new Edapskov_TimelineControl(_currentMainScreen_mc);
				timelineControl.gotoFunc("mid", 1, 0);
				timelineControl.addEventListener("completed_timeline", _onMidWelcomeFunc, false);
			}
			else
			{
				trace("Вижу анимацию, но не вижу Label!")
			}
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
		_resetFunc();
		/*
		СОХРАНЕНИЕ ИГРЫ
		*/
		_loadGameFunc();
		/*
		
		*/
		_soundManager.removeAllSoundExceptNameFunc(["background_sound", "click_sound"]);
		/*
		
		*/
		_addAdsFunc();
		/*
		
		*/
		if(_hasLabelInMovieClipFunc(_currentMainScreen_mc, "end"))
		{
			var timelineControl = new Edapskov_TimelineControl(_currentMainScreen_mc);
			timelineControl.gotoFunc("end", 1, 0);
			timelineControl.addEventListener("completed_timeline", _onEndWelcomeFunc, false);
		}
		else
		{
			_onEndWelcomeFunc(undefined);
		}
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
	function _resetFunc()
	{
		/*
		
		*/
		_information.shownAds = false;
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
		_information.targetLocation = 1;
		_information.totalLocations = 0;
		for(var propLocations in _information.locations)
		{
			if(_information.locations.hasOwnProperty(propLocations))
			{
				_information.totalLocations++;
				_information.locations[propLocations].completed = false;
			}
		}
	}
	/*
	
	*/
	function _onMidWelcomeFunc(event)
	{
		
	}
	/*
	
	*/
	function _onEndWelcomeFunc(event)
	{
		/*
		
		*/
		//_animationTransitionBetweenScenesFunc(_selectFunc, 0, 1, null, true);
		/*
		возможные варианты...
		*/
		if(_information.firstRun)
		{
			_information.firstRun = false;
			_animationTransitionBetweenScenesFunc(_cartoonFunc, 0, 1, null, true);
		}
		else
		{
			_animationTransitionBetweenScenesFunc(_selectFunc, 0, 1, null, true);
		}
	}
	/*
	==============================================================================================================
	cartoonFunc
	==============================================================================================================
	*/
	function _cartoonFunc()
	{
		/*
		
		*/
		_information.currentCartoon++;
		/*
		
		*/
		_clearContainerFunc(_main);
		_clearContainerFunc(_before);
		/*
		
		*/
		_currentMainScreen_mc = new lib.CartoonScreen();
		_main.addChild(_currentMainScreen_mc);
		_currentMainScreen_mc.gotoAndStop(0);
		_currentMainScreen_mc.body_mc.gotoAndStop(0);
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
		if(_currentMainScreen_mc.next_mc)
		{
			_currentMainScreen_mc.next_mc.mouseChildren = false;
			_currentMainScreen_mc.next_mc.mouseEnabled = true;
			_currentMainScreen_mc.next_mc.cursor = "pointer";
			_currentMainScreen_mc.next_mc.visible = false;
		}
		/*
		
		*/
		if(_currentMainScreen_mc.skip_btn)
		{
			_currentMainScreen_mc.skip_btn.addEventListener("click", _onClickSkipBtnCartoonFunc, false);
		}
		/*
		
		*/
		_updateCartoonFunc();
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
	function _updateCartoonFunc()
	{
		/*
		
		*/
		_currentMainScreen_mc.next_mc.visible = false;
		/*
		
		*/
		var animation_mc = _currentMainScreen_mc.body_mc["frame_" + Number(_currentMainScreen_mc.body_mc.currentFrame + 1) + "_mc"];
		animation_mc.loop = false;
		var timelineControl = new Edapskov_TimelineControl(animation_mc);
		timelineControl.gotoEndFunc();
		timelineControl.addEventListener("completed_timeline", _onFinishAnimatedCartoonFunc, false);
	}
	/*
	
	*/
	function _onFinishAnimatedCartoonFunc(event)
	{
		_currentMainScreen_mc.next_mc.visible = true;
		_currentMainScreen_mc.next_mc.alpha = 0.01;
		_currentMainScreen_mc.next_mc.scaleX = 0.5;
		_currentMainScreen_mc.next_mc.scaleY = 0.5;
		createjs.Tween.get(_currentMainScreen_mc.next_mc).wait(0).to({alpha:1, scaleX:1, scaleY:1}, (_DELAY / 4) * 1000);
		_currentMainScreen_mc.next_mc.addEventListener("click", _onClickNextMcCartoonFunc, false);
		if(_currentMainScreen_mc.next_mc.animation_mc)
		{
			_currentMainScreen_mc.next_mc.animation_mc.gotoAndStop(0);
			if(_currentMainScreen_mc.next_mc.animation_mc.body_mc)
			{
				_currentMainScreen_mc.next_mc.animation_mc.body_mc.gotoAndStop(0);
				_currentMainScreen_mc.next_mc.animation_mc.body_mc.play();
			}
		}
	}
	/*
	
	*/
	function _onClickNextMcCartoonFunc(event)
	{
		/*
		
		*/
		var point_obj = event.currentTarget.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		event.currentTarget.removeEventListener("click", _onClickNextMcCartoonFunc, false);
		/*
		
		*/
		if(_currentMainScreen_mc.body_mc.currentFrame < (_currentMainScreen_mc.body_mc.totalFrames - 1))
		{
			/*
			
			*/
			_currentMainScreen_mc.body_mc.gotoAndStop(_currentMainScreen_mc.body_mc.currentFrame + 1);
			/*
			
			*/
			_updateCartoonFunc();
		}
		else
		{
			_updateScreenCartoonFunc();
		}
	}
	/*
	
	*/
	function _onClickSkipBtnCartoonFunc(event)
	{
		/*
		
		*/
		var point_obj = event.currentTarget.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		event.currentTarget.removeEventListener("click", _onClickSkipBtnCartoonFunc, false);
		/*
		
		*/
		_updateScreenCartoonFunc();
	}
	/*
	
	*/
	function _updateScreenCartoonFunc()
	{
		_animationTransitionBetweenScenesFunc(_selectFunc, 0, 1, null, true);
	}
	/*
	==============================================================================================================
	Selection Screen
	==============================================================================================================
	*/
	function _selectFunc()
	{
		/*
		
		*/
		_information.currentNameLocation = null;
		/*
		
		*/
		_clearContainerFunc(_main);
		_clearContainerFunc(_before);
		/*
		
		*/
		_currentMainScreen_mc = new lib.SelectionScreen();
		_main.addChild(_currentMainScreen_mc);
		_currentMainScreen_mc.gotoAndStop(0);
		/*
		
		*/
		_currentMainScreen_mc.logo_btn.addEventListener("click", _onClickLogoBtnFunc, false);
		/*
		
		*/
		_setContainerSelectFunc();
		/*
		
		*/
		_updateSelectFunc();
		/*
		
		*/
		if(_currentMainScreen_mc.help_mc)
		{
			if(_information.firstRun)
			{
				_currentMainScreen_mc.removeChild(_currentMainScreen_mc.help_mc);
			}
			else
			{
				_information.firstRun = true;
				_currentMainScreen_mc.help_mc.addEventListener("click", _onClickHelpMCFunc, false);
			}
		}
		/*
		
		*/
		if(_currentMainScreen_mc.moreGames_btn)
		{
			_currentMainScreen_mc.moreGames_btn.alpha = 0.01;
			createjs.Tween.get(_currentMainScreen_mc.moreGames_btn).wait(_DELAY * 1000).to({alpha:1}, _DELAY * 1000);
			_currentMainScreen_mc.moreGames_btn.addEventListener("click", _onClickMoreGamesBtnFunc, false);
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
	function _onClickHelpMCFunc(event)
	{
		/*
		
		*/
		var currentTarget_mc = event.currentTarget;
		/*
		
		*/
		var point_obj = currentTarget_mc.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		currentTarget_mc.removeEventListener("click", _onClickHelpMCFunc, false);
		currentTarget_mc.parent.removeChild(currentTarget_mc);
	}
	/*
	
	*/
	function _setContainerSelectFunc()
	{
		/*
		
		*/
		var targetLocation_str = String("location_" + _information.targetLocation);
		/*
		
		*/
		if(_currentMainScreen_mc.locations_mc)
		{
			/*
			
			*/
			_action_mc = _currentMainScreen_mc.locations_mc;
			_action_mc.gotoAndStop(0);
			/*
			
			*/
			if(_hasLabelInMovieClipFunc(_action_mc, targetLocation_str))
			{
				/*
				
				*/
				_action_mc.gotoAndStop(targetLocation_str);
				/*
				
				*/
				if(_action_mc["frame_" + (_action_mc.currentFrame + 1) + "_mc"])
				{
					_action_mc = _action_mc["frame_" + (_action_mc.currentFrame + 1) + "_mc"];
					_action_mc.gotoAndStop(0);
				}
			}
			/*
			
			*/
			if(_action_mc.totalFrames > 1)
			{
				if(_hasLabelInMovieClipFunc(_action_mc, "mid"))
				{
					_action_mc.loop = false;
					var timelineControl = new Edapskov_TimelineControl(_action_mc);
					timelineControl.gotoFunc("mid", 1, 0);
					timelineControl.addEventListener("completed_timeline", _onMidSelectFunc, false);
				}
				else
				{
					trace("Вижу анимацию, но не вижу Label!")
				}
			}
		}
		else
		{
			trace("Отсутствует locations_mc!");
		}
	}
	/*
	
	*/
	function _onMidSelectFunc(event)
	{
		
	}
	/*
	
	*/
	function _updateSelectFunc()
	{
		/*
		
		*/
		var location_mc;
		var location_str;
		var location_num = 1;
		/*
		
		*/
		if(_action_mc)
		{
			/*
			
			*/
			_action_mc.mouseEnabled = true;
			_action_mc.mouseChildren = true;
			/*
			
			*/
			while(location_num <= _information.totalLocations)
			{
				/*
				
				*/
				location_str = "location_" + location_num;
				/*
				
				*/
				if(_information.locations.hasOwnProperty(location_str))
				{
					if(_action_mc[location_str])
					{
						/*
						
						*/
						location_mc = _action_mc[location_str];
						location_mc.gotoAndStop(0);
						location_mc.name = location_str;
						/*
						
						*/
						if(Number(location_num) < Number(_information.targetLocation))
						{
							/*
							location_mc.gotoAndStop(2);
							location_mc.mouseEnabled = true;
							location_mc.mouseChildren = false;
							location_mc.cursor = "pointer";
							location_mc.addEventListener("mouseover", _onMouseOverLocationSelectFunc, false);
							location_mc.addEventListener("mouseout", _onMouseOutLocationSelectFunc, false);
							location_mc.addEventListener("click", _onClickLocationSelectFunc, false);
							*/
							location_mc.gotoAndStop(2);
							location_mc.mouseEnabled = false;
							location_mc.mouseChildren = false;
							location_mc.cursor = "default";
							location_mc.removeEventListener("mouseover", _onMouseOverLocationSelectFunc, false);
							location_mc.removeEventListener("mouseout", _onMouseOutLocationSelectFunc, false);
							location_mc.removeEventListener("click", _onClickLocationSelectFunc, false);
						}
						else if(Number(location_num) == Number(_information.targetLocation))
						{
							location_mc.gotoAndStop(1);
							location_mc.mouseEnabled = true;
							location_mc.mouseChildren = false;
							location_mc.cursor = "pointer";
							location_mc.addEventListener("mouseover", _onMouseOverLocationSelectFunc, false);
							location_mc.addEventListener("mouseout", _onMouseOutLocationSelectFunc, false);
							location_mc.addEventListener("click", _onClickLocationSelectFunc, false);
						}
						else
						{
							location_mc.gotoAndStop(0);
							location_mc.mouseEnabled = false;
							location_mc.mouseChildren = false;
							location_mc.cursor = "default";
						}
					}
					else
					{
						trace("Такой локации нет в исходнике!");
					}
				}
				else
				{
					trace("Такой локации нет в списке!");
				}
				/*
				
				*/
				location_num++;
			}
		}
		else
		{
			trace("Отсутствует locations_mc!");
		}
	}
	function _onMouseOverLocationSelectFunc(event)
	{
		var currentTarget_mc = event.currentTarget;
		//createjs.Tween.get(currentTarget_mc).wait(0).to({scaleX:1.06, scaleY:1.06}, (_DELAY / 5) * 1000);
	}
	function _onMouseOutLocationSelectFunc(event)
	{
		var currentTarget_mc = event.currentTarget;
		//createjs.Tween.get(currentTarget_mc).wait(0).to({scaleX:1, scaleY:1}, (_DELAY / 3) * 1000);
	}
	function _onClickLocationSelectFunc(event)
	{
		/*
		
		*/
		var location_mc = event.currentTarget;
		location_mc.gotoAndStop(2);
		/*
		
		*/
		var point_obj = location_mc.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 0.2, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		_information.currentNameLocation = String(location_mc.name);
		/*
		
		*/
		new Edapskov_Flickering(_before, location_mc, ["#ffffff", "#cccccc"], 10, 24);
		/*
		
		*/
		/*
		var gravityExplosion_mc = new lib.GravityExplosionMC();
		_before.addChild(gravityExplosion_mc);
		gravityExplosion_mc.gotoAndStop(0);
		point_obj = location_mc.localToLocal(event.localX, event.localY, _before);
		gravityExplosion_mc.x = point_obj.x;
		gravityExplosion_mc.y = point_obj.y;
		*/
		var flashAnimation_mc = new lib.FlashAnimation();
		_before.addChild(flashAnimation_mc);
		flashAnimation_mc.gotoAndStop(0);
		point_obj = location_mc.localToLocal(event.localX, event.localY, _before);
		flashAnimation_mc.x = point_obj.x;
		flashAnimation_mc.y = point_obj.y;
		/*
		
		*/
		_action_mc.mouseEnabled = false;
		_action_mc.mouseChildren = false;
		/*
		исключения
		*/
		/*
		if(_skippedLocationsFunc() == 1)
		{
			_addAdsFunc();
		}
		*/
		/*
		
		*/
		if(_hasLabelInMovieClipFunc(_action_mc, "end"))
		{
			var timelineControl = new Edapskov_TimelineControl(_action_mc);
			timelineControl.gotoFunc("end", 1, 0);
			timelineControl.addEventListener("completed_timeline", _onEndSelectFunc, false);
		}
		else
		{
			//_animationTransitionBetweenScenesFunc(_locationFunc);
			_animationTransitionBetweenScenesFunc(_locationFunc, 1, 1, null, true);
		}
	}
	/*
	
	*/
	function _onEndSelectFunc(event)
	{
		//_animationTransitionBetweenScenesFunc(_locationFunc);
		_animationTransitionBetweenScenesFunc(_locationFunc, 0, 1, null, true);
	}
	/*
	==============================================================================================================
	Location Screen
	==============================================================================================================
	*/
	function _locationFunc()
	{
		/*
		
		*/
		_clearContainerFunc(_main);
		_clearContainerFunc(_before);
		/*
		
		*/
		_currentMainScreen_mc = new lib["LocationScreen_" + parseInt(_information.currentNameLocation.split("_")[1])]();
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
		_beginGameFunc();
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
	function _beginGameFunc()
	{
		/*
		
		*/
		_information.fine_uint = Math.round(_information.locations[_information.currentNameLocation].fine * createjs.Ticker.framerate);
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
		if(_currentMainScreen_mc.popup_mc)
		{
			_currentMainScreen_mc.popup_mc.gotoAndStop(0);
			_currentMainScreen_mc.popup_mc.visible = true;
			_currentMainScreen_mc.popup_mc.gotoAndStop("start");
			if(_currentMainScreen_mc.popup_mc.start_mc)
			{
				_currentMainScreen_mc.popup_mc.start_mc.gotoAndStop(0);
				_currentMainScreen_mc.popup_mc.start_mc.mouseEnabled = true;
				_currentMainScreen_mc.popup_mc.start_mc.mouseChildren = false;
				_currentMainScreen_mc.popup_mc.start_mc.cursor = "pointer";
				_currentMainScreen_mc.popup_mc.start_mc.addEventListener("click", _onClickStartLocationFunc, false);
				var timelineControl_obj = new Edapskov_TimelineControl(_currentMainScreen_mc.popup_mc.start_mc);
				timelineControl_obj.gotoFunc("end", 1);
			}
			else
			{
				trace("Мувик start_mc не обнаружен!");
			}
		}
		else
		{
			trace("Мувик popup_mc не обнаружен!");
		}
		/*
		
		*/
		if(_currentMainScreen_mc.skip_mc)
		{
			if(_information.locations[_information.currentNameLocation].skipped)
			{
				_currentMainScreen_mc.skip_mc.cursor = "pointer";
				_currentMainScreen_mc.skip_mc.mouseChildren = false;
				_currentMainScreen_mc.skip_mc.mouseEnabled = true;
				_currentMainScreen_mc.skip_mc.addEventListener("click", _onClickSkipRoundMcFunc, false);
				_currentMainScreen_mc.skip_mc.alpha = 0.01;
				createjs.Tween.get(_currentMainScreen_mc.skip_mc).wait(0).to({alpha:1}, (_DELAY / 2) * 1000);
				_currentMainScreen_mc.skip_mc.visible = true;
			}
			else
			{
				_currentMainScreen_mc.skip_mc.visible = false;
			}
		}
		/*
		
		*/
		if(_currentMainScreen_mc.indicator_mc)
		{
			/*
			
			*/
			_currentMainScreen_mc.indicator_mc.gotoAndStop(0);
			/*
			
			*/
			if(_currentMainScreen_mc.indicator_mc.body_mc)
			{
				_currentMainScreen_mc.indicator_mc.body_mc.gotoAndStop(0);
			}
			else
			{
				trace("Мувик indicator_mc.body_mc не обнаружен!");
			}
		}
		else
		{
			trace("Мувик indicator_mc не обнаружен!");
		}
		/*
		
		*/
		if(_currentMainScreen_mc.cards_mc)
		{
			_updateCardsFunc();
		}
		else
		{
			trace("Мувик cards_mc не обнаружен!");
		}
		/*
		
		*/
		if(_currentMainScreen_mc.pause_btn)
		{
			_currentMainScreen_mc.pause_btn.visible = false;
			_currentMainScreen_mc.pause_btn.addEventListener("click", _onClickPauseBtnFunc, false);
		}
	}
	/*
	
	*/
	function _onClickStartLocationFunc(event)
	{
		/*
		
		*/
		var currentTarget_mc = event.currentTarget;
		currentTarget_mc.removeEventListener("click", _onClickStartLocationFunc, false);
		/*
		
		*/
		_soundManager.removeAllSoundExceptNameFunc(["background_sound", "click_sound"]);
		/*
		
		*/
		var point_obj = currentTarget_mc.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 0.1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		var gravityExplosion_mc = new lib.GravityExplosionMC();
		_before.addChild(gravityExplosion_mc);
		gravityExplosion_mc.gotoAndStop(0);
		point_obj = currentTarget_mc.localToLocal(event.localX, event.localY, _before);
		gravityExplosion_mc.x = point_obj.x;
		gravityExplosion_mc.y = point_obj.y;
		/*
		
		*/
		_startRoundFunc();
	}
	/*
	
	*/
	function _startRoundFunc()
	{
		/*
		
		*/
		_currentMainScreen_mc.popup_mc.visible = true;
		_currentMainScreen_mc.popup_mc.gotoAndStop("countdown");
		if(_currentMainScreen_mc.popup_mc.countdown_mc)
		{
			_currentMainScreen_mc.popup_mc.countdown_mc.gotoAndStop(0);
			_currentMainScreen_mc.popup_mc.countdown_mc.mouseEnabled = false;
			_currentMainScreen_mc.popup_mc.countdown_mc.mouseChildren = false;
			_currentMainScreen_mc.popup_mc.countdown_mc.cursor = "default";
			var timelineControl_obj = new Edapskov_TimelineControl(_currentMainScreen_mc.popup_mc.countdown_mc);
			timelineControl_obj.gotoFunc("end", 1);
			timelineControl_obj.addEventListener("completed_timeline", _onFinishCountDownFunc, false);
		}
		else
		{
			trace("Мувик с анимацией обратного отсчёта не обнаружен!");
		}
		/*
		
		*/
		_currentMainScreen_mc.indicator_mc.gotoAndStop(0);
		_currentMainScreen_mc.indicator_mc.body_mc.gotoAndStop(0);
		/*
		обновление переменных
		*/
		_information.cards = new Array();
		_information.openCards_arr = new Array();
		/*
		создаём случайный массив случайных карт
		*/
		_updateArrayCardsFunc();
		/*
		визуализируем
		*/
		_updateCardsFunc(1);
	}
	/*
	
	*/
	function _onFinishCountDownFunc(event)
	{
		_showCardsFunc();
	}
	/*
	
	*/
	function _showCardsFunc()
	{
		/*
		
		*/
		_currentMainScreen_mc.popup_mc.visible = false;
		/*
		
		*/
		_currentMainScreen_mc.indicator_mc.gotoAndStop(0);
		_currentMainScreen_mc.indicator_mc.body_mc.gotoAndStop(0);
		/*
		
		*/
		_startIndicatorFunc(_information.locations[_information.currentNameLocation].hintTimer, _hideCardsFunc)
		/*
		
		*/
		_updateCardsFunc(2);
	}
	function _hideCardsFunc()
	{
		/*
		
		*/
		_currentMainScreen_mc.popup_mc.visible = false;
		/*
		
		*/
		_currentMainScreen_mc.indicator_mc.gotoAndStop(0);
		_currentMainScreen_mc.indicator_mc.body_mc.gotoAndStop(0);
		/*
		
		*/
		_startIndicatorFunc(_information.locations[_information.currentNameLocation].timer, _lossFunc);
		/*
		
		*/
		_updateCardsFunc(3);
	}
	/*
	
	*/
	function _onClickMatchingCardMcFunc(event)
	{
		/*
		
		*/
		var currentCard_mc = event.currentTarget;
		var currentCard_str = currentCard_mc.name;
		var currentCard_num = Number(currentCard_str.split("_")[1]);
		var currentOption_num = Number(currentCard_str.split("_")[2]);
		/*
		
		*/
		var point_obj = currentCard_mc.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("paper_sound", 0, 0, 0, 0.1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		_updateCardFunc(currentCard_mc, 4);
		/*
		
		*/
		_information.openCards_arr.push([currentCard_str, currentCard_num]);
		/*
		
		*/
		if(_information.openCards_arr.length == 2)
		{
			if(_information.openCards_arr[0][1] != currentCard_num)
			{
				/*
				
				*/
				if(_currentMainScreen_mc.cards_mc.getChildByName(_information.openCards_arr[0][0]))
				{
					_updateCardFunc(_currentMainScreen_mc.cards_mc.getChildByName(_information.openCards_arr[0][0]), 5);
				}
				/*
				
				*/
				_information.openCards_arr = new Array();
				_information.openCards_arr.push([currentCard_str, currentCard_num]);
				/*
				штраф за ошибку
				*/
				if((_information.currentTimer_uint + (_information.fine_uint * 2)) <= _information.totalTimer_uint)
				{
					_information.currentTimer_uint = _information.currentTimer_uint + _information.fine_uint;
				}
			}
		}
		/*
		
		*/
		if(_information.openCards_arr.length == 3)
		{
			if(_information.openCards_arr[0][1] != currentCard_num)
			{
				/*
				
				*/
				if(_currentMainScreen_mc.cards_mc.getChildByName(_information.openCards_arr[0][0]))
				{
					_updateCardFunc(_currentMainScreen_mc.cards_mc.getChildByName(_information.openCards_arr[0][0]), 5);
				}
				if(_currentMainScreen_mc.cards_mc.getChildByName(_information.openCards_arr[1][0]))
				{
					_updateCardFunc(_currentMainScreen_mc.cards_mc.getChildByName(_information.openCards_arr[1][0]), 5);
				}
				/*
				
				*/
				_information.openCards_arr = new Array();
				_information.openCards_arr.push([currentCard_str, currentCard_num]);
				/*
				штраф за ошибку
				*/
				if((_information.currentTimer_uint + (_information.fine_uint * 2)) <= _information.totalTimer_uint)
				{
					_information.currentTimer_uint = _information.currentTimer_uint + _information.fine_uint;
				}
			}
			else
			{
				/*
				
				*/
				_soundManager.addSoundFunc("success_sound", 0, 0, 0, 0.6, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
				/*
				
				*/
				var flashAnimation_mc = new lib.FlashAnimation();
				_before.addChild(flashAnimation_mc);
				flashAnimation_mc.gotoAndStop(0);
				point_obj = currentCard_mc.localToLocal(event.localX, event.localY, _before);
				flashAnimation_mc.x = point_obj.x;
				flashAnimation_mc.y = point_obj.y;
				/*
				
				*/
				if(_currentMainScreen_mc.cards_mc.getChildByName(_information.openCards_arr[0][0]))
				{
					_updateCardFunc(_currentMainScreen_mc.cards_mc.getChildByName(_information.openCards_arr[0][0]), 6);
				}
				if(_currentMainScreen_mc.cards_mc.getChildByName(_information.openCards_arr[1][0]))
				{
					_updateCardFunc(_currentMainScreen_mc.cards_mc.getChildByName(_information.openCards_arr[1][0]), 6);
				}
				if(_currentMainScreen_mc.cards_mc.getChildByName(_information.openCards_arr[2][0]))
				{
					_updateCardFunc(_currentMainScreen_mc.cards_mc.getChildByName(_information.openCards_arr[2][0]), 6);
				}
				/*
				
				*/
				_removeMatchingCardFromArrayFunc();
				/*
				
				*/
				_information.openCards_arr = new Array();
				/*
				
				*/
				if(_information.cards_arr.length <= 0)
				{
					_winFunc();
				}
			}
		}
	}
	/*
	
	*/
	function _updateCardsFunc(modification_uint)
	{
		/*
		
		*/
		if(modification_uint === undefined)
		{
			modification_uint = 0;
		}
		else
		{
			modification_uint = Number(modification_uint);
		}
		/*
		
		*/
		var totalCards_num;
		var card_mc;
		var i;
		var j;
		/*
		
		*/
		if(modification_uint == 0)
		{
			/*
			
			*/
			_currentMainScreen_mc.cards_mc.gotoAndStop(0);
			_currentMainScreen_mc.cards_mc.mouseChildren = false;
			_currentMainScreen_mc.cards_mc.mouseEnabled = false;
			/*
			
			*/
			totalCards_num = _currentMainScreen_mc.cards_mc.numChildren;
			i = 0;
			/*
			
			*/
			while(i < totalCards_num)
			{
				/*
				
				*/
				if(_currentMainScreen_mc.cards_mc.getChildAt(i))
				{
					/*
					
					*/
					card_mc = _currentMainScreen_mc.cards_mc.getChildAt(i);
					/*
					
					*/
					_updateCardFunc(card_mc, modification_uint);
				}
				/*
				
				*/
				i++;
			}
		}
		/*
		
		*/
		if(modification_uint == 1)
		{
			/*
			
			*/
			_currentMainScreen_mc.cards_mc.mouseChildren = false;
			_currentMainScreen_mc.cards_mc.mouseEnabled = false;
			/*
			
			*/
			totalCards_num = _currentMainScreen_mc.cards_mc.numChildren;
			i = 0;
			j = 0;
			/*
			
			*/
			while(i < totalCards_num)
			{
				/*
				
				*/
				if(_currentMainScreen_mc.cards_mc.getChildAt(i))
				{
					/*
					
					*/
					card_mc = _currentMainScreen_mc.cards_mc.getChildAt(i);
					/*
					
					*/
					if(j < _information.cards_arr.length)
					{
						/*
						
						*/
						card_mc.name = _information.cards_arr[j];
						/*
						
						*/
						_updateCardFunc(card_mc, modification_uint);
						/*
						
						*/
						j++;
					}
					else
					{
						card_mc.alpha = 0.4;
					}
				}
				/*
				
				*/
				i++;
			}
		}
		/*
		
		*/
		if(modification_uint == 2)
		{
			/*
			
			*/
			_currentMainScreen_mc.cards_mc.mouseChildren = false;
			_currentMainScreen_mc.cards_mc.mouseEnabled = false;
			/*
			
			*/
			totalCards_num = _information.cards_arr.length;
			i = 0;
			/*
			
			*/
			while(i < totalCards_num)
			{
				/*
				
				*/
				if(_currentMainScreen_mc.cards_mc.getChildByName(_information.cards_arr[i]))
				{
					/*
					
					*/
					card_mc = _currentMainScreen_mc.cards_mc.getChildByName(_information.cards_arr[i]);
					/*
					
					*/
					_updateCardFunc(card_mc, modification_uint);
				}
				/*
				
				*/
				i++;
			}
		}
		/*
		
		*/
		if(modification_uint == 3)
		{
			/*
			
			*/
			_currentMainScreen_mc.cards_mc.mouseChildren = true;
			_currentMainScreen_mc.cards_mc.mouseEnabled = true;
			/*
			
			*/
			totalCards_num = _information.cards_arr.length;
			i = 0;
			/*
			
			*/
			while(i < totalCards_num)
			{
				/*
				
				*/
				if(_currentMainScreen_mc.cards_mc.getChildByName(_information.cards_arr[i]))
				{
					/*
					
					*/
					card_mc = _currentMainScreen_mc.cards_mc.getChildByName(_information.cards_arr[i]);
					/*
					
					*/
					_updateCardFunc(card_mc, modification_uint);
				}
				/*
				
				*/
				i++;
			}
			/*
			
			*/
			if(_currentMainScreen_mc.pause_btn)
			{
				_currentMainScreen_mc.pause_btn.visible = true;
			}
		}
		/*
		
		*/
		if(modification_uint == 4)
		{
			/*
			
			*/
			_currentMainScreen_mc.cards_mc.mouseChildren = true;
			_currentMainScreen_mc.cards_mc.mouseEnabled = true;
			/*
			
			*/
			totalCards_num = _information.cards_arr.length;
			i = 0;
			/*
			
			*/
			while(i < totalCards_num)
			{
				/*
				
				*/
				if(_currentMainScreen_mc.cards_mc.getChildByName(_information.cards_arr[i]))
				{
					/*
					
					*/
					card_mc = _currentMainScreen_mc.cards_mc.getChildByName(_information.cards_arr[i]);
					/*
					
					*/
					_updateCardFunc(card_mc, modification_uint);
				}
				/*
				
				*/
				i++;
			}
		}
		/*
		
		*/
		if(modification_uint == 5)
		{
			/*
			
			*/
			_currentMainScreen_mc.cards_mc.mouseChildren = true;
			_currentMainScreen_mc.cards_mc.mouseEnabled = true;
			/*
			
			*/
			totalCards_num = _information.cards_arr.length;
			i = 0;
			/*
			
			*/
			while(i < totalCards_num)
			{
				/*
				
				*/
				if(_currentMainScreen_mc.cards_mc.getChildByName(_information.cards_arr[i]))
				{
					/*
					
					*/
					card_mc = _currentMainScreen_mc.cards_mc.getChildByName(_information.cards_arr[i]);
					/*
					
					*/
					_updateCardFunc(card_mc, modification_uint);
				}
				/*
				
				*/
				i++;
			}
		}
		/*
		
		*/
		if(modification_uint == 6)
		{
			/*
			
			*/
			_currentMainScreen_mc.cards_mc.mouseChildren = true;
			_currentMainScreen_mc.cards_mc.mouseEnabled = true;
			/*
			
			*/
			totalCards_num = _information.cards_arr.length;
			i = 0;
			/*
			
			*/
			while(i < totalCards_num)
			{
				/*
				
				*/
				if(_currentMainScreen_mc.cards_mc.getChildByName(_information.cards_arr[i]))
				{
					/*
					
					*/
					card_mc = _currentMainScreen_mc.cards_mc.getChildByName(_information.cards_arr[i]);
					/*
					
					*/
					_updateCardFunc(card_mc, modification_uint);
				}
				/*
				
				*/
				i++;
			}
		}
		/*
		
		*/
		if(modification_uint == 7)
		{
			/*
			
			*/
			_currentMainScreen_mc.cards_mc.mouseChildren = false;
			_currentMainScreen_mc.cards_mc.mouseEnabled = false;
			/*
			
			*/
			if(_currentMainScreen_mc.pause_btn)
			{
				_currentMainScreen_mc.pause_btn.visible = false;
			}
		}
		/*
		
		*/
		if(modification_uint == 10)
		{
			/*
			
			*/
			_currentMainScreen_mc.cards_mc.mouseChildren = false;
			_currentMainScreen_mc.cards_mc.mouseEnabled = false;
			/*
			
			*/
			totalCards_num = _information.cards_arr.length;
			i = 0;
			/*
			
			*/
			while(i < totalCards_num)
			{
				/*
				
				*/
				if(_currentMainScreen_mc.cards_mc.getChildByName(_information.cards_arr[i]))
				{
					/*
					
					*/
					card_mc = _currentMainScreen_mc.cards_mc.getChildByName(_information.cards_arr[i]);
					/*
					
					*/
					_updateCardFunc(card_mc, modification_uint);
				}
				/*
				
				*/
				i++;
			}
		}
	}
	function _updateCardFunc(card_mc, modification_uint)
	{
		/*
		
		*/
		if(modification_uint === undefined)
		{
			modification_uint = 0;
		}
		else
		{
			modification_uint = Number(modification_uint);
		}
		/*
		
		*/
		var currentFrame_uint;
		var currentSubFrame_uint;
		var currentFrame_mc;
		var currentSubFrame_mc;
		var totalFrames_num;
		var timelineControl_obj;
		var i;
		/*
		
		*/
		card_mc.gotoAndStop(0);
		/*
		
		*/
		if(modification_uint == 0)
		{
			/*
			
			*/
			card_mc.alpha = 1;
			card_mc.visible = true;
			card_mc.cursor = "default";
			card_mc.mouseChildren = false;
			card_mc.mouseEnabled = false;
			/*
			
			*/
			totalFrames_num = card_mc.totalFrames;
			i = 0;
			/*
			
			*/
			while(i < totalFrames_num)
			{
				/*
				
				*/
				card_mc.gotoAndStop(i);
				/*
				
				*/
				if(card_mc["frame_" + i + "_mc"])
				{
					/*
					
					*/
					currentFrame_mc = card_mc["frame_" + i + "_mc"];
					/*
					
					*/
					currentFrame_mc.gotoAndStop(0);
					if(currentFrame_mc["frame_0_mc"])
					{
						currentSubFrame_mc = currentFrame_mc["frame_0_mc"];
						currentSubFrame_mc.gotoAndStop(0);
						currentSubFrame_mc.gotoAndStop("end");
					}
					else
					{
						trace("Из трио мувик frame_0_mc не обнаружен!");
					}
					/*
					
					*/
					currentFrame_mc.gotoAndStop(1);
					if(currentFrame_mc["frame_1_mc"])
					{
						currentSubFrame_mc = currentFrame_mc["frame_1_mc"];
						currentSubFrame_mc.gotoAndStop(0);
						currentSubFrame_mc.gotoAndStop("end");
					}
					else
					{
						trace("Из трио мувик frame_1_mc не обнаружен!");
					}
					/*
					
					*/
					currentFrame_mc.gotoAndStop(2);
					if(currentFrame_mc["frame_2_mc"])
					{
						currentSubFrame_mc = currentFrame_mc["frame_2_mc"];
						currentSubFrame_mc.gotoAndStop(0);
						currentSubFrame_mc.gotoAndStop("end");
					}
					else
					{
						trace("Из трио мувик frame_2_mc не обнаружен!");
					}
				}
				else
				{
					trace("Мувик frame_" + i + "_mc не обнаружен!");
				}
				/*
				
				*/
				i++;
			}
		}
		/*
		
		*/
		if(modification_uint == 1)
		{
			/*
			
			*/
			card_mc.alpha = 1;
			card_mc.visible = true;
			card_mc.cursor = "default";
			card_mc.mouseChildren = false;
			card_mc.mouseEnabled = false;
			/*
			
			*/
			currentFrame_uint = Number(card_mc.name.split("_")[1]);
			currentSubFrame_uint = Number(card_mc.name.split("_")[2]);
			/*
			
			*/
			card_mc.gotoAndStop(currentFrame_uint);
			/*
			
			*/
			if(card_mc["frame_" + currentFrame_uint + "_mc"])
			{
				/*
				
				*/
				currentFrame_mc = card_mc["frame_" + currentFrame_uint + "_mc"];
				currentFrame_mc.gotoAndStop(currentSubFrame_uint);
				/*
				
				*/
				if(currentFrame_mc["frame_" + currentSubFrame_uint + "_mc"])
				{
					currentSubFrame_mc = currentFrame_mc["frame_" + currentSubFrame_uint + "_mc"];
					currentSubFrame_mc.gotoAndStop(0);
					currentSubFrame_mc.gotoAndStop("end");
				}
			}
		}
		/*
		
		*/
		if(modification_uint == 2)
		{
			/*
			
			*/
			card_mc.alpha = 1;
			card_mc.visible = true;
			card_mc.cursor = "default";
			card_mc.mouseChildren = false;
			card_mc.mouseEnabled = false;
			/*
			
			*/
			currentFrame_uint = Number(card_mc.name.split("_")[1]);
			currentSubFrame_uint = Number(card_mc.name.split("_")[2]);
			/*
			
			*/
			card_mc.gotoAndStop(currentFrame_uint);
			/*
			
			*/
			if(card_mc["frame_" + currentFrame_uint + "_mc"])
			{
				/*
				
				*/
				currentFrame_mc = card_mc["frame_" + currentFrame_uint + "_mc"];
				currentFrame_mc.gotoAndStop(currentSubFrame_uint);
				/*
				
				*/
				if(currentFrame_mc["frame_" + currentSubFrame_uint + "_mc"])
				{
					currentSubFrame_mc = currentFrame_mc["frame_" + currentSubFrame_uint + "_mc"];
					currentSubFrame_mc.gotoAndStop(0);
					currentSubFrame_mc.gotoAndStop("end");
					timelineControl_obj = new Edapskov_TimelineControl(currentSubFrame_mc);
					timelineControl_obj.gotoFunc("begin", 1);
				}
			}
		}
		/*
		
		*/
		if(modification_uint == 3)
		{
			/*
			
			*/
			card_mc.alpha = 1;
			card_mc.visible = true;
			card_mc.cursor = "pointer";
			card_mc.mouseChildren = false;
			card_mc.mouseEnabled = true;
			card_mc.addEventListener("click", _onClickMatchingCardMcFunc, false);
			/*
			
			*/
			currentFrame_uint = Number(card_mc.name.split("_")[1]);
			currentSubFrame_uint = Number(card_mc.name.split("_")[2]);
			/*
			
			*/
			card_mc.gotoAndStop(currentFrame_uint);
			/*
			
			*/
			if(card_mc["frame_" + currentFrame_uint + "_mc"])
			{
				/*
				
				*/
				currentFrame_mc = card_mc["frame_" + currentFrame_uint + "_mc"];
				currentFrame_mc.gotoAndStop(currentSubFrame_uint);
				/*
				
				*/
				if(currentFrame_mc["frame_" + currentSubFrame_uint + "_mc"])
				{
					currentSubFrame_mc = currentFrame_mc["frame_" + currentSubFrame_uint + "_mc"];
					currentSubFrame_mc.gotoAndStop(0);
					timelineControl_obj = new Edapskov_TimelineControl(currentSubFrame_mc);
					timelineControl_obj.gotoFunc("end", 1);
				}
			}
		}
		/*
		
		*/
		if(modification_uint == 4)
		{
			/*
			
			*/
			card_mc.alpha = 1;
			card_mc.visible = true;
			card_mc.cursor = "default";
			card_mc.mouseChildren = false;
			card_mc.mouseEnabled = false;
			card_mc.removeEventListener("click", _onClickMatchingCardMcFunc, false);
			/*
			
			*/
			currentFrame_uint = Number(card_mc.name.split("_")[1]);
			currentSubFrame_uint = Number(card_mc.name.split("_")[2]);
			/*
			
			*/
			card_mc.gotoAndStop(currentFrame_uint);
			/*
			
			*/
			if(card_mc["frame_" + currentFrame_uint + "_mc"])
			{
				/*
				
				*/
				currentFrame_mc = card_mc["frame_" + currentFrame_uint + "_mc"];
				currentFrame_mc.gotoAndStop(currentSubFrame_uint);
				/*
				
				*/
				if(currentFrame_mc["frame_" + currentSubFrame_uint + "_mc"])
				{
					currentSubFrame_mc = currentFrame_mc["frame_" + currentSubFrame_uint + "_mc"];
					currentSubFrame_mc.gotoAndStop(0);
					currentSubFrame_mc.gotoAndStop("end");
					timelineControl_obj = new Edapskov_TimelineControl(currentSubFrame_mc);
					timelineControl_obj.gotoFunc("begin", 1);
				}
			}
		}
		/*
		
		*/
		if(modification_uint == 5)
		{
			/*
			
			*/
			card_mc.alpha = 1;
			card_mc.visible = true;
			card_mc.cursor = "pointer";
			card_mc.mouseChildren = false;
			card_mc.mouseEnabled = true;
			card_mc.addEventListener("click", _onClickMatchingCardMcFunc, false);
			/*
			
			*/
			currentFrame_uint = Number(card_mc.name.split("_")[1]);
			currentSubFrame_uint = Number(card_mc.name.split("_")[2]);
			/*
			
			*/
			card_mc.gotoAndStop(currentFrame_uint);
			/*
			
			*/
			if(card_mc["frame_" + currentFrame_uint + "_mc"])
			{
				/*
				
				*/
				currentFrame_mc = card_mc["frame_" + currentFrame_uint + "_mc"];
				currentFrame_mc.gotoAndStop(currentSubFrame_uint);
				/*
				
				*/
				if(currentFrame_mc["frame_" + currentSubFrame_uint + "_mc"])
				{
					currentSubFrame_mc = currentFrame_mc["frame_" + currentSubFrame_uint + "_mc"];
					currentSubFrame_mc.gotoAndStop(0);
					currentSubFrame_mc.gotoAndStop("begin");
					timelineControl_obj = new Edapskov_TimelineControl(currentSubFrame_mc);
					timelineControl_obj.gotoFunc("end", 1);
				}
			}
		}
		/*
		
		*/
		if(modification_uint == 6)
		{
			/*
			
			*/
			card_mc.alpha = 1;
			card_mc.visible = true;
			card_mc.cursor = "default";
			card_mc.mouseChildren = false;
			card_mc.mouseEnabled = false;
			card_mc.removeEventListener("click", _onClickMatchingCardMcFunc, false);
			/*
			
			*/
			createjs.Tween.get(card_mc).wait(0).to({alpha:0.6}, _DELAY * 1000, createjs.Ease.cubicInOut);
			/*
			
			*/
			currentFrame_uint = Number(card_mc.name.split("_")[1]);
			currentSubFrame_uint = Number(card_mc.name.split("_")[2]);
			/*
			
			*/
			card_mc.gotoAndStop(currentFrame_uint);
			/*
			
			*/
			if(card_mc["frame_" + currentFrame_uint + "_mc"])
			{
				/*
				
				*/
				currentFrame_mc = card_mc["frame_" + currentFrame_uint + "_mc"];
				currentFrame_mc.gotoAndStop(currentSubFrame_uint);
				/*
				
				*/
				if(currentFrame_mc["frame_" + currentSubFrame_uint + "_mc"])
				{
					currentSubFrame_mc = currentFrame_mc["frame_" + currentSubFrame_uint + "_mc"];
					currentSubFrame_mc.gotoAndStop(0);
				}
			}
		}
		/*
		
		*/
		if(modification_uint == 7)
		{
			
		}
		/*
		
		*/
		if(modification_uint == 10)
		{
			/*
			
			*/
			card_mc.alpha = 1;
			card_mc.visible = true;
			card_mc.cursor = "default";
			card_mc.mouseChildren = false;
			card_mc.mouseEnabled = false;
			card_mc.removeEventListener("click", _onClickMatchingCardMcFunc, false);
			/*
			
			*/
			currentFrame_uint = Number(card_mc.name.split("_")[1]);
			currentSubFrame_uint = Number(card_mc.name.split("_")[2]);
			/*
			
			*/
			card_mc.gotoAndStop(currentFrame_uint);
			/*
			
			*/
			if(card_mc["frame_" + currentFrame_uint + "_mc"])
			{
				/*
				
				*/
				currentFrame_mc = card_mc["frame_" + currentFrame_uint + "_mc"];
				currentFrame_mc.gotoAndStop(currentSubFrame_uint);
				/*
				
				*/
				if(currentFrame_mc["frame_" + currentSubFrame_uint + "_mc"])
				{
					currentSubFrame_mc = currentFrame_mc["frame_" + currentSubFrame_uint + "_mc"];
					currentSubFrame_mc.gotoAndStop(0);
					currentSubFrame_mc.gotoAndStop("end");
				}
			}
		}
	}
	/*
	
	*/
	function _updateArrayCardsFunc()
	{
		/*
		
		*/
		_information.cards_arr = new Array();
		/*
		
		*/
		var card_mc;
		var numChildren_uint;
		var totalCards_uint;
		var totalOptions_uint;
		var options_arr = new Array();
		var optionsDouble_arr = new Array();
		var random_uint;
		var i;
		/*
		
		*/
		totalCards_uint = _currentMainScreen_mc.cards_mc.numChildren;
		/*
		
		*/
		if((totalCards_uint % 3) == 0)
		{
			if(_currentMainScreen_mc.cards_mc.getChildAt(0))
			{
				/*
				
				*/
				card_mc = _currentMainScreen_mc.cards_mc.getChildAt(0);
				card_mc.gotoAndStop(0);
				/*
				
				*/
				totalOptions_uint = card_mc.totalFrames;
				/*
				
				*/
				if(totalOptions_uint >= Number(totalCards_uint / 3))
				{
					/*
					создаём массив карт
					*/
					i = 0;
					while(i < totalOptions_uint)
					{
						/*
						
						*/
						options_arr.push("card_" + i);
						/*
						
						*/
						i++;
					}
					/*
					перемешиваем карты
					*/
					while(options_arr.length > 0)
					{
						random_uint = Math.floor(Math.random() * options_arr.length);
						optionsDouble_arr.push(options_arr[random_uint]);
						options_arr.splice(random_uint, 1);
					}
					/*
					обрезаем по количеству карт
					*/
					totalOptions_uint = Math.floor(totalCards_uint / 3);
					optionsDouble_arr.length = totalOptions_uint;
					options_arr.length = 0;
					/*
					записываем полный список карт
					*/
					i = 0;
					while(i < totalOptions_uint)
					{
						/*
						
						*/
						options_arr.push(String(optionsDouble_arr[i] + "_0"), String(optionsDouble_arr[i] + "_1"), String(optionsDouble_arr[i] + "_2"));
						/*
						
						*/
						i++;
					}
					/*
					перемешиваем и сохраняем в основной массив
					*/
					while(options_arr.length > 0)
					{
						random_uint = Math.floor(Math.random() * options_arr.length);
						_information.cards_arr.push(options_arr[random_uint]);
						options_arr.splice(random_uint, 1);
					}
				}
				else
				{
					trace("Вариантов карт меньше, чем самих карт!");
				}
			}
			else
			{
				trace("Мувик-образец не обнаружен!");
			}
		}
		else
		{
			trace("Количество карт делится на ТРИ с остатком!");
		}
	}
	/*
	
	*/
	function _removeMatchingCardFromArrayFunc()
	{
		/*
		
		*/
		var i = _information.cards_arr.length - 1;
		var j;
		/*
		
		*/
		while(i >= 0)
		{
			/*
			
			*/
			j = _information.openCards_arr.length - 1;
			/*
			
			*/
			while(j >= 0)
			{
				/*
				
				*/
				if(_information.cards_arr[i] == _information.openCards_arr[j][0])
				{
					_information.cards_arr.splice(i, 1);
				}
				/*
				
				*/
				j--;
			}
			/*
			
			*/
			i--;
		}
	}
	/*
	
	*/
	function _lossFunc()
	{
		/*
		
		*/
		_soundManager.addSoundFunc("loss_sound", 1, 0, 0, 0.4, 0);
		/*
		
		*/
		_currentMainScreen_mc.popup_mc.visible = true;
		_currentMainScreen_mc.popup_mc.gotoAndStop("loss");
		if(_currentMainScreen_mc.popup_mc.loss_mc)
		{
			_currentMainScreen_mc.popup_mc.loss_mc.mouseEnabled = true;
			_currentMainScreen_mc.popup_mc.loss_mc.mouseChildren = false;
			_currentMainScreen_mc.popup_mc.loss_mc.cursor = "pointer";
			_currentMainScreen_mc.popup_mc.loss_mc.addEventListener("click", _onClickStartLocationFunc, false);
			_currentMainScreen_mc.popup_mc.loss_mc.gotoAndStop(0);
			var timelineControl_obj = new Edapskov_TimelineControl(_currentMainScreen_mc.popup_mc.loss_mc);
			timelineControl_obj.gotoFunc("end", 1);
		}
		else
		{
			trace("Мувик loss_mc не обнаружен!");
		}
		/*
		
		*/
		_toggleIndicatorFunc(false);
		/*
		
		*/
		_updateCardsFunc(10);
	}
	/*
	
	*/
	function _winFunc()
	{
		/*
		
		*/
		_soundManager.addSoundFunc("win_sound", 1, 0, 0, 0.2, 0);
		/*
		
		*/
		_information.locations[_information.currentNameLocation].completed = true;
		_information.targetLocation = Number(_information.currentNameLocation.split("_")[1]) + 1;
		/*
		СОХРАНЕНИЕ ИГРЫ
		*/
		_saveGameFunc();
		/*
		
		*/
		_currentMainScreen_mc.popup_mc.visible = true;
		_currentMainScreen_mc.popup_mc.gotoAndStop("win");
		if(_currentMainScreen_mc.popup_mc.win_mc)
		{
			/*
			
			*/
			_currentMainScreen_mc.popup_mc.win_mc.gotoAndStop(0);
			_currentMainScreen_mc.popup_mc.win_mc.mouseEnabled = true;
			_currentMainScreen_mc.popup_mc.win_mc.mouseChildren = true;
			var timelineControl_obj = new Edapskov_TimelineControl(_currentMainScreen_mc.popup_mc.win_mc);
			timelineControl_obj.gotoFunc("end", 1);
			/*
			
			*/
			if(_currentMainScreen_mc.popup_mc.win_mc.house_btn)
			{
				_currentMainScreen_mc.popup_mc.win_mc.house_btn.visible = true;
				_currentMainScreen_mc.popup_mc.win_mc.house_btn.addEventListener("click", _onClickHouseBtnFunc, false);
			}
			else
			{
				trace("Мувик house_btn не обнаружен!");
			}
			if(_currentMainScreen_mc.popup_mc.win_mc.repeat_btn)
			{
				_currentMainScreen_mc.popup_mc.win_mc.repeat_btn.visible = true;
				_currentMainScreen_mc.popup_mc.win_mc.repeat_btn.addEventListener("click", _onClickRepeatBtnFunc, false);
			}
			else
			{
				trace("Мувик repeat_btn не обнаружен!");
			}
		}
		else
		{
			trace("Мувик win_mc не обнаружен!");
		}
		/*
		
		*/
		_toggleIndicatorFunc(false);
		/*
		
		*/
		_updateCardsFunc(7);
	}
	/*
	
	*/
	function _onClickHouseBtnFunc(event)
	{
		/*
		
		*/
		var currentTarget_mc = event.currentTarget;
		currentTarget_mc.removeEventListener("click", _onClickHouseBtnFunc, false);
		/*
		
		*/
		var point_obj = currentTarget_mc.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		var skippedLocations_uint = _skippedLocationsFunc();
		/*
		
		*/
		if(skippedLocations_uint == 3)
		{
			_addAdsFunc();
		}
		if(skippedLocations_uint == 6)
		{
			_addAdsFunc();
		}
		if(skippedLocations_uint == 12)
		{
			_addAdsFunc();
		}
		/*
		
		*/
		if(skippedLocations_uint >= 1)
		{
			_animationTransitionBetweenScenesFunc(_selectFunc, 0, 1, null, true);
		}
		else
		{
			_animationTransitionBetweenScenesFunc(_resultFunc, 0, 1, null, true);
		}
	}
	function _onClickRepeatBtnFunc(event)
	{
		/*
		
		*/
		var currentTarget_mc = event.currentTarget;
		currentTarget_mc.removeEventListener("click", _onClickRepeatBtnFunc, false);
		/*
		
		*/
		var point_obj = currentTarget_mc.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		_startRoundFunc();
	}
	/*
	
	*/
	function _onClickSkipRoundMcFunc(event)
	{
		/*
		
		*/
		_currentMainScreen_mc.skip_mc.mouseEnabled = false;
		_currentMainScreen_mc.skip_mc.mouseChildren = false;
		_currentMainScreen_mc.skip_mc.cursor = "default";
		_currentMainScreen_mc.skip_mc.visible = false;
		_currentMainScreen_mc.skip_mc.removeEventListener("click", _onClickSkipRoundMcFunc, false);
		/*
		
		*/
		var point_obj = _currentMainScreen_mc.skip_mc.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 0.1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		ниже - смотри function _winFunc
		*/
		_information.locations[_information.currentNameLocation].completed = true;
		_information.targetLocation = Number(_information.currentNameLocation.split("_")[1]) + 1;
		/*
		
		*/
		_toggleIndicatorFunc(false);
		/*
		
		*/
		_updateCardsFunc(7);
		/*
		
		*/
		if(_skippedLocationsFunc() >= 1)
		{
			_animationTransitionBetweenScenesFunc(_selectFunc, 0, 1, null, true);
		}
		else
		{
			_animationTransitionBetweenScenesFunc(_resultFunc, 0, 1, null, true);
		}
	}
	/*
	индикатор
	*/
	function _startIndicatorFunc(timer_uint, completeTimer_func)
	{
		/*
		
		*/
		if(timer_uint === undefined)
		{
			timer_uint = 60;
		}
		else
		{
			timer_uint = Number(timer_uint);
		}
		if(completeTimer_func === undefined)
		{
			completeTimer_func = null;
		}
		/*
		
		*/
		_information.totalTimer_uint = timer_uint * createjs.Ticker.framerate;
		_information.currentTimer_uint = 0;
		_information.toggleTimer_bool = true;
		_information.completeTimer_func = completeTimer_func;
		/*
		
		*/
		_currentMainScreen_mc.indicator_mc.gotoAndStop(0);
		_currentMainScreen_mc.indicator_mc.body_mc.gotoAndStop(0);
		_currentMainScreen_mc.indicator_mc.addEventListener("tick", _onTickIndicatorFunc, false);
	}
	function _finishIndicatorFunc()
	{
		/*
		
		*/
		var temp_func = _information.completeTimer_func;
		/*
		
		*/
		_information.totalTimer_uint = null;
		_information.currentTimer_uint = null;
		_information.toggleTimer_bool = null;
		_information.completeTimer_func = null;
		/*
		
		*/
		_currentMainScreen_mc.indicator_mc.removeEventListener("tick", _onTickIndicatorFunc, false);
		_currentMainScreen_mc.indicator_mc.gotoAndStop(0);
		_currentMainScreen_mc.indicator_mc.body_mc.gotoAndStop(Number(_currentMainScreen_mc.indicator_mc.body_mc.totalFrames - 1));
		/*
		
		*/
		if(temp_func !== null)
		{
			temp_func();
		}
	}
	function _toggleIndicatorFunc(toggle_bool)
	{
		/*
		
		*/
		if(toggle_bool === undefined)
		{
			toggle_bool = true;
		}
		else
		{
			toggle_bool = Boolean(toggle_bool);
		}
		/*
		
		*/
		_information.toggleTimer_bool = toggle_bool;
	}
	function _onTickIndicatorFunc()
	{
		if(_information.toggleTimer_bool !== null)
		{
			if(_information.toggleTimer_bool)
			{
				/*
				
				*/
				_information.currentTimer_uint++;
				/*
				
				*/
				if(_information.currentTimer_uint < _information.totalTimer_uint)
				{
					_currentMainScreen_mc.indicator_mc.body_mc.gotoAndStop(Math.floor((_information.currentTimer_uint * _currentMainScreen_mc.indicator_mc.body_mc.totalFrames) / _information.totalTimer_uint));
				}
				else
				{
					_finishIndicatorFunc();
				}
			}
			
		}
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
			/*
			totalLocations
			*/
			if(loadInformation_obj.hasOwnProperty("targetLocation"))
			{
				if(Number(loadInformation_obj.targetLocation) <= _information.totalLocations)
				{
					/*
					
					*/
					_information.targetLocation = Number(loadInformation_obj.targetLocation);
					/*
					
					*/
					if(loadInformation_obj.hasOwnProperty("firstRun"))
					{
						_information.firstRun = Boolean(loadInformation_obj.firstRun);
					}
					if(loadInformation_obj.hasOwnProperty("shownAds"))
					{
						_information.shownAds = Boolean(loadInformation_obj.shownAds);
					}
					/*
					
					*/
					if(loadInformation_obj.hasOwnProperty("locations"))
					{
						for(var propLocations in loadInformation_obj.locations)
						{
							if(loadInformation_obj.locations.hasOwnProperty(propLocations))
							{
								if(_information.locations.hasOwnProperty(propLocations))
								{
									_information.locations[propLocations].completed = Boolean(loadInformation_obj.locations[propLocations].completed);
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
		var loadInformation_obj = {locations:{}};
		loadInformation_obj.firstRun = Boolean(_information.firstRun);
		loadInformation_obj.shownAds = Boolean(_information.shownAds);
		loadInformation_obj.targetLocation = Number(_information.targetLocation);
		/*
		
		*/
		for(var propLocations in _information.locations)
		{
			if(_information.locations.hasOwnProperty(propLocations))
			{
				loadInformation_obj.locations[propLocations] = {};
				loadInformation_obj.locations[propLocations].completed = Boolean(_information.locations[propLocations].completed);
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
		if(_currentBeforeScreen_mc.body_mc.banner_mc)
		{
			_currentBeforeScreen_mc.body_mc.banner_mc.cursor = "pointer";
			_currentBeforeScreen_mc.body_mc.banner_mc.addEventListener("click", _onClickPlayRedirectBtnFunc, false);
		}
		/*
		
		*/
		if(_currentBeforeScreen_mc.body_mc.remove_btn)
		{
			_currentBeforeScreen_mc.body_mc.remove_btn.addEventListener("click", _onClickCancelRedirectBtnFunc, false);
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
		window.open("https://dl-girls.com/content/folder_1750442048" + "?utm_source=" + window.location.href + "&utm_medium=game_referral|game&utm_content=simple&utm_campaign=" + _TITLE, "_self");
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
	Окно результатов
	==============================================================================================================
	*/
	function _resultFunc()
	{
		/*
		
		*/
		_soundManager.addSoundFunc("completed_sound", 1, 0, 0, 0.2, 0);
		/*
		
		*/
		_clearContainerFunc(_main);
		_clearContainerFunc(_before);
		/*
		
		*/
		_currentMainScreen_mc = new lib.ResultScreen();
		_main.addChild(_currentMainScreen_mc);
		_currentMainScreen_mc.gotoAndStop(0);
		/*
		
		*/
		_currentMainScreen_mc.logo_btn.addEventListener("click", _onClickLogoBtnFunc, false);
		/*
		
		*/
		if(_currentMainScreen_mc.moreGames_btn)
		{
			_currentMainScreen_mc.moreGames_btn.cursor = "pointer";
			_currentMainScreen_mc.moreGames_btn.addEventListener("click", _onClickMoreGamesBtnFunc, false);
		}
		/*
		
		*/
		if(_currentMainScreen_mc.banner_1_mc)
		{
			_currentMainScreen_mc.banner_1_mc.cursor = "pointer";
			_currentMainScreen_mc.banner_1_mc.addEventListener("click", _onClickBannerMcFunc_1, false);
		}
		if(_currentMainScreen_mc.banner_2_mc)
		{
			_currentMainScreen_mc.banner_2_mc.cursor = "pointer";
			_currentMainScreen_mc.banner_2_mc.addEventListener("click", _onClickBannerMcFunc_2, false);
		}
		/*
		
		*/
		if(_currentMainScreen_mc.freeGames_mc)
		{
			_currentMainScreen_mc.freeGames_mc.addEventListener("click", _onClickFreeGamesMcFunc, false);
		}
		/*
		
		*/
		_currentMainScreen_mc.playAgain_btn.addEventListener("click", _onClickPlayAgainBtnFunc, false);
		/*
		
		*/
		if(_currentMainScreen_mc.totalFrames > 1)
		{
			if(_hasLabelInMovieClipFunc(_currentMainScreen_mc, "mid"))
			{
				_currentMainScreen_mc.loop = false;
				var timelineControl = new Edapskov_TimelineControl(_currentMainScreen_mc);
				timelineControl.gotoFunc("mid", 1, 0);
				timelineControl.addEventListener("completed_timeline", _onMidResultFunc, false);
			}
			else
			{
				trace("Вижу анимацию, но не вижу Label!")
			}
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
		/*
		if(_information.timeout_id != null)
		{
			clearTimeout(_information.timeout_id);
		}
		_information.timeout_id = setTimeout(_redirectFunc, 6000);
		*/
	}
	/*
	
	*/
	function _onClickPlayAgainBtnFunc(event)
	{
		/*
		
		*/
		var point_obj = event.currentTarget.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		event.currentTarget.removeEventListener("click", _onClickPlayAgainBtnFunc, false);
		/*
		
		*/
		_resetFunc();
		/*
		
		*/
		_soundManager.removeAllSoundExceptNameFunc(["background_sound", "click_sound"]);
		/*
		
		*/
		_addAdsFunc();
		/*
		
		*/
		if(_hasLabelInMovieClipFunc(_currentMainScreen_mc, "end"))
		{
			var timelineControl = new Edapskov_TimelineControl(_currentMainScreen_mc);
			timelineControl.gotoFunc("end", 1, 0);
			timelineControl.addEventListener("completed_timeline", _onEndResultFunc, false);
		}
		else
		{
			_onEndResultFunc(undefined);
		}
	}
	/*
	
	*/
	function _onMidResultFunc(event)
	{
		
	}
	/*
	
	*/
	function _onEndResultFunc(event)
	{
		_animationTransitionBetweenScenesFunc(_selectFunc, 0, 1, null, true);
	}
	/*
	
	*/
	function _skippedLocationsFunc()
	{
		/*
		
		*/
		var skipped_num = 0;
		/*
		
		*/
		for(var prop in _information.locations)
		{
			if(_information.locations.hasOwnProperty(prop))
			{
				if(!_information.locations[prop].completed)
				{
					skipped_num++;
				}
			}
		}
		/*
		
		*/
		return skipped_num;
	}
	/*
	==============================================================================================================
	Вспомогательные окна
	==============================================================================================================
	*/
	/*
	==============================
	Credits Screen
	==============================
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
	==============================
	Languages Screen
	==============================
	*/
	function _languagesFunc()
	{
		/*
		
		*/
		_clearContainerFunc(_main);
		_clearContainerFunc(_before);
		/*
		
		*/
		_currentMainScreen_mc = new lib.LanguagesScreen();
		_main.addChild(_currentMainScreen_mc);
		_currentMainScreen_mc.gotoAndStop(0);
		/*
		
		*/
		if(_currentMainScreen_mc.remove_btn)
		{
			_currentMainScreen_mc.remove_btn.addEventListener("click", _onClickRemoveBtnLanguagesScreenFunc, false);
		}
		/*
		
		*/
		if(_currentMainScreen_mc.screen_mc)
		{
			_currentMainScreen_mc.screen_mc.gotoAndStop(0);
			_updateListLanguagesScreenFunc();
		}
	}
	function _onClickRemoveBtnLanguagesScreenFunc(event)
	{
		/*
		
		*/
		var point_obj = event.currentTarget.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		event.currentTarget.removeEventListener("click", _onClickRemoveBtnLanguagesScreenFunc, false);
		/*
		
		*/
		_animationTransitionBetweenScenesFunc(_welcomeFunc);
	}
	function _updateListLanguagesScreenFunc()
	{
		/*
		
		*/
		var object_mc;
		var totalObjects_uint;
		var i = 0;
		/*
		
		*/
		_currentMainScreen_mc.screen_mc.gotoAndStop(0);
		/*
		
		*/
		if(_currentMainScreen_mc.screen_mc.numChildren)
		{
			/*
			
			*/
			totalObjects_uint = _currentMainScreen_mc.screen_mc.numChildren;
			/*
			
			*/
			while(i < totalObjects_uint)
			{
				/*
				
				*/
				object_mc = _currentMainScreen_mc.screen_mc.getChildAt(i);
				if(object_mc.hasOwnProperty("name"))
				{
					object_mc.gotoAndStop(0);
					if(object_mc.name == _information.language)
					{
						object_mc.gotoAndStop(1);
						object_mc.mouseEnabled = false;
						object_mc.mouseChildren = false;
						object_mc.cursor = "default";
						object_mc.removeEventListener("click", _onClickObjectLanguagesScreenFunc, false);
					}
					else
					{
						object_mc.mouseEnabled = true;
						object_mc.mouseChildren = false;
						object_mc.cursor = "pointer";
						object_mc.addEventListener("click", _onClickObjectLanguagesScreenFunc, false);
					}
				}
				/*
				
				*/
				i++;
			}
		}
	}
	function _onClickObjectLanguagesScreenFunc(event)
	{
		/*
		
		*/
		var point_obj = event.currentTarget.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 0.1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		_information.language = _verifyLanguageFunc(event.currentTarget.name);
		/*
		
		*/
		_updateListLanguagesScreenFunc();
	}
	function _setLanguageFunc(language_str)
	{
		/*
		
		*/
		if(language_str === undefined)
		{
			language_str = window.navigator.language || navigator.userLanguage;
			language_str = language_str.split("-")[0].toLowerCase();
		}
		else
		{
			language_str = String(language_str);
		}
		/*
		
		*/
		_information.language = _verifyLanguageFunc(language_str);
	}
	function _verifyLanguageFunc(language_str)
	{
		/*
		по-умолчанию устанавливаем английский
		*/
		var verifiedLanguage_str = "en";
		/*
		ищем наиболее подходящий язык из имеющихся
		https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
		*/
		if ((language_str == "ru") || (language_str == "uk") || (language_str == "be") || (language_str == "kk") || (language_str == "uz"))
		{
			verifiedLanguage_str = "ru";
		}
		if (language_str == "de")
		{
			verifiedLanguage_str = "de";
		}
		if (language_str == "fr")
		{
			verifiedLanguage_str = "fr";
		}
		if (language_str == "it")
		{
			verifiedLanguage_str = "it";
		}
		if (language_str == "es")
		{
			verifiedLanguage_str = "es";
		}
		if (language_str == "pt")
		{
			verifiedLanguage_str = "pt";
		}
		if (language_str == "tr")
		{
			verifiedLanguage_str = "tr";
		}
		if (language_str == "ja")
		{
			verifiedLanguage_str = "ja";
		}
		if (language_str == "hi")
		{
			verifiedLanguage_str = "hi";
		}
		if (language_str == "ar")
		{
			verifiedLanguage_str = "ar";
		}
		if (language_str == "id")
		{
			verifiedLanguage_str = "id";
		}
		if (language_str == "zh")
		{
			verifiedLanguage_str = "zh";
		}
		/*
		
		*/
		return verifiedLanguage_str;
	}
	/*
	==============================
	простое окно с кнопкой закрытия
	==============================
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
	==============================
	функция для перехода между локациями
	==============================
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
				timelineControl.gotoFunc("mid", 1, [animation_mc, func, arrayParams_arr]);
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
		timelineControl.gotoFunc("end", 1);
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
	==============================
	обновление
	==============================
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
	==============================
	управление курсором
	==============================
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
	==============================
	очистка контейнеров
	==============================
	*/
	function _clearContainerFunc(container)
	{
		container.removeAllChildren();
	}
	/*
	==============================
	поиск лейблов в мувиках
	==============================
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
	==============================
	обработка событий клавиатуры
	==============================
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
	==============================
	остановка - запуск приложения
	==============================
	*/
	function _toggleAppFunc()
	{
		if(_blockScript || _blockFocus || _blockUser)
		{
			/*
			
			*/
			_beginPauseAppFunc();
			/*
			
			*/
			createjs.Ticker.removeEventListener("tick", _onTickFunc, false);
			/*
			
			*/
			_soundManager.setInvisibleFunc(true);
			/*
			
			*/
			trace("Application is stopped!", 1);
		}
		else
		{
			/*
			на всякий случай возвращаем фокус на окно после работы стороннего скрипта
			*/
			window.focus();
			/*
			
			*/
			_endPauseAppFunc();
			/*
			
			*/
			createjs.Ticker.addEventListener("tick", _onTickFunc, false);
			/*
			
			*/
			_soundManager.setInvisibleFunc(false);
			/*
			
			*/
			trace("Application is running!", 1);
		}
	}
	/*
	==============================
	встроенная реклама
	==============================
	*/
	function _addAdsFunc()
	{
		try
		{
			/*
			
			*/
			_blockScript = true;
			_toggleAppFunc();
			/*
			
			*/
			window[window.preroll.config.loaderObjectName].refetchAd(resumeGameFunc);
		}
		catch(event)
		{
			/*
			
			*/
			trace(event, 1);
			/*
			
			*/
			_blockScript = false;
			_toggleAppFunc();
		}
		finally
		{
			
		}
	}
	this.showRewardFunc = function()
	{
		
	}
	this.showAntiBlockingAdsFunc = function()
	{
		_simpleScreenFunc("AntiBlockingAdsScreen");
	}
	/*
	функции-исключения
	*/
	
	/*
	ссылки...
	*/
	function _onClickPreloaderBtnFunc(event)
	{
		window.open(_LINKTOGAME + "?utm_source=" + window.location.href + "&utm_medium=game_referral|preloader&utm_content=simple&utm_campaign=" + _TITLE, "_blank");
	}
	function _onClickLogoBtnFunc(event)
	{
		window.open(_LINKTOGAME + "?utm_source=" + window.location.href + "&utm_medium=game_referral|logo&utm_content=simple&utm_campaign=" + _TITLE, "_blank");
	}
	function _onClickBannerMcFunc_1(event)
	{
		window.open("https://dl-girls.com/index.php?controller=article&action=index&id=1" + "&utm_source=" + window.location.href + "&utm_medium=game_referral|game&utm_content=simple&utm_campaign=" + _TITLE, "_blank");
	}
	function _onClickBannerMcFunc_2(event)
	{
		window.open("https://dl-girls.com/index.php?controller=article&action=index&id=1" + "&utm_source=" + window.location.href + "&utm_medium=game_referral|game&utm_content=simple&utm_campaign=" + _TITLE, "_blank");
	}
	function _onClickFreeGamesMcFunc(event)
	{
		window.open("https://dl-girls.com/index.php?controller=free&action=index&utm_source=" + window.location.href + "&utm_medium=game_referral|free&utm_content=simple&utm_campaign=" + _TITLE, "_blank");
	}
	function _onClickMoreGamesBtnFunc(event)
	{
		window.open(_LINKTOGAME + "?utm_source=" + window.location.href + "&utm_medium=game_referral|game&utm_content=simple&utm_campaign=" + _TITLE, "_blank");
	}
	/*
	ссылочка на разработчиков
	*/
	function _onClickCopyrightMenuItemFunc(event)
	{
		window.open("http://dlstudio.edapskov.ru", '_blank');
	}
}