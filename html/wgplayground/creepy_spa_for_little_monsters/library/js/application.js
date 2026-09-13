/*
* @author edapskov
* @copyright 2019 edapskov v 9.003
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
	var _TITLE = "Creepy Spa for Little Monsters";
	var _LINKTOGAME = "https://dl-girls.com";
	var _DELAY = 1;
	/*
	публичные переменные
	*/
	this.copyright = "© DL-Studio, v 9.003";
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
						type:"click",
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
						type:"click",
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
						type:"click",
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
						type:"rub",
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
						type:"click",
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
						type:"click",
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
						type:"move",
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
						pathSubject:"subject_17",
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
					action_18:{
						type:"rub",
						frame:18,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_18",
						pathSubject:"subject_18",
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
					action_19:{
						type:"click",
						frame:19,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_19",
						pathSubject:"subject_19",
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:null,
						closeLocFunc:_closeLocFunc_19_1,
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
						firstVar:3
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
						closeLocFunc:_closeLocFunc_3_3,
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
						type:"click",
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
						type:"click",
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
						type:"click",
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
						type:"rub",
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
						type:"click",
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
						type:"click",
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
						type:"move",
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
						pathSubject:"subject_17",
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
					action_18:{
						type:"rub",
						frame:18,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_18",
						pathSubject:"subject_18",
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
					action_19:{
						type:"click",
						frame:19,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:"object_19",
						pathSubject:"subject_19",
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:null,
						closeLocFunc:_closeLocFunc_19_4,
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
						pathSubject:null,
						delay:0,
						transition:false,
						skipAndGoto:null,
						openLocFunc:null,
						closeLocFunc:_closeLocFunc_3_6,
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
						frames:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
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
						frames:[1, 2, 3, 4, 5, 6, 7, 8]
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
					dress_0:{rewarded:false},
					dress_1:{rewarded:false},
					dress_2:{rewarded:false},
					dress_3:{rewarded:false},
					dress_4:{rewarded:false},
					dress_5:{rewarded:false},
					dress_6:{rewarded:false},
					dress_7:{rewarded:false},
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
					bg_0:{rewarded:false},
					bg_1:{rewarded:false}
				},
				currentDress:{
					makeup:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					eyes:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					hair:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					dress:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					earrings:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					glasses:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
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
						frames:[1, 2, 3, 4, 5, 6]
					},
					set_4:{
						currentIndex:0,
						frames:[1, 2, 3, 4, 5, 6, 7, 8]
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
					dress_0:{rewarded:false},
					dress_1:{rewarded:false},
					dress_2:{rewarded:false},
					dress_3:{rewarded:false},
					dress_4:{rewarded:false},
					dress_5:{rewarded:false},
					dress_6:{rewarded:false},
					dress_7:{rewarded:false},
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
					bg_0:{rewarded:false},
					bg_1:{rewarded:false}
				},
				currentDress:{
					makeup:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					eyes:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					hair:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					dress:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					earrings:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					glasses:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
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
	this.toggleSoundFunc = function(sound_bool)
	{
		if(sound_bool === undefined)
		{
			sound_bool = false;
		}
		else
		{
			sound_bool = !Boolean(sound_bool);
		}
		_soundManager.setInvisibleFunc(sound_bool);
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
		logo_img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozMkNGOTMxNEE2MzJGMDExQUVGRkIxNjJENEQxMDk1NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxMTkyOTc0OUExOEYxMUYxQUIxMDg3NjdDRTZGQjFBQiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxMTkyOTc0OEExOEYxMUYxQUIxMDg3NjdDRTZGQjFBQiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5MzVCNzQ4MjRBQTFGMTExODVEQkI0MEZGQzgwRjFBOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozMkNGOTMxNEE2MzJGMDExQUVGRkIxNjJENEQxMDk1NiIvPiA8L3JkZjpEZXNjcmlwdGlv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";
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
									обновляем опции, вложенные внутрь контейнера dress
									*/
									/*
									if(propObject == "dress")
									{
										_updateEmbeddedOptionFunc(hero_mc.dress, propHero, "accessory");
									}
									*/
								}
							}
						}
					}
				}
			}
		}
	}
	function _updateEmbeddedOptionFunc(container_mc, hero_str, option_str)
	{
		/*
		
		*/
		var option_mc = null;
		var frame_num = Number(container_mc.currentFrame + 1);
		var newOption_str = String(option_str + "_" + frame_num);
		/*
		
		*/
		if(container_mc[option_str])
		{
			option_mc = container_mc[option_str];
		}
		else
		{
			if(container_mc[newOption_str])
			{
				option_mc = container_mc[newOption_str];
			}
		}
		/*
		
		*/
		if(option_mc !== null)
		{
			/*
			
			*/
			option_mc.gotoAndStop(0);
			/*
			
			*/
			frame_num = _information.heroes[hero_str].currentDress[option_str].currentOption;
			if(frame_num <= 0)
			{
				frame_num = option_mc.totalFrames;
			}
			/*
			
			*/
			option_mc.gotoAndStop(frame_num - 1);
			/*
			
			*/
			_updateBodyFunc(option_mc, _information.heroes[hero_str].currentDress[option_str].currentColor, _information.heroes[hero_str].currentDress[option_str].currentTexture, _information.heroes[hero_str].currentDress[option_str].currentAlphaTexture);
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
		window.open("https://dl-girls.com/content/folder_1783527535" + "?utm_source=" + window.location.href + "&utm_medium=game_referral|game&utm_content=simple&utm_campaign=" + _TITLE, "_self");
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
		
	}
	function _closeLocFunc_19_1()
	{
		_addAdsFunc();
	}
	function _openLocFunc_1_2()
	{
		_information.currentNameHero = "hero_1";
		_information.heroes[_information.currentNameHero].currentSet = "set_1";
	}
	function _openLocFunc_2_2()
	{
		_information.currentNameHero = "hero_1";
		_information.heroes[_information.currentNameHero].currentSet = "set_2";
	}
	function _openLocFunc_1_3()
	{
		_information.currentNameHero = "hero_1";
		_information.heroes[_information.currentNameHero].currentSet = "set_3";
	}
	function _openLocFunc_2_3()
	{
		_information.currentNameHero = "hero_1";
		_information.heroes[_information.currentNameHero].currentSet = "set_4";
	}
	function _closeLocFunc_3_3()
	{
		_addAdsFunc();
	}
	function _openLocFunc_1_4()
	{
		
	}
	function _closeLocFunc_19_4()
	{
		_addAdsFunc();
	}
	function _openLocFunc_1_5()
	{
		_information.currentNameHero = "hero_2";
		_information.heroes[_information.currentNameHero].currentSet = "set_1";
	}
	function _openLocFunc_2_5()
	{
		_information.currentNameHero = "hero_2";
		_information.heroes[_information.currentNameHero].currentSet = "set_2";
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
	function _closeLocFunc_3_6()
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