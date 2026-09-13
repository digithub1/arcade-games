var game = {
	var : {},

	object : {},

	level : {},

	state : {},

	util : {},

	collisionTypes : me.collision.types,

	onload : function () {
		// Initialize the video.
		if (!me.video.init(1080, 2340, {wrapper : "screen", scale : "auto", scaleMethod: "fit" , antiAlias: true, doubleBuffering: false, subpixel: false, transparent: false, powerPreference: 'default'})) {
			alert("Your browser does not support HTML5 canvas.");
			return;
		}
		me.audio.init("mp3,ogg");

		// set and load all resources.
		// (this will also automatically switch to the loading screen)
		me.loader.preload(game.resources, this.loaded.bind(this));
	},

	// Run on game resources loaded.
	loaded : function () {
		game.state.Gallery = "Gallery";
		me.state.set("Gallery", new game.level.Gallery());
		game.state.Gameplay = "Gameplay";
		me.state.set("Gameplay", new game.level.Gameplay());
		game.state.LoadLevel = "LoadLevel";
		me.state.set("LoadLevel", new game.level.LoadLevel());
		game.state.MainMenu = "MainMenu";
		me.state.set("MainMenu", new game.level.MainMenu());
		game.state.temp = "temp";
		me.state.set("temp", new game.level.temp());

		me.pool.register('adsWarning', game.object.adsWarning);
		me.pool.register('BannerContainer', game.object.BannerContainer);
		me.pool.register('BtnAds', game.object.BtnAds);
		me.pool.register('BtnAnswer', game.object.BtnAnswer);
		me.pool.register('BtnHighlight', game.object.BtnHighlight);
		me.pool.register('BtnHomeIngame', game.object.BtnHomeIngame);
		me.pool.register('BtnRestart', game.object.BtnRestart);
		me.pool.register('HighScore', game.object.HighScore);
		me.pool.register('HintBoard', game.object.HintBoard);
		me.pool.register('ScoreFrame', game.object.ScoreFrame);
		me.pool.register('TimerBase', game.object.TimerBase);
		me.pool.register('TimerGreen', game.object.TimerGreen);
		me.pool.register('WinFrame', game.object.WinFrame);
		me.pool.register('BtnPauseContinue', game.object.BtnPauseContinue);
		me.pool.register('BtnPauseHome', game.object.BtnPauseHome);
		me.pool.register('BtnPauseRestart', game.object.BtnPauseRestart);
		me.pool.register('PauseContainer', game.object.PauseContainer);
		me.pool.register('PauseIcon', game.object.PauseIcon);
		me.pool.register('PausePanel', game.object.PausePanel);
		me.pool.register('BtnBGM', game.object.BtnBGM);
		me.pool.register('BtnSFX', game.object.BtnSFX);
		me.pool.register('HomeBtn', game.object.HomeBtn);
		me.pool.register('SettingContainer', game.object.SettingContainer);
		me.pool.register('SettingOverlay', game.object.SettingOverlay);
		me.pool.register('SettingPanel', game.object.SettingPanel);
		me.pool.register('BGMSprite', game.object.BGMSprite);
		me.pool.register('BG_MainMenu', game.object.BG_MainMenu);
		me.pool.register('BtnGallery', game.object.BtnGallery);
		me.pool.register('BtnSettings', game.object.BtnSettings);
		me.pool.register('BtnStart', game.object.BtnStart);
		me.pool.register('BG_Ingame', game.object.BG_Ingame);
		me.pool.register('BG_MainMenu', game.object.BG_MainMenu);
		me.pool.register('Food', game.object.Food);
		me.pool.register('GalleryButton', game.object.GalleryButton);
		me.pool.register('galleryClose', game.object.galleryClose);
		me.pool.register('GalleryContainer', game.object.GalleryContainer);
		me.pool.register('HintCounter', game.object.HintCounter);
		me.pool.register('NamePlate', game.object.NamePlate);
		me.pool.register('Plate', game.object.Plate);
		me.pool.register('Scenery', game.object.Scenery);

		game.textureMap = new Map();
		game.textureMap.set("Food", new me.video.renderer.Texture([
			me.loader.getJSON("texture_Food_0"),
			me.loader.getJSON("texture_Food_1")
		], undefined, false));

		game.textureMap.set("UI", new me.video.renderer.Texture([
			me.loader.getJSON("texture_UI_0"),
			me.loader.getJSON("texture_UI_1"),
			me.loader.getJSON("texture_UI_2")
		], undefined, false));

		game.imageLocation = {
			"arialBlack": "Font",
			"loja": "Font",
			"rockford": "Font",
			"ayam geprek": "Food",
			"bakso": "Food",
			"beef wellington": "Food",
			"blue star": "Food",
			"bubur ayam": "Food",
			"burger": "Food",
			"Burgers": "Food",
			"burrito": "Food",
			"capucinno": "Food",
			"chicken thigh": "Food",
			"choc shouffle": "Food",
			"coffee": "Food",
			"cola": "Food",
			"cordon bleu": "Food",
			"egg benedict": "Food",
			"eggs": "Food",
			"es campur": "Food",
			"fish n chips": "Food",
			"fish": "Food",
			"gado gado": "Food",
			"glazed duck": "Food",
			"greenpea salmon": "Food",
			"grilled lobster": "Food",
			"gudeg": "Food",
			"hot chocolate": "Food",
			"ice cofeee": "Food",
			"juice watermelon": "Food",
			"kerak telor": "Food",
			"ketupat sayur": "Food",
			"Kiwi Slush": "Food",
			"klepon": "Food",
			"kue bendera": "Food",
			"kue lumpur": "Food",
			"lamb shank": "Food",
			"Lemon Meringue": "Food",
			"lemonade": "Food",
			"lumpia": "Food",
			"mango slushie": "Food",
			"martabak": "Food",
			"martini": "Food",
			"mi goreng": "Food",
			"mie ayam": "Food",
			"mochalatte": "Food",
			"nasi ayam": "Food",
			"nasi goreng": "Food",
			"nasi jinggo": "Food",
			"onde onde": "Food",
			"orange slush": "Food",
			"panna cotta": "Food",
			"pecel lele": "Food",
			"pepes ikan": "Food",
			"pie": "Food",
			"pina colada": "Food",
			"pizza": "Food",
			"rawon": "Food",
			"rendang": "Food",
			"rotiserie": "Food",
			"salad": "Food",
			"Salmon sushi": "Food",
			"sambel open": "Food",
			"sambel tutup": "Food",
			"Sandwich": "Food",
			"sate": "Food",
			"sausage": "Food",
			"sayur asem": "Food",
			"seared scallop": "Food",
			"serabi notosuman": "Food",
			"Shrimp sushi": "Food",
			"soto": "Food",
			"spaghetti meatballs": "Food",
			"steak": "Food",
			"strawberry champange": "Food",
			"stuffed calamari": "Food",
			"summer squash": "Food",
			"sushi": "Food",
			"tacos": "Food",
			"tahu gejrot": "Food",
			"Tamago sushi": "Food",
			"tea": "Food",
			"tempe": "Food",
			"tiramisu": "Food",
			"tom yum": "Food",
			"tumpeng": "Food",
			"Tuna sushi": "Food",
			"tuna2": "Food",
			"veggie juice": "Food",
			"ads-button": "UI",
			"Ads_box": "UI",
			"bg_a": "UI",
			"bg_b": "UI",
			"bg_c": "UI",
			"bg_home": "UI",
			"board_tips": "UI",
			"button_close": "UI",
			"button_ency": "UI",
			"button_home 2": "UI",
			"button_home": "UI",
			"button_left": "UI",
			"button_pause": "UI",
			"button_replay": "UI",
			"button_right": "UI",
			"button_settings": "UI",
			"button_start 2": "UI",
			"button_start": "UI",
			"button_text_continue": "UI",
			"button_text_continue_h": "UI",
			"button_text_home": "UI",
			"button_text_home_h": "UI",
			"button_text_replay": "UI",
			"button_text_replay_h": "UI",
			"food_name": "UI",
			"frame_option": "UI",
			"frame_pause": "UI",
			"frame_score": "UI",
			"frame_win": "UI",
			"high score": "UI",
			"Letter_A": "UI",
			"Letter_B": "UI",
			"Letter_C": "UI",
			"letter_correct": "UI",
			"Letter_D": "UI",
			"letter_select": "UI",
			"letter_wrong": "UI",
			"music_off": "UI",
			"music_off_h": "UI",
			"music_on": "UI",
			"music_on_h": "UI",
			"nampan": "UI",
			"overlayBlack": "UI",
			"plate": "UI",
			"radio_0": "UI",
			"radio_5": "UI",
			"radio_a": "UI",
			"radio_b": "UI",
			"scenery_a": "UI",
			"sound_off": "UI",
			"sound_off_h": "UI",
			"sound_on": "UI",
			"sound_on_h": "UI",
			"timer_base": "UI",
			"timer_top": "UI",
		};


		game.util.__populateAtlasIndices = function(animationKeys, settings){
			let tpAtlas = [], indices = {},
				width = 0, height = 0,
				texture = game.textureMap.get(settings.texture);
			for (let i = 0; i < animationKeys.length; i++) {
				let region = texture.getRegion(animationKeys[i]);
				if (region == null) {
					// throw an error
					throw new me.video.renderer.Texture.Error(
						"Texture - region for " + animationKeys[i] + " not found");
				}
				tpAtlas[i] = region;
				indices[animationKeys[i]] = i;
				width = Math.max(region.width, width);
				height = Math.max(region.height, height);
			}
			settings.framewidth = width;
			settings.frameheight = height;
			settings.atlas = tpAtlas;
			settings.atlasIndices = indices;
		}

		game.object.__spriteTP = me.Sprite.extend({
			init: function(x, y, settings = {}){
				settings.image = (settings.texture) ? game.textureMap.get(settings.texture) : settings.region;
				settings.anchorPoint = settings.anchorPoint || {
					x : 0.5,
					y: 0.5
				}
			this._super(me.Sprite, 'init', [x, y, settings]);

			this.alpha = 1;
			this.floating = false;
			this.alwaysUpdate = false;
			this.updateWhenPaused = false;
			this.isPersistent = false;

			this.imageName = settings.region;

			},
		});

		game.object.__collisionTP = me.Renderable.extend({
			init: function(x, y, settings = {}) {
				this._super(me.Renderable, 'init', [x, y, settings.width, settings.height]);

				var shape = settings.shapes;
				if (typeof shape === "undefined") {
					shape = me.pool.pull("Polygon", 0, 0, [
						me.pool.pull("Vector2d", 0,          0),
						me.pool.pull("Vector2d", this.width, 0),
						me.pool.pull("Vector2d", this.width, this.height)
					]);
				}
				this.anchorPoint.set(0, 0);
				this.name = settings.name;
				this.type = settings.type;
				// for backward compatibility
				this.class = settings.class || settings.type;
				this.id = settings.id;
				this.body = new me.Body(this, shape);
				this.resize(this.body.getBounds().width, this.body.getBounds().height);

				this.body.collisionType = me.collision.types.WORLD_SHAPE;

				// configure the body accordingly
				if(settings.collisionType != undefined) {
					this.body.collisionType = (game.collisionTypes[settings.collisionType]) ? game.collisionTypes[settings.collisionType] : me.collision.types[settings.collisionType];
				}
				// mark collision shapes as static
				this.body.isStatic = true;
			}
		});

        // Put user code here //
        
        //  End of user code  //
		me.pool.register('spriteTP', game.object.__spriteTP);
		me.pool.register('collisionTP', game.object.__collisionTP);
		me.state.change("LoadLevel");
	}
};
