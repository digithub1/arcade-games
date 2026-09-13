/*
* @author edapskov
* @copyright 2019 edapskov v 9.001
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
	var _BGCOLOR = "#ffffff";
	var _FONT = "Arial";
	var _TITLE = "Bonnie Fitness Frenzy";
	var _LINKTOGAME = "https://dl-girls.com";
	var _DELAY = 1;
	/*
	публичные переменные
	*/
	this.copyright = "© DL-Studio, v 9.001";
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
		currentNameHero:null,
		currentCheckpoint:0,
		totalCheckpoints:0,
		currentRub:0,
		totalRubs:200,
		trackMove:3,
		lastDate_uint:0,
		timeout_id:null,
		interval_id:null,
		locations:
		{
			location_1:{
				completed:null,
				currentAction:null,
				currentNameAction:null,
				totalActions:null,
				actions:{
					action_1:{
						type:"click",
						frame:1,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_1",
						pathSubject:null,
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:_openLocFunc_1_1,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:0
					},
					action_2:{
						type:"clicker",
						frame:2,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_2",
						pathSubject:"subject_2",
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:null,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:0
					},
					action_3:{
						type:"clicker",
						frame:3,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_3",
						pathSubject:"subject_3",
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:null,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:0
					},
					action_4:{
						type:"clicker",
						frame:4,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_4",
						pathSubject:"subject_4",
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:null,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:0
					},
					action_5:{
						type:"clicker",
						frame:5,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_5",
						pathSubject:"subject_5",
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:null,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:0
					},
					action_6:{
						type:"click",
						frame:6,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_6",
						pathSubject:"subject_6",
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:null,
						closeLocFunc:_closeLocFunc_6_1,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:0
					}
				}
			},
			location_2:{
				completed:null,
				currentAction:null,
				currentNameAction:null,
				totalActions:null,
				actions:{
					action_1:{
						type:"dressup",
						frame:1,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:null,
						pathSubject:null,
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:_openLocFunc_1_2,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:0
					}
				}
			},
			location_3:{
				completed:null,
				currentAction:null,
				currentNameAction:null,
				totalActions:null,
				actions:{
					action_1:{
						type:"dressup",
						frame:1,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:null,
						pathSubject:null,
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:_openLocFunc_1_3,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:0
					},
					action_2:{
						type:"dressup",
						frame:2,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:null,
						pathSubject:null,
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:_openLocFunc_2_3,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:0
					},
					action_3:{
						type:"click",
						frame:3,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_3",
						pathSubject:null,
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:null,
						closeLocFunc:_closeLocFunc_3_3,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:0
					}
				}
			}
		},
		heroes:
		{
			hero_1:{
				currentSet:"set_1",
				totalSets:{
					set_1:{
						currentIndex:0,
						frames:[1, 2, 3, 4, 5, 6]
					},
					set_2:{
						currentIndex:0,
						frames:[1, 2, 3, 4, 5]
					},
					set_3:{
						currentIndex:0,
						frames:[1, 2, 3, 4, 5]
					}
				},
				totalDress:{
					lips_0:{rewarded:false},
					lips_1:{rewarded:false},
					lips_2:{rewarded:false},
					lips_3:{rewarded:false},
					lips_4:{rewarded:false},
					lips_5:{rewarded:false},
					lips_6:{rewarded:false},
					shadows_0:{rewarded:false},
					shadows_1:{rewarded:false},
					shadows_2:{rewarded:false},
					shadows_3:{rewarded:false},
					shadows_4:{rewarded:false},
					shadows_5:{rewarded:false},
					shadows_6:{rewarded:false},
					eyes_0:{rewarded:false},
					eyes_1:{rewarded:false},
					eyes_2:{rewarded:false},
					eyes_3:{rewarded:false},
					eyes_4:{rewarded:false},
					eyes_5:{rewarded:false},
					eyes_6:{rewarded:false},
					eyebrows_0:{rewarded:false},
					eyebrows_1:{rewarded:false},
					eyebrows_2:{rewarded:false},
					eyebrows_3:{rewarded:false},
					eyebrows_4:{rewarded:false},
					eyebrows_5:{rewarded:false},
					eyebrows_6:{rewarded:false},
					earrings_0:{rewarded:false},
					earrings_1:{rewarded:false},
					earrings_2:{rewarded:false},
					earrings_3:{rewarded:false},
					earrings_4:{rewarded:false},
					earrings_5:{rewarded:false},
					earrings_6:{rewarded:false},
					earrings_7:{rewarded:false},
					earrings_8:{rewarded:false},
					earrings_9:{rewarded:false},
					hair_0:{rewarded:false},
					hair_1:{rewarded:false},
					hair_2:{rewarded:false},
					hair_3:{rewarded:false},
					hair_4:{rewarded:false},
					hair_5:{rewarded:false},
					hair_6:{rewarded:false},
					hair_7:{rewarded:false},
					hair_8:{rewarded:false},
					hair_9:{rewarded:false},
					dress_0:{rewarded:false},
					dress_1:{rewarded:false},
					dress_2:{rewarded:false},
					dress_3:{rewarded:false},
					dress_4:{rewarded:false},
					dress_5:{rewarded:false},
					dress_6:{rewarded:false},
					dress_7:{rewarded:false},
					dress_8:{rewarded:false},
					dress_9:{rewarded:false},
					bg_0:{rewarded:false},
					bg_1:{rewarded:false}
				},
				currentDress:{
					lips:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					shadows:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					eyes:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					eyebrows:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					earrings:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					hair:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					dress:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					bg:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1}
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
		logo_img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozMkNGOTMxNEE2MzJGMDExQUVGRkIxNjJENEQxMDk1NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGNzY2QjIwRTQ4MDkxMUYxQkNGQkY5NzgyNUFGNEI5RCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGNzY2QjIwRDQ4MDkxMUYxQkNGQkY5NzgyNUFGNEI5RCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2MEEwODZDM0QyNDdGMTExQTJEQzg3ODgzRDEyRUI0NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozMkNGOTMxNEE2MzJGMDExQUVGRkIxNjJENEQxMDk1NiIvPiA8L3JkZjpEZXNjcmlwdGlv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";
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
		loadQueue.loadFile({id:"completed_sound", src:"library/sounds/completed_sound.ogg"});
		loadQueue.loadFile({id:"photo_sound", src:"library/sounds/photo_sound.ogg"});
		loadQueue.loadFile({id:"magic_sound", src:"library/sounds/magic_sound.ogg"});
		loadQueue.loadFile({id:"message_sound", src:"library/sounds/message_sound.ogg"});
		loadQueue.loadFile({id:"tink_sound", src:"library/sounds/tink_sound.ogg"});
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
				_information.totalLocations++;
				_information.locations[propLocations].completed = false;
				_information.locations[propLocations].currentAction = 1;
				_information.locations[propLocations].currentNameAction = "action_" + _information.locations[propLocations].currentAction;
				if(_information.locations[propLocations].totalActions === null)
				{
					_information.locations[propLocations].totalActions = 0;
					for(var propActions in _information.locations[propLocations].actions)
					{
						if(_information.locations[propLocations].actions.hasOwnProperty(propActions))
						{
							_information.locations[propLocations].totalActions++;
						}
					}
				}
			}
		}
		/*
		
		*/
		for(var propHeroes in _information.heroes)
		{
			if(_information.heroes.hasOwnProperty(propHeroes))
			{
				for(var propOptions in _information.heroes[propHeroes].currentDress)
				{
					if(_information.heroes[propHeroes].currentDress.hasOwnProperty(propOptions))
					{
						_information.heroes[propHeroes].currentDress[propOptions].currentOption = _information.heroes[propHeroes].currentDress[propOptions].defaultOption;
						_information.heroes[propHeroes].currentDress[propOptions].currentColor = _information.heroes[propHeroes].currentDress[propOptions].defaultColor;
						_information.heroes[propHeroes].currentDress[propOptions].currentTexture = _information.heroes[propHeroes].currentDress[propOptions].defaultTexture;
						_information.heroes[propHeroes].currentDress[propOptions].currentAlphaTexture = _information.heroes[propHeroes].currentDress[propOptions].defaultAlphaTexture;
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
		_updateHeroesFunc(_currentMainScreen_mc, true, true);
		_updateHeroesFunc(_action_mc, true, true);
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
							//new Edapskov_Glow(location_mc, _DELAY / 4, "#ffffff", 0);
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
							//new Edapskov_Glow(location_mc, _DELAY / 4, "#ffffff", 0);
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
		//new Edapskov_Glow(currentTarget_mc, _DELAY / 5, "#ffffff", 15);
	}
	function _onMouseOutLocationSelectFunc(event)
	{
		var currentTarget_mc = event.currentTarget;
		//createjs.Tween.get(currentTarget_mc).wait(0).to({scaleX:1, scaleY:1}, (_DELAY / 3) * 1000);
		//new Edapskov_Glow(currentTarget_mc, _DELAY / 3, "#ffffff", 0);
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
		_soundManager.addSoundFunc("magic_sound", 0, 0, 0, 0.2, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		_information.currentNameLocation = String(location_mc.name);
		/*
		
		*/
		new Edapskov_Flickering(_before, location_mc, ["#ffff00", "#ffcc00"], 10, 24);
		//new Edapskov_Flickering(_before, location_mc, ["#ffffff", "#ffffcc"], 8, 24, 1, "Glitter_2");
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
			//_animationTransitionBetweenScenesFunc(_questFunc);
			_animationTransitionBetweenScenesFunc(_questFunc, 1, 1, null, true);
		}
	}
	/*
	
	*/
	function _onEndSelectFunc(event)
	{
		//_animationTransitionBetweenScenesFunc(_questFunc);
		_animationTransitionBetweenScenesFunc(_questFunc, 0, 1, null, true);
	}
	/*
	==============================================================================================================
	Quest Screen
	==============================================================================================================
	*/
	function _questFunc()
	{
		/*
		
		*/
		_information.currentNameHero = null;
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
		if(_currentMainScreen_mc.skip_btn)
		{
			_currentMainScreen_mc.skip_btn.visible = false;
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
		
		*/
		_actionFunc();
	}
	/*
	
	*/
	function _actionFunc()
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
		if(_information.locations[_information.currentNameLocation].actions.hasOwnProperty(_information.locations[_information.currentNameLocation].currentNameAction))
		{
			/*
			
			*/
			_action_mc = null;
			/*
			
			*/
			_currentMainScreen_mc.body_mc.gotoAndStop(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].frame - 1);
			/*
			
			*/
			if(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].openLocFunc !== null)
			{
				_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].openLocFunc();
			}
			/*
			
			*/
			if(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].defaultCursor !== null)
			{
				_cursorUpdateFunc(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].defaultCursor);
			}
			/*
			
			*/
			if(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].addBackgroundSound !== null)
			{
				_soundManager.addSoundFunc(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].addBackgroundSound, 0, 0, 0, 1, 0);
			}
			if(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].removeBackgroundSound !== null)
			{
				_soundManager.removeSoundNameFunc(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].removeBackgroundSound);
			}
			/*
			
			*/
			_updateIndicatorFunc();
			/*
			
			*/
			if(_currentMainScreen_mc.skip_btn)
			{
				if(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].skipAndGoto === null)
				{
					_currentMainScreen_mc.skip_btn.visible = false;
				}
				else
				{
					/*
					
					*/
					if(_currentMainScreen_mc.skip_btn.visible)
					{
						_currentMainScreen_mc.skip_btn.alpha = 1;
					}
					else
					{
						_currentMainScreen_mc.skip_btn.alpha = 0.01;
						createjs.Tween.get(_currentMainScreen_mc.skip_btn).wait(0).to({alpha:1}, (_DELAY / 4) * 1000);
					}
					/*
					
					*/
					_currentMainScreen_mc.skip_btn.visible = true;
					_currentMainScreen_mc.skip_btn.addEventListener("click", _onClickSkipBtnFunc, false);
				}
			}
			/*
			
			*/
			if(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].type === "click")
			{
				_beginClickActionFunc();
			}
			else if(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].type === "move")
			{
				_beginMoveActionFunc();
			}
			else if(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].type === "rub")
			{
				_beginRubActionFunc();
			}
			else if(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].type === "drag")
			{
				_beginDragActionFunc();
			}
			else if(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].type === "clicker")
			{
				_beginClickerActionFunc();
			}
			else if(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].type === "dressup")
			{
				_beginDressupActionFunc();
			}
			else if(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].type === "dressupSecond")
			{
				_beginDressupSecondActionFunc();
			}
			else if(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].type === "find")
			{
				_beginFindActionFunc();
			}
			else if(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].type === "findSecond")
			{
				_beginFindSecondActionFunc();
			}
			else if(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].type === "photoHunting")
			{
				_beginPhotoHuntingActionFunc();
			}
			/*
			
			*/
			var subject_mc;
			if(_currentMainScreen_mc.body_mc[_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].pathSubject])
			{
				subject_mc = _currentMainScreen_mc.body_mc[_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].pathSubject];
				subject_mc.gotoAndStop(0);
				subject_mc.loop = false;
			}
		}
		else
		{
			_endActionFunc();
		}
	}
	/*
	
	*/
	function _updateAnimationPointerFunc(pointer_mc)
	{
		pointer_mc.gotoAndPlay(0);
		if(pointer_mc.waves_mc)
		{
			pointer_mc.waves_mc.gotoAndStop(0);
			if(pointer_mc.waves_mc.body_mc)
			{
				pointer_mc.waves_mc.body_mc.gotoAndPlay(0);
			}
		}
	}
	/*
	============================================================
	click action
	============================================================
	*/
	function _beginClickActionFunc()
	{
		/*
		создаём переменные
		*/
		_information.objects_arr = new Array();
		/*
		
		*/
		var object_mc;
		var i = 0;
		var l = 0;
		/*
		
		*/
		if(_currentMainScreen_mc.body_mc.pointer_1)
		{
			_currentMainScreen_mc.body_mc.pointer_1.mouseEnabled = false;
			_currentMainScreen_mc.body_mc.pointer_1.mouseChildren = false;
			_currentMainScreen_mc.body_mc.pointer_1.visible = true;
			_updateAnimationPointerFunc(_currentMainScreen_mc.body_mc.pointer_1);
		}
		/*
		
		*/
		if(_currentMainScreen_mc.body_mc.pointer_2)
		{
			_currentMainScreen_mc.body_mc.pointer_2.mouseEnabled = false;
			_currentMainScreen_mc.body_mc.pointer_2.mouseChildren = false;
			_currentMainScreen_mc.body_mc.pointer_2.visible = false;
		}
		/*
		
		*/
		if(Array.isArray(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].pathObject))
		{
			/*
			
			*/
			i = 0;
			l = _information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].pathObject.length;
			/*
			
			*/
			while(i < l)
			{
				/*
				
				*/
				if(_currentMainScreen_mc.body_mc[_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].pathObject[i]])
				{
					_information.objects_arr.push(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].pathObject[i]);
				}
				/*
				
				*/
				i++;
			}
		}
		else
		{
			if(_currentMainScreen_mc.body_mc[_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].pathObject])
			{
				_information.objects_arr[0] = _information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].pathObject;
			}
		}
		/*
		
		*/
		i = 0;
		l = _information.objects_arr.length;
		while(i < l)
		{
			/*
			
			*/
			if(_currentMainScreen_mc.body_mc[_information.objects_arr[i]])
			{
				object_mc = _currentMainScreen_mc.body_mc[_information.objects_arr[i]];
				object_mc.gotoAndStop(0);
				object_mc.name = _information.objects_arr[i];
				object_mc.mouseEnabled = true;
				object_mc.mouseChildren = true;
				object_mc.cursor = "pointer";
				object_mc.addEventListener("click", _onClickObjectClickActionFunc, false);
			}
			/*
			
			*/
			i++;
		}
	}
	function _onClickObjectClickActionFunc(event)
	{
		/*
		
		*/
		var currentTarget_mc = event.currentTarget;
		currentTarget_mc.mouseEnabled = false;
		currentTarget_mc.mouseChildren = false;
		currentTarget_mc.cursor = "default";
		currentTarget_mc.removeEventListener("click", _onClickObjectClickActionFunc, false);
		/*
		
		*/
		if(currentTarget_mc.totalFrames == 2)
		{
			currentTarget_mc.gotoAndStop(1);
		}
		else
		{
			currentTarget_mc.play();
		}
		/*
		
		*/
		var i = 0;
		var l = _information.objects_arr.length;
		while(i < l)
		{
			/*
			
			*/
			if(String(currentTarget_mc.name) == String(_information.objects_arr[i]))
			{
				_information.objects_arr.splice(i, 1);
			}
			/*
			
			*/
			i++;
		}
		/*
		
		*/
		if(_information.objects_arr.length <= 0)
		{
			_endClickActionFunc();
		}
	}
	/*
	
	*/
	function _endClickActionFunc()
	{
		/*
		
		*/
		if(_currentMainScreen_mc.body_mc.pointer_1)
		{
			_currentMainScreen_mc.body_mc.pointer_1.mouseEnabled = false;
			_currentMainScreen_mc.body_mc.pointer_1.mouseChildren = false;
			_currentMainScreen_mc.body_mc.pointer_1.visible = false;
		}
		/*
		
		*/
		if(_currentMainScreen_mc.body_mc.pointer_2)
		{
			_currentMainScreen_mc.body_mc.pointer_2.mouseEnabled = false;
			_currentMainScreen_mc.body_mc.pointer_2.mouseChildren = false;
			_currentMainScreen_mc.body_mc.pointer_2.visible = false;
		}
		/*
		очищаем переменные
		*/
		_information.objects_arr = null;
		/*
		
		*/
		_completeActionFunc();
	}
	/*
	
	*/
	function _skipClickActionFunc()
	{
		/*
		
		*/
		var object_mc;
		var i = 0;
		var l = _information.objects_arr.length;
		while(i < l)
		{
			/*
			
			*/
			if(_currentMainScreen_mc.body_mc[_information.objects_arr[i]])
			{
				object_mc = _currentMainScreen_mc.body_mc[_information.objects_arr[i]];
				object_mc.mouseEnabled = false;
				object_mc.mouseChildren = false;
				object_mc.cursor = "default";
				object_mc.removeEventListener("click", _onClickObjectClickActionFunc, false);
			}
			/*
			
			*/
			i++;
		}
		/*
		очищаем переменные
		*/
		_information.objects_arr = null;
	}
	/*
	============================================================
	move action
	============================================================
	*/
	function _beginMoveActionFunc()
	{
		/*
		создаём переменные
		*/
		_information.currentCheckpoint = 1;
		_information.totalCheckpoints = 0;
		_information.lastDate_uint = 0;
		/*
		
		*/
		var checkpoint_str;
		var checkpoint_mc;
		var i;
		var l;
		/*
		
		*/
		if(_currentMainScreen_mc.body_mc.pointer_1)
		{
			_currentMainScreen_mc.body_mc.pointer_1.mouseEnabled = false;
			_currentMainScreen_mc.body_mc.pointer_1.mouseChildren = false;
			_currentMainScreen_mc.body_mc.pointer_1.visible = false;
		}
		/*
		
		*/
		if(_currentMainScreen_mc.body_mc.pointer_2)
		{
			_currentMainScreen_mc.body_mc.pointer_2.mouseEnabled = false;
			_currentMainScreen_mc.body_mc.pointer_2.mouseChildren = false;
			_currentMainScreen_mc.body_mc.pointer_2.visible = false;
		}
		/*
		
		*/
		if(_currentMainScreen_mc.body_mc[_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].pathObject])
		{
			/*
			
			*/
			_action_mc = _currentMainScreen_mc.body_mc[_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].pathObject];
			_action_mc.gotoAndStop(0);
			_action_mc.visible = true;
			/*
			
			*/
			if(_action_mc.body_mc)
			{
				/*
				
				*/
				_action_mc.body_mc.gotoAndStop(0);
				/*
				
				*/
				_action_mc.body_mc.x = 0;
				_action_mc.body_mc.y = 0;
				/*
				
				*/
				if(_action_mc.body_mc.checkpoints_mc)
				{
					/*
					
					*/
					_action_mc.body_mc.checkpoints_mc.gotoAndStop(0);
					/*
					
					*/
					_action_mc.body_mc.checkpoints_mc.x = 0;
					_action_mc.body_mc.checkpoints_mc.y = 0;
					/*
					
					*/
					i = 0;
					l = _action_mc.body_mc.checkpoints_mc.numChildren;
					while(i < l)
					{
						/*
						
						*/
						checkpoint_str = "checkpoint_" + Number(i + 1);
						/*
						
						*/
						if(_action_mc.body_mc.checkpoints_mc[checkpoint_str])
						{
							/*
							
							*/
							checkpoint_mc = _action_mc.body_mc.checkpoints_mc[checkpoint_str];
							checkpoint_mc.gotoAndStop(0);
							checkpoint_mc.name = checkpoint_str;
							/*
							
							*/
							checkpoint_mc.visible = false;
							/*
							
							*/
							_information.totalCheckpoints++;
						}
						else
						{
							trace("Хде " + checkpoint_str + " в checkpoints_mc в Стрелке!")
						}
						/*
						
						*/
						i++;
					}
					/*
					
					*/
					_stage.addEventListener("stagemousedown", _onStageMouseDownMoveActionFunc, false);
					_stage.addEventListener("stagemouseup", _onStageMouseUpMoveActionFunc, false);
				}
				else
				{
					trace("Хде checkpoints_mc в Стрелке!")
				}
				/*
				
				*/
				var trackMoveContainer;
				if(_action_mc.body_mc.getChildByName("trackMoveContainer"))
				{
					trackMoveContainer = _action_mc.body_mc.getChildByName("trackMoveContainer");
					if(_information.trackMove == 1)
					{
						trackMoveContainer.graphics.clear();
					}
					else if(_information.trackMove == 2)
					{
						_clearContainerFunc(trackMoveContainer);
					}
					else if(_information.trackMove == 3)
					{
						_clearContainerFunc(trackMoveContainer);
					}
					else
					{
						
					}
				}
				else
				{
					if(_information.trackMove == 2 || _information.trackMove == 3)
					{
						trackMoveContainer = new createjs.Container();
					}
					else
					{
						trackMoveContainer = new createjs.Shape();
					}
					_action_mc.body_mc.addChild(trackMoveContainer);
					trackMoveContainer.name = "trackMoveContainer";
					trackMoveContainer.x = 0;
					trackMoveContainer.y = 0;
				}
			}
			else
			{
				trace("Хде body_mc в Стрелке!")
			}
		}
		else
		{
			trace("Хде Стрелка!")
		}
	}
	/*
	
	*/
	function _onStageMouseDownMoveActionFunc(event)
	{
		/*
		
		*/
		_information.currentCheckpoint = 1;
		_information.lastDate_uint = new Date();
		/*
		
		*/
		var trackMoveContainer = _action_mc.body_mc.getChildByName("trackMoveContainer");
		var point_obj = event.currentTarget.localToLocal(event.localX, event.localY, trackMoveContainer);
		/*
		
		*/
		if(_information.trackMove == 1)
		{
			/*
			
			*/
			trackMoveContainer.graphics.clear();
			/*
			
			*/
			trackMoveContainer.graphics.setStrokeStyle(_INDENT, "round").beginStroke("#ff0000");
			trackMoveContainer.graphics.moveTo(point_obj.x, point_obj.y);
		}
		else if(_information.trackMove == 2)
		{
			_clearContainerFunc(trackMoveContainer);
		}
		else if(_information.trackMove == 3)
		{
			//_clearContainerFunc(trackMoveContainer);
		}
		else
		{
			
		}
		/*
		
		*/
		_stage.addEventListener("stagemousemove", _onStageMouseMoveMoveActionFunc, false);
	}
	function _onStageMouseUpMoveActionFunc(event)
	{
		/*
		
		*/
		var trackMoveContainer;
		/*
		
		*/
		trackMoveContainer = _action_mc.body_mc.getChildByName("trackMoveContainer");
		if(_information.trackMove == 1)
		{
			trackMoveContainer.graphics.endStroke();
			trackMoveContainer.graphics.clear();
		}
		else if(_information.trackMove == 2)
		{
			_clearContainerFunc(trackMoveContainer);
		}
		else if(_information.trackMove == 3)
		{
			//_clearContainerFunc(trackMoveContainer);
		}
		else
		{
			
		}
		/*
		 
		*/
		_stage.removeEventListener("stagemousemove", _onStageMouseMoveMoveActionFunc, false);
		/*
		
		*/
		if(_information.currentCheckpoint > _information.totalCheckpoints)
		{
			_endMoveActionFunc();
		}
	}
	function _onStageMouseMoveMoveActionFunc(event)
	{
		/*
		
		*/
		var currentDate_uint;
		var timeInterval_uint = 20;
		var point_obj;
		var trackMoveContainer;
		var checkpoints_mc;
		var checkpoint_str;
		var checkpoint_mc;
		/*
		
		*/
		if(_information.trackMove == 3)
		{
			timeInterval_uint = 200;
		}
		currentDate_uint = new Date();
		if((currentDate_uint - _information.lastDate_uint) > timeInterval_uint)
		{
			_information.lastDate_uint = currentDate_uint;
			trackMoveContainer = _action_mc.body_mc.getChildByName("trackMoveContainer");
			point_obj = event.currentTarget.localToLocal(event.localX, event.localY, trackMoveContainer);
			if(_information.trackMove == 1)
			{
				trackMoveContainer.graphics.lineTo(point_obj.x, point_obj.y);
				trackMoveContainer.graphics.endStroke();
				trackMoveContainer.graphics.setStrokeStyle(_INDENT, "round").beginStroke("#ff0000");
				trackMoveContainer.graphics.moveTo(point_obj.x, point_obj.y);
			}
			else if(_information.trackMove == 2)
			{
				var trackMove_mc = new lib.TrackMove();
				trackMoveContainer.addChild(trackMove_mc);
				trackMove_mc.x = point_obj.x;
				trackMove_mc.y = point_obj.y;
				trackMove_mc.gotoAndPlay(0);
			}
			else if(_information.trackMove == 3)
			{
				var trackMove_mc = new lib.TrackMove_2();
				trackMoveContainer.addChild(trackMove_mc);
				trackMove_mc.x = point_obj.x;
				trackMove_mc.y = point_obj.y;
				trackMove_mc.gotoAndPlay(0);
				trackMove_mc.alpha = trackMove_mc.scaleX = trackMove_mc.scaleY = Math.random() * (1 - 0.5) + 0.5;
				trackMove_mc.rotation = Math.round(Math.random() * 180);
			}
			else
			{
				
			}
		}
		/*
		
		*/
		checkpoints_mc = _action_mc.body_mc.checkpoints_mc;
		/*
		
		*/
		checkpoint_str = "checkpoint_" + _information.currentCheckpoint;
		/*
		
		*/
		if(checkpoints_mc[checkpoint_str])
		{
			/*
			
			*/
			checkpoint_mc = checkpoints_mc[checkpoint_str];
			/*
			
			*/
			point_obj = event.currentTarget.localToLocal(event.localX, event.localY, checkpoint_mc);
			/*
			
			*/
			if(checkpoint_mc.hitTest(point_obj.x, point_obj.y))
			{
				_information.currentCheckpoint++;
			}
		}
	}
	/*
	
	*/
	function _endMoveActionFunc()
	{
		/*
		
		*/
		if(_currentMainScreen_mc.body_mc.pointer_1)
		{
			_currentMainScreen_mc.body_mc.pointer_1.mouseEnabled = false;
			_currentMainScreen_mc.body_mc.pointer_1.mouseChildren = false;
			_currentMainScreen_mc.body_mc.pointer_1.visible = false;
		}
		/*
		
		*/
		if(_currentMainScreen_mc.body_mc.pointer_2)
		{
			_currentMainScreen_mc.body_mc.pointer_2.mouseEnabled = false;
			_currentMainScreen_mc.body_mc.pointer_2.mouseChildren = false;
			_currentMainScreen_mc.body_mc.pointer_2.visible = false;
		}
		/*
		
		*/
		_action_mc.visible = false;
		/*
		
		*/
		_stage.removeEventListener("stagemousedown", _onStageMouseDownMoveActionFunc, false);
		_stage.removeEventListener("stagemouseup", _onStageMouseUpMoveActionFunc, false);
		/*
		очищаем переменные
		*/
		_information.currentCheckpoint = 0;
		_information.totalCheckpoints = 0;
		_information.lastDate_uint = 0;
		/*
		
		*/
		_completeActionFunc();
	}
	/*
	
	*/
	function _skipMoveActionFunc()
	{
		/*
		
		*/
		_stage.removeEventListener("stagemousedown", _onStageMouseDownMoveActionFunc, false);
		_stage.removeEventListener("stagemouseup", _onStageMouseUpMoveActionFunc, false);
		/*
		очищаем переменные
		*/
		_information.currentCheckpoint = 0;
		_information.totalCheckpoints = 0;
		_information.lastDate_uint = 0;
	}
	/*
	============================================================
	rub action
	============================================================
	*/
	function _beginRubActionFunc()
	{
		/*
		создаём переменные
		*/
		_information.currentCheckpoint = 0;
		_information.totalCheckpoints = 100;
		if(Number(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].firstVar) > 0)
		{
			_information.totalCheckpoints = Math.ceil(Number(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].firstVar));
		}
		_information.lastDate_uint = new Date();
		/*
		
		*/
		if(_currentMainScreen_mc.body_mc.pointer_1)
		{
			_currentMainScreen_mc.body_mc.pointer_1.mouseEnabled = false;
			_currentMainScreen_mc.body_mc.pointer_1.mouseChildren = false;
			_currentMainScreen_mc.body_mc.pointer_1.visible = false;
		}
		/*
		
		*/
		if(_currentMainScreen_mc.body_mc.pointer_2)
		{
			_currentMainScreen_mc.body_mc.pointer_2.mouseEnabled = false;
			_currentMainScreen_mc.body_mc.pointer_2.mouseChildren = false;
			_currentMainScreen_mc.body_mc.pointer_2.visible = false;
		}
		/*
		
		*/
		if(_currentMainScreen_mc.body_mc.hint_mc)
		{
			_currentMainScreen_mc.body_mc.hint_mc.visible = true;
		}
		/*
		
		*/
		if(_currentMainScreen_mc.body_mc[_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].pathObject])
		{
			/*
			
			*/
			_action_mc = _currentMainScreen_mc.body_mc[_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].pathObject];
			_action_mc.gotoAndStop(0);
			/*
			
			*/
			_stage.addEventListener("stagemousemove", _onStageMouseMoveRubActionFunc, false);
		}	
	}
	function _onStageMouseMoveRubActionFunc(event)
	{
		/*
		
		*/
		var timeInterval_uint = 20;
		var currentDate_uint = new Date();
		var point_obj;
		/*
		
		*/
		if((currentDate_uint - _information.lastDate_uint) > timeInterval_uint)
		{
			/*
			
			*/
			_information.lastDate_uint = currentDate_uint;
			/*
			
			*/
			point_obj = event.currentTarget.localToLocal(event.localX, event.localY, _action_mc);
			/*
			
			*/
			if(_action_mc.hitTest(point_obj.x, point_obj.y))
			{
				/*
				
				*/
				var share_num;
				var subject_mc;
				var targetFrame_num;
				/*
				
				*/
				_information.currentCheckpoint++;
				/*
				
				*/
				share_num = _information.currentCheckpoint / _information.totalCheckpoints;
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
				if(_currentMainScreen_mc.body_mc[_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].pathSubject])
				{
					/*
					
					*/
					subject_mc = _currentMainScreen_mc.body_mc[_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].pathSubject];
					/*
					
					*/
					if(subject_mc.totalFrames <= 1)
					{
						subject_mc.alpha = 1 - share_num;
					}
					else
					{
						/*
						
						*/
						targetFrame_num = Math.round(share_num * subject_mc.totalFrames) - 1;
						if(targetFrame_num >= subject_mc.totalFrames)
						{
							targetFrame_num = subject_mc.totalFrames - 1;
						}
						/*
						
						*/
						subject_mc.gotoAndStop(targetFrame_num);
					}
				}
				/*
				
				*/
				_updateIndicatorFunc(share_num);
				/*
				
				*/
				if(_information.currentCheckpoint > _information.totalCheckpoints)
				{
					_endRubActionFunc();
				}
			}
		}
	}
	/*
	
	*/
	function _endRubActionFunc()
	{
		/*
		
		*/
		if(_currentMainScreen_mc.body_mc.pointer_1)
		{
			_currentMainScreen_mc.body_mc.pointer_1.mouseEnabled = false;
			_currentMainScreen_mc.body_mc.pointer_1.mouseChildren = false;
			_currentMainScreen_mc.body_mc.pointer_1.visible = false;
		}
		/*
		
		*/
		if(_currentMainScreen_mc.body_mc.pointer_2)
		{
			_currentMainScreen_mc.body_mc.pointer_2.mouseEnabled = false;
			_currentMainScreen_mc.body_mc.pointer_2.mouseChildren = false;
			_currentMainScreen_mc.body_mc.pointer_2.visible = false;
		}
		/*
		
		*/
		if(_currentMainScreen_mc.body_mc.hint_mc)
		{
			_currentMainScreen_mc.body_mc.hint_mc.visible = false;
		}
		/*
		
		*/
		_stage.removeEventListener("stagemousemove", _onStageMouseMoveRubActionFunc, false);
		/*
		очищаем переменные
		*/
		_information.currentCheckpoint = 0;
		_information.totalCheckpoints = 0;
		_information.lastDate_uint = 0;
		/*
		
		*/
		_completeActionFunc();
	}
	/*
	
	*/
	function _skipRubActionFunc()
	{
		/*
		
		*/
		_stage.removeEventListener("stagemousemove", _onStageMouseMoveRubActionFunc, false);
		/*
		очищаем переменные
		*/
		_information.currentCheckpoint = 0;
		_information.totalCheckpoints = 0;
		_information.lastDate_uint = 0;
	}
	/*
	============================================================
	drag action
	============================================================
	*/
	function _beginDragActionFunc()
	{
		/*
		создаём переменные
		*/
		_information.objects_arr = new Array();
		/*
		
		*/
		var object_str;
		var object_mc;
		var i;
		var l;
		/*
		
		*/
		if(_currentMainScreen_mc.body_mc.pointer_1)
		{
			_currentMainScreen_mc.body_mc.pointer_1.mouseEnabled = false;
			_currentMainScreen_mc.body_mc.pointer_1.mouseChildren = false;
			_currentMainScreen_mc.body_mc.pointer_1.visible = true;
			_updateAnimationPointerFunc(_currentMainScreen_mc.body_mc.pointer_1);
		}
		/*
		
		*/
		if(_currentMainScreen_mc.body_mc.pointer_2)
		{
			_currentMainScreen_mc.body_mc.pointer_2.mouseEnabled = false;
			_currentMainScreen_mc.body_mc.pointer_2.mouseChildren = false;
			_currentMainScreen_mc.body_mc.pointer_2.visible = false;
		}
		/*
		
		*/
		if(_currentMainScreen_mc.body_mc["frame_" + (_currentMainScreen_mc.body_mc.currentFrame + 1) + "_mc"])
		{
			/*
			
			*/
			_action_mc = _currentMainScreen_mc.body_mc["frame_" + (_currentMainScreen_mc.body_mc.currentFrame + 1) + "_mc"];
			_action_mc.gotoAndStop(0);
			/*
			
			*/
			_action_mc.mouseChildren = true;
			_action_mc.mouseEnabled = true;
			/*
			исключение
			*/
			//_action_mc.alpha = 0.01;
			//createjs.Tween.get(_action_mc).wait(0).to({alpha:1}, _DELAY * 1000);
			/*
			
			*/
			if(_action_mc.drags_mc)
			{
				/*
				
				*/
				_action_mc.drags_mc.gotoAndStop(0);
				/*
				
				*/
				_action_mc.drags_mc.x = 0;
				_action_mc.drags_mc.y = 0;
				/*
				
				*/
				i = 0;
				l = _action_mc.drags_mc.numChildren;
				while(i < l)
				{
					/*
					
					*/
					object_str = "part_" + Number(i + 1);
					/*
					
					*/
					if(_action_mc.drags_mc[object_str])
					{
						/*
						
						*/
						_information.objects_arr.push(object_str);
						/*
						
						*/
						object_mc = _action_mc.drags_mc[object_str];
						object_mc.gotoAndStop(0);
						object_mc.loop = false;
						object_mc.name = object_str;
						object_mc.mouseEnabled = true;
						object_mc.mouseChildren = false;
						object_mc.cursor = "pointer";
						object_mc.addEventListener("mousedown", _onMouseDownDragActionFunc, false);
						object_mc.addEventListener("pressmove", _onPressMoveDragActionFunc, false);
						object_mc.addEventListener("pressup", _onPressUpDragActionFunc, false);
						/*
						
						*/
						object_mc.initialX_num = object_mc.x;
						object_mc.initialY_num = object_mc.y;
					}
					else
					{
						trace("Хде " + object_str + " в drags_mc!")
					}
					/*
					
					*/
					i++;
				}
			}
			else
			{
				trace("Хде drags_mc!")
			}
			/*
			
			*/
			if(_action_mc.targets_mc)
			{
				/*
				
				*/
				_action_mc.targets_mc.gotoAndStop(0);
				/*
				
				*/
				_action_mc.targets_mc.x = 0;
				_action_mc.targets_mc.y = 0;
				/*
				
				*/
				i = _information.objects_arr.length - 1;
				while(i >= 0)
				{
					/*
					
					*/
					object_str = _information.objects_arr[i];
					/*
					
					*/
					if(_action_mc.targets_mc[object_str])
					{
						object_mc = _action_mc.targets_mc[object_str];
						object_mc.gotoAndStop(0);
						object_mc.loop = false;
						object_mc.name = object_str;
						object_mc.mouseEnabled = false;
						object_mc.mouseChildren = false;
						object_mc.cursor = "default";
					}
					else
					{
						/*
						
						*/
						_information.objects_arr.splice(i, 1);
						/*
						
						*/
						trace("Хде " + object_str + " в targets_mc!")
					}
					/*
					
					*/
					i--;
				}
			}
			else
			{
				trace("Хде targets_mc!")
			}
			/*
			анимация по-необходимости
			*/
			if(_action_mc.animation_mc)
			{
				_action_mc.animation_mc.gotoAndStop(0);
				_action_mc.animation_mc.mouseEnabled = false;
				_action_mc.animation_mc.mouseChildren = false;
			}
		}
		else
		{
			trace("Хде контейнер мини-игры!")
		}
	}
	/*
	
	*/
	function _onMouseDownDragActionFunc(event)
	{
		/*
		
		*/
		var drag_mc = event.currentTarget;
		drag_mc.targetX_num = event.localX;
		drag_mc.targetY_num = event.localY;
		drag_mc.parent.setChildIndex(drag_mc, drag_mc.parent.numChildren - 1);
		/*
		
		*/
		if(drag_mc.totalFrames >= 2)
		{
			drag_mc.gotoAndStop(1);
		}
		/*
		
		*/
		if(_currentMainScreen_mc.body_mc.pointer_1)
		{
			_currentMainScreen_mc.body_mc.pointer_1.mouseEnabled = false;
			_currentMainScreen_mc.body_mc.pointer_1.mouseChildren = false;
			_currentMainScreen_mc.body_mc.pointer_1.visible = false;
		}
		/*
		
		*/
		if(_currentMainScreen_mc.body_mc.pointer_2)
		{
			_currentMainScreen_mc.body_mc.pointer_2.mouseEnabled = false;
			_currentMainScreen_mc.body_mc.pointer_2.mouseChildren = false;
			_currentMainScreen_mc.body_mc.pointer_2.visible = true;
			_updateAnimationPointerFunc(_currentMainScreen_mc.body_mc.pointer_2);
		}
	}
	function _onPressMoveDragActionFunc(event)
	{
		var drag_mc = event.currentTarget;
		var point_obj = drag_mc.localToLocal(event.localX, event.localY, drag_mc.parent);
		drag_mc.x = point_obj.x - drag_mc.targetX_num;
		drag_mc.y = point_obj.y - drag_mc.targetY_num;
	}
	function _onPressUpDragActionFunc(event)
	{
		/*
		
		*/
		var drag_mc = event.currentTarget;
		var drag_str = drag_mc.name;
		var target_mc;
		var point_obj;
		/*
		
		*/
		if(_action_mc.targets_mc[drag_str])
		{
			/*
			
			*/
			target_mc = _action_mc.targets_mc[drag_str];
			/*
			
			*/
			point_obj = drag_mc.localToLocal(event.localX, event.localY, target_mc);
			/*
			
			*/
			if(target_mc.hitTest(point_obj.x, point_obj.y))
			{
				/*
				
				*/
				drag_mc.mouseEnabled = false;
				drag_mc.mouseChildren = false;
				drag_mc.cursor = "default";
				drag_mc.removeEventListener("mousedown", _onMouseDownDragActionFunc, false);
				drag_mc.removeEventListener("pressmove", _onPressMoveDragActionFunc, false);
				drag_mc.removeEventListener("pressup", _onPressUpDragActionFunc, false);
				/*
				
				*/
				if(drag_mc.totalFrames == 3)
				{
					drag_mc.gotoAndStop(2);
				}
				/*
				
				*/
				point_obj = target_mc.localToLocal(0, 0, drag_mc.parent);
				createjs.Tween.get(drag_mc).wait(0).to({x:point_obj.x, y:point_obj.y}, (_DELAY / 4) * 1000);
				/*
				
				*/
				if(target_mc.totalFrames == 2)
				{
					target_mc.gotoAndStop(1);
				}
				else
				{
					target_mc.play();
				}
				/*
				
				*/
				var i = 0;
				var l = _information.objects_arr.length;
				while(i < l)
				{
					/*
					
					*/
					if(String(drag_str) == String(_information.objects_arr[i]))
					{
						_information.objects_arr.splice(i, 1);
					}
					/*
					
					*/
					i++;
				}
				/*
				
				*/
				point_obj = event.currentTarget.localToLocal(event.localX, event.localY, _stage);
				_soundManager.addSoundFunc("click_sound", 0, 0, 0, 0.05, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
				/*
				анимация по-необходимости
				*/
				if(_action_mc.animation_mc)
				{
					if(_hasLabelInMovieClipFunc(_action_mc.animation_mc, drag_str))
					{
						_action_mc.animation_mc.gotoAndStop(drag_str);
					}
				}
				/*
				
				*/
				if(_information.objects_arr.length <= 0)
				{
					_endDragActionFunc();
				}
			}
			else
			{
				/*
				
				*/
				drag_mc.gotoAndStop(0);
				/*
				
				*/
				createjs.Tween.get(drag_mc).wait(0).to({x:drag_mc.initialX_num, y:drag_mc.initialY_num}, (_DELAY / 2) * 1000);
			}
		}
		else
		{
			/*
			
			*/
			trace("Хде " + drag_str + " в targets_mc!")
			/*
			
			*/
			drag_mc.gotoAndStop(0);
			/*
			
			*/
			createjs.Tween.get(drag_mc).wait(0).to({x:drag_mc.initialX_num, y:drag_mc.initialY_num}, (_DELAY / 2) * 1000);
			/*
			анимация по-необходимости
			*/
			if(_action_mc.animation_mc)
			{
				if(_hasLabelInMovieClipFunc(_action_mc.animation_mc, drag_str))
				{
					_action_mc.animation_mc.gotoAndStop(drag_str);
				}
			}
		}
	}
	/*
	
	*/
	function _endDragActionFunc()
	{
		/*
		
		*/
		if(_currentMainScreen_mc.body_mc.pointer_1)
		{
			_currentMainScreen_mc.body_mc.pointer_1.mouseEnabled = false;
			_currentMainScreen_mc.body_mc.pointer_1.mouseChildren = false;
			_currentMainScreen_mc.body_mc.pointer_1.visible = false;
		}
		/*
		
		*/
		if(_currentMainScreen_mc.body_mc.pointer_2)
		{
			_currentMainScreen_mc.body_mc.pointer_2.mouseEnabled = false;
			_currentMainScreen_mc.body_mc.pointer_2.mouseChildren = false;
			_currentMainScreen_mc.body_mc.pointer_2.visible = false;
		}
		/*
		
		*/
		_action_mc.mouseChildren = false;
		_action_mc.mouseEnabled = false;
		/*
		исключение
		*/
		//createjs.Tween.get(_action_mc).wait(0).to({alpha:0.01}, _DELAY * 1000);
		/*
		очищаем переменные
		*/
		_information.objects_arr = null;
		/*
		
		*/
		_completeActionFunc();
	}
	/*
	
	*/
	function _skipDragActionFunc()
	{
		/*
		
		*/
		_action_mc.mouseChildren = false;
		_action_mc.mouseEnabled = false;
		/*
		
		*/
		var object_mc;
		var object_str;
		var i = 0;
		var l = _information.objects_arr.length;
		while(i < l)
		{
			/*
			
			*/
			object_str = _information.objects_arr[i];
			/*
			
			*/
			if(_action_mc.drags_mc[object_str])
			{
				/*
				
				*/
				object_mc = _action_mc.drags_mc[object_str];
				object_mc.mouseEnabled = false;
				object_mc.mouseChildren = false;
				object_mc.cursor = "default";
				object_mc.removeEventListener("mousedown", _onMouseDownDragActionFunc, false);
				object_mc.removeEventListener("pressmove", _onPressMoveDragActionFunc, false);
				object_mc.removeEventListener("pressup", _onPressUpDragActionFunc, false);
				/*
				
				*/
				object_mc.x = object_mc.initialX_num;
				object_mc.y = object_mc.initialY_num;
			}
			/*
			
			*/
			i++;
		}
		/*
		очищаем переменные
		*/
		_information.objects_arr = null;
	}
	/*
	============================================================
	clicker action
	============================================================
	*/
	function _beginClickerActionFunc()
	{
		/*
		создаём переменные
		*/
		_information.lastDate_uint = new Date();
		_information.currentCheckpoint = 0;
		_information.totalCheckpoints = 100;
		/*
		
		*/
		if(_currentMainScreen_mc.body_mc.pointer_1)
		{
			_currentMainScreen_mc.body_mc.pointer_1.mouseEnabled = false;
			_currentMainScreen_mc.body_mc.pointer_1.mouseChildren = false;
			_currentMainScreen_mc.body_mc.pointer_1.visible = true;
			_updateAnimationPointerFunc(_currentMainScreen_mc.body_mc.pointer_1);
		}
		/*
		
		*/
		if(_currentMainScreen_mc.body_mc.pointer_2)
		{
			_currentMainScreen_mc.body_mc.pointer_2.mouseEnabled = false;
			_currentMainScreen_mc.body_mc.pointer_2.mouseChildren = false;
			_currentMainScreen_mc.body_mc.pointer_2.visible = false;
		}
		/*
		
		*/
		if(_currentMainScreen_mc.body_mc[_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].pathObject])
		{
			/*
			
			*/
			_action_mc = _currentMainScreen_mc.body_mc[_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].pathObject];
			_action_mc.gotoAndStop(0);
			_action_mc.name = _information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].pathObject;
			_action_mc.mouseEnabled = true;
			_action_mc.mouseChildren = false;
			_action_mc.cursor = "pointer";
			_action_mc.addEventListener("click", _onClickObjectClickerActionFunc, false);
			_action_mc.addEventListener("tick", _onTickObjectClickerActionFunc, false);
			/*
			
			*/
			_information.totalCheckpoints = _action_mc.totalFrames;
		}
		else
		{
			trace("Хде " + _information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].pathObject + " !");
		}
	}
	function _onClickObjectClickerActionFunc(event)
	{
		/*
		
		*/
		_information.lastDate_uint = new Date();
		/*
		
		*/
		_information.currentCheckpoint++;
		/*
		
		*/
		_updateIndicatorClickerActionFunc();
		/*
		
		*/
		if(_information.currentCheckpoint >= (_information.totalCheckpoints - 1))
		{
			_endClickerActionFunc();
		}
	}
	function _onTickObjectClickerActionFunc()
	{
		try
		{
			var currentDate_uint = new Date();
			if(((currentDate_uint - _information.lastDate_uint) > 200) && (_information.currentCheckpoint > 0))
			{
				/*
				
				*/
				_information.currentCheckpoint--;
				if(_information.currentCheckpoint < 0)
				{
					_information.currentCheckpoint = 0;
				}
				/*
				
				*/
				_updateIndicatorClickerActionFunc();
			}
		}
		catch(event)
		{
			/*
			
			*/
			trace(event, 1);
			/*
			
			*/
			_action_mc.removeEventListener("tick", _onTickObjectClickerActionFunc, false);
		}
		finally
		{
			
		}
	}
	function _updateIndicatorClickerActionFunc()
	{
		/*
		
		*/
		_action_mc.gotoAndStop(_information.currentCheckpoint);
		/*
		
		*/
		var share_num = _information.currentCheckpoint / (_information.totalCheckpoints - 1);
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
		_updateIndicatorFunc(share_num);
	}
	/*
	
	*/
	function _endClickerActionFunc()
	{
		/*
		
		*/
		if(_currentMainScreen_mc.body_mc.pointer_1)
		{
			_currentMainScreen_mc.body_mc.pointer_1.mouseEnabled = false;
			_currentMainScreen_mc.body_mc.pointer_1.mouseChildren = false;
			_currentMainScreen_mc.body_mc.pointer_1.visible = false;
		}
		/*
		
		*/
		if(_currentMainScreen_mc.body_mc.pointer_2)
		{
			_currentMainScreen_mc.body_mc.pointer_2.mouseEnabled = false;
			_currentMainScreen_mc.body_mc.pointer_2.mouseChildren = false;
			_currentMainScreen_mc.body_mc.pointer_2.visible = false;
		}
		/*
		
		*/
		_action_mc.mouseEnabled = false;
		_action_mc.mouseChildren = false;
		_action_mc.cursor = "default";
		_action_mc.removeEventListener("click", _onClickObjectClickerActionFunc, false);
		_action_mc.removeEventListener("tick", _onTickObjectClickerActionFunc, false);
		/*
		очищаем переменные
		*/
		_information.lastDate_uint = null;
		_information.currentCheckpoint = null;
		_information.totalCheckpoints = null;
		/*
		
		*/
		_completeActionFunc();
	}
	/*
	
	*/
	function _skipClickerActionFunc()
	{
		/*
		
		*/
		_action_mc.mouseEnabled = false;
		_action_mc.mouseChildren = false;
		_action_mc.cursor = "default";
		_action_mc.removeEventListener("click", _onClickObjectClickerActionFunc, false);
		_action_mc.removeEventListener("tick", _onTickObjectClickerActionFunc, false);
		/*
		очищаем переменные
		*/
		_information.lastDate_uint = null;
		_information.currentCheckpoint = null;
		_information.totalCheckpoints = null;
	}
	/*
	============================================================
	dressup action
	============================================================
	*/
	function _beginDressupActionFunc()
	{
		/*
		
		*/
		_information.counterClick_uint = Math.ceil(Number(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].firstVar));
		/*
		
		*/
		var heroes_arr = new Array();
		/*
		
		*/
		if(_currentMainScreen_mc.body_mc.pointer_1)
		{
			_currentMainScreen_mc.body_mc.pointer_1.mouseEnabled = false;
			_currentMainScreen_mc.body_mc.pointer_1.mouseChildren = false;
			_currentMainScreen_mc.body_mc.pointer_1.visible = false;
		}
		/*
		
		*/
		if(_currentMainScreen_mc.body_mc.pointer_2)
		{
			_currentMainScreen_mc.body_mc.pointer_2.mouseEnabled = false;
			_currentMainScreen_mc.body_mc.pointer_2.mouseChildren = false;
			_currentMainScreen_mc.body_mc.pointer_2.visible = false;
		}
		/*
		листать шкаф с первого кадра
		*/
		_startFromFirstFrameDressupActionFunc();
		/*
		
		*/
		if(_currentMainScreen_mc.body_mc["frame_" + (_currentMainScreen_mc.body_mc.currentFrame + 1) + "_mc"])
		{
			/*
			
			*/
			_action_mc = _currentMainScreen_mc.body_mc["frame_" + (_currentMainScreen_mc.body_mc.currentFrame + 1) + "_mc"];
			_action_mc.gotoAndStop(0);
			/*
			
			*/
			for(var propHeroes in _information.heroes)
			{
				if(_information.heroes.hasOwnProperty(propHeroes))
				{
					if(_action_mc[propHeroes])
					{
						if(_action_mc[propHeroes])
						{
							heroes_arr.unshift(propHeroes);
						}
						else
						{
							heroes_arr.push(propHeroes);
						}
					}
				}
			}
			/*
			
			*/
			if(heroes_arr.length > 0)
			{
				/*
				исключение...
				*/
				//_information.currentNameHero = heroes_arr[0];
				/*
				
				*/
				if(_action_mc.dressupPanel_mc)
				{
					/*
					
					*/
					_action_mc.dressupPanel_mc.gotoAndStop(0);
					_action_mc.dressupPanel_mc.body_mc.gotoAndStop(0);
					/*
					
					*/
					_action_mc.dressupPanel_mc.prev_mc.mouseEnabled = true;
					_action_mc.dressupPanel_mc.prev_mc.mouseChildren = false;
					_action_mc.dressupPanel_mc.prev_mc.cursor = "pointer";
					_action_mc.dressupPanel_mc.prev_mc.addEventListener("mouseover", _onMouseOverNavigationMcDressupActionFunc, false);
					_action_mc.dressupPanel_mc.prev_mc.addEventListener("mouseout", _onMouseOutNavigationMcDressupActionFunc, false);
					_action_mc.dressupPanel_mc.prev_mc.addEventListener("click", _onClickPrevNavigationMcDressupActionFunc, false);
					_action_mc.dressupPanel_mc.next_mc.mouseEnabled = true;
					_action_mc.dressupPanel_mc.next_mc.mouseChildren = false;
					_action_mc.dressupPanel_mc.next_mc.cursor = "pointer";
					_action_mc.dressupPanel_mc.next_mc.addEventListener("mouseover", _onMouseOverNavigationMcDressupActionFunc, false);
					_action_mc.dressupPanel_mc.next_mc.addEventListener("mouseout", _onMouseOutNavigationMcDressupActionFunc, false);
					_action_mc.dressupPanel_mc.next_mc.addEventListener("click", _onClickNextNavigationMcDressupActionFunc, false);
					/*
					
					*/
					//_updateHeroesFunc(_action_mc, true, true);
					_updateHeroesFunc(_action_mc, true, false);
					/*
					
					*/
					_updateSelectHeroDressupActionFunc();
					/*
					
					*/
					_updatePanelDressupActionFunc();
					/*
					
					*/
					_hideNextBtnDressupActionFunc();
				}
			}
			else
			{
				trace("Хде герой!")
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
					timelineControl.addEventListener("completed_timeline", _onMidActionMcDressupActionFunc, false);
				}
				else
				{
					trace("Вижу анимацию, но не вижу Label!")
				}
			}
		}
		else
		{
			trace("Хде контейнер мини-игры!")
		}
	}
	function _onMidActionMcDressupActionFunc(event)
	{
		
	}
	/*
	листать шкаф с первого кадра
	*/
	function _startFromFirstFrameDressupActionFunc()
	{
		for(var propHeroes in _information.heroes)
		{
			if(_information.heroes.hasOwnProperty(propHeroes))
			{
				for(var propSets in _information.heroes[propHeroes].totalSets)
				{
					if(_information.heroes[propHeroes].totalSets.hasOwnProperty(propSets))
					{
						_information.heroes[propHeroes].totalSets[propSets].currentIndex = 0;
					}
				}
			}
		}
	}
	/*
	
	*/
	function _updateSelectHeroDressupActionFunc()
	{
		/*
		
		*/
		var hero_mc;
		/*
		
		*/
		for(var propHero in _information.heroes)
		{
			if(_information.heroes.hasOwnProperty(propHero))
			{
				if(_action_mc[propHero])
				{
					/*
					
					*/
					hero_mc = _action_mc[propHero];
					hero_mc.name = propHero;
					/*
					
					*/
					if(propHero === _information.currentNameHero)
					{
						/*
						
						*/
						hero_mc.mouseEnabled = false;
						hero_mc.mouseChildren = false;
						hero_mc.cursor = "default";
						hero_mc.removeEventListener("click", _onClickHeroDressupActionFunc, false);
						//new Edapskov_Glow(hero_mc, _DELAY / 2, "#ffffff", 20);
						/*
						
						*/
						if(hero_mc.check_mc)
						{
							hero_mc.check_mc.gotoAndStop(0);
							if(hero_mc.check_mc.totalFrames > 1)
							{
								hero_mc.check_mc.gotoAndStop(1);
							}
						}
					}
					else
					{
						/*
						
						*/
						hero_mc.mouseEnabled = true;
						hero_mc.mouseChildren = false;
						hero_mc.cursor = "pointer";
						hero_mc.addEventListener("click", _onClickHeroDressupActionFunc, false);
						//new Edapskov_Glow(hero_mc, _DELAY / 4, "#ffffff", 0);
						/*
						
						*/
						if(hero_mc.check_mc)
						{
							hero_mc.check_mc.gotoAndStop(0);
						}
					}
				}
			}
		}
	}
	function _onClickHeroDressupActionFunc(event)
	{
		/*
		
		*/
		var currentTarget_mc = event.currentTarget;
		/*
		
		*/
		var point_obj = currentTarget_mc.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_2_sound", 0, 0, 0, 0.2, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		_information.currentNameHero = String(currentTarget_mc.name);
		/*
		
		*/
		_updateSelectHeroDressupActionFunc();
		/*
		
		*/
		_updatePanelDressupActionFunc();
		//_animationTransitionPanelDressupActionFunc();
	}
	/*
	
	*/
	function _animationTransitionPanelDressupActionFunc()
	{
		createjs.Tween.get(_action_mc.dressupPanel_mc.body_mc).wait(0).to({alpha:0.1}, (_DELAY / 5) * 1000).call(_onCompleteAnimationTransitionPanelDressupActionFunc);
	}
	function _onCompleteAnimationTransitionPanelDressupActionFunc()
	{
		/*
		
		*/
		createjs.Tween.get(_action_mc.dressupPanel_mc.body_mc).wait(0).to({alpha:1}, (_DELAY / 4) * 1000);
		/*
		
		*/
		_updatePanelDressupActionFunc();
	}
	function _updatePanelDressupActionFunc()
	{
		/*
		
		*/
		var set_mc;
		var hero_mc;
		/*
		
		*/
		for(var propSet in _information.heroes[_information.currentNameHero].totalSets)
		{
			if(_information.heroes[_information.currentNameHero].totalSets.hasOwnProperty(propSet))
			{
				if(_action_mc.dressupPanel_mc[propSet])
				{
					/*
					
					*/
					set_mc = _action_mc.dressupPanel_mc[propSet];
					set_mc.gotoAndStop(0);
					set_mc.name = propSet;
					/*
					
					*/
					if(propSet === _information.heroes[_information.currentNameHero].currentSet)
					{
						/*
						
						*/
						//set_mc.shadow = null;
						//set_mc.alpha = 0.4;
						set_mc.mouseEnabled = false;
						set_mc.mouseChildren = false;
						set_mc.cursor = "default";
						set_mc.removeEventListener("mouseover", _onMouseOverSetMcDressupActionFunc, false);
						set_mc.removeEventListener("mouseout", _onMouseOutSetMcDressupActionFunc, false);
						set_mc.removeEventListener("click", _onClickSetMcDressupActionFunc, false);
						/*
						
						*/
						if(set_mc.substrate_mc)
						{
							set_mc.substrate_mc.gotoAndStop(0);
							if(set_mc.substrate_mc.totalFrames > 1)
							{
								set_mc.substrate_mc.gotoAndStop(1);
							}
						}
						/*
						
						*/
						if(set_mc.check_mc)
						{
							set_mc.check_mc.gotoAndStop(0);
							if(set_mc.check_mc.totalFrames > 1)
							{
								set_mc.check_mc.gotoAndStop(1);
							}
						}
						else
						{
							set_mc.alpha = 0.4;
						}
					}
					else
					{
						/*
						
						*/
						//set_mc.alpha = 1;
						set_mc.mouseEnabled = true;
						set_mc.mouseChildren = false;
						set_mc.cursor = "pointer";
						set_mc.addEventListener("mouseover", _onMouseOverSetMcDressupActionFunc, false);
						set_mc.addEventListener("mouseout", _onMouseOutSetMcDressupActionFunc, false);
						set_mc.addEventListener("click", _onClickSetMcDressupActionFunc, false);
						/*
						
						*/
						if(set_mc.substrate_mc)
						{
							set_mc.substrate_mc.gotoAndStop(0);
						}
						/*
						
						*/
						if(set_mc.check_mc)
						{
							set_mc.check_mc.gotoAndStop(0);
						}
						else
						{
							set_mc.alpha = 1;
						}
					}
				}
			}
		}
		/*
		
		*/
		for(var propHero in _information.heroes)
		{
			if(_information.heroes.hasOwnProperty(propHero))
			{
				if(_action_mc.dressupPanel_mc.body_mc[propHero])
				{
					/*
					
					*/
					hero_mc = _action_mc.dressupPanel_mc.body_mc[propHero];
					hero_mc.name = propHero;
					/*
					
					*/
					if(propHero === _information.currentNameHero)
					{
						/*
						
						*/
						hero_mc.visible = true;
						hero_mc.gotoAndStop(_information.heroes[_information.currentNameHero].totalSets[_information.heroes[_information.currentNameHero].currentSet].frames[_information.heroes[_information.currentNameHero].totalSets[_information.heroes[_information.currentNameHero].currentSet].currentIndex] - 1);
						/*
						
						*/
						if(_information.heroes[_information.currentNameHero].totalSets[_information.heroes[_information.currentNameHero].currentSet].frames.length <= 1)
						{
							_action_mc.dressupPanel_mc.prev_mc.visible = false;
							_action_mc.dressupPanel_mc.next_mc.visible = false;
						}
						else
						{
							_action_mc.dressupPanel_mc.prev_mc.visible = true;
							_action_mc.dressupPanel_mc.next_mc.visible = true;
						}
						/*
						
						*/
						_updateCurrentOptionsDressupActionFunc();
					}
					else
					{
						hero_mc.visible = false;
					}
				}
			}
		}
	}
	function _updateCurrentOptionsDressupActionFunc()
	{
		/*
		
		*/
		var hero_mc;
		var object_mc;
		var object_str;
		var bounds_rect;
		var filter_obj = new createjs.ColorMatrixFilter([0.30, 0.30, 0.30, 0, 0, 0.30, 0.30, 0.30, 0, 0, 0.30, 0.30, 0.30, 0, 0, 0, 0, 0, 1, 0]);
		//var filter_obj = new createjs.ColorMatrixFilter([0.39, 0.77, 0.19, 0, 0, 0.35, 0.68, 0.17, 0, 0, 0.27, 0.53, 0.13, 0, 0, 0, 0, 0, 1, 0]);
		/*
		
		*/
		if(_action_mc.dressupPanel_mc.body_mc[_information.currentNameHero])
		{
			/*
			
			*/
			hero_mc = _action_mc.dressupPanel_mc.body_mc[_information.currentNameHero];
			/*
			
			*/
			for(var propObject in _information.heroes[_information.currentNameHero].totalDress)
			{
				if(_information.heroes[_information.currentNameHero].totalDress.hasOwnProperty(propObject))
				{
					/*
					
					*/
					if(hero_mc[propObject])
					{
						/*
						
						*/
						object_mc = hero_mc[propObject];
						object_mc.gotoAndStop(0);
						object_mc.name = propObject;
						/*
						Rewarded ads
						*/
						if(object_mc.rewards_mc)
						{
							object_mc.rewards_mc.gotoAndStop(0);
							if(_information.heroes[_information.currentNameHero].totalDress[propObject].rewarded)
							{
								object_mc.rewards_mc.visible = true;
							}
							else
							{
								object_mc.rewards_mc.visible = false;
							}
						}
						/*
						
						*/
						/*
						if(object_mc.bitmapCache)
						{
							object_mc.updateCache();
						}
						else
						{
							bounds_rect = object_mc.getBounds();
							object_mc.cache(bounds_rect.x, bounds_rect.y, bounds_rect.width, bounds_rect.height);
						}
						*/
						/*
						
						*/
						if(_selectedOptionDressupActionFunc(propObject))
						{
							/*
							
							*/
							//object_mc.shadow = null;
							//object_mc.alpha = 0.4;
							object_mc.mouseEnabled = false;
							object_mc.mouseChildren = false;
							object_mc.cursor = "default";
							object_mc.removeEventListener("mouseover", _onMouseOverObjectMcDressupActionFunc, false);
							object_mc.removeEventListener("mouseout", _onMouseOutObjectMcDressupActionFunc, false);
							object_mc.removeEventListener("click", _onClickObjectMcDressupActionFunc, false);
							/*
							
							*/
							if(object_mc.substrate_mc)
							{
								object_mc.substrate_mc.gotoAndStop(0);
								if(object_mc.substrate_mc.totalFrames > 1)
								{
									object_mc.substrate_mc.gotoAndStop(1);
								}
							}
							/*
							
							*/
							if(object_mc.check_mc)
							{
								object_mc.check_mc.gotoAndStop(0);
								object_mc.check_mc.mouseChildren = false;
								object_mc.check_mc.mouseEnabled = false;
								object_mc.alpha = 1;
								if(object_mc.check_mc.totalFrames > 1)
								{
									object_mc.check_mc.gotoAndStop(1);
								}
							}
							else
							{
								/*
								или прозрачность, или видимость, или фильтр
								*/
								//object_mc.visible = false;
								//object_mc.alpha = 0.4;
								object_mc.alpha = 0.6;
								object_mc.filters = [filter_obj];
								bounds_rect = object_mc.getBounds();
								if(object_mc.bitmapCache)
								{
									object_mc.updateCache();
								}
								else
								{
									object_mc.cache(bounds_rect.x, bounds_rect.y, bounds_rect.width, bounds_rect.height);
								}
							}
						}
						else
						{
							/*
							
							*/
							//object_mc.filters = [];
							//object_mc.alpha = 1;
							object_mc.mouseEnabled = true;
							object_mc.mouseChildren = false;
							object_mc.cursor = "pointer";
							object_mc.addEventListener("mouseover", _onMouseOverObjectMcDressupActionFunc, false);
							object_mc.addEventListener("mouseout", _onMouseOutObjectMcDressupActionFunc, false);
							object_mc.addEventListener("click", _onClickObjectMcDressupActionFunc, false);
							/*
							
							*/
							if(object_mc.substrate_mc)
							{
								object_mc.substrate_mc.gotoAndStop(0);
							}
							/*
							
							*/
							if(object_mc.check_mc)
							{
								object_mc.check_mc.gotoAndStop(0);
								object_mc.check_mc.mouseChildren = false;
								object_mc.check_mc.mouseEnabled = false;
								object_mc.alpha = 1;
							}
							else
							{
								/*
								или прозрачность, или видимость, или фильтр
								*/
								//object_mc.visible = true;
								//object_mc.alpha = 1;
								object_mc.uncache();
								object_mc.alpha = 1;
							}
						}
					}
				}
			}
			/*
			
			*/
			for(var propObject_2 in _information.heroes[_information.currentNameHero].currentDress)
			{
				if(_information.heroes[_information.currentNameHero].currentDress.hasOwnProperty(propObject_2))
				{
					/*
					
					*/
					object_str = "color_" + propObject_2;
					/*
					
					*/
					if(hero_mc[object_str])
					{
						/*
						
						*/
						object_mc = hero_mc[object_str];
						object_mc.name = object_str;
						object_mc.gotoAndStop(0);
						/*
						
						*/
						if(object_mc.numChildren <= 1)
						{
							object_mc.mouseChildren = false;
							object_mc.mouseEnabled = true;
							object_mc.cursor = "pointer";
							object_mc.addEventListener("click", _onClickColorPickerMcDressupActionFunc, false);
						}
						else
						{
							/*
							
							*/
							object_mc.mouseChildren = true;
							object_mc.mouseEnabled = true;
							object_mc.cursor = "default";
							/*
							
							*/
							_updateAvailableColorPickersDressupActionFunc(object_mc, _information.heroes[_information.currentNameHero].currentDress[propObject_2].currentColor);
						}
					}
					/*
					
					*/
					object_str = "texture_" + propObject_2;
					/*
					
					*/
					if(hero_mc[object_str])
					{
						/*
						
						*/
						object_mc = hero_mc[object_str];
						object_mc.gotoAndStop(0);
						object_mc.name = object_str;
						/*
						
						*/
						/*
						if(object_mc.body_mc)
						{
							_updateAvailableTextureDressupActionFunc(object_mc.body_mc, _information.heroes[_information.currentNameHero].currentDress[propObject_2].currentTexture);
						}
						*/
						if(object_mc.container_mc)
						{
							if(object_mc.container_mc.content_mc)
							{
								_updateAvailableTextureDressupActionFunc(object_mc.container_mc.content_mc, _information.heroes[_information.currentNameHero].currentDress[propObject_2].currentTexture);
							}
						}
						/*
						
						*/
						if(object_mc.slider_comp)
						{
							object_mc.slider_comp.gotoAndStop(0);
							object_mc.slider_comp.setValueFunc(_information.heroes[_information.currentNameHero].currentDress[propObject_2].currentAlphaTexture);
							object_mc.slider_comp.addEventListener("change_slider", _onChangeSliderAlphaTextureDressupActionFunc, false);
						}
					}
				}
			}
		}
	}
	function _updateAvailableColorPickersDressupActionFunc(container_mc, currentColor_num)
	{
		/*
		
		*/
		container_mc.gotoAndStop(0);
		/*
		
		*/
		if(currentColor_num !== undefined)
		{
			if(currentColor_num !== null)
			{
				currentColor_num = Math.round(currentColor_num);
			}
			else
			{
				currentColor_num = 0;
			}
		}
		else
		{
			currentColor_num = 0;
		}
		/*
		
		*/
		var colorPicker_str;
		var colorPicker_mc;
		var l = container_mc.numChildren;
		var i = 0;
		/*
		
		*/
		while(i < l)
		{
			/*
			
			*/
			colorPicker_str = "color_" + i;
			/*
			
			*/
			if(container_mc[colorPicker_str])
			{
				/*
				
				*/
				colorPicker_mc = container_mc[colorPicker_str];
				colorPicker_mc.gotoAndStop(0);
				colorPicker_mc.name = colorPicker_str;
				/*
				
				*/
				if(i == currentColor_num)
				{
					colorPicker_mc.alpha = 0.4;
					colorPicker_mc.mouseChildren = false;
					colorPicker_mc.mouseEnabled = false;
					colorPicker_mc.cursor = "default";
					colorPicker_mc.removeEventListener("click", _onClickColorPickersMcDressupActionFunc, false);
				}
				else
				{
					colorPicker_mc.alpha = 1;
					colorPicker_mc.mouseChildren = false;
					colorPicker_mc.mouseEnabled = true;
					colorPicker_mc.cursor = "pointer";
					colorPicker_mc.addEventListener("click", _onClickColorPickersMcDressupActionFunc, false);
				}
			}
			/*
			
			*/
			i++;
		}
	}
	function _updateAvailableTextureDressupActionFunc(container_mc, currentTexture_num)
	{
		/*
		
		*/
		container_mc.gotoAndStop(0);
		/*
		
		*/
		if(currentTexture_num !== undefined)
		{
			if(currentTexture_num !== null)
			{
				currentTexture_num = Math.round(currentTexture_num);
			}
			else
			{
				currentTexture_num = 0;
			}
		}
		else
		{
			currentTexture_num = 0;
		}
		/*
		
		*/
		var texture_str;
		var texture_mc;
		var l = container_mc.numChildren;
		var i = 0;
		/*
		
		*/
		while(i < l)
		{
			/*
			
			*/
			texture_str = "texture_" + i;
			/*
			
			*/
			if(container_mc[texture_str])
			{
				/*
				
				*/
				texture_mc = container_mc[texture_str];
				texture_mc.gotoAndStop(0);
				texture_mc.name = texture_str;
				/*
				
				*/
				if(i == currentTexture_num)
				{
					texture_mc.alpha = 0.4;
					texture_mc.mouseChildren = false;
					texture_mc.mouseEnabled = false;
					texture_mc.cursor = "default";
					texture_mc.removeEventListener("click", _onClickTextureMcDressupActionFunc, false);
				}
				else
				{
					texture_mc.alpha = 1;
					texture_mc.mouseChildren = false;
					texture_mc.mouseEnabled = true;
					texture_mc.cursor = "pointer";
					texture_mc.addEventListener("click", _onClickTextureMcDressupActionFunc, false);
				}
			}
			/*
			
			*/
			i++;
		}
	}
	function _selectedOptionDressupActionFunc(currentOption_str)
	{
		/*
		
		*/
		var result_bool = false;
		/*
		
		*/
		var temp_arr = currentOption_str.split("_");
		var option_str = String(temp_arr[0]);
		var option_num = parseInt(temp_arr[1]);
		/*
		
		*/
		if(_information.heroes[_information.currentNameHero].currentDress.hasOwnProperty(option_str))
		{
			if(_information.heroes[_information.currentNameHero].currentDress[option_str].currentOption == option_num)
			{
				result_bool = true;
			}
		}
		/*
		
		*/
		return result_bool;
	}
	/*
	
	*/
	function _onMouseOverObjectMcDressupActionFunc(event)
	{
		//var currentTarget_mc = event.currentTarget;
		//createjs.Tween.get(currentTarget_mc).wait(0).to({scaleX:1.06, scaleY:1.06}, (_DELAY / 5) * 1000);
		//new Edapskov_Glow(currentTarget_mc, _DELAY / 5, "#ffffff", 15);
	}
	function _onMouseOutObjectMcDressupActionFunc(event)
	{
		//var currentTarget_mc = event.currentTarget;
		//createjs.Tween.get(currentTarget_mc).wait(0).to({scaleX:1, scaleY:1}, (_DELAY / 3) * 1000);
		//new Edapskov_Glow(currentTarget_mc, _DELAY / 3, "#ffffff", 0);
	}
	function _onClickObjectMcDressupActionFunc(event)
	{
		/*
		
		*/
		var currentTarget_mc = event.currentTarget;
		var currentTarget_str = currentTarget_mc.name;
		/*
		
		*/
		var point_obj = currentTarget_mc.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_2_sound", 0, 0, 0, 0.2, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		//createjs.Tween.get(currentTarget_mc).wait(0).to({scaleX:1, scaleY:1}, (_DELAY / 3) * 1000);
		//new Edapskov_Glow(currentTarget_mc, _DELAY / 3, "#ffffff", 0);
		/*
		
		*/
		if(_information.heroes[_information.currentNameHero].totalDress[currentTarget_str].rewarded)
		{
			/*
			Rewarded ads
			*/
			_information.rewardHero = _information.currentNameHero;
			_information.rewardObject = currentTarget_str;
			/*
			
			*/
			try
			{
				if (typeof gdsdk !== 'undefined' && gdsdk.showAd !== 'undefined')
				{
					/*
					
					*/
					rewardedAds_bool = true;
					/*
					
					*/
					gdsdk.showAd('rewarded');
				}
				else
				{
					this.showAntiBlockingAdsFunc();
				}
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
		else
		{
			_updateObjectMcDressupActionFunc(_information.currentNameHero, currentTarget_str);
		}
	}
	function _updateObjectMcDressupActionFunc(hero_str, object_str)
	{
		/*
		
		*/
		_information.heroes[hero_str].totalDress[object_str].rewarded = false;
		/*
		
		*/
		var tempArray = object_str.split("_");
		var key = String(tempArray[0]);
		var val = parseInt(tempArray[1]);
		/*
		
		*/
		if(_information.heroes[hero_str].currentDress[key].currentOption != val)
		{
			/*
			
			*/
			_information.heroes[hero_str].currentDress[key].currentOption = val;
			/*
			
			*/
			if(key == "bg")
			{
				for(var propHero_1 in _information.heroes)
				{
					if(_information.heroes.hasOwnProperty(propHero_1))
					{
						_information.heroes[propHero_1].currentDress[key].currentOption = val;
					}
				}
			}
			else
			{
				if(key == "top")
				{
					if(val > 0)
					{
						if(_information.heroes[hero_str].currentDress.hasOwnProperty("dress"))
						{
							_information.heroes[hero_str].currentDress.dress.currentOption = 0;
						}
						if(_information.heroes[hero_str].currentDress.hasOwnProperty("bottom"))
						{
							if(_information.heroes[hero_str].currentDress.bottom.currentOption <= 0)
							{
								_information.heroes[hero_str].currentDress.bottom.currentOption = 1;
							}
						}
					}
					else
					{
						if(_information.heroes[hero_str].currentDress.hasOwnProperty("dress"))
						{
							_information.heroes[hero_str].currentDress.dress.currentOption = 1;
						}
						if(_information.heroes[hero_str].currentDress.hasOwnProperty("bottom"))
						{
							_information.heroes[hero_str].currentDress.bottom.currentOption = 0;
						}
					}
				}
				if(key == "bottom")
				{
					if(val > 0)
					{
						if(_information.heroes[hero_str].currentDress.hasOwnProperty("dress"))
						{
							_information.heroes[hero_str].currentDress.dress.currentOption = 0;
						}
						if(_information.heroes[hero_str].currentDress.hasOwnProperty("top"))
						{
							if(_information.heroes[hero_str].currentDress.top.currentOption <= 0)
							{
								_information.heroes[hero_str].currentDress.top.currentOption = 1;
							}
						}
					}
					else
					{
						if(_information.heroes[hero_str].currentDress.hasOwnProperty("dress"))
						{
							_information.heroes[hero_str].currentDress.dress.currentOption = 1;
						}
						if(_information.heroes[hero_str].currentDress.hasOwnProperty("top"))
						{
							_information.heroes[hero_str].currentDress.top.currentOption = 0;
						}
					}
				}
				if(key == "dress")
				{
					if(val > 0)
					{
						if(_information.heroes[hero_str].currentDress.hasOwnProperty("top"))
						{
							_information.heroes[hero_str].currentDress.top.currentOption = 0;
						}
						if(_information.heroes[hero_str].currentDress.hasOwnProperty("bottom"))
						{
							_information.heroes[hero_str].currentDress.bottom.currentOption = 0;
						}
					}
					else
					{
						if(_information.heroes[hero_str].currentDress.hasOwnProperty("top"))
						{
							_information.heroes[hero_str].currentDress.top.currentOption = 1;
						}
						if(_information.heroes[hero_str].currentDress.hasOwnProperty("bottom"))
						{
							_information.heroes[hero_str].currentDress.bottom.currentOption = 1;
						}
					}
				}
			}
			/*
			
			*/
			//_updateHeroesFunc(_action_mc, true, true);
			_updateHeroesFunc(_action_mc, true, false);
			/*
			
			*/
			_updateCurrentOptionsDressupActionFunc();
			/*
			
			*/
			if(key != "bg")
			{
				new Edapskov_Flickering(_before, _action_mc[hero_str][key], ["#ffff00", "#ffcc00"], 10, 18);
				//new Edapskov_Flickering(_before, _action_mc[hero_str][key], ["#ffffff", "#ffffcc"], 6, 24, 1, "Glitter_2");
			}
			/*
			
			*/
			_information.counterClick_uint--;
			if(_information.counterClick_uint <= 0)
			{
				_showNextBtnDressupActionFunc();
			}
		}
	}
	/*
	
	*/
	function _onClickColorPickerMcDressupActionFunc(event)
	{
		/*
		
		*/
		var colorPicker_mc = event.currentTarget;
		var current_str = colorPicker_mc.name.split("_")[1];
		/*
		
		*/
		var colorPicker_img = colorPicker_mc.getChildAt(0);
		var clone_img = colorPicker_img.clone();
		var bounds_rect = clone_img.getBounds();
		clone_img.cache(bounds_rect.x, bounds_rect.y, bounds_rect.width, bounds_rect.height);
		var bitmapdata = createjs.BitmapData.getBitmapData(clone_img);
		/*
		
		*/
		if(_information.heroes[_information.currentNameHero].currentDress.hasOwnProperty(current_str))
		{
			/*
			
			*/
			_information.heroes[_information.currentNameHero].currentDress[current_str].currentColor = bitmapdata.getPixel(event.localX, event.localY);
			/*
			
			*/
			//_updateHeroesFunc(_action_mc, true, true);
			_updateHeroesFunc(_action_mc, true, false);
			/*
			
			*/
			//_showNextBtnDressupActionFunc();
		}
	}
	function _onClickColorPickersMcDressupActionFunc(event)
	{
		/*
		
		*/
		var colorPicker_mc = event.currentTarget;
		var current_str = colorPicker_mc.parent.name.split("_")[1];
		var color_num = parseInt(colorPicker_mc.name.split("_")[1]);
		/*
		
		*/
		if(_information.heroes[_information.currentNameHero].currentDress.hasOwnProperty(current_str))
		{
			/*
			
			*/
			_information.heroes[_information.currentNameHero].currentDress[current_str].currentColor = color_num;
			/*
			
			*/
			//_updateHeroesFunc(_action_mc, true, true);
			_updateHeroesFunc(_action_mc, true, false);
			/*
			
			*/
			_updateAvailableColorPickersDressupActionFunc(colorPicker_mc.parent, color_num);
			/*
			
			*/
			//_showNextBtnDressupActionFunc();
		}
	}
	/*
	
	*/
	function _onClickTextureMcDressupActionFunc(event)
	{
		/*
		
		*/
		var texture_mc = event.currentTarget;
		//var current_str = texture_mc.parent.parent.name.split("_")[1];
		var current_str = texture_mc.parent.parent.parent.name.split("_")[1];
		var texture_num = parseInt(texture_mc.name.split("_")[1]);
		/*
		
		*/
		if(_information.heroes[_information.currentNameHero].currentDress.hasOwnProperty(current_str))
		{
			/*
			
			*/
			_information.heroes[_information.currentNameHero].currentDress[current_str].currentTexture = texture_num;
			/*
			
			*/
			//_updateHeroesFunc(_action_mc, true, true);
			_updateHeroesFunc(_action_mc, true, false);
			/*
			
			*/
			_updateAvailableTextureDressupActionFunc(texture_mc.parent, texture_num);
			/*
			
			*/
			//_showNextBtnDressupActionFunc();
		}
	}
	/*
	
	*/
	function _onChangeSliderAlphaTextureDressupActionFunc(event)
	{
		/*
		
		*/
		var currentTarget_mc = event.currentTarget;
		var current_str = currentTarget_mc.parent.name.split("_")[1];
		/*
		
		*/
		var alphaTexture_num = event.numberValue;
		if(alphaTexture_num < 0.1)
		{
			alphaTexture_num = 0.1;
		}
		if(alphaTexture_num > 1)
		{
			alphaTexture_num = 1;
		}
		/*
		
		*/
		if(_information.heroes[_information.currentNameHero].currentDress.hasOwnProperty(current_str))
		{
			/*
			
			*/
			_information.heroes[_information.currentNameHero].currentDress[current_str].currentAlphaTexture = alphaTexture_num;
			/*
			
			*/
			//_updateHeroesFunc(_action_mc, true, true);
			_updateHeroesFunc(_action_mc, true, false);
		}
	}
	/*
	
	*/
	function _onMouseOverSetMcDressupActionFunc(event)
	{
		/*
		var currentTarget_mc = event.currentTarget;
		createjs.Tween.get(currentTarget_mc).wait(0).to({scaleX:1.1, scaleY:1.1}, (_DELAY / 5) * 1000);
		new Edapskov_Glow(currentTarget_mc, _DELAY / 5, "#ffffff", 5);
		*/
	}
	function _onMouseOutSetMcDressupActionFunc(event)
	{
		/*
		var currentTarget_mc = event.currentTarget;
		createjs.Tween.get(currentTarget_mc).wait(0).to({scaleX:1, scaleY:1}, (_DELAY / 3) * 1000);
		new Edapskov_Glow(currentTarget_mc, _DELAY / 3, "#ffffff", 0);
		*/
	}
	function _onClickSetMcDressupActionFunc(event)
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
		//createjs.Tween.get(currentTarget_mc).wait(0).to({scaleX:1, scaleY:1}, (_DELAY / 3) * 1000);
		//new Edapskov_Glow(currentTarget_mc, _DELAY / 3, "#ffffff", 0);
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
		new Edapskov_Flickering(_before, currentTarget_mc, ["#ffff00", "#ffcc00"], 4, 18);
		//new Edapskov_Flickering(_before, currentTarget_mc, ["#ffffff", "#ffffcc"], 6, 24, 1, "Glitter_2");
		/*
		
		*/
		_information.heroes[_information.currentNameHero].currentSet = currentTarget_mc.name;
		/*
		
		*/
		_updatePanelDressupActionFunc();
		//_animationTransitionPanelDressupActionFunc();
	}
	/*
	
	*/
	function _onMouseOverNavigationMcDressupActionFunc(event)
	{
		var currentTarget_mc = event.currentTarget;
		//createjs.Tween.get(currentTarget_mc).wait(0).to({scaleX:1.1, scaleY:1.1}, (_DELAY / 5) * 1000);
		//new Edapskov_Glow(currentTarget_mc, _DELAY / 5, "#ffffff", 20);
	}
	function _onMouseOutNavigationMcDressupActionFunc(event)
	{
		var currentTarget_mc = event.currentTarget;
		//createjs.Tween.get(currentTarget_mc).wait(0).to({scaleX:1, scaleY:1}, (_DELAY / 3) * 1000);
		//new Edapskov_Glow(currentTarget_mc, _DELAY / 3, "#ffffff", 0);
	}
	function _onClickPrevNavigationMcDressupActionFunc(event)
	{
		/*
		
		*/
		var currentTarget_mc = event.currentTarget;
		/*
		
		*/
		var point_obj = currentTarget_mc.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 0.2, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
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
		_information.heroes[_information.currentNameHero].totalSets[_information.heroes[_information.currentNameHero].currentSet].currentIndex--;
		if(_information.heroes[_information.currentNameHero].totalSets[_information.heroes[_information.currentNameHero].currentSet].currentIndex < 0)
		{
			_information.heroes[_information.currentNameHero].totalSets[_information.heroes[_information.currentNameHero].currentSet].currentIndex = _information.heroes[_information.currentNameHero].totalSets[_information.heroes[_information.currentNameHero].currentSet].frames.length - 1;
		}
		/*
		
		*/
		_updatePanelDressupActionFunc();
		//_animationTransitionPanelDressupActionFunc();
	}
	function _onClickNextNavigationMcDressupActionFunc(event)
	{
		/*
		
		*/
		var currentTarget_mc = event.currentTarget;
		/*
		
		*/
		var point_obj = currentTarget_mc.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 0.2, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
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
		_information.heroes[_information.currentNameHero].totalSets[_information.heroes[_information.currentNameHero].currentSet].currentIndex++;
		if(_information.heroes[_information.currentNameHero].totalSets[_information.heroes[_information.currentNameHero].currentSet].currentIndex >= _information.heroes[_information.currentNameHero].totalSets[_information.heroes[_information.currentNameHero].currentSet].frames.length)
		{
			_information.heroes[_information.currentNameHero].totalSets[_information.heroes[_information.currentNameHero].currentSet].currentIndex = 0;
		}
		/*
		
		*/
		_updatePanelDressupActionFunc();
		//_animationTransitionPanelDressupActionFunc();
	}
	/*
	
	*/
	function _hideNextBtnDressupActionFunc()
	{
		if(_action_mc.next_btn)
		{
			/*
			первый вариант
			*/
			//_action_mc.next_btn.visible = false;
			/*
			второй вариант
			*/
			_action_mc.next_btn.alpha = 1;
			var filter_obj = new createjs.ColorMatrixFilter([0.30, 0.30, 0.30, 0, 0, 0.30, 0.30, 0.30, 0, 0, 0.30, 0.30, 0.30, 0, 0, 0, 0, 0, 1, 0]);
			_action_mc.next_btn.filters = [filter_obj];
			var bounds_obj = _action_mc.next_btn.getBounds();
			if(_action_mc.next_btn.bitmapCache)
			{
				_action_mc.next_btn.updateCache();
			}
			else
			{
				_action_mc.next_btn.cache(bounds_obj.x, bounds_obj.y, bounds_obj.width, bounds_obj.height);
			}
		}
		else
		{
			trace("Хде next_btn!")
		}
	}
	function _showNextBtnDressupActionFunc()
	{
		if(_action_mc.next_btn)
		{
			/*
			первый вариант
			*/
			/*
			if(!_action_mc.next_btn.visible)
			{
				_action_mc.next_btn.visible = true;
				_action_mc.next_btn.alpha = 0.01;
				createjs.Tween.get(_action_mc.next_btn).wait(0).to({alpha:1}, (_DELAY / 2) * 1000);
				_action_mc.next_btn.addEventListener("click", _onClickNextBtnDressupActionFunc, false);
			}
			*/
			/*
			второй вариант
			*/
			_action_mc.next_btn.uncache();
			_action_mc.next_btn.alpha = 1;
			_action_mc.next_btn.addEventListener("click", _onClickNextBtnDressupActionFunc, false);
		}
		else
		{
			trace("Хде next_btn!")
		}
	}
	function _onClickNextBtnDressupActionFunc(event)
	{
		/*
		
		*/
		var currentTarget_btn = event.currentTarget;
		/*
		
		*/
		var point_obj = currentTarget_btn.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		//currentTarget_btn.visible = false; // опционально
		currentTarget_btn.removeEventListener("click", _onClickNextBtnDressupActionFunc, false);
		/*
		
		*/
		_updateHeroesFunc(_action_mc, true, true);
		/*
		
		*/
		if(_action_mc.totalFrames > 1)
		{
			if(_hasLabelInMovieClipFunc(_action_mc, "end"))
			{
				var timelineControl = new Edapskov_TimelineControl(_action_mc);
				timelineControl.gotoFunc("end", 1, 0);
				timelineControl.addEventListener("completed_timeline", _onEndActionMcDressupActionFunc, false);
			}
			else
			{
				/*
				
				*/
				trace("Вижу анимацию, но не вижу Label!")
				/*
				
				*/
				_endDressupActionFunc();
			}
		}
		else
		{
			_endDressupActionFunc();
		}
	}
	function _onEndActionMcDressupActionFunc(event)
	{
		_endDressupActionFunc();
	}
	function _endDressupActionFunc()
	{
		/*
		
		*/
		if(_currentMainScreen_mc.body_mc.pointer_1)
		{
			_currentMainScreen_mc.body_mc.pointer_1.mouseEnabled = false;
			_currentMainScreen_mc.body_mc.pointer_1.mouseChildren = false;
			_currentMainScreen_mc.body_mc.pointer_1.visible = false;
		}
		/*
		
		*/
		if(_currentMainScreen_mc.body_mc.pointer_2)
		{
			_currentMainScreen_mc.body_mc.pointer_2.mouseEnabled = false;
			_currentMainScreen_mc.body_mc.pointer_2.mouseChildren = false;
			_currentMainScreen_mc.body_mc.pointer_2.visible = false;
		}
		/*
		очищаем переменные
		*/
		_information.counterClick_uint = null;
		/*
		
		*/
		_completeActionFunc();
	}
	function _skipDressupActionFunc()
	{
		/*
		
		*/
		
		/*
		очищаем переменные
		*/
		_information.counterClick_uint = null;
	}
	/*
	============================================================
	dressupSecond action
	============================================================
	*/
	function _beginDressupSecondActionFunc()
	{
		/*
		
		*/
		_information.counterClick_uint = Math.ceil(Number(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].firstVar));
		/*
		
		*/
		var heroes_arr = new Array();
		var category_mc;
		/*
		
		*/
		if(_currentMainScreen_mc.body_mc.pointer_1)
		{
			_currentMainScreen_mc.body_mc.pointer_1.mouseEnabled = false;
			_currentMainScreen_mc.body_mc.pointer_1.mouseChildren = false;
			_currentMainScreen_mc.body_mc.pointer_1.visible = false;
		}
		/*
		
		*/
		if(_currentMainScreen_mc.body_mc.pointer_2)
		{
			_currentMainScreen_mc.body_mc.pointer_2.mouseEnabled = false;
			_currentMainScreen_mc.body_mc.pointer_2.mouseChildren = false;
			_currentMainScreen_mc.body_mc.pointer_2.visible = false;
		}
		/*
		
		*/
		if(_currentMainScreen_mc.body_mc["frame_" + (_currentMainScreen_mc.body_mc.currentFrame + 1) + "_mc"])
		{
			/*
			
			*/
			_action_mc = _currentMainScreen_mc.body_mc["frame_" + (_currentMainScreen_mc.body_mc.currentFrame + 1) + "_mc"];
			_action_mc.gotoAndStop(0);
			/*
			
			*/
			for(var propHeroes in _information.heroes)
			{
				if(_information.heroes.hasOwnProperty(propHeroes))
				{
					if(_action_mc[propHeroes])
					{
						if(_action_mc[propHeroes])
						{
							heroes_arr.unshift(propHeroes);
						}
						else
						{
							heroes_arr.push(propHeroes);
						}
					}
				}
			}
			/*
			
			*/
			if(heroes_arr.length > 0)
			{
				/*
				
				*/
				_information.currentNameHero = heroes_arr[0];
				/*
				
				*/
				//_updateHeroesFunc(_action_mc, true, true);
				_updateHeroesFunc(_action_mc, true, false);
				/*
				
				*/
				if(_action_mc.dressupPanel_mc)
				{
					/*
					
					*/
					_action_mc.dressupPanel_mc.gotoAndStop(0);
					/*
					
					*/
					for(var propOptions in _information.heroes[_information.currentNameHero].currentDress)
					{
						if(_information.heroes[_information.currentNameHero].currentDress.hasOwnProperty(propOptions))
						{
							if(_action_mc.dressupPanel_mc[propOptions])
							{
								/*
								
								*/
								category_mc = _action_mc.dressupPanel_mc[propOptions];
								category_mc.gotoAndStop(0);
								category_mc.name = String(propOptions);
								category_mc.mouseEnabled = true;
								category_mc.mouseChildren = false;
								category_mc.cursor = "pointer";
								category_mc.addEventListener("mouseover", _onMouseOverNavigationMcDressupSecondActionFunc, false);
								category_mc.addEventListener("mouseout", _onMouseOutNavigationMcDressupSecondActionFunc, false);
								category_mc.addEventListener("click", _onClickNavigationMcDressupSecondActionFunc, false);
								/*
								
								*/
								if(category_mc.animation_mc)
								{
									category_mc.animation_mc.gotoAndStop(0);
								}
							}
						}
					}
					/*
					
					*/
					_hideNextBtnDressupSecondActionFunc();
				}
			}
			else
			{
				trace("Хде герой!")
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
					timelineControl.addEventListener("completed_timeline", _onMidActionMcDressupSecondActionFunc, false);
				}
				else
				{
					trace("Вижу анимацию, но не вижу Label!")
				}
			}
		}
		else
		{
			trace("Хде контейнер мини-игры!")
		}
	}
	function _onMidActionMcDressupSecondActionFunc(event)
	{
		
	}
	function _onMouseOverNavigationMcDressupSecondActionFunc(event)
	{
		var currentTarget_mc = event.currentTarget;
		createjs.Tween.get(currentTarget_mc).wait(0).to({scaleX:1.1, scaleY:1.1}, (_DELAY / 5) * 1000);
	}
	function _onMouseOutNavigationMcDressupSecondActionFunc(event)
	{
		var currentTarget_mc = event.currentTarget;
		createjs.Tween.get(currentTarget_mc).wait(0).to({scaleX:1, scaleY:1}, (_DELAY / 3) * 1000);
	}
	function _onClickNavigationMcDressupSecondActionFunc(event)
	{
		/*
		
		*/
		var currentTarget_mc = event.currentTarget;
		var current_str = String(currentTarget_mc.name);
		var hero_mc;
		var option_mc;
		var currentFrame_num;
		var totalFrames_num;
		var point_obj;
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
		if(_information.heroes[_information.currentNameHero].currentDress.hasOwnProperty(current_str))
		{
			if(_action_mc[_information.currentNameHero])
			{
				/*
				
				*/
				hero_mc = _action_mc[_information.currentNameHero];
				/*
				
				*/
				if(hero_mc[current_str])
				{
					/*
					
					*/
					option_mc = hero_mc[current_str];
					/*
					
					*/
					currentFrame_num = Number(option_mc.currentFrame);
					totalFrames_num = Number(option_mc.totalFrames);
					/*
					
					*/
					if(currentFrame_num < Number(totalFrames_num - 1))
					{
						currentFrame_num++;
					}
					else
					{
						currentFrame_num = 0;
					}
					/*
					
					*/
					_information.heroes[_information.currentNameHero].currentDress[current_str].currentOption = Number(currentFrame_num + 1);
					/*
					
					*/
					//_updateHeroesFunc(_action_mc, true, true);
					_updateHeroesFunc(_action_mc, true, false);
					/*
					
					*/
					if(currentTarget_mc.animation_mc)
					{
						currentTarget_mc.animation_mc.gotoAndPlay(1);
					}
					/*
					
					*/
					point_obj = currentTarget_mc.localToLocal(event.localX, event.localY, _stage);
					_soundManager.addSoundFunc("click_sound", 0, 0, 0, 0.05, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
					/*
					
					*/
					_information.counterClick_uint--;
					if(_information.counterClick_uint <= 0)
					{
						_showNextBtnDressupSecondActionFunc();
					}
				}
			}
		}
	}
	function _hideNextBtnDressupSecondActionFunc()
	{
		if(_action_mc.next_btn)
		{
			/*
			первый вариант
			*/
			_action_mc.next_btn.visible = false;
			/*
			второй вариант
			*/
			/*
			_action_mc.next_btn.alpha = 0.8;
			var filter_obj = new createjs.ColorMatrixFilter([0.30, 0.30, 0.30, 0, 0, 0.30, 0.30, 0.30, 0, 0, 0.30, 0.30, 0.30, 0, 0, 0, 0, 0, 1, 0]);
			_action_mc.next_btn.filters = [filter_obj];
			var bounds_obj = _action_mc.next_btn.getBounds();
			if(_action_mc.next_btn.bitmapCache)
			{
				_action_mc.next_btn.updateCache();
			}
			else
			{
				_action_mc.next_btn.cache(bounds_obj.x, bounds_obj.y, bounds_obj.width, bounds_obj.height);
			}
			*/
		}
		else
		{
			trace("Хде next_btn!")
		}
	}
	function _showNextBtnDressupSecondActionFunc()
	{
		if(_action_mc.next_btn)
		{
			/*
			первый вариант
			*/
			if(!_action_mc.next_btn.visible)
			{
				_action_mc.next_btn.visible = true;
				_action_mc.next_btn.alpha = 0.01;
				createjs.Tween.get(_action_mc.next_btn).wait(0).to({alpha:1}, (_DELAY / 2) * 1000);
				_action_mc.next_btn.addEventListener("click", _onClickNextBtnDressupActionFunc, false);
			}
			/*
			второй вариант
			*/
			/*
			_action_mc.next_btn.uncache();
			_action_mc.next_btn.alpha = 1;
			_action_mc.next_btn.addEventListener("click", _onClickNextBtnDressupActionFunc, false);
			*/
		}
		else
		{
			trace("Хде next_btn!")
		}
	}
	function _onClickNextBtnDressupSecondActionFunc(event)
	{
		/*
		
		*/
		var currentTarget_btn = event.currentTarget;
		/*
		
		*/
		var point_obj = currentTarget_btn.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		currentTarget_btn.visible = false;
		currentTarget_btn.removeEventListener("click", _onClickNextBtnDressupSecondActionFunc, false);
		/*
		
		*/
		_updateHeroesFunc(_action_mc, true, true);
		/*
		
		*/
		if(_action_mc.totalFrames > 1)
		{
			if(_hasLabelInMovieClipFunc(_action_mc, "end"))
			{
				var timelineControl = new Edapskov_TimelineControl(_action_mc);
				timelineControl.gotoFunc("end", 1, 0);
				timelineControl.addEventListener("completed_timeline", _onEndActionMcDressupActionFunc, false);
			}
			else
			{
				/*
				
				*/
				trace("Вижу анимацию, но не вижу Label!")
				/*
				
				*/
				_endDressupSecondActionFunc();
			}
		}
		else
		{
			_endDressupSecondActionFunc();
		}
	}
	function _onEndActionMcDressupSecondActionFunc(event)
	{
		_endDressupSecondActionFunc();
	}
	function _endDressupSecondActionFunc()
	{
		/*
		
		*/
		if(_currentMainScreen_mc.body_mc.pointer_1)
		{
			_currentMainScreen_mc.body_mc.pointer_1.mouseEnabled = false;
			_currentMainScreen_mc.body_mc.pointer_1.mouseChildren = false;
			_currentMainScreen_mc.body_mc.pointer_1.visible = false;
		}
		/*
		
		*/
		if(_currentMainScreen_mc.body_mc.pointer_2)
		{
			_currentMainScreen_mc.body_mc.pointer_2.mouseEnabled = false;
			_currentMainScreen_mc.body_mc.pointer_2.mouseChildren = false;
			_currentMainScreen_mc.body_mc.pointer_2.visible = false;
		}
		/*
		очищаем переменные
		*/
		_information.counterClick_uint = null;
		/*
		
		*/
		_completeActionFunc();
	}
	function _skipDressupSecondActionFunc()
	{
		/*
		
		*/
		
		/*
		очищаем переменные
		*/
		_information.counterClick_uint = null;
	}
	/*
	============================================================
	find action
	============================================================
	*/
	function _beginFindActionFunc()
	{
		/*
		создаём переменные
		*/
		_information.currentCheckpoint = 0;
		_information.totalCheckpoints = 0;
		/*
		
		*/
		var object_str;
		var object_mc;
		var i;
		var l;
		/*
		
		*/
		if(_currentMainScreen_mc.body_mc.pointer_1)
		{
			_currentMainScreen_mc.body_mc.pointer_1.mouseEnabled = false;
			_currentMainScreen_mc.body_mc.pointer_1.mouseChildren = false;
			_currentMainScreen_mc.body_mc.pointer_1.visible = false;
		}
		/*
		
		*/
		if(_currentMainScreen_mc.body_mc.pointer_2)
		{
			_currentMainScreen_mc.body_mc.pointer_2.mouseEnabled = false;
			_currentMainScreen_mc.body_mc.pointer_2.mouseChildren = false;
			_currentMainScreen_mc.body_mc.pointer_2.visible = false;
		}
		/*
		
		*/
		if(_currentMainScreen_mc.body_mc["frame_" + (_currentMainScreen_mc.body_mc.currentFrame + 1) + "_mc"])
		{
			/*
			
			*/
			_action_mc = _currentMainScreen_mc.body_mc["frame_" + (_currentMainScreen_mc.body_mc.currentFrame + 1) + "_mc"];
			_action_mc.gotoAndStop(0);
			_action_mc.mouseChildren = true;
			_action_mc.mouseEnabled = true;
			/*
			
			*/
			if(_action_mc.objects_mc)
			{
				/*
				
				*/
				_action_mc.objects_mc.gotoAndStop(0);
				/*
				
				*/
				i = 0;
				l = _action_mc.objects_mc.numChildren;
				while(i < l)
				{
					/*
					
					*/
					object_str = "object_" + Number(i + 1);
					/*
					
					*/
					if(_action_mc.objects_mc[object_str])
					{
						/*
						
						*/
						object_mc = _action_mc.objects_mc[object_str];
						object_mc.gotoAndStop(0);
						object_mc.loop = false;
						object_mc.name = object_str;
						object_mc.mouseEnabled = true;
						object_mc.mouseChildren = true;
						object_mc.cursor = "default";
						object_mc.addEventListener("click", _onClickObjectFindActionFunc, false);
						/*
						
						*/
						if(object_mc.target_mc)
						{
							_information.totalCheckpoints++;
						}
					}
					else
					{
						trace("Хде " + object_str + " в objects_mc!")
					}
					/*
					
					*/
					i++;
				}
				/*
				
				*/
				if(_action_mc.panel_mc)
				{
					/*
					
					*/
					_action_mc.panel_mc.gotoAndStop(0);
					_action_mc.panel_mc.mouseChildren = false;
					_action_mc.panel_mc.mouseEnabled = false;
					/*
					
					*/
					_action_mc.panel_mc.gotoAndStop(_information.currentCheckpoint);
					/*
					
					*/
					_action_mc.panel_mc.alpha = 0.01;
					createjs.Tween.get(_action_mc.panel_mc).wait(_DELAY * 1000).to({alpha:1}, _DELAY * 0.5 * 1000);
				}
			}
			else
			{
				trace("Хде objects_mc!")
			}
		}
		else
		{
			trace("Хде контейнер мини-игры!")
		}
	}
	function _onClickObjectFindActionFunc(event)
	{
		/*
		
		*/
		var currentTarget_mc = event.currentTarget;
		currentTarget_mc.mouseEnabled = false;
		currentTarget_mc.mouseChildren = false;
		currentTarget_mc.cursor = "default";
		currentTarget_mc.removeEventListener("click", _onClickObjectFindActionFunc, false);
		/*
		
		*/
		if(currentTarget_mc.target_mc)
		{
			/*
			
			*/
			_information.currentCheckpoint++;
			/*
			
			*/
			var point_obj = currentTarget_mc.localToLocal(event.localX, event.localY, _stage);
			_soundManager.addSoundFunc("magic_sound", 0, 0, 0, 0.02, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
			/*
			
			*/
			var flashAnimation_mc = new lib.FlashAnimation();
			_before.addChild(flashAnimation_mc);
			flashAnimation_mc.gotoAndStop(0);
			point_obj = currentTarget_mc.localToLocal(event.localX, event.localY, _before);
			flashAnimation_mc.x = point_obj.x;
			flashAnimation_mc.y = point_obj.y;
			/*
			
			*/
			if(_action_mc.panel_mc)
			{
				_action_mc.panel_mc.gotoAndStop(_information.currentCheckpoint);
			}
			/*
			
			*/
			if(_information.currentCheckpoint >= _information.totalCheckpoints)
			{
				_endFindActionFunc();
			}
		}
		/*
		
		*/
		if(currentTarget_mc.totalFrames > 1)
		{
			currentTarget_mc.gotoAndPlay(0);
		}
	}
	function _endFindActionFunc()
	{
		/*
		
		*/
		if(_currentMainScreen_mc.body_mc.pointer_1)
		{
			_currentMainScreen_mc.body_mc.pointer_1.mouseEnabled = false;
			_currentMainScreen_mc.body_mc.pointer_1.mouseChildren = false;
			_currentMainScreen_mc.body_mc.pointer_1.visible = false;
		}
		/*
		
		*/
		if(_currentMainScreen_mc.body_mc.pointer_2)
		{
			_currentMainScreen_mc.body_mc.pointer_2.mouseEnabled = false;
			_currentMainScreen_mc.body_mc.pointer_2.mouseChildren = false;
			_currentMainScreen_mc.body_mc.pointer_2.visible = false;
		}
		/*
		
		*/
		_action_mc.mouseChildren = false;
		_action_mc.mouseEnabled = false;
		/*
		очищаем переменные
		*/
		_information.currentCheckpoint = 0;
		_information.totalCheckpoints = 0;
		/*
		
		*/
		_completeActionFunc();
	}
	function _skipFindActionFunc()
	{
		/*
		
		*/
		_action_mc.mouseChildren = false;
		_action_mc.mouseEnabled = false;
		/*
		очищаем переменные
		*/
		_information.currentCheckpoint = 0;
		_information.totalCheckpoints = 0;
	}
	/*
	============================================================
	find-Second action
	============================================================
	*/
	function _beginFindSecondActionFunc()
	{
		/*
		создаём переменные
		*/
		_information.totalCheckpoints = 0;
		_information.objects_arr = new Array();
		/*
		
		*/
		var object_str;
		var object_mc;
		/*
		
		*/
		if(_currentMainScreen_mc.body_mc.pointer_1)
		{
			_currentMainScreen_mc.body_mc.pointer_1.mouseEnabled = false;
			_currentMainScreen_mc.body_mc.pointer_1.mouseChildren = false;
			_currentMainScreen_mc.body_mc.pointer_1.visible = false;
		}
		/*
		
		*/
		if(_currentMainScreen_mc.body_mc.pointer_2)
		{
			_currentMainScreen_mc.body_mc.pointer_2.mouseEnabled = false;
			_currentMainScreen_mc.body_mc.pointer_2.mouseChildren = false;
			_currentMainScreen_mc.body_mc.pointer_2.visible = false;
		}
		/*
		
		*/
		if(_currentMainScreen_mc.body_mc["frame_" + (_currentMainScreen_mc.body_mc.currentFrame + 1) + "_mc"])
		{
			/*
			
			*/
			_action_mc = _currentMainScreen_mc.body_mc["frame_" + (_currentMainScreen_mc.body_mc.currentFrame + 1) + "_mc"];
			_action_mc.gotoAndStop(0);
			_action_mc.mouseChildren = true;
			_action_mc.mouseEnabled = true;
			/*
			
			*/
			if(_action_mc.objects_mc)
			{
				/*
				
				*/
				_action_mc.objects_mc.gotoAndStop(0);
				/*
				
				*/
				i = 0;
				l = _action_mc.objects_mc.numChildren;
				while(i < l)
				{
					/*
					
					*/
					object_str = "object_" + Number(i + 1);
					/*
					
					*/
					if(_action_mc.objects_mc[object_str])
					{
						/*
						
						*/
						_information.totalCheckpoints++;
						_information.objects_arr.push(object_str);
						/*
						
						*/
						object_mc = _action_mc.objects_mc[object_str];
						object_mc.gotoAndStop(0);
						object_mc.loop = false;
						object_mc.name = object_str;
						object_mc.mouseEnabled = true;
						object_mc.mouseChildren = true;
						object_mc.cursor = "default";
						object_mc.addEventListener("click", _onClickObjectFindSecondActionFunc, false);
					}
					else
					{
						trace("Хде " + object_str + " в objects_mc!")
					}
					/*
					
					*/
					i++;
				}
				/*
				
				*/
				if(_action_mc.panel_mc)
				{
					/*
					
					*/
					_action_mc.panel_mc.gotoAndStop(0);
					_action_mc.panel_mc.mouseChildren = false;
					_action_mc.panel_mc.mouseEnabled = false;
					/*
					
					*/
					_updatePanelFindSecondActionFunc(true);
					/*
					
					*/
					_action_mc.panel_mc.alpha = 0.01;
					createjs.Tween.get(_action_mc.panel_mc).wait(_DELAY * 1000).to({alpha:1}, _DELAY * 0.5 * 1000);
				}
			}
			else
			{
				trace("Хде objects_mc!")
			}
		}
		else
		{
			trace("Хде контейнер мини-игры!")
		}
	}
	function _updatePanelFindSecondActionFunc(firstRun_bool)
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
		var object_str;
		var object_mc;
		var i = 0;
		var l = _information.objects_arr.length;
		/*
		
		*/
		if(_action_mc.panel_mc)
		{
			while(i < _information.totalCheckpoints)
			{
				/*
				
				*/
				object_str = "object_" + Number(i + 1);
				/*
				
				*/
				if(_action_mc.panel_mc[object_str])
				{
					/*
					
					*/
					object_mc = _action_mc.panel_mc[object_str];
					/*
					
					*/
					if(firstRun_bool)
					{
						object_mc.gotoAndStop(0);
						object_mc.name = object_str;
					}
					/*
					
					*/
					if(i < l)
					{
						object_mc.gotoAndStop(parseInt(_information.objects_arr[i].split("_")[1]));
					}
					else
					{
						object_mc.gotoAndStop(0);
					}
				}
				/*
				
				*/
				i++;
			}
		}
	}
	function _onClickObjectFindSecondActionFunc(event)
	{
		/*
		
		*/
		var currentTarget_mc = event.currentTarget;
		currentTarget_mc.mouseEnabled = false;
		currentTarget_mc.mouseChildren = false;
		currentTarget_mc.cursor = "default";
		currentTarget_mc.removeEventListener("click", _onClickObjectFindSecondActionFunc, false);
		/*
		
		*/
		var point_obj = currentTarget_mc.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("magic_sound", 0, 0, 0, 0.02, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		var flashAnimation_mc = new lib.FlashAnimation();
		_before.addChild(flashAnimation_mc);
		flashAnimation_mc.gotoAndStop(0);
		point_obj = currentTarget_mc.localToLocal(event.localX, event.localY, _before);
		flashAnimation_mc.x = point_obj.x;
		flashAnimation_mc.y = point_obj.y;
		/*
		
		*/
		if(currentTarget_mc.totalFrames > 1)
		{
			currentTarget_mc.gotoAndPlay(0);
		}
		/*
		
		*/
		var i = 0;
		var l = _information.objects_arr.length;
		while(i < l)
		{
			/*
			
			*/
			if(String(currentTarget_mc.name) == String(_information.objects_arr[i]))
			{
				_information.objects_arr.splice(i, 1);
			}
			/*
			
			*/
			i++;
		}
		/*
		
		*/
		_updatePanelFindSecondActionFunc();
		/*
		
		*/
		if(_information.objects_arr.length <= 0)
		{
			_endFindActionFunc();
		}
	}
	function _endFindSecondActionFunc()
	{
		/*
		
		*/
		if(_currentMainScreen_mc.body_mc.pointer_1)
		{
			_currentMainScreen_mc.body_mc.pointer_1.mouseEnabled = false;
			_currentMainScreen_mc.body_mc.pointer_1.mouseChildren = false;
			_currentMainScreen_mc.body_mc.pointer_1.visible = false;
		}
		/*
		
		*/
		if(_currentMainScreen_mc.body_mc.pointer_2)
		{
			_currentMainScreen_mc.body_mc.pointer_2.mouseEnabled = false;
			_currentMainScreen_mc.body_mc.pointer_2.mouseChildren = false;
			_currentMainScreen_mc.body_mc.pointer_2.visible = false;
		}
		/*
		
		*/
		_action_mc.mouseChildren = false;
		_action_mc.mouseEnabled = false;
		/*
		очищаем переменные
		*/
		_information.totalCheckpoints = 0;
		_information.objects_arr = null;
		/*
		
		*/
		_completeActionFunc();
	}
	function _skipFindSecondActionFunc()
	{
		/*
		
		*/
		_action_mc.mouseChildren = false;
		_action_mc.mouseEnabled = false;
		/*
		очищаем переменные
		*/
		_information.totalCheckpoints = 0;
		_information.objects_arr = null;
	}
	/*
	============================================================
	photoHunting action
	============================================================
	*/
	function _beginPhotoHuntingActionFunc()
	{
		/*
		создаём переменные
		*/
		_information.objects_arr = new Array();
		_information.targetObject_str = null;
		_information.totalWait_num = 20;
		_information.currentWait_num = null;
		/*
		
		*/
		var i = 0;
		var l = 0;
		var object_str;
		var object_mc;
		/*
		
		*/
		if(_currentMainScreen_mc.body_mc.pointer_1)
		{
			_currentMainScreen_mc.body_mc.pointer_1.mouseEnabled = false;
			_currentMainScreen_mc.body_mc.pointer_1.mouseChildren = false;
			_currentMainScreen_mc.body_mc.pointer_1.visible = false;
		}
		/*
		
		*/
		if(_currentMainScreen_mc.body_mc.pointer_2)
		{
			_currentMainScreen_mc.body_mc.pointer_2.mouseEnabled = false;
			_currentMainScreen_mc.body_mc.pointer_2.mouseChildren = false;
			_currentMainScreen_mc.body_mc.pointer_2.visible = false;
		}
		/*
		
		*/
		if(_currentMainScreen_mc.body_mc["frame_" + (_currentMainScreen_mc.body_mc.currentFrame + 1) + "_mc"])
		{
			/*
			
			*/
			_action_mc = _currentMainScreen_mc.body_mc["frame_" + (_currentMainScreen_mc.body_mc.currentFrame + 1) + "_mc"];
			_action_mc.gotoAndStop(0);
			_action_mc.mouseChildren = true;
			_action_mc.mouseEnabled = true;
			/*
			
			*/
			if(_action_mc.drag_mc)
			{
				/*
				
				*/
				_action_mc.drag_mc.gotoAndStop(0);
				_action_mc.drag_mc.mouseChildren = true;
				_action_mc.drag_mc.mouseEnabled = true;
				_action_mc.drag_mc.addEventListener("mousedown", _onMouseDownDragHuntingActionFunc, false);
				_action_mc.drag_mc.addEventListener("pressmove", _onPressMoveDragHuntingActionFunc, false);
				_action_mc.drag_mc.addEventListener("pressup", _onPressUpDragHuntingActionFunc, false);
				/*
				
				*/
				if(_action_mc.drag_mc.photo_mc)
				{
					/*
					
					*/
					_action_mc.drag_mc.photo_mc.gotoAndStop(0);
					_action_mc.drag_mc.photo_mc.mouseChildren = false;
					_action_mc.drag_mc.photo_mc.mouseEnabled = false;
					_action_mc.drag_mc.photo_mc.visible = false;
					/*
					
					*/
					if(_action_mc.drag_mc.photo_mc.indicator_mc)
					{
						/*
						
						*/
						_action_mc.drag_mc.photo_mc.indicator_mc.gotoAndStop(0);
						_action_mc.drag_mc.photo_mc.indicator_mc.visible = false;
						/*
						
						*/
						if(_action_mc.drag_mc.photo_mc.indicator_mc.indicator_mc)
						{
							_action_mc.drag_mc.photo_mc.indicator_mc.indicator_mc.gotoAndStop(0);
						}
						else
						{
							trace("Не нахожу drag_mc.photo_mc.indicator_mc.indicator_mc!")
						}
					}
					else
					{
						trace("Не нахожу drag_mc.photo_mc.indicator_mc!")
					}
				}
				else
				{
					trace("Не нахожу drag_mc.photo_mc!")
				}
			}
			else
			{
				trace("Не нахожу drag_mc!")
			}
			/*
			
			*/
			if(_action_mc.list_mc)
			{
				/*
				
				*/
				_action_mc.list_mc.gotoAndStop(0);
				_action_mc.list_mc.mouseChildren = false;
				_action_mc.list_mc.mouseEnabled = false;
				/*
				
				*/
				i = 0;
				l = _action_mc.list_mc.numChildren;
				while(i < l)
				{
					/*
					
					*/
					object_str = "object_" + Number(i + 1);
					/*
					
					*/
					if(_action_mc.list_mc[object_str])
					{
						/*
						
						*/
						_information.objects_arr.push(object_str);
						/*
						
						*/
						object_mc = _action_mc.list_mc[object_str];
						object_mc.gotoAndStop(0);
						object_mc.name = object_str;
					}
					else
					{
						trace("Хде " + object_str + " в list_mc!")
					}
					/*
					
					*/
					i++;
				}
			}
			else
			{
				trace("Не нахожу list_mc!")
			}
			/*
			
			*/
			if(_action_mc.targets_mc)
			{
				/*
				
				*/
				_action_mc.targets_mc.gotoAndStop(0);
				_action_mc.targets_mc.mouseChildren = false;
				_action_mc.targets_mc.mouseEnabled = false;
				/*
				
				*/
				i = 0;
				l = _information.objects_arr.length;
				while(i < l)
				{
					/*
					
					*/
					object_str = _information.objects_arr[i];
					/*
					
					*/
					if(_action_mc.targets_mc[object_str])
					{
						object_mc = _action_mc.targets_mc[object_str];
						object_mc.gotoAndStop(0);
						object_mc.name = object_str;
					}
					else
					{
						trace("Хде " + object_str + " в targets_mc!")
					}
					/*
					
					*/
					i++;
				}
			}
			else
			{
				trace("Не нахожу targets_mc!")
			}
			/*
			
			*/
			if(_action_mc.animations_mc)
			{
				/*
				
				*/
				_action_mc.animations_mc.gotoAndStop(0);
				_action_mc.animations_mc.mouseChildren = false;
				_action_mc.animations_mc.mouseEnabled = false;
				/*
				
				*/
				i = 0;
				l = _information.objects_arr.length;
				while(i < l)
				{
					/*
					
					*/
					object_str = _information.objects_arr[i];
					/*
					
					*/
					if(_action_mc.animations_mc[object_str])
					{
						object_mc = _action_mc.animations_mc[object_str];
						object_mc.gotoAndStop(0);
						object_mc.loop = false;
						object_mc.name = object_str;
					}
					else
					{
						trace("Хде " + object_str + " в animations_mc!")
					}
					/*
					
					*/
					i++;
				}
			}
			else
			{
				trace("Не нахожу animations_mc!")
			}
		}
		else
		{
			trace("Хде контейнер мини-игры!")
		}
	}
	function _onMouseDownDragHuntingActionFunc(event)
	{
		/*
		
		*/
		_information.targetObject_str = null;
		/*
		
		*/
		_action_mc.drag_mc.photo_mc.visible = true;
		/*
		
		*/
		_movingDragHuntingActionFunc(event.localX, event.localY);
	}
	function _onPressMoveDragHuntingActionFunc(event)
	{
		_movingDragHuntingActionFunc(event.localX, event.localY);
	}
	function _onPressUpDragHuntingActionFunc(event)
	{
		/*
		
		*/
		_information.targetObject_str = null;
		/*
		
		*/
		_action_mc.drag_mc.photo_mc.visible = false;
	}
	function _movingDragHuntingActionFunc(mouseX_num, mouseY_num)
	{
		/*
		
		*/
		var result_str = null;
		/*
		
		*/
		_action_mc.drag_mc.photo_mc.x = mouseX_num + 100;
		_action_mc.drag_mc.photo_mc.y = mouseY_num;
		/*
		
		*/
		var object_str;
		var object_mc;
		var point_obj;
		var i = 0;
		var l = _information.objects_arr.length;
		while(i < l)
		{
			/*
			
			*/
			object_str = _information.objects_arr[i];
			/*
			
			*/
			if(_action_mc.targets_mc[object_str])
			{
				/*
				
				*/
				object_mc = _action_mc.targets_mc[object_str];
				/*
				
				*/
				point_obj = _action_mc.drag_mc.photo_mc.localToLocal(0, 0, object_mc);
				/*
				
				*/
				if(object_mc.hitTest(point_obj.x, point_obj.y))
				{
					/*
					
					*/
					result_str = object_str;
					/*
					
					*/
					break;
				}
			}
			/*
			
			*/
			i++;
		}
		/*
		
		*/
		if(result_str !== null)
		{
			if(_information.targetObject_str !== result_str)
			{
				/*
				
				*/
				_information.targetObject_str = result_str;
				/*
				
				*/
				_information.currentWait_num = _information.totalWait_num;
				_action_mc.drag_mc.photo_mc.indicator_mc.visible = true;
				_information.interval_id = setInterval(_updateIndicatorHuntingActionFunc, 100);
				_updateIndicatorHuntingActionFunc();
				/*
				
				*/
				_action_mc.drag_mc.photo_mc.gotoAndStop(1);
			}
		}
		else
		{
			if(_information.targetObject_str !== result_str)
			{
				/*
				
				*/
				_information.targetObject_str = result_str;
				/*
				
				*/
				_action_mc.drag_mc.photo_mc.indicator_mc.visible = false;
				if(_information.interval_id != null)
				{
					clearInterval(_information.interval_id);
				}
				/*
				
				*/
				_action_mc.drag_mc.photo_mc.gotoAndStop(0);
			}
		}
	}
	function _updateIndicatorHuntingActionFunc()
	{
		if(_information.targetObject_str !== null)
		{
			/*
			
			*/
			_information.currentWait_num--;
			/*
			
			*/
			if(_information.currentWait_num < 0)
			{
				_shootPhotoHuntingActionFunc();
			}
			else
			{
				var share_num = 1 - (_information.currentWait_num / _information.totalWait_num);
				_action_mc.drag_mc.photo_mc.indicator_mc.indicator_mc.scaleX = share_num;
			}
		}
		else
		{
			_shootPhotoHuntingActionFunc();
		}
	}
	function _shootPhotoHuntingActionFunc()
	{
		/*
		
		*/
		if(_information.interval_id != null)
		{
			clearInterval(_information.interval_id);
		}
		/*
		
		*/
		_action_mc.drag_mc.photo_mc.indicator_mc.visible = false;
		_action_mc.drag_mc.photo_mc.gotoAndStop(0);
		_action_mc.drag_mc.photo_mc.visible = false;
		/*
		
		*/
		if(_action_mc.animations_mc[_information.targetObject_str])
		{
			/*
			
			*/
			_action_mc.drag_mc.mouseChildren = false;
			_action_mc.drag_mc.mouseEnabled = false;
			_action_mc.drag_mc.removeEventListener("mousedown", _onMouseDownDragHuntingActionFunc, false);
			_action_mc.drag_mc.removeEventListener("pressmove", _onPressMoveDragHuntingActionFunc, false);
			_action_mc.drag_mc.removeEventListener("pressup", _onPressUpDragHuntingActionFunc, false);
			/*
			
			*/
			var animation_mc = _action_mc.animations_mc[_information.targetObject_str];
			var timelineControl = new Edapskov_TimelineControl(animation_mc);
			timelineControl.gotoEndFunc();
			timelineControl.addEventListener("completed_timeline", _onFinishAnimatedAnimationPhotoHuntingActionFunc, false);
		}
		else
		{
			_completedShootPhotoHuntingActionFunc();
		}
	}
	function _onFinishAnimatedAnimationPhotoHuntingActionFunc(event)
	{
		_completedShootPhotoHuntingActionFunc();
	}
	function _completedShootPhotoHuntingActionFunc()
	{
		/*
		
		*/
		var i = 0;
		var l = _information.objects_arr.length;
		while(i < l)
		{
			/*
			
			*/
			if(String(_information.targetObject_str) == String(_information.objects_arr[i]))
			{
				_information.objects_arr.splice(i, 1);
			}
			/*
			
			*/
			i++;
		}
		/*
		
		*/
		var object_mc;
		if(_action_mc.list_mc[_information.targetObject_str])
		{
			object_mc = _action_mc.list_mc[_information.targetObject_str];
			object_mc.gotoAndStop(1);
		}
		/*
		
		*/
		_information.targetObject_str = null;
		/*
		
		*/
		if(_information.objects_arr.length <= 0)
		{
			_endPhotoHuntingActionFunc();
		}
		else
		{
			_action_mc.drag_mc.mouseChildren = true;
			_action_mc.drag_mc.mouseEnabled = true;
			_action_mc.drag_mc.addEventListener("mousedown", _onMouseDownDragHuntingActionFunc, false);
			_action_mc.drag_mc.addEventListener("pressmove", _onPressMoveDragHuntingActionFunc, false);
			_action_mc.drag_mc.addEventListener("pressup", _onPressUpDragHuntingActionFunc, false);
		}
	}
	function _endPhotoHuntingActionFunc()
	{
		/*
		
		*/
		if(_currentMainScreen_mc.body_mc.pointer_1)
		{
			_currentMainScreen_mc.body_mc.pointer_1.mouseEnabled = false;
			_currentMainScreen_mc.body_mc.pointer_1.mouseChildren = false;
			_currentMainScreen_mc.body_mc.pointer_1.visible = false;
		}
		/*
		
		*/
		if(_currentMainScreen_mc.body_mc.pointer_2)
		{
			_currentMainScreen_mc.body_mc.pointer_2.mouseEnabled = false;
			_currentMainScreen_mc.body_mc.pointer_2.mouseChildren = false;
			_currentMainScreen_mc.body_mc.pointer_2.visible = false;
		}
		/*
		
		*/
		_action_mc.mouseChildren = false;
		_action_mc.mouseEnabled = false;
		/*
		очищаем переменные
		*/
		_information.objects_arr = null;
		_information.targetObject_str = null;
		_information.totalWait_num = null;
		_information.currentWait_num = null;
		/*
		
		*/
		_completeActionFunc();
	}
	function _skipPhotoHuntingActionFunc()
	{
		/*
		
		*/
		_action_mc.mouseChildren = false;
		_action_mc.mouseEnabled = false;
		/*
		очищаем переменные
		*/
		_information.objects_arr = null;
		_information.targetObject_str = null;
		_information.totalWait_num = null;
		_information.currentWait_num = null;
	}
	/*
	============================================================
	complete & update action
	============================================================
	*/
	/*
	действие выполнено, но не завершено - может проигрываться анимация
	*/
	function _completeActionFunc()
	{
		/*
		СОХРАНЕНИЕ ИГРЫ
		*/
		_saveGameFunc();
		/*
		
		*/
		if(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].updatedCursor !== null)
		{
			_cursorUpdateFunc(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].updatedCursor);
		}
		/*
		
		*/
		if(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].addCompletedSound !== null)
		{
			_soundManager.addSoundFunc(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].addCompletedSound, 0, 0, 0, 0.1, 0);
		}
		if(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].removeCompletedSound !== null)
		{
			_soundManager.removeSoundNameFunc(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].removeCompletedSound);
		}
		/*
		
		*/
		if(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].closeLocFunc !== null)
		{
			_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].closeLocFunc();
		}
		/*
		
		*/
		var subject_mc;
		if(_currentMainScreen_mc.body_mc[_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].pathSubject])
		{
			/*
			
			*/
			subject_mc = _currentMainScreen_mc.body_mc[_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].pathSubject];
			/*
			
			*/
			if(subject_mc.totalFrames > 1)
			{
				if((subject_mc.currentFrame + 1) < subject_mc.totalFrames)
				{
					var timelineControl = new Edapskov_TimelineControl(subject_mc);
					timelineControl.gotoEndFunc();
					timelineControl.addEventListener("completed_timeline", _onCompletedAnimationSubjectActionFunc, false);
				}
				else
				{
					_endActionFunc();
				}
			}
			else
			{
				_endActionFunc();
			}
		}
		else
		{
			_endActionFunc();
		}
	}
	function _onCompletedAnimationSubjectActionFunc(event)
	{
		_endActionFunc();
	}
	/*
	действие полностью завершено
	*/
	function _endActionFunc()
	{
		/*
		
		*/
		_action_mc = null;
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
		var delay_num = Number(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].delay);
		/*
		
		*/
		if(_information.locations[_information.currentNameLocation].currentAction >= _information.locations[_information.currentNameLocation].totalActions)
		{
			_information.timeout_id = setTimeout(_endLocationFunc, delay_num * 1000);
		}
		else
		{
			/*
			
			*/
			var transition_bool = false;
			if(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].transition)
			{
				transition_bool = true;
			}
			/*
			
			*/
			_information.locations[_information.currentNameLocation].currentAction++;
			_information.locations[_information.currentNameLocation].currentNameAction = "action_" + _information.locations[_information.currentNameLocation].currentAction;
			/*
			
			*/
			if(transition_bool)
			{
				_animationTransitionBetweenScenesFunc(_actionFunc, delay_num, 1, null, true);
			}
			else
			{
				_information.timeout_id = setTimeout(_actionFunc, delay_num * 1000);
			}
		}
	}
	/*
	локация полностью завершена
	*/
	function _endLocationFunc()
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
		if(!_information.locations[_information.currentNameLocation].completed)
		{
			_information.locations[_information.currentNameLocation].completed = true;
			_information.targetLocation++;
		}
		/*
		СОХРАНЕНИЕ ИГРЫ
		*/
		_saveGameFunc();
		/*
		
		*/
		_soundManager.removeAllSoundExceptNameFunc(["background_sound", "click_sound"]);
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
	
	*/
	function _updateIndicatorFunc(share_num)
	{
		/*
		
		*/
		if(share_num === undefined)
		{
			share_num = 0;
		}
		else
		{
			share_num = Number(share_num);
		}
		/*
		
		*/
		if(_currentMainScreen_mc.body_mc.indicator_mc)
		{
			_currentMainScreen_mc.body_mc.indicator_mc.gotoAndStop(0);
			_currentMainScreen_mc.body_mc.indicator_mc.indicator_mc.gotoAndStop(0);
			_currentMainScreen_mc.body_mc.indicator_mc.indicator_mc.indicator_mc.scaleX = share_num;
			/*
			
			*/
			if(_currentMainScreen_mc.body_mc.indicator_mc.indicator_mc.output_numbers_comp)
			{
				_currentMainScreen_mc.body_mc.indicator_mc.indicator_mc.output_numbers_comp.gotoAndStop(0);
				_currentMainScreen_mc.body_mc.indicator_mc.indicator_mc.output_numbers_comp.setValueFunc(Math.floor(share_num * 100));
			}
			else
			{
				if(_currentMainScreen_mc.body_mc.indicator_mc.indicator_mc.txtField_txt)
				{
					_currentMainScreen_mc.body_mc.indicator_mc.indicator_mc.txtField_txt.text = Math.floor(share_num * 100) + "%";
				}
			}
		}
	}
	/*
	
	*/
	function _onClickSkipBtnFunc(event)
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
		var current_btn = event.currentTarget;
		/*
		
		*/
		var point_obj = current_btn.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		current_btn.visible = false;
		current_btn.removeEventListener("click", _onClickSkipBtnFunc, false);
		/*
		
		*/
		if(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].type === "click")
		{
			_skipClickActionFunc();
		}
		else if(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].type === "move")
		{
			_skipMoveActionFunc();
		}
		else if(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].type === "rub")
		{
			_skipRubActionFunc();
		}
		else if(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].type === "drag")
		{
			_skipDragActionFunc();
		}
		else if(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].type === "сlicker")
		{
			_skipClickerActionFunc();
		}
		else if(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].type === "dressup")
		{
			_skipDressupActionFunc();
		}
		else if(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].type === "dressupSecond")
		{
			_skipDressupSecondActionFunc();
		}
		else if(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].type === "find")
		{
			_skipFindActionFunc();
		}
		else if(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].type === "findSecond")
		{
			_skipFindSecondActionFunc();
		}
		else if(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].type === "photoHunting")
		{
			_skipPhotoHuntingActionFunc();
		}
		/*
		
		*/
		_information.locations[_information.currentNameLocation].currentAction = Number(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].skipAndGoto);
		_information.locations[_information.currentNameLocation].currentNameAction = "action_" + _information.locations[_information.currentNameLocation].currentAction;
		/*
		
		*/
		if(_information.locations[_information.currentNameLocation].currentAction === 0)
		{
			_endLocationFunc();
		}
		else
		{
			_actionFunc();
		}
	}
	/*
	==============================================================================================================
	update heroes
	==============================================================================================================
	*/
	function _updateHeroesFunc(container_mc, firstRun_bool, animationEnabled_bool)
	{
		/*
		
		*/
		if(firstRun_bool === undefined)
		{
			firstRun_bool = false;
		}
		else
		{
			firstRun_bool = Boolean(firstRun_bool);
		}
		if(animationEnabled_bool === undefined)
		{
			animationEnabled_bool = true;
		}
		else
		{
			animationEnabled_bool = Boolean(animationEnabled_bool);
		}
		/*
		
		*/
		var hero_mc;
		var option_mc;
		var frame_num = Number(container_mc.currentFrame + 1);
		var hero_str;
		/*
		
		*/
		for(var propHero in _information.heroes)
		{
			if(_information.heroes.hasOwnProperty(propHero))
			{
				/*
				
				*/
				hero_str = String(propHero + "_" + frame_num);
				/*
				
				*/
				if(container_mc[propHero] || container_mc[hero_str])
				{
					/*
					
					*/
					hero_mc = container_mc[propHero];
					_animationHeroManagementFunc(hero_mc, firstRun_bool, animationEnabled_bool);
					/*
					
					*/
					if(container_mc[hero_str])
					{
						hero_mc = container_mc[hero_str];
						_animationHeroManagementFunc(hero_mc, firstRun_bool, animationEnabled_bool);
					}
					/*
					
					*/
					for(var propObject in _information.heroes[propHero].currentDress)
					{
						if(_information.heroes[propHero].currentDress.hasOwnProperty(propObject))
						{
							/*
							
							*/
							frame_num = _information.heroes[propHero].currentDress[propObject].currentOption;
							/*
							
							*/
							if(propObject === "bg")
							{
								if(container_mc[propObject])
								{
									option_mc = container_mc[propObject];
									option_mc.gotoAndStop(frame_num - 1);
								}
							}
							else
							{
								if(hero_mc[propObject])
								{
									/*
									
									*/
									option_mc = hero_mc[propObject];
									/*
									
									*/
									if(frame_num <= 0)
									{
										frame_num = option_mc.totalFrames;
									}
									/*
									
									*/
									option_mc.gotoAndStop(frame_num - 1);
									/*
									
									*/
									_updateBodyFunc(option_mc, _information.heroes[propHero].currentDress[propObject].currentColor, _information.heroes[propHero].currentDress[propObject].currentTexture, _information.heroes[propHero].currentDress[propObject].currentAlphaTexture);
									/*
									
									*/
									if(propObject == "hair")
									{
										if(hero_mc.fringe)
										{
											/*
											
											*/
											hero_mc.fringe.gotoAndStop(frame_num - 1);
											/*
											
											*/
											_updateBodyFunc(hero_mc.fringe, _information.heroes[propHero].currentDress[propObject].currentColor, _information.heroes[propHero].currentDress[propObject].currentTexture, _information.heroes[propHero].currentDress[propObject].currentAlphaTexture);
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
	function _animationHeroManagementFunc(hero_mc, firstRun_bool, animationEnabled_bool)
	{
		if(firstRun_bool)
		{
			/*
			
			*/
			hero_mc.gotoAndStop(0);
			/*
			
			*/
			if(animationEnabled_bool)
			{
				hero_mc.play();
			}
		}
		else
		{
			if(animationEnabled_bool)
			{
				hero_mc.play();
			}
			else
			{
				//hero_mc.stop();
				hero_mc.gotoAndStop(0);
			}
		}
	}
	function _updateBodyFunc(object_mc, color_num, texture_num, alphaTexture_num)
	{
		/*
		
		*/
		if(color_num !== undefined)
		{
			if(color_num !== null)
			{
				color_num = Number(color_num);
			}
		}
		else
		{
			color_num = null;
		}
		if(texture_num !== undefined)
		{
			if(texture_num !== null)
			{
				texture_num = Math.round(texture_num);
			}
		}
		else
		{
			texture_num = null;
		}
		if(alphaTexture_num !== undefined)
		{
			if(alphaTexture_num !== null)
			{
				alphaTexture_num = Number(alphaTexture_num);
			}
		}
		else
		{
			alphaTexture_num = null;
		}
		/*
		
		*/
		var container_mc;
		var body_mc;
		var texture_mc;
		var totalFrames_num;
		/*
		
		*/
		if(object_mc["body_" + (object_mc.currentFrame + 1) + "_mc"])
		{
			/*
			
			*/
			container_mc = object_mc["body_" + (object_mc.currentFrame + 1) + "_mc"];
			container_mc.gotoAndStop(0);
			/*
			
			*/
			if(color_num != null)
			{
				if(container_mc["body_mc"])
				{
					/*
					
					*/
					body_mc = container_mc["body_mc"];
					body_mc.gotoAndStop(0);
					/*
					
					*/
					if(body_mc.totalFrames <= 1)
					{
						_colouringFunc(body_mc, color_num);
					}
					else
					{
						/*
						
						*/
						totalFrames_num = Number(body_mc.totalFrames);
						/*
						
						*/
						if(color_num != null)
						{
							if((color_num > 0) && (color_num <= totalFrames_num))
							{
								body_mc.gotoAndStop(Number(color_num - 1));
							}
							else
							{
								body_mc.gotoAndStop(Number(totalFrames_num - 1));
							}
						}
						else
						{
							body_mc.gotoAndStop(Number(totalFrames_num - 1));
						}
					}
				}
			}
			/*
			
			*/
			if(container_mc["texture_mc"])
			{
				/*
				
				*/
				texture_mc = container_mc["texture_mc"];
				texture_mc.gotoAndStop(0);
				totalFrames_num = Number(texture_mc.totalFrames);
				/*
				
				*/
				if(texture_num != null)
				{
					if((texture_num > 0) && (texture_num <= totalFrames_num))
					{
						texture_mc.gotoAndStop(Number(texture_num - 1));
					}
					else
					{
						texture_mc.gotoAndStop(Number(totalFrames_num - 1));
					}
				}
				else
				{
					texture_mc.gotoAndStop(Number(totalFrames_num - 1));
				}
				/*
				
				*/
				if(alphaTexture_num != null)
				{
					if(alphaTexture_num < 0.1)
					{
						texture_mc.alpha = 0.1;
					}
					else
					{
						texture_mc.alpha = alphaTexture_num;
					}
				}
				else
				{
					texture_mc.alpha = 1;
				}
			}
		}
	}
	/*
	
	*/
	function _colouringFunc(displayObject, color_num)
	{
		var bounds_rect = displayObject.getBounds();
		var redColor_num = (color_num >>> 16) & 0xff;
		var greenColor_num = (color_num >>>  8) & 0xff;
		var blueColor_num = color_num & 0xff;
		displayObject.filters = [new createjs.ColorFilter(0, 0, 0, 1, redColor_num, greenColor_num, blueColor_num, 0)];
		if(displayObject.bitmapCache)
		{
			displayObject.updateCache();
		}
		else
		{
			displayObject.cache(bounds_rect.x, bounds_rect.y, bounds_rect.width, bounds_rect.height);
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
									_information.locations[propLocations].currentAction = Number(loadInformation_obj.locations[propLocations].currentAction);
									_information.locations[propLocations].currentNameAction = "action_" + _information.locations[propLocations].currentAction;
								}
							}
						}
					}
					/*
					
					*/
					if(loadInformation_obj.hasOwnProperty("heroes"))
					{
						for(var propHeroes in loadInformation_obj.heroes)
						{
							if(loadInformation_obj.heroes.hasOwnProperty(propHeroes))
							{
								if(_information.heroes.hasOwnProperty(propHeroes))
								{
									_information.heroes[propHeroes].currentSet = String(loadInformation_obj.heroes[propHeroes].currentSet);
									if(loadInformation_obj.heroes[propHeroes].hasOwnProperty("currentDress"))
									{
										if(_information.heroes[propHeroes].hasOwnProperty("currentDress"))
										{
											for(var propCurrentDress in loadInformation_obj.heroes[propHeroes].currentDress)
											{
												if(loadInformation_obj.heroes[propHeroes].currentDress.hasOwnProperty(propCurrentDress))
												{
													if(_information.heroes[propHeroes].currentDress.hasOwnProperty(propCurrentDress))
													{
														if(loadInformation_obj.heroes[propHeroes].currentDress[propCurrentDress].hasOwnProperty("currentOption"))
														{
															_information.heroes[propHeroes].currentDress[propCurrentDress].currentOption = Number(loadInformation_obj.heroes[propHeroes].currentDress[propCurrentDress].currentOption);
														}
														if(loadInformation_obj.heroes[propHeroes].currentDress[propCurrentDress].hasOwnProperty("currentColor"))
														{
															_information.heroes[propHeroes].currentDress[propCurrentDress].currentColor = Number(loadInformation_obj.heroes[propHeroes].currentDress[propCurrentDress].currentColor);
														}
														if(loadInformation_obj.heroes[propHeroes].currentDress[propCurrentDress].hasOwnProperty("currentTexture"))
														{
															_information.heroes[propHeroes].currentDress[propCurrentDress].currentTexture = Number(loadInformation_obj.heroes[propHeroes].currentDress[propCurrentDress].currentTexture);
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
		}
	}
	/*
	сохраняем необходимые данные приложения
	*/
	function _saveGameFunc()
	{
		/*
		
		*/
		var loadInformation_obj = {locations:{}, heroes:{}};
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
				loadInformation_obj.locations[propLocations].currentAction = Number(_information.locations[propLocations].currentAction);
			}
		}
		/*
		
		*/
		for(var propHeroes in _information.heroes)
		{
			if(_information.heroes.hasOwnProperty(propHeroes))
			{
				loadInformation_obj.heroes[propHeroes] = {};
				loadInformation_obj.heroes[propHeroes].currentSet = String(_information.heroes[propHeroes].currentSet);
				loadInformation_obj.heroes[propHeroes].currentDress = {};
				for(var propCurrentDress in _information.heroes[propHeroes].currentDress)
				{
					if(_information.heroes[propHeroes].currentDress.hasOwnProperty(propCurrentDress))
					{
						loadInformation_obj.heroes[propHeroes].currentDress[propCurrentDress] = {};
						loadInformation_obj.heroes[propHeroes].currentDress[propCurrentDress].currentOption = Number(_information.heroes[propHeroes].currentDress[propCurrentDress].currentOption);
						loadInformation_obj.heroes[propHeroes].currentDress[propCurrentDress].currentColor = Number(_information.heroes[propHeroes].currentDress[propCurrentDress].currentColor);
						loadInformation_obj.heroes[propHeroes].currentDress[propCurrentDress].currentTexture = Number(_information.heroes[propHeroes].currentDress[propCurrentDress].currentTexture);
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
		window.open("https://dl-girls.com/content/folder_1709396015" + "?utm_source=" + window.location.href + "&utm_medium=game_referral|game&utm_content=simple&utm_campaign=" + _TITLE, "_self");
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
		_soundManager.addSoundFunc("completed_sound", 1, 0, 0, 0.1, 0);
		//_soundManager.addSoundFunc("completed_sound", 0, 0, 0, 0.2, 0);
		//_soundManager.addSoundFunc("completed_sound", 0, 0, -1, 0.2, 0); 
		/*
		
		*/
		_clearContainerFunc(_main);
		_clearContainerFunc(_before);
		/*
		
		*/
		_currentMainScreen_mc = new lib.ResultScreen();
		_main.addChild(_currentMainScreen_mc);
		_currentMainScreen_mc.gotoAndStop(0);
		_currentMainScreen_mc.addEventListener("click", _onClickResultScreenFunc, false);
		/*
		
		*/
		_currentMainScreen_mc.logo_btn.addEventListener("click", _onClickLogoBtnFunc, false);
		/*
		
		*/
		_currentMainScreen_mc.photoContainer_mc.gotoAndStop(0);
		_currentMainScreen_mc.photoContainer_mc.logo_btn.visible = false;
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
		if(_currentMainScreen_mc.photo_btn)
		{
			_currentMainScreen_mc.photo_btn.addEventListener("click", _onClickPhotoBtnFunc, false);
		}
		/*
		
		*/
		_currentMainScreen_mc.playAgain_btn.addEventListener("click", _onClickPlayBtnFunc, false);
		/*
		
		*/
		_currentMainScreen_mc.photoContainer_mc.heroes_mc.gotoAndStop(0);
		_updateHeroesFunc(_currentMainScreen_mc.photoContainer_mc.heroes_mc, true, true);
		/*
		исключения
		*/
		if(_currentMainScreen_mc.photoContainer_mc.heroes_mc.container_1_mc)
		{
			_currentMainScreen_mc.photoContainer_mc.heroes_mc.container_1_mc.gotoAndStop(0);
			//_currentMainScreen_mc.photoContainer_mc.heroes_mc.container_1_mc.gotoAndStop(_information.currentNameLocation);
			_updateHeroesFunc(_currentMainScreen_mc.photoContainer_mc.heroes_mc.container_1_mc, true, true);
			_currentMainScreen_mc.photoContainer_mc.heroes_mc.container_1_mc.play();
		}
		if(_currentMainScreen_mc.photoContainer_mc.heroes_mc.container_2_mc)
		{
			_currentMainScreen_mc.photoContainer_mc.heroes_mc.container_2_mc.gotoAndStop(0);
			//_currentMainScreen_mc.photoContainer_mc.heroes_mc.container_2_mc.gotoAndStop(_information.currentNameLocation);
			_updateHeroesFunc(_currentMainScreen_mc.photoContainer_mc.heroes_mc.container_2_mc, true, true);
			_currentMainScreen_mc.photoContainer_mc.heroes_mc.container_2_mc.play();
		}
		if(_currentMainScreen_mc.photoContainer_mc.heroes_mc.container_3_mc)
		{
			_currentMainScreen_mc.photoContainer_mc.heroes_mc.container_3_mc.gotoAndStop(0);
			//_currentMainScreen_mc.photoContainer_mc.heroes_mc.container_3_mc.gotoAndStop(_information.currentNameLocation);
			_updateHeroesFunc(_currentMainScreen_mc.photoContainer_mc.heroes_mc.container_3_mc, true, true);
			_currentMainScreen_mc.photoContainer_mc.heroes_mc.container_3_mc.play();
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
		
		*/
		//_createPanelFiltersFunc();
		/*
		
		*/
		if(_currentMainScreen_mc.photoContainer_mc.bg)
		{
			_currentMainScreen_mc.photoContainer_mc.bg.cache(-(_BGWIDTH - _CWIDTH) / 2, 0, _BGWIDTH, _CHEIGHT);
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
		_information.timeout_id = setTimeout(_redirectFunc, 12000);
		*/
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
		_updateHeroesFunc(_currentMainScreen_mc.photoContainer_mc.heroes_mc);
		/*
		исключения
		*/
		if(_currentMainScreen_mc.photoContainer_mc.heroes_mc.container_1_mc)
		{
			//_currentMainScreen_mc.photoContainer_mc.heroes_mc.container_1_mc.gotoAndStop(_information.currentNameLocation);
			_updateHeroesFunc(_currentMainScreen_mc.photoContainer_mc.heroes_mc.container_1_mc);
		}
		if(_currentMainScreen_mc.photoContainer_mc.heroes_mc.container_2_mc)
		{
			//_currentMainScreen_mc.photoContainer_mc.heroes_mc.container_2_mc.gotoAndStop(_information.currentNameLocation);
			_updateHeroesFunc(_currentMainScreen_mc.photoContainer_mc.heroes_mc.container_2_mc);
		}
		if(_currentMainScreen_mc.photoContainer_mc.heroes_mc.container_3_mc)
		{
			//_currentMainScreen_mc.photoContainer_mc.heroes_mc.container_3_mc.gotoAndStop(_information.currentNameLocation);
			_updateHeroesFunc(_currentMainScreen_mc.photoContainer_mc.heroes_mc.container_3_mc);
		}
		/*
		
		*/
		//_updateFilterFunc(_currentMainScreen_mc.photoContainer_mc.heroes_mc, _information.currentFilter);
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
		_updateHeroesFunc(_currentMainScreen_mc.photoContainer_mc.heroes_mc);
		/*
		исключения
		*/
		if(_currentMainScreen_mc.photoContainer_mc.heroes_mc.container_1_mc)
		{
			//_currentMainScreen_mc.photoContainer_mc.heroes_mc.container_1_mc.gotoAndStop(_information.currentNameLocation);
			_updateHeroesFunc(_currentMainScreen_mc.photoContainer_mc.heroes_mc.container_1_mc);
		}
		if(_currentMainScreen_mc.photoContainer_mc.heroes_mc.container_2_mc)
		{
			//_currentMainScreen_mc.photoContainer_mc.heroes_mc.container_2_mc.gotoAndStop(_information.currentNameLocation);
			_updateHeroesFunc(_currentMainScreen_mc.photoContainer_mc.heroes_mc.container_2_mc);
		}
		if(_currentMainScreen_mc.photoContainer_mc.heroes_mc.container_3_mc)
		{
			//_currentMainScreen_mc.photoContainer_mc.heroes_mc.container_3_mc.gotoAndStop(_information.currentNameLocation);
			_updateHeroesFunc(_currentMainScreen_mc.photoContainer_mc.heroes_mc.container_3_mc);
		}
		/*
		
		*/
		//_updateFilterFunc(_currentMainScreen_mc.photoContainer_mc.heroes_mc, _information.currentFilter);
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
	
	*/
	function _onClickResultScreenFunc(event)
	{
		//trace(event);
	}
	/*
	
	*/
	function _createPanelFiltersFunc()
	{
		/*
		
		*/
		var filters_mc;
		/*
		
		*/
		if(_currentMainScreen_mc.filters_animation_mc)
		{
			/*
			
			*/
			_currentMainScreen_mc.filters_animation_mc.gotoAndStop(0);
			/*
			
			*/
			if(_currentMainScreen_mc.filters_animation_mc.filters_container_mc)
			{
				/*
				
				*/
				_currentMainScreen_mc.filters_animation_mc.filters_container_mc.gotoAndStop(0);
				/*
				
				*/
				if(_currentMainScreen_mc.filters_animation_mc.filters_container_mc.filters_mc)
				{
					/*
					
					*/
					_information.currentFilter = 0;
					/*
					
					*/
					filters_mc = _currentMainScreen_mc.filters_animation_mc.filters_container_mc.filters_mc;
					filters_mc.gotoAndStop(0);
					filters_mc.setValueFunc(_information.currentFilter);
					filters_mc.addEventListener("change_radio_button", _onChangeRadioButtonFiltersFunc, false);
					/*
					
					*/
					if(_currentMainScreen_mc.filters_animation_mc.filters_container_mc.open_mc)
					{
						_currentMainScreen_mc.filters_animation_mc.filters_container_mc.open_mc.visible = true;
						_currentMainScreen_mc.filters_animation_mc.filters_container_mc.open_mc.mouseEnabled = true;
						_currentMainScreen_mc.filters_animation_mc.filters_container_mc.open_mc.mouseChildren = false;
						_currentMainScreen_mc.filters_animation_mc.filters_container_mc.open_mc.cursor = "pointer";
						_currentMainScreen_mc.filters_animation_mc.filters_container_mc.open_mc.addEventListener("click", _onClickOpenFiltersMcFunc, false);
					}
					/*
					
					*/
					if(_currentMainScreen_mc.filters_animation_mc.filters_container_mc.exit_mc)
					{
						_currentMainScreen_mc.filters_animation_mc.filters_container_mc.exit_mc.visible = false;
						_currentMainScreen_mc.filters_animation_mc.filters_container_mc.exit_mc.mouseEnabled = true;
						_currentMainScreen_mc.filters_animation_mc.filters_container_mc.exit_mc.mouseChildren = false;
						_currentMainScreen_mc.filters_animation_mc.filters_container_mc.exit_mc.cursor = "pointer";
						_currentMainScreen_mc.filters_animation_mc.filters_container_mc.exit_mc.addEventListener("click", _onClickExitFiltersMcFunc, false);
					}
				}
			}
		}
	}
	function _onChangeRadioButtonFiltersFunc(event)
	{
		/*
		
		*/
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 0.2, 0);
		/*
		
		*/
		var filter_num = event.numberValue;
		_information.currentFilter = filter_num;
		/*
		
		*/
		_updateFilterFunc(_currentMainScreen_mc.photoContainer_mc.heroes_mc, _information.currentFilter);
	}
	function _updateFilterFunc(container_mc, filter_num)
	{
		/*
		
		*/
		if(filter_num !== undefined)
		{
			if(filter_num !== null)
			{
				filter_num = Number(filter_num);
			}
			else
			{
				filter_num = 0;
			}
		}
		else
		{
			filter_num = 0;
		}
		/*
		
		*/
		var matrix;
		var filter_obj;
		/*
		
		*/
		if(filter_num == 1)
		{
			/*
			matrix = new createjs.ColorMatrix().adjustSaturation(-100);
			filter_obj = new createjs.ColorMatrixFilter(matrix);
			container_mc.filters = [filter_obj];
			*/
			filter_obj = new createjs.ColorMatrixFilter([0.30, 0.30, 0.30, 0, 0, 0.30, 0.30, 0.30, 0, 0, 0.30, 0.30, 0.30, 0, 0, 0, 0, 0, 1, 0]);
			container_mc.filters = [filter_obj];
		}
		else if(filter_num == 2)
		{
			filter_obj = new createjs.ColorMatrixFilter([0.39, 0.77, 0.19, 0, 0, 0.35, 0.68, 0.17, 0, 0, 0.27, 0.53, 0.13, 0, 0, 0, 0, 0, 1, 0]);
			container_mc.filters = [filter_obj];
		}
		else if(filter_num == 3)
		{
			filter_obj = new createjs.ColorFilter(1, 1, 0, 1, 0, 0, 128, 0);
			container_mc.filters = [filter_obj];
		}
		else
		{
			container_mc.filters = [];
		}
		/*
		
		*/
		var bounds_obj = container_mc.getBounds();
		if(container_mc.bitmapCache)
		{
			container_mc.updateCache();
		}
		else
		{
			container_mc.cache(bounds_obj.x, bounds_obj.y, bounds_obj.width, bounds_obj.height);
		}
	}
	function _onClickOpenFiltersMcFunc(event)
	{
		/*
		
		*/
		var point_obj = event.currentTarget.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 0.2, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		_currentMainScreen_mc.filters_animation_mc.filters_container_mc.open_mc.visible = false;
		_currentMainScreen_mc.filters_animation_mc.filters_container_mc.exit_mc.visible = true;
		/*
		
		*/
		_currentMainScreen_mc.filters_animation_mc.gotoAndPlay("open");
	}
	function _onClickExitFiltersMcFunc(event)
	{
		/*
		
		*/
		var point_obj = event.currentTarget.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 0.2, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		_currentMainScreen_mc.filters_animation_mc.filters_container_mc.open_mc.visible = true;
		_currentMainScreen_mc.filters_animation_mc.filters_container_mc.exit_mc.visible = false;
		/*
		
		*/
		_currentMainScreen_mc.filters_animation_mc.gotoAndPlay("exit");
	}
	/*
	
	*/
	function _onClickPhotoBtnFunc(event)
	{
		/*
		
		*/
		_soundManager.addSoundFunc("photo_sound", 0, 0, 0, 1, 0, false);
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
			_updateVisibleDisplayObjectFunc(_currentMainScreen_mc);
			/*
			
			*/
			_addAdsFunc();
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
		photoContainer_mc.heroes_mc.gotoAndStop(_currentMainScreen_mc.photoContainer_mc.heroes_mc.currentFrame);
		_updateHeroesFunc(photoContainer_mc.heroes_mc, true, false);
		if(photoContainer_mc.heroes_mc.container_1_mc)
		{
			photoContainer_mc.heroes_mc.container_1_mc.gotoAndStop(0);
			//photoContainer_mc.heroes_mc.container_1_mc.gotoAndStop(_information.currentNameLocation);
			_updateHeroesFunc(photoContainer_mc.heroes_mc.container_1_mc, true, false);
		}
		if(photoContainer_mc.heroes_mc.container_2_mc)
		{
			photoContainer_mc.heroes_mc.container_2_mc.gotoAndStop(0);
			//photoContainer_mc.heroes_mc.container_2_mc.gotoAndStop(_information.currentNameLocation);
			_updateHeroesFunc(photoContainer_mc.heroes_mc.container_2_mc, true, false);
		}
		if(photoContainer_mc.heroes_mc.container_3_mc)
		{
			photoContainer_mc.heroes_mc.container_3_mc.gotoAndStop(0);
			//photoContainer_mc.heroes_mc.container_3_mc.gotoAndStop(_information.currentNameLocation);
			_updateHeroesFunc(photoContainer_mc.heroes_mc.container_3_mc, true, false);
		}
		/*
		
		*/
		//_updateFilterFunc(photoContainer_mc.heroes_mc, _information.currentFilter);
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
		if((_information.rewardHero != null) && (_information.rewardObject != null))
		{
			/*
			
			*/
			_updateObjectMcDressupActionFunc(_information.rewardHero, _information.rewardObject);
			/*
			
			*/
			_information.rewardHero = null;
			_information.rewardObject = null;
		}
	}
	this.showAntiBlockingAdsFunc = function()
	{
		_simpleScreenFunc("AntiBlockingAdsScreen");
	}
	/*
	функции-исключения
	*/
	function _openLocFunc_1_1()
	{
		
	}
	function _closeLocFunc_6_1()
	{
		_addAdsFunc();
	}
	function _openLocFunc_1_2()
	{
		_information.currentNameHero = "hero_1";
		_information.heroes[_information.currentNameHero].currentSet = "set_1";
	}
	function _openLocFunc_1_3()
	{
		_information.currentNameHero = "hero_1";
		_information.heroes[_information.currentNameHero].currentSet = "set_2";
	}
	function _openLocFunc_2_3()
	{
		_information.currentNameHero = "hero_1";
		_information.heroes[_information.currentNameHero].currentSet = "set_3";
	}
	function _closeLocFunc_3_3()
	{
		_addAdsFunc();
	}
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