/*
* @author edapskov
* @copyright 2024 edapskov v 2.000
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
	var _TITLE = "Mysterious Familiars Enchanted Bestiary";
	var _LINKTOGAME = "https://dl-girls.com";
	var _DELAY = 1;
	var _LANGUAGE = "en";
	/*
	публичные переменные
	*/
	this.copyright = "© DL-Studio, v 2.000";
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
			[0, 10, null],
			[1, 30, null],
			[2, 60, null],
			[3, 90, null],
			[4, 120, null],
			[5, 150, null],
			[6, 40, null],
			[7, 70, null],
			[8, 100, null],
			[9, 130, null],
			[10, 160, null],
			[11, 50, null],
			[12, 80, null],
			[13, 110, null],
			[14, 140, null],
			[15, 170, null],
			[16, 60, null],
			[17, 90, null],
			[18, 120, null],
			[19, 150, null],
			[20, 180, null],
			[21, 190, null],
			[22, 200, null],
			[23, 210, null],
			[24, 220, null],
			[25, 230, null],
			[26, 240, null],
			[27, 250, null],
			[28, 260, null],
			[29, 270, null],
			[30, 280, null],
			[31, 290, null],
			[32, 300, null],
			[33, 310, null],
			[34, 320, null],
			[35, 330, null],
			[36, 340, null],
			[37, 350, null],
			[38, 360, null],
			[39, 370, null],
			[40, 380, null],
			[41, 390, null],
			[42, 400, null],
			[43, 410, null],
			[44, 420, null],
			[45, 430, null],
			[46, 440, null],
			[47, 450, null],
			[48, 460, null],
			[49, 470, null],
			[50, 0, null]
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
		logo_img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWgAAAFoCAYAAAB65WHVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpCNEYzMjlGRTAwMDdFRjExQkY3QzkzRDUxNkE2QUU2NCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0NkE3Q0FCRDQ4M0UxMUYwODE0Q0RENDI4RkY3MkZGNiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0NkE3Q0FCQzQ4M0UxMUYwODE0Q0RENDI4RkY3MkZGNiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBRDQ2REM1OERCNDdGMDExODZBOEQzQ0ZCQjdGRkY4QSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCNEYzMjlGRTAwMDdFRjExQkY3QzkzRDUxNkE2QUU2NCIvPiA8L3JkZjpEZXNjcmlwdGlv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";
		var logo_bitmap = new createjs.Bitmap(logo_img);
		_currentMainScreen_mc.logo_mc.addChild(logo_bitmap);
		logo_bitmap.x = -180;
		logo_bitmap.y = -180;
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
		loadQueue.loadFile({id:"tink_sound", src:"library/sounds/tink_sound.ogg"});
		loadQueue.loadFile({id:"next_shot_sound", src:"library/sounds/next_shot_sound.ogg"});
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
		_soundManager.addSoundFunc("background_sound", 0, 0, -1, 0.2, 0);
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
		//_animationTransitionBetweenScenesFunc(_gameFunc, 0, 1, null, true);
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
		/*
		
		*/
		_addAdsFunc();
		/*
		
		*/
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
				/*
				
				*/
				_currentMainScreen_mc.сontainerAnimationClick_mc.animationClick_mc.gotoAndStop(0);
				_currentMainScreen_mc.сontainerAnimationClick_mc.animationClick_mc.loop = false;
				/*
				
				*/
				if(_currentMainScreen_mc.сontainerAnimationClick_mc.animationClick_mc.animation_0_mc)
				{
					_currentMainScreen_mc.сontainerAnimationClick_mc.animationClick_mc.loop = true;
					_currentMainScreen_mc.сontainerAnimationClick_mc.animationClick_mc.animation_0_mc.gotoAndStop(0);
				}
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
				if(_currentMainScreen_mc.bonuses_mc.bonusFirst_mc.button_mc)
				{
					/*
					
					*/
					_currentMainScreen_mc.bonuses_mc.bonusFirst_mc.button_mc.gotoAndStop(0);
					/*
					
					*/
					if(_currentMainScreen_mc.bonuses_mc.bonusFirst_mc.button_mc.output_numbers_comp)
					{
						_currentMainScreen_mc.bonuses_mc.bonusFirst_mc.button_mc.output_numbers_comp.gotoAndStop(0);
					}
					else
					{
						trace("Хде output_numbers_comp в bonusFirst_mc!")
					}
					/*
					
					*/
					if(_currentMainScreen_mc.bonuses_mc.bonusFirst_mc.button_mc.substrate_mc)
					{
						_currentMainScreen_mc.bonuses_mc.bonusFirst_mc.button_mc.substrate_mc.gotoAndStop(0);
					}
					else
					{
						trace("Хде substrate_mc в bonusFirst_mc!")
					}
				}
				else
				{
					trace("Хде button_mc в bonusFirst_mc!")
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
				if(_currentMainScreen_mc.bonuses_mc.bonusSecond_mc.button_mc)
				{
					/*
					
					*/
					_currentMainScreen_mc.bonuses_mc.bonusSecond_mc.button_mc.gotoAndStop(0);
					/*
					
					*/
					if(_currentMainScreen_mc.bonuses_mc.bonusSecond_mc.button_mc.output_numbers_comp)
					{
						_currentMainScreen_mc.bonuses_mc.bonusSecond_mc.button_mc.output_numbers_comp.gotoAndStop(0);
					}
					else
					{
						trace("Хде output_numbers_comp в bonusSecond_mc!")
					}
					/*
					
					*/
					if(_currentMainScreen_mc.bonuses_mc.bonusSecond_mc.button_mc.substrate_mc)
					{
						_currentMainScreen_mc.bonuses_mc.bonusSecond_mc.button_mc.substrate_mc.gotoAndStop(0);
					}
					else
					{
						trace("Хде substrate_mc в bonusSecond_mc!")
					}
				}
				else
				{
					trace("Хде button_mc в bonusSecond_mc!")
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
				_currentMainScreen_mc.indicatorBonus_mc.indicator_mc.gotoAndStop(0);
			}
			else
			{
				trace("Хде output_numbers_comp в indicatorBonus_mc!")
			}
			/*
			
			*/
			_updateIndicatorBonusGameFunc();
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
				_currentMainScreen_mc.indicatorBoost_mc.indicator_mc.gotoAndStop(0);
			}
			else
			{
				trace("Хде indicator_mc в indicatorBoost_mc!")
			}
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
		var volumeClickSound_num = 0.1;
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
			volumeClickSound_num = 0.4;
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
					_runAnimationClickFunc(point_obj);
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
		//_soundManager.addSoundFunc("message_sound", 0, 0, 0, 0.9, 0);
		_soundManager.addSoundFunc("next_shot_sound", 0, 0, 0, 0.9, 0);
	}
	/*
	
	*/
	function _runAnimationClickFunc(point_obj)
	{
		/*
		
		*/
		_currentMainScreen_mc.сontainerAnimationClick_mc.animationClick_mc.x = point_obj.x;
		_currentMainScreen_mc.сontainerAnimationClick_mc.animationClick_mc.y = point_obj.y;
		/*
		
		*/
		var currentFrame_num;
		var animation_str;
		var animation_mc;
		/*
		
		*/
		if(_currentMainScreen_mc.сontainerAnimationClick_mc.animationClick_mc.loop)
		{
			/*
			
			*/
			currentFrame_num = Math.floor((Math.random() * _currentMainScreen_mc.сontainerAnimationClick_mc.animationClick_mc.totalFrames));
			/*
			
			*/
			_currentMainScreen_mc.сontainerAnimationClick_mc.animationClick_mc.gotoAndStop(currentFrame_num);
			/*
			
			*/
			animation_str = "animation_" + currentFrame_num + "_mc";
			/*
			
			*/
			if(_currentMainScreen_mc.сontainerAnimationClick_mc.animationClick_mc[animation_str])
			{
				animation_mc = _currentMainScreen_mc.сontainerAnimationClick_mc.animationClick_mc[animation_str];
				animation_mc.gotoAndStop(0);
				animation_mc.loop = false;
				animation_mc.play();
			}
		}
		else
		{
			_currentMainScreen_mc.сontainerAnimationClick_mc.animationClick_mc.gotoAndPlay(0);
		}
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
			/*
			if(_currentMainScreen_mc.indicatorBoost_mc.indicator_mc)
			{
				_currentMainScreen_mc.indicatorBoost_mc.indicator_mc.scaleX = share_num;
			}
			*/
			_currentMainScreen_mc.indicatorBoost_mc.gotoAndStop(Math.floor(share_num * (_currentMainScreen_mc.indicatorBoost_mc.totalFrames - 1)));
			/*
			
			*/
			if(_currentMainScreen_mc.indicatorBoost_mc.icon_mc)
			{
				if(share_num < 1)
				{
					_currentMainScreen_mc.indicatorBoost_mc.icon_mc.visible = false;
				}
				else
				{
					if(!_currentMainScreen_mc.indicatorBoost_mc.icon_mc.visible)
					{
						_currentMainScreen_mc.indicatorBoost_mc.icon_mc.visible = true;
						_currentMainScreen_mc.indicatorBoost_mc.icon_mc.gotoAndPlay(0);
					}
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
			_currentMainScreen_mc.bonuses_mc.bonusFirst_mc.button_mc.output_numbers_comp.setValueFunc(cost_uint);
			/*
			
			*/
			_currentMainScreen_mc.bonuses_mc.bonusFirst_mc.button_mc.substrate_mc.gotoAndStop(1);
			/*
			ресурсоёмкий фильтр
			*/
			_currentMainScreen_mc.bonuses_mc.bonusFirst_mc.button_mc.uncache();
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
			_currentMainScreen_mc.bonuses_mc.bonusFirst_mc.button_mc.output_numbers_comp.setValueFunc(cost_uint);
			/*
			
			*/
			_currentMainScreen_mc.bonuses_mc.bonusFirst_mc.button_mc.substrate_mc.gotoAndStop(0);
			/*
			ресурсоёмкий фильтр
			*/
			_currentMainScreen_mc.bonuses_mc.bonusFirst_mc.button_mc.filters = [filter_obj];
			bounds_obj = _currentMainScreen_mc.bonuses_mc.bonusFirst_mc.button_mc.getBounds();
			if(_currentMainScreen_mc.bonuses_mc.bonusFirst_mc.button_mc.bitmapCache)
			{
				_currentMainScreen_mc.bonuses_mc.bonusFirst_mc.button_mc.updateCache();
			}
			else
			{
				_currentMainScreen_mc.bonuses_mc.bonusFirst_mc.button_mc.cache(bounds_obj.x, bounds_obj.y, bounds_obj.width, bounds_obj.height);
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
			_currentMainScreen_mc.bonuses_mc.bonusSecond_mc.button_mc.output_numbers_comp.setValueFunc(cost_uint);
			/*
			
			*/
			_currentMainScreen_mc.bonuses_mc.bonusSecond_mc.button_mc.substrate_mc.gotoAndStop(1);
			/*
			ресурсоёмкий фильтр
			*/
			_currentMainScreen_mc.bonuses_mc.bonusSecond_mc.button_mc.uncache();
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
			_currentMainScreen_mc.bonuses_mc.bonusSecond_mc.button_mc.output_numbers_comp.setValueFunc(cost_uint);
			/*
			
			*/
			_currentMainScreen_mc.bonuses_mc.bonusSecond_mc.button_mc.substrate_mc.gotoAndStop(0);
			/*
			ресурсоёмкий фильтр
			*/
			_currentMainScreen_mc.bonuses_mc.bonusSecond_mc.button_mc.filters = [filter_obj];
			bounds_obj = _currentMainScreen_mc.bonuses_mc.bonusSecond_mc.button_mc.getBounds();
			if(_currentMainScreen_mc.bonuses_mc.bonusSecond_mc.button_mc.bitmapCache)
			{
				_currentMainScreen_mc.bonuses_mc.bonusSecond_mc.button_mc.updateCache();
			}
			else
			{
				_currentMainScreen_mc.bonuses_mc.bonusSecond_mc.button_mc.cache(bounds_obj.x, bounds_obj.y, bounds_obj.width, bounds_obj.height);
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
		var gravityClick_mc = new lib.GravityMoneyMC();
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
		var gravityClick_mc = new lib.GravityMoneyMC();
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
				/*
				if(_currentMainScreen_mc.indicatorBonus_mc.indicator_mc)
				{
					_currentMainScreen_mc.indicatorBonus_mc.indicator_mc.scaleX = share_num;
				}
				*/
				_currentMainScreen_mc.indicatorBonus_mc.gotoAndStop(Math.floor(share_num * (_currentMainScreen_mc.indicatorBonus_mc.totalFrames - 1)));
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
				_currentMainScreen_mc.counterShots_mc.indicator_mc.gotoAndStop(Math.floor(share_num * (_currentMainScreen_mc.counterShots_mc.indicator_mc.totalFrames - 1)));
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
		/*
		if(_information.timeout_id != null)
		{
			clearTimeout(_information.timeout_id);
		}
		_information.timeout_id = setTimeout(_redirectFunc, 6000);
		*/
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
		window.open("https://dl-girls.com/content/folder_1748625621" + "?utm_source=" + window.location.href + "&utm_medium=game_referral|game&utm_content=simple&utm_campaign=" + _TITLE, "_self");
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