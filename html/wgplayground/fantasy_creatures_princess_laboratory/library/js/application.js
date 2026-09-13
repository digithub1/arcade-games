/*
* @author edapskov
* @copyright 2021 edapskov v 3.0
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
	var _TITLE = "Fantasy Creatures Princess Laboratory";
	var _LINKTOGAME = "https://dl-girls.com";
	var _DELAY = 1;
	/*
	публичные переменные
	*/
	this.copyright = "© DL-Studio, v 3.0";
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
		counterAds:null,
		dragDropContainer:null,
		nameCurrentIngredient:null,
		sizeInventory:3,
		inventory:null,
		ingredients:
		{
			ingredient_1:{product:null},
			ingredient_2:{product:null},
			ingredient_3:{product:null},
			ingredient_4:{product:null},
			ingredient_5:{product:null},
			ingredient_6:{product:null},
			ingredient_7:{product:null},
			ingredient_8:{product:null},
			ingredient_9:{product:"product_13"},
			ingredient_10:{product:"product_14"}
		},
		lastFoundProduct:null,
		products:
		{
			product_1:{ingredients:[1, 3, 4], completed:null},
			product_2:{ingredients:[3, 7, 10], completed:null},
			product_3:{ingredients:[6, 7, 8], completed:null},
			product_4:{ingredients:[6, 8, 10], completed:null},
			product_5:{ingredients:[1, 2, 9], completed:null},
			product_6:{ingredients:[2, 3, 10], completed:null},
			product_7:{ingredients:[2, 4, 9], completed:null},
			product_8:{ingredients:[2, 3, 4], completed:null},
			product_9:{ingredients:[5, 8, 10], completed:null},
			product_10:{ingredients:[4, 7, 8], completed:null},
			product_11:{ingredients:[2, 9, 10], completed:null},
			product_12:{ingredients:[1, 3, 5], completed:null},
			product_13:{ingredients:[1, 2, 7], completed:null},
			product_14:{ingredients:[4, 5, 8], completed:null}
		},
		fails:
		{
			totalFails:["fail_1", "fail_2"],
			currentFail:null
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
		logo_img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozMkNGOTMxNEE2MzJGMDExQUVGRkIxNjJENEQxMDk1NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1QkMzQTdBMDVBQzYxMUYxQkYwMTk3REM4NEIxNEEwQiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1QkMzQTc5RjVBQzYxMUYxQkYwMTk3REM4NEIxNEEwQiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowNUUwMDkwMkM2NUFGMTExOEUwM0UyNDVDQTg2RDgxNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozMkNGOTMxNEE2MzJGMDExQUVGRkIxNjJENEQxMDk1NiIvPiA8L3JkZjpEZXNjcmlwdGlv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";
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
		loadQueue.loadFile({id:"photo_sound", src:"library/sounds/photo_sound.ogg"});
		loadQueue.loadFile({id:"tink_sound", src:"library/sounds/tink_sound.ogg"});
		loadQueue.loadFile({id:"message_sound", src:"library/sounds/message_sound.ogg"});
		loadQueue.loadFile({id:"add_sound", src:"library/sounds/add_sound.ogg"});
		loadQueue.loadFile({id:"fail_sound", src:"library/sounds/fail_sound.ogg"});
		loadQueue.loadFile({id:"successfully_sound", src:"library/sounds/successfully_sound.ogg"});
		loadQueue.loadFile({id:"replay_sound", src:"library/sounds/replay_sound.ogg"});
		loadQueue.loadFile({id:"achievement_sound", src:"library/sounds/achievement_sound.ogg"});
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
		//_addAdsFunc();
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
		_information.counterAds = 0;
		_information.inventory = new Array();
		_information.lastFoundProduct = null;
		/*
		
		*/
		for(var propProducts in _information.products)
		{
			if(_information.products.hasOwnProperty(propProducts))
			{
				_information.products[propProducts].ingredients.length = _information.sizeInventory;
				_sortArrayNumbersFunc(_information.products[propProducts].ingredients);
				_information.products[propProducts].completed = false;
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
		возможные варианты...
		*/
		//_animationTransitionBetweenScenesFunc(_alchemyFunc, 0, 1, null, true);
		if(_information.firstRun)
		{
			//_information.firstRun = false;
			_animationTransitionBetweenScenesFunc(_cartoonFunc, 0, 1, null, true);
		}
		else
		{
			_animationTransitionBetweenScenesFunc(_alchemyFunc, 0, 1, null, true);
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
		/*
		
		*/
		_addAdsFunc();
		/*
		
		*/
		_animationTransitionBetweenScenesFunc(_alchemyFunc, 0, 1, null, true);
	}
	/*
	==============================================================================================================
	Alchemy Screen
	==============================================================================================================
	*/
	function _alchemyFunc()
	{
		/*
		
		*/
		_clearContainerFunc(_main);
		_clearContainerFunc(_before);
		/*
		
		*/
		var currentScreen_mc = new lib.AlchemyScreen();
		_main.addChild(currentScreen_mc);
		currentScreen_mc.gotoAndStop(0);
		currentScreen_mc.body_mc.gotoAndStop(0);
		/*
		
		*/
		currentScreen_mc.logo_btn.addEventListener("click", _onClickLogoBtnFunc, false);
		/*
		
		*/
		if(_information.firstRun)
		{
			_information.firstRun = false;
			if(currentScreen_mc.body_mc.help_mc)
			{
				currentScreen_mc.body_mc.help_mc.addEventListener("click", _onClickHelpMCFunc, false);
			}
		}
		else
		{
			if(currentScreen_mc.body_mc.help_mc)
			{
				currentScreen_mc.body_mc.removeChild(currentScreen_mc.body_mc.help_mc);
			}
		}
		/*
		
		*/
		if(currentScreen_mc.moreGames_btn)
		{
			currentScreen_mc.moreGames_btn.alpha = 0.01;
			createjs.Tween.get(currentScreen_mc.moreGames_btn).wait(_DELAY * 1000).to({alpha:1}, _DELAY * 1000);
			currentScreen_mc.moreGames_btn.addEventListener("click", _onClickMoreGamesBtnFunc, false);
		}
		/*
		
		*/
		_beginAlchemyFunc();
		/*
		
		*/
		_soundManager.updateSoundMcFunc(currentScreen_mc);
		/*
		
		*/
		_fullScreenCanvasManager.updateFullScreenMcFunc(currentScreen_mc);
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
		currentTarget_mc.removeEventListener("click", _onClickHelpMCFunc, false);
		currentTarget_mc.parent.removeChild(currentTarget_mc);
	}
	/*
	
	*/
	function _beginAlchemyFunc()
	{
		/*
		
		*/
		_information.nameCurrentIngredient = null;
		_information.inventory = new Array();
		_information.inventory.length = 0;
		_information.lastFoundProduct = null;
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		/*
		
		*/
		currentScreen_mc.body_mc.mouseChildren = true;
		currentScreen_mc.body_mc.mouseEnabled = true;
		/*
		
		*/
		currentScreen_mc.next_mc.visible = false;
		/*
		
		*/
		if(currentScreen_mc.body_mc.dragDropContainer_mc)
		{
			_information.dragDropContainer = currentScreen_mc.body_mc.dragDropContainer_mc;
			_information.dragDropContainer.gotoAndStop(0);
			_information.dragDropContainer.x = 0;
			_information.dragDropContainer.y = 0;
			_clearContainerFunc(_information.dragDropContainer);
		}
		else
		{
			trace("Не обнаружено dragDropContainer_mc !");
		}
		/*
		
		*/
		if(currentScreen_mc.body_mc.inventory_mc)
		{
			currentScreen_mc.body_mc.inventory_mc.gotoAndStop(0);
			currentScreen_mc.body_mc.inventory_mc.mouseChildren = false;
			currentScreen_mc.body_mc.inventory_mc.mouseEnabled = false;
			_updateInventoryAlchemyFunc();
		}
		else
		{
			trace("Не обнаружено inventory_mc !");
		}
		/*
		
		*/
		if(currentScreen_mc.body_mc.mixer_mc)
		{
			currentScreen_mc.body_mc.mixer_mc.gotoAndStop(0);
			currentScreen_mc.body_mc.mixer_mc.mouseChildren = false;
			currentScreen_mc.body_mc.mixer_mc.mouseEnabled = false;
		}
		else
		{
			trace("Не обнаружено mixer_mc !");
		}
		/*
		
		*/
		if(currentScreen_mc.body_mc.magic_mc)
		{
			currentScreen_mc.body_mc.magic_mc.gotoAndStop(0);
			currentScreen_mc.body_mc.magic_mc.gotoAndStop("default");
			currentScreen_mc.body_mc.magic_mc.mouseChildren = false;
			currentScreen_mc.body_mc.magic_mc.mouseEnabled = false;
		}
		else
		{
			trace("Не обнаружено magic_mc !");
		}
		/*
		
		*/
		_updateIngredientsAlchemyFunc();
	}
	/*
	
	*/
	function _updateIngredientsAlchemyFunc()
	{
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		/*
		
		*/
		var ingredient_str;
		var ingredient_mc;
		for(var propIngredients in _information.ingredients)
		{
			if(_information.ingredients.hasOwnProperty(propIngredients))
			{
				/*
				
				*/
				ingredient_str = String(propIngredients + "_mc");
				/*
				
				*/
				if(currentScreen_mc.body_mc[ingredient_str])
				{
					/*
					
					*/
					ingredient_mc = currentScreen_mc.body_mc[ingredient_str];
					ingredient_mc.gotoAndStop(0);
					ingredient_mc.name = propIngredients;
					/*
					
					*/
					if(_isAvailableIngredientFunc(propIngredients))
					{
						if(_isFreeIngredientFunc(propIngredients))
						{
							ingredient_mc.visible = true;
							ingredient_mc.mouseEnabled = true;
							ingredient_mc.mouseChildren = false;
							ingredient_mc.cursor = "pointer";
							ingredient_mc.addEventListener("mouseover", _onMouseOverIngredientMcAlchemyFunc, false);
							ingredient_mc.addEventListener("mouseout", _onMouseOutIngredientMcAlchemyFunc, false);
							ingredient_mc.addEventListener("mousedown", _onMouseDownIngredientMcAlchemyFunc, false);
						}
						else
						{
							ingredient_mc.visible = false;
							ingredient_mc.mouseEnabled = false;
							ingredient_mc.mouseChildren = false;
							ingredient_mc.cursor = "default";
							ingredient_mc.removeEventListener("mouseover", _onMouseOverIngredientMcAlchemyFunc, false);
							ingredient_mc.removeEventListener("mouseout", _onMouseOutIngredientMcAlchemyFunc, false);
							ingredient_mc.removeEventListener("mousedown", _onMouseDownIngredientMcAlchemyFunc, false);
						}
					}
					else
					{
						ingredient_mc.visible = false;
						ingredient_mc.mouseEnabled = false;
						ingredient_mc.mouseChildren = false;
						ingredient_mc.cursor = "default";
						ingredient_mc.removeEventListener("mouseover", _onMouseOverIngredientMcAlchemyFunc, false);
						ingredient_mc.removeEventListener("mouseout", _onMouseOutIngredientMcAlchemyFunc, false);
						ingredient_mc.removeEventListener("mousedown", _onMouseDownIngredientMcAlchemyFunc, false);
					}
					/*
					
					*/
					if(ingredient_mc.substrate_mc)
					{
						ingredient_mc.substrate_mc.gotoAndStop(0);
					}
				}
				else
				{
					trace("Не обнаружено " + ingredient_str + " !");
				}
			}
		}
	}
	function _isAvailableIngredientFunc(ingredient_str)
	{
		/*
		
		*/
		var result_bool = true;
		var ingredient_num = Number(ingredient_str.split("_")[1]);
		var counterTotal_num = 0;
		var counterCompleted_num = 0;
		var i;
		var l;
		/*
		проверяем, создан ли ингридиент к данному моменту
		*/
		if(_information.ingredients[ingredient_str].hasOwnProperty("product"))
		{
			if(_information.ingredients[ingredient_str].product !== null)
			{
				if(_information.products.hasOwnProperty(_information.ingredients[ingredient_str].product))
				{
					if(!_information.products[_information.ingredients[ingredient_str].product].completed)
					{
						result_bool = false;
					}
				}
			}
		}
		/*
		проверяем, не использован ли ингридиент на создание продукта
		*/
		for(var propProducts in _information.products)
		{
			if(_information.products.hasOwnProperty(propProducts))
			{
				/*
				
				*/
				i = 0;
				l = _information.products[propProducts].ingredients.length;
				/*
				
				*/
				while (i < l)
				{
					/*
					
					*/
					if (Number(_information.products[propProducts].ingredients[i]) === ingredient_num)
					{
						/*
						
						*/
						counterTotal_num++;
						/*
						
						*/
						if(_information.products[propProducts].completed)
						{
							counterCompleted_num++;
						}
					}
					/*
					
					*/
					i++;
				}
			}
		}
		/*
		
		*/
		if((counterTotal_num === 1) && (counterCompleted_num === 1))
		{
			result_bool = false;
		}
		/*
		
		*/
		return result_bool;
	}
	function _isFreeIngredientFunc(ingredient_str)
	{
		/*
		
		*/
		var result_bool = true;
		var ingredient_num = Number(ingredient_str.split("_")[1]);
		/*
		
		*/
		var i = 0;
		var l = _information.inventory.length;
		while (i < l)
		{
			/*
			
			*/
			if (Number(_information.inventory[i]) === ingredient_num)
			{
				result_bool = false;
				break;
			}
			/*
			
			*/
			i++;
		}
		/*
		
		*/
		if(ingredient_str === _information.nameCurrentIngredient)
		{
			result_bool = false;
		}
		/*
		
		*/
		return result_bool;
	}
	function _onMouseOverIngredientMcAlchemyFunc(event)
	{
		/*
		
		*/
		var ingredient_mc = event.currentTarget;
		/*
		
		*/
		if(ingredient_mc.substrate_mc)
		{
			ingredient_mc.substrate_mc.gotoAndStop(1);
		}
	}
	function _onMouseOutIngredientMcAlchemyFunc(event)
	{
		/*
		
		*/
		var ingredient_mc = event.currentTarget;
		/*
		
		*/
		if(ingredient_mc.substrate_mc)
		{
			ingredient_mc.substrate_mc.gotoAndStop(0);
		}
	}
	function _onMouseDownIngredientMcAlchemyFunc(event)
	{
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		var ingredient_mc = event.currentTarget;
		_information.nameCurrentIngredient = String(ingredient_mc.name);
		var point_obj = ingredient_mc.localToLocal(event.localX, event.localY, _information.dragDropContainer);
		/*
		
		*/
		_updateIngredientsAlchemyFunc();
		/*
		
		*/
		_clearContainerFunc(_information.dragDropContainer);
		/*
		
		*/
		ingredient_mc = new lib[_information.nameCurrentIngredient + "_mc"]();
		_information.dragDropContainer.addChild(ingredient_mc);
		ingredient_mc.gotoAndStop(0);
		ingredient_mc.name = _information.nameCurrentIngredient;
		ingredient_mc.mouseEnabled = false;
		ingredient_mc.mouseChildren = false;
		ingredient_mc.x = point_obj.x;
		ingredient_mc.y = point_obj.y;
		/*
		
		*/
		if(ingredient_mc.substrate_mc)
		{
			ingredient_mc.substrate_mc.gotoAndStop(1);
		}
		else
		{
			ingredient_mc.shadow = new createjs.Shadow("rgba(0, 0, 0, 0.3)", 5, 5, 5);
			var ingredient_bound = ingredient_mc.getBounds();
			if(ingredient_mc.bitmapCache)
			{
				ingredient_mc.updateCache();
			}
			else
			{
				ingredient_mc.cache(ingredient_bound.x, ingredient_bound.y, ingredient_bound.width, ingredient_bound.height, 2);
			}
		}
		/*
		
		*/
		_stage.addEventListener("stagemouseup", _onStageMouseUpIngredientMcAlchemyFunc, false);
		_stage.addEventListener("stagemousemove", _onStageMouseMoveIngredientMcAlchemyFunc, false);
	}
	function _onStageMouseUpIngredientMcAlchemyFunc(event)
	{
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		var point_obj;
		/*
		
		*/
		_stage.removeEventListener("stagemouseup", _onStageMouseUpIngredientMcAlchemyFunc, false);
		_stage.removeEventListener("stagemousemove", _onStageMouseMoveIngredientMcAlchemyFunc, false);
		/*
		
		*/
		var currentIngredient_num = Number(_information.nameCurrentIngredient.split("_")[1]);
		_information.nameCurrentIngredient = null;
		/*
		
		*/
		_clearContainerFunc(_information.dragDropContainer);
		/*
		
		*/
		point_obj = event.currentTarget.localToLocal(event.localX, event.localY, currentScreen_mc.body_mc.mixer_mc);
		if(currentScreen_mc.body_mc.mixer_mc.hitTest(point_obj.x, point_obj.y))
		{
			/*
			
			*/
			_soundManager.addSoundFunc("add_sound", 0, 0, 0, 0.05, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
			/*
			
			*/
			_information.inventory.push(currentIngredient_num);
			/*
			
			*/
			_updateInventoryAlchemyFunc();
			/*
			
			*/
			if(_information.inventory.length === _information.sizeInventory)
			{
				_beginMagicAnimationAlchemyFunc();
			}
		}
		else
		{
			_updateIngredientsAlchemyFunc();
		}
	}
	function _onStageMouseMoveIngredientMcAlchemyFunc(event)
	{
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		var ingredient_mc;
		var point_obj;
		/*
		
		*/
		if(_information.nameCurrentIngredient != null)
		{
			if(_information.dragDropContainer.getChildByName(_information.nameCurrentIngredient))
			{
				/*
				
				*/
				ingredient_mc = _information.dragDropContainer.getChildByName(_information.nameCurrentIngredient);
				/*
				
				*/
				point_obj = event.currentTarget.localToLocal(event.localX, event.localY, _information.dragDropContainer);
				ingredient_mc.x = point_obj.x;
				ingredient_mc.y = point_obj.y;
			}
		}
	}
	/*
	
	*/
	function _beginMagicAnimationAlchemyFunc()
	{
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		var point_obj;
		var isFoundProductFunc_num;
		var animation_mc;
		var timelineControl;
		/*
		
		*/
		currentScreen_mc.body_mc.mouseChildren = false;
		currentScreen_mc.body_mc.mouseEnabled = false;
		/*
		
		*/
		if(currentScreen_mc.body_mc.mixer_mc)
		{
			point_obj = currentScreen_mc.body_mc.mixer_mc.localToLocal(0, 0, _before);
			var simpleExplosionMC_mc = new lib.SimpleExplosionMC();
			_before.addChild(simpleExplosionMC_mc);
			simpleExplosionMC_mc.gotoAndStop(0);
			simpleExplosionMC_mc.x = point_obj.x;
			simpleExplosionMC_mc.y = point_obj.y;
		}
		/*
		
		*/
		isFoundProductFunc_num = _isFoundProductFunc();
		/*
		
		*/
		if(isFoundProductFunc_num === 1)
		{
			/*
			
			*/
			_soundManager.addSoundFunc("replay_sound", 0, 0, 0, 0.1, 0);
			/*
			
			*/
			currentScreen_mc.body_mc.magic_mc.gotoAndStop(_information.lastFoundProduct);
			/*
			
			*/
			if(currentScreen_mc.body_mc.magic_mc["body_" + Number(currentScreen_mc.body_mc.magic_mc.currentFrame + 1) + "_mc"])
			{
				animation_mc = currentScreen_mc.body_mc.magic_mc["body_" + Number(currentScreen_mc.body_mc.magic_mc.currentFrame + 1) + "_mc"];
				timelineControl = new Edapskov_TimelineControl(animation_mc);
				timelineControl.gotoEndFunc();
				timelineControl.addEventListener("completed_timeline", _onFinishOldMagicAnimationAlchemyFunc, false);
			}
		}
		else if(isFoundProductFunc_num === 2)
		{
			/*
			СОХРАНЕНИЕ ИГРЫ
			*/
			_saveGameFunc();
			/*
			
			*/
			_soundManager.addSoundFunc("successfully_sound", 0, 0, 0, 0.1, 0);
			/*
			
			*/
			currentScreen_mc.body_mc.magic_mc.gotoAndStop(_information.lastFoundProduct);
			/*
			
			*/
			if(currentScreen_mc.body_mc.magic_mc["body_" + Number(currentScreen_mc.body_mc.magic_mc.currentFrame + 1) + "_mc"])
			{
				animation_mc = currentScreen_mc.body_mc.magic_mc["body_" + Number(currentScreen_mc.body_mc.magic_mc.currentFrame + 1) + "_mc"];
				timelineControl = new Edapskov_TimelineControl(animation_mc);
				timelineControl.gotoEndFunc();
				timelineControl.addEventListener("completed_timeline", _onFinishNewMagicAnimationAlchemyFunc, false);
			}
		}
		else
		{
			/*
			
			*/
			_soundManager.addSoundFunc("fail_sound", 0, 0, 0, 0.1, 0);
			/*
			
			*/
			_information.fails.currentFail = _information.fails.totalFails[Math.floor(Math.random() * _information.fails.totalFails.length)];
			/*
			
			*/
			currentScreen_mc.body_mc.magic_mc.gotoAndStop(_information.fails.currentFail);
			/*
			
			*/
			if(currentScreen_mc.body_mc.magic_mc["body_" + Number(currentScreen_mc.body_mc.magic_mc.currentFrame + 1) + "_mc"])
			{
				animation_mc = currentScreen_mc.body_mc.magic_mc["body_" + Number(currentScreen_mc.body_mc.magic_mc.currentFrame + 1) + "_mc"];
				timelineControl = new Edapskov_TimelineControl(animation_mc);
				timelineControl.gotoEndFunc();
				timelineControl.addEventListener("completed_timeline", _onFinishFailAnimationAlchemyFunc, false);
			}
		}
	}
	function _onFinishOldMagicAnimationAlchemyFunc(event)
	{
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		/*
		
		*/
		_beginAlchemyFunc();
	}
	function _onFinishNewMagicAnimationAlchemyFunc(event)
	{
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		/*
		
		*/
		currentScreen_mc.next_mc.mouseChildren = false;
		currentScreen_mc.next_mc.mouseEnabled = true;
		currentScreen_mc.next_mc.cursor = "pointer";
		currentScreen_mc.next_mc.alpha = 0.01;
		currentScreen_mc.next_mc.visible = true;
		createjs.Tween.get(currentScreen_mc.next_mc).wait(0).to({alpha:1}, _DELAY * 1000);
		currentScreen_mc.next_mc.addEventListener("click", _onClickNextMcAlchemyFunc, false);
		if(currentScreen_mc.next_mc.animation_mc)
		{
			currentScreen_mc.next_mc.animation_mc.gotoAndStop(0);
			currentScreen_mc.next_mc.animation_mc.play();
		}
	}
	function _onClickNextMcAlchemyFunc(event)
	{
		/*
		
		*/
		var point_obj = event.currentTarget.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		var next_mc = event.currentTarget;
		next_mc.removeEventListener("click", _onClickNextMcAlchemyFunc, false);
		/*
		
		*/
		var gravityExplosion_mc = new lib.GravityExplosionMC();
		_before.addChild(gravityExplosion_mc);
		gravityExplosion_mc.gotoAndStop(0);
		point_obj = next_mc.localToLocal(event.localX, event.localY, _before);
		gravityExplosion_mc.x = point_obj.x;
		gravityExplosion_mc.y = point_obj.y;
		/*
		
		*/
		_animationTransitionBetweenScenesFunc(_progressFunc, 0, 1, null, true);
	}
	function _onFinishFailAnimationAlchemyFunc(event)
	{
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		/*
		
		*/
		_beginAlchemyFunc();
	}
	/*
	
	*/
	function _updateInventoryAlchemyFunc()
	{
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		var item_str;
		var item_mc;
		/*
		
		*/
		var i = 0;
		while (i < _information.sizeInventory)
		{
			/*
			
			*/
			item_str = "item_" + i + "_mc";
			/*
			
			*/
			if(currentScreen_mc.body_mc.inventory_mc[item_str])
			{
				/*
				
				*/
				item_mc = currentScreen_mc.body_mc.inventory_mc[item_str];
				item_mc.gotoAndStop(0);
				/*
				
				*/
				if(i < _information.inventory.length)
				{
					item_mc.gotoAndStop(_information.inventory[i]);
				}
			}
			/*
			
			*/
			i++;
		}
	}
	/*
	возвращает
	0 - не найдено достижение
	1 - найдено уже открытое достижение
	2 - найдено совершенно новое достижение
	*/
	function _isFoundProductFunc()
	{
		/*
		
		*/
		var result_num = 0;
		/*
		
		*/
		_sortArrayNumbersFunc(_information.inventory);
		/*
		
		*/
		var i;
		var ingredients_bool;
		for(var propProducts in _information.products)
		{
			if(_information.products.hasOwnProperty(propProducts))
			{
				/*
				
				*/
				i = 0;
				ingredients_bool = true;
				while(i < _information.sizeInventory)
				{
					/*
					
					*/
					if(Number(_information.products[propProducts].ingredients[i]) !== Number(_information.inventory[i]))
					{
						ingredients_bool = false;
					}
					/*
					
					*/
					i++;
				}
				/*
				
				*/
				if(ingredients_bool)
				{
					/*
					
					*/
					_information.lastFoundProduct = propProducts;
					/*
					
					*/
					if(_information.products[propProducts].completed)
					{
						result_num = 1;
					}
					else
					{
						result_num = 2;
						_information.products[propProducts].completed = true;
					}
				}
			}
		}
		/*
		
		*/
		return result_num;
	}
	/*
	возвращает true, если найдено совершенно новое достижение
	*/
	function _isNewProductFunc()
	{
		/*
		
		*/
		var result_bool = false;
		/*
		
		*/
		_sortArrayNumbersFunc(_information.inventory);
		/*
		
		*/
		var i;
		var ingredients_bool;
		for(var propProducts in _information.products)
		{
			if(_information.products.hasOwnProperty(propProducts))
			{
				if(!_information.products[propProducts].completed)
				{
					/*
					
					*/
					i = 0;
					ingredients_bool = true;
					while(i < _information.sizeInventory)
					{
						/*
						
						*/
						if(Number(_information.products[propProducts].ingredients[i]) !== Number(_information.inventory[i]))
						{
							ingredients_bool = false;
						}
						/*
						
						*/
						i++;
					}
					/*
					
					*/
					if(ingredients_bool)
					{
						result_bool = true;
						_information.products[propProducts].completed = true; 
						_information.lastFoundProduct = propProducts;
					}
				}
			}
		}
		/*
		
		*/
		return result_bool;
	}
	/*
	
	*/
	function _sortArrayNumbersFunc(array_arr)
	{
		array_arr.sort(_compareNumbersFunc);
	}
	function _compareNumbersFunc(a, b)
	{
		/*
		
		*/
		var result_num = 0;
		/*
		
		*/
		if (a > b)
		{
			result_num = 1;
		}
		if (a < b)
		{
			result_num = -1;
		}
		/*
		
		*/
		return result_num;
	}
	/*
	==============================================================================================================
	Progress Screen
	==============================================================================================================
	*/
	function _progressFunc()
	{
		/*
		
		*/
		_soundManager.addSoundFunc("achievement_sound", 0, 0, 0, 0.1, 0);
		/*
		
		*/
		_clearContainerFunc(_main);
		_clearContainerFunc(_before);
		/*
		
		*/
		var currentScreen_mc = new lib.ProgressScreen();
		_main.addChild(currentScreen_mc);
		currentScreen_mc.gotoAndStop(0);
		currentScreen_mc.body_mc.gotoAndStop(0);
		/*
		
		*/
		currentScreen_mc.logo_btn.addEventListener("click", _onClickLogoBtnFunc, false);
		/*
		
		*/
		if(currentScreen_mc.moreGames_btn)
		{
			currentScreen_mc.moreGames_btn.alpha = 0.01;
			createjs.Tween.get(currentScreen_mc.moreGames_btn).wait(_DELAY * 1000).to({alpha:1}, _DELAY * 1000);
			currentScreen_mc.moreGames_btn.addEventListener("click", _onClickMoreGamesBtnFunc, false);
		}
		/*
		
		*/
		currentScreen_mc.next_mc.visible = false;
		/*
		
		*/
		_beginProgressFunc();
		/*
		
		*/
		_soundManager.updateSoundMcFunc(currentScreen_mc);
		/*
		
		*/
		_fullScreenCanvasManager.updateFullScreenMcFunc(currentScreen_mc);
		/*
		
		*/
		_cursorUpdateFunc();
	}
	/*
	
	*/
	function _beginProgressFunc()
	{
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		/*
		
		*/
		if(currentScreen_mc.body_mc.title_mc)
		{
			currentScreen_mc.body_mc.title_mc.gotoAndStop(0);
			animation_mc = currentScreen_mc.body_mc.title_mc;
			timelineControl = new Edapskov_TimelineControl(animation_mc);
			timelineControl.gotoEndFunc();
			timelineControl.addEventListener("completed_timeline", _onFinishTitleAnimationProgressFunc, false);
		}
		else
		{
			trace("Не обнаружено title_mc !");
		}
		/*
		
		*/
		var product_str;
		var product_mc;
		if(currentScreen_mc.body_mc.products_mc)
		{
			/*
			
			*/
			currentScreen_mc.body_mc.products_mc.gotoAndStop(0);
			/*
			
			*/
			for(var propProducts in _information.products)
			{
				if(_information.products.hasOwnProperty(propProducts))
				{
					/*
					
					*/
					product_str = String(propProducts + "_mc");
					/*
					
					*/
					if(currentScreen_mc.body_mc.products_mc[product_str])
					{
						/*
						
						*/
						product_mc = currentScreen_mc.body_mc.products_mc[product_str];
						product_mc.gotoAndStop(0);
						product_mc.name = propProducts;
						/*
						
						*/
						if(_information.products[propProducts].completed)
						{
							product_mc.gotoAndStop("show");
						}
						else
						{
							product_mc.gotoAndStop("hide");
						}
					}
					else
					{
						trace("Не обнаружено " + propProducts + "_mc !");
					}
				}
			}
		}
		else
		{
			trace("Не обнаружено products_mc !");
		}
	}
	function _onFinishTitleAnimationProgressFunc(event)
	{
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		/*
		
		*/
		currentScreen_mc.next_mc.mouseChildren = false;
		currentScreen_mc.next_mc.mouseEnabled = true;
		currentScreen_mc.next_mc.cursor = "pointer";
		currentScreen_mc.next_mc.visible = true;
		currentScreen_mc.next_mc.alpha = 0.01;
		createjs.Tween.get(currentScreen_mc.next_mc).wait(0).to({alpha:1}, _DELAY * 1000);
		currentScreen_mc.next_mc.addEventListener("click", _onClickNextMcProgressFunc, false);
		if(currentScreen_mc.next_mc.animation_mc)
		{
			currentScreen_mc.next_mc.animation_mc.gotoAndStop(0);
			currentScreen_mc.next_mc.animation_mc.play();
		}
	}
	function _onClickNextMcProgressFunc(event)
	{
		/*
		
		*/
		var point_obj = event.currentTarget.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		var next_mc = event.currentTarget;
		next_mc.removeEventListener("click", _onClickNextMcProgressFunc, false);
		/*
		
		*/
		var gravityExplosion_mc = new lib.GravityExplosionMC();
		_before.addChild(gravityExplosion_mc);
		gravityExplosion_mc.gotoAndStop(0);
		point_obj = next_mc.localToLocal(event.localX, event.localY, _before);
		gravityExplosion_mc.x = point_obj.x;
		gravityExplosion_mc.y = point_obj.y;
		/*
		
		*/
		if(_isCompletedProductsFunc())
		{
			_animationTransitionBetweenScenesFunc(_resultFunc, 0, 1, null, true);
		}
		else
		{
			/*
			
			*/
			_information.counterAds++;
			if(_information.counterAds === 3)
			{
				_addAdsFunc();
			}
			/*
			
			*/
			_animationTransitionBetweenScenesFunc(_alchemyFunc, 0, 1, null, true);
		}
	}
	/*
	
	*/
	function _isCompletedProductsFunc()
	{
		/*
		
		*/
		var result_bool = true;
		/*
		
		*/
		for(var propProducts in _information.products)
		{
			if(_information.products.hasOwnProperty(propProducts))
			{
				if(!_information.products[propProducts].completed)
				{
					result_bool = false;
				}
			}
		}
		/*
		
		*/
		return result_bool;
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
		var completed_bool = true;
		if(loadInformation_obj != null)
		{
			if(loadInformation_obj.hasOwnProperty("products"))
			{
				for(var propOldProducts in loadInformation_obj.products)
				{
					if(loadInformation_obj.products.hasOwnProperty(propOldProducts))
					{
						if(loadInformation_obj.products[propOldProducts].hasOwnProperty("completed"))
						{
							if(!Boolean(loadInformation_obj.products[propOldProducts].completed))
							{
								completed_bool = false;
							}
						}
					}
				}
				if(!completed_bool)
				{
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
					for(var propProducts in loadInformation_obj.products)
					{
						if(loadInformation_obj.products.hasOwnProperty(propProducts))
						{
							if(_information.products.hasOwnProperty(propProducts))
							{
								if(loadInformation_obj.products[propProducts].hasOwnProperty("completed"))
								{
									_information.products[propProducts].completed = Boolean(loadInformation_obj.products[propProducts].completed);
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
		var loadInformation_obj = {products:{}};
		loadInformation_obj.firstRun = Boolean(_information.firstRun);
		loadInformation_obj.shownAds = Boolean(_information.shownAds);
		/*
		
		*/
		for(var propProducts in _information.products)
		{
			if(_information.products.hasOwnProperty(propProducts))
			{
				loadInformation_obj.products[propProducts] = {};
				loadInformation_obj.products[propProducts].completed = Boolean(_information.products[propProducts].completed);
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
		window.open("https://dl-girls.com/content/folder_1615915630" + "?utm_source=" + window.location.href + "&utm_medium=game_referral|game&utm_content=simple&utm_campaign=" + _TITLE, "_self");
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
		_clearContainerFunc(_main);
		_clearContainerFunc(_before);
		/*
		
		*/
		var currentScreen_mc = new lib.ResultScreen();
		_main.addChild(currentScreen_mc);
		currentScreen_mc.gotoAndStop(0);
		currentScreen_mc.addEventListener("click", _onClickResultScreenFunc, false);
		/*
		
		*/
		currentScreen_mc.logo_btn.addEventListener("click", _onClickLogoBtnFunc, false);
		/*
		
		*/
		currentScreen_mc.photoContainer_mc.gotoAndStop(0);
		currentScreen_mc.photoContainer_mc.logo_btn.visible = false;
		currentScreen_mc.photoContainer_mc.heroes_mc.gotoAndStop(0);
		/*
		
		*/
		if(currentScreen_mc.facebook_btn)
		{
			currentScreen_mc.facebook_btn.addEventListener("click", _onClickFacebookBtnFunc, false);
		}
		/*
		
		*/
		if(currentScreen_mc.moreGames_btn)
		{
			currentScreen_mc.moreGames_btn.cursor = "pointer";
			currentScreen_mc.moreGames_btn.addEventListener("click", _onClickMoreGamesBtnFunc, false);
		}
		/*
		
		*/
		if(currentScreen_mc.banner_1_mc)
		{
			currentScreen_mc.banner_1_mc.cursor = "pointer";
			currentScreen_mc.banner_1_mc.addEventListener("click", _onClickBannerMcFunc_1, false);
		}
		if(currentScreen_mc.banner_2_mc)
		{
			currentScreen_mc.banner_2_mc.cursor = "pointer";
			currentScreen_mc.banner_2_mc.addEventListener("click", _onClickBannerMcFunc_2, false);
		}
		/*
		
		*/
		if(currentScreen_mc.freeGames_mc)
		{
			currentScreen_mc.freeGames_mc.addEventListener("click", _onClickFreeGamesMcFunc, false);
		}
		/*
		
		*/
		if(currentScreen_mc.photo_btn)
		{
			currentScreen_mc.photo_btn.addEventListener("click", _onClickPhotoBtnFunc, false);
		}
		/*
		
		*/
		if(currentScreen_mc.prev_mc)
		{
			currentScreen_mc.prev_mc.mouseEnabled = true;
			currentScreen_mc.prev_mc.mouseChildren = false;
			currentScreen_mc.prev_mc.cursor = "pointer";
			currentScreen_mc.prev_mc.addEventListener("mouseover", _onMouseOverNavigationPhotoContainerFunc, false);
			currentScreen_mc.prev_mc.addEventListener("mouseout", _onMouseOutNavigationPhotoContainerFunc, false);
			currentScreen_mc.prev_mc.addEventListener("click", _onClickPrevNavigationPhotoContainerFunc, false);
		}
		if(currentScreen_mc.next_mc)
		{
			currentScreen_mc.next_mc.mouseEnabled = true;
			currentScreen_mc.next_mc.mouseChildren = false;
			currentScreen_mc.next_mc.cursor = "pointer";
			currentScreen_mc.next_mc.addEventListener("mouseover", _onMouseOverNavigationPhotoContainerFunc, false);
			currentScreen_mc.next_mc.addEventListener("mouseout", _onMouseOutNavigationPhotoContainerFunc, false);
			currentScreen_mc.next_mc.addEventListener("click", _onClickNextNavigationPhotoContainerFunc, false);
		}
		/*
		
		*/
		currentScreen_mc.playAgain_btn.addEventListener("click", _onClickPlayAgainBtnFunc, false);
		/*
		
		*/
		_beginResultFunc();
		/*
		редирект
		*/
		/*
		if(_information.timeout_id != null)
		{
			clearTimeout(_information.timeout_id);
		}
		_information.timeout_id = setTimeout(_redirectFunc, 12000);
		*/
		/*
		
		*/
		if(currentScreen_mc.photoContainer_mc.bg)
		{
			currentScreen_mc.photoContainer_mc.bg.cache(-(_BGWIDTH - _CWIDTH) / 2, 0, _BGWIDTH, _CHEIGHT);
		}
		/*
		
		*/
		_soundManager.updateSoundMcFunc(currentScreen_mc);
		/*
		
		*/
		_fullScreenCanvasManager.updateFullScreenMcFunc(currentScreen_mc);
		/*
		
		*/
		_cursorUpdateFunc();
	}
	/*
	
	*/
	function _onClickResultScreenFunc(event)
	{
		//trace(event);
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
		/*
		
		*/
		_animationTransitionBetweenScenesFunc(_alchemyFunc, 0, 1, null, true);
	}
	/*
	
	*/
	function _beginResultFunc()
	{
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		var product_str;
		var product_mc;
		/*
		
		*/
		if(currentScreen_mc.photoContainer_mc.magic_mc)
		{
			currentScreen_mc.photoContainer_mc.magic_mc.gotoAndStop(0);
			currentScreen_mc.photoContainer_mc.magic_mc.gotoAndStop("default");
			currentScreen_mc.photoContainer_mc.magic_mc.mouseChildren = false;
			currentScreen_mc.photoContainer_mc.magic_mc.mouseEnabled = false;
		}
		else
		{
			trace("Не обнаружено magic_mc !");
		}
		/*
		
		*/
		for(var propProducts in _information.products)
		{
			if(_information.products.hasOwnProperty(propProducts))
			{
				/*
				
				*/
				product_str = String(propProducts + "_mc");
				/*
				
				*/
				if(currentScreen_mc.photoContainer_mc[product_str])
				{
					product_mc = currentScreen_mc.photoContainer_mc[product_str];
					product_mc.gotoAndStop(0);
					product_mc.name = product_str;
					product_mc.cursor = "pointer";
					product_mc.mouseChildren = false;
					product_mc.mouseEnabled = true;
					product_mc.addEventListener("click", _onClickProductMcResultFunc, false);
				}
				else
				{
					trace("Не обнаружено " + product_str + " !");
				}
			}
		}
	}
	function _onClickProductMcResultFunc(event)
	{
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		/*
		
		*/
		var product_mc = event.currentTarget;
		var product_str = String(product_mc.name);
		var temp_arr = product_str.split("_");
		product_str = temp_arr[0] + "_" + temp_arr[1];
		/*
		
		*/
		var point_obj = product_mc.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		if(currentScreen_mc.photoContainer_mc.magic_mc)
		{
			/*
			
			*/
			currentScreen_mc.photoContainer_mc.mouseChildren = false;
			currentScreen_mc.photoContainer_mc.mouseEnabled = false;
			/*
			
			*/
			currentScreen_mc.photoContainer_mc.magic_mc.gotoAndStop(product_str);
			/*
			
			*/
			if(currentScreen_mc.photoContainer_mc.magic_mc["body_" + Number(currentScreen_mc.photoContainer_mc.magic_mc.currentFrame + 1) + "_mc"])
			{
				animation_mc = currentScreen_mc.photoContainer_mc.magic_mc["body_" + Number(currentScreen_mc.photoContainer_mc.magic_mc.currentFrame + 1) + "_mc"];
				timelineControl = new Edapskov_TimelineControl(animation_mc);
				timelineControl.gotoEndFunc();
				timelineControl.addEventListener("completed_timeline", _onFinishMagicAnimationResultFunc, false);
			}
		}
		else
		{
			trace("Не обнаружено magic_mc !");
		}
	}
	function _onFinishMagicAnimationResultFunc(event)
	{
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		/*
		
		*/
		currentScreen_mc.photoContainer_mc.mouseChildren = true;
		currentScreen_mc.photoContainer_mc.mouseEnabled = true;
		/*
		
		*/
		currentScreen_mc.photoContainer_mc.magic_mc.gotoAndStop("default");
	}
	/*
	
	*/
	function _onClickPhotoBtnFunc(event)
	{
		/*
		
		*/
		_soundManager.addSoundFunc("photo_sound", 0, 0, 0, 1, 0, true);
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		/*
		
		*/
		_updateVisibleDisplayObjectFunc(currentScreen_mc, false);
		currentScreen_mc.photoContainer_mc.visible = true;
		currentScreen_mc.photoContainer_mc.logo_btn.visible = true;
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
			currentScreen_mc.photoContainer_mc.logo_btn.visible = false;
			_updateVisibleDisplayObjectFunc(currentScreen_mc);
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
	
	*/
	function _onMouseOverNavigationPhotoContainerFunc(event)
	{
		var currentTarget_mc = event.currentTarget;
		createjs.Tween.get(currentTarget_mc).wait(0).to({scaleX:1.1, scaleY:1.1}, (_DELAY / 5) * 1000);
	}
	function _onMouseOutNavigationPhotoContainerFunc(event)
	{
		var currentTarget_mc = event.currentTarget;
		createjs.Tween.get(currentTarget_mc).wait(0).to({scaleX:1, scaleY:1}, (_DELAY / 3) * 1000);
	}
	function _onClickPrevNavigationPhotoContainerFunc(event)
	{
		/*
		
		*/
		var point_obj = event.currentTarget.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		var totalFrames_num = currentScreen_mc.photoContainer_mc.heroes_mc.totalFrames;
		var currentFrame_num = currentScreen_mc.photoContainer_mc.heroes_mc.currentFrame + 1;
		currentFrame_num--;
		if(currentFrame_num <= 0)
		{
			currentFrame_num = totalFrames_num;
		}
		/*
		
		*/
		currentScreen_mc.photoContainer_mc.heroes_mc.gotoAndStop(Number(currentFrame_num - 1));
	}
	function _onClickNextNavigationPhotoContainerFunc(event)
	{
		/*
		
		*/
		var point_obj = event.currentTarget.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		var totalFrames_num = currentScreen_mc.photoContainer_mc.heroes_mc.totalFrames;
		var currentFrame_num = currentScreen_mc.photoContainer_mc.heroes_mc.currentFrame + 1;
		currentFrame_num++;
		if(currentFrame_num > totalFrames_num)
		{
			currentFrame_num = 1;
		}
		/*
		
		*/
		currentScreen_mc.photoContainer_mc.heroes_mc.gotoAndStop(Number(currentFrame_num - 1));
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
		window.open("https://dl-girls.com/index.php?controller=article&action=index&id=3400" + "&utm_source=" + window.location.href + "&utm_medium=game_referral|game&utm_content=simple&utm_campaign=" + _TITLE, "_blank");
	}
	function _onClickBannerMcFunc_2(event)
	{
		window.open("https://dl-girls.com/index.php?controller=article&action=index&id=3367" + "&utm_source=" + window.location.href + "&utm_medium=game_referral|game&utm_content=simple&utm_campaign=" + _TITLE, "_blank");
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