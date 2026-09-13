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
	var _TITLE = "Sailor Chic vs Pirate Charm";
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
						firstVar:1
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
						firstVar:1
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
						frames:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
					},
					set_2:{
						currentIndex:0,
						frames:[1, 2, 3, 4, 5, 6, 7, 8, 9]
					},
					set_3:{
						currentIndex:0,
						frames:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
					},
					set_4:{
						currentIndex:0,
						frames:[1, 2, 3, 4]
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
					eyes_0:{rewarded:false},
					eyes_1:{rewarded:false},
					eyes_2:{rewarded:false},
					eyes_3:{rewarded:false},
					eyes_4:{rewarded:false},
					eyes_5:{rewarded:false},
					eyes_6:{rewarded:false},
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
					faceart_0:{rewarded:false},
					faceart_1:{rewarded:false},
					faceart_2:{rewarded:false},
					faceart_3:{rewarded:false},
					faceart_4:{rewarded:false},
					faceart_5:{rewarded:false},
					faceart_6:{rewarded:false},
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
					glasses_0:{rewarded:false},
					glasses_1:{rewarded:false},
					glasses_2:{rewarded:false},
					glasses_3:{rewarded:false},
					glasses_4:{rewarded:false},
					glasses_5:{rewarded:false},
					glasses_6:{rewarded:false},
					glasses_7:{rewarded:false},
					glasses_8:{rewarded:false},
					glasses_9:{rewarded:false},
					dress_0:{rewarded:false},
					dress_1:{rewarded:false},
					dress_2:{rewarded:false},
					dress_3:{rewarded:false},
					dress_4:{rewarded:false},
					dress_5:{rewarded:false},
					dress_6:{rewarded:false},
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
					accessory_0:{rewarded:false},
					accessory_1:{rewarded:false},
					accessory_2:{rewarded:false},
					accessory_3:{rewarded:false},
					accessory_4:{rewarded:false},
					accessory_5:{rewarded:false},
					accessory_6:{rewarded:false},
					accessory_7:{rewarded:false},
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
					lips:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					eyes:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					shadows:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					eyebrows:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					faceart:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					hair:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					earrings:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					glasses:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					dress:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					top:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					bottom:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					accessory:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
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
						frames:[1, 2, 3, 4, 5, 6, 7, 8, 9]
					},
					set_3:{
						currentIndex:0,
						frames:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
					},
					set_4:{
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
					eyes_0:{rewarded:false},
					eyes_1:{rewarded:false},
					eyes_2:{rewarded:false},
					eyes_3:{rewarded:false},
					eyes_4:{rewarded:false},
					eyes_5:{rewarded:false},
					eyes_6:{rewarded:false},
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
					faceart_0:{rewarded:false},
					faceart_1:{rewarded:false},
					faceart_2:{rewarded:false},
					faceart_3:{rewarded:false},
					faceart_4:{rewarded:false},
					faceart_5:{rewarded:false},
					faceart_6:{rewarded:false},
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
					glasses_0:{rewarded:false},
					glasses_1:{rewarded:false},
					glasses_2:{rewarded:false},
					glasses_3:{rewarded:false},
					glasses_4:{rewarded:false},
					glasses_5:{rewarded:false},
					glasses_6:{rewarded:false},
					glasses_7:{rewarded:false},
					glasses_8:{rewarded:false},
					glasses_9:{rewarded:false},
					dress_0:{rewarded:false},
					dress_1:{rewarded:false},
					dress_2:{rewarded:false},
					dress_3:{rewarded:false},
					dress_4:{rewarded:false},
					dress_5:{rewarded:false},
					dress_6:{rewarded:false},
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
					accessory_0:{rewarded:false},
					accessory_1:{rewarded:false},
					accessory_2:{rewarded:false},
					accessory_3:{rewarded:false},
					accessory_4:{rewarded:false},
					accessory_5:{rewarded:false},
					accessory_6:{rewarded:false},
					accessory_7:{rewarded:false},
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
					lips:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					eyes:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					shadows:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					eyebrows:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					faceart:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					hair:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					earrings:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					glasses:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					dress:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					top:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					bottom:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					accessory:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
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
		logo_img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozMkNGOTMxNEE2MzJGMDExQUVGRkIxNjJENEQxMDk1NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBQjA3QjIyRDNGQUQxMUYwOTBFOUI2QzUxRUM5MzE2OSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBQjA3QjIyQzNGQUQxMUYwOTBFOUI2QzUxRUM5MzE2OSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyMkU5NTA5MEEzM0ZGMDExOTU1NEM0QTgyRTVFNUVDMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozMkNGOTMxNEE2MzJGMDExQUVGRkIxNjJENEQxMDk1NiIvPiA8L3JkZjpEZXNjcmlwdGlv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";
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
		window.open("https://dl-girls.com/content/folder_1746815824" + "?utm_source=" + window.location.href + "&utm_medium=game_referral|game&utm_content=simple&utm_campaign=" + _TITLE, "_self");
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
		_information.heroes[_information.currentNameHero].currentSet = "set_3";
	}
	function _openLocFunc_2_5()
	{
		_information.currentNameHero = "hero_1";
		_information.heroes[_information.currentNameHero].currentSet = "set_4";
	}
	function _closeLocFunc_3_5()
	{
		_addAdsFunc();
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