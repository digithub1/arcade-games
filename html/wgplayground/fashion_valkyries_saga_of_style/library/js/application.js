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
	var _TITLE = "Fashion Valkyries Saga of Style";
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
						type:"dressup",
						frame:3,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:null,
						pathSubject:null,
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:_openLocFunc_3_5,
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
						closeLocFunc:_closeLocFunc_4_5,
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
						frames:[1, 2, 3]
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
						frames:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
					},
					set_6:{
						currentIndex:0,
						frames:[1, 2, 3, 4, 5, 6]
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
					necklace_0:{rewarded:false},
					necklace_1:{rewarded:false},
					necklace_2:{rewarded:false},
					necklace_3:{rewarded:false},
					necklace_4:{rewarded:false},
					necklace_5:{rewarded:false},
					necklace_6:{rewarded:false},
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
					headdress_0:{rewarded:false},
					headdress_1:{rewarded:false},
					headdress_2:{rewarded:false},
					headdress_3:{rewarded:false},
					headdress_4:{rewarded:false},
					headdress_5:{rewarded:false},
					headdress_6:{rewarded:false},
					animal_0:{rewarded:false},
					animal_1:{rewarded:false},
					animal_2:{rewarded:false},
					animal_3:{rewarded:false},
					animal_4:{rewarded:false},
					animal_5:{rewarded:false},
					animal_6:{rewarded:false},
					bg_0:{rewarded:false},
					bg_1:{rewarded:false}
				},
				currentDress:{
					makeup:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					hair:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					earrings:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					necklace:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					dress:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					headdress:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					animal:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					bg:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1}
				}
			},
			hero_2:{
				currentSet:"set_1",
				totalSets:{
					set_1:{
						currentIndex:0,
						frames:[1, 2, 3]
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
						frames:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
					},
					set_6:{
						currentIndex:0,
						frames:[1, 2, 3, 4, 5, 6]
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
					necklace_0:{rewarded:false},
					necklace_1:{rewarded:false},
					necklace_2:{rewarded:false},
					necklace_3:{rewarded:false},
					necklace_4:{rewarded:false},
					necklace_5:{rewarded:false},
					necklace_6:{rewarded:false},
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
					headdress_0:{rewarded:false},
					headdress_1:{rewarded:false},
					headdress_2:{rewarded:false},
					headdress_3:{rewarded:false},
					headdress_4:{rewarded:false},
					headdress_5:{rewarded:false},
					headdress_6:{rewarded:false},
					animal_0:{rewarded:false},
					animal_1:{rewarded:false},
					animal_2:{rewarded:false},
					animal_3:{rewarded:false},
					animal_4:{rewarded:false},
					animal_5:{rewarded:false},
					animal_6:{rewarded:false},
					bg_0:{rewarded:false},
					bg_1:{rewarded:false}
				},
				currentDress:{
					makeup:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					hair:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					earrings:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					necklace:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					dress:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					headdress:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					animal:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
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
		logo_img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWgAAAFoCAYAAAB65WHVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozMkNGOTMxNEE2MzJGMDExQUVGRkIxNjJENEQxMDk1NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEN0RFNzg0NTI4N0IxMUYxOTc2M0Q5NEZFNUMxMkI3NSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEN0RFNzg0NDI4N0IxMUYxOTc2M0Q5NEZFNUMxMkI3NSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozRTU3RTI4NTc5MjhGMTExQjZBRDgwODgxQUIyOTFENyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozMkNGOTMxNEE2MzJGMDExQUVGRkIxNjJENEQxMDk1NiIvPiA8L3JkZjpEZXNjcmlwdGlv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";
		var logo_bitmap = new createjs.Bitmap(logo_img);
		_currentMainScreen_mc.logo_mc.addChild(logo_bitmap);
		logo_bitmap.x = -180;
		logo_bitmap.y = -180;
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
		loadQueue.loadFile({id:"money_sound", src:"library/sounds/money_sound.ogg"});
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
									if(propObject == "animal")
									{
										if(hero_mc.animalSecond)
										{
											/*
											
											*/
											hero_mc.animalSecond.gotoAndStop(frame_num - 1);
											/*
											
											*/
											_updateBodyFunc(hero_mc.animalSecond, _information.heroes[propHero].currentDress[propObject].currentColor, _information.heroes[propHero].currentDress[propObject].currentTexture, _information.heroes[propHero].currentDress[propObject].currentAlphaTexture);
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
		window.open("https://dl-girls.com/content/folder_1773677016" + "?utm_source=" + window.location.href + "&utm_medium=game_referral|game&utm_content=simple&utm_campaign=" + _TITLE, "_self");
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
	function _openLocFunc_3_5()
	{
		_information.currentNameHero = "hero_1";
		_information.heroes[_information.currentNameHero].currentSet = "set_6";
	}
	function _closeLocFunc_4_5()
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