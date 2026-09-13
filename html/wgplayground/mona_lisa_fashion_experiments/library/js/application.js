/*
* @author edapskov
* @copyright 2019 edapskov v 8.017
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
	var _TITLE = "Mona Lisa Fashion Experiments";
	var _LINKTOGAME = "https://dl-girls.com";
	var _DELAY = 1;
	var _LANGUAGE = "en";
	/*
	публичные переменные
	*/
	this.copyright = "© DL-Studio, v 8.017";
	/*
	приватные переменные
	*/
	var _stage;
	var _main;
	var _before;
	var _cursor;
	var _shadowScreen;
	var _orientationLock;
	var _debugger;
	var _soundManager;
	var _fullScreenCanvasManager;
	var _information = {
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
			}
		},
		heroes:
		{
			hero_1:{
				currentSet:"set_1",
				totalSets:{
					set_1:{
						currentIndex:0,
						frames:[1, 2, 3, 4]
					},
					set_2:{
						currentIndex:0,
						frames:[1, 2, 3, 4]
					},
					set_3:{
						currentIndex:0,
						frames:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
					},
					set_4:{
						currentIndex:0,
						frames:[1, 2, 3, 4, 5, 6, 7, 8, 9]
					}
				},
				totalDress:{
					blush_0:{rewarded:false},
					blush_1:{rewarded:false},
					blush_2:{rewarded:false},
					blush_3:{rewarded:false},
					blush_4:{rewarded:false},
					blush_5:{rewarded:false},
					blush_6:{rewarded:false},
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
					eyebrows_0:{rewarded:false},
					eyebrows_1:{rewarded:false},
					eyebrows_2:{rewarded:false},
					eyebrows_3:{rewarded:false},
					eyebrows_4:{rewarded:false},
					eyebrows_5:{rewarded:false},
					eyebrows_6:{rewarded:false},
					eyebrows_7:{rewarded:false},
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
					dress_10:{rewarded:false},
					dress_11:{rewarded:false},
					dress_12:{rewarded:false},
					dress_13:{rewarded:false},
					dress_14:{rewarded:false},
					dress_15:{rewarded:false},
					necklace_0:{rewarded:false},
					necklace_1:{rewarded:false},
					necklace_2:{rewarded:false},
					necklace_3:{rewarded:false},
					necklace_4:{rewarded:false},
					necklace_5:{rewarded:false},
					necklace_6:{rewarded:false},
					necklace_7:{rewarded:false},
					earrings_0:{rewarded:false},
					earrings_1:{rewarded:false},
					earrings_2:{rewarded:false},
					earrings_3:{rewarded:false},
					earrings_4:{rewarded:false},
					earrings_5:{rewarded:false},
					earrings_6:{rewarded:false},
					earrings_7:{rewarded:false},
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
					accessory_10:{rewarded:false},
					bg_0:{rewarded:false},
					bg_1:{rewarded:false}
				},
				currentDress:{
					blush:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					lips:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					shadows:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					eyebrows:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					hair:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					dress:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					necklace:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					earrings:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
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
		
		*/
		_cursor = new createjs.Container();
		container.addChild(_cursor);
		_cursorUpdateFunc();
		/*
		
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
		контейнер для вывода сообщения о запрете поворота экрана
		*/
		_orientationLock = new createjs.Container();
		container.addChild(_orientationLock);
		/*
		
		*/
		_debugger = new Edapskov_Debugger();
		_debugger.initFunc(container, _CWIDTH, _CHEIGHT);
		/*
		
		*/
		window.addEventListener("keydown", _onKeyPressFunc, false);
		window.addEventListener("resize", _onResizeWindowFunc, false);
		window.addEventListener("orientationchange", _onResizeWindowFunc, false);
		_onResizeWindowFunc();
		/*
		понакупают айфончиков...
		*/
		_initOrientationChangeIphoneFunc();
		/*
		
		*/
		_animationTransitionBetweenScenesFunc(_preloaderFunc);
	}
	/*
	
	*/
	this.stopAppFunc = function()
	{
		_stopAppFunc();
	}
	this.playAppFunc = function()
	{
		_playAppFunc();
	}
	this.addSoundFunc = function(nameSound_str, initVolume_num)
	{
		if(initVolume_num === undefined)
		{
			initVolume_num = 1;
		}
		_soundManager.addSoundFunc(nameSound_str, 0, 0, 0, initVolume_num, 0);
	}
	/*
	
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
		костыль, ограничивающий масштабирование в Firefox
		*/
		/*
		var userAgent_str = navigator.userAgent.toLowerCase();
		if(userAgent_str.indexOf("firefox") >= 0)
		{
			if(scale_num > 1)
			{
				scale_num = 1;
			}
		}
		*/
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
		logo_img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWgAAAFoCAYAAAB65WHVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozNkRERDc2ODJBOTFFRTExQTFDMEQ4MDEzQUJCMkI5NSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBM0JDQzNFMjkyNTUxMUVGQjE0OUE1QkRCNUI1N0NBRiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBM0JDQzNFMTkyNTUxMUVGQjE0OUE1QkRCNUI1N0NBRiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGRjkwRTkwNjUyOTJFRjExODZFNzk0Njg4MzE4NDgwOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozNkRERDc2ODJBOTFFRTExQTFDMEQ4MDEzQUJCMkI5NSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pu4KKK8AAc47SURBVHja7L1plCTXeSV2Y8t9ra27qvdu9AKgGyBAbFxAUqIsaiRxtIwojWhZmmNbsuVFOvb88bGP/cPn+Hg5/iX/GB/JY0uiqBE50nhGnJElDSWK4gIQ3AAQINBo9FrdXXtW7hl7+Pu+9yIzu9FVDVDkoJd4QHRV5RIZGVl134377nc/I0kSZCMb2chGNu68YWanIBvZyEY2MoDORjaykY1sZACdjWxkIxsZQGcjG9nIRjYygM5GNrKRjQygs5GNbGQjG3fAsH9QO3Z/43PZ2c3G32UYu2w8kqmv09vN+zCnnoOp58S7PC8b2XjHo/BbH797ADob2XgHV3G8Wfr3cfqrNXWfeRPYJlNAG98EuNPgPL2lz4v046OpLbzpa7rPbGTj3mPQ2cjGbUYKxA6TD9qKtJX097zl9H32FGDfDLTTIDsN0ilAW1Ovkz4v1iCcbgFtPm0eX/jRNtKbp2+fBuxsZCMD6Gzc02w5Bcy8BuQqbXXamrQ1aKvRVtaAnb8JqFPAxRQgh1MgmgJpyp7tmwAeUyzZnwJmBuQBbX3aurS19deevn2kgTx9nWxkIwPobNyTbLmoAZhBeYa2edr20LaXtgXaZjVQV25i07kpJmxMsedgCjzDKQadvmYK8NMAHUwBcwrODMjbtG3Stq63Df3z9hRY+xlQZyMD6GzcK4w5BcmSZsfNKVBeou0gbYf0tl8D87s1GLRXaFu+abtO2xptW7R1MqDORgbQ2bibR6r/OlPAPEfbIm37NCgfpu2o3ubukOPO6+M6rMH3Am3naDtP20XarmgA39IyyHAKqDONOhsZQGfjrpEzWJqoahljSTPkB2g7MbWZd/jfRnqcDMyv0fYGbW/qn69p+YMZdapRM5vOLHvZyAA6G3esnJEu/jW1jHFQA/PDtJ2m7eRd+N4O6u1B2l6h7XUN1pc0o25BadQuMtkjGxlAZ+MOZM2pnMGLf6wxs558TIPaGdrecw/8vqVAfZy2l2l7dYpRs0bNi4kse3jIZI9sZACdjXd5pFozs2Ze3GMHBmvMrCuf0oyZgXnuHnvfDNBHoGSb70DJH6xTX4VyfrA+PS17ZCMb9ydA36q8cmmunn2yP+Bx4ZN/kEoaBc2a92jAYmB+hLbHtbTxjocqB0zgxT4G4Qh9+Bglvvzs0sYPsGHCMk0UzTxm7RrKdoEoa4gkNFAwHaKuCSFjjC4R2rXRBtzEo5nERMHI0XNKmLUqqNoVWIYJwzBgvKUa/G397TwBtaB4QAM1Sx+8sHhtSvbgRcRo7p/+w/tem+4PBnfcMd3pkRQZg87G9wLO05IGa81LGoyZMb+Xtqeg/M7vaIRJjCAJsBps4Vy0iWvJNlrxAD2/L8AcJgTAcQzECWyTIJW4acVwMF9owEkcRImJfY09KNL3QRygFbSx6q+hG/QQRAGMOEIUhsjRc0pmGQ2zjn32HA6W9+KgTc9zirAN652CNV8d/IienJb0zwzUl7Xswf5qd/M/+qOQQDqTPLKRAXQ2fuDgnNOSxpxmj6e0lPGkBul3xJZ9AtMVAtM3/OtEP7dwNWkR7fTB/TLDMEYYBAgJYKMolq9hENL3xI8JcA16TM5eRTGfR2OmgUuDTfhugCCk+wnwDSuR/dC3iBjbiWGHkYc4GtL9G7Sdg7Ph4EBhHqdL+/Fw8RAOVRZRtHLvFKiPa3lnQU9aNT1JXdeSx5BAOiCQziSPbLztYfygmsa+00uH4v/x97+n17nV8WcSxw8UnFlvrmpJ47AGZL7Ufx9UNeDbBOYEvcjFJWK4Lw7exBvRBgZmgMQ0YRA7Toglx8R2AwLjICJApq9+4BMw820BRu5IAFoYNQGpaaugOyMxYDs5FIolFPIFOI4jMJvQY33ahyfPdWUf9BKyiueYNoG8TY/NoZ4v4Ux5H54qH8fD1YOoOaXvRf7gBcSv0/aiZtOsTbN3mkvJ/fsVpO9EiYPlrbc7Rv/ln+56f5Zml407AZxrGohZ0mCt+RnanoXSot/eHyqx1wvBZfzN1pt4eXiJfgstWASQNgOqwQw3QuATEBOQ+r4vDNoPA3ieR4ya2XEgYB1HKhvJNi3+SyMQJ8CmvzeH2HREE7dBt5sEuvzVo/15Lu/DVYBP6BxFiTDxwAgxJBC2bB8ugXiP7n/JW8HDgyV8sPyAAHXFKb8TmObzwgumzBTK+tykf2t9YtJ+xqSzkQF0Nr5f4GzfBM58Oc+LgO/X4Py2xpAY85uDK/jq4A18rXcZfsQyRkyg7MAipmsyOBNrZlD2PV8A2SdA9b0Arq/Zc0QAzaBNwMrPjQloLWLcJrNuAlzDMpF4BLaWSxvvl9h0wYGTc5Ts4fF+QM+PBZwZqBnceQtpvwHdNqTXGxby+EYpxMveKh4dLuJD1ZM4Wd6Pmv22pXWWO37sJoBmjGddupeBdDYygM7G94s55zQ4c6n2CQ3OH9Syxm1HGEe44q0TY/4mXhheQDfUGjGBZLGYRy6fg207UumSEFDmiQE7ubx8DYKCsF975MIlsMZoJFp0Qs9nkGWJg0G64FjI5yy4ofK1mcTITQLlhHYaxwEs2q9DTN20DNqfR/vyEBPLjkUhYxGDpRV6nmnCt0Jh2iMC83KpjK8HV3DWXcF7Bwfx/spxPFBeQtF6WxcMrNN/TE9u00FPyEA6GxlAZ+P7LWswOLNL40NQTo3bjlbQxdfWv40v9F/FlaAHN4h44YAA2USxVESpXCaGW0SBQDrPLNqyEBOGRQS8zKIHgwGB+VBwjQFVwJkBlVlzTGzZiGET6M7VCpifqWF5Y4BBaAgz9lxXXit28qJH82RgO6JIw9/0RfIYJ/wnhsgjomQTUpsmgT2//nCESqkEt1rB30Tn8SoB9ZPDw/hg7RQOFhfEpnebwQ/4YSi/+HRHGP7azUA6GxlAZ+PvCs6L3ws4f7d7Ef+29TVizZfhxYYwXoZDx7GJNRdQKBZRqVRRKhUUuyWwCwmYQ2LMI9fDoD/EiAByNBxgSMzZ9V14ga8X+BIlaxAzLtD+apUiFheaGEUWBqs9sdOZKBALJ2CmCcC2TIFEZuaNRgPuiPXtcMyiBaTjRHcBiGSCYLcIyy2uO0LfHaJKx+qWImz5r+Cyu4YP1R7Ce2pHUbPLb+d0fHiKQRs3MWkvA+lsZACdjXcqa1Qx0ZwZnJ99O+DMtrmvdb6DvyBwPj/oSEAFuyikHYrtiFsinyP2XGT2nCPwtMRO54cMhh4BMssLnoBs6AcElwqMudDENk1EhmLT4uBg6YKeX62UMb9nL9qeiavrPVmdZ4cP2/AMg58PYd+dTg9d2lzXh0XPS7RMAs2kFYNW7iD+L4oVmw+6EXw6NpcYf7VWw0vJFta957E8WsWzs4/iYGHh7ZzaZ3Fjn8TxumMG0tnIADob7xSc2UrHbo1Uc376ds/vhX18futr+ML2t7EWRHClx0kkoBcTLvFCoGnasGzFaEcjnwDZkwXBITFVBmqb2HQxR8BNDJsdG73BUBYPDbHgmSKPJIGSJLia0MlZqNWrmF1YwNq2izwxapFAlDCCmDVvZsfsi2YY5vvoMTaDsBkqB0gUa7Tkx02JEALyQq9lwVIcJb6HoFZHWC2j2zuLtaiHH208jgerB2AZ1u1O0QdxYxPbJAPpbGQAnY23A86MaVwhyItbCxqcH8PbXBDcDtr43Orn8Tft19GJLXhhhFQ/YPmCpQ32JTM7dVmy8HzxMsehAsdKqYCFhRmxybHNrtvvo0vg3On2MBgOxL3B3ugkifQ+DeQsEyVi4aVSEZVqBfPzc5htrKI38gSQmY3zw52cidhQ+jU7OkTaiBVL1v/DZOtdkmhvvTZJC6QrJs7AHtE+WRdnoObJI6rW8PV4Gb1ohB+PH8WjtZPImc7tTtUHsEN38kyTzkYG0Nm4FTgb+veBy7fZw8thQOznfb8GlF3HmreFz238Nb7UPotuZIotLtHgnHNy4tSwLFtrzNomxy9IbLheq2Hv3Cxq1arc1ukNsL69ja3WNrqdLgE5MesoJCLOWySQ6RBYsq7MMwoXmZRKJeQLrGnTVwLgDgE7a8ysJlQrOZTLZUnnYEseTwouATfb9kKaRCKx7DFkJlriSMawyYuQXPyiMDuB4uWJWP+6dIxxQBNGo4rXzC2429/AAD6erj6MopW/3Sl7P97amZy/Z006ycrCs5EBdDamB1+bs3eM+wFy+TbnN3MRykduD86b+FfX/wxf7lxCN7EFnBlMTbrcZ8bMRSiM1e5wJFY5vs+yHdQJkBeX9mJp7wJKxbzowtvtHvr0OK7NZnbMDo1ECleYbceIYgXQhLQoMPATwJv8vSwE0uuJOySPXFf8dQLW7IMuFpm9lwisiyjmiUGzTU9XKiok1iXhmJI3UmrNDNpQZjyN1CKv8CQzGPYE+JlJv0lvMoi/IcD/vsYZlKzbeqZ54ku7iqdbGlPqZ7+S2cgAOhs3e5058IdD9Z/Q0sau4/poE59Z/jf4Vv88PDuPiC792aPMpmJmzGxZE31Z+5gZXIvFAgFlCQcP7sfS4iIKOVu8yVEYEHjayDs1elQVg0YNaxsFbBDAd7sd+JLJEcriIQMlc9kCAXuegJqrCVnbzuXywtgd9lUTuPNr2fR8xlteTLQInHkB0SMGHCWRICEfG2vVbDJJbsZm+leEkVQGMfR9IpGAjpszQvoY0T5smoxW6f5L+TWsH+jhY3ufwky+ertTyAuHXAPNyXdcCs4xpX4WrpSNDKCzMa07Ty8KcvARa867+sc23Q4+ffEv8LXuWZjEYFl+iFhXluI8WwpUhuzKYLkh8AiwTVkAZOZZKVfQrNXo8SN0R2x1iwQZ8wTQrFezj5klknIhjy4BOD8vEnnDJGbtSJodW/McxxQQNmgyYA812/dq9Yr4rX3aeFGRbXnM4ukQxUHCHudoJhHbnx/E8lrM0AWFCXWTRGWFTJNpRaTpsUSdWftWGQ6JVC8G9D6ZiScE0nzM63EHK63P0yQAfPzgU5gtVG935cKLrxuYZEkzYHsq4ikbGUDfYyNrCveOfwdYd+begYe0tPGkZtI7jpbXxR9d+Ut8a/A67HwePoEdg7HHhSgEgEYSEjC7wiyZNbP8wNoug+x8rYrmTAOuz+AdCHDnCjYsYcEQ25svZd4e/ZyIxswsmD3JKXhygUi+4Ehxi6pEtKV6sECAXqmU0e4MRTIJ2K4XqTU3R5h0Is6PnGMLw2fZhOUOttIx27dM5Q6JY0MWGeX1EozlD1VeDl1eruSVRFeLjxcU6X1u+V384YW/RYmuKj68eBp7io3dTienAnLoFDemTVtoDRzLCbNfz+yP854bBdPKPtm3MV77h7+XFqNwqA+3qHpQSxuP7Pa8fjjCnyx/Ac+1X0JCoMdsdUhgyCBtEBAzIx30exJsxODLgCjRnwRkC/PzOHBgv6Bep91GsZAjBlxCgUHYUjY6zoVmKSGR/OZIbHoWPZn1ZSNRVj3LSq1xBgo5R2x1UZiIMySk42GHBcsmzMYFNhPWsWnCMKHkD3qd2Zk6bMdCq9XG1nYHw5EnNr9E6xyGrlhk9DWiRMSOWBY3EwH0WI7TED+1Mk+LsgNJlCYQv9LfwGcvfFnY9gf2PIil0sxup5XPPbfQuqBBurP6j/7AX/y9/yBj0RlA31vDNIzsk73NePUXflcMEFra4EpBLkZhS90zuz0viEP8xfXn8KXtb8In8HK56o8DiJhVEvCxbNDv9WQBTgCVF9MIZBkoZ+fnsHfPXpUi549EomA62u8M4BKjzROLTmShjcCPHh9EbJMbYjhUtrZEADGRXI0cyxvCXhMBTV54dF1egIRkfFSKBdGoFesmIKfHhLoCMbBCYb6WaaPZbIh7ZKY5ixZNGNu09boDeATw4t2OFD2WohcWWPhKABCAZqavcqljAWlm5DyUxGMIy3+tcxX/8tLzKFgO6ouPoOzsmOHBchK3CuOQJQ77547hokdnv60ZQGfj/vzs2WYwq6WNNNd51xSgr6y/jD/f+CqGBNRDYqwjP1Cxnrm8ZGcMBz0BLIeYqWjSkZIUmrNNzC/MwxRgtcSznGPbXRTAzuUkl4OrCnnpj3ODO7woSCDOzDnH1jgC+zyx7CRSDLpSyqNcKtCmQpVYCzYJROf2zOE4vd6Vi8u4dPEqut2huCqYyafFeyyZ5PIqpKlQKsHJ034qRUnCK9D7KOe72O50JDc6NGLxPsdpPbjBxr2xKk2AbQvT56sFZti8UGloNs2XAQzsL29fwrGNvThWW8TJ+r7d8juO68+C+xty6l1/5Vc+Fe393V/KfNEZQGfjPmLPqWuDpQ3Wmjln4z0aHHYc321fwr9Z+xJaQQ/9AMKeWfc1rJwUnjDTVeXXUJV/9B8v7nGGxdzcHIqFgnzfqDdQyNtin+MFw3whL9oxa7fuYIh41EfY20aP2CyXfHNvq3yOF+ds8T/nCVjrBPB7CIz3Le0hFlyXrVavo1CuYXGhgX0zZczVHFxeLqC13cXqRgutzkBS9Dign8OZeOMckHKxTBNEQcL6S06DmL1qANDa7qDd6cliZwrM7ImOufUWMK44ZLxl/TpiecQMtZauQJjBmiesr66/hkdnjuBgeR6VnVk0l9VzJ/Q3oPoadviipVauZACdAfQ9JHEUst/nncZ3fupTaUEKX1LPQxWknNHsecfBi4J/sfJVnB9cwyAEhgzOrL0S2EmQEYEza7K8wiYvIBY7iD95lphzrVbDTLMpQUXMKofEktlNwftod7oYXOth2O/B48q/JBgXhVTY31ypECg7xKCJeZeLWCBgPnjoIA4e3o/Z2YZ4qFlOMc0YBjF7Lu0+tLCExx6el0VC9l9vbLVx6co6Xr94Ha+/eR1XVwiwN7sCunli8DXa70y9Rky6gkbRIXbflPfNUNzr9ZWdjt4fs1+WR0xdHi6LhlGim8+qBc6QeyaKzU+xdtbL190Ovrj6HTw5f3w3gObB7cPO0nYFqgvL8I1P/J/h6T/59eyXOgPobNwHg1GDFwbZVrBPs+dHoax2txzMIL+8/hK+0X4VwyDBwI+kUITBmUupPXc4bj3FjJFZs4QV8YsQKM/ONIVB14j1MjBvbWyIn7lDwNfa3kKn05H8ZWahLFdUyiWpLqwTI56faWD/4gIOHNiHvQTMc/MzmJmdQbVWEecH+5e5ljsJuQycNwL4kNmsiZiOkXXqYt7ETKOAE4fn8eH3naDXGxKz3sRLr1/Bq28s4/yVDVy6vopzy9eJTRdpUsjT44mVV6so5uawkXOwvtUSVwkXynBHFvFUc9hSYsr5YZZsSryIKYuILHnYhnKKMHgndHXwjc2zeGHzDewrz+4mcxzUnwnLHLxYyE1nfT+JMoDOAPoeGZnP7tbs+ac/NV3OPaclDXYPPLDb8871lvHFzRfQ8V30/QSxoQLu2TEReCNZeBPkp73bjvqVYnbZnJnB3Ows5gmcmZlubbRw/foyVgigV1fXhHkz3WapoUHsde/evTh48CCOHD6EBx44hmNHj2BB2HdJ9Gm1CKe8ynHs0aTAuRyh+JNV2QojJD3GTNjpp90YkoUnEwIn18liZbOKhZkqHnvoALbbfVy8uoZvfucSvvnyRZxdXsfVtQ6urm9KNsheYuiL9QaqzjyubrbRHQ5p97FIM5EsDmprHjekFXknkkVMfs1Iqin5jNsyUYS8wHr1a3hm/hSB9MxuvQ4f4tMO1cuwJSz65347PPHHv5qBdAbQ9wA+d4Psk709e2bt+biWN3YcHb+Pz68+hwv96+gSOPPlOy+mRXTJHwSe5FogVqlyvNjHl/lcGMLZFxxcNLewgFyxjBViqKvXr+LilStYI4BmYCuXigTMdSwtLeLkyZN45MwZnDlzGoeOHEaz0VASAYNxFNAXVeqdiIySlvmpiSLmBDlTWfyMxB6XbcMMRUZhtOZmtAkH/HOxCcsQicrdaDQreKxZxsPH9+HHnj2N19+8hq+++Aa++d1lrG71iVWPsLndwyIB9eE9s1hpWVhrtcUrLca7UOV7KFBW3mkOXBKnZ6ImBrEMcpWjY+HN/hX8xbXn8UvHPoa8teOf34GbWDRr0Z7r9zOAzgA6G/fieOWX/2hae57Tl9Intcxxy8Ga8tdb38VL299BP4jhcs8/BjrOaWbLWqw0Z7605zJn/spODi4amZshcJ6bR6FUxvrqBq5duYyLy5clAIkXBGvVspR5n3n4ITz19NN4/L3vJWA+hCI9nkGZy74Z6KUqBOp1pAhEJARetBMEVPY3QxuQGRUtnT/EljzuzhIzaFvEem21K4TiUU73GcehLGjyxDNLrPqDT53CY6cP49VzV/HXz38XXydmvdLqoT0aYrHZxAIxfZZz1todKBd2oqoeTaVLC8FPFMuXxcPEEJC2iNXTDCaJfl9aewHPzD2Eh2YO345F82LhMrQWfeWT/yw88Ie/mIF0BtB3+ch80LuxZ3ZusO/5mAaBHceV3iq+vPkVbAYjYtLpeU3E1yzMWUsbvCDG97HnmEu2y6U66o06SpUqOq0Wrl45j8vEnNvdrizyzTbrOHniJD7ykWfx4Y98BA+cPCUdvRNOlwt8pWffkMmsEuQMScXQYCz3c4FICt6mgDaDtSTQSUK/TZNGBENXEPKuxC4XcQCTQKtqNKtfJhSvdCzWucdOH8OJo0t4zzffwOe+8BK+e3ENVzc3xXq3p9EUr/Vat6eYuqG81/z6nP8h+R18c6yOIxFJBEpmIYAeGh18ceN5HG8cQM7c8U9w/61YtK1aLmYjA+i7eOSc7JO99Wc9zZ5PaKC+5fAiH1/b/ibO9y6j5auFL/mXrWRxpG1miQpEMg3xM4v/2XJQrdVRqdfhEuu8cukCrl1bRq/flyjQPXOzePKJJ/Dxj/8EPvDBD6BUb0rGc+COVMWeli0SHf3J4JwICJvyFgxDVT8nY9C2dKl1osus+XsFlkqIduQ+AWHG8Ij3r7TriIE8NsYRo/o7uXLwvEgyPz70zMPYt3cGf/pX38bffus8NmiSYcbM5epekEdrMFT2OwZpzhOJdeVknIwrDqFekSY2U7qSG8U8Lg5fwRudx3G6eXK3z+wtLPoisej3fvoXMpDOAPruHRUzY9DT4/lP/F5aNchpdRyIxNa6B3d7zpvdZXyr/Q20CZw9jteQjAxI6TUDtPBX8fsa6rZE3cYFIOxHZla7sryM7e2WdEThQpR9exfwgfc/jZ//+U/gsScep8dY8IcDBYymLpdWNdYqUjSNlku7uTJLTiyRJ9KWVsKaTZY6LAnVF/ZsKDYN0XgZ3G3ZtxnrblPiZabvuHxbtGsGakuA3ZLdm1zULYw6oDd/cN88Pvnx96NRK+Nff+kVbHX6ImdU6b1ytOooILDnqcJMVEk7d44xNVsX4Da49JDAOYJPk9EotBGVYnyz9RxO1o+JL/udsGgrb2cAnQH03TuO5c3sk71xMOxw1SCbe/dpeWPHMKRhMMSXW1/B1UEHncDSTBXauRCqzAmd6CblzrqnH0vB3KSVrXKtjTW4w55Y6DgoaXF+Fh945in84i/8AzzynkdUr8HYp32kORaJBlidfSHMWGXYK8VKLxDy46UDd6JEm1hK9lTehl4sFADnX21h0o5MLDIJ8H4TU47TjJVODStWLpA4Eb1aCSmxCAlpMcpg6CGfs/GjH3hY3IX/8m9ewWa/J8dWLuSkJD2UYCVDNbIVXdyQPOxUJ0+LdzzfQN/1MSgXsG1extneOZyuP/iOWPQLP/fp8Ie/+B9nIJ0B9N05tuPMZ5eOP/vp35Uo5Cl5gx0Cx3d7ztn2ebzUehnt0FJaKiZ5FwoOMWawcZzihCF6a7lckaIVJAGGgz4CAiUuJnn8sdP42Z/+MTz80Al47ogz5WBo7TrNXU4bvCo3hNIkjCSeBBEZaTqzhXESp6HtdfK9ofoHMoCbCpSFWasyQNGeDSsRp4chcoR2fJixpObZlupHaIybyKqQJbYge77K0X/mPUfRH/n4/77yGtrDEWrFonQVH+mcD5Y/uDw9pnPBXmdh1MogLZMAR6ByuNTGMMKBho+zg6/jeOUY8lbunbHogZcBdAbQd+dYSzKAnhrT8gb3GTyoGfQtRz8Y4avbL6BNDNdDgcCFACpIVFgRp8cZ6VphrDpr696ArD8XCKxyOQcWAR0vGHZ6PVTKZZw8dgQ/8bEfwpnTpxBwMD+xWilm0ZqvocEVY6hXqkZ6+PJpmua4QZQCcUuDqKUXD/VIlCYuColpasBmWcYSf7QRmbqIxhL2zM81EzpmnSvKskSULhsmSqaIY/XVdQNhwe85sYit7S6+8tJlDFxPfNwc/MTgm+hzIl/tRIpZJNIUKp6UzxlHsnZGAdYGOezPX8YFYtEPNh7e7TNkis3VhRyixJnR/X/7458KPv7PfiZLussA+i68no+z39ubAJrlDfY+s/68a97GG92LeH37NbhGXhLjOG8jDFQvwDEGJjorGQqc00v6Wq2KQsESv+/mek9Ad2nvPH7o2afw5ONnZDGQe5jYsoirZQ1Dg6/2ERuYZFjo5lI6LjR9K2kbP83aoR0c+mcBZSbdZqLkD9Z3uXQ8VqArYo1Y8gxZIBRZxFBatvoaq9cx1PuNNUiHuoSbk/uYST98eB6rG12cvbotujJPCrapqwoNFadkSGm4Nb7aMPTrswvGpW2l52O7YeM8sehj0mx2V1/0dEYHh/p7ruVkv+gZQN+FAJ01opDx3M99elre4NQ61p8P7/R4dm58u/1tbIUBnGIdvheKF5kdGobWGJRsoLthaw8vyxy1ag3lall6AI44m4M2bmv1+HtO4UMfeEIC8oPAl9Q7Yd9chWfqRTvcmN892fPk57fS66mOJ0ba8cSYzEla+kgmHP3GXYznrngM9Un6uDR8P1EILdIF68y8hTGGQx80B+HE/gY2O0O0BnS+6D1Ieiq7+HjyMlUOB4O7aWig5wIWzvCgl/RpP103xHIvQr1+BWc7Z3GmuSuLZlnqFahQf8Wif/6z4Qc/88nscjED6LtrtLwMoKfYM3ufOfN5TgP0np0evNxfxcvbZ5E4eQHUVnckUoViumZKn6Eu2BWOcR4y9wSsN2sSMSoZzGyZI7g7uH8RP/Lhp7Aw35SwfE69E4se+4OtiS0OKbiaqR6tHRopPI9J8xQojzuc3Gh7NzDu66rAOVGqtSLsKnR/Uok4mQBunhTk+ZGSPOJEBfVHUqDD7a0i6WlYL9k4NF/G0OtKswLWnDltj58nIUrcXEBs24bqJq41dlUaHiMIE2yOArSqBl7tPY9jlWMo7RykdEzLU/P689zmU52rZL7oDKAzgL6bAZr/4rk4hfXn/bs9+KX2WVwdbiNfIfYchBgQC2YAVsE+Uuah/L2sHGgrI0EQ6o0mioUictxNhZu6ElMuFot43xNn8NDxwwgF5E2JC4V4qFnljfSCn/JNCNtNUovdzVRaix2K0uo7Y317JMc0XkyMb3xsgnHPKqQLkdobom5W1FbpzFo/RqQWRVmOYTYcSa51LAueUnVIVxh8fvi2+XoOG90cVtqeyCCOqex2UTqvaLpuGhhffaTnzqf99t0IvSDBsHgN53rn8MjM6Z2qC00tT+3VctU6bYOkkGQAnQH03TVmSvnsk1UjlTe419IidtGfOXPjG1tnMYotWPQn3x4M4fqBcmzoyjjd9EmVNDMW0mV6uVKWztoMQlygERJTZvni8P69+MCTp+WyP+LWUxYdSswLjRZtPuE1+5dtAjBbLHPsolCds40bqWwMDbjxhEHr71XFYQrE0KFJMVRbFRWiZEjZtap8jFOuHE/KwRPdukq+jzQYx0rSUFsiNrpAqgxDAWZeMFXfB8hbBhYJpLujiDa6jyu6OeUunjomU+neprJDiy+am96yFj3yQmLgdGy1Ia4EL+NUdIr2uWOhFctTS1qu4s+1u1jJZcEzGUDfXeOUlfXa/Fef+MPUvVHRf9CL+vL4luNi7xpe2b6CgEC2P/LQG7pqjU3cExrMEgWiUmktgUAWCoWC5Fmw35jRhyURDtR/4pHjWNzTlDxmU8KKGCdN5bCITFmckwU6nUAnC30C0lo71t5hhXKxBuVYByFFE9Dm7xNVdq7YsuphKI+JOXcjmsgq7ObQ+2MwFhAV0TiWUm1pXyU6cyRsmHsc8vfcsZu1+PEmjQaUHs1gzvnR82UCWu4kTrfZdPw2VE22nC/tj07rcHiykHwQk4uAEvRcOm90TtziMta8qzhYOrLTx7SoZapZLXNs/eHTv+d+ZvlXs0vGDKDvnlEIM4DGRH9me90cbtOl+9X2a1gZ9lHO2+L55c4jpjLvataajEP0FRGly/mcncZzIMcJdxGBF7HufQTMp04clP6BnEQnvDgylLuBGGes21axsUK8z3ZOmLSCNFsv8CXjSpFUpjCSWHfajscMGNzdhCcIieRQbNmIozFQx7EqQVcAHYunOdLgLPa3WMWGxhqk+apAWHSogVokjUjkjUCHRAmL5sdoWx6/94VaDq1RgK1Q3cYNcONISy2JKpMXLZo7r0hxj3qbvI+eG8H1HFjNIVrea9gbHZB2YDuMfXqirWn5arDkZKviGUDfReNAM8viwCT3uXE7/bnntXG2e1byIgLNCqGlDUNcB8m4vZOihJBcZQ4G4kt9Qmphp0Gg2O2hAwtYmG2ojtxTerIlfmkIM+X9mCkzNrhJbE545zgMKRWgk2kNOlLgHKvnC0vmCSBlxgzmWtpQ8kck7D4NdlJJpWJqFlYtxTdjgI7GsoYAczQB5UCDsu/zpuQN1tpVCLTSmeslB7NlR2QO1p8LlnoPvD85bbqJLN9mSrNbVTYf0vfMvDsuvxcLI+c6uuE2Zq25nbTo/frz5M+V7ZPWVrOUyRwZQN9F1LFZvK8/1P/t6f8rtddNA/SOsaJr7gou91YEB8NYSRmmlF3rQg1Myw2qlpALMMwpZwQDF4NeqZTH4QN7UMzlBPSSKQ1byHGoHi/7Tl3MnIcBVdEn+RmxqYtRptA9STXneHIcAtChAm5Zw9SLhuLZZrYcCGPmlLwkDjSgKslDyRnRRNaIU9Ycy9VDKLKG0pxZa/a9gK4sfPE8cypdJPsylA+c/mPv93w9j61+gM4olAXLgmPCg1oUZGy2rInDhC9EWIvm/Q1DE9ujCCOf9jTroru9hZrd3IlFp06cptahnZ/O/5b36Zf/k8xulwH0XQLQIy+TNyb68wx2sdbxuDa6glEYqEW6OJlUC8bKGqYq7CYtrSRnQvfb05bhcQTpUnMGS3vmlCeYpSbTEr+GxZ1NQuXXUE+y6LZAwbehil+goit0YQfSH7RMEE9AWbshlKYcqa4q8WTRMNWfBZiZ6UaRriZU5epp2Xok/QvV90rOSJmz2vwxgw5FWxctOlSukbGZRLszWLqZqeYxWwvoXCq3i5mzYHNlY3o9EmsHh5HWrRuiZQ+8mEA9Qm9EE4Q1xDDeghsd3E3mmAZo/pzNuJu1xMoA+i4ZRpRkAK30SdYp0wXCWw52MFx3ryGxHdiGr1o0aWmD6/5Y101SycNINwU5LA3YWtdl1d+2DSwtzGCmWVF68M0WOWHnUFnMnFMRqsUzmQgIwE0zgG5VohPsknHxCYNu6n1WORqxALOKPtWyRbpYKECtGD1r0Cl7TlKtmSYjAepQLw4GamNmzEU54tAQK12g5Y10gVC/npZ8pFGAqVg0522UCg72NBMC2gjtka/OD7s1dKk3vRwcU5fGJ8a4VRZPBB3XwtYgRH/URtlZJoA+hVKcp+dbOwE0T7xVvc5gNk9lnZIzgL5Lhj+Xu98/15vljR0XCFv+JpYHK7KAl5OFO7U4F8Sx1p5VJZ3iyubYmsxyAAMjd9NmJspgUy6VsW/vLIo5R7RXxbanKvV04luSTPRkBvfYYOue0oWNxBfwTvUNw9RsOpnY1pQLQrNnLXskY9COx2xZ2HM8uT2OU/05dXEkOsVO3ceAGgQ6ZjSIxkUpvlRTRsonnfrApaxcFeaYIl9Y0h18YcbG9jBC3wulTJ47kctEqPOhzdiUJyTjfA5F8AdBgnWWOUZ0dssb6Pe2UI7KOwH0Xj3x1lId+tLmMNOhM4C+O8bGlcF9+4H+/sc/My1vNDXbauz0+Cu9C9gM2wJ+7Ebg2MwwUew4zdsYR8nJwp5KZmPtNo3dZlBzrBgzjQoW98yqDis6MAj68j/RuRmYKhBUzDgZOzM4RS7R0aLCTvn+KC2Smbg2RHKZ0pMni4Kpw0M3FYjTzi+RttRp4E4mxStJ6u6OY101qCsHpXdhNC5SidI+h4lizJxWx9MVnwNe/LOdHHIE0IWSg/l+hLXWQJrsstiWt23lJOF+jVE8XvoztJxDc5z0SGwNYrRGCQ40uhglmzRJLo3Lw28as/qzreorJTvKEhwzgL5rxv39uzpd3r2rvMHj+uhNhFJ+bCFnR+KwYMCKVGXKuLrOSLVWQy8k0mbaKo6UgYttZfNzdWlnJb7nJB7n7KcOECMNzZgG6eQmkB5b7LREMu6mkqhehGlxirbRjT3PU/uY1qflsUKqNXNOC1QwpabEYyFGR6hiDNZRKsuk74EmG07EYweLWuDkwhQHDifa0VYulbBnPsaV9Q66Q0+YN7tXLJ1kx/vnsnCWPjj7mrP4LEudG+752HVjDPweCmZLLVxyb0Xjliy6qSdhAegDjay9aAbQd8lYvL9ddmk4f+p/3hGgh0EfG8OrCOUp0ZipxWkVnPJWTOY7qYRTkkBqwUvbRRUKOQKmGTQaVenYHY0X0Yyxbm2YSqtVSXXmJIvjhhJuZbNLdJCRItIp0KZ6tgZzXbSdJFM6N4Oz1onTzI1Jrke6+Ji21oIG9vSVjXFMR1oGLseYqJJ27mZuRhYs21CdW7iqkic2AuZisSBdY8qVEp1wCwszbay3ehh5ysY3jkDV6Xg8KTiOKjs3VAg1gbGNDjHoETHvyFojtj0ikC7CubXM0dAAzZ+187NLv2P+2dYvZ37oDKDvgjc1X7rfP1P+o63fDqA3vRW0kw4CQklP3AnxmDWqBbnp5DqFWpFmqswILTONBDVQLhaxd74pHbu57YiROj4AbTNjgLNVeD1/ryNGMc6X1lRWOOVUR5wJek4yNVJ5IjE00TYmxzjOQkrZcDx5uryWOYkc1cUj4EavgTFhydB3Q3V2MWwCZtqs2OEWhwLOXJouJ5u1Z3rPnIVdkG4yBTSIUe+ZbeDitU0CaNavE2Wzm0riEymFb+dS+JjLvhPZOq5BAE1gXRgKQAdxSBTZuZUnuj7NoOVao1LOEC0D6Dt/rMZBBtBK4pjZ7TNecS/Cd7hbiAWfASLBuEJufMkvmJJa4TAuwTZ03TJLB7wkWauVMTszA8tx1GMsne4sWGgRwNnSLZttd4pNq5/5K9LNsKUFVpL2JBzHgSYT0Xaco5FoSUQf0ziSTrlFdL7nJEs6SfP3TN1mK00wMlTTV1Mt2KWTidwux03AHNrEduOJ6sKM3lIAbuds5Et5AWkGZ5veR65oo9kooV4rod0f6uKfSBYSeQe2YehsE3WYlp6bGMgHHl3ZRDlumMhdEQmkQ+0GsXYC6KJec7CYhGeQlgH0nS/C3qeB/b/zjORvODcB9C0HQ+8mAXRMtI7dBl4YKsuZKrfTwXDpJb5UlaiCFQ12rMVGmqGWCNRmmlU0GhXRWyNZ2FIgx2AnQGc6CpQZoC1L5AJDANkWADc0WCcScJ+Cc5rmHOvO3sZU+POEWKtGsNEYwJNxa6xENWzV7bNMDYyGLrKRNcvIQmRGcrwWH59NYGiFArSWTV9DSxY9lQtDNRQwLVW5yGH8Tt6WPJIibTnHEaB3chaBcxHzjRpW19sE0L6SjSzV2JYzTMRmrhf2Et0qiyGZyLMUrsTcycYI5PMI6b3ZeAtAz0zJHMKiixbHBmYjA+g7fJTj+zaLI60gLGiA3tG9MQj66AV0CU7g0CdUCOLJAlmSuibi1GmgNWLtSU5NBexwYMjKEzDNzjQkoN/QHUTGBS22JUl2SuLgBLucsGlDunhbil0LYOcUm9aa9WQhUVXsqWJGS/myEY8bwCZpFxTx/iUTEq0X5ATPUzTWi3osjaj3FauJwmJdOYbFmc7yPW+2bDZtjl4l5UnEMkMpSOdD4IVVBmNmzg6dA1veh5pE6sSq65U8qqUChq7yd8v5khZYiWRnBwjlfEO80okwaHZ59H0brjGiewdqaZQf9FYZmj/jWc2kWdPL/XDun7qf7/xapkNnAH1nj6XqfatBW/pyt3Q7gO4GGxgZQwx81jzVQlaiy7wxKdCewv20cGTSMDaS/GPWYHOYbdYIqIoKhFNwlopDYqVOTjkRBKAdKec2BLRT8HZE+oCWGsTJkVrn0mKVROvGhl5kjNM0O2OctDeOEE3SxUUF1GknGGiLIHQjV06Uk2OQprGRpMuJtk7HJyyajtdxcuLLtuh+3gKeXGL1/ngxlHsrOo4tj5XqSkNdbZQJoIvErqvlPFrdoWj80lCWF1DZ9SLNZdX3KlokkSrFURCJ3W6YuPCiNjHpRHUMR3IrHZo97qndTgpW+ht2BtAZQN/Zww2j+x2gi7cD6I6/Bh8ckWlIl+kwSu1nyZSMYGDy70RSSEuxuXMIY16ZWOLM7AzyxZLqBai9vgx43LnbFL3ZUTKGnUodjrrNzikmne5b2K5ylRiGYp6JMX0sqR9ax48C4y4pY7tenIybt6atrMZRnwL0lpoEpKydgTWWY7Toqy3MmRhuLkJBDCUEvjqo33FUzKiIKiyZaDBny51lTjyF/B83kq2UCygVFFCztS6GkjJS+ci2FHOGbiLAWrVLkyXHj3KioO+0VCFPrIpkrLf6oRcxKVhhRm25c34W5ZgB9J09LnHD0vsXoPkPtaz/aHe8lOj6q9J2inMg4lDrtbG2wyWqBNxIQ5KMif1skgKq5AQGqXqtSgA9i1yxTM8jJhrF44wKMwVkAmLTKSjmbCi9WbRgkTVSgE4mPQcN6EpBlac8Lpi5ye+sNFwthaRWvLSzdsr/k0kTAD5eZsRcZShLkJrlc21NpNY2CYiVTMHgy95wVQIeCZiqCkCMXSqyqIhUUkkrEiNh6DPNEhzbkOCovhvICp7MaeKWUTMGX2WE6sSrXoX0gGGQyKSJQpcmBpfhfpKP/VaAnpv6rO2ea3gZrGUAfUePmVnzvvsg//cn/sW0/lzZjT2Lfoy2ML8gSlTzqXRh1Zh02zaM6QaryhomQkSsWzolqtS70aih3piFUyhLhGZiq7Bj5Xt2iJGyrMHac368UJjKFcpVYWpdWzswpjI4YEwZMJKJDJNMzRZJWlnIAAntj55CaC5fN2NofduYyDaST+1IUYtBQGpxpxPa8hzkRODs0KQS5RTgxjr7eXpySqNP+dyFUVp1GCHtHz7XrKFQYJA3pUpzFKWdYFRjWe5ZyJ3AA+07ZwBnsB76HKBEz6ltYzToopTUdqq9cjRA1/VVk/Ore3/H+O9f+pWsrDAD6Dt3nKnel1VVNzs4dgToOAkJmEbCFhNdKXejljFtW0u5rfYfm+Y4E4NHzrbQqDdQrtSJIZcITCMtJyivszBnKy82OmVf0/KCkWbhGeNVR2PsuY41e460mpG2p1Itt1KrXaz92qnkoYL7J0wW48PXgC5XAik7Zxi3xkCbpE4Pi0OjlC7N5yZKJk6LlMXG47JvlSOdZkeHgY4iDUyZMGbqNQLpOq5eb0u/RjeK07VX5QTkD4wmMbHdafDnr24Qgy8CezMtlJNrtK8lNQHhlgUr0wuF/PkbMyUzA+gMoO9gBu0V7leAThcI+ZJ3R4tdGI3ob91TgT8p0KUgkbJUjdYKFBVoK1+zLlnWOJ7P51EnIOJCDSVdmGOXBm+WnRf2nKJlWigyxWPFZz2pJtSZGaGvc5xVIl1a1g3dQ1A1e1WFNWrWUcl0qRY9qSycSDLTGkGchkFFWpaI0sax2ittqq/W2Nmnnz9u/hqNC2FYo7Y4UImzTNi2R++fo0tzOQsHl+bxndeXZXHQYTlDT0KRfn3O4XBokuMu4anGz06OtU6E1b6LQ9ZVes4Zmih2VKtSBs2yFi8UWu8NRtlCYQbQd+7oNiv3s/6cyhtzOz3QS0aILWJ6oSFBR3Gab2FMZNxYLxiqfCBVtaf01pTjqpo/LnFmgLYcWwUTid+YF//SIhRrvHCmtO0QaZPXG2TVNN0u7YgiWc6BajCru6IYOhgpTaubjjKNoykXijG5Aog1iPK+TTPt5A3VfZzlHWkSqxZJpcOJ7igT64XG8fqkofVrXXyjWH4ybp0l97NFL5VROASJ0Hf/4gyKBQfbvZE4REQC0ZOhqtw0JZfDTGcCmhRY6+56ETp9+qwabcT+gI6psZOTY/ZmgD7Uc7Nkuwyg79yxt+feVx/iRx/6vw28tUClvjNAdxEQg+Zg+aEf6kU4/cefxLrEI9E5Q6m1Lr3fUOAoljFLHBy8SGinrghTsUuigcT63HE+cyxyRaDD8qOxNS59HWjpQiDKMrUNjrXwaJJSpzul6Bo8XeihJQ0dxG9o+SJNt5PSdem6okqq5YogUr0GA19Fiqpg/kh3TwkFpMeTVlqybipbHVJHiNI9dMssNbmYaQa2XjAMaQIsF3KolYu4ut6R55vJRFJK41wZlNk9IhOCqSyBbmBga0hAXunS59WncxmNQ6tuGs2bAfq5/J2pcJzM8DYDaB572sP7Vd4o34498xiEq3QZ7knmg8cOjrRyL9FFKokGOUyulMcZyMZkgY6tZdVqGU1i0DnbVvps6CPyBtILUDRcBk4Ouw8DhJ5LoOgTcAWI6LYoisf9AlNgY3bKvmInl6MtLwUdHE5kiK0NY0+zskrr9lkClJplp2l42k0xbmulQ4rEjcGdUfwArufDJbI59Oh711Wtrej2KNR9DLWsofovKkudJTkiqY6esncF+BG9rwTReHGV7+cS7VI+p4pjDBUdGmr9no+HWbxjqjRAZcFTCMyFQx2f2bQLF+3bJdvVpgF6s5ZJ0BlA38Hj4mz+vvoQT0/kjTRidO/Oj07QS67TH3qA7RGXFuvLeNOYBMop49iNsa3GlP9Z38A+3nqljApXENKt4aiPkJPYpFuJ8g5zq6hwNCQAHMEbjggUXfnep6/cIVsBoWboOpbTIbDPsX+4WJKEuEIxL1o3g7ZlWdqel9ZqaxYex+MFP74iYLsfAyZrwcpdoQpBfAZlOqbR0EOXjmfQH2BAX0d0jN5oJMcbBarsPZl0DdAFKSrzmfNGLMscs90kVizdD3zpvJKwkwUqIIl7FRrc+QXaYpfaY7T0wq6NSNrlYtzjUSaSxIQXmxjQz3PmkH4OJThph2S7sv78JZPjQDVrmpwB9B08+o37p5LwF/f8E0N/jmV9ubtrB5Vh1MEQK2Kv40alUihBIMOgyN1DjGlv3ZTlztSX+Slw8W0MWlyIYRPEeP02gdsIgecR8PqqbRR9748YmIcEgH2MBgSGtA2H/LVHYO1JGynFxgmYc7YAIAMx51uUSmWJ7+SM5Uq1St+XkS8WYTu2sNnp2NKxy4L3Jg1gQ5kAQt1bUOQLNyQwdtElUO72++i0O+h22ujS1wH9PBz5mkGnoVCGTAjM6At5hyaKgqT1cbyoen2Mfc/ScDZSzJw3sfvRA/I5i47DQ2pTTM+lzv6XwhdZ3OSQKN0ogd0l/NWPuIECT0ahaPdBHO2kQxc1e+bfA6teymXIlgH0nTu2zfuqkjAN6E8bxO7dTX8eJBv0jA76BEJbI3WJzZkTDIxxrLpWpwwZ41ZXEwdECoJS78fgRYQuGPbRbW0JK/ZYxnBdAekxWPsE1LS5BNYugbM77GLU76HfH2LAoBiEcnnPMkLBYSDMoVwuEChXUKtVMSyX4RHrDvwa3VYTVm3nC5KZMe68Esfj8m8BaAZn2rwgVIyZXqffH6Hd7WF7u41Waxtb61tobW0TWNME4gaS6CfRGPQfSzbFgtoUq7fEUiivyU5rWWSMVK9CP1ATgM8AHdJrqomBj4cfH0IV/yQ6QM9U8U86zS4RqSdJc7IT5WphVs0smju3xHS1kxbn7FBRmEvBWYnk+QzZMoC+c0do3lcuo1TeYFCep23fbg/uhNcIIXxs9un7YSxgU8znBaRNKxxnON+oYqrOHywdRONbiHXLoleEfqcDg9kjA5NozP7ERieRnQ5sTmQLLClsyRHoFIgtJ8W8gNXQMDHyFfvsEMvtDUbCcivEall2CGaaOvjIUOXjBlNG1nQLEgdqTJVyczmeuDECdTye6xNjJ9bcHWCz3cbm1hbWVzexsbpFQN2VCj8vULZCiQp1uPlrDtVyDpVKTjKeFbPnril5Ye8q+CgtYFFf+UqArXIe7Y8nBF6AlO40/Fgj7eGoZCIrVZP0vBdqK2Oatie5KJIWaEivyFRqieIUoG/5d2zpydr8SOl3jS8O/rNMiM4A+s4c6xv3Ueri7FjeYPbMpb8Hd3roKCbWGpxDVA6x1o+lUSnLFByVKQyWgVi6ed/sFlBVd6rRdjIGFnElEDUcDfpiiWNZwdAh+KzXcsVgRAya9dmAGHDojQhlApEMKkaJQDqPSikQJ4nreuiPPAG5wKfLezdG26fn+JG8HD8nn8/JlpPFwxAmvd7Yc61151jiTmOtfxNYjhice9ggxryyuo7V62tYW9vGdnsouRe8b2n3lbNQIiAuE3uvVgrE4PMo5R01cXFgP2dZ29BFMIr1SodwbclL3R6q6twQT3Wqe7s0q3EYP8eNWtrqF8aGqlaBKvGW+FJ2icjCKqTmnD4euEkgzQGSUAWo7lCwYt/AoGlbOd/OADoD6DtzBOH98bv5v57+VOremO4/uKODox0sI8ldh0en53pHeX/L5RJyxAxHBJBj94HupDIdlmSkpdY6L0OEbwJ3TnFjZ0ZaIMJhSVbatZqYpT8YENgSgAceAl4gHLAeTUDMLDPSLZ8MVazRqJXE4sZSgdjdhAVH2G51RZMulyvCVEMtiaRp0bLwpv3WsdbNhdUSQA+GQ7SIOa+urOHa1RWsrGyh2/MgkUKG8iAXHAZmG8WcLR5rPkZe5HQta1yMwpoz6895Yv0sQYgbhJA14AXIUGnQLGlIgxaLz40hDW+5vDsItFXRShPsYtXNO5lUKDLwWuK1ZoxV2Ry0SzpPdJ/jTwpjklv+brOm4UyDNNsHs5EB9B05ns3fN4FeqbyR9h/cVd4YBG8iLg6xOYixTgyaWW6pXLohHvSGxq46H8PQEZ/RWH9Wj2NN1iFU8Rl8I3XVoizNbK3zELIrghcHicVubHQEeOtzezC79xhmag1xQ/jErNutdWyvraHf7RC4J8ToiSXnbVWxGKkqv363j0F9gEqlQuAbapeEbgogMaamcutF6rNn0ORFyF6/h82NDaxcWyNw3iY27RHgEsPXLbs4GCnvWCKF8POPHDuEk6dOYs+ePfTHEaO7tYmVq1exvLxCIL9N7yXQTN6WVlj8CaRFN5EuWOFJizF2nPc8OZXKqcH/RJO12FgvILJQzSyaj49ZdSiZJ2yDpGODOr/xraNHS5i4OMQQMlszMoTOAPrOHEk5up8Auvh29Gcv6mAQXiQQcLHctuCGFl3KF2VxkHMkDJ0RoUBvUuJnaF+0oUE7TVbmYPocMU/GGrbNhVGoF+pCWRRk58awS+C42UanO8KpM6fxkZ/8ezh6+nFU6zMq0Mgjdt0lRruxgvXr13HlyjIunr+MVQLrmGh+qUxAXcnLoh3LCYNeH26jrl4LqjOJxVKKnROQliq/KBDQZm+yR1cFnU6XjqFFE8Q2Bn1POoSbYueDsOcwiOHSZHLy1AP4ez/+wzj96Blh6jHtZ9Rvo32thCad4flqDhubNSxfa+HCtTZWtgYE7iZKxLx5MjHF+odx1WEinutYLwzyhKCrL2+MH9GSiH6sFP+oQp1YZBoCaKky9CR29IYGvjeO1Ac9ttqFC9WsmjAD6DtzHNt3nywSJjc0iJ3HLg1i3WSN+FxbqgdXuhbsAoFzsaAAV5dzQ4OJkUw1ck0lBOAGeGAGyhota9DKojYSUGPnhD90ifH2hDXXSjn89E99FE//6I8iX2rA76wT0C3D63XQaW2g227Dpcey86JETPbUiQNYWKjjytXr2Gr3pBS6Xs9LxxIGNo/YeMj6hGi2OdgcYUqbSAOmrXRwoy8OC/ZcM0C3trroD3zRitN4UH6DA8+XBrcffP8T+NjHPoxms4GV8xeIza/DpQmGFzvbrRaG7W0EQ1/22azkcPJQE8ubPVzbHMLt+KgUE+SLscg07H3mx3E3b89XAJ3PmcTSbWy46rhNTErcE12pGUWTZggq8lVpzn5MVwY5wlqa9JIbOpTfMKbjZYVFV30jQ7cMoO9Q3LoPCPTD5h+n5d1pONIsbpUYrMcwugY7R4A1NNDxHGlyyrqq+HATteCloyAmNjtDZ29I01hF/dJ0OHZjcAlzjhgsF3/0md0O2XXBdjYXIwLpA3sbePZ9Z7Cwbx4v/NUX8eorr+Pq2ga2OkNsEZvdHvqiR3MORbVUxNJMFUeXZnCQtvmZujDJ7Tb7pn3MzpVEWuAFND+IdP6FKRGmVqEsKXRWrApkDKMt97veiI5lgE5vRM+JpSIwrdQbeqHo1o+dPIzFWgXP/9VXcWX5Gi5d28AaTQxhYkjo/pAmBMbOasHGLP08QxNOvmChQJPJfC2P9TadUwL/UuKgkIvkisL3E/TdSGSKYomuVMoOypUCeqsDCe7P2boSUhcrMp3gghXWswuGrd4X1LGyfu0bI0kfTKJdOPSNTWTtj8z/tvFq8JvZQmEG0HfeGFy7D/KgD4zjRUv6j3N2p4fGiYdRcF3Ku1e7xEINW3WYTsOGIt0hW0eJplvK9CzTmOjLMDQrJLBqVqTUezRUEognhSBqsfHE8f04sm8G11e38Oef/xZe+O4VdLlTiOiqCar1BoyZBVzdvIQCAVOv7ePqtW2cu7JBwF7H0f0E1HtqmG+UCexCCXWq10sEmnmVfxHGOjGPgDlXgOWU6XYPtteX4CY+Wl4k7PWGBPCBBCRZOk1vRLfzc/fPN9DZ6uFzr38Fax26CqAH1WbruCTsN4A1cFHgll7EjNtdD2tmgFJ7hErOQiVvSZYznzO26YUDYuyuuuyQRWo6eTP1HBrVHEqVPJp07CvDCNc2+sqeeFOfGgnrp/1EPJHY3BXMBL0sATpt9PnFVl8shOOQqbdOxTN6ok67fBtDI8gAOgPoO29cNO79POinJgUqtwVoN+5JA1K2r633TQSGLWySgVJKoXWRh5H+l8Z/6ig3FRGqOqykORxsR5ufbUpQEnezZvCrVIoY9fvIESPmpiQvf+cyXn5znV7TxeMPn8JTj5zAl57/Ni5cWhWP8dmtTekHW68WsZcjNwncK9US6gT8l1c76LSHOHVsgV6nCqdYQKVWQ7VS0TnMoZpU7Em3FqK9BGy5cZUh51cMPVUdaErloyngyXkWVQL6ja0+TVh97D+whPc+/AAunLuAfNHB9ZaByFL+6kqBJiJm0q5PVwx5WczbpvfTGkXIi+5sSkQpA6kXKrG+nDewtFDGArH+IrHtXL5AAF3BXCvAxTVm56m+P+lbzueVc6AjaVxrSoWkLTZGvt1HYrmS85GkTprdU+1Eh3ZXO1nsaAbQd974o1fufY3jF/aP+w+m+uOO+c+jwJWCaJ8bxDKuy4KaAmdeIJQAJN2+KWV04lxjFm2qzI04MsTCprpq0yU/ger8XEOq/crVGhb3L9HjIwy2W1hZvorLF1ax0vLRaDTxEx89iR/7yY8gXy5ja3sbV69cR8lOkI985LgzNh0Pd8HmqKEygfwHnn5YqhK/9sLreOm1q3j8oQN48PA+7H/gKPL5EkadlgBVxAUx0i2cFwnzqlJDuraYSqqhicfzQomR5tZTtm7qyu9pk9jxVn9I4LyAH/+xD+LYsSP4wz/4LNpbWzg8W8Z6b4QcAfneWllagvGksIdu5wpFblnlhomOZVVstmhzgYtNE5aNpfkq9uxpSEUka8YSmFTIY2muAuNNk4P+9PlVWrNc5bA0EvF+QwmIiqXNliP+68iI4Mc08fEZmmoccNNYwKQ/oYT3x7aVLRRmAH3njVPWffPZTec/79hBJeE/bAKbIDak7Fj1v1NlyrFuSoo0hB+JzopQP7EUouQQrp1QBRr82CYx54XZGdTqNTiFEpqzs1KGzbAz6g+wtbZCYL2FAjPKah21+b3IFYt44slH8PVvfgc27ePRhSpabog6AdJMzsY24eehQ3vw0MkjBMQmKrkcPfYNXFvp4on3N3D4oUdl/51r5zEa9ER64QKTfLEMo0CnIS7CiPrwODODWC8DMss3plgCbeRzjlT2XW0NsUYAvUCs9rHjBwg46zi4bx7P0LH91ee/iIMzBRxsVmGw0cSLsDHqYYnA+eBiU/T1Eu1fGr6GAVrdkSzmLc5XsG/fLLHmhrQAyxeKou1zHgmHJ7F7Y75ZkmIYbghbsKcb2aYR1gkx/gjFXCShSB5HoSYE1g4/p4MC53jv3P6KvfB79ETNvxP5D+/9fe//vfYfZna7DKDvrPHz+Xt7BfuxD/2RcQuA3nFY8Qi+GSsnhJmIzhlGic5oVmH3qg5l4uSQBqrERHkR0JBYTbqcNyaNZPNcvm3x/XmUylWUKg0U2ducK6C+x8bswiy6K5fR3dyQqNFBz4VhF3H6PY/gH3yihee++iLKxEQfJCBiZj5MTCzuncOHPvI49hNbZjfIE8/UcfzBUxj5wAEC50J9CYE3QL5SFTsfVyxK8H6iitEVLc2p8nJTVz4nOoiJ3ns+70hTVotA8oHDe/DIsYN46MRhkU3Y/fHsh56WUu4337iMwPUkv8OmCWzpyD48fOoQKqUCOnSF0N7aRLvTw2a7j6JjoEjs/+jhRRw+egDNmaaEKbF/O/B8jIgB89UAJ+QVWLsu5TDgBrLJjR3T08nRCyOJP83bKg/bpSsAPy4hYqud6e9WTchjvwZpDs1ao23Y2Q4zgM4A+s4aK3vvbQ36MfV3nS4QVvUf5I78OTSHyFuRuA8sSzk2uBovGWcmx7ofXoypWkJxUdimCumPOL5Hdwlhwv3qxavo/+nfYmamTgBVEXZsEVirRrD0eN+F29uGP1ARpDkC8WJjXtLorJjAr1LH+esbMAOX3kkOJQK2Q9Umnju7gr/+1jkEo5EqhiEwzVdqeO5iF9HnvoI4GCF024gI9NiF4RSrtO8mgX9JhaR6PYy6q+i3W1LWfeHyFgYDHw5tlq2W5hisywTWGwR+X7+4gpeut+kq4JxOysvBqzbQCrbh2QkcmgwMulK4OIjRX76CtetX0W53MSLmP+QcDwJhLgvvOZs411JFLCr1L1JpeoFK1QuiAEfmyqjSZ7CqpRFMl5volT/+CEa+YtHsHBnS9yynmHn6nAik1YS0o7R8BKrUn+WO67T1/tHp3w8/9a1fykA6A+g76E2F9/zaCNOnPCYB/TsuEEYJsTWE3F1PcisiBJJYJ4FCaVSmTq0TRj3umK00W5YR5BKc/uHCDE5Y4w7VL567gudePf93eAuGzqBOJu3D43+Hn9v5FfrntZ3vN6ecQLc7ro0ecGnzti/5k08eRYUdJjoUaaxD6yXY1I/u0+8vp+u5eUvsgN1RBL80oE9ujT6rRd0T8paxow0N0lywtEzbNm2ete1lAJ0B9J0zllZG9/an9tC4QCVdHFzY6aFx5MFPuJ2Tgx6B68BPJM9CNUpVW1oAkXar5p9t0WxzxDodYsPEEot5DLhIhEC8Xi1J4hvb1b73MaaRmOoCcOeMH8BkwYuyVWLubM/jFlZ2qnHolmJ8OiwdOToMYnBrwe7AwkrLw75ShAKu0VR7nB5X38lqx+MEba/SdoG2ddr6n/zoPw/++Nu/lDk6MoC+Q0bu3u0ocfrZz6bsOe09uEcD9S2HHw/Rj3zx2K4OR+h6iQQNSaB9pJvCJpMqQQZoLhwpFvIoFUuCHgVZXEuw1e3L4+rVMgrtPgg9buTEhBj79i9Jvgfv7vr1FSlg4bGwdwEzzaZU821tbWFrc+v7el6KxSJ+9mf+Pg4uLaC3eRWjXhvt7TaurWzg7PIGtrnMm49jYR7NmRmRITbWNtBqteS9zTSamF2YE9scB/mvrq7+QADaLiZ0BcLWuWQsI/OFRHhT9xq+CBwQ8d0eBljpeFitGwTu23DidVTiGQLp/E7tr5g9H6XtLG1XUxY92FPMADoD6DtjnE/u3UKV0+ozK+nLWWbO+3d7/CgcEBCPiO32cLXnoUdMWjU6jXXapaJw4oVmvToKRfedaTYUQNPdge9JRd5w5BFzdlCVCsK3/uowQB85egR7l/ZK/Cc/hwGabz+w/wBOnDxO7N3Ha999/fsO0OVyGb/5G/8Fnnz6vRi+8bdYu/IGLpw7j+e/8Sp6/dEYoJdoAjl58qQ4U779rW9je3tbAJoXNR959LTo02+eu4i1tbWdyqq/5yGRrpwBwqeOU+pi5eTgcyWfgrafqyDBGHyB0nEjrPYCXGlZaDbacIwLKBp7UMvVd3up47S9Ms2iLbacZCMD6DthfHbr3vxd/PTP/ElaPcjsOU2vO7zjVTpdRnuJ6sDdCdtYcxNibmoxUHKMtcdLNV5VQfcMGHvn57Fn7x655O4JA04khH7oepitlyXBjuWOW/5CiTSS15Gf8ZiVqwW/nGq0+gPSM1TDWGsc6s9fC4WcZEmng4E5p3sbKiVjcozsSOFwftM0vu/gLAyarli4+3lOuqTwqYh1zomOcJ2SLSQzmv4ZBRFaxKKvbltYdGJUigTQ5mFi2EtwzOJOL8UM+gBUPgv/rmz/0sH/x/vL87+SsegMoN/98Wb3nl0TSdPrmD1za6tD2KVAZRiOpDeeH9Elsj9CK7RFQ1Yh8wJPAgQSYclyB92+tLgXS0uLkg/Ro0t9ToRjEOn0BgLiDoHXXL2Ij33gEXpeTtpEfeGFF7HZaguoLV++gna7LcDPVYZlYuEMyKPRCC+/9LICPvr/2ANH5bW7kja3+Xc/M0kivm6ipvACXxoAcKY0O1EMa3JFtba6pltjqYL2o0ePyuRh2w5ee+01WXjjrOojx44Kqx0Oh+o53wNg834fOrIHFceiCc1Do6xaUTmWAuW0IpAnBG4CFE9XCEr4v4EgisUtsjEwaIItY7HUwSC5TJ/tCeStwjjI6ha/Jwe1/NXQLHq4VQsygM4A+t0fD56w7+XPi50bs5o9H9vtwaw/+1EPg+g6rnI2cmCJPzdJF8AS3SEkSoQ9L8zPYt++JQlQ6rZ7BM6uME3OVO4TUPHiVkzgNVPJ4yefeRSPPvgebA8CnL+6MgboixcvjwOJ3vvE41ii/fHrvPjii3j9tWWJ5Tz+wDG5j0Plz7954fsD0ArVIL4IQ3Um4VmGK/FMa6LVrlxbkfB+PtYTp07gzKNnxBr3+mtn8dqrr8l7Zx398fc+Jgx8bW0daytr3+PRGPjg6cPYV89jdaMtkwZnNKn2VkrT4MlRZXHjhhyUaQueF8bojEKs0Lk+0sij5lxGL1xDLTdDz9vxd50n7yU9gfPvTLefDzKZIwPod38c7N57ROF//Ni/mO6eMq8vYY/sTChjqSDsh+vY8Few7kGiRkVrTlSvvLRsmKM+2c+8/8A+CSHifoBRGEjwvE9/0+ubLWHe5WIBpRyBvOfC4cXCcoEuwQ0BnnRE0eTqxc7lRBtOpQS+L9K5xtVqRQUS2d+f9YK+xIMGSMOcUobMIOhPEUeRXfQExQ1dy+WiLDDyoiEzZznWMJTjNqVQx/6eJZk4lY2YNZsc+cppGqoIKN2ljjbREaOTeSYtqTegWo0xSG/1fayMSpgnFt0J38R8cpj+gCu3stvx2K8BmidzLmbK/Wrtn3v/Ospkjgyg3+VhbN+TEkfaPaWhL10PYodyMgGiJISfDNGLVrDs9rHtquKJFJwl3k26U8eoVqoCzoxbw8FIKtiYhYZRQMx4C91BX/IkyoU8KnkH/e0O2i1i1b2h+Kv/vWefwdGjRwTQnv/GiwToagFwg9inCjVKiKUWRDpJ8455oZClFo+Y/dK+RXEk9AcDdNrtty0nlPJ5vP+Z96BSrqHWnMX8/IJ0czHMycInf39034yAJXeAWV5vY7Ot3Cfs8rhw/qL0JORiEmbO/NqFUhFvvnlePMojuorgqwA+Zp8AvLW1pcrddxicCX3q8D5Uijm4vicVgUNp8RVInGhMU9s47ohA2Ji0eNQ9DRMFt3G6aMiPMeERqnNj3fYwwGCuiJp1Cf14E3mjJJ/NDoNBmheS6/p3Z1go5DKAzgD63R31I7l7Wd6Y0czo0C6CLPzYRTfYxHawgjUilty4VGmv0IUOEDcHN4xdXNwj0sBIL/wZug8fuzC2CIwZKdifK+AXJBh2IffxQmG9OYf/5td/GWZ9BlxU/O//2n+F9S8/J/u5cP4CLl+6JPDz0MMP4eEzDwnLPX/uAr7x9W/JYxgUn3r6KSnNvnjhAl5+qaPC69/GaM7U8D/9d7+BI6cehplrokbHEA1HUDFPqmUUJ8O9/8xhfPDRI6Iz/8kXXsKXXzw/ljvWaRLhk3Ho8EE89vhj0mfxyuWrePFbLwo4NptNPPXMkyL1bG218MLzL9DxeTseUzGfwyd+5Bkc3zeL1bVVmXDanbZkWHNIEgdCBTrPxJhaEUyma7615KFwWvnTORfasWLM2UO6YrER1jbQCy+jZi7ysuhOLJon8b3TMseFdSOTOTKAfnfH+/r3FoN+30fH8kZFX7IuYRd7Hcsbg7hPf8DXsOq10PMgnU8SfYmvMvcT2JaNublZ0Wh5EQ/a7sUyBC+4tYhhBsSAGZyk9FuC+g3abMLqRDI2+LVY+qjWK8TwYmGZ6eDO2qFuD8nujoo0ffUl6nT6cSwnKHdFHrv0HHjLYGmlVqFL/iYRRKcmXbP5uMS6ZqpOMNyklZlzvuDI+50m56nkAs1e+TjY8cHHysw+lSlKpZLcNqBJyTB2P75AN2t1uHGskUjinu+F8PhcxAY8CZyKxvKLFFNqWcbUaYEKmA2ZZsZLiXR1MuIeA4mNalgkwCfQN85hEJ5BzsypCfStY9/NMsevNX/b+621X8tYdAbQ794o33s55am8kba22tX7HBPT7UctbPmXcW3ow4tVZ9NI5NdxvxTMNGsEio505Y4NUy71fQI9BtZer4vucCiyhalLkvn7Wr2OA4fmBZC5Azc/1nddeIOhlCg/TiyZwZ8zmV8/dw6bW9sCat1uB9euXRNwYvY9DbJc0MJOBnZ/JPHunx1XND504ogw3XmaXFhSiFxuBxXA5JAiBjVhoJyn7AjwSxdu0aFjLM3XcWz/gqTdrW93sbndk+MdEvNeXVkVXZqPdTzJBCFWVlZkP5129waNPR28yHiErkK4FL7g0ERgxOh0OiLZuHz+OYuDs57hyCQWS/b2pC3CROrQYsdUz8LUp87/uqGDLdrP8aiEaBCjV7yCQrKKml2XK4UdBoM0WzJr+ndoMJtEGUBnAP3ujc/sK91T7+eRG+WNRX3puoO4QWCTDDEMNrDibqEf2wJibICONbgwW2vUqigVi7IgFrOSTEAt4T5RJPa0zW2lBTMoq0twYs/0mPrCLGaP7INTLalmsX4k+2WgNW0H/8N//evEZFWO8a/85/8Yf/75LwggnXvjTdF71QQywQe2sG1ubI5vj5PdsWM/AeE/+V/+MfYtLnDnWlTqM5JpbefTRUGVUcGhTrm8JXGktm8qqYCO48PvPYEfevIhzDab+Mxffg2f+5tv0vMjXL92XY5FmHU8AWGeNJ77yvP6vCUyId089sw08Juf/DhOHlzE6sYGgTJNbt1t5dqgyc+lc8QperHB6XSBKnFPtMYMTHzXvHA7Vj2SSYd1XcDCrJyjRzs0Ec7jMLzcWYTWNWLWh+i+8k4yx76bdGjrO5vtMIO+DKDftRGP7h2Z7X9+6rO3kjd27N7NxSmDsIMN/xJW/SEiAjHLUJpyojuiVCtlaVUVShZHQkDmqHjMQEkWm5tbBCS+aiCLZNzJ2ySgdyol5Gs1hPQ4l7M5wkCiNDmvg3s1lTkRTjI8cgrYE0zA9xb5FjvdvtPgJDc+/majSqBL7PiGBTIdsAyWKXJSpMJ5Io7ti1QjlyJ0N8d+cri+qSer3Y4jGfurd/uFS8QfXiQEdehcd13Vk9GljUOPQt0QljVxDqpKknh8rCkQG9rdYWhbh2GYOkNqwqoDbkBAD2pHPhacKj22Aje5glH0OMpxcafFwiXNoBmgpV9hmCReBn0ZQL9rw7y3LuBMzXxqmFQP7ji8aIQOLwy6y+hF6nKfu5NywYZlRCgTaFXLJQFm1/UlWJ5T7jz6nnXWDQLnbr+vmHPqKNCVbpLCRuyNZRA+x67jizzCrNLmZq2sXdPPDCkM/qdPHsc2MXGWO27k+DcpzVNMcUzxpxzBytURCyM9Tuyd2THnWkhzVUv7npU3TTeSzRGjLsgVAmeKiAUvgo7+DGVxtNcvYn6mhtMPHNSFKrbqzmIYmLjdpnoxpp1MdFNAKe6h79nlsW9hRjTgbqeHwWBIE5cnQf3MngPJPIkVQIfKaqhPpVqsNZTrz9YtbJT4oCZG9X4mudGc38HJdhvYpJl6GQ2as4eFdQyNNoJcbSeAdqYAWjqtHN25AjEbGUD/4EdjK3evfUZp9eAe3GZxkBuM9qMtrAd9hAbLG5DFKcawIoFzLl9Si4gDDtAnpus4As68UDjo97DVakn8KKZ9uZI8p4DC9z30Wh1E5SJGeeVlLviByCOE0pLRHApYJ/hvf+M/Rfybvw7DsnSHcEjQvrBGM9VWE5EqxoAoemwkk0osZegRktCTVL4kUguLHIHK/mIrl6fdWvr5qXZrCnvPFUooFvOolAto92z0CTi5gzizYW4pxa/1ocdP4ad+6P2YnWkQoy7R7dzb0BGQl6lJA780NeCIVr5S4EpMnfHMGwMxL3i67hCtTpuY8wDeaEjbiO4LJNI1ner+f/beNNayLL0S+vY+wz13eGPMkZFjZVVlV5VdHtpjYWjR0AhklRFCBgkJJCRk0WqQQOIHCP4gJGjxA5AA+Q9yC4l206a629VqA5LliXbb3R665iEzqzJyiOnN793pzJtv2vuc++K9KCM5IjOSe6puRsR7dzh3Wnvt9a1vfXUrTUJWmbzH+0ZbvLnQF/mQP79AmbCGkYxOfugG7+CgvI/Iew3i6Axyew/y5gYMSFq6uFi4Mgrrr372f7O/+s1fXOvQa4D+cA4H7uP2HtEXa0e1xCfIGzQ1ew7H5SM4bZcQpyMJ469lV0HbfQIKGttErG48HHMBi0CgXNbwaO8AWVoVBsYKPAiLppZx0porBLnZ4RG05QYUm9cQoAsGbVuQxFEIoCDiEGbGg5jnDRoaU62Rz05bzE2v+NVlGytgO53uYhsG6NaKNu00irPhSTAqZ1jqFEzk/tRjTTMK4zSDDBn0aJRBgsy4XORwuH/MnuQBnpdpLWxMtoD6ZBKeuBJxU4rl3A4rIO18ww+eMQ1wdciwCxpdQOfSsq5NUO4QvAmQl8SeF0tm1TkPq5WmICqwVsSOXcMAzXKRAqkfd0X6tLhOVEoHcW74HYTEwQLMSgccaZLgQhcvwEV4n8kDKJuK5Z9LEu7OD5S13y6yNUCvAfrDOcrJxwOg//N/7m/29ecdZdCXdiVUbQnT6gAeFQ/YMWB1Qgdpl7zFx/8s6wqWCDI0AYW73BpZzihdboHMz7eBe8DkwhXIUFmyczTIGA/vTWE2WcK1q7eRJZbMIuNByUDJrNPxZC0oqW+OZANk1Z7YmbYBP5TWL6c2pFDIcFae1k2dh0BsGy9VgaBcg00nyJrHYHB34BCQhOQiOIfHdXxv9DObDFnm4NmEMYU+zWF//0wGsiIDPjSHPJ6q2L7CYEqTVGh5sI1IJ8TE21bBkfRplieQORMrruVCI62oUDpfLNixQa/fEv9N0gZNEic3DbSyaBCcs8URnxuDMAJyRK4aavemFMFWGlciBenGdU0rVqer04s0y2lngc85xsUyRlA2Q3yIE7w97g7w8RL7AwGavIzRJDLrQuEaoD+co74x/rg8FW+v29Av2c0n7RpqhMR5i9vsKGevMg0rnZcNfqlrWJSkT7ecjkaaMIE3+ZgjBLfFXIDFt4F7eUN7JkTywP9nyEbvfPo1MNNjeP/79+Dg4Aju3HoBBsgeoyRDaLTKgBGEEIhNq7quNXLp68vGT0ptmfkZ7/jlqS4C4lTwdHUJdYkLBzLldGsH4sl1aBb7UM8eMdMl8Ae+9Lb2Ouk7wgsl1xGLzxcFjDeG8NnPvQ7Tkym89857cHp8DDdv3uaFi2QZ0t05qdZIEc8pk6cCKk+gIYkDF4aqlAvtHMg/vlgQOAtA58ieq7yU67aysDkEe2qhJ3mHCrY8XFyLgpVfmpy8zqRQk4RD4M2TboxXOuT1ojTCJbHoseUQrAKGMGsXcM2WCNDNZZNWdnsaNAF0/BObybpQuAboD+d4b/9j4uJ4YyX7mfzPty/Xnx0UbgbHNbLnpIIhNZ+cFnA6zWG+JOZsGJwJ1ChSk+x09J2vqpyBpeLxVy4wNbLVWdWEXat2O0qou7IFn/r8K8xEacs+Q2BP0wyiWAqLnBxHrBPv3zaxgrP83HjmbETKEDbdBimFhx0iiLXEmolNt40wVXyMZLSJi8AIWfEIWf8GtPmxOh3oEosWHXRoSYgjbzBlffiI0Z1ru/DSyy/AdGsKH7x/H46PT5kBVwy6Nd8XORJZWuDaKp5FJe4OAWcpMjaVsOdimTNAL5FBF8ScyQ9e5JymxwVBZscSLUrt4dToQwyZ7HLc5UiLQaOBSQrYdD3yeIu7MYxb0cVNgvwP5zW8tp3BAFl/Y1sE+TnUZiH6uD7GBcdGD6CjPInW6LcG6A/nuLb7/D+Hv/7Zv9GfnELs+RY8YfYgCQLT6hHM4AFkCMAEytN5AWdIuWbU6l07/vJHBKzUQUcAge8+WeUoEKnknAjx5NLW3nIhL8jRzELpMj85hfl2AldvXsGtPP6bwDMZsAUvSmK+TUsuigQZaY3/jgwXCdltQQK0AihBlyFxvO2YNIEz7QMov4PkAadDBcjCF2cNSwB8PfqT9VkB92CLUClAmHgnsdKjpYOYPdFtW8nfBwOYniHrXcx4BFiViGTiEl2MtCpHrxWBLRUJ2ZFBBUJkzzkC8SJfsLzB0sZiydGsLPkQgJNmbEBVapGZGidyDksckRT9uMOz1ewQBOs6ot0HLqKR1TGN4kEPgxXwPqa5493QwAzxfUQOHi1x73QGGS6YJHPQzuGCg7aVVGwmV0fUDt0a/dYA/eEcP3Gl+bi8N744SNLGi0+6ctXO4FH5PpTtKRf6Tk6WCM4NnJUEzsiyGtn8WprQTeyW0tuKgoP4KcSn4QYMoznETWfvUncBDYqlluk0StgKtmQtlv4sIU0WCMgRMz/WkBGw2zrheYYWGSwBHhfZbDcxnFwarDmTLmt0aAAVuppKA5YalimS0QZ7nel3bTXDS4aXHK9D/uslRE3J0oHxlgja5vN9VDpZu0YwLbgZpaDFisZ2aRbGfL7kC7Wfl1UaWuCZlev9yQR0eX3ovkqWNkpkzguYkayxmPMilzN7pvsqeHfC7Nlw/yUDMmWhHON/hiDMmeUgA71gKLF1NCp1RAzm4rRrXRj6LTulioL8ZWwZvivQpPheuFwWAnzsQXShzJFpPYOroKlN1ui3BugP50jfL5/r8//iT/zv/58mpxCSzIpDOC7uwunyBI4K8ss6OM1b+SK3SlSZHcssPAJBssiBhicR4SRJgAEKpMhndF9NHt3UqsPAOyV0O04ukBzvJ0GQIobNfBHvO6kSSAYJs2gvfQSA5gzktmt3pkxqmj6OQElMlX4aDVIYIDgPtm9AUuMmfu8uLA7ehaxaiJMjn0ODgGjjEfueHQEOPa9yDm0hcakVAvMZMv6DgxNkujnz7cODI3a0LJclLIqKGW9NOjcCOp1ns5KVLf3xBNC1AjSBPS1szJwRnJfIonM8D2LUpElz80+r/nNrFfTF33yC78sUn+skscyKeVfjVD4P7g2VOqhzUBuFOle4XGmJ1PssB6gnBTfHINri85VByd6ffYHKkWhNg7WgeLQG6DVAf0hH8/zPx/TNKVTY8dGil8obFC26X99DFvgeb3GnhYGTBX2JHXugW+8H0ID4WgN7HG2lkxS37AWDEwXyU+6z4UKVFbClACXSo0laIGaI16XEONrm1xyY1HB33BKBOtbpKyxNxKIlU0GSdGBipVYB36jB2oLkY7Q85aVR5gzcdh5nExhsXIFkuIVgPYDFySG8+9U/go2tTZjs7rLXmfVdbZuOhzUFUOO5HUM1O4J8hgvVwQHcfe8efHB/Dxa4gFDu9cEDWYwe7Z/xIkGOkZpdLiShlOB9zx6giW23WiD0O46cCoPInpesQRfc8MNNKY3o+MycTaT+Z2G1Jck2PK0bAbZpg82OXuvg0oDucWmIgovFjscNLSR18B1a/vdZjq95W8HGgAql9Cg5365x7UWtQKDAbL0gFD8q1+i3BugP5xgePfcShx9t5eWNV5505Xl1AAfLrwPyRTirU2bOZwVNVDG8Xa5b2fL6LzoBEm3/R8hQfYszFf0SBNMKt+ERBydZLvQRg6OweQK349MZHO4dwq0Rwio1aLSSjkcXagDJrWUHArM+9vyKYySqbZga4lm58EFvq5Pz4uJhgtcfjiAdbyE4b7CX2w7GsP3iZ+A7f/QH8Ae/+xsw2boCOzdvwq2b1+HK9TOoccEgMI9osclnkE+P4Hj/Abz55lvwnTffhf2DU5Y3Fkg7H+1N4WxRwuHxFF67vc3Pk4prNCxXDMkgcad8XtI5KWy8EoAuci4KkqTBWRuFSBvUtEJOj0bCNdi54dSJkVeSxSElQ8PWOt4laFGTk+x6/gsebsANK/J6glrxmNxb2cVQ6NIc3+d6hO+dwcUtqsDV4heXQuFjHxPTu0D05myNfmuA/nCOrf364/C++O7BJ07uJiDcK96G+fJbMMOv/CGy5tPSwLwxbBdjB67U5qTZpJViIeUvE3jm5ZxBI0sGvNcmFjnIBry95i45/NJTRCbhxPHRDOqvEOCdsL9488oVpvh+Ogux77Iq1UYmudIRnl/UWMn1MNDLl3BBnvEEks4pTgeQDifMoG2agcXzwnuB8c4NeOMLfwW+8e234Dd+80/gBAHqzp0b8M/8xTfghz/3Sdjcvca+57rMYXp2AnffeQ++8Z234MH9Qzg6WcLDE/IrVwyYpCtfmSSwsTniImbNBUBqUU+CdEOs2f/Jtjqac0jyRl6w84M1Zw5Dyvl3dB88KV2tf6Q9N+xvpvsmKUhyT9SpLV2apsuEZlw3XbwovU+1caG70vmZhUYaVijWlFw5tWnCNHZnJDua3DXJxXb5ANsnn7uyRr81QH84x3e37HN9/j8jDJoKhD5/Y3LZdZflCezNvgonyykcRFvIoA3MEAhqbadmy5qm0TE4M1pbGAyG4rvFL3aaJDAeT7grkBjbkPI5qDilw2IpoMez33f2TuG9vRO4srMBP/0jY3iBfh6Z0B7Nj0FghShd1Y7Zovf2MovudXkyGbQSY8oukCEuDJTJjMw5SvEcuANRfk97otuf+jz8wr/z78Jk40vwD//gT+Dtd+7B/UeH8HDvCH70c5+AwTBjVrt/eAzvvnsf3r93APf2p3DvaA7zomaNfIiPszMZwPXdEfui6WxoIeIEvKRhKcY1HpQlCIrkDfKME4MmzZo1ZwRo79hg5tyIh5k6G9lhws6MhncrBS9cLQf2d/GhuqMA1fXVH257+R8kl8RWWHcD3XgsAmt6bcnJwXscJ8VfqxNZLhlIY/ssui3Xuf1rgP6Qjtm159fj+dc+/yV2tUHXoLJz+bUdAvIBnM0+AOS0cFzGMEWAzpuGC34tta5oip0UA4G3yxQMRI4L0k0JKCgwaTjeYLtYmqTIjjPWZG2CoGPmzNzEGWY5qKjBL/d0njMzpLmFlCNNQBv1woaIpbYEyq0JgoZn1bzF9g0sINSRdOZkNIEB+Z0JnDlgyUhXIYjc0LgI7nzis/DFX3Twxqdfgm984zvw9e+8C1/99vfh+GQKt67tcHPLweEZvP/wGD7YP4OHpzkvSptZCuNBDMM0gskI2f/2CIajjFVwAl66/4ja3LmDsBWApuJhUYmDo5YhBhQUtVwWWlysuQGFJSMuCkYM0NJ2rqyXRlVVIn1E1uds6G5CQ/n51fFTY8GF15A15dboIiaZ0dLdKIH+Cx6QgOcWl9BYyZb2U9p/AEDDz7/0P5r3/69fXHvt1gD97I+9+XOtQZuexDFRmePCg76I82ofTqopnJoBHFcJzEgYJudFEiG7LiUc3mjhq5UhpBzMj9tyPxh2jOBMj0r2sclEppsQoEZtE7IkBDq0IIeAEVMTCE0fSWNOUbMM0jZ4iAPAeO9Bow0kmuAmzFFvQ7ozLgpJNsa/ZxLngcze4PnZeMDFQ2+BAzuA8fXX4JM/msDW1Svw8ksvwFe+/l146+4D+ODBEevtp/MCDqfkU67ZT8zgnFoYDpBBZwky8AxGk4yDokjGoFZvmTQj2wQG6FqKlhyQpIMJambRJYN3owVBLsoRtlrNHCFLID95eR/o9aewfh8I6CGyy+M36u/WJTeMwZLr8Y7EaFHRX0B2JsSiyfbnyJbSLqFNqPCXssxxyXc9hl6x8PgnszVArwH62R+Hy+faxRGB+FUzBeity65IWuO02IOTpoBpvA3zJuKGE473JL8sRX8qY5M/pJOPC2JctKJQe8pNzmA2O2M9m1wd9AWn8VN5mask0ovdDAnFTthz5HOLhT0z4IrRt9OZG9FGyWrn1HfWqC+bWs1ZFqB7JEBE1mo0VYkZZiRqqvOoRgXM4RaMrhrWfuj3FJdKQwm+8/YH8OhghoBbwwDPIxsPYJCQf9vy7wcZAvQwhdE4Y52ddfOKhsxWvGDJUF0fzN9qtod8llrNyyapg6QhdlQ0CrYuYsbf8vQZdZbo8AC+Bwb8updSJ8AcGdBinoj2rX+VvedZ9g7Sl+O7Cvut3HilnFg+ZarEc6iApq2nl4WFDXRn5kHavD3ceKYf7J9c4+0aoOnYLZOPA0CPfpDEUdY5HJV7kEcDKOwQCh/HSR1/iwWDgk+N88UnZqFkpSNw4KkjQ/YB54sZgnPCAMOZFG3NqWy6Ie9EFaO+XaeaNrkcYgJrEwCa5Iso8horgZnqK37rrc0XkfFFL2SZZc6PaYslBxfRAuHGrbaONxLExI8f8/3ECTLpreucN0LnsJjPeeHZGJ/hedOYqZovTncQtJDEKYF0DNlwIIuY0QjQopDo0FKaW3izQbezlocZ8EQaztTAi5UXgKQb1t5by/+WXGq9ngJxowNf6VmzDAI+nN8zZ8HcKAIfEB1eIm+UY7nIZ1EbE3zqMXdnGo4fLXDXVEcVu1GSQMAfa1YZwblmlWbaNmsIXAP0Mz+qcfq8A/QAuiLhpQw6bxbImvFihjCvDOc0xNzp53jb7loTsvDFcewCYMmMQWHA+WIuoftxGhwBOQL8sii6ECIFHY7YxNvTYyyWS2bZyQCZqskEabwHOBKGyPP2uINEtXBv9/Vh9eRDrqjJw7Etj86SwDgbjWCL4jPjJGiyAmyN/MUCa9WjrV3YKpdw8w4Cc1nD9vYMLCXW4fkdHZ/C6dmMh7Y6Ix2CviWdZ/g5GRxLGvRyumRgJzZKz5IWqUGW8kJDRdQoIXCMWfJo1a3hdASKZHdIxrRXF+j1IY2+rGiKCgQdv+PQsoOxvSEFEs1hegxYQ/shTMkKbe1GdyGzAh+D7j2RwH8XXapa0GI/VpDmppVqUa8rhWuAfvaHi7KPE4O+9CgpYhK3tQt8G6mVmL/yCDyLcikjnkwX++6T2QJA6BSRSgPnads+oAGslG1MlrJlLqOuvGAcZuWJm5ecC4v5ksP+NzYgCKzG9KaAsFYddVEZ2rnR1Braj+dKMg3lKFPYEDWAlAjW9JjjzU0G72gwZJAmAIwiFTuMlNZI2ohHExgiSO/evM3demR927xxFRn4CB69/z7cffcuHB0dMZtuNNvDp/TxOKuygDmC89npDM4IpMuGz3k4TGBH5ZtYA5eoAYfDl1ykDTJOZ59E0H+RWk3oIz2cnBa5f75dgqsCrtMXpSs+mE4Ygo4LQ+++hVGXrXQU0ntmskZ3SFXvvh4zQk/0MlQCEGXRulllDdAfwrGVfSw06KEynosXIZoJWCNrRDCtEDBqLcJRqzFt1Zu22ya3ytBCfxkHJVkO6iFNldqc6TcUUUrOBWpZpivSkFirmqvps2hjuYhGTo5SvGOdf5c0WN3m+2RRmpQdRZE6FRwvIk7HRpEbYjmfIYgewsHeAf55xkNraeZggSyepI4kGyFbziQjgxi1lbQ6EoIj6nS0V8Egg0yyIevYG9dvSdGSNPrZCS5WJcR5zrMBOWWOfM+t5GtQDOnZ0Snc2z+Fdw9xgcCnc20zg9vRhHcKxJ5J5vCNOxWeO/NO1wadPNT1fLaGa0MDUM6dlm2fOgvDBm3zdjLPsK/th4IhdDY8P26LFsi61WYWntZuxPHM2kgVbndJ7KhPtKPPVzS8e7ZGwDVAP/vjgz+dPr8n/+O8042hKxReeBCLypsZAk2GIJ0zSLO8w26DGnwoPrceew1Tv7zkSSYw5oxiAhONuKS/UyGMvvysReP2nhwaBGTeEhdbadvO8SFOZtLq3DaiA7cWHyfR7AknGSCRdWEiCIMZpeLhY/F0FlxcCFDLMoezkxN45/v34StvPYB7JzPYGKbwhfv7kOIiklHexPU7YAYZg2Q5m0I5RSCfnkJT5Pykks0N2Lp5DYz6p4/v34V73/4aPPz+XTibLWWqNgOjdFTSwlQtSzg7nsE7D8/ge4c50J6BHB+TLIPdzRFsTcYwmdDorIzZM3UNSla0tqW3XeiF6+1WuJVeOzbzsmW3RQDcXuYGh/WzRm20EOpCJGvwPINGQSvrZudIK0BNiyRd5N5wJ+Rm+IFx8p5eHDs67unQkSnXJo41QH8IR1M91x88VVj5O3tptZO+zLElx0UKRUmzR9rQJNI6HzjvOmoHEApMUSxve6s1Irp+GqWaAcH9yRAPIgazAYJjSZTR+ZFSuD8maQLv4xSBjzVeZKdGrXZpk0AbgXa0iY/XcvaEopPVAhkx6jpimYOcI2T1u4EA+wYC/e7RBE6nBfzx19+HUwTQL7z7EF575SVOeMsPDmC5dwj5bA4VPm5TyvNNR0O49slXYOf1V2BxdgYfvPUmPPjgARxPc5gVNRQ1Z/QxSNPLQ6yWWr7vnxZwkOPt4xSub2XwwpUJvHhjC65f34GdnQ0YIUDHScJFSHpdHGdDU4dhV7gDYwJbpedNuxjK36DuQRqY0LQKur18Z5lF6HgHQFqy0a5CE2ZBul7fn9OPhBw1y0zCoh1np9Brn+O/T6VK4C79/Ht5g50c258xawRcA/SzP3728/BxAGi78q08d3CnH35BF/kZZ2KwR4C0T9q6OynmOeNzH9pQvPLWOCqOeZ+udB32sjdiy4yaWPEQWWtRSSCSB1ea4beRpmxn2zs6gxcRLIGnlzSSa9FadjjQ9p3vmzzGPCuAso4lhpNAKqH5f2bEj50ga925sgtvvPEabG5fgZ1rt2A6b+BbX/s2vPvmd+HNr/wOhVeDKyuwVQ2xuiNaEDdKYk/g7nsPYfAP/4QXq2lRwQky5JO8glMCytqpNCBZG7mjCTPE8GO4vTlAMB4iKG/CzevbcOXKFmxubcIIQZ+cLST50GLWD+zv7IdenpAgKn7+tVymPMmmYdbdG/8K3ipHjLh2EEKV+mEZrp935F11KhtV/Lra0N3Z8nJOhdBColfjS4F3xcXx07f+rvl/vvavrWn0GqCf7XF052PzmTNP+hWBxrIhgI66pobGhW4zP6CV+bbToaSRdMoZ1aSbVpsgaNuvA2MpZ4OiPGiLTu3RWZogA615vfAtynQ/ZW1hHxnu6XQGo/GE2RzlcURNxJqtAFDLUok8kTqI7Ox8wPuO7YBdG8MR3n6nhdHmFuzcegXGuzcgGU7gp/7FvwJn338LHv7Tr8HZgwPIz3IpFiJbn+HCcLi/D0cH+/DB0QHcPzyBvDplhkkZ2Etqv7YyAJYCoGLfcIN/Hyb4s5QaVwawfWUEV29uIjBvclrexsYYxsOM9WdixMtlxel9HOzPk1WaEJ7Bz8PKboV1YW5wafA8Wjhd1lwo7DRlX+7rXCmtSkEMtmq3Mz0w9sVXv+CyhNK4cL8xDa8lU3bkGJwpttXvluDiyNGVZpWZG6wBeg3Qz/ao/38wDpOdDCaFRZXDvEjxrzZ02/mCXagQtjIphdiz14OtDN/mCw8PYVtey+BHF9ZsnWyhsziGmVYJGe6Nz30AODhawMHpDK5dkXZoaj3mxgo8tyg2zJ65piazsPlC7JfnIoJMWuHHRDY9GI5htH0VUrKFkJWvLjnTY/jqq/DqcAjm3gOIkfZSkBJcvwWIrMBjYeYLmN17H975vd+G7339a1DYBLKNLfZ7F8cncHx0CsezBZzhuc0RDWd4FkuyU2cWRjsIzjc2YXtnAyYbI2TNBM4jyLKUX5diroH8nFpHLd6i0fMsRLLWGQu+JZ1kDbbWIXieIHuel6vWQr+wrnqc9WLFihdp+3cw2jkThsVIwJLkbxAxJ5TdHRuOTW15AAIyfVsGUeSS73vIhKZLfWs93HsN0M/4+OC95zgs6RN/xuvR1Ow2x230Eqo25n2rNZ7Jua7qDxJmRAxSguPbUHBq2876Ra4GCuanAqKwtJopOGVyDMjJQFv9WjrtWp6nJ5a+4+kC7j04gZdv5TCa4G0KaS+3rEmnUjiruw49iQNppFjJiwNeLzHswSYXBuvjrK2WglqUd4Gs0CG7hTqH5oM9qPYegdnbAzvZAnv1Ghhk3ZMbV+EzP/xZ+MTOJkTb2zBAUC8oHvXr34J3v/0dePPde9BM55xNklDGyNDhQhAjxm8gOE8QmDMYpAO80HOVPA0KUSKv94LBuWQLX0Pas9ESgZXGlEZ3H5Um2i3zCo5mlUzqdmYlvKgvc3ggJRmIOgVj9UVK1r8JLdsuDJZ1/JoRpFKuNAklOxPD772xFO86x8cqgkPmggHwffbMX5KhidcouAboZ3tsDT8W0yKeWMEhzTlvp9BGRsYnMZhK9b51XfC7ZbZrQ25zaPvmpDTg35U6zZu30MQE6yqE1hNAEzgT+2aADpGWEnhEIPTOvQN45YUD2Ngcs32M7oM73ay0fNO58mNL4rzqrEbm8RFrjBNI0pT/ZJZIDokm4rAnI2I7tKT7bmQA18aQLBcAR1Mw+/vg3noTXCTWPioa1lUJMb4OKVkBz2YwPdqH2XQGS3KLDCwUscM/gYugY2TMk/GQ5xPGfA6yELFdER9PJnbLvEFyq5D+LKAZsQebg5V4x1az75yeI7Xa788KzkRx3at94Zvreu4MbjJiYHYM6lZbvXVFkyYU/+pRGz+P1cKFGW80xlMZ0ECZ5gx/V4TPwAVWu8fyOCZZvUbBNUA/22OUJB8XcDZPpNAEYDG9iREDG+UVl9ygQoW4DpxJryTw9rczGnhEvyd3Q+vT1LTYRRpno0FJkktRa1eg2n8jF5pdosTCo5MZfOt79+HqlW3Y3ZXmljgqBYTSGBLjdHqKii/qVogU5AyHJkUaVo/PqcGfVdrWbKVZhOQKmuZSDPB8riGIUgQq7h4QQcHNFgjOJfunSx4UIC6HOUWPnk7hAV5nL2vhEGFpHoneOxylXAQcDFJeTGiBSMn3TfnQeA4l3t8C739O3ZIczC+MmMdYaUs3gzPLGjUXUel1Ppzl8GhWcnHWqsYcaPHKewehkQg0IpQKhrGT5DrohfkD9PVo+UGjOjul5aWZuHcSM8erVL3G/scOn8cRADqJizUKrgH6GT+ptvi4gPOlAM3b2Fo8wERUib0VOoaKfhdrOzcFqRE4+22yt4gQK1vqpGmGZd9SrMVBp50mzJabNozBapQ9x6qPelfIW+/tcUb0j3wmgc2JhdxY9f1y6Ibkbmj8j1UphYttbQ+4nQuDZMkfLeJ5xLGl0lKNV6kamFc5nFlkt/EUAfkUqmIG+ckcwTSHvKy5oLlEtj9HUF/gTZc0/y9uWQVPbQxDZMxjBGeSNVIE5gG1qqcDTvmj16jh8Va5sOec8p8rbnBxTgqOzJxZv5fUO1oUadwV2fbeP0ZAr2nxizh8qm+XMyvlwa6bURpRNEtb3zej3mgZqNv7UPRYN7l3KrJYDhooyC+e5vjzMmSuXDCbMFOQDk6Oul1r0GuAfsZHOnzuWcEPZNBUdMvrA+mGoyQ2Y0LiW6zpaF7W8JIHX0NBtqS4TON0PBV0gNzIRA5P/MTXW3NaG7HxqpUQ+oStY/wd56YXCrD/p99+F4ZZCm+8eid0H6YswcS6pxf921LiXms5zlQ67qRayQ0vDbHpVsCt0XyOAGSWWXdiE/Yh75+dwfv79+HRw2M4Pp7DLC91YCupKTLFhboYyYlCiXa0syKHynA4hPFkjCx6CFlG4JzyyC8qVra80JWsPTN7XiyRTVcyBgu6jj9a9GSCTMWF0SmC892DOZwuW9bejc/U6HednG8ccZ3UIdKR6NmxLrpG28G9h5oW1oHOAqgo64N3TbiYIOTOXAFjO8P3RQKuvMRx7iNEjSrDPkAPj9YguAboZ/2kyufTgP9Xf+zX+1ZY+2QGTZrzQvzP1DzBX/KWmSoJCjXroZKoFjbGtC3nKRyK/m33aIrhMvGEi4wm3Jb/pEQ5XTLIOpdzF51GAJGFLU3geDqHP/nGXc5gfunFG8ySSUIgwKUx4W3jh8XW7LPm5DhtiW7YnocLQWPZucEJcUaYvmM3iaTVkxSSDDMEV+nwGyQDXCCkHXtCXY+0f9cpLOwOsdIUQ3kadI4UgEQAPSKnBt2e2PMgFeueE6mAHBuLvBsIW5aNSDsKtq1OSil5onkNp7MC3juaw8GCNPOUOxmFPT++rF40zrWfOBhUa1UowmsAkhiYJSJLNdogQ3kc+PBsr5tHc9wRzDsnz+NWO5I3fKodSx3b31mD4Bqgn/GRLZ9ba2cfnKMf9P60RuI4uXW5aQLLkyGo6uboAYPvMDPQeXK9tklKNA8pha7r0Af085RuvqGVmX0S7oFA1EpCnBX7Ho2M2js5gz9FJk06bvtiw/a5iRkp4CpAE7PF842biNl5S3kfdQwNgrYlBk3dkFY3+l74blp9TCk+psikR9kINicTqHYrdl7kyHRLBn0JaiK2zQyaskDwQh2BKTHmLOOpMWSlI4BOEeDJNVHXArqcbsfsuWB23LT+RZLXqNEp4CQvHM9yeO+AwLniXOvIRBCavlvoRGTd4Zh+Up3pRA/bZ9N+qIHpQo+4QYgCrvA8K669StUQ1wSeXdhwNnQOdTJXBt1eFty/0u59ensNgmuAftZPavu5lja8TzXRL9GlIocz+O2MEk5Mq8JEZ81scP3QeOhCIKADDR9Ux3o2SyINA5UKHytbcL5TK4VH32bMYCuDBVn+YA0XmeOjgzP4Wqt2vFjym4dJwlKIp3S2ou6/RoCuqvFp1AzaJH/QokN/cgCnhZDh4YxMLRngeVYbFVy5ThNXMti5qloxjaPikVQL1oZJMrbEnqmt3EhONnUGpqnkTaf6dwI92gtQyFRVlngfS87TLoK0Ia83SxBB2qjhcLqEdw5mcLSoNYBfHcw868p1QA0QGoM6mcOE9kEDTxC0PJOGzkEtr7W8b9OiZfdLVVsocHGps0qSqN2lY9/67d72dHsNgmuAfsZH9PyaOPpBST4T+lIN2vuJax5aqkHzqmP6Nmhu927dSkpa1268igzSjd2G39teAJAMlG4lHVNbyxnVeXK4J4lWmibw7wfHc/jm2/cVlAE2SFZAtgpDvCDbtbbm4KW4iqGOG3GK0IV04FrawY1eyNJm1HPM6Xgka4x2YOfWq/Aic/6Iu+iqfAFlPkeAnnNC3mIxh/l8zlIFh0DpAAMO749ijlvlBYk7AAmMS57YvViIvFGz3VBGucpMRFnE6L72EZy/j+B8TMyZwVmkGHyQXoRo29uv+NS786i86o2WaVny/lmdbSi/ld1Ew23e+hMrPnJDizSFTjty84xZt3cWLnNyrDSrPHq4zuNYA/QzPm68+5w2qnwqMOdMt6KX5kE7BI9lVMkkE811CMl1YeQSrEgcYavd88iGbbdzmvXsVvMg/D2Qtu1sBzK8DZd8ZcNitlU9WhszDAXmL+Du3QcIxA52d7dgazRC0Juw95jaKwjUBCgRmJG9RpEMsyUZo40kSEgChCJmwiyxQMRNLdFghJcNMPh3YpSuXEC9PIG6wC1+TeOrSmk0mU1hdnoCc/yTGk2KUnI0FPdYky/bksGYCp3EnBccxFSLc0NDpxzPSRQJZO90Ad87mMPJstasJG3F5uCihp0nxkAYl+WJs0+m4+EBYIIjQ3K0nc8r5YKv8Yuo04mQOq6saqWLkF5TSnpN05iHNQxNBaP0Ju5KbnM6HneBXgzQK+6gwyvRGgXXAP1sj9nzmy7QD+ufPAmgGwKVNu/kDjA9ndmElCXXn+XRs3t131avY5gwiir8TMGDJ330Io25d8RJQ4pYuZT9hQWhldQNBBNyQZzsHyDgLWE2mfDk8Cu729BuTPh6zKIJlCkbA9l0VMY8p9D1IlJBQdpEktthUwTnjMB5wOyWXCe0UPBOgsLxq4avHyUZjPFhKNR+hMy9WC6RWVNnIDWdSKCRa2T3IeA8h9lsgax7ySxZMrWjbq5gVTM4v63gLGFFNkxE8MuedXVoynlMrujpyn3ro7ckthpDGvksf9ddyyiLb2WsN1nDmeGf4Af+yphkpGsQ2TGfU2hYuuCj4zdX9I/PLtY2uzVAP+Njecc+zwDdH3d16VEZ3I7Ttp0aNnRukp9jGvIfrIBk1/Pto/VXEaO/yW1F+Q0M03qQNpyCrLUto17crmOxL50wCrClTthei8BWI/hNywKWixmy2BzBbhearYncKpJRVOR+YOcFFe0ikjsoc1l1ayss2hJ7Tof4yc2k1dq1Er5C8xipPZyGD1BruOrmrD0nCVvp6HeujrlLsLXySpEGXpJrY76A6XTGF2pKqWrfddkyaJLmfHBGssacQ5AiAyu2OeeXQS8LqaWwWwaNjv/q5I0wn/DcOyKLKj01q68PhPe40V0NuVNkapfo/5vIpLP4Kn6AIvDv8iUAXfdBOq7XAL0G6Gd8zOvnFqATBejxkwHaQdHSeKZKnQChrNd91QNwutAQIepEx98uToYwF+6FfViPJLApD3eu5wbpgbRiEFnR5tTIgTcY0cQWAh4E6QPKc14WUOTbnP7Gt9JBADIoIGGnhlWHCAE2TQJgjddo7JsTEKSGFlcXiM1zvCwRp+esKfswI9/+6BCcjTa/MABS8w61aCObJp16Oj3jsVeLOenVrT5H0dpL/PcJ/vzeCe4GlpU0kqjP2WjS3HkN4XGN2a0waXOJ9NtPsuNuUFokyV2j129V9qE2fZa38HmOEwPjUQq2TaXLETo3yCUMOgD03tU1CK4B+hkf6eL50zj+7Z/+ki8QZj+IQdOzq0pqzFiyLkx6JOm5jfH+V3gMMsyK8uhC9c8npblzgOFlC8+6PdcL7gQ/e7AVfda7RLrGC9ABtI24CxBgM0sasy4wsyncL0t8HpVkb/B+XZzYbKXTxDyO89C2dNaaGyr2FSK8EEiSnQ9fi6aYQZPPoM0XXBglbZp1XW0RZysfyRlkm9OpMwXNI1zQLMIzOD07Q5Cec9eg0wWI/syROVOH4HRZ8vgqp8W5Tk/ul1xd2HmEGY3npKXzMc/mAoD2PZdO9SRruoWR7YxIndNIJuPQsIZxbJA94w8Kmso+CJq37S0i5z4+YS2/f3NdJFwD9LMG6MFzGQBjlUEPVX/eupxA0/Y1xy9qDk076PDWf+1Mr0BoenPu+tc7940FP5bK9vy35hz3M6GO1U2oNj0G3u+w0J825K5oGgnL1/tMkPmNyM/blLD3aE9iPMkx4RtSVKixuo2XQSySF+ILcoYYMbVTtyWC8hmC8xRBeg41smiSPiInw2VpNFVT5ty+XVMbOE3upswOBuc5AvMpHJ+ewMnpFOYIwtzWri6MRUHgXMASry/tP6bbZej8KnfuOYexVn1w7t8ELmfP/fGxffHETzV3yv8zQ2FQEbfzU8DSzohKriOIqGShDDqm39voUpLu14ZFtgboNUA/4+P09LmsEp7Xn3cuZ9AOZvUhAl0jkz5Uq/TMr+/egK7OtjKMFOA8fTMBbM8/mtXf2RBk7EIxsg/wfZ4oIC5Aw+3jbatBQ0btfxZGlCqHyH1ydMzZFyXFed4gplspo27FxkddjOSQMCxogyUGHS0FIIkZF1OokT3XdB/Fkgt0cVpyyzUBdE0LAN635DqXsMQ/57M5nJwcw9ERXU55onfFxUWJdcqR2Z8tK871sCw1uL7S3APZdnWX0uPA4Urmwinb53Ys8prZ3j1Y09UW2MHRyNqb8A8ku3tjEMHOEHcd7RVczK6ykCTj0CLecVzwuD7Rju/lerV2cawB+hkfdfXcvhdefyb2fGkLQYMgdZy/w/IGaZJVC+p9bqWeZv00Ffc4b2o8GPsGig70Tc/NsXJDXxh0uoU3fYO0btz79j1j+iqKxnDIVpsKfXIa4lgYJhFvG2bzBdx97z7nX9y5mbMMwY4MZNluMoaGGjDIPpflEKW+nRoYgEl7LvMl5PMZTwknkE2zDOKklSGzCMjlgvzNS87YmM5mcHh0BHtH+7B/dAJnpwtk1K2GIDlu354XMuLKe8FXrMva5heKcO78fuQinzOEeoF/1UJx0PS2OyvSh+wCRO4wUINExMYeuPHxd7IWxlwMHiHijvB3mUa52suWhBH0ApP+LfclW//tf/XZVAr/hzXgrgEaj1uT53Lb1pc3ntjfVdVnMK33EJgtMmnL2jPo1Owu4rJdaekG9tM69dt6NwCEjkFQjTOCjvmuYo8ONX1MJzGr8/N6f/VgbVhLloB/mkPImRyukVQ8vHKClHALP4lLagB5sAcLZLME2LduXIWq3GZWTOlzRTaAbBlzB6CNZXw4sW2aBkNDXcm/TPJFnGQwrB0MBi0DeMENKzlMFws4mU7h6OQE9g/2YO/wjCd+08xFXvgIzGsC6EY9zR2Isp5r+ux5ZfkJ0Hpe1lgpujoX2PRKTrQz6o12vRfQdgFXnEoou5ZEq4WULLg5SuDmJv6soukzC3AcHWrCa37JQbuzDQVqBunJsSvXULgG6GenQcPz5eL4+Z/5u339+YnyBn1rl8U+5NUMFo2FOYI0ywHqqvAAYtx5xHQrjFe+wG2vOuhW8cTAY3GV1seS9n/h+v3gPQ6pbFw0V1k4SE/mNDp8pjT+kOWZ8HsL44HMS1zMT+Cd7y/h5OQUbt+6Btev7sI2sujRcAjDgUw8iaXXmQGYJAsq8FHcKEkpFIZEaXN5ItoztX5P56Q3T+H49BgODo/h8GSKgI3Mu9LMa4r61I7LyOhGIxRJvd0QetzW9VosV9lztxHpgbMfW3VJhL9x/n3pbIy+FuA9zb6d3BcAN4cRbKS4g2iu4s/JF/8Qf/ESGFXLLwHpG3i5piSAyMBp/ku/3vzP3/yF5ml/zv/jNd6uAZqOyVHzvJ2yha5BhQD6yqXwjF/U4+JdmJOLo44h984z41amPxtf1NIWZOObKvpbbWdXwt37ncgrurXfsbOTou125H0kXz3JzuPrgYbS5SiwiC6RaNGUe0Eg3WqIPl2ffr+JjJpal2kg7BQZ7+HRCdy4sgPbW5swoSS7NGaLGT0OMWaSLmYIwsui4Lb2UZZBvsjZqse/L3KWNQjwj05P4PhsCQvqFOTca+GoJB0QO+WZgtWqdk/PRKJZz2HxKsT2CoDd3qVb9BR03cW2xgCoxj32IC13eEpYEkcQGgmAiqnRhyYUuhu4IORQwgf4/D+Hr+HmZfoz6GfrFbxQTNL7eDmhTdnnm6hZw+EaoJ/J4Z7P9yHTrScxm0vdqdTCfJDfhTluxxdNxrqkNZ0tTthbx3CD7YsYmu1+HrUydSWw6tAN2CuEQUewPfjwF990Vj4u+em/AzAZSZOzrQt2OcLTmDMwLMeDSrASstZK2jKs6aQT0tBHWQyDhOSGHPYfPoRTBFdKrtvanMCEM5xj1mCruuRJMjz1pKSZgS2PryIZhM6LCn/LooT5fAFn1EWYl1A1kotNbeZGXz96fArdL8PcRHW09Fmzc49/yMwqS3bnZB6/6JkVWdqtlgZ6skeIM/TTvJ3pvfbqj1b45x5H0uChwL9fw/X2LizgPgzNtgY3XXp8Ei/fwstdvBzgZf6FH/471b//m198qlr0X17j7Rqg6bg3TJ/H92GoAL37JIljUZ3ArNrnOM4Z5QI3Tqv9JgTbO7e6GWebVo9MUXu11XBnkgJKBDUbVOtu1y7Fvq7te4URh0S8/lBUt8IJCVBitcbJRJYIgTNiHRp0G7/QZpOWmy+cDgmQaFIKNRrje0myR10t4ORoCSfHRyKTaEJdyyOnKgZibt3usXeZF9hKkBSN9iKJBc9hlJjQ+GHVcVLxYINV+aFnBWdmXrcd73XB8N3bkazM4zbh1fCTUfryhlmxK3ZeRS9vhOVOqr2sOXNxlSev6HQXDva3uCjdg9h8AtpyAxbme7CVvISv3yi4QC44XgUZT/wWXu4riy4cwLqtcA3QT/947+j58UH/Z//63/PyhndvPLG366y4D8v2DLezCSwbq1NKjGKFgpOVIbISprbSRsF/JrifT6KYAZAADJY5O0GChxo0CKLvcfYNKz1d2Wk3nzkfy6OaKedsKIMGlRBo7l/C7FZ0VJI4iqU8ON0Tzz7UlnIKYwIntyfGPHAtdx5Sc0tOTSccDgWqpUtQf18mILyPYzxnfL6WrGja8OInn7PzhcC56Yas6pPSjj4TIjV4Ijq4S7Zoq0bnFbnaudWkpD6rDqp0F5zUTx10IQulW3BoYfSBSTm+aXmewhA/D3G0hMS+AfPyu3C8+A5spTuX+aD98Wm8fBsv7+Jln1j0L/8LX65/6Te/6NawuAbop3o8Z53eUU/eIH3wxpP0Z2LPizqHM5pJByAFLXNuW+06KTPkN/fGLlHYPY2moo49ArtlYcVCp6AbilXKkEGBmR5LQNDPu3Mc9hnm0a54PpzKGnI7ljoiSa+jBYL0cAEQGW9V4SIRThygj1DdPXNUqFz4rBp/fQW50GAjt+BB4s7vIqy6V6QYWLmupdr17HKu/zy6tE+NGvXn03of40q+s+v0pNDBZ01/N9KuaCHGQAjt912I3IzT81GblSB/bVahqd64sJ6VMcxmNWxEGVTRBzAc3YHUTGCefxMO8htwe/IXnuS/fh0vL4EUDOmzd4yXPDOwBug1QD/dY7GbPRfn+d/8pb/FhFbZM2nP10GKNxceRZPDzO1DFbdwuowZNALb7Hlq2eUQi8YrEkbNCN3qlz1FkBwPhyKHICO1CqC0jW5Jm9ZxTVYx0jNbuo5pVbOGNuihIYTJGQVcwZeIdV6d2G0FpOJIBs36wQDWZrxln1FAP/mejY8C7ek0rmdoCyOgqAdcdgnmSXWHHukN3XjuPOfvJQGqRGStXxQN+8sb13t+farcjSpcXSRNL070nMtFiqj+dbQhP4NrBCLM6AAXXVhsN2DWW/1KfM0OcgcHRQnX0hv42TjCnckRTNJX4WzxW3B09gfIoq/iv69f9srQM3wZLzf1s7dHLPrTw7XMsQbop3y8PH5uEvs9e95ScH5BNegLj8YhQCPRWUQWjkvL4538sBMPLlQg29nahEHK0URwdjaDalrxFzxm1iqFOiqi0bgpGpY6QEAnHZfagznnkgPqW93mt4FRW+Mngutj9hmzM7DSuUjFPgLj2MpcQCWOBHzke464m8bw+fAsb3wuy7nO07Nq5zPuYkUh+NiszEV0PWuE8c00PRhyZgWkQ1Z2j5U61Z9b18Wvet84LVrcqu7cudWid0LnPYk9DPcdmGEEpA+s4t2IlaQ+bSwxrgjX6d9Rb1qhvF74BuDbCo/KCF6OlrBhd6EoH8Lm+GdhUL+KEP81OJhdg+HOv4KL66Vf81eUEOwqSTgrcHOxhsU1QD/V46tH04/8Of7yvxS05w3dZt4BKd5crj83+8g0T+E+sud5Q3JE7QkZgwcx3J2NCWxubsiMPQ4hapmnpTTZmnRcHT3VqluDTyIWwCSQGKeWgfgkr5k5Rlw9FJueyBuaBqeOD6+funM95ZGV7AwqEorMIffL+RqRd1BoYwzNVWzHHGBUFd5F0XZAu9Lh2PNJhK5Gr7CvMtv+Tc9nhTweHuVCgbVzTRjdJbQ9vftxrm5Wzqez1q2mAXYOjc7RYXX6uLBoPqfGhD6VMJpMhwaYXp4p/YZ0+Pfxs/CJ6BCywQ0wCK2L8gwmwx+Go+V3YdH8IUzzz8H28LXLPlK3lBRc1c/h4X/0hS/n/+Xvf3HNotcA/fSOneFH+2n91//s/2F70sY11QLJ+vTGZbehCRkP59+E+8Uh7C81pJ4LVzI9g77M1KBBNjSWFogVlxVLGATA4/EQsuGIu/mKZclDZQmoawJ2JwU8trgZ0WlJo42tDfjXNbf0Au1Wguehs5MpcNJ9Jex/tgzS3KxiROKIYi1+8XBX+tuQC4BTHiKrW3lm722QbromadehIFXxjHvcn2xW/07nZFWuESbfZ9pmNWxK8ZGKrT53tG66dvXzIO31ZnOuN6hvfeRinxMOTQ4VZ0xPGnI8wkwsivJ+WJ+op9IGmH6oldyW5Kv9IoL7mYOdaA93KzdgkR/iIvsKJObTCOB/iED9ddgavvokLfoF/QyS/55awKOJXcsca4B+iscryUdX4viln/lVTxyHurV8EWjYFcDn9OcXHrPqEO5OvwvvLQw0pOnid0gyOCR3mexj28icaUq1YyC0nGVBIDscDmA0HsNwPMFtMM3dKxnAIyNZHsSy6YGX9RKOlzZIJsyqNbTeKKB4lTSQV+dntnT2BZI2SCMeIgizY8SK1OGT8mgtSIg1kvSBCwYlz/HjEIuuKlhMp1w4dMZ2BbPeAtDvfhTUtb0CnP9Vu0pnFdyC4tHFznX6sDsnTQih5V/X2mrt/GLgLqTR0A9JMueiPn0qXeg2pOfYcOK01AfYLy7PyVv8uujWbuHzA2zpdwu8/f06hhfjQxhWx7hTymCeH8MkfQOmCM6z6k1YVlMYJZem195ReY10aGqUOv3ExKxljjVAP71jPP9I2zi87rytXw6yO/3Ik9gzHe/PvwvfnO7DqYtYdqBsYraJtVKUywYZgvCIfbGUctawaNoiKA9hMBoxuyZQpnbnDAGbgLzIc7BJrPYzzxRbmdYho1IF/0zIqOtYnFJpv+sPc/Z0ejaxz81BwgAds63PdhnPOrjV5+nz3D0a/o3ntbm1iSBdcsAR0FBcp5ZBtTO4XqJel1ltw7gCE6bGmABw0Gus6dBZ78PLCEFX9/GmmmsCsgg1OvncXgDKXSe9RKSalZ3Eagu8TwZcmRbpuvS/fhqosW0oykJoXMGdUuQ40a7iRh2AvdzCflzBpn2EW7KbUCAgb45eh8HyUzArvgWn+XswiD9zWfMKMegb+nmkHV3yCz/068Xv/PHabrcG6Kd0PMg/ml2r/8nP/y0/c5DozG1lzj+Kl5980u3y6gz++PiPYZ+sbggAs7yGaSkjSSm/mL70GxsTliw8YFLeMX2ZB5RfMczYe3x2esqgvTHZxi92w2H6GQJ1hb+jBDffmBKpNc93pYSOOuM7GYIrd2ULDyyVIFgiQG9nMWwMEpE5CKBjGxpk6MIzYHUQKskuPCgW72OEC0pRbkpOB0kd2pQRpI6epzsIxoykttMoTDCuKWNuQ8Rf+5j+4Vmv6/RhZ7U7UwBdfNOrtPnxIPxuVFg3ztH0yL8LurfRVcb1euuNUvvWiE8kMl1olX9ajabZXRni+4rf3EcLw8z+uGjhXVxor5p92GhyGGY38XwpivQNODz9ChzNvgGb2evIogeXSR3XoSsU0ufTJHtru90aoJ/ScX/+0ZPQ/rt/42/3i4LEWF5X5vxTIKE1lx5fOflHeHkfEgQ9kjP2pzVnRvDYJvyCZlmGTDlj1mqRllKxjSZa07/JrUF+4ZPpMbdEX712ja9//OgRBw0Nx2NISRZZLINc0Z7HLuhm4rU6Obz/NSepwjmRLgzpy3i5vpFx1yDhIhUKyblB7J4zObhwKNkgDBhWWsgHCmrN5gQqml84I3tbzYKsZ5ph1FSo/nV6tBOUEweK7axyhl0ptJipla0xniZ3gxzbrnhn9XzESCKTy+u27UVnKDiHhpJ+eIn823iTtYd1P35Frxec0s6Duw2TWoitR70ORP+IfkDvBL+1o5RkL1ysSyoWAnywtHA7WsJm/gB2Nz6D51sjiF/F1/kqnBRvw6KcQRrhjubi5hWy2u3oZ5N16JPxWodeA/TTelLuo7X4/7f/5q8Z6Nq5fVjNDyk4v/zExWb2DvzOyR9DmyBLTiN4e7+EaVFzVjFZsQbZAIajEQMx6bnEqJec0lZBTMyYZu7NFgwwN29cR6Y9hqPjEzhFNr0xGTGYJmnaFfyopRkZp9XWYgPddl+aNaCb5G06Fkn4TcCLZwW3xwPYGg1YIokt6IBTkjSkMCjXtcKctX/DaZgTLRAjkl8mYw5TcoUTX3brkbSTC0wYigsC4q3KGpoX0m8i8Xq1CWy1M661rudutpoK6P/Ek6sJpC/5TJmeHbqFzobo+vJ3P9q1H896zhtNOwzubGwlmyRSLdo309CiUTbEmAWgx5GDhTYKnVS4c2wiuF0/gGV1guA8wvtZQOo2oYRH+Jl5gLeZXAbQN/RzuaHyW7SM1na7NUA/pcPc+MhlcVhlJluq+f0FvPxFvHz+STda1nP43cPfgv38CLenCdw7KeAhUqaCRjC1lHecQIbgPEBGzBIBMmcKBaILff9pKshivuQv/Z07t2F3d5enVu893IM8X8LO9ibENCTQCLP1e/yWGZzkPPhuNvortURXzkHXu9cBD+nKVLScZBbubA8hS2POwEh4uGkkFytuDtPToSNNxOeoz5YkEseL0QQBmoqZLY2goswR9jdbkStaVcRNL5vZdElyXHBzeoa9bhHvUFHaD125sycog+ZeGK9Jy/01rXtMfPZDeLvmRZVXjPN92ey46BcVXW9uY8euu/Z5vm0joEud/FFvkqHMJTSwv3SwM2hgGz/m8yKGJa5bJd7uQWngeHAKp8u3YTzYBYefn9Thx46iSOuH+P68etGMQjquKoOeeIAerBOi1wD91AB6M/4ovs5UISc7E5lSf1jZ8xOPf3z0j+Crs29Diuxwb1rBu6clLAoErRqBL0khQaZJIEog29QVzBB8pxRa38gA1pKC6PG7ff36Ndjc2oIzZNIPHz7ibGSvMbMsEkfMZl3PI2yhC0syYmBGRtvyhG4fdMRQg8zcmo6Fvrg7ZvYsMgg1q0iEKAUcybnKhdk0B/nbgJcU5O+YEbYwHKQwHo+hLHJcFJqgDqzOAFSQXsmoFvra9qG0Ly04CBGr/maux2KN5nXwaC4/+LZ1oWPyMfrsOhucPZdK0vbcgMatdh52nmZvm+s1weBRk82x8Sy6m31IUtOyNjBFMH59o+RRYG+epTz2jJj1g2EDN5dvwVb2Mi7qQ0gc7o7aET6HUwTohndSl7DorR5AxwejNTiuAfppHe1HR+L46z/xv3rtmQqD1BjwSdWeh0+63VeP/gh+f++3EJwKOFpa+OCshlleQYOgSwwvVXAmIKzLEqbIiM8QoEl/9pkThAHD0ZDBkOI6ZwjeNMGavqTEuCObiLPAihbsWi9pqF6szJMyMwh48qrh61jbeXKZAPPWu4WXrmzAi1c3OGmOFgnLnYvATDmJhD1TcdBSeFEki4KNdJ6i3q+NxCPc4A+GowwWy5HMKKwFVG3jQ5S6dj7f/h0UDeuCr9kPv/Ut3r5LklPiXCdje8ANC1MX7Ke6e7/458F1lVEHCaOvZ/cnfffmGYaFxncZarORUyeMSB2i60fQTfX2OSiziuyLKXx6w8CjeQ1HTQoFvjYPigg+MTjGhfw+AvSn8PmN8PF3oKpO8D2p8DrVZQDdn7ISTfM1OK4B+mnpCeYjNfLKKivZUXnjU3q59Hh3/jb85t4/gA8Wh3BSpbC3KAWc60ZCi2jkE+nNFJGJQHi6XMJ8kXPnIEAHSgSMxO6KnIamlrBcLPg+Wh1OSoBJ/xanRBvS06SRw2omheX7WZY1MrcmxI2SxGJ11jUF91ydDODTN3dgnCbMOMmXzYVD6h4nYCYWbZFFxzEzaF8wZCkisgqULTPYFIGdnkuVxqyv07xBarhxvFAIs2Xm2fZ6rk2nK4O2iqvxruemsNoF2ZMXnAshTT6mlM659RkftAB64DzfxQidvBIasduuocfjr7fnGb8bga47sO3ORLJV/HvgpHWF9Ghm9RqiJDZpB8sK4Hhh4OZkA14enuLOqeXbH1UG9nGxvNke4hVxJ2OGUOLXPGmpjT7HhXQA7mI3x1DBmZoIov/wL33Z/M0/Wlvt1gD9FI6j6eKj9hoPewD9+pOufFjuwa/f+/vwtaOHcFrGyIwbntVX88RpmesXMTg3HBVKTgzqGGy0HduDkR/RRD5pkglID86LKpTZCCRJh6br5QjwS7wPEzy8Vlq8jWV7Ht3lDM+B5A32OKsNjBgpFa0InD/7wi5sjwcy/ZvZN4F+xGAXq7PD6LlH+u+IMyh8QQ4488IQ8CPAZoOImT75t/NsyCyaxlcxy2UEle5K91gEaOeWEMeHEXnBauNIa8JcRu8/ltVBAqAi28/AEObs+nqJ63HlleG5XgdfBefz83c7Fu264qTT1DttpIG2uz8qusYe3HsxqkXlcPGWFvRbWQbvLCinBRfLBhk1gvQr9QGHazVUeLUZLjJU86t5Z0KflQuiSOlhIugGi7MGvj7WAP3nflTNR8ohFPUAmqrll7o2yraA3z/4TfgnB2/DwVK0z4LC6ps2bNN9EY+6BKnrjhmxdrn15w16NkhUsNREOz94lP3T+HNi1jF+YRfIrOkxxI7mNGkOuB2bgpUWhcgrrFcr+BNbI3C+Mk7hDWTOVyYZs1DRlA17l7kbMRJQp59TpnOMLJodHL45xsoEapFavIaMAII8btgmgOsGt6hXRSFddyoak6xCGMP/bnXGiH/OvSm2nvGD8e4OP4LLdRPOoRf9aTqC7FluFwmyGgjVNcsoaPcaU1xo7fHWO498nfWONe7WnJNJvOxiguZeqzc9EHbj+PWf1zSKq4DNJIWdtMCF3DBgn+I6lrs5zIt7nMcdg8ytjDQ1j7ToH5AVzUeyxsc1QD+Vw33kXmM/DPaq6nwXHt89/Sr844Ovw1GO4EnOBVfztJPGdV9r1iZVliCHQ9t2ZSnbDcVTKb5l9kdNhVUdIo5U/7TcLUhWtiUyax+3abV4R+iR4hea7v94sWQ9NCE2jOBQNNK4cX0jhVeubMD2MA4WNauFR6fhQ7EWCalRhVwnCYK08cXB/vQQLToScNrW8v3T4JVhGiGDziAfZNxhyBPBjS5YTqSAMG17JRwfoBsF41+/8wu3ujushGoHMFeOzJ5wFZ99IfR8xkd/DNbKMO9LQpWM6SfodcMQui5zt7IQeP9zyxPQ/axDeYQpBfa3OYxNDBu4EMZSfkBAN7BoClxU34IMNiCxJb4HG/hejPgRGnchgRGKHVzhuABP1wC5BuincFzZHn7UGPQAuoGwFx7k9f3+/E14mC+C15jatQfIYMnxVDN7BNGLFTiEOQdapT7iNpA8PzmEh6P2RlNxU0giaXIFUlTOi9YCGReQ8C7SQcRM93CGW+dlAQPSkPE6OZ4H/f2FrQxZ8wBGCLg++ZNZsWrLvv1N8p8tDzklv3U6SLmZxU9UCRNf6PFbzWq2HVANUgsZAvsgIy06Z3BxrRdrbUjVWwFB7Rr0k7e1HiivhxbjGt93YrQJxp+P1eQ46Fq8Iw1+WkVit5oJAnCxgU3hlBtP7GqRsK/KdD3kZgXsnZdZlI/b8BzpvbCASydsEIum15784pSKh+e1pGnmzSN8PwqSomGSfhIX2EzqFvranDtb0gULBer2v/+Ntf68BuindNyUnrSPymH1dR7AE5wbZZPjF24GuQ5WIs/xOEuQpQ7g7v6SWbBrXSgkuZAh4YIPuXWu93Px7grDXkUX6uzLSBN24sxo2i59jQP9E8tt46eLAo7ncwRk8SsTc76xkcFr18YwxNtXbRvYsHd9cOCP9SNQW83iiMLAWMqrjiP1IBtxk4Bv5Laa59HKjEQ6mTg2MBog4AyRRRfk6CgZZKT9sGHd2vUpqHMro6XCGCuQImSj47i8Odn5MV5qqubNQ+tW0u18J6VpXI889wWMvsxhVkdeeWasdjnfsi1TblzQys8r1u5cG727APgpYY+murvUwVaaQIYLaRPJ+1sgGV7CHDIzwc3QADZHL+pwgF6s6upqcoaXuYJ049bwvAbop3VczT5SLg6fFmHhCWl1PrOiZR244S3+lc0MxgPJC7asOwrzadp+4HwH1K1mBjNLbFv9lpnH5B9iwINI/MakT/sQH/5AIHhm6QBOCJxnMxgm0mRS4zU+c30Mr1wd8QMvSgRfE3FUaGT95G7JleZCoJFEO2bOUcxebWGiaq3T0VoeJWzY8ksXI5NT1d6pTXyEr8MyG0JZLNi5IhsHy5IIj77ywOx6IoDpQog8mza+iaW/ze8Nxe0L135kFlkFkchDaS52cLoepK6m+esEdatt2zKHRoYDuL5O4p0obqXxpX+PzlPuXuGOImHnywbmUYGv+QAyXMxKcrrgzQobQ44LIGnRg3YXNgYv6JQXE3zgvWdMm7QjUk3wQga7+qW1D3oN0E/reJB8pMrPK9OWLr0SyRMIeGM89Tm+K7n6hgloW9N9mcm9wZ1/53TQzlYmNbO2dYFBhs2sowxog6AfMcuakrzRNKG/IzZyOZjNYbbMYYLXGw1iSJH1vnx1A65vDgTUa8e+ZuO7AbkRRS6JAjotNnQMEsqmjhigLY++8vY/0w1n1aKYD6p3mlHd+qEA+IssNdydmCdDaMpCgjVUrqFqYeu9zeB6zFmec3/Yi0xOaYMLg9m/aYKf23AysxNZRBc4Atg0kijQZsUt0skkXkzuSyZSAzXaDegndOuMyD6w9yNRe/3hJuR39MC0N2mGdlXEoBve9TT4mjv+NxUVG+2OrxG8s/QavgdXnviVwcuBsugl3XW8WIPjGqCflugbDz5qAE3foVr1vYvP2cSwjQzxlR0LeWVhf9nC6bwCMzChrdpvSYnFRdBZxDoLMH0xlZ2tVP3lS08gNEbAHSUxO0QWNDWl7XgapdAdTJd4sg1sDVPYzBLYHiXwws6Y5ZZKiWqkqXQcfES+Ztxep6Qv4yVJI25UoYWAHpMAekDXiWSIgGz11YbXdkxXO74RmE2wApre5p4cJUNl0UWOLLrNWVeXwl3Ejg7Rm/062AbN3fRGWxmzEujZc28oqzad1ONHXNHfMwToPBJbYYDQftiG6b8PHcDyRJluUGHPWtfpXx0wd3uZDvRdN7HG9Dzfepu8xUULzymjJMO6ggZXNlpMeEp7XONiOILx6CUOT7Kc/y2y0rlegXsgk71PFaCbfM2g1wD9tI7b2x8pAa1VgK5U37v4jTAJ3BxvwLXcwNco6xm/dGe4fY39PLne2D0eAOuziU1X6Wd3obI0P44K9CvPOcIInpNUfM0LZc+gtjti6pQxTU0lG4OMwZn8zT6VTjoTpQAYawYzFfuSQQqDgRT/0jRhSYOH1mqTDDs/dKIKgRXLHAzSkernbTdL0IcfnXcZaBMJsegBLQApsuiqCDKJh1HRWNvgUjkf9G99RIb/R69zz2dAy7QYnXOoTSeWJ6HTYmO4QaR2HeM1fXZrzuf2q6btYZwKttA1wawKIq4/LwBW1BboptfIvELH7wN/sKipp605JItunOJrlVn83NDcx4yCwya4C3qBA5+iQAbs+QLhvR6DLkAGz6yPNUA/naPMzz5qp9TRuiccdUmNBhFvXemrSFa740WteNUtOqzAthrzqazNe6GN6bKHTfgdZVtEsIGsmCInybWxpEwPdYGEtnBE02EawxgvVJwk9kwaM3uO1aMsORXi8IiINWcI4Jmw51QlDpp7aDX2kyWP2EgWB14kjjTWhYX0Ywn776QeF+QAn3HhbWd0LsPUwgIXkKqIWe5p2w5QQ6SQxo6CDr4F22V0sFWErtWYMCfQDxFgH3UjDT9Nb86i0bvENYutf1WpWdYAK3pz11re7Vi6D4CR4qDrwBig1+zSQ3ZZrx73XOu6qFGnwtCX+DxqfD8GwxIXypj1+RE+xySS925or+AOZkeYM8hO4VyrN8kbD1WDntHX50t/+MU2ztbguAbop3R8bx596OfwX336V3xRkPz+3sHxxI89pZLN85pZmmfBRdlts1tlu8FHu6Jhr7Is29uiE+huZVRESrjQSIH/ldhCGH1SamZA8MwSCnmP4dokgQ1Eo37HH3flqTZAP6MskGyYQcze5gGz55SnhUesOXug4wGxVppVWKdGcKa/CxS1sti4ZgWLTD+lzvVA0hCDFhadR/SSlgG75AVoe7lvTiZmB9Aj+17b5T7rqJhu0KwVzq1Dcr1eHJwpDGwk1zhYVG2PNbsVTbpvkwsRrpqz3YAJunYoAfp/r0SQ9u7DPM6o+8v+LMeFfezUK21gGxewrRS4blEVEWRbt8Eilebf488SzkeJzrPnR3g5BrHa1cfrDpU1QD/NY/wh4vN/+vqv+JmDvkGFJlVQB+FNvVx60Iijh9MW5pULto+QGgedncxztkaZtbdNefcEXaMipwOCzATZ7YRkiERatHPyx5aV5mXIwNbYkHMj4a7ADS0MJiRTJArOkQ/WNx04j5A580irRPzNuAiQtCGPg2cVC4sXB0PLt4vjFB8vUeCkpphYYLr2AUitMlP9n5/oAjKaiu43URY9RxZtSYs2TcizMP02bPVId1puG2QH8NPIe4uBNb3tje8MAT8n0AI9CnslI9NZ7ILm1JM7VlizC1oB+7v7nSq95DujOxPfUOOB2y+0neR8rmtRf0c7oJO8xYXdwgsbEbtO5rj7KlyKTPpOAHafKX1u9NWegjOxZ3JwNH//+Ol8N/7aGm/XAM1SAXw4Lo7/4vX/pe95puhGKp1TazfNG/wMSJLd5eftajipDFvtjOnUEM9+Wp7u0QbgkEwMwyFEieq+xJpJviC4oZFT4sIQxwXlSM+XJbf68oxAbbPengzghe0RMmyZkE1Am8RRaNE22oBC4JoiE6chATTTkB6TrkvgTL5p+plM6G7D+bHC4EOQaFBtlCgottq5GEswUNuuZl6YDjxNyLhoudORLHcZnkO+SDmhjdl963o68EpKfj/4rh9UqoDpAlX1+Nk4180nBD/2ixpB8LWJZQJ62cDKGK4w/ty/Yb3aQLDvuH7noVsZUOu1ZTDnmTLPIYdUi40hR9pJ4hXtTkZ4TsuSa6UwHDS4CHtb3gB/txtOid7vxMbnpbcTEHsdFQer/+C3v9i+FK2BcQ3QT/H4yoNnn8XxpZ/7FS9nUP17W1nzSyDh/D+Bl599MjhXcH9+CgfzWoBLwcZp9yB1Ffp0ObqQt1gYa8rNHwSGyyKH2XzBuQukI5OmzL9piV01MEfgLhWcQXXlW1sjePnqhF0X1BzDyXNGAo38rMCIZwoiU84yHjjLzBkfl6a4UOs2dSVmyNLjNBWt2IjDwzW1eJoRRKnlm0KOIgU771SgfI3GRD3BpoEw/NVnLPcaYFrucrQwyiKYZ6RFL9ThoKxSg/JDpobXplcylVwvsySS9nLtMDQKtOww8Y6O3kVkjoathiII9ywi0E1pMWHX07FotzIcYNWNEdg9eHavzToMzg6uj4HjRGeVfy7y4aDiKy2sR7WB7bHFBdTCDM9t4iLYSEbI+Efhsem1PKc/L2C1g7D5sXQNimuAfspH+owZwK/+7K/4YbCeNd9RtvxZvPwYXn4a4Ml18ZPqEL51+AimeR2+rOHrTM4J6u4bRJwuF0fiTSbQpK9/URQMzLPFggGQWqMT1TOJLZeVg7xsuMHF4X1RAWyCL9KLuxO4vTOU6NLGMTP0aXnkZbbqbU4JjEnDzkTWEGBORHfGvxNzTlOZ5C1xnZE4JGKx4TncekfchiyoG0L6nYCzZ9Qsb3BhT90TzNwl94N/R4sTwR2CzCRrYTYYQh6lnIHNPNO0K/3TLnRWeqoqU1u8Fc56fmokQY8JbKvJet7CqDINBeKzhos3GuGLOytMNw6xj7Q998zKFPFek4hRicKZ1XZrGwQPFwbBUP7Gq1stXMNP1tvHdF7WN7hz4iB98CifxJoEtobkB49giD9/ffPHIWkXPYOJjB2LrD3PoL0lm093Ga9BcQ3QH6MDwdkqcyZwpunIr/SAmaZ1v/pnuZ+vn34bvrH/sEtO4y+TlxliHQ8Vi1jK40do2ncBy+US8rxAAM5xYYq4S1Dm6IlGXSNAS0s2TU6RKNHt0QBeRGDeHg/FnUHsNBa2GiUCqsSMYxoyOhDpgi+cpSELA8kaw2zAenSs+ja3kZPXmc+PymIxz0VsyXKH58ddhNZqezcBi7otOBfayha/1TmFKsByrKmRhYWekB9NSK6UyTCBWZpBWSwZZwjIrVnVaF0YVNJv7+4w2+q0E6cShrWdx8IrxAyEZGvjB3AwjA137S1wVxMFTXk1xS5sf6CvO/t56FLQDNO4fJSoLy3qNBr6/42Jgc/dimBWqge7dWEaOnU3kuVxtsRdF743Y1w42ryCq/YavLHzc7Ao91g28wel2Z2z16V68VGjpl3LG2uA/hi+hr4YSHozzRn8Gbz8HMgYoR94vDt/F778wR/CUVloKzQCG2u8A2ZvbNHS5Dqiv2WNgJznsOBgpZYZlORcWJ5k0mrbt0zaNtzEQF145NKgzGYKOSK3BbM6dlUIW+XMDJJFaJwW68opDDLxOA+UMWf070R+ltFUlygKXXvMvjVulOxs9HOSX0Q/r0OhkIqO5KCQDkiRF+hl9LIANcoQG7a1ALIwbsly5ofSn00m+JymGcxnMaG9CAOtWgGhn8ehaq6m38lswx5IR6CsWQfKhpyNLpmPT5kXCXyz8eE2Mlwg564/VLzrhlQBuYXVKSzuXGb1OcEjdHJL0VDsf9c2DIyyGB7gY1U0KFhvEClAp7aBWWN4R4RXgwF+Hl7ZfAP/fYPEEai49if3lUSPoW+qn92BB+lssP5CrwH648OefVLdtsoan1U545+HJ8SKrkgbxTH82rv/J3xr/wNhoMxeM9ZziWkVVQUVBfZLFwqDMWnNFZlxQ16xWMqqquU0OwIg0iaJUQ+R0W6MUvY0byC4ZipFWG3R5kIfdwPGzH5jLvapr5l+pw0oImUk3JhCAE7X5Rzn1gdc6JRubyVzojUTG29cpa3gNAkmCVNFQhmMxmPxTERCSopSRdZXVwyIEQdTN9JdKHQafLMgFQs3cME5O6WCYdljsf3J4yYAp7xWNjBssd7ZMLfQcnKd7UWB+lqAdE7SjoYb9PDvWwjQi8qxJBX1W7XPD6ENzoweKw9t4Z0dr8t6Eg0/sVKEPFk4+NYDAw9nre6EZCGg4bopR78S+Eawg6tc0lawOxjBzkAix61NQ+q+uFEupMdjEPsngbX94Hj9vV4D9MdH2qAPNc1yI/scjbH6cWXOfyZwPi3P4Nfe+wfw23vfFLbFum/C8aA05YTC+ElflSGwku/MDJnzMwRI6DpSPJNGBGJJpFuOyNM8HMAOsuWtScZ2u1RBONWiHoEvMWWSKRLVm0nfpusIi45YzvDAzc0mURRmFbJXmPXbSEFXe+I4yELAWePh5H6RPZPOIkmhpmcjE/cJWdkI9CmEiXJJalNq7crryS0X9QhIOZIUz2Vz3MDRcATLxVyAvddXaAJIuxBy5BRwXTe5VZi5sm5rzcpEFpm7aLhZJyI9nP6HD04smnKjaDAvNRRFtjPOGbXU9TNB3DkIF70dekbn1Sv5cuH9MwcPppUs3lE3aivRSI5pGfHOKUNw3myuwDC6ipcb4U6oKckODNgLo1BXAJpHXX1vf/3dXgP0x0vauKK68+dUc97+s9z47uwd+PK934Hfe/QV4DmvNma+Rk4Kso6VZb1iqwOnKXYg8/5qJ5NWJElOfdG4BaYmhOvbE3jhyhZcwz+3tyiLIYXhUOxxJEswMCeiJUeJFgONDZnS7Nzgga5GwddqhobIIjwsQLsQ+Xfa5CEygoCzFBtjPid2G+Bjx7gzID3d+4Vl1gfwQALLSX0CzJYaSpooTBHhUP5IAqHakJIscgYx6K3JEE5PUyho6osCk+VreuDtTfM2ncNCm8OlOcWX+9oGum4+7X9RuYGmxERO74skFgS+q+MEHk4rfm9ia1bIswvg3/eO9LPv+Bl3RUVjwqCASuudjTpERrE4u6m2wNKGETspsWn6DIzaAbKCXUgdgnS6w/dHO6/p8hDubL7Kk2wuOQY9HdrurjM41gD9MZM2/CDYH4U/Q0HwYX4Pfm/vn8DXT74Fb5/u4ReRp6pKPCjlPbProuYZghKs3stqVrGS9OiKmBHlXJAro2mYAb98+wZ87pO34bXb12AXwXnEbdiiHbP7Qzv5eKafhZCB7IzpeYfNSj4FZ254QHHagg06d9DGoenEaFSooS13HLG2zfddiryRZBtg06E0pziJWjPqKLBsa2skgMlZzeKwUjwEcp3Q30tuZpHhto7Bkl4f0ryvIKrsHw9hsVxyMh1oBrZv3/ZyQvA+O/GFezeH6TkdWO/W3YALnX0K0iTZuJiHK/Bygox6dxyzK2ZvLiAdnZNvOn+fukiCDO3CwmF6bN2Dt7dWtL2p3qRy0f3vJlIkLFqRWzK89hCJcFUvcBHeCDz9dPYQpouHMKa+bWOfhAFhFmG1/nqvAfpjAs40HeUWiJ3uR/DyU0+6XeUqeCf/CvzG+78H3zp+CIsaAYf1WATnSsCYQJcuPC1FuWKkrLZpZdhnpYw0Y59zwuz45dtX4UfeeA0+9doLcAWBmQp65F1mOUJ9075tOaANp711JTTnIMR1hoaLXoSFgF4X02l4eKztJlo70cfZfcKWEDxneo40gWU4hnS0CTbJ1G5GhcVaZyBKZGirmddeyogY8SPWV6m5paWhsfjcyVPtK26tavJXdyO4cTaHk5MzZI11kE5EbpZc6pVxVtauJNlBbxGMXKR5I9Apx+qP9hY13iW0wnhJTro2klmARwjSznXTwfvTw/shSt3juZWI/r5+zotQuLFKNPgaTSLxRB8tyUMuEajDhFrsl4iyMYwHIm+UzRKOZn+EbwPumKJUwP7yFP7wi93Z+ju+BuinfBRPYSjh3/nZv+FbuNNLwPlSilK2JXx/+VX43b3/G96cnfIgWENfGpNAU0oWsbBiGQDrRxKRXEGgQClzRVnyF5+T5hCUX7p1BT750i14/ZXb8MLNK7A5HjFDBg27t1oINJ4d96MxwTsOel7hXoeb64ViSAqbB41OMuhby3wCnPGhSkYYcVOVnNMxGG0xOFuIlR9acQrydGkyRqisoYsAZ147sZC5SKdr03VbXLzqirVmo8VRAp0EX5NXX0KAPJzCe/dz9VETLMvcRYnaiGQ3ELoSu2YZWTR8PodONNc+FL9gWJnDJSBNzhV+j2SUGGnA1ycJ3+aYLG+emfdaVrSI8FiYRrdGdM0svnUd1IWT4u9I0morBy9vRfCpKwn86YMSZrUmF1LuhpnBILmDYL3FC96j+Tdg2XwDXtr4y9oqE104lwVW5xC6yS+sQXEN0E/5+Jfdn28U17/3hV/ut3BvKTiTrPFjCs63nnT7WTOF78+/CR+UMwRb8f0C67Mt293KomG3RtMLnE8QwAmsp8uCbXBXdzfh2tVd2N3ehu3JCO7c2oXbV3fw37ilzQZQ6JadQ4r4a17THFTxHJteRnRfXKWvrnGanAbd731iGt5Ba/oUy3SjmFqfnxHaPcL4bHosGkZL7DcdbUCUDoXJNk3P1WDVmyyLirBUnjQgDDzkH5uQI8HzGJOa2bRrKwVuSa27spvAG58u4eR0CkfHZ6yt846AfNX0d6Naekiug17CiWS3Wplt1ctztkFW8syYr0oFU3p9G4lIpVOgDsNrGwmj3Omy7jxzfUw05mLqqpPSV+d7m5CTTQcFaL2xbeAn70TwYFqzg4QezLLtnTob6bW+yg0ri+oIjhd/wrusF7Z/iN+HlRmIqweZyEsF6tbdWIPiGqCf8nEr+vNz2//8T/9PvoWbCoI7PeZM4EyOjc8+6fYNsue75dvwveU9mBLgOWrmSJERWfatzssCZoulzNlT+xWBKgHCaJjCa6/eQDC+BltbEwS6BL9sovvS5Iy3HxzB2/ePuYtvNBowcG9vyIVCfSx5g5FxmladFapzBrA2oBnK6nsw3bglD9Y+wc6oLS0ALGOazAU0pgM1ZpbInIm7JsMRAsiAGXgbuv20UMZsueE5fwBqD4SuZdprx4H19oHM/r/svVmsZNl1JbbvvTHPEW/K9/LlWJk1slgcRWqiSMmSWuhutWFBH/6wALeHFizL8IcBA/ZXwwbagD+MtmHAststt9q2ukWqTVGSRYksiaRYrGKNWVPOc+abh5jnO3ivvc+5cV9WZlWpyTKoVgQVei9fxXgj7jrr7L32WirJ07ehnBOCkRN8nAZPnqHvvXaZhuOxLH6OF0npxKiLhV3a9HE7IGJEJQqGMhjkxcCsy48yeLVc1Zq8+F3LbkcTaaDthl/Gclnv00EYQkJxZ+vNccMwStSlE8DtOkkTfz1WGC5dyDr0qWMu9cZEV5tEo4BifTa8OHJUo6y7yDuSLIPzNb7dNVrIP8WLxhNmcBwRaIG0ZR/Qc8CLo0cmizBOS5hf5gD9UV3+8wv7P5THuf7r/9KWNCBFglrjBF+fMA1BDKM8/f6PENH+dIPB+XVqRcx6xpFM5EGx0eczrc8s85DBuT9Rz2c7Yg1ZGwZETqyt0OkTK9SolwSsC4WCgISM+WIRYno7mUxpxNfBcEIbu/t0eyOkLOxFAdbVovzMozmIJwgm5AnQUAI5TENQop+SBvMGiE29Y2ZJHcZsLDBa57hc4BrQg2ojnYUxN/kBA5VRggjYWjlapEqLMDKx2/Z5o4Sv9UMaaySTceERD2gd0Q54FQ3osROL1O2dplfevSESswyeM1QAjVPEHTc2c9Ixb1XC6HFJmUguO17uyAIXipmTo8ktpgEp8sbImXklReq2t1DKyGtuj/2ZnZJh4FF0pNCUaBialxbpc9qMRtTms3yWPlULyZ8GdKnrUGcaGUm4K7YGeX4NWWcBIkvqTXZpu/eScIpG8ZPCnpUohCLfzB7lLkhQSUZdzeF5DtAf/aU5/cHNkg5+88t2hBvgnBzh/gyp8dH6Bz3GKBzRlcHbdK29Se2pY0a3Xdps9RiYxzQcTYRlIV5quVGlQrks+0xESJWZBVeLBSoWczpincmqkZGr4jAwOAfObpk8/70oTUHUruFW1+kOqM3PsbG5I7aiZQbppUZNGoilXJYKaT3pEUWFx4zIiW1FXcdJDE9EsySmRISUgGMcXJtIzU5axwnYTJXBJ9ziZsWSMM6gsiUGJ5o1sqJkrnXS0944IkW2MI7GoYBnKE1EDG88dXZFjKHeuXZXZIsu5A/pyOQPqizQ+hzFnh9GpYGhGM9zj/hAC2M3IB2/D1PnR4ncF2tXw8YZxGHqXy8iIizixddUlJ2kSiZh9h8HwUZxo9KyaF2wQqphatEP6dqhQ6MokWSO6UB+7mKYo2KqIcd0r/saTcNtqqVP01LhcdMjgLH/5IhHtbncITXrbxqA9udJKnOA/sgvP6jZ6N5vftmh9+qc7Qj3F+hDjHDDA+Fi5wJ9e+NNYtJDvdFU6qL39ju0P5hIVt/JpRotLtUpw0A8iTwaQMeLqTrEGI2ndDBpUbffo10GjFKxKNahWQbzWhUxRllxkZPzCYMtvalkBoJZQ2LXqFdFrtdqdmhn95DeuXxDsKBer9DyYp2WaxWq8yJQKfHJzWwdnhvKDD3T6EtYbZKOQFsDfMdOCuo/HrDQjIwPR8LhLYoSSdL6egGsYajgGjfTHG1whrbzmMj5ixJsU29kH3c2pSc9Pv4bktCfOXtMvK9v3NlWRbTdJbj6/kTXYioznhmtFubs6GSl6Ms9NbcPAfBuIIAbyJCQYwv1xkyJ74eYssRbRkTWQoE5fTgVcLWN2aTtabJpZzXQpHM9qtzgf1QzLpV5FTgYkZQzEHAwNVpsLEaLuZAaORSUpjSe7lF3cp8y/N2qZ88xsGtrZBzwf/MnvDDnkhHCskkkNexHmgpc7YIv/fOP8MT8b+aAOwfoH84lqXM+YZgzwPnn6ENMCfp8Ur7Z+R597fbzNEFzP52hcEK0edDlLajPbLZCXjbHDNuhq3tDGm92hZUCIAAO+WxabT35RMtF/Dc+ScORT11ErjRHtL3XlVFgTAMu1IrUYMAuMUsu8n3H/Pj9wYB/qi4XPg7nHluTfzcPOrR7cEhvbe2KLnp5sUGryw2q82MsNcr8WDUq5tOiYZZTWKYGPaMISRn2mYrLBDogo4MpZNQOAiGaQyXNK3hkKMMN4vxB+3eUJSKRzuk1gDrDMTV4k/xtFQ3ymBGYahCDM8W1dFdqzZhUBORBDVMuRAzSa8KgN3cONRzXpJBjoMSJE7u1tKHOeSTNROjGPU+DByBZhJ8Iyguj6VTKJr5v3gvNJvvEkyTQ4SGzPClQFlK019OAhMh5oGloHfYedCE1yhIJbXBMyji/vil/FyYmogzJKFl+z0v8PgtehlwmBN3+Fv+3Ee+qjtFK+VOkKfAhA7Qmz2TcVBKcLxuA3jR16JGQ9nmRYw7QP8qXvVlpw0rp7Aj3Fz4MOA+DMV1of4de2/kmZQsZ6gZpwqTujcMhNRlg4UdxcDDkbehAgABTcMu1MtUYJIulogACXOJyzJRzDKL5Qpb/nTN+GCmVgIGAMrj5DLpTvnYG/NidA8n+yyPphO9X5Z+g1P3BiHqtriSsYJLw5Ml1vt+EWq027e7t0dbuLpWZnS8ulGmxUqTjSw06feYU5fMFI2WjOE4J7NJzFcDteLf1uKCZy8Ws0SfgbEBaShH6bwFZGcQJRNmhV/7vzPICf0wYrYzHyW1zLQpmjwdJX2SmAgHOKWW79vXwm+X/C6lSzNKTZ48L0DfbXaGmrpUgSuK27jg8x6o4IA90ZcAnl8lILFiedyrlUlkWKCxy3d6AOqORLALWJU/MqUR9widUqHJJX8DaF+c7gPTBAH4qFoedRFSWTTM3KToOmalO3ZlMeRHvi/Tdlc8gMGUQAHYpE1E+yvDtF2k06jCDbtJitUb13JNUK5yW9yPsma8A5wfMkq6YEgcSVWDYP/3Kn/1yKAW9+WUO0D+i4GxLG/iaLpJOBj5LaoD0gWWNQdCjb+1/i650XyQn59FOn+iNnTbt9XmbO55o3JDH5wCD52q9Qo1ahSplBmYGhHxOzYhwhVESSiCSUpLRSKmsXFMCwmkxHZpt1aENnoxHNOz3GYh6dNhsygkODXKRgb5eL4t2uMPg0uz2GAQjZtx5Khbz1OuP6aDZpu6dPu0Vc3T//ibd2diiJx4/Q2vHjoknhx2SiMwYuChJzBAMWbmc0TeTkxyImZUlYvtPdYxW+1C5r2vAh9+HpwUqkdFF/swLP9LRcifxOI6tJXuOGcoxVXO42bk6YQggrpezdP7kMt3acKQ+H8IRzjr3IZXcmEZBSyylCixkskhmiBFZPgPU8HO5vJhRpZitBoxnQ2bTodkphHFobyh9AD7s8bQnmrgVJ5At2SEv0CNBaTtmbgSHjjKCDDNiVJpGzPqDSPUiMvIdubOatasAjnSVWgrsOU/dyZD8YYdWa2t8f4cWys/Ie/cjPJ+y5yxcBGfs+SZfb/D1fqK84U/dOQbMAfpHv7Rh5XRoAj5l2POpD7rjzrhJX9t9nu71LlBrNKZ3D6Z0uz2RkgPqmXCHKxbyVGdQrjFjLjNAlpkdl4qoA+epVilQOZ+W0WwAq7WHAEAImMCDGSPTKTXtd8w0nMjVwjQFfGYX8vx4lRINhiNmepis69HGxq4ABTw4yvwcS0sLFDCDbncGzK7HAvSLjbqMSU/47/sM3q07W7S5f0DnTqzS+TOnaXFxQbyho2gqDM4n13hTOLGmOoybg4ZVJ4DaxgKq53FCIBx3IFUCF5kckZCMhjmaqTXCOHNQ679SbhFzKUd0yaKukJq2b2q5RmESOFLCAQDv7LZpNA1mr8vRcXMBeNfIDfFZ8SKJMhNAVspOZleTToUyqTjg4xRKKcsuHGDikWl9WstSBllMhsKJEMc/N+WFeEpNZtLtkboTRo7NndTyChhxKePQzgAj/06cfB7SLC3c2pFCWpQFQ474cxu36WTtCVlUirkTVCue08BhXowQ2JBBwMNRLw4A9D1wEsOeJ//w9V8O3cYcAOYA/aPLnpMj3Gs0k9N99v3uh9Pn9uA+/d7Gn9Cl9k3aZlC+djik3iQUCRS2yrl8nhlrUYC5XubfCxnZfpcYoGH/6dKEpqOQ78MneSeSoQegBdzLoOjIiJ+zxyCcQWopOYZVu7ZG7GXkzM2KkTxM+7Pi/Vxipj6oFqjd6tIhX+/e6cjJXmbWXq+WqFItM0gPBcgBRAVeQCJRCQTUZiB57d0bdOfuFj371Fl6/Nw5KpYrwqID464nQxqBkaBFyl5DSszBkMXhKDHuHB1RQthBlFmjTEexo0ibc5F5bLJj6GRKAFI49nRC0LV6Yje2F1Vdt2fM7ZlVViuy0DVbfakny2s2C4YTOTHjRggtQgbgey0GSLBVNWG5eO/wy0bALmrbjjQG9X1blzwdg1cYDdLMnNMA6Cml+Jrm33NZBuohgzTvXIZTX14H8g19HLCJljNgIYryi2sWkbhEbaR6+HsWwQIO4q18WstD7TPi70mBVquf5+XNk6GnSahm/cghTCR54+GSIbFiATjif7VCJx6MceZqjjlA/4jVnZPWoefoQ/hrBPzdvtq7RP/3nT+lF7bu0t3WgHojtdYs4kTOKzgXi0UpNZQy6PaPqXXYp/19ZjfQycLKDmGeKU89FcCQPZOendZR70I+JaqAEj8GEq3RIETjUEzb0VCU2nWGqgXkAmYZw1OUzrqSZQf2lM+WmaVnqNnpM0D1GLDbdHDQlNr24mKFVpZrNGCgbrcHNJ4GAlRZBimff263+3Tw8pu0sblLn3juWTp5+jQ/Z54m8GuWxlsg04uRMWmWerKUGiwWGN2ABVrLpJNTz87R3yU1RJiofj0jO8Rj0cNIMBw7Vm7q1KFh4DLEAv2vB/MmV5zycN8GL0gFXuS6na6UeQCuU98wdJNBqI1DTZHB06LkBFAMjYBZLFllVxPIlGWskY6c2Dda6bzp+AGsIx18SZkhmDrfv8SP2x9PacDXHn8PRtOQuqHqqzXmCws1fy8c9akmsoZKANyIiqZXm+XvQSoL8N+kSv6zlM0t63czVOkfPv9cKnOUU8ymYnPmOv5HX/ia3C3/P/+qSlqcH3638J/MoWYO0D9A3flB69DPmH8/8nJteJH+x+v/D3375n066E+llJGTrr9NIEmJmc141KfxsEv7vDUWe8hsiuqVsignlhcqMvmHsdx0xpEai7X+hB9zyjFAnYbywBdznmg6EiOibmcgcU9XbuzSYXdIZ9er4iSXZxCqVvJSZ4Z+Gn+jPEAixwCfokqFt9oMvM3DLnXaXdFa1xeqtFAviza7xUA+YuDAIlDi1zYa+vT2tXt0j0H6M5/5BH3mxz5HxVKVbzPSCUExSlJQINRmbeMvoWlOiheiMM6h0kERO0Tp6mSjq+bKZooxpQ51VvrnmAxBc4yEV4ezpSAKrTmSpruk3NAAuCaYl3kxy/Pxn47HshOYIq/R1xBYsE6UNfC4OIYpk2SOC8oU1nbVM8kxXmCmIcGW42huu9KEcZisNf2PEKKQnqWlYFFG/FibGfUGL9qoGYdmQAcNwSm/nixA1tFEbx1pjZg969gjat34XrjOmIH8CarkPsm3c/V9RKGw5gxiy44GxbqmfHfKlDgmprSHYZXR8De+7Df+t18N5gx6DtAf2eWv+N16MBXlSQPOT73fnfZHh/RPL32D/ujSTRqHkZwIKcOuwKKwrR1PxqI6wJe9wCC43KjLdOAys1aUN4BDw8GA9g861Or2mMX2GSBVkkUmwTtjoqay4t/Mj4M6Y6lATJYlsTvPDGk0imjCDOzy7X3aZxYPwzsA1OpyiZ46v0SrSzVm4BnxFPZyYMdZKjMrrxYzdNgc0F6zI+y6ijHxaokWeNHo9YfU7fYpmIaiHklVK7Tf7tA3vv0CtXsD+tKXvkTlapUmw5HGa+GxMSzC7x9gFmD7bodIzKSggFYY0RExMMXzKnESt2ziBQTN7cX9LtBSieOazL6ZRadMNVpwDtWi03HVgEkqIKQmVI5J44KaJcsgjbCDSBwCyeQ6TnjR4WdCWaNSEAatVqwpUWDo7SMpYYhfNlQhkL0Z2Z5UymGj6oVxmSBOBLf/xgg+GHUUSW0BPyu8M2rleGc18LW2b/2u4fjBDH/iKGuu8udfyejwCh9eScxJ8d+zQZYauV+kQnpZF0sYbRnNeubhPtCfNo1BMsTkNl+3TOmjf/gffRmgHSz8k1+J5hA5B+gf+sX/kN3ow994j6TuvKk7f/797ofa3j+79Bf0e5cvStMME3muoRxoItnBDMiaisUCNRo1Wllu8Ba7KKqBne19urB7SAetLnV7IwkDxdiuhrXmKZ3PS4J2FvpWX+2TvWEk7nApD25pPdrd3JC69u72Dm/b01QrQY7nSaI3dNEDZvRXb7do56BPx5eKdPp4jVZXapIzOBG0IQboNAN+lRePrDTQANJQeshrrpVokV93q92T15hhQMP76PV69N2XXhF53y/84s9TtVoT3wsZpxZDIgOO/D5DX+vIYTA7JpJVGKpe2kkku6oKI6kAIaXQrmkqRp5xGZ15T1uGqrJo6fCZlpor95O8RUPWA3EWIpmctKEEqYxOhaQDXYTykzSNMhPZZUz9rNSgEbob+Igei2TxxKQ57ouosMBmP4YBhbMS+Uxp4pqUcMchJx76duS9wm5JJ9YjKUWhQdwaqGMhhYnYWkSZyXculLIMFpw89O38GPm0I0M22cxjVM2fM1mU2hTE46TeK61LsuifMaRkia/vYEOYaBwKmz74D3/fZ5AO5zA5B+gf6mWa+uCFv/sPvmJLG4VEaeNZ0xR83+Py1Zsv0j+9/rxsSVGCiMxAAJntMWqNOWZp5UJR2G6aT5j93SbdvHmX2t0BM+UxA3KKCqUyVRfXqVyvyu/FYomKFb5CepdnlsyP4ZozH9t61Dqx9X7jle9TY6HKbD1L7168LnXRjT31cICG98Qxn06tVOjJMwtUKaQEYC9d26G7my1aP96gejkjE4NT35F67QLTskK2TnuHQ9pjQIYj3KA/oAoamvkcg7rDr7svioRKqcSLSJpeufCOgMcv/sK/xUy6wgx0IgxZSgum8QcPDpQ6wlATuVVTHchAh6h+o3DW/DLlDWvWpGktUaziiMHcmYGymiolxsvF4MPT4wUL00gBTIuytlVpFBuuNYfC2LzmDUp9GUCdVx0ztOOTCaxeA3KnwnelFJLyQt0tGbYaAThNqvgs/tUxwQaOMPt4dF6mYRQhUyaxHMetwjuqVHskCzzsSx0zkCK5iGZrMeTHuT8MKcefHaIG94Y6WfJY8Ri/plx8W2uGlT8qrXvY5Tmza1w1QH2RVOFh2fSAQXrKID0fX5kD9A+xxPHhNmaeaZAkSxufpA/w2Pjz+2/S//DWV6njD9WUPgjNhtRItuREV8c5lbsNaIztM7NMNLEK5Ro1Vhap0ligxuIS1Wp1yhUZBNMe5QsFBgdmz9mUgCJqoE6k7EsaPuk0A2eXNu/eo8994afo1tUbVIZXRzYrYIKaKmxLL9/Zodtb+7TeKNGTpxfo9EqZGXGB+ryFfufyFpUYoI8vV5lp56UW6w9027+6WOCfadpv9qjXHdL+Xps62QE/R16anL3BSFh/tVKk+kKd3r50RUDt5372S1Qul2jMj2WNjjxj7Sl2poHK17TZ5+nvmgKQcKiP4hqzpaFaCHFjOZ5jLEflr2LyrwG5jjG0j4wvtYJwqNOIJlQKdWzbCHTcma7YMc55Tko10QDoUJJttB495oXHRZoLFuEMegyRhLeiDJU23iH63JqHeMQU3yoPoVcP9fXKs4aunRRXNz4+FoWsI7mRe2NfWL/GbLmqtY6M9amJse3zE94auTTcdWg9w7u07C6t1PZorbgkx2DKiyAag57zobaSICe/yNcV83vVlD3Apg/42mOQnsxBeg7Q/79dOr/+FVvaKCdKG8/RB0jqrrU26B+//TW6PzqQUyWwpVU7oEFkvJB90RRDziXQzYw6WyhRjUF5YWWVCkVmzgzMtXpZatMSSQV5XDYlVqSaoqI1Vy+lzS2c+BhmufTWNUoxIAPcX3rh+xL4WsSkGwMLtsutVlNqwPDhuHp/n27tNKlezNIZZs5PnV6mE0tlmngZunGvQ9dvH9LyQpFWFyo0GQ6Yi7lUhccH36bJTH2/2aV+fyzXbNYzigY+aw87MmCTZzb9zpVrktT9xZ/+SQb+Er/vcSw5U9GFSckOjaezo7FWGqHlxs52VkYXJfbgOsQRxakmlnrGRklxdFUo1qeR8eLAwik47qpftRcnsYaJ8smsYWGrKVL6MPmKrmigTTqKq8M0AOVcmIHFtK7vzji2fpJ1xVc/a6m7O3YcxZEx9Fh+6FK8MEVGoRFGyqyrzKL3eYcFfbXnWkWHGwcm2Dq2J43AiDZGEfXCNO1s3qXL3d+jTyw+wdfH6bHq+oPKjQ9z+YRh0ZgBSAbJyqQhg/R4DtJzgP7Im4TtX39PaQPdbOtS98jLKJjS71z5Fr3RuqWNqNjxxhpzRuIyBhAwgSCiVc7liuQx8y1VqnRsbY2qjbqMD1crFcoV0pKqDVmehLhm3NiX2NU8Edl+i3MdVADRhG5cv04nT52S2m6n2ZYJt3whz4Bfk8fAZdDrUb2cppWVGu3u7dO9zT3a7Qzoyr19evb0En362dN0ktnyC2/dFYMmNBuhGIE2ezTokZOGu16OWXOKdvd7Ut4Ae+4zm0STEozwoNWR94EF5p0rl6Vx9sWf/mmZTpxMJwZQdHGJXJOvJ9gUUmzwb8YwHBvwaoE6WYc26dzWx0Lm7wwoH42VcuMSgqpHXJMjqF4WVkmhL8xoPsyC4dLRsWsbcSWZj/I5mLgRYcMTDdOFBj1lPn9TMokcuPdh16Alr5n227WZBFqa4dfkmulAYfX4nNEIKWZkocZgkWPesGvMsO2wjhWYWz7dm6LZGFG7dZNeb92m9fuv0Mfrj9HHF87TJ5bP0/na+odl0rggX/OXDHEBi87QLBKxY5i0P4fNOUB/ZABtyFlStfGEYQ/vm4ryzXsX6A/ufl9Mz3VXbgcsXLMjD81Is2YBZrIMcKWKpFjnmBktLi3T+onjsoWGwX6Ot7RpDLLAVF7CXK3HsJX7mgk1Y3mJScSt+/eo0+nT53/qrDQHR4OB/B2aaQBnpVzlv41oUq3T8dUF+uKPP0tvvnWR/uBPvi2+EF1mwt97d5Pu7XXouTOLzKorMsr9xpVNkeU9fmaByoUMA+yYRgwSJQbb3PEqgzGz6cM2338gTUSUYDB2PhyNxDGuXMrSxStXRPP9Uz/+46LJxg7Cfho2DMA1cVyitpASRmAaasZSPpq53cXAm/RPTkwmkgViM4buhNpQm4XshnGtN2ImHdqF1E4nJhA5Mg8amaGa+D+aHZInunD+sAqZWe3a1UlF8fUYToyXdEQTqON9M55ujfpDM7Vo6u1R6M38S8wOAY9ZzGcpz7sp1LzVa3rmE43vRhBXgmzquCOpLiPsIHiHg2/mlc4uXe3u0Dd2LtDqjQX6MWbUP3v80/TZY09KL+RDXEBcfsEw6CRAW5CmOUjPAfojubS0tPHgQMoHljZud3bot698kw7GLRObmvBGiGbbcnFLS6UlJLVUrsnAAxhcpVKjRr0u7BKDW7lcSmrOAOq00fxiG+6J3lUz8WD2M0sSUc/i69duUqVao1q9Qe++9Y6c5BgFJ0eNdFIZLAZ5quRLzNRrZpQ7JSWUcBSILhv107t7XdpvD+mJ4w06tValzsSnsD9kIO7LfcCkMxlHJhBRE19ehBeFx2w6JSPi4/FEzI7S2TSD+ZRabQYjP6I3335HAP9zn/6UvD8oPayxEZkEljCW283qz0mQnkVrmVgtmvlLxz7KllmTDX5xTYMMdqCORTRTQtHUcHWNUy9lNRi1AbnJjEaa1cbJhs6YUgNGvq3PtTBmXYDkd0juBjabcWJ+8eQYkfWZlmfzYpMnm2noxKZ8Di8CGbF+bXaH8Q4kNKuUpKQRGZ20Ga+XpqwjLHwwDkR94qRc6UccjgfUGg/pameD/mLjAn126Un6u2d/gn5y7dkPe7p8wZwrydRvmoP0HKB/4Evw6PTi5ECKLW18+v0ea+iP6f+48jy9snfVAIpjnd4TtVMSMAY4Z7IFKjEg4ycacGgCwhmuUq+KgkHGv1PaUIRm2jHyMjBoNAUznk6diSm7E8YewWjAbWxs0ImTp2QLvLu9L6ZJSLyGIgMyPagm4OMBppQrVunt69t04/JNGVgQIIei1xOYlInBd24f0NZhj46vVKlWylGvP6F7m1361LPHpDkWMTvr9kJKMxsuFxmkj9WpWYB2uicueaOxTxl+DZKd2BvK7V9/4y2RrH3muY+LrSd0vFZlEdvUG9FzZFQUNk1cwC4KTYq4oyAaA5LiaejMUl6S1veK1qbaHBrrUBPqiqacS7NJRilTR6ookSk/E9XlxIzaiVlq3OQz/iE5J21sV02CjKupKY7JOYzHclT0obmFmkirzD+uqWvAgmXEeIZs1hWATgYUxGQ+sj4cs5KHbahKoYhfxJBBOpd1ZUflT9X21Oc3ent8SPfuvUAv7V+kX1z/DP3ak3+LjpeWPsyp9PkHwDmuFDJIR/Oa9Byg/7UuD8Pn3n/y+za+Cl3qNdMY/Lipuz3y8vW7b9C/vPWXDPq+bDHtIEVk00RIJVpolKXSOWawRcrn8tIghJ8DxrwRX1Vg9oyOPNQZmqziyCivgqZxVfMiuYbiyGbiloQlu7S7u0fDwZDW1tdpb2+Pup228S3WJO3IjOLBuwONOtQyl1dX6fCwTV46T4cHuwyqfZGhTaBb9kkAYr87kjFjNBZPHivR8lKJhsy2L988oOfOL4ln86jv8wLhi1KjUeP3B0VHH6ktAxpMfWF+aFCiTh1GLfr+q29KPfy5p5+QEkBg/aFjP40ort3aco503oxJvZr1GwiOE1sMKIcOHZ1PPOrLrA53qh2XYQ8zeYjPzIgn6OhDaikBLNuJwveUySxjlzRvRxuNadvOTIyZRzGam8WHj7HeOZCexGw75JqaOn/Wkb1/ZEi/R2XeAUHCZ9NbXJMhiNsECcmd4yT7nI4hJrzwTiIJckBzeeqLVk8ZO//v/vCQ/vn1P6fX967Tbzz7b9MX1z/5YU6nzyYOR1yON0x63jicA/QP9b2ivgYb0dOk49zvy56vtTaFPbfHXUOUZ4MUWh+MxHoT4Ay5WSaboSyfYACeMBrT4uKqDA6Uq2WNqoIFaDargwqeljRIPBpwjcSHA2DrSxiockOz2abN+xuUyRVEKXHv7kUtb6TVdlR6X6GvVpcA6PFUasCnTp+ibrcr6pH102fo+tVLNOj3hWENel0diOAn6TP4Xr3Xod3WkD52hgHXC6RBuI3x44lP68ycYexz0IR6oyAGUNl0WTTXB8ymx/xcSGTB6POIt9U723v04suvSwP06XNnpQChzbBwVhKKTPq4CVwVcJZyiBNL0PQ+s5QSAdPYg9SwyFlr72ijz3Xi0pA+WqBlASymFJlShtEkR/pvXT8sCEYmKlGTz03MCamCWwdNsqZnN1sybKCutvCGpDFTUyeclXEs+yXdQTgm01BKNK4CNOrQXV6MXTNkglF9GZ+3pMCZ5T9GYXSkNi9TqL4vIA1PF+y2xArV0dfOSzG90b5F/9X3f5v+QWeXfu3pX/ggrTSZBroF5zAB0tFcgvfRXv6NdIANw+DINcGea4YxP25qz+n3K2185fr36PWDazN3NJqxOjm9XTPa7Xgij8P0Xy6rTBkRVaVSSbbdRf6JiTRPJtko3s4LM/O07JD2bKdfIdlmA7rGPQ7Th0vLK7JADIcjYeUAeywMmmPniHlS2kvLyTscqZXoyrFj/HomVF8ESJ8jl19nygxk2DFkvAcvk6W91oheeHuTXnxnixcLkgnBnd6Ymr2JTLGl+eRGXXrETBxHBFOLS4tlKX944l+RlmZlEExpe3uHQfo1unVvQ/MO7cizM+s4RaYG7ZhIKtc03Wyzb1YGSdzJOTptGB3h00ed7xyyU4Oa0gJb0VRKvT5056E+0uKt4ak/NMBQa8x6O4m9wk8snlaG56r7XUqcA1OSQgMFBn5meZHO53NUQFgvLErTahObSoTWzsa/9XOzUVyOOYalXDomA6EJ0ZVymB0Dt4uTsUvVXWMUSwYxZDMS0ytPFEKqHtFBGtiYQsa3PWnRf//O79N/99q/oAFCEj4ck/5J0lkB9G7gylTCOcQgPXeSnjPoHwp7Ru35JOlQyvn3u8Mru9fpy7e/y19m30ytOWYKzHTfJYkjLQAstWcGOCg3cJLDs6HWWJJoJDTZwGoxyOCZ+rJj0z8w6caPkXKMebthaSZBSuVXvFVFOQG+GGfOH5fRcgB/pVIhn1nt1J9q25IfOzREEuY40+GQRqMhLS0t0Y1rV+jezetULFfFcL4/aYuhU2BYmccnMR4TntHN5gFduw82PaanTzXo3Ikatbs9YZ7HajnK8qtqtQdUYLaM4AEAHvyWB/0xP9+UUgzQ2F6PhhO6f2+Tvvviy8y4f4KOH1sWNpf04XCOWnLE4bE6QOjEBkiWncb0WFcuZZ/mQZwowaVjJZ01ZQoT1qZOnFbiJAZkhBQCxA0gxmoJR930XFM/dozRm12ylcynKR83EJW1q6YaOyLEj8HHIxSLUqkMh85s4JBoFqrLT4aafpmP4X5ch3bk++Rl1Ad8IoZb9iCEAsJhmKyva21ahmxoKh4uAHmUsOKpxEh19YNoRL9z/c9od3hI/+Un/106VvxAQ2jEvqE7OjbXCWm1PTS/zy9zBv1Xuwz+068m/TYwLXWWr0+/3332hm363et/SVvDfZMvN7OilAq0pIqkpX8iygsGKS+TkSQUMokc8MkAQMKYPwr05LGTgaLuMEws7YXieOeaDbITN8RmW1mUEFyY9DM7BugvLi7SsdVVZtE5mVqUxcL1jFpC74+mImw18Y/j6+u0tb1FG3fviW7aDo0ApG3DLpsv0NPPfIwaC4tiSNRkwP3+5V167fI2lQopWixn6N52l/Y6QxkfH/KC0YGPdIC0kIAK/LdCMS3vBQM1BX7f2JbfunWfvvXCy7R/2JSyji0EJKW5pmgUF3RibbFh3EnW6RqLUdcY8icDXMmmrDizZoTdkcST4loFjodAHNeyYs+kxKglqGt+t74dMiVq0lc83l4Io/aUkWP3g/xBuOTB+KgMuVwOTDor3wMwaihorGrHMxK9+Gp3S0h64Z1NUSxj1dlQZ6AcGbMXh8N02rxnU+aRGC8nrlMnGzFQAmFgKSU1aS/e/YWmxINm+pC/T390/xX6L178X+lq8/6HOaWg7vgxUjOx46ank2EW7c3hdA7QH+oC1mqvdDQl5bjZnp1+ZIOR//fd7Uv0jY3XjAGPY05gN25ueY6WNewWMy1pJ1oP9hmU4KmBjD1ccrzVncI43bFGPYZ9ARxEzREdBSEDTDGjRMOQn6taW6TBcCyNwgyc8dZWqLHYkGEYsHYxfkdGoZzIkfyEsRGuqEEvrSzT5vY9YfJ5vL5Q8/ig01aQ9mjtxDo98cQT8j5gsoOm09u3m/T8K/eo0xvTAjPoITOxg+5QtM8wbzpsDcgmcqPsglFxBA6UDEAFfByuXb9N33nhFclBTLlaf54NrMykbnGWoS132sxBN1HmMFz6SNEpdsJLjNvZMFmTFJ6sT0eJZcF+hhJ84CTKGxY8bZnEgr8BdJQskNKe8rR8IQocfnMwrCrzYlUu8CIF/274gGPqspAX21goXNJyPyfxfZhp37H7KBUzVMG4vzMrXeC/+QK2abnO1nHjMOK5M3UMRTHoT8VS1RfjJB12SqSkm60aUlde3LtM//Wrv01XWxsfdHo5hkk/Z8gO5CBFmlsXzwH6Byhv2IzBEx9U2tgfdugP7rxM/elQuvoWNOOZME0dNSd3JMwVcVRSx3VUj1ssl2gwGIjkTTw6KBRVhTCxxDYb9c/kLtuKu6IwjCfekHQNwyEYKg15r4xGHcyW0szKllaXqVatSD0UCwNYM7THgTkpRwD04UhOzLNnH5Pm3uHBAeUYoIXtI0ncsHmc/HiMx86f4cesqqu71F89urfXoz99+Rbtt0e0ulgSrw40EBuLRRlJPzjsysuFhjuTNtORTsgg7UldFg3Mdy9fo2/+5csM6B0BptBO8hEl9GQ6ROLYKbykXWdszp+UFDyQeRglGoaGWOvC58bNxJkqhGY18SOM1o2TWSjx2UeJHRSZ9BXxhDYWszaaDAwZQzxFXqjw3sGkJW6sqBmQAGiUHTQAWNm0a4Ha0V0Wate1koK0Z0BY0l4YSPH5wpEQiyslQNoeJ4psNNhsKcKQEmrQ+CwjG8RrGprqK6j+Ha/sX6N/+Prv0M3O1gedU+jlfMqUCi2Lzs5Z9Byg/0qXg//gd63Xc9WUN04ZBv1I9vzSzhX67tZbuum2E2Miq7NsyspCjfE6dMieemiANaNxls+lmM2OBKjtlJoMGkjt2ZMtaSqRlJE8+e2UnZVYI9MQVplZmPczQxsMJmK2D79msF+UO9CERP7daDAUCR1OZIA02DOkdaPRiBaXV+j0mcf4NkgTmVIB8VWhNscwio5nHPJzYeJxbW3NBJWqDA7b8/YgoOdfvUPv3til5cWyOLHduXtImSwm4Fxmx11pDoIl2txEvN4SM0mJiGJguXTlGn3re6+JnzTsOimWrhkyF0NKRAmxBiWOTjwgHtnasimNODbD0Lr/HTm2ZJ5L8wLj8rRRUkTJ4nZMx02z0g692A4cUayVJsuobcoKjqVcXUk6KWY9AWrYwWLiE6qXQiEnY/V4/xLEIOUpxwC+I59Vu9MTaeVCmcHdc+Pj4MlCOpXPN53JGS1+FF9ds/uyk662Jo1DIinkIBQpEwtvv2Miundi69MXti/Sf/vG/0Vbg8MPOr2eMteThvwU5ix6DtAf6hIxG4zEHjJuDqL7sWa2ZI98z4ejHn3t9is0mI7iTFM3cVY6pvkza3LpsIm41zHwImEkCqfU63aFjWaYCZFJtgDzRn6f1k9tycSYBhnbSWEz0nF3xGtjMg2YAU9Fg5wR1pWWx0EzrgMNMkCawa+2UJf4KjSCMOUHNozEleFwQP3ekK8D2RafPf84s+M6dZv7/FhZyuQL8j709bkColhsTqyvG18Pwz4dT2rXsEj93ju79OaVHcpnIuoNh3Rno8PAA1YYURMg7U9U642k7EjvXygw0PAV2vB3L12jv/jOq9TqDGTq0DEu+nZqb1Z9iGKPk7goETkJ8FUQd5KsOTKxW6H1nA4T7UXT4IseTBy3jT5HXekeMNizr4JiIHfV8ShyjgC6DB4ZcAa5xceLUkYhi4QbjPZ7wqzBjnM5XbwwPp5DersMKwXiVHh/Y4s2dg7k8RbKOd6FpGarl3k6NArxHYJRlr2EZhehjWizjEV2KEhVHL6pV7tGJZPUmMcaOv4Fk4f/y6U/pB7vIj/ggkGvxwz5KZtatOuaRumD1/llDtAzsP31Lycd65bMSn/2/djzG3vX6S8334pPSNcMFZDRrUqN0u7H3UiGQsA+cSUxVAcol2h//5BcBkBr3CNbWTU8Fl007osGjWw9rVLAMJ3Q18cRs3jzO+rLriSDp7ROaYY/BmMkTE8F6ErMiKHGCKaB1J+n/HPAwNxtd0T7PBqqouP4qdMMlBP+W4eyaBiaCTwF6Ik0lmpLC5TL59T63jXBtAK0JbnPhRv79N23N2lppSJj4K+9s00Tvl+57Im96oQXCUjLoF6RYFd+jlIxS/l8Wurkb1+8Ss9/+yUG9I4wS1uCiJlslOS0M81zDKrOg+zXKCjMfWNgN4zaSu9m4a4KrqGpxVplnnwGiIsSu1HVbuvn4hwB65ihRso+NT/RERtVaRxictNVZgwVDgJ/EWkGQEZtX4KEJeKMAVuCg/nznPTpcG+XP4Ox/B2tV+zEqnnEVulOx3p/YPEZj4c6SZrKxECrixLFTDouGpvdApQdQRTFssfE3DzZYR8Ban5f/+zK8/T1u68etU9978XuSI+bHk/O9Hzmlx9iffbfuEug38hkc3DVNAYXH6n2mI7pG3cvUHPa1xkHUlVAzN6cVAJIQpHWpQScU9KoQ8MMIFltLFH//h0pb+hOOVLjnpmQV07+yA+1RAKwnYZycqMyC+CV8Wjzu2PMk6BGSBsN75RZqoA9HmsaSGkBiwV8OKzNKdZenFz9TlckgIP8kIoLRVo7eZru3rlNvXaLyo0VqZPjkbATsKUVlEwKhaLsBMgY9ZAp55SrBclUvHivxbe9S8+dXRYFw+ZWh9ZXqzJq3G0PJZW7UMqRw+9tONISBNLMsT6h2XmRmTTw7Ys/+VlaXqjxbiGSzEVJRXFmRv7RDI+VkRuAsnmGEUXJmgXFxv3JPyUGp6OEmX58o4hivbEOfoQUDxVGRxRxM7bthLGp08yiX9Uh8KH2zMklahkvkrR1hwEXtrBFt8L/MSMLDAynxv02L3DMijNt8kKXcoFLYxnVJqqWMpRuT8QKVhclzWfE4j7xxxIMMRwEZvJQX7+d0AyNYVTyHUNZ4xjtfBTN0iJthJgsSEak/o8vfpU+uXSOHqu8r48YejpIZIHRP6xJe3wcpnNonTPoR17ampYC9lwyoLxutmKPvNzp7tJf7l3ScmNkGkfOjHG5plmkE4Su8d7QWisYCVhrfWFBpHUodxQKBR3Zhk9GpPaTAswhFBZqSWqlcQLKSO9goEVKiyOmP6HUkaVe7bnGLpNEyoX6NWohUjIhV/S1uD221HhNvnk81Cv7fZQ5+pLaDWBfaNSpsbgsJ+B40KF0Nhd38y2bSmcz4mRnvyKubN9Tuo3P5KhaXaJKuUaXbh/S2ze26cyJGv+tQJdvtgRoSwWPOr0edToDkRwiGSaQ2g2DPzNGXNH8fJeZ9Df/4nu0ubNnmos6ZENH5gMd49Xs0JEgUydRoD4CM1bN8ZDpwgRM29HzSD6XQK4AL2HQge5w9DPTKz5Lie/CwIfMkRuj1CjZeEwMokisYiSqFTT18rx4L66eorWzT9Dq2cdp9dQZqi2vUJa/J9Cml/l4Liwvy/HKpTNGq+yKJjqXiowxliffT51KJdmpSJCDLXVEZJqvoQbvJlQusypQJLs0u0OkxNGOHmDLdzq79FsX/1i+l+9zOWua70u2zLH797/MT4/z4uh1fpkz6OTC82Bz8JEADZnRN+69QbfaWzq9hQZgRAleZBiH6Vzhy5YydWd078Gecwx0pXKZtu5tSL1WFRozz2Kc5F4YCLPUZmAobFKIT0r11MraQqljBiYAFQ5tKViSYkgiVBtK6FoRxQRQkZPMhbxvKk8EdQCvEQzaGkAKZQekeePhSLbFYLGNRoO2s3n+e0+c98C+fRl4CUVnDWN+RG9Z6FNvZC+uE2f5vgB5mA29e6/NWHKHnjnd4GMQieyun/XEs2PML6TNrwnm/sg5hArFYZArMEDjuZAWfuX6LRkG+tynn6NT6ytiVQppHgZwrLlQcphlBjiWPR/16piZR9sJ6OioZWkChOwko5QyaMY2NSx29ti2lmstQuL5l2jG4EMLjqEya/H2SOcpzQtdqlinVK6KCG4aTfjz6Pf4vfd5gRxAYkFFXjRPPvkE1W7doub+AU29kAaQOfKzlfmzyPL3A8nfHgNx5Pgy7CLfEUl8GcluJ0ijtDWJdx3SVOTvRWDBNV7cZk1okRKGTlIPM3NpNGD+B3depL9z6vP0hdWPPer08QxAL5vzDWWOfhCG8yzDOUC/9zL6z/7QeaA5ePz9as+WPf/+rReNuaPWEWdqLW1wqKpCLUBdCeVU/TBOFJwkyysrckKMR31aaqyRNaVXtuXG6o/IBHtKFBMYdkoN6cHapBNvVHzQwwahY0x0dAJME5vJmMPLflUy6awzHiZ2XbNowI/Dxw5gQjSUqcIRg8JIMgXB9HMFSAG7ouoo1xYEEMHI4OVQSmfFy9oznhL6njXOK+Wp54hXyEvtGu/h8s09ZmUBPX1uQaxU9ztTGvtdOtYo0HQyoE43EKOlIEqLCx52BAV4ljhj6g8ndOPWfWq2evTEuVP0+GMnaYWZJBa8Kb9mCZydGUKbjMLQFo0VkORneKQ+PbtTorrtHC1/JCV30iy06S6U8PuwnDt5PzoabIvPU1kpf6pIxMkyK85VGJgb5OVKMoU5xmfAoDwVKeRY3hckeWvrJ6m+tk4He5t08/IV8U7BfdPTgEb8GSLhpsggHTSH8r5RUov4/uhDaCDvVAISUMYKTIq6vM4glEVVJw2D9+wmAO6O0U6HsTkVxe/fAvWQvxf/57Xn6SeOPSX5m4+4PAjQ3nQ6nduRzgH6oRd8t+C7UTFfmpPvx57hkfFHt1+ma+375tx2DbDOGi7qFqczhWjEeZ5t/qXMbSLxaO71OsLEsoVcLG62PXLHnOShGemWE4wodhqzoXpu2lXWDHCVrNVIG0/GOyPyfZHnYQ2R+wdGJyuGQ54wddTG02mfhgCCcCrAMBwyII8mNGEgqdSqwpA7rTSz6L54V2PQZtBjVjeZSq0dFqmqxLCLVkqaoS78LLy0bKu9KhYynw74+Nw7nFDqTptOHgvpzMkFunRtVyxNH1+v0IDBqdNi5lwqiuRuOJ3qUEc+I+8PqebNdodef+syXb9xnz728Wfpc5//PFWPMQsftAXkI3+i6dkAbNGGG+N9jKsn+bU1D3IcI8NLNstm+SuRocrJGrdljU6CbcaYHjcqndlna/MCvYyUKmDxmqksMmuuS40Zi64/5p0LL4KTyZACfyyAitJVoViixvIK5XgHc/XSJfqLP/xXdO3dK/zNzVOholpqCT3g5ynmUrKDwkQpSk8+1DaOqkWg3Jnyc3hoJmZyvEsamN2AI1JJfF8FgK3rH83G2MXC1Jk1FKNEmk2yYfvS7mV69+AOPbf4SJ6zZkocVUOMmC+kxnN4nQP0o7ZcBdMctNK62qNufK+3R79/8wVTe/bUltKc2FpL9MyX3Vc1RiKVAgkiuC3UDdhm7mxvSk0XHXfrQmckp8Ji9ETwVE2AuqYkYmhBxhP502yL6XmmPhho9iFOJNQgJxNfa4yRVRioU5mwHqg4ZIcdMoCmpfEEVjwcRNTr9qnfHdOgNpTkjiqD9N5WRkoh/X6HFpdWhOUN0BhcWpChCk8akgHZDD1Rq3hpTS6XskxW2Dco/7Dfpe0uaqI93pY7UpeG+f/1W006sVbm9+oLg8/yc8OwE41QLATFAq+lvH2Xxii/+G6nQ2+8cYHcbIW+9Et/jxaOP0Ujfn3+pE/RFAsOwHlCIYNVgH/jd2GOmjMWwnOCFyVx98PfUSqRncZsDH42CESJRZlU++2Gdjk1s0JhLHNzLP5Hqo1OpUuUZrabry5RrrJAbqYk4/ihDA31aMK7qcloIPavASY8+bVmGEirS8yaK3Vqd1r0nW9+g156/nnavn9fDjN/bJThz7GQd5lNT+X7By01dkUj+HLzDgiLJZqE6H/Izovf62SEY5vTnZSvZQ39zumoujBmJ7Thi+a7ExrTLleP30Nc7XAMmvw+/nzjTXqmcUoUKg+5oMC8YEgRmhdpx5nL6uYA/fDyRsY0B5fM1ut9m4Nfv/saXe9sGndKO41la5heXFpwZEouIycHTnA0tDBKDglbebFBDp8Yw8GAyguLCSP1MGGJaTW8qo9VgLPYF4lXsa1DS/sJjmmgSFKmCOW28mFFpmFlZHkzQZqWObCtHfamwrjgtDZlgB6NxtRrd6lb7jJolqlaLvKJXpGGnzcdSU004NeNE761f0D+iXUxT8LwDTTVCmqRekWAVbvK7qGllqWMGR/kclNEZTGlf+nqIZ1fHdP59Rq9vdWhDDPAlcWSAEmvr6Pw2KWgPi7lDkalYTgRZggp4YQZ/6vf+3Pe6mfp5/72r1KxtioxXLacgdgxR+r5yqjF0AoDHJAtQqLoM1sFKDLrDsb8OzNMvoEkqjiOGTB0Z4qaQMpOjkyE2sKpNAYB8NMJTUeoFU8kH9xzTKp4tkiF1fNUqq9JHd8xMkUsQpMxpIZDKWVgKAgMF0y/Xl+i8vKSSOMuvvEafetPv04XX3+Thu02BfB2MaZGKF2gD9AfIs/Ro5JI8Tzq98ZSikqnlV2noKHG7+NA6/bTieyefDHBikx9XUsdcqwAwk4sFDXEwTQU7c4gqXyJ5TNEr+5foy7vAmq54qPsSRsJgE7t/v1/4dZ+61fmdeg5QL+HPdu8QURanTYljodeMNb9x3df1pquaSqFcVPIlUk9u83LZPPKTgJN6kb+XzqljTMkdE8nIz6ppyJ1Ux8ESMs88dqwk152KE3ahI46m7mhY5pS+DTUklKkXp5aWooXh6vDJGgWokkINhSGepU37aifMmqKuXxBQXnQ1zIMtrijCTPoFnXaRWZlFSrlM6IygfveaOCRH02pyyCxdqIuE4HdTk+CB7BDGPb6Im/T0sJsEAIvEc3FrDnZcWxGzLQq1RLtbrn0wlvXJZD27EkGfn59OwcDWm7wc/KbGfWHlCtm5eOCXjslHhYMSMFYhnNSDEb+cEDf++bXqZAr0U/93N+iVDYj05Jgp/CXANjPjOohzUvzBsgzwILpTl/Yr1eMBDilCWpqsW5aNdoAfDxfJCG3obBfpMBIVJc0iiMGxS6NfTD+IaG1mXMZBKORjGS7XpamfAo5vIhpRcUXZosyEV4rVDR43kKJF8X6IhWrFdq+e5veeuVF+u53vkW3L18nD3FVpEM8pZTxkebPq1TPyaKHvPIiL1QFXrgOopEMIpVKBU1rMbVnnS4MRUkEAgF9NMBaVEdoJMsADfTSI2EEOkDkxLpvsSNwtVx2xJo/Ls9HdKuzTZv9AyqkYeT0UEVGzRAjGzbretiOzC9zgH6gOVg0260PlNZ9Z/NteuvwjtnQ2tpzFNeedZsYisdyOpUVfSwYDuqGlWqdgXIsk2GVSpl2tjdkqwgGGIVBrCCwPXIwMj795efEjygVuvGks2tMfkTrjHBSU/P2/cg4lUGnTMKqAITEJxrqmKFpWqpsRV97uZRjttXg1+NTp9uNa+hQcLQODySrsFopiZc0ALjbVAkhShvTYCoDNgd8u9XVFUkiP9jdM+b5obA0PTZam8bZly/ltZIT6OAOjPsfe/xxvu2E3r61ya83Sx8/v8ogNqXD7pjWFgr83nkB6YeyJUeWodTZMS7N98XkJMwhwN4H/QF9+8/+UNJoPvUTPyNHMohUrSJWqZAhuroNkddmBkdEC2zcAu2kJn6H3Snc3aKxgiiACSxU/DcYXIPpUGr9MDJCcKt4bGNXAg9teGwPmBE7Gco48F3BItKhsZuVRTCbzkltXNQ2yJScTgUo64uLDLYNWfRe/M536MU/+3/p6tWrNG4xa57wAoC+Ab8fTAxifH4CFU0Q6Og4CAEDd7WcpmI2Ja9nAstWuNrxf8MOBJ8jdPhoVGN3BWDGzkaIhFmQsKhBt4/GNlQdTjIuxuyOtNQRxOEBNlrL9ksPRh2629ul46WF9wNomwaOG7ip1HxmZQ7Qs4trOshJ9vxIYySYlH/19ksSZTVrBplGirGsjAy7gJm9dL59pRjY/qPG29xviSICdecOn3AY7RZnudhpTWvEoa05QwMNfTJYM1JUQrVHchF1BWN+YbwADcdIv4xhPdgqAzdehXVBs+Nv1v1ODHf4T3UG6Hy+KrXnbq8nbFtleSNm0W063G9So7HIWKJRW44ZO0eNFAC+drpBrWabVo8d4y35At2KrsVyNmzZyUw1ihQ7CGW7nisycIzG/GVKyyKG43XqsfM0GY7pnZt78j6eObfEIJOl3eaAyjmMOYc07pPsOMbilRzKdt0PtHQDAIYHcrt1QN/846+KNvvxp582AyperNrQj8wRwJQ2rvVOQckEi0hgpzF9adKhJo2yDUoEOMYAaGnA4rPi/zYe8MKRK4hMbjIcyfFGOcWNAtkhMX+mCe+MAmakS6mcsPBep0NeVSVtqI/jPvWlRVGqwB/lwksv0+svfJveev112rt3n4a+5jCKxwoD7wp/ZmDyncFIXl+WjzMsXzFENGUSgO8ayhxiioX3gsUQpSxS18KssOiJ0Wurnlu8o8daaw+DwAQWpLTMEdffHZNnGGqvhdSnwzHfOZv8IpprPk82mEGPodXnx3hILToJ0JIGjjLg/DIHaMue03TUte6cAeyHXl7avkTf370cb9etE5q1ntTMOYCbMiRIqVBPBLMDs5TkCj7pK40F+QJ3eStc4i2spq+oxM4yvSBwhfEo44WPsIJ/GJlwUzAYTz0SZFjCtU1CJ643o5xC4i7nyF40ik2BwngkPcMUrF7JM7uvUJPZ6ubWHvWG6h4HNoPtcetwn1qtFWb6BS29GO8cPH+32aRwldk537Y/GIheWnTeYHTpSBpwtgGFkxkAjfeBJBlppAbWItSjMu8w1k+dor3tNF2+cyAA8hPPHedFjBe2YUDL6DcyG55OEJaaFbDCsYOBENgrnhNNLei693l38o0//AqD19+lc48/KQCLYwk/a98MlUiRylWXwNAoG0KJmnKlkSY7IRkaScuiJDJGfyJ+Jr1BICqWLIMeUsonk46Mz0+GAykfAARRuojMIAs+pwEvSIilSgUpKQ/h+OUzOX6clLyG/Z1dunnjKl1+/QLdvHiZF/NNZuC8cwiYnWPR5N3/QilNCODqj5htIxoNihj+HV7cS/yOirwo8ZeMd0W8YysVpLwlAyzCiNUDXFg0goL5tj4DPErk2OXBrdATjf5UFx/+rnoSMuzJf3esIsXu8YxPR6xYOWohJX/fGh7KdxEg/RCALhiALpgyozcYjuYIOwfomD3bwRTMpZ7h6xPvd4c/ufsq9f2hcl3HBCRFM9NPqe2ingeDdLK+GSGV8gUqlqoylYcaYZnBesQn8nDQZda0NNsTOok6X6jgA7C1ZVKAWWRsLSMz/RWGqtgAwCMQwJqwC5NHrBY+ME/z6aRDL456irCS4lLOU5VPZjwXAL6Yz1O/21GmmMrI9nfA/z7Y35dBE8ex7mcaIuAzq2zv71C5fI63zFN+byUpL2B7bhcbqAXCcqR5iubEBvOV1I7xNJ66xIKCsXePt/57qSxd39imfG6PPvb4Kjm5Ke0fjoT118oOgymDPC+EE2G+fAw8X36GU35ML5Kyyea9O/StP/0TPvYNOvX44yqvw45D/EPG0mD0+TVP/ZEsBqqf1rF5sGqUTUIzlQhlio7za5MRxxMSxLHZ+kNXLN7WDGj4XbTLJr0G4Iu6L8Cs32lSZRGhCUTDbpe/Tx26f/cG3b15ne5fu0m7W/eo324JO/b5iUcTfq+8ayozhC0VVIa3zwtpSnTmRIfYSWRLlC2t8LFIixpmGqWEiS/U8rLA4HugGbSOTHf6vCuYjEfikTJNTXQxAjv3NcEncAJ5n2gSulFKUuB9I010EhmJoixyZ99ZJ5mZHqmZ1/agqceHAbqYfij3qRiShHMxNZrMJ77/xgP0A7Vny56ROVh/1H1gSv49Zs/qTJYw0LHOavLl9ATUXFcz9lDjRNMQZvdZBr5Os8vgVZB/b92/zSfwSMoQZLx57div5yrogHm6TkZOGHQJhbmbUgqSvINIo5AAWmD0aFRBNmdz+gCOCHB1zGOKPo9v76V1KtHjE7Ba4dfDAL2106ROixeMRkUc0rq9vrwX1INHDETtg32RBYpJkpMSCZy2LkMGzj1aOLYmz4P6ZqlalZJHaFzkxiIZm8i0JF488u9wtKDblRBaYbKaTpIvlcVDYglMjh/94p09AbZnHqvTIb+/SaBKlVyGGSQB+PIMLMoMwX5R9gjEsUlrwbcZ+P6EmfRnf/qL1Kgfk9eQyefEgCiTrfLvUoiS9yHLFjTWk5FIJKNQ67MArhQahgAxZqNFlI78iEFYG3sAp6wpd6R4cULIF0o7GChKSxlKm3GqG+9Su9Phz3+DNu7cp+bONu3s7jJw98jh7wOaa5OpAxWhLGBgzY2SZ8pZrujDy3zYRvz8O7yriAoVSlWWaJxinpFCQnwo6hR4sNR58c14jtSrRcYZKgDjuPj8+pCugwYxxvop0pq8VQIFVoIozDujplpMMJzkOLwTzab9jxj+GScPPpa7o7YuxLL7s+G6Ry5JBp0a/MZXnepv/Uo0h9m/2Qw6WXteM43Bp97vDhjr3hgeKgN0EskamvesBwZJ3V7aNOsUoJGqjQGDlADmVNK6wWKazEjVcc41bNdNOIOFsu2EDFZKGJBzRYLK/O+pvPwwtOGxCvCIyMIEritlC0+AVNJSmMk5qC/C44ECw288aQYVi1mq1aqYG6fd/UPZgi80mN3DXQ6e0mLaw8zP9anHLLrdasqJB+YcmJFqLA4TBg2Y+p8+d54KfMJXanUxRYJ8DTI0bJnHzNgAvl6kCwfqwGlRWQRabpBRSFeaolLayZdoYW2dWnysLt9jJs3McP1Yjbb2h9TuA/yYPQ/GlMNxwEISerFO3A+1jiyDGXwsbl69SFvMppfqVVl0MPgipYVsjiI01rJ5+R3p53m47xWL8lnm+LODWkSm/YyviAMQc6Bv9ymd49c51dLRFGPogwkNebFC+C5KGAEf/2FvSIPxhPr9oei+O50+HRw2qd1s0XDYR5NCFlc/cCSDUBYXE06wUHSpwotYZ+DTmG/n8dEBwPWGY+oHfJxqC+SUa9Txi4JxgZdn0GWGj8+cP9McEuNzHu9mfHnfUcDfGzeU9wIt+3Q0pBzv7MbMomXsH7zZeLng+6gT6FpLl5Jd4Mff1Vm2YmimR02JQ3ISrW90RIejjgRZeE5R6tAZ7z3wYVUcWbPiO57rzAH6bypAD3/za8mx7oUEe36kax3yBv9s4w3p6NtvjmvsNEOjHXXM5B7+7mP7LMyK5CTP54s6qs3feAAAmEyruS/sVLrWZk/oxqkrTpwziMchaRoyAHmhaIAdK1sLIzNM4EidWTXH6hc9ZpAAOGOh2N3eYnDtyIIAcA3V3IwatTIz6DLt77dpZ3uP0ryQVBikUmur1Bv0GbQPNJoLeuVgwid6k7LZojHV0Zq4VWd0Oy2ZSKtIw7GgzTt+7WkpzQQMBmNhY9DckgFRZOhBxRFOffXQRgMUcVCojUa8JS4yoK6mqcmLy4Ubu3wYPFpZKNCd+wc06A5oeakkgFYoOOKOx2grNWiAJhpjAFFhniEc+loU8eeIUegxA1waI8iSDhPEZlZkvLozkuHniWGRi+k+4deqDYYToGuTV0h/x2IlzTaUSUKUPlTWF4x9fj5NnRFzJTQbsWhGUiY2gbKuNFGnvEsBqy8gnTtAHV0Nr/pT6Kf59YyhsBlSFyUhTA7yZzTNVWno82vMFUVh0u2NyKnnZXIT4JqVIAheIA878t6kcT0amfTxlFq8FiIq8sLZbh2agBqUd1zjJWMcErGDwDg6Flu4IibG4WMfmkTdOelQdTjp0f64ywtNUUy9Mu+FD1viyMWNwlR6LrX76w7Q+f/pl39Y7PncB7Hn5+9foEutu4mkZz2x1C4nMCb8aWHGIamsToY0hIUVmUXnhKEAgEvMzrD9hVoCv+uUoTb7VD7nmCxTI99DvdZRlgz9L/wbGIdkCyuYJjItw6gNWAahTgPi237x3Yv02uvvSD0ROmz4f+SLZdHFNmoVee6NjU1JAV+rN8RHeMwY0W4f8iJyyABe1bQuRqFhvy9GObJ2SN0xiE/NEbNDMOxGndmzoyb0YWAak1ASTCcqNxQvVAV3cVuTyTZjmA9QkBp+xgCh+hY3Vk7QPjPMC9c36RPUoJNrVerw9n6vOaKFuiNNw9AxiSMyARfRyJg4QVOOxQsK6CHAjlnoCF4U4VSjoUJfFl6pF6MmLSwcErpInQfF9yQUwAUrh4RNFTCq0MFn6hv/al+aipo1OA1M6cQFyKakzBEIJTXGSmDE/Lok6irrUiGdEQc/fG9gGwqTlDQWtlB1153OWBao7MIqhdUlGrh83KKCsH+dPPWpzyA/jYzpFpgyv3c0IFFOgmSyXGXG7XZlR4WGoM8LyXg4kLo/FvThsCfgaqcFHWPXGhkbW/HokIzCwCiOrKYu4RPtHBmipwF/7lv9QzpbPqbv/72XRXOtGzad2/n3f1cOHp/j0Xy68G8Qg36APSfzBpcfdZ/DUZf+1a0XqQ8Zk/ENlu24q+PXODk0rTmtKgVfBwAArrCBhNoAzS8w2ZzEFxVFuoahkCUGSztCa60sRZ3sODOFiGlGWtKCxxXLyNAz01zq6+GiZOjpFhWKBAyV7O/u08uvvkUHzTYDh6Oj270+nTp1io41KgKKt27dpktXr/MWWnXLA2ZYm5tbEn2FqKPhuC+LT2QkcwObS2cmyqy5PQZdWvtNCk6SLFTqgBbKyYwVRQIBmNFHZdSfU2aqMYyz+aCEsM1S7CpExiYNUIi5C7S4fpK2pmN648oe/dizx+j4co3ubrao3R0LwyMGrGKxqHVwBqgpFrgQDbZQk9HJEb0wAHSxUaAC70aQNO4yUI34dQXMTNutHrV7/JOBDpI5aMp7/Hds1cFmAUsTGeJwBSxRRhrzbdImABYAjSFKLE7DSSDG+3i3EqJgFiEQfdSwy0Wk2TDjdgIqF3K0vLosErfNjW1ZzDP8uSI9+3CoftdefYHcxqpoqCcD3nGkcwqazlAaeSlRkwyFreczadFuw0MFBAD/bTzsUm1hmb+7qNxP9TNNB9IshHywXGswCx/O7AVsXySKTGoML3G843Ol1BHEQ4ORKXVFCchOXlCu2xu1lcxEDwVo1KBPmXNxB5jO1xZaRXy++gzSwRxy/+aUOJKmSLAUPfvBtecLdOHwhrAhO4Atdp2RSTpxFJxd8a6NRPeqRuikDSl4Mac09QQADcOgzv17ctsig6iTcN5x3JnVtpotadMK5kKRH5mEDL09TkDslW2IqEq5VNcs/05P6e1336VmsyVbZ9hP4mnarRbd5te3tFClfr9K9+5vSajs4rFVaRh1BwPa2t6hJTHlyTGA35AmX5a31X6kkjnHM/anAUkDU7yoGWD3trepP+hRuVIUFgxGihM+clS5ATAIkBYt3hORbPs9iMYg/wpnEi2SYNWUNLsA1ACinFekYyfO0l0G0xff2qTnzvt0cn2RWq0Bs+khlfKe1Hlxe9ReUSroDxSkppEqSAQ4xxOVzSHY9s6+NCS12oBFxkx8olSFEoOD4ADtBaTTAHs+fpDLMXBC3h5Jbp96o8ji6pIBYi2Fpfj3HB8f7Bocvn8h42oqCh8bSAHbbZ+6I58yhaKUvvq8GKKpGzKbbfMTTN0MOaVFytSWqO9VxV0w7aiuHgDr82eF7wEmOPE9mKIM5qZ4Z1bi78mURlM0klWGiGg17GAy+SKDdU/9upl9Q36IpJz64poojbrtg1luoRPFBlKhGZNHg1gGfzQ7J24MRqY34yTcsx1TGtobteR2QfTIygVisLb52jcPvMlXNDz6DNJjy6Z/AFJGlLAo/Nd9rDlAf/SXZGLKcdMcPPaoG7cnffqD22DPI2FPWns2DnBGv+tJTFFK0yiMc5rWZl1VC2D0lv+O+CgN+BwyaB5QPp8VXw6bQg2Wk3I9w0qc2N9B+iWhupKRqBYy6m1hg/BCEUSp9MsY+tTKZQauNt26fcd8MyMGONWggv202226ffculapl2t07lDHnarkqj7txf19GoJ948hkaDDp09+5taWalvYycfCLFSix31vsZP3vdJm1vbEgN10tjirIvr89OmOn4dEBpc2fbaJK4JWOF6ZAdouFjCu0vasi+AnyhUqNjp87Qzo1rdOHSjgD3+nJFQBRM2kvxbXKhuPYBwCB7CwahsHOMdIuuexJRq8dMkRlsqpCnFAMXwgz6DH5S9xWrTaZvKHlgbD+bplxRDbHky1Nm4ETQLoZWMPyCkg/KGQhjSKPO4dNogsBeEsleRrw7XBo7en8btCsp6qZ23caoPL+mTrsn2ZHIcUzz50H5Go1zCzIgFTGrL5cLvMDxLoi/S0F7XxYZUQv5OaNA4e/XNJQdCRoNwyFsSn1m1DCw4t1Rr8NMeYl6rX0hDABrH3LAsdqalvg5If1EyceEyM88OEQXHQhJcKWPMSWbCGEldg/jQwDlA96FWjb9CCUHzsGfMoiP8/MqX++Tpq10gLOGTYePAGFbAvceuKbMYya9ZCO+vXHzkvZCEMt4jNnjo55nDtAffXnDJqYsJcobj7x8Z+MdunBwMzZmd5yk5lPxXmLvPc2YUmWFmiPBxjHLW3MMehwcHIp0q1KpiOIAaoYTJ04xYykoeJA8iDByN5qFc8qXPpFf4xtfCRsES2Q9isP4v6Ouide7sblJ3W5v9rXkx8l5ykZ7zNDu3NtUxtyf0Fr6PK00z1Ow4dDy3iKd9iqUupClFDOtHxs/IfXMQdjkn7wldgc0pB413U3ap3tGD6uNIYBWp9OmhcaiLDiiboD0TJhyWmq2MrQSaSJJaEyfZOqR3/801CEWqX+6Ss0wlIHjK6UFmABVF2iyPqLW9j1658Y+v5cpPXHmGI0HI9pnoBuOUCMt8eIXaXmJwQnSWpGNUSR16hG/jt5gQvVSVhaF3XafsP5hJDqfDSmPUxsUGSHioSpO8A4i0/AkGRbKSBnCB8uGnStuN/VkxN/1xqImwddtiNft6AQnJIDQsmMKssOPwy+dxoFDnZ0OhbwDEwOlUp5C/lzGvEgCYHMYduIFoJQL6Pzjj9HGHd7RIOlmwgt+rhz7aWBxwOI5GELameNFKkvd4VRq6zmUkPg7M+LdTW1hjXcZOQbmPuUYkDM5BuneWP4bWHyxXKPm4b4pZJncRjWc0elCVHbw/8LpzJrVpoLHYRWzFBoAcnc6MAAdmZ3eQ8e5TxnitGjOz4ukkVhg05BPDfgcttTdeQCE02ZnnH3gmjH/3T6h9VDF40AnOjG/T5JX8zx+AryjnW80I7sInbr8a3OA/gjLG+UEQJ951I3hwvXlmy9Qa9KLN2uWLcB/wBG2m1IVA74hqTwVYDAfjMSVDI04nDioBS+vrsuQCra2eT4pAIyFrEur68fFVrLf7cp0VxjodlJM061SQk6AUP0d5D8HAnRSDokwzBCJPCsy/r0Ob2fhkHfIzBg13FQCyHEiQYJXShfpsenP0KkrH6eC0+BvMm+Jt9ImxVmHOaJmSFWvQXWAZcpVa1PwyLQuGr7LrCs7pG60SxvBVbo+epV6fpMGnS4tL62Ij/PhgaOOaTCLR1mDHxtlD7vT1dK7E2+ltdkZxkGnoscNtFlHgdZGMQFXKC9KfXjQa9GdrUNqVHoM0nXxETloDkS5ATULPhswaYD1YDCW96ZBuml5He3eQJpoGOoo83vpjRAh5lKr70u9GkkkOLYie4TYItBGJnZQMvBipGRjHOcIU4E+A6vqf8V7G4MvbiSKDXipDJjdjvj3cciLlVtgcMxTkRdtGC4NMYpdKlGv2WGgd6jaOMaPs8cf8VTGyKd+lyaM6KX6Eu3v7vFrmvJDawKO6pPVZB/NVWjrQ36MVm8kOz2YJhX5uB7wVgO3geyzOWiLPDJXLPLPLgP2UL43hWJVBpV8fyS4FsZe1yaqK/RVzRKq3aib8IIWLYxJp7H1ZvzsjAe03T+Ux8BuoJ7lBTSVfZjkDqXHnzeMetH8O2cw58DUpyPz75xh2wWjAnnwWnhQvmfua4EZpRO8yWHiOjDXfuJ33Gay8vN1Aezdb7SiOYP+6MobVr1hI60eefnmxgV6Zf/arC6aiPQRLwpsb7EtF0Aj2X5jyu9w8w4zkaJMCw77HU3wzuRpOAZIqWRp2OsxOZwKg4RXbzGf45Oix+CnwAELTtGjesZeFF94fPHRjMRJ41ujn0AYmaRkhHoiYYx5b78nj1NjkJTtMLr2/B/PBJ+jE+GPUy2zLq55oXk/mJIb8xYaYJMuebz1zYgHsZgCOa4Cs6mJB7x9DycMQGOXCqkyLaVX6TH3Ofrp8r9Dh/4W3ey9Ri6zWBwDXUSUeYlTGiSIGPyIAuOKFhmlipGbGQWBZ3YrMhwRaM3bNWEFeEzUXKHxhra3z0zx3bstqhRTdOp4jZnxHu0d4Lh7/EF7Un9FJBbUF7BQDUTtovpo1KNH/HoWssiKzElJBDXZ/giAqj4TE6gtXEdKFpDMdRlhERzgm2OOzxz+2y6aaPw6pwzEI94FjWGuNEWbgB8Do9a8s8oUKlSpL1KVWSql+PgwbS/y4gCKNty4K7K8Cn+POq2mHPtytUFd3n3J+HWQooO9XVpZOyFSxck4I4MxMuWHZiMsbY18Ea93PPGp3R7E3yPJnhxoo1aYujQOe7zYlTUpp9vi70BXJHelSoOaB5tq4mT+JwL7UAFah6E8nXa104WmDh2YxJrQRHvhuzPi1wkXSFH7BBNq8vOk3BTVcyVaztceBtTPJgA6n2DHHXM64m+YAG4Y1l03/66Zn1VDxKzGOpVgWdMEMAOAe+baNY/fNk3Kprm2zN8B2qPln69Nhz//tfBHuQzy1xWgre9Gw8jrHgnQ/emIvnbrJeqOezMVkZsyCSc0G3c1pu7prNpwdloHzHKGVG8s62AATt6UJ19a1AIzZgQcCg5EQKE+LZpUQAGfMJDdFZfz0tDpdXribYFGmWWTlnq6KZXkAaODyIK1Kit6aBxhMeCTNM/AD2BdmJyjj/u/zGx4Xc3bdGBZQAsxV+lKik4+26C1Z+p07PEa1VeLAtCaEmVGevmOUz7B29v82vZG1Lzbp+a9PvV2x1KHR1nnWOo0rTlnaXx7QKvpp2iUn9C9/lWV20mjyRcrzmK1JvV3mzhj07ZdUyaKtzxmjFh+F/D2pSGbZkYIV70R37+2mKFOM0UX7vTpU+eLtLxcoms3D2hnvyssu1FFMEKGCvmcHL8+s0hXpS/S8EIZYR9OgfD2yFXI5d2NU/Tlc4zErW5EQz5OTTREeYHtu6qqwHHHYoidVCjTetIx5R1MWpJRpBbAiwe03EsMiDKiz7usYrFG416H+qgh83HpABRrdVF3dJr7tLC0Li553f37VFk8LvVkyZVMZ+lwd5MWV1aowgvvgNm/+FXzrgwNZJFxonQQajDDYDiQ9+qYAGHiRQi68+kYoLwmMVsT1NL5dqUSas8daeIO8W9eJLA7ga7dGms5WGQoNLFXQbygxnG6UWgcAXWnFUfyPlBuFqmdp540e4MWtcd9Wi02qJErP3gawn7hFxIsuWYA0zLtZXMeHzO/LxlQXzDA/GEvYQKUQfP3Te0bipIt07zE73vm+XtGYTL9QZqXc4B+bxPBljcWEh/sQy+v7l2jN1F7jtT7wjW159B8AUUDjWaHm5KaZhXG9ZmcnMz4QhfKfKKn0gKsyMmDyD8DnwYMHKAWyYynvlDXRGrpkkXMlqrymOjK53M5KhUKUvbotTvUY3YdGMtI1zjmgQXCr10kfeIVwcwcW1iZKtQTocrf8aenf4fq0Slt7EQ6Hg5gBmuunyjQ4z97hp740iqdfG6Bio0s+cwQp0Nm1AOfWps96myPEyDNB3AxK14Sq08yW90d0falNm2/2+ITPZT6N45VwS3S6egZWlt+jLbGt+jr+/87DaKusGkkmgx6bSqWC/yY2biiGFgDJxksMROW2iUV0BEtM5JADCPEgoj6Ko7nwsoxKaNcvL3LzL5N+awn9WTsCiZFBhT+mRIbUdWLD5GsYodT+HE7DNIZ0WjnqOss0DTLDDNnJi59TVrBTgVlj8yCK8d+DMlcxJ8/moRp1XyT0Q2nHd1xYOcE7XrAC3KvtUXD7gEVK0sa3NrapuryupgIZUcZGcluj/r8mnsyvNNrH1KGgSvNC8uUmS4amoMeFu4mf1dqtLe7o7psXz2uI1iipl0Z2IFapdMdiEe0NJ9NXmaOycJoMjDJ8lnpJaCx66awg8gKo4aKA+w6Wyjz/ftxCo9NSJfyF6YpvbQMs0B/LUNYyRFvOhqy6zkzw+ijKmn16LjT2RFStF5efLDZWDYlj7I5X5um6WcHzGw6eOYHgAc3wcJtyRObGkitbvP1lrneSTQuDxNA7f+osem/jgzamvJXzEp7/P1u/P2dK9Sc9GJTJG0MGic4YUau1A9z+arI6vL5itTawHwlgDWj7BAnCtKs1agdBvNqzA8lBjyWVS8MeZcv+ulII7BNdiHJVnZxZVnKJa3mgeiYUX/2rLVjYGw8oVfuD2MbVPDjs4dfouPdT/G/0nH3HMCHVOzKapae+aV1+vy/d45Wn6rJYAMkZpMBvDtsjZtpSy1D7U2ki4Qq+QsMUPv6GtPMsk98skElBuw7Lx/QuDOVx7IFobxboLPFj9F/nP9H9HL/eXpt9E2dfkQzq9uVhQh2qyZyMQ4qCK09qTn+geQn8rYa5cPQUYc+sOhsSpqw8F6u8qI45AXw7sV9KrpDZpkZGvNi0Gx3ZagHmmSZ/MQ2e+LLAuV4qoaBUxyUFdMJg57bpLZTYkZdEnULZGv43CSVhdml6IPTOck7xISiA8OmzlhG8/GmR/22yCvHg57sFLAoYEcTTnsUjnkh67mULi6Ql0vLoiILEvoTmbR8T0a9fcqVKlJzH3YOePFfIh+eG3zMEAh8uLdNq8dPiLYecVYRRnBEk88Anc0IQGNN60uDMJCdGhY01Hay/JwYOx/2B5iPF6hED2TEuy6UOQDI/lR7KBkZc8/w92GkFgNmetUmrqibgCslr6NtnogWMqt0vHqOEW+dqukFOpZbo7fv8uP3ffGQOVb2aW3Bp6Xq/8fem0Bbkl3VgTsiXsSbhz8PmT/nqTIrs2ZVqUpCQ4lCEkKAJWjDgsaWbaBx02ZooGlslk33Wr0W7WbZ7ob26jaD7YYWDQghQAiQCqk0laSSalDNlZXz9Of/5imGPufceyPiZf4cflaVpDS80tP/+Yf3X0Tc2Hefc/bZJ5E4r3TrsrlvK01uFvm+VYNxXf/bDJu97mN42fBbNePCuRG82KWfd9PzRf18SRcuz2hWva4VJoNvJb32rQrQJm91TYDmkOury69Ka3Os67SULSaH3DKhOldCqabGVPV6gYTdPQpVubLOTDUj+UBlbclpDAEdunzcUTjQ7eKcflA5bPHtFH8HTlUMuCDFqQ+Go6Hy8+CQfmZ+DiVi0qsrBITttj4oNQuR9bHih8A3Ut/D3pe+A8VwPs4xM7j6QwJpujkOvmsWb/0nB3Dg7fPSIchM2e8zMIdys6mP9G8CZX7aIg1U8j3Zo0J1LALUgfpaiZj3njdP4dwTq+hsDJX3tJVU8x0K7b+t+j4cLtyLj3d+B32/JznyVqMpWmtuVlG6W71B6WnlpnBoWWqDsHTe09J5VrZ1HQyU1zErSLiVOV8bx6UzdQmhZ8dLcm4GrP7gaSwZZaHKfsqR9tkGIq0SidCi95TLWii6AX0+QH/QViqJXEHUN7wz9Qjc/GxBnReKBKJiWWSAYdCnTaNAm1kTNv0tx7OJ8a6jODbNzkZw6T0MZEIJvU8rkHTEgNZMjovJ7CyXL8q5YL+OXKEi03g4FYLamFo3LDPhNMjasnSDcmGTi8vcI8mdm2JqRCcpX8iKm1691ZWNjb24GJA4PeN6tAY6fQFlTsupNvhAAJnNvCRtRGDNjJ0jv3y+hOagp3PNRmKaOClGcQZaseLbi2/BfZV34/a7b8P2A7Moz+SkaDmktcfR1rmvr+PSSxs404tw4tKArkMb9+3tYqqmQH6ps4EyncOKV9js1tx2rftWDJnoWJoUIXAhkp+BJiZXgAFLHnlQBjfx8PxGih7ytJY8291MAsik7k26X+Jpen6dns/R87hm1JwSaTJIf6ukPG5FgDbdgwag56/2g8+tnZFRPaZtQkZbhWpyMYeGbHSek9FPtJgpHLW1Di7weyKlKxWrojQICCAytOBZusSyJm4U4bFRrXZL8oNKR6Z3dccWq9BINzqwTWlGdMeQopVoh9mnoVgkFpTFOoE0M2oG8E63L7/DKYFCawo7X3kXvLCkx3CpYk2fAKI0m8Xd378Ld3/fLszsqwhg89cZhIOhAmNfA3NAgM12nkP6vmHV0F2TCpi1vE8DdCTjvRxM7ivj/JMbMfNN8scq+p3KzuO/8v4ZPjf4c1yKzojKodmoo1KrKeYfD0xU7nziyqc7c0I9G1CGfsmeRpsRu+F1InHf45/NipPeODq1DaxurCLndjFZ5r45OrcFT7oDmTxxM4sXQMz1VSOQ5n6hGl2Vd9p0DnlAg6Xa9tEhYFeTYbiAyxtqVppBCGS77GfBqYwuAaQvbD4YKMCtLy8iW/LVwXMUpZt3spHKpfPkcZl4QushR2Do0briFAaPQvNo7fTpGndZ/kZ/KyDgZNNQHijbqq+LEiMKLxA4D2jDcoXNZwmUip5qq+emHT4o13OU6oY15WxHYLMVaofeX0l5uogNIq3tYQaV/DSi7qp8TvuIqEc67axMupEoB8msTHVe1EZcsEv4vqmfxaGdR/GmH9qL+TvG0aNoavHFhmz2nDDIVz3suHtC2svXzrTo3LGVbQafeSaP+akGHrxtIK98obWK8nj+ajMMN2XI9X5LtNY9LpZG1882DONak/q4rP+dI6AeJ/LFviH5zBVZk7LWau/UIoMxXdPyNJvmQmJfpzyivwPoreufDUBPYkRdPPp4avkE1gZNUTSYvqhQmwJxN50aA6TsOwM9z82W0UZKmmRZFXEJk4GltDI31pakYMTharuWx/LiRaxSmMrscWbOEibFJkhsysPuzcJe2U+YGJPtubEhE7d3c06au+TGpyckn32RPTToBubJIKUOgfPxR+CGxTjXp1qwKZTcX8J9P7QHR99HIedcgQCBi2A6ncGsWTNovnl8AeZAPudcdJduNPZYhmbMMUhrTwnzdc4PZ4suqrN5NC51NfNVN3PspMor2irhYe8DeGzwMawULogUkdMdzCRhhhbYlmxKGQujVpZWUjTkdnZ2yJPuRFZ6QA03YJe78ekZ8alepwB0h3cI494MMuvjqNhTytyI5Wg8jmvAicQl9Kw6YVQX3Mju+x0EvTUUcj30MjliZCpnz4gl3Y0yc7AhYBXK1BUF0NKUwZ2P2RJtfHU6nqpcf2ajjsfeIh0BvEF/XTX70CbB5zfSE02Y1ToEDLzz9WnDKY5N6mG+GyKFExVNoHLhDQLoiakZ3d5N70u6WPnMDVHw1OuxQkWapdh3m6096DpxdyWnQHjjnbMOYlf/fkx7uzE1MY2Cm1eyRidUHavOEHUihy9OfBmPL3+UeHqQkkaGasCElcGEO4Mfmf8X2LN3N97yUwcxf2cNndW+ADTXM7rrvrBoWU/0cWKhiG59gE5jIPl/2tlxcXUcH328iffc2xG3Ro5ia9lr1/mYLbMNAz+7fv91wYoevc6FVh9Ldl1Y/FShigKPrRt9LOgUyzhGx3Vd0CmY3jcbpG81Bm0KhKYSfFXXOjbReWb9NH3sS6Xe0rIvSYS5rhSmZKyS7qpjKsmh74AW1PrKohT8urRgTh5/VnXNEUifPXOc2FBBBppePPUq3ThdrK0s48mvfElY1vzCgjAb8QQjBsejioZS9BuKSQ7nGsV8J1JGSZ1OV3Kq/Lt8w7PO2rpUwO6T7yZwzquuQj0qi8P/2aM1AufdOPTwPCozxMqINgx6BpRHGbPfYwtKA9QBOmsDlf807NkwZv53oM6NEJZAjeji4QXFySx6G0N5r1Lp152GVso32CVA+bbwO/GF7iew5l6U0Vcs3WJ9uKR9BP0DsceErWYn+pFJm1jS+cZ5XTXuS3kliz6copbpYDt2RG9FaWYMhbCCvEX3UKimoeTGPWJydB1LmaStTIfvfF42LrXRXOnQHdYikG2g7axSDHsCL/pPKTYv3aO2mFGpgb98rojZdtVoqZBucE67cPGSAcwlljqg18p7E7QZDKSQzMoRfv8Zum6Qgm1fWt27FN572ZqshSG3fPs1NXaMXp+9mxmMO7pblDe0sYlJsQ7o9TaEubM3CGvc81lbulW7PHGF7Vvp9Vhyxxs9r5sD1lswu/F21MJJ7Hh4EttvH0eplqXrHMqzzYXfZ4n59lyU3T3YUdiLe8tvx6eX/z881fxsKsVBNDI7iw9t/2XMTM/hnh/ehe33jKF5qUfPLpoXe+jS+hm0hrL5D/Wa4v6WXJHumXagh8+qCCwYlvBXT0b4rvs6aFBkcTWAls7EbgNL3brMw7zuzd9zlM4eiNdgmA2vA/6+2KQyM58ujNGzdnnqg1H77VotYnTapmNxQ0v4/L8D6K3pn8s6LJm62g+ep/DqdOOi3FyqQKiHiTJ7ppvB0Yb5Aqi2nh9BgL108TQx4rqYI4m3QWtZin7S+UZMaGxyChtLizh9+pRcQm6UOHvyhNzIb3rwIew7cIDYshOH9fK3fLppez3Jk3L1nf8L9WRuLoytr21IPruam8DkmW+DG+Vj1hyK812IXQ9O4tj3LGDmIDGB8Sy6zaEw6qEB6L5KcQi7ka/p7xEoD9p0HGtstK90hpIT9qOYPUe6OVbl1xWAh7po6RUz6NeHsY7WSObSlZqsncND/ffg8d4nsFpclCYJTg0pX+xQjxWLpLNS0gO2YrJseK8KqiZzwNGMh9u6d2D/4CjdMVX6de3hXHBQnPIogqigsj0PN+dIbtjmQlpGN8lEapPhNA+bEPE5WnqlIcqU1toCZnEMd1jvxUbvEl7JPIGLmePoRx018IC1xHTMrcYGipWaMGOLi2rslcJ5ZdEXn0XWL6nhwrrZhkGXVRSsW+EiHEcPneY6Ml5Z/DH6/Sb9fkfZe3bo826bNuSCHlBMRIJ+nzXd/HvR+qpi1vSNfLaArOtho9GQdZiRhpJICqSDQYT9iz+EYmMP9r1rHt/+c7ejRtHO+rmOKHECl0A0E0i9w6KNcemFhvZ1sTGT2YbvX/hnOLRxDz588d9qD/QQf3/bf4eJwhR2PzSJmdurxJwHBMxdAemN0210lvvqvPYVOA/1kzd6bqYRdaj8DTVGrdcp4alTXdy/ryepC/eyYh4DN6dANmXMPLhi4CDXpg146CJLT/YeV6mrBKBVV6jyIPc5LrDofsoTESnSERXpm5loZDO42F5Fa9jFjvL0Znrte1MAbfZ8iSuJRUffrMLhtzxAa1mdaQM1E7vndJFh+9V+7xJdjI2B0sKbqdR8ysVbwvFiuRFbNfKOyjdco74ojEvyo1ZGwJv59YCuU218Gjv3HkBtaoLYTlZu5D4BESs7IrqRzp89jc99qkNfa+O2Y0el8MM3udjQiJcEhA2xeoMlrpy/5IYWDmH73Z7oX+e//BByQVU1CejWWgbMXW+ewNHvXhCwrM3nJazttVRB0LAZw5SHGqCHXV9YFH/sEgs26o0o0LnhmCkLwY3THWGKYfPPcXv1MKVhTuehFQtWBcGslcUDrUfwGe9jqLvropEuE9CZ+XaRcVYDdCqkIUXTKIX1u/uHcFv/blSdCbnb2TmuUHMxtquI6cNVjO0oCGNmYI70NOohsbdOvR/nz2Vz4WIhAXg5S5vqRA7zt4/h3NeIQT+zBqtDIOXuwlSwE63eOk7az+Cl4RcxsPsiUfNFCaHM9xm4ORoY0HUu1sZlA+ectJnrxwqUiEds8bBY2ow4tZEvVdR59Ck6IiCO6pYw80ypKuuM14c0l2jAYvDlDY3VJRw9hOLRzN7PnuimxbdcOnJUl2suKuDwxj9Bub8T9//4Prz7fzwqf48VOr36AO0VAtKujpzaSn1UmqANnQDX1vI6/tt3T7wNlewEfvP0/4R3jL0P27P7UN2Wx8Q+Vr3Y2DhD7Jdek8F57dUWbSyBTCFnUsAseiBpM1rffT3+zFbXhDuTVDHbxgsnizi80CKA9mOAZqDkTkRudrk8x2wPKWpoZFDtFomkuLompKkykwJHk4tI52cC1YiookI12Blt+tsNin7DPjq5AXoTdPdWk7/Dhcfj9QtYKE2h7OUvh43bU+A84uthCod/B9CjwGx68/MpcGbPjYP6eVWNzbkO7ZZBX1iKaWCVBDZrmqVSTgvW8QSE2TuXDew5H8nrgBUb7FTHnV1qdJCjGjKIReXootaISTMzZoDm0DVfqEi4vLKyjM899jd0w7Vx5733SAGSlQdsrsRgzYVHDucz2o2OneU498kLrHx6N4rd+bhzS4zwKZydvq2Kw9+5TdhLccyDQ6DDeT8BYUljJMBscs3xk6d3NBWzVgCMVIFQ55+11jqt6kjnqKGjDytBZXU+bdOTqf9N38+hgPs33oVHxz6KAd0g/V5PdONGLst5XD7mTqOh003qG3ODBdzReQDj9qzciCI5JGa8k8Ls8T1FTDJrpo2pMEnXy1MugOKOSkDBypW10xbWTio1jGFYZkMWYzp6bzvvm0R5Nofjn11Ea7UvbL1kjeH28K3YHd6Fl7tfwrPOpymw6ElDEe9cvFlz/plVF7z4WMXDTS9clPN9pd5Q3ZV+7BQnY6YyrOogIKbrzx2lDPr8ZrgTlRk3mxPx2rK17zR7Z7C9Ks867BDb5tmAhVyGGLRDG3kgzJnBit/zwcUfRLGzC4f/3jZ8x/9wlNZPRMy5LbWClZMtut5DAWgB6Y6KoBhWHFvp7q3UOKv9xdvxjxZ+Edvz++ASKJemsvL99soALXq9jVMdrLxM4MzRGrvp8Tob6OhsGErrvBWqyEcGIEf6o0yK596CPJ5+tYfbJyOtk/Zxuknnf9AdBeaA7q9GAdViDaVDY7AntfJjqLxTos4Q4WoX/ipFNK2hDOiNIise08XRXcR/L65L0/kLc8j1sxieo+jxfB/tObquYwqo+7QJnmosYldlZjOQPoJRb4+hBuZGilX/7QXoFGM2ueayTuJPasZ8iJ730fOua73OmeYyGmLsonx8+bw6IptzoUb6RcKEO601XLp4nm6Spp7/58iNyOb8arNuC8hwWKqmnNBiYjVHxhP26NJrsqEQh6N8o3LB8PEvfEEGsx44chilUlmUHEIA5Pcz2mRIhZzCOHoZTJ+6Qxcx1WJmAKgtFHD0/duFRXPKIV/z0GsP0WsOJcfMhZuBAWUD0AzabQbnQMCZWY8a7orY4yvOPeuGFaPmQKCc5jh/jkDldEM/peDQJu6x6M5KPIONAqpGl+nO5pvxlcpjsjEVHJ3S0+E8O6yZ1IgX5HFv6yHspL2WteUSstJNP7G3hJkjFdR25DF5qIYJAmnOOzMYDfXxioSwr0AiV1LFXj4n5r0oRYfxP1bpnMpMAQfePouXP30JrfW+ipzoGhRRwjHrHVgYHsXjzu/j0vCEdOeJVLLbEX03XwM2I2o3N+Dy2pDCmm6JlhbyjBS7WCXBsxw5fVMolSSP3edCtT9QNY5eQ4qBHLlBD4pg9zkZqUZrrEG/53g+ynmKumjz55yzDBumP7bQ/DZUO/tR3pPFQz96UM7h+oUO6gSm3A26cbaDYStA2FM5aJ9VO231b9tUd1NSNSYDB0p30HsL4RVs+XjhiXX01ofCyNeON2UdsR2AADPbEgyTtRSPeAtVUxNvLDZP0uGIi+dl0vGdXXJl+go38ZyoX5LiXQzMoY1Kq4CJuXnk3zIHZyoPy1VmZRH7wdKT31PEqRS6tpm1HoYvrSNY6SitujQ+6e5g4welPw816c6GLtwgg+L5HFpLFMHu7Unqg3PTDNL7avObqTzuwKivR18DdaiB+28fQGuFhkll5LVmcVJ3HTEw74CyFD2iQxFcq0B4trUiDQwwF4wZNKc3WJWPQOueOzIeiIFERlTxApN0RFGAdDgMdA5V7Z1c7PNl4KieTS/TmIl5lMvi28tudqsrSwT2XTzz1JNYWV3Fnffcg8npKcm1ssZWYZ2t3O60Ljj/9N0E4p5aAZFKM3CIfuCRebpZLamis7ERf6+7MSDWSIymqwqBg64GZWHMKrRlYB62fcWGddgfA7PhAEGaPSeKDpP6UPplSK5aYMRCXNhLesmSCDRdd9ntH8LZ7kks4rwa/0TMsCcGPk1dCwgxPdiON3fegZJdTSkKIswdrWLuTmJSk1lse9M4SrN5OSbOo4s6pW803kHyudZ2+311TeLIQFu4hnpqNUca2ZKSiL3y2KKwQNl8hH3ZGHOn8K7gR/H84HN4xvprMS1ibwxraMtQYAZebMguIpt8pBsnOC3heI6oX5jxcgHaH65I2sx1c3SHN5XcLlfSG0lPGli4g492GbEO4DFX2XxOmD8765WLWVlb3IgjWnu7gp2Nh2UxH/z2OVQoGqhf7NKzg7WzbSy/3EBvjZim1CFo0+gEYs/K4CrTfWw91sqkB/Qz3swYeSga6RB7Xn2pDq7ZyYRwNpjytV7eUq1T0POVIxNhSZnAir0+bC3L5CJx3/fwzMU1TJYxAs75TpZu7nFU3rQA9+iUtK/TDzPNVuDMwKwBWhyquBW/4MI7Ogn/bBP+qbqsTZiRZRqoOf8tfiqWmuDORUX+PBPYqA6LcF9wsLGbopRSKCB9prmEvdW5zRpeHkDi6dHSIJ12xfvbA9CpdEZWV1MnNDDv0qBsUhqHriWrSwoQbaz06gmIaBQRcM7YosrgicpcuGMZnJrFF4l5EYv+xXtD2FcQD4MVKVinjW4+K80InEcVdYWkLobIUzhbHRun1+3RX2sK+C5fXMTjn/887r7nbmlOmWnkcKgzjel+CUXa1WthFo0+Bf48zTk/lLXGTmjrxHrshQrKboROkxUgoSgt2gTUbDbPxS+/q4qADFyGQQ+IXfebdGP2tJdCZMXga8L9tLQO5qOAMkRHG5rv+0lLuKXb0mONsaXZtA4v051nsqisDO7pvAV/mvs9Gc/EOVpmiZGeYHOgdQx3+Q/A5TFYUPluTmnM3kVseW8Z1e0FLBA4Z8suBnTMSdONAWhTqFIsmnOhg5YvYKIGuaj3HmowMoDNqQLQz+cqHsYWilh+taG08bwFWWojcu0sjnpvx3xwAJ/F72LdP48gw63mHZmgw4yXQZvz1dx5KvloZtCi7Q6VTDBTinPSjjBlSwym3JxUWKWZJMdDd5m59S0155G/RsAuAw8ImMtsVcoSu05fWOrewdthD1xUdhdQmcvLGmguE8s928LiCw1RbIQEIZLeYICmNWEFCpjjuZgw5yPU+fooPlfD7hA8R9lo6Q1Tjgm3tiG1LN3Rz4BshbH8UlJekaKtlli46qIvXLy8vCjDLjz2wCEEHe9UMTk1g+xD2+DMl4Uh8+hzA8bxxyD1b8Oo6WkT087w9TzTUlay5u8KsdDKlDCMIz25tpG6xkU/h8wJB2uzLQTTATq08fIYr01a0/nxZijnvXUN1l3NoJP83N8CgHZSeea0O93+FFu+JmPu0g3DuzMzZw4zOZS62FoVjWxkWam5mASoBMrtdltyw0rVocdSQXWzFSR9oVpnId4IEAC34nZl5XoHaeG2lBqEJVo8RJZYdG1sTNqDJyYnifLXMN/M4z0b9+Cwuxfl+Qm4M0WtnFCKgx08F2+ji2Cxi5BCOGYrQZU3hCaCx5rS8rw0WcJyJY/zdD9XdhILY0MdzSr52W8RAHJag0FqqIA5nmWlARBpQB5JcyRfH5HehTpcTGOv+YcejWRZCZ8e8Wyg/yp2DXc034SnSl8iFtiLf+7O+v04HN2jJ86ojcAtZjB/N7HmmRyqO/LY/dYpyTNy5BD0k8Yb+dxovbXOm//d2+jLeTBM3BQ7DYs2AB0aHxL6b3xXSVIDDO5mA1IaeRXIjWMb3hl9CB+3/nfahFuSl2YgZj7KwMtzB5Xtq6Ny0OKNDNm81agvT7yeue1aJpcEarNn/TW3hYt+OpOJC9hcm8jli1LAZgldiYgAFyJ7vOFzZOEfkUiANy+WXH79z89IU9P62Y4UAEPuPxFg1g6F2rXQsOZIjyBTQ4tD1eof6fmRkSquDSX6UhsiD5t18xl5mmvP55jXp7hBSUSqgJnTGWogQGJnCt2VGKmRtQKEebeGud4Uyttp833LAuzZggJeW69RXxf+Al0DMU/5eihPK1BAbZc9hJM5ngKtJo/zddVqLNO1qvofdCHcsVRahNAma7mYulTBMpFjBunVXkO00tVs8XJoYbJ4D5TJ0qpm013NoP2/DQBtwNmw5u0amBmQ74Tqnb8iiy95O38o+sbGoCtV4iDVp3+hvYrmsKuM1vUN6TjKLpMr5oNBP5aLsQ2mGajJHYVeRrE6W2t25U06anKypbIgyt+Cv57JxLG+mp/nyk12z9gB/FDtIRy25lC6cwzOrho9q7ArrmYHkWIHvBCHyrzCaQ0QnaQF88IqwuZQgQb9TKk9QLm+gu30HpaOezi9s4beLLEvZr0xg2RNqsodxyFsmHyMQu0/Elq6SGil9NBhkt6IUkCs0VluPEOd9NQkk4e+wi7nMk6xf3gUr/jP06reEJLzQPttOBgdi4f18lvKljKYu3cM+TEPBXrueHBSwGOoVSomhSGf942kMJETstSrtTRQoIIoGeRqwvfIDHfVDT96XiNvrmwo1TgfKPtXS3U0Qhsl8VssO+P4zuin8Rn/t9EJN2TCOK8yLvQxAPOSY0tSaImmTOfhoQ30t9jDpd/eQEam22RozXW1pSg3MPWl+SajrT6ZdXP6TDQJrivjtEo5TwySehSdeXYJ2aBMUZYDr+CgSWx5bbFFr++r9UOAzKw57DGYacc7x4pLutr9XDNmbWkrT19PQWebAEu80fc9MofxPWWxeM3VPKl7KCJjobXcR2elj43zXXTW+1g53kJjsQc7ayXK4dQermo47JdC91aYw0I4g8J8Dd63LSCzh+6HsZwaWMxFwEvEaC91hDFbMXMOknvFN6CdMGyHNvagQUA8CGN9fiisPtL5fV3P40jCiUzrlAK+yMHkxQqWvDqiWojzhBklTylpLnsYPDqvGxUbOt0RfCNYdOZbAJzLupuH0xmHNShzv/yezX6pPuhgrUu3PNuHXuXBvft9ohTGi0vhiyOFGNYdm5wbryRpKaZw88iRIzh8+AiOHTsWM2jJOYtBvYN8qSR612yWQPLUGTy/bwdeefFFnL90SewtGeCzGRe/UvweAuhdtLiJiR+bhruHgoKCy+M2EHXFVFiDcyjsMV6AbBG9uwLw1JCvLREbCuQ9MwtgKbBH73lHvYvxZwc4caqOV8ZKGLL/QKQYgq1HTiXqzRRAR4o9CGPSy8pKtXqLBhmpXLJlYXT4W+LREKX+z0qtUCtdKdQJ6Sw8HO4ew+P5x3Bv40EctI6mNKwqzz5zrIpcWW1c8/eOK7DgFI4GZAbhIAXKSrGSdEpKTr451CnVJGSPgDhFE2qWmDBp9XmRwIelZFolJhuGb+mGf1vZkBYyNbwNH8Kj/d9CkOuJHWufJ4dzkjZStqlcSWW2m3GVaRKndNhLxG8EqsBH6wKDrtQhOI+ths8OpOjI1rfEnwm0fclls6Y4T2uMJ4S3Wk1pcJqyd9FmrSbvcFG0udxDh4570B2KzC0S9qzWgCvOR5EeiJzaO3UGQvYrPQWHtehqWjstUQLLd/7zO3HwfdsJnK+dReTNkPPVrPZYOd7EF//DcZx/bl0mwYxs2Xowsj2o4EhuEvlKGd5btsM9PAF7W5k2F1rj+tpZRY8YeU/AWkgEs2V9b1h+GDPoUIO05KU5jUEgzW2k2v9M26Om0nCWmkqEUKeqU4VtlyBo7HQR6/k2Ie4Ay506Zotjmx0yFw1PapA2wwb8bwSL/mYBtJ1iztM6z8wn4X6oHvkr3K3YwnC5WxeD8Os9OtzHz1KtyIoBhoNJtv/kjrH77r0X99Dz4Ycfxu233465uTkB5a2MhY80GHHoylOzT588g+kTEcovdpWlJoFzZl8NVjWrFhznjE/XgcWOFDFkoXERMlBhPrMGya9VCNYOjmHwwpqAuTpblqgpIs9BgX7u9noHM90Bnq2VsZjLIsNDWyMDfIZF6xRHpCv3gdEJaxYdqTwiUmmMxO0PMXuGKQyNppl1liNKnbMooVDxj1vYPTwkoHLYulPnrfVAUjqmyQNlZKuuOOdNHyGgrrkiIfS7CQCnPw5NaqOr0h6c2uEmmkAfj2LMkXbUM3JFk9pAHM4bbxN262MwYqLGTUu+hOM9JQy3orgYzP4U9w8/hK/6/7eAMETdQgRA9PShrIEo6qsJ4WzIxI0tEi5bYhPArf+WpcZYccFUAa2afM46a0jd0Vffdz0UyzmxvuU6CZOEnO3RD9hy2TqNoUx8b6/10Kc1FfUjaUZhNZFMyLFSYHxZVDNSPI2iGMi40PzAT+zG4e/dcWPMikhE3lPsenJfCQu0sf7xz34VJ764rLXKSYqWr82bt82iUqBjODaFzOFxODur9L59uSci2piEvAxCrcoYTWnEaQ7Noi1fEZvIpEFEF0vrSdukRCNkwWwYqooY6YkykgrR64ViZvivBmgc6kiqg72sN2li4YY4NlgyY7tkUvk3gkVnvongXNQHvkenMx7SLZdXaF7YvvBCe20kjZF+WOs2MhTqZIb0DB08EtyJt24/rHJQTI2YxUzkCDTHkf2+g9hxbC+x5tJrOggDTAzstVoNtbtqsfAv6ugmBy5AbfQRMivo+bBLHoKlDi3GQBU09GIz4CzVa65WE6hn5orwz7V0VYbd7VRPJHRubZLA/cFLa/hapYQT7NCmgZjzgUpakFZwWMnnoqjVwGrH415THsFKNxwlY+xUJjG9+OPJBynWHEWbrlTigjgc3RFPiNaG0ajsLCA/Royz6cvQgvJ8XmRhots2DDnukgxEz2v8rcVOVXLvgWzE0Iw5UZ8kBcLA6LsZVCM96ip2BVS7Usmn8DZYhRu0aLNrSZrC5LBNM85e5HDHxu046Z3AV5wAJ4dtuJYTa8C5NZ2LxazyYa10oVBR+eZhX4G61CqGyijK1u6GMncyo5o8OHVCX+MO1nHaeGVqeUcpPGKrVrZSXeOJKyFaa31hsdxhxwU4JQK240YOw5ZFHxylma0CNU7niG7Bt6RDc/bY+E3fC2wJcPS7t+PFRy8iU3LiVJnwAroeBXYe3FFBdGACzvaKul4DDcqcmuL7ga6pNVAWCKN5aJXyEEKjUx6SAgmC+GfkHndCFSlaemmGlhHBJ+sVoxGFDJahc1sKcuhepPO5bYj1fhMzhU1ZNAP0C1C+0ku6aDh8oxUd3wyANnah47oYyHHvg/R8eLPGE66wqhlo6VZQeuMNB+6lDAoNj0KoCNlKjtgnsYick+h26XN3oYT8d+2Fd98s7Mm8+C2/0Q+rkDFpVvl7ET3DNl3PjkwW1QJ8S4VpukotrCCWFPH8LGJdOS090hxWhWhJwsGjRXdfvQmb2OQL7Pkb6uq6zsGqRao+ty1LP6OYMicMOYn7bA3SlpXwDyPUsKLUaGgYmZbRRmNTMmEU1JG5SQgomTWXZrJKx0xRgle2RU7I6Qpx3OsFCUDrjjXzObM9VmxIFxvfo1xUHZoJINy1aalGBg3M8jVilk6kWqUjx9KjuUKMt17FducksQW63wYthD0CZx68UMohN1VBhqIT2xjXs6fHSohD/R14JDOHNoH0U+EKPk2E6jj6mp0r2QM3uATBmDRBBaze4M5By47zv8KmJbUQiPuhmd/IYJylUL9czKNBURmP++p2h2haq3Td2UfaRnOpi4jVPfW+0oDnPZVj11JSZa0SKUWOA9m4Iy2/iWykNGnKAMuS9EYetYXiTa93Lhwe/+yyMGuZTB+p2Y/sulfJ2sgVXTj7xhHtKMPKZxC1BgLMUiBkhzxm0H1fAbVOa8i9ECZALcw50GbjhmWzTDKM4uOyYpKgy5NRAs4iv1M8Okmz6SiSFVfVlRJWJ5tYzTQxkatsJrvjGtk+KB9pHgCwlmLR/8UAtBkQWdMFwcM6rfG2y8GZTzD36nNaY+QFllwU1nMo9TwpptkVD94dY8jeMQF3dxVOIaM8AYiBuvvp37MlfNMeMtqWmMp0QQoiwckNxaDXesr9SxcMY1DW+k9+CvHnkdR+EOcaIiCeRM6sOMxY4utxV7uDfi/CC6EnC1wUGNLsZ+l5gLbyrcg6Sfdf7HhkQDiB2BicoxSDRqrRIUq+YuLKKNo80ovSJ0PRcxQms/LzrOMWkB1Y0lzjEwvkxgij6/a1l4g04ejOSFGudFXag4GhMO6itqOEwoQnrcqFiSyy5Uycc+bjLk5lJZ0Rv0UtBs8O9xMo99C9sI7+egudpQ0U986jtHsWw40WepfWETQ6Ahbc8emvNtF6+Rxaz5xC/uIaHnEIrO2deH6wgt/vv4iXwpYABRcAuVHFFrOkrlYKKfUPpzYsLev0h8rjxdbg3eeOxbxSfCytbmCtTpsC/d26t0zLpEOgUVPnh+WfnP5ytH+KLteGsWoFkgZhEhDaSeegyVsJgXFULMWbGxcDaws3f5+01rp46XNnaSN0JJKAlmuyLpw4EUr7qrDnS4j4H0MjmWOPWF8BM5MQ0UDrCNIw6GGY1GtiRYeu3QR6/qWRANrK9EtUJalKpRWHk7oWY+nBxrqL3NLeNNkwg/wpF52Dyn/6Kj7WXDBkB7zjWtlhWHT0XwJA26miIGucD2gJy1s0aI88zjVXJLVhHm7DRX6ZgLmfJzbjy0ktvGsH8m+bR2Z7We3C7QEsBuwjk/S1byIwb4bVro3MgXE4UwX0v3QBwdcW1UKTMFMXQrQwP9RALc0ptjWa/GUFhsnJMVuhj27ZxQOTHgoH5pCdKyjf4EipVGztWLb8QhPnnlhLVdqtkVSNlW7jZgZkWIYpDo4AcJSkNKLNhiON7lEC5jrvm616cAu2AI1hMeyYt36yhfIsG9v7AsSKLXM3nAJkzlP3G76cm+JsFgv3VzGxvyQ+HeW5PHIV9yauipqdVzx85UD4YbODsDNA4+xyrCgQZceh7SjMjWHjiVfQfem8sLM7cjM4lJ3E5wcX8H/2npHRT74U/FxV5GI8YNsAf6BTX2reIKs3pL4A1dlmBexaRxsYsWIe8dXvKX/wyB6Cy1g1E9kE0AMifO12aJ56krqlcurKTTBKmogsaO9yPbebv0ebd3VHUTxObvbx8pfP4NTZk5jk+YhQftacIuoT4M7NeRjbW0VUy0mjScTWpCZyHIQ6zaE6BSPxKk+Ys2VUG4FmyqEq9ln6Z4RTaGmdAVqhypGW7kVmVavUj2XydlGsFFUfQ5XuK3az6LZoLeZaVwPo7Rqgp/TiWdUs+pYHaAuJ0T53B/IdcUx361yR/GLWnAbn3KU8xtpVWKyAoJvG3VtD5UOHUXi78koKiJFyd5E7Pwb32OQ3JI1x0yeCmHTu3Xvgz5fR/6uTxKi7KiT3EwZtaZBWMlsr9rM2oJjZVkLm0Bi8u6bhHRqXaIEd9HZQ9ICrHDszzz/8x1/G8sstqbZbSTUlEfRfhf8aG8mRTuFoM5DehEGbYaSW2jCY3YokLkyiAr4Zz35hlYCigNyYK1reoS4KchGwvdwXAOHv3/b+ecwerQrQb6Gmu+WHy40ixPCCRlcXcgPRxTOT5rRA9fbdiNY7GBDrVrMbXXx7fiduJ6D+t82v4tVhTxpRONTnpibORw96lrBoK1QFaZHkRdASSJVDz3EBjm1GuwPJafP3RJlhPwm/9T5lXGAp3wvBryBUHX/agTBgtm6ridws0bF1Ksu2kvFlUUqrzD7VLKt7LY/HP/IikeEullpnkM9UiG1V1AixwMfCwUl4kzmEzJ5Nem+g27cZkHWKA139eZhElJFOZXBUGJpoU/cgRJaZTg49iCNKiox8DjjlZKXiN52bRlqlpIdG8D3Gr8PWudnzGTSrXaU+2XyB7dC9GjWdqm3jDfTn+EYBtA3VJcgHxS50hzR7vkJK1xx0cb61khQgLlZQ65elvTbsDlF89y7UfuYuZOZKCDd6CHlH5oV9/yzsaha3yiNzbAoWLdzuH72M8OV1cUaTxStArXNuOmcqWUNelMQ68+/bg9I/OgpnMr+1v5fLoLuu5gwaPm4WoElYjDSlRIm8LgoTMYjR0xr4ltyvhucrRxIlqRRhfp5qC+ZiYIRoZFOI+iGx/LooIcQMie9lYlUMzHvfNYNdb5vG3B21b+BOasFvd+ETQMs5YPc62UADAWkGkNz2CSIHzZRs3MJCpoRfqT2Ef9X6Mk5xAwuxZZ5vKU0plkpDWFr5IWofy443Xx5qsC9Txb4zBXirWdxbPyp3aIYDTwKPc3afsIxTIqEaccXPQE3nVuZNevBwqCMjS0VcBrfiAlpcBI5kUv3YrpuPNutLbZx+5qIA5jCkCIDd92yej+ijVnSw//AYQt5gSq4C4KEG574qDIYiP+V721f5Zz9pUjF55yjFpmPvDXFsIGZsa/2/1udHxozDMra4eqXpNJKKLFXtJNLmVop4h+IjUurlcKm1jma5i+rmLJoBek4TS07c15EMdrklAdqw57Rqg9nzfVfoK+mEMTibSnR5sYqKX9I5qwil792HsZ+7RwoNwVoXEQv16SJmdlZgl1zcag9ucy388BF0fvPrCJ5f1XnpQGmlh1pWZHyJeEcvuii8f9+WwZkfGxeaWFlZo1tdzWtzpAgSYaQZXqsyoigaMUGKTC4i5fSYzj2rf4ebXPhoxHXMdR01citdazSZbJ0WHIoJUiSsZt93zODAe+cxdVvlm3J9ODca8rgpyNQFHZoPVV6UJZGc28/Rumv3afPJ6M5KWugDG/+icC/+5/AZvGx3JQ/tumUFEpyWGipNWKQbR/jx/tw+PFLYhdmlHLwog0y1gOI7dyO7fRJO3hMP7U/9ZQavvqAYtGMmAfEEHB4+TO/Ft3XVzxR+hT+HurMOSeE6dhRiAgBJEd3s45lPvYrV8w3JAReIPZfscXo/asDEwo4SdhA7D3gauUwrV+zZ0oolYdCSg2aw9keL5KHuckwrNiRtoxuuoGUYkR03TKkj1vLBSPncQHty8AIT171Qyzx5NqauiCsdvI2QXpu1+9Ey0BjvXA2gWRY8r4uGJa06671RLPobAdCGPVf1gR3QsrorYvGNXis28K4s11D1yzKCPiQmVfyePRj76bsInB1hzlF7KBfW2XVrgnN8cmo5FD50FO1/9wSClzcUk+b8Mxd/tGZTmKtLNyOPrFrr3tTf2VhsUAh6XnXvZbKYLM5QOJqTEUtGtxpFieoiBmAk4KzGI2lgDS9LcyBKG6WZxsOkQKURgptOzEuagqUpfnJYziZQXOy740d24+B3zn9zLw7ngJtdBbxsC6uZsxS4ePRTvY3S3nmMv/delO/aoyaL03pd+YPPIfOJr+KX/Dvxk/7nsDzoKPtT25EComOiGDrwvXYFP1o7gtvsMfl9b9skyvcfQPlNB5DdNiFf4/cwXFzBoaUNnHhB1xYCVSB2LFWHYGMvNWJMeXAY5zEly1Ss0RpJZllxvoOtXG9qA6OXefELZ9Csd1CpVlCgY5DiILFoBsqH7qRjyuruTElnhDrFEbCjmUptcEOW6YjUDouS4guSgqFs8iqMjKOyCCn1kI4M4hRG3AKrf8Y2BcIoTsFHejONrESmZKkZaqhu5EUTvb08cbV5ivM6VVvR2GbfygBtZHUTOsHOpke7rpDq0NW+1FmXzwtrVdSCihRBeMfNPTCLyg/fBocYZLAxkFCftcbOTAFO2cOt/mCFR+EfEEj/2hMIF9vEamzobtWkJhdGpg3s5gD6YktuZF6z/aCL843TKLpFlLIVVLyqNowKU0VBXMawo6RT0YiVokQ9YBnhbSr3LMkZS+Wfpchu0jZRYltqBidI5yZd1+1vmsRbf+EQaju/+UXe7jluu++pHKWvQJk/MoAwaNYeug2zP/YeFA6MDqguP3BIGXN9+DH8y+K9+KedT+oCoTm34tWJHy0dxftLBMTs1zxeRomAufbOO1C6czet6yKF/T34rb4GjipmZlYwvxDh3Bk99Z27T8FTzEOZ6GNmboYZ+rdMu/alC5alhzzPkL0zbO3tbRr1PYpGi2M3lxpcOrmG5x47BS/roUjMmSUjA3HmC3F4exGHD1XUDEi2gR1qlzqTd9ZP6RzkDtuU9lmIr+6yjfWlekyaak7RhUJbyymtdPoGcdu5SclFRk+YhKM6taF7A1KzMvk1S0EBq50l8fjZZI4hdJp2SpPOvMZR/1YEaDPktaQPaJfOP18JIP2WVL/ddh4Tw6pazP0QGbrQ5R88KKqMoDlASMActjR7zn/jRCgSyvthomjQxS+RUDk2Xmu9irurcj94Gzq//qTK09mJ/ljl3KwtdTpe/uAwlMX+TiZ5r+1BE+0hPd0GpkpzcG0vaePWeUvT8WBUHJHxlo7bqlVeL4zC0bZveQ2dC+Qbi0PwfjJVRbnI6TQpE1O61gfeM4+3/dIRZCvfGhHRcLmOoNVVXtXMUHnMFXf8tfuYeP/92PEL3wc7tzlBmPjAQ2h88ikc7uXw9wsH8QeD45Iq4v9yBJ7/evJhKShy8cvdNobyW46g9vAxFI7tEaY+XGkg6HTlb6lnD1lrgNsOR1i8mCW8U4ZIHPZzwwz7drDypTJRwNjOAuYP1TC+rSShO0sST3x+Sbw02FfbDAHm8z6+OysAfjOPU88s4uyLi5gan4cb5cTZ0dca5ocOFGTwMDcKRhz5dVQOXxpUdOcgN3FFyz0F1MyaB0EiNzVJc9eKUxqjxl1GRhfFJMDS6QxJbZjUnJ4/GWo1k2HT8fAJO1KePXYC1nw+M0sOGlOdqwH0nGbQaYC+JXPQZshrFYlL3c5Niw39Nm1yDsZ6NXUN+EK5Dgrv3gVvb1XCIQFmTm20CahZ7N6li157/QuD7Qsb6K220T5fR/tiHYNGV6ZItJfqsoO7PCmZJUNZdvzykBsrYnzfNHKzZRTna8gVczf1d7375yUX3fv4CeUYprv94tZpG7hZ6QJbU0Z6vEycr2NtLv3Xl8kzQRy3RlaaLUepomHKRxhR4n2hlQiJFYc1aoAH5VYWyN/Q/sEx7SHqMYhw7Ad24q0/d1g1O3wLPHj9hQTOkoNmN8NAg0inJ6mHbT/xvquCs0SB9+5D+e59aH766/iB2mH89dJprFoB9mRq+NXZd2LOLkjRO7swhdKDh1B95C7kD21HUG9JYZL/rt8hYKZnSCx6sNZAf72LHbMhdixYeOUEa7tDsdH02z7G5oo48t5tePgnb8fs/qoUg9OPE48v4Xd/4gvw6XBkKg37gRAQVrblbvqcf/UTLyHvlpCDGkohKhIC0/3lCLsmHAR0/0Za5x+eqMOeLaqiH9274WJHdddOFaQQzgTEsS09NEKTgTU6D+eaOqWR2v0tXcA2RcEobTcQJUZfZiiurWWe8WT6UKd9VNBnmYK4rZc8fax0CjIeazpf20zN4eiMAKc4ChidY3jLAXT+MoC+4sGjcFgcXmiWkYuy4gzGu2zuwTkC55p05nFTSsR2mnxx20Ox5hye2IBDFx3W63NDnv/MK1j8ykk0TqygdaGudnRurMhmkfM8jBVKyHtZ2WFtL6fyxet04Vc68J95FWtuhPXZAjILFdTu2Y7anqktv4/cBw/Say0huNSO82TJGtRjIm7i0W8nIbbJ/ZpHkW6yrJNXk5mtlH9HrIMe9XAwHheR8Y82tpXpe8hYPjKD4ZZrR7Ucq7vBjlOgLKfb/+45vOW/v+1bBpxlk37lAvoX1sTgis2MLG3aE3Vpne4nxjhVvXboSMy1cHgHOl94ARMZF99fOoC/6Z7F/zbxbSj7GTi1MvJ37Ub5nceQmRlD/vCCYo8m5UfU019pwl+jZ3eA/uK6zofTZrZviOWVcaxvOLJuH/iv9+KtP3oAO++96pB77HrTJMYPZHHhS22VIpCRanSPVV1tS7pF9cZyC0/95QmUvMlYk88DfvOhj3tmCPjHC9IlKuuJZYCvbggoy9zg8Rzc+2Zh8QSV8TxPHYaVvRKKuN7S+/WnEF1oxeBpGVP+UDFkY+4FW69Pw5St1JCJ+GetkY9a0gFpwQ0VU7e0r0vOz6ExUPMUs86mER33g5c1vrm3KkAb7TMfDDenbOrG0gsGMk5nMqio+5eLZGM5eIfHleC8Fypg5hQHseiw2Wf3JPSfuITM7ioy8zefr2QLyTN/8SxOf+J5AuUNDDsDeMSKx8tlTJWrqOQLKBAoc9Wch3g6OlfLemZRXQTaja7C9p8+eou0cZxZxfBrG7i0r4Kpv0escOzGizBW2YP3yG5RdvBojRHZEP294ELzpo5znX4v1ACQziw7Vkby0EhxkMv4SJxmQYpVR3GrtwJncYwzRRzb1lM2QuX8oUE6SpUF+SbjbsGF+yfxzl8mkMo631J1gfoXX0DvxCWVSw6T8JoN9asP3nZDr9HZOYF+hmcfAh8oH8J787sxMTuH2V/8ILKHFpCZKBMwjd78zlgZXqgaY1hF0vzKS1j7i68iWGnEfiNjXoA7d/TxlLcL7/1fHpCxaJcz5iuYEl2THUencfrzr0oHH7NCbgDiOYQ3Q3Be+fJ5DFc9lD2Xm2XRD9W4uANYx565MTiFnJpZKPevr1Q6OYo43zwvTBq560OPTeDtbCshIBYds+CRmyW5N4waI9HqW0mfLO/7QWrihKGOOllt1EYCzoFa7G6UgdW20KsOrgbQVZ26zWmAfkMKhW8kQJv8MwM0C1indd7migeb7GcppPAILCTUZkkWh2lsys2pDWbMxKAFpHmCMwP1BoV/S210PvIKyh86Kix7y4Wzl5fw0n9+HMtfPS3XJZ/PYn5+FrPVMWHLMgZLH4ox4GF7RvkKt6bKhdchmW5J5YuZZaUJ59ueqqN/8glkHt4J96FtsLwbAyH+2cyjZ+CfrItTl7FJFLAe3Nwa6HQ7WqccIS12dh2KDtwiwhtcW9FlH6/8nipmWqat1qhBxCzdin1rQmLORWJQb/35I9Jq/K30YHDc+MLzwljtUl6Z8WjpGhs75W+7Mde3gMCc02EMhmXXQ2FI0cqxXSi9845rMG9LpVR4Y8h5qL3rLgzOr2H5jz4HK6e8mTutLnYfmccDv/FmjB2eveHjmtnHEriXxQGPVZZ9zv3eZPR5/ItLMmG8SqDbG6qpNFNhB4fzbYztPqTMjZhVs0qj4iFDjNm5Y2sRJa+nbp59kJhIsPWuUhuZIM8AtqWL0ogVGWkttNZVm+Ih/y43cwVafig3l63M/I3qI2JuROe6b8ksxbSxQeph0hvZVIoDtypAV68GzsKguVrqF/WMvEhuZO/AmGpCYcY8XVD554Zm0StdhMsdyUsPn1xC+/deQOkf3q4A4AYfr37ka3j197+G7nobmYKH+VIVOyenURNjGz1vPUzczDRMJ4A91IYX2sDFCsPYfxj6Yluske2ECP7wFUQvrsP93n2KPVyPOVSycB/cBv9EfXSSiVlkW1UjtHo4eZo2IYkNs+m0MkUHJU07dIUkSoV/I4AOuUEiPdxA3RQ632fbI72IpklC3TRWakyWhnB9nu750D6ZWv5GPZrnVlA/u4z1s4vobrTQuLiGfkt15sqYLQLDytw4pg4sYPrYblS2TUhDydpjX8f633wdTj6rLVgRTzZnUPBXGje20VI0FllqGg+fBDbBDxbXaV136BoXthbpsdaaG1I6fZTvO4CFn/puePMTW3qN2lxOuhOd0Bby0e8OUb1JDfTic2uoZRUw930bRdvHkWgJY9Ml5MfLKlqje9Y+PAH3HdthjeduCkA2SnS+NzawMDelRhAaiZzpJjQFaViJQT8SK9VI1zosO9CaaDN4wk7cE3xbNqx4DJxuZnF6yhOcQTrnXEEiijq9YQDavtUA2hQIC3q3uaqfYTS0kY1c3WdPp3SmIHkp6TAi9tz9yiVkqlkE6z0EDMzEohE3PEToP3qaGLSD4g8cvu4+NmwP8Oy//wzOfuJ5Yil0g1ZL2DM5g5nKmIj9Q2NVednU6rQ+QT7zo0Smo13d4pZokyuLVCcga0HDZ5YxoPft/cMjsGeuD9LuPTPo/8UJhHTMKnbTi8/fepqLXdKarTZatMFVahU6Pj/uHeT8s+klTPUOjrYER9EIZzYa5zj9om8Cx0lkc+YHk65iPQbJUkXBhfsmcccP7np9mS+9lfXTqzj9p4/h9KPPYOm5kwgpBA8ocvEo4gk6PTG55xoHF/0GHIITm+KBC5m8ixyF5gd2b0fmmdOiZ7az7khELOeEfmfxyeOovuvO674f58XzsNgQKZ+V3+YJ4qh3lQfyFmjkcGmD7oWBKDmKd+3Fjp//INzJrTfvlKZyIrUMVashet0+3PzWU0trF+poX1qR6UONvs0zJnBbtEI3eBezR28X1UvABcD7JuC9f89V7QduCKTp3jlXX8XszIQyldLjAE3KzbKilA25XsPGUEx7dahI147X7oh1eahShyb9Yem0Jf+e23biGtkmAF3Q6Q3vVgVow6DzOpl+1T5dv8PSI1dAiPOZGQp9Oe8sht7dAMFqXXwZxBvWmJ6EKvdrcpu9P3pFQLvwI0evKnTorbXx5K/+JZa+clqx5toY9k7Nifl4aCZv6KnbVjy3x4qLYyMHx+8Fpihx2VU3eGrUePyFfAbh2Sb6//E55H7ybumGvObNvaMCZ76EYKWrDMnFgcyS4uFVjS+uFqHQpsQgvdZZx3x/Dp4cr4+CW6YQ3EsBb8oWNAa9aMQEPp22MNOdYXwQ4iIN4nNjwDluDNDSpjf92P7rTu7YyuPEVy/g87/3HE7/5ROYuPQVmYzCYIRSDuNjFczn8gSQGQwyvjROWMMAtuTOaYMPVI2j8+JFNF5dQSXnwWbdsOqHT66uraKqU48+iZ0/9h5kK1ffaAfE3MOvHUcm4yg7TPF2oGchq4rLW0i3+AzQzS6ye2aw8As3B84SkxPxYTP6yCgaxL9j6xv+hWcXsXJ+g87hrKzJQ8ScF4J1eOMVlGdrBM50bg+Mw/2Ona8JnKW4vdxCfdBFs98hxl5MaiFWYgwzcnsajw4t0WAJbKKdNl2xRh0VxsqoSBssWdqalDsc7V6Sgt3kkdVP91Zm0K4+iAKMddimyTpbu1Fpi8iyp/SSHdVFyHksZXKv0wih6jKydbus0eT2/vBlCasKkpN2L2POfTz9a5/EpcdPIlfJY+8ELfaJSTUTLjYqgJKbh6qNNHIdlTbhmYTSXp2eEU7fX+vDZpNxMwMPiXm90RJHWrYmOnkCpOhEHYM/PY7s9x+6PgOj8NB6biW2/hS086PEsPlGGc9iA91GH/zfWnMNc5NzwhzymaKS2unW7ii2EY1G5g1GmvnG2tI4utBg7ERJaGglG1MMcCmmzbahe94xI8XB1+PBOuI/+18/jy/9wfNYv9TBTK4Np5hTU6kprK05DrbTNQ47fdqoevD7Q9ngRUNsq3bpEoExR09TltpxIvvyeElHA9wY4mXQfuEsTn3iCRz8/rddPb3yR19AcGoZdjGrD539mWmtrTZoPQ+2RnOIzXcbHSz80/cht2vmNTAmS3yOjZjHJVJkW1vHlQsvr+LM+TrmxiZxOGpgT7hG0QhFRYe2w6WIhSf/ZN63C1bxNerZ6Tp1LjbkHlxutVDLlZA48WF0ILSRzSHVwhomvQTQzt5iR2rGzQRIlB4mSIxU+iRs0CbT1/DE3tYE0pt4RBtwdm7FHLStXz+rWfRV6YYTuvHEYUtXd5WBylBNJ+lok5VI2w4GYeIZodBRTd0mQB381UnRShf+we1JKoG+/9xvfAYXPvsKcuU8jkxvwxyxZ19x9rgFVsKdGt1QFXrOFeC8eRb2RFaxQ8e+ojQWtn10/vMLsF6tw8lmtA9zqtJ8hXeQJYwi+Mw5+MQwMndOX/vi7B9LHPTj14hu4sZMls9acx0TFQo9XQ/ZTP6yLWfU0+5yLXOcfzcTWSw9QguatYzMw0q9imUKrfRjnoUjH9gpxbbX+lg9U8cf/PKjeO5TJ0VdkaONPcMDhGm5ePT6kwS8Uw4BRrOHAYFi0B8qu0/HTrrHLCuWZgXSfZfCBytVHNK7D4fvZfq5J//NH6O6YxqzD1yp6Fj9yBfQ+vBjopNW7dfaa4SHBbC/9BZSHNxi3ry4jvKH3oWxR+5+Tefr1NcuSZGbx2wxqyxP5JGvbK1AyxHE8aeX6Ha0MBecxW103Ye0SebHipjYNS1t5vbdU7C3FV/z9R12hmieWpWuybVuS/tdJzYE2vRcrUEHI8DM/xCr3RAjw2zjiUN6MrSlx8Jxw4+kNmR8OQF0fRAPjeYxeQzSmSvniRhwtm9VgHb03/CwySir+E0YHaYOlcUjFkNJb7AOle0nbWOiEimglsiaWTSDc0aF/9Jtl3Ux/MpFtC40kf/AQXSmXZz73Cs49WfPIF/K47aZecyWa7QjqiKDbSxiiQHYu8rIfHA/7LnCtaAuVaWP8PKlcyhtDLFzZiY9VnUUqNLSBz4+nhDy+EVkjkzqEfZX2bi0fHCku9tM395KmNgdSMstezd0+120ei3M5OdEwXH5m41iJyMzwj5hzhYSUDYhspWSNdmmwcUeTe8Yss+626lDVczfNf6aF9eZZy7hw7/wSZx9dlk61mR6N/0hlrTuKRWRo2PlWY19Yp/cBi1RFzCaHzdPO0nFqJyl2XRMhdDWWnQF17ViAadPLeKvPvSvcfdPfQBTd+6BQ2Dc22jTdX0J0Uceh8tkQ099N+9N9bMHW4p++DV7e6Zw+L9935YR4Mxzizj55CLWzq4jn7XwwqMnkC/2KHKawEbDR7bkwituLQfN7nUnnlrEDreNGg9ndscFyKb2zaI8XkKYo/P+lrmbuqaNkytYpAjXp3t+sN6RPHbz9Kps5hzlDgNfehCEJWeQDF60ksqJilb0HPPUWLa0Z4feaZRPtJU0sqiNlDbqpT7hQSpPre0MNrtFU+B8S6o40iB99R8MMjGKCUNmZysekmnSG11l1K5OqqK6kpUQizT7SrZKbDZa7qL7m19HrwwsnTojHX8HJ2cJnMdkN4TONcdJLb6hZgvXAOfN6ATQGQyQDyIkhm+pHR5I5cmSDjyW2wWvrElHleipr3ZemMkT+ESsYOHQzKOFutxTbcfOjV+6tUt1tOvdmBGs1tewMLGLNkZXdxBam1J+JWUybmDJR+OuF5nWWm2kFBdhRj5BbIbE53vbPZNSrHotj7NfX8Tv/ORfYOnVNRkRxTdPwSvT2sljNjyNuXwOXdrk+2FwGVNG2lEnzper/HIs1xj53IC0GXTL686j565CAWdXW/jSL/4WStM1uDkXc1YGE40+ctUChfmZ1BCEVB2Dw+e1JrDjxiRn7lgJt/3sB1GYuHG1y6sf/zKe+Y+fwEtPreK5C1Wst0Lk6DAmxjKYnxzDTDFCJWdjkNl64pT19P2nX8Zuj+4vOr5Vv4tthRpmDmyTCTeYL9Ka3lp3L4PiiT9+Gqc+9jRap9ZjtRCfOy7e8v3KXYZZ1xU2m+jlrNRszLSNqh2TGSut37cSx0ZYtvFeEptRwROOcNb6ohazzPVHkua4Csa9ga7k3xgvDvt6CXQHdsI2A6WdZCokk1M66ik2hNrPNR7bs5mHgMEYV12ZYtvGnTM70A4GqBWKcoGtVO5qROPob1FjrPOrRc/TxbQw6dYzYBxhZIimyctG3Bk5DK99dbnBY6aIsLOhTmEGI91mN/oIUu2z/GhTuEjB/IhNo1FujIzBgh5THyHJTKdSF3HXoenISuV2rMuiDv6WS2xt4cGJ17Sg2hs9/NG//AwWBZxdOf/V3ASmSrN4/tRxdDyKFhw1iUbuU9u6NmNNpTnMao1iYLYTgNbMmpegN1PD7okydtBGywVGZu1epy+eD5kdGQSrTQTrTWQKWdWIEkQpcylI0e9GIcyh3y9mbwycN05ewhP/x0fx/Ic/g+5aHQ5tEgedAi6NzWI9GsN64MCjdTee81Eu2vT+OBW0RZb79Ansslq0IeXAWqBW6GN83wzKkzUEFCFlDm7ds3v16fN46XceF59tu+wiS+Qjy/px0b4p9jpB9y7S04XiQp+ZwZmKcB0jyjBTVqxkfEqIuFNWfi80Y8Bske0GROxMPSW9bsIoxDfj8UYDdAqerpMjNYzGV54bLLNjE2/DoM3ASNtSKY0o42jUT0Kb2MdYJBm2ADgXfLhZYMIrqWaPUDmJWZHOP8VTf6Mtb4YBt+BudOC5E/Iyfph0NcWsUfvuxiCgc+c3qtmWjjxbh9ihdVNX7PJWXg4X680WgdqMSvUg7iFJcuhWOp+cqsQY+VLq00TonNKJX3ZtOTcZej623T32mhbUX//6l/HyF8/KiCvuUmSTp2puHN1+D0vrS5ivQUZKWaaSb1kjY714g7Zl+rUaMGA5Wu8uxMyR11T3vy4Qa6AWUx3awOd+/L2ovP0YgXRVuuXMSfDXWyKF47Xln1+Df+oSup9/AYPnz0h+M9Ibc5ih9Wy//l2Tz//uo3j8V38fq6+cJ+DNwSup+kIh7GNPdApr1hrOYxqrvWm8uuKj5lnYxePHclvj0D2KxrjInmGlC4HWhFvG9tt3xUpM+yb0zr2VlsLVjI25KrHxcg153bUb2+Ba2kPRToirpb+RilHjOYPG6xpR4rVhnBgFuEMrccGDakf3L7YVOdSbqRVdF6CjWxmgDTAHuI4Vn21HSScQ3x/NASd4VYtoVz+HapCqpDScJB3rpFuhwqSJAnqwKrSSIlQz6FO7YjLTw6RLoi12avoDH84gQoaHlMYs7DIwkw46OyleREku+kb2g1AXKEU9EaTyblt5n8Mg7hS0oGbgrdcbCGZCIKV8lrcbJDPswk1SNeZONDdDaKIElpDZCX+2LgNo/rnavjyKtZs3hz/5xAV88cPPwitkwP9Nl7ah4Ko8/UZrA+sUaWQmHBn1FA59BOzw1u1j2B/qxqNQRjzZRBszOZfC5ywybgYuN6Tw5Bo+gIGy7RSw9cPYsIpBNRz0ULz/IArsm3F5KiKfcGJv9wzwlttQ+u4HcO4HflVMl2KXKvaMDl6/QdA+HeNnf+m38fRvfUKaQ7xSQU0Pj8+7Wou1qI581EDPWseA7q1z6xVi/iVYha0VCXtLbYpc8pKmy9NaPHr4AEoTVYnSkhzC1h7Z8aJMmNkzNY39U3PyMmHKQdGAdGQhZWmru8nSGas4Uo1G2LX2YdXjsZxYpSQr31H3pX++LYXBtAgk7VF5laHI4WV39S0H0IF+DvWBbLpdZ2i3HCZWaIpB8yk04NxT+Wdm1Qn0R7EywDKyOC2RMdplK5XAUE0lYeJRHOncfqgUIPKagyhlJXr93A3f8Kwrzbha65qazmmZce8pJmrZqVDMvvYWLOqqwMdKq4FJLpLwVwgDeCo4+4fYN2i1yq+zeHoVDbRRE6UjbSjw0Ot10eq2UcoXMaBzzLI0j9hUrurFi9FOoHj0jY5M8dYMksJDHv7KbD2Td67whhAPib3Fm6IdypI0xGP/z1NorNJ7rhQwXVbgLP7HBA5Lqyto0jGutotwpyqwdk6jVCvCYSbJ72miDLuYQ5bzxfT72fEyspNV2lzzyE0nYXmfNcd9Hxf+30/jwm//tRACSw9gFQbc6d/QMViq+i02q5GTGBSH9LXB6eXXTL/49TvLdTz60/8eL//J5+FkPTieqxutIq1OUjefuopqusp0tIJtwZdxKpyj++Z+BFeWtq+VLEbn4ga8YlYihT0T09ixbyHlhIgR06wbfVQPTGNi7zTGukVR2LAznnGVi1NwKafEeNq8KRSGpoBt1qUVy+Vg8tK2dr+Lkn+bfF243NINYemYX7vrXSeIToH0LcegQ30ALPrkVc00YlPtDQ8x9VNZfM5FcY7WMpN/Q83SQi2t0xN8LaOBDq14aq8pxsjPCPgmPq+R9lRANDpNQeA0Q3+33lPFSNe5ojFls7RBjy1P20O40xk19j01x09tHmFSlNLucPFic1SRwrpCpmFSG5YUXdhzxCIgssQ7QGk5wyilerleDjPlu2zYrWfl0ev30W51UM6Xcft3b8fOByaRLWUkdZBMO8GVs7pT5y9OMAlAh+jVh1g/1cKzHzuL+tl2bIDEANcbtjG2cyEG6608+BguvLKK4186Dy/rYqo0LzaXJuzsdnrIUDTw3/zE9+CO+xewaxeBcbUAd6ICN+teM7wzKZ+YCRNYM5zW3nEMix/9IqJ2T9ZGpKfbGLp0vWPg68dueNL8ZNtx8ZjBmrNv8jo3OXyB11633sanfpbA+WNfQKaUk5FSeTrPHsygK9UvEMlw2VBM/fuhqjzwd/cHl1D1G/DC4IaOR7kBRKKu4II768d3LczJyK8g1d0arg1ueG3G17eUxZGfeRjhR44jONtVrNa5nPCkwDfeUZIIzxS0pflEfyGOADWAq8ESKasCsPlYC/6FDrSFdIwx8msucJ1k1FBnB94wkH6jAXqoAZp7ctpXA2jbiFVM6MEXxswsM0MeA0s7TplR6amLFCvVRyv2kSkQmWKREcTEuUVZ7YlaIdA3axRdF6D5lzksY4mgOJ5Fab8JM+vMii0740YcXYy0JvMImJ1h87/FS6jX7Ck/3ZxelIE6hmDA25l7A+8R0pCRTqXwp57tyfmrtxv43n/5ZtzzQ7te0zCAyx973zmDP/mpJ9C80BMzeP6v7/dRnMmrXTvaGjDxWXr5i+ewdHIdO+Z2ouiVhbXpwdXIbbPxz//Dj2BmXjFhPwXCgzC6ofOUKtcLi3PnJwj48hi0unEzg9zQhnlc5zXFb7k/lBRDvA4jRRJCiYiuGjbfADW38Piv/SFe/dgXMVktYcx1UZL8uUqDSUoPpqlLpQt88fMKFG6yrpen74WB/hxXk5GlNgUbG6dW5PW5+DhZKmNielz1JKTu+OBMk97FzJbPeXHXOMJ/fAeCR88Cz63y/DvVOewqr5e4ScyyRk2SoDTQcdUjsuPUYiIGMGlMC+nALzjfkmc8BHk0KLxep2uosc3XRPSWTHH4mj136Mk+mZt2ZnCXtwRluqAT6cGXwnh5xpptx/Pw4l3VUfkj0TIzs9G9JGqwpLop5NdsE97Y6rXtBMiNPaGEUqEqGAW48YwS54eznqdSNKEvcp04zLL1JAgriGVWSUWZngUKR/W4983+Fr8t9qV2GfxFp6k7oegXeNePpgrXvQlMx3mr0YuzwrZAtiOb3ewdJdz9gztfV3Dmx+S+Ct7+c0fwZz/zNeUARyd2GAxQnFaFq610FwtbZEvYr19CuVBBJTc2wqQ2Wut4+OePYIrAuReEiF6H20T8YHjoAksc9PUKraThJLiBY+B3N1jcUBu+k+SzeP0N19oaoG/ihqXXevbDn8ZL/9efY//kuICzAHKon7b6KEVQXQALVYeGGnfFOl8+rxkP/ZUO+mtdZHeO3dA16S62BKgdz8HczKQAdZQqpkk673gdAUV9qHpJDv9GMJp/tkS/8z37YL11G/DsCqKTG7DO0Fpv9JUDnW3UGIlFqLk+cfRs2L6tImsF4U5s+i+/yQVB2kh8Op74l8KU66Kw7xBZir76Vy+fdTVAD1OpjluSQTN75jLtVS3AMnQviKifjfodJxm7JBkyW6UPhkikdY4Vs2DptXfUR/VvxCPXIwPMJudrG1WEAm0zVSH2W7BMRf8GWBd9m6etMHuWLsZQLQojvYj01OEYWK2UhRwvlvGs2FGaQZmb3eC9lTZKfAPayjVMnRNiX46aDn29MJK73vq0GFcvbkiTiuhKbU+q4wM613e+e6/8zBvxWLhvAlOHKlh6ni67x0XKIGagwVZCezr2TrOP5ZN1TJSn5XqGOnXkRz4u1c9hcv9Dchv5wetEYuj92bUiLArlAz2Y1NbOfaEGuOsdA/+O3+6pMDslTZTRXyt13XO1tffLk1AWXzqHl/7NH2N/sYxiPkfHHGjlWBQbWEVpm9d4p7a0ykxJJTPIS6eu3xuqiOAGjqe72lIub1kHtYrybleOj6nZgeuEW39xGuEH96nodCuyUP0euJsXb1sA7p9DxF40zMqfJ/Z+tiHWCnKcjmZXYUreHr9GUjmMXaFD5VHOKUz/TENNdAmTAcjG+MyMc2OsGeavWcztamwbpNIctxyDHuoDYfa8ftUw3OMWYFt7YqhcK4+ZD/mMysDO5CqohgG9m9raDN5WTQSxmY/+vmX0rJmkC0xpWs1wSW2VyTsu41cvUGJ75wYAmvNx7YHWzUbavyGl/jV65/CyM8Lf6xGrmSki4hytH2zKoPnlOqfXMCkArY/d0YUmHrJ5AwBtumfMe2AG5XDDqqX0R7W5yht39ek9e+Pa54Ru0m07t6NYLhGoRlvLQfN5ZuOarou8V9SjtfQNNOyj6deJnQeJPezryTDSA82h1l4Q4Yb+lhR5l+v0c4EoB2I7d5nP6CiWu4X3y+3OPQLT4//uTzC50kSxkKeoLUzpGNW6Vh2TSTrA/N3osrDQZiM2yalbCl2u8174mHvLTVlLhUIOOTcTjzwzEksptvPMyyeW0cpFyH3XPklPmS7OLZ34oRoKC+6mnSsCd1PwvdxB9OWLsJ9ZhsVzDT0rXd7R6VArkean6i7sWsiGWP6rdSkIRikaaeZsRmZSkN5sQu+a56R9GUDfcikOw6BNemP1mrlSkZQ6KivAJyewkoGPpu021KBqBqg6GgRtBdqRvjh2zJKRNAsKCCtktk1e0NZs1rZVCpyYmoRarBa5zoLlBc3+D45RcJgwzwRSOgy3HD0SSv6lGAWbyYRTBSkWbRpbMhDwgNUVHnHkqo3IGMQwwHE3YXR9gI40+xOGr3PRGZv1pewqEKKz0XvDLn5AG8/yyrKkBlwKp4NGiEE3Eh69FQYd6bul6FUo3Aw1kKg7kNvWC1M5GR6s5iW8fvdIZMiY3qiVoVQkuecbBuh6R7nFZXQLslYlBLYC+q0ANHuYLP3VU4g+/XUUykWluWeADUxDXUqfbls6Fx1qtanRnxlmzTaqnoT6rO2+oc0t0gpiR3lJS/FTCnJJm16kU48cVa792Qvo19ex44N3SyExNEQk2trmPJImmSagfv9+WAfG4XzqNKwlAmxXaZpjFUfKjdFywtgPmsdnDQmcpStXpoOHaj6iybmlSk+iueZouGylUm1XlAtbmnz2b1UGbeo1fBB1DdDcErdpq5FXokU7VNNDuA+eQylZZ1oeI8jtm7E2hjlr5zFLpUFUmgOJMbfOOws06pDISgF2zKKtSC8+zZrC6++HrKpg+9JyPN7JZC9MPs5OxkNJjsx0NdH/xik0ncgrz5HN8Jl2+9aZVWTYg4Q2AM5Vx1JAVnYE4Q3myS20NzpYOrMGly41b0OWlZGccNb28Pynz+CRH7/nDbnw559fxoknz2G2skPeO3eZBcNQAekW7lE1wMFBsVZE51xd1AOGA3KRttVpCjBv9XWv+3fNrEXLgLPWiYeaQUfXDSAwXG2q2oaVWGjJqK/zqzL9eiucK6Aoov6fPolcxkk3w8WeKIoRWYk+PS6WK6YexSX4EJmoTKfUhb/SQn+tI5X74AZ0g/3FuhrFleo/i93gzHQSZqAU/U5Wy/jKR59C+9watn/vXSjtmVJrmZVZW+2GTeeJ+bhvm4A/noX7x6/Avtim17UTvQCMSiMS7ToX2UWpcabBc7nUOfFT6cZQa8XD1AKyFV6EuWikUH3Zo6lZdP+NZND2NwigOf+8Qs+LV/tBLxeokVBctaULyReTh53Z/OShkjyJmFMCGStm0SrXrAHScuKTmy4ERroIGAIjbbxWvLCQ+BpbpqhwA09aNINmFwO1m8SNKpEeaimI7UTJhmGUJLw2OMfGAzODcNPXzhBAN1++BLs5lEKV5aq8vAzKfXEdwfNrmhVf+z3KBkc31IBCYwFnzkTzhA+WVBeyeOKjr+Djv/746w/OLy7jw7/0SWleiL0PWJZY79/YuU09ZSwXscf8WFbZumoJma034VNnziKg41MGddHr9+S3PFZShTcgKfLqkUjX/F1mts0ewm4vltSZjJR8zpanN/xeaBnlXTQ+/hUKzy9KB20cEZo1DUuDs3p/sWdKFI34dBmFcsYqyf3Cni4IwngazjXXEoN4z08LkhMllGVy4JEQJWbs5WIBk2M1rD5xCs//yp/i+G98GutPn0PYG8ArugKAN3dd6L3QZmVRBBp81z6ie7kkz27uYd3Qxj0Uw1fofjnVkB4HOUpjDRwmueco3QJuUoOCQ+lSyBUAvaFZdE9nCm65FIdJc/RSKQ4G6KtO3HTzFgas6GRPCztUuWJbgxxXZTN0gYbWqOuYzjern7USsLSt+N+wU0VDO53eSGR4IuSnzysULsuE4RtgFJ5nSwgf2dbodNUouXFGVPah3B3wDo0jzxXrIMRm7YT8lnunVlCGYt7+pTb8pS6i+gBhZ4gcPStc1bbc6+Qt6b3lXfE1kCiCK/AC0Laq6BPw/94vfRoXX17F3e8+gHwlK4A02mtpOrjT7VpXGpGaKRZnn1vCZ/7T/8/em0DZcV7ngbf2t79+vTeWxkICIEiApCiKlERqsR3HkWxZ8ZJM4tiZ48lyjidHlnMSz5Kx4pPjSXxmdWzHM55Jxs5EsizLkmVLsWRZ1liySEkUV5AEAYJYGkB3o/d++1Lr3Pv/969X7+E1+jUFgCDVpVMCCKC761X99f3f/e69330BNubLMD4yyYZMXFe64UGOEpw7aS+mskJRCQLdBhlNWkA2mg1cLx40kdll8d+lUlZ8//QtqgeCId0Aab/PTBWhRsuPjP3ZrD+D96xAjzhl3fiaMZReQwAUXvGJRETEJKJIZCMcouWbKk6rdah94VuivJK8PVSVhlj3gfQbV5sHJcMi7oqVG0PY9QEhcAMHeUMm/vssrnXRvpSytpVsLNJxYzDUYgKk9Vm3yvunw6GpKai4TXCRJKw9cR42X7gC+aOTMPHAfph+5BDkpgvxPYl26tJI63C2CMF794H7pxdlUxD/bEroBssN8C7VpJdPlBi1FoacDJRWxWHE26DyMzc4Is/0svxu5BYfmwmZw38zA7TLH2QDz+Ub/WPL9sDzLaEVaz7pz3IBAv+qi/56vJ08BDLSujumpnXBWtMTGoaaoad+DwnPlR6jWJnos2K7ye0PaqDQ2ZM2ChPfR1Gb2LeW2QyxL5pW/vCM/MlbVFA0l2uw8tQlGGsUMBxeA7/mynpo1mQpajBZ79vusExZySIVcAJmU5q0E0gbNEsuB89+5hI898VzsiMykuxU0yXnFqFrT01itxVcFv+Hsb0/SQI0GICuNJfLQzE9xsk16T1SvdKSddk7tKIwUyaMzmbhVTcQk6HpXvpRAOVaBWxIw5Ofew7e/cMPgJm4H52mC51KA0PsZbj6nVfBrTagNDsF9/zke0TX3VAYEMrPJPINgezQM9Tlb3PvI2ovR7aYaEwGLiYV98fUhr8P1VNzUHvxEoY9FoMtr7Ogq5XHZnlKyoi666U7g5L81BGgISVtDehdWW4O9XmSSW5Q8/+0rilkzKrj4opImJMd37MPzlybhzaSLhr/tfn8PFReWoCrX3wJRo5OwewP3AOj98yA6ewUiuT1Gg9OQXB2QwxY1hzpgEmM2bvWEFKGBH8pYSjpUjW5CclKtPeHsq8i0S+hjUDCT0a+O4ljnQG6ygTUv1UAejvMkjzWaugDLeF5Fc/9Ay+Gap4r+PCpMSOFr7IvfZpp8egs6msKpDlhqMyEFIvu+sNr8U6vKWmD2VWkvH3V3yugp8213AZ9OjfUh2tVmpDTu4w+YgctTYdESZ1KzOjCqN16YCIeSrDVce3r56HxzQXQZmy8JCtOJonNiiY2UYnQDp6Axv/TNcWgtVhTMy0b9ozPQKW5Du1WU5Tg2WZKlOWZyNBNjWQRs3c+I1fECDkvQCBCpPBDT9Q6C6Me0xEGRqZmx3amVGlz+q/m4D3/9Nh15k3DHBPH8qLpReiXXGterdcgAzn4y08/A4fupyoR6fOxeGEFXvzWBWi+cAHepa3hdejQ7iBYzpRg33tPQnH/5PBVHMy6Qo4QhqVJPq4NKrMTCakwITUEcjI8yRy6M9zEkdrpy6LpxcymuKxNroUw9qiI4lA9BmQtaZ+i5mdi9BYmUkA0Qm1t+LVkFxwub2Xfdi3qGW+m6d1pOyLKQUScLI6AY5swt7oKaw1ktE4gqrPa5SYsffsiLH3nIpQQoA998ARMP3xQvss7gWmMRIyjo+BfrkCAoBxQCV3Djx1muroS9Pw+4lyTT74szXY3CmSMDiZ62XMfg15mkK4xgw7erACtdOgmazY3BGjapBwHQ9dNT+jQNK5ddwx2spPldpqqH1UsWld1zgmgZF06SuhkmpIyEkbtioVHnOAQD9Ud/l67COaiIJ5rZLtes0oP1OIyH7p2fcQB6/7JbZNBFz71DORSaTAjnU2MOOMcSk8KMdF8R6tYcgDSHXVleK5JwKZFS5UGpcykqFWmhUj/JrZ0TYywAkgOGJd6u41sTOvOpBGMWiRvI2VyrjZGDdYXy7B0YR32HNn5uKvp4yMwsj8D5fmmqMNttJvQ8doYsKegXWvA//zRj8f+ExZelYV/XsAzs3cMjqR8qLRcWEw5iUnQQwA0MmAPX16N8gDEnos5MIecxu1W6uDVmjIt1+NyGAmwdddrkNqz/eACAvLyc+cxcrBYQ454skjEzLkLzmHMlrlZhVmjWDO4KRhRFkjQUKZg9HzD9eEreVITOZ6E032nEt3YLOFGPR29VKVdzObgvgw+u0YDqkgCKniWm7iBhdIVf/WVRVg9swBHf/ztcOwnH95xbb4xnkaArkF4tRqXQ4Ky2GVgDmUCoytxBFSNo4vNQpA/PSGFWr3IqAtyo/UDtJI4OvAm9eLo16GpkmMFzyt4vnOrBKU9GeILp4NP8whxJ9SzCNR5W2hMlDAUDIqAOkh4bKiEn55o+Va+G5pqWOEdMq7wgNiUW3aE6pIZ7KSHwqSR865s+9W6vsgxOGtdthmSGdE794JeurEd45XPvwQbL1+DmeyIGLETlwPxoqLPHe6UZWjdsn0BzFFymoisAw8in5tA6GX3u809rP8m3aJjjw41F67P/1mZmyenc5HMZHlpOPeNhdcF0GOHs7Dv4VFYu1QX48WqjUocxqcgK85k+CsaK/D/T1UjOJCqgU2zB8lJbgfPt/baIvjUhUmJNDFSzZSVQkMc3mYDvGpL6PxaFPX4j0vgGO6drs0twyZGAlTSqVq3ZSs3Cyac8ArDLjhHyrSISui46oL+58AEJEf8iNpgGkJMnGQIuSXijSaM69GgZ61rAF15UO9u7oHYtDWYKBZgvJAHj7xBfB+abgfangf1Ths814PVP3sVpu+fhdLx6Z1VOhSR2dddKfnwEGMFzuLd4T4/RfRow9IwMvcyVly5ofFaF5gwGvRF9kbCn1Ecq0w4GyzhvukB2uVwYJUB+gKeR7b6gvS4AfWlUFiMBmX80o2OqE0mM28tbYmJ2JoK+QOVRNS7FRxqk9e6o9ZF2ZsexXk8jXdaXUuGZyCmKewkgUUt3uSMQUNHY5cs5aDlypFd0WYHjOOjyJ5vPEWjs9mE8598VpSjpTULjECT5VgJcPapI8yXY8Fowspwap38n0FsgR45d1dGqiQwZDTVWCcX5YmyhVcM0NS7lqR6csQBT1aJ5UmtO01G68+aUCmjr8PKqYYojzOMnXsiP/Djs3D2z69B6EbQbDV7hy306TpiQACepxsWPNS2YNYIwNK0HZUt+fWmkGgEG+0g3yo3ZOXDMF/baIHbaIM9kpVzEBmgQ9ayh7Uen//6S2KTFq3moZI1onh4RZRocY5ENETOhIEoh4v/noSyqIhPPpvYMCOw6F3aQO5E1RnZ7aHAKWVEdVXb92ggHVsQQJfYDIhOtETFicejvyhySzs2ZNiiNY5q8DpMd+eFZcKDOmVK4KUIkTYnBcphgjVLExVxHynx7GUwoq21JW6wNCna48f7c01Gv/68xoSzeSsrOG4XQCuZo54A6HM3AmirGIKxocshrvTsqXYSGbVf9SSDsfEhO6bQn3QaemlJS0chlRoqWRhxZYferQIBCeJ6osQuVPWbPNl3JxIHdYg1XUpsBqI0juQJqHmiY0lkj8kqlcZa4QLK/LWDskzwRuz5Cy/B+qlFSOHizWm2fDEZoIGbCjwHA3hkdWEFQX9iWG9lrZvqUBUc/N8au51JL/RQ3r8oio2fRFTCtbwiNZSQPGT1nBabWSqk0LawrCZD9pXTDVi7UIOpozufvLHvwRKc+NF98OwnrkCj1ZCSzA2WMG0mzVCH56oO7C21IUOdlNpOmIUmiG6Y8MAe9k1snFsEb6Mm73LKFJ2Asuoi4CaP4b5P/fwil4FJ+UixbwHG5PNNxlnEkkknF38exoOHJHEPRZusDWPSgyVJ9rgmOFxpgn5o+67S7ExR1BwHno8M2EtM2NHiXE9PmKWxn3mi0kft3qGWEMl9ed0EtPre3OtAMa7gCDWWPxU4hzGDjriAXZA6jGa9lAU+nil8RpHKUxE2ILYE6V5yY+s9a2yJQbp6q/Xn2wnQAcscpNss4PkanhfxPLwli8Yop3aVO/p0Oe5JmD3Sw6yF4FdcEXoKVoe7v15MCTmEWLbQrVOGuNkCvEke4Q4rLWbbCf9+lkNE6LgDgIbNNtQvrkGrlgXTNwUzFOAWcHIJQVrfl4Xcf/comIduPLaofnUTXv0PT4kFnMKdhgDaJxbEWholSz2TfgZ+Xi/c0fAXrQekExaOBFg84VnWcMtr17WEABUmq1BkI46mRzH7DllnCpVtqzLw7xEblCSkwcaVFpz76srrAmg63vNzR2H++Q145kwDhrkJuM3Bi3UHTuCaOF7IgGUNl5hz8cX1ai1OtqkWj+GJkkcaNHlLux6H/gbLFKGc6j1ks4ZGAwdqTQmADMxi6lAQxaVzSo9W04WUzCEc7RCtHZjEaCJ/3UAK1WHqnV0HZxiA3jMiPgMNvm15brf+OOkAqiVkDuh2u2pcEhg3b3EWViNHx9E0mPvzYL5tCvTxzOtDGBVlqoiQZQ7FoDUlA3EE4+bSQns2wjCWR4VvOEbqQVJ/pk7Y3mhvKZEg7LxVAFrJHLTrUC30eTxfvhFAU020mUWOVEumo7mknm5owMk9YgBVFwKSQUibpqwuAraWwRciI+UQ0ehCbNsxZFhuJCs8upNchL57BRfqu4arjgjWMIxdaUBDq2O4lpcMBpi6uKFgA4WPvQvMu7cf8/TKb/4V1C9tiAqPHKTAjixRIUFyhkxyaNDCRZVawUCkY0BYc0VyZGgtBrSegRfSClv+ATFoTenJmpzeQn8n3ABFvW3IwKxxzJiYHBPPYo3iNtsoMRQ71kTVc8Xn8tynL8P9H9oHxX07fxkzJRs+8K9Owl89+QRUYhOoG29O1KPwxEYKTkyPgZ0bbiQT1RyHQcjue5EgA/L5RkN9bYN8OEjTD2TDUBTi9/Ml29UrzaH9KcRUmHJdRIzKbzxKgJzaPFQ+Vq1B9XdyNY1fd90EXpZtCWnOO40A/YFDQzFokjnclgt1t8PPXO+6Q8ZTgvhiqMQzY8trIXaatYQUoWW5+YreyREkVgcK2+Zmtr9R0vMlovXApZFEamTll7wvEMiEqW/Z4I5mIbVek+velF48RN68yd6KOatXf476EoQu3OKxV7cLoJXM0WD95jKeZxigT2z1BYUZHSot2cYrLAaNMDFhQTG2IJ79J7w4qLWT2HWdBodKfUmUddnUjagSYww2yslODbwgXRd38KFgD/99brYES09dgnqnA+N2lr0opV5JFSj5f/bwUOC88JVX4fLnXpLdk/hZx82MTO4EcpHR92yM50WJoenThHMaTNoG69Dwk56VpJEIG1hfM4WfA90/2Y0ni/c16fAq/OcEkOucYFG6YpgY5wiJio9u0W08ZKuftVUWW/Ct/3gB/sYvnXxdC2nPvSX455/82/A//q3/BGtrVQQga+tPjdfl4Ge9HKbhjFeEB8zhQg93tSyqOOJEF70sUW/ic0v27PlQXSuzdYA0zY9ZJo8JG9bQXvpFaGKDTirsYWxYzw0WlhzwoBg0PTyqxklHM/jprYHj3MgzgxhxsFwXG76e374+fOTYDFTnNyWDVvpzoscg/qDUOPST94BOlgZqLyd/ZTJTsvTXNRpry3vkUtliwFJQb1IdFDgj+ggjNHyQ7RkkU/iumfickpVdNDjEG+29T47Zc0/mEwB9y/VngFvf6t0vc7gsri+yDv0if9Atr86ZlmYzuqGsQjXJgE1p3ShKugzJiuXJlouhSoJx+zU9NARg4QXgd38l1yyqsBC7Lf39yvAlbFY+JTQ8ykKL79kJxeZgHC1B8VceB+uB7etta3MbcOrf/AV4DWn7mMWgvIBnSJNkxLyGCFrFLHj4s1I0286QjRq0Cex8JSciUjUYWTOE45rQNEPZGk4zDP2OD27Thw6erZoHrbIHTYxUWni2yy7+ucdAweE/s5YwjBKuYN2SsC7TI7tKHV74oysw99Ta615MJ99/N/zyH/9XcOT4XlxAnXiTUP7T1MFo6TaGpzYSNVuIHesje6iOc6jv314qQ9TqiJKvqMfVbohwERlFvdmRhkYMyMl74Lfa0LyyMtR1rF9YiCfHhNz/F2vikXxmmi3vc8CNNepBp2Cmp6yuZynQcyBLBZqIstEG/8LmUNczfmKPeHeIQfthn9+z6jXAX1smkh1kxlrREeWlVGmhUURLdg432X88WGyIiq8o6FZtKOYsJSEGZ7xuP+tAeywLOq5zAwFaWBWrLuSRXkQcoD9fZYAuM24Ftxo0byeDViy6ySyakoWv4DmL5+NbfUEqp0N7BF/ATSvuxhIJLQy7fTbq173ecTjCnJsTa4IF0mlE8RBJ0WErml20LpnUufjfH35DTE/gTtwOoKzXoK2PgD2SgczfPgqZHzs6VALPq7vw9H/7Bdg8swxm2hLeFVN2TnRRBhQ24Mbh5tPQmhmB1FoNF1Qg3LughYyBxsMPi8vMcknT7uBqVX4cNrIZzwggMEJZgoj3IzNiwcgkclJ8mUp70oJhFabSkKLBuIlJE+tzdXjlS4tgpvS4QUeNv0rWVsST1hOZQ9HKji/Un/7yKfipf/9OKO3Pvq7FdO9jB+FfffEfwO/84hfhic+8JDZkmitCn48y72qWoC4muoQwvmd4e1V3Bd/BtgcmWYNqiXbqYRZ5sw2r86tQxJ9v0qalafHED7EeKcrrDNd8Vmm0IStGvoVxXXkUAzT5dEhECTphQsYKwYkmwY5GIdoCQyRAW2A6lmhL98+VwX5watvrKR2bhhSu+wCvq+62oeTkuSqlW9lDoJjaX7zpgyC2fI9Or0sLUVFvyB7RQpJSgM0RC20ck3i9ady0VyqIGz5NQIilGW+P15u/MMxkg0rEAL3CJLP9VgToZMmd0qKJRVPjyoGtvig3bgLlSaK2Jio1ZJsSLv6AqhpMrhDzY4N+kRTgkRUiq+vLdk/SmEWlh3iAmrAUlEZL7OccyBmAVCEhaiu3C/fum5HDOscyEH3gIIz93ftBP1gYGjWf+difwtLXzosR9mRzmsdgvARpseOTruPlUlA9PAGW60Gq0pCaHldD7GRl0KZDWm0GP1MplwEnhWwcw9k9d43B2J4iFGcysP+BUZg+NiLA13JkG7iVlkBuDqg+oXrkS8iAW8imDVOPh+PyPIL+GbPdkUS8YZiOBsuvVeHLv/oS/K1/+wgY9usL5qYOjsJ/88mfgr/5C/Pw7c+dgac+ewbW5+uizlaPbYR0wQzyo8NvBM1LS2Iat4HRi8Y+F/qwgINrrunhM8OnRNMCpSue1m0z3kFQ3BKg40MhMhN1zhKczRx+MiuCTjlMNBMROE/gOX1Dvk/gSe3VGg+7cF9ehdQHD4Oeu3ESNbdnBPY+dhdc+JMXoNJuQalQ6Eob3LBF718K15Wm3x6A3nxmHrzNppjNKCs1QvEORSpRSIlv/LWDzLk9WRTvkIPPNh7yQY8mdz0a2oaV1J8vscSxyvh1S+uf3yiAVlIH0b8NZtGn8aTVNCPi0EEXiWzI2tuG4AqG/l5yBplICSDLdMBsInviaQux/2fIv/Z0FcnJJxpPX4lioyVd1F2LobFDvkDFI5Pwvv/496B4bEIkT4YHzEDIGnOffAEZqil15oi05yxCtKwG8TMOVO+aFG526YU1UQJHko6N9+KZ5XXQ567BD8Nd21cxYAj74Y+8Bz74D98Fe+6egKnZMShOZcFKGd/VQ8yNOzBxVx7Of3MFr0nr8edQYJ0YJNIziLabCNbh9JcXoPA/vQQ/+IsnXvc10aZy/LFZcf7YP38Mnv/SBXjtqQXYWGjIMkD82Q7eh+Pv2T/05tle3MBNypDDIFh4p41IG6JOjxJ7m4trkNEtyCXMikTnHm8aw1aEkJBEZZyFuGtZArw9QjkVmroTSFwUFRlkDICRXDgJ3QkBg6Uu2oDJ0VDIgLg5UieefxFZ9Da1+vQAD33wflj4ziXYrNbh0OS0tAOOvW1YVrRvj3pamVuHy187B3uousRXgKxkjm7EFuJ71Ng7BiFuSla9DTZGAKDsickOd7o3oqF14xg9m5UC6HXOpfm34/O9EQCt/DnqrOdQ08oYyVt4vnfLDLLlwOZUE4wlGjyqxwkSgxJnNLG4lAW72gKr6QpdKeRMVuwTEEaJ8htZWSfr5iOeIMwSR8WDYLUldLNtNeicDZPvPLDjG3DqX38VzvzWN2VpTyhf1yy+bVNWHv8bwTlrQ/XuKfALacgubIDT6AibSXITq+DL+rtLF+CH5of7uRYuyPf/nYdu/kPk9lnZycZN1mz5GRumq+EFyZFP14GrAU/8h9cQ8FPw3p879l1f18h0Dr7vZx8Qp++F8YBROZpsSHljvQbNi0vI6i1RNy7a+S0T/LWq6BDc7misVcBFEKjlDRgJo7gNXlPezDtwbqP7WxcTuUOZj8O1nZ4yRMliY8mXXaGmbBgyoQi2v1d4ft+I3InaCzLcSjlCngg1Oby49WeXtgdoikT2jsDhD5yAy3/4gugGTDmOLLNMmCVpWeu2gMkr/+4J2Hh1CfaN75c+JyJijuJacI2bqZoTBXBLaVFym9moy8IBJmdGSsN3rvd+WbopKjj4KDNAL3GC8JbXP78RScJ+qaPDH5x2JaroeAZk6d0WG7cGxWwavImGtAQ0eLwO/mr7yByoNhMfAskCqnyOWllFETsnFTVKLJrcoMJlOCFNj3IhTsoFdVckTW6JAN/04Nn/4Ytw+jeegG7Nm9Ro96dKGFJp0CmmoHJ8D7hjebCbHcitVkUtNzXCUEDwB/NXMOxoiq64N/KgBGJtrc0A3W2iEPc1kAnDgJs8Ak5mxYNNEydhOckbX/m1V+Ar/9tpWd97s9iHJQec0iw/bQcrPaiXSYQWLnoctYtyNBo1Jio7tk3sLYr1V6fNViVHQXlCR9tO0FZHdX4NOrUWNPHeNvBmWhkd8gdMvC4NWgjOWiiH6hIApcxRKKbuhlQ6K1wJdWV1oDSl/hcfNyw7bXOFRSTeE+9cGTrPLg91bXd/6EHInZiC5Y1NEVnIUV7Sy11YeaZvPUAv/sU5uPSp58FJpyRjFol/1Q4Pcbu5l3WgiZFjhCzawPtI8obq+BXe3VS50bc+Ur3VG+c52l+5nfLGGwnQUV/CcA7Pl/D8DsgKj8GhLL5luZwDXqklwJdCUBGm4O+djgt2y4XGTAnaYzkJyFzZYcQm//KhRWZ36Gyk5vb5MkEYbBKDbt70D9xcrMIT/+jTCM5PCg8PVYtNQ0nH7DxMmhloYxRQvm+fqNEkD+LC/LrUUQ2pCf/5ygp8a3MDMsiVNqke+g08vHYAjc2OAGgBwCLBGkhwFoAsO+bEGagOt1BECD2naM+V00u+8msvw5/88vPQaXhv6Gcrv3oB0rkmFI+nQLekdwkBoS5Y+PavTHluKZ7Q1gzDnoaSaAcdiSGPNRNVehhfFu+yRMljazEQCW6RCMWfkktPwsTYfZDOFyGFBCWdz+CZhlQmjRGUhevflJ4rCqzJPhXXn5NNc700yxL4DFtfuiTGQm0vKxnwwD9+L5SReS6sr4triWoe+Fer4L+4IvI4t/YZrcCzv/RFjJJ8fB9s0H1ZZgiqTN/kOnx8b+qHJ0QVVIgRUQajI5MahXTuPMZn6k141+FMugvQIUf5CyxvNG+XvPFGSRzJD66kDgodqFKdpHrKsn2AVI1BX5QybPAKAbShAXY5K9pXZdZPg0yrLcCsMVkEP+1AZqUMBtVHcnu3CC31KB6dE9eahXIShKjzxYXlzzdu6gfdOLUIT/2zz8Pa01fBolpTNiggYSCN4cABZwRaGDaWD09BgKyGdvnC1TXBoCkkI/Y212rC5xYW5AJC2K7TjDU3AMs23pinx6b5giEHyh2NRYyQuxY1rlunZpgtM2PdP6curm/+7jlYu1iFD//KQzB5V+GNAehvvAB6xoZM0RSzMmsXfHArkWr32T5pdW5BvOTSsCmAEoJXECVjweG+T4caVIwQ8nssiEaR4dYiAc60Zk1TVnOUJg9BqXAMgdvAjRDJhW9I6Yk2StFxKDdIX2yegXhW1CJupxzcfEz2XuGBy44B/pUaNL88B9mfOLLt9WUxYj3xC98H3/qFz0L9xWXYbxXFQImw7d3S6uDymWVBdqrn18HGDShN9nNhwg/GYN93vD+tvaPQmi7J9wjvgbNZj4dEkz9PNHF9RJQ2nWRy8DUmkIRRFbjF7nV3EkCrhCF94Coz5zQDMw15+KEtNTA7DUG+jnEGgXQGFx4nRPBFyGD4QrpSbbIkzFCyCNIOdW4ZrJGGnG02ZANBbNTNI9xFKHoTd/+Lnz4Fz/3yn0HrWk1mmXlum7yWCPZmSgBH9sHmoUmxiOjaclfWICukDYOHcOoweVCHzJwB9bqsyKgsN8TQ1+Jk9g15cPW1jii1c3IWm9RoCb+ciH11k1NYkvA0WBcVMratwZm/XISFH9uEH/rFk/DIf3H4dVd4vJ6j9vJlWPn0S5A9okNqAsAZN/G56VA9h+ywog0FPE0q4eIBxfT6G5zwkObxyYERNz7a1QpkJmi0mgHrSx7k23hNwkpXExHK+OxhmL3rneBV8do83MxDU1QDxeDM0QudViD9OujvyUsjN1pk5YMHLSuXR1xr7a/Pg3l0BJyT2+vR6UwK/NUWvHplA5ojY3AgOwYWTWexbs0zW392Ab71kc9C5dU1IVmQj2FRc2TS1dBiRz1ajdTOXT80KUbn0edKrVXAIY9uS05Z18wI/NHrk4PpXnnjVZCNdatMJm95c8qdBNAKpJVPx1Vm0hk+37PVFxXsLGxmawKknXJekjY2Rs/WpMZUmypBOTcNmbUqZBDwjLZMIPI4E3YH5U6viBOGaWQR83U5Tdh8/YusuViBF//Xr8MlBGh6Wcy8E8vOxMUovB/PlSD94Ako7ynFMw3zl5ehsLAmMusRO/S5+zugIw7/w/fvh1//4iWxybgtH3w3eMMe2umvzHMTSiC63JQRjiaNtVWPZ18t7DDrWhOacQ03gM/+90/D2a9dg/f9o2Nw+J2Tt+VzLfynr4KHG1/jnC02BruEnyGlw8hJfGldQ7Yob6sdr4rkIskK5HRIbTRpXQ57pQHAJAcYQ6wtSgRSl2drGUG1jevZDiGry3r00b17YOr+YwgZHkZcskOUvrduqhFSUk4S0hODtDBqCqQFaWayEM/1FFPjDZmjEQFQw4Pa//EiaB95EOx7x7bezC6tw7P/8ovQuLKJG6sFlxub4OgW7PUyQ8kkOz1e/b+/DS/+L38JnfWWtG3AGzFpZcEijxqeYK+i5RCjg+qxPeDnUzJiwc+dX9gQdc/0WUmyCka967VnjNDNbnLwAuvPFLpu3M7k4J0E0P16NF2TzUBN5zsGLl588UdSOSjjptY2qpAqF3gslPSTyFVbQs2o7BmD+v4x6IzmILNUgfRGFXRq+FCDNUO9S/Ko/M4xRZKQiveNEWfnuw2Gd5c+9xKcxcW0/ty86DYkg/kodpCTZjfOxChkH30EmqWCrJPFl6Q4twwjc6uiYkO1owd7XAizck3cjWz5775rP3zqyUXYQEbeqLRhbN/tlwGou/CpP7ggkrWBHzEwc3t4JENwLWnefh1QKyiOepykYy4dycoaYoDPfPaSAOnjPzAD3/9f3wv7To7yhPabf/iVFjROXxXX4LciqLzsQvGEBfaYLkZ1Fe/D0Ndbh7DTwc9uxSyYh/uIyeXz33wZWtTmbUqfbXLWRs4GOR6zI7RgBIvm1fUh3gwTWou4ETdwS8fNooX3lhpnpu89Dtl9M/JZ5OqQ9jDgrJigiQ1bVteE7O6mM12nzTISzDsEgzYJhBoaCyUSepxcI3tcYM0cOoEYUDzyS49A+gdme+9Tx4f5/3xa+MfU5jbBSJliQ7DwLlEnrPheN/ERlU8vIdn5Glz5/CtyP7ENwZj3OEWYShXYfqDrq0Prqn5wElpTI4J0UVt34eKylAwRuEVAQ651fdozvZ2p69kzyRvLnBz0bqe8cacANKR/80fD1kc+r0ZjUShhMUir84GtkoYFB5l0VIPW+CaCbxFXjyZnGOJDyFIx+tIGgvQoeMU0VPNpaNaKkF0uQ5o684hNcPMH8CBOMlfyLlXFpImdALTXcGHpG5fgld96AlafvipeDKqNjmKAkuBDrNPbOwZTj74DzNIoEnXplp6/sgYjuIhE5YkuAc2fQXAu9IZg7z5WhFrDgj99YQFqGzc3mUmMnK6zgQyyjZ9H+GasNvjPJUPWkaI9/9mrsHKxKpKvQQCxOYcuWjR58nWPOVO3rOx6oO4z8ekrmLbweTQrHfjOpy/AC1+4DCf++n5424dnYfbBMZg4XLgp9CB0PQzT67D621+H0emDULYuCDYZIEiXX5QgnZ4xxDSVpc/8IWx+85v4acegteCJyG099KGO4Flf2oRrz5wTddCUCxHMAz+PKJEztNg0iID83K/+AQSbKzD2+HGwSiNgFvMgupHp8+Ob0NqowQWa5I1EwbIMsdYvIMzec/+9kJ3uNbRvlWpgB3kwG5oc+kvmV5QXCPS4usYIJfZS9KXTRS+1wA9asgtUzesD1fYsXi6IFhqw9vNfg/w/OAHZD98l1kPrtXV47neehPknz+M/0QRYkmc5/f5wpgQj4OCa8KR52XfzWPB7rn7nKlz89Atw+Y9eElENGUZFrC8fSI3CrDMi+xdUqQ29OpTo3FuC2l1TooCA2LLR8SB3bZNKcXgoLN6n8euvzzHMZO3zZdafrzJ7vq3JwTsKoBMgrboMl6QGIa5PDaC5b9DXUa1iKZWHcqcOjdEKZDaKssU30MXLQJq0ObcClX1jyFZz4I7lRJVEa6OOjLoMqc0m6GRAZCjzcVzUZVc41Vl3bW9G1Fquw9wfvQiLf/kaLH/zsgB6M9NlV4o1UykUzT9r4nVMnzwJ6ZFROYkFd/TihSUonV2QZYNcn+lPdhCcB4eJH3goD1dXZuDVb8zDxP4iG/J0W6qZq8VTZDotHzau1sTm0NhsQXm5Lv0S6h3YWKyJF9htYli70RJ/XsN70qp1xO83l2vgkvkTu9VZRhqZyIgI4UU5L+nPoMaH+T0ArGkqWZj0H92GWiVKwiLucCHAoGYUH5ne05+9CN/6/XPIpMdg730lKEymYN/9o3DggXEYO4RRUmH7TbWCnz9FZXP4/JvPX4HmC1fBL3c3u32PPYJA+wKEpi/KL8sve6KMKzNrCsP+zpU58NuvQeMqAvN5H5qtEGqRDy4+t0lqmEilYoMgGi2Rl21GklRkMLo7YII9GsDm174E5W98CRl6Cf+7CIgjcO1iGzZWPCgjC68ub4rBBi38PptpBwrjo1DbItnqjtfACQtA/mCxfaawM9BjX2Q9lK71UWDGE3Nkf4Au134o77/IofsMeghJ1d86Bc0vzonKI/cisuqoAy0nB5sI8OT/kUNQO5wagxEjg89IRkDea+XXlwO4tAHzX34Vlv6/87Dy7cvQwTVp5izhhEf3MKs7MJsqwYSV5Sos+c5Kx4ZIvNub9+2HMMVDPYg94/tlY2QrtWf85DYSs8L1WJuxehz1TrPEoZKDt620rofVR9Gt0bvbP/+FnYBzF/A+8nmDpQ2yLtmL5714PoLn+/j3gxksMtHNdk1YZzq1HFittOzNJ4ZH2hsutupEEap7kbVaUqgjwxSz5UJ2Edn3agXMtnToCrwI8n//GJT+6fUNHpQB7yBz3XjxGlz501cEa24j+yLjdCNjJywXmQZGEpw7yOBr+8dh77F7YLI4AQFPpBh5bRFGzy5yGaDUb72J9pbgTOYtRYwayp0W/F9fdWHdr0E9KCPpapMLhWBajqmJyg96CUlPy9g2VCqBAABib15HTomnz0kt0Upo0BW0G3psnaGb3cSYnGptwmhqRpgRxTaXyURgd4qonMqSHFp3o9bj5JcqcI6/v5pQzXan9Lw7IbhtOTUkU7SgNJaCbF6Hsbtz+AcaNL0Wpx4jbrWWzUnL5yqw33PgRx7FNeBvTYjIGnThm0+BR7aagSzbKp60IXvAkO3EkexEdSsI0ud86CyF4HsRb0Za7HcslBALn8OYDulpA+yiLn3KdcnHxLixtg+tJQ+aVxDkqyGu5UiUh1FzTXFsFArHjuJny0HD98ARQ33NgeDieh6YqwhcbY01aC7TUw5vbGhFNgiaB7ETHvAEEk1lMSMtbqZRj49kOU2XjJkSoLh1Qc2XlqM508ENzxTzB8W/9fAdfNsEjP/2X9vSIY98aIKmC42FCpRfWcL3aQlWnpyD9npDvE9Bi4bk2nIsF16Ijett0srDXqcAKdOKNWc1h1RM/sF/u/qOu6EzXZSfCd/z9GYDpr5zHnT6XNza7e1vQGj3udbhgxpN5ePcPp6fx/PrDNRLHN3fEKBTv/Ghtz5AM0ibCZDeh+c9rEVT0vDkMCBtddKQqmQ5YSLbvYX2V0hDed84NEdz0jNCjgUR7Z+5hU2Z6S1j6Jc1Yex/fy8Yoynhz9FZqsHi5WVYPbUA688v4MKqyhuoSy8DTU8AUFy8gIsGGVBjqggNDLv2zszCzPiMTFTiplF8bQnGzi3IJA2P5AoQnP3cYHAmsKVFRCBMn/HiWhX+/ZfbcK26BPVwnad1k1GQBimyU8SfU0A259iWuLJmO4KmC7EBf3IobKQG3iaAVIKbFptrqBFTI+Y0WFoqYWGfcBuOEv/Vh8nRECS6dzkmbJd6vle3O9HEayM2bLG6Qp+xzbgbRBhqE5REvpi+Qu/XyQMp+PF3D9eWH3o+LD7zLHiNplwn+DPzR00oHLd5pFIUJ5mai4HQi4NmJNwRqX7aKuBZ0iE1bohutUhNl45k5RD90lkLoHYRgXk1iNeTiAwzKRg/egSyUzdOjlIuJm9nIIMg2Q5cKDdbYK9nQGvpMTgDOwyq0U+hMhELeDaieg/U5OuEdV8M1MmnocvfaVrXJEvNBe0uggicd8yAc/cILOp1aPmu9BgnFl7tQOXcKkYgm1Cf24wN/sV3F86UuphWFGoSDwmYD6RLkDFsThnxJqhzpRDLb+snD0D9rikRKYjB0Xjt089cwCi5JhP+VKmCxMedaF+nPZdSuaS88Sd4/jmez7IGXUaM6iAuwe0G6DtG4tiisqOSeDVD1oAIvR7aSu4gAKu6Teg4GH6Nd5BNF8H0TNmua5Dk0YYUstbaeBE2Z8fBS9sCSL1iBtZLObAbE2BXmpAlzepj3wYzZUBUccHFUOvi2jysRk2wU7aUMWLUSdi0MXNSZT61/WPgjeVgdnoWJkcncZc3MHwMYPyVeSheWhESh5rT1plG5uAMBmcC5REMKw3+GfTrAdxkfuKxCP7oqRlYrJFTXU04uYmfjkx7JO9AxrFip7+CQSbtEVCRSxh1X7kYg7UkQiqGkjBB0njCOD4KKh0L1YvNfhcR/3s90dIdDQjJtRsXcfS9Ook/TsonVK2DoJemLkvSdfFi6m5EsivYjppHaTGQSKHpnr0h/MDbh5s5SS8rJQL3vetRWHruBWhubIhbUT3riyEKhfss4S+uADe7HyOVvQgqLdm0Q81IOu0DocbsFeTcS0MCtVsOoH7Jh/ZKKGYs6uxTTd4sxf37MRI4vO010nqnaiZyXVMVCPlUiJFiDazNPOg1gyMh6YMsfq/L+uBAkxUlOhIFTc291LrDGSJVuM2lqRHLdKo0NVImpon5ij1SFv629bV56PzFVVjvbMKFzhpHaDKjKpq1qDY5bXejL03j2ynzGEUzLRKBY1ZGdEaGag2wf3M81BgBuXJkWoCzzK3qoill5Pw1ZNA1Wa5KX4PvXnvs+h4HYuQJcCbztldYg16D2+i78aYBaNytItytlKkSJAA6YIAm8H73ViyTdsNKpyF27VZxE2w3C049jQvREDsrOVsVlzYhU23AxsEpqCHDpUwvJRi8YhY6I1lo7BsDs9qG/KVVSOtVSGUduM/aB6dq16AJXr8NffwrjdEJMAysz5SgNoMBAC6UQ3sPwfjoBPjIqoxmB6aen4Pc/DouHIv9aEPoTDbw67YGZ9LZrd7hleLFvH9/FtbqGnz11AysIjh0opYY0WPoNri+AWmbTdwRFWxciGncEEYQtCtNKuFKWLiquooeDTgSLJQGp/qRK7RuT+vgaqUES451TC2e8i2/VtZydx3tkr4c2xfaaQN/371KIltUZpt1iDXLFzVAAKl38B56cgpMF8s1btWO4NFjPjx8NNiWjZrkJY33NW+lxX9TRDb90IOweuYs1BevibVTO+eKwb6jb7PF4N7IY88RKrfN8UYdKbN92bWn0QBpXLWdVWLMHnTWpbWAwBlDbkWFmSkYu+eYAOlhNpACMmezb01krZS4T7VSDRwNL6ZhxAMtxO7FcwqNUAKsb9sCoM22J/Vo0BONXNLDRjBmIS/x3E5xX0MenKGx2x90S1rUU6NSOIyD9+cmYLPpQzlsMcHoilmhmlEo7n8kJLwsbjRTdgFG8fPZmiyhi7T4IbHfh0xo0jvb3FOCzXv3idpr+qsA32W70YHi5VVOuutiY/JGMRLSw+vYc9aKrYFrDNCUHFxU2jPiUbAL0DcG6UEA3WLJw77+JdeETkustOG1wbUb4I42INsogdF2eKCsBrYXwPSrC5Bfq0B5/zg0JgqyjlIsShO8iRysT+XBcD3ILlchu1qDw/MGvLY4B76uHJe6cgYtohaCfR3BvZ21BSAe2HcYRkqj4FFr7WYDpp+7BBn8eVHKlGBmhNAer+MGEewInOP7ZNrwnmO+0Ie/dnovVNx1JG2uMK1vulKCGM85ULRHcCFihIDAreP38vIRrFaQdbYjCWpRsoqid3oHvZwhwrKHiNLy67KUjmue9VjQUENDo5hURVrXI1q+hdF19RvRwG0Oelk7/5nDwOyYXY28QwMTWrhxiNFSehx2q4ugnN0HHvbhwPTW8mEKwc7Ck8CBNrdkM00Roxbo1GHi+D0YOaVg89Ic3i8EhUsBRB0XSg9hNFXQgW9Jl1Bq0sSI6pIJmJtzPjSvImNe9iWoiXZk3BBIJ52YgPFjR4YCZloPVApGm/NWfss5BGmSwJojdWGHa21kuEZYkhBhbMTlfsSgO7YJbdz1TNJ9KVHBJahRPBxYNtqoTVdq1dxHoJ5ObBbeJxOJVa7B3ZkJmPcq4EY+R1bQzX3gD0mR85+ZgoLpiF9VFWwQG+RpXUmRgZokms54HtbffhgiJFBUjUKLmZ7g2NkFsEnPs01ZTeTgCs5dX7mRtpzku/UCSF8gYs+3va37TQXQCqTpBiFQtyE2CxU3rMMAXWcmPTEIpBXDqLlNWcGQ3QTTcSDVKoDhGbH2lt+oQ7bShNpkETYOTUGrlJVsWNhj4SJJO1C5exqq+Hfp+/ZD9soMXHvlFXAqDVG+JHTzYhpa0yNi+gktqmI2B7OzhyCTKwA5pOYWN2DmmYtg19qiA4oWZWAE0ByvirDyRrLGVuCsDvqcjx+lJGAKnr24ByreOrSCmgAsCEpghxgmpuWil97lNIUcYKqE67ceQbmu/Myj3m7AuNMsFG+eg6BvI9sIcI/UWUSNNNW6HHVVY01LTj7qypIJQIk02LrlOZL/QGMJJoNRQDatiQEDyj6U/g9JElRbwEb9yeSsRJZiBuBHHvWglN8anEm/JafErTocVb19tYPv6qGDYOFzXX7pZUA8gfa1ENaeRKaGTDozo8fht5riEeDm13jVh9ZCAO5mKPMgolKHwNmE3NiYZMzW9q8hXUcGgYsYspqkrt1ALCrYaQGMdXxNoikf7LUc6L7O38tgaUoXoJZCAuJipOfiDaOSwHStBbobCKIiaowjRt6I5Q/62WGUFMIkoG8RH9GfUiLxmDOJkVjQzZ/zeqDrpDVu6rpInofx3wOXaupdO1OlV5MZF4Ly2tsPgVdISyUcd2OyEy1i1FtY3KR5VfKZmBG0J+sD3698lz1TOR35AZ3npGCV2XO4C9DbAzWBdMQhR5AA6QbfyEfxPDroayl5QtaBBNKdwAPf7EA9vwqWl4Z0uwCaz+3U+BiKyxXIrdcFmy7PjovKC+nVzgan+HI1R7OQGbsXMpN5WFyYkyCocRMAa7iTY5Owd+8BMBEUgzCA0fPLMHlqDixqv0WmQow1sFxolipbPxhcsMOAc5Lpvf/eKiD+w9lFOQcxrWeRHeaBrG+XKj5MjehssyoXOXlNTRSIkUawVo3ApYnhPDlE1T3HQkXEejLNLqRlo6Z8J5OMkJgZ2hUl4r9Imo1q2yQJaQOhahTSmSnhqWndthYMfAD3U2i5yXc2MdEDv8e+8RD+5ru9G0gpmrAMyFrbDysVm72TkR92chz2PvIwXHv+BQQSDzy8b+tPdKB9ADewSROMDK6DDjLsqx60F0NRKSMnAGmiYFS3LCjs2wslBHvQh+tUpSiJwvDkWtC26QShv8/Z8rMRSLenq2BtZsBq2hyLyiqbiHVpB2+qiVS/jaBH8pzRQVBHoKbKJjFFntgRR4zxZPeYTffD8WCQJiC2QWcNuZtciniivHD+07uZZFUmqoBcMWcR4ToGrD56tzDgN0KeR4qLxq63YPzsvJx7qKqiCi289nDA/UknhzA8j+dZBupNuE0TU94SAM0gHSTqpNVkFsWiyxySvHPQu2+xLk0jekjyoKXlWS1xFtojAqzDUD5QE8F48vIKgnUZatPIqA8jox7Jih1bY/QgfJuZncVdwoellWsygYHMw7Ed2LPvAIyNSV8NqpmdfHkeJs4u8IWYgg0ETgsa+coNkz8lrtbgxXKNkY5aujJbMj0E6R95qC4SZueXxyXb0XwBaxtN2UwyPWIIYFbsWCRjchpeO8BqJRRg3k36JEtSuhq1ki00FdJrCVqs/q3WByIhZ94H9ql0uZfSl9O2RhK9/BpOutIPanrE+COWNKDnYnlQOzxy1IeHjvnbAi5t3nxc5nCWqoZmtvqaIrJtwUrzAHvf8XZYPvUSuI2G+Az1CwHUXvNjeVXjYcSq65HMiTJ7ZqB04MDQwEw6c8ZyRPKPj3XWRstMUjJ8vbM32oRobdRcXO+lJkQZH4E6K/MEIQ+rkDQZDHyY1Nxl0VTyUg5qeJqtNoJeW1Q5CfkjzlPw0008UC2M+tbLVgkGLZaqZak8V4WAltjPeZYodPMK4hnT+sMIdO2hg9DcOyrbuukfsA/H5Cvzcc2zaKa0MXrJtQfcWzPpufEcs2eqe15hTPE4gt8F6B2CtNqz/QRIE2hvcNaVyvGmt1qstOjrXkuwaTqqqTLodg1yXg4MPDXqhkMESyHbTc2twshKRXQirh6ZBjefkknGQI4w2nvwLpHAWFtbgdLYBILzLGSKReG/YG82YM8Ll6G4sAGR6GCSCzvI1qHhbG0VSjoohdQMzi9x0uIaq3vk0v8Ilx4OZN0kd3zo7SF84Rkfzq/orAHqgi2tN+X7tGdETgqRw0jldaUd/DzjGqzjndyoSa9mPVE2FfVtBqrsLNaNI60Hn6+r3tS0nn+vqj40BrM01RmncaOgmmGzi+miCtKQHYsVBOZaW1VEaD1ckq6ngLjzgw95MFUKbxiZ0D3irP0CM6dLvI6oM4ls3B4G6ao4QBJJiwqWKv7Uve98BNbPnIXatSU547K/BR03/ExxBIoHZyFVKg29zmmDprpmAhCGQarLPccbyTJHjfQh0wzQR7myaXzQ95OyCF6z2wDfccGfdoXJmN50kI3q3OwRxW6PtueDSUMHMg40RvNQK+J6xAdAXjZOuSmmkeg+dyuGQTfBvN3E9MRf6131WpbEJTbZbrFGohuVkw70242T+6F6dEYmNZWnM4L2yLlFyC+VRdWG8MPGddQaLQ/cuCgi4Z+2wtrzq4nE4G11rHvLADSDtOo4TCYNW7xoN3kBvw3Ptw8EQNw5Ryns9ySbpmRKqAdQdfC54Flsj4EVpBFULRFnUyJx8tIqlBbLsDk7BhsHJ6ExnhMrhebQzhw4BMWJCSgUSqA5lriY0YurMHPqKji1Ju/kUsdtpnHRW60bJqtIqmBg/Dae3+KSn1UG6Mu8u79/K9ZEwENM+kMP1+HLp3x4eUET9aQa6xEbjUAw7D1jBgKBxnk7CbgUEU6XSPPFm1iOoO1Faoh4PBVEJf4gkcCDPrCW+rH6bXSdbzzlA0RiCG8xMWUhY9ha/I/UvzOYQTUQlDebIbie1Ld1rVuTrb7/fbMRvO8Bd1vgo3vDlQ+n+R7TkIh5XkMF6DqXUW5j/1ayGW2gVCk0dvweyO/fB+VLc+DWG6LWWLdtyE9NQWF2347WNj07SgAmgPkqX9+rvIlcg27bMd0lh0FZATeRk3u2kknoc1fxmt3QB3ekCToyS2cjj2BryNJAnStxdDmpKI1ATB7rrZGciCLbCNZ0EkGhBi9qoSawJuA2kHUTw6bEXaRpCY25m2zoqYNPJlNjqUyZN0HXz0VVbHCktn58H2yemJXfgKt4qAIrvVnHSHVRttRT2SF+DzdXu65qQ21YqjQRZK0z3eM5JngiMXgnsOc3JUAnkoceArUCaZdvrGLSy7wbvm0rtkkPiV6Ipt/BsLkTg04ltQ5maELGHwHHz9CsJLFKLFy4UxeQKeMOXZ0egc19o1CbKYKRzyI454Tskaq2YN/peQToFZH3i1K2TF5oGP6m18DXt9ZE6aWnsJtfTOpg+iaep5g9VRigN3hDoiX8/Xju2epFpyqWv34/MiZ8Gc8sikAxDiUJ7KjNfP+4KfIoYWIEE/02n5WSx3I5FFqvqofWriu5iLq6b9zx0i0HjwfIJr6OmmdyCMgZR/4My9DiqeOqgETjl7Yj5IxQVJoI1qV3kV793EJKh/ec6MDB6XBbHZdqhhOb31PMnC4wILvMSFf5ftNG+NhWgKc6zzY7+M9yOZg8eeJ1r2eKmqiaIAHMywwapIm+xgB8jQlInRme2HM4obXGf6fOd91IOqN8DK370AyhNVkBq5ECs54S9ggyW8z5BUN6eOQ3a5BqNKGNIUqL7BKyjmDXIe6UDdpsMdoUAI2nhqeF4E0AbrY7CNp+vLb0ZDleYjwWaHpPCU8M1lyxQUw5tA1YPTkLZWLOuswgCr2ahlkgyZp+8TLY+LNJh6Zn7GGk0Em3Bt5rpc3z83+B7/Edkxh80wN0n+TRSTDpTh9IEzOizsMHQQ4DGBjukkF3w2uJumk6fN2Hqr0myp7yfhFZdEawAVokNi64CQTg0vyGWKTVqQJ4SDmdhguFa2UB0tRySuEerR9Pd6GcXt0yYpLhVkqEznz9X2cAOZXQxJoMym3GPeVT8gODKlgkG0dAciL44INNKGYD+PZrYcxmdHzxqm0NLq/6CNIYhtu6qCVOJnkcCwF8QodcPYKVciQSc5LMdIFaTapmDh43qsi6a55grcleHGLIhbQGaUf6IwvtkNmylmzbpfuPP6vaCKHcoO5QBuy+u2biZzi6L4D3nvBuKOn23d8Gb3zfSWiOyqmMJDOb73WL73WTv+btW8klBNLEpJVkNuxB10Usrk9jpms5w4xZAfNCYtNo8kYSJN7fZuKs879TIF0alKugzdvCn113WyKC9LJtcVotB8wqbmJkNmZA3ClJVTI2eUpvVCFTwc+az0CdZvxlUxDgDu9jKCSM3XWtW3rHeQOdJsojwyZ2bdc7+DM6gnmTlizL/EIB3KJELgHKHCaJyUge/pzVBw+Ipq+41E+XU5GoU3cSwTm3VpfVUSCrNpqFzS0Spz3SxnO8Cc7fSYnBtwxACw35PISFu2MbQJ9vcp1v+ArffFro98MWbeIq9HUMF9l0W4SAMmvtQ8VeR6DehJxL05IzYsAmFdfSwiIwTlWb3aYMKp0zDckocYG2nQrU7eqW155s0+VN5Qlmdi9xSKsSFi50xzSralOdfyUmPbYVKyeQfPeRJl5yAN84F8iUfSQTWNTcMbcawcHxCLKO0QvSTHDGCiRBIEWrhrBR43e2BzC5tkIRaPFuhkJLJjDOkoRB2rKZ6Dbk/9cT6jZp4gTMm3Vi7eQRAnHSD/pqF/aMh/CDb3Mhs00BRp/efJXv7bMsG81Bd8Zchy+qwxu9OtuJRPTjcF2Vb7cUsoYbPK2d7Q4h7SAgk5SR6F5bTLDlC7xeF5kZl3mToGvzH/zNfyN2+jL+0dxH/rWXkPqSa7/C64kkj2NbrQ1ik/UEMfHSHXFa9QwCKTFq1TUoSz3EYFoyA6s2IItA3c6noD2SheZIDjqFTAyqcoCsLhi2qOzTsrLSSZPNPBGX9xltD6yOC4YXiF4DRZ+VrkzPmsCfqkrCtIxGNTZIIt2apI3ilTWYOr8MmiVnXAmtPbcyOErFzTBxz9UM1Et3orTxlgFoAdIXdHxemp87FCTrpJu8uNc4fLnKL+X9nGwbGAZT22fb9wSj9jgBQiU61dQG6GEZnCAH6U5eeF7ElQ1ab/cdxnlQzZTBM7a2XKQXm5hMAjyexPNp6LaZrvKL6ba/4wapR5RIK148FRyqKUzftxVIqzKyRw43wUaQ/OrpINYGhX2kq8GFlQgOIA8fSXM7bdjjgiHkCGLaxWwkKj3qbS6PirP58vNTRy3pyVmWMGyeCxdyq7BMAnWNj0SVA0gdnEB5oxaK0rmkrUPCfgNyqRAev9eHu2a2j0DpWdLmx8nWF/jenmJ2Os8VEWLzS/3Gh8SDbv/8F0IG5P6mqGQ55+RAVkpdbwx4fhhcx9yoxjdlShnD6E6wvcTJvwssZV1lKUMBc5N/Pq3p8ORv/mqU3CF++0tPRx89+jf8zl3rqpEreb0KpFc5sWwP2sBoc7FxnSo2LYA61xQngbTdyoDuyesVSURDBYMRpJu4SdZakF+pIkAjWCNIN8cLIrKMdHanUky4L+knpqRTzsbICmMo6UfDOpYawaX8nbmzUdOkQ6VYovj1DhKkPS9eETJMJJqXNCRFdfBNb6C0wVGU0p1f4Ht/7U6UNt5SAK2O2kUjzB8WsWYyeVhPSB4LDNLH8TyxVbVHmhM1lERs+Z0eoG7pVWhZVbD9NKSp8iNwYpQM8X9N/LuWU99WcyQfa65rPcNhtwq3rkK3i8ldf7odYtAJv/KpdvSxv5NSgw006O3ziBikb5jFf9ssMh98Tf/zKR/kGEFe1PjxLq6EcHDChFJW1oVr3Awi/yc1wmIGGX/KQIAOhemSbDqLBPBTso9AWeeJFjGbluJjt7svlh3l1O9qK4L1GoakHSl36FrySUh+TQOiTx4M4e1H/G0r1ETzgZCtBB7VEqz5NIOgKlOjteEpcBayzq/9cPT0D/4L//4Tj6lKoWQ5Z5WfC+U1HthqU6ANl9YMgbS4c9T5Z9jJpFSVr+Mir0UlYyzz978OmD/+//5O9H/Wtzb4b57Xg8zdYScB0oqgVBjsl7nK49BWbJquUbLpTjx13Eu3xWm4tgBqwzVltY4O3E5Cm6uOrDoEm5q9yg0oLawLgG6N5kVykYa1esiCQ9uMqzREm7imcx29GpjBycUo7DJp1ZHK9czi70nWoAgWQ6zZ71yAdL0jvrf4Us2DZqqyZaTKlGOB37UzvFGX70Rp4y0J0GKxvupEgeMF+YOhYtMqgahesGv8Ypzn8O++QaxIARvp07Rom/zSqcM1W+IUNzGU1puBvn1XaF+lxtOsNz/Pu/kiSzMCPNaf83p29H/y8Xb4Wz8Tg3TyUGBC1R1TW4EHXeOxmaaQHj77rAceDRLl+lMv1OH8sgezYxFMl2SXJeeL4pdR+k1QORuy6Rz0pOZVfbTUMZgncxNJpHRJrsCgaWKKMSs2rmv9ckYkqjyO7o3g8fuG03fpM+astKrSOM9h7Au88V1hSaOq5AIE54GM6a9+93eD9/7szyrZI9kUVeZojECVrG/vHgQGA5pfOvzzL/OvV/hZLzHD3eTriqUMep5PfPYPIlsbbjRJ9ZwWFo5GbkLqcxNMeo1/3v28wRQGXTfJQQTUTb8dyx50BLYLLVv+t9XG+4uAbXq2aHgSWrLIiBhy1CfZvxKzruOPvLIm5oK2C2khgXTwVypV7eTSgkFDwgYg0rolcwq4NQXKbIwkKohoeEHHh4PfPg8F3BQiavwS5mARlDOrMPg9TqsN0uN37qU7Xdp4ywK0OhoX7UjzNT9ztBP2vWSbiQTiRdb9FFCPb/XCbQXUMqm4PYCoZBVlkPH3HZY0KFn1IoOJCrXE3LP15/2B4PHRT7TDX//plJo+0w/QdGHkm713K6ZEn2d2tAF//10afPIpF5lwBF3fZESQjRA6vgUHxqVtaRSXzIWJpgROBPKoqx77Dk2yoYRXnqzqwJeZKkc26iGsVCPouJFw1NP13jCA6RTctz+Ex+4JhUyy3UGRCL2EzJpdfgmfY9b8GnRnyjVUku30Iyejt9/gez7x8Y8Hj//Mz3Sg116gzi/1VZZKZvleT3FCLs2yk2qoWue1tpQA5GUG5Y1EtUiLv8b/xh98MiAnNqVf7eSovCZ7sIpHY1uEJPtXIH2FczEPwIB2EgIy28jhWvEFo3YDv6cK3ku1xEnTcwwEadvF9ezZsrswXo3dpeu4HqRWcLkuVcF3TMF2PQzjqBKEgLs1lpeATaZTCPKBISO4eCnEmjSIfgJKOB5C5jyyWJasnH9ezVkTEewgQpTrbpjf5nWhpI3anSptvOUBOpY9rlhhftZTsscgNn2FNcBzDNT33gioKdFA7KKN57CZe2J0pH9xtv4ah93PMIDMQbf5oMPgfMPdnEHaZ8CJ+gCa/vy9eB7cqrpDc+hlasA/+X4H/p+vu7DRYqosOrwiWCh7CNIB3DVpC4MiP4xiwaEHeKFbqZHcipSaoVhxy4ug0ghhvRoKzVsxZuX9oeCZSu6mRyJ4/4kARoYYVq78KXjTU5ruc7zpnWXGqiZiEFD5v/DxhcAva/BzHz+57fd/4vc+ET7+937a7UvCVRlgad1M8FohcCa39xSDnpeQGDYZjJV8UWZQVjKGWJtPfOqTYV8I8boPBOqgeASS1U3JNb/E136RZb6BFgmqX4A8pttivXs9QE29A6GDYO1wFBkgWHdSCNpIAiKjmzg3uvkMU6RnfEiRNrbZYJ1aE52AbfKyoTrrYgb8jC2Sg2QFLIc8SysFp96AfeQEuVIVCUIZueEHtKrgGu2BchdJiXycYanrTSFtfM8ANB2t+TTiiB9k9nv9ScTKAKB+lYH6OGxhwpThZA+xC2LVyXBwkExCJyeGTvEiUcmqq8xsRG1r4xUj8MM2DDNxMwHSSu5QAK1eSgLpI4O+VjWzVNwG/JfvseHTT7uwsKlmCYKIU9eaIXhLIRwct6CYMURziy6Fdun7q2kxo447rqOuqz59XNKVScbYbEbQbKvusC7IxwwY37W7ZyJkzIFokhlWzkj4U5RZylDAfIHZ4jp0qzSCX/q9+o6Z0pN//IdI4DT/3R/+yWgASBMo5/gk9mxBPCsljtgafA0NflYdxZbpbj75mU9FkWnd9DVfec0Ki0c8ry/ZmSxBvcr3iQD6Htii2kNUnODpIqNuIVi3Ej0DPVGk4SKwyveAuhMtBGozcMAOHJnriFTnIK8ZrWsDTbKItdmE4mZL2imQP3vaAjefjoM2Wi8OtZy3PaFBK3R2rQay58GVUokk8Sp0Sysvvxmkje8pgI6B+lqKnMqD9L5WsiRPaYtrDNSXWXI4ywBHi3dmEFAT0DkihAqQaXjIMmSCRRO+wnpS+1plZqfsDC8m9GZaKF7rTDqQ7+3wRx9IJ5m0GmzgwhazHOm6So6civ5Tj9rwhVMenL0WdpN4+H9lvE1nljpwF4L0eMGUk6sTQCyBWn6Fwfo01Uu3EZiXKwGSJHyBPPnNjET5gRpjRbmf4/s0eMfhEArDDTnp96eI+J7Si/cKA85V1poVa3b/xcebAaX69e9i7Tz5J58JHvvwT/bLHQR2arCxlXifkjqwAmQFliF+r1CE7s2OnPRxi476WTPydDcoHdX78zFJXfpiYq2r9W4Nlj5MIRfICLIju3AHTGSiZDoNzEDqIl4ukkOo+cuOCLQRNANTrJeoW83SHQCg2K8fQma93iPiRcy2lX+La3QQnDcGfnbVKs/P4tu8TpRTnfDaSC2lwzsds76nADpOJM6nIgSTID1znT5dZjBdhO5UX3rxabzFXSwbDCxXytGJi0ItWE4C1lnGeJmB+TUOr1TjgcjUV85Gof06P0tCkx4E0Aqk37aV9CIG7rbr8KEHME5P+/DURRoPxW53ZHKO3+nMkgdTyKj3jRqQJx0xCtmdTI+NN9p4K2sMzLWmsi8FmUDqY8w2xrpHZ3R4/310DcMRmJRog3aSBjfnoTv94jxHQEu86cXJtn/58dZNewm/9bk/jMK2izTfoSm67mM/+hMq3NGhW/KYnAAUD7n61h9/Rty1SNNAu83rvXKOJtuF/sgxrb9XYAO6JagXeI2+zGv9CAxodCFGSuucToogSeZz6QxvMN9RD8Clkx6J1WW7TpAWtgoGrn6TCghDPWbYIiFo9NdaKqTGRa23oJpe23ITL3RL6p7kqFV5bQgpEcE5eDNg1fckQMeMejEd5XQtCKabyfKkJFAvsK55lpNBdO7hcxoGd2qF/HWXedGf5+9xtQ9AhLZZPQffdYiFIB0xk24N0KMVi3vnoK9VAwEqnTo8jsHuZF6HL73s40sXdUNRunAE3jLepqlCCOP4b6hl28cXtNaKoIoY2EBwrnek2miwK1nSiZJCXCrxuxcZ87uO6GAO56IqAcFOJ9ug53jTU912c3xf1/nli8vTfun3m5F+C+EQQTcUc/4MI0j+GBHK+6HUWKmWkLrl7Df+VSufIyJguZmjvt+nk68lZL7zvM4PMCE5xARF34pVh1FKJM4JpDvIrj0uMdzu6BgtccZgREAd2MKWwEKWTRKJ1uOwJUtZ23YTWlvIGqq/gNcKbeBP83pRNqKtO1133gXo/uNahjbsIOoCtWIYZQ6X6eGOJc5xPkdYh3T4vWz3ySXqXOHFUVMA0rxkBKEfAsDNkcC2AWnFpN876GuJ7QuQdpvIbNswU7Lh95/qQCVhZUBsmqaXXNnw4VpFzSeMGH+krKPzRJUwYUFJf1RIafCeYzrcPa0PHdGTtkyMWVWe8H1UkYhizKrbTlW/iE0PWXPkk6Shabtre8BRPWuGYHhu4Yg2SPa4logeZxisyTRqlgF7z6D1k5RASPogdk3M2kPQ3koKuU7H1l1xCvJkJVdQDx/f8uuVjSzrznPQtUy4xIRL6M7InqNdgH4THvpSJgqQUWuTjX6tUZXmqYRQgU/6fYY1uwh6a083Gawr/GctpUN25uzoVmziH/0EUlho+L/+06PJCTT9IP2+QRojHcrvmC71H7/PgS++5MGZhW7xkioy8INu3Cl6B/qrDzSpL08VdHj0sAF3Tw6vsw6w2lyDXuOgOegmAJP+FP7HPtkOZQCzC8zDHJvnwtAOU2H2HldVOA0qySNCQsnyKQZnFUnu41+1QSxWNXuJur8gEJNUiFlT1DUsw94OkPsPAmfOTSyztPE8b+bLoLpG3wS68y5Ab3MEazkxDo1Q1Bivq45ElQF3+CSRK8WatArYk+O4WglWJzwTWoupMCfA7NZGWB/9xCKC9B41gSbZttxhBv84s//rjqTB+wdPWnB4PISvnKYEaAJ/b4B/1H9wHJnyyb0G7CkND8xCx7ekXzcz3zVmy0lHt37jIFGd8bFPNgPpPL+7dl/PUTunY9AThYUjUT9QK406z+tlLAHYk3xOsdw3DQPKU5UplM1QQ0yachjEqsWEIwRrybCHY9lbHQlPG9q4/4qljbOQ8Hh+s+jOdxxAtz7yeXKmu0PBOkszWENDj/xouqnK83S+dwZ0jYuU5KoYqyp5i7yVXBQFIdxOD/CPfuJa8Os/PaMaJqI+kCZG/xjcwIpVmNJ3mnAPBrl3Tznw5Rd9eHU5gCDqfwGl/DGe1+Ddd5mwf1SHncitBMjUBEQeKMyYV6Hr6JY0DlqFbg2xSAB+7FPNMAoM2FUybpL0cZHKcnSxbgvSMiFpPKaS5yqCHOFzlE8l+ynQnuI/v04OoZmIVMeRMC6KNWwB2Azaw0gjyqGOm1GWGZxJ2iDd+U1T77zLoG/CoS1now5oAeJsgPjlCWtNX3oXW6IyP8RFZiBAhaINlszhbPxz7w0CkD6QTnpnK48SsqS8d9DXUqhopAyRPKQv+8ETphjC+twVOUEbGJinRzS4Z8qAQxMGFNPDXxtVZaTZXSzhgUzArMyDrrAeqoBZVWaIaOSXf68dgbG7Jm/VUblIs4W0MHc47G/wshMRZJZPYthFPhVojyXAO3kWt4qgzMTMRQJm5WciLFEDnycAJcFeT7oCnmdgVg1gycncwZtJd+5VC6Nbc93tn//Cjv79ncqg3woHRijE8C1+qUqsHVIZFXkzPApbGLyrF4VGJd2oGWfYg9gTvUxZ4ZcRl1T1W20qYL7OapNetDu9seB7ZC2pCNLqA+xMArDzzLTVr4UEgJegm2yfgC3mbPYf/bo1rx8iG8/z+SJv8PPQbe33blYrN0X6NyQdv/GhXQa9e+z84DFhqla635ayxkD4LhigS6thtGRJSZM4Xo9OSMxINJiYTpIlzfHLRMyn32pTJVbjkrldYL5z1hKvIZ+HZWgJqU8BdorPdAK4FXjnEqCtwFqdimWXYMCAjb4KclqzqgRW9RjQmlqChFvhneyzsQvQu8cgkE5Wdig9Ws1zpFrpw4O+nsDV0k0B0sN6kKhRTgTOXPrkJkD5EnQTf6qO+TqrzV1gvqPXVLI5ymPAVgzb6GPZimmnBrDt3AC2nayScvh7BnB9KetVZszXoNva3+ZoK3yz3+NdgP7ee6F8noze70tS5YVP5u4PD/p6i0c8kU/2IFc/YtsExDazZaMrY9D3VUm/Swm2rOrDr7Pa3AXmN+36SvrBkCyg3QC0nT62nRlwOtD1OAkHkIp16PYYNJk1+2+Ve7oL0N+bL5Ka5ZjsoGz1LXwC6oEJHfLCIPClYbsKpKW+LBM2JGNwqdwyA3N/N6XSl2uQsNrcBebvGdDW+6SRQUzbToCzAd0WelXPr8pYk66A/luBNffIOndKknD3eEMOxWocDi+pNIpafMkw5ySf9+5wIyegnUuw5Ut9IahK/LWhOwA13H0Uu2sReudtmonfJwvqk66NfmL9vOFraDdJuHvc7CNp6JP0PCZmuwpd3wsCbaqZnuRwNHnQ122wXEGMeZHPBQblZRic+AvgZvW57x5vlbWo1tPusQvQu0cfyKp6aQXSFQbY88ysqRxKZdcd6BrTJ2URZUy/zr9X+nJP4m8XmHeP3WMXoHePnYN0sgyvwSBLbFhl1UkGUcb0kABzAuA6n8qcPilj7ALz7rF77AL07nETwkw3wajVDEeVbVfJGzMB6ippo8BYeY/4CflkF5h3j91jF6B3j5vIpoME8KpkYn/SJpmhD3cBeffYPW7uccuqOHaP3WP32D12j+/u0Hdvwe6xe+weu8cuQO8eu8fusXvsHjs4/n8BBgA9wMdjnUlhpQAAAABJRU5ErkJggg==";
		var logo_bitmap = new createjs.Bitmap(logo_img);
		_currentMainScreen_mc.logo_mc.addChild(logo_bitmap);
		logo_bitmap.x = -180;
		logo_bitmap.y = -180;
		_currentMainScreen_mc.logo_mc.scaleX = 0.95;
		_currentMainScreen_mc.logo_mc.scaleY = 0.95;
		/*
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
		_animationTransitionBetweenScenesFunc(_welcomeFunc);
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
				_playAppFunc();
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
		window.open("https://dl-girls.com/content/folder_1728489592" + "?utm_source=" + window.location.href + "&utm_medium=game_referral|game&utm_content=simple&utm_campaign=" + _TITLE, "_self");
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
		_soundManager.addSoundFunc("completed_sound", 0, 0, 0, 0.2, 0);
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
		if(_information.timeout_id != null)
		{
			clearTimeout(_information.timeout_id);
		}
		_information.timeout_id = setTimeout(_redirectFunc, 12000);
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
	Credits
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
	простое окно с кнопкой закрытия
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
				timelineControl.gotoFunc("mid", 1, delayTime_num, [animation_mc, func, arrayParams_arr]);
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
		timelineControl.gotoFunc("end", 1, 0);
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
	function _stopAppFunc()
	{
		/*
		
		*/
		createjs.Ticker.removeEventListener("tick", _onTickFunc, false);
		/*
		
		*/
		_soundManager.setInvisibleFunc(true);
		/*
		
		*/
		trace("Application is stopped!", 1)
	}
	function _playAppFunc()
	{
		/*
		на всякий случай возвращаем фокус на окно после работы стороннего скрипта
		*/
		window.focus();
		/*
		
		*/
		createjs.Ticker.addEventListener("tick", _onTickFunc, false);
		/*
		
		*/
		_soundManager.setInvisibleFunc(false);
		/*
		
		*/
		trace("Application is running!", 1)
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
			_stopAppFunc();
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
			_playAppFunc();
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
	function _openLocFunc_2_3()
	{
		_information.currentNameHero = "hero_1";
		_information.heroes[_information.currentNameHero].currentSet = "set_4";
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