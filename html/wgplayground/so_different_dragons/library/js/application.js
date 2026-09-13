/*
* @author edapskov
* @copyright 2024 edapskov v 2.001
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
	var _TITLE = "So Different Dragons";
	var _LINKTOGAME = "https://dl-girls.com";
	var _DELAY = 1;
	/*
	публичные переменные
	*/
	this.copyright = "© DL-Studio, v 2.001";
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
		timeout_id:null,
		interval_id:null,
		intervalBoost_id:null,
		intervalBonus_id:null,
		costPerClick:null,
		defaultCostPerClick:1,
		counterBoost:null,
		currentModeBonus:null,
		costPerBonus:null,
		totalTimeBonus:100,
		counterTimeBonus:null,
		completedGame:null,
		lastDate:null,
		clicks:null,
		currentShot:null,
		totalShots:null,
		shots:[
			[0, 50, null],
			[1, 60, null],
			[2, 70, null],
			[3, 80, null],
			[4, 90, null],
			[5, 100, null],
			[6, 110, null],
			[7, 120, null],
			[8, 130, null],
			[9, 140, null],
			[10, 150, null],
			[11, 160, null],
			[12, 170, null],
			[13, 180, null],
			[14, 190, null],
			[15, 200, null],
			[16, 210, null],
			[17, 220, null],
			[18, 230, null],
			[19, 240, null],
			[20, 250, null],
			[21, 260, null],
			[22, 270, null],
			[23, 280, null],
			[24, 290, null],
			[25, 300, null],
			[26, 310, null],
			[27, 320, null],
			[28, 330, null],
			[29, 340, null],
			[30, 350, null],
			[31, 360, null],
			[32, 370, null],
			[33, 380, null],
			[34, 390, null],
			[35, 400, null],
			[36, 410, null],
			[37, 420, null],
			[38, 430, null],
			[39, 440, null],
			[40, 450, null],
			[41, 460, null],
			[42, 470, null],
			[43, 480, null],
			[44, 490, null],
			[45, 500, null],
			[46, 510, null],
			[47, 520, null],
			[48, 530, null],
			[49, 0, null]
		]
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
		logo_img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozMkNGOTMxNEE2MzJGMDExQUVGRkIxNjJENEQxMDk1NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDMUI4MkY1MTI2QUQxMUYxOUU4N0ExMEMwNjE2Q0VGNSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDMUI4MkY1MDI2QUQxMUYxOUU4N0ExMEMwNjE2Q0VGNSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1MDc4OTRBMEFDMjZGMTExODVGN0NGQkVDRUYwQUJGNyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozMkNGOTMxNEE2MzJGMDExQUVGRkIxNjJENEQxMDk1NiIvPiA8L3JkZjpEZXNjcmlwdGlv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";
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
		loadQueue.loadFile({id:"click_2_sound", src:"library/sounds/click_2_sound.ogg"});
		loadQueue.loadFile({id:"click_3_sound", src:"library/sounds/click_3_sound.ogg"});
		loadQueue.loadFile({id:"photo_sound", src:"library/sounds/photo_sound.ogg"});
		loadQueue.loadFile({id:"money_sound", src:"library/sounds/money_sound.ogg"});
		loadQueue.loadFile({id:"completed_sound", src:"library/sounds/completed_sound.ogg"});
		loadQueue.loadFile({id:"message_sound", src:"library/sounds/message_sound.ogg"});
		loadQueue.loadFile({id:"firework_sound", src:"library/sounds/firework_sound.ogg"});
		/*
		добавляем в очередь кое-что из своего
		*/
		loadQueue.loadFile({id:"bitmapdata", src:"library/js/bitmapdata.js"});
		loadQueue.loadFile({id:"blob", src:"library/js/blob.js"});
		loadQueue.loadFile({id:"canvastoblob", src:"library/js/canvastoblob.js"});
		loadQueue.loadFile({id:"filesaver", src:"library/js/filesaver.js"});
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
		if(_currentMainScreen_mc.heroes_mc)
		{
			_updateHeroesFunc(_currentMainScreen_mc.heroes_mc, true, true);
		}
		/*
		
		*/
		if(_currentMainScreen_mc.bg)
		{
			_currentMainScreen_mc.bg.cache(-(_BGWIDTH - _CWIDTH) / 2, 0, _BGWIDTH, _CHEIGHT);
		}
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
		if(_information.intervalBoost_id != null)
		{
			clearInterval(_information.intervalBoost_id);
		}
		if(_information.intervalBonus_id != null)
		{
			clearInterval(_information.intervalBonus_id);
		}
		/*
		основные параметры
		*/
		_information.clicks = 0;
		_information.currentShot = 0;
		_information.totalShots = _information.shots.length;
		/*
		дополнительные параметры
		*/
		_information.costPerClick = _information.defaultCostPerClick;
		_information.counterBoost = 0;
		_information.currentModeBonus = 0;
		_information.costPerBonus = 0;
		_information.counterTimeBonus = 0;
		_information.lastDate = 0;
		_information.completedGame = false;
		/*
		обесцениваем последний кадр
		*/
		_information.shots[Number(_information.totalShots - 1)][1] = 0;
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
			_animationTransitionBetweenScenesFunc(_gameFunc, 0, 1, null, true);
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
		/*
		if(_currentMainScreen_mc.bg)
		{
			_currentMainScreen_mc.bg.cache(-(_BGWIDTH - _CWIDTH) / 2, 0, _BGWIDTH, _CHEIGHT);
		}
		*/
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
			_currentMainScreen_mc.next_mc.animation_mc.play();
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
		_animationTransitionBetweenScenesFunc(_gameFunc, 0, 1, null, true);
	}
	/*
	==============================================================================================================
	Окно игры
	==============================================================================================================
	*/
	function _gameFunc()
	{
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
		_beginGameFunc();
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
	function _beginGameFunc()
	{
		/*
		
		*/
		if(_currentMainScreen_mc.playAgain_btn)
		{
			_currentMainScreen_mc.playAgain_btn.alpha = 0;
		}
		else
		{
			trace("Хде playAgain_btn!")
		}
		/*
		
		*/
		if(_currentMainScreen_mc.сontainerAnimationClick_mc)
		{
			/*
			
			*/
			_currentMainScreen_mc.сontainerAnimationClick_mc.gotoAndStop(0);
			_currentMainScreen_mc.сontainerAnimationClick_mc.mouseChildren = false;
			_currentMainScreen_mc.сontainerAnimationClick_mc.mouseEnabled = false;
			/*
			
			*/
			if(_currentMainScreen_mc.сontainerAnimationClick_mc.animationClick_mc)
			{
				_currentMainScreen_mc.сontainerAnimationClick_mc.animationClick_mc.gotoAndStop(0);
				_currentMainScreen_mc.сontainerAnimationClick_mc.animationClick_mc.loop = false;
			}
			else
			{
				trace("Хде animationClick_mc в сontainerAnimationClick_mc!")
			}
		}
		else
		{
			trace("Хде сontainerAnimationClick_mc!")
		}
		/*
		
		*/
		if(_currentMainScreen_mc.bonuses_mc)
		{
			/*
			
			*/
			_currentMainScreen_mc.bonuses_mc.gotoAndStop(0);
			_currentMainScreen_mc.bonuses_mc.mouseChildren = true;
			_currentMainScreen_mc.bonuses_mc.mouseEnabled = true;
			/*
			
			*/
			if(_currentMainScreen_mc.bonuses_mc.bonusFirst_mc)
			{
				/*
				
				*/
				_currentMainScreen_mc.bonuses_mc.bonusFirst_mc.gotoAndStop(0);
				/*
				
				*/
				if(_currentMainScreen_mc.bonuses_mc.bonusFirst_mc.output_numbers_comp)
				{
					_currentMainScreen_mc.bonuses_mc.bonusFirst_mc.output_numbers_comp.gotoAndStop(0);
				}
				else
				{
					trace("Хде output_numbers_comp в bonusFirst_mc!")
				}
				/*
				
				*/
				if(_currentMainScreen_mc.bonuses_mc.bonusFirst_mc.substrate_mc)
				{
					_currentMainScreen_mc.bonuses_mc.bonusFirst_mc.substrate_mc.gotoAndStop(0);
				}
				else
				{
					trace("Хде substrate_mc в bonusFirst_mc!")
				}
			}
			else
			{
				trace("Хде bonusFirst_mc!")
			}
			/*
			
			*/
			if(_currentMainScreen_mc.bonuses_mc.bonusSecond_mc)
			{
				/*
				
				*/
				_currentMainScreen_mc.bonuses_mc.bonusSecond_mc.gotoAndStop(0);
				/*
				
				*/
				if(_currentMainScreen_mc.bonuses_mc.bonusSecond_mc.output_numbers_comp)
				{
					_currentMainScreen_mc.bonuses_mc.bonusSecond_mc.output_numbers_comp.gotoAndStop(0);
				}
				else
				{
					trace("Хде output_numbers_comp в bonusSecond_mc!")
				}
				/*
				
				*/
				if(_currentMainScreen_mc.bonuses_mc.bonusSecond_mc.substrate_mc)
				{
					_currentMainScreen_mc.bonuses_mc.bonusSecond_mc.substrate_mc.gotoAndStop(0);
				}
				else
				{
					trace("Хде substrate_mc в bonusSecond_mc!")
				}
			}
			else
			{
				trace("Хде bonusSecond_mc!")
			}
			/*
			
			*/
			_updateBonusesGameFunc();
			/*
			
			*/
			if(_currentMainScreen_mc.bonuses_mc.photo_mc)
			{
				_currentMainScreen_mc.bonuses_mc.photo_mc.gotoAndStop(0);
				_currentMainScreen_mc.bonuses_mc.photo_mc.mouseChildren = false;
				_currentMainScreen_mc.bonuses_mc.photo_mc.mouseEnabled = true;
				_currentMainScreen_mc.bonuses_mc.photo_mc.cursor = "pointer";
				_currentMainScreen_mc.bonuses_mc.photo_mc.addEventListener("click", _onClickPhotoMcGameFunc, false);
			}
			else
			{
				trace("Хде photo_mc!")
			}
			/*
			
			*/
			if(_currentMainScreen_mc.bonuses_mc.skipShot_mc)
			{
				/*
				
				*/
				_currentMainScreen_mc.bonuses_mc.skipShot_mc.gotoAndStop(0);
				/*
				
				*/
				_hideSkipShotGameFunc();
			}
			else
			{
				trace("Хде skipShot_mc!")
			}
		}
		else
		{
			trace("Хде bonuses_mc!")
		}
		/*
		
		*/
		if(_currentMainScreen_mc.indicatorBonus_mc)
		{
			/*
			
			*/
			_currentMainScreen_mc.indicatorBonus_mc.gotoAndStop(0);
			_currentMainScreen_mc.indicatorBonus_mc.mouseChildren = false;
			_currentMainScreen_mc.indicatorBonus_mc.mouseEnabled = false;
			/*
			
			*/
			if(_currentMainScreen_mc.indicatorBonus_mc.indicator_mc)
			{
				/*
				
				*/
				_currentMainScreen_mc.indicatorBonus_mc.indicator_mc.gotoAndStop(0);
				/*
				
				*/
				_updateIndicatorBonusGameFunc();
			}
			else
			{
				trace("Хде output_numbers_comp в indicatorBonus_mc!")
			}
		}
		else
		{
			trace("Хде indicatorBonus_mc!")
		}
		/*
		
		*/
		if(_currentMainScreen_mc.counterClicks_mc)
		{
			/*
			
			*/
			_currentMainScreen_mc.counterClicks_mc.gotoAndStop(0);
			_currentMainScreen_mc.counterClicks_mc.mouseChildren = false;
			_currentMainScreen_mc.counterClicks_mc.mouseEnabled = false;
			/*
			
			*/
			if(_currentMainScreen_mc.counterClicks_mc.output_numbers_comp)
			{
				/*
				
				*/
				_currentMainScreen_mc.counterClicks_mc.output_numbers_comp.gotoAndStop(0);
				/*
				
				*/
				_updateCounterClicksGameFunc();
			}
			else
			{
				trace("Хде output_numbers_comp в counterClicks_mc!")
			}
		}
		else
		{
			trace("Хде counterClicks_mc!")
		}
		/*
		
		*/
		if(_currentMainScreen_mc.indicatorBoost_mc)
		{
			/*
			
			*/
			_currentMainScreen_mc.indicatorBoost_mc.gotoAndStop(0);
			_currentMainScreen_mc.indicatorBoost_mc.mouseChildren = false;
			_currentMainScreen_mc.indicatorBoost_mc.mouseEnabled = false;
			/*
			
			*/
			if(_currentMainScreen_mc.indicatorBoost_mc.indicator_mc)
			{
				/*
				
				*/
				_currentMainScreen_mc.indicatorBoost_mc.indicator_mc.gotoAndStop(0);
				/*
				
				*/
				_updateIndicatorBoostGameFunc();
				/*
				
				*/
				if(_information.intervalBoost_id != null)
				{
					clearInterval(_information.intervalBoost_id);
				}
				_information.intervalBoost_id = setInterval(_updateBoostGameFunc, 50);
			}
			else
			{
				trace("Хде indicator_mc в indicatorBoost_mc!")
			}
		}
		else
		{
			trace("Хде indicatorBoost_mc!")
		}
		/*
		
		*/
		if(_currentMainScreen_mc.counterShots_mc)
		{
			/*
			
			*/
			_currentMainScreen_mc.counterShots_mc.gotoAndStop(0);
			_currentMainScreen_mc.counterShots_mc.mouseChildren = false;
			_currentMainScreen_mc.counterShots_mc.mouseEnabled = false;
			/*
			
			*/
			if(_currentMainScreen_mc.counterShots_mc.totalShots_mc)
			{
				/*
				
				*/
				_currentMainScreen_mc.counterShots_mc.totalShots_mc.gotoAndStop(0);
				/*
				
				*/
				if(_currentMainScreen_mc.counterShots_mc.totalShots_mc.currentShot_comp)
				{
					_currentMainScreen_mc.counterShots_mc.totalShots_mc.currentShot_comp.gotoAndStop(0);
				}
				else
				{
					trace("Хде currentShot_comp в totalShots_mc!")
				}
				/*
				
				*/
				if(_currentMainScreen_mc.counterShots_mc.totalShots_mc.totalShots_comp)
				{
					_currentMainScreen_mc.counterShots_mc.totalShots_mc.totalShots_comp.gotoAndStop(0);
				}
				else
				{
					trace("Хде totalShots_comp в totalShots_mc!")
				}
				/*
				
				*/
				_updateCounterShotsGameFunc();
			}
			else
			{
				trace("Хде totalShots_mc в counterShots_mc!")
			}
			/*
			
			*/
			if(_currentMainScreen_mc.counterShots_mc.indicator_mc)
			{
				/*
				
				*/
				_currentMainScreen_mc.counterShots_mc.indicator_mc.gotoAndStop(0);
				_currentMainScreen_mc.counterShots_mc.indicator_mc.loop = false;
				/*
				
				*/
				_updateIndicatorCounterShotsGameFunc();
			}
			else
			{
				trace("Хде indicator_mc в counterShots_mc!")
			}
		}
		else
		{
			trace("Хде counterShots_mc!")
		}
		/*
		
		*/
		if(_currentMainScreen_mc.photoContainer_mc)
		{
			/*
			
			*/
			_currentMainScreen_mc.photoContainer_mc.gotoAndStop(0);
			_currentMainScreen_mc.photoContainer_mc.mouseChildren = false;
			_currentMainScreen_mc.photoContainer_mc.mouseEnabled = true;
			_currentMainScreen_mc.photoContainer_mc.cursor = "default";
			_currentMainScreen_mc.photoContainer_mc.addEventListener("click", _onClickGameFunc, false);
			/*
			
			*/
			_updateShotGameFunc();
			/*
			
			*/
			if(_currentMainScreen_mc.photoContainer_mc.logotype_mc)
			{
				_currentMainScreen_mc.photoContainer_mc.logotype_mc.gotoAndStop(0);
				_currentMainScreen_mc.photoContainer_mc.logotype_mc.visible = false;
			}
		}
		else
		{
			trace("Хде photoContainer_mc!")
		}
	}
	/*
	
	*/
	function _onClickGameFunc(event)
	{
		/*
		
		*/
		var currentCost_num;
		var counterGravityClick_num;
		var point_obj;
		var boost_uint = 1;
		var volumeClickSound_num = 0.5;
		var currentClickSound_str = "click_2_sound";
		/*
		
		*/
		if(_information.counterBoost < 110)
		{
			_information.counterBoost = _information.counterBoost + 5;
		}
		if(_information.counterBoost >= 100)
		{
			boost_uint = 2;
			volumeClickSound_num = 1;
		}
		/*
		
		*/
		currentCost_num = ((_information.costPerClick + _information.costPerBonus) * boost_uint);
		/*
		защита от дурака
		*/
		if((!_information.completedGame) && (currentCost_num >= Number(_information.shots[_information.currentShot][1])))
		{
			currentCost_num = Number(_information.shots[_information.currentShot][1]) - 1;
		}
		/*
		
		*/
		_information.clicks = _information.clicks + currentCost_num;
		/*
		устанавливаем временное ограничение на выполнение некоторых действий
		*/
		var date_obj = new Date();
		var currentDate_num = date_obj.getTime();
		/*
		
		*/
		if((currentDate_num - _information.lastDate) > 100)
		{
			/*
			
			*/
			_information.lastDate = currentDate_num;
			/*
			
			*/
			_updateBonusesGameFunc();
			/*
			
			*/
			if(_currentMainScreen_mc.сontainerAnimationClick_mc)
			{
				if(_currentMainScreen_mc.сontainerAnimationClick_mc.animationClick_mc)
				{
					point_obj = event.currentTarget.localToLocal(event.localX, event.localY, _currentMainScreen_mc.сontainerAnimationClick_mc);
					_currentMainScreen_mc.сontainerAnimationClick_mc.animationClick_mc.x = point_obj.x;
					_currentMainScreen_mc.сontainerAnimationClick_mc.animationClick_mc.y = point_obj.y;
					_currentMainScreen_mc.сontainerAnimationClick_mc.animationClick_mc.gotoAndPlay(0);
				}
			}
			/*
			
			*/
			counterGravityClick_num = Math.ceil((1 + _information.currentModeBonus) * boost_uint);
			if(counterGravityClick_num > 25)
			{
				counterGravityClick_num = 25;
			}
			var gravityClick_mc = new lib.GravityClickMC();
			_before.addChild(gravityClick_mc);
			gravityClick_mc.gotoAndStop(0);
			gravityClick_mc.initExplosionFunc(counterGravityClick_num);
			point_obj = event.currentTarget.localToLocal(event.localX, event.localY, _before);
			gravityClick_mc.x = point_obj.x;
			gravityClick_mc.y = point_obj.y;
		}
		/*
		
		*/
		if(!_information.completedGame)
		{
			/*
			можно поставить больше или равно
			*/
			if(_information.clicks > _information.shots[_information.currentShot][1])
			{
				/*
				
				*/
				_information.clicks = _information.clicks - Number(_information.shots[_information.currentShot][1]);
				/*
				
				*/
				_gotoNextShotGameFunc();
			}
			else
			{
				_updateIndicatorCounterShotsGameFunc();
			}
		}
		/*
		
		*/
		_updateCounterClicksGameFunc();
		/*
		
		*/
		if(_information.currentModeBonus > 0)
		{
			currentClickSound_str = "click_3_sound";
		}
		/*
		
		*/
		point_obj = event.currentTarget.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc(currentClickSound_str, 0, 0, 0, volumeClickSound_num, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
	}
	function _gotoNextShotGameFunc()
	{
		/*
		
		*/
		_information.currentShot++;
		/*
		
		*/
		if(_information.currentShot >= Number(_information.totalShots - 1))
		{
			/*
			
			*/
			_information.currentShot = Number(_information.totalShots - 1);
			/*
			
			*/
			_completeGameFunc();
		}
		/*
		СОХРАНЕНИЕ ИГРЫ
		*/
		_saveGameFunc();
		/*
		
		*/
		_updateCounterShotsGameFunc();
		/*
		
		*/
		_updateIndicatorCounterShotsGameFunc();
		/*
		
		*/
		_updateShotGameFunc();
		/*
		
		*/
		_soundManager.addSoundFunc("message_sound", 0, 0, 0, 0.9, 0);
	}
	/*
	
	*/
	function _updateCounterClicksGameFunc()
	{
		_currentMainScreen_mc.counterClicks_mc.output_numbers_comp.setValueFunc(_information.clicks);
	}
	/*
	
	*/
	function _updateBoostGameFunc()
	{
		try
		{
			/*
			
			*/
			_information.counterBoost--;
			if(_information.counterBoost < 0)
			{
				_information.counterBoost = 0;
			}
			/*
			
			*/
			_updateIndicatorBoostGameFunc();
		}
		catch(event)
		{
			/*
			
			*/
			trace(event, 1);
			/*
			
			*/
			if(_information.intervalBoost_id != null)
			{
				clearInterval(_information.intervalBoost_id);
			}
		}
		finally
		{
			
		}
	}
	function _updateIndicatorBoostGameFunc()
	{
		/*
		
		*/
		var share_num = _information.counterBoost / 100;
		/*
		
		*/
		if(share_num < 0)
		{
			share_num = 0;
		}
		if(share_num > 1)
		{
			share_num = 1;
		}
		/*
		
		*/
		if(_currentMainScreen_mc.indicatorBoost_mc)
		{
			/*
			
			*/
			if(_currentMainScreen_mc.indicatorBoost_mc.indicator_mc)
			{
				_currentMainScreen_mc.indicatorBoost_mc.indicator_mc.scaleX = share_num;
			}
			/*
			
			*/
			if(_currentMainScreen_mc.indicatorBoost_mc.icon_mc)
			{
				if(share_num >= 0.8)
				{
					_currentMainScreen_mc.indicatorBoost_mc.icon_mc.visible = false;
				}
				else
				{
					_currentMainScreen_mc.indicatorBoost_mc.icon_mc.visible = true;
				}
			}
		}
	}
	/*
	
	*/
	function _updateBonusesGameFunc()
	{
		/*
		для оптимизации порезаны проверки - будь внимателен!
		*/
		var cost_uint = _getCostBonusGameFunc(1);
		/*
		ресурсоёмкий фильтр
		*/
		var filter_obj = new createjs.ColorMatrixFilter([0.30, 0.30, 0.30, 0, 0, 0.30, 0.30, 0.30, 0, 0, 0.30, 0.30, 0.30, 0, 0, 0, 0, 0, 1, 0]);
		var bounds_obj;
		/*
		
		*/
		if((cost_uint > 0) && (_information.clicks >= cost_uint) && (_information.currentModeBonus === 0))
		{
			/*
			
			*/
			_currentMainScreen_mc.bonuses_mc.bonusFirst_mc.mouseChildren = false;
			_currentMainScreen_mc.bonuses_mc.bonusFirst_mc.mouseEnabled = true;
			_currentMainScreen_mc.bonuses_mc.bonusFirst_mc.cursor = "pointer";
			_currentMainScreen_mc.bonuses_mc.bonusFirst_mc.addEventListener("click", _onClickBonusFirstMcGameFunc, false);
			/*
			
			*/
			_currentMainScreen_mc.bonuses_mc.bonusFirst_mc.output_numbers_comp.setValueFunc(cost_uint);
			/*
			
			*/
			_currentMainScreen_mc.bonuses_mc.bonusFirst_mc.substrate_mc.gotoAndStop(1);
			/*
			ресурсоёмкий фильтр
			*/
			_currentMainScreen_mc.bonuses_mc.bonusFirst_mc.uncache();
		}
		else
		{
			/*
			
			*/
			_currentMainScreen_mc.bonuses_mc.bonusFirst_mc.mouseChildren = false;
			_currentMainScreen_mc.bonuses_mc.bonusFirst_mc.mouseEnabled = false;
			_currentMainScreen_mc.bonuses_mc.bonusFirst_mc.cursor = "default";
			_currentMainScreen_mc.bonuses_mc.bonusFirst_mc.removeEventListener("click", _onClickBonusFirstMcGameFunc, false);
			/*
			
			*/
			_currentMainScreen_mc.bonuses_mc.bonusFirst_mc.output_numbers_comp.setValueFunc(cost_uint);
			/*
			
			*/
			_currentMainScreen_mc.bonuses_mc.bonusFirst_mc.substrate_mc.gotoAndStop(0);
			/*
			ресурсоёмкий фильтр
			*/
			_currentMainScreen_mc.bonuses_mc.bonusFirst_mc.filters = [filter_obj];
			bounds_obj = _currentMainScreen_mc.bonuses_mc.bonusFirst_mc.getBounds();
			if(_currentMainScreen_mc.bonuses_mc.bonusFirst_mc.bitmapCache)
			{
				_currentMainScreen_mc.bonuses_mc.bonusFirst_mc.updateCache();
			}
			else
			{
				_currentMainScreen_mc.bonuses_mc.bonusFirst_mc.cache(bounds_obj.x, bounds_obj.y, bounds_obj.width, bounds_obj.height);
			}
		}
		/*
		
		*/
		cost_uint = _getCostBonusGameFunc(2);
		/*
		
		*/
		if((cost_uint > 0) && (_information.clicks >= cost_uint) && (_information.currentModeBonus === 0))
		{
			/*
			
			*/
			_currentMainScreen_mc.bonuses_mc.bonusSecond_mc.mouseChildren = false;
			_currentMainScreen_mc.bonuses_mc.bonusSecond_mc.mouseEnabled = true;
			_currentMainScreen_mc.bonuses_mc.bonusSecond_mc.cursor = "pointer";
			_currentMainScreen_mc.bonuses_mc.bonusSecond_mc.addEventListener("click", _onClickBonusSecondMcGameFunc, false);
			/*
			
			*/
			_currentMainScreen_mc.bonuses_mc.bonusSecond_mc.output_numbers_comp.setValueFunc(cost_uint);
			/*
			
			*/
			_currentMainScreen_mc.bonuses_mc.bonusSecond_mc.substrate_mc.gotoAndStop(1);
			/*
			ресурсоёмкий фильтр
			*/
			_currentMainScreen_mc.bonuses_mc.bonusSecond_mc.uncache();
		}
		else
		{
			/*
			
			*/
			_currentMainScreen_mc.bonuses_mc.bonusSecond_mc.mouseChildren = false;
			_currentMainScreen_mc.bonuses_mc.bonusSecond_mc.mouseEnabled = false;
			_currentMainScreen_mc.bonuses_mc.bonusSecond_mc.cursor = "default";
			_currentMainScreen_mc.bonuses_mc.bonusSecond_mc.removeEventListener("click", _onClickBonusSecondMcGameFunc, false);
			/*
			
			*/
			_currentMainScreen_mc.bonuses_mc.bonusSecond_mc.output_numbers_comp.setValueFunc(cost_uint);
			/*
			
			*/
			_currentMainScreen_mc.bonuses_mc.bonusSecond_mc.substrate_mc.gotoAndStop(0);
			/*
			ресурсоёмкий фильтр
			*/
			_currentMainScreen_mc.bonuses_mc.bonusSecond_mc.filters = [filter_obj];
			bounds_obj = _currentMainScreen_mc.bonuses_mc.bonusSecond_mc.getBounds();
			if(_currentMainScreen_mc.bonuses_mc.bonusSecond_mc.bitmapCache)
			{
				_currentMainScreen_mc.bonuses_mc.bonusSecond_mc.updateCache();
			}
			else
			{
				_currentMainScreen_mc.bonuses_mc.bonusSecond_mc.cache(bounds_obj.x, bounds_obj.y, bounds_obj.width, bounds_obj.height);
			}
		}
	}
	function _onClickBonusFirstMcGameFunc(event)
	{
		/*
		
		*/
		var point_obj = event.currentTarget.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("money_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		_initBonusGameFunc(1);
		/*
		
		*/
		var counterGravityClick_num = _getCostBonusGameFunc(1);
		counterGravityClick_num = Math.ceil(counterGravityClick_num / 5);
		if(counterGravityClick_num > 25)
		{
			counterGravityClick_num = 25;
		}
		var gravityClick_mc = new lib.GravityClickMC();
		_before.addChild(gravityClick_mc);
		gravityClick_mc.gotoAndStop(0);
		gravityClick_mc.initExplosionFunc(counterGravityClick_num);
		point_obj = event.currentTarget.localToLocal(event.localX, event.localY, _before);
		gravityClick_mc.x = point_obj.x;
		gravityClick_mc.y = point_obj.y;
	}
	function _onClickBonusSecondMcGameFunc(event)
	{
		/*
		
		*/
		var point_obj = event.currentTarget.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("money_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		_initBonusGameFunc(2);
		/*
		
		*/
		var counterGravityClick_num = _getCostBonusGameFunc(2);
		counterGravityClick_num = Math.ceil(counterGravityClick_num / 5);
		if(counterGravityClick_num > 25)
		{
			counterGravityClick_num = 25;
		}
		var gravityClick_mc = new lib.GravityClickMC();
		_before.addChild(gravityClick_mc);
		gravityClick_mc.gotoAndStop(0);
		gravityClick_mc.initExplosionFunc(counterGravityClick_num);
		point_obj = event.currentTarget.localToLocal(event.localX, event.localY, _before);
		gravityClick_mc.x = point_obj.x;
		gravityClick_mc.y = point_obj.y;
	}
	function _initBonusGameFunc(currentBonus_uint)
	{
		/*
		
		*/
		if(currentBonus_uint === undefined)
		{
			currentBonus_uint = 1;
		}
		else
		{
			currentBonus_uint = Math.round(Number(currentBonus_uint));
		}
		/*
		
		*/
		var cost_uint = _getCostBonusGameFunc(currentBonus_uint);
		/*
		
		*/
		if((cost_uint > 0) && (_information.clicks >= cost_uint) && (_information.currentModeBonus === 0))
		{
			/*
			
			*/
			_information.clicks = _information.clicks - cost_uint;
			/*
			
			*/
			_information.counterTimeBonus = _information.totalTimeBonus;
			/*
			
			*/
			_information.currentModeBonus = currentBonus_uint;
			/*
			
			*/
			_information.costPerBonus = Math.floor((_information.shots[_information.currentShot][1] / 100) * _information.currentModeBonus);
			if(_information.costPerBonus < _information.currentModeBonus)
			{
				_information.costPerBonus = _information.currentModeBonus;
			}
			/*
			
			*/
			_updateCounterClicksGameFunc();
			/*
			
			*/
			_updateBonusesGameFunc();
			/*
			
			*/
			_updateIndicatorBonusGameFunc();
			/*
			
			*/
			if(_information.intervalBonus_id != null)
			{
				clearInterval(_information.intervalBonus_id);
			}
			_information.intervalBonus_id = setInterval(_updateBonusGameFunc, 100);
		}
	}
	function _updateBonusGameFunc()
	{
		try
		{
			/*
			
			*/
			_information.counterTimeBonus--;
			/*
			
			*/
			if(_information.counterTimeBonus <= 0)
			{
				/*
				
				*/
				_information.counterTimeBonus = 0;
				/*
				
				*/
				_information.currentModeBonus = 0;
				/*
				
				*/
				_information.costPerBonus = 0;
				/*
				
				*/
				if(_information.intervalBonus_id != null)
				{
					clearInterval(_information.intervalBonus_id);
				}
				/*
				
				*/
				_updateBonusesGameFunc();
			}
		}
		catch(event)
		{
			/*
			
			*/
			trace(event, 1);
			/*
			
			*/
			_information.counterTimeBonus = 0;
			/*
			
			*/
			_information.currentModeBonus = 0;
			/*
			
			*/
			_information.costPerBonus = 0;
			/*
			
			*/
			if(_information.intervalBonus_id != null)
			{
				clearInterval(_information.intervalBonus_id);
			}
			/*
			
			*/
			_updateBonusesGameFunc();
		}
		finally
		{
			_updateIndicatorBonusGameFunc();
		}
	}
	function _getCostBonusGameFunc(bonus_uint)
	{
		/*
		
		*/
		if(bonus_uint === undefined)
		{
			bonus_uint = 1;
		}
		else
		{
			bonus_uint = Math.round(Number(bonus_uint));
		}
		/*
		
		*/
		var cost_uint = Math.floor((_information.shots[_information.currentShot][1] / 4) * bonus_uint);
		/*
		
		*/
		return cost_uint;
	}
	/*
	
	*/
	function _updateIndicatorBonusGameFunc()
	{
		/*
		
		*/
		var share_num = _information.counterTimeBonus / _information.totalTimeBonus;
		/*
		
		*/
		if(share_num > 1)
		{
			share_num = 1;
		}
		if(share_num < 0)
		{
			share_num = 0;
		}
		/*
		
		*/
		if(_currentMainScreen_mc.indicatorBonus_mc)
		{
			/*
			
			*/
			if(_information.counterTimeBonus > 0)
			{
				/*
				
				*/
				_currentMainScreen_mc.indicatorBonus_mc.alpha = 1;
				/*
				
				*/
				if(_currentMainScreen_mc.indicatorBonus_mc.indicator_mc)
				{
					_currentMainScreen_mc.indicatorBonus_mc.indicator_mc.scaleX = share_num;
				}
			}
			else
			{
				_currentMainScreen_mc.indicatorBonus_mc.alpha = 0.01;
			}
		}
	}
	/*
	
	*/
	function _updateCounterShotsGameFunc()
	{
		if(_currentMainScreen_mc.counterShots_mc)
		{
			if(_currentMainScreen_mc.counterShots_mc.totalShots_mc)
			{
				/*
				
				*/
				if(_currentMainScreen_mc.counterShots_mc.totalShots_mc.currentShot_comp)
				{
					_currentMainScreen_mc.counterShots_mc.totalShots_mc.currentShot_comp.setValueFunc(Number(_information.currentShot + 1));
				}
				/*
				
				*/
				if(_currentMainScreen_mc.counterShots_mc.totalShots_mc.totalShots_comp)
				{
					_currentMainScreen_mc.counterShots_mc.totalShots_mc.totalShots_comp.setValueFunc(_information.totalShots);
				}
			}
		}
	}
	/*
	
	*/
	function _updateIndicatorCounterShotsGameFunc()
	{
		/*
		
		*/
		var share_num = _information.clicks / _information.shots[_information.currentShot][1];
		/*
		
		*/
		if(share_num > 1)
		{
			share_num = 1;
		}
		if(share_num < 0)
		{
			share_num = 0;
		}
		/*
		
		*/
		if(_currentMainScreen_mc.counterShots_mc)
		{
			if(_currentMainScreen_mc.counterShots_mc.indicator_mc)
			{
				_currentMainScreen_mc.counterShots_mc.indicator_mc.gotoAndStop(Math.floor(share_num * _currentMainScreen_mc.counterShots_mc.indicator_mc.totalFrames));
			}
		}
	}
	/*
	
	*/
	function _updateShotGameFunc()
	{
		/*
		
		*/
		var currentShot_uint = Math.round(Number(_information.currentShot));
		var currentFrame_uint = 0;
		/*
		
		*/
		if(currentShot_uint < _information.shots.length)
		{
			currentFrame_uint = Math.round(Number(_information.shots[currentShot_uint][0]));
		}
		/*
		
		*/
		if(currentFrame_uint < _currentMainScreen_mc.photoContainer_mc.totalFrames)
		{
			/*
			
			*/
			_currentMainScreen_mc.photoContainer_mc.gotoAndStop(currentFrame_uint);
			/*
			
			*/
			if(_information.shots[currentShot_uint][2] != null)
			{
				_information.shots[currentShot_uint][2]();
			}
			/*
			
			*/
			_updateBonusesGameFunc();
		}
		else
		{
			trace("Кадр " + currentFrame_uint + " отсутствует в photoContainer_mc!")
		}
	}
	/*
	
	*/
	function _onClickPhotoMcGameFunc(event)
	{
		/*
		
		*/
		_soundManager.addSoundFunc("photo_sound", 0, 0, 0, 1, 0, false);
		/*
		
		*/
		_updateVisibleDisplayObjectFunc(_currentMainScreen_mc, false);
		/*
		
		*/
		_currentMainScreen_mc.photoContainer_mc.visible = true;
		if(_currentMainScreen_mc.photoContainer_mc.logotype_mc)
		{
			_currentMainScreen_mc.photoContainer_mc.logotype_mc.visible = true;
		}
		/*
		
		*/
		_stage.update();
		/*
		
		*/
		try
		{
			var canvas = document.getElementById("canvas");
			canvas.toBlobHD(function(blob){saveAs(blob, _TITLE + ".png");}, "image/png");
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			/*
			
			*/
			if(_currentMainScreen_mc.photoContainer_mc.logotype_mc)
			{
				_currentMainScreen_mc.photoContainer_mc.logotype_mc.visible = false;
			}
			/*
			
			*/
			_updateVisibleDisplayObjectFunc(_currentMainScreen_mc);
			/*
			
			*/
			_addAdsFunc();
		}
	}
	function _updateVisibleDisplayObjectFunc(container_mc, visible_bool)
	{
		/*
		
		*/
		if(visible_bool === undefined)
		{
			visible_bool = true;
		}
		else
		{
			visible_bool = Boolean(visible_bool);
		}
		/*
		
		*/
		var displayObject;
		var totalDisplayObjects_uint;
		var i = 0;
		/*
		
		*/
		if(container_mc.numChildren)
		{
			/*
			
			*/
			totalDisplayObjects_uint = container_mc.numChildren;
			/*
			
			*/
			while(i < totalDisplayObjects_uint)
			{
				/*
				
				*/
				displayObject = container_mc.getChildAt(i);
				if(displayObject.hasOwnProperty("visible"))
				{
					displayObject.visible = visible_bool;
				}
				/*
				
				*/
				i++;
			}
		}
	}
	/*
	
	*/
	function _showSkipShotGameFunc()
	{
		if(_currentMainScreen_mc.bonuses_mc.skipShot_mc)
		{
			_currentMainScreen_mc.bonuses_mc.skipShot_mc.visible = true;
			_currentMainScreen_mc.bonuses_mc.skipShot_mc.mouseChildren = false;
			_currentMainScreen_mc.bonuses_mc.skipShot_mc.mouseEnabled = true;
			_currentMainScreen_mc.bonuses_mc.skipShot_mc.cursor = "pointer";
			_currentMainScreen_mc.bonuses_mc.skipShot_mc.addEventListener("click", _onClickSkipShotGameFunc, false);
		}
	}
	function _hideSkipShotGameFunc()
	{
		if(_currentMainScreen_mc.bonuses_mc.skipShot_mc)
		{
			_currentMainScreen_mc.bonuses_mc.skipShot_mc.visible = false;
			_currentMainScreen_mc.bonuses_mc.skipShot_mc.mouseChildren = false;
			_currentMainScreen_mc.bonuses_mc.skipShot_mc.mouseEnabled = false;
			_currentMainScreen_mc.bonuses_mc.skipShot_mc.cursor = "default";
			_currentMainScreen_mc.bonuses_mc.skipShot_mc.removeEventListener("click", _onClickSkipShotGameFunc, false);
		}
	}
	function _onClickSkipShotGameFunc(event)
	{
		/*
		
		*/
		var point_obj = event.currentTarget.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		можно приспособить под Вознаграждение
		*/
		_completeSkipShotGameFunc();
	}
	function _completeSkipShotGameFunc()
	{
		/*
		
		*/
		_hideSkipShotGameFunc();
		/*
		
		*/
		_gotoNextShotGameFunc();
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
		_beginGameFunc();
	}
	/*
	
	*/
	function _completeGameFunc()
	{
		/*
		
		*/
		_information.completedGame = true;
		/*
		
		*/
		_soundManager.addSoundFunc("completed_sound", 0, 0, 0, 0.4, 0);
		/*
		
		*/
		if(_currentMainScreen_mc.playAgain_btn)
		{
			createjs.Tween.get(_currentMainScreen_mc.playAgain_btn).wait(0).to({alpha:1}, _DELAY * 1000, createjs.Ease.cubicInOut);
			_currentMainScreen_mc.playAgain_btn.addEventListener("click", _onClickPlayAgainBtnFunc, false);
		}
		/*
		
		*/
		_hideSkipShotGameFunc();
		/*
		редирект
		*/
		if(_information.timeout_id != null)
		{
			clearTimeout(_information.timeout_id);
		}
		_information.timeout_id = setTimeout(_redirectFunc, 6000);
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
			if(loadInformation_obj.hasOwnProperty("currentShot"))
			{
				if(Number(loadInformation_obj.currentShot) < Number(_information.totalShots - 1))
				{
					/*
					
					*/
					_information.currentShot = Number(loadInformation_obj.currentShot);
					/*
					
					*/
					if(loadInformation_obj.hasOwnProperty("clicks"))
					{
						_information.clicks = Number(loadInformation_obj.clicks);
					}
					/*
					
					*/
					if(loadInformation_obj.hasOwnProperty("firstRun"))
					{
						_information.firstRun = Boolean(loadInformation_obj.firstRun);
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
		var loadInformation_obj = {};
		loadInformation_obj.currentShot = Number(_information.currentShot);
		//loadInformation_obj.clicks = Number(_information.clicks);
		loadInformation_obj.clicks = 0;
		loadInformation_obj.firstRun = Boolean(_information.firstRun);
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
		window.open("https://dl-girls.com/content/folder_1705681246" + "?utm_source=" + window.location.href + "&utm_medium=game_referral|game&utm_content=simple&utm_campaign=" + _TITLE, "_self");
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
	встроенная реклама
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
	function shotFunc_1()
	{
		_showSkipShotGameFunc();
	}
	/*
	ссылки
	*/
	function _onClickPreloaderBtnFunc(event)
	{
		window.open(_LINKTOGAME + "?utm_source=" + window.location.href + "&utm_medium=game_referral|preloader&utm_content=simple&utm_campaign=" + _TITLE, "_blank");
	}
	function _onClickLogoBtnFunc(event)
	{
		window.open(_LINKTOGAME + "?utm_source=" + window.location.href + "&utm_medium=game_referral|logo&utm_content=simple&utm_campaign=" + _TITLE, "_blank");
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