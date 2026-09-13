var game = {
	var : {},

	object : {},

	level : {},

	state : {},

	util : {},

	collisionTypes : me.collision.types,

	onload : function () {
		// Initialize the video.
		if (!me.video.init(1170, 540, {wrapper : "screen", scale : "auto", scaleMethod: "flex-height" , antiAlias: true, doubleBuffering: false, subpixel: false, transparent: false, powerPreference: "default"})) {
			alert("Your browser does not support HTML5 canvas.");
			return;
		}
		me.audio.init("mp3,ogg");
		me.loader.crossOrigin = "anonymous";

		// set and load all resources.
		// (this will also automatically switch to the loading screen)
		me.loader.preload(game.resources, this.loaded.bind(this));
	},

	// Run on game resources loaded.
	loaded : function () {
		game.state.achievement = "achievement";
		me.state.set("achievement", new game.level.achievement());
		game.state.Credits = "Credits";
		me.state.set("Credits", new game.level.Credits());
		game.state.dailyQuest = "dailyQuest";
		me.state.set("dailyQuest", new game.level.dailyQuest());
		game.state.dailyReward = "dailyReward";
		me.state.set("dailyReward", new game.level.dailyReward());
		game.state.endlesmenu = "endlesmenu";
		me.state.set("endlesmenu", new game.level.endlesmenu());
		game.state.L1001 = "L1001";
		me.state.set("L1001", new game.level.L1001());
		game.state.L1002 = "L1002";
		me.state.set("L1002", new game.level.L1002());
		game.state.L1003 = "L1003";
		me.state.set("L1003", new game.level.L1003());
		game.state.L1004 = "L1004";
		me.state.set("L1004", new game.level.L1004());
		game.state.L1005 = "L1005";
		me.state.set("L1005", new game.level.L1005());
		game.state.L1005B = "L1005B";
		me.state.set("L1005B", new game.level.L1005B());
		game.state.L2001 = "L2001";
		me.state.set("L2001", new game.level.L2001());
		game.state.L2002 = "L2002";
		me.state.set("L2002", new game.level.L2002());
		game.state.L2003 = "L2003";
		me.state.set("L2003", new game.level.L2003());
		game.state.L2004 = "L2004";
		me.state.set("L2004", new game.level.L2004());
		game.state.L2005 = "L2005";
		me.state.set("L2005", new game.level.L2005());
		game.state.L2005B = "L2005B";
		me.state.set("L2005B", new game.level.L2005B());
		game.state.L3001 = "L3001";
		me.state.set("L3001", new game.level.L3001());
		game.state.L3002 = "L3002";
		me.state.set("L3002", new game.level.L3002());
		game.state.L3003 = "L3003";
		me.state.set("L3003", new game.level.L3003());
		game.state.L3004 = "L3004";
		me.state.set("L3004", new game.level.L3004());
		game.state.L3005 = "L3005";
		me.state.set("L3005", new game.level.L3005());
		game.state.L3005B = "L3005B";
		me.state.set("L3005B", new game.level.L3005B());
		game.state.L4001 = "L4001";
		me.state.set("L4001", new game.level.L4001());
		game.state.L4002 = "L4002";
		me.state.set("L4002", new game.level.L4002());
		game.state.L4003 = "L4003";
		me.state.set("L4003", new game.level.L4003());
		game.state.L4004 = "L4004";
		me.state.set("L4004", new game.level.L4004());
		game.state.L4005 = "L4005";
		me.state.set("L4005", new game.level.L4005());
		game.state.L4005B = "L4005B";
		me.state.set("L4005B", new game.level.L4005B());
		game.state.L5001 = "L5001";
		me.state.set("L5001", new game.level.L5001());
		game.state.L5002 = "L5002";
		me.state.set("L5002", new game.level.L5002());
		game.state.L5003 = "L5003";
		me.state.set("L5003", new game.level.L5003());
		game.state.L5004 = "L5004";
		me.state.set("L5004", new game.level.L5004());
		game.state.L5005 = "L5005";
		me.state.set("L5005", new game.level.L5005());
		game.state.L5005B = "L5005B";
		me.state.set("L5005B", new game.level.L5005B());
		game.state.L6001 = "L6001";
		me.state.set("L6001", new game.level.L6001());
		game.state.L6002 = "L6002";
		me.state.set("L6002", new game.level.L6002());
		game.state.L6003 = "L6003";
		me.state.set("L6003", new game.level.L6003());
		game.state.L6003B = "L6003B";
		me.state.set("L6003B", new game.level.L6003B());
		game.state.LENDLES = "LENDLES";
		me.state.set("LENDLES", new game.level.LENDLES());
		game.state.level1 = "level1";
		me.state.set("level1", new game.level.level1());
		game.state.loby = "loby";
		me.state.set("loby", new game.level.loby());
		game.state.lobysolo = "lobysolo";
		me.state.set("lobysolo", new game.level.lobysolo());
		game.state.loginReward = "loginReward";
		me.state.set("loginReward", new game.level.loginReward());
		game.state.Shop = "Shop";
		me.state.set("Shop", new game.level.Shop());
		game.state.splashScreen = "splashScreen";
		me.state.set("splashScreen", new game.level.splashScreen());
		game.state.splashScreen2 = "splashScreen2";
		me.state.set("splashScreen2", new game.level.splashScreen2());
		game.state.stageMenu = "stageMenu";
		me.state.set("stageMenu", new game.level.stageMenu());
		game.state.stageMenu2 = "stageMenu2";
		me.state.set("stageMenu2", new game.level.stageMenu2());
		game.state.stageMenu3 = "stageMenu3";
		me.state.set("stageMenu3", new game.level.stageMenu3());
		game.state.stageMenu4 = "stageMenu4";
		me.state.set("stageMenu4", new game.level.stageMenu4());
		game.state.stageMenu5 = "stageMenu5";
		me.state.set("stageMenu5", new game.level.stageMenu5());
		game.state.stageMenu6 = "stageMenu6";
		me.state.set("stageMenu6", new game.level.stageMenu6());
		game.state.startMenu = "startMenu";
		me.state.set("startMenu", new game.level.startMenu());
		game.state.temp = "temp";
		me.state.set("temp", new game.level.temp());
		game.state.worldMap = "worldMap";
		me.state.set("worldMap", new game.level.worldMap());

		me.pool.register('buttonBase2', game.object.buttonBase2);
		me.pool.register('buttonBaseFloating', game.object.buttonBaseFloating);
		me.pool.register('draggableSprite', game.object.draggableSprite);
		me.pool.register('battleCoin', game.object.battleCoin);
		me.pool.register('battleDieAnim', game.object.battleDieAnim);
		me.pool.register('battleHitPlayer', game.object.battleHitPlayer);
		me.pool.register('battleHitZB01', game.object.battleHitZB01);
		me.pool.register('battleHitZombieAnim', game.object.battleHitZombieAnim);
		me.pool.register('battleProjectileEffect', game.object.battleProjectileEffect);
		me.pool.register('battleZombieAtk', game.object.battleZombieAtk);
		me.pool.register('fallenSmoke', game.object.fallenSmoke);
		me.pool.register('hitListrikEffect', game.object.hitListrikEffect);
		me.pool.register('WP0004ujungPeluru', game.object.WP0004ujungPeluru);
		me.pool.register('WP0006ujungPeluru', game.object.WP0006ujungPeluru);
		me.pool.register('WP0007ujungPeluru', game.object.WP0007ujungPeluru);
		me.pool.register('WP0008ujungPeluru', game.object.WP0008ujungPeluru);
		me.pool.register('WP0009ujungPeluru', game.object.WP0009ujungPeluru);
		me.pool.register('ZB01GreenSmoke', game.object.ZB01GreenSmoke);
		me.pool.register('ZB10FallSmoke', game.object.ZB10FallSmoke);
		me.pool.register('ZB10Shield', game.object.ZB10Shield);
		me.pool.register('coffinZombieMummy', game.object.coffinZombieMummy);
		me.pool.register('Z001', game.object.Z001);
		me.pool.register('Z002', game.object.Z002);
		me.pool.register('Z003', game.object.Z003);
		me.pool.register('Z004', game.object.Z004);
		me.pool.register('Z005', game.object.Z005);
		me.pool.register('Z006', game.object.Z006);
		me.pool.register('Z007', game.object.Z007);
		me.pool.register('Z008', game.object.Z008);
		me.pool.register('Z009', game.object.Z009);
		me.pool.register('Z010', game.object.Z010);
		me.pool.register('Z011', game.object.Z011);
		me.pool.register('Z012', game.object.Z012);
		me.pool.register('Z013', game.object.Z013);
		me.pool.register('Z014', game.object.Z014);
		me.pool.register('Z015', game.object.Z015);
		me.pool.register('Z016', game.object.Z016);
		me.pool.register('Z017', game.object.Z017);
		me.pool.register('Z018', game.object.Z018);
		me.pool.register('Z019', game.object.Z019);
		me.pool.register('Z020', game.object.Z020);
		me.pool.register('Z021', game.object.Z021);
		me.pool.register('Z022', game.object.Z022);
		me.pool.register('Z023', game.object.Z023);
		me.pool.register('Z024', game.object.Z024);
		me.pool.register('Z025', game.object.Z025);
		me.pool.register('Z026', game.object.Z026);
		me.pool.register('Z027', game.object.Z027);
		me.pool.register('Z028', game.object.Z028);
		me.pool.register('Z029', game.object.Z029);
		me.pool.register('Z029coffin', game.object.Z029coffin);
		me.pool.register('Z030', game.object.Z030);
		me.pool.register('Z031', game.object.Z031);
		me.pool.register('Z032', game.object.Z032);
		me.pool.register('Z033', game.object.Z033);
		me.pool.register('Z034', game.object.Z034);
		me.pool.register('Z035', game.object.Z035);
		me.pool.register('Z036', game.object.Z036);
		me.pool.register('Z037', game.object.Z037);
		me.pool.register('Z038', game.object.Z038);
		me.pool.register('ZB01', game.object.ZB01);
		me.pool.register('ZB02', game.object.ZB02);
		me.pool.register('ZB02Endless', game.object.ZB02Endless);
		me.pool.register('ZB03', game.object.ZB03);
		me.pool.register('ZB04', game.object.ZB04);
		me.pool.register('ZB05', game.object.ZB05);
		me.pool.register('ZB06', game.object.ZB06);
		me.pool.register('ZB07', game.object.ZB07);
		me.pool.register('ZB08', game.object.ZB08);
		me.pool.register('ZB09', game.object.ZB09);
		me.pool.register('ZB09CinematicIntro', game.object.ZB09CinematicIntro);
		me.pool.register('ZB10', game.object.ZB10);
		me.pool.register('ZombieBase', game.object.ZombieBase);
		me.pool.register('adsBtn', game.object.adsBtn);
		me.pool.register('adsButton', game.object.adsButton);
		me.pool.register('adsButtonKey', game.object.adsButtonKey);
		me.pool.register('ADS_Notif', game.object.ADS_Notif);
		me.pool.register('BtnLanjut', game.object.BtnLanjut);
		me.pool.register('continue', game.object.continue);
		me.pool.register('continueSoloSurvival', game.object.continueSoloSurvival);
		me.pool.register('endContainer', game.object.endContainer);
		me.pool.register('endContainerEndless', game.object.endContainerEndless);
		me.pool.register('endContainerSoloSurvival', game.object.endContainerSoloSurvival);
		me.pool.register('retry', game.object.retry);
		me.pool.register('retrySoloSurvival', game.object.retrySoloSurvival);
		me.pool.register('share', game.object.share);
		me.pool.register('loadingAnim', game.object.loadingAnim);
		me.pool.register('loadingBlackBar', game.object.loadingBlackBar);
		me.pool.register('loadingScreen', game.object.loadingScreen);
		me.pool.register('mainCharacter', game.object.mainCharacter);
		me.pool.register('playerKarung', game.object.playerKarung);
		me.pool.register('testKarakter', game.object.testKarakter);
		me.pool.register('L4001_Barrel', game.object.L4001_Barrel);
		me.pool.register('L4001_GedungKanan', game.object.L4001_GedungKanan);
		me.pool.register('L4001_GedungKiri', game.object.L4001_GedungKiri);
		me.pool.register('L4002_batu', game.object.L4002_batu);
		me.pool.register('L4002_kakiKanan', game.object.L4002_kakiKanan);
		me.pool.register('L4002_kakiKiri', game.object.L4002_kakiKiri);
		me.pool.register('L4002_kepala', game.object.L4002_kepala);
		me.pool.register('L4003_pilar1', game.object.L4003_pilar1);
		me.pool.register('L4003_pilar2', game.object.L4003_pilar2);
		me.pool.register('L4004_batu', game.object.L4004_batu);
		me.pool.register('L4004_dindingKanan', game.object.L4004_dindingKanan);
		me.pool.register('L4004_dindingKiri', game.object.L4004_dindingKiri);
		me.pool.register('L4005B_gelap', game.object.L4005B_gelap);
		me.pool.register('L4005_bor', game.object.L4005_bor);
		me.pool.register('L4005_pilarAtsKanan', game.object.L4005_pilarAtsKanan);
		me.pool.register('L4005_pilarAtsKiri', game.object.L4005_pilarAtsKiri);
		me.pool.register('L4005_pilarBwhKanan', game.object.L4005_pilarBwhKanan);
		me.pool.register('L4005_pilarBwhKiri', game.object.L4005_pilarBwhKiri);
		me.pool.register('africaPasir', game.object.africaPasir);
		me.pool.register('carBlue', game.object.carBlue);
		me.pool.register('carBlueShadow', game.object.carBlueShadow);
		me.pool.register('carLights', game.object.carLights);
		me.pool.register('carYellowCamaro', game.object.carYellowCamaro);
		me.pool.register('carYellowShadow', game.object.carYellowShadow);
		me.pool.register('pohon', game.object.pohon);
		me.pool.register('pohon2', game.object.pohon2);
		me.pool.register('pohonShadowKanan', game.object.pohonShadowKanan);
		me.pool.register('pohonShadowKiri', game.object.pohonShadowKiri);
		me.pool.register('carPolice1', game.object.carPolice1);
		me.pool.register('carPolice1Lights', game.object.carPolice1Lights);
		me.pool.register('hydrant', game.object.hydrant);
		me.pool.register('lampuMerahBesar', game.object.lampuMerahBesar);
		me.pool.register('lampuMerahKecil', game.object.lampuMerahKecil);
		me.pool.register('pohon3', game.object.pohon3);
		me.pool.register('L1003Batu1', game.object.L1003Batu1);
		me.pool.register('L1003Batu2', game.object.L1003Batu2);
		me.pool.register('L1003Batu3', game.object.L1003Batu3);
		me.pool.register('L1003Batu4', game.object.L1003Batu4);
		me.pool.register('L1004CahayaLampu', game.object.L1004CahayaLampu);
		me.pool.register('L1004Lampu', game.object.L1004Lampu);
		me.pool.register('L1004LibertyHand', game.object.L1004LibertyHand);
		me.pool.register('L1004LibertyHead', game.object.L1004LibertyHead);
		me.pool.register('frameMerah', game.object.frameMerah);
		me.pool.register('L1005Atap', game.object.L1005Atap);
		me.pool.register('L1005Gelap', game.object.L1005Gelap);
		me.pool.register('L1005PintuJebol', game.object.L1005PintuJebol);
		me.pool.register('L1005Pohon', game.object.L1005Pohon);
		me.pool.register('L1005Tembok', game.object.L1005Tembok);
		me.pool.register('L1005Tiang', game.object.L1005Tiang);
		me.pool.register('tembokHancur', game.object.tembokHancur);
		me.pool.register('L5001_Batu1', game.object.L5001_Batu1);
		me.pool.register('L5001_Batu2', game.object.L5001_Batu2);
		me.pool.register('L5001_Bis', game.object.L5001_Bis);
		me.pool.register('L5001_Monas', game.object.L5001_Monas);
		me.pool.register('L5001_PohonKanan', game.object.L5001_PohonKanan);
		me.pool.register('L5001_PohonKiri', game.object.L5001_PohonKiri);
		me.pool.register('TembokTransparant', game.object.TembokTransparant);
		me.pool.register('L5002_Pilar', game.object.L5002_Pilar);
		me.pool.register('L5002_Pilar2', game.object.L5002_Pilar2);
		me.pool.register('L5002_Pilar3', game.object.L5002_Pilar3);
		me.pool.register('L5002_Pilar3Kanan', game.object.L5002_Pilar3Kanan);
		me.pool.register('L5002_PilarBanyak', game.object.L5002_PilarBanyak);
		me.pool.register('L5002_PohonAtas', game.object.L5002_PohonAtas);
		me.pool.register('L5002_TanggaKanan', game.object.L5002_TanggaKanan);
		me.pool.register('L5002_TanggaKiri', game.object.L5002_TanggaKiri);
		me.pool.register('L5002_TembokCol', game.object.L5002_TembokCol);
		me.pool.register('L5003_cahayaLampu', game.object.L5003_cahayaLampu);
		me.pool.register('L5003_GedungKanan', game.object.L5003_GedungKanan);
		me.pool.register('L5003_GedungKiri', game.object.L5003_GedungKiri);
		me.pool.register('L5003_Lampu', game.object.L5003_Lampu);
		me.pool.register('L5003_PohonKanan', game.object.L5003_PohonKanan);
		me.pool.register('L5003_PohonKiri', game.object.L5003_PohonKiri);
		me.pool.register('L5004_PohonAtas', game.object.L5004_PohonAtas);
		me.pool.register('L5004_SemakKanan', game.object.L5004_SemakKanan);
		me.pool.register('L5004_SemakKiri', game.object.L5004_SemakKiri);
		me.pool.register('L5004_TiangKanan', game.object.L5004_TiangKanan);
		me.pool.register('L5004_TiangKananDepan', game.object.L5004_TiangKananDepan);
		me.pool.register('L5004_TiangKiri', game.object.L5004_TiangKiri);
		me.pool.register('L5004_TiangKiriDepan', game.object.L5004_TiangKiriDepan);
		me.pool.register('L5005B_gelap', game.object.L5005B_gelap);
		me.pool.register('L5005_LampuKanan', game.object.L5005_LampuKanan);
		me.pool.register('L5005_LampuKiri', game.object.L5005_LampuKiri);
		me.pool.register('L5005_Pohon', game.object.L5005_Pohon);
		me.pool.register('L6001dahanKanan', game.object.L6001dahanKanan);
		me.pool.register('L6001pohonKiri', game.object.L6001pohonKiri);
		me.pool.register('L6002Bis', game.object.L6002Bis);
		me.pool.register('L6002BisLampu', game.object.L6002BisLampu);
		me.pool.register('L6002Mobil', game.object.L6002Mobil);
		me.pool.register('L6003Barrier', game.object.L6003Barrier);
		me.pool.register('L6003B_gelap', game.object.L6003B_gelap);
		me.pool.register('L6003Cone', game.object.L6003Cone);
		me.pool.register('L6003PoliceCar', game.object.L6003PoliceCar);
		me.pool.register('L6003Shadow', game.object.L6003Shadow);
		me.pool.register('L6003SmokeCar', game.object.L6003SmokeCar);
		me.pool.register('australiaAwan1', game.object.australiaAwan1);
		me.pool.register('australiaAwan2', game.object.australiaAwan2);
		me.pool.register('australiaPasir', game.object.australiaPasir);
		me.pool.register('batuEropa', game.object.batuEropa);
		me.pool.register('batuEropa2', game.object.batuEropa2);
		me.pool.register('boothTelp', game.object.boothTelp);
		me.pool.register('carPoliceEropa', game.object.carPoliceEropa);
		me.pool.register('pembatas', game.object.pembatas);
		me.pool.register('boothTelp2', game.object.boothTelp2);
		me.pool.register('boxPatung', game.object.boxPatung);
		me.pool.register('patung', game.object.patung);
		me.pool.register('rumput', game.object.rumput);
		me.pool.register('trotoar', game.object.trotoar);
		me.pool.register('batuKiri', game.object.batuKiri);
		me.pool.register('monumen', game.object.monumen);
		me.pool.register('pembatas2', game.object.pembatas2);
		me.pool.register('pembatas3', game.object.pembatas3);
		me.pool.register('penghalang', game.object.penghalang);
		me.pool.register('tempatDuduk', game.object.tempatDuduk);
		me.pool.register('atapKanan', game.object.atapKanan);
		me.pool.register('atapKiri', game.object.atapKiri);
		me.pool.register('batuKanan', game.object.batuKanan);
		me.pool.register('batuKiri2', game.object.batuKiri2);
		me.pool.register('pilarKanan', game.object.pilarKanan);
		me.pool.register('pilarKiri', game.object.pilarKiri);
		me.pool.register('L2001Batu1', game.object.L2001Batu1);
		me.pool.register('L2001Batu2', game.object.L2001Batu2);
		me.pool.register('L2001Bis', game.object.L2001Bis);
		me.pool.register('L2001Car1', game.object.L2001Car1);
		me.pool.register('L2001Car2', game.object.L2001Car2);
		me.pool.register('L2001Laut', game.object.L2001Laut);
		me.pool.register('L2001Pasir', game.object.L2001Pasir);
		me.pool.register('L2001PohonKanan', game.object.L2001PohonKanan);
		me.pool.register('L2001PohonKiri', game.object.L2001PohonKiri);
		me.pool.register('L2001PoliceCar', game.object.L2001PoliceCar);
		me.pool.register('L2001PoliceCarSmoke', game.object.L2001PoliceCarSmoke);
		me.pool.register('L2002Batu', game.object.L2002Batu);
		me.pool.register('L2002GedungKanan', game.object.L2002GedungKanan);
		me.pool.register('L2002GedungKiri', game.object.L2002GedungKiri);
		me.pool.register('L2002Mobil', game.object.L2002Mobil);
		me.pool.register('L2003Cahaya', game.object.L2003Cahaya);
		me.pool.register('L2003Gedung', game.object.L2003Gedung);
		me.pool.register('L2003mobil1', game.object.L2003mobil1);
		me.pool.register('L2003mobil1B', game.object.L2003mobil1B);
		me.pool.register('L2003mobil2', game.object.L2003mobil2);
		me.pool.register('L2003mobil2B', game.object.L2003mobil2B);
		me.pool.register('L2003TembokKanan', game.object.L2003TembokKanan);
		me.pool.register('L2003TembokKiri', game.object.L2003TembokKiri);
		me.pool.register('L2003TempatSampah', game.object.L2003TempatSampah);
		me.pool.register('L2004Batu', game.object.L2004Batu);
		me.pool.register('L2004Patung', game.object.L2004Patung);
		me.pool.register('L2004Patung2', game.object.L2004Patung2);
		me.pool.register('L2004Patung3', game.object.L2004Patung3);
		me.pool.register('L2004Pohon', game.object.L2004Pohon);
		me.pool.register('L2005Lantai', game.object.L2005Lantai);
		me.pool.register('L2005Ledakan', game.object.L2005Ledakan);
		me.pool.register('L2005Tangga', game.object.L2005Tangga);
		me.pool.register('L2005Tiang', game.object.L2005Tiang);
		me.pool.register('L2005BBatu1', game.object.L2005BBatu1);
		me.pool.register('L2005BBatu2', game.object.L2005BBatu2);
		me.pool.register('L2005BBatu3', game.object.L2005BBatu3);
		me.pool.register('L2005BBatuBiasa', game.object.L2005BBatuBiasa);
		me.pool.register('L2005BPohon', game.object.L2005BPohon);
		me.pool.register('ZB04FallSmoke', game.object.ZB04FallSmoke);
		me.pool.register('awan1', game.object.awan1);
		me.pool.register('awan2', game.object.awan2);
		me.pool.register('awanEropa1', game.object.awanEropa1);
		me.pool.register('awanEropa2', game.object.awanEropa2);
		me.pool.register('eropaPasir', game.object.eropaPasir);
		me.pool.register('limitBawahGUI', game.object.limitBawahGUI);
		me.pool.register('limitBawahGUIKanan', game.object.limitBawahGUIKanan);
		me.pool.register('limitBawahGUIKiri', game.object.limitBawahGUIKiri);
		me.pool.register('pasir', game.object.pasir);
		me.pool.register('pauseBackground', game.object.pauseBackground);
		me.pool.register('pauseBtn', game.object.pauseBtn);
		me.pool.register('pauseClose', game.object.pauseClose);
		me.pool.register('pauseContainer', game.object.pauseContainer);
		me.pool.register('pauseContinue', game.object.pauseContinue);
		me.pool.register('pauseContinueKey', game.object.pauseContinueKey);
		me.pool.register('pauseHome', game.object.pauseHome);
		me.pool.register('pauseHomeKey', game.object.pauseHomeKey);
		me.pool.register('projectileBase', game.object.projectileBase);
		me.pool.register('projectileLaserZB02', game.object.projectileLaserZB02);
		me.pool.register('projectileLaserZB04', game.object.projectileLaserZB04);
		me.pool.register('projectileMedusaZB06', game.object.projectileMedusaZB06);
		me.pool.register('projectileSparkZB02', game.object.projectileSparkZB02);
		me.pool.register('projectileSparkZB04', game.object.projectileSparkZB04);
		me.pool.register('projectileWardZ032', game.object.projectileWardZ032);
		me.pool.register('projectileZ033', game.object.projectileZ033);
		me.pool.register('projectileZ035', game.object.projectileZ035);
		me.pool.register('projectileZB02', game.object.projectileZB02);
		me.pool.register('projectileZB04', game.object.projectileZB04);
		me.pool.register('projectileZB09', game.object.projectileZB09);
		me.pool.register('WP0000_projectile', game.object.WP0000_projectile);
		me.pool.register('WP0001_projectile', game.object.WP0001_projectile);
		me.pool.register('WP0002_projectile', game.object.WP0002_projectile);
		me.pool.register('WP0003_projectile', game.object.WP0003_projectile);
		me.pool.register('WP0004_projectile', game.object.WP0004_projectile);
		me.pool.register('WP0005_projectile', game.object.WP0005_projectile);
		me.pool.register('WP0006_projectile', game.object.WP0006_projectile);
		me.pool.register('WP0006_projectile2', game.object.WP0006_projectile2);
		me.pool.register('WP0007_projectile', game.object.WP0007_projectile);
		me.pool.register('WP0007_projectile2', game.object.WP0007_projectile2);
		me.pool.register('WP0008_projectile', game.object.WP0008_projectile);
		me.pool.register('WP0009_projectile', game.object.WP0009_projectile);
		me.pool.register('explosion', game.object.explosion);
		me.pool.register('explosionChemical', game.object.explosionChemical);
		me.pool.register('explosionNuke', game.object.explosionNuke);
		me.pool.register('missile', game.object.missile);
		me.pool.register('offSkill', game.object.offSkill);
		me.pool.register('skill1Area', game.object.skill1Area);
		me.pool.register('skill2Area', game.object.skill2Area);
		me.pool.register('skill3Area', game.object.skill3Area);
		me.pool.register('SkillManager', game.object.SkillManager);
		me.pool.register('skillTarget', game.object.skillTarget);
		me.pool.register('spriteDragSkill', game.object.spriteDragSkill);
		me.pool.register('spriteDragSkill2', game.object.spriteDragSkill2);
		me.pool.register('spriteDragSkill3', game.object.spriteDragSkill3);
		me.pool.register('sparkBlueOval', game.object.sparkBlueOval);
		me.pool.register('sparksBase', game.object.sparksBase);
		me.pool.register('sparkStandar', game.object.sparkStandar);
		me.pool.register('sparkWardZ032', game.object.sparkWardZ032);
		me.pool.register('thunderBolt', game.object.thunderBolt);
		me.pool.register('WP0000_sparks', game.object.WP0000_sparks);
		me.pool.register('WP0001_sparks', game.object.WP0001_sparks);
		me.pool.register('WP0002_sparks', game.object.WP0002_sparks);
		me.pool.register('WP0003_sparks', game.object.WP0003_sparks);
		me.pool.register('WP0004_sparks', game.object.WP0004_sparks);
		me.pool.register('WP0005_sparks', game.object.WP0005_sparks);
		me.pool.register('WP0006_sparks', game.object.WP0006_sparks);
		me.pool.register('WP0007_sparks', game.object.WP0007_sparks);
		me.pool.register('WP0008_sparks', game.object.WP0008_sparks);
		me.pool.register('WP0009_sparks', game.object.WP0009_sparks);
		me.pool.register('spawnerBat', game.object.spawnerBat);
		me.pool.register('spawnerEnemy', game.object.spawnerEnemy);
		me.pool.register('spawnerEnemyBos', game.object.spawnerEnemyBos);
		me.pool.register('spawnerEnemySoloSurvival', game.object.spawnerEnemySoloSurvival);
		me.pool.register('spawnerEnemyZ007', game.object.spawnerEnemyZ007);
		me.pool.register('spawnerEnemyZ024', game.object.spawnerEnemyZ024);
		me.pool.register('VictoryContainer', game.object.VictoryContainer);
		me.pool.register('weaponBase', game.object.weaponBase);
		me.pool.register('weaponSprite', game.object.weaponSprite);
		me.pool.register('weaponZ032', game.object.weaponZ032);
		me.pool.register('WP0000', game.object.WP0000);
		me.pool.register('WP0001', game.object.WP0001);
		me.pool.register('WP0002', game.object.WP0002);
		me.pool.register('WP0003', game.object.WP0003);
		me.pool.register('WP0004', game.object.WP0004);
		me.pool.register('WP0005', game.object.WP0005);
		me.pool.register('WP0006', game.object.WP0006);
		me.pool.register('WP0007', game.object.WP0007);
		me.pool.register('WP0008', game.object.WP0008);
		me.pool.register('WP0009', game.object.WP0009);
		me.pool.register('battleAttackButton', game.object.battleAttackButton);
		me.pool.register('battleBarHp', game.object.battleBarHp);
		me.pool.register('battleBarHpGambar', game.object.battleBarHpGambar);
		me.pool.register('battleBarHpIcon', game.object.battleBarHpIcon);
		me.pool.register('battleChangeWeaponButton', game.object.battleChangeWeaponButton);
		me.pool.register('battleControllerContainer', game.object.battleControllerContainer);
		me.pool.register('battleDirectionArea', game.object.battleDirectionArea);
		me.pool.register('battleDirectionButton', game.object.battleDirectionButton);
		me.pool.register('battleFireButton', game.object.battleFireButton);
		me.pool.register('battleGold', game.object.battleGold);
		me.pool.register('battleRemoteController', game.object.battleRemoteController);
		me.pool.register('battleSkill', game.object.battleSkill);
		me.pool.register('battleStageContainer', game.object.battleStageContainer);
		me.pool.register('battleUiContainer', game.object.battleUiContainer);
		me.pool.register('battleWeapon', game.object.battleWeapon);
		me.pool.register('battleWeaponHandGrip', game.object.battleWeaponHandGrip);
		me.pool.register('blackPanel', game.object.blackPanel);
		me.pool.register('coba', game.object.coba);
		me.pool.register('switchWeaponButton', game.object.switchWeaponButton);
		me.pool.register('TouchArea', game.object.TouchArea);
		me.pool.register('animSplash', game.object.animSplash);
		me.pool.register('changeStateButton', game.object.changeStateButton);
		me.pool.register('deleteDataButton', game.object.deleteDataButton);
		me.pool.register('linkButton', game.object.linkButton);
		me.pool.register('openContainerButton', game.object.openContainerButton);
		me.pool.register('overlay', game.object.overlay);
		me.pool.register('staticSprite', game.object.staticSprite);
		me.pool.register('topUpContainer', game.object.topUpContainer);
		me.pool.register('back', game.object.back);
		me.pool.register('backLobbySolo', game.object.backLobbySolo);
		me.pool.register('deathisland', game.object.deathisland);
		me.pool.register('goldEnemy', game.object.goldEnemy);
		me.pool.register('lightmulti', game.object.lightmulti);
		me.pool.register('lightsolo', game.object.lightsolo);
		me.pool.register('multi', game.object.multi);
		me.pool.register('panelblack', game.object.panelblack);
		me.pool.register('solo', game.object.solo);
		me.pool.register('survival', game.object.survival);
		me.pool.register('cancel', game.object.cancel);
		me.pool.register('lobiGame', game.object.lobiGame);
		me.pool.register('ready', game.object.ready);
		me.pool.register('search', game.object.search);
		me.pool.register('FBrank', game.object.FBrank);
		me.pool.register('headerBlock', game.object.headerBlock);
		me.pool.register('rankBox', game.object.rankBox);
		me.pool.register('rankContainer', game.object.rankContainer);
		me.pool.register('rankContainerSolo', game.object.rankContainerSolo);
		me.pool.register('rankNumber', game.object.rankNumber);
		me.pool.register('AchIcon', game.object.AchIcon);
		me.pool.register('AchievementContainer', game.object.AchievementContainer);
		me.pool.register('AchRewardIcon', game.object.AchRewardIcon);
		me.pool.register('ClaimAchBtn', game.object.ClaimAchBtn);
		me.pool.register('ClaimQuestBtn', game.object.ClaimQuestBtn);
		me.pool.register('DailyQuestContainer', game.object.DailyQuestContainer);
		me.pool.register('QuestBar', game.object.QuestBar);
		me.pool.register('QuestDragArea', game.object.QuestDragArea);
		me.pool.register('QuestIcon', game.object.QuestIcon);
		me.pool.register('UnclaimBtn', game.object.UnclaimBtn);
		me.pool.register('ClaimDailyBtn', game.object.ClaimDailyBtn);
		me.pool.register('DailyRewardContainer', game.object.DailyRewardContainer);
		me.pool.register('ClaimLoginBtn', game.object.ClaimLoginBtn);
		me.pool.register('LoginRewardContainer', game.object.LoginRewardContainer);
		me.pool.register('UnclaimLoginBtn', game.object.UnclaimLoginBtn);
		me.pool.register('arrowReward', game.object.arrowReward);
		me.pool.register('BGblock', game.object.BGblock);
		me.pool.register('RewardDragArea', game.object.RewardDragArea);
		me.pool.register('BGblackTransparant', game.object.BGblackTransparant);
		me.pool.register('CancelBuyButton', game.object.CancelBuyButton);
		me.pool.register('ConfirmationPanel', game.object.ConfirmationPanel);
		me.pool.register('Stamp', game.object.Stamp);
		me.pool.register('YesBuyButton', game.object.YesBuyButton);
		me.pool.register('BarPanjang', game.object.BarPanjang);
		me.pool.register('BarPendek', game.object.BarPendek);
		me.pool.register('DiamondIcon', game.object.DiamondIcon);
		me.pool.register('DragArea', game.object.DragArea);
		me.pool.register('GembokItem', game.object.GembokItem);
		me.pool.register('GunIcon', game.object.GunIcon);
		me.pool.register('ItemFrame', game.object.ItemFrame);
		me.pool.register('Kertas', game.object.Kertas);
		me.pool.register('PriceIcon', game.object.PriceIcon);
		me.pool.register('WeaponIcon', game.object.WeaponIcon);
		me.pool.register('arrowShopUpgrade', game.object.arrowShopUpgrade);
		me.pool.register('BarPanjangVertical', game.object.BarPanjangVertical);
		me.pool.register('BarPendekVertical', game.object.BarPendekVertical);
		me.pool.register('DragAreaUpgrade', game.object.DragAreaUpgrade);
		me.pool.register('PlusButton', game.object.PlusButton);
		me.pool.register('Stripe', game.object.Stripe);
		me.pool.register('StripeContainer', game.object.StripeContainer);
		me.pool.register('UpgradeBlok', game.object.UpgradeBlok);
		me.pool.register('UpgradeTitle', game.object.UpgradeTitle);
		me.pool.register('arrowShop', game.object.arrowShop);
		me.pool.register('BuyButton', game.object.BuyButton);
		me.pool.register('CategoryButton', game.object.CategoryButton);
		me.pool.register('ExitShopButton', game.object.ExitShopButton);
		me.pool.register('SettingButton', game.object.SettingButton);
		me.pool.register('shopCursor', game.object.shopCursor);
		me.pool.register('ShopManager', game.object.ShopManager);
		me.pool.register('UIBuyContainer', game.object.UIBuyContainer);
		me.pool.register('UIUpgradeContainer', game.object.UIUpgradeContainer);
		me.pool.register('L1001Bckgrnd', game.object.L1001Bckgrnd);
		me.pool.register('L1002Bckgrnd', game.object.L1002Bckgrnd);
		me.pool.register('L1003Bckgrnd', game.object.L1003Bckgrnd);
		me.pool.register('L1004Bckgrnd', game.object.L1004Bckgrnd);
		me.pool.register('L1005Bckgrnd', game.object.L1005Bckgrnd);
		me.pool.register('L2001Bckgrnd', game.object.L2001Bckgrnd);
		me.pool.register('L2002Bckgrnd', game.object.L2002Bckgrnd);
		me.pool.register('L2002BckgrndPetir', game.object.L2002BckgrndPetir);
		me.pool.register('L2003Bckgrnd', game.object.L2003Bckgrnd);
		me.pool.register('L2004Bckgrnd', game.object.L2004Bckgrnd);
		me.pool.register('L2005BBckgrnd', game.object.L2005BBckgrnd);
		me.pool.register('L2005Bckgrnd', game.object.L2005Bckgrnd);
		me.pool.register('BGBlackTransparent', game.object.BGBlackTransparent);
		me.pool.register('endlessMenuBckgrnd', game.object.endlessMenuBckgrnd);
		me.pool.register('endlessOnlineBckgrnd', game.object.endlessOnlineBckgrnd);
		me.pool.register('loseBckgrnd', game.object.loseBckgrnd);
		me.pool.register('shopBckgrnd', game.object.shopBckgrnd);
		me.pool.register('stageMenuBckgrnd', game.object.stageMenuBckgrnd);
		me.pool.register('startMenuBckgrnd', game.object.startMenuBckgrnd);
		me.pool.register('survivalText', game.object.survivalText);
		me.pool.register('topBarEndless', game.object.topBarEndless);
		me.pool.register('winBckgrnd', game.object.winBckgrnd);
		me.pool.register('worldMapBckgrnd', game.object.worldMapBckgrnd);
		me.pool.register('worldMapBckgrndBottomBar', game.object.worldMapBckgrndBottomBar);
		me.pool.register('worldMapBckgrndTopBar', game.object.worldMapBckgrndTopBar);
		me.pool.register('buttonNext', game.object.buttonNext);
		me.pool.register('buttonPrev', game.object.buttonPrev);
		me.pool.register('energyStageContainer', game.object.energyStageContainer);
		me.pool.register('levelContainerAfrica', game.object.levelContainerAfrica);
		me.pool.register('levelContainerAmerica', game.object.levelContainerAmerica);
		me.pool.register('levelContainerAsia', game.object.levelContainerAsia);
		me.pool.register('levelContainerAustralia', game.object.levelContainerAustralia);
		me.pool.register('levelContainerEurope', game.object.levelContainerEurope);
		me.pool.register('levelContainerSouthAmerica', game.object.levelContainerSouthAmerica);
		me.pool.register('levelPic', game.object.levelPic);
		me.pool.register('playGoButton', game.object.playGoButton);
		me.pool.register('remote_jio', game.object.remote_jio);
		me.pool.register('remote_jioBlack', game.object.remote_jioBlack);
		me.pool.register('blackOptionBackground', game.object.blackOptionBackground);
		me.pool.register('optionBar', game.object.optionBar);
		me.pool.register('optionBarButtonBGM', game.object.optionBarButtonBGM);
		me.pool.register('optionBarButtonSFX', game.object.optionBarButtonSFX);
		me.pool.register('optionClose', game.object.optionClose);
		me.pool.register('optionContainer', game.object.optionContainer);
		me.pool.register('optionFrame', game.object.optionFrame);
		me.pool.register('optionWhiteBar', game.object.optionWhiteBar);
		me.pool.register('optionWhiteBarBGM', game.object.optionWhiteBarBGM);
		me.pool.register('optionXButton', game.object.optionXButton);
		me.pool.register('achievmentContainer', game.object.achievmentContainer);
		me.pool.register('benuaButton', game.object.benuaButton);
		me.pool.register('cursor', game.object.cursor);
		me.pool.register('dailyMissionContainer', game.object.dailyMissionContainer);
		me.pool.register('energyWorldContainer', game.object.energyWorldContainer);
		me.pool.register('mapUIContainer', game.object.mapUIContainer);
		me.pool.register('startMenuButton', game.object.startMenuButton);
		me.pool.register('testButtonBeli', game.object.testButtonBeli);
		me.pool.register('worldMapAvatarPic', game.object.worldMapAvatarPic);
		me.pool.register('BlokLuar', game.object.BlokLuar);
		me.pool.register('creditsAnim', game.object.creditsAnim);
		me.pool.register('creditsFirework', game.object.creditsFirework);
		me.pool.register('creditsText', game.object.creditsText);
		me.pool.register('DragArea2', game.object.DragArea2);
		me.pool.register('PanelHitam', game.object.PanelHitam);

		game.textureMap = new Map();
		game.textureMap.set("Achievement", new me.video.renderer.Texture([
			me.loader.getJSON("texture_Achievement_0")
		], undefined, false));

		game.textureMap.set("africaZombieBos", new me.video.renderer.Texture([
			me.loader.getJSON("texture_africaZombieBos_0")
		], undefined, false));

		game.textureMap.set("africaZombie", new me.video.renderer.Texture([
			me.loader.getJSON("texture_africaZombie_0")
		], undefined, false));

		game.textureMap.set("africa", new me.video.renderer.Texture([
			me.loader.getJSON("texture_africa_0")
		], undefined, false));

		game.textureMap.set("americaZombieBos", new me.video.renderer.Texture([
			me.loader.getJSON("texture_americaZombieBos_0")
		], undefined, false));

		game.textureMap.set("americaZombie", new me.video.renderer.Texture([
			me.loader.getJSON("texture_americaZombie_0")
		], undefined, false));

		game.textureMap.set("america", new me.video.renderer.Texture([
			me.loader.getJSON("texture_america_0")
		], undefined, false));

		game.textureMap.set("asiaZombieBos", new me.video.renderer.Texture([
			me.loader.getJSON("texture_asiaZombieBos_0")
		], undefined, false));

		game.textureMap.set("asiaZombie", new me.video.renderer.Texture([
			me.loader.getJSON("texture_asiaZombie_0")
		], undefined, false));

		game.textureMap.set("asia", new me.video.renderer.Texture([
			me.loader.getJSON("texture_asia_0")
		], undefined, false));

		game.textureMap.set("australiaZombieBos", new me.video.renderer.Texture([
			me.loader.getJSON("texture_australiaZombieBos_0")
		], undefined, false));

		game.textureMap.set("australiaZombie", new me.video.renderer.Texture([
			me.loader.getJSON("texture_australiaZombie_0")
		], undefined, false));

		game.textureMap.set("australia", new me.video.renderer.Texture([
			me.loader.getJSON("texture_australia_0")
		], undefined, false));

		game.textureMap.set("battle", new me.video.renderer.Texture([
			me.loader.getJSON("texture_battle_0")
		], undefined, false));

		game.textureMap.set("ButtonLuar", new me.video.renderer.Texture([
			me.loader.getJSON("texture_ButtonLuar_0")
		], undefined, false));

		game.textureMap.set("character", new me.video.renderer.Texture([
			me.loader.getJSON("texture_character_0")
		], undefined, false));

		game.textureMap.set("Confirmation", new me.video.renderer.Texture([
			me.loader.getJSON("texture_Confirmation_0")
		], undefined, false));

		game.textureMap.set("credits", new me.video.renderer.Texture([
			me.loader.getJSON("texture_credits_0"),
			me.loader.getJSON("texture_credits_1"),
			me.loader.getJSON("texture_credits_2")
		], undefined, false));

		game.textureMap.set("DailyQuest", new me.video.renderer.Texture([
			me.loader.getJSON("texture_DailyQuest_0")
		], undefined, false));

		game.textureMap.set("DailyReward", new me.video.renderer.Texture([
			me.loader.getJSON("texture_DailyReward_0")
		], undefined, false));

		game.textureMap.set("effect", new me.video.renderer.Texture([
			me.loader.getJSON("texture_effect_0")
		], undefined, false));

		game.textureMap.set("eropaZombieBos", new me.video.renderer.Texture([
			me.loader.getJSON("texture_eropaZombieBos_0")
		], undefined, false));

		game.textureMap.set("eropaZombie", new me.video.renderer.Texture([
			me.loader.getJSON("texture_eropaZombie_0")
		], undefined, false));

		game.textureMap.set("eropa", new me.video.renderer.Texture([
			me.loader.getJSON("texture_eropa_0")
		], undefined, false));

		game.textureMap.set("icon", new me.video.renderer.Texture([
			me.loader.getJSON("texture_icon_0")
		], undefined, false));

		game.textureMap.set("image", new me.video.renderer.Texture([
			me.loader.getJSON("texture_image_0")
		], undefined, false));

		game.textureMap.set("lobi", new me.video.renderer.Texture([
			me.loader.getJSON("texture_lobi_0")
		], undefined, false));

		game.textureMap.set("LoginReward", new me.video.renderer.Texture([
			me.loader.getJSON("texture_LoginReward_0")
		], undefined, false));

		game.textureMap.set("RewardIcon", new me.video.renderer.Texture([
			me.loader.getJSON("texture_RewardIcon_0")
		], undefined, false));

		game.textureMap.set("share", new me.video.renderer.Texture([
			me.loader.getJSON("texture_share_0")
		], undefined, false));

		game.textureMap.set("Shop", new me.video.renderer.Texture([
			me.loader.getJSON("texture_Shop_0")
		], undefined, false));

		game.textureMap.set("southAmericaZombieBos", new me.video.renderer.Texture([
			me.loader.getJSON("texture_southAmericaZombieBos_0")
		], undefined, false));

		game.textureMap.set("southAmericaZombie", new me.video.renderer.Texture([
			me.loader.getJSON("texture_southAmericaZombie_0")
		], undefined, false));

		game.textureMap.set("southAmerica", new me.video.renderer.Texture([
			me.loader.getJSON("texture_southAmerica_0")
		], undefined, false));

		game.textureMap.set("splashScreen", new me.video.renderer.Texture([
			me.loader.getJSON("texture_splashScreen_0")
		], undefined, false));

		game.textureMap.set("stageMenu", new me.video.renderer.Texture([
			me.loader.getJSON("texture_stageMenu_0")
		], undefined, false));

		game.textureMap.set("Stamp", new me.video.renderer.Texture([
			me.loader.getJSON("texture_Stamp_0")
		], undefined, false));

		game.textureMap.set("startMenu", new me.video.renderer.Texture([
			me.loader.getJSON("texture_startMenu_0")
		], undefined, false));

		game.textureMap.set("UpgradeWeapon", new me.video.renderer.Texture([
			me.loader.getJSON("texture_UpgradeWeapon_0")
		], undefined, false));

		game.textureMap.set("worldMap", new me.video.renderer.Texture([
			me.loader.getJSON("texture_worldMap_0")
		], undefined, false));

		game.imageLocation = {
			"achievement judul": "Achievement",
			"achievement plate": "Achievement",
			"africa temple icon": "Achievement",
			"asia temple icon": "Achievement",
			"claim but active": "Achievement",
			"claim but inactive": "Achievement",
			"CLAIMED big": "Achievement",
			"diamondAchievementIcon": "Achievement",
			"icon boss kill": "Achievement",
			"liberti": "Achievement",
			"temple euro icon": "Achievement",
			"temple south america icon": "Achievement",
			"backgroundBlok": "image",
			"ads_buttonSTB": "battle",
			"ads_buttonSTBKey": "battle",
			"ads_button_bw": "battle",
			"ADS_NoADS": "battle",
			"ADS_Rewards": "battle",
			"africaPasir": "africa",
			"Z026_front_attack_0": "africaZombie",
			"Z026_front_attack_1": "africaZombie",
			"Z026_front_attack_2": "africaZombie",
			"Z026_front_attack_3": "africaZombie",
			"Z026_front_attack_4": "africaZombie",
			"Z026_front_attack_5": "africaZombie",
			"Z026_front_attack_6": "africaZombie",
			"Z026_front_attack_7": "africaZombie",
			"Z026_front_attack_8": "africaZombie",
			"Z026_front_dead_0": "africaZombie",
			"Z026_front_dead_1": "africaZombie",
			"Z026_front_dead_2": "africaZombie",
			"Z026_front_dead_3": "africaZombie",
			"Z026_front_dead_4": "africaZombie",
			"Z026_front_walk_0": "africaZombie",
			"Z026_front_walk_1": "africaZombie",
			"Z026_front_walk_2": "africaZombie",
			"Z026_front_walk_3": "africaZombie",
			"Z026_front_walk_4": "africaZombie",
			"Z026_front_walk_5": "africaZombie",
			"Z026_front_walk_6": "africaZombie",
			"Z026_front_walk_7": "africaZombie",
			"Z026_front_walk_8": "africaZombie",
			"Z026_side_attack_0": "africaZombie",
			"Z026_side_attack_1": "africaZombie",
			"Z026_side_attack_2": "africaZombie",
			"Z026_side_attack_3": "africaZombie",
			"Z026_side_attack_4": "africaZombie",
			"Z026_side_attack_5": "africaZombie",
			"Z026_side_attack_6": "africaZombie",
			"Z026_side_attack_7": "africaZombie",
			"Z026_side_attack_8": "africaZombie",
			"Z026_side_dead_0": "africaZombie",
			"Z026_side_dead_1": "africaZombie",
			"Z026_side_dead_2": "africaZombie",
			"Z026_side_dead_3": "africaZombie",
			"Z026_side_dead_4": "africaZombie",
			"Z026_side_walk_0": "africaZombie",
			"Z026_side_walk_1": "africaZombie",
			"Z026_side_walk_2": "africaZombie",
			"Z026_side_walk_3": "africaZombie",
			"Z026_side_walk_4": "africaZombie",
			"Z026_side_walk_5": "africaZombie",
			"Z026_side_walk_6": "africaZombie",
			"Z026_side_walk_7": "africaZombie",
			"Z026_side_walk_8": "africaZombie",
			"Z029_front_attack_0": "africaZombie",
			"Z029_front_attack_1": "africaZombie",
			"Z029_front_attack_2": "africaZombie",
			"Z029_front_attack_3": "africaZombie",
			"Z029_front_walk_0": "africaZombie",
			"Z029_front_walk_1": "africaZombie",
			"Z029_side_attack_0": "africaZombie",
			"Z029_side_attack_1": "africaZombie",
			"Z029_side_attack_2": "africaZombie",
			"Z029_side_attack_3": "africaZombie",
			"Z029_side_walk_0": "africaZombie",
			"Z029_side_walk_1": "africaZombie",
			"Z029_side_walk_2": "africaZombie",
			"Z029_side_walk_3": "africaZombie",
			"Z030_front_attack_0": "africaZombie",
			"Z030_front_attack_1": "africaZombie",
			"Z030_front_walk_0": "africaZombie",
			"Z030_front_walk_1": "africaZombie",
			"Z030_side_attack_0": "africaZombie",
			"Z030_side_attack_1": "africaZombie",
			"Z030_side_attack_2": "africaZombie",
			"Z030_side_walk_0": "africaZombie",
			"Z030_side_walk_1": "africaZombie",
			"Z030_side_walk_2": "africaZombie",
			"Z030_side_walk_3": "africaZombie",
			"Z032_front_dance1_0": "africaZombie",
			"Z032_front_dance1_1": "africaZombie",
			"Z032_front_dance1_2": "africaZombie",
			"Z032_front_dance1_3": "africaZombie",
			"Z032_front_dance2_0": "africaZombie",
			"Z032_front_dance2_1": "africaZombie",
			"Z032_front_dance2_2": "africaZombie",
			"Z032_front_dance2_3": "africaZombie",
			"Z032_front_walk_0": "africaZombie",
			"Z032_front_walk_1": "africaZombie",
			"Z032_front_walk_2": "africaZombie",
			"Z032_front_walk_3": "africaZombie",
			"Z032_front_ward_0": "africaZombie",
			"Z032_front_ward_1": "africaZombie",
			"Z032_front_ward_2": "africaZombie",
			"Z032_front_ward_3": "africaZombie",
			"Z032_front_ward_4": "africaZombie",
			"Z032_front_ward_5": "africaZombie",
			"Z032_front_ward_6": "africaZombie",
			"Z032_front_ward_7": "africaZombie",
			"Z032_front_ward_8": "africaZombie",
			"Z032_front_ward_9": "africaZombie",
			"Z032_projectile_ward": "africaZombie",
			"Z032_side_dance1_0": "africaZombie",
			"Z032_side_dance1_1": "africaZombie",
			"Z032_side_dance1_2": "africaZombie",
			"Z032_side_dance1_3": "africaZombie",
			"Z032_side_dance2_0": "africaZombie",
			"Z032_side_dance2_1": "africaZombie",
			"Z032_side_dance2_2": "africaZombie",
			"Z032_side_dance2_3": "africaZombie",
			"Z032_side_walk_0": "africaZombie",
			"Z032_side_walk_1": "africaZombie",
			"Z032_side_walk_2": "africaZombie",
			"Z032_side_walk_3": "africaZombie",
			"Z032_side_ward_0": "africaZombie",
			"Z032_side_ward_1": "africaZombie",
			"Z032_side_ward_2": "africaZombie",
			"Z032_side_ward_3": "africaZombie",
			"Z032_side_ward_4": "africaZombie",
			"Z032_side_ward_5": "africaZombie",
			"Z032_side_ward_6": "africaZombie",
			"Z032_side_ward_7": "africaZombie",
			"Z032_side_ward_8": "africaZombie",
			"Z032_spark_ward_0": "africaZombie",
			"Z032_spark_ward_1": "africaZombie",
			"Z032_spark_ward_2": "africaZombie",
			"Z032_spark_ward_3": "africaZombie",
			"Z032_spark_ward_4": "africaZombie",
			"Z032_spark_ward_5": "africaZombie",
			"Z032_spark_ward_6": "africaZombie",
			"ZB10_attack_00": "africaZombieBos",
			"ZB10_attack_01": "africaZombieBos",
			"ZB10_attack_02": "africaZombieBos",
			"ZB10_attack_03": "africaZombieBos",
			"ZB10_attack_04": "africaZombieBos",
			"ZB10_attack_05": "africaZombieBos",
			"ZB10_attack_06": "africaZombieBos",
			"ZB10_attack_07": "africaZombieBos",
			"ZB10_attack_08": "africaZombieBos",
			"ZB10_attack_09": "africaZombieBos",
			"ZB10_die_00": "africaZombieBos",
			"ZB10_die_01": "africaZombieBos",
			"ZB10_die_02": "africaZombieBos",
			"ZB10_die_03": "africaZombieBos",
			"ZB10_die_04": "africaZombieBos",
			"ZB10_die_05": "africaZombieBos",
			"ZB10_die_06": "africaZombieBos",
			"ZB10_die_07": "africaZombieBos",
			"ZB10_die_08": "africaZombieBos",
			"ZB10_die_09": "africaZombieBos",
			"ZB10_die_10": "africaZombieBos",
			"ZB10_die_11": "africaZombieBos",
			"ZB10_fallen_smoke_0": "africaZombieBos",
			"ZB10_fallen_smoke_1": "africaZombieBos",
			"ZB10_fallen_smoke_2": "africaZombieBos",
			"ZB10_fallen_smoke_3": "africaZombieBos",
			"ZB10_fallen_smoke_4": "africaZombieBos",
			"ZB10_idle_00": "africaZombieBos",
			"ZB10_idle_01": "africaZombieBos",
			"ZB10_idle_02": "africaZombieBos",
			"ZB10_idle_03": "africaZombieBos",
			"ZB10_idle_04": "africaZombieBos",
			"ZB10_idle_05": "africaZombieBos",
			"ZB10_idle_06": "africaZombieBos",
			"ZB10_idle_07": "africaZombieBos",
			"ZB10_idle_08": "africaZombieBos",
			"ZB10_idle_09": "africaZombieBos",
			"ZB10_shield": "africaZombieBos",
			"ZB10_special_00": "africaZombieBos",
			"ZB10_special_01": "africaZombieBos",
			"ZB10_special_02": "africaZombieBos",
			"ZB10_special_03": "africaZombieBos",
			"ZB10_special_04": "africaZombieBos",
			"ZB10_special_05": "africaZombieBos",
			"ZB10_special_06": "africaZombieBos",
			"ZB10_special_07": "africaZombieBos",
			"ZB10_special_08": "africaZombieBos",
			"ZB10_special_09": "africaZombieBos",
			"ZB10_special_10": "africaZombieBos",
			"ZB10_special_11": "africaZombieBos",
			"ZB10_special_12": "africaZombieBos",
			"ZB10_special_13": "africaZombieBos",
			"ZB10_special_14": "africaZombieBos",
			"ZB10_special_15": "africaZombieBos",
			"ZB10_special_16": "africaZombieBos",
			"ZB10_special_17": "africaZombieBos",
			"ZB10_special_18": "africaZombieBos",
			"ZB10_special_19": "africaZombieBos",
			"L4001_container": "africa",
			"L4001_desert village preview": "africa",
			"L4001_gedung kanan": "africa",
			"L4001_gedung kiri": "africa",
			"L4002_kaki kanan": "africa",
			"L4002_kaki kiri": "africa",
			"L4002_kpala": "africa",
			"L4002_PILAR 1": "africa",
			"L4002_sphinxbg": "africa",
			"L4003_inside pyramid background": "africa",
			"L4003_inside pyramid preview": "africa",
			"L4003_obor": "africa",
			"L4003_pilar 1": "africa",
			"L4003_pilar2": "africa",
			"L4004_pharaohBG": "africa",
			"L4004_PILAR": "africa",
			"L4004_TEMBOK KANAN": "africa",
			"L4004_TEMBOK KIRI": "africa",
			"L4005Bgelap": "africa",
			"L4005_anubis chamber background": "africa",
			"L4005_anubis chamber preview": "africa",
			"L4005_obor": "africa",
			"L4005_pilar atas kanan": "africa",
			"L4005_pilar atas kiri": "africa",
			"L4005_pilar kanan bawah": "africa",
			"L4005_pilar kiri bawah": "africa",
			"peti_mumy_0": "africa",
			"peti_mumy_1": "africa",
			"peti_mumy_2": "africa",
			"peti_mumy_3": "africa",
			"peti_mumy_4": "africa",
			"peti_mumy_5": "africa",
			"Z001_front_attack_0": "americaZombie",
			"Z001_front_attack_1": "americaZombie",
			"Z001_front_walk_0": "americaZombie",
			"Z001_front_walk_1": "americaZombie",
			"Z001_side_attack_0": "americaZombie",
			"Z001_side_attack_1": "americaZombie",
			"Z001_side_walk_0": "americaZombie",
			"Z001_side_walk_1": "americaZombie",
			"Z001_side_walk_2": "americaZombie",
			"Z001_side_walk_3": "americaZombie",
			"Z001_side_walk_4": "americaZombie",
			"Z001_side_walk_5": "americaZombie",
			"Z001_side_walk_6": "americaZombie",
			"Z003_front_attack_0": "americaZombie",
			"Z003_front_attack_1": "americaZombie",
			"Z003_front_attack_2": "americaZombie",
			"Z003_front_attack_3": "americaZombie",
			"Z003_front_walk_0": "americaZombie",
			"Z003_front_walk_1": "americaZombie",
			"Z003_front_walk_10": "americaZombie",
			"Z003_front_walk_11": "americaZombie",
			"Z003_front_walk_2": "americaZombie",
			"Z003_front_walk_3": "americaZombie",
			"Z003_front_walk_4": "americaZombie",
			"Z003_front_walk_5": "americaZombie",
			"Z003_front_walk_6": "americaZombie",
			"Z003_front_walk_7": "americaZombie",
			"Z003_front_walk_8": "americaZombie",
			"Z003_front_walk_9": "americaZombie",
			"Z003_side_attack_0": "americaZombie",
			"Z003_side_attack_1": "americaZombie",
			"Z003_side_attack_2": "americaZombie",
			"Z003_side_attack_3": "americaZombie",
			"Z003_side_attack_4": "americaZombie",
			"Z003_side_attack_5": "americaZombie",
			"Z003_side_attack_6": "americaZombie",
			"Z003_side_attack_7": "americaZombie",
			"Z003_side_attack_8": "americaZombie",
			"Z003_side_attack_9": "americaZombie",
			"Z003_side_walk_0": "americaZombie",
			"Z003_side_walk_1": "americaZombie",
			"Z003_side_walk_10": "americaZombie",
			"Z003_side_walk_11": "americaZombie",
			"Z003_side_walk_12": "americaZombie",
			"Z003_side_walk_13": "americaZombie",
			"Z003_side_walk_14": "americaZombie",
			"Z003_side_walk_15": "americaZombie",
			"Z003_side_walk_16": "americaZombie",
			"Z003_side_walk_2": "americaZombie",
			"Z003_side_walk_3": "americaZombie",
			"Z003_side_walk_4": "americaZombie",
			"Z003_side_walk_5": "americaZombie",
			"Z003_side_walk_6": "americaZombie",
			"Z003_side_walk_7": "americaZombie",
			"Z003_side_walk_8": "americaZombie",
			"Z003_side_walk_9": "americaZombie",
			"Z004_front_attack_0": "americaZombie",
			"Z004_front_attack_1": "americaZombie",
			"Z004_front_walk_0": "americaZombie",
			"Z004_front_walk_1": "americaZombie",
			"Z004_side_attack_0": "americaZombie",
			"Z004_side_attack_1": "americaZombie",
			"Z004_side_walk_0": "americaZombie",
			"Z004_side_walk_1": "americaZombie",
			"Z004_side_walk_2": "americaZombie",
			"Z004_side_walk_3": "americaZombie",
			"Z004_side_walk_4": "americaZombie",
			"Z004_side_walk_5": "americaZombie",
			"Z004_side_walk_6": "americaZombie",
			"Z004_side_walk_7": "americaZombie",
			"Z005_front_attack_0": "americaZombie",
			"Z005_front_attack_1": "americaZombie",
			"Z005_front_walk_0": "americaZombie",
			"Z005_front_walk_1": "americaZombie",
			"Z005_side_attack_0": "americaZombie",
			"Z005_side_attack_1": "americaZombie",
			"Z005_side_walk_0": "americaZombie",
			"Z005_side_walk_1": "americaZombie",
			"Z005_side_walk_2": "americaZombie",
			"Z005_side_walk_3": "americaZombie",
			"Z005_side_walk_4": "americaZombie",
			"Z005_side_walk_5": "americaZombie",
			"Z005_side_walk_6": "americaZombie",
			"Z005_side_walk_7": "americaZombie",
			"Z006_front_attack_0": "americaZombie",
			"Z006_front_attack_1": "americaZombie",
			"Z006_front_walk_0": "americaZombie",
			"Z006_front_walk_1": "americaZombie",
			"Z006_side_attack_0": "americaZombie",
			"Z006_side_attack_1": "americaZombie",
			"Z006_side_walk_0": "americaZombie",
			"Z006_side_walk_1": "americaZombie",
			"Z006_side_walk_2": "americaZombie",
			"Z006_side_walk_3": "americaZombie",
			"Z006_side_walk_4": "americaZombie",
			"Z006_side_walk_5": "americaZombie",
			"Z006_side_walk_6": "americaZombie",
			"Z006_side_walk_7": "americaZombie",
			"Z007_front_attack_0": "americaZombie",
			"Z007_front_attack_1": "americaZombie",
			"Z007_front_rise_0": "americaZombie",
			"Z007_front_rise_1": "americaZombie",
			"Z007_front_rise_10": "americaZombie",
			"Z007_front_rise_11": "americaZombie",
			"Z007_front_rise_12": "americaZombie",
			"Z007_front_rise_13": "americaZombie",
			"Z007_front_rise_14": "americaZombie",
			"Z007_front_rise_15": "americaZombie",
			"Z007_front_rise_16": "americaZombie",
			"Z007_front_rise_17": "americaZombie",
			"Z007_front_rise_18": "americaZombie",
			"Z007_front_rise_19": "americaZombie",
			"Z007_front_rise_2": "americaZombie",
			"Z007_front_rise_20": "americaZombie",
			"Z007_front_rise_21": "americaZombie",
			"Z007_front_rise_22": "americaZombie",
			"Z007_front_rise_23": "americaZombie",
			"Z007_front_rise_24": "americaZombie",
			"Z007_front_rise_25": "americaZombie",
			"Z007_front_rise_26": "americaZombie",
			"Z007_front_rise_27": "americaZombie",
			"Z007_front_rise_28": "americaZombie",
			"Z007_front_rise_29": "americaZombie",
			"Z007_front_rise_3": "americaZombie",
			"Z007_front_rise_30": "americaZombie",
			"Z007_front_rise_31": "americaZombie",
			"Z007_front_rise_32": "americaZombie",
			"Z007_front_rise_33": "americaZombie",
			"Z007_front_rise_4": "americaZombie",
			"Z007_front_rise_5": "americaZombie",
			"Z007_front_rise_6": "americaZombie",
			"Z007_front_rise_7": "americaZombie",
			"Z007_front_rise_8": "americaZombie",
			"Z007_front_rise_9": "americaZombie",
			"Z007_front_walk_0": "americaZombie",
			"Z007_front_walk_1": "americaZombie",
			"Z007_side_attack_0": "americaZombie",
			"Z007_side_attack_1": "americaZombie",
			"Z007_side_walk_0": "americaZombie",
			"Z007_side_walk_1": "americaZombie",
			"Z007_side_walk_2": "americaZombie",
			"Z007_side_walk_3": "americaZombie",
			"Z007_side_walk_4": "americaZombie",
			"Z007_side_walk_5": "americaZombie",
			"Z007_side_walk_6": "americaZombie",
			"Z007_side_walk_7": "americaZombie",
			"Z008_front_attack_0": "americaZombie",
			"Z008_front_attack_1": "americaZombie",
			"Z008_front_walk_0": "americaZombie",
			"Z008_front_walk_1": "americaZombie",
			"Z008_side_attack_0": "americaZombie",
			"Z008_side_attack_1": "americaZombie",
			"Z008_side_walk_0": "americaZombie",
			"Z008_side_walk_1": "americaZombie",
			"Z008_side_walk_2": "americaZombie",
			"Z008_side_walk_3": "americaZombie",
			"Z008_side_walk_4": "americaZombie",
			"Z008_side_walk_5": "americaZombie",
			"Z008_side_walk_6": "americaZombie",
			"Z008_side_walk_7": "americaZombie",
			"Z009_front_attack_0": "americaZombie",
			"Z009_front_attack_1": "americaZombie",
			"Z009_front_walk_0": "americaZombie",
			"Z009_front_walk_1": "americaZombie",
			"Z009_side_attack_0": "americaZombie",
			"Z009_side_attack_1": "americaZombie",
			"Z009_side_walk_0": "americaZombie",
			"Z009_side_walk_1": "americaZombie",
			"Z009_side_walk_2": "americaZombie",
			"Z009_side_walk_3": "americaZombie",
			"Z009_side_walk_4": "americaZombie",
			"Z009_side_walk_5": "americaZombie",
			"Z010_front_attack_0": "americaZombie",
			"Z010_front_attack_1": "americaZombie",
			"Z010_front_walk_0": "americaZombie",
			"Z010_front_walk_1": "americaZombie",
			"Z010_side_attack_0": "americaZombie",
			"Z010_side_attack_1": "americaZombie",
			"Z010_side_walk_0": "americaZombie",
			"Z010_side_walk_1": "americaZombie",
			"Z010_side_walk_2": "americaZombie",
			"Z010_side_walk_3": "americaZombie",
			"Z010_side_walk_4": "americaZombie",
			"Z010_side_walk_5": "americaZombie",
			"Z010_side_walk_6": "americaZombie",
			"Z010_side_walk_7": "americaZombie",
			"Z011_front_attack_0": "americaZombie",
			"Z011_front_attack_1": "americaZombie",
			"Z011_front_walk_0": "americaZombie",
			"Z011_front_walk_1": "americaZombie",
			"Z011_side_attack_0": "americaZombie",
			"Z011_side_attack_1": "americaZombie",
			"Z011_side_walk_0": "americaZombie",
			"Z011_side_walk_1": "americaZombie",
			"Z011_side_walk_2": "americaZombie",
			"Z011_side_walk_3": "americaZombie",
			"Z011_side_walk_4": "americaZombie",
			"Z011_side_walk_5": "americaZombie",
			"Z011_side_walk_6": "americaZombie",
			"Z011_side_walk_7": "americaZombie",
			"Z012_front_attack_0": "americaZombie",
			"Z012_front_attack_1": "americaZombie",
			"Z012_front_walk_0": "americaZombie",
			"Z012_front_walk_1": "americaZombie",
			"Z012_side_attack_0": "americaZombie",
			"Z012_side_attack_1": "americaZombie",
			"Z012_side_walk_0": "americaZombie",
			"Z012_side_walk_1": "americaZombie",
			"Z012_side_walk_2": "americaZombie",
			"Z012_side_walk_3": "americaZombie",
			"Z012_side_walk_4": "americaZombie",
			"Z012_side_walk_5": "americaZombie",
			"Z014_front_attack_0": "americaZombie",
			"Z014_front_attack_1": "americaZombie",
			"Z014_front_attack_2": "americaZombie",
			"Z014_front_attack_3": "americaZombie",
			"Z014_front_attack_4": "americaZombie",
			"Z014_front_attack_5": "americaZombie",
			"Z014_front_attack_6": "americaZombie",
			"Z014_front_attack_7": "americaZombie",
			"Z014_front_walk_0": "americaZombie",
			"Z014_front_walk_1": "americaZombie",
			"Z014_front_walk_2": "americaZombie",
			"Z014_front_walk_3": "americaZombie",
			"Z014_front_walk_4": "americaZombie",
			"Z014_side_attack_0": "americaZombie",
			"Z014_side_attack_1": "americaZombie",
			"Z014_side_attack_2": "americaZombie",
			"Z014_side_attack_3": "americaZombie",
			"Z014_side_attack_4": "americaZombie",
			"Z014_side_attack_5": "americaZombie",
			"Z014_side_attack_6": "americaZombie",
			"Z014_side_attack_7": "americaZombie",
			"Z014_side_walk_0": "americaZombie",
			"Z014_side_walk_1": "americaZombie",
			"Z014_side_walk_2": "americaZombie",
			"Z014_side_walk_3": "americaZombie",
			"Z014_side_walk_4": "americaZombie",
			"Z015_front_walk_00": "americaZombie",
			"Z015_front_walk_01": "americaZombie",
			"Z015_front_walk_02": "americaZombie",
			"Z015_front_walk_03": "americaZombie",
			"Z015_side_walk_00": "americaZombie",
			"Z015_side_walk_01": "americaZombie",
			"Z015_side_walk_02": "americaZombie",
			"Z015_side_walk_03": "americaZombie",
			"Z015_side_walk_04": "americaZombie",
			"Z015_side_walk_05": "americaZombie",
			"Z015_side_walk_06": "americaZombie",
			"Z015_side_walk_07": "americaZombie",
			"Z015_side_walk_08": "americaZombie",
			"Z015_side_walk_09": "americaZombie",
			"Z015_side_walk_10": "americaZombie",
			"Z017_front_attack_0": "americaZombie",
			"Z017_front_attack_1": "americaZombie",
			"Z017_front_walk_0": "americaZombie",
			"Z017_front_walk_1": "americaZombie",
			"Z017_side_attack_0": "americaZombie",
			"Z017_side_attack_1": "americaZombie",
			"Z017_side_walk_0": "americaZombie",
			"Z017_side_walk_1": "americaZombie",
			"Z017_side_walk_2": "americaZombie",
			"Z017_side_walk_3": "americaZombie",
			"Z017_side_walk_4": "americaZombie",
			"Z017_side_walk_5": "americaZombie",
			"hit_ZB01_blood-00": "americaZombieBos",
			"hit_ZB01_blood-01": "americaZombieBos",
			"hit_ZB01_blood-02": "americaZombieBos",
			"hit_ZB01_blood-03": "americaZombieBos",
			"ZB01_front_attack_00": "americaZombieBos",
			"ZB01_front_attack_01": "americaZombieBos",
			"ZB01_front_attack_02": "americaZombieBos",
			"ZB01_front_attack_03": "americaZombieBos",
			"ZB01_front_attack_04": "americaZombieBos",
			"ZB01_front_attack_05": "americaZombieBos",
			"ZB01_front_attack_06": "americaZombieBos",
			"ZB01_front_attack_07": "americaZombieBos",
			"ZB01_front_attack_08": "americaZombieBos",
			"ZB01_front_attack_09": "americaZombieBos",
			"ZB01_front_attack_10": "americaZombieBos",
			"ZB01_front_attack_11": "americaZombieBos",
			"ZB01_front_attack_12": "americaZombieBos",
			"ZB01_front_die_00": "americaZombieBos",
			"ZB01_front_die_01": "americaZombieBos",
			"ZB01_front_die_02": "americaZombieBos",
			"ZB01_front_die_03": "americaZombieBos",
			"ZB01_front_die_04": "americaZombieBos",
			"ZB01_front_die_05": "americaZombieBos",
			"ZB01_front_die_06": "americaZombieBos",
			"ZB01_front_die_07": "americaZombieBos",
			"ZB01_front_die_08": "americaZombieBos",
			"ZB01_front_die_09": "americaZombieBos",
			"ZB01_front_die_10": "americaZombieBos",
			"ZB01_front_walk_00": "americaZombieBos",
			"ZB01_front_walk_01": "americaZombieBos",
			"ZB01_front_walk_02": "americaZombieBos",
			"ZB01_front_walk_03": "americaZombieBos",
			"ZB01_front_walk_04": "americaZombieBos",
			"ZB01_front_walk_05": "americaZombieBos",
			"ZB01_front_walk_06": "americaZombieBos",
			"ZB01_front_walk_07": "americaZombieBos",
			"ZB01_front_walk_08": "americaZombieBos",
			"ZB01_front_walk_09": "americaZombieBos",
			"ZB01_front_walk_10": "americaZombieBos",
			"ZB01_front_walk_11": "americaZombieBos",
			"ZB01_front_walk_12": "americaZombieBos",
			"ZB01_front_walk_13": "americaZombieBos",
			"ZB01_front_walk_14": "americaZombieBos",
			"ZB01_front_walk_15": "americaZombieBos",
			"ZB01_front_walk_16": "americaZombieBos",
			"ZB01_front_walk_17": "americaZombieBos",
			"ZB01_front_walk_18": "americaZombieBos",
			"ZB01_front_walk_19": "americaZombieBos",
			"ZB01_front_walk_20": "americaZombieBos",
			"ZB01_front_walk_21": "americaZombieBos",
			"ZB01_front_walk_22": "americaZombieBos",
			"ZB01_front_walk_23": "americaZombieBos",
			"ZB01_front_walk_24": "americaZombieBos",
			"ZB01_front_walk_25": "americaZombieBos",
			"ZB01_front_walk_26": "americaZombieBos",
			"ZB01_greenSmoke-00": "americaZombieBos",
			"ZB01_greenSmoke-02": "americaZombieBos",
			"ZB01_greenSmoke-04": "americaZombieBos",
			"ZB01_greenSmoke-06": "americaZombieBos",
			"ZB01_greenSmoke-08": "americaZombieBos",
			"ZB02SpecialHitPlayer-00": "americaZombieBos",
			"ZB02SpecialHitPlayer-01": "americaZombieBos",
			"ZB02SpecialHitPlayer-02": "americaZombieBos",
			"ZB02SpecialHitPlayer-03": "americaZombieBos",
			"ZB02SpecialHitPlayer-04": "americaZombieBos",
			"ZB02SpecialHitPlayer-05": "americaZombieBos",
			"ZB02SpecialHitPlayer-06": "americaZombieBos",
			"ZB02SpecialHitPlayer-07": "americaZombieBos",
			"ZB02SpecialHitPlayer-08": "americaZombieBos",
			"ZB02SpecialHitPlayer-09": "americaZombieBos",
			"ZB02_die_effect_00": "americaZombieBos",
			"ZB02_die_effect_01": "americaZombieBos",
			"ZB02_die_effect_02": "americaZombieBos",
			"ZB02_die_effect_03": "americaZombieBos",
			"ZB02_die_effect_04": "americaZombieBos",
			"ZB02_die_effect_05": "americaZombieBos",
			"ZB02_die_effect_06": "americaZombieBos",
			"ZB02_die_effect_07": "americaZombieBos",
			"ZB02_die_effect_08": "americaZombieBos",
			"ZB02_die_effect_09": "americaZombieBos",
			"ZB02_front_attackDiagonal_00": "americaZombieBos",
			"ZB02_front_attackDiagonal_01": "americaZombieBos",
			"ZB02_front_attackDiagonal_02": "americaZombieBos",
			"ZB02_front_attackDiagonal_03": "americaZombieBos",
			"ZB02_front_attackDiagonal_04": "americaZombieBos",
			"ZB02_front_attack_00": "americaZombieBos",
			"ZB02_front_attack_01": "americaZombieBos",
			"ZB02_front_attack_02": "americaZombieBos",
			"ZB02_front_attack_03": "americaZombieBos",
			"ZB02_front_attack_04": "americaZombieBos",
			"ZB02_front_die_00": "americaZombieBos",
			"ZB02_front_die_01": "americaZombieBos",
			"ZB02_front_die_02": "americaZombieBos",
			"ZB02_front_die_03": "americaZombieBos",
			"ZB02_front_die_04": "americaZombieBos",
			"ZB02_front_die_05": "americaZombieBos",
			"ZB02_front_die_06": "americaZombieBos",
			"ZB02_front_die_07": "americaZombieBos",
			"ZB02_front_die_08": "americaZombieBos",
			"ZB02_front_die_09": "americaZombieBos",
			"ZB02_front_die_10": "americaZombieBos",
			"ZB02_front_die_11": "americaZombieBos",
			"ZB02_front_die_12": "americaZombieBos",
			"ZB02_front_die_13": "americaZombieBos",
			"ZB02_front_die_14": "americaZombieBos",
			"ZB02_front_die_15": "americaZombieBos",
			"ZB02_front_die_16": "americaZombieBos",
			"ZB02_front_die_17": "americaZombieBos",
			"ZB02_front_die_18": "americaZombieBos",
			"ZB02_front_die_19": "americaZombieBos",
			"ZB02_front_die_20": "americaZombieBos",
			"ZB02_front_die_21": "americaZombieBos",
			"ZB02_front_die_22": "americaZombieBos",
			"ZB02_front_die_23": "americaZombieBos",
			"ZB02_front_walk_00": "americaZombieBos",
			"ZB02_front_walk_01": "americaZombieBos",
			"ZB02_front_walk_02": "americaZombieBos",
			"ZB02_front_walk_03": "americaZombieBos",
			"ZB02_front_walk_04": "americaZombieBos",
			"ZB02_front_walk_05": "americaZombieBos",
			"ZB02_front_walk_06": "americaZombieBos",
			"ZB02_front_walk_07": "americaZombieBos",
			"ZB02_front_walk_08": "americaZombieBos",
			"ZB02_front_walk_09": "americaZombieBos",
			"ZB02_front_walk_10": "americaZombieBos",
			"ZB02_front_walk_11": "americaZombieBos",
			"ZB02_front_walk_12": "americaZombieBos",
			"ZB02_front_walk_13": "americaZombieBos",
			"ZB02_front_walk_14": "americaZombieBos",
			"ZB02_front_walk_15": "americaZombieBos",
			"ZB02_side_walk_00": "americaZombieBos",
			"ZB02_side_walk_01": "americaZombieBos",
			"ZB02_side_walk_02": "americaZombieBos",
			"ZB02_side_walk_03": "americaZombieBos",
			"ZB02_side_walk_04": "americaZombieBos",
			"ZB02_side_walk_05": "americaZombieBos",
			"ZB02_side_walk_06": "americaZombieBos",
			"ZB02_side_walk_07": "americaZombieBos",
			"ZB02_side_walk_08": "americaZombieBos",
			"ZB02_side_walk_09": "americaZombieBos",
			"ZB02_side_walk_10": "americaZombieBos",
			"ZB02_side_walk_11": "americaZombieBos",
			"ZB02_side_walk_12": "americaZombieBos",
			"ZB02_side_walk_13": "americaZombieBos",
			"ZB02_side_walk_14": "americaZombieBos",
			"ZB02_side_walk_15": "americaZombieBos",
			"ZB02_special_attack_00": "americaZombieBos",
			"ZB02_special_attack_01": "americaZombieBos",
			"ZB02_special_attack_02": "americaZombieBos",
			"ZB02_special_attack_03": "americaZombieBos",
			"ZB02_special_attack_04": "americaZombieBos",
			"ZB02_special_attack_05": "americaZombieBos",
			"ZB02_special_attack_06": "americaZombieBos",
			"ZB02_special_attack_07": "americaZombieBos",
			"ZB02_special_attack_08": "americaZombieBos",
			"ZB02_special_attack_09": "americaZombieBos",
			"ZB02_special_attack_10": "americaZombieBos",
			"ZB02_special_attack_11": "americaZombieBos",
			"ZB02_special_attack_12": "americaZombieBos",
			"ZB02_special_attack_13": "americaZombieBos",
			"ZB02_special_attack_14": "americaZombieBos",
			"ZB02_special_attack_15": "americaZombieBos",
			"ZB02_special_attack_16": "americaZombieBos",
			"ZB02_special_attack_17": "americaZombieBos",
			"ZB02_special_attack_18": "americaZombieBos",
			"ZB02_special_attack_19": "americaZombieBos",
			"ZB02_special_attack_20": "americaZombieBos",
			"ZB02_special_attack_21": "americaZombieBos",
			"ZB02_special_attack_22": "americaZombieBos",
			"ZB02_special_effect_00": "americaZombieBos",
			"ZB02_special_effect_01": "americaZombieBos",
			"ZB02_special_effect_02": "americaZombieBos",
			"ZB02_special_effect_03": "americaZombieBos",
			"ZB02_special_effect_04": "americaZombieBos",
			"ZB02_special_effect_05": "americaZombieBos",
			"ZB02_special_effect_06": "americaZombieBos",
			"ZB02_special_effect_07": "americaZombieBos",
			"ZB02_special_effect_08": "americaZombieBos",
			"ZB02_special_effect_09": "americaZombieBos",
			"ZB02_special_effect_10": "americaZombieBos",
			"ZB02_special_effect_11": "americaZombieBos",
			"ZB02_special_effect_12": "americaZombieBos",
			"ZB02_special_effect_13": "americaZombieBos",
			"ZB02_special_effect_14": "americaZombieBos",
			"ZB02_special_effect_15": "americaZombieBos",
			"ZB02_special_effect_16": "americaZombieBos",
			"ZB02_special_effect_17": "americaZombieBos",
			"ZB02_special_effect_18": "americaZombieBos",
			"ZB03_front_attack_00": "americaZombieBos",
			"ZB03_front_attack_01": "americaZombieBos",
			"ZB03_front_attack_02": "americaZombieBos",
			"ZB03_front_attack_03": "americaZombieBos",
			"ZB03_front_attack_04": "americaZombieBos",
			"ZB03_front_attack_05": "americaZombieBos",
			"ZB03_front_attack_06": "americaZombieBos",
			"ZB03_front_attack_07": "americaZombieBos",
			"ZB03_front_attack_08": "americaZombieBos",
			"ZB03_front_attack_09": "americaZombieBos",
			"ZB03_front_attack_10": "americaZombieBos",
			"ZB03_front_walk_00": "americaZombieBos",
			"ZB03_front_walk_01": "americaZombieBos",
			"ZB03_front_walk_02": "americaZombieBos",
			"ZB03_front_walk_03": "americaZombieBos",
			"ZB03_front_walk_04": "americaZombieBos",
			"ZB03_front_walk_05": "americaZombieBos",
			"ZB03_front_walk_06": "americaZombieBos",
			"ZB03_front_walk_07": "americaZombieBos",
			"ZB03_front_walk_08": "americaZombieBos",
			"ZB03_front_walk_09": "americaZombieBos",
			"ZB03_front_walk_10": "americaZombieBos",
			"ZB03_front_walk_11": "americaZombieBos",
			"ZB03_front_walk_12": "americaZombieBos",
			"ZB03_front_walk_13": "americaZombieBos",
			"ZB03_front_walk_14": "americaZombieBos",
			"ZB03_front_walk_15": "americaZombieBos",
			"carBlueTerbalik-shadow": "america",
			"carBlueTerbalik": "america",
			"carLight": "america",
			"carLightL1002": "america",
			"carYellow-shadow": "america",
			"carYellow": "america",
			"hydrant": "america",
			"L1001": "america",
			"L1002": "america",
			"L1003": "america",
			"L1003Batu1": "america",
			"L1003Batu2": "america",
			"L1003Batu3": "america",
			"L1003Batu4": "america",
			"L1003pasir": "america",
			"L1004": "america",
			"L1004awan 1": "america",
			"L1004awan 2": "america",
			"L1004cahaya lampu": "america",
			"L1004lampu": "america",
			"L1004liberty hand": "america",
			"L1004liberty head": "america",
			"L1005": "america",
			"L1005atap": "america",
			"L1005Bgelap": "america",
			"L1005frame merah bos": "america",
			"L1005pintu jebol": "america",
			"L1005pohon atas": "america",
			"L1005tembok blkng": "america",
			"L1005tiang": "america",
			"lampu merah 1": "america",
			"lampu merah 2": "america",
			"pohon kanan shadow": "america",
			"pohon kanan": "america",
			"pohon kiri shadow": "america",
			"pohon kiri": "america",
			"pohon-0000": "america",
			"police car": "america",
			"tembokHancur_00": "america",
			"tembokHancur_01": "america",
			"tembokHancur_02": "america",
			"tembokHancur_03": "america",
			"tembokHancur_04": "america",
			"tembokHancur_05": "america",
			"tembokHancur_06": "america",
			"tembokHancur_07": "america",
			"tembokHancur_08": "america",
			"tembokHancur_09": "america",
			"tembokHancur_10": "america",
			"tembokHancur_11": "america",
			"tembokHancur_12": "america",
			"tembokHancur_13": "america",
			"tembokHancur_14": "america",
			"tembokHancur_15": "america",
			"arrow_left": "battle",
			"arrow_right": "battle",
			"Z002_front_attack_0": "asiaZombie",
			"Z002_front_attack_1": "asiaZombie",
			"Z002_front_walk_0": "asiaZombie",
			"Z002_front_walk_1": "asiaZombie",
			"Z002_side_attack_0": "asiaZombie",
			"Z002_side_attack_1": "asiaZombie",
			"Z002_side_walk_0": "asiaZombie",
			"Z002_side_walk_1": "asiaZombie",
			"Z002_side_walk_2": "asiaZombie",
			"Z002_side_walk_3": "asiaZombie",
			"Z002_side_walk_4": "asiaZombie",
			"Z027_front_attack_0": "asiaZombie",
			"Z027_front_attack_1": "asiaZombie",
			"Z027_front_attack_2": "asiaZombie",
			"Z027_front_walk_0": "asiaZombie",
			"Z027_front_walk_1": "asiaZombie",
			"Z027_front_walk_2": "asiaZombie",
			"Z027_side_attack_0": "asiaZombie",
			"Z027_side_attack_1": "asiaZombie",
			"Z027_side_walk_0": "asiaZombie",
			"Z027_side_walk_1": "asiaZombie",
			"Z027_side_walk_2": "asiaZombie",
			"Z028_front_attack_0": "asiaZombie",
			"Z028_front_attack_1": "asiaZombie",
			"Z028_front_walk_0": "asiaZombie",
			"Z028_front_walk_1": "asiaZombie",
			"Z028_front_walk_2": "asiaZombie",
			"Z028_side_attack_0": "asiaZombie",
			"Z028_side_attack_1": "asiaZombie",
			"Z028_side_walk_0": "asiaZombie",
			"Z028_side_walk_1": "asiaZombie",
			"Z028_side_walk_2": "asiaZombie",
			"Z031_front_attack_0": "asiaZombie",
			"Z031_front_attack_1": "asiaZombie",
			"Z031_front_attack_2": "asiaZombie",
			"Z031_front_attack_3": "asiaZombie",
			"Z031_front_walk_0": "asiaZombie",
			"Z031_front_walk_1": "asiaZombie",
			"Z031_front_walk_2": "asiaZombie",
			"Z031_front_walk_3": "asiaZombie",
			"Z031_side_attack_0": "asiaZombie",
			"Z031_side_attack_1": "asiaZombie",
			"Z031_side_attack_2": "asiaZombie",
			"Z031_side_attack_3": "asiaZombie",
			"Z031_side_walk_0": "asiaZombie",
			"Z031_side_walk_1": "asiaZombie",
			"Z031_side_walk_2": "asiaZombie",
			"Z031_side_walk_3": "asiaZombie",
			"ZB07_front_attack_0": "asiaZombieBos",
			"ZB07_front_attack_1": "asiaZombieBos",
			"ZB07_front_attack_2": "asiaZombieBos",
			"ZB07_front_attack_3": "asiaZombieBos",
			"ZB07_front_attack_4": "asiaZombieBos",
			"ZB07_front_attack_5": "asiaZombieBos",
			"ZB07_front_attack_6": "asiaZombieBos",
			"ZB07_front_attack_7": "asiaZombieBos",
			"ZB07_front_walk_0": "asiaZombieBos",
			"ZB07_front_walk_1": "asiaZombieBos",
			"ZB07_front_walk_2": "asiaZombieBos",
			"ZB07_front_walk_3": "asiaZombieBos",
			"ZB07_front_walk_4": "asiaZombieBos",
			"ZB08_attack_0": "asiaZombieBos",
			"ZB08_attack_1": "asiaZombieBos",
			"ZB08_attack_2": "asiaZombieBos",
			"ZB08_attack_3": "asiaZombieBos",
			"ZB08_attack_4": "asiaZombieBos",
			"ZB08_attack_5": "asiaZombieBos",
			"ZB08_attack_6": "asiaZombieBos",
			"ZB08_attack_7": "asiaZombieBos",
			"ZB08_attack_8": "asiaZombieBos",
			"ZB08_attack_9": "asiaZombieBos",
			"ZB08_dead_0": "asiaZombieBos",
			"ZB08_dead_1": "asiaZombieBos",
			"ZB08_dead_2": "asiaZombieBos",
			"ZB08_dead_3": "asiaZombieBos",
			"ZB08_dead_4": "asiaZombieBos",
			"ZB08_idle_0": "asiaZombieBos",
			"ZB08_idle_1": "asiaZombieBos",
			"ZB08_idle_2": "asiaZombieBos",
			"ZB08_idle_3": "asiaZombieBos",
			"ZB08_idle_4": "asiaZombieBos",
			"ZB08_idle_5": "asiaZombieBos",
			"ZB08_idle_6": "asiaZombieBos",
			"ZB08_idle_7": "asiaZombieBos",
			"ZB08_idle_8": "asiaZombieBos",
			"ZB08_idle_9": "asiaZombieBos",
			"fallen_smoke_0": "asia",
			"fallen_smoke_1": "asia",
			"fallen_smoke_2": "asia",
			"fallen_smoke_3": "asia",
			"fallen_smoke_4": "asia",
			"L5001_BATU1": "asia",
			"L5001_BATU2": "asia",
			"L5001_BIS": "asia",
			"L5001_monas BG": "asia",
			"L5001_MONAS EMAS": "asia",
			"L5001_monas preview": "asia",
			"L5001_POHON KANAN": "asia",
			"L5001_POHON KIRI": "asia",
			"L5002_china BG": "asia",
			"L5002_pilar colision 1": "asia",
			"L5002_pilar colision 2": "asia",
			"L5002_pilar collision 3": "asia",
			"L5002_pilar": "asia",
			"L5002_pillar collision 4": "asia",
			"L5002_pohonatas": "asia",
			"L5002_prevIew": "asia",
			"L5002_tangga kanan": "asia",
			"L5002_tangga kiri": "asia",
			"L5003cahaya lampu": "asia",
			"L5003_background": "asia",
			"L5003_gedung kanan": "asia",
			"L5003_gedung kiri": "asia",
			"L5003_lampu": "asia",
			"L5003_pohon kanan": "asia",
			"L5003_pohon kiri": "asia",
			"L5003_stage -japan": "asia",
			"L5004_pohon atas": "asia",
			"L5004_semak kanan": "asia",
			"L5004_semak kiri": "asia",
			"L5004_stage - japan temple": "asia",
			"L5004_tiang kanan Layer depan": "asia",
			"L5004_tiang kanan": "asia",
			"L5004_tiang kiri Layer depan": "asia",
			"L5004_tiang kiri": "asia",
			"L5005Bgelap": "asia",
			"L5005_japan boss temple bg": "asia",
			"L5005_japan boss temple preview": "asia",
			"L5005_lampu kanan": "asia",
			"L5005_lampu kiri": "asia",
			"L5005_pohon atas": "asia",
			"Z033_boomerang_0": "australiaZombie",
			"Z033_boomerang_1": "australiaZombie",
			"Z033_boomerang_2": "australiaZombie",
			"Z033_boomerang_3": "australiaZombie",
			"Z033_boomerang_4": "australiaZombie",
			"Z033_boomerang_idle_1": "australiaZombie",
			"Z033_boomerang_idle_2": "australiaZombie",
			"Z033_boomerang_idle_3": "australiaZombie",
			"Z033_boomerang_idle_4": "australiaZombie",
			"Z033_front_attack_0": "australiaZombie",
			"Z033_front_attack_1": "australiaZombie",
			"Z033_front_attack_2": "australiaZombie",
			"Z033_front_attack_3": "australiaZombie",
			"Z033_front_attack_4": "australiaZombie",
			"Z033_front_attack_5": "australiaZombie",
			"Z033_front_attack_6": "australiaZombie",
			"Z033_front_attack_7": "australiaZombie",
			"Z033_front_attack_8": "australiaZombie",
			"Z033_front_attack_9": "australiaZombie",
			"Z033_front_walk_0": "australiaZombie",
			"Z033_front_walk_1": "australiaZombie",
			"Z033_front_walk_2": "australiaZombie",
			"Z033_front_walk_3": "australiaZombie",
			"Z033_front_walk_4": "australiaZombie",
			"Z033_side_attack_0": "australiaZombie",
			"Z033_side_attack_1": "australiaZombie",
			"Z033_side_attack_2": "australiaZombie",
			"Z033_side_attack_3": "australiaZombie",
			"Z033_side_attack_4": "australiaZombie",
			"Z033_side_attack_5": "australiaZombie",
			"Z033_side_attack_6": "australiaZombie",
			"Z033_side_attack_7": "australiaZombie",
			"Z033_side_attack_8": "australiaZombie",
			"Z033_side_attack_9": "australiaZombie",
			"Z033_side_walk_0": "australiaZombie",
			"Z033_side_walk_1": "australiaZombie",
			"Z033_side_walk_2": "australiaZombie",
			"Z033_side_walk_3": "australiaZombie",
			"Z033_side_walk_4": "australiaZombie",
			"Z034_front_attack_0": "australiaZombie",
			"Z034_front_attack_1": "australiaZombie",
			"Z034_front_attack_2": "australiaZombie",
			"Z034_front_walk_0": "australiaZombie",
			"Z034_front_walk_1": "australiaZombie",
			"Z034_side_attack_0": "australiaZombie",
			"Z034_side_attack_1": "australiaZombie",
			"Z034_side_attack_2": "australiaZombie",
			"Z034_side_walk_0": "australiaZombie",
			"Z034_side_walk_1": "australiaZombie",
			"Z034_side_walk_2": "australiaZombie",
			"Z034_side_walk_3": "australiaZombie",
			"Z035_front_attack_0": "australiaZombie",
			"Z035_front_attack_1": "australiaZombie",
			"Z035_front_attack_2": "australiaZombie",
			"Z035_front_attack_3": "australiaZombie",
			"Z035_front_attack_4": "australiaZombie",
			"Z035_front_attack_5": "australiaZombie",
			"Z035_front_attack_6": "australiaZombie",
			"Z035_front_attack_7": "australiaZombie",
			"Z035_front_walk_0": "australiaZombie",
			"Z035_front_walk_1": "australiaZombie",
			"Z035_front_walk_2": "australiaZombie",
			"Z035_front_walk_3": "australiaZombie",
			"Z035_front_walk_4": "australiaZombie",
			"Z035_head": "australiaZombie",
			"Z035_side_attack_0": "australiaZombie",
			"Z035_side_attack_1": "australiaZombie",
			"Z035_side_attack_2": "australiaZombie",
			"Z035_side_attack_3": "australiaZombie",
			"Z035_side_attack_4": "australiaZombie",
			"Z035_side_attack_5": "australiaZombie",
			"Z035_side_attack_6": "australiaZombie",
			"Z035_side_attack_7": "australiaZombie",
			"Z035_side_walk_0": "australiaZombie",
			"Z035_side_walk_1": "australiaZombie",
			"Z035_side_walk_2": "australiaZombie",
			"Z035_side_walk_3": "australiaZombie",
			"Z035_side_walk_4": "australiaZombie",
			"Z036_front_attack_0": "australiaZombie",
			"Z036_front_attack_1": "australiaZombie",
			"Z036_front_walk_0": "australiaZombie",
			"Z036_front_walk_1": "australiaZombie",
			"Z036_side_attack_0": "australiaZombie",
			"Z036_side_attack_1": "australiaZombie",
			"Z036_side_walk_0": "australiaZombie",
			"Z036_side_walk_1": "australiaZombie",
			"Z036_side_walk_2": "australiaZombie",
			"Z036_side_walk_3": "australiaZombie",
			"Z036_side_walk_4": "australiaZombie",
			"Z036_side_walk_5": "australiaZombie",
			"Z036_side_walk_6": "australiaZombie",
			"Z036_side_walk_7": "australiaZombie",
			"Z037_front_attack_0": "australiaZombie",
			"Z037_front_attack_1": "australiaZombie",
			"Z037_front_walk_0": "australiaZombie",
			"Z037_front_walk_1": "australiaZombie",
			"Z037_side_attack_0": "australiaZombie",
			"Z037_side_attack_1": "australiaZombie",
			"Z037_side_walk_0": "australiaZombie",
			"Z037_side_walk_1": "australiaZombie",
			"Z037_side_walk_2": "australiaZombie",
			"Z037_side_walk_3": "australiaZombie",
			"Z037_side_walk_4": "australiaZombie",
			"Z037_side_walk_5": "australiaZombie",
			"Z037_side_walk_6": "australiaZombie",
			"Z037_side_walk_7": "australiaZombie",
			"Z038_front_attack_0": "australiaZombie",
			"Z038_front_attack_1": "australiaZombie",
			"Z038_front_walk_0": "australiaZombie",
			"Z038_front_walk_1": "australiaZombie",
			"Z038_side_attack_0": "australiaZombie",
			"Z038_side_attack_1": "australiaZombie",
			"Z038_side_walk_0": "australiaZombie",
			"Z038_side_walk_1": "australiaZombie",
			"Z038_side_walk_2": "australiaZombie",
			"Z038_side_walk_3": "australiaZombie",
			"Z038_side_walk_4": "australiaZombie",
			"Z038_side_walk_5": "australiaZombie",
			"Z038_side_walk_6": "australiaZombie",
			"Z038_side_walk_7": "australiaZombie",
			"roarr": "australiaZombieBos",
			"sikil_1": "australiaZombieBos",
			"sikil_2": "australiaZombieBos",
			"ZB09_attack_00": "australiaZombieBos",
			"ZB09_attack_01": "australiaZombieBos",
			"ZB09_attack_02": "australiaZombieBos",
			"ZB09_attack_03": "australiaZombieBos",
			"ZB09_attack_04": "australiaZombieBos",
			"ZB09_attack_05": "australiaZombieBos",
			"ZB09_attack_06": "australiaZombieBos",
			"ZB09_attack_07": "australiaZombieBos",
			"ZB09_attack_08": "australiaZombieBos",
			"ZB09_attack_09": "australiaZombieBos",
			"ZB09_dead_00": "australiaZombieBos",
			"ZB09_dead_01": "australiaZombieBos",
			"ZB09_dead_02": "australiaZombieBos",
			"ZB09_dead_03": "australiaZombieBos",
			"ZB09_dead_04": "australiaZombieBos",
			"ZB09_dead_05": "australiaZombieBos",
			"ZB09_dead_06": "australiaZombieBos",
			"ZB09_dead_07": "australiaZombieBos",
			"ZB09_dead_08": "australiaZombieBos",
			"ZB09_dead_09": "australiaZombieBos",
			"ZB09_dead_10": "australiaZombieBos",
			"ZB09_dead_11": "australiaZombieBos",
			"ZB09_dead_12": "australiaZombieBos",
			"ZB09_listrik_00": "australiaZombieBos",
			"ZB09_listrik_01": "australiaZombieBos",
			"ZB09_listrik_02": "australiaZombieBos",
			"ZB09_listrik_03": "australiaZombieBos",
			"ZB09_listrik_04": "australiaZombieBos",
			"ZB09_listrik_05": "australiaZombieBos",
			"ZB09_walk_00": "australiaZombieBos",
			"ZB09_walk_01": "australiaZombieBos",
			"ZB09_walk_02": "australiaZombieBos",
			"ZB09_walk_03": "australiaZombieBos",
			"ZB09_walk_04": "australiaZombieBos",
			"ZB09_walk_05": "australiaZombieBos",
			"ZB09_walk_06": "australiaZombieBos",
			"ZB09_walk_07": "australiaZombieBos",
			"Australia_Pasir": "australia",
			"L6001_batang": "australia",
			"L6001_BG": "australia",
			"L6001_desert 1 preview": "australia",
			"L6001_pohon": "australia",
			"L6002_background": "australia",
			"L6002_bis": "australia",
			"L6002_lampu bis": "australia",
			"L6002_mobil": "australia",
			"L6002_preview desert road": "australia",
			"L6003awan 1": "australia",
			"L6003awan 2": "australia",
			"L6003Bgelap": "australia",
			"L6003_background": "australia",
			"L6003_barrier": "australia",
			"L6003_boss crossroad preview": "australia",
			"L6003_cone": "australia",
			"L6003_dead crossroad bg": "australia",
			"L6003_dead crossroad preview": "australia",
			"L6003_polisi car": "australia",
			"L6003_shadow top": "australia",
			"L6003_SmokeCar_1": "australia",
			"L6003_SmokeCar_2": "australia",
			"L6003_SmokeCar_3": "australia",
			"L6003_SmokeCar_4": "australia",
			"L6003_SmokeCar_5": "australia",
			"L6003_SmokeCar_6": "australia",
			"L6003_SmokeCar_7": "australia",
			"L6003_SmokeCar_8": "australia",
			"Bg-gameover": "battle",
			"bg-item": "battle",
			"BG-victory": "battle",
			"Black-Panel": "battle",
			"bullet-flame": "battle",
			"bullet-ovalBlue": "battle",
			"bullet-ovalOrange": "battle",
			"bullet-squareBlue": "battle",
			"bullet-squareOrange": "battle",
			"button senjta": "battle",
			"character-000": "character",
			"character-001": "character",
			"character-002": "character",
			"character-003": "character",
			"character-004": "character",
			"character-005": "character",
			"character-006": "character",
			"character-007": "character",
			"character-008": "character",
			"character-009": "character",
			"character-010": "character",
			"character-011": "character",
			"character-012": "character",
			"character-013": "character",
			"character-014": "character",
			"character-015": "character",
			"character-016": "character",
			"character-017": "character",
			"character-018": "character",
			"character-019": "character",
			"character-020": "character",
			"character-021": "character",
			"character-022": "character",
			"character-023": "character",
			"character-024": "character",
			"character-025": "character",
			"character-026": "character",
			"character-027": "character",
			"character-028": "character",
			"character-029": "character",
			"character-030": "character",
			"character-031": "character",
			"character-032": "character",
			"character-033": "character",
			"character-034": "character",
			"character-035": "character",
			"character-036": "character",
			"character-037": "character",
			"character-038": "character",
			"character-039": "character",
			"character-040": "character",
			"character-041": "character",
			"character-042": "character",
			"character-043": "character",
			"character-044": "character",
			"character-045": "character",
			"character-046": "character",
			"character-047": "character",
			"character-048": "character",
			"character-049": "character",
			"character-050": "character",
			"character-051": "character",
			"character-052": "character",
			"character-053": "character",
			"character-054": "character",
			"character-055": "character",
			"character-056": "character",
			"character-057": "character",
			"character-058": "character",
			"character-059": "character",
			"character-060": "character",
			"character-061": "character",
			"character-062": "character",
			"character-063": "character",
			"character-064": "character",
			"character-065": "character",
			"character-066": "character",
			"character-067": "character",
			"character-068": "character",
			"character-069": "character",
			"character-070": "character",
			"character-071": "character",
			"character-072": "character",
			"character-073": "character",
			"character-074": "character",
			"character-075": "character",
			"character-076": "character",
			"character-077": "character",
			"character-078": "character",
			"character-079": "character",
			"character-080": "character",
			"character-081": "character",
			"character-082": "character",
			"character-083": "character",
			"character-084": "character",
			"character-085": "character",
			"character-086": "character",
			"character-087": "character",
			"character-088": "character",
			"character-089": "character",
			"character-090": "character",
			"character-091": "character",
			"character-092": "character",
			"character-093": "character",
			"character-094": "character",
			"character-095": "character",
			"character-096": "character",
			"character-097": "character",
			"character-098": "character",
			"character-099": "character",
			"character-100": "character",
			"character-101": "character",
			"character-102": "character",
			"character-103": "character",
			"character-104": "character",
			"character-105": "character",
			"character-106": "character",
			"character-107": "character",
			"character-108": "character",
			"character-109": "character",
			"character-110": "character",
			"character-111": "character",
			"character-112": "character",
			"character-113": "character",
			"chemical Inactive": "battle",
			"chemical": "battle",
			"coinIcon2": "battle",
			"continue": "battle",
			"cursor": "battle",
			"animCoin-00": "effect",
			"animCoin-10": "effect",
			"animCoin-13": "effect",
			"animCoin-16": "effect",
			"animCoin-19": "effect",
			"darah muncratt": "effect",
			"dieMeat-01": "effect",
			"dieMeat-04": "effect",
			"dieMeat-13": "effect",
			"dieMeat-16": "effect",
			"dieMeat-19": "effect",
			"dieSkull-01": "effect",
			"dieSkull-04": "effect",
			"dieSkull-13": "effect",
			"dieSkull-16": "effect",
			"dieSkull-19": "effect",
			"hitObject-2": "effect",
			"hitObject-5": "effect",
			"hitObject-7": "effect",
			"hitZombie-4": "effect",
			"listrik-zombie": "effect",
			"listrik-zombie2": "effect",
			"misiles effect-0000": "effect",
			"misiles explosion-0000": "effect",
			"misiles explosion-0001": "effect",
			"misiles explosion-0002": "effect",
			"misiles explosion-0003": "effect",
			"misiles explosion-0004": "effect",
			"misiles explosion-0005": "effect",
			"misiles explosion-0006": "effect",
			"poison fx": "effect",
			"skill_chemical_00": "effect",
			"skill_chemical_01": "effect",
			"skill_chemical_02": "effect",
			"skill_chemical_03": "effect",
			"skill_chemical_04": "effect",
			"skill_chemical_05": "effect",
			"skill_chemical_06": "effect",
			"skill_chemical_07": "effect",
			"skill_chemical_08": "effect",
			"skill_chemical_09": "effect",
			"skill_chemical_10": "effect",
			"skill_chemical_11": "effect",
			"skill_chemical_12": "effect",
			"skill_chemical_13": "effect",
			"skill_chemical_14": "effect",
			"skill_nuke_00": "effect",
			"skill_nuke_01": "effect",
			"skill_nuke_02": "effect",
			"skill_nuke_03": "effect",
			"skill_nuke_04": "effect",
			"skill_nuke_05": "effect",
			"skill_nuke_06": "effect",
			"skill_nuke_07": "effect",
			"skill_nuke_08": "effect",
			"skill_nuke_09": "effect",
			"skill_nuke_10": "effect",
			"skill_nuke_11": "effect",
			"skill_nuke_12": "effect",
			"skill_nuke_13": "effect",
			"skill_nuke_14": "effect",
			"thunderbolt effect-0000": "effect",
			"thunderbolt effect-0001": "effect",
			"thunderbolt effect-0002": "effect",
			"thunderbolt effect-0003": "effect",
			"thunderbolt effect-0004": "effect",
			"thunderbolt effect-0005": "effect",
			"thunderbolt effect-0006": "effect",
			"thunderbolt effect-0007": "effect",
			"thunderbolt effect-008": "effect",
			"thunderbolt effect-009": "effect",
			"WP0004_explosion_00": "effect",
			"WP0004_explosion_04": "effect",
			"WP0004_explosion_08": "effect",
			"WP0004_explosion_12": "effect",
			"WP0004_explosion_13": "effect",
			"WP0007_explosion_0": "effect",
			"WP0007_explosion_2": "effect",
			"WP0007_explosion_4": "effect",
			"WP0007_explosion_5": "effect",
			"WP0008_explosion_04": "effect",
			"WP0008_explosion_10": "effect",
			"WP0008_explosion_11": "effect",
			"WP0008_explosion_15": "effect",
			"WP0009_explosion_10": "effect",
			"WP0009_explosion_15": "effect",
			"WP0009_explosion_17": "effect",
			"WP0009_explosion_19": "effect",
			"zombieHitPlayer-01": "effect",
			"zombieHitPlayer-05": "effect",
			"zombieHitPlayer-06": "effect",
			"atap kanan": "eropa",
			"atap kiri": "eropa",
			"athena temple": "eropa",
			"backgroundEropa1": "eropa",
			"backgroundEropa2": "eropa",
			"backgroundEropa3": "eropa",
			"backgroundEropa4": "eropa",
			"backgroundEropa5": "eropa",
			"batu kanan": "eropa",
			"batu kiri1": "eropa",
			"batu kiri2": "eropa",
			"batu1": "eropa",
			"batu2": "eropa",
			"booth telp": "eropa",
			"box patung": "eropa",
			"city": "eropa",
			"colosseum": "eropa",
			"Z023_front_attack_0": "eropaZombie",
			"Z023_front_attack_1": "eropaZombie",
			"Z023_front_walk_0": "eropaZombie",
			"Z023_front_walk_1": "eropaZombie",
			"Z023_front_walk_2": "eropaZombie",
			"Z023_front_walk_3": "eropaZombie",
			"Z023_side_attack_0": "eropaZombie",
			"Z023_side_attack_1": "eropaZombie",
			"Z023_side_walk_0": "eropaZombie",
			"Z023_side_walk_1": "eropaZombie",
			"Z023_side_walk_2": "eropaZombie",
			"Z023_side_walk_3": "eropaZombie",
			"Z024-guitar-00": "eropaZombie",
			"Z024-guitar-01": "eropaZombie",
			"Z024-guitar-02": "eropaZombie",
			"Z024-guitar-03": "eropaZombie",
			"Z024-guitar-04": "eropaZombie",
			"Z024-guitar-05": "eropaZombie",
			"Z024-guitar-06": "eropaZombie",
			"Z024-guitar-07": "eropaZombie",
			"Z024-guitar-08": "eropaZombie",
			"Z024-guitar-09": "eropaZombie",
			"Z024-guitar-10": "eropaZombie",
			"Z024-guitar-11": "eropaZombie",
			"Z024-guitar-12": "eropaZombie",
			"Z024-guitar-13": "eropaZombie",
			"Z024-guitar-14": "eropaZombie",
			"Z024-guitar-15": "eropaZombie",
			"Z024-walk-00": "eropaZombie",
			"Z024-walk-01": "eropaZombie",
			"Z024-walk-02": "eropaZombie",
			"Z024-walk-03": "eropaZombie",
			"Z024-walk-04": "eropaZombie",
			"Z024-walk-05": "eropaZombie",
			"Z024-walk-06": "eropaZombie",
			"Z024-walk-07": "eropaZombie",
			"Z024-walk-08": "eropaZombie",
			"Z024-walk-09": "eropaZombie",
			"Z024-walk-10": "eropaZombie",
			"Z024-walk-11": "eropaZombie",
			"Z024-walk-12": "eropaZombie",
			"Z024-walk-13": "eropaZombie",
			"Z024-walk-14": "eropaZombie",
			"Z025_front_attack_0": "eropaZombie",
			"Z025_front_attack_1": "eropaZombie",
			"Z025_front_walk_0": "eropaZombie",
			"Z025_front_walk_1": "eropaZombie",
			"Z025_front_walk_2": "eropaZombie",
			"Z025_front_walk_3": "eropaZombie",
			"Z025_side_attack_0": "eropaZombie",
			"Z025_side_attack_1": "eropaZombie",
			"Z025_side_walk_0": "eropaZombie",
			"Z025_side_walk_1": "eropaZombie",
			"Z025_side_walk_2": "eropaZombie",
			"Z025_side_walk_3": "eropaZombie",
			"ZB05-front-attack-01": "eropaZombieBos",
			"ZB05-front-attack-02": "eropaZombieBos",
			"ZB05-front-attack-03": "eropaZombieBos",
			"ZB05-front-attack-04": "eropaZombieBos",
			"ZB05-front-attack-05": "eropaZombieBos",
			"ZB05-front-attack-06": "eropaZombieBos",
			"ZB05-front-attack-07": "eropaZombieBos",
			"ZB05-front-attack-08": "eropaZombieBos",
			"ZB05-front-attack-09": "eropaZombieBos",
			"ZB05-front-attack-10": "eropaZombieBos",
			"ZB05-front-attack-11": "eropaZombieBos",
			"ZB05-front-attack-12": "eropaZombieBos",
			"ZB05-front-walk-01": "eropaZombieBos",
			"ZB05-front-walk-02": "eropaZombieBos",
			"ZB05-front-walk-03": "eropaZombieBos",
			"ZB05-front-walk-04": "eropaZombieBos",
			"ZB05-front-walk-05": "eropaZombieBos",
			"ZB05-front-walk-06": "eropaZombieBos",
			"ZB05-front-walk-07": "eropaZombieBos",
			"ZB05-front-walk-08": "eropaZombieBos",
			"ZB05-front-walk-09": "eropaZombieBos",
			"ZB05-front-walk-10": "eropaZombieBos",
			"ZB05-front-walk-11": "eropaZombieBos",
			"ZB05-front-walk-12": "eropaZombieBos",
			"ZB05-front-walk-13": "eropaZombieBos",
			"ZB05-front-walk-14": "eropaZombieBos",
			"ZB05-front-walk-15": "eropaZombieBos",
			"ZB05-front-walk-16": "eropaZombieBos",
			"ZB05-front-walk-17": "eropaZombieBos",
			"ZB05-front-walk-18": "eropaZombieBos",
			"ZB05-front-walk-19": "eropaZombieBos",
			"ZB06_dead_00": "eropaZombieBos",
			"ZB06_dead_01": "eropaZombieBos",
			"ZB06_dead_02": "eropaZombieBos",
			"ZB06_dead_03": "eropaZombieBos",
			"ZB06_dead_04": "eropaZombieBos",
			"ZB06_dead_05": "eropaZombieBos",
			"ZB06_dead_06": "eropaZombieBos",
			"ZB06_dead_07": "eropaZombieBos",
			"ZB06_dead_08": "eropaZombieBos",
			"ZB06_dead_09": "eropaZombieBos",
			"ZB06_dead_10": "eropaZombieBos",
			"ZB06_dead_11": "eropaZombieBos",
			"ZB06_dead_12": "eropaZombieBos",
			"ZB06_dead_13": "eropaZombieBos",
			"ZB06_dead_14": "eropaZombieBos",
			"ZB06_dead_15": "eropaZombieBos",
			"ZB06_dead_16": "eropaZombieBos",
			"ZB06_dead_17": "eropaZombieBos",
			"ZB06_dead_18": "eropaZombieBos",
			"ZB06_dead_19": "eropaZombieBos",
			"ZB06_dead_20": "eropaZombieBos",
			"ZB06_dead_21": "eropaZombieBos",
			"ZB06_dead_22": "eropaZombieBos",
			"ZB06_dead_23": "eropaZombieBos",
			"ZB06_dead_24": "eropaZombieBos",
			"ZB06_front_attack_00": "eropaZombieBos",
			"ZB06_front_attack_01": "eropaZombieBos",
			"ZB06_front_attack_02": "eropaZombieBos",
			"ZB06_front_attack_03": "eropaZombieBos",
			"ZB06_front_attack_04": "eropaZombieBos",
			"ZB06_front_attack_05": "eropaZombieBos",
			"ZB06_front_attack_06": "eropaZombieBos",
			"ZB06_front_attack_07": "eropaZombieBos",
			"ZB06_front_attack_08": "eropaZombieBos",
			"ZB06_front_attack_09": "eropaZombieBos",
			"ZB06_front_attack_10": "eropaZombieBos",
			"ZB06_front_attack_11": "eropaZombieBos",
			"ZB06_front_attack_12": "eropaZombieBos",
			"ZB06_front_attack_13": "eropaZombieBos",
			"ZB06_front_attack_14": "eropaZombieBos",
			"ZB06_front_attack_15": "eropaZombieBos",
			"ZB06_front_attack_16": "eropaZombieBos",
			"ZB06_front_attack_17": "eropaZombieBos",
			"ZB06_front_attack_18": "eropaZombieBos",
			"ZB06_front_attack_19": "eropaZombieBos",
			"ZB06_front_attack_20": "eropaZombieBos",
			"ZB06_front_attack_21": "eropaZombieBos",
			"ZB06_front_attack_22": "eropaZombieBos",
			"ZB06_front_attack_23": "eropaZombieBos",
			"ZB06_front_attack_24": "eropaZombieBos",
			"ZB06_front_attack_25": "eropaZombieBos",
			"ZB06_front_attack_26": "eropaZombieBos",
			"ZB06_front_attack_27": "eropaZombieBos",
			"ZB06_front_attack_28": "eropaZombieBos",
			"ZB06_front_attack_29": "eropaZombieBos",
			"ZB06_front_attack_30": "eropaZombieBos",
			"ZB06_front_attack_31": "eropaZombieBos",
			"ZB06_front_attack_32": "eropaZombieBos",
			"ZB06_front_attack_33": "eropaZombieBos",
			"ZB06_front_attack_34": "eropaZombieBos",
			"ZB06_front_attack_35": "eropaZombieBos",
			"ZB06_front_attack_36": "eropaZombieBos",
			"ZB06_front_attack_37": "eropaZombieBos",
			"ZB06_front_attack_38": "eropaZombieBos",
			"ZB06_front_attack_39": "eropaZombieBos",
			"ZB06_front_attack_40": "eropaZombieBos",
			"ZB06_front_attack_41": "eropaZombieBos",
			"ZB06_front_attack_42": "eropaZombieBos",
			"ZB06_front_attack_43": "eropaZombieBos",
			"ZB06_front_attack_44": "eropaZombieBos",
			"ZB06_front_walk_00": "eropaZombieBos",
			"ZB06_front_walk_01": "eropaZombieBos",
			"ZB06_front_walk_02": "eropaZombieBos",
			"ZB06_front_walk_03": "eropaZombieBos",
			"ZB06_front_walk_04": "eropaZombieBos",
			"ZB06_front_walk_05": "eropaZombieBos",
			"ZB06_front_walk_06": "eropaZombieBos",
			"ZB06_front_walk_07": "eropaZombieBos",
			"ZB06_front_walk_08": "eropaZombieBos",
			"ZB06_front_walk_09": "eropaZombieBos",
			"ZB06_front_walk_10": "eropaZombieBos",
			"ZB06_front_walk_11": "eropaZombieBos",
			"ZB06_front_walk_12": "eropaZombieBos",
			"ZB06_front_walk_13": "eropaZombieBos",
			"ZB06_front_walk_14": "eropaZombieBos",
			"ZB06_projectile_0": "eropaZombieBos",
			"ZB06_projectile_1": "eropaZombieBos",
			"ZB06_projectile_2": "eropaZombieBos",
			"ZB06_projectile_3": "eropaZombieBos",
			"ZB06_projectile_4": "eropaZombieBos",
			"ZB06_projectile_5": "eropaZombieBos",
			"ZB06_projectile_6": "eropaZombieBos",
			"ZB06_projectile_7": "eropaZombieBos",
			"Eropa_Pasir": "eropa",
			"jalan1": "eropa",
			"L3001awan 1": "eropa",
			"L3001awan 2": "eropa",
			"loading-lightConcert": "eropa",
			"monumen": "eropa",
			"patung": "eropa",
			"pembatas 1": "eropa",
			"pembatas jalan": "eropa",
			"pembatas2": "eropa",
			"penghalang 1": "eropa",
			"pilar kanan": "eropa",
			"pilar kiri 2": "eropa",
			"pilar kiri": "eropa",
			"pohon kiri eropa": "eropa",
			"rumput": "eropa",
			"telp": "eropa",
			"tempat duduk": "eropa",
			"water fountain town b": "eropa",
			"water fountain town": "eropa",
			"fire button": "battle",
			"gembok skill": "battle",
			"gembokLevel": "battle",
			"handgrip-ak47": "battle",
			"handgrip-aliensMK41": "battle",
			"handgrip-bazooka": "battle",
			"handgrip-bushMasterXm15": "battle",
			"handgrip-electricGunTaserface ": "battle",
			"handgrip-laserGunMLG001": "battle",
			"handgrip-machineGunSaw249Light": "battle",
			"handgrip-shotgunMossberg": "battle",
			"handgrip-UZI": "battle",
			"health": "battle",
			"healthBarIcon": "battle",
			"icon drag1-0000": "battle",
			"icon drag2-0000": "battle",
			"icon drag3-0000": "battle",
			"karung-hit": "battle",
			"karung": "battle",
			"loading-01": "battle",
			"loadingStage - 01": "battle",
			"loadingStage - 02": "battle",
			"loadingStage - 03": "battle",
			"loadingStage - 04": "battle",
			"loadingStage - 05": "battle",
			"loadingStage - 06": "battle",
			"loadingStage - 07": "battle",
			"loadingStage - 08": "battle",
			"loadingStage - 09": "battle",
			"loadingStage - 10": "battle",
			"loadingStage - 11": "battle",
			"loadingStage - 12": "battle",
			"loadingStage - 13": "battle",
			"loadingStage - 14": "battle",
			"loadingStage - 15": "battle",
			"loading_0": "battle",
			"loading_1": "battle",
			"loading_2": "battle",
			"loading_3": "battle",
			"loading_4": "battle",
			"loading_5": "battle",
			"loading_6": "battle",
			"loading_7": "battle",
			"loading_8": "battle",
			"loading_9": "battle",
			"lost": "battle",
			"nuke Inactive": "battle",
			"nuke": "battle",
			"pauseBackground": "battle",
			"pauseClose": "battle",
			"pauseContinue": "battle",
			"pauseContinueKey": "battle",
			"pauseHome": "battle",
			"pauseHomeKey": "battle",
			"pauseIcon": "battle",
			"remoteSlayZ": "battle",
			"retry": "battle",
			"rocket barrage": "battle",
			"skill inactive": "battle",
			"skill_black-transparent": "battle",
			"skull 1": "battle",
			"skull 2": "battle",
			"skull 3": "battle",
			"L2001": "southAmerica",
			"L2001_batu1": "southAmerica",
			"L2001_batu2": "southAmerica",
			"L2001_bis": "southAmerica",
			"L2001_car1": "southAmerica",
			"L2001_car2": "southAmerica",
			"L2001_laut": "southAmerica",
			"L2001_pasir": "southAmerica",
			"L2001_pohon kanan": "southAmerica",
			"L2001_pohon kiri": "southAmerica",
			"L2001_police car": "southAmerica",
			"L2001_SmokeCar_1": "southAmerica",
			"L2001_SmokeCar_2": "southAmerica",
			"L2001_SmokeCar_3": "southAmerica",
			"L2001_SmokeCar_4": "southAmerica",
			"L2001_SmokeCar_5": "southAmerica",
			"L2001_SmokeCar_6": "southAmerica",
			"L2001_SmokeCar_7": "southAmerica",
			"L2001_SmokeCar_8": "southAmerica",
			"L2002-petir": "southAmerica",
			"L2002": "southAmerica",
			"L2002_batu": "southAmerica",
			"L2002_gedung kanan": "southAmerica",
			"L2002_gedung kiri": "southAmerica",
			"L2002_mobil": "southAmerica",
			"L2003": "southAmerica",
			"L2003_cahaya  rumah": "southAmerica",
			"L2003_gedung": "southAmerica",
			"L2003_lampu jalan": "southAmerica",
			"L2003_lampu mati": "southAmerica",
			"L2003_lampu nyala": "southAmerica",
			"L2003_mobil1-2": "southAmerica",
			"L2003_mobil1": "southAmerica",
			"L2003_mobilpolisi": "southAmerica",
			"L2003_tali atas": "southAmerica",
			"L2003_tembok kanan": "southAmerica",
			"L2003_tembok kiri": "southAmerica",
			"L2003_tempat sampah": "southAmerica",
			"L2003_tikus": "southAmerica",
			"L2004": "southAmerica",
			"L2004_batu 1": "southAmerica",
			"L2004_batu 2": "southAmerica",
			"L2004_patung emas 1": "southAmerica",
			"L2004_patung emas 2": "southAmerica",
			"L2004_patung emas3": "southAmerica",
			"L2004_pohon hijau": "southAmerica",
			"L2004_siluet pohon": "southAmerica",
			"L2004_tiang batu": "southAmerica",
			"L2005": "southAmerica",
			"L2005B": "southAmerica",
			"L2005B_batu 1kiri": "southAmerica",
			"L2005B_batu kanan dua": "southAmerica",
			"L2005B_batu kanan": "southAmerica",
			"L2005B_batu kiri2": "southAmerica",
			"L2005B_batu tengah": "southAmerica",
			"L2005B_pohon kanan": "southAmerica",
			"L2005B_pohon kiri": "southAmerica",
			"L2005Ledakan_0": "southAmerica",
			"L2005Ledakan_1": "southAmerica",
			"L2005Ledakan_2": "southAmerica",
			"L2005Ledakan_3": "southAmerica",
			"L2005Ledakan_4": "southAmerica",
			"L2005Ledakan_5": "southAmerica",
			"L2005Ledakan_6": "southAmerica",
			"L2005_lantai": "southAmerica",
			"L2005_sisi tangga": "southAmerica",
			"L2005_tiang 1": "southAmerica",
			"L2005_tiang 2": "southAmerica",
			"L2005_tiang 3": "southAmerica",
			"Z013_diagonal_walk_00": "southAmericaZombie",
			"Z013_diagonal_walk_01": "southAmericaZombie",
			"Z013_front_walk_00": "southAmericaZombie",
			"Z013_front_walk_01": "southAmericaZombie",
			"Z013_side_walk_00": "southAmericaZombie",
			"Z013_side_walk_01": "southAmericaZombie",
			"Z016_front_attack_0": "southAmericaZombie",
			"Z016_front_attack_1": "southAmericaZombie",
			"Z016_front_attack_2": "southAmericaZombie",
			"Z016_front_attack_3": "southAmericaZombie",
			"Z016_front_attack_4": "southAmericaZombie",
			"Z016_front_attack_5": "southAmericaZombie",
			"Z016_front_attack_6": "southAmericaZombie",
			"Z016_front_attack_7": "southAmericaZombie",
			"Z016_front_attack_8": "southAmericaZombie",
			"Z016_front_attack_9": "southAmericaZombie",
			"Z016_front_walk_0": "southAmericaZombie",
			"Z016_front_walk_1": "southAmericaZombie",
			"Z016_front_walk_2": "southAmericaZombie",
			"Z016_front_walk_3": "southAmericaZombie",
			"Z016_front_walk_4": "southAmericaZombie",
			"Z016_front_walk_5": "southAmericaZombie",
			"Z016_front_walk_6": "southAmericaZombie",
			"Z016_front_walk_7": "southAmericaZombie",
			"Z016_side_attack_0": "southAmericaZombie",
			"Z016_side_attack_1": "southAmericaZombie",
			"Z016_side_attack_2": "southAmericaZombie",
			"Z016_side_attack_3": "southAmericaZombie",
			"Z016_side_attack_4": "southAmericaZombie",
			"Z016_side_attack_5": "southAmericaZombie",
			"Z016_side_attack_6": "southAmericaZombie",
			"Z016_side_attack_7": "southAmericaZombie",
			"Z016_side_attack_8": "southAmericaZombie",
			"Z016_side_attack_9": "southAmericaZombie",
			"Z016_side_walk_0": "southAmericaZombie",
			"Z016_side_walk_1": "southAmericaZombie",
			"Z016_side_walk_2": "southAmericaZombie",
			"Z016_side_walk_3": "southAmericaZombie",
			"Z016_side_walk_4": "southAmericaZombie",
			"Z016_side_walk_5": "southAmericaZombie",
			"Z016_side_walk_6": "southAmericaZombie",
			"Z016_side_walk_7": "southAmericaZombie",
			"Z018_front_attack_0": "southAmericaZombie",
			"Z018_front_attack_1": "southAmericaZombie",
			"Z018_front_walk_0": "southAmericaZombie",
			"Z018_front_walk_1": "southAmericaZombie",
			"Z018_side_attack_0": "southAmericaZombie",
			"Z018_side_attack_1": "southAmericaZombie",
			"Z018_side_walk_0": "southAmericaZombie",
			"Z018_side_walk_1": "southAmericaZombie",
			"Z018_side_walk_2": "southAmericaZombie",
			"Z018_side_walk_3": "southAmericaZombie",
			"Z019_front_attack_0": "southAmericaZombie",
			"Z019_front_attack_1": "southAmericaZombie",
			"Z019_front_attack_2": "southAmericaZombie",
			"Z019_front_attack_3": "southAmericaZombie",
			"Z019_front_attack_4": "southAmericaZombie",
			"Z019_front_walk_0": "southAmericaZombie",
			"Z019_front_walk_1": "southAmericaZombie",
			"Z019_side_attack_0": "southAmericaZombie",
			"Z019_side_attack_1": "southAmericaZombie",
			"Z019_side_attack_2": "southAmericaZombie",
			"Z019_side_attack_3": "southAmericaZombie",
			"Z019_side_attack_4": "southAmericaZombie",
			"Z019_side_walk_0": "southAmericaZombie",
			"Z019_side_walk_1": "southAmericaZombie",
			"Z019_side_walk_2": "southAmericaZombie",
			"Z019_side_walk_3": "southAmericaZombie",
			"Z020_front_attack_0": "southAmericaZombie",
			"Z020_front_attack_1": "southAmericaZombie",
			"Z020_front_attack_2": "southAmericaZombie",
			"Z020_front_attack_3": "southAmericaZombie",
			"Z020_front_attack_4": "southAmericaZombie",
			"Z020_front_walk_0": "southAmericaZombie",
			"Z020_front_walk_1": "southAmericaZombie",
			"Z020_side_attack_0": "southAmericaZombie",
			"Z020_side_attack_1": "southAmericaZombie",
			"Z020_side_attack_2": "southAmericaZombie",
			"Z020_side_attack_3": "southAmericaZombie",
			"Z020_side_attack_4": "southAmericaZombie",
			"Z020_side_walk_0": "southAmericaZombie",
			"Z020_side_walk_1": "southAmericaZombie",
			"Z020_side_walk_2": "southAmericaZombie",
			"Z020_side_walk_3": "southAmericaZombie",
			"Z021_front_attack_0": "southAmericaZombie",
			"Z021_front_attack_1": "southAmericaZombie",
			"Z021_front_walk_0": "southAmericaZombie",
			"Z021_front_walk_1": "southAmericaZombie",
			"Z021_side_attack_0": "southAmericaZombie",
			"Z021_side_attack_1": "southAmericaZombie",
			"Z021_side_walk_0": "southAmericaZombie",
			"Z021_side_walk_1": "southAmericaZombie",
			"Z021_side_walk_2": "southAmericaZombie",
			"Z021_side_walk_3": "southAmericaZombie",
			"Z022_front_attack_0": "southAmericaZombie",
			"Z022_front_attack_1": "southAmericaZombie",
			"Z022_front_walk_0": "southAmericaZombie",
			"Z022_front_walk_1": "southAmericaZombie",
			"Z022_side_attack_0": "southAmericaZombie",
			"Z022_side_attack_1": "southAmericaZombie",
			"Z022_side_walk_0": "southAmericaZombie",
			"Z022_side_walk_1": "southAmericaZombie",
			"Z022_side_walk_2": "southAmericaZombie",
			"Z022_side_walk_3": "southAmericaZombie",
			"ZB04_fallen_0": "southAmericaZombieBos",
			"ZB04_fallen_1": "southAmericaZombieBos",
			"ZB04_fallen_2": "southAmericaZombieBos",
			"ZB04_fallen_3": "southAmericaZombieBos",
			"ZB04_fallen_4": "southAmericaZombieBos",
			"ZB04_fallen_smoke_0": "southAmericaZombieBos",
			"ZB04_fallen_smoke_1": "southAmericaZombieBos",
			"ZB04_fallen_smoke_2": "southAmericaZombieBos",
			"ZB04_fallen_smoke_3": "southAmericaZombieBos",
			"ZB04_fallen_smoke_4": "southAmericaZombieBos",
			"ZB04_front_attack_0": "southAmericaZombieBos",
			"ZB04_front_attack_1": "southAmericaZombieBos",
			"ZB04_front_attack_2": "southAmericaZombieBos",
			"ZB04_front_attack_3": "southAmericaZombieBos",
			"ZB04_front_attack_4": "southAmericaZombieBos",
			"ZB04_front_attack_5": "southAmericaZombieBos",
			"ZB04_front_attack_6": "southAmericaZombieBos",
			"ZB04_front_die_00": "southAmericaZombieBos",
			"ZB04_front_die_01": "southAmericaZombieBos",
			"ZB04_front_die_02": "southAmericaZombieBos",
			"ZB04_front_die_03": "southAmericaZombieBos",
			"ZB04_front_die_04": "southAmericaZombieBos",
			"ZB04_front_die_05": "southAmericaZombieBos",
			"ZB04_front_die_06": "southAmericaZombieBos",
			"ZB04_front_die_07": "southAmericaZombieBos",
			"ZB04_front_die_08": "southAmericaZombieBos",
			"ZB04_front_die_09": "southAmericaZombieBos",
			"ZB04_front_die_10": "southAmericaZombieBos",
			"ZB04_front_die_11": "southAmericaZombieBos",
			"ZB04_front_die_12": "southAmericaZombieBos",
			"ZB04_front_die_13": "southAmericaZombieBos",
			"ZB04_front_die_14": "southAmericaZombieBos",
			"ZB04_front_die_15": "southAmericaZombieBos",
			"ZB04_front_die_16": "southAmericaZombieBos",
			"ZB04_front_die_17": "southAmericaZombieBos",
			"ZB04_front_die_18": "southAmericaZombieBos",
			"ZB04_front_die_19": "southAmericaZombieBos",
			"ZB04_front_die_20": "southAmericaZombieBos",
			"ZB04_front_special_00": "southAmericaZombieBos",
			"ZB04_front_special_01": "southAmericaZombieBos",
			"ZB04_front_special_02": "southAmericaZombieBos",
			"ZB04_front_special_03": "southAmericaZombieBos",
			"ZB04_front_special_04": "southAmericaZombieBos",
			"ZB04_front_special_05": "southAmericaZombieBos",
			"ZB04_front_special_06": "southAmericaZombieBos",
			"ZB04_front_special_07": "southAmericaZombieBos",
			"ZB04_front_special_08": "southAmericaZombieBos",
			"ZB04_front_special_09": "southAmericaZombieBos",
			"ZB04_front_special_10": "southAmericaZombieBos",
			"ZB04_front_special_11": "southAmericaZombieBos",
			"ZB04_front_walkAttack_0": "southAmericaZombieBos",
			"ZB04_front_walkAttack_1": "southAmericaZombieBos",
			"ZB04_front_walkAttack_2": "southAmericaZombieBos",
			"ZB04_front_walkAttack_3": "southAmericaZombieBos",
			"ZB04_front_walkAttack_4": "southAmericaZombieBos",
			"ZB04_front_walkAttack_5": "southAmericaZombieBos",
			"ZB04_front_walkAttack_6": "southAmericaZombieBos",
			"ZB04_front_walkAttack_7": "southAmericaZombieBos",
			"ZB04_front_walk_0": "southAmericaZombieBos",
			"ZB04_front_walk_1": "southAmericaZombieBos",
			"ZB04_front_walk_2": "southAmericaZombieBos",
			"ZB04_front_walk_3": "southAmericaZombieBos",
			"ZB04_front_walk_4": "southAmericaZombieBos",
			"ZB04_front_walk_5": "southAmericaZombieBos",
			"ZB04_front_walk_6": "southAmericaZombieBos",
			"ZB04_front_walk_7": "southAmericaZombieBos",
			"ZB04_laser_0": "southAmericaZombieBos",
			"ZB04_laser_1": "southAmericaZombieBos",
			"ZB04_laser_2": "southAmericaZombieBos",
			"ZB04_laser_3": "southAmericaZombieBos",
			"ZB04_projectile": "southAmericaZombieBos",
			"ZB04_side_walk_00": "southAmericaZombieBos",
			"ZB04_side_walk_01": "southAmericaZombieBos",
			"ZB04_side_walk_02": "southAmericaZombieBos",
			"ZB04_side_walk_03": "southAmericaZombieBos",
			"ZB04_side_walk_04": "southAmericaZombieBos",
			"ZB04_side_walk_05": "southAmericaZombieBos",
			"ZB04_side_walk_06": "southAmericaZombieBos",
			"ZB04_side_walk_07": "southAmericaZombieBos",
			"ZB04_sparkLaser_0": "southAmericaZombieBos",
			"ZB04_sparkLaser_1": "southAmericaZombieBos",
			"ZB04_sparkLaser_2": "southAmericaZombieBos",
			"ZB04_sparkLaser_3": "southAmericaZombieBos",
			"ZB04_sparkLaser_4": "southAmericaZombieBos",
			"spark-blueOval-0": "battle",
			"spark-blueOval-1": "battle",
			"spark-blueOval-2": "battle",
			"spark-blueOval-3": "battle",
			"spark-flame-0": "battle",
			"spark-flame-1": "battle",
			"spark-flame-2": "battle",
			"spark-flame-3": "battle",
			"spark-flame-4": "battle",
			"spark-flameBig-0": "battle",
			"spark-flameBig-1": "battle",
			"spark-flameBig-2": "battle",
			"spark-flameBig-3": "battle",
			"spark-flameBig-4": "battle",
			"spark-orangeOval-0": "battle",
			"spark-orangeOval-1": "battle",
			"spark-orangeOval-2": "battle",
			"spark-orangeOval-3": "battle",
			"spark-standar-0": "battle",
			"spark-standar-1": "battle",
			"spark-standar-2": "battle",
			"spark-standar-3": "battle",
			"tombol arah": "battle",
			"UIG tambel": "battle",
			"UIG": "battle",
			"victory badge": "battle",
			"weapon-ak47": "battle",
			"weapon-bushMasterXm15": "battle",
			"weapon-machineGunSaw249Light": "battle",
			"weapon-taserFace": "battle",
			"weapon-UZI": "battle",
			"WP0000_handgrip": "battle",
			"WP0000_projectile": "battle",
			"WP0000_spark_0": "battle",
			"WP0000_spark_1": "battle",
			"WP0000_spark_2": "battle",
			"WP0000_spark_3": "battle",
			"WP0000_weapon": "battle",
			"WP0001_handgrip": "battle",
			"WP0001_projectile": "battle",
			"WP0001_spark_0": "battle",
			"WP0001_spark_1": "battle",
			"WP0001_spark_2": "battle",
			"WP0001_spark_3": "battle",
			"WP0001_weapon": "battle",
			"WP0002_handgrip": "battle",
			"WP0002_projectile": "battle",
			"WP0002_spark_0": "battle",
			"WP0002_spark_1": "battle",
			"WP0002_spark_2": "battle",
			"WP0002_spark_3": "battle",
			"WP0002_weapon": "battle",
			"WP0003_handgrip": "battle",
			"WP0003_projectile": "battle",
			"WP0003_spark_0": "battle",
			"WP0003_spark_1": "battle",
			"WP0003_spark_2": "battle",
			"WP0003_spark_3": "battle",
			"WP0003_spark_4": "battle",
			"WP0003_weapon": "battle",
			"WP0004_handgrip": "battle",
			"WP0004_projectile": "battle",
			"WP0004_spark_0": "battle",
			"WP0004_spark_1": "battle",
			"WP0004_spark_2": "battle",
			"WP0004_spark_3": "battle",
			"WP0004_spark_4": "battle",
			"WP0004_spark_5": "battle",
			"WP0004_spark_6": "battle",
			"WP0004_spark_7": "battle",
			"WP0004_spark_8": "battle",
			"WP0004_weapon": "battle",
			"WP0005_handgrip": "battle",
			"WP0005_projectile": "battle",
			"WP0005_spark_0": "battle",
			"WP0005_spark_1": "battle",
			"WP0005_spark_2": "battle",
			"WP0005_spark_3": "battle",
			"WP0005_spark_4": "battle",
			"WP0005_weapon": "battle",
			"WP0006_handgrip": "battle",
			"WP0006_projectile_0": "battle",
			"WP0006_projectile_1": "battle",
			"WP0006_projectile_2": "battle",
			"WP0006_projectile_3": "battle",
			"WP0006_projectile_4": "battle",
			"WP0006_projectile_5": "battle",
			"WP0006_projectile_6": "battle",
			"WP0006_spark_0": "battle",
			"WP0006_spark_1": "battle",
			"WP0006_spark_2": "battle",
			"WP0006_spark_3": "battle",
			"WP0006_spark_4": "battle",
			"WP0006_spark_5": "battle",
			"WP0006_weapon": "battle",
			"WP0007_handgrip": "battle",
			"WP0007_projectile_0": "battle",
			"WP0007_projectile_1": "battle",
			"WP0007_projectile_2": "battle",
			"WP0007_projectile_3": "battle",
			"WP0007_projectile_4": "battle",
			"WP0007_projectile_5": "battle",
			"WP0007_projectile_6": "battle",
			"WP0007_projectile_7": "battle",
			"WP0007_spark_0": "battle",
			"WP0007_spark_1": "battle",
			"WP0007_spark_2": "battle",
			"WP0007_spark_3": "battle",
			"WP0007_spark_4": "battle",
			"WP0007_spark_5": "battle",
			"WP0007_weapon": "battle",
			"WP0008_handgrip": "battle",
			"WP0008_projectile": "battle",
			"WP0008_spark_0": "battle",
			"WP0008_spark_1": "battle",
			"WP0008_spark_2": "battle",
			"WP0008_spark_3": "battle",
			"WP0008_weapon": "battle",
			"WP0009_handgrip": "battle",
			"WP0009_projectile": "battle",
			"WP0009_spark_1_0": "battle",
			"WP0009_spark_1_1": "battle",
			"WP0009_spark_1_2": "battle",
			"WP0009_spark_1_3": "battle",
			"WP0009_spark_1_4": "battle",
			"WP0009_spark_1_5": "battle",
			"WP0009_spark_1_6": "battle",
			"WP0009_spark_2_0": "battle",
			"WP0009_spark_2_1": "battle",
			"WP0009_spark_2_2": "battle",
			"WP0009_spark_2_3": "battle",
			"WP0009_spark_2_4": "battle",
			"WP0009_spark_2_5": "battle",
			"WP0009_spark_2_6": "battle",
			"WP0009_spark_2_7": "battle",
			"WP0009_spark_2_8": "battle",
			"WP0009_weapon": "battle",
			"ZB02Projectile": "battle",
			"ZB02_projectile": "battle",
			"blok item luar": "image",
			"coinIcon": "image",
			"credits_menu": "credits",
			"FireworksFX 1_0000": "credits",
			"FireworksFX 1_0001": "credits",
			"FireworksFX 1_0002": "credits",
			"FireworksFX 1_0003": "credits",
			"FireworksFX 1_0004": "credits",
			"FireworksFX 1_0005": "credits",
			"FireworksFX 1_0006": "credits",
			"FireworksFX 1_0007": "credits",
			"FireworksFX 1_0008": "credits",
			"FireworksFX 1_0009": "credits",
			"FireworksFX 1_0010": "credits",
			"FireworksFX 1_0011": "credits",
			"FireworksFX 1_0012": "credits",
			"FireworksFX 1_0013": "credits",
			"FireworksFX 1_0014": "credits",
			"FireworksFX 1_0015": "credits",
			"FireworksFX 1_0016": "credits",
			"FireworksFX 1_0017": "credits",
			"FireworksFX 1_0018": "credits",
			"FireworksFX 1_0019": "credits",
			"FireworksFX 1_0020": "credits",
			"FireworksFX 1_0021": "credits",
			"FireworksFX 1_0022": "credits",
			"FireworksFX 2_0000": "credits",
			"FireworksFX 2_0001": "credits",
			"FireworksFX 2_0002": "credits",
			"FireworksFX 2_0003": "credits",
			"FireworksFX 2_0004": "credits",
			"FireworksFX 2_0005": "credits",
			"FireworksFX 2_0006": "credits",
			"FireworksFX 2_0007": "credits",
			"FireworksFX 2_0008": "credits",
			"FireworksFX 2_0009": "credits",
			"FireworksFX 2_0010": "credits",
			"FireworksFX 2_0011": "credits",
			"FireworksFX 2_0012": "credits",
			"FireworksFX 2_0013": "credits",
			"FireworksFX 2_0014": "credits",
			"FireworksFX 2_0015": "credits",
			"FireworksFX 2_0016": "credits",
			"Victory war_0000": "credits",
			"Victory war_0001": "credits",
			"Victory war_0002": "credits",
			"Victory war_0003": "credits",
			"Victory war_0004": "credits",
			"Victory war_0005": "credits",
			"Victory war_0006": "credits",
			"Victory war_0007": "credits",
			"Victory war_0008": "credits",
			"Victory war_0009": "credits",
			"Victory war_0010": "credits",
			"Victory war_0011": "credits",
			"Victory war_0012": "credits",
			"Victory war_0013": "credits",
			"Victory war_0014": "credits",
			"Victory war_0015": "credits",
			"Victory war_0016": "credits",
			"Victory war_0017": "credits",
			"Victory war_0018": "credits",
			"Victory war_0019": "credits",
			"Victory war_0020": "credits",
			"Victory war_0021": "credits",
			"Victory war_0022": "credits",
			"Victory war_0023": "credits",
			"Victory war_0024": "credits",
			"Victory war_0025": "credits",
			"Victory war_0026": "credits",
			"Victory war_0027": "credits",
			"Victory war_0028": "credits",
			"Victory war_0029": "credits",
			"Victory war_0030": "credits",
			"Victory war_0031": "credits",
			"Victory war_0032": "credits",
			"Victory war_0033": "credits",
			"Victory war_0034": "credits",
			"Victory war_0035": "credits",
			"Victory war_0036": "credits",
			"Victory war_0037": "credits",
			"Victory war_0038": "credits",
			"Victory war_0039": "credits",
			"Victory war_0040": "credits",
			"Victory war_0041": "credits",
			"Victory war_0042": "credits",
			"Victory war_0043": "credits",
			"Victory war_0044": "credits",
			"Victory war_0045": "credits",
			"Victory war_0046": "credits",
			"Victory war_0047": "credits",
			"Victory war_0048": "credits",
			"Victory war_0049": "credits",
			"Victory war_0050": "credits",
			"Victory war_0051": "credits",
			"Victory war_0052": "credits",
			"bar putih panjang": "DailyQuest",
			"bar putih pendek": "DailyQuest",
			"claim": "DailyQuest",
			"dailiy quest judul": "DailyQuest",
			"daily quest judul": "DailyQuest",
			"daily quest": "DailyQuest",
			"gold icon": "DailyQuest",
			"icon skull kill zombie": "DailyQuest",
			"icon special weapon": "DailyQuest",
			"quest bar": "DailyQuest",
			"skull clear stage": "DailyQuest",
			"unclaim": "DailyQuest",
			"BG": "DailyReward",
			"black": "DailyReward",
			"CLAIM reward btn": "DailyReward",
			"CLAIMED": "DailyReward",
			"daily reward plate": "DailyReward",
			"glow box": "DailyReward",
			"panel hitam": "DailyReward",
			"scrollbar putih panjang": "DailyReward",
			"scrollbar putih pendek": "DailyReward",
			"stroke box": "DailyReward",
			"diamond icon": "image",
			"Niagaraphobia": "Font",
			"veteranTypewriter": "Font",
			"veteranTypewriterWhite": "Font",
			"gold": "image",
			"L2003_mobilpolisi-2": "image",
			"ads_button": "lobi",
			"back_ads_button": "lobi",
			"bawah topslayers": "lobi",
			"bg_online_lobby": "lobi",
			"bg_online_room": "lobi",
			"bottom_bar": "lobi",
			"box leaderboard": "lobi",
			"box-player1": "lobi",
			"box-player2": "lobi",
			"button_battle": "lobi",
			"button_cancel": "lobi",
			"button_ready": "lobi",
			"button_share_fb": "lobi",
			"gembok_mini": "lobi",
			"header block": "lobi",
			"head_survival": "lobi",
			"head_versus": "lobi",
			"icon_ranked": "lobi",
			"rankNumber": "lobi",
			"survivor_bg": "lobi",
			"survivor_island": "lobi",
			"survivor_island_off": "lobi",
			"survivor_multi": "lobi",
			"survivor_multi_glow": "lobi",
			"survivor_solo": "lobi",
			"survivor_solo_glow": "lobi",
			"top slayers 2": "lobi",
			"top slayers": "lobi",
			"topslayers2": "lobi",
			"topslayers3": "lobi",
			"top_bar": "lobi",
			"UI_checkcircle": "lobi",
			"UI_checkmark": "lobi",
			"first time reward": "LoginReward",
			"glow 2": "LoginReward",
			"glow small": "LoginReward",
			"kotak": "LoginReward",
			"MK41": "LoginReward",
			"stroke box 2": "LoginReward",
			"stroke box big": "LoginReward",
			"unclaim 2": "LoginReward",
			"diamondsrewardicon": "RewardIcon",
			"diamondsrewardicon2": "RewardIcon",
			"goldrewardicon": "RewardIcon",
			"red splat": "RewardIcon",
			"share_Picture": "share",
			"arrowShop": "Shop",
			"arrowShopUpgrade": "Shop",
			"background shop (1)": "Shop",
			"bar panjang": "Shop",
			"bar pendek": "Shop",
			"backbutt": "ButtonLuar",
			"buy copy": "ButtonLuar",
			"buy grey": "ButtonLuar",
			"diamondbutt": "ButtonLuar",
			"goldbutt": "ButtonLuar",
			"gunbutt": "ButtonLuar",
			"setting": "ButtonLuar",
			"topup": "ButtonLuar",
			"upgrade": "ButtonLuar",
			"are ye sure": "Confirmation",
			"background buy (1)": "Confirmation",
			"background buy": "Confirmation",
			"cancel": "Confirmation",
			"stempel-0001": "Stamp",
			"stempel-0002": "Stamp",
			"stempel-0003": "Stamp",
			"stempel-0004": "Stamp",
			"stempel-0005": "Stamp",
			"stempel-0006": "Stamp",
			"stempel-0007": "Stamp",
			"stempel-0008": "Stamp",
			"stempel-0009": "Stamp",
			"stempel-0010": "Stamp",
			"stempel-0011": "Stamp",
			"stempel-0012": "Stamp",
			"stempel-0013": "Stamp",
			"stempel-0014": "Stamp",
			"stempel-0015": "Stamp",
			"stempel-0016": "Stamp",
			"stempel-0017": "Stamp",
			"stempel-0018": "Stamp",
			"stempel-0019": "Stamp",
			"yes": "Confirmation",
			"DragArea": "Shop",
			"DragArea2": "Shop",
			"AK 47": "icon",
			"bag diamond 2": "icon",
			"bag diamond": "icon",
			"bushmaster xm15": "icon",
			"diamonds 1": "icon",
			"diamonds 2": "icon",
			"diamonds 3": "icon",
			"kotak berlian": "icon",
			"minigun  M132": "icon",
			"MK 41 alien": "icon",
			"MLG 001 Laser": "icon",
			"SAW m249": "icon",
			"shotgun mossberg": "icon",
			"taser face": "icon",
			"UZI": "icon",
			"xm 53 rocket launcher": "icon",
			"kertas doang": "Shop",
			"kertas shop": "Shop",
			"select item": "Shop",
			"selectFrame": "Shop",
			"shop-new bg polos": "Shop",
			"shop-new bg": "Shop",
			"shopBackground": "Shop",
			"logo": "splashScreen",
			"splashScreen-00": "splashScreen",
			"splashScreen-01": "splashScreen",
			"splashScreen-02": "splashScreen",
			"splashScreen-03": "splashScreen",
			"splashScreen-04": "splashScreen",
			"splashScreen-05": "splashScreen",
			"splashScreen-06": "splashScreen",
			"splashScreen-07": "splashScreen",
			"splashScreen-08": "splashScreen",
			"splashScreen-09": "splashScreen",
			"splashScreen-10": "splashScreen",
			"splashScreen-11": "splashScreen",
			"splashScreen-12": "splashScreen",
			"splashScreen-13": "splashScreen",
			"splashScreen-14": "splashScreen",
			"splashScreen-15": "splashScreen",
			"splashScreen-16": "splashScreen",
			"splashScreen-17": "splashScreen",
			"splashScreen-18": "splashScreen",
			"splashScreen-19": "splashScreen",
			"splashScreen-20": "splashScreen",
			"splashScreen-21": "splashScreen",
			"splashScreen-22": "splashScreen",
			"splashScreen-23": "splashScreen",
			"Background_stage": "stageMenu",
			"Button_back": "stageMenu",
			"Button_play": "stageMenu",
			"Button_settings_s": "stageMenu",
			"Frame_stage": "stageMenu",
			"Frame_stageOuterglow": "stageMenu",
			"L1001_mini": "stageMenu",
			"L1002_mini": "stageMenu",
			"L1003_mini": "stageMenu",
			"L1004_mini": "stageMenu",
			"L1005_mini": "stageMenu",
			"L1005_miniBos": "stageMenu",
			"L2001_mini": "stageMenu",
			"L2002_mini": "stageMenu",
			"L2003_mini": "stageMenu",
			"L2004_mini": "stageMenu",
			"L2005_mini": "stageMenu",
			"L2005_miniBos": "stageMenu",
			"L3001_mini": "stageMenu",
			"L3002_mini": "stageMenu",
			"L3003_mini": "stageMenu",
			"L3004_mini": "stageMenu",
			"L3005_mini": "stageMenu",
			"L3005_miniBos": "stageMenu",
			"L4001_mini": "stageMenu",
			"L4002_mini": "stageMenu",
			"L4003_mini": "stageMenu",
			"L4004_mini": "stageMenu",
			"L4005_mini": "stageMenu",
			"L4005_miniBos": "stageMenu",
			"L5001_mini": "stageMenu",
			"L5002_mini": "stageMenu",
			"L5003_mini": "stageMenu",
			"L5004_mini": "stageMenu",
			"L5005_mini": "stageMenu",
			"L5005_miniBos": "stageMenu",
			"L6001_mini": "stageMenu",
			"L6002_mini": "stageMenu",
			"L6003B_mini": "stageMenu",
			"L6003_mini": "stageMenu",
			"shading": "stageMenu",
			"skull kanan": "stageMenu",
			"skull kiri": "stageMenu",
			"skull tengah": "stageMenu",
			"StageMenuPanah": "stageMenu",
			"BG_black-transparent": "startMenu",
			"button_fb": "startMenu",
			"button_insta": "startMenu",
			"button_start": "startMenu",
			"button_twitter": "startMenu",
			"Img_logo": "startMenu",
			"background blok upgrade": "UpgradeWeapon",
			"background upgrade blok": "UpgradeWeapon",
			"hitam": "UpgradeWeapon",
			"locked": "UpgradeWeapon",
			"panel hitam upgrade": "UpgradeWeapon",
			"panel upgrade": "UpgradeWeapon",
			"plus active": "UpgradeWeapon",
			"plus inactive": "UpgradeWeapon",
			"putih panjang": "UpgradeWeapon",
			"putih pendek": "UpgradeWeapon",
			"strip item": "UpgradeWeapon",
			"upgrade weapon": "UpgradeWeapon",
			"weapon plate": "UpgradeWeapon",
			"yellow strip": "UpgradeWeapon",
			"achievement": "worldMap",
			"arrowReward": "worldMap",
			"ava-1": "worldMap",
			"ava-2": "worldMap",
			"ava-3": "worldMap",
			"Bar_bottom": "worldMap",
			"Bar_top": "worldMap",
			"Button_achievement": "worldMap",
			"Button_avatar": "worldMap",
			"Button_energy": "worldMap",
			"Button_mission": "worldMap",
			"Button_settings": "worldMap",
			"Button_shop": "worldMap",
			"Button_topup": "worldMap",
			"daily reward": "worldMap",
			"home ui": "worldMap",
			"Land_1_disable": "worldMap",
			"Land_1_enable": "worldMap",
			"Land_2_disable": "worldMap",
			"Land_2_enable": "worldMap",
			"Land_3_disable": "worldMap",
			"Land_3_enable": "worldMap",
			"Land_4_disable": "worldMap",
			"Land_4_enable": "worldMap",
			"Land_5_disable": "worldMap",
			"Land_5_enable": "worldMap",
			"Land_6_disable": "worldMap",
			"Land_6_enable": "worldMap",
			"log in reward": "worldMap",
			"Map_background": "worldMap",
			"notif": "worldMap",
			"settings_xButton": "worldMap",
			"Setting_bar_back": "worldMap",
			"Setting_frame2": "worldMap",
			"Setting_radio": "worldMap",
			"User_ava": "worldMap",
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
        // Put user code here //
        
        //  End of user code  //
		me.pool.register('spriteTP', game.object.__spriteTP);
		me.state.change("splashScreen");
	}
};
