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
	var _BGCOLOR = "#000000";
	var _FONT = "Arial";
	var _TITLE = "Fury of the Steampunk Princess";
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
						type:"dressup",
						frame:1,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:null,
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
						firstVar:1
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
						firstVar:1
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
						openLocFunc:_openLocFunc_2_2,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:1
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
						closeLocFunc:_closeLocFunc_3_2,
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
						firstVar:1
					}
				}
			},
			location_4:{
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
						openLocFunc:_openLocFunc_1_4,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:1
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
						openLocFunc:_openLocFunc_2_4,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:1
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
						closeLocFunc:_closeLocFunc_3_4,
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
						frames:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
					},
					set_2:{
						currentIndex:0,
						frames:[1, 2, 3, 4, 5, 6]
					},
					set_3:{
						currentIndex:0,
						frames:[1, 2, 3, 4, 5, 6, 7]
					}
				},
				totalDress:{
					eyes_0:{rewarded:false},
					eyes_1:{rewarded:false},
					eyes_2:{rewarded:false},
					eyes_3:{rewarded:false},
					eyes_4:{rewarded:false},
					eyes_5:{rewarded:false},
					eyes_6:{rewarded:false},
					makeup_0:{rewarded:false},
					makeup_1:{rewarded:false},
					makeup_2:{rewarded:false},
					makeup_3:{rewarded:false},
					makeup_4:{rewarded:false},
					makeup_5:{rewarded:false},
					makeup_6:{rewarded:false},
					lips_0:{rewarded:false},
					lips_1:{rewarded:false},
					lips_2:{rewarded:false},
					lips_3:{rewarded:false},
					lips_4:{rewarded:false},
					lips_5:{rewarded:false},
					lips_6:{rewarded:false},
					eyebrows_0:{rewarded:false},
					eyebrows_1:{rewarded:false},
					eyebrows_2:{rewarded:false},
					eyebrows_3:{rewarded:false},
					eyebrows_4:{rewarded:false},
					eyebrows_5:{rewarded:false},
					eyebrows_6:{rewarded:false},
					hair_0:{rewarded:false},
					hair_1:{rewarded:false},
					hair_2:{rewarded:false},
					hair_3:{rewarded:false},
					hair_4:{rewarded:false},
					hair_5:{rewarded:false},
					hair_6:{rewarded:false},
					dress_0:{rewarded:false},
					dress_1:{rewarded:false},
					dress_2:{rewarded:false},
					dress_3:{rewarded:false},
					dress_4:{rewarded:false},
					dress_5:{rewarded:false},
					dress_6:{rewarded:false},
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
					accessory_0:{rewarded:false},
					accessory_1:{rewarded:false},
					accessory_2:{rewarded:false},
					accessory_3:{rewarded:false},
					accessory_4:{rewarded:false},
					accessory_5:{rewarded:false},
					accessory_6:{rewarded:false},
					accessory_7:{rewarded:false},
					accessory_8:{rewarded:false},
					accessory_9:{rewarded:false},
					accessory_10:{rewarded:false},
					accessory_11:{rewarded:false},
					accessory_12:{rewarded:false},
					bg_0:{rewarded:false},
					bg_1:{rewarded:false}
				},
				currentDress:{
					eyes:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					makeup:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					lips:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					eyebrows:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					hair:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					dress:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					earrings:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					accessory:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					bg:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1}
				}
			},
			hero_2:{
				currentSet:"set_1",
				totalSets:{
					set_1:{
						currentIndex:0,
						frames:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
					},
					set_2:{
						currentIndex:0,
						frames:[1, 2, 3, 4, 5, 6]
					},
					set_3:{
						currentIndex:0,
						frames:[1, 2, 3, 4, 5, 6, 7]
					}
				},
				totalDress:{
					eyes_0:{rewarded:false},
					eyes_1:{rewarded:false},
					eyes_2:{rewarded:false},
					eyes_3:{rewarded:false},
					eyes_4:{rewarded:false},
					eyes_5:{rewarded:false},
					eyes_6:{rewarded:false},
					makeup_0:{rewarded:false},
					makeup_1:{rewarded:false},
					makeup_2:{rewarded:false},
					makeup_3:{rewarded:false},
					makeup_4:{rewarded:false},
					makeup_5:{rewarded:false},
					makeup_6:{rewarded:false},
					lips_0:{rewarded:false},
					lips_1:{rewarded:false},
					lips_2:{rewarded:false},
					lips_3:{rewarded:false},
					lips_4:{rewarded:false},
					lips_5:{rewarded:false},
					lips_6:{rewarded:false},
					eyebrows_0:{rewarded:false},
					eyebrows_1:{rewarded:false},
					eyebrows_2:{rewarded:false},
					eyebrows_3:{rewarded:false},
					eyebrows_4:{rewarded:false},
					eyebrows_5:{rewarded:false},
					eyebrows_6:{rewarded:false},
					hair_0:{rewarded:false},
					hair_1:{rewarded:false},
					hair_2:{rewarded:false},
					hair_3:{rewarded:false},
					hair_4:{rewarded:false},
					hair_5:{rewarded:false},
					hair_6:{rewarded:false},
					dress_0:{rewarded:false},
					dress_1:{rewarded:false},
					dress_2:{rewarded:false},
					dress_3:{rewarded:false},
					dress_4:{rewarded:false},
					dress_5:{rewarded:false},
					dress_6:{rewarded:false},
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
					accessory_0:{rewarded:false},
					accessory_1:{rewarded:false},
					accessory_2:{rewarded:false},
					accessory_3:{rewarded:false},
					accessory_4:{rewarded:false},
					accessory_5:{rewarded:false},
					accessory_6:{rewarded:false},
					accessory_7:{rewarded:false},
					accessory_8:{rewarded:false},
					accessory_9:{rewarded:false},
					accessory_10:{rewarded:false},
					accessory_11:{rewarded:false},
					accessory_12:{rewarded:false},
					bg_0:{rewarded:false},
					bg_1:{rewarded:false}
				},
				currentDress:{
					eyes:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					makeup:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					lips:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					eyebrows:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					hair:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					dress:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					earrings:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					accessory:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
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
		logo_img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozMkNGOTMxNEE2MzJGMDExQUVGRkIxNjJENEQxMDk1NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBRjdGNUVCMjQ4QzYxMUYxODIyN0JBMzZFN0Y5NTYyOCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBRjdGNUVCMTQ4QzYxMUYxODIyN0JBMzZFN0Y5NTYyOCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpEQkI0OUFFMUM0NDhGMTExQTJEQzg3ODgzRDEyRUI0NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozMkNGOTMxNEE2MzJGMDExQUVGRkIxNjJENEQxMDk1NiIvPiA8L3JkZjpEZXNjcmlwdGlv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";
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
		loadQueue.loadFile({id:"magic_2_sound", src:"library/sounds/magic_2_sound.ogg"});
		loadQueue.loadFile({id:"message_sound", src:"library/sounds/message_sound.ogg"});
		loadQueue.loadFile({id:"tink_sound", src:"library/sounds/tink_sound.ogg"});
		loadQueue.loadFile({id:"electric_sound", src:"library/sounds/electric_sound.ogg"});
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
		new Edapskov_Flickering(_before, location_mc, ["#ffffff", "#dddddd"], 10, 24);
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
			if(_skippedLocationsFunc() == 3)
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
				new Edapskov_Flickering(_before, _action_mc[hero_str][key], ["#ffffff", "#dddddd"], 10, 18);
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
		new Edapskov_Flickering(_before, currentTarget_mc, ["#ffffff", "#dddddd"], 4, 18);
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
		window.open("https://dl-girls.com/content/folder_1710606259" + "?utm_source=" + window.location.href + "&utm_medium=game_referral|game&utm_content=simple&utm_campaign=" + _TITLE, "_self");
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
		_information.currentNameHero = "hero_1";
		_information.heroes[_information.currentNameHero].currentSet = "set_1";
	}
	function _openLocFunc_1_2()
	{
		_information.currentNameHero = "hero_1";
		_information.heroes[_information.currentNameHero].currentSet = "set_2";
	}
	function _openLocFunc_2_2()
	{
		_information.currentNameHero = "hero_1";
		_information.heroes[_information.currentNameHero].currentSet = "set_3";
	}
	function _closeLocFunc_3_2()
	{
		_addAdsFunc();
	}
	function _openLocFunc_1_3()
	{
		_information.currentNameHero = "hero_2";
		_information.heroes[_information.currentNameHero].currentSet = "set_1";
	}
	function _openLocFunc_1_4()
	{
		_information.currentNameHero = "hero_2";
		_information.heroes[_information.currentNameHero].currentSet = "set_2";
	}
	function _openLocFunc_2_4()
	{
		_information.currentNameHero = "hero_2";
		_information.heroes[_information.currentNameHero].currentSet = "set_3";
	}
	function _closeLocFunc_3_4()
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