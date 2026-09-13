import * as me from './dist/melonjs.module.js'

import game from './js/game.js'

import variableState from './js/script/variableState.js'
import gamePlayScene from './js/stage/gamePlayScene.js'
import menuScene from './js/stage/menuScene.js'
import tempRestartScene from './js/stage/tempRestartScene.js'
import gameOverBtnHome from './js/renderables/gameOverBtnHome.js'
import gameOverBtnRestart from './js/renderables/gameOverBtnRestart.js'
import gameOverCryChar from './js/renderables/gameOverCryChar.js'
import gameOverPanel from './js/renderables/gameOverPanel.js'
import gamePlayBtn from './js/renderables/gamePlayBtn.js'
import gamePlayCharAnim from './js/renderables/gamePlayCharAnim.js'
import gamePlayCharSpawner from './js/renderables/gamePlayCharSpawner.js'
import gamePlayEffSushiMatch from './js/renderables/gamePlayEffSushiMatch.js'
import gamePlayEffSushiRainbow from './js/renderables/gamePlayEffSushiRainbow.js'
import gamePlayPause from './js/renderables/gamePlayPause.js'
import gamePlayPauseBlackPanel from './js/renderables/gamePlayPauseBlackPanel.js'
import gamePlayPauseBtn from './js/renderables/gamePlayPauseBtn.js'
import gamePlayPauseBtnOnOff from './js/renderables/gamePlayPauseBtnOnOff.js'
import gamePlayPowerUp from './js/renderables/gamePlayPowerUp.js'
import gamePlayPowerUpCount from './js/renderables/gamePlayPowerUpCount.js'
import gamePlaySushi from './js/renderables/gamePlaySushi.js'
import gamePlaySushiSpawnerStage from './js/renderables/gamePlaySushiSpawnerStage.js'
import gamePlaySushiTarget from './js/renderables/gamePlaySushiTarget.js'
import gamePlaySushiTargetSpawner from './js/renderables/gamePlaySushiTargetSpawner.js'
import gamePlayTimer from './js/renderables/gamePlayTimer.js'
import layerParticleSakura from './js/renderables/layerParticleSakura.js'
import menuBlackLayer from './js/renderables/menuBlackLayer.js'
import menuBtnCredits from './js/renderables/menuBtnCredits.js'
import menuBtnPlay from './js/renderables/menuBtnPlay.js'
import menuBtnShop from './js/renderables/menuBtnShop.js'
import menuCharShopAnim from './js/renderables/menuCharShopAnim.js'
import menuCredits from './js/renderables/menuCredits.js'
import shopAds from './js/renderables/shopAds.js'
import shopAdsBtnClose from './js/renderables/shopAdsBtnClose.js'
import shopBannerBtn from './js/renderables/shopBannerBtn.js'
import shopBannerItem from './js/renderables/shopBannerItem.js'
import shopBannerNoAds from './js/renderables/shopBannerNoAds.js'
import shopBannerNoGold from './js/renderables/shopBannerNoGold.js'
import shopBannerText from './js/renderables/shopBannerText.js'
import shopBtn from './js/renderables/shopBtn.js'
import shopBtnBack from './js/renderables/shopBtnBack.js'
import shopUIMoney from './js/renderables/shopUIMoney.js'
import tuttorBtn from './js/renderables/tuttorBtn.js'
import tuttorImage from './js/renderables/tuttorImage.js'
import charBeauty from './js/renderables/charBeauty.js'
import charFox from './js/renderables/charFox.js'
import charNeko from './js/renderables/charNeko.js'


import DataManifest from './manifest.js'

/**
 *
 * Initialize the application
 */
export default function onload() {
	// initialize the display canvas once the device/browser is ready
	if (!me.video.init(1320, 760, {parent : "screen", renderer: me.video.WEBGL, scale : "auto", scaleMethod: "fit" , antiAlias: true, doubleBuffering: false, transparent: false, powerPreference: 'default'})) {
		alert("Your browser does not support HTML5 canvas.");
		return;
	}


	// Initialize the audio.
	me.audio.init("mp3,ogg");

	// allow cross-origin for image/texture loading
	me.loader.crossOrigin = "anonymous";

	import('./lib/plugins/debugPanel.js').then((plugin) => {
		me.utils.function.defer(me.plugin.register, this, plugin.debugPanel, "debugPanel");
	});


	// set and load all resources.
	me.loader.preload(DataManifest, async function() {
		me.state.gamePlayScene = "gamePlayScene";
		me.state.set(me.state.gamePlayScene, new gamePlayScene());
		me.state.menuScene = "menuScene";
		me.state.set(me.state.menuScene, new menuScene());
		me.state.tempRestartScene = "tempRestartScene";
		me.state.set(me.state.tempRestartScene, new tempRestartScene());

		me.pool.register('charBeauty', charBeauty);
		me.pool.register('charFox', charFox);
		me.pool.register('charNeko', charNeko);
		me.pool.register('gameOverBtnHome', gameOverBtnHome);
		me.pool.register('gameOverBtnRestart', gameOverBtnRestart);
		me.pool.register('gameOverCryChar', gameOverCryChar);
		me.pool.register('gameOverPanel', gameOverPanel);
		me.pool.register('gamePlayBtn', gamePlayBtn);
		me.pool.register('gamePlayCharAnim', gamePlayCharAnim);
		me.pool.register('gamePlayCharSpawner', gamePlayCharSpawner);
		me.pool.register('gamePlayEffSushiMatch', gamePlayEffSushiMatch);
		me.pool.register('gamePlayEffSushiRainbow', gamePlayEffSushiRainbow);
		me.pool.register('gamePlayPause', gamePlayPause);
		me.pool.register('gamePlayPauseBlackPanel', gamePlayPauseBlackPanel);
		me.pool.register('gamePlayPauseBtn', gamePlayPauseBtn);
		me.pool.register('gamePlayPauseBtnOnOff', gamePlayPauseBtnOnOff);
		me.pool.register('gamePlayPowerUp', gamePlayPowerUp);
		me.pool.register('gamePlayPowerUpCount', gamePlayPowerUpCount);
		me.pool.register('gamePlaySushi', gamePlaySushi);
		me.pool.register('gamePlaySushiSpawnerStage', gamePlaySushiSpawnerStage);
		me.pool.register('gamePlaySushiTarget', gamePlaySushiTarget);
		me.pool.register('gamePlaySushiTargetSpawner', gamePlaySushiTargetSpawner);
		me.pool.register('gamePlayTimer', gamePlayTimer);
		me.pool.register('layerParticleSakura', layerParticleSakura);
		me.pool.register('menuBlackLayer', menuBlackLayer);
		me.pool.register('menuBtnCredits', menuBtnCredits);
		me.pool.register('menuBtnPlay', menuBtnPlay);
		me.pool.register('menuBtnShop', menuBtnShop);
		me.pool.register('menuCharShopAnim', menuCharShopAnim);
		me.pool.register('menuCredits', menuCredits);
		me.pool.register('shopAds', shopAds);
		me.pool.register('shopAdsBtnClose', shopAdsBtnClose);
		me.pool.register('shopBannerBtn', shopBannerBtn);
		me.pool.register('shopBannerItem', shopBannerItem);
		me.pool.register('shopBannerNoAds', shopBannerNoAds);
		me.pool.register('shopBannerNoGold', shopBannerNoGold);
		me.pool.register('shopBannerText', shopBannerText);
		me.pool.register('shopBtn', shopBtn);
		me.pool.register('shopBtnBack', shopBtnBack);
		me.pool.register('shopUIMoney', shopUIMoney);
		me.pool.register('tuttorBtn', tuttorBtn);
		me.pool.register('tuttorImage', tuttorImage);

		game.textureMap = new Map();
		game.textureMap.set("effect", new me.video.renderer.Texture([
			me.loader.getJSON("texture_effect_0")
		], undefined, false));

		game.textureMap.set("gamePlay", new me.video.renderer.Texture([
			me.loader.getJSON("texture_gamePlay_0"),
			me.loader.getJSON("texture_gamePlay_1"),
			me.loader.getJSON("texture_gamePlay_2"),
			me.loader.getJSON("texture_gamePlay_3"),
			me.loader.getJSON("texture_gamePlay_4"),
			me.loader.getJSON("texture_gamePlay_5"),
			me.loader.getJSON("texture_gamePlay_6")
		], undefined, false));

		game.textureMap.set("menu", new me.video.renderer.Texture([
			me.loader.getJSON("texture_menu_0"),
			me.loader.getJSON("texture_menu_1"),
			me.loader.getJSON("texture_menu_2")
		], undefined, false));

		game.imageLocation = {
			"gamePlayEffMatchSushi_00": "effect",
			"gamePlayEffMatchSushi_01": "effect",
			"gamePlayEffMatchSushi_02": "effect",
			"gamePlayEffMatchSushi_03": "effect",
			"gamePlayEffMatchSushi_04": "effect",
			"gamePlayEffMatchSushi_05": "effect",
			"gamePlayEffMatchSushi_06": "effect",
			"gamePlayEffMatchSushi_07": "effect",
			"gamePlayEffMatchSushi_08": "effect",
			"gamePlayEffMatchSushi_09": "effect",
			"gamePlayEffMatchSushi_10": "effect",
			"gamePlayEffMatchSushi_11": "effect",
			"gamePlayEffMatchSushi_12": "effect",
			"gamePlayEffMatchSushi_13": "effect",
			"gamePlayEffMatchSushi_14": "effect",
			"gamePlayEffMatchSushi_15": "effect",
			"gamePlayEffMatchSushi_16": "effect",
			"gamePlayEffMatchSushi_17": "effect",
			"gamePlayEffMatchSushi_18": "effect",
			"gamePlayEffMatchSushi_19": "effect",
			"gamePlayEffRaibowSushi_00": "effect",
			"gamePlayEffRaibowSushi_01": "effect",
			"gamePlayEffRaibowSushi_02": "effect",
			"gamePlayEffRaibowSushi_03": "effect",
			"gamePlayEffRaibowSushi_04": "effect",
			"gamePlayEffRaibowSushi_05": "effect",
			"gamePlayEffRaibowSushi_06": "effect",
			"gamePlayEffRaibowSushi_07": "effect",
			"gamePlayEffRaibowSushi_08": "effect",
			"gamePlayEffRaibowSushi_09": "effect",
			"gamePlayEffRaibowSushi_10": "effect",
			"gamePlayEffRaibowSushi_11": "effect",
			"gamePlayEffRaibowSushi_12": "effect",
			"gamePlayEffRaibowSushi_13": "effect",
			"gamePlayEffRaibowSushi_14": "effect",
			"gamePlayEffRaibowSushi_15": "effect",
			"gamePlayEffRaibowSushi_16": "effect",
			"gamePlayEffRaibowSushi_17": "effect",
			"gamePlayEffRaibowSushi_18": "effect",
			"gamePlayEffRaibowSushi_19": "effect",
			"font-blue-kecil": "image",
			"gamePlay_background_00": "gamePlay",
			"gamePlay_background_01": "gamePlay",
			"gamePlay_background_02": "gamePlay",
			"gamePlay_meja_char": "gamePlay",
			"gamePlay_money": "gamePlay",
			"gamePlay_powerUp": "gamePlay",
			"gamePlay_powerUp_number": "gamePlay",
			"gamePlay_score": "gamePlay",
			"gamePlay_stagePlay": "gamePlay",
			"gamePlay_sushi_number": "gamePlay",
			"gamePlay_timeBar_00": "gamePlay",
			"gamePlay_timeBar_01": "gamePlay",
			"gamePlay_timeBar_02": "gamePlay",
			"menu-background": "menu",
			"menu-creditScreen": "menu",
			"sushiSekai_Ads": "menu",
			"tutorial-1": "menu",
			"tutorial-2": "menu",
			"tutorial-3": "menu",
			"tutorial-4": "menu",
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
		me.pool.register('spriteTP', __spriteTP);
		me.pool.register('collisionTP', __collisionTP);
		me.pool.register('Body2', Body2);
		me.state.change(me.state.menuScene);
	});

};

class __spriteTP extends me.Sprite {
	constructor(x, y, settings = {}) {
		settings.image = (settings.texture) ? game.textureMap.get(settings.texture) : settings.region;
		(settings.texture) ? settings.region = settings.region : "";
		settings.anchorPoint = settings.anchorPoint || {
			x : 0.5,
			y : 0.5
		}
		super(x, y, Object.assign(settings));

		this.alpha = 1;
		this.floating = false;
		this.alwaysUpdate = false;
		this.updateWhenPaused = false;
		this.isPersistent = false;

		this.imageName = settings.region;

	}
};


class __collisionTP extends me.Renderable {
	constructor(x, y, settings = {}) {
		super(x, y, settings.width, settings.height);

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
		this.body.setStatic(true);
		this.resize(this.body.getBounds().width, this.body.getBounds().height);

		this.body.collisionType = me.collision.types.WORLD_SHAPE;

		// configure the body accordingly
		if(settings.collisionType != undefined) {
			this.body.collisionType = (game.collisionTypes[settings.collisionType]) ? game.collisionTypes[settings.collisionType] : me.collision.types[settings.collisionType];
		}
		// mark collision shapes as static
		this.body.isStatic = true;
	}
};


class Body2 extends me.Body {
	bodyShapePos;

	constructor(ancestor, shapes, onBodyUpdate) {
		super(ancestor, shapes, onBodyUpdate);

		this.bodyShapePos = {x: (ancestor.anchorPoint.x * ancestor.width), y:(ancestor.anchorPoint.y * ancestor.height)}
	}
	addShape(shape) {
		var x = shape.pos.x;
		var y = shape.pos.y;

		shape.pos.x -= this.bodyShapePos.x;
		shape.pos.y -= this.bodyShapePos.y;
		super.addShape(shape);

		this.shapes[this.shapes.length - 1].getBounds().x = x;
		this.shapes[this.shapes.length - 1].getBounds().y = y;

		this.getBounds().x = x;
		this.getBounds().y = y;
	}
	rotate(angle, v = this.getBounds().center) {
		super.rotate(angle, v);
		var x = Math.min(this.shapes[0].points[0][0], this.shapes[0].points[1][0]);
		var y = Math.min(this.shapes[0].points[0][1], this.shapes[0].points[1][1]);

		this.shapes[0].getBounds().x = x;
		this.shapes[0].getBounds().y = y;

		this.getBounds().x = x;
		this.getBounds().y = y;
	}
};

