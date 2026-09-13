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
	var _TITLE = "Furry Wedding Proposal";
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
						closeLocFunc:_closeLocFunc_3_5,
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
						frames:[1, 2, 3, 4, 5]
					},
					set_2:{
						currentIndex:0,
						frames:[1, 2, 3, 4, 5, 6]
					},
					set_3:{
						currentIndex:0,
						frames:[1, 2, 3, 4]
					},
					set_4:{
						currentIndex:0,
						frames:[1, 2, 3, 4, 5]
					},
					set_5:{
						currentIndex:0,
						frames:[1, 2, 3, 4, 5, 6, 7, 8]
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
					earrings_7:{rewarded:false},
					earrings_8:{rewarded:false},
					earrings_9:{rewarded:false},
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
					bouquet_0:{rewarded:false},
					bouquet_1:{rewarded:false},
					bouquet_2:{rewarded:false},
					bouquet_3:{rewarded:false},
					bouquet_4:{rewarded:false},
					bouquet_5:{rewarded:false},
					bouquet_6:{rewarded:false},
					bouquet_7:{rewarded:false},
					bouquet_8:{rewarded:false},
					bouquet_9:{rewarded:false},
					wreath_0:{rewarded:false},
					wreath_1:{rewarded:false},
					wreath_2:{rewarded:false},
					wreath_3:{rewarded:false},
					wreath_4:{rewarded:false},
					wreath_5:{rewarded:false},
					wreath_6:{rewarded:false},
					wreath_7:{rewarded:false},
					wreath_8:{rewarded:false},
					wreath_9:{rewarded:false},
					bg_0:{rewarded:false},
					bg_1:{rewarded:false}
				},
				currentDress:{
					eyes:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					lips:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					shadows:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					eyebrows:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					hair:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					earrings:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					dress:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					bouquet:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					wreath:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					bg:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1}
				}
			},
			hero_2:{
				currentSet:"set_1",
				totalSets:{
					set_1:{
						currentIndex:0,
						frames:[1, 2, 3, 4, 5, 6]
					},
					set_2:{
						currentIndex:0,
						frames:[1, 2]
					},
					set_3:{
						currentIndex:0,
						frames:[1, 2, 3, 4, 5, 6, 7, 8, 9]
					},
					set_4:{
						currentIndex:0,
						frames:[1, 2, 3, 4, 5, 6, 7, 8]
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
					hair_0:{rewarded:false},
					hair_1:{rewarded:false},
					hair_2:{rewarded:false},
					hair_3:{rewarded:false},
					hair_4:{rewarded:false},
					hair_5:{rewarded:false},
					hair_6:{rewarded:false},
					top_0:{rewarded:false},
					top_1:{rewarded:false},
					top_2:{rewarded:false},
					top_3:{rewarded:false},
					top_4:{rewarded:false},
					top_5:{rewarded:false},
					top_6:{rewarded:false},
					top_7:{rewarded:false},
					top_8:{rewarded:false},
					top_9:{rewarded:false},
					bottom_0:{rewarded:false},
					bottom_1:{rewarded:false},
					bottom_2:{rewarded:false},
					bottom_3:{rewarded:false},
					bottom_4:{rewarded:false},
					bottom_5:{rewarded:false},
					bottom_6:{rewarded:false},
					bottom_7:{rewarded:false},
					bottom_8:{rewarded:false},
					bottom_9:{rewarded:false},
					tie_0:{rewarded:false},
					tie_1:{rewarded:false},
					tie_2:{rewarded:false},
					tie_3:{rewarded:false},
					tie_4:{rewarded:false},
					tie_5:{rewarded:false},
					tie_6:{rewarded:false},
					tie_7:{rewarded:false},
					tie_8:{rewarded:false},
					tie_9:{rewarded:false},
					tie_10:{rewarded:false},
					tie_11:{rewarded:false},
					tie_12:{rewarded:false},
					boutonniere_0:{rewarded:false},
					boutonniere_1:{rewarded:false},
					boutonniere_2:{rewarded:false},
					boutonniere_3:{rewarded:false},
					boutonniere_4:{rewarded:false},
					boutonniere_5:{rewarded:false},
					boutonniere_6:{rewarded:false},
					boutonniere_7:{rewarded:false},
					boutonniere_8:{rewarded:false},
					boutonniere_9:{rewarded:false},
					bg_0:{rewarded:false},
					bg_1:{rewarded:false}
				},
				currentDress:{
					eyes:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					hair:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					top:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					bottom:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					tie:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					boutonniere:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
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
		logo_img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozMkNGOTMxNEE2MzJGMDExQUVGRkIxNjJENEQxMDk1NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDM0YxN0UwMEJCQzkxMUYwQkE2NkFFNUQ2NzI2MTU2NCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDM0YxN0RGRkJCQzkxMUYwQkE2NkFFNUQ2NzI2MTU2NCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozMUY4QzAzOEM2QkJGMDExQUZFN0NBRUQ4QzNCOTEyOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozMkNGOTMxNEE2MzJGMDExQUVGRkIxNjJENEQxMDk1NiIvPiA8L3JkZjpEZXNjcmlwdGlv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";
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
		/*
		if(!_information.locations[_information.currentNameLocation].completed)
		{
			if(_skippedLocationsFunc() == 4)
			{
				_addAdsFunc();
			}
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
		window.open("https://dl-girls.com/content/folder_1760974877" + "?utm_source=" + window.location.href + "&utm_medium=game_referral|game&utm_content=simple&utm_campaign=" + _TITLE, "_self");
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
		_information.heroes[_information.currentNameHero].currentSet = "set_4";
	}
	function _openLocFunc_2_4()
	{
		_information.currentNameHero = "hero_1";
		_information.heroes[_information.currentNameHero].currentSet = "set_5";
	}
	function _closeLocFunc_3_4()
	{
		_addAdsFunc();
	}
	function _openLocFunc_1_5()
	{
		_information.currentNameHero = "hero_2";
		_information.heroes[_information.currentNameHero].currentSet = "set_3";
	}
	function _openLocFunc_2_5()
	{
		_information.currentNameHero = "hero_2";
		_information.heroes[_information.currentNameHero].currentSet = "set_4";
	}
	function _closeLocFunc_3_5()
	{
		//_addAdsFunc();
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