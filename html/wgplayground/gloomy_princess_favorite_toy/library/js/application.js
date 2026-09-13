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
	var _TITLE = "Gloomy Princess Favorite Toy";
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
						firstVar:2
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
						openLocFunc:_openLocFunc_2_1,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:2
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
						closeLocFunc:_closeLocFunc_3_1,
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
						firstVar:3
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
						type:"dressupSecond",
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
						firstVar:5
					},
					action_2:{
						type:"dressupSecond",
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
						firstVar:3
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
						firstVar:5
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
						frames:[1, 2, 3, 4, 5, 6, 7, 8, 9]
					},
					set_2:{
						currentIndex:0,
						frames:[1, 2, 3, 4, 5, 6]
					},
					set_3:{
						currentIndex:0,
						frames:[1, 2, 3, 4, 5, 6, 7]
					},
					set_4:{
						currentIndex:0,
						frames:[1]
					},
					set_5:{
						currentIndex:0,
						frames:[1, 2, 3, 4, 5]
					},
					set_6:{
						currentIndex:0,
						frames:[1, 2, 3, 4, 5, 6, 7, 8, 9]
					}
				},
				totalDress:{
					blush_0:{rewarded:false},
					blush_1:{rewarded:false},
					blush_2:{rewarded:false},
					blush_3:{rewarded:false},
					blush_4:{rewarded:false},
					blush_5:{rewarded:false},
					blush_6:{rewarded:false},
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
					hair_7:{rewarded:false},
					earrings_0:{rewarded:false},
					earrings_1:{rewarded:false},
					earrings_2:{rewarded:false},
					earrings_3:{rewarded:false},
					earrings_4:{rewarded:false},
					earrings_5:{rewarded:false},
					earrings_6:{rewarded:false},
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
					accessory_0:{rewarded:false},
					accessory_1:{rewarded:false},
					accessory_2:{rewarded:false},
					accessory_3:{rewarded:false},
					accessory_4:{rewarded:false},
					accessory_5:{rewarded:false},
					accessory_6:{rewarded:false},
					headdress_0:{rewarded:false},
					headdress_1:{rewarded:false},
					headdress_2:{rewarded:false},
					headdress_3:{rewarded:false},
					headdress_4:{rewarded:false},
					headdress_5:{rewarded:false},
					headdress_6:{rewarded:false},
					glasses_0:{rewarded:false},
					glasses_1:{rewarded:false},
					glasses_2:{rewarded:false},
					glasses_3:{rewarded:false},
					glasses_4:{rewarded:false},
					glasses_5:{rewarded:false},
					glasses_6:{rewarded:false},
					bg_0:{rewarded:false},
					bg_1:{rewarded:false}
				},
				currentDress:{
					blush:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					shadows:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					eyes:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					lips:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					eyebrows:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					hair:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					earrings:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					dress:{currentOption:null, defaultOption:8, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					accessory:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					headdress:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					glasses:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					bg:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1}
				}
			},
			hero_2:{
				currentSet:"set_1",
				totalSets:{
					set_1:{
						currentIndex:0,
						frames:[1]
					},
					set_2:{
						currentIndex:0,
						frames:[1]
					}
				},
				totalDress:{
					skin_0:{rewarded:false},
					skin_1:{rewarded:false},
					bg_0:{rewarded:false},
					bg_1:{rewarded:false}
				},
				currentDress:{
					skin:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					eyes:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					face:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					nose:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					mouth:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					ears:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					accessory:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					wings:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					claws:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					horns:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
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
		logo_img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozMkNGOTMxNEE2MzJGMDExQUVGRkIxNjJENEQxMDk1NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyOTU1NUFEQTg5N0YxMUYwQjU2MzlGREZGMkJDREExMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyOTU1NUFEOTg5N0YxMUYwQjU2MzlGREZGMkJDREExMSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowRjE2RTQyMzdEODlGMDExQkE3Q0EyMkYyQTE2REE3QiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozMkNGOTMxNEE2MzJGMDExQUVGRkIxNjJENEQxMDk1NiIvPiA8L3JkZjpEZXNjcmlwdGlv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";
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
		loadQueue.loadFile({id:"air_sound", src:"library/sounds/air_sound.ogg"});
		loadQueue.loadFile({id:"whoosh_sound", src:"library/sounds/whoosh_sound.ogg"});
		loadQueue.loadFile({id:"open_sound", src:"library/sounds/open_sound.ogg"});
		loadQueue.loadFile({id:"open_2_sound", src:"library/sounds/open_2_sound.ogg"});
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
		new Edapskov_Flickering(_before, location_mc, ["#ffffff", "#ffffcc"], 10, 24);
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
		if(!_information.locations[_information.currentNameLocation].completed)
		{
			if(_skippedLocationsFunc() == 2)
			{
				_addAdsFunc();
			}
		}
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
								object_mc.visible = false;
								//object_mc.alpha = 0.4;
								/*
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
								*/
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
								object_mc.visible = true;
								//object_mc.alpha = 1;
								/*
								object_mc.uncache();
								object_mc.alpha = 1;
								*/
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
				new Edapskov_Flickering(_before, _action_mc[hero_str][key], ["#ffffff", "#ffffcc"], 10, 18);
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
		new Edapskov_Flickering(_before, currentTarget_mc, ["#ffffff", "#ffffcc"], 4, 18);
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
	function _showNextBtnDressupActionFunc()
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
		currentTarget_btn.visible = false; // опционально
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
		window.open("https://dl-girls.com/content/folder_1755105759" + "?utm_source=" + window.location.href + "&utm_medium=game_referral|game&utm_content=simple&utm_campaign=" + _TITLE, "_self");
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
	function _openLocFunc_2_1()
	{
		_information.currentNameHero = "hero_1";
		_information.heroes[_information.currentNameHero].currentSet = "set_2";
	}
	function _closeLocFunc_3_1()
	{
		_addAdsFunc();
	}
	function _openLocFunc_1_2()
	{
		_information.currentNameHero = "hero_1";
		_information.heroes[_information.currentNameHero].currentSet = "set_3";
	}
	function _openLocFunc_2_2()
	{
		_information.currentNameHero = "hero_1";
		_information.heroes[_information.currentNameHero].currentSet = "set_4";
	}
	function _openLocFunc_1_3()
	{
		_information.currentNameHero = "hero_2";
		_information.heroes[_information.currentNameHero].currentSet = "set_1";
	}
	function _openLocFunc_2_3()
	{
		_information.currentNameHero = "hero_2";
		_information.heroes[_information.currentNameHero].currentSet = "set_2";
	}
	function _closeLocFunc_3_3()
	{
		_addAdsFunc();
	}
	function _openLocFunc_1_4()
	{
		_information.currentNameHero = "hero_1";
		_information.heroes[_information.currentNameHero].currentSet = "set_5";
	}
	function _openLocFunc_2_4()
	{
		_information.currentNameHero = "hero_1";
		_information.heroes[_information.currentNameHero].currentSet = "set_6";
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