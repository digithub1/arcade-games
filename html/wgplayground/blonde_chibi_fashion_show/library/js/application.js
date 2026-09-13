/*
* @author edapskov
* @copyright 2019 edapskov v 2.0
*/
function Application()
{
	/*
	константы
	*/
	var _CWIDTH = 800;
	var _CHEIGHT = 600;
	var _BGWIDTH = 1200;
	var _BGHEIGHT = 600;
	var _INDENT = 10;
	var _BGCOLOR = "#ffffff";
	var _FONT = "Arial";
	var _TITLE = "Blonde Chibi Fashion Show";
	var _LINKTOGAME = "https://www.dressupwho.com";
	var _LINKTOFACEBOOK = _LINKTOGAME + "/games/" + _getSimplifiedTitleGameFunc(); // or "http://mysite.com"
	var _DELAY = 1;
	var _LANGUAGE = "en";
	/*
	публичные переменные
	*/
	this.copyright = "© DL-Studio, v 2.0";
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
		adsFlag:true,
		currentHero:null,
		defaultHero:"hero_1",
		currentPage:1,
		timeout_id:null,
		interval_id:null,
		indexListHeroes_uint:null,
		listHeroes_arr:null,
		heroes:{
			hero_1:{
				currentCategory:null,
				defaultCategory:"category_1",
				categories:{
					category_1:{
						currentSubcategory:null,
						defaultSubcategory:"subcategory_1",
						subcategories:{
							subcategory_1:{
								skin_0:{rewarded:false},
								skin_1:{rewarded:false}
							},
							subcategory_2:{
								eyes_0:{rewarded:false},
								eyes_1:{rewarded:false},
								eyes_2:{rewarded:false},
								eyes_3:{rewarded:false},
								eyes_4:{rewarded:false},
								eyes_5:{rewarded:false},
								eyes_6:{rewarded:false},
								eyes_7:{rewarded:false},
								eyes_8:{rewarded:false}
							},
							subcategory_3:{
								mouth_0:{rewarded:false},
								mouth_1:{rewarded:false},
								mouth_2:{rewarded:false},
								mouth_3:{rewarded:false},
								mouth_4:{rewarded:false},
								mouth_5:{rewarded:false},
								mouth_6:{rewarded:false},
								mouth_7:{rewarded:false},
								mouth_8:{rewarded:false}
							}
						}
					},
					category_2:{
						currentSubcategory:null,
						defaultSubcategory:"subcategory_1",
						subcategories:{
							subcategory_1:{
								fringe_0:{rewarded:false},
								fringe_1:{rewarded:false},
								fringe_2:{rewarded:false},
								fringe_3:{rewarded:false},
								fringe_4:{rewarded:false},
								fringe_5:{rewarded:false},
								fringe_6:{rewarded:false},
								fringe_7:{rewarded:false},
								fringe_8:{rewarded:false},
								fringe_9:{rewarded:false},
								fringe_10:{rewarded:false},
								fringe_11:{rewarded:false},
								fringe_12:{rewarded:false}
							},
							subcategory_2:{
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
								hair_10:{rewarded:false},
								hair_11:{rewarded:false},
								hair_12:{rewarded:false}
							}
						}
					},
					category_3:{
						currentSubcategory:null,
						defaultSubcategory:"subcategory_1",
						subcategories:{
							subcategory_1:{
								top_0:{rewarded:false},
								top_1:{rewarded:false},
								top_2:{rewarded:false},
								top_3:{rewarded:false},
								top_4:{rewarded:false},
								top_5:{rewarded:false},
								top_6:{rewarded:false},
								top_7:{rewarded:false},
								top_8:{rewarded:false}
							},
							subcategory_2:{
								bottom_0:{rewarded:false},
								bottom_1:{rewarded:false},
								bottom_2:{rewarded:false},
								bottom_3:{rewarded:false},
								bottom_4:{rewarded:false},
								bottom_5:{rewarded:false},
								bottom_6:{rewarded:false},
								bottom_7:{rewarded:false},
								bottom_8:{rewarded:false}
							},
							subcategory_3:{
								dress_0:{rewarded:false},
								dress_1:{rewarded:false},
								dress_2:{rewarded:false},
								dress_3:{rewarded:false},
								dress_4:{rewarded:false},
								dress_5:{rewarded:false},
								dress_6:{rewarded:false},
								dress_7:{rewarded:false},
								dress_8:{rewarded:false}
							},
							subcategory_4:{
								shoes_0:{rewarded:false},
								shoes_1:{rewarded:false},
								shoes_2:{rewarded:false},
								shoes_3:{rewarded:false},
								shoes_4:{rewarded:false},
								shoes_5:{rewarded:false},
								shoes_6:{rewarded:false},
								shoes_7:{rewarded:false},
								shoes_8:{rewarded:false}
							}
						}
					},
					category_4:{
						currentSubcategory:null,
						defaultSubcategory:"subcategory_1",
						subcategories:{
							subcategory_1:{
								headdress_0:{rewarded:false},
								headdress_1:{rewarded:false},
								headdress_2:{rewarded:false},
								headdress_3:{rewarded:false},
								headdress_4:{rewarded:false},
								headdress_5:{rewarded:false},
								headdress_6:{rewarded:false},
								headdress_7:{rewarded:false},
								headdress_8:{rewarded:false}
							},
							subcategory_2:{
								accessory_0:{rewarded:false},
								accessory_1:{rewarded:false},
								accessory_2:{rewarded:false},
								accessory_3:{rewarded:false},
								accessory_4:{rewarded:false},
								accessory_5:{rewarded:false},
								accessory_6:{rewarded:false},
								accessory_7:{rewarded:false},
								accessory_8:{rewarded:false}
							},
							subcategory_3:{
								jewelry_0:{rewarded:false},
								jewelry_1:{rewarded:false},
								jewelry_2:{rewarded:false},
								jewelry_3:{rewarded:false},
								jewelry_4:{rewarded:false}
							}
						}
					},
					category_5:{
						currentSubcategory:null,
						defaultSubcategory:"subcategory_1",
						subcategories:{
							subcategory_1:{
								bg_0:{rewarded:false},
								bg_1:{rewarded:false},
								bg_2:{rewarded:false},
								bg_3:{rewarded:false},
								bg_4:{rewarded:false},
								bg_5:{rewarded:false},
								bg_6:{rewarded:false},
								bg_7:{rewarded:false},
								bg_8:{rewarded:false}
							}
						}
					}
				},
				dress:{
					skin:{currentOption:null, currentColor:null, defaultOption:1, defaultColor:null, totalOptions:null},
					eyes:{currentOption:null, currentColor:null, defaultOption:1, defaultColor:null, totalOptions:null},
					mouth:{currentOption:null, currentColor:null, defaultOption:1, defaultColor:null, totalOptions:null},
					fringe:{currentOption:null, currentColor:null, defaultOption:1, defaultColor:null, totalOptions:null},
					hair:{currentOption:null, currentColor:null, defaultOption:1, defaultColor:null, totalOptions:null},
					top:{currentOption:null, currentColor:null, defaultOption:1, defaultColor:null, totalOptions:null},
					bottom:{currentOption:null, currentColor:null, defaultOption:1, defaultColor:null, totalOptions:null},
					dress:{currentOption:null, currentColor:null, defaultOption:0, defaultColor:null, totalOptions:null},
					shoes:{currentOption:null, currentColor:null, defaultOption:0, defaultColor:null, totalOptions:null},
					headdress:{currentOption:null, currentColor:null, defaultOption:0, defaultColor:null, totalOptions:null},
					accessory:{currentOption:null, currentColor:null, defaultOption:0, defaultColor:null, totalOptions:null},
					jewelry:{currentOption:null, currentColor:null, defaultOption:0, defaultColor:null, totalOptions:null},
					bg:{currentOption:null, currentColor:null, defaultOption:1, defaultColor:null, totalOptions:null}
				}
			},
			hero_2:{
				currentCategory:null,
				defaultCategory:"category_6",
				categories:{
					category_6:{
						currentSubcategory:null,
						defaultSubcategory:"subcategory_1",
						subcategories:{
							subcategory_1:{
								skin_0:{rewarded:false},
								skin_1:{rewarded:false}
							},
							subcategory_2:{
								eyes_0:{rewarded:false},
								eyes_1:{rewarded:false},
								eyes_2:{rewarded:false},
								eyes_3:{rewarded:false},
								eyes_4:{rewarded:false},
								eyes_5:{rewarded:false},
								eyes_6:{rewarded:false},
								eyes_7:{rewarded:false},
								eyes_8:{rewarded:false}
							},
							subcategory_3:{
								mouth_0:{rewarded:false},
								mouth_1:{rewarded:false},
								mouth_2:{rewarded:false},
								mouth_3:{rewarded:false},
								mouth_4:{rewarded:false},
								mouth_5:{rewarded:false},
								mouth_6:{rewarded:false},
								mouth_7:{rewarded:false},
								mouth_8:{rewarded:false}
							}
						}
					},
					category_7:{
						currentSubcategory:null,
						defaultSubcategory:"subcategory_1",
						subcategories:{
							subcategory_1:{
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
								hair_10:{rewarded:false},
								hair_11:{rewarded:false},
								hair_12:{rewarded:false}
							}
						}
					},
					category_8:{
						currentSubcategory:null,
						defaultSubcategory:"subcategory_1",
						subcategories:{
							subcategory_1:{
								top_0:{rewarded:false},
								top_1:{rewarded:false},
								top_2:{rewarded:false},
								top_3:{rewarded:false},
								top_4:{rewarded:false},
								top_5:{rewarded:false},
								top_6:{rewarded:false},
								top_7:{rewarded:false},
								top_8:{rewarded:false}
							},
							subcategory_2:{
								bottom_0:{rewarded:false},
								bottom_1:{rewarded:false},
								bottom_2:{rewarded:false},
								bottom_3:{rewarded:false},
								bottom_4:{rewarded:false},
								bottom_5:{rewarded:false},
								bottom_6:{rewarded:false},
								bottom_7:{rewarded:false},
								bottom_8:{rewarded:false}
							},
							subcategory_3:{
								dress_0:{rewarded:false},
								dress_1:{rewarded:false},
								dress_2:{rewarded:false},
								dress_3:{rewarded:false},
								dress_4:{rewarded:false},
								dress_5:{rewarded:false},
								dress_6:{rewarded:false},
								dress_7:{rewarded:false},
								dress_8:{rewarded:false}
							},
							subcategory_4:{
								shoes_0:{rewarded:false},
								shoes_1:{rewarded:false},
								shoes_2:{rewarded:false},
								shoes_3:{rewarded:false},
								shoes_4:{rewarded:false},
								shoes_5:{rewarded:false},
								shoes_6:{rewarded:false},
								shoes_7:{rewarded:false},
								shoes_8:{rewarded:false}
							}
						}
					},
					category_9:{
						currentSubcategory:null,
						defaultSubcategory:"subcategory_1",
						subcategories:{
							subcategory_1:{
								headdress_0:{rewarded:false},
								headdress_1:{rewarded:false},
								headdress_2:{rewarded:false},
								headdress_3:{rewarded:false},
								headdress_4:{rewarded:false}
							},
							subcategory_2:{
								accessory_0:{rewarded:false},
								accessory_1:{rewarded:false},
								accessory_2:{rewarded:false},
								accessory_3:{rewarded:false},
								accessory_4:{rewarded:false},
								accessory_5:{rewarded:false},
								accessory_6:{rewarded:false},
								accessory_7:{rewarded:false},
								accessory_8:{rewarded:false}
							},
							subcategory_3:{
								jewelry_0:{rewarded:false},
								jewelry_1:{rewarded:false},
								jewelry_2:{rewarded:false},
								jewelry_3:{rewarded:false},
								jewelry_4:{rewarded:false}
							}
						}
					},
					category_10:{
						currentSubcategory:null,
						defaultSubcategory:"subcategory_1",
						subcategories:{
							subcategory_1:{
								bg_0:{rewarded:false},
								bg_1:{rewarded:false},
								bg_2:{rewarded:false},
								bg_3:{rewarded:false},
								bg_4:{rewarded:false},
								bg_5:{rewarded:false},
								bg_6:{rewarded:false},
								bg_7:{rewarded:false},
								bg_8:{rewarded:false}
							}
						}
					}
				},
				dress:{
					skin:{currentOption:null, currentColor:null, defaultOption:1, defaultColor:null, totalOptions:null},
					eyes:{currentOption:null, currentColor:null, defaultOption:1, defaultColor:null, totalOptions:null},
					mouth:{currentOption:null, currentColor:null, defaultOption:1, defaultColor:null, totalOptions:null},
					fringe:{currentOption:null, currentColor:null, defaultOption:1, defaultColor:null, totalOptions:null},
					hair:{currentOption:null, currentColor:null, defaultOption:1, defaultColor:null, totalOptions:null},
					top:{currentOption:null, currentColor:null, defaultOption:1, defaultColor:null, totalOptions:null},
					bottom:{currentOption:null, currentColor:null, defaultOption:1, defaultColor:null, totalOptions:null},
					dress:{currentOption:null, currentColor:null, defaultOption:0, defaultColor:null, totalOptions:null},
					shoes:{currentOption:null, currentColor:null, defaultOption:0, defaultColor:null, totalOptions:null},
					headdress:{currentOption:null, currentColor:null, defaultOption:0, defaultColor:null, totalOptions:null},
					accessory:{currentOption:null, currentColor:null, defaultOption:0, defaultColor:null, totalOptions:null},
					jewelry:{currentOption:null, currentColor:null, defaultOption:0, defaultColor:null, totalOptions:null},
					bg:{currentOption:null, currentColor:null, defaultOption:1, defaultColor:null, totalOptions:null}
				}
			}
		}
	};
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
		var userAgent_str = navigator.userAgent.toLowerCase();
		if(userAgent_str.indexOf("firefox") >= 0)
		{
			if(scale_num > 1)
			{
				scale_num = 1;
			}
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
		var currentScreen_mc = new lib.PreloaderScreen();
		_main.addChild(currentScreen_mc);
		currentScreen_mc.gotoAndStop(0);
		/*
		
		*/
		currentScreen_mc.play_mc.visible = false;
		/*
		
		*/
		currentScreen_mc.indicator_mc.gotoAndStop(0);
		currentScreen_mc.indicator_mc.mouseChildren = false;
		currentScreen_mc.indicator_mc.mouseEnabled = false;
		currentScreen_mc.indicator_mc.indicator_mc.loop = false;
		currentScreen_mc.indicator_mc.indicator_mc.gotoAndStop(0);
		/*
		
		*/
		currentScreen_mc.animation_mc.gotoAndPlay(0);
		currentScreen_mc.animation_mc.loop = false;
		currentScreen_mc.animation_mc.mouseChildren = true;
		currentScreen_mc.animation_mc.mouseEnabled = true;
		/*
		
		*/
		/*
		currentScreen_mc.animation_mc.logo_mc.gotoAndPlay(0);
		currentScreen_mc.animation_mc.logo_mc.mouseChildren = true;
		currentScreen_mc.animation_mc.logo_mc.mouseEnabled = true;
		currentScreen_mc.animation_mc.logo_mc.cursor = "pointer";
		currentScreen_mc.animation_mc.logo_mc.addEventListener("click", _onClickPreloaderBtnFunc, false);
		*/
		/*
		
		*/
		currentScreen_mc.bg_mc.gotoAndStop(0);
		currentScreen_mc.bg_mc.cache(-(_BGWIDTH - _CWIDTH) / 2, 0, _BGWIDTH, _CHEIGHT);
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
		loadQueue.loadFile({id:"tick_sound", src:"library/sounds/tick_sound.ogg"});
		loadQueue.loadFile({id:"photo_sound", src:"library/sounds/photo_sound.ogg"});
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
	function _onErrorLoadManifestFunc(event)
	{
		trace("Could not load: " + event.data.src + " !", 2);
	}
	function _onProgressLoadManifestFunc(event)
	{
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		currentScreen_mc.gotoAndStop(0);
		/*
		
		*/
		currentScreen_mc.indicator_mc.gotoAndStop(0);
		var totalFrames_num = currentScreen_mc.indicator_mc.indicator_mc.totalFrames;
		var currentFrame_num = Math.floor(totalFrames_num *  event.progress);
		if(currentFrame_num > totalFrames_num)
		{
			currentFrame_num = totalFrames_num;
		}
		else if(currentFrame_num < 0)
		{
			currentFrame_num = totalFrames_num;
		}
		currentScreen_mc.indicator_mc.indicator_mc.gotoAndStop(currentFrame_num);
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
		var currentScreen_mc = _main.getChildAt(0);
		/*
		
		*/
		var totalFrames_num = currentScreen_mc.animation_mc.totalFrames;
		var currentFrame_num = currentScreen_mc.animation_mc.currentFrame;
		if(currentFrame_num < totalFrames_num)
		{
			setTimeout(_onCompleteLoadAppFunc, ((totalFrames_num - currentFrame_num) / lib.properties.fps) * 1000);
		}
		else
		{
			_onCompleteLoadAppFunc();
		}
	}
	/*
	
	*/
	function _onCompleteLoadAppFunc()
	{
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		currentScreen_mc.gotoAndStop(0);
		/*
		
		*/
		createjs.Tween.get(currentScreen_mc.indicator_mc).wait(0).to({visible:false, alpha:0.01, scaleX:0.1, scaleY:0.1}, _DELAY * 1000, createjs.Ease.bounceInOut);
		/*
		
		*/
		currentScreen_mc.play_mc.alpha = 0.01;
		currentScreen_mc.play_mc.scaleX = 0.1;
		currentScreen_mc.play_mc.scaleY = 0.1;
		currentScreen_mc.play_mc.visible = true;
		currentScreen_mc.play_mc.cursor = "pointer";
		currentScreen_mc.play_mc.mouseChildren = false;
		currentScreen_mc.play_mc.mouseEnabled = true;
		currentScreen_mc.play_mc.addEventListener("click", _onClickPlayAppBtnFunc, false);
		createjs.Tween.get(currentScreen_mc.play_mc).wait(_DELAY * 1000).to({alpha:1, scaleX:1, scaleY:1}, _DELAY * 1000, createjs.Ease.bounceInOut);
		/*
		
		*/
		var bodyCursor_mc = new lib.Cursor();
		bodyCursor_mc.name = "body_mc";
		_cursor.addChild(bodyCursor_mc);
		_cursor.mouseChildren = false;
		_cursor.mouseEnabled = false;
	}
	/*
	
	*/
	function _onClickPlayAppBtnFunc(event)
	{
		/*
		
		*/
		_soundManager.addSoundFunc("background_sound", 0, 0, -1, 0.1, 0);
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
		_clearContainerFunc(_main);
		_clearContainerFunc(_before);
		/*
		
		*/
		var currentScreen_mc = new lib.WelcomeScreen();
		_main.addChild(currentScreen_mc);
		currentScreen_mc.gotoAndStop(0);
		/*
		
		*/
		currentScreen_mc.logo_btn.addEventListener("click", _onClickLogoBtnFunc, false);
		/*
		
		*/
		if(currentScreen_mc.credits_btn)
		{
			currentScreen_mc.credits_btn.addEventListener("click", _onClickCreditsBtnFunc, false);
		}
		/*
		
		*/
		if(currentScreen_mc.instruction_btn)
		{
			currentScreen_mc.instruction_btn.addEventListener("click", _onClickInstructionBtnFunc, false);
		}
		/*
		
		*/
		if(currentScreen_mc.moreGames_btn)
		{
			currentScreen_mc.moreGames_btn.addEventListener("click", _onClickMoreGamesBtnFunc, false);
		}
		/*
		
		*/
		if(currentScreen_mc.freeGames_mc)
		{
			currentScreen_mc.freeGames_mc.addEventListener("click", _onClickFreeGamesMcFunc, false);
		}
		/*
		
		*/
		currentScreen_mc.play_btn.addEventListener("click", _onClickPlayBtnFunc, false);
		/*
		
		*/
		if(currentScreen_mc.bg)
		{
			currentScreen_mc.bg.cache(-(_BGWIDTH - _CWIDTH) / 2, 0, _BGWIDTH, _CHEIGHT);
		}
		/*
		
		*/
		_soundManager.updateSoundMcFunc(currentScreen_mc);
		/*
		
		*/
		_fullScreenCanvasManager.updateFullScreenMcFunc(currentScreen_mc);
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
		
		*/
		_addAdsFunc();
		/*
		
		*/
		_animationTransitionBetweenScenesFunc(_constructorFunc, 0, 1, null, true);
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
		_information.currentHero = _information.defaultHero;
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
		for(var propHeroes in _information.heroes)
		{
			if(_information.heroes.hasOwnProperty(propHeroes))
			{
				/*
				
				*/
				_information.heroes[propHeroes].currentCategory = _information.heroes[propHeroes].defaultCategory;
				/*
				
				*/
				for(var propCategories in _information.heroes[propHeroes].categories)
				{
					if(_information.heroes[propHeroes].categories.hasOwnProperty(propCategories))
					{
						/*
						
						*/
						_information.heroes[propHeroes].categories[propCategories].currentSubcategory = _information.heroes[propHeroes].categories[propCategories].defaultSubcategory;
						/*
						
						*/
						for(var propSubcategories in _information.heroes[propHeroes].categories[propCategories].subcategories)
						{
							if(_information.heroes[propHeroes].categories[propCategories].subcategories.hasOwnProperty(propSubcategories))
							{
								
							}
						}
					}
				}
			}
		}
		/*
		
		*/
		_resetDressesFunc();
	}
	function _resetDressesFunc()
	{
		for(var propHeroes in _information.heroes)
		{
			if(_information.heroes.hasOwnProperty(propHeroes))
			{
				for(var propDress in _information.heroes[propHeroes].dress)
				{
					if(_information.heroes[propHeroes].dress.hasOwnProperty(propDress))
					{
						_information.heroes[propHeroes].dress[propDress].currentOption = _information.heroes[propHeroes].dress[propDress].defaultOption;
						_information.heroes[propHeroes].dress[propDress].currentColor = _information.heroes[propHeroes].dress[propDress].defaultColor;
					}
				}
			}
		}
	}
	/*
	==============================================================================================================
	Constructor Screen
	==============================================================================================================
	*/
	function _constructorFunc()
	{
		/*
		
		*/
		_clearContainerFunc(_main);
		_clearContainerFunc(_before);
		/*
		
		*/
		var currentScreen_mc = new lib.ConstructorScreen();
		_main.addChild(currentScreen_mc);
		currentScreen_mc.gotoAndStop(0);
		/*
		
		*/
		currentScreen_mc.logo_btn.addEventListener("click", _onClickLogoBtnFunc, false);
		/*
		
		*/
		if(currentScreen_mc.help_mc)
		{
			if(_information.firstRun)
			{
				currentScreen_mc.removeChild(currentScreen_mc.help_mc);
			}
			else
			{
				_information.firstRun = true;
				currentScreen_mc.help_mc.addEventListener("click", _onClickHelpMCFunc, false);
			}
		}
		/*
		
		*/
		if(currentScreen_mc.moreGames_btn)
		{
			currentScreen_mc.moreGames_btn.alpha = 0.01;
			createjs.Tween.get(currentScreen_mc.moreGames_btn).wait(_DELAY * 1.0 * 1000).to({alpha:1}, _DELAY * 1000, createjs.Ease.cubicInOut);
			currentScreen_mc.moreGames_btn.addEventListener("click", _onClickMoreGamesBtnFunc, false);
		}
		/*
		
		*/
		if(currentScreen_mc.done_btn)
		{
			/*
			currentScreen_mc.done_btn.alpha = 0.01;
			createjs.Tween.get(currentScreen_mc.done_btn).wait(_DELAY * 1.0 * 1000).to({alpha:1}, _DELAY * 1000, createjs.Ease.cubicInOut);
			currentScreen_mc.done_btn.addEventListener("click", _onClickDoneBtnConstructorFunc, false);
			*/
			currentScreen_mc.done_btn.visible = false;
			currentScreen_mc.done_btn.addEventListener("click", _onClickDoneBtnConstructorFunc, false);
		}
		/*
		
		*/
		if(currentScreen_mc.reset_btn)
		{
			currentScreen_mc.reset_btn.alpha = 0.01;
			createjs.Tween.get(currentScreen_mc.reset_btn).wait(_DELAY * 2.0 * 1000).to({alpha:1}, _DELAY * 1000, createjs.Ease.cubicInOut);
			currentScreen_mc.reset_btn.addEventListener("click", _onClickResetBtnConstructorFunc, false);
		}
		/*
		
		*/
		if(currentScreen_mc.random_btn)
		{
			currentScreen_mc.random_btn.alpha = 0.01;
			createjs.Tween.get(currentScreen_mc.random_btn).wait(_DELAY * 2.5 * 1000).to({alpha:1}, _DELAY * 1000, createjs.Ease.cubicInOut);
			currentScreen_mc.random_btn.addEventListener("click", _onClickRandomBtnConstructorFunc, false);
		}
		/*
		
		*/
		_updateDataAboutHeroesConstructorFunc();
		/*
		
		*/
		if(currentScreen_mc.next_hero_mc)
		{
			currentScreen_mc.next_hero_mc.gotoAndStop(0);
			currentScreen_mc.next_hero_mc.mouseEnabled = true;
			currentScreen_mc.next_hero_mc.mouseChildren = false;
			currentScreen_mc.next_hero_mc.cursor = "pointer";
			currentScreen_mc.next_hero_mc.addEventListener("click", _onClickNextHeroConstructorFunc, false);
			if(currentScreen_mc.prev_hero_mc)
			{
				currentScreen_mc.prev_hero_mc.gotoAndStop(0);
				currentScreen_mc.prev_hero_mc.mouseEnabled = true;
				currentScreen_mc.prev_hero_mc.mouseChildren = false;
				currentScreen_mc.prev_hero_mc.cursor = "pointer";
				currentScreen_mc.prev_hero_mc.addEventListener("click", _onClickPrevHeroConstructorFunc, false);
			}
			_updateVisibilityHeroesConstructorFunc();
		}
		else
		{
			_updateSelectHeroConstructorFunc();
		}
		/*
		
		*/
		currentScreen_mc.panels_mc.gotoAndStop(0);
		_updateMenuConstructorFunc();
		/*
		
		*/
		_updateOptionsConstructorFunc();
		/*
		
		*/
		_updateHeroesFunc(currentScreen_mc);
		/*
		исключение
		*/
		if(currentScreen_mc.podium_mc)
		{
			currentScreen_mc.podium_mc.gotoAndStop(0);
			new Edapskov_Evaporation(_before, currentScreen_mc.podium_mc, ["#ffffff"], 6, 10, true);
		}
		/*
		
		*/
		_soundManager.updateSoundMcFunc(currentScreen_mc);
		/*
		
		*/
		_fullScreenCanvasManager.updateFullScreenMcFunc(currentScreen_mc);
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
	function _updateDataAboutHeroesConstructorFunc()
	{
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		var hero_mc;
		var option_mc;
		/*
		
		*/
		_information.indexListHeroes_uint = 0;
		_information.listHeroes_arr = new Array();
		/*
		
		*/
		for(var propHeroes in _information.heroes)
		{
			/*
			
			*/
			_information.listHeroes_arr.push(propHeroes);
			/*
			
			*/
			if(_information.heroes.hasOwnProperty(propHeroes))
			{
				if(currentScreen_mc[propHeroes])
				{
					/*
					
					*/
					hero_mc = currentScreen_mc[propHeroes];
					hero_mc.gotoAndStop(0);
					/*
					
					*/
					for(var propDress in _information.heroes[propHeroes].dress)
					{
						if(_information.heroes[propHeroes].dress.hasOwnProperty(propDress))
						{
							if(propDress == "bg")
							{
								if(hero_mc.parent[propDress])
								{
									/*
									
									*/
									option_mc = hero_mc.parent[propDress];
									option_mc.gotoAndStop(0);
									/*
									
									*/
									_information.heroes[propHeroes].dress[propDress].totalOptions = option_mc.totalFrames;
								}
							}
							else
							{
								if(hero_mc[propDress])
								{
									/*
									
									*/
									option_mc = hero_mc[propDress];
									option_mc.gotoAndStop(0);
									/*
									
									*/
									_information.heroes[propHeroes].dress[propDress].totalOptions = option_mc.totalFrames;
								}
							}
						}
					}
				}
			}
		}
	}
	/*
	
	*/
	function _onClickNextHeroConstructorFunc(event)
	{
		/*
		
		*/
		//_addAdsFunc();
		/*
		
		*/
		var currentTarget_mc = event.currentTarget;
		/*
		
		*/
		var point_obj = currentTarget_mc.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("tick_sound", 0, 0, 0, 0.2, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		_information.indexListHeroes_uint = _information.indexListHeroes_uint + 1;
		if(_information.indexListHeroes_uint >= _information.listHeroes_arr.length)
		{
			_information.indexListHeroes_uint = 0;
		}
		_information.currentHero = String(_information.listHeroes_arr[_information.indexListHeroes_uint]);
		/*
		
		*/
		_updateVisibilityHeroesConstructorFunc();
		/*
		
		*/
		_updateMenuConstructorFunc();
		/*
		
		*/
		_updateOptionsConstructorFunc();
	}
	function _onClickPrevHeroConstructorFunc(event)
	{
		/*
		
		*/
		//_addAdsFunc();
		/*
		
		*/
		var currentTarget_mc = event.currentTarget;
		/*
		
		*/
		var point_obj = currentTarget_mc.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("tick_sound", 0, 0, 0, 0.2, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		_information.indexListHeroes_uint = _information.indexListHeroes_uint - 1;
		if(_information.indexListHeroes_uint < 0)
		{
			_information.indexListHeroes_uint = Number(_information.listHeroes_arr.length - 1);
		}
		_information.currentHero = String(_information.listHeroes_arr[_information.indexListHeroes_uint]);
		/*
		
		*/
		_updateVisibilityHeroesConstructorFunc();
		/*
		
		*/
		_updateMenuConstructorFunc();
		/*
		
		*/
		_updateOptionsConstructorFunc();
	}
	function _updateVisibilityHeroesConstructorFunc()
	{
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		var hero_mc;
		/*
		
		*/
		var l = _information.listHeroes_arr.length;
		var i = 0;
		/*
		
		*/
		while(i < l)
		{
			/*
			
			*/
			if(currentScreen_mc[_information.listHeroes_arr[i]])
			{
				/*
				
				*/
				hero_mc = currentScreen_mc[_information.listHeroes_arr[i]];
				/*
				
				*/
				if(i == _information.indexListHeroes_uint)
				{
					hero_mc.visible = true;
				}
				else
				{
					hero_mc.visible = false;
				}
			}
			/*
			
			*/
			i++;
		}
	}
	/*
	
	*/
	function _updateSelectHeroConstructorFunc()
	{
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		var hero_mc;
		/*
		
		*/
		for(var propHeroes in _information.heroes)
		{
			if(_information.heroes.hasOwnProperty(propHeroes))
			{
				if(currentScreen_mc[propHeroes])
				{
					/*
					
					*/
					hero_mc = currentScreen_mc[propHeroes];
					hero_mc.gotoAndStop(0);
					hero_mc.name = propHeroes;
					/*
					
					*/
					if(propHeroes == _information.currentHero)
					{
						hero_mc.mouseEnabled = true;
						hero_mc.mouseChildren = false;
						hero_mc.cursor = "default";
						hero_mc.removeEventListener("click", _onClickHeroConstructorFunc, false);
					}
					else
					{
						hero_mc.mouseEnabled = true;
						hero_mc.mouseChildren = false;
						hero_mc.cursor = "pointer";
						hero_mc.addEventListener("click", _onClickHeroConstructorFunc, false);
					}
				}
			}
		}
	}
	function _onClickHeroConstructorFunc(event)
	{
		/*
		
		*/
		//_addAdsFunc();
		/*
		
		*/
		var currentTarget_mc = event.currentTarget;
		/*
		
		*/
		var point_obj = currentTarget_mc.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("tick_sound", 0, 0, 0, 0.2, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		_information.currentHero = String(currentTarget_mc.name);
		/*
		
		*/
		_updateSelectHeroConstructorFunc();
		/*
		
		*/
		_updateMenuConstructorFunc();
		/*
		
		*/
		_updateOptionsConstructorFunc();
	}
	/*
	
	*/
	function _updateMenuConstructorFunc()
	{
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		var panels_mc = currentScreen_mc.panels_mc;
		var currentFrame_num;
		var panel_mc;
		var navigation_mc;
		var category_mc;
		var temp_arr;
		var subcategory_str;
		var subcategory_mc;
		var temp_mc;
		/*
		
		*/
		panels_mc.gotoAndStop(_information.currentHero + "_" + _information.heroes[_information.currentHero].currentCategory + "_" + _information.heroes[_information.currentHero].categories[_information.heroes[_information.currentHero].currentCategory].currentSubcategory);
		/*
		
		*/
		for(var propCategories in _information.heroes[_information.currentHero].categories)
		{
			if(_information.heroes[_information.currentHero].categories.hasOwnProperty(propCategories))
			{
				if(panels_mc[propCategories])
				{
					/*
					
					*/
					category_mc = panels_mc[propCategories];
					category_mc.gotoAndStop(0);
					category_mc.name = propCategories;
					/*
					
					*/
					if(propCategories != _information.heroes[_information.currentHero].currentCategory)
					{
						/*
						
						*/
						//category_mc.alpha = 1;
						category_mc.mouseChildren = false;
						category_mc.mouseEnabled = true;
						category_mc.cursor = "pointer";
						category_mc.addEventListener("click", _onClickCategoryConstructorFunc, false);
						category_mc.addEventListener("mouseover", _onMouseOverObjectMcConstructorFunc, false);
						category_mc.addEventListener("mouseout", _onMouseOutObjectMcConstructorFunc, false);
						/*
						
						*/
						if(category_mc["check_mc"])
						{
							temp_mc = category_mc["check_mc"];
							temp_mc.gotoAndStop(0);
						}
						else
						{
							//category_mc.alpha = 1;
						}
						/*
						
						*/
						if(category_mc["substrate_mc"])
						{
							temp_mc = category_mc["substrate_mc"];
							temp_mc.gotoAndStop(0);
						}
					}
					else
					{
						/*
						
						*/
						//category_mc.alpha = 0.4;
						category_mc.mouseChildren = false;
						category_mc.mouseEnabled = false;
						category_mc.cursor = "default";
						category_mc.removeEventListener("click", _onClickCategoryConstructorFunc, false);
						category_mc.removeEventListener("mouseover", _onMouseOverObjectMcConstructorFunc, false);
						category_mc.removeEventListener("mouseout", _onMouseOutObjectMcConstructorFunc, false);
						/*
						
						*/
						if(category_mc["check_mc"])
						{
							temp_mc = category_mc["check_mc"];
							temp_mc.gotoAndStop(0);
							temp_mc.gotoAndStop(1);
						}
						else
						{
							//category_mc.alpha = 0.4;
						}
						/*
						
						*/
						if(category_mc["substrate_mc"])
						{
							temp_mc = category_mc["substrate_mc"];
							temp_mc.gotoAndStop(0);
							temp_mc.gotoAndStop(1);
						}
					}
				}
				else
				{
					//trace("The object is not found: " + category_mc + " !")
				}
				/*
				
				*/
				temp_arr = propCategories.split("_");
				/*
				
				*/
				for(var propSubcategories in _information.heroes[_information.currentHero].categories[_information.heroes[_information.currentHero].currentCategory].subcategories)
				{
					if(_information.heroes[_information.currentHero].categories[_information.heroes[_information.currentHero].currentCategory].subcategories.hasOwnProperty(propSubcategories))
					{
						/*
						
						*/
						subcategory_str = propSubcategories + "_" + temp_arr[1];
						/*
						
						*/
						if(panels_mc[subcategory_str])
						{
							/*
							
							*/
							subcategory_mc = panels_mc[subcategory_str];
							subcategory_mc.gotoAndStop(0);
							subcategory_mc.name = subcategory_str;
							/*
							
							*/
							if(propSubcategories != _information.heroes[_information.currentHero].categories[_information.heroes[_information.currentHero].currentCategory].currentSubcategory)
							{
								/*
								
								*/
								//subcategory_mc.alpha = 1;
								subcategory_mc.mouseChildren = false;
								subcategory_mc.mouseEnabled = true;
								subcategory_mc.cursor = "pointer";
								subcategory_mc.addEventListener("click", _onClickSubcategoryConstructorFunc, false);
								subcategory_mc.addEventListener("mouseover", _onMouseOverObjectMcConstructorFunc, false);
								subcategory_mc.addEventListener("mouseout", _onMouseOutObjectMcConstructorFunc, false);
								/*
								
								*/
								if(subcategory_mc["check_mc"])
								{
									temp_mc = subcategory_mc["check_mc"];
									temp_mc.gotoAndStop(0);
								}
								else
								{
									//subcategory_mc.alpha = 1;
								}
								/*
								
								*/
								if(subcategory_mc["substrate_mc"])
								{
									temp_mc = subcategory_mc["substrate_mc"];
									temp_mc.gotoAndStop(0);
								}
							}
							else
							{
								/*
								
								*/
								//subcategory_mc.alpha = 0.4;
								subcategory_mc.mouseChildren = false;
								subcategory_mc.mouseEnabled = false;
								subcategory_mc.cursor = "default";
								subcategory_mc.removeEventListener("click", _onClickSubcategoryConstructorFunc, false);
								subcategory_mc.removeEventListener("mouseover", _onMouseOverObjectMcConstructorFunc, false);
								subcategory_mc.removeEventListener("mouseout", _onMouseOutObjectMcConstructorFunc, false);
								/*
								
								*/
								if(subcategory_mc["check_mc"])
								{
									temp_mc = subcategory_mc["check_mc"];
									temp_mc.gotoAndStop(0);
									temp_mc.gotoAndStop(1);
								}
								else
								{
									//subcategory_mc.alpha = 0.4;
								}
								/*
								
								*/
								if(subcategory_mc["substrate_mc"])
								{
									temp_mc = subcategory_mc["substrate_mc"];
									temp_mc.gotoAndStop(0);
									temp_mc.gotoAndStop(1);
								}
							}
						}
						else
						{
							//trace("The object is not found: " + propSubcategories + " !")
						}
					}
				}
			}
			/*
			
			*/
			currentFrame_num = panels_mc.currentFrame + 1;
			/*
			
			*/
			if(panels_mc["panel_" + currentFrame_num])
			{
				/*
				
				*/
				panel_mc = panels_mc["panel_" + currentFrame_num];
				panel_mc.gotoAndStop(_information.currentPage - 1);
				/*
				
				*/
				if(panel_mc["navigation_mc"])
				{
					/*
					
					*/
					navigation_mc = panel_mc["navigation_mc"];
					navigation_mc.gotoAndStop(0);
					/*
					
					*/
					if(panel_mc.totalFrames > 1)
					{
						/*
						
						*/
						navigation_mc.visible = true;
						/*
						
						*/
						navigation_mc.title_mc.gotoAndStop(0);
						navigation_mc.title_mc.mouseChildren = false;
						navigation_mc.title_mc.mouseEnabled = false;
						navigation_mc.title_mc.currentPage_mc.gotoAndStop(Number(panel_mc.currentFrame + 1));
						navigation_mc.title_mc.totalPages_mc.gotoAndStop(Number(panel_mc.totalFrames));
						/*
						
						*/
						navigation_mc.prev_mc.gotoAndStop(0);
						navigation_mc.prev_mc.mouseChildren = false;
						navigation_mc.prev_mc.mouseEnabled = true;
						navigation_mc.prev_mc.cursor = "pointer";
						navigation_mc.prev_mc.addEventListener("click", _onClickPrevPageConstructorFunc, false);
						navigation_mc.prev_mc.addEventListener("mouseover", _onMouseOverObjectMcConstructorFunc, false);
						navigation_mc.prev_mc.addEventListener("mouseout", _onMouseOutObjectMcConstructorFunc, false);
						/*
						
						*/
						navigation_mc.next_mc.gotoAndStop(0);
						navigation_mc.next_mc.mouseChildren = false;
						navigation_mc.next_mc.mouseEnabled = true;
						navigation_mc.next_mc.cursor = "pointer";
						navigation_mc.next_mc.addEventListener("click", _onClickNextPageConstructorFunc, false);
						navigation_mc.next_mc.addEventListener("mouseover", _onMouseOverObjectMcConstructorFunc, false);
						navigation_mc.next_mc.addEventListener("mouseout", _onMouseOutObjectMcConstructorFunc, false);
					}
					else
					{
						navigation_mc.visible = false;
					}
				}
			}
		}
	}
	/*
	
	*/
	function _updateOptionsConstructorFunc()
	{
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		var panels_mc = currentScreen_mc.panels_mc;
		var currentFrame_num;
		var panel_mc;
		var object_mc;
		var subobject_mc;
		var target_str;
		var dress_obj = new Object();
		/*
		
		*/
		currentFrame_num = panels_mc.currentFrame + 1;
		/*
		
		*/
		if(panels_mc["panel_" + currentFrame_num])
		{
			/*
			
			*/
			panel_mc = panels_mc["panel_" + currentFrame_num];
			/*
			
			*/
			for(var propOptions in _information.heroes[_information.currentHero].categories[_information.heroes[_information.currentHero].currentCategory].subcategories[_information.heroes[_information.currentHero].categories[_information.heroes[_information.currentHero].currentCategory].currentSubcategory])
			{
				if(_information.heroes[_information.currentHero].categories[_information.heroes[_information.currentHero].currentCategory].subcategories[_information.heroes[_information.currentHero].categories[_information.heroes[_information.currentHero].currentCategory].currentSubcategory].hasOwnProperty(propOptions))
				{
					/*
					
					*/
					target_str = propOptions.split("_")[0];
					if(_information.heroes[_information.currentHero].dress.hasOwnProperty(target_str))
					{
						if(!dress_obj.hasOwnProperty(target_str))
						{
							dress_obj[target_str] = {currentColor:_information.heroes[_information.currentHero].dress[target_str].currentColor};
						}
					}
					/*
							
					*/
					target_str = target_str + "_" + _information.heroes[_information.currentHero].dress[target_str].currentOption;
					/*
					
					*/
					if(panel_mc[propOptions])
					{
						/*
						
						*/
						object_mc = panel_mc[propOptions];
						object_mc.gotoAndStop(0);
						object_mc.name = propOptions;
						/*
						Rewarded ads
						*/
						if(object_mc.rewards_mc)
						{
							object_mc.rewards_mc.gotoAndStop(0);
							if(_information.heroes[_information.currentHero].categories[_information.heroes[_information.currentHero].currentCategory].subcategories[_information.heroes[_information.currentHero].categories[_information.heroes[_information.currentHero].currentCategory].currentSubcategory][propOptions].rewarded)
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
						if(propOptions != target_str)
						{
							/*
							
							*/
							//object_mc.alpha = 1;
							object_mc.mouseChildren = false;
							object_mc.mouseEnabled = true;
							object_mc.cursor = "pointer";
							object_mc.addEventListener("click", _onClickOptionsConstructorFunc, false);
							object_mc.addEventListener("mouseover", _onMouseOverObjectMcConstructorFunc, false);
							object_mc.addEventListener("mouseout", _onMouseOutObjectMcConstructorFunc, false);
							/*
									
							*/
							if(object_mc["check_mc"])
							{
								subobject_mc = object_mc["check_mc"];
								subobject_mc.gotoAndStop(0);
								subobject_mc.gotoAndStop(1);
							}
							else
							{
								//object_mc.alpha = 1;
							}
							/*
									
							*/
							if(object_mc["substrate_mc"])
							{
								subobject_mc = object_mc["substrate_mc"];
								subobject_mc.gotoAndStop(0);
							}
						}
						else
						{
							/*
							
							*/
							//object_mc.alpha = 0.4;
							object_mc.mouseChildren = false;
							object_mc.mouseEnabled = true;
							object_mc.cursor = "default";
							object_mc.removeEventListener("click", _onClickOptionsConstructorFunc, false);
							object_mc.removeEventListener("mouseover", _onMouseOverObjectMcConstructorFunc, false);
							object_mc.removeEventListener("mouseout", _onMouseOutObjectMcConstructorFunc, false);
							/*
									
							*/
							if(object_mc["check_mc"])
							{
								subobject_mc = object_mc["check_mc"];
								subobject_mc.gotoAndStop(0);
							}
							else
							{
								//object_mc.alpha = 0.4;
							}
							/*
									
							*/
							if(object_mc["substrate_mc"])
							{
								subobject_mc = object_mc["substrate_mc"];
								subobject_mc.gotoAndStop(0);
								subobject_mc.gotoAndStop(1);
							}
						}
					}
					else
					{
						//trace("The object is not found: " + propOptions + " !")
					}
					
				}
			}
			/*
			
			*/
			for(var propDress in dress_obj)
			{
				if(dress_obj.hasOwnProperty(propDress))
				{
					if(panel_mc["color_" + propDress])
					{
						object_mc = panel_mc["color_" + propDress];
						object_mc.gotoAndStop(0);
						object_mc.name = "color_" + propDress;
						object_mc.mouseChildren = false;
						object_mc.mouseEnabled = true;
						object_mc.cursor = "pointer";
						object_mc.addEventListener("click", _onClickColorPickerConstructorFunc, false);
					}
				}
			}
		}
		else
		{
			//trace("The object is not found: panel_mc !")
		}
	}
	/*
	
	*/
	function _onClickCategoryConstructorFunc(event)
	{
		/*
		
		*/
		//_addAdsFunc();
		/*
		
		*/
		_information.currentPage = 1;
		/*
		
		*/
		var category_mc = event.currentTarget;
		/*
		
		*/
		var point_obj = category_mc.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("tick_sound", 0, 0, 0, 0.2, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		_information.heroes[_information.currentHero].currentCategory = String(category_mc.name);
		/*
		
		*/
		_updateMenuConstructorFunc();
		/*
		
		*/
		_updateOptionsConstructorFunc();
	}
	/*
	
	*/
	function _onClickSubcategoryConstructorFunc(event)
	{
		/*
		
		*/
		_information.currentPage = 1;
		/*
		
		*/
		var subcategory_mc = event.currentTarget;
		var subcategory_str = subcategory_mc.name;
		var temp_arr = subcategory_str.split("_");
		subcategory_str = temp_arr[0] + "_" + temp_arr[1];
		/*
		
		*/
		var point_obj = subcategory_mc.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("tick_sound", 0, 0, 0, 0.2, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		_information.heroes[_information.currentHero].categories[_information.heroes[_information.currentHero].currentCategory].currentSubcategory = subcategory_str;
		/*
		
		*/
		_updateMenuConstructorFunc();
		/*
		
		*/
		_updateOptionsConstructorFunc();
	}
	/*
	
	*/
	function _onClickOptionsConstructorFunc(event)
	{
		/*
		
		*/
		var currentTarget_mc = event.currentTarget;
		var currentTarget_str = currentTarget_mc.name;
		/*
		
		*/
		var point_obj = currentTarget_mc.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("tick_sound", 0, 0, 0, 0.2, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		if(_information.heroes[_information.currentHero].categories[_information.heroes[_information.currentHero].currentCategory].subcategories[_information.heroes[_information.currentHero].categories[_information.heroes[_information.currentHero].currentCategory].currentSubcategory][currentTarget_str].rewarded)
		{
			/*
			Rewarded ads
			*/
			_information.rewardHero = _information.currentHero;
			_information.rewardObject = currentTarget_str;
			/*
			
			*/
			if (typeof gdsdk !== 'undefined' && gdsdk.showAd !== 'undefined')
			{
				gdsdk.showAd('rewarded');
			}
			else
			{
				this.showAntiBlockingAdsFunc();
			}
		}
		else
		{
			_changeOptionsConstructorFunc(_information.currentHero, currentTarget_str);
		}
	}
	function _changeOptionsConstructorFunc(hero_str, object_str)
	{
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		var temp_arr = object_str.split("_");
		var option_str = String(temp_arr[0]);
		var option_num = Number(temp_arr[1]);
		/*
		
		*/
		_information.heroes[hero_str].dress[option_str].currentOption = option_num;
		/*
		
		*/
		if(option_str == "bg")
		{
			_updateBgConstructorFunc();
		}
		else
		{
			/*
			исключения
			*/
			if(option_str == "top")
			{
				if(option_num > 0)
				{
					if(_information.heroes[hero_str].dress.hasOwnProperty("dress"))
					{
						_information.heroes[hero_str].dress.dress.currentOption = 0;
					}
					if(_information.heroes[hero_str].dress.hasOwnProperty("bottom"))
					{
						if(_information.heroes[hero_str].dress.bottom.currentOption <= 0)
						{
							_information.heroes[hero_str].dress.bottom.currentOption = 1;
						}
					}
				}
				else
				{
					if(_information.heroes[hero_str].dress.hasOwnProperty("dress"))
					{
						_information.heroes[hero_str].dress.dress.currentOption = 1;
					}
					if(_information.heroes[hero_str].dress.hasOwnProperty("bottom"))
					{
						_information.heroes[hero_str].dress.bottom.currentOption = 0;
					}
				}
			}
			if(option_str == "bottom")
			{
				if(option_num > 0)
				{
					if(_information.heroes[hero_str].dress.hasOwnProperty("dress"))
					{
						_information.heroes[hero_str].dress.dress.currentOption = 0;
					}
					if(_information.heroes[hero_str].dress.hasOwnProperty("top"))
					{
						if(_information.heroes[hero_str].dress.top.currentOption <= 0)
						{
							_information.heroes[hero_str].dress.top.currentOption = 1;
						}
					}
				}
				else
				{
					if(_information.heroes[hero_str].dress.hasOwnProperty("dress"))
					{
						_information.heroes[hero_str].dress.dress.currentOption = 1;
					}
					if(_information.heroes[hero_str].dress.hasOwnProperty("top"))
					{
						_information.heroes[hero_str].dress.top.currentOption = 0;
					}
				}
			}
			if(option_str == "dress")
			{
				if(option_num > 0)
				{
					if(_information.heroes[hero_str].dress.hasOwnProperty("top"))
					{
						_information.heroes[hero_str].dress.top.currentOption = 0;
					}
					if(_information.heroes[hero_str].dress.hasOwnProperty("bottom"))
					{
						_information.heroes[hero_str].dress.bottom.currentOption = 0;
					}
				}
				else
				{
					if(_information.heroes[hero_str].dress.hasOwnProperty("top"))
					{
						_information.heroes[hero_str].dress.top.currentOption = 1;
					}
					if(_information.heroes[hero_str].dress.hasOwnProperty("bottom"))
					{
						_information.heroes[hero_str].dress.bottom.currentOption = 1;
					}
				}
			}
		}
		/*
		
		*/
		_updateOptionsConstructorFunc();
		/*
		
		*/
		_updateHeroesFunc(currentScreen_mc);
		/*
		
		*/
		_unblockDoneBtnConstructorFunc();
	}
	function _updateBgConstructorFunc()
	{
		for(var prop in _information.heroes)
		{
			if(_information.heroes.hasOwnProperty(prop))
			{
				if(prop != _information.currentHero)
				{
					if(_information.heroes[_information.currentHero].dress.hasOwnProperty("bg"))
					{
						_information.heroes[prop].dress.bg.currentOption = _information.heroes[_information.currentHero].dress.bg.currentOption;
					}
				}
			}
		}
	}
	/*
	
	*/
	function _onClickColorPickerConstructorFunc(event)
	{
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		var colorPicker_mc = event.currentTarget;
		var current_str = String(colorPicker_mc.name.split("_")[1]);
		/*
		
		*/
		var colorPicker_img = colorPicker_mc.getChildAt(0);
		var clone_img = colorPicker_img.clone();
		var bounds_rect = clone_img.getBounds();
		clone_img.cache(bounds_rect.x, bounds_rect.y, bounds_rect.width, bounds_rect.height);
		var bitmapdata = createjs.BitmapData.getBitmapData(clone_img);
		/*
		
		*/
		if(_information.heroes[_information.currentHero].dress.hasOwnProperty(current_str))
		{
			/*
			
			*/
			_information.heroes[_information.currentHero].dress[current_str].currentColor = bitmapdata.getPixel(event.localX, event.localY);
			/*
			
			*/
			var point_obj = colorPicker_mc.localToLocal(event.localX, event.localY, _stage);
			_soundManager.addSoundFunc("tick_sound", 0, 0, 0, 0.2, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
			/*
			
			*/
			_updateHeroesFunc(currentScreen_mc);
			/*
			
			*/
			_unblockDoneBtnConstructorFunc();
		}
	}
	/*
	
	*/
	function _onClickPrevPageConstructorFunc(event)
	{
		/*
		
		*/
		var object_mc = event.currentTarget;
		var panel_mc = object_mc.parent.parent;
		var totalFrames_num = panel_mc.totalFrames;
		/*
		
		*/
		var point_obj = object_mc.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("tick_sound", 0, 0, 0, 0.2, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		_information.currentPage--;
		if(_information.currentPage < 1)
		{
			_information.currentPage = totalFrames_num;
		}
		/*
		
		*/
		_updateMenuConstructorFunc();
		/*
		
		*/
		_updateOptionsConstructorFunc();
	}
	function _onClickNextPageConstructorFunc(event)
	{
		/*
		
		*/
		var object_mc = event.currentTarget;
		var panel_mc = object_mc.parent.parent;
		var totalFrames_num = panel_mc.totalFrames;
		/*
		
		*/
		var point_obj = object_mc.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("tick_sound", 0, 0, 0, 0.2, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		_information.currentPage++;
		if(_information.currentPage > totalFrames_num)
		{
			_information.currentPage = 1;
		}
		/*
		
		*/
		_updateMenuConstructorFunc();
		/*
		
		*/
		_updateOptionsConstructorFunc();
	}
	/*
	
	*/
	function _onMouseOverObjectMcConstructorFunc(event)
	{
		var currentTarget_mc = event.currentTarget;
	}
	function _onMouseOutObjectMcConstructorFunc(event)
	{
		var currentTarget_mc = event.currentTarget;
	}
	/*
	
	*/
	function _updateHeroesFunc(container_mc)
	{
		/*
		
		*/
		var hero_str;
		var hero_mc;
		var frame_num;
		var option_mc;
		/*
		
		*/
		for(var propHeroes in _information.heroes)
		{
			if(_information.heroes.hasOwnProperty(propHeroes))
			{
				/*
				
				*/
				hero_str = String(propHeroes + "_" + Number(container_mc.currentFrame + 1));
				/*
				
				*/
				if(container_mc[propHeroes] || container_mc[hero_str])
				{
					/*
					
					*/
					if(container_mc[propHeroes])
					{
						hero_mc = container_mc[propHeroes];
						hero_mc.gotoAndStop(0);
					}
					/*
					
					*/
					if(container_mc[hero_str])
					{
						hero_mc = container_mc[hero_str];
						hero_mc.gotoAndStop(0);
					}
					/*
					
					*/
					for(var propOption in _information.heroes[propHeroes].dress)
					{
						if(_information.heroes[propHeroes].dress.hasOwnProperty(propOption))
						{
							/*
							
							*/
							frame_num = _information.heroes[propHeroes].dress[propOption].currentOption;
							/*
							
							*/
							if(propOption == "bg")
							{
								if(hero_mc.parent)
								{
									if(hero_mc.parent[propOption])
									{
										/*
										
										*/
										option_mc = hero_mc.parent[propOption];
										/*
										
										*/
										option_mc.gotoAndStop(frame_num - 1);
										/*
										
										*/
										_updateBodyFunc(option_mc, _information.heroes[propHeroes].dress[propOption].currentColor);
									}
									else
									{
										//trace("The object is not found: " + propOption + " in " + propHeroes + " !")
									}
								}
								else
								{
									//trace("The parent is not available!")
								}
							}
							else
							{
								if(hero_mc[propOption])
								{
									/*
									
									*/
									option_mc = hero_mc[propOption];
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
									_updateBodyFunc(option_mc, _information.heroes[propHeroes].dress[propOption].currentColor);
									/*
									
									*/
									if(propOption == "headdress")
									{
										if(hero_mc.headdressSecond)
										{
											/*
											
											*/
											hero_mc.headdressSecond.gotoAndStop(frame_num - 1);
											/*
											
											*/
											_updateBodyFunc(hero_mc.headdressSecond, _information.heroes[propHeroes].dress[propOption].currentColor);
										}
									}
								}
								else
								{
									//trace("The object is not found: " + propOption + " in " + propHeroes + " !")
								}
							}
						}
					}
				}
				else
				{
					//trace("The object is not found: " + propHeroes + " !")
				}
			}
		}
	}
	function _updateBodyFunc(option_mc, color_num)
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
		/*
		
		*/
		var container_mc;
		var color_mc;
		/*
		
		*/
		if(option_mc["body_" + (option_mc.currentFrame + 1)])
		{
			/*
			
			*/
			container_mc = option_mc["body_" + (option_mc.currentFrame + 1)];
			container_mc.gotoAndStop(0);
			/*
			
			*/
			if(color_num != null)
			{
				if(container_mc["body_mc"])
				{
					/*
					
					*/
					color_mc = container_mc["body_mc"];
					color_mc.gotoAndStop(0);
					/*
					
					*/
					_colouringFunc(color_mc, color_num);
				}
			}
		}
	}
	/*
	
	*/
	function _unblockDoneBtnConstructorFunc()
	{
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		/*
		
		*/
		if(!currentScreen_mc.done_btn.visible)
		{
			currentScreen_mc.done_btn.visible = true;
			currentScreen_mc.done_btn.alpha = 0.01;
			createjs.Tween.get(currentScreen_mc.done_btn).wait(0).to({alpha:1}, _DELAY * 1000, createjs.Ease.cubicInOut);
		}
	}
	function _onClickDoneBtnConstructorFunc(event)
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
		currentTarget_mc.removeEventListener("click", _onClickDoneBtnConstructorFunc, false);
		/*
		
		*/
		_addAdsFunc();
		/*
		
		*/
		_animationTransitionBetweenScenesFunc(_resultFunc, 0, 1, null, true);
	}
	/*
	
	*/
	function _onClickResetBtnConstructorFunc(event)
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
		var currentScreen_mc = _main.getChildAt(0);
		/*
		
		*/
		_resetDressesFunc();
		/*
		
		*/
		_updateOptionsConstructorFunc();
		/*
		
		*/
		_updateHeroesFunc(currentScreen_mc);
		/*
		
		*/
		/*
		var gravityExplosion_mc = new lib.GravityExplosionMC();
		_before.addChild(gravityExplosion_mc);
		gravityExplosion_mc.gotoAndStop(0);
		point_obj = currentTarget_mc.localToLocal(event.localX, event.localY, _before);
		gravityExplosion_mc.x = point_obj.x;
		gravityExplosion_mc.y = point_obj.y;
		*/
	}
	/*
	
	*/
	function _onClickRandomBtnConstructorFunc(event)
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
		var currentScreen_mc = _main.getChildAt(0);
		/*
		
		*/
		for(var propHeroes in _information.heroes)
		{
			if(_information.heroes.hasOwnProperty(propHeroes))
			{
				for(var propDress in _information.heroes[propHeroes].dress)
				{
					if(_information.heroes[propHeroes].dress.hasOwnProperty(propDress))
					{
						_information.heroes[propHeroes].dress[propDress].currentOption = Math.floor(Math.random() * _information.heroes[propHeroes].dress[propDress].totalOptions);
						/*
						исключение
						*/
						if(propDress != "skin")
						{
							_information.heroes[propHeroes].dress[propDress].currentColor = Math.floor(Math.random() * 16777215);
						}
					}
				}
			}
		}
		/*
		исключения
		*/
		/*
		for(var propHeroes in _information.heroes)
		{
			if(_information.heroes.hasOwnProperty(propHeroes))
			{
				if(_information.heroes[propHeroes].dress.top.currentOption <= 0 || _information.heroes[propHeroes].dress.top.currentOption >= _information.heroes[propHeroes].dress.top.totalOptions)
				{
					_information.heroes[propHeroes].dress.top.currentOption = 0;
					_information.heroes[propHeroes].dress.bottom.currentOption = 0;
					if(_information.heroes[propHeroes].dress.dress.currentOption <= 0 || _information.heroes[propHeroes].dress.dress.currentOption >= _information.heroes[propHeroes].dress.dress.totalOptions)
					{
						_information.heroes[propHeroes].dress.dress.currentOption = 1;
					}
				}
				else
				{
					if(_information.heroes[propHeroes].dress.bottom.currentOption <= 0 || _information.heroes[propHeroes].dress.bottom.currentOption >= _information.heroes[propHeroes].dress.bottom.totalOptions)
					{
						_information.heroes[propHeroes].dress.bottom.currentOption = 1;
					}
					_information.heroes[propHeroes].dress.dress.currentOption = 0;
				}
			}
		}
		*/
		/*
		
		*/
		_unblockDoneBtnConstructorFunc();
		/*
		
		*/
		_updateMenuConstructorFunc();
		/*
		
		*/
		_updateOptionsConstructorFunc();
		/*
		
		*/
		_updateHeroesFunc(currentScreen_mc);
		/*
		
		*/
		/*
		var gravityExplosion_mc = new lib.GravityExplosionMC();
		_before.addChild(gravityExplosion_mc);
		gravityExplosion_mc.gotoAndStop(0);
		point_obj = currentTarget_mc.localToLocal(event.localX, event.localY, _before);
		gravityExplosion_mc.x = point_obj.x;
		gravityExplosion_mc.y = point_obj.y;
		*/
	}
	/*
	
	*/
	function _colouringFunc(displayObject, color_num)
	{
		/*
		
		*/
		if(color_num === undefined)
		{
			color_num = null;
		}
		/*
		
		*/
		var bounds_rect;
		var redColor_num;
		var greenColor_num;
		var blueColor_num;
		/*
		
		*/
		if(displayObject.visible)
		{
			/*
			
			*/
			bounds_rect = displayObject.getBounds();
			/*
			
			*/
			if(color_num === null)
			{
				displayObject.filters = [];
			}
			else
			{
				redColor_num = (color_num >>> 16) & 0xff;
				greenColor_num = (color_num >>>  8) & 0xff;
				blueColor_num = color_num & 0xff;
				displayObject.filters = [new createjs.ColorFilter(0, 0, 0, 1, redColor_num, greenColor_num, blueColor_num, 0)];
			}
			/*
			
			*/
			if(displayObject.bitmapCache)
			{
				displayObject.updateCache();
			}
			else
			{
				displayObject.cache(bounds_rect.x, bounds_rect.y, bounds_rect.width, bounds_rect.height);
			}
		}
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
		var currentScreen_mc = new lib.RedirectScreen();
		_before.addChild(currentScreen_mc);
		currentScreen_mc.gotoAndStop(0);
		currentScreen_mc.body_mc.gotoAndStop(0);
		/*
		
		*/
		if(currentScreen_mc.body_mc.playRedirect_btn)
		{
			currentScreen_mc.body_mc.playRedirect_btn.addEventListener("click", _onClickPlayRedirectBtnFunc, false);
		}
		/*
		
		*/
		if(currentScreen_mc.body_mc.cancelRedirect_btn)
		{
			currentScreen_mc.body_mc.cancelRedirect_btn.addEventListener("click", _onClickCancelRedirectBtnFunc, false);
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
		window.open("https://dressupwho.net/html5/Monster-Girls-Summer-Vacation" + "?utm_source=" + _getLocationFunc() + "&utm_medium=game_referral|game&utm_content=simple&utm_campaign=" + _TITLE, "_self");
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
		_clearContainerFunc(_main);
		_clearContainerFunc(_before);
		/*
		
		*/
		var currentScreen_mc = new lib.ResultScreen();
		_main.addChild(currentScreen_mc);
		currentScreen_mc.gotoAndStop(0);
		currentScreen_mc.addEventListener("click", _onClickResultScreenFunc, false);
		/*
		
		*/
		currentScreen_mc.logo_btn.addEventListener("click", _onClickLogoBtnFunc, false);
		/*
		
		*/
		currentScreen_mc.photoContainer_mc.gotoAndStop(0);
		currentScreen_mc.photoContainer_mc.logo_btn.visible = false;
		/*
		
		*/
		if(currentScreen_mc.facebook_btn)
		{
			currentScreen_mc.facebook_btn.addEventListener("click", _onClickFacebookBtnFunc, false);
		}
		/*
		
		*/
		if(currentScreen_mc.moreGames_btn)
		{
			currentScreen_mc.moreGames_btn.addEventListener("click", _onClickMoreGamesBtnFunc, false);
		}
		/*
		
		*/
		if(currentScreen_mc.banner_1_mc)
		{
			currentScreen_mc.banner_1_mc.cursor = "pointer";
			currentScreen_mc.banner_1_mc.addEventListener("click", _onClickBannerMcFunc_1, false);
		}
		if(currentScreen_mc.banner_2_mc)
		{
			currentScreen_mc.banner_2_mc.cursor = "pointer";
			currentScreen_mc.banner_2_mc.addEventListener("click", _onClickBannerMcFunc_2, false);
		}
		/*
		
		*/
		if(currentScreen_mc.freeGames_mc)
		{
			currentScreen_mc.freeGames_mc.cursor = "pointer";
			currentScreen_mc.freeGames_mc.addEventListener("click", _onClickFreeGamesMcFunc, false);
		}
		/*
		
		*/
		if(currentScreen_mc.photo_btn)
		{
			currentScreen_mc.photo_btn.addEventListener("click", _onClickPhotoBtnFunc, false);
		}
		/*
		
		*/
		currentScreen_mc.playAgain_btn.addEventListener("click", _onClickPlayBtnFunc, false);
		/*
		
		*/
		_updateHeroesFunc(currentScreen_mc.photoContainer_mc);
		/*
		
		*/
		if(currentScreen_mc.prev_mc)
		{
			currentScreen_mc.prev_mc.mouseEnabled = true;
			currentScreen_mc.prev_mc.mouseChildren = false;
			currentScreen_mc.prev_mc.cursor = "pointer";
			currentScreen_mc.prev_mc.addEventListener("mouseover", _onMouseOverNavigationMcBackgroundsFunc, false);
			currentScreen_mc.prev_mc.addEventListener("mouseout", _onMouseOutNavigationMcBackgroundsFunc, false);
			currentScreen_mc.prev_mc.addEventListener("click", _onClickPrevNavigationMcBackgroundsFunc, false);
		}
		if(currentScreen_mc.next_mc)
		{
			currentScreen_mc.next_mc.mouseEnabled = true;
			currentScreen_mc.next_mc.mouseChildren = false;
			currentScreen_mc.next_mc.cursor = "pointer";
			currentScreen_mc.next_mc.addEventListener("mouseover", _onMouseOverNavigationMcBackgroundsFunc, false);
			currentScreen_mc.next_mc.addEventListener("mouseout", _onMouseOutNavigationMcBackgroundsFunc, false);
			currentScreen_mc.next_mc.addEventListener("click", _onClickNextNavigationMcBackgroundsFunc, false);
		}
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
		/*
		
		*/
		if(currentScreen_mc.photoContainer_mc.bg)
		{
			currentScreen_mc.photoContainer_mc.bg.cache(-(_BGWIDTH - _CWIDTH) / 2, 0, _BGWIDTH, _CHEIGHT);
		}
		/*
		
		*/
		_soundManager.updateSoundMcFunc(currentScreen_mc);
		/*
		
		*/
		_fullScreenCanvasManager.updateFullScreenMcFunc(currentScreen_mc);
		/*
		
		*/
		_cursorUpdateFunc();
	}
	/*
	
	*/
	function _onClickResultScreenFunc(event)
	{
		//trace(event);
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
		var currentTarget_mc = event.currentTarget;
		/*
		
		*/
		var point_obj = currentTarget_mc.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		var totalFrames_num = currentScreen_mc.photoContainer_mc.totalFrames;
		var currentFrame_num = currentScreen_mc.photoContainer_mc.currentFrame + 1;
		currentFrame_num--;
		if(currentFrame_num <= 0)
		{
			currentFrame_num = totalFrames_num;
		}
		/*
		
		*/
		currentScreen_mc.photoContainer_mc.gotoAndStop(Number(currentFrame_num - 1));
		/*
		
		*/
		_updateHeroesFunc(currentScreen_mc.photoContainer_mc);
	}
	function _onClickNextNavigationMcBackgroundsFunc(event)
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
		var currentScreen_mc = _main.getChildAt(0);
		var totalFrames_num = currentScreen_mc.photoContainer_mc.totalFrames;
		var currentFrame_num = currentScreen_mc.photoContainer_mc.currentFrame + 1;
		currentFrame_num++;
		if(currentFrame_num > totalFrames_num)
		{
			currentFrame_num = 1;
		}
		/*
		
		*/
		currentScreen_mc.photoContainer_mc.gotoAndStop(Number(currentFrame_num - 1));
		/*
		
		*/
		_updateHeroesFunc(currentScreen_mc.photoContainer_mc);
	}
	/*
	
	*/
	function _onClickPhotoBtnFunc(event)
	{
		/*
		
		*/
		_soundManager.addSoundFunc("photo_sound", 0, 0, 0, 1, 0);
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		/*
		
		*/
		_updateVisibleDisplayObjectFunc(currentScreen_mc, false);
		currentScreen_mc.photoContainer_mc.visible = true;
		currentScreen_mc.photoContainer_mc.logo_btn.visible = true;
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
			currentScreen_mc.photoContainer_mc.logo_btn.visible = false;
			_updateVisibleDisplayObjectFunc(currentScreen_mc);
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
		var currentScreen_mc = _main.getChildAt(0);
		photoContainer_mc.gotoAndStop(currentScreen_mc.photoContainer_mc.currentFrame);
		_updateHeroesFunc(photoContainer_mc);
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
			visible_bool = Number(visible_bool);
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
		var currentScreen_mc = new lib.CopyrightScreen();
		_before.addChild(currentScreen_mc);
		currentScreen_mc.gotoAndStop(0);
		/*
		
		*/
		currentScreen_mc.cursor = "pointer";
		currentScreen_mc.addEventListener("click", _onClickCopyrightScreenFunc, false);
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
			var currentScreen_mc = new lib[nameScreen_str]();
			_before.addChild(currentScreen_mc);
			currentScreen_mc.gotoAndStop(0);
			/*
			
			*/
			if(currentScreen_mc.screen_mc)
			{
				currentScreen_mc.screen_mc.addEventListener("click", _onClickScreenMcSimpleScreenFunc, false);
			}
			/*
			
			*/
			if(currentScreen_mc.remove_btn)
			{
				currentScreen_mc.remove_btn.addEventListener("click", _onClickRemoveBtnSimpleScreenFunc, false);
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
	
	*/
	function _clearContainerFunc(container)
	{
		container.removeAllChildren();
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
	
	*/
	function _stopAppFunc()
	{
		/*
		
		*/
		//createjs.Ticker.removeEventListener("tick", _onTickFunc, false);
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
		
		*/
		//createjs.Ticker.addEventListener("tick", _onTickFunc, false);
		/*
		
		*/
		_soundManager.setInvisibleFunc(false);
		/*
		
		*/
		trace("Application is running!", 1)
	}
	/*
	
	*/
	function _addAdsFunc()
	{
		if (typeof sdk !== 'undefined' && sdk.showBanner !== 'undefined')
		{
			trace("Commercial break!")
			sdk.showBanner();
		}
	}
	this.showRewardFunc = function()
	{
		_changeOptionsConstructorFunc(_information.rewardHero, _information.rewardObject);
	}
	this.showAntiBlockingAdsFunc = function()
	{
		_simpleScreenFunc("AntiBlockingAdsScreen");
	}
	/*
	
	*/
	function _getLocationFunc()
	{
		var url_str = (window.location != window.parent.location) ? document.referrer: document.location.host;
		return url_str;
	}
	function _getSimplifiedTitleGameFunc()
	{
		var title_str = _TITLE.replace(/[^a-z0-9\-_ ]/gi, "");
		return title_str.toLowerCase().replace(/ +/g, "-");
	}
	function _onClickPreloaderBtnFunc(event)
	{
		window.open(_LINKTOGAME + "?utm_source=" + _getLocationFunc() + "&utm_medium=game_referral|preloader&utm_content=simple&utm_campaign=" + _getSimplifiedTitleGameFunc(), "_blank");
	}
	function _onClickLogoBtnFunc(event)
	{
		window.open(_LINKTOGAME + "?utm_source=" + _getLocationFunc() + "&utm_medium=game_referral|logo&utm_content=simple&utm_campaign=" + _getSimplifiedTitleGameFunc(), "_blank");
	}
	function _onClickBannerMcFunc_1(event)
	{
		window.open("https://www.dressupwho.com" + "?utm_source=" + _getLocationFunc() + "&utm_medium=game_referral|game&utm_content=simple&utm_campaign=" + _TITLE, "_blank");
	}
	function _onClickBannerMcFunc_2(event)
	{
		window.open("https://www.dressupwho.com" + "?utm_source=" + _getLocationFunc() + "&utm_medium=game_referral|game&utm_content=simple&utm_campaign=" + _getSimplifiedTitleGameFunc(), "_blank");
	}
	function _onClickFreeGamesMcFunc(event)
	{
		window.open(_LINKTOGAME + "?utm_source=" + _getLocationFunc() + "&utm_medium=game_referral|game&utm_content=simple&utm_campaign=" + _getSimplifiedTitleGameFunc(), "_blank");
	}
	function _onClickFacebookBtnFunc(event)
	{
		window.open(_LINKTOFACEBOOK + "?utm_source=" + _getLocationFunc() + "&utm_medium=game_referral|game&utm_content=simple&utm_campaign=" + _getSimplifiedTitleGameFunc(), "_blank");
	}
	function _onClickMoreGamesBtnFunc(event)
	{
		window.open(_LINKTOGAME + "?utm_source=" + _getLocationFunc() + "&utm_medium=game_referral|game&utm_content=simple&utm_campaign=" + _getSimplifiedTitleGameFunc(), "_blank");
	}
	/*
	ссылочка на разработчиков
	*/
	function _onClickCopyrightMenuItemFunc(event)
	{
		window.open("http://dlstudio.edapskov.ru", '_blank');
	}
}