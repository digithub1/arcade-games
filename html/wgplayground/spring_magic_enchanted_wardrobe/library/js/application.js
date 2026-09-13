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
	var _TITLE = "Spring Magic Enchanted Wardrobe";
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
						type:"dressup",
						frame:3,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:null,
						pathSubject:null,
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:_openLocFunc_3_6,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:1
					},
					action_4:{
						type:"click",
						frame:4,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_4",
						pathSubject:null,
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:null,
						closeLocFunc:_closeLocFunc_4_6,
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
						frames:[1, 2, 3, 4, 5, 6, 7, 8]
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
						frames:[1, 2, 3, 4, 5, 6, 7]
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
					makeup_7:{rewarded:false},
					makeup_8:{rewarded:false},
					makeup_9:{rewarded:false},
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
					accessory_0:{rewarded:false},
					accessory_1:{rewarded:false},
					accessory_2:{rewarded:false},
					accessory_3:{rewarded:false},
					accessory_4:{rewarded:false},
					accessory_5:{rewarded:false},
					accessory_6:{rewarded:false},
					wings_0:{rewarded:false},
					wings_1:{rewarded:false},
					wings_2:{rewarded:false},
					wings_3:{rewarded:false},
					wings_4:{rewarded:false},
					wings_5:{rewarded:false},
					wings_6:{rewarded:false},
					wings_7:{rewarded:false},
					wings_8:{rewarded:false},
					wings_9:{rewarded:false},
					bg_0:{rewarded:false},
					bg_1:{rewarded:false}
				},
				currentDress:{
					makeup:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					eyes:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					hair:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					earrings:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					headdress:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					dress:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					accessory:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					wings:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					bg:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1}
				}
			},
			hero_2:{
				currentSet:"set_1",
				totalSets:{
					set_1:{
						currentIndex:0,
						frames:[1, 2, 3, 4, 5, 6, 7, 8]
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
						frames:[1, 2, 3, 4, 5, 6, 7, 8, 9]
					},
					set_5:{
						currentIndex:0,
						frames:[1, 2, 3, 4, 5, 6, 7, 8, 9]
					},
					set_6:{
						currentIndex:0,
						frames:[1, 2, 3, 4, 5, 6, 7, 8, 9]
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
					makeup_7:{rewarded:false},
					makeup_8:{rewarded:false},
					makeup_9:{rewarded:false},
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
					skin_0:{rewarded:false},
					skin_1:{rewarded:false},
					skin_2:{rewarded:false},
					skin_3:{rewarded:false},
					skin_4:{rewarded:false},
					skin_5:{rewarded:false},
					skin_6:{rewarded:false},
					skin_7:{rewarded:false},
					skin_8:{rewarded:false},
					skin_9:{rewarded:false},
					blanket_0:{rewarded:false},
					blanket_1:{rewarded:false},
					blanket_2:{rewarded:false},
					blanket_3:{rewarded:false},
					blanket_4:{rewarded:false},
					blanket_5:{rewarded:false},
					blanket_6:{rewarded:false},
					blanket_7:{rewarded:false},
					blanket_8:{rewarded:false},
					blanket_9:{rewarded:false},
					bg_0:{rewarded:false},
					bg_1:{rewarded:false}
				},
				currentDress:{
					makeup:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					eyes:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					hair:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					earrings:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					headdress:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					dress:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					skin:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					blanket:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
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
		logo_img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozMkNGOTMxNEE2MzJGMDExQUVGRkIxNjJENEQxMDk1NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1RDcwNTIyRjM3OEExMUYxODlDQ0I0NUFBNzQ5NThEOCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1RDcwNTIyRTM3OEExMUYxODlDQ0I0NUFBNzQ5NThEOCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCMzc1NTIwRTg0MzdGMTExOEMzNEM1RTg2RDQwQUYxNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozMkNGOTMxNEE2MzJGMDExQUVGRkIxNjJENEQxMDk1NiIvPiA8L3JkZjpEZXNjcmlwdGlv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";
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
		new Edapskov_Flickering(_before, location_mc, ["#ffff00", "#ffcc00"], 10, 24);
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
				new Edapskov_Flickering(_before, _action_mc[hero_str][key], ["#ffff00", "#ffcc00"], 10, 18);
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
		new Edapskov_Flickering(_before, currentTarget_mc, ["#ffff00", "#ffcc00"], 4, 18);
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
		window.open("https://dl-girls.com/content/folder_1775235346" + "?utm_source=" + window.location.href + "&utm_medium=game_referral|game&utm_content=simple&utm_campaign=" + _TITLE, "_self");
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
	function _closeLocFunc_3_5()
	{
		_addAdsFunc();
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
	function _openLocFunc_3_6()
	{
		_information.currentNameHero = "hero_2";
		_information.heroes[_information.currentNameHero].currentSet = "set_6";
	}
	function _closeLocFunc_4_6()
	{
		
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