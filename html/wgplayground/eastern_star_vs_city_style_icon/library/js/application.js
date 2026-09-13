/*
* @author edapskov
* @copyright 2019 edapskov v 9.000
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
	var _TITLE = "Eastern Star vs City Style Icon";
	var _LINKTOGAME = "https://dl-girls.com";
	var _DELAY = 1;
	/*
	публичные переменные
	*/
	this.copyright = "© DL-Studio, v 9.000";
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
						firstVar:1
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
						firstVar:1
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
						firstVar:1
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
						firstVar:1
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
						frames:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
					},
					set_2:{
						currentIndex:0,
						frames:[1, 2, 3]
					},
					set_3:{
						currentIndex:0,
						frames:[1, 2, 3, 4, 5, 6, 7, 8, 9]
					},
					set_4:{
						currentIndex:0,
						frames:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
					},
					set_5:{
						currentIndex:0,
						frames:[1, 2, 3, 4, 5]
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
					earrings_7:{rewarded:false},
					earrings_8:{rewarded:false},
					earrings_9:{rewarded:false},
					headdress_0:{rewarded:false},
					headdress_1:{rewarded:false},
					headdress_2:{rewarded:false},
					headdress_3:{rewarded:false},
					headdress_4:{rewarded:false},
					headdress_5:{rewarded:false},
					headdress_6:{rewarded:false},
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
					veil_0:{rewarded:false},
					veil_1:{rewarded:false},
					veil_2:{rewarded:false},
					veil_3:{rewarded:false},
					veil_4:{rewarded:false},
					veil_5:{rewarded:false},
					veil_6:{rewarded:false},
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
					eyebrows:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					eyes:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					hair:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					earrings:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					headdress:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					top:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					bottom:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					veil:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					accessory:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					bg:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1}
				}
			},
			hero_2:{
				currentSet:"set_1",
				totalSets:{
					set_1:{
						currentIndex:0,
						frames:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
					},
					set_2:{
						currentIndex:0,
						frames:[1, 2, 3]
					},
					set_3:{
						currentIndex:0,
						frames:[1, 2, 3, 4, 5, 6, 7, 8]
					},
					set_4:{
						currentIndex:0,
						frames:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
					},
					set_5:{
						currentIndex:0,
						frames:[1, 2, 3, 4, 5, 6, 7]
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
					earrings_7:{rewarded:false},
					earrings_8:{rewarded:false},
					earrings_9:{rewarded:false},
					headdress_0:{rewarded:false},
					headdress_1:{rewarded:false},
					headdress_2:{rewarded:false},
					headdress_3:{rewarded:false},
					headdress_4:{rewarded:false},
					headdress_5:{rewarded:false},
					headdress_6:{rewarded:false},
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
					veil_0:{rewarded:false},
					veil_1:{rewarded:false},
					veil_2:{rewarded:false},
					veil_3:{rewarded:false},
					veil_4:{rewarded:false},
					veil_5:{rewarded:false},
					veil_6:{rewarded:false},
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
					lips:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					shadows:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					eyebrows:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					eyes:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					hair:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					earrings:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					headdress:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					top:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					bottom:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					veil:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
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
		logo_img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozMkNGOTMxNEE2MzJGMDExQUVGRkIxNjJENEQxMDk1NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4MjE3NEZCODc3NTYxMUYwQUJDRUJDNTFDODhENUNCMiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4MjE3NEZCNzc3NTYxMUYwQUJDRUJDNTFDODhENUNCMiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1QTBDRjYwMzUyNzdGMDExOTgxNkQyMjMyNURDNkQ5MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozMkNGOTMxNEE2MzJGMDExQUVGRkIxNjJENEQxMDk1NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmyZKjcAAmxRSURBVHja7L0JtG1ZVSW4TnfPuf1993X//T5+xI+OACIICAPBkKBVAdOGKhQSKx0qllqDTKVS06EgdpWmFpYp5TCBzLQUhwOsyrSo1LTBkkoIFZVofhDt//H75vXv9t1pa861z/3xjUTpTAjg7Bg3/mvuu/fcffaee6615lrLyrJMilGMYhTjy2HYxRQUoxjFKACrGMUoRjEKwCpGMYpRAFYxilGMYhSAVYxiFKMYBWAVoxjFKACrGMUoRjEKwCpGMYpRjAKwilGMYhSAVYxiFKMYBWAVoxjFKEYBWMUoRjEKwCpGMYpRjAKwilGMYhSjAKxiFKMYBWAVoxjFKEYBWMUoRjGKUQBWMYpRjAKwilGMYhSjAKxiFKMYxSgAqxjFKEYBWMUoRjGKUQBWMYpRjGIUgFWMYhSjAKxiFKMYxSgAqxjFKEYxCsAqRjGKUQBWMYpRjGIUgFWMYhSjAKxiFKMYxSgAqxjFKEYxCsAqRjGKUQBWMYpRjGIUgFWMYhSjGAVgFaMYxfjqGi7/Z1lWMROfP+BzDjmBWf6vj0eQ/87Do5L/zMt/zueU8Ijx6OMxxmOKxwyPCI8wfyT5eyTFNP/DjCzLikn4SgCsYnzWYw5IpWu+n/+siccBPI7jADhm23bVcdya49iLkkrddu0F/h1+7uP3ZcCbk6TJDLsoSpMkjNNkkqYZQauXpdnlNEvP4+vLeHTwGOKxjccVPHYKECtGAVjF+PvmqJSzI+cahrSMxzGAz3UEKMdxDpVKpTXfDxY9163j67ptOSUhe8XJ7rq24HuxbIuUVrI0lTiO8XOXP0uSOE6iOLJnYZhFYWRHUZSGUbiO51xK0/QC2ME5vN9mDlhP4vEUwQ2PtLhFxfiqYQykyYVJ+GlHNTfnkvxRx+O5mKvnA5zu8H3/llLJXyy5brPkB6WS62V+Cf8GJQUh27LFdVxxAFSc3yxJJEkNvACrJMkiAUrh6xS2o5VargVildFMnOJnEQDNnUWz0rA/tAajQTydzS4kSfIoHp/Cc3Zzc/J+PDZyBhYXt6wwCQvA+uoz+cieWteYe2t43AMQelHgBy/yA39frVqrB0EgQakspZInACoFKddxxHZsAFNiACqhYyuWLOYcZ9gwFsmWxInBFgCUxGkscRRLEhtcdFxPHNsT25UEQBanVroH1hX1er1Wr98PZrPZE2BdfwTgOpWbi4/lTItfT4pbWABWAVhfHaOdsyr9GnPyQjCp15fL5TsqlepavVr1KuWq+H5JKpWalDxPSq4vYmcSpWBLYUamZIAJ/5FhpVa+QVKDfLPpTMbhBECVKB+KAWyxMi8wrShVfEwT8ze2m/HuiG2Dqdnu2PGcrTiOZLfTWRmNx24Yhv8fHn+A+0egom/rUTHOen5f7MwCsArA+goGquty828FAHEzzL3XgEHdUq/V281Gy65WKlItVwBSZfHKxtxLATbRNAEoxeqmcsQjsOjP0yyVMJkpINFXFSV8Ln42nUgYh8AvbBw8JwXzAoNSfLEAd1mCvwfLsmz+LsW/hLCMVEyB0K9UhkElWO/3ekvdbm9hFs6eHI5GvwsTks75k3g8IibiOCiWdgFYBWB9ZY1FPG7C4yAmYNlz3ReWy8FLy0HlSKPe8OrVmtQbDakENfEDT+coIfjAfLPxta1CBuNIJ/jEWSjTECAVgTXBvIvon8KDz49CY/ZFCaAKz+XrGIoFLmYZ05C2YqqPRF/bBvg5MC89OuUzR2kawczzS+ny4uIYYOhubm4Gg9Foo9/vfyiKIvq16N/6mBiJxKhY3gVgFYD15T/IpI7krOpmz/OeX61W765VKsdh6lm1Wk0a1YaUg6p4AdgU/ktjgE0GoFKrzREHIELik8BEm4ExxQlMwhlMO0BKCBCKwikAKpRZGEmE39O5HocAHJp+6svK1PNOc88GOnmOra9LU5JRxAyAF2ep+rv4Pp5bEr/kKeOi/8vzSrJ/bV+K97C2Njat4Wy2vdvZ/ROAI83Bfy8mgjiRwhFfAFYBWF+2g8LN2wlU+LyHAFQvgcl3Z7Va2V+pVN1qBUBVA6OqVgBIDtgR+ExonE+OQ2mCpfNEBhQBUMKYznRG+TJJAGbT2VRGg6mE+JcgRZMuFmMepjAJOcNByZdSEEi9DvYGBleulMX1nByYstxRD6CibwtgNwZjG0/GMpuEMDFDICSYnWPYnY1rrNcqEs0imUYAzijc6XR7j4/GIzKsXxcjf5jln92Wp8Wt85EWgFWMArCeneNGPF5EZgUT63qwqHvq9foNtUoVAFWXWrUqZb8qJb8EXMoUdGiqeVZJwYs/SwAKIR6M5s1NuCRMZDKbyHAykhn+hhKFVCOEopFBcS1lRtVaVRqNJh51qVQqCjp0sivY4O9DMrSIjvfQmIyMHhIQ8bUleWQxIjDR7Iz05y7YGZmebbBOLI9ysWx6ZX393HA0eh+++V0xcow5WMU560quAaxrFfUFYBWjAKwv8VjB4+tp+jmOsxwEwYur5eotrYUWMKQmZFV+UNHIn0UASuhDEik5jgEq/BfSnJuF6j/iSIBG4YiMBkAzidRXNTf7NDcH8OD7vrK11ZUVsKk6GJqrkcAIoBNNpjKJpsrQknEsIVhUBCyhg14BLzJ+LIKi6ipwb5x8o2U5QYrBwsCoiIfiup5uxAwXXmnU9GkbW1tPdjqd34/iaIpfUa/VlacV85fwuChGx8Xh54A2+0pnXQVgFYD1bB1Upb+AYIXP1ih5pRsrleAesJylZmNBagCqcrUsgR8Y6gFTjKzF83ywH09fIARIJdFM+Qkd6/QdzaZTmYVT1VnFkxTsaKRAQ5CiJqtWq0uj1ZCFhQWpg03RGT8ew6SbzfT1+LdkYlNGC8nYpgAwOukJitSM0rUVG9BT6LBVFI/vbfHo73LUiaXf0/+VxMYnRu1WCublOCVZXl4WOtu29/Ym48lkPJvOIlxvHybrFYDjNI6THu75w3j1j+PxYA5ipGflnG3NvlJZVwFYBWA9G8dtOVAddl13zS+Vbq9Wa7c1m02rVWtJpUZGFeT+KGNyedjoQAAAARhVGMIcS/X3Zl4oR5gBaCJd8GkGdjXC9+lMZQzlaiDthba0mm3xAXgumBkBbRoSmAxAzfCak9FY/VET/CyMCIapZFGqjvpY70H6tC/Lmtt5otdHPRbBzAWYlnwP1+uaHCHN8rEVbNVExZOqQVnKQUVBjKhD/1lm8980GU+m49FkOBwNh9v43yYY3+P4TASuU9ewLj/3dY0LwCpGAVj/7QaTj1+BxwvBPmj+3QTT7M56rVZpLywKRZ/qULcdNd9IY2hOMeKWwRQM4wibOlT2Akam0gMyInWYU6EOk2s0HUkEpkQnfMWvSmuxDTOsKjAzwXDoKI9lmk4lIkARnMZTGeFfAAQYVmQYEX1UwIOUDvRcWJri9fG2OSCm+qDjfb7JCEhqblq2ilPJtMAYxcP1W2BcjvFf6esTuPwgAIC2xIfZy7/gayRxpv43mrizcJICuEKyv36/fxJA+rEkSR4XI4sgeFHHFeWPrACsYhSA9Q87XpT7qo6AVbUC37+9Uqnc3Gq03Hq9oX4k13MVhLjhPTfA955+nySh+q7oCCeAUW4wgylI5zkZjQMkIVMaDgfKeOo1Ounp+ypLyQ2MTykzPqxwGsp4OpYpgGoaTmAOTo3kQSN/xjeVhQawGFnM8rxCsYzrKJt7kOx5oTLKRg3zImgxIpnlcgeXGi18hko50Kgh04I4pgAhgnB7cVFq9ZYwsODanr5/GM8AuhOZTiaG5THiGcUA1dGs2+s+MhwO/wTA9UDOtM6IyVOkEDUuAKsYBWB94YPU4pvxeA03FTYwiEfw4iAoH19YaNu1mokAkpHQoU1GUoI5SP9PSEYUm6g/fVl8DpkRxZ8UhpYBSHR8T8YjGQEEAjrSAX4+AMJybKNMJ5BEsabcjELDvugMpySC4EVTknIEKrQIGCRAZDopwIqiBxW8J5k+Utuo3829sJRN0Ry0Ve1uPx3ro2OeTEwZmAUz1FO2ReZYKXkyBBjR3ASxlKBWlXZzAWZiXbxSSaUQBNbZeCbD0UD64wEAdqYRR+q/uv1ub6+z9weTyeT/xHwNc7OQoNXJHwVgFaMArM9zHMbju/F4Pq7/0XJQWvFLwT+qVuurrXpTGrWmCj+5RKl1okPddXxNNg7DqdIYCjJLqoMCMIF5MArHRGYPbIxyAzIRmohVMCovr8Dg4PkEE5qKk8lU2dQsZysxmNlsNFX5AZXt+mAZGYBEotFEMiST5GxU7QawJMeizDIqBCv/CUWlCl+2pY5/J3e2G9+WmKgiJQ643malAsbn6t8McF0Onh8EAFmq9ct1/VwEZj8oKbgxWEBQ7Q47stfpaGBAgR2v1+l01rvd7nujOPqgmEgrE8IpRl0XI4UoAKsYBWB9DuO5eHwPHou49r+GWXRDqeT/D7VqvdluLgJgKuJQoY71GdR8KZfLCgAzSgiiRFNeuHk5aBpRlsBSMBWYT1ke2aMEoQRWQr+X+r8xR/ye80Xf1kSZTKIK9wggOI0mMhqOTEQwoqk1098zj5DpOmIyCJ92pqs/yph/185+loMR349CCVOA6+mCpgRNAosL0KEtSOZGf1cV11atVyUAixxMxpoOVAaI1WsNCUoV8cq++PidD3ORMgvXd030E7RvNBvK7u4egSoXytpgYCMBaP3BeDL5FcwJgaqas6zN3MeVFYBVjAKwPvN4bc6sTuG6P1KplL8n8EpvrNUazmJ7SUGFe8kDmwpqZWUfNPUYuePGd7BhS5arFRYIVloulAp0v6RO6dHEpODRkT7HiRKYCr8MAU4hNVQEo9g45cejmYyHQ1W6T/m7MDLVF5JUGZAyphwE8O4qWdCUHJ196+rcZ6mlSc8Z8xQV1GyT+Gzq/Sk6KCNLjQ/LBmCRbJEtqWMegNgGONUDTyKAbm80UQbZXlyCSVhVk5DPdfC6iTrPMi2JQzZJU5HC1N6gLzs72zoHZJR00Pf6vfV+v/9LSZJ8QExgYy5A7X65sa0CsL78x5dTxVGSjVfj8Z14fAKb/kEwpx8o+/4bqhX6atpScky1hLJXEb8WKAOhdgqbTR3oBC8Lm5bmHgGMPi0XG5kObMoZCDrc1GQmmqCcEcxKChATpseEEzXvQph6U7CYwXAgo9FYAYzmFR3YzBe0NN/QVomDARZHTTU158RIFDTZObUNSBHWaP7xefy1lqiB+WkZszDLmZeX24L8HeX0aU5z+DlgvhlQxmenoMGe2MbsA4B6VqjvzdpdLh4lfE0l/iyeqj7MjmwVu7YWWmoybm1tg111FExbjcYa/vbdAK01sM735oDFt22ISbAuanAVo2BYn2a8BY9vweP3Hdv+ZLlS/hWYdS+nCLTZaClD4j4KgooEMAG1UkKc5CYUKx94wkDadDZWAKJ0gZFCMg4CDsWjVLdbuYHm5AX5yJSoo+JzVDgKk28Ec4nizyHBionO9CXhvfh61EgxSsfXkrndlOb/qjwhU5bEulcKVFqZ1FFAonlHqQOvnwDCpOsYwORS7e4Z4DMgxhqlBuhU9U4xqSUK2M1GXRkedV8ZdWKYD0Y/S7arf0fTkCJXsi+7ZCpNTMcTDQ44eI6HeSLob+1twUzcVRDke47xefvDwV/AXP4xvO3D8rQlG8uXSWWIgmEVgPXFGPSdvC5//CU23UNgVj9XDoJ7GbJvVgFWYAUZqEmlVJNSNZBYNVWJblQ1vxzH5J6AWZE4+TDxbMtUP9CUmsxUTki17pQo8Kh/CGYfTcDZ1OiqhqOhfj2eTPD9UKOCNKcIfgSZUilQ04+bPAljNeEkL+YXRTQRZypK5cWAP6l5yq9UupBEwiqmDYBvACCZjMeqWK/gdVXkmjM3mmplgpdrHPBZZquTPUtMfmHZ92QIcOn1B7kfq6oaNMoxaAIaUaqlgEVg9UquBiWoE6N0gz4tBW48b9QbALi2lb3R70UTeq+795eTyeQnsW6o2+rL03Xu+892v1YBWAVg/Te/Pjy+F4+X4/FhbNAnAFS/BsD62nqZuYBVKVVMek2t2oC54+cRQMl9WaLpKtxG03Bk/FVBoBufIEVnuFY/IHARrAgitpMDWaiO98FwKIPBGN9HACuwjEFf1evc8JQ51OpVfa8IG516LVWWi1yVJ9DxHuZRQ37PjW/Zbs6+aBaGGv1baLU0okfTlEyO+iqCifquEhYBjJTF+QBfzwdo4T1b9brUalVVz49hsjICGuB9+8ORrHe6YIITY57CFG5Vm9JqLUiFwIXPGOl1JkY1j9ekqUhAG/XxeUcDrTZBUOS1dGAeTmAOKxvFvHR7vcfAtH4ea+dP5enUHlee5dVOC8D6ygCsZ+Vd5En/e7/3e/LBD35Q7rnnHrnrrrvkHe94h5x44AGwhZqUyxWTC4gNWcNGp1N5DDOIfir6alIVVxrQGo+NxUK9Umaa2GiRPVMozzjFNTcvNQWoCDpMSiajGo9nqiDvD/bUX0UGtdBeFHXwg4lFACOCGq+X+i3+F8Pci5JQ2Rid2aqnUpPUVnajviaLXXOYB2jJ4uISALcsw35f/U4EYjrDjfzKVrBjVQiPDS0SUwCQkc96LZCV5UXZh78fAqT2uj0VqQ6GY9nr9CTMyO7cPAiQqVlJucdCq62RVKMNi7U0IMGuxLpbAHTW+ersAaRw/RqtTCPp97pqBhP1mQe5tn9Nvv/7v19e//rXa+6kqS6RqUi3KLn9mUAzT2Kn35HliNTPapLnbbDeCnsEYH1buRi4GGZ0u91nL2D9zu/8jvzmb/6mfNu3fZvceuut8uP/4l/IE489IQ1stApV5gQfbGYmM5NZTcZD45PKfUcuVeiUKABkLLAoBbe8z/U8YkiHdpo9TeW42cmG6FAnYyIw9MAuOp1dNcVWVldlZWUV4OjLDOxlMOypf4sOfWqlKJugj2s2i3NRqqVyCUvTgUyC9dV+qyoSZRRvQd97PBmo/8gtuYqo3PQEX4JVOJmBcfni4Hf6fhl9WvhMmIflVlOOH1lTYeulzT05f+GybOHGTvE3nA/OT7VS1zpcBKLxZKQA1QZo1etNs4lSA1hjfCYWDqT5SL/VEEDcH/SulnoeAcAp5+CSYeBi3741efM/frO85S1vAeguKiPlIGgV428P+lR58IVM2RqA/Xa3Zby7C7Mbj70dSWDWi5Oo2Le8tE+aKwelsXpAmov7waiDOdxp5ZAknWliPssb0VXA9eSVYd67FfGwJq4u9K8wsLp06dKzM0p43333yYc+9CG5++675dixY/KOn/xJeezRRzUlplSq6EbkhqaSnebOAJuK/h9Gy+gP8nBCERyGA8OsAr98NYHY1LISBTHtbmNKWxnnM31V07EyD7KSjY0raubtW90nBw8eApNoaRL0zu6OjGEm2mBHNW5OPH+AzTwcThSo5rIDApnJ4zOJ05IzuVRzGS2YaDWYXnl0EsCm7AWARybG7wkAk9FI9WEUgTKthuYoViXe09YyOJyHKczOxXYN77ErfTx/jMXPiCXVX0MAOakkwa0BkCKwMGVoMgMYDftaXVXNVLxOvepIDz/b3t4S1rGvlWs6j1wsZKQ6j5loEjfNyEuXLspv/MZv6By96U1vkhtuuIG5iRqUqFarBZtiXTMA+wCA1N3dkM6lp6S3cUkm+J6mPxk5naomCAOmCzByPVv8C2elx6oiawdk8ditsnrdrbqme3uX9bWGO5uSRRMNylgZGDxzYnFAOxQIN9vSWliW6vIqXqvyFTGPe3t7cvHixWenSfjXf/3X8mM/9mMKVt/xHd8hb3vb2+TEgw9JDRuIxe+YiuJ5ZanCLGTEa9gfqMObwEXVuO9XVE1OZkWGVKkaMSh1lhqZw8edO8bnnbwIKGQOdMrTl9OFObW1takAdfTIEWVVXFvcuLp5wZYYjWQSNJ3xe3tdZVZa750lj2Ge8r3iOLzGb2Kpr4pmANlYvdrSFmAzLFKPrDCvDMGnO7lfiaYsi/418Fknym6mUgbDpGqdTPLg2pIsVOvSapSl3azKo6fOyamzl9U0jKNUneqUaDgwC2kOttotPLeNr309maeYoygBe8PruzAHLQK1aq/60ul3pAKAonA2CiMFt9lkptoyCm0ZhWRDDeZdtmASvupVr5J3vvOdcujQIQDetgIW79dX4yCTGo8A3J0NOff4CTl34hOye+4MWFGoGjsGYViDLQhKepAEVRy2OHz9St2oXnDvbCsxh1hlUeoHjoiHueyun5fxxrqE05F4dqbBJMpytEoIWFgGK4CRXvJ4B3ukdeCoNNeOSKW1JCUcPpb95ce8uJbOnz9/tXrKs4ph8XR+17veJc1mU1772tfKL/zCL8iJhx5Sc4fJxkz25Q2qgDa7uOGDXk9V3DSdGIovMf+PpV3UbEl00+ReKSE+0eRz3Xm1BivPKZzJaDjWDcw8w729XYDVhhw4cFBuvPEmZTc8/YjyNIn4vVcyof8ugKFH8wtgRbU5pQgEQ208Qd+VZWg8/WxkXKTxvB6aaEkaKRBQHmqSr0Ud3ZoLbacyGU7BJl1lOmMwFtaHLwGYCUAsn2zT+kosWQJLa9UDGeJnw8HMCF1ZbSKZqvo+nWYaeWR9Ll7XXq8LVlVTX1W5DqCKXDX9KgB6SkOUaWHzEJiofGeEcJ7wTSZAU5MbhWLabGpaY/RwHz760Y9qLa6f/umflna7rfNl5uOryw8zhcnd37ksG2dOymN//hFZP3tasnCspYi8kqNrWA8SmHBlrE+/ysBRxbSNq+CAaC1gPZclwjzHTFQHE7v4qftlsNuR3SsXwMLGYNi21FsNWVndLytgYs2lZQBaVYMkrIsW4/0YIOqceVg65x+T2sKKNA5eDxPzqAT1Vi5YnjtCnr1ja2tLTp8+nfc+MI9nFWD9zM/8jJoTb3/72+WXf/mX5U8/8hEpA0ToYCbQsGQxy7pwsxDcmB9IlpURbEpV3ayz6VAjhbVa0zjSk0SpN008kyunrk19sOwLHclkRZRAXLh4Xh3ud9zxAtm3b7+eXBOcZjvbO+qsby8uq/1I5kPR6IARw9BE+dxSoOBEqk9AdGxLnfhcqKqXYjFAi9FM+ncSfR4LVTEx2kodZYMmQdtR1kVA9AHGg8FAo4S89gBgPR3PVFyaBo6WbQ4CF2ZpRTbOXpGJRhhneo1lAJLtGjOTCdw0W1dXV/E6vuZN8jkeTnhKMWi6DsGgaJrS4a9pSGBXrVYquzt7Ki5tNppSLlUV+MkqaZanaa4ry2YKUDQPl5aW5Ed+5EeEzTyo4yKIfTU44UfdPdnbuiA7V87L1tkzcvnUIzLBz3g/g2pbo74M+gRkszDpSwDzoF6VMr53YM7ZWiKILDzTem0NgNB4ryc+1vPl0+flzJOP4kDqA9hsWVpZ1Iq2PJjGWIcpDt1S/loB3SY4nMo49Cku5jqLZgPZO/UgwOukAld7//XiA+iezbeFYPXUU0/lQTHr2cewPvzhD8uf/dmfyU/8xE/IRwBUH/vYx/SGVLDxqMxmYm+pCoDC98PBUFywFporWgbGNQX5JuOBmnUV1oGi6DMzOXw0z0iH6WgniJDtkFbTX6XdmvFaV65c0frrt9zyfNmHk0sX4Wggu2BcXFxqGoGhEKzow1GxpVb5BJAEVWVvfG+iE2k5y8rwNOUijPBzshNKCvT7MFHH6Fz/pcX3AHKWasFM9KhU8tVvpMJN2yjnqeViOhBNQlaJGAEE+6OpLLTqmCvqs1wJcErPwKL0c+Ka6pRLtJqa89gDI1xYbEujWdMIJpklG2EQ+JlzOMT8DSdgWzAfVOPFqhW1MkzkPU3nadLfhQ3jRSWYg1P9fPPKESapPJRf/dVfBeDfIffee68ePjShGUX8Sh2DnR1Z3zwrw81N2br0lGyefVKGYKYh1qhtpZjfEg6BktTrYE+s6V9vSLXeBFg1cK9aahU4WF8214rW8mcZ7aHEYFIBnj+jT5V9BrBexeEh42tXpovnz0hw+RzY04IsLgPA2F7TDmEW4qCzcf/wuq5D6Y9JVmUnJrotxuunZbB1Xmorh2Xx8I0wQ5uGZz2L0GsOVlZuBc0fWi78XbTBvtQ0ejqVH/zBH9RFzlP7137t19Q8qrB5qWNaXJVqFTCtGm7cVMsJU8qgbbEsV/0vU9zkER7lclVNOy2Ul4tCjVlmTC5+6LHKFUzdKNaiovO40azL7c+/QxZxsvF5FIb2wW7IFGhaTsFcplg89HXxevn3BB2aW/RZqDNcTM4gQ/yaKK1OdNOcgiBAlki2olVCSVXyJOg0M1J49iKk057X6OfaLku7qWYqUGUUkmxLFVws1Ecgp5+J5hmjeACgWIsRxnlOY5KnJZWU+SzA3JjRIY9NQTEpX5OfSUWnMD8pa+DzaVJT6Z/pCZ2oI7jfH2h3HpqO4qTqI6OOjeCsAQ3KJvT1pnrwvPSlL5Xrr79emRcZ8leaaTgedgFQp+TkQ/fJ6U98TD5138fkwqOPSH93T2wcFvWaD9O4Kq2FmtTxoF6OZbnpg+Thx8OrxA7i9IUGgc6P+qRweDiUy7A0EUtp43DcXd8Ae9vGc7hOTE1Fvka13QLo+ZrBQT1fjL9JKI6Owd6tWP+NQt7fWISSFfYxaDbE51rq70p/85I28vVKZWXw1rMgungtWOmcXANWGv1/Ntz8973vfer3uO222+RdP/VTmpfHUr+eqshdte3Jtqh54kZsLNSvOrIJVrOZUaGXmEfn+go4WjBYgcBWcSg3OE0kLoIRWBL9YmRf2zD3aLYcv/EmaeDkI6CQedG/xKqdvJGajxgb8SfBhycVJ5DSAK32EJpwvjK3KM59QaJ1pxJ10JdVCmGkDqlJYmaCtm3qx8dpZja0shVT4kaTp5nu45q0HbLEaAaz1nNoXypAsZbV7l5HVtsVVbkTyCP1p5lyylleIYImHBObW02cxksruWp/okDHRhz0YdEUZgYAE8FjZZJD05YM1xVFrG5Rwbz1pYdrpAlKHwz9fnyvEjaZRsQwF/S57YJ1fO/3fq/84R/+oUYlaRrSHP1KMA1HvR6A6qRcfPIROffICdk6d04G3Y6CTbUeiI9bWrImYiUTgAeYsJ+YCvkp80RZQwTgYWtkRYW6/DssAA38UBxM2UI06ev3XLuDnV1dBxVYF0y+py/SC/AmODyGYP+Ra0kIc5NgWCmD1SVNnCeJpnj5i7BOsKb18EnY5WmE++WKh8NqoQGW3cchf/5Rme1ckdr+Y2B/9IXVnrVg9awArFOnTqlA9Fu+5VvkF3/xF3Eid7BRPOOcxERzE9FkIXOgw7eJU8LCZqTynMwhiqYyGPYVLMoVo7Vi1QWtO2VZ+UZKdXEkAIxuv2dMKuy0nc0tWVpZlmPXH5cAN53mHis7UAXOyFmWO/BpAqrPyeLJOlbwoNk4DcdaRoYF/XyYpTQJfc9MKUGBJikjhhRpUq5AE09TcVQ4ajRgBEDeHA9AxPcx6TOZXgNN1QjvVSJrC02HHk+TofGfYynj0TLHw6nUytSdufp3CrhkTZhDAj/nkF2m6bzn+wZ09lImQbMF80a/VR+gNYGpUcGJT79WqCr/kRGrilHuK2iNhhqEYOsyghv9Yfy9VmtNTOszMrnTT51WYSnvLT/fl7tpOMW62b58Vs4//jDA6oRsn78oHQBGgntTazUAUmDS8VBNZKdaUiZVBshoNBCHI1PGPMw7BaEuJThY49x9WTpVQIpxKE5ZSjs2Ld/6MDEZGc5bY0qtWcW/gTrVJ/2+RnQ1hYrpZ1hDLoXQuq5Y0huHHa2BfteUElpY0ntu3CSplvJOcMj7ALkSrnPc6Ur35P0yba9JBaZibengF/1wudZn9Uwz8NrxWQMWndyMBpka49lVncnnqkuZ/w3NJkbSfv7nf15/9lu/+Vty+fLlvCqor85qH+yJN5eXGc5GmjPoVjzd8FRwK4DgpvKYD2jizHMD1b4ytaJornDD0Om+t7On7If+oB2cXMv7VuW6o9epH2emGqeZggilEIQFbSQxmapDnPPGvyFwUZOlzSJmqdJo+pto+hEgCDjD4Vg/E0G3Wq3nvQqNGJRAal0taWwqMVDVTnNvrt+aN5UQLR9j5o1zxc9FX5mdRxKZy0iWRU2ZY5uKE/Q70WkreUkd6rjI7gjI1FFZGska6jXXYVYPYfYytYc6Nmq2+sMefldWc5kO/DHuUxkARtYVaXlpD88b67WUS6Z8j1Z8wDx4uG+R1gMLpdVqyp9+5E/lrW99qzrheW/X1tb0faxryuo8mzVUWd4fctzdkdHeuuydPikXTj8huzDPyF3pj3LZom3Wk9QGk64AqHysW5rXtskStSyjw4txGCW852CglM5YeAIrf2i/gAj3l413cc8Gu1tgTnsqnaH5PpkwsFLHvVqQ3Y2LuK0jLHJTeYMsV3tetptSW2hLTdlXRXtsaiclXMFsZCrhJvh7yhvIoEplx2RzTMG4AF5V3KsZDutZZx3PBzBfuSDewgHtNfDMOflCx7UO9PmDr0tR6GcCq88JsBitonhLGyXkEa3515/tB5k/X9NB8O9jjz0mDzzwgLIPJvv6PA0Y+YOpRFPQZ+IvJn3CUC6+ovlytRQLC/JNpnrTy35dwcGIQK3cuZ7IPE+S/3Y7HU114PO2tze0TtSRw0fUB8T31mih5WHRMWUlUubA6+J18jSj6ahgdeigmqcD3GA6yEtYGGQjPLmYLsTIo50ZKQN9btocgguT5WY0FSYHItaYB/h4uWiTm15PXRXH2XkPQnPDuHgVNPlTC3PPChQEsdT4mNgujBGnCk72rJPq8/mX1FH5QU3BkhouMlImRzOCSZ8b55YSEQIT8wd9DywxGcluZ1dLLBPcaS5OYMIQjCY5INLEYJrSvEJr7BglvGjiuDHd/TJzLWuaWkXlO1OrNjY21ESc0/35An7mgv6H2CDPfN3P9FrPBFFuaEZh49lQnElXrpx5Qq6cPit0B1XrbXzUqUTjXS05VMFn1bI9nmiUz3BgzAmT8GMHjAtstLEINlPDGvNlACuCMgXq4dxSTQWe1MmVGivSrjbFa2zL9tmzAJGxBpRKFQDjdGDmXjVXjrJ2PmrNhlQbLSmzfHetDlZXwxoG48N9V98YdVkMCFEiMeiCAYcSgHG5PGzU9RDJFIe+G7BQQAPACkAcb8sAe64fl2mtXgXv+V6/lnh8pnm/dlyVJrASimuqh9C3yj0593HOHe1/1+t8TiYhX9QUpTMfIkmMU/ezBa1rwW5nZ0d++7d/W4VhGglk1+UU7MA2OXdMvWH5k2mej1dvtuSqcsQy9ddp+vjYlEwG5turhCHv15dZ8wqdFovQ6YannqjT3cXp3wZLOmJMHy2FbMw6+poAdTKajtVXZsq4JNjAe3oNhwBWzCOksNLRtBucYnaqpVdqWGjqeLeMir6GU5EsiqYrWZPOEZ3ntqVOVZVaSKIbnNFI+tno9J77t+YNKdJroOta4R8XYQJQ1DZhZD9USae2gtTUm8lUK6PiZ24kraVFCbDQ2YRCRixf46s5wagnI64UMJbxd73hQD9zGc9lRLHklfVesAw0foT7VJI+lfhqllqaysOLYyI4/XwmiJCp341+PTK4GebtAx/4LV2Y+/fv16AF9VnXLspn/vvp1s1nAp5P91pXiyP+PVbBtSf9tdekQZEEn3vSk7MPn5D1K+sS4PNUub76WxKOO9hoYFU4JHhbXBwkZLl6tzIcUFJSp7pfa2KnYp3BvE7Y0xI/aywuS7W9D6DeAlCUr7Z1065GylY9PbQt7Ideb6CHTrncMFVJQsx32Wi5yO5ZFYSg6Y5KapUwQZ3/Ml3NSX2xfEcd+36jpXIaNvINex2AY1McHLC2DZbWWsTPRzLpddVfbDOYgrXiOpn03LqW9japZdnf2u+fbi6f+e/8OfOvrwUtronDhw/rQXZtUObvAz33czmxnDwVRNW8OVipGXINAl+Lptd+f+2C46J9z3veI2fOnJElnLjlwNd0ksA2daSof+IqYPLtLNcG0WwyG9dRQKIvhTWu6OdSFmSbKAdNP4bgHdv4XpiYTH8Su+dQ5ElGcPDQEd1UlB6QQbB6QoXpLlaq18ayLJKztKEyCZF2ewkTvKIgQHOU/gD6gQYArwYTfrGJJ9PYVITItWMUpSpY0Yzjvyx5DJBhBJAmIDc6mQmBg/mRTPWxVNZgnq+13Jmonan0FV+bz6QpHVkmuRNMG2dosT5256Gj3mZk1TJyDwBOt7snDSzQxeaiOvXZVIP5jWSHhMQuPgNzHplvSUBXvQu+Hwy7ei94HWSgyn5xH5iIbZEhziIFs6AKU9F3dN60qqp2rbbU/0dGtb6+roGVH//xH1cxKn/2dwHWMxnWpwOoa3/26RjatY9rX+eZoHUtUHFt63MS0xi3ZMUy6V6RJx68H6wZoL+6HyDVl+HuRbGiPkDeOM1FFefYhJ7pH6mADXDxcABrRQyY2PWFktTaqwBwgAQOBpprMdZ1loJlRRPjt2S0ldYBwSAOYYLuqomo+kIKdcGa6rUWrqUr48FUhuGQzlq8r62NUWr1slYPaSwu4IDaJ02sqVob+4ALqorXBrum2R40SrqeE6yZZIw9BDDjXnMrMDuxN8Z6OPfxvjDxsT/KNVcu7cz+1r6fJ7p/unvz95n7/JxzDJmD1WcDUp8XYM2RUU/3a8zBa028zxb4PvCBD8jJkyflwIED2tWmA5vdE1OqlxIGx3e1BDEdzTxpyn5NHej8wNz8pmwKzjAv0D3rWaZFMjd1OKOD3fivTLG9saaIhNpuPpXVfWvqzE41mdeUnCHD4GKjwJLmna1Sg0TBiTeIlHWFHZVzE43RyzTxZEwdFr5mPmGPDk6tWeypf4jpK1beRMK1cpEl8/+0Q48pbUxQYLkaNzeF57oxLeXM57iWdtmxCXW2yS9k9QamBHEe+PqcdvaxiDLJgR0syWMVUUeDDLUArABANR1NZQtm7WK7paLSaWjMXktLVoAtEYTwZYA57cJ0sFMttmNEopx3LHOyKIubNMIV4RRmAw+Wz6HglA54gjgdxnw9VTokphQz7zOZ9Pvf/355wxveoGBO2ce1wDJfyNeCzLWs/O9jSM80JZ4JWH8X+P3XryVqunspDrL1c3LyofvBoD2pL7dkuLMNZnJF3AyMtEJ+nepntGkRADQYlSOr4ZqkSJhuhSYOuCpNQZhfU3Yowrx6Lsz0Gs24BsAD95PpYk6al8NmeaNUk9yDcs1kE4SZBjSYI0FG29/pasoXj64gwLXSGvFF/bJkd+E4lCFMTiv3P1XYWQmvW+IByENZTOltD6xN8xex5qnZgp3JDy9VXDMtgPHuJr7HWh5uyvXLq/LE+uhvzemcaX26A+TvYljz7xmV/3zA6nM2CZ9Jn9/4j7/Z9LYza5RSj6uvSLkI6WuaGjOIP+chEo4AKqNMqw3s7F4GSCyoCJSMh3of3IGr0TOGeZv1Fm5oppUMtJHELNKkT09P/kxBghuYrGqucTLPm6rfjQyMicLT6VD2HzisJmSmavWJShCY4Mu1QmDTXEI2J6VIk52eVW7gSquJkwsmKeUQDnv8WWnewCHCzxumVE3eKsvSlmKRvg83OU1Xbnx8peWHCZ6sLKFMhY0ssGgq9FEwv5Htvswu4No1dd1tRn/yMsvu3O9jqzOePij6q+6+4w45d+WS9HH6Ml8wxmv0h0xQ9pWFkvksLq+o435zZ0ODCmz9xfCERi/zpq0K0Ky5hR3Q7/UwD5ZKLuj/YDXTJDNBBnbKniUT/XwW7mM8S/Rm+75nWK6aRKZsDw8NNzFz9cn7PykPnXhQDl4HNtB08BqmoWwpsKS9hHmuOwoGDfw7HDLpOpbeGM+bpmr2T6cR2CAYdGQac2gaE4MqLGbocQ3ZYCEuzPZAmvi31agoW93cYjDBsALLNs1odzbGMhnFUm/60l6oyPHVZdnFc1/30m+VI7hHpx58QEq1tj6/jzmLBldwF0cAB1cV5Fr9FYerHj6uo5s8CdknAIDWrOOemmBLf+uyRrUdzfmri1uFKQ9WNeljHYdj8WEiphUwLyfQgAyb+cZg/TMcgDGYcClo4jkV6e8acPC0/wAF1DDdA1sP22qtIhXWRmsuSQATtFypq6shI9CB9acWsyxw7ZgTpxTkIJOoWJXVeKMx7rUDa6BcV79bUG/qHh+sX9aojzXaljqsnbe/9UdkpzeRUQrLhxF0VorIyX45dWEE23LQrsua3ZLAKskYIBBnM5kQIyxT0rtRqsiHO5/6vJ357ufjzJxTaLeMZRPZ6t+g34bsoISf0Tlo5W2syBCy0DK+mIgnAE8iVjnIM8zzDeC5pgyw+QCpnv4OTaa8tK/SWKzUKJ5erSKKvapyAP0dN50mNlu6OXjqcyIIhMNRX5qtljokaX7Rx8BIFlNfCDATjcaM1NRS8GNELjNZ9ISIpaVlVZnbc7U8BZ7pWJ2e5aCKk3MEu81SPxdZERero9KLhIdWflNTLKyGbrAsbz/Pz0hwYMoNjT5u8Fit0cRUScUpmTIJlvOi0h1PN8tcs8XPPcNpe+cdt8lLX3KX/Nz/+h6xY278lvomemOG2UHrvbKadATLtZUDsrG9ruDOBG4yWc4VzexEG2fwXmaqrWKna57IPHSmqVH10wzRw4ULHUBIM5bzxm5E3NyebcpMa5J57hYgm6RJaspMh7K3zecalTw3hF2yNW+y1QqUKY5GlsoyyCBobl3Bptvr4nOUPanBpJlNMgUiH2Yo8/PITHkNftlVAOWo1gJNCCeTpG6pB8AaDsE+ejNlJTc+ZwXXMZGVlYZcf3BJqot1efXqXbJqL8rJBz6pjmnO8GB7S2a9dZhqBqwoGWAyOcu5kO/SFObaC7EG6gCqcq2KAzVTBTxvc8Aiky6lBokkuJdTmN9JiHnHWiSI1asN8VtLWDdg2Fg/0XQMs6wjw862zGiyAdCblqVBD1aPpQWAE4Lnuh56zEes4jCtaNUNar1isw9Z4aNhnOuaQUFxMxheCWvQDapGXqPCZLw21iuFpCmzF+pt7NMIfw8AXF2V7pULQkayf7Uh//Rd/1R++Wf/jZTB4hg8YrcoHPMSMm+XwYWU5NuSbjYGYDHQFEsX85/q7k81mBQlqXwh4/MGLJoJ9UWculhMmGMsTKN4pkms1U+4gfMcOAo5h7u4+D3WTQfKrgDwQradqqj5RHZBRyPBjRt6loMNTw4rP9W58DVql8TqLOfzfLaqIsBoraFUT1qaKLNwohvSV6d6qO+x2F7Um6btt2j7M8dP6zqN1Q/FzcjTjnl8VH7TOmNRvDWYkKYo31Sd7Cx3Rz8Z1cOs4BlS9Efl83QgLm4WC+TpKaYdmlMN43ORBeWKJk4PBl3dwGxkShSqNWramdnU6OJPZupsJVtJtFifbWpqEdh5MuAKyNj4ruPJDOygKQf3r8lNt90mPwzG9o6ffTfAeUH9gnSgDrt91Z4tg+rHuQl78OBBWd/YkN29HVxfTRkiX4sRV0bHtG68a8w0DUjQ9GS4iGBAEM3ydCHPNqDumd/THKQWlmCrVSnEmIZ0wLPUM+vvx0lfRv1QGVN7f4CfO7K46sNEKMnqMv0+tmxeoTRC8Dk8Ld88jic4D/B6mIeS1uinmj/RddNql5Xec12s7KtjI2cardu33JBWDZ9/OpMFsI0VfK7hcAbTPeIFypGDDawBMDcLB4bbkpXWUTlcPyZnH/wbMKRFNeuGe1syGV4BSI/1YOFaNJaAp5Vsid+jPsxk3BYWYeTp1u92dYMH7M5ENpbMNHId4z+L1gFbyfHQSimHGMios6WHvQcQsZwywATXUyXw1fHeI+NLpVNdSyoZUXRCcSkzL7DvJn2wsV4fc7hPlg8fkXJrBdZd2RRnnAzVtVCqLIjjt0xyPUApnmC9+xU1DTXHlcwNABp29zRI4jeWsZ+mmphdba9Ib+Oy7rcX3nmr/Pf/5A3ysQ/9mSzPMNdYm+ejLXlsclkaVilvOYc9hUMyhBVy6NiShJ2eDLYmyrhLOETLjvfFBay5P0vt4zoWdcvVEy+NzGnoVWBS1EERsY6mQ1c6mxSxYfPvJcoSGss4mXGClkumYmjJMbXV59opVj5ghE6LyKljOFA/SJIrqRUsNY3B+HRSTT9Jr6ZCxUxRuKoQz9SsPLBKTQmdwhOTauKasjJ0ulPHxTB8udIy7bsi06WZJqIPUF5sL2hgQbvuYJGGyVid6UwBIj2fhgNVgDOq1Go2NemanyPRtBXbmJjTTNvGa5UIbX4aq6lIAGOZHDqh0swzlUGZpE2NDaj+SNOHPFWcu3noN1Piben79XsjueHIIVnGNdIXcc/dd8kPfd93yf/+/t+UBhilry3r29pjcHdnG9fQ0LpKDu7V8sKyglOnv6eAiV2m80aQpVlIQbab+2eosCbypDNzKBDMU7ZFZAaBctDU1K2PE2WY9PNqOD03nXROfZNqNSHLYnrTcCr1Cp3Evr7OdGqpP2ipzk/nydkzsVzeSHSjz1IfwB6oeRpPIzUtfPUFWsK0TN9jAMTVvycQMk2lMzS9IpmD0HQSNQ/3LTWxIWMVY7rqd6KCfwGbbZ88Z/lOWT/5uNhUegMQppiXaW8H1gGZlaObW0PxbI1WMmZhrz8BuJTVD6v+T6xdMv56GZ+J9xqvI5yjkuksrtIFHEQV/A1BsVZfwl5pGRakrw1mibkJcfjxufyMYWKyORisoRGjDYE9Alwb68dU7wh848YY7A3U77Sw75CUKV2gj8Y25W4sJ9FqpvSPESxTRrTtzMSh2ewEE0nGN8PhRv+b31xRcSkrekSTtgIrAwCvePVLJTq5K95ZVradaMWOmFIbzKsLBjUD+2PxbRU+u6ydFpngBNZ44Ja+YP3d5610Nz4b3EQvUwBIYsuIGvVIxULiLU6Mnb11ZkQWK+WGo4sd29EUpWN4OzUt37GMsIlNhxqGb0tVmInUDKmJl+kpTarNG05TosQWWpaoKTIPl2r+HEV6MFUYumdFBdZJN9qgiUok5r6iDJQ1HIUmWRqLVCuMUncTm1A/9SlHb75RN2ykrM5TcV+E16D8gupm1n2fTcYApKm0yxU1OflaCU1f3ElWQ9CoHj5DvV6Vrc1tNV14c8t+SQvqsWdgFM90g6sZjEWohfLI2gBYFWb1M8vfqykAz7vY0NxkMuwdt96keicmyZKFfee3vhZAEMjP/tJ78PoNBdZqYOpndcDuWC2CjI27fgFAx67VW5s7pvGGGDOY/jM2g00so8Ln06PQ+Bnm+ZgMkVuW8dtlsa2+HObQRQQ339T0ynuSaSSLsgs628uYr6DuSH97JJcu9OVg0JIFOpmpBMcmLQN4jux3ddN86qmpdHYTXQNcC2r2OwTSVFkcr4ghdyZ5O3qPMzWB1Q0wNeYm2VbKyHJiEt+rMCtLNDvx+xkOsZa3JLcf/BrZvXRZwY8n35hgNerg9YZaQ9/V6q+ekaPYmboVwlksFbBjloWZjHq65jxaGFjvLvP4TONJVbcvtPdpOgwjtyWKOql092iWgSkzJ5POXoKbHapfK8QhOu11cKBizppLKkkY9PYM888yPTBjHL7JGAAFIPYX6hK0DkizvabJ0VTDJxMAbYOdkcrKTNXFYF2j7+N9w2tkYIBaKSQy0VHqA+lwp2/Rx96JcHAzjzcc49HflvbaDXL3N71MHv+//kbdFzeWjslaZUm2cGhPwBiHMJ172GtVrIFlMNzzU0dB29X4satJ8l8SwDJKbkdtc1Pnm7lzpMzGbzUd48YOMzCrSDcwmWCl5slslMBub6oync52bgre7JBO82mk/h0ubOYEemoqmbB/koYm7J/ZeS0r025dHanqw0rV3Atzs4dmGE+YBlgPbW0CjebjqYMv0droTPxl6gz/VjUw09FV4ef+pSWYdy0wvjA3yahbMp1omM9Fs5TNKVJccwsAUcf7pDgRmYyagImQLnOT0XkvGpFJ9GRjHSxN5qZJtLCAz1hSs0fryqvYzVKNDQV+Nx87Ipe3d7QWGNvNM6GV18mFRXU6T9jn33JcT16m6WigCfP4ja98mUwwD7/23n+vvkS3RF+Tr4UAGYhwrJIGI6jiJ5OlX0nrZYudN2zNdJPGaa64twwbIatLJa/QKsZPqXXs81XEUHg4Neb53NeWWcaHRXORD7KsIeaxXMf87YJNdH25/o4VWWjaWpTOxBwyWVv2pTcmOEbS7TBCFhoGX2L3akuZTRfmEO8HU68Yrq9UTMPbKUCTrGJpoaLq8+3tvmzbE1lugQ0BsMKMaU0UUzryuhe/WEZ7HS1mSCf1cHtDZkNsvsEezEvD1CkTcdQSMFFxHswEK7LJaDrSjkMlzMzCyrIsrR3W+lRMbh51rkh3/aI62WkaRljPtoxg9sE0qk0xB5EGmejzpEmWYSJjmFpNO5DMCyQ5c1o/jwaWNIuCWc6YB3VJhNoCbjqA6SpT/AzrPhpLa/WglOoHVDhKtkXWaWm7uhlPHbAoX9/HxuuQAfOA1xpaYHUMyngwFbnex9sX8XdHTeg0xOFbbUi4vS6j7Qty3Z3HZf2+U1JLsa43Yg1qzdyZjLORZJGjSdp3vOo6+fgfP6n+ULoRyrwOmsJZ+qUBLDW/cOoOe5kpIc1IALWDFS68VLi/upcj09aKTtAqtSY8hepqCnIzZ6x9Tns8I7MyURxfazR5mgJC255gxtM2y5uhauqJa0okp+prMhuGKSG6mbW7s6vh+BZOJ+I6T/eZCkFdjcKQpZG9cAOwGTzZ23DY0zQWJpGyuimbiqr+Ca9v4yZzE2oH6SzVPEP6aBg9c8Ck1lYWJYS5mNHExbUl2GQwjIXlxjLfmC97u7ug4bG0AJBeqymD6UxNSK7IKPTUFKRoljln3W5fVmHK3fHcm+U//vFHpQIWVi0HYvrxmNSeCf5+dXFRbjx2zJRgTkzQYTZNlG284Zteg98vyM/+q3erw50F3ohpFZfOeDZ/tVWxzhNeq1HAROgDgJ15apAteQMKE1FiTuHVdKfM9FDkWZVZphKG6augba21WgQdsD47EuUAR8alMhXq6YZg261Agx2b6xO5fGYolVsq6hNy3UwqiafVMcq+JYf3018Zy5WNid4DTxswMol9Jjysef+FUUiAoe+Q5WKeOl09aHa7uJ8A495gpiyXG2kUMg0KLAXs/xU3vUZs3JNRv49DLYNJRUd3Xwb9Td45NcUtoy9RjR4Bm4exz16PmGMmsxPsuY72H71OVo8cFAf3oVzxFKzOnXhYywCpC4LZAnSDNKpSoaKcvS5pQuJeRN5IdXG0oVhSecJUoO1dAAGb6wLoWYUkMEX+6GJIEiMOVQcVtU2eSWFTrd9sBLNuTwNWLitB0KHsmIgt2XMI5og316q9mmA/GmtUW/cz1v+k09GUIy7M/pWz0jhwFGuEOiy8N4jEpL8D0KvLrd96h9z/L++Trr8j2+Md6buRdltfPuzIzbcfluSxTUmmlq4PLp0xrREwSecLzO75ggCrC3SN8yahJcfIHRKadViQk0GkERv6gaY7M6m0XZxkiTTyHnl6EgK5I5Uv5BE5VZsHpvkp/UB0ErK/X157nTotPW1c0+GGjEkdrqzHFBvNFDdhpI72kvo16PfixuALqOmlUcFZnrbjqHOxv9dV3RSvi9qiNhN7eaLE5iao81lz5GKtJaU3gGr4flcOtpvqL9oAA6j5Vf0MzJMmKNOBX4HdTz8aHyWePLcel5OXNgBWFU01ChVAfQVDhphtNUkuy9d/072ap6e+QibN8vPkkgF18zMBe2lBQYlAoKkxWZw3VzWi0ntefJf8y5/+Sfk3/8dvy9nTZzQqO4yMs3oynhrBILVUMDEqMB1mXqiOd94cBkysvPs0zRsz13auFzIVJ2JsKI9P93LEsk3Uln4m9dUlpsyvJgRL3vkar0eBY2fQ0YJ2w+5UHj4xkG2wqFrLUX/R0YM1aVRd1dQNZ6aDNe+BkVhE6odUDWBmzGNMrEprrmx0NE2GPiZAG+5fJk1s8qW20VdZmaORwsEwkuP7niMvvuFO2bh0QcF/MumrH2oM08vFPFaqJpKmZjJFlpbppkStlVb2ZAdwNj7RIMaa1Go4lM6ektZSU86ePyNPPPCYzmMDTLIKEK1q6gxLyzSlDFOrXGvis9a0aQTvLaOmeghgT6Ssn8bWbmBuVpQqM2eFWC+v7c8GIFxPjvpXLHVfUIgal0NVzdtqcmBNgP0lVLxXjEwBPFUbWrA+23DvnCmbjP0SD4Z6EPJaYnzWLphUtb2qJGSwfk4qi2uS9rYV/CgKGW+elsbxu2Qv2JGdzW3pLgJkj6SyerwtVt2WplTk5H9wZNluCmZVptlMetZU05VKlvOlAyxGdBzn6eYObAXIzlrTQSr9nQybuySd7QlujEnytbOy1o/i4hv2emYjG7G2bgIqwHkCa9oBS7WwllRmnqAJw+IoaOnk5xUPlG0wwhUl+U3JFHzYYJWOv1jFn5ECZJqbGzwlTbec2JQ4xkJlFHEEU+DY8SPykpfeLX/1qTNagjhgrpw6JU0vQvqE2HlmjOf6ViL3vPQuue+hJ1TTwms3xfk8UydKTH7guD/WsiQ3HTog+w8flBMnz8q+o/tUGBhPMlPhgSwEC2YMEKwFttzztS+Sj/7536gpwlOVzJNizizDRga9Z2WFpfZBXE+gNcI0bMGyOuo0i5X9kim96PnPk/0/+nb5uf/tPXLigYewWZoyxOdhrt9Qa7qbg4a+qTJMqvEoVVPQyqUYSWZrKo7mkSvLBXCwZI+dqiNeCwWmJojB+6R5YkxZ0jw6SkCMZk1V/oS72JSxKU3ApBs0qShgTeXCOTDifRXdODu7I7npeFMWl6rYTKxBJhqIYPkyrWyARcOACeesUitLwPLCVO3jEobMUpjFeh/6XcpoEmkulFQrRlYWg1kuBIvyqhe8Srq9gUyGEz0syLJisCtQLAXUONeSJernidXHSTkECyTuP3JEmq22lGECb18+Jf3Ohgx2rkgTQPTYg5vy8COnpQZQO3RgUepg0yzYR6tBI2isdkGJQZ9svqEBnzozE7ya3n9bRY3bAP0RAClU5zrXkoqqAx6I7GweaRZDhcUB6zj4WjWpt9vYW8u4vwu4j1TaV1W+4JRMNJAsKQWTSGDqphqRBuAOd8WtLkjQWgbzGuDezFTHxQNssHlB6sv7ZcaMEn+gWrJMo4slEJCORNvn5KY33ymXH/5DSZtYw/hvXJpKJXWl/8RA6klgdHFRRbayrnRgkrdsWFdx6QsCrM+7YpeChRidkmObF8IBppGuKRbMwmoJCyTTR1ADDe9astBc0I1H08v0w7NNY4i8lDB9V5ampJhwuWpOMkt9WHNzkAxprlpWFpYr7bO8uD/ZRklberkaneLCTuevxStWyynWk6THZqMAHjrER4Nd2Y/T8X98y3dKFwCzsbljSiezGkEU6cakNIGsi1Gu7uaGfPM3fyMoflOu7HZUR0QPD99L28zngQk6+MlmIiyIl9xzt1zZ2hGvXFYGRrZIvZPpHu1h47nYRF018647dlQuXlnPlfKso+Spk1Z92ZRjgDXeeN0hk/RNz19q2KbK3hntw0ZIdCP2ZHV5UX7q7W+TN377t2mdpgp9M5Jq2V4Cf6yfz2xK02bM0lpM5kanusBtU1VaGbEq0/PUJ/VnSvq0Qp1s2zf3iqVx5knbRotjXiTTVKQKzL5Ene0p1dxU1VNr5ZdVy9SDmXxhB6Z6aCJzmk4cGq0YXRBU5DOdiWbyFIDCiBWBlsDAki7K9ABs3f5UWDW65IKZTHANOEyPrtwgbR/vD4ZEVsVcTkZwZ+MeAKaag6+ta4frkX4ymk9+rSY33XSD3HzTcdyj63FghbJ58ZzsrW/raz355Dk5deqcrLSrMBGXAWp1VYKk0RTYHmvVXCbI89AoL4CN4GuC/Ky3K+OtizJev4h9sqsBEZY6Jhui/5KmmHpq2f2b0gqm4+BzVghW7bosLC9odYxyzdcSSyzU5zENCIBoUUBqUiuk99TD8sQf/Y6c//iHpX/pCYDUnh5KXnNV6tfdJo2jt0rj8I2ycN2tUmksqWCW93kCMDbC2JmJluLlNk4+KH/61P8tp7Nz0pl2ZBTtyDTqSX+yhzm4KBfSHemEfbGx31pZRYNrIzCtVlD50jEs1zaAwygODgnmioJ5ZPiwtqxc78iT941U/W5rakBdqmAnFMexzC+P8Ll/i9EL+mlY4IwhbS2EF87mWb4KAjTxjNI7bymvpYVT9V2ZmlIGyMjIuPFVK0WzIc7UKcr3I5FJtf/eVG/UgGwGiybGgqV08xfe+aPqmP7jX3k/Tq4F4y9ITdmPNI9E0h+0fvmSXLd/Vb7pNa+Un/lX/1pNWooJGVmjUt0jUGk5GJqHsWxvXpEbb75BbrntNvm9//TH6nimKaGv6ZhSyfRHpNhgo0Ffnvu8e6W2sKhRRSez8wqlecaAldelx9/ceN1R4xAncGuidqpRtCzvPs1sAwsgNMH3i82G/MB3v1lW15bl19/3Pr0+G2DJCGJ3MMhTE/NyOa6tm1/Ld2keo7kPJok7y8Wgtqktb1osSuZmuV7OmIFUxk8jRrPwPDcxmi36uzLje6SPks3t/VZJBrtDrUHe64yxQW0wR1eqTV/C1NzHpX2uLOA9djdHMgTjipWllXCAlEwwpxroHDACRcZfhzkZV2yZMVSVGUe+Ro5xDbXqorzg+G3K1KYDBlFmaj5FWAue+rk8ABtMKyap8wBk0UisHwLB0YOrUrVnMInOSgeM7S/+y0fVN8pI+DY+w2ySSLsZ6PzRCT5gd5sYrCxytaEE2XBmRVrmO2hWxK/XATwUkNYASgC3WsO4NXZ8mQ1xqGOd6opnZDs2/QkoKrZSU/abGiyWUh7v7QHgKtpgeGnfQWkdYPIzgKFkWHZKlhiOpbx2RJynluTco4/LQeyztcUDei+n/R2wXWacZJpb6LKLOg7d+PQJ9Vn5YGwzmMosXTPVVDJP/uP9H5f7O1ektYbDPpuQ6ioosdzR3iWwQ9z3Zuarz4rEpumWZcsayV48+tIBFik/o4M8lF1MznjCkhqZVJe4CGP1QTSXAhzLWIDUVbF1Fe1ly6R8GEW0pX4jmk7cH6xLroCFRcJQ8iwcKQNRUzAzpse8Gw1PWyNQzE/6vBjevDwIFzZNA21SEQR6ztMPRd/HBCBVJgBiU/H8/pl3/pi85GteJN/39nfIGKbo2lpVjZjpJFJVvFYggKnZx8KOxgN52//0PysbevjxU2CT+5SdxLqRfS1BrFn3NH0HXRl29+S73vnPVexIEDpy9HrNGKRJTOamqTvYHMPJQIHhjjtfoE7kPZirTGFSFpR3llbNEq6Pm/TokcOmqgAXhZXm/Vlzp7gulFgBhX6QCU9mmLff/tpvkP2rK/Ir7/238sQjp6Sxsqa12rujfv53xhelhTEtR/0OVp46oWCUa2oIPgQhK8nz9NK5Lst8zUgY59b43DzzGjQvrXmt2EzLNJPhlgImXovUDjVkuIvFvx8MIVfyR9ohpiwTzEdLTGUOShf4nqw3T4AjMvMw8SkTAJBMh7E+n7489QXh89crnuyrL8rK8j451F6D6d1TM1CjtzTRYO4wE4BNHZTxM7rJNYfDpc3uQmOw8fXzcnnXkcX9B+XjH/8k2PKmNJtl2ewksrHTVwbECq3sN9mkLAegR6FroLWrYO4HYwnAjMddsLrOriZUt9aO4nO0NSmaZlcK854yDSrks3amZqmtAY5QY7j030cEw+7YSGooLXINU6/XA9k+fxmM64ysXXcdTLrDYFotPVwirEOagEtHj8rGxcvyxInHJANILl3vSjOoyQQgHI866ktrHbxe90ttYZ9snnrE1NZirurCipZDujLoycPbG8aXN2Nk0dIUvRBMMhmGcrR/QCuHkFOD98qWDGUPYDWWSC6l3S8dYJG7ukbSA1sXdB3mX6XpSTjIZPucyfB2NJm0JlVQcO0anFgsjKlgw9tBpynpvS4S1anY5tTTLZ2of4HZ6Fe7EpEF6EmfqAYryWUNJiEz1Q1l2tBbGv1TkZyakGbDUXdFc5BmiV/2cON35ad+7l3yxrd8h9z3kY/In9z3V7JvdfVqaZhIzcpY/VMUk16+eF7e+LpXyNe9+hXy7p//JRlgAa4xipgYcGTltnRqzFQWf7l86aK8EAD0qte9Tn713e/WmlKilSISLQWtQGsnCo67u9tyA0zB2++8XSYAJT5XzWNK25gSo+XdXZUm7F9akAP7VvL8PlMDbC6+VVs/MY5xSUxZG9GqDzMFjq+7+y6Y5y35hX/96/JfPvFXcuDQEalnVen3Bsa8zM0/K+8wpMwrZ8KGDNIUp0/S0ufyLedlcVQJz3WhvRVNJE202mumIe6rpiN7SLqsCIEpa3gwzRLZd6QuZx7ZxJwFMo3pQixJyuyCdKTAomkdXpZHyyxVtQOO9HfpJFFJSxryHmfYzHnVDvpES4mKaNlUbX9tv/GbjXoyxcNmFVUcQlxjESNZ9NNloSyDQbdgVq0eOiSDnS35iz/5sEzAdNbWVmXj8dPy0FPnpAaTrRq7sgTz7tix41qeiKWnL1++IjsAw3rgAbhYgshVCzulGhxMPKMAGeuvu72tjvUGQKq+sKa5i6ya4LLa7fY6PhP9R1Wde+bSstXaBGt21JuqT4q1sULsqd5eX81/HwtkdRlANxuJ7xhmXKUZxyIBLMEM4Oaheej250n3vk/IUw+dkO7WFezZJVk7cgigtit7OFB3n3pU9t38vDz1p64dqtnUlX5cqt8Zba01SzADQ93/FaesJCQA8ZgMLNknC7IjXdnLBjJmChpmftFuSBtzcDnrf+kAiwswKNtKyzsbmSbL+gHO9RGdi7D58bss9NWJSROPC8XVJg1mMq3cz8Meg9ToME2CP52AvvIojrUbS6IaDsnz7+a5hpr3FsVmU9FpnJqefq7KHVhqxbTxpgmjTULpAmdhf7aTZ/0qnNwd3Jy3vvWfyJu+7fUCW0x+9z/9kfpzyirmxALD4os0eklWE8nWxjoWqSdv+Y43SDIaycc/cb86zklumCU/iU0WOMs20ywiu+oCEL/re96hQsHHH3/UyAZUpxZqwwYCrJFvUCTZke//rjdKtd2W7qULuTmaGh+THWm0jpuu0+nJi7/+Tmyouqrz5yIuo1HLcp+RAXfJay2JmolGh0aQf86N18v/8pP/XH75vf9OPvT//IEcOXSdMhYmhascjCZWkuVfG7M1y+b6hTzzPjUCTk36TgyzsvL8Qc47E3OZusJonedmpjFIZkwtRqAUtGDq9zt99Xk1prjXMJXWL/Ykw7yWsX5SmFDjnjmYotTU6KfJS59hUMlNV84Rc1YTE6AhOE7GoQFXD+9T86Ti12QWT+XogVu04iq72tBH5apkhi3gStoJiYx9cakFEKpjTWyJMw7kxCc+Ids7Y1msl+Ti+qZc2hnJ2gIODHaradelWauoBVFuMvq3IC+yXyibly/Kk4+e1MKRScXS8kYLeF1GB+vtZam1FhWclAezTA8OPssDYPbOY+/09bDU8sYMQGEda+4iH2A7dFdYjq8lrFUAvLgE5ghzcP+KrIB1Lx48JpU2jL4KzDwAckp9VzRVyUM86clw87IcfwFIxfo6zMdl2WR7Ox7w3W3VePW2tzAXY1k6ckycMiyGnby5BebICnDttZYsY34ysM4F7m2AIMt4e6QY5yoycEayGw/lkgwUzNayBfGtQGI31cj8gEDNRsU33oTP7H3xACue2Rp101MZllh9kX4YJq8aH4qNE6VZWVJaO6DylmafLtocrrDT2bFW/Q+sK+SaaA79Kz7D7GQjeZrHVY+uk2uAMoJZdLVkhTI0Ny+Ux1QederPS4oYdTJNKfqjAp7LMEVe+Q33yj/7/u9Wx+alJ5+UP/74X0mVBcxIofHaYd5iXusXpRMA1hV587e/Ro7fcrNsXTyHxbulDnbWtoqziZaPIQthR2SC5Pnz58Cuni/3vvLl0uuuy+lzFzXZmgp50meWCzHFB1m5Yk+WFlvyyle/TBOMDQtJ9LqpKWMNrgQMlNVBLVzbvS/+GrGYM5b7+rTU7pyE2ibnL3c9KWDZ9GWwykRmWlOMMU+HwCLe8cNvkzpMs/f/9u8CtI5I6sdalnfeqZrqfrmm5Ms8Lct1c99VXvtKWZ6dw5ltfIXawZpNbqnjyVOsNKVH1QLaQlZNGWvoaPmbfncKE6YsvQtjHIADiZaMq576OrIrKzZMkvd44pDxipqlqtVL5ticGbClgz7kvUs0CltjknndkSruywiHCNmVgzkiQ6F4eAYQYyccD2xkqVmTbbAMZgo88uAJ+cuHHpa1li/9SSanL3TAmspycLGsrc6mPaw7jbqlap5x3oNqUw4eOS5Lywfl3OnTcvrUKXn8zLrs70/kptuqKmtwKzUt8VKqtsFa6nNViAj1dnjdsLNrouOaKaCLXluCsZKCVjMhmIF9BYcCaS7WZKHdkOriggS1BqYW4DBmI9ZdHNKX9EAp4bNEAKH1J07oejj43K+Vm1++qKbmkd6u9C6flMvTgVx5/KQGQqZnT+HaTBI/TVFKb2gSUu6zat8gx1eOyXj7hPakZN4r2d3x5Vsku7EsD2DuujDTu9g/IyvRlJypMwQhCeQWf1E2z56R1YMHjcbtiyochQnIjkJ0jNYXLNBEWxgZngxhy3v4vtLQ5zF87lqurnvS0lQXq/E3lfJ+bFxs7D9If5FxnhuHOlmbnuD5RjPUIdFwsIJRXopG67xTGc8QdBLlJZLnOGdOc0b7LHqSscmPHL1OfvSHfkBWmbSK0+PPH3hQdsFclleWTQoImVhk9E0eFj0bDlQDV974j15HsZE8dfqcDLAAmqWyaVbJBDWyCzFNMPrdjoxh63/nm74dT2/K+XOPyMaVLY2Gah12bMDJmO9hTL6trcvy6pd9syytrGo9dk1AZrVPLR890UVrJZZWO2V+46233KSqZyvLqz+KcWhrEbi8VlPGLi2WqcBAHRGZIGuP25GRdYz6A2UHP/yD34d5duS9H/igHNy3ZuqLa96jqGA00XpUYqQMKg+xVPJBpbf2fKQw0Z7LU4zzPbPM/DPxfBiNcv+esR0TMfXAREtMm8gZ26qNe2Np1X2ptGCe7o6wOUviBCb/zqYynQGbsemobXlUo9niZ8wKMLKaRN8j03xJ12Ma1dTkP9q+dIdTec7KcXU+s/LnTLUSWC/0A7G1FkzX5YOHpYQF3d04K5MeWB/W5+9/9H7ZhQlWLzl6QA76Y40yV3B4LLtVGVPyMTBslCZpdWLabcUALXZwPnzsmCyurMjexgaY42U5cf8TWBuh3Hz33dJcbqlbhHqucqOlhx/lBV4Z4LOCOWS5JNfoABPWTwsqmJtlsUsNgMnAEGvbWDrjIUsd70jmdcSzz2niNFnugZueI4216+T8iYdl79zDMLuvkwMAK69qSslorwHciDKArr3vgHTWd1X07FRgpuOAqGA+a0vLsnjkRhAKE8VvBnV50yveLLddeL7WTtvsXZT10SV52fNeL0svu17+88e+F4ApmnrXS6dyyRlIwy7LjW5LDt2yKAdve66WIr/qWErTL5JJaBvGE40ZOfJUeTzum9ITrDNFwNLcOzH1r5h8ZKU5VdKCgI5SRJpbrpYpsXVRaOIsS3bQRmZ1Mpp5ltay1K9VUJqak9/4V8ydMw09I1MiOTULWEvT0GRjmy48SlTkA4ze/OY3yp3Pe65MQL993KK/uP9Bk05iO1p3iRs9Sox5ROfmxuYl+fZveLnc8fzb2F5a/honL31aDZgAo+lEo5EUfoapyaa/cvmSPO+5N8vL7n2Zft6HHnhAW9u32Rsw5KLOTcLQ1WqrDK9//de9WAsAErDUI5WY4njjaV/ssKRR2X6vKzccvgknakvNaNOlML8RrAig+ik7rxaVyTV1pfPVYdTyWWLY43g4VN/IP/u+75Y+FvkHP/yHsm95RfqgL1nuvVftVTL3H5pAifoOE3OYGG9kbo5ahukROJmGREmCKuaZGO3bxseViOaWaTE5zBczCygino1jdfZXWmUZ7g7BhKYwbQIwEcc4+wG2dNBL/p68rzOWOomSvFaUaQfP+uQyiTSvrrlUV/OFQZFDKwc0qqapKDyM8FJVJqyzbEzoSb1WldOPPSAXLlwA6wzkyQeflNV2WV78vKN4Xl0ZJ2Uze3td2djuy8WtLgA/kIVarD69GTbAjHm0NIGZPF8pqzPdByAfPn6j7D92XJXk/d0dOfmXn5Dh+obsu+EmqTQXJerDdGSSs4K/SexPnFQ1iYzm0tyvMHJNQTIALg5b2rKORRXD6VB9s+yUQ2kGAwrl9qLsv/64nH7kCTnzof8gfjSRG2/He1VbufuFkf0A7ztWkKQ53Nnuygu/8b+ThcM3ajAoA9Ob9LZlsndJ+lvrWjKbkUQmUdNN85Lr79S0s73dTTlx8pPSLtW0jNPt97xYTn70IXGACTHTxsgOcUsWb2/J+qWtvwVW16b6fTaJ0V8QYNG1FHJhlCy1YsadTEa7uDjYra3GYt4fcN4hRvREVE8Tq4TazlUhGP1UZGAago3z2tFhqkyHtjG1RyZ6ZWs+kmmXdW3xL6PsZlib7EbDvxqBVDWUvo5Wy8SJQhv95a99tbzh9d+kAGaBurIj0IknzpgaWwzzjqfKXMJspvqgEcxZlvP4hnu/TnUt9Hfd94mHNNKpJY4nJhfRKfGax9pOi6k+3/jaV0h7aR8ubyR/8zf36wkca6XPKRZNqrWsGMbb3NmSO557k7zohS/QyJrktbgYKY20/TwBONSoDFs/7V9e1lpWkdb1ya4Ck3UVlJ7+iTG9DZzpr3J/H1tCzf+W/opmvS4//kNv1ZZp//nP/lIWFlqmZrtlzOqroJUX5ptzVwWwxLgErlaavHp0ZiYlhQ5vfG66KDWK6WSqWXM11UfUp1XBRqQfh8yqsljFRse8743FA+NyfJOn2GpXlb1FiQm4RKOZrie/HpjULVY88Ixuj6WHmgC7ffuXZRmblI1gK06gfk8GXZj6U19qSAMg2jn3EEDbkktXIjn31CkZwnQ7v9FVDdWhfQt5BVgPwFoXf6kExrRPDhwcAdguy1MX1mV7byTN5gSHUV0a5VgjZuykLVqfisCNzxkwR7Yu9QMtWdl/RNXpLPi3d+6yTKsdKS80pIzrzDw3X7dGc6iNPchewYDLYFZlC0DFztC0AGDOzLBWpyPKIGwAJuY4KUvjhlW1Yh76+Cfw86EcPHYUzOY5snLooPgAaLoUQoAME6hDABz+JxcefViG2z2xnmupMNiptfBaM/H4PriajUc/KQMANWl0e2UR17sodlAVn74y15NbVw9J2tuS2cKavP6V98ov/b8PSNWryAz3enV/JHe99Ho5+efb8i233CXpA0+J/YIbvjgF/K4dfo1lWFKp1kuqcmfy+GxiyaH9K1qZ06jPbb1pMgeihECX5blqxsIjNbXYmFPSvFuxUTKrSJCeZlaB0L5J2bz7lQG3JN8wqUl+ntebNjql/CF5djveowzAq2Jj/P+8vQeUZdd1Hbjf+znX/79y7Orq3EADjUxkEgBJkWAULIgOsiVrxhrLVvJYY8+SZcszIy+Nxhp5LWtZnpE1kkyalIaWRFKkAJJoEgSITKDROXdXV46/fs7vzdnn3v+rKdlU8hpy1epGd9evF+49d59z9tn7h//6sxgeGUZtZwsR+f6LAtVvrq4Y3g2Z8a75XrKdu/JnZUntWF86ftshRWEFSfeu3ZzX9I5BsqFKnayxNLU2RReeqJz09917t6mfVYu4fnler4/1rjCL/7y/Zlt5PuVyAU+97xHkRkYltpV1w3MQlVpdLUEedabNLOjLA6N++7HbDhoyZdfrW4X5Njg5vcK44/cjh3tLGHFNp8OkZb4ZnyFPikGW9/gTP/JDeEvShx1qtUfDmr76VoQvaAN6wOrN93huZibTM3rujqnj8AdpD0IL7kGjQ+YZUT81XFC+Vthwyzh6Ikia3a96sY6YIKxENo7CzYJKBHMNkcBL23feiypJyGe1qE6rNmkhfV5aGoAZyg/GA/pvN9Y24SXbGJNUP5VIwBdE0WxUNeVNCoJZOPW6pIXbkFwcb71zFjuCdKgA0ZR7SEnQ29ypCegT5NwpoRSuK/+LjQLKv8zM7MHQ2Kig6XUJdqu4vlPWGb7BXAaDAxUJmAMq6ZNMBXV/cB4vzPEvCjaSBMpnr/PuDocT0KXWfkTuMRIz6hkcA+JJwAFsokdZb0Rf9Dxk16/TzulB0KIPpXx1BGnR37Aq63V7ZQE51rTGR5GSX3k4dFTRQ9a1WzajO2Tzy89oduT9BdKyb0q4/PZLGFy8glRuGEEKXtYKWL9yRoJ4Ub5Kgi4ruHHpin52emQQ6dwiBib26s/3KTBQ2kZ8yMPw43FBeFlk83l0AvJeL9Tx9MMfwFOzd6P16nUJ/Dm0Ts0jfHRM7vP/pxpWIELICoHdrtYRamtNDOWHTQu5YVEQi8FWe9wEUl9lJnr/IzLxbNtd7bIYdNjha3t9FrWpppp0EJYc6ndt09AxzjLk+5D/1K9dWYipDGbZdGGmKxIcPvTJT+I9EkjaglQ4JkKgd+H6dRSLFaNvJQ89EDIXy7+nUSblZt730D1Kd+DlXJV/v76xrSqRLIjrdVMCp2v0rFhzeuC+u3Ds4EGJPHWUN7awtLJiRpdZh+EJ2TWdTtZu0pJ+PPrIQ4qsmKpwg5NVTFE9BqhgT51CPiE7kMTdd9yuA6ywdA1/96jq9yZUV93zd5FWH/aY56ijSjZ48UDoCtKkUsWR/XP43372H+Gnf/6XjJCgcuHaem26eWAODq0rOkbt047c6a96oHDuzjd8Oc+3MjRWLysYMim6HzDIOuwaf0bSICI6xlRHQpBTfCCu17m9uC0HYwTtIFFVTbXAuuqC3Vb5Ht4gkRkpJYbs7ykvKRIzqhnkfaUkTcmkMsqud8sNRf5JCRxbi9ewsbqgjk3z567qAPT+2VmVw06l47p2SCEpyRfrlUkvooP4LOgTwTGIkuOWTycRCU7oXC3LDfW6pPsSVBN+QNcI7erMV1Tu09EifyiShpkVsJMDPGwCAfNuaD4SMAx/1cnipAMfJgnaRG3cdE5UZ0vNRJSp4bKoznQxLSh5YHRMidlUZ+A/arckbWQXVA5AppVkwwfDGawuLWHt5lUcvft+VKYncfXNN3VvMYVrVrbke8pyuJJsXZZ0t661Sc5lUgByp1JFtrCph240lsbV5iLeOPUc5mubyM6m0InJc5O1lahE8aHUk7jzyL1oLq/BWSqg80dvIdJ0VOHE2Rc3xiW3uEL911DXX0lepl3vIhRzEM86qGxSdSiugnQtygmzINtpmza+ZVV17JgGuVmsPTFP145fx5pWymKg155pf3ftnxm3ZLc39q8By2wSjWMqTWwGobWd3vasQTsUUmuXi1Ue+aOhkTz+2sc/ItCaM3Mlc1XywRev3lTHGbJyqQ8VVW1twz2irDMX7sMS5NiB4fecvXAFZUmXMhnjfqO0AxUY7OjerUgK+cRjDyMlaRVt5ZfJy9ncVjhNBYiGdUsmKqL33G133IYjB/dxGtyw1XnvrLmpdIp8uVQ5cFVT/r7j92Hv7LQOeOsn+F1beLcngm/RVk8CxrH8KPsOvusd9v/vacDxPGM08eQj78EPfOz9+JX/+7cxOzOrh0rv3bkq4OcpwmFX1tUg7GkBXkmm7Cn5jrUlM1pmOsJFqRkeJoGQSVm7xmMROh8qm59u0rEEGjtNVDcriEqax6+K/L66JYdCUQJ3RD6XTuBh19q8myZD1ypVUNOJ51q72ka5U9FnEItFlDIxODCk1Iat8g1Bcts6RLy8cEMHn5e2izqLuEcQAwv8gtcELVCi20dCdm5D7mNL0qf1kgSDRBQDVL5oBlRxhJ3tsKStI9msBmkWyFMDOSQzOW0mRNXENq5y3AxUQdVRD+jomNZxHXuAWCVfX3+1elVWfx626WsktnyDjFTa1dRuVahPAQSFAQe0WRWnppZ8UcnDjXCub0JRFSURPVmzpc1NbC6d1+YQ5wWvnn4HU/sPYO99D2D+zEm8+/ZZlUoi6ZXZTiSVgxfgAb0uGUZZ0/xKZVtLH2ThFzJR/N6Vc2jLwRdPCjKXADkxOoh6S9Zs+/04jDE03r2ka1y7/pcF+aZTcBfLGJK9mJYDaX0khVKo+98eYfWiX3XHR5g8LDkYNm50kU3ndX6Pp2XXTvubUZqu2R6eEXPTdIJTz44xNvDsDB4DFxGSyl7w/yofY11YrK67/l13l9Xt9UQDmRLKxmFx1Rw8zMWhJyLrYC0JDJ969kdw/M7btcDr2Q3OztO5GwvW9DJo2MYdaOAM6ihOEzMTw3jovruVhkFdo4uXrmmQYseRU/tty8rujbFkMym899GHTNtM/uLq1asoVWum4eAbFj5PWl5CST7nsUcfxoBA5666WHf032wLKqN1ff+kcVkvbODp9z9hzE+LRU2lesmg1Y60lSxfRQb7zHcbrHpa+36vMG7YoJYVb0rnTJ1pFPvsxz6Mr7/0CuZXt1T0r60KAuYd0C/Sb5sgaUwdTCfSTA7tGsDCcfo0A6KEtuovwUjE2NpYUxZ4wo1oQCRHj/OB5Z0qgislhOI61yWbqoKEIJ6A/PyQYxQt+M6dEBVDg0qt4SHYkgOUxFHORTMuUlkjnU3BC3Uwkh6At7Mjm3RROU478nyp0FCTdH5hbRtTI1lBUkX49BywZQaVMmZJoW1KDUz7L99YV/2t0eEkhrMZdfaOehxE7khWOYr8xIyZ/SR/MJ7SL2qnqRCi61qDEYMkApo4aIXMPKs+Enatu42jExB9WomeKr1Jj479twbNKpTUdxFQqgyllqkCwVEa4zrt6MFgpiJCSOYpDJjFwWxOEH8Vi+dP4eI7J9W1RyWWaw0J6GtaeJ+a24uRuTuQGZ/C1so8Vq9dQrm4I++jiuXr89jYKOKt7RXUJFCSQtJsyuGTgY4hqX6cH0KrsCwBVYI1ndyJdDMStOV9od5BSNYz2fKRqov5uI9K2PtvF7B6g8dN1Z9SMI/VCy1ZaFlFTIwdZOXSUru3iY3Anqm2BDh06Fl1B47g2NRGJ8i5yTpOj03Ur9sG3F0mN8eBDIIwQZBGpp6tW2kdg6ePZzotvEClUsjf75eH/smPfFjlMSiTa2bzJGCUq7i6uGypAY7h8Hg2uMrfl+VlP/W+B3FYUiUKSrEtfml+UYmpXTvFbxa3mcMjTH5CgtWR/XuhotuhAE6fu2jUQxNxk1FZYma7a06Thx+8V/+Qwc/h85ANuLK+hgrHNGBE8soSoNh1fOrxR0xw9bu3DB/bYRfHdgdtIDKZtOHw9J+ns/sdt+RwgL8bTHmth2b34Md+6FP46V/4JZUAZv1E5Xb4AZ5xOTKDzVCdMSJBVof5XM2YkKE6MEpr0dlAPaPbZdUpjD68p6mL6kvJQueJXqnLYVioI5s0KKtdacGVVBh2RrPGKQLZgFH5qIZV4VQEEjT3o4cYfSPjUePILGt0IjuEwvUb8rPqqO1so1TYwPLapmryh2JJFNnY8Kv687lpdSifz971tYCtIcQ3ApID2YSg66R+HwfZs/kcxqankc4Nwas3tZOWSOfk5ydUVlsF25zeuJT9lVxeDby78d238cqzEjH6Ph0btBS57jY8do8Fc1SZbzK0GrWpY3eSrj4RySa2N5U1z2cSJaNfDmGmpLHcoBowUJaZhNbS2hI2l2/q9IcTFhQl63XP1Bym9h0VhJVR5vve2x7AzOF7BMWWdAaxuLmC4voKrnznFRszPUGyYcTkMCkJSh0KDiK5JplWVK6d0lHxGCDv1WE6z/O2RqknDpyTSpHAVLGA1Ugb26ngXz1g3WqYqqMnehJ1UC1HMJCOaHRJ5zKy4E2dIGimjfVFkLRIThVP1063N+rh2AafKbYbJNC1ozSG2NO1m1qHfskbgX/LhrO1GIrps36k6MSxnCTP/hrQFOD7//6PYnJiXNu/sIRS1tLWNnewtrGtrVotpdkaGPd52w5ev18CUJwndL2oypQ3ltf7LrjGeDPQL37zOp5+6r2qQEqx/6ATw+kLlzQVZC0qpM68jpJRi1s7uP/4Mdx19AhlMk2qS2UKeW5Xrl5XHa+0HUsqVKv42Ic/gInxMa1TGBTlWfbmblvYd3AL/8zsDM+y0v1b6Q1uvwxvx4PsfI1nghYPpI+89zE8/82X8NxLb2Awl1PGNSE/nxP13pXVzsKxSvC6uhZgzT0cx3DfiPRMqhjQa+mwxc0LDJruIpnbnmO4eew28W3TPIR1wG6dSqIxNOT9ERVRnZVMd9YLCZ9bjlH88O20Q9cQwZQ7FrIOTOGug3/4sR9GSDbP+e11QWE7qBQ3sbS4gtzoJMYnZ7XNv766iOXlVWyXa4ISKDgZQTxo1q8qQvgGsR/YN4Wx8WHlxfHAzQxkMDg0qjwmv9pUdEp5F1IZAv3DgnyngByuZmC8v3YZDHFLWtifsmQgN80qoifFWn2gZaKZ2TsmpbYMkd2I2G8Lh1S1ISnX1NjakPVIh/EU0pMj6NK6XlASPRJD8aRBgPLcIxkJYiQ1S+A48+a3tfBflOcW4QC1oCu9b1rYUQ67RUOLul5YRtJFAUlyKIcEXUV1vZNFPrGWxlRsFM5QTpaGBFA6ukvAB6knvGhBWM6OZBIDCTjFhpzvUUxudPSg2Ew4f/WA1TNQbKtcCyWQ6QUX1xtISypEAb6t7S3Nw50ezLWbShUVYAKU2zdZ9O3nen2p4/5m4wtl2sUOXAj9jenCCPj5fVjs9MdB+qjDN59fbVRw/NhRfOSDTxnad9eoOPiqAx7AjYVFFEtl2z2zSI6Dwo6r6eJoPosH7r5LB2x5N1uFHWzI/TFYd21vzNDKHJUpzkuguu/uOw1dlXLNnSYWF1f7Iy7apg4ZhdGq/PtPfOSDGB0bRadasyleV39989R5M7lP15hmQzljzzz9Qb0HQ/jz+jwpWPrGLQw525/YLcL7rtt/Vo5NO/r63o6zewbo53W1DkKqwzMffBJ/9NLLRrolYizpiT4EXxorM8e38jMB0xXm7wNufyqIXSnWEcPW9AFWhtntHTu+UWRtN43VPTc500Jy1CrbJWRGMoqY6tuCNnMBqkSbupsF4XQV4s8OWskbmizEkmHt5rGD9uz3fRJBQQxX3npJ6zUbywvYlINi7uAR5IaGVBWB9cyYII3ZqWk1Jbl886aggyIy8Zgqa8RkcyXk8wYG8sgNZs06khsckHSTYzEcf2GJIxKKqfR3hCqfXaPU6tvGhtkPrrXJte1adh4Y1Dw7dmYPnFvsX21mcUsX2P6/d4i7vYfo2aHOPoL2Tf2L9RpBR6yltQRp0b2ao3Ch9KAqM9D7MCiBh5ysaNJRSRuWRfJ75ECKpPDOiT80NVVJ+br1lkqao9lVr1CWdkyaG1Sa0pCs/VhOYkFADt2YK2vawz3puxEZm6QorFKC3IxkGQMxnkomOA/IVQblAC5VgLE8sF6EU25iVFB8PSd7JBf9y+lh9Vyee9QBOvnWy74srpRRpgwYjzhaStGBwwztysJSSK1lc6Ph7hvtKm6xltVkhwrrd6zDr+EgwbaoGcjY/evNC2pxErswQrkqOorj6SbxeujCM0J9VGJ85qMfwsykIJN6wwbArh0dcfDmmQuoU1lBOzGu6TzaayKZ88jhA5iaGBPY3NAXefnaAnaKNCcImh/mOH1D14q8/McffgAH9+2BX68iKH+9srSMxdVVrc+ECMlDQU2dtwplHNu/D5/48IfsGE5LCaOUuSmurOCNk2d144cFyRTLFfz1Tz6NvXv2KIlVU2M7gtQDnEzDnJ5edi/NUHlfUzux/rLWF8IUd9H7+pOFeMsvq0sQffieu/CRRx5Tu3t2HYlyul3r9E0tpUCwz7TvqYLq27VD175vZju1ZuiYcSxYprxaWHWNoF/Syk4zrWBnkhSEZrVBjIC0oJiumYbWazBaUAmVs44EI3Zd2VnCrhnDYoqak7U5m0jhyssvYGtrG+X1DSwuLEu6NqAUjdX5GyhsrCgjPkjvQKeBjeKaIA4HsyN5TI0PYXw0p9I8IyNjEpwG5Jqqet9ZQZzJgUEjlCeBJxpOqHmuujX5RnNdib1W3sbUcgMmSOmXa5jX6j2JW97Dre/E7VNVHBuYHKMDdOvZdEthoFcccHc7wza9pDRMdHBEfQdrErg7lR3tIAZTAzbwGVRjdM/MgTB54BAm5w7h0rnLqDU8veyWZCiNZgl1+X46C9X5VS4hMTiBdD4pr6ij74SjVnPxAzh86H74sZASf11Byx6HwRMSrBJR+XNZ7fEQ/Ck5BGKyjmgpx+4ws5HFGnJLrb88wvJtjYjBiqMoJ06cULda1i90xIJzgrT4rlR2SYTO7uHv+ubl9EwjdLM5fj9kMp3w/ZCtc/TIViadMOqS9ozhZ1sxfqfda52YTp4xa3RUh12VSAUl7JmawOPvud+K+LWMaQYLarJRqFT6rTff2X33NrXgG1YpWLmOh+67RzZPUgdSWfB99e1TOmo0EI8b2WA6qrhBM68nn0H5FrJ9m7IoOGrxtW++orUSjikw5YnJV10C9Y5A6V/80b+NAwf36VwjdbXpGefIi3zz3XO4sbRi/q3A8+nJcXz4yfdpx7HbtgiRReeuZ4uu/i0Uh10FWNhRHc8W1L9rhff5EP5uPcTOZEIJvMYeaiCVxLMfegLftMRX2kwFukZnqav68gHbZDHIqlf/sQC5/6PUmIIsaSsMqAcVGw9dT4fR6UHJZ9m2nWUidTY8ogKtH37vE/j2t19DIp7QFZvOMYVpYSQdwc0i+iKN/fXEw4bpWTaGqqR6VJWtSjrEQeSlrRIiiQFBVFvqNUn0RtMKWqFtysYLBD1M5qnemVTUxvtjcGTs395YU9/J1EBaZ+tIBCWbmxroRp3CaJz1DHhNWhawz9fblf3x3b6qRqCXwu22Ac267yGvHhT1nVsaXp7WxZxbC1/o1S0di658K8K4y8lT1n12SP+sLmk2i//8M49kaBakee1tM6tKXwLu4YN3vQdFCeqX3n4HCUGUab4nQdIkV9NwNTcygn0PPI57J/bg2NpNvHr+ZdzcuYbh5Aye3vtReX8xJT0HJDg5EpwacVk3wToy0bRpnrWNyaqXTbLuAVeCmSMHEUpNDGy00bywg/V9A/relcD8F00HGbBOnz6NF198UQlwnCOklbbnNyWgBRS9sNnt9PeDbeAzXrmeOVmtyYFCTZOB6CQ+ZSu4WCnzYRjVZgSEZp5uzuT6WupSaRNZCIGupoGq3GAq3/YdmUXDetWxo4ewRxBSQwIpi+Za6ObsYzyCN945i7OXr6llWB+lqymUq+MzQ7JQH3vgPu1U0qOt0fLxzbdOWjE/szhDQTMqUi6W8Mh9d+Gxh+5FV5AZiWmeoLLPP/+i8soScprFqEQq13f15hI+9f0fx7PPfESn4LsSSOmlp+2tbhhf+cZLSuTMpjOCkIv4yb/3o5idnVY6hJI1laVuUWiPzuDZ3eDZYXBd5B2ta/bRao/U2V/ou7VAPSRMN8QIAHaNPnxDNuF77roTj0qae+KNd4yhJ1GEfeZd7aaagOVbQUJTLoAeHLux0UNvYMgUwZy+3TxrnupOI4detdLSdJwIiBpSy4srGP/QEHLZAYzKe7y5tWDcvh3al3Xw6FgY65Ug1upUfA0Z5jfHfCStiAQiggyqcjCVNRVa3ViX9etgW54p08Oy/NsCpxrkejKS9uWH0pgYHkIyFdfiPvle7AKytrgt35vJ5pAazKhsdiKRZmlKC/sqYWwnv33/lqkMBNAvMFkljR7j5NagBasVZti8tpvbw7s2IPl2hlNrWfzV6/bCoKFBWJDVe63KweufGDY/ZyYgB0FYUluKK9aLBUTjhh4DCcSm5thRxMk2q9c1nKvbH3lS38X8lWtYXi+rGOH62gr2z85gdGafPIuY1qsOj05hT+ZjuL54HclWFnudadkDRi3YychzonpHZEuet8QNOThaqwVgTQBOtaOqEE4mpVMs2kUu1xE4Mo5ExtdpFPqK/oUCVi8dpB3Ul770Jayurhr3X9d4yLXbrjFBYPdNF9TufnDtqWGmQWzEt84rnnWxIP9IzSMi4d7b6aMBztP1LM9ZfA2qIiYU/hs5Zd+mJebP/P7MnIdjB/ZKWuWhuF00P7trB3mTMfy/z59AYaeEWDTaF/6z34xtCXAf/+CTuOPQATRkcbuSsl5cuIF3L1xVHadevYXF5zb1sSWQP/PxD0kKMYR6YUf1iC5euoS3Tp/TVDAWNb571+YX8J57juNf/k8/JZswJ3C6oMVsn+RWWVDr8/P4yktv6vdUaxXcJQH3b3z/R5U6QAFBqKW8ec46AWDaFEYaWZGRSRXbXbN7urZmp+M+MJ0nuL16rWFwuvZ5cYM6vZRcN0IATaeOgXwWD993J7784quGLc7goyM5ZuJAu+q0rqeNlCX/aRnANXOLRuzR1+aEa2rB/XXB4EeFjpI8755cTUfNP6gAYExYK4WSiv1FgzGMZgbR8RvIhbNwm1HsG41jKlBEpVuTQES0Fca5m0GU5UcvLN1A8M47NPjvyDuJxpN4kIoUsiE35J0ub1ZkHQVxaDaP4VwWqdSAlhgajaoeCuq+3KqrpHcmk0VG0sC4IJJkKqO0jmDYcKA8z9/txDK9Unyzi3wMvrVkZB1F8vvNPU5V9FBRoN9GcnfRfi/eWXcizzedUFfrtd1bmii9oGVnOn1roNGDaL2M0ZEDJiZBKzuI5vaaEQGUw9KvlBEbHNMAydlELS/QQISGwKEg9hy9E1MHbtMDn3OHrz3/ZQEE8sxXFuX9FeXZ5JUqQcrEdDwmn7ujDZoIJAuLcWgzrF/L2xcwvpxHs7CtYn+c+dSGWrmBwHoRrgCJTj4DdzgNtyrPKy5rINC1GcSfM2AphcGiq69+9auKsHp1CyKsWqMjkN7YBvGFuxZh9dnW/i5RwbGMBE9rW7cWhaEPI6gdOkNOVP9Bdt6ooy5BiyMRZlRj9+R2nd00qJfDq+CdnJAJQX53zM3qwCmn7/m5lFeJyudcunQVz7/0al+fPABbRKfXm6RrNDD9wac/iHQkiOLqppwiYXzmC89jc7ug6SDRHus3HQrItZq47cA+PPXow8aMVRZBTKDzb37+y1jb2sZQJi2fF8L6xpZKi/ziv/in2Ld/Dg0JVkpRaNAUs45QJolf/s3P4ZogsKQEONIa/vGP/xj27plSbfZutykLqKXwXT0DjQeX0iGod07dcLUj7xojCS2Oq/RJV41EzUlti+5Mz7R7S0VLs9/U8dkxSYw6F5HgKIu+Vo3g4buOY2ZsWK6pZTpXva4k14XT1oDPzaZNE039ORAc6E9IKQudonKeMbSgtAuzHqaIntNV5rqHnvSMmTVkVyksv3/u6ydwW2oEx+W6/u7jP4ogdaUygnSmB1Hz69hpF7FVWcX1+DlcLpzBwIEO9gw+Iu+9hHppDSma0Y5MarG5Ku+GjkdVQb+trgSrfcMYH85rSqcWW+x+B4Oqqc56Fc0+aHg7IAEtLgghkczK+/bkQIoqbcEJmGfQdU3tiN1RzzGhh0GF7qxc6xQeNJMC8t8Bq6jR6/A5hv5xaz2xH2hgdcjYZfQNqdS2qiy+6vZ1l6hJpoeQY4JaH2X1EZtnuu+UwU6ltDxS21zTw9L3mtokiKRzGiGbpS24sk9Mg8UeL/Kz6UXAGuCBY0fx+le/jo1IQK3D6gJkoqtriCQTSsINKlG8gIg3rHfKM2q9uYryygpysUPoRgzp25OARWlwNqjciiDtUhUB+fJnR9QWMHqzhNFtH5WUXOtg8s8OWL1iO/+3sLCAF154QTtFvTayIh+yU+WNseCms4Ouawuu/ndT7B1ba3HMCu7aeR3TAjUvXB1oyZJvmRoAme6sVZFEqTNcFCMje9cxKaLOznn+LdLAVv+q08TU6Bj2T4ygIZu9Tflh1wxrJ4dz+KJsgiVBiTQsCNgivmeVJDhW8cCdR3D3ob3YXl7SCfhOPYQvfut1w8dh14dChFw0Dp1ZGnjyicewZ3IcjUJRx4C2BTJ/8cSrSj6lfhIVRLfKZfzOr/+qsuabEqy6Ast92Tye3FtaTpaT757FZ798AhH5HtIYfvDjT+PDTz4uG6emzQM69XLWUet9XEiaS7c15XRahpvVptejlVPms1FTsFZX0UwoYorwnFvTvWLVQ1XHy++qvZUqYahXoqenuRJk5XpmBDk+et9xub4XkBsYUNQbdaOasru+2Qjqvk0+Fm7tAPfmoO16cCx9wpxodj6xrcQH1ufIkQupZlhbi7dEWp1SA7PJJEbdNJIXCgh1ijRYRHc2i9j77kRiaBQTEwdxpHk/1tZv4OSp5xEPC6rdM4hzr7yBdJ6D+C1B2VsoyMm+urmNG+t1jI5lkE/HdCC90a3rYZuUIBTSjdrVNU4PwoykoxFJGVOZHLxmU2u30VhSNcp8a6KiZQrHICyqShjOsNWw19JaSImuWsNjR5yHp9W4h03Vu2pfaNAT94jHWqpnmymu3z/ZTQfc0m88I7vk2j2lH8V/GzQw18Qu1zY7jHiAbyua4UxWXaGL1y8q6Rrlbf3vYDQlWcUm2gxagiipjMuaGv0YuO6pFz88OY3sYB7Xltcw6Q1gu0DVj5gqfxCZs7mUGlhC3E0AKeON+MbV53HP/icQyu2FIwd0oG5MRdhQ6Rbl0BbE620L4qtK4LqyiPBoTtZsDIMrLeSuA6vBa392wCJScW3Hj+hqQ3J58m44GtFq1VWvKa4kQsNH4gJzLHu6x7LuSfh6t2g39TTCe50PoxcKnVuiRpIl/5rxHPmzarWOtJwKbPMzzXGsKgFfgJE42UW9hn9k0pV/9+nPYWu7hKJAXjJx6RVIn7hz8xt6XUE7yKt6nJ7hgMXDIRwUSPrc5z+Lna0ixgcSOLVSwI3F5VvSR6PCGZRFcejoYfzwMx9XDa22wGkSB3/sF35VcvlljAxklBl9U5DW//Nv/zWe/cRHJHhWtY3vt8k1qiMmQYMNgJ//td/SzRSR63pIEM3P/cT/oBr3VdWRpxux/EpJEXkWO1sbKBbLRttJ7qtcrGC7WkZZDTaMWUWjYwIbBdbUtCoQUY5XXd5psVzVKYNE1Dj8ZK0nYyIUViQ1PTyodQvOp9UcqNPykw/cjd9/4UVN0/g+dTZQRze6iix6zHY1HdXzqdunS/A6vKAx1VTpYltLU/suFuopREggoQ7ZnuqkdXX2UK5XAvQLa1fRkk3x5EoE4XJd2+SZdwcQlj/zn30QblQ2SjKCieRBjObGsbZ8AdcXTqKwtqybrSvPe3tzEzdWi9iWQ2vv1BDGR9Kqwc71TQIo1WO54+le3ZB3QyXNsfExLQEk04KsdHTKjPtwDyiybVtEYyWkWSYg6tKULWTY6qZe5RsEZLu5DEw8RgKeDVqBXpLg7gox9tkqpq6o2Jffb7vT/u6PNnVV1ipdk04SvWiDiql48Ba1WHVg6pVNJGglM0iOz2Dz4ilTY64IKhoYRSA2gNrOGoLqmUAJqIoZV1OKUVW/b1qyhOVF8tcKWhMmPSgYKGhZZ1QOtXptB83cFjKhWfzu27+FbX8BT8/+jAQoyqdH4dA0iGNdXA/kbqXC6HJsb7VrTDi2diTrUANMbKCEypHhPx/C4sK9cOEC3nrrLX0pvNusXNDGlumq8IR2HaN7pDSDXqu9T4SD7VTtoi2/p8t0y6iPkde1XKugawwkYLzvGhwyFhgfDse0bsa2dddyUcyoideX5YCOgwTkARbxxRdfM/6EnmFU8xpbypb2kKStmN1kXeWGQT93ciiNSKuK1996B2XJremK8o0bW0p4TYRd5Zxwk0ZkgxcEvv7UUw9jJp+SfLwqG97Fj/8vv4I/OPESMrGYBvbra+v4Vz/3P+IHPv59unEYdNiN8QQtxUjEk8X/0//7r+H5l19XxDI8NoJf+vmfxZEDc4IKtuW028b20nVUJB1lG37h+g1s7RR1ZrMsJ1Wl0ca6vGCmOb7SP3wlOXJ/NHyjJUbnHP57x1Y+iMLMgLirG4z1K8/+dywaxNTwCB4+sh9P3XsHRmJRNCSl3j8xisn8IG4yRRYkwuK227Ga87QIC5janjoW8Y37BuX1FGEdOxCtfRM2ByRFVHY0rajYLZIN00Jb5zN15Iffx+cjKcZSvYSzDQeFyjI61Yqgbh+lsKDoqryHUyvwH5s16RnXYDaO8dQx5LOjGItN4cS3fh8nr7+Gpa2mNoiPzE1hND+gDRPTzXZ1dIX+jhxm70jqTceeyalJnReMx2Mq/9ss1ZGiPDGCmsKY7KNt+WYBPbAptKfdN5YZOkFFFkwxScwl8jA287aTzdDhBvv1LPNB3d2Bdd88p97gszapPEME1qTRNYmlazecx8/3PVuC8a0TpKPdZM1e+mWuXkg0ACKWH0F6Yhbr599BXDKTcFIOgkRa0FUCtcIaopJ+a51aDkrlULZctf0amprC9J5pXLl4BU0KCagSRxO5FL07WyjHi4ina/iDs7+JP7r+JfzDZ35WkF9E3rsEfjrXtHuD83I91DwbShitM6byWzUJ5rIWtpuojKZRephyysHvHbB69lpc3L/9278tcLqgD503uXdur6QtN22dKqQOwo7adBlGs9svt95KFXH6qMuMgfiWdmJOC4OYPGUFK0nY7ykveBpIKoJGUgga4mXHVdE/n0XBW7r0Tj8oBgQpRdSRl4oHzWYX5hl1URaUFaMWu2/QXae3mOT3tIQflRTgppzcbAKk5We8uVTAmgSuhAQgdvp4ytHKiQHi8XuO4MkDY9i6fBoXN2r4xd/6Xbx+8owiF0LkGwxW/+Rn8JN/9++oxE5DgppDvW5Bc6l4HCVBRj/+y7+C//Cfv6RXPTUxgV/7xZ/Hg3cfVzkPOhGvXjqDnZVlQVWbuDl/Q9BmAy3ZZFvFKnbkGhhITW1OTjkJxrKHNV3tWoItAxETNTO64mjRN+CYyrfWErt+j82h77YkC/PklWs4fW0eXz91Fp968lF86JH7kU0kNDW8cGNR7i8h/z6kOumhUFzTdN8OrBvFDVt0d8177FFa+gdZj+RL4ihTsEhX9cfUeafpK3E0zmkBkm8lYPEgXOhWsCGfudq6jj2J/Zi8+zEE79oP//QC/Hun4GRCugk07ZQfHB4axJ7oPfj+eEZFJudXvoq9s+MqgayD3uT+uUbLjBy9qqyvcCKita6xwWEln4bJA8sMoLS2iZCl3VCLitLKvrcrJKkpOIO/dSfX1IkTABKMu5S7QUwFD7t87GH5ty35CpthcdfysZyuVWx1bdnENfplWnf0tLFqEZZhwGsNt5eOwyAvppGa9tt33Q9+BMAMeuQ+erfyvEzGkxqbQX1jDYX5i2rzFR+ZFFSdR53D0cUdSR8HVBiwo8YTQTQE7UeTWcwdO4TF5QWcX9xGWtLBvNwrlU9G5O9qwRY+O/+7eM09iXQ2jL0jd8JvNNQzE7ZppjZ+XROI9XJoYsMZxJCH5lAYtf1j6M4N92PI9wxYhOfUGnr99dfxne98x9ggVWuSUiWwZ88enL0opw7nu2ohW1MK9BRg+nly76TQF+BYck4PCHl+vwDcC1wmRzc5PTWACB9V04r60NWqBlCmCQRyXcsH6hE+OTytdx00eHf/3hnMTY6jVKvpyVkSNHTm+k1jYOoG+rW5AOcabXdqNJ/RFvumbFr++XqlgRs7dURlEWeYDgYNzOemPzQxjr/38DEsXbuGf/cHL+ALb5zBuiCirLw4wuKFtQ386Kd+AD/6tz6lXoU02wxYSR0W1F968yR++Tc/g1e/cwqP338PnnzsYe1MHti7B1VJYUnFKK8v6awW57uK25tGqE5SkkqZ7OQg8pIKsa63JUGMp1rXM/NpYeuC7dlUxVUVS/Mrh3GZuusCiJDQGukZNwuirGCnsqMpOOVtzl9bxK/+3peUFPnJ978X40N5RSDsALlkurdbJlgpamtol4jowfNMHcd0DX2Lrz275Nw+F1trYERRnTCaLCegsWtk0ZsTVIJqANto4rONixjBGgZioxh69C742SCaEkywuAbkJw03zXbIFN1JwEjmJvDMe/+aBKh1LNfXNW3vmL2i17kj91pu1tX4NBYioz2LZCqFjhxY+T1TEuzqhiYhKSdrfPxzmxpYPqFh6ygrvdU2HpGsAzJwhQJK0AxRqkiyg5BnUl4/bHlTGqCCWlRnvqx181s66bAdcGpiKS2LrlO29qXjPj2d/q55z44NAl12AaxLuuk2BjXiUa0h0AN0NlBqsJRrTU/vw87yPLYWbiI+PI7owCBi1QKKK9fgxprqfVjaqBhPgE4RQYkHmcFBHLv3LlxdO4GL6wUMSbZ1NJVBKd3GF9vfwHV3CY5kKEM5ST2DcgDJmmYdUBsSnsme1PlJ79FFix39o4Nov2cW3Uzsu2rgf2aXsBewPvOZz2gUNCqUNQwNDWFK4GAsJZC61kKtZjqDDCS6FLsGmuuXDSi7ox+99+D3KSLaoerPQZnEXSV1lcAZUAIjr7ShSpF1U0AOmSHqriUgGmZ9x8yrtc3mePw99+Khu+6UzV/Vov2nv/QVVFkslqDX13MiinSNtdj4aB5jw3mV0I2FOrKQq7iyXdXNkhV0pRQLOcEz8uImBhM4PjeDr5y6JCjkCq6vFvSUTcbDKErKMhHP45f+2c/i2Y8+rUiPJzI9Gd8+fRYV+fuyPMdyuYoffuYT+Nf/7J9ifGwcA9m0vjg613TkpVJhgt/HPKZplRw4+kFz1HTaQVaQR1NW8fJOBY2AoIFEWFLWFhKkW6h1u6snLeVN0umMfKXkZwyofRV1lpLUCGc9RoemXZX4bcg9M1iSnc+xpeuLS1he2cC//+Lz2CMp0r6JEaOEQepByEhc0yUoGIqi1aIWlZFe9q1Jbjfo2AkEazvm+P32v2MHu/k7ouZIO4RaT4mWdUVrRsIaJg9D+gR+GxX8g/w9OHrkfkkjWjqHBhJv10sqiKdpodbYDHIkX48DvunUGO6avh9nXvuMIIG4pHwSGmtNfQ9MB/NyUGXk+STk70hfaMhnDo6Oa11rbXlVuXrskLFutSFId4fIgyl4j5cp18sgRw4X90JYNa+i6kLeY6bTM9HjWEysa4rg7IQ6MQ0kWkqxnXHPavNqnmLHxVjHUfRkBB+MHhzb/V2jq9+rdVk/NwsOAn35cF/Wg9MKaGra3YUStmtsx8vkHgem5rB08hUUJWhl9+xDvCzPorClMspME0lx6Fg/BXIImQYPjU5gr6yLElbRrsj6laX3UvAiivEa4pLqdYNdTKf3Il6NoEPCqs7NEmmG7Xib7Wb6ESy1S+hODNpr8v+UNtb3DFh86PPz84qwZgRRrcsiZijgwCeDVjAgmz3moGx1kDjR31Unm56iW1844Lvm2tQ9xXb0AhrYPCuoYQa4u5b4SGF/9Rkkk1k9Ctta5GcNi3UE33b1tNtlBVJcO7bC0uJeCapHD+zXiPi5L/4xTrx2UlUBaIzQ9U27P0HVS3nB9913HB947EHUJLgtSfp1+tI1XL+xJJvGRTYZl3S0IqeCg/sOzqLttTSI/t4rb+PG8mb/eZHusH9uD57+4FP46AeewqF9c5L6eRJka5oOsmN4aO+sKgJwIcfk35MxbewDfd0AHRUD7OgmJXphcZePM0xdJy6uUFuDQYzOynLfa4UiQnJ92URQT2dSAWLRmH4uzTh5yAwPDyOXH1TRujh95ZSyYAfHPVOU59CuqmJ4RtKn2WihXClicXEZJ8+cwxe+8TL+zef+AI/ddQyZZEJTdDPOYtITUi74gS3VBHP7cje8/26v0WK5RRq3AnZA1zW1S+ppceg5HKV9eK3vdh1lx7TFRkwYEbm31XYZq3FBLAMj2nmNXliHT/ImkU+RmyqhXDXfEt/V/VqQW9APYjg+iKo8tFJ5W9EH+a2xGNO/AcNml7WWHx2R1KektlzUsKoVS+jIoRwORHH53HksLS0Kui0ZHXkexjbAqqo9DYHlOUYl+Ea19hbQRhG9/fJjIzpsDT+hiEoNOiRWdRRYRS0KdvoItKvCfrKOPVNj60nLeLZG25/TtZpoppnl2YkQTw9vTzuRpvveVf2soB20tnOljrtLLDWnBGKyXqLJAaxduoD0xB6EU3kkh0ooby8bbpqgJ3oZks9HIUqKXsbiIWSH5BkWtrEmwehsrIhGqIEkSeBuE7lgGveHHkPgalGuq63KpAzSXloOgDDrfl2tT5XYxU8mFTH+1yStvmfAYvpARjvrCdNT07h04ZIGg9HRUYHNA9r9IgLqcZKYW7OG5brd3cKV6+wOM1s2tubQpqzRD1y68Hti9HYImlWYYDCikV87FK6vfKxwIGRcV9iFaTmGNxS0LxVWNSBgbOWpy/2Vb70iqden1SqK0sWrW1tG4pnWRSkHd991B/7Bf/e3MTYyglffeht/9MpbePXUBdQbbVAroVBs4oPvewTPfN9TmMiltcC8slXA8lZR2/vsFGVkwR86chgH9u3DqCxOppU0CeDm0RZ519OANSQLggqrfHIs/qs8Ta8xYYezu+pY09ZnF5SUL5YdloM0iIh8TlSCWLJja1ItH4cn5uBSVlc2cyYzIBs+rsiH1mUMXJQTofywWsMH3P5palLyruWmmZ+tjP6OGVtivSQnmy1/+BCOSor6yD3H8ZVvvoTLCytIyHOjhLLOdsoSCunmb2kHSqWrTcndzHP6Jije2lxxbddYu8dafwkqvcKL8v7COivISQNuuIQbViv0npkrO7TPlc7j48FHEVjZROvMJQT2TkpK2UW5UNB6F5ry7Nq+UevsWPMMSefrbk35P+2yBIIIvQJjiqyoL8bAQ0TFNDzKjqEcJgyiRUHOFXnXC+sb2JQDm4X6TCqpdBjDifI1uNPIlO+z26qh1nLlZxkuFNEY0/PolfPI5fIYHBzGyJ69yO3djy5pDi2+k6Dho+nh1NHn4VjfLwZ7tXu3g9EatwLo/16pCzrW1db5WOjcZkdHiUB7OitnJHBPTVy7CNoR0qAGOjO/2zE/T9eG3J8gpu03X8bWtcvIzcwhmsrqgVQrbqhDO9UaWIttNapmRlB+2NCgBLb5JVx2JSBRZSQi6yIaxN7IFB53H8D4eQn+kXlT8iHBOB+RTCGJNkml5AmO5FEIOX+aCvUXmSXkN549e1ZSibSmMfW6ucAUT2qSJ1l4LtBCO6b2Stq99RxLkOvsSpj4PVk5Z5ePBa8/ttMXDbBF8P4YJ3W3Oq2+DrjOM7a6aIXaWrdhB8fIdAQMYrCEOS5ubtS0LMQXXnkNP/d//joW1zcVRWwJtP2xv/mDmBmfwJe//gLOX72CS/ML+D/+r9/B1Zs3ceHytb642tG5WRwWlPTBJ9+L+++8A/mBlGnhy98d0wJr0P582OHvsN5jlxrbqu+1O+OnxX3qS/TmzNC18B/9TqianXpGskapG3KPgWgCKYHpibE9RvNLtbCgcrrBUMQoWDJsqCFr0A7bev3PVWInr8c1hoABeFZKOGgdoX1l2sOqlmoBtNXqLxzHUBIxNTKI//6Zj+H5l1/D75/4lqGCUE0iYEX7uOH8jm2xe7sjKvB2ob3n90euzAXuzt6zSB0VFNMKNRWlNJotNARR19BEWOJP2elqd5abY6FTxRc338WPnwvhUuEmjozdjoAcKvX1BVSCdUwkpuU+6iqRTPTODR6QjXSzsYB23FEnpwytqwRZRTl0K9eUHRpTDmBEUm56JTKMdmRDbsqaqBWq+jQP3nZMjRyGpvcoatIJC9ZXuTcEjRY3N7G1sojtzXWVI/Z8WMVcY8RSkdSKBezy2k2Mrl7HzENPmg4ia4DKXYSlWHq7GZ6tRfp+DxD5MI/ZUneolS/BhC5IlCZqkn7ATKRcRGFzQ80raLyh2YwcZpFMTrllzXoTkTgP7Lh8DRikr+7lJUWKEdnjqxdPI5bPC/qRAJ7MayrYqu0gnsnKz6lqBuBrQ6yLofFhBE+TDVrWgJuohnC3N4mHmkeRFlS5E1pGJ16HL+8kEg2qd6PflHttSOYylMVquIN20Dq8S9BXQUdBuPgT3oXfM2CxyH3p0iUNTmR/e9pFi2EgN6C1rUjYRdEzDFhXrbluhao2TbeuxGaXeVZQ0wjvuZbL1MsVu30ZjV5b1swdUmY3oLNNRomUbW+1Q+qYTgfRRYSpnV/Vegxf7h5BgX/8jVfwBye+iUK5qp+ZlNThJ/7mM3j2w9+nhecnHjiGKzck5X37DC4uLGJUEMrRDzyJIwfncFhSt5nJSeTTGWU4M1UrbW/bgVXD3WFNxVEel6szVzSfMKqbrlVPMOgPtrPa70F43f5IHzetEkDtSAxPu47nqFmH1vk4VAujJ8ZUkdLTdBiiNro2LBgY2eWqVQyRF6bDxNIqn22ga4xp+8/W71msBVXPPmBrHHrq9tyyW3acx7Pa7fKMadPOgeChdMIK9wV0A3VV4TVo5JBbfr+7vCvB2JcXtGNZttgc2J29a3km5WOtkMiFyLdWNxZrBa+GEcG5zW4DbVvYFuyFb108iUdWOhiamMJOs6RqlWMbSZwqncP61BL25g4h0ZGUoyYoVoJdubKOdyqSIYQdJAaSyA6k1RaMDYK0bEB9FnzW5BfK86JLT2FlW2XAR6emMDI1I4FqVg7JpHm/fk/iRtLWRBqZ/Ij8m71oHz2Ona01bNy8hsLGqqASSgi3tEmToQszu2xy/ZXlBZTmLyJyx/0a6DvUf6eiq03vtPOotJCApe/0xqh7ZFwj5UPnJw4hlyRQLp15B6uSsha2y0p74fA/nbb1iFXNsqChlJCG0u0YhdcE5XPiGB0fxVFJ92f279WySSo/iptn3kZd0jxX0FI4Jkg/PWyoEbWyxAQBMaUdu2Z9DAioGRoeRnhtDdk9KS1pnCyuIVhwcZszicHIkNJ4tHsp8cShtmVJDtvJARSno6g1CyhvXJdryiDClLnd1fnB8Mi4XvufK2BReZIWWIODg7hy+bKuNUJiphh6oruwqoyu+VCl9weUqa4SuHpy2vQP/RKGPRxcmzq76LFJrJBvX5Vxl17BIOCZoCj/pxRNgLUcEt9CptVM0qMOuFNAXyJzsVrD7371hLaqiX7unJvB3//+p3DXgf3YuHZOR2wysQjGZMM9MZXFJ47OgD5UNCxI53MIyAvS01NOzsJWs69tpNvXNQRBI1zH+w2pAzFttznnyD8LWI1uz07ju87uoKvfuykYkwazcU3A0s5n17R6iaZIWaBcSoupp6AO/rei/YCVHNFh5bYgUa8nf2gHj0m4bSkxtaO6811t+de7HaVT8NpZj2adUh14HHMvyphjENJU1tegzE3MIn5TbmFtY1PZybBdYTpkc2jdjigqAvX9XdHYW0VPTOevaxegeQ4dv2voD56ZNFBNKVlfJi2U+2IazP+WjdntQXYJjuvVIp5rnsc/fvx92CHlIBREvijvOb8X37l8Cp9NfRkTY9OYdPZgsDaKhaW3cLW7ru8ok01o6sh1NJAbVcs0FqrdWEDnBlkrjQYSiqxGJ6dlE+9XVNJtNBSd3eL38V3Kn9qhZLctN4ysBDASfRVxrQiyq0tQ5WxdPKgolxI6jeV5dA/cCTcRMQvXMfOB2ldVJxvDy4JrUsRu19b8/K49UIxE9s7iNbz7pd9HoVDEDikvquZhPBRUiTxg0r+ONQZm8SRi63uVaglF+f3Stat45/U3MTI+hgceeQ+O3H1M0eb69SsY3n8AtZ1NJCSwJ/xh1OSQjfld7bzThi5MFQ25/oN7p3Bq+xpi2Siuv7OFmiCKNw8v40p9C6PFFOY6E9ibGkc35qEed9EckmvPSIBdJlrLIC9IOT0wbvTqe3vlT6SHf2bA4iIbGRnBmTNnNNqwUEzpD6YDLfpeNn1t2ZvIH7C0BTtq49yiCuDgu1I9Mm//5LC6b+VaeuJ7vUaBtoglFQyHbUGya/wLO67VZ2QNjcPFnPan5Ko8vBsrq6pj9PDhORyfHMSxkSzSpQ28/KXz2NwqSSpR0oWxNxPDfKWN/YM57BVYS9doOd4Rls3IIVfaf5OD4sipT3nXYNiQQTsMVk5IUxkNUBKwAuR2RYLGx521FD9gNby9XWXJW/gv+hx0l/v9l9OzLFOt+A4tnJq6KHSCXm1ZDPJqO2aKXe3NWkY72+sas9hmSRbu1pYE2gJKEnCrlYYOZ2/XO9iUf3ePPA+SIVPJmN5HPJVELk0Jj7BSJgIqRWxSGQYrdoZYA2M9sCAnt2clntV1SH7l9AAPDlI+yHMzxV/3FqXr3RlPnrwRJ7w7296bGvFNx5AcqKikBuzIMS1kV+t6fRPyFuQ5e6aQLKhetgqW5BC7urmAmXYc890S4kT9cp93546jtVLGH21/Dafmkgi2Atj0dmSj0euxq0aeDdns2YG83HtU1UE4C1thgb0DnSwYEhQWT6YxPDqiYz0V2n1R252EZZ0g8KyIJA+QkCJslgiYCXCdEiVGJJ2fnDsq6eeIBL9VNHc2EKbuVId+l5KtDA1q/bFrYKask7YG1F4zCb1CvGclpx17QPVqvfKM2/UdLL/1bVUTodJqJh1VY4xCXVBdx8zrhmJhXYdhQXjJAQk6kjVEEjGbtnuo7uygJOtlW1LIzYV5fOGzS7h09iKOHz+M6sY6IAG7ur0u+94QrWnGyppfIllVo4ugoCt6aE5JVjM7PYpLN24iK+szLtdXWeggczyMc/kdbKaArWwXgwPrchDMITM0gqnB92A2PIZiebcMsZuN/AUVR6ltxcDEAMVNw+DF35P53jcwtb5qpjPYsWJj/u5ksjJIrdGBZZXrKIRVmenagUyjEOBZoTPvloBlITC1wWnsGI6a1JCqBBE7yxUwB1FCkFW1UsPM6CDee+wgHts7iWFZBDdvLuA/v/imLCtPx37igsbSsjDOl+o4ODEq6WMS614IH/jA+3V6fvHydTm1VnD96hU0330Hw7KhJ2ZmMCBfvpwyvpwo6sbrGo15T6Wig7boH+4ntjrkylxDXX4sjuxPgRvJBEP2s6qrfVZ4VzeFJxvWU2TVMUO0bNN7ru1UdNQTkQO7lKptVcoobmxgY3FedZ+aDBhyr0QemxL02Bl8ZXkTsYgE4gUil46+t2sSxN4zOYRjM2Nw5fkF5d7C8YhJR1gnY8FePsOjCqhsrp1Kqf8OO7eI0zVpu0V+HC0UW+53Ccw5/i0TD3bDGbKwKborhSXh9rWgaNEVqAX6dVQ+3zbssHzACC3WAhI80ilccduYOziDjmyo814L++QtB3a2cFf+EXRKUfzhd/4Q7T0+VusF2RR1+MUWWmlP0hfKyEQ1taIQYFHQCe2zbtyYx6wcXEzFyOZ35Dnp8DwPjVpLka4eIs1mfxSpUG8iK6lVRL7C8SQSETkIZJ12Iw0EuV8kcCUmJV3MDQqqqQp6bcClS9DUnOEigoE5ZGSqfdeWRxxLvXb7TSylOfSUTPSwc7U+xYMrnZH3pqRZF2WBVVnVDgshmc4J4stpcMhNyBoeHkNYAgzrnybABvX5U5hv5fJFvPvNr2P+wilcevckihLAjt15WBF6W9DUztoCMiNT8BsdAS4ZBKcPY+36WS05cOYvKNd1ZGIfzl+Zx/SoICZBUqfmKwgtxLBV28bo3SHMHL8D+6cewu23fcLGDGB9fV3ezdpf3ZeQM2r5fF5PC00D+oHP6Wut94T6YDk1Cv0d3woqWqnegCWLeqZ2oZIyVtnQ6+wGsr7TigrDWd663/tsg6wCOkcYRLPdNP5sEiR5+pM0Whekcd+hWfzPP/ARrEkuj/UlvL26KulDGwV5sVcltz80JCmf2s93UJZ06dPfuYiJgQQ2agL3myXMjg0LLB7HfR9+ApurB/CV515UM9Ub165jolrGkKSUTnBMW+W+a+gcNL3QwVC5J0V9Op4RMFvUDoQFel0Y3d9d9JRBdktbjtWLMJrqHP5l8ZSLAW2vlwmxq6GQnkV5FkG5kGrbG1g4e1ptwGaOHsW+h+7DyMEjaqP+v/7bT2OxLk9MUrcd+fn3SWCKy/dvS2B/a21Hu3irOyWsbu3Ic0gikk7KCZjTsaUgUYKkjNyIRBNk+ZcqzV1bKkW+HeVi8bpapJzA3bWQpGyI1+lLAutYide1HULX6mL61gTX164cu6kx2lVFozYt7CgRs6M67RFzwMm6ISkzOZjF9uJNnF4pYUBSyWuNHYRzY8glMnAGSzg0sB9PNR/Dfzr5BbgpklxrYF7L9xtnaqbyzEGU5f59eV835tcUQR4/dgDtakvt6mvlEiryjOkGTVmauqRcmztlnNrYwZ5YRA/ZC5U6coKqjuXSssSDSCbjGB4exODoGEJeQu4tbLwIJYgE3KQiUSIUEko5quWQ6e+baXS6T5rT3LR+1BFH5xG9/mHn9EfSfEH/eaQkEIF0Ct0jtHMIKTUhkcsjkx9GTF1p4vJzOBokh6AcOm16GLBzSFQth1FEkFf6PkE7tx/D9ZPfwRtf/hKuX7mI6xevYc89dwvyTmFndVnBSiQ2oI2cqGQgU0fvR2HlilXn8DA7OIF9e2fgNisSsLp4WNLjZCiHP/7SpjzHZYyPv4uhwWEBQ6tISXr4J/0i/P8C9+rPHbAYqBiwqDDae1LkQfU+jKlg19ajHH9XukSFvxzze8eaQvhWnxo9GkiAqYSnTQDfytv6PQkSpTDcUgTBrjQQCYtcyITudE4mY5jzbEQETIcYGFKNMl68dAV/ePIc9mQEHaUTSMkPCssPPr1SUI4MdcbJsK3KZ2xKKsA06PNfexURWUxDAync9rUXlUi5Iqfqj/zCz6C4sIKzf/xVBK9cwYikUwHqdgvioLGAlhlYUmiZAXA/2Fb1CnWRgfWW892+gKSyjgO+Zdp7SgfoSR77aBn/Qgmw5HtRR6qnCRoImrFVX7la1HavobG1gqWLl5CU1PW+v/ZxxPYfwre+9QZef/5F7Ehq87kTryIUcHSOMhkN48zqlk72r5Yacuo18eTcBIaSEaxtF/HNxU25/gKe3COfnx2QRR5BWxaoqghwfpIDyj3unGUpc1NRdUK1ynqpndxks2UiMukdOvjrGDVSsvw5NB0JG+jVtZoypHeQTd/RlnwA0UBEGzvkdfGn8H3FQwaR8+dznIqDzc1UF+dDFRxPjsNp13F29TKODEwiIGvALW4jm84ieE2CcrqIzk4bk4JyyDnm2mXReWenquWjmgSzG1cXMDWeM8TiZk0pKTsSnOpy39vbJZxd2tIDM06Ja0G9Fbmue6YHMSzP6K0b69g/N4P9o3lcnF9CY2VJRf+m5/YhPTxiu7Dy3ilUxwONwYU1Fb9hhEnDPX16Tzl7bK5YJptBYT17HceuH/I1WDqQz8nsuwPRoQlNWZWDGE4qaZWlC56XTWXq12yNzGQ+RMPqMB2NKydQyx0BQ32ZOXgIqUwc73zjBC6+8x1BXlcwd/cdWJ+/ghXWtGb2IxIfkGBe1mc4OH5Y3g+J0RTnq+LeiaPYLK/g4Ng40mFJtdsOMtkLuH66iBOpyxgdzCEWnsY9d/yg4dtZcdC/MsIi1yoncJKKDVpklw/nKVoXZMKARIZ7V1IiVxZft9O2xXKvjxhIJFXFh47ZcHwJLAQG2PmwNt2mGNuxDrhu3+lFX2jHdmI8S5BzTDAjkZR1FdYewpLKtfyWdphYKSKr/Y1TZ7G5vY3xVAxvr+/grfUCYnItQdcQ6Wr1ho6V8PRiV6rDjRPUwgxqsnqX2w0snL+ITq2j6gK//G/+Pf7Gxz6A4x97GstvfgeVtVXJ25MSAJOadrnO7n2ztqGOu+zCeL3ismvnzXqCTyYWK2okOun6fS15Lro2O3Wsk3R6eu2OctHUxIAFVwkQ9Edsbq6hLOjq4JOPY/r4nbhy9hR+5ad/DhcX1rT4qiYBMGJ+EZ4Mconzgqq0Pil/nhRUsFSqYKlYQVkC93K5galEFKuFks7akhZiDvqwUZftmppVz3SjpQRNc22qpWW7vgw+x/fv0XT37auX5LojWthWv1M6FMvz9RE3DGzXvFflhPHRBE2DIiroMNGMa+Gdj7Yi3+PKbdN1xe+Yw2/Ta8CLuNiUZ3HV30Y+GsBCcQeZUgAZL6t3eWXrmtb/1jZqGPTi2Hcgh0Q0pEFjp8R5UUGGklJdvbqIRq2GsdEDegDFKLFdrWBrZwc7stmZDhbkGS0IwhxPx9T779pWBTt1FuhdVBstfO7Nizg8PS5/F8YDRw4iK/v/2tXLGK+VMbxnDl7A0zlJPgfO3rpqRMuD3XgK+I5BkwHHMtk8g8yVZGs3toL0gGPNaD2loEQyWeXrEa11W0atlwRuSk+rc7OkdvQn9FXXriOZiaHjhFOSvkoAD3NGlmliMiMoMKbvnGyA+594Ug6BNm4Kypq79y7E5e83N1bleZ7C+L4jiKaHVHmktb6i358bmVPrsqGZo0aNVgJYYWMRqfQI9u97BVsbVVw6WcGDv/xTuHzpi7gQy+PwwQ/8Ke6V81+oXf25AhaNAYiy+D9TcDNpIlVHWcPYKfpG092O4Dh2xINt2qBOrDumMMnSA3+US+YuCXIGUQXsya/azhrQbAph2dCe79+SMvVEzTxtE+vArbLcHaO0wE6hBA+mN6/L4rshm64kQTQlG22dhXj58cOSZiTlmmIjw3BlY66VVlEPVBCx/nl8wbWypVlwUSSCWhA/8fppOJIS/PiPfQrTDz6AzXPnJJhRcM/TojsHXl0inq5nlVVNqtv37YMxGlDW+q5DoHESUs0q25TwTKeQdQnPOvsY2oZR5tS12ja8pjbF/1DHoY98ANHsIN746nP4zBdexPXNAhrc4XFXOVq9mULWsKjPnLTKA2XaPElKeW2jqDV/msGmJIBNS3pckEUaK9XAR0HqyMFoRA6qiGGehwylQxnefsfavdk+gpJ92Qkbw8ee+Cg+ce80vvDy6/hXn/k9I1Nk5Vb4zlV/3w1rUOuylRUJqjKBkijlo1KJNKrlqiCxuim+86ARfJW0z4rBfoMkTbVOB65gG6tyz6GqhzPlVcx0JAgLirwRXMVOp4FIJY7jR2eQHxrS9VaU9cHH2xJksLK6jcX1MlISDHlAO6wZyjXWaw1F8e8sbGGj0VGEygB9cnGbnGWEZY2U5GAoyZqioTDli75z4aoG3BtL6/hbH3kCybn9KCzPI7joIDc7p8Rcl5K/2LVd63IQOuiZQeau39e+cvs0EFvzdO38X8+Rl91k6vyzvtxqGr4VD0wq4O5sY+PyZWwvL6JSLOvBUDelVKTkMPj21XUcFhQ1mklgcCiHZjyFidkpJAYHJXWMarpK5HX8kYdx8sUTKFILP51BTALgjStXlSg8skeQ2OCoKjA0KjXUBXHRLDVA5x1mY/JvfUHKjtPEganbcfr0KmrVNg4dfAgzU0dx9vXnsei9JoFmtJ8G9spD/7Wg9WcGLNYSyMfii1xcXND0cMsyxdsNT1UTHFsQDMBKa8jCVd1tlR3vqFaWCt51jbSuSps4hmvUNdvVaKR7Rk4jqMzpjj3JLVnOTpg71j1HN4rk33zBZu6sqwulLr+e3tjGZl0CK22x5QWnEzGMyIkxm81j7tj9yE4fxJlLr6C6eQODcXnYAs2DfhYP3vZ9sqmi+NbLz2GzNq8IjCYprXoIlwXmv/blr+GhD38f8ocOo7K1qRuUHVjW1LSLE+galxj5w44dYg14vZkx9F1qdIrO70F+S/S0Q7FGitrTZ6XGmbIpAnJiOwHHyhd35R3USGvE1IOPSiAO4J0//BI++9y3cXanhopcTzBGzk8UcQk0iQE7OdBgKuZoQXwgOIo7cmPYWp3H0uqSBCbHjEHJvzu1VRakwpTHR0EQxOOHZkwDQFGNqxP5rh2iZleKGul0ynH0ulvyGORQSI5hs9JCWhbvD7//cb23f/Hbnxe0Gjb33jXs8HgsqVyinuIBURoddFibCwejWgxPtBOq969ryLX2YdbOvS5IeyvQQj4WQk2QWEvS8HKmge1mBefbK6gFmqj5NaTkILvz6DQGR3JKRq2zDscxa0r8ykZcWCmhIvc7M5VT09hoo61B4uxqAUubskGLdUGfdR0TojDdQCqKLK3o4wlcKa2hovN9NOfgmSCHaaeJzWIBv/bp38eTD96DH3n6SVx8+duIFraRHBqzab2nBzh19h2WBzp2ni5o0YbeaKjvfqT8voB1ju7pyvG58N0wYFGxVeua8kxuXMfy+XNa9wsPjsAbyGNmbgz/8evv4sDogDZfqpLSffiRY7hy5jL+w9fexuGxATyLFjoSdEKSWQXlYOvGjJghOVrVwibyk1OIl3YETQ3g4plLSj4dHN3GwMg0wiTSygFGAclWvWjdgiPy35toyns6OpnFF6l+XjHHdUx+/j3vfRbrNy9j6fppkw4nBzUkOa77l0NYTAMnJiawuSkXm8+ZzpA8IP53UDsMrl6033NLCxjJV7b5OarD1KZjWcyw/KVud1e3yoxvGNXL3jiOka9BfzShJ0vT9400lrg6rEzmes/jUMdaes65vhlSpvBaOh7HpJyMt08dxG2PvVeL0aV6Dc0r6xiZTCGUiKAZqEtA24u/8+w/0t5ARFKYF8/8BsIZCQ61ABaveSg0JDCcu4GREXm5Tz2BFAuWHVNPccIhDS4qQmcdY9TBml4MQcPuVqqlLVY7/eYC+lZhhjvl2VqW3FPXjBpRpjYo16+BWikXDK5NZI4eRUAWyZnn/hjPvfAqLkvaUkvSNMHDPccfxI986md0Ru3XP/3zEnwvIxJKyfX5aFRlUVXKGJ1+CMeP3Y35y2dw8cpZLG0XUWw2tXa2UpRFH+ngodlxTMTD2kXSDSNIb2JYUipBYrw1Kj50udl4pnfM0C41zxnA19fWsbWY0nXzyXtvx8unL+Drb59SPTMiCHY2jQpDWL+vR0Ds1TKI0ilhU4821GXbUfmckNU8N6TKmmzQy7IhvHgG4agZTNx0a7gYW9bVlZVgfig1iOn8sKSYkl4KkuMEAlmipcIOCpUSlteK2Kp1JQDFMDk2glgoAadaxHq5rQakN+W5bko6yHtOy3oaGx7E7Xfeg/TkDL78tgQhSWsyYWrzU7HV0XSu5VdRji+gujaPb7z+Fm6bGcPx9zyA1XMXEBvkejWBW49539ttRmi5xJZBnICt91oRwICx0mNDS3s2XUN98a1PqGdncNcvXcDyjXmk984JIkrhD068jpfO39DpxM1iDS/LMynKnk2lE/jnGwWVKCIf8QFBnl986zIenN7G0Ow0upJRpTIp7Xpy3bYkUAWDexVNTc7NYWN5BedPn8N0pYLNrXWk82NIS3DkoH2A79TvoryzgcLCDeQP3i4/0+k35W793/D0frSdKJaunkR57Yau0YGhLJzE8F/O+Xl2dlbHczg0S64NGchLS0uKtJJycY2KIdKRh6I8nJZxLlZhec9oJDGQGW86qzHuuDqy4HtdazBpxjmUMa1eda1dYp5vtcv8WyT1HaNeWqdmkiBARSYw3acmX5oEJMrBUPNqXB78nWNTuP2J92Hi9nuRGxvFxXMnJe+X02E6r5PkDS+Mi69fwQ//g4+rEmelsYXRGWD/7RFVl8zkBXHcFJgbGsKl81cwefQ25PftU81vxZVUCJBEq8NZLW5uK6fTN/zU3M+1+vE23eyY0hwF3wg1zcydMYM15g5G2C4oCDDAIjCPhUZX4X5ifAyx/BBuvPYGvv3Ca9hy4whN+Tgw7suiyWJiYK8EpSAuL13C+XdXZJPIhtzPekkYqSFZSCtVNOW+JwRtjkxMYXx0GK9++yVc2t5WRntCnu3+fAqzsqgbbaNzn+O9yHucmxjD2NAg5tcKyk7vRLrGV1QJYip6LM+goXN3y69swr3zKHITo3j88IwGLDPE62payDnMeDaqDlMdQSVOLKIIgbJCJKTSYDUuiNdJm8YFBROZpgXswdiodHB9fVX+vImGBIq0pLOl4iZmEBOUl8ZRudZkKqbEy2bbkHEpN10sVVDcqWBtoyxIXFJhQUxjAxEMDQ4horQ4Hxuyud9Z2kJN0FZS1tKI/JtZObzvfeAxjB48jq+eeh3VZgqHxo9iW/aAj7Kmkgk/iI68j4+9/0kMjSXw6d/5DfzHP/o6psc/Jch+UsdZQkQjJOfu2uFYcxRTy4NvkZUNVjp2FjDKuEHH68/fmia0NUul0czKTRQ21jF6x20obRXw+d/9Ml5eXEXZCgCG02FF0cOyb+lSvbZYRYOlFFmrb9zcxIPjabx4dQX1K2t4+MgezMmBpWRl6n/JAUIb+/z0Hmxcu4iD9xzH6ye+iYuXbmAgvSUBcEnS4rCZX5WU02VAbdeRm96HQDSL3/rP/9HKSf3p7l+QneisoLSB3cD9l0JYvYA1OTmp6CidyehQKhEWXXOevO39+OPXv6ZBR4dXrcwGWedKsjOj0CbYqEaPvyuXe4sziym6sysZUD5PzwVX59x6tKMed6dHRORIi4rGWS0n6zLMF5ySjZSTFDAXD2EuIghr3wGM7T2EwckRDGQMUozEAhgYS8OV9Xzz/BIqO0UJRssaFKm46TdjiEugGprOITcQRDKcxvTYg0hcPYeld95FdnIMESoD+CE9URz5Ig+lHTCk1p6jiS4ojshoWmicYzSGUamVZEGYwK3Ph19ta+3ExUq9edm0bDCoaqSkG8GBNCKyeYrzN3D+xLfhjhzEgTl5P6VvYvb2cQh4womvfRW/+Zuf00MlEg5gPCSp1WBI0kMO9Ea1kdDulJEazEMgqKYY21QzfftVbPqmqbFSqaO5vK6s+IOjQ7IYjTX9UG4Ic5IiXF3aQDwpaYPcf4PX5hhDCWqXa41NgsPqlZsIy2elMo9ggsan4YCibm4ePhGOMnlyivOgQ2+cx1qFEemxKB1XOR0JtfmQSt+0ekjDN0hs33QEP/HxLH73zU0J3C4OJGdxUE77giC44dGsMVooV9CVTVeWh1MuCpIsNlXOlyRSKnEMykbOydqmCgXpYAXH+AKSQNKQ1G0oHcOUHAT33/8oJg7dhbq8l5vr20jlZlGTQ6WT4ESEpOPzl7DVbiA9lsUzz/4sHr3vHjnok/hn/+qf4MXX38APfPTDqJcqSomBVQnznP5SN+UD7Tn1HHhsoCIfjiddr1jY7fH6KABAqkIY7UZVCaD5g4cwf/4S/tO33sC7spfqo6MIplJy8NF0IiYHEg+WCmKVLdzbDGJ7YwsrpRquLK1J+lvA/VN5HJdDJFyroLAu7zjTUoNkcgpXrlxEdmQKiUwe4WoBh47djounTqHApk3Z1ACTSTng22lkBgcweewhtBM5/OJv/B7mF1YxPJJQOsn3FlwIfPco2180YI2NjSEjL5OF9lH5fYmsWHnplJwZS+bl9Imp0YE5LTqqr0T0Q6MKLtqwQMhm26hi+naerGdL7yg3x4i/MTK327unhtMTVPZ3uUoGXRnnFTVP1aJpW1EQu5Us8JOh/r7pYWTImpa9McTJ+lgQ8ZyZyndCElDZQBC0mBxMIibBaGNtA5kRF/nhtJzAHpJZH/mprkDTFKZnj6AakfRTUsLb7ngI4bkprH3x81gRdLPnqffLRclpIgGBm0uHe+k67BpHEMeOGilBlEjTday+kaejDK5n5vxIx+CGIsQ3hpYwcrARU/jkuA95XnTK5bU3y5u49sKLqIYH8OgP/SSurp5Ec/s0pvaP4sKZc3KSVmHkhiJybY4sohBiOSA3HkRjJygbTaB+yTUcK3k+rVoVk/sP4vaFeSxuLGFR0tEq7chplimba73VxrQ88wkqQMiCPLZ3Bs+98Y4y3ZNyfSxAV5u+BkjOoRFBN3VkKYrG4jLqS8uqW89xokbXR2+78sBR/8VsXqkRNKHgfZNHwWFhKnOEJB32JCVLyrtbqVYs6z6oASskm+/YDHXoISkHZa8cHJw9gInsIGo3r0pArCPC4MgRp1ZDP7/d9rRgzENrMC9ITNYOffBoUxVl7d81kjBDAzVMSjCNUwpbLumeO+/A1KE7kByfwIoEpkY3gdHZw0A0hNLSNbgS3JOlDrItF9lyE//8H/88PvJDP4CvvnURbmYfrkrQrG7vIC0ordWU9dC0vpwa6QPGA6evy24bMzol4apyxv/H25vA2nae12FrD2eez53Hd9888pGPo0hLpGVNliUPqlLHrp06BQI3RYsiaOygMZDCSA20gNMmSJuiQBPDcmu7cdNElmRZlGWLoihxJt/MN995vufcM4976Le+f59Lu0CLopJF6YHk47vn7P0P37e+aS0VDyaS8oMonDT3h9XuUPZgwPyYPNvmnXv4ndfewa3EOFInz6hgRozV8FgW7tDF0qk8nry8iDurt7B//xG++GMv4u7Vd3Ht4Qr22j1skAZa1vp7Dw9Q2G7gi8+clzsdV5TFIsgHb7yCZz/zeeyu9DC/SK3MAVYlDOXeVhttbFfrOCZ7PLN4XM7cLP7RP/kdvHPjloAYOXs9T0BP6v+RaOEHbmvQXiu52GfOnNEwcFGQ1sMHD2DJwXz//fexaE1q3oVQkJYxTml1WVhWTpTjmSEiuaA9/0juSXMVRiLHJOVprAQNaVk37B8JU9iRI9EGCWvE+f6hMKsSOARRAl9QVtyJK90N4UNGNnAsGi8py2nzW4cI+i0dC4mJUcnli3II80qnQpR07rmzGEosn3bF6/ZiKE9KeLE4xOmLT2G6fF7Chh14pQDHjkmwsTgjkGwDzXe/j8EV2dTT55WyYzQe6ET5KB9Rd3IQSbWzKOAadMFWCMeOy4VvansCc18eu6dl89kS4IeGspml7xG7Kj/XIdrAANsSlu7WBjj+uZ/HhWcvo/GGGIX0nHIuTXcPML2+i85hWgzxEBNTMUwuyuWcy2HmzAl0ayH6jRXkrTIyYqyY8E1yYl/2YEo8ZDGTxxiRTEm8tnjW1WYPVsfHE6k80nnyoMdxanZKjERMq7VsUyTLKMKuMkCQyE/HjeT9WDZ3yFCwu4c+e9aCaBbTsTHSfmOIVx6zzayihBA5NiUqX76rfPVxK67afwP5Z2X0jgRYme9UWXgxrg9WWfG0cKJIksmyOhDHTShvlS+haq3eQFOMHcdHgj6rfQkJYzKaZ2QhIZ5JyUXKw5H1t+X341YC586dxrGZWQmxqsr4WpD/nhublDVLarLfdvKYmplGV6x1tb4hgHnCSHFZTeyjj/3vfYDr+BpK+UWUswtIzYXi9FsYW0ohjJv8bdCPaJUC54iayj4Sbol6q1Ukw9GOdIOw2Jxs0JblmNYIpaCJJ+FJ5PPym1dxOzcrof4VTMRLuNXcRLu+h2H7EU4/dgK/8ev/GZ47eQ7r29v4uV/7L1A7toi/ceUpTH713+HN997D9n4D63uHePL4PF68dByu3O1mV5yla757e20dy7eu4vjlJ7H/4BZOXTirBbat5YdiVOPoVpvIlCZQmBP0WT/EJz72DF5/67o2BasSVsTo8X83Vn+5Mvj/m15m9Nfjjz+uBqo8Nqac44+Wl1GRxWl6NS1kpMkfxIluOXScPzR9TmaWbKhk/f4Rq8yIdVIb3Divl82pR+5SCYVd7CNurOCvljjtv8LhEE2zW4Ee7r6EVqzeqAMaUmFDRQ4RF1QyLV5oWgxhZ+U+OnOLSv43PTWHmfwpdFr3MWVnMb80i9xnx3Gj8IqENQ2JpxM4efGTePLS5+XP9LDdWUcpdRKzYhA4de+99AlsrtxF7cZtTMja2NkS+i0zCDqChDofp3QxQ20GtOJ9+dXWJGa3WcHOo2Wk5UAlnYI8q0FnnFD3B4FhVmCTqG1I7hRVqNS9g+a9W9i+8RCpix/DqY98FIV8HnPTS3KQBA3kirj09PMqTVcqfYBuPYNkto/CbAGXn/koUrlJbAaPtLp1rHQOuaI8S7suB04QjYQUeTkNTUFlx8TBTE6NIysXMjM3iZwYgTEJLcqFrPY0Wf5D5JMeWgNxUrFQFX8sv4dTU1k0PDm0gTgq9pFkCnDaTVXAbnuGWsdSPiYnEncN1ZkN+h2tSA+6RkyViWWXtM3yp8lwy0o1w2w2O4aj/iPNhQboxQO8stHUiz2W6auUGRFUNpMTxNDWub3AM20v7EVLZxzlm7dINyaOgyoteUFXbA2IxyJudareiEHOjZfVaSQoK9dtChJry6+c7FlMni+JXK6AibkMvORZ7F+vI7ebw264ojO1eYF9hQtXBMFNY1sijPHFHHoJo6oUL0/p/KWljaNGJMSJZHI+FAE2zdU0SiFplLRny/StGYbdmP53snawA5/VvIcf3MUDpFA4K3s9s4TNrWVxxFtIPljHbDMlK7+Nf/fqK5p2OBAnZMWncU8Q0eeeeh6f+OIvwJX7d+POTTGIhpLm5loVTTmP549PIS2ObXt/KNFKGh+89Q5K4+MYP30ZtbX7OHHuHEoTE9h+tKKFmByl0uSc85UunVrClUvn8MbVm3o3Ok3r/5XO6gdGWPyLHO6XL1/Go0ePcPzECWxtbWk/VkxCjUKqpMaExTCWo1sSXnDZXbYv+EGUZI+UaaL+Gx46DrcSWTE87HEsJjS9Nlol/MscWX+5kcw2vO0qVKDn3fR/KcVGMq3weTAI8dLHn0dGDOdX//ib4usCOXgllPdX1WhZEjKU8mM4f+J5fEeMzuFcE+WyizPnnsLsxEk0GxUkx+OYGRPvIt69UnmAg/U+nj/9uDxvEv1uF5liEXM/8Sm0Xn8dnc1tjD21CIsh7c6eClI6toQiaTncbkcuyAAkA3BjUYs/2wIaN/HBK1+T2N8T+J2Vgz+FRHZajP4knMSEXKR0xFOvYwCIZZKCgjLwGzW01rYRZCVMP39Zpam4EBMTCxjcdpUtdf7YOTz30pTyPVFhB3kfJ04+jfmxJ7BbWUdHPGBYz2HhyXNaiOIIkMXL2DqQSyahRaMBV1CGWyygODcrhmoCaUFH/MW9Wl95C9sP30XSDcTzGmzJMalQUIlvj2mTqqUUsDacdBquoBf2WrVZgYwqotqvF43qGLaSNrLpvMqjs0pI6TD+l7iEg51aR52EHbFkEuF1vI4ZuJYv35FncCQ8c4MGdmop1K6/jZ94/qdQUTm6uFYWKapRO+xqXpPjK6QrIiIPJZxDNq5iE439fTknpyI9QkfRN1k46vUatg92UBJjWt5ZgSVOe0xCJpIzduVzLs3NYPHEJL4lKMQbPsLUNR8V+V/spy7iyZdeRHu7JXt2X5yK7G9M1kw+a3LmmE4QoGciCi06ORacUajHlAnpZpyISSNmBupV7FcbdF2ttNoJR0NFV/48SQYbtuzB3CVMHXsMifEiKrvLKK7UMd88AcGN4uyq+N3/7sv4t+fuY2LmpABCiZCcrhZ2SsdP4oWXPoVho469WlUMTlwpn3OlkhZemOqJKUuEUcx555vfxFOf+TQmjp9D+3APGblTpODZFjDD/XdTgq7luaazaSwszOH1928IYu6jN/j/1tH+Axks/nVOrChDIg4qnr1wAffv3EWKlLZyICjUyUNIdDUatWCoyB4RG4bviY2D7IkizW0imvqmQGOv21d4bBntG/Ue2lsVNTyOut8/TLibDKVKHAWmTcCLKiyOZWiS544tadIwJ4jo/uoWtps3cUUQ3CWGrHLYm2eu4PS5p7G9vYo7b/65IsN4kMCJmctILxZQ6W1ju3IXuxtvYe/mIU4VP4XHLl1G62AftfVVWDtrKHGo9cxJRXuD9q4YGh+p5CpS1r544JagHUEIEjaw/Ffdr2FntyowvI96z0a/d4jDblxljMhH7vUaCHbuyIVmwjGDbF4gtRyo0swZMXbHVeWYa1bfle8JYzj52CXsy3s0Nrfk98Wblycwl38ey9e+KahpEjNTZ/CRZ78ohkRCXLevoRs7lLfWl/HgzS2cLnwO08dOoNdqYri/DqzcQDFhYYOMDjR60+OaUE+Xi5g5e07HlnrtQ6w++A6uXfse9qsdrfS1xbO7to8zkw62uxPYb6c5qIPQMTval7CMvGOkqGlIaMkcTcw1hIeuHYuUpi2jaiTfzZEYMk+QmJH7SYPF1plOeyAOIG5k7NlUS8odjmglWHmdxJ6E/BnP0R60nfoaKjvLKIyJx9/eQb1fl5Corugu6aRQtiV0YuJZjNUgLQgxn8PBbgVxzjBSboyoWMf6hsrvxaqzLZf13voagtdfxdnpGRybn8JENsTeRgWudxHHF/Owfu5TuHF5Xc7LNuZSLo4/dRpnkcPbqw+Rlfc9e2IesXYfg4crpn2BkxZOxCzKM+4bvnVlY7CskUCXcr2RLZRrqJU3nVXlkLkhGVA2XkGHbA4tPv48Ym/I9584iVgphb3lSRQPZ5SAr2Z1dDKkINFA4tQTmDk2h46E6plwF7OLx9CoVJGRd3tczvTutkQnxTH0IxHZqXFxsnHKv21qO0hKnBmf//1vfAMXP/pRzJ67rPvCy58fn1TQwWfstmuQeFvOzXoUJTlHnGl/7QaLf33kIx9RQj/KfZXHyui2WmpYUnHGuR3VqTNxeKBjNforNHQjDNk4+a8LzJK2GCoSpVlGvgIeRUkt038T4kNkpT1WUfVRDZfOWxn2StuJWgCowzc0yUjDWGrj+MkT+JlPvojvvv4WHq5v4bUP7mHtsI4nKwc405HNOf80fvyjn0X8rRQevfU2ets3sDuxo/NVXq+JZqWO4EBCw8yLeO7Ck7DqBwgaVWQ7B4KGqOhjoSiG24r3ELbfkgMvyMsls2NPLqeHD7aaKuKws3mAjf0+HlaK8Ky8XMIc6o0kDg4EiYlhPJZrYSrnoZwOBQGIw4914DVXsN9YwcHy95EVAzT26IwgnRNKbpY9PY/cThP53h46+xKWhR24hTFcOnEF2689xDvfuorTTzTEcOV07o57Uq/tYvn+Kg4eNHA891E888zn5R0PMdx8gPDhVQgUQ3PnAMvr29qLlRNDNEtuL7lIwz6ZZrfx4NZ3cOv2LezXB9jtJbAvIUVVQq5LC2Wcnsxh9bZhmY0mRk3LBj+DvwRVHhwYsjfOHKqQMQfW7VHvFamvJSyUEHJATUKlL/c1R+WIEWkLAkcPmiuF0uh42haTFpSe7w2xQrWgUNBFV5AcDc+4INBYUhACpeRlbd24htlx+feClZWPGirzaKqQQ0t+tnMo6zVRMg3LXsQ1pcPYlF2bVQGSA7mo126+L6G6i4tf+EU5W4/jX/3JNbzxxjTyk0/gbLkkji+HtYljEgk7yEwk0H6jif37G7h8tojFuXlU1nd0INxSWh5XEaVBmW4kXhOlE6LQwtFZzJiiLGXdJTr1HcPu6xjqGYaunb1dCUtzGJtbQCbXxcRkSRDUGJyXXsCDb6wisyWhqKDGhoTP2WeexKknz2JBQub7B9TRTEl4V9ZCRjMlRkkc0IVzJzD39AuwxyYlHBanJCEt20XYPN46bKEv954SbAUxTsvvvI1utYK5i1d0n/1eYPaQXPXJLN68eg3v3L1tBEcYEbn40Rgs5pw4pkOkxb6sbqcd6cU56h1Z5VI+cHvUxhAgxhYHNx5NmxuCNoZ/VNZVZRDb8MHTYzojFscIVRnZL0chsz1SDmGTqINIKdcYL0Rdv0o8F+W70uI9x6emUZ6ZwZUnLmmv01deFcO1fYBHGzs4e/s+Hr/0Pi4//SQ+I+/TwWPYatXQk4NLjEZ6kGw5jeJEEmN5KtPtK41wckoQ48wwSjBLSGxXzeCuoILDnRauXl/De3ebeLDloNZLoyxe6tNPjiPVaQDNefFUM8ikXYHZcsHk4nRaJZxb3EXQb+JP7kCpZCYyHSyN+VgqhZhKhBi21rHy5iN84NvKr5Qlte/kHCZmj6EsSMhNC3rt7Cg6+/xjH8MHj2aw/cYGduMrSoxHAsOGIKK4P4GPLXwWj194AsnGAwlT7mK4u4nd5RVsPtjElhisrVYXvhzcc6SZyXDecxV333kVyysr2NgRlCLP8EEjjq1GDLMlQTOHNhaLWdxYC9Hosv/O1y5/KzRD333f0lENyGVev3HvSCfAtoxMGtHXUPc0LkZRDH9QVFTFOUozSgSVrWfvEQ0auwEon5bykvod6XhOnENLmQ6CpCA6xyDziYUTcJpNMfZlpMcKgtBami6IyWVPxDIIZV3dfAx0l/3tqhIKkglCR6C8iKrbo5oSxV5dDUNnKSAhRubmjato1mo4+dyP4RcuF/AX99/G17/lq95h3M1oEeiw6mP/gYfNN+8gZt3Hpz/yvJkVbUqoGHSNbqHe6LhRhVZu/ZEwXqC5WeaAOeEQc6O2GXX0RuBFldctU0nm7F9Vzk8yV0ROwtXxbE6LCS+dnZG7OoY/kFC2+S/fgiUOPf4Tx3D8U8/iqckp8VES0gqaPnEyq3knttzk+hV08w5mHn8CSx/5mKCsIuorD1BbvqvrwTTOxMwcqtUD9GsN2IKqmG6p7h+g/upfSEQwgzSZXImsixO4dfc+/sm/+JJZT9v0k/nBjwhhcSM2Njbw8ssvS1i4g0ajpXJRnONTYUTmHFwzOkH+Iisli6Csl0Ek8wRFVGR5NOISRnTV9N0YnqTAaBdFdDLOUWWQh1BbuFQ/7UNOFmtU+vUjYVZ+FsmBh++r2MSJ0xnEklN4/d4tfPGzH5NwzcLe7j6uLW9gbe8AD+4/FGRyXNDYknilaaTEg7Bql0mTRlee0alqz4rty4Fnbk4utBK1iVfrWgks7/tY32hgc3MXb9+FILiMHLLjSIv3ymcSyBcTgsCq2JRwjJx+hayjfVHklCiVk7JuaazI5T8/Xcb4RBa1dgx1Oazv1Zp4b7+KvNvFdK6HmWyA8UygxrR3KKFdbQdrd98TiM8qYkpge1lZLjO5MRyXQ5FtCtoNJPTpE43IM8QmVa4qKUhq9+u/j0HtEHVBDNtipJqNhoSOAzQE2T5xLIehhLaJsUNUWhXcf18QQpWzfD5abK6tibGqubgwl1A0+2PnxjXftHowUKNi6vGhssNyH5mzikko25XQYq1S0810VILMKPwkaZx6psWA56LXHyLLvFJgmDQI0zhPR06pQYtkcQMkM0nEUknd/DvL22K0ppGbzYlzIIoaiIEO0TyoIOn10RJjpqGk/GE2EvPn7YkcEpmYpiF6O4eISxSQTWWVRVfVyzkHG4Qqn86KHdtCyqWShqNsnB2/eFHCItnzq69rC80nJcTaeOcBmsvzsm7jOvjM3FS8V8VLOQsXP3kCk2L8g15F9kc+98IluRsSYvVMy4gq0zmmLUi/0zKMsjFxNkSnrNJbMZPL8iIiP6MmLWsj6+DKvqYknC+O5WHLWj95fgKvblfE+QwwOZPGL/3iT+LbV06iIwZrcXoKx8QwtwTd316twtp/iBf/vc/oPgUbtzHYXsahrHNsYGGRgiQUfCH3m844mracTDElazKulDwDiZK2V7eRyqaV2LOxty8hnzjzMIaEX8J7V69iNp/UfW11Bsr6gfBHiLCYv7oqD0G2hrHymHrDnuatAkMvE4TR2I1txgYiw0OrOuDlEWNiSrSJI8VZZYAKInJfa9QUbgZgfbIzKv8MdObsiOkgymmZRtGIrYUkb54pdaecA6D+ungziifE8A9+9bKgw4L2v+xV64IG2lriZh6cv9KJVTFwG0gGlLoaINaXI95IaKKTbQWs1HRlwe/v9HBvq4fV/QAPd1gud/D8lWn81JUxc/mtRRRlXWIuWSVsJctr9cXMxOYxnh+TsNiW75HYfuipQU2nc9hvl7DkNzCRJxNSUru7HWdCjNEx2egu7tRr8CRcnC9U8PrNDQzEKCxOuFgoWyjEWaFrYGe5gs17d3Qt+xIiKaumHMyePLNOHvA9LLM+RIM6/kK0Kw7CFSRXyLoYI9WxGNdUjIPRNey32DQJ1AYxPKonca8Sk/2wcWmGTbQOHu4P8R8+X8S1Lc70cXbUhDN2JNtuvKl8fiGJDU5HVA4NjzybjIm6A4Oq44mYyVfKzw56cpbiOdM3HI3psLDC0JQqyjSs6Hp6DniRyf91c/0Az588J2j5hDiOCg4bbbx652v47NO/qPqU6tlJXSOGHWTjHMtpNbklBrQtTuGJpTlsNsUoW2aETDtnhjRUgaJqnlX2w3H85vFyUUemepMdXb/DyoFGB6fFWDIU8wSRZguzcIsSehUWkR+bYl+QMhgIFEZYvKhVVmVO4C2JuXrGLV9CPn4XFXOsmPpsR5WjzdiXk0mYca2hZUj3XN4kV9fRkXA1OzaNIRXBBcE9syR78voa/s9XC/gbP31FQr8UPr5wEjuymaxKdtsert3awe03XscvffQ4Lp8/j+bt7+Pe1/4ID+4+wsKPfQzHn3nOCI216to/pY262i8YqJOhE2JOlTPGPQmpa5W67MUAU6y4pueRSZVQbzdwuHEoiI/osIC727LefS+SMvsRGCwenhUJDUjfUsxLjCxendP+Rj/Oi7T1THhGizxiKlCyNTIhKvR3VJGDmcNwGMGi0LAkWiNud9ktlu/9KCflKLoaTeibplEVmoD34VSS6b1TYruewOF//YYgFT+F6VIgCyheIcELuq9ea2EyVN4fVofJR8QLrmGmUp14GPgxHPYEQTVt1LoWdip9LG+1sbw7xE7DQTJVwGefm8CpxQFevdZXQ3j16m3cvLuGxMIpnUlThRx5jnJuoElpN5FVDi8nmiOMWSO1aQlx8lNqrBoHm6jEjssFdjQcYrc90Qb5zJ+8ZOOFiRbuP5Qwa/yyfG4Tf3Z1Aw3PxVQ2hmLGkoMB5CQkc6gHlx3oHnCtO6RPGfb00pBNteX3YHK7IajxaXQ3xVQmSPvMMM5Fy3Ow2XawIgBzsybr0HORlktyXtaOf64mNmO3NcS/frMmqDAr7+jgiJ/Qto7SAu2BICwOym7vqSwYL7/OmdrOEZssx71GHPAciKZxpj3jIC2HpRXdRykDWrJBZIBTlO3qGYfywa115IoSgo8V5RLVcbO+hbT9DXjJPOKCPNOCPM9MTWJPkCWFUxq7u/AFgcwWCzh58hjs9V2sCtI04iFailamUTuMa7sBDUgqnlLuKQ4Zp9IJdcIT0zOaG0tl0rqQRLHsh2J+yaHDYEsHTA9iYCcQcJRJK5BDzemoQaJDDDwzbUpDH6kUabqFXexJ/pIwdtA2YSMJMMlnFVH5cJ41e/IxxEuzOirmyfr8p0+P4es33sC7/8cKPpiaRiMQ4y6/unIWOo0amqt38Tcvu/gPnj6N+1/+Xdz+8z/B5tY+Zi4/hWd/6meQnxJDK+vY39uAlTAozpJnHopxitU72sQbLxeQlL9XJBxMCarK5HKC9CUklVBw4KZQqe5jtbaNKXES04IoD5rsMWwZItAfFcK6+v5VFZhcWDRMga3Dw6NhVFX6DQ0lij8SeLStI6ZMO2m0BDlbaKCtYWbg73kjOXL1GmZAWs8nYpGAxfCIzcGN9DcHR8PUponUVY07orA0vvpOGS9f9eUCdzCWD7AwbmOy7GCqGEM+xUplENH6CtqhhtwgEFRhCfKyQUUnjkcOA0dQjng2pyiX4gQKAoWfPOniWH4Pk+FdTMtD7GzI5vefEe8zDmdqCYtzC4qcSJvMlh7bP8Cb1w8Qz50xidKow53PqYP5igpDXN8QBJVzEdP5QttQuETQvyj//Ma1NXy3vi1oLIu/damPZzNV+Et5/Nn2aSyLZ+tWeyrWKuYJSbnkKacrKMhDJh6Xi0skOUBK1XbkwpMxwTID6J2QlCOWrkOzLu8u71/t2LIWtoQQtrJV8H+llI+z01ybQMIgOaT1hobwy1UjkMehaM1TOCZ3RYTMc9DlnshBfvf77+oFTyZdRVmuax+pe7OTf8TEMBj2xSAN1aPrZ1E3L+LKcsRQWp6lRRb+nJLsyXmZmC5qu8nVtx5ICJ7F7EIJB9UhXq5JyNwJ8OqGhIsSwvyXp/8mJtibdf+6EbtwUrjy8adRmp9DN34Pu9dv6dobXjIaAkcnERxBw8zDscjCMZgw6Y50yfTcsydLGTWorOw4EfuGmYGHjmypxpjuN0+yS959khQG3JdAv4NSZJbla/jLfXdhRrm0eZTFCe3HMtEgKdY06rDI5yZrSDqR4UCrqySQlIOAhVwKf+fxKSzfv4O1t76NgaB7Dj7TgdndOiaTNha6Wbz2z7+lhmXuzEX8/C//KpxsVvn99daSqSGThdepax8gCwJUeXda4njkvBU5wD0/I3vma+MolYcmEzmdqc14Q6xtLQvCJRV6TFH0WC4j56en+e4ficH66le/JkjiGmZnplUaiNzX6lGjvhUShim01wrQqCPdVPoyAkuHnhlsVF5zpWYKDaYaGohEqhJ6ah3bYXUwZnqxGAWo2AO5tEYKPYGR0AoiWmZS9+okOOWi4lPIkKZCNr8pF6BR9eRihUY30GU3fqjP50bJXyuSvFLuKFnYJGF2xtGqZk4QwVjWx5lpTudKaNZ8gLXVPu6HRfG8HmKCMk+eXJLDfE5+ziRMKdYqjh5PX0piWPfk3xclvEpqDkD5okiCxxyJZehwWOJOFWbw4gvTOHZ/E9+5Z6HtZ0yOQg5qgge4tIRWchqT3gDfuL6GP+v6GMj7zBYbGGTTmC+n5PPSuLlhYWPfF2TTxXaL41BtHXmhRh8lUlRw03ePxoWIXH29Go46j1BFcA2qtS3DHlgWhPrEQgxbYgR6SGNKwpPmNpWnbboRBvnGaCnjtRzsqJDCKt5QUAkFRe9u7ugMpVHsNol3KJ1v33B1RYaOZ8QLe/JnMhpqqXqxvDPDEcdO6jwdkesof0lDVdlp4TM/eRm3bt8XUNBFLdUQbx9D7bAj0aMYzXpb1vbjYsqhqKHVrIkByWJREAI71d2xcUw/Jp9T2dfmUa1F02EyV6lhWB/OwIxJ0cFQNAI68pQw6IjEljQqrmESNZ2+tta+yUZrR8pIIcUryF4SDtTdQgN4OQM66O+b8JP9S3D1rNt6PoII7Q1NbtAd6UlaygHvRMDA70VFr04LXktQHfnm5YunxicwnslLCBfDzvJ907U+8DVU5l4vPfkMnltaQG58ErFCEZnxMeWJN2o85NnPi8E6NKUAihCns0hBwmoqUYmBzIcOSlc+IkZcooqDPYSHDSTHy2jtraF30EA6Ydg1eJ5yGXGkLlk+fgQI6+7du/hn//SfiYdMqEz9yvJKpFIV6hxWGNGiqDexrQ9n/yLVDzpULlqr4xloD3OguZHMPcV0xMCM2dBYuXEDd/2obwcRcxQJ4JSWhYnKwISiTGJn5OByw7rdIT7ydBHzp11cX5HDHiaQYA8LH4vc1W5KDz27l2kgVYfOdrTT21HY72hyXP+dHfK5EGfH9lFy1vDOvS7u76dRmjyPcnlGD99TSynthwkiOhx6f7ajzI93cby4i/fv3hCYvigbVpRLJwbb9SMjPzyaSOf3B90mtm6v4oS1jVV3HFd7F8Swss3DUTRCD5bJGJHJXl8ORO8MXI9Co+yurwma8/Af/ew4Xn3lEb77SDxrtayq1f1hDm2qT1OkQv4s5xZtx9OrYkVUw+5I4jwKz7X4IfBgLBfH6UkLZ2YcfP9+X0JEF5eW0mgI/GQ+8eR4Ard3IjUX5anydSzKjoQv2Rtkicde3tvHyt6BjtdQBzAcTSnYI8prT0U86YAYFul4VaQWrUaVQrBMPbBXjpzuLNpEOnDpVFoQQhVvv3MLzz/7NB49WsHevlycpqd9QbFUAk8fO4PzC7N63sh9byqGvqCKc1osGlT24OZzOP7YBWxev66ipoh4x9TJEPXI5bQkrNZUFEdidCDdqCSR/odiD0aaKtS2B+W416jBj7Q0ob1pangMZZ+JEQLDvhGIEbOohkwUHAy0PcJ1GGWwt0mMW7uimpFmHMc2xk7egQ2mNGxhQhwxVYXsLPrs9G+2tfvd4YxraEbDygvH1ZGML55UHq6shG4smKQoacf1J9PoqA8sol9WShs3ofdM81e5ouyhOEBbjCk1HUPKlcWV2727sQ6rVILjdbEpTqLbOwRFnQ06DAXtW2rwXfdHkMP69V//B6oSMjVBfcIHuhmFYlFHaYbdvjaIjsZmuKEqFkEvEyVLaXyYDKd4ZaNtpMNYpiX7qJuwdcp/QBUXSme5pgMalkk6Gu5zX+mWRzNkgWXI7MjLXeRoD0c4xGB1xHv89Ccu4mc+PoX/+Xe+i71wFsuVFFp9UsYq2bzmy3ROXr4iLZ+fSsrBF5hfzAq8R0uRz1g5iVy8hf2tdfTked6sF1AJlnDp8eOadNT3tQzhnaoc+8agmvYMYHnbRe3hLXz3WgOJiTxKZRvjqYFymne8hLZ/ZOIhJmJtrB9aEt+H+JOtAQphH4dyiGKZUI246xpmglErAMOQrFwIGi/TziFhrRihvU4NX3u9isq+hXiwj8sTTfSGrhiZtBq9rT0xDOQSlyeu1rxIEMOOlIxIHkduKlMyL6cDTOUkhM4Dp8sBnnysjDdX9pBPcNhYjIAlIempGHb3Ohh4gkjJSGsZ9kwVliVaCiLBTwkXbm+viVcfqrNznbiODdnKG2XrmeAICC+9shY4lpErC6K+O8/Xs6QGVgwGUQ6l3EgrFEYK2qQX2toQozi5gmaLlSsP9WpLz+O58+P42LPPYFb2gJWv/WYd1UoFCwtLmDw2K/vQl5Cqqcl+O3KknOfk2A6ZYI1qNMNSMfQdB1GblKJzne90DdWytudgMOoeNKpRyvhgqYAJx4r8EdvIKMeneT92usvPDfq6/gQ2Nrvw5fto3LXNRxwNdQW1ShfGxSCqyBqcUfHJ60c0NORyZ4I8jTAd1zNGERMKtwY6AuSZ0JWVRxZhEpR0E4PGKqDsTWg7R8K3ZM81sbdvlKmJEOWf0wW5a4dyxwUgsJ3CjpsKplev6Kxnamoand0VrG4fYGdvz0y8uGaSO8XvZchs/zVXCX/t7/99fO+113Dq5AkcNurodTsYn5zUucIG5Y/kQVkWpbHxdSjU0UM14v3mLiczGX1h8hlNy89V6w2VmaIkOS8eu+DZAY+oJ0vnhiNVHVWC1MQsE/kDoxjDSX357HKxpJvV6bR1VCgeS8uznZRwZYCHq6sge+tzM2QOmESdjKJPlOSwD/C9tw+wNDbAk6cl5Mv78nsCn+Xv125vywX30O8KitwU44JF+a5p5GeyGI8bWS/lLTJRqWEHjfrLrNDo1JFsoSdIr+oLHD9+RZxvVi96yT5AtSsbLCErPaklRjSNOvLyzzW7jHj6cQyCRUzF29htexoCcZBcjRYM06QKWlhGxhARayl7dGJOEe8+9ARFndERoFpnG5nhCn7u8iwWc028crWJC+dnUMhl8AevNHFqJo2t/S5yYqw3KgPMl9J4tNlDPsm8ii/708F3P+jjYdHG2XMJJB0JiwJeZA8//0IWm/JnX7tJHv2MkgvqBBx55m0zOsJnZIjdFGf21t3lSEjWRtw24qAeK5JWwhBCRtRChtGCyHugLQc0bBy58nQW1ZwRIngvIrgjER8/k3OGA7mUN27cw7FTk8rXNuj4ysn0/ONXMDOeRjaVQ6O2LWe1pao3S1kJOQ/3MSDTq21HmoiGwbPf6us4j7aUw4jahj15LjHUhs+MChsxo54dt7W6ZzGsIy0wiwnDKL8VDSpr7ipqeraPaGVsRdnychHj6lDRniNGJZ4tQIkZmDwhgyubsaO7EQ6phh3T0BCRCLH+YZ1hDSLUDA3rXNKfCsQJEwQAsaiv0fqQDJDhrRUVvaLK/kjMmJoBSnGjqt62yU9zCqA/kLCzqUUGV+50rFxStEh0Zcs+iLVHpe5hp/5I7rdRIfd8I6bM4Cg5YjT56zJYv/el38OXvvQlMQxFMQpdtBstpAXRnDlzWpNtu5vbOpZjFguKBtgISKlp83CGtVSHTvMFPRjs3OULs9O9Qd1DJRBLqUcNLE+TdvTAPPiU0dIBVRq1QU8Xm0nYBFkFsnmFr+RIglIMD3HqxHn8r9/Yw1e+eh3XdvKwmkWUkk0cn9jBuaUqXjgeSCz/COvYRbYv4V2Q0bj7vVt9ubwx3K3mMTeVx56EXeNTJ3ByrKCspZHQutHIi/i1fUJxbrpvUIqhiA4QF+ibd2qCmlyN+emd0jEaxSYqzRzKU5Ym10kJ66QLmHKH6NVdpcCxAiYuu/DtAZoSGil3p+UagsCIWnnkwf2I0BCBGUmaGi8L4jGc4N1UBtW9OF69vYOxeFeMbwuz45uYl+e5ODnAs2czOCi1kU0EuJ8Z4sJCFm+L5/6LW23sNAO02/zkODZrAX7j9z6Q/fTAXHMuLqFUwcLv/1kbTbFP1PUjD5hKR9GKDALdL6XGkUuxXK3j/d0DMQBJVTo27B+uESNVdllDtTwa+rVMwkcbJI0xY9rAqBXrBJr8Psd4RpUmtmiwksZWEHJ47W/VJcS1MZEv4fKlM2KIJ1QYN+zLO7HZsd9Dt9/C6733MPMoLmFQTi6akbsiauIV42fGuObKm+4r0aKyCQwsDZUC9kPZfW185f6HCXnWMKmOFPqOsUiX0jWKSlH1lGgkYLjLkNMy7Ki+jqpQW1IMnhha9tjy/GjUxCbRXstQNsj9oJXSirxnaGm0ADDS71TGkkCpiZgf9aN8qRpFmDypjg/4JsyzOALmGLRn97s6aE9jy3whW0D43VRmMsGIYRnmUH7YOtA8VyqXR5ItHkzKr6/BO6wjdeo4/J0tbPTaWNusa/7QiWjBg2jUjoPaH9II/5ANFvNWv/Vb/7UKO7B0fHCwL6FIFnPzs+J1z+PNN9+Sze+bNnzmpFwjAqGc5lRTkQWgcIV29Uaqx5lMXscrCJHtfB4TE2Oo1evKieT5pqw7KisyOTxQnqiBIeaHuQzj8gxZuXjNbhN9lo1DwwKQlc994dI07tdDvLmxgEzKHOZOMIGbW0Pc2Qlxf+UOMt1beHcjCXfiDN7YZUPOgTz4lLzXMfEYWbSTeZyczasyMk8bE79O5J00j2abyXrfd9TLWxHfvJ4JSoSlduE1ZBMxL8bO0pxWPu5pvoHcRITkcWrHxTw9JKVMF9WBHAorpvzerWYPhTgZNLNqNAxvm20OjyHPl88yDZW+vrtnRqHkoLqKPj2TP0lM4e5uTD5PDk/Lxd1vHiBh1dCWM/zH399RlJJOMtkewwfrfdzc8LBZsaI+OUffle/Ybg1wbtyC2DDU2jb+lz/ZwAebZAfIqFDBiJ0iiJp4iay0f5Qd3y0Ouw7EGWTlu1J6jfnZpPkJo5ynocaOyA59w4GmGoU0HjRswyDi9A8UwfOCdnvdKEw2ArrMo9CIHVbbePrSScTF2+tAPRuV23IGBvvKCGHEa5t4tdbCta2v4z/PP4Hc1JR2lA+jc9km5ZCy4SoU1BwMW3NoI62BiSA0FaAOVsI1K6OKzbaKp2RMr2A0rE+iPs3NhSY3FEQUwbwbVEsiGidf/ZCsEu0OnJwYSiIqQVtEU9qATQPnxyPd3Ugtx0kZhSJWnnnXxOjZKlzi691T+nGGkPzZIDgSOBnRjeuiEerSGStSdTRPZTFZT9Q3NKSShljFR78zRHengqmzZzD55NOCODuyjA0MHz2CVz1E7NRJ/fc7u1v40tt35BELCHJpceZdfT/X1GV0z5jP+qEbrGq1ir/7q/+xHIBDQVcFbRQl9E7Kpp45fQa9Xg+HtUPxXkbmSasgrlECZl6JC8dqGae7Geppl7CyOQxN5cs1rJQ0hDEiAzFeLYHqHGhVr0q2Uonvbb17tnplTo6T5I83mKMRXTFWdjTKU63X8IXPfBTnJSTYfO8AheIY51yM8AN3mCVxOy7IKYsz4zGkyS+dGkdrKM+WLuPkfAlzExkxhK7mYZh/oxRVzHEieI+jpkjDbmoOMYnRhpZ1tAkUULCCDtb2xXdKuEpjE7C3xmqj2ouruGVS1qkn6+hyul8uZi5rK0EcjfpALknFK2EmcSDIkKo1aT38ynkfDX+HJhY1CXJV8TCzb554wAaFN8TgVRsdXU+9pF5b+70GgzT6QUKRQLVnKjeH3RAXjgu0L4hDulMD01FBxDGulMzyjoUkixIeXA7nypo82utqPtDRBDoisQSDlLQtwDKXhYPRfa+m4SxnSDnW4UXczzRayuIR5Y2sqI0YoWkkVvZVy5AW+qPRK9+8Nz9bizNKUBg3IYasD8O4oYQy2+LtTy2mZS0qEpYwRBOjTTFaO4aDXhWvZ0I0l/k5bfwna6/j720v4vz0MSSyMc31dHlBWQiIGf4uJYyk0WEqIHomnV0dtWwnB0oPxBDSph6lCsQa5BvY8RFTjFFAYiVWRXe5d5aR4WrUETRljxiGyfmhwZCYVsJO5quSJs/oBdo6QgOqleaopUKXpTdQJKWhK39Rs5JrynemM7P8ERGdnmWqTNkDbaVXCiYtBjBPpkp7Jm+FiJPO6AwMlbG1uLiAsUuPGWQrkVGwV1VwErt4UY11e3MHv/3OJvrDojj7JFKFrLxnD53eoXxUGzG5F2zBdK2/hqT7b/3Wb+H6jetK6jYSBUinkpiemVXWUZWWPqxpxUZ7rZQGJdC1tmKhcqlrCCyeou8abT6OK2jFgn1YbmDyGaGZPmeOIm4bOmS5VUqjS1mwQj6LWNJU8nwJDXrtvtK/qC5iFIi26J38Pk7MlXHq5CzuLl/FXjNt+JhcI4ukBQD5jCunk7go77DWTWBopzURKQEmtqsDQYsQo5XCRNFV3USGeQxvXdtwxSuPuOmD1p4ZayQIa5oyxBD1xMgsY2NHnr34ODLptIa1qVhfEOQhgti0GPykojBe3oRnoXk4gUp3U0LGIeqepeHnwB0TtDXAYn4fDxtktUhH/N1Gqt14Sk/pTwi1yeJYFeO0X+kojQpn8gK/J3vR0WS6E5ickpMwVMgjpgszhWphfiqHTz+Zwb2VAdb2+lrJ8Rk+eGY2s5C2lRGiIAaKA95dzzYBj8oFxSJBDUP162iBxEOrF6LPi9LdFmMn76vJaUt7cmhsGC7S2WnOU7n/jSiJN1KDIXIkwwdDE9+IjPi24UgboRcOKdPvaVcFP0cMjCpDi/Eojx9HKbYj6GqAmjhW5vnyXh9/vvpAe8M4R9GT52h0PPyj2n2c3FnFi1YZS7kMvFQOA8eoGLHVg0iII2ZcE7Z68FE5s+EOyRIiRqZjaQd5mEqbRmetdRo+M1bqAjehxpYNPbQFQ+Xvt5SdtVthRbOmYzr6GbJmA0GldkbWKGeUgWw5R+HYAsLDHVlmI/iixk/uk6KgPg2cbyZLKPOlVfuBkd3zTR8bZcVswyVkmiKtiFOc/05yvoFvkLtjkrM6k6sOyxZ01dFWirEzCxK6djDk8xI1SWhoSaTjD8UZ37qO3xBktbLXEgdcQk+cZrzbUhTnWkkcBkNk/E5UiPghJ91fe+01/PGX/9hUpxxTvRsrldVzlli2lN8n8mo2mlqBUgTgGmFUXqYBwzfZjEImoxC71+a4RQLpeCjhGZtDk4iRqnY0ZmONhm1CNUyJjPxCylSdGOPT1omB6vSaSuXbY1+M9n0F6HQpGNHF3MxxfPzFZ8TgxHHt3T5urdUwsMYNSydbA9i6IDDjx5+ZlIOxLQu6jtz4JbmTRlmYaGqn0sVhvY1yIY7ZsTTKAs8zpDlxWeExlS/HsY/U5nVDo2dMJwOUE2JgHqzDz1AivqC9MPRR5WQdB4ctKlOavqvQKEKzGhrYSQmzEiil24Zuxk5oYaLaywm6PMBYQhzDsKBsFiQCRGTwO2Kk2gLTK42+oCmuTU+9tU+BUjFSmovQ7mmd/zAbTUMVN3OYWXmvuIS8FLZcnB/DqeMOJvKBhISuinnaESMsE7PpOLDfHOKZYy52DwPU2JrismM9+SHxGiIjQxYOMTLs4/ZJLdKra1ogrtqW5jxB2RBM0zCs4GgsxygomaFT/TedQzVMH+FIt5GD5hRF8IweYl9Cacq8G5FYsz9sa1jffoDPvXRZDGUO1+4v48LiPBr7ayidTmFGDLAj69Bp+tjf7WB3dYi7lSHuBDvyosDfWTqFsXRadRpjUcuHngBqCKhOY2j4+AXBxDh2xWfSymHPpEP0tQJVJI9GK42EoIbvtho8FojaO1uQUMHkeulUaQhlP3tbdfkAOQdi3GNKppuG46+LYepo8j1kGM5u+n5P7xcifQRVz/GN6MtoikSnHXQKJZKTYwMiwZ/jax9VeGSkwg9RYGiEjMPIrvVadWXEJV02Vdc5KM4w12eyv1VDf3kVv33zHdwhzxpBoEYVMaWRYf617ZtUUSBhbSx08QPaq79qsLiQ//g3f1OMUT3izTZc61MS52/v7qJQKBqa1J1t9ZDsgGVPk1JHqKc0L05p7LosXrFQknAkpganQUMjL5thT4djqh5albAiyG90pNT4aYuAJvoGSrXMsjNZJDV5x45o+b2OJtuHmiztYFqMgo8JZwPX7x2imE0IAvT0MDtRHMf+HkdClBdeuoRrK0P8+TvbuHTxDJqCStbkkPCQkZ96Sy7/XrWDXDohBjCNmXIC+aygi9iIEdIcXEUZ8g7lTFW+awf3xNghfR6ZXEmet28YUwXBtepVCUkk3FTlIKIidht35AC09b/XekmMJeXgiiE99MZVMcayM1iuz2MqWxHDsi0GqaA9ZVRwORTv1Wj1BFmSepqyXH1FsjRS9KzUFnOZ26BI6agmZZvQmmvOWbYzl2bxt3/mGF751rt44al59CpXtTrWlrA1FY+YMdgzIxe1p8rLQwm7Q7y/PtDPcay4Ni7aI60QTfSKEWUexWbeMiZnqYEMFZzdlAn9HAejNJwfcZfR6fj2KA0WRq0KEWdBpNFojYJGFZY2epQjXYCB8nGJg6M+ZWg0Lxm+dcW7P3flRdxZ+QC7B1VMCkKst5Zx4jIRO3TqgPoB88fi2F/08cF7NextDjWHttZq47EJC6Z10jIDu/rcRiSXHjQMIom2odwRZ6gtEEE4mvmIRIFZJYuZYgwZHwKdrw3FoYujbXXQrzcQZ2sHm57ZtmC3MGyHcl7Y9rOvlN2xvOz/9r5STbsFcVyzc1qtY7Oq37dNiBnxwxkRVe8oTcAKo17HwAiiaBOrNTS8czSStmFFCSIEy3xbGK210v7AtE+0Dw/VCFIJCeKkmIbhe4QkkxRj9t+8+X28uXOozoj8ZJ7X0YKQ3zf7wTwtxz97YsnSnC11f4hJ9//9D/9Qh5sdyzQAElWRVwrKg57XnAFJ+hqCrvRY24Y4P+YYigzNVRGmygYMBGbuyWEp5nPakczwiBTCh/W6Jlsdy5R8rRE/dcQBpIo6cpFVj8E3g7qGqN8IU1ASvDvsa1sDz1A6N8NsBn7nD7+Hz8yuYfsAgp668kyMxQ1XdjFlwo3q7pagpkX88s8ex4XTXbzw4y/iS7//Ldy+72uFxrBEhNpg2RAP3JLvWtuPY7yYxXghhski+4BClSYncMkn6mhXHmCrmkY6fwbZUuHowHD3k05bvGZNtn7WaArKC1PIVHvNGBoMelo06nZtFOM1rFagNMfM2SXFs25Va1gUI5yLHWBHwsNKKyEoyKwjYT6J+Yi4NKEP0zkfqJgtjYl/xDWlFbzoQtM7piTkfOKEg6XPZTCM17Gy1sJnXzqBJ3bbWN48xPcf9JVKJsF2DEGPU9k43t/u47AjobvunRv1LRkH1RYDrMYKzMfRcUl8PWgimc8oJVEYwQy2v2gXPNk8jWaJhExBpPQdmnxUVKTxtJgzkv22NY/oRYKqvDDUvfS0oVEuYcxo5wU6hB1Dp+5hfX0NDWcZT50/jdtX38dutoHZWkobF2ncWAwhO2osEWLxVEaZHbqNAHcPG/j0cTGG8jYJ5lkjLcnAqJOZ0R1TATEtLuwbizQBFQh65tJbHIAfBsYQuMbRcWCZdNLK22964rUIw+IAaYndlCD+dh9+o4U4aY9bco7FuGWKeWTZ48am13gaQTJSGI6EVZknVeMTGlpuJu1Vicr3IsoldtBbmsQPOYDO3497R4PqoW0iCDsapVNiTNvXfF1D7gz/Tsl7d6A9GxjKfh8ebsKam8bS/CRe29jVsHLA76GYcDAyfZYyUegaOmaqxP1LyPwHNlj/5o/+jWE5jPTQsqmUxKQ5lfWieg5bFJiQp6SPGjWYHo0BR2IckytijoZNayzbE9LvVw+QEmtQzBZ0OJTUtj0JXyxrJDDxIQn9h3JkUQc1cETgx+QiqXiDqFnQH3TQs/JYmLmMWmUXd/ZCHC/N4rnTLTysJ+XZydEU6ijATzzm4ac/UUQmW4Yn4eDseB6zX3gJYa8Kq7WKU5NpfY62eIHewPT6BEYsUb5HQsWKhJ6NGDKki05KaCzhE9sgavUm7uwIElu6gEwmraosrCqGEdF+zK9iry6hmvxZv8uigqE6STBHJoeGyJONfQ+3BlhMywUXo9brpfSAaRdzrIhHFTnEvQpmUrs4m4thOl0QoxVi59AUHKgYzLGg/tDWHqyYZR/1uphxJk7Qhzg5FcOpGTJVJtHa28CNdzs4PRficPsOxo9dxPmzTeys7uGfU6uuz3cg2vJxfhJ4WHWwUwthnKOtYSYjVF47DsC3WF1i4OpGw8qdbe2+d9kuQHrfKIkfRHvJnrwgZmkuyPFMxd2KKoFK32OZeUHTf2lFVgJHqFz7hlSAwoSNRFupbEbzQ7bsIavXf/CnX8GLL53H+aUFvPLtb4szaMFLmHzbUHNhTvSxvob1nHPsdeS8sgFZjCD1EBn9DSMGUG1h0CqOfdRXxQpdYMW1ksZncbSB3dfmTxoVsjGw8dlAcvl8OzRc7rJHsfI4mssHmmeqr23g3gdriBXyeOzSSdXg1WKKvIc1jGNvfQvrtx5g8vQxlB67BHvxjPLlE8qEjlFRpwI4fzA0jJbaOqLJes1hyj2Iwm/L8jSt40D20OpHz+ia1iDmNUc6mmw3azXRWFlTZmEaZt+RyEnQa2PQkFDVQ05C/l/+2S/ij96/g3qlo/c2HjdFqyAy4DGlc5b1Fai65Bawn/ghIazbt2/j7r27UXOc8SpEVVzcTDar+atGo6HGa8CFtA1E0iq6x6FashJAPR8n8OlTYgoB5WD2hzio17TbOUOpKMqRs/8karyMakRRGdWUjHXUwzP/XeG+8m0lNGTyQ0FZEv0Ujj2JeHYCTv1ADFobb22P4+9+ahyLzUP82zdrnDZT1tOvv90XtLCNL3yKclJi4dtidHe+gftvvIZzgjYSk3msCoJJjWXkzzuYyErY20pqP9GJfE+MbgUNgeC9qhgE8XYrLQut7hDxzBSm509rnxFR2UjVWXnnQ1J5VNHzc4KQ4qZrmTDdMzF+yKZIVol6HJuxsSdoMJcaYLtL9JrSXiQGRLF0WT4jhVti+O2dGibyBzhRdDCXSUS0NwFOTgCNniUIyMfsWBztVstUaaNmyL1aGzti+CwJgxbyvgqIvPu9TZQ/fQ7FiTIa+yv4g6/ew5evD/Fwl0ybGS0sOHIZtpoObmzbeujEjolhFOekFZW+Gg1v1OsTEct5Q3n+sKGtBcplpjQapv3CotBs5Jw08aOtE1CiwTDqXlK0znH3aIzF+C/DS6stMpEuoRZimD9iYaffkzOaUHTFcLwjKOb23VX84ud+Fq7XljMXQ3XNQ6I0jASVrSNlGo5WcbomySZLeUa2Zm4ftlDMZPWSO67h91ICPdoR2wj5qmaBohsz7KxtTgNW4oamR45D0+SycpPKn8a80dAyeSaek7ggaRw7J2u/DXdhCedn5nC4tq39S/mJgg5dJwpZeGL0t64/MHeJnepLp1STwMTWdGxs3vK08BBou4SJemisGJ3YvtG8JPOqE6VdEDVnm5RWYKiWndHYlK15OIKTzZX7uHv7gQqdJIsl1GUtrZSPydkJiTRMNMGZ21998cfw21/5FgYdQY8Dk9PWdBGptWUvdMrFykp01NeG8R+KwfrqV76ihPsxw6an83w5iZsJwXkQeEhachGoT8hKVDLiJlH2btsIpZKHKZDN9xyjK8dfNF4Dd6gWnw/PX2SNTLhmmFQTqIEZOA0i7cKRWjIPOC22Vkt0sNpoyjU6DTiFc+JkFgTdDZXKw5fLX20G+O6dEL/0Qhovv1dFRawa2RMO6jb+h6/08eW/uIHf/JU8nn1mQvMFt5cb+NN3qthmmJadluf1kIn1MJbzZHErSKcKOi7z3oMDdN0l8eJTSIvBK+VcpDOyPqWihsHdflsrKeqootnKhHgjdmq365AQZQOpdBKT0+MK2QdR0yNDO+agOhIC1NodzOblsksIJTYMgXjigE2ZcRNOxBJFdPw0Vg47WJNQO25J2CDrXkpKODtty0UNUa0NsXvoo9byTAjuMVdjySVgGBbD+yyK9PfxzMV5/MIXHkfKbmD12g3MFAd4+YMhrq+xKhipdvt9TOUsPDyMy8+bIn6HzYOqjaxlAEUmBvzbili0UtXf0/NCYkHN9zFlwDxnz4solAOVuXciVgT9X2DYRZkfI6OAyWd9KPs0si6O/aF3No2Irs6P0mj2B33TPS+XY8BK5NCVSx5ImHeIrjilVq0v757R9gCer7jyctka3ppRMDnncSbQLby2v4cLizPihA2jhs7E0m66plpJYWZERSltxLTMoLMfGGToseCiw6l8HiKutKq0+LYJ003vsSsGdAxOriBIv63h24wYLVuMr+eY7w2yaTmXBZz5pbNIlcYFlU0gOb9oKqNsZ6AbJ1LkWA0nTWxX8aIRLI5UpInUdXicIM/SOUpW63U2Mep6txUpwlgw/t01UdYr33sd7+9vYUqQdny/iXF5jUuXLiGVKRo1LBrwTg2f/tRP4r8Xg8VuAXXcQSSPxedh8UdQbysxwDAW6fr9oAaLyXbmrkasVKaiYw4jcxD8RQEKquUQZdG7GeUa0w/kh2bQmT9ATiOdvmerleoUGgI2qNR21KMlF5WagW40W6RldjYsxpyjvhxNafF7RnQfUbxIGXsvSIsxmdfLzj/AoeZe0JLvGeL9h3Ecy/YxWYxjrcEDQsQnB43Ea1YR47N5vCOGq1TO4/nPfwJ/dPMd9INjKKbGFdIO5BnXWzwwAdp9B1v3D7UcXSrPixfOqnFuiREISELYCpGRi52KMxwaRqowtnyehGm9A9RrXbkQZQ2FWdUZNNt6eUPtXzMDpn0x/l35/YEgpZrXQ3liF6v1QLnGE6UynM5Qk+pc5IRLLilWX5PatDqQi1oXA7Z9rS+mIK2Dvb6yv8aO8giI2DESssYciF6cm8Xf+5WnEGtv4tXv3MTWgYSiGQfjWQeZhMlpsOw+kQ30+w5aJmnfYxjHUSA6GqXtjZkxDu3DMggrGOzK8w2RiKe1aGP6x3wzssIku+bTAiMWSrm0wOQsbc1+maFeVpS0nSH6XLImsPqoOVWlMnZNe8covxUaJgFPx8JiigyYEwolBKFycdnqoNrlPJ3J5Yn/UTSVKsTEafniLCScFCOdysSRSTloeB08EMfcl89jE6wfMdlqGppoiojLMZffdPU6es5pvv2+r4UAVtbZlMkqnpP0zQVmPMr2Dss6IgrUaIaGLZ3VvJLF3jbL0RwXPzcmDjN/4jTKSycQz5c02a59YLSMthl58SPmizBihfCiZmINKT3T7e7ovKsJrZn79ayoEhhVErmuI/VpJZuIx7C9s4kHG1vIlQuoNdpYKro4/9gTGF84afKxzY4RmpH7OJHL4PjELO42H5n5Sc0LsFLqy5qmlUySOCgXS6sj/oENFhtBKUHvRPNPGHmNiBWSizpKuNcFYemQcuhor4z2OYVmYDmIyuEcDm6TJ4cJvXRc583odTlUqWMXsKOEcGBECyK2Uk0gH4XQLD+HprOYhksOLiuG3SCF5PgpHacY9Fvi9Si9bjyDJ0jHkzj5ew/JaU1upwHWDuPqOXlpFuay2F3ZwdbdLbx8sIO//bfG8Gu/dAr/1b+qySEpSshqhlo5aG1aGMRIxCflGWZ0Ol/fkGfPF7TZlfBhQJUZH2lBcUmJzTNJqilLQEfxg7qEyUFJNngO2Yxs1KCrArQ6RqEDX74aF7JMpMWTWrKxTEPEgz1YLdkPe1YrtOqxYBKnYYQsGIpohwLXWn6OTaHMoyTdtHp6HWTRsZbQTAnI/7s9fk8S//BXlpCu3sR/+wf3BZ1ZaAzj+NPXB/JdtrJL0sCT+3SpDKxKCNwLzITZwBt5kbj+MoloP0JCnI0TdOjXkUjntB/KUUUYx3hUzzgfiYG1Gst9Ng2qphE2IH8WBU3lMnHMpssKcCQiymQ6cRmHcL0wiJL9iJpbTfMk81jDgZy3VERdQ/JAQfKrq+soHstpODZiImCeT2cSyamVYG7Rw6BrIyVnNZdNaGsCO+nf2NjFJ8+e0M82Q84mt6YhpWMQSMiufjXMcTVaFnNCbFbtdjGsVeW/iVEMy4aSL2ZQjWUbvjAiSSei4lGGi5jJAcbHiqYdx44hkS8iNzUHN2VahCheYcy0F1XkQ9PYGhkrRh8DiuC2ukpbY/mjNhETCzk6qwlN01BWLHTMILbOqapQqwEOVAx/683Xlb2VxZsz8wU89tRjmDn3BBLyLAQK7MEcsk+N0ygS5Xz22cdxd3U1omsyCHJBwuqT6SltKC7T+A7iuO0t/+AGKxwRhzHXEpgGRT80LQQ0VkRVu7u72NvZMf1IrknsGqsdTXj6oxnWYOTYlais3qbuXUc8fFxbIOxosh9Rrmx0aEPDiWy4lbhuMS6cq4yb+fK0oBob7U4MyXTazGHJ5nha1aOYgJEV4uCs44oRkQu8V6/jwpKLSj8UQyc/J95zu9LHP/6jAV5cGMeraz1c/Z8O8e+/2MVnrwDvbHjoBEnDk+WYMjaNpsnDjFIG0ZjDSPSR4gfs8qWY6zAmoSrVgTycXwhQldAM5QUkczkj25ST8I6tB9225m988fo9DpPKczPfRM946HFQuo+nHstizS9jux7N0Eb7YUrroa5hoMPCnlGads0Aq2n4s01jvhWNuVDAQU7p4lwOV47F8ep37+CVq7u6hywc7HW1R18uZlz3gyjozDTRm4XthmFHZYjl+WY9SEmiRZnIYBnHxiHdKtKyN6SAYUFmRCNkJvJsDblCwxtjeq4i4RAF5jq3F6hIp615qaFRi2ErSGDQFacOyA6r9EORYzUoLNS0Arvch6QzpqGMUg07B/u4JE6qL4ZypKKcJJEkz5V8fl4M1FQxhaCbQFYMRCGfxoP8LnZaFdwWFPFxrqdGVUOlM1IRWIat5P2KaHX0jiQ1CaY0Na6E9p37Fexc3dDRpumnHe3B0+4034xj0fCyMdoZjXrF6SzkDEsImSmMa7rEXBFTHQ1UjNc7yvEq331o2hjYbErCZJXSE+DRkRCYzZ10DFwLsrYy/2bx7tHARtz0HgfrmQ+OO9HvWfpnYilBV1urePXVN7S1aH6ygKdfeBZTx88gP7WAUBws85J+pmcGvbmlEh5ePn8ctvxsQp73XG4cefncRNdFqRrgIOgizKVQJXkC5yN/UINFo1Sg9l0ibqp+vnc0BsGRGIpHvP3WW9pVzsOUTKR0+FdTDKEpPhsSEANzlaYviEKFSA1n4DPh9mG5k+ECG08dVQ8xVsGNBDYdk6SQDSzh2LlnMD23gJv39uD3Kiyq6gLpaMeQCVMlsTAtFt5Q+0VYXXuw5+Ajkw6unLTx+u3QaON1WBk5jordFO+3gZXaBP7Hbwzx+HwNzy9u4J2d05pcJzunIfeDdghbEf+SKSvZBhWEhoLDisYtOGbDvMP58j661QZubcUwOV1S8xGXw8Uj6CZMIjqLQwl9elivuhjAPUJOQ7+AlWEaRWeAj50M8KfXeqh3R5miiDdfVVUieUbH8FBpmppr646YME2DotKayHPPT8Tx7FIcVx9s490HLfGMMRwr+uA4+X4L2tipzK9eiLki2xgsvLcuRgBUDAo0HOR60+trQ7EaHCuixCabwZ4gNEuMddYYEzs8UugeVSxHjAChzspHTisw9NcmER4gn8+ayQptRjYslxyyZ1HD9JRGA9Pa02ZGdEYhIfuqBk4/mkYwyOuwSSXpAWz5eS4a2TtteQfqUCoRnqxsIptSSbScvGvWczFTPI+pXh6T7ThWdt/XC0syBOVSJwcbw1rHFIIinWbt19Ih/0wGKTFa5O6yEku4+7s3cfPGIyw+LWHTiSl4GdljegD2upGUkio+fgyZQQIpcark00+dFQ9yTn4+LWst7xSvtA3FEuP1aCRnxLDA9dD+Ow6Ia+PtAP3dLXR2dmHLe8WzOUHVJVUl4vC1QVEmhLUSEl66pogRRk5YMzOyLtfffVfQVQNj+QLOnVvC3LkLyJYXZa3y4mgbuj+xRFZ57wPN3PcwPjGhegVTdhqPo4REPcCeGNoNt4mmIM6VWtU4XueHQODHxWYVMEnoSbn0TtN0zwI6BsODsb0lC9HuGtbIKLHMEnQ4NIeWIZQXhQiOJiFN+DSSnrcj1gG9+0eUsR/mqlSIm1Ql7PnQeUKGTrIIpUXTayKGiK0MXGA/IljTFC7phnVMhCRw8qyDNuLJPLphWp65gcmJNBYmM1g5sDQ5D85aOUlMjpfRawoEj+Vwez8tXq+BS/NNrNUyqLaTeiFV5IINlI7J4xzFq5ZpYR417Q04oBv0JeQMUEp38Z3rPYTJebQF3XV6ZrKfebQEWUzlHfvtXaBfhZPKyvPnMcIiMc51WRks7w9RzLRxeTGFqys+SO/E1gUtSRhyA5NEjQSydYCfa+zbyuTKKiV7lficFxeTODvp4ZUbO1ivBEjJd8bEeTRZhXQzMI0iptlxXqKXyZyNh/t91DuWVnyJTnrDqGLHQgtpf2GorjWsGxzKQQ3lc3NK0mhFcmsjcUmDRs0UxKjjWuXWQ5NT0X/0oBVkDkhTxYfSVhHTiemNc4iu+2r8OcWnZfPgL41JRC0R2mhKmXvXUB21Oj1NKrtxU5nkQLt2oQcmB5TqJ7CAcZBHk/OgE4UizjbnkdwNUW9RA6CEw2IX5XjK9HtFnO+WPTQd4r5BeDHfhGs6YpbJoXRiDIUzcUycP4EH/+JN3PrWXTzK7EiYPY7Z9LSgkATEviubbELWgWNaTJfHwjbcb8tmF2SFk4KQyBdHI5+XuzUnrmM6CX8xDX9MQtecGJxkNGkid7a3uoW7L7+Lnb9YxcSShLcfTUSd8XFSsyp6skZ9W9GomrKL2qYjnyhN50sPttE4pAp4BtmkjdNPXBbkW0K6UDRFBjHtdCoOq8Bsq2DVkSIfcjbKpSLKfcukjuR+7ggEy/UszHSSWJd3o3JRJfwhVAk52Hz8xHGkKCIqfncgC9rzKJ5YV0NVqVSUZ2hED6IoyTYpekJRMgWoVBFzVgpRQ6MdaE5rNMnvaxWB4yFOGEYvbxpCTZztaVNds9U2VRyBrwmd8umh3zeVHw2DAtMEabw1O3CHypgYsgeIzBgDjqfIhWOeKTOEJzHPmVmO2oQ4aFhaGr4soeJu2sXmzY58T1YuQArLzSLaGw0sje3h3LSEZIdJ7DTzmqhlP05sJLEe8XUaWmiDxAopTzbXx3z2EHfW6qj2p5BNyCVr1SNhTPO+rGDtCIL92IUpVRp+a72jc3+spBhCPjMhSVaEb9/o4LmzAZ4/mcK9LR+PDgx/uhHHDhXFGH1GeQZ5DlYDh8rgGarhm8kncHYu1IbIl6+2xOgRBSQiJ+EjI8s1ngoxmQmUfXUsLdhVlrUiKHq/JV4bSUWW2tQYTfQ7rqFRYejIkDH0a7KXXTmsGSSo8KzVRRPC6vhKlNtUsQSYKrCZFrCi3jscGaZCLms4z5iEd8y6doaRBFjAji9P0xaMHnV4OhoFG1VoRiPUhUJOjJ6gyIGj4iekNBmMWGrZCEp2znQCF+Jz+HT7IhYb08rB3w1kH+Ry5d0cOpmWhIRbeBjsI7HdFnS6ICGvpYpKrIBzTIfhmFwUg6945tyoYkgEmrI1dMzMT+LUP/wJzH75DJa/dlv2+xbKU6tYKk0jJyF/3k+KsczISqeRDvlLQjLfRawequH1mHtzBwqs3HsM7w+16ugkxUnG+hjEPVQEjV+t7OHRvW2UB3mc/vzjKH9CjGIxqQaVlVQ3EVNTr3xuEQ22qa1FzdqhCdf7nTaufe/P0WvXlRdt6fgMcoVSJB4TN4Uzuqt4QkBiTCW9yFdG70FQw5GgPdmggdXDmSCLoTiKnhyIlKxFRyx03Q0MVfUParCIgD75yU/im199GXv72xJm2XogtXQZBirnw14qarc5yiAaoaZwlKO3Io9uKI+DaNRiVMXROTNWB5WoDKZqMkp02ebg6jBsYIwf2/d5OMk9PZTvHcRNpYaJUp1aj7ri+YNsl4gnQmVjoE6fYw10PCCeLmK95uD8TIibqyGm0jU8OctkOZVFkvjEU3m89eAQDY89JRQlsFDrF3Fzq4P5bhPFVBtPztvo+gnUBmn16I4clnZX5Xnkz4c6b5h2uziWr6ImXmV1vY7lSlI8kjwLKYnJoa7T7zoKr9XGpek4xmJUh+7jWNnFjdWm4XePEAe05M5KYww3l5t46mSIE5McmA4FsblizIB2D0dza0RVYdRBPl2OC8JLIJcYiCHv4vZyDVuHHDkyFEHa0iSXM+54uHAsJYiaZf26hCLAQZeCsKHmBjkIzrCGa94dGG53/rtrRZVehq9EiF4d2WxWEFbKUMVEze92lCowdNmhofSNRm9GfT9BRJXMn0kL6izl80pFY9A4oo7rUBlCuv2hqV6HJlwk7fVAz+aHKsmIhtGL6TSaDAXp3BgGymcUmsZQpzMpLCbHMZUoY6qfxrDZw3X/Jrp2G2choU/luDy27F26h06ehAkx7A9SOLtbQWlm3EBZ+4jlJ+pVtzR0da2+1jr5ugmebzHiqmIuyDH+hQVcnCvhzNfFcNXeQmvxAN6laTTlIu+tryNHteiej0RVUFbdRqwl7z2MCeKKKWsW2+c9q62MMEFKUG+/jU44wPLOOr5/Zx8n7Xl88lOfwPyvPoHYKfKw9xAMetrqY2n/W6D9WGadohDdMSjYCyLqJlm8e++/hbvXbyqLaFYQ2dKpRbSqO8iVJzTctBxS6YgNSJeUioaGzOvuKStFo9lEquVhzkohPTB8/xXB73uTCWyJsW+E8tx8l4H/w+nDOnv2LD73hc/hf/uXv6cHkOrMnCjvMznc7WkoyAYwGi2OVoyqFFYQNf9G4wk6JxbtqoKhiCHA9OpEOoSaVR+lhGz9PC8wL+JE7RLMm2k1SZtL/Q/Dx1E6SbnFRpUqT5O0HXmdWMjmNYGfqTzqHg/2IQryPu+sJnBtta1G42QlJh6ig4vzgrrE4K1UHXlnK2JgyGK1kVUZq7HWIRbKQzw2OyEIRIxTKAZukFCucl9nI4eoHdbwwYqH5QO53JhGKl1QVgTP72n5lwY1HHSNrptAfAql7sdqaNVrAr8FKfQE5jtRAtcy9G90qWygHAxT+N4dUvt4OC5h7UzBxZWZAJVhRgkCmcehgadRn59IYDIfYn1Hnme1gQ0J/9j9ztxUPMGLZCh+AkFf5YyN2YKN/Y6DO/um4kckM5NpYqvtaWmdlTDuuxdJUjEPYlEpRUIAT4xVOKwgl86Kc0ub+cf/i7j3DLbsvK7E1gk3nJvDy6FzRCM1AhFIgARBiJRIKhCcsaQZUVOmRvJM2WWXPOUq15RnVCr/m5/2cKYmWtSMZbFEkSqJoESJFEgikACI1A2g83vdL6ebw7nhnOO99nfuA/TDVS4PITer2ejw3j3h+/a39t5rrxVDJePeHW9sfCCNDqJDrf/DuTvT0MNUtagGCWPVuTIqBZR+JsWB3KpwPFBUpWlv7CKMuKlgxVplRPCFfFGlhcORKernqLkuiHawPVCKxr3VZVzsn8BCcw61qIZ+XlKXnhxOgzzmRmVBGHtYs5tyKI2Qk/u9kFvEqD/GfF2ed2ENGS8V5+Fxhy4ueZj0mFQrs3bVBciL1ItQzcnlRkcPpuQaZvHAi59Fd3MDdbuN4UPUofZQvf8uVJeXzTSEBNuhZDQD3nfKaMYz9g8ONuCWckpj8LcEVMjfH39+GQ8cn8bC3z0P+8kpBJzl49hc0iiN2FqY5wjbMKY+mCZCOFEFgjkoiZ5312/jjR+/oqiWPLL5pWntYFP4cNjaM2TX6qJkWDlt9lBVOBgYn4AoGeLq2rqsf18C/BgFiRG7sl/aEd2GHHQ5AiABOCKxdvRTNKH4hV/8Rbz8wku4/s41WYjsYg20M0i4x7oB9cxTGU/SjPYhb8NYO/EMHcWFO/uQGzaZFdSNEvM+EkwJ4tyZKZaKucVyyjowbMXoQRdCbEYRD2j+TddYs+g5dEueUjIlGyeRljSgr9pC42FHUsU87jRaeOp0Wx4l61gl5OSOa76NF95p6DVdOD3EECnstKEdDkJxGp6ylrQ3SKO+E+Dd3R6eug84M+fhjR+tYpyoKjFzr+PIgszKoZFFMu0iz+JwLJvCmgcLokGrhaB2gJAcKTm1bu17WJJ8n7NhqyscDeLIg3wwLb6zcuoTyYTx3TFwSLrQldP38m05geXFz+YHqJblJJZj4cKZAs6dKOL7L63j7VtbeEsQ6dYeA6OlXdN0arK34ncgz/W0oDW/G+DKxgj1flodg3jPpexAkMxQbc9oqMAF3aMSZtytcpkOksk+OJBNvKPGH2lBEWo0C0MBiWL9qDjPMDyfCQ0B729yOz6oTF0pqc7KY8K6cNLIMb4A7Dq2u704mNuxhpbpEjr2xBk8tpST4JZJp7RmyBSbf1oupLRBcKfdxEy+hOODnNxTS5B0GuVWRpBsDkf7i3CbIZphAw2rjTtoCdrxUJA14NVTODaqIC/PKXg+QOvx2xjnM4qaecCmQtOtcyNj9W4ydmM64US2Si2F7tiQOxl0zoVwegEqWMLUdhf9P+nKAZZBdHkL4dMe3NNlJGcXkC5K4OWws3pZyhqXNey0e0jLNTvNIRLli8gn8kj8kofx2RSiI57ZLxTWixGtE3fjw1hK2yyAMKYfRbGag4YsNBv7eOUH35Vn3o/11STYFzLYvbOBcrmE7VvXMXVEd6+s4brqwVtJQZB+W7OHhhzI1156A0tdpt8RdtIB6qZTAZ8KEhypC40PqPXT9CWkKsNv/qP/Br/7T/+5qn3K0jezT3Hxc3pmRh9Mp9nUVBGTEyaMY4llxiucWIhNG7HRpPaDmBOd1Al4bW6T9U1HEiuKU82R3pjqlgemM8OFEQQT9GPH2tQTRGdeBFPXZJqDrHlZsA2kKQQokJi/3+9lsN3sYiHfxvp+1gRB1jpyHq7ujtBdGePpe4f40VUJWl1L1Qrs2LSTmurkHI3HsiASCew2VvDmHQu56oJuBJ7mbN9nDlOYkaaB5O4wWGF/F+PtXUT9jkl34wDQoI5Uykduv4tGPx5klUNgUBKkMSVwW4Kv1nHim03EHS3OZ67Wk1ipDbV2dHW9h7+XCCQNAtYE4bFPwU5YIpx05ax4RtdILJ+ecbUpsd0McKzi6CiPBqs0x218rHfMYmIzpUc12XFoOGAcpk5wgL0mgWVHR6uy6YwqwLJuFU3mQeP3rWc4y3KsnTtmRnQiHaMDxLBjK/oQC1UjA9TWQBMqkidrnbw98u44d0qJmjAOCOZANHSblBwSwcjIq5QLaS3qcuhenX/keqYlzdzvDdDp9fEb5z6PTM/DjXBNUCZrY1X58w6aqQ5GaXmeXRd1QUr9kY/lcQknoilMR1mtnb1n3RTEG+HUj3N496GWpGW0Yk8rpSWM0opyExN/TnxAKidFF52R8rSUWC2Runt3CFeukR3J4rCIqVAC05ocmv/6NoL8OiBpfejK9UzJAcG5vCHNWmgYkYNzYRr2PVUgnwb6PYxm5LOmkopaOFXBg5ITCurKFJhOOptBDCrh2NiKhbGIItOfsaLzAZK5BKaPzklW1YAvzysvGcRQDlha0XMfqcCOrNnqaKSW9LmFYxhJsOKs4VDe11+98Cp2X1/FSRKt5Z1veWPNGpgtsS4WDUY6hkdwk/xpC/g9+tij+MKvfBFf/TeSGsoO6AU9xU5pgcOlcgVNBqvg/fEItkatURiPL5jgFMQdmzCKKfoTzGUbSVjl8KiNl7H1MgvRfO2ET6S2UGSTT0phE1ExGMmKKA6i1IE3L2okC1jQSCcNX9BVijIX4z4cOQne2uziibuGWKxKqle3VO0xcD3MlxO43sjixUtd3HVkgFJ/Grd2An3QSujTyCjXKwtnd6+HSztdZPI0SzXsYhOsx4fD21zcevrKy472JFgd7MPyewY5BPHml2DaP+jg6LSgFp2XtHW8K/LlKe/XdBI+rMgmLubV1syNUywVCyQsd+LgJeluQxbUH3xnCydn01oH4uiMGeSBGXeJjO0YT//7jrgShEZ4R5BVIe3oyNOAkh/JEYpeH1uNsU4DKD1Eng/rRpPDweVpOm5h1N1SYcJ0KqdTCZYVF73tuGNmTjAdyI4M3z52momF+Yg8QqNFz4bJkcVZzFQrqEtaPdQCu6ssbwYjyq7s15uGdEnayzhOxTjqEbsJcbaUzSF+x3I1g353aIIVjHdALpvE//mDdzFTzuPzhUcxaI2xMJjHsNdEM+rqRmz6XXTTIzTlPd8Y7qBIjTIJaFMdD3NhHrvo4q3EttYv06GD0k8s1O+Xv1dD4IQeBumUNVHt0oPajRsK7Goqr5EjOY7xv2T3vHkPdeAF/b0rAdqX+5HDI2MXdP5OndG5uLdGRiO+InvgaBmYzxlS3FoDKAhKPiV7oJjWrreOtal/48DQHDinquKH5r9J9xnr/KdRqdW9JJlAT9BrplxASVDdR575BTzf6qLeuqKolyqjPFDI06Lbu72zBYlgmD9zQQ4tH74csHwlb19fxyvXb2Jb0s5dudcdgg0npyTltgQ0ZiIKRlT3P/rpC/hxU/zcZz+Lb3ztG4JWepO6uUZWSgAXUcAqIXcsTctUjgOh7FSZmrEpxk+I0YbVzdEAx3SJrDCudgSHrW9r4orLIh6iOBiphKVZCOGk9oG/MYtlxwoPQSwzkpV0NS2oihLK6QHTRB/prGzsbgatXoSjxRpub2WQyRbRHXkoeQdINEdYb8pJuhng0VMtWRMebu6ZGVErJrZmPBvVgqRwGwLZvWpM4DSNgEgR4FgDCtUaNAWUlxs2G2ZAOJb+ddgKDoxPnY6j6GAqtChsqaKlkawNBQ2GfbkfyouUq4i8tJFzCWMVC7WUso2JgKSye70x5scOpoou1g4Gh0quHNgdCATPeA5OzybRbnbw3hZdhy1UMrLgI9a4AjlNh9qB7fQnoY7dubGkuUGMtpJm/q+7i5SkKGxfp1LOYRfYiuVaTEnTzKdRrUNlYixDSObkQxjPBqpWvLy0qUoJRxcW0Gx10CX9gPy9WOsql8uj3pDFPjC29IbrZugXkRlcVXuxIC4nZLKursO2HBSuY+S3WZh//s07ePndVfwPv/wM3lt7FwU5zNIDCRo9B/PuAhrunjzXphJJa3YNLddHUxDWpuWjlu9ganQHTTn49t26pIhpHOtnUYtcTF120TneQFApKLpiCpU0+bAcQlHc7bU0LeToi1LwI6N1r2UMucSDe/oYF21U5HvZe8bvgp3FKOMo58rx3bg4LD+3D4BmHahKCnjMQ/9YFpa8b3oZKmoijYWBS5Ap1T9UH41TFLL+qEjKIMYxrpDT66HRzBrIwZifrqKytARHDnqahNz9+FPYWV8zM6GBoSrxxBrKYdqOGsozY3OtI5lDIGtyV4La7//VC9jebSKYzqMfGgJsUg7aTrevFCkujCE7qZZx7Q7D4KcbsPhjbm4O9z90Ed/+k2/HlkC2wkTP84yDRjw4ySKjFYdMleZ3Jh0bW+fFwokdlZ61Y7V3UnKaaxZ8NDF6i1UndV4sNkhlOug68QhIEB1qfkcx58Zo95hrUyE4Funl69LZnET2FNryQtKpnqRtafnpSSpXwzNnQhyrWlhr5yQ2JFAoUA55qGhut+HipSs+Lh7poXi0gKs7Oa0PckPSBHLYrWm+T2NXexKsuDi4SGAkRMYSKIP6PuRtaRAiC5/aQsPQWNDrYDQMc3ss1+8zoFkpXfC0kQ9izWW9l4OGLsSEIJDIM3pPOpeqvAbDxk+o+4qnyGm+KCiwmdLZvZFKIgVYKCVxbtHDtY2GpI99zbW5BstZB3udkXZ105Ky7EmKOI6dTXpy0+3h+yeErTNxLdUGJ9cqlUwayeLIILfDE0197EztUblxiGfcQtPtmwjD0XdwVlLf40eW0Wq25VH1lBOkHWT5NpTF7nZ9Sde6htTo4FAvy5ogFuUOJnRDsSEzPVuUACcpzEDnqjRYkX7zkxt38NGL5/HZpx7F8197GYu9BRwLl9Ef1uSwGGnK66cDnMA8UmEZ+0EfHa+HipsRZGFL+thWEckepYDsviK9oazxjqRD7dUePicrYqlciuWrY9Y3Yt1yy9A56BDOMG0J6tD5Q75HpsuyiFonh/ArfRTWBWFtusg2JV0UlIiOSUestJnBjFLy3GYd9M9LSr/kwZHf2/4grvcZuojWTtW8YqBNCo7PhANfU75AgMdAx2kkdAz6+mdzJ49h9tw9WkIgNWEsh/DcsZOYW1rE5q2rupWZyqo5jOx5zmnSSJW2fuRDDmTt/ds/fxFX12raoEunQ50e4PC1L//G73TiEpCsFX8UZ0nGzfynHrAIt0+cOoERzTVjVxO2LVUHyzbT9MaMITCnRmTE/NhZmlj62LH+eRhPjY/CodG8iszHWpNRnMOpS7Py1bGFObidMuM2g57saUOunFAlTEo5ilPIODUNzQAsF2suK2lGbR2eLPpUOiuoyEWjk8C17Q7unQ9xpyEnqZ/UDZeyfQyQ1RrFQdfDj2608dCxOp68K4Mf37TRGljIp8YYSOoQ2tPKxzIy5qFqdo/rda2zaate0JXd8w3736Y8bISe/Psuh5YpzK8drCH6+S6aU7Jgd9Py/VNKtaCvX471sCDe7FyIjbYioqgQ6cAqJwGcfF7fgZnQN0+N9uMPVBNYqQfYbxt7pbMLVDIN8frNGjYOfJWC4QluuabrV/cjrX2ROtLSWpajhe7uMDCk2ZiMyiFnbgTOklLZk3pbnE4wxlsmwIaj4JDRPoolg1x70kgJzcaiyqdsskqliOWlZUlHfJV25l9xjpXrJEemu3xtrdOK01GjTPp+t8WgQKqMkggZmMlk2UgOtu705fkWtNSQyXloy7sP5V4eOX4Urlz/gz93Dy794Soy4zr66SGujK7hpVBSmaCBn7ETOGsfw05mGSveOqbTFU2fUnLINoeWpIkltMYNJT/qFEeS9nMZfE8Oq4d2D3D3TPVQ7TuKnXFsK5bC0votuYLsGpsD1lJjEkfdj0ZFYL8gf3+iC2dgtOKTA7LqOaojP3MCx8qSFpbSsGlgahnSNdGlSvOrQ3Wo6DTQ2q05RMc+Zwp7WoMa9Dv6eyoBD2StnX74QWRLJV3D/JpAArC+M0n/Fo6dwO0rl+V6E9oQ4wHFx1xdOgbqR61fvyZBb4BLHQuvvHoDZ/NLSM5XsNbfQWvUlOPTNYYd3NoJR4mv7ExzgJ3E4g/FhEJJzcmUcei1jXtzba+GlcQKTp86rWnBUImkZpYqsicByzZ+bfFFjWPF0FFc57FjrR7+masyrfEs4UTXPYwDllrXG4cXyzJiYhzMZZpDNKUSOFH8oiJjCqEvkfWPdFqQUwm9fhN1ifJeKqMOKBzHeGNVUqRkB4vZoaSJFqoC6fPbNdk8Ix1uppHIUJLeH68GODdu4p4FGxutAmaKCeztGH10M4hsJtJZ3O5ISsNAzs/wOHoAJ1YvsJC2jbt0JeYdRYMAPZJbJRj7wzp3KpxhAmVBWUptYJoWGdRgcCm9tSjp09H7npuehisBS2/fMWRJ4g5/xAK6g2kv0A7bctHSYvVrt/totIeaJrGmxQ1eyZk6S9e3sFCMcGvLN+FAPqopAWQUmvRKndFdRxFWUk5fzgjaMdHX0Qc10rpMGA+umzqVGcLlZmR6zwF53ktoqY8LFubn1IWpxwbD2NhSkfbBU9fzjEMQJYxIVqXJbhiL+IWhSS0PVbPceHhevj5XSoDlNsdK6/oaDKkW2xFU7OJzJ57Ejdtd3Nqv4b67TuOr+Vfwvd4NQSwSJATG7A/qcORrfxKxBtNEqzRCFy1syBFmpyi2mMBQW/iCLp2sHGsekoI6Dto1XbQp2dQ/7LaxtnIHzxxdNuaksTQLmw1WFMVMLcNLYxE9ktRSOVA8Vei0Qx9O/qs0metjjIiwbVNLVAHENGkjnlwPM4WUEdyzo9jKy3gNMnjpEDLnKeW90zZs3GmrZycPWhbQ19c30ex1cOHCcVWU4Nvs7tyWoJjGSPZyt91QUnU2l9EmB9NJZh58cwukXMj7vfra63ACH1m5hrtP3oOzSxWUUNH9SvJ5QdZnOVmBLwFyvXEbNb+jFmE8LDmjGwXvjzP91ANWGBobLrWZlocWBV3s7+4LesnJTWU1YEWHCrZWLLEaHaqVam2DphxM7yIrVo6MqQgczISDydlp4f1TlCeyq8OaaXlRSfW/YxqRSLlGFjcufZmivdkIiCf2KYZHxjUpDoVCFQd7vgSmJjLZrL58hgB68P3iw1lcafSRTSdRSgXY7gSHVAkK2TIwXdkMJeCNcHq+g4Wyi40NWUxjM3tlTYaMJUWuHDuOUlsQQb1hkGHgqrQuA1WasrexQYOeZHIy9QSNLIYpnMl4aIx7qm9P9j/HhVj64dwex2ZasmmpdmlJMCoU5ZnPVLTxYWpKjjY+AuXaRCpSeCDZ5Zl5G7PtMW7KfV/d6Gtnhl23KCYscbEUkiPIrashar1DE49QO30Nge09nvApc6jo4iB7XYJrGFMJdBA3MhIlkw6mKedFcbtcedQ6WJ2kcWhgghmDV2W6KEg1iX5snqv6acOh0UxjF5BSO4IAWvITVtxUCU07+LDjGdkxIA8NkVeeb/VoFd39gXIH2dFmEOOG/Duf+QyWZmbwte99F195bh1fObuMLz37afzzf/17EqoGkuIN4nUEXLN2cc3dFYSbAlXeCvL/j2XPqJji5eQ6gtxIFTzm07P6czu5jXYoaY8rQVdQ7B0JCH9S38YvJBdl7ekQp6RmjppXWHIEquQK61McRNZ5PkPTsDhIrs0r7hFX45AOQyfMzKPDgWpZYwlZpwxUbDYYL8HIWHHxo1RGZqBE0bG6XsthIEh/2GzKHu2i3Wpg4/Ya3rxxE5v1jnZjf17Q0rjfQ237jtZ4O82WFuDZFfSKeXiyXzrNgUoJVebplyAZwdZNTJVkvS9PIxJ0zM7y3//iZ/G1v3oTo6CNlC/v3Zc77uzJASdpf0pS12GEZm6kCHosqSg5fGrU+mEELBqkOikH+UzBpIKMyBKtt7e3ZXEkjZRtZIh8kUqemNDDRcT6AeVdfSvmVX0A1TOgBbHWtJ6aVhgHvsmYgPmHCeVVJQ1iUzPGWLo5NEV3o6FtamnG/YmBYajGDKQb5LIFeQltdPstQRlNVEtVWUxZbLf28eqtvixmG9+/1IXHIKtKApPGtCHUcSPttj0Uiy7+/qOLOHNyCi+90UFfkBuDZsqh+UVOUr0MDhpLGK3vwDrYlZyorwvJsdm+FmTCQF4uCrT3YAkay9aaWKgOsbxcxOleQa5HkEV/aEw/qVJJ8b/IQ5VkQ1p8Zz2kTx1DWCwgGnZ0pMaWDVfJRSptSzhfSFh44oEy5ioZ/P6fXcflNV/RohMjwcnGdGWTJt0IQwlMA1lAG7WR0jN6srDaPkdAUvFUoxkWTyQzinJlHaomODuUQ2VOCy6QNTCKAkycBSd8KwYjyrbYZqoQebngghxwPJ5Y/+B7p94Vg60OXTuOUmi4SJoSQCl1xO6fMVq1DjleOFRBNxQXBtByNSdpD4N2RlVwuWZDeZfzZ6v4zjuv4DH/DD7y8N340es/wTf+4jX8ys8/jf/6k4/j3/zopbjuGSGZT8kGdcz4S9LVIJrtp3EmuSDXtIXrksYU5f3Rl4A1xX7Sx/HRLNJjD/tOF3e8VawnaMA6wte6G/iCPYtFbwYuNfep8DA2AoA60m9r+dko06oSSqQHCgMDNaioIZaU9ZTwsqrYSlTlOrGske6ZUTzjO9KARZVRBquRBquO0gz8VhODpvzarGN7cxura6sIhl2cOVLEwlwWt1dW8Md/9Kf4/C99Fn5PgtbGmopqkuLBrl9Z3kVaDtN+N4litYq1O03tMp6WNZjJuFpQj1xP38+pc4u468XrWGlwtKmF/t6m1n2HAgIy/QhPdEu4WXDwHmdxk5EeYmOJJR8OwooNNSnct727reiqmC7JwugrjHcOmewxs1nbt/EwqGNURkfhIB61sOMipEFgIYwVvZ4ath2TROPCbHyCcu7NVbeRSKGvFUvnGvvrMC7AO3GcM4x45skjJY2m9OsLxYpE/yHqcgJSpob6UrzuNyRVqshpcbba1LrNlYOxUWe0rUnjMjbM5TiQi/6BnLK7O6hvt+UeU1rXoZ5QqVCUIFHAtGzIXiGD7auS7uzL17EzE8ZcM6KTvq9aSPwMWfc4Pp/QVnFGEhCHKVjMWLeiWKVAx24kQAiiSs7PoDKbwfwsT9UExe0lbRqovhW/Zme/qYTXzKt1QYNpNFph7D+Iw9lDLTQqrBmi4gG7kkPdroXq/sJuYK1j2O1sKOhBIIdggp0qXsvYmEEMI6IzV2WAiWap99/sdTW1YaPEjCjKohSERgmapE1V1pRSQFRYTiV0jGKsNg8SxjmJqJhzaj3ayA+NhZs2kK2YdKoFbUN+NJZ6oRJYKds9GtPZuqdrki7RlDN69OkHsCv5e0+C44s3rlGxGHdNz+PdG1uygXfwiU8+hf/rrVf1GdqC2l2PSp2RXo9FvXFB0TtyCLzRvIl6ZWAcasbG9KInz2I32Ea/kMfjwd34aOoCbqQX8e29H2HAyQb5/LfdNKZbcr3FUHDaUHXrJ4IAsPoafEMXcdoY+2ZS6SHJkS5JOfNZHdJXqSfXdNjNPUdqMaZ1p8A4PHOagiNgw05TTSL8RgN+vYn2/j5WVldx5eaKrNEUquUspqfKOJZJ4p5zx7G+38cPvvNdXHzwHtRrDa3B1uUgZUpLrSwSQ9Plquz7tmZT5+97AAnLNyUXJ1IC6Hggh7pkL+c+ehyX/uQnag9XptmuPcaW7YPViaIf4czIRj0dYcXua2qaBD6cgFUpV/QCubp+7dd+Dc899xzevfSu5tFs35u6iPGNCyduN+TfUJUgnZJg5X+QlG5m0IJYhE6HV8fGsPRw5j5mLBt+tLzQlKKEMJYiiQ6Hg2MzUUVoji5ird3H4nojWfSjlC/fOyPBIas/O22aQTQwr1pKrpwmbbx6M43ffLqAcqKHF1c7snGNjhMmxLrYQef2zgD/7s9kUTQ3cf2ghFS+omMJRHzppmyc7Z6klm2tB50778Dfs7C24qLRMPdBS6kxa1UD40Q9kiNop9bDvWcTuHxFNnybpNSUUTBwLB1epn5RupjA3LEipk/KaZbooFYfYmN/iGZ3LClPoKMrJAsyzjIVqtUjXLrdwdtbZp5zIpVg6Gom6M9mx6hKnLjUGMEfRMps3m8P1HyAaQjioWSe9pwaIOKiSKK2V0JzqORpAy8nbl42+kxG0m5JhWGZDUkjB9rSp1NuPLZmiro0h9Axq9imzYk1r1R3XlCEL+koO4N8v65jyhAcMJ4cYJr6WzgkpqY56M7yTc9IDbFlzy7Y4tlZ3LpxR7lzNGfxWz58eV7XxjtyXR7+t29+H7/7387i2Y89hX/59T9Rbax+xzdD3gn5mpQ5FFuCYFbzLSxOyyYXJMlnVZD1tJSsoDB2MJcs4zQWUBx4uNc9gSOlOblGHkpJlMIsCrUEbt+8ie15mhGHhxJAxuEwULFFzRKQNcar7O4xMI5cjCXQRomYcJqkZPT78jyUflKtfxV+lCBNVNWTdE7WNoPVsFHHzvom3r56XT5jCC/pYKpaQk4CFedbM5WSmt8+cPQE9g4auPzm25iZlkNdEBbtxywJQuneQIJ4Wp7LAMvHT+PEPRf00Bn1elpDJtdr0CW/SvZMZx8X7r6Ir373++qQxXTY8chtk2uT9O9GsoVKlEBWArlHb4hSBmN/8OEELKo38Kmur6/JTc3g17/0Jfzv//JfYlUgJVO+pLw4yqpEsajy2DZzQjyNOAjryYvKpOnMbDgYWnSMddlNwDJF8kQi8b5ESGxHpRvdMW7BWqugvIgsaBVzU5uoUZxSGgqFsYSPx0/IySIfygk0cGazJU0zhvKCD1pdFAn/5dzbkxPlubey+MdPprCU7eBKqyDfJxkLEU5kf82YRdd3UeHcXDenWuWssXFjMRXuBXLyStzZ741RsGqooIl7L1bQ3ehicwuyMMz4Aze0axu0MXNkDicv5LB4q4OVXV58UmdCB7IYl5YymFuUgFWx0XQD3No5QK1rozNMx9LHiJ+PoVeMYOpAWbKqE7aiOifuqE6spwIdkO7h7ulI08D1RqDStnvyPAI57i0ncWgbz+/PlICnvm6qkR8bcloaWAqShjkjVwPRfLUoSCuFVqevz4rrwszzx12r8P12P/W9mSaTo0XhQh4uVLZkCkaPScOpmuhomY6zHmCRMdiduG1ruk3kLV+nLfuxmTtNV1zsbR/IRg5QXMxJXuLK5xjUvdNuoS2BbYfF552aINEpJXwmIqPHRmTpSWroZlyVsKaSruwwnA1P4Wh2GU7VQtmSA3DgyLp3KW4PX5Dmen9HN/mcVUUuO4VEP6M1x66/i/nxEhZWj+DS7LeQKLNkIin38H1yqaoxqImEocSoBh3JngPWbmV9E5nSzyDhxIbjxo2a/Ch1YO430W830RNE1drbRfdA0tOVfRy0b6ErgezofFEObxflUk7uj/OkNPKVoFUu6/s8c+G8IPgcVt99V4ffU+q8FKp8OUnDx89fwNmHHtG0fdxvISX7SKKp1sVoIsvnH8n1enLoPX3fR/DtP/pzbKeMEiknUHxBVZxDrvTSOBVlcWAbRYh0KvHhBKxjx47hyLGjuHHtGl548QV8SQLWl7/8ZXzrW9/Ca6+8ovUTOzBdoYnmFbWYVIGzx85WC/OSM1+XE2Aij3Sow229z4h3Jn5osYLYOIhZXewSaV7maPrYbvkIJ9IqUXg4CKGnsSzocBzq/JSq1ZDenRzrsK4RIPTl6wP0xwJLm/LQ5DR0HUkF1xr49qUcplLkTXUkyJXNKRIyIMRcGPn/HC2bKH1rf2Ami3UvOUUsNzQuLoJGOsMZtIYZpJq78mAPcP/9FYkoOexuD/TltQWMZGeyOHUyg5HfwtlTOVaQMFA6RxJuToJS0cNqvY0dWTQ3dpISkHIakLXWGsQyiZZJ+yalP950bxioxHIintFTZYR4yIDBJeV0sdEG3t2M1By11m3B8DsTWl8hOVXn4zyTjrB/FQSCVkdtDUSWBEPqYrGAOltm25+uPz1kaAVXyWnaM1YEaWY71dwA7HqaTmakooty/axrOsoBR6ffU6RI0wPSUdhOCOjlh9gdx7Vjj0xb1wSXA6WyyLJn57lP92+mrBKs+62BHl7ZqYy8/0hNccOhEfzjOiKvi1fyV6+8iC997vOYKhfUxYVpGMmpiZyD49Uqnpi5T2c3j1pzeCxxnxJ2N5trghioFiubUZ5Fo9XGSmcb+6MDZGgrgCMoDApy/Sl9LmHPx4G/IQdmHrnV00juS8A8uWeQr5ayJlQf42EZjZIIBK2Fcj0JScfG8vz5qzthvifsOLOQZzgyyIq1qvbeHhryvVNbNipvzqIdddFddgXleUoRofu4l/dMh5dpp9wrv5Mn98n3dffDj2hN7dabbxjzXfldVw6f2eMncffjTyBNgwxJOR2nCEuQ86i1r2KUIz6vTFZ3x1gC56Onj6G1k8dP8gEupfvaKSUlqSYH7tVUHz67ojwIKMaY+pBoDVW5qQcefBDXrl7F22+/LUhrHUeOHMEXv/hF1ce6cf26Tl8rH+gDIzbMr5udFlqyQb1WQuCoi3ZnfNjq1yCk3SuT/rCmQQrFRIpEpzy0G+Tqf/MUZX2BwVAtoCaaSZxjs933B2tjbZNIlRLk9A1TqjnF2lW5UNbToNdvaMrY7faRdXuKln54PYOnTmdwutzBtUZWHzRP8zA21piQI32t76dMV8c2J6QVKwZMglhSUiGkSrhaH6PX6OGGnHrPPuHhmSdPqFxMRxBAKC8YWUnFJFq4syk8eHoWbqEkmybE9ZU9/B/fXkdrJAiH2uheWYXegrhGF8Y61OaAMI0GXp+qMkmQzTKFYArKAm1cOwnGlnaqFnIRVvYibDV9SSs78m+YohoLeWpGRXEn12heGbWGQachgbyvHVa+r3TKSEKT1sBZQrVpo464ducoAWfpnw2JFGI3aKWxxAjNihsnTBFZg1MLUlUOjdRJiXQVzgeqNLBtkEWsgqIBjnQAFqP7AzmAOrJpWWyWe/N7Q10r5fmcqXsxsA/MfCo7a7wyVSuV73u75iOQqPfQ4lH8eO22og8vn4BXTOLhyll8KvW43GsGbmChNTjADrYwbo2xbB3HnF1EckCANUAJGdweJvDW6Breim6hOM5jatASZDfATnITL/iX4Id9rYE93r2I6StLWD/6Fopzttba1C+BJ0ZCAj874o6gFkHyo4QhTAeScjtEWOmEEY+0Y/qCpFtM/Rq7+2jXu0h+h7mvIEbK8CzUkEslNRXkXKUlaIYHmCfBS2Nl0tXnR9nkVL6se+bik5+SoFfDwdrNWP3Vxcn7H1BWeyKdNYcY3bPYGEmm5awcaY3LzRUwlBM4HAg6lhT57cSuHD6ROqQTyHjyTl3ZNCW5l1ZSUupUD5GsH684/eEELNXIevppfO0P/gBXr1zB66+/jkceeQTLy8v4zGc+g3/x9qVYb2isRD6enFo8d4xKKWsU+/Ue5kjZp9X8OIx5r0ba1cB847pCSM8OghXPIqrmDhnWwVBfUjaTEqg5OrwupkPOYTF/4jFHOZyxnurcPISu7GqREZ2hcH6+pLQDUhSHsjAagvxCa1vJhm/vlHHvYh91CWi1UVk3RzAZO5HrzKVIqDTKqkZTyvhUme6iHeunW7EtvCOwe0bgdgHtWg3/6QebePjmT3DvmRwKpQpcWSiN5r6eTHYqq0YGpBe8cWkPL73dRFdO9mylZIwPLJMGHIqCqkB6GEuchLHSiXXIbcnQ6CAWVCTyZWD35blPpwdyvyFW933Uuz19rubZJXRDqY11FOpEANU+bQlQo0EbfmcTsl/gyfOfKublPWT1uVMUMEgm1ZNOx7EcE+TJ0OcsoNrJh6bwz2fD9xro5FGgrOdxEFuhxyaomkKQQe26OnLDtEwpFMFEMi0yLjyeYbAPej0VlOx0mxrsqrN5LJ6e0w4h2/wj3xSFVVAyNgX15L2cyh5ByZfUX4LRhQfP486oqxvallM/W5B3nOzixvAmorocPlYaocCnRDfA/a1zsATh91LbgodpqdZDrj/Ave6Cot074Z6kdF05DCV1F9TVl/9eDuZQp+GopNsFt4jiqILKyifRPHcVLQk4+oysUHXf7YFcrzNU5KKefly3PXbbZZ17EyqHBHa5726jif29uu4nilZebd1G0W5hyqlI0AqRyWaMr4S8XzoB8QfnRpM0OeF8ZXnKqJSSOiE/PQk89z/5STz/tTsYSDA8cdddSNK6kE0EX9Jm+TqHHLkeCbplObh9ZIoVfdeByiNHqDcPcDnfQ6EnWLOWlOckgUuJsUBH7uvI4mmcWZyHLcB8fv7EhxOw+OMjEqCe+fSn8c1vfAMvvPCCpomEz/fffz9OnDyh6EtpDEwqWAB3jTQvpV+7ciMk8Y3DJCrVFPb2DkznbTLrFiMuow1Oxw9b6QiMFOwasRNEQ9BsNqWRv69Fa9PiVUcbGMcRdtNosqAWAW48xxaSk+kjIUjF5TS6vMSkbLak5P5UikzKix7LfdQFCSZTu/J3Bbwn6eO9Sz4ub7Wx72fhpQK1kVe1AUrYBFHM2w9Uw91sKOuw2O9EsYYy0zcuuEROFkkata0U/vrKNbnPDh67mFejVrru6JhhQk4xbxbdWhM31mVDREVky9OyQBJKJwjVSXpCTIhHk8IwbkAYOxpt/8tfNfuCWgZmFIQ66AxsrEnMZiWpdAf40a0ODjpDFYOzLB1nV4RlKWvd0gDJMSZb5WJoArsh9zRCKT+FqamyoLeUfk+1WZfFSoInEWWGhMbYqcY+pDeY9xSo5nigab5aT8HwuILYiGIcuyYhroRGoWM2ItVFA1vRD+t+dKvmugniTnJLUrJ2t4FcJYvjp+ZRlpQ0iE1PxlRryEbGYkvWFhsSDAClRAYPZk7jiL0o3zOLsqRHp5ZnkS94ilSPeFVBUbPItXPo2kOU+hmkffm+B4IE5XC7OnwHb9XXJe0KBLmPkeu5uC99DEvFKjIjR4JYVwJgHXlB7XOYRUXWTU/uoxBVkOezDo0jelIOyIwEQlq7qcAfAz115ykAyFEj1z7srNu2qdvRYZpTAp1OD81mByMJgqxNObkcVqe3cDSfQUuC7kFhCg/aGzpGo8TjhMlSWD5IyfpPy7+nOq+Xn5bnY5AzD4zl0+exdPYCdlZvoljKorZxW4JdWlJjH5XjF9jJUj4YyC1L5eLmWE/3KTu477xzVZ3Cib5zgjqH8vyaNKaWAJrIunjykU/i2PwZrPXX0Rzs/RcFLOd35Mf/419yROfkSbX6fu+99+Sk9bCwsKCs1qmpKXzrW8+ZgMX82DU1BiKPSrWEk8eOYGN7R2WPC7mMbj6qilqYSMRYhwsYMZFQx+SowS1pVcKblsOri3xOUoDeCAe1luF5aVpoxcHLQiFr4wuPJuXPQ6zvmbETnceL1QNUS4kBxHEOpVw5JkQSJ2cWuQFJUh0GSbUturg8FjQSyE/j1cbPOVHsoikLrDYsmC5WLG+jBf84eE7+21yXrS+S9bezJ8v4pc+fxD33Lsgz8NGpbegAb27xBLZv35KF28D0QhkPf+Q0ZquuBBXGbEc7aIEqPMTpIAOVuvgahriRsjFzZGMdMh3iWEnCkC3PqjvWr53P0Z6ji5/caWOvM9b0kd0jMgdsK2vsumJHmlQ6BzeZUtTWqa8iGrUxOzOLcrGkVBI2LnxSD+ivOBqoOig107tyKiulJGJtbGACmgaq0CAqVZENzVB7PCvJ8ZEgtGJOlaUSzQyUjgo4GS19IlUdts5ktA7T7fOzepieLuHM6RN46MF7cd/dF1DIlMwYC2uhDHK8H5qUSmrrSfAoCYKYygs6LEoKKxuo7/o4f89yXPQfY34qj3I+ixmniFQzhXDHRb85lpRG0Fmri+2tdez0d5SNfzR5Enf8PVwONnHHrWHTr2EqyCIraO5Kfw1vBytyzxJQ5DM2xgfYGGwjqoxx/ekBNk83MDg5kGAVKMJVyy/Ku4zN79W5eaK4wBlA7QIKomp10Gy0JUj7KrejkweCeDOS5lE//vnWHs5/6kF88X/6Mj7x6c9KqldE4/YVRHJg833ny2W4kmanJb0rVGclYGU1LVMfBNYKWTuUYEalk15tC739PWMOLFnAsNvXhgTrq4m0p4e9xY6nHWnw7UsA7cre/A/ffhk7nSY68pZTcn2eZEi9jLzvrKUgZsZbFDReECAQYCjZzkefuPg34gwPv06n81+OsPjjzJkz+Ie/9Vv4nf/ln0ngeh733H2PpntEWZHqZfVVNyrjyYJ3A5Xg5WjEZz95L9bWb2F7v4u9gwNZ+Fl94DxB43J5XG8Ya2DgnBUlkLWLmEtiJjvEbH5Mr1Ksrm+ZWTXHfd+FRV1mIkzLv3nmgZy2tl99L0Ss66Y5O8mE9MijfXk6k9YWOh98YpiF77aV5DmSINJo1TW4dHoWJDvHI0tj3KybVLcgJ8RyPsCd3ZEW/7UWAnuieWMY2ZMhbiVFhhJk5evkhU2XE3jmkSzccQ17mzWs7g1Q6+Xx6CMXcerCGYzkVH359Q1sXr6NxfkGjszK4k+OsH1ACeVInX922qY+ZtqDo9jQIYg/O9IhZzKlF3Ihrmz10RdUu5iTQJ60UG/18d2bspD8iZAeBfD49QntDEaxQ3dCFiupDPzRb6zKaX6AualZpTAMWRgPg7jjGKnUELtEE0128t6oTEpiZZqTCAxINDKB0akylxr76dlGT5x1FCIhZa47RrHTigfNeSBkvKQSUw2FzFaPQZJ/z505iWd/6XMx+TSuj/EgZB2N1ICJwaplDjYl51NxlYeMoPeBBPsESatUdvVkDbpd9CQtpCoJU+D56Agq6RIOBgf4WvM78CQQPelKitRLI99NYjHykLFlXVtN3MzsYTfVxI7/JpaHHtYS+5rCn1V0NYWqBIiVzhp+tHYZ+CML9z77GOz7jmOwtwnX76iaKNcc0102ENT9nBnJhAeoaSDVF2KjiVQCaXZuedjIweKmaCacwZHsNJ751FOS8toqDz574SJufvePVCPOFQTM9LUwtaxdd6rOevmKZgwJSe9oB8ZCPgmnc0eO45YEwPW1O1qHrMnXV6anZE9exRK752FPnplBaDoC1G/rNMw3X76M1YN9eYYjpebcTPWRcY3SA8URFqon0BSE//rWK1g8cQ+ybv7DSwknP5599lm8+OKL+PZzz+ErX/kKnn76aTzzzDM4fm4Gq1cOVHBtLIvQ482Eviy8MX586TXcf08Zf/1SV9vhLWeAXNYTpNIzBgKRrfk6rbpU59sxG0CtviUVo8efL2lOb7Shc02WmzEseNtYWxHm8jTdrI3wT//9LupdqJnpRO5DR1GCkZ5UQ3ZdgpTOp3lywgySvmyaPHyB+hQ4G8rD79GQVBDHD6/04EoaW83WcH3X1rRldzeNpZkCWrIgeqO0bjousIRjpFUmM319DkrLRnjwhNxA1FWxvD99ri2bzUZrLChhVFJkcuRkD+fdSO223t70JMjIdd0ay4uug11fLzFGVU7iB46k8ZMVG5vNwHSfjMODbkreJ6fkqdo7n3ewvtvFVnOkTP+0XKcrqcZ1CZDdgXFFUqdpCZCGgJk2Ttuykb1Mzoz7sOPWXMXYr2OmUlV9rcHAP6yhhRMUHDvsxONxWlJTIcZuTw6BhHpPujrsOFGFjdSGzSj6mVSNLU+2y1NJNx7Zip3DYWpOLOpzw3LjsK5CEih12B548H4zshLbr43k/TKweVEmJhQb+3jXtmJ5G0PMtFTVwgS5jAZsF3cO3kKHPEM59dd3d+W5t9CStVLEnqQyTRxtlmhrgx27hZG9h1rUxpFOFovOcQzTFmqyngV44J3kDl6T55qIXDzbvoCqPS3/tquO3mwKpcI8GoMOTj71UUHSC2i8Lghsf1PWnyA++g/wUfUdw6/S6qlJ8dlkIjJNMTOglJIT+0Hy5pNuPKrj4B9+4e9I4CqjL4euYB68/b2/RGt/X+uAQeAqD63fbAu6mjOEE9rW0wmdKK7flSXR1neSnz+KQmVaUKyg34O6vlw226fka2rrt1GxjuikCHWt6KpFgdjvXlnDX1+9hS6HrEPTLR+wJi0x4Gh6AU/e/zO4+9zHNC2vNwS5jRPY2V378ANWNpvFb//2b+P69eu4Kqnh17/+daytrWkHIVdMYigpFCfvSwK9k46txqaV6Tx2tmr4+ONLeP7FDe3MEYKSrNfrBX+juB8Z6QddVONYU4dIpkNBulFgVBsCRwOE9YFtwAJ7f+Cg2Q3lcxHPMSIuQnNkx9axDyOZPJBFmdG5tcwop0XFQa8pC2usXUXqWHOOqt8f4S/e6+GuOQvUR9tsF+TETaEtn39yvoPtnoPuOKundqjmonSA5hqycWQ6wIUl2biSPr672sF+QxCIXUXKK5pBVjq2yKn5xtv7OD/9Oq5c35M0i3B7Rods+xKAwh5PW1kAfgOLhQZOzGVRkeztvQ3TVBjHIxnDASfpI9V2W9npYkeCFTtxTMX8qC/BK1CPRTYzAuWKDIyPokWl0Kwy2+niS/oIU9pua0s1zauFKnISvI2MkBkJmQymx61JE8BMBc0MP8dD7WrCJQteGyJsooRGsE2dkq2E8ZqM3hfmJ+eHAUfTdbLpxyNt5RMBtVpN83Hyv0azJWngKZw/dVqRg0az2LRXV4Id1+Hi9WSmH8xso1qxk+o2NioWVQY8jrY0PezXbuma5B225fO2+7uKjPKysRbGkjaOElhL7qFrCxLuXcW44KAsaV+nJN8rl1A7e4FpOL98BMNNSfdbI3zPWcGNYBs1WU86opRxUY7q+P43/z0+9YUvwSqVkDl2HP31NUEsdHrivOlYiaBjbbIYsnao6hwprX2psIC6RbMJlNCBB+XZ5WaRPDkva5cdwxp+8NpP8L2vPoeHCzUkCmlJdaHBnxZpnXpT1lEZAwlslOIO2zX48t9+p6UAgjOI7CyylMG5QtanqIw69IdKVWG3trW7jYPNDeU8vnRrB3/24luoMZ0LY70rx9B+6PzzyUc/iycufAqtzliFDjOCuV97+4dY2XtXnvb/+OHUsD74g8GAtIaXXnhRFSJJIG3XJCfPctg4oUx3jmNwYJmo4/zFKdQOeqjV+7hwVxkbG21BWmZGjzA9iAXCwji1iM2gZZklUSovYVE2YleCUWBntCBfyJj5sXHkGvkWLdybAqVjR4duIFYs8Ke2WqaUq99XDUAFASQdo0EexaqnvgTSiDKysmxoV0WTWF9eUL0vcFZSwUKKh7AEsoGrZMETMwHaQ1sVAnjVLB/Ny2F891Io6UQdP36vhmubrqQx8r0yC8jkSqoUweKxzn/pSSTX19/BWzfaElSKSFCZwo6NLEntoGGE5erIzPp+D07Yx8kpBzk52fcaviyooUDrMU5MWbi20cRes6/33WjT6FYQgez4hjrlJI3COJ2LaZtKqohV1EXvSbDKZAuqFjAetiRg3RZ0mEEhlzcef0F4KJoXTgacObkSi4yqnkQQ61nH3UoiArp1s54Vjccxd8i4Q5sispEmsmPtfiIiMxtna1rHzh91sThzSEE51j/7Wjsb4Ld+49eRy2WMCJw2IgJFfDqNYQTKdC5VVQsI0cMJ2ySMzXYsLQHM5uS59LcF+cxgTdLfXfkz1t6KApeW8rNyDQNcae7jTq2GC+E8psc5rKCHd8MdiXFDHGQFmaTkwJA0nOv9bLiEX1z6FGyBsluCkLeqY6xaBxiVHPjZCJ30ABfnHdx4/XXUN27hwlM/JwHrBAs3GEmQ0TCrlveOkZ5RrTNlxhluHpEUlSM4v8vZWnVsTqF698PwjpzQwyBqXMUrf/mH+MrX/lLWmoelTA+Nhhxi+y0c1Ds6n5pJmfohVU96tT0JXA39dUeAR7te14DHvHxne1fSYx8p7SjmUZydVgBw570buPHGG/LrFXjlMgoCTv7t8z8WTBdq5kIuXYIBWt5z0vGwUDkBW7Knna11rGzexE5rHX3qqklm8Su/+sv/n2tY/68DFq2+aApw/8WLWJPTYe3OugYc+r1RbiaTyWpwoN43RwiO3Z1DZSqD9dsCtdtDnDlVxMGBLA5BBhOrc/MzHjuI6UxZL4GluSr8MV2aM8injW8eayhDlQB2tRto1CGUnaOERmYrjo1DDzzEk+9RzCp2NGi4yq7WEz0yYx4DFjdHnbi+klQERgdboqZd+eOFUlcevOTsUVa1qQYSqY6Whqo7JeeO/D1w/0INt9Z2cXUzQjeoIulNyTMxDOOYNhlLjJC3FGCuNJBf2+j0bTT9lNIC1HY8CA8L6kQ4RCOUPd5v+ThoduT0H6LMWWm5hkxyiO2DFpqdofrvHQgKafebWCi62KKjjgYnW9M1OvPSky6SVDCSA4Ccp2ypqPpYDPS95m0JIgOUJICpKF4soxvFdaggJgab8RxoZ3biwhxGH3DICQ3aUlWJWEWWtTK1kYqRL8easpzpdA3Xi0GUQYfsbCI2suBLxaLqr3Fmkengpz/1FD7y8EUllep1WYZTBcdMDjAFdZXq8j4FwOFIi8XO8pAsOkFtEuh7KygWq/jrS9/BCxtvYKtb14FzStuQxtIWJHJtZ18OgBYWghncZQuik3T51d4tbETGfCGdTwhCSagY4Vw6jQeiKbRvH+Ddxh3seoKuCyyKp5EiFUeu/b5UgHLS0qBbbzQxf3QJudIMUtPziHJVZKdmENb3lGNHCWU75qCRP6bS0KSZuEnjDWgZ5yMnPyMB6x6kJFsplPIIt16BM+4i2qlgWRDiXKkvz9BDPpfUwebVO7uCJtsoynVrtj6OsHPntiDCFmq7B6jVGpp6QxVPxhKwuihWymqGsbvdwP7aHdjBQI2A2cSi9dpRQbtuJYGrW7vqGD+ZvOBKp5rp6voNrGzcxPrOFazsXhG0N4VzC/fqkPUX/quf//ADFr8h+VXT09P4xCc+obSGP//z5wwBMDD5a4KGpkGoQWEsacn5e4oqd9trj7C908Hs0ZygAxZpzcS/E/M4okmnUH6dEUhTkRe63avKC6OxqycPytGalqOql0m1r9JNQL0mi9LGLop5G7uN0Qds0Q1sUxrAODh0cFGUpew259Aiqi+bI7Z7VVTiyUJkt6Mve73WTaDiHcip30I1S3VOcx0X5jmK00HCruO1ay2st2ThuFMKq+2JXE4sGT1hnuuAOAvlfQaeIa6s9eSf5GPBzphDNDYzgiq3TDa5OvAE6MhzW9trqf16KTVGIhpq29kayWnabyMnpz6JtTVJX/tj11jPE8mwpkgmHxhE0qoEUCiWBR0kFRwNJMh1WxuyuLNKsjW0iUnnNjx0zQljxUjEw+rWRPB9wp2z49Zp3IigWFtSpXeThlckKKI8PYWloydlQ3vKRWI3kdLW/qCvDZVUOinvsaBNGt4zyaGnThzFl7/8D8zMXczhi4cljFnJeGikmG3dKvJrSwLLNhzvBjLpa4Ii1+W9rODa+ps4f/w4hu4+Xl59U5C7L/cboL7FInyIti/Ptrsnz8ZFJuHh+q681/ZtXI62cXOwbUojlHqhwgQDPWuDgnqSsh73nQGuS1omRx9msrNYyBzF6cx5nM5mUbRqRkabhhqCgN/44fclW0hj4cxdSNApqVyRd5WAv7ulg822Tk3EdTc9RF0znkTW/PkH4C0cgV2cglcQ5J6ULGPrRYya62jIe7fXO3Jf68hlHJWNyaYsLC5UUKnk0W73cGt1Uwfts5KmssO3u72jkwv9nq/dSk3TCUe5T2SdtJtdzM1UcfLUMoolozZLIUc+62Quh8ce+ih+8PLrktVGquJAekuSyqSOGX8bBQ34YQ9Ls0fx4JmPyWcMcUtSwl/9e7/y4XUJP/hjHBsEUCr505/+NL76zX+HQAJWbaeBg719OSXTcnrKS8qwRZoWeD3C8VN5lAseXn1lU5BZDXPHSjjY7qK1P4rTOhwiLW6rYi5NcRfMlCwcX85ifU+QTr2vFZOEnJhO0JPvLw/TNxrxRFULVTlp5CC9vNo/NPHkZnCVjW5rfcgaS6AcOIrKiLBSrEHJhsoWysgVpiQgHGjA6Ekuz4BL1JiPKLsyxv6ogicfSKImL3hGXuTdp48j9A/w2moNe3LP6dyCDpiGcm2+H+pCYh4fOEY50ghNmPGjkZxu8oh0HjGgg5C22oZGl57oSqVuB0oBodQtqRBqLBAOlerAtKnWMG67kZx6UdDBo8tpTC8t4U9fbaK+ZwKXlpzUj47PmaaoCa1XFeXUTCYFaY0Ml6vfa2htUIu7Ew/J2DhCKanRhIJixyg4jA06nNg11YlTWeioycRgNwgMn4r8nYWpWbnnNLxsRp29t7Y2tH7F3JjB0ZMgT64cEXxNAhl/0O789PFj+Mf/6De1OD8WFG1SJTvuFBv6QybkAdaFk9qVtGpdUFtdUqiePN+R3jsL59mMhScEtdOvbzf8Lj7+SFrHfljGaJ41aT1LDekkg4CFZsPB1Jzhjo3GTVQGKa1VhZKqZyQtZSe23VNuCG51fRTDKh4+8glUK1PIyn04ckCM5EAZ9rIYdW2dEshk6b4kB4IEjpe/82c42NlUZPn4534Vxfnj8vwLwMEdDFauMG/TAfhEZLh47uwxlM6dR6KQN/4AlKOx5SjvXpLnUEMvMw1LAl6U38dUe6RSSVl1vmnIOnZRmKpg8cg0GvUeNtc2VGBvbmFe61SsYamShj+UQ2Wk5NuRPN5CIoN7H3kIUzNlDBr7ipr68lytRFNNdUdyyHMa4Bd/5mH83rdeQlH2RSrroEZSMV2etDZq4fGLn8LFox8X0ODicvtF9KPWh190n7jWBLExwcT5meu7UC3gxJlFufG2BCGJ4je3MWwM5cStSBAby0Ye4vjJgpx2R/HW21lcvbqNqarAzYSP2t5EtRTK60jISl+YKaI97OLzH1vAJx/N4X/9D1vY2/cxXbSw3/QQDlo4VgrR8j0zJiun0zdf6RlzR9c5HJ4mxg9VwdTUsVgjYU2rb7maxzteTuskYSqLysw8htuSjQ9J0OtJ4G1qoZYOMa4r6V8nQGPoYXnawsuX1/CqpADkn6SSnraOYXd0k49DD4EXaHoXCIJx5O/IqnZiPXdoURxIRx3YcqIXPRtrEowdpQKM9evIyWH3axz2jV48tbglMCk7fezLCxvJ9QyxVvOV1lHkaV0BVt9rYKseKVNdddRJJYgGMdtcAkIijeL0LDw64DAwWgzOppOZEdQw4ZJhYlEV0wM/+P4nrHWO7rgxEuBncbaPNAWestzEdIjWGhgnGiQstwQB+qO+pNMDCVgto7VmJ1WU0fMSimi18C2bmc2ZXquHz3/+5/APfu2X0edgtE5GxOND+tnmmoinqQBqp95DI3wD0YCobYRBO1L+EMs2LHlWc1PIF5fQTn4X9v4prL3wgM6ZupkG8kdv4ezFfQ1OQxKL5dlUp0IcEdSeUL8AHnJpRahksncPsmjsldHfm4MbppCYkY0q95COOUekd2uB3EnLOziL/aiB4a4gvQyv3IhT9loNvPyX31Yqx+mTS/B798uzCXHuoY/BL5Wxf+knumapU2aX51E6fQYpSR3J3Qo6O4h6a3Lg7MKZXUTqyGPwN2+htfoK2js7yltMUvWDSEoO40G/JWmsBLdiAUUJXEdOHsWdq7ext72FbLkIh+qkJG7rSNsALTlQjpw+h4c/9bPIVaZ1XtThwL8Evwj7euAb/mSgiqWPnb+Ir/35KzguWRFNa7vtPjqxusf5Yxdx8cTHkBgmVLs/6EUS5BJ/ewErnCzkScAKHEkTh5onT8lmmF+QfH06hTd+tCLpWQ2vvzTA8eNHJS8eYPGoh8oURcA8XLu2j4Lk1+36wBRxo8noGDttWVypz2JjZ4gbq03ZTEMJViN5eQmtjfQ6Cby7QQKdGYAOVcbZ1YFlMrRxqAxh7MKYBlK+uC95uRJXZeN0+o6OpKQTRjjNk+BVriwIUryjX+N3m5rGUAOJaQA/6KW3GygmbWw2pnHQlNNFAsqMpIhFCZREcKEEk3BU1FMzovggJVoC8z1YpzFT2ZZ2YQ4aPuY9H/sHrGnlNM1RBQrWrtg2lu/FGb0wdo/WonnkmxnMIImGdhItHTxmgfsHt4L4Xq3D2Upb/n0QGWFCmqBW5P2QHKoyQLJA+5QmkVTMss27tCfKsUFsihpNnJsnLsvmz4yTivljGutCFUVdDCguZxuDEbb5kmkHJUlL8ln2wFJo0HDioK7X6NGfTlBsUo1NUuobSAb3QX0XCwtz+Cf//X+HC3ffZSSUx8YPgM+RxFKjlGHcZBzl5jXkeVzH6samIiDHof+AGcjnaEspX8SgNUS7/CoyI9m0/d/A4vxQEd6IneKVY/jxe3uwK6/g6GMtDt5orVO7zBKQ2vt5dLbmMGockwdbkpQ/g5IEqOllR2tIRGSOBEcGYY6PUdqbs7VRrNc2e/oh1OSRjBurRics3VO05Uv20e/08dzX/jO6g/8k6CSPJz7z87jv4z8LlzpuB7uwzj4Eb6qMWz/8z6gev0uC6HFE9Ss6CJ+ZPor8qaclSLQQrt4QsFCPZ2ttTcep8JlkEOFsKTkIuVDHbGjRdu+TC7j+zhU06w01bRn4e4qfG4KapiQIfuTpTyFfnVVCdUL+feB11EVau7rplKIyqPt7H5XUEqYLRWSpWttta7MgpYeZg8fuewrT6SXU5F5atT1sbWxhd3/jbydgfTBoTYT47rs7C39oGNRepovpagbnTi9iednDt75xBdvbI9RqM0jOUMLYRb7k4LM/exL3nj+O73z3ClZXtuPOlXF9pl38VD7Ew1MZXLnZwY9uUBdIPmPgouMHyEjAUO9BeTBMdyzbBCsWdsPY8om1qJQEK+qcj1mkjygzk5bTk3m6r6oEQ4qJuUndaElK3cjmyeWrOl7RbjYMi1dengYbmiPIi+7JZ+31PCSSY0mrEui1LWzL6dQZNjFbGCEtuXpfUsLxuIAglVdyJLt/lM9Rtr0OdzuKWgKP6akEISoO+LGWV6zJzaAVRr7+akkQANEVFQzka+3A0+eVTQXwQ0sXo5oQ0ELeMY0IU77z9bTk+ZLOlSQYT0twzirioaChiuWxyBqPzkw0xicBihwf1tAQ16p0GD2CUYNIJGIrQkut5POUouFAc2x66qY8QdUlo3I6aguiGunoiTMe6RQ/v3/ScjUlG8nNHzQaelg98uiD+NjjH8W5s6djSZyxElBTHiVbbOUVWbFVmAJBdqRtDlofyNog+z4v75wcvq4EA1vFDlmnq+0JKrF3UZ128Ozjv4tsQhBLynDH+BmdVhs722lJ9zN46fd/IKjiHXh9evrlYHkPoVg5g8K0pKtH06opxYIzEaU96Y4GBqlyTi8pz0ZlciTVtyKjqlHIZ5FNfxzNrWl0Ny9rc4Cb3pPAxZp6ixQCef+N2j7+6utfxfKZ8yhNz0nKuIOT91xE/dZLip7K+Q4SJ7Io3/UERvJ56WxFg2s4auFg60BRMYO/Skqz8pv2tE5VnakKoqvrYadaZCT45su48NGP491XXkJz/0CnCehgRGnxBx97WKVmhoLMcsWq8QtVE40cMiX5815NPlPQcquje5H3eP74KazfXseBgAK+mzJHtryKpL8jvHbre7i9syLBcFfe01AOSv9vL2DhA841DFwXLhj9IxID2X5NJaFF93sulHHsyAP46n+8hFd+uIVf+OIRgZw+UspmdnDqVFUe6Edw9dodTQF4vhMh5CX/z8vpdf4I8O6dNPZrcUdLsL0zlhQpMrK9KXJWKACoSo4CMSWokcYQ6tDt6NCY1XHGGnysFJUG0nLyNjG0erpByG5md4m67K7qe0muL/Cb4yTM8WnOyn/Da3NlZeUk9eIG9ZU7pGZbctLYaAWyQWqyMCT1reaGEpklhRl25IQz2lm2CuHZqkSgrz6ki46kdY6PvfpQA4iOZrDdGplxISiffKhdG+Y9TpiWoJyFQ4laIsORBDO5Dnb5bKor2JMpgUi/h6Iy+busBGEixwQF72BcVUgV8HlfRF8TOogVK5MGJiCogYSsvPHISPLqG2aQSU5m0yLtBPv9vixM2QByj4WsPNRSQflQVBZV66jAkCDtuAvMrpcy4OVzSFdo9nycv+scfuef/c+KvCfrazyadCAlPbOKyqHSIKWkSmO+wK7aUA6ITr+IQn9R3u9AAge1u+a1hT+QFLXWbqjssiNovCfvY7F8AdmZstm4cTpL89WTrWXcvLaK4vVrkgJJAByNlDM3fbyMxXMnlGhJwUpnQpQlLykRq4XIN8nm8/rcWMBWYo78XbZQiF2gTArUWDqK3ZVl7K28gt7eTYqOoSAHDetb7NAxhWV3evPyC+gvnsNfvPBDPHP0GGYzm3INJ3H6iWcxdeIj8jBJgbktP4cY1NYROhVBr+bgzmShjt3QNQtFdFSVLc3KupYARAKxjo/J+0pny7jnYz+D1777bZUbGkkid/rEEeWEbV+/gurJc5Ja78r+yyuidnN5HeOihFPQ62GUlKxF0uWEPJACterTJWTKNjxBmvIQMfJr+N5rX0fGrWLaWcZ6b0NrhRN12r+1gHVYz5Cfe/sNeCmyW039IsPumlw8tbETXoBf/tIpvPD9LazcauLocYHplKhIS0CQ4JXPzenp3G53DfqQhVAuJAXNJJBL9HDh5BS6coMzM2l0ewJnmQ5YXYHPKYzlJAjkBYzZaZSNmaLErZOSk9ShEa4SEKFtYsOGpokFUZbb7ag325CiShL0urE7SUZOPMlvtFZSLkxjX9AP7ZyG8mLsw6JzpGYcRBijcVqdiZvy/XsdWz3gNtsDOZkiVCkTEtRk8cr1UfZSxfE8pS6otjfb+FmqhEqqI4GN1uqWNvQDDSqqws55LcrC0B2YtRZ2ppJm9IXjK9rito10CFTSJYiL3EaYj0TKQnFR0u6Kpmb8fhxd6Uhq3u9xJDfQF0/OmR3ltHD/vn2aIYVS/NDLempdTvREBvvELGSsqorQa9+r1TDOyz3T8JWcIceQV5VOAcNsH0/mHuXfD0hSlJXbFpT36EN345ee/RzefPsNpcNk+T3IR9LDxtFnRjoKDxt2dnl4seHjqT5XQknKEY7i5NEncGbxFq6tvocba+9gfX8F3WFXP4sFaurQj7sZCbBDJIOhzijqnCaVNfIJCThlFKs5WZqvwpI0cX17X6+3lJO0luzL0JiOaHlBriXtxQYp1IWijItt1CZY+uD6qMxOa3rICZBsIa+E1rYgnWMnj8t6+ThuvPE81t4V5LS/LsjcSDPZVGvwR3j5W38ssSyL6XwSBy/9K1jLszj1COtJc/L8OErTB+2G/aHsCwnCdiIP2ytqodvLuHooqJmqfH5G0B2rEalMXgJURtcMywKqfCH3XplfwoWPfRLPf/0PUSqWBBg4uHX5Xfn3niK1YesAXnlOlR04DeF4WdWHZ0bFdLM9luch11ITBFwRFF+KqvKMe2jRTDiqyb1KtiJ/V3Tn4umQhiDc1N9+wJoErb16WxaZITlynm2QGcWDrLLoQkMke+YzC1i/09SCqlWQzdoZKLmtuW8JTGzFoyKOab0zM+FCkO/52HmikqQs6gpW95J46ZUxrq6PdOOx83dmqYCNg77ylDjDSBTBucEJf4gzbdbYGK5SPjeZzKuYX1NSPnq1Ja2E/joiuVIgLE0gw1RaazlkvtcbB1qE9gcdY+gZ0x6ykvOrRPIoofCe9bFOu46wz3GTokrx+hwHCogCW1psNwPRpqhNftSg6KGndYaWbmgGrEONK6Z+sgwceNrFYSuZUjtOOomJLW2W96qjGpaOmzAg00OSdTSOcBRy02ZoOaEJnRIj221ffu0pk5rIkmTffHlKNk1f0FL70OhSrebDUIMUA2RONpzO6g1Heq0qc8ygFItTcBKhUWugnXTMtdrGSUcVudSW24Ri1ulGVN2QA4MqHqeOzeD82SVcvvSqmvQqwmLn0YqUWW1ce5Kq1JDPF5XnR920fJ4NHE/rZ3k59StyDwuy8ZYX78cD93blEL2D67cu48bta7i1sYK13ZvYrW1j/WAP/+r3/gWeXP67KFQyOHHmiAZHiuONyA10KccyhanKGMlcVutMlhwU05UpDXrMDKi+of6MaWN+O6Q2lTwbjuFQE4yd5an5WfRkXbdknc0sLmuBPZfPya9NlOR7ceZy9vO/ju17HsWbf/3HGDQ3dT036i1Jq1YxrEeaat370ElFutPzx+U+PYyb64oeI3canQE7lYFeS3N/D+XF43irOcKsrOF8IYNBz1HyJ12ICpWyzvrmZ5ZUZSMpwdlJenIvWV2by6fvwtKpM6jfuYHazp7WGgvVslwvf62hMHOA8vw8chK4RoKSfAlC8EihL6Ak6+BHl1Z1TbOex0OG+4OIsy3P8OAgLWujhjd2XtRsoJQrokKNmf8/EBYXY68foNkYKnxmR4YjN1Q8LhRoPiA3MKbP3xDlaWBvpyMpHlAtJ+Vk7MtC3dZCa44aSxLg/GGkRWClGCZk4ydDSSslHawUcE/ZwUtvtNEncLJ8HTMZE46ywCmn0rA/1A2clIWUtCV9GgqSGfnx3JtxQiHXJ5OWRS+/9nsdDNiOd3KKxvj3ZKNT/KzPWo4zo4VnFiVZj2DrPx651pO3kC1IoE4qqzvFDoqgH3SayMrC8lTB0tNUbyg5/VhS2YDpXTgw2vSBhBxahvcEjcLXeUDd5Az6TkaRIk80irglMimVfFE3GmV0W5palmVBrAvy6Xbk61nDipiKDJEtzqBUmkKOSFD14UfanelI2sOaFRscil4EoRSr84oWMpI2tv3dWMAm1GCk3DG5z36/p0oXvE8iIA1kExUM0iBSY5UkVsFApkrU67aMzIx6B8akYHKQ6EPoy89cNoHTR2ZxZKkqKccm5mZK8rUd9OpD9XScKM6SemFbBVlPRGkS3MdJRclELezE+TQHkQOn3W1heekYqnLiZ7IlnMhXJHidxsP37qFe38P2/hpefvtl/MWL38aN3UvIbp+RA8zHb/6TL0lwKus4CYXy+GyGnTPyGYKsIlPeyBdyEsRkXZVmzeE2GGrJg/UqWolR2lm13wZD5ZmVpirY39rE2soKLj7+UfjdtvZaNuT3JKimvR76rV1sXn8T9Y0rOH/f3Th+9hfQa2xrILizso5y1lBDKtWi7I8Bdm5exaU/+EM1zShXp3H24U9g8d6fkWvIK6eQzyMj7zxTmcH6+g0sLZYFFcr6k+c1lA3TrtUxNbcs7zqHZLWkyDKdn4YZtzAFnXMXH8TLEuAPDmSdy/uuN1hUt9HjgS9rpVSpolu7I4ebAA9B6FlBbENJwS+v9fHOVl2nODhBwgPS1qJ7Rn6mZG8X8H8T9x4+m5/Xldh5e+/t673MN71y2ClRoiiJlItkyZbtWJbtrDcOsHawTgIjQYLYWCwM7GKRXWw2Rhy3DWK5SKJMdTZRnOFwSM5wev96e3vvNefe3zvUH7BAxsJ4yOF87/srz3PvOfe59xyfJ8AkkkHUz3ceW0Cz03x0CKtaburmsglktpm0sNdrmwgFOzCLrHanoWUY4VUOtwm5TBty6FbrDnDu/JbWNyw6lsKNTipW7omwnhSmHVxUXcT9ffzwzXXsJevYShonD2JOITRvMy0ONBZMx83YydQY8KyGVLFudsfPCsjaHWxsGulN9/Jha0Zk9pHTIB1dkRk7oigfs4Obn6/DO1wA0hsl8h4yvlYvpaWHw1DSlKDVF10jUhgP6YFthJkwgRFpqCPKGdSlbmLX8YZ2x6lyLELVIPUqk/RZCVW16CmiNKiaLR5DQVUMSK12zeSiLCGURaVapCY1PHmRwBwkUnWXaii3muoBZ+lJzWSMmTzIYGXUglpNUkAir1rX0Fxy8FlJ6LOTEiSYtZ3c3NKW0QpEcb+wZsjWCMDqycyaeTg8btDMWqOnp0hyoiqngCJ+IKhO3rdJ6H/f8KA0XIfMenKpbRpygtpqKWJyE8UeW4xgIs6NZhZHmQZCpCgBl43rIoVGtazIuNU3nHUbTGKVolU9Jd18Zz5m+KDvKINIUKmNiNKZhhODUpsTbSntYRN3Za4pp8PH76xjPDyKl86+iH7RgVrai8o9UvFaV+lbeNxnHCLxudZydQRCE2gXVxHwh3h/pC9+bvzaPhr2IK+vpOjbG/BrwO9UuxqoxMtPFXpjUSKUJK6+dx5PffbzBvrJ1xVh3rj8gQpZ3nzjPPbX7sLcb+O5L36ZLKSN86/8JeIT49qOkttdRb1fViPT3Vt1tZErcS9tbeYR9pvxYPU+bt2+jUNH3sQTv/DPYRs7yYQTQJOIbuW5F/HOX93jXinpdEA0EUJkLISmyNOkswiNLcDm8RHVG/6Ympi41qR+5mOgNRG9CvqVAN2RdgoR4ROnZibm7c1NBuFNpHYzats2f3ABDXMc97NdLQMZDdmG7JLURuUMx2GX03mP9tiJEYbUYpsDmSJIPxqEJf+XzxtH8dII6RXHlIDhI5gvdeHI23UmT05RAkE73C4HsikTzr1RxP6+LOYgs8IYPCOHEEjMc1FG0OBmKVnvw9zLSJsos7EFcWaLn15t4ZmTUVLAPj66XWTWNSyTYDYUPwUNiR23PDg3n5oUxS0DIpWuReVPpADfHNS0fiPNiR6+uKoI+Der3DiE1w8l8hgcvPxvKiRociFKGD3o7xKmM8CJHnxuHz5uAOmGr/JFu4gOEyMJoymQ9+pryGIooMwd3SGKE+sjl82tagIS/MTGXZyFRAnSwWdmJg3ywzDkkFqDLhC7oTEuZh4dHTzuaQuGUF718JMRJD6dKbcNhbK4rQS50cLczF6t6UihXE7NKkRWorbQ69YNTw3em4v3Nj69iEBgVBGMZMGmeOB5w2hX0kYP18CQWJZTTpPJUM+QUZxajYFb+qHsfu1LkmN8PSCQZ8brDnlMGhilWddPSm83tcAYAHvIg9mxCBJBn6JvEZWTEQ8bE0NkZBTxsUlEo3Pc+Bn+fEt11gWdSsNaz9TWVgaRQBmQjiQ3SF37xxGOLzA4OZnpXdzIIW1d0NEmSVBycsj73txcZQBZx/pmEnv3pDn1IM48fQDrwS1cv3hDUcHG7aS2JPjCHn3mQpPa5QSvbUvvWbltbRu1QViHxd0MVg4mE62DNo2alQTJ2OgIagwaF994HUefehKJ8XE9be5Uc7j69ndx74NzuFavEJE1GAy9+IWv/5Yyjb/8V3+MhUMrOHj6Meyv38aD22s6KiOoSdoeJJA+eXoZJn8ca3ubOHZ0CiPjDNyxSbIyEzz2HHoeF7I7ZUydeBIzVz/AjXffRKVq468mFhfNGFtcYLItI7l2HxOHg1oXrGR2tJm5w/Vv5uaVPRSKxZDZ2dHTYhnk9weDWmJJb20inylp+8bKQlzpa6dawczBA7jTzqLWtg419w2PBjE3VGXhoQyUHFjJXmqixkBa1ZGm/98D1kPxvVSKNISbr5BnBreLz2DLcE/mRbkcHUU5pfwAlUqfvxNx9dzMTjFYPWLBLb1Bk5iYnOcG8mnP0fp+CZfXijgabyESNRMptXBoyo0LMY8erdbrRsHXKkaeVo9m1Ryzv5W7X1QhG42K1nXccqImncJOi0J12YiCoGpySihzeMza0sgoRfUOv0NOgKSpsSonZAwMoWCItNam82ViEyZUM59LMRjxJjpZbTqU2hXM0gld09NLPze/jxCmTuTl9ZnRlIJ/q67jNfIcJOC45TSvZcVIyIQYF9xGpq8BXxaDfK9sHqkjtXqGWJ/qIBEtqHy0WU6+DIMHi6mjpqk96wIKRKMyaiE0TE7eitUGg5XRYyUd9MOzd61XTUwtIBQaNWpyXFDVTk1RgoXUuDHYV4E9Pa4XmskAbNdRnZYGQZHDtdjCcHnHtVnXp++jTMTXw3yAV2Gp4skDI1oTGmGSIdNFwTqlyQKGJLnioZ7JODmUlolmvYT0fodBWtYME4u1pc/O3HdqcLeYvHr/UtIStGkjxQh6wogxSHn8Aa31uJ1+4wSWyUHm7mQofePuHbzxo2/hwZUM6q0g5qcWcfzpI1g4MIHRmTiml8c1YFfyZABcQ7VSw1gvQsEDBxRVST2wUxdHIgbOahLOyJzW8+QkWoaFS6Ra4jcgBXbJ3xdeex0zBw7g8OnTKGWSuPidP8fNd19DMi1aUYZirY+B/aVf/zVMzcSwd+dDxImCvD4Ldkn7ggzon/7lr+HDcx/gwa1buLWXxs9//iDRbR2LY26c2zHh6pUNbGxk8MwLfAZzh9AqZ2BlQBXp5EY1hsd++Xew9+AGUns7SOXz2M/X8ARBwNGnnkK1kMf2tfcxemAFlewuEWUWZQYyl88Pp4gkki2owwefpYfJz+31EKGNauljYaWrNShBmdVSQcUXG9UMnl1exNt397Xu2BrO5qoSL4a9fRKrOubhyalTnYjwKE4JH6o3dJt9lEU4TSoo3cHwqNis7jC9hiAHLzoDoTZObV50yDS3OqR44QmOwOON4FNHuvjs0zFGejc2t1P4x++nkWl4EB+623odVTx31I6/eq2pSpxSfLUxWktPlZguSIAY9A3zgVqloCcTsoLcDGJSqHaKLpA0gUqhnBuyUivpQw0wWxak14cbu8mHKySy3TV0roT6+BlEJWM4iWRChLSZ9AZWV6+jVckhkyR0Z9aTYn6FWSPhixDlhDAQ8X/p0yEKsVnszMKCROo6H6gidfxin8+KI6fmMcqAvJ6/iVLLoycy6qmoA9CDoQy0Ra9Dx2jEFafZVMstDWJEFAGXHyOjDuwRSe2XSjpjWK7UUSlXGNhq2iohEdfKYDsxPo/JySWthwliakntqy266HU1Lx2YndprJb1gdpdLs6i0JIgwmTTrmkVsbhBlwEpo/5TQ65EwF2DXiaiziFxyA06vFFVluNYubmTYrvlg4Xc8FM5SBYVhh7RZhfd6KNh6CLZs3BxOHXmRRl6YXczsXuNggPfoD0SIDCPwhxPM+lG47F7N2nLKNRAvVqX1ItbYQ2p1DVcuncfe9ho27tWRzAz4nD144pnHsLgyieROGjubWW3FGZsOa31OR/assgHbKCbLKBZbcHetavtVzOwilhiFrZMksjqof7/MQCBjaC1SwWA0xOfjwoXX31Cxu5PPPEvKdw/f/nd/iGtXr6tjkLwvIQRS4z1y7BAOnXyCiTKrp6iHz55gkAzj6rnz+MxXv4aueRyR/j8gtiQHN9NMMOOYPvQkzv3tf8LBhQmsrW7zu0s499rbOPjEMxhdOsU9tc8EUeW1byOxdBhLJ4/D1Mzx3jsqJf3a2x8RWBTw6ZdfQCmXwf3339WSw/aDDb57GY1LIxgiQnU6h+0QFkwuLWD28FGufT+DYUl1s8SXUEbzhMGo/j73fZDBdjxKhNdiwmWmaEhfmI6MGSoe/eFBlaxl6b6X7nebo/foEJZhKmEMwDbKFsJYEYrjzQ88GOrwGuqcekrWUzWEUHiCEHoJ3uCEzlat8yEOGOgW5sYxPz+Gldkw7t+6gW7tvtp9Nwm7F+MOnFz04oP7PfidJnVjNhEVSFVK3UC4oTym6DBrlwm9q4Y9lM0YsNa+IinG8wFLnaZWzRM52RkwpbAp83RGzclldWmhPM9rElTh93u0/6jHW4mTtooN9/q9a2gzu5TzKVVzjDLwiolDukO6yaDrJESX43k5LXHapUjs0qNeOaGTutlzZ2P41PPH0EpeweeP9/B375PCtc0PJ/WMaXiRFXHY9IRMlTKG/VAyIuH2etWNV476LfyzSNvCwCv6UTUiWQYrXkdbURgDSDSK2dklREljTapM0VJYXi0XUW2UVSlUOuzlZBLiU8yfc7l9+tzMMoTNgCwDuXJaZiKylGkBaVK18tdavQMvEXW+vcVsXsZTK6TszOgjwT72m1P6M6IWahctc8PAWTvUFUkS9Youmpz6yb3IfGMoEubzC+hwtsPl1S5+m8NFpG6YJ0iNRBQ91fygY1jJSQf1zto6Ucc9bKzew9bamirb2lyj2N61qCrBadKt5aMLOkS8cT+DtVv7DC5OpDYzSv8dXlFe7erUhlCgSMKDanIWpm4JzSrfcYQIvl/iPXf09C+TTDHQN/WaZV7vxvsfKA0+xWC1fvsGXv/mK0jmxN4+iHy5asxpMsBKy8DcASYNt1dNSOVktN9v4503P0LY54MvcZCfG2GweonX6sNI6Rap1z5mV5bw3Y4dYXsHR0/Mk2oa6yi/u0q0dAKu6ASmPVZ496tIrt9CZntD2z9Gx4LaQN1hIlqV+tNffgOfefkTpIp1rr0ckXiNNN+Q4pFnKUhLTvWPPf0MZo8e1zKBiAZojdma1/XnDkbQY763q/UaGQgZzfzMIRTXH+iolbSgSGtG39xh8jcs+tTzSRqfZURtOCj/SBCWITcifUhWIq0Qry2gtRa1d5dubcnwA+PEyWQdcEHOYXz2NCKxGT1hEpWHDinJu9c62N16H//TPyMPHwujX8sg4urgzt0C4bJJawbhkBlf/ZRorptRrnVQrHVRqhodxSK8YOPnewhpTYOwakF1m+TL2nUrFMuPgDT2ie2Cq68boGS361F9LCHieXaFue0mN7vdUN6UTSxehp1eGGEdFiZK65gwPb3CjB/FzesXVQgtTBQX7DVQz+2jzc1V57/bGw4d5/ETCXqkPmQPqJ62BIoSF34+V8PNn34brn4FuQqfX+sh9TNrr5NBX22KCtsDIyvpsTEDiZdoyekcBrFGW2msXGfA0cec24K1imh1ddU8dmlpGYnomBpoqq+jHLUT0pfJzRvMmI1qdWh9JcUzBkp3ggh1DQ7xGvR4DWs1Ik4pmPdkplGlmQvaONlRAb0uKSW/v93EdMSuqElEjc0zz6ksLtTzEMbMocmmzbkupR5GvcipkkQunSOU+xZVBwloKrb3cMCI66hayHEjEz0W88hk9w26s7dL1JBEOp3R+5DCvip18rLEj6+4L8q2ORxbOo4Dx5b4zrzYXt1FQQLrC0eVht+8fAeFXBUhIrCzz5xQBhCIuFUWJhg7idL6Lt/dPvJJBrhoBI30feL6EVSZFFzShuFx4+6166hz7Zz4xCf00OLcD36M/f00urYI7EEHDsf3+PeLfMcdriMf4mNjuqlr2W2s3byJbLlFpHMXp379V4hiI7D1gjj+/O+izb3zwbU/1UZYKV/EJydw7d031WY+HPQDIS8Ke/uo7z+Ac3QZb//4TVw5dw4D3o+1XdIDDrG2a/I9j4WcmJ0ewV6qird/+A6OP34KzU5ZG0pbD/X4xfqMiPfkk6cxMjuj40U6ZC2OOXbHcH7QpDTA3iRzsUurS0OdviNTx7C2TdTZL+h76wytcMU1XKcwuobZiLTE9LSxe/BoApbKQhTifNBh0g6bLn6ReZUO8X6vNQxqxmBzjA91bOZJ0r4IynXJZjJ0ywDRMjrTr6+Z8Yd/eh5f/lQI04zmu9t7yKkRq4sRXOQ82pgO9/DCKRdeu+KBWQIIH5B2yTNoika5hQ8nyKDVajhRZeaS3qh6rYxQqKtdvx5XQDWqHE6TZpNGrciFLrpBEVWxlMxdLiZVuWGgGlA9fbhyUhYOBrUZVrh7LDyCZ09/Eu3cHgbNKrNTkYitrMe1Uoi2EzU2G26FzS5nTTel0FOv189N6sF6lpu/nUOYyOJ60k8U5DLkaIYeh6K5JfWbTt/oIZMMLcPJ0uEuVFEE5upiaKoqDi2lcXLvsYgP0UgALRORCVGf1eVTCC/3WCpVkC9mmFwqWueTorTIl1gctqHTjxVTE0to1SPI7l7SAwKxhbLJ35FmUKGLojohJ6RiN6WaXYYgX8znIu1yYGmaqODwCxiEFw13pOGcpxSrByZDWaHLa5YyQlcOQWpS1+wZM2n882ZdhPpqWtyXdoGKBNdiFZViSaVHOgyMPWkN6RtI1KZGq1ZSbAccYbdmcNkwpTLvWxqFiZanZ6dJd7wMTvex+WAHC4sT+u+RRABvfe8dfHThqnbvHz67gsXFUQ3OuZ0SMrsVmLiOfExuW+t3ifzMaFYYnDw2/fvSeLl+9y4KqRQOPnYK8fFxrN+6pQcWouUlpYRyyYTqYAqjE15kGGQjsTASE9PY+ug1vPWtbzF5T+DKhx9glNcSnzqgnpfVQk3VO4NjXr7nMmoidc3gcebxMwxIP8ZWMo9AoaTzf7GxMs7/6A288q0/wu3b9xBgYj85mUAk4tcDLgcRndURUANcKVMc5PfXG33k97dUE15mbSXR12otTSZRgoUOn31hex19BjpfdBwOfwB9adshc+h1/BA5dh/3UCVfws2rIYzbV9Qs+PHHP4Nv/vQv0LMaBwUD1Tjr6VoRR2tR8egOhhZwg96jC1gWZ8IgMt2+4WMms3A6Q294DkoWDo0cgjdyiBw8gDMrHuyk6rh2p4aJsRaOTg3w7Z/WcIMwcyPjwZ99ax0e8w7itgoen/Mjl+si6K/o8XKVQeE0aWGWC+nSfSvCTemJqShd6PcMn0IbkUIs6FV5FxGka7XKDFxZQnbZmHbtW3FKY6pkfE8UTWsN1lqF8LytGaBG1FYppmEKxDWA1PqGc40UoCPBEKKkGx7ZKM4o+oEgg2oS5jRxBT9PZq8EMeq8ol1EAd2KZKpVh3ZGu8Tzz2m4j8jsVr1b49N364buiGuy9IOJbrvIugjnt4nTicOQQdGeqJbWsSTYqKRzv6nFdKFn8plhoikxv/WIQy837F6+gj1u9t1cluiqpNfSInoSxxrVdJIjO74imR8bGZ1EmIG61R3Tpt9GOcdnkWGgqhhqqXajm9tobLXrgLG1Z9QQJyM2PDXvxYM2adjlK+i0LhljQoP+MHAZ5rhDRS1jDm84CfRwEFtqldJ9b+4bDaYfa0So/JYx/iKqln4GYat2uNu0d01RvKw2VeI0o1ImknEsYb2wiXgorixg4962Nu76iFTKhTJmF8dI7RqYnp/AzQ/v6KmdTFls30lj8/Y+ypkyPCGflgsscPOZdbC/tQs/l8TAWZHzNOxsrKHOTTu1vIDppSW++6Yi1eUjR/l991RfKkRK2K7XsF+Q098K/948KeltfOPP/jM+8eIzSO+tol0rYfrMUfhH5rWVQLwUk3sp2ImWCwUGJ1NLbeLnl1fw+S9+Gd9/5VsITI0qnX7A+7r47qsqrHnmyBJOLC+jvLOmAcHp8yi6EXE/aR41WVxaDx0fHUGc/DwpEjP8czvXqUwyxEaiqJYFRKQYNMk2pqbUsNXO523zEW07GKw8fk2a1dQGaS2TsP8I3vt+H7E53tuBKJ6c+ySurf4QeU8diaoHoYEVOV7LmqnLZM5ERICi4gP/ZYzwvyxgqYmnmiN0VGFApTWk4irHQERawdg8fJFZRvmAQtJDn3LiN1+MYjPFwJNOIu5sYirUxF98L4Ob223SvT6SZQ9McQvuFW24vVPD8eIAvxyRQCifm8WpWWAnI3OBLi7CtjasyQiGTDXahzpQDplrskkvkgMFoopiOTmM8KRP0qskA7V8ck4p4FpkQxpIUOcIq3lUSln4TTEGAn4qg5VN9JYaZj1EsRJRDNSkVAxGg4gnHNpzU6260GwyaPFFi7u09LT0GKTa9pb2YTVsdVhqhmJjQPuQmtjbZyY3GR3CgnhEs1t7sGROjW+m1RWL+w4XclOP0IWqim8NBsZYiYMLKcDgKkoMIm0s9Lsq312rqxaSpVGEhwulTgRj6TR1pMfjDervcrwtEsmjkVE+L6POJgsqGp1FJzLNzZ1EMbfNIFmCudk2TFd5XUz+CHrNiPidmIvaMRH24U4+jvsZK/J5IlRHAz7eK3eKut0Im5DDDqnJebnQhbpbhj1nFhkbkhlFne0z5hdVt9/0cAjI8LFsDwUYBTnIbJ7QZnEQMvTNTMaMnNVOSsvnzQDDb9OTXenA31zd0cOezH4ey4cXdPg2EA5g9sAEJmdGcPbsMW1aLbfaGJ2N4PAzc2orViZ9TN5chysYxfbOJg5FibxbWSTTUiOtkDHMYG5lRfv8ivm0nowdPH0KoXgU9z+6RsSS4PPL4O6VGnKpEB7cz2Lj2z/BicdPY2wihMtvrzHBxDB98CjvwcPr7sNDdOZl8i6kykSYfG/2Kh9jmUgnghe/9i+0HHL94huYmZtAen0NJ4+MEo0dxbHnv4rCtdcxqKVJeyvGqbTUSvg+/eGwMggzkZKoWQQZtPwJUtNr17BGBhKMBvW0U4X8uMbadZvu61w6R7Tow9jSMhyjARXkM3EfuKJH4AkeQ6zYQi2/j7f+5gZ+7g/OYJmB13QniauOtzHTtyNAlhPmPql0xB6viEI9hZI47Qz6jzBgaaOeNO21hpIjdiNWkfJ5Q+PMVHNEFyEtFG9ku/gf//01/PvfH8eBWcJWySbpOlGLBb/3BTf+wytF/PRGT+s96zkzUmVBD34UW07Smb4OT9c7FvhCFpyZDWJjV4rhbgahqtIkUUIIi1GkjFAI2iKcrYqqi6WPfZWB3Vcu3WkTrfh62oWrQ6Bc2NPchYrMiBTrcpLZqTM8toimiI748yKR3Kj2kJL5rKYLAa/POHUU2kO4HbFNwOOrkXplVResxc0qxXvh+T3pdGdAa8v8oc1mNB12LGpNL5P9hoO0Xc0CpDlGmmLbIjNTM+bxOmqp1Taq1no6S5To9nHTxREKxhiA/LqzpQO5VhH/RC5yLsQG6aoU2W3WLiZCDvSDLoY6GxpdmUa2Y5obToKluBgVK3nt3Fa3aAaHtgj/MQEE4vM6ZymKAwGXCfOhHNFvnsjKqsPOUpS/uuPHd+5GVXmi2UogTSRs6drgIuKJu3pq5CEBxeFyIRQO6fiKU+SRrQ/NQk1GsDYNhrLXHxdJh6qxfJc9ozfMqTbrhv38oGv+WFxQ6mQV0bknRdnKpnRkR/qkNndW+U7yDIJOeFxebQ+RaQQpPJv6NvzWv/yqfqaMlTg8DsMazKrn8vxzr7heIjY6hfV7D4hAqkQ7D7iOwtpnNb2wALeMoBAJVYtlPeX0M6i1+BxnD5NiHjuOQibF4JNWUb9UJoPF44/hM7/0Ms7/019rjWd0ahLx6UPY3yaaigVh97gQnXBga3VNTWVL1Raq2V0kDi1qgvr0z72EVomonon25X/+PzMAeJDP1jT41wtZBCJBRbeNKgNLPKY9T6I5JiaqsvZtMgPJYO/wRrBw/BSy2SRqfD6tamM4jtVFsSlFeDIKXs/49BSDaAiNAtHn+jqTsAuHXv5FPQkOTBYQSfph2hvgve88wPNfW8HES0/h3o8uEW1nUEBG13Cy0kSW+6nWaSj6a7cfIcIS2RDphTJE+KxKUboMVmKh5Q3OwuUKc4HE9Gvs5g7WUxb8wb85hz/81QUcn40hky3h799YxeMHAwi6B1rzkE5ZLzPv8rQDzxyJYWHEBRfyDEI9RTYNcu6Z0S5eOO3A99+z8yFLZ25ZTUGlg95iFolgYzbP6fSr3rnN3tcivNRFpDWp3ROHFvJxNwibpXWAQJ9B4Mj8PBdmBkXSQjkBbMsA7UCCsoza2NVXUWpHsrl9DBQyrmJX92kxiPBxwTtQd1XRIbKRQrHWbKQLu2foZYnBgsieWAnR/T7ZIB3Dx0++oyN+f8PnqmeqneHJodmYG5T5QacboUAUgWBYTySl3lUjmqpIzUdMBfjPonMl1FRO0rQzXkaFRMtefO24CZ02GTfxwsEgtJvKoVCpa4YVOtpp1xXF6fkvg6vXRWgfTiDMqHMklsOEvY4mmazD2lGq0bN6dWE/TmpTrQ/gmvMhX3ZgPTmiaG2PyaTQaCPqyGGSiUnko0XuWg4xRObHOBU1DU+bBWz1dHBalUiHEshSq+qY+zqLKfch2uFSgpBDk64c3LS6qqqRL9gwzc3eaXXgI6po8X03u3WlnD5PUN+X2+fUQ4y12zukP0SCQavO3lmGOufi8Xjv+jZ215NITMS4asN8XlkEQxFsrW1jYsaCRGSS6GpOXZSlF6uYyWkgDDFACErdJ12cJoXzBUPaMhMfm0CdycxtbeATnz+jayeXKcLl92Hm4BFSrRFU9hoMDKT8ybf5jESqZhax2Dg65X2U0vtIHBa6WOF3evDSb3wdxUKDf/Yy/Aw0pXffUVRfZ6LyhhhIwn4NoAOuO4fPrwzC7Q/qOpQcIOUDebDRiVkG1VN4/40fDNuRHurH2RBNhLWbXQ57fvLdH2Pt7ioyRJFHn/oiDvblBJt0MyIzv2aMToSxsZ4hqkxj7kQMn5r+Z1jdfAfXLZdxv3cbORAttjt6gFCv9XRs7ZEFLClKy+yQLLqeSo7UVBDOH5njgwnB6Y9p7ahOxCHSLiLzsbpnxx/97xdwdMqGILP+m5eLuHirgMPzHvhIEUU1dDoqAvrA4UUGrLgZ56+UkFst4NgiERjpHLgQnzjg1I3/g4sD7XNKc/EwycLnCqiWeGcgw81y2mbWDNfpZvnQSqh381pUloMBUVP0Mlt1mgFVZbAT3YVEpYDorJBLoiTSsPw7rV4T9oGbv1yqutrqdbVJ0ycNdk6P2jkJOXeLi66M47jdcEobQ7OiKKsrtaeuoVjQYWCqMouJllNLZ7X66kAjQ8pmrfQY7tgyoyh1B5mul3uS/jOnHMPbneqmXG5IzxURlRT8G1UjQHITDnpG1LM6nNpTI71DTqKLgMybuXxa6xMUkGL2F/MBEV+UGT/Z6IJSpSlUiuk+UsdgKKSNkt7OGmzVLHYaJUjp32Xvqf76/NwIIg3+u4zUNIiwuDjbIyOo9azq7jPomFUqeH8QIcp1I8Zkc3yqiFE3g9ZDgxBt0+prPUs2ksyj9TXxGUPs7dZAx5MkqJblZFPUH0Qy2mwErmwmrya68ZEXGbgaaicmignttkm76aW2JN8RCPmJjJgkU0UdQP7+D97EgcOTePzMWW5oN/rcVPl0BZVsRWWFpbDujyyimmPAmJjCtUvv8nkUSL+NIecmr6VZa+o1h0bjugdunLvANc3nJsYSXCMloiof11IptYPRaA8x0sTNO1fQrDOo8n1MHTxF2mwna/Bi59Y1bP3032Lh5DRGT/2vWGEwu/7eNT0oGYjSrLSARKfgHyF6TW5xTZVhZ5IVqi3uzT2TE1UiKy8RpFd8A0jjdU1z3UjAkoQniN0kPW4iXOlwk46ewp3L76OY3DOMPRhM4uOkjNEQ7t/ZZDDO6IqcmQpj5cAo3FGL6tI7yEw8IT4jJvtuqoeRRATrF1OYWIygv+jD0q3DcCQHqPS45/ldHXuWW5bvy94UpfdHF7BMhgPmsPBeVj89f2iRizlCiBzhw3Ez89ZVyO3gWBenl904s3gc5fwoXn37Gq7fS2FlPk6E0MF+oYOlCRsCfie2dxq4uipF8y08fsCH1y5XUSl1MJHgRiHJF7t1CWzPHgowa3DxvSc9Lw0UikVmoi43Z1+ppaqiihSvx47gsGhc0474ghau5di8XGoga+nCYzJaBixa2wmq4J3bG+C15rhoCmg3agw6Xdh5T/2h9rqgkYazRbTkVQUB2SjaWd+z6hB0i4FCGjSbzI7ijajKCvwlDZzSYuVRNU7zx4YOUluySl2Ni8nO36WlQxQuxaBWxoGkkCoSwzUuzDIXcrNe08bVHhNF35ga1usXdGS3SbGfSJf3IqNIEqhEv0oliqUJlVS3wUUvnnXdvmHOajQOEi2QBgT9YRX6m/KlMeNMcaHWVeVU5ytbwGomhGvpNMYDA5w6OK6zhN94Zwdv3Unz+UX5GUK5Y3pPHQbuYmEfqZodb64dwmSoiJORbbgsbZ2TlGAuzsHq1iNFeKWlXQ3MOpWs6leCthgcbWZ1TfL6Qyh3DEHCgcmLKJNkMpXRgw3z0PlZBBolWQltnl2cJu2TGlcP71++ooO+N65XsDy1jPM//gAX3r+oa+fnf+mzeOFLz+nwttC23O4TXG85Un4/bt+4j+mWGb5JBppyX99ZbGxU3/v1d9/VWuPYwpIeUrSqJd1c8o5ahbsIrsSV1le4nlq87hn+PZsngT2iq2iUaH3pJCz934czzuBiDyESD2rbjvQ1CevoyTqqFAxndEtf37ndF2PwdCmNThx8DHfe+ibci+NqYy9eC91GRxGr2Nfb3X49BND6lieoqcIXTWBsbgH5vR1YGfykhtZjosjspxAOhTEzN8k1aNWWlWqxQBTHQFnaRi90gIGoD2/MjlyqqU22pT0bNm9mcOCxUWwfNWGvcB8Brw3h4iiCbTt2EhVslnIwlR5RDcuQcRnW1/tSaC7w5qKkG6P8PcQNG1Ljzwqh6hQz07/8eQ/mR6RLNoemo4PjX13EuY+S+LffzSFZsmAyymC2EOTCrmE0IXUljw7P3lzPYS5hRZNZ6MF+A2EfdGREOTeDz3OH/LAQ+Xy7E9ObKZbzyGRqDFoJ1WQXuRs3aVgTfkQkEJRS6kKrfVemJpqkcgWVL7Mz8ATg90ivkEvlNW2OMf57hMGhyICZQZ0/JyNA4g/HqIMWo063b7RzNNwMXHzpMqso1Ef+T9yNO6STro5H5/rENaTOheQMMDAHGVz2S4bOkt2pAckh4oTSEMoN4JDiMj/HcG0GGtLJXhN3kZIqrja1uN/QTS3BSI6mbVanBmqZGfR6/AYaY2CtlEpaV5O+LXGGFr1vkaOR3rCe9K1JywK/T8YzIuERvQcp+o77cjgczmivkRyiOEULjNf7fnYJG+0V+K11bpocLt7YY4Bz4eRsAMuzXrx7J4/rmwyKzNh+UqNQaAH+8AIK6TUUaxmULSdwvnocwfyrGLOt8l4GWrvradvEADJHb7ea1AZMdPctFkO+WaR3Rd9Li/YMCv1KRzW9LM45rQ22SP/lNFZPI1VCR4K2B4nECOYOzCgjyEugunZXGzszuR3cuHIT33zlu5qMbGYn/vrP/wGzK9OYOzinqh4Od4IBcRzjcwdw/94mqtevI7p8CYkDn0SYyMLB77h6/l0UU0kcPHNaN70OffPdFIhgd9evqN5Yp8MEIKevxRI/04uFw8e51jvaJyjBw+5kUD3zspYNpO/NzOAsApDqStWsMqhsorC3pUnSyZ+PLwW1/udhYCkndzF54gns3b6MjZt3iHSm+Mz9xsC/zDyS3QRGF/lMuPfKRdgDEQazhr7vkck53LZfVFdnqftFxqNYOH4WXgahPr9XtLVqhRyXu4fvoY1OZZUJ4aDue1/Ehqy9oUFQJkP27uYxcyiG6MIkdjfGMNpqKxuRccIS6fGSO4YnnMuPDmGpzpMU3VsllUdx+ib44EPMZDF13miJYF6rinubefzBv7uFJ2e7+MRRL2IBCyaYVToWJ4oNlwaAleUIPrpb4t8lSmNUjwQ6RBYDuO1i4d5Dkx/4wc067mw38d+87GCwYOYIxrU/58mDTjQ6brxxKYZA1Y7UXgrF4j7pBKmUw6dZ3s0F3u0TCsssnZUZgcGn3y6pvEtdZJTNhoCfyIj4Oj6dpXIKNbCJIaqLASaCaiSOWimrygJCS7rtqkqf1ETvWhBXWwrPDI0+vzaPOiToiUGD3a60TBoCbY02Mz5zp6sPX8DKBWrRAGG1GZ3CcnRs+DaaVd5Sjq2rfI4yUtSoVwz/PjXUgJ70edwB3bQOj4f/7FXJGLVxb4umV0HVReWfDUpq1NM6zPBdS/dju3kxcpA6TZj3KKdy5XIVMVcJx8PM6FITY5aWESc5Db5RXsF674TqzNcGDux0FrAj40rX1/AvvvosThySwHCR79eJxx4/oidUG7tFXL5f05nPuI8bt5mHIzaHXOzLKObfwRHvW7wuuxbRZZpAxj5sdouqcMqpoW3ohyeFZxOptIfv3e6PodLcgonUeCR+RBsfJYkJlVPzC/5dl9AoUqKZ+WkGKI/e962P7jEwCZIPYje9gyrfl88RgNVv02deLtZw59IDUruIjnD5Y8wszgQTQBSJkTh2d3Zx5/3Xsfzkz+vY1PULF5Ha3cLc8jID2KjS8K6MPTHB3Lt+GY5uEhYi/P3dJJHXR2qqMT4xisjEPO7erescn2iKVfJ1NcFwhczG8L1or/Eaq6U6inv3UdzdJe02xvQt/HObw6x10VAsjsLOlgpFHnnpV/H6f/hj3LjMoDU9iumlcTVgFYWTWiEDL6lqeX8TuQdXSdf5nWYxWJXpDL9KRR978nEsnnlGJzR6TGxwh9EqpWFzt5UZOCDO0Vt6Ui3vysVnZvEwYVf5OWQLpZwJyc0CZriXpw59CrXXXsXd3h7KpIYOBmCHSF33rI8uYAkPaLay3PjkzuF5QtERPuQR7a6WyfRWvUgqRQjcqGC1YMba/gDfu5TEdKSDw1N2bBS4kb0+HJ3gA232sbrFGxdkxpWyT6qW8EEb53bSFWSzbT3VSpPz/9OFPD51osONHlD6JI45n32M0N9tZ9AiPSNSube+hlx2D3UPg5ZLhmR9OixrkZ4U66ieEnZru0RnpHu1MilSgy+kqy9DNneNG11OmwRtCSUTh2t/kD8Tn+A917nwKnzJBa2LSY2qbm5r+4L8N5GpDZCG+PweRUyShYWOOsQX0NHn5uHLt3V0RlGqgNLprUhKKKxoozda2kBZU0RFCivziNKVzFUiDaw+bnq316f375IgZbMaWvHcsE0G3LrUtVo148RPqahBt+R9qZie+aHpqInXGeR1jCu1kHYMseGKOMs4M5qFvV9FU7TCpVDOlXKzcQi7loMYCfa00XG/ZMbljRZOTZ3E6aMemDs1bO7uw8Zv+f2vTGH59KKeWFXyGVy5mcaf/N+XkG3OYmxyCc+fdqvZx48uLOL9VhTHbK/Da67DKgjD6tR+LbdLHI5MwwMdaD3KFSaq8UWxtpNGriobJ4FwZBL5dME4ZZQCssoFWfRUTN7h3NK0/jc5gNnc3GfgiXEvGq5LqVIeZ548gY3VTR1feubJx7B0eF5Hdjwhtxr0Wu3jpKhkCHPLXFMpHVa+c+E7GLiXscd/nlqcw+jMLKmR0awr4nlrt24jv3UNi1Me3SqFQhnr97YM1YPTj/EeRhh8UyovJMjPxfXVb/VRSlUQnfQpogzGx5iosjpMLXUom1B8Bp3AyDQsDMQS4LxEdBbxOSCKDk/M4MRLX8Q7f/fnRJGrSCVzOHh4Ad4IgQTXQ3Hzvjb9brx/SadSZFZU2hwE0a2cOom5Y2d1PAkq8OfTxGEfelGKNHO/kIap31Jtf5FnszvN8MRtekLr5OfJPkmuFjExG0J4NIRN0qHiThF7jBEO5wApSxE/JkP5pUcVsES3udcW/R6Znh/n5okYA5OdLumHdFSXVVIVcnIo0sHcINl2EGnShYtrBbicMqcmIycebkLSNz8zud2lzZqHJuz4rReiGB/zIZUpEFlJP1IN67sZ/PByHZFgH2F/SvXCVSmUmfiZw269pTcuBTEyNolqfZ10KEfuTlTi40PtCWrzqkaPPGC7VySWg6jlMmi0xCi2aDS/utpayBW3XkfdoSM2Ho9LM4+Dmc3NINgPSX/LmIr/iclqjUG5q043PT2+LZJy1vttZjCXcZooukEWo5grJ6tN8YIb6sXLrJUschEZrFXr2pIgFl+9oVaTPxTVaXfplxKKIzN4Uqvqq/Qx6SjRnjQCNps1QwGz1dJr6WrbSU9VUlTwVOinMfqpn+fxRvn8iYZ7ZkOQjj8XcZTx2FgGHouoafZVlqbPRfruuheX8hbMLXbwm5+Jw2Pv4/ZGHRfumLRJ99jyFK6treKt724gXTJhdGQf0wcqKBORygnX7IgJLz0exv/z1i5+7ZOn8F99gQuaP/9gvYvt5nHcKkQw33wVUXdWO7AFYbn47CQYC2UWCjhwh9D3xpEjqo2szGKc77K2XtMaoKiq6qmjCUN3H6sqoIaiUUSI5mWurUo61qr3MH2YScdUV/Qlm7rsrqA1aKt7z8A9QHw0TmTRQYuB3yynq94QupETGOVeHtlZ5XVv4Pwrf42pk79AhMPrmJhgwg4Z301kkiXCf3D1fdjFaJfPV8aRZHKgUjLUaxPzRzAwe3QcyKI/ROTh7cCHOipbhl5+OB6Fby+IXrOAXDrFZxlHdHQBTlHDlPfOJCtD61Z3UOWPpb7VqRMtkv4GSM/FzLRaLuHihWtEPhUcfuKU1tqKTB7SYyXySHYGotR+igk0qgdI0kLh8R9SRiJesRbRZLOorKzW54SCOv3DoXHuD+mf84VtKO20NIC5XeKEVUExV0OU+zYwfgyFez8i+uefMwZYfTY0+PsjmyVsMWDJiZIzMMaXGoGbmU86t1ukLt1h57d0wOvw88DGbNLFwVEzJsZGuABncX+Xi4JUoM0M43CY8OJj43jvbkukH7BbAr7xkzK++skG4vEAjuoAqRvH533I1rbwD+fKsHSq+NxTUuMIEulIbaONZ48GVe30u+9ykfVM2N5cJ8UpapHdJfZZXlIxIhM76V5AFEgtRFGOEOqlJKqkNnKq16k1iShIhUjjmkL5iBIcJTtcXrfOvvkJ40X9Uk6TxPlX5DiCfUPaVwZaG03DQkooYq3T0+N1U6NpmF0Q4bXdDWZtqSF11dnH/ND3UY1lzfCKjK0U7xmY5BhaF7Yc54vccN9QSK1UiwxQTQanqsrzttV1p6MZtCv3qd3mZkUlhsuLknhtdQh4A9q0KDLI6Vxb9eVl3Mdra+BENAlPn4GvZTJaI9DEB9sD3M77iIpN+NKnPXjySJzIZYBTB0p4fKEIS7eKyYQbyewENpJFpArAn/zNPdL0Dp5YCelmErfnsL2NMW8Ty/yOZlH6uOpEuUnkc1aMjk7i1tZTWOy8jxmuEbt0VnuJHnmtTiJKmycESPOjxYGAqpx2tKPcK3OX0m4yVDvF0N5NSgB2PrcRbnynWLTzTvY2MnqqOzqdwI9fe1NrjRZpMC0VdHC8TqTw9//wClHYFr7+O1+Fl+hTxur8YX5n5Dj27mZw8MhjXE8MIrk8CusXcPyp5+CPJ/Q0TFQKmlwrdz66hFZhjVSzR5Tc1IFuTyio7SQ2Im9PeITXb1GhPpk8KKU30Ei/hnCgRQT1m6pyEhlPwP3Aq45RrVqL1LCEKNe+DNoPxBtBjD36LU1A3mCIyCypc45bV9/VBttg0ItJwuIimcr61i7KTNrHHzujbKDF95JOl7S+KX93lCBj694dzHN9FtO7fF4eQ8vdbdfgqEFLggXvwz16WPfz0PSbe57P2WtCXxzRCb0GDQsK+wxYIz5MH1rA5PkJWLie7tr3UCkyKXf6jy5gyTXbye3d7jh5bkh1lcRBVpsmuy1tLJUo3LVws3MhffaEF7/8wjQi5HouXxDJMnD+oxw+vJrEO9eaeOqoF5/kr800qQlfks1rx6sflvFgO4PD4328fNqHeCyM6Zgfb18t4dJ6D88caaj5hNNv1V4dCZZPHgqpH9+33pZG0Uk9ZVIrbD0iHugiiYignMepagEyniJ00cVAUatKjaqoyKUjzrm89h4XY4uBq0G0KKdvJUJfKWjrnKDdYTSEytiPTfqH3Gr53u66VZFT1DfVhl5n8Lqqv1TmvUlwMZuchgSRSg6bh/6AJtUkGsA4fZX6k6oqEEEIZZOZRakLydyiFPF7iqK6hopB3/DD0xNHs1nHWdTq3GzMdUox3sfEIjRJgkVN7pP7vNoawO9o4lg0A+ZZlb4W2SKnuY/7GRdu5QaYm7Dij3/vLE6eOqSHKWI4Kw2xUXcBa9dIfzb6CLrG8dxj07jBjZ0s9vG//MVtnFhOYDluwYh/jzSbn0sac+nSbVI/UpTmAMeXSElTRayme/CGRnF9ewQjJ2aRmB1jlrdqMV3eX9s05CG99lDXYoByroSYRezZmCQ6reFhkOGYJLrrMoHg43uW5FTJt7C7nsXcwjSyuRxW769jZmriY3ORrkfEF+Wpu3Dhwgek/E380b/+fbj8btQLTVTK0utlISqL4/CRE7hx8woy++vIrl7A4snTij76bQaH23eQvHcJLmtdi9pyqtes1XVe0yGehpFRrhGXSkGbVQHWxWWZx4fvXMRjjy8gFulovc4bCMEXiKC6B51+EPFA9dpslBRZ2+UdVtvavCvoTj5/59oF7F+/BL/frgjT6XViJhrAjFDf/QIu877mlmf0MEI6zqtcV04m23w2T+RuJr19QKRfQ2J6Vk/hTT2fqjKoZDVRosnOxOFb0kFvk3lo9SZmuGExSjVUP0Rlt7BHtL/c5XpzIHb0aVx+/xtoentqFisB95HIy+jmYsYTKmhx+FTDSCy1OqQlaq8uvnow2grkpmUYs9o3IVnllrQxGDWy/HIbQlYhRuInN8Bbl7JYGndiMcH/wgB14WoKd9f5WWBgscjIiRsddxWJkA0+Txwb+TwacMPS6qJdKcJDitlqE3o3Cjg840W5asM/VmRxTDIwpFSpoM4XLkOZ1n4VfldEM65HptItVi1825wBIqacjueIEkCD92IS1VK+oC7paqfjIHWyql5TsWT7WEveZXPokbp8jsD8h3nk4eYaDKfUW0ZVmegIKlOijkE943TMrKdkXR3z6KsUc9c40ZPgKVRVtPRFM0tmHOW0b2AI/T007dRSg9lqBCpZcENpH8nkgUAMfp+PQW4wHCY2VA4q9Q4X3QAnYwWELQXGhL7WgKzdBgpdDy4VRA7XjhtbRbz6xk0sz4T5rhp8PmUVXRRlDLE+Eweltj/Kf+4jEbUxEPlQbgVxe7OBuxs5Lv4KViZ7OHvQjft3b2JpKoCnnnkKz386wiTTwsWPHuD/+k4a1cIEXvnHi/i5r5xBfCQGvh1DWgZGUV2CsQ5TS92ubNIVLHLQUhSGJgdjLMXGYCWUUp6FGGdUi3U9sp8/PILvf+91RFRq2aotEpJwRKWhx2u3NaQW49E+pDdefRuf+PSzOjzuDXmwcOxJJDfsCI87cNRuxoPbt/Dgwx9gbHYOc2e/iP2NbawzaFg6RKleh3a/2612TRYyj9ozddQw1WRycJ/0tGYm7+foMy9jZPKABiSTNc733OY9ezCzcgD7N8+RdkUQGZ1GOUOUktnX6RKRevEwwPfaYbjFmYefvX7hB9pbaIt6VSpGTlTEgUdUMBITY9jbySGzu4dA0KOlCKHMMjXQ5FoY9EnbigX4Ax7U93dgE7AxMgezk8+HKLvK4Hh3axzT7g5GnV0duRKUZSUzcrmZzD1ct+W+sohOtYVStoaR2SDGDxzG9UthzLd4rf17aLoaj67o7mK2EacY+RiZMjGjxQ0pUrp1reMMhr0wNouI+lpw/l4P13YqWBjz4xfO1LA84cXde2ltjPsfvhJDu2dATXEJuXQnha39rvqiSVf0PnnxWrqqlOD8nTas/jnke0Fc3ajgpSdC2NnP8AdJBQKkcA3xveviNDdNf+DFP/3UrKYOMsIhFkQiDdviPxeLws/tCAa6Wpi3MiM6CKNbDjF/8KHuyvGzSL3EzlsQTIP821TXgqjdbNPjdXJbWBpWI1BJK4JqPlmHQ57mj4eG8dAki4uoYi6qBIiYSAgtUy38vtGDJLSwp+qN/aHZR0/rYtKJJMoR2ps0+JlEhwQqoXlyb9JDJcVU7ewShU5u2ABRo7Q4CKyvV+uqtKrNrwzE1XoNIVcPR0e7IKlQ266+2QiKyaodlzNjqPXCCEYTSsH+7icbqDbP4VdenEGQVKBAqpHPF7QzPRBLYLPj4VXW0Rk4cH0tjxcOO3F2PoR81Y/XLq4hmU/j0JQDa/s5rG2s4vCxBfScVmntxyRBwoF4GdfuylB4GN/+zz/AF3/jc6i6qlrMdREJC3ISDCR1OjkJNFUGsEa4nRRdioWFWe/NzyQkCq+iVyUBTMT9ZPRp/sAE11gLqw/W8NTZ0yhUytroK7ZfrY5QfuPUVIv3TKAyLC2CiJ6AWzvGZcBzdOExbN1uITxyFHPtutZq9669CpfLgrUHNWQ27mJixKaKCtpaIb19VmMkS9CIGM3KlTab3Y9NieW9js4e0TpjMZXTLn5plYlPjcPEvy9TBTXS1mJyX5Gt1Jjqok9Fetk11bSehewl9OolbcfRtg+p0fK5yd91+f1Mpk4cPH0SG/fXkGXQkv40cQKSaQzR85IAJ/VKEeuzu6dgJwMqbm9o536pJocTZ1AoMZB69uAPTRO5Gv1uYjYsAcvhbTNx8H1Iom2YGFybRGoDjMVHYCKqv7l1HzVxGqo9QrUGO1GOPGU5Um41CVXN7mH9ZKiKYzIaIuV/KqRn5cM3S6+WBysTZUxMRrE438Xb37qBubERzM/FtdDd4Ea+dLXBhcQHKp5+8oL7Pry/0cD3brawWYjqRH2/F8O3P7yI+UQRc3EX8gxGFnXudKHecelM2PEZC9zMVt+5IHLJ01xAaRTI92VYu9koQ6wFRDfI6/Mj6BcrcocuNNX4llGWRhht0h5pK+g26tqaIMXwBhHIoGUI7hkCgRYVMVOTBrMx0CuQx/RQ8FCVDkw6fjTu72r7hJiTaDDqG2NHg6EBQ186v6VwPDSYFTrZH3aFG/VzkyptypG/qCtIg+PHM3kimueUwfCwdlmLqoHItdRKNZVrFiog/UrSFe5xDvD0dAsmkXVpGmoKNqK6VNOOcztx5FpiHpvlhkkjGD/EhTfJ90dqmVhCKGDRrnSHewdmZuQbSVFQ7TAo1bCU8GA3B9zYaeNXZ4mqjk8jT5Ty5qUevvOBiMKF8cr7Zbxx84fa0tE1hZGuebkJp9BhFh7I/GXfjdf+8ft48Uuf05O0rthoMako3SOabRDheexu1WaXk1GpH6kOoUgRqryKg+8zIGAWxXQd/rALx8/O4c/+49+qGmx8LIbcnaLRrGu26bsJh4KYWh4jmqgjNhLC8ceP6jB9s8IEGRKFiD4qBZG8nkZwdAWNcgueznXtbDc1tzER8+BiRdojmjh+TNpLHESCFp29k0K1JyhSTLymronPtKP6UMJDmjU5hGFgDjg0eEkdzk7EJ1MGIv+SS6YQju/rMLMEbqfUwSIxFUOs5TfQKadQTe8YChxqctKC2+fSPj5BkXZGYpu0zvD35TOPc72dY7AuwsK1bBZdfoshBy4BMDw2xUTawvVXvofNnbROW+Rbj6lu2xhZz9bdFEamZOQurOxOmLoELJuL78jb1RlPCZa1vDAionePDUdXnkdqewsVJoV8sfToTCgsIo8i0iiE+/0y+TRfhqCErs7M/ayZUY7eHXaf9j9Z7AEkAjI20NF5PZn8r9QGeOXNLXzFbuLDamArTYpRa6iM8E7BoQ2DJlMEhTYzXs+r3eDaB+KxYC93AH/yyiZeOlLDsytAI59DjwukPhDN9xChrYWIzoOvfNKLV87xs01xw56+tmvMJtYr6JCiNtvSOV7VTS79TNKwKNnDIc4iDFwOd4T8vogGg5wUudWIQF2b+9o8apL+JsJy/r+f6ZiLCsFDPQ1pJRhYNYO361zEdrEDr2ojtwHABj/TVIEhmaxeiMMBX7XnkqBoNUxUTUP3Yov2J1l1Uwj1c4taJ2mHoLtOq4F8rarBUTaHDn+LsSxXZzxoxbMLXTjaNaQaPZUDIrHGftGGDzJTyDaE9nbU7aeau8WsX8WLZ+fxv/3XT8PDzS8zjHLokGaw284Dr1/l5uJGbTAbPyDCnucz39zt427ShMdPO3B4IYgLt4hGCqSbFgbMHKngjlVrjf7EnCIRD38FA5MoZe5qv1U2z8R1/iJOPH0GtppFEZN0kUshOL2RwZJ3UdGoaGnJgpDEqLI8DnGi9sEb8KkFXalYU020EoPcB+9/hIOLSwiEvdpLBykpyKkYn1eNz+nZz52Gl2ugUhA5nq6qH7i4FvL7WZV/8TJRLhyRtgcnkrsn0eHfE2FITyiBWCCOZz7VwI+++xECRP6Hj/hVZUSTGoNscGSGz9iprRI10i9zd6AzpDYGGYfLTnRDhiI68m4opS1WKqhWSNtLclBHOukN8tmHGdiimiSl3UFkYKrpVRQyhoqumO5KUT0kDs/itej3aE1UjFjFJccdSGDpzNPY3d7W0SI5JBPkGIhGYPUFGJj63G89jE/HkBiPcC9ZcONBgmxH9NOAerGK9HZJi+oyuyhrXdob5FS3x98H9g6sHQINPrtKrom414aV4wcRu/EyirUC7pnWH12nuxSLu2IYSkTVITS1CUHh07aaDDtsh3ZdB3ToVrvT1ca8iwfJNnZyXWacPi7dI4Ww+vHKxSaub5L72+qkflaVdjm7KH1HPezkzbqgOn0Pnj3qwZGDC7h0t4zbmx20+JD3CjP4s5/s4bXr+/jsoQ6WQhXYPC3VZ3f0PNo2MMsN9LUvRBkYc7i3G4MrxCxQLqFUrhFhVZRCiRxzrVnmi/fBT0gsx95SuLXbPTpq027zJUlfk8oQk1aKJIvUl7qGUYNSur5hIKrO7+o40zNUBcxiYdXWF1xr2UW13QhPDymjPE/TzyRkVbXRZBTLpSBvHlJOCViCpGwWQ1LFqtfnZqDyKPUQxCbNouKX11YTDMM3UGo8ato1sBEJ2PC5o8zWTADJaofBsKfD5Xs1D97ejiHfkEBbV+0rQcpSm5yL5PHfvnQE/cJ9pFLSF2GHo19HllT9G+81+Q4cOLviRJcU7Tvv1/D80R6+9OkJvPfhA2xs/Aj5ehc+pyEsJ7UkKRMsHDio76hBdN7uN/mdQbUfk83daGaZ+L24c2MTBw4fgD0cUqokSUDQr63NzRd1ktbXVIZHEqf8ciuttyMUCiEQ8iIa9+rTFFr4vVfPMQA0MTMzgfhkmMnTrAlHEIEk1xIjw7e//Tp++3e+yMTlxN7mFnbWNzRpLC7NcZPGkZiLEYnYsHFnE6HoBGr2zyGTuQp/vAFfiGtvKYbztgzu3PdhdLSBiVm/upGL7LNosPHruba7Wi+KhSI6u9licrYOGmi0mMTqLdh8TsP3UXRUBzaVfpGiughPivyxjCjlmZiT9+6hlt5FoSbCZgneA1Gn162JWHSuosGArhERj5T6rD2Q0IQZm1rE6PQCsslz/HOvtl1IH0N8chKzx57UzvR6dgfNUhaF5BbGAuvI5Uf02QvWz+4XUcpG4JbGUaJ8kWcSG7kug12XQcvSthj6ckw4/QmftuI0x72Ica/7A0uPjhIaQnJtVUYQoiK1D3FhFij88IRK/pP0BanllGxm/q9Y7OE/vQVE3suS2/YYPEZ5IVY8yIpESg9+twXHpkRrq4HZMH8l7NxodoxGXFiYdWKMAelzv72CDD/nX/3lPVws83vcI7i128H9zXVM+HN4bKmCF04JX+ZGMCfUtDUctOAXn4/gxxfy2E1Fdc7OattHLpdkAKprC4YcN4v+eqNVhs8nFNGrRXnpIJf+rYFDTD2dqLelq7yl0i+DYQd5t2tIBqvaYn9Yo+gbRXGoWJ1iJ7j5WdLNLFPv1iFl/plWvtnQwjcJepKZQIshuKc2XzaD9kmhXySFh9ZffRUAbBtWXG1Dj6ujnd9GH9ZQOk+R2cqEFU8v8Jn3yyhU29rzZCW6upHz4VJ6BmU93U2pqKCVG2fQrOsBStDnwdW7JaKmAoJuk04n7Baa+N7FtiaOX3lhHF//wjwuXMljM7OPbKWLdSJl5ipcWy2j2uiQUkS1phQmTfidlyfwxNmIdtFvb+7hr36UQ7Hn1lYCn38U5eKGUbA2u/HuW+/h819+2egdE/QoWmRdI1jXahn12tPGUpkDJQqTZt1gJKhKDJ6gS5txb1zZwMX3PsJILIH4aASRWEh7oiTZSn+S0E4J+lev38a//tP/Eyuz86QxOexuptWtKJUq4qu/8zI/34HdBynd4IUcEXe5gfj4E9jZyROR7WFy3ovDh6J49Z8u4sMPgZGxOLwMHN7INNpdi47b1Mo1LXsgInXFLPYu/z2ioTzcoy8zoBz9eH9Jv53dLeqjecObUpy9TW4kd3awe+cWqslN3L6TI9J5kc/WhDy/X5pkxGladOrEMzHAoG5nUockN65fYQaS1Ebml3Dl3Z8SdRmKvAePHcH0wZNEUXYN4m45zeSnWdP7iESaCGR7Gi4szh6qRFmlfBWRMTccHkPux+62qjGH/N5vGe03taKoeoh6LYPtgTFs3byIGefso0NYvV7LqLvIYZQGrKb279gsfW2OlCAgdSJobcWq8itWOaK1W7RxrkbaGA62UK4PVK89Fu7huRMJjMfauL9ewRs3mGmrefzmCy186TOHtJWgxc36dz9cxbsfZfBrLx/Gr78Qwf2tKoNOC9Z+HpVyFtfSOQauFnbSRfzyC4vMbgHtBZLj/1AogK99PoKfXirjJx9V1fm4zReYy6VRlbYHXrfFVtURmQoXk8cjp4Zh+Nx+YwSGG9VNXj8rjjVZC/Jl2VREKG7DTHfQN07uWtK4qeKGRtEcKlMD/XeXa8DP6vN3oa1mFR6UoqyO51icSmsELVm158GsKg5dLbhDg5XTYZx8ScFUJGXEsFYaRaV2qIhv2Eahb0XHWQTZ2PH4ggXHR8roS7G4A2OMpNPFrUwM72wlUOf7slqMGdFeu8T7iCrSk6Pq965u49KqFeHoKHxeyawDZHIldMxhJCJ9/OJTDO6WGsy9Iv74t6a4ucr4j3+7ig/uFHBwIYLlqI2bu46FeB8zo/zU5i7q5QDCPjsOL4/gxE5JG4KbFpeawsqol54029xIpwq4feUqlo4e1qRXSZKS2MMq/leuVQyBP+kWdzq1BunxeFTH3eN3Km0W1/EP3rvFzdPEkcUDREYB1eMS/TCX1aP1LkEBMucQjcZQKNXx1rmLmItPIsHgKfR8f7WEH3/zXfz8b3xa6ZibgfBbf/tjHJyfwcHjS3D4xxnIuGlvpXH62aewu7WDDz64pE2cv/i1L8Adn8bedha+xCga6ZSq3wq6uvfhu8iungfmgkgECjD5rLp+pOwg7QzheJyBqaiWdNLEmhTUd/sWSsk9VLtWfHi7heXxBiKBaS4xJ/eX6CvY4Y8FtObWrBRhGplSn8BmPsXg3kKdidFLJCYsSOY25w/MKEKq5nbhFeQcHsegUdT142Sw7VgMRVfZ6C4iKDnQqhSY1CsdDUbCEpz8vSlO4E45h+oRZZmVQjfKHbi8VvijI7hulkOKmzj2KGpYD0+wBDboUTtkYJNoQzra+cvcMxCWoC2RxpANKOMHJmaYo7Md/Pbn7IiG7Uhy0+8zet+4V8Z4xIb5aSf+j2+lcGvLg7YoFrYquLsn84ptBisTs6YPQUeZL2oHf3h1FfGRKEz8rlJuFf3KfTXwlKzUhxevf1QmBF/H737Zh3A4QFQhFvbSatHBqWUHN7oL527zugY+xFxxWPKEwEVmynqVL5Xop1FDmZvMVSroSZtXmhiJtgJeD84sMKC0igi4udFbNhSrhrONBBkx5PRZjVlAA1wZRXUtrnMRxENNrVlN9B0K/aXoK0fPygH7xoiNnMqJGJtoNAkV8nChnJh3aWH1wo2CNo+qWUbrYS+WMX4jp2WmYV1LTspMDIDxoBNPLA8w6y8rJZLXrs5dYsnWCiLVGeEfcbF3KloTkQMEofqDHgOYLQBbcJlIa5ufSQRqiSLfFSffHrNwhPfVIXVo4eY6f44/8+aHaQYdPz5zcIDf+7lx/PfpPt6/UcFooocnj4TRbKVIocr4m1tJfN0ZxqeePoQQUc9/9/UjeOJMEd98gwmnxo1kcfMeC9qiYLb7cOXD20Qvc4o8q6kyphITWlyWETDpb5Nt6vW7NAj7/X64PUwuLpsqMGyvZ7H6YBuj8RFMTI4ilAgpZZJgb3ab4eR7CHNjSqJoebw4EDN0/UVXKmDz6Kyct0RUXZIkNEB4PIjv/f1PVaxx9e4DuEMOPPcLT2Ni4QDXYRTFUhLPf+FLDAKv4spHH2BmZQmPvTiBVs+KkJwkiyGHuCv5vTj7ua9g5+6Synr3zOOwSVuLlA2KFSIz0sqJcdxngKvzPVe4PvPrq2jkM6j2fLh6a4B6MYbeiExl2OGJP4lq+g1dc/a2A7HJcVW+SPNnAqMjDEhZ7UGUKQ53KK4aYUEipF69gezOFgZca/ZAjIisrohVamb9Tk0TU2/g1+AmtTVRtK0xqJcZtNwhu2qt2RxDaugyoSu0n5S9Q0BTq7QQhrg9uRCfWsH2zXcepeJoWyG1KmKC1LBjVzNMi10gukezo3RZ2+wuHWdxkoOL2qXV1OWizXKhV3WPLoRNsE/k4HYHMTuZwMxEA7d3y9r+L+qaV9ZqDFplHF0Mo1PJIkUOHfeb8OLzC3iwRaoxEsS9aBfX1zxo9ByGPAkhRCH9Ec5f3cVYYhu/+xJRHqF9IStBlVmVAejsYQ/iURN++GEb5aqLWTkMd7agNl/VWtmgV1ygzXKL6CsNVyGvzXAFdwD/b5qZkAgnJPIrY36MjfqQq3tRbtn1Z6RuJPxeiuI2s9GLI70rcirl9DQgZjn+oFvbF3pqFtFWGtmWE1cxTBWtLLOYb/ZwYMJCtMcgJfbo8JFSNzRICR3XjnYVX+sPG0atKl8jDjU2iw9Lk1Y8NtOCu7/PDdpU8wg1hODn+6NTGPDz/a6OdoJb1OasoKd0smkkGNldQXijKyhlSQ/bSaJCq9ZJ4mELr3OA3WSSSDmIV96tYmunicvrPawVNnF3w4dknt9jC3HjOUizGYCtPjzY2cQEqf3ijA37qST20gk0JTFVSMsbXgS9HXXNVn9DcXzutxR1tkkBb1+9gSeffYbZf6A6+Q3xlGw1FM0LffaStsphiYx5ibu2lUg+t1/B+vq+nmTPTE4hMmJIt2QyGW310KmBcgUjo+M49dQJVYCdmplU1CVSPJfPXWMSBBLxMKYWxxEdD2HzbhI3PriNChNZsrqL27fvY4ff8fLXPgd3IMjA0iONszBoxXDiCSI7Iu07H15HZO5xQ96az1bccER80MPgOnvweRXD21nb1iRnddoVMbb4vkIRD44/PovRKT6DUpbfmQdTO1LFkCKxaFiSslFyMfsOwxpuoVO6iH3S7BIp69zhQ4xeZmzevoF6oaTD+bLp3MECA/RA52Yze2ntQxP2EKwTWXfiGrD6wwOaWldoqofrqauWZfLztUqDAbCBdtynz1mVfh1GW1K3IRZgPXVXatXE/FfUNyyILK5gJPkIh587zMiCrkx6Gi9H/C3DRLFjnNhYmSXFi1BcN6T/pNsz4/kTdvzWF1YYiMwolYoo7G/zoeWxnc2h3Uzh8OFpvHg6iLcvVVGpE9I7PSjwAXzn/L7OrFXKDbxzlVmcSOnzZ/P4/4h7z2BJz/NK7HTOufvmfCfnBAxGM8iJJEiCkqiVVrS4siVLa2+ta8tVtuSqrVr7h6tW1q692tKuXQoMSiS1WpKQCIAggQEGAwwm53zn5tR9O+f8tZ/zfD2Q/rjKVS4TBC8Gd27f7u97v/d9nvOkc/6r1w+i406IB9qF81eT+LO3i9goQNssspvncWg2jpi1g/cuJbF3RxzRUBsO+exm06GJ/MmYHV9/2Y27yz0JX+SAxAfECPmV6aAgaIvl/1bDIbfU0S7+WrMCl3hWUxE6gHy1jeUNMYpidKeG/BgLxZBvuAWuk6XUJgbGZMkkamHeiuEF+bHRInozqY9prJjLUWklMXART0fCq4aYkLp43CpSGwZurVblnsnjXlWDw8S1VhZ75nurOAMNFUvYDnP2cc+YBYeG8+hUU8rAoDJMbU32YPf+F1TF5cJHb8IvyImX1DVMFexGq2iWKZliJR+8OJ3x2WNYmb+IuLeG3/2vd+LQ7jBu3U/hD/6yqFz+ZVmXd26K8RWjxPzVnKDiVMmOuiGox9GRsNEHv9sjntosJhzdPYyMoNJ//c0LaIgPLomxamFY+9ka9aIaKnWKrDhzYN0RwLyg6u07t2CRZWM+MZMtqigHE7zeWEirZBzi9tFgeV3akJvZKsmBzMjnRzE0mkBCnBtL/ki5lKee4TVzlqnkJnYd3AZv0AzJOZs6OBrH818+pSNKFPbgocxnq7h/dQGDUVMCrklqajEs9248whMbm0gMxnDv4gYmdguiQhyeYEIigg2siaNkpGEWYwwdMtacj7utXfXNlkWnMHToOyhrFfWjKftsIFxHaMyHbDKDOxfXsJEawOz2F/DE8TjiXw1hdWkdH/7oAjY2t+CtBhBPnFDDk733hjqy+cuXERiKCYpqIpncUsPt8XPQPaWMqOxj7kkoRwfAfcE2GqYyVHZeznCxvR/ZAvUiyybjq9VsUG7USVtUl9CwAZeE9eyoMPe3hOYh2d4VcYEd2ek1dvpLWBiwwpsYknec/+yEVA0m8NgzxFZF2Yg2skSyD6RDnTgnupSv18qWSxbGicGgFb/xpTHs2hkGK8oDESs2uuL9anYsbeSxmcziyN5xPNy0StjWwc5hrxgBckm5MOjrSqi4gK1sB6UWUVQPf3f6FkaCdRQNN0YnZ/HKk3HM3b2M3ztzR1lHXz4YwJMSYp65V8ZzUyzR+rC6nsfkqFWVbroqTS8eNWZgm3hOKtm+c0lCBatAcXIFDcSUEzyXM5lHKxSKlYdQJSlbo6QiGGwQ7NpcWEp3kBQYH/KUEBZYPBTzotoLa2Mtq4KNnhyCOsnx3Ng1auDuQgXFss1kcZAN4Jd/BZ0l+GwVNOWArCTF4MpDb4mBaVKJFCaVLz2pNqzy4ZEdVA4XZcDYOsKuZiJYn9suIaCBndGMhDVJNVZK4EfJdLn+/Yeew5Fjr6BY2pDn1tAhXZs+z6o2ttqtbqoOas6t2djCYD2D3/nt30Q4ehB/8hc/xY9+fBYuy2F5Nl58+VQA757PYGHTjxqIagzd7OTq3z3txrKsi91iw6FdcTx4sEgpEXzpRBRffnUKVUHDM7eBP/xhR/vtTDZZOQTtms5kkjJTCwZEUGK02oYXVz++iuPTR7WqW61XNXfHrFs0EtDSBWmBXB6XslqQBTUrBotOdGxSjFUihMRIVPNaq4uCDCtiIuOyF4vy7FKbuH97Htv3TOpEgE3CIxoUtyC1aDyieVqG6BwDGts7hju3HwkqsWL33l0SinolHBzUz71+5j42V9PYdmBU0AVbS+JiVAPyPgXtiVPkwqKehFbdJofLHdqwy6RiQ8Jbj1/WXtAoG1rrYqzTmxvYknUql4K4ej0kyN+C0akupgeDSIwK6ts7KgjWj0vvU3y4o2fTHY0jL1FBKlNGNBHBdJBtRh1zOFv+ZEGsxfajLjRXS3YVm3KymUIVnXIOPYcfltBBtDJUKkorDTTVkghEHDaX5mXrNfZMMl0jKJ/yZ04z12oTA+YJdlUQhBX6RqkNf0icSMiDXNz92c0Sok9ya4M5ZEtjpWxz/PteRyfXdZU4sCkGgt3dH19P4sOL8+JROA2/hUdz5Isu4c58DmU50Df/8BHqHT+mRgfxL//LEQz4e7h7tyxeNaBe9c2LedjKLdW2u7JUR67WhcPI4uG1HBYkfHzt5BAezK9jY2UFT4wH8d2LRQyLd316mx931uv4j29n8MqhFl49YYHf2VUlF4642Lt1HN3mUNK/s9cbSBdsiAoqYEd3VEI3ziiWq2WVdy/kXUqsVqy2lU3U73eq92x1KJ5hUQGNhXQJEX9DDu4WRhJh7JwdRFV+J+ivYdeEQP6WoDyV6aI+XwYl2axrm1Vk5HdrLavOm9HTq7q1zejra5vkhUQh/JMCGmzC5Uwjw26CrpGIgcNjNQz7C2KssmgIArAJlG+LkSVl8J4nj2Pn9kk0S0swxIBJVAC3pa7zlJa2Q1BkWTc1c0KkBdq5LYjf/28OYftsBb6IOJ3fPIi//tEd/Js//AH27JJ1PUa6Har1ROR6TQ26XQMdHN4dw8d38kiEHPDIZk9lKkiLYRhIBEjgo++diDrwi89FBI118db5hvmZbBFhpZItlT2rCiz0+iKpRI6bm2m0x9tqQKgo1JZrJbpkC4qlZzKMkoOM3SHFYg25dFkMkAdxcT7U3ouSh01+78G9RR2SV7UeK1Wxa5i79wDhiE9zlTYdAZJQ0BvTQ8iWE4Y+TM4ffe6AhH4+nH7jY4zuHcbY8BBqhQbW7maQWS9jZCwmeyeIS+duwOsM4sjze+W+aipIwgtviSH1EgWtLKGduw6jfBue6JNiqOJmi1CzoWfpzqWbSN+LY3L3YYSGBN2V/1Kus4KN1SQmt8u6V5iIt+Lwqb0SBsvaLKQwc2QbShkH7nzgEAdbxS05Cy25/sMHppWHPpvKaIe7rWNTJlI2Z3P9OChfKRcRqRXQDs7AN3hQ3luMYrWErNxTo95SMkw972SRlfdsyTrWK1R2kn3stbHzwqxuiiFvyXN3Vhxyxpva3U4jzZxils1cnxmnO2XiOXZg9Wolq2tQxKChfOXomXC+q5ufRHZWQQ0d/N63cqrh16zyz7QcqE1tj+AojNMtELvsES8TkLg5gJWVAs4t3JOD1sPrLx/B7G4J4aYi+NaP1iUMq4v37kqoV8BvfXEUj1ZS+D//+gLGRxL41Rd34NrlCn50vYS1EpFdRymUM5kSNiVc/MuPJARDAV9/iW7ToYnFungMIrfpAfGWL3lw9WETN+caOoJMuaO6GIRYNKQzfclAVdBPSxO37HVqtAtwCVJh056D1VNCYUGUWwUDm7kW1pIbmIrW8AufO6j5vnw6K1Dfii8PWXDzXhJnz61ivcJwgfOIQdkQ5gHhRKKDfX39DnqXIFUO9fKLysNstqTkVYPhpBiKg+NdHJ5pi4fMYiMpKEXCmJoYd2u3iYdJFwrNMLYq85i/8wCjCTcGBgbkoBsIusXBSEjnFATaE4/baLa1ymhlb5as2U/PPJSNWUMgKAc/4sFUpIJzgjA/d/yAGLQ4Tu6TsFmefbZiQdjZwBck7P+F17chV53HG2dWEfDYsHdSQhwBTat54K/eL2Nucx7PHi7gyUOj+OoXDuGTu2uCRM0KqzmmRLRu7cud98ecCDHtQTxKLuIkTumITkdCnFgiqLBFOfC1XcT8nUK6qAY7FA+osMLI+IDm4LZSFWyuZxAKeLXYwbVmDnB1aw1jG6MIeCNma4l8xQbD5gyjYU4tdEmU3ulg3xPbEI4F8OHbF3Dpg9tiBMXJZbKqsD1AjrFhl6C4NeQzTUQHApg9MK6qyG1ZhFxKjOhMBCv3rmJz7m9w8EAY4w7m4V43h5nDMVw88wlunVnAs59/TUPch9fW4LB4NSwlv/3Nq/fwrT+9o72OL33pBKZ2jGH/C/vhk3AyOnIcs0++AMvlt+UaPTrRwNzo9K492PlEHHaOLonhZZWfnPU33v8YN67cQmxoGhuVp8XoTWH7mCAr5lCjLsRHBT2XBXwQgHBfcG0Mu7bONKpNDfl8IaeGs5z5ZG7QE5R9VLFrwUj52ATOcSrBu33g/5PBsv3P8r//VyrPlYrJePAP/vetb/9AvKqvT3DflK+6JupYpdJxEZtTDZHHF1bWQ7OJsauehvkvjsdwT3IExhWIKk2sS5kTwrJpnYLG1nHpfgEHZ4N47sQ4wuT68ToQdttw61EGhXIdqylBMt6OIOomvvPeAk5fTcNez+Hiwxwmpibw3/3CNvFuPQm/qtqZzT4TeqMFMXgJV0MMh0UZGNriTptNc1zC77VjdiqIWNius361GlkXBO2I4SC3VThABemgNuQFQhGVMtNhUhsUXnskNGCFjg2MNC7FuhUP1g3sm7QiImFnPlNAUBzNTz9Zwh+/LSGbEREjHRF04NbwjqEReeL9gYDSNofJsR4OISRfAX4F/RpSkD6nJBsp7O3imd127J6wqsBBodZDo2XOJbZaBq5sDuJ864soePbik4UIzj0ycO52ErfvLsBnbWIs7sJy0YIV5llYrVSKmrrm3jKFknbKf+HYOELiNd86u4j//W8WcOLgFD73RESplycHnRLOV+BQzdO6GLAIju2LYnpIDKu8XbnRwyvHwvjCiYTSm9xebuPmUg9nb9dx9mZFm063ig7N47UEsTaqSfHoW2qsOOYEpYB2aXqBX+TYOnXoSaTSW8gV84LaYpoXi0ajYpjiSEgIx+8XH2wqkh8eimFsdghD42E1cGvLWVy+eBexkFMJ9ahVSP76iiBo9t2h69CueKKK4ZEBJVi09kz2DP23BcrZFha0tvPgjHLFnz93Gx+c/whbW5uCsrK4c/M+KlTzKRYlOpA9K88sOhTUVoqN5QzGp8g6OoO6OBQaHXv4uOz5mHxWD/MLc/jP3/hbHNx7Egd+bqc2JV88fVfTAUxbRqJBPJxbRbZQxeFj+7DjwCxiozFVI2L4SxqbljiUOx+/qY25HjH0LjE+HPSOT0wjPLZNJeiZ63KLM4nK/rGJIfpkYZtEDjOy39wSOgeVx4rhMw01ecQa5IjXWVczv8Wfudx2MU4epZlhtzuLOcob77Jr/5spbmLAG2aYLvtVUPbYjsFP00r/T7bl/x+KZJtTe0kY/hGldI2G+d+kQXX2+r1AfMwOU3yUM2Jt0mPUtfxs8QTkx0FYKN7ApkirU3ut2FneECiaLzKPEsFPr5fx+rNpDEw6EfbbMTNsx3DUg9RWGZvZHn7vOw8EhdWwlrfJzxISU9ex1XRjqlvBgKeBnz8VxfpGHhfmKxLGUR2kg0nxgMvkiA9X4Y/ZZdP3zKFl7UNyKIH/VMKL0XgUlx/Ucf5ODeUKY3SHfJZh9lJ5zBYEoxuUP+Vza0XBklUV7iQ+JvRnX9SQHOhn97XhshSRSjbkQAVQkg2wY9sw9iUDSDci2kPEpDE7wLUtwZwkNEcnBOkwGc+5QVWSEWNUZIe6vPbJXR48sZ0Psq3cR9wgTrm+jrWlslMX1gfxUeq4jnS8fqSCv60P4P5GAu1iFFc3FvDxYhpPT1fx5YPkgXfjvZtlpcRhcpX0QEx0EPHZ5Xn+59PL+Oa7G0jWwqrxQ4GFB+s1/Ok7FdwRBLd3xo18zYfvfdzC1FgGNqOCpKCcKTGIU4MuHN03i7EBtxjB83j/Zgm1Tgj3Vr1YlJCYbBK8H0rHqSS9NiG7dX/9/QQlEZYY47oNc3KoWxJi+2TNmOuiKrayYrDlRr5nKMgxl/hABINTCTVWdgmfKsU2yoW6Eiuq4hUbJ9kHxwqrWIN0ZgtGx6LvEwwFkcvMqHHy+lxavneq07NqCZ8JbCKeIyf2qNJz5n/KopnOa1WxY2kppzuLM+nNLaze38DojriGYHScTOIHo2Gc/PI/Uyqfmhif+vImrly4jbc/eFucwITm25xiUGw1c0jZy4Fqv09TLIeO7pL3m8HY1KC2FLRlrzGwofo5WznaFdmLHGaW6JlSa0Y6pyeR85gkAXQ43Eg/uIwtiWBapbzK3y1lcvLzLLY2Iihmq/BFqEwlqDnuwfBUQHN61XxXUb+2M0kYSZ3PVqut9NNOfr7dqsSPbp9FWVvdXqf8HkfZOnouAuKpy4WWcoz97BHWX76pfTGdDnXwajxKOv7ByqDDLotL+pnIGDwCsRvU+NPqT0dpj12ukFjmqI7uUF6LJPcuQWvs6qZCTZUKIdxEYujW1snPXsFz+wRZyGJduJvD6SspZWVwWKsokKXTGMLw7At4aryFiWgTX3x+D+4v55HcqsjmLeLCw5qS7R2eCeLQtBez4u384h3qljAa1jD8rp6yiVL2vCZxN8O9RqMr1+aQ8MmJqWGveo5cmTJdhm5yu9WseJEWhMDEIejQrsjKImGQS+B5ALGIH7uGxYMXU/jgjg1Xl3uqZfcXpzOYS1nxxJ6oICSvrJzJA69D00xtanKWqykbkYIM1p7yUOXLXTQNMcyjHnz+qQB2TcoBbXGMpi5rwYPelI1aB1plvPNgDGc3D6JrcSDkruE3X3Fi21AXF8QAE3kwuil1vHiQdSst8zOzBgZlk94XQ14XY8f8GktCFPQ8c6cqjqOCskH+Mz/SxSaKYrC++0ERd5PseA4L+hWUE/LgzrILF+9X5H5ZCa3if/zalNx/Flfur2IkKgdenNon9/M6nuSh8AaprkmAx7nASlrCz5Rs8LyOeVl0btKmBHlEV8y12MRRUruy12opgiXyYE9aWFB6NBaRrwCqpbq+n1+uh7kWqkG7A4LOMg0k1/Mo5ErqdGik6n1SO6J0OiDu80KpoCX/4fiQhjWk/ek2u9rFzaZdGjFteDLMESxqHq483EC3WlEOLnJhMddIihsar9XUJi5fuKsyY+OTAybfFFWjZX+2ZT8VxKCcff8c3j93Ts/RgT1HMDQ8hOggySZtmkfqiiGKDIUxPCEGeHpE9xcT9FTGYRjNJL7RMdWPyJl2QxAWjVY4Sh65iEQMQR1dotxetyYOI7OBtbu3kaYGQs2F9wTxKmW2Pyphdkh56zi+xGIBOeTZ4lArt80KtdVQl2qTa2OhwBd0qnElQOFgt0tJE83mUfauubw2MV4SJrZ6Orrnj3p+9ghLeX7YD0Q6DJi0EZauRRWM9c0dHlXPMbotNCs5baB0eZg8DyvdL/MvnMNjGGn036daloWs5XWAmuFFt5WRJWjIwdiShbyH/+LVSbz10Yp47rp8fgc9hwWJ4YOITZ7CeMSGUOkTpMSo5K8vaEl+cVNeMxDWCuCREaugGjZCJpBKlRGLxuWBmEq/rJK0a2UYEv5YxXDKhcIim6Bdz+pM24gYnqHjbuyfdeHsjSIW1tp0J4qIrKZ0EJoMd+FUptGOGGi3uw27GLz5tQrSVQlbxIgbYhjuZzto2MJymD24Os80phh8OYwtIlHDnD3UUWgaQjFWHLHhgHi9JUhwwIfjOz04MGsS2jHUtfVaYiyYpuY/VSTFOzacw7DHd8PY5LZpa+uJVRDua08Ftcn0X3/PjqWaGy/vK2FE4ra/uDCAjXIF/+hIDb9+Mog//mlO0SGrQ+W2S4yYhM7ieHZNeHFgOoDBmFMJC2vtgoYgPVVxljXeEcVqvoP1UlNFSH7n58MYj3Xw6FEb/+4HJewbzyLsrKtcWqfjUn55pXBmyMX1puZgt2bysrN/TYeHmS+lg3BqNZP6ibVaTVsYWEanghAPVa6QRSGfR2YroEledu1fkdDv2rVbeO7kCXzl688r57pNPisWicizyijxIWmrOZrDUSC2rzTl/bRvTIz/+uamvKeEc2WvhOx+QXRedXxhQcnkvGpZO+rUnOKgDh/fi+LGpir+lCpV5VPbzKQ1NHQLWtw2NYOBeAhVQXhuGmC5D5IQrq8WcP7iR7h275pSwvi9Ady99wh37j/CjvMzOPn8USTGPchkOgjJ77v8QdQl7G81KpriozGhPiGdKMeMfDVgc/GByuERLRuCyDmXz2fpD1PAIoDMw1tYvH8XxXxVDE4QLfdx2WMfYzO3gm21HYKycpgoxuFgMYPMoh67hNs+VPIN7QHs1c2CCJEpG5aZI+Oic96QBBBtMZ40YGRxsMtaMhws5mpILgry84pjRPQzUM2hygz7E4y2yVXUH9y1Kye0WFWnX5VdKPTZkU3I5j42AdrFOBCFadMjWyHIIkD12npJQkGBp13KC9WUS5xow+GREKTjwB//pCihxG0sJWvyuTb4iWBGjiGS2Cs2J4hE+4fIlrL46ZwXz+/p4UvHoqg0LchXWUkUVCQLTxGDgqCDD2+k8OzBIezalRAPKEe6JtcAt4YZJPdjElUVbxrk23bIAWnqPN9o2I5ffyWMu4sNnLkpGzIrHiwor+F7lDt9zionKu2O5mPqNU7qRxAJ2nUEiOHx4Z0jCGw0sbDlRqVr1UPo0rJ551NxD4amdAh18b41AUyRiA8/dySAPZM2BD3QTUJFna6gC7fLVNZNSRjUFe/GsScDPsRcSewVJJYqBQUx2HHhdhlTQ8CLuzvIvWDg979vwXrZrZTOzwp6PXFgUkLnVcQ9q/jHJ6L484/Sgl46ahhs4mhOHIjhf/j6XkwOJVAqlvDJpTk8eyCMH13vStjXw688I8jH1cKlmBdztRwkikJEUE2nImhSQsZcYwJvX5mXkElwo81sOOT8n45P2mCiBIN9VWUNA5WA0GYm3vkPBUP5Zwc1XZewt6N5lUK5qESMeTFWqWRGg0e/z4eFpSTePfOBSlXNLwyiVj2h8llMDg+Px7GVqagiuDlQbZPrdamKTo+MGGLI2DaxmaRQiRulnB9+CfvYPsHifvZ8Bkee2oeJmSENPZmA3ndkl7yujHPvnpP1rqBULmhYPz08jKdOHMZzXzyJiR3jWH20htRqGt26gUf3VnDu0kU8WLmv+SEWFlh1O7JnF46fPIjpnWMYmDB1BJs1B/LZhhiDshYllGhBHDaJI7V3TK6bhqsue3nh9kfi4Ezyy61sWRlr+X2m0kWkZGBcwtFg2I+KINHx5/855i6yQPaBhOtbqt25lSyIgWkgkPBoFEWU6w+6ERGH2Si1zHOrStFWs8CmbLA9bW0gIuRUgGvQo6EzvxglrN3P4Oa5BYSG939Gs4RsXei11RuqGZbQw2IOmetANMUDdMaQJpf0vdyG4rW6zabmRijIzoFjzsLVqyXxbGKsOhXxeqzOdVR2XjUALWTR7Ohg8bX5gvaoRIdmMDS6XxZxXHu8ismrcj3nkW/YMBBxYDpGNoYO5sQr3V1O4+XdEQwODKKQ2sKH19J4+zoQ8siGkjBqZGoEwRATh171juRSuHF3DUXZsEMJCVMdRblhp/ZHkX8x4utIaCmbPhHGjUcNQVtVrGe62sPCxHuDLKA2lwojULOR9T/OUbbbdkwM2PHqsSDyP5nHQs+h5HSWPpGbrk+vqzNgRs+OWoOCsA6ceiKMo7vEwzu7moAlWyml2LuNmhpYUvOubFTw7oMw9kwEsFvC4uUVK24t9cT7NzATa2NdDMSPrxh4YlsZQ54q9sUrmB3sSIjql81sxe98xYtffdqKj++N4t/9RQavbO/gayeG8O2zK9pWQBT53N4A9k/FBDW61ViSjuWrL47h6koOrx7x4KldVlwRI/Zbz+/ERw9C+Ml5hxioLlaSFnEiQ7KZKzrr12z3ueYZUsMMHbQRuWPOX3IsyKwK2s28lcqeyWGkirPTCbsgB5esUatmDtRvZXMYH3IrIuRAcsgv9ySfcebcee2jY1tDrVEW9F7TkR0+66GJkDjGPPISqlnUyUr4Jqifg+QNi9lvVK7XkclvidOyIJmyqcDs+PioIPoErt++hatXr+Aff/2r2H9wVtEwe+KeevYo1lYkxLpeR7aex8jokKC5BG5ee4ib1+cws3McL752Uq99baWAqzdvIJVLK3pUTrOeRYVIFhYWkJcw2vM+mUvdGJc9OjU1KSFkG8VCQyMDCkWQb6otyJjzfIxYfEGv5pYzsg6UxvO6rdg7HZZ9ZsHG2hoWH86h8P5HkPgYO4dlrzz5CjwTz2P5u/+XJuEr8lzzZVmzdFBCxRwGZT+5vA6Tn028aijiQTna0BlUFtCsDqZRzDanuhhu8razabdZkTC66dL8msNuPt/iVln3Uq/zWY3mkKmA0uoWM262ygoqW2ZfzbinjGqc8BYr3TTVYiix3WS+p+vQfBd7TpSqRf6+3a1pH5eppeajYLv2jJB9kYOwVmtXNlsc0cQsBkb2qgZiTULN9NY8ShvvojVYQ9cawlcFHUyGe3iwVsfNZYqI0tO7tX0itZTB2btiYHIJvHOzgaGogSXZtJlqC8NBG7YEfZVloZezLkEmDnz1eBnHZivqXUvkVq87kM4IHO+6VE33paNuZLfZcGNejONqC7JPVHxB8xzwqDAFy8fshYLVi3QO+MZfX8SdjS7s4ajCaHYk63rRd1sYFnETdHBsTxgHd4chUYDOgLU7Jl1tt1XWQ6RqJmLcH8h7vXFzEqu1MWy0bbi4LqFMqiVoTNDUYYcm4tmGMbdax0fXG3hxnxm2WjtV+J0BDVsfLeY1NIm6w2gYFnz3UhdfO27HMxJ+vn+fLQ1tjEStqm+3JPfwzXdWJKyWwyNImMwVcytVrIyKQRWkHHeW8d9+aQazY3V8880yPrzfEqNhVePcJimgWW4zKXP4jFn9I0JlONiuKNOAVdnh7CaDJg0bX2N3KjKnV/TzD6VN7mlXvpIo2kyGV+a1FpfXkM1tqUYjB6mZjsimCogfCWFqV1zpi9fXVsWgSXjmsqnBMhyG9rRZmi2lwOYnUAuQriSTLyJXFMTZacAX8mF4aAhnzp7Gn/zJn+HXfvWXcezUHlMoRHa1yytIJBzC+PA0dk5PiYMLCbprSmhZwJ1L8xgdGRKnXMeDWzdQK19E0CHr5hrR88LQav/ufdixbY/s64IgnTRKpS1cPf8AO3dMYceu3Y9JtzE8FlfjmBGDreIi0RAHFrCyeB27R73YIc6cWGFy+yBKmRIsA36E5NrKEq5depTD6WQeO157EaVCWYVznXaXzhluZTaRkHO2vpTGzJ4hc8BZm5OsmpvyBR0S1sp3glPcPjH0fpve+9KDFK5feKg5xFMvHxT01hIQ4NBiB3NrNdmDrNC7vPbPyGCpjLhZCbT1G0dtfTannqp6mFS2VKbpuWtaaiXCajHss5qLYGgY0FaqAxu8WvHhxmPC0hywJjlbU6+U7QOxge0qS26Vw18sbGBr9bJ4ybtwGyllTlzaqGEoUkKu4MDCZgElMmnKYnkkjMrLw7+61MbdJOlZrNg21MPMsA9vXpPF7Lg1hzYo3ne90NHxkojbQNRawNpqF8WlkoR+dkFcARSqTiXr84lRclnqCMqB/+JxH0qH/Dh3q4FPbvWwzul6uceu3Hu1RV6uphycCopdH4ZCA0jEy8i1Ov1HYBorsg4w9zI1YsPJo2GMxdxy72LQqzVzdINsn/Y2Al45fJkylrcEAZRsOLMwhYXSoKwz2y8Av5dJeQfW81Z88siKuLurHe4MVReSFQkVBenIx5YknDq114qoR0IocSYPHxVQECNGwNyTEOu9+1WcEO/8aCODSquCN84u4y/f3cD95RLydad40kHc32DppoU3P1pGNVPDv/z6ITQ9I1iVcOvpw1G8d62NDfnvVqco1xWVZxhDrb3Rpyo0815kAtByeauq1WalCbWaLJ0WLWzYtDubExNquCycWxMU2rZpGEljx5yQ2+ZGKBSSgxvE2rnLWrigaCrVoFnAYF5mZELWKWAXJFDTmdRkdguj8ZhZimcoaHGZztfW1TYANo1SuchhK4pBFaO8tgS/X57h4KCpdryxjO9856/l9/8Rjj69VwyhHc++fEz71hiKjiSGle4mErVj14FdGBiLiHHs4Oalu2IYrsqzmJfwWMJ72X8tYwwWiTB27pzGF77yPNxBl6CiJJbm1pFc59RCQ5XRWRjasWNUEXk6mdXmWa/Pobm0S5duYMa/gNkjJVR9YTGUXTEwUW3wDMWi4ni7EICEnPz9nc0uml23GEyrNrIqGZ+sb7aUk5C7itR6Wt6/gqCE+JY+iwcFdDQM9ckZ7VrgDTllHbw6XlaQ50wDe+PGLcSGQ9h7eLusgaGqRUX5GduGwvJej4Vif+YG61NhgH7ne8doqtw3VEBBEEFDHjJn7zwsz8bVM1Iing2nOlbCDdk2x3uYYFWsSMRBdRAtb9e1l8MmGy7gjyIcGoMvkNDXFgubSG/eEM9xX8NRUrb2rGXMjgbw8YO8epbXn4ph8UZNUE8NHz4qIl9o4uMllxgxPyYiwBcOuHB7uYMriz386ucG8K231jCRcGFS3mNAbiud6+KPzplc6CzPn9xrwxefdmCE84i2hqCNsiBHidO9EYkI2pqEfvGIwOypKD64aseFm0VzPsvl11EkMXPKz0UObQ4Oa/xv9EydQjFeZAE9ui8o9yBr02V1syCHnL1ZTCrLpm60kRZvaJN1uXC/g3duOfEbn0/g50ft+I9vtdGWMLJc7iFnr+H4mLxu0I47aR+mh8IC/4lO5HNqA2iUknJYlvE5udauHJ7Lt9IYCLQx6uthIFjDP/1SGBPDg/jG3z3EfHoLL+/14z/daOPNC2U5bHKgJYx3ehyKgsge0W4kldTw9ipQlQOwf/uIGNMWzlxKYz1N0sKGEtO17V4JOwJoU+qsXVUjQY4vrlFXwkt2v3c7ZsLdzIU6FImpoXJ5PyUxtCgHmUMbFGnolIBPUDl5yeODEe3czuXzKhDCPi7y9dOJJjczmL+1qvzurASn1rbEYGUkbHLAT/plqymD5nISqckGkufJQ8brc6lGooG6wPWFlXllNY2ExCDIwU5mNvCD7/+dCu3uPjqFabl/9kQNiCE8dOKAGIqA0hVzPCWd2tJzExuIy26Io9BYVXrqTi+k9x2QkDWzmcV/+P0/1TWYnBlVxHjv1hLi0YTsMcATcGFIQvNP3r+l40KUnxuZGsLcwwVxzhk8d7im61HbKiJAmTM2GguysfjNWcZOx4Gxug0P1x+gLIh5ducOkxiSATrXVBxxrpyHP++XiCSN8ZkoXGKIeXC1oVeABBvB7R5BuhS0EO9XKTZUaIO9dETKn5y5ge27pxSRGRK+Z1NF1X2IiMNnG8RnMpqjQgDaxmBqpKmVYK8QG8uYm6pReSapyjlOObQON/mV3OpBbbK5uEQcwrCw2YwkeIrWOqZEWKepXfSuYEIs+IAYpAEdgO3J75bLWeSyjwSWrqrBtDG5zzKreOpnZ/xYynQwlrBg24gHSwU3zpct+M6HedkUcrV2ippaUKjY8QdvS6hUa+ALJ4bx4n4XLt0N4I1z8rn3oARthhyKjhxAChI8MVnA2IB4proXC6tZzA50MTHoRUUevMtShkPuuSG7we5tYDzix6+8EBbv6sbpS1kk81QToYgC+cDbuL+SA4W//SGHHgAizD1THvzcwQCi3o4ma6F5oy7yWzn0AlqQhFUOx8JqEzcXa9o9zpc5bE3Ym0vw+XbK59jFEDQ0UT4ZscNnq+HopBUv7g0jGCQ6M1kj8tkAkqlh7GUeScKhPYkaPriWVxXnbcEKdk+3kQjHJXww8PGCDZ/f7cJstI65kkdZDMgNb7WTM9yneRNmJ1ll28w18ac/yeHf7mtg/74xnLlRx7pcv5I9CroW8y7PMWwaIDFwmq0VNE0er0Y1I38KuuvUzCFwUkLLZ7CO41D6HZPEkFvEZyXHmMkQwM74x4aJRmR4JCH7o65KPKolIG/AhDRD83v372Fjc0N1GZ1i1DgXyHaOjXQGI4MUh3VpaMh+IZbeW2TcYK8dTIRHVSNWhZuyt1cFWZEVwy+fyShhaXMeZ0+fw+TsEP78j36AKx9fxte+/kvYtm9S82zscG83a1i9v4qJ7cMYHk3g8KGXsbI8jWahCHeL5f2CHupqtY6p6RnsP7pHURvZHtb/1V9ozqgl95EYCSsJQGp1SxuMh2cGUSiXsLaWwueftCNKJo22Q89hMBpV7UWPx6l5VI1qBIlyusl/9YGse1r2jkvHuugAzBYS2SNisKKBKBbn17Dt4DiGKB6s7LNdLZKR9scrhtMXdpv3R61Iw5y3ZBFicyOFu1ce4egzuwUVlpHdKGmxw+l39MPtz0Kqnlv1Mc+ThG12u1/7ZFTkSv7fauRRK61oorrnH9HWAZts8p6iirZufG5WdlXTEOnMGKG5Qw6DNy4wN6Yd4DYO4zIZWslpWFnOb6BaWjPzWrKxlEXRLgik58P3r1TgFzd0bNqGSqaIXzw1jVeemhb0dA83H2UkFBLPbHQ0H3R92RAjZJfXtrC6tIGBiFsHPFliZ17Objf7q3hP9DyJoAVnPlnC+9dKEgYCv/5qHKcOdlERQ2L1cfLfqjzv1VJWNjo5syLYOZbAWXn9R9fLEgrZxGgYiHstmueiLpxXkNrLTwWxY1w2mYTKyY2yrp/LaTaAtjodefgNZFgBpEK0GNA7EqIenYEgshb+j/9UEM9LqpUiJqMS0oY78NvEuKyRktiGr73qx4Cf/FuCCnX6taud8Y6RED68mhXj5MSJJyYRElRx874cvI06anKw3r11HXPLVfz6y1MSFmxhOlLEYoWTCT5FVsoQQUJGKrO0xQDI82ff3LuXavj9v0riX/2WxODsB9O90NNn1apk5OMbmivhMDPDYFa82sWq3FfVbGfoszQwLGNzo/KxqlqZQ2mMrZYOgk5D5dJ8DrML3qac/xZlHGBP0Cb51zudT0VQaPyo45jLFzSk40zd9PCkHmiyMmQFjZFV1hpg+d6iuVgOT/cYhnM/K6pAX5zEAQfvpU606dHGUBqjhuzjVDaFb/zRd/HGj97AqSMnEBXH9cGbH4oBCYvBcMPtdWFmD2cAm0reODw2rHoAXWygk89p5zh7wShT16yXMHf3HrJbErIKepoR1DZ3b1ONgz/mw+ZySqmCwvGoIDsfrl6+hcGoA4d2tzS1QkYL3oMvHNQ0CxtGbW6HokiLXPeA4P1EhL2FGaU8oqGx9Mzwm2eQYjBluce1lQ2sz2cQH/L3c84duYae5j0DUa82W7cqDWWgaDZ4dtgmZFOe/aWFFIanBsUGUFW9KefDrsjssTDrz1yXkBUti6b55DBYTaYA3aA9czDa6LEXZ1OAVxNOMV4Od0y8cki8s9fUmrOya9xjNkY6rJqfYMsDN4KDkrtU85CD3WqXVAShXivK+2XkYea0WZV9UibrMPmw25jPOpGUsO8Xjwt8txlIFjvwZbOID9gEMbjNJC6Np6HUBMrUUCy1cOl2FbumY3jrE/aC0Zs2Hg9hqEciQjy/FMXcVlVL4V0xGoZ4/3euS+zvqWPXaA01QWPdJitd3CiCDMVwUcHaI3D5paMBhAIh/PhiAblcG8fFC6eS67AbBXzlmbh4spYmhJlD8Lh6WoGxyAEoiyF8+DCPu+sNNVaDPlZAa4IE/Dh7uyVGzom5Ta96rUMTJfHEJUE0QMxrA/vy1vJt/Pk7mzg8DaXR8fuc8Fq72vT4w/MlvHGji19+woJfeWkAU9tjQDMr+NeOqnhfr9x8SxCqIesdkKWLSEgQc+aRR0Kek6c/5wdFWG5vCM0enYc8f3sA33tPnFFvGSVO8XNUq2cyr5I/zZCNbDgDSjBoNKs6zMufkYFTKZ1VcUkVTmQdPf3qadvUEJTnEHK14DacukawuNRw0igRaTPf1bOaiXKlSRHDwvk1jpLo7/oEOcjzJq1RUhATB93Ze1WqlFEsV5RLSyt1So1k1S9l2SHnvfyMVENhn1+7x4noaYSdTNbLbXsMN1Y3l3Hx2nlBuHXZagZOv/s+Ll+7hX/621/H2mJSQjsnDj+7B7VCTXX76uxXYXqERtDmVHogNg7nBT3duHNPGzCZhyPj68TMhBaZeK7syqKaU8HexGAIFbn2cqWOp59wIhJj2C9OpdE05069QV3XjiB/O42WTkyI05aIZ2JyFJX0goCAuqx7r3+uraaKnIUjVRW45bounL2CwfEw4hNBdUp8D49sCuouUM2IiJ57iqNM7M2iiAvbKGi0WJktZsrI56sYGoqo0e9af4Yh4WNjxa9ui2FbV8vNVMRh35QSyfVs2gFOy9ASw9JqSGhYmtcwwu7kiERIw0OnK6bzg3abXy21lq+VbbOqnEiaoG+xi57KL3VT/cWomM2VfSUa3gJ7XRqyBpu5OqblkAUdFkEh5NPq4id3amhbk8gWDJUu52coP7YYU86HleV0fnCrg/OPbIIuvDoDaLRsZnaxZx5Ki9ZknNgsWrU48IUn7Pil4w6Vg9oUQ3N2tYyZiQB2TgWVO53dx7ZqVdkw7RIyuAIGjs24MBx04exdK64LYpoO+fHCbocgtZpsOKpl17UVJOCmkEQNS+tFFJJlLC+VcC3ZUy78pya98LolRJXXLaYdSqT33BG5h1oStkoL8+s+LBdiOLrTg184bsHNlQ6WtsSzyT1ls3Vs5hvwSyjZFWT3xpUeNmt+vH0xg6fGq4gPhjEwFMCN+1uyjjXsGPbj6e0OvHU1j9vrBnYNODETqeJytgGry6P8Z1rVtJE4L6HogKpDyoEmofsPPiAJH/m1ONVfU8ohoisi8na7rrkoQ5kZ6oq2eEoMNVamAK9VnhXnUZnfY8+P8ok5XBgIZSUu96m+ZE+55Kx9laGeogSqtRABtLsdbUZukyKaDJyCNjh7SeTAimGz1exPKZh5mTrVZxoeNR5Wa0vfz65tFVBEGfB5UayU9DlQx5DhGXMzPa1zUt7SI4avoO9J5oiPLl5AtVbGsf375HsXKva68vBzvpRzp5VCVScXOPvJz+dsqM/wyrU7ECJpIptxGacxhyv34HGHtF2BwRSFY5lXZQtDZDCAlatr4jht2Lebay/gwR2QzyirDgHZb1XMt9PQ+UGrhINWMWT2ngNTu6Zx7eYmSoVcv7XEquvJRLmNnHE0/H4D8wuL+PEbZ/Hs559EJOpDIOIyJwRKNS0Scf7WYljQbrRVEYhniKE6Hw2dxY3rD+Q/bJgRR90WxzYUiP3sQ0JCyy+dnMRbpIrpiSU3irohqcqiZWSW8412v2W711evIpUHmR5N7nKrIAWnoC5Kf3GDqlB7zxSq+JSCmUPV7PUyzNDCovkyUybbMCx6yHVOsV0ThMHv/bgvYU2lycoLB5stmN+s6+ajOgx6bS2FW3mAtLdHHsgG37els3qceTJkQ2nH/j8QiNBEIxOSckiX1nM4f62NAMM2Um3I73x8q4BlidOf3h9FJB7QZlk+fNL2aiuHQOKwXPPTsw6shQ2Mx2TTGDWkxdNSCKLXZBWxjZycxwdLZbx1IYNBOcezFHwQFLtZkA0y7oDsc6QEOR3eNYjtY158dHMFaykDX386gH/2igM/vtPEJ3PAv887JCS148ldLpTqXZy515KwR5Yz28WeMTd+4yU3/uCtCm4t8dozeNnK8SYXWgb7twoQZ4mjUwEcGBbkIIZurWhgNmqBqyCowBFXVlI6DiIQn8dvqhjLs+8YHOWQ+2EyviaGioUXDroLSmYhxtJ3NpRiU7myT6vKPTOP2TWZU53i3LhHmNdSxEPVGHsJ4+MNrJdsKuRhEt6ZQieUwarK51Eggf1ETHbxsDABrAIVFPXg0xMDUG+b6sMmtbSh7S48dEQEDbs58EtjqPlRS59Nk7qCbg9yhQImh4Yk9Lfp73YthvYjEvX4ZT/TCba0uFFHFRXlvr998zqSqbygjQYePLiHl197Wg0xO9AfIysXVZeowSlfQQ7Vi9HxOEx9S4vdr6E4w+WuIJr8VlFVgCamIjq6wzzchOyFySkfDDFmDrdDRXRVAZsGi1qX7ZY2pTq8HgUUFvnM6d27cf/+aWQ3lnXciV3y7KM02WvNSj/VqikycfP6He1x27NnOwbHqG5EyT67oDhHv3VEQsKmSdvN7xU1ys/J/LuVzGJkaEgnBHgO/HHPZ5PDevbQGHZvG8MPT1/H7cUS/N4wnBa3HOCSVvj49o+HVzUR3+tXFVU0lJTKgpwaWU2u2hyRvle1m4SAhKb9wOyxDiI3Uc8wQzWyy3EukQwRbR4GCS3c4uVWc00JnQwJYTyY3+ri4IwTp/bGtYL37p0y5tJtU5CUAge8Doup+END1uOmYfNrz9pvXLT281no835pUzZurtpxZ7kNl0Bbl7MpiK6us4i5shO315bxwqEB7B73Ke1LXTYlcy9s4iNfFsOQyUBD5746/YoUJ/itvYZWSAulnoSvCTyz3Y5Ha0kV6uBDIsNqtmnDWqmDvdNxxKM9fHh9A6mMmDMxzH/1cVk8pxf/4vUojB/m8d4tF9ayhO+mgg5Dzf/l12K4dL+MD27U8b9+zYeXDrvx7R/38GcfCwrz9DBoy8Hr6EKcPm4uFZUd9NROP45vA87eK2ly2yeevEnhPF0aw+Rvkvu0OdzmZ3HA3dpWpNxuplCvbMhryoKeqjoSxHU2wbHgEkFiKtnCJ2KYlWF10Uz8UlGchqP993qNMd86POExeEey6K66xGC14XGaDahMT5Ap4d2fnsHM1LQ8b7d6fHp0jtl4vD2TKYQiuOxm7+sY8s96syZ7N6g9hE0xXPZmS7nwqQHSYCFJQh4ayFgojIygkbV0Gn63X5PTLPQ4e6YoSM/dg6/nkzNgUk6zmbQmKOVv/+5dVARluthMXJEz8KqE7UNRcU4NCen8mkLQ8TB5xmwIHUhEsX3XLEZnR9XoLNzJYeVRUjnQQC1IMQBEXcNTCQyMBRCMBpAICOIKeFDv1XW/On0Bra47PAFFOwbCOhXhDMYUYdskJByZ3obJiRvIbz4y2WpdLuXH5xkldY/b61ZBE7+cpVK5jHsPHmB9fUOcxgh27JgWwxVHN2Syu9okPORMZ0scL4EGUwWsVJK9gcV/9r3ZOJ6TL6mqz2eTdBfjsmvchd/+6gn8zU9v4ZMHFXlGVaUAZmigJX2lWLRoIo5WWxOhaoDMvg4+qS4bRrX9ny/zm/DU0sc2vcdEgcan4uwwmqowTRmwLiltSBoNM/nP/EJLDsNmDogG7ajVWkgKkpkd9knoRNphtzn2wZYJ8l/q+7fUC5kwsGOWb7md2yaJm14zDanFzJeQE2r3aAgSkmvhoFKpa95i24gNb15YxuW5JXzpqQReOhRTQjvyhKNfwmcVzycPjgfRbu1qXoNNoJcf1HBnsSrIy4fRSA4S9CDmMpDvWsVjciSlhXKjq1ztCZ8VEYH+//wrU1r5fOPjLfz0WgXffjcjaJK5O6JJHiL5atv5NBALGtg9YmDU78Clh2387p9nUGvV4BBkuZru4d9+P4mT2yQ0EY++ku1gZsiHM3dz8hoyQ9RMiSqVOpNN3CPdc1gchk1DvXa93qcLaWsflTqbVgv1akaT6gaFdilqwWkHi9lW3CHfgzgom3KQmky1Rj9kZOjjdAXUcfDwMMzyWtcwNu6VZ+vFvqdmcad1F7VURRPKXjkwDSIIWdtSuaiohKIHDBsNOopmXxlajWJHh5l5MAGzwtXiXqJ4Rx9J85ARLRBxux0ms0JR0JtHQtJoMIxULifGRxBk16phHhEZDyj5KymQqwpRKhdP1W1B4kGfCty6xIBMjY9LeOnD5OyY2RbUKAuM3o1UKoe7dx8oG8ShJw9gdt80fBGfEgUmpgaBN3tYfLipDZqcDCGR4OZqXptYd+6f1EKOPEwNB5lE7wVbsg4b4sQCuveI5LqdjJLyaVWdzAq+CA6ePIX33nkEl2cYPr9PBXK5Nk0xamIBFW0RnbKhtlhl2uERtrIplIoVHO4dwBhzjXYTUdHIVRvcUzZV3yZ1DZ8nkVZswKdKRZX1vFYLPxODNTo1hXI+g4ivi3/y2kFMj6/he+/eg8UhkNFhVaOisX7PTIh+mhPSqo5VKzAaJrLdgBVDm4RHDq9WbgDr36sf95X1yGavwq1yKHgAQPELIiCrlpH6IaSBO6s2NYpPzQpaqHZw+nYDZ++WxZN2tMSreRSNsQ39bAouWPXQmMZLDVafr6djFsclhHTIX9txYNKHf/J8DBNiANlcyGbTSr6Chrz3Vq2J144M4fz9HL7zXgq3lxv4+RNxzEyElZokLOFhTUKFWoUDt6xqyXu2ylhJtfD2tRLuLRTl4ea0AhkiTYgYhILY8qDfhbGYA9EAe4ocgiTSYtjGZbPnJdwT30m+bEG3nKY/faOjM3oOR1XRjOoYyj0yh3fpbgFPTAGJUA/vXekoMaIW7WUXpEtd/PhaXcNemxiSQ1NB3OhR0TknSIwzmU1lQmUekq0FdkEYNAYd2aDVnkk4yNC33WpoTqrR2JL/FiTUKSnitoqbJScaYw5DZzN6mqPk+3EmVavNbGngjrC69eB1FZnLa1DHoT0OjG87rBz/bsqqhYqopcXkyH6JR2IoSKjG5tF8JafMsPFoEJubm7on6Kji/Iy+49NmU/VE0CQ/aVv8VFrq9xQqelQ9TTHAbJJko6qsS1Nf64OtKCFZh2NTNk1fWJS9oKdonYeXA/nMEbEth6K2xVpbf78j67UgaOab386i2aqiuvEh4q40nnr2Szhy8rew7fA0Lr57Ufn4+dpOSwxnVRC8GKVTXzmI+NUQ7nyypLnb2b2TSpx37aNHiMTcOPjyoCxtEXZBVBZys/XPhWHzKIMIqWesTMBz3i84RNJ1LUKN7z+K7Utp3FtqqVAM16Am692ksAXppzsmuh1IDGgOjzoHWaR1hM0reyAYDihvFvNWDTGk5UpRDHJQHQ7bQ4juAmIIQ/GgsmbYSoWfLeOoQul+VYaUxZZIHPVyCa1yGqf2D0go5sIbHy0gmW8rpS3L0IbE9EbPTI52tXXB1u+aJZS39BPb5gAlK0msNvZMylLzS3Mbdc1TkZFRD6LdTO7be6ZxIlsnrbrmHnrmjmPuRmlLmFTlJtVEutEPQZrq7bWRwrB8yqBq7Yd//KFOlCki6GojoWE4xWuLp1uU0LHGJkayULRRZZLe7cG1hRzypSp+49Vp3Fzv4rvvL+E//GgNX3vJipMHxUu2miBVFkNPhkSstJXKLcwKmvndXz+K/+07i7h2Z0Xu0UCWzbQ9a79vqolj0z5MiMe9tlxGs2tB8qqEi7UeUsUeKm2fGDe/ORBlZy6oqVxNFkvTnCqWn+Rln3zrJ4KEXnBgdb2l4R17brSsydk5udGA146n9wQVXVkbLZzaFcZ6rqYJ3T1jLuTqgqgsEWXftEroDLuhI1WtdqGv/tPQHiuG6416VsN0o5XTWUcKeVrFuGj/Xruir+/paeiaZsQg6qmbw+4uryCXoFb5OvIeuwbX4bLMKI0O90+umldOtfC2MFobDgQF9bTIh0XUINaXCGD/jv0CENzI5nNibAvys1FzrrVnmi0iICU4JIVMRPZtOCxrVNSf0/6YlE8d8NI7VpN7n8iNPUQcL8kXCxhyJT7l1++RoYPCo+zKZyFIrsPhJeGjF3WiTebXBL2sbt1W9hIykIx6k7DH25i/dwZN/y54E3sRjseUrpq9s/VSU3mumj5q+7lw6OR2TO8axtytFUxtm9D8EWl0NlZSqlZldfo0xLbolIBHw3Lm2exUq5IIwOrwo0Wq7IgLGmhwYFlC5yPPHMXD5dvYTPtguEyG0LY8f7KnxkNx3Y/xmAeJRAzJraAYriKyRTFcuRQ2VtOIJMTYu9pyNoqqnO5zu8X4ObVptCMIfSuXRyZV0FzhwGr7Z2uwHhstkz7GLN+XObBKNJAuYypqxa89P4s3L67ixnxFOXDIf9Ujc6RhVyhNcjseVkuHm6Nlhgr9agwftCbdNclO0YSa9ufQUOnojyoiu6AsNhw4ld8MBLp46WWPWHc3PvzEpb/LEYNyWwyaeCpyjavZYQjDhkwdC+rqYVH2KYuZILP1Pk0B/4ObNVsbunJIlRiva8edLaDSISFfw0yaUsElXdIE4+UFCjAU8Vuv78fhvcN469yqeKIAClsFVDlW42ep2aMVxvm7eWRTZWwLd7Dz8AGc2D+NhbUiOs2KKgxxnd2Clk5sD+PoRAihgHjWTkDCTDs8Hi9WxSksFerIVeR17pZZ8eqaPPs0sEoE2O3foFjjRxst/Jvv51GoO6kPrIaFc3ta5mI/m2yHuM8iB6mN27mGUoq8eiCKN69kEfdbMTY6Ltc+ihrZNNTIm6wcOqlvdDVx63KQhTQvyCClYqxk3iCXF1sQeLiJ+Fit469YtS2mnxhomTOEJKdz++JyjnxoFpcRsq1gYiyC6PCEsr+2GgWt9O48/CzigyPILG/h4ZlHSMSGkUontX2EoWBNLM3I4BDyEr6R24vU1lSO5vPn3CGr0gz7iP5j4YROXqjobUucEZP2PbNi1iUfGdE7lbu7pjith+/j6So7Ln+/o/OiHZNRQZyph021FjMsVJ1ENqFGDBVlUAYHlS6jMRlB1dPGlTU3Lidv44nDHuw7vE8NL6mHmTznnrIIcqfsO0dv6EupZu0LOHUY2SHIMBB1yx5ckUdsFiF4vqyCcFgNbObScEXH5LWCWIsZcYISEpc2JRwMm2N1tSI8gQBeeXUCC0trmF8UpMVIRgxwtVlFXUCCp+1RxDk1Oobl+WXNifL5MX+Z3SLN+YiiqYKsu8quyTn1i7MgXfXmek65uAZHYli8dBndrfXPzmC5xHKXZEEM9pPIZmPMXhKY6pbD8vpTQ3DZ13BOTjc5ts3ys0ObAa1sY3CHVLeQJHj6fvqej5PzzIU0zfCPZW/to+kq2rBYHDprSKHWWKyHQ4c7OPaEWP8BCy5dFkNltatsk08e7ma2q1UhNu1pxYgDv3JYGJIqMIPRt1bQKof+peXvc2uayepBS+Qhrw+/9tIkjmzza6K81uxq2dcq1/q9DxYxPhjAWELg96KBd28V5LMu44U9Uby4244RASUROQMPFgpYl/cjnSzJ1woS7z1czKAdtqDlWscXTx7GzrFd+MYP5lAsN7B3MoD9k0HE5fVnbiZxcDaCp3eG2N4lv+/Rps3Pn3Dhnct5vHc5j8dBjxpZw4LH1BnmvVk0xE7WLdoQa7XX+rOgDV1Tvi5daOGb7zcxm7BiMGJF0GfHYQlnBwNVPNyS8N4tz0Eckk8MStswPSX76HoOs7jCqh6fW6WwIEY3a1b4uj1zHpCHiM7KsJgra5Jg6TWR0K/dKGjVkUR9Hm/CZPdoruLAzo6GOJoPlfePRIaUQtrlsCpx3ejsiKrjrF1dERSQEK+fVmrpnBiqofggVkMBpOXvSrUShqJ+3WfsX+J+rDbLyiRAappiRcL6dgN+wzRCPXVoNm2n4JqyUmb0K9U6/8hOeRrYrrl12VfGMImGi0UWtmAw8c/Km83lUiOpZHXVMDradGpT5B8SBDMyMYKxsUFFMFYV0LBrXxpzY6SMYaNlT0ffDFRKNW2H4Ixjo9hRzcx8roTp6ZqsDf2GSV0sHwpXMILCwg0Ep3Yqc0qrktfKXi25hODotFZl6eDIjjI84sFrryXw7T/vKgNLk+Fdo6xEhiEve73q8hnjqoxdFOTF2WGuA5PxxUJF1YXYxkOjzConxUCU8lq+3394m3LhDzyQkLKc+mxEKPjwqtlNM5HusrN3U0nrSY1SKArykAP6zN5BpfO9tljWhtCO0RBonJPtmoOj4VeiPBvDRhK1KZc4nX7LTL4ykc4BVI3J7IrQNLkJD144ehDPHjmK4MAyWsEPUO+Ygo80JD6/HxWBn6022R4daFvM9gcHf99p14oR8T676bUfi0Pbj1WAHlcjidt6ln4lCcqg4HQQjQkqWixhMOwxczVywG6tFXBruSKGLK5Dx+yrylcC+OnNLK7OZVETCL5/xyD++y/vRLlpw91VVlPL2L8vjLC9iyM7wqizfC/eMOHKwz/pxvZhJ3YeHcakOMH1fBV/9kFK6WumEk1ckhBtcoAVORrfFkYpnfbKkF73OxdSUCYPQzMrn/7TszzuLjHMB040oIPpPdMwdMRAhdg00xc8pROh3qQY8PlUFRPyeQt5A5ubEsKUPkYwtlPCtrg29tpcYa2GEa2RRaKcn0e9vKxtDHqarf08Jem0QcaOljnCxRaVnk3bBpi7osoz+64cbj/cfsrAreGpgw45zMcEQUwiOjirOaKF+xckHM/D4wsK6prEhBzGI6eOYmpqHNd/clULGxlBWmQBoaMZHxs3k8T1CobN5kBBjh7txWLIw/3CJHVZVZEKCIsTVnTfb8cxCel6mjDW8E/JNmV1myZ/mZ3tAJxBtJO+2ezYY98bDZbXG9CKWCwWRjDkV7rhXKagqYlQ2EzEB4MhFXbNbmU0BGXDtE3H28zeMvY7sRL5eGSmXrfqclv0M03nl8n1sLacQjQQUYV0K1uL5EB6JNRd+vg0ho9tCjhwaYEnPX8NYXLJJ+cFLXtNVCnOhvmlAzuBZ0+GcfpDOve6NtPmJfQbHRhWwkRWJlk0eDg3p7OSqp7TFIOZKSIQ9uteZ/5qeCAOL/O1ddLNVLSQ4FpcxVjEIxce+WwQltLZClQt5gtKX0L9PIuETZSvbnYfE3vVcWpvTHmh7qUMBNwROZhdteiM4znfRVZQbmr2VWmzZudxtc6qsk1EU4znRwIxvHRoP57feRizslHdETfWUMRcq5+XklPp9bS0SY8orloTaOtxKu1xu21mUp0qaCCeyeCsGntOOv1mBdNY9SNCswfMYhK+0Nc65UHRCP/7Hz7EdMKBXzriRSxgw1q5hx/fyIsxdWAg4NCcAvmeOhwEtYaxKV5bwB5OXytJqHcNo+EuapU69s7G0Ol5kCnTtthwdSEtByePhZUsNqtdXLhfwWbBLfddxvxGFqmyTVBaEBEf8Cjdxd2NKqZlg9U6EoZ2S9hqOrC41tQDoQ172jrw94Ete6T6swca2to0d8d2244qHDHUGo/a8fknBrEmoe3cYlIQSQcHp0NYznWwXrCo42jU82g0rqNRXpINOQtvaIegNbJ+isGpZsUZrepkQ69dVeohi04WdBQZE33RuXG42VDdSquZ75K1pdwbjZvLHoDHHxPEY8FTByKY2PakhohELeRLW1m8hdzGCoaGBhEenMLUzH4x/l5BHVm0LFmMHvUjnPTBuCpOs5xBviQOQIzCqISOlWpFDFhbK9F+f0DQQFmbR8fCI2p4qlUO6nfVyCnTSH+P6/6zmmG2WfsxkaFTjZdN2w6YGlEGURvFMpyK4KiPODCUwOTMiKr1kNOKOTCyLrA3TLd6s4eVe0ndfhx5UQtUEecrztHuZsXbZlawzU2pa8bxIqKZVrWlTprFgzSVgxub2LfDjlahBIOD6eyIFydYFaNTmLuLwMiQpi7a2TzS1ZuIjU/Lc4rqvCpzXl35bPZ4nXrSgq1MAHcejAoCbWB9c1UMV06brilcOzAUU7YGtpKYc6WGPJu6rC9VuFuYHd+GYCSgzbF5+axmi43Bgzjai6DiE2RoGf7sZL5yuSLy6YKpXixxbZ2bQjYjwy5KwbIL2CKe/IkdMRQqG2AVmpPzDrIbSIhHz262NRhmNy7b/pk+sJAq2IrZeBTHJrdhvxi6WQkhRwYnJAzyw5DNVrfKYnizVHmTDdU2m0mpfeFswi9eK5PZRL7cREw8Gcd0mPwz2yScZsMgtf6YpNUG1L72XT+c6gdW/RGevgSCnTlzixLws1R9e7OO83M1bJHB0e9CstBBslRFutQWj+rXhHitakdssItEoIexaBdRdxNZOfyRkE+bOB81u2oup0e9OC1h5FvXq2IoZeM7QthaqGiS0jwULlCs2C8R1bSgnevzBUxH7EpuWOnYsVXqIlesK2eWvd8OokNLPbNvrGvp9RnKzAJCr//fvW4VVlWJ6eH2UgFbhbp41hbiQTFOEnLfSZkzdCv5rh7ijpIuko9rXQ5YBrXSPJyemDqfTou9VhUTpfY6miO0UkyXRpHJdnk41DzkLCgNAdWF7G5BM23SthThkWfskGc8EAvg6I6svJcNuZRTr61U2NCJh2hiEs9+4ZcRHxjTHFRDkNbi8j09/LGoINZt2+E9EEJiZhAf/81lMUJlCREzSqCXK6Q1hHPLmnk9bvm+pPQwHqdP9fvYm0UCwIaE+QiEzNREP4fJf3WUxsai18OKoLJMcGzGZSokebwe7QOMD8dlv7kQEdQ0MpJAOObTarAS6LNOIcikVCCttVX3fTrFiQ4Jv4N2VaT2yutJDGD3mIPpNHLa70VjKJuwLh5Qy1aaq6LDh4CEqjhVQf0S9jbJ2VUxtGerw/YH2f/zVy9hn/8p5WIPCOJ88N4ZzSOGR1uKNplDZt8ZCyNuSwsvnbDIWSbqGhYHVcFaagPhYBTZTAbesRF5nha5X6eirA4JKxsNbG3lEBJ0Ojo0IOjXiZw46+T6FiQolvPrhXfQgkqziG6999kpP1MYNa/VNLtSTbSKnb6KjHjSWlcb4thVHhaPeWJnDGfubCHfsMIjq6wT+w6XdghzhtwvDyUo3jooYdugzY9DQ9uwd2o3BmRzlTZXJOSsoJrOwJYvwrFrADWbxMP1B2jZKxorE9EFg5Rr70j4ZoPbLRuxnBevTQPhV7je4fQ9GUXFGNY1f+PUWTcnFWsN81CbeRWzRYJJTB3+6VcOXTrF3sX3b7WRKrR1ipLdyBQx+Mn1VSQrTuyaGsK/+I2XcPXOBuYe3saBcdnMDgNzqxlcuN3UXE6YG1PAxXKxietzGXz5iVF88dQsPnpk4OZiE4ZAbQ5p9wy5vg77WyyI+7rKnuCTTfXhrQ42syWMx53wRUM4vm8UX/PtwelLSfzw9D1BXk2tVPUeTxc8PnyP81n9KqhFh8dh5gwFeqxlm/DJYTk+EsZCsohrj+QgkHxRDgqpg8xeNUNzHF1KojHP2Mwqe6ihmM2cRaPqjbYwkDVWc45e1atk2wNZOOwOvyCOIXVa1XpKnpEY8OAwolEDJ4/6tKcnEBmR3/Viff26GLkcPB5xWOPb1VhRaJVoiw2LcTFGzOUNJQY0V2kIavfunsWd6EOUiwXdf8zHkHe+KYbV5THvhyFvQEI2NVRyL5VyGUF/SA6wT5tQH+9jS38PaJjYp/7WcgOJJbWr34FwKIxde3YKcpP71CKSS8d3WKmtlRoq3Nrrh3bsdicicVtduhdHR7MIekoo18dgOMVg+Pnl0gZShoYOzUeZrRZ2i0MNHtuBVHGdquE+h6BdNs9OCsIR9NaS81CRcDzEmccGgvEY5i4SmUpUEnBr7i08OojFS9cwI+tmSMjqlkikValoeC5viJCngc8/wy51O0rVAXEKDwWx5uFzBySMrmj+LRIOKLq0ibPnvGZBQtrRoWEkRiNiVOvau9eQM/L0vm2YHB1DvViGvzOsrQ+fCcKigajmUzr7li/XlE2QApzacKfzVeSmrmk1j98PBJ14Zu8APrhTFO9tUxbNoVhX4uMQPPYyJCJBsGlFWMKCYE+8Er3dxjxWZfO06lmdVzTaVkEm4olbEhNbg/K9g62KfaUZ+X1BMh5fHdZ0QD2SV2L6fCFvKqpIGODUKn7XHLERQ1/vykHsdZUS2WWzmQO6hjm3Z6KRHvodEv1pfXkwdbke0ozIfzt6ZsbV6o1jCbNoiJcdiSxjIpDEzHNhfC8rxu3MGjayEnI0LKh2g/j5p0JyD2ZitCH3uZip4hvvpbF9OI8Xjk7htZP78OMrBVy9m1bP2tP8j4EmWzNk41OdJF9r4ye323j9oIRjmRKy6TwGJydx6kAM9x95ceVhFRanqejzmL7a0qch7nscDcvsStpmtsfJthOk0EHIZ2oxUr7JImFAm5XVJudBu1rhY/iuPtIw82AcZZJYWN7drcYK/X4njb0oMW/3KgmjcvRLOOh0M68zwrOPYm7JZMoMj2N2oofDe2IIxUd0vItEf3wSicEBefYJQVdTYvhtKKYXNLQPyyEbGhhAKBTWZlYyAVBsw+D0gVGDnTJd4YhJh9IziysuMfak1yYjAhkUGg1zlKRUKyIRT2B2ajtKbNFpt1SrsqeqRZZPqZR6ZhexLiFDJL8gMaeVZHo7MDE1psg9k0nrWBobbsmOwaKSOlC2ANHwNXo6yC5AH+lHHyCffB8jewXphV9E1TgqB1ucfkuMlTheh0ccqeaKTCZVIrRmq6VS8dVMU9XHGY7WJTwcGI+jaQvJeXuo+gj/N3HvFWTZdWWJrXufv8+7fC+9KV8oFLxrACRBb3rINhLbjxQ9E5JC5kcjxXxq9KnQhGIiFPpp9XBiONNi90w7NskeEjQgQBjCo1C+MqvS25fPe3ev9trnZQF/UoxCBBHJqkrz8r57z9l7rX32XqtNpuNIIIswAAZw78NruPjs4xi1e0guzGJ/bQOrv3gbp55/Vr0iqW/Gmc9R20xMxIJtfO052XOjKA4P06poUcxModmm21BA7xfbUlh75hA0BQLn5qYExXY1kdcrDXxl5kFcTGbR3zyW1+6rse+J1tknotZgBTPCkw7loY3RHAx1houOI9rVLjdYFTQ9M13OI+G0Y+O5R3P0gkJ+SqJ6tyrZv4F4PKBmj8FjS7uJCXOrhwcIe5KJnQT8sahaHEl8wiAgD7S6oV5urOyPiIyjnq4jZt6IUMJwMC+LpyUPNi48Ki10qSIPsa8OztwoDGZEdTwN6vX9OoXPWof64pHKuNbELHLSH2YZSyfLM5ZeQYVdDmxBCeHcGbiBNIb1fbiV9/Cz1+XPxrpkKdkc0Syee+Q0XhJk1S7JpVh9oQkUk2tr8AvLa0Ri81q8vrK5g9u7N/HVZ7r4/c88iN/++uNCneP402/9ALfvHumY0dvrPcwmKPsxVM2vF2+08cVzIQRHbfzVD6/ibsl0iYeD/vvjRH7bNOueTA64unfN/GWYYxuqLmHrfbE9SuTa2JDXaY4iumm7snn7evIVkc3Q0nq5ShHL72HQ01oP9cwCnmlU5PydbeReGKy0fYVoVYJWULK3E89JkmihVTaW6YXCMn7/Nx7F+bNziloYRBl6mEiYyX3nl3RgmD9rTU5z6XLDAMDTOP09bG/hmBd11lgol+fJhkvt09NTN58OF8eicfV+pF8jGzrbzboG564ghXRiFqXyEY5KJaH0WXWu0S77sRnR0vOYsdGMmogZIDudRVMSzt7BviCQNrISID2hVKxlddtj1dTiIHa/N5REGlDrr2wxgc3Ndbz27hvoVV7B2ZkKdjbbWHqwK+soJNc1UnVZeXuSNCyVF1YjV7m3A/9YhfKSqSBS01Gk7Zhqfd267lMq3/edFoq/IPf1EC020vpSinrzC0WsX1nD4b0tZIWmYuhhWlDonVc/wJ1fvInFpx6HIwwmFLYVcFhtofbyvMN+D195hoX+JF5671i72Cn/HE46OnjfEARLGuwkHExmQ1R2hmKMT1spLMu9bd3cUSeigaDuisSKvfbaJ4OwuFCWHnoSle11DNauCeIZaa0kL1CRchN0YiGSGXhmYpvQ2Y1ZmJpLChIqCgQ/1Nkipveea1CSXyiPLDUtjPvzQeXUw4RpMu2266hYJdV1H3tCCwUBdP1VbdbjCFokZI6CU4LadnZC6ovoas1ColwiqbWJnVJFpYH5OeryGJVqoiq/uv7SsVnBg076j5Umao1NWwLY8iA8P1xEMD4NO5LAoFND53AVo25Fh7RpANv1FvH9Kw0VMIxHq/jUJRf/5DfP4U7ZwXd+vKFCcySfVKCkXlFPdoIjrxtLLsnD7+HOQR9ftFv48uWgBKwUjh+L43+9fQ91oYU/vwPEA2McVEeCFmysHrqoy+Z8ZpkHDZY2yoaCrgkoasFkmyA7wYtqQqPa6R1tzjRH9iOtjfBZnYymlNscNXEUafQ4dyZ/5+S/14/K56qqJqGNo3o03zX9X1RSFUrPe0YaywBH+sssPJIHFJKAw+7nQfsYvUED0WgeX/nsc/hPf/OzQi9ik9YWV+kY2xtURsX2TfSbjJ2Uz0xGacLhgLXFvijbiHSPVRdtpDZtV959R4LRquRN6m5F1eJN6f/Qj7igsnQ6h+NSWdVxB4L8aN9Fcw9KyLDxlCJ57kRr350c6JwEKWi91dY+L29ymBhxKJmc1rpRqdRUuWKlkMS1PoNKqRXV77S1HlqrDzSAlsfLKHensDh9GY3ho+bZWWNtobDVusuvRqTBsF/lmJiIosmwBs9uY6DIive+XKojlorIvpNEaz8kgWdV7lMdXUE5RE6RaBS5Ygo7N29rDxcpvJPIatBavXId7Z/1sfJrTwpl66pQ5FACmtuv6x4nSvwHz9FCjfr9HmJCM33qRWpqvsFwWGh2UI09mBjSBUGuwrjm1u6gtbOjGrsjxoa4hc64rh6ln1jRnadx8+cvITt7Glde+VuMj8tycXLhgaEJBVxQI0p9WNhxGxjKDY0fCafv+HQYlkMAnFBvtYRKstYRisgDCSCKuJpNcCAznKIUK2shJRw2toXGsedDoGXQUJ0s5V+jfkU+zLgL8xauXTFNfbVeXUdZmOHhCBXoUThvLIutDw0bJxIpljG17MkipLIkLSLHxN8MUJyJVAdic6LF069BfRtDWSTcLf5wFuH0RdnUCXNYoPSxJ9B6R9HJ373nYuPoFv7Lr83hn/zWrI6qVI9HuhESAvkfWknizFwM8zk/0nHJRJLdXn9nEz/83hsICHU57DkIJFZkFTVQqlexJ8E06PdNrJds1fz6yc0+ovL+2GRq9Jxs89/ke4wUsTURtZZ7N+QMY1JbEfxhn5mut81JlLpuyUandXu329VmS9ZS2tV91b2KhfJqaquDypxw5GGGJKPhQKiE33jTjagGIHeYY0ugJr/P0qbgXudImeLppbP43W9+EU8/dknWgSS3btsQVmWU3uRwRF7XP1JjBksQOxGcrc1zrN2M9fMqre16E+WFvk5EsNuerzF0u9ow7I6O8cS5ESqNMHb3Kwj1a7JeBGXEJTCzhYZsQHUcAkhYIZVxabbrqt7ArnENWOMJ1ZXfyVqUrYdMQwy7Aw1a+zuHwhYGKEznJRmMtEO/JQmbKJABw5HEG40FtcDNnsS20KrHnjxPfw20KtofL89UaLhQs1TeUS136suzDcevp5D2RMjQ1lNBVYcIse4bNBGco28MLgFJrpEi2uFnEIjKNdVa+r0B+Z2ZuSIGd+5h9/oaFh+6oFby6dk8Zhrz2L21iZsvv4pTTzwCJ2ipThx/F+WjCKk5d/LN5wZ443ZD1mMW+fwUpopTmF2+jLmVAuICCOJ065G11xM0ubd7qAjZDljGYISoVLZS3MphKl385AKWnxmzW8bs4jmkfuu/xms/+DbKh0dChQSqckpe+DpPIO7JQjmqceRC1mTeQ7uyJTd3LJvMVl4u9xlTwXk8mXwOuVBBnYBT6YIuWnsomUxiRstZlO+P4LD7LuOHjtEor/eNNYuTyrHjOJNjI2AfHUqBVI5kITuGZvQtPakJBOiJZ47K2ZvMTTDiCAyPGGmCyg5z2knpaWEfFjcAj5xPGlu5FVUeWCgDu4l9EZXggGQPVaawwjr4bfnTem0BRyC7BPJ/+qcb+Oav7eMbL8zjzYORCpt96sE0Lq142No9ws1bQvv2e2oq0feSsvATCIzb2kHuhY8QypyV4L2MfnVNwFtVr4OBJix0ri8Ltt+01FXGZ+xoFJFwMbPVgctdu0zkPXS6TQ08fg1OprfH1rnOCZWTDwrLNUgL5Geiybxca0UDwKDekZ+NCWJJqiqntiIgbk7R5N8xQaiUR3H1BGyILl2JVWZaFvKgpdTquSefxB/8wVeRySSM2qxkbJ4+kv6d6FCS4qkqx9gz8ircqHJfPZVKpluLq60xOhXBgEVn5jEPAPpaPxJ2Jsh+QSiRvM/QGO/crMt155GZXkZxMaXO2P5aGX63iSpqwgZGxPXojCi57NcG5w7pj6BKP9fG2Nb35FlGP348QV6djtzLUALJRBzTrN9I8G435B7FwioZ3Gj2jPJBr49uXChpaohcPqnGpypXJOgkKgmZrTDtRkvu80gpYSDqThCxqwcTUM8DnzaiaE+doBv2NtFJUxVV/cYtXEUMOcSdeEjWvKC4wfcFhfU0ILPfMXdqESWhhYf3NlA4JYh+HEd+ZUmlcCqChlbfeAOF8xclaCYRksSstvMUq5CbEwuNBMnfwE4/g9jK17FwagaJlKP1Nf9k/Kte66h5bK9e1oHv9NS8lm56suaatRL8cn+pbPGJBCzecL9k317bQ71+gKWzj+PXvvz7eOV730KvP1bt7pRsoD25YfGBZGC7o30egnrRdmkN5SpnToZcSXZJPJJ8Chezz8HpBzWjhkZRePLw1Lcu7CAdWUFY+0V2UBtv6IZwBSmM/YKa6kN5LSO6x/pMMNwQilhQVMH6S4RNo4SxDERaYDYjzZwvUATimcBKt2aFGt6EQvHomreIXdyKsjh/F1ZvPHaRh2yix6bOWvFrLmdcuKnCaeMbxwY++Ry7YhKRFlIC7Y8PqtpcS6rzNz9bxas3ZGO7jvB82rXPwApF1N+RGVa77SVoWb0j9A6vwRebQTj3sGzQGkb1dbmfTb1WW+cCDYLy7InqBSkV47kGKzWKRLvbECopGZyjST5XTR60cdMzInGkiE0JVPVmU2lYOlVU6hwZlrEwE1EJ6aIs0nw6LgtSPljLcOJ6xM5gxN4cjgINWE8RqkqzAaNJRY9JobiZIh568lPqLzlSGRJXe6DUbt1nVD7Vl2Ns6mQG3UgasYL6fPxWUFURtD9q0jRHiSB3ws2uXdvB3//wLRzsNQTN5PV1H3/8GVTKVKy1ZANNyXOhHEsK0Zys0VoD1s4uKke7cFvHCPpKsiYYWCm3HZb71UXSZ94b44ZrTeqaeq9YpBb0Id+7emtdu+4vXDqlfgE9ef+xqAQjoUrxCGXB/WrXXjkSdC2UcX+vjJlZqkiMsHPnUO5jBJlsTJ7nGL1WT2V1GISoYU+3ZtrFc70EghLQ2gOto/WEldBDkPeiXe8bM1jq49N9qTNArXNWkuXzcKw35N9dHdzndEnu1ApqB0eo7B0hPTeLjFzjwbEP1bIEmMEGDj94B63l04LIFoX+SdCyRtg4LqI1TOPsbAez/qvwun5JkL+FhlDIqCPPUeh/XwIS1TnYtgK2N2U3EEyfw6DV1NEtNSxhaaX3CRTdT0ZzLJXW8MsNK6Oyv4P55Yt4+it/hJtv/ggLDz5LOwnsvvwiFosF5DKuaq8PhRqOGuS/jgaTmgSbXCCBolOEVWaGqsAt1xHwCTd2eHQqaEa+J7CQQDZzEWutOezXbwnUJrlhMQ+ywQbaExKKGPljJ1FFozEtQSyi9kMh2VDjiUwMRxd0Do7d9eZ0XxB/QFVPzQGQrWL9KqdsBU0dBpNBYSofcBpfglYm7sNDy7RFsvH2ahulpo24LFYqAfQH1C2HHumrSCDVC/o27pa7gv46Ktbfl//b7+TRkyDkBE2thw15w35XNvNI6bRq4BMNpRbVDbnf2EXz4H1ZeCmEk6fgHwu9bu3qHJ4qVkwkgvlGtI6lOMybjITUlfbSCp2fo5kCaTT/zroaxfXYV9fty+fkXrINIBxNYDZcwwNLWSSjEU0wnBeMCMqiTXsilUUskdbSAKk17ac4AcDm2Fadv2OsdULP4iS/jUtPf0aTA+fr1OVarc0tbbg1btd+Ezh1JGqs16fu3x5HfJjI/KZ24pq+KI4BsTucYyN//u9ew40bB2jJ5kzHpgQ1NfHp5z6DJN2U5Jl/6gtPIpWN4/t/8TIuPujXE8j97SNBRylFRmMvIkk1J2i1Jq9b1yZk9hZSPtmJEAGaxle2GKgrnW3aWXL5IlIJF/XjOl7+0VuIpxNYPFdU662eoHp69E1NJ/V+aS22Q7XQlqJYBiMGnburW7jwwJLWz6I+qKEvExD3VkhHe3wqIx6S55LIRFGvttQrMCtUjEiaOlhsoWiWO4KW5PfKfWHtK1b8AkLjM+jsvCj0cFPeo0/QWxLZ5Ti6lQrqwobSs4t4+JmUQOlZvP3eBUQH1+FtrElOrKA9v6ISTQvJXRzhFPr534E92kSg/QGOr/2f2N3axHOfzqA5PiXE4jIisQKi6YtwRnKv6ttoyWs0Ntcl40jS5nPgeACn/z8pSsgOajqHtJrHqJTWZSM5SM0u4ZGv/L5kYLnAfgtfLAmf60lQ6/TRk+z14f67KDdqkumFzthZoVzCxd0i7EMb1f6W8PgKxo0jzayx+DwiEr2dShYpb0l+Rjb+cQg7x31ZXEMJdnTv8JDLsT9qqIVB9rbYgboqV4bD7GimWL9jKJ7xeNXr5t+5WcaucTVGMKaCbWNXUFYwRc0AiVl+08ekuu62KV5P6l1zGaEQnLPKBvHMhTj+8s0RLi8N8LlH83j1uoefv9/WBsBIZKy0ptUv4Gcf3sVKRqiT0INuhzQ2pnU6OzDWTWUMVW3tlbEnozS2og9Xs1gwewq+Tl0C/iFax2tyvQmEWd+iJpigMEtVQIfGMdkzTYdEH/1uS1sNIlQGndSztKCsaIaGDh2VDhnpUHVUayYs8MofKES7yDgBPf0J8WieMr9ORFtGnFhaNk4E6WxOC+UjSQT18oHawTO+dzpG0I2B1x/ks6ipbZvOqnXbirzsSZsEdcWoKsoOaWqY0xOwP9wTmnZPnmkbYb88H/t5ub6iUXbggHivhc31I/z1D1ZxeNBESwJBOjYtyKiDxx56FCkJuOl0DJ/+0uN6L375ylXMzk3jkacu4PbVTeyuH8J/ehrnLp7CO69eEeoi16SjW44GgljcnHqOtYDe1wTEYjmpHN2ZiZCYBJ1YEI8+cVESZgjbG4d6YjeSALK9V9Eh96Zw1GlZMPlCCjMLGbl3Pqzd2NQ+MibZRrOFo8Mm0hJ4UlNxdVfWgDXR1FItQNZLJckk4lGUSzUjjDf2jDqE/F52sccyDpy0JxQupM9Ku/BDl2HH5nF4/UUEute0bsyifnJ+HqNOG81jCdqFIp5+OoviXAIvvzWDu1vbmGp+gM7ta2jnZO/l80i6L6G/ehXDnKC24lOYkjVwa+c7uHd3hAuf/gZCiXMq891uNFHaPYI75cNWMoq504/D+2BNAp2nbSHDdveTo4ScxfPx4Urw6TSPsH8UQURoRESiONUbKQZ3avEMBrck+shDGvvHCAhNqtTr2Krf0Z4m30iye7CItvw3ru7IQj7Qn3NCcVTrWyjLo4r3kxiw/SFQQL0xxr0tgcE9D62ui0SCjYGQgMXahScL1I9isY/jXVonRRRtjMb3z3hwv1eBtQ9FTeOJGaxcW2IB4/o9+ZGQaZvXgvVEfdTYxU5aAwwyWJ7JoCoQvUGzSlkE19aGSEYqeOxUEAvZAH58ZYDDpqUzYzSBTclmiycFgfSGimT6EiACkjWDpJbaSmGbKpnl3u9Gd9UJ2hVaO9LxDZsF2uQcApT17cqGqGzoFfojSaEAkgDoPNOva5cz33V/0ND6XDickCzc1mDGgwd2WTNgcDxqpIFCglDYr+NM6nDiJBAL9JF3hNZBqAl7sGTB0TePTYNpWcgxQVjhqINMfkZQQxW10q5831gQb01bHqg7Xm+0ZEMPkF2YNgapPNUdmz43mlNwFi9MJ6VRWKcW6JA9Hh4KQhWK5JbluX4oiYPTBGlkfSuCMubRl8DXb67iqDzAX37vHuo1S1tTssmiDrgvzM7h1MKKFsFXzi8o4rv94RZs14fLT63oY48nU4JqLmJnewvPfe5JJLIpfOdf/43KAKflffV1asAoxDJIcdGQ6nKuMJp2tP+rXDrW+tL2niC7n/fw6OMXsSQBcFNoJuut46ir9HZ/u6y0NC4BKSMIjOc33e4AU3kbs7N5NI/2VBKo0xWEKnvi+IB67D440ZA5IaSqKtUd5EGHBDkRxXP4mYxgIMg84gQ0sBGhk7WyCEGlB97j6nEVBzsCAnyPorD4MEb1a/B331daGU7PqHJEX4KMJ/TvzGIe83MxXLvpE7QVQ6mVQL9TQmfztqyHPpLBGiLxWcRzX5Z7UMDnf/u0UNSeBMysoPw6tu/sCSUcyXM5QkLYUXGxgN19SeqfugT/gdDX9zf0IOD/k2boP5P//b/5RmYvfnz8f+NmeVIEHACcCaRaYzCh0hoB1ZHu6EM//uk+Rsd90yTIsQf5maPeMRqdiqmryCJ32rKxCfsn6IcLZER7Jq+P7qAqaEDg9QMrGE6N8NbWFVRaXTXA7PQ91GgwEbFQmArobBzp4fER55zSwqs7WqD3WZ5uFDNU6mp/GCajFp72lcmmTZyC16sa9VO/kUo+aRbU67JMp7gS2pAgFquHD1b7aI94qgZBGAHcPYxhdbuGR+eb+NozeR0NqrZ8KLdHyMf6ePxsAGvy9YEVwfXjDNiTzmN0yoiQzq4ULfz6oyG5nS0JdtAN8cS5CJ59QO6p/OZSra+KkKrYQlOPQEwD8EDdhOpGXkboLQvUQ7VQG2ugJdLpD4fabMhiuBpeEj36Q3ooEfJ7WnfhHChrJ9y0s5E6ZuNDpdTM1nQ8JiqIxGNIpdOColM6lc/WCHrq8VkzALZlnRzuH2ibwIlhQ1yejR0cq8sKC+SkuI3OHQk063JP2/I8qG7KZFFDc3BDEtKa0P0y2r5dQapDpB0/koEZwaRLGDbaONxbw5/97YZsqJjO/2XiOUXDRGiPPfwYpqfnkC/mNIAd71W1wXJ+JY/ifEZo01gRCg86O1XZiIWoBpp7N/fU0oxUzBZ0PBYkyJ/XfjD26DHxeTSy6KHf65mgU5xCiiJ24ZAatdaF9hOhJpMxHanKpImYYirKF5j4I9aOO8JIjpHNCt0fS9ArfQfzhQrs8IKeNndaIzSqPbW37zRlffGj3kezYf5ek6Can8oYeh30qdYWSwKF6awmLz0QqPdwsF1Beb+u9d2iILxgNI3GICcsRViJ77S8rxbPmVRrnQcBROiRWByLp6Zx+kwBXjCHincZ/syzkpiWVXzyeOMl1G//WF4riq27fbz70gdo1hsq0DcvP2fLewwLpb35ziaGHQ8XH1s0+ndyH7CcRO3t6zjzh5/6f4wt/7/0YfH4XzWCfKZR1HI7GLfLKhTGWSluQptaz3YJtesdRLYTiBQSWCpIRl56Bm+4r6A0XsOeu4c3ZRNd9Jax7JtDZMSGxZ7QIFelbVXIISqBD0IPBD298MKn8dNXfoGDo2OBoDwd8+AkbaWI2shosQ+sJlc3r02Rvd5YtYOUDrrWfbClwWvi1cfRkSCNUKM52fy1SX3LODOrAumkAZNH26RU60cc/vThkXMWNsowahJ+qDxstRPF//GDYzy8fBe//nwOX/6jFbx5O4Kbd6rqiViVB3n1mgRjK4bppA8zWT9OTyeRCctDE0pMmWGqJnheEOdmgW/8WgIvvnITEV8I0+kQ1g9cpV1GIZMd6VGE5P6wljUaUvmgod6GRpKYpiBB42SsHd8wEjq2uVaeIlL9NBKOyOccFczL5AU9+TtYSnSEipku61DAKKTy5Iwqo1pI5YymPKcIVS6HPT31Y8c5R1Qy+aQ62AxHcr+Ero/dNexX7sp7CyuNoZxy3y3JPZMgWrml6ycgAa3nxQVJCN4eHuvpU1QoU9FZwpR9CenORUQqQms7Yfz8J+9i3M9wZFXuW07bCvrdGh56WKhgij1REd3cVNmgXyH7lKZmjfJrU4IBDxMc+VwyndJaEk9Jo/G4BOKMBMuWJgrW+QIauMby/sbav5ROCbUTihSTQF0u141Rg9zWs2cXVPOJHd+7uwcm4Q7lPocsff1QlCjX9FTxfq6v9rQ4v3fjJzhauwrH2sbsxTlUR4tCC2PaVKuyPL6TeqQZe2LTrDZ+yDOkIgLXYjKZUNsvbW6Wz7MG2qx3EI2FkZ9Nyvs3p6mcRuEz7yQeQc5JSaR6St6XMJS9Lbyx9TNUcISHHmxhZj6CogTxr301KBS3hrWtNDw/D0uewfrVd+Q1y7jzi2/j9FPfwOI3P4f161t4+2c3MTM7hQvPnNJey+pOG7d+uaWqqY9//qwkuQhtdOH7x5/95CjhQB6WqkMiLtCwLjxVuHujhL6TQ2jskwXbV9GxvtXB3vE6wuUwpgXWZ1bmcToQwg3fByhb/LqH/UgZrWoVJVnEy/4C/JwVHTuIUPwvbuGm/ya2r/8A4WEQTzzzJR2c/fPv/BXarkDthATFnitQeoxsISA0xNVFF5XFTM3tTqclcSeoU8xGjcmeyC4b4Tq121VN8bZuflg1Y0yBiQTpCY2c/Ftlh2UxNzqy7VIelqb82KYZxGTEmKc1iObx3p4P7/9FG8+cu4lvPF/Aw58V6Cw0bkqyUWFpERfOZDCX58hCA+vrO3jnyi7uHKfQQUFeO4lEjCmhjp2DBjJTRVSOj9TswTXuT5P+Mc+Ye2iDpcMBGy3yY9QRdCAbJ5RRIwJCe34vTxT1EFqbS41kT0gNSUOTUQ+f/DuCLOG/b6z3jY4xHPBVmedkHBlBBrnZomTVKfkdfUVYU1NRuf97EiSoNNqWoCTBZ9BTmRf2WcFuoIuuEZnzjLkpM0QwYEQcebgRZND1VXWTRgWxxCWIrsSeQNH3GYQai0BZ6Gp1iD994yVsNk1bA58lAyPVLmdnZ+U6ito7RgTFAxf6QlIRM51PIJFxYFSQbb1ubuxkVoKWfJ5tFIlEAtn0FOw60BzV4DjR+1SQhy0s+g0GXVSrZUHuElRbPUETBXkuZbwuAePUKXmml09pgGTNL5+PIBQLqLU8Be6CEUpXG/FA3LXw47/7GfZ3buHCQh714AKi41PqyUFjimjGMae+k7EqdVlnwApQsSEmwXkgiSGs6hv8c+OO8ThkgND+RAl6bBIlwtbTx85IqPREACA2xt52C7OCNtlnVWsF8C/++gqOWw08dPo8vvz5FVx8OIFefUfuaRAPndqQxFPF628A02cew+UvPoxS7wncvnuMRxaAp790WVDeWA9AtMQi6P7xz54RMNHH0UYVb//kNs49MYO8oLz47DSO1yvILWd+9UX3cNjRaXVP0EuvvK81EuqE96slDOJB9Z/r93wC8Vs46B8iEYgiUHcwvuHCn5IHOYoIJbC0r4SqrePYEJvjLRwNjhAcyoJlwV2y+jA0wKoskkq9inAD2K218bnnP4cnn7iAF198A92mrXpFsq4E0jOrezpy4ZJw8QTLa5h+HctUq1SRwZ4ADstYOrHY4PabCDrZSTOe0Yk3R4fmg3UrVUGXRRIX5Pb7T4WRi/mxUxugtSS8f8NTpMWeJCoPs8gdjWVRd0N4+VoLn39ohCcuruDSAwvYOSzhBz9/Bf9+bYTdqqVBti/3IyFUhidlQb9Q3oiNfDaFG3SsFoSTzhbw5lprMqJiTzQl/NqCYHt+07dDB203KCiF9bYuErOXZbE2BZXUNBhNBKCNWihPCQkL2eQryJHWZJzdY4dIJthSZKsHEmyJEArkq7VU3YJ2ZPfW7sjGbariKoNAp9nUk81ut6cidDTVjCdpeVZEdCqEUX5bNs5dRY62zvWZ67fZGzdR5gxFbNVR86vMsqADewpT1kOItc7Aq0b15PY7136IHfkdYTus9T6qcPR6bUFiIczNLSDIAWHZMFTDZHsI2wOcWEibitXejX1LsunHdfpU2kidySOVico69eR6E0Ijp4QWN7Xe5vcZuq4D0ZMU1xtJAK53dQB5NPAEbRRw6vSy3lEaN9y7s6cHBkR2lH9h86f2R/lNH58GjqZQ5vWyPsPi/KPwCb2eOv+0PLMIhq0uDneriLcHKiPDD5o4qFyTCrNDTwUp7YSJ0XJS6NZAAhVVIGLyNYpXdmmM0hmpAsWgS30rT8eEWBbxyVrZzwpN3y6jWWvgH3/7f5P74yERiWBuSqhicgV//6NtbNxs4PNffFyCV05W2RaS+CmiPtnnrQielKB17fU1fPCLu8gVE5g9lUd+JqnBeNwbIJqW7/nCWbz63RtoVTr48LV7WDjdxOzpAtzeUPZ9CwsXFn61bQ08mdDBTAlElmDzUaOnGWXUr6MXymqnbGAUQG1wqBmL0/vN7ZuIHa2iHXWx5ZcFPGbXOSVz/XojJami4+ujYXdR8dfVTDqS9KNFHt9S6zvcvr6GQjohEDQNJxpG6aijPDlIUwAzmasNooNxR+szJ+0MJxLIY+tktNnopo+123mshhCeZExFYJY9sf+yT6a9jQ69tg3YaPZd/N1bDXz50SCePR+V7CzURt7LYYtdvWFcXnawXBQ6kxjI+yuhVGlh9U4du7fe1QyUnS4KTZiCF3HQLMsitroS4FyEXKN26RPEt1iw8OylKRxW5B4KoniNM4k9M5t5H/FN7M+MoqhnUJcXUpQTiuQRiM6jUX9fUYsqKVCYz8yYaAGfwYhF90GP4zN+PSCIWg2EJKN22ja6EiQ6xzUUcxksLp/B0vnLssgrONxeRashWXpxCacvP4xb77+hsrnLZy4oktvb2sL0yjLOP/y8BO0EtpqruLbzLyXA9bTYzksesqZI6hUMaP+V6l8IhSxIoEphBin7LOLDC/CN4rCTEUW3T62cx169hiZR0miocrwMCMXpaR0KpuzLkEagfjOGxPVp3MFd7duzgz7EEvTSc5DIOXrCF4gEtGeLzay1o4T2QYXoK6AGrEE9oNCf1VaQiSCiZ+qZY0EV7OwmLZsSKh12ArJWO4rKOE/I4Wt3FNGGVsoac54wtRDDE59/WBjFOaGvMV2bXI/dVluDSmW/huP9upYxHPZo5VKKDknJx2x7cBw0qq37yYd9XuykPzqoCFqcV/04PuRup3+fsk62rI6ZscQx8Hr4eW0f3/3b7yKXSWJz9x7OL1zE8oU5rQNv3dpEsZjXQzW/U0StlsI7q3VckCCfP95EajmPB55awfqNEEq7ZezeLSkAmKeQpQr1AcXlFM49PoMPX7kngXiEHX6PXMyMBDfrIIBN/xYWzyz8agIWF8mQetBRTqwH1EWlX5LNoAdzbR1P8SbjBMe1Kvq6qWiK2lINp7XOMdatfXVFjspD9POuDsIKgcMqiUytHcnscoXl7lAXDRVEOe3c6fbxystX4ZOsyvpCNM6NSBE0FtxN9mbbwLDfUZ0is2iNzC1OBP+sjx0cqrIA61gdlZ5hwd0osJwYqVoTmV8D0dkBTJNSOjb/6F1Bj/WmXCPQGsg9GNmYCjfha27i3X3gsOFHo0cYX8Hnzhzjn33TwZ+82MW3XurhiQtF/O6zcpcCafz8ahhvXxWqISiPEwDFlIvnH5zBzn4LL77Tkd8x1nohKcF9NVHLHBWf9FopPaR+F3uXxj04hcvGAblT042mo1IasI0BiB4kjH3qrDIcV2XhZrSelbEoixtR+mmrqFxLksMMZpdPobCwomqfuakbcp1BRAUBZArTWD57Hrc/eE9oT0iJcUqQYUko4imqwcrvyYfnsDx1CXvlG5LtDSX3MeNbfTWCoMqCI4Fz2ncRp8YvID5eQTg4KwQ3Kdct1yqb1esM8WRyCdOn/PjhzjV8UDkwriySvOZnFwVZJFVFgeNVVPyMSLBhMZzPSw1CBcmPVG3ZUhpo+ayJnj8UFWXzcVRKcYxXe/fXhsoMuWa9q32WwdoTpzrzL+psHZfLah+Wn8priweDJgUDySAYjEayNgdtQVhC83uyebvNkcoHq3a6dsRbSu1qQ3pdhuGkY2ayQp5nq96fOE3xoCeoSZoNyERwAdvVgFyYzWPr3iFOnZ2/35HPCQ1SWXvk3tdHM7OylmpwRTJpTC8t4+ad6zx71rGZXCGr/Wd5odCLSzOSWOOC8vxobpT1fVVbkmRjD8IfdJAt8hS0oOKE7WpXW3MwUfTA5GBr5cFpQWr7KO83hJJSA76l40qB5RDSidSvxjXn5GPr6ps4/cQLEvXtiVrCUO3k/RHSs5pmIkqtbsvCujfYhxMMYSXCk4QIWrLQ+lwEAx9VxfVIPRCjZAvnp0ZIsdks4kclPsCh1YQriCmbCigkbnUC6tILQWHLZ0MS/S3ZHNrNJ8iCtvWuZhlv3JBPFXWhjYdG8sSc9hkZZNw3afV0yp/yzCqLbIcmOt0GTWnIsk2xnu0HDy9GcabYxCA5UrPIv3+njeNOQjdHMDTE3fIAV4kKAim1bfexJybbwXrlXXz/l3XcrThoYRo/uZXG27f38NS5A3z+GdmIiaC2QizP+TAdox1XUKhWC7/xfA4/v3KE29uWqk5pX9h9fauPeTx6ZjaSDZVEGsH0Aur7t4UmdnUKwFimWdqTdkKP/XZYmzBpGEAj3JDbFJrbRpg2TUKFOKTNeT/jsOzp+FOIqgeCmkb9rvZPUUYoXZiBP/Sh0A8JlImE0sHa8RrqpX3EslPghOhM4lOoNO6pMxI3tKc29FCzU78g6aw3L8HqS5jynofVl2fd4CSuPLtNSXitrm4CriervocXwmNk50Z4p9ZHuZXB1s6uBOU9pOX3zgo1nMrFtD+JPQyjyWSVKoeOzYHDaDLtYMZKLO1mTyWFdkrgbAvFDAXNXKgJVhMH3Yl35X0T1gnCURllSQwDYRTNVkN/1jcO3g8QdH9m4ycnCaj1pZRfgupxu6zOU/WjOtbvHmDh1LQEGdaqBqD+QZCigOyBo4syky4L5AFXFSfYG9YXBBVIRVRBozibwo0rG2g2OnDiIW3dsO2P+njuVzdUl95VO3rWDR974gmsrq8iEYvrEPimUNqVUwt4+lOPaiCKpxzt2WvXzZB7q9zAwcYhYsk51eLKF6OatGhMQR/CQNg2TcFjU2aJhHw489As9jaOdC6Suu/DfgwLDxaQnEr8aovue3euIJ4pYu7cg/pgCYOD/b6qJvRQlTcSx/bGNm5X97Hvr+nzq0nWycombvs6mvlYZAwQFUkUjwpU98m6dGohxP0hxDjYnJYNJQ/pqNlEJM6CpF95PS23uPHKxyPsb7VQPzZWVYTgzJwhuXlDQXk8reSxdJ+nbqR1hv3dV5R0JyeeWo4c91V2hTpQnvxdu9uB+5b1qgcl2SvpeKjSEl346+r2APtN2YwZC3/wnGxCCXbffjkr6DCHME96aFHG5sOAg0xyBUeDHewN09pFPkYCHTeEH92s4Jdr91BIuohHZrBQiKk43+GeBLOzee25ee+mX4USffaJEObJUacZODatZZ4iApq1JtJzsr8cDOu7Rh7HNU2kpg5nEIIiNB8dkhtIp+NqzjnnLyHj2EqlnVhM+4HazYbcQ6OsycUbkOzqxBOSNGr6u2n1lUzmZdHHJGA1kMiyoBrRBst6+RAz3PiCBBxfETH/JaGZ75iGVqorWEMd2k1aKeTaFxGsTKnax6jRxuiQp85dNCXoddtVWCEJ2HELzUAJHe8Q8fk6nnu0hHdubODDN2fQ7VGY8TZ+rbeLrzz9aTizMYwpcyRJtNsaqXcAk1cgYDTYtbWM7kITYdGwbMC9ww11aKIEsknMprlW75nl3T8hP9H7H6kumLF1573vcfCOVDJkXHQsz5hwUKWTarrqXyj/JZIOSkeSrHt9hCXA8IS3tHMojCCpg8mdZleFBUfCOmSpIEgzXb851CF6oqxMR5AZg5NAVXmNiLxmGPvbxzhzcU6VUxjk6J/oUwMNE7B09El7KM2hTTJjdOepQ8/AxprW5r1dzC0UFMnxWjkXebRX1ddhwtq9e6QUdWo2qVpYjgIJ417t6Wynp2heHfrkdywIUisu7GBrfRMhJ4Qnvv7Cf1Sw+o8KWCdaWLrZ5cHe/eAXiGWyhlIJJKYImCYiQUdjCVyvvvFL7LQqcOkoIjdr0z3GPnud/AJvkyEtqsfJ7acEncgm9WpGLpmaVERVhLLk7rloRJsDr11paoGUN7zX8VCvDdComX9z0dicfZPFQSt4mgXIH7r4OmrLa01qUycpczwxoPDpwlK3FDYzBpOSvY6NAuNE/M2anABSVmV9f4SvPpxFWzLqTtWvonAPz3Xx3Bkby0sODpoB/O2HHAj2ZJP6dOqfytw5eUZTOaEtpSiC44h8LmQ624NF9IdF7HSqSLg+vPxWBcXsEEvTIaztbOOdtQEOWjTsiJl2BmZH3hnvo+BlnRxl0rAUQ0RSy0I7SrLYahPTWqMZ5k303XULWgFt8PVZQqviGSRCLhaSPqEd5jCFJgXUxGdm1A3uN3U/OlEHnYSextFVWdUqc3OIpjKoHps6BbvWExLU6rWK9oxRiZPmqDOJi9irX5Gg2lS1YTUIETToYAVx9zIGdaB6aw3dckuofx2t9j7qbkXfb1CuKzwS+uqXxOIMJMtH0PaKeOBSCY+sWDheX8HdAwtfePgcslRjnWand0DvSb/NsRX5GPIkzZbn69f5OlXvpMUbhf0kaGxsbqrcDk4MPLzxfTR7/wDG8yZCdOZZ6Fwr+9ok8Pplcw8sKu/SkcZWQw/XNQ2kPLHrKw0cah2pftxUG3jH7+LyqVtIRoaCwp+Q11qW1x2izxM+rTl5+rNuXBBPXG2c1XOx2ewg4yY1ifF65pYLuHdrByunp1Uml3tBaWFgUsuTtTOWiBUMG6u8rc0t/OhHL+LO6k08fvFp7RFjMO+rgYdQ04RfqXNdnsXxfs0ojMqTqFVaAhKONRCnso42P7NPjf/mehrTMV2QMfuzrl+5gTu37wlC6+lg9I3D1/Dfzv+jX72An+oUMfo2q7j73muYP3NeOHlXaVWYnn2yaBuS6d/98CZ6NEaQBRH0m16oofzWCIufDuer/KDMc1QeYJd+ghwtIIyXzNGWRV6jXrgELtanqKRwsN/D4Q412mEkbBl6/NbkmiyEw5b+OyyvO5eJYr3RNzOBFl2QHa2v8ehVw6LrTVQZDIrSAiU1gWTzoluanCCeFLsMdWAX/saxD+9u+HBpui0LUChSMIFr6z387393jF9/qouvXozj0dMz+DevjnC3ZGp0IfrJUdxMFkpIFhzn8diXQqledb0O2trxnowOcHxQw417fcgfeHAljOmcg6wguOOujRJFFLgQh5bx+9MeMeOcrNbnLl2lJbiFs+hvvSXxtq+bkQjYO8ESk8KNzRYJ+TqRUSgSxlxyjPmpODq1kRnPCVMoL2KGpG1r4uH40TwhF7CrlLClayGZn0Jpf1cPWyit7CTigiJKgjo6auE+9o2RyVzAUvtJbJV/qsiPp3xEyzF7EaH4IpATVBA8FFpWQnfcxDAiwVA2j6QhBGMUPExJAutLcBiogihRXLdvIR9P4eknHkCivyjrqIEhtdZc//33zKFkv2xYh9ZxdHQWNsCu7GGnh36zrwjk7r0K9g9LSKcSmuSUCrLeo8nBoKWPD0xM5qd0jo9BjOiewWs8shSVsQ9LR48mVW/OH1ILPaIaVSG0Win18jxcfxeV9Z9gvhjEI0862GgsC3oyjMCRddedDLXbVA+Bsamj+Ub16NCUOmxjWF6YzeHau2uo1dsSaGKaZBiAeM2+sHHi4SpoNut49Sev4+qNG9g/2EcqmpTXi5r1Px6rKS1LLir4Qes+eT3+Xh6y+VULayzBVhhGLKh7J5kKaye+q20fA7jNA7zy0mv4N9/9IcrlmlLWkdvCA58qCmNyPzkBP3YBR2NRNAVGl+nIMTQOLPSJC8gbPmqPUKrWVcSLppm8dyyUU6+cR9i04AoL7MxOT8uGpBpCC61+FePQEIlpC+lcClkJfu2WBJlyD/5+SHh+EoNOE9XS2Dgz2yfIwTPBSuJKv+2q5dhTU3SDaeLHtwR6y+KNhziuEFYRNl4Pp+/diWefuudo0bo76e+xjCG0NakZaf3LODETV6+WbCzlwsingY2KhfIwg7d3s3jnzzdQDK/iH33xGP/0aw/g1XtR/Pgqm0UtCUbUsR+pEkMgTP3vsPYp9Xj0LBs3Gx/ga5eFAp228IM3/ShVbGzHbTx9NoS90iHOLBbwH94b3J9hsyYTAbZ10gQL1agPRLOyETuCfHaNwJ1rWhNwgsQm7t2kgz63I5QgDWHkOD8bQDIhga7T0OPpgKAsVQvwGdVNe1ID5CYMSoAjTRkPiS4oEdNGPJ1VytVt1dWxhaJ/lAOuH+0ht7CCfqMuaHwK8/mncXR4SzZJC16QmzsCb+BDqbeKlJtDsCjBUqhQoC80xcnJ82Z2bgoSDSCQcIQipdANuqh5DTTHvHcWOv0GSoM1tDtl+J0AUr5zpu7oTrwuxwZVagln4ujto6SyJQlKApwngSwR9SFXmFOvTTvuU9ql9l1EN645IWT40tNYUmxMqOJ9wwpTE3VVgWKsG5hFdWpnqdnqkAdB5nV4L1mbeu+tDwTV3cClpbgioMN6VA8F4km2NEQ0ULLmxcMQf8C0grBVgcPNrBUNBbFR3I9AjNrs+amUOkFzhlKZilx/n25AQ5PM7EnCoUMQWUxSAl82X0RCkgsDLl+I19usd9Gq9ZDOjLQEE+Np5sgzXf8jWx1/+HUayQyZtGVd224Vg4Yg1Po6qptXsL9LHXgBCeljXH72nHo00pvhE5NIZvMhtZqpjHi0uarFRm4MFl5Z2fxg5xgtoYmu/6Rm6ddeong6pYXXeu0AmVQWj116BlPFgpoXrG68h+u33pKHV0Y0Oa01LgalWCKM1l5HVRVZV/H73InEjUl5WucbcWzC0xPDgVzHX3y4j9+7bOP3Hs/jb65HsNt2TFDjuD2Pi+RD1S2183qkBVdueNY6TijA/YPEySgPWyJm0ha+eEltHpBLO9iq+3SUwxOKNxhN4V4zhP/pr3r4wsV38cffOIfPPLiCb79MnfGu0A7JYPJ7eVI6oqmqoMfT+QAuzQEraRtnCi7WDsIoJFtCOW0ctiPoyjeensvAcswcnopNsBjBNz3pGTNmqVCxuXBqFv3WjtDiqtGMUlo7gZKWKb6rOgW192UThCIxFBMelmZS2kwaCm5pwArRJIQidIGQ9kpp4d4yhxfBkGTwgKAv0jPNyl2hN2lNYO1mE3F5rhw4Zrd4aW8TM6fOC0UdKHWKCV1dyn5Z6H8d0VBcnVlG1QEq+xJw+iVMuRL4IvJsKTMtiMofFxQk925IhBFiQBY6JNeyP2ygXB8KpfKrNlh9UEJ1dIi8s4J0wMhE630ZG51+48NomodPjvnJ7EjuWKfxJ07j8599HBsbqxJQhYo2GkbZgkPI6ovp14DB9+CqZZg3qQudmPHi/kEOKaGfDuXyfTw9HFKFVaiF3fcrKqLF/KA50uAXjKRx54BqvBcFhn8KjcMmMpIJcwtxDVZsBmVtiGM4akrMqQDZ/GzKbkoy9wnV5mk8wcLsclFo4a7sg9EELQ1NWSVg66gQexQzhQS+/odfxYfvzuPd19/TgFNtlPXggOavDuKaFKn+UI12dNwml0ujUqpr/YyCAxHHQtTqIRoQpCX7NkhrN9LIgKBVCVKfeuoC2t0Y5AtoSwI97re0Xjdotj45hMVRA06aB2Wj2hQHh7GO78pNqrZ7uHpvD0MdafFUtTImsD2dzOkMGqP9qN9UXaNqtTrZS+T3fT2OHrS7stCPhbOHtcbgRJKYXnTg2g3h1H25idTqgQYsbVT3PG2OY+zhrCqb+oTZ4Du39vDb50f4b55bwY/XQ3jjni0UtCc31lP/PqPibpiSqqTSHNNvtKGMLXHAILBJ8OIgNZGILchkp25hqRjGLVlsQyqt0i6M1Emu1Yqcww/Xa3j/T/YFbbn448/OobYXw3tyPfP5DB6ZyWA+58NyVrKcv42j0h7ev13Hix86WD8IqesNR1V8ck9OTQeEFqbw/fc4NG3GK6z77RjefR9H/p2LktZbjcObuH9Mdf97vAlilFAVSqhOCq2laN65lBdon8loYZ/FdQY6ysWwnsMMrm7H+ntNNY/GuJzPU1pIMcR+G8HMjASqHBrb93RDs6uecsG10oEOE3OEp1OrCMqawdz8ZbQ6A2QkwHfkvTf2DrSTnXSyxwMZIkO2PEhAYu1z6AzYdimosI8xjUZjrtDDCFKjCHK+FIrBaYTsDLryM/7YQNGL6aPzPpJD0qN2M6vKUzZSNXZn05+x60XQHCXl+Y2xuLSE6RnKeLfVeadeb8ia7qjbMfW4+LOqH89nIYkqLJTfmK4aeZzJuZw2jXo0ZhmYWdEwlTskgPL0jWioIEmI7sqW+ygKhRzGPZ/Wl0ZeBfWqsIqbJQlaKe3UZ8GbW8yyzSk31ywL5lTESHsppbmkuLwnC2eoWNEz8j1yOTHqgk98PyOOD1FtQnUwvfAZPP3CY/jgl1fx0o9+gbXb9zDwmujJ8/zi5UVcLJxHZycvaySDU4sBzM9ZurdIr8NBOr2PzZQF20W49sdsLwpoYk0JWvy9px/DYb+D16tvyfu5I8yrqU3Mn1jAYqqngSQtkjiKIGlQp8XpBntUbWKv2sKQ+tQ+M44Qkezbk0zsMSsKZ47HYxoP6gLBy4c7qFNCVwIRT+dCTkw76am3fvemPMBOH/nZKKLxAIrLcdSqQ9QPWC8wdYUTtzO/zl95ejrE07WOPOQ3dof44wUH//lTPVyed/CtX8RxcNzWVgoWw3TsgYVXVXQeaXsEO8DZtW4MD41SgbY4yB93jzzMp0Ky+CXbW2PEJGiWaB8flCynjYvs9xpoHakdmMZfvXUIR1DL155dwflzC6jRs7C5j62jMl76+THeXatjs0RUmEM4u6IowB4fcaIZ54oeyq0h3rgt72MVWsy2ApwOMKV2Fx9TonAHgkgymrUH7ZI51fTcj75unUjtBmH5HYH2FYTCBaQcP87MheXeZtAfjnWOTaVNqMVEFVP2K9EIwR9Qfauxz1NLeX6Np4kcbmYtiDcnns7D21zTxEOtb9rKV3ePJFuXkCrOSQBaR4dWUokpNKPrGO7JjzWFmtaCiI4LguYsldge+9rG75B0k/XHkKfFf5sql0JPnKgrQUoQgys01iqikL6AaGQao04Lh+H3AdUtOzHF5cmVoGfWlryRmXoYG+rGmiuh7lErhQNBVCrr7BmPATbSzs3MyYeNRqOpBwjNFlUwBEnIhg8FTOCx3Mh9C0Nb7zlUd8z2TRyhJ2uR0tTaBAdTc2S/WLaQUUWIZCyGg+2yDvnr6JdtVGKruw15rK6aV1ADy4iHeNoAHEvEJMC30BS0NtTr9rTHiZpZ1aMGcsUoYmlHgQWfBSklFE26Gtx4TXSl/vSXn8XZB5bx07/9D3jtpV/i+sE+mu0q0s6BvCSlfTqIxJPw0SLt/kwtTIBiArDH2qTrqkIqp0xCmrCiCbnGfg6tA0Fq7YpeJzv9PzE9LM3CjLIWT116pmOdvSKjoYqv0Q6LHcJ6qk4Nbk6Rd2sISjZLxgRpZfOIyeK9LNmW3nQf7l3B9eO3hfa1VWbWH46qSuPVq4c4FjrIADM1H0UiF5CH7ENX6IE36UUiHSTcpbKjNZqox8D0vsQEDYQCp9Aub+OJ6T5WfieH770fxXffLWsjKjWJfDxhZGHaNaeIlD0Z2fbHHpCtnJ+zYLslF6/LJ4sJW/0BP/VAFrcP+/JhqSrEAwtBzGaB5XwXs1Nt3RzWqI3XX38TOVlkHS+Ab/3wJt5cEzpkT0nQmJXF4FGgWTaCpbN51MGPSBK4uDTGm3f8eGvNJ0HPM7013kn/laWBljdYZ7QFMUUSBfRa+/I7O5ooeNRu3Q/oppfM7w+rymgkaKtA4oXlJKZyRGZxCQAtDUwK/alLpSjL1K/sSVOgzgL6TIuASgYTDbHYLJsomuB4RnCCKDzVZbJlIbO9IVZYVGOIdqMktDOJ1FwWR2t3EOzaaI+O5Pm1kU4XEMmSJkLeRweIMHAkJEBOwcmmkZ1bQFg2JE+ZKdI37FG/Py00c1oyf1RVgTguZE2ce8wclqHDSo1dM3vpqdrpQGtL7Y6L7WPJD9Sfp8clpVp8xnGIw+GZYhKnH5g15hOUEz6uolqpo1FvqiAfA3dYtaeC2qrDk1jWmAadoQoD0OaLrTbEcnR9piuOGZ4wgpDtWkety6i/3jpuGcVVWQeJQswIRso1tSRQ+gZ+bfjlGmew0XpUwBiAOImQAIKgFvOD8ru7jaE2iKYzjiBCwxBc76OygLr/6KSBOXwqCqL8yjd/A5lYG09vCJKqyC12Q5z+lCTmqfRypC9oyj86WUZGTEBt/CZjVpwasUamHUgodsuuYFSXZzH2aZNrxx3pscEnFrCcRBSNykCLr5VSS6kKuXNXPlr0ZSO140yXbQTaGgKtp+NpPJV6FI8UHkU0mlZhr1m3IJF+GqfSZ5BeDeNa4y20RmWhhFVBWh4ee7aAnbtN/dgSNOLsUhFTUFvYNsfKo49ODAnXfSrXC+09IhLJhFLISzYOJS6iLsgmjS38Vy+k8elLZ/Avf3qM63eq8EmA5PSH2x8rzRlLNuFiVp12IrAJpNZitfymO4ceUoIYLy64eGDJxpeeKeBP/v4Qlb0yfvfRkIrMXd9o4PW3e7grbOfh5SH++X8xjzfeWsV1uf7f+9JlXH44ju++Vsd+xQQVn98gGqhWVRBn50coxOV6loN6Mtnsj+83ip6kdF0ozG60P2cwCcbQPbzxsWXx0fC2dVKXCyck0An1lveYijl4/NI8YrGeBJiUUh8qX5IKBnVkxlZKqJrrKg0MpVWkngxmLuuW3YnQnWR5J5aQzJ9QMTfPymgDa0JoSq9RU7nkgJOQxLGFdksQV7wIawHYu/WBANImAvKs6C3iwzRcR37vKIZYckqC1DIiQldD6QRCsbigLdNi4ch7drtj2D3TCOl12rJPhHLEzCbSCYCxCVjepGFS2xQoucOfFdRFJLzfE3ocT8Fu90yis8wxPecPk/k4MmxC5QlZiE7eMSyuFPT0rNXoqyEGBftov0WxvoGg4V7HHBSxeE0rdyLxAfXLPFqm9RHomII+hRDr1YYk44ok8KiwgYEmI+q7W5JMBrLBw0rN/RI0RsYaRZOIBJSoIFIW5lnnCwcMdbfNdAaZ8MypJG6/sy20M2lMIBhY2Mc1+fBxVI0nmNruo30nSAhyffJLf4BXX/kz1FdvYH3nCLPL83LvmD1Csick+PiGE+R+Mpj7MXpj476lHM2A+/2SJKShui+FQnGEk6z79T45tYZQ1IEtMFpHRkJhNNp9eTBDPR05aHYn9tpyY6mLxAUgX09Yflzsr+BsZx4hK8w6N0IDZvEhFmSxf3Xxy1h2l/Ha/g9V5C+RCeGhh5K4cCmHu/cauP5mCVurVclKQz25suyJoIJl6CCraBygJV11RwYdzabS2m3M0aCkBExLon57Yx8PLzXwv/zRLH54dQbffaskWVagryzAIGsP0YjQqo7c+4l8r4Fs+pwCsvE+e9mHM/kmfvbWbcm6C0L3pgQpDvBXNxv4F3/dQL0XFYonmyA0rz0x5fptrK1XUW+35Hf18eLN6/jdL87jf/zNDH703hCvfdjEOJhTlVKKomXiQDpu4y9eHmFpRlDhbBLv3vG0SK4UdtJOZnkntvMjRUt0+x1Q4seedPJPApXW4Gy/OjJT6cI/LMv3R7E4ncaCIAh2ZlOSGmV3ImliAqjW9ugWNGmVdmFqNJxfo7sOG0r16/xPnZXjktXz2N/ZmsjfWBrE2Os17vd0ysEWhNdpljS4xpcLeCNZQ/NwEzk7KmhHaEOtiXhiCdnZ88jPLCE8NYVAOmp+c5cjXDb7Uo3pRojGPF1gv2GmHGIV+OMnPWOTLrXRyIAs1yAsIhb2Qnlyr0oNH/b7GT3Gp7GF9sVJkqJRbjQekmunjLHgjGZHR8NY7Ob98UmS3r27j7mlImbmphA8bcwVWKLgKV631VOJl4YEJLYuNOpdWScDlXNmPYrBMEw1Cdk3NHQgxZ5iK4mgfbatsGmTozp6Ri3rJxAxUjcsrSiq4d4ictOTYWtyOqnyiBo54mlHk3f5sIbcTErPZ5RFYKJNKdcQcH3GR5L3Q54Pu/5jiQiefPx38cvIv8XLV97AHy1PwxsM1QbNF5KkOKa+vWUkpayTGYtJ5781GRrzGRYw9g1wUFrFobuDTqSpUtjB1CeAsE5Gc6rlKo6PKmoBH5Hoy6HPEYdp5cbs1eSBNYdKHZryDrjG/LLxd5tV3BrdwHQ7hXhUMhddhuk8c1CHXzJO6lQGD84+iFLiNtb3b+Nwt6dIwOeXm7/blIffEbbj6lGtetVRhTFByG0eWFAF+03gIliJRv0oJhPGmIEFVnk4jmyakLWI3o7QpvgR/uEzU/j68w/i/3qphH/9oy2BwX5ZqEkt4nNHkGp5kwHSgUDjrz1s43KxjG/9ZB/lagLPW0PcvruLn16p47CbIFkUNJBRpQhuAPY69bwU/tUPbmOrKsHSfxqlziz++Xdu4fzsKv7hP3gIc6kA/v27I21yXMgK9w918eFdnhTKQs7GcOfoY3OPhgXC85vaG+3ZecoZcPIYdqramqHahK5BX1QtOKFIQSejmyUiUX2MMC6cmkWC9GXAjRjWw0R+3a96/T4tqJ/oMRmfPQWa8NQ12jjaaGDj6Zk31AMWmj2UDrYlKHTUqIQDxLwP424XsUwRI0G8vX5NfiepfxqXP/csft7Z1EZgO0A9c0foKl2gVxDMZVVj3hXkYsnX0R4rINCJBUc+H7FNmY5D7j4qt3YmSrEfmeAa1+aPutG1702CU1OQ0L1mGr2BqWcxKAcY1IVussconolpIySHiLmZqd/PBMFxrHa1haPNY8TCYb3XcUFifr9vYjnmKkpjQ/H0XB5LK9M6gEwLLM4NdiQRMpiN5N88jKJsD2teDF6JrKNBUuftKJzIcgWdyll76o20tYAtEzw17EuSp76WFvo972Nik54GNNaytlePkJ2JmybjkW9ia2fkhWi4EnQlQRKdU2GEll5yr+kUfWnlP8Fh+R62mg0sZiJafyMVpR+k5zNN1tbJPOr9opY36dWT9RagCGJI9nZNTVR5Gk9hTzsQ+OQQVmnvALVmS4+uqV+k7QVyYWvHQ+weM/Y6xsBSbuhQk9sYlV4drcArWHNvozBKYNmbwpnAEgqxaTi5nKxBefuSMLN2EsFBDNdvrWN/vYmFMynU5HUPNlsClGx9IK7O2Ng6Fc8GOQrqaXe6bYY/KV2SiTvy2lkzL6gjIpYpfnIwRrXb86hIpowXtvE//OYSvvDYFH60FserVyXI2GEJqo4e2xPBUNb4tASTy/MdvH+zhko7rb1kL1+TDXCjgb0GGy0FggdT2pSpYwqqFBHGuaUkvnSmgL/8MI6j/ZyEioxE2sv4YPMatr/1FpYkS+fjS/jtF8ZCH+O4cqeJm5LtVhZyWJd7ubrT1CPtk251nYvjQnEnKIIbysmhdXRHg54WbyXYap1E7slY06p8TzqvtlPUZ8omgbOLORX6C0WSSqu18kcXHo2KfqU8XHwfnTaawi1F+HjcbfUsDVjGecicGkWE9vHAhA2IPsoPWUacZdRrIizP2koW1HDE7o/gF2o/t3QRD116BJ2tJgrB8wj1BbWNo0pTRnWhbo0BvGob3lFf2y5YK/HRf0o2l5UXFMLxFMtE0kG/jiD9JE/qV1qXNDRWmxvGY6Vp3qCP9QMbtY7DOoA+X61ZUaxQgkWqENPATSNZuv8EwmZT6hC0IPAj4fk9YQzsheq1hF4LIvLHzAgM71Cr2sTm2oEan6aSjkoW0/3GibGZMyZJOKxBQ/vdqJ/Py5fvSaaignT9erihbSS2UYpgz6NqXU3uMzXjvb4JEhHHoElrMi5EVMb3nZlK4N7VDfRo0qK2YFwaPjVrZZHcoGhLg1Rfa7iW6ojFM4KAG1288OR/j+3d72GWvX2ULRqPNPBaExemkz7Aj2uP6+wlVUG0PuOhPS2fawYQobGxIn73k0NYg4EZXqVxJJsfOT1Vbw9xc7chD1qoVWiszXKuHVK+PJSMKz+FgiCGQaKCt2vbeLH6AZLtEB7vz+LR4UN4ePwsnGEWK/On8XTxPO4Icrn54TG2N+rq7kzzit5gZEwiYOig6aWh4SrVLgOmE8H16eDNdCKHOBEcT+2IvNS1SzbzwDjUhGTRFKPLGLRGOLq6jXPzETz263G8cSGLP/tZEG/vumovFQu58r0uHlke4fBoH9UelSViivw2qrIY2ITJEiWVJnzGcomUdcQV7DOIaeT5JcAFVNnTBBKB/ZkFtPspvHW7jc8+UsK56BB7OyG5f7IJAgl8/60WNo8oixzSOtL4xBTVnZz6eTyUJxAMqxEtEZYGaxrTavDmaFAAg5FP3YEC/pRQ2UO8cDGGlUQX82lXdZNSQiEouGiGZi3T3MhRi6FRJlUHbGsiszNRwqSVmaWTRwFFoScKqDzNY/G9enyEyDiudJpobdBra50rGkljFDEmElRsCMnzOf/Ql7HTf4UGOWi1qhgKCgmMOTMXUbXPsWT6XrksscXQTKL1WCiDSLqgAo/98Fg74buJqqyRWdPgOzFqUOLieqrsoR3/VFeoDXDvmMamIz0Z5HtlwGKvVSqdEErm6MFBT9Yzo4HNGOg7kR0CDrePFeG7E0RFyqXfN1mUtVoLrXrLTB4EjAIJ6dRA7vXhZk2t8OISzJLZuNbJnJSjBxS8p3qAwukQVfG1DIIcGvqlc4t6IGxorbaykKYGJnUqC5NTSEvpHU8ES7tVzK7kFV1Bg5KttVAW7P2TvcJHRwloJnmyEGpbtVcHmJ55BpW91zA17JuT1sBI9eDsiWS4sVvzPpptVQNfzyQ9icLxuSQyEtA579iWZ1quNT65ovsIhv7xgXmkgxKB1yucnhey4aTUUYc1FXcstC6UQD6bFSrXxJX1mt7Qsdo1uVjOATuZfRxZxzgY38Op0kUkrRkMg2NM5+IS8YP6oLfu1RQFUKqWJRpCYZ/fdC0zmKlbLmhgEVQht3x8Fp9fPquutA7rLCq1wTGSkaqDUjGVYmM8tGExNxY7J1C/gWrjHp6eieLBP5zGB7sh/OTDPl4XxNPzgsikeqiXQog5AaXBw5FfZ/c4MP1A0UWlw40wVnfYsC+gJ0v0rktKhu4K0uqOwqalwDZmrX6OCwU9k8H9QkMFWb78/l1tZYjG/bi5FTZWZxSd80yXvdp4We7ETNZ04EedgrzmWE8YA5GYSiPTJLY9lKzfdZHKJPDU+SyeOBfA2aRQwhGf0VmhLY6a4TK7dgYNTSxaaOfJIFdH39Oir1bCuIkms23QUSsHPZ5A0YORTiCuyfgMTrFkSsd0OEhsTZAOay7tZhVBmomGo7LpuhJgG3IvM0jlp9CaXkLl5pYwlyb6sinGB5JQhnIPaZ0OBo+KKebLxmeimeova5DcPd7Hnv8I8VQSUxdZq1s0fbKWN5nj81RZk0iSnflck9d2bfT57AJGoUNpr22pR2AiF5sEWAmqfYPe9ZTUZ1o7uN45JFzIZ409ifdRHVX/Iu+1XWurgivvIZOPT7vU/fJzLVTKVU2yft9YWUE4LKkuaE9O/YxDk279ycwug5Srcx3eiZ+vIqxud6jOR0EiZATvIyxMPFaInCjot7m2j5nlvAZB41Ik99Yea1BnvYxBi72OAZoIu2Y4nq1BhZkEttdlp6QvYtS4I3lXojLLDydtPhx9YoDzTDPuxwGNra0ZYUwJWFkJTMseG6AcrKHj739yAWv/sCoQP6AT6pbQkH2B77cOZSPEZxCOpiSYOEjSB4/HtfUqyvUeFqYzmr129/ZVJyngozGng1jEB8cJw1ns4sB6D9v9K1pLemJxClsC8++sVRQJEO6GQ8bNJhLx68NmXSLoD+HC3DwWcgUsT01hPpnFvFBMaleP6nVBXxIVU1PaAd7dv4nO2BzPE6ayQ9jmRvB7SLCzOjyN1mFNAvAGnilG8Pk/OoWrO2n8qxfLgiSbaPZsxKJxTGeD2KlZiFDbXFDYqeQ+/rvPRfHyVhD/7o0eWkNba0VhCS6JmF+CFV2mg6p35JK2eANY2r8WVG3yvXoQ7237sVZxsFca4CuP9wTRObi5zyJnUOmudd8eWYKcy/dAmD1EPFuQDFYRBOfHwJVN1XO1dnXuXA6ffTCHJ1eEAoaaErwOJbkITRlegJNdRDAhUL1xLJR9rIjTp3OXPoNQPJPRuXm1e1sHgc04k25gCaRjTf9+bZp09XvMpuLMXygkAa3dFboUlc0viCngoNMqI5GekcAYNhRFggKDEGcP00vz2Fm9AS8s6ylqaa0qYGdkUwXhH0DdtoORhGB0CTzdDjpooNNvY3O0jnuBLWSCGRTCD+iJ2cgyRWal86p1NuTtFirZx739ITYPaCRimh4ZGNRiTB4CgxVF9nqSeHji53JtBK1JX66naJIuPPw6kY1uTtuaHHIYes7WHhbxOXNHhEOzCrrd8FaxGM9r4YAwXZBIzwe9gKBNuR+ON3FvNtTb9Lt+FKTc8ckBsavX3WmbmmG4N9R6lzWho54GX6NakiokcO29O3iw3kEobOn4j4qfKm00RrtUQ6U+v6qF8lRTGMGoN1al1nhMkvL4PKyspPn6PUFYEa27BVxS849NDEzymCGG1FgzfbvRkaw7Wb9dLfjHVDvvExnN4f9qkkUIY0OCJrarA7y5NZALc5ASyJ8tXlZ9nb5scHq9ZWJ5xP08Rj5AQoLTdGYJDXl43ISUAk6lwpieCiORCKmeVXFhVhBGTE1Sf/nLn2NLKOGoB21UDWg2slTpgbWY5cICvv7gQ7h05jSSyaRQEtkgpSPY7TasWhn97UOMIwOEy21QM2zAhaZuKH718fNUy0vudofDHx1d4MlYAgnZLNWjI3Qrt3F+voD/+XcSaHQi+GA1htWNGh6Qh3woaNIKRRGOJPG96+toDcr4z76awLPnk/j2K338QmB1UhBUXBBZsxeUhxiTDRiSB0p1AMoiy2aR7JOI2Wj0A/iLn1X0JK7RjWPjKIgnzkfwf7N3pT2SnWf13K3q1q29unqZXmf3eJ3J2AneEhAElEggCB9ASPAxX/kL/Ax+AH8gEnxAAoFksLI5tokmsT0zZtzb9DLdtXTtVXfhOc97azyJAszYxiOL+0YjZ+zuqu5b73veZznPObsDF+PIEaAz4n08IDqKzU6NRLWzgRy8QoDdnQ+0YP36S2t4+WoDVzeKuFAP1a4rkUMWzySFKl2RSGmC7Vv3Ua7L5hkzLSiqByOLzm4u/+mYiVI4qJWVTz0cQz3AWsiQg+XmA7MXWMyeM7BTng9rV6VGDZ3jQxRomjsapPI3oRxaakYFkqZHejOPzto6DhWUa6htbWL/o59hGvUlArwIv7asBM3pgw6irqvzia5cgIP2NrrDQ32/id+DVZLX9vvIVRvGTzIy2ldsGrAswaiIUwzjyRQf7EsKOYwkNTXdNY68EAkqEolXa2XlXo0kY6B6QZykWmOsmZKWIcDQPj3Tzpzjm8OOlBxKQCKlhpZZrHtZkaXvScoFZWgM9SMdlGazk903zgOyPjUzlmu5yEkVZU23z0qpGKndE9KxSCU4zyJyuuS1OMwdeKogS5Isv0cjYXkNehV2Wj2Jdls4t7WgnVxG9DqTknhKrnXnUbU70w4mOY220hJmkhrWsH37CPHSC3K5dORhDzUqi5zUmCUFUG3+JGZmVf+n/4y1fBEdjjngqwIAy8XK04mwlIimROopjqc5vLObE7Bqyq1FjXHZosUmKksX0CzHqDotFGZ38NJWBavNDfzHnX384O0Hkj6VsV6b4eKai2ZNbrdyQekHC4uLWH/2Zdk0Pby1888INn1cr6/LgztDZ2+Agp9XF9yin8Ofvvwavvncs6jkC8oqDlsdubkkYugIUB4fyE0gkQjtuvqSsnZyGJwCp9MeXEkf3CDQD4e5uxqqhsaGyqL6QSgAVyhjSaIB2GvoUzFxto2g4uI7N1bw2zfP4aQX4sWrXfzgpwPsSGp+MK3j794e4qMH9/HX31vH3/zVMv7xnTH+/t/2JNIC2n0f/TCPfiSH041wuTnF1jN5vLTawEcHAf7pIwF4AS3WFMiz6chm3Kjb8syq2O7FSlolYNGwlAEUHaRJttxs5PG1LRd/cf0qrl9+BZuLAuqzFkYnp3JYJMKLVhQ8eIA7ctiO9+7i44OPcePGuqTaEvnkS6Ywzfm42EsFDqGzaEZxwNUUnqYNyhTnIaQMk5sz8rs602gKzuQ4xanyRanW0LEc6o3zMFL3vVBoYNA9QW7pvM6WzkZd+e/7+jOQWd9cP4/2/Ts4be2jnJOU0Z5qtXJqjzCy5NKKR/K1sr8WG/LZBXLIyqhIarsYPsDMFbC3HT2MJhWMNQUkaLAtT6C+szfB3gG5gVHqSZmmdPJ95YWimqGO1V5rqL6NeuwkmiBQswBOQ/CWRN9Is/MkjUKViMqHQf0tSsjIPuIB5tDxeDxFTi4rT54LddnmTPuJRDHjUQh/YorqCq6Rp7JEqbdIqnoaKuCRfKnwGaf0iUlK2qa7+czTbFR/JnKyiHGxIR+zVLN37whL63XlQ/KzZGpLHbKhXBbUWK+dWzQkUjtNax0DjgSdxlIZ7dYQ1eYNxPs/gstnyqib4Kh1g1ibHhoIJkb2iC7dNDDxA4l2JQOb9UZGHWXsPEXiqIBTZ2rj/fuepCJ1VOVwF6vLKFUXJeqooO4c4/W1LrzJMS6ul2GFQ3y408W/3rKxfVJAXz4sdqo25cCWJeyulV2dv6o1V3DW6uInn7yH2+19eb0S1laqWDm3jF/+cEcNBL713HW8ee0anrlwHjEdUFgzeHCEsDcABiYcp9RFt9/V2yPI5fQBT+SButUAOauqOj68LazxTOscPIwhc4nxnBw9kg+bOk45VMsN1POSdslN0dtvwZb0aqVaxB+9XsNrN5vYafm49ZGPn3+4hB/ebuH7f9vGX745xh+/uYzL35NUtDdGW36m379ex/qSh9XGDAtFucUkHdg9nuB04CEnEUahKB+uXADD0NMRFdZPKrLpBl3qjMdKbt0ScF8WkNpczglY1bEml0JDIgx2x+gtNz4R0J5KtJq/Al+ihmTGKKaPkaRng3ZP0vFPdEyFk+XsmNo0+ogM5SNi1KEjSI7h9STGxk3pGZQypqosp8vDmXKHOOYTUSjRNiMpMw39HX0tkkvzfknHsTjqNGhzoH0Jo2EHFdn0nkSlox7NGEL0z1ryOS/Iz1tBoSFR6B5w3N/VFMqX1JYt8TAaoWxX5JZewcLCc/BlXzjlsrmo6G13todJyTgeafoamZSPgMULaCJA9PH9GAOJNqu1goINa4kEHNZ6yvJ5MhOmeB6jC6N/b2gTjKhix+hjkeyZCpUaBdNUBUKJqVRomHHAPdJuHic8+DpUbbB0RGf2UPyP6ggzdi2pVqqTAtFD0UCNbvXv5j0U5FInDEZ6bBTw92IBlj8rU08vF+plZ4ZrLdXRZfRI6sPuvQO8+I1LRgXOmuh+5+9NYrTtxQqsxsaASidmgoj8r/EgVIFBryMAnpSByjU4wztGOYNRJX8fy+ivxsm8Uxia6Q4qscq5Lsg+sUu+RozUT3sqKSFBoCe38U+2h+rc3Fi8oOoDUer4WyrEWPVP8dN399V6/N7xFAcdD+/tORhMy7CLBTy/PsH3v7sEP6alQCigJYDCh+hX8cs7H+O9ez9HtzPB0SdTtGohvn7xGdz85jVsSJpwfm0LY3aOZPNZZBV3O5gcnOg0+ERuutPJSPW4pgKSZQGrghysAmVtikU1geQBYlue4TdF5CiDEum1FpvNPktph+ygMDGKW/Ai1jeKsrkXdPNOZvK7SkRXQgsvVh1849tVTP9gDQdd4Bf/OcCtD3fxL7dOBLQWsHz5Ways9iTKStA6O8A9eW7/sJ3g9kkOO32JuIKGpKG+btqyANRaUMKl5kzey8V3fyvAH8ozvySgXysBdT+GLxEa/QEpT6y1vTOjgeW7RVQk1YuZJgi4Dtsd7XYx0hgLaJ4dHOD4bKSAxG4fAUgdXyZnqRqmSRG4MzSaIqeIkwNp2sxDxkNHhjhTL9axwn7LcLa4WcPQzGRrV04uNUnRenu7KsI47LX1QI8HQ9kjZzpAzWFrSv2cdY8lxSxqHbGxcRX+3ic4OjzAwfBU+UM1r4bAoUnJAkq8GFc2kF8sqUqGqqgygpSIdxKdqDOyxbGbqQHWmIohkgnc3hvi6DjUTiUbGUbk2EgFk+XNkRamZkPZT5T7VoJu6gEYpQVrHrjBYKANhCSNfhRA+JzSjiQ13rVQbuRKDSBJFMT0a6Z6zdDOMefwwlR6hu48aqrBFD9yTKDjGCkcQ8UwDuAKnozm6NitAn/y/yUqn3GWKeH0Qag0ItXiZ+QnAEQ375OjFroSJQVV47Dk2FPTwaTemV9Ar9tXOWYd2WF4RiUKN9G/q6VY3Uf7pItK8wJ6oz6q0weIXDudTzVmxFrHio1rech5R5bv87RZW5JLK1CwH/S6TyfC4od36zCP2F9RYmeuXJUopijhpYBHfIZ2e4a35LLrj87JARig8+6BRF0LKMhh5xDm9ctF/MlrEs7TNLNnoblxyaQR0QBH8nB/dOsdCftLEmGUMTgL8eeXfg83b9xEZXnZjLHIg+yduth79z2Mtw8QyGbJywd6LM9wd9DHWA5gXW6XpapELeWK1mY46+UL4PgErIKvTj+J48GlGBT99aIkLR2kdl6J+QA097K16GB89XgoWbvzfUl9tzRyGwtADjt0qG5h1bOw8kyMNy7W5eYsy83fxs/evYe1qy/IJshrXWil6mPzhRq+w0HkiDIrppbixaQzzNTq3JXIg/TOXE5uPeovkRQp4DrrS5QQuvJsaij5m2jUimApk2lXNBoIiJ8JmHGcYqzsb96CoJHHcKShOYeXVYjTmsrvVdEay4wFQkcZhUqRINNb5yrZucrlUyazObicGyTfgdEJ1UdN7cIxN+rcVYYRmjxASkF7tEKyjTkGddxZRJ9M+uqfSLFBVXd1BVCnI/VVLDfXsLhxBSezHrzGUDvEndmZ3PA+lgN56zzlrwWURhP5vUhJMOzzAZUAqkb10gwah2nkDOXQ3Tv0NF3zaUzheUr05I9eKsslVAu0yzwcTzRiUbZ2ZIjJqpCgRq+Oyq6wu81mk44p2elsIoz+VWSnTf5UN4yXO8scOgpkmy4261wq+xMZMIxtQ8SM1LwiVBdu1gTj1OiC6ei8o67jWLEBN/5dZwsJcqExnEhSAPHSGiTfqyQZBSOsTltAqVw3BFqlSFjojzuS2VRUj557m+KChjHDAfBYydcT6sw7hmpBnTWndkUAboyyQ7qCq9SauW0ebDOzON8TVHX167I32kV1H8/lil8uYD3UwrI5fpPHqqRktfqKHkS96TjVP+jJTSmb0l1ENRhhIc88voSY/02+7+Z54M9+p4J8MpEUK0J9ZRVDZ0E3LcI8zq82ceNkF7c7+1q/+dbqNWxtXUVQr6l2TCIf1kTSG2qQn3v+eezLgzq4swMnyOMXcli5AZsVH82ip9bb+WodebLlSXfI5Y2ukWuIlAnnquTfW+OckUjWLk2q3GKlA7TUxLYNGU4Lp+wc2aGG1vZ0BldemyMphYpsBhYZIyPaZgt4JIMTxCNXgG0FUb+H80s+riyVUjmSrpkBY2RK1QDlmeZVRiRSQMirYSokPXTygc74cc7RKrkmCmLUw0Mpm20k0V40mqoJCP8eKfvd0bYzKP+Tt9TGvSNvY5U4hiNAUi1LtCnRLq2Oor4heVLzvCCpFsHKob08zUAK6eGbR5v0PzQa6V5Q16+xOA9FGoflmv0hr4UJZ9x8VOsLGMqtrDLEEqF4kiZqZzA/0e+d9gREZP+EIcmxTQ1AVi5cw253W9n4lNQZkKQ5drQdP6Ez9rCPcDRG0h0Y1xuJFAb2CewFzwhfp8xv6pdx7m/vlO42AXLuEH6pIJFy3rT45UtrzYoAqzFuYMSjfU9BdAK5SwoNCckcFPcd9DpjBQOCnpszQ8SWFuQNqBielMSNefUF0oOukSg7d+y4kuAcG7mX6dTUB03PO9FoSUGLF2eSzpyRmR+Zi4KokCiXzACOlbq9MSMwF4mps5Hvpax0FtzIwpdUl65AZ60eljbriiwk3/LnJsv+TM4rAYblGDrmJCmfTut0ki6SejEcTLWA3z7sYuXiOXQnl+Qy/hh5O206YE7mNkqSbKZFcgnbHMeSYzs7GksUOJrT2L4cwHoUrJgCXNlYxEhuY276gA4lrHOw5mNFytHySgFeuxxgIgd190GI1cUy3ny+hhtXCvAdVg7zWJfIyi6f06Hbafc+3n7/A7zxtefxygs30f9xhFcql+RrLgsoFDE6O0PS76e3jHGG8SS1PP/qq1i89pzqasVHuxgcPUBNDjfla3KVIoqLTS2mJhEeKmcqZYgdndTVwfIiM3NGtYfEhLi62fipscDoWhpqJ6pMmmraMw2gQad2hOQQk5DHWS/H6EXRdaa6sITVNWMX1e91NAXjfCVscwup4gFHGXJzKzHvoeeg0nrMEFxac4jSiG+mEwU6P0aJZS3WhvoeWgQnsLAlw2Fp14xPqImJAIwj0WXVXUCxsSBRsURmQVlnAu2E/nyB/ix+UEkJoMaEwM2XDTmU72WlJhax0SrP+WUdaFaVVs4VumZIWqcNdMxGIpjFFSQnx0ZkLhqi6FdUG4ncIkZvBC1GfTTezVnG26dQaaCxtIV+f1/S76H8Xp783GVUi2uwynlM4rHsK4laHnTNzKeA8WS1jZLb1B47a3RhYorHgo24f+yp1hRZ7I1mWes6qlIrFyAjkFzRU6Bk8dvLm8iSIyjUm+eB5Xypm3P1gqDxAv03KTDIQ25S6ViBXPIknecj4BmwstUv080xH4yVWhC5SaqXlWgERAQ0Fm2xPlOWVuwobQfCRDbcBiRoa5qXTknqGIxjCv+MsJyYaqBOOhAfp5dVrCoOxWIgz3Kgly25iwRG1bBzPe32qcSxSoTPTAE9Trt//Cjz8vtQWZRO4Z6jXd5Ss4ZRZ1O+7756QFqPQInWybQ+SPf2MsbFtjqxWymX7akB1u++saluu299GEnILvc4tb/Zri9FkuN2sbkwwrMbFdRKW3jz6wXQXCNnjfTGoIRu9dwFrF69gW7nFCd338OdwyP8+/s/RlB28cZLL+DbN17FUuO8RANFZdlORpJ2tVsKEF7AkfypCuq51B6vliRdKGB5YxVHn+ygv70Np1rVcZ98tajkRwKMduG1kBqn+lZGn4gPkjIYOl2iJhipOiVv4VQXO3bM18eWuUkspflTUdUwwSmba6XyJBYjMCV1fjq+EEgUlsy1OSzrVwbdTb3MbNiHs29x+h5xnDqzmH+HlLWtf1d3klRPJzbT+kkapiNw9XsdeUa0c+8NKD8jKSAVIxcasOUzoPaVcW83jHgCtCdAyxSGOvy2qroaZQYSLqPEzChqu52RFiNWATSad+hr6K1uGzE7AQPOOfqlmqR1ko6OJ1obIq2D7XGmQgRov1hX8iq1r2YCRA7DE/mzeu4y7m53ENE5AjPDw5LLkSM5jIRISYnksId5tuIlsixZOvtJtp6TcsJc+QB2DuXtYk8PaIGE37Kv/CP+HpV6CUEgkbe8Bl1qaL7gKKcp1tTWocKna9yi+YfdOoKUzvC56f6xjFuRkdUOTV3MS8UOPaOKYJjOlrLe3fmpm6Zjw3PGvLwnqQ45TjS4j2yOyLiZx6mdJsGGFxbB2Dh3GS12yuXEiaeUF0ZQfL6M2gieRck4VOV0wtc3jQZVro1D/RnJvZtIysbmgC/niFs+jAyDXYev84nW0IIFH+37XZy7KlG3fG4DScuL8alh/c/3dDLXk8zJZSQAv1SQs9PWz2YSfr6iuwQTSfI4X3h4eIijo6OHYNVoNLCysoJsZStb2fo8i9hycHDweLXzzzJHSHJmBlbZyla2vohlsorHipueDLD4ovV6HWtra9lTzla2svWFrEfd5L8wwGKOTLDa2NjInnC2spWtLxy0Hmc9UdGdw5H7+/tPhIjZytb/pwNnWdb/+cH9797jN33vk3ztZ3nPz/us+KfXe3wnnccCrOPjY+zs7HxqUR/HvxLKZStb2crWk64542DeyHus7/nfuoQEq7t37z5k7T6KkBlYZStb2fo8gPUoaM3//pkBaw5WZrzA+ULDwmxlK1vZmoPU44DV/whYvw5Wj4uA2cpWtrL1WYDrM6eEvwmsHk0Js5WtbGXrqQDbrwNWBlbZyla2vhKAlYFVtrKVra8EYGVgla1sZesrAVgZWGUrW9n6Kix7DlaKXk/YYsxWtrKVrS9z/ZcAAwCzJEj3Op6p1AAAAABJRU5ErkJggg==";
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
		_animationTransitionBetweenScenesFunc(_selectFunc, 0, 1, null, true);
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
				
				*/
				_information.currentNameHero = heroes_arr[0];
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
		window.open("https://dl-girls.com/content/folder_1750442048" + "?utm_source=" + window.location.href + "&utm_medium=game_referral|game&utm_content=simple&utm_campaign=" + _TITLE, "_self");
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