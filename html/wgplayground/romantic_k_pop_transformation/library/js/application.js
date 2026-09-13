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
	var _TITLE = "Romantic K-Pop Transformation";
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
						type:"dressup",
						frame:2,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:null,
						pathSubject:null,
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:_openLocFunc_2_2,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:1
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
						firstVar:3
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
						openLocFunc:_openLocFunc_2_8,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:1
					}
				}
			},
			location_9:{
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
						openLocFunc:_openLocFunc_1_9,
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
						closeLocFunc:_closeLocFunc_2_9,
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
						frames:[1, 2, 3, 4, 5, 6, 7, 8, 9]
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
					dress_0:{rewarded:false},
					dress_1:{rewarded:false},
					dress_2:{rewarded:false},
					dress_3:{rewarded:false},
					dress_4:{rewarded:false},
					dress_5:{rewarded:false},
					dress_6:{rewarded:false},
					dress_7:{rewarded:false},
					bag_0:{rewarded:false},
					bag_1:{rewarded:false},
					bag_2:{rewarded:false},
					bag_3:{rewarded:false},
					bag_4:{rewarded:false},
					bag_5:{rewarded:false},
					bag_6:{rewarded:false},
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
					dress:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					bag:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					bg:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1}
				}
			},
			hero_2:{
				currentSet:"set_1",
				totalSets:{
					set_1:{
						currentIndex:0,
						frames:[1, 2, 3, 4, 5, 6, 7, 8, 9]
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
					dress_0:{rewarded:false},
					dress_1:{rewarded:false},
					dress_2:{rewarded:false},
					dress_3:{rewarded:false},
					dress_4:{rewarded:false},
					dress_5:{rewarded:false},
					dress_6:{rewarded:false},
					dress_7:{rewarded:false},
					bag_0:{rewarded:false},
					bag_1:{rewarded:false},
					bag_2:{rewarded:false},
					bag_3:{rewarded:false},
					bag_4:{rewarded:false},
					bag_5:{rewarded:false},
					bag_6:{rewarded:false},
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
					dress:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					bag:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					bg:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1}
				}
			},
			hero_3:{
				currentSet:"set_1",
				totalSets:{
					set_1:{
						currentIndex:0,
						frames:[1, 2, 3, 4, 5, 6, 7, 8, 9]
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
					dress_0:{rewarded:false},
					dress_1:{rewarded:false},
					dress_2:{rewarded:false},
					dress_3:{rewarded:false},
					dress_4:{rewarded:false},
					dress_5:{rewarded:false},
					dress_6:{rewarded:false},
					dress_7:{rewarded:false},
					bag_0:{rewarded:false},
					bag_1:{rewarded:false},
					bag_2:{rewarded:false},
					bag_3:{rewarded:false},
					bag_4:{rewarded:false},
					bag_5:{rewarded:false},
					bag_6:{rewarded:false},
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
					dress:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					bag:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
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
		logo_img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozMkNGOTMxNEE2MzJGMDExQUVGRkIxNjJENEQxMDk1NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEMTNEQURBMzA3OUExMUYxODQ0RUEyMTRDQzBCRTIwMiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEMTNEQURBMjA3OUExMUYxODQ0RUEyMTRDQzBCRTIwMiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1MTkyMkE5ODk5MDdGMTExQjg3RDg2QzMzOTY2MjU0NiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozMkNGOTMxNEE2MzJGMDExQUVGRkIxNjJENEQxMDk1NiIvPiA8L3JkZjpEZXNjcmlwdGlv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";
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
		//var filter_obj = new createjs.ColorMatrixFilter([0.30, 0.30, 0.30, 0, 0, 0.30, 0.30, 0.30, 0, 0, 0.30, 0.30, 0.30, 0, 0, 0, 0, 0, 1, 0]);
		var filter_obj = new createjs.ColorMatrixFilter([0.39, 0.77, 0.19, 0, 0, 0.35, 0.68, 0.17, 0, 0, 0.27, 0.53, 0.13, 0, 0, 0, 0, 0, 1, 0]);
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
	function _openLocFunc_2_2()
	{
		_information.currentNameHero = "hero_1";
		_information.heroes[_information.currentNameHero].currentSet = "set_3";
	}
	function _openLocFunc_1_3()
	{
		_information.currentNameHero = "hero_1";
		_information.heroes[_information.currentNameHero].currentSet = "set_4";
	}
	function _closeLocFunc_2_3()
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
	function _openLocFunc_2_5()
	{
		_information.currentNameHero = "hero_2";
		_information.heroes[_information.currentNameHero].currentSet = "set_3";
	}
	function _openLocFunc_1_6()
	{
		_information.currentNameHero = "hero_2";
		_information.heroes[_information.currentNameHero].currentSet = "set_4";
	}
	function _closeLocFunc_2_6()
	{
		_addAdsFunc();
	}
	function _openLocFunc_1_7()
	{
		_information.currentNameHero = "hero_3";
		_information.heroes[_information.currentNameHero].currentSet = "set_1";
	}
	function _openLocFunc_1_8()
	{
		_information.currentNameHero = "hero_3";
		_information.heroes[_information.currentNameHero].currentSet = "set_2";
	}
	function _openLocFunc_2_8()
	{
		_information.currentNameHero = "hero_3";
		_information.heroes[_information.currentNameHero].currentSet = "set_3";
	}
	function _openLocFunc_1_9()
	{
		_information.currentNameHero = "hero_3";
		_information.heroes[_information.currentNameHero].currentSet = "set_4";
	}
	function _closeLocFunc_2_9()
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