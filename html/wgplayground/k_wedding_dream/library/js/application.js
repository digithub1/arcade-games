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
	var _TITLE = "K-Wedding Dream";
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
						closeLocFunc:_closeLocFunc_2_4,
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
						closeLocFunc:_closeLocFunc_2_6,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:0
					}
				}
			},
			location_7:{
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
						openLocFunc:_openLocFunc_1_7,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:2
					}
				}
			},
			location_8:{
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
						openLocFunc:_openLocFunc_1_8,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:2
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
						frames:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
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
						frames:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
					},
					set_5:{
						currentIndex:0,
						frames:[1, 2, 3, 4, 5, 6, 7, 8]
					}
				},
				totalDress:{
					scars_0:{rewarded:false},
					scars_1:{rewarded:false},
					scars_2:{rewarded:false},
					scars_3:{rewarded:false},
					scars_4:{rewarded:false},
					scars_5:{rewarded:false},
					scars_6:{rewarded:false},
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
					dress_10:{rewarded:false},
					dress_11:{rewarded:false},
					dress_12:{rewarded:false},
					flowers_0:{rewarded:false},
					flowers_1:{rewarded:false},
					flowers_2:{rewarded:false},
					flowers_3:{rewarded:false},
					flowers_4:{rewarded:false},
					flowers_5:{rewarded:false},
					flowers_6:{rewarded:false},
					flowers_7:{rewarded:false},
					flowers_8:{rewarded:false},
					flowers_9:{rewarded:false},
					headdress_0:{rewarded:false},
					headdress_1:{rewarded:false},
					headdress_2:{rewarded:false},
					headdress_3:{rewarded:false},
					headdress_4:{rewarded:false},
					headdress_5:{rewarded:false},
					headdress_6:{rewarded:false},
					headdress_7:{rewarded:false},
					headdress_8:{rewarded:false},
					headdress_9:{rewarded:false},
					bg_0:{rewarded:false},
					bg_1:{rewarded:false}
				},
				currentDress:{
					scars:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					lips:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					shadows:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					eyes:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					eyebrows:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					hair:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					earrings:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					dress:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					flowers:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					headdress:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
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
						frames:[1, 2, 3, 4, 5, 6, 7, 8, 9]
					},
					set_4:{
						currentIndex:0,
						frames:[1, 2, 3, 4, 5, 6, 7, 8]
					}
				},
				totalDress:{
					scars_0:{rewarded:false},
					scars_1:{rewarded:false},
					scars_2:{rewarded:false},
					scars_3:{rewarded:false},
					scars_4:{rewarded:false},
					scars_5:{rewarded:false},
					scars_6:{rewarded:false},
					lips_0:{rewarded:false},
					lips_1:{rewarded:false},
					lips_2:{rewarded:false},
					lips_3:{rewarded:false},
					lips_4:{rewarded:false},
					lips_5:{rewarded:false},
					lips_6:{rewarded:false},
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
					flowers_0:{rewarded:false},
					flowers_1:{rewarded:false},
					flowers_2:{rewarded:false},
					flowers_3:{rewarded:false},
					flowers_4:{rewarded:false},
					flowers_5:{rewarded:false},
					flowers_6:{rewarded:false},
					flowers_7:{rewarded:false},
					flowers_8:{rewarded:false},
					flowers_9:{rewarded:false},
					flowers_10:{rewarded:false},
					headdress_0:{rewarded:false},
					headdress_1:{rewarded:false},
					headdress_2:{rewarded:false},
					headdress_3:{rewarded:false},
					headdress_4:{rewarded:false},
					headdress_5:{rewarded:false},
					headdress_6:{rewarded:false},
					bg_0:{rewarded:false},
					bg_1:{rewarded:false}
				},
				currentDress:{
					scars:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					lips:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					eyes:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					eyebrows:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					hair:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					dress:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					flowers:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					headdress:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
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
		logo_img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozMkNGOTMxNEE2MzJGMDExQUVGRkIxNjJENEQxMDk1NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBMkYxRkY3MkQxQkYxMUYwQTA2QUM2QUVDRTdCQzQwNiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMkYxRkY3MUQxQkYxMUYwQTA2QUM2QUVDRTdCQzQwNiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxNjI2RURDQkJCRDFGMDExQTYxQzhGNjEwQjQwQjU1NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozMkNGOTMxNEE2MzJGMDExQUVGRkIxNjJENEQxMDk1NiIvPiA8L3JkZjpEZXNjcmlwdGlv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";
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
		window.open("https://dl-girls.com/content/folder_1762531121" + "?utm_source=" + window.location.href + "&utm_medium=game_referral|game&utm_content=simple&utm_campaign=" + _TITLE, "_self");
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
		_information.currentNameHero = "hero_2";
		_information.heroes[_information.currentNameHero].currentSet = "set_2";
	}
	function _closeLocFunc_2_4()
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
		_information.heroes[_information.currentNameHero].currentSet = "set_3";
	}
	function _closeLocFunc_2_6()
	{
		_addAdsFunc();
	}
	function _openLocFunc_1_7()
	{
		_information.currentNameHero = "hero_1";
		_information.heroes[_information.currentNameHero].currentSet = "set_5";
	}
	function _openLocFunc_1_8()
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