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
	var _BGWIDTH = 1200;
	var _BGHEIGHT = 600;
	var _INDENT = 10;
	var _BGCOLOR = "#000000";
	var _FONT = "Arial";
	var _TITLE = "Besties on Wednesday";
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
						firstVar:0
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
						frames:[1]
					},
					set_3:{
						currentIndex:0,
						frames:[1, 2, 3, 4, 5, 6, 7, 8]
					}
				},
				totalDress:{
					eyebrows_0:{rewarded:false},
					eyebrows_1:{rewarded:false},
					eyebrows_2:{rewarded:false},
					eyebrows_3:{rewarded:false},
					eyebrows_4:{rewarded:false},
					eyebrows_5:{rewarded:false},
					eyebrows_6:{rewarded:false},
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
					eyelashes_0:{rewarded:false},
					eyelashes_1:{rewarded:false},
					eyelashes_2:{rewarded:false},
					eyelashes_3:{rewarded:false},
					eyelashes_4:{rewarded:false},
					eyelashes_5:{rewarded:false},
					eyelashes_6:{rewarded:false},
					blush_0:{rewarded:false},
					blush_1:{rewarded:false},
					blush_2:{rewarded:false},
					blush_3:{rewarded:false},
					blush_4:{rewarded:false},
					blush_5:{rewarded:false},
					blush_6:{rewarded:false},
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
					dress_7:{rewarded:false},
					dress_8:{rewarded:false},
					dress_9:{rewarded:false},
					dress_10:{rewarded:false},
					dress_11:{rewarded:false},
					shoes_0:{rewarded:false},
					shoes_1:{rewarded:false},
					shoes_2:{rewarded:false},
					shoes_3:{rewarded:false},
					shoes_4:{rewarded:false},
					shoes_5:{rewarded:false},
					shoes_6:{rewarded:false},
					socks_0:{rewarded:false},
					socks_1:{rewarded:false},
					socks_2:{rewarded:false},
					socks_3:{rewarded:false},
					socks_4:{rewarded:false},
					socks_5:{rewarded:false},
					socks_6:{rewarded:false},
					headdress_0:{rewarded:false},
					headdress_1:{rewarded:false},
					headdress_2:{rewarded:false},
					headdress_3:{rewarded:false},
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
					eyebrows:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					lips:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					shadows:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					eyes:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					eyelashes:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					blush:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					hair:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					dress:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					shoes:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					socks:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					headdress:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					accessory:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
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
						frames:[1]
					},
					set_3:{
						currentIndex:0,
						frames:[1, 2, 3, 4, 5, 6, 7]
					}
				},
				totalDress:{
					eyebrows_0:{rewarded:false},
					eyebrows_1:{rewarded:false},
					eyebrows_2:{rewarded:false},
					eyebrows_3:{rewarded:false},
					eyebrows_4:{rewarded:false},
					eyebrows_5:{rewarded:false},
					eyebrows_6:{rewarded:false},
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
					eyelashes_0:{rewarded:false},
					eyelashes_1:{rewarded:false},
					eyelashes_2:{rewarded:false},
					eyelashes_3:{rewarded:false},
					eyelashes_4:{rewarded:false},
					eyelashes_5:{rewarded:false},
					eyelashes_6:{rewarded:false},
					blush_0:{rewarded:false},
					blush_1:{rewarded:false},
					blush_2:{rewarded:false},
					blush_3:{rewarded:false},
					blush_4:{rewarded:false},
					blush_5:{rewarded:false},
					blush_6:{rewarded:false},
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
					socks_0:{rewarded:false},
					socks_1:{rewarded:false},
					socks_2:{rewarded:false},
					socks_3:{rewarded:false},
					socks_4:{rewarded:false},
					socks_5:{rewarded:false},
					socks_6:{rewarded:false},
					headdress_0:{rewarded:false},
					headdress_1:{rewarded:false},
					headdress_2:{rewarded:false},
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
					eyebrows:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					lips:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					shadows:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					eyes:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					eyelashes:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					blush:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					hair:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					dress:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					top:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					bottom:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					shoes:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					socks:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					headdress:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
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
		logo_img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozMkNGOTMxNEE2MzJGMDExQUVGRkIxNjJENEQxMDk1NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozQjcxRDM3MDhGNDMxMUYwOEZFOUQxRTU4Q0UxNThDNCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozQjcxRDM2RjhGNDMxMUYwOEZFOUQxRTU4Q0UxNThDNCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFODkwOTZFQTFGOEZGMDExOEM4RkY0REVFMkRCNDIzRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozMkNGOTMxNEE2MzJGMDExQUVGRkIxNjJENEQxMDk1NiIvPiA8L3JkZjpEZXNjcmlwdGlv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";
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
			if(_skippedLocationsFunc() == 5)
			{
				_addAdsFunc();
			}
			if(_skippedLocationsFunc() == 3)
			{
				_addAdsFunc();
			}
			if(_skippedLocationsFunc() == 1)
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
									/*
									
									*/
									if(propObject == "dress")
									{
										if(hero_mc.dressSecond)
										{
											/*
											
											*/
											hero_mc.dressSecond.gotoAndStop(frame_num - 1);
											/*
											
											*/
											_updateBodyFunc(hero_mc.dressSecond, _information.heroes[propHero].currentDress[propObject].currentColor, _information.heroes[propHero].currentDress[propObject].currentTexture, _information.heroes[propHero].currentDress[propObject].currentAlphaTexture);
										}
									}
									/*
									
									*/
									if(propObject == "accessory")
									{
										if(hero_mc.accessorySecond)
										{
											/*
											
											*/
											hero_mc.accessorySecond.gotoAndStop(frame_num - 1);
											/*
											
											*/
											_updateBodyFunc(hero_mc.accessorySecond, _information.heroes[propHero].currentDress[propObject].currentColor, _information.heroes[propHero].currentDress[propObject].currentTexture, _information.heroes[propHero].currentDress[propObject].currentAlphaTexture);
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
		window.open("https://dl-girls.com/content/folder_1671364718" + "?utm_source=" + window.location.href + "&utm_medium=game_referral|game&utm_content=simple&utm_campaign=" + _TITLE, "_self");
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
		window.open("https://dl-girls.com/index.php?controller=article&action=index&id=3526" + "&utm_source=" + window.location.href + "&utm_medium=game_referral|game&utm_content=simple&utm_campaign=" + _TITLE, "_blank");
	}
	function _onClickBannerMcFunc_2(event)
	{
		window.open("https://dl-girls.com/index.php?controller=article&action=index&id=3624" + "&utm_source=" + window.location.href + "&utm_medium=game_referral|game&utm_content=simple&utm_campaign=" + _TITLE, "_blank");
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