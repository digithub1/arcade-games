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
	var _TITLE = "Celebrity Face Dance";
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
						type:"move",
						frame:1,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_1",
						pathSubject:"subject_1",
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
					},
					action_2:{
						type:"click",
						frame:2,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_2",
						pathSubject:"subject_2",
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:null,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:0
					},
					action_3:{
						type:"move",
						frame:3,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_3",
						pathSubject:"subject_3",
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:null,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:0
					},
					action_4:{
						type:"move",
						frame:4,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_4",
						pathSubject:"subject_4",
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:null,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:0
					},
					action_5:{
						type:"click",
						frame:5,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_5",
						pathSubject:"subject_5",
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:null,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:0
					},
					action_6:{
						type:"move",
						frame:6,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_6",
						pathSubject:"subject_6",
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:null,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:0
					},
					action_7:{
						type:"move",
						frame:7,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_7",
						pathSubject:"subject_7",
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:null,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:0
					},
					action_8:{
						type:"move",
						frame:8,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_8",
						pathSubject:"subject_8",
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:null,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:0
					},
					action_9:{
						type:"move",
						frame:9,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_9",
						pathSubject:"subject_9",
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:null,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:0
					},
					action_10:{
						type:"click",
						frame:10,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_10",
						pathSubject:"subject_10",
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:null,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:0
					},
					action_11:{
						type:"move",
						frame:11,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_11",
						pathSubject:"subject_11",
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:null,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:0
					},
					action_12:{
						type:"move",
						frame:12,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_12",
						pathSubject:"subject_12",
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:null,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:0
					},
					action_13:{
						type:"click",
						frame:13,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_13",
						pathSubject:"subject_13",
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:null,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:0
					},
					action_14:{
						type:"rub",
						frame:14,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_14",
						pathSubject:"subject_14",
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:null,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:0
					},
					action_15:{
						type:"click",
						frame:15,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_15",
						pathSubject:null,
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:null,
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
						type:"move",
						frame:1,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_1",
						pathSubject:"subject_1",
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
					},
					action_2:{
						type:"move",
						frame:2,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_2",
						pathSubject:"subject_2",
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:null,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:0
					},
					action_3:{
						type:"move",
						frame:3,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_3",
						pathSubject:"subject_3",
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:null,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:0
					},
					action_4:{
						type:"move",
						frame:4,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_4",
						pathSubject:"subject_4",
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:null,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:0
					},
					action_5:{
						type:"move",
						frame:5,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_5",
						pathSubject:"subject_5",
						delay:2.0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:null,
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
					},
					action_3:{
						type:"click",
						frame:3,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_3",
						pathSubject:"hero_1",
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:_openLocFunc_3_3,
						closeLocFunc:_closeLocFunc_3_3,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:0
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
						openLocFunc:_openLocFunc_4_3,
						closeLocFunc:_closeLocFunc_4_3,
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
						type:"move",
						frame:1,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_1",
						pathSubject:"subject_1",
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
						pathSubject:"subject_2",
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:null,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:0
					},
					action_3:{
						type:"move",
						frame:3,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_3",
						pathSubject:"subject_3",
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:null,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:0
					},
					action_4:{
						type:"move",
						frame:4,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_4",
						pathSubject:"subject_4",
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:null,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:0
					},
					action_5:{
						type:"click",
						frame:5,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_5",
						pathSubject:"subject_5",
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:null,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:0
					},
					action_6:{
						type:"move",
						frame:6,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_6",
						pathSubject:"subject_6",
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:null,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:0
					},
					action_7:{
						type:"move",
						frame:7,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_7",
						pathSubject:"subject_7",
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:null,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:0
					},
					action_8:{
						type:"move",
						frame:8,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_8",
						pathSubject:"subject_8",
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:null,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:0
					},
					action_9:{
						type:"move",
						frame:9,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_9",
						pathSubject:"subject_9",
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:null,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:0
					},
					action_10:{
						type:"move",
						frame:10,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_10",
						pathSubject:"subject_10",
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:null,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:0
					},
					action_11:{
						type:"move",
						frame:11,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_11",
						pathSubject:"subject_11",
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:null,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:0
					},
					action_12:{
						type:"click",
						frame:12,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_12",
						pathSubject:"subject_12",
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:null,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:0
					},
					action_13:{
						type:"move",
						frame:13,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_13",
						pathSubject:"subject_13",
						delay:2.0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:null,
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
						type:"move",
						frame:1,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_1",
						pathSubject:"subject_1",
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
					},
					action_2:{
						type:"move",
						frame:2,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_2",
						pathSubject:"subject_2",
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:null,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:0
					},
					action_3:{
						type:"move",
						frame:3,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_3",
						pathSubject:"subject_3",
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:null,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:0
					},
					action_4:{
						type:"move",
						frame:4,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_4",
						pathSubject:"subject_4",
						delay:2.0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:null,
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
					},
					action_3:{
						type:"click",
						frame:3,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_3",
						pathSubject:"hero_2",
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:_openLocFunc_3_6,
						closeLocFunc:_closeLocFunc_3_6,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:0
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
						openLocFunc:_openLocFunc_4_6,
						closeLocFunc:_closeLocFunc_4_6,
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
						type:"move",
						frame:1,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_1",
						pathSubject:"subject_1",
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:_openLocFunc_1_7,
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
						pathSubject:"subject_2",
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:null,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:0
					},
					action_3:{
						type:"move",
						frame:3,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_3",
						pathSubject:"subject_3",
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:null,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:0
					},
					action_4:{
						type:"move",
						frame:4,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_4",
						pathSubject:"subject_4",
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:null,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:0
					},
					action_5:{
						type:"click",
						frame:5,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_5",
						pathSubject:"subject_5",
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:null,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:0
					},
					action_6:{
						type:"move",
						frame:6,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_6",
						pathSubject:"subject_6",
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:null,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:0
					},
					action_7:{
						type:"move",
						frame:7,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_7",
						pathSubject:"subject_7",
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:null,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:0
					},
					action_8:{
						type:"move",
						frame:8,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_8",
						pathSubject:"subject_8",
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:null,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:0
					},
					action_9:{
						type:"move",
						frame:9,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_9",
						pathSubject:"subject_9",
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:null,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:0
					},
					action_10:{
						type:"move",
						frame:10,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_10",
						pathSubject:"subject_10",
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:null,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:0
					},
					action_11:{
						type:"move",
						frame:11,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_11",
						pathSubject:"subject_11",
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:null,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:0
					},
					action_12:{
						type:"click",
						frame:12,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_12",
						pathSubject:"subject_12",
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:null,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:0
					},
					action_13:{
						type:"move",
						frame:13,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_13",
						pathSubject:"subject_13",
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:null,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:0
					},
					action_14:{
						type:"move",
						frame:14,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_14",
						pathSubject:"subject_14",
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:null,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:0
					},
					action_15:{
						type:"click",
						frame:15,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_15",
						pathSubject:"subject_15",
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:null,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:0
					},
					action_16:{
						type:"rub",
						frame:16,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_16",
						pathSubject:"subject_16",
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:null,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:0
					},
					action_17:{
						type:"click",
						frame:17,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_17",
						pathSubject:null,
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:null,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:0
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
						type:"move",
						frame:1,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_1",
						pathSubject:"subject_1",
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:_openLocFunc_1_8,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:0
					},
					action_2:{
						type:"move",
						frame:2,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_2",
						pathSubject:"subject_2",
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:null,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:0
					},
					action_3:{
						type:"move",
						frame:3,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_3",
						pathSubject:"subject_3",
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:null,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:0
					},
					action_4:{
						type:"move",
						frame:4,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_4",
						pathSubject:"subject_4",
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:null,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:0
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
						openLocFunc:_openLocFunc_2_9,
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
						pathSubject:"hero_3",
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:_openLocFunc_3_9,
						closeLocFunc:_closeLocFunc_3_9,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						firstVar:0
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
						openLocFunc:_openLocFunc_4_9,
						closeLocFunc:_closeLocFunc_4_9,
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
						frames:[1, 2, 3, 4, 5, 6, 7]
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
					hair_8:{rewarded:false},
					hair_9:{rewarded:false},
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
					accessory_7:{rewarded:false},
					accessory_8:{rewarded:false},
					accessory_9:{rewarded:false},
					beads_0:{rewarded:false},
					beads_1:{rewarded:false},
					beads_2:{rewarded:false},
					beads_3:{rewarded:false},
					beads_4:{rewarded:false},
					beads_5:{rewarded:false},
					beads_6:{rewarded:false},
					beads_7:{rewarded:false},
					beads_8:{rewarded:false},
					beads_9:{rewarded:false},
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
					bg_0:{rewarded:false},
					bg_1:{rewarded:false}
				},
				currentDress:{
					hair:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					dress:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					accessory:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					beads:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					earrings:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
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
						frames:[1, 2, 3, 4, 5]
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
					hair_8:{rewarded:false},
					hair_9:{rewarded:false},
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
					accessory_7:{rewarded:false},
					accessory_8:{rewarded:false},
					accessory_9:{rewarded:false},
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
					bg_0:{rewarded:false},
					bg_1:{rewarded:false}
				},
				currentDress:{
					hair:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					dress:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					accessory:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					earrings:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
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
						frames:[1, 2, 3, 4, 5]
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
					hair_8:{rewarded:false},
					hair_9:{rewarded:false},
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
					accessory_7:{rewarded:false},
					accessory_8:{rewarded:false},
					accessory_9:{rewarded:false},
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
					bg_0:{rewarded:false},
					bg_1:{rewarded:false}
				},
				currentDress:{
					hair:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					dress:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					accessory:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					earrings:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
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
		logo_img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozMkNGOTMxNEE2MzJGMDExQUVGRkIxNjJENEQxMDk1NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxM0IwMDQ5RDMzOTYxMUYxQTVBQjhENzlCNTA2QzUzRSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxM0IwMDQ5QzMzOTYxMUYxQTVBQjhENzlCNTA2QzUzRSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDNjgzMUJEMzkzMzNGMTExOTU3MkRGODIzQjQzRDVCQSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozMkNGOTMxNEE2MzJGMDExQUVGRkIxNjJENEQxMDk1NiIvPiA8L3JkZjpEZXNjcmlwdGlv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";
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
		loadQueue.loadFile({id:"dance_sound", src:"library/sounds/dance_sound.ogg"});
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
		createjs.Tween.get(_currentMainScreen_mc.indicator_mc).wait(0).to({alpha:0.01, scaleX:0.04, scaleY:0.04, visible:false}, _DELAY * 1000, createjs.Ease.cubicInOut);
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
			if(_skippedLocationsFunc() == 8)
			{
				_addAdsFunc();
			}
			if(_skippedLocationsFunc() == 6)
			{
				_addAdsFunc();
			}
			if(_skippedLocationsFunc() == 4)
			{
				_addAdsFunc();
			}
			if(_skippedLocationsFunc() == 2)
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
		window.open("https://dl-girls.com/content/folder_1707755825" + "?utm_source=" + window.location.href + "&utm_medium=game_referral|game&utm_content=simple&utm_campaign=" + _TITLE, "_self");
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
		
	}
	function _openLocFunc_1_2()
	{
		
	}
	function _openLocFunc_1_3()
	{
		_information.currentNameHero = "hero_1";
		_information.heroes[_information.currentNameHero].currentSet = "set_1";
	}
	function _openLocFunc_2_3()
	{
		_information.currentNameHero = "hero_1";
		_information.heroes[_information.currentNameHero].currentSet = "set_2";
	}
	function _openLocFunc_3_3()
	{
		_updateHeroesFunc(_currentMainScreen_mc.body_mc, true);
	}
	function _closeLocFunc_3_3()
	{
		_soundManager.removeAllSoundExceptNameFunc(["dance_sound"]);
		_soundManager.addSoundFunc("dance_sound", 0, 0, -1, 0.4, 0);
	}
	function _openLocFunc_4_3()
	{
		_updateHeroesFunc(_currentMainScreen_mc.body_mc, true);
	}
	function _closeLocFunc_4_3()
	{
		_soundManager.removeAllSoundExceptNameFunc(["background_sound"]);
		_soundManager.addSoundFunc("background_sound", 0, 0, -1, 0.2, 0);
	}
	function _openLocFunc_1_4()
	{
		
	}
	function _openLocFunc_1_5()
	{
		
	}
	function _openLocFunc_1_6()
	{
		_information.currentNameHero = "hero_2";
		_information.heroes[_information.currentNameHero].currentSet = "set_1";
	}
	function _openLocFunc_2_6()
	{
		_information.currentNameHero = "hero_2";
		_information.heroes[_information.currentNameHero].currentSet = "set_2";
	}
	function _openLocFunc_3_6()
	{
		_updateHeroesFunc(_currentMainScreen_mc.body_mc, true);
	}
	function _closeLocFunc_3_6()
	{
		_soundManager.removeAllSoundExceptNameFunc(["dance_sound"]);
		_soundManager.addSoundFunc("dance_sound", 0, 0, -1, 0.4, 0);
	}
	function _openLocFunc_4_6()
	{
		_updateHeroesFunc(_currentMainScreen_mc.body_mc, true);
	}
	function _closeLocFunc_4_6()
	{
		_soundManager.removeAllSoundExceptNameFunc(["background_sound"]);
		_soundManager.addSoundFunc("background_sound", 0, 0, -1, 0.2, 0);
	}
	function _openLocFunc_1_7()
	{
		
	}
	function _openLocFunc_1_8()
	{
		
	}
	function _openLocFunc_1_9()
	{
		_information.currentNameHero = "hero_3";
		_information.heroes[_information.currentNameHero].currentSet = "set_1";
	}
	function _openLocFunc_2_9()
	{
		_information.currentNameHero = "hero_3";
		_information.heroes[_information.currentNameHero].currentSet = "set_2";
	}
	function _openLocFunc_3_9()
	{
		_updateHeroesFunc(_currentMainScreen_mc.body_mc, true);
	}
	function _closeLocFunc_3_9()
	{
		_soundManager.removeAllSoundExceptNameFunc(["dance_sound"]);
		_soundManager.addSoundFunc("dance_sound", 0, 0, -1, 0.4, 0);
	}
	function _openLocFunc_4_9()
	{
		_updateHeroesFunc(_currentMainScreen_mc.body_mc, true);
	}
	function _closeLocFunc_4_9()
	{
		_soundManager.removeAllSoundExceptNameFunc(["background_sound"]);
		_soundManager.addSoundFunc("background_sound", 0, 0, -1, 0.2, 0);
	}
	/*
	ссылки
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