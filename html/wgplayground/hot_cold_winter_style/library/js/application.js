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
	var _TITLE = "Hot & Cold Winter Style";
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
						frames:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
					},
					set_2:{
						currentIndex:0,
						frames:[1, 2, 3, 4, 5, 6]
					},
					set_3:{
						currentIndex:0,
						frames:[1, 2, 3, 4, 5, 6]
					},
					set_4:{
						currentIndex:0,
						frames:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
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
					headdress_0:{rewarded:false},
					headdress_1:{rewarded:false},
					headdress_2:{rewarded:false},
					headdress_3:{rewarded:false},
					headdress_4:{rewarded:false},
					headdress_5:{rewarded:false},
					headdress_6:{rewarded:false},
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
					dress_10:{rewarded:false},
					dress_11:{rewarded:false},
					dress_12:{rewarded:false},
					bg_0:{rewarded:false},
					bg_1:{rewarded:false}
				},
				currentDress:{
					lips:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					shadows:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					eyes:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					eyebrows:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					hair:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					earrings:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					headdress:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					dress:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					bg:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1}
				}
			},
			hero_2:{
				currentSet:"set_1",
				totalSets:{
					set_1:{
						currentIndex:0,
						frames:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
					},
					set_2:{
						currentIndex:0,
						frames:[1, 2, 3, 4, 5, 6]
					},
					set_3:{
						currentIndex:0,
						frames:[1, 2, 3, 4, 5, 6]
					},
					set_4:{
						currentIndex:0,
						frames:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
					},
					set_5:{
						currentIndex:0,
						frames:[1, 2, 3, 4, 5, 6]
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
					headdress_0:{rewarded:false},
					headdress_1:{rewarded:false},
					headdress_2:{rewarded:false},
					headdress_3:{rewarded:false},
					headdress_4:{rewarded:false},
					headdress_5:{rewarded:false},
					headdress_6:{rewarded:false},
					dress_0:{rewarded:false},
					dress_1:{rewarded:false},
					dress_2:{rewarded:false},
					dress_3:{rewarded:false},
					dress_4:{rewarded:false},
					dress_5:{rewarded:false},
					dress_6:{rewarded:false},
					pareo_0:{rewarded:false},
					pareo_1:{rewarded:false},
					pareo_2:{rewarded:false},
					pareo_3:{rewarded:false},
					pareo_4:{rewarded:false},
					pareo_5:{rewarded:false},
					pareo_6:{rewarded:false},
					garland_0:{rewarded:false},
					garland_1:{rewarded:false},
					garland_2:{rewarded:false},
					garland_3:{rewarded:false},
					garland_4:{rewarded:false},
					garland_5:{rewarded:false},
					garland_6:{rewarded:false},
					bg_0:{rewarded:false},
					bg_1:{rewarded:false}
				},
				currentDress:{
					lips:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					shadows:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					eyes:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					eyebrows:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					hair:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					earrings:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					headdress:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					dress:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					pareo:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					garland:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
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
		logo_img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozMkNGOTMxNEE2MzJGMDExQUVGRkIxNjJENEQxMDk1NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1Qjc1MjY5Q0RGOEExMUYwQkYxREEzNTE3MkM1RkYxQyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1Qjc1MjY5QkRGOEExMUYwQkYxREEzNTE3MkM1RkYxQyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4QkUxOUY3Rjg2REZGMDExQjlGN0RGMjhBNTcxMkFDNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozMkNGOTMxNEE2MzJGMDExQUVGRkIxNjJENEQxMDk1NiIvPiA8L3JkZjpEZXNjcmlwdGlv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";
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
									/*
									
									*/
									if(propObject == "headdress")
									{
										if(hero_mc.headdressSecond)
										{
											/*
											
											*/
											hero_mc.headdressSecond.gotoAndStop(frame_num - 1);
											/*
											
											*/
											_updateBodyFunc(hero_mc.headdressSecond, _information.heroes[propHero].currentDress[propObject].currentColor, _information.heroes[propHero].currentDress[propObject].currentTexture, _information.heroes[propHero].currentDress[propObject].currentAlphaTexture);
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
		window.open("https://dl-girls.com/content/folder_1764959996" + "?utm_source=" + window.location.href + "&utm_medium=game_referral|game&utm_content=simple&utm_campaign=" + _TITLE, "_self");
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
		_information.heroes.hero_2.currentDress.hair.currentOption = 1;
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