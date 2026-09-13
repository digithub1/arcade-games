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
	var _TITLE = "Princesses Rock Ballerinas";
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
						closeLocFunc:_closeLocFunc_2_1,
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
						closeLocFunc:_closeLocFunc_2_3,
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
					}
				},
				totalDress:{
					hair_0:{rewarded:false},
					hair_1:{rewarded:false},
					hair_2:{rewarded:false},
					hair_3:{rewarded:false},
					hair_4:{rewarded:false},
					hair_5:{rewarded:false},
					hair_6:{rewarded:false},
					hair_7:{rewarded:false},
					makeup_0:{rewarded:false},
					makeup_1:{rewarded:false},
					makeup_2:{rewarded:false},
					makeup_3:{rewarded:false},
					makeup_4:{rewarded:false},
					makeup_5:{rewarded:false},
					makeup_6:{rewarded:false},
					makeup_7:{rewarded:false},
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
					shoes_0:{rewarded:false},
					shoes_1:{rewarded:false},
					shoes_2:{rewarded:false},
					shoes_3:{rewarded:false},
					shoes_4:{rewarded:false},
					shoes_5:{rewarded:false},
					shoes_6:{rewarded:false},
					glasses_0:{rewarded:false},
					glasses_1:{rewarded:false},
					headdress_0:{rewarded:false},
					headdress_1:{rewarded:false},
					scarf_0:{rewarded:false},
					scarf_1:{rewarded:false},
					accessory_0:{rewarded:false},
					accessory_1:{rewarded:false},
					gloves_0:{rewarded:false},
					gloves_1:{rewarded:false},
					stockings_0:{rewarded:false},
					stockings_1:{rewarded:false},
					bg_0:{rewarded:false},
					bg_1:{rewarded:false}
				},
				currentDress:{
					hair:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					makeup:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					top:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					bottom:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					shoes:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					glasses:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					headdress:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					scarf:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					accessory:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					gloves:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					stockings:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					bg:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1}
				}
			},
			hero_2:{
				currentSet:"set_1",
				totalSets:{
					set_1:{
						currentIndex:0,
						frames:[1, 2, 3, 4, 5, 6]
					}
				},
				totalDress:{
					hair_0:{rewarded:false},
					hair_1:{rewarded:false},
					hair_2:{rewarded:false},
					hair_3:{rewarded:false},
					hair_4:{rewarded:false},
					hair_5:{rewarded:false},
					hair_6:{rewarded:false},
					hair_7:{rewarded:false},
					makeup_0:{rewarded:false},
					makeup_1:{rewarded:false},
					makeup_2:{rewarded:false},
					makeup_3:{rewarded:false},
					makeup_4:{rewarded:false},
					makeup_5:{rewarded:false},
					makeup_6:{rewarded:false},
					makeup_7:{rewarded:false},
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
					shoes_0:{rewarded:false},
					shoes_1:{rewarded:false},
					shoes_2:{rewarded:false},
					shoes_3:{rewarded:false},
					shoes_4:{rewarded:false},
					shoes_5:{rewarded:false},
					shoes_6:{rewarded:false},
					glasses_0:{rewarded:false},
					glasses_1:{rewarded:false},
					jewelry_0:{rewarded:false},
					jewelry_1:{rewarded:false},
					scarf_0:{rewarded:false},
					scarf_1:{rewarded:false},
					accessory_0:{rewarded:false},
					accessory_1:{rewarded:false},
					gloves_0:{rewarded:false},
					gloves_1:{rewarded:false},
					stockings_0:{rewarded:false},
					stockings_1:{rewarded:false},
					bg_1:{rewarded:false},
					bg_2:{rewarded:false}
				},
				currentDress:{
					hair:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					makeup:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					top:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					bottom:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					shoes:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					glasses:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					jewelry:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					scarf:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					accessory:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					gloves:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					stockings:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					bg:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1}
				}
			},
			hero_3:{
				currentSet:"set_1",
				totalSets:{
					set_1:{
						currentIndex:0,
						frames:[1, 2, 3, 4, 5, 6]
					}
				},
				totalDress:{
					hair_0:{rewarded:false},
					hair_1:{rewarded:false},
					hair_2:{rewarded:false},
					hair_3:{rewarded:false},
					hair_4:{rewarded:false},
					hair_5:{rewarded:false},
					hair_6:{rewarded:false},
					hair_7:{rewarded:false},
					makeup_0:{rewarded:false},
					makeup_1:{rewarded:false},
					makeup_2:{rewarded:false},
					makeup_3:{rewarded:false},
					makeup_4:{rewarded:false},
					makeup_5:{rewarded:false},
					makeup_6:{rewarded:false},
					makeup_7:{rewarded:false},
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
					shoes_0:{rewarded:false},
					shoes_1:{rewarded:false},
					shoes_2:{rewarded:false},
					shoes_3:{rewarded:false},
					shoes_4:{rewarded:false},
					shoes_5:{rewarded:false},
					shoes_6:{rewarded:false},
					glasses_0:{rewarded:false},
					glasses_1:{rewarded:false},
					headdress_0:{rewarded:false},
					headdress_1:{rewarded:false},
					headdress_2:{rewarded:false},
					accessory_0:{rewarded:false},
					accessory_1:{rewarded:false},
					accessory_2:{rewarded:false},
					stockings_0:{rewarded:false},
					stockings_1:{rewarded:false},
					bg_1:{rewarded:false},
					bg_2:{rewarded:false}
				},
				currentDress:{
					hair:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					makeup:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					top:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					bottom:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					shoes:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					glasses:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					headdress:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					accessory:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					stockings:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
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
		logo_img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozMkNGOTMxNEE2MzJGMDExQUVGRkIxNjJENEQxMDk1NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBNUVGMzM3QzVGOTYxMUYxQUVENjk1QkQwNEM2QTQ2MyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBNUVGMzM3QjVGOTYxMUYxQUVENjk1QkQwNEM2QTQ2MyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDMzQyOEI5Qzk0NUZGMTExODMwNkE1MEI4NUYzRDBGNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozMkNGOTMxNEE2MzJGMDExQUVGRkIxNjJENEQxMDk1NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrZHOUAAAmU6SURBVHja7L0HgCRXea79Vq7q3D057+zO5hwk7UqrVUQBIYLAJBOcMPDbxjb25f725V7b/7UxGF8bG5scfTFJRlgIJBRWEUkrbc67Mzs5T0/nVLn+75yeldZCAZB8JXT7rEo909OhqrrPU+/7ne98RwiCAI3WaI3WaL8MTWycgkZrtEZrAKvRGq3RGq0BrEZrtEZrAKvRGq3RGq0BrEZrtEZrtJemyf/H3unkSeArXwFisVf+WREkjA/djcJiGqGBftijU/AtC7WxDDxXhQUT7a2rMPDQQ7jLMBDq7UN2egprVqzAVK2Ga8+cwR3JFMKqBE/24PkBHN9G5LI9uPJbP8DeS7dD1AowOlMIdbVBo8fKTXHIkgJN14C4gmikC2ohjOn5B9HWvBWBYMCyH4AmCXAycSi+CL8nBNG24G18O1L0vNxdX0Im76DtHS2ISu0o/SiNUnFeqEwMo+2PPyPElCfF4KsPiULVEecnCqKZnhAVpyRQg78oBK4nBa4i+1VFCQbi8cDYts3DP3/GP37RGl85NYY1l+zCk/v2QaZzsaVSwcyePZibmsXWy2YhSb+Eo81Z2v7408ANv9sgQQNYjfYy0RbwAwmBpwS+FwmCoENKtgykP/W7/enpqQ6USi1BoZKwc27YNQUlKEOCS88S4BFyXPrRMoOgtj8IcuqTT06Jn/vckBDGoCKHpnzfL9IbWLR5jfPcaA1gNdovxCf4HuHGUeg2KkelZZlvjO+aHXv4Cq9Y3BAKpTqkQAvJ0EjrLYMSBdSkAGllBNBUuJIMX5FIIZFis0gNlmqoFsoQp8eCajYd5EumI9b8ciGozTzwyCOHFOBOeuY+Upyz9M5u4wNotAawGu1nE1K+L8l6NJa+/TNrc6X5G4PpsRs8QVkT2bohHH7/BwRt/R7oHU2QqiaEkXEI0yPw5scRpDPwTYc+fIKUacOv2pDJtnrEPbE1AVFJwRHWCbJlwzEDqZyZ1v2hkebCeHpTpVx8R8b3Bh9OpT7f29PzbZJmmcaH0WgNYDXac4KKrJ4sylLHwtGz10oTI++UReVifc8bYvEP/S8YK1ZClJLwaxUE1UU4Jw/C3rsX4n0PQnArELu64LLYzfgYvFqVNhue5cC3SV15LgL6J5DaCkQRSigEPdUPvZWgt249opeGICwsaIszMxvzR4f/dnJycnWopf0vaacWaK8an02jNYD18gNCOP/T+RHVAC9H7xQIIqSoBE/qTM+cfZM8PfSboZXbNoQ++ikxtukyaPRRuuUsrPlzkBZmIabPQCikIaVNWIPjqIwuwF0sI1bRIYYjEHx6vCnAdUhluTI5ygCuL8ENfPpdgELHXanloM0VIZ/04CcMiMt60NzZjfZtuxC75kbd/vvPfDCbnss7Jj4hhdXKL9Xnyqak6Q75Y6PxHW8A61XTxKBmxgXfaw18t4l6tAjPL1GXzjmOU7IzmSo9xv7PBJhA/0hRCYJoNc2fm7nRHxv8UGj71Ts6/9vnEOlYCbeYhT92Al7mLILFYUjZNIRMBXaF+FpwgUmyf3OLsJ0azFIe6jnqpyt6IPoeHLJ8vuszbwlfQF1Z+XVIK24AU5Zh6jJ0UYZEQAsGx2DPZyFoBL2Vm9HS0y2Xzg5+4PE7g3v23PLGxyRZ9n9pPtksycw//D3g6tc2vuUNYL1KxFXgbarufeJP2y/u2z1X9OLhtCMUzZJl+0HmxOThs6e7u+8P6+JDrueNUH/P8/G5l+byz/8jSkEUFW1hZv/uyuSJD8d61l/f/A9flyI9GxDMHkHloa9BmjwFZWYObt6BSXwylChEKwx5cR5CLg1rtgS/5MB1deRDEVRME+0jMwShgIBVqwOKmhd4hGfCo+jTW4sEKx+SJEO2JdCzEWga0duCbwjw17TBkhdRyUyhQwlaztn4HdcsH/Yl6ZdDZbkuJFWAaOiNL3kDWM8jwX+ZKkOIQpcyP/y3sX+47SrtdW8Q142chXLX9zF/248Ma3QxYbuVFZMLhRtLgbU4Ozt1b0KUv2g6zmGCVuElsX/w4Lm19srk2feInvJHfR/8amtk+x4IlTH4T34FOHgn9FMj8ObIzpmkpjQJqqgg8Gw4jgvTLkKs1ODbDqknD1LNhmoHsOihZs3hMPQChek3DsiAR/GXnK/AACZADUToko+qSI8ntSWTZfTDMci92yBXp1GouJBTCSTShesP3XlnH32ZTuOXIJjFcjKWf+YzaL366gYBGsB6jkZXaETD1B8c3iFfyY36rWh5pQ8k3njT5c03XCm6g4dR/MInqJN6aLtoO4r+YdTODWL15tWCHNVa8vPT7xwamrvp4OjorV3d3Z+qTk4Okr1yftGYmQhZzM0d31468tifxFZf9KaeD34WspaEdfYJOI9+H8EjPwSmKwhINUkCocYkVUTwCBwfpkd7L0mQNEIRg5VH1o96KDELEU+h3iqiqhGgSFFpsgSeNEr2UJBYdoTPLSj7dGSFWVECHMHLpc9LCzRIpMpETYUna1AKDkr091Y/jJaQmTxaMm9cC5wVX+E5WuxD6fzYx9D8wQ82en8DWM/TVq4E3n0TcMffUM9JvYKVlYiJher66uzJ9yT+6vOKZU5B/MKfQbh9P6zmPmT7avBWroaZKWL81FFoio72zhW4Yvf6+Mjk5G8+OnHm8lvXrft4a3Pzv4vVSv7n6r1cWQWyOTZ+kzl68q+ar/+N9R1v/e9watOw9v4jxNu+hWDfCdgllUyaDrucJRC5EGWCi+RB1xUomg7XV+BVNQSCSi8ZkLKyYLEMeYKYZTlwGNNIXakgRUY2kGFKYsLI97ktpKegxghH94UIXwoDHgNjjGDVGYfQEkVpqACbFHOg2GiOhVGsWG9x/eCL9KTiK/WjZdJPYlsq1ej5DWD9DE0NAeE29sOFo2+vpKgVPM8Said+8uHU236vI9zaL1hf/QvYt99HwmQFoiZ164qDyPZOxCK7Ubz1LHxTxuz8Ocymx9CzbofwlpU9qx958J5/nEunt3aHQp8UIUx5P4tLErg5UytnT72jWp7/q+73/8+u1kvejOroA1Du+zzEBx+CN6kgFyRRcjJwqxVYZNFEAhFLSWBKSq95UIUKDPpUZSFMMFK5tGI5VqIvQCEg6XQrOWQfFQmOa/M984X631V6LYEewxSWwXSmrJItpPscDXqI1JpG6iwSRTQURZDLQCBgLRTLWNWZQruAtXMkXkIplF6RtpAOx64Cq/7h80i+/7cbPb8BrJ+h9W4CrvsT4OHHSGWFX3lnQ1IwduQbmyrF3A39V/+27P5kL9y/u5W+6QbcVhuuYiHUsREuWadapQxdoW5tUecX6NY24R07AruzFXtec130+NFTHzw3OdrfIaofJhade35WiSy5Sq+ePf5exXY+vuaPP5cwNuyC+cRXod31ryjdfwjpBQ+j+RrSBQ81JYScKKHqORBtUkSuz1VQiIEmkLjVS4pVtKs1xFVSXEwsCQqBSSbAkZ4S6ukLMtlC1ReX4jqklshK+vRceglSWXJ9CEFUIIRE2HSskUQEeopgpUUQLGRRI7hFXYdUi4hWEdGsh0su+68YFOVXILCY7rv2z4HdDVg1gPXzNF2FLzlwF0apD6mvLDdInds8dfTXOq95d8qSK4L4hU/ANCtw9HZohYCsoIEc2SJNT0FNmJAqCiyHrFKTgKiaBMo2qgtjcIoONm26SdGTP37t6ePDoZQu/QEx4MSzu0BSVkFglE8ee58amB/v/NjXDbt9BaRv/gnML34Z4yfzGPFkzIkGquEQphQZGVlHQQro7WxChchjTQKDi0PntWbS7y4S9Gtf2UO/V0GnKqJDc9HkiTAIMBUtgBbopJAIRKSsZGKWIrGxQR8OgcqCxlWaxHKyJKJPmEEsAV8nvRhK8KC+MzkFkwGL2UjfQ3ME4mQOe5wRfJtYar2CRDMCk44lRsoy0tHo8Q1g/ZytvR3mmmWY/fQXuBURROkV8sUW2LTflsLBE9c0//GXZPHgv6H8+BlkvRBiChsCNyC2tSDS1wUn2QyhMgu9txn6YpUPrjkWaZRojHqGCsMsoXT63zGwbY8UU+WrHnjyzD826fhQ5JnQqttirXD0xHtQdf9qxT99xfBSOvDp30D+63dgZkHG8VATFkMGQTICzyA7FovAZB9cwALeLMjuEnTquQmO66Jmku8JXFJiFobyBShWDX0Ess2mjbUEvm4CZNKXoRkEIxa58jUeJicrDI+NJpLCiksqT2+QdIVF3+EmJBgiEUktoxrtgpabR3FukYAFPrro0bHHYjKEvLNh7PPQBbxygMXODIN6+6f+GbEtDXXVANYv0ELbL0fzf/kEZu78IuR40ysi3UGgjlm57/Y98qrOzmhbXDT/+S6yXGzo36eOTAqkuw0igQNuEfFzOVijJ5Eql1BwyN2S1SrWcmS9HNi2h5Liw80XYT5wP5pWbxO3LC9c8ePh2c+oxdIfFk6fPCipKuopoZDyZ8ZusYYXPrb9bz4UCfXVUPzYb8D66iGcJXs619MJfWA9Lt+1iVRcCIvpLFnDBQjZGmbmqyiWSrBcC6Zjc/CLBEDJ0EgxGWhPJNC5vJMA5mE+k8f3Mlna3wq2kD9cT/u81bHINgpgIjcgS2rTcwWJBeo9iM4iJEGDr8ag0OtKogrJNwmIxKFYF4ShE8iUzSUgiLBKFvR4GIpQ6M4GQfwlSe14iWAlyTKW/9M/Ifb+9zd6ewNYL+KNI3GoWhTBYgaiHnrZoSUqHooL4zcN3PKBiDx9AOUnzmHBDdDSHoIeC5G6ElCtTiH3/YNwB8cxU7FQhoKER/ZJc9AV1hGxBLJaQM0yUSLhqNh5ZE+dwvq2VrHWaV3+vX2HvzT9muv+2+p1K+6TfNEupBf3lCYz/9/6t16ZSqyPYP7DH0D6h5NY6FwO8YY9uOqWG9C2cQVyM9M4uW8/RkaGMZkuYiFfQY3snk2WziHwmGQN2Uhf4PksK54N9PG8qXAsilQohvZICmb/ckxWc3hoehxPzGdxkSVjqyRii+yiU/ChkjWs0NfBImvpsjFIRyIVyfJAJch0Y/k1ICoixOrPHNuPiu1AY16SgOXRz3osRUayEC2RhibBNomXOfDO3lwmGq/7h39ASwNWDWC92BbuW4/Oq9+D+c//JYmWYVIvkZcXWrKcxGRtc2j1drl25jF4NQE62SCHgHS2sIhz/3YM03lgmsVvwwaKcoSsmIc2Bo2qgOVWGTuECvoFAx1yjJ7rwScgFKoEoPFFxOMx/Epv+5ZjOfNzc4tTf9OUxNDCVPaPe1ZuGFi9YzmOvv9jKD5hwrvuEnT99z/Axt2vIyhN4ch9P8Sx+x7C0PAszqZJgVUkel0ftluG7Iv16TQsN12S4JE15Pm5LJfLl1At1CA4BLY42TlSbGs7O2H092N2fhYPDZ7DEwsZXFq1cbUkY52mIMKOhckSNUTKRIQU2HQeXEikyrwIy22IQJodRunEabi2izDL9xJ4DI7sogIyxOos0Euaef/L/cV2dB19f/d36P7gBxq9vAGsl6YZG3Yg+Z7fx/Bf/y6s4RP0pddepstxACkS6RGLYpOYJB/42DAKvoLhoIjxs3kcNWSEWvvQsXM5di9vQkc8Ds9k8aEyZtIVTE1lMJ4u45tkA7u8Ii5XLCx3YmgOqENH6JjKPsYWF7GqtQe37NrcE2xp+psn7r+v3GKGWi7q9DD8L7djlGCVeu9rsfmv/xfaOnqQHbwbx2+/A48+eBCnFmvI1Mi2saRQAmFguRACgeUu8Okz3AqSdRMUAYauIWyECGoe/Zl0lxPANi0+ElkulVGjLUJ/371xO6Zm5nDfuXM4QdbyjfS46+n1mui1TFmFI7hQPA+mW4NsBfBIsflkL6WhY8hMpxE4dVUqs4xTOn8sjJYQBXnUD/ouq0fnXl7J/Fu/BbDkUA/15KtGawDrpWjxi65C7+/8Fca/8AkoiZcnoU+gTp89+HB366o23ThziEDxGPbOljDckUTP9Rvxa9fuwvYr1yGcYmWKPaSHCWijg5izQ2gNZxFNaEjM5TCbMTCZDeHbZNs6qbNfTmBZJanoCAVkHllaAlm6h6exwdtgbGzvNkozg7h/72lkSc2teu8N2Pr3n0Ik0YWJR76GA7d/Bw8fnMIMecuco6PER/8s+EQKgcDOFJUuKvBFmassXxShkcqJkJpqakqhoyXGE0lzhQrmFhaRJ5gyYIkENp2eb0RiGOjpRChh4PjEOXx3ah7lahVXyaRMAoVsOrOcbG4h+UFSjV6OoEcqzRseQc0hu8kGSxSQDSQLaden92i6LLpluxv1soIvXwuFgHXrG737VdiExsrP9XbX7q53rLPzn55JB033TnuIXbIZO3/9elx88zXwVB/TZ05j+NHHMXjwKLLFKgo2MDbrQ2HqwiWQSGQhDR2KxFIdbGSKRRSyJnYSRDYVa1hDassg5TJaKqCqMHsWRdkt4cB8gK6rluM1n/1bhJdfjtN3fBpPfPPreOI4cIbAUGV1raQAhkqgUWTI9FxJj8Bl9s9jk5p9eB7PoiKVJZC60hEj+9nWFMXAsm60tbSgVqsStBYwOb2A+UyRbJ8MiYSfQa8RioVgBh7mh6dRm5zGFtr3t6k6NhKkHK8KU69LFIkUpx6J8pSG4cV5mGRHQ7qAJH19ooqEps3tmD0wFzxUMv/lXaRvhJerGmkkguCTn4TwgQ/Uo+5BQ2E1FNarqWXOoDRTQaVq9z54uKqmO9qx/iNvwM3/zzuhtCSQOfUwTt1zBwafPIeZKQtVX0Ix0DBFxJICsk26SsrGQChqQKKOK5KqMkjBWNEQWLn0u0nVPCJ4uMYV8ZpARBOpIoOlHyyQ3SRgzJIa2LbnCkTb2rD/Xz+CO7/xQxwc9TBbaQabjhgi+KghCQrZPYFZQp/N/XN43AikrkSlXhqGBdwZvHKkpLK5HKZnVMwuZLF6eR+WL+vAyuXLkUo1YWhkHONMTZUrcGwfJdskQaJjZdcynIskcPfEIAG5gLfTW23WNMREn88ZtMmKhqwSJMKQScfFcl1VPkmalZUIeIqKSrZRYknyv4jCYqrommsA2/7FnX2hCPetb+Wwkr2XXec1WgNY/wlt/yfw0J//W2yuWL5C2dVjXP5nH8dFr7kMdvEgRm77Ig79+BBysy4qShS1qIbZdBnFTBntTW3o6iEbRld0p+qhWK4iU6tB8AVu1QwlhL72EGIEs7xo4XarhsedCm4mZbLTk2ARYAY9FcHOPmx77Soc+94/444v3YknJ8LIKQHiURfN9H4Iq6iSAipXXXhs5i6pKZ+N2LFAu6BBImvI+qXGqiloMllGlzY24VnE5Hwei7kiJmfnCFi96Olsw+Z1q9GaiOHU2ARymRKv5mURtDKyhc5oBOEVAzgwMoppet6vOT5eS76PnB4cXYInecg7VbDwGQlKAha9d2DT+7H4mluH18/6ndJ1eFddiakjj8EjgCur1qDnBz94UR8lk3QOm35Etp1NAG+0BrBeda1kRqVMW+h3Ir3Jy2/42Ofk9oGtqIz9BAt3fxtnDozDKrMyB1GyfzZGF0pobYpg12Ud6GhrQn4xi7OZDMYnF7GYLSNvOnDYdBeyheGwhjadJXxK6GqNQLMMjOay+IpdRE5TsYyYM0YWbktTC04cHcJnv3AvBuc1GGTpNjYlIeoyyl4RplODYxKE6PGSaNQLbgVsUFPmk5WZshJJ7ggyq51F1lEzyBWFoWk6T3fIFwoErDQWFnPo7mjFquXL0NbeDt8IYWR4FAuTc2DV3Wv0OmY5i2Qoii0r1uLs+CA+m06j6EXxJkFFwnFgSSKqngDNYXE0AbIgc3AJrOoDE3/1IjXPawU9AsnZ5f10XoDOH92BW3/9cuToKa3ty/H7Lza+4bJBBnp7uQGrBrD+T7Tz4bT/ZClfzZyFU6tSRwvhrgf2v8vzpP9y7Z/+faRtYCNqI/cg96NvYPZECa6oI6cHOD1ZpA6p4U271mN5bxjTdg37zo3i9MFZzJkVAotHnUWEHOh0CGTLLBOFmou0WCalpKE5oiNFpzpGymaYRNMdaQtdUCEl2FzERXzxOxM4PauipyuJNYkUHNHGuYqJHAkgnzqgRMpFZ3AQ62kHrhiCQoBiJWLYtByWyc1OmW1ZXGHJmogoKbPO1hYoK3qRK5YxNzePGQJXqVxDW0srBkhxbdu4HudCGoZHZ2C7Mik5VqqmiqgWwuYVPThI8Pz8bB4LXg3vcSX0lwIUAhXzaoAI2AhhwEcoBYKQyBex8BitnrWIny9KOLNqJcqFRfzLB96HxKHv4386HsKVeoZ92HIavbHRGsB6trZw5GtIz4xj/sypa1CY/ovXf+qLyfjAJbDO3obiXXdgZjiNfKwXC4UaTp2eRmdLM3bvXg4lHOD+QyO45+AEZhbJdpG8CJMdSkUMxGIh6NRxS9UamNOyTBtl30ElX8N8voIWekx7RMPGSDNGnTKeyObQJap4bCKHEkHgklWdiIdCqJoiRufmkCHb6BEEWSFQJlnY6CDdwdMTmA20qLOzwjAMYixTlKU3qKpK8BB4PtZiNs/3ob21Gb2tTVjR0UL35bCQziKbzuAkgbanpx0rursRDek4MzaFzKIFxxGRBYFWjWJb1zKcFSfxlfkp5C0ZfyiQZZRZhn4FCoMUU1dBPYZG0pKe67AsggJPBbsQVsx5t4bxr+/7LVRu+zx6cwUYZNuCRoyp0RqW8IWbEopTL5KX+/nsX1z+e3/T2zxwFapTd6D62K2opGXIXZuxcG4cZ4ey2LmuCzu29uPkzDxuvf80jk57sGsKIoYAh2zRmqY2LOtuRqIjzi3RQrqAielZ5OhWq5oouy5c6sFzJROZSg3ThglD1tGia3XvJOlY194KQxVxemEOM9UyREskt2dBIaCJBCK2cjSLS/mEAxbs9vlCET5PbWDKRmJI0AToIZWsaIgH0RWFXt+1sZjPwLErZGVT6GxvRnt7GxbmM5jLpzE9PYdaIolUSwwbSImNyHOYy5agmECOFGIkamNdW4zA1IM7ZtLwyxW8RQU6VA1KIPCqDgHZUKYAFRbHEiS6188JSynAJw0FiCZIKS7iyyvC6M8XIJNEbICq0RrA+jma44pGevDAnw5c/Y4dbZtuFNyph+Hv/RasjIhQdw9OTM1gdiSNbSuXYc2aJB46O4jvPzFDyocUjiUgIntoajWwtX85lq9czuNJi/kc5hZJvZD9EkgMpSJRCJqGULU+daZAaqtkOihXqkQcm9SYjFXxJE9BSJtlTE+UUDNd0jY2L6en2qSiJIfsXVCvpiCyqgoKjxK5TNqw2utk/9jAocMKNRBgamQJbVI5um6gJZVALMpiXjYssrAWQa5g1qARbJKtMcghEZlsgc8ztGwfHV2kwgYUSCOTSM8XCYg1VBw2vUXC+lQTFEHF96fGMWP5eG8QwkWk+AI6UEliBf9s2h0XWY+tbEg8bGvzpxbn8c2WMLBmC4ZO3I9VDVA12qsSWNwW5mlj63O+lMFTEVVSSb4YwsyBR3471bv8V/pvfL9m+UOQD9+K8kQRTmIlFqtzmB6dw4r17VjZK+Huk4O4e9805tI2z4eKk61b1tyCzRtXoq8nhZmFPIbGFzCTXiQ7yCyVzbPODbJnsuQh1pLkFi1RCaNKQMmU8shXbQ4Qm8BXKJuYKWQxWzQRE3WEiE4efSouPdclsLlmvfyfIrPVa1SoggJdNUilkRJkcovVq2IzmMkaWqTmHJJzbF/MagnrV/Zj7fo1iEcjfFJ2hRRepVKqzz+siAQhiSslNnjgWhU00b72dHVDFTOYn53jOVdZViOe4Li6OQXoNg5OTqFYLuLXAwN7XAEtBLIy7QtLai16gaeRJTy1Ywe+/cCP0OUFCCwbycbC9o32qgZWMA4I+1BP6Xmpmobs0QcxdeTYbqGy8AebfvWrMcmQYD7+r7CODMNr2oKivYD9B6awLp5CuEfDPWfGcN8TC5hflCEIMlJqgFWrOggEy2AIEew7fAKjU2mUq7xuJ2RSPGFNQoxslsFKwhBPLF5QnawbqanAF8hyLWIknabbHCoWAxyrv8oqLPjI2hZ05u7oY2FVEkIEPU/w63MESUo59HeH1EzNcmBqKnTaDF1GIhpGS1MczckI3cfqtLuwSHG59PoTw6Nobm5FyAhDov2IhqMolz0Cm4NsPovMYonDvFgVUKiV0ZRMIEngsglALENedmW4ioCiX8PKeAvijoJjM7P4u6KHPKnNK+ggOz0JcknFYCBKQ/Auufjs4OGUjwlVFKq+ojR6WaO92i2hgPq6peJLQL/QklLTECixVjc/+dF17/ofvUrrKrjjt6F095P0Nn0QWsM4uncYsVAcPSvb8djwGB4+ZWI2LZHCAFdWm3q6sHpFO2qihUNHh7FA0LFsMmlkhEIEnFXL2tHb1Qo5rKNEUMmlq8ibpKhIkXi2SzZQRc12OfxEsb5cg023hhFCp6wgXSghR4/NVV1uGeOKAZ1ey5AJYfRJBXIAm+VYkf0q0esUHBMKQSZfLZC6K6BiJtDenCA7GEc4muS5YecmJnH4xBmoLO4ka7wSQyDYfH/yxQrKpsPPt0+vWahVSAXaiIZCHLh6IgarYoGVLGX3awTc7kQzZD2ME5ND+FK6hiNkXW9WXXTVPBwjWp+A/a65c0NrSAweE9Olk2Fl+JQoBKcUWazIWohn5Ddao72qgBUErdSHNlM3erFXZxWVuSdh14rQonGkT+/7/abde3bHVt0gBs4JOId/jPxsCG3XduH04cdQmZawcquG+yeG8eApB1PTJioBAUX2sWV1F7YOLMd8LouDZwYJVhZEz+cB71W9Hdi2fgD9dGuSLTs5OoXjp85hfj6PTI2lPbCkT5dPFLYtj2ypApHgVTYtlOjxOqkoFp/uSkYRJXu3QLatZJlk24qQrRqpJgURneyixqAjkXKT+eIRDr2uS0rJJDU1UzNpf+f59JwQqShDFcg6ihCJdBa9p8VyxFw2MueT4PN4pQeRFfAT5aULQwCf5N5CdRE5+lWOGkgaUW41K3BofzXkSelZioWOpI7m8EocDmVx1/gUjhGco7aNpp4m8Tc3LmtaqPjXlyBen56pWAsTM6fI2z6QG8o81v3kw/sjqjYh6yE0poQ12qsIWO30v/aXZJ2KxcEfwczOIDN+5vVSUP315Zf/VjhQM/AP/RDpu4YQWbUZE4VpnDpawoaelcgU5rB/sITD42WUqSOGQhouX7kcF/d3YnD+HA6dmSHlRGpD1NGRCGHXzg24aPsAIlEVZ4en8PATp3H07CwWMgQbgSWSBrx6gh04pGJ8gogCm2yiRQCb9xwYuSK6SMm4BAU2gZnN/UtEY5gr5UjxmChaZR7nypKSCtNzw6SSojqpH50soSKS8grxVAeWbMCSNwMhqJcFtgguJlsc1YUkKWRXZQKWz/UNS0S12QIWbEoNg5EsQiXrxl4lcNlIJEGK1JdN72sQXHUCJcvHZOqOOTyLIBohG7pzIIwzEQGHRmZQI4W1OyCoGirWdLYiESEbvU3TSra8dT5b3Hrw6Kn3zO+764EphO7sTu59aCCujjbEVqO9SizhS3iApExcu7Cilh/6k01v+8uORGI93KnvYui2h5FOh7HmYhlPPDgKT0vCMWp48HQeZycCXm5YJZu2vS+Fbcs7cHYqg8fPTSK7mEN/vAXbVvbhymsvwepVPZibn8Gjjx3EA/vO4Nx0npeBkVjVUVJRMnV0leCgSAJUUi02vW6arGRI13jQfDyb4YqpOazxNQBZ8meUQNTNYlJOjJRWlCximed3WWTLqqS+MlWT9k0iVaZwGLJpOWzFG432V5EYdjz6J8IPSNGR8mHL1LPRRJtgxDbPs+ulatj0HkXgAouZZoX2Q1c0qHTLFrUoiQRcJUCIZdOzTHp6kFkhK0kqkA0YNNF7bRvoQZsS5tAamirh0/YCVndm0JOMIEK2cu2KHlx75WrcdOO65tHZ/K889OCZG0aOPnzf6Ujztx697ev3GOFIoVgpNHpiozWAxZqkhaTM4Xs/smL3G7cmV1xBvfYESkfuw5n9eay/7lIcGJyDV4uhrSuMn8zO4+hcCemcCU3QsLajFWs7mzC6MI2Hj5xjK/SR0lqO6/ZswRWXb4aSkHHw0HHcfe9+HD45i3TB5RndxCk+pSbwFVi+BVmRSR2F4BFUmKUkJ4ibdm3F5QMx/PV378WJuRmsaW1DLKLy+BRLJ2AxJ6ZsogYpuUiC28cii4uZFRRdkyBso1hmBf0snunOlvtiQAl4miaLSQXcdgWk6hw+/7Bes8pbCu0JS8lSLOmT/czWImSDjizQz+JrEQIXW30nbJDl1AlggUoQk/jrMehZNcJiREJcULCiqwN0mnH01BgmZuupG+UuER0xC1NkGfcdOI5rrroYF29dhcsuuzi6/+y1b7zn33+86wsffv83V21Y8bVoe+p4Q2012i83sNgXWBij/40AP3csS0B1nE1TiWL+yH3vSrX239K+/b0kafKw9t+K/d87AS3RhppQwhNk31bEO3nC575zBeRLLO/JRmdrB/qaDVIN85icnkaPLmH3ttW44sod6Bvow1x6Dj+5+3Hc++hxDM+bqHrU0XUFrsNG/gJeMyqkOIiGwzxRtEQ2bCZXQrlkYWdfJ9539Sbs6lcxOTiGTz5xCufmM+i2QwjHJOhyDL4pEJhqZNVY+oGIMCnFBIGrNUiigiqfBuNVXYKfixrBy2EpEL7L5xoGQX25eZb1zmDGyMRWeOarPDOIsUrsHltZrL5wBUtEZVCrke8r2y6v+lAUbFJczCoCEVYUkCxolFVvoONhFSnMIE/2UydrSyBrltDf04oo2ecDx8dxdiaHsmvjouUx9MQjqNgCbvv+Xhx/Yh92Xb0Lu157s7D9itXtd371Bx/6yW17N83NZ/9u500r7mp0x0Z7wZ79igp++vWNJRjyKkziXdTJ2Az+yM8NrMW9JhaGF7bMj+/96vZ3f3pLbM11qI1/HSe/9mXs/4GJ7Tdtw6GJBT79JiwpBJ0sDs/VeK2oeERAayyEWiULxfaxqb8fl25fhbUbusCW63v84BAeePAgzgwWkCHF4xkKbOKC6/g8CVOWNQQEi0hYhuTKSJMKmitVYHgurl/dgd9942XYsa4bRBpSJDl8fe+T+PbBc5iuOjDIGvYkYkip9dpaHrOWdDY0UeGqj9XDkgkebNYxH0sl2xcweDFY+V5dNTFIsRWJlpQTPyPC0vqDLEuekcrlE5XhsqXsfY8H8C2mnMh2skJ+JYvgavl8mXsWeE8oEl89KGGEEYsloAr0XmzSsywgaWjoakqgJR5DhZ5/+OQJPDqSR1gLsL2/HQNJg+BaJbgSwGMqLrtoLa583aVo2nI1Tj5wf/Cdf/zKUNUX//IDn/rsN1ZedOMv/IVkoGW5Y0wZskKF/AAb9bBeXY7pz//8z19Zqoorq/qNKAxRR2MKK7okBl9oY99MnQOuOGVHZvb/+ONdO2++quniN4ti9UnY938b3/j2EBJ9vfSQAKMzBBdJJuWTwel0mcCgwaBenpB8tKou+rubcd1lm3DdVZsQT2k4enYE3/3BI7jngaMYms5jXtThsNIrRIWa7fA8K51VS1BUXu+8SkrkXD6DcrmEjQSiD12xBX/4tquxfctqIoeIGoEjFg3hsr4urGoOETgczBFAZ3NFlFgH9+pQYQqLrV9o+QwqLJnUIbBY/PFs+g1DEZvbJ7Ma67SpmkrQlPiIoiLVJ00zmyfWRzTqoGKTFFlciik4gqBBz4kZIZ7T1RSNIBKJ8DmGAj3OJHVoEtRMAnKxWqOfWRKtzM8dW7vQNE3abA7MlmQEvS2kEEmhzdCxjGUqPIjfnEpA0MJ0gbAwSqo1PzqMdk3GymsuFtZs7m86++j+i3/wv79ZW71l7YHm3jW/2PWO2176TOn9OKDPD9qIjY7eUFj/yQqLr7QnTUGcfQjCXBY8EemF+YuCtAA/5ODUbT/6g7Dg/tmaX/tsQowLcB/4FI597Si+dMjC61+7BkPDC5itsUxsB5M5E5MlB3ElQE9Ux0BvM7Zt7EB3RxtPSRicmMXBQ+dwZiSDqbwJR1D58lGkQ+CTFXQdBgeCFdlGVRVRLFuo1jzkijk0033Xre7Gu6/YjN27tkBtbUaJVIDAF8zz4FZMqFULbOGvsbk0HjkxggdOTeGRc5OYLLLVpSVEyIolyYrFNZ2vVHP+M+NLbBHEAomBh4AFNk2Gze0TedoDg5ywNNQq8E5cXzACPM4uPPV7/eIg1DcOOToOSYdP9pYF6OfzBQxOz6NIUAKfIhSQ1TXQoofRFg5BkwKwac8G+ce+tgQBK8krpD5GdvvH+4cI4jrWdkUxQFBme8Ny0SS7is2rm/CG66/AwGt2ID06i7//oy/OTJdr/+OP/vGTX86nSwjomJz29RA85wWUlYvurm6sX78eNdrHhsJqAOtlAhb1jwMnIBw+QcLpZ1igIlAxET6DTGH/rtro0S9v+NX/sVZfsxk4/E1M3vYjfOq7C+hdN4DOpIyDU1lUqPObc3m66pMyaElgx/I4tqzrR6K1CbnyDE4PzuPJI+cwOFXCYsXnFRHYvMEa2a0K9QTDs2DIEYi+AlETULLLqNgmctkKQoqBq7ta8Kbda3HNFRvQvqqXjkmFT2qFBdaliEEdUYYdlEB0g+jWY01KxUV6MY/Hpqfw5OlRPE6q7sRkFsWajzAptyQpNRYrCrO67iwLjODi8IJ9Dis7ysUES2TlwXUCmbQEKgZYmSstga9hqLGJ03WvyMHGJlLz2BYrs0zqKiJKfMkwptTYcxeLRZydmMREOodyzWUukVSkiM5UHB3JOKnAgK84LRHMejrbsbWnlcP28RPDuPPIGEpk19Z2RrCxO8kBnM5U+T70d6p48y2XYd32rZg5OYf/9yOfGqvA+sglG/tvZavLW9veDoHg9nytVqvhsp2X4u2/+g4ClkOvKzaA1Qi6v1w2kb6sigv8LMuAscUTNL+pPPrwHy2/9F1rYisugj3+MNwDB3Dv/izy1NE3NCt4/MwkaioBpqxApZ59ydY+XLZtHTpIiWUIOPc+fgT7Dh8n6+IhXaaOFYtC5rx0YHsmr7IQof0JQ+MlXxzfRKHkYyGXQ5Q67DV9zbj+ovW4cfcOLF/bDyEioUSdX/FlrjZkskvMjgUu6SqtCYFBsLGq8EjteaqBtmQYb17RiuvXryZls4CjYzN45Mwg9g2NYWyxhPFCFRFSME2k3mKhKEKqTkZYhkc2iHHPI7Unuh4pLSxVymJzpX0OLpHUF0unYMF3VtZYFrkuI8jRz/R4gyxiE8G2qz3Mk2AXskV+3L0E9FRYR3NsAceHp1Gp1fhS9dPFEsggoo8sXyIURrFSxPhCFrJbxc5VXXjdzgHoERXfeuQ4Ts7m6SOSsaIpQDIWgmWSzR7LQ73nCHza75XL+vD+D9yy7JP/9J0/m8wWFgbWrHooGwrVUy+eT1cT+DRNa/TmBrBeAW1gDSrZQVJCj0KQteeTikSRJEZP/PC39M6Ba5Pb3yR49hiye2/H3IkqHpsJ0N2bwpGRcWSqAeKkbuKSgj1Xb8SGTR1AMcBDj5/CPWeGMDS0CLNG9oVUkxGLQ6JOxioesIC3oikIkQrx2Xw+glW6ZiFfrSBC3f7q/hbctH0drrxkPQZWLYPSpCJwBNimwOM9MnU8jlwlVB+tC9N+E6Bk14CrR6FZrF6xy2NEAqkuvUXF1qZmbFy1AjfuWI/BmVkcGJ3GvrPjODgyhxlScnOFBT4xOhFVEdEVaKTCQrLO1wlk6xMyBeV69bLJbAiRJYsKwfk0CIHHr2S+VBh4+WWmbdn0nWaCZj8BZCadwYnTQ8iXK3QedKzo7URIk3CSbPJspkRqi9WSL5KIIWXTkkKKjQqWTIJWGqoRwdZeFW/Y1o+kAnxrH6nViTwEstBrenSE9BoSgYHTQ2WycScQuUnAJZf14u0TF639+Lce+a96S/tw3IhOsVFQs5jltvZZFRaLob2IWvCN1gDWS9NYcmMyhlK4glLpIORY+3OqLImUQjZ7+JKgOPaugZv+Oh5qjSLzo3/FzIlZHMxqyBOgolUXE9NFRI0okgS3ay5fg57uGE6NjOCue4/jwGAG09UqWyOGlEQYUsiGRCqi7FJnJSumCwqpAovP/ysUKlis2XQCHWxu0vHmSzbhjVftxMDaHigRNvXE59NwWK0ojaDArBuLKzElwZeVF1VeI50t0SUIUn1dQUMngLE5ew65W1JfjsWXFWP2uKWrHe1dbdi+YSXeeGkaI9MEkrE5HDgzjiOjC5jIlTCTq/KFIeKkNiKGCp02Ra3bWHHJArI0BpfUF0sE1VUWiyP7SPsVJxCzidQsoVQnJViu2oimIrh8JSssaOCxQ2cwkc1z4CbDMWxeoZEiI4uYKcAiCzqdoXNEKm1dXwc6m5NI51yMzc3xKUnqSgL5ruV8etHnfnAUI/MlXta5p1tHV4o+31wNI5M5/OTQFPbsSuK6a3eIxydmr3jswNDv3NC790+6e3uw9S2/DbtW/ukLFVtHkdReE5tc7jY6dGOU8GUcJeR30RdSDjejlp1DZX4SrOKS63g/tREapHNPPPjR7otf95rOq24Qq8fuweB3foSCG8K9k0XqUEXYZO/YGno9bUlcfcVm9HRqePCJo/jmnYfwyIl5FGwRBss1Irsih5gy8lFko3BseS16X6fMJjOXME23LJGzLyrivZduxkfeeiNef8Ol6OhnaQ/yUqlgFvMiAGksBUGuj8jJpLhoY/P7WA12QVL5isysBjlbj5RnHhDcWI10FkTnMTN6bwYXl5QRG9kTCXCsXEx/Zzs2rOjBxau6sXttB7aRuuskVcTyGJiNnSWVs1Bi1U9rcGw22bnKV91ho4ZiIBCIJT7K6JEFNniem8KL/3W3pQDVRalSQ5WUSyIRR0drEz3HQyZbr11vmhKpI4mfKxYDLRMwbDo/bLqRVTWRTMQIRFE4pod8pYwyfTqJiI7ty7qQTEZweGIS89kaHarM1VpzJAyXjnEmnUV7vAk9PS1Y19WiPP7kya7s1MmzV+xcd27Xzb+Brq6un9o6OzvRRVs8GoPHBhvY+rJ8sKExStgA1ssALJ/sjBptQn70KArD+9lcG77KyoUbszNDQ4O3KJ70O2t/9Q+SsjGFkc9+E7NTPk6bVdxzZJHnB/m1KtqbUrjp6p3o6VJw7+MH8Z27j+DQeI06jIG4IfP66xLZqhx1ZKfGhv7JMrEUBLJ+BctHhm5ZGb23bOzHR99yBW5h03M29bHdgsnjQhJ1GJ3bJzbKJcmsXhWDDgORSpvMRzwFNimPqSq2ugtXXyK/ZcmeTIHxtHV6HlS2lBcpIWbd6JapMZYcagVMnQVIxAz0tMSxtrcVO1b3YefqZbh0oAvrOmJo0QmKvAaXiTlSl4tlmxcJtDwbOtlTiU2EZlnwBLIiQU0gGxkP03lIhWBVbIyNzmF6LgcjLKMlpbO5PVgkGzhXImjZFjRVIvWl8M+oRla2yvK4XIeP2jWTNewKNZNCJNtaK9DFAmhm8wxXt9Jh2Tg+vohiyeajmnFdQyrZDLNaRCIsQqb96Glrh2HIiR88djZ+6aXbf7jq0puf0/O5js1Xt5ZVnc+lbACrAayXDVjsJ1YPSo6kqBPlUStmCAQ6r3hwfhMi0cjJxw59dODaW3YN7F6HxR98HXtvP4ms3oxHRzM4QzbQtejKHzVw6fYtWDcQw5Ejh/G/9w7S36oQ1TDicQNR6phs+kqF7BBbsoqpCDZKViqXkafnl8ii9ZNF/ciNO/FHr78MW7esR4R1bs/i8SFNjSBgyZ4iy21SuXLiaopUTcCBpfCRO5bDxKHEC/BJPDEzEOq3fBPYYySu1gIONZk/lwGFwYvNj2RxKymoP9bzBV6lNKzpaE+Esbw1iU3L2rFrVS9t3djY3YK+eJTnTGXoWOYqBDBSRVWWXiGwYoO075IL0w14smhXohnRqI4CqTO2QEUmX4RK+xPTQnz0caGUJotu8UC+whYiZEvg0OtUCWgeKeI8qawa+bO+qIb+pgiBqYxszUHFIQVLyvPi5S1w6biOjeRQcwjEqod2suCt4Qji7XEIrkXgVNHX3SlMjM+27DsxWAjp4hPHx+izPHUSZ86c4duJE/QZZxZ4OR2Rp5qoDWA1gPUKABbZMi3VifzkCZSnBqFoUVZMHKyouESdd3J0+nXlhfJvbvvVt8bj5UE89OUf4uh0CJNkzPYPZ6gTmmSBAqzp7cSeHaswNX0Otz5wHAcnfB4SI5fC1ZVPna1MNogNiYcJig5MlPPU2agTWKQg9rQm8NF3X4l3X70dqaYmFFn5FknlgwEu2T8Wl2LZ6awXs6J3MrNaTEGJdWhxBUWdicNJYh1KrudCLUGqnjP1NLREXvpF4Nt5JcbUGQOZqBG8jBDRwoAUCkMglcKD7Ex5kXKSCG4GKZr2ZAhrOpLYsaIVl6zuIavVip4QKcZqFdN5E/Mlh0Ds8WKDUQJsjSycQ6+TItAkCXLlYo2vb1isuNAUjUAWIuSQ2ixa9WRR+hwYPGM8ydRHpVLlC60WSM3WCPAb2lNYRuDKEdzSpoBqrsYnfq/rowtQVcTRmQUO9hZDJIveghXLeuDShanqVNHZ1kv7HzW+e+/DcbOwcO+0myqePnYII6OjGBkZweDQEB2vg03rVxGsQtxeN4DVANbLDiy+6IJdgxFpQwYLmPWnUQsTXKIBJNeXD9/+8If712/dc/EN64Qj37sbt+0dRzqI8SH34QVWPcGhDmVgz9b1aDOquP/JMdwzuMhLpqRiCmI6W1ePIOPUR9FCZAurbAEJVmCvEpDVsbGjJ4FPvv06XLFrADLZnZIjw9AVzk1mG1ln4QF0AgVbAZqNznHgyHXrx5I7hfNKiiVusvworq7qnespGyjUExHqJWPqAfk65Oo/M5j5Yl2ZsQUqRLJBgm5ApE0mcCnRMKRYhO5XUV/Wpp5PxfKkmsM6VrUnsWVZC3YSGFbEw8iR0prI1ghcLq9Uqqs+FtJFUmMyWpuTUIlk2UIZi4UaLHqdMIFJJzXjBQLSuQJcT+DHwlbTCakiD/CbbEUfen7WdnjF1Z5kGJ0xFUVSWRMZUnaBiiZSVavbopgu5DCWrfAPfFlXCzYs64ZHNnK+UEJncxvaW1OYX5hPHBsaLVy/c/tPfuX9f4htWzbjkkt2YsumDehoSSISjUHTIg1gNYD1CgKWY5L96sVk4QhG5x+HQBZOaAmjMDq3dfzJwfftufl1na2xGv79q49j30QNZU3G9FweOZMFnV0MUGfYvrIbU5PD+PGxLKYtB2HRQZxsokDKyLFRXzKLlyT2UGYjdGUFFVJpqxMyPvae67H1ohXwlChZFgNBROSTgFhsSeRTYerKKpDrYOGJi2xBT6aszseqGMB44qZc/11YqqrKbaL4VBoCgwzrcPwciPX72L9gyTJyeHFAKrwAH8t4Z/eJpApFLUxbiFRoBHokCS2SIJBRZyYlxsotu67Jyyi3xBNY1mlgV18MvaRYR3MmRjIlqHoYqZCMQr7GY3lJspgsFz5XKPL6XEzlGbIBhdX1si1UTIsnrTLrrKkywT5CwLH5EmX0ZhgtmmB56uubDVKyBuZNhywmW3DDR3ebhp5UFKcnF5GpekgYCpb1tBC4ujA3vwiLrGFXTxfiuqL98P79ys6ta358+evfVW5tbUVLSwuaEmQFyY4HvGprrAGsBrBeOcBiWdS+Z/Ps8LXr34DFYzOYeuQYzu4bewt1zjdefdMlxuTRg7j9x+cwYQGmW0OmWEXFZRXTBWxZ0Y72hIiDg3M4MJclJ+EiSopDpc4n8MnCFmTqyC4prUrN4ZU8bUeCrVTxlzddjjddshU1nVSVwBQUSInIsMgKKgrDlszTFiRmy5gCYgmbZJ/YEjLc+rFA+9L6gWwLpDrAgqUexd0t6kP07O9syJ/fx2YuS0tTaJbmE7KOKKKuxnzB5xvPqeJg4y/CFRifisNGHDUdSjgGJRJFKJ6EHgrVM0MIHAyCSVI+G5ISNpEFZFOBTmdziLGCfQQdNlARj7OEUAOWWUWRnlOtWcRdATFSoQxYrPZ7qVziSasKey9Fhk5/N5ki1kN8f/jcyIqDlU0G+prCmMxUMc+WW1XoYkB2VSfFdWauwM9TH9nuluYEapkCzi6MobOzFa3JBAZHh2OnJxayG2RlX+r0GLJnT2DQzCMSiXFla+gNYDWA9UoCludwa8N0TXvnBoweOIFTex/AyaPTv71u3cbLLtrQhAfvP40HRyooUieusfLDBKWKGyBC/XtrXyucwMKBiRzmig50gkHSSPHyKa5gswEwvpQWsz016mTs94ot4de2dOHXb94BhWyWJMhkPRSuPCQpDJ+gxUYB60qqbuvq21JQnQXKxbo9DIQLrN9SqZfzlrBedkF4OobFGqscGrg8IZZbQbJYvifUQSTXF70QmZLjKk1YUmtsadV6VVE22shg5gh03iSPzxFkAXumvJjqYgCDRtAy2aMNdBHMN6YUTKQzOJt1EQopqJKqCkg9tpLlUgkmWfq9xBZ0JbtshI26rfVZUT+TV3qw6aQZuo4oWWWPHGmtpCBFio0F8EcXKzyIv7rFwKpWFbOlCqkonwBqYHlLBPMzWSxYVYKjCtEXYdVsjJKdJ7GHrlQrqV7HuO/RJ8U1unz3yopezSxMYpRg29nRxxVgA1j/d7Rfro9SYKsa1yfCsvwf0xfWFD1hdXMyhXwmj8GpAvIsU9xxCDx15LEa5qxyqETPzRTYgg3V+kRF6uwOqbDAq/D4jkZfdskh9WJ6dEsQI3XRZZh41xVb6SoughkblRXhU+p5VZ4ULK26jKVqnPV0A6aazqsdIahbufOT2up7JDz1G58eg3qtKl6Ej5STsDQpmYXsBSFCHIqQKRXhyqRsDAKM7NI+kzpjAOPjDqTopPqoosAAykYSVbG+fDwBlq0nKLO5jnRsglvP/ZIiYRikYlLtvWhd1o9IRzuCWBNWdbXhHauXIU7HOl82+fvOTU1iOr0ILRxCayLGixhaToA5Ahs7h1GygGFSbbqswrToIlEscBD303t0dRgokC2MkeXeuSwMm87Z138yiCGSV2t6kojTed0/OIbFQhUXre7j+3ea1O9Udhoz2RKKZRnnRhawkM1jw8AKpGLxrd87furt358/hidlBxF6TzRqw/9f1S7MdGfzXtppSyxV6MBTQ1R1wbM0Nfmn9ND5+/xnPC644PbZnn/h65yXFhKerhPDJUNQb6Su2FLDvsCmx5zefx/kqBK+9J1vftvg3NfW1qiTDA/XMJmvUScOULNqfGEG1u3Z0DtLwmQAK5QsXk+dh48ED4LBSq/QFZ0VuRJcOASFCtkcM9D4tJsbNvRi9bJ2aAJL4IzxDHhJCyNQmR1zeDkX1jnrsad6BjuPPZ2POQlPX+TrV/z6HcHSGV1ycE+d6KVCCks/1BUWK5fCgusCVF73ikFOUs5fa2QObrbiDcusZ+susxf3eWIoq9HOLCXRV2KVUG2edc5GEbkKsejxchJ+k4oonQtmZx1DxQ2bZAzmLXzxxCyqrMRzvoQRglY4aqCZgDWXpfPj0XkkhcQUDauIyhaDdVHiiabFYoWPJrZHCHBN9Lr0czEXYLGqoKs5gNjahodHLIQm6DUNgz6rABNzixjoiCBG6mo842Nl1qSjlUkdyxgjuB0cOocdK/qwunNZy52np9+5Zqd43MvNn262SQ/7bF1sFuRks+bZkZ032D+17JLwM168z38XhRfYnu21L3zeT11un2c/zvexC38XnmX/hOd5/eAZt898zeeUARc8VnjGfgrP85znep0Lz9+Ft+IFffzC+4Rn7C9jhLe0sZ+ZQpml7Rxt9nlgsQUA30bbLfT9bwEv8ck+eFZAV7pw5/xnnBQ8B7CCp7fg2UD3zGOvH0BdYvCeKNQDPALL9maTW31mvWifVLbMPLSge9U2ZXbmYHvoy99PuGYN2ayHuSrZEjq+gAey1XpZErdehbNmE8jIHrJgOFsDkNkZx6uxGXD0pgqfRsey0y16jGub6CKVcsslmxFj1odsi6ArvHYUs4C2z/I5Q/UcqaVAOB+5E/AUrLiSEp77W4XzMSvOJ6F+lthpWrIy7BgCBlOZFeXzuCUUhRBfydlnq0OzDuov1WVnUHsKcuCZ7CQVwc5GwOtf1acCsQx6MGvNVmpWIvSSBECbNFM4gbhCNpp+Z1etd24dwP7JDA7kylAJYotkBSdmZrC8sx2paJRPARIEhY8esmMwwmHopK7YAhvlioMFUrtxspIuvW+EqTmyl1NTOThFAWs7NVw2oGBoSsMYgapIx1RBDaJnI0UKbCqfRXqRVFs4gO0ZSJd9HJ9YQF80js5kHK6Y3bRix55PbFi5PZ1qbVOMSJILW1UzRPbZshTcJbl6/uslPk8A4tmAgOfpuAKe22g+WwcXXuB9hZ8BWM9yG7zA8fxcq7cIL5HjWtrn4JnnSvyPvwvPhNqzBIUC72mBI7Av/yTd/i39fv95YDXT9nbarhbq9eKW3ltcqhH+onzcUx3z2c/x069/oboXnpIf9XMgLXGTBXxTbV31ukrVZp6EOUqdSTLaYAsavKAK23bgevVVjZkVZIXliqZFHYgVnVMQOGQLVeroFQINdQxPKnGLFrByLTJZsFoea3pbsbq/lVWsQaBpkA3aaB9YQilbXw9kTXnJYeF8n3j6sxGwNOL3rEccLNVUF5ZgUjeJTwfdUR9V5H+r8QuSwOuzW/AEm48MQgwvTflZgmOwdI1gC666LNbH6nxVWIoSgSrgy5HBrytONpJpMdHFzgPIZrLrlxGj1y9BJXtnKzI20MPfOzWLU3tPouCEkCBVOj+zgGgsjFQ8jlxV5MUFGSDKVQsRutyxgn8sL6taq/ESLzPZMrpbdNjlAGoshUSCrbyj4fhwAWu6dNoUqOEYjs3UcDbtQaX3aY7QxUnIYL5aRp+WoIuIydd9PDOex0Bonq/YI8tiaC5v73jTlh3s+8JKeNW5/VRt+vPy1XseSgk/V5d+puv8D2srCs8mZISn3uXZ1mE8/9f/8LcgeEpuCy+oi8TnDQQHS8cuBC+GPS+SW8/Z/BcIY4v1D3WpzlTdpfgr6KL+JLmUR84DK0F/HaA/Kf7SyRPOH/BLsNTW89fcEp7zosdgKSzd7Qf+BYJd5KqBBVoVnVWxzKLdrB8gq93EVn6xHJufGhZsZgqFLRPPyvnyfE14PJbD7JZHB+kI1InLZCOpk1eW4KGJSUTCrTDiTdTJY3yqjaAzNUPdnCyWqrIifPLTBfIE4WlNfsF543b2QmvIYMInPC8d01N5V/UPh4OTB9oDnhjrsXyrWIiATBtzy2RVwVZ1zmZgFjN8fqFNipC9u0rHzSqHqmxKTzgJIgzJxhofsPBYJQjb5gm0mmLQ67K67hIfQHDJ8npkvwKbJZvKsJureO22fnzv1CzuGyvBUDW+4MX0QhbhThWpWARTCwVIpJzYKtRsMCQRi3I1VSpXCFol5Msluk9BiKm80iLtSjOqZbKTbgQnsqR24yJaWxLYYgs4NJ3HeLWEksv2Q8Fi0UKrUf/82OhovhLg1GwBq3vpM5EDPPzIPvGD7/s9but5qJIvq3i+GGFdUfIA3zO/hy+kUZ7zKxo8b4d+pog7f5F/7kVjhZ8WAkLwH2D2AqHcF+hP4k/tpvCS9defdfTsxTPDD85fWnw18NxlgmzI51Opo3QTOX/iWAevP1C64FP+RYH7QjWshOf5IgRP3S2cr+x0wXcjGqEvcCyBocEz6K/YfOSPSR6VVz9gxR5EHnTn9crZ3DdSFSyyw5bCYig0CVrFTBkOgYNFifrI/g2sbcGy3iZcv2UTpHCILwTBJtYGMVILggOVXkNz3LpqkcWnvkHBM6B1PkZ1/oJf/xIsBdiD84ddt43Bkjrw+VZXWcwOCmSDFE1CbeosBp94EmdPn8bC4gyMqIRUc4ysFtlZqV6UjyVssp9ZLIsF8lVLRkgKI97ehdaelQilOriScmtVOFaVHleF4RO4ZJaGYYEtburbHkTXRDESQ6q9HW/c3ItDs8dQqBLsQjIWF4tIsXl/qWZEQiwe6PJRSdMlO2mZBHEFyWSCVFcFOTrnLJcr0Z5E2apBqJr18jwRic4fs34qT4loamlHt6tibHGWoOhCJ6tdK5VhpehiRMrWotdlp3q0UEW8FEazIWFyaAyz8zPoaOvkYGeWuq60/AvU+XMEipb+9/OpD+G5v7LP2j2l51Rn5/dPeJa/nQdR8EKmRgxeABfCT3W/4Hn2/6e7rPCf1t+DCy4kwnNG+gKeD8kNIYsJ+77oOlazugQs1lQ6eyo/UDYhVgiePirBfxHUfCF5GFzw+s///KeD0xe8nhJCLNGMuVwZxVKJr8IsklUxSGEENVIV5Of4enwey6myeSE4kYwhg9ZixWRdDQNkZ25+7TrsvuZSbNiwGk2drYg0xaAZJKudIqqzIyifeQyTh9KkTFLo6d2E0LK1REuyZOX0BfsnILhgn8+r0wsV1n8MrC9dg4O6JjhvaVgCqhAjZURad2b/g7j123dh7/1HcPz0MMIEqptv2YN3v+X16FmxlhROM9kkkQfhz49M+mxBCjoHtUoJ1ewMSv8/a+8BXtd1XQmve1/vBb03AuwUKVJUb1QvluxIyrjFduLu9IzzZ8aTTJJJ8Z8/k4kniScusZ24xFW25CLJVrFVSEoUKUrsJAACIDrwgNf7e/fO2uc+NDYpf/Lxw0cSeHjv3nPPWXutc/Zee/o0jr/xXWhkMq3tm9HUux2ecDOBKw7STmV/IwzJ1AgoAZFwVXgLTpQDjbj7il58/Y0RvHQuxWDAz8mUCVpxMs8QQj4/ZsnyhHlKA4w8GZxXEkd9bgR5/TPxecSSGQ6TC/4IX+PgZ8nnSWY8x87uKpJJldQza2CgmE/qmBNnUU1ywKpIZjPwmy6OuZs3lcZ0rozObAR1bh2DMzGcOHFCAdaytDKtrQe9hlaXYgnWejLeZGFdbr96aQZebCvKvADgNO3C7y5vB1wMVBWamasQTTtv4ryFraZLyOH/EMX371zzmm6s/HSNnK6dnRsW+zRrZwBWnKcSqhajUFYAy5itkn1qz9GuXiha2FxekPpFAfRN0fqyo3OZfZ5VSL/00M3zoprkZDU0exHTXZijbPDyDiqEXTuZg9dwIl6pKnM6s1JCOi/lOV7MFmxYIDOo52vf8+AuvP/jd6H/iu1chGQeqUHMDh7B8RfGsLDgwkJpFg0RO7ZuuxG9H7gWmcQ8mc4rSP7gZ9jSfy/qrt0EUEaWCYZ26UIjUs+WJUK6uEB9ypJFnVSatpok52t0q1egVeDsVtY1hjhDaOJ+0AAETcwceA7f+fJ38IMXT+Do0Dy6unz4zU/+Gu5+8G3o6e0l4OSRmnsNZ17+Cc6cGcPM1ByvwdpTk47QkUiIgNaMdVs3oeeam8igfgWxuVexePTnGHnsABrbB9B1zd2w10dRTixQYpoK8AqSBc/YVbTnkOMkqW8N4v51ZFkTx1DK6Qh5odIdAvEEGqJ1yvu9rNJMNOXTrqxrOAZRfn49mVFyIc7Xe9SkcQddZFcuZAWkcgYclJ66245EOY+o14mWUAj5Qh6JfJ4gRWab4t+8DqnTdHt9yKdimEmmCZx+aMUYjh87jdtuvd0qjJdDD8OSEJJEa6460HhTBrJKgqz8zspiWf0+KrgsbZdwuVRre2c2vaoMEnXNUcMVa79YrBC12hmAyHtl2ih7sdXKKtCySpuEHRpikqRJugoDb0nSVGwU1BW1SWeXQn/Dss5ZAuNL36PtskvszfBK+w8EtAsDh2mVi5lWw5ClNB5FlNTJekWNlQpAslZguYkYFYNRPL8MWNrFFK9pbR6tkj3mm25I/lt/fv6EOD8crg40Sw0Tliadzoco+yCSJDmWyKAt7IIhC5dR3etxIadXGK3LKMoAcUDi04twpbJ46PpWfPx3fxO7btuNUPg4hp/+Ln70w2kcfC2FybgHubId6WQJebTx2c+jr+0sbrqljD2/2oeBd30chdF5nHryszD/5UVc/cCDcNTVAWlOyGqck1isY8SwOM+hc1qSRQUCbe0Ia7IfJi4SvCNHHZxeTnb7Io489hS+9A/fw3eePwNvxIc/+v134h0ffB8613UjHz+G55/7DA4+cQzjp03EMgE4zCCf9QAnugBDmZ9J5sSFXikfYzjaj84NGrbfuAG3P3I3ttz7XxDbnsTw83+Bc//6F9h6za8gPNBHlpVWdsmuap6/S/C1GWRGdhTLDtywsR1dh4dxJkFJ5g7BViphPp6wuur4fIhns1Z2fa2ztFMy3p1ONFFGS+F4PJ9lMKB0zZdU3po0r0hnimTABvwuD4pkv3IcEKT8bSyWkY8lUBCwK2hokSLy2o66SWaWyubhDEQIDFUcO/pGbaZW1AmvMCthihVDrwHWhZJNu8jGu6ZdOBcN0zoYsdWA0BSAke1glbSr8/MEggzlX78cwTnHSoYFlrLviIqmTq+knqGk9kwNtQcpp7tCDWRB6qqsSlqtSe6xdbBZVSfXdnXiSlkAp8OqXJAgZydzrlYNFRiXTpdxiTWpadolWOCbA8taIPyPzXOTz1EH6lJ+ViMkVtPfqhpfa9/athwYlo6pNNNwoSAG28t3Y+gXuym9JtnUDZli9WK+OcLXUMZ8Cxt42mUGT6ttoprnPQ1DgRcfoDeC9QMDqAt4cTaWQnO0FT5pvVUtQHfytgsFZIjYHgcZWKwIJ9nA7/7mPXjf738MTR0pTD/3T/jcF57HK/vaUNF3QfcF4AsHKUUoi6JpAorss5jIVrN44icmnnrqBWy79Um8/9cfwrUf/kuc2fsknv7B3+HGGz8C38Am5JPz8JUkXaCCiriJLt2HnN5p+vIYLgGuIRnzptUEAsUMjv70a/izT34Lz02kcettG/D7f/iHuObmO1BKPoMffvG/47GvjmJ6NEIZJj7pW+F2+eDzSnmQjYBlJYpK9rukE2hmEeVMCrOnZvGNl47gia98Ere++wo8+IHfw9Xv+l8YfvVH2P+zz2LL9O3ouvFeNYnMUgYl3QdHldJNLyFZdWJ9dx3u6GjG2dRZLGTSaA+6kUgmsOj3IlrfSGzMEXQMtcMop4SCAMqymayoIRLG+HwMc5m0SsmQlve+sANujwPFHD+L9+92eihfc2huiKCJCzGVLWE2nkS66EAik6MMtpJSZfxSlPFhtzCOIkZOn0QuE4ebEjSvXGI1NTetTtb6mnm1kj6yet6ubG9rhjWfjJqsl3/L4hEXWBEnRm1nX7GqYkWdzgoQCbNTnmycL26R8iZHnvPNyeBhGjZlalglC3XU/OZVP4yamitJIxNh52S1chrvsnvgcZLf2vxKJpdKCX4u53JBWFheJd9UxfGWT9dZ1S8BLmsTGy9LBi63TX4REL+I2n1L++3aeZHDWD4hL1mt51bZXptrZO/5z45MwGVbBqxaEpexihVdmOdp1roJL8tC+eCqccGgmIb5lk8ejMsM5NJG9fkIpzLEq1YJSheBoqu9ET+dWESqSBAjOFTIrETBujQuPg5MinKx01bGf/mTX8K7f+fd8Dli+NYf/j2+/60MMvmb4K3fxsXng8tVVfQ7my1Cc/lVzpKWzCifdZe/DT7Xeoy+uIC/fG0/3vZrg3jwgw9Cawrgsc98Hjfd/gF0XrcZmJrh+Lhhq9oVq1PttrSlQa5ltstQM1qKpXBRgFWy7Yt5nNw3hxMEqw9/7O345Kd+Dw0dHpzd95f43Ke/jkMnqpz4N6G1bRuczoAkHvFhVxWtlkarVumPlUAqDMng5NaDzfBTavkbB1DO7cG3/vz7+Pm3P4ZP/PXv4aqbHoavsREHv/LfkcqRRd76CLxS3mLMUCY6Ob5Jyd4iW7Thgc1N+ObIBOZSXC6SYU8wXFhcpFTzc8zcKKYzlLYOLsCCkri66spjh1QgzKcymE+nOebiNw/kUmk4w9LUw8PnVVTJuE4u1BTZRCQcRVdTEclcGgWjgngqBafboU4pHZTPeb6+UCqrCZpIJjE1MY51GzaQdZQtaehw1eSVuWYOXmzhLp/uLn3pGrTV3Iuvk6JuFS41ywNfsSzTpuZUlddR0p28dkIJmZ0weyiJrEktAAOmR8lzJZfJJpNzY1icOoWF2DBys2OqSYdRSAJlAS0DuRK5oi0MT7QFdTsfxpbNWxH2O6Ez+FaLPr4uzzErS70FL618gYK5QLr+e1iQdmnQ0Yy3rheX28qt+r9NbMIFQKorS3vNM9EufoRrQrmRO6SWUK5ggN9651Lmu7706NQGvFWka9TIgal+Zv1fJoa2Kr/VxNq/V75vXiZnWLvg9at/ZxmytFU5ZxZjh52Lxxv24+iBl/D64SFlnicNTIVqFxntKqqDsY3TJ48//YNb8f7f/yBcxhn81a9/Hv/y+XkU3DvRs5mAVcdFb8sp472KkVaTQyRMKp/EdOplVYrT3rBeNQP1iMd8yYNnnj6LudGXcfu7P4rophbs+84X0BrogasjQqZS4mQ0Vc6TPBtdu0gysEhFSbOw+2An0CSH3sAbL72Ajbftwf/z159BKBrDU1/+JP7kdx/H6XMbEKm/G62RK2DjQq8QkGQfxKwUVSPVSrWkKLXV+dlQDMMhJ6X2rGp8YbdRnvGz6juvR26+HT/92tfIck5ix573oX3bTTj01Je4CE3UdfSgIhKPi69aznGx6KoZbLtPx6sjsxgi8BtkFF4XmWcpr2ZK0B9QMsWspWnI5FMNVh26ovwyZ1J8DrL4xVLZoUwcqiobXjy9yvkyQc9JIDTgIZMK+31qLy1GkPOQtbjdHsUei4Ysasn5otQvlvgaJ26+5WZ09fSjJKeQClfstWaq5prDkEtx+qU9KWNpgS/9X1sJpMoIVvzFOMZ6RVi6lc9nyMmspFVw/MXdQwKEQRnncnuVe20qncDwkWcx+MLXMfPyvyBx7Puoxg6g3r2AxpAP7a116O7vRwcDbvfGTVi3dQDNjS7OmzEsPPdFDA0eRTHYgLqmbtg5H02CfapCsVhLhTHXZmcvr5E1a+X/59dSSdnSH9TSC95a9traQgFNW/tvQ9UDa8rdY6mpyBJg2ZQhQC2gyzxWv6pbB0mlXM7pCnxjCbA28BWPLAGWVjuykn0WAzWbE81qf2414DRrkGa+pVouTdMuuwl6sZ8vnbqt9nZfKltZeig2LhQnZeH8xCns3/saZhIZRnVOGC6yLKOxOKvHCB4fum0dPvEXv4pIXRl/9pG/w7d/UEXzhgexqXunslqpVCVj24UspUulwEVfdCOZimEhNY9sLoamegJGuFWdMpYqZA++MOoaerD3qZcRH9tH0PoEgo0G9n79G4z4u1Uqgk13WeCxdH+rst/NWpqG2p0pirVEFof2voCZSgYf/7MvM2ofw4/+5yfwp586iYzjfmxdfx+a7fUWm3JW1QIxJaILaBkWK1Ss01jKIdVVPTYMmQA+fq+MgF2AxAdnsIVA1olnv/uvfI9DBK2H0bz1ahz4wb8gELAhHO3lNXFSkUVVyAyK+SI8XrKgUhXPDE4jmy+QaXpJECuK5XoJKOKuWpLF5BDLmZIqyJa9HieBS5xKpevNApmWSCm/x2cxEo6Ay+1WETeXzykXCcl0DVBKyknjXCzGzy4QoN3weVwqXy6dy8PrdCJXKCtn1D17bsF6LvZiPqPkm+zzVCuG+ny9xmwvFiOXqIm+Jt1hJSXFkm2GYm2m2hOzM5jZrdw9qbjgXPF4PHC6RO7x/inN7byuSj6F4aMHMPTE/4fYkcfgKk2go68D7btvRMMV16Gh5wo0NvYjWE9m5rPzdyghbWLxXVJNdX3BMBo7u9Fy5Q2wz7yO1596ikyzHh3rN3FoMupEVwrqTdO4AK40Def9+3JrbVX8v2Ri69rXv5W9sPPfe/U1LX3ptT6ZMpfVPlVNFq5u8ntRwCpm8wJYq/awTGtf+LzrV7VsNZAyl5M6rA0xu6rcsr3pBt6l9bN5XgLdeXsN0NfWLphrxbRe46437bkd/b3fxfzhk0paeDgALkqT2aQdIaTwkU+8Ha0dLnzut/4Gj/8ghi1b3o9N67cglpcGpAnkE2lGLi5yLuxsdoHMRcNC/DgyhWFKqqu4YPuUJ7vaoyEM6uWKakrR0Xc3vvfYV7Bhx9fxtve9D8WHJ/AzAsGDH/wYqjkyFaduVQvUpO1SlrsCGDuUl5WNkz89NofC3DyufPgB2AMLeOl7n8VffeY0fOG7sHXbXZQUJaQpDeRYypCEWDOnjAapKCknSooR2ClN7PpS7hxQ4h9p+UVeglw1BRclqk1ey0VX39pBAPptfOVvv45Q6NN46Df/G678tXfjtS99A74H+hDw8ErzsjClBKfMz9awZ1sfdh06hZdGCshKd2WPxr/zSCwmUFdXz/uo1VDyS51YiiU9F7SbC7opFCbI5BEje5PN5FYuTGn+Wkkk4QkG4fS4kSWjcgYDqpN1mKxtQ1cbjp0ZVxZBEbIuh83kl4ai9G7klJHyqWR8QY2rnYtdnDbkvgUkFdMwKpessljqybi0wPSaU8by6aFUhvB+fLwu3WbZP6vfI8sqFnO87xhGJ6dQLiYQnxlHJbmI9PQQRo/tw0BnBFtvfBiN/bthj3QSwNPQ0meAhSNk/DHVgLfEMQj4gsrWWZqiyAmg7IeZ1ZzqJakRvDfc9zZEGw7huZ9+GmU9iRvvficchQXrpNlp/zcfdGnapQDHvIi8vDhAadr51SjaJbICtEvigfzTyhfUa6eEKxixtMerrQI/c7VQ1bTlPKxL0iR77WFKo4EKJ2KZjKBcLKjjRms/6cKRWq2h35xEnvfKNTdn1CSOhuXt91X4JlHX7nAzAm3E1VdvxcsErFg+izZG5LK0i68W8ccfvw5X3HclTj//Lfzzt6fQ1HcvNmwbQLbionysEpS4GGTjlpPPNBNc6QUsZmYwmzvOBe9HV902tJBRcdmiZLeSPrWynP64uNiDiEZuxd9++uu45pbd6L7mEex/+VNkXs/i+nvvgJHOqBNarZZzo63aFbTJyVZFTpSKmC6cRK7Zi9uvfQhTJ76Of/p/H8N89W7cvvMR2Lg4jHyCkVZXbMpmEHTIgPJSGuQ0yZZcXFuUVxqlk8OjIv3S6VahSvZYYgQn08qpyVGA315R+y/hrj74zffgC5/5Inr7t2DHvR/C0Ia9OHHyWezc/gAXcYGLfwFFgk4xbyLo8+L+za14eSKl9qrc/L/UcKaTacrCIBweJ/IERDH2q4gnPrVfiqAdlM33aBQZMrDRuSnMJ1II8pn5CELS8j6bS8MbCoBiSoGalN8EPUFs6OnA7GIRE4uLiCcWEY0GVAZ/WUqCOG0rZKPppAVYLrukCpRUCoFE3Colp6Zrl5jZpirXstWiuLlUrQYr3UQ20A2bXRWQJ6fnMXZ2FONnzyA+NYLc4gQ/cw5OkbiiPTyUrFoexuI46kNR3PG2d6HvtoehRbrhrCygOv8igeqE2muErwmOyA4yqygXldcqobKJNbWkPhSgcexQLqhqBDsZp5SLtV2zDjc5TDzz1D8hEqzDuh03oDx3DkUp3Tovk37tHtZavFmzB3XeHtGaje5a+qWpXSI96RIHj2vevyYHl0HqvFSrKsmAdGfy+/yqK5RZUwaqlFg3FXO/GGjIEiL6LAOWcdEcK/VCK3/EISdQfJjVzCRKkpBZKJBl5FGQ49naGFSXsrlNSwervS5cmIehrRmwFaAya9FvRfqZKyzMWHon07IMliwyw1TFzgm04r677sRPnt6Ls8NzyHGRZYsu1BNU99y1Hk5zBN/83DCmFptw3+1XEuhcyCenOUEdnBiS5a4j6g5z4ncgYR/FRGwvSloGzcFrEaj3q39nFqtKElbNPNT2jUHgJnC5DCeSmQj+6f/8A/7rX/8P3HDbXXjpy4/h6htvISqVYGY15b0uwFuVLlyaQ3VZln0oaeGVjk+jMj2NzbtvI204h29//n/h6UMtuP7KHZSqSeQoU03KMTsfV66U4/fKXAxkgwSforALASqClDsQUTY6xSKlVCYrCWlqURmUgpWqjLlLecwrE0RnDg7exObeDpwZvhNf+rtv4482bcRt7/sEvvMnv4X2tp1o5ntqrhC8CTkFKyDB8b9zZz8+//o4zowX1WleY9ivEjwDqTgi9jDniBsOjumsc4qLT1enYyUyHTvnThtZWIXycno+hjECeQ8BzUX24nDbkU3EUO8NwPR7sFA24MtraA0HsHWgF9nDSaT4/iIZbdJwhPTKLpOaY3Dm3AwOHN2H2OSYbN2jRBZZlioGaapRtYKcyFY5OZWE3IoUv6t/S7gtM2BQlpU1xVhz/N5kRY4AvMiRNY2f3o/i5ClEjDia6pxoaKpDV68DYXcQPq0RWXHO4BgmpsjoB7Zg2wO/hkj/vXwWHO/Fg8jOHSQokTXWbSICt8PlDJAd51HRirAJA2WgMosLMCpZFAj62dl5Mv1FpOJzyM+nOK6c76UiGsI6gu5p/PPf/znu+fU/QoerQlZdVmMhkrosTh0CwmIgKYAtOwS2ix8y6CqJudZT4GIMSKt1Cv937NhLuZRKR9LstYCwksRaJlhVjDxsLe0MWOuVLblmKxJPODMN2Yzn2GgO5Zxilcjqat9LSFNJ7RLa9SXAql6KDNl0QyXFmRVDSY9KjUIbjJLjlFJee7m2v7WK1r3lom9juQ7B1NamhZrGyuadtYm6wrZQGwMBS+oJLvoUdt68kwxlG742/AwnONlVpYIbrmrEuu29GDt1GE8/fxZ33/V+bLmyD6dH5skaKlxMWcoMJzyk/jDd8Hq7MDH/OuXgOUQdV6CrcQsHWSdTI2Mgw6xmUvy9OBcwFxknq2lm+ABk8jXi0W8fxQc/Mo7ebdfg3Ja9eHn/o7j2jneS9fBaeA8+k4yCn2fojBMOn8qp0Yo+FHPzyPny2LRlI37+zD/iS99MYF3/neho78T87BQy8QW1uS4Z7ZWqWAunKH+kMw+ZlRZEwOZFY7SZ69fA8NRhTM8OMuqHEfEwojtcVqcejqNTndBIKY1DOak6A2RfeQGKjXj9lVfxxI//Fu/7jU9j4MpbMX7qNTRccz3MhQJZZdVqoMGJ1+pvwjt6WvG304Mo53Vk7AVVqyldhWxuB3x1Pi5CA35d9hENtUFf1Ky0ZElfaG1uRp5yem4xjmkChCfkUB0RZRqmExkV2n11UQKzLGwPrujvZGBM4xeHjyNOgIz63epwIc/x0Bgwzs7n8WwiQOnfAC/llfjpmwR1IyOnew5l/yMLUPpEKsePam3PVeZ02S5/yckN50E9DAKRtzoH28HnUDr2FDZ3uLH++gY0tGxAINQBf9AyLJw4N4z56XF+BhlePAZXXRBX/NInEenZQyAsID34NMoLz8NRtxWettvg8PsZRDhvxJeN09nJgGPkppCamURydBSxoREUU1l1IqoR4G1+F8J1XgQCnQiG3YjW16Gv3gvvd57DCz/8Pu7/8CdhS0+qk0VH2aGa2NaSLiwnWsM6mV7i8ksJ30uAZFO3b9Rsty+Wib6S83jRU8I32XqXvT6LhFidnNQeoG51G5eAkeE1N0jqhmywK3pbS3NVuW766hOqi5A8fTVg1bxJzt9j4sQwpbuLsh6XtlouaQSHRLaIJ06RrjvqVN6Iko2rb3LJaeLNSm+0WmLgGu1rAZ/avFXnAFZW7FoKDOWf7jAoc3hdrfVA0hOWah0s5uRcsILd12xAU2MQ33lsCIliO3bu3IlpRvNsvKjyZoS56NWqKgL2hF2YTP8CJ0efhZn3obNtA3xkDQvxONJcBDZHmYtwAbOTZyjHZrnwCD4VaY5ap473S2YSL/zkGTz8O+9H545uHHz0JG7YQ6ah1/MaGRW1uJJL4o6gEjRl5uSTKGanYKvvURH/0L4nsFDqxsa6XqRiXBS5pBVdzDKyGSl0zqkFb9h88ATr0RDpQmu0nc86hZGZAzg2/hLi6XnU+brUePqq9Vy0kocmLbCsU0SbKa6jTmSzDEJkeX63F2HfdXjyuz/B7Q8cx447tuMfP/45rOvbhgivUXYNPAx4iwVpHqHjvVdtwldPjmFuXvzhpXWijdKT0prSrupyMIDx2ijvMlpJAYV6jlJDyMkZCPjR0dyk9oFmElkGBUpDAo1spEtOmfQprJIvhykh01zEPo+GG67dyffX8Mobx/heIYS81klilgAnMiprDyClLZJpGChkRJJyxhgu3qtdBRmbzcr8ttWyDNVpt3S3Vs4emsqjCgfdKJzdh8TTX0CbOYxtW/rR09uN1o5ehLq6ZI8dc2dOYGZ4EDMLKbUrX6W0DYcbse29v41gG9l0Po8Y5bxZmkOg7WY4I3ym0pCDAcZmcP4YZP7Tx7B45ixmXh/CIueVLrLY50Rdfx3aI+sQoLRWLFLYIBhA+XM9GETF24Cb317Fa3/5JB5//SSc0Q7kyaIt0zqbZeSoqtz0mjNL1WI4F9lnUqyTDMZmXjyl3cpvMs7bBzMvLIS8ZCmhbiXFSrWMMPzaqbVsSIh1U5vNgX7dV/uUqpWbplmJ1Jrgy/mpVKa5XNQutHoJsCoX38eyUFKrHW2pUxNNTn7Kand/sshIb7eM4payWNbmuZjQzndguMCrw7XK5WBF7FrZurXfFzCEVR28dJoj8FqUbGLKrpQjgqMjRcyMZ/HbH7sHrx09gx89fQpXbNzA0cjh4Cuz6Oy9kcuoEaMznDQxYS0eShixzZJTHi+BII6jR55BbHoW65tuRXvdTVgonEKRCzWfrmI2fQrJ8mkkCzHevwGvLUSwkqJhsX3hxDPr8eOf/gxv+/h70Ny7FbGFffj5k4fR27eOEzsMp8tEkgvToQcJWpR57hIqmUW14T9w3f0YH34Nz/04gUjgGmxgVE+mRjDNxWFwjEtFSob0lGKCQV8Hog29aOpoQchPZlDQcGZ0ECfOvozFbFxFZg1BMhJKjFJSShrgdZGJeSKQnX7x81KOpDKAHhdjTxEuLozho36cOnIAHfffjQmyh8kTZxDc2MffJ5uhTHNyjOx8Vr29Tlzf2YRHF2ZRLNeCiGyIFzknchnYCTJuTwgueT5lC7QMWbiUN+J+XxcJ8bN7+LxGMTq9iOZW/t/uhpuzVmpAs+kUIasCB5lFOueG31PAHddu57iZePG1I1wGYdXaTNKxEgw+TrKmKO/HYFDxELwkN0quyi0r0mF1ppbMcEM13DUV6yqZNpVa4fAREPhGsee/BveRJ7C9gdJ1/U7UrWtHa9dGNLVdiRzHdOT4XkycOQ0jn4XH7Uc+No8GssWt7/h9gtOVKOTPkZV9F7ZKEp6unahEt4iXCLTCLNxFMqiZ05gaPI4RAv3UVAmmT+NzqqPU88Aje8ScX9nSPObIuGxOylRXBOUC2T9lbl1XPaK774XWswEDoR/i2bEjaGvZpNJudGulqxPSFcFSXalFvFSln+leWWeGiQsgTTNqpOESW87G5cqCagREVZfU9rNUdoHFdtOGXXmz6SpRl6zLtFkHJ5Iismr/62LvX8GK42jlkhvvCql1tUMsml0ys6Wpg5uTQKxdJEdFrx1fGtpSDrdmZXlr55VIXJDJamlU47xEt5VTQnO5wn5pk02dktTexE0NjHId7N4AKfUZSqwK7n3Xx/Hbf1mHg9/5Nnr6C6jOTOD0iTKuv2k7J1Yc82MzjPbSwy+PIu/HH1oP3aPj8ImfY5YRsM7Tw4gfxUTiJUyWpzA7f5zRW1w2k5zkQuvrUB9uQUfDAAEjDK8vxEnmwtjQcRwe2ovE5LjalDcDDlz5S7/MMRpB1t0LnyMAb3KeDLBXeVGVbHkYo8NkgufgC+s4fuQYzo44sPuKe3Hzrpvw031xxRSKxRmysHm1Uetr7Ef/hl1kBC2UlBUu7jiODx/DsZGXOOELiHh7YK/UqedR1hIqn6lYpHTNmfAWA1LwARffx8Fxq/LzZ8gOm8iwvAQ+r3MjXn3+F7hxzx488BsPYuxHz6Jvy2YOsrhylVAwTBUz/WSJD2/qxpOnplRjibDNQ8ZZVLuV3opb7bnZbG54nFJ2QnAoVRVoyQSUrtB+Kdupq1O5W6eGz2KcoKyRFtuJcD4pnna5EU9mlaTXTcpMAmy404W7btqp8sNeOT3EzyNDEs/4fBpJMo0iZb3TxYVbdisDjbKwO3uF4OQkIFesvDSh3pBkUAMujWMQZqCqxDD/zNfgHfwJrtrUhWBTFxqbfOggWAXb1yFbnsDs4OtInBlVybC6rx65mVFE6kLY8OCH4e/bhVJ6FlUyK7eL66DxauiBAdgoAR3GWVRiJ3Du6EGcPnwSY2dzvH8X7A6y3IIPxXgSs8a8YkPS1ckX8iLaFEJjiw9tfg+ShCvJiStNLZClzcLj70NzRwP8qbTVpNclO69VdeSvalPVprWcPBsX7kWba32i1my/2M6rpxR2ZOqX2cQxL5tYuiQnVT3lstWh9X4O0/o8XWQGpbE0akHVYf2YeFLRZH/Sdpn8LvubA5Y0PiCfVUfwDr6zHMiIFi1zIYg1b7XGkLSa6Za52ozOXK2ltYtS0KXTxpVR01alMui4WH360oApKxZk4fQ5lM9ouDFKqXIA+aMFSocUIvUVTAzNIZkkSyyHMZscgk4mkEx7Ud/MyS0FuFwko5Ov49zIfgQdPvREruWAE7DSz6lylGx5UXmv2in/OkIbsL7zGgQD7fAFmvlw04y4Uf58ATl/ACPTdpw+chg7r2zCzmt3wR2M4nv/+gGUEpRD9k4yGY6F34awLh1sroCvaSslRzvgrGBw6DQylHAbOwdQKMZwdvIEWdYoQXaQ42xDMLwb6wb2oK29G5lkAqlUEqeHDuJ1gtVicZEL2KsazprVmDL7s9tdcHmlyUYZmXIMC5lR9f2opwlhB6+96oPmLKsGGg5J2Az0YPzYJOKxGK7fcxceP/AqAwBBMOgjs8wRqO0E+JKymrn+yl6se+4QjkjOGsHXIDBmZNFRkrmIJMlskqAVUhnqcqpaKJeWo6Z4d7kpEbvbWtSe07HhYZybmqZyJmMNBfk7PkqjEEpGWTk+VAmGkivX21aPe++4GhWyqb0EgFKeUpcLulziM4jWozg7y4mRUzbVfgJUSWYhx8OpWcHTKWU2yguMP6ecji1O4dxPvoi+8V9gy6518DY2I+ILomWgHYHuK1Wd4BRl4rnxM5yhdlUUnlicRzAYxqZf+h3KuFvJvmdQGHyU85TjGNmIangD50mcgHQSC2f248yrJ3DyWBqxQhk+ztGmcAB1ARdZlThaeNSkLvBn6ZSB8ckZZKcLcFCeOtbzGbmyWCgRBN1kn+KSq5GxMcBWJSNe2IhuqPpDTbdM74wl2VFzmF0NVtqaJFqzlsd1KcMK87z95PPL5d7EPlCte1st99Ba/bo6JLM84GwMJqbsJSzhpWEpKdWEZSlJ9dKJZOZqwLr4ZpOuqfqoiuo4ZV10lZFL9iWkPjNXK2tY8lPRLsi/unhS6AqHXZ38sVYfm+rHNfmyev+qlgVvUwlnBsoEHZ0yZGbwJP71P38P8byO+q4Q/uwfH+HrYgjW+QkCLpRSJoKhAJra2wlyHvijAQyNnMXpM0+S7icZ/bcyAnPRlo8hlpngYkkorS8pPR2ckFs7d6OjqVeZ08UTr0s6IVJZyryqtN7xwKuHcfTQKdx0YydB8ij+6s8fQmywhIfW7aAMicHtY5RmoI8XzuLA+DMouVtw/3s/ylsLY34qhaDLj0pxFE+/8CSGp/ejRFankykE3V3YuHkHOhuaoWcScKam8Nqpn+PAuV8gR7CqSM1ZmVHXyDAuk91QvkVCTfxqJBg5KMcyWOTvVCnvAu46hN1ySmNXhcJ21VmMYO8OYWRQ3BRmKVXdOH58CGcPjOLGq3ehURq0alxkAa+qgQt6Tdwz0IUzMydVEqdfXAU4SIlsCQ1SRkMmlcokKW+DBBuH2n8Uz7FSxZpm8ojlBLG9pUk9w1OnTmIillA7vlHKJY/TahqSoYysxuPKCUM2Zdt6mvDQXTejnsDy3ef2Y2R4FN2HD+CKex5EgRLE6aHUk8Uhe4vKE03A2KXYXJlMRPbbPJ4AcosnsPDjz6Jr+nVcd00X7IEI7GWTzC+IaOsmVYEwe+YA0kMyB9wwgw6kpxc44Vzov+cjCBCsUEiifOqnyGZnEGjso8RvhT03gnxqGLPHXsbBlw7h7BClfMnDsQ7CnhFYK6PAz2/spBQki5JMf8YqePIkAM4qYrNzmJ+PocUY4PUzBMtBvpT/mF7ksyn1HPNCHAhehvLsN6yNdqqgilpH1Yv6GCxvtci2jhAO24pfm2ZepNbycgztTfKU1B6YoS1v9tcaMyjHClGrNs4VlU1FDBEvE5tmuX1UpIJ9Nd1bY7ej1fjViiQ0LsWwLLAwVAKk7AXIRlpJbDQktd6Q7qPeWjr9Stbp8v7VcmmNeV61vLlcgKpOErTl4HABWK5U1OsrtV6a9e8Kb1b0uLsUBBhhjeQkvAE3YvkAEnG7MvCDLUJZ5MVC/hh66pvgtjegsYdRzO9DrurCxKFDKJERNHi2oTHSSSkyjzijbza/qLx7GlzNqPe2oaNxI6VZEcOTb8BOFqBLvZ5ZVh2i3WZF9SO05TRMTaUl3wJjpzP46pfO4MbWPmzY3Ymm+z4AgwBVFmfU6XNYn/s8XswfJNvg9WXtSMeKcFU0zJw7jZPDL8MoziNMDAqFdqGzZycaG+p4xzNIkX0dOvUU9p6h/OQC8GoBhD3NCnTKhuQx+eH3UrbWhRHyuPg+GplDM5r9TcoxQDLSJfPSLIgdDBeFTnZK0HEYTjJWcTZdxBsvvE6GFMQ9H30HWZoXR/Yewuy5SUTJOnyhELZF6nH/li34wr5BLkhTgbo0lC0UTWWZHOWiygiTIvtyB0Oqq06en1sk6EgtoJgNJnN5hH1ebGzvQIDg9drgIBnqAoqRAtob6+DzUALDow4KpvIpGDO6OoTpaArg/us3oN5h4MtP7cfB734dDf2b0dnVTyYbs/ZSVTmSNb/E/kbstZ0EIY+X7K+UxfQzP0b3uSPYfWMP/B0tKM3m4Kn3w9NDue6pRyZ2FrOjpzh2eXjIFnLxNMlaEttufBBNm68jW49j7tSPoafHUdfcDT3YSRCpoLxwEq/v+xmOPD1EWeugtNyA7hYvGSNZKu9/hgwtSQk8HXCig0zXKXKI7NRLOdneGiGDY7Aoc9wKfLI2P+xugqG/QfUQ0Cgvh5JxhLY1IBIOIl7i/JSSnVrdr2JFNlPlMlm+N7XynVXOt8oCh+vYazqWnW3P31M3L+YeqGlv1Z9PMb9lzFhiHbUKc5XsLOqs6lRlcGKd49Yq1gGBBE85Ybx8ToVpr11uVSUHG1qterq6bCwnFehStqJJoW2lluCFoiqCtEsFOVZsNAysWP1e7MbMiyaarWpDsQrgTMuVi9HSXmuJkaXc4edUvbzxioJaDV4U3dJavor5wb3YUE2js7cVpw9VMDmaQSaeQ5C3KD0KCyUHgi3tGGiJoMDvFZ1FTFOGTZw9DE+pDo11vapF1kImh4Q5iaqrig5HAA3+7WRjTsRzJ1R+SNjVQDyyPLYM6UhTLKFUZrQkmxCwPHt2DJVkRvnO39Axjts3NCK8uZ93QyArpqAzmjqiYbTsfgB9z45haOxVdG1cx7BHucAIHvCReTRtQJO+XvlL1TN6+4NNMEtOzGRH8drQi3htfK9yofATVLxOP1y2AKMX2ZWtgo5oHVqjA3yyBFNOfpkcPgYa2Xuqcnx0k99joCnmJUmyBI/dDV+kAXYjBDNpWUqPTs4T7MJobiU7KpMxPmRD0dOFQrYOR18ZwgujMWzeHMTNmwfw0pFxLMpcqAowmAwOBC0bpQ2lzOIiFx6ZSwPBVmoAbQVhOiQn+TwXjYE85V2FYNLYXI89fj9OnhrE0Mw0Filr+zlGQS50n1sOBvh84wtqMWeKjejv7cbOm3cjynv60Yuv4Jkvfhq3f+IP0NfehXQyS/EmBwRSgpxT88SUk21hJpzA6Wc/h7ozj2PHlj5097aoPbASX9fCYBYNdAIMSvPDR1CRZrqaFGinUEzMonfbbjTufAh61Y7S8PfJmM5BI1s1nBy7SgKZsZM48NMX8OqRYTTXtWLXtT0EHAMOsTrykVWFPGgrtOPE6XOYGp3n/KlS4rfDH2HgzORRLJcR9PmQiKWRyVPSV2qn4I1tBLYSjhw5hKFBsuvoc0gf3wIX55rmj6oaS2G0kEIIh6yNIoFJ2tAVVDG8rSKGAGRglKEV3fLxl25MSwkK5x+CCaDJ2jVWuywbq2DkTeyZbeYq+2/5BGFTS+aKKoeyoPLgbAQul+oyReIhnmHibiKlZvp5Sa41E4Yl7Fidh1W9sJbPXMmcXbYuNVf1ztOWmy0sFXGbq4qfNfPSQHV5A8Ca/pW28Q5D5XVIaYmq6ZKmEI5aLRIfer0vhPjkEEoHfoGbd7RSZrkQLyYxmUogNbeAzg1kDfYUFuczjLJ5ZHNB+MJ34szIo9j/8uPILBbRGdyFtrpugtocfCXKklKIE42yKtJEMCgSyeOcNBW4HGF4yNjEBVN58glQOQlEHo0TjvKxXEG1yIicLGIrQcrYnsbV23fB1dZMwCmrREC79NJza/C3h9HU0Y7huVOoVGYU+NY19mPDxhvQ3DaJNFmP1+aB5iC4VnNIpmcpE5/G6Mhe2LKdaPBS0jooQynVjGJOtcyKBNsR8jbARUCSHoFeMdRzO1RyYjFbQKkQJ3in1TVIl2u7SbkhRbtlOYBYgK++RFnlQXbGQKEwjy/8zdcwHs8QIIJkQi5EG6PY2t8C/646VDNefPHLj+CnP34F//DNwzg7mEW6ksainiHva0TIqChZF08lVe5UU2O9qhMsFSlzKA3zkodWKKmkUt3pRqihHpsJau4RPyYmJzE8NUt5GEBrQxRBj1uVJCWTSUzASnfp6+pA31Vb8Mt+4IlnX8b+v/kM7L/7p+jqaVGnr2UjpRJlXQT1ghQquzSMPfU1aPsex9Z1deje1KT81AopUwWEaH0fAb+AqckTKFDOSpOReIqLO5dAkADUfMUD8AZtWBh+goxrnPfSCJe7nu+fxczEEex7fC/Gj8XR3t6JxpZGJLMV+AyvSn1JE2wjhQhZYDuC2xw4XHRiePAknG4P1vXXqe0Vl9/kmCwiUdAU45Vrs5lhykYPZocGsf+ZN3DD7muwvceDEz//FF7PGcitux+RnQ9AjzYQDBJ87nyODKR+gnVGC6qcP02XLOciQdlBkkH5rkuPooBiOxetOTHNC76nL/XS1N7MpmbllF+rsSrLiMfqFmLAXOlQftmuZ5cyVTTNVZLwYnlYF1LDpdT+JafEpfbqK3SpdnOmuVweoV3KeuIStjNLoKdIrb2WOV92WLVzfAguqW+siCa2wc0ofOqxH6GvNI7dG3bhSS6cDH8zyU8dHo7hyuu2cEK6MUuZNzPWBzPkwPCRv8PQ6AFMDo0QJgJKmti1NBdYES0RsgGvNHKIckI1c2CmOHel27MfbmeY1+1VJ29lRj1p4CBRoWhIaUUZPkaThGIClB9iuzI9Du81uwiseU5c2QTmo5M2H4UMZaMPgYbrYJ94ks81htauVpw8IUWxbgJfVUmaNF9XSMfhocTMpxMoTDvR474atmALqXWBEcoFh7iauhIIhygxKF+z/KxMvqqKih1kWYZiUylUSwRWk8xYylbUwFfUPbm8GhrqGzA7UoWvUVMsqTXiQJ0riolTM5hfqCK1UMC+VyeR9B1FqNmO9u5W9Pd3oL25Dg/eSHZ03V145dUpfOeFSew9NoPFiQSyZBQBjoGplZBIxVUBdlMj2aY/pDLvZzMJ1d3ZxTGTfoaGSnkIE3S3orm+DseHRpFOJDA6PUepHkQ44IPbxWWZpjzLV1Q6SHM/QeCqq/FhspAnfvwoXvlH0oyP/RU2D7RRqmdQLTutrHje4/DBp+F98Z+xvdmBvi09CDe4MD+dQTFTQmNrmFK3hdcTQ3zuDJ+3gXS6oMZKahQ7t9+AaO9GZKYPIs8vj7+VzzfEOUOAGR/Fc9/5BTKTFVy5bROvkcyylOfnl7EghxUEykaC7sxkBomFIfSRVV1z9WaqtjjOnjoNp+QQtjXB49DJJp1UKxoBFhw7XpstoBJrh/f/Ahu6Q7j13W8H6sPo5dy4kUx0ct+T2P+9L2B44wcRuuFDZLkcRT5rKft3VPO89yLnqY6COILwd9zi+l1xCdlc5cJwPqkwa1+rDEL1t1j8rBatsex8vNR9W225a6bKhbPrVrPgNU2+aj0PjLdgdWpf8yvngYfFolbRQdNck+KxumPM+X6kq392aQK5NDDaBSZ9Ws17RxaeAKI6aeXfLvmSDsYGdXB9C86ePozEEz/Ah27dCK0hzOgT40NiNIEHe185hwc/sA1NzRoOvnAGBw940UQZMpI4g0R2Rrk9hChF3K6i2oOSxb5YjCFboqQj3Q5TouVLsk9VUSwk41jgw3OqWlhN98BZ0bgohJg6yFzI4DTpHmNX2feFeBHNXkoBMgvpj6jijKNGtQ05OXHDXdcM/0QF8anX0NBDeK5MIx9nLKw0KD/5RPIkTMogtUizZCneXqjG084UmSKvJ5VSG/Mel5SgFJHOL6Bs4+87QnDr0jmIjIrsq8L7qXIRSWGw2xWQxu5kCHZKliDsvga+3scxG8TAZoJwNUGmMITN+Wtx/UM3I+sgkJMtpKZSqnj55Pg49h4awn7nLLq2RnFFtx8bNjfh1q1h3HntNiyUrsA/f+k4/ufjg2TDTmUpIzv7kg0vY2U0GainbO1uaEQil1aWMdKl2u8SpshxctnR09eL5qZOnBo8heHRYQzPTMGX8KA+wOBCqZl3U9jolBLDZEjZU+juqsPt730nAk8/j5f/9L2If+APsPXW26QiHGXeY+7oz6E9+r9xZdiBzq0DCNaT6TGoxBdSqhFsKErGQTBMxWZJRigks2UyVMrX1AI6tu5E08YdKC0eQ2rsNTIqr6o9rTAk5ufm8OKje2FO27FtUxfK9jQWKIklTzHgMVDhcxGDvsVkHiVxos3oyDO4bd7Wj/VbN2MqtoCh4TE0NtXxGeVU0XiZLL2UjiFnD1CiNmHq4CCSBL+uDV049epTiDR3ob6zD6HW3Yi872703X8Or3znC9j7hQ9i8Z4/hqO3H47EpFr8WbJv8SBTDX9VPh2DFdms2ubBqm6+tW0qYzkvdLWH21pTwGWHlvPWt7aq1E45h57ncSXF8eIUKzLQtkp5medZAV3SSV+39ozsq+ol/w0VRIY6ndN0y5p26aRBW71BZ64kk17O733JRMZc1TxgeRBslv6VsiB5X9no1pTfkROmx09mUcbQtz+Ht0d13H3DVjw+PIFj03E4GGjFt3ForMKJF8bObfX42cuzGJ8/g1SerEX2xdzKWg0Bu1vVNOUyFYJAEXnKmlwxAS0xBr0aR8mc5f+5OPQi9b34LjlURrFT91l5t5RlesGmNvFlryXgJRujtImNjCNEVmAPe1RlAKxGsNaeF0ONi+8ZafCjIbIRE4finMDXU1k+gROv/4wgkkM6t8BhLlFiykxyqONfIgeqXKjJZIZyZRJZglWRkdRVcsCeixEQHfB4/QgigizBvkCJIF5ZwrKUj4PdBY+bYOaJwh9yIRgU6RtCLl3CyNxRPHhlFxaHeN0FL/o2NsF0FuGvSmkFF2lXGF1cqLuu2IoP5Ar4q28+js98e5QMqYDreudxc58DV19Xj9bOOkRkP02M/rj4KhSIATJY3e1FQhjT1Divq4j+1jbKvQYUykWk0hkymrR6xl5HUKVChL0ubNu8EZH6CEYJkrHZWczMk7n5fAjx2tNkQ+IPXyw2wljMo3NzD2574D50v7wXT3/xd/Dc/jux4wO/jTQBYvG7n8F9/jwaBzrJjpxoImMbHZ1XDK+ttxmBaFSVz6QWFiFFCJJqkOc9BoJkcFt2KyufzPQh2AgqOtmtw+ZAcn4Ye586QEZmoq+vFdlyGowNWIyPERykzs+hDqnsDF42Kftya8que34mgSPlI2So/di9/Wq89NJezJFFNreE4XZLbSUDYsWPCsF58uwE3nj9CDZu78H86JRye5g7NYiFdSNoHRiBp+kGOJuuwLW/8WlsPvgFPP6tj+Js6r8ivOk+2PKzZIdk9gzeNgY9SdMoihmZynLXLmrevtSOdE3301XiyagVpizZ8ZyfQS+bNlVtbU9OWy3JwqFyrcQyQEiPgaWGbMtZBG8RgFbvYRmXdKS/yDGnTW2+a7WbszbUllFPwMtYal2lXdYH4/xk0mXgMy1GpT5LNvKk/osLrywnHF437BEN5x7/IvqHXsS7P3o37H4P9r00hMVYCn1cCBlGlIOHxzF1egF37dmBv//KtzE7W0UwItnPSbKmPCKUfAE/pZTdhngyRtkVYwRwkJ3UwcNBdWiUUsout8QbkV1Nm1XgK3YgcKhrK5eyCFEq5njD+XwO9fUEsFIB2eFRbO7t5srz83UuNcB6pWp1qXGaVqGn3AevITF4FOtus6Nzk4ZnvvVD9Hf3S5cQkARASpbljMFQbUIoi8sEvNwkF1ZCmaDZ3dFa9VOGUZyLJl1S/l6OWoKfJL1KVrfH5SfRCSo3hFCI8irsVZYtei6OqdFJOJry2LFrK0587xto0RtgMjSXspxspYpyqhCr7Ll0GVUuqg4H+SKBWZIyPX4NL46n8aNjBjxPMFjYjmG+YkNnIKIknEhBOUn1MMCEo00oke1NkjGVcjms6+xCa2Mz2WwYi5QyOd6brZBXuVOGw6TM9RFkWxF0uDBGtjtyjs8zmcJ8yaR095BBZlDOZZFsjCDPZ7SuvQlX3HA9Bjoa8OjTL+An/2MUoQYbHmlMY11XF+YYdLZ3d6hUmbnpabicXvjJ9uTaFuMxsrUCn2dJ+WsZlRw6d+whG2tAbOi0OhGXbtkuH8Fqag7Db5D5jMQQdDcRcFOoGCJvA5xTTWp/1e11qoYSnApIck6Gghrvh9dMiTwzluAcGUNrayvvPYKJ0Wn+LKjmiMtDgPPbkR0Zw+nXEhy7LGLz57Bx00Zks50YGR/D2eOHMXrmJPq3nkbj9rvgab0FDVf8Oh52dePxr/45BotJRK95GMVYlgyryjXjtNSM5G6JC+5lHFgv8MM6/981Wx5FJFZ1WLAtKyarZd6SK4YADKcLr0NXSeYqMVWr1GqD9VpLQf2tsSX72rQG483MdfTVEnBpP6t2Kmgsu6XViKNtyTzHuLyfe+33l4vEV7lSGKglmOkuqz2m6Cm3By4++IXj+2A+8y/44F2b0bS+FT979ghOD3NiUALIPpFhr2KW0fLwq6/jXR++G5vWN+LVeJKypgo3J3+dL4Ku5h0qMzqRGlMlOB63VMJLK6oAApoHnpD4wzfAV4qrjG2RgTofunhYaeCEdJZVvoy94kSazMluL+KqXetgzs/BQWkXvbbfMkBUdFvqDk3VccBWrKpGphJ26pp6MDF8BunYFPb8p934xZNH4bYLUDuQZoRULp2GXe1FSL2hbKZrZF1hPcxozHt1+xQQVsm20ly0eVNq81xkjrryTckWsmqR+CgF/VwMcuomzg8iXytFSpRkESeG38Ad/7kZzuosnOM62lu3KIASN82KrawaZag6NWkmm65Q1qTx9MlpygtKbA/HwSP1lAUsJMWOmsDltqFiiieWSzW2FSaTzeQQidQRLMO8jxIWxHpneITsLoe+gXXo6e7CQnwRObLHQl4OVByqn6QMXh0ZkJPs0EnmOjx1DjMLSZydKqPOP4eMpEzMkwExWMSSacxTZg70d+O9H+pE5JnXsO/wcST1DkyHCFpb2hCoi+D4GyK1q6q3oysU4LPgWPD3pMawxO+Lx3y0pRXt6zchETtHMp5AWgqzQ1EY2TTGzx3H2WPjCBt1ZIJhNPX3oX1dN7zRCDR3iyp9sqyPHFY2Nxl2gSBYLlsOsaXJCaTi0yrhdMvGfszNTKJA9unjLO9rroMzVYHp24S7PnELZehZBrG/RylRwY4bdmFT81akh1swODOMoUPHkDw7ir5bqAY2PYLwlgfx0Id1/PCrn8PrXCf1W97OADahAKPC+eMSr1SqibxKMdDWrMFlVbR8uFZbeoaVR1XVltwcVtskrXS1simAsimWZasdzMl+nFP2UnWrVEpYVqlqqtw/a9tcr+17aUpKLqmrS5Xm4GJ5WCvdKs6zmcFajysFWLpW67y71p1n+UP1S1SEm2tbX2C5/Ma0mFmtRbVgntRLVUyra4pELDsXXTURw+DXvoSPXNWFnbduwcJcEi8fmcUw2UVLoJEPqKqsdakz8NTPpvDQR924487NeO2Vn1Py+dAY6MWmti7VYCJXoOSTTekyX+/IEuwSlHVRNAd7UHVSTpWkw7STf1sFnJqd0gXSoYbTS8+hShkpXuI+04Ym0vrd163H4P6DaPW1ItDVp7LUpTZL+iEaDsviQ6uIRSw1Kd87FGlEM5nHG/v34sb3fBA3ve1qDD4Zp2TqIcvLKTAUG5oMI3heO4GKhyzQ2AivzUvs9qpTQJdI3EIDcg4yUCfg47VJZnfJyCGbT6tn5CG4eAhubn9AlU1UUlkCqA/JQg7+Nhfue/v1GNr3LJrNBnjDYhWdVdnk0iwgaPpRZCTM8E+9I4rjJ8ZxgpFfI4sQUCmVKNPsBhoaHWRBVcxTito5LiDAC3iK77v4ICUSi5RZHjSSAeczVaSSDASzM8gwWHS2t6B/Qz8crc2YmJpGJkNZVrVcP1VHHi52SXPoIpD4CZzzsYRymM3xc4oFzosir4evKRMoxeN9Y1czfnnP1Yi6G/GVZ97ApFHBn94ZRSZLWTW3AJ+MB8FOkzpEcZytFIgrJU4Zyn7Otd5NO1SB/Fx8Ch4GDjuZpUnGOD04ifjwDLRsBa29fdhx/+1wD/RSunvUvqTGoKUkvNikcJGWzQJ/N0DW3gG36bSsCTZTlpoZlaxczeTRl6d0F1YnVjzibBrhs68PkR7n4G3swG18r/0/+Cz2P/1T3HDn2+Fd3w5fxI+ZiTlMTJ/F3NOPY0Mmhe6r3gX/wNtx138ykPv6F7FoJ8vduBvlxKQyeJSctpLJ65QciPPBCkvtz1YOy1byMC0LKWV6aFqecKubB6uETpt1a7pmGX7K2hVgEld7J8fBJYBVczCGttYVVfnFmTreihO9WCTL32H+/q/y7+DSBvpKlqyuKJx0ZMkKZy0lyUAoeRj8Ds8wovIheVTLKqv6X1doayhLkbKUEGhWtxFF+wxtuRWyXoNqY8l2WbLzzZrHqAyGoK5YU6iO7UIbS3D4Qsp18sT/+W+40zeP93zgXtLxWZwcnMKjLw2SKWlorA8wqutcbClkcjacG5nHPTc14b53DOCFJ85ictrGSd8Cn93JyZtAvjBHMCzCSfgvlwsqC7ylrld5S9n0EEw7aZoehNtXD5eXQOiRivqw8j3yqFIlH0pkdBVOmFse7MGWq7ch860DaN2+Bd6ePpTJUKpSPyXuEDVNr4q4ZRUy8mrSTJEPc/roUfg7Q+hctxUv/PgVyn0fwmRFMskMlVqRIoC1k0FuQ9Dnh082U+0hRvAQPI5GToh68m7p4ye1nmShulP5ZLkI3BFnkLKVoGGrIMeFaVLmqcBQcOPUmdN4+CNceFsMjHz3IHratiLosZPJkT2WrM3OohyxU1qKZvEw5P7vVw7j0HRCOT04pWuPctbg/YljkZsyKJVDqlLrE1grsLLbrMRFycvSqg6ECVx2l2X6lyLYZAmAeUorv5TttLaprkfSDLZA6S6SVvUQUAtHOsw4Cci6SpZM8tkl81J7aKiM72rBIFvJo1zg4g+4sGt7M9rrI3j+wFnMpotojzigEeik8YUzHEF9pB42ORXMLiLJz0/NJhCM1qPn6juQWxghoyKo8HpDviYkFybIhk9g5tg8ok29uOrtD8HXs4nBzM41UbaSmQ1t5RBKWWQ7rL6USmyUOdeqtX6fHBknJa9k2Ycb4KxvgauhA46GNuU4IVpSXluU7P/+AXS3b8IxBsLB0WNoqA8j2lwPTyCgciHLlH7xsVOcD/MIMPi5u+9Bpz+FsV98AcnWm+CMNBH7Cqq8yiYuabWD/RUr45UmtOrLWNlQUr7rNQBT3ELlWdkVOBEC4eFzDRCx5KxJDDGDcrCjmJWUO9o4D6E22p1abfOI99QWDSrba3kv2aAvk+Hqyvuqurx5Zl1T7T/idlLKFpye0DeXAItwrv0aWdEFgAXTtny2qZoMEAjEfrZo2vH6dB4pKYQWh0vJgpd2TGrPhdTQsIoodbVEzZrrZo3I2Wq91pY69a7pLW5dqCC5yCYn39Oh2KMTHtLlE9/4W3QceQ4f/ZOP8iYISpNzePbQBJ4+OIq6xkaCTb3aSyqq5M4cZsQyuZDCnkduQchfwsGfj8CWNVEk6JaKpOlkGMJ6xGbE4wkhFGhCkNRfJd0ZGcWu5B7EpsUhR7acnD6nh+9NSSNlBpwEctrU1pHFu37jbsy9fBTO0wW03nU1DE9ZsUJZXCINbO6Q1dGllEGllFalFZpJpoQIEvMLOD31MnY9ci0S00WcenEMve09ikGJBY7T4ed6JBCRpTmddmXFIUfENpeY+/GZVBN8JjEph2VUk3ZRHjXmAmxuRngp8ZC9t4D4uktdmkMSRM+idaCMd/3ZzTj7la+i1Yiir3Uz4pIUm8vxWsXDKK8aaoiTlqZXkE1l8OVXTmE6R5lJ1uGVMhpdq/WaM5QEFGvhJFlTgcAoHbddDrGdcapEWAlQ4mdligME2bJ4o4ujhFgkp1JpAkdR/U5nezO8Pi+ZLz8zm1Et64uFgipehnJd4EKgXJY5XuGzy+aLSCSz1tYBgbOcSao9G2n2un2gjuCq49s/PILByTz6N9WRDVNWh6NwBUPIlGIokqllk7y2eAoDu29AtMGH/PSYApmyR55hAecGhzF+apTBIYyrbrkDdWRYFSs5SdWkWo1cbaqecflkS6s1pFIL0LbqUN5Qm8+aqj+rWPV14q1Wtf4tnXHEMNLB9WcyeLjq/GhsrMPJva/i3Ng5tPb0ooE0I9gYJDFwIb2QwQIZrDfIxdy8Dr7W7XCVp3HkwPfh7L5fJQ6LeWOBc9mhm8spSis+7Cv/tpyhVqUtLXW8USaAhnJQdRGgvARWP69Relj6+Q3p/O2UdnNSYGIT6WfJQUkNkbpH+X2xxm6LBNUcMU0LaxRpEcDSzTUupsu1xCuA9a1VgAUBrNAFgIWVWj7lmkkaK8BVJBi9PpVBSXMq9JRWU2V9JWnDtFknf9YmG/+2WV2PrT18m5VRa6XWLiehassNP2oJqqqwtqQmrau5A3PPPwbXE/+A3/jUr6CzP4LYoSPIlzz41s9P4/RMCr2dbQhzIBKc+Bk5Xhb3x3wB+48ncce1jdjzy1dg7vQUjh2nrJKTG/LVihSmEhQcZCZesqfG+ib+nvT5cxNgdBRLVVVtLlFH9tDEbljllMg9C+gWncrC5q5HWjFwdT9Of/FRdO/YTra0SdnPSBavHNVr4TaYDb1qX07PEaxKIrtMywsoGOaC8GDq8GvQQ1nsvPdGnD40hvi5MqLhetXYwUnAC3p8/P0yZmzSG8/DhybNGUiDqlmVRCsbDlKaE6AUsLkIlh4Cre5RtXVOsjWf12dFP5sbuZkFzHjn8f4/vxHe4ZdQPjyHjXveTukYQSY+T9Yhko5SWGx7BRQIRC57BSMMEJ9//RxBys7r8SrGq4pbxS5E/Lb4/D3SXEK6MpF15EWGcAEKqDj5Hg5nrf1ZyZJ7cuQuSa/Sk0/2CeN8dtNzMcRmxxGNRNHS0qSAN8/AUmTwKZRKtTpSm1oQLpsY9TnEgBQFMtZktoSkpCTw84xkkt/jPCLT2r6+FQ0uD57cew5Dc0W0NQbQ0RaBg/NFSkQquTLmx2fgcNswcO0ezpsJVJLzalHJvtfs9CBmzs4gfS6BjduuR/c110Pj85D5raqA7OI2oKkaxpXjfPvycbyp6SugsKoTTU3GWGtuaQ9JAsBS/pDk75EclKkAggzGgaINRw7tV46vwWBVdY1yEHhtFTtS8/NIp4YQYsD1NF+HSITyf+IFDI0nEeq5BblSQjUHsa3OqbxI3d5aMKu1N4M1V8XWWuRdgBQqLAc4BK0AQctnk5Qjyx1U8q1sNZ8rXbP+b7kSG2rOtxOwPB6nSgPVl12IazijrU6VuDxg/erFAMsqPtZqNUb8wEJCAZb0X3tjIoWEzQW3NBygfnDaq5RavHgHb0qzkFgmc1X616haJqtJguCazTBrdjEXnkhotVQJs7bRb29qRGrkOFKf/WO85x1bcP0H3obZ/fvgKRI0Z/L40b4hVY6wqYt02OHDYi6jclokv0jk3mKRi2YkjmvuHMBt92zA8QODGBlKcoCFDfgUWIm/dMDToDaFDSNH0OJiJSNRqRQiRwnMPo+fF15BwSxAZyhzE3Ry8RlsvqoF9338Now/+TNoJ+bQffstsPuhykOqspgDZGwtO1Bt6Oa4pWHGp+HIOdQ4SLqE5E6Fgs3QUlUce/459N84gK7rt2HfcydURU9ruFF1OC4I2yGlaC2Tk5U15Ew5ts5LwxVOFDdcTj8Xvp9/U65K9Ksy6hGw7CEyM7sLXs4guw9IJsoYiY/h4U9dje6mScw+dgA9ffcivG6ATGaeL6C0NCqqIavkdynrD/7bR6q798wYHj+bZWS1UYo6LK8j6VoszMJm1fs5+P0Gjo9IwExZyqIMlcxo1uS/QzFW6VZk+cvrqiOaXdUYSvusEr+fSKUwMzOnWFd9XR0lZFC5RVSlBRnBWQBJNsldskfmtE5sJbFY9iUFKAv8f6pkI1jKvOO1Upv0tQWhMZA9Q/Y6nwJuvq4LzfVeflYBmcUU0nOLaBvYiHB7O/ILQ6pjkMsXhFkocb4MYm5sDlF7FFtvvhueaAPZgtWaSqs1vhCwkpwyq67WVlv8NqtV3lI3mFWAsJJwXTver50+qV6WZs1tUNharbmIgLQvGsLC1AiGTw4hSqlLKYMomZeceJb53ETa6o4UGro2wxa6Cn5jEZOHHsNi9Dp4GACqDG422GrXsFoS6ssycTWYaSojwFQb9xKc/FwrEdLbiMuGMEErQCD1SrNYCSDKJr3WwckynFoGHtmfllZu4snfTiAVhqWp88SaZZQkWurmBRnk6jouAljBGmCFL2RYK8XG6hdFEvICSpwUx6eSSNsDaAs6+OVEO//uDXrVV6vPhTqPg+zFoqCy7Kvmis2EyuOqnS7qqyqyV1NQ2QOzufwIEdFHvvwn2O5axC996kOoznIynZqHEWzFjw6cxP6jowg5CFjd7Xw/p0rIK5e5mPOUHXJiUyri5bFFNDECX3PPNbj63gGcOXgck2MZLpyAOjnxuPggQpLlXq+adgq2u6ULi7j8aWUEggE1eUT/W5vIHE9O9OAWO975WwSjiTGknnmDINiAtl07KItz1gCKN7o/AjPUjgqZhy6AlZiCTS1UU9W5iSu3w01A4UJJjEzjxN5fYNdD16OtpxVvUGKW8qYCUNmQlc3Tss1QXt4yRWw2J8HIB58rCK/kWHG85DTGpYpnKf9cUK6efr+PDz2PxbkFzOUW8Lb/vhM7NuSw+KWfUs7uRtOtt6KaLBBM4zAJ+IYkfkmyoyqP0pUra8Ct4QdHzuLAbBkhPlevx6N8ojTJlVB5cvblvBqfmwwszGuibJNcq3yhyr/LqmJf5qVut+KnstuWSn3pG6BO1ezqeL/Cz8vmClhYiCOeiPP6KYnqouq1JbJmVesqzgNirUum5pXyFnHqpOyRGsqSeHEJC2awMsUGh9cZCAfQ22xD6v/S9p5Rlp3XdeC+4eVUOXZ3daO7gY5AIxGJCCTABEskRUocRdPiaDSSl6TlGXuCJI/Hi8umRz9mPBpJlmRTlMVRsEgqMImZBAmABEBEAp1z5fxyfvfeOft89756BYDRayj16kZ3Vb0bvu98+5yzz97yc5+/uIU90wncKsiLLbCV+WV0ap6g4/sQT/fQ3lrW0BobKqCyuIb1+Q001ks4cds9mDh6q9brmG6ytGHMhU0Zw0Bmd0CdUztHoQdfFCGMxpzf1yPeGabVP5IYLajc6xgdMQoNcCZQQUMujSlBfFefexZ1SasLss/iclCkCwVBiS0UN2uyJuqIZSUoTN6BVEZQ+cpLOCf3lz36MLqtKqtqO5fyqsBlDzgQGpQUaD0qxQxErqMgvw9p4BIkTSs329QpNSDxsPAtBSe90OU5CH1jWGJkh5DaaPtGTUqIsFwUZWKvCVj4EQKWFbFa9RvlZJPFrNPSsvhWSy2MpnO4aZhBKo69GQlcGRdT6STGs0mMyn+PyyYdkf/mguJDUDYv83SmEo7dv6idQLXDxaJ2el6ge+Ubf4fgi3+Jd//T9+DGW49g5StfkWsZRTs7ii88fRqXrq9hPJXA/qlpCXIWtss1Q0+gFx9n7eT/6u0OnnxmCXvzAe5++C7c+9CNuL5wFQsLW7LBx5FPDyNLW3RJTVh3Sgtk9WSjJZOy8em0HFhqaJCyzSndba0hdpOD9/3a7eitvoBgOYOcPYlypYzRA9MSsCjg7Wi6QivXXmcbaNeRkIBvs6XPF0zEQ1MK27DgE8MTyA/PYvHxFzB/9UXc8ytvxuixA3jhpbNAnbUpM2jO9osjKDYdp1Y6xesktUr4allPvkuCiqJMaxPyb6lhCQCyedtFbEo610n7eOuH7sFN0wvY/ouPyUFzMyYfebcZ1akV1VuvV5PA4gRG14iMctYhrJhC+z9/4QrObzUwnktJcE/qRiTKoByx6u+HYoxslBQEFY1JuptLpuFw2LndRrUt6KfX1rXkhWiM75xpL58vO6JsFNAJiGlUT76uVCxjfnFREdX0xCTS2bSisB6twno9JRMrSnMdTeeblJSutxHvenqqN2kN1unBTTuYmmIa6OHslSVcv1bEkYMzmB5Jqot0Sq517sQRdForaG5sS7DNoSoH8+byCpbOLsjBmcFN9z2E2MikbjVLg7WrzSRVHCBqJK+InT5rJw0crGNpt52qBNZOgDKilDs+Wqzn+E7Ia6KJBmvE4TOz5Z1SILGzuYCXz76MmWmj1BGT9LxAFQcJWA05eGzJBMZvmIOdPYxYZwsLL38Nxcm7VXSSZZZde9xUZvohMxwu0fQ+zpEe1yAryghlZRFQHZbP2gnvR1tiEpDaHjlfliJPrz/9F5owh67nLAPsFZSYVR8FJ0wVA0S+WLvT1O8dsD7wegHL1g9xjM+EfFhHIrRH2QZfTk3PxtHZYRwYkgCVjknwj6vSZDJOPzo52SUtGZYNNSSnRT7BTgE/20NbfnX4UgJTDwrCFDAamrRDHVZaIiU6G7jyZx/CHZPDePRXfhLb51/A2jOXkJ4+jJa8yM9/5SVcXd1CgcPAGVq4+6oN3paFTMdhaIeiowFkWz73ua9dxIgs9lsefhhvf999KFWvYvH6AvwO06Ys0vmEbKJAnWJgpXUWrivBolvjfF9H7rkEZ7yD42+axLv++1tQ/fbn0TgTw+G3/TzK186hvjSPuf2H0LRrahLgC7qzm1V01xfhry3C2tiUNK+hiJOGEEw3uWD19mWDpadlA+09hGvfeB6Xvv047nrXnbjv3Y9is1jF6tI1eJKmJNs9ZQzb2i1Lq9O1ku5lkyckDebgtvy/IERBl1VJr0pr2GivIP/WvXj7/3QvpmrfQv3jX5LN/0YU3vxO+PJ+nC1BEEUJ3lWac7QNrO+Z96Ake1mo1AH76LevYVF+n5TgHqdGvay4eMwELM6r6fSDFuEdvSfOVE6OsBs3jBSVFyQw1iUItFs91AQpUe6GyExVQhiAvJ7avkc/OwhZ1Qxm1Iqq1WoYkp+VyacEPbVlPXYVtXuWSTuYWvJwZOGap71Dm7J2Q67P1kCSjLFLPKx+gM+d3kZhLIMTB/JYW1lHenYWs3umBF0taTE/LvdY2d7C6sICSqurOHr0dkwdf4McEClDUHJtbX6oFDBTN8fsftuKUj9jFGoeyoAGlRWp6RrW946YwI6qHe/NdUI6JtVXY4aO2Wt3lRIznEviwosvwE7a2Lt3RIURYwIemrUKStuSsqdk783k4RZO6kFWXnwKl4o2xg/eB69d1rqsFVGHwkvUwGUbE1oGKxbLVbqa6IqBy2L9iujYiKLTJYtd0Y6ssy7RVahs44Vu2oaqsEOD8kNPzj2jBXPYqYem31d3sezvYukq66LTabQTA13CCGEN7zy4sJOgBhDmriy2pZt1ucie1lQacnHTY0kd3NQ6kDwYutCQLKZdAo3Etua/KZoZ8OvoRCTBqtm2VFTNtl+VfvbnCwUpSK678fSXUPuHj+Ghn3w7Tt51BPNf+JyctlXk5/br0/nMY9/BSqkmp3hcU7V0NiEblHIdqtwlaUhPUVZPEEi6C6xI0Prq4xfRFGR15OQRPPK+e7H3QAzl7Q3tRCXlej1JKzr1QM06Y6ghLvcdT8lGmAX23TeE+3/qBA6/IYtzf/WfEbzUwO3v+mfyNDaw+SwdU8rIjexT/kmjsi1IrKw6Wd3tJnrFClAuq/U4a3ixXtywd+NZlV4JyKOSBZg5fAQzcydRev4sLn/tM8gIgr3z59+JmVsPyr3R9qpphkypl85uLPhc5fk6SeO3xyKyIJaqpAilTgmJg3G8+TfegQcfKKD7+EfhPHkWE/sfRvKOR+SZSVAWVOhUyTnjMHAZsaanm64buqxwLVBwb3F9E3/xnXlUJKCMS4qckMOIJ2Rc0bOlv2tnSdcKx1KSSAjyJSM/JwcKFRuGh4fUjIMIqSPXT30s1qY68rsXCb0RpZHywW6gpHlMh4PQa7FcqWFjaxM5QXgTo2PaKa01muZkJ7VG1mbKlucpaXCZarHqnpJETRCX2yGpNcCe8WEk5PpeuraJzVoJB0cddfWZPXkKKctBVQ4d8q56cvhtX1/G0pV5+XdL1t8jyE0e1g1EQMW5PAZ12zH6cOykuo7bl/7uByvLxi6RYutV87RRJNOuYSCpbFcOpDhNC+CRbMx9EpKPSSiwwgHi2tJVXFm6gn03jMtyIIIU9C/p8PLyppKM2VVMTd4KJzOM5uZzuHZhETj6Drh+s++QY4dNAXXLDqOWFsot40nKoEX+lPofqACgr52+rvpeQn6x4x6obFAn8AfI32FdbCBYKcKS+9snCCuXSpjyUIi8rNedO94JWERYiddHWIyMjnH51DKao+xuS+2SeipJa/dkgci/kbQ3lBtVKQyeBrFwKttS3eZA1SR50rLNbKv6oy8RW9k0KEmwqTGY8KJYbFVY6od9Afk0QQqJTAvrn/4w8vNLePSX3ofRWAXPfOZxQUVJTB3Zry/wk0+dwXaxhrS8ZIqCDUtq15WH2pLTW6lOnbbCdO0kEcl0zcZ47OWruPDYk5iZnMVdb7kFDz5yGJk9jgS8LPKj7MC4GN7nYvbgCA7eMYQb3z6E4z8+h337HbRe/BbOffgTmF7I4OBP/DSsmRHYgvK6m/NYXFmTFKaJifGcPEcX7UZPi86kMXRLJUEEAtf9jmpqeeyUOPG++CElg5nGaYAQVDJ38h5YJRuvfPbTWD/3BPYdm8CtP/YA9t12HKnRYQGAEijyHGd0NfC4mZTqeOmc5KRA91uGcfPP3oM3vvsAUpc+hdIn/gwjjQImTr0TsRO3yaaTxVItwxbU0msW4dcbOqBMlpAGDaY7fOeyufNZB09eWMInLsmib4ZdLpXotfTUZLCiyzO7mZlUTm3HdDP6hgENbmT52qFMBvsmJzFWyCoXjkvaI4G3QyOGtqFC0GTU/Fit8/GXy3Y5DVQtWtu3sbW+rfXJcTmtuYZ6gthYjOem8WNywNA9R9ZxXdAs5XRYDK63BfXGM8gIEtkzmlJm/KX5GmazMRw7MoXpw4Laq2uSUq0hlRsRhF7C8uUllJeqOHb8ZszcdK8qXHg0P3Wo8BrW7xQomI4nmdCeGYQ1fgVeMNB9Cz01A+MIboW1pMh0JQg3vBo29CwlGlNhg4ebJ5/DGhHviSx67cx3V3H62VcwPj6NkRzJvdAAU92SlN6tYWpmFOnJG2ElxmFVV7B69kXUpm5DIjcu67Gp9SkiKT5/lmeMI7NvaCphphN1K7kG2vJS+BktPlcJD+RlNhi0erRKs9DfvZYhM0WMeE85/YGmjU35r8NDw8gnw3E1KxqycbQTrwdMENqQhSl1IIi822kwYP21+/pePq9v8WPtktwLEAzA2yAcjnT6UTIsrtPMJzB/n5R0cdjKoSabYEoQVoUaR82uoQvwNYXi9Sojn5YIXF7GxsIiZnMxjGaBpQtXcebSBmL5LDbXSjoCkiMhR+6x0ZUNQrdnQS9J11WVSTM1vjMVzptPS+7cbnfUbv6zp4t4+if/HX79p27Cj/+3b8Txm0/AeuMkmt1lWWiS05ZYJynLAt5E+/o5XP+TMyi9tIp0bww3HroVcz/2VnSyafjlopwwVWRyecSTOXzqia8hOeHg8MxheBWadJaQk4XudixcXF/Hs9dXcOTwAdx7m6TNnD3jgDI5RRxlseMqVEg6gVPI4NA7fx4TB45j8ZnP4sL//XuwbxjG7L334NZH3ygL8UFNBZqSFtUqLU0dFM0mJfVJSTBrLKP4wh/j+t88jcnUXuy5473ozhyRa5YTuSmnbL2KoFWB36zJSqKjNJTlTZJnjwGGDt9UVvWT8rw6eHppXQ02LErGVKtwY4JY3IKZwLI9HcxOSNCkztNcNiMnb1epBo1uW70dydHSg01QE2tbI/lh3CBBamV9C8uScpUknWm1mrImWoKQW5LexlWuhV1AN6wLpViXk2ur1Zs4c+6yHAgNHNi3T8/p7mYHvZ6rw/Js9OQl7WjJAcFiP+tirVZNnXqmx3KYHprF1NQYXri6ojXQh2M364FaKleQtIf10K1tl1BaLmM0nsPk3iMIMuPoZmzE5Z79rjFXsFSCuRPqkruKkFwtmchzY20vVPa0rLjWbILIs8DyQjTyOnbvEmyDblnVSuiZoHLPsom4cQmLtC0hz2Ty4HGMjH0JG5vLmNl7VIIpn1EbQbyDWlUOv6ZgvvoCkJ5DsnBQ1oSN4pWnMDr9c/LOw8K6HQaasPZoR7PDlqmtMc3raUff78sdByH3TB2sIqkp/hRerx30UZUdIPwaNtBsNS0mIg2sV49c+99H1cp6zWjOD2rr+pqCmPE5803aGJhRGhsRS9XX4Ub192Ak5YHCLoO8kAmB5utyQlbbhgEsSbo5lULhPupdW1sNtDYbGr075W2sCnpZKMlibDWQu3IFRw9OYzKfUPIh57S4iTYlvRnL5mRRO2i7pt1Muymtc6ihJoMZyZaScsoC2rZa+N8/cR5//PHz+PfvvQGFyRiaPlWObXVQ9ivytfUukn4MqewEbr75UYwd2ofU2LhswjoSdYHCsgGzLNLL5tpz8Ca4r2zho5/6Bt75YAW3HTimYzHkbKXGxyXt6uJL17+Jz1w5jX9bWcMdDzwgESYNT9IlW77foXqEdtLY8pdFK4glfedxQQCHcfDl09g8/RTWPvkSFqyvIZ52kB8e0Xm4JDeyLFhfNmVdEEJNUEG8nsDQ2BxuuOX9iM8dRjc7pKeXV1uXFLRlglRNgjcXNmcUOeDNs9BKmDqioCQ6maTlZ69vbuPJxS3ZOPL84j1UOwGKjaauA0ocj6j3oPwcQd895gq5HNIcBXJN4ZxDxT51vuRgsSWAbAma47ugacX+6XFMSZrGdG99awNb20WVo2lIwGxIQE4n0xLYU1qfskJ6TDKdkefTwqWrC4pa9u6dlQDZQXuLlBZPFTyZkhXYHS3J30lgpGJGUQ7IK6vbODQ9hEIypprzmxVJgchx60pKXKnATQ2h0i7q0HK7FRNUPaPyyRieUDsqkNaSiGpTgkhiSS24m5PZ0TJ0oJ1Pul/bKhlDMw3axjqhkujOmO4gadr8PdVOScnhQeaQGU8be3ohsn2SYqpoqTWak53BxOQMVlfPodW+ScsXNn1E5evaHRedtuy/xpK88nXkxiYwOpxDa+GCUQbVwBQy7vtBKthFKeoF1o7wexjQnLAbGuy+ZC1FMI30QnJ4f6w4MEmfCdyhXd8AZWoQEAXfxURVAr4VKU79UAHLGtDNiT7XC8XjSQzlC/QCoyftRDKlSho1N8NZKfqmJSX0jgsC2CPBpsXUsNXT/N/QVxz9Xg5OJqyeDjIXZXNVBZmUNxq4UiS8bCF2sYSsbKTxoZQyydukB/hVrGyWZCEm9SRucNBY/o0sdtIneuxCwXQ/3LijDOsheWhFeXHjsTTu2vMW5OSU3li5gp4rGy9bQIZ1AEkTXTmt8+OTcGSDNeX09+ttObFkkWY6yvVygizqMWo2dfFTb3oIH/77T+LFb78iSOqkzibCb+iruX3vHP6v974HT73wHdQlMpYFtaT2TAtMl1NbPofQm+eycpuYIsimpDKnFc8jede9mD16CyYuLaAmC6/aXFRnZNndqg3O8SlqXKVlISdPTSE7tgfO0CTaiQya8gwSgkZi5KiRUS1fDypbSlCwOvzvXriwzMlKZ2pfDhdfEFUhFeDLl1dwrdRC0qLCRIJO9Gi02oJWJbCk2xrY2PnJB0m537TO99G2a0iCMYeAWX/qSRBpcwpBgiMXuKeze0XdD3FBU8Py/ZmpGTmERrEuqLUov9h1rQsapBVWUtPNlBb51cVZ3nlHVsPZK/NyggeYllSTjtNFT66J9l6cY5N1kBO0zs6xumDLobhdbWFtu4I0meSCVBpduZo4WcRNNSdlh7Vbr6Oyti0BSrKBwzOSRsrPWD6LlYtn0KxsqycjkWQ8TRHELNJycGQkjc8VxlT9weYsq2+2ckzeS6ynZA1TseGcYd+VeccpPVJOiPumnqVmsILa4kmWC+TzLGOo4dgteU9JxHNjOHLkCJYXXkat1MDYqBx8BADychKCsj1Bf3a3gV7tCpAcQ05QrXWxogPYrtYEDbKyrQHVKytyvtmRDbb65hBBqDFjvaYO5/f9Q006bLTzgr6SFoOVF5jCWTSh91rR0+B7CAQGPxjC0oKZH7zGoavve+MbhUIjTBe2RPvOsYZ3pVmqcjPMDcjBhrFMXHkyDMhLNi2N5FRQopycSrJp45RzlZM1SA+riNvC1XXZnB5K8jCW5BQcWfaQjnsojBQwnE3JAqzqKAOdeacKaUn9Cpqjs+3faLuSmnh9xQmHTi5U3nQIvWWT0zVGglZhLo+hvXIK7rONLIvW4DwkEil52MQcDfgSDBOFfRJcZCH15EwLZOEnZIFLOpfeu1dSlbM4dLCA3/zl9+D6i89jc3kJzsG0LCDZuIUC7OE0DsX249AddwraYpesrSqSRCS+sqYdBZs8VVVpVZAdx2jYtew1JQ2TEzt+6z6M3HoQIxLIVL203VJXGe1UcbG4hi7iyT21BBFY7TqcWlMWc9gap3t02/hMElUIVDF8GT9uJuddT9PLNs0b5L444vSlS6vyTGwMJW1trgzLc2zK82m0G0pVKK8VBQVZGBF0O1boYiRFK7gO3VSRJSdI0vhYJo1mNo6aBE6bIzgcTSV5VNLGZrMu6W1V+TqsVY1nJfBKgMlLMKg26poCNtpNdCToZeT9pVjkpot1Oo+mBM3zl+cV2VMxltQZ+XFqnsq6ViqdknOFig4dNctoylrbqvBdOqouGs9JQJH7anGgm9jSa6K1Xtda0NhEHuN7h/DyN5/En/75F3Dm/KYchF2t95BiEsizowEskdzI6CjmZvfjxmOTuPGmIxiX4JufmERCghkkiENTREcRbd+oxbZ2FFEiwiX3kzwX7gMaBbdrJaxdu4Ty6ppqoW0Xy3Lg5mXtj2FWDohA0BYRa3aCw+wt7bQWMjEkUjkdtEdjWwJWQZcG10uP8jeO1S+G25F4n23tDEH3HXTC+cIwfWX2ExJXdtBRiM60s2x8x0JVW+u1pjShVwRex/vQWNc73zMc/XAp4aDuc6TlbiZXQha7b2YP7VDP2UhzKmtMqaOWaY+7GmV9zJCqxPoIAWO1g3IvHN/hdVOTfGQUmZk5vPLk07hwZQvT0xxCjqMrwelakfAYOJTJ4dDsFCplOYnlGph+rGxvY/9sQQvBKVncybYELapuahVXFnk8rhIncd/TNnuXxUCvi0ZpXqWYOz1ZWLJpeR2xpLz00Ryc4SwsyouweUDliLaj/BAGEEsCQMBxELleHBREVrbgTu9DdtRFs+QJHM/LphjVoO7l02jFKPcrQcIZgSUnoVPI6s9lV0i2sHy2/Jnzgnyenh/qhtmKFvmZQa2omkvsFtkSLH03JddAFQh2lNqSFlbkv80xZlMWmdSKnqk5qBa+oJWg05CTuK3O5gqSia1cX7tGlpVSsUAeNllJ99Y2t/CdjSoKLhVEHaUQJGKCeBxXx3yaipIlSEiauCgHxpKgF3LvsoKuhjmoLb/YJczmshI8kto1zDhxpOVd1uWaypLK68Edk0NNgkFPUn7eCxd3SpBXYiiOrAQuBrom5wnlHkik9B2z8NlwqFfbuHp9WfXMcoJU6/I8akSNLFRrlzKmhwPXR1ueB8sEZTkM6pUWxg+PSxB00JaARYzpCdLa2C6jJAGXrj6dSgzf/NQLcKsxvOmBN8k9xTAkBwxt5RlMOb5VFJR76cp1fOGxb+Oj/1BX8cb908M4emgfDt44h4NHb8TE7F7Mzu2Xd57su0ZFBfgd5QJ6gHLmLwPBSyi+8jT+y8f+Et/49kWsLVeRIICi8YSgy5HhAh65YxaJ+LCqb+TjsygJMmQddzhWkL+X9ygpvKo0MZDxnSdMcd3yos8PA1BYbw4iRqltlEVCMlVf+8mygj5vKgpCfcF3hvtBnSxrB0XqZGAU0H4AKeTXFXkJfsiAFQWrHYugMCcNwojJQqK9GypGnQbLNq1T9U11fKPwQMSTtiQtTAi6EnjeMkW+DmsesvHS8kIOHr8JT386hpcvXUMiux/ZuC1QPo4tQVtusQF3cQNjcoJNDGWwIEGMDsLrAo+nRpq62UhwTQs8r8om6JHqwGKoBCcd56BBGxU97S46Lm22fCUCdlgji+XhjaeRkiDFcXSPKSQF5rjpmav3jNNuoukYQ9JuCXaVzjlH4MeasvmrkkqeQG6fbISkxBlqtft0BgkE5nfhSYpBGjpb49SApxQHbcqZNATyNawVeRyIYRGT9kzd8DBgydW2DV2vyyHlukowWyGx1e8Z5rfO1LJm5HtRZ1iClqSAHsdbmlrUJylRa3vKgeqZGmNgahjUFY8JBMoKanqx2JLn3UZOUktO4NOppa68qxgKiSHk5OuHJQBXJQCyw9cWdLzOtEuCAXXP03KvBUEYNJPIJuM6N8iB6Jika7bjhM0bdqs6ysHiGuuqXpckfD3ToQ50+l/Qb9rUIlkTs+RedIqiR5t7umR3cXlxFQfnZpW07Elq1OIANyMylQpiRNuca4QWysvy3Lty0Nywb0wZ47VaSxUuWq0traMl7Rwmxw6iVQzwtne8BXtv2I/EeC7ccCad0tOOirJyOLfLdVw9fwkf/eKzeOLcJXzq9CL+8sWrup/3yXXfe3gKH/pffgN777vfTAWQxsD3ZHkD2lKcYkjLZ9fQXFnEf/zDj+A//M0zku6N4K4jx3DkwChmxkYF1aexsbSA1Y2LSI0EmLAzqMkh3xIUylWSlnXLwXm61jjy8tub11AtykE2fEiJxX7b072gjamQw2aFPgpBKP4YYCez8qwdlWANSoG/Q0WIngdVSFjOGPQ5DPO+SBkveHWTIdiRnHodrdBd//O83QFrJzG1/N0/MYJ0Yb7tB/auiOzDzBuZafRQPoYAXW+gF15kJP3lhYINgSpekps1JChjrGNcoGtdM2TMjojfc7H/yG3ITB/AUy9fwA1TeUxI8LgiL5/T+ZVaB8sctpUNMDMxhm2SEbuCtBqCsjY3cMPstG4w1rNYmG/7dQmOJITGVaKkK4GFCgyssrdZVqDHns60xZV0aHGUpF4SNJVCMpVB160JQGOKFle9KOoetd0c7BpHZgQ5dutaeG3LyeZ1soh7xunZtRIaMTwdAk2qU0xAEojcf5wHgG9OHUJ11o1U/5p1Vp9s0J45lSQNI02CDQrK/ahooxcHszjWOhh8LE04LHWAtrUOFtYcAsqzSAoUtLX9TjdvtU8LOqpKQdqKp15qlm4YKrsyLXHC/95sdLWe5ri+FrLJxE6lc6o4ymBAxEzvPWICRTBEMh1fu3O0p6cufrVR1CCapAYju5g0EY3F9RBj55Bu0NwIrKVxBrGi79/Y3DPmkpqifTV24tg4CYmNErlUhYI8sYagqVKjKZt4E/vGxhVdt3X20LTJSbuoEGXo0LqHjVoNw4LGbr9lPzI5G1tb1JfvSYCSz1/25SAUJJx25aDMIXtwUg4NF931VUlfm/Ij4kphoCSOLe+E0tTxTEEtyD70gX04e30Bj1+8jJfmN7Ah2cMr1+bl0BTEnRwzjaWeHw6Nd82hb0fMdtecLl4DZ596Bp/5yrN4x22H8YF3vgknThxCRlJUOZVVCLLbvANPffNz+NpzX5frnJbn3NF3mBUEPyT3b1MJg7QieYaVNUFoWyUk9tzCAQw0Qwa+UZawQnqBHXo2RKKcg4Ka1g4Y8XcGtwNYA+5YO45a3418YPXl93b78iDU2no9F61goDvh4lW0TfPB3XAYMxxgtIyBqhUGokC/rceJQsOEZkHNDxm+vrkJPwgnkvi9djTcaWpU2ub1jYMGWbhZOcqHUz2B8T3NihxBHnE5HSuVGiaPHMHRU7fj65+4gDNLZDmnMCrwvdW2lcqwVZdTcXUbM5MTmCwU1K3EFyS8Ui1jpE6T0SySEgRzyQyqrIGo+oKkNbILXMn/O5L68Ear8tfVNkdxfJX19RmAOhzr4ryYIIeOKXry0bC+wJPJob67BAJPvtDnnJ/vqIpF12khKU+BWliWIBMnzlQsIZ/V1Nk/dvS6TP0opsYuECWHSb6UQBJnbYlxieUkzxwIqiOmK6lj3gMlbznrR2TXC+WomSKy68MRm8Dwn4JQ0kc7tepLFjOtcbY4yMEifaLnGoJfzHDatYYjz0jiJLoUAWTnVr5niIai7AJyEo2aR2yHU02UJFtOQMizUzUGdjVjWcRycQ3ADGgc2Wh2WuqOQyJvQ4JSuUN9/KZx9JWAlY5R/SElqVlcycccqO3YnuFkOXwnjgrz0WFauXQdTxtzbPnHOHSf9sP03MamIAk6CuXzGb2Gcr2pqbYK6PEOGcg7MSytrAlqmcbRk6No9Vo6ldCT3ze2NgR5tTC6n1Zek/pse5tFdGpM0bc0iAZ2SgOhVy8qQlJ/Q3+TWsDIpQqSruXwvofegH+cFLQkKfbp4hamhsYwcny/ouyWoN9kwoUR7olp95wjMzEVxa6jeHkRKy++gPfccxt+4R89jPEjN6GRzMk1bCqniYHabSeQY7MjntYA6jcD5ajlkiMYGR2SdyGpsuzVnKyfretXsV7zMHHsbgm8La33eeFonG2bormqfobjQX7ID1PXZt8EFi9CWP6OHnuksB79zWANyurni7sBj6WyyKHunf45pjHHH6idvX7QCr5b0d36QZLDnVkoBijftDSVsxF+jfKy3B1fs103wm6MbEgOT5JFnO6aRct0gxP7vnwjNb5HJ2fxwFvvx1Nf/Ay+fmEND8lpODFsyYKPoVwFGoKKtiR/j8eKyrsZzaXk7zqotwOsFsuyeLICn0lvEITVzmOtU9bTjXI45PwRqNCbryR/2tqqYGJ8AhJXTFdD5ww8NVPgHfSssPvpOmHDoWt4NzHTgeQN24IY4+Qy8ZCUE71L0mLczNxl4iOMLxoMLUFmCRbUg2imvWfUSD1DtPT1ZXZComEI18PgH0TPOBwcN2xuZ0emBIbIOOgX2W8lKznQCcUWLeMYrIRdkx7q6U51Ac76uGY2jGM4jqBGajM5Enh7sQbYpGdtKC2nPT+r3ZHDptVBk8+KUjTkkTmOstRpEDps5RX5qS+hIK5Kqy7pHgeiOyobQwMQEpN9O6uF9gwNXqOVFBp5Ur6GKg3dHj+nrcGP6K0ugZAblfw7anS1ZR3Ob6/gYGoSQ4mCbHLWhMisN235YQmqFzcrSr945G1HMX5wDJ3LJVmDcSzKWlpe2pZ7q6lvZEwOlUBQVEKCWb3WlqfUQiKThc2h6pqkWILYWcOjK3g2V0BGUsvtjUUsLWzK2i4gdWgPZqfGcOzkHKxcTpVzAwmKVipmpGNUjkWev6DljufIs5WNuzyP2rkXJf07jAfefAKp6aTORrJjjJasj8S2fHZTa2f1nqAmCdZpSc/bzZas+x6mp4eQlYOd75N1rFZjDVcuzSPI34bx2XGdVtESjR/mR5G4HoI+pcEKBoQPBkQlItBh7YoD9oDKsvVd3OMH7AiDyPU92KVp/P3jzo9QdH+Nfw5TJ9vvS0FYLLDbBvSpSUcQKj1Yr5JLtsyMNy2H4haF5mxVANCpbt9XNq8lKQjlRW5901vxhrd+Dl/6xKdxcaWMufEYxmVhNJueFk/5sNYkOE2OAEMSsPjSKu0aNmXxjeYqmCkMa17fSGdQoqEoNbZkM/IlxyQticl18PBcKTZxzDKesl12ggKlDqsHosJ3z9SvjHaRrSqbRGrUdiJvrBczs5A0jOhMpOV7E7IoYtqtc7VmJsGiVETj6jySQyOw9owjyKTle2JwWoZI6KUcRUEsOrOmFXh+f9MikpwOgoETzQqVAPywluiYbouqCARhJ8gzi9IdaE8zIPlB+O5MhcFi7uWb+gXHMppy7d2uhX0jOaVwrMmmmaKgoW1myVTUzXEM2kxIequyL56+exI/fUG21UbNuMe4MSWMOmru6mKIrkN+YMilDDytpj7zUq2haqcZJ6GUBA5DK9vdMum6DtHL3w9J+tnp9rTmWRd0V5H3WiX9pVZVwmlaNv/8ygbmRi2kBLFTLYIZdS5Jvl4d5XKA/+aRY3j00ZMqVV2vN/Q6WoLqa+UGJvMHMJY7ygYqWvUyXBa+KIbIzVle1YC0VOzgO9cXUfYNgfLonlnMjaVQbjkY0mDdQLy8SYUgBCNycErwo0eikVbqKsKlqzrIs+qZOq9XLaF29hzi6TzGjpyCXa9i5dLzyNsFPRStzLA2DfLNMrYaFSyUa0jJmnespgZ+yiuNToyhl04IAk6omcrqwiVcqfYQO/4mHZtreN0dJBMqsQz0B82aiTTdB2b8HGvH5HhnM0cRzvqe/PNoRjgIpdV/+P+ZSOj+gJDqtczTYMfehzVN6jQpMcwxN+lG8NIyAcwJWbWDbVOFl6FCIXWfORVOyQoVjNOBWwutahXZuQP4iX/yizj7/Et49uK8pB57MUY/uSSw2fG03lRskDBXwshQAYV8GgVZgNsCkZe2NjGazciLdE3hN9PCdqVjtHlCZrgTngAXyk28RQOwSakYaNgBVAE/dla0ANwLc3VJS21JMyQQ9VzDNWP9qpeVoCuIMSOBtP6dl+EtyMaVwOtP5uHW5VmcuYTS5Wvo5fIYvu9mFO44hfgNNwgaS4cHjaQ6REckePZC8UM7FOvXepe34xEQWP12tJpEKAILVRbc0I9JyS+uWVNUdXSM1An1rhS59cxn8Wc7HK/QjLmrno2BoNKe18ZwLoPbZtI4+8oW6vL9ec4+cgDWCaWsLaMomUwmlO0cqCZVStMxivcxraMcTrtF0b6mFntT0RSCbepXLqkbodAf+XpVQRM0QY15rnkGDFgwpGQdrmYjVQ6cHF2jJe2ayElw7DaxUSqpuB07zo0W110Z+yeGMRzPoFVqy6a25d/ruOvwJN7/gfswNTuB7Ssrmm7W/Aq2NtfRrnUxd+ImiS2SlkogJNpLsBbQ3cbp81fx7Jk1fPGVq3hypYQFQXZGUcDHzNAZzIwJwpJD9eTcPtx/YAY/dmcOwzfkZF0LwiQ6JdGUh7g8E18F7LSDo+q6HD9qX74Kv7qB9OQRtLaraK5eQKK9puNEHXkfnR6NZAXnyZrbln/fXm8hPV1AXQI0hS6HSSGR4EhxQcfJSbRdw/qVs6jHpzF6413w2oaVr2dcYA1YzJvIpKrAA05WTvhl1m5ywO75F+tVZsu7crBXYSg7+B7mfxa+j9nXrhrWDx32+sW1sEivRWNWubwwrfPNPJjKnkT5bxTBYeRkmf6wpEAdeCoWkqPFM5qnNklzHEAqL6/iDfc/gp/9wC/idz/473D62gZumZsQNJUwqgwtM+9WFARguXWkJS0YS8flJXIAuIGNckkW0rjAdUkZexk0SHbssqbh6egHlUkhaeBza9tqGqFInURH2zNdN9uoSVrhUKiiLQ0iPqqBLOieoKiYUShg2sjvWfjjT6LzxBk0qrJAs3H4Q0ktrnc2N5Sh7dlxrL90AYUTr2DswTsxcu9tSO2fVUqDqlgQjfEkcJyBKoDRRDJpookz/QWj9Qh3wNEkmmELTb2tUBCO36SkVIPeAseMkTBScaLECt+LJ6gvycfPeU85tX/u9kN47PoG5iUV6Vpx5LL897iiGYQdI9WydM1hlOi37qEBipQSptgd2oaRusBKDLuBnuncqgKtICePc6We0YHigdJTxrpBrl2Eo1+kr3hsE3TlXUoqKM88L4fRnqE89khwLTaquLq9jfVyD1c3JG2TAFyQtLS+3UKt1cBdhybw2//87bjt3kOob9XQlkORB0FDkNSCBJt0agJT+/YTkwsSdlV++iuPn8XChSI+/uIZfPnaplq/z8zswQxrUHKdy6sryE0fwkPvehueevrb+M7COh77/PN44qXL+JWfeTvuTkuKu2dGDgXWatI6puVpFm/kcbyYHPjlIqovv4KuXGunuo1haniN7pMAmsSZdUlZ5V2OUgnFlXuWYF2Vr7clOc+lhzR1b8qzukHSjHgmjoC6aG2gvDGP1aUluY9HkZ2YQluCnxVE5YQdsmok7RIa9u02iXi9StHr1Jp2HJ8HeFyhwmpUgwoLFSHnyt5dZnp9NukulDUYsOwfJVjZ9u6ISgYyD3XWswyFKHTdUExict0gdOLw9WQ3UJFqhikJbC3P0slvsxtlsTjycnqcfxnCez/wy1i+ch1//pE/wwtXl3Bsblq7Ux2vpsqS/LZitaHfmk7J6dtOoCwweWW7hFyugJEcZ9hSaDQlaG22VTWCL4eSr3wQz26UlFCYIJOb4mlmCFFrJ+zrerLCiLT88L4dNdOQzUN9cdlNzXxMF9/Wx7+Kq5/8hgSqEaRGs4o4/G1jKsCFZOdGZaMnBD2WUHrpCioX5lF5/jRmHr0f8VuPwRkdl3RQUEeraV5yzxQ1OfZEhOT7kTa+rQVRfYwcNg5C60rbGpDm9fTrLE/JctowsDRtNJLK0YGjX21rIVLflG/TDqylInEdxLF/bAyThSGcL29grVpBPZDnm0xBsnCljyTVktpWWoan86ADcsCeURlN6Cyn4YJ12eYkmZj1RBI8u6FiUoBQ69xW3TQqenCd9LjRe71Qu0lSzJ6lBfiG48lZw0H6FgqdFEYLBcxJSjQ17OBKqY4rq21c3mggu97BmCDfdzx8GB/4wBtx1z03ocdh742irB1PEFkd21uCijdtHD9+AJPZcbkmSUtHE2hsNPFn33oBf/n4vK7pW2+7Ge948H6MDw/hsee+ie+cn0eiWsCp4yfwK//kZ/DP3v/LWN1awxe+8Dn8p//0Yfz2hz+O35G1dvdPvUPuuSBnUEd9CtRrsuMZEUu5z9rVq6hsrGF4/FYkR1MSeBt44sXLeE6Q+pdOnxOUFscdc7N48Mgc7hwdwWpxS5B5gAwL626AinxGIivBkPryqTQsCcRbFy5jZaMOd8+wpPUu2CRVWfIgAljWbj/QaA4QEclzR1cvsHa7Zr3aV8togIXzhba1qwkY6gSZpt3rxCTVFPsBiFXuwETQj8bmQuTwHBqpeuhrGPEnMpCwCxG3jbqo8sYifkZg6i6ObeRXE3I6x1nr7QahmQApBrLYYz005cSc3jOL9/+L/xHLGxv46qc/i/PzG9g3PqqjOLVaXeUuurI5SpUmhrIJ/ftWs6v1jU05jQoZF8MkKxay2Kq2jZ4SnT9cw66+WmvjzJVreIMEjbZX4Yi6ji9opyRAf+DbD1MoSXaQC1KoubaZl0y46F5axtonvw5rOK0yypTdcd0U7BFJHYnG0sPqb9jiBiuMqFNPpbiJ5cdfQenCMkbuOIGph+5C7NSNsMiA56NqtZSfFA2aRkJvRoXH1CCCUAIoCJ1NIhftCDURJRrHlvBFh3QHhEocxpbNKHMGWgi2lBunMtLyjP729GVclQAw7sZUVqhYrqFaqaGcKMtzTakKQ1bQTVo2SjqeNMPmth2qgoZ2XUGoW+75GsD4mdxcrPV5Sd+QYRFqSHlGrEmn/ZWK0dOUh4iLw80EixQCJG2Cv/gZDEAt/oOXx96hMYwdnMTk6CaeP70hiMbGB37xFH7tV96CnKDt7nZN1tQmGuwMejG0ZP0sX95ATlLzfftvMNI21FFrS4o1fi9+45/ukQ3/D/jyN1/C7/zP/xwnb7kZH/nEX2OtUsa2pKH3P/AggnQCn3niG/jFn/klTB25EafuvRsdWXdf+/v/Qo4ufMkW0mk5AALWrByTmsl99jgF0eqgcX0J8UnOhg5j/tJF/NaXn8TfPX0BVqOCrD2MbMHHt772LP722fO4++AEjk9buO3oqLrOdOQ+co6st2zSCDd2HZTKC1i8Pi8HdAxBp6Labq6eH9aOmWqYChoH97DGFPGm/KjZg37N1B6gMUTugP2SerBTB0MwUKjHjkifNyDSF/QtAfED46UBhBXscq5BELwqn7QG2KthFI0+PIgmtA23MQintM1pGIQW2FZ/iNL3d/LiAfSoX8eiIGe8ulqvIWCIaX3YklNwa30Vew/chP/1X39IP/srn/kHdNc2cIDmk/QOlIjlCSLg3BwlUDhryDY5+SnrxYqkhXmMZDjvl8dqWtKDdhOsfGUkgLBTWWk28dnTF3HHqZuUVU4zUBblbNIYYra6e3So/8RWPxGtLO6uzk3K5s47WpeY/+rTqheVGRmV65HUSvKqmb1z6Enq2StIwDx0I9KFKWyeewW9+UW42xXVUKrLIq5ubWPp80+i9J1zKLzhBFL334qR/XuQmxwz40++KTxriCLj2B9QzLB3tDT8qEDvOFFnxFACwwMiCOVMaEig82QIQjRpphaCMB1mx5IExdbqKv7q6Uu4Itd6KC+BGFRQsNQgtdJoq9bUqlvS9DovzzefTqGQSKmrDWf1HMfuF+cD2yAsk9b1DJE3MJulOzCEy/qhHRipEXKu1GdS0ATpDGwiUNA10Uuj02qj2WjKpqwrQaAm/71mCcoWNDzrZHFqchT5joszi2UlsObGYiqfTf1zdg/rEtF9r4HicgnbG1UcO3QU00MjsjFc/XlkvTvZUdxx5604PjGNP/yjD8s9OoLIOrh04Sq8tSYm41nsOTCNUrOopOMeqqjKdWZk7b73ofvx8JEZ3HzqFnk+CXlmVbiBKbrrHDXdlBgYaLTC8amJCXQ3a/jacxfx8kIF43IAnDx8CjfMHcK733MKv/8H/y8+//jT+NyZBqbyM5iUa9mSYF9r9zCeY0NDnnMmJ8hxFfNnz2KzLmjOTaC6toxOu6r0CdYqFQnxc51Q2jk81Ihu/TCQ2QNE4gA7e7wfcIId3fedIBS8jnN8MNAZ9Pu1bUVbYRHDpKc+rNeZLAxev0u4M+tjh5ZelhUMfIMhdUWROQiddBw7Ipv5/cDjhYvOUZsfI9rnRI45fvhALINcOCztBTsiYqybUJy+0zNFYwou+Jwbc2x1P66vb+Omo0fwmx/6kASpJL7wd5/C+eUNzI7mkKXoWq+hxhGtTl3txcnpScoLozNwsSYvWdKa4XQW43k6DDt62vPRZeTnU8H0E9c38HPza7hxegS1WKD8HW5QprpEVC6FirvyfBLGR5E0BWqeU+SscmEB5x9/Vj4/RSEENDxJ6ToSMBsVtajSF3z1LNzsFoLNRXRKC7CLTcTkdE3IdRKBdiT1WTx/BqWLZ+D9zWdx8M6TeNOv/gJyJw6qLI4GSsvC4JsJ+sWD0EVXJwo8I1+sQMoEO981nnKGZGpcSlhH4b05UZmLjQVHPVI0kBQEgX3ilYt4YbOhRW5yqki1oQBbRtJAttZJEG1KHr9da8kzbsG1i3I/jjraJJIxVc6gkkRci+sx43jjGEcZprnkYZkukkmzDe/P0loo611W33YlCMe6OCfZ01nDbE5eRDaL7bJs3HIZTQ6Kh3lMZ6snby6J2w+NoSn3/7t/9C3V7v/v3n+nHDwd9UiMyZm0Vd3EtaUtDiLhyCynKVI6j+gkk7rh6GOApRpSwxm8U9DvNx//Mk5ODuH2R+7C4sYmZtwkhibyGLYzOCWBJSbPwmps6z3dcOqIBPfjKqyH0rYSfu02nZ1lv3TV2UEzibYcWL2SpNrJITUW6Y6OYe6Ah+X0CpAvYPrUYdz71vuRon2brOOLV65g/1AOHU5C9Bzl06WGqDuXRTyextr1M1i5OC8/PyP7T56LHPZEe6mhYXTrXr+sycMgCA/DqDKu+94eJC6Zd4NdNISdYem+DrwdCR0Hr5OHGZ9Kx0Jf7VSnM3xTinCo82WqlAMRKdhxhn8VwvqhUsJgoIugjuh9av4Ovd+YJJKHZWkRNwqCKonqD0ROv7/PdAhZqRAUt6dYm7K65e/cjAQgTwIPuUJdtaE6cuAY/rd/9TvISYr19x/7K1xbLWG6YGyn+MNoPkBzTTKqE5J2tORU2S7V0J6U9Z2OYaKQwWotA6ciKQHn4uRxJeTlL8sz+9gzF/CvHr1DNaEcTruDKgpxpORUjTtyulOEUHV/mupWw3W3IqngC3/y91hcLiKTHca2fF+33SWZHOfW5pGWEzQTlowcSQPIMUrKcxlPZLVeExvKK1+J3Z2EpFZdSVf8nmzIeMYI6ZFh3+npbKESTQO7b5GklIcgEkyzQ4OPqIBp5Hu1LtEz9apoFKZH3XsYORQ9oKh6oZLFrHAbwcPu9nX85ekFbMjfjwnasrXu1NG0kOoJuaygU0FKGdahqLPeM2MzbR8q6VJutxDtBTtccHYoGk5dcDrlJOQ509CBUwns5nJkx6GrdbRoWcOjkJ3jaDeSC931zd3yM4muZ/fOqpHH8vKaygxRwiUjqemSpK35rIUHD41jWdLAD/7u4+ql9+PvuEm13Vv1JpYkGC0vFXFq/Jiglmmln6hnJFNoz4zP6MVIoNl//GY05r+Ipc/9HfbdfDN+5h+/E+lkTg0usvIlN2XG4JTMrKcXp2oC0bissVZNg1aMB7Tfgt3lvKqvnL1eLKlNHE9+d/MpQX3DqF69jm++cEUC3lGsU5pGAvNLL5zHPW96C36ju47//C//D7kPeVeCZHvVrhlzI0WHMtTtBlYWl+WQbsp1FZQLaFUraK0tIjsyI0i2YQ6EyHveH7SnjwruA6mfPdDtC15tC4Zd84ZmWM/aZWOP0AbOVgllq8+E2F3Ht76rPf1giPzhh5+DYFezUoW7wuKzHZmjBjtXFNZ+FcYb8a+QsxXsCFxrLg9jjqmT4zzhtfWeMF/nmHEUTx9wzAjWlZaxd/8UfvOD/xr79s/hT//wDzG/voJ80sZQOqOyyOzAtDsNOdWNC06jSba1h4kRV9IWF6PydfPVFsbkIxoMrBSd78Xx1xfm8d5bDuDgnjHU2cXkG5VrS/pxVTHo5Hyk2OVJWIr+yMqvXlrF4vOXsH94FOlsHrOctk96SOWTWrOYUHOLIcRkg8fadUEHOSVxxjIJpQPEJIAyGNnlNjrVOo7cJCnhu+7H0AMnYeVS8GstdTvxdYbQU8UEPiw/rEGoZVpgBrYR2P1zzgonFIKB8beId+yH6aITqmmwxkW9bqq01roW9toNfOnsNTyxUtHvZ0mdbjxdpy3o1DPppW0MMykPRbNYjnqQCa5UF3nXHd8YQejQNZFez7SOKQdDFE0GfDkkwtoh0ZhBjLWkTJb1sHh0parz3nM97SzHzUmp9Rimlik7jdnpGb3/SwsLKJebGLITSMm7P7fRwy0zLt577wH8xWMX8K9//ylBex4eOrUfpfIGrlxfhisA6PjcfjkA83r9ZPOzgUINL1JEOA5EhQs3mcbNDz0I91tPof3iy7jxhjk0gi7celVVP1PytU47qUGXRFm1eeOok9fRA5kKHZQCQlUO8awcyglbB/Bd+ZyRB++Hly6gdvYlTB6cxPt+7EFMDmUxPDaCkWQXKckhU6OTGBmJ4dRMBhm3p7r+ngTCeD6u9UfqzdeKW5ICbuocJj0iPbkut1hBd+0q7JP3myH4XflWEHZiLdNJHixAhYN+Ef9vsDgfrTArotYEuzQcwgBg9+tkFgabgK8qNw2AoB+khvUj/4+LyQnbzpHjRlRk86NOQxASTMMahcL/IKTp6436/ZvWTRjejmuqfWh53Ci2WipRwZKFeM5TNepFFSX71V//dew/eBgf/oPfw0vPPoP2dhXjmRScuKOmBTknrie4p/ygnm6ImEC5iUwWWyl5kZQttkgglc+RNHBRNuxHnnsZ/+fkQ7KuLLVpT/kC21U3iVfNjpWchgkHTUFyGQr3Hd6P+x59AL0XLyNFtCapEHXPKeuR3DOL9L68pFOyaeWUb8mmc9/2j+CfOIr2tUvAy+fROXsRPlU8ZaNZ+SxGfvIBxN7xRg1inqAAh40I3nfcqF/oL8d6DXslKniauS9Li7r+4MB9fyEFiljI4ifnipuUhVu+i16nK89MNtP2Iv7k2QVUW7a6e1MKJhaZFFAgkdK1rZ6SOalfRqkWin/TMCFlG5OCpLrEhIeZCm0aROhrKcA39TI66DC48RokFSNK25Y0jOoMedlsGUFQOs7SpNFCQkebLN9RYimDvToQdduykUewZ2YG1ZqgptUNrJWqoBtKIKnp5e0W7jyYxE/efRR/+vnT+L0/ewXDbCDUN3D90nXcO3cCe2b3aS+CIzKkqGjGwA1MLp7lmM6nIL3O8AiOPfw21C5dQ3V7Gwm/JgeRvLOpESQoxJiOGwQTmHEiJ+TSGY9OIl0Oiua0RtelJhflvck+P3ZU9sYo/AvPYG4igYO3vwVOvaMen3UJhMduO4kLl5/BSy9exXH52nLlrCwHR8ejWGvMpXPaia+Xt4x8UDjnmx8dQnxxA93iNRUo0Jlf+jLYOx2/oD+BsqMiOpiLRSnkYHbV57vbQR+A9DvDu9hXwUDZyR4sZ/c/+wcNN+5Auf8HpjP0IePAn+2IphDpfPVrVUE/GKlBwQBpFJEVWZS5BDvUfTXGVNKppSkDlRU4fS8JhJzwMeWdJB2egBaG8mn80i/8NO66+x78+Uf+BB/78z/FxvqSLMikBkrW1FREjmoLHIPggC9fpGyEUTnBF5s1pP0UXFlASXaGnAT+WhDTo+fn8cZjs5Ja8qSUrcfZQEs2TF0ukQos1DKXAFpPNJDdP46DP/sInllaxMqF6yoml5Z12S3QlorifBm04z0EYxLOpiTtOHUMjvydRAN0z12Hd2VeAkQJTjKL+FtvRfw+1j3kKustg1A5Ya8Dm4L4mDd3vQEOzSBkt/q8qF0FS+pgRV066muT38S/45wc1QY4SSgpOImSjHWjdgcff+kKHlssGnqJRGoGaF+eTzogi9pT5YMuZ9pYVBd0RTXVDmuHcQ6Dp8L5NN/UR2BMDqKTnLg1FvLGjOlxeLARQ8p1Fes1CVhy77W6ri1XkVRH5YF1MJvDj8omt9RzkcYonVYTw3JIHNg7jYp8/5b8d6EtaXy8jW05CM6uuLhz/wR+4p4D+JsnruPDf38aJ8damM1P4I5b34AEyZkUF7St8Fl3TOmsa+YymXKRLBsXhO8nU8jcdjOyLFZyFi8t61MPqJzyzUjQjLEA6xmnZY5D6aEdi6k6hiPBkvrzLt8DJanl2XEW0Jmbw543vA31557E9uJV5EhsbRfhZYbxxccfQ2txDadufljWs42VbzxnTF1sT4N+OpVVhYvKVjGUrTFF4KHRAuJnLshBfk3e0bZ+ts+Z0xAQmA5xZFwcNtb8V7sbDwxBR/As2tuh5AxeA5LC8ZsQZO2MCgbfhSZq/VAI64cJdH20pAOTMNY+wcAx7g+kjspLHOhm2QPBTi/atvsF/ij86QKxXXMKM2UMT+5kIqMuJW00Bd3IKVyqYPVaWV54D7PD0/jgv/h1vOn2o/g3/+a3ce3iNUOt4MYnV4rF4qQL46djywK1kU8kJL1ImWaBvPQUg6MsABrT/O6zp3GLLP7YkKu+C8OW0Y6nPnVSNndLvz6uypleuQJb4PuBH3sIL/7x36C21UCN2uVkvuc68GVT0NTSGx8VlDAE7zFJKU4/C//sPIKVDTkRO+hOjcJ99H5kBKnF0jTGbBvJaW5knnysBXYD7fhz47heSEmwQiTgh7wrrjY/TBFDJ0sdhlZ5G19TPyfSXlJjkbYGK6bQlLLJyjNYvHINf/TtZZQ5u2Z7KnzHubQmWqqImZDr6cr1cCymwc0ZS+pGoIJDlwJ9dPJhQTk0NmDa1u8w+2am0WSpdt/lmO/ddBMdDElazTXTksOixpa9vCemaSSy+rUGYqmcDsz25BDIZdJqfb62tqH3Rnee0e1NbF6voVevoCf/TjbwynoVi4UcTh6ZwJnNKr749AKOveMIfvo9j2AkM41Oua5oyKFoYdDT+iMFABmo7J7hDFphIU4HoiWA2hxVSgzJ7wldP367rmwhDc6hWw55dIrY+Cz4S56VR92yIG4IylTClVTO2thCb7aF7Im7cVQOruVLz2Nz9TIq6xuColxB8gWcOHEKt5x8I164/KQ+L491XpKuZR3a8QRa7SpKxW013LUDM7mQyHHCI4tieQ1BdRFu4SbjGWBM/MKOvUFjGHTxwe7CO/oOzXaoMRqEPEqrT2MKXp0UDswpBlFx/rsNOOP7c7H+q1JCo/vsG9fEEC5GpqjRGW/3w6q94ztoR4RTo6NlNL2C3TUy2wwac0Gz+O3GciqDsrr8IlZOv4BNgfHFzTU1CHUo9cL5wYp8bWwSvWQew7JZVuQXXT065OjIwh8dTqpbBxcjqQ8k7g1RFoSFd/kZ7JhZXkw2Xk/nDL8hC/xjZ87iA/eclE0mIVJQliuIzs8KnG7baEsAdWQjZAVit1jnaLYxe9tR9N77Flz+zBO4uFFC27qEXEng+HZZTT7p1lytSyq1fAneelndjR0JwqkDB1D4iTcj/fAdcAWRedWGwncYeUM9xSm1yyBEOWJ7YEYiUFziD3ROzPwg00ntCPp+X8tMKQVaTO5qMdsLZzG7KgnTRVYQZ6JcxB989UU8tdzQNDxrGSPNbq+GOuff/ArGk2mljZDHxNm/QtpWZU8y11nIZuE7n2U6Z4rn5FEFoS6arwE29FiJTA3Ci2/BuECn5Z2n6BpND0P53qyVUiTnyfNmbYaB0tJ6W1dre+OSpjXlc1uttiqcjhfyWJLAU234qPodjCQz2ik+v7SKmanDuPfkLM6eX8ZyzVWhSGqHoVZTCWydapD7tF1HzXQpfkgPCa4hy0/Kn1NGE6ojTzXrCsqsaTdb1WJ914yR83t7RhmkR5ckzpm2zQC3zbmPXlUOvYR6QFr2kNxbVlL/VQQbVxCM7EN+ZgrZyQexZ2UTezaWlbe1b2IO9mQW7eqG+oKywdR1Ah2HstuWNmOa9SoaLLbnxuEsbylYoOjl1MgkKstF1NfnURi/BV1Udobng+j3cKbUitBQ0KctRGstWnd+xCSNxP5CkGIHg0FnR/gvGuvxLcD60SifuwJWEBENDcfK31WxN8U0azfVNTAqo6o1FJEXFVIGOw7dUbfdtkIEFRbcEaEra4cvFlh9xrUmk5ZxHaZuVNwdlXx9AWe+9EdY/NY3UZGT0JfFFQtyAoFb2NhYwrXVOlbkHZSaXWx3PHRkweYFnnOwudmma7KDqeFxHcLtcJSn0ZNFZObfkk7P6APJAuBGyMuCTEvKQyLqR144jwdnp7D/wJTERFImsnAo52z14PaS6pDsCwIR/E87bFUV3fvgKTj5JJaffBEL62uwzqzAOXNRDWaZdnLkJME/p2Sj3LAfY7ccw+j9dyJ7y00qM+M1m/1BUwwyhvlkWNRVyQ9zkgVhMWCnoREhXdORJfQ3bTpPu16sxxCFeLKx5YPgdeR0Vz80R80yY+0GPvLYc/jouVXVl0rJdabIhZNThTUuUksCiszp+FTcdH54ZXKY0KS0Jxu16cbVaZsqCqQ0pGzj1dcbMM11+zyeYMem3ff6IxeBtWP1ZAfhpIQSHB1z357GWx2U5zAwHZnygiSq9S0NohkJeIVUCkvVmmTdbUzlJN2Ta9mscL20MVMYwr79o/iHly7h4SeewrtOHpOfndA6nGd1lHoB5YJB61aBDpCHRZ+e0Tt0k7K6ZL1Z8bCoLPcdUEddUy3znNUgNixym3TK13qcpuc+63WSavMAiZP+Iqh5+Rz8GLXaoDJC2ckZZGdH6VyBQNLaXnUbtqAti7OWLlEvP88oWCgJh6NPdVlf4ymV9m7LWqK12cy+KVy/Lmh+4SKC40ovVDMW2onxWVNGyQ3XlBe551hGBirSYY/2vRVKofe5DxHGCJNA6zUpXtDXiXewMwe702H0TdHVDr5fnhe4uxuAwfdsLfbn1iIumELOVw0zhkx2Q50J6xVqZ26isBNG3SAaMraM/G+0OKOIrkV7OYHs+AjW51/Edz72b1G9ehHDcnLM7tmnfJvrK3Vs1gV1oYAapXhlAUkIw0iviVXKF1OfypEXKSdMLjOC6eEc6iQYygYqVaoClXMSNBICtUmCtI3ch7KPoaqMedmolyT9+L2nXsHvzIyoDx4JjdQpoRsK6z/sHrX5dywDUUmAm47uwvfcjJHDe7F+bQmN5Q10BE05tDSTe8ymYsiMjCExNYnMob3IHj+A5MSoEdqjWB7bpTpTaBxN3DBFZvCxQgIfQndddX3zTN6tNUQ/nDf0vL68MgusXqerQm68ZpqWBkxTqEQp76Et6QmNbhNyfZ+WVPWDT17EcjtQykqKKDlGna9Ar4d4z5HnYoUdXVeJrIFuGP48nvpJQTMMJAwc3LzJTE5TvQ43MQ0n2He1gl1SuVrDordfaIHeCcdyIr8/xzJD6pa1026ngmxAKRzXpCgsvJOWAW5m+fpsRg6URkm9DnsdT38Otf2XN8qYHp3GjXNTePHaJr7yrQt48/Q+jMRGjPxyOMBN/rHtWkaOp2feta2f1zRIxEkaIomfMl1E5bnyHcWVGqH/5llhB9cMyOv1MxYmTQClJA7nZaxUAfGuoKKN65I2zgOTk4LgaqqtxkkRO2q6cDKEvQ3bsMZNE66DpvwM/j2pNL0GteuBNOcqK1ty/5JJTI8gnRL0uyQBy29ozRHdqqI9dbpRx6rILt7uyx3bodrojhTyThY1WEjS2BFYO1/3Gok+02yxg9eTknl1cf4HQlg/3Axhn74fYMAdI4qwVt/jjFP9XLTKn0HQh5e7ovCuScuIFSuLIz6ErY1reP6vPgT/wgs4fPNDSGdiaG82UStvIJeqIbsnjuGhcawV69iue9huOzSowRA5RnyBXFQxKo4m0ZUXSxtvziu2ZUF11aXJl+CTQiCnEnXR6WHclROV7WBKJic6Nv52cR1vf/kq3nn7CRRVs6mDRFu+h0X0njEUjcZhLBhrMbaYU3tnMTczo8oV7Kbpy47TzcRGPJtBIp+FlUypa7AqUHKB2K6R51ED0h2Oi6UNjYib4EeY2NSqQqKT7Wm3Q2spTLmIpmjwoEqkOtzc1dSMEtFMAYOG6eSmMr6kCwv41uNn8MGvXsB8zVeOFNVYI7t0+CZ4qByY7JKEbTS7mPIEaiTha2PDdtvK9yJZl0oNTUFatZikabJBaB4W3Redg+2wLuz7QX/4Vidr5M86ckNzDQasuK0F4v4ER2Tewg61b4ivFNDbLle16OyqQ4uv/D9GkVabulmCOrIJxOXfSoKiOQQ95AaQswyvLLWwuOVhZI8Eu1ZT0sNEH02xBsSRJXOfhvzIDmVgR2YKMP/WskMEFapYOKbUYdr51o4YFP9b0HhXnpUKWzKoS9DqyrqOj47D316GfeU6rLSsV1krfKdKO1HCbkw7ujy40pJ+8xCgPBJFIZv1umlUsdPK2ppgkeHxLFY3F2WvlDG6Zw/GZyZxfusiOsV5JAtHFMnLw1L044SW8UGooGJqiuZQiRQbvIEuX9AfT9mR8vO/CzXBHqAtRDOurwk5lv060zU/Ug0r+K5/Gw1H+v02qB92HOzQ9dnMCaqTbCgrEfiRTIofPhy7P8O900pl/SCmN/b8Vz+C8pUXcfSGu7Fe2sArT17FU5drKNVKGB/NKLu9XWlAzhQJQEm1Pa9XavTm0RPZpa675aLRFjQRju6wAxS3uBjI0O5IwErLJq9o7YGDuGlJE4n8VAJFAsq6oLLf/fYFnJwaxciBCTnJPfTiXZrySsChKFyiX2TVMEIuEu+Zg8ayoGiL5QwLSpBrIfTnCAobCGy3qz1HaPLKZoKhdQQ7CwLBzuT7q9QXGdtVbYb1IN/UqnRhh+iKaSNrJp4WWKHuOC1Z2JpaEkXKD0jbXVy8sIAXnngWV+fbWGqzewdNE9nDI9+L77Kj1INA3yVTERaRvcAMuqt/hWsIn1bDGGWkJT3qSEDnqMw2O30ZS95VQiViiJz4s61wRMthkA75ePTw44wgv4/WXuReJVNJNWFl7VFTFgYjsqMtk2LQk3KzVNIUVGtLnplbbAua4nC1iv75gdGyUiTGpopv3GNkw1KWu8z8kgRLtI0rh72jPqAjLESyOmDuG2d0hGtdUU4Y3PhnSsUmjJqHivXZEcvbV6TMINpWlVVfC+OUiqFzOq/LF+Tdm5xCr3ieMgtIDY1pA4i6YVog18F1P5RXDnT0KR7Kf1clWFMckQ+UaSFB/9BoThFfcWMLh44cxfTcHK4/8zTal59H7q7b4dMDkwiOB0UfQfqhSF/QpzBESZ6WIiKGuhXy2a0dLla/MBSBmmCwgmS9Kn74YZo8WJy3/v8JWFZYqOO/9ZR4aCCibe1APcM74dd6YXHP7ne0ogpcX3Zil/hXeApZKWyvXEbp9DNIyGnxjTML+MSTz+PleYHJ9IOTBVS+UFJVg7hjuEBTySwOFLKYKYxhtS4bpV1VQ1JSIlwuCnXk7SpBNJFlwVxSBzmd2rKIqvWWaq4TLcXlRXLh82c6nboGvBdKVfy+pIb/cuY+2dBZTTWTOlNogi/CdIwvWj0FKVgXs7UmRR14TyVqoCeky64Tk+OuEdWjSF0k/xL0TFAwHpPerjqPqVN5xv1HaQqGnqFpoNcLi+k9/TePLHvlOfWUzqE6WtyUvjGsoJdjt1PC+VfO4utPXsZsfhhHJmRTLxUhGSPIoU1IkCBBM1I9NZ1bR9M+5RT1jA4Ug2ROUCqDClNmHlI8EDLxlHKrqEJabjWMuqbWCrinXb0PrekoJdVXeWIeOKRcdLrG7SaTyiLFDhrjoGcCDq+Bm4xILyPBjK7Q2+WKfm+S2lWcH5WgV2dwJl2Noz8c7yLK9I2CbLXRk8BBOze+h5p8TVdLBRStIfUltC0w6zOc2ZQvNGucqhbdUNWAta6Os8NV6tsMuiEXzg/bitF8p21oIKzAV6uIVQURJwRNDuWVN5jIjqPnnpYUti6IPy/rB6qOa8t1eepoDZWs5tA87zNGD06aynaLaDWa+g66ssbqsp5nxseQ5djS+pamwiOCsoaefxqdS8/DvquGjhxG7PgalVuEwSjoy8sEkVpodGDaUXwK+hI11oDczKtVHKxBXZpIs90P/mv6fD9ESth/GzsX5Kutljntlene7zTsDEn3mbAD39pn1e7oF/bVHoyaJl9yHMWVsygvrODbL2/gKxevYWZiGr/2Gz+Nk/fei+nxcfyH/+ff428/+VVBKmlUJG9vN8soNhs4PDmCU/vGUfHS2CjVUCw3TBChWUGcdlMp5AsZZGha0GyjuLWlJzoXWEppDnH1nPOUeyMnlaSV1WoNH7+6intfvIZ33nFY0hVBVa4JIFpc7Tl66vPI5ziSS+dqN61OvQGRB91LJDjSyZmnf5cnLuf6wpPZCTtlVixCT0EfJkeT7kHopK3BUZ2FDbdKgxFpCSy6cIyFdRQyzBmoAhPAOo2afk9ci8kWlq5exHdeOoO1C6sYS47g1lNz+Nq5y2iqRHJXjThiVPskYdc3ZhB8U3Rf5tgUC+4dr6ESxVxEhWzaTOMHxoyEQTdjc/YwoQinTrNWu6kEXlq8OSEjXhUaLM6JdhUNBTABO5tOK3KgN6VqI8q/e5ry2lpbo6N0Wp5tkqhEfk6jWtfnRUTGOtRasYStclVjB01IHKbdSq3gISJpYreungGlpoe7ZgpyyKXgSdDyWZsMdtIePRC8nbqhp/XBUOhOXZnlvrpu6AJtDqCgY7q0DJJKF7AjpylPDzintg1/pYTyxWUJ5k3kTx2Gu2cSCRqnljbRvLiI3J4DgsYdpSzEA1MYtx075Nh11fXHTbpIyDNgd9bX2mRHEFdMFQgq1QoOZQ5iYnIaVy5fQXm7iOmZPdi77wZcXHwZ/uYriI3fhG6J1mGWdoP1EFRp8wiARIPqO+qkg6qk/TQ3VHnAa2RndjOyMFgPe82A9PfFTdaPRGvYdUF8l4SSofV2DwHsgeKceUmOFth3oKI1ILAzkOgEwY70SYgl68VVnH15GS+dbePN7343fvVX349bbr8TdmpIjzHX7eGVM+dx7eoGhuRF1eXlz9d72JpfRVvShHecmMObj92oelVFOc06mrrEDRFQFtq1hofllS3Mr6yZ4nZAnlZcC+4IU60OA43flqAVx4YEgP/49FnsGXPxhiNvEBRQMzwpFk53SdD4itYCtbJKSsCSIMWWN1M+Bq1QGz6a+VOE5oWNBtcU03nquaHXoxpM+GHuFRiqAgMUwlm3iKKgVWKaNni9cKykbdrygUnB4vLZlc0izrz8Cq6fu6Yp0w0H90uqMIXEeBIvPVWXwNJTMj1RgGsbNmFHnWx8DWBqz2WRReLLIdHQetlYNqcCepa68xgXoG5MgmNAnaY4Wq6gHYrxUXmB/ybPsRGyfhwrJBTL76mkSXEoCsjOZMI1qTmJrWr84HtKOKV5STruIp1Pygbw0G11NJBmBGnwMFzb2MbCelHnGXPy87JKZelquu8QPUsgoeDj0lZFUt8u7j0yh6mxEfm7rpnTjJyO/SCsX4UdWBj+WwiWTBqo6XhP61qWuod4GlQNt8wJCYheiII9DZrNl87hq1//luqrjQiUvdHtItaRA3JkDZe+8WVkyy0MSxbRZSe5Yw6fQPNfm21AtWlrt8lFMxpkjmPWX6NeRWY0pY2dUqWoTZLxiQlcPndODig58PffgAO33YeFz34K9TNfRv7hY6gKquSUQlvVa9v6bO0BqRetOfW1qgZE/+yw69kXgA92mO8D0jVWxGYPicHOgIinFfzoCOv7oKzXCsRHuEghtm/qD5GPqpJJI+dX2yCIXmACQsR67ftuhHWwIFoEAzUbOzeMM8UuDh49it/6rf8B+4/fKUGxqcVjRxbzXfe/DUdP3IwLFz6HZD6DeCythfOapENPL2yi3O7g7qaPk/smMZHNaDpS6wALjQqWt4p4dmEN1yVg1VuE2o4GqyE51XnZbRauqcVFRjnHdmTRFRIOnpNT+cNPXcKRsWnEJ4bCoOGptTsXq6WdME4fdnV2jGiHzVhKALMeoVZbWqty1E3aiujFlmkXIyyyajs5TJmibp9xxvFNassZNxqFMlh1zWZW2d3wF+WGPW6kwJBEWxJcLpy9iEunz6NeqWMyP4bhfXsxOjuhjs12dRvLJfoKWhJkHCRVUSGmm80P29LsCLq20aQsyQleaXaUW7ZndhqFTFoOhZJubKa8nt1WxJeTANeRtK4lz5wD6fl0Qn7lJaXuKW+J6RyfPVnh+itUD1DfRW6hNqkUHfOMOLcod5OJy3uSz6NaB1M/BvBRWSsMfmvFdcwvLwm6qmtZQkd70klFPHZYb8rbCSysbeOp+Q08sCePt902g276/6PtPYDtyq7rwHXTy/nnBHzk2GigETsydRBF0uRoRFoqUSppJFljF20FS/LUyNLYY9e4SsOxxpI1rnHZM6pxqSypbEokbUoUQzM1m2SzE9DoRv74wM/h5XzT7L3Pue99dCAhUe4uFLqB9/9/79xz9ll777XXomfRc6QTHM1nysHy9IXhq/ekylemLj5bquQaoZBQbnBx+OHXhDJtrmgZQn7WB5uiA7q1Gib2HUShmEGN1s3/7vNiBtvZWMHk0+9HmM0pQqljqbqkqVRWOa1y+1106Vcml1LOQaZ6Nk0KWKwawal0s1sTK7zRkSJK+RTW7i5gu17H5LGTmLv4DVx57etInv156egGlDpzCSO0XeXerqlFw3EdDGYMlUeDMdTAg5bXjsYG74kaUUcxHKg4hIPpmPsqWb0jreEdJw9DqdME4o1nRGqB2gTVYzdi3QIWqMfdEbFjUvUsX8vJSJ4vIwRDFKKIo+YgDTQi42jD1NCzjfn9J1CaP4BRyu8nZyblBV67JulWjw5jwkzjwqPvxl98/itgDDHCg8SdLqr05VWC5W9s1LFQvogvZhIoUhrInKu2y+lJDw3Wcmp2pDWepjStJDpOCUkdhNPCY0G+LU4x/DmY/yRdOEKTzy6W8f+9vIBfet8JNJjgGDB66ChPObYDc4QKLsGEU0WVOgQ6RVAkSuVUY+q5OtUFVEE/UMJ6/OcckHT6J11CPgyMdrh1H6rmAdvPm0xR0LUqMWql9Ms1KZjwoja6uH31Fm5evY5yuUopVBL79x3A2PQ0UmM5+IQ4LLoEaottrDQ8LZxIh5bTJpbT4Ra6/JkhAYwTkjodhPVWh4V2KP2ewtzYqBSk20wn0OYW0vnjOcwYBSg6dH2XDhlLVtNrktkRTFIaL4xpK5qKUOdCeH3svmx6Mvsp+8pWLXfWIUtSAEynY7DZrIPrOKEtNS5uKKxX67i1tIqlSlNIwNOUMo3nuJbITtGG2HzxHrjTbeHFq3exh9LJH3vsEOYmS7SmoVK+d2w9DGxqzahAmUboWqVS8TUVYhbhR0voBsxDE40nE7qZoLuazIg3PTkDfJZ6mQziJ0/gcUKd7Mbs2hm6uybQowuDux0zB89i5PQDMkQeZxkjegYGI02ewHD7sjZ9Smf71W2M7BrjhBHSn7JC9Ppa8omVTppdtCvryM3PYorO0OuXXsbG3TuYPHQWkw89jtXP/lf4L/058u/9KLa7VVlHKZixkoSeRtnpnhPuKA2ZA1b7MNUblnjCwaSfYbx53MaQ5gUjv1A6kb7uROpU13in+nl4/0X3cEc0HRjz6PqUL0FL3SyMnA1R4Yz47YagDW6Lc5CyQmPAx7D0gLMZFe8GMl5RSkgH0W0jU5rFT/38T+HWtcuoNCkHL4yL+WZAKZrsnFga733yXfh//mAvbl66jIn5aZSsDKEiOqx9X2YAO90eVhstOoxt0WPyAx0E5CCaouuUoUOcSyfkhlejQJaSUaFPmIglKbg14QotwEeKdmSNgsYfvnwdZyfyeOj0QVE34FZw3+ojH3C6QQesz8aLrlAWuMYRap14kXqJyHia02IZkUa7r4ISryzXTXw9h8VETx5M1rUp/juDUgNL1Df78pn6npIQZoVQ5rz1qh3cvLmAu9duorK+jTilGLO7d2FkahylYgkGq1wyS5suHMsNsFRtYrPVUUXteFwROwXhmVIyM5VfG6HRFt3kfakVHZiZweG5OZHwWatsivMw86dYZC/GLXnRhlcUiVwyJfukScFuu06XDv2/pIBsSuv2ZOC5zzUTU43rMJJSXF5Dc4pDShVNUTRNJBxNMk0iRRcRp3rLaxXcXlnFer1Br49jNyGr6QKhblt5UEotzrAJUW/g6uoapoo5/MS7WZEjDh7XdFgc0O5SYMhIcJCOoDlgSKtisR8OVAki5VcOphzkfO6w2bYyJmUemS6ByAC/zGryI7dVXXDPHKZyNvpXrqFVbsJjiZ7cBEYT88ju2oNwvCizsnGp92ltukClY1xw7zdr6LUbyOYOiMw3X4Cerww8+HJz6Hn017kj3BDXp5HpWRgXL2J1YQHH6evGDp/B+AsvYvXip4ELT8NJp2F2XKk4mKY9yKhMHXCEQ7ZDfibycY4I4MOB0EgnbzhxMZjEjxggoR4nG+raRKSI79Hwizg8YfhXmiUM32YGSArTYWT4CXWgBiFIi3bx7cNFzyjP5QUItJuOsYPojqGCITunBFYP7/7AR3D8odNIcCdE+CWUSgR9lUp62zhx4gGcOX0UlyhgrVZqOLx7DnE2Juh00PJj6FCa12FlUTrg7GjMB1rGUekg8XxahlKLBOtQWYakUcK7YeTIrzFduSFZzqYrpgfK5ol1nK83mvjkcxfxe3TLTc7kENDtxt3KjtmC3VW26MxGFtQp/CtH0kPx+9Ouu7Ia+rYSE1Rd51AmqIHegIEw6KUuxQV11jUXr8Qegl5XpEmCSCWD0GN1axN3FxexeXOJbtiG8L4mdzEHZxypfE7+nyClsLStWEKGdJP08+5QwKq7CpU5fLCk8WmCG5k9Lp2wDHGrLSMokxMFzE1MYmJkVG7bSqMmQcjVzO4YIV0puVjWoDCbpIsh0IKPbKh6l1Bg0U/Sr7QUfbkZIACVrwkh5zqq3GmpmgoHnjghJuHHsWYWo37XwvZmBcvlVUKPHEhdGHRYRzJZTEvBXpm0dihQlen5Ly6voNdq4slTM3jyzB7MjARiSV9MNZEvjQgqY1dkHi7nuU1+/5Hpb8QRUvvUGkx0iH6ANFQcnrCnr6PLKa7IrHwhsps4X4QuvWdGcRIE6P9rxVHYR5N0wdH+MpUwY8Kg3cWifNzwgdLpVyYkhsh185l2Kf1vU9rYDem5FbMyusTTCnzORPc+dBFLsqoqfV9aj4Au7MJYCfnRCazfXERjbQn5o2cxe/o81v/LH6F+6auIn/0wvW5F0ktGWYHhDwmfxk5V4PBtB5WHjbNgh3nqkGQazReawNuaTIRh+N+gS/hOvoRaNTBqBXI6KBP6DJtDQ8iHgR6WNLXdF7eFpeER6qAl2lcqOpsD2AnR7+abeGbvPjqYlugLMa4TSEoPx+8Sgsuk8eM/8WN49mvfwe1bi4gvr2F2tIgiIaYYPUiWhelzsJAhaFdxakLISEOaFTC5bc8zafLAQ2GAi0Acj6PQAazyaAdtEu6eMbeGhXNZeTNMxvDcegP/15e/jd/60BPiruKxASsdGMfvImw54n4TSUhLsLKVCmhoKj6OGVqawR4M7JWECezpQrpwqDxlEx8qBQCfDjsX2DkFYecZKba3CbWsrOMOIarK2ha9j55ogI1NTqMwNUKbNS+HkIuz7Exjp5KIEQIxjJh0EmMUBG9W2miyGzGbI9Pndi2lpsrpc6fnCjIYKRQwUcphZmJCunO8bbbLWyjX6yJDnXJiIpbI/LduoIQaRVnUgBxariEyGnNovSvdNjbrtLbtLvLJNHL0HGNsRBIqVOWZSl2U9wYTUvnrRasr6IthaM/roV1rodyg1L7ToNQ9xEQ8S6i8SIiBLg87RINlauodusjahJJbmJ+M4Rd+5im899w0yncWYPtxrIM+d3ObLpdZmImcqNQqVnpSCvDqtA7lBgRAhdbwvJpKIFF+MVeMkRwLDUY8OSmFqHKKiD4KQrMIGebh5fL0M2KIRW7pTJSlS9nxVZBjoiYH8CSfGk/pmvHnr63cRrxAzy9F+5AuEaUmYWrFWBfxpCVHu92gNLxaQ25mFLO79mP91pexvngT+YMPYeL4eUxf+gruvPyfET/K6g8Z+tlNIceaRviWwedB4AmNdyYRRKxePSQd7pg/jBLF0DDetvoUGn+1GtZfg+0e1V58OZgDAS4txqd7WrKQctigJJOl6WDuGNfhm5Jda8R6CoMh3YELh++rEQdTDVqL1jfHdL7ReOSksYmnnnwaH/3oj+B3fuf3sVSpyk8u5Xg4NyljIF1NxoxrhUuG7TFGWqw4wMihpxCMpZUlA+0gw/Zhm3Q4PA4uPDsWV5uOVRJYs7xMh+IPL93FLufb+Psfew+aThfJdiAdF+Z1Gy4TLF15kFw45U0n/oaWEL502zgcdFSFbSwDya4gKNNXOT6z0pk+IBeu1FUoVDW7aFYqKFOKs7G4hCqlffx9svk8CvkiHdwS0qMF6SRxq5sRT4yCWCybg01IK4hTUKDPx5vT4zEnSiHZwTgTt2Xb1Snt7rm+zNalCIlOj49hfmqKUru4iNCx8Wit0UCr2ZbnzgTeFB1w1svnoehlyrMq1arSAOC0kwJZmlAPW7Cl6XtkeylslGuodfpoBHUk+h1kaV24SM9UhjAeJR+B6FNx/YvnPzu9rsx7djuMNLUbt5OVQnzS5HWrYn3NpYAIumi4Rd/FsfEc3n/hIB591wwee/85rC9XcW2zjrlZCuSJHhr1bbiERNLJgqKOaEY2o7PQjIKW1tK19e7Wkw1yGC2lPBhwus/yP4HWIONhd+5KM5GzR/srlyag5KvUa3udkDgFm2wJNv3icS4/ycPkFpJNHsRXl7rUE2X20BfVjGazSs96GVNHd4seGZcEeuymrcmy7KodSyYEwXfabbiUaXBKPL57D6HcNAWsW9jX2oZT2IW5c09j83N/DO/aN5A5+yH0tjt6XM54a7stkjKKUr7wLXaEO15vDIeod1h43cPdehOrPfi+Y4E/kLzMjpRQJVhysIJI+jhUKMvSbXlLOoRqgFI6BrIZ5CsGIxeG8v/UOW4UtQO5VeXvXSUepxwglROLqQuhFgWbX/wHn8DFi5fx+T//S6xTkKm7bZTsJKGColiB8Vqwh120unzou+Gw6G9DyX8wZ6ZJqIPNNtnpuE3IJ0N/m2cXXTq4tD2Q4IMVU0zvnpvC7718i1KuUXzsqeNSN7O8jMyAsS+cb6hOoNSyLOXXaFiGVk7wB3g70M4yhm7fc/oqkixK/VAR/CiA1LbLWLlLAWp5A71KU0ZYpBtGyCKVzSJBnzWVyiCeTarUTAKkLdIvMbrRHQpofiIhuuG+pNYuBZ0uNtquptQoHXWXU29a+TG6yWfGpwQBMaqt1lt0ECj9IrTHvCnWauca4OTYKAW0SXrtqCDBPqUfPFrDqDYItESuIdqtouDAqbVdIMQV66BMB6vd7oM5+BVurdttWSNut9taBFOapmwJz2vDvQ/eP4QQOQ31/AZqbVM6ucINpDWezmfw9J48HjjsYJbWpWBl8eCJw0jns2hcWpF00qZnWCjkUN6ioNkilEaXnEF7JkGXmRFJ/vKlYukZIn6WTGsQ/pxWLRBxPlulbpLvqQYBm5b0NBmW0XyQsBQnbr0M9+p1eGvLSFH6Ze/Zh459C42Fm8jSOsdOn4ObT0jtNeuqmVZO+30nlGdVJXTFfgWjkzPo0vqyx2WbXtsPlFIC7514nDOHUHhZTAnpE7osTEyhOD2DzcXb6FTWkSkcQunQ4xh/9XlsXv4crAffQ++ZUBut5ZvVFCIFlZ2UI+Md6ZrGveYTOwwLTUTmNOb3IKTfd5fwe2s+3DODbezUwxrSFGRyP6pPRV8VqBuII6iljUiVIk0obX1HeC0qcDgRE0IHLRHIl5E4X1q1nDbJLeIptw+Tbm2XglB1ewMz09P45G//b2jWG3juuefhZ+JI0Wu2mnW0Ca1k02lRBuVNr7SZDDEaEAsv2ZSGMKFZlK7Waoplep9FApltTX9fYA0jtr7qQTY6n6Q4bfoEIZKVjo1PfuMl5GkB3vfMBblFw3ZfS0argMMT9tItFVqLVlUI1E0e+pHAnuLriCSMMNqVoF6rWkdlnVKvVUpgKjXpBDp6FCZNBy6eTsmAMovDxdndmoK0k4nJ4eIgwaNBMTq0BlM22OCUU5ZQucKwS9GW2LyrK5PJmTxrmKNNX8zlMFIsIk2Br98jREUbXwiKrPpqOkhRqp2mnzdKQXC8VECCvjePyGxtbaHVqMtzZBIuP002vGWjT25QiBKCp+YURzMZkUFuu64YXPS8voznBD3ljDPoHkceG8IPY8TIksA9zOVtPHX+ACZGE1ihIJ6mAz43V8BkPo25YpIunyo2NxqIjUwgNT1PAZSCXHOTdTkprd0LZ6SAGy+9RmhvGxOz4+gbvkxvxHWqrorLpuJA6X0viEpoD2b0prSjtkZWrOBByEaMRWKiWQRvaRPVl99A78XrCLbvIEHPo5caIZRFqDdFX/TiZXRjC8hbFMovnJBMgBYCfrev1EsYFbTqlMpSYBspyfwrq+lyYb1NgcswmKEfk061Qz+fpyx87W7u0n7OT6Yxc/gILn/989hcuIrM7jOIFeYw9cD70P7mZ9G//iycg0+L1phhvJ2JRDB0do4I4uFbK1rhPZQF40029kOENZjfMMK/ClYK39aqPrxPeKZmpDzVSYpgnx5KRRjNFhpCWhTUpVOzQHlrqtEM/nuG0ZZKIdVlFhHQVP1LOjEsi2KpGy4aBu3rQVlmmDfL6zh+5CD+1e/+Dn7t1/8nPPulr9LD6wlxkDdgr91FNhGXoGXRAeFgwH57bCfGekssxteim6pCh7dDqZLHHiqmMkYo0ev5xmwxW4E2FN/APfrJMb+AnrWNsRxE2uZffP5VZOj1Tz5OSCtTELgurXtDy5PogBXZGckcJRfPfOUw3Sdk0qN0oFGvor1VRW+D4D9ttl63J6mGw+lSOkvByoHBFtmOSm2ZyMkjSqlCQVCClVKmBtzeTsQoQLH4XTYDLlDxHCDP3kimzWkGc9MoLeM6lVL1YSealKR2eUJV7GTSoIMSBIqK4TChk1NLsClqXIbbuSmwtrqKpeUltHishpUy3FAuHOm60hPrcRCSQKyaG56tmhCM4hIUZJKxuAQGvkQCXU7gwW0v8LUBp6bHhKqc0O0zR8vAB997DL/8Uw/j6uXXcNnuYu/MJMaKlHbmkujQgV67ZqKYmcPBBw7BouDe2txCY30VBgUSI80Bvc9DFdjcbtJl0EJqJCGuS9L8kFJHoFV+lMwxByY/Ol/WULhuoL7Enb2lFVz986+ikC4gNjuGMkspv3gVDfrzWrOCbl2/js5DbrREyN1BntK4PKHk+me+jEKth/zZ4/CyjiDIOAsKei1UtzawtbyA/Q/uFV0w5t+12jV6nH1B0VqyFU6MHZhcrnipmik9W58Cw/T+vVj4ThbrhOb2nN2ASwFz5sjjqL3+Rdy+8pcoHny/qO0aYfeekKBkr8yhiWoQqh6h8faCLuGOUR1E9I4dXoTvUA2PyvL3mxIqUp2aFzN3VO6De+gNkT+eGDIFpmK+mpGoFyMJU98yMnOi/DpDGQpXo3amClyWFtgRCwtDoZtAM5+ZPMhBScZ+PE+lhZamVgQYDgf7aj4pRoeSCYbNWhkPnTiC//tf/yv87v/5e/iDP/yPWKm2MJFVNl4sQcs6TTLioBgromDJmvE8+tykm4olaVh+l9UIsvQzU3T4+bZjVBFjZQdHbTT+nH3a2EmkVBKQCHHVbeLXv/Bd/EK1gb997gLiU3l6+3V4iTxiRpt2EvvPxcRDjweS/TrBeQpIHTaBbbXRadDvnba62eUms6SrmcpkYdKmFvccSzHDZRqR7wVuGrDOeSGPdLEAi2tMllJ9iLGBAwVp8NA1B2qeYbSUVK/vcMeVghx9znVCA9ui6gCMsgXaGEvpsA1VG6YbyIXCQ9wstcIkzwTd5D6TrGVmEqKT3+u4EpyYlNFhmoen3HhccdMJuM2oDUXUPB2jOKFxmKaWI7K0lIwtgc7WP8MN2+h6bQqOeUrjlHwPO3Vvuy20kxYOHxlDLNxEmVKtibEMHVZPOrpJer+rmw0Z4dl7cB7JUppS9UAUQVtuV4rqSTNJwSokVBqiTqirTheFReuUzLO5K2vb92UdmUDMyFK02fUoEQYsb230EWqPPR7fKY0iMz2HjW+8iO5XvkUXUYcCMqWaE2OwpyeEqJxiccFGEyatS48uyIXGFuzVDdQI6R26+DqO/favIVU8TN+XpWzokqGgU16+JgX84tQs6m1Knik1bLQ8EVDMJW1BrB77FzhqBEnanpxRoC9Uk+zMYeR27cb2+l30Gkx14Qnp3cgdOIXYd75AgfYinLlThECX1TnVQUeejTDVPQU8+HxGGVYQ1aqURr8ldBQlOhnVuziHt/UssR0of8/AMHQGFciMjIwCMe9Ok1SVHJo16KgbGorZfyVB5TeV9cOotqCn1uVDRWqY+u+k4GBGfoeG+N8NhQBNVYTUnZhAf73UdES4TXXNwsjMeKBeGLmsqKI1T6lHVDcOWvO7ZvDP/9d/igtPP4pPfeZP8dw3vo6F2xWVeul/uBlmJXnAmdKdZk+8BRM2S9b6glgySVUc5rfGYz6SPhqqzelpYmfS6ssgNR++JC38qJPCTUpJ/+lXL+NTbyzjE3QT7h/Po+axQhKlPJSG+B26/Txmb3fgBqZKF+mdO9poNGY7MgwtahXcHLBtRbfjdbAUBOWAbqhCDuK5NKGCvKArW25WSIGbURAzznmOkQOWIYamlqbuDeuG/KtOCK7HdTJTpahdSv/6MifuqWFsQ6y5JdA77DLMDZAea18pHhuvG5uEQjqLARIUlHsdpe6gxkk8QcZcZ2E0y/InaU5JOZjxM9RuOYyaGQF6JjcuWqLeGaOgwh1PrsVQKJSB34AulSbB6/mZLPZPZwjdbYjGFPPLuMkxSmterTWxtVHBrt17MDY/ycUgJD0fy2sUFOiiKJbyhFYzaNOzSGUTqCw10Ox2kGa5a7pE0k6WviSllFJZG4wliMJwB+Uo1JZ1KgAPyia8lemSm3nmcbGNX/7CNxCv1pCfpfcwVsTE3t3oUhrtjBSVqcVmDRbLSm9sYeWr38XNV11k904jTu+P02cO4AyH+4Swlq9cw8j0uLhI9ftN4cPVKi5dej5yWabmsJS1UqgwDRvJZEr4dzyn2W03MTI3gZkDR3Dp2dexungd85PHaC8mkZ09hezLX0PtxvMozp9UFA1dyhjMDWofhmCg46n5l9GgsARz7c6kXy+9SqVAJORjU8619jvVcUBih2l8zzbhADtx0+wHpjUwPDTDgYqgcgoKh3mwFn5TtW2VEoSR+qKhtNZDVrHU6o6BLlJHapqsOyTITI//BOGQQRtZMISh4vdAO/e0mixHHMfH3vNBPHPu3bi8cAMvXn4FV28vYJHSlmq9hqtXr6J+dx0p+mbMcGcUIIaefJ+ZLPer5gx6YqzQEyTgxMyh85Gh2td8yvlBxOgQcmG8S0FjvdvH15bKmKEQ9cuPnUK70aCbg9KioE0Hmms/pvCO2JoqskcTLXOu05lKuYDX0jHUbaT+X7X4Ld1tYXpCrJhDgVKKeCEr9Sup77D0CwU8HqxmImPIAY8pATFbBVwFYwepPwfbaqsnm5x/drPbpV8NhRYCzcTXxg+uFoVk00vpWDpcuKagz8KJiQyK2SyKdEjGUoSGkoFsbq5bNZttoT2wVLUgWFdp00MfdMXuVxtTrOjFlJORbl+UO2WbBq5wwHjfbFDK1KEA9tSJOewrJHDjZpdSqzyyeVoLx5WGwtLVG8hSSnbw9GnYIynWXhbL93Z5C4bniEu1w3LIVaXZ3uzXxB18cnqXyC73Oz2Z/eRmhS10/B5dcAm4hi/LJ4hKxCkNLUCJgV4Zp+m0sTD+xBkkR3LY+NK30bm9ioCCU4fWOXPgIPxJtnhLIOi24DFpkwX4Ol3sO3UMsx/7YZh0ARlMRelaYm22vnITnXIVex48hQ7llCyt3e364trEeDvFuvXoC2Wo1e5Jt5B9EKT/zLdPrynyOaOzh5CNp1FdWgDO0FqYU8jPHMfo6BRqm6/B8LvS2QzYiiwKwprpz/vDNrQySaS8ooGDkr82pYatigAQc2GuI7PyhwOl0dYwtIjnkCY+LLgbb51X3sHRCnn04b6Hn9+qw6wChcC7oeygunG00YA1MGQMtRKRoegNdBA4p2a4FQRRVVUdfCkwcnDQCpOh5rMMrO0jB2pFU9P27YoVzd2rWDwufCPWSGICXIKg8rmTD+ChkyeUjlWfu0qhjND8xm/+Kr75hS/DYidedgrmBDXm6C4koYFOazCm4XCL2rQ09caUAV1uq9suI6A4OpS6NP0mpSMd4RIxdL6DBEZyOWnRszNv2kzDt5l/5cqtYrF9tB6gDcKhy60i4CrzjSgF5Lk7JfFOX0cpYJJu6Mz4CJJcm7I0a542GpuKcp1FAg6TGG1VjDeiWxOBwHM+bJxe8E1co7VwtS0vB2i+kftaT18pcPhKBlmpyYjrsiDlnuIz8u5MJurIlmMo2LbwqsbyCcSElU5rkE/T2idEXI8F/Zgo2Y/b6PZ7grK4CRJJl0RDsfI8mYvGtS1uyJgxec5VSqeWK1WcO5DHBx7fhfrWJr1nGyVKt/gJcj3z7q1VQa9nzz2Myd27sVlbRpbWr1peQ4UOfUCIN5VOI5Zy6Gu79GwJySWTuHtnGRlaw30H9ssMYU9sxTQnj3WsWPAuFdfcq+EZiIQUDX3B8sqxKYrDExRHD8FvExIipFq9ch1rr7yO3OVlYLokBX6j2qQMoYv+3S1C03HMfvDdSJw8Lpwun0eKug7avSrWr76GbDGLXD6Hcm1FFHe56M51T5HhSaXkszN1pVWvyF7NFXKyF2jRISRBuiydwizMZAy15WV0NzYoRaWLwMqKAm6ytU5BvQEjQfuUZzQHrs5D/pRp7HAcj6xuIydyQ60FOxzF+OzR7yn6s7hQmpTpWDfyMdUTLdjh/PRO3oTGDgG+H8CEQpPBGAaa9xbcBtBZvwlLe9KFUdpoaijNAcwcyspYUIqT3GURg07deeQHYeqRjcjQLBB0ELlJq7obIwp5P6Erv5tOILU2t92TTceW4DwmwrUegyA+12Q6PKqQzqPFsLzLzs5x6QiwjLBv+UqYzor0xFXTmhULOAWyTY++3keT0p9qqyP+cHzymEXepq9vd4SaTDe5jI3RzRuTYCGyKjLapEiqEoR0IIYwzU2tVmIq3paYIih87VAKmJkcozSwqATzbNVSd7S8j5rmMcXlRupO+ndm2HORW3GofaWgodeyQSkPByxL38iiJsGNUNPSqMwSbXx12RoyfsU1PNZwd6T7G4owQYsO5mKf51yayGya0qlKEtrLpSntoCDG+lh2wkI2lYHRtyhoxWUtOsyxEm32/kCzyqQPnIvlhXVvW6EcvO1aGzcp/ZseTePnPvIARgsWlpfXkc9PSgrX8spYX97E1lYVh06ex/zxo/RsGnRg6R0T8lrbWqXgVRdElaYUigOVrDerInCWQM99+eYiBZgeDlLQyGRS0hjq0OXH1BkmsIqEj6X2qTRNwog8GvHpIDw6O5MU4i0LSBZPHhE01U8aaL6xgFp1E4lOXb62zzw/+trY7CgmHnsY9vsvgN6cpD7toCN7z29UUb19E/OnDtG+7FAqSCiY9lu92pKRpiRlCKYmYHNgrXInmZ5xLp9RevK0nlxn7HsWofE5ZCen0dpYRkipr2ky2zkDKzdCe2IZXqOCeJbS1a4myUYO0JHwrGHputNbbbtCpdqFBJ1XdlVKyFWu/AeUjX3UiAuGSv6a4xZGFnSmge/BbQh/AB7WUJt9aF6hOoCDWtvASDVUDnSmjtaBThvDqC+gCq8CJQ09BhtGOlEQfonFCExbgfmhmljhuoZCV6YgIg5a3JZX6p02BZBQdJSSVlyK5hzIOJjU+lsoxCfQ6DRk9o1rUj2W7DBDKRIzAhQLdUeRB1lmhYvNSUojEo4yZOA30ug3KJUIaGN56JrqRooFpsjYBJ52XWFuGc+aheo9igGqzDQGSqlSIzZTt3slvbWsoXEBp4UiE+wgXcgjNTmC+FiBDllczbjpTcryKsoswJABbglkIlnsyH+H5lBzaKhAxotIt3/PEzWNWKjY1PwzGc7z27Ol2wiFitnQgz8cW53RWmWtFIpaCoZ/TjvhS6rGF1itxfwgF3X6favCQ9E18dJjE1SedSvEExKME/Q5eK2TXLMjRCaFWJnnDOg9xKURUqFof2d5C01C0IcpWP2PP34KF47ksbpRRoqQQT5HF061gTb9/Z0725jfvwcHTz1ECMVDa2sDeSOGfqtMAWtTDEm4kZIfoaCQ4FqbJxdjImnIZTKSHMHW2gY6L7yEI4TKR3fNyf4YDPeKMoYpJydgsT9pzvlQ5vY6ZWaU3vNVtsDijRQck/t3Ya8TR21mN5q3bsErN6XGF6fvO75nBukzx5A6dhhuKc8jqLIGPJDcszro37nNjC6M75rE5sZdNBoN1BuE5nn8j9LVYmFEAn2WLoZ6rYZWo0PoKkufMybMd77IrSQhfUshcCeeR7P6KpqNLcQpFUasiFh2irbLJUofK2p/m9qFaQeXamB4EhmvDnwKfW0yww5Lgczb8gylpSW73chaINCO04N/rIhejoH8bNSVDN8Cj7gQgR8IYQ1yzNAc2Fa/lQxmDkX5AmMgW+jr4cnQN7Xwm6KZK+lVlSLKRAQrP4SKVGnq1mqgtau5i9DjOSoKGNzqNy01+GRbSjuc29NC+SE4zK9lWgDXagLmVGQtTExPq8POC80Fd6nV0K0Qi8mtyYK+HKA4gMQsW1AV3/Rc5O92mG1NwYnlmcM+bWBPYLzXU++dEUmXEIMrI7oOutrBxhLvPaVqGWjF1cjXEZrqAG04GmnI2nTA0oSospT2xPJZoXnwXhBNb6YHaLYQd+14wJvrVkIHMRXpMepqGWI04A/UESRdoJ/R5E6s0p6DMoa39PAvfT8utNuK/c7zaX0W2iNExB9T7MYSSuSPn3yKXpcylelpllJCpjf0CG2wCQSnXhwcmDIimlV2XfS+GEGw+ilPJXADJE2/s7N3P+TZwDaqTRdbbVcC9gdO78GPPjmFC8fTWFteFYOS0ugUtjfW0K3Xsby0jYmZfTj1+LuRIxS9tbVIqV1f6k7MDes2umLnlcwmkGLBPl8dMsOg50J5fJ8iQKaYl79fXVvF5W+/iGP0rCcpAHLnNZpKMA1P+IWGqaSIpWNuhtrZT+l9OaHii0ldlwN6cYQ1ixE/tAvZ1jlKBbsi4ihKGKUCwvE8rSelplImaBPqov3dpzDYbWLp9VcwfXAfXbo91Ns12ncuel3W9wpF0527wewhxinl6vKaTC7MH5yRVLHfaxHCpsuBgpRpJellLbr8fTl34njuMvRnKW/apYx0+0257GWYyIiEI/VZHLArw0GqqAo9oda44tKdKZ1n/tycQbji7K1NcrXBcuRBoJmk2lcT2iXxTfUr496ZRftNthV/ZWfCCEEZb+Lph5Eschh9RJ3K6UAlP96H1lsypDAvDjBmJJ8cKI8dQ6kW8PcK9Ei1JDXi2OPr+S5bOE5MOGS0EkT2SvRA+WFyCuprGMv/zY7K6NbwYz/3P+Azf/QZ9Jsd7J2ekg4GM7M5sIWarsH/LchNzEBDSu06wvZm9522vFVPcZEIbnttpRPOsiw8n99iGycKhHnaiHWjIc0JJmy4QV8tfGAr4r6hNMBNrYvl6zoOp3Xc6UuPFJCdHodBNzUHKkZx/DMD8fhT/CBhtJu2VAjk2FgqnYz4PuGbROdEvVPLevC6RU2PGHcDeSbQcQYO3qaemeJbnsc8mLuWpC/N2gn5ZdFG74c9GU0JYwpls4EHow+Hgk+CUQZBTakLMt9MrMZCrQlPKSkFQUaqCBsy16kEVPmW91GkwPfIrgIePT6OBw/lMDdboCBGaSmhj5HxHNotF9vbFbTqayhkR3HuiceQmTiI8uZNuHVKbxjVtLdxZ+WOKGgk6fCm0xlhuMtx9DQLnz6QRxdQQJdSabyEBKGVrcVlXHru24Jmdp88RmmdNTxILKonLkLhQLMs1JeMSWlB3/BEsYIRCns1mrQP+XJJszlHgYL0jJKIdvQz6NtKe4vrqKI5Jrb2FlpLyxRsV3H+7PuwsrWAerNFKaUKOJ12Fbt376Y910Q2kyHE1Mf6eg0FCtbF0aI0MPjyTRaLSOWKana0u4Rea1NY7SzPxONtnnQkfPr8LZjsCEUPzpfRNaVwK0fbUrQNSe90U008CDWR1OYsytJ7U5uA8EgRnwcJWFzX87Tkt2EM5P7ertB+fzysiH6vfQnfiShqaNjrKzkz4QEpLg2zmtVCqzcQObs4UmcaROfBgLM5oDZ42tdO0j+tACyfPlQGFgOjQwS6RmVqOKmCZeRPJ3+mhzdZO50PsUiuUGrHBFBDf0a+Lev1LZzafxz/8z//J/hn//g3sL54A/vHp0S5lB+iGVfCaTxLx+YGzMLuiNtKV8Ztutz+DjiVBNqecvniz5FK5fHgmbPYfeAQ3FtX0Ntqor8rD6MLqaFxiigjTBxcbM1nidZfDC1taQ9LyYoOTWF8DElKE5j0yc+Ga3BmZDTLxXUdsCBzbyolNNlMwVG8LSEU6paHgnKBPD8Z4vaUjXGfAzL9m6Lgw5IvHqMHHjSnNeCqV58DTaOneHWekjQPhAnGRFJfalz82Tp+T/h1ZsB2Wq5QITxtsMFDz3yBZBkVZrJC3GWuU0goosPjNX0XK2gTCophImXizME03vXIKB48No8GpXJiLMuSOvQsq1tVpLKTMijcXF9Br1ymQFnEsff+LYzsPobm1k0E9UVYlP6zzvn2nSX0qx1640X6vDW6AFJwUjnp0LGnJCPFZNwSCSF2sUk6BdhMwqXnvL26gcVXX0ePUs69p09ISs5S27yOrB6i+DF0YfosMRRTnHDfEnoKTyQElivPmvekqw8+691DrORiYrgRZ5qNUg0SBVmXa0Auoay+heU3nsPEgTE6Zz00trfhtn1apRDLmy1M0t7gW4iRbDKXxBtv3KH9Gseh+Wl6dh0ECUp7rXGkCyVC5rOicru+9l1sry9gLDsrFvdd26e00IXPNViWT4InuvGu9hENNVFWLi7dBOMzzqlsgs98JOfNl48GBUxf4a471yVdz5CgFei02tfOS5FRqxEpuYaRfhjutQ3c8Y93L3H0ryFYqvX4+TJ2dPoQc3R+yy7F4sugVBkD3e4MdAqpPttQ74ZrYb5mwSuYobuDuqhvhlE6GHUNAu3YE2htymAw6yTjP4JShhCSkZs1sHpUdSGLHtLP/sTHMbt7Bv/m3/9b/MWffYEguIdx2rw5mZZX9QlxIaFNyfOL3Jbmhq+r8CDi6SzG9s9g37GjeOj8eZw4cQp75w/QmiTx6X/zSVQufhkjFm9+S9XQKJh4UdquuWmmGZFnlc4j86ky2QylgCW6GTN08OIyHyemosZQYjbUqWMkMSyBi19jquFq+TWQzDYGbkUyt8gXR0LRBUQL3NJefKxkKuNRFHToxu6ysknflQHbBj8z+prE7Cj6aw2RnuEaVJvSikaHAnlCoQYutELSFCXvInwevoE5VXXUxqOfKOKJbocvggra/RCJfBzPPFDAfopFR84+iCfOTMlg+ncXbsPybErzSvT9Y6I2m87Y2FpdxubqFgWdLE6cfx/2HD6IRnUJ7dqqEjqkt9FpVLG+vC0GuIbtS7dqrDQu+F3J9/DAdChdSAQd+TPpiNHFkCKkwgi3urmFrbU1lL9Sw+FTD2Bkbo4CXlKJ97FGGcsUm+pCDNmROpGSNWbJYStUktIB7SHx36D3Lj1X1mundY+LAUdPSWIblhBvORi4QQ7Vm89jo7qFk48cxd2lm/TZHQpaHbTahNSsUaRiaSbxYGJiArduLdBzLOPw8UOwc8rogqk96dFJGOMHEabH0Fl7ATe/9XlKzR2UZieEkJ2IFcQ1vd1YpOfYljKIodVSDJ3V8HmyI3lkTvl5ZM0QjUpKfdVFyIhdJJE0mdSToKVAjbI6C+8rhTO+j777900JB9bxb0NtMKV9CZm3ExTD9QhHteD51fKGQ6UiKoGFoy7bLg2o+MaOktrwnXiaKhFq4pmvtEkHFkO+lrVRzsZRcV+1SSM1RH4Lls6tbUNZVZmaoCqBgh2gWUqk0cXTjz6OR0+dx0t/7zL+4itfwZfo153btPHrVXlDvAF4qWKxJMbGRjA9swtTs7O0OR7A3t17cWj/YaRjCQmadUImLXofLbsvJq21dl11o0SXnTtgrrwuZjo6d9dO2aYulrOaQT6HVCEPO5+mA+7odFo9BmWfpupSYSQix0HLUs6m/LuhWnxK1VGPAxnR3OIOQO3KDUqbjz5elx7UcquHWKunDrPeHHGllYGRfYdw5tGH8e5nnsHjj7wL/+DHPoQ7L78Md2RUSKGpTEKUF3jDdQ1GWo7UGWOidw9JBxpeBw1Kqbn+5RJ6IAyBPCHHY7tmcfZoAY+fGUeOgsaXXlyA7TLRd5xtAtFsdjFeHEWv26BgH5dpg26rhspmG4xPjp57FEdOP0yHbhnNzevoUwrHwbtLr1+8sYhmzcXMfAHr5TsigVwaHVHI3usqKoJniiigYbcotVUuQJyc8YFPcXGeaQ+UKm5tbOLy17+NmX2bmDt2CMnJUQk+sX4oYzyuRQkdrQNLVYshCZTdG/PWeM5PLmYeLKfLM8G+mLyyLJ0j8vyUbrMPJJ2RfpMQr1vH0uufx8ieWVSaPUoDO6jUexSsOiIImIinCW37GB8ZweLNFfqsHh544DQKI4R5uFmUmkZyZAw2K5wyt69yBVe++WncuXQZU1P7YGZjSOTYGyGFdnUV9fXbilluiXSiZDaW3i2+boQKEVRAQCA1WkcHs1C7wPNhdF1Vswr02bzfVO9+00H7rdPS4f1FPEON2XDrOk23BV+oHLBYg5oDBD9AT0dYNXNoiDoi62OJXxwHNEZVoSa3mao7qC3R5O8EQZnK6dYKMSCjhrqVwOlPsAMgRvrwMhhtKm6WrQeuI0JusMPjjwl5/B8epXns4fvIiQdx9uRZ/OInfgVblSrudmp0sPoCpRMW3Wq0SbLJjPjBsUECk+tY9qVFG2ituy3wtt9VMsM2BTAW+nOY/sApAz9g25HPpTwXlRHFgArCdQC6tRPFHDJ0s8cyKZmdjNRdOQ1RHo47dZhMnQ5qtCWoSitamCqQDU3CotK8Wke+GS1thBo06viJj38c8w+exurmkvDZWEm2VBzD7OQcJnfvQ256GonCqCBEHgM6Sojy+suvoNrrUhptExqriwSx8CEcQgk+/RkjNp/n3Vw0CYF1fKmWCP9pbNc8JvbtxfFYBR98sIRDR4os9ovF5euqYxfw+qrxHltS076kUjyszXZcmyubaDQ9HHvsURy7cI7+toFWZRlurSJNFV676uYmNpcrGJuYEqfueq2LfXPzyBUy0jxgtQoWrOPGDqfafEhZsqXAihZhX2pXosWVjCE/WkA6l0ad9sXajVsoL69i15H9mDl6CGHBluDLtR+n01XdQ/a2ZJTu6nlI7UMASqHjrO1mqjGvPluRCSFYTT3w8Hc8lsPma/8F1U4Zx/efx/LrV9BusSBfm9aQ1rXdxdRMDum0jRVCjywtc/jYXvqcBSTTdMmlMkiWZgilpynwE/q9+QJefvUbtBZbFOD2YnSckDsFszAzQp+9he7aJXTWt+AkCqKbxrvTM1TXVEvhSjrIu8/B0EiCp0IkcVQeKtIEcH3FzVO1qiFTXrEDwr+RoHVftIbwTVaIiqvDkNISIwKexY1rBVE7Kk8ZiksV6mjLbG9BOywha/hy0wbiABNqXhAG9H+VT0bWQKroPhQWGwpNGztMGw0o41YZ2YkUT1XZRmpqEYki1A49qs7FDPSedMKY5cu5fJyC01g6iVG2WKfNxBIuXLfqS3G4j3ZHi9pxt4jnEcW40pdDwpwavlXpyFNgSwoRU6muco3ElUIqH2pGHEyVkMSWrbPSKSRZeaFAN3oyoWpRWsxOeFWGCk7c4FSbSdcbI8s0XeuLUJew2gxleKn6HUqbPJRicSja66yzzhdMmg7nA2cv4MJHfxLtoCWv8QnJ8GXSc/tyaXDgqTfrYrjJB/DpH/0IPv0nn8I2Hepx2vgJma0xRIedx3Ya9LkbFMzKrNZKqzQ2NY1zJ0/hzIXzePDUKTpwx5BLdnH5D34Nfr+CWq+AVKeBlJNF1k6jRgGwRRdCIsWt+DghiFBUIXjDrtDhqlSb2H30LE5ceIogfoja6utwG9u60Oujsl3HtddvcZ8XE5MlbFS26XPZKBC64o5jx20I0hWhSU9bprHMtdeT0aMY24uxuCHzwJJJdLSYYGl8RFyX6+Uqbr58Ceu372LXsSMY3TsPK5uUYrM8mzZUzY0txsy4Gt53VR2HxR+ZG8iznY5LO8COyR7gURzWn9+483W8+sJf4Mh73o/69ia2t9aFrMumEh1Cc+lCGskcK2PUBPWfeOgARkYz9P146HsEVi6OXnsD63c2sHl7A4u3F+jre5gbOUhIOINYMYbM9F7ECbW61VtYv/otMRl2MmOSBUht0lDZjRGddW2i4WgiuOjtB6puxZQdVxfYpSs4IHsqu/uBVeMPHq/C7zuaY7ytrTQGvmWss821KztiLESzRKaCi4Eau1NwkpntTMJkKyFb/Mp1DUoTUENjmP4gMrHY4cknqVAkTatnDfXQ9mBofocpKy+k8LX0FIAVYQ1DtVmT3DXxlakDaw45LNERZ812SltoUwetvnQJ+2xKoR8S66rzTS9dkFAz0/m9ONqbTqgRFJz67LrjyM3DM12NWEPkbZnAKg0wS1E4GeHwzFm6VFTW9XFlYa4ccvQQuRSDoFGTJT9LURRU3Up1CxUfS1QvtdxJxHsb9Gm1MzdkSJl+SxC4p4AwWcxQkOlgs9qlgMUDzz46FHL5cmHJZOa7qQKG6og26pvYf+YRfOznfx6f+te/jyVzEyV2LYrzQG8XvZ6JW5SysYjg+acfwXs/+CE8+NBZTEzNisszIzj2EV0npNFK5SkCLcDxSxRIfCTsrIj4sfNRu28gn8nROsQo8PuSmpXLq1jaXMXhExfw8JNPwUll0SRk1dvaQI/QFe+IrtvDjddvo9nwcersbtiU81YpgBVyWYxMTSrVEKFyiHyoJjuboi/vMxUlZiA3VpIZTLfZlsOWK5TENbvXYrY7PYNEEvEOpbhbZVz92rewcfkGJo7uR+nQPIyULSNnkj30VSkgqi0aYmDbldEgj4KyQRcVq8vybKnDctfLa3j5uT9CYf9BqaEtPfc8Gq2+7IWea4qIHwfxdUpPExRU99PPGxvPURBNS7F/e30Jm68sUUBt0HurwollMDq5C3lG7XxRJXwUdxPKnN2HsNfApWc/jcriXUzPzeLuVg8lxCXl44vU0ZtH0kNtZy/mySJMYMi8qa/0CHVpRpdydgCJcMBkD+53RPl7VdTD+zChCO8hj+3MSU0tsKYciRX3IrKuFw6HmOVYavIbyuJb0jMnHIh1sQkCvAh57izMRWai2tTC1FZiWtaCY4OtkYZA6h0BK9DieK4RyeWrlFRkbMxI5jUQGV8eT+GNySvU9VRR2mAdbo8F/hQ5NTroauxABc24LdxvemiBjOlwEZ8VI9jZhNM3nhWMUfposLwLBz0m10lxVhV7JdiwEWaKb8scYtmUDCgbkWKGpRyhRS3A1DUpzXofupYYgzGRCGUZ8npbgmg4cOb1IzbNcNQpNKWbkyU0N5lLUtpWp0PTU3QI+vkZuJRm0b/6UKfobo3Rgeizxw7l6BtlDz/9K7+Ou3cW8PyffhaZQhGdThsr9SbKFN/O/dCH8Quf+Hs4ef4CBRtaS0q7K7WG1LVkZpJVL3oWcvNHsXXlixToRqWmElDAKE1Q6rXEyhWBtOJHRwkheVsyubC+WsHM/hN4+Ic+hlg+h055Dc21G5TWNkS2hjJy3L6xjMpWEweOHsD43CQhDApetSrm5ueRHZ0iRO3KcwyMFF2KXaGbIGRlVrq42q6kNSELHlIwYWoJjxSF4oStR8s4s6C1c+h5OYT+WLOqWatj+1vfQeHSG8gf20+IcgrZiXEYybQabWIjEe3oHfPoovQasNP0tQ12gUoImlt94xXcopQ4Q+tw+MxZ3Lr8Mra3qygW5yj120SfUNBIKUeIq4f9+6cxt3sao9xBdttYJiS1trZGyHITSStHAXcU+4/shcnzr6yBT2cujHWRndyP3ORReqR93Pzas7j6wos4fu4RQmb0njaWZI5Q9OjCYOC/OPDD0RMmMpXAFB8WqGQahzk0qDHv0Zj5m//nr0ccDSNSly6ehxEfS/GmAj28K2mXGbXtFSdL5NCE9KhmCkWGVjsLKzCn6jQywb9DLFCxwaGhqSEkUVuClq7j3KN6GConkSAcOnJoRdNQjSrKQC+neQ6bq3p6GJO7M8ytoQDGio/8/r2I06VdfyVIsQAgp4r0/11KI2OholvadkApjS066Ez14rAkXK5USgKTFI2ZZsFpAv8cSiEy+SJimTQFV0PGJ5hs6OjagRcotrkRfeaBI4Be0kh9A0pXXBm1WjI/GBrD1NfYsZGMUMmAUDIiDG6T0tYJQnYvUdrhsX6XpcxDfa7tUArFBWhBVZwmJGxBfmlXtavXww5++X//F0I2vPy5Z5Glr+3Srf9zv/mP8TM/83dl3TY2apIKCUCkz8NyzZx2MVKNEzoq7HsU9difoLzlEqIg1OL0pQDOB3pjYw0H5qcwOV3EdmUTy2tbtF778cTTPy3ic632Gtq1WwhbK6J1z5ndytI6bl1bx14KTkeOzaPcbGKb0rdCPo6Z6RkKQkW023cpi3TkkftBV3trMms9pGDWl2Fh1jzz2dSWZ0ZTCZnZE3FEQlaMqlgKyCZEnmfpmbiN7EgcbQpOLK2z/p2LKCdvIE2BtjA3gyIFr1gxKzVN0Xw3Y/JcWo0q7Hob1Wt38fWvfxFjD80hsydHZ6ZIaJE+75WbsHOz9CxYSaKCSUJ5tXaAsZEsZubiSCU6WLlTE2Y+11ozqSL2zp5EfITS6zwhyJ7i4vVDQk20rjIVMHmK3m8J17/1GVz9/Jex6/BBTB87iurVS0qjkNCbpIWh2ivhDgljUaPlpgD/4g6vICxDGEgyISZTGtGoTTBAV4ayN/8bDlg7IBwfjCAaHQmVpLGhA02oB2I5mCgWqyUKoBKmQjUqY2tGKr95N1SaVQNHDe3Yw0QzTjdc8WsLJHiEhobRWuBOVW8MjaTUzJpyY1EF/2HHTKWt3JXkXNoVPzuhySt1U65TcJGfA5CpZpvUjeELvB3qSitNLzfsChLjm8QWQmpP8WpC5e5i+VofiRBHklAUb1JW1uR6VY++1mO6gB9HOhUXJQM/naeN2hcKQMeUqxoOoYMYpVGc5nI6yjQQ+TzQciUycmSrwqdGS2I0oC3R5TWmTgt1sV1KoBFtjQNYGAVrbaseaKKtjAn3lTCiGcd40YLTXiV0w1yslDhaM3ObCZDqpqUNb3Tox3ZpLbJ0U9OhNpkXRemXlcav/7N/if9j6+/im996Hj/+a/8Q//3P/RIa1Y2BFT3fwJ6hbiCu4xm6eWASYrDHJhDuv4Dtha9h93SeUnIL6UIKI4yeGm26EJJwrCz6lIY6Ywfw2N/+BJLTs/AqFKQqq/T7OnqdJqHbAMuEQq5cXcIUoaqjZ/fBtfvYuruBkFLDfDEtEsFOgtIuQlt+oog+IT6nq+gIfb+JZCxHCK2KdkupzbJiaNcOxBfA0Xwk5pCl9CXs1doySdA3LbmcUrE8cvSZ2nQB9SjA1csbqK6v4A53z9NJ0Vrn4fosBbpyt4mg0sYSpcO3VlbwwI8+hod+8hxe+c/PY3bf03j1xX8nw+xjsSRu1+4gaY7SWgBJp4uTZ/ejTshs6c4tQmh9+mwjGN+3C8lsXPahEVmzsUghncREMob02C5C8Wz8u4Urn/9TXH72K5g/dByHHz0ldagm8+wMWutYVs6Ar7t/wuMOVNmG00Df44uVa5uBZA1qvlDFCV4jK4DmXUamFKqOJcp3fOlzHTYINEPeGgREyYx86L2hx5o0vcYMzR/ENScY8hzBaZSaI+K6DQcGW4/aS6rmm4Nh6IjtbkQ3v0aOlpbo4FtcKdKG+oMGEqDEt48bT6YeQDaVcJxlKpSlFkN3GE3VuTAiVr3W3FHraejgFQ4VTd+UOytNQCVnww/IsWKCOoQ9z4ecDxubicYNaSMnnRSa4Qp93wTBY75mKEB1uODahxdP08+ng023at8xxMC0223RgUkhOZqVzSjzf5pfNSTHKg+8yE9Wex+oAG4a0ZjlUHk2KrpLUDN1ET7ClXo2MKo7Dr7IULNijDKcDEZndsF/9TW0umUYGR5QZtE9Rxx7WLPdY/4YXUxBx0XC8cTslIv5XIvsUzqUzpbwK7/9L3HyS1/A6fc8CbNVl5nMQf0iDO+5bXm/sLo+p52ggzh78Bwuvv45rFNaN58klJFlxJJGuRygsb2O8uZ11F0Hz3zop1CYmUG/tU0B8S4FnkX0KlVKg2qo0fN449YSihTozp09Rqg1gYWlW5Q+bYoBa4bHYnJFGavyep7wuFymNYhEUEyQdJGNdglBcX0LOsWO0LxIoEE1LZITIyI1017egFeuw3R5IFw5bbsWX3JxUWbNJlPKU5IpCyz/XOMB+TrqjP6ZZ8Km3fR+Tj18FueffgILr70hKKe6/jJ97xbGJufRstswac94Rksg9fmHH8DW9hLW79aQz4+jeLCEVJYDKpPVTSRpX/kyV5ogtJRCfjQnlAqzl0HregPfeu7zuHXjJRw/fRKHHj0rKZ3Fopa0Fo6TF9QrdnfaddzXZG3pjWlAwE0NpicFwdAwNQpBgzMtAEH0ogaTEtI5DO4/3Bj3asWH91XD2lnLEnG9QdhSHSGOssxO5w0sukGsw8SWWuzUa+2Y5B4U31T5beBVZijSKW9iLo4zOdPXPoemoYwIHFPNB8pApVYRsC0DQ6UL9V5MIxgU/ZVLr1Y01YsZ6IWMuqu+seN96YUU+oXmhfEkfSIRk9dwt4xrFhLQKGVgWVuWGoaZJFRSQqvXQIVgeTY+SgCqBtfhImpX1AYS2QyaHGyzaSRyWUkh4vGEQrMDhITBLKFpRbSEyGFHp73RuJNpapVXU6eDskuU2alh6VvKeJNzrjlQ0hbahWkLC7xHazm37zSmnn8DnZXbFEznaWFyMPptUXJlaooddNUoEG3oLv1LmFOclBlBJ5w4WhTI4iMT+PDP/h0ZzPUpMEuKP6h13huwxOKMZzJblE7nM4gduID45FE6hFcwUpqFQ5u8QClUrdXC3YU3KPWr4l3/3c9g6uhDaNc30C8vwO6sobK1JnysdquPVy/eEv+9Rx85hUTawfrmOlZvr8oKZQjxZEbGkKBUye1WhScomYvbEdedNo+j0OfLFhKoUmBgZCf7hxVeDSWzE3DdzZeNTs+PLpvRmGipdXgv1powaa+4jEjp7/rtnuwjQ7swMxGYN108rkofPMbEP79N+6jUKSI5SSjddtFf3ab35KG8cQkppwQ7lUFx70Esfu2z6LXiOEOocWvrjhTUZyeK0ikME64g91ioJhraXHN1CPFTascOU+UlWp/1Jdy5tojF21VKFbN4/wd/GOOH94n7eZarAGYX/X4dRnaXkF6ZdMujU4FmsHPAkmzKVzO8fhBRcTRheccZV5JEiqYjtB0rat3puusO38I3U0m/L2crvC+1hsihNdgRdFSB3BdDBzrglrA9BxIUhmZje6z3E43gaCsrREOQoeomSMpnKbMK1QE0Zco71B9An1dt/6b+3zZ36PJojfRh+zJKi4yBHM07LUS4Q1EiqrOFuvPIv3Ow4oKrKJRy+uUpVUWm8/JHblqs9TMGw/GExR5vExppreG1fhnXwhgulNeRs+JKqYJnEpOOIC5RdIwGw/WIkTGQoDaGrsJv+W89FC3MYWuw1hGdISq8hzsIogNGbhAO7JYkwNNh4cl91qrHGKUUThKL3/kiZk88KvOELaaM0mFw3Azdvkm0KFWyRE/fljEqbvt7nQ7CXlvY4C4hsI3tOh38UOpCrBYabUIhDyMYOibL/EYohQ/Xq8EvTWPu9Mdw/Y9/FVPjC5iYmsIoBZnV2DZWCWk89Nj7cPLdT9HPoFSuvkLBYRvN5UWU1yvY3t7CzesrmB6bwTlKb1IlG5uEqlaXVtGteSjS90kmbaQpbeIOrFuhNNBk9NgnJNURBVQevSpmYjJa5hAa5voUz1eKxHSoTSZCQ/8KZFyLqQ7O+CgMChbdjS0EhPLQbAvzPZFOCGITAwi2SvN7GuUqBQ82ABHPRQqUXTpDu+Yn0elVsXl7mdY4g55BCK+QxOi+E8jM7IPR/DPsmZul59pBs9bHyOSYNAM4He3VW6gt0metU9Ak1NdlDSorQXuRzUs6aIXcPKFUP13CA2fmML1/Sgx1XQqwlqsCcJv+bXEtNjdOz48QJkvyaAEFdeEHA2AQaN9BZcIBPVe4Uz10OCBtvA1cGuzp7yNw/E5n9q9VdA80MgkCJXTHBdjQ8LX+linjBTJvJnDw3mqb6gTqEZxgeIC4JmUHqsDsa5cd6I6WGRr3ltqMnYr3qgUb6FGAqKVqao1whIFG96bmhOz0QlP8sDfr10eea1wstmxD0t1QdKACUaBkAijD4TwhkE6/hXK9hluvfQftzRcwP7oLH77wMdzeWsKVb7+INJMUdf1OuqeMElmnSmqD1o7uqzkwq2QUZ4U7VXwGQh4DpKSEDCPelUoHoUdzhPJgQElC67btQG9IB2ibCbyU9nEdzsqbOP3YUbz2+f+E8kOPo06BoUtpgxWuIz77bmSOf4jSkyLceoNApSUkyw6hGpuQosWBmovVriuFajWWgYGdQBBEbsAmgmgWn4d+KX3xY330PUKbYQ25E08gefEDWLryKZRGMnA89nXsYGzfcZx95kcluLTLtxHW19FevYPtlTVUKR27cW0bIyPTePjRB0UyZrO6ifXVFZTXasjYOZm8SGRSQrHwvRaCbp1SxASlYn1ZF9Y94/pegg4568gXszxQ3RVRvUw+IwP6kdWXqS9dRoAisEgppDNqCwpmMnGfgmGrXoff6yiRRy6yU/APfTYB9gf7jNecSymsTCE0lpRBaHFFOG5ZCnZtChiFmeOYOfBeQorfQJoWbXq2hFublyldjokFXaVWR22ji8qqj0J2mtLDaaTqbfSaG6j4t1HaPYGRo9OYLmUI4SfEZSjDOm7JuKR1QbNJn8lGjxBhhWt6SGCsuId5raI28WaSp/GmQGKGO7SKZI/6clH6g6zBuOf1UZASFZE3TdC82ZD17YxVozLWfdewokpRsEN1MNDcJC6WSTFN9d5EWoOHfJnGL9K/OwWNdWs0kqPhW2swMK3rVDqaDXSzPD0kySjMNHZoR2mt0zAwBhwQUXHQl4DcDAOejZa02cHmD3fWV6IVMYKB3rn63JboznM6yQRGcXVhqyu/j62FZSy+/BxKRQ+PnPkIpos/iusv/AnSlWuIv34T7uXXUPrZHxHdcJE1YZkP9qiDsmAXxc9IZVMHHZFqMc0ojg9QVPQaJcIRcd5MrfSg+FlRGhlpaptRrTHyYhvMVRqKN8adHkrfmIA99+ApnL96Fb//v/wSkrtn8ZM//XM4fu5hvPbiN/HN//RPcPehD2LfQ08jn+zCZwVL2uBcPOUmBg/wStD0fBmCZirCzu7xTrQeaOoKt9kZ5bFeu99rIpbMY/8H/w6u/sdbuHvlJiZmdlNq6eDC0x8G5Ueo3nkVsYAOZKOClZvXsbJKv9+tYGZuN97z/ndRUAL9/yI2CW2sL6zTY4yL4oJp9ZEnRJIcKYkBhSWS3oaobPAaNBodSm9DpM0Mpfmj8DJJNDbuotdu0bqOScAKd2qVa3scnj9UdoQOpVIZQWGMusIc/arW4BLCYZkXw3fFgo1dv0UlQ1Q/INZrISEgM52GRctVWVmioB+KhlgxPYE9u8/QEjZx87UvIVfMo96sCXJt0tfcutpHzi3hYOkMjr73FMZOHgRGUsLDcjea2LpxGdeu/SU2XlwE9o2h8MAuJAps1ELPioIxH7cET05InZbOaoWCrE/vY2K38CTDIHhrMNEKKuZAYXTnBAWG2YG2/+Lyka1rgEO0ZGgupfGOI4DhO6iO3vcs4VsL7sM3y0ebhd9cXawWpQRV35dAwzeRFSqWujXwUwwHRXf1Fn1p8UcRWHGLQul0RLUuP9RV8Ei3VMZKTE33iEZ/FBIJNXENUZdCgzhfa05FrX7puPmBRovmIKKbobGj3mLJAYvTrcTWW5try9jcWJYHsbZ0B703XsIPf/zv48DJM3T4HHjNO1i49ALq5a9i4/Ub2H94BgW66aprazL4a7JCKM/n2XEJpsJ50uoXcuDNIblw56+oABzl/6axw9nNwI5U0NQ0Bq3OoCF7OEBYGMwbuj0ezyGEHFOzdEZmAo8887fw0u1/h+1+DIXSDKVNJh585ClcOHsaf/r/fhJf+/J/wLmP/yZy03Owe4GY6Np+TE0y2KEM0/o8+Q9V33prwBrWQ9tBD3ErLdJBrsPpZR0JOjATP/wrWPjD30KH0N3B809ien6WkNUSspR2V1bXCclewc1LC6h0PDx46hxOnz9Ggb+PNQpglc0trN9ZBbomRseLMjjN6CI7PQY7nYK7WVZUDXpvSYc9KPuoEipKU8TgIBFPTCFINhF2F4UkaugDF2A4x8mMczFa2fHcWG8qSKmLIMXO2RSE2pSidSpVeO22jFrwHmclXanrJAhhcsMjYyLJ7QcuYnPHktLyTKGAZCqPmNnA+m3aR9e3sGd2Ft3ubWxfb8BfHsfp4vtw/nF2ZRoBijH4FCT70DO9hIRn9jyFyWc+gPaNG6i/8Gnc/OxXYe+dwszh40hSitwJKujSc3K4otttwy/XkMwfR2pir8iCD8o4gM5SVJnU1qmHAA4zauJEV5EacI4oRhENR5pjg/qpmtL4b8rDeovWFYIdA8taJwoYpDCer1qSUcdAKEsyrmMM3DLuZb9qMl5k1xh164JhEIoMGY1g+LODqJA7QFtKkiVCqUIeNYapVDCc9BnUqgZ8soixrp1rDa19Hkq3x8Dd23dx8/plzE9P44mTpzA5WsCrz38DdylAZRKEKSmYMeK6cftVvPad17G75iEX93DmmUcpdWohRreiH6M0gGtevpJ7NjJxNRuoBf4RiZXp+p55X22UiOag5woN1fSICu5GsDN4R3pYKvBxihMLYiJNYrDlWLyD2NQ4fuQ9Z/HvP/ddLN55mTb4FGr1DpzcLjz50V/FrU/+I3z7d38Dh555Cul9jyA/vovSw4yQZVkkr89Swvzz4oQovOCeLmGEzjGoTfKsYReUqIhCBNMo2Fpt5tB53J05D9u7iHMf+CGElHIb9W1sUip47eLLuHNxAZ1OHI8+9hgOnzlEyCWg1Ggd9e11bC2V6WLpUUpZFDY5z/LNUcArTk4LfYabKCZzoLj1b3RQJiTUbrQxXZhDKTtFl8oI0qmMWFX1Om1dqlC65ZISGsrZmbukkVaYrDOnfkZcOoJJ/jmEtBIUtJxsFn6DUi/6xYiNJyrU2JRLr4vDTxgUu9KI0Z5rUYqWohSWa53ZOQvPfuG/4oUXbuD00Vk03TZqa9cx670fk1NHUJxOodWtUWBlis0InDYFYAqUQZzWnNCoGfTpzxvIPHgI6eO/hclr17H87J9h5S++ieTBNEr75pGi1LNHz2Wb0sE625DtnQvjDr3fZs3wdmYhUSlhoPIUVVs15wFD3XfsqMGaWvHB1EE/ymCMQTf8neeX33GO2fkeXcLoG5mmZrFHoqahPchZpVbhq8n+0Na3vhXqIhdEc93Rmk9+EPW0dMHOxFBtgUW/BGr68t+8KQJDqXUabPXEhp9cI7MS6LPjrxWI2qOIXmidLNW1CHX3zFAKhoE5+HMuFHtBpGCn6j59+r4O198sTw47B8mY69HhTcjmC1JxLF6/ifaVl/CxD70H+akHxD2lsnYR7upNYbETkEY37AgHa/P6q0hs38bI2FG857HzEorb5TIFK04sHcSlhuUwRUuUGdh1x2LFVa6H8IiQoW4umRs0bG1WqYKRqWe41Gc0h/BbVlSN6iBymoaul5i6jRwqRrwgSUauPBlAKZ1LECvGphP0jFgLKuiHOPLQw9j76gIFEUfWj+3JbLtOKZuPkw+/Vxydp0ZtuDf/GBsbD6IxdwGF8RGY/TbyFAAbzJTudkX72zCHzRpGY5F+ttQ73CQBIeZzUUCnZ+yn4nIINpZvwd54Dk/+9E9K0bu6uohYdxUL3/4q3njxOkbH9uLdH3kcU3sn0at7aG6uwK1vYOnuCu5u1DE+lpe5UfavmN6dRXp8HEFiHv1WhX5mUwbkfCMlYz+VrW3EellM5g6hkJ+FZ+XgZAh5ZvPobxA6cgNBPabbUvpdYUI5OAnJSY2V2b46zNz5tUz6TJtV2IzCmL1eKsGk79VtlWFsm0j1aT+wmSzLwqdspBJAye4R2vVQr9kYn8khlUuIo9CVm7fw7I0tHDu4B87dLgqrH8HY/HHkOy6hYvrctQrrVqNA68YEVyuWovVOyufmi5a7lSalwD6dI+Ohw9j10D9C6dWrWP3yp1D74heQPHUM8fn92KpeR4+eWWnfw9LKaRn0PCj42rQv2a+TO8++DK339CiTIWJ/cr5C3cnWAUjqlTINoqW1dXCLUsSI0hJJnYc7zKHNiNS8o0Y9vLiDH5DpvrMAbip0EkRdqMiey1DqnhzVQq27boSBzmkV3GHFKSvwxIiizV0PelAJcVAJlDQJj/UYXXg2y64l6XAFSNpdShcMGY2xDVc2jRkqC6tQDB+ZiKn0nli2WGpfHBQ8S76fNPnocDLLO86KmEYTLS8r/Co7aKHGQnndHrLJEdx+7Vvo3VrABz/6Y4iVxtGljdVYfQGLL17CGt3qhfw4jEKeNksctdVV1F65jCP0uvPvOgvkWMGgPcjvB3y0QU1KKYqKyCCTOgVZevd0UwayOzq1MqE7glGar5nvpmkMyKXG8CncWyjVtS7o0R5OT10eJZK6oVI+ZeNSviwmRsfRZOk+NopNpuk2zqNRXsFYKS9DzpsrFXzwY7+IXmUDl1/6Mq5X9yM/e5A+Mz0X+swuoRiPFQs1adWMhAmhBBU5OPfjou8HhwJdk2WY+2msB3UsfOXf4vEH9iB3/mF0KBX0a0u49M2LeOM7t7Fnz0Ecf+ZdKO2dQ2djmwLWHbhuGXdX1rBCh3syN02pYxLlJr3XsTHMzB9Adv6wsLAbm1eFjxR3CBFaPtZXa1hd2EbWHsPsxD4KUkVCyi5ilKZm8iVK78uEijqwC8nBpIW4GfGgsuENR6TCofgld0vtXBb9MgUtniXlYEJoMxkr0rOh/UAoKsEoLCRkG6N9mTRQor+vtO7A77VF0BBaLLGUjeE4pbVGz8Q4BVw7Py+69K5VpEvWlfpjUG+js16mMxSI0S59ONVlZ1pQ3xFeIK960KjBS1qEuPbgwIF/iPIrZ7Hx3H+AcfcVbBuXkZx5GLOTj6LhtkXGW+SZweq2cbpMXE3tSCHm8QSEq9F8uKP6HQ7MjVUJJ6oBB0NJKp0+RxLJ4dtlcn8joznhfZS2wki4JNCjL4rFyrQVvk1Ff1zTDRTCUq91A17gJP3ODOq2DBq35Xb06CAnlS57oLR2LEIDbgpCpcjZKXT5dYxbQkeiPc/ChH5fUSV1a78rqMNRP1szwIThxXKv7Czc7aDhTLAKN+1BHx26oZwupysJ3LizgO1XX8FP/OzHkSiOIuiaaNWv4RahKIs28tbaFvYfPy9qnRYF0s72BlxKHZ84cQKJvI1qYxNxz9Y1I1MTYqOhcZW+cdFXZPU9xerVioH61lKigxH3beCCG1X/IjkZU9W+YO1snw5bjFF9KwitIYwXrXGtgEEHkOchZV6OZW9437OLTD4pHocslcLftk1pQzafogsjgVvfvY2FKxfxwOnH8chUCYdf/BY+e5kQyd6TIj3cbtXEc1GSdFZ6CDAgIhrazt3qtihF9tCxKO3uJ8DJ4fLrz2Ni9Q2c/cRPId72UL39Bi597S+xeGMNJ97zKB584rTcxf3lVboMVhF0+ti6U8f6LQo8Wfo+OQ8t+tnpVBYTeydQ3L2PkE6RXrsMx+3QZ82KSix3SBevL6K96uPI/CGUxvbQ/srSO9imz2yiMDaFtWvLaDdbSI6NKs6Zztz5cjBCcxD4B0ckUHwbJmsatbYMSfMyWwlKMc00wnHC4ukaErzOTUIrCd7TGdFZz7WbbEBN6XkXY0lKC+n3qd0pPEAbPjs+hssXO3h4lyvkZDfWlVnXRCKJHqXy7sYmBV1TrN8Yjji5jKov8TN39H7j7dULBSnxLV144sPI7X8U63/6e4jdWELx9MNws/ReOWCHecmMOCi7VkeaFDaTw8H/n1BjdfCGI2LhkDIjDTVdVoloS8Y9WzJQBFSEQ2/RILxPab+/AYQlHZ9AHQJT21UJJypQB4410uV25TpXNA83oCMYMnQa0E3s8Egtt0TFXsNW0FNGAEIx67RiSoov5tIt5jPKuQN7a41u8zcI5q/Tgnp0OXli627SDdulINb2uF5GEJk2RD+RRS9OMD+egZdK02aJy2AxmI1OPyvJaksEq9ksIklfX2n8/6y9B7gl11Um+u+qk/PN+XZOarViK9mSZck5YYPDMxj4/LAZnv1gYIYZBsYDj/DNw8wAM4DHwAODx8PMGGwLnIMsOUiylaVWq9U53ZzTyedU1X5rrb2rzrktWZIB+7tft/ree06dqr3X/tda//r/NZz81v/Ch378/XBKE8LqTbbWsXT2XtQWG2hV1pHN9qJ/3wE6kSmwNlpYv3xB0ELPxAg26hWkbYoZIiEJHG6H0S6zkbKiY0YYlDO/thL0oUKNDI1I/x4RzcOJnIe1Up36Fcx4jlkkQYTOFDoifyEFghnTTA40BdK4oNA4F36ZTuKZmkyh0CdjHZyWMTBrUsDiutT48DBKuQymL09j8tomHR5JDF1zO97WfghfPPUgpR9vR5E5WrS5xCFbmyaKqHPwgcGHCk8j0LOhpIlSJDqFvBSh3CVsPnIP3nHdPkrjRrBy5kGc+PK9WFut4I43vBs7D+xGvbVCqJBllOto0aaan1vFhdNTSFEK1NdTQrVVpbTOpVRwHAN7DkDn+xBUllFenEYqVhItQ1YB3dgs4+JzUxhQQzi4+1rE8v2iqsCjLIy+2Nhi5hghnbUy1B5TF+QNG2q2iaRkOKeqtg/9Mss81kdrrU5oZX1LDiUvWxD+WtIhFJeigKN54oGnoHPs14NSskXrJY1a2eiQ1eoN9KaKmLytH48eP43/+uAsfvnODdw9dg3dV0IpiTaaTFKlZ8M0BB4xYjloU1ahvCVLuabjiSoIb/E0pXjMIXQZmbF0MjechgoY+9D/g8zXrsbKk/ei0f9NBEdulIMvUeP7W0fBZRlvJXOuac6HNOv5e7Y51WmgBFFzxYnYA6HLeuivE3YBWzKutY0R0XHZUj9cwPohxnM63R8zF9TlwqwMqoIVqPd1YKkI4YnvRDDSDVpidlpjCy3fzPspSkM0y+3GafMxpA5ihGDacMoz0OefQWL5GIZ7y0iOjyFx8Eakem9Dgl1y6QGzYRMrevKYgSTztVmZhvdo4XjLM/QnJTprLdEVEgWBdhvL9CjKikJmPoVZZwLx4V5cPPk13H3n69Gz7xAhN27/tmiDPoy5C5eQV7vw3NTj2HX4FQCdco7I2frYnLmMyYkx+ixxmZHjwCMzmXaWkjtoEiB0pzgpQSoei7S70GULHo4umXGcMBXU1mHX2oBFaE1FJqzdemUC2x3j4tNJNSFdMmWt9FiXi1nsDiEdTqWbFTq1aSMUe8dE1VLioSgp+zKq1EebcXKyD2cWllHfWEOeUuAyBYnJW1+BQ//wN3jswjH07ruWPndZ3FnEGdx3zdhQYOYjuYbRJHQVpyDhplKopQKsPv4UUhuXMfrGD2D+9LM4842vYn2tgltf+1qUJgawMXeJEDGlQJUyfRwfa7VNbF7YRNzPIz1EKIoLQ56DIe6S7d2J7Mge2Uz1mXMUtFpAH6V5fpXAXYCzZ89g7fIWbt9xE/pGxuU5BrphUahPn4lQVZxQ/Nq6OZCZ6Mtpe8y6YSvjEO7qTnPdkfqgMkCLgmeq1oQ3uwC9wdLROVN8ptep08GY0sauymOUXaA1ROlhf34YVUJa3ASg3BTrq6u4eGwLyQ3KRLI1/Mp99+K37mzhbbuuo/VNKHarigT9Lqehta2yzLrGecSIFSQICfPYTyzQZocr45TkJZSof7i8N5SZ4+v5kfdC7RvD0r2fRPzUt5B8zbvQLE1CN9hViAOXCVhxr0oHqivZQqCCztSE7iZqGUNgFXTqyt1RxVh9dQe3K6SrZJ0GL1RP1/88COsKzkT0MbShJwRR0LVEUcltfZHUDRFajJUOCFVVWUTPbYv7jMrk0ExRukeBJbd4Furs1zGspzB09Ea47/4IIaSDIiTWcRbzaFPQYlRtM8PIRHJmoSZ20+JRSO5UXbx2dsGtEGpqolHbwrXrS2jUF7C1tAq/Mo/z3/0yEgeuwS03v0v8BnMewXv6+cvnjhEk70Wp4KNAyG9g7ySSbIdEn4WVHbYWpnGoJy+ChIx3WHI4bh2ZdZfBR1dCbzp6nIaFHShli9RWqD/syHTYsnZOUCgdMUNoDQOaE4r6hwDWEFO5cM7wns1CdGSf7YhbDHektNNkoSU5PdntpL5Vg5fLSx2Hdbw0HyrsdCOnvkGmwyODOHXycSzMr2F0eBIlQpa1RB+O3vmjOPXpj+HSyF4M08Zps7Km9bETjX/Xl2YGNws8ioStGqGQteNYpzTQfei7GGguYerrX8LSkw/Drw/j2sOHoOdnMHv+BF1yEvW25RERStta3kSz3EahN0+pd1nMHnrGShi5aj/yE7uEvLm1PI32Rg35TME8+ngSy7NTOPG90xiIT2Lv/uvEiYhrmk46RigzTWuD0jV21aFAxgX0NgUQpkRoO5MqZwCrYfjW0CR6NHZawTF+BLHRQZEmas+v0uNdRzDUJ/LXKVZDZfcd9kN0ubDdRpBMY/f+m/D0098itE7I14/h0rEl5Dcmcdsr9uEv9w7iV79wH37n/u+j/aokfnTfLcjSIasaPpT19WtVa5TSEWZlXf2NdSBdlLqWitM9T7ZMo8ZP0fpMcLuMwAKn6xW4FCRLh+5Gdux6LH3lz7D5p7+N2NG3wL35NvgFRp5NJAM+tAkQJCvCtJQZYd1htOsrvE+v7A53KBImJvhQ2Ca8Hh6qLw2ZfhjnZxWpIqB7+FbymaDDyo60w0PCZiewRBAwMHus5RgyXZoecDXl0TPUdHMIPlPcSq2cQeHk59GvZjF053uQOfgfaWPnxbaF58GaapNeZ42+mrRW2pQa1ujm1szpQZuMF0uMyX1SzPOlFqSF1EiL0skgHktx3w46MYpMdhKZPUWABdpWMtj56rvowbfEZlslHExdeALz5y/hqsN3o7xyAplUD536k0YihusxLD1Cp39+fFD0vBs8KyYyUoFwVwKLiKTA7RiB2ehhcprI7sxiGpuSB8+ighy0DOx2orlK48toaQviM6EirlbQfXLIHJtr1XoCo0ODUHXVzPbZ0ChOL7zB+LbxfGFQIeTTP4xYLiFNgFQqi8oWBYdmFalcrwTLkcndGBqbw8r5pxHccAPFTkpzghIyA5O489Ah/P3FB9Fz7ZvodxpCLxCpnxoz1VextbKIBqXUsZVT6KXXHW/N4HDGxY69u6EH3o1kzyh2/OzPQI8coPfOS22GlUcVpTxpNqmtbtG1NqAXF7DxzMNYPv4YNmYuQad9lOi6imMUrCgF2rj4tASn8eEjYhTSIATVqJbx5HefQW3KxSuO3oG+8Z2i6sGW8Kyi4HpZIQkrQsn9O3di6th3KYBXRAk2sD6fxmzCyNjpkHFjB8sVp/P84Ak5+oRynPFRxOq0wTe3EGSTojQad4wEEMsYiVktHcqMwAZ3UKA9/TS8zQpUuo0+rx+ve92rUI6t4Qgdah9/0534xc8/hY89/oDUEd948HrkWBGW60vpmLg6qc0qrc2k2LQhWZB0jomrQbMlYpJxrj3RntM8jtVgpVMGCLSnmnMUy3MY+/HfQP/ZJ7D4jT9H9ZmvIHHdW5G6/g74dG+bvEwD6a7JFF44TB/KGIWJk7L7PeiS7DOMAxVWuX8gjeGlSKP/COLo82fxjNeg1b9RnUgaRqhwhEdEI0QexjC6PUsGbWqYkZcmnQws4N+uIvbktzG6+SDGX/dmJI/8lJlfCzbh1y7BbawRPJ2hE3gDukIwlR6I3Djuyni+pVT4UijUnlUJZbYxKy3YW+iFnQwk0IxVkPdKaKRbqD1xDLN9R3Dj2FVgqn7gEtpYa2KW0FUyx4F0S4qcbt8A/XePGbmgh1FdXkaSNmaaTus2X0NcS2uaX4ODihlVCNVRO3qxIaOYrbgcK4nMagDs7BJ4hn4ROTY7xrFEFEitkiiPH4lfXCg/EwSReoUO54sCo/du6AUhRKD7nWDRwZb8HJNamVDJynXl9Q04IxPI9WSk7sQBrUmbiuc9M4WsdFNz6QHsGCnh5PlFrG/MY2RwEK0WS62ksevaN6D3E3+Ck1X62dYWnfqLiG/OI9eg4BT3MJGPY6iYpkNhHPFdr4W7ZweCzB66un7EhI3XsL2lCti9kdOLPKdkirtVbfHYkwA8OIn8NbdhjP5emzmD1fvuwcLj96F++QFK5Uew0bpE15+WgXWKRnRPy7jw+DM4/eg0DvQdxd6D1xACyZqUuJQy+vYsx0JpEG+q/MgI9CM+WpRuyWW5sc7siA5RrYpMPkx6ZKBGwLysmo8EIVXsHkXzAq09eh2uObV7eu1sqRI0l6KALCKJ+T7s3nMYM3On0eMM4rY784iNtFBaz2AttoGDY7vxe2/J4mc++3X8yYNfoxSyiNuHd9A6jpkOMnf3KDB5lNIn0lk5YNy0ErcmtgTWQoJuS6rIHpFx3RQkxx5Q2mV9MkLStIYTu/Zi7MN/hMbD92PhC3+BjeMPoPRjH0JqdC9lGGURJgpH3LSK6NkRufaFGnUdrqO+4lsd+vhLcEGjhvd2X8IrZE1h3WnMyexGipWB5PFtI/bv2HqL06E4hbmtK6VK37goe7RBnDqlgBApew4frMCYIHTERfZGsg+Z+efQ+9wnMbGziKH3/h787G7aQ5TT107DrV6iP+cpaNEJW6NN1kjI9Dw/BO78OIHdqGxoKWkHRNJXSxALzGISfpYvnQ++6T5dj9Z1w/2Y83B+M4Z973wfnSBpQWz8WBaXz2J9bg0jfcN0MFI6QhA5v3OInjqnUy0ppJYrc0jFWbkiI35ucT7VmAsTGHNUvgt8DxmNMaTmAVlXJ4VpL/eKxyMI4vNsnhTVub3qtKVWJSafrBTA6aXxWzIptWO5VcLnMtZl4sBjJwXE6BMhL61LA986nMg1sUkCq4xScHR8V7qly80NFHpuos/KDLOktMqrlLpx0RXpAqoU5NlcamJ4N567PIMKpWx+D6HNgEULy0gPj+C63n6MXvpfGNm/D/v3DiDbczUSA+MIJoYpSAyIUwtAaRpqYuSBVpnef1WkfEQLjYUFm03h37HGmmikWSMOMzPJqTTdvzgH1DSyQ4SS3/8bGH7nB7D4pb/B3H2fBQE+DLziKAVDHlZeIZT8KJ745mlMOkdw/TWvojQvayYm4my0FRc1Bp1hJ+SE+A06Q3uRyo6itbCAxnUTFK/oMG16kh5wMZvdtcWJ2FeCqqTg4Br+nEiqcOyqNdFKE2reNw59bh7O0hZ97ALahFpdryVNJ8X7iO6BzmXRv/8a1MprUmvND9GB2GphvbmJYjuDLdojhw7uwf/7ptvwwc8/gI8/8jWMUwq+c2gP3HqLDqAmoS1ab236TC12uKb15GXoPeKmg8xD2I4RzJSDm5tFvE5Rli43d6T51vK8qHZyyN78ekze9ErMfu5j2PjMHyP1zn8NNT4JvVWlZ5CQWCH7zjEZgCjJmtZERCpHl7+p8XUI5331NtcsXrv8WspRLzi/qO20hjhY/eOK7j+I2tDVoAzdX/nimJhIUJRbxm0eMiQUZSSU02i5BJMzKeROfx1js1/B5Gt+BIWrf4riPgWyygWkNi6hXT5PX8sEx2jBtrMETbk9vmUmm7iQG3TNBCrTPVPhPJQTpl9hzcGJ0Adv8IJLC4gW2er8ZVR2X4f8aD9tPkpfnIZYMs3NTNN7l1EsDgMrGzLEmi0WkU4maLGauSy9VSeE6IskCxfXYzCziV62Jcgv7qRkfMOz7sxJHZfRFsXjHC1Piq4OoxxLCHak++NK8BVKnWvsl1QkgewKWztwk2JiajgsbcM5U0YeWkemrNvEvsxmIlQSiOYRxKmGgyGnWZurW1il4FXq6xfGNpP/mMFebVQobrFXI+vyt8UWvX+EAlE6h9npGezc3xabdBY85LpZft8+vOLtR4F9rzc1Qz7NGhwQK5QaNukkn0astWkWoXCKKGXhxkq7begpfMxpM/4iooPaBmmp2blGk4yQU4vSxESmQPeX0HaSkC+lfhM//vMYvevtmLrnLzB3/HssJyuHyHe/8hw9v35cf+MtGB0cFikifg9GmmCJax6bScTlAIi1OJgH6BsYQLC0AHezhXiaDlk+INOETgK3M52rjbA5ry4ZF/OMfjvLbnM/LQEmcRbgDxKCX1tBcm0Zsd6E+Fy2uE3kuOKOrQmRc9DK7zuI9tOn0JgvI8YOSvE0msqXZ8FKsK++/hr8ylwZv/e9p/HHDz6AX3t9EgO9A/RaXNinw7hSRoKVYTdy9Hp0z0tpQ+fJmTUI61Zu3LVZJoi9BzSlqBRA63UCmTw+VkWb9l4wOIqxN70f5z/+K6g8/U3kxj9E96gAr1WxIm0OanSwxGKumQAIzH630lVXuEKE//7PozgakXi661Tb5SBeXr6pw/k161nGmTPqtARjbMQUo8VFN59OGIaiLkHSpEupwDN/h8mNb2HP236B0oTXoEWoKrb2JNyFZ+BvbYlrctxzjAm7UzYByg+Jkob7pVQoX9OtTNDRhdJdQnbhjePaUqydEAR2utHEwM2vQzqVoRSIkKDjYbO6iYWL59GbTGEoyRP+VazQAo8VS8I9YeFfTf/NGlAt+v312XkWbaRAlRczizQHk1RKfo5rPwnH6KMHDm3ahAlWXBTleTqxHBL3FDuy1KDrjdnmRTj87LhWg8gw2+UwYCtmW5NSghwD2USOFxekoq3NrL1pVsIhMMO/rJRZ59MY0lnlEaMmnbQ9ubRsIkZgjERrlQoKlN6wnLLp9ECUCIYosK0sLtAepYVP30siJSgjNb4Dcw99Gf3FHfR2SzzoAl0mFFCnZ0fPMeG3xUhVusZeIEiZ0abjm2uUQG31pFSooip8M6O1JulZKkm3jBEgvXZmS3ScnEYJQYo27eA4dn/4o8jf/7e4/LU/w8m5OVTnBvGqfW/E7ol99IySQqNhXXnW9w1U2EU12YCc/fT88wf3Yu57F1HfaiBOhxQPsPti8Fu3Hn4mgOpQHUQenmO6uG0jBMD1MKH89PYJfylYWKRrpJ2QL1HQ4kOvZRstbUnbir3j8O/uQeXSLFI8FkXPrcUynmlKzQnpFjI5vP81r8Dja2v43PETuOrkEH7mpjvoUlKCOGuM1moV9DT7JNNoU+B1UszXq6G9soLqRgV+ZR267kvB36nS5qL00Ke1HV+rGWluQt1c3lalAQrWl5Cj64rtvwo1XaEMqSlr3+MsgcnbceNIbnSy/A5R+oqhd0vKefExnJdRSI/9AIG/F9dy74ZqUQrZIYCFtS1+Tg1uqSaMYmi6GRNr8wbXCehETqUGEHvy77Fn/SHs+4mPwB+5CUFzFbHVp4GLT0BXKpI+cGCTTJlrO6z/zpuP10ugOnwYu8BhzSJMJ98OOEu3LLiii6plTKVBp3R5Zh7VkUncuOeAQGfW4+JTY+7yOTSWFnFwzxhSGXo4rTiSmbQUcY18dF7myhJbFQyNTiKdK2Bpcx4bm1XaT2VCIGlBYy67BMeT8nD5uhht8hgO6y8ZDq2RL/bYhJZ1sxJpObiF+R6eUI4xRY0m5cXBwzemGuIhH4QPyJz4hIKizizXzqzJBxfAZeyIZZm5zlavSo2qvbmB1fOXKNj2Id07IahDxBiZG1ZvozjcS/cxJgVc/nIp4A3SJrw4dQn1xqbU+Fhimd+zd2IHlh7RGDpHqEZXjbtyYDhi8MwqcUUq2dY+rQSv+Wx27ANhM8fSNrQZtxKUZVEZ19V0A4J8uDIZEyszJipXoNOjGLj7/UiOjOLir/4bTCZGMHnD1YilW7ZOlhIDCU8p23ywYm4yrEvbgu5JcmyMcGsK1bUKUruGhWTLHS3FhGDt2s6WtrOzRnNTy7hOji5Ty/mj+LQNXEFySUJMaNeB8ob1oaR7xoHBaYuKrW6wwW4C7X170Tu6T/S1HK7HatMNzLCMMR2MQ31V/Lu3vBJPLNyDv3ziSYwn83jnkZtor2WlG8xGGo2NDUL9RbQoKCe8OjbvuxcrX3sS1SbhJ0K3yWYgOlltbVLSQikvrkZtQmc1ngnl53X8FLA6i8RP/CSc/Xcg2WDpnLaw/bnB0BbDWEeClakodXhYYWNJd1S0ovqV1vqfjLBeXsBSeJ7k7Qsx4UOpCd+mibKwAuZyaNkEHLTaSToNn/0Khta+jj0//msIKFi1a8uIT30bzuIJgqecpmSsnk3bCoMZ+3UrD2gF7Zwulm3QIRtpm0e7BnkEYVfD1nj455lo2qZD+vzmEiZe/V5C8fT7TXazTlAG08T8qZMYpoA2xIXeVEJmAhWdiolERkZqnCBOkJgWVWsdQ7dei9JVh5FbXUDj4jza88vYWFukNGtDhnoThTxi7DvY24M0j/Ow3Re30IOksTsP6Qqc7nLdIeGLwafUdLhwalUbhAPE1luqJTW4BNfJuG7HnksSrww8d1g0zmsYW3qmJbTbMqTM3ndt/tlGCy12eW6UZXC71ahhceoi1DW3i9Kl0CboGlkvHZQCcA2yOjdN8YdOaK6/5Hsw1E+pIz3b1ZU5FIZGJcjzPS6U+jFV3IXmzFlkiixL7BttehaHI/TMg+Bc+wlJl4EOLAdT2hLWxcbvPEorFxBKWxuuLH+DggFLWNeSJpWkP7zemMwLqmCRzjqFwqHX481/+hd45D/9Bs4+fR+OvPaNolKR4sODr8l1IsPZMH3WrFHFmy5XQnFgEt7cBnCYZaLj4i/ou7auawm8orKpXUs3gXQeTW/Fo8sj5OJTylk37jzxbC/FrCm0G4oOvrR4dfJ7mXodBSSWICL04xKiRzYjstwyNtWgtLuHfpYClk/r9drrDuAjd74Cv/J338WfPP0QDg+P4lDqIOpBU0bhGpTGp+hZZfy0HGzrF6dwYeESBo7ejcF8L4oUQBOU3iJNAWp6Qeqag6+/A+ndk0CNrmVzAU65ilbdw5ml76HyxOfQd+QNsibYHDYcyTMuz8ZfQXTDbDlCd3cDQw6h7pJH/yenhP9ET+lQ1aH7YkSKVo75lhSomwRPPTdNSGQM7qWz6Jn+Mna9+d1QY7fQqUCRfPoBYOY5+GUjU8xsXccu2HCey3TYOF92TarkhDN3XiR0F12PNjWbcKY8UkWwX3ySeitLWCv04OYD1yPJA8hiv5XB5sYS6tOXcdXgiLC9+YRkZMcD1Ml4Rga1G5z7E1rkbpiTnURAm7NIqKO482paWDX0ldfRmFvC1sVLaMwvoXZxDnp6EfnhPvSMDCHT12tMKdu8GQLRD+OHH7CkKu8+CWDe9kYKDynzKU7XkfBE51e6fe1WXZAP++j5DPNrdeHQsEsPO6pwvYLRldJhTYjrriU4uV6kizkMsMIBpa/Bnt2gs8TAejrty/Q5OKVTlM4FFTqZGfXRRoslCSFTyjA0OIjlmcvYdfBGwwQXFxW6XxOHKeB/ATsHhyW9koaATgjvi183cLrNcF3DjdXKcqV1Zwg2VFy1AduMFzHSjBu6Cqe/3PHigMGBeH1TXKK9PL1ny5XmR3b0Fux//4fx2B/+HuaPTeDgnW+E36pKzcWM2tBTZwsYGR8yxWSRPKL/l8Z2YOHMw2jS5k0MDFAK7UmtSC6LkQ8/L88YsIiZrijn+qjVyjIqxs+gTQHIq3mSyjY4mLXpe2lCeC6lpsU+80HrbeP4m4uZLjHbxXEpodGULq68h2s0gl0KZP7IBN7zmlfi6fPz+Pjxk/ijYw/id7ND6BvpQ11Ryr1eQY6QIbhmSOh3nNLG4loSxYk9SO7ol2YK0384YKVorSw+fgqbJ08jNliCKGXRZ2zTc0tM7sCku4rzj30VZfQjf+Q2NP0VUWQVqWvrZmUksQ2XsINh/vls6n8o4mhYzH6xuUKlQuDX/Xu+DDa3eayGUAvPcHmJJJrryxh87h7sv/YoSte8jxbBGtzz3wYuP04fPE0PLC2sWqTokcV1ZKUQGC8eg6zcjqiaspSyLpUoe6m+pEeOdG4Co7MlNAvzihzMLizNYeCGNyPXOyw9Ds+l1IJO6PkzZ1BstVHqyZn3aQbGgZkWXTKVlathiZBWkxBkC2IuEdBDVHUKYPEi/HyeAkEJqfGdyF93DbC1hdqFS1g6fpxOtFlgZQ3BoQMoTaQNjG42RdaEmcTcgZJkKDAphrae1eHkupE1iYlUr7+xicbKImrrK7QJ64R+zMJ3pItGgSWdQIoCqZvL0emeRZz/5GvN0KdJ5aHS+WjywLlwFgO9k8hxT9Axbd8aXXeaTvtUvoAMIURWW1XZksykaZXB6PAIzrAGVduTA4TRRYye9fieEZx6QmOiFZPg2mZ0wffPSZuNKVQKo20WIq1w+QjwQUf2WVClo6w8jvkxMTzhAjyrX7iBBBFwMOS0sBoXR2sk6H74q0w5wvh1b0f5vZcw+1f3YGRoP4pH9ovyBqNbxzOuz1yj0lIOMEiJhf3yE+OYf7aKOhuX5mltblTQpJSJO2ya+U3s+k1/Murkhgyfzxk+OORaEzJw3WDxviSvnaT4OmYTRcRbDbRpHXCjIV7My+shRgdGKie1MFYmkdSYdeV9k3pBUnqRQEU8XURyYgQfevur8a2py/iHs6dxOPMQPjjwBjE35hoha1vFt5bgl3ZDTU4gln8KlaWLcPoStD6KhNIp5c/nkDyyCyU6UIOFGUKCV8Hr4fnaPKWUdPitLCN3+G3YRc9s/pF70KJ7kNh9NaW17GPZRuhmLy5StmPIexMWUYXNCaXUP0v8el7R/YXL6M62qn/EOYkwu97ehrTfl1a+oijNOT13zWIN2ZS58w9gV3ENQ6//FandqLlHCFmdpsCVo4BBGwhVow1OJ7KgT0oleDyCJWK4WGyoFLFovi7iKoXDvlHR3Y1E7HwuPrLdl9AfWsLNYULfFKUGNx44Klb1fMgi7ogc7+rJZ7GTTlQWPJMiLyEVV3ye0jLfyA9CyqVtHjGyG8dj9cq6LLggsIYQyYxIfwS9cRR6S8gf2IvKuTOYOXES5bPnxUQzv2OHqGBKYLICgvLJOPXguT/f2GcHjq0Tcg2qtobyzCVsTS/JcG6KgmNu1z6kKIAobtnzzCS9NnO8wGx6x4782IaDq+IS8LhYpgK65pV5ESkc7qPTl1JC0X+i96rSgs3yuAeleW4+L0He49k0VZVNNDIyjhPHT6HZqCKTH5BxDj59C30DaMdGJOhy5zRQdQlAXBWIa6sLZVNzuLaEEGJhTi8Cy/CxQ+CWeBbNQ8rsqUnGzHRDpIzvGqfl8pqgKOQIiRYIrSKLQ29+H9aO3YdnHvk0bt31q4j3ptFiUmpgXK11vSndOj/JaSl3fZv0uYuU1paw9sQZtJdWkK16pkDOhFwOmEw4TdMBm8lQKp2lVC4ujZZsTy+tqawELaTp9bNGlonlRZuUrseXFtC6MAU9twzIMDQdBLQ+Wsm0cYji581W9/G4OXi1EVnnTiGvwYBSPhSz2H/1Lvzq61+HD3z6C/irE49g7+gQ3nLTzfDrARqrG3DX1pDcswOVYhrtIuU6a1vIsrEqywDR2vdcyhZG6RDbNYbyyRO0DtYQ658koMEEVlq7dAB7m+dRuuNddH82cPaxe+l+DCFJiNyj9WLkZFwpB/C0hGl+qQ4a3j7bcUV9Sb0ESUFtc5qHtQ/smgJU24YSO0Q5x4wARNLDvvm3Lr1mZWtEQWT6YLWddRwt1ptisT9uQc9dxujKY5h444/Rw5uAnv8enIsP0wLjoVB66E5ZZJV9J2Vm5dj4wDVSMVKH4kt2rFuM6hT7NdTzZY8jcTHX8jy4Te+IJXiMkN7a0iJSkzcRuhqlQNGgV46h6WSxtHAcenEGvQf20AONU6roo5WhNGaqRidgDwUZJdwdWYwNQkp+wzj6VKpCO6BjCvF4xkjxNhvSwjY5vyNOwPmDR7BvdBwbzzyDxkYZ+UF63QItQvoxntpXLV90yEQ6Rxl5aDlZ+XPS69VnFlG5cAHV1VUkB4cweOO1BPMn4dFGka6UawcAYUwEoDquJaHkiwRB/lbDk4FdlwJT0+1FjFKUmBw4Cfn5Fp3QI0ysTKWFcOi6zGNryHPVbgNZQm8ZXcPyygx25HbSy2/SvU3R80ujSOnU5tZJ9A7tRoplhlRCTEQp2tpaXFhXN8HUjZCWsjSGUDNJRV3CbgchFx2UHShlAxbv74bUOFnzK4gtopXaomdO1x7vx6Gf+QUc+43fwPl7P4cD736vHChcKwzq63CqFeEIBh5taArKnswPavRefTOmP/tpZAazSBzeRfc3KzyuWC4t9S7FzuExI+didpdrV6IfCUVSlmb1yfgAp88xOEZIPQf/8jTdDkLXxaKMpIk9iZQm+EyNGTQqz1LLv0tfnPlPrB/G6gqlHN5691H85MkL+OSTx/FXx7+PAXYPGt+LOqWh/lIVrc1NxJN56FIvmjNVkVpiJOrHW2beM0lpIK31GKG05vlZJHdejRat31iSkB3bjNW24DU30fOGn8Lez/0RFh/8MvSb3iOk12bdF9ogs/YD1fFEiCBMlwmN2tYNVNavtOOlFcUT3Qlo4ZB/pGTaHe70D+EXFr65mJs6AmKtS7GybygiwKKGkAyY38HuISmkZ09gZJBOpSNvgr85DX/2OXhVgu4ti8r4kemYnHC8WPgUY8JbYIXsAtd8Gescq1TgGGKl43T+zVyM6Sp5iQBJZETOOZ6kG+PycGgT5+iB7jp0Lf1bXMpbbf4+LfTVM88iT4sllUkZZ2pZaFpqHlxPiMkMoXnont+RbRYeimecg4NGU0wUuPCtuE0cWMtWIT3S5ink0XfNVSju2kHZphYlBO5e8wL1rTh0nFUvfBOwWDtMra2j/NxZLD9zglLRACOvfCUm3vZ6JGixBZSmxpI5MRbweIE7ZtbQcUOzWetlxsQ9vhQmRzYbUlBHkxUtF5EuUQrLHU3HSDk32zVRA+AB5WjyXncxa2ijs/JFJpfHxsKyOAdxM4HTA0qcURjfgfX1BoIEB5S4UAhcyW0TkWGGeY5GckZY+/KlJNj7yrjm8lgJz1yGMjqG7W8aMEZYPS5Cc2JEKzw7vgZXOF5upYbEygodHDPwgg0Knndi9HWvxPLFL6P87BlJ6byFC3TuLKKhW2amkNdYg0nJdNiggszAGCGmApyBcaSvuRGpA7vprB0i1FyQwjgXonlDig48o7s239emIS37XR1cqwUlf/K/EHp3d0/A3U+BfqDHOCuF1llhQVh1fLtDw0nFnUAuwCT5UE+jh373Az92F/b0J3H/ufP4348+JtLPSNF9rG3CWdqUMSdnbEBcpEWpg/YAr2OuAXLHL8Up4649qC7OISgvi7+h23KkZhvwjC5TITh4v+XdyNKa9h55lJBgVjiULYeNY1qEtGKGONvl+KS6DFZCmzpHOduGa16o0vS8OUQ7PtMVsLR6yTGcrjxUWcPEBC2epMMuuY7xD7QdHBkbsacCL7Qg1YsE5c/jtZMYuvVtlE4RAll7DrGlC1B1X05fJki6hBAYpejQ3ThuOjmR7lPMLmBb6wm/TCCIWYJlzCKNmPkdmMFXn3k8fEplUyjPr2CrMEYoYI+EViH9JShFaG4QejmJ8YF+YZ7Dmmbw/3jsho0GXOHcWFllrlvZtNNhPhHnlUKErAu64oUr5EivbZjFgSnsc1Dx0ikkRoYpZSnSWk2aQWUYqySG135gHJt5hMPb3EDt/BRai2vo2b8Do299NbLXXkuIrUS/kjD6sdpsZGFeqy6XIt4gTBDkhdrmtIeuq1kXSkNAaRMrhK7MziLTP4REljlyrtAKKrVNYe3HKIiJSmwX3I+aGLRgBwZGsT4zg7aoUsakYM3fL+7ch82mHS8SSodjNL5YptgGJ+vfZmpaIrUTE2Ko/BunQ7GYeeb8bzIoHjeIlRcapTZK0t1YFLgQbnjuVjUJTVDa69SYb7RAn39BJizG3/JOJHZkcOE730ZjugJng763QEhntS22daKQxCUAbmowTy2XQ2lyDzZPnUd9tSzYzWfmOAc1Zr+3fCOLFCgjWGkdZ5TucoHp6qpLsiTzvnTNPJidL0jw0aGrt7Kiw+H2VB1JbCMa0BbPSDY0UZRCBhRkj149jg+99bWCCr946Tw+8/Qj0pRpba4hvrIqGlftIpuq+vAaZnqAAyfXZPlifO5gHzgAhz5Xc+qymSCJGZf0WM2gxTYrrxJaHrn9dmQuPAmcOyMORLmYASk+DMevO+iaOKXtcH/IjNRdAev5U4H6hSMYrghYL1YSs3T7bXrM2hhp0sIxX678mRD6vyOnHZ9UjGo1LdYmnbjZhVPYmaeFdOCN8Lcuwl1+TlJBHnOBFY8z2lCMDBJCIRCSpGuGjHnRciAM/fyMnVV40roRE1oLKjIphCedypic8syjYVUzh06Mi3OrGDhyE9LZktG+02bzrFw+T3l7BaVij5nR8yzM5XSSJZV581IwDGzs9rjIFmqmt+08Iy12/rssZA5oXJyVIManbos+b9PI3zDqYL5TOiNyyWba2TQGHGENeyLqxoW8YKsi3bm+W65D79Fr4fT0SksZ3H1i9Ulmh7cadCp6UnfQjToCLg7z8DEhKN00/8Y+gg59MSufkZWi61H1GiqVBpIUeGIUOAPLd6pWNiiV4sHglK1VBp3GihWX4GA+MDKGKqXXvKCFRxIYOZpMbz8Cur/tGr0/K7kGxvRDhYHJsV8SaFQXMjbCi9IsceypHSJpKcDb5xyz9bl4GKzcqFwgAnauZ5jXnAKxZlR1iZ7LKjLpqzH4qjswO/UgVmemkXjV26GO3g6XkLg3fQatpTUhznLg5uo5j+oUrroOzfkZNJbnBQnzZAMLgjACVZZHx3Lg+gWaU88jeLvmcOMxGhbjY/WD0JDAdE+7p6rVtnoOI0/pInuumXFMUwaSSYgX4rvvuAWvvWYvFlfn8Tenn8BD584hw1oA66xEsgWdLkoNjSktov0lzuJGD40/I3cEk8US6hcuo0FrhQf/HT7gWpzVJOjzMgF4i7KjV6N3zySCJ++FqtC9YtKwz3s/ZtzZrV6W+TICBA6MdZ0pHXUZDbwciQbd6Sg7L4eH9UIeYmE6yO7OyRgjrBBtcUeQwIoSpXEzb8U+fBUKEI15FPbdLB5oybWTcBbmaUPFpLjuSRHVNw9MsoO4URJwzeKVIGa7QoZ/ZdJAFTOphPBp3C63GQ5a/EAFfSVE74hn8lh2o7W4iHk3hf69+0Wml3U/A1kgLaycOYVSriCdNG11vJTdBG1roBmlI5JZtaKEWtCQbxavtekxQatlgpbTpBSFgpbLLtIU1HhYnu2/FSEtJeqeytSt+LK520b3k7PidqstBdnsVfvgjg3zKkWsSikjkzgdSml0Q1ATByLUt+ie1iQddRr0J6MM/rNR7fo7oStBf1XDUVvfRIOCUqJ3yHDAlOkQtrY2ZSSHx4agt5+EUnNgvW+P9aN64VOQrJfXDPtbGaIqqz8kRydQXtkwapwSrExgVghThTAIxbr+7tiDybWNk46OmCBICWDmd6Qh4hgUJs/atdI7zILn9+NDQp4DXfHmKv33vLz32N3voFQsi8f//uM49dmvoJwsoPWOWxFcuxNBdQutC5foz01BgapcR2lkN0rJHpRPXZRObCABzbcFcdbDr0t6FQRNK2JpaoXmS9sZTt3lm96ldhC6fEfGLF35jna2CwU6MVEa0aIyoYy/QYwOGTeLyYFe/OLbXsO1eDy+Po9PPPc41mq0Pjc2CUHOIVXqh5/Ior25TuumLYckj7ZxRsSyy25fD9KU7jIRWs+u0xpyRF4IKdufY3syvyoBLHfne1Bi27Vj96PtN6RAr2Xsy2i2S6nIZmFOZIKirZ9hF72om735UrHL1y8HYekXrOFzlHSt2Akvq5gMoDviMmOyODbr5BYxD/2mkF+8hII/C/+mNyFWn4ezeJI2F/eFEjaN05Yc6YpllDlRY9HJq+zC1DaFMGMq5ssED7er+W/cZETLnX6OAZzD5EyukdHCXphZRGL3AWR7+g11gOM/BdXG5gICyuELTBTlkQPXuLvw9QViGEvpUSptTnArqyN8GadTFNRBEDH9YTt6nNJxKgZa1OAAxyROz8yg8fgNP9nA8qskGMLovIseeiqFWD4Ph4KoE0+Z4m3LlimVL9pGnObGeRaP029FSIvHM/iEpPeUQEnBzLx/S9LV8EszUZHuSWVpGZrQUKLQJx2f8Bhrb60jKe4+cavy0BmSl3qnGzdrgI1KM0msEwIRdU5rJcb636WJfbRfKiZ4s3qppOlm5lBbtQlzKrjWW9GNWP0h4pKUUlBZ+G9h59MELu2Gr2X/zhfqOZIqi1mc1BLpflJQ9WsLBHDp+ffvwJ7br0O9Modv/pf/hId//T9g7dtPIXXwKOJvugHNkTz06gr00ircWlMaTX37byL0sUJp1pZ4DfIzMjQDxzggM1uDlUuv4PtFo2JBqHseRFKbnjLejiYuKTPGY4UbdVi+ijwnbZlF/DB4FlHJfeApCi5ngNbKq27ch5977R2EqNr4xvkT+B/HH6d1TYcTHdIOp9iU8vu1NULnbWkchf0BVTf+CKCA5RBai5+bhlOHKeegJioNrE4ocucNOphKQygdfSsyxx9FfPYMvW4O7ViXVmRYPpImnPmCCqzqsOqSqLKfU6sXrWMZlqf/0gGrU/FH18R/eAEmH3UNeJYOR5xDkKAsV9LBOJ3cLqUs+c3TKPYUaQ1N0Il+iVJCOr1E8UBLFzDOqSTlw3BTxsyRlUflz1i0EAOrWOAz9I5bhGVrt8rpaG4pGzAc6zzDBUFGDnEOdJVNnCdIPHzwMNL8kCVIxAUaL0yfpVOjSWliRjaVPBy4kfEDH5psgGkato7hSDG0txraMLxJOxLDtaOmdKtMsdt8BSJ7Y7hUokvEn4cL9dz50QZ1hA7WYeFcEFgyKVI5UrAlVMUcN65LsdkBD7ByAGIuF4/byNwl/xsHKE5B255Ff565DlGwYM6QJ2lpfWMdTv+gkdDhgKKMSYdXrSKZSVjzi1BExK4Gx6hKCP0pQ2i1vwcrs9Pmc4W8OXqNgdHdqPImZnoYBxnxBYQtoLsyNiV6YVY+JwhNTRw7+SJnWFcNU9aDGQKH40RdORUFP2NaqlzPBFrXLHG+p06jjTilMGitCc1heOcYdh84hJGDN2NtahYP/dvfxJO/+TE06wrZN90FHNqNNqXFjRVWV11E6si1aKyVUZmZk+ATi3ygtC0kd1kUd/PKrthkMoFhlOysxAmiFFAFbqQwq7rEGQ0xzAZsmQ5oiyek4+TE7EJTkPHo8CtkY/jAW+7CDftGsb61hU8/+wTuO30W3tqaiF46uTRajU1DSvUMxYfXI3eAmeSqhifhHdyB9uol6MVNusQ0nbf0TOnAc3g9tWza2ywjdt0r0bfjMNynHoO7tYYUrdPQMUcyBB4/UsabUP5beIwmXb8STr28cR335dWwVMf7osM+jur02tR67EIToRMVNn8oXBBSiVOqkKOTrHTgRrroBm0EOuVqvgzd6siS1YxlmAeV6GidCwLp6EGF6EnexA3HNZzo/53Ooa2JMClQ62iD1GbnUSsNoG943Hop+gZBUWCpXToleuVJQjLsd8fvI4KdVrSNufRxNs2EOVF5DIbdTvh6A6u7bpgDTpdhbGCrrypCptZplk65lhThOXhwx8YVOlDbUELiJg0WxjVTQvgUdu0iZr5LYHhhqu1H8r0SJtiVudGWOhrXyZTvRamqMWe0aYpSEU+tQcgjWRgw6a6VEWqzgiulE04mZwT/JLWJR6PkgQw72lSNAtHgQD9Wl6bhca1O5JA90beKFShdzOThV+tyKJjRqFhoXR3pSunIWzEct7Ju2I5ji9FOFxpzOnJItqapo7Elk+LI6SnX7ZhaKHPwOD3fos+1tUTfpM88PgE338boyBD233o3EqUePPWlf8AD/+qjmPrGA7QhDyJ+51G0M/Qa03NI0nv27NiNjZMX0Kx5ohgh64edwJU2PLK4ewUj0WqYKIOUFNxIRUQIoFzrdVzbRXPQKS13fgahFj8MNUbHTYoel+6kPVATFPhZbyuWwL4dg/ild7xJylWnV1bwPx99EM89dQLe0gpiPTlsba7R2mkZPp/Yl7HtWJZez0UyXUT86uvRTDTp588i4GYJu+944pIhtTv5nLw/0i6yd70LiTXaz8cfFo1+lmrm585S1AlONemZZRSDBaPrL485aiqEFCTryN4V3tULVqpUN61BPy+HNEHfVvt5S9pc3HQ52CSCtrnH0hQEGLmty6erUlZ1MDBFcPoAia0ZZGtVqN1XUxRfQnxlAW7dM/pOMrPmykwVp4LMknW5diWpmJbFp62UhbREba5v1BJCK1brfWaYL5EZK8N1kaIhxOHJmEsbZ6emMb73OmQo/QnsZ2ECYnV1GpnVOWR6SqYFzw0DBhH8/lwfCTwZFo3xPJz1uWXxEJ/gcYJrCsYSV4KOpAQCf0N9K/M9mRO0ek+uGD8EotTAg6YSYGSm0Ir8WYNVY80FYYvH7OcMZzXlDti5O67VKA4i7NfotAyyC4eiw26jDsJZGEE/2ouL7leFgky+MCR2ZRw/2UOx1VinNJPuTLIoNSfuWjI3S95O6myB4aG5Rk2yf2AQtfKqPb1dkYhJBHG0Cb0mhsdQXVsVBrziwp0ERSc6ClWHKGOVVW2wUpZvFxpshBs53Lg2bRQkHn5PpF6TIrutXF9oHRzcld8yQaFJwZ81pxqzdF39SPfwub+BFCty7D6I0YOHsEwH14O/+bs4+9efg+oZQOb2G+D3FaR7lj94Dbwzq0LM9LKuoFEt1BOrMiEWQVqQdFjO8KxfppEMNwGVDxiRrQ67rq6Ze9Wq0+DSV2xWk1k6duYjaVR0pR4Yl3ohTzKA/QlTcbzhzmvwvrtuosOogcc2l/F3jz6Ex+//NnrSlLrVAnEc8hk8cLc2W5LGzNqZ7+Hs1/4bFi9+B7h+P9o5+hwbqyYTKjdkFpWlyCUV5g4qIXBnfBz5G2+DfupBxFdnKfAVjCCldLt9U8dWxsuBMzEe5nYtsdx4kNrOoTKzvypkxm8jqofRyN/Gw3pp9lVomAhz4vLzaXHQog8gjs8sTRFo20ky7sJtNkndWkYmT4igdBjB1iL0+gKlHKzW6Zr6tbVod6Q76BrBMUd3FmnI2VGdnE9ZC2wVlSo78jLcjXKseKAUJZkvFM/AX57DNN38kV1XUbpPKRYbQtKD5228fPE0UvEkEkwkpMXk+iryAlTWejss6LvmmLBFVkN4DIeT0e3DFml0/YBuSLC9sxt5EIa+baojsRJJ0tvZSh3Yw8MWdREiNytRqyNX6xeuSooSK6WkfqOKKgXWXP8wEpYOwclOvVyWOo2ruvTotaktmmeVkCaF3HkGNMUeFOj31leX5dDgzegzr4m+VxjdiTILL/IIjZuw40bBdnUPmxYEWl+RUXXcuyNCc9gIcbrI0GH6FNZPQuNYrTpkU5lM5s3aFKMTrlnk8jn0lAro6etDiv9eKKD/4BGobB+O/fe/xbMf/RjKaw2oO2+GP5RHmsUoC2OY+d4Tcr+doSFRz+WOYUwbZKvtkH0QmIIJCw9yU0Xa/m7Hoi3qciOsaThWpuYFdmSo7ul0qN3hPQisPyjXZ3lywqM9N1jM4pd+9PU4OFzEHKVy3ynP41Nf/zKeefwpY8FW9SiFJEwUYxu0Czj7yJ9i6tlPoL74dTib96Nw8wT0vkE6COeQ5uFtNtNoVaTWGq+3xTiXDyX4FWRufDNysSycpx8QORwnzbXNtDUGJjAgrVQg6VvPaNVpCgNd2cdLRyGnO2A5L+GTg67uYqRt0+KgRaeKoK3ATG/zl2+t4tv1MgWsVaSGh4Slrtbn4TQ84ziiwik5K/trUz7dXZhS9nQNvx8WYqGiMQ4d3YSO6igvTHbgEcsrHRMHkQunTyKz9yranKNySsgmcFmvqooG16/yebRcI+Wquoxiw/sq5NWY26lN8MgPd/u4kxamN1ZNIapDKOdFW7fqSkKurW07dpg8DILh9EDEnFZ6e8TT6Oq+bFvj294gFAk0MjaEECsV+DkKNcVeLrNL84PDfWWNkCOrKnDnLbq3QWdVaWVHRQLxigTdu/5UAUvTF4ywon1efF8Kw7tQbtelde4pI98SANEB4HS5B0cjNuEiFj4ezJrQqtuPw4pGbr+70QHhdrkJhQdeYNaGy8ixVhHn5FjakcZQ/9gIdhw6gD5apzmVxcDgCNyeDE5960Gc+M9/Be+ZaaSOHIY7VsLorUfw9c9+CR/7rT/DyoV1JMb6CWy6QnvR9p6wE1GodMu8PT4g3Fh4GJtmQdjdhttNeHa7hr4RKVSYUklHXwpXGpoIZ9GVwnuQSkgH89prduHDb38jmlubmF2r4hilbh9/6H48W5lDM+YhPrQDG+e/g5knfg81/SxKOwrYd/sh5IZzOPXVj+Gxr34SC01C6wk6mBobUBVCcnU2qawYbToWPGw2ZPay9/Z3oHHmJPwLjyLJIpZOSuYofYcFepKiXNF0AP3ScsgvHrFeCmEpvS1kRQM82lp8MdO7Lekt/z2QYMX6RIy8eAwm2FqnxVFGavdV9ForFL2XKVjEJBVytG9VNO0JGHaEwo7IFadP95dCmC6EF2T4S64UM01xm0dkWA+LR0+wvIiLK2WMXnWD4ewEhj7AnZb66jySBH2TWYLTXB9gJUY2hrDs6/D9ZdQmFusa/TE+e6IbriLxqageg1AYLqpDqA5StBs2+pluO23VsfWKxhvU9pkpfSWx0FHbqpFKXfF7Eb/J3Gtti728mBN9tDmzRSNzA3tf+N/Tcfsc7BSB0tE8RCAjI07kMk3QFEP9Q1ieOm+JrzoimmbTg2jywLXUsVzrYel0i6wZ7tkLuK3oLkvzcJawwwdUz6u+hoepdI3DWmb4aAJjgsqigbq8KT+f7WEz07aI+vWMD2Ns9y7sPbgfvcUC8j2DSI6PYuXZYzj1J/8dy4+fh5tPI33NTuQnJvEf/uLT+Ll/+Vv4zue/gXYii1ihZEfYmvIlCqBce+R71fbFSk1QV9jp7P4KM4no4O5AjihoIfgBp5wFEJZYHU9nTFqWSuONr78Vt109gZm1TdF2v7Th4a9PHMNzixfhV8/j3Nk/p+ffxJEbbpZu9rn7v0xI6xksnV7G4pkqKpWYyDvFmNPHhhnMtWM+XysuSJpLJiAQkpzYjdzuI2g8ch/ilS3EsimKC3HE2VBGaCAxO7qj/1Ez0KGl8MtOCRW6T0Engu9tmwZK997XErRYKpe/PO54lLcQb20gPrYbqlGW/2bj0cDyP2Qcw24KCUQR38qNuiJKhe3PDtNeh7IyQXgTQrldCja+0U03rG4PiXgCc6eeQ7N3nE7QSUEOZkZPicfd5oVTKHIKQzeVB5tZNjgs9go5UZl2lQgBiltz2BEKRIecf0fGSbSyDH33+Q0KJ9xwiAZ4O7ZbXYEs+uo0kEK1io5+kxMNg0qdUNkA5HT9fncaHXaabMdNhYVr+plKpY5U77DQNXi0glujwsavVpGgRedYc9btOMY0PEzR1DGNOLqO0sgIKiuUElK6EOMCOzPruVbHxNOeMTSYvMmSxIFvzxhtxle4i2m196XOoI2yWfS4ta2LhmiiyxLK1PNcm2bZsY8usqWpg203PBAZmyZtwCalNil+5jxXxyNcMcR7ShjeM4H9N12HyX37kS8UCVUNYm7uIk594lOonJgSusT73vfTOLpnL+75/vfxwX/1UfzHP/wE1he2gOEB08luWyVRr2066YmEvY9u16nibO93hSUQy0X7AQyjKzZmuB5c24AwdeMmN4faCezbM4b/+y13yXD3/Mo6CpS6L9L9/cRffwpnv/kXKPbFsFVu4Ilv34P5U0vwKjeif/incNPb/zNuf9fPYaA/h6BC9wpZowjLn0uIwZQltXmKhTIUrp3OnELfrW+g9NFF7bFHRaTSIeTKEjotDjWciYSifhpX1OZe3khg8PKZ7i8wSRjWkUUgziItDlSCrrSkh2zC6G+VkXRqcItDhvtTr8l8nR/arHcX+ENnGGVnB0MxCOkidXz6lK3t6C79LWFR11kTqm7E37h4zeaswgbfwumpBfQfvIlOzX5J4ZhKwAV/Nk9oXDxHD7Ik3RCmC/DmZdskvgY2J5BRIRbKl05VPLoH3Clr84NgQ4IQIYbdDot6tA3KURqw7asr9ZXisRst2G4eUsQ9cjpcJfMzqiuN6Hqd8BrsvTR1wFDS1wwKC8mS7lmlHSBR7DNywcoYFmh6Pg5zztJJW6B3rONOZzhVao2CWGJSTOVEMj00hCTdj43VOSkKc80mpo3Uc370ICpbWyagOHZ6gA8W4aS1Ra+L5V0EeZuFZRWNwlqd6irSWz+5cDo6UB1xuG3K3fr5qEQZQq8jo0paqCUqzuRdo7jgFHJoFzNIDQ5g53WHcej66zE8vhepoR6sLp7Hs1/8Jmpn5xHftxP/11teh4FCBuc26vjt//rX+Nl/+zt47DvHoEuDcLIlib1KjEcCOUB5wzihzVv3UEqIHrftse2a6NuilVLbCjjKWsiZYOWaLqKbNvcs5eK2Gw/jrvFxXF5eQa3RRs/wCL507iL+/LP3oT7loHU2j8bGWzB2+CPY+7pfw+AN7xGrkdaZZZSXWmjmMtBZur4Wk5Otnr1TNRpkTHLkutzKLO3pBPru/j/gnfg+GqePI5ftQYsgFnO+EkgbWk3X/GAQXEFGfhmBy+n8qZ0Xyyl1999V6DcYWElU4y8ongIBojTRb2vRh0pnCJkk+ynNWJMREXGUkXWjO/ffIgG9DUl195DU8+yBlNIRpYwXf7veoK+6GWWhBeI3lUDRtfPPYQkZ7Dh0PW3CHJptM/XEJ9Hm0hwyFYLLuRzFohRibNnOov/M84qZ4VqhNVgekGP8zqOYz7UCN2TbR40DJwo4ytIpOnDfjBrJUK/rRkO/6EqLQ/soJRrmrmkDW/a+SZstwnRMTcRwZzs1EDP6YgOMG7LBuwbFhWzJBfcGmhRa8r19ElTanjn1a/Wy1ChiyUTnui26C9NUw/KOiZGIzIvSARDvLaGYTGFlfl46oz6PdtBz8CilGBjcj43KhqAa6Q5bdyNGYUy+lQ4U/ykUDN2xPP8BIy7RdnaU3b+6C7SoTtMjpBSENUDpmpoJBd1i30lj8Mp/Jot5qBwdWhS0eOA7nSti4OABHLzlGhw4fAS9Ow9g5eJlnPvW1+AvruAn3vljOHpgD3LFfuRSJdzzrUfwwX/5O/jcpz6LNnsq5nqMZqRoxavIFkvbgyw0ZgizBRV2Bq3w5LY5upDG0T2qo7qpATqqmXKtWNjwbJJLKGhi32689s59gnLmNioo12lN9RTw98cX8dSTcdx4x7/Djbf9LIYILaVEtYSHuCtozS+jNTNv9iQv+1bZmKj6jpjZsiyRgIOAxQQo8M2eh0N7rHT0JujvfBXByhra8ZxMv5jhMddeY5gEqO167i/g2nVFHFIOXkZME2VFe4MCSxyVdMg6uXIXztOm86Q77S4xBOVuQpo7b3TiCv+Fg4lyrPWV0yk+2pELZYurYRqlnTDtUR3BPvuhtXUVFj10HhaultFe3UTDNyea32iKTMvFk6dR2HkIxYFx0TIKZA5RSz1l/fQx5DnnZ0UCJ7DfUzLaERgNNgp6cUNlkJga6+hs8Q5qaGGjS7uaO6RxG1SYrW9Jr1FNynUiVrZBkh1Wt7aoSYJkLOSZhUVZY5Zgfi8MdjaAhLUp17VEUxvwHb6mpGkpi4GmI59NYoG4YrOzSoVOzjwShR4kpEPlyfMrV2tI0M2OSW0OBqnys3fMOvAdo5FmusEt85wCgwD7erJYmr9sE1lXZt64lxgvZekZZdEsrxoEwGknE2iZJFtroFXZorhnVC143YhKhaWCBNvSCA39QlWMiALRSWEVVITMwrZSKN+rGIQziowb+3ZZ3/QcHUJa7BzjZDNSA3IJdWUmR7DrlqM4dOtt6KcUa/XsWSw+8iRAiPJfvO4uTBZT9NchjPWN45npafz8r/8X/LeP/rHw25yBQVpDBUEj7MDt0b33lVHSVdI1S8q1aO64cpdReFFBVNdTXaqGoZBSoMPsQkc1XSPtb09Sl3WulNA6uNIdZzeh/QPyGWuELJusZUaZxZKfxKOX1rC1sYhMZh718w/DY5nsahOJ0SGM3n2nGKdsPHdK/A9ddn/ybYe3aYenWaOOPlub3a+qa7SmVlF83U+iSKdq47Fv0rKNCw/PCxriVMSX62vdSQWVEaLSgZlVidjv0Qmlu4Oa6kJYPyAltCMoquto4+KoK0xw2gqBsZn2o1kpwzWCIK22qBbE2FSB42uzbKbZfYPGXMeMcWhb37EEgkhjuyNYeCUodiI8LRK1bcO98mubqK+tmqFgZoHTImgsLODSeh2jV18jg8uGT2buRZuNUWcvIMGjL1xkZ+Y3O+lwKqjjoo4phcJEkkXAhUHNnSCmQ2h7WjuSx7sCbzkYeYFlK8fc56eAEpCtZIpr+Gfd6aEENNXFObIqBhKsXGPKapBTmN6Z4KlV1+tYFCZ1L8cGzLhBWeJ8zWkv32kKivWNMlTPoMgkM8fKdCjpM1QrSLL4HxfKnTAlsw492h4sIlrom8Ajsi4xeVj9Q32UOk3LPRIxQubfUNTXlHYlCyNoLC3RdcUlBRQKAGs/lWuoEGLhYe1Qwpmfn+Gsha3voKMLvk1I0n51sTsi5KKMX2Nnbs2OhWgTsHieUltfTNFoV8YajdNEzegynRBlVaQJefX3Y+jwfuy543YUeyaxcuIUGrMzePPb78ZNOyj98xsY2zmOAxMTWK15+Mgf/CU+8u8/irkzl+EM9sDLxsxAP9dubRYiiJo2cuA1ZaYPMplh6rCSPnlXEH6D54+wmEO7Q6nRysyjijmJmzNSRfTtgb5R5ONJFvFFLpNDobcXGVr39597Dl/4zKfYtR6x0cOo1TagN1ZEyDBz7X4UrtqH5vQc6rW6OTy55KJsCYYt+8S8t0GB2JVrjW2sEYKOo/fNP4HY2TPA1FOyvz3m2QeOqGA4odqHyJr70UETBdzuVPkKPpZzRWr44tUrR0Wt4u0LxszBSewN7BcHEt9YTCXSZqZLc6HTD3koOkovVBiAVOQfYZkOjpWq2P6AhMejjfOx2EPxs+HuZK2JGs+t0QP3GkwUbGH66eew1TeB3r27aAMyzSEpGlBuIovq5UsykJzIJmUCnr0A2bqIjTK5Nes6WUobXFEUTTLznAvMlnMlcsAcJWNN0cySMnEiMKM8bO8VpK3/oSUzut3jIypClpLm2SKrstIwPCqkutK4qEZl61MmyIcMb3dbYd/QAGIyvsO+KFyX8lRCiLnMqRIlT5UV+d9pTv36e5HKJpjbbu+wh7Z0TLPC4G/73QqS9hgREqlv6RtxkS4xKA7oGZ6ETwu+yq1vXsOUDsbF6Iw2y/Aw1mfWzcwjUx44JWy1UStvorqyKgiVKRKxwI5XR3OZQWTK2a3F1tW77ioTIHJPeiGP4fBnjLVWIIeTG3NtZ85OJnC7nhspPDrF82UJMxZGOxzD+67GxG03I03oaO37TyGRG8CPv+4Oln6En4tjFyGwG66/Ck6hiD/831/Ez334l/HIPf8Ah1U++kp0/xlRJWT9ew5tdA76SRZHVNLFZENb68xhApZMLHg2gLumYRDY59jt+ic0InP9PEIjoo/scsRqIHw4bzVQo8CSyjqSxvdm+zE5XMQ8HcSffvR7OPnVLyKXL4j5hb8yj2BrC17OQ/HmfchkC6hRmi+mxmJarEWhgrXfAiE8K1GtYBt33a6jVVuHJoBQuPp6eN+8Hyl2DiekGihDGBbvQwFXpmMsvEOm07jqZdewfmCn8AepZIUwXWb17CkX+MaW3re0QDZXYCv5RDYtHB+/XjV643YWMToF7QkRbgwnPC206hrqDr357MbRnUKrNLF5TdfbqKyto83OInRaNzeWcenSLPquvhm53kEz4eNrkWzhAvvWmRMo0gnK3TBzusYN8z6RMDUr1RCpZqMND6FjyOAK21JpR+zo2/UtGe42qMjabrHCathIDCkZtgYUhN1HqXfFOshKBrs7ygNXoi9Yjhrs76qusZbt5CSrzCi+gpYZL56ORk5E4in/+0qZUoM4SsM7EOcZDmVIndxsqFDASSeU+OhxTU94ULz4ed7FiYsWuA7txQRBJSXQsclFsn8IGbq/q0sLwksWHhwFJR5pSo6OY2u1DN2owmXUx152rSbqW2W0yhUZvObRHq6H6VD4TvsRz0x1u5NvO4p1F+XCCkHqK8bVtJmfjIbStSkbcKHf1DUMz4nlnNlYVO4fD8A7RmtM9LqS9N55jYFrr0Nh1z6o83NoTK/gzrteiSNDWdRW1wmNpTExMo4j+w9ix/gkvvS94/g/f/538Me/9gdYOc566hS0BvJCm9GBQcFM73F4IJxLKLSWOHv0A9bmahhXaE6V2eSCpZkD+zks6tIhtLR679qCBJn2aDfoYM6jQUjykacflYF+JkaXG5soZXPi3l3sGcDDq3V84t4voDx9CgVC3G1CU87yAiGtKvTgKFxCjsH8Ctrllmk8samJrV8razfHDQwZTW0QlqrXZC1k3/AjKPn0/k89Q8GIPo/M9EaDNVEDLbSiw8sqUL0cWkPXIGFE6IvKzoZoqO3IhsmxbbDhUZSALjKVFoVL1WrYtDTib2+fUXS6WfVWv/vKWmOXencQhOLIOqI31NjUlAIj76eNi1NYidECOnQNbcCcTK3Aq6FBD7xJ6WNj6jxy7BUXj8n8E5s2BOIEEhMo7TFK4X0V99FK0xlKP8ddQxmVYZ0tVvkKzPC0wH1tjBWQ9MRrToc8qJDSYLt6KkwBI6TVnRa6HVRlZXV0qA4Rsun1lRyc7axweU6BlWGxUh8cHNr0fp6UmjSaK2uEHLL0H1k51eNsS8+WYWw5xUavmYxJQ6VV15a5RDFp5dAnSNMM8EoMEQVRCAua0UJfLoPV6Vm6h3H5WXZU4QOA9bEabEFFaMoX0m1TBA4blYqMt4hvIgcRbTpqUsOK0sIrOvvhe4eKAOFoWdAx8n0+mctGscAOj/PB02gI+ddMiVjCq6xb44EpqT1TWRJJWg+OcPq8HkqpbrkebjGL+oUFQqNjeNdttyJWpcOrpmVMarCvFzceuYEC1wFMVzz8u9//S/z0B/8Nvvz/fRz+4jxQ6EM8P4Q4W4cx9SFm9lbg+h21XJZ28YzYIjerxNOQqTrif+gZ4wrfpI/CQZQ974t0jG6yAF+a0n2Fxx9/HJ/6xtMYG9yBNCGqGh3ozJsc6h/A4R37EZSG8elLF/H3X/s8ZRx1mScMllaQ2qjR2kgitmeX1Hdby1uSPchojnRxrQIFd3ilzKNEhZaznTjdC3a8zr/5jfCf+jZSCzNQmV5pxtVaDTOt5hjA4YhUlWOdd16cROrgh/2f6hTFAm2CU0g3jgqCYoyp5EPwDRRYzTIsLBZnT8CObXXHxKJ7XUXaZc9DEF0MSh1E8N/nDUWQskV/stkjn57zZ+aA0Z0YGBpEjAeaabE1vbLwgjbPn0WCFkCMYLBoxzMXlx1hxFIJFuUURL+bBexEVosfVKNiyIB0oiwsnsUinarxXNZsSqEFpGQciZ+GUno7CriCNGecgFSnc2RrVxqdFBBd3dNOt6u7a6+7Z6u7tINYooZenzWTeAFz0HGVmXiiU/D07CxOri5hZvEyZqaewcLCs6hszmD+/AlCPGuIJSklVBlpj0sDQocMbFYVLUddq8DWfhiG8cgSP/fe3gFszlw0cte+mdBnhxUm5mJgABvTc0aphtMi1qjfMnItvnWADoIOGhIVzy4OgLJ1Do0umzDdLYIUdPhaKuqfR13lEJGYpeWIn6GgK+aH2c5dIOqmCatAx4uhKSiYPQXd4gRipTzStx2Gf90eNC7PEhKJ4c7X3oUMHVRTlSrKhLTj9FlzxTyuPXwINxw6gHSpH1997En8i1/+bfzsB/41HvnbfzA8tb4xoDhMhyUlzgm7IvheshQ3ZQGi4MF6aEwHqrOCakMG2uUr8OxwuxdxEBkxtthIgw6RZF8Wl888g9/5g09idiuFnQNDgoyb1QCLXOt16xgc6MXOsWEsEEr+028+hMcfuh+xdBZMRGivTsOtrKGwcyfiEwN00CxQqkiojWuYfMDQdTHaYtcgeCZgecoT8UZpqDA599Ah9Ozfi9qX70WWMqBkKm38CpSd+e0W9NMvja5eVsB6wTaj6qyPIEwCLZlURmOZURyYYUfpCok8b9sgc41tHCp0oTalOkxf/fwm9rZOUTigE2hjk83SKMJsb3lSxJ3Z8uhmXYV8MWNGhZgo2dxCin6T08FSf0FMIbgO5CvL4rfSvfxaiYzhGHH3cWl6CkszUzj22AO4fPZRTM2cxAbL5/buxoXlRcTTCe57mlKLZ+tQ2hAAomClO2KIKqrZORGfysyWdXGv0Cky63DGMLDFZz+wwcrCco3uqnN0tzwen+IAy8Kc3NWhIDJ7/AyeW9tE38FrMbH7MN2fQaSSBWmF80JrU5Banj2Lysw5I/jHvoxpulc8gxaEndyww9k21mkG80qqkB8YQ2X5svgl8n3luiAL/cXo9TPjO7Ayt2p4UPQ6bUJX9S06BJJJqVk5rUCCW1RkhrWv10E0gRR2h5VNSbYZj4T6S9B2oQVd1SsdSQ9pm0b5Tc847bAYoTbKI44V5uP6T8Au330DUNkkmuV5TD39TTzx2f+BY1/6DNI7JpFiBZALlzE0fgCv3bsLta0VSuWSolNWo8NxabOCdUJFYzt6cN0NVwM9u/HJrz2M9//Cb+Dff/DDOP6lvwPTwVVhEG5+kA7MgtSeuGTBtl9s9yUkZpYl4iZBtYKgzmqxzUipgwMWl0A8Ns6lwJUi5Jwe7MfM8cfwa7/+MXzj+Az275qkVLUHpdIAspkcYQju3gbI5RPYNzmKPbv24mlK+T7++S9hltZ5un9Q3MDV5qrsz+TOSRZJRm15yfDJuGnA8tC1hnw51jpPB4TKaP3XuRYK+veWQuHu94rT9Ozn/ycahLQyljwsQkQ2C+F0OOa4LxmwYj8swNJdI0ymxBeIzEpgZVBV19KQzcVfrpHD4IvicR7pdjnudlhwBXCA5de8mA+i/JIVwgs5W4x8OGBtzE5hudCDG/cdEJt5RzarQpXz6yqlJWtziO/shcMDoIxAWMNHFolPSCAp0s3l6fNYWa+gSijLLUzi6jf+JGJD48hk6GeTveilE2skvxdP3vOnGBlNIzU4TKdKC3EZq2lHqhJyN7hGoZ3tKTBCgTOnMzcYcnWCoIOoujg5kXt1KA64bXrYJunWuIVPZw4AgWu6YEyZmDp9Ed++cA7jN92NW1/1NvosBTsnaa5vdHcaPcPD8KobaK6tEIK4QGlegGLfIJwCt+iTaNM9i7NGkrSpacHqND1XSpuaZQpOSWRpgzc2HxAV0nYqISmCdF5pI5ZGJnFpuYzaZhU88ebV6lIz4aI26zJx3zNQ4QC3L2sr1ADX0kHcvlAisUSlXjhP1l0cLkvHMVMGjqACjwvbjqHNCF2KKSXpXvrMKXFC8jeWsXjiMUydP0b3jxB5moIqIera8gJw+FYkbtgLTM3C9a7De171Cnzm2F/TZ6pSgI+LHtXM0pqQcscoHZ4YHUNtl8Lc4gTOnDuN3//0l/G1Bx/Gm+/+It7xjrfiprteTQGtn55bltZoRe6Xa6VypHMpGvyEcPiwihutNN92RPmgjbGTDluxNdo49vnP4Nc//ml86dgMSoT0CvR54vT9cUpnWfrYq7FoeQqJRJ4OrAQO7xpFhfbS585ewNWfuwe/9HO/SG/Rj9bsJhLFLSR370PwvePYWFpCpr4H8VRMRBG5VsXpp0yXSF2SfRSbdDiyR0HDzGzS/Rp/59sx98e/j3N0GO3Ydw3tSUeoSKYGHZdDg8fcuIb8YuEn1q151Y14pP5kbXagQpF5g5K9aILM8Fx8x3Bu+IRta8NUdrQn3CxeIHGhObAZg53lkpa3Y7uFiAhzEdfKLi5l2dtahTwbW5+IfF1NS1TqNTwik1D00GJSwF2iUzyx6whKw0MCVVmJgA0DdJUQx/plJDlTzfWKbDJvwjhzqeim1wgqL9FCW9+kh9S3G9nJ/RjsHSFIP4A8qzXypXkVQQt8+9q7Shi76U4ce/hevOI1A9BJihRsrBkY0TLmxBinFFjbJ1rwrJIQGMa3EzFK3MgkJQjlNUIpLYuuOAWQdEnSAC1FW9HrsgqWgQXMrtQP2+ZQYHsrvkspF0snz+Gpp85g9OidOHoXBatUwabTLXpWnoC6eJqQZZrSlL4JeP1VupcLaG7NYINSX7Wyjgyl0OlikWJUj7l2nuRn92m0BWmzLHMulRFpnq2Vyxjesd90uzjRpctMUzDcVCk05xeRHOkTYw9Nz4UNWrlgzMPRLEjIaSw3OAKrHabEk9Io9RhbeW3Z3Wq7WF54r6yPHyzy35aOczqV1FKPCsqecJ8StJFdrmfWKaWiGLxy9mlsTj1GSPGMiD8m+3Lop01dGuxBsn8ACycex9Kl+zC64zakltfhrS/iwC134+q/+yqeojVUyGcItWYp+MeRoWdeKhWRdXL07OvYMTGMZDGOtblBzBE6/91PfQGf/+ajuO2Wg/jpu1+Fm+6k19y/DxgaMc+6XIbaWqeHsw6fSxJ139QVWRb7/2ftzZ8lua4zse9m1r69qrcv3a839ILuxg4CBEVK5JCSSHk0I1vbOGLGjphwhCPsCId/91/i8E/WhO2YiZFDljSSSEmkSBBcABAgSGyN7kbvb19qr9zT55x7Myur3usFgMh4BPGWqqzMe8/9zjnf+T5uDLBFGKfbgYsHb72J//jn38f/81/ewIdtH5eeOifu6zt08Lbovc6fWcLCTBObXhvdoY9qgVAT3aNKfQ6XzwA/2d7B//nD1/His1fx9d/6XTi9Q0T7u8ivP4X88hqC9z6G2zmEPV8T3wKeD0Xfkekqhi85qZ16YleHwDRj3D6s9bO4+p0/Qm7rjtEtlH66yBYxvcESrTRrzNzP1oWMV2f4JAgr9bPLnFRjWeZELiJKdWyitK0XpYKKdqSLhHFkisfKwPWH+Co+2nDR1CNFKdQoT8aabGezCSq9fIdOgd1uD6sXL6LRnIPHp3+ermHQRbi3g/0HN7FIMLi8cBZ2iU+uLtp37mP/sIMepT3lxRNYPvMyBall1GaaYjrKXRuWFObRnxFtylKFFnm+ITf8/Je/ibfu3MGv33oHz3z9S3TAxQRKOC3wtMJiEoVEXsQWg0xeaNIA4+9JGy4hwcZjQYTEHkoCfiiIgE81CdSh3ohCgJTXZbpF0QwshDpd41ZCkRVLLWx+eB1v/uoWGi/8Br70m9+moNKQ0SLWIA8CY71Oz9Hj8QtV0nbzZboXlXMozJ+EO2xjuLeBDm3M9uZ1NGhzl+fZXLUpmyrPrXSmT1BUYqJgg9KOg627WDp5UaSEWJyeA6ldyqPQbKK9tYXGyqyMNvFnLLDkMF0Hq8kWwqSJojl/E54C8ZjIcGzpIuNOoyN+dKSOyO7erGVmhxY8ev/KzDoCp4LdX7yFg7u/xsDdpnOmKwq5qy9fQnHhBEpNRRt1C+377+P6D67hzu2baBy0sPDfvYLq0tNoHz5A68xz+KPnz+D1v/oxcOYMTs7TYUmbm125A7ovLpMw6XDo94aoUzBbOH0O8xTItuaW8WB7F//XX/8E//QPP8W502fw1S9dxW9++Rk8e/kimmsnAFqHanUV3KiE4+i17/N4jIOQgswn//gm/t/v/Qzfe/0dvH9nDwMKshfPnMMLF0/g7uY+7hAi/PTePpYXG6hwvZCQTJvW2hqtlZZNyR4F7zVKA5+5chnXf/VL/Nnffg+XLj6N5eVZjHbbyM8P0aC0cvf9jzCgPVQ8syJD5Myhw8gX0rhIaBo3byU6zgUhy0oy4NB9Xj+Ds7QnRCATSKV/WNabMyPm/FkqW4JSE6OAWufjC/wnzmhQRam0iS6ox/E40KRW91ZkkkhtomnFT2KBgYzMyngkIaWRhZ6BkkqswJkvdUhoYEin/Py5UyixbRXBVJZt3dy9hcO966gRili9fBmD7j52b27ioEMnGKGt2dMv4eTCOqozc+LPpygfDzwKUFEfeaEbgE7fAW3evvQRPD55BZY0cPl3/2u8+xf/O0rv/QrnX/gSYtZQYrKp0Dy0n2EkTYhYe8GJFZUhy/G9ysVaHT8eixEKtSIhDsr4S6BdbhiKx8ZSSTTFWX2C9b1cWAWjA+URZK9xLBzizs+u4d07Haz+5u/h8ktfQZX9C2OtNMGfj1+eiaIyvUCBp5jT5rd8nSzDm7MKUl8pVVrw5tfg9rvoP7iB/q07yBduo0qBq9RaQuhbYkiQo0NgZoYC1uaukETZtIEtxkIKqtVCFc3Vk3jw4Y9x8unzUnvRbgU5QnqB7rYmaD+OxtIqCabPzgomnDzRVM/QGJIFn+gVJnxBU9OyEs6bw53PGra3ruHw+/8bpTFtSlnPYeVCUwxiuUAc2R7u3vsR7r/xaxzcbKPqNFGxV3D17J9g9iQhxINDxMsXUbxxD9HOiILM13HyRz/H4XCI5iEdkJTaFWpl1IpFOPTMDkZDofqoqIa258Kj53f50lmcPnUa7YMBbm9v4ScUWF7/4C/wH/7ybwjdz+LUmTWcOrGCUwtNLM5UMFuqUzgIcEDI5dq9DfzqvRv49NMtfLxxCI/W2frqPNisbUip9sBVKM3WUJqpolRroliuokbPZKFCAZTue7mWl0N032V0m8faqXUMRy7+7lfX8Oxf/Q3+13//JygzIt7aRW5xHk69Cmv3ANbIk30cDBzh1UWxFqJUBhELMuT02hwYjPJdNikJQ+lmSibOYn62lXZnbTHFeFj9yoqtjPNz/BmahBkCp6EoqZTcoFvw5mehdJGMsqQR5o+NUIRKFfbVkTdPhvGzelBHfHuUEWMzHBY2QeWPVCwV0CYkEJ+7gBqlg3yCFyItP7xx5zpmKnTCuxbef+OXOBxto7G8jrkrX0WFFmp9ZoEWI3c3PXijQ9Gx5mHnHMu+WrowGDK3hV2BaGE4XGysVaTw3Fpcw/lv/jHe/os/w2ztDubOn4Hf64iFtxwyov2uhOEtbHUOsoFGHqlBpsyV2pmOhCFphkZ5wnWlhWwZjhIHQk5nI+5oxZYoJAS+Rin5ZgWKFvSv33wPN/tFXPzd/xYXrjwj/KJhyAiQEa9DC8cVJVA2hxBKAdcibLawKmo1S8vR/ohBLAiuVJtHob6Acp3QkUPIdPMOOrceoPZgFzMLLUIiM+IBWZ9pYHdvT1JFmyF/XokphUXIorh6Bts//y6GnY50mUKRz9XBW4JLGBn/vbHKbdoRNY47Y4FDjUqzTcHpGbyE/Z4qFXP+Uq6Lm9HI68Nfa2D9ZUIxdpfiZhnuwMe9u9vYunaN0sJ9WIMmlpaexYkTl9E6cR712RVU5+q0eks4fOtvMVyjFK8xg9HeA6w98xpeIST0t5sPKAXMU+AroUL3xHJc9Ch41WjzF4sW9r2BqH80WrPCnGhUC7T2CjhHf7t3eIhDOhT2ugd449oneOOT+6BVhpKY4saoEkJhpyQuv/RpGblsFU/fm2/N4wRdR4uC0zVKxz/dvEfPqoKTp1ewtjhHaK4uTIk2vZ9XoEDGMkC0d0q0fmpehA7zJOk1z55Yx/5OG39Ggfel5y7ha6+8COy3YVUbyC23EN7dQtwbCecs5D3g68kV8StgHbpIk37T5ke6X2n/UIDTBXY9pRLHSSNJ8zMfJz6TO0IEfnJ4laoejjvsyrDQdYFUOoKGaKnieNyDTsPP2F5cHG0SKdyMumlCz0+aX9bURVhm2DUKtbED1z3avQHKJ08RUqggz2YYFYL+7S107+5gc2+LUICFlfXzOPfyd9A4eRqV2WU9ksFGkRQYfCN3yyJsOXF6yQthj80zRTfcNjk4E0EJDttVre++eOp5XPxaFz//wX/Gb9FJWF2YR9Qf6Agc5WSUyTL3K2R5DhWmdS19tES65sUdON6cSfuazVg5DXBdfXIZrSnK9+BHBRkaztk8MqRNPIq1EnoH23jrrY/gzZzCc7/3LawRHLcFkbLWNjvtOPRyI3nvXCmv2fNhbAIFjzXp4MFdPs+OtO4c90EjLQmTr87QV4vQwzK8lQ4GBzdxf+sGSrRRF2bnsDjfwq2dbXpNR9s/cTCVGWAb1dU1eKqI/e0941WnuW9cl1NKd5rHgSo2ig1xZpVm15BWR4snJFwnO6Yqa7NlGOBxiQIypTpWzUL1CiEla0Bo+z3s3djH4IaLQnGZkMklnLl4BasUpOYWT0r3jblrYX5A17sPv7yECq0916HXWaa08dNf0MWs47959hX8/Sd/A4euZ7FckukIfuvA1p9j5ITCO6pUCnh6fgHdUQ93+n2sEAIa0SGSaxSwWqMgM7eK80snsd/ZxubOhqyfHAUXN/AFuTLdYYHQWoOCYr5cxFxjUQ7nSs3GQiHEdvcGBZ5tLFMKfpKCZpG9CD06sOgAccyt6tL6LdO9qNO1BN2RFOwXZ8q48PRTePvnv8T/8effxXlKBZcX1hD3e5hdX8X2x7cw2DlAfXVZKA1MY0jvteH5RjFS+WOd0Wv544gdiKLYyLdZ+nkkKrpxPNk/mdLDmg5YnyMlTFBAEnxiYzCqxssn1gPSluELpXpQ46GCsS5ORiVTARMjQFlVYUtN2gNJVOdAyV5xFO19gt+nn7pAD6hMD5gWSJ8g9l/+Fe58eBsrZ8/g6Vdfwgn6eYU2m9h8DXtwLJklF611lkTxRA9cuyDD5Npsw84eix4FCJbSKdD7uAS7c0FBOqElWhBnn/0yRhQc3/7ZT/DKN16jQ4jydak5xJpsZ+mWbixGqkoPu/IXCloXnLmezDznYMyEMPbV45OPbdBFY0krn3JwFgJ2wRqnSzx2QQjzLsH5j25uoHbxJVz98jfp5J2l13blcfts7Jp3pSjPKRgzzm1BaJoPJ/LHMddbKCgpZmEXxHyBaSOMhLigyprxDm06blQUSnQgFFheuEWp4Vn0t2/i1uYN7F77CP229qpkMqlviIVMyV1YakE1mtja3MZq2ZZ7YsnSDmSmMc5w8zClnaSySpvxeFg2dROOkq4hUga4du/OpJccjNk/IJ+HezDCvb/7LgVvhWKwjJW530X9tSXMcDe4tY5yY1YMVrmgHYdt+tsepUOsRMGuR10UT5yGs7sD79w6ipQ+B4SaX3nlNbT+81/B9RyszC5Imn1IWYVdCOARImnTLSwSKj/ZaKFBaGu7TwEkyGPg57AdDlCk363l2YRYYXFxCcE+PbdqFfN0SMyynZbXk6ZNn4LLcOij2z5EldbZytIyvcYIXtHGrL2IU4s93L+9ibv3tyjwlukAz1FK6qBDB8PSTFP2JBfegZ4YYTRpPVfZ2bwYY21tETuUiv7w3Zv46+++hf/hT5u0bAkFNmpwGdlRitigFJHvvUeHPOufFBOKQqLDHxppKJPeK2MKA1NAlzlEmVzTvlucIkaPCTmfI2BlOzOxJvvZOlwLNoqN3brhF4WMFgzzHfFUOnmEDHocjUIXo60ph0T954ZEGGqlBC5sjroD5OYWKD2h04Y376fX8fYPX4fTGeDL3/kOTj33LIrsO8jig0x4k5RlhAK3NOnk9ZSe5+PaFMvNBGFstN0Tv0MtecvBSxjR1bzxe2DeDj20SgnPfPXb+IAW5k9//h6+8fWvQRVZymUofCQWPmNRQW6Zp8iTC898StEmUEUxeNT3j1O00RBhrwsw9ybSKp9sHMB0jLwAhh4CQjq5BqGEwwN89MYb2MrN4PS3/hjnLl41HckRC44ImrNtT9yq+RrElFNs4VU6cK2MsijPXApTP9JES+0lqHT6SGjJplQqHLliXMGqEEz8rDYXUWTktXROUulbP/kl7ty6idNnnpVZ0pC9E2kzcZCsrJzE3odvYpZSK84PNPIMjLXa1IBvFE9SWSaSAqOEmnYDk1g29gVUU3Z1jCrF+yUYYLAdEsJ4FaevvILWEq2b1jJyLUtSbXFl9nsyHSGD6zyFQIFf5XhOtICcQz+fX0dh4y4FrwDu8jJBlruYuXIJr146h3/cPpTDxRuN0KUUqt4sYHZpER/tOhipPioMePM+PNqFLbuM0cjDbKWMRiEvAb5DiMbtueKM3qy0ZPjBUz5WFjRnbqvTRd/1USNExrQFhw7ZjuPB7pQxT+uhfMGStPL24Qaq3UXMsW4/3a8qPavlVhG9wKOAZcMZ5KRmWagFEtAPKc8sFEp44RKhrN0h/sM//AgvvnAWL37ta5QE0yHUbKC/34FP78WKHl4/0t3eWA9ai2qtqRnaiQilaGFp02JLpUQV3dE2ByLPJ+LRXKwJeZn4STqGSk3mjyo1ER2z32XEIilyQhmhtxgZwdCxo+1D38eaUGmYkDMztQtGLNrGtagtiyj4uAOXoOoKFldW8M4bP8Y//Pn/RwhjDr/zJ3+I86+9ilKNNggtArtDC89j2VjavIUKfPpiPw/muOQ5haHUaiwAqtJ83EoMKYyaJRNM/YInyMxiS29FwahWw4Vv/D4t0BX88J9+Sk+pKGx5Lj5bxnRWmbkv0Z53I7HniodsJ+9qXahA60P5riPkSlYA5RRAy62EUg9yKSgE9ZOEdOaw8cEHeP3N9xCceB4v/96/w/krL0pdiiMA62uzXPWQUQKrZkSadJrPa3OEINQifZYIFcZSkC5wbZCleAhNxbYvfpN5kTG2RC2W5ZNZBobTG0ZnrHYU0GbOFfOYnZnH2lf+AN/+k/8ed298hLf+6S8R9vdQsmyRpFbVWTTmVzAYDjEYDOTv2eWbU1ZBctnO4PSYjcqQaBFnuoBaQTapyicWayqRz47GaEtGbRgdt9uEGJax/uI3ceLCecwSYshRFOFOcNSlg6LfptdwZVrAY2VN7sLyTGXEvKNAygJhq4oyG+TSgZifX4Pa3gUotftXL72I0d4ePrpzC9d2N9AjdNqoFNGitdAkVFyvazlum559i66lUVWYq/s4s1TApbUCFlsFYbv3BxToqmUsz2kJaw7sOfEdIKTaKOHMXA3L85RJUBro+hSMci3UG6zlVUalTmnl8iU6jPPo3e+JxHFr1sICvXYtR6mk2PEpOLlI/CcbPPPLyhoU1hgZry4v4NyXr+JDSnn/4q9fx3BrH1ajgvJcCwMKwIP+QLTfNDg361lKQqGQb8XFKdI2e1xO4Vqo6J+FmkGQauCZZh1PmTzpLGH8cFnSeELzMEqGSxOdMbHrMTOEUmQ3w8+hdtUJTZE9NkoOgVT6bW0eEWfHb6ZGv1K7n6nTNvVDhNEZ5w6ho5nWEaVrGKDWquPNN36Id955By/8xlfx1d/+Nppzi3D7Q3iDofCGmPltFQxrm1EiBwLuHrF6aE7brUcJL1NpCoWku+x2TGkhy8LGQqWyRKGBi5fsxGyZObQKpWHnfuffoLJwEj/7/g/E7CJXnIEVumIjrz+HLcX3IBqCroyA1ghq2KXA1afvUQCm33O3NxB1RvDpzXylLem5u2iXZlCsz8Jpb+LNH/8drvc8nP7mn+LyN/61nKTCOucUi+89ISwr7NN914tFBs5z2llbCTkx1G1omUgq6lokQpOaGy891u6SQfdI2tDg4nGeg3CfUpSuEBw5KLBkdKRcVOk+zZ27hKsvfgOVXBUfvfk67t77Nfq9fUpNCmidp1SqVIbTH4l2WEzPUbsGx2kHVE5sFadKsynFIx7roo0bFFYGXZkOamwaM/xfWwc3JVZ0tqDnUW8HqFDAqTcRM6N71NWqFTLMO9KD0KJzlpPGgeJ1Y+pRshJ5uoICmre+gvDOJhQdhtz5Dg86eOq5V7BCKOjaJ/fgdbuYq9Yp7Qzwq962vNYi3efBKMZ215XrZKkWf0h7gzZ0lV59ZYZQVb0In54Pa6P7nisjZX1KGw8HIRzRXlMiRcwD61yDnalUsDRfRaUGuIFCnv794uXzlN4to9vdQ/ugTbeFUs/IwQ4djCrIYdBV2O2wAmuMRbpdszVFh3oBQ0/Js1mdbaB15hR++Iv38YufvUNZQAnVk7S+PFqxe309kcEelCyGSNcQyj7RWZUeq7IlSLEPIrvP+Wymy9ebzB1EtgQv4dmZucKx3lVkwMK4QWd91prVZLkTGcniBBVNcBGMJlEigREZ0qcy9lDRUcaVykjYJN2zI9PPRhDPN9A/0SoP9YDw/e093Pz0Dl758ldw5fnnMSJk0u30dSGdFyBH8kRXyuTXWt5O67HLlxoz6lUiNmY2imXkXhJLKqFmyphKJGxtPTIToDm/gMv/4g8RNc7i7dcpaFkDeJxBsuQHvbcXc5ByBXUVeQC5Tx/osAdrSGktoRXm74xYvZM2EOtsjZgNTJurtLhOC8THzTffwM/ev43cpW/gmd//9zh16VmUmBHNBq3CtDdDsjyAHutFYqUdSX3NCWqGWRyW+d7Ycmf8HBNArpeOTu34fop+fmR8+CKtwirWb4Q8ZufmcOHFlzF/8hxufvQRCp4jjtgsQ80mraOhJ7W0yKR0XIzOM2P6Ed2iRMARqQz0tLJIjFRwODYdallvRjiOJXHov063TQFXiSt1RJszHDnSxY1Ss1ljhBppuUIr0r6DXA7QpOlAOre5hXU6VFiHzUWhtQBv+y5OPX0BV08sodM5QKM2g1a5AKfHiDmmw7Ml9IQKpf99+ps2pecuoWGHDrX2yAc7y3edUDZ9mQ7PIqWBxbzuuO+0HTw4CLHd9rCx72LrIIbjFeSpFAsxSgWdBwxHAQXEPhqtCtbPrsKLBrhz7x4OD7pS9xoR6ury+qVAXrKl1yNu2dwlL7HrN61LVj9mCtDVp8/jPgXGv/6772P/9ibmV5ZEkXfY7cHnrjcDDuZkWVo6W6VmBIbQLGKNjriS8wgWy/lY2edrapBRFD1UJlkdM/wcfxH7nayKQBpgbCP8HsSp64ydMZFQ2e59YseEsW57VqZhMpgZK3qC11ywDYyZge/wIG1ASKSIr37z23j++RfpRO+h0+1Ip4aL5Dzwak/ZSinjgmwrLXGslDpiTJI14lCJFC0LrsV6gQhVQZa1qY8Y+ZIqIa1L3/5juK2n8C4FrQLl/GGxKnSCgvxOhTYMpQe0iFwmFVLQG1GK5m/sw7/5iTgUy/AyHd0sBVKgn13/xev4x1//FN21M3juX/47XP3Kf4UWz6L5kWwiZosHIvdj5Eji7EbXCptWYkemJj+hHDC2NTFYnR0LshIpX4lfOZFR1rSbQD9bowwh0ix+nxDtDhSd9LPrF3DpqWfw/ptvobu3KZ1Drnd5rJSVr4jEDZvyihdFEE+wiNV020hl5IYS0To1FeIyEslyWUbBlO9jrlCSlCUYMKWjpi3cmd/GXWY6HGxz6Ih8SxRjQktOimGWRqrM7uc0v7ZECHYgOmLx0glg/wB2uYpXr16Bx0xxCsD1pkKFgtY5CuCu1C49VPPa37FPiMkT/ptWQdjoDXF9oytIql4qoVZkBkGeglGR6a4y1O45AQ73HGxvhRT0GYHR+qGgwJdeLbWkfis0Gnq9Urko3LgDQlmeF6BVWaCgW8GQrmGuHuBEk1VQPWz2HPQ7bMtFQZVSxL7rYWd/C81qAbmzJ/DDazfw9t//WDrnxYUmnEHHGOyyh0NgOrKJuGaY0nKkRut40mgqsIprLpdop06FkMfiJ2U9UbA65sdx1gMuKaSnAvMq9TGUDWJ+LRKfOjvj8GIdG/hSE4VHYT1O2Tiq+yZlkO5eJAXg2sISlk+uw2VxODo58zmWB8mLHTwXhxMvPCOOLl/aIj1z02ITnOKkcT6+qeJOzJ/F1ps+MjK+nEKInnvCIRL6UoTW3DyufvOP0Wu8hHe+/3MU2auxUBPDSzs/pEStC49TyphOodEeLPr5cO8Qg50OBY8ZqMVZNvTF5ntv4/U3foKNxmmc/oP/BWd/599i4fQlqTcoqTfF0iTgweIcBw1BVdEU001lFCqzDIB4Ur1STQaqI67ghjPDbXb+/TDxeUzek+cCi5RyDHvoHezS6V/A0rmLaC0u4cHtO3jqwgXM0jPaYsPWmFMYj4KWRmwTrr+xNbU2rDGy0hXesaCfSmKKPuHHdIjETdm8hjQ/KJXtuSJmKPIcrDvFSMB1ZKg4qXlZU6Ly2p3Jk8MqTiRw2CW8XoV39za8mVlp9QeE6L/80lcwy6NrdI+Y6MmImtHI7miA/ZGLfQoQ+4c+vGGE+ZzCaoVeh15/RKlTv08Hj6/E8cml9xjReioXbZyZK+L0vI21Vg6tElCiRVY2iJ1dqtgjtNvrwKWUj4nUYZhDtdbEyVOn6Gc+Bbgdre3mu6jZIZYrCk0CtByotnYCtAcOpZtMKLYIgUYyJcKcqQvnz2KvWcV3v/cjbO7uobjUQtwbSBPJ54H5WHf8YBzXI0NvErs9j9bCwCipFvPGOSieFOo3PqaPZiR8xuFnNdFWnrK7merswXT28hybmP+R6OhHuiYUmZZmNgVMukAqxqT3HBI5mgw3J0pIaaEeAlKxzCxutAcYcDoiI2P0PVYayBW0o64x9pyk/k8ij0RWN6nfZpMMHl3h14kktbInBPSF/GYCoTwoJnYaUUDlD9Go1/HMd/4Ut370N/jxD36AV199BYWVJvw9nbIxhcEjdCSzciMKYu2OsPQrVQtbH7yLTw9pc515FucIOS6euYxyvaaBJo80MKazQqktceBmIp8ED+u4MStrTAVQaqxxnkWcdu6xEmnSveUgbWuVVhGQi7T5BxdyLWHuV1GvzVNquwuPUg+rWseZK8/hVz95A7949x2cfeYq3v1P/1GmEMTII4Q5daNMgDKA2soEJcuo1D72YJs438bD0rRp/OEeQsdGiWkLVpx6BLCDT6JjxkXxpIyhL8B0HVnbjYKBFSaEyDZyy6cRffA+gpdzKLBIX2cLpy5exLOLC9jY7eBTGSGz0XMpKNB6YI4gw8I+vVe5SOlcORAZJieo0yEbERqrCFE0r0K0CRVx7VSK9Xl2ozcHaVwQ9e58WVGQiyW9ldpxPJRGSn/A/ENf7meOTjyude0f7KPbJSRY0N3uIMhJvYppEqUi7ZdKjDalo3tbFLgowBTq3NJysFIrY+v8Ot65dhcffXAdV5Zm0efGT6+vZz55EsM0c1Skm29KhvMDWtv0z6ErwUuVctp0J04s7MYoXqlHWH5pmsHju4TjgudxXJixkICM7xrRQGXa45zziwwuJ8mi3xONTcePLLbMKE9CJEsK7KZ+Ml2A18wJ7Ufo06kXDAbYpc26ePIMyhSoXNcxAoB00/nJxhr5MDpScSZQGdQUZYwrJx2C4lQ9VH7ftowVeVL30d8Pw9C8vv783KLPe12xPWMzi1azhPPf/Fcov/r7+PE7v8TWu+/TYmuJiakn6VeZYD/9O238TvsG7tx+H2/+7BPcKp7C+p/8z3j1j/8nnL7yIir1ohFu03UWJrDajBKYCMpIgTWG7awl2tigYRxw1Jgjk3nWwsNS1tEzSR1nsKv5NqxywWkkz1uK1AzLVUeObCCWmQ7Z9dlv0/PpycY5e/UZ7LX3sEPP6+Lzz8Ohxaxo8Ug9hFFqomCRdKXTtDDL2VPjNOIhqcT4uuOxPA1/bto0DqVtwZAOsnKN3s8Xg1OP0pbAcVJBuqTEquTZREbYzyibMuGRFz+fjD4hjYUV5AjNg1UuKHV3Nu+iPLuA33rhWeze28D29pDuSYiDwQiLUR41lukhNFqtWVherlJgyOEeIb737rrY2O6gQIh7qRZjgQJZraCle9jCK6B0dtelQ6xPyIyeX7HOj2EkLkC8Hjju12tV5CndZJTFW6CUr6LZaKJSqmDQ7cOl+841xEM3h+t7Hj7ZZ/XZEI0mHzSE7BwFn/lVeb3B+dBlhfC1pQVs0rX85I236RCmH1Gq6NHnEUFHVgWJtHKExIFYp+EiQ0MBN+oPNXMgZxuaUqYso0y6/gRnz2fiYSmoY8T8jv89EaLjbgBvpIotjG07NNP2OW30kHU0Uam7r9aGspT1yIsSmzDu+vCois+2XEU6Ffbg1GpYPXcOeStPiIURVlHPKJnCXk5m1WypP+iulGVsl0xNJ7aOpMBxmiEZhdCMHVGqzaQmAznrvItpCXeA2G4piKU4z4ziZ37rt3HnxDre/d6fY/XHf4dnn76A6sI6nfo+Rnc+xo1fvoM7XQe1F76Jp776bSw9dQHlaoOvXpQybG79R4l1+QCeN5JAo/XAjFqDZVBqJtIkDTV1zENTWYulpAVsTdnATwynR8ahRs+AST84NHZWkXbYKVolsfUqzsxg1GnTIu7QtRNSWGjh+edewA9/8D10Oj0sF7WRRqlYkKyhUsobRZDMARljUnpWJWa6FvAwumE85pCmLWm+VjpAfR41CWoyW2cpT3wyOb1JnZaNeq6u12WGqoUFrUQ3XQbMY6HygWASoZMawgd3YS+cRPHaNaHcXL7yFLzvfh/2+jqqhDobdQst30aN0rRSNEDfHSDPNBY28qU14hwMkSs7KBKCK+U1ibjJw/ueLyMtO0P6anvIxX3M08FVIbTI8j2Nak7qo3x4Ocx3Y18CloBRsfDwWGW2QFFnMCTkxDpu3S42Oy7tkwIalTy9jo3d9qEewUKLnoFDtylAi+4PT3z0hiPUCHGW6Nn9+Ncf4juvvog6fWZGTa4dChFZjxNgrMnG1A9OL0cjSpF70hQXQ5QklY9SXy6jpvbkAevJ00J1dEFMxjErpdlzlOWNy+xrXu02F+eSOcFo2hwSqWfZhBNyfCRMpb3KKOns0Qbh2s39m3dw5pkXsLR8ksCGI+/JHScOZlrWpSCBkImTdi6Rt0kQkjW5KZU11qSa0uCKzaBA0tkYp5RWisY0cvPF9kva65FW4+SNUCBEcurMVcz922Xs3riGn3z4C7TufgBsP8DG4QCNV/8AL7z8G1hYOUkLZwYc+UKxP7eMDTydpIKpXakd2DyczCchB2LKwUfME2J0l6kGpRZpTzRxFWfS8eN/JylCS0dNZKXzerjbqIvyO3tMWGW1iIBOfC4ou6zfvkdIo4jG7DzWTp/DB1v/CV9/9rLEAc/zxTcy4CFvFnk7Xqc7ETYywer4WY7YjOKoBKsrwxlkpQIKpv5hF7mgLAjRdQcSZHmzRqGLgGtp5ciYuWVGRmKNtljml2uEkZia0DMhKKJqIezGDAb376Nx+hLg9Aix9XDpmbOYofctE+I9s3gCjtPGoBBiy+0IE77IATTMiSUdAXBcXqXPT+ljvU7po0/BhQJUkZ7vrAhE2ri7u4+DPULrVRe5ahmFoERBzUd1Ji81zENaP51uKIYRPBfZmp1BvkjXRihqhpBXx2fiMAU4Nr4tU2ii9z9ZyaFHC2TLb9A1h/R9D+vLOSxUZuhZKdw/GGDQo/egC1xdW8HN++/hg417+Fa9RQdyACcXSv1Wl1F0p1zccUIjzc3+lxTw8o2K1h4zQhqp7I+KjUZZPIWkP0fA0vUkfaqwHIn2rY1MPSES7BezJZbgFpfFI+QCHFaYpRteowUQV1uIebSEuyvcVTBEzEikzLWYX5ykInzSGRpEytEyDnh6sDpnbMQiSre01IrLC3EwxO3eEMvPXIJqFGENQm10wO1oy9D/6W88FYqAIHOucrDTMSGYVn3WzywJXlaKKeKsC0eq53VcFzVJDeUKIp0uMsVAnP0i7RbdaMyj/vwcVp66Cn/UE9mZJQqqVdrMuWIF2WhjC1PdpCrcdpaZQk/TCqQDmxAttRzaxNCTytimIelwKrNApoh5STr8yI6NlUq3cABN6k4WK4symZdTdZfHfvRr8fB4TEjAYUVMLmwPKGhTUJhtzqM8twaHNlxO7NK0Sm3EjtxT9JkJiSOVuNyo8aB8pJ2LVEbIUEQM/XFNkssTYbEsjBa/61Lgamr3Gi6+iyoGPSfOfdiB2g+kA2bTeubnH0kXMZSulzSOOKi52lszZJcdhz7DyVVEP3kT/qs+wrk5FHbuobF2EWvNAjp9D3uUn/UoJesy8TYf0DPPC4Jir8AyBbGc5QuBk4PG7ijGSnUGy4UY3XiguUz0e8UiIZ9SjHJFS36PWECRAvCgH0n30HVDo5xSotfMYabqy2HNxOhKrUKp6RalhD1U1SxOlEsi2HJICD1kImmugr4qwnFHUs+18xEO+xR7ec6ZwmWVMiOfrq9dtPDWR3fx1ZdacgD7Ix817ruyPFAQCicvx+7vPt8zCsrtPiHHgSi3FlRBOFeBKQkqUcNm8+HQKL1oVbdElRjx5JTDZ0RY8bGpmTKk0dhsDJ5F4xPfphOzwCRDSrRV101n1RICahIRsvJqY0oDxgKCEwKDKmVAC1GVC9Z0gwZ3N+DPzGHm9Cnth6gsQXeWKYSP61X6dXh/i0x5JpWL46N59DT9IYuglHpMYTqxphLpGzP/ZwxmxTTA1gTOWqOBoFqRa7Zt28ihhOb9IqO0GcqBIY7Jcu8CE+CtlOYRabtXHWCnri8rSf0wZ12VcaR5rOFSPJYOEf0jlbE45fQ6ClP5aivhriX3mD5DIAcHpezFkhn5scTbTgKLeFTak89ATVqmxBNTE5NeAyqDFFWWjaA0m5qDYmB4TrqTFUlhWOSxo8jIT+tOYSzTFJZRzNXIQaYeCkkTQ3dELdYq40zCocDbayPfXIS/t436+kks0wH0KaHn7Z15er6BdPXWahQQ6lU8oExgREirQKjTLubgUKDosNzxYRkVXguVPgJvQBlDhRBZjBqhptxsjDoFLOZcsTabz2mfzwcypYX5MiGyPnx6H4fS8f1Dnbq7TpTyBzsUnHtcTPCHgtZdZ4BSpS5Uhx4F1cGojU32N/CruL/XpzQyxKnlGWEnMX2oRmv1+uYDdP2nMVcpars6X6eBlvFyEGtOtsOjQN3d3JHg7/LB5mvOXpzWTBN3rDDNVlJ+Zmxl5dLjCcXRz6uIZcdaNsUzAluWTekKXbBHMLfgeqiVaGNVWpQO3JFNJ0YNpv5gmZM+3VwmDVSmfR2ZwpZlTdO9Yll0YWiEASkAbN24jeK5y6gvrqAkGwKiW82sdGXb6TxiwiWylHqklMXDgpF6hJ32o1NpJagqNI4jIdctZNTClqJmwTaBh2tBkc6ZJQTx54z0Z0z04RMDBS0zjSMefI+6/kf9bGx3rp4kZBnqRzSRrk8fAKnBgDWmUggKM+qOthwoSsi8cZjpVhrzkdiY6uoHb49T9zQIq2l6Fsae9ZmyhalHqVxB2u6hF0rPgnlUrLjKBWPedLzucvlI6kKx1GA0imTBRO1LEOoOlzLdVP78bIDC5a9SXjsubW1DsSb6tY9QoXTu/Kl1/P31n+Jwv4+ltRrmKxaKbCXGPKgCbWg4WvCSlTecHLwBZSz0mnt2F91RH4rNcmJCYrGLBqWhMxYbGfPEQ05Tdeg9eqMA+3sDFCnlrRd7COkwaA8CQlyumWbwMHB8YaF7tC/7ffYpZNFLW/YkiwqKR7ivDSIGDpNUfRn34Qr7Xqcto0lVQmpLrTncvXsXD7ptLFLaOCL06dJ9qUWRETqAqJ5IfZlS0d7mPgr1Gts7yuORwymhMpgRK/sxtIbsQN9nx1jJaSayyZYUeYUvyDIhJoVk60ybUoB6nd6iRNBxONSzRbEyLGKluSymozZJCjVt66SbqJKCnGbIK8OIzQWhdtEdtHG/TTn6U5dRzlVl7o01obSTsppMjY4pkKfoST1+sz9JQJgu+KXuxIkaAgcp0caik9Sj1CQY0SYaChuYXYBZBZT/yScrf08s0ky6Iyl54uOopvTt40x3MxPEsujquM+t1DHO2k9oTJJFQtP3UoKt0Z1PkG6qUmzMd9POpK25eWqKapKQjKUZkgi3ys8Mwdekh+OGwOR/E6VK4b5znSSnjUrgxbpEwS5LdOpz3YzZ+cIbCszEAg/0Gg/AKNQs98gLxC0m8rRDDSMUFlRUnNJSOmkzKXiLEAWh5jyjDi/CxXNnKADF+jXFWSmPfTfC3U5PKBWLjRLyFPH8kJ93FxYLB1YjDD2PUjiFbr8iNJ4yF1zE34TS/pwxa2GwwLXBIaOwoQyY81QEq16wcOVwRIFqMILDumNKF8IHOxtobx9i1InQ2RrB78Ro5CtYqBbQqubQatZFicMJLJE68gmNHLRd2sKO9hssFdHJhbi5tyN1R54OCI0xLTcPOCpwjY/nK4f3toURzy7alhfqGVrTRUxqWNlyxMPUPJNx6S+GsJQW6YPRMtAFBS23yjoINm3C8gzXYughjUZGtz02J6c2DVXm5NUefUgNQuMsRwsq9TxMz1dpM4cSJD2CnIeFKs6trvHYJt3gkbg5j0/18eyGyhiyPi4gJRD18//HdBxVjKyUom2bQWOlNzRvllBl0iDzIBNonLDzj0dE4z7L9HOO8GRAaRysFJ7U+W0iICI+svhS0m0iuqe0qqjilcGBzDL3V5oGeV0FUxl38YRGAkPuzT7GeEweTSg6Kq16RRlZXcPrU2PSqRLO2EDGusTwwCi58ulu+/Q7LPEc6AAmtBxBuGwS6ks6yDUamWfwtasPoxFJa2gzRmz0QGnecK+NSDTGSjK4fnJ1XmS2Xb+Pvf08bf4Rfe4mvUcNA3rNpSaTK0NK7+iQKjSxXAtlfQxZfZiCSVRkJnlXamfdThH1hgtfmhyxIJvhaCA0htWliqz5Pkss9QgtOXlKPxm9ebqBx/OpVohCuSj7r9vvyWAy5UKsXqTdimI2vmZSrE3Xw8RrRxzErJyWVYq9fWkgeRQw7+zuwz3lIcc0m1hbk7EmJXeGCxTgh9v72L37AMyJKPOc5cCFy7U430/JvpaZbkEYPrRUkR31y32RdDDRL5AlomK9bfiUZ/cZHj3xDlEiaMynEuFcueE2Q2Z7TAXQ1uuJB58uuseJJXvSxk6oA1E8IR3CRb0cvd7hzQdQC2uiz8NDrtzZqEZ2On6SLTqPT/g43RxqihMWTxT6vsAdSutCJkVJdOyVQRa8YSzdxBgbUUWGaC60Wy0lnUmnoig60qW1jPFmct1RRljxSYOVUvZnTnH134YPn/czB4xMAiBO0zxpSDBFg7W+WCyQi/KWXjsw6h9Mc7ASFJkNZMlhozJM9wx941H1N/k9rpOxxLTPg/haZZVrUIwMZAwn1H4BUscKtRuzrGnmZgWhGaaGMX5VWilV3JoIPXi0vlszCD/eEyTBdmn2oIvWnCan9un/93gudNAXs91S2UZ/ROmbU6QlUcduf4TmooULTL6n6zss0nXO+JJRbHcd+KoENexjOfLZxFkbknCKlS+hUSsIS75HkWffJVTW4Q6khdnZgqjMDghpqV4sqhy9rovy7ADVVh1wB3CGlJSO8siVKzKSU2RRQpe5npHwkCJCo52+I11vq0Eoku3HuGO5s084xMFMnQIz1y3zWnIpT5mUt3OAjU9u0suPMH/mhPb77IykoWJ6eEY8I57oTH/hLuGxRfbUXho6tZEqNhdZA5klignylnqHqHs9FFeeEWNTyzcWPmJOqc1CxfHFStxybBO41NiG/ch8omEaR7ooys5n9sjHve0DNF96AcV6hQ6qHq3Jsi78Gt+/LFLjTRAqfd2TYyZHSbFf/D/jE37i9Ii1UoXQaPPaPYQ3QCh0AKU7p4nHoVIP3YRH0ruEyJsJVg/jXKXBLQ3O8ZPDsfR5GH+fOE7/PgnSETSBMFGfTWpIaVuSC99GrbJUKhn9tNgQkU1gy663JOgbsmtsGigwxh1IqSbjEZ1kDjAhY0WWDnY8bC21Gh6bETPS0BwcYTpWwimgzZphjkYDfJ0xEyAZZTGtRLq2iZisrU1AhrTGq2URWmQJYXumSWCug7nZFgq0HpnIWUAJVcxBUepVbfaQpxTQ6S/h0K3ACQ+xHO8jsJYwDChAWA6lZ8CgS3ulS+s4z1MElMIFeUnNXE+jcw58LJNUZasaMzWhMEQQ06EQVVBgFQVClZ4zpNSTDvNKleUiZayH63X12Tr6FOT2egM05ioU/HK4uzuQ7l2lbNF7DCmg+VIf8ySQu2JAe9DrYuCOUPErkmpH9FV0KOshxLdz6w46+3sUMOdQmmnIrCPPEiohY43FO8cBK5JaW3RM5zqbdXzm0Zxp3wg7YbpYoTG11DWanEMRnFCVmluWoiR7lUmzK6cXZaooo6z09EzGcWIzXBybLtlkWTVxeo6kozbq7GKPNvviyZNayN51UMrPihxtbmIATqOtySLuZHdsYnMrdWwx+3OhkAxfbcywT84LrYbJ+kZceBameFLfMd0pZHxiYhNohZ0PK51wV2YAOCsjfRxSzNaGoiPuJJ8FX4cTgowTtrdxOEmLicbKoMlEAXdymZ3NP8vZ9mPqa9lU1Ur10BI8pfCwEZ1JI1UYo1wreSZmfcF88XiKbXTJmQTLtRkhMfPre1p4kb/ncbOEu+B82a6SYXebD9wRS75o63lvv4MypYej9i4Kq3VhoPdoM1cJweSaPp5aX0OzVhJ9/fv0u6O2j7mGhRlaAx2eMaT0qUHXWq/k0VbcEQ5Qp7QvN59DJaTg5jAjPcLA8SSwjFg3q0TBp1qSER7MROj1BziklLJQ5EL7SLTVJC20XfEELJVLqNM6cts9QkLs8MRMeU1d4sXEgoJ1+p3mXBmHUSxac37blVKOTwFZVLsDI9nNkK/AKKqP7Vu3sXH7Nhr1BuaWF0W7nhUumPbmB7rmpeeLVUZmSo0NcVOb76NrInccYyG7idNukPyCLQJwnK9KkVTpmTMropsR1kC3UVivbl6hRadJLb8Lf2kN+TubiOnBunQCBLkARfpvziqKQqgt3n05U49IxixUpuuTGSeR9w5kPkn4MKGF0Z0H6JdrWJpfQjnO0/opwbXovSN6D2WnXC4TSscfM9KzdjJiI5/XfhyD43OlzZP19/Hpn6U96LnLXFq3Eg2qOHGKjqbK4WMfvukZQDvTGdP1K3t8OB1Ht0jvr/oMn8g8mziL4iK9Nkyg0gPvWpErtpOUyTNuv5HoxLPyZJ8QQtnpwqITX7hbFBDyqij1mXxadrQydSiDBNMBeVOCsHTDWyXaayo7H5n5SvQk2d2H0zk24AhirQTG7XbePKI/pacJWLkhUp50tITFH2iBOvHmZEkcGTVj/XubzmSteGtRwGIPSNUewSsTktnZkHlL9rzYGbBprCMd4oPeAdxcFZ0Bp3E5lIo+yhScCPbAYaMTup6eoyhwOezpi7BI6VYlxizztcIdut46hrRvCGxhq9uhwFJGc6aFg06XAp6Cx8oXfLAHfYwcuj4KjKz/mFd6OL7jDSnni/GA0sEG3afWUgs+vc79Q0JMAwp2A1+mv9oD5tMS4KCAZ1uU7jEvjT6/kx/K8ykyWg2M72fnEDtb+9je2EGePvDMyroMfrPgoKLD6d7Hn4DFlBvf/pbBC0rGdsT6Lin9QK8lyxziY613a6KGpT7/lqQXoejJAnYsh8x209KFYdJogYEzYVrvtqAs2Yh8PTmjYWVlnZCtdFNn2+oyZBuNYWEyJSG1D/qVne1tVAl2Ngl+B77u9JQkBtrjdCp+dNL2EAz6z5QSPtnraJZwQjCKpiQ34jTIPBQRHtugnEzz/jnS3YdimYnuZJyaR6QW8tMpKZN4XUdPYuWVOWVtQzTNpUqvSOknJuXEpHt2Kk8Uj98zSSOnr9SyjqbQ2evjzSHIXfhWrOfl6+6fMuml1N6UHrcPNWk0l/iOMWWHWUJmANjrtFGfP0X7whIhSJ5ljVx2NKJPQIGs3R0IgdU77NMXoRqbAhAF6j3KVMpqSGdNFT1PoUtBhaVkqvlQ0M3egFFcUZRQeci5ErH7TUnO8M1OTwrpeUJVXuxoY2EKoLGZIuDPydfB7tyer9CnSDhi95scDz5X6HfrhIYK6FLw7VEwH1BQOzzomTlKSwT/fO5gxyNK50eYseoyScIFf0ZuuwwetglRVilYrS7SP/MEuixKDQ9x69p1bN19gLNfeoae9xgnyVwucxRDlSItdWTCZbzMvlDRXdvixAIFeQH6ZlTIIthXcjposOUT6Ca4HTE75U5JbJnhUZmbtfUMXyL9YVnIdOjTC48zE92xsYHSRdGQAtY+KpfXUa6Wpf6gEgh/3CjRk7bq/5nqWCqjTvmwDlv2/dL/TcigE79vpRTb7GjM4xGeSZuOYa6rx3DRHsY900EzeshnnZySiLJBK7m/XNum9eL0BnTiWygUzOiUUcIoWBjry6eyMFZWtst8nnGzIUtXiZHUWI8q2aZ1L3MNCS8uKXiImGBU0A5Cnu5cRcqkz2Zx2mbSgr8XshhdUZv4yqCE0lZzw51d1J46JTWbEmUCs8UqrIM2IRUHfZtHbijdI/Sx3KpjoUZoqu+h0+9iYxhgtVmBT4Gm09cHVbMGzFZzGHY99JlbZS3K+Ey1Esmc4LBXgENpYT/eoCCzicXoKdHyZ8MUVpxw6D1Hoz5c36XAlDc1Ug+hO6TA42BICKnd64OlH7hfFsWevG+eMhYx2eWJjTzbww2ZQ4SR20PF8XHl4hlpKOTpAQ322jh02igQ0puda6FE18/1vu3dXVx/730MKXW98torWL16TnTpZOxNZvfysm9jcfu2jp9N1gP88RcOWMq0nWNlisU8UswefqMQ9cEe6k+fkBMxHHS1ThKdBDKJb1np4KosStvKkEfHX3GW5Zzqc0O7INMH5qnzgcsdj1mpIbBssURsYX1r9rTKpFCwDP8jqZmZNWipRL9LHZ8Sf07C6PTvPsnfJs2FNK9PHKGnXwtHFRSeJHB93m7n4z5D9vtWJpYKBcDQGxCNgxcHCnc4JDRFAYslRzBucYtd27Ti7ISMkTXBdJeuYfywQ/X4a5XiurGG0wedLZdoSz8nEnIrj/VM89l8fi/Xl0xClGtNPc4N9MhOxJQebuwM2XfQ113vQB/SzIVqzVOKFLRhRRXsdwYUWEoUfCIEo7bUuXgw5MGhS+87lO7ewqKNGgXEPMs12wVYVeDg7ibdnxgLrQZceumDHsvF1NCiQJanHJFCkAz/w9KTBtwJDcWdKZRg7IhQYqQHoq2idO5HriZ8OpziRUPEDgUpQlT5gNNsR0vWuKxw4cN3I7xQnMVr5y7Dpmd3QKmkohSSqUQVCmBs4MG8s+2bd/HeL99BvlbDlykNXLt4idJgTzTi8pGY2Os3ZVI1q33IPGE4WZrKPszcZMBSj0tZhMeUJV9Cj5xw0VHZFdHN6VNEL7QpL+5vorj+LRFGU04vneSWICc1q2w6plnbUnS3MvWehE2USDkYWJ6khqyVTYcgWq15WbTMI8mpkh6zmNKJf1RZOUVWsXpoEPiszPbpQnQWdUymgVne1aS11QSFIZMWfp4U77gg/EUC13GpoGWcddNRmCnSbGK7FcX6i+WASoxQWDZFSLW20A4SrbTExitFV4YompJkLYOLjBTvOAGPj0v8UwMTJPpW5i9EfFFIrHowl9+fu2/64IgnyLDCvCja4CM6YDNcT+mmgWXoDlz3IlRVZr0p1xPpHZsCzUy5RkF6U4rfNUIhTANlqkH3fl+K4syFqlfqQgjd62rT3HqVDmF6/TbzqggdMWGzWIiwtsLWdQ46bR/9YUhfigIPrX0mTPkOBpzWunR4B0qMfHkOkmkZXDcUXxI1otdzODrJpAjrajlBJN3zAk9dmLXm8ZygR6nhaEA/92h/hagpSlnpnlxYWMGF5rLcrx6htWa1hEq9jCohSf69jz+9hbsffIK51WW88PvfQvXkCfQpJXYI6VXpWvK2VmsJRd9d16417/FIoBr/JxgHLPVZzunEeoshsGWKZ/kcO63k6ISxkafTouK1gdWzUH4Ptu8J/0LYsJluoIjqGa5UYnaR6GXFSaHV+OVl5AGEcSy0/v5IhhrylDNrKyHutEFkVrjLZhlzjGy9Q9a9HKXHoClxpLYmNLAeNcYyMav3mICmEokKhWNGSaYCa5xN/uLj5xofU5tLPnnWx0/P/FlTxNPHI6/YFEPVI4KXZRQmx642kcw+TtaIxu/JZEy300WrZJoNiXGq0UuKp/N5lT3IrGNS24edstPSqVEapATxRWOTVuFWqQR18XhXrL/HeYJtpXxBbtEnbuaMtLhdzx3EkPlc9J79ehXNhaqo23LKmGPHbj5MCa1UFEsEVeE4jh689rjbZ1MaWUae5WDsIbtHUuRw5WDvDHKE3nQvvsIFfQpCrDPl+8twXUJBuV2szFoYDSiADSKMeCYtp8drOADznhg5IxloZvMPtgfTYCEQ8ivvZRGOZJ4Zp8T+kFLEIUaRhyHz5CQFtlChzzlbruDsXAMdCjqf+h1sdg9wptBChXXx6yWoSkmItXc+vo5rH36M9Wcu40u/903UFmblPvqEMMUmLFmDSmkDF3HT8Y3e3DQp+uE8LPUoxnaWC51omuvupzHcZE85uiEctAqjQ8qV6ccLJxEdbhLC8rSbsYoMR0jDKNG8SkcyrKlZQqQLS+JbiLSgKQtIaYQVFlj+uGyUC2OB9MLnEYngcUF2oihrSKiRip9ovm76Z3GmFnMMdM3sl2hc2DU7VkUZU1iVDTzGpONJEJQaS1E/upswXaTHJBP8CZHXcUXQh6XI4+AUjtGV+f+pyQAX3GnxDro9QhVVUX5UgdbWElni3NESQSonMzV7mqC5rFF4jOnOZyYlVqZ2ZXz0YkMjSWMZH3qErsTQyFhQxYauo4xaJas+2MIZYna4JzSHiAJapdkklNHE/Kk1qKqLqONgJAontFkLkA7ZoTtEgfYJN4fyIlVAv0evMWTP+VwVJaY21C3UG025VlEE3R8QMgvRZhQ3U8CQrd/o1TiNq1CKVylUKbh1COz1JMjWeHCZ9yQHV39EQVGrZIjXJJsE07/zPGFEaZ4X0f8P9FB9TrYXB1lKBem9mpTazdZrWGxUsUABabaRR0lV8M4DhQ+3t3Btfwun6TPPlCg4Vytyhz/6+H08uHEPl55/Fs9+6zcR0d/16GAqh0yDtkRgkhsaoQzFx9oVmwGLxaAnL1zER52dT1DDmux0TW8oVhzIs5cZQVIejszTBy6GA5QbFYqGM4ica0LFD2Od7nHBL0oF4qbZyzhSJM2+fZykT7FGKv12R8wOmCmdEE15rIJhZiFvT1xxtug7pvsnInRTCgxx/GT1oXH78mHQZIwqDLKLMjSFRJ544hofxYKz4szBYT1StD8+ZlTnaAdUPVEKqXQuf+ycYvK50kMhg04tTRzXf5M4MJuaEQcsh1LCcquodfKT58d+iZmgFKusjZdKyWypdDLGTZnplFAQZSYlVfH4l6JsEyDxHTD1Mg5m/GS40xwZva1AWO468MpIWKSDWHGmjubyMioLc1ANSvsIJVm3+uhvbEHtdmG5hMLY6NYoEvDcX6h2MDe7Kika0w4Y/bRpUxdGJQp8dQo8hxRoKiIflLMGhMpc4WoesldiOUC5yHUwhVLBQ6FKga7Omm81cItr2O/owMA9KR5KpuAm+mKsm0/33D/oSHoZGbUPBhyMxKr0mlVCcA1CUfONIhZmSmjVK1pT3qNAO3RwY6+HXm8Dd3s94YGNWOU0T5lTtSi39cEnt3Dv4xs4efUSLn71S6jUqnB7IwqKPnwKns7OoaSY84F2r5J6VWDKN6zQG4ZjmXSlJoQ0lfmX3HgJj5Ub07RIfNzo9OCZP/F5i2TaWxnJE2a0s/UQ21aVKfeNigpDPjHaB6jOL/HjhEXpIdexclENQc7wndgUQkwT7dRxODZdHyvWSGs8CKmvK+J5KCMQ5nssDhZJ4ZBnGcN8KLZXQ7aPz0dSuJTRHdNetxLFMBOctDOMPs2VijLzikag5zgHlmOgaBQqZKli2Y2sX9PMAsbxFOpJUF80rnWpSYearJppisiipDGmZzZl5l1lPRozoUhLjk50So9kSCpJwKNjaREpleKR9axoXItTUWpWKvWJSNMDYgP5uRsn6T/93KGTP+q10Vo7QU/WEzMIbpGIKq815iuoKSHHOJ1eGFuOpddoKS1pGxtNex6uV6FZ3ZasXeEORbQygzxGodZTsyJbc/JkBIcOvJItBWCLtdR5koMpDKF20BFnrHoB9cV5+lqCXa2JZwCb3np378PrdLC7vYPyHgWrAmUcywtSwmDVBF6RRY79lOL53T7sygw9t4bQOOqNvAzAM9XAC1zs7LZRq1EQqjfA9rue3YPy8/R3zD6nNJOCgBc6cAf0Wk5faEM+pX4upWv90JWDgVPBQMxBFHzJThxBMaWCLYKCTQp0rZkK6pQOzc40UCuXZF+w3PhoGOHuro/esEOpYRs9ui/9oIac6GJWUajoYFege1qmMHL73qf4+NYnOHnqLJ6/8hJqxQo69HxFptzVLuP9nlac9e1InjOzquK8JumKf0wcmr5KtgyUhIHoCMJSeILxj2m2NBfdcyoUngcoSnMeX6IbNrO2pqtk7EISHqPenhm9yeoYJQzzOAPztVV8tjKjRb4cYUpDJDZSTXVba0szBLZCrjDaQqXQ82u6sK2pTont03Rf68mL2sqKH1HTQbpBYuvo50c89rVmTpkyQSxNm+Joosg+0RgwuCXKKIiGYvM9DvQiqjcVoVQ2OTKdyM/McI/HA8aTjYUwrV3p5xVO1q+McYhl0NiwPxQJkgJtEs6No/hofU9l8zzrMeqnxyUFidMztJ5YHOuuMddnHD7VaOOypCIjEfbZY6ds3ths+Gk7xiuAjUpps9jlIuoL82itLKBYn5eZPN8dYLS1Cf/wEG77EOFoKAdHo1DCqFlAk5CVzZypzQ46Ug+C8JtYZYQyQ5Tp+TClQ555pMssBQIByhuxVCO9veZC5Qt5VCpVqTO5wx726Od2lJOakO/6FJgo9aTfZSTDhFZjNyiorpKnVLWgUKbr4ODXoBSvXmV37jpt1xw8DkSOT6lqgHv7HQwGARx6NpZNr8OmGLyXfK41UZro76NUriMfldGmYNnjcnKOB7K7+ICQVYWC0qmXryC32sSgQ/ekNzDZD9D1BzKaVGuUdT0Q2houtvRnF8FAtv6Ng0euvyeiNUwvisQgQOSsKTCwx0RM0NCnE81jRDXYg33iFfpmD/GgrcXQjLicmeZNW9MJ9E+kMpJTNLUJS1B8UhxNrJXiWBjJUt0ItalpMmTLcJdPdztJA4ylvTBnxVjT0o0DE1jSGbzPUL96GOJIYhM72cRGejkJ8FGsJhBMiqhy9kRgjozel0oQTmIEmhrRIq13xeYe6C5ulOpZpLOX6bCOyhT/J8NXHB/toU7XqDS1IpzogCaZvTZmgKEtmDQMiTW8HhjWVIZAng0/p8FhG/HIQbVe1fLEidV8pkyQjoM9PoN94tEyZcxRxU+PNrglBGStpuuxAgNTB3iMRUTocqhU61hZW0Z9dUlqa95ohN49dnPuwScEEbJeFaM2yjIKVpn+nV6vz5vzALeHW3hw2MGD9g4+3trQJRHumudL8pldp0v/LJlqRiy1YCZDV2YrhptE99LtI3C5YE1BjlEc3UMW7eOUmmXBc4b7laObVKbgVCoVMFvMoVQtSVexUaugVqlR5mFplV+6l/2Bh3tb+xgS6nPYxNX15VlJaZ+CY5EQZCGwCFER0gq5TmcL6z8khNdn53E7lAB8S0aK2EPxNoYUcF77jVcplWyiSwiTFRvYXi8i1N1pt3GwvScqpPWFBVF1MGmBNo7mg0R4cfFjxUJyn2WYTE0JuvMb8Bioy8oMbCPExqL0QMvhCNbKabpopv8PDK0+Hmu1JzK9dmbIOVtgtbIDj5n3FpOYOJ2/45EH5rhwXuzTg7RMp1CTSgNp57IUMn/ZSMY5xKXBpGn2BCJKMJyaqtc8SdCyjEV6lOXtBDpls2T0wJrwz5MW+pT+T/KvtnlByeKlT5EEniglokZRppEgHLX4oeRXzUobz2ypeDydOJ6Oj4903ybSvvhoYE6aDTIOY1JcK5lRFFkWX9clIj1UDIO+GIU5dCrbdEpXKmVTyzPnWDIiZR0ndTOlonpsaW7Sl3ysVWl+xsVdP0bR4e4YZ2umaxlqZrsVetKtq6wtorm+jkqxhqA3wuHtDbj9NiJK5UTUT7HiWyRS0IN+H3cGA1w/3MeNvR38utvFdn8fdwlhOPQmTo7WIqVIM9VZSYV4qJl5VXnWz2KGD8/aWdoqjvW5hi7TGVh3yxUHZpcQ1ND1BFfz7xVpPxXpb9kclYmgVQpSjSoFp1JZTCmqJWafF4VeMKKg1KHr40L9iP0SRTonlBVhU+DkQFtno1Rz4HXpdzqDIVx+bx4YoxT7X1xcxzP09V9++QHevbWJsngkK3w0PMRbNz4ShPr0xStSy2M9Lm58MVVl0O6hx+5E9L1ytYLGyizs2ToBDb53OtORfcnNjSDCo0zbYp1Bqs9JHNUbhj84u/X6wQg5Nl4sVZAneFzlgDCzDnR2EVMeHcWGd5VZhDyEGkmnMINmIq3sFUM9pAtlCqgcuLibw21jephsbiC2S1zfoptXypXon4EMadpWIMGCW722ac4nJZI45ZQlm9xOO3YqM2g8eQ2Zek8YHSN+h1QKmbs/Qh/xE4167QUnI0miY5/LBLHEsScjNZzx5VPGUksMZEXZMzZUAiWa8XFqznGUw5UioazQf5xSm6ZmAic/5URDIorTrmdkTCbTtC8TjPT3Ao2wwtBYYmkJXBH1o1PdocVcz9P9YKecUMlKjA3tI9EFSwa6U3kdQ3NJHCnVMU2OdP5SRSkqTWgLyTC0T6/h0VcgNTa6npEHl9LEAqVMi7TpZpaWKL2K0NvZwV77Eyi2smLVBj4A6e8dCiIbnQN8vL9LwWkf73X2cKN7iN7QF1kYLo2U6UL4EG826gjZQqtYRUUVYdVsSfVsY7jLiMn3Q0nrXEr12Jgi9PK0fl1Jj7jswPN/lUoONUofa+UCahSo6uUa/bOMvGWJ2xB7fzICG9Dfb44ILbY7cEdsiBpqhVdaP+yuXaRMqFoJpBvoMYkxYNKrj31ClwM2Shm4mCE0NtMo0T3Kg14OJ5dreO3qAh70ZnH9/g4FJHpPWrs3DrfwC0ox//WXvooLZ56SWhzLLXcIefUJQYdOIE49c3RPF86cQnG2AXuhIXb1UWamV8AHrxlrSo58csBZxo+eLCWMp9GV3oDsIzcIHVFBjAhVhaqA1uEeyuLuWqfU8GNAio1WStaLzIbNGjikREkLEw3peGLGLnFe1I0A3hg8AsEWQl5vKB0X5l1xIT7Oh4JuQpu5MbZIJOucL4ClMDXikeiNHy1yc+r48C7gZAdw3J+KUsIhDyNLXS0MdL6etje08Qbbndliz5XXMJmF+oxKRZQd15ngGSmhiIgccTyekYsiezJomTrgOP0z5EplHWGuH1eri6eQJ6bqUVp6Y9y11V24SCgCkhqakRcxnTDaUrww+T5wLaN7cIgWo6ucLnaPDW6tjL1Whv6RtYKLpzqxjyX1xmNym6WDxIhrRmziQNebpyCwtrqKenNWFDrv3bwGsEpmwLUkX7yZhgcjXNvcxa/a+/jRzj3cpYDV5m6bsQ4r0dcMHdilJiuK0j9zIaoUoDy2xuJaGSO7oQtv2MfILwm1YMS1Kgoyvnj6edoshaBOTVHGUiekROiuTGuci+FV1nAvlbRPgbSTLNFYHwwoQO11RLWB61H6PgW6pE1rqkJpYYGui/+/mFbT/XdoT/A4zl57JDUwDupsmhoXS5ifmcGrl0/h6okK3v7VDbz+yT622F2dEOFzKyfxi9l93KP9ZtH3zlIAfeHpp3H+0nkZ+u5RkGpTEB8cdAmZAWtrJ7B08Ryqp1Zgrc4TyrRF+56BhLQCLKMRp3WUMnXVL1LDys7zTY9pCMM41DNIOX2K1igvb7KdD6+MIc9O+WKhLc3BjIbRxJd1vIheHMeZTYGJoVreAHXKz5kR3KWbtBrrbojWOgrEMUcGWFls29YigzYPnoa6a2clWuKygSPDmrZTJKKvIUDWHTprr62vzUrb5wnFIQ2uphsp85GxHkeScRAu5CaSMCbYcLGXO01c+OVNxMRXuU9mzlKlpqdW2nVUmQ7qpLRLhgOSyYb0+JFGHdqXMUOnMAXfbPCyTFF9Et+GGWb+ZKdTG6gGQhCUemKgjV5lzMV0CJljwx3e0WhIAesAJ2pVTeD1rXEXwrYmCuxpQ8Yy90ONCajqIfZe6WePTYc2ocJYGsEVOUCOXPjVCPNnTko6NWgf4N4n10Vkjt2e2HbroD/Ae4QiftrZxC8PaKMO+sKHsssUTGolLKOGkspLesbF87xtC7OcTXFzEaVyFo/eUXrVCzGkz92NmBXeQcHTDkj80Sv0++UZZog3RHqGwAeldRzkKEBRumab58IZw8gdicLFkNBej2cDI3kisn6KFgenAv0NXYcV6kOY7iVTDzp9Rm6+DtQ82DyC7JtWpYj1pToWZlsYEMK6trErRq+39rq4cqKKE2tzKD8YYnu7A7/n48xSEwtzNfx69wAXay38j195Db/9yitSb+3s72B3YxuqM8Tq6gqWLl9A4/wpWMstUMTVCsN+JMRUzohUKZKCu4Wkjm14kfEjJyzUY5nucYZ1mk1VkiOPuSqx6bLxIGWNTqV6sy4tXOUOtD62kU4BJi3p05zEBC1rSl88naFPCruJPb3Ie4Qo04K3aBN0d3alYyLVHFZ6ZB2jME+byBfkodGN6agZPpgoRnAKZhlkxWmVNdYpH/t2JtpRONL+V+mm1m3ZpKAdGzQTJkGJgxB3MS09LxVQasHXJLrt/PuuKQjLgtdoyzb/X2pg8u9CYhPvwQRxpSqd0aS/Y8o5S4izXKNJDgsZPwrGYyppAI6m0Fc8UUZMmO5HOn+xhvTKpHuxmc/jYdYw0UIPTUoY8MiLTwFrBKffR2O2KqUBNn9IeWXZWuYxA9XIzFCOdeUzFzrZXk7vReqFSv8z4CHgZhVn1k+jSc997/0bGHD7nlKznb0DXNvexs/2t/HzzpaogJYtCiiEwhYaLVQLObneHJuW5m3T4YvhRD20R4HUjVz6XmUwgGOxThat/SI9NVcR0ilhoUCp3EwRlTKleDxqk+eAV9QqJ6A1TPunH+TRH7Hxw4CCTAhPNOaVGGdwEdsmxFYsVNGga7DEo1KvaaZOOMEAhzwI3WvrNDPUUs5SguD3odS0VIlxcjGHP3ztIp49WUeffu/tu21Kc0fYcoe4TwHJ7yzgdHMRzVob+xTEunTf2Gy14w0o4AP/8vxz+NbLryAo2di7tYHh3S3KeGpYee4qli+cQfncKaBZkU6jQEc/1vZohYLsBwgfk9ay72eI0I8bxc8I+B2/OPSoSmIQmm0182b06TQdWj5mQoLWdDMK0QHqoz2o1Ysif6Eov+dhP2VGcJKUT2oflik88+keZWjf6fyMCWC8IJKRFk41Ap0aSmCiHH6BTqXhvXvw6dQOChTBxbNB6/eIbInyBQlqAqHSo4jcsuWbxWxgTlMTLlaUBFKDGmxrLK+cdLEmxlrGOtR2nOVUR2nxPco6BhuPRIbnfE+19Aht4kgrWbIrS8jatNBFTRH0Y9oIB6yCdmRhOK1NLPTNTCy/xxQJbQagn+e46Jy4DcXpszYGsMYAROgeCI+I+6UNiHg6WI3rV5GxqIcZtJV5OnHGMcX3MDQHiSukzEGnj6Czh8WzTwkagaJ0CBV6z4I+2pjMGCda7mqMAg0FJSUbG5SfjvUY2es40hw0ZYxw49Ta3pI1aNNJX6C/H/V2RHN9mwLUxwfb+NHWXbxx+AD3aS3xvVsg1HNuaU6Mb0t80Fgu8ihLR9GJaRPT2vaHlHpRQPHVUA6UQljADC0Ge3YOsxbXsSyUqmWmHlLaSHskJghVoEdtszRMSXS0ePbPG3ro0T2rMr9KMa9rJJvaYY+E2EEJRQqQtAbKmgLC9IXuwJdg48gz0AeCGwp2kzRwjdDQPB0K52ZLtFQ9fP8WpbFuma6DkBeht9CqiHMPl23mqwXKjGrIHbo47Lu4vtfHt0/O4+JiA2/f3MJm7xAncy0UaJn+0ZVn8G++8qoMRm/cvI+AENnS4grWrl5C+cIp5FozQLks/E3hBth5qbExLcPuB7IKA9kzkbbaY1qLmTXWh/DkaI6VDrGH+NxF94RLpbJlHuaz+AOU51Z0Ts6yyFGy7qzJEYv0NEwqv5Nsesv8PIrHqpETPUr6kGUKWK3FeXz64B7aBNlriy2ddvDN8JUgLSu5QDEP8ETug28Qt4H5ZmU9C5MNnKTCPGt1rCZ8UhcyRMKEbpBNF9MOXhQfGV5OVUJNHs91CWELMY8m0MVpGQZm6/TYqGTaWuTfZjUMXri2hvy2stKidGQs1pP7kxGiGbtfpSTZpE4XjTuHxyg8JvSESGWGtI0eWZykw6H2REw6tJxKi6wM22kZdrh04XydEg7ZXYGCc55OW3242mYZJHLK+cl6afzokkV6zXF2okHbpCWLP1V6FQ6iTYgK2DjYwK32Pv7y3jW82T+A48ZSj22VCmIgUSQk0HW6QkBt2lXaZAGtIFZasESGpU7ZRanKr1lEmKuIpEuZvleVEm3RqDmY9N6w4ympRHQYYBAP6J44YpoayJSIJT6CilImzzmg5zoi5FSQv+FHzUiGV4znuegPc5LiscY6i+opUfusoDFXRYXu89ANMFexKahcwDNnmijRM9om9PRB28HmPW5KFWU0Z+vwEKPZityuMqM/CjTVjY4U4T/e6+DlHmVMlNHt+T3sbQ0RjmJcnlvD7z/3G5RGVykFfCDCfKsnTmDu3GlUL54RTXtuOlBOa3SvjNgTG6wmUwfRdAlDPXom9PPQGlRGMngCiVlmhJ03kzNENe6isHSCbkgPdq8jIzlCFsyNHYdTwavEiik+mocms4GCFrKF+IRQycGMNvTi6jIGH76FPUJZsyuLdDkEi5laUWCTA0/790mMDnTtSnzmLN3x4rpb4txhaSWAJIBZKlEiHQcsdYSjlOmapoFinEZbcVatQMvwJiMhibSJniWMTKHZkpM4MoaVcRAZUTnP1KH09UnhlefF+J5zLS6na1+WZaeE3IlrTdNECDfMzmhCJelXlEwapWni+HlHWT0yUyCNjX2XEDIjXWwXcwepV0XSaJCZMRbAizU5k8dSXApY/V5fnJ7LtfKE2WkiBiTTDsnnMKTRVGYoRVxR6jWZ1Fi1IZ7pDCLJ0aMUX2mjX/r89LdvPbiN//v6PdyHrgvxva+WK6LPFQSOGJzUaNPPVHLYHzno+DmxZS+ULMzZrOBZEC2nUr0kdas4Via4WNgZsW1bT5REOIXnoWdGENxNH3r8/SIdSCOhVBQIVcYRrVmmFxDiKRXrWJqnQ6k6R69VpOuh1LPApYs8BfqRqPueXwlQqcxRilrHfG0GbQpgbxAKigjFFCjL8Noe9kZ9HIwIzVLw6tI9Z5OIVrMBe2cga5tAMPZ7hHijBq2fiIJzHrOUrZRs7lhGuLk3wL32ADMF1sIC3vv0Pn7z1FP4vctfwilKjbce3OdZH5w4cwoLT19A8dQqIkqzY+PII34NtqnBSvYQGlkoMx98JJA82X+eCGGpx/7QkosrE4xt5QkEzizAHnYBR3OwEppCKp5mRPbkj1PC6HiDqMwgIW/IFPYjSsmjcaSJos35Fsp0Qt279jHOP/e8zFn1Rx6GtGiKSlMZAnbryQQPW7SPjJa3Kb7roJSQPQ1ascY1lfQmZ++GpTDV6JwoescTX+OxlQkyZqTrO7qOZhQjhK6mSSd6MFcHOLG6F9I2F6o9uedMZmSbLOk6cvrI8FsMPk1abU1pR/HIUiYIp3LDaqyQPmbUxxMNF2QL7mGQYbAHBl3pbqiuYQWCcOWAof/PJ7pwi2jhDrt9VOgAq1KqpJU3NOE3l5CSLaNPrx7epFUTXcIoOeXMx44mnoPU11JuF31CCpif7G5gAw4WZmfhHXYR0cZepxRwn1KkHa8vm+vU0jqefWoZP77+Ce7suRQYQpxt1fC1Uy3c3R3h3ft7uH/oiVtMs9SQonKPtbIoACyWdQOIcT0X3Pc9W9jqdrGEKgWhU4tFNCsh3YcqDgZdXGtHlA6W/3/S3izIsuQ8D/vyLHe/t/at9+llerpn3zFYCAIUTFEOM4KUREmO0AttOvygB0kRVjjCEXpwyA/2i18cVjgsWXZIoiVSsq2wRIEkQGxDAAMMMFvP9Ez39Exv1dW1V919OSfT//9n5jnnVndjBhYRxemuqr73nnMy//yXb6EDfoLTq8eR0r/fOugIwVmyVMbyTcq4sDyLv/FqA5XWjKMylXHnMMbPPr1PgXWCesTmEizXXEK7n4jDzXA8pOc5wrEGN/npmVBg5PLxYJiIbHI5skCSRon3wljkqc2Igtb9fQraY8zS+lhULTy7eB7LzTnsbG2IBPbamVOYe/ICogunYCizYhcoHQXW+s/19kLPOEjtOtDOo0EXWBayJ800ePsBWIPLyv5/Id2L6RxPLxKmNLDdNkX1SkULt1D11yUCW/aPTWeth5ufxYfTFHtVONXNESqGcamLLtA93IXH1QpOLC3ivWsfixRrgxaUzLN4wwx5UhNKgJIqw4/eRaUtcE4dyuHBrLedOKuovC+UqVh6DmLwoKGDV69QKjcCtRWjL2XNQ7W2jkDMCgRiH+ScsKBMz1QW1Iyj8zBKO2HsDBtYcGnIsjpRaj0MfaboZVFcthJ4PamC4ceU2H829FAZ1AOOzWkKOCwOUsYUHLhTCxK1Cp6OH+bKQc5WJpRdWQMChV6njSa7zMShpSV5sKiaxuI8CmOjHkKbUke076eyREfB8mIVk94EI9rcTy3M49zSMv5dd4ghBZOTp08j3b4N9lngRvfSYhOXj6/g47sbuE9BiDORmLKeyydmsdaqyd/vUnl745BKPAo2lYCCcTrChbk6/sLFZSH/RpRx3KTy6k/e32SBGOHXzlZjfPXZM3jxBD/WEt65tY7193bogA9F56o3GgpWqXPIQ6uA1nhZIDDtfhf7HYXSiIIDB0fNMsmUzVUWUGpWEdLnYAAoT5vDscaEol1JjwWawb0bJjPXSz16DoFg+TjzOhyOsdKwrIomvU+jVqH36Qmv7+rmFhpUir64eBK/dfFlrFEisru9TWVgipMXLmD16UsIH1uDmW8KOJsPWWuNosSUxpoem4xa5Tm0lsNbUClTnz/b+twl4VQHXzmwojGSsoIBnCyLPBmiTmknQ1KDw23bvzKO1BzkGyQIiqqi04rdxeioiieoAABTubFOZVk2Cm/kkytL+OEb13D3zjqeXXpS5GqZziAnPpWFY7qRLOMqM2POOMTWSSYH0s/yTi5ChNaqYEiRl4Taw3kKGyVwBguBQ+0Xm9iBs6b3/EBv1eL7OY6ZIJQhSS4Di5K3l6pdoDJOrzDPcHJ7duNswS1XjtUbBUyb2H6ITF1Di/MSS3s4O/jA5D6PPpAFBbflgqgifKmaHXLGcfJMVnpJ6eddZnwp6AGiLnAxE2E07ItVVkr3t9NuY60Uy7CDAchRpCy8wQuLfn4p1bzHaRwLIq/J7VfqKEKB53Rq8QI85Gl2fUmE5FjfamGugoU6cPceLWddojWTYLZB62jC0sIJBaMYdUo9eOq21z7AXLWErz+xhI0h0H1vF/sJU2zGoqNertWwMl+hzR+h1irTId7ET25uotufCLRnX5Up4+pRprlHGXGDyjGmu2ixuo+pXOxQNvTE2nHMteYx6WsMqHIZpAE63QH2JiNsULBactoFcVSm4F/CwkwNd3cPMExikW3hoViPicbGTpaNTCOp5KNnnRiLrudKjSem0mujgySOWbWBSjrVQ0/RAdPu4cu1U/jt576IM2snsLNLQbU3xImTZ7B8/iziM8dgZhu0fmJhKIxdUzxE6Fo9ShgBdtIUilCgonL7YYeS/nyPXH0OAb+H649bbXWGMiQYRlZyVfc7qJ6cgfiQ7O9Smq2dsq0q8AaPipscIdFmOBsnTWDyU9VbsVvfuBTeaGxhpokG3bR33rmCy5fPSep9MOzItHDikNGpaIUrcQ+JYjjpWtsTMkEwlU1lOuHQU7y2aeyPEYQ2f6agwBn0luwcDMQIAznKXa7fWOcPPUUKDl1T1sINtPck5BmLC5YWFGqnnFO9Poc497GeeVlaJHltxpV6ow8uF9NIvmcnoNP9OnOE1F48qAKVT05TF4xExcOpMUjw0jbgep1041Q7jfjnjQR2YoNHgCEt+lnKPkyYg3VtoOIDKXaqCAUJmcJpjGD6WQQGR7iGuSptfsiaKUDtgDY+u8rMMVmfeXRBGUtLM/Q8OxRIWOPcYHlmFo8vz9FtnOCQMqm0GvAwU5rdA7qGFt3nRkVhjp83XWNI9yNmbbyQSjDN+7pPa49fO0GrVBX99h5DfdhMgtbeAfsiJlbgr0lZTTMcUIBJBYneHw7FRqxVa0hgZegOO0Kx7lVntItNyrRW0EAwZnByimp1hGV23EnGlLXWUKGAR0mcrH12uo54qslmFVSuNehw6PQDgWRMGN3OfV6ZOkMOXZmCJhSYqVy+OLeE33nqOTx54hQOOpTJ9aisXFnDccqsyhdOYjJTsSqlKRtrxM41O7fosgErzGzV5BAdhbKeU9eeUOaXk+7+jAyrQJjNmD7KSc1IyY4e3VB2epbOf7+Nyuw8i1nAsDU964JFyO3lleeKBVOLKHPCKRo2HE0TTS6AZ/yCVDYbqbcaOL22jG+/+x5ufel5nH7ikjDckzEtzMlEsifj0PVsHMnIZd5cHE+88mSQ+SGqjPeoMI0/8+9njuCRCoVfFrB8KebLMv4SWk6heWzgoRL2/VgULvBQAXFuSawhKTzI31gceGp7atpho4LCfTPS2HTQESl5Q4kTil3IuawJbeBhnJdxsA1dmIwWA7JfEbZ9YNUfvMkopJ9mP6MplOoWIJoL40FK84mYjwp4NmEXGJ4+lZyppnElrvddDLKe2tRkU02rXU0BZAsfVGt/T9UUDss4TS8+GBjNzvACLs16FIDKpQpWKNvqTjrosQED2/o1qpgvsb18n92wkLKagwh88WFSElIwW4OZoEJZVYlKMNbP4jVWpWzewvzKPBShLVaNqFxkwjMHsKiCMmMPWDM9rUglUKegslQKRaaYP25/3KeS9RDN2RIOy7ZK4OSAJ5g9ytJ6nYACHGVpLGNMz7laYipN5OhQkP0YxRN0GCzK0siaAaOpDAlKlTJVP1r6TUN6Nn02i9V20BEoq9bbp38zQ9f+H5+5hFepTGY2ADfT1mhvr15+HOVzJ5DOVEXgsCQW1HR3aa+xPj+/LrcLbIJlKxjvPZqZ1Hn9MeRxxY/gzCPnhJ/Zw1LZi3FDLAmCQmc5EYOHAU9GQudX2Buj1t5GtHgemtnk3S6lt0airpe2tW2GwAUtk5ceFjY41Wi1GYYtAaXmdTyd1GUn0rPhxUUBpE83aplS8PDj+3jvw2tYu3AWlSo9EHb9YOQ7E6NHI+GHaVqooWKeFC0U5kHzxIfBo37TBsbZQVk8z1SfylUb0LmVlZ9oeu6edqh22zj32ZZyEITQQRSCKasuq7Zgpo0kuaqLQzdVCWSULmN/5co0mZYGeckprjPOxEH6Tf4ES51muVVbt30l2xNLPa4ptGWjTE6VNe/Q+YrKhgYCLE1tmSq9QDY3SAsyyCZxQndaiLMplRXszM0mnUls7buS/giq30NplVWUyqKaIFoa2t4vCYqhEmkUG6WtEqldian8XblpqB3G2P6LPfRyS7DAcVM5uKeKD1g6QLHK0gPo9/aRRDyMSShjoQ1fpcOiNMHe/oiqAirpaI1UWN0zTkQJpDYJafNDJHMGrGVF11gJKXOh32E+ZK1awy6t9zFlVxGbo7CLDL1GnZ8EZxzRBPUq810joaYMKVXrDEL0RNe8i2ZQx0w8wPWkREGpSkFmiEF7iHgutF6aAetGUYAI2QwiwL0e3a9Rn4Iory+blVOFSn+u2iyWTY3pOQ9Tq2hiVSBGqDOyXiaOiTTWE3qefb4/FIAF6pOOQDtXnt+Xj5/FN849SS9VFh2tlZUmFk4xIPQkTI1ZLH2UegxFbAuImw+E0PkH2mQgYmUnyfAE81ix3ogR36flZXryDoys2LM6tV1urR6h+60eCFjq87Te8wioslF3LLWrpSJUeBM2K9CDPqJB4jhguRKBKmYwD/IpjngEOpySUYXplMmoKrxJWXKD418csnBfhLm1Nbz51rt4/qWXcHx1hQ6Foa16tbJkaOb29ehGs6plzH0KLdimiE91NkNwHoDa+PKtIAcNPVUOF3FKOlPcdKWstidl4AOSs0hPnF6VpMlhkAXGorROZm3vhfAKfELl7O2FSO7lel2gS1PkvTEeJ2s7VTQpspG+BBMXSNktmEG40mGMLCTCc7o0T42SyjRqnKFsfECk9jWEPaDyxryWhrszFzUW2Mu4Ms6utIc+cFIyGYtkb6Uy76hCHtKZn7SBK3WDYqtAelNhTr2ZwvEZN13VWYYqmabRnkThAjOLqE2wfcCuMiEqkwDdXhcz9bL0qLqdNjSDW1Mu92oohZTh0GadOCkibnxzP2skQT9yZryhKC/IY+E+Zmh9CPmQlMGOVCMUDATw64Yzxt4HbuzHbvxfrVboz0bWohKHHSsVHLs+JHOqI9G7D9HtD4T2Yw1cE8loalRW8h5g/B73tYzqi0bdiMqgRtn2a3mty0GuBiJNQyFQ0PEDd+iwA1WH9szZWhO/c/4FnD52HCM9QCuaQeP4cbTOPwbVLGHCqqYT2/cdszwPXwc3+RmVT9lrLAvEyvdM6hS46J7H1QYG7NLDkTXVmWSU94dQxnwuB89CwHpghlWYD7pgYfKUzfYrjNSsk4hxFn2qs+lJLcwAnX0KWGO6qaYQrIIHCNSmkNKbIkfVBzqd9yFE4dQkhfdnIJoSLW1OtQ2dDiunToim9Hs/v4Klb8wjolRdj8cOxKgFaCfXE1lgIxOxrehfhJhXWRRkIm+Z6abyKgKFCeBRFLg6QmdxI137QFRG80EhW/Pih8j6XqGNcIHKzTimquMHCcsSrLSVPOV03E/ofODy+z10vbPU+e8x2HAc2jDBCXLIwYWzF349zrxYfztJrJOMMHLtc09SS66VcpKPrNRYJQDjg7Z2MA1jS7+Eg9PI3n/Yxvp4MhauXk2E++zJnBlgG8dP5YwryClcflJaLFczQKgumEn4e67tocESQ7xprO+gtrJjnT5lUj0xBE3onm9q7gHVpNQbdi2Rn0XpeBVUOKuaGEHnB6yoy1mdUEpiUUlQTk6HfTS4/6i9RZWxLAMRNXKi86EP7iwsKeUYW96HUu4byXzontJ9MSUj1mhdqlJkThTZVsJ4YmB/O8Ye+xPSYR2JoSp9lzLFRoVKzXJkpVsY20Vbe0CBgiE+S7WyrLMS686zbNFoDFWpSqLRl8meooAzwO29A+Cwi//82ZfxtaeeQ0KvFzUbWDm2irBRQn9vA1gfY3DYhmLdL3GepqK3WUdttoVyq45opiV7Und6cj2MyysNNQadXVlr46WmlMuFMeGUtNN/YA/LZJpN6giXy/ecuOaVDIFOIsbWoNkEdvZh6BQ1elq7yKijUInp3oRCQbjPNeWM66WorJfnUfa2rcKLkfdeQv9tLq9ipTPAGz95G089e5lu9JoMBYTvqEympSU+crRxmLAaaguX4FvBZZdvoAssIHBZVUFUzvZWVD6yU15fwGRQMp1da36jtCl2YOwriBSJe/3QlY6mCJPwUjxHpirayy4b1+DOMrkgU7tgYUXJggPlSioLabAHDU8XE2ttT89s4iZ//K/57GEzgkmknQW8LUf5cAjc1E1PLKfND0CKbs9CdubPRCc733sWmktF24vrg1i0ncp07yt8mKQ6ey4q64Fpy0I4wmxQRxR+jOsaSh/PlYVuxGoBqKFyPRRXxzOtiR1a95gWRBdJG/aT4QE2uge4dHwGB3To7TLVxlinZD4AOIPgTGbEPZkkEEWQhILAMPX4QEgZxP1u8f/jzxFaf8OJwG6UDZaGpYRdWe20rgcjWoOmKiarfCV1HrSlVtGDD7JOfyiOOqWMAZDYxnjAPSaNA3oGq5QtyeSclUuE+mOw158IP5GrBfZK7AzYVbqWSXnXAyWKp+BrEpMKKlEpcz5gcOx2F7+xdA5//QtfRvzYPEpUzjVZV+uwg90bG+h9cguj7Z5F8ZdLgg3joBXTs40bVdRPrWLumUvQp5cRUKArMfeRe2TlHv2ZSc8DmV6GbvhmK0C7B/jwk5bDZwStCLlv0mfjQ5XJjAG0+LJRvS5pLb3RsAdRlWEbIUqzhUeWacPnFY/BlJfAdI8d00ldlrzksud2ccKOZZWy1kTc+B1xT4UW4aVnX8Cf/dH/g5+/8z5+fWlFGtlyYoeWqMpTjcQ58aQCfnRNX6fgELpsxziuXtaHKpgi+OzLaJ2BYT0R2rafbPDQTvjOY098L8iDUCVDdDErLZhxTOO7PPzgYVp1NvPQubOCyy6Mo3DnNBy+7qDEbiiRS8ED931tA7M7IARmQOVRyVjBPeGM0sZhrFecNbIdjMKVp1l2lbrJoGhejTAZWYVMIXVbcIuYp1Y42ynFMkFUIpnpYBx+Q6uC3n3R0zAzk/BaV0Yaxhb2kuS0JA4BqYV5eFsvO7pI0V7fwOMzq/hbf+1LuN5vozx6Sxrfdw620OsPpaRjVDa3N7jdwaYqlagkFBpOPct8DalVx1SutGkIzzOQtkOkyhK4hLBscm5n7LTfbB+Qe2GcYcUWZkPfb1CA5J4YD0VYqbM3ttZctXJFeop8oZEku7EoMOxShnN8DsIc0FTa1qkcnKEsaKtr2R0cnSb0GdsDmxXLM6KDg8vfUpV7bCNUKGCyWeyYPssn9/ZxuXICf/NXfxOL505hHCco03Peu3kN9z6+gQndm3q9hllRYTiH+NgCUipDmXiddobo3trE5pUbSG5vYfblyzDPPQ5DGZfap0yxVRMNLTWi9d4b5r1gxzzwnpafB83yS/kSHh13c1Yz4t4QNyD7PVQ5N+Y+Q78j421Mdf0dYlzlssePDI4m7+F4ETiFotJMLrDHgv48fEnDEp2GAZaPHcPc6jH87O0P8NILL2BleQn9bs+WPG56J8qYMt7Xkm0YRxqWICMjXt/Ahus1TTffTZATwo1Sj7S8yvp3U6DRwHYAdZ6dmII9UIaNKkzt/GexPasgm6B6qIh1urYvETqF0yCqSKDw5qxs+smI51FvDxNm8fd6GLOu+qAPNbEZCpc7IZVqpXqTSoAGqrU6qnxS1ko2OGlLapZnm4ZWxHGSZEwEKfG0dqDdoUAZuB8YhZ4tEGBAz4LLEu4hZkRsbabbEAaZi01uyuozMTjQsPZjW7de7AQ50FZ3SwuwNqdC2Yb+BAe372Ht5Dmc+93/Er9Ob/JXv/Q2PvjgPfzxB1dQHgK3drawQ597fXSAvhkLn5P5ewmVXAzE5JU3SnxZbqe+dTZCZVsw5q7yNBDsPajcTIzLWyN9Lm52G7eWOaANtR14cPCrl5SYyg5YfYHKrM7QiJjffL1uyfLhUDiFrJ02GibY6Y4F45QIb5PlaID5GQqAG/bQVcomFPudkTTFtVauV0YHVklJkBtTKTmi+zbaMVhO5/GNL/0lPHHpMvZAz4728MbtGzi8fRuV5gzWvvgyVp57BiWqWlgLHy4oSnVC+372lWew9MXncPeP/gSd77yOtREFxFeepCSC1gjd9wpP5nt0VyaOuWFyXwBlctjPL8El/Jy2wAX5EecJI13+GXrIde5L8Aej+lsmRXHkVCzVQ6OicQqQMt42R35HTaubBloXbLhsQJP5ktBAApHOYHRwmaL+xWeewY+//R18eO1jLCwtUmYRyybKVQ3UAw1le8Kn1q/gqISKMllZFngpnCBXEngYfmnqfhnfnlIOK5VPBYEiR89jkQoQkkBldAZbjjujCY9md8GM+YUcBLjsEyjHeIKkfYDu3g76e9sY7e9gSF/jQ1eusykCU2cYfc764DwC54DEMjjczG01EVF535hbllK7vrCK6vwCajMziOpVlEuxHEfs4aedBlmuyjCx2CsWlBPakMV68SZmnmdZtMkia5VVKCuLdAxbGhZ665n5RUHn3egcTT1l4+ahIikyJ2qmY9FaHPcG9DJVURwtUzA4QZvqxKUL+MZrX8OVD6/iZx+9jX/77rvYHOwKlq9Lr9E3FrrB2WmfNt/QKcPK8EQmYjbQsvJChQ/twMr5+KKVr5/NJcBdI8kmlIjtDRj2o2wZXOJBB5sNa9sbSp1AJmuxM6CTIpkDVitptey2KVPhaSCzsMKSiFPWy1xaBdKIl/Kffv+g05OAxYT5hIUGKXDWqJzbpdtQKvUpA2Zz1iV8/bmv4slnnqfScJcCdAebN2+hu7GFk088i9O//mVEZ46J4ieXxIq+wtS2Y3xFwCyW0tIMzvxnv4Xtf/sDbP/pz7BKjyt+7aJAjHSPJ/p1ur4RZe/GbZ1AlC+UI/Anv0jT3SFRo+zYfxRQ9Ej7XcbtTjdJVEs9Z4gWfDxrR/7BcCQPAiI5nFM/prUDpnW3balk55BeYUEmYTpwjXiVKXGKCw7TfELriMtp8UDHIsHC058zj53Cm3QivnvlfTz55BNoNZsWz5SRmAqAQz+Rcx9JejMiQMBN2kD+K5/L2FNLdKWMs1MPnUhcoKY8ArNpqrJ23BkjXZlc78mP6p3Ui0G+6ZQ7vTioSSeLs77Qurooe8y6oYSWzEka250BBu0ehnv7GB600dm7hwGVOQEt2Lg/EAWBlWYVLVpUtcV51FvzKJerEszFRI0nSixVQlnXgDb18N42Ou0O9m58iN2rV3AvpAOhMYvq3DxlXU1U6aQtt1qoLy6IzlPE7Hw+rLTNGBg9LuNthozwfDu0h1dC71ENIskixjrPmlTB1kwa6EHe/5H+lzukjCMMWpqQa667NZgh3WEDDG8wcW6eeP4jZRt0fap0kq5hTvo/3GtLaaMHZ2bx9PFX8fRLz+B3vriNtz6+QgHrBq6MN1Clz7rbnaCe2ilyn+55qmOZ8HHnoyYQhxA9NbA8VdG1smVOkFrLtZA5tmwYayLhF3IfUMq5UNt+IjvjUNxpj0JREaE7ZMUCeTNHtmfG6HsuG0e06XcOLRayKi7n3OsqUYUTyv3iHi0PLZhVcMjOOjJPYhBxRElFmcrCEj7Z6Uqg5Ws6ffYizj//NGXgtH4OD7C3c4ey7xEuvfYlrHzxJej5WSR7Q3q/kUgcGUdhY09Cb2bLtnvmoIegSlXOr30FW/sTbL35FuYXS2gdOyVGFkpbxVFWlBefRt9WyCS3H6Xu65OItBiwTI4SNdPlWaryqJZ4WghvcrbhDm0PosQ9jqoWoa6I0lVxJTEWT6McQzsoiP/Zz2cnR75BrYRSoJ1NkYMYeLyWdovPIPMx1KnVNx9zmh7X5GQLaaGyrs/a6dO4vX4H2wcjrKydptN/JH0OTtQtZCpwJFmdOdgoB2j1joJBlgX5jWC1s3wE11lJo9xr5a5CHMRMqouiB5k9loU5hJLJRCp0vL8gA9vBN/2hnLyyzVpSxrCwgiUrNnKfsL1PpV0HptuG6nagu4dQbAsFJt+WUJ9ponX6pDi+VOfnKODURIpELMFTPz2xX7VC45yna9IcmozFqmm4v4/Ozj72t3exf/8ulQmH2L1iMGSQYINed4YC4AJ9zc6hRAFNlWq0lht0stKGYx30hDKKOBb0KksEz1dCG+QTS3rlA0ommOJgY59PVCj9lBNEFMkclWY0HOUCWtEUgzNGZcYOv+dKMtZbonU6oXuWtlMKtouM74Qe0BqtUAYescTLUJxhFJXBlaV5fOm1S5SNbuPsh+/jw53/E3/49gcYDmPaeCP0J33KEuZQpvcf06OqVcsyeOFAxT28sGzLX27Ec7bE/pVRmTKQmIJI32Z7bH03ou+PWY2BP2aNDpPaFu52S/K7DFnojcbyqhz0WY+9w3glbrHRTdvqTDCYKMnWRqqLVkT3v1mRQ1RaNJztmjLaCSuMUubHulcxfQbKrsolft8eqGjDamUWT55+HGGNgvL125jQ82ZwqilVsU9lobryLmZXT1ApeAy6SRnSaCzBOVVJJk4pU2GO3twSHoxloLH061/F+v1b2H39pwh+hdbDzCxdU4+WwEQszJiixBwhwUGmzgk6CPMSXhW5rHb6yy3JX76HZZDJosiUih4yUxO4vKhEVUE2izyugBBtjyfwlJwj7qQ8+ZAMhMoG/sBhGmWBKlXudDV23C725ayBTmVfkDYkGDKeJx2OMeCQJfIqWqgODFpsLZzEwcEubm6s059bKMeBnLo8QZEshRUcQuXEIgJBKSsxrbDZS+gE8Di1ZiMAj1APXXlTpONk2CkPSMhG8KnLvOz3tRvby09cD4vdfgxjbhj/Q4GINeq5bFJDOq17bfoz95oOYWij82DDsBMRUzCSVETouOHLZgS1Vh21x86gvNiiAML631S6hWXbUxKJB7qeDn2ecCz6Tozc5gmhVwfKMxXbZwmN7b2VyxWU19Ywc+IETnAwGbOtOmViO+s42D7E/fVddHbvYfvaB9jj51ZvUtCaw9z5y6ifPEGneV3C9Eh4LSEFWKpF6tatRnRgjQOGer5GYsf6Ajgu+BnaZ+CGCu5wg8O8adeIV74X5rFg4uw0tsltiQLWIb33iJ41ZQyolGWNJmWeopUQU8akSvT6DSV9TcY3lGiTnblziL+xchYzj0/wx5u7+PAulUt7G+ifmUFL9NXHQr/hexYnlIVyrRSwWShPGFPJJDnosAZX4A48o+mAMRU6FwIMJ7Go0FYYP8VZZTBGIy5jj3Zml+4ZSyBVaU2KASur5/KapHvU6yTYocOr1aIAV2J5P4MmDzL4YEBJZJY4q2pTRnlACcTJmapIKoeqjFLQpANwne5BirP0jJaaK7h9c1fWWa9ziI8/uoadu/dkP81TID29dhLnv/hlLH/1KwjWFmSNhKlFsEuwcsQVIaLpMlJatyzat/z1X8GH//ifQb//Lo4//TIspjjNy7lAZdpwvJ+8RNNDsZpOi+CXEPBz9XPhhWQzc/4qY98xKrUKlelORiQ3prIeKAWbKEsfCZ2hBI9lrbM09z+sppNxUANuklOeHNqFySNyNqwcbO/gcGsb3Xv7aLf3sL+zR/e+TOdFBaWte4Izem63jednAkRX38DmlT+XUXmFHiiD63iBMJfKRFXLI+TGOku5ssYUBzRJdZU0rgPnUi1NbLZl4l4Za21zicNyrxzcnKRx4LIiOAqP4t4Hp8DJ2J78rGjAChLjAW38EWJ25uVARUGJ6jERPFT0dw761mhjIvQOXohsuFFt1VCbWbEqAI0mAirNuBTjz+XhFuJ6TYfIhMoJKhKthpYrJ1lsyzCVgpVMY6unJac9LJnZadfY4MXKp5xpcRmUWvspVhLl96k3SvQ5LmLurMEp1rmizK+7u4M2ZWD37mzg/r1PsLtxC5uzS1h94WUKXk9J0zWZ9ES2txQ2bL/QIebFt5JLbm5IM7ePs9+SM7KY2B6HZPLa9u9EzkbBGWGkFn9l/FrS7lqcbE/q0D0M39jtgtJClCkTlEXJ/Er6ZMwomKQTKb/5wAorNTocuuh9709w8NOf4UsvfAG/9ht/GX/5k7fx7773fXzrxlVcvXMH0VwF84qyh5A2sRwOTD6n9U/3vBRQQKTDJaSAGTZSyYR4WBHT85oMrVMOg0NHPDFiFxrm+ZVrlu0Ben8W9aPPGlNgKLPHphgBU6Cg7/PgezCkrGSgUJ2N5XI5e2PxwBFLhtNzK1Mew5PcA8oi9/oaF9YaoviaUECp8Fof0btQsDtz6hQdXgZ7e1uYrN/HT9/4CXaHh3j++dOYP7aAbnuI61c+wtU338WlH7+Dl3/3r6P+1FmRkeGKJJW+rxIojNUF51J8JElG5cRpLD//FG699zaWVk4ibs0JbasYjoqac1lb2RyVmVEP1cP6pSaFUrWEjv/GhpSUckbVpmg054T51PViMGX/nsEBGf3NG36ihbaiAyuHrEILisSggz4FJp7s9O/tYEAnHIPWEpYqSVlut464SafgmQVcrNdoA7PkB5+YE8wdm6WbekLIqknfCt/zicHYnxFbK/Fnow2E1GmN91MpvQRj5DhpI0tmsQe5nPtK8DVyTbwAY2fT5aYyYSbjYuvASFnAqnJcNpH+kHvGMt+KFjVzG0vSlGSZnNJcDZX6AsrVKsJ61QYkSuHDSkWCi0g8u56ILAoWg+csgq3OtCM8G8uVj9jUInSWYqFl66NUki82vUVcFokf49D9ysMhtLXnMg6RzBpGipVjJZhSQHDmEmY0FkkhBpcyIHH1xEksrhzHscefwGG7h3tXr+DWtRvY+Oa/xt6rbay99JqUPjydrDfK4ks3kYBCJePEqg1pw+oCYymTJfiYyOHTrLtKytCF0IkUeiaAdwl3097AHaza6aUJtYm11anG1AcDer+I1kzLeQjYrI6tsMBDBG45lCJ5jeEPfoLxJzcw95VXUL34tGykrzy2gK9ceAE/+vBTvHP1zygLeQc3OlTGzbIyaVc+J2uwN8SNLRTCcZ0/OweQ0LZP2E4+cKwDfnpD+l6P1uIsXTP7C1J9Lz2qMq8RDnB8kFMJN6myLReXgxqHvBLpdfb7PazRgTKgZ7RJ97C930WZSrJoRM+kNEKVvQgnXdy+u47V2liYHVwG3ju8T3vrEOWkgVJ/hHvvf4g773+C/bubqFMQ/vpf+hpeeOWSSHcP9vvYfWEbP//JW/jRn38be9t38Rf+9n+BxsvP0AGUSkWkIttPlGwpsCUv+mMJZHMvPYMbP3kD2zevYeGxpwUKIvpn2iCY0pDzuMZHObCrz6+HlbvmFkX2LOCNc6mYWS8UQNiphheytBzEqYYHvLlAXFgAixrfC0odqJN9AyMW2h9gRMFp/8YttG98gv72Nvp0UxkdzE3extoyqkuLqM3PoTY7g9pcg8rEWLIjwbQEcIaeJaGGBL5BzWL3cP0ZZTM/nnBJ19TLpSRW7tc4as2EqT3ivZi4UjcVGR0RIkvT7BQXsq+XUShQkQwjhSnQxKVqlrmxDx9PbEI+5fjvjKqOorz572WUHUBThhFM/6eTWmYQrgdokeBWsVOasmGQ8SE5YzSuLSnlL2dSkbtHrFXGpUOZT/EwN/kwfrNbPFWaRLbnyNkMB3vJ+vg+sabVRO5LKalIADNMM+GDIbXBvEEHx8WXv4Bzl5/AJz/+Ed5648/waXsX87TxO3Tg8DM0Jftc+LMoDhKREhcVbSZiw65HYzuJFQnW2GIABXnv1p7Rmat0rvutM/iDQGEEJ0eBLnQ+BId0cAV0/XS4YTiSaoADN+8RNlfiLFuxddyb76D3/gdovPYays89C1AgGPUO6HPSAXlxHq9dvIDnXnsGn77zDq69+wN07lxHODhAW1cQUzCuNWK0aYXtsSJEqSx7RIZQoYU6JMr+nQ+/ydhgPKIDhn5vrlpDU7UtFYf2x+ZkgBvtQ+zR7+zu9LF/0Ea/M0Sl00WFMqre3gD9KvcHjfThzlAp+nvPnkGj0qXLCgVJ36NbtESl3xzdxh5rwdO++MLqEpZeruL5Y8cwE48xpHu1dH4W5792Hpe+8BQaq4vAQQ+l/QHiWcqmZ8tYPrOIhVNreOMPvoXJ//QP8et/7+9g9tIlGKqmuG89CVwlNRkLf1N8JgddyvrqWDh5Eht3b6K2+BgqobXaC1xZb2li1nEpcOYvn0de5vNnVlPywK4BkmiR1xCHY8beJDaCGuhcsMsrPhgvq8u0B6r7OXDR6cHpc+fGPWy+9yEOP70j6NqgXEdr7QxWn6YyaG0R1fkWSmztFdgTlCkeinXQD3u57ZXzLrR0ylSCgpQFqSMlS7EdSr6UBrlTi1wXg2liR83hADtTz0ekYeCsiR3+xI4HpzltUJjKd/3vQTvvvtQpG1jAKsuDKA6S7FZpckv51En/xq6/p7h8dSJoXhKZHUeS1KLPQ99LcwDMnAoQyLXyptehD1ZlO92JSrmiqptkZg1ONlEIYzkNWZgvYB2xOJGyljMiRQHYVmNUtrCapZv+xRR0ONDEKXPHZimWrOGZU8dRe/ddvPOjn2N/8x7G+zvo9urY+/ieqBPIa1PwqjSrKM2wkmaLyt+a01u0tBiOJtIq4Ewxayl4NdGC4wp/OYdpgdNqQeQK7kjR67B5q6bPHjMVZ2iDrmENK3q3cUhlGwWa4fvX0P/RG6i9eBnBc5eRjroyxStXZ6w6g7IHVnltHpdP/AYuP/8FPHPlLSzO/xH+rzffxE16j404xbHJMSwmdH9bFXZFoSClMeY+LdNZeIPTAcTAUIZ+TEwZ2/TfDaootjvbiHcPMUPPfYYO6tEHnwhc5Rla96+cmEetPoOFpTJmZuZwYXmeXp5R5k36fglNurZGk8qu0lCyg9jwXazK505GPVFsCClg/w5Lg1NGz2YURjNNp0n3vgnVCKS1w9rtmsXBePm0uYKiKqBcwZe+8jxljwbf/mffxA/+4T/GN/6rv0tl3xrdy6EcDIJK4KEDpSncWk+6B6h2KGgfP4Hrn17H8f6hrK2qHCQoMDQsSbzI6CiaUDwMh/ULPKILNaSyNqBSmjgaBferFJ1Wgba27HxzuIeifMQ9QvqxpgXWYy7hVJ3KsuH6DtbfuoLurXsU+OiCFuew8sJTaB0/hlpzRiYKKWc7I2bTDyVVNU5KOHamEkaa5qltfHvpFFg/QhHpr0RSDnrTVGnk23PZyY+YXEvJwzgS7aZ/KsNn2YCFqRpXFRROMu10WH3vDOlurLegQKjcSZK68tBOdsOMRxi6SSIDOTmtstdSsB0L7Eld8lMMZ/OkkSPtpdGhnIKqZCqUSbBgE/fpxM3ET2YjZ++VSWTIs0s5YAlmyJbMfDCwjbtJSg7Ia+upOGjKa0bck+Shwf4e+rtb2Lv5EQUmngr2pZ92ijZT/eY6Fk+fRqtWx4DKsDGX39yLofXTpUXLpXGFISjH1lA6fQI1fl3KFBInehg46pJU5V4rLZPj1bkiq05dxhiIQoBcI32fQau63EKFNi26tJYip/nOpONKA5OdPQy+/waqVNrWnn5eqEUyCOBsOI2FiiLPio1Pefo5OUS4PIOzv/Z1/P1nHsd/9KPX8e0fvoU/ff8qep9u44rqYoECVrliRDOqQs9jQi9VG4/Qo5fq0Gf+eKuNva0BKmkf1aCC3zx+GovLNVw+fRLzZVr3e10cDPo4u9TC2qWzaD12ifZHS2AivNZZ4qlUX7KYL8q6gio921KTAuQEispvoeGElNXTtTZ4HYltkJUGl+omcuuGftcM7AEr5r5RA8ksFaSlHkIWw+zwchrg6VefQps+03f/1Q8w94cX8OXf+5v0vnz4phZHJc1FujedNn32DpXAYzRnZimLDLG5cQutegMzbnquXSXjKXmBm7v8AnUZ85CApR6hihUgo2s5UTeLw2IhfdsklnqMIzSXDSpyGYPXRQ8yWo78iTmAtBF6u7tYf/cDDGixzD92HPNnT6JC5R5PGRhfNO7uiAyGeJLxJnIgs6BUEhNJRvkKNsQ5+IilWOiKz8ByvAQi4NwdjK29bODSwJTRvJpWYhCDT2UyCVdvaZ87MgQPAGpV4f8Zz/IPomk9sSDMoLcspeKVVSVFlsDmJKRlNelMJyrwBCo3KbNcDziqlA+iAbTTPtDudUTeI4wthYez4dB51YWBEz/2wNcgk5GBsSN1J2dEXyXJ0DKMHP+838PoYA+9zS30tnbRubuBET3H5PCQsoZEtOYjDpK1JlaeeRFnXitRubEiYm9KMl8juJxkMMSEgsmYspPO4QG2Dg7FYJSnXOyMxEMNxvsFJoe/q4dRurSXoLFKp3wNElbp2vnAm/TG4i4jIx52JB/bQwXzTTlEhq+/Idy96osvyL2IKNAmFGgtoMsI6VkEgKtGpI25FGaeTsqN8JUlvPaf/DZee/5VfOPda3h/7yb+lz/6N7hO9+O1S48hLceo3jnEaBxgQNdZm4wQ3b2Defq355eaOH/uMp56/hmcOv8k6pS9hbMNyWpTqh4O72/BHOxgTOXhAZWq67THmqzbTgc091ErtRYFUAr2lbp4TnImHzYXEJ1hkb26SGmrUSo0KOmpOo9Llk9KhRplnBVfyUIzZYAR0WExC1Yl5KlfNGZjYjtYePFLz+HqhzfxnW/+e5x58UmceOk5aV9Ilzehe0uZot47BA7pIGJl11oF1VoVu5vbiBYsi8qZCGYmLAya9Xp46gFpdklDzMN7WEcJPX7Dehi9WyFCTRFp0yAfMXPmlHo5kXjaedfvaaevzZmYnQqNMbO2jFOXL4gQ32jieiTDiYQ76YsxZEGmhYE06UVPKowshkl5u7FIfm7cJlZBkKHCjcNyZZZf3mVFqYei0rNLr0zzx5V+lBPCQ8awcJIZnj9WsDEyDoEbP0yDPLeBmOoZQhX4hCGcq3RROyx/DQEGcInujGetEQRDPxIrf6KsTG7EYNvE4We41xe5MppBsw4LxokfY27AzfbOAMnmHjq0Cdu3bmFEgWmwuwNDqT9PRFW5JFCAWdqg5aVZ1OcXKGNqIWTOGQUtCa70bBWVF3o0cWyBgqQxK8R2euhT0DJ7+7Ypzj2R2IKCrduRr8DNA/BmD21QTvmU+35ySylTm9CmG1PGFy80rBsRVwYM7Qhsedz94GNMrt1A+QuvQc1SyUjlGoM6Q3kNKz8kek9O/pexsKYSi7yzHNa6L5CF4Ox5vPryl/Dq/l3a5Alu3Xof8SjCR1c2ML51iGP0CierAR47s4Rnzp/A5cvnceqJc2iePQvMLYiMN/t9muFYBgRqron5uTWMeocY7u1gdOcOSt02HUZlkaKpUDnIIGo+/LklI7I0lLGqzVvo02FYW3tScGBmSD9nI9VIZYBptp+PCiQXS5GJ3WGbyp4ymgJ2zPi0Cb3HgEr0EmabNbz2pRfwv/2T/xc/+/a3ceLUaZh6TbwP0acgf9DGgJ5hONByLUk8RlxT2NvpYbE+axEChZaJEfxdSYYwub2Dyrg0hb2mowKi0TwSYaqcSoLCEQlhe8hrR5GQxGmSOh2ngj67ml5gJpPZ1ajTgm62WtK8Ho3GEgC9gSj3apjxKRQIltIQ8TsbnDziO0s75M+hbd1kxgpxpiOF4KhpQWEiYY7QjrIESk/dFVOIDFPqqI/IYa0zetF2Sz16FFt01p42QMz6hYJDQk5A90HRai65/lPqgZXacRZHNpu1gk0OtOtHJoGU0mFogz3vQja8ZHU300+QUNbDQ4/O7Ts4vHNb/pzSZuFDiXYWylS+NRcoMD1xGrXlRVQZOErfCyo1RmXa7DqxJSX6A5sBcd+oN7Kzjih0JPSJZEV8uLDhwkxtFVict1aXyg4kpJBPTbYOjdec93ruBVs4r0fG0kesgMDUlt7BGCO6ptqxCgJuK1CGlc7RJqvPQe9vYfT91+n0P2F1yscDGb6I92OWuKrMP5EBsApVqaxYg8ZMGN7D/c4hfe5l6Ds38fP/9Z/i3PYmlVp7uPpnt7AwLONvUTl18kQDly6dxtzJk2idPQMsLAmoNaHaTgYbFHAYcigwCyZdDwZSzsfcZ7q4ismF86KWOnFkd/Eq4ODK7RD6Yl2G/t09TN54BzE9+0iUJFiKOXJ7OZjyp8yMRV3f01u/yf6SRrMSZQalG6IVxuYWY3q/C6dWcezUEn7+07fwyldvYu3i47Q2KEve72Kwt4vhsI8K99C430xZFy+B4XAoOQ0Hykz7zPU6tCp4lJoHbeqNI5xGnxeDZZwjqinIgGhnUZU4yWIuqBkE6Rug8BvM0UtseaIy4wZpDTk0OZce4m4c2tKTfffEiDGwnnvSe4ls41U2XhgWyp2gYBeWO8RYopV6OHLDqOmU6Uh2lWeT+hE2N4WfHZWl9hncFJDDE3kfYqleVF8oCpkV3s/qiOb1PpxIXpCBJrWUeyp1E0yT5iYRnCWw7rhFGkkmHJesXThP61iukukrKWVQfSo/ehu72L9HAWp3H+NDVo6FqCuw3lGZNlpjaQGtYysoz8ygVK9LqWhV/eyklRH5QUHZQ7mSnVebLlsRvljbDSHT49DCFoxjC8gaievOUSeWktBebyLPWtlaP9MsssHZm7xaVQU4eg//mdfU4KCL8Vgh4mA67ImMroDkWbH2rXeRtvfQePllwdixAKUKywXaWN47lGdI2b54J+pAyjJU6TMMaW0uzmG4uYk//x/+G2xdu43LX3ga588/jUv1eZy7eBZz5+Ype1sCZubt2uRyWPp42sIDlNP84+XM2Y+g5Id0KWN5v9Hmhiz1UUDBdkiBeCSpscA9eP+Md9ro3VrH/tXrWDp1lg6SJ+mR1EW+2fZunXKFC8RH5dSVCqbbI45Uz3tRDFzK7ObcR8JSyHQbL1Fw/+NvvYtrV65gbYmCaYcy7h1aM52uPDtWmR3zI2DQbuoYILyHoyhj4TBER+PI0MeYKYnu4s6KPs9UUD06/bKUCOUnZl5/yGQuM0XZX+Wx4EHo1polNPOCZDyP6H4r63CsfN8ptP0XAT2GlpNmMykXuNykS+gmATIPxNz5pdBqKhr0HelBSdPPHNUvPHLTpgJIMcjpI0/eTkV1MB3cVKHi9s7PmZih0dNaOp7Qm3EMrWuQl0Pm0id0bjUiVJfaYYf2hGZtjU25VBOACVuea6suGlWqgoYeUYDq0gI73NjC/t0NClAHcsLzRC1oVAQ6snDiJGpLi6gvLKA+NwvFEzaR6hk5/W4uX1JnRmvLVQ5MaVi1EjqCoXI0JR7rh14Kx1p82Vac12RPnZWb0/4PwkwqJYOKWJWv4p2zgV6CtQ3cxt8j5ayJaJ319w6puoykNzqiLNHUK3QHYuj1LQze+gDRqUUEq1SusAqC532mrv8Z5Ma+tm8YWmFAyoBSyn5K/LkbsTTif/4//4/oHm7hK3/nd7H0/HmKu/SejVVpfKfpQIZKLMNs+5XMFdSypBlzJuKRwr8fIWbw9bAt0/OIwbRMaKYMR3f78myj2LpjcwnY2znA/Q9voHvnPuqVOuovPofWX/wa0mPHoQb0OlSSJcFYDo4ocf2rrNttHpDsLEr5aOVKNpE/pSSCymDQfRwGCU7RemC3ixvXb+CVx5+h9TWka98VmAOvszHdoxEHrkGM/XZHrN4Sy+eR5ro1LglhigOlh6ESfDskyDOsR5aEKIC2oB5UJpiIs6+V9GBcS0ARHQ57ZfWSgkxhAchVBuAClWg6M4+I+xTKBaMoztx2BD+UBSpLn5G+Q2BTWG/JlQepQsDSvqsePjxiq6PI/2lgrBcgVOYhCZoxefbq1AGmfD+n+vMmK02N5xNmUzkf1VMJ2qZgWWXR4B7UmdhsIU1dMLJSHQwtYKUFQdInNnhpN/a3tJyJvGeFFSlLJQwPe9j65A7uf3wLu+v3hDBdiRm53kJlYQat46toHuMARaVeo4GIMygJOpYCk0rDayKHiXYTRqX8kEA7JAVzA1055cG0fvMrS88IBR8XZ1NVO/oLhcMoAcw4SIixPTVP+Gbiu3fVztVo3JRQW5VUC7ebSL/MZm8TdLc7gvKO6R6MqSSMeeOxTMubb6PXO8TqmVeEh6opUASVSqZlZZ20g0whwsrsUGbEIFxa+zylll7TTAWf/qPfR/ujt/Di3/5PcfyLv2qzKNOj+zSiZ8XBqCzUG552asGhO9kcifWJ1cvngdDmDu6//ibS/iFK83XxRmD6UFpjBD3T18o43NvA9sYtHN7fREilriq1MPvc01h85SXMvvwqFOuuU4nGATaVqbLtKZswmN4LmbKFc2mCm2ZLPylXc/Xab2E5FOXTUWcimd3cYhOHB/vY39lFObZqHAydiGWCmVgeKB0knQ6ViNoOmayCbWZJAZ9ViCWYd4PH0eyBG3XmszMsm7arB2Vh/Ag9tOA+qY1HE6fzlOtWSYtSLKd8RhRmsijWYsv1BiR4xTZSRLbMk4TIZVQ2q3JH+BTWyeSaSV4Nz/jg5YNDitxJs/BvA/0okQp3ecGjOQDKF2n58/bWXd6lNjBTIywXiFL3V53rfTnVSLi+HlyAEnKvZFEWuGrE/t3910nIiLpnkjoNc1ciuk3F97dULkuDfXtzD+sff4oN+jq8v4NypYxZKu1OXb6IhTMn0KBAVaMgFdeq8iwEpkIBO00sWJMzBAGgKquFxBy3AM4BKXCnNk/keLHz4ZN6qy2P+LP9DC/JajKSfVGxMb8vljiu3KbX2apTjmvqM3Z4kxLvvJNaqk6orZIISwEzo6G926GXbgh/dDAYIqo1MLx/H9vXPkL12DyqjXkElF2JRnJGnHbPUlmBrkyeSOSQQ1HaDLjJ3Syj+8H72Pijf4/Lv/VrWPvCF+WZSF8xZKMNClLh2AVum/EJRswIJ8Fpu/FmTiQrD6shuu19tO+t48zq08I6SEsVQcd36Tluvf0OOtuHAnptnT+P1pMXMXfpccw9fl7I24a9Dvo9OwyjgyNxB0vZWI7mVKUQeHlpncGWLONBOy6vc/kWjXottDcO6lu3DykeDtCsBmh3u2jv72OmWZcSl0HgzB6YRBPxfRxQdjWk7KpVrVqojtvCkpWbQFQltFNRUcHD+lfuz+nn6mE9JPFip43EmjUqJ3XAUyn+kKLMkNr4GTjnk8w4wDfsXbPcSsQEQiPRMo63JYAAQ6Mgbyx7cGeR31Owb/I6Sr5haMy04YUppr6qWKarorzXdIos2b/+BXpgympXFX0zim46/ne1r8lT93e/IZ3AnHbBJitnEultcOakhH6kJVOQgMWBSdQPkuxg8Bvd+AxIWdR7VDKY9PtYv34Ttz6kQHVzXRQx51aWcO65Z7D0+GksnjyGGYaQsD+fv19cvnEvMq4KwFTUVafK78DxaLQNUiz1E2jHSbTqAXI4eL0uozNte7iAw0EDJsm7fCa74ZnMsorSbMhh+26p070q9PGUyYY9/tFZcUELbQgdHm003EXnsEOfcUmOoAl7AtJ17H90FcN+F6snXhJJZIY5MDAUMtwp59Zh/JxDBwPRFs0fs2wLHaalsEYfo4+P/8n/gcbpVax87VdZ8AhBUrclI2WjEWVEfE+5b2YNRhLn2ecybW2DuLXaos+xsITjv/kNzF67jgbnKBSwdL2KeKuL3esbGNLaOPWNX0Hj8UuYpa94dUXkLbgpzm42ItZHpWrizIFZ7ZQdgjhGBuYIdEe5KoSfu06dGomSTF60xCSbn1jKHQNQKRBu3LuDe+sHmGUtrWCC3W6CtD2gDLBqM2zjOK3sQEWv3d05RO+wS5+J/jLoCyMidSV2gFwYwTIYkgd6WN4PgRPpqZLwKJVHOaG5wDjAno8+0mei84W96ehCQx1TrUrRc9yhD7mcYZ2skpHO3iB07i3ZFFEa72GuIsoB18vNSNofZGxI5QmKfmF77JLJM56iBGCxbJ1qJk4lj8G0yqnR0yavatrkVRWCltB/sqzN95iMUw5IvVe9U7aw/RWfBSlHf9GuQS6kWR5lM+VnMpYvgY+lPBYeiNywUIZSbz+WI+eFNwdrocU66eyyfLC7i80bG7h9jcq+7U1K1StYO3Uca2dPYuXsKbSW5qHqFkTKOBw+QMKoJPARP9TQkS/Bbc9GKQ+lcCDWoFxYE/kBoQomN8rV1rJQsyDu2QBh/oy0nhZdC1ypr3XWjLXvn9rJp9fJ19YayjIIJpkKqXZGrlyyxOEE4y26h4cxSg1WKegjYAfng0NsfnoHcXMG9WYDpkMbiifRcWCBssr2U00mG+TUNwI7KGI1D56YKaqYD3/8Q7SvfYjHfu+vUuZWEUiCimpiKCxehJzhGEf78uFC2UFK3m0xmSODmoSorp1AdWYOY8qIR/c2Ybbb9LgM1r74JE6e+2uoHV8EWnV7vb2uxTZyUJLAWpbDjxUVxH4rdLQrFDSnsizK2T8Yp6/PCr68rCLKCFmTnYKS/HpCpV7axfbd27j53qdCip9tzIk/Y1DhK5lgxLAGphDSYZlGVjGj1B/jfcpiP9rZwV1acy8dP4ln6P6z6QvvDFbTYBwlv0LqkhpVaO3Y1q7KeIfRZzEI4ZrR2pdY7tSTU1xZGyLoMsaKvrhBqNMsg8hQ38afVCaTDFGZw4yb6PmyyfsUps7tOLDfk5LTWLUATqt9EDIPIUjmH91N5wr8vhwqcGRKZ6wP4rTgYZhTa4oazT5wG4+UdxLDbmLnnV+4Eayds4rYHvFJZVwPyvpyWcI1a5s7XiNnUKlg0cYS1CCN7UA4drL4OatJVdZ0jFjChKkxvR7uf7yLW9fvYv3WfcnMGq0GLj71DE5RNjWzOi+E6lKtJrw1U4qliRpyI7Vkg5VwEyJHlg78PQ0LemWR60fqbMMpBBnB3RS0ax+pX1tEfGabNMh6KfJYApP1tDKl0cDkuDatCy46tqEPkUR295VLY2V102hnoLvVQ9KmTTIbUznYR4Xeb58BmfttCuKnrSlsp0OlGD2rUs2uOUY3xtoiwwNMUxrYxCQOUaLNDTqkb37zTynbOYEFyljVsCfuy6AsyziLLqFieRMUf7AWVGTz8sdl/HStXP4x5zG4dB6VpTnBXx3cvC33fP7xoXgPitLrKBHtsFQYZyXZTzqyFmsxVy7OkETkkxg3LKUq8qGOP/ic0awAT5mN3vXmLH07iKH/tjfu4sYPb1AAnWBuoSnOQ3uDAZabyyhXAhnEsPqwVrZHWe9McPW9d/AHN97C1pPnMbz4LBaOnZQelnLPh7NNCUgKVm6o0B/2Cg5Zr8t8jinhA/CGIgjUT/7YGopNGenCZh0OyxsuGKRehi+L6hxstIuagcO7iheg1s6S3QnsBS7D0Y7IC5vTKhTgCw/poJtHcSCLYnqFCaB6VBVsJm6R+QClprIp4zTFMzU/L83iSj/OmLJ7oW3fiUu/1P2Zm+RS1LBIHxs9iNJFCi9dKP0pM3KOM4FgWYweIgq1AAD5VvX3hrj36QZuXPsUe1t7qJaqWF5cwOrZVSyfXEWLSr64VkJQrSCs1UUShyVyRAQ89JPY2PYInV69d9+B99GDF8/zp3SQa0/5rMAcqZp9Jv2IyOXBs3kvRWVZqXVR8Yoerm/le0kP1vDSq7HmRy5zdQoT1ggE2Ns+oMOUAngtttqElBnd39wQkDL3+MYM0qTtIvAN/hw1el8GS6aRKw8ZkpEKbFFKbhlm0PuWDQ4//hj3P7yOp/7Kr6LKz1mUVocWaZMtM5UHKN/0PoL9U8ZjvzlJGYnooPBMmSR+4hii5UWY1hw23rmCu//7P0Lz9Dkce+EFNE+eFtwbl2uayjNFzzIYM1XNYGxsgz/ibT6wMB97eA5zeLJ/Tqkb8qjEDQBSSrB4/Q9Qpps23tzFW997H7vrHazSQVinz3Xt9i72d0d46mSTbg8fBhQHhMhuUN45wLvvf4A/HN7Dna9/Ac3Lr6IfzGLIXhBpWnAWdE7foqphsraymeqzqcyO5pcmPx8lQbPzDCd0Y7pRg2SIRQcAM66ZnPG8snG8s5LWNjnWTDrVvp+kcnyNslZNudOOE8LTKrsYL0tsPleoPdpxV8595egLFBeTLkALkJfEvleVFhURPWDRTkXk+mnjcFkSaIshMvJltaVYASLQOgPRWh6cg4Q4WWbx8+PTPxnJtVbKFUmKh4Mhtu/dx73rN7G+vo1+N0FzZh4XnriE5ROLmF9rotyooUwBKq6UJUiVGHFOC1vGyZHV0BIfRqfeCu92zeqf+dDINz3s/dO5EmRRc98PGaAKINmCJv600JHKQMdeo90UO60FUqyeqtdV9hIZVEZbqEc+SbWwCK/1LiUuBaOde22qYCqot6rSZ2WAZe+QSix2EaLAPWh3WWkKpppIOchy3wHL6zAOkBUcIguwTTkLda5JJb6R1RE2f/BDxK0SZlbmMBl06ZZWLG9UOZBpmGvVp2K4bfLh9cPYE8JASGwPTdSeA6uqQSVm89IlMYHYm2ni0x+/gXs/egtrF85j9cXnsXD5IlQ1ljLOJDEi7nspOzDTJTYRoUAmAcglBY4pYZwisPQIuSWhrQtVpHsCsRA5mMEBrvzkCu58tIVj8/Oo1NhMdYL3bt7BLN2jU6fm0CtTgKNwUqMDsLq+jx9f/QD/skkZ2GtfxsIKfe5oBvOpNTBJjM3cA6e4bzLUonkQ6/gQHFbBROuXC1iBm/TxGTymB9Ue7VvgIqeUfvqhC+JwaerG2yqb6kl/3on4GxS10QM/WMvliL18ivPZS5X6RaaKn+mlIZreGU6sILPrblpQUJvw4E2jc9spnfpekuVGKtezMs5JNxCPvkTG+Dr1RqOp/FxKQVOwyHKGovzvRc7Gu9/QtVa4J0GPtruzg9ufruPmJ+vY3WwLNWl5eQ6PX17CEkMR5maEBsOaV6yhFVNJUeLJDBs+yCTXSqjA0aoksDqVB8l8nV29CVSmr65SXxLqrK+gFXAU6WGKgN0jYNnMvMNiRQoZle9rpRltKesR+kJAmSzB9VK52fzXqTVonfdkjDTbXZ5OZRs3gw93KGNprKLBtBfKtEb9kdhWVSpV2bCjTl/4qkLgHVCwSFhcseS0yEpWVjrmSXZiqwnWNgMFhIMx7lx5F63jixbwnNLrDpXT4ZeuTI4ldGteZ+JwzkzFTNN4jWtES9vA2cWxS3QkopMlVOtNHPu1b6Dy+OO49cYb2PngKj79p/8cx86fw8lnn8Ls6dOIKKjp4dAyRLiaoURCxUMJYNbQJZ5ysBIKF+9L8Zvk66cscRhS1kSZom7jzdd/jrf//BpWKzPStx5RGXprYxubBwc4sbhEAXuJ9n+ZMrEx+tfv4bu37+Fbi010X/kqFpdPIBqk9DPLdkhKketj++GryXwmLeZOT4l9ql+g1mA+y9Yrm64d8c1jAOGY6vbOxOTjYBjHKXT6Uk5TyjCfzdoRO5sgq2hpsmZ6UCAPFz64wZQ/n9F5n+TRhBfzkCCVv6bORuWec2cySV5JoJSf8qUZL9IU8FHG9wDS3A+QewdWJ8uaBIhPn0Oie8kdjtLWANVkQofy9xSZCzQThxlTNOz3cG9zCzc/voN7tzfl9xbnWrhw6Qzm1laxuNBCvV6SsThnTRygStUaokbDlXpWJJCDkOh2MWYLE+l3iKmFyFjbkjMI0hyyoYwLMmYarx+oB0x1/Z0OCv2u4Mjwwp4qYRHyk/WhfGtITdFcM03K3IvQ5NzIwK9JLs2cOqu3pzfOuSeKYvR32+j1FBoL85xjWES4qOJSFkX3KEmtKqkcnGy6SxsqTCiwleleUkbL1uqsYcamm6ocyT1jJQRmnUzWD7C1fR/Ll58RNVZ2oU2ZEM33WjJti1djxgaXataAWAmUAZm3gZnK7CWgyO9od2gpmaom3NdMrPktQ0QWzj2G1qkTOLh1E+0rH6B79RN88M3XETUp63ruAlYuPo7asWOCTpcCn7XWjUX9K5UUigjvKenUWZMew+wkqwvNIX7yw5/gv/83P8Bv1M7iydVZbNHvfbLTw5/cvo+Z1iKeOHUBS6qO0k4f63ffw/cGPbx78SzSyy9gvraKgK3RKJCPQmsjZwdywVTiI9p0PlD/ohBUwGGZz5tVqUJWw280YStqerBjKjP6E5OpCHgJGtnMrrcgInjByGJRpPEWiiSt/X03UQpUxuQOiiNvl1arTKY5H2maR9mIFcuSLAXP5uKZNXbWJM9MO22mE/gHClveptoU+nOpnEwS+CRbypuY2rm4JDwpTdJsqqi1KSxMWxfwxuLXjnlEHlvAIpcthwfblE19gtu3N3Cw10aNyrtjJ1fEZ3FhYQGVRoU2UCB0JsZHRZRVxRSsIgpWDFMImC7jQJ3KHRqh60lxWs6QCRVoB1NIMp6hh/sH1h5JgluuWR/kPY8pLTCnsc5q+ip4cHBT8GQscjqz/pYqlvlhpnQx9czg3Io9wVk7XSxH1rZthzSj+3A5J0bP2x0MJxFWZjk4JXLvWYtKWdty+6nY5MNY8cCAVQporYYDKtvLYyrzONNihDcFnrIlYXNFkFZD7N25S0t6hEq9gbQ/oZIooayt4QxTUgGUMsWGJXlUmMqGlSzWCdfZ+2sKZF/XG+R+ppCrmZozFi332LNDpFKZuKZ6GUtnzmHh1Fn0Xt1Fn01Xrl7F+pX3cevNdzC3tIwTT11C87EziObmEFbrNjlgpVhRp81bNdpl/gKdoYASTdr42Rs/xX/9z7+F71xfR/9kIiVdhUrBT9e30KCg/fLiHI7v7uLe1iY+oMPqxuIs1l95BVg9jnKtIThBRYGSt0CpQgFb9yWhURkORTs2iM2yVKp+8fxP/QcYqWrJCqxRDy+4EaNZ2Y/QcQmNY8xnGZZoPSfS1OUeAgOm+aZZTzVkpqRe2cviqlzpGOR9DUv/MS4yq4L9+3TMDUzBvquIPSmc3t5MwwZCZNZlxoE7NfIS0ZeDnjoiCX+iM10wrbNuYcG+3Y7YfSmjjc4sjYzb9CXKitgtmK+pu7+P9Vtc8t3Cwc6hfL8128SJy8ewsMKuNA2UGYUthwIjj3kaQ6k4Z1TVhpzkQhhn6enENlZZwlps69nBiDeJTHcDaTKLMzU3gUX9IcwI1splQ0WTWLifZ9PSQB3RAgtyba4pDcOg0K3KXbO1Mx7IMmrfB4u8955vuPtMWmcUL/lzYgGzFqDqSgzBAFqJay7dWA11b7+HEf28Xq+6z5BKiZ66gCUrh8f3gUW1s2IAE6NDlqAbUaAojSlQ0cHKJRIfBJSBlVkfnn5jb+O+CNuVdImWvRGj1ET36N9okT3iqMOlOPeBEjankHsdyUEh6rBhmB3GFsph6VYyLxtb+Ivt5fL7Vp1aEz+XAX0ezpomspcCKlvrS7OURc5i8fGLaN/dwsEn19H/9GPcfv116O//APWTx+VnM2ceQ2l+nvapU1x1WT9bhU20nThz/+qH3/0p/u6/+B6udyO0ZubxzRu3sXsA/EUKfFEzQrM6i7fp/d6YWUSP1ub9hQrS1inUKy0xzEgP6f6xhlpsqXaTsQXjKk/l81iqwGb4fBaF6jNTJxMVKFnKc9pyQXi7GS04NbCmjy59i+MmvTlvirL0ClSpgu4BgzC64lvAU7B4EiOJnWeZa+pJ6seTF3497jUEQ9dPdxu8gErxc0SPj8qtf3yf4zMArqpgf360X+C90IrDGm1boz6QxVBZMDIuO1IuO8rkjN2AQUo6bRwS25qf8inojSbFZdqN3DmIxBRYYrqxncMuNrf2cPfOPdy7u4HhcIRGvYmTZ05RuTePZquOaqPqGO7GIqhZ6kR04MvimCLSvuIyk0jpzRZR2sE5eKhhHOBTp47XJxu1wApInY5YQQYnVOmUUSycqql+YIhRNAowOe8vmB6IeAqVzsp426/IiMUepuCy3UwoI8h9KzPrejk0xrKxWcxRJWMra8S9QQfQDahm41LksN2hU5nKZlqvZtx39CKrPc68vnSUCCI+dPdEmsxOwpjNdxPu4yR0f8cUsOjZ8H0fVkK0oib2tw5pfbNF2A5lcfyZayhJF4EDnp0ySvbNr8nDpcjCPzQbmjitfau46YUWbQBlZZJQWXApKzhM9rfRb7OF21AArkFtFrGjTClaA+gNrUWWZE0R5k6eQmttCf3nnxQxRSZNd2/fwc0ffAfme9/F4qXHsfL006gvnkI6bNOaoc9LwTliiaCgg+9+7+f4e79PwWoInDt5Aht3PkWbPtf64gI2f/uvoDlTxfZojMNKGX3WPOM1SPe1PqLPS0mLwKnlMdB6ZPluh5aX9SPiBlb6h58tz2criRKCNfspmqJqie91FQ7OKEu2lMlXo8qp3IIjEaYIi+HrgntxYHuJsgHpZlVmcY9SX9MbsPQZBaJQ+EshmzrSRokSV8olKjM/8GisIOtx5AseBXBdrkBcsE4004Wgeeh0IciyK+WDccHu/gFisnZSLW5qNzRJFhglGPlS0qO3vYKpz6p8n8rYQMcnKU81Uyfny1w+5lkNBgPs3qeS7/od7O7soN3uSaY1OzeP+TOzmJufkZLPVmm272LFJ9iANJLpFtudheWKBC8+pRiAxyBeuYKJHYaIJljiji4VWe0yodsoJwNdlBaJsuAq1vZO3dPbl3lAX4Z/MioLJp6BoAvsMFUwH7FxJyrQulz/vahaoaYBKgzK1QUDXhQsv+xU0JOqGWgp9EbJ2hWTe00sMjntzg66tNHLzQX61gSjiS2FLOA4sNy9xM6E+FFz9he6slj5Tr/QMm02x+7W4YgOoVGMGvrotbtWvVXKeCZ3G6GjiGMfG09Q5mtlvgw9t9QGSR6kcBYZumfE+mSBU4h1rALDDTKmpLE1HWXZIa/PnV3sXf8EhxubGLMxLk/rVpYwe/oEKgtzMgGOGGnOgXzUkT1ZqzZROT2D4MwFTC61MdrbwcH6Orbfegubb76LE194FUvPPUXJ1pgtC1HVHfz5d3+Mv//7P8T7vQjHzxxDrdFAico7/r8SZXKH9L7dVgv9Xl8OoQrjxfpaYBGBaNdr53YVihZ/mnpObyhwHn5+cWCpd4G0st1wjafhrCeGYGpvTuMlzVHgqJ7OWJS2fRuRmLCLdCKTpUCmCZxWD2jh1BnQSFnBFpoYdsZ0CoRil62Fj1ayAMrAEXjdVCpwmCrRnCp0oTKazQPN1wfZ3MZ8VtmK6ekfjmRmvsQwviuWZ1JyoxI1ZdtlCvIv/N+JfErvrONO9gwWweVPLBIhZfZQHE5osexgc/0+nVh3KEh16SStokEL4sK5NczMUCZVZ3KulXoWgrEpZdxzDur8WtKriu3InEXoLLgUcnLZvoRVJzUu65EnGjp5H2WnTlZG2mrH2++5iBiE2TOQzeRmKNkJ50f1CgXwqMrY4uEUFEHl00HjSO+Z+bXdmMVul1bToLgkyM1KMh+BzCnHTThZjpszK2m4T6ynoqy5VDbT4GCAZN/qdnFJwqht1hsPJwPRrkonfbp/A9tLSQKn9Grde3hrhNnnd4b3E0euZlhKtUt74ZDi0hDd3R4aaRWVGXb9oQN7UpOJ3rA/FJwXJ5fj3kgUFoKShQ3ABSuWTJIJYzCxXgMyqdXyb9hdekxrgbOp2tlziGao7Nvexv0717DP6Pf3t7D1zntozVIZttBCg0qzxrE1qKVVCgp8OFKJOVECXwlqFQqga6gtL2Ppieewy/ix97+P3fY6jj/xNH3OFN/60fv4B3/wOt7qJVg6tooGO/XQNTdml1FvbEniMez0rS/nIKF0JLKJjOiWGYzCHKcoLQUOYN5PIeTYkVqjl8SZEnMVFluHLO71cvmIo8Fq6v/iz+YSSprqwW8yptdWw8o1X+OQyhLdp41EG1KHONw/BOZaVB4PUeE+CXvJyQlmsnG6ck15C1RUuVhEEOROz7ax4iE4BaqfKZy65oGLKs6whBfl9BGMfrABX4QwZOWGBDidbxAPapuiidj3KDGQENr1rGzpZdnwTrqmM8QW3Y+NexvYvr+JIWWf5aiMBp2Gs8daqC7WUK3UUamULb9OBiip3FtukDOIUaaGHIxia/wqqkac2Ul2pyWjkBF/aDOi1G0yHYZ5GhPaCaAKckULL6+cecJlgcuXfu6/0tNy4NEgz4QC12tUgSo4XheIlcopc/qMLHVgYDf9zWWApqeNynNGvQdhUACf6twSirtIcnLzJC5xQUpbfiYvOLZ6293bQ49KuZVWlQ7XoTTbOZ4FUhYG6FKmW+50JLvhwMH0pkACKeOgUstpLYKO/XMNKRiNNNrdAdpU0r//03dxuNvBMpXxT732NG32GtLxSDTE0pF9nvzaXH4Ox1biRzluphaNN1ceOpyXUmMx82CdsVDs2cqiWRYeX6EybhbnKTD12fl7OMDh+j10trfoMLyDu9euosJif+U6ZhYo+zpxAtXlJYQUsFNxaIpk2BDTNaydO4cKHZDduzfQPNjHjz6+hf/2D1/He3Q7FpeWxDujlI5RrjRQWZzB3vwi+qOR2LRV6xXpTxnnUmRJzNYizxPUVahdBq7lrOLDlnd/lda6uEQZm+GLpBQf7pEti6HNL6BIpJ8dsITILF6pqWyYcrWOHj0ohvqX+WYfjlGtlTGMmzgsL2G7u44Ti1Tb0sk1pt+veGpJGkyBqrRrquvMGTnISoyiaKDQNLw8m5nOtoxRD4UuFJxeM6CimykfkYBWUwHL/zkjTTjt9LwZnzfu5Y9RIghw3rxlVjTjwcN+F7u7OzLZ69ymIDUZibJmY7aBheUVWnsxLRQKUuxDyJvC2XFp5VDloVVbtX1YYx2txQrMNdO1t7VSdqCntAuyQbaxtGv2pwFc1hXkZZorFRVyx2pRXQitWqtySEZ+72yzQmeSPX6K60lMqijt7JUjYV/H/0ypHPTpDxvtm1RHpoZK+c5lcdBylCwGZ22fOONOSxjXDqqi2MV5WMLOboJDOlTO0wZj5VXp8dH9HHMpyC42yQgDLhPZTSi1TtihN/wICuh7yThzWEcoBHE20WD1TUOZTVPYCFu7bfyr//v7eO6F83j2uWdps9epDB1RAClhlFjycYWR9anF+CUuIxeqWWQPdX7LCiuQsvJJMBDalDg/ufsiR3lzFjOtOdkh9RNnBErBgn79wzbGnQP0Nz+lcnWI9tWr0G9fEWeicquBxtwcypRMVGeqYopRo/81z1zED372Jv7Bv/4Rro5jLK3NYTauS4/VasyVac2GWFhq4WCixSWprEtSJk8cy4DXf8z/U9blmtsOjBFM3WAsMhaqwV/SpwrtemdtMmZu2L65w2uqaeccdaRm+syAxSd9kulDaRHh0m6Yk0562IkOMWNWsUvfbNObfrRzD2cqfdSozh5WKpQKx9aaKgwLImx5r8Q4q3jXuMjdUFyG5CWBkYmKFLICox6NGXvI8NPbnE/L5GAKzjBdP4eFn7sQ6tC6qeCr2MUnxag7xOFeBwdbu7RoelZTiXEszTpatFlqDQpOfGJFY+H+qeEQycDJ8yjrGC29KH+DXF9jIpkR3f8wv3/wsjwO4uEDSOCCiXGByY/KkUn45L0lUQSITabXnwq5uWgC62Rs/d9db6sYgLQz0lDO4cdnW5mZRYGQnmH2nNaSLSWjHCKjjkAdWF3AW5AdmWsr42EAqS01tFW2sBI8NutilyV1OML2zdvY2pxguH2AgRi2DpCGRpx8els70u4YbmzKZ+JmdqM5Q18tunYeclDpzQT/0El2+2sLYIX/Ol0M7t/H/q0blP0c4PxCFSOKLes7+/juv7iKT3/2c7z86otYXl0Rl3Hu/7BsEhunsmif8cMY5bMre+Ak9Cy6oeXvsk57wrZ5qc0g+X5wG2aseGATSwCMymWRUi7TAThDr5PSwdhaesmablAGOep1oFnBgTL94Z0baH80xoj1tejAWGpUcX2vi//uT3+K76/vo0RBbdI9QLtMJW2tQWukRodqV2SWx5RZHdA6//jmTezze/P6V34Nq9z1PPQkmlAGILx3eLjBB+IWVRgrlRVrUsOHjslF4xgPx9jD9AgSy0zJosZHA1Yw3ceSuXIoL8YTLcZnSIDhU6rfRkwRsaIoY6DFt1avYfnUJegh/d481ZqzRnR94JHVDgNkN5xHPbspCaY9yTzaXTmtJfUIWtBnY9z1lA77Az/VepqNk43N3avzBijeOOEBWpAnN2BHvZSyzT72J4foztJJMR9ghjLQhjQq6RSjBcH9JiaIi4wv1+kFZVOZDLmMhDMaKUf4BGejAG6SuwTYgnO9YKFrpitblknwMPnszti0CEE2w1BZmSxXJ1mQSLDZnl1R8VPp7N4H7Hmoch8zH/T8vQ+80NqRoBM8RCUjYy9MPeN0WjpaHYFDPJR4oRzhnLFII6tMAKfE6iawsn4pI+nSBu1Xl1F9rIb45CXJaEbDfUFqS+F8OpEGeKVazfqmrEDChhdRXBa4ApdQ/Dsxk8TDKA/ogVWgON0EWvvPUym4jJnFpky6aoMEazs9+bTluSbCxXkRDeQDp0T/HY1HgufNBg1+WuiELpU7oESIcWht7bi/w6XTwFiGRGXETvPW4JcFBKXXOggt8oRzPU6tUYUWE9cakiplgvWR2JwNKOh0KVPq0ee4nkb4tDrG4sst/ObLFbTYhzMaiixPouwEus7cRA7crFVHt21EQQ2018t0P+IgzA7P1Jmt8JINZeeG0vfjSiwSw8ISOnRNF9cWUecgi1z9w8Kejkj2ZSrFxZIwoRhp05Tn6GffoYU/Y2vOyDb2/z/2rixHbhuIskhp3DMZOzDykyPkBjlEDpdb5Tsn8EeAfBpZbGeWllgRN7EokUVK6raNZAQY9njUaqpI1sZXrwydx6TGz5ax0C2IxykI1/qTuJnc7neT4Prz5BKbqvZXvW01dIMPk6YfxT94Y9kcbuZGFEArEnxSOPIL5hYnVBFiNfgYsp+aw8FVnWGmAJNottC+3iihweJ+AnkDWEupPNkgrN4BZ/poh2XGkNVZFAGLeNyfGz1EXnfrLfk8gINx4JzczlDNkwMXyIgxkg8TCFvECi1FC0JIdkYY5DJTCQZiUUxN+z/ODJkY6fYh4ugcRkPZU70Pnx6FgSud+lvXddwcDk3hjCLs2FJKUucY14KU5FRUkFrXYAgmA/5smDVMmzuDgAfl28ppa9iFh+KgZdNwRceWuQNI4wcREe2xvMmk4Bxw1kJjPOebTQGMMwrNNx6ZyZTsveCVh3kHhQQTKKVLIerI024KoEej6HGKgkyKRjle+d6zvtpvNCwPhmPW5PaMArOdo9Fj8sL8E045Cd6AOImN4MptpG8t9mQNrxJvDf3MJBPHMPxk8+LGQA3P4OA5waC7FvLi1Cn86/3v7+9ef/9TRxaQ66WCkQMKbCNOozTdgrXsk6YFlJo8h9Ot+OHNTVrEaod7b/91N2dJGIWxQvRsU0h1nFmdPKcVNQsFdaiYcdXVKW5H7C7CWVippK1vv88U1Gs1cc5HHb2ALWbPv7n53m/fTn8iKXXMix19N//3nfgmgSzbjmLeDMV1gPMsyQJ7xTKBETasJ+dcyUFn5KIa1ys1CnxZW3l81bsTy7iu4bVVIr4JjMlvB2Oj/I4aDMuEcLlX0w3oLEIz4LPuaNllSJwC0CQ0KTD2iWEJrluNtCT1NHkdp0+CYPBRLX5QwwZE8dku3HgvJHVi13sF3P2E6woPBLJfQVsu7n5+673Bk/abSEMpxUB3FfNAgtZPJeo5pcZFMTeZpU1rAkuKQ1eeIKvSQWb9IFsh4/ttMgwuHOYo6BSA9HOhsiFt9ELkDK7EpSMGadl5KqOzpSP1FwTFrDE/wAXX1BpDhfnFsoxjkV/1rYrhc1/IcEGJxsVb+/yRZx9WSNWxQcMz9o8bFqdJm8aqkVX6y0Yrpd2eeif+QAcF6X6UH0NpL1xu7vSxuUV+XWHxdy3rQiY5SkeGEutzQ0VEIgfwFAXY61UtIQZCOhLwJDTBNlaPGpLWwG5ZTABrTZtf0FDZlCj272tZ2XK6zUoh7lIyRxTSpZ99rbFs3Xxt48BkUwLU54EaECmhMk6evASQVmPoqiZejmU+7CnI6OhcwA4ZpzQ3cLV1MuMokVB0WBnqovL2p9P2JuJhAXlgVCqODdRzDvk2VICx625tS4NgWCeRD2jarHjZWtU/P/J2CsfKxKtEW8MizkGofB7l1xLxbg7PjnqP1x4wVVAUaxc2Cx5RqoLptjTTfJdvmessS1FGZd1V/auMd1/bF637pjTmWcat9kZkgNsing4GbjDi8SJVWH3oDgCQprK15xmKnZ61xerNE384rMHdm6gm2Et5DWUvEcT/9friCqvhe5cKa/nz0XfjDHHL74/umUvJeMtzuLCvZc9R/GVSdjdrOmlPSEMbt6gIXdlKVFiYpiIN1mW0RHPu2JHW0oXTFlvguyEHlVswwBKd8jgrnfXQYA5tjyoUWYA7zP4ZM9HuhGy/sv7Sm716L8irvtsl8nslxXE8rDn2rpdS9qX75DXnn+0wsjH0JPfEcL33fSBkSrPtY8agsF6hT1iBJ2PTlnvc9cSz3FZzD0JNCOwJKDBr4ZbvhosQGVjxunxaOeiUwGwUuIRC4D/fVTdt/TTnWpt6z6bYlH+ryEYflDw3lpwZy96fS3R7HNIhOAysR5Qk1REPyaDqpSTFm9vXS+n5rUYAOAdlWVqzeGZSIJ8NLQnLO2nEG44CgsI6IQbUjKmcfrZsC7bDsKmAB0Uq5l2VvwwNTA/F28gi0T+XR7FKioYDBTyKIpKV7z2mTHnvFDduusuGdPKqM8fnLvNJc3rknp7vUZR9qFzlFLIGXtq1PI7EWiirKnOhKwqNXy/HlHU56nHY8DUWY7m/ZEFw4Iv3O60cQaYcna45G2R8b2GvnU8831s2EcsS+iQGU3eF40zxIpPJAE8R4luT82nzlQe2UlhE+MuJBuRDwtpxMAI/sRIgu7iggNepKYXmTX7ApY5fJou1lE1WEuBYEUH1OuZdXjpYTk6ugffcNcrVYkwxRsfGMmbWZVISlpzO5y7F7gU556H3DLQCEwW4wNoQFWPgeLF06ATmlJAJ8nTnXn58LWyd/YjP5ycYTPfhwdmaXgnSK1DMqa5QuqEkr0hQ18CfNIRbl39AReFwm6ymcLQesxYg4hVqfsKyEAWqrvcW/BArO9Csh8Xh01xvCTy08VoT2Lv9R7i8oooeDqyC2nTD6yYXsYanalKeWW9bV+3aOhfEe3AlBcaHgWuHQQsUKXHvZSAZ4XOmzb1C37bekv8ZnrAOFDjCfsc4Oo5/TsrrwzCOJ5h2iSlqVCeToZHi7EM+xNCw23klCpWnhHhcb1ySSFu6t0sR6vIkY24BZPAiWPx9Zf0oqSpOwFBRVz1vSTFvSedFKvk8jczsmhITRU64wG0mQhWzJyTEXKS1E49W978AL6H65jHJwKlFFEbybpJ1I+ZGQrjTKUUqL9ikRHLjXfu2WFgMa3aM3KEVV1Al2yAR5TZWUANCKVv/2NkWZYFQUqLWapi+x7S2nd7vefzlUT/8PAzPP05ex3fKcJvKm86wd/Q3tya9NYI1O2oEy49iKDEVSssKdz96Zyag+TCVBZTckqQkOPwHhQRKkbTAw7WIixVTWAlKkFli2GDnKY4fM35ZAf6f2jpZLWcEgSJp7RrEoRe2DwvrDxvjUlh/bvXu0Bg44o4ID0X5XZBAx5GJdZYUHpI8BtJ3RknuAzKREklTMq8pAfPPz/0flNZ4Y3zWIvOZwYXZT9Fe4eo9gaTpFrJKT8EW+XXpGY3i3sClbcSQZAlEdF6Gs0sr0YZog6lcViJQfGH8jOUUgAcw0AbDEGEmo+smVdS9/rXvT3/bvJV4eBDi9vYV4h93Hz+qHsQnuDdFzAaA9cbAck0Z5htO+LWfv1bA0tH6aSF4pYEbxrEtYfbfuXDj77FRlrBRKUDDfHAKBQ6sd7jQWq79HjbKAioygkClHyzCjec+ND+cz2fQWvsyZCBGYjA4UEeJa/q2WtKSwXJZGbLdYXgybIqy6/rpPqPc1PQ13W+n0+kdfI11eC/Xy/VyvVy5618BBgC3pjdzwFGJvwAAAABJRU5ErkJggg==";
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
									/*
									
									*/
									if(propObject == "bottom")
									{
										if(hero_mc.bottomSecond)
										{
											/*
											
											*/
											hero_mc.bottomSecond.gotoAndStop(frame_num - 1);
											/*
											
											*/
											_updateBodyFunc(hero_mc.bottomSecond, _information.heroes[propHero].currentDress[propObject].currentColor, _information.heroes[propHero].currentDress[propObject].currentTexture, _information.heroes[propHero].currentDress[propObject].currentAlphaTexture);
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
		window.open("https://dl-girls.com/content/folder_1770050733" + "?utm_source=" + window.location.href + "&utm_medium=game_referral|game&utm_content=simple&utm_campaign=" + _TITLE, "_self");
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
	function _closeLocFunc_2_1()
	{
		_addAdsFunc();
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
		_information.currentNameHero = "hero_3";
		_information.heroes[_information.currentNameHero].currentSet = "set_1";
	}
	function _closeLocFunc_2_3()
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
		window.open("https://dl-girls.com/index.php?controller=article&action=index&id=2145" + "&utm_source=" + window.location.href + "&utm_medium=game_referral|game&utm_content=simple&utm_campaign=" + _TITLE, "_blank");
	}
	function _onClickBannerMcFunc_2(event)
	{
		window.open("https://dl-girls.com/index.php?controller=article&action=index&id=2120" + "&utm_source=" + window.location.href + "&utm_medium=game_referral|game&utm_content=simple&utm_campaign=" + _TITLE, "_blank");
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