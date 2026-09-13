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
	var _TITLE = "Moon League Sports Season";
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
						type:"dressup",
						frame:2,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:null,
						pathSubject:null,
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:_openLocFunc_2_1,
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
						openLocFunc:_openLocFunc_2_7,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:1
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
						frames:[1, 2, 3, 4, 5, 6]
					},
					set_2:{
						currentIndex:0,
						frames:[1, 2, 3]
					},
					set_3:{
						currentIndex:0,
						frames:[1, 2, 3, 4, 5, 6]
					},
					set_4:{
						currentIndex:0,
						frames:[1, 2, 3, 4]
					},
					set_5:{
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
					dress_0:{rewarded:false},
					dress_1:{rewarded:false},
					dress_2:{rewarded:false},
					dress_3:{rewarded:false},
					dress_4:{rewarded:false},
					dress_5:{rewarded:false},
					dress_6:{rewarded:false},
					headdress_0:{rewarded:false},
					headdress_1:{rewarded:false},
					headdress_2:{rewarded:false},
					headdress_3:{rewarded:false},
					headdress_4:{rewarded:false},
					headdress_5:{rewarded:false},
					headdress_6:{rewarded:false},
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
						frames:[1, 2, 3, 4, 5, 6]
					},
					set_3:{
						currentIndex:0,
						frames:[1, 2, 3, 4, 5, 6]
					},
					set_4:{
						currentIndex:0,
						frames:[1, 2, 3, 4]
					},
					set_5:{
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
					dress_0:{rewarded:false},
					dress_1:{rewarded:false},
					dress_2:{rewarded:false},
					dress_3:{rewarded:false},
					dress_4:{rewarded:false},
					dress_5:{rewarded:false},
					dress_6:{rewarded:false},
					headdress_0:{rewarded:false},
					headdress_1:{rewarded:false},
					headdress_2:{rewarded:false},
					headdress_3:{rewarded:false},
					headdress_4:{rewarded:false},
					headdress_5:{rewarded:false},
					headdress_6:{rewarded:false},
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
					headdress:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					accessory:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					bg:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1}
				}
			},
			hero_3:{
				currentSet:"set_1",
				totalSets:{
					set_1:{
						currentIndex:0,
						frames:[1, 2, 3, 4, 5, 6]
					},
					set_2:{
						currentIndex:0,
						frames:[1, 2, 3]
					},
					set_3:{
						currentIndex:0,
						frames:[1, 2, 3, 4, 5, 6]
					},
					set_4:{
						currentIndex:0,
						frames:[1, 2, 3, 4, 5]
					},
					set_5:{
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
					dress_0:{rewarded:false},
					dress_1:{rewarded:false},
					dress_2:{rewarded:false},
					dress_3:{rewarded:false},
					dress_4:{rewarded:false},
					dress_5:{rewarded:false},
					dress_6:{rewarded:false},
					headdress_0:{rewarded:false},
					headdress_1:{rewarded:false},
					headdress_2:{rewarded:false},
					headdress_3:{rewarded:false},
					headdress_4:{rewarded:false},
					headdress_5:{rewarded:false},
					headdress_6:{rewarded:false},
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
		logo_img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozMkNGOTMxNEE2MzJGMDExQUVGRkIxNjJENEQxMDk1NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyOEQ0QTkzNzRERjgxMUYxOUQ2NTk0RjcxQjZEQkZCOSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyOEQ0QTkzNjRERjgxMUYxOUQ2NTk0RjcxQjZEQkZCOSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozMjM4NzQ1OUYwNERGMTExQUI4QkRFNTBGNTU0QzUwNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozMkNGOTMxNEE2MzJGMDExQUVGRkIxNjJENEQxMDk1NiIvPiA8L3JkZjpEZXNjcmlwdGlv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";
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
		window.open("https://dl-girls.com/content/folder_1777049629" + "?utm_source=" + window.location.href + "&utm_medium=game_referral|game&utm_content=simple&utm_campaign=" + _TITLE, "_self");
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
	function _openLocFunc_2_1()
	{
		_information.currentNameHero = "hero_1";
		_information.heroes[_information.currentNameHero].currentSet = "set_2";
	}
	function _openLocFunc_1_2()
	{
		_information.currentNameHero = "hero_1";
		_information.heroes[_information.currentNameHero].currentSet = "set_3";
	}
	function _openLocFunc_2_2()
	{
		_information.currentNameHero = "hero_1";
		_information.heroes[_information.currentNameHero].currentSet = "set_4";
	}
	function _openLocFunc_1_3()
	{
		_information.currentNameHero = "hero_1";
		_information.heroes[_information.currentNameHero].currentSet = "set_5";
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
	function _openLocFunc_2_4()
	{
		_information.currentNameHero = "hero_2";
		_information.heroes[_information.currentNameHero].currentSet = "set_2";
	}
	function _openLocFunc_1_5()
	{
		_information.currentNameHero = "hero_2";
		_information.heroes[_information.currentNameHero].currentSet = "set_3";
	}
	function _openLocFunc_2_5()
	{
		_information.currentNameHero = "hero_2";
		_information.heroes[_information.currentNameHero].currentSet = "set_4";
	}
	function _openLocFunc_1_6()
	{
		_information.currentNameHero = "hero_2";
		_information.heroes[_information.currentNameHero].currentSet = "set_5";
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
	function _openLocFunc_2_7()
	{
		_information.currentNameHero = "hero_3";
		_information.heroes[_information.currentNameHero].currentSet = "set_2";
	}
	function _openLocFunc_1_8()
	{
		_information.currentNameHero = "hero_3";
		_information.heroes[_information.currentNameHero].currentSet = "set_3";
	}
	function _openLocFunc_2_8()
	{
		_information.currentNameHero = "hero_3";
		_information.heroes[_information.currentNameHero].currentSet = "set_4";
	}
	function _openLocFunc_1_9()
	{
		_information.currentNameHero = "hero_3";
		_information.heroes[_information.currentNameHero].currentSet = "set_5";
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