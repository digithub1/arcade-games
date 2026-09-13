/*
* @author edapskov
* @copyright 2019 edapskov v 4.1
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
	var _TITLE = "Boo-tiful Princess Match";
	var _LINKTOGAME = "https://dl-girls.com";
	var _DELAY = 1;
	/*
	публичные переменные
	*/
	this.copyright = "© DL-Studio, v 4.1";
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
		timeout_id:null,
		interval_id:null,
		counter:null,
		timer:null,
		cards:null,
		firstCard:null,
		secondCard:null,
		totalActions:null,
		locations:{
			location_1:{
				completed:null,
				currentRound:null,
				currentNameRound:null,
				totalRounds:null,
				rounds:{
					round_1:{timer:30, skipped:false, completed:null},
					round_2:{timer:60, skipped:false, completed:null},
					round_3:{timer:90, skipped:false, completed:null},
					round_4:{timer:120, skipped:false, completed:null},
					round_5:{timer:150, skipped:false, completed:null}
				}
			},
			location_2:{
				completed:null,
				currentRound:null,
				currentNameRound:null,
				totalRounds:null,
				rounds:{
					round_1:{timer:30, skipped:false, completed:null},
					round_2:{timer:60, skipped:false, completed:null},
					round_3:{timer:90, skipped:false, completed:null},
					round_4:{timer:120, skipped:false, completed:null},
					round_5:{timer:150, skipped:false, completed:null}
				}
			},
			location_3:{
				completed:null,
				currentRound:null,
				currentNameRound:null,
				totalRounds:null,
				rounds:{
					round_1:{timer:30, skipped:false, completed:null},
					round_2:{timer:60, skipped:false, completed:null},
					round_3:{timer:90, skipped:false, completed:null},
					round_4:{timer:120, skipped:false, completed:null},
					round_5:{timer:150, skipped:false, completed:null}
				}
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
		logo_img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozMkNGOTMxNEE2MzJGMDExQUVGRkIxNjJENEQxMDk1NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3QzEzQkI5NUE1MDAxMUYwOUQ0MTgwNjhEOUQ5ODkxNiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3QzEzQkI5NEE1MDAxMUYwOUQ0MTgwNjhEOUQ5ODkxNiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4RDc5RDc3QUZDQTRGMDExOTQzQ0Y4MTcxRTdDMTA1OCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozMkNGOTMxNEE2MzJGMDExQUVGRkIxNjJENEQxMDk1NiIvPiA8L3JkZjpEZXNjcmlwdGlv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";
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
		loadQueue.loadFile({id:"magic_sound", src:"library/sounds/magic_sound.ogg"});
		loadQueue.loadFile({id:"magic_2_sound", src:"library/sounds/magic_2_sound.ogg"});
		loadQueue.loadFile({id:"tick_sound", src:"library/sounds/tick_sound.ogg"});
		loadQueue.loadFile({id:"tink_sound", src:"library/sounds/tink_sound.ogg"});
		loadQueue.loadFile({id:"paper_sound", src:"library/sounds/paper_sound.ogg"});
		loadQueue.loadFile({id:"bonus_sound", src:"library/sounds/bonus_sound.ogg"});
		loadQueue.loadFile({id:"loss_sound", src:"library/sounds/loss_sound.ogg"});
		loadQueue.loadFile({id:"win_sound", src:"library/sounds/win_sound.ogg"});
		loadQueue.loadFile({id:"message_sound", src:"library/sounds/message_sound.ogg"});
		loadQueue.loadFile({id:"photo_sound", src:"library/sounds/photo_sound.ogg"});
		loadQueue.loadFile({id:"air_sound", src:"library/sounds/air_sound.ogg"});
		loadQueue.loadFile({id:"ghost_sound", src:"library/sounds/ghost_sound.ogg"});
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
		_resetFunc();
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
		/*
		
		*/
		_information.targetLocation = 1;
		_information.totalLocations = 0;
		for(var propLocations in _information.locations)
		{
			if(_information.locations.hasOwnProperty(propLocations))
			{
				/*
				
				*/
				_information.totalLocations++;
				_information.locations[propLocations].completed = false;
				_information.locations[propLocations].currentRound = 1;
				_information.locations[propLocations].totalRounds = 0;
				/*
				
				*/
				for(var propRounds in _information.locations[propLocations].rounds)
				{
					if(_information.locations[propLocations].rounds.hasOwnProperty(propRounds))
					{
						_information.locations[propLocations].totalRounds++;
						_information.locations[propLocations].rounds[propRounds].completed = false;
					}
				}
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
		_animationTransitionBetweenScenesFunc(_selectFunc, 0, 1, null, true);
		/*
		возможные варианты...
		*/
		/*
		if(_information.firstRun)
		{
			_information.firstRun = false;
			_animationTransitionBetweenScenesFunc(_cartoonFunc, 0, 1, null, true);
		}
		else
		{
			_animationTransitionBetweenScenesFunc(_selectFunc, 0, 1, null, true);
		}
		*/
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
				_information.firstRun = false;
				_currentMainScreen_mc.help_mc.addEventListener("click", _onClickHelpMCFunc, false);
			}
			else
			{
				_currentMainScreen_mc.removeChild(_currentMainScreen_mc.help_mc);
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
					timelineControl.gotoFunc("mid", 1);
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
							location_mc.gotoAndStop(2);
							location_mc.mouseEnabled = false;
							location_mc.mouseChildren = false;
							location_mc.cursor = "default";
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
		//location_mc.gotoAndStop(2);
		/*
		
		*/
		var point_obj = location_mc.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("magic_sound", 0, 0, 0, 0.2, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		_information.currentNameLocation = String(location_mc.name);
		/*
		
		*/
		//new Edapskov_Flickering(_before, location_mc, ["#ffffff", "#ffffcc"], 10, 24);
		/*
		
		*/
		var gravityExplosion_mc = new lib.GravityExplosionMC();
		_before.addChild(gravityExplosion_mc);
		gravityExplosion_mc.gotoAndStop(0);
		point_obj = location_mc.localToLocal(event.localX, event.localY, _before);
		gravityExplosion_mc.x = point_obj.x;
		gravityExplosion_mc.y = point_obj.y;
		/*
		
		*/
		_action_mc.mouseEnabled = false;
		_action_mc.mouseChildren = false;
		/*
		исключения
		*/
		/*
		if(!_information.locations[_information.currentNameLocation].completed)
		{
			if(_skippedLocationsFunc() == 1)
			{
				_addAdsFunc();
			}
			if(_skippedLocationsFunc() == 2)
			{
				_addAdsFunc();
			}
		}
		*/
		/*
		
		*/
		if(_hasLabelInMovieClipFunc(_action_mc, "end"))
		{
			var timelineControl = new Edapskov_TimelineControl(_action_mc);
			timelineControl.gotoFunc("end", 1);
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
		if(_currentMainScreen_mc.skip_mc)
		{
			_currentMainScreen_mc.skip_mc.visible = false;
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
		var cards_mc = _currentMainScreen_mc.cards_mc;
		cards_mc.gotoAndStop(0);
		/*
		
		*/
		cards_mc.memoryTimer_mc.gotoAndStop(0);
		cards_mc.memoryTimer_mc.mouseEnabled = false;
		cards_mc.memoryTimer_mc.mouseChildren = false;
		cards_mc.memoryTimer_mc.visible = false;
		/*
		
		*/
		cards_mc.gotoAndStop(Number(_information.locations[_information.currentNameLocation].currentRound - 1));
		cards_mc = cards_mc["round_" + _information.locations[_information.currentNameLocation].currentRound];
		cards_mc.gotoAndStop(0);
		var totalCards_num = cards_mc.numChildren;
		var i = 0;
		var card_mc;
		while(i < totalCards_num)
		{
			/*
			
			*/
			if(cards_mc.getChildAt(i))
			{
				card_mc = cards_mc.getChildAt(i);
				card_mc.gotoAndStop(0);
			}
			/*
			
			*/
			i++;
		}
		/*
		
		*/
		_currentMainScreen_mc.indicator_mc.gotoAndStop(0);
		_currentMainScreen_mc.indicator_mc.body_mc.gotoAndStop(0);
		_currentMainScreen_mc.indicator_mc.body_mc.gotoAndStop(Number(_currentMainScreen_mc.indicator_mc.body_mc.totalFrames - 1));
		/*
		
		*/
		_currentMainScreen_mc.preview_mc.gotoAndStop(0);
		_updateHeroesFunc(_currentMainScreen_mc.preview_mc);
		_currentMainScreen_mc.preview_mc.play();
		/*
		
		*/
		_currentMainScreen_mc.popup_mc.gotoAndStop(0);
		_currentMainScreen_mc.popup_mc.mouseEnabled = true;
		_currentMainScreen_mc.popup_mc.mouseChildren = false;
		_currentMainScreen_mc.popup_mc.cursor = "pointer";
		_currentMainScreen_mc.popup_mc.addEventListener("click", _onClickStartLocationFunc, false);
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
		var popup_mc = event.currentTarget;
		popup_mc.mouseEnabled = false;
		popup_mc.mouseChildren = false;
		popup_mc.cursor = "default";
		popup_mc.removeEventListener("click", _onClickStartLocationFunc, false);
		/*
		
		*/
		var point_obj = popup_mc.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 0.1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		var gravityExplosion_mc = new lib.GravityExplosionMC();
		_before.addChild(gravityExplosion_mc);
		gravityExplosion_mc.gotoAndStop(0);
		point_obj = popup_mc.localToLocal(event.localX, event.localY, _before);
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
		_information.locations[_information.currentNameLocation].currentNameRound = "round_" + _information.locations[_information.currentNameLocation].currentRound;
		_information.timer = _information.locations[_information.currentNameLocation].rounds[_information.locations[_information.currentNameLocation].currentNameRound].timer;
		_information.cards = new Array();
		_information.firstCard = null;
		_information.secondCard = null;
		_information.totalActions = 0;
		/*
		
		*/
		if(_currentMainScreen_mc.skip_mc)
		{
			if(_information.locations[_information.currentNameLocation].rounds[_information.locations[_information.currentNameLocation].currentNameRound].skipped)
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
		var cards_mc = _currentMainScreen_mc.cards_mc;
		cards_mc.gotoAndStop(0);
		cards_mc.mouseChildren = false;
		cards_mc.mouseEnabled = false;
		cards_mc.gotoAndStop(Number(_information.locations[_information.currentNameLocation].currentRound - 1));
		cards_mc = cards_mc[_information.locations[_information.currentNameLocation].currentNameRound];
		cards_mc.gotoAndStop(0);
		/*
		
		*/
		var i;
		var cards_arr = new Array();
		var random_num;
		var totalCards_num = cards_mc.numChildren;
		var uniqueCards_num = Math.round(totalCards_num / 2);
		var card_mc;
		/*
		создаём сортированный список карт
		*/
		i = 1;
		while(i <= uniqueCards_num)
		{
			/*
			
			*/
			cards_arr.push(i, i);
			/*
			
			*/
			i++;
		}
		/*
		перемешиваем карты
		*/
		while(cards_arr.length > 0)
		{
			random_num = Math.floor(Math.random() * cards_arr.length);
			_information.cards.push(cards_arr[random_num]);
			cards_arr.splice(random_num, 1);
		}
		/*
		визуализируем
		*/
		i = 0;
		while(i < totalCards_num)
		{
			/*
			
			*/
			if(cards_mc.getChildAt(i))
			{
				card_mc = cards_mc.getChildAt(i);
				card_mc.gotoAndStop(0);
				card_mc.name = "card_" + _information.cards[i] + "_" + i;
				card_mc.alpha = 1;
				card_mc.cursor = "pointer";
				card_mc.mouseChildren = false;
				card_mc.mouseEnabled = true;
				card_mc.addEventListener("click", _onClickMatchingCardMcFunc, false);
			}
			/*
			
			*/
			i++;
		}
		/*
		
		*/
		_currentMainScreen_mc.indicator_mc.gotoAndStop(0);
		_currentMainScreen_mc.indicator_mc.body_mc.gotoAndStop(Number(_currentMainScreen_mc.indicator_mc.body_mc.totalFrames - 1));
		/*
		
		*/
		_currentMainScreen_mc.popup_mc.visible = true;
		_currentMainScreen_mc.popup_mc.gotoAndStop(1);
		_currentMainScreen_mc.popup_mc.countdown_mc.gotoAndStop(0);
		var timelineControl_obj = new Edapskov_TimelineControl(_currentMainScreen_mc.popup_mc.countdown_mc);
		timelineControl_obj.gotoFunc("end", 1);
		timelineControl_obj.addEventListener("completed_timeline", _onFinishCountDownFunc, false);
	}
	/*
	
	*/
	function _onFinishCountDownFunc(event)
	{
		/*
		
		*/
		_currentMainScreen_mc.popup_mc.visible = false;
		/*
		
		*/
		_showCardsFunc();
	}
	/*
	
	*/
	function _showCardsFunc()
	{
		/*
		
		*/
		var cards_mc = _currentMainScreen_mc.cards_mc;
		cards_mc.memoryTimer_mc.gotoAndStop(0);
		cards_mc.memoryTimer_mc.visible = true;
		var timelineControl_obj = new Edapskov_TimelineControl(cards_mc.memoryTimer_mc);
		timelineControl_obj.gotoFunc("end", 1);
		timelineControl_obj.addEventListener("completed_timeline", _onFinishMemoryTimerFunc, false);
		/*
		
		*/
		cards_mc.gotoAndStop(Number(_information.locations[_information.currentNameLocation].currentRound - 1));
		cards_mc = cards_mc[_information.locations[_information.currentNameLocation].currentNameRound];
		/*
		
		*/
		var totalCards_num = cards_mc.numChildren;
		var i = 0;
		var card_mc;
		var currentCard_num;
		while(i < totalCards_num)
		{
			/*
			
			*/
			if(cards_mc.getChildAt(i))
			{
				card_mc = cards_mc.getChildAt(i);
				currentCard_num = Number(card_mc.name.split("_")[1]);
				card_mc.gotoAndStop(currentCard_num);
				card_mc = card_mc["body_" + currentCard_num + "_mc"];
				card_mc.gotoAndStop(0);
				card_mc.gotoAndStop("end");
				timelineControl_obj = new Edapskov_TimelineControl(card_mc);
				timelineControl_obj.gotoFunc("begin", 1);
			}
			/*
			
			*/
			i++;
		}
	}
	/*
	
	*/
	function _onFinishMemoryTimerFunc(event)
	{
		/*
		
		*/
		_currentMainScreen_mc.cards_mc.memoryTimer_mc.visible = false;
		/*
		
		*/
		_hideCardsFunc();
	}
	/*
	
	*/
	function _hideCardsFunc()
	{
		/*
		
		*/
		var cards_mc = _currentMainScreen_mc.cards_mc;
		cards_mc.gotoAndStop(Number(_information.locations[_information.currentNameLocation].currentRound - 1));
		cards_mc = cards_mc[_information.locations[_information.currentNameLocation].currentNameRound];
		/*
		
		*/
		var totalCards_num = cards_mc.numChildren;
		var i = 0;
		var card_mc;
		var currentCard_num;
		var timelineControl_obj;
		while(i < totalCards_num)
		{
			/*
			
			*/
			if(cards_mc.getChildAt(i))
			{
				card_mc = cards_mc.getChildAt(i);
				currentCard_num = Number(card_mc.name.split("_")[1]);
				card_mc.gotoAndStop(currentCard_num);
				card_mc = card_mc["body_" + currentCard_num + "_mc"];
				timelineControl_obj = new Edapskov_TimelineControl(card_mc);
				timelineControl_obj.gotoFunc("end", 1);
			}
			/*
			
			*/
			i++;
		}
		/*
		
		*/
		_activeCardsFunc();
	}
	/*
	
	*/
	function _activeCardsFunc()
	{
		/*
		
		*/
		_information.counter = _information.timer * createjs.Ticker.framerate;
		/*
		
		*/
		_currentMainScreen_mc.indicator_mc.addEventListener("tick", _onTickIndicatorFunc, false);
		/*
		
		*/
		_currentMainScreen_mc.cards_mc.mouseChildren = true;
		_currentMainScreen_mc.cards_mc.mouseEnabled = true;
		/*
		
		*/
		if(_currentMainScreen_mc.pause_btn)
		{
			_currentMainScreen_mc.pause_btn.alpha = 0.01;
			createjs.Tween.get(_currentMainScreen_mc.pause_btn).wait(0).to({alpha:1}, (_DELAY / 2) * 1000);
			_currentMainScreen_mc.pause_btn.visible = true;
		}
	}
	/*
	
	*/
	function _onClickMatchingCardMcFunc(event)
	{
		/*
		
		*/
		_information.totalActions++;
		/*
		
		*/
		var currentCard_mc = event.currentTarget;
		var currentCard_str = currentCard_mc.name;
		var currentCard_num = Number(currentCard_str.split("_")[1]);
		/*
		
		*/
		var point_obj = currentCard_mc.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("paper_sound", 0, 0, 0, 0.1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		var cards_mc = currentCard_mc.parent;
		var firstCard_mc;
		var secondCard_mc;
		var timelineControl_obj;
		/*
		
		*/
		if(_information.secondCard != null)
		{
			/*
			
			*/
			if(_information.firstCard != null)
			{
				firstCard_mc = cards_mc.getChildByName(_information.firstCard);
				firstCard_mc.gotoAndStop(0);
			}
			_information.firstCard = null;
			/*
			
			*/
			if(_information.secondCard != null)
			{
				secondCard_mc = cards_mc.getChildByName(_information.secondCard);
				secondCard_mc.gotoAndStop(0);
			}
			_information.secondCard = null;
		}
		/*
		
		*/
		if(_information.firstCard == currentCard_str)
		{
			if(_information.firstCard != null)
			{
				firstCard_mc = cards_mc.getChildByName(_information.firstCard);
				firstCard_mc.gotoAndStop(0);
			}
			_information.firstCard = null;
		}
		else if(_information.firstCard == null)
		{
			currentCard_mc.gotoAndStop(currentCard_num);
			currentCard_mc = currentCard_mc["body_" + currentCard_num + "_mc"];
			currentCard_mc.gotoAndStop("end");
			timelineControl_obj = new Edapskov_TimelineControl(currentCard_mc);
			timelineControl_obj.gotoFunc("begin", 1);
			_information.firstCard = currentCard_str;
		}
		else
		{
			/*
			
			*/
			currentCard_mc.gotoAndStop(currentCard_num);
			currentCard_mc = currentCard_mc["body_" + currentCard_num + "_mc"];
			currentCard_mc.gotoAndStop("end");
			timelineControl_obj = new Edapskov_TimelineControl(currentCard_mc);
			timelineControl_obj.gotoFunc("begin", 1);
			_information.secondCard = currentCard_str;
			/*
			
			*/
			if(Number(_information.firstCard.split("_")[1]) == Number(_information.secondCard.split("_")[1]))
			{
				/*
				
				*/
				_soundManager.addSoundFunc("magic_sound", 0, 0, 0, 0.6, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
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
				_removeMatchingCardFromArrayFunc(_information.firstCard.split("_")[1]);
				/*
				
				*/
				if(_information.firstCard != null)
				{
					firstCard_mc = cards_mc.getChildByName(_information.firstCard);
					firstCard_mc.cursor = "default";
					firstCard_mc.mouseChildren = false;
					firstCard_mc.mouseEnabled = false;
					firstCard_mc.removeEventListener("click", _onClickMatchingCardMcFunc, false);
					createjs.Tween.get(firstCard_mc).wait(0).to({alpha:0.01}, _DELAY * 1000, createjs.Ease.cubicInOut);
				}
				_information.firstCard = null;
				/*
				
				*/
				if(_information.secondCard != null)
				{
					secondCard_mc = cards_mc.getChildByName(_information.secondCard);
					secondCard_mc.cursor = "default";
					secondCard_mc.mouseChildren = false;
					secondCard_mc.mouseEnabled = false;
					secondCard_mc.removeEventListener("click", _onClickMatchingCardMcFunc, false);
					createjs.Tween.get(secondCard_mc).wait((_DELAY / 4) * 1000).to({alpha:0.01}, _DELAY * 1000, createjs.Ease.cubicInOut);
				}
				_information.secondCard = null;
				/*
				
				*/
				if(_information.cards.length <= 0)
				{
					_givePrizeFunc();
				}
			}
		}
	}
	/*
	
	*/
	function _removeMatchingCardFromArrayFunc(target_num)
	{
		/*
		
		*/
		if(target_num === undefined)
		{
			target_num = null;
		}
		else
		{
			target_num = Number(target_num);
		}
		/*
		
		*/
		var i = _information.cards.length;
		/*
		
		*/
		while(i >= 0)
		{
			/*
			
			*/
			if(Number(_information.cards[i]) === target_num)
			{
				_information.cards.splice(i, 1);
			}
			/*
			
			*/
			i--;
		}
	}
	/*
	
	*/
	function _givePrizeFunc()
	{
		/*
		
		*/
		_currentMainScreen_mc.indicator_mc.removeEventListener("tick", _onTickIndicatorFunc, false);
		/*
		
		*/
		_soundManager.addSoundFunc("bonus_sound", 0, 0, 0, 0.6, 0);
		/*
		
		*/
		_currentMainScreen_mc.cards_mc.mouseChildren = false;
		_currentMainScreen_mc.cards_mc.mouseEnabled = false;
		/*
		
		*/
		_currentMainScreen_mc.popup_mc.visible = true;
		_currentMainScreen_mc.popup_mc.gotoAndStop(2);
		_currentMainScreen_mc.popup_mc.prize_mc.gotoAndStop(0);
		_currentMainScreen_mc.popup_mc.prize_mc.body_mc.gotoAndStop(0);
		_currentMainScreen_mc.popup_mc.prize_mc.body_mc.gotoAndStop(_information.currentNameLocation + "_" + _information.locations[_information.currentNameLocation].currentNameRound);
		var timelineControl_obj = new Edapskov_TimelineControl(_currentMainScreen_mc.popup_mc.prize_mc);
		timelineControl_obj.gotoFunc("end", 1);
		timelineControl_obj.addEventListener("completed_timeline", _onFinishGivePrizeFunc, false);
		/*
		
		*/
		if(_currentMainScreen_mc.pause_btn)
		{
			_currentMainScreen_mc.pause_btn.visible = false;
		}
	}
	/*
	
	*/
	function _onFinishGivePrizeFunc(event)
	{
		/*
		
		*/
		_soundManager.addSoundFunc("magic_2_sound", 0, 0, 0, 0.1, 0);
		/*
		исключение
		*/
		var gravityBigExplosion_mc = new lib.GravityBigExplosionMC();
		_before.addChild(gravityBigExplosion_mc);
		gravityBigExplosion_mc.gotoAndStop(0);
		gravityBigExplosion_mc.x = _CWIDTH / 2;
		gravityBigExplosion_mc.y = _CHEIGHT / 4;
		/*
		
		*/
		_completedRoundFunc();
	}
	/*
	
	*/
	function _onClickSkipRoundMcFunc(event)
	{
		/*
		
		*/
		var skip_mc = event.currentTarget;
		skip_mc.mouseEnabled = false;
		skip_mc.mouseChildren = false;
		skip_mc.cursor = "default";
		skip_mc.visible = false;
		skip_mc.removeEventListener("click", _onClickSkipRoundMcFunc, false);
		/*
		
		*/
		var point_obj = skip_mc.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 0.1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		_givePrizeFunc();
	}
	/*
	
	*/
	function _completedRoundFunc()
	{
		/*
		
		*/
		_information.locations[_information.currentNameLocation].rounds[_information.locations[_information.currentNameLocation].currentNameRound].completed = true;
		/*
		
		*/
		var object_mc;
		/*
		
		*/
		_updateHeroesFunc(_currentMainScreen_mc.preview_mc);
		/*
		
		*/
		if(_currentMainScreen_mc.preview_mc[_information.currentNameLocation])
		{
			object_mc = _currentMainScreen_mc.preview_mc[_information.currentNameLocation];
			if(object_mc[_information.locations[_information.currentNameLocation].currentNameRound])
			{
				object_mc = object_mc[_information.locations[_information.currentNameLocation].currentNameRound];
				new Edapskov_Flickering(_before, object_mc, ["#ffffff", "#ffffcc", "#ffccff"], 20, 26);
			}
		}
		/*
		
		*/
		_information.locations[_information.currentNameLocation].currentRound++;
		if(_information.locations[_information.currentNameLocation].currentRound > _information.locations[_information.currentNameLocation].totalRounds)
		{
			_completedLocationFunc();
		}
		else
		{
			_currentMainScreen_mc.popup_mc.gotoAndStop(3);
			_currentMainScreen_mc.popup_mc.mouseEnabled = true;
			_currentMainScreen_mc.popup_mc.mouseChildren = false;
			_currentMainScreen_mc.popup_mc.cursor = "pointer";
			_currentMainScreen_mc.popup_mc.addEventListener("click", _onClickStartRoundFunc, false);
			
		}
		/*
		СОХРАНЕНИЕ ИГРЫ
		*/
		_saveGameFunc();
	}
	/*
	
	*/
	function _onClickStartRoundFunc(event)
	{
		/*
		
		*/
		var popup_mc = event.currentTarget;
		popup_mc.mouseEnabled = false;
		popup_mc.mouseChildren = false;
		popup_mc.cursor = "default";
		popup_mc.removeEventListener("click", _onClickStartRoundFunc, false);
		/*
		
		*/
		var point_obj = popup_mc.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 0.1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		var gravityExplosion_mc = new lib.GravityExplosionMC();
		_before.addChild(gravityExplosion_mc);
		gravityExplosion_mc.gotoAndStop(0);
		point_obj = popup_mc.localToLocal(event.localX, event.localY, _before);
		gravityExplosion_mc.x = point_obj.x;
		gravityExplosion_mc.y = point_obj.y;
		/*
		
		*/
		_startRoundFunc();
	}
	/*
	
	*/
	function _completedLocationFunc()
	{
		/*
		
		*/
		_information.locations[_information.currentNameLocation].completed = true;
		_information.targetLocation++;
		/*
		вариант завершения локации без кнопки
		*/
		/*
		if(_skippedLocationsFunc() >= 1)
		{
			_animationTransitionBetweenScenesFunc(_selectFunc, 3, 1, null, true);
		}
		else
		{
			_animationTransitionBetweenScenesFunc(_winFunc, 3, 1, null, true);
		}
		*/
		/*
		вариант завершения локации с кнопкой
		*/
		_currentMainScreen_mc.popup_mc.gotoAndStop(4);
		_currentMainScreen_mc.popup_mc.mouseEnabled = true;
		_currentMainScreen_mc.popup_mc.mouseChildren = false;
		_currentMainScreen_mc.popup_mc.cursor = "pointer";
		_currentMainScreen_mc.popup_mc.addEventListener("click", _onClickCompletedLocationFunc, false);
	}
	/*
	
	*/
	function _onClickCompletedLocationFunc(event)
	{
		/*
		
		*/
		var popup_mc = event.currentTarget;
		popup_mc.mouseEnabled = false;
		popup_mc.mouseChildren = false;
		popup_mc.cursor = "default";
		popup_mc.removeEventListener("click", _onClickCompletedLocationFunc, false);
		/*
		
		*/
		var point_obj = popup_mc.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 0.1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		var gravityExplosion_mc = new lib.GravityExplosionMC();
		_before.addChild(gravityExplosion_mc);
		gravityExplosion_mc.gotoAndStop(0);
		point_obj = popup_mc.localToLocal(event.localX, event.localY, _before);
		gravityExplosion_mc.x = point_obj.x;
		gravityExplosion_mc.y = point_obj.y;
		/*
		исключения
		*/
		_addAdsFunc();
		/*
		
		*/
		if(_skippedLocationsFunc() >= 1)
		{
			_animationTransitionBetweenScenesFunc(_selectFunc, 3, 1, null, true);
		}
		else
		{
			_animationTransitionBetweenScenesFunc(_winFunc, 3, 1, null, true);
		}
	}
	/*
	
	*/
	function _onTickIndicatorFunc()
	{
		/*
		
		*/
		_information.counter--;
		/*
		
		*/
		if(_information.counter > 0)
		{
			_currentMainScreen_mc.indicator_mc.body_mc.gotoAndStop(Math.floor((_information.counter * _currentMainScreen_mc.indicator_mc.body_mc.totalFrames) / (_information.timer * createjs.Ticker.framerate)));
		}
		else
		{
			/*
			
			*/
			_currentMainScreen_mc.indicator_mc.removeEventListener("tick", _onTickIndicatorFunc, false);
			/*
			
			*/
			_currentMainScreen_mc.indicator_mc.body_mc.gotoAndStop(0);
			/*
			
			*/
			_currentMainScreen_mc.cards_mc.mouseChildren = false;
			_currentMainScreen_mc.cards_mc.mouseEnabled = false;
			/*
			
			*/
			_animationTransitionBetweenScenesFunc(_lossFunc, 2, 1, null, true);
		}
	}
	/*
	
	*/
	function _updateHeroesFunc(container_mc)
	{
		/*
		
		*/
		var hero_mc;
		var option_mc;
		var optionSecond_str;
		var optionSecond_mc;
		var frame_num = Number(container_mc.currentFrame + 1);
		var hero_str;
		/*
		
		*/
		for(var propLocations in _information.locations)
		{
			if(_information.locations.hasOwnProperty(propLocations))
			{
				/*
				
				*/
				hero_str = String(propLocations + "_" + frame_num);
				/*
				
				*/
				if(container_mc[propLocations] || container_mc[hero_str])
				{
					/*
					
					*/
					if(container_mc[hero_str])
					{
						hero_mc = container_mc[hero_str];
					}
					else
					{
						hero_mc = container_mc[propLocations];
					}
					/*
					
					*/
					hero_mc.gotoAndStop(0);
					/*
					
					*/
					for(var propRounds in _information.locations[propLocations].rounds)
					{
						if(_information.locations[propLocations].rounds.hasOwnProperty(propRounds))
						{
							if(hero_mc[propRounds])
							{
								/*
								
								*/
								option_mc = hero_mc[propRounds];
								option_mc.gotoAndStop(0);
								/*
								
								*/
								optionSecond_str = String(propRounds + "_second");
								if(hero_mc[optionSecond_str])
								{
									optionSecond_mc = hero_mc[optionSecond_str];
									optionSecond_mc.gotoAndStop(0);
								}
								else
								{
									optionSecond_mc = null;
								}
								/*
								
								*/
								if(_information.locations[propLocations].rounds[propRounds].completed)
								{
									/*
									
									*/
									option_mc.gotoAndStop(0);
									/*
									
									*/
									if(optionSecond_mc != null)
									{
										optionSecond_mc.gotoAndStop(0);
									}
								}
								else
								{
									/*
									
									*/
									option_mc.gotoAndStop(1);
									/*
									
									*/
									if(optionSecond_mc != null)
									{
										optionSecond_mc.gotoAndStop(1);
									}
								}
							}
						}
					}
				}
			}
		}
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
						//_information.firstRun = Boolean(loadInformation_obj.firstRun);
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
									/*
									
									*/
									_information.locations[propLocations].completed = Boolean(loadInformation_obj.locations[propLocations].completed);
									_information.locations[propLocations].currentRound = Number(loadInformation_obj.locations[propLocations].currentRound);
									/*
									
									*/
									if(loadInformation_obj.locations[propLocations].hasOwnProperty("rounds"))
									{
										for(var propRounds in loadInformation_obj.locations[propLocations].rounds)
										{
											if(loadInformation_obj.locations[propLocations].rounds.hasOwnProperty(propRounds))
											{
												if(_information.locations[propLocations].rounds.hasOwnProperty(propRounds))
												{
													_information.locations[propLocations].rounds[propRounds].completed = Boolean(loadInformation_obj.locations[propLocations].rounds[propRounds].completed);
												}
											}
										}
									}
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
				/*
				
				*/
				loadInformation_obj.locations[propLocations] = {};
				loadInformation_obj.locations[propLocations].completed = Boolean(_information.locations[propLocations].completed);
				loadInformation_obj.locations[propLocations].currentRound = Number(_information.locations[propLocations].currentRound);
				loadInformation_obj.locations[propLocations].rounds = {};
				/*
				
				*/
				for(var propRounds in _information.locations[propLocations].rounds)
				{
					if(_information.locations[propLocations].rounds.hasOwnProperty(propRounds))
					{
						loadInformation_obj.locations[propLocations].rounds[propRounds] = {};
						loadInformation_obj.locations[propLocations].rounds[propRounds].completed = Boolean(_information.locations[propLocations].rounds[propRounds].completed);
					}
				}
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
		window.open("https://dl-girls.com/content/folder_1758907678" + "?utm_source=" + window.location.href + "&utm_medium=game_referral|game&utm_content=simple&utm_campaign=" + _TITLE, "_self");
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
	Loss Screen
	==============================================================================================================
	*/
	function _lossFunc()
	{
		/*
		
		*/
		_soundManager.addSoundFunc("loss_sound", 0, 0, 0, 0.8, 0);
		/*
		
		*/
		_clearContainerFunc(_main);
		_clearContainerFunc(_before);
		/*
		
		*/
		_currentMainScreen_mc = new lib.LossScreen();
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
		if(_currentMainScreen_mc.freeGames_mc)
		{
			_currentMainScreen_mc.freeGames_mc.addEventListener("click", _onClickFreeGamesMcFunc, false);
		}
		/*
		
		*/
		_currentMainScreen_mc.playAgain_btn.addEventListener("click", _onClickReplayBtnFunc, false);
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
	function _onClickReplayBtnFunc(event)
	{
		/*
		
		*/
		var point_obj = event.currentTarget.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		event.currentTarget.removeEventListener("click", _onClickReplayBtnFunc, false);
		/*
		
		*/
		_soundManager.removeAllSoundExceptNameFunc(["background_sound", "click_sound"]);
		/*
		
		*/
		_animationTransitionBetweenScenesFunc(_locationFunc, 0, 1, null, true);
	}
	/*
	==============================================================================================================
	Win Screen
	==============================================================================================================
	*/
	function _winFunc()
	{
		/*
		
		*/
		_soundManager.addSoundFunc("win_sound", 0, 0, 0, 0.6, 0);
		/*
		
		*/
		_clearContainerFunc(_main);
		_clearContainerFunc(_before);
		/*
		
		*/
		_currentMainScreen_mc = new lib.WinScreen();
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
		if(_currentMainScreen_mc.photo_btn)
		{
			_currentMainScreen_mc.photo_btn.addEventListener("click", _onClickPhotoBtnFunc, false);
		}
		/*
		
		*/
		_currentMainScreen_mc.playAgain_btn.addEventListener("click", _onClickPlayBtnFunc, false);
		/*
		
		*/
		if(_currentMainScreen_mc.photoContainer_mc)
		{
			/*
			
			*/
			_currentMainScreen_mc.photoContainer_mc.gotoAndStop(0);
			/*
			
			*/
			if(_currentMainScreen_mc.photoContainer_mc.logo_btn)
			{
				_currentMainScreen_mc.photoContainer_mc.logo_btn.visible = false;
			}
			/*
			
			*/
			if(_currentMainScreen_mc.photoContainer_mc.heroes_mc)
			{
				_currentMainScreen_mc.photoContainer_mc.heroes_mc.gotoAndStop(0);
				_updateHeroesFunc(_currentMainScreen_mc.photoContainer_mc.heroes_mc);
			}
		}
		/*
		
		*/
		if(_currentMainScreen_mc.prev_mc)
		{
			_currentMainScreen_mc.prev_mc.mouseEnabled = true;
			_currentMainScreen_mc.prev_mc.mouseChildren = false;
			_currentMainScreen_mc.prev_mc.cursor = "pointer";
			_currentMainScreen_mc.prev_mc.addEventListener("mouseover", _onMouseOverNavigationMcBackgroundsFunc, false);
			_currentMainScreen_mc.prev_mc.addEventListener("mouseout", _onMouseOutNavigationMcBackgroundsFunc, false);
			_currentMainScreen_mc.prev_mc.addEventListener("click", _onClickPrevNavigationMcBackgroundsFunc, false);
		}
		if(_currentMainScreen_mc.next_mc)
		{
			_currentMainScreen_mc.next_mc.mouseEnabled = true;
			_currentMainScreen_mc.next_mc.mouseChildren = false;
			_currentMainScreen_mc.next_mc.cursor = "pointer";
			_currentMainScreen_mc.next_mc.addEventListener("mouseover", _onMouseOverNavigationMcBackgroundsFunc, false);
			_currentMainScreen_mc.next_mc.addEventListener("mouseout", _onMouseOutNavigationMcBackgroundsFunc, false);
			_currentMainScreen_mc.next_mc.addEventListener("click", _onClickNextNavigationMcBackgroundsFunc, false);
		}
		/*
		редирект
		*/
		/*
		if(_information.timeout_id != null)
		{
			clearTimeout(_information.timeout_id);
		}
		_information.timeout_id = setTimeout(_redirectFunc, 9000);
		*/
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
	function _onMouseOverNavigationMcBackgroundsFunc(event)
	{
		var currentTarget_mc = event.currentTarget;
		createjs.Tween.get(currentTarget_mc).wait(0).to({scaleX:1.1, scaleY:1.1}, (_DELAY / 5) * 1000);
	}
	function _onMouseOutNavigationMcBackgroundsFunc(event)
	{
		var currentTarget_mc = event.currentTarget;
		createjs.Tween.get(currentTarget_mc).wait(0).to({scaleX:1, scaleY:1}, (_DELAY / 3) * 1000);
	}
	function _onClickPrevNavigationMcBackgroundsFunc(event)
	{
		/*
		
		*/
		var point_obj = event.currentTarget.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		var totalFrames_num = _currentMainScreen_mc.photoContainer_mc.heroes_mc.totalFrames;
		var currentFrame_num = _currentMainScreen_mc.photoContainer_mc.heroes_mc.currentFrame + 1;
		currentFrame_num--;
		if(currentFrame_num <= 0)
		{
			currentFrame_num = totalFrames_num;
		}
		/*
		
		*/
		_currentMainScreen_mc.photoContainer_mc.heroes_mc.gotoAndStop(Number(currentFrame_num - 1));
		/*
		
		*/
		if(_currentMainScreen_mc.photoContainer_mc)
		{
			if(_currentMainScreen_mc.photoContainer_mc.heroes_mc)
			{
				_updateHeroesFunc(_currentMainScreen_mc.photoContainer_mc.heroes_mc);
			}
		}
	}
	function _onClickNextNavigationMcBackgroundsFunc(event)
	{
		/*
		
		*/
		var point_obj = event.currentTarget.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		var totalFrames_num = _currentMainScreen_mc.photoContainer_mc.heroes_mc.totalFrames;
		var currentFrame_num = _currentMainScreen_mc.photoContainer_mc.heroes_mc.currentFrame + 1;
		currentFrame_num++;
		if(currentFrame_num > totalFrames_num)
		{
			currentFrame_num = 1;
		}
		/*
		
		*/
		_currentMainScreen_mc.photoContainer_mc.heroes_mc.gotoAndStop(Number(currentFrame_num - 1));
		/*
		
		*/
		if(_currentMainScreen_mc.photoContainer_mc)
		{
			if(_currentMainScreen_mc.photoContainer_mc.heroes_mc)
			{
				_updateHeroesFunc(_currentMainScreen_mc.photoContainer_mc.heroes_mc);
			}
		}
	}
	/*
	
	*/
	function _onClickPhotoBtnFunc(event)
	{
		/*
		
		*/
		_soundManager.addSoundFunc("photo_sound", 0, 0, 0, 1, 0);
		/*
		
		*/
		_updateVisibleDisplayObjectFunc(_currentMainScreen_mc, false);
		_currentMainScreen_mc.photoContainer_mc.visible = true;
		_currentMainScreen_mc.photoContainer_mc.logo_btn.visible = true;
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
			/*
			
			*/
			trace(event, 1);
			/*
			
			*/
			_createBackupPhotoFunc();
		}
		finally
		{
			/*
			
			*/
			_currentMainScreen_mc.photoContainer_mc.logo_btn.visible = false;
			/*
			
			*/
			_updateVisibleDisplayObjectFunc(_currentMainScreen_mc);
		}
	}
	function _createBackupPhotoFunc()
	{
		/*
		
		*/
		var photoContainer_mc = new lib.photoContainer_mc();
		photoContainer_mc.y = _CHEIGHT;
		photoContainer_mc.mouseEnabled = false;
		photoContainer_mc.mouseChildren = false;
		photoContainer_mc.gotoAndStop(0);
		/*
		
		*/
		if(photoContainer_mc.heroes_mc)
		{
			photoContainer_mc.heroes_mc.gotoAndStop(0);
			photoContainer_mc.heroes_mc.gotoAndStop(_currentMainScreen_mc.photoContainer_mc.heroes_mc.currentFrame);
			_updateHeroesFunc(photoContainer_mc.heroes_mc);
		}
		/*
		
		*/
		photoContainer_mc.cache(0, 0, _CWIDTH, _CHEIGHT, 0.8);
		new Edapskov_ScreenshotWindow(_TITLE, photoContainer_mc.getCacheDataURL());
		delete photoContainer_mc;
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
			visible_bool = Number(visible_bool);
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
		_givePrizeFunc();
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