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
	var _TITLE = "Stardom Alt-Girls Fashion Duel";
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
						frames:[1, 2, 3, 4, 5, 6]
					},
					set_2:{
						currentIndex:0,
						frames:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
					},
					set_3:{
						currentIndex:0,
						frames:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
					},
					set_4:{
						currentIndex:0,
						frames:[1, 2, 3]
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
					hair_7:{rewarded:false},
					hair_8:{rewarded:false},
					hair_9:{rewarded:false},
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
					top_0:{rewarded:false},
					top_1:{rewarded:false},
					top_2:{rewarded:false},
					top_3:{rewarded:false},
					top_4:{rewarded:false},
					top_5:{rewarded:false},
					top_6:{rewarded:false},
					bottom_0:{rewarded:false},
					bottom_1:{rewarded:false},
					bottom_2:{rewarded:false},
					bottom_3:{rewarded:false},
					bottom_4:{rewarded:false},
					bottom_5:{rewarded:false},
					bottom_6:{rewarded:false},
					choker_0:{rewarded:false},
					choker_1:{rewarded:false},
					choker_2:{rewarded:false},
					choker_3:{rewarded:false},
					choker_4:{rewarded:false},
					choker_5:{rewarded:false},
					choker_6:{rewarded:false},
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
					dress:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					top:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					bottom:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					choker:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
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
						frames:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
					},
					set_3:{
						currentIndex:0,
						frames:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
					},
					set_4:{
						currentIndex:0,
						frames:[1, 2, 3]
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
					hair_7:{rewarded:false},
					hair_8:{rewarded:false},
					hair_9:{rewarded:false},
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
					top_0:{rewarded:false},
					top_1:{rewarded:false},
					top_2:{rewarded:false},
					top_3:{rewarded:false},
					top_4:{rewarded:false},
					top_5:{rewarded:false},
					top_6:{rewarded:false},
					bottom_0:{rewarded:false},
					bottom_1:{rewarded:false},
					bottom_2:{rewarded:false},
					bottom_3:{rewarded:false},
					bottom_4:{rewarded:false},
					bottom_5:{rewarded:false},
					bottom_6:{rewarded:false},
					choker_0:{rewarded:false},
					choker_1:{rewarded:false},
					choker_2:{rewarded:false},
					choker_3:{rewarded:false},
					choker_4:{rewarded:false},
					choker_5:{rewarded:false},
					choker_6:{rewarded:false},
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
					dress:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					top:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					bottom:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					choker:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
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
		logo_img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozMkNGOTMxNEE2MzJGMDExQUVGRkIxNjJENEQxMDk1NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxQUY5OTRFM0ZBQjUxMUYwOUVEMjhFMUYxRjEwNTUyMiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxQUY5OTRFMkZBQjUxMUYwOUVEMjhFMUYxRjEwNTUyMiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpERjVFNzNDRUI0RkFGMDExOTI2NEY3MkM2MUE1ODYzRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozMkNGOTMxNEE2MzJGMDExQUVGRkIxNjJENEQxMDk1NiIvPiA8L3JkZjpEZXNjcmlwdGlv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";
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
									if(propObject == "top")
									{
										if(hero_mc.topSecond)
										{
											/*
											
											*/
											hero_mc.topSecond.gotoAndStop(frame_num - 1);
											/*
											
											*/
											_updateBodyFunc(hero_mc.topSecond, _information.heroes[propHero].currentDress[propObject].currentColor, _information.heroes[propHero].currentDress[propObject].currentTexture, _information.heroes[propHero].currentDress[propObject].currentAlphaTexture);
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
		window.open("https://dl-girls.com/content/folder_1768588959" + "?utm_source=" + window.location.href + "&utm_medium=game_referral|game&utm_content=simple&utm_campaign=" + _TITLE, "_self");
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
	function _openLocFunc_1_3()
	{
		_information.currentNameHero = "hero_1";
		_information.heroes[_information.currentNameHero].currentSet = "set_3";
	}
	function _openLocFunc_2_3()
	{
		_information.currentNameHero = "hero_1";
		_information.heroes[_information.currentNameHero].currentSet = "set_4";
	}
	function _closeLocFunc_3_3()
	{
		_addAdsFunc();
	}
	function _openLocFunc_1_4()
	{
		_information.currentNameHero = "hero_2";
		_information.heroes[_information.currentNameHero].currentSet = "set_1";
	}
	function _openLocFunc_1_5()
	{
		_information.currentNameHero = "hero_2";
		_information.heroes[_information.currentNameHero].currentSet = "set_2";
	}
	function _openLocFunc_1_6()
	{
		_information.currentNameHero = "hero_2";
		_information.heroes[_information.currentNameHero].currentSet = "set_3";
	}
	function _openLocFunc_2_6()
	{
		_information.currentNameHero = "hero_2";
		_information.heroes[_information.currentNameHero].currentSet = "set_4";
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