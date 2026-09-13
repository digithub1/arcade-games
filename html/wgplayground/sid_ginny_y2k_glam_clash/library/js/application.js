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
	var _TITLE = "Sid & Ginny Y2K Glam Clash";
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
						firstVar:3
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
						type:"click",
						frame:2,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_2",
						pathSubject:null,
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:null,
						closeLocFunc:_closeLocFunc_2_2,
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
						openLocFunc:_openLocFunc_2_3,
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
			},
			location_5:{
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
						openLocFunc:_openLocFunc_1_5,
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
						openLocFunc:_openLocFunc_2_5,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:1
					}
				}
			},
			location_6:{
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
						openLocFunc:_openLocFunc_1_6,
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
						openLocFunc:_openLocFunc_2_6,
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
						closeLocFunc:_closeLocFunc_3_6,
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
						frames:[1, 2, 3, 4]
					},
					set_2:{
						currentIndex:0,
						frames:[1, 2, 3]
					},
					set_3:{
						currentIndex:0,
						frames:[1]
					},
					set_4:{
						currentIndex:0,
						frames:[1, 2, 3, 4, 5, 6, 7, 8, 9]
					},
					set_5:{
						currentIndex:0,
						frames:[1]
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
					hair_0:{rewarded:false},
					hair_1:{rewarded:false},
					hair_2:{rewarded:false},
					hair_3:{rewarded:false},
					hair_4:{rewarded:false},
					hair_5:{rewarded:false},
					hair_6:{rewarded:false},
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
					bg_0:{rewarded:false},
					bg_1:{rewarded:false}
				},
				currentDress:{
					lips:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					shadows:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					eyes:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					eyebrows:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					hair:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					earrings:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					dress:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					accessory:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					bg:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1}
				}
			},
			hero_2:{
				currentSet:"set_1",
				totalSets:{
					set_1:{
						currentIndex:0,
						frames:[1, 2, 3, 4]
					},
					set_2:{
						currentIndex:0,
						frames:[1, 2, 3]
					},
					set_3:{
						currentIndex:0,
						frames:[1]
					},
					set_4:{
						currentIndex:0,
						frames:[1, 2, 3, 4, 5, 6, 7, 8, 9]
					},
					set_5:{
						currentIndex:0,
						frames:[1]
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
					hair_0:{rewarded:false},
					hair_1:{rewarded:false},
					hair_2:{rewarded:false},
					hair_3:{rewarded:false},
					hair_4:{rewarded:false},
					hair_5:{rewarded:false},
					hair_6:{rewarded:false},
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
					bg_0:{rewarded:false},
					bg_1:{rewarded:false}
				},
				currentDress:{
					lips:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					shadows:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					eyes:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					eyebrows:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					hair:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					earrings:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					dress:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
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
		logo_img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozMkNGOTMxNEE2MzJGMDExQUVGRkIxNjJENEQxMDk1NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFMEU0QjNGQzE3QjIxMUYxOUFBQUQzMUIyMjEyOTZEMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFMEU0QjNGQjE3QjIxMUYxOUFBQUQzMUIyMjEyOTZEMSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5NjgyOTRBMUIyMTdGMTExOUM5Q0Y0MTEwMkVBRjcxRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozMkNGOTMxNEE2MzJGMDExQUVGRkIxNjJENEQxMDk1NiIvPiA8L3JkZjpEZXNjcmlwdGlv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";
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
		loadQueue.loadFile({id:"magic_2_sound", src:"library/sounds/magic_2_sound.ogg"});
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
		new Edapskov_Flickering(_before, location_mc, ["#ffffff", "#cccccc"], 10, 24);
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
		//var filter_obj = new createjs.ColorMatrixFilter([0.30, 0.30, 0.30, 0, 0, 0.30, 0.30, 0.30, 0, 0, 0.30, 0.30, 0.30, 0, 0, 0, 0, 0, 1, 0]);
		var filter_obj = new createjs.ColorMatrixFilter([0.39, 0.77, 0.19, 0, 0, 0.35, 0.68, 0.17, 0, 0, 0.27, 0.53, 0.13, 0, 0, 0, 0, 0, 1, 0]);
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
				new Edapskov_Flickering(_before, _action_mc[hero_str][key], ["#ffffff", "#cccccc"], 10, 18);
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
		new Edapskov_Flickering(_before, currentTarget_mc, ["#ffffff", "#cccccc"], 4, 18);
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
									/*
									
									*/
									if(propObject == "earrings")
									{
										if(hero_mc.earringsSecond)
										{
											/*
											
											*/
											hero_mc.earringsSecond.gotoAndStop(frame_num - 1);
											/*
											
											*/
											_updateBodyFunc(hero_mc.earringsSecond, _information.heroes[propHero].currentDress[propObject].currentColor, _information.heroes[propHero].currentDress[propObject].currentTexture, _information.heroes[propHero].currentDress[propObject].currentAlphaTexture);
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
		window.open("https://dl-girls.com/content/folder_1771346169" + "?utm_source=" + window.location.href + "&utm_medium=game_referral|game&utm_content=simple&utm_campaign=" + _TITLE, "_self");
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
			//_addAdsFunc();
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
		_information.currentNameHero = "hero_2";
		_information.heroes[_information.currentNameHero].currentSet = "set_1";
	}
	function _closeLocFunc_2_2()
	{
		_addAdsFunc();
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
	function _openLocFunc_1_5()
	{
		_information.currentNameHero = "hero_1";
		_information.heroes[_information.currentNameHero].currentSet = "set_4";
	}
	function _openLocFunc_2_5()
	{
		_information.currentNameHero = "hero_1";
		_information.heroes[_information.currentNameHero].currentSet = "set_5";
	}
	function _openLocFunc_1_6()
	{
		_information.currentNameHero = "hero_2";
		_information.heroes[_information.currentNameHero].currentSet = "set_4";
	}
	function _openLocFunc_2_6()
	{
		_information.currentNameHero = "hero_2";
		_information.heroes[_information.currentNameHero].currentSet = "set_5";
	}
	function _closeLocFunc_3_6()
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