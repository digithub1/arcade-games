/*
* @author edapskov
* @copyright 2019 edapskov v 9.003
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
	var _TITLE = "African Princesses: Style Island";
	var _LINKTOGAME = "https://dl-girls.com";
	var _DELAY = 1;
	/*
	публичные переменные
	*/
	this.copyright = "© DL-Studio, v 9.003";
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
						frames:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
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
						frames:[1, 2, 3, 4, 5, 6, 7, 8, 9]
					},
					set_5:{
						currentIndex:0,
						frames:[1, 2, 3, 4, 5]
					}
				},
				totalDress:{
					makeup_0:{rewarded:false},
					makeup_1:{rewarded:false},
					makeup_2:{rewarded:false},
					makeup_3:{rewarded:false},
					makeup_4:{rewarded:false},
					makeup_5:{rewarded:false},
					makeup_6:{rewarded:false},
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
					glasses_0:{rewarded:false},
					glasses_1:{rewarded:false},
					glasses_2:{rewarded:false},
					glasses_3:{rewarded:false},
					glasses_4:{rewarded:false},
					glasses_5:{rewarded:false},
					glasses_6:{rewarded:false},
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
					makeup:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					eyes:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					hair:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					earrings:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					dress:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					glasses:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
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
						frames:[1, 2, 3]
					},
					set_4:{
						currentIndex:0,
						frames:[1, 2, 3, 4, 5, 6, 7, 8, 9]
					},
					set_5:{
						currentIndex:0,
						frames:[1, 2, 3, 4, 5]
					}
				},
				totalDress:{
					makeup_0:{rewarded:false},
					makeup_1:{rewarded:false},
					makeup_2:{rewarded:false},
					makeup_3:{rewarded:false},
					makeup_4:{rewarded:false},
					makeup_5:{rewarded:false},
					makeup_6:{rewarded:false},
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
					glasses_0:{rewarded:false},
					glasses_1:{rewarded:false},
					glasses_2:{rewarded:false},
					glasses_3:{rewarded:false},
					glasses_4:{rewarded:false},
					glasses_5:{rewarded:false},
					glasses_6:{rewarded:false},
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
					makeup:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					eyes:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					hair:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					earrings:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					dress:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					glasses:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
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
	this.toggleSoundFunc = function(sound_bool)
	{
		if(sound_bool === undefined)
		{
			sound_bool = false;
		}
		else
		{
			sound_bool = !Boolean(sound_bool);
		}
		_soundManager.setInvisibleFunc(sound_bool);
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
		logo_img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozMkNGOTMxNEE2MzJGMDExQUVGRkIxNjJENEQxMDk1NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5MzgwNUYxNjc2RjgxMUYxQjhFQkQwNzU2NTIyODlBQyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5MzgwNUYxNTc2RjgxMUYxQjhFQkQwNzU2NTIyODlBQyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDNjk3RjQ3QkY4NzZGMTExQjYxNUI1MUMxRTRBMTg1NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozMkNGOTMxNEE2MzJGMDExQUVGRkIxNjJENEQxMDk1NiIvPiA8L3JkZjpEZXNjcmlwdGlv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";
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
		new Edapskov_Flickering(_before, location_mc, ["#ffff99", "#ffff00"], 10, 24);
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
				new Edapskov_Flickering(_before, _action_mc[hero_str][key], ["#ffff99", "#ffff00"], 10, 18);
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
		new Edapskov_Flickering(_before, currentTarget_mc, ["#ffff99", "#ffff00"], 4, 18);
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
									/*
									обновляем опции, вложенные внутрь контейнера dress
									*/
									if(propObject == "dress")
									{
										_updateEmbeddedOptionFunc(hero_mc.dress, propHero, "accessory");
									}
								}
							}
						}
					}
				}
			}
		}
	}
	function _updateEmbeddedOptionFunc(container_mc, hero_str, option_str)
	{
		/*
		
		*/
		var option_mc = null;
		var frame_num = Number(container_mc.currentFrame + 1);
		var newOption_str = String(option_str + "_" + frame_num);
		/*
		
		*/
		if(container_mc[option_str])
		{
			option_mc = container_mc[option_str];
		}
		else
		{
			if(container_mc[newOption_str])
			{
				option_mc = container_mc[newOption_str];
			}
		}
		/*
		
		*/
		if(option_mc !== null)
		{
			/*
			
			*/
			option_mc.gotoAndStop(0);
			/*
			
			*/
			frame_num = _information.heroes[hero_str].currentDress[option_str].currentOption;
			if(frame_num <= 0)
			{
				frame_num = option_mc.totalFrames;
			}
			/*
			
			*/
			option_mc.gotoAndStop(frame_num - 1);
			/*
			
			*/
			_updateBodyFunc(option_mc, _information.heroes[hero_str].currentDress[option_str].currentColor, _information.heroes[hero_str].currentDress[option_str].currentTexture, _information.heroes[hero_str].currentDress[option_str].currentAlphaTexture);
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
		window.open("https://dl-girls.com/content/folder_1779470078" + "?utm_source=" + window.location.href + "&utm_medium=game_referral|game&utm_content=simple&utm_campaign=" + _TITLE, "_self");
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
		_soundManager.addSoundFunc("completed_sound", 1, 0, 0, 0.5, 0);
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